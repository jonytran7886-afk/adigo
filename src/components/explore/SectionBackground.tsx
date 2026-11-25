import React from 'react';

export const SectionBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Bold geometric glass prism planes & crisp light arcs transitioning from Hero */}
      <svg
        viewBox="0 0 1440 960"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="exploreArcStrong" x1="120" y1="60" x2="1360" y2="880" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#345EAA" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#4C9DC6" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="exploreGlassBand" x1="0" y1="0" x2="1440" y2="960" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.36" />
            <stop offset="60%" stopColor="#BAE6FD" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.28" />
          </linearGradient>
        </defs>

        {/* Diagonal architectural glass plane */}
        <path
          d="M-80 180L640 -40L940 960L-80 960V180Z"
          fill="url(#exploreGlassBand)"
          opacity="0.5"
        />

        {/* Crisp sweeping light arcs */}
        <path
          d="M-60 220C220 70 540 115 760 250C980 385 1240 235 1500 110"
          stroke="url(#exploreArcStrong)"
          strokeWidth="2.5"
        />
        <path
          d="M900 940C1040 680 1240 550 1500 480"
          stroke="url(#exploreArcStrong)"
          strokeWidth="2.5"
        />
        <path
          d="M-40 760C280 680 560 720 860 850"
          stroke="url(#exploreArcStrong)"
          strokeWidth="1.75"
          strokeOpacity="0.7"
        />
      </svg>
    </div>
  );
};
