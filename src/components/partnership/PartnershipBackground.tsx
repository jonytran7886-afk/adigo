import React from 'react';

export const PartnershipBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Left Bright Spotlight for Crisp Headline Legibility */}
      <div
        className="absolute -top-24 -left-24 w-[580px] h-[580px] rounded-full opacity-75"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.92) 0%, rgba(234, 244, 255, 0.42) 55%, transparent 74%)',
        }}
      />

      {/* Right Technology Blue Glow Behind Partner Showcase */}
      <div
        className="absolute top-[6%] right-[8%] w-[640px] h-[540px] rounded-full opacity-65"
        style={{
          background:
            'radial-gradient(circle, rgba(97, 177, 238, 0.34) 0%, rgba(76, 157, 198, 0.14) 50%, transparent 74%)',
        }}
      />

      {/* Large Architectural Glass Geometry Blocks */}
      <div
        className="technology-glass-plane hidden md:block top-[6%] left-[48%] w-[200px] h-[280px] opacity-55"
        style={{ backdropFilter: 'blur(12px)' }}
      />
      <div
        className="technology-glass-plane hidden lg:block top-[4%] right-[3%] w-[250px] h-[340px] rotate-6 opacity-45"
        style={{ backdropFilter: 'blur(14px)' }}
      />

      {/* Subtle Orbital Connection Arc */}
      <svg
        viewBox="0 0 1440 680"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 w-full h-[680px] opacity-75"
      >
        <defs>
          <linearGradient id="partnerArcGrad" x1="25%" y1="65%" x2="96%" y2="25%">
            <stop offset="0%" stopColor="#BFDFF5" stopOpacity="0" />
            <stop offset="40%" stopColor="#61B1EE" stopOpacity="0.45" />
            <stop offset="75%" stopColor="#63DAB7" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <path
          d="M320 470 C 520 110, 920 80, 1280 280"
          stroke="url(#partnerArcGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
