import React from 'react';
import { motion } from 'motion/react';
import {
  ShoppingBag,
  CheckCircle2,
  Sparkles,
  Store,
  QrCode,
} from 'lucide-react';
import { BrandLogo } from '../hero/Header/BrandLogo';
import { FoodThumbnail } from '../hero/ProductShowcase/ProductVisuals';
import {
  TECHNOLOGY_CONFIG,
  TechnologyExperienceId,
  TechnologyPanelId,
} from '../../config/technologyConfig';

interface PanelProps {
  isHighlighted: boolean;
  onSelect: (tab: TechnologyExperienceId) => void;
}

const panelBaseClass = (isHighlighted: boolean) =>
  `group text-left rounded-[24px] p-2.5 border-[1.5px] transition-all duration-300 cursor-pointer select-none ${
    isHighlighted
      ? 'bg-white/86 border-[#4C9DC6] shadow-[0_22px_46px_rgba(52,94,170,0.22)] -translate-y-1'
      : 'bg-white/64 border-white/88 shadow-[0_16px_34px_rgba(31,84,130,0.13)] hover:-translate-y-0.5 hover:bg-white/78'
  }`;

export const ConnectedProductPanel: React.FC<PanelProps> = ({
  isHighlighted,
  onSelect,
}) => {
  const cfg = TECHNOLOGY_CONFIG.panels.products;
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(cfg.targetTab)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.14 }}
      style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      className={`w-full animate-float-slow ${panelBaseClass(isHighlighted)}`}
    >
      <div className="grid grid-cols-3 gap-1.5 h-[76px] sm:h-[84px] rounded-[16px] overflow-hidden bg-[#F2F8FD] p-1.5 border border-white">
        <div className="rounded-[10px] overflow-hidden bg-white">
          <FoodThumbnail type="pork" />
        </div>
        <div className="rounded-[10px] overflow-hidden bg-white">
          <FoodThumbnail type="veggies" />
        </div>
        <div className="rounded-[10px] overflow-hidden bg-white">
          <FoodThumbnail type="orange" />
        </div>
      </div>

      <div className="mt-2 px-1 flex items-center gap-2">
        <span className="w-7 h-7 rounded-xl bg-[#EAF5FF] text-[#345EAA] flex items-center justify-center shrink-0">
          <ShoppingBag className="w-3.5 h-3.5" />
        </span>
        <div className="min-w-0">
          <p className="font-display text-[12.5px] font-bold text-[#142F63] truncate">
            {cfg.title}
          </p>
          <p className="text-[9.5px] text-[#52677D] truncate">{cfg.subtitle}</p>
        </div>
      </div>
    </motion.button>
  );
};

export const TraceabilityPanel: React.FC<PanelProps> = ({
  isHighlighted,
  onSelect,
}) => {
  const cfg = TECHNOLOGY_CONFIG.panels.traceability;
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(cfg.targetTab)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      className={`w-full ${panelBaseClass(isHighlighted)}`}
    >
      <div className="h-[84px] sm:h-[92px] rounded-[16px] bg-gradient-to-br from-[#F7FAFE] to-[#E6F3FB] border border-white p-2 flex items-center justify-between gap-2">
        {/* Mini Fresh Product Tray */}
        <div className="flex-1 h-full rounded-[12px] bg-white border border-[#DCE8F2] p-1.5 flex items-center justify-center">
          <svg viewBox="0 0 80 60" className="w-full h-full" aria-hidden="true">
            <path d="M10 34 C10 16, 28 8, 48 11 C64 14, 70 26, 68 40 C64 52, 42 54, 24 50 C14 48, 10 42, 10 34 Z" fill="#C43434" />
            <path d="M22 24 C34 30, 48 28, 56 22 M18 36 C32 42, 46 40, 58 34" stroke="#FCE5E5" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7" fill="none" />
          </svg>
        </div>

        {/* Official Vertical Logo ADIGO_Dung_2400px + QR Badge */}
        <div className="w-[60px] h-full rounded-[11px] bg-white border border-[#DCEAF5] p-1.5 flex flex-col items-center justify-between shrink-0">
          <BrandLogo variant="vertical" size="sm" className="!h-[24px]" />
          <QrCode className="w-7 h-7 text-[#142F63]" />
        </div>
      </div>

      <div className="mt-2 px-1 flex items-center gap-2">
        <span className="w-7 h-7 rounded-xl bg-[#E8F8F0] text-[#247A4B] flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4" />
        </span>
        <div className="min-w-0">
          <p className="font-display text-[12.5px] font-bold text-[#142F63] truncate">
            {cfg.title}
          </p>
          <p className="text-[9.5px] text-[#52677D] truncate">{cfg.subtitle}</p>
        </div>
      </div>
    </motion.button>
  );
};

