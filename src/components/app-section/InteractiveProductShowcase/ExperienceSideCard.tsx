import React from 'react';
import { motion } from 'motion/react';
import { Search, ShoppingBag, Truck, Gift, MapPin } from 'lucide-react';
import { APP_SECTION_CONFIG, SideCardId } from '../../../config/appSectionConfig';
import { FoodThumbnail } from '../../hero/ProductShowcase/ProductVisuals';
import { BrandLogo } from '../../hero/Header/BrandLogo';

interface ExperienceSideCardProps {
  cardId: SideCardId;
  isHighlighted: boolean;
  delay?: number;
  onClick?: () => void;
}

export const ExperienceSideCard: React.FC<ExperienceSideCardProps> = ({
  cardId,
  isHighlighted,
  delay = 0,
  onClick,
}) => {
  const card = APP_SECTION_CONFIG.sideCards[cardId];

  const iconConfig: Record<SideCardId, { Icon: React.ComponentType<{ className?: string }>; color: string; bg: string }> = {
    discovery: {
      Icon: Search,
      color: 'text-[#345EAA]',
      bg: 'bg-[#EAF5FF]',
    },
    shopping: {
      Icon: ShoppingBag,
      color: 'text-[#398441]',
      bg: 'bg-[#E8F8F0]',
    },
    tracking: {
      Icon: Truck,
      color: 'text-[#398441]',
      bg: 'bg-[#E8F8F0]',
    },
    membership: {
      Icon: Gift,
      color: 'text-[#345EAA]',
      bg: 'bg-[#EAF5FF]',
    },
  };

  const { Icon, color, bg } = iconConfig[cardId];

  const renderMiniVisual = () => {
    switch (cardId) {
      case 'discovery':
        return (
          <div className="w-20 h-16 rounded-2xl overflow-hidden border border-white/80 shadow-sm shrink-0 bg-white">
            <FoodThumbnail type="veggies" />
          </div>
        );

      case 'shopping':
        return (
          <div className="w-20 h-16 rounded-2xl overflow-hidden border border-white/80 shadow-sm shrink-0 bg-white">
            <FoodThumbnail type="chicken" />
          </div>
        );

      case 'tracking':
        return (
          <div className="relative w-20 h-16 flex items-center justify-center shrink-0">
            {/* Cardboard parcel + green pin */}
            <svg viewBox="0 0 72 64" className="w-16 h-14" aria-hidden="true">
              <path d="M12 24L36 14L60 24V48L36 58L12 48V24Z" fill="#DFC29D" />
              <path d="M12 24L36 34V58L12 48V24Z" fill="#CFA97E" />
              <path d="M60 24L36 34V58L60 48V24Z" fill="#E8CFB0" />
              <path d="M24 19L48 29" stroke="#B78C5C" strokeWidth="2.5" />
            </svg>
            <div className="absolute -top-0.5 right-1 w-6 h-6 rounded-full bg-[#398441] text-white flex items-center justify-center shadow-sm">
              <MapPin className="w-3.5 h-3.5" />
            </div>
          </div>
        );

      case 'membership':
        return (
          <div className="w-20 h-14 rounded-xl adigo-brand-gradient p-2 text-white shadow-md -rotate-[6deg] shrink-0 flex flex-col justify-between">
            <span className="self-start bg-white/95 px-1 py-0.5 rounded">
              <BrandLogo compact size="sm" className="scale-[0.55] origin-left" />
            </span>
            <span className="text-[8px] font-bold tracking-tight text-white/95">
              Thành viên
            </span>
          </div>
        );
    }
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group text-left w-full rounded-[24px] p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
        isHighlighted
          ? 'bg-white/82 border-2 border-[#4C9DC6]/65 shadow-[0_18px_36px_rgba(52,94,170,0.14)] -translate-y-1'
          : 'adigo-glass-strong hover:-translate-y-1 hover:bg-white/75'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div
          className={`w-11 h-11 rounded-2xl ${bg} border border-white/90 shadow-xs flex items-center justify-center ${color} transition-transform duration-200 group-hover:scale-105`}
        >
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-end justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-[17px] sm:text-[18px] font-bold text-[#112D52] leading-snug">
            {card.title}
          </h3>
          <p className="mt-1.5 text-[13px] sm:text-[14px] text-[#52677D] leading-relaxed">
            {card.description}
          </p>
        </div>

        {renderMiniVisual()}
      </div>
    </motion.button>
  );
};
