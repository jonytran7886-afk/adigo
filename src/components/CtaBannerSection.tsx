import React from 'react';
import { ArrowRight, Bell, CheckCircle2 } from 'lucide-react';
import { AdigoLogo } from './BrandLogos';
import { PhoneFrame } from './mockups/PhoneFrame';
import { BrandStoreScreen } from './mockups/AdigoScreens';

interface CtaBannerSectionProps {
  onOpenRegister: () => void;
  onOpenConnect: () => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({
  onOpenRegister,
  onOpenConnect,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0B1F33] via-[#0B3B6B] to-[#007C72] text-white p-8 sm:p-12 lg:p-16">
          {/* Subtle architectural circle accent */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/8 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <AdigoLogo inverted />

              <h2 className="mt-6 font-display font-extrabold tracking-[-0.03em] leading-[1.1] text-[clamp(2rem,3.6vw,3.1rem)] text-balance">
                Một cách mới để khám phá và mua sắm.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
                Khám phá những trải nghiệm được kết nối trong hệ sinh thái ADIGO.
              </p>

              {/* Pre-launch honest CTAs — no fake App Store / Play Store links or unverified QR */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onOpenRegister}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0B1F33] hover:bg-[#F0F6FA] text-sm font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Bell className="w-4 h-4 text-[#0A74DA]" />
                  <span>Đăng ký nhận thông tin</span>
                </button>

                <a
                  href="#ung-dung"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/12 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Khám phá ứng dụng</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenConnect}
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-white/90 hover:text-white underline-offset-4 hover:underline text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Kết nối cùng ADIGO
                </button>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-white/75">
                <CheckCircle2 className="w-4 h-4 text-[#5EEAD4] shrink-0" />
                <span>
                  Ứng dụng ADIGO đang trong giai đoạn hoàn thiện — đăng ký để nhận thông báo khi chính thức ra mắt.
                </span>
              </div>
            </div>

            {/* Right Large Smartphone Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <PhoneFrame activeTab="explore">
                  <BrandStoreScreen />
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
