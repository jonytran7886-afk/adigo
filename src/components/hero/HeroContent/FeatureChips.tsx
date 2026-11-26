import React from 'react';
import { Layers, ShieldCheck, ShoppingCart } from 'lucide-react';
import { HERO_CONFIG } from '../../../config/heroConfig';

export const FeatureChips: React.FC<{ className?: string }> = ({ className = '' }) => {
  const iconMap = {
    layers: Layers,
    shield: ShieldCheck,
    cart: ShoppingCart,
  };

  return (
    <div
      className={`flex flex-wrap sm:grid sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-[630px] ${className}`}
    >
      {HERO_CONFIG.featureChips.map((chip) => {
        const Icon = iconMap[chip.icon];
        return (
          <div
            key={chip.id}
            className="h-[50px] sm:h-[54px] px-3.5 sm:px-4 rounded-[18px] adigo-glass-strong flex items-center justify-center gap-2 sm:gap-2.5"
          >
            <Icon className="w-[17px] h-[17px] sm:w-[18px] sm:h-[18px] text-[#398441] shrink-0" aria-hidden="true" />
            <span className="font-display text-xs sm:text-[13px] font-semibold text-[#112D52] whitespace-nowrap">
              {chip.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
