export interface PreorderRequestPayload {
  requestId: string;
  campaignId: string;
  productId: string;
  productName: string;
  productSpec: string;
  quantity: number;
  unit: string;
  customerName: string;
  phone: string;
  address: string;
  deliveryMethod: string;
  note?: string;
  source?: string;
  entryPoint?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  privacyAccepted: boolean;
  companyWebsite?: string;
}

export interface PreorderSuccessResult {
  ok: true;
  orderCode: string;
  registeredAt: string;
  status: string;
  duplicate?: boolean;
}

export interface PreorderErrorResult {
  ok: false;
  error: string;
  message: string;
  fieldErrors?: Record<string, string>;
}

const ALLOWED_DELIVERY_METHODS = new Set([
  'Giao hàng tận nơi',
  'Nhận tại điểm bán',
  'Liên hệ để xác nhận',
]);

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
export interface PreorderEnvironment {
  GOOGLE_APPS_SCRIPT_WEBHOOK_URL?: string;
  PREORDER_WEBHOOK_SECRET?: string;
  CAMPAIGN_PREORDER_RATE_LIMIT?: string;
}
const IDEMPOTENCY_TTL_MS = 30 * 60 * 1000;

interface RateEntry {
  timestamps: number[];
}

interface IdempotencyEntry {
  state: 'pending' | 'completed';
  expiresAt: number;
  result?: PreorderSuccessResult;
  promise?: Promise<{ statusCode: number; body: PreorderSuccessResult | PreorderErrorResult }>;
}

const rateBuckets = new Map<string, RateEntry>();
const idempotencyStore = new Map<string, IdempotencyEntry>();

function cleanText(raw: unknown, maxLen: number): string {
  const str = String(raw ?? '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return str.length > maxLen ? str.slice(0, maxLen) : str;
}

export function sanitizeSheetFormula(value: string): string {
  if (/^[=+\-@\t\r]/.test(value)) {
    return `'${value}`;
  }
  return value;
}

export function normalizeVietnamesePhone(raw: unknown): string {
  const stripped = cleanText(raw, 24).replace(/[\s.-]/g, '');
  if (stripped.startsWith('+84')) {
    return `0${stripped.slice(3)}`;
  }
  if (stripped.startsWith('84') && stripped.length === 11) {
    return `0${stripped.slice(2)}`;
  }
  return stripped;
}

export function isValidVietnamesePhone(normalized: string): boolean {
  return /^0(3|5|7|8|9)\d{8}$/.test(normalized);
}

function checkRateLimit(clientIp: string, limit: number): boolean {
  const now = Date.now();
  const key = clientIp || 'unknown';
  const current = rateBuckets.get(key) || { timestamps: [] };
  const recent = current.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= limit) {
    rateBuckets.set(key, { timestamps: recent });
    return false;
  }

  recent.push(now);
  rateBuckets.set(key, { timestamps: recent });

  if (rateBuckets.size > 500) {
    for (const [k, v] of rateBuckets.entries()) {
      if (v.timestamps.every((ts) => now - ts >= RATE_LIMIT_WINDOW_MS)) {
        rateBuckets.delete(k);
      }
    }
  }

  return true;
}

function pruneExpiredIdempotency(): void {
  const now = Date.now();
  for (const [key, entry] of idempotencyStore.entries()) {
    if (entry.expiresAt <= now) {
      idempotencyStore.delete(key);
    }
  }
}

