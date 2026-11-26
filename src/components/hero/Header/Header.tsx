import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { HeaderCTA } from './HeaderCTA';

interface HeaderProps {
  activeNav: string;
  onSelectNav: (id: string) => void;
  onOpenExperience: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeNav,
  onSelectNav,
  onOpenExperience,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/68 backdrop-blur-[28px] border-b border-white/80'
          : 'bg-white/28 backdrop-blur-[22px] border-b border-white/55'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-[5%] lg:px-[5.5%] h-[64px] sm:h-[72px] flex items-center justify-between gap-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345EAA] rounded-lg shrink-0"
          aria-label="ADIGO Trang chủ"
        >
          <BrandLogo priority />
        </a>

        <DesktopNavigation activeNav={activeNav} onSelectNav={onSelectNav} />

        <div className="flex items-center gap-3 shrink-0">
          <HeaderCTA onClick={onOpenExperience} />

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full adigo-glass text-[#142F63] cursor-pointer transition-colors"
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <MobileNavigation
        isOpen={mobileOpen}
        activeNav={activeNav}
        onSelectNav={(id) => {
          setMobileOpen(false);
          onSelectNav(id);
        }}
        onActionClick={() => {
          setMobileOpen(false);
          onOpenExperience();
        }}
      />
    </header>
  );
};
