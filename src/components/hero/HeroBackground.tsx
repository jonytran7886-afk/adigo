import React from 'react';

export const HeroBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Layer 01: Multi-stop Soft Blue -> Technology Cyan -> Soft Mint Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(125deg, #EAF5FF 0%, #D9EEFC 38%, #CBEBFA 62%, #D9F5EC 84%, #E8F8F0 100%)',
        }}
      />

      {/* Luminous Radial Glow behind Right Product Showcase */}
      <div
        className="absolute -top-24 right-[-6%] w-[780px] h-[780px] rounded-full opacity-85"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.88) 0%, rgba(186,230,253,0.45) 42%, rgba(167,243,208,0.18) 70%, transparent 100%)',
        }}
      />

      {/* Soft Upper-Left Ambient Highlight */}
      <div
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.92) 0%, rgba(234,245,255,0.3) 65%, transparent 100%)',
        }}
      />

      {/* Layer 02: Sweeping Luminous Light Curves & Abstract Glass Shapes */}
      <svg
        viewBox="0 0 1440 860"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-90"
      >
        <defs>
          <linearGradient id="arcStroke1" x1="650" y1="120" x2="1420" y2="700" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="arcStroke2" x1="580" y1="540" x2="1320" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="52%" stopColor="#FFFFFF" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#A4CE46" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="glassRibbon" x1="0" y1="740" x2="1440" y2="620" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Orbital light curves behind the smartphone showcase */}
        <path
          d="M640 520C680 280 940 160 1220 260C1380 318 1430 460 1370 610"
          stroke="url(#arcStroke1)"
          strokeWidth="2.5"
        />
        <path
          d="M540 660C680 410 980 270 1290 120"
          stroke="url(#arcStroke2)"
          strokeWidth="2"
        />
        <ellipse
          cx="1040"
          cy="430"
          rx="320"
          ry="210"
          transform="rotate(-14 1040 430)"
          stroke="url(#arcStroke1)"
          strokeWidth="1.5"
          strokeOpacity="0.65"
        />

        {/* Soft bottom architectural wave */}
        <path
          d="M0 770C280 715 560 765 860 740C1120 718 1290 675 1440 695V860H0V770Z"
          fill="url(#glassRibbon)"
        />
      </svg>

      {/* Subtle Blurred Leaf Foreground Depth at Bottom Corners Only */}
      <svg
        viewBox="0 0 220 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden sm:block absolute -bottom-6 -left-6 w-48 h-40 blur-[4px] opacity-60"
      >
        <path
          d="M12 168C16 98 68 48 148 38C124 108 76 154 12 168Z"
          fill="#65B848"
        />
        <path
          d="M42 174C68 122 122 92 186 98C152 146 102 172 42 174Z"
          fill="#398441"
          fillOpacity="0.7"
        />
      </svg>

      <svg
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden sm:block absolute -bottom-8 -right-6 w-56 h-48 blur-[4px] opacity-65"
      >
        <path
          d="M222 180C214 102 156 46 66 36C96 112 152 164 222 180Z"
          fill="#5DB546"
        />
        <path
          d="M196 188C164 134 106 104 38 112C76 162 132 186 196 188Z"
          fill="#398441"
          fillOpacity="0.65"
        />
      </svg>
    </div>
  );
};
