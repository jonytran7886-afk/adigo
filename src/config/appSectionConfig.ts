export type AppTabId =
  | 'home'
  | 'discover'
  | 'product'
  | 'cart'
  | 'orders'
  | 'membership';

export type SideCardId = 'discovery' | 'shopping' | 'tracking' | 'membership';

export interface AppTabConfig {
  id: AppTabId;
  label: string;
  relatedCard: SideCardId | null;
}

export const APP_SECTION_CONFIG = {
  sectionId: 'app',
  eyebrow: 'ADIGO App',
  headlinePrefix: 'Mọi trải nghiệm ',
  headlineHighlight: 'trong tầm tay.',
  description:
    'Từ khám phá sản phẩm, lựa chọn mua sắm đến theo dõi đơn hàng, ADIGO hướng đến kết nối những trải nghiệm thiết yếu trong một ứng dụng duy nhất.',
  tabs: [
    { id: 'home', label: 'Trang chủ', relatedCard: null },
    { id: 'discover', label: 'Khám phá', relatedCard: 'discovery' },
    { id: 'product', label: 'Sản phẩm', relatedCard: 'shopping' },
    { id: 'cart', label: 'Giỏ hàng', relatedCard: 'shopping' },
    { id: 'orders', label: 'Đơn hàng', relatedCard: 'tracking' },
    { id: 'membership', label: 'Thành viên', relatedCard: 'membership' },
  ] as AppTabConfig[],
  sideCards: {
    discovery: {
      id: 'discovery' as SideCardId,
      title: 'Khám phá theo nhu cầu',
      description: 'Tìm kiếm và lựa chọn sản phẩm phù hợp với bạn.',
    },
    shopping: {
      id: 'shopping' as SideCardId,
      title: 'Mua sắm dễ dàng',
      description: 'Lựa chọn sản phẩm và đặt hàng ngay trên ứng dụng.',
    },
    tracking: {
      id: 'tracking' as SideCardId,
      title: 'Theo dõi đơn hàng',
      description: 'Nắm bắt thông tin và trạng thái đơn hàng thuận tiện.',
    },
    membership: {
      id: 'membership' as SideCardId,
      title: 'Thêm nhiều tiện ích',
      description: 'Khám phá ưu đãi và những trải nghiệm dành cho thành viên.',
    },
  },
  homeCategories: [
    { id: 'meat', label: 'Thịt', visual: 'pork' as const },
    { id: 'veggies', label: 'Rau củ', visual: 'veggies' as const },
    { id: 'fruits', label: 'Trái cây', visual: 'orange' as const },
    { id: 'eggs', label: 'Trứng', visual: 'eggs' as const },
    { id: 'agri', label: 'Nông sản', visual: 'agri' as const },
    { id: 'processed', label: 'Chế biến', visual: 'processed' as const },
  ],
  cartInitialItems: [
    { id: 'c1', name: 'Thịt gà ta', unit: 'Khay 1 kg', price: 129000, qty: 1, visual: 'chicken' as const },
    { id: 'c2', name: 'Trứng gà', unit: 'Vỉ 10 quả', price: 39000, qty: 1, visual: 'eggs' as const },
    { id: 'c3', name: 'Rau củ tươi', unit: 'Gói 400 g', price: 28000, qty: 1, visual: 'veggies' as const },
    { id: 'c4', name: 'Cam tươi', unit: 'Túi 1 kg', price: 45000, qty: 1, visual: 'orange' as const },
  ],
  orderTimeline: [
    { id: 'received', label: 'Tiếp nhận đơn hàng', time: '08:20', done: true },
    { id: 'preparing', label: 'Chuẩn bị sản phẩm', time: '09:15', done: true },
    { id: 'packing', label: 'Đóng gói', time: '10:05', done: true },
    { id: 'shipping', label: 'Giao nhận', time: 'Đang thực hiện', done: true },
    { id: 'completed', label: 'Hoàn thành', time: 'Dự kiến trong ngày', done: false },
  ],
};
