export const HERO_CONFIG = {
  brand: {
    name: 'ADIGO',
    tagline: 'Nền tảng thương mại và tiêu dùng',
    logos: {
      horizontal: '/assets/aistudio/ADIGO_Ngang_2400px_872a9a4e.png',
      vertical: '/assets/aistudio/ADIGO_Dung_2400px_0c28ddfc.png',
      icon: '/assets/aistudio/ADIGO_Icon_Nen_Trang_512_4639cde4.png',
    },
  },
  colors: {
    primaryBlue: '#345EAA',
    deepBlue: '#142F63',
    technologyBlue: '#4C9DC6',
    leafGreen: '#398441',
    limeGreen: '#A4CE46',
    softBlueBg: '#EAF5FF',
    softMintBg: '#E8F8F0',
    primaryText: '#112D52',
    secondaryText: '#52677D',
  },
  navItems: [
    { id: 'explore', label: 'Khám phá', href: '#explore', hasSubmenuHint: true },
    { id: 'app', label: 'Ứng dụng', href: '#app' },
    { id: 'marketplace', label: 'Marketplace', href: '#marketplace' },
    { id: 'mart', label: 'Mart', href: '#mart' },
    { id: 'doi-tac', label: 'Đối tác', href: '#doi-tac' },
  ],
  heroCopy: {
    eyebrow: 'Nền tảng thương mại và tiêu dùng',
    headlineLine1: 'Kết nối sản phẩm.',
    headlineLine2Prefix: 'Mở rộng ',
    headlineLine2Highlight: 'trải nghiệm.',
    description:
      'Khám phá, mua sắm và kết nối với những sản phẩm bạn quan tâm trên một nền tảng thông minh, thuận tiện và minh bạch.',
    primaryCta: 'Khám phá ADIGO',
    secondaryCta: 'Tìm hiểu ứng dụng',
    headerCta: 'Trải nghiệm ADIGO',
  },
  featureChips: [
    { id: 'convenient', label: 'Thuận tiện', icon: 'cart' as const },
    { id: 'transparent', label: 'Minh bạch', icon: 'shield' as const },
    { id: 'connected', label: 'Kết nối', icon: 'network' as const },
  ],
  assets: {
    freshBannerPhoto: '/src/assets/images/adigo_marketplace_variety_1795602233383.jpg',
    produceQrPhoto: '/src/assets/images/adigo_traceability_produce_1795602233534.jpg',
    lifestylePhoto: '/src/assets/images/adigo_consumer_lifestyle_1795602233057.jpg',
  },
  mainPhone: {
    searchPlaceholder: 'Tìm sản phẩm, thương hiệu...',
    bannerTitle: 'Thực phẩm tươi ngon cho mỗi ngày.',
    bannerCta: 'Mua sắm ngay',
    categories: [
      { id: 'meat', label: 'Thịt' },
      { id: 'veggies', label: 'Rau củ' },
      { id: 'fruits', label: 'Trái cây' },
      { id: 'eggs', label: 'Trứng' },
      { id: 'agri', label: 'Nông sản' },
    ],
    featuredProducts: [
      {
        id: 'chicken',
        name: 'Thịt gà ta',
        price: '129.000 đ/kg',
        visualType: 'chicken' as const,
      },
      {
        id: 'eggs',
        name: 'Trứng gà',
        price: '39.000 đ/vỉ',
        visualType: 'eggs' as const,
      },
      {
        id: 'pork',
        name: 'Thịt lợn',
        price: '115.000 đ/kg',
        visualType: 'pork' as const,
      },
      {
        id: 'veggies',
        name: 'Rau củ',
        price: '28.000 đ/gói',
        visualType: 'veggies' as const,
      },
      {
        id: 'orange',
        name: 'Cam sành',
        price: '45.000 đ/kg',
        visualType: 'orange' as const,
      },
      {
        id: 'pomelo',
        name: 'Bưởi da xanh',
        price: '58.000 đ/quả',
        visualType: 'pomelo' as const,
      },
    ],
  },
  discoverPhone: {
    title: 'Khám phá',
    categories: [
      { id: 'fresh-meat', label: 'Thịt tươi', visualType: 'pork' as const },
      { id: 'seafood', label: 'Hải sản', visualType: 'seafood' as const },
      { id: 'vegetables', label: 'Rau củ', visualType: 'veggies' as const },
      { id: 'fruits', label: 'Trái cây', visualType: 'orange' as const },
      { id: 'agri-goods', label: 'Nông sản', visualType: 'agri' as const },
      { id: 'processed', label: 'Thực phẩm chế biến', visualType: 'processed' as const },
    ],
  },
  traceabilityPhone: {
    title: 'Nguồn gốc sản phẩm',
    productName: 'Thịt gà ta',
    infoBadge: 'Thông tin sản phẩm',
    timeline: [
      {
        id: 'origin',
        title: 'Nguồn sản xuất',
        desc: 'Trang trại liên kết',
      },
      {
        id: 'farming',
        title: 'Chăn nuôi',
        desc: 'Theo quy trình được kiểm soát',
      },
      {
        id: 'processing',
        title: 'Sơ chế & đóng gói',
        desc: 'Đóng gói giữ lạnh theo lô',
      },
      {
        id: 'distribution',
        title: 'Phân phối',
        desc: 'Đến hệ thống ADIGO Mart',
      },
    ],
  },
};
