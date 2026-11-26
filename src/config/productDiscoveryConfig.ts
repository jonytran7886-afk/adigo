export type ProductEntryPoint =
  | 'hero_primary_cta'
  | 'hero_featured_product'
  | 'marketplace_product_card'
  | 'floating_product_cta';

export interface DiscoveryProductItem {
  id: string;
  campaignId: string;
  producer: string;
  producerLogo: string;
  name: string;
  spec: string;
  description: string;
  secondaryDescription: string;
  ctaLabel: string;
  imageWebp: string;
  imageFallback: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export const PRODUCT_DISCOVERY_CONFIG = {
  campaignId: 'CHICKEN-PREORDER',
  productId: 'CHICKEN-WHOLE',
  productImage: {
    webp: '/src/assets/images/product_whole_chicken_clean_1795656979195.webp',
    fallback: '/src/assets/images/product_whole_chicken_clean_1795656979195.jpg',
    alt: 'Gà ta nguyên con đã làm sạch, dáng thon gọn, màu da tự nhiên',
    width: 1200,
    height: 900,
  },
  marketplaceSection: {
    products: [
      {
        id: 'CHICKEN-WHOLE',
        campaignId: 'CHICKEN-PREORDER',
        producer: 'Organic Việt Nam',
        producerLogo: '/assets/organic-vietnam-logo.png',
        name: 'Gà ta nguyên con',
        spec: 'Nguyên con',
        description: 'Được nuôi dưỡng theo mô hình thảo dược.',
        secondaryDescription: 'Từ vùng nuôi đến bữa cơm gia đình.',
        ctaLabel: 'Đặt mua ngay',
        imageWebp: '/src/assets/images/spotlight_herbal_chicken_1795657811823.webp',
        imageFallback: '/src/assets/images/spotlight_herbal_chicken_1795657811823.jpg',
        imageAlt:
          'Gà ta nguyên con làm sạch, da vàng nhạt tự nhiên cùng gừng, nghệ, sả và khay gà đóng gói trên nền vùng nuôi thảo dược',
        imageWidth: 1408,
        imageHeight: 768,
      },
    ] as DiscoveryProductItem[],
  },
  floatingCta: {
    entryPoint: 'floating_product_cta' as ProductEntryPoint,
    title: 'Gà nguyên con',
    subtitle: 'Organic Việt Nam',
    ctaLabel: 'Đặt trước sản phẩm',
    closeLabel: 'Đóng gợi ý đặt trước sản phẩm',
  },
};
