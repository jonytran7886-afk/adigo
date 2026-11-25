export type ExperienceCardTheme = 'discover' | 'shopping' | 'transparency' | 'connected';

export interface ExperienceCardConfig {
  id: string;
  title: string;
  description: string;
  icon: 'search' | 'cart' | 'shield' | 'network';
  theme: ExperienceCardTheme;
  animationDelay: number;
}

export const EXPLORE_CONFIG = {
  sectionId: 'explore',
  eyebrow: 'Khám phá ADIGO',
  headlinePrefix: 'Một nền tảng. ',
  headlineHighlight: 'Nhiều trải nghiệm.',
  description:
    'ADIGO kết nối sản phẩm, thương hiệu, nhà bán hàng và hệ thống bán lẻ, giúp người dùng dễ dàng khám phá, lựa chọn và mua sắm theo nhu cầu.',
  assets: {
    shoppingLifestyle: '/src/assets/images/adigo_mart_concept_1795602232694.jpg',
    marketplaceVariety: '/src/assets/images/adigo_marketplace_variety_1795602233383.jpg',
    traceabilityProduce: '/src/assets/images/adigo_traceability_produce_1795602233534.jpg',
  },
  cards: [
    {
      id: 'discover',
      title: 'Khám phá dễ dàng',
      description: 'Tìm kiếm sản phẩm, thương hiệu và những lựa chọn phù hợp với nhu cầu.',
      icon: 'search',
      theme: 'discover',
      animationDelay: 0,
    },
    {
      id: 'shopping',
      title: 'Mua sắm thuận tiện',
      description: 'Trải nghiệm mua sắm kết nối giữa trực tuyến và trực tiếp.',
      icon: 'cart',
      theme: 'shopping',
      animationDelay: 0.09,
    },
    {
      id: 'transparency',
      title: 'Thông tin minh bạch',
      description: 'Tiếp cận thông tin sản phẩm và nguồn gốc theo dữ liệu được cung cấp.',
      icon: 'shield',
      theme: 'transparency',
      animationDelay: 0.18,
    },
    {
      id: 'connected',
      title: 'Kết nối không giới hạn',
      description: 'Khám phá thêm nhiều sản phẩm, nhà bán hàng và cơ hội tiêu dùng.',
      icon: 'network',
      theme: 'connected',
      animationDelay: 0.27,
    },
  ] as ExperienceCardConfig[],
};
