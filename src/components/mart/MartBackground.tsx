import React from 'react';

export const MartBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Layer 1: Soft Left-to-Right Technology Radial Lighting */}
      <div
        className="absolute -top-28 left-[-10%] w-[560px] h-[560px] rounded-full opacity-55"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.85) 0%, rgba(240, 247, 255, 0.25) 55%, transparent 72%)',
        }}
      />
      <div
        className="absolute top-[12%] right-[12%] w-[640px] h-[640px] rounded-full opacity-65"
        style={{
          background:
            'radial-gradient(circle, rgba(76, 157, 198, 0.28) 0%, rgba(169, 217, 241, 0.14) 50%, transparent 74%)',
        }}
      />

      {/* Layer 2: Large Architectural Glass Geometry Behind Storefront */}
      <div
        className="mart-glass-geometry hidden md:block top-[6%] left-[44%] w-[210px] h-[340px] opacity-65"
        style={{ backdropFilter: 'blur(14px)' }}
      />
      <div
        className="mart-glass-geometry hidden md:block top-[11%] left-[56%] w-[160px] h-[250px] opacity-50"
        style={{ backdropFilter: 'blur(10px)' }}
      />
      <div
        className="mart-glass-geometry hidden lg:block top-[18%] right-[4%] w-[240px] h-[320px] -rotate-6 opacity-40"
        style={{ backdropFilter: 'blur(12px)' }}
      />

      {/* Layer 3: Subtle Connection Light Trails (Inspired by ADIGO 'A' Arc) */}
      <svg
        viewBox="0 0 1440 760"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-75"
      >
        <defs>
          <linearGradient id="martTrailPrimary" x1="25%" y1="75%" x2="96%" y2="22%">
            <stop offset="0%" stopColor="#A9D9F1" stopOpacity="0" />
            <stop offset="35%" stopColor="#61B1EE" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#63DAB7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#A4CE46" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id="martTrailSecondary" x1="35%" y1="30%" x2="88%" y2="80%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#61B1EE" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Orbital Connection Curve Linking Smartphone & Storefront */}
        <path
          d="M390 540 C 485 130, 820 95, 1080 355 C 1210 485, 1340 440, 1450 250"
          stroke="url(#martTrailPrimary)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M440 590 C 560 220, 840 185, 1140 415"
          stroke="url(#martTrailSecondary)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>

      {/* Layer 5: Soft Bottom Wave Transition to Next Section */}
      <div
        className="absolute inset-x-0 bottom-0 h-28"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(234, 245, 255, 0.55) 65%, rgba(234, 245, 255, 0.9) 100%)',
        }}
      />
    </div>
  );
};
