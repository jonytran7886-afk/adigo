import React from 'react';
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  ShoppingCart,
  Utensils,
} from 'lucide-react';
import { CampaignConfig, CampaignHighlightIcon } from '../../config/campaignConfig';
import { CampaignProductShowcase } from './CampaignProductShowcase';

interface CampaignBannerProps {
  config: CampaignConfig;
  ctaButtonRef: React.RefObject<HTMLButtonElement | null>;
  onOpenPreorder: () => void;
}

function renderHighlightIcon(iconName: CampaignHighlightIcon) {
  switch (iconName) {
    case 'leaf':
      return <Leaf className="w-3.5 h-3.5 text-[#FFE066] shrink-0" aria-hidden="true" />;
    case 'shield':
      return (
        <ShieldCheck className="w-3.5 h-3.5 text-[#FFE066] shrink-0" aria-hidden="true" />
      );
    case 'utensils':
      return <Utensils className="w-3.5 h-3.5 text-[#FFE066] shrink-0" aria-hidden="true" />;
  }
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({
  config,
  ctaButtonRef,
  onOpenPreorder,
}) => {
  const { bannerContent, brandLogos } = config;

  return (
    <section
      id="campaign-banner"
      aria-labelledby="campaign-banner-heading"
      className="relative z-20 my-8 sm:my-10 lg:my-12 px-2 sm:px-0"
    >
      <div
        className="relative w-[92%] sm:w-[90%] lg:w-[88%] max-w-[1600px] mx-auto rounded-[24px] lg:rounded-[30px] overflow-hidden border-2 border-white/80 shadow-[0_22px_54px_-12px_rgba(166,18,18,0.42),0_10px_28px_-8px_rgba(245,158,11,0.22)] lg:min-h-[344px] lg:max-h-[400px]"
        style={{
          background:
            'radial-gradient(ellipse at 72% 48%, rgba(255, 198, 56, 0.34) 0%, transparent 52%), radial-gradient(ellipse at 18% 22%, rgba(255, 118, 41, 0.35) 0%, transparent 48%), linear-gradient(112deg, #82070A 0%, #C61213 38%, #E43B0F 72%, #9B0A0C 100%)',
        }}
      >
        {/* Dynamic Glossy Light Streaks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-16 w-[420px] h-[220px] rotate-[-18deg] bg-gradient-to-r from-white/18 via-[#FFD54F]/22 to-transparent blur-xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 right-8 w-[520px] h-[140px] -rotate-6 bg-gradient-to-r from-transparent via-[#FFE066]/30 to-[#FF8A00]/20 blur-lg"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFE066] to-transparent opacity-80"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-6 px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-6 h-full">
          {/* Left 45% (5 / 12 columns on lg+) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-2.5 sm:gap-3">
            {/* White Dual-Logo Identity Lockup */}
            <div className="inline-flex items-center gap-3 sm:gap-3.5 px-3.5 py-2 rounded-2xl bg-white shadow-[0_8px_22px_rgba(90,6,6,0.22)] border border-white">
              <img
                src={brandLogos.organicVietnam}
                alt="Organic Việt Nam"
                width={175}
                height={65}
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-7 sm:h-8 w-auto object-contain"
              />
              <span
                aria-hidden="true"
                className="w-px h-6 bg-[#D6E3EE] shrink-0"
              />
              <img
                src={brandLogos.adigo}
                alt="ADIGO"
                width={2400}
                height={499}
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-5 sm:h-6 w-auto object-contain"
              />
            </div>

            {/* Eyebrow */}
            <p className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFF6DC]/95 text-[#9A100D] text-[11.5px] sm:text-xs font-bold tracking-wide shadow-xs">
              {bannerContent.eyebrow}
            </p>

            {/* Primary Headline + Golden Curved Accent */}
            <div className="relative">
              <h2
                id="campaign-banner-heading"
                className="font-display font-extrabold text-white tracking-[-0.02em] leading-[1.02] text-[34px] sm:text-[42px] lg:text-[44px] drop-shadow-[0_4px_12px_rgba(80,6,6,0.35)]"
              >
                {bannerContent.headline}
              </h2>
              <div
                aria-hidden="true"
                className="mt-1 h-[3px] w-28 sm:w-36 rounded-full bg-gradient-to-r from-[#FFE066] via-[#FFC107] to-transparent"
              />
            </div>

            {/* Supporting Herbal & Farm-to-Table Ribbons */}
            <div className="flex flex-col items-start gap-1.5 w-full">
              <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-[#1D6B2A] to-[#2F8E3B] text-white text-xs sm:text-[13px] font-semibold border border-[#A7F3D0]/35 shadow-xs">
                <Leaf className="w-3.5 h-3.5 text-[#D9F99D] shrink-0" aria-hidden="true" />
                <span>{bannerContent.tagline}</span>
              </p>
              <p className="inline-flex items-center px-3.5 py-1 rounded-xl bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#EA580C] text-[#450A0A] text-xs sm:text-[13.5px] font-extrabold shadow-[0_6px_16px_rgba(124,18,12,0.28)]">
                {bannerContent.subheadline}
              </p>
            </div>

            {/* 3 Confirmed Product Highlights */}
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-0.5 text-[11.5px] sm:text-xs font-semibold text-[#FFFBEB]">
              {bannerContent.highlights.map((item) => (
                <li key={item.id} className="inline-flex items-center gap-1.5">
                  {renderHighlightIcon(item.iconName)}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>

            {/* Prominent Golden Glossy CTA */}
            <div className="pt-1 w-full sm:w-auto">
              <button
                ref={ctaButtonRef}
                type="button"
                onClick={onOpenPreorder}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-b from-[#FFF07C] via-[#FFD028] to-[#F59E0B] text-[#6B0F0A] font-display font-extrabold text-sm sm:text-[15px] shadow-[0_12px_26px_rgba(251,191,36,0.45),inset_0_1px_1px_rgba(255,255,255,0.92)] border border-[#FFF7B2] hover:brightness-105 active:scale-[0.98] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#B91C1C]"
              >
                <ShoppingCart className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">{bannerContent.ctaLabel}</span>
                <ArrowRight
                  className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* Right 55% (7 / 12 columns on lg+) */}
          <div className="lg:col-span-7 h-full flex items-center">
            <CampaignProductShowcase config={config} />
          </div>
        </div>
      </div>
    </section>
  );
};
