import React, { useState } from 'react';
import { MARKETPLACE_CONFIG, MarketplaceTabId } from '../../config/marketplaceConfig';
import { trackEvent } from '../../utils/analytics';
import { MarketplaceBackground } from './MarketplaceBackground';
import { SectionIntroduction } from './SectionIntroduction';
import { MarketplaceShowcase } from './MarketplaceShowcase';

export const MarketplaceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MarketplaceTabId>('products');

  const handleSelectTab = (tab: MarketplaceTabId) => {
    setActiveTab(tab);
    trackEvent('marketplace_tab_select', {
      section_id: 'marketplace',
      tab_id: tab,
    });
  };

  return (
    <section
      id={MARKETPLACE_CONFIG.sectionId}
      aria-labelledby="marketplace-section-heading"
      className="marketplace-section scroll-mt-20 relative w-full overflow-x-clip py-20 sm:py-24 lg:py-28"
    >
      <MarketplaceBackground />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntroduction />

        <MarketplaceShowcase
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
        />
      </div>
    </section>
  );
};
