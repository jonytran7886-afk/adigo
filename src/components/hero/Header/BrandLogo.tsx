import { ResponsiveImage } from '../../ResponsiveImage';
import React from 'react';
import { HERO_CONFIG } from '../../../config/heroConfig';

interface BrandLogoProps {
  className?: string;
  compact?: boolean;
  variant?: 'horizontal' | 'vertical' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  priority?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  compact = false,
  variant = 'horizontal',
  size = 'md',
  priority = false,
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

  const dimensions =
    effectiveVariant === 'icon'
      ? { width: 512, height: 512 }
      : effectiveVariant === 'vertical'
      ? { width: 2400, height: 2003 }
      : { width: 2400, height: 499 };

  const src =
    effectiveVariant === 'icon'
      ? HERO_CONFIG.brand.logos.icon
      : effectiveVariant === 'vertical'
      ? HERO_CONFIG.brand.logos.vertical
      : HERO_CONFIG.brand.logos.horizontal;

  return (
    <span className={`inline-flex items-center select-none shrink-0 ${className}`}>
      <ResponsiveImage
        src={src}
        alt="Logo ADIGO"
        width={dimensions.width}
        height={dimensions.height}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        referrerPolicy="no-referrer"
        className={`${sizeClasses} object-contain block`}
      />
    </span>
  );
};
