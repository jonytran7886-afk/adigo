import React from 'react';
import { motion } from 'motion/react';
import { MartExperienceId } from '../../config/martConfig';
import { MartStorefront } from './MartStorefront';
import { MartPhoneMockup } from './MartPhoneMockup';
import { FloatingMapCard } from './FloatingMapCard';
import { ShopperVisual } from './ShopperVisual';

interface OmnichannelShowcaseProps {
  activeExperience: MartExperienceId;
  onSelectExperience: (exp: MartExperienceId) => void;
}

export const OmnichannelShowcase: React.FC<OmnichannelShowcaseProps> = ({
  activeExperience,
  onSelectExperience,
}) => {
  return (
    <div className="relative w-full">
      {/* Desktop & Tablet Layered Omnichannel Composition (md+) */}
      <div className="hidden md:block relative w-full h-[540px] lg:h-[580px] xl:h-[620px]">
        {/* Layer 2: ADIGO Mart Storefront Architectural Context (Back Right) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 right-0 w-[86%] lg:w-[84%] z-10"
        >
          <MartStorefront />
        </motion.div>

        {/* Layer 3: Translucent Glass Platform under Smartphone & Map Card */}
        <div
          className="pointer-events-none absolute bottom-4 left-2 lg:left-4 w-[78%] lg:w-[74%] h-[78px] rounded-[50%] border border-white/85 shadow-[0_24px_48px_rgba(31,84,130,0.16),inset_0_2px_6px_rgba(255,255,255,0.85)] z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(235, 250, 255, 0.86) 0%, rgba(196, 234, 248, 0.62) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
          aria-hidden="true"
        />

        {/* Layer 4: Primary Smartphone Mockup (Front Left of Showcase) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-2 lg:left-4 bottom-8 z-20 origin-bottom md:scale-[0.86] lg:scale-[0.88] xl:scale-[0.95] lg:-rotate-[2.5deg]"
        >
          <MartPhoneMockup
            activeExperience={activeExperience}
            onSelectExperience={onSelectExperience}
            size="main"
          />
        </motion.div>

        {/* Layer 5: Floating Glass Map Card (Center-Right Beside Smartphone) */}
        <div className="absolute bottom-14 left-[256px] lg:left-[268px] xl:left-[302px] z-30 md:scale-[0.90] lg:scale-[0.92] xl:scale-100 origin-bottom-left">
          <FloatingMapCard activeExperience={activeExperience} />
        </div>

        {/* Layer 6: Consumer Lifestyle Shopper & ADIGO Shopping Basket (Far Right) */}
        <div className="absolute right-0 bottom-2 z-30 md:scale-[0.84] lg:scale-[0.88] xl:scale-100 origin-bottom-right">
          <ShopperVisual />
        </div>
      </div>

      {/* Dedicated Mobile Showcase (< md): Upright, Clear, Zero Overlap */}
      <div className="flex md:hidden flex-col items-center gap-5 w-full">
        <div className="w-full">
          <MartStorefront />
        </div>

        <div className="relative flex flex-col items-center -mt-12 z-20">
          <MartPhoneMockup
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

        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <FloatingMapCard activeExperience={activeExperience} />
          <div className="hidden sm:flex">
            <ShopperVisual />
          </div>
        </div>
      </div>
    </div>
  );
};
