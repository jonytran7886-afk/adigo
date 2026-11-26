import React from 'react';
import { QrCode, Sprout } from 'lucide-react';
import { CampaignConfig } from '../../config/campaignConfig';

interface CampaignProductShowcaseProps {
  config: CampaignConfig;
}

export const CampaignProductShowcase: React.FC<CampaignProductShowcaseProps> = ({
  config,
}) => {
  return (
    <div className="relative w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[340px] flex items-end justify-center select-none">
      {/* Golden-red depth backlight behind product stage */}
      <div
        aria-hidden="true"
        className="absolute inset-x-4 bottom-2 top-3 rounded-[28px] bg-radial from-[#FFD54F]/40 via-[#FF6B1A]/20 to-transparent blur-2xl pointer-events-none"
      />

      {/* Background Farm Portal (Sunlit herbal farm window) */}
      <div className="relative z-10 w-full max-w-[540px] lg:max-w-none h-full flex flex-col justify-end">
        <div className="relative ml-auto w-[92%] sm:w-[86%] lg:w-[88%] h-[165px] sm:h-[205px] lg:h-[235px] mb-10 sm:mb-12 rounded-[26px] rounded-tl-[84px] overflow-hidden border-2 border-[#FFE082]/75 shadow-[0_14px_34px_rgba(120,14,10,0.45)]">
          <img
            src={config.bannerAssets.farmLandscape}
            alt="Vùng nuôi gà thảo dược Organic Việt Nam"
            width={960}
            height={540}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#7A090B]/55 via-transparent to-[#FFF3C4]/15"
          />
          <span className="absolute top-2.5 right-3 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-[10.5px] font-medium text-white/95 border border-white/25">
            {config.bannerAssets.farmCaption}
          </span>
        </div>

        {/* Display Pedestal Shelf */}
        <div
          aria-hidden="true"
          className="relative z-10 mx-auto w-[96%] h-9 -mt-8 rounded-[50%] bg-gradient-to-b from-[#FFCA3A]/85 via-[#D9480F]/90 to-[#7C0D0D] border-t-2 border-[#FFF1A8]/90 shadow-[0_12px_28px_rgba(90,6,6,0.6)]"
        />

        {/* Foreground Product Composition: ONLY Whole Chickens */}
        <div className="absolute inset-x-0 bottom-3 sm:bottom-4 z-20 flex items-end justify-between gap-2 sm:gap-4 px-1 sm:px-3 pointer-events-none">
          {/* Primary Whole Chicken Platter */}
          <div className="relative w-[58%] sm:w-[56%] max-w-[320px] shrink-0">
            <div className="relative rounded-[22px] overflow-hidden border-2 border-[#FFE082]/85 shadow-[0_18px_36px_rgba(82,6,6,0.52)] bg-[#F7EFE4]">
              <img
                src={config.bannerAssets.wholeChickenPlatter}
                alt="Gà thịt nguyên con Organic Việt Nam trên thớt gỗ cùng thảo mộc"
                width={960}
                height={720}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/50 to-transparent"
              />
              <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between gap-2">
                <span className="text-[11px] sm:text-xs font-bold text-white drop-shadow-sm">
                  Gà ta nguyên con
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#398441]/90 text-[10px] font-semibold text-white">
                  <Sprout className="w-3 h-3" aria-hidden="true" />
                  Thảo dược
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Vacuum-Packed Whole Chicken with Real Dual-Brand Traceability Label */}
          <div className="relative w-[44%] sm:w-[44%] max-w-[250px] -ml-4 sm:-ml-2 mb-1 sm:mb-2">
            <div className="relative rounded-[20px] overflow-hidden border-2 border-white/85 shadow-[0_16px_32px_rgba(70,8,8,0.48)] bg-white">
              <img
                src={config.bannerAssets.vacuumPackedWholeChicken}
                alt="Gà thịt nguyên con đóng gói hút chân không sạch sẽ"
                width={960}
                height={720}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover object-center"
              />
              {/* Clean real HTML brand + QR packaging sticker overlay */}
              <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-xl p-1.5 shadow-md border border-[#E2EEF8] flex flex-col items-center gap-1 max-w-[82px]">
                <img
                  src={config.brandLogos.organicVietnam}
                  alt="Organic Việt Nam"
                  width={175}
                  height={65}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-3.5 w-auto object-contain"
                />
                <img
                  src={config.brandLogos.adigo}
                  alt="ADIGO"
                  width={2400}
                  height={499}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-2.5 w-auto object-contain"
                />
                <div className="w-7 h-7 rounded-md bg-[#F4F9F5] border border-[#CBE7D1] flex items-center justify-center text-[#142F63]">
                  <QrCode className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
              <div className="px-2.5 py-1.5 bg-gradient-to-r from-[#FFFDF7] to-[#F3FAFF] border-t border-[#E6EFF6] flex items-center justify-between gap-1">
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#142F63] truncate">
                  Đóng gói hút chân không
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
