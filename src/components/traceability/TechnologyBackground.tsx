import React from 'react';

export const TechnologyBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Left Bright Spotlight for Crisp Copy Contrast */}
      <div
        className="absolute -top-24 -left-24 w-[560px] h-[560px] rounded-full opacity-60"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(234, 244, 255, 0.35) 55%, transparent 74%)',
        }}
      />

      {/* Right Cyan/Blue Radial Glow Behind Smartphone & Journey Frame */}
      <div
        className="absolute top-[10%] right-[14%] w-[620px] h-[620px] rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(76, 157, 198, 0.30) 0%, rgba(191, 223, 245, 0.16) 52%, transparent 75%)',
        }}
      />

      {/* Large Architectural Glass Geometry Blocks */}
      <div
        className="traceability-glass-shape hidden md:block top-[8%] left-[47%] w-[180px] h-[300px] opacity-60"
        style={{ backdropFilter: 'blur(12px)' }}
      />
      <div
        className="traceability-glass-shape hidden lg:block top-[4%] right-[4%] w-[260px] h-[350px] rotate-6 opacity-50"
        style={{ backdropFilter: 'blur(14px)' }}
      />
      <div
        className="traceability-glass-shape hidden lg:block bottom-[18%] right-[-4%] w-[280px] h-[190px] -rotate-12 opacity-45"
        style={{ backdropFilter: 'blur(12px)' }}
      />

      {/* Technological Connection Light Trails */}
      <svg
        viewBox="0 0 1440 760"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-80"
      >
        <defs>
          <linearGradient id="traceTrailA" x1="25%" y1="75%" x2="96%" y2="18%">
            <stop offset="0%" stopColor="#BFDFF5" stopOpacity="0" />
            <stop offset="35%" stopColor="#4C9DC6" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#63DAB7" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="traceTrailB" x1="32%" y1="25%" x2="90%" y2="82%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#4C9DC6" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M360 540 C 500 130, 860 95, 1140 330 C 1270 440, 1360 400, 1450 220"
          stroke="url(#traceTrailA)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M420 620 C 560 210, 880 185, 1210 420"
          stroke="url(#traceTrailB)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>

      {/* Soft Bottom Section Transition */}
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
