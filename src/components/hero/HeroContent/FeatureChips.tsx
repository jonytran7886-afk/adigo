import React from 'react';
import { ShoppingCart, ShieldCheck, Share2 } from 'lucide-react';
import { HERO_CONFIG } from '../../../config/heroConfig';

export const FeatureChips: React.FC<{ className?: string }> = ({ className = '' }) => {
  const iconMap = {
    cart: ShoppingCart,
    shield: ShieldCheck,
    network: Share2,
  };

  return (
    <div className={`grid grid-cols-3 gap-2.5 sm:gap-3.5 w-full max-w-[540px] ${className}`}>
      {HERO_CONFIG.featureChips.map((chip) => {
        const Icon = iconMap[chip.icon];
        return (
          <div
            key={chip.id}
            className="h-[54px] sm:h-[58px] px-3 sm:px-5 rounded-[20px] adigo-glass-strong flex items-center justify-center sm:justify-start gap-2 sm:gap-3"
          >
            <Icon className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-[#398441] shrink-0" />
            <span className="font-display text-xs sm:text-[14px] font-semibold text-[#112D52] whitespace-nowrap">
              {chip.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
