import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Store, MapPin, ArrowRight } from 'lucide-react';
import { MART_CONFIG, MartExperienceId } from '../../config/martConfig';

interface FloatingMapCardProps {
  activeExperience: MartExperienceId;
}

export const FloatingMapCard: React.FC<FloatingMapCardProps> = ({
  activeExperience,
}) => {
  const currentExp =
    MART_CONFIG.experiences.find((e) => e.id === activeExperience) ??
    MART_CONFIG.experiences[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="w-[228px] sm:w-[252px] rounded-[26px] p-2.5 border-[1.5px] border-white/90 shadow-[0_22px_48px_rgba(31,84,130,0.18),inset_0_1px_2px_rgba(255,255,255,0.85)] lg:rotate-[2deg]"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      {/* Top Vector Street Illustration + Pin */}
      <div className="relative h-[94px] sm:h-[104px] rounded-[18px] overflow-hidden bg-gradient-to-br from-[#EAF5FF] via-[#F2FBF7] to-[#DDF4EA] border border-white/80">
        <svg
          viewBox="0 0 240 110"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Abstract City Blocks */}
          <rect x="12" y="14" width="44" height="28" rx="6" fill="#DCECF8" fillOpacity="0.65" />
          <rect x="74" y="10" width="52" height="32" rx="6" fill="#D4EDE2" fillOpacity="0.6" />
          <rect x="148" y="16" width="76" height="26" rx="6" fill="#DCECF8" fillOpacity="0.55" />
          <rect x="18" y="60" width="58" height="34" rx="6" fill="#D9F0E6" fillOpacity="0.65" />
          <rect x="150" y="58" width="72" height="36" rx="6" fill="#DCECF8" fillOpacity="0.65" />

          {/* Clean Road Paths */}
          <path
            d="M0 50 C 68 48, 130 56, 240 44"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M66 0 L 82 110"
            stroke="#FFFFFF"
            strokeWidth="6"
            fill="none"
          />
          <path
            d="M142 0 L 134 110"
            stroke="#FFFFFF"
            strokeWidth="5"
            fill="none"
          />
          {/* Subtle Tech Route Accent */}
          <path
            d="M28 84 Q 95 52, 120 48 T 206 32"
            stroke="#4C9DC6"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeOpacity="0.55"
            fill="none"
          />
        </svg>

        {/* Centered 3D Styled Green-Teal Map Pin */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative flex flex-col items-center -mt-2">
            <div className="w-10 h-10 rounded-full bg-[#398441]/15 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#65B848] to-[#238A5C] border-2 border-white shadow-[0_8px_18px_rgba(35,138,92,0.35)] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
            </div>
            <div className="w-3.5 h-1.5 rounded-full bg-[#142F63]/20 blur-[1px] -mt-0.5" />
          </div>
        </div>
      </div>

      {/* Bottom Synced Info Row */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentExp.id}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.22 }}
          className="mt-2.5 px-1.5 pb-1 flex items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E8F8F0] to-[#EAF5FF] border border-white flex items-center justify-center text-[#142F63] shrink-0 shadow-2xs">
              <Store className="w-4 h-4 text-[#345EAA]" />
            </div>
            <div className="min-w-0">
              <p className="font-display text-[12.5px] font-bold text-[#142F63] truncate">
                {currentExp.mapTitle}
              </p>
              <p className="flex items-center gap-1 text-[10.5px] text-[#52677D] truncate">
                <MapPin className="w-3 h-3 text-[#398441] shrink-0" />
                <span className="truncate">{currentExp.mapSubtitle}</span>
              </p>
            </div>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-[#345EAA] shrink-0" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
