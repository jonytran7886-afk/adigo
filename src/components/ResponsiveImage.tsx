import React from 'react';

// Originals remain available as a fallback; the browser selects a variant by
// display size and pixel density. Variants are generated before dev/build.
export function ResponsiveImage({ src, srcSet, sizes, ...props }: React.ComponentProps<'img'>) {
  const isPhoto = typeof src === 'string' && src.startsWith('/src/assets/images/') && src.endsWith('.webp');
  const isLogo = typeof src === 'string' && (
    src.startsWith('/assets/aistudio/ADIGO_') || src === '/assets/organic-vietnam-logo.png'
  );
  if (!src || (!isPhoto && !isLogo) || srcSet) {
    return <img src={src} srcSet={srcSet} sizes={sizes} {...props} />;
  }
  const stem = src.slice(src.lastIndexOf('/') + 1).replace(/\.[^.]+$/, '');
  const responsiveSet = [160, 320, 640, 960].map(width =>
    `/assets/responsive/${stem}-${width}.webp ${width}w`
  ).join(', ');
  const width = Number(props.width);
  const displaySize = isLogo
    ? (stem.includes('Ngang') ? '192px' : '64px')
    : width > 0 && width <= 480 ? `${width}px` : '(max-width: 767px) 90vw, 640px';
  return (
    <img
      src={src}
      srcSet={responsiveSet}
      sizes={sizes || displaySize}
      {...props}
    />
  );
}
