import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, QrCode, Truck, ShieldCheck } from 'lucide-react';
import { PhoneFrame } from './mockups/PhoneFrame';
import { HomeScreen, ExploreScreen, ProductDetailScreen } from './mockups/AdigoScreens';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#F5F9FC] via-white to-white pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28"
    >
      {/* Subtle architectural ambient gradient wash */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-[#0A74DA]/8 via-[#00A896]/6 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Zone */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Unboxed core value string per anti-pill rule */}
            <div className="flex items-center gap-2.5 text-sm font-medium text-[#0A74DA] mb-5">
              <span>Thuận tiện</span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span>Minh bạch</span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span>Kết nối</span>
            </div>

            <h1 className="font-display font-extrabold text-[#0B1F33] tracking-[-0.03em] leading-[1.08] text-[clamp(2.35rem,4.4vw,3.9rem)] text-balance">
              Kết nối sản phẩm.
              <br />
              Mở rộng trải nghiệm.
            </h1>

            <p className="mt-5 text-base sm:text-[17px] leading-[1.65] text-[#4A6075] max-w-[46ch]">
              Khám phá, mua sắm và kết nối với những sản phẩm bạn quan tâm trên một nền tảng thông minh, thuận tiện và minh bạch.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A74DA] hover:bg-[#0759A8] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A74DA]"
              >
                <span>Khám phá ADIGO</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#ung-dung"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-[#E2ECF4] hover:border-[#0A74DA]/40 hover:bg-[#F5F9FC] text-[#0C1B2A] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                Tìm hiểu ứng dụng
              </a>
            </div>

            {/* Quiet ecosystem summary line */}
            <div className="mt-9 pt-6 border-t border-[#E2ECF4] w-full max-w-md flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#4A6075]">
              <span className="font-semibold text-[#0C1B2A]">Hệ sinh thái ADIGO:</span>
              <span>ADIGO App</span>
              <span aria-hidden="true">·</span>
              <span>ADIGO Marketplace</span>
              <span aria-hidden="true">·</span>
              <span>ADIGO Mart</span>
            </div>
          </motion.div>

          {/* Right 3-Screen Smartphone Cluster */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[700px] flex items-center justify-center py-4">
              {/* Left Background Phone: Explore */}
              <motion.div
                initial={{ opacity: 0, x: -24, y: 16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="hidden sm:block -mr-20 lg:-mr-16 translate-y-8 scale-[0.83] origin-right z-10 opacity-95"
              >
                <PhoneFrame activeTab="explore">
                  <ExploreScreen />
                </PhoneFrame>
              </motion.div>

              {/* Center Foreground Hero Phone: Home */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-30 scale-[0.95] sm:scale-100"
              >
                <PhoneFrame activeTab="home">
                  <HomeScreen />
                </PhoneFrame>

                {/* Floating Product Origin Micro-Card */}
                <div className="hidden md:flex items-center gap-2.5 absolute -left-16 bottom-20 bg-white/95 backdrop-blur-md border border-[#E2ECF4] rounded-2xl px-3.5 py-2.5 shadow-[0_12px_32px_-8px_rgba(11,31,51,0.14)]">
                  <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] text-[#0A74DA] flex items-center justify-center shrink-0">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0C1B2A] whitespace-nowrap">Quét mã xem nguồn gốc</p>
                    <p className="text-[11px] text-[#4A6075] whitespace-nowrap">Thông tin theo lô cung cấp</p>
                  </div>
                </div>

                {/* Floating Delivery Micro-Card */}
                <div className="hidden md:flex items-center gap-2.5 absolute -right-12 top-24 bg-white/95 backdrop-blur-md border border-[#E2ECF4] rounded-2xl px-3.5 py-2.5 shadow-[0_12px_32px_-8px_rgba(11,31,51,0.14)]">
                  <div className="w-8 h-8 rounded-xl bg-[#F0FDFA] text-[#00A896] flex items-center justify-center shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0C1B2A] whitespace-nowrap">Giao nhận linh hoạt</p>
                    <p className="text-[11px] text-[#4A6075] whitespace-nowrap">Tại nhà hoặc nhận tại Mart</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Background Phone: Product Detail */}
              <motion.div
                initial={{ opacity: 0, x: 24, y: 16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="hidden sm:block -ml-20 lg:-ml-16 translate-y-10 scale-[0.83] origin-left z-20 opacity-95"
              >
                <PhoneFrame activeTab="explore" showBottomNav={false}>
                  <ProductDetailScreen />
                </PhoneFrame>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Subtle illustrative status note */}
        <div className="mt-6 flex items-center justify-center lg:justify-end gap-1.5 text-xs text-[#4A6075]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00A896]" />
          <span>Giao diện minh họa trải nghiệm ứng dụng ADIGO</span>
        </div>
      </div>
    </section>
  );
};
