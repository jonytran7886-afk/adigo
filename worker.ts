import {
  handlePreorderSubmission,
  isGoogleSheetsConfigured,
  type PreorderEnvironment,
} from './server/preorderService';

interface WorkerEnvironment extends PreorderEnvironment {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } });
}

export default {
  async fetch(request: Request, env: WorkerEnvironment): Promise<Response> {
    const pathname = new URL(request.url).pathname;
    if (!pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    if (pathname === '/api/preorders/health' && request.method === 'GET') {
      return json({ ok: true, configured: isGoogleSheetsConfigured(env) });
    }
    if (pathname !== '/api/preorders') {
      return json({ ok: false, error: 'NOT_FOUND', message: 'Không tìm thấy API.' }, 404);
    }
    if (request.method !== 'POST') {
      return json({ ok: false, error: 'METHOD_NOT_ALLOWED', message: 'Chỉ hỗ trợ phương thức POST.' }, 405, { Allow: 'POST' });
    }
    if (!request.headers.get('Content-Type')?.includes('application/json')) {
      return json({ ok: false, error: 'INVALID_CONTENT_TYPE', message: 'Dữ liệu đặt trước không hợp lệ.' }, 415);
    }
    // Limit the stream itself; do not trust Content-Length supplied by a client.
    const reader = request.body?.getReader();
    if (!reader) return json({ ok: false, error: 'INVALID_PAYLOAD', message: 'Thiếu dữ liệu đặt trước.' }, 400);
    let body: unknown;
    try {
      const chunks: Uint8Array[] = [];
      let size = 0;
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > 16384) {
          await reader.cancel();
          return json({ ok: false, error: 'PAYLOAD_TOO_LARGE', message: 'Dữ liệu đặt trước quá dài.' }, 413);
        }
        chunks.push(value);
      }
      const bytes = new Uint8Array(size);
      let offset = 0;
      for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
      body = JSON.parse(new TextDecoder().decode(bytes));
    } catch {
      return json({ ok: false, error: 'INVALID_JSON', message: 'Dữ liệu đặt trước không hợp lệ.' }, 400);
    }
    const result = await handlePreorderSubmission(body, request.headers.get('CF-Connecting-IP') || 'unknown', env);
    return json(result.body, result.statusCode);
  },
};
