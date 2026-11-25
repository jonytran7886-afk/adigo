import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONFIG } from '../../../config/heroConfig';

interface MobileNavigationProps {
  isOpen: boolean;
  activeNav: string;
  onSelectNav: (id: string) => void;
  onActionClick: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  activeNav,
  onSelectNav,
  onActionClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden adigo-glass-strong border-b border-white/80 px-5 py-4 shadow-[0_16px_36px_rgba(20,47,99,0.12)]">
      <nav className="flex flex-col gap-1" aria-label="Điều hướng di động">
        {HERO_CONFIG.navItems.map((item) => {
          const isActive = activeNav === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onSelectNav(item.id);
              }}
              className={`px-3.5 py-2.5 rounded-xl text-[15px] font-medium transition-colors ${
                isActive
                  ? 'bg-white/75 text-[#142F63] font-semibold'
                  : 'text-[#112D52] hover:bg-white/50'
              }`}
            >
              {item.label}
            </a>
          );
        })}

        <button
          type="button"
          onClick={onActionClick}
          className="mt-3 w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full adigo-brand-gradient text-white text-sm font-semibold shadow-[0_10px_24px_rgba(52,94,170,0.22)] cursor-pointer"
        >
          <span>{HERO_CONFIG.heroCopy.headerCta}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
};
