import React from 'react';
import { Header } from './Header/Header';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent/HeroContent';
import { FeatureChips } from './HeroContent/FeatureChips';
import { ProductShowcase } from './ProductShowcase/ProductShowcase';

interface HeroSectionProps {
  activeNav: string;
  onSelectNav: (id: string) => void;
  onPrimaryCta: () => void;
  onSecondaryCta: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeNav,
  onSelectNav,
  onPrimaryCta,
  onSecondaryCta,
}) => {
  return (
    <section
      id="top"
      className="relative w-full min-h-0 lg:min-h-[max(760px,100svh)] flex flex-col overflow-x-clip"
    >
      {/* Layer 01 & 02: Soft Blue-Mint Gradient Background + Luminous Curves */}
      <HeroBackground />

      {/* Layer 03: Glassmorphism Header directly on Hero canvas */}
      <Header
        activeNav={activeNav}
        onSelectNav={onSelectNav}
        onOpenExperience={onPrimaryCta}
      />

      {/* Layer 04 & 05: Hero Main Grid (42% Left Content / 58% Right Showcase) */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-[5%] lg:px-[5.5%] py-8 sm:py-12 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left ~42% (5 of 12 cols) */}
            <div className="lg:col-span-5">
              <HeroContent
                onPrimaryCta={onPrimaryCta}
                onSecondaryCta={onSecondaryCta}
              />
            </div>

            {/* Right ~58% (7 of 12 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <ProductShowcase onExploreTap={onPrimaryCta} />

              {/* Mobile Feature Chips rendered below smartphones per Section 13 order */}
              <div className="md:hidden w-full mt-4 flex justify-center">
                <FeatureChips />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
