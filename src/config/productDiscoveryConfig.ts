export type ProductEntryPoint =
  | 'hero_primary_cta'
  | 'hero_featured_product'
  | 'marketplace_product_card'
  | 'floating_product_cta';

export interface SpotlightBreedItem {
  id: string;
  name: string;
  imageWebp: string;
  imageFallback: string;
  imageAlt: string;
  objectPositionClass: string;
}

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
  backdropImageWebp: string;
  backdropImageFallback: string;
  breeds: SpotlightBreedItem[];
}

export const PRODUCT_DISCOVERY_CONFIG = {
  campaignId: 'CHICKEN-PREORDER',
  productId: 'CHICKEN-WHOLE',
  productImage: {
    webp: '/src/assets/images/product_whole_chicken_clean_1795656979195.webp',
    fallback: '/src/assets/images/product_whole_chicken_clean_1795656979195.jpg',
    alt: 'Thịt gà nguyên con đã làm sạch, dáng thon gọn, màu da tự nhiên',
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
        name: 'Đặt gà hôm nay',
        spec: 'Nguyên con',
        description: 'Được nuôi dưỡng theo mô hình thảo dược.',
        secondaryDescription: 'Từ vùng nuôi đến bữa cơm gia đình.',
        ctaLabel: 'Đặt mua ngay',
        backdropImageWebp: '/src/assets/images/herbal_chicken_farm_1795655112377.webp',
        backdropImageFallback: '/src/assets/images/herbal_chicken_farm_1795655112377.jpg',
        breeds: [
          {
            id: 'ga-kien',
            name: 'Gà Kiến',
            imageWebp: '/src/assets/images/breed_ga_kien_1795658558247.webp',
            imageFallback: '/src/assets/images/breed_ga_kien_1795658558247.jpg',
            imageAlt: 'Giống Gà Kiến Organic Việt Nam dáng thon gọn, lông vàng óng tự nhiên trên đồng cỏ thảo dược',
            objectPositionClass: 'object-[50%_34%]',
          },
          {
            id: 'ga-co',
            name: 'Gà Cỏ',
            imageWebp: '/src/assets/images/breed_ga_co_1795658558653.webp',
            imageFallback: '/src/assets/images/breed_ga_co_1795658558653.jpg',
            imageAlt: 'Giống Gà Cỏ Organic Việt Nam lông nâu vàng tự nhiên kiếm ăn trên đồng cỏ xanh',
            objectPositionClass: 'object-[52%_40%]',
          },
          {
            id: 'ga-sao',
            name: 'Gà Sao',
            imageWebp: '/src/assets/images/breed_ga_sao_1795658560281.webp',
            imageFallback: '/src/assets/images/breed_ga_sao_1795658560281.jpg',
            imageAlt: 'Giống Gà Sao Organic Việt Nam bộ lông chấm bi trắng đặc trưng trên vùng nuôi tự nhiên',
            objectPositionClass: 'object-[48%_34%]',
          },
          {
            id: 'ga-mia',
            name: 'Gà Mía',
            imageWebp: '/src/assets/images/breed_ga_mia_1795658560544.webp',
            imageFallback: '/src/assets/images/breed_ga_mia_1795658560544.jpg',
            imageAlt: 'Giống Gà Mía Organic Việt Nam dáng bệ vệ, lông đỏ tía óng mượt trên đồng cỏ thảo dược',
            objectPositionClass: 'object-[46%_32%]',
          },
        ],
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
