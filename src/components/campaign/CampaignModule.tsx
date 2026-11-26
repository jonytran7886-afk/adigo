import React, { useEffect, useRef, useState } from 'react';
import { CAMPAIGN_CONFIG, isCampaignActive } from '../../config/campaignConfig';
import { extractUtmMetadata } from '../../services/preorderService';
import { trackEvent } from '../../utils/analytics';
import { CampaignBanner } from './CampaignBanner';
import { PreorderModal } from './PreorderModal';

export const CampaignModule: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  const trackedBannerViewRef = useRef(false);

  const active = isCampaignActive(CAMPAIGN_CONFIG);

  useEffect(() => {
    if (!active || typeof IntersectionObserver === 'undefined') return;
    const bannerEl = document.getElementById('campaign-banner');
    if (!bannerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !trackedBannerViewRef.current) {
            trackedBannerViewRef.current = true;
            const utm = extractUtmMetadata();
            trackEvent('campaign_banner_view', {
              campaign_id: CAMPAIGN_CONFIG.campaignId,
              product_id: CAMPAIGN_CONFIG.product.id,
              utm_source: utm.utmSource || undefined,
              utm_medium: utm.utmMedium || undefined,
              utm_campaign: utm.utmCampaign || undefined,
            });
            observer.disconnect();
          }
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(bannerEl);
    return () => observer.disconnect();
  }, [active]);

  if (!active) return null;

  const handleOpenPreorder = () => {
    const utm = extractUtmMetadata();
    trackEvent('campaign_banner_click', {
      campaign_id: CAMPAIGN_CONFIG.campaignId,
      product_id: CAMPAIGN_CONFIG.product.id,
      utm_source: utm.utmSource || undefined,
      utm_medium: utm.utmMedium || undefined,
      utm_campaign: utm.utmCampaign || undefined,
    });
    trackEvent('preorder_modal_open', {
      campaign_id: CAMPAIGN_CONFIG.campaignId,
      product_id: CAMPAIGN_CONFIG.product.id,
      trigger: 'campaign_banner',
    });
    setModalOpen(true);
  };

  return (
    <>
      <CampaignBanner
        config={CAMPAIGN_CONFIG}
        ctaButtonRef={ctaButtonRef}
        onOpenPreorder={handleOpenPreorder}
      />

      <PreorderModal
        isOpen={modalOpen}
        config={CAMPAIGN_CONFIG}
        restoreFocusRef={ctaButtonRef}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
