import React from 'react';

export const HeroBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Layer 01: Bold Consumer-Tech Sky-Cobalt -> Cyan -> Mint Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(125deg, #DCEEFF 0%, #C7E5FD 34%, #B5E0FA 60%, #C2F0E4 84%, #D8F5EC 100%)',
        }}
      />

      {/* Strong Primary Blue & Technology Cyan Spotlight behind Product Showcase */}
      <div
        className="absolute -top-28 right-[-8%] w-[880px] h-[880px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.92) 0%, rgba(76,157,198,0.36) 36%, rgba(52,94,170,0.16) 62%, transparent 80%)',
        }}
      />

      {/* Deep Navy-Blue Diagonal Architectural Depth Anchor (Lower Right) */}
      <div
        className="absolute bottom-[-18%] right-[8%] w-[680px] h-[420px] rounded-full opacity-75"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(52,94,170,0.22) 0%, rgba(57,132,65,0.14) 48%, transparent 78%)',
        }}
      />

      {/* Clean Upper-Left Luminance keeping Headline & CTAs ultra-sharp */}
      <div
        className="absolute -top-28 -left-24 w-[580px] h-[580px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.88) 0%, rgba(220,238,255,0.35) 60%, transparent 100%)',
        }}
      />

      {/* Layer 02: Precision Orbital Light Arcs & Translucent Glass Prism Planes */}
      <svg
        viewBox="0 0 1440 860"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="heroBeamMain" x1="560" y1="60" x2="1420" y2="760" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#345EAA" stopOpacity="0.14" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#4C9DC6" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="heroBeamAccent" x1="520" y1="620" x2="1360" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#345EAA" stopOpacity="0.18" />
            <stop offset="52%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#398441" stopOpacity="0.32" />
          </linearGradient>
          <linearGradient id="heroGlassPlane" x1="820" y1="0" x2="1440" y2="860" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.48" />
            <stop offset="55%" stopColor="#BAE6FD" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="heroBottomSweep" x1="0" y1="740" x2="1440" y2="620" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#C7E5FD" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.65" />
          </linearGradient>
        </defs>

        {/* Architectural diagonal translucent glass plane */}
        <path
          d="M840 -40L1480 -40L1480 760L620 860L840 -40Z"
          fill="url(#heroGlassPlane)"
          opacity="0.55"
        />

        {/* Crisp orbital light arcs behind the smartphone cluster */}
        <path
          d="M620 530C665 265 945 140 1245 250C1405 310 1445 465 1385 625"
          stroke="url(#heroBeamMain)"
          strokeWidth="3"
        />
        <path
          d="M510 675C665 405 975 255 1315 95"
          stroke="url(#heroBeamAccent)"
          strokeWidth="2.2"
        />
        <ellipse
          cx="1045"
          cy="425"
          rx="340"
          ry="215"
          transform="rotate(-14 1045 425)"
          stroke="url(#heroBeamMain)"
          strokeWidth="1.75"
          strokeOpacity="0.8"
        />

        {/* Clean architectural base sweep */}
        <path
          d="M0 772C290 712 580 768 880 738C1135 712 1300 668 1440 692V860H0V772Z"
          fill="url(#heroBottomSweep)"
        />
      </svg>
    </div>
  );
};
