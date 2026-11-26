import React from 'react';
import { motion } from 'motion/react';
import { BrandLogo } from '../hero/Header/BrandLogo';

export const AdigoCore: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center select-none"
    >
      {/* Multi-Layer Luminous Cyan & Deep-Blue Aura */}
      <div
        className="pointer-events-none absolute -top-12 w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full opacity-90 blur-2xl"
        style={{
          background:
            'radial-gradient(circle, rgba(66, 200, 239, 0.68) 0%, rgba(22, 118, 210, 0.32) 45%, rgba(57, 132, 65, 0.14) 68%, transparent 78%)',
        }}
        aria-hidden="true"
      />

      {/* Enlarged 3D Refracting Glass Prism Housing Official ADIGO Emblem */}
      <div
        className="relative z-20 w-[156px] h-[156px] sm:w-[178px] sm:h-[178px] xl:w-[194px] xl:h-[194px] rounded-[38px] p-3.5 sm:p-4 border-[2.5px] border-white/95 flex items-center justify-center shadow-[0_30px_68px_rgba(20,47,99,0.28),0_10px_28px_rgba(22,118,210,0.24),inset_0_3px_10px_rgba(255,255,255,0.95)]"
        style={{
          background:
            'linear-gradient(145deg, rgba(255, 255, 255, 0.94) 0%, rgba(214, 241, 255, 0.82) 52%, rgba(196, 242, 236, 0.84) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* Outer Prismatic Rim Glow */}
        <div
          className="pointer-events-none -inset-[3px] absolute rounded-[40px] border border-[#42C8EF]/55"
          aria-hidden="true"
        />

        {/* Specular Diagonal Glass Sheen */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[36px] opacity-65"
          style={{
            background:
              'linear-gradient(125deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.16) 38%, transparent 58%, rgba(66,200,239,0.22) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Official Unaltered ADIGO 'A' Icon Core Chamber */}
        <div className="relative z-10 w-full h-full rounded-[28px] bg-white/98 border border-[#D4E8FA] shadow-[inset_0_4px_16px_rgba(20,47,99,0.09),0_8px_20px_rgba(20,47,99,0.08)] flex items-center justify-center p-4">
          <BrandLogo
            variant="icon"
            size="lg"
            className="!h-24 !w-24 sm:!h-28 sm:!w-28 xl:!h-32 xl:!w-32 drop-shadow-[0_6px_14px_rgba(22,118,210,0.2)]"
          />
        </div>
      </div>

      {/* Concentric Technological Data Pedestal */}
      <div className="relative z-10 -mt-6 flex flex-col items-center" aria-hidden="true">
        {/* Top Glowing Cyan Core Ring */}
        <div
          className="w-[218px] sm:w-[254px] h-[54px] sm:h-[62px] rounded-[50%] border-[1.5px] border-white/95 flex items-center justify-center shadow-[0_18px_40px_rgba(20,47,99,0.3)]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(66, 200, 239, 0.7) 0%, rgba(22, 118, 210, 0.42) 56%, rgba(20, 47, 99, 0.3) 84%, rgba(255, 255, 255, 0.85) 100%)',
          }}
        >
          <div className="w-[76%] h-[62%] rounded-[50%] border border-dashed border-white/85 flex items-center justify-center">
            <div className="w-[62%] h-[54%] rounded-[50%] bg-white/45 blur-[2px]" />
          </div>
        </div>

        {/* Lower Frosted Technology Disc */}
        <div
          className="-mt-7 w-[274px] sm:w-[318px] h-[64px] sm:h-[74px] rounded-[50%] border-[1.5px] border-white/90 shadow-[0_24px_48px_rgba(20,47,99,0.22),inset_0_2px_6px_rgba(255,255,255,0.9)]"
          style={{
            background:
              'linear-gradient(180deg, rgba(226, 246, 255, 0.9) 0%, rgba(145, 212, 245, 0.7) 100%)',
            backdropFilter: 'blur(14px)',
          }}
        />
      </div>
    </motion.div>
  );
};
