import React from 'react';
import { EXPLORE_CONFIG } from '../../../config/exploreConfig';

export const SectionDescription: React.FC = () => {
  return (
    <p className="mt-4 sm:mt-5 text-[15px] sm:text-[18px] lg:text-[19px] leading-[1.6] text-[#52677D] max-w-[850px] mx-auto text-center">
      {EXPLORE_CONFIG.description}
    </p>
  );
};
