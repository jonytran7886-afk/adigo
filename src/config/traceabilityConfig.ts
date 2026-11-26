export type TraceabilityStageId = 'farm' | 'packaging' | 'shipping' | 'store';

export type TraceabilityChipId = 'scan' | 'journey' | 'transparent' | 'trust';

export interface TraceabilityStageConfig {
  id: TraceabilityStageId;
  label: string;
  shortLabel: string;
  panelTitle: string;
  subtitle: string;
  batchLabel: string;
  highlights: { label: string; value: string }[];
  relatedChips: TraceabilityChipId[];
}

export interface TraceabilityChipConfig {
  id: TraceabilityChipId;
  line1: string;
  line2: string;
  icon: 'scan' | 'route' | 'fileCheck' | 'shield';
}

export const TRACEABILITY_CONFIG = {
  sectionId: 'traceability',
  eyebrow: 'Truy xuất nguồn gốc',
  headlineLine1: 'Minh bạch nguồn gốc,',
  headlineLine2: 'yên tâm lựa chọn.',
  description:
    'ADIGO kết nối thông tin sản phẩm với dữ liệu nguồn gốc và hành trình từ vùng sản xuất đến điểm bán, giúp người tiêu dùng hiểu rõ hơn về sản phẩm mình lựa chọn.',
  featureChips: [
    {
      id: 'scan',
      line1: 'Quét mã',
      line2: 'truy xuất',
      icon: 'scan',
    },
    {
      id: 'journey',
      line1: 'Theo dõi',
      line2: 'hành trình',
      icon: 'route',
    },
    {
      id: 'transparent',
      line1: 'Thông tin',
      line2: 'minh bạch',
      icon: 'fileCheck',
    },
    {
      id: 'trust',
      line1: 'Gia tăng',
      line2: 'niềm tin',
      icon: 'shield',
    },
  ] as TraceabilityChipConfig[],
  stages: [
    {
      id: 'farm',
      label: 'Vùng sản xuất',
      shortLabel: 'Vùng sản xuất',
      panelTitle: 'Thông tin vùng sản xuất',
      subtitle: 'Dữ liệu minh họa về đơn vị sản xuất và lô hàng',
      batchLabel: 'Mã lô minh họa: ADG-MH01',
      highlights: [
        { label: 'Đơn vị sản xuất', value: 'Nhà sản xuất liên kết (Minh họa)' },
        { label: 'Khu vực sản xuất', value: 'Vùng sản xuất đối tác (Minh họa)' },
        { label: 'Mã lô tham chiếu', value: 'ADG-MH01 (Dữ liệu minh họa)' },
      ],
      relatedChips: ['scan', 'transparent'],
    },
    {
      id: 'packaging',
      label: 'Sơ chế & đóng gói',
      shortLabel: 'Đóng gói',
      panelTitle: 'Sơ chế & đóng gói',
      subtitle: 'Thông tin xử lý, đóng gói và gắn tem truy xuất',
      batchLabel: 'Quy cách minh họa: Đóng khay giữ lạnh',
      highlights: [
        { label: 'Quy trình xử lý', value: 'Sơ chế & đóng gói theo lô (Minh họa)' },
        { label: 'Ngày đóng gói', value: 'Theo thông tin ghi nhận trên tem' },
        { label: 'Định danh bao bì', value: 'Tem mã QR minh họa trên bao bì' },
      ],
      relatedChips: ['transparent', 'trust'],
    },
    {
      id: 'shipping',
      label: 'Vận chuyển',
      shortLabel: 'Vận chuyển',
      panelTitle: 'Hành trình vận chuyển',
      subtitle: 'Thông tin kết nối từ nơi đóng gói đến điểm bán',
      batchLabel: 'Trạng thái minh họa: Luân chuyển theo lô',
      highlights: [
        { label: 'Tuyến kết nối', value: 'Điểm đóng gói → Điểm bán (Minh họa)' },
        { label: 'Hình thức luân chuyển', value: 'Bảo quản phù hợp nhóm sản phẩm' },
        { label: 'Cập nhật hành trình', value: 'Ghi nhận theo dữ liệu được cung cấp' },
      ],
      relatedChips: ['journey', 'transparent'],
    },
    {
      id: 'store',
      label: 'Điểm bán',
      shortLabel: 'Điểm bán',
      panelTitle: 'Thông tin điểm bán',
      subtitle: 'Kết nối sản phẩm tại điểm bán và trên ứng dụng ADIGO',
      batchLabel: 'Kênh hiển thị: ADIGO App & Điểm bán',
      highlights: [
        { label: 'Đơn vị phân phối', value: 'Điểm bán minh họa ADIGO Mart' },
        { label: 'Thông tin sản phẩm', value: 'Hiển thị đồng bộ qua mã truy xuất' },
        { label: 'Trải nghiệm người mua', value: 'Tra cứu nhanh trước khi lựa chọn' },
      ],
      relatedChips: ['scan', 'trust'],
    },
  ] as TraceabilityStageConfig[],
  demoProduct: {
    name: 'Thịt bò đóng khay (Minh họa)',
    unit: 'Khay 500 g · Dữ liệu minh họa',
  },
};
