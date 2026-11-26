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
  image: string;
  badge: string;
}

export interface MarketplaceBrandCollection {
  id: string;
  name: string;
  category: string;
  industry: 'fresh' | 'agri' | 'processed';
  logoType: 'adigo' | 'organic-vn';
  image: string;
  tag: string;
}

export interface MarketplaceOfferCollection {
  id: string;
  title: string;
  desc: string;
  tag: string;
  image: string;
  ctaLabel: string;
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
      name: 'Thịt gà nguyên con',
      unit: 'Khay 1 kg',
      priceVnd: '129.000 đ',
      category: 'meat-eggs',
      originTag: 'Truy xuất nguồn gốc',
      visual: 'chicken',
    },
    {
      id: 'mp-2',
      name: 'Thịt bò & ba chỉ tươi',
      unit: 'Khay 500 g',
      priceVnd: '145.000 đ',
      category: 'meat-eggs',
      originTag: 'Theo lô đóng gói',
      visual: 'pork',
    },
    {
      id: 'mp-3',
      name: 'Trứng gà ta tươi',
      unit: 'Vỉ 10 quả',
      priceVnd: '39.000 đ',
      category: 'meat-eggs',
      originTag: 'Vùng nuôi liên kết',
      visual: 'eggs',
    },
    {
      id: 'mp-4',
      name: 'Rau củ tươi theo mùa',
      unit: 'Gói 400 g',
      priceVnd: '28.000 đ',
      category: 'veggies',
      originTag: 'Thu hoạch trong ngày',
      visual: 'veggies',
    },
    {
      id: 'mp-5',
      name: 'Cam sành chọn lọc',
      unit: 'Túi 1 kg',
      priceVnd: '45.000 đ',
      category: 'fruits',
      originTag: 'Theo mùa vụ',
      visual: 'orange',
    },
    {
      id: 'mp-6',
      name: 'Thực phẩm chế biến sẵn',
      unit: 'Khay 400 g',
      priceVnd: '79.000 đ',
      category: 'processed',
      originTag: 'Đóng gói tiêu chuẩn',
      visual: 'processed',
    },
  ] as MarketplaceDemoProduct[],
  demoStores: [
    {
      id: 'st-1',
      name: 'Gian hàng Thực phẩm Tươi',
      category: 'Thịt tươi · Gia cầm · Trứng',
      note: 'Quầy trưng bày sản phẩm đóng gói giữ lạnh mỗi ngày',
      accentColor: '#345EAA',
      image: '/src/assets/images/marketplace_retail_stall_1795655579789.webp',
      badge: 'Gian hàng đối tác',
    },
    {
      id: 'st-2',
      name: 'Gian hàng Nông sản Xanh',
      category: 'Rau củ · Trái cây theo mùa',
      note: 'Kết nối trực tiếp từ vùng trồng đến giỏ hàng gia đình',
      accentColor: '#398441',
      image: '/src/assets/images/adigo_traceability_produce_1795602233534.webp',
      badge: 'Nhà sản xuất liên kết',
    },
    {
      id: 'st-3',
      name: 'Không gian ADIGO Mart',
      category: 'Tổng hợp & Thực phẩm tiện lợi',
      note: 'Đồng bộ trải nghiệm mua sắm trực tuyến và tại điểm bán',
      accentColor: '#4C9DC6',
      image: '/src/assets/images/adigo_mart_concept_1795602232694.webp',
      badge: 'Điểm bán đa kênh',
    },
  ] as MarketplaceDemoStore[],
  demoBrands: [
    {
      id: 'br-1',
      name: 'Organic Việt Nam · Gà thịt thảo dược',
      category: 'Chăn nuôi tự nhiên · Truy xuất QR',
      industry: 'fresh',
      logoType: 'organic-vn',
      image: '/src/assets/images/herbal_chicken_farm_1795655112377.webp',
      tag: 'Thương hiệu đối tác',
    },
    {
      id: 'br-2',
      name: 'Organic Việt Nam · Bộ sưu tập Bữa ăn sạch',
      category: 'Thịt tươi · Trứng gà · Nông sản',
      industry: 'agri',
      logoType: 'organic-vn',
      image: '/src/assets/images/marketplace_eggs_citrus_1795655578585.webp',
      tag: 'Tuyển chọn theo mùa',
    },
    {
      id: 'br-3',
      name: 'ADIGO · Thực phẩm tươi chọn lọc',
      category: 'Rau củ · Thịt cá · Đóng gói tiện lợi',
      industry: 'processed',
      logoType: 'adigo',
      image: '/src/assets/images/adigo_marketplace_variety_1795602233383.webp',
      tag: 'Hệ sinh thái ADIGO',
    },
    {
      id: 'br-4',
      name: 'ADIGO Mart · Tiện ích gia đình mỗi ngày',
      category: 'Thực phẩm sơ chế · Đa kênh',
      industry: 'processed',
      logoType: 'adigo',
      image: '/src/assets/images/marketplace_veggies_processed_1795655578984.webp',
      tag: 'Kết nối đa kênh',
    },
  ] as MarketplaceBrandCollection[],
  demoOffers: [
    {
      id: 'of-1',
      title: 'Bộ sưu tập thực phẩm tươi mỗi ngày',
      desc: 'Kết hợp gà thảo dược, thịt bò cắt lát và rau củ theo mùa từ các gian hàng đối tác.',
      tag: 'Bộ sưu tập tuần',
      image: '/src/assets/images/product_whole_chicken_clean_1795656979195.webp',
      ctaLabel: 'Xem bộ sưu tập',
    },
    {
      id: 'of-2',
      title: 'Đặc quyền kết nối thành viên ADIGO',
      desc: 'Trải nghiệm đồng bộ tiện ích mua sắm giữa ADIGO Marketplace và ADIGO Mart.',
      tag: 'Thành viên ADIGO',
      image: '/src/assets/images/marketplace_pork_beef_cuts_1795655577544.webp',
      ctaLabel: 'Khám phá tiện ích',
    },
    {
      id: 'of-3',
      title: 'Combo bữa ăn gia đình linh hoạt',
      desc: 'Lựa chọn nhanh các nhóm sản phẩm thiết yếu trong một lần đặt và nhận hàng thuận tiện.',
      tag: 'Gợi ý theo mùa',
      image: '/src/assets/images/marketplace_veggies_processed_1795655578984.webp',
      ctaLabel: 'Chọn sản phẩm',
    },
  ] as MarketplaceOfferCollection[],
};
