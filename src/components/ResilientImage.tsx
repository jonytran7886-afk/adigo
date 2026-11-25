import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  aspectClass?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  aspectClass = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F0F6FA] to-[#E6F4F1] border border-[#E2ECF4] text-[#4A6075] p-6 text-center ${aspectClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-6 h-6 mb-2 text-[#0A74DA]/60" />
        <span className="text-xs font-medium text-[#0C1B2A]">{fallbackTitle || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
