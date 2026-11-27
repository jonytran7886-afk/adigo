export interface RouteSeoMetadata {
  path: string;
  title: string;
  description: string;
  indexable: boolean;
}

export interface SectionSeoTopic {
  sectionId: string;
  label: string;
  primaryIntent: string;
  relatedKeywords: string[];
}

const PRODUCTION_SITE_ORIGIN = 'https://adigo.organicvn.com';
const DEFAULT_TITLE = 'ADIGO – Kết nối sản phẩm, nâng tầm trải nghiệm mua sắm';
const DEFAULT_DESCRIPTION =
  'Khám phá và mua sắm thực phẩm, nông sản từ mô hình nuôi trồng ứng dụng thảo dược. ADIGO kết nối nhà sản xuất, thương hiệu và người tiêu dùng với trải nghiệm mua sắm thuận tiện, minh bạch nguồn gốc.';

function normalizeBaseUrl(rawUrl?: string): string {
  if (!rawUrl) return '';
  const trimmed = rawUrl.trim().replace(/\/+$/, '');
  if (!trimmed || trimmed === 'MY_APP_URL') return '';
  try {
    const parsed = new URL(trimmed);
    if (
      parsed.hostname === 'localhost' ||
      parsed.hostname === '127.0.0.1' ||
      parsed.hostname === '0.0.0.0'
    ) {
      return '';
    }
    return parsed.origin;
  } catch {
    return '';
  }
}

export function resolveSiteOrigin(): string {
  const envUrl = normalizeBaseUrl(import.meta.env.VITE_SITE_URL);
  if (envUrl) return envUrl;

  return PRODUCTION_SITE_ORIGIN;
}

export function resolveCanonicalUrl(pathname = '/'): string {
  const origin = resolveSiteOrigin();
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!origin) return '';
  return cleanPath === '/' ? `${origin}/` : `${origin}${cleanPath}`;
}

export function isIndexingAllowed(): boolean {
  return import.meta.env.VITE_ALLOW_INDEXING !== 'false';
}

export const SEO_CONFIG = {
  brandName: 'ADIGO',
  parentBrandName: 'Organic Việt Nam',
  parentBrandUrl: 'https://organicvn.com',
  siteName: 'ADIGO',
  locale: 'vi_VN',
  language: 'vi',
  themeColor: '#142F63',
  defaultTitle: DEFAULT_TITLE,
  defaultDescription: DEFAULT_DESCRIPTION,
  ogImagePath: '/og-adigo.jpg',
  ogImageAlt:
    'ADIGO – Kết nối sản phẩm, nâng tầm trải nghiệm mua sắm với thực phẩm tươi sống và nông sản minh bạch nguồn gốc',
  logoIconPath: '/assets/aistudio/ADIGO_Icon_Nen_Trang_512_4639cde4.png',
  logoHorizontalPath: '/assets/aistudio/ADIGO_Ngang_2400px_872a9a4e.png',
  verification: {
    google: (import.meta.env.VITE_GSC_VERIFICATION || '').trim(),
    bing: (import.meta.env.VITE_BING_VERIFICATION || '').trim(),
  },
  analytics: {
    gaMeasurementIds: ['G-NFCW3H5YZ4', 'G-2JS6M18YB6'],
    gtmId: 'GTM-WWZDSKTC',
  },
  storeLinks: {
    appStore: (import.meta.env.VITE_APP_STORE_URL || '').trim(),
    googlePlay: (import.meta.env.VITE_GOOGLE_PLAY_URL || '').trim(),
  },
  organization: {
    legalName: (import.meta.env.VITE_ORG_LEGAL_NAME || '').trim(),
    contactEmail: (import.meta.env.VITE_ORG_CONTACT_EMAIL || '').trim(),
    socialUrls: (import.meta.env.VITE_ORG_SOCIAL_URLS || '')
      .split(',')
      .map((item: string) => item.trim())
      .filter(Boolean),
  },
};

