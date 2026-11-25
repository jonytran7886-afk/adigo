import React from 'react';
import { HERO_CONFIG } from '../../../config/heroConfig';

export const HeroHeadline: React.FC = () => {
  return (
    <h1 className="mt-6 font-display font-extrabold text-[#112D52] tracking-[-0.025em] leading-[1.13] text-[clamp(2.25rem,4.1vw,4.15rem)] text-balance">
      <span className="block">{HERO_CONFIG.heroCopy.headlineLine1}</span>
      <span className="block mt-1">
        <span>{HERO_CONFIG.heroCopy.headlineLine2Prefix}</span>
        <span className="adigo-text-gradient">
          {HERO_CONFIG.heroCopy.headlineLine2Highlight}
        </span>
      </span>
    </h1>
  );
};
