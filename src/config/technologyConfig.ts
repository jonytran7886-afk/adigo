export type TechnologyExperienceId = 'data' | 'sync' | 'smart' | 'personal';

export type TechnologyChipId = 'chain' | 'data' | 'smart' | 'personal';

export type TechnologyPanelId = 'products' | 'traceability' | 'smart' | 'network';

export interface TechnologyExperienceTab {
  id: TechnologyExperienceId;
  label: string;
  highlightedPanels: TechnologyPanelId[];
  relatedChips: TechnologyChipId[];
  phoneHeadline: string;
  phoneSubtitle: string;
}

export const TECHNOLOGY_CONFIG = {
  sectionId: 'technology',
  eyebrow: 'Công nghệ ADIGO',
  headlineLine1: 'Công nghệ thông minh,',
  headlineLine2: 'kết nối toàn chuỗi.',
  description:
    'ADIGO phát triển công nghệ để kết nối sản phẩm, thương hiệu, điểm bán và người tiêu dùng, hướng đến trải nghiệm mua sắm thông minh, thuận tiện và liền mạch.',
  assets: {
    varietyPhoto: '/src/assets/images/adigo_marketplace_variety_1795602233383.webp',
    traceabilityBeefPhoto: '/src/assets/images/traceability_beef_pack_1795655579958.webp',
    martConceptPhoto: '/src/assets/images/adigo_mart_concept_1795602232694.webp',
    chickenPlatterPhoto: '/src/assets/images/chicken_whole_platter_1795655111655.webp',
    veggiesProcessedPhoto: '/src/assets/images/marketplace_veggies_processed_1795655578984.webp',
    porkBeefPhoto: '/src/assets/images/marketplace_pork_beef_cuts_1795655577544.webp',
    eggsCitrusPhoto: '/src/assets/images/marketplace_eggs_citrus_1795655578585.webp',
    lifestylePhoto: '/src/assets/images/adigo_consumer_lifestyle_1795602233057.webp',
  },
  featureChips: [
    {
      id: 'chain' as TechnologyChipId,
      line1: 'Kết nối',
      line2: 'toàn chuỗi',
      icon: 'network' as const,
    },
    {
      id: 'data' as TechnologyChipId,
      line1: 'Dữ liệu',
      line2: 'minh bạch',
      icon: 'database' as const,
    },
    {
      id: 'smart' as TechnologyChipId,
      line1: 'Khám phá',
      line2: 'thông minh',
      icon: 'sparkles' as const,
    },
    {
      id: 'personal' as TechnologyChipId,
      line1: 'Trải nghiệm',
      line2: 'cá nhân hóa',
      icon: 'user' as const,
    },
  ],
  panels: {
    products: {
      id: 'products' as TechnologyPanelId,
      title: 'Kết nối sản phẩm',
      subtitle: 'Thịt tươi · Trứng · Rau củ · Trái cây',
      targetTab: 'data' as TechnologyExperienceId,
    },
    traceability: {
      id: 'traceability' as TechnologyPanelId,
      title: 'Truy xuất nguồn gốc',
      subtitle: 'Mã QR xác thực · Lô ADG-01',
      targetTab: 'data' as TechnologyExperienceId,
    },
    smart: {
      id: 'smart' as TechnologyPanelId,
      title: 'Trải nghiệm thông minh',
      subtitle: 'Trợ lý gợi ý mua sắm',
      targetTab: 'smart' as TechnologyExperienceId,
    },
    network: {
      id: 'network' as TechnologyPanelId,
      title: 'Mạng lưới điểm bán',
      subtitle: 'ADIGO Mart · Bán lẻ đa kênh',
      targetTab: 'sync' as TechnologyExperienceId,
    },
  },
  experiences: [
    {
      id: 'data',
      label: 'Kết nối dữ liệu',
      highlightedPanels: ['products', 'traceability'],
      relatedChips: ['chain', 'data'],
      phoneHeadline: 'Hệ sinh thái tiện ích ADIGO',
      phoneSubtitle: 'Kết nối thông tin sản phẩm, nguồn gốc và điểm bán trên một ứng dụng.',
    },
    {
      id: 'sync',
      label: 'Đồng bộ trải nghiệm',
      highlightedPanels: ['network', 'products'],
      relatedChips: ['chain'],
      phoneHeadline: 'Mua sắm liền mạch đa kênh',
      phoneSubtitle: 'Đồng bộ trải nghiệm giữa ADIGO App, Marketplace và ADIGO Mart.',
    },
    {
      id: 'smart',
      label: 'Khám phá thông minh',
      highlightedPanels: ['smart'],
      relatedChips: ['smart'],
      phoneHeadline: 'Trợ lý mua sắm thông minh',
      phoneSubtitle: 'Hỗ trợ tìm kiếm sản phẩm và gợi ý thực đơn theo ngôn ngữ tự nhiên.',
    },
    {
      id: 'personal',
      label: 'Cá nhân hóa',
      highlightedPanels: ['smart', 'network'],
      relatedChips: ['personal'],
      phoneHeadline: 'Gợi ý theo nhu cầu của bạn',
      phoneSubtitle: 'Cá nhân hóa danh mục quan tâm, ưu đãi và điểm bán phù hợp.',
    },
  ] as TechnologyExperienceTab[],
  aiPromptExamples: [
    '“Hôm nay bạn muốn chuẩn bị món gì?”',
    '“Gợi ý thực phẩm cho bữa ăn gia đình.”',
    '“Giúp tôi tìm hiểu nguồn gốc sản phẩm này.”',
  ],
};
