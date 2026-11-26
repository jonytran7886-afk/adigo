import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

function normalizeOrigin(rawUrl?: string): string {
  if (!rawUrl) return '';
  const trimmed = rawUrl.trim().replace(/\/+$/, '');
  if (!trimmed || trimmed === 'MY_APP_URL') return '';
  try {
    const parsed = new URL(trimmed);
    if (
      parsed.hostname === 'localhost' ||
      parsed.hostname === '127.0.0.1' ||
      parsed.hostname === '0.0.0.0'
    ) {
      return '';
    }
    return parsed.origin;
  } catch {
    return '';
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteOrigin = normalizeOrigin(env.VITE_SITE_URL || env.APP_URL);
  const allowIndexing = env.VITE_ALLOW_INDEXING !== 'false';
  const gscVerification = (env.VITE_GSC_VERIFICATION || '').trim();
  const bingVerification = (env.VITE_BING_VERIFICATION || '').trim();

  let resolvedOutDir = path.resolve(import.meta.dirname, 'dist');

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'adigo-seo-html-transform',
        apply: 'build',
        configResolved(config) {
          resolvedOutDir = path.resolve(config.root, config.build.outDir);
        },
        transformIndexHtml(html: string): string {
          let nextHtml = html;

          if (!allowIndexing) {
            nextHtml = nextHtml.replace(
              '<meta name="robots" content="index, follow" />',
              '<meta name="robots" content="noindex, nofollow" />'
            );
          }

          const extraHeadTags: string[] = [];
          if (gscVerification) {
            extraHeadTags.push(
              `    <meta name="google-site-verification" content="${gscVerification}" />`
            );
          }
          if (bingVerification) {
            extraHeadTags.push(
              `    <meta name="msvalidate.01" content="${bingVerification}" />`
            );
          }

          if (siteOrigin) {
            const canonicalUrl = `${siteOrigin}/`;
            extraHeadTags.push(
              `    <link rel="canonical" href="${canonicalUrl}" />`
            );
            extraHeadTags.push(
              `    <meta property="og:url" content="${canonicalUrl}" />`
            );
            nextHtml = nextHtml
              .replaceAll(
                'content="/og-adigo.jpg"',
                `content="${siteOrigin}/og-adigo.jpg"`
              )
              .replaceAll(
                '"url": "/assets/aistudio/ADIGO_Icon_Nen_Trang_512_4639cde4.png"',
                `"url": "${siteOrigin}/assets/aistudio/ADIGO_Icon_Nen_Trang_512_4639cde4.png"`
              )
              .replaceAll(
                '"logo": "/assets/aistudio/ADIGO_Ngang_2400px_872a9a4e.png"',
                `"logo": "${siteOrigin}/assets/aistudio/ADIGO_Ngang_2400px_872a9a4e.png"`
              )
              .replaceAll(
                '"url": "/og-adigo.jpg"',
                `"url": "${siteOrigin}/og-adigo.jpg"`
              );
          }

          if (extraHeadTags.length > 0) {
            nextHtml = nextHtml.replace(
              '    <!-- Open Graph -->',
              `${extraHeadTags.join('\n')}\n\n    <!-- Open Graph -->`
            );
          }

          return nextHtml;
        },
      },
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." still resolve in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const srcAssets = path.resolve(import.meta.dirname, 'src/assets');
          const distAssets = path.resolve(resolvedOutDir, 'src/assets');
          if (fs.existsSync(resolvedOutDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, { recursive: true, force: true });
          }

          if (siteOrigin && fs.existsSync(resolvedOutDir)) {
            const sitemapPath = path.join(resolvedOutDir, 'sitemap.xml');
            if (fs.existsSync(sitemapPath)) {
              const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
              fs.writeFileSync(
                sitemapPath,
                sitemap.replace('<loc>/</loc>', `<loc>${siteOrigin}/</loc>`)
              );
            }

            const robotsPath = path.join(resolvedOutDir, 'robots.txt');
            if (fs.existsSync(robotsPath)) {
              const robots = fs.readFileSync(robotsPath, 'utf-8');
              fs.writeFileSync(
                robotsPath,
                robots.replace(
                  'Sitemap: /sitemap.xml',
                  `Sitemap: ${siteOrigin}/sitemap.xml`
                )
              );
            }
          }
        },
      },
    ],
    build: {
      rolldownOptions: {
        output: {
          manualChunks(id: string) {
            if (
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/')
            ) {
              return 'react-vendor';
            }
            if (id.includes('node_modules/motion/')) {
              return 'motion-vendor';
            }
            if (id.includes('node_modules/lucide-react/')) {
              return 'icons-vendor';
            }
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
