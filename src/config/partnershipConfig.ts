import { FoodVisualType } from '../components/hero/ProductShowcase/ProductVisuals';

export const PARTNERSHIP_CONFIG = {
  sectionId: 'partnership',
  eyebrow: 'Hợp tác cùng ADIGO',
  headlineLine1: 'Cùng kiến tạo',
  headlineLine2Prefix: 'hệ sinh thái ',
  headlineLine2Highlight: 'giá trị bền vững.',
  description:
    'ADIGO mở ra cơ hội hợp tác với nhà sản xuất, chủ cửa hàng, đơn vị phân phối và đối tác chiến lược, cùng phát triển thị trường và mang sản phẩm đến gần hơn với người tiêu dùng.',
  assets: {
    partnerCommunity: '/src/assets/images/adigo_partner_community_1795602234748.webp',
  },
  partnerCards: [
    {
      id: 'producer',
      title: 'Nhà sản xuất',
      description: 'Đưa sản phẩm đến thị trường rộng hơn.',
      icon: 'sprout' as const,
    },
    {
      id: 'store-owner',
      title: 'Chủ cửa hàng',
      description: 'Kết nối nguồn hàng đa dạng.',
      icon: 'store' as const,
    },
    {
      id: 'distributor',
      title: 'Đối tác phân phối',
      description: 'Mở rộng mạng lưới phân phối.',
      icon: 'truck' as const,
    },
    {
      id: 'strategic',
      title: 'Đối tác chiến lược',
      description: 'Cùng phát triển giải pháp và thị trường dài hạn.',
      icon: 'users' as const,
    },
  ],
  ecosystemTiles: [
    { id: 'tile-chicken', label: 'Thịt gia cầm', visual: 'chicken' as FoodVisualType },
    { id: 'tile-pork', label: 'Thịt tươi', visual: 'pork' as FoodVisualType },
    { id: 'tile-fruit', label: 'Trái cây', visual: 'orange' as FoodVisualType },
    { id: 'tile-pack', label: 'Đóng gói', visual: 'veggies' as FoodVisualType },
  ],
  finalCta: {
    headline: 'Đồng hành cùng ADIGO',
    description:
      'Trở thành đối tác, nhà bán hàng hoặc điểm bán trong hệ sinh thái ADIGO để cùng mở rộng thị trường và mang sản phẩm đến gần hơn với người tiêu dùng.',
    benefits: [
      { id: 'market', label: 'Mở rộng thị trường', icon: 'trending' as const },
      { id: 'resources', label: 'Kết nối nguồn lực', icon: 'link' as const },
      { id: 'brand', label: 'Gia tăng giá trị thương hiệu', icon: 'shield' as const },
      { id: 'sustainable', label: 'Phát triển bền vững', icon: 'sprout' as const },
    ],
    primaryCtaLabel: 'Hợp tác cùng ADIGO',
    secondaryCtaLabel: 'Khám phá ứng dụng',
  },
};
