import React from 'react';

export const TechnologyBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Bright High-Contrast Left Zone for Headline & Chips */}
      <div
        className="absolute -top-28 -left-24 w-[660px] h-[660px] rounded-full opacity-90"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.96) 0%, rgba(234, 245, 255, 0.65) 50%, transparent 74%)',
        }}
      />

      {/* Deep Tech Blue Atmospheric Anchor on Right Side */}
      <div
        className="absolute -top-24 -right-24 w-[720px] h-[720px] rounded-full opacity-65"
        style={{
          background:
            'radial-gradient(circle, rgba(20, 47, 99, 0.34) 0%, rgba(22, 118, 210, 0.22) 44%, transparent 74%)',
        }}
      />

      {/* Cyan-Teal Core Spotlight Behind ADIGO Core */}
      <div
        className="absolute top-[18%] right-[14%] w-[620px] h-[620px] rounded-full opacity-85"
        style={{
          background:
            'radial-gradient(circle, rgba(66, 200, 239, 0.42) 0%, rgba(22, 181, 170, 0.18) 46%, transparent 74%)',
        }}
      />

      {/* Large 3D Diagonal Architectural Glass Planes (ADIGO 'A' Inspired) */}
      <div
        className="technology-glass-plane hidden md:block top-[6%] left-[44%] w-[240px] h-[380px] -rotate-[12deg] opacity-65"
        style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
      />
      <div
        className="technology-glass-plane hidden lg:block -top-[4%] right-[7%] w-[310px] h-[440px] rotate-[10deg] opacity-60"
        style={{ backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)' }}
      />
      <div
        className="technology-glass-plane hidden lg:block bottom-[12%] right-[-4%] w-[280px] h-[280px] -rotate-[18deg] opacity-55"
        style={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
      />

      {/* Sweeping ADIGO Tech Arcs & Light Beams */}
      <svg
        viewBox="0 0 1440 780"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-90"
      >
        <defs>
          <linearGradient id="techArcPrimary" x1="28%" y1="78%" x2="96%" y2="18%">
            <stop offset="0%" stopColor="#BFDFF5" stopOpacity="0" />
            <stop offset="35%" stopColor="#1676D2" stopOpacity="0.45" />
            <stop offset="68%" stopColor="#42C8EF" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="techArcSecondary" x1="36%" y1="20%" x2="94%" y2="85%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#16B5AA" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id="techArcGreen" x1="45%" y1="90%" x2="98%" y2="42%">
            <stop offset="0%" stopColor="#398441" stopOpacity="0" />
            <stop offset="55%" stopColor="#398441" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#A4CE46" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        <path
          d="M360 590 C 520 130, 880 75, 1185 335 C 1295 430, 1375 390, 1460 220"
          stroke="url(#techArcPrimary)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M440 660 C 600 220, 920 175, 1260 440"
          stroke="url(#techArcSecondary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M540 720 C 740 480, 1040 420, 1440 470"
          stroke="url(#techArcGreen)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Smooth Bottom Transition */}
      <div
        className="absolute inset-x-0 bottom-0 h-28"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(234, 245, 255, 0.55) 65%, rgba(234, 245, 255, 0.92) 100%)',
        }}
      />
    </div>
  );
};
