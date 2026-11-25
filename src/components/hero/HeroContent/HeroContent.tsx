import React from 'react';
import { motion } from 'motion/react';
import { EyebrowLabel } from './EyebrowLabel';
import { HeroHeadline } from './HeroHeadline';
import { HeroDescription } from './HeroDescription';
import { HeroActions } from './HeroActions';
import { FeatureChips } from './FeatureChips';

interface HeroContentProps {
  onPrimaryCta: () => void;
  onSecondaryCta: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onPrimaryCta,
  onSecondaryCta,
}) => {
  return (
    <div className="flex flex-col items-start">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <EyebrowLabel />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroHeadline />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroDescription />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="w-full sm:w-auto"
      >
        <HeroActions onPrimaryClick={onPrimaryCta} onSecondaryClick={onSecondaryCta} />
      </motion.div>

      {/* Desktop & Tablet inline placement (Mobile places FeatureChips below phones per Section 13) */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block w-full mt-9"
      >
        <FeatureChips />
      </motion.div>
    </div>
  );
};
