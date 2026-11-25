import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AdigoLogo } from './BrandLogos';
import { ADIGO_CONFIG } from '../config/adigoConfig';

interface HeaderProps {
  onOpenExperienceModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenExperienceModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-[#E2ECF4]'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#top"
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A74DA] rounded-lg whitespace-nowrap shrink-0"
          aria-label="ADIGO Trang chủ"
        >
          <AdigoLogo />
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A6075]" aria-label="Điều hướng chính">
          {ADIGO_CONFIG.navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#0C1B2A] transition-colors whitespace-nowrap shrink-0 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-[#0A74DA] after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A74DA] rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + Mobile trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenExperienceModal}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0A74DA] hover:bg-[#0759A8] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A74DA]"
          >
            Trải nghiệm ADIGO
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-[#0C1B2A] hover:bg-[#F5F9FC] transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-[#E2ECF4] px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Điều hướng di động">
            {ADIGO_CONFIG.navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#0C1B2A] hover:bg-[#F5F9FC] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenExperienceModal();
              }}
              className="mt-2 w-full py-3 px-4 rounded-xl bg-[#0A74DA] text-white text-sm font-semibold text-center cursor-pointer"
            >
              Trải nghiệm ADIGO
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
