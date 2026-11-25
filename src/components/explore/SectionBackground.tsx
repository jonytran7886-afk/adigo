import React from 'react';

export const SectionBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Subtle curved light bands transitioning softly from Section 00 */}
      <svg
        viewBox="0 0 1440 960"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-75"
      >
        <defs>
          <linearGradient id="exploreArc1" x1="180" y1="60" x2="1280" y2="860" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="55%" stopColor="#BAE6FD" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M-60 220C220 80 540 120 760 250C980 380 1240 240 1500 120"
          stroke="url(#exploreArc1)"
          strokeWidth="2"
        />
        <path
          d="M960 920C1080 680 1260 560 1500 500"
          stroke="url(#exploreArc1)"
          strokeWidth="2"
        />
      </svg>

      {/* Soft blurred leaf depth at far lower left corner */}
      <svg
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden sm:block absolute -bottom-8 -left-8 w-44 h-36 blur-[5px] opacity-45"
      >
        <path
          d="M10 148C18 88 68 42 142 36C118 98 72 138 10 148Z"
          fill="#65B848"
        />
      </svg>
    </div>
  );
};
