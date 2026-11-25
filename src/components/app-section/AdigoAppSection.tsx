import React, { useState } from 'react';
import { APP_SECTION_CONFIG, AppTabId } from '../../config/appSectionConfig';
import { SectionBackground } from './SectionBackground';
import { SectionIntroduction } from './SectionIntroduction';
import { InteractiveProductShowcase } from './InteractiveProductShowcase/InteractiveProductShowcase';
import { ExperienceDock } from './ExperienceDock';

export const AdigoAppSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTabId>('home');

  const activeConfig =
    APP_SECTION_CONFIG.tabs.find((t) => t.id === activeTab) ||
    APP_SECTION_CONFIG.tabs[0];

  return (
    <section
      id={APP_SECTION_CONFIG.sectionId}
      className="relative isolate w-full py-16 sm:py-20 lg:py-24 overflow-x-clip"
    >
      <SectionBackground />

      <div className="relative z-10 max-w-[1600px] mx-auto px-[5%] lg:px-[5.5%] flex flex-col">
        <SectionIntroduction />

        <InteractiveProductShowcase
          activeTab={activeTab}
          highlightedCard={activeConfig.relatedCard}
          onSelectTab={setActiveTab}
          dockSlot={<ExperienceDock activeTab={activeTab} onSelectTab={setActiveTab} />}
        />
      </div>
    </section>
  );
};
