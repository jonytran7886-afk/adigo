import React, { useState } from 'react';
import {
  TRACEABILITY_CONFIG,
  TraceabilityStageId,
} from '../../config/traceabilityConfig';
import { TechnologyBackground } from './TechnologyBackground';
import {
  TraceabilityContent,
  TraceabilityFeatureGrid,
} from './TraceabilityContent';
import { TraceabilityShowcase } from './TraceabilityShowcase';
import { TraceabilityTimeline } from './TraceabilityTimeline';

export const TraceabilitySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<TraceabilityStageId>('farm');

  return (
    <section
      id={TRACEABILITY_CONFIG.sectionId}
      aria-labelledby="traceability-section-heading"
      className="traceability-section scroll-mt-20 relative w-full overflow-x-clip py-20 sm:py-24 lg:py-28"
    >
      <TechnologyBackground />

      <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main 2-Column Split (Desktop: 38% Left | 62% Right) */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-start lg:items-center gap-8 lg:gap-6 xl:gap-10">
          <div className="w-full lg:col-span-5 xl:col-span-4">
            <TraceabilityContent activeStage={activeStage} showChips={true} />
          </div>

          <div className="w-full lg:col-span-7 xl:col-span-8">
            <TraceabilityShowcase
              activeStage={activeStage}
              onSelectStage={setActiveStage}
            />
          </div>

          {/* Mobile/Tablet Feature Chips (placed below Showcase per Section 8) */}
          <div className="w-full flex justify-center lg:hidden">
            <TraceabilityFeatureGrid activeStage={activeStage} />
          </div>
        </div>

        {/* Bottom Glass Traceability Timeline */}
        <TraceabilityTimeline
          activeStage={activeStage}
          onSelectStage={setActiveStage}
        />
      </div>
    </section>
  );
};
