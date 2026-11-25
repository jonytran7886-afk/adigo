import React, { useState } from 'react';
import { MARKETPLACE_CONFIG, MarketplaceTabId } from '../../config/marketplaceConfig';
import { MarketplaceBackground } from './MarketplaceBackground';
import { SectionIntroduction } from './SectionIntroduction';
import { MarketplaceShowcase } from './MarketplaceShowcase';

export const MarketplaceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MarketplaceTabId>('products');

  return (
    <section
      id={MARKETPLACE_CONFIG.sectionId}
      aria-labelledby="marketplace-section-heading"
      className="marketplace-section relative w-full overflow-x-clip py-20 sm:py-24 lg:py-28"
    >
      <MarketplaceBackground />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntroduction />

        <MarketplaceShowcase
          activeTab={activeTab}
          onSelectTab={setActiveTab}
        />
      </div>
    </section>
  );
};
