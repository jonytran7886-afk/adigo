export const HERO_CONFIG = {
  brand: {
    name: 'ADIGO',
    tagline: 'Nền tảng thương mại và tiêu dùng số',
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
    eyebrow: 'Nền tảng thương mại và tiêu dùng số',
    headlineLine1: 'Kết nối giá trị.',
    headlineLine2Prefix: '',
    headlineLine2Highlight: 'Nâng tầm trải nghiệm.',
    description:
      'Khám phá sản phẩm, kết nối trực tiếp với nhà sản xuất và thương hiệu, tận hưởng trải nghiệm mua sắm thông minh, thuận tiện và minh bạch trên ADIGO.',
    primaryCta: 'Đặt mua ngay',
    secondaryCta: 'Khám phá ADIGO',
    headerCta: 'Trải nghiệm ADIGO',
  },
  featureChips: [
    { id: 'diverse', label: 'Sản phẩm đa dạng', icon: 'layers' as const },
    { id: 'transparent', label: 'Minh bạch nguồn gốc', icon: 'shield' as const },
    { id: 'smart', label: 'Mua sắm thông minh', icon: 'cart' as const },
  ],
  assets: {
    heroPlatformBannerPhoto: '/src/assets/images/hero_banner_platform_1795658859441.webp',
    freshBannerPhoto: '/src/assets/images/adigo_marketplace_variety_1795602233383.webp',
    produceQrPhoto: '/src/assets/images/adigo_traceability_produce_1795602233534.webp',
    lifestylePhoto: '/src/assets/images/adigo_consumer_lifestyle_1795602233057.webp',
  },
  mainPhone: {
    searchPlaceholder: 'Tìm sản phẩm, thương hiệu...',
    bannerTitle: 'Sản phẩm chọn lọc cho mọi nhu cầu.',
    bannerCta: 'Khám phá ngay',
    categories: [
      { id: 'meat', label: 'Thực phẩm', visualType: 'pork' as const },
      { id: 'veggies', label: 'Rau củ', visualType: 'veggies' as const },
      { id: 'fruits', label: 'Trái cây', visualType: 'freshFruits' as const },
      { id: 'agri', label: 'Nông sản', visualType: 'pomelo' as const },
      { id: 'lifestyle', label: 'Đời sống', visualType: 'homeCeramic' as const },
    ],
    featuredProducts: [
      {
        id: 'chicken',
        name: 'Thịt gà nguyên con',
        subtitle: 'Organic Việt Nam',
        visualType: 'chicken' as const,
      },
      {
        id: 'botanical-care',
        name: 'Chăm sóc thảo mộc',
        subtitle: 'Mỹ phẩm thiên nhiên',
        visualType: 'botanicalCare' as const,
      },
      {
        id: 'tea-coffee',
        name: 'Trà & Cà phê mộc',
        subtitle: 'Đặc sản vùng miền',
        visualType: 'teaCoffee' as const,
      },
      {
        id: 'honey-wellness',
        name: 'Mật ong hoa rừng',
        subtitle: 'Sức khỏe tự nhiên',
        visualType: 'honeyWellness' as const,
      },
      {
        id: 'pantry-dry',
        name: 'Hạt & Ngũ cốc sạch',
        subtitle: 'Nông sản chế biến',
        visualType: 'pantryDry' as const,
      },
      {
        id: 'eggs',
        name: 'Trứng gà thảo dược',
        subtitle: 'Trang trại liên kết',
        visualType: 'eggs' as const,
      },
    ],
  },
  discoverPhone: {
    title: 'Khám phá',
    categories: [
      { id: 'fresh-meat', label: 'Thực phẩm tươi', visualType: 'seafood' as const },
      { id: 'botanical-care', label: 'Chăm sóc cá nhân', visualType: 'botanicalCare' as const },
      { id: 'home-living', label: 'Gia dụng & Đời sống', visualType: 'homeCeramic' as const },
      { id: 'tea-coffee', label: 'Đặc sản & Đồ uống', visualType: 'teaCoffee' as const },
      { id: 'fruits', label: 'Trái cây chọn lọc', visualType: 'freshFruits' as const },
      { id: 'pantry-dry', label: 'Nông sản chế biến', visualType: 'pantryDry' as const },
    ],
  },
  traceabilityPhone: {
    title: 'Nguồn gốc sản phẩm',
    productName: 'Thịt gà',
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
