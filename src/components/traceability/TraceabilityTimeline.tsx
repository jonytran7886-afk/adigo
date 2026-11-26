import React from 'react';
import { motion } from 'motion/react';
import {
  Sprout,
  Package,
  Truck,
  Store,
  ChevronRight,
} from 'lucide-react';
import {
  TRACEABILITY_CONFIG,
  TraceabilityStageId,
} from '../../config/traceabilityConfig';

interface TraceabilityTimelineProps {
  activeStage: TraceabilityStageId;
  onSelectStage: (stage: TraceabilityStageId) => void;
}

export const TraceabilityTimeline: React.FC<TraceabilityTimelineProps> = ({
  activeStage,
  onSelectStage,
}) => {
  const iconMap: Record<
    TraceabilityStageId,
    React.ComponentType<{ className?: string }>
  > = {
    farm: Sprout,
    packaging: Package,
    shipping: Truck,
    store: Store,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex justify-center mt-8 sm:mt-10 lg:mt-12"
    >
      <div
        role="tablist"
        aria-label="Hành trình truy xuất nguồn gốc ADIGO"
        className="w-full max-w-[1440px] p-2 sm:p-2.5 rounded-[28px] lg:rounded-full border-[1.5px] border-white/90 shadow-[0_18px_42px_rgba(31,84,130,0.12),inset_0_1px_2px_rgba(255,255,255,0.8)] grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-2 lg:gap-1"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.62)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {TRACEABILITY_CONFIG.stages.map((stage, idx) => {
          const Icon = iconMap[stage.id];
          const isActive = activeStage === stage.id;
          return (
            <React.Fragment key={stage.id}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectStage(stage.id)}
                className={`relative flex-1 min-h-[56px] sm:min-h-[64px] px-3 sm:px-6 py-2.5 rounded-[20px] lg:rounded-full flex items-center justify-center gap-2.5 sm:gap-3 transition-colors duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345EAA] ${
                  isActive
                    ? 'text-[#142F63]'
                    : 'text-[#3F5770] hover:text-[#142F63]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="adigo-traceability-timeline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-[20px] lg:rounded-full bg-gradient-to-r from-[#FFFFFF] via-[#F2FBF6] to-[#E2F6EB] border border-white shadow-[0_8px_20px_rgba(52,94,170,0.10)]"
                    aria-hidden="true"
                  />
                )}

                <Icon
                  className={`relative z-10 w-5 h-5 sm:w-6.5 sm:h-6.5 shrink-0 transition-colors ${
                    isActive ? 'text-[#247A4B]' : 'text-[#345EAA]'
                  }`}
                />
                <span className="relative z-10 font-display text-[13.5px] sm:text-[16.5px] lg:text-[17.5px] font-semibold tracking-tight truncate">
                  {stage.label}
                </span>
              </button>

              {idx < TRACEABILITY_CONFIG.stages.length - 1 && (
                <span
                  className="hidden lg:flex w-6 h-6 rounded-full bg-white/70 border border-white items-center justify-center text-[#4C9DC6] shrink-0 mx-0.5 shadow-2xs"
                  aria-hidden="true"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </motion.div>
  );
};
