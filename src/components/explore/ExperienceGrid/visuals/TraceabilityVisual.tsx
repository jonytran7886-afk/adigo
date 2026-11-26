import React from 'react';
import { ChevronLeft, Sprout, ShieldCheck, Package, Store } from 'lucide-react';
import { EXPLORE_CONFIG } from '../../../../config/exploreConfig';

export const TraceabilityVisual: React.FC = () => {
  const timeline = [
    { label: 'Nguồn sản xuất', icon: Sprout },
    { label: 'Chăn nuôi', icon: ShieldCheck },
    { label: 'Sơ chế & đóng gói', icon: Package },
    { label: 'Phân phối', icon: Store },
  ];

  return (
    <div className="relative w-full h-full min-h-[230px] lg:min-h-full flex items-end justify-center lg:justify-end pr-3 sm:pr-5 pt-4 overflow-hidden select-none pointer-events-none">
      {/* Subtle fresh greens backdrop */}
      <div
        className="absolute inset-0 opacity-25"
        aria-hidden="true"
      >
        <img
          src={EXPLORE_CONFIG.assets.traceabilityProduce}
          alt=""
          width={960}
          height={717}
          decoding="async"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-right"
        />
      </div>
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, #F5F2EA 0%, rgba(245,242,234,0.88) 28%, rgba(245,242,234,0.35) 75%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Foreground Composition: Packaged Chicken Tray with QR + Smartphone */}
      <div className="relative z-10 flex items-end justify-end gap-2 sm:gap-3 w-full max-w-[360px] transition-transform duration-300 ease-out group-hover:scale-[1.025]">
        {/* Packaged Chicken Tray with Illustrative QR Label */}
        <div className="relative -mr-6 sm:-mr-8 mb-3 z-20 w-[160px] sm:w-[176px] h-[112px] rounded-2xl bg-white/95 border border-[#D9E2EC] shadow-[0_14px_30px_rgba(31,58,82,0.14)] p-2.5 flex items-center justify-between overflow-hidden">
          <svg viewBox="0 0 96 70" className="w-24 h-16 shrink-0" aria-hidden="true">
            <ellipse cx="46" cy="40" rx="34" ry="20" fill="#F4CBA6" />
            <ellipse cx="40" cy="34" rx="18" ry="11" fill="#FBE4CE" />
            <ellipse cx="58" cy="44" rx="14" ry="8" fill="#E7B385" />
          </svg>

          {/* Crisp QR sticker */}
          <div className="w-12 h-12 rounded-lg bg-white border border-[#CBD5E1] p-1.5 shadow-xs shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-full h-full text-[#112D52]" fill="currentColor" aria-hidden="true">
              <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm9-2h2v2h-2v-2zm4 0h3v2h-3v-2zm-4 4h3v3h-3v-3zm5 0h2v3h-2v-3zm-2-2h2v2h-2v-2z" />
            </svg>
          </div>

          {/* Packaging plastic wrap highlight */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(125deg, rgba(255,255,255,0.65) 0%, transparent 45%, rgba(255,255,255,0.3) 100%)',
            }}
          />
        </div>

        {/* Cropped Smartphone showing Nguồn gốc sản phẩm */}
        <div
          className="relative z-10 w-[196px] sm:w-[210px] -mb-8 rounded-t-[32px] p-[6px] pb-0 rotate-[3deg] origin-bottom"
          style={{
            background: 'linear-gradient(145deg, #2B3648 0%, #141B26 60%, #243042 100%)',
            boxShadow: '0 18px 40px -10px rgba(20, 47, 99, 0.24)',
          }}
        >
          <div className="rounded-t-[26px] bg-white px-2.5 pt-2 pb-10 border border-black/30">
            <div className="flex items-center justify-between text-[8px] font-semibold text-[#112D52] mb-1.5">
              <span className="tabular-nums">9:41</span>
              <div className="h-[10px] w-[42px] rounded-full bg-[#111827]" />
              <div className="w-3 h-1.5 rounded-[2px] border border-[#112D52]/70" />
            </div>

            <div className="flex items-center gap-1 mb-2">
              <ChevronLeft className="w-3 h-3 text-[#112D52]" />
              <span className="font-display text-[10px] font-bold text-[#112D52] truncate">
                Nguồn gốc sản phẩm
              </span>
            </div>

            {/* Product Thumbnail inside phone */}
            <div className="h-12 rounded-xl bg-[#F6F8FA] border border-[#E2ECF4] flex items-center justify-center mb-2">
              <svg viewBox="0 0 80 44" className="w-16 h-9" aria-hidden="true">
                <ellipse cx="40" cy="24" rx="26" ry="13" fill="#F4CBA6" />
                <ellipse cx="34" cy="21" rx="13" ry="7" fill="#FBE4CE" />
              </svg>
            </div>

            {/* 4-Step Timeline matching Hero */}
            <div className="flex flex-col gap-1.5">
              {timeline.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-2">
                    <div className="relative flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-[#E8F8F0] border border-[#398441]/30 text-[#398441] flex items-center justify-center">
                        <Icon className="w-2.5 h-2.5" />
                      </div>
                      {idx < timeline.length - 1 && (
                        <div className="w-px h-2 bg-[#398441]/30" aria-hidden="true" />
                      )}
                    </div>
                    <span className="text-[8.5px] font-semibold text-[#112D52] truncate">
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
