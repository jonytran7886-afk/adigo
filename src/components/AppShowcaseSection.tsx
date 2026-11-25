import React, { useState } from 'react';
import { PhoneFrame, PhoneNavTab } from './mockups/PhoneFrame';
import {
  HomeScreen,
  ExploreScreen,
  ProductDetailScreen,
  CartScreen,
  OrderTrackingScreen,
  MembershipScreen,
} from './mockups/AdigoScreens';

interface AppJourneyStep {
  id: string;
  label: string;
  navTab: PhoneNavTab;
  title: string;
  description: string;
  highlights: string[];
  renderScreen: () => React.ReactNode;
}

const APP_JOURNEY_STEPS: AppJourneyStep[] = [
  {
    id: 'home',
    label: 'Trang chủ',
    navTab: 'home',
    title: 'Khám phá trực quan ngay khi mở ứng dụng',
    description:
      'Gợi ý danh mục sản phẩm thiết yếu, tìm kiếm nhanh theo nhu cầu và kết nối cửa hàng gần nhất.',
    highlights: ['Khám phá danh mục sản phẩm', 'Kết nối cửa hàng và điểm bán'],
    renderScreen: () => <HomeScreen />,
  },
  {
    id: 'explore',
    label: 'Khám phá',
    navTab: 'explore',
    title: 'Tìm kiếm sản phẩm và thương hiệu yêu thích',
    description:
      'Duyệt qua các gian hàng, lưu lại sản phẩm quan tâm và lọc nhanh theo nhóm hàng phù hợp.',
    highlights: ['Tìm kiếm sản phẩm và thương hiệu', 'Lưu sản phẩm yêu thích'],
    renderScreen: () => <ExploreScreen />,
  },
  {
    id: 'detail',
    label: 'Chi tiết',
    navTab: 'explore',
    title: 'Thông tin đầy đủ trước khi chọn mua',
    description:
      'Xem chi tiết quy cách đóng gói, thông tin nhà sản xuất, dữ liệu nguồn gốc và hướng dẫn bảo quản.',
    highlights: ['Xem thông tin chi tiết', 'Tìm hiểu nguồn gốc sản phẩm'],
    renderScreen: () => <ProductDetailScreen />,
  },
  {
    id: 'cart',
    label: 'Giỏ hàng',
    navTab: 'cart',
    title: 'Đặt hàng linh hoạt cá nhân hoặc theo nhóm',
    description:
      'Điều chỉnh số lượng nhanh chóng, chọn mua sắm cá nhân hoặc mua theo nhóm, tùy chọn giao tận nơi hay nhận tại cửa hàng.',
    highlights: ['Mua sắm và đặt hàng', 'Mua sắm cá nhân hoặc theo nhóm'],
    renderScreen: () => <CartScreen />,
  },
  {
    id: 'orders',
    label: 'Đơn hàng',
    navTab: 'orders',
    title: 'Theo dõi hành trình đơn hàng minh bạch',
    description:
      'Cập nhật từng bước từ lúc tiếp nhận, chuẩn bị sản phẩm tại điểm bán đến khi hoàn tất giao nhận.',
    highlights: ['Theo dõi hành trình đơn hàng', 'Chọn khung giờ giao phù hợp'],
    renderScreen: () => <OrderTrackingScreen />,
  },
  {
    id: 'member',
    label: 'Thành viên',
    navTab: 'member',
    title: 'Ưu đãi và thẻ thành viên xuyên suốt',
    description:
      'Khám phá các chương trình ưu đãi phù hợp và kết nối quyền lợi thành viên giữa ứng dụng với hệ thống điểm bán.',
    highlights: ['Khám phá ưu đãi', 'Trải nghiệm thành viên'],
    renderScreen: () => <MembershipScreen />,
  },
];