export const SmartExperiencePanel: React.FC<PanelProps> = ({
  isHighlighted,
  onSelect,
}) => {
  const cfg = TECHNOLOGY_CONFIG.panels.smart;
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(cfg.targetTab)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.24 }}
      style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      className={`w-full animate-float-delayed ${panelBaseClass(isHighlighted)}`}
    >
      <div className="rounded-[16px] bg-gradient-to-br from-[#F3FAFF] to-[#E8F8F0] border border-white p-2.5 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[9.5px] font-bold text-[#142F63]">
            Trợ lý gợi ý minh họa
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#168CA9]" />
        </div>
        <div className="rounded-[10px] bg-white/95 border border-[#DCEAF5] px-2 py-1.5 text-[9.5px] font-medium text-[#142F63] leading-snug">
          “Hôm nay bạn muốn chuẩn bị món gì?”
        </div>
        <div className="rounded-[10px] bg-[#EAF5FF] px-2 py-1 text-[9px] text-[#345EAA] font-medium truncate">
          Gợi ý bữa ăn gia đình · Minh họa
        </div>
      </div>

      <div className="mt-2 px-1 flex items-center gap-2">
        <span className="w-7 h-7 rounded-xl bg-[#EAF5FF] text-[#168CA9] flex items-center justify-center shrink-0">
          <Sparkles className="w-3.5 h-3.5" />
        </span>
        <div className="min-w-0">
          <p className="font-display text-[12.5px] font-bold text-[#142F63] truncate">
            {cfg.title}
          </p>
          <p className="text-[9.5px] text-[#52677D] truncate">{cfg.subtitle}</p>
        </div>
      </div>
    </motion.button>
  );
};

export const RetailNetworkPanel: React.FC<PanelProps> = ({
  isHighlighted,
  onSelect,
}) => {
  const cfg = TECHNOLOGY_CONFIG.panels.network;
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(cfg.targetTab)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.28 }}
      style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      className={`w-full animate-float-slow ${panelBaseClass(isHighlighted)}`}
    >
      {/* Mini Architectural ADIGO Mart Storefront Visual */}
      <div className="h-[88px] sm:h-[96px] rounded-[16px] overflow-hidden border border-white bg-[#EAF4FC] flex flex-col">
        <div
          className="h-8 px-2.5 flex items-center justify-between"
          style={{
            background: 'linear-gradient(108deg, #103A73 0%, #1F5CA8 100%)',
          }}
        >
          <div className="flex items-center gap-1.5">
            <span className="px-1.5 py-0.5 rounded bg-white/95 flex items-center">
              <BrandLogo variant="horizontal" size="sm" className="!h-[11px]" />
            </span>
            <span className="font-display font-extrabold text-[11px] text-[#A4CE46]">
              Mart
            </span>
          </div>
          <span className="text-[8px] text-white/80">Đa kênh</span>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#65B848] via-[#A4CE46] to-[#4C9DC6]" />
        <div className="flex-1 bg-gradient-to-b from-[#DCEEFB] to-[#F3F9FD] p-1.5 grid grid-cols-3 gap-1">
          <div className="rounded bg-white/90 border border-[#D4E4F2]" />
          <div className="rounded bg-[#E8F8F0] border border-[#CBEAD9]" />
          <div className="rounded bg-white/90 border border-[#D4E4F2]" />
        </div>
      </div>

      <div className="mt-2 px-1 flex items-center gap-2">
        <span className="w-7 h-7 rounded-xl bg-[#E8F8F0] text-[#398441] flex items-center justify-center shrink-0">
          <Store className="w-3.5 h-3.5" />
        </span>
        <div className="min-w-0">
          <p className="font-display text-[12.5px] font-bold text-[#142F63] truncate">
            {cfg.title}
          </p>
          <p className="text-[9.5px] text-[#52677D] truncate">{cfg.subtitle}</p>
        </div>
      </div>
    </motion.button>
  );
};

export const DataConnectionLines: React.FC<{
  highlightedPanels: TechnologyPanelId[];
}> = ({ highlightedPanels }) => {
  const strokeFor = (id: TechnologyPanelId) =>
    highlightedPanels.includes(id) ? '#34C0D8' : '#FFFFFF';
  const opacityFor = (id: TechnologyPanelId) =>
    highlightedPanels.includes(id) ? 0.92 : 0.62;

  return (
    <svg
      viewBox="0 0 600 420"
      fill="none"
      className="pointer-events-none absolute inset-0 w-full h-full z-10"
      aria-hidden="true"
    >
      {/* Top-Left Panel -> Bottom-Center ADIGO Core */}
      <path
        d="M150 135 C 185 210, 240 250, 290 295"
        stroke={strokeFor('products')}
        strokeOpacity={opacityFor('products')}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Top-Right Panel -> Bottom-Center ADIGO Core */}
      <path
        d="M450 135 C 415 210, 360 250, 310 295"
        stroke={strokeFor('traceability')}
        strokeOpacity={opacityFor('traceability')}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Bottom-Left Smart Panel -> Bottom-Center ADIGO Core */}
      <path
        d="M160 315 C 210 315, 245 315, 275 315"
        stroke={strokeFor('smart')}
        strokeOpacity={opacityFor('smart')}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Bottom-Right Retail Network Panel -> Bottom-Center ADIGO Core */}
      <path
        d="M440 315 C 390 315, 355 315, 325 315"
        stroke={strokeFor('network')}
        strokeOpacity={opacityFor('network')}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
