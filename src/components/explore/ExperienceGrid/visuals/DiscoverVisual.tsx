import React from 'react';
import { Search, Mic } from 'lucide-react';
import { FoodThumbnail } from '../../../hero/ProductShowcase/ProductVisuals';

export const DiscoverVisual: React.FC = () => {
  const categories = [
    { label: 'Thịt tươi', visual: 'pork' as const },
    { label: 'Hải sản', visual: 'seafood' as const },
    { label: 'Rau củ', visual: 'veggies' as const },
    { label: 'Trái cây', visual: 'orange' as const },
    { label: 'Nông sản', visual: 'agri' as const },
    { label: 'Chế biến', visual: 'processed' as const },
  ];

  return (
    <div className="relative w-full h-full min-h-[220px] lg:min-h-full flex items-end justify-center lg:justify-end pr-0 lg:pr-5 pt-4 lg:pt-5 overflow-hidden select-none pointer-events-none">
      {/* Bold curved translucent glass bands behind phone (pure tech geometry, zero leaves) */}
      <svg
        viewBox="0 0 340 280"
        fill="none"
        className="absolute right-0 bottom-0 w-80 h-64 opacity-90"
        aria-hidden="true"
      >
        <path
          d="M15 245C70 125 180 70 325 90"
          stroke="rgba(255,255,255,0.92)"
          strokeWidth="2.5"
        />
        <circle
          cx="225"
          cy="195"
          r="118"
          fill="rgba(255,255,255,0.28)"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="1.5"
        />
        <circle
          cx="175"
          cy="215"
          r="76"
          fill="rgba(76,157,198,0.14)"
        />
      </svg>

      {/* Tilted Smartphone Mockup cropped cleanly at bottom edge */}
      <div
        className="relative z-10 w-[238px] sm:w-[254px] -mb-12 sm:-mb-14 rounded-t-[36px] p-[7px] pb-0 transition-transform duration-300 ease-out group-hover:scale-[1.025] -rotate-[7deg] origin-bottom"
        style={{
          background: 'linear-gradient(145deg, #2B3648 0%, #141B26 60%, #243042 100%)',
          boxShadow: '0 22px 46px -12px rgba(20, 47, 99, 0.25), inset 0 1px 1px rgba(255,255,255,0.35)',
        }}
      >
        <div className="rounded-t-[30px] bg-white overflow-hidden px-3 pt-2.5 pb-14 border border-black/30">
          {/* Status bar */}
          <div className="flex items-center justify-between text-[9px] font-semibold text-[#112D52] mb-2">
            <span className="tabular-nums">9:41</span>
            <div className="h-[13px] w-[54px] rounded-full bg-[#111827]" />
            <div className="w-3.5 h-2 rounded-[2px] border border-[#112D52]/70 p-[1px]">
              <div className="w-full h-full bg-[#112D52]" />
            </div>
          </div>

          <h4 className="font-display text-[13px] font-bold text-[#112D52] mb-1.5">
            Khám phá
          </h4>

          {/* Search bar */}
          <div className="flex items-center justify-between gap-1.5 bg-[#F4F7FA] border border-[#E2ECF4] rounded-lg px-2 py-1.5 mb-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <Search className="w-2.5 h-2.5 text-[#52677D] shrink-0" />
              <span className="text-[9px] text-[#52677D] truncate">
                Tìm sản phẩm, thương hiệu...
              </span>
            </div>
            <Mic className="w-2.5 h-2.5 text-[#52677D] shrink-0" />
          </div>

          {/* 3x2 Visual Categories Grid */}
          <div className="grid grid-cols-3 gap-1.5">
            {categories.map((item) => (
              <div
                key={item.label}
                className="rounded-lg bg-[#F6F9FC] border border-[#E2ECF4] p-1 flex flex-col items-center text-center"
              >
                <div className="w-full h-11 rounded-md overflow-hidden bg-white">
                  <FoodThumbnail type={item.visual} />
                </div>
                <span className="mt-1 text-[8px] font-semibold text-[#112D52] leading-tight truncate w-full">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
