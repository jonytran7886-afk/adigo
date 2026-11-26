import React from 'react';
import { HERO_CONFIG } from '../../../config/heroConfig';

export const FloatingProductVisuals: React.FC = () => {
  return (
    <div className="pointer-events-none select-none hidden sm:block" aria-hidden="true">
      {/* Left Pedestal Accent: Fresh meat cut */}
      <div className="absolute bottom-6 left-2 lg:left-6 z-40 w-[96px] h-[64px] rounded-2xl overflow-hidden border-2 border-white/90 shadow-[0_14px_28px_rgba(20,47,99,0.16)] bg-white animate-float-slow">
        <img
          src={HERO_CONFIG.assets.freshBannerPhoto}
          alt=""
          width={400}
          height={224}
          decoding="async"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-[86%_22%] scale-125"
        />
      </div>

      {/* Right Pedestal Accent: Eggs + Fresh Orange + Greens */}
      <div className="absolute bottom-6 right-2 lg:right-6 z-40 flex items-end gap-1.5 animate-float-delayed">
        <div className="w-[74px] h-[54px] rounded-2xl bg-white/95 border-2 border-white shadow-[0_12px_24px_rgba(20,47,99,0.14)] p-1.5 flex items-center justify-center">
          <svg viewBox="0 0 64 44" className="w-full h-full">
            <ellipse cx="20" cy="24" rx="10" ry="13" fill="#F4C79B" />
            <ellipse cx="34" cy="22" rx="10" ry="13" fill="#EBB482" />
            <ellipse cx="46" cy="26" rx="9" ry="12" fill="#F7D7B5" />
          </svg>
        </div>
        <div className="w-[56px] h-[56px] rounded-full bg-white/95 border-2 border-white shadow-[0_12px_24px_rgba(20,47,99,0.14)] p-1.5 flex items-center justify-center">
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <circle cx="24" cy="24" r="19" fill="#F59E0B" />
            <circle cx="24" cy="24" r="15" fill="#FDE68A" />
            <circle cx="24" cy="24" r="12.5" fill="#FB923C" />
          </svg>
        </div>
      </div>
    </div>
  );
};
