import React from 'react';
import { motion } from 'motion/react';
import { Sprout, Package, Truck, Store } from 'lucide-react';
import { TraceabilityStageId } from '../../config/traceabilityConfig';

interface ProductJourneyVisualProps {
  activeStage: TraceabilityStageId;
  onSelectStage: (stage: TraceabilityStageId) => void;
}

export const ProductJourneyVisual: React.FC<ProductJourneyVisualProps> = ({
  activeStage,
  onSelectStage,
}) => {
  const nodes: {
    id: TraceabilityStageId;
    label: string;
    Icon: React.ComponentType<{ className?: string }>;
    posClass: string;
  }[] = [
    {
      id: 'farm',
      label: 'Vùng sản xuất',
      Icon: Sprout,
      posClass: 'left-[7%] bottom-[16%]',
    },
    {
      id: 'packaging',
      label: 'Đóng gói',
      Icon: Package,
      posClass: 'left-[34%] top-[44%]',
    },
    {
      id: 'shipping',
      label: 'Vận chuyển',
      Icon: Truck,
      posClass: 'left-[60%] top-[28%]',
    },
    {
      id: 'store',
      label: 'Điểm bán',
      Icon: Store,
      posClass: 'right-[7%] top-[14%]',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -16, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[215px] sm:h-[260px] lg:h-[290px] rounded-[28px] p-2 border-[1.5px] border-white/85 shadow-[0_22px_48px_rgba(31,84,130,0.16)] overflow-hidden lg:-rotate-[2deg]"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.56)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Inner Production Landscape & Digital Journey Canvas */}
      <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-gradient-to-b from-[#CBE7FA] via-[#DCF2EC] to-[#8BCB88]">
        {/* Stylized Aerial Production Region Illustration (Zero Watermarks, Zero Third-Party Text) */}
        <svg
          viewBox="0 0 480 280"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="skyWash" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#BFE3FB" />
              <stop offset="100%" stopColor="#EBF8F5" />
            </linearGradient>
            <linearGradient id="hillBack" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8EC2DD" />
              <stop offset="100%" stopColor="#A6D9CE" />
            </linearGradient>
            <linearGradient id="fieldMain" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#72BD6B" />
              <stop offset="55%" stopColor="#58A85B" />
              <stop offset="100%" stopColor="#3F8F53" />
            </linearGradient>
          </defs>

          <rect width="480" height="280" fill="url(#skyWash)" />

          {/* Distant Blue Mountain Ridge */}
          <path
            d="M0 95 Q 85 52, 175 82 T 360 66 T 480 86 L 480 170 L 0 170 Z"
            fill="url(#hillBack)"
            opacity="0.7"
          />

          {/* Rolling Production Fields */}
          <path
            d="M0 128 Q 140 94, 280 116 T 480 104 L 480 280 L 0 280 Z"
            fill="url(#fieldMain)"
          />

          {/* Orderly Cultivated Row Lines */}
          <path
            d="M-20 185 Q 140 140, 320 165 T 500 145"
            stroke="#94D880"
            strokeOpacity="0.45"
            strokeWidth="8"
            fill="none"
          />
          <path
            d="M-20 220 Q 150 168, 340 198 T 500 176"
            stroke="#A5E28B"
            strokeOpacity="0.4"
            strokeWidth="10"
            fill="none"
          />
          <path
            d="M-20 256 Q 165 204, 355 232 T 500 208"
            stroke="#82C974"
            strokeOpacity="0.45"
            strokeWidth="12"
            fill="none"
          />

          {/* Modern Clean Agricultural Glasshouses */}
          <g transform="translate(88, 128)">
            <rect x="0" y="10" width="56" height="20" rx="6" fill="#E8F6FF" fillOpacity="0.88" />
            <path d="M0 15 Q 28 0, 56 15" fill="#FFFFFF" fillOpacity="0.75" />
          </g>
          <g transform="translate(154, 144)">
            <rect x="0" y="8" width="46" height="16" rx="5" fill="#E8F6FF" fillOpacity="0.82" />
            <path d="M0 12 Q 23 0, 46 12" fill="#FFFFFF" fillOpacity="0.7" />
          </g>

          {/* Glowing Cyan-White Journey Path */}
          <path
            d="M46 226 Q 130 164, 185 138 T 308 98 T 426 56"
            stroke="#FFFFFF"
            strokeOpacity="0.75"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M46 226 Q 130 164, 185 138 T 308 98 T 426 56"
            stroke="#34C0D8"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="6 5"
            fill="none"
          />
        </svg>

        {/* Soft Contrast Veil for Nodes */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(125deg, rgba(255,255,255,0.22) 0%, transparent 55%, rgba(20,47,99,0.12) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Interactive Journey Nodes Along Arc */}
        {nodes.map(({ id, label, Icon, posClass }) => {
          const isActive = activeStage === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelectStage(id)}
              aria-label={`Xem mốc ${label}`}
              className={`absolute ${posClass} z-10 flex flex-col items-center gap-1 group cursor-pointer focus-visible:outline-2 focus-visible:outline-white rounded-xl`}
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? 'bg-[#247A4B] border-white text-white scale-110 shadow-[0_8px_20px_rgba(36,122,75,0.4)]'
                    : 'bg-white/95 border-white text-[#142F63] shadow-[0_6px_14px_rgba(20,47,99,0.18)] group-hover:scale-105'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <span
                className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold whitespace-nowrap shadow-xs ${
                  isActive
                    ? 'bg-[#142F63] text-white'
                    : 'bg-white/92 text-[#142F63]'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}

        {/* Quiet Traceability Badge */}
        <span className="absolute bottom-2.5 right-3 px-2.5 py-0.5 rounded-full bg-white/88 text-[#142F63] text-[9px] font-semibold shadow-2xs pointer-events-none">
          Hành trình sản phẩm
        </span>
      </div>
    </motion.div>
  );
};
