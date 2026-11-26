import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import http from 'http';
import path from 'path';
import {
  handlePreorderSubmission,
  isGoogleSheetsConfigured,
} from './server/preorderService.ts';

const PORT = Number(process.env.PORT || 3000);
const IS_PROD = process.env.NODE_ENV === 'production';
const IS_HMR_DISABLED =
  process.env.DISABLE_HMR === 'true' ||
  Boolean(process.env.APPLET_ID || process.env.K_SERVICE);

const NOOP_VITE_CLIENT = `const sheetsMap = new Map();
export function updateStyle(id, content) {
  if (typeof document === 'undefined') return;
  let style = sheetsMap.get(id);
  if (!style) {
    style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.setAttribute('data-vite-dev-id', id);
    style.textContent = content;
    document.head.appendChild(style);
    sheetsMap.set(id, style);
  } else if (style.textContent !== content) {
    style.textContent = content;
  }
}
export function removeStyle(id) {
  const style = sheetsMap.get(id);
  if (style) {
    style.remove();
    sheetsMap.delete(id);
  }
}
export function createHotContext() {
  return {
    accept() {},
    dispose() {},
    prune() {},
    invalidate() {},
    on() {},
    off() {},
    send() {},
    data: {},
  };
}
export function injectQuery(url) {
  return url;
}
export class ErrorOverlay extends HTMLElement {}
`;

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  app.set('trust proxy', true);
  app.use(express.json({ limit: '16kb' }));

  app.get('/api/preorders/health', (_req, res) => {
    res.json({
      ok: true,
      configured: isGoogleSheetsConfigured(),
    });
  });

  app.post('/api/preorders', async (req, res) => {
    const forwardedFor = req.headers['x-forwarded-for'];
    const rawIp = Array.isArray(forwardedFor)
      ? forwardedFor[0]
      : typeof forwardedFor === 'string'
      ? forwardedFor.split(',')[0]
      : req.ip;

    const result = await handlePreorderSubmission(
      req.body,
      (rawIp || 'unknown').trim()
    );
    res.status(result.statusCode).json(result.body);
  });

  if (!IS_PROD) {
    if (IS_HMR_DISABLED) {
      app.get('/@vite/client', (_req, res) => {
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        res.setHeader('Cache-Control', 'no-store');
        res.send(NOOP_VITE_CLIENT);
      });
    }

    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: IS_HMR_DISABLED
        ? {
            middlewareMode: true,
            hmr: false,
            ws: false,
            watch: null,
          }
        : {
            middlewareMode: true,
            hmr: { server: httpServer },
            ws: { server: httpServer },
          },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(import.meta.dirname, 'dist');
    if (fs.existsSync(distDir)) {
      app.use(
        express.static(distDir, {
          index: false,
          maxAge: '7d',
        })
      );
      app.get('*', (_req, res) => {
        res.sendFile(path.join(distDir, 'index.html'));
      });
    }
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.info(`[adigo] Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[adigo] Failed to start server:', err instanceof Error ? err.message : 'Unknown error');
  process.exit(1);
});
