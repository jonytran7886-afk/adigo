import React from 'react';
import { motion } from 'motion/react';
import { ExperienceCardTheme } from '../../../config/exploreConfig';
import { GlassIcon } from './GlassIcon';

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: 'search' | 'cart' | 'shield' | 'network';
  theme: ExperienceCardTheme;
  animationDelay: number;
  visual: React.ReactNode;
}

const CARD_THEMES: Record<ExperienceCardTheme, { background: string }> = {
  discover: {
    background:
      'linear-gradient(125deg, #EDF6FF 0%, #DCEEFF 52%, #C7E5F4 100%)',
  },
  shopping: {
    background:
      'linear-gradient(125deg, #F0FAF6 0%, #DDF4E9 52%, #C8E8DC 100%)',
  },
  transparency: {
    background:
      'linear-gradient(125deg, #FAF8F3 0%, #F4F0E8 55%, #E8F3E6 100%)',
  },
  connected: {
    background:
      'linear-gradient(125deg, #EDF8FF 0%, #D7F0FB 52%, #BDE7F4 100%)',
  },
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  description,
  icon,
  theme,
  animationDelay,
  visual,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.55,
        delay: animationDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] transition-all duration-300 hover:-translate-y-1 flex flex-col lg:flex-row min-h-[340px] md:min-h-[400px] lg:min-h-[310px] xl:min-h-[330px]"
      style={{
        background: CARD_THEMES[theme].background,
        border: 'var(--experience-card-border)',
        boxShadow: 'var(--experience-card-shadow)',
      }}
    >
      {/* Subtle top-edge glass sheen on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 group-hover:opacity-100 transition-opacity"
        aria-hidden="true"
      />

      {/* Foreground Left / Top Content */}
      <div className="relative z-20 p-6 sm:p-8 lg:p-7 xl:p-9 lg:w-[48%] flex flex-col justify-center shrink-0">
        <GlassIcon icon={icon} theme={theme} />

        <h3 className="mt-4 sm:mt-5 font-display font-bold text-[#112D52] leading-[1.25] text-[clamp(1.375rem,1.9vw,1.875rem)] tracking-[-0.015em]">
          {title}
        </h3>

        <p className="mt-2.5 text-[15px] sm:text-[17px] xl:text-[18px] leading-[1.55] text-[#52677D] max-w-[32ch]">
          {description}
        </p>
      </div>

      {/* Right / Bottom Integrated Visual Zone */}
      <div className="relative z-10 flex-1 min-h-[210px] sm:min-h-[240px] lg:min-h-0 overflow-hidden lg:overflow-visible">
        {visual}
      </div>
    </motion.article>
  );
};
