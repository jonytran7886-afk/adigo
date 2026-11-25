import React from 'react';
import { EXPLORE_CONFIG } from '../../../config/exploreConfig';
import { ExperienceCard } from './ExperienceCard';
import { DiscoverVisual } from './visuals/DiscoverVisual';
import { ShoppingVisual } from './visuals/ShoppingVisual';
import { TraceabilityVisual } from './visuals/TraceabilityVisual';
import { ConnectedProductsVisual } from './visuals/ConnectedProductsVisual';

export const ExperienceGrid: React.FC = () => {
  const renderVisual = (id: string) => {
    switch (id) {
      case 'discover':
        return <DiscoverVisual />;
      case 'shopping':
        return <ShoppingVisual />;
      case 'transparency':
        return <TraceabilityVisual />;
      case 'connected':
        return <ConnectedProductsVisual />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[clamp(20px,1.6vw,28px)]">
      {EXPLORE_CONFIG.cards.map((card) => (
        <ExperienceCard
          key={card.id}
          title={card.title}
          description={card.description}
          icon={card.icon}
          theme={card.theme}
          animationDelay={card.animationDelay}
          visual={renderVisual(card.id)}
        />
      ))}
    </div>
  );
};
