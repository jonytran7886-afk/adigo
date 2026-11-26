import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bell,
  CheckCircle2,
  Sprout,
  Package,
  Truck,
  Store,
  ChevronRight,
  QrCode,
} from 'lucide-react';
import { PhoneShell } from '../hero/ProductShowcase/PhoneShell';
import { BrandLogo } from '../hero/Header/BrandLogo';
import { HERO_CONFIG } from '../../config/heroConfig';
import {
  TRACEABILITY_CONFIG,
  TraceabilityStageId,
} from '../../config/traceabilityConfig';

interface TraceabilityPhoneMockupProps {
  activeStage: TraceabilityStageId;
  onSelectStage: (stage: TraceabilityStageId) => void;
  size?: 'main' | 'side';
}

export const TraceabilityPhoneMockup: React.FC<
  TraceabilityPhoneMockupProps
> = ({ activeStage, onSelectStage, size = 'main' }) => {
  const stageIcons: Record<
    TraceabilityStageId,
    React.ComponentType<{ className?: string }>
  > = {
    farm: Sprout,
    packaging: Package,
    shipping: Truck,
    store: Store,
  };

  const activeConfig =
    TRACEABILITY_CONFIG.stages.find((s) => s.id === activeStage) ??
    TRACEABILITY_CONFIG.stages[0];

  return (
    <PhoneShell size={size}>
      <div className="flex-1 flex flex-col justify-between bg-[#F7FAFE] overflow-hidden">
        {/* App Header */}
        <div className="px-4 pt-1.5 pb-2 bg-white border-b border-[#E7F0F7] flex items-center justify-between shrink-0">
          <BrandLogo size="sm" className="!h-[19px]" />

          <div className="flex items-center gap-2">
            <span
              className="relative w-6 h-6 rounded-full bg-[#F3F8FC] flex items-center justify-center text-[#142F63]"
              aria-hidden="true"
            >
              <Bell className="w-3 h-3" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#398441]" />
            </span>

            <div className="w-6 h-6 rounded-full overflow-hidden border border-[#CBE0F2] bg-[#EAF5FF] shrink-0">
              <img
                src={HERO_CONFIG.assets.lifestylePhoto}
                alt="Người tiêu dùng ADIGO"
                width={120}
                height={90}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Product Photo + QR Stamp */}
        <div className="px-3.5 pt-2.5 shrink-0">
          <div className="relative h-[112px] sm:h-[124px] rounded-[18px] overflow-hidden border border-[#DCEAF5] bg-[#FDF2F2] shadow-2xs">
            <img
              src={HERO_CONFIG.assets.freshBannerPhoto}
              alt={TRACEABILITY_CONFIG.demoProduct.name}
              width={600}
              height={335}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[86%_22%] scale-125"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#142F63]/40 via-transparent to-transparent"
              aria-hidden="true"
            />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/92 text-[#142F63] text-[8.5px] font-bold shadow-2xs">
              Truy xuất QR
            </span>

            {/* Crisp Mini QR Badge */}
            <div className="absolute bottom-2 right-2 w-11 h-11 rounded-xl bg-white/95 border border-white p-1 shadow-md flex items-center justify-center">
              <QrCode className="w-full h-full text-[#142F63]" />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="font-display text-[12.5px] font-bold text-[#142F63] truncate">
                {TRACEABILITY_CONFIG.demoProduct.name}
              </p>
              <div className="mt-0.5 flex items-center gap-1 text-[9.5px] font-semibold text-[#2E8547]">
                <CheckCircle2 className="w-3 h-3 shrink-0" />
                <span>Hồ sơ nguồn gốc sản phẩm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Synchronized Traceability Details Panel + 4-Stage List */}
        <div className="flex-1 px-3.5 py-2 flex flex-col justify-between gap-2 overflow-hidden">
          {/* Active Stage Details Crossfade Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeConfig.id}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[15px] bg-white border border-[#DCEAF5] p-2.5 shadow-[0_6px_16px_rgba(20,47,99,0.05)] shrink-0"
            >
              <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-[#EEF4F9]">
                <span className="text-[10.5px] font-bold text-[#142F63]">
                  {activeConfig.panelTitle}
                </span>
                <span className="text-[8.5px] font-semibold text-[#345EAA] truncate">
                  {activeConfig.batchLabel}
                </span>
              </div>

              <div className="mt-1.5 flex flex-col gap-1">
                {activeConfig.highlights.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-2 text-[9px]"
                  >
                    <span className="text-[#64748B] shrink-0">{row.label}:</span>
                    <span className="font-semibold text-[#142F63] truncate text-right">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive 4-Step Vertical Traceability List */}
          <div className="relative flex flex-col gap-1.5">
            {TRACEABILITY_CONFIG.stages.map((stage) => {
              const Icon = stageIcons[stage.id];
              const isActive = stage.id === activeStage;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => onSelectStage(stage.id)}
                  className={`w-full rounded-[12px] px-2.5 py-1.5 flex items-center justify-between gap-2 border transition-colors cursor-pointer text-left ${
                    isActive
                      ? 'bg-[#EAF5FF] border-[#4C9DC6]'
                      : 'bg-white border-[#E4EEF6] hover:border-[#BFDFF5]'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-[#247A4B] text-white'
                          : 'bg-[#F0F7FF] text-[#345EAA]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold truncate ${
                        isActive ? 'text-[#142F63]' : 'text-[#3F5770]'
                      }`}
                    >
                      {stage.label}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive ? 'text-[#345EAA]' : 'text-[#94A3B8]'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </PhoneShell>
  );
};
