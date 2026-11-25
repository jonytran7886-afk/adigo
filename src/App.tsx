import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { HeroSection } from './components/hero/HeroSection';
import { HeroPreviewModal, HeroModalMode } from './components/hero/HeroPreviewModal';
import { HERO_CONFIG } from './config/heroConfig';

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('kham-pha');
  const [modalMode, setModalMode] = useState<HeroModalMode>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);

  const handleSelectNav = (id: string) => {
    setActiveNav(id);
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
            onPrimaryCta={() => {
              setSelectedTopic(undefined);
              setModalMode('register');
            }}
            onSecondaryCta={() => {
              setSelectedTopic(undefined);
              setModalMode('app-tour');
            }}
          />
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
