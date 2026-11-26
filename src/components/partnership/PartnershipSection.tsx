import React from 'react';
import { PARTNERSHIP_CONFIG } from '../../config/partnershipConfig';
import { PartnershipBackground } from './PartnershipBackground';
import {
  PartnershipContent,
  PartnerCardsGrid,
} from './PartnershipContent';
import { PartnershipShowcase } from './PartnershipShowcase';
import { FinalCTABanner } from './FinalCTABanner';

interface PartnershipSectionProps {
  onPartnerCta: () => void;
  onExploreApp: () => void;
  onOpenConsentSettings?: () => void;
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({
  onPartnerCta,
  onExploreApp,
  onOpenConsentSettings,
}) => {
  return (
    <section
      id={PARTNERSHIP_CONFIG.sectionId}
      aria-labelledby="partnership-section-heading"
      className="partnership-section scroll-mt-20 relative w-full overflow-x-clip pt-20 sm:pt-24 lg:pt-28"
    >
      <PartnershipBackground />

      {/* Top 65% Region: Partnership Opportunities & Layered Ecosystem Visual */}
      <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-start lg:items-center gap-8 lg:gap-6 xl:gap-8">
          <div className="w-full lg:col-span-5 xl:col-span-5">
            <PartnershipContent />
          </div>

          <div className="w-full lg:col-span-7 xl:col-span-7">
            <PartnershipShowcase />
          </div>

          {/* Mobile/Tablet Partner Cards Grid (rendered cleanly below Showcase) */}
          <div className="w-full lg:hidden">
            <PartnerCardsGrid />
          </div>
        </div>
      </div>

      {/* Bottom 35% Region: Final Full-Width CTA Banner */}
      <FinalCTABanner
        onPartnerCta={onPartnerCta}
        onExploreApp={onExploreApp}
        onOpenConsentSettings={onOpenConsentSettings}
      />
    </section>
  );
};
