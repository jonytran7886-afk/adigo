import { SEO_CONFIG } from '../config/seoConfig';

export type ConsentStatus = 'unset' | 'granted' | 'denied';

export type AdigoAnalyticsEvent =
  | 'explore_adigo_click'
  | 'app_section_view'
  | 'app_feature_select'
  | 'marketplace_tab_select'
  | 'mart_feature_select'
  | 'traceability_interaction'
  | 'partner_cta_click'
  | 'partner_form_start'
  | 'generate_lead'
  | 'app_download_click'
  | 'scroll_depth'
  | 'product_impression'
  | 'product_cta_click'
  | 'campaign_banner_view'
  | 'campaign_banner_click'
  | 'preorder_modal_open'
  | 'preorder_form_start'
  | 'preorder_quantity_change'
  | 'preorder_form_submit'
  | 'preorder_submit_error';

const CONSENT_STORAGE_KEY = 'adigo_analytics_consent_v1';
const PII_KEYS = new Set([
  'name',
  'fullname',
  'full_name',
  'email',
  'phone',
  'tel',
  'address',
  'message',
]);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let trackingBootstrapped = false;

function sanitizeParams(
  params?: Record<string, string | number | boolean | undefined>
): Record<string, string | number | boolean> {
  if (!params) return {};
  const clean: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    if (PII_KEYS.has(key.toLowerCase())) continue;
    if (typeof value === 'string' && value.includes('@')) continue;
    clean[key] = value;
  }
  return clean;
}

export function getStoredConsent(): ConsentStatus {
  if (typeof window === 'undefined') return 'unset';
  try {
    const val = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (val === 'granted' || val === 'denied') return val;
    return 'unset';
  } catch {
    return 'unset';
  }
}

export function setStoredConsent(status: 'granted' | 'denied'): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, status);
  } catch {
    // Ignore storage restriction errors in sandboxed contexts
  }

  if (status === 'granted') {
    bootstrapTrackingScripts();
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
  } else if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
}

export function bootstrapTrackingScripts(): void {
  if (typeof window === 'undefined' || trackingBootstrapped) return;
  if (getStoredConsent() !== 'granted') return;

  const { gaMeasurementIds, gtmId } = SEO_CONFIG.analytics;
  if (!gaMeasurementIds.length && !gtmId) return;

  trackingBootstrapped = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  const [primaryGaMeasurementId] = gaMeasurementIds;
  if (primaryGaMeasurementId) {
    window.gtag('js', new Date());
    for (const gaMeasurementId of gaMeasurementIds) {
      window.gtag('config', gaMeasurementId, {
        anonymize_ip: true,
        send_page_view: true,
      });
    }

    const existingGa = document.querySelector(
      `script[src*="gtag/js?id=${encodeURIComponent(primaryGaMeasurementId)}"]`
    );
    if (!existingGa) {

      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryGaMeasurementId)}`;
      document.head.appendChild(gaScript);
    }
  }

  if (gtmId) {
    const existingGtm = document.querySelector(
      `script[src*="gtm.js?id=${encodeURIComponent(gtmId)}"]`
    );
    if (!existingGtm) {
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
      const gtmScript = document.createElement('script');
      gtmScript.async = true;
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
      document.head.appendChild(gtmScript);
    }
  }
}

export function trackEvent(
  eventName: AdigoAnalyticsEvent,
  params?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window === 'undefined') return;
  if (getStoredConsent() !== 'granted') return;

  const safeParams = sanitizeParams(params);
  const { gaMeasurementIds, gtmId } = SEO_CONFIG.analytics;

  if (typeof window.gtag === 'function' && gaMeasurementIds.length) {
    window.gtag('event', eventName, safeParams);
  } else if (gtmId && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...safeParams,
    });
  }
}
