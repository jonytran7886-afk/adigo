import { FoodVisualType } from '../components/hero/ProductShowcase/ProductVisuals';

export type MarketplaceTabId = 'products' | 'stores' | 'brands' | 'offers';

export type MarketplaceFeatureCardId =
  | 'categories'
  | 'stores'
  | 'search'
  | 'shopping';

export interface MarketplaceTabConfig {
  id: MarketplaceTabId;
  label: string;
  relatedCard: MarketplaceFeatureCardId;
}

export interface MarketplaceDemoProduct {
  id: string;
  name: string;
  unit: string;
  priceVnd: string;
  category: string;
  originTag: string;
  visual: FoodVisualType;
}

export interface MarketplaceDemoStore {
  id: string;
  name: string;
  category: string;
  note: string;
  accentColor: string;
}

export const MARKETPLACE_CONFIG = {
  sectionId: 'marketplace',
  eyebrow: 'ADIGO Marketplace',
  headlinePrefix: 'Khám phá nhiều hơn. ',
  headlineHighlight: 'Kết nối rộng hơn.',
  description:
    'ADIGO Marketplace hướng đến kết nối sản phẩm, thương hiệu và nhà bán hàng trên một không gian thương mại số trực quan, linh hoạt và mở rộng.',
  tabs: [
    { id: 'products', label: 'Sản phẩm', relatedCard: 'categories' },
    { id: 'stores', label: 'Gian hàng', relatedCard: 'stores' },
    { id: 'brands', label: 'Thương hiệu', relatedCard: 'search' },
    { id: 'offers', label: 'Ưu đãi', relatedCard: 'shopping' },
  ] as MarketplaceTabConfig[],
  featureCards: {
    categories: {
      id: 'categories' as MarketplaceFeatureCardId,
      title: 'Danh mục đa dạng',
      description:
        'Khám phá nhiều nhóm sản phẩm, từ thực phẩm tươi sống, nông sản đến thực phẩm chế biến.',
    },
    stores: {
      id: 'stores' as MarketplaceFeatureCardId,
      title: 'Gian hàng kết nối',
      description:
        'Kết nối người tiêu dùng với các nhà bán hàng, nhà sản xuất và thương hiệu.',
    },
    search: {
      id: 'search' as MarketplaceFeatureCardId,
      title: 'Tìm kiếm trực quan',
      description:
        'Dễ dàng khám phá sản phẩm, gian hàng và thương hiệu theo nhu cầu.',
    },
    shopping: {
      id: 'shopping' as MarketplaceFeatureCardId,
      title: 'Mua sắm linh hoạt',
      description:
        'Lựa chọn sản phẩm, phương thức mua sắm và nhận hàng phù hợp.',
    },
  },
  categories: [
    { id: 'all', label: 'Tất cả danh mục' },
    { id: 'meat-eggs', label: 'Thịt và trứng' },
    { id: 'veggies', label: 'Rau củ' },
    { id: 'fruits', label: 'Trái cây' },
    { id: 'agri', label: 'Nông sản' },
    { id: 'processed', label: 'Thực phẩm chế biến' },
    { id: 'seafood', label: 'Hải sản' },
  ],
  demoProducts: [
    {
      id: 'mp-1',
      name: 'Thịt gà ta',
      unit: 'Khay 1 kg',
      priceVnd: '129.000 đ',
      category: 'meat-eggs',
      originTag: 'Thông tin nguồn gốc',
      visual: 'chicken',
    },
    {
      id: 'mp-2',
      name: 'Thịt bò thái lát',
      unit: 'Khay 500 g',
      priceVnd: '145.000 đ',
      category: 'meat-eggs',
      originTag: 'Theo lô đóng gói',
      visual: 'pork',
    },
    {
      id: 'mp-3',
      name: 'Thịt lợn ba chỉ',
      unit: 'Khay 500 g',
      priceVnd: '89.000 đ',
      category: 'meat-eggs',
      originTag: 'Thông tin nguồn gốc',
      visual: 'pork',
    },
    {
      id: 'mp-4',
      name: 'Trứng gà ta',
      unit: 'Vỉ 10 quả',
      priceVnd: '39.000 đ',
      category: 'meat-eggs',
      originTag: 'Dữ liệu nhà sản xuất',
      visual: 'eggs',
    },
    {
      id: 'mp-5',
      name: 'Rau củ tươi theo mùa',
      unit: 'Gói 400 g',
      priceVnd: '28.000 đ',
      category: 'veggies',
      originTag: 'Thông tin nguồn gốc',
      visual: 'veggies',
    },
    {
      id: 'mp-6',
      name: 'Cam sành chọn lọc',
      unit: 'Túi 1 kg',
      priceVnd: '45.000 đ',
      category: 'fruits',
      originTag: 'Theo mùa vụ',
      visual: 'orange',
    },
  ] as MarketplaceDemoProduct[],
  demoStores: [
    {
      id: 'st-1',
      name: 'Gian hàng minh họa 01',
      category: 'Thịt tươi & Gia cầm',
      note: 'Giao diện gian hàng đối tác',
      accentColor: '#345EAA',
    },
    {
      id: 'st-2',
      name: 'Gian hàng minh họa 02',
      category: 'Rau củ & Trái cây',
      note: 'Giao diện gian hàng nhà sản xuất',
      accentColor: '#398441',
    },
    {
      id: 'st-3',
      name: 'Gian hàng minh họa 03',
      category: 'Nông sản & Chế biến',
      note: 'Giao diện gian hàng thương hiệu',
      accentColor: '#4C9DC6',
    },
  ] as MarketplaceDemoStore[],
  demoBrands: [
    {
      id: 'br-1',
      name: 'Nhóm thương hiệu Thực phẩm tươi',
      category: 'Thịt · Trứng · Hải sản',
    },
    {
      id: 'br-2',
      name: 'Nhóm thương hiệu Nông sản Việt',
      category: 'Rau củ · Trái cây · Hạt',
    },
    {
      id: 'br-3',
      name: 'Nhóm thương hiệu Chế biến tiện lợi',
      category: 'Đóng gói sẵn · Gia vị',
    },
    {
      id: 'br-4',
      name: 'Thương hiệu ADIGO Ecosystem',
      category: 'Sản phẩm kết nối đa kênh',
    },
  ],
  demoOffers: [
    {
      id: 'of-1',
      title: 'Bộ sưu tập thực phẩm mỗi ngày',
      desc: 'Gợi ý kết hợp nhiều nhóm hàng từ các gian hàng minh họa',
      tag: 'Chương trình minh họa',
    },
    {
      id: 'of-2',
      title: 'Đặc quyền kết nối thành viên',
      desc: 'Trải nghiệm đồng bộ ưu đãi giữa ADIGO Marketplace và ADIGO Mart',
      tag: 'Minh họa tiện ích',
    },
    {
      id: 'of-3',
      title: 'Combo bữa ăn gia đình linh hoạt',
      desc: 'Lựa chọn nhanh nhiều sản phẩm thiết yếu trong một lần đặt',
      tag: 'Định hướng trải nghiệm',
    },
  ],
};
