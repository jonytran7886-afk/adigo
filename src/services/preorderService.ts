import { CAMPAIGN_CONFIG } from '../config/campaignConfig';

export interface PreorderFormValues {
  quantity: number;
  customerName: string;
  phone: string;
  address: string;
  deliveryMethod: 'Giao hàng tận nơi' | 'Nhận tại điểm bán' | 'Liên hệ để xác nhận';
  note: string;
  privacyAccepted: boolean;
  companyWebsite?: string;
}

export interface PreorderSubmitSuccess {
  ok: true;
  orderCode: string;
  registeredAt: string;
  status: string;
  duplicate?: boolean;
}

export interface PreorderSubmitFailure {
  ok: false;
  error: string;
  message: string;
  fieldErrors?: Record<string, string>;
}

export interface UtmMetadata {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
}

export function extractUtmMetadata(): UtmMetadata {
  if (typeof window === 'undefined') {
    return { utmSource: '', utmMedium: '', utmCampaign: '' };
  }
  try {
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: (params.get('utm_source') || '').trim().slice(0, 80),
      utmMedium: (params.get('utm_medium') || '').trim().slice(0, 80),
      utmCampaign: (params.get('utm_campaign') || '').trim().slice(0, 80),
    };
  } catch {
    return { utmSource: '', utmMedium: '', utmCampaign: '' };
  }
}

export function generateRequestId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `adg_${crypto.randomUUID().replace(/-/g, '')}`;
  }
  return `adg_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 12)}`;
}

export function normalizePhoneInput(raw: string): string {
  const cleaned = raw.trim().replace(/[\s.-]/g, '');
  if (cleaned.startsWith('+84')) {
    return `0${cleaned.slice(3)}`;
  }
  if (cleaned.startsWith('84') && cleaned.length === 11) {
    return `0${cleaned.slice(2)}`;
  }
  return cleaned;
}

export function validatePreorderForm(
  values: PreorderFormValues
): Record<string, string> {
  const errors: Record<string, string> = {};

  const trimmedName = values.customerName.trim();
  if (trimmedName.length < 2) {
    errors.customerName = 'Vui lòng nhập họ và tên (tối thiểu 2 ký tự).';
  } else if (trimmedName.length > 80) {
    errors.customerName = 'Họ và tên không vượt quá 80 ký tự.';
  }

  const normalizedPhone = normalizePhoneInput(values.phone);
  if (!/^0(3|5|7|8|9)\d{8}$/.test(normalizedPhone)) {
    errors.phone =
      'Vui lòng nhập số điện thoại di động Việt Nam hợp lệ (10 số, bắt đầu bằng 03, 05, 07, 08 hoặc 09).';
  }

  const trimmedAddress = values.address.trim();
  if (trimmedAddress.length < 5) {
    errors.address = 'Vui lòng nhập xã/phường, quận/huyện, tỉnh/thành nhận hàng.';
  } else if (trimmedAddress.length > 240) {
    errors.address = 'Địa chỉ nhận hàng không vượt quá 240 ký tự.';
  }

  if (
    !Number.isFinite(values.quantity) ||
    !Number.isInteger(values.quantity) ||
    values.quantity < 1 ||
    values.quantity > CAMPAIGN_CONFIG.product.maxQuantityPerOrder
  ) {
    errors.quantity = `Số lượng phải là số nguyên từ 1 đến ${CAMPAIGN_CONFIG.product.maxQuantityPerOrder} ${CAMPAIGN_CONFIG.product.unit}.`;
  }

  if (!values.privacyAccepted) {
    errors.privacyAccepted =
      'Vui lòng đồng ý với Chính sách bảo mật để xác nhận đặt trước.';
  }

  return errors;
}

export async function submitPreorder(
  values: PreorderFormValues,
  requestId: string,
  entryPoint?: string
): Promise<PreorderSubmitSuccess | PreorderSubmitFailure> {
  const utm = extractUtmMetadata();

  const body = {
    requestId,
    campaignId: CAMPAIGN_CONFIG.campaignId,
    productId: CAMPAIGN_CONFIG.product.id,
    productName: CAMPAIGN_CONFIG.product.name,
    productSpec: CAMPAIGN_CONFIG.product.spec,
    quantity: values.quantity,
    unit: CAMPAIGN_CONFIG.product.unit,
    customerName: values.customerName.trim(),
    phone: normalizePhoneInput(values.phone),
    address: values.address.trim(),
    deliveryMethod: values.deliveryMethod,
    note: values.note.trim(),
    source: CAMPAIGN_CONFIG.sourceName,
    entryPoint: (entryPoint || '').trim(),
    utmSource: utm.utmSource,
    utmMedium: utm.utmMedium,
    utmCampaign: utm.utmCampaign,
    privacyAccepted: values.privacyAccepted,
    companyWebsite: values.companyWebsite || '',
  };

  try {
    const response = await fetch(CAMPAIGN_CONFIG.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = (await response.json().catch(() => null)) as
      | PreorderSubmitSuccess
      | PreorderSubmitFailure
      | null;

    if (!response.ok || !data || data.ok !== true) {
      return {
        ok: false,
        error: data && !data.ok ? data.error : 'REQUEST_FAILED',
        message:
          data && !data.ok && data.message
            ? data.message
            : 'Chưa thể ghi nhận yêu cầu đặt trước lúc này. Vui lòng thử lại sau.',
        fieldErrors: data && !data.ok ? data.fieldErrors : undefined,
      };
    }

    return data;
  } catch {
    return {
      ok: false,
      error: 'NETWORK_ERROR',
      message:
        'Kết nối mạng bị gián đoạn. Thông tin bạn đã nhập vẫn được giữ nguyên, vui lòng bấm gửi lại.',
    };
  }
}
