import React from 'react';
import { ChevronLeft, Check, Sprout, ShieldCheck, Package, Store } from 'lucide-react';
import { HERO_CONFIG } from '../../../config/heroConfig';
import { PhoneShell } from './PhoneShell';
import { PackagedChickenQrVisual } from './ProductVisuals';

export const TraceabilityPhoneMockup: React.FC = () => {
  const stepIcons = [Sprout, ShieldCheck, Package, Store];

  return (
    <PhoneShell size="side">
      <div className="flex-1 px-3.5 pt-2 pb-4 flex flex-col gap-2.5 bg-white">
        {/* Header */}
        <div className="flex items-center gap-1.5">
          <ChevronLeft className="w-4 h-4 text-[#112D52]" />
          <p className="font-display text-[13px] font-bold text-[#112D52]">
            {HERO_CONFIG.traceabilityPhone.title}
          </p>
        </div>

        {/* Packaged Chicken with QR */}
        <PackagedChickenQrVisual />

        {/* Product Name & Info Indicator (No unverified certification claim) */}
        <div>
          <p className="font-display text-[14px] font-bold text-[#112D52]">
            {HERO_CONFIG.traceabilityPhone.productName}
          </p>
          <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F8F0] text-[#398441] text-[9.5px] font-semibold">
            <Check className="w-3 h-3" />
            <span>{HERO_CONFIG.traceabilityPhone.infoBadge}</span>
          </div>
        </div>

        {/* 4-Step Origin Timeline */}
        <div className="mt-0.5 flex flex-col gap-2.5">
          {HERO_CONFIG.traceabilityPhone.timeline.map((step, index) => {
            const Icon = stepIcons[index] || Sprout;
            const isLast = index === HERO_CONFIG.traceabilityPhone.timeline.length - 1;
            return (
              <div key={step.id} className="flex items-start gap-2.5">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[#E8F8F0] border border-[#398441]/25 text-[#398441] flex items-center justify-center">
                    <Icon className="w-3 h-3" />
                  </div>
                  {!isLast && (
                    <div className="w-px h-3.5 bg-[#398441]/30 mt-0.5" aria-hidden="true" />
                  )}
                </div>
                <div className="min-w-0 pt-0.5">
                  <p className="text-[10.5px] font-bold text-[#112D52] leading-tight">
                    {step.title}
                  </p>
                  <p className="text-[9.5px] text-[#52677D] leading-tight mt-0.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PhoneShell>
  );
};
