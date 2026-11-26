import React from 'react';
import { BrandLogo } from '../hero/Header/BrandLogo';

export const ProductPackaging: React.FC = () => {
  return (
    <div
      className="pointer-events-none select-none w-full flex items-end justify-between gap-4"
      aria-hidden="true"
    >
      {/* Left Foreground Group: Bell Pepper, Tomatoes, Sealed Greens, & Primary Packaged Beef Tray with ADIGO QR Label */}
      <div className="relative flex items-end">
        {/* Background Yellow Pepper & Crisp Greens Tray */}
        <div className="relative -mr-9 mb-2 z-10 flex items-end">
          <svg viewBox="0 0 88 92" className="w-[74px] sm:w-[86px] h-auto drop-shadow-[0_12px_18px_rgba(20,47,99,0.18)]">
            {/* Yellow Bell Pepper */}
            <path
              d="M18 44 C10 44, 8 60, 14 74 C18 82, 32 82, 38 78 C44 82, 56 80, 58 66 C60 50, 48 42, 36 44 C30 42, 22 42, 18 44 Z"
              fill="#F4B41A"
            />
            <path d="M24 46 C20 56, 20 68, 25 76" stroke="#FCD76A" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M34 44 C33 34, 38 30, 43 32" stroke="#4D9C43" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Fresh Red Tomatoes */}
            <circle cx="22" cy="74" r="14" fill="#DC2626" />
            <circle cx="17" cy="69" r="4" fill="#FCA5A5" fillOpacity="0.65" />
            <circle cx="44" cy="76" r="13" fill="#EF4444" />
            <circle cx="40" cy="71" r="3.5" fill="#FECACA" fillOpacity="0.65" />
          </svg>
        </div>

        {/* Sealed Fresh Leafy Greens Tray */}
        <div className="hidden sm:block relative -ml-4 -mr-14 mb-8 w-[108px] h-[72px] rounded-[16px] bg-white/85 border border-white shadow-[0_10px_22px_rgba(20,47,99,0.14)] p-1.5 z-0 overflow-hidden">
          <svg viewBox="0 0 100 64" className="w-full h-full">
            <path d="M12 52 C10 26, 26 10, 48 12 C62 14, 72 28, 66 52 Z" fill="#52AA4B" />
            <path d="M32 54 C30 28, 48 12, 72 16 C88 20, 92 36, 84 54 Z" fill="#74C45B" />
          </svg>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(120deg, rgba(255,255,255,0.6) 0%, transparent 45%)',
            }}
          />
        </div>

        {/* Primary Packaged Fresh Beef Tray with Official ADIGO Logo & QR Sticker */}
        <div className="relative z-20 w-[166px] sm:w-[196px] h-[106px] sm:h-[120px] rounded-[22px] bg-white/95 border-[2px] border-white shadow-[0_18px_36px_rgba(20,47,99,0.22)] p-2.5 flex items-center justify-between gap-2 overflow-hidden">
          {/* Fresh Cut Visual */}
          <div className="flex-1 h-full rounded-[14px] bg-[#FDF1F1] flex items-center justify-center relative overflow-hidden">
            <svg viewBox="0 0 100 84" className="w-full h-full p-1">
              <path
                d="M12 46 C10 22, 34 10, 62 14 C84 18, 92 34, 88 54 C84 70, 56 76, 34 72 C16 68, 13 58, 12 46 Z"
                fill="#B82E2E"
              />
              <path
                d="M18 44 C18 27, 38 18, 61 21 C76 24, 82 35, 80 50 C76 62, 54 67, 36 64 C22 61, 18 53, 18 44 Z"
                fill="#D44848"
              />
              <path
                d="M28 31 C40 38, 56 36, 68 30 M24 46 C40 52, 58 50, 74 44"
                stroke="#FBE5E5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeOpacity="0.72"
                fill="none"
              />
            </svg>
          </div>

          {/* Crisp White ADIGO Vertical Logo + QR Traceability Sticker */}
          <div className="w-[64px] sm:w-[72px] h-full rounded-[12px] bg-white border border-[#DCE7F2] shadow-xs p-1.5 flex flex-col items-center justify-between shrink-0">
            <BrandLogo variant="vertical" size="sm" className="!h-[26px] sm:!h-[30px]" />

            <div className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-md bg-white border border-[#E2ECF4] p-0.5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#142F63]" fill="currentColor">
                <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm9-2h2v2h-2v-2zm4 0h3v2h-3v-2zm-4 4h3v3h-3v-3zm5 0h2v3h-2v-3zm-2-2h2v2h-2v-2z" />
              </svg>
            </div>
          </div>

          {/* Clear Plastic Wrap Sheen */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(125deg, rgba(255,255,255,0.58) 0%, transparent 42%, rgba(255,255,255,0.22) 100%)',
            }}
          />
        </div>
      </div>

      {/* Right Foreground Group: Fresh Greens Box & Egg Carton */}
      <div className="hidden sm:flex flex-col items-end relative z-20">
        <div className="w-[104px] h-[68px] -mb-4 mr-2 rounded-[16px] bg-white/88 border border-white shadow-[0_10px_22px_rgba(20,47,99,0.14)] p-1.5 overflow-hidden">
          <svg viewBox="0 0 100 60" className="w-full h-full">
            <path d="M10 50 C8 22, 26 8, 48 10 C64 12, 72 28, 66 50 Z" fill="#4BA345" />
            <path d="M36 52 C34 24, 52 10, 76 14 C90 18, 94 34, 86 52 Z" fill="#6FC258" />
          </svg>
        </div>

        {/* Egg Carton */}
        <div className="w-[126px] h-[72px] drop-shadow-[0_14px_22px_rgba(20,47,99,0.18)]">
          <svg viewBox="0 0 130 78" className="w-full h-full">
            <rect x="8" y="38" width="114" height="30" rx="8" fill="#DFC19E" />
            <rect x="14" y="42" width="102" height="10" rx="4" fill="#CEAB84" />
            {[28, 52, 76, 100].map((cx) => (
              <g key={cx}>
                <ellipse cx={cx} cy="34" rx="10" ry="14" fill="#F4C79B" />
                <ellipse cx={cx - 2.5} cy="29" rx="3" ry="5" fill="#FCE7D0" fillOpacity="0.75" />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};
