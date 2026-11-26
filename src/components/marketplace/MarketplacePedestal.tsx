import { ResponsiveImage } from '../ResponsiveImage';
import React from 'react';
import { BrandLogo } from '../hero/Header/BrandLogo';

export const MarketplacePedestal: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[840px] mx-auto -mt-8 sm:-mt-10 pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Soft Ground Ambient Shadow */}
      <div
        className="mx-auto w-[90%] h-10 rounded-full blur-xl opacity-45"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(20, 47, 99, 0.24) 0%, rgba(76, 157, 198, 0.08) 55%, transparent 78%)',
        }}
      />

      {/* Elongated Glass Platform */}
      <div
        className="relative -mt-8 mx-auto w-[96%] h-[80px] sm:h-[96px] rounded-[50%] border border-white/85 shadow-[0_24px_48px_rgba(31,84,130,0.16),inset_0_2px_6px_rgba(255,255,255,0.85)] overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(235, 250, 255, 0.85) 0%, rgba(206, 238, 250, 0.65) 55%, rgba(176, 224, 240, 0.55) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        {/* Top Specular Rim */}
        <div
          className="absolute inset-x-8 top-1 h-4 rounded-[50%]"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.85) 65%, transparent 100%)',
          }}
        />
      </div>

      {/* Left Foreground Photorealistic Product Props: Fresh Cuts + Eggs & Citrus */}
      <div className="hidden sm:flex items-end gap-2 absolute left-1 md:left-3 -top-7 z-20">
        <div className="w-[106px] h-[72px] rounded-2xl overflow-hidden bg-white p-1 border border-white shadow-[0_14px_24px_rgba(20,47,99,0.18)] -rotate-3">
          <ResponsiveImage
            src="/src/assets/images/marketplace_pork_beef_cuts_1795655577544.webp"
            alt=""
            width={240}
            height={180}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="w-[92px] h-[66px] -ml-5 rounded-2xl overflow-hidden bg-white p-1 border border-white shadow-[0_12px_22px_rgba(20,47,99,0.16)] rotate-2">
          <ResponsiveImage
            src="/src/assets/images/marketplace_eggs_citrus_1795655578585.webp"
            alt=""
            width={240}
            height={180}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Right Foreground Photorealistic Product Props: Vacuum-Packed Chicken + Prepared Fresh Tray */}
      <div className="hidden sm:flex items-end gap-2 absolute right-1 md:right-3 -top-7 z-20">
        <div className="w-[98px] h-[68px] rounded-2xl overflow-hidden bg-white p-1 border border-white shadow-[0_12px_22px_rgba(20,47,99,0.16)] -rotate-2">
          <ResponsiveImage
            src="/src/assets/images/chicken_whole_vacuum_pack_1795655111694.webp"
            alt=""
            width={240}
            height={180}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="relative w-[112px] h-[74px] -ml-4 rounded-2xl overflow-hidden bg-white border border-white shadow-[0_14px_26px_rgba(20,47,99,0.18)] p-1 rotate-2">
          <ResponsiveImage
            src="/src/assets/images/marketplace_veggies_processed_1795655578984.webp"
            alt=""
            width={240}
            height={180}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-md bg-white/95 border border-[#DCEAF5] shadow-xs flex items-center gap-1">
            <BrandLogo variant="icon" size="sm" className="!h-3.5 !w-3.5" />
            <span className="text-[7.5px] font-bold text-[#142F63]">
              ADIGO Fresh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