export const AppShowcaseSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('home');
  const activeStep = APP_JOURNEY_STEPS.find((s) => s.id === activeId) || APP_JOURNEY_STEPS[0];

  const handlePhoneTabSync = (tab: PhoneNavTab) => {
    const match = APP_JOURNEY_STEPS.find((s) => s.navTab === tab);
    if (match) setActiveId(match.id);
  };

  return (
    <section id="ung-dung" className="py-20 sm:py-28 bg-[#F5F9FC] border-t border-[#E2ECF4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Heading + Interactive Tab Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#0A74DA] mb-2">ADIGO App</p>
            <h2 className="font-display font-bold text-[#0B1F33] tracking-[-0.025em] text-[clamp(1.75rem,3.2vw,2.65rem)] leading-[1.15] text-balance">
              Mọi trải nghiệm trong tầm tay.
            </h2>
            <p className="mt-4 text-base text-[#4A6075] leading-relaxed">
              ADIGO App hướng đến mang lại trải nghiệm mua sắm trực quan, thuận tiện và phù hợp hơn với nhu cầu của mỗi người dùng.
            </p>
          </div>

          {/* Interactive Journey Tabs */}
          <div
            className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-[#E2ECF4] self-start lg:self-end"
            role="tablist"
            aria-label="Hành trình trải nghiệm ADIGO App"
          >
            {APP_JOURNEY_STEPS.map((step) => {
              const isActive = step.id === activeId;
              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(step.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#0A74DA] text-white'
                      : 'text-[#4A6075] hover:text-[#0C1B2A] hover:bg-[#F5F9FC]'
                  }`}
                >
                  {step.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Focus Area: Narrative + Active Smartphone */}
        <div className="bg-white border border-[#E2ECF4] rounded-3xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-semibold text-[#00A896] mb-2">
              Bước {APP_JOURNEY_STEPS.findIndex((s) => s.id === activeId) + 1} / {APP_JOURNEY_STEPS.length} · {activeStep.label}
            </span>
            <h3 className="font-display text-2xl sm:text-[26px] font-bold text-[#0B1F33] leading-snug text-balance">
              {activeStep.title}
            </h3>
            <p className="mt-3 text-base text-[#4A6075] leading-relaxed">
              {activeStep.description}
            </p>

            <div className="mt-6 w-full border-t border-[#E2ECF4] pt-5 flex flex-col gap-2.5">
              {activeStep.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#0C1B2A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A74DA] shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs text-[#4A6075]">
              Bấm vào từng thẻ ở trên hoặc chạm trực tiếp thanh điều hướng bên trong màn hình điện thoại để chuyển đổi trải nghiệm.
            </p>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <PhoneFrame activeTab={activeStep.navTab} onSelectTab={handlePhoneTabSync}>
              {activeStep.renderScreen()}
            </PhoneFrame>
          </div>
        </div>

        {/* 6-Screen Multi-Device Strip for Overview Comparison */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display text-base font-bold text-[#0B1F33]">
              Toàn cảnh 6 màn hình hành trình người dùng
            </h3>
            <span className="text-xs text-[#4A6075]">Chọn một màn hình để xem chi tiết</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {APP_JOURNEY_STEPS.map((step, index) => {
              const isSelected = step.id === activeId;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveId(step.id)}
                  className={`group text-left rounded-2xl p-3 border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#0A74DA] shadow-[0_10px_28px_-10px_rgba(10,116,218,0.22)]'
                      : 'bg-white/80 border-[#E2ECF4] hover:border-[#0A74DA]/40 hover:bg-white'
                  }`}
                >
                  <div className="relative h-[220px] overflow-hidden rounded-xl bg-[#F5F9FC] border border-[#E2ECF4] flex justify-center pt-2">
                    <div className="scale-[0.42] origin-top pointer-events-none select-none">
                      <PhoneFrame activeTab={step.navTab}>
                        {step.renderScreen()}
                      </PhoneFrame>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className={`text-xs font-bold ${isSelected ? 'text-[#0A74DA]' : 'text-[#0C1B2A]'}`}>
                      0{index + 1}. {step.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
