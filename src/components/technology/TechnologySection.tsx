import React, { useState } from 'react';
import {
  TECHNOLOGY_CONFIG,
  TechnologyExperienceId,
} from '../../config/technologyConfig';
import { TechnologyBackground } from './TechnologyBackground';
import {
  TechnologyContent,
  TechnologyFeatureGrid,
} from './TechnologyContent';
import { TechnologyShowcase } from './TechnologyShowcase';
import { TechnologyExperienceBar } from './TechnologyExperienceBar';

export const TechnologySection: React.FC = () => {
  const [activeExperience, setActiveExperience] =
    useState<TechnologyExperienceId>('data');

  return (
    <section
      id={TECHNOLOGY_CONFIG.sectionId}
      aria-labelledby="technology-section-heading"
      className="technology-section scroll-mt-20 relative w-full overflow-x-clip py-20 sm:py-24 lg:py-28"
    >
      <TechnologyBackground />

      <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main 2-Column Split (Desktop: 38% Left | 62% Right) */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-start lg:items-center gap-8 lg:gap-6 xl:gap-10">
          <div className="w-full lg:col-span-5 xl:col-span-4">
            <TechnologyContent
              activeExperience={activeExperience}
              showChips={true}
            />
          </div>

          <div className="w-full lg:col-span-7 xl:col-span-8">
            <TechnologyShowcase
              activeExperience={activeExperience}
              onSelectExperience={setActiveExperience}
            />
          </div>

          {/* Mobile/Tablet Feature Chips (placed cleanly after Showcase) */}
          <div className="w-full flex justify-center lg:hidden">
            <TechnologyFeatureGrid activeExperience={activeExperience} />
          </div>
        </div>

        {/* Bottom Technology Experience Bar */}
        <TechnologyExperienceBar
          activeExperience={activeExperience}
          onSelectExperience={setActiveExperience}
        />
      </div>
    </section>
  );
};
