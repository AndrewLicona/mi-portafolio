// Restaura public/favicon.svg desde el icon.svg original (SVG Repo) que estaba
// en el repo antes del cambio, y regenera los PNG. Uso: node tmp-restore.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const tmp = process.env.TEMP;
let svg = readFileSync(`${tmp}/icon-original.svg`, 'utf8');

// fuera el DOCTYPE con DTD externo (rompe a algunos renderizadores) y el
// comentario de SVG Repo se conserva como atribucion
svg = svg.replace(/<!DOCTYPE[\s\S]*?>\s*/i, '');
svg = svg.replace(/width="800px"\s+height="800px"/, 'width="512" height="512"');
svg = svg.trim() + '\n';

writeFileSync('public/favicon.svg', svg, 'utf8');
console.log('public/favicon.svg restaurado desde el icon.svg original');
