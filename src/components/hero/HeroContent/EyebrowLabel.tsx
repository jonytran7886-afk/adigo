import React from 'react';
import { Sparkles } from 'lucide-react';
import { HERO_CONFIG } from '../../../config/heroConfig';

export const EyebrowLabel: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2.5 h-[44px] px-5 rounded-full adigo-glass-strong text-[#142F63] text-xs sm:text-[13px] font-semibold tracking-tight whitespace-nowrap">
      <Sparkles className="w-4 h-4 text-[#345EAA] shrink-0" />
      <span>{HERO_CONFIG.heroCopy.eyebrow}</span>
    </div>
  );
};
