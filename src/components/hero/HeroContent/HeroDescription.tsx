import React from 'react';
import { HERO_CONFIG } from '../../../config/heroConfig';

export const HeroDescription: React.FC = () => {
  return (
    <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17.5px] lg:text-[18.5px] leading-[1.6] text-[#52677D] max-w-[600px]">
      {HERO_CONFIG.heroCopy.description}
    </p>
  );
};
