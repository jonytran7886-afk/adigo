import React from 'react';

export const TechnologyBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Left Bright Field for Crisp Text Legibility */}
      <div
        className="absolute -top-24 -left-24 w-[580px] h-[580px] rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.92) 0%, rgba(234, 244, 255, 0.4) 55%, transparent 74%)',
        }}
      />

      {/* Strong Technology Radial Spotlight Behind ADIGO Core */}
      <div
        className="absolute top-[16%] right-[12%] w-[640px] h-[640px] rounded-full opacity-80"
        style={{
          background:
            'radial-gradient(circle, rgba(76, 157, 198, 0.36) 0%, rgba(52, 94, 170, 0.14) 48%, transparent 74%)',
        }}
      />

      {/* Large 3D Architectural Glass Planes */}
      <div
        className="technology-glass-plane hidden md:block top-[5%] left-[47%] w-[180px] h-[290px] opacity-60"
        style={{ backdropFilter: 'blur(14px)' }}
      />
      <div
        className="technology-glass-plane hidden lg:block top-[3%] right-[6%] w-[260px] h-[360px] rotate-6 opacity-50"
        style={{ backdropFilter: 'blur(16px)' }}
      />
      <div
        className="technology-glass-plane hidden lg:block bottom-[16%] right-[-3%] w-[240px] h-[220px] -rotate-12 opacity-45"
        style={{ backdropFilter: 'blur(12px)' }}
      />

      {/* Soft Converging Light Arcs */}
      <svg
        viewBox="0 0 1440 760"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-80"
      >
        <defs>
          <linearGradient id="techArc1" x1="25%" y1="75%" x2="95%" y2="20%">
            <stop offset="0%" stopColor="#BFDFF5" stopOpacity="0" />
            <stop offset="38%" stopColor="#4C9DC6" stopOpacity="0.48" />
            <stop offset="72%" stopColor="#63DAB7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="techArc2" x1="35%" y1="22%" x2="92%" y2="85%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#4C9DC6" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M340 560 C 510 120, 880 75, 1180 340 C 1290 440, 1370 400, 1450 230"
          stroke="url(#techArc1)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M420 630 C 590 210, 910 175, 1240 430"
          stroke="url(#techArc2)"
          strokeWidth="1.75"
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
