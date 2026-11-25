import React from 'react';
import { EXPLORE_CONFIG } from '../../../../config/exploreConfig';
import { FoodThumbnail } from '../../../hero/ProductShowcase/ProductVisuals';

export const ConnectedProductsVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[230px] lg:min-h-full flex items-center justify-center p-4 sm:p-5 overflow-hidden select-none pointer-events-none">
      {/* Subtle orbital connection curves behind floating tiles */}
      <svg
        viewBox="0 0 360 280"
        fill="none"
        className="absolute inset-0 w-full h-full opacity-80"
        aria-hidden="true"
      >
        <path
          d="M10 230C85 130 215 70 350 95"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="2"
        />
        <path
          d="M30 80C120 185 240 215 350 165"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="1.5"
        />
      </svg>

      {/* 3D Floating Glass Product & Retail Tiles Grid (No smartphone, no unverified logos) */}
      <div className="relative z-10 grid grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-[330px] transition-transform duration-300 ease-out group-hover:scale-[1.025]">
        {/* Tile 1: Thịt bò */}
        <div className="rounded-2xl bg-white/85 backdrop-blur-md border-2 border-white p-1.5 shadow-[0_12px_24px_rgba(31,84,130,0.12)] -rotate-[4deg] translate-y-2">
          <div className="h-16 sm:h-[72px] rounded-xl overflow-hidden">
            <img
              src={EXPLORE_CONFIG.assets.marketplaceVariety}
              alt="Thịt bò tươi"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover object-[86%_22%] scale-125"
            />
          </div>
        </div>

        {/* Tile 2: Rau củ & thực phẩm tươi */}
        <div className="rounded-2xl bg-white/90 backdrop-blur-md border-2 border-white p-1.5 shadow-[0_14px_28px_rgba(31,84,130,0.14)] rotate-[2deg] -translate-y-2">
          <div className="h-16 sm:h-[72px] rounded-xl overflow-hidden">
            <img
              src={EXPLORE_CONFIG.assets.traceabilityProduce}
              alt="Rau củ và thực phẩm tươi"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Tile 3: Trứng */}
        <div className="rounded-2xl bg-white/85 backdrop-blur-md border-2 border-white p-1.5 shadow-[0_12px_24px_rgba(31,84,130,0.12)] rotate-[5deg] translate-y-1">
          <div className="h-16 sm:h-[72px] rounded-xl overflow-hidden">
            <FoodThumbnail type="eggs" />
          </div>
        </div>

        {/* Tile 4: Trái cây */}
        <div className="rounded-2xl bg-white/88 backdrop-blur-md border-2 border-white p-1.5 shadow-[0_12px_24px_rgba(31,84,130,0.12)] -rotate-[3deg] translate-y-1">
          <div className="h-16 sm:h-[72px] rounded-xl overflow-hidden">
            <FoodThumbnail type="orange" />
          </div>
        </div>

        {/* Tile 5: Nông sản */}
        <div className="rounded-2xl bg-white/88 backdrop-blur-md border-2 border-white p-1.5 shadow-[0_14px_26px_rgba(31,84,130,0.13)] -rotate-[2deg] -translate-y-1">
          <div className="h-16 sm:h-[72px] rounded-xl overflow-hidden">
            <img
              src={EXPLORE_CONFIG.assets.marketplaceVariety}
              alt="Nông sản đa dạng"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover object-[72%_80%] scale-125"
            />
          </div>
        </div>

        {/* Tile 6: Cửa hàng bán lẻ minh họa */}
        <div className="rounded-2xl bg-white/92 backdrop-blur-md border-2 border-white p-1.5 shadow-[0_14px_28px_rgba(31,84,130,0.14)] rotate-[4deg] translate-y-2">
          <div className="h-16 sm:h-[72px] rounded-xl bg-gradient-to-br from-[#F0F7FF] to-[#E6F7F2] flex items-center justify-center p-2">
            <svg viewBox="0 0 80 64" className="w-full h-full" aria-label="Cửa hàng bán lẻ minh họa">
              {/* Minimalist store body */}
              <rect x="12" y="24" width="56" height="34" rx="4" fill="#FFFFFF" stroke="#B6D5EB" strokeWidth="1.5" />
              {/* Awning stripes */}
              <path d="M9 24L14 12H66L71 24H9Z" fill="#345EAA" />
              <path d="M21 12L18 24H27L29 12H21Z" fill="#65B848" />
              <path d="M36 12L35 24H45L44 12H36Z" fill="#FFFFFF" fillOpacity="0.9" />
              <path d="M51 12L53 24H62L59 12H51Z" fill="#65B848" />
              {/* Glass storefront windows & door */}
              <rect x="18" y="31" width="22" height="17" rx="2" fill="#DCEEFF" />
              <rect x="45" y="31" width="16" height="27" rx="2" fill="#4C9DC6" fillOpacity="0.35" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
