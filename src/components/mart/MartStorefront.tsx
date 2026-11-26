import React, { useState } from 'react';
import { Store } from 'lucide-react';
import { BrandLogo } from '../hero/Header/BrandLogo';
import { MART_CONFIG } from '../../config/martConfig';

export const MartStorefront: React.FC = () => {
  const [interiorError, setInteriorError] = useState(false);
  const [posterError, setPosterError] = useState(false);

  return (
    <div className="relative w-full h-[320px] sm:h-[390px] lg:h-[430px] rounded-[28px] overflow-hidden border border-white/80 shadow-[0_24px_56px_rgba(20,47,99,0.16)] bg-[#EBF4FC] select-none">
      {/* Top Architectural Fascia Signboard */}
      <div
        className="relative z-20 h-[76px] sm:h-[88px] px-5 sm:px-7 flex items-center justify-between"
        style={{
          background:
            'linear-gradient(108deg, #103A73 0%, #1F5CA8 58%, #16498B 100%)',
        }}
      >
        {/* Subtle Glass Sheen Across Fascia */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              'linear-gradient(115deg, rgba(255,255,255,0.45) 0%, transparent 45%, rgba(255,255,255,0.2) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Official ADIGO Logo + Mart Lockup */}
        <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 md:pl-[18%] lg:pl-[26%]">
          <div className="px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_6px_16px_rgba(10,28,58,0.25)] flex items-center">
            <BrandLogo variant="horizontal" size="sm" className="!h-[20px] sm:!h-[24px]" />
          </div>
          <span className="font-display font-extrabold text-[22px] sm:text-[28px] tracking-tight text-[#A4CE46] drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
            Mart
          </span>
        </div>

        <span className="relative z-10 hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-white/12 border border-white/25 text-[10px] font-medium text-white/90 whitespace-nowrap">
          Điểm bán đa kênh
        </span>

        {/* Brand Accent Band */}
        <div
          className="absolute inset-x-0 bottom-0 h-[7px] sm:h-[8px]"
          style={{
            background:
              'linear-gradient(90deg, #65B848 0%, #A4CE46 65%, #4C9DC6 100%)',
          }}
        />
      </div>

      {/* Storefront Glass Windows & Illuminated Interior */}
      <div className="relative h-[calc(100%-76px)] sm:h-[calc(100%-88px)] grid grid-cols-12 bg-[#DCEAF5]">
        {/* Main Retail Interior View Behind Glass Mullions */}
        <div className="col-span-8 sm:col-span-8 relative overflow-hidden border-r-[4px] border-[#1F3147]">
          {!interiorError ? (
            <img
              src={MART_CONFIG.assets.storeInterior}
              alt="Không gian trưng bày sản phẩm bên trong mô hình ADIGO Mart"
              width={960}
              height={536}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setInteriorError(true)}
              className="w-full h-full object-cover object-[28%_90%] scale-[1.35] origin-bottom"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#F2F8FD] to-[#DDEEF9] flex flex-col items-center justify-center p-4 text-center">
              <Store className="w-10 h-10 text-[#345EAA]/60 mb-2" />
              <span className="text-xs font-semibold text-[#142F63]">
                Không gian bán lẻ ADIGO Mart
              </span>
            </div>
          )}

          {/* Architectural Glass Reflection & Mullion Frame */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[3px] bg-[#1F3147]/80" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(125deg, rgba(255,255,255,0.28) 0%, transparent 38%, rgba(20,47,99,0.08) 100%)',
            }}
          />

          {/* Subtle Storefront Interior Overhead Lighting Glow */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-12 opacity-65"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.65) 0%, transparent 100%)',
            }}
          />
        </div>

        {/* Right Storefront Glass Window Display Poster */}
        <div className="col-span-4 relative overflow-hidden bg-gradient-to-b from-[#EAF4FC] to-[#D4E9F8] p-2.5 sm:p-3.5 flex flex-col justify-between">
          <div className="w-full h-full rounded-[16px] bg-white/95 border border-white shadow-[0_10px_24px_rgba(20,47,99,0.10)] overflow-hidden flex flex-col justify-between">
            <div className="px-2.5 pt-2.5 pb-1.5">
              <p className="font-display font-extrabold text-[11px] sm:text-[13px] text-[#142F63] leading-tight">
                Thực phẩm
                <span className="block text-[#398441]">tươi ngon</span>
                <span className="block">mỗi ngày</span>
              </p>
            </div>
            <div className="relative flex-1 min-h-[110px] overflow-hidden">
              {!posterError ? (
                <img
                  src={MART_CONFIG.assets.posterProduce}
                  alt="Sản phẩm tươi ngon trưng bày tại cửa hàng ADIGO Mart"
                  width={960}
                  height={536}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => setPosterError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full bg-[#E8F8F0]" />
              )}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Architectural Sill Base */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2.5 bg-[#1B2C42]/90"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
