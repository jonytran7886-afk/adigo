import React from 'react';

export const MarketplaceBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Layer 02: Geometric Glass Shapes (Zero flowers, zero leaves — pure consumer-tech geometry) */}
      {/* Top-left stacked angled glass planes */}
      <div
        className="marketplace-glass-shape hidden sm:block -top-20 -left-24 w-[380px] h-[240px] -rotate-[32deg] opacity-80"
      />
      <div
        className="marketplace-glass-shape hidden lg:block top-24 -left-16 w-[260px] h-[160px] -rotate-[32deg] opacity-65"
      />

      {/* Top-right angled glass planes */}
      <div
        className="marketplace-glass-shape hidden sm:block -top-16 -right-20 w-[400px] h-[230px] rotate-[28deg] opacity-75"
      />
      <div
        className="marketplace-glass-shape hidden lg:block top-40 right-6 w-[180px] h-[120px] rotate-[28deg] opacity-55"
      />

      {/* Layer 04: Soft Radial Glow behind Tablet & Smartphone Showcase */}
      <div
        className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[980px] h-[620px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.86) 0%, rgba(119,193,240,0.28) 42%, rgba(52,94,170,0.12) 68%, transparent 85%)',
        }}
      />

      {/* Layer 03: Technology Light Trails inspired by ADIGO 'A' dynamic arc */}
      <svg
        viewBox="0 0 1440 940"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="mpTrailCyan" x1="120" y1="80" x2="1360" y2="820" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#345EAA" stopOpacity="0.16" />
            <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#4C9DC6" stopOpacity="0.38" />
          </linearGradient>
          <linearGradient id="mpTrailMint" x1="80" y1="780" x2="1380" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4C9DC6" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#398441" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        <path
          d="M-60 280C210 135 510 210 740 165C985 118 1220 45 1500 185"
          stroke="url(#mpTrailCyan)"
          strokeWidth="2.5"
        />
        <path
          d="M-40 690C250 560 560 510 860 555C1140 596 1320 470 1500 340"
          stroke="url(#mpTrailMint)"
          strokeWidth="2"
        />
        <ellipse
          cx="730"
          cy="500"
          rx="450"
          ry="245"
          stroke="url(#mpTrailCyan)"
          strokeWidth="1.5"
          strokeOpacity="0.7"
        />
      </svg>
    </div>
  );
};
