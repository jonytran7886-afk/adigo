import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppTabId } from '../../../config/appSectionConfig';
import { PhoneShell } from '../../hero/ProductShowcase/PhoneShell';
import { GlassPlatform } from '../../hero/ProductShowcase/GlassPlatform';
import { DiscoverPhoneMockup } from '../../hero/ProductShowcase/DiscoverPhoneMockup';
import { FloatingProductVisuals } from './FloatingProductVisuals';
import { AppHomeScreen } from './screens/AppHomeScreen';
import { AppDiscoverScreen } from './screens/AppDiscoverScreen';
import { AppProductDetailScreen } from './screens/AppProductDetailScreen';
import { AppCartScreen } from './screens/AppCartScreen';
import { AppOrdersScreen } from './screens/AppOrdersScreen';
import { AppMembershipScreen } from './screens/AppMembershipScreen';

interface DeviceShowcaseProps {
  activeTab: AppTabId;
  onSelectTab: (tab: AppTabId) => void;
}

export const DeviceShowcase: React.FC<DeviceShowcaseProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const renderMainScreen = () => {
    switch (activeTab) {
      case 'home':
        return <AppHomeScreen onNavigate={onSelectTab} />;
      case 'discover':
        return <AppDiscoverScreen onNavigate={onSelectTab} />;
      case 'product':
        return <AppProductDetailScreen onNavigate={onSelectTab} />;
      case 'cart':
        return <AppCartScreen onNavigate={onSelectTab} />;
      case 'orders':
        return <AppOrdersScreen />;
      case 'membership':
        return <AppMembershipScreen onNavigate={onSelectTab} />;
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-2 pb-4">
      <div className="relative w-full flex items-center justify-center">
        {/* Left Secondary Phone (Hidden on small mobile for clean clarity) */}
        <motion.div
          initial={{ opacity: 0, x: 32, rotate: 0 }}
          whileInView={{ opacity: 1, x: 0, rotate: -9 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block relative z-10 -mr-[112px] lg:-mr-[122px] translate-y-6 scale-[0.76] lg:scale-[0.82] origin-bottom-right"
        >
          {activeTab === 'discover' ? (
            <PhoneShell size="side">
              <AppProductDetailScreen />
            </PhoneShell>
          ) : (
            <DiscoverPhoneMockup />
          )}
        </motion.div>

        {/* Center Main Interactive Smartphone */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 scale-[0.94] sm:scale-100"
        >
          <PhoneShell size="main">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col overflow-hidden"
              >
                {renderMainScreen()}
              </motion.div>
            </AnimatePresence>
          </PhoneShell>
        </motion.div>

        {/* Right Secondary Phone (Hidden on small mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -32, rotate: 0 }}
          whileInView={{ opacity: 1, x: 0, rotate: 9 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block relative z-20 -ml-[112px] lg:-ml-[122px] translate-y-6 scale-[0.76] lg:scale-[0.82] origin-bottom-left"
        >
          <PhoneShell size="side">
            {activeTab === 'orders' ? <AppProductDetailScreen /> : <AppOrdersScreen />}
          </PhoneShell>
        </motion.div>
      </div>

      {/* Subtle Floating Product Accents + Elliptical Glass Pedestal */}
      <div className="relative w-full max-w-[660px] flex justify-center">
        <FloatingProductVisuals />
        <GlassPlatform />
      </div>
    </div>
  );
};