export const SECTION_SEO_MAP: SectionSeoTopic[] = [
  {
    sectionId: 'top',
    label: 'Hero – Tổng quan ADIGO',
    primaryIntent: 'Thương hiệu & nền tảng thương mại và tiêu dùng số ADIGO',
    relatedKeywords: ['ADIGO', 'nền tảng thương mại và tiêu dùng', 'kết nối sản phẩm'],
  },
  {
    sectionId: 'explore',
    label: 'Khám phá ADIGO',
    primaryIntent: 'Giá trị trải nghiệm khám phá, mua sắm và minh bạch sản phẩm',
    relatedKeywords: ['trải nghiệm mua sắm thông minh', 'thông tin sản phẩm minh bạch'],
  },
  {
    sectionId: 'app',
    label: 'ADIGO App',
    primaryIntent: 'Ứng dụng mua sắm ADIGO trên thiết bị di động',
    relatedKeywords: ['ADIGO App', 'ứng dụng mua sắm thực phẩm'],
  },
  {
    sectionId: 'marketplace',
    label: 'ADIGO Marketplace',
    primaryIntent: 'Không gian kết nối sản phẩm, thương hiệu và nhà bán hàng',
    relatedKeywords: ['ADIGO Marketplace', 'kết nối nhà bán hàng', 'sàn thương mại số'],
  },
  {
    sectionId: 'mart',
    label: 'ADIGO Mart',
    primaryIntent: 'Kết nối không gian bán lẻ trực tiếp và trải nghiệm mua sắm số',
    relatedKeywords: ['ADIGO Mart', 'mua sắm đa kênh', 'tìm điểm bán'],
  },
  {
    sectionId: 'traceability',
    label: 'Truy xuất nguồn gốc',
    primaryIntent: 'Tra cứu hành trình sản phẩm qua mã QR minh bạch',
    relatedKeywords: ['truy xuất nguồn gốc sản phẩm', 'quét mã QR sản phẩm'],
  },
  {
    sectionId: 'technology',
    label: 'Công nghệ ADIGO',
    primaryIntent: 'Kết nối dữ liệu, đồng bộ trải nghiệm và cá nhân hóa mua sắm',
    relatedKeywords: ['công nghệ ADIGO', 'hệ sinh thái tiêu dùng số'],
  },
  {
    sectionId: 'partnership',
    label: 'Hợp tác cùng ADIGO',
    primaryIntent: 'Cơ hội đồng hành cho nhà sản xuất, cửa hàng, đơn vị phân phối',
    relatedKeywords: ['hợp tác cùng ADIGO', 'đối tác hệ sinh thái ADIGO'],
  },
];

/**
 * Future standalone route SEO architecture.
 * These paths are NOT added to sitemap.xml until the routes are implemented.
 */
export const FUTURE_ROUTE_METADATA: Record<string, RouteSeoMetadata> = {
  '/': {
    path: '/',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    indexable: true,
  },
  '/app': {
    path: '/app',
    title: 'ADIGO App – Ứng dụng mua sắm và khám phá sản phẩm',
    description:
      'Trải nghiệm mua sắm thuận tiện trên ADIGO App: khám phá danh mục thực phẩm, theo dõi đơn hàng và tiếp cận thông tin sản phẩm minh bạch.',
    indexable: false,
  },
  '/marketplace': {
    path: '/marketplace',
    title: 'ADIGO Marketplace – Kết nối sản phẩm, thương hiệu và nhà bán hàng',
    description:
      'Khám phá không gian thương mại số ADIGO Marketplace kết nối đa dạng danh mục, gian hàng chọn lọc và trải nghiệm tìm kiếm trực quan.',
    indexable: false,
  },
  '/mart': {
    path: '/mart',
    title: 'ADIGO Mart – Trải nghiệm mua sắm đa kênh tại cửa hàng và trực tuyến',
    description:
      'ADIGO Mart kết nối không gian bán lẻ trực tiếp với nền tảng số, hỗ trợ tìm điểm bán, đặt hàng trực tuyến và nhận hàng linh hoạt.',
    indexable: false,
  },
  '/truy-xuat-nguon-goc': {
    path: '/truy-xuat-nguon-goc',
    title: 'Truy xuất nguồn gốc ADIGO – Minh bạch hành trình sản phẩm',
    description:
      'Quét mã QR để theo dõi thông tin hành trình sản phẩm từ vùng sản xuất, đóng gói đến điểm bán trên hệ sinh thái ADIGO.',
    indexable: false,
  },
  '/cong-nghe': {
    path: '/cong-nghe',
    title: 'Công nghệ ADIGO – Kết nối dữ liệu và trải nghiệm liền mạch',
    description:
      'Tìm hiểu định hướng ứng dụng công nghệ của ADIGO giúp kết nối sản phẩm, điểm bán và người tiêu dùng hiện đại.',
    indexable: false,
  },
  '/doi-tac': {
    path: '/doi-tac',
    title: 'Hợp tác cùng ADIGO – Đồng hành phát triển hệ sinh thái bền vững',
    description:
      'Kết nối hợp tác cùng ADIGO dành cho nhà sản xuất, chủ cửa hàng, đơn vị phân phối và đối tác chiến lược.',
    indexable: false,
  },
  '/tin-tuc': {
    path: '/tin-tuc',
    title: 'Tin tức & Cập nhật – ADIGO',
    description: 'Thông tin cập nhật mới nhất về hệ sinh thái nền tảng thương mại và tiêu dùng số ADIGO.',
    indexable: false,
  },
  '/lien-he': {
    path: '/lien-he',
    title: 'Liên hệ – ADIGO',
    description: 'Thông tin liên hệ và kết nối hợp tác cùng nền tảng ADIGO.',
    indexable: false,
  },
  '/chinh-sach-bao-mat': {
    path: '/chinh-sach-bao-mat',
    title: 'Chính sách bảo mật – ADIGO',
    description: 'Chính sách bảo mật thông tin và quyền riêng tư của người dùng trên nền tảng ADIGO.',
    indexable: false,
  },
  '/dieu-khoan-su-dung': {
    path: '/dieu-khoan-su-dung',
    title: 'Điều khoản sử dụng – ADIGO',
    description: 'Điều khoản và nguyên tắc sử dụng dịch vụ trên nền tảng thương mại và tiêu dùng số ADIGO.',
    indexable: false,
  },
};

