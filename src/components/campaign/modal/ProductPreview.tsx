import React from 'react';
import { Leaf, ShieldCheck, Utensils } from 'lucide-react';
import { CampaignConfig, CampaignHighlightIcon } from '../../../config/campaignConfig';

interface ProductPreviewProps {
  config: CampaignConfig;
}

function renderValueIcon(iconName: CampaignHighlightIcon) {
  switch (iconName) {
    case 'leaf':
      return <Leaf className="w-4 h-4 text-[#BEF264] shrink-0" aria-hidden="true" />;
    case 'shield':
      return (
        <ShieldCheck className="w-4 h-4 text-[#BEF264] shrink-0" aria-hidden="true" />
      );
    case 'utensils':
      return <Utensils className="w-4 h-4 text-[#BEF264] shrink-0" aria-hidden="true" />;
  }
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({ config }) => {
  const { brandLogos, modalPreviewContent, modalAssets } = config;

  return (
    <div
      className="relative flex flex-col justify-between p-5 sm:p-6 lg:p-7 text-white overflow-hidden lg:h-full"
      style={{
        background:
          'radial-gradient(ellipse at 20% 18%, rgba(164, 206, 70, 0.28) 0%, transparent 48%), radial-gradient(ellipse at 85% 78%, rgba(22, 163, 74, 0.32) 0%, transparent 50%), linear-gradient(155deg, #064E3B 0%, #0E6E46 46%, #138249 78%, #075943 100%)',
      }}
    >
      {/* Subtle glossy light streaks matching green glassmorphism aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-12 w-72 h-44 rotate-[26deg] bg-gradient-to-r from-white/16 via-[#A7F3D0]/20 to-transparent blur-xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 -left-14 w-64 h-36 -rotate-12 bg-gradient-to-r from-[#D9F99D]/18 to-transparent blur-xl"
      />

      {/* Top Header: Dual Official Logos + Product Headline */}
      <div className="relative z-10 flex flex-col items-start gap-2.5 sm:gap-3">
        <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white shadow-[0_8px_20px_rgba(6,55,39,0.28)]">
          <img
            src={brandLogos.organicVietnam}
            alt="Organic Việt Nam"
            width={175}
            height={65}
            decoding="async"
            referrerPolicy="no-referrer"
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <span aria-hidden="true" className="w-px h-5 bg-[#D6E3EE]" />
          <img
            src={brandLogos.adigo}
            alt="ADIGO"
            width={2400}
            height={499}
            decoding="async"
            referrerPolicy="no-referrer"
            className="h-4.5 sm:h-5 w-auto object-contain"
          />
        </div>

        <p className="inline-flex items-center px-3 py-0.5 rounded-full bg-[#ECFCCB]/95 text-[#14532D] text-[11px] sm:text-xs font-bold">
          {modalPreviewContent.eyebrow}
        </p>

        {/* Headline strictly avoids repeating Organic Việt Nam */}
        <div>
          <p className="font-display font-extrabold text-white text-[32px] sm:text-[40px] lg:text-[44px] leading-none tracking-[-0.02em] drop-shadow-sm">
            {modalPreviewContent.headline}
          </p>
          <div
            aria-hidden="true"
            className="mt-1.5 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#BEF264] via-[#4ADE80] to-transparent"
          />
        </div>

        <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 text-xs sm:text-[13px] font-semibold text-white">
          <Leaf className="w-3.5 h-3.5 text-[#BEF264] shrink-0" aria-hidden="true" />
          <span>{modalPreviewContent.subheadline}</span>
        </p>

        <p className="text-xs sm:text-[13px] font-medium text-[#D1FAE5]">
          {modalPreviewContent.tagline}
        </p>
      </div>

      {/* Middle Visuals: Compact on mobile, full farm + whole chicken stage on desktop */}
      <div className="relative z-10 my-4 lg:my-5">
        <div className="relative rounded-[22px] overflow-hidden border border-white/35 bg-white/10 backdrop-blur-md shadow-[0_16px_34px_rgba(4,47,36,0.35)]">
          {/* Farm Panorama Layer */}
          <div className="relative h-24 sm:h-32 lg:h-36 overflow-hidden">
            <img
              src={modalAssets.farmLandscape}
              alt="Minh họa vùng nuôi thảo dược"
              width={960}
              height={540}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/80 via-transparent to-transparent"
            />
            <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/45 backdrop-blur-sm text-[10px] text-white/90">
              {modalAssets.farmCaption}
            </span>
          </div>

          {/* Whole Chicken Foreground Focus */}
          <div className="relative -mt-8 sm:-mt-10 px-3 pb-3 flex items-end gap-3">
            <div className="w-full rounded-[18px] overflow-hidden border-2 border-white/85 shadow-lg bg-[#F7EFE4]">
              <img
                src={modalAssets.wholeChickenPlatter}
                alt="Gà thịt nguyên con Organic Việt Nam"
                width={960}
                height={720}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-32 sm:h-40 lg:h-44 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: 3 Confirmed Values Glass Container */}
      <div className="relative z-10 grid grid-cols-3 gap-2 rounded-2xl bg-white/12 backdrop-blur-md border border-white/25 px-3 py-2.5">
        {modalPreviewContent.highlights.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-center lg:items-start xl:items-center gap-1.5 text-center sm:text-left"
          >
            {renderValueIcon(item.iconName)}
            <span className="text-[10.5px] sm:text-[11px] font-semibold leading-tight text-white/95">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
