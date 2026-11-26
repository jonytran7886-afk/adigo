import React from 'react';
import { motion } from 'motion/react';
import { Layers, Network, Sparkles, UserRound } from 'lucide-react';
import {
  TECHNOLOGY_CONFIG,
  TechnologyExperienceId,
} from '../../config/technologyConfig';

interface TechnologyExperienceBarProps {
  activeExperience: TechnologyExperienceId;
  onSelectExperience: (exp: TechnologyExperienceId) => void;
}

export const TechnologyExperienceBar: React.FC<
  TechnologyExperienceBarProps
> = ({ activeExperience, onSelectExperience }) => {
  const iconMap: Record<
    TechnologyExperienceId,
    React.ComponentType<{ className?: string }>
  > = {
    data: Layers,
    sync: Network,
    smart: Sparkles,
    personal: UserRound,
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
        aria-label="Giá trị nền tảng công nghệ ADIGO"
        className="w-full max-w-[1440px] p-2 sm:p-2.5 rounded-[28px] lg:rounded-full border-[1.5px] border-white/90 shadow-[0_18px_42px_rgba(31,84,130,0.12),inset_0_1px_2px_rgba(255,255,255,0.8)] grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-2 lg:gap-1"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.62)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {TECHNOLOGY_CONFIG.experiences.map((exp, idx) => {
          const Icon = iconMap[exp.id];
          const isActive = activeExperience === exp.id;
          return (
            <React.Fragment key={exp.id}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectExperience(exp.id)}
                className={`relative flex-1 min-h-[56px] sm:min-h-[64px] px-3 sm:px-6 py-2.5 rounded-[20px] lg:rounded-full flex items-center justify-center gap-2.5 sm:gap-3 transition-colors duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345EAA] ${
                  isActive
                    ? 'text-[#142F63]'
                    : 'text-[#3F5770] hover:text-[#142F63]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="adigo-technology-experience-bar"
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
                  {exp.label}
                </span>
              </button>

              {idx < TECHNOLOGY_CONFIG.experiences.length - 1 && (
                <span
                  className="hidden lg:block w-1.5 h-1.5 rounded-full bg-[#4C9DC6]/65 shrink-0 mx-1"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </motion.div>
  );
};
