// Render final de candidatos (temporal)
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const tmp = process.env.TEMP;
const ACCENT = '#3b82f6';

function card(inner, size = 256, bg = '#0a0f1a') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="${bg}"/>
    <g transform="translate(${size * 0.19} ${size * 0.19}) scale(${(size * 0.62) / 24})">${inner}</g>
  </svg>`;
}

const stroke = (d, w = 2) =>
  `<path d="${d}" fill="none" stroke="${ACCENT}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;

// A) original (icon.svg SVG Repo) -> tal cual, solo re-escalado
let original = (await import('node:fs')).readFileSync(`${tmp}/icon-original.svg`, 'utf8');
original = original.replace(/<!DOCTYPE[\s\S]*?>/i, '').replace(/<!--[\s\S]*?-->/g, '');
await sharp(Buffer.from(original)).resize(256, 256).png().toFile(`${tmp}/opt-a-original.png`);
console.log('ok opt-a-original.png');

// B) icono "cv" del kit del proyecto (documento = portafolio)
const cvD = 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';
await sharp(Buffer.from(card(stroke(cvD)))).png().toFile(`${tmp}/opt-b-cv.png`);
console.log('ok opt-b-cv.png');

// C) lucide briefcase (carpeta de trabajo)
const bcD = 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16';
const bcInner = stroke(bcD) + `<rect x="2" y="6" width="20" height="14" rx="2" fill="none" stroke="${ACCENT}" stroke-width="2"/>`;
await sharp(Buffer.from(card(bcInner))).png().toFile(`${tmp}/opt-c-briefcase.png`);
console.log('ok opt-c-briefcase.png');

// D) monograma AL
const alInner = `<g fill="none" stroke="${ACCENT}" stroke-width="44" stroke-linecap="round" stroke-linejoin="round">
    <path d="M100 382 L190 130 L280 382" transform="scale(0.39) translate(60 0)"/>
    <path d="M330 130 L330 382 L410 382" transform="scale(0.39) translate(60 0)"/>
  </g>
  <path d="M136 296 L244 296" fill="none" stroke="${ACCENT}" stroke-width="32" stroke-linecap="round" transform="scale(0.39) translate(60 0)"/>`;
await sharp(Buffer.from(card(alInner))).png().toFile(`${tmp}/opt-d-monograma.png`);
console.log('ok opt-d-monograma.png');
