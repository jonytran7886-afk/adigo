import React from 'react';
import { Header } from './Header/Header';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent/HeroContent';
import { FeatureChips } from './HeroContent/FeatureChips';
import { ProductShowcase } from './ProductShowcase/ProductShowcase';

interface HeroSectionProps {
  activeNav: string;
  onSelectNav: (id: string) => void;
  onExploreCta: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeNav,
  onSelectNav,
  onExploreCta,
}) => {
  return (
    <section
      id="top"
      aria-labelledby="hero-section-heading"
      className="relative w-full flex flex-col overflow-x-clip"
    >
      {/* Layer 01 & 02: Soft Blue-Mint Gradient Background + Luminous Curves */}
      <HeroBackground />

      {/* Layer 03: Glassmorphism Header directly on Hero canvas */}
      <Header
        activeNav={activeNav}
        onSelectNav={onSelectNav}
        onOpenExperience={onExploreCta}
      />

      {/* Layer 04 & 05: Hero Main Grid (Balanced 50/50 split for 2-3 line Headline + Smartphone Showcase) */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-[5%] lg:px-[5.5%] pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            {/* Left 50% (6 of 12 cols) */}
            <div className="lg:col-span-6 lg:pr-2">
              <HeroContent onSecondaryCta={onExploreCta} />
            </div>

            {/* Right 50% (6 of 12 cols) */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <ProductShowcase onExploreTap={onExploreCta} />

              {/* Mobile Feature Chips rendered below smartphones */}
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
