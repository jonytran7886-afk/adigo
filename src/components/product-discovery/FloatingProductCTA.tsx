import { ResponsiveImage } from '../ResponsiveImage';
import React, { useEffect, useRef } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { PRODUCT_DISCOVERY_CONFIG } from '../../config/productDiscoveryConfig';
import { trackProductImpression } from '../../utils/productConversionTracking';
import { useProductDiscovery } from './ProductDiscoveryModule';

export const FloatingProductCTA: React.FC = () => {
  const { isFloatingVisible, openPreorder, dismissFloating } =
    useProductDiscovery();
  const ctaRef = useRef<HTMLButtonElement>(null);
  const trackedImpressionRef = useRef(false);

  const { floatingCta, productImage, campaignId, productId } =
    PRODUCT_DISCOVERY_CONFIG;

  useEffect(() => {
    if (isFloatingVisible && !trackedImpressionRef.current) {
      trackedImpressionRef.current = true;
      trackProductImpression({
        entryPoint: floatingCta.entryPoint,
        campaignId,
        productId,
      });
    }
  }, [isFloatingVisible, floatingCta.entryPoint, campaignId, productId]);

  if (!isFloatingVisible) return null;

  return (
    <aside
      aria-label="Đặt trước sản phẩm"
      className="fixed bottom-3 left-3 right-3 sm:left-auto sm:bottom-5 sm:right-5 z-30 sm:w-auto sm:max-w-[460px]"
    >
      <div className="flex items-center justify-between gap-2 sm:gap-3.5 px-2.5 py-2 sm:p-3 rounded-[18px] sm:rounded-[20px] bg-white/94 backdrop-blur-xl border border-white shadow-[0_16px_40px_rgba(20,47,99,0.16),inset_0_1px_1px_rgba(255,255,255,0.9)]">
        {/* Product Thumbnail + Name */}
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <div className="w-10 h-9 sm:w-13 sm:h-11 rounded-[10px] sm:rounded-[12px] overflow-hidden bg-[#F7FAFC] border border-[#E6F0F8] shrink-0">
            <picture className="block w-full h-full">
              <source type="image/webp" srcSet={productImage.webp} />
              <ResponsiveImage
                src={productImage.fallback}
                alt={productImage.alt}
                width={productImage.width}
                height={productImage.height}
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center block"
              />
            </picture>
          </div>

          <div className="min-w-0">
            <p className="font-display font-bold text-[12.5px] sm:text-sm text-[#112D52] whitespace-nowrap leading-tight">
              {floatingCta.title}
            </p>
            <p className="text-[10.5px] sm:text-[11.5px] text-[#52677D] whitespace-nowrap mt-0.5">
              {floatingCta.subtitle}
            </p>
          </div>
        </div>

        {/* Action + Close */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <button
            ref={ctaRef}
            type="button"
            onClick={() => openPreorder(floatingCta.entryPoint, ctaRef.current)}
            className="group inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-full bg-[#398441] hover:bg-[#2C6C34] text-white text-[11px] sm:text-xs font-semibold shadow-[0_6px_16px_rgba(57,132,65,0.26)] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#398441]"
          >
            <span>{floatingCta.ctaLabel}</span>
            <ArrowRight
              className="hidden sm:block w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={dismissFloating}
            aria-label={floatingCta.closeLabel}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full hover:bg-[#EAF5FF] text-[#52677D] hover:text-[#112D52] flex items-center justify-center transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345EAA]"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
};
