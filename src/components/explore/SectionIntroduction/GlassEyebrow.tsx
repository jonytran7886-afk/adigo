import React from 'react';
import { Sparkles } from 'lucide-react';
import { EXPLORE_CONFIG } from '../../../config/exploreConfig';

export const GlassEyebrow: React.FC = () => {
  return (
    <div className="inline-flex items-center justify-center gap-2 h-[44px] sm:h-[46px] px-5 rounded-full adigo-glass-strong text-[#142F63] text-xs sm:text-[14px] font-semibold tracking-tight whitespace-nowrap shadow-[0_6px_18px_rgba(39,112,164,0.09)]">
      <Sparkles className="w-4 h-4 text-[#345EAA] shrink-0" />
      <span>{EXPLORE_CONFIG.eyebrow}</span>
    </div>
  );
};
