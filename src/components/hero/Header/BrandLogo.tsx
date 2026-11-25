import React from 'react';
import { HERO_CONFIG } from '../../../config/heroConfig';

interface BrandLogoProps {
  className?: string;
  compact?: boolean;
  variant?: 'horizontal' | 'vertical' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  compact = false,
  variant = 'horizontal',
  size = 'md',
}) => {
  const effectiveVariant = compact ? 'icon' : variant;

  const sizeClasses =
    effectiveVariant === 'icon'
      ? size === 'sm'
        ? 'h-6 w-6'
        : size === 'lg'
        ? 'h-11 w-11'
        : 'h-9 w-9'
      : effectiveVariant === 'vertical'
      ? size === 'sm'
        ? 'h-10 w-auto'
        : size === 'lg'
        ? 'h-20 w-auto'
        : 'h-14 w-auto'
      : size === 'sm'
      ? 'h-[22px] w-auto'
      : size === 'lg'
      ? 'h-10 w-auto'
      : 'h-8 sm:h-[34px] w-auto';

  const src =
    effectiveVariant === 'icon'
      ? HERO_CONFIG.brand.logos.icon
      : effectiveVariant === 'vertical'
      ? HERO_CONFIG.brand.logos.vertical
      : HERO_CONFIG.brand.logos.horizontal;

  return (
    <span className={`inline-flex items-center select-none shrink-0 ${className}`}>
      <img
        src={src}
        alt="ADIGO"
        referrerPolicy="no-referrer"
        className={`${sizeClasses} object-contain block`}
      />
    </span>
  );
};
