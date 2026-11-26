import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CAMPAIGN_CONFIG, isCampaignActive } from '../../config/campaignConfig';
import {
  PRODUCT_DISCOVERY_CONFIG,
  ProductEntryPoint,
} from '../../config/productDiscoveryConfig';
import {
  trackPreorderModalOpen,
  trackProductCtaClick,
} from '../../utils/productConversionTracking';
import { PreorderModal } from '../campaign/PreorderModal';
import { FloatingProductCTA } from './FloatingProductCTA';

interface ProductDiscoveryContextValue {
  isActive: boolean;
  isModalOpen: boolean;
  isFloatingVisible: boolean;
  openPreorder: (
    entryPoint: ProductEntryPoint,
    triggerEl?: HTMLButtonElement | null
  ) => void;
  dismissFloating: () => void;
  registerHeroCard: (el: HTMLElement | null) => () => void;
  registerMarketplaceCard: (el: HTMLElement | null) => () => void;
}

const ProductDiscoveryContext = createContext<ProductDiscoveryContextValue | null>(
  null
);

export function useProductDiscovery(): ProductDiscoveryContextValue {
  const ctx = useContext(ProductDiscoveryContext);
  if (!ctx) {
    throw new Error(
      'useProductDiscovery must be used within ProductDiscoveryModule'
    );
  }
  return ctx;
}

interface ProductDiscoveryModuleProps {
  children: React.ReactNode;
  isConsentVisible?: boolean;
}

export const ProductDiscoveryModule: React.FC<ProductDiscoveryModuleProps> = ({
  children,
  isConsentVisible = false,
}) => {
  const isActive = isCampaignActive(CAMPAIGN_CONFIG);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeEntryPoint, setActiveEntryPoint] = useState<ProductEntryPoint>(
    'hero_featured_product'
  );
  const [hasSubmittedSuccess, setHasSubmittedSuccess] = useState(false);
  const [isFloatingDismissed, setIsFloatingDismissed] = useState(false);

  const [hasPassedHero, setHasPassedHero] = useState(false);
  const [isHeroCardVisible, setIsHeroCardVisible] = useState(false);
  const [isMarketplaceCardVisible, setIsMarketplaceCardVisible] = useState(false);

  const restoreFocusRef = useRef<HTMLButtonElement | null>(null);
  const heroElementsRef = useRef<Set<HTMLElement>>(new Set());
  const marketplaceElementsRef = useRef<Set<HTMLElement>>(new Set());
  const visibilityMapRef = useRef<WeakMap<Element, boolean>>(new WeakMap());

  const recomputeElementVisibility = useCallback(
    (
      setRef: React.MutableRefObject<Set<HTMLElement>>,
      setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      let anyVisible = false;
      setRef.current.forEach((el) => {
        if (el.offsetParent !== null && visibilityMapRef.current.get(el)) {
          anyVisible = true;
        }
      });
      setter(anyVisible);
    },
    []
  );

  // Observe Hero section (#top) to detect when user has scrolled past Hero
  useEffect(() => {
    if (!isActive || typeof IntersectionObserver === 'undefined') return;
    const heroEl = document.getElementById('top');
    if (!heroEl) return;

    const updateFromHeroRect = () => {
      const rect = heroEl.getBoundingClientRect();
      setHasPassedHero(rect.bottom <= 80);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasPassedHero(false);
          } else {
            setHasPassedHero(entry.boundingClientRect.top < 0);
          }
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(heroEl);
    window.addEventListener('scroll', updateFromHeroRect, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateFromHeroRect);
    };
  }, [isActive]);

  const registerObserverElement = useCallback(
    (
      el: HTMLElement | null,
      setRef: React.MutableRefObject<Set<HTMLElement>>,
      setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      if (!el || typeof IntersectionObserver === 'undefined') {
        return () => {};
      }
      setRef.current.add(el);

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            visibilityMapRef.current.set(entry.target, entry.isIntersecting);
          }
          recomputeElementVisibility(setRef, setter);
        },
        { threshold: 0.1 }
      );

      observer.observe(el);

      return () => {
        observer.disconnect();
        setRef.current.delete(el);
        visibilityMapRef.current.delete(el);
        recomputeElementVisibility(setRef, setter);
      };
    },
    [recomputeElementVisibility]
  );

  const registerHeroCard = useCallback(
    (el: HTMLElement | null) =>
      registerObserverElement(el, heroElementsRef, setIsHeroCardVisible),
    [registerObserverElement]
  );

  const registerMarketplaceCard = useCallback(
    (el: HTMLElement | null) =>
      registerObserverElement(
        el,
        marketplaceElementsRef,
        setIsMarketplaceCardVisible
      ),
    [registerObserverElement]
  );

  const openPreorder = useCallback(
    (
      entryPoint: ProductEntryPoint,
      triggerEl?: HTMLButtonElement | null
    ) => {
      if (triggerEl) {
        restoreFocusRef.current = triggerEl;
      }
      setActiveEntryPoint(entryPoint);

      trackProductCtaClick({
        entryPoint,
        campaignId: PRODUCT_DISCOVERY_CONFIG.campaignId,
        productId: PRODUCT_DISCOVERY_CONFIG.productId,
      });
      trackPreorderModalOpen({
        entryPoint,
        campaignId: PRODUCT_DISCOVERY_CONFIG.campaignId,
        productId: PRODUCT_DISCOVERY_CONFIG.productId,
      });

      setIsModalOpen(true);
    },
    []
  );

  const dismissFloating = useCallback(() => {
    setIsFloatingDismissed(true);
  }, []);

  const isFloatingVisible =
    isActive &&
    hasPassedHero &&
    !isHeroCardVisible &&
    !isMarketplaceCardVisible &&
    !isModalOpen &&
    !hasSubmittedSuccess &&
    !isFloatingDismissed &&
    !isConsentVisible;

  const value = useMemo<ProductDiscoveryContextValue>(
    () => ({
      isActive,
      isModalOpen,
      isFloatingVisible,
      openPreorder,
      dismissFloating,
      registerHeroCard,
      registerMarketplaceCard,
    }),
    [
      isActive,
      isModalOpen,
      isFloatingVisible,
      openPreorder,
      dismissFloating,
      registerHeroCard,
      registerMarketplaceCard,
    ]
  );

  return (
    <ProductDiscoveryContext.Provider value={value}>
      {children}

      {isActive && (
        <>
          <FloatingProductCTA />

          <PreorderModal
            isOpen={isModalOpen}
            entryPoint={activeEntryPoint}
            config={CAMPAIGN_CONFIG}
            restoreFocusRef={restoreFocusRef}
            onClose={() => setIsModalOpen(false)}
            onSuccessSubmitted={() => setHasSubmittedSuccess(true)}
          />
        </>
      )}
    </ProductDiscoveryContext.Provider>
  );
};
