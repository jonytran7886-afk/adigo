import React from 'react';
import { motion } from 'motion/react';
import { QrCode, ScanLine, Route, FileCheck, ShieldCheck } from 'lucide-react';
import {
  TRACEABILITY_CONFIG,
  TraceabilityChipId,
  TraceabilityStageId,
} from '../../config/traceabilityConfig';

interface TraceabilityContentProps {
  activeStage: TraceabilityStageId;
  showChips?: boolean;
}

export const TraceabilityFeatureGrid: React.FC<{
  activeStage: TraceabilityStageId;
}> = ({ activeStage }) => {
  const activeConfig = TRACEABILITY_CONFIG.stages.find(
    (s) => s.id === activeStage
  );
  const highlighted: TraceabilityChipId[] = activeConfig?.relatedChips ?? [];

  const renderIcon = (icon: 'scan' | 'route' | 'fileCheck' | 'shield') => {
    switch (icon) {
      case 'scan':
        return <ScanLine className="w-6 h-6 text-[#24916E]" />;
      case 'route':
        return <Route className="w-6 h-6 text-[#168CA9]" />;
      case 'fileCheck':
        return <FileCheck className="w-6 h-6 text-[#345EAA]" />;
      case 'shield':
        return <ShieldCheck className="w-6 h-6 text-[#398441]" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-[540px]">
      {TRACEABILITY_CONFIG.featureChips.map((chip, idx) => {
        const isRelated = highlighted.includes(chip.id);
        return (
          <motion.div
            key={chip.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: 0.14 + idx * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`min-h-[84px] sm:min-h-[90px] rounded-[22px] p-3.5 sm:p-4 flex items-center gap-3.5 transition-colors duration-300 ${
              isRelated
                ? 'bg-white/78 border-[1.5px] border-[#4C9DC6]/65 shadow-[0_14px_30px_rgba(39,112,164,0.10)]'
                : 'adigo-glass-strong border-[1.5px] border-white/85'
            }`}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] bg-gradient-to-br from-white/95 to-[#E9F6F3] border border-white shadow-[0_6px_14px_rgba(39,112,164,0.08)] flex items-center justify-center shrink-0">
              {renderIcon(chip.icon)}
            </div>
            <div className="font-display text-[15.5px] sm:text-[16.5px] font-bold text-[#142F63] leading-[1.3]">
              <span className="block">{chip.line1}</span>
              <span className="block">{chip.line2}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const TraceabilityContent: React.FC<TraceabilityContentProps> = ({
  activeStage,
  showChips = true,
}) => {
  return (
    <div className="flex flex-col items-start text-left">
      {/* Glass Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center justify-center gap-2.5 h-[44px] sm:h-[46px] px-5 sm:px-6 rounded-full adigo-glass-strong text-[#142F63] text-xs sm:text-[14px] font-semibold tracking-tight whitespace-nowrap shadow-[0_6px_18px_rgba(39,112,164,0.09)]"
      >
        <QrCode className="w-4 h-4 text-[#345EAA] shrink-0" />
        <span>{TRACEABILITY_CONFIG.eyebrow}</span>
      </motion.div>

      {/* Main Left-Aligned Headline */}
      <motion.h2
        id="traceability-section-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 font-display font-extrabold tracking-[-0.025em] leading-[1.14] text-[clamp(2rem,3.4vw,3.65rem)] text-left"
      >
        <span className="block text-[#142F63]">
          {TRACEABILITY_CONFIG.headlineLine1}
        </span>
        <span className="block adigo-text-gradient">
          {TRACEABILITY_CONFIG.headlineLine2}
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 text-[15.5px] sm:text-[18px] lg:text-[18.5px] leading-[1.6] text-[#52677D] max-w-[540px]"
      >
        {TRACEABILITY_CONFIG.description}
      </motion.p>

      {/* 2x2 Glass Feature Chips (Desktop inline; mobile renders below Showcase) */}
      {showChips && (
        <div className="hidden lg:block mt-7 w-full">
          <TraceabilityFeatureGrid activeStage={activeStage} />
        </div>
      )}
    </div>
  );
};
