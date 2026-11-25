import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { HERO_CONFIG } from '../../../config/heroConfig';

interface HeroActionsProps {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
      {/* Primary CTA */}
      <button
        type="button"
        onClick={onPrimaryClick}
        className="group relative inline-flex items-center justify-center gap-2.5 h-[58px] px-8 rounded-full adigo-brand-gradient text-white text-[15px] font-semibold border border-white/45 shadow-[0_14px_30px_-6px_rgba(52,94,170,0.38),inset_0_1px_1px_rgba(255,255,255,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/80 hover:shadow-[0_18px_36px_-6px_rgba(52,94,170,0.45),inset_0_1px_2px_rgba(255,255,255,0.7)] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345EAA]"
      >
        <span>{HERO_CONFIG.heroCopy.primaryCta}</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      {/* Secondary CTA */}
      <button
        type="button"
        onClick={onSecondaryClick}
        className="group inline-flex items-center justify-center gap-2.5 h-[58px] px-7 rounded-full adigo-glass-strong text-[#142F63] text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/85 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345EAA]"
      >
        <PlayCircle className="w-5 h-5 text-[#142F63] transition-transform duration-200 group-hover:scale-105" />
        <span>{HERO_CONFIG.heroCopy.secondaryCta}</span>
      </button>
    </div>
  );
};
