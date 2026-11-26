import React from 'react';
import { motion } from 'motion/react';
import { Handshake, Sprout, Store, Truck, Users } from 'lucide-react';
import { PARTNERSHIP_CONFIG } from '../../config/partnershipConfig';

export const PartnerCardsGrid: React.FC = () => {
  const renderIcon = (icon: 'sprout' | 'store' | 'truck' | 'users') => {
    switch (icon) {
      case 'sprout':
        return <Sprout className="w-5 h-5 text-[#398441]" />;
      case 'store':
        return <Store className="w-5 h-5 text-[#345EAA]" />;
      case 'truck':
        return <Truck className="w-5 h-5 text-[#24916E]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#168CA9]" />;
    }
  };

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 w-full">
      {PARTNERSHIP_CONFIG.partnerCards.map((card, idx) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.45,
            delay: 0.14 + idx * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="h-full rounded-[24px] p-3.5 sm:p-4 adigo-glass-strong border-[1.5px] border-white/88 shadow-[0_14px_30px_rgba(31,84,130,0.08)] flex flex-col items-start text-left"
        >
          <div className="w-11 h-11 rounded-[15px] bg-gradient-to-br from-white/95 to-[#EAF5FF] border border-white shadow-[0_6px_14px_rgba(39,112,164,0.08)] flex items-center justify-center shrink-0">
            {renderIcon(card.icon)}
          </div>
          <h3 className="mt-3 font-display text-[14.5px] sm:text-[15.5px] font-bold text-[#142F63] leading-snug">
            {card.title}
          </h3>
          <p className="mt-1 text-[12px] sm:text-[12.5px] text-[#52677D] leading-relaxed">
            {card.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export const PartnershipContent: React.FC = () => {
  return (
    <div className="flex flex-col items-start text-left">
      {/* Glass Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center justify-center gap-2.5 h-[44px] sm:h-[46px] px-5 sm:px-6 rounded-full adigo-glass-strong text-[#142F63] text-xs sm:text-[14px] font-semibold tracking-tight whitespace-nowrap shadow-[0_6px_18px_rgba(39,112,164,0.09)]"
      >
        <Handshake className="w-4 h-4 text-[#345EAA] shrink-0" />
        <span>{PARTNERSHIP_CONFIG.eyebrow}</span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        id="partnership-section-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 font-display font-extrabold tracking-[-0.025em] leading-[1.15] text-[clamp(2rem,3.3vw,3.45rem)] text-left"
      >
        <span className="block text-[#142F63]">
          {PARTNERSHIP_CONFIG.headlineLine1}
        </span>
        <span className="block">
          <span className="text-[#142F63]">
            {PARTNERSHIP_CONFIG.headlineLine2Prefix}
          </span>
          <span className="adigo-text-gradient">
            {PARTNERSHIP_CONFIG.headlineLine2Highlight}
          </span>
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 sm:mt-5 text-[15px] sm:text-[17.5px] leading-[1.6] text-[#52677D] max-w-[580px]"
      >
        {PARTNERSHIP_CONFIG.description}
      </motion.p>

      {/* 4 Glass Partner Cards (Desktop inline; mobile renders cleanly below Showcase) */}
      <div className="hidden lg:block mt-7 w-full">
        <PartnerCardsGrid />
      </div>
    </div>
  );
};
