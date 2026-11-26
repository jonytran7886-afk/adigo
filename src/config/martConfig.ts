import { FoodVisualType } from '../components/hero/ProductShowcase/ProductVisuals';

export type MartExperienceId = 'store' | 'online' | 'fulfillment' | 'connected';

export type MartChipId = 'in-store' | 'locator' | 'online-order' | 'member';

export interface MartExperienceTab {
  id: MartExperienceId;
  label: string;
  mapTitle: string;
  mapSubtitle: string;
  relatedChips: MartChipId[];
}

export interface MartFeatureChipConfig {
  id: MartChipId;
  line1: string;
  line2: string;
  icon: 'store' | 'pin' | 'cart' | 'crown';
}

export interface MartDemoStoreItem {
  id: string;
  name: string;
  areaLabel: string;
  note: string;
}

export interface MartDemoProductItem {
  id: string;
  name: string;
  unit: string;
  category: 'meat-eggs' | 'veggies' | 'fruits';
  visual: FoodVisualType;
}

export const MART_CONFIG = {
  sectionId: 'mart',
  eyebrow: 'ADIGO Mart',
  headlineLine1: 'Mua sắm theo cách',
  headlineLine2: 'bạn muốn.',
  description:
    'ADIGO Mart hướng đến kết nối không gian bán lẻ trực tiếp với trải nghiệm mua sắm số, mang đến sự thuận tiện trong việc khám phá, lựa chọn và tiếp cận sản phẩm.',
  assets: {
    storeInterior: '/src/assets/images/adigo_mart_concept_1795602232694.webp',
    posterProduce: '/src/assets/images/adigo_marketplace_variety_1795602233383.webp',
    shopperPortrait: '/src/assets/images/adigo_consumer_lifestyle_1795602233057.webp',
  },
  featureChips: [
    {
      id: 'in-store',
      line1: 'Khám phá sản phẩm',
      line2: 'tại cửa hàng',
      icon: 'store',
    },
    {
      id: 'locator',
      line1: 'Tìm điểm bán',
      line2: 'phù hợp',
      icon: 'pin',
    },
    {
      id: 'online-order',
      line1: 'Đặt hàng',
      line2: 'trực tuyến',
      icon: 'cart',
    },
    {
      id: 'member',
      line1: 'Ưu đãi và',
      line2: 'thành viên',
      icon: 'crown',
    },
  ] as MartFeatureChipConfig[],
  experiences: [
    {
      id: 'store',
      label: 'Khám phá tại cửa hàng',
      mapTitle: 'ADIGO Mart',
      mapSubtitle: 'Khám phá điểm bán phù hợp',
      relatedChips: ['in-store', 'locator'],
    },
    {
      id: 'online',
      label: 'Đặt hàng trực tuyến',
      mapTitle: 'Đặt hàng trực tuyến',
      mapSubtitle: 'Kết nối sản phẩm và giỏ hàng',
      relatedChips: ['online-order'],
    },
    {
      id: 'fulfillment',
      label: 'Nhận hàng linh hoạt',
      mapTitle: 'Nhận hàng linh hoạt',
      mapSubtitle: 'Tại điểm bán hoặc giao nhận',
      relatedChips: ['locator', 'online-order'],
    },
    {
      id: 'connected',
      label: 'Trải nghiệm liền mạch',
      mapTitle: 'Trải nghiệm liền mạch',
      mapSubtitle: 'Đồng bộ tài khoản & thành viên',
      relatedChips: ['member'],
    },
  ] as MartExperienceTab[],
  demoStores: [
    {
      id: 'mart-01',
      name: 'ADIGO Mart – Điểm bán chọn lọc 01',
      areaLabel: 'Không gian trưng bày & mua sắm',
      note: 'Kết nối cửa hàng & ứng dụng ADIGO',
    },
    {
      id: 'mart-02',
      name: 'ADIGO Mart – Điểm bán liên kết 02',
      areaLabel: 'Điểm bán đối tác chọn lọc',
      note: 'Tra cứu nhanh sản phẩm tại điểm bán',
    },
    {
      id: 'mart-03',
      name: 'ADIGO Mart – Điểm bán mở rộng 03',
      areaLabel: 'Mô hình bán lẻ đa kênh',
      note: 'Đặt trước trực tuyến, nhận hàng linh hoạt',
    },
  ] as MartDemoStoreItem[],
  demoProducts: [
    {
      id: 'mp-mart-1',
      name: 'Thịt gà ta đóng khay',
      unit: 'Khay 1 kg',
      category: 'meat-eggs',
      visual: 'chicken',
    },
    {
      id: 'mp-mart-2',
      name: 'Trứng gà ta',
      unit: 'Vỉ 10 quả',
      category: 'meat-eggs',
      visual: 'eggs',
    },
    {
      id: 'mp-mart-3',
      name: 'Rau củ tươi theo mùa',
      unit: 'Gói 400 g',
      category: 'veggies',
      visual: 'veggies',
    },
    {
      id: 'mp-mart-4',
      name: 'Cam sành chọn lọc',
      unit: 'Túi 1 kg',
      category: 'fruits',
      visual: 'orange',
    },
  ] as MartDemoProductItem[],
  fulfillmentOptions: [
    {
      id: 'pickup',
      title: 'Nhận tại điểm bán',
      description: 'Đặt trước trên ứng dụng và nhận sản phẩm tại điểm bán phù hợp.',
    },
    {
      id: 'delivery',
      title: 'Giao nhận theo khu vực',
      description: 'Lựa chọn phương thức giao nhận phù hợp theo phạm vi phục vụ.',
    },
  ],
  preparationSteps: [
    { id: 's1', label: 'Tiếp nhận thông tin đơn hàng', active: true },
    { id: 's2', label: 'Chuẩn bị sản phẩm tại điểm bán', active: true },
    { id: 's3', label: 'Sẵn sàng bàn giao theo lựa chọn', active: false },
  ],
  connectedUtilities: [
    {
      id: 'cu-1',
      title: 'Kết nối tài khoản ADIGO',
      desc: 'Đồng bộ sản phẩm quan tâm và lịch sử đơn hàng thuận tiện.',
    },
    {
      id: 'cu-2',
      title: 'Tiện ích thành viên hệ sinh thái',
      desc: 'Trải nghiệm thống nhất giữa nền tảng số và điểm bán trực tiếp.',
    },
  ],
};
