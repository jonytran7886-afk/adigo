import React from 'react';
import { EXPLORE_CONFIG } from '../../config/exploreConfig';
import { SectionBackground } from './SectionBackground';
import { SectionIntroduction } from './SectionIntroduction/SectionIntroduction';
import { ExperienceGrid } from './ExperienceGrid/ExperienceGrid';

export const ExploreSection: React.FC = () => {
  return (
    <section
      id={EXPLORE_CONFIG.sectionId}
      className="relative isolate w-full explore-section-bg py-16 sm:py-20 lg:py-24 overflow-x-clip"
    >
      <SectionBackground />

      <div className="relative z-10 max-w-[1600px] mx-auto px-[5%] lg:px-[5.5%]">
        <SectionIntroduction />
        <ExperienceGrid />
      </div>
    </section>
  );
};
