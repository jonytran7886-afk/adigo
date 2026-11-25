import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MainPhoneMockup } from './MainPhoneMockup';
import { DiscoverPhoneMockup } from './DiscoverPhoneMockup';
import { TraceabilityPhoneMockup } from './TraceabilityPhoneMockup';
import { GlassPlatform } from './GlassPlatform';
import { FloatingGlassElements } from './FloatingGlassElements';

interface ProductShowcaseProps {
  onExploreTap?: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onExploreTap,
}) => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const nx = (e.clientX / window.innerWidth - 0.5) * 10;
      const ny = (e.clientY / window.innerHeight - 0.5) * 8;
      setParallax({ x: nx, y: ny });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full max-w-[740px] mx-auto pt-4 pb-6 flex flex-col items-center">
      {/* Floating pure-icon glass accents */}
      <FloatingGlassElements />

      {/* 3-Phone Mockup Stage */}
      <div
        className="relative w-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${parallax.x * 0.6}px, ${parallax.y * 0.6}px, 0)`,
        }}
      >
        {/* Left Background Phone: Khám phá */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 28, rotate: 0 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: -7 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 -mr-[164px] sm:-mr-[128px] lg:-mr-[112px] translate-y-6 scale-[0.72] sm:scale-[0.86] lg:scale-[0.9] origin-bottom-right"
        >
          <DiscoverPhoneMockup />
        </motion.div>

        {/* Center Foreground Main Phone: ADIGO App Home */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 scale-[0.9] sm:scale-[0.96] lg:scale-100"
          style={{
            transform: `translate3d(${parallax.x * 0.35}px, ${parallax.y * 0.35}px, 0)`,
          }}
        >
          <MainPhoneMockup onExploreTap={onExploreTap} />
        </motion.div>

        {/* Right Background Phone: Nguồn gốc sản phẩm */}
        <motion.div
          initial={{ opacity: 0, x: -40, y: 28, rotate: 0 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 7 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 -ml-[164px] sm:-ml-[128px] lg:-ml-[112px] translate-y-6 scale-[0.72] sm:scale-[0.86] lg:scale-[0.9] origin-bottom-left"
        >
          <TraceabilityPhoneMockup />
        </motion.div>
      </div>

      {/* Elliptical Glass Pedestal */}
      <div className="relative z-10 w-full flex justify-center">
        <GlassPlatform />
      </div>
    </div>
  );
};
