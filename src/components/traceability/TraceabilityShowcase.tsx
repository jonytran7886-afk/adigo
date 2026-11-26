import React from 'react';
import { motion } from 'motion/react';
import { TraceabilityStageId } from '../../config/traceabilityConfig';
import { ProductJourneyVisual } from './ProductJourneyVisual';
import { TraceabilityPhoneMockup } from './TraceabilityPhoneMockup';
import { ProductPackaging } from './ProductPackaging';
import { FloatingQRCard } from './FloatingQRCard';

interface TraceabilityShowcaseProps {
  activeStage: TraceabilityStageId;
  onSelectStage: (stage: TraceabilityStageId) => void;
}

export const TraceabilityShowcase: React.FC<TraceabilityShowcaseProps> = ({
  activeStage,
  onSelectStage,
}) => {
  return (
    <div className="relative w-full">
      {/* Desktop & Tablet Layered Showcase (md+) */}
      <div className="hidden md:block relative w-full h-[570px] lg:h-[600px] xl:h-[630px]">
        {/* Layer 2: Product Journey Frosted Glass Visual Behind Smartphone Left */}
        <div className="absolute top-[74px] lg:top-[82px] left-0 w-[62%] lg:w-[58%] z-10">
          <ProductJourneyVisual
            activeStage={activeStage}
            onSelectStage={onSelectStage}
          />
        </div>

        {/* Layer 3: Translucent Glass Platform */}
        <div
          className="pointer-events-none absolute bottom-4 left-2 right-2 h-[78px] rounded-[50%] border border-white/85 shadow-[0_24px_48px_rgba(31,84,130,0.16),inset_0_2px_6px_rgba(255,255,255,0.85)] z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(235, 250, 255, 0.86) 0%, rgba(196, 234, 248, 0.62) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
          aria-hidden="true"
        />

        {/* Layer 4: Primary Smartphone Mockup (Center-Right, Slight Angle) */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[36%] lg:left-[35%] xl:left-[37%] bottom-8 z-20 origin-bottom md:scale-[0.84] lg:scale-[0.86] xl:scale-[0.94] lg:-rotate-[3deg]"
        >
          <TraceabilityPhoneMockup
            activeStage={activeStage}
            onSelectStage={onSelectStage}
            size="main"
          />
        </motion.div>

        {/* Layer 5: Foreground Packaged Products & Fresh Produce on Glass Platform */}
        <div className="absolute inset-x-3 lg:inset-x-5 bottom-8 z-30">
          <ProductPackaging />
        </div>

        {/* Layer 6: Floating Glass QR Card (Top-Right Beside Smartphone) */}
        <div className="absolute right-0 lg:right-2 top-[120px] lg:top-[136px] z-30 md:scale-[0.88] lg:scale-[0.94] xl:scale-100 origin-top-right">
          <FloatingQRCard />
        </div>
      </div>

      {/* Dedicated Mobile Showcase (< md): Upright, Clear, Zero Overlap */}
      <div className="flex md:hidden flex-col items-center gap-5 w-full">
        <ProductJourneyVisual
          activeStage={activeStage}
          onSelectStage={onSelectStage}
        />

        <div className="relative flex flex-col items-center z-20">
          <TraceabilityPhoneMockup
            activeStage={activeStage}
            onSelectStage={onSelectStage}
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

        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-5">
          <ProductPackaging />
          <FloatingQRCard />
        </div>
      </div>
    </div>
  );
};
