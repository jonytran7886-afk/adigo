import { ProductEntryPoint } from '../config/productDiscoveryConfig';
import { extractUtmMetadata } from '../services/preorderService';
import { trackEvent } from './analytics';

interface TrackingBaseParams {
  entryPoint: ProductEntryPoint;
  campaignId: string;
  productId: string;
}

export function trackProductImpression({
  entryPoint,
  campaignId,
  productId,
}: TrackingBaseParams): void {
  const utm = extractUtmMetadata();
  trackEvent('product_impression', {
    entry_point: entryPoint,
    campaign_id: campaignId,
    product_id: productId,
    utm_source: utm.utmSource || undefined,
    utm_medium: utm.utmMedium || undefined,
    utm_campaign: utm.utmCampaign || undefined,
  });
}

export function trackProductCtaClick({
  entryPoint,
  campaignId,
  productId,
}: TrackingBaseParams): void {
  const utm = extractUtmMetadata();
  trackEvent('product_cta_click', {
    entry_point: entryPoint,
    campaign_id: campaignId,
    product_id: productId,
    utm_source: utm.utmSource || undefined,
    utm_medium: utm.utmMedium || undefined,
    utm_campaign: utm.utmCampaign || undefined,
  });
}

export function trackPreorderModalOpen({
  entryPoint,
  campaignId,
  productId,
}: TrackingBaseParams): void {
  trackEvent('preorder_modal_open', {
    entry_point: entryPoint,
    campaign_id: campaignId,
    product_id: productId,
    trigger: entryPoint,
  });
}
