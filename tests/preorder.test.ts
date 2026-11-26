import { test } from 'node:test';
import assert from 'node:assert/strict';
import worker from '../worker';
import { submitPreorder } from '../src/services/preorderService';

const env = {
  ASSETS: { fetch: async () => new Response('static asset') },
};
const values = {
  quantity: 1, customerName: 'Khách kiểm thử', phone: '0900000000',
  address: 'Địa chỉ kiểm thử', deliveryMethod: 'Giao hàng tận nơi' as const,
  note: '', privacyAccepted: true,
};
const payload = { ...values, requestId: 'adg_test_preorder_001' };
function post(body: unknown) {
  return new Request('https://example.test/api/preorders', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  });
}

test('Cloudflare routes return JSON instead of the SPA HTML', async () => {
  const health = await worker.fetch(new Request('https://example.test/api/preorders/health'), env);
  assert.deepEqual(await health.json(), { ok: true, configured: false });
  assert.equal(health.headers.get('Cache-Control'), 'no-store');
  assert.equal((await worker.fetch(new Request('https://example.test/api/preorders'), env)).status, 405);
  assert.equal((await worker.fetch(new Request('https://example.test/api/unknown'), env)).status, 404);
  assert.equal(await (await worker.fetch(new Request('https://example.test/'), env)).text(), 'static asset');
});

test('invalid, oversized and unconfigured requests fail without creating an order', async () => {
  assert.equal((await worker.fetch(post({}), env)).status, 400);
  assert.equal((await worker.fetch(post({ text: 'x'.repeat(17000) }), env)).status, 413);
  const result = await worker.fetch(post(payload), env);
  assert.equal(result.status, 503);
  assert.equal((await result.json()).error, 'GOOGLE_SHEETS_NOT_CONFIGURED');
});

test('confirmed sheet writes return an order code and retries do not write twice', async () => {
  const originalFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async (_input, init) => {
    calls++;
    assert.equal(JSON.parse(String(init?.body)).webhookSecret, 'test-secret');
    return Response.json({ ok: true, orderCode: 'TEST-001', registeredAt: '2026-11-26', status: 'Chờ xác nhận' });
  };
  try {
    const configured = { ...env, GOOGLE_APPS_SCRIPT_WEBHOOK_URL: 'https://script.google.com/macros/s/test/exec', PREORDER_WEBHOOK_SECRET: 'test-secret' };
    const first = await worker.fetch(post(payload), configured);
    assert.equal(first.status, 200);
    assert.equal((await first.json()).orderCode, 'TEST-001');
    const retry = await worker.fetch(post(payload), configured);
    assert.equal((await retry.json()).duplicate, true);
    assert.equal(calls, 1);
  } finally { globalThis.fetch = originalFetch; }
});

test('frontend handles HTML fallback and does not accept an empty success response', async () => {
  const originalFetch = globalThis.fetch;
  try {
    globalThis.fetch = async () => new Response('<html>SPA</html>', { headers: { 'Content-Type': 'text/html' } });
    const html = await submitPreorder(values, 'adg_test_frontend');
    assert.equal(html.ok, false);
    if (!html.ok) assert.equal(html.error, 'API_UNAVAILABLE');
    globalThis.fetch = async () => Response.json({ ok: true });
    assert.equal((await submitPreorder(values, 'adg_test_frontend')).ok, false);
  } finally { globalThis.fetch = originalFetch; }
});
