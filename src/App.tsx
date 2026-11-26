import React, { useEffect, useRef, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { HeroSection } from './components/hero/HeroSection';
import { ExploreSection } from './components/explore/ExploreSection';
import { AdigoAppSection } from './components/app-section/AdigoAppSection';
import { MarketplaceSection } from './components/marketplace/MarketplaceSection';
import { AdigoMartSection } from './components/mart/AdigoMartSection';
import { TraceabilitySection } from './components/traceability/TraceabilitySection';
import { TechnologySection } from './components/technology/TechnologySection';
import { PartnershipSection } from './components/partnership/PartnershipSection';
import { HeroPreviewModal, HeroModalMode } from './components/hero/HeroPreviewModal';
import { SeoHead } from './components/seo/SeoHead';
import { ConsentBanner } from './components/seo/ConsentBanner';
import { HERO_CONFIG } from './config/heroConfig';
import { trackEvent } from './utils/analytics';

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('explore');
  const [modalMode, setModalMode] = useState<HeroModalMode>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);
  const [consentOpen, setConsentOpen] = useState(false);

  const trackedMilestonesRef = useRef<Set<number>>(new Set());
  const trackedAppViewRef = useRef(false);

  useEffect(() => {
    const milestones = [25, 50, 75, 90];
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = Math.round((window.scrollY / scrollable) * 100);
      for (const m of milestones) {
        if (pct >= m && !trackedMilestonesRef.current.has(m)) {
          trackedMilestonesRef.current.add(m);
          trackEvent('scroll_depth', { percent_scrolled: m });
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const appEl = document.getElementById('app');
    if (!appEl || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !trackedAppViewRef.current) {
            trackedAppViewRef.current = true;
            trackEvent('app_section_view', { section_id: 'app' });
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(appEl);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectNav = (id: string) => {
    setActiveNav(id);
    if (id === 'doi-tac') {
      scrollToSection('partnership');
      return;
    }

    if (
      id === 'explore' ||
      id === 'app' ||
      id === 'marketplace' ||
      id === 'mart' ||
      id === 'traceability' ||
      id === 'technology' ||
      id === 'partnership'
    ) {
      scrollToSection(id);
      return;
    }

    const navMatch = HERO_CONFIG.navItems.find((n) => n.id === id);
    if (navMatch) {
      setSelectedTopic(navMatch.label);
      setModalMode('register');
    }
  };

  const handlePrimaryExploreCta = () => {
    trackEvent('explore_adigo_click', {
      cta_location: 'hero',
      target_section: 'explore',
    });
    scrollToSection('explore');
  };

  const handleSecondaryAppCta = () => {
    trackEvent('explore_adigo_click', {
      cta_location: 'hero_secondary',
      target_section: 'app',
    });
    scrollToSection('app');
  };

  const handleOpenPartnerRegistration = () => {
    trackEvent('partner_cta_click', {
      cta_location: 'final_cta_banner',
      topic: 'Hợp tác cùng ADIGO',
    });
    setSelectedTopic('Hợp tác cùng ADIGO');
    setModalMode('register');
  };

  return (
    <MotionConfig reducedMotion="user">
      <SeoHead pathname="/" />
      <div className="min-h-screen bg-[#EAF5FF] text-[#112D52]">
        <main>
          <HeroSection
            activeNav={activeNav}
            onSelectNav={handleSelectNav}
            onPrimaryCta={handlePrimaryExploreCta}
            onSecondaryCta={handleSecondaryAppCta}
          />

          <ExploreSection />

          <AdigoAppSection />

          <MarketplaceSection />

          <AdigoMartSection />

          <TraceabilitySection />

          <TechnologySection />

          <PartnershipSection
            onPartnerCta={handleOpenPartnerRegistration}
            onExploreApp={() => scrollToSection('app')}
            onOpenConsentSettings={() => setConsentOpen(true)}
          />
        </main>

        <HeroPreviewModal
          mode={modalMode}
          selectedTopic={selectedTopic}
          onSwitchMode={(next) => setModalMode(next)}
          onClose={() => setModalMode(null)}
        />

        <ConsentBanner
          forceOpen={consentOpen}
          onCloseForceOpen={() => setConsentOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
