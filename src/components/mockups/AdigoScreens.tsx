import { ResponsiveImage } from '../ResponsiveImage';
import React, { useState } from 'react';
import {
  Search,
  QrCode,
  MapPin,
  Heart,
  ChevronRight,
  CheckCircle2,
  Package,
  Store,
  Sparkles,
  Plus,
  Minus,
  ShieldCheck,
  Clock,
  Tag,
  SlidersHorizontal,
  ArrowRight,
  Gift,
  Users,
} from 'lucide-react';
import { AdigoLogo } from '../BrandLogos';
import { ADIGO_CONFIG } from '../../config/adigoConfig';

/* 1. Trang chủ ứng dụng */
export const HomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-3.5 pb-5">
      {/* App Header */}
      <div className="flex items-center justify-between">
        <AdigoLogo compact className="scale-90 origin-left" />
        <div className="flex items-center gap-1.5 text-[10px] text-[#4A6075] font-medium">
          <MapPin className="w-3 h-3 text-[#0A74DA]" />
          <span className="truncate max-w-[125px]">Quận 3 · TP. Hồ Chí Minh</span>
        </div>
      </div>

      {/* Search + QR */}
      <div className="flex items-center gap-2">
        <div className="flex-1 flex items-center gap-2 bg-white border border-[#E2ECF4] rounded-xl px-2.5 py-2 text-[11px] text-[#4A6075]">
          <Search className="w-3.5 h-3.5 text-[#0A74DA]" />
          <span className="truncate">Tìm sản phẩm, thương hiệu...</span>
        </div>
        <div className="w-8 h-8 rounded-xl bg-[#0A74DA] text-white flex items-center justify-center shrink-0">
          <QrCode className="w-4 h-4" />
        </div>
      </div>

      {/* Hero Promo Banner */}
      <div className="rounded-2xl bg-gradient-to-br from-[#0A74DA] to-[#00A896] p-3.5 text-white">
        <p className="text-[9px] font-medium text-white/80">Hệ sinh thái ADIGO</p>
        <p className="font-display text-sm font-bold leading-snug mt-0.5">
          Thực phẩm tươi mỗi ngày
        </p>
        <p className="text-[10px] text-white/90 mt-1">
          Chọn giao tận nơi hoặc nhận tại ADIGO Mart gần bạn.
        </p>
        <div className="mt-2.5 inline-flex items-center gap-1 bg-white text-[#0A74DA] text-[10px] font-semibold px-2.5 py-1 rounded-lg">
          <span>Khám phá ngay</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>

      {/* Quick Categories */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-display text-xs font-bold text-[#0C1B2A]">Danh mục quan tâm</span>
          <span className="text-[10px] font-medium text-[#0A74DA]">Xem tất cả</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 text-center">
          {[
            { name: 'Rau củ', color: 'bg-[#ECFDF5] text-[#16A34A]' },
            { name: 'Thịt tươi', color: 'bg-[#EFF6FF] text-[#0A74DA]' },
            { name: 'Trái cây', color: 'bg-[#F0FDFA] text-[#00A896]' },
            { name: 'Thảo dược', color: 'bg-[#F1F5F9] text-[#0B1F33]' },
          ].map((cat) => (
            <div key={cat.name} className="bg-white border border-[#E2ECF4] rounded-xl py-2 px-1">
              <div className={`w-6 h-6 mx-auto rounded-lg ${cat.color} flex items-center justify-center mb-1`}>
                <span className="w-2 h-2 rounded-full bg-current" />
              </div>
              <span className="text-[9px] font-medium text-[#0C1B2A] block truncate">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Curated Products */}
      <div>
        <span className="font-display text-xs font-bold text-[#0C1B2A] block mb-2">Gợi ý hôm nay</span>
        <div className="grid grid-cols-2 gap-2">
          {ADIGO_CONFIG.marketplaceProducts.slice(0, 2).map((item) => (
            <div key={item.id} className="bg-white border border-[#E2ECF4] rounded-xl p-2 flex flex-col gap-1.5">
              <div className="h-16 rounded-lg bg-gradient-to-br from-[#F0F6FA] to-[#E6F4F1] flex items-center justify-center relative">
                <Package className="w-6 h-6 text-[#0A74DA]/70" />
              </div>
              <p className="text-[10px] font-semibold text-[#0C1B2A] leading-tight line-clamp-2">{item.name}</p>
              <p className="text-[9px] text-[#4A6075] truncate">{item.brand}</p>
              <div className="flex items-center justify-between mt-auto pt-0.5">
                <span className="text-[11px] font-bold text-[#0A74DA] tabular-nums">{item.price}</span>
                <span className="w-5 h-5 rounded-md bg-[#0A74DA] text-white flex items-center justify-center">
                  <Plus className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* 2. Khám phá sản phẩm */
export const ExploreScreen: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('Tất cả');
  const cats = ['Tất cả', 'Rau củ', 'Thịt tươi', 'Trái cây'];

  return (
    <div className="flex flex-col gap-3 p-3.5 pb-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-bold text-[#0C1B2A]">Khám phá</span>
        <SlidersHorizontal className="w-4 h-4 text-[#4A6075]" />
      </div>

      {/* Filter Chips (Interactive Segmented Buttons) */}
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-0.5">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setSelectedCat(c)}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedCat === c
                ? 'bg-[#0B1F33] text-white'
                : 'bg-white border border-[#E2ECF4] text-[#4A6075]'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Highlighted Storefront Strip */}
      <div className="bg-white border border-[#E2ECF4] rounded-xl p-2.5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-semibold text-[#0A74DA]">Gian hàng nổi bật</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#4A6075]" />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] text-[#16A34A] flex items-center justify-center shrink-0">
            <Store className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold text-[#0C1B2A] truncate">Nông sản Cao Nguyên</p>
            <p className="text-[9px] text-[#4A6075] truncate">Lâm Đồng · Rau củ theo mùa</p>
          </div>
        </div>
      </div>

      {/* Product Feed */}
      <div className="flex flex-col gap-2">
        {ADIGO_CONFIG.marketplaceProducts.slice(0, 4).map((p) => (
          <div key={p.id} className="bg-white border border-[#E2ECF4] rounded-xl p-2.5 flex items-center gap-2.5">
            <div className="w-12 h-12 rounded-lg bg-[#F5F9FC] border border-[#E2ECF4] flex items-center justify-center shrink-0">
              <Package className="w-5 h-5 text-[#00A896]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-[#0C1B2A] truncate">{p.name}</p>
              <p className="text-[9px] text-[#4A6075] truncate">{p.brand} · {p.unit}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[11px] font-bold text-[#0A74DA] tabular-nums">{p.price}</span>
                <Heart className="w-3.5 h-3.5 text-[#4A6075]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 3. Tìm kiếm thông minh */
export const SmartSearchScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-3.5 pb-5">
      <div className="flex items-center gap-2 bg-white border border-[#0A74DA] rounded-xl px-2.5 py-2 shadow-xs">
        <Search className="w-3.5 h-3.5 text-[#0A74DA] shrink-0" />
        <span className="text-[11px] font-medium text-[#0C1B2A] truncate">Nguyên liệu nấu canh chua</span>
      </div>

      <div className="bg-white border border-[#E2ECF4] rounded-xl p-2.5">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#00A896] mb-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Gợi ý theo nhu cầu</span>
        </div>
        <p className="text-[10px] text-[#4A6075] leading-relaxed">
          Tìm thấy nhóm nguyên liệu tươi phù hợp cho bữa ăn 4 người:
        </p>
        <div className="mt-2 flex flex-col gap-1.5">
          {[
            { name: 'Cà chua bi đỏ hộp 300g', price: '32.000đ' },
            { name: 'Cá hồi phi lê cắt khúc 300g', price: '158.000đ' },
            { name: 'Rau thơm & bạc hà tươi', price: '18.000đ' },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between py-1 border-b border-[#E2ECF4] last:border-0">
              <span className="text-[10px] font-medium text-[#0C1B2A] truncate pr-2">{item.name}</span>
              <span className="text-[10px] font-bold text-[#0A74DA] tabular-nums shrink-0">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span className="text-[10px] font-semibold text-[#4A6075] block mb-1.5">Tìm kiếm phổ biến</span>
        <div className="flex flex-wrap gap-1.5">
          {['Trái cây theo mùa', 'Thịt lợn cắt sẵn', 'Trà thảo mộc', 'Trứng gà ta'].map((q) => (
            <span key={q} className="text-[10px] text-[#0C1B2A] bg-white border border-[#E2ECF4] rounded-lg px-2 py-1">
              {q}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* 4. Danh mục sản phẩm */
export const CategoryScreen: React.FC = () => {
  const groups = [
    { name: 'Thực phẩm tươi sống', count: 'Đa dạng mỗi ngày', tone: 'bg-[#EFF6FF] text-[#0A74DA]' },
    { name: 'Thịt gia cầm & Thịt lợn', count: 'Đóng khay sạch', tone: 'bg-[#F0FDFA] text-[#00A896]' },
    { name: 'Rau củ & Trái cây', count: 'Theo mùa vụ', tone: 'bg-[#ECFDF5] text-[#16A34A]' },
    { name: 'Sản phẩm thảo dược', count: 'Trà & nguyên liệu', tone: 'bg-[#F8FAFC] text-[#0B1F33]' },
    { name: 'Nông sản & Chế biến', count: 'Tiện lợi tại nhà', tone: 'bg-[#EFF6FF] text-[#0A74DA]' },
  ];

  return (
    <div className="flex flex-col gap-2.5 p-3.5 pb-5">
      <span className="font-display text-sm font-bold text-[#0C1B2A]">Danh mục sản phẩm</span>
      <div className="flex flex-col gap-2">
        {groups.map((g) => (
          <div key={g.name} className="bg-white border border-[#E2ECF4] rounded-xl p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className={`w-8 h-8 rounded-lg ${g.tone} flex items-center justify-center shrink-0`}>
                <Package className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-[#0C1B2A] truncate">{g.name}</p>
                <p className="text-[9px] text-[#4A6075]">{g.count}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#4A6075] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

/* 5. Chi tiết sản phẩm */
export const ProductDetailScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-3.5 pb-5">
      <div className="h-32 rounded-2xl overflow-hidden border border-[#E2ECF4] relative bg-white">
        <ResponsiveImage
          src={ADIGO_CONFIG.images.traceabilityProduce}
          alt="Cà chua bi đỏ đóng hộp"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium text-[#00A896]">Nông sản Cao Nguyên · Lâm Đồng</span>
          <Heart className="w-3.5 h-3.5 text-[#4A6075]" />
        </div>
        <h4 className="font-display text-sm font-bold text-[#0C1B2A] mt-0.5">
          Cà chua bi đỏ đóng hộp
        </h4>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-sm font-extrabold text-[#0A74DA] tabular-nums">32.000đ</span>
          <span className="text-[10px] text-[#4A6075]">Hộp 300g</span>
        </div>
      </div>

      {/* Origin card */}
      <div className="bg-white border border-[#E2ECF4] rounded-xl p-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <QrCode className="w-4 h-4 text-[#0A74DA]" />
          <div>
            <p className="text-[10px] font-semibold text-[#0C1B2A]">Thông tin nguồn gốc</p>
            <p className="text-[9px] text-[#4A6075]">Xem hồ sơ lô & bảo quản</p>
          </div>
        </div>
        <ChevronRight className="w-3.5 h-3.5 text-[#4A6075]" />
      </div>

      {/* Usage / storage note */}
      <div className="bg-white border border-[#E2ECF4] rounded-xl p-2.5 text-[10px] text-[#4A6075] leading-relaxed">
        <span className="font-semibold text-[#0C1B2A] block mb-0.5">Hướng dẫn bảo quản</span>
        Giữ ở ngăn mát tủ lạnh 5–8°C, rửa sạch nhẹ nhàng trước khi dùng trực tiếp hoặc chế biến.
      </div>

      <button
        type="button"
        className="w-full py-2 rounded-xl bg-[#0A74DA] text-white text-[11px] font-semibold text-center"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

/* 6. Gian hàng thương hiệu */
export const BrandStoreScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-3.5 pb-5">
      <div className="rounded-2xl bg-[#0B1F33] p-3 text-white">
        <p className="text-[9px] text-white/70">Gian hàng thương hiệu</p>
        <p className="font-display text-sm font-bold mt-0.5">Thảo mộc Bách Diệp</p>
        <p className="text-[10px] text-white/80 mt-0.5">Thái Nguyên · Trà & thảo dược tự nhiên</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          { name: 'Trà hoa cúc gừng ấm', price: '92.000đ' },
          { name: 'Trà xanh Shan tuyết', price: '135.000đ' },
          { name: 'Bột nghệ mật ong viên', price: '118.000đ' },
          { name: 'Gói thảo mộc xông nhà', price: '65.000đ' },
        ].map((p) => (
          <div key={p.name} className="bg-white border border-[#E2ECF4] rounded-xl p-2 flex flex-col gap-1">
            <div className="h-12 rounded-lg bg-[#F0FDFA] flex items-center justify-center">
              <Store className="w-4 h-4 text-[#00A896]" />
            </div>
            <p className="text-[10px] font-semibold text-[#0C1B2A] line-clamp-2">{p.name}</p>
            <span className="text-[10px] font-bold text-[#0A74DA] tabular-nums mt-auto">{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 7. Giỏ hàng */
export const CartScreen: React.FC = () => {
  const [qty1, setQty1] = useState(2);
  const [groupMode, setGroupMode] = useState(false);

  return (
    <div className="flex flex-col gap-3 p-3.5 pb-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-bold text-[#0C1B2A]">Giỏ hàng</span>
        <button
          type="button"
          onClick={() => setGroupMode(!groupMode)}
          className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[9px] font-semibold transition-colors cursor-pointer ${
            groupMode ? 'bg-[#00A896] text-white' : 'bg-white border border-[#E2ECF4] text-[#4A6075]'
          }`}
        >
          <Users className="w-3 h-3" />
          <span>{groupMode ? 'Đang mua nhóm' : 'Mua theo nhóm'}</span>
        </button>
      </div>

      <div className="bg-white border border-[#E2ECF4] rounded-xl p-2.5 flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold text-[#0C1B2A] truncate">Cà chua bi đỏ đóng hộp</p>
            <p className="text-[9px] text-[#4A6075]">Hộp 300g · 32.000đ</p>
          </div>
          <div className="flex items-center gap-1.5 bg-[#F5F9FC] rounded-lg p-0.5 shrink-0">
            <button
              type="button"
              onClick={() => setQty1(Math.max(1, qty1 - 1))}
              className="w-5 h-5 rounded bg-white flex items-center justify-center text-[#0C1B2A] cursor-pointer"
              aria-label="Giảm số lượng"
            >
              <Minus className="w-2.5 h-2.5" />
            </button>
            <span className="text-[10px] font-bold w-4 text-center tabular-nums">{qty1}</span>
            <button
              type="button"
              onClick={() => setQty1(qty1 + 1)}
              className="w-5 h-5 rounded bg-white flex items-center justify-center text-[#0C1B2A] cursor-pointer"
              aria-label="Tăng số lượng"
            >
              <Plus className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>

        <div className="h-px bg-[#E2ECF4]" />

        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold text-[#0C1B2A] truncate">Ức gà phi lê đóng khay</p>
            <p className="text-[9px] text-[#4A6075]">Khay 500g · 68.000đ</p>
          </div>
          <span className="text-[10px] font-semibold text-[#4A6075] tabular-nums">x1</span>
        </div>
      </div>

      {/* Fulfillment Selector */}
      <div className="bg-white border border-[#E2ECF4] rounded-xl p-2.5">
        <span className="text-[10px] font-semibold text-[#0C1B2A] block mb-1.5">Phương thức nhận hàng</span>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="rounded-lg bg-[#EFF6FF] border border-[#0A74DA]/30 p-1.5 text-center">
            <span className="text-[10px] font-semibold text-[#0A74DA] block">Giao tận nơi</span>
            <span className="text-[8px] text-[#4A6075]">Trong khung giờ chọn</span>
          </div>
          <div className="rounded-lg bg-[#F5F9FC] border border-[#E2ECF4] p-1.5 text-center">
            <span className="text-[10px] font-medium text-[#0C1B2A] block">Nhận tại Mart</span>
            <span className="text-[8px] text-[#4A6075]">Quầy nhận nhanh</span>
          </div>
        </div>
      </div>

      <div className="mt-auto bg-white border border-[#E2ECF4] rounded-xl p-2.5 flex items-center justify-between">
        <div>
          <span className="text-[9px] text-[#4A6075] block">Tạm tính</span>
          <span className="text-xs font-extrabold text-[#0B1F33] tabular-nums">
            {((qty1 * 32000) + 68000).toLocaleString('vi-VN')}đ
          </span>
        </div>
        <span className="px-3 py-1.5 rounded-lg bg-[#0A74DA] text-white text-[10px] font-semibold">
          Đặt hàng
        </span>
      </div>
    </div>
  );
};

/* 8. Theo dõi đơn hàng */
export const OrderTrackingScreen: React.FC = () => {
  const steps = [
    { label: 'Đã tiếp nhận đơn hàng', time: '09:15', done: true },
    { label: 'Đang chuẩn bị sản phẩm tại điểm bán', time: '09:28', done: true },
    { label: 'Đang giao đến địa chỉ của bạn', time: '09:42', done: true },
    { label: 'Hoàn tất giao nhận', time: 'Dự kiến 10:15', done: false },
  ];

  return (
    <div className="flex flex-col gap-3 p-3.5 pb-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-bold text-[#0C1B2A]">Hành trình đơn hàng</span>
        <span className="font-mono text-[10px] text-[#0A74DA] tabular-nums">#AD-2841</span>
      </div>

      <div className="bg-gradient-to-br from-[#0B1F33] to-[#133353] text-white rounded-2xl p-3">
        <div className="flex items-center gap-2 text-[10px] text-white/80">
          <Clock className="w-3.5 h-3.5 text-[#00A896]" />
          <span>Dự kiến giao trong khung 10:00 – 10:30</span>
        </div>
        <p className="font-display text-xs font-bold mt-1.5">Đơn hàng đang trên đường giao</p>
      </div>

      <div className="bg-white border border-[#E2ECF4] rounded-xl p-3 flex flex-col gap-3">
        {steps.map((step, idx) => (
          <div key={step.label} className="flex items-start gap-2.5">
            <div className="flex flex-col items-center">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 ${step.done ? 'text-[#00A896]' : 'text-[#CBD5E1]'}`}
              />
              {idx < steps.length - 1 && (
                <div className={`w-px h-4 mt-1 ${step.done ? 'bg-[#00A896]/40' : 'bg-[#E2ECF4]'}`} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-[10px] font-semibold leading-tight ${step.done ? 'text-[#0C1B2A]' : 'text-[#4A6075]'}`}>
                {step.label}
              </p>
              <span className="font-mono text-[9px] text-[#4A6075] tabular-nums">{step.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 9. Ưu đãi và thành viên */
export const MembershipScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-3.5 pb-5">
      <span className="font-display text-sm font-bold text-[#0C1B2A]">Thành viên ADIGO</span>

      <div className="rounded-2xl bg-gradient-to-br from-[#0A74DA] to-[#00A896] p-3.5 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-white/85">Thẻ thành viên kết nối</span>
          <AdigoLogo compact inverted className="scale-75 origin-right" />
        </div>
        <p className="font-display text-base font-bold mt-2">Minh Anh</p>
        <p className="text-[10px] text-white/90 mt-0.5">
          Tích điểm chung tại ADIGO App & ADIGO Mart
        </p>
      </div>

      <div className="bg-white border border-[#E2ECF4] rounded-xl p-2.5">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#0C1B2A] mb-2">
          <Gift className="w-3.5 h-3.5 text-[#0A74DA]" />
          <span>Ưu đãi dành cho bạn</span>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { title: 'Ưu đãi giỏ hàng nông sản tươi', desc: 'Áp dụng đơn từ gian hàng Cao Nguyên' },
            { title: 'Miễn phí giao khung giờ chuẩn', desc: 'Dành cho đơn đặt trước trong ngày' },
          ].map((offer) => (
            <div key={offer.title} className="p-2 rounded-lg bg-[#F5F9FC] border border-[#E2ECF4] flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-[#0C1B2A] truncate">{offer.title}</p>
                <p className="text-[9px] text-[#4A6075] truncate">{offer.desc}</p>
              </div>
              <Tag className="w-3.5 h-3.5 text-[#00A896] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* 10. Truy xuất nguồn gốc */
export const TraceabilityScreen: React.FC<{ scanned?: boolean }> = ({ scanned = true }) => {
  return (
    <div className="flex flex-col gap-2.5 p-3.5 pb-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-bold text-[#0C1B2A]">Hồ sơ sản phẩm</span>
        <span className="font-mono text-[9px] text-[#0A74DA] tabular-nums">LOT-2401</span>
      </div>

      <div className="bg-white border border-[#E2ECF4] rounded-xl p-2.5 flex items-center gap-2.5">
        <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0">
          <ResponsiveImage
            src={ADIGO_CONFIG.images.traceabilityProduce}
            alt="Sản phẩm truy xuất"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-[#0C1B2A] truncate">Cà chua bi đỏ đóng hộp</p>
          <p className="text-[9px] text-[#4A6075] truncate">Nhà sản xuất: Nông sản Cao Nguyên</p>
          <span className="text-[9px] font-medium text-[#00A896]">Vùng trồng: Đơn Dương, Lâm Đồng</span>
        </div>
      </div>

      {scanned ? (
        <div className="bg-white border border-[#E2ECF4] rounded-xl p-2.5 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#0C1B2A]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00A896]" />
            <span>Hành trình thông tin được cung cấp</span>
          </div>
          {[
            { stage: 'Nguồn sản xuất', detail: 'Khu vực Đơn Dương · Thu hoạch buổi sáng' },
            { stage: 'Đóng gói sản phẩm', detail: 'Hộp 300g · Tem mã QR theo lô' },
            { stage: 'Phân phối & Điểm bán', detail: 'Vận chuyển mát đến ADIGO Mart' },
            { stage: 'Người tiêu dùng', detail: 'Bảo quản 5–8°C · Dùng trong 5 ngày' },
          ].map((row) => (
            <div key={row.stage} className="border-t border-[#E2ECF4] pt-1.5">
              <p className="text-[10px] font-semibold text-[#0C1B2A]">{row.stage}</p>
              <p className="text-[9px] text-[#4A6075]">{row.detail}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-[#E2ECF4] rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 my-4">
          <QrCode className="w-12 h-12 text-[#0A74DA]" />
          <p className="text-[11px] font-semibold text-[#0C1B2A]">Đưa mã QR trên bao bì vào khung hình</p>
          <p className="text-[9px] text-[#4A6075]">Xem thông tin nguồn gốc và hướng dẫn sử dụng</p>
        </div>
      )}
    </div>
  );
};

/* 11. Tìm kiếm cửa hàng ADIGO Mart */
export const StoreLocatorScreen: React.FC<{ mode?: 'instore' | 'pickup' | 'delivery' }> = ({
  mode = 'pickup',
}) => {
  const modeLabels = {
    instore: 'Mua trực tiếp tại cửa hàng',
    pickup: 'Đặt trước, nhận tại quầy Mart',
    delivery: 'Giao nhanh từ cửa hàng gần nhất',
  };

  return (
    <div className="flex flex-col gap-3 p-3.5 pb-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-bold text-[#0C1B2A]">Điểm bán ADIGO Mart</span>
        <MapPin className="w-4 h-4 text-[#0A74DA]" />
      </div>

      {/* Stylized Clean Vector Map Preview */}
      <div className="relative h-28 rounded-2xl bg-[#EAF2F8] border border-[#E2ECF4] overflow-hidden p-2.5 flex flex-col justify-between">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to right, #CBD5E1 1px, transparent 1px), linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 inline-flex self-start items-center gap-1 bg-white/95 px-2 py-1 rounded-lg text-[9px] font-semibold text-[#0C1B2A] shadow-xs">
          <MapPin className="w-3 h-3 text-[#0A74DA]" />
          <span>Khu vực trung tâm</span>
        </div>
        <div className="relative z-10 self-center flex items-center gap-6">
          <span className="w-6 h-6 rounded-full bg-[#0A74DA] text-white text-[9px] font-bold flex items-center justify-center ring-4 ring-[#0A74DA]/20">
            M1
          </span>
          <span className="w-5 h-5 rounded-full bg-[#00A896] text-white text-[8px] font-bold flex items-center justify-center ring-4 ring-[#00A896]/20">
            M2
          </span>
        </div>
      </div>

      <div className="bg-[#EFF6FF] border border-[#0A74DA]/20 rounded-xl px-2.5 py-2 text-[10px] font-semibold text-[#0A74DA]">
        Chế độ chọn: {modeLabels[mode]}
      </div>

      <div className="flex flex-col gap-2">
        {[
          { name: 'ADIGO Mart — Điểm bán minh họa 01', dist: '800 m', hours: '07:00 – 21:30' },
          { name: 'ADIGO Mart — Điểm bán minh họa 02', dist: '1,6 km', hours: '07:00 – 22:00' },
        ].map((store) => (
          <div key={store.name} className="bg-white border border-[#E2ECF4] rounded-xl p-2.5">
            <p className="text-[11px] font-bold text-[#0C1B2A]">{store.name}</p>
            <p className="text-[9px] text-[#4A6075] mt-0.5 tabular-nums">
              Khoảng cách: {store.dist} · Mở cửa {store.hours}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 12. Trợ lý mua sắm minh họa */
export const ShoppingAssistantScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-2.5 p-3.5 pb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#0A74DA]" />
          <span className="font-display text-xs font-bold text-[#0C1B2A]">Trợ lý mua sắm</span>
        </div>
        <span className="text-[9px] text-[#4A6075]">Minh họa định hướng</span>
      </div>

      <div className="self-end max-w-[85%] rounded-2xl rounded-br-sm bg-[#0A74DA] text-white px-3 py-2 text-[10px] leading-relaxed">
        Gợi ý giúp mình nguyên liệu làm bữa tối nhẹ nhàng, dễ chế biến.
      </div>

      <div className="self-start max-w-[92%] rounded-2xl rounded-bl-sm bg-white border border-[#E2ECF4] p-2.5 text-[10px] text-[#0C1B2A] leading-relaxed flex flex-col gap-2">
        <p>Bạn có thể chọn combo 3 món tươi nấu nhanh trong 20 phút:</p>
        <div className="bg-[#F5F9FC] rounded-lg p-2 flex flex-col gap-1">
          <span className="font-semibold">1. Ức gà phi lê áp chảo (500g)</span>
          <span className="font-semibold">2. Cà chua bi & rau xà lách (300g)</span>
          <span className="font-semibold">3. Trà hoa cúc ấm sau bữa</span>
        </div>
        <span className="text-[9px] font-semibold text-[#0A74DA]">Xem danh sách sản phẩm phù hợp →</span>
      </div>
    </div>
  );
};