export function buildStructuredDataGraph(siteOrigin?: string): Record<string, unknown> {
  const origin = siteOrigin || resolveSiteOrigin();
  const baseUrl = origin ? `${origin}/` : '';
  const resolveAsset = (path: string) => (origin ? `${origin}${path}` : path);

  const organizationNode: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': baseUrl ? `${baseUrl}#organization` : '#organization',
    name: SEO_CONFIG.brandName,
    description: DEFAULT_DESCRIPTION,
    logo: {
      '@type': 'ImageObject',
      url: resolveAsset(SEO_CONFIG.logoIconPath),
      width: 512,
      height: 512,
    },
    parentOrganization: {
      '@type': 'Organization',
      name: SEO_CONFIG.parentBrandName,
      url: SEO_CONFIG.parentBrandUrl,
    },
  };

  if (baseUrl) {
    organizationNode.url = baseUrl;
  }
  if (SEO_CONFIG.organization.legalName) {
    organizationNode.legalName = SEO_CONFIG.organization.legalName;
  }
  if (SEO_CONFIG.organization.contactEmail) {
    organizationNode.email = SEO_CONFIG.organization.contactEmail;
  }
  if (SEO_CONFIG.organization.socialUrls.length > 0) {
    organizationNode.sameAs = SEO_CONFIG.organization.socialUrls;
  }

  const brandNode: Record<string, unknown> = {
    '@type': 'Brand',
    '@id': baseUrl ? `${baseUrl}#brand` : '#brand',
    name: SEO_CONFIG.brandName,
    slogan: 'Kết nối sản phẩm. Mở rộng trải nghiệm.',
    description:
      'Thương hiệu công nghệ thương mại và tiêu dùng số thuộc hệ sinh thái Organic Việt Nam, kết nối ADIGO App, Marketplace, ADIGO Mart và truy xuất nguồn gốc.',
    logo: resolveAsset(SEO_CONFIG.logoHorizontalPath),
  };

  const webSiteNode: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': baseUrl ? `${baseUrl}#website` : '#website',
    name: SEO_CONFIG.siteName,
    inLanguage: 'vi-VN',
    publisher: {
      '@id': baseUrl ? `${baseUrl}#organization` : '#organization',
    },
  };
  if (baseUrl) {
    webSiteNode.url = baseUrl;
  }

  const webPageNode: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': baseUrl ? `${baseUrl}#webpage` : '#webpage',
    name: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'vi-VN',
    isPartOf: {
      '@id': baseUrl ? `${baseUrl}#website` : '#website',
    },
    about: {
      '@id': baseUrl ? `${baseUrl}#brand` : '#brand',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: resolveAsset(SEO_CONFIG.ogImagePath),
      width: 1200,
      height: 630,
    },
  };
  if (baseUrl) {
    webPageNode.url = baseUrl;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [organizationNode, brandNode, webSiteNode, webPageNode],
  };
}
