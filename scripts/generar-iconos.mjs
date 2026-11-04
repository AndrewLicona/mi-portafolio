// Genera los PNG del favicon y la imagen Open Graph a partir de public/favicon.svg.
// Requiere sharp (ya viene con Astro). Uso: npm run icons
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(join(root, 'public', 'favicon.svg'));

const targets = [
  { file: 'favicon-32.png', size: 32 },
  { file: 'favicon-192.png', size: 192 },
  { file: 'favicon-512.png', size: 512 },
  { file: 'apple-touch-icon.png', size: 180 },
];

for (const t of targets) {
  const buf = await sharp(svg, { density: 384 }).resize(t.size, t.size).png().toBuffer();
  writeFileSync(join(root, 'public', t.file), buf);
  console.log(`ok public/${t.file} (${t.size}x${t.size}, ${buf.length} bytes)`);
}

// Open Graph 1200x630: fondo oscuro + monograma + datos
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0f1a"/>
      <stop offset="100%" stop-color="#161e2e"/>
    </linearGradient>
    <linearGradient id="al" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g transform="translate(120 95) scale(0.86)">
    <g fill="none" stroke="url(#al)" stroke-width="44" stroke-linecap="round" stroke-linejoin="round">
      <path d="M100 382 L190 130 L280 382"/>
      <path d="M330 130 L330 382 L410 382"/>
    </g>
    <path d="M136 296 L244 296" fill="none" stroke="url(#al)" stroke-width="32" stroke-linecap="round"/>
  </g>
  <text x="640" y="290" font-family="Segoe UI, Inter, system-ui, sans-serif" font-size="68" font-weight="800" fill="#e5e7eb">Andrew Licona</text>
  <text x="640" y="360" font-family="Segoe UI, Inter, system-ui, sans-serif" font-size="32" fill="#3b82f6">Desarrollador web fullstack</text>
  <text x="640" y="420" font-family="Segoe UI, Inter, system-ui, sans-serif" font-size="28" fill="#94a3b8">Next.js &#183; Python &#183; Docker &#183; Astro</text>
</svg>`;

const ogBuf = await sharp(Buffer.from(og)).png().toBuffer();
writeFileSync(join(root, 'public', 'og-image.png'), ogBuf);
console.log(`ok public/og-image.png (1200x630, ${ogBuf.length} bytes)`);
