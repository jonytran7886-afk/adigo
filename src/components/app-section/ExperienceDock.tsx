import React from 'react';
import { motion } from 'motion/react';
import { Home, Search, Package, ShoppingCart, Truck, User } from 'lucide-react';
import { APP_SECTION_CONFIG, AppTabId } from '../../config/appSectionConfig';

interface ExperienceDockProps {
  activeTab: AppTabId;
  onSelectTab: (tab: AppTabId) => void;
}

export const ExperienceDock: React.FC<ExperienceDockProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const iconMap: Record<AppTabId, React.ComponentType<{ className?: string }>> = {
    home: Home,
    discover: Search,
    product: Package,
    cart: ShoppingCart,
    orders: Truck,
    membership: User,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="mt-6 sm:mt-8 flex justify-center w-full"
    >
      <div
        role="tablist"
        aria-label="Chuyển đổi màn hình trải nghiệm ADIGO App"
        className="max-w-full overflow-x-auto no-scrollbar p-1.5 rounded-[28px] border border-white/85 shadow-[0_14px_34px_rgba(31,84,130,0.10),inset_0_1px_1px_rgba(255,255,255,0.75)] flex items-center gap-1"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.62)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {APP_SECTION_CONFIG.tabs.map((tab) => {
          const Icon = iconMap[tab.id];
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectTab(tab.id)}
              className={`relative min-w-[82px] sm:min-w-[104px] min-h-[48px] sm:min-h-[56px] px-3 sm:px-4 py-2 rounded-[22px] flex flex-col items-center justify-center gap-1 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345EAA] ${
                isActive ? 'text-[#142F63]' : 'text-[#52677D] hover:text-[#112D52]'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="adigo-dock-indicator"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-white via-[#F5FAFF] to-[#E8F8F0] border border-white shadow-[0_6px_16px_rgba(52,94,170,0.10)]"
                  aria-hidden="true"
                />
              )}

              <Icon
                className={`relative z-10 w-[18px] h-[18px] sm:w-5 sm:h-5 transition-colors ${
                  isActive ? 'text-[#398441]' : 'text-[#52677D]'
                }`}
              />
              <span
                className={`relative z-10 text-[11px] sm:text-xs font-semibold ${
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
