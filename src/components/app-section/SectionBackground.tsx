import React from 'react';

export const SectionBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Layer 01: Soft light blue-tinted white canvas transitioning smoothly from Section 01 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #F5FAFD 0%, #F1F8FF 32%, #FFFFFF 70%, #F4FAFC 100%)',
        }}
      />

      {/* Layer 02: Radial soft blue glow behind center smartphone cluster */}
      <div
        className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[920px] h-[640px] rounded-full opacity-90"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(221,239,253,0.92) 0%, rgba(229,246,238,0.55) 45%, transparent 75%)',
        }}
      />

      {/* Layer 03: Soft cyan-mint aura beneath Glass Platform */}
      <div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[760px] h-[260px] rounded-full opacity-80"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(186,230,253,0.55) 0%, rgba(167,243,208,0.28) 55%, transparent 80%)',
        }}
      />

      {/* Layer 04: Translucent curved glass arcs */}
      <svg
        viewBox="0 0 1440 960"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-80"
      >
        <defs>
          <linearGradient id="appArcStroke" x1="160" y1="120" x2="1320" y2="820" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M-40 310C180 180 420 260 640 210C890 155 1160 80 1480 210"
          stroke="url(#appArcStroke)"
          strokeWidth="2.5"
        />
        <ellipse
          cx="720"
          cy="520"
          rx="360"
          ry="200"
          stroke="url(#appArcStroke)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Subtle corner foliage depth matching Section 00 & 01 */}
      <svg
        viewBox="0 0 200 160"
        fill="none"
        className="hidden sm:block absolute -bottom-6 -left-6 w-44 h-36 blur-[4px] opacity-55"
      >
        <path d="M10 148C18 88 68 42 142 36C118 98 72 138 10 148Z" fill="#65B848" />
      </svg>
      <svg
        viewBox="0 0 200 160"
        fill="none"
        className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-40 blur-[4px] opacity-55"
      >
        <path d="M188 148C180 88 130 42 56 36C80 98 126 138 188 148Z" fill="#65B848" />
      </svg>
    </div>
  );
};
