import { ResponsiveImage } from '../ResponsiveImage';
import React from 'react';
import { motion } from 'motion/react';
import {
  ShoppingBag,
  CheckCircle2,
  Sparkles,
  Store,
  QrCode,
  ArrowUpRight,
} from 'lucide-react';
import { BrandLogo } from '../hero/Header/BrandLogo';
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
  `group relative text-left rounded-[26px] p-2.5 sm:p-3 border-[1.5px] transition-all duration-300 cursor-pointer select-none overflow-hidden ${
    isHighlighted
      ? 'bg-white/92 border-[#1676D2] shadow-[0_26px_54px_rgba(20,47,99,0.26),0_0_0_2px_rgba(66,200,239,0.38)] -translate-y-1'
      : 'bg-white/76 border-white/90 shadow-[0_18px_38px_rgba(20,47,99,0.16)] hover:-translate-y-0.5 hover:bg-white/88'
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
      style={{ backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)' }}
      className={`w-full animate-float-slow ${panelBaseClass(isHighlighted)}`}
    >
      {/* Unified Commercial Showcase Visual (75% visual area) */}
      <div className="relative h-[112px] sm:h-[128px] xl:h-[140px] rounded-[18px] overflow-hidden border border-white bg-[#EAF4FC]">
        <ResponsiveImage
          src={TECHNOLOGY_CONFIG.assets.varietyPhoto}
          alt="Hệ sinh thái sản phẩm tươi sống và nông sản kết nối trên ADIGO"
          width={560}
          height={360}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#142F63]/45 via-transparent to-transparent"
          aria-hidden="true"
        />
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/94 text-[#142F63] text-[9px] font-bold shadow-xs">
          Hệ sinh thái sản phẩm
        </span>
      </div>

      <div className="mt-2.5 px-1 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-7.5 h-7.5 rounded-xl bg-[#EAF5FF] text-[#1676D2] flex items-center justify-center shrink-0">
            <ShoppingBag className="w-3.5 h-3.5" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-[13px] font-bold text-[#142F63] truncate">
              {cfg.title}
            </p>
            <p className="text-[9.5px] text-[#52677D] truncate">{cfg.subtitle}</p>
          </div>
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#345EAA] shrink-0 opacity-70 group-hover:opacity-100" />
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
      style={{ backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)' }}
      className={`w-full ${panelBaseClass(isHighlighted)}`}
    >
      {/* Photorealistic Vacuum-Sealed Beef Tray + Official ADIGO Vertical Brand & QR Label */}
      <div className="relative h-[112px] sm:h-[128px] xl:h-[140px] rounded-[18px] overflow-hidden border border-white bg-[#F7FAFE]">
        <ResponsiveImage
          src={TECHNOLOGY_CONFIG.assets.traceabilityBeefPhoto}
          alt="Thịt bò đóng gói hút chân không gắn tem QR truy xuất nguồn gốc ADIGO"
          width={560}
          height={360}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#142F63]/40 via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Crisp HTML/CSS Brand + QR Packaging Sticker Overlay */}
        <div className="absolute top-2 right-2 rounded-xl bg-white/96 backdrop-blur-sm border border-[#DCEAF5] px-2 py-1.5 shadow-md flex flex-col items-center gap-1">
          <BrandLogo variant="vertical" size="sm" className="!h-[20px]" />
          <div className="w-9 h-9 rounded-md bg-[#F2F8FD] border border-[#CBE0F2] p-0.5 flex items-center justify-center">
            <QrCode className="w-full h-full text-[#142F63]" />
          </div>
        </div>

        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-white/94 text-[#247A4B] text-[9px] font-bold shadow-xs flex items-center gap-1">
          <CheckCircle2 className="w-2.5 h-2.5" />
          Lô ADG-01 · Đóng gói lạnh
        </span>
      </div>

      <div className="mt-2.5 px-1 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-7.5 h-7.5 rounded-xl bg-[#E8F8F0] text-[#247A4B] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-[13px] font-bold text-[#142F63] truncate">
              {cfg.title}
            </p>
            <p className="text-[9.5px] text-[#52677D] truncate">{cfg.subtitle}</p>
          </div>
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#247A4B] shrink-0 opacity-70 group-hover:opacity-100" />
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
      style={{ backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)' }}
      className={`w-full animate-float-delayed ${panelBaseClass(isHighlighted)}`}
    >
      {/* Realistic AI Shopping Assistant Card with Meal Photography */}
      <div className="rounded-[18px] bg-gradient-to-br from-[#F3FAFF] via-[#FFFFFF] to-[#E8F8F0] border border-white p-2.5 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-1">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EAF5FF] text-[#1676D2] text-[8.5px] font-bold">
            <Sparkles className="w-2.5 h-2.5" />
            Trợ lý mua sắm
          </span>
          <span className="text-[8.5px] font-semibold text-[#247A4B]">
            Gợi ý nhanh
          </span>
        </div>

        <div className="rounded-[11px] bg-white border border-[#DCEAF5] px-2.5 py-1.5 text-[10px] font-semibold text-[#142F63] leading-snug shadow-2xs">
          “Hôm nay bạn muốn chuẩn bị món gì?”
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          <div className="rounded-[10px] overflow-hidden bg-white border border-[#E2ECF4] p-1">
            <div className="h-[46px] rounded-[7px] overflow-hidden">
              <ResponsiveImage
                src={TECHNOLOGY_CONFIG.assets.chickenPlatterPhoto}
                alt="Thịt gà nguyên con cho bữa ăn gia đình"
                width={200}
                height={150}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-1 text-[8.5px] font-bold text-[#142F63] truncate">
              Thịt gà thảo dược
            </p>
          </div>
          <div className="rounded-[10px] overflow-hidden bg-white border border-[#E2ECF4] p-1">
            <div className="h-[46px] rounded-[7px] overflow-hidden">
              <ResponsiveImage
                src={TECHNOLOGY_CONFIG.assets.veggiesProcessedPhoto}
                alt="Rau củ tươi cho bữa ăn gia đình"
                width={200}
                height={150}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-1 text-[8.5px] font-bold text-[#142F63] truncate">
              Rau củ theo mùa
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2.5 px-1 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-7.5 h-7.5 rounded-xl bg-[#EAF5FF] text-[#168CA9] flex items-center justify-center shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-[13px] font-bold text-[#142F63] truncate">
              {cfg.title}
            </p>
            <p className="text-[9.5px] text-[#52677D] truncate">{cfg.subtitle}</p>
          </div>
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
      style={{ backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)' }}
      className={`w-full animate-float-slow ${panelBaseClass(isHighlighted)}`}
    >
      {/* Photorealistic ADIGO Mart Retail Photo + Official ADIGO Mart Signboard Strip */}
      <div className="relative h-[134px] sm:h-[144px] rounded-[18px] overflow-hidden border border-white bg-[#EAF4FC] flex flex-col">
        <div
          className="h-8 px-2.5 flex items-center justify-between shrink-0"
          style={{
            background: 'linear-gradient(108deg, #103A73 0%, #1F5CA8 100%)',
          }}
        >
          <div className="flex items-center gap-1.5">
            <span className="px-1.5 py-0.5 rounded bg-white/96 flex items-center">
              <BrandLogo variant="horizontal" size="sm" className="!h-[11px]" />
            </span>
            <span className="font-display font-extrabold text-[11px] text-[#A4CE46]">
              Mart
            </span>
          </div>
          <span className="text-[8px] font-semibold text-white/90">Đa kênh</span>
        </div>

        <div className="h-[3px] bg-gradient-to-r from-[#65B848] via-[#A4CE46] to-[#42C8EF] shrink-0" />

        <div className="relative flex-1 overflow-hidden">
          <ResponsiveImage
            src={TECHNOLOGY_CONFIG.assets.martConceptPhoto}
            alt="Không gian cửa hàng bán lẻ hiện đại ADIGO Mart"
            width={480}
            height={320}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#142F63]/35 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-2.5 px-1 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-7.5 h-7.5 rounded-xl bg-[#E8F8F0] text-[#398441] flex items-center justify-center shrink-0">
            <Store className="w-3.5 h-3.5" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-[13px] font-bold text-[#142F63] truncate">
              {cfg.title}
            </p>
            <p className="text-[9.5px] text-[#52677D] truncate">{cfg.subtitle}</p>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export const DataConnectionLines: React.FC<{
  highlightedPanels: TechnologyPanelId[];
}> = ({ highlightedPanels }) => {
  const strokeFor = (id: TechnologyPanelId) =>
    highlightedPanels.includes(id) ? '#42C8EF' : '#FFFFFF';
  const widthFor = (id: TechnologyPanelId) =>
    highlightedPanels.includes(id) ? 3.2 : 2.2;
  const opacityFor = (id: TechnologyPanelId) =>
    highlightedPanels.includes(id) ? 0.96 : 0.65;

  return (
    <svg
      viewBox="0 0 640 460"
      fill="none"
      className="pointer-events-none absolute inset-0 w-full h-full z-10"
      aria-hidden="true"
    >
      {/* Top-Left Panel -> ADIGO Core */}
      <path
        d="M156 172 C 195 235, 250 278, 305 322"
        stroke={strokeFor('products')}
        strokeOpacity={opacityFor('products')}
        strokeWidth={widthFor('products')}
        strokeLinecap="round"
      />
      {/* Top-Right Panel -> ADIGO Core */}
      <path
        d="M484 172 C 445 235, 390 278, 335 322"
        stroke={strokeFor('traceability')}
        strokeOpacity={opacityFor('traceability')}
        strokeWidth={widthFor('traceability')}
        strokeLinecap="round"
      />
      {/* Bottom-Left Smart Panel -> ADIGO Core */}
      <path
        d="M168 355 C 218 355, 254 352, 290 345"
        stroke={strokeFor('smart')}
        strokeOpacity={opacityFor('smart')}
        strokeWidth={widthFor('smart')}
        strokeLinecap="round"
      />
      {/* Bottom-Right Retail Network Panel -> ADIGO Core */}
      <path
        d="M472 355 C 422 355, 386 352, 350 345"
        stroke={strokeFor('network')}
        strokeOpacity={opacityFor('network')}
        strokeWidth={widthFor('network')}
        strokeLinecap="round"
      />
    </svg>
  );
};
