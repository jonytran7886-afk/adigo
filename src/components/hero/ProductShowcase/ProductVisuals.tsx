import React from 'react';
import { HERO_CONFIG } from '../../../config/heroConfig';

export type FoodVisualType =
  | 'chicken'
  | 'eggs'
  | 'pork'
  | 'veggies'
  | 'orange'
  | 'pomelo'
  | 'seafood'
  | 'agri'
  | 'processed';

export const FoodThumbnail: React.FC<{
  type: FoodVisualType;
  className?: string;
}> = ({ type, className = '' }) => {
  switch (type) {
    case 'chicken':
      return (
        <div className={`w-full h-full bg-[#F6F8FA] flex items-center justify-center p-2 ${className}`}>
          <svg viewBox="0 0 96 72" className="w-full h-full" aria-hidden="true">
            <ellipse cx="48" cy="56" rx="34" ry="8" fill="#E2E8F0" />
            <path
              d="M22 44C22 28 34 18 51 19C65 20 75 29 75 41C75 51 64 56 49 56C33 56 22 52 22 44Z"
              fill="#F7D8B6"
            />
            <path
              d="M28 42C29 31 38 24 51 24C60 25 68 30 70 38C63 32 45 31 28 42Z"
              fill="#FCEAD2"
            />
            <ellipse cx="64" cy="46" rx="11" ry="6.5" transform="rotate(-18 64 46)" fill="#EEBE8E" />
            <ellipse cx="32" cy="45" rx="9" ry="5.5" transform="rotate(14 32 45)" fill="#F0C79A" />
          </svg>
        </div>
      );

    case 'eggs':
      return (
        <div className={`w-full h-full bg-[#F6F8FA] flex items-center justify-center p-2 ${className}`}>
          <svg viewBox="0 0 96 72" className="w-full h-full" aria-hidden="true">
            <rect x="14" y="34" width="68" height="26" rx="6" fill="#E6C9A8" />
            <rect x="18" y="37" width="60" height="8" rx="3" fill="#D5B28C" />
            {[26, 40, 54, 68].map((cx) => (
              <g key={cx}>
                <ellipse cx={cx} cy="32" rx="7.5" ry="10.5" fill="#F4C79B" />
                <ellipse cx={cx - 1.5} cy="29" rx="2.5" ry="4" fill="#FBE5CC" fillOpacity="0.7" />
              </g>
            ))}
          </svg>
        </div>
      );

    case 'pork':
      return (
        <div className={`w-full h-full bg-[#F6F8FA] overflow-hidden relative ${className}`}>
          <img
            src={HERO_CONFIG.assets.freshBannerPhoto}
            alt="Thịt tươi"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[85%_22%] scale-125"
          />
        </div>
      );

    case 'veggies':
      return (
        <div className={`w-full h-full bg-[#ECFDF5] overflow-hidden relative ${className}`}>
          <img
            src={HERO_CONFIG.assets.freshBannerPhoto}
            alt="Rau củ tươi"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[24%_48%] scale-125"
          />
        </div>
      );

    case 'orange':
      return (
        <div className={`w-full h-full bg-[#FFF7ED] flex items-center justify-center p-2 ${className}`}>
          <svg viewBox="0 0 96 72" className="w-full h-full" aria-hidden="true">
            <circle cx="38" cy="40" r="18" fill="#F59E0B" />
            <circle cx="34" cy="34" r="7" fill="#FBBF24" fillOpacity="0.6" />
            <circle cx="58" cy="43" r="16" fill="#EA580C" />
            <circle cx="58" cy="43" r="13" fill="#FDBA74" />
            <circle cx="58" cy="43" r="10.5" fill="#FB923C" />
            <path d="M38 22C42 15 51 15 54 20C48 24 42 25 38 22Z" fill="#398441" />
          </svg>
        </div>
      );

    case 'pomelo':
      return (
        <div className={`w-full h-full bg-[#F0FDF4] flex items-center justify-center p-2 ${className}`}>
          <svg viewBox="0 0 96 72" className="w-full h-full" aria-hidden="true">
            <ellipse cx="48" cy="42" rx="22" ry="20" fill="#65B848" />
            <ellipse cx="42" cy="36" rx="9" ry="7" fill="#A4CE46" fillOpacity="0.65" />
            <path d="M48 22C50 14 59 13 64 17C58 23 52 24 48 22Z" fill="#398441" />
          </svg>
        </div>
      );

    case 'seafood':
      return (
        <div className={`w-full h-full bg-[#EFF6FF] flex items-center justify-center p-2 ${className}`}>
          <svg viewBox="0 0 96 72" className="w-full h-full" aria-hidden="true">
            <path
              d="M20 44C26 30 42 22 62 24C70 25 76 30 76 38C76 47 64 52 46 52C32 52 22 49 20 44Z"
              fill="#FB923C"
            />
            <path d="M28 45C36 33 48 27 64 26" stroke="#FFEDD5" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M38 49C46 37 56 31 70 30" stroke="#FFEDD5" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M49 50C55 41 62 36 73 35" stroke="#FFEDD5" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'agri':
      return (
        <div className={`w-full h-full bg-[#F8FAFC] overflow-hidden relative ${className}`}>
          <img
            src={HERO_CONFIG.assets.freshBannerPhoto}
            alt="Nông sản"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[74%_78%] scale-125"
          />
        </div>
      );

    case 'processed':
      return (
        <div className={`w-full h-full bg-[#F8FAFC] overflow-hidden relative ${className}`}>
          <img
            src={HERO_CONFIG.assets.freshBannerPhoto}
            alt="Thực phẩm chế biến"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[28%_82%] scale-125"
          />
        </div>
      );
  }
};

export const PackagedChickenQrVisual: React.FC = () => {
  return (
    <div className="relative w-full h-24 rounded-2xl bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] p-2.5 flex items-center justify-center overflow-hidden border border-[#E2ECF4]">
      {/* Sealed Food Tray Visual */}
      <div className="relative w-40 h-[72px] rounded-xl bg-white/95 border border-[#CBD5E1] shadow-sm flex items-center justify-between px-3 overflow-hidden">
        <svg viewBox="0 0 84 60" className="w-20 h-14 shrink-0" aria-hidden="true">
          <ellipse cx="42" cy="36" rx="30" ry="17" fill="#F5D0AB" />
          <ellipse cx="36" cy="31" rx="16" ry="9" fill="#FCE5CD" />
          <ellipse cx="52" cy="40" rx="12" ry="7" fill="#E8B88A" />
        </svg>

        {/* Crisp Scannable QR Sticker on Package */}
        <div className="w-11 h-11 rounded-md bg-white border border-[#CBD5E1] p-1 shadow-xs flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#112D52]" fill="currentColor" aria-hidden="true">
            <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm9-2h2v2h-2v-2zm4 0h3v2h-3v-2zm-4 4h3v3h-3v-3zm5 0h2v3h-2v-3zm-2-2h2v2h-2v-2z" />
          </svg>
        </div>

        {/* Clear plastic wrap reflection sheen */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.65) 0%, transparent 45%, rgba(255,255,255,0.35) 100%)',
          }}
        />
      </div>
    </div>
  );
};
