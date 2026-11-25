import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONFIG } from '../../../config/heroConfig';

interface HeaderCTAProps {
  onClick: () => void;
}

export const HeaderCTA: React.FC<HeaderCTAProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group hidden sm:inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full adigo-glass-strong text-[#142F63] text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/85 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345EAA]"
    >
      <span>{HERO_CONFIG.heroCopy.headerCta}</span>
      <ArrowRight className="w-4 h-4 text-[#142F63] transition-transform duration-200 group-hover:translate-x-0.5" />
    </button>
  );
};
