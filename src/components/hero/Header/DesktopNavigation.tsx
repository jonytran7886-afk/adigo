import React from 'react';
import { ChevronDown } from 'lucide-react';
import { HERO_CONFIG } from '../../../config/heroConfig';

interface DesktopNavigationProps {
  activeNav: string;
  onSelectNav: (id: string) => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  activeNav,
  onSelectNav,
}) => {
  return (
    <nav
      className="hidden md:flex items-center gap-7 lg:gap-9"
      aria-label="Điều hướng chính"
    >
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
            className={`group inline-flex items-center gap-1 text-[15px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345EAA] rounded-md py-1 ${
              isActive
                ? 'text-[#142F63] font-semibold'
                : 'text-[#112D52]/80 hover:text-[#142F63]'
            }`}
          >
            <span>{item.label}</span>
            {item.hasSubmenuHint && (
              <ChevronDown className="w-3.5 h-3.5 text-[#52677D] group-hover:text-[#142F63] transition-transform duration-150 group-hover:translate-y-0.5" />
            )}
          </a>
        );
      })}
    </nav>
  );
};
