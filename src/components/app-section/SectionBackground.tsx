import React from 'react';

export const SectionBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Layer 01: Deep Ice-Blue to Crisp Mint-Blue Tech Canvas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #E6F5FA 0%, #D9EEFC 36%, #EAF5FF 72%, #DFF4EE 100%)',
        }}
      />

      {/* Layer 02: Strong Radial Cobalt-Cyan Spotlight behind Center Smartphone Cluster */}
      <div
        className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[1040px] h-[700px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.92) 0%, rgba(76,157,198,0.34) 38%, rgba(52,94,170,0.16) 64%, transparent 82%)',
        }}
      />

      {/* Layer 03: Rich Cyan-Emerald Aura beneath Glass Platform */}
      <div
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[840px] h-[280px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(76,157,198,0.32) 0%, rgba(57,132,65,0.14) 48%, transparent 78%)',
        }}
      />

      {/* Layer 04: Precision Concentric Orbital Rings & Diagonal Glass Planes (Zero Leaves) */}
      <svg
        viewBox="0 0 1440 960"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="appArcStrong" x1="120" y1="120" x2="1340" y2="840" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#345EAA" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#398441" stopOpacity="0.28" />
          </linearGradient>
          <linearGradient id="appGlassFacet" x1="200" y1="0" x2="1240" y2="960" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.42" />
            <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.32" />
          </linearGradient>
        </defs>

        {/* Subtle geometric glass facet */}
        <path
          d="M420 0L1440 0L1440 520L880 960L240 960L420 0Z"
          fill="url(#appGlassFacet)"
          opacity="0.45"
        />

        {/* Bold orbital sweeps framing the 3 smartphones */}
        <path
          d="M-60 300C180 155 440 250 675 190C915 130 1190 55 1500 205"
          stroke="url(#appArcStrong)"
          strokeWidth="2.75"
        />
        <ellipse
          cx="720"
          cy="525"
          rx="410"
          ry="225"
          stroke="url(#appArcStrong)"
          strokeWidth="1.75"
        />
        <ellipse
          cx="720"
          cy="525"
          rx="540"
          ry="290"
          stroke="url(#appArcStrong)"
          strokeWidth="1.25"
          strokeOpacity="0.6"
        />
      </svg>
    </div>
  );
};
