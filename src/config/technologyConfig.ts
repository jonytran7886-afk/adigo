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
      subtitle: 'Sản phẩm · Nhà sản xuất · Thị trường',
      targetTab: 'data' as TechnologyExperienceId,
    },
    traceability: {
      id: 'traceability' as TechnologyPanelId,
      title: 'Truy xuất nguồn gốc',
      subtitle: 'Tem mã QR · Hành trình minh họa',
      targetTab: 'data' as TechnologyExperienceId,
    },
    smart: {
      id: 'smart' as TechnologyPanelId,
      title: 'Trải nghiệm thông minh',
      subtitle: 'Gợi ý & hỗ trợ mua sắm định hướng AI',
      targetTab: 'smart' as TechnologyExperienceId,
    },
    network: {
      id: 'network' as TechnologyPanelId,
      title: 'Mạng lưới điểm bán',
      subtitle: 'ADIGO Mart · Marketplace đa kênh',
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
      phoneSubtitle: 'Giao diện minh họa định hướng hỗ trợ tìm kiếm bằng ngôn ngữ tự nhiên.',
    },
    {
      id: 'personal',
      label: 'Cá nhân hóa',
      highlightedPanels: ['smart', 'network'],
      relatedChips: ['personal'],
      phoneHeadline: 'Gợi ý theo nhu cầu của bạn',
      phoneSubtitle: 'Minh họa cá nhân hóa danh mục quan tâm, ưu đãi và điểm bán phù hợp.',
    },
  ] as TechnologyExperienceTab[],
  aiPromptExamples: [
    '“Hôm nay bạn muốn chuẩn bị món gì?”',
    '“Gợi ý thực phẩm cho bữa ăn gia đình.”',
    '“Giúp tôi tìm hiểu nguồn gốc sản phẩm này.”',
  ],
  phoneUtilities: [
    { id: 'shop', label: 'Mua sắm', targetTab: 'sync' as TechnologyExperienceId },
    { id: 'discover', label: 'Khám phá sản phẩm', targetTab: 'data' as TechnologyExperienceId },
    { id: 'trace', label: 'Truy xuất nguồn gốc', targetTab: 'data' as TechnologyExperienceId },
    { id: 'store', label: 'Tìm điểm bán', targetTab: 'sync' as TechnologyExperienceId },
    { id: 'member', label: 'Ưu đãi & thành viên', targetTab: 'personal' as TechnologyExperienceId },
    { id: 'assistant', label: 'Trợ lý thông minh', targetTab: 'smart' as TechnologyExperienceId },
  ],
};
