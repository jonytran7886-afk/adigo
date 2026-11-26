export type CampaignHighlightIcon = 'leaf' | 'shield' | 'utensils';
export type DeliveryOptionIcon = 'truck' | 'store' | 'phone';

export interface CampaignHighlight {
  id: string;
  iconName: CampaignHighlightIcon;
  label: string;
}

export interface CampaignDeliveryOption {
  id: string;
  value: 'Giao hàng tận nơi' | 'Nhận tại điểm bán' | 'Liên hệ để xác nhận';
  label: string;
  iconName: DeliveryOptionIcon;
}

export interface CampaignProductConfig {
  id: string;
  name: string;
  spec: string;
  shortDescription: string;
  unit: string;
  expectedWeightLabel: string;
  estimatedWeightKg: number | null;
  unitPrice: number | null;
  showPricingEstimate: boolean;
  pricePendingText: string;
  maxQuantityPerOrder: number;
}

export interface CampaignConfig {
  campaignId: string;
  enabled: boolean;
  startDate: string | null;
  endDate: string | null;
  sourceName: string;
  brandLogos: {
    organicVietnam: string;
    adigo: string;
    adigoIcon: string;
  };
  bannerContent: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    tagline: string;
    highlights: CampaignHighlight[];
    ctaLabel: string;
  };
  modalPreviewContent: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    tagline: string;
    highlights: CampaignHighlight[];
  };
  bannerMedia: {
    desktopWebp: string;
    desktopFallback: string;
    mobileWebp?: string;
    mobileFallback?: string;
    alt: string;
    width: number;
    height: number;
  };
  modalAssets: {
    chickenPhoto: string;
    farmLandscape: string;
    farmCaption: string;
    productCardThumbnail: string;
  };
  product: CampaignProductConfig;
  deliveryOptions: CampaignDeliveryOption[];
  formCopy: {
    title: string;
    subtitle: string;
    productSectionTitle: string;
    customerSectionTitle: string;
    summaryTitle: string;
    consentLabel: string;
    submitLabel: string;
    submittingLabel: string;
    privacyLinkLabel: string;
    privacyTitle: string;
    privacySummary: string;
    retentionNotice: string;
  };
  successCopy: {
    title: string;
    message: string;
    ctaLabel: string;
  };
  apiEndpoint: string;
}

