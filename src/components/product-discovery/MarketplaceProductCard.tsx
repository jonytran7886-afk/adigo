import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShoppingCart, Sprout } from 'lucide-react';
import {
  DiscoveryProductItem,
  PRODUCT_DISCOVERY_CONFIG,
} from '../../config/productDiscoveryConfig';
import { trackProductImpression } from '../../utils/productConversionTracking';
import { useProductDiscovery } from './ProductDiscoveryModule';

const MarketplaceSingleSpotlight: React.FC<{
  product: DiscoveryProductItem;
}> = ({ product }) => {
  const { openPreorder, registerMarketplaceCard } = useProductDiscovery();
  const cardRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const trackedImpressionRef = useRef(false);

  useEffect(() => {
    if (!cardRef.current) return;
    return registerMarketplaceCard(cardRef.current);
  }, [registerMarketplaceCard]);

  useEffect(() => {
    if (!cardRef.current || typeof IntersectionObserver === 'undefined') return;
    const el = cardRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !trackedImpressionRef.current) {
            trackedImpressionRef.current = true;
            trackProductImpression({
              entryPoint: 'marketplace_product_card',
              campaignId: product.campaignId,
              productId: product.id,
            });
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [product.campaignId, product.id]);

  return (
    <article
      ref={cardRef}
      aria-label={`${product.name} – ${product.producer}`}
      className="group relative overflow-hidden rounded-[28px] sm:rounded-[34px] border-[1.5px] border-white/90 shadow-[0_24px_58px_-14px_rgba(20,47,99,0.14),0_10px_28px_-8px_rgba(57,132,65,0.10),inset_0_1px_2px_rgba(255,255,255,0.95)] backdrop-blur-xl bg-[linear-gradient(115deg,rgba(236,246,255,0.94)_0%,rgba(222,242,253,0.90)_44%,rgba(213,241,227,0.88)_100%)]"
    >
      {/* Ambient Soft Blue-Green Glass Highlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-16 w-[380px] h-[380px] rounded-full bg-white/65 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[30%] w-[340px] h-[240px] rounded-full bg-[#A4CE46]/15 blur-3xl"
      />

      {/* Luminous Glass Curve Accent */}
      <svg
        viewBox="0 0 1360 400"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute inset-0 w-full h-full z-10"
      >
        <path
          d="M0 32 C 360 8, 520 175, 420 400"
          stroke="rgba(255, 255, 255, 0.72)"
          strokeWidth="1.5"
        />
        <path
          d="M0 356 Q 280 390, 560 330"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.2"
        />
      </svg>

      {/* Full-Bleed Blended Right Visual on Desktop (60%+ overlap, fades seamlessly into left glass) */}
      <div
        aria-hidden="false"
        className="hidden lg:block absolute inset-y-0 right-0 w-[66%] z-0 pointer-events-none"
        style={{
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 14%, rgba(0,0,0,0.85) 30%, black 46%)',
          maskImage:
            'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 14%, rgba(0,0,0,0.85) 30%, black 46%)',
        }}
      >
        <picture className="block w-full h-full">
          <source type="image/webp" srcSet={product.imageWebp} />
          <img
            src={product.imageFallback}
            alt={product.imageAlt}
            width={product.imageWidth}
            height={product.imageHeight}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[58%_56%] transition-transform duration-500 ease-out group-hover:scale-[1.02] block"
          />
        </picture>
      </div>

      {/* Main 40% Left Content + Mobile Blended Visual */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center min-h-[340px] lg:min-h-[372px]">
        {/* Left 40% (5 cols on lg): Brand + Editorial Copy + Glossy Glass CTA */}
        <div className="lg:col-span-5 relative z-20 px-6 pt-7 pb-3 sm:px-10 sm:py-9 lg:py-10 lg:pl-12 lg:pr-4 flex flex-col items-start">
          {/* Official Organic Việt Nam Logo */}
          <img
            src={product.producerLogo}
            alt={product.producer}
            width={171}
            height={61}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="h-9 sm:h-10 w-auto object-contain"
          />

          {/* Product Headline */}
          <h3 className="mt-4 font-display font-extrabold text-[clamp(1.85rem,3vw,2.55rem)] tracking-[-0.025em] leading-[1.12] bg-[linear-gradient(95deg,#142F63_0%,#1F4D8B_48%,#2F7A42_100%)] bg-clip-text text-transparent">
            {product.name}
          </h3>

          {/* Primary Herbal Message */}
          <div className="mt-3.5 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#E3F5E7]/90 border border-white/90 shadow-[0_6px_16px_rgba(46,125,59,0.08)]">
            <span className="w-6 h-6 rounded-lg bg-[#398441]/15 text-[#2C7237] flex items-center justify-center shrink-0">
              <Sprout className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            <p className="text-[13px] sm:text-[14.5px] font-semibold text-[#183C2B] leading-snug">
              {product.description}
            </p>
          </div>

          {/* Secondary Storytelling Line */}
          <p className="mt-2.5 text-[14.5px] sm:text-[15.5px] italic text-[#3F5872] leading-relaxed">
            {product.secondaryDescription}
          </p>

          {/* Glossy Glass Primary CTA matching Hero */}
          <div className="mt-5 sm:mt-6">
            <button
              ref={ctaRef}
              type="button"
              onClick={() =>
                openPreorder('marketplace_product_card', ctaRef.current)
              }
              className="hero-primary-gloss group/btn inline-flex items-center justify-center gap-2.5 h-[52px] sm:h-[56px] px-7 sm:px-8 rounded-full font-display text-[15px] font-semibold text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345EAA]"
            >
              <ShoppingCart
                className="relative z-10 w-[18px] h-[18px] shrink-0"
                aria-hidden="true"
              />
              <span className="relative z-10">{product.ctaLabel}</span>
              <ArrowRight
                className="relative z-10 w-4 h-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Blended Product Visual */}
        <div
          className="lg:hidden relative w-full h-[240px] sm:h-[300px] overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.65) 18%, black 38%)',
            maskImage:
              'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.65) 18%, black 38%)',
          }}
        >
          <picture className="block w-full h-full">
            <source type="image/webp" srcSet={product.imageWebp} />
            <img
              src={product.imageFallback}
              alt={product.imageAlt}
              width={product.imageWidth}
              height={product.imageHeight}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[56%_58%] block"
            />
          </picture>
        </div>
      </div>

      {/* Subtle Inner Glass Frame Rim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_24px_rgba(255,255,255,0.45)] z-20"
      />
    </article>
  );
};

export const MarketplaceProductCard: React.FC = () => {
  const { isActive } = useProductDiscovery();
  const { products } = PRODUCT_DISCOVERY_CONFIG.marketplaceSection;

  if (!isActive || products.length === 0) return null;

  return (
    <div className="mt-10 sm:mt-12 lg:mt-14 w-full">
      <div className="space-y-6">
        {products.map((product) => (
          <MarketplaceSingleSpotlight key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
