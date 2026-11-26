import React from 'react';
import { motion } from 'motion/react';
import { BrandLogo } from '../hero/Header/BrandLogo';

export const FloatingQRCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-[156px] sm:w-[174px] rounded-[26px] p-3 border-[1.5px] border-white/90 shadow-[0_24px_48px_rgba(31,84,130,0.18),inset_0_1px_2px_rgba(255,255,255,0.88)] lg:rotate-[3deg] animate-float-slow select-none"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      {/* Crisp Illustrative QR Matrix with Official ADIGO Emblem Center */}
      <div className="relative w-full aspect-square rounded-[18px] bg-white border border-[#DCEAF5] p-2.5 shadow-inner flex items-center justify-center">
        <svg
          viewBox="0 0 36 36"
          className="w-full h-full text-[#142F63]"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* Top-left finder */}
          <path d="M2 2h10v10H2V2zm2 2v6h6V4H4zm2 2h2v2H6V6z" />
          {/* Top-right finder */}
          <path d="M24 2h10v10H24V2zm2 2v6h6V4h-6zm2 2h2v2h-2V6z" />
          {/* Bottom-left finder */}
          <path d="M2 24h10v10H2V24zm2 2v6h6v-6H4zm2 2h2v2H6v-2z" />
          {/* Clean data modules */}
          <path d="M14 2h2v2h-2V2zm4 0h2v4h-2V2zm-4 4h2v2h-2V6zm6 2h2v2h-2V8zM2 14h2v2H2v-2zm4 0h4v2H6v-2zm0 4h2v4H6v-4zm4 0h2v2h-2v-2zm16-4h2v2h-2v-2zm4 0h4v2h-4v-2zm-4 4h2v4h-2v-4zm6 2h2v2h-2v-2zm-18 4h2v2h-2v-2zm4 2h2v4h-2v-4zm4-2h2v2h-2v-2zm4 4h4v2h-4v-2zm-10 4h2v2h-2v-2zm6 0h2v2h-2v-2zm6-4h2v4h-2v-4zm4 2h2v4h-2v-4z" />
        </svg>

        {/* Centered Official ADIGO Icon Hub */}
        <div className="absolute w-9 h-9 rounded-xl bg-white border border-[#D4E6F5] shadow-sm flex items-center justify-center">
          <BrandLogo variant="icon" size="sm" className="!h-6 !w-6" />
        </div>
      </div>

      {/* Text Label */}
      <div className="mt-2.5 text-center">
        <p className="font-display text-[13px] font-bold text-[#142F63] leading-snug">
          Quét mã truy xuất
        </p>
        <p className="mt-0.5 text-[10px] font-medium text-[#52677D]">
          Mã QR minh họa
        </p>
      </div>
    </motion.div>
  );
};
