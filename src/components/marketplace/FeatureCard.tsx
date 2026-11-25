import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Store, Search, ShoppingCart } from 'lucide-react';
import {
  MARKETPLACE_CONFIG,
  MarketplaceFeatureCardId,
} from '../../config/marketplaceConfig';

interface FeatureCardProps {
  cardId: MarketplaceFeatureCardId;
  isHighlighted: boolean;
  delay?: number;
  onClick?: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  cardId,
  isHighlighted,
  delay = 0,
  onClick,
}) => {
  const card = MARKETPLACE_CONFIG.featureCards[cardId];

  const iconSpecs: Record<
    MarketplaceFeatureCardId,
    { Icon: React.ComponentType<{ className?: string }>; color: string; bg: string }
  > = {
    categories: {
      Icon: LayoutGrid,
      color: 'text-[#345EAA]',
      bg: 'bg-[#EAF5FF]',
    },
    stores: {
      Icon: Store,
      color: 'text-[#398441]',
      bg: 'bg-[#E8F8F0]',
    },
    search: {
      Icon: Search,
      color: 'text-[#345EAA]',
      bg: 'bg-[#EAF5FF]',
    },
    shopping: {
      Icon: ShoppingCart,
      color: 'text-[#398441]',
      bg: 'bg-[#E8F8F0]',
    },
  };

  const { Icon, color, bg } = iconSpecs[cardId];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group text-left w-full rounded-[26px] p-5 sm:p-6 transition-all duration-300 cursor-pointer flex flex-col items-start ${
        isHighlighted
          ? 'bg-white/84 border-2 border-[#4C9DC6]/70 shadow-[0_18px_36px_rgba(52,94,170,0.14)] -translate-y-1'
          : 'adigo-glass-strong hover:-translate-y-1 hover:bg-white/75'
      }`}
    >
      <div
        className={`w-13 h-13 sm:w-14 sm:h-14 rounded-[18px] ${bg} border border-white/95 shadow-[0_6px_16px_rgba(39,112,164,0.08)] flex items-center justify-center ${color} transition-transform duration-200 group-hover:scale-105`}
      >
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="mt-4 font-display text-[19px] sm:text-[21px] font-bold text-[#142F63] leading-snug">
        {card.title}
      </h3>

      <p className="mt-2 text-[14px] sm:text-[15.5px] text-[#52677D] leading-relaxed">
        {card.description}
      </p>
    </motion.button>
  );
};
