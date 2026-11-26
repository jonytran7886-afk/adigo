import React from 'react';
import { motion } from 'motion/react';
import { BrandLogo } from '../hero/Header/BrandLogo';

export const AdigoCore: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center select-none"
    >
      {/* Radial Aura Behind ADIGO Core Cube */}
      <div
        className="pointer-events-none absolute -top-8 w-[210px] h-[210px] rounded-full opacity-75 blur-xl"
        style={{
          background:
            'radial-gradient(circle, rgba(97, 177, 238, 0.55) 0%, rgba(164, 206, 70, 0.18) 45%, transparent 72%)',
        }}
        aria-hidden="true"
      />

      {/* 3D Frosted Glass Prism Housing Official ADIGO Emblem */}
      <div
        className="relative z-20 w-[116px] h-[116px] sm:w-[136px] sm:h-[136px] rounded-[30px] p-3 border-[2px] border-white/95 flex items-center justify-center shadow-[0_24px_52px_rgba(20,47,99,0.22),inset_0_2px_6px_rgba(255,255,255,0.92)]"
        style={{
          background:
            'linear-gradient(145deg, rgba(255, 255, 255, 0.92) 0%, rgba(226, 244, 255, 0.78) 55%, rgba(212, 244, 235, 0.82) 100%)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
        }}
      >
        {/* Specular Diagonal Sheen */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[28px] opacity-55"
          style={{
            background:
              'linear-gradient(125deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.12) 38%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        {/* Official Unaltered ADIGO 'A' Icon */}
        <div className="relative z-10 w-full h-full rounded-[22px] bg-white/95 border border-[#DCEBF7] shadow-inner flex items-center justify-center p-2.5">
          <BrandLogo variant="icon" size="lg" className="!h-16 !w-16 sm:!h-20 sm:!w-20" />
        </div>
      </div>

      {/* Concentric Technological Data Pedestal */}
      <div className="relative z-10 -mt-5 flex flex-col items-center" aria-hidden="true">
        {/* Top Glowing Cyan Core Ring */}
        <div
          className="w-[172px] sm:w-[206px] h-[44px] sm:h-[52px] rounded-[50%] border border-white/90 flex items-center justify-center shadow-[0_14px_32px_rgba(52,94,170,0.26)]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(76, 157, 198, 0.52) 0%, rgba(20, 47, 99, 0.25) 68%, rgba(255, 255, 255, 0.8) 100%)',
          }}
        >
          <div className="w-[74%] h-[62%] rounded-[50%] border border-dashed border-white/75" />
        </div>

        {/* Lower Frosted Technology Disc */}
        <div
          className="-mt-6 w-[224px] sm:w-[264px] h-[54px] sm:h-[62px] rounded-[50%] border border-white/85 shadow-[0_20px_40px_rgba(31,84,130,0.18),inset_0_2px_4px_rgba(255,255,255,0.85)]"
          style={{
            background:
              'linear-gradient(180deg, rgba(226, 246, 255, 0.85) 0%, rgba(169, 217, 241, 0.65) 100%)',
            backdropFilter: 'blur(12px)',
          }}
        />
      </div>
    </motion.div>
  );
};
