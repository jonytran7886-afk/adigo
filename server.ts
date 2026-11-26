import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import {
  handlePreorderSubmission,
  isGoogleSheetsConfigured,
} from './server/preorderService.ts';

const PORT = Number(process.env.PORT || 3000);
const IS_PROD = process.env.NODE_ENV === 'production';

async function startServer() {
  const app = express();
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
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
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

  app.listen(PORT, '0.0.0.0', () => {
    console.info(`[adigo] Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[adigo] Failed to start server:', err instanceof Error ? err.message : 'Unknown error');
  process.exit(1);
});
