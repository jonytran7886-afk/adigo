import React, { useRef } from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { HERO_CONFIG } from '../../../config/heroConfig';
import { useProductDiscovery } from '../../product-discovery/ProductDiscoveryModule';

interface HeroActionsProps {
  onSecondaryClick: () => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  onSecondaryClick,
}) => {
  const { openPreorder } = useProductDiscovery();
  const buyButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
      {/* Primary CTA: Đặt mua ngay */}
      <button
        ref={buyButtonRef}
        type="button"
        onClick={() => openPreorder('hero_primary_cta', buyButtonRef.current)}
        className="hero-primary-gloss group inline-flex items-center justify-center gap-2.5 h-[56px] sm:h-[58px] px-7 sm:px-8 sm:min-w-[204px] rounded-full font-display text-[15px] font-semibold text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345EAA]"
      >
        <ShoppingCart
          className="relative z-10 w-[18px] h-[18px] shrink-0"
          aria-hidden="true"
        />
        <span className="relative z-10">{HERO_CONFIG.heroCopy.primaryCta}</span>
        <ArrowRight
          className="relative z-10 w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </button>

      {/* Secondary CTA: Khám phá ADIGO */}
      <button
        type="button"
        onClick={onSecondaryClick}
        className="group inline-flex items-center justify-center gap-2.5 h-[56px] sm:h-[58px] px-7 sm:px-8 sm:min-w-[204px] rounded-full adigo-glass-strong text-[#142F63] font-display text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/85 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345EAA]"
      >
        <span>{HERO_CONFIG.heroCopy.secondaryCta}</span>
        <ArrowRight
          className="w-4 h-4 text-[#345EAA] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};
