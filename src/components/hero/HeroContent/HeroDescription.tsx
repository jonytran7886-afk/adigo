import React from 'react';
import { HERO_CONFIG } from '../../../config/heroConfig';

export const HeroDescription: React.FC = () => {
  return (
    <p className="mt-6 text-[15px] sm:text-[18px] lg:text-[19px] leading-[1.6] text-[#52677D] max-w-[560px]">
      {HERO_CONFIG.heroCopy.description}
    </p>
  );
};
