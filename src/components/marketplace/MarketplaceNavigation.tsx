import React from 'react';
import { motion } from 'motion/react';
import { Package, Store, Award, Gift } from 'lucide-react';
import { MARKETPLACE_CONFIG, MarketplaceTabId } from '../../config/marketplaceConfig';

interface MarketplaceNavigationProps {
  activeTab: MarketplaceTabId;
  onSelectTab: (tab: MarketplaceTabId) => void;
}

export const MarketplaceNavigation: React.FC<MarketplaceNavigationProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const iconMap: Record<MarketplaceTabId, React.ComponentType<{ className?: string }>> = {
    products: Package,
    stores: Store,
    brands: Award,
    offers: Gift,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="mt-6 sm:mt-8 flex justify-center w-full"
    >
      <div
        role="tablist"
        aria-label="Chuyển đổi trải nghiệm ADIGO Marketplace"
        className="w-full max-w-[820px] p-1.5 sm:p-2 rounded-[28px] sm:rounded-[32px] border border-white/85 shadow-[0_14px_34px_rgba(31,84,130,0.10),inset_0_1px_1px_rgba(255,255,255,0.75)] grid grid-cols-2 sm:grid-cols-4 gap-1.5"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.58)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {MARKETPLACE_CONFIG.tabs.map((tab) => {
          const Icon = iconMap[tab.id];
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectTab(tab.id)}
              className={`relative min-h-[56px] sm:min-h-[68px] px-3 sm:px-5 py-2 rounded-[22px] sm:rounded-[24px] flex flex-col items-center justify-center gap-1 transition-colors duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345EAA] ${
                isActive ? 'text-[#142F63]' : 'text-[#52677D] hover:text-[#112D52]'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="adigo-marketplace-dock"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  className="absolute inset-0 rounded-[22px] sm:rounded-[24px] bg-gradient-to-b from-white via-[#F5FAFF] to-[#E5F6EE] border border-white shadow-[0_6px_16px_rgba(52,94,170,0.10)]"
                  aria-hidden="true"
                />
              )}

              <Icon
                className={`relative z-10 w-5 h-5 transition-colors ${
                  isActive ? 'text-[#398441]' : 'text-[#52677D]'
                }`}
              />
              <span
                className={`relative z-10 text-xs sm:text-[13px] font-semibold ${
                  isActive ? 'text-[#142F63]' : 'text-[#52677D]'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};