export const CAMPAIGN_CONFIG: CampaignConfig = {
  campaignId: 'CHICKEN-PREORDER',
  enabled: true,
  startDate: null,
  endDate: null,
  sourceName: 'ADIGO Landing Page',
  brandLogos: {
    organicVietnam: '/assets/organic-vietnam-logo.png',
    adigo: '/assets/aistudio/ADIGO_Ngang_2400px_872a9a4e.png',
    adigoIcon: '/assets/aistudio/ADIGO_Icon_Nen_Trang_512_4639cde4.png',
  },
  bannerContent: {
    eyebrow: 'Sản phẩm từ Organic Việt Nam',
    headline: 'Gà thịt',
    subheadline: 'Được nuôi dưỡng theo mô hình thảo dược',
    tagline: 'Từ vùng nuôi đến bàn ăn gia đình',
    highlights: [
      { id: 'natural', iconName: 'leaf', label: 'Chăn nuôi tự nhiên' },
      { id: 'controlled', iconName: 'shield', label: 'Kiểm soát chặt chẽ' },
      { id: 'fresh', iconName: 'utensils', label: 'Thịt gà tươi thơm ngon' },
    ],
    ctaLabel: 'Đặt trước ngay',
  },
  modalPreviewContent: {
    eyebrow: 'Sản phẩm từ Organic Việt Nam',
    headline: 'Gà thịt',
    subheadline: 'Được nuôi dưỡng theo mô hình thảo dược',
    tagline: 'Từ vùng nuôi đến bàn ăn gia đình.',
    highlights: [
      { id: 'natural', iconName: 'leaf', label: 'Chăn nuôi tự nhiên' },
      { id: 'controlled', iconName: 'shield', label: 'Kiểm soát chặt chẽ' },
      { id: 'fresh', iconName: 'utensils', label: 'Thịt gà tươi thơm ngon' },
    ],
  },
  bannerMedia: {
    desktopWebp: '/src/assets/images/breed_ga_kien_1795658558247.webp',
    desktopFallback: '/src/assets/images/breed_ga_kien_1795658558247.jpg',
    mobileWebp: '',
    mobileFallback: '',
    alt: 'Con gà trên đồng cỏ tại vùng nuôi thảo dược Organic Việt Nam',
    width: 1376,
    height: 768,
  },
  modalAssets: {
    chickenPhoto: '/src/assets/images/breed_ga_kien_1795658558247.webp',
    farmLandscape: '/src/assets/images/herbal_chicken_farm_1795655112377.webp',
    farmCaption: 'Vùng nuôi thảo dược',
    productCardThumbnail: '/src/assets/images/breed_ga_kien_1795658558247.webp',
  },
  product: {
    id: 'CHICKEN-WHOLE',
    name: 'Gà nguyên con',
    spec: 'Nguyên con',
    shortDescription: 'Gà thịt tươi, đóng gói nguyên con',
    unit: 'con',
    expectedWeightLabel: 'Quy cách nguyên con tiêu chuẩn',
    estimatedWeightKg: null,
    unitPrice: null,
    showPricingEstimate: false,
    pricePendingText: 'Sẽ được thông báo khi xác nhận',
    maxQuantityPerOrder: 50,
  },
  deliveryOptions: [
    {
      id: 'delivery',
      value: 'Giao hàng tận nơi',
      label: 'Giao hàng tận nơi',
      iconName: 'truck',
    },
    {
      id: 'store',
      value: 'Nhận tại điểm bán',
      label: 'Nhận tại điểm bán',
      iconName: 'store',
    },
    {
      id: 'call',
      value: 'Liên hệ để xác nhận',
      label: 'Liên hệ để xác nhận',
      iconName: 'phone',
    },
  ],
  formCopy: {
    title: 'Đặt trước sản phẩm gà thịt',
    subtitle: 'Đăng ký ngay để nhận gà thịt từ Organic Việt Nam.',
    productSectionTitle: 'Sản phẩm hiện có',
    customerSectionTitle: 'Thông tin đặt hàng',
    summaryTitle: 'Thông tin đặt trước',
    consentLabel:
      'Tôi đồng ý với Chính sách bảo mật và đồng ý để ADIGO, Organic Việt Nam liên hệ xác nhận thông tin đặt trước.',
    submitLabel: 'Xác nhận đặt trước',
    submittingLabel: 'Đang ghi nhận yêu cầu đặt trước...',
    privacyLinkLabel: 'Chính sách bảo mật',
    privacyTitle: 'Chính sách bảo mật & Lưu trữ dữ liệu đặt trước',
    privacySummary:
      'Thông tin cá nhân (họ tên, số điện thoại, địa chỉ nhận hàng) chỉ được sử dụng để đội ngũ ADIGO và Organic Việt Nam liên hệ xác nhận yêu cầu đặt trước, báo giá chính thức và điều phối giao nhận.',
    retentionNotice:
      'Dữ liệu được lưu trữ bảo mật nội bộ và tự động rà soát/ẩn danh sau tối đa 12 tháng kể từ ngày hoàn tất xử lý hoặc theo yêu cầu xóa dữ liệu của khách hàng.',
  },
  successCopy: {
    title: 'Đặt trước thành công!',
    message:
      'Cảm ơn bạn đã đăng ký đặt trước sản phẩm. Đội ngũ Organic Việt Nam sẽ liên hệ để xác nhận thông tin, giá bán và thời gian nhận hàng.',
    ctaLabel: 'Tiếp tục khám phá ADIGO',
  },
  apiEndpoint: '/api/preorders',
};

export function isCampaignActive(config: CampaignConfig): boolean {
  if (!config.enabled) return false;
  const now = Date.now();
  if (config.startDate) {
    const startMs = Date.parse(config.startDate);
    if (!Number.isNaN(startMs) && now < startMs) return false;
  }
  if (config.endDate) {
    const endMs = Date.parse(config.endDate);
    if (!Number.isNaN(endMs) && now > endMs) return false;
  }
  return true;
}
