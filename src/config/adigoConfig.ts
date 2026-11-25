export type ReleaseStatus = 'pre-launch' | 'released';

export interface MarketplaceProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  unit: string;
  price: string;
  originNote: string;
  accentColor: string;
  featured?: boolean;
  promoLabel?: string;
}

export interface MarketplaceStore {
  id: string;
  name: string;
  specialty: string;
  region: string;
  accent: string;
}

export const ADIGO_CONFIG = {
  brandName: 'ADIGO',
  releaseStatus: 'pre-launch' as ReleaseStatus,
  releaseNote: 'Giao diện minh họa trải nghiệm sản phẩm · Ứng dụng đang hoàn thiện ra mắt',
  parentCompany: 'Organic Việt Nam',
  colors: {
    blue: '#0A74DA',
    teal: '#00A896',
    green: '#16A34A',
    navy: '#0B1F33',
    ink: '#0C1B2A',
    muted: '#4A6075',
    surface: '#F5F9FC',
    border: '#E2ECF4',
  },
  images: {
    martConcept: '/src/assets/images/adigo_mart_concept_1795602232694.jpg',
    consumerLifestyle: '/src/assets/images/adigo_consumer_lifestyle_1795602233057.jpg',
    traceabilityProduce: '/src/assets/images/adigo_traceability_produce_1795602233534.jpg',
    marketplaceVariety: '/src/assets/images/adigo_marketplace_variety_1795602233383.jpg',
    partnerCommunity: '/src/assets/images/adigo_partner_community_1795602234748.jpg',
  },
  navLinks: [
    { label: 'Khám phá', href: '#kham-pha' },
    { label: 'Ứng dụng', href: '#ung-dung' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'Mart', href: '#mart' },
    { label: 'Đối tác', href: '#doi-tac' },
  ],
  marketplaceCategories: [
    'Tất cả',
    'Thực phẩm tươi sống',
    'Thịt gia cầm',
    'Thịt lợn',
    'Thịt bò',
    'Trứng',
    'Rau củ',
    'Trái cây',
    'Nông sản',
    'Sản phẩm thảo dược',
    'Thực phẩm chế biến',
  ],
  marketplaceStores: [
    {
      id: 'store-1',
      name: 'Nông sản Cao Nguyên',
      specialty: 'Rau củ & Trái cây theo mùa',
      region: 'Lâm Đồng',
      accent: '#16A34A',
    },
    {
      id: 'store-2',
      name: 'Thực phẩm An Phú',
      specialty: 'Thịt tươi & Gia cầm đóng gói',
      region: 'Đồng Nai',
      accent: '#0A74DA',
    },
    {
      id: 'store-3',
      name: 'Thảo mộc Bách Diệp',
      specialty: 'Trà thảo dược & Gia vị tự nhiên',
      region: 'Thái Nguyên',
      accent: '#00A896',
    },
    {
      id: 'store-4',
      name: 'Bếp Nhà Minh Tâm',
      specialty: 'Thực phẩm chế biến tiện lợi',
      region: 'TP. Hồ Chí Minh',
      accent: '#0B1F33',
    },
  ] as MarketplaceStore[],
  marketplaceProducts: [
    {
      id: 'p1',
      name: 'Cà chua bi đỏ đóng hộp',
      brand: 'Nông sản Cao Nguyên',
      category: 'Rau củ',
      unit: 'Hộp 300g',
      price: '32.000đ',
      originNote: 'Có hồ sơ vùng trồng',
      accentColor: '#16A34A',
      featured: true,
      promoLabel: 'Theo mùa',
    },
    {
      id: 'p2',
      name: 'Ức gà phi lê tươi đóng khay',
      brand: 'Thực phẩm An Phú',
      category: 'Thịt gia cầm',
      unit: 'Khay 500g',
      price: '68.000đ',
      originNote: 'Có dữ liệu lô đóng gói',
      accentColor: '#0A74DA',
      featured: true,
    },
    {
      id: 'p3',
      name: 'Ba rọi lợn cắt lát chuẩn bếp',
      brand: 'Thực phẩm An Phú',
      category: 'Thịt lợn',
      unit: 'Khay 400g',
      price: '84.000đ',
      originNote: 'Thông tin nhà cung cấp',
      accentColor: '#0A74DA',
    },
    {
      id: 'p4',
      name: 'Thăn bò thái mỏng lẩu nướng',
      brand: 'Trang trại Đồng Xanh',
      category: 'Thịt bò',
      unit: 'Khay 350g',
      price: '145.000đ',
      originNote: 'Bảo quản lạnh xuyên suốt',
      accentColor: '#0B1F33',
      featured: true,
    },
    {
      id: 'p5',
      name: 'Trứng gà ta vỏ hồng hộp 10 quả',
      brand: 'Hợp tác xã Bình Minh',
      category: 'Trứng',
      unit: 'Hộp 10 quả',
      price: '38.000đ',
      originNote: 'Ngày thu hoạch trên vỏ hộp',
      accentColor: '#00A896',
    },
    {
      id: 'p6',
      name: 'Xoài cát Hòa Lộc chín cây',
      brand: 'Vườn trái cây Cửu Long',
      category: 'Trái cây',
      unit: 'Túi 1kg',
      price: '76.000đ',
      originNote: 'Thông tin hợp tác xã',
      accentColor: '#16A34A',
      promoLabel: 'Ưu đãi thành viên',
    },
    {
      id: 'p7',
      name: 'Gạo ST25 thơm dẻo đặc sản',
      brand: 'Lúa gạo Sóc Trăng',
      category: 'Nông sản',
      unit: 'Túi 5kg',
      price: '185.000đ',
      originNote: 'Mã lô xay xát minh bạch',
      accentColor: '#00A896',
    },
    {
      id: 'p8',
      name: 'Trà hoa cúc & gừng ấm túi lọc',
      brand: 'Thảo mộc Bách Diệp',
      category: 'Sản phẩm thảo dược',
      unit: 'Hộp 20 gói',
      price: '92.000đ',
      originNote: 'Thông tin vùng nguyên liệu',
      accentColor: '#00A896',
      featured: true,
    },
    {
      id: 'p9',
      name: 'Chả giò tôm thịt gói sẵn',
      brand: 'Bếp Nhà Minh Tâm',
      category: 'Thực phẩm chế biến',
      unit: 'Gói 400g',
      price: '64.000đ',
      originNote: 'Thành phần & hạn dùng rõ ràng',
      accentColor: '#0B1F33',
    },
    {
      id: 'p10',
      name: 'Cá hồi phi lê tươi cắt khúc',
      brand: 'Hải sản Biển Xanh',
      category: 'Thực phẩm tươi sống',
      unit: 'Khay 300g',
      price: '158.000đ',
      originNote: 'Dữ liệu lô nhập khẩu',
      accentColor: '#0A74DA',
    },
  ] as MarketplaceProduct[],
};