export function validatePreorderPayload(
  rawBody: unknown
):
  | { ok: true; data: PreorderRequestPayload }
  | { ok: false; error: PreorderErrorResult } {
  if (!rawBody || typeof rawBody !== 'object') {
    return {
      ok: false,
      error: {
        ok: false,
        error: 'INVALID_PAYLOAD',
        message: 'Dữ liệu đặt trước không hợp lệ.',
      },
    };
  }

  const body = rawBody as Record<string, unknown>;

  // Honeypot field check against automated bots
  if (cleanText(body.companyWebsite, 100).length > 0) {
    return {
      ok: false,
      error: {
        ok: false,
        error: 'SPAM_REJECTED',
        message: 'Yêu cầu không hợp lệ.',
      },
    };
  }

  const fieldErrors: Record<string, string> = {};

  const requestId = cleanText(body.requestId, 80);
  if (!/^[a-zA-Z0-9_-]{10,80}$/.test(requestId)) {
    fieldErrors.requestId = 'Mã định danh yêu cầu không hợp lệ.';
  }

  const customerName = cleanText(body.customerName, 80);
  if (customerName.length < 2) {
    fieldErrors.customerName = 'Vui lòng nhập họ và tên (tối thiểu 2 ký tự).';
  }

  const normalizedPhone = normalizeVietnamesePhone(body.phone);
  if (!isValidVietnamesePhone(normalizedPhone)) {
    fieldErrors.phone =
      'Vui lòng nhập số điện thoại di động Việt Nam hợp lệ (10 số, bắt đầu bằng 03, 05, 07, 08 hoặc 09).';
  }

  const address = cleanText(body.address, 240);
  if (address.length < 5) {
    fieldErrors.address = 'Vui lòng nhập khu vực hoặc địa chỉ nhận hàng chi tiết hơn.';
  }

  const quantity = Number(body.quantity);
  if (
    !Number.isFinite(quantity) ||
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    quantity > 50
  ) {
    fieldErrors.quantity = 'Số lượng phải là số nguyên từ 1 đến 50 con.';
  }

  const deliveryMethod = cleanText(body.deliveryMethod, 60);
  if (!ALLOWED_DELIVERY_METHODS.has(deliveryMethod)) {
    fieldErrors.deliveryMethod = 'Vui lòng chọn hình thức nhận hàng hợp lệ.';
  }

  if (body.privacyAccepted !== true) {
    fieldErrors.privacyAccepted =
      'Vui lòng đồng ý với Chính sách bảo mật để tiếp tục đặt trước.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    const firstMsg = Object.values(fieldErrors)[0];
    return {
      ok: false,
      error: {
        ok: false,
        error: 'VALIDATION_ERROR',
        message: firstMsg,
        fieldErrors,
      },
    };
  }

  return {
    ok: true,
    data: {
      requestId,
      campaignId: cleanText(body.campaignId, 40) || 'CHICKEN-PREORDER',
      productId: cleanText(body.productId, 40) || 'CHICKEN-WHOLE',
      productName: cleanText(body.productName, 80) || 'Gà nguyên con',
      productSpec: cleanText(body.productSpec, 60) || 'Nguyên con',
      quantity,
      unit: cleanText(body.unit, 20) || 'con',
      customerName,
      phone: normalizedPhone,
      address,
      deliveryMethod,
      note: cleanText(body.note, 300),
      source: cleanText(body.source, 60) || 'ADIGO Landing Page',
      entryPoint: cleanText(body.entryPoint, 50) || 'direct',
      utmSource: cleanText(body.utmSource, 80),
      utmMedium: cleanText(body.utmMedium, 80),
      utmCampaign: cleanText(body.utmCampaign, 80),
      privacyAccepted: true,
    },
  };
}

export function isGoogleSheetsConfigured(env: PreorderEnvironment = process.env): boolean {
  const url = (env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL || '').trim();
  return /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(url)
    && Boolean(env.PREORDER_WEBHOOK_SECRET?.trim());
}

