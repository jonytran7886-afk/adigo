import React from 'react';
import { HERO_CONFIG } from '../../../config/heroConfig';

export const HeroHeadline: React.FC = () => {
  return (
    <h1
      id="hero-section-heading"
      className="mt-4 sm:mt-5 font-display font-extrabold text-[#112D52] tracking-[-0.025em] leading-[1.13] text-[clamp(2.15rem,3.3vw,3.45rem)] text-balance"
    >
      <span className="block">{HERO_CONFIG.heroCopy.headlineLine1}</span>
      <span className="block mt-1">
        {HERO_CONFIG.heroCopy.headlineLine2Prefix ? (
          <span>{HERO_CONFIG.heroCopy.headlineLine2Prefix}</span>
        ) : null}
        <span className="adigo-text-gradient">
          {HERO_CONFIG.heroCopy.headlineLine2Highlight}
        </span>
      </span>
    </h1>
  );
};
