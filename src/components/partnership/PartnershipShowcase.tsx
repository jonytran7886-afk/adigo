import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Handshake, TrendingUp } from 'lucide-react';
import { BrandLogo } from '../hero/Header/BrandLogo';
import { FoodThumbnail } from '../hero/ProductShowcase/ProductVisuals';
import { PARTNERSHIP_CONFIG } from '../../config/partnershipConfig';

export const PartnershipShowcase: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full pt-2 pb-4 select-none"
    >
      {/* Back Layered 3D Glass Ecosystem Frame */}
      <div className="relative w-full min-h-[340px] sm:min-h-[410px] lg:min-h-[440px] flex flex-col justify-between">
        {/* Decorative Tilted Glass Plane Behind Right Edge with Abstract Growth Silhouette */}
        <div
          className="hidden sm:flex flex-col justify-between items-end absolute right-1 top-3 w-[44%] h-[78%] rounded-[28px] border border-white/80 p-5 shadow-[0_18px_42px_rgba(31,84,130,0.10)] rotate-[2deg] z-0"
          style={{
            background:
              'linear-gradient(155deg, rgba(255, 255, 255, 0.45) 0%, rgba(169, 217, 241, 0.25) 100%)',
            backdropFilter: 'blur(16px)',
          }}
          aria-hidden="true"
        >
          {/* Abstract Growth Arrow & Bars (Zero Fake Numbers) */}
          <div className="w-full h-full flex flex-col justify-center items-end opacity-60 pr-2">
            <TrendingUp className="w-10 h-10 text-white mb-2" />
            <div className="flex items-end gap-2 h-24">
              <span className="w-4 h-10 rounded-t-md bg-white/55" />
              <span className="w-4 h-14 rounded-t-md bg-white/65" />
              <span className="w-4 h-20 rounded-t-md bg-white/75" />
              <span className="w-4 h-24 rounded-t-md bg-white/85" />
            </div>
          </div>
        </div>

        {/* Main Front Frosted Glass Showcase Card */}
        <div
          className="relative z-10 w-[94%] sm:w-[90%] rounded-[30px] border-[1.5px] border-white/90 shadow-[0_24px_56px_rgba(20,47,99,0.16),inset_0_1px_2px_rgba(255,255,255,0.85)] overflow-hidden p-4 sm:p-6 flex flex-col justify-between gap-4"
          style={{
            background:
              'linear-gradient(155deg, rgba(255, 255, 255, 0.72) 0%, rgba(226, 244, 255, 0.56) 60%, rgba(206, 240, 232, 0.62) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Top Row: Centered Official ADIGO Vertical Logo */}
          <div className="flex items-center justify-between gap-3">
            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-white/85 border border-white text-[11px] font-semibold text-[#345EAA] shadow-2xs">
              Kết nối hệ sinh thái ADIGO
            </span>

            <div className="mx-auto sm:mx-0 px-4 py-2 rounded-[18px] bg-white/95 border border-white shadow-[0_10px_24px_rgba(20,47,99,0.10)] flex items-center justify-center">
              <BrandLogo variant="vertical" size="sm" className="!h-11 sm:!h-13" />
            </div>

            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-[#E8F8F0]/90 border border-white text-[11px] font-semibold text-[#398441] shadow-2xs">
              Đồng hành dài hạn
            </span>
          </div>

          {/* Middle Visual: Authentic Partners Photography + Central Handshake Medallion */}
          <div className="relative h-[180px] sm:h-[220px] rounded-[22px] overflow-hidden border border-white/90 shadow-[0_12px_28px_rgba(20,47,99,0.12)] bg-[#EAF5FF]">
            {!imgError ? (
              <img
                src={PARTNERSHIP_CONFIG.assets.partnerCommunity}
                alt="Đối tác sản xuất và kinh doanh đồng hành cùng ADIGO"
                width={960}
                height={536}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-[50%_24%]"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#EAF5FF] to-[#E8F8F0] flex items-center justify-center">
                <Handshake className="w-12 h-12 text-[#345EAA]" />
              </div>
            )}

            {/* Soft Bottom Gradient Scrim */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 45%, rgba(20, 47, 99, 0.35) 100%)',
              }}
              aria-hidden="true"
            />

            {/* Central Handshake Connection Medallion */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white shadow-[0_8px_20px_rgba(20,47,99,0.22)] flex items-center gap-2 whitespace-nowrap">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#345EAA] to-[#398441] flex items-center justify-center text-white">
                <Handshake className="w-3.5 h-3.5" />
              </span>
              <span className="font-display text-[11.5px] font-bold text-[#142F63]">
                Hợp tác cùng phát triển
              </span>
            </div>
          </div>

          {/* Bottom Strip: Glass Connection Ring Linking 4 Product Tiles + Mini ADIGO Smartphone */}
          <div className="relative pt-1">
            {/* Subtle Luminous Connection Ribbon Behind Tiles */}
            <div
              className="pointer-events-none absolute inset-x-4 top-1/2 -translate-y-1/2 h-8 rounded-full blur-md opacity-60"
              style={{
                background:
                  'linear-gradient(90deg, rgba(76, 157, 198, 0.45) 0%, rgba(99, 218, 183, 0.55) 50%, rgba(52, 94, 170, 0.45) 100%)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-5 gap-2 sm:gap-3 items-center">
              {PARTNERSHIP_CONFIG.ecosystemTiles.map((tile) => (
                <div
                  key={tile.id}
                  className="rounded-[16px] bg-white/92 border border-white p-1.5 shadow-[0_8px_18px_rgba(20,47,99,0.10)] flex flex-col items-center"
                >
                  <div className="w-full h-[52px] sm:h-[64px] rounded-[11px] overflow-hidden bg-[#F4F8FB]">
                    <FoodThumbnail type={tile.visual} />
                  </div>
                  <span className="mt-1 text-[9px] sm:text-[10px] font-bold text-[#142F63] truncate max-w-full">
                    {tile.label}
                  </span>
                </div>
              ))}

              {/* Mini ADIGO Branded Smartphone */}
              <div
                className="rounded-[18px] p-[4px] shadow-[0_12px_24px_rgba(20,47,99,0.22)] mx-auto w-full max-w-[82px]"
                style={{
                  background:
                    'linear-gradient(145deg, #2B3648 0%, #141B26 55%, #243042 100%)',
                }}
              >
                <div className="h-[68px] sm:h-[82px] rounded-[14px] bg-white flex flex-col items-center justify-center p-1.5 gap-1">
                  <BrandLogo variant="icon" size="sm" className="!h-7 !w-7 sm:!h-8 sm:!w-8" />
                  <span className="text-[7.5px] sm:text-[8px] font-extrabold text-[#142F63] tracking-tight">
                    ADIGO App
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
