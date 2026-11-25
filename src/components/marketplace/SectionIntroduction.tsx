import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { MARKETPLACE_CONFIG } from '../../config/marketplaceConfig';

export const SectionIntroduction: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center justify-center gap-2 h-[44px] sm:h-[46px] px-5 rounded-full adigo-glass-strong text-[#142F63] text-xs sm:text-[14px] font-semibold tracking-tight whitespace-nowrap shadow-[0_6px_18px_rgba(39,112,164,0.09)]"
      >
        <ShoppingCart className="w-4 h-4 text-[#345EAA] shrink-0" />
        <span>{MARKETPLACE_CONFIG.eyebrow}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 font-display font-extrabold text-[#142F63] tracking-[-0.025em] leading-[1.18] text-[clamp(1.9rem,3.3vw,3.25rem)] text-center text-balance"
      >
        <span>{MARKETPLACE_CONFIG.headlinePrefix}</span>
        <span className="adigo-text-gradient">{MARKETPLACE_CONFIG.headlineHighlight}</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 sm:mt-5 text-[15px] sm:text-[18px] lg:text-[19px] leading-[1.6] text-[#52677D] max-w-[900px] mx-auto text-center"
      >
        {MARKETPLACE_CONFIG.description}
      </motion.p>
    </div>
  );
};
