import React, { useEffect } from 'react';
import {
  SEO_CONFIG,
  buildStructuredDataGraph,
  isIndexingAllowed,
  resolveCanonicalUrl,
  resolveSiteOrigin,
} from '../../config/seoConfig';

interface SeoHeadProps {
  title?: string;
  description?: string;
  pathname?: string;
  noindex?: boolean;
}

function upsertMetaTag(
  attribute: 'name' | 'property',
  key: string,
  content: string
): void {
  if (!content) return;
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title = SEO_CONFIG.defaultTitle,
  description = SEO_CONFIG.defaultDescription,
  pathname = '/',
  noindex = false,
}) => {
  useEffect(() => {
    const allowIndex = !noindex && isIndexingAllowed();
    const origin = resolveSiteOrigin();
    const canonicalUrl = resolveCanonicalUrl(pathname);
    const ogImageUrl = origin
      ? `${origin}${SEO_CONFIG.ogImagePath}`
      : SEO_CONFIG.ogImagePath;

    document.title = title;
    document.documentElement.lang = SEO_CONFIG.language;

    upsertMetaTag('name', 'description', description);
    upsertMetaTag(
      'name',
      'robots',
      allowIndex ? 'index, follow' : 'noindex, nofollow'
    );
    upsertMetaTag('name', 'theme-color', SEO_CONFIG.themeColor);

    if (SEO_CONFIG.verification.google) {
      upsertMetaTag(
        'name',
        'google-site-verification',
        SEO_CONFIG.verification.google
      );
    }
    if (SEO_CONFIG.verification.bing) {
      upsertMetaTag('name', 'msvalidate.01', SEO_CONFIG.verification.bing);
    }

    if (canonicalUrl) {
      let link = document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalUrl);
      upsertMetaTag('property', 'og:url', canonicalUrl);
    }

    upsertMetaTag('property', 'og:type', 'website');
    upsertMetaTag('property', 'og:site_name', SEO_CONFIG.siteName);
    upsertMetaTag('property', 'og:locale', SEO_CONFIG.locale);
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:image', ogImageUrl);
    upsertMetaTag('property', 'og:image:width', '1200');
    upsertMetaTag('property', 'og:image:height', '630');
    upsertMetaTag('property', 'og:image:alt', SEO_CONFIG.ogImageAlt);

    upsertMetaTag('name', 'twitter:card', 'summary_large_image');
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);
    upsertMetaTag('name', 'twitter:image', ogImageUrl);
    upsertMetaTag('name', 'twitter:image:alt', SEO_CONFIG.ogImageAlt);

    let jsonLdScript = document.getElementById(
      'adigo-jsonld'
    ) as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'adigo-jsonld';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(buildStructuredDataGraph(origin));
  }, [title, description, pathname, noindex]);

  return null;
};
