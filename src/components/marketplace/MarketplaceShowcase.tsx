import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MARKETPLACE_CONFIG,
  MarketplaceFeatureCardId,
  MarketplaceTabId,
} from '../../config/marketplaceConfig';
import { FeatureCard } from './FeatureCard';
import { MarketplaceDesktopMockup } from './MarketplaceDesktopMockup';
import { MarketplaceMobileMockup } from './MarketplaceMobileMockup';
import { MarketplacePedestal } from './MarketplacePedestal';
import { MarketplaceNavigation } from './MarketplaceNavigation';

interface MarketplaceShowcaseProps {
  activeTab: MarketplaceTabId;
  onSelectTab: (tab: MarketplaceTabId) => void;
}

export const MarketplaceShowcase: React.FC<MarketplaceShowcaseProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const [cartIds, setCartIds] = useState<string[]>(['mp-1']);
  const [favoriteIds, setFavoriteIds] = useState<string[]>(['mp-2']);

  const handleToggleCart = (id: string) => {
    setCartIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const activeTabConfig = MARKETPLACE_CONFIG.tabs.find((t) => t.id === activeTab);
  const highlightedCardId: MarketplaceFeatureCardId =
    activeTabConfig?.relatedCard ?? 'categories';

  const handleCardClick = (cardId: MarketplaceFeatureCardId) => {
    const match = MARKETPLACE_CONFIG.tabs.find((t) => t.relatedCard === cardId);
    if (match) {
      onSelectTab(match.id);
    }
  };

  return (
    <div className="relative mt-8 sm:mt-10 lg:mt-12 flex flex-col items-center">
      {/* Main Interactive Grid:
          Mobile (< lg): flex-col so Center Device is order-1, Navigation Dock is order-2, 4 Cards are order-3.
          Desktop (lg+): 3-column grid [Left 2 Cards | Center Multi-Device Stage | Right 2 Cards], with Navigation Dock order-4 spanning full width underneath.
      */}
      <div className="w-full flex flex-col lg:grid lg:grid-cols-[210px_minmax(0,1fr)_210px] xl:grid-cols-[238px_minmax(0,1fr)_238px] 2xl:grid-cols-[256px_minmax(0,1fr)_256px] items-center gap-6 lg:gap-4 xl:gap-6">
        {/* Left Feature Cards (Desktop col 1; Mobile grouped below dock via order-3) */}
        <div className="order-3 lg:order-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
          <FeatureCard
            cardId="categories"
            isHighlighted={highlightedCardId === 'categories'}
            delay={0.05}
            onClick={() => handleCardClick('categories')}
          />
          <FeatureCard
            cardId="stores"
            isHighlighted={highlightedCardId === 'stores'}
            delay={0.12}
            onClick={() => handleCardClick('stores')}
          />
        </div>

        {/* Center Multi-Device Showcase Stage (order-1 on Mobile & Desktop center col) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 w-full flex flex-col items-center justify-center relative"
        >
          {/* Mobile (< md): Large, clear Smartphone Marketplace ONLY */}
          <div className="flex md:hidden flex-col items-center justify-center w-full">
            <div className="relative z-10">
              <MarketplaceMobileMockup
                activeTab={activeTab}
                onSelectTab={onSelectTab}
                cartIds={cartIds}
                favoriteIds={favoriteIds}
                onToggleCart={handleToggleCart}
                onToggleFavorite={handleToggleFavorite}
                size="main"
              />
            </div>
            <div
              className="-mt-5 w-[290px] h-[36px] rounded-[50%] border border-white/85 shadow-[0_18px_36px_rgba(31,84,130,0.14)]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(235, 250, 255, 0.85) 0%, rgba(190, 232, 246, 0.55) 100%)',
                backdropFilter: 'blur(12px)',
              }}
              aria-hidden="true"
            />
          </div>

          {/* Tablet & Desktop (md+): Dual Overlapping Tablet + Smartphone + Glass Pedestal */}
          <div className="hidden md:flex flex-col items-center justify-center w-full">
            <div className="relative flex flex-col items-center justify-center md:scale-[0.86] lg:scale-[0.76] xl:scale-[0.93] 2xl:scale-100 origin-center transition-transform duration-300 md:-my-8 lg:-my-14 xl:-my-3 2xl:my-0">
              {/* Devices Row */}
              <div className="relative z-10 flex items-end justify-center">
                <div className="relative z-10">
                  <MarketplaceDesktopMockup
                    activeTab={activeTab}
                    onSelectTab={onSelectTab}
                    cartIds={cartIds}
                    favoriteIds={favoriteIds}
                    onToggleCart={handleToggleCart}
                    onToggleFavorite={handleToggleFavorite}
                  />
                </div>

                {/* Overlapping Front-Right Smartphone */}
                <div className="relative z-20 -ml-[135px] xl:-ml-[125px] translate-y-3">
                  <MarketplaceMobileMockup
                    activeTab={activeTab}
                    onSelectTab={onSelectTab}
                    cartIds={cartIds}
                    favoriteIds={favoriteIds}
                    onToggleCart={handleToggleCart}
                    onToggleFavorite={handleToggleFavorite}
                    size="side"
                  />
                </div>
              </div>

              {/* Glass Pedestal + Foreground Product Styling */}
              <MarketplacePedestal />
            </div>
          </div>
        </motion.div>

        {/* Right Feature Cards (Desktop col 3; Mobile order-4 directly after Left Cards) */}
        <div className="order-4 lg:order-3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5 -mt-2 lg:mt-0">
          <FeatureCard
            cardId="search"
            isHighlighted={highlightedCardId === 'search'}
            delay={0.18}
            onClick={() => handleCardClick('search')}
          />
          <FeatureCard
            cardId="shopping"
            isHighlighted={highlightedCardId === 'shopping'}
            delay={0.24}
            onClick={() => handleCardClick('shopping')}
          />
        </div>

        {/* Interactive Marketplace Navigation Dock:
            Mobile (< lg): order-2 right below Smartphone!
            Desktop (lg+): order-4 spanning all 3 columns right under the Glass Pedestal!
        */}
        <div className="order-2 lg:order-4 lg:col-span-3 w-full flex justify-center lg:-mt-4 xl:-mt-2 relative z-30">
          <MarketplaceNavigation
            activeTab={activeTab}
            onSelectTab={onSelectTab}
          />
        </div>
      </div>
    </div>
  );
};
