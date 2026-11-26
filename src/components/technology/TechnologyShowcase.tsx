import React from 'react';
import { motion } from 'motion/react';
import {
  TECHNOLOGY_CONFIG,
  TechnologyExperienceId,
  TechnologyPanelId,
} from '../../config/technologyConfig';
import { TechnologyPhoneMockup } from './TechnologyPhoneMockup';
import { AdigoCore } from './AdigoCore';
import {
  ConnectedProductPanel,
  TraceabilityPanel,
  SmartExperiencePanel,
  RetailNetworkPanel,
  DataConnectionLines,
} from './TechnologyPanels';

interface TechnologyShowcaseProps {
  activeExperience: TechnologyExperienceId;
  onSelectExperience: (exp: TechnologyExperienceId) => void;
}

export const TechnologyShowcase: React.FC<TechnologyShowcaseProps> = ({
  activeExperience,
  onSelectExperience,
}) => {
  const activeTab =
    TECHNOLOGY_CONFIG.experiences.find((e) => e.id === activeExperience) ??
    TECHNOLOGY_CONFIG.experiences[0];
  const highlightedPanels: TechnologyPanelId[] = activeTab.highlightedPanels;

  return (
    <div className="relative w-full">
      {/* Desktop & Tablet 3D Ecosystem Composition (md+) */}
      <div className="hidden md:block relative w-full pt-2 pb-12">
        {/* Elongated Translucent Glass Platform */}
        <div
          className="pointer-events-none absolute bottom-1 left-4 right-0 h-[88px] rounded-[50%] border border-white/90 shadow-[0_28px_56px_rgba(20,47,99,0.22),inset_0_2px_8px_rgba(255,255,255,0.92)] z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(235, 250, 255, 0.9) 0%, rgba(168, 224, 248, 0.68) 100%)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-20 flex items-end gap-2 lg:gap-3 xl:gap-5">
          {/* Titanium Smartphone Mockup (Front Left) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 origin-bottom-left md:scale-[0.80] lg:scale-[0.82] xl:scale-[0.92] md:-mr-10 lg:-mr-8 xl:-mr-2 lg:-rotate-[3.5deg]"
          >
            <TechnologyPhoneMockup
              activeExperience={activeExperience}
              onSelectExperience={onSelectExperience}
              size="main"
            />
          </motion.div>

          {/* Right Ecosystem Hub: 4 Enlarged 3D Glass Panels Converging to ADIGO Core */}
          <div className="relative flex-1 min-w-0 pb-2">
            <DataConnectionLines highlightedPanels={highlightedPanels} />

            {/* Top Row: Connected Products + Traceability */}
            <div className="relative z-20 grid grid-cols-2 gap-3 xl:gap-4 px-1 xl:px-3">
              <ConnectedProductPanel
                isHighlighted={highlightedPanels.includes('products')}
                onSelect={onSelectExperience}
              />
              <TraceabilityPanel
                isHighlighted={highlightedPanels.includes('traceability')}
                onSelect={onSelectExperience}
              />
            </div>

            {/* Bottom Row: Smart Experience | Enlarged ADIGO Core | Retail Network */}
            <div className="relative z-20 grid grid-cols-12 items-end gap-2.5 xl:gap-3.5 mt-4 xl:mt-5">
              <div className="col-span-4 pb-2">
                <SmartExperiencePanel
                  isHighlighted={highlightedPanels.includes('smart')}
                  onSelect={onSelectExperience}
                />
              </div>

              <div className="col-span-4 flex justify-center -mb-3">
                <AdigoCore />
              </div>

              <div className="col-span-4 pb-2">
                <RetailNetworkPanel
                  isHighlighted={highlightedPanels.includes('network')}
                  onSelect={onSelectExperience}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Mobile Showcase (< md): Upright, Spacious, Zero Clipping */}
      <div className="flex md:hidden flex-col items-center gap-6 w-full">
        <div className="relative flex flex-col items-center z-20">
          <TechnologyPhoneMockup
            activeExperience={activeExperience}
            onSelectExperience={onSelectExperience}
            size="main"
          />
          <div
            className="-mt-5 w-[290px] h-[36px] rounded-[50%] border border-white/85 shadow-[0_16px_32px_rgba(31,84,130,0.14)]"
            style={{
              background:
                'linear-gradient(180deg, rgba(235, 250, 255, 0.85) 0%, rgba(190, 232, 246, 0.55) 100%)',
              backdropFilter: 'blur(12px)',
            }}
            aria-hidden="true"
          />
        </div>

        <AdigoCore />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <ConnectedProductPanel
            isHighlighted={highlightedPanels.includes('products')}
            onSelect={onSelectExperience}
          />
          <TraceabilityPanel
            isHighlighted={highlightedPanels.includes('traceability')}
            onSelect={onSelectExperience}
          />
          <SmartExperiencePanel
            isHighlighted={highlightedPanels.includes('smart')}
            onSelect={onSelectExperience}
          />
          <RetailNetworkPanel
            isHighlighted={highlightedPanels.includes('network')}
            onSelect={onSelectExperience}
          />
        </div>
      </div>
    </div>
  );
};
