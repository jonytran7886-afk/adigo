import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Link2,
  ShieldCheck,
  Sprout,
  ArrowRight,
  Smartphone,
} from 'lucide-react';
import { BrandLogo } from '../hero/Header/BrandLogo';
import { PARTNERSHIP_CONFIG } from '../../config/partnershipConfig';

interface FinalCTABannerProps {
  onPartnerCta: () => void;
  onExploreApp: () => void;
  onOpenConsentSettings?: () => void;
}

export const FinalCTABanner: React.FC<FinalCTABannerProps> = ({
  onPartnerCta,
  onExploreApp,
  onOpenConsentSettings,
}) => {
  const renderBenefitIcon = (
    icon: 'trending' | 'link' | 'shield' | 'sprout'
  ) => {
    switch (icon) {
      case 'trending':
        return <TrendingUp className="w-5 h-5 text-white shrink-0" />;
      case 'link':
        return <Link2 className="w-5 h-5 text-white shrink-0" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-white shrink-0" />;
      case 'sprout':
        return <Sprout className="w-5 h-5 text-white shrink-0" />;
    }
  };

  return (
    <div className="relative w-full mt-10 lg:mt-12">
      {/* Seamless Curved Glass Wave Transition Between Light Top & Deep Navy CTA */}
      <div
        className="pointer-events-none relative z-20 -mb-6 sm:-mb-8 w-full h-10 sm:h-14 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0 36 Q 380 0, 760 28 T 1440 16 L 1440 70 L 0 70 Z"
            fill="rgba(255, 255, 255, 0.35)"
          />
          <path
            d="M0 44 Q 380 8, 760 36 T 1440 24"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Full-Width Deep Blue to Teal Final CTA Banner */}
      <div className="final-cta-banner relative w-full rounded-t-[36px] sm:rounded-t-[48px] pt-12 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10">
        {/* Subtle Low-Opacity Stylized Horizon at Footer Base */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-20 sm:h-24 opacity-20"
          aria-hidden="true"
        >
          <path
            d="M0 68 Q 280 28, 620 62 T 1180 42 T 1440 60 L 1440 120 L 0 120 Z"
            fill="#63DAB7"
          />
          <path
            d="M0 88 Q 400 50, 820 82 T 1440 72 L 1440 120 L 0 120 Z"
            fill="#142F63"
          />
        </svg>

        {/* Right Digital Globe Backdrop Behind CTA Buttons */}
        <svg
          viewBox="0 0 360 320"
          fill="none"
          className="pointer-events-none hidden lg:block absolute right-[2%] top-1/2 -translate-y-1/2 w-[340px] h-[300px] opacity-55"
          aria-hidden="true"
        >
          <circle
            cx="180"
            cy="165"
            r="120"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
          />
          <ellipse
            cx="180"
            cy="165"
            rx="120"
            ry="44"
            stroke="rgba(169,217,241,0.45)"
            strokeWidth="1.2"
          />
          <ellipse
            cx="180"
            cy="165"
            rx="56"
            ry="120"
            stroke="rgba(169,217,241,0.45)"
            strokeWidth="1.2"
          />
          <path
            d="M68 130 Q 180 76, 294 148"
            stroke="rgba(164,206,70,0.65)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="96" cy="116" r="4" fill="#FFFFFF" />
          <circle cx="182" cy="96" r="4.5" fill="#A4CE46" />
          <circle cx="272" cy="134" r="4" fill="#FFFFFF" />
        </svg>

        <div className="relative z-10 max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6">
          {/* Left 20%: Official Vertical ADIGO Logo Crest */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-3 xl:col-span-2 flex items-center justify-center lg:justify-start lg:border-r lg:border-white/25 lg:pr-6"
          >
            <div className="px-5 py-3.5 rounded-[24px] bg-white/95 border border-white shadow-[0_14px_34px_rgba(8,22,50,0.30)] inline-flex items-center justify-center">
              <BrandLogo variant="vertical" size="md" className="!h-16 sm:!h-20" />
            </div>
          </motion.div>

          {/* Center 55%: Headline, Description & 4 Partnership Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-6 xl:col-span-7 text-center lg:text-left"
          >
            <h3 className="font-display font-extrabold text-white text-[clamp(1.75rem,2.8vw,2.65rem)] tracking-[-0.02em] leading-tight">
              {PARTNERSHIP_CONFIG.finalCta.headline}
            </h3>
            <p className="mt-2.5 text-[14.5px] sm:text-[16.5px] text-white/88 leading-relaxed max-w-[680px] mx-auto lg:mx-0">
              {PARTNERSHIP_CONFIG.finalCta.description}
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
              {PARTNERSHIP_CONFIG.finalCta.benefits.map((benefit, idx) => (
                <div
                  key={benefit.id}
                  className={`flex items-center justify-center lg:justify-start gap-2.5 text-left ${
                    idx < PARTNERSHIP_CONFIG.finalCta.benefits.length - 1
                      ? 'sm:border-r sm:border-white/20 sm:pr-3'
                      : ''
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/14 border border-white/25 flex items-center justify-center shrink-0">
                    {renderBenefitIcon(benefit.icon)}
                  </div>
                  <span className="text-[12.5px] sm:text-[13.5px] font-semibold text-white leading-snug">
                    {benefit.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right 25%: Primary Partner CTA + Secondary App CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center gap-3"
          >
            <button
              type="button"
              onClick={onPartnerCta}
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-display text-[15.5px] font-bold text-white border border-white/75 shadow-[0_14px_34px_rgba(12,48,72,0.38)] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{
                background:
                  'linear-gradient(135deg, #279B59 0%, #39B664 55%, #1CA39A 100%)',
              }}
            >
              {/* Glass Reflection Sheen */}
              <span
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.32) 50%, transparent 80%)',
                }}
                aria-hidden="true"
              />
              <span className="relative z-10">
                {PARTNERSHIP_CONFIG.finalCta.primaryCtaLabel}
              </span>
              <ArrowRight className="relative z-10 w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={onExploreApp}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/14 hover:bg-white/24 border border-white/45 text-white text-[13.5px] font-semibold backdrop-blur-md transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Smartphone className="w-4 h-4 shrink-0" />
              <span>{PARTNERSHIP_CONFIG.finalCta.secondaryCtaLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </motion.div>
        </div>

        {/* Discreet Brand & Ecosystem Attribution + Privacy Preferences */}
        <footer className="relative z-10 max-w-[1480px] mx-auto mt-8 pt-4 border-t border-white/18 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11.5px] text-white/80">
          <p>
            ADIGO – Nền tảng thương mại và tiêu dùng số phát triển bởi{' '}
            <a
              href="https://organicvn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-[#D9F99D] underline decoration-white/45 hover:decoration-white underline-offset-4 transition-colors"
            >
              Organic Việt Nam
            </a>
            .
          </p>
          {onOpenConsentSettings && (
            <button
              type="button"
              onClick={onOpenConsentSettings}
              className="text-white/85 hover:text-white underline underline-offset-4 cursor-pointer"
            >
              Tùy chọn cookie & quyền riêng tư
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};
