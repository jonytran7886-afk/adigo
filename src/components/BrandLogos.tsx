import React from 'react';

interface LogoProps {
  className?: string;
  compact?: boolean;
  inverted?: boolean;
}

export const AdigoLogo: React.FC<LogoProps> = ({
  className = '',
  compact = false,
  inverted = false,
}) => {
  const src = compact
    ? '/assets/aistudio/ADIGO_Icon_Nen_Trang_512_4639cde4.png'
    : '/assets/aistudio/ADIGO_Ngang_2400px_872a9a4e.png';

  return (
    <span
      className={`inline-flex items-center select-none shrink-0 ${
        inverted ? 'bg-white/95 px-2.5 py-1.5 rounded-xl' : ''
      } ${className}`}
    >
      <img
        src={src}
        alt="ADIGO"
        referrerPolicy="no-referrer"
        className={compact ? 'h-8 w-8 object-contain' : 'h-8 w-auto object-contain'}
      />
    </span>
  );
};

export const OrganicVietnamBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <a
      href="https://organicvn.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-xs text-[#4A6075] hover:text-[#0A74DA] transition-colors ${className}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="12" cy="12" r="10.5" stroke="#16A34A" strokeWidth="1.5" fill="#F0FDF4" />
        <path
          d="M7.5 14.5C7.5 10.5 11.5 7.5 16.5 7.5C16.5 12.5 13.5 16.5 9.5 16.5C8.5 16.5 7.8 15.8 7.5 14.5Z"
          fill="#16A34A"
          fillOpacity="0.85"
        />
        <path
          d="M8 16.5C10 14 12.5 11.5 15.5 9"
          stroke="#FFFFFF"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-medium text-[#0C1B2A]">Organic Việt Nam</span>
    </a>
  );
};
