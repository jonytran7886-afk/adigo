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
              alt="Thịt bò tươi kết nối trên nền tảng ADIGO"
              width={400}
              height={224}
              decoding="async"
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
              alt="Rau củ và thực phẩm tươi trên ADIGO"
              width={400}
              height={299}
              decoding="async"
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
              alt="Nông sản đa dạng trên ADIGO Marketplace"
              width={400}
              height={224}
              decoding="async"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover object-[72%_80%] scale-125"
            />
          </div>
        </div>

        {/* Tile 6: Cửa hàng bán lẻ ADIGO Mart */}
        <div className="rounded-2xl bg-white/92 backdrop-blur-md border-2 border-white p-1.5 shadow-[0_14px_28px_rgba(31,84,130,0.14)] rotate-[4deg] translate-y-2">
          <div className="h-16 sm:h-[72px] rounded-xl overflow-hidden bg-[#F0F7FF]">
            <img
              src="/src/assets/images/adigo_mart_concept_1795602232694.webp"
              alt="Hệ thống điểm bán ADIGO Mart"
              width={400}
              height={224}
              decoding="async"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
