import React from 'react';
import { Bell, Heart, Layers, Sparkles, Search, QrCode } from 'lucide-react';
import { PhoneFrame } from './mockups/PhoneFrame';
import { SmartSearchScreen, ShoppingAssistantScreen } from './mockups/AdigoScreens';

export const TechExperienceSection: React.FC = () => {
  return (
    <section id="cong-nghe" className="py-20 sm:py-28 bg-[#F5F9FC] border-t border-[#E2ECF4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#0A74DA] mb-2">Trải nghiệm Công nghệ</p>
          <h2 className="font-display font-bold text-[#0B1F33] tracking-[-0.025em] text-[clamp(1.75rem,3.2vw,2.65rem)] leading-[1.15] text-balance">
            Công nghệ cho cuộc sống thuận tiện hơn.
          </h2>
          <p className="mt-4 text-base text-[#4A6075] leading-relaxed">
            Công nghệ được phát triển để đơn giản hóa trải nghiệm mua sắm, kết nối thông tin và mang đến những lựa chọn phù hợp hơn với người dùng.
          </p>
        </div>

        {/* Premium Tech Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* 1. Khám phá thông minh (6 cols) */}
          <div className="md:col-span-6 rounded-3xl bg-white border border-[#E2ECF4] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A74DA] mb-2">
                <Search className="w-4 h-4" />
                <span>Khám phá thông minh</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#0B1F33]">
                Tìm kiếm theo nhu cầu thực tế
              </h3>
              <p className="mt-2 text-sm text-[#4A6075] leading-relaxed">
                Hỗ trợ tìm kiếm sản phẩm theo nhu cầu bữa ăn, thói quen tiêu dùng và sở thích cá nhân.
              </p>
            </div>

            <div className="mt-6 flex justify-center overflow-hidden rounded-2xl bg-[#F5F9FC] border border-[#E2ECF4] pt-5 px-4 max-h-[300px]">
              <div className="scale-[0.88] origin-top">
                <PhoneFrame showBottomNav={false}>
                  <SmartSearchScreen />
                </PhoneFrame>
              </div>
            </div>
          </div>

          {/* 2. Trợ lý mua sắm minh họa (6 cols) */}
          <div className="md:col-span-6 rounded-3xl bg-white border border-[#E2ECF4] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00A896]">
                  <Sparkles className="w-4 h-4" />
                  <span>Trợ lý mua sắm</span>
                </div>
                <span className="text-[11px] font-medium text-[#4A6075]">
                  Tính năng định hướng phát triển
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#0B1F33]">
                Hỗ trợ lựa chọn sản phẩm dễ dàng hơn
              </h3>
              <p className="mt-2 text-sm text-[#4A6075] leading-relaxed">
                Hướng đến ứng dụng AI để gợi ý nguyên liệu, so sánh thông tin và hỗ trợ người dùng chọn món phù hợp.
              </p>
            </div>

            <div className="mt-6 flex justify-center overflow-hidden rounded-2xl bg-[#F5F9FC] border border-[#E2ECF4] pt-5 px-4 max-h-[300px]">
              <div className="scale-[0.88] origin-top">
                <PhoneFrame showBottomNav={false}>
                  <ShoppingAssistantScreen />
                </PhoneFrame>
              </div>
            </div>
          </div>

          {/* 3. Trải nghiệm cá nhân hóa (4 cols) */}
          <div className="md:col-span-4 rounded-3xl bg-white border border-[#E2ECF4] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0B1F33]">
                Trải nghiệm cá nhân hóa
              </h3>
              <p className="mt-2 text-sm text-[#4A6075] leading-relaxed">
                Gợi ý nội dung và sản phẩm phù hợp với nhu cầu mua sắm thường xuyên.
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-[#F5F9FC] border border-[#E2ECF4] p-4 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0C1B2A]">Danh sách yêu thích</span>
                <Heart className="w-4 h-4 text-[#0A74DA]" />
              </div>
              <div className="bg-white rounded-xl p-2.5 border border-[#E2ECF4] text-xs">
                <p className="font-semibold text-[#0C1B2A]">Giỏ thực phẩm tuần này</p>
                <p className="text-[#4A6075] mt-0.5">Cà chua bi · Trứng gà ta · Trà hoa cúc</p>
              </div>
            </div>
          </div>

          {/* 4. Kết nối liền mạch (4 cols) */}
          <div className="md:col-span-4 rounded-3xl bg-white border border-[#E2ECF4] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0B1F33]">
                Kết nối liền mạch
              </h3>
              <p className="mt-2 text-sm text-[#4A6075] leading-relaxed">
                Kết nối ứng dụng, Marketplace và hệ thống bán lẻ ADIGO Mart trong một tài khoản thống nhất.
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-[#F5F9FC] border border-[#E2ECF4] p-4 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0C1B2A]">Thông báo đơn hàng</span>
                <Bell className="w-4 h-4 text-[#00A896]" />
              </div>
              <div className="bg-white rounded-xl p-2.5 border border-[#E2ECF4] text-xs flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[#0A74DA] shrink-0" />
                <span className="text-[#0C1B2A]">Đơn hàng sẵn sàng tại quầy ADIGO Mart</span>
              </div>
            </div>
          </div>

          {/* 5. Thông tin trực quan (4 cols) */}
          <div className="md:col-span-4 rounded-3xl bg-white border border-[#E2ECF4] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0B1F33]">
                Thông tin trực quan
              </h3>
              <p className="mt-2 text-sm text-[#4A6075] leading-relaxed">
                Hiển thị nguồn gốc, quy cách và hướng dẫn sử dụng sản phẩm ngắn gọn, dễ hiểu.
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-[#F5F9FC] border border-[#E2ECF4] p-4 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0C1B2A]">Thẻ thông tin nhanh</span>
                <QrCode className="w-4 h-4 text-[#0A74DA]" />
              </div>
              <div className="bg-white rounded-xl p-2.5 border border-[#E2ECF4] text-xs">
                <p className="font-semibold text-[#0C1B2A]">Đơn Dương · Lâm Đồng</p>
                <p className="text-[#4A6075] mt-0.5">Bảo quản 5–8°C · Xem hồ sơ lô</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
