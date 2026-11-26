import { ResponsiveImage } from '../ResponsiveImage';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UserCheck } from 'lucide-react';
import { BrandLogo } from '../hero/Header/BrandLogo';
import { MART_CONFIG } from '../../config/martConfig';

export const ShopperVisual: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center select-none"
    >
      {/* Lifestyle Shopper Portrait Frame */}
      <div className="relative w-[176px] sm:w-[210px] xl:w-[232px] h-[250px] sm:h-[300px] xl:h-[332px] rounded-t-[116px] rounded-b-[28px] p-1.5 bg-white/75 backdrop-blur-md border border-white shadow-[0_22px_48px_rgba(20,47,99,0.18)] overflow-hidden">
        <div className="w-full h-full rounded-t-[110px] rounded-b-[22px] overflow-hidden bg-[#EAF5FF] relative">
          {!imgError ? (
            <ResponsiveImage
              src={MART_CONFIG.assets.shopperPortrait}
              alt="Người tiêu dùng sử dụng ứng dụng ADIGO khi mua sắm tại cửa hàng"
              width={960}
              height={717}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-[56%_22%]"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#EAF5FF] to-[#E8F8F0] flex flex-col items-center justify-center p-4 text-center">
              <UserCheck className="w-9 h-9 text-[#345EAA] mb-2" />
              <span className="text-xs font-semibold text-[#142F63]">
                Trải nghiệm mua sắm ADIGO
              </span>
            </div>
          )}

          {/* Subtle Bottom Blend */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#142F63]/20 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Modern ADIGO Green Shopping Basket with Packaged Produce */}
      <div className="relative -mt-14 sm:-mt-16 -ml-4 sm:-ml-6 w-[184px] sm:w-[214px] drop-shadow-[0_18px_28px_rgba(20,47,99,0.22)] z-20">
        {/* Top Products Rising Out of Basket */}
        <div className="relative px-3 flex items-end justify-between -mb-3 z-10">
          {/* Fresh Leafy Vegetables */}
          <svg viewBox="0 0 64 56" className="w-12 h-11 -ml-1" aria-hidden="true">
            <path d="M12 48 C6 28, 16 10, 32 8 C44 10, 48 26, 42 48 Z" fill="#4FA648" />
            <path d="M22 48 C18 30, 26 16, 40 16 C52 18, 56 32, 48 48 Z" fill="#71C258" />
            <path d="M28 46 C30 32, 34 24, 38 18" stroke="#D9F5C7" strokeWidth="2" strokeLinecap="round" />
          </svg>

          {/* Yellow Pepper & Egg Carton */}
          <svg viewBox="0 0 64 48" className="w-12 h-10 -mx-2" aria-hidden="true">
            <circle cx="24" cy="28" r="13" fill="#F5B727" />
            <circle cx="21" cy="23" r="4" fill="#FDE07E" fillOpacity="0.65" />
            <rect x="28" y="24" width="32" height="18" rx="4" fill="#DFC19E" />
            <ellipse cx="38" cy="24" rx="5" ry="7" fill="#F4C79B" />
            <ellipse cx="50" cy="24" rx="5" ry="7" fill="#F4C79B" />
          </svg>

          {/* Sealed Packaged Fresh Meat Tray */}
          <div className="w-[62px] h-[44px] rounded-xl bg-white border border-[#DCE8F2] shadow-sm p-1.5 flex items-center justify-center rotate-[7deg]">
            <div className="w-full h-full rounded-lg bg-[#FCE8E8] flex items-center justify-center relative overflow-hidden">
              <div className="w-9 h-5 rounded-md bg-[#C83E3E]" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(125deg, rgba(255,255,255,0.65) 0%, transparent 50%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Green ADIGO Branded Shopping Basket Body */}
        <div
          className="relative h-[68px] sm:h-[76px] rounded-t-[12px] rounded-b-[22px] border-t-[5px] border-[#4CAF50] flex items-center justify-center px-4 overflow-hidden"
          style={{
            background:
              'linear-gradient(160deg, #398441 0%, #2C6F38 60%, #20582B 100%)',
            boxShadow:
              'inset 0 2px 4px rgba(255,255,255,0.28), 0 12px 24px rgba(20,47,99,0.22)',
          }}
        >
          {/* Basket Ventilation Slots */}
          <div className="absolute inset-x-4 top-2.5 flex justify-between opacity-25 pointer-events-none">
            {[0, 1, 2, 3, 4, 5].map((slot) => (
              <span key={slot} className="w-1.5 h-6 rounded-full bg-[#13381A]" />
            ))}
          </div>

          {/* Official ADIGO Emblem Centered on Basket */}
          <div className="relative z-10 w-8 h-8 rounded-xl bg-white/95 p-1 shadow-xs flex items-center justify-center">
            <BrandLogo variant="icon" size="sm" className="!h-5 !w-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
