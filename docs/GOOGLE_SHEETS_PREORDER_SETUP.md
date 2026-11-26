# Hướng dẫn thiết lập Google Sheets, Google Apps Script & API đặt trước ADIGO

Tài liệu này hướng dẫn từng bước kết nối form **Đặt trước sản phẩm gà thịt** trên landing page ADIGO với **Google Sheets** thông qua endpoint trung gian `/api/preorders` và **Google Apps Script (`Code.gs`)**.

---

## Bước 1: Tạo Google Spreadsheet riêng tư

1. Truy cập Google Drive bằng tài khoản Google quản trị nội bộ và tạo một Google Sheets mới.
2. Đặt tên Spreadsheet chính xác là:
   ```
   ADIGO – QUẢN LÝ ĐẶT TRƯỚC
   ```
3. Giữ quyền chia sẻ ở chế độ **Riêng tư (Restricted)** — chỉ cấp quyền cho nhân sự kinh doanh/vận hành phụ trách xử lý đơn đặt trước.
4. Sao chép **Spreadsheet ID** từ thanh địa chỉ trình duyệt:
   ```
   https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit
   ```

---

## Bước 2: Cài đặt Google Apps Script (`Code.gs`)

1. Trong Google Sheets vừa tạo, mở menu **Tiện ích mở rộng (Extensions) → Apps Script**.
2. Xóa toàn bộ mã mặc định trong `Code.gs` và dán toàn bộ nội dung từ file `google-apps-script/Code.gs` của dự án.
3. Nhấn **Lưu (Ctrl + S)**.

### Cấu hình Script Properties (Bảo mật bí mật phía Apps Script)

1. Ở thanh bên trái Apps Script, chọn biểu tượng bánh răng **Cài đặt dự án (Project Settings)**.
2. Kéo xuống mục **Thuộc tính tập lệnh (Script Properties) → Thêm thuộc tính tập lệnh**:
   - `SPREADSHEET_ID`: Dán ID của Google Spreadsheet vừa tạo (nếu script tạo từ chính file Sheets thì vẫn nên điền rõ để tránh nhầm).
   - `WEBHOOK_SECRET`: Tạo một chuỗi ngẫu nhiên bảo mật (ví dụ `adigo_sheet_wh_8f9c2a...` dài tối thiểu 32 ký tự). **Không chia sẻ chuỗi này ra frontend.**
3. Nhấn **Lưu thuộc tính tập lệnh**.

### Khởi tạo tự động cấu trúc 24 cột & định dạng bảng

1. Quay lại tab **Trình chỉnh sửa (Editor)** của Apps Script.
2. Trên thanh công cụ trên cùng, chọn hàm `setupPreorderSheet` và nhấn **Chạy (Run)**.
3. Cấp quyền truy cập Google Sheets theo hướng dẫn trên màn hình.
4. Quay lại Google Sheets kiểm tra: worksheet **`PREORDERS`** đã được tạo tự động với đủ **24 cột**, hàng tiêu đề xanh navy chữ trắng, freeze row 1, filter, định dạng cột SĐT dạng văn bản (`@`), dropdown 6 trạng thái và conditional formatting.

---

## Bước 3: Triển khai Web App Google Apps Script

1. Trong Apps Script Editor, bấm nút **Triển khai (Deploy) → Tùy chọn triển khai mới (New deployment)**.
2. Chọn loại: **Ứng dụng web (Web app)**.
3. Thiết lập:
   - **Mô tả**: `ADIGO Preorders Webhook v1`
   - **Thực thi dưới tên (Execute as)**: **Tôi (Me)** — để script ghi được vào Google Sheet riêng tư ngay cả khi khách vãng lai không đăng nhập.
   - **Ai có quyền truy cập (Who has access)**: **Bất kỳ ai (Anyone)** — để backend `/api/preorders` gọi POST qua HTTPS (bảo vệ bằng `WEBHOOK_SECRET`).
4. Bấm **Triển khai (Deploy)** và sao chép URL dạng:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

> **Lưu ý khi chỉnh sửa `Code.gs` sau này**: Mỗi lần sửa code trong Apps Script, cần vào **Triển khai → Quản lý các lần triển khai → Chỉnh sửa → Phiên bản mới** thì URL mới cập nhật code mới.

---

## Bước 4: Cấu hình biến môi trường phía server

Đặt các biến sau vào **Secrets / Environment Variables** trên môi trường chạy Node/Serverless (tuyệt đối **không** dùng tiền tố `VITE_` vì đây là bí mật phía server):

```env
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
PREORDER_WEBHOOK_SECRET=adigo_sheet_wh_8f9c2a...
CAMPAIGN_PREORDER_RATE_LIMIT=10
```

---

## Bước 5: Chạy và triển khai API `/api/preorders`

### Cloudflare Workers (website adigo.organicvn.com)

Không triển khai riêng thư mục `dist` bằng chế độ chỉ phục vụ assets: chế độ đó
không chạy `server.ts` hoặc `api/preorders.ts`, nên `/api/preorders` sẽ không có API.

Repository có `worker.ts` và `wrangler.jsonc` để phục vụ API cùng website:

- Build command: `npm run build`.
- Deploy command: `npx wrangler deploy` (giữ cấu hình Wrangler trong repository).
- Nếu log chuyển thẳng từ cài dependencies sang deploy và báo thiếu `dist`,
  vào **Settings → Builds → Build configuration** và đặt **Build command** là
  `npm run build`, giữ **Deploy command** là `npx wrangler deploy`, rồi build lại.