export async function handlePreorderSubmission(
  rawBody: unknown,
  clientIp: string,
  env: PreorderEnvironment = process.env
): Promise<{ statusCode: number; body: PreorderSuccessResult | PreorderErrorResult }> {
  const configuredLimit = Number(env.CAMPAIGN_PREORDER_RATE_LIMIT || '10');
  const limit = Number.isFinite(configuredLimit) && configuredLimit > 0 ? configuredLimit : 10;
  if (!checkRateLimit(clientIp, limit)) {
    return {
      statusCode: 429,
      body: {
        ok: false,
        error: 'RATE_LIMITED',
        message: 'Bạn thao tác quá nhanh. Vui lòng đợi ít phút rồi thử lại.',
      },
    };
  }

  const validated = validatePreorderPayload(rawBody);
  if (validated.ok === false) {
    return {
      statusCode: 400,
      body: validated.error,
    };
  }

  const webhookUrl = (env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL || '').trim();
  if (!isGoogleSheetsConfigured(env)) {
    return {
      statusCode: 503,
      body: {
        ok: false,
        error: 'GOOGLE_SHEETS_NOT_CONFIGURED',
        message:
          'Hệ thống đặt trước đang được thiết lập. Vui lòng thử lại sau.',
      },
    };
  }

  pruneExpiredIdempotency();
  const key = validated.data.requestId;
  const existing = idempotencyStore.get(key);
  if (existing?.state === 'completed' && existing.result) {
    return {
      statusCode: 200,
      body: {
        ...existing.result,
        duplicate: true,
      },
    };
  }
  if (existing?.state === 'pending' && existing.promise) {
    return existing.promise;
  }

  const workPromise = (async (): Promise<{
    statusCode: number;
    body: PreorderSuccessResult | PreorderErrorResult;
  }> => {
    try {
      const payloadForSheet = {
        ...validated.data,
        customerName: sanitizeSheetFormula(validated.data.customerName),
        phone: sanitizeSheetFormula(validated.data.phone),
        address: sanitizeSheetFormula(validated.data.address),
        note: sanitizeSheetFormula(validated.data.note || ''),
        entryPoint: sanitizeSheetFormula(validated.data.entryPoint || ''),
        utmSource: sanitizeSheetFormula(validated.data.utmSource || ''),
        utmMedium: sanitizeSheetFormula(validated.data.utmMedium || ''),
        utmCampaign: sanitizeSheetFormula(validated.data.utmCampaign || ''),
        webhookSecret: (env.PREORDER_WEBHOOK_SECRET || '').trim(),
      };

      const upstreamRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payloadForSheet),
        redirect: 'follow',
        signal: AbortSignal.timeout(15000),
      });

      const responseText = await upstreamRes.text();
      let parsed: Record<string, unknown> | null = null;
      try {
        parsed = JSON.parse(responseText) as Record<string, unknown>;
      } catch {
        parsed = null;
      }

      if (!upstreamRes.ok || !parsed || parsed.ok !== true || !parsed.orderCode) {
        idempotencyStore.delete(key);
        const upstreamMessage =
          typeof parsed?.message === 'string' && parsed.message
            ? parsed.message
            : 'Không thể lưu đơn đặt trước vào Google Sheets. Vui lòng thử lại sau.';
        return {
          statusCode: 502,
          body: {
            ok: false,
            error:
              typeof parsed?.error === 'string'
                ? parsed.error
                : 'GOOGLE_SHEETS_WRITE_FAILED',
            message: upstreamMessage,
          },
        };
      }

      const successBody: PreorderSuccessResult = {
        ok: true,
        orderCode: String(parsed.orderCode),
        registeredAt: String(parsed.registeredAt || ''),
        status: String(parsed.status || 'Chờ xác nhận'),
        duplicate: Boolean(parsed.duplicate),
      };

      idempotencyStore.set(key, {
        state: 'completed',
        expiresAt: Date.now() + IDEMPOTENCY_TTL_MS,
        result: successBody,
      });

      return {
        statusCode: 200,
        body: successBody,
      };
    } catch {
      idempotencyStore.delete(key);
      return {
        statusCode: 502,
        body: {
          ok: false,
          error: 'GOOGLE_SHEETS_UNREACHABLE',
          message:
            'Kết nối tới máy chủ lưu trữ Google Sheets bị gián đoạn. Thông tin của bạn đã được giữ nguyên, vui lòng bấm gửi lại.',
        },
      };
    }
  })();

  idempotencyStore.set(key, {
    state: 'pending',
    expiresAt: Date.now() + 60_000,
    promise: workPromise,
  });

  return workPromise;
}
