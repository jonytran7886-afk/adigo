import React from 'react';
import { AppTabId, SideCardId } from '../../../config/appSectionConfig';
import { ExperienceSideCard } from './ExperienceSideCard';
import { DeviceShowcase } from './DeviceShowcase';

interface InteractiveProductShowcaseProps {
  activeTab: AppTabId;
  highlightedCard: SideCardId | null;
  onSelectTab: (tab: AppTabId) => void;
  dockSlot: React.ReactNode;
}

export const InteractiveProductShowcase: React.FC<InteractiveProductShowcaseProps> = ({
  activeTab,
  highlightedCard,
  onSelectTab,
  dockSlot,
}) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
      {/* Left 22% (3 of 12 cols on LG+) — On mobile sits below Dock */}
      <div className="order-3 lg:order-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-8 lg:-mt-8">
        <div className="lg:-translate-x-2">
          <ExperienceSideCard
            cardId="discovery"
            isHighlighted={highlightedCard === 'discovery'}
            delay={0.08}
            onClick={() => onSelectTab('discover')}
          />
        </div>
        <div className="lg:translate-x-2">
          <ExperienceSideCard
            cardId="shopping"
            isHighlighted={highlightedCard === 'shopping'}
            delay={0.16}
            onClick={() => onSelectTab('cart')}
          />
        </div>
      </div>

      {/* Center 56% (6 of 12 cols on LG+) — Smartphone Cluster first on mobile */}
      <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center">
        <DeviceShowcase activeTab={activeTab} onSelectTab={onSelectTab} />
      </div>

      {/* Right 22% (3 of 12 cols on LG+) — On mobile sits below Left Cards */}
      <div className="order-4 lg:order-3 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-8 lg:mt-6">
        <div className="lg:translate-x-2">
          <ExperienceSideCard
            cardId="tracking"
            isHighlighted={highlightedCard === 'tracking'}
            delay={0.12}
            onClick={() => onSelectTab('orders')}
          />
        </div>
        <div className="lg:-translate-x-2">
          <ExperienceSideCard
            cardId="membership"
            isHighlighted={highlightedCard === 'membership'}
            delay={0.2}
            onClick={() => onSelectTab('membership')}
          />
        </div>
      </div>

      {/* Experience Dock: Immediately below smartphone on mobile (order-2), full-width bottom on desktop (order-4) */}
      <div className="order-2 lg:order-4 lg:col-span-12">
        {dockSlot}
      </div>
    </div>
  );
};
