import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'public/assets/responsive');
await mkdir(output, { recursive: true });
const photos = (await readdir(path.join(root, 'src/assets/images')))
  .filter(name => name.endsWith('.webp'))
  .map(name => path.join(root, 'src/assets/images', name));
const logos = [
  'public/assets/aistudio/ADIGO_Ngang_2400px_872a9a4e.png',
  'public/assets/aistudio/ADIGO_Dung_2400px_0c28ddfc.png',
  'public/assets/aistudio/ADIGO_Icon_Nen_Trang_512_4639cde4.png',
  'public/assets/organic-vietnam-logo.png',
].map(name => path.join(root, name));
for (const file of [...photos, ...logos]) {
  const stem = path.parse(file).name;
  const logo = logos.includes(file);
  for (const width of [160, 320, 640, 960]) {
    await sharp(file).resize({ width }).webp({ quality: logo ? 90 : 76 }).toFile(
      path.join(output, `${stem}-${width}.webp`)
    );
  }
}
console.log(`Generated responsive images for ${photos.length + logos.length} assets.`);
