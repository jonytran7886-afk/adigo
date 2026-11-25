import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DiscoverSection } from './components/DiscoverSection';
import { AppShowcaseSection } from './components/AppShowcaseSection';
import { MarketplaceSection } from './components/MarketplaceSection';
import { MartSection } from './components/MartSection';
import { TraceabilitySection } from './components/TraceabilitySection';
import { TechExperienceSection } from './components/TechExperienceSection';
import { BusinessSection } from './components/BusinessSection';
import { CtaBannerSection } from './components/CtaBannerSection';
import { Footer, InfoDocType } from './components/Footer';
import { InterestModal, InfoDocModal, InterestRole } from './components/InterestModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState<InterestRole>('consumer');
  const [activeInfoDoc, setActiveInfoDoc] = useState<InfoDocType | null>(null);

  const openInterestModal = (role: InterestRole) => {
    setModalRole(role);
    setModalOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-[#0C1B2A]">
        <Header onOpenExperienceModal={() => openInterestModal('consumer')} />

        <main className="flex-1">
          <HeroSection onExploreClick={() => openInterestModal('consumer')} />
          <DiscoverSection />
          <AppShowcaseSection />
          <MarketplaceSection />
          <MartSection />
          <TraceabilitySection />
          <TechExperienceSection />
          <BusinessSection
            onOpenSellerModal={() => openInterestModal('seller')}
            onOpenPartnerModal={() => openInterestModal('partner')}
          />
          <CtaBannerSection
            onOpenRegister={() => openInterestModal('consumer')}
            onOpenConnect={() => openInterestModal('partner')}
          />
        </main>

        <Footer
          onOpenInterest={openInterestModal}
          onOpenInfoDoc={(doc) => setActiveInfoDoc(doc)}
        />

        <InterestModal
          isOpen={modalOpen}
          initialRole={modalRole}
          onClose={() => setModalOpen(false)}
        />

        <InfoDocModal
          docType={activeInfoDoc}
          onClose={() => setActiveInfoDoc(null)}
        />
      </div>
    </MotionConfig>
  );
}
