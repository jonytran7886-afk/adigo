import React from 'react';
import { EXPLORE_CONFIG } from '../../../config/exploreConfig';

export const SectionHeadline: React.FC = () => {
  return (
    <h2
      id="explore-section-heading"
      className="mt-5 font-display font-extrabold text-[#142F63] tracking-[-0.025em] leading-[1.18] text-[clamp(1.95rem,3.4vw,3.35rem)] text-center text-balance"
    >
      <span>{EXPLORE_CONFIG.headlinePrefix}</span>
      <span className="adigo-text-gradient">{EXPLORE_CONFIG.headlineHighlight}</span>
    </h2>
  );
};
