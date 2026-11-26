import React from 'react';
import { EyebrowLabel } from './EyebrowLabel';
import { HeroHeadline } from './HeroHeadline';
import { HeroDescription } from './HeroDescription';
import { HeroActions } from './HeroActions';
import { FeatureChips } from './FeatureChips';

interface HeroContentProps {
  onSecondaryCta: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onSecondaryCta }) => {
  return (
    <div className="flex flex-col items-start">
      <div>
        <EyebrowLabel />
      </div>

      <div>
        <HeroHeadline />
      </div>

      <div>
        <HeroDescription />
      </div>

      <div
        className="w-full sm:w-auto"
      >
        <HeroActions onSecondaryClick={onSecondaryCta} />
      </div>

      <div
        className="hidden md:block w-full mt-7"
      >
        <FeatureChips />
      </div>
    </div>
  );
};
