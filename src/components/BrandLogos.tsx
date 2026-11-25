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
  return (
    <span className={`inline-flex items-center gap-2.5 select-none whitespace-nowrap shrink-0 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="adigoLogoGrad" x1="2" y1="34" x2="34" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0A74DA" />
            <stop offset="60%" stopColor="#00A896" />
            <stop offset="100%" stopColor="#16A34A" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="32" height="32" rx="9" fill="url(#adigoLogoGrad)" />
        {/* Stylized 'A' node + connecting ecosystem arc */}
        <path
          d="M18 8.5L25.5 25.5H21.9L20.3 21.7H15.7L14.1 25.5H10.5L18 8.5ZM18 14.3L16.7 18.6H19.3L18 14.3Z"
          fill="#FFFFFF"
        />
        <circle cx="26.5" cy="10.5" r="2.2" fill="#FFFFFF" fillOpacity="0.92" />
      </svg>
      {!compact && (
        <span
          className={`font-display text-[20px] font-extrabold tracking-[-0.03em] leading-none ${
            inverted ? 'text-white' : 'text-[#0B1F33]'
          }`}
        >
          ADIGO
        </span>
      )}
    </span>
  );
};

export const OrganicVietnamBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-2 text-xs text-[#4A6075] ${className}`}>
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
    </span>
  );
};
