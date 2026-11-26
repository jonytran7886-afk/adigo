import React, { useState } from 'react';
import { MART_CONFIG, MartExperienceId } from '../../config/martConfig';
import { MartBackground } from './MartBackground';
import { MartContent, MartFeatureChipsGrid } from './MartContent';
import { OmnichannelShowcase } from './OmnichannelShowcase';
import { OmnichannelExperienceBar } from './OmnichannelExperienceBar';

export const AdigoMartSection: React.FC = () => {
  const [activeExperience, setActiveExperience] =
    useState<MartExperienceId>('store');

  return (
    <section
      id={MART_CONFIG.sectionId}
      aria-labelledby="mart-section-heading"
      className="adigo-mart-section scroll-mt-20 relative w-full overflow-x-clip py-20 sm:py-24 lg:py-28"
    >
      <MartBackground />

      <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Split Layout:
            Desktop (lg+): Left 37% Introduction + 2x2 Chips | Right 63% Omnichannel Showcase
            Mobile / Tablet (< lg): Intro Copy -> Omnichannel Showcase -> 4 Feature Chips -> Experience Bar
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-start lg:items-center gap-8 lg:gap-6 xl:gap-10">
          {/* Vùng A – Left Introduction */}
          <div className="w-full lg:col-span-5 xl:col-span-4">
            <MartContent
              activeExperience={activeExperience}
              showChips={true}
            />
          </div>

          {/* Vùng B – Right Omnichannel Showcase */}
          <div className="w-full lg:col-span-7 xl:col-span-8">
            <OmnichannelShowcase
              activeExperience={activeExperience}
              onSelectExperience={setActiveExperience}
            />
          </div>

          {/* Mobile/Tablet Feature Chips (placed after Omnichannel Showcase per Section 18) */}
          <div className="w-full flex justify-center lg:hidden">
            <MartFeatureChipsGrid activeExperience={activeExperience} />
          </div>
        </div>

        {/* Vùng C – Bottom Omnichannel Experience Bar */}
        <OmnichannelExperienceBar
          activeExperience={activeExperience}
          onSelectExperience={setActiveExperience}
        />
      </div>
    </section>
  );
};
