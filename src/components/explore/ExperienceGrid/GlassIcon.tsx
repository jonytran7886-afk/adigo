import React from 'react';
import { Search, ShoppingCart, ShieldCheck, Share2 } from 'lucide-react';
import { ExperienceCardTheme } from '../../../config/exploreConfig';

interface GlassIconProps {
  icon: 'search' | 'cart' | 'shield' | 'network';
  theme: ExperienceCardTheme;
}

export const GlassIcon: React.FC<GlassIconProps> = ({ icon, theme }) => {
  const iconMap = {
    search: Search,
    cart: ShoppingCart,
    shield: ShieldCheck,
    network: Share2,
  };

  const Icon = iconMap[icon];

  const themeStyles: Record<ExperienceCardTheme, { bg: string; color: string }> = {
    discover: {
      bg: 'linear-gradient(145deg, rgba(255,255,255,0.75) 0%, rgba(219,238,255,0.55) 100%)',
      color: 'text-[#345EAA]',
    },
    shopping: {
      bg: 'linear-gradient(145deg, rgba(255,255,255,0.75) 0%, rgba(214,244,230,0.55) 100%)',
      color: 'text-[#398441]',
    },
    transparency: {
      bg: 'linear-gradient(145deg, rgba(255,255,255,0.82) 0%, rgba(247,237,220,0.6) 100%)',
      color: 'text-[#B4691E]',
    },
    connected: {
      bg: 'linear-gradient(145deg, rgba(255,255,255,0.78) 0%, rgba(212,240,252,0.55) 100%)',
      color: 'text-[#1E75B8]',
    },
  };

  const current = themeStyles[theme];

  return (
    <div
      className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[20px] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:brightness-105 group-hover:scale-[1.03]"
      style={{
        background: current.bg,
        border: 'var(--experience-icon-border)',
        boxShadow: 'var(--experience-icon-shadow)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}
    >
      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${current.color}`} strokeWidth={2} />
    </div>
  );
};