- Có thể dùng cách gộp: để trống **Build command** và đặt **Deploy command** là
  `npm run deploy`. Script này luôn build website trước khi gọi Wrangler.
- Source dùng mô hình **Worker + Static Assets** của Cloudflare:
  `main: "worker.ts"`, `assets.directory: "./dist"`, `assets.binding: "ASSETS"`.
  Các route `/api/*` chạy Worker trước; các trang còn lại được phục vụ từ assets.
  `upload_source_maps: true` giúp Cloudflare ánh xạ lỗi về mã Worker gốc.
- Khuyến nghị dùng `npm run deploy` làm Deploy command: script chọn rõ
  `wrangler.jsonc`, tránh triển khai nhầm cấu hình chỉ có assets. Dùng
  `npm run deploy:check` để build và đóng gói thử, không triển khai.
- Nếu Settings vẫn báo **only has static assets**, kiểm tra deployment production
  mới nhất đã triển khai đúng `worker.ts` và Worker đang chọn có domain
  `adigo.organicvn.com`. Thay đổi source chưa có hiệu lực trước khi deploy thành công.
- Trong **Worker → Settings → Variables and Secrets**, đặt hai secret runtime:
  `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` (URL `/exec` đã triển khai ở Bước 3) và
  `PREORDER_WEBHOOK_SECRET` (trùng `WEBHOOK_SECRET` trong Apps Script).
- Không chỉ đặt hai giá trị này trong biến môi trường của bước build; API cần
  đọc chúng khi xử lý yêu cầu trên Worker. Không dùng tiền tố `VITE_`.
- `CAMPAIGN_PREORDER_RATE_LIMIT` là biến runtime tùy chọn, mặc định `10`.
- Sau triển khai, `/api/preorders/health` phải trả JSON
  `{"ok":true,"configured":true}`. Nếu nhận HTML thì Worker chưa được triển khai
  hoặc route API đang bị cấu hình phục vụ website tĩnh; nếu `configured:false`
  thì kiểm tra URL webhook và secret runtime.

Health check chỉ xác nhận có cấu hình đúng định dạng. Để xác nhận quyền ghi
Google Sheets và webhook hoạt động, cần kiểm tra một đơn đặt trước thực tế theo
Bước 6. Kiểm thử tự động dùng dữ liệu mô phỏng và không ghi lên Google Sheets:
`node --import tsx --test tests/preorder.test.ts`.

Giới hạn tốc độ và bộ nhớ chống gửi trùng trong Worker chỉ áp dụng trong mỗi
isolate; Apps Script tiếp tục chịu trách nhiệm chống ghi trùng theo `requestId`
trên Google Sheets.

### Cách A: Hosting Node.js Full-Stack (khuyến nghị — có sẵn `server.ts`)
- Chế độ phát triển: `npm run dev` (chạy `tsx server.ts`, tự phục vụ `/api/preorders` + Vite HMR/middleware).
- Build & chạy production:
  ```bash
  npm run build
  NODE_ENV=production npm start
  ```

### Cách B: Hosting Website Tĩnh + Serverless Function (Vercel / Netlify)
Nếu bạn host frontend tĩnh (`dist/`) trên Vercel hoặc nền tảng serverless tương tự:
- File `api/preorders.ts` đã được tạo sẵn theo chuẩn Serverless Function gọi chung `handlePreorderSubmission` từ `server/preorderService.ts`.
- Khai báo `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` và `PREORDER_WEBHOOK_SECRET` trong phần **Environment Variables** của dự án Vercel/Serverless.
- Kiểm tra `src/config/campaignConfig.ts` giữ nguyên `apiEndpoint: '/api/preorders'`.

---

## Bước 6: Kiểm tra đơn đặt trước thực tế (End-to-End Test)

1. Kiểm tra trạng thái kết nối API (không lộ dữ liệu khách hàng):
   ```bash
   curl https://<domain-cua-ban>/api/preorders/health
   # Kết quả mong đợi: {"ok":true,"configured":true}
   ```
2. Mở landing page, cuộn xuống **Campaign Banner Đỏ – Vàng** giữa Hero và Section 01, bấm **`Đặt trước ngay →`**.
3. Chọn số lượng (ví dụ `2`), điền:
   - Họ và tên: `Nguyễn Văn A`
   - Số điện thoại: `0912345678`
   - Địa chỉ: `Phường Dịch Vọng, Cầu Giấy, Hà Nội`
   - Hình thức nhận hàng: `Giao hàng tận nơi`
   - Tick đồng ý Chính sách bảo mật và bấm **`Xác nhận đặt trước →`**.
4. Xác nhận:
   - Màn hình chuyển sang **Đặt trước thành công!** kèm mã `ADG-YYYYMMDD-0001`.
   - Trong Google Sheets tab `PREORDERS`, dòng mới hiển thị đầy đủ 24 cột, SĐT giữ nguyên số `0` đầu (`0912345678`), Trạng thái là `Chờ xác nhận`.
5. Thử gửi trùng hoặc bấm đúp nút gửi: hệ thống trả lại cùng mã `ADG-YYYYMMDD-0001` và **không tạo dòng trùng** trong Google Sheets.
6. Thử nhập chuỗi bắt đầu bằng `=1+1` vào ô ghi chú: Google Sheets lưu thành `'=1+1` dạng văn bản an toàn, không thực thi công thức.
