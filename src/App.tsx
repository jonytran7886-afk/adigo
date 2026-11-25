import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { HeroSection } from './components/hero/HeroSection';
import { ExploreSection } from './components/explore/ExploreSection';
import { HeroPreviewModal, HeroModalMode } from './components/hero/HeroPreviewModal';
import { HERO_CONFIG } from './config/heroConfig';

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('explore');
  const [modalMode, setModalMode] = useState<HeroModalMode>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);

  const scrollToExplore = () => {
    setActiveNav('explore');
    const el = document.getElementById('explore');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectNav = (id: string) => {
    setActiveNav(id);
    if (id === 'explore') {
      scrollToExplore();
      return;
    }

    const navMatch = HERO_CONFIG.navItems.find((n) => n.id === id);
    if (id === 'ung-dung') {
      setSelectedTopic(undefined);
      setModalMode('app-tour');
    } else if (navMatch) {
      setSelectedTopic(navMatch.label);
      setModalMode('register');
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#EAF5FF] text-[#112D52]">
        <main>
          <HeroSection
            activeNav={activeNav}
            onSelectNav={handleSelectNav}
            onPrimaryCta={scrollToExplore}
            onSecondaryCta={() => {
              setSelectedTopic(undefined);
              setModalMode('app-tour');
            }}
          />

          <ExploreSection />
        </main>

        <HeroPreviewModal
          mode={modalMode}
          selectedTopic={selectedTopic}
          onSwitchMode={(next) => setModalMode(next)}
          onClose={() => setModalMode(null)}
        />
      </div>
    </MotionConfig>
  );
}
