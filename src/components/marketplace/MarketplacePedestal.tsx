import React from 'react';
import { BrandLogo } from '../hero/Header/BrandLogo';

export const MarketplacePedestal: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[820px] mx-auto -mt-8 sm:-mt-10 pointer-events-none select-none"
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
      <div className="relative -mt-8 mx-auto w-[96%] h-[78px] sm:h-[92px] rounded-[50%] border border-white/85 shadow-[0_24px_48px_rgba(31,84,130,0.16),inset_0_2px_6px_rgba(255,255,255,0.85)] overflow-hidden"
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

      {/* Left Foreground Product Props: Fresh Beef Cut + Egg Carton (No Leaves/Flowers) */}
      <div className="hidden sm:flex items-end gap-1.5 absolute left-2 md:left-4 -top-6 z-20">
        {/* Fresh Cut on Light Board */}
        <div className="w-[106px] h-[66px] drop-shadow-[0_12px_16px_rgba(20,47,99,0.16)]">
          <svg viewBox="0 0 120 76" className="w-full h-full">
            <ellipse cx="60" cy="64" rx="50" ry="8" fill="#142F63" fillOpacity="0.12" />
            <rect x="14" y="46" width="92" height="14" rx="7" fill="#E8CFB1" />
            <path
              d="M22 44C22 25 40 16 66 17C88 18 100 28 98 42C96 52 78 54 56 54C36 54 22 51 22 44Z"
              fill="#B93838"
            />
            <path
              d="M28 41C29 28 45 21 67 22C82 23 92 30 92 39C78 46 46 47 28 41Z"
              fill="#D45050"
            />
            <path
              d="M42 26C52 32 62 31 76 26M36 35C52 40 68 38 84 34"
              stroke="#FBE5E5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeOpacity="0.7"
            />
          </svg>
        </div>

        {/* Egg Carton */}
        <div className="w-[82px] h-[58px] -ml-5 drop-shadow-[0_10px_14px_rgba(20,47,99,0.15)]">
          <svg viewBox="0 0 96 68" className="w-full h-full">
            <rect x="10" y="34" width="76" height="24" rx="7" fill="#DFC19E" />
            <rect x="14" y="37" width="68" height="8" rx="3" fill="#CEAB84" />
            {[24, 39, 54, 69].map((cx) => (
              <g key={cx}>
                <ellipse cx={cx} cy="31" rx="8" ry="11" fill="#F4C79B" />
                <ellipse cx={cx - 2} cy="27" rx="2.5" ry="4" fill="#FCE7D0" fillOpacity="0.75" />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Right Foreground Product Props: Packaged Chicken Tray + Prepared Meal Container */}
      <div className="hidden sm:flex items-end gap-2 absolute right-2 md:right-4 -top-7 z-20">
        {/* Fresh Packaged Chicken Tray */}
        <div className="w-[98px] h-[62px] drop-shadow-[0_12px_16px_rgba(20,47,99,0.15)]">
          <svg viewBox="0 0 110 70" className="w-full h-full">
            <rect x="10" y="24" width="90" height="36" rx="12" fill="#FFFFFF" stroke="#D3E2EE" strokeWidth="2" />
            <ellipse cx="44" cy="41" rx="22" ry="11" fill="#F5CFA8" />
            <ellipse cx="68" cy="43" rx="18" ry="10" fill="#EBB889" />
            <ellipse cx="40" cy="37" rx="10" ry="5" fill="#FCE5CD" />
            <path d="M18 30L92 30" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Sealed Prepared Food Box with Official ADIGO Icon */}
        <div className="relative w-[108px] h-[68px] rounded-[14px] bg-white/95 border border-[#D4E3EF] shadow-[0_12px_20px_rgba(20,47,99,0.16)] p-2 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between gap-1">
            <BrandLogo variant="icon" size="sm" className="!h-4 !w-4" />
            <span className="text-[8px] font-bold text-[#142F63] truncate">
              Thực phẩm chế biến
            </span>
          </div>
          <div className="h-7 rounded-lg bg-gradient-to-r from-[#F4DFC8] via-[#E9BA84] to-[#D99B58] border border-[#E6C7A3]/80 flex items-center justify-around px-1">
            <span className="w-2.5 h-4 rounded-full bg-[#B96A32]/65" />
            <span className="w-2.5 h-4 rounded-full bg-[#B96A32]/65" />
            <span className="w-2.5 h-4 rounded-full bg-[#B96A32]/65" />
          </div>
        </div>
      </div>
    </div>
  );
};
