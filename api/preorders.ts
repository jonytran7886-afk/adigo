import { handlePreorderSubmission } from '../server/preorderService.ts';

interface ServerlessRequest {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
}

interface ServerlessResponse {
  status: (code: number) => ServerlessResponse;
  json: (data: unknown) => void;
  setHeader?: (name: string, value: string) => void;
}

/**
 * Portable Serverless Function handler (compatible with Vercel / Node serverless runtimes)
 * for static-host deployments that invoke /api/preorders without running server.ts.
 */
export default async function handler(
  req: ServerlessRequest,
  res: ServerlessResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader?.('Allow', 'POST');
    res.status(405).json({
      ok: false,
      error: 'METHOD_NOT_ALLOWED',
      message: 'Chỉ hỗ trợ phương thức POST.',
    });
    return;
  }

  let parsedBody = req.body;
  if (typeof req.body === 'string') {
    try {
      parsedBody = JSON.parse(req.body);
    } catch {
      parsedBody = null;
    }
  }

  const forwarded = req.headers?.['x-forwarded-for'];
  const clientIp = Array.isArray(forwarded)
    ? forwarded[0]
    : typeof forwarded === 'string'
    ? forwarded.split(',')[0]
    : 'unknown';

  const result = await handlePreorderSubmission(parsedBody, clientIp.trim());
  res.status(result.statusCode).json(result.body);
}
