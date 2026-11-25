import React from 'react';

export const GlassPlatform: React.FC = () => {
  return (
    <div
      className="pointer-events-none relative w-[330px] sm:w-[540px] lg:w-[640px] h-[72px] sm:h-[96px] -mt-10 sm:-mt-12 mx-auto select-none"
      aria-hidden="true"
    >
      {/* Diffused soft shadow underneath platform */}
      <div
        className="absolute inset-x-8 -bottom-3 h-10 rounded-full blur-xl opacity-45"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(20, 47, 99, 0.25) 0%, rgba(76, 157, 198, 0.14) 55%, transparent 100%)',
        }}
      />

      {/* Lower translucent glass cylinder rim / thickness */}
      <div
        className="absolute inset-x-2 top-3 bottom-1 rounded-[50%] border border-white/70"
        style={{
          background:
            'linear-gradient(180deg, rgba(203, 235, 250, 0.55) 0%, rgba(165, 243, 252, 0.35) 60%, rgba(255, 255, 255, 0.72) 100%)',
          boxShadow:
            '0 14px 30px rgba(31, 84, 130, 0.12), inset 0 -2px 6px rgba(76, 157, 198, 0.25)',
        }}
      />

      {/* Upper glass elliptical surface */}
      <div
        className="absolute inset-x-0 top-0 bottom-3.5 rounded-[50%] border border-white/90"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(224, 242, 254, 0.42) 48%, rgba(209, 250, 229, 0.45) 100%)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          boxShadow:
            'inset 0 2px 6px rgba(255, 255, 255, 0.9), 0 4px 16px rgba(76, 157, 198, 0.14)',
        }}
      />

      {/* Subtle specular sheen arc */}
      <div
        className="absolute left-[14%] right-[14%] top-[6px] h-4 rounded-[50%] opacity-75"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 50%, transparent 100%)',
        }}
      />
    </div>
  );
};
