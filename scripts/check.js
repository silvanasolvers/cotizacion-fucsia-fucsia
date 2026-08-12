import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');
const brandCss = await readFile(new URL('../public/brand.css', import.meta.url), 'utf8');
const source = `${html}\n${brandCss}`;

const required = [
  'Fucsia Fucsia',
  'Celeste',
  'Skill de mensajes masivos',
  '$1.500.000',
  'COP · pago único',
  '1.000 mensajes',
  '$ XXXX COP',
  'Valor pendiente de confirmación',
  'Campañas bajo demanda',
  'SOLVERS',
  'prefers-reduced-motion',
  '#131512',
  '#1D201A',
  '#EDEFE8',
  '#B4FF39',
  '#FF6B4A',
  'Archivo Black',
  'Archivo',
  'JetBrains Mono',
  'font-size: 64px',
  'font-size: 40px',
  'font-size: 24px',
  'font-size: 15px',
  'font-size: 12px',
];

const missing = required.filter((text) => !source.includes(text));
if (missing.length) {
  console.error('Missing required content:', missing.join(', '));
  process.exit(1);
}

const forbidden = [
  '#081210',
  '#0F1F1B',
  '#E6F2EE',
  '#39FFD0',
  '#C7F464',
  '#E9469B',
  '#FF8AC6',
  'Albert Sans',
  'Syne',
  'Medellín Gold District',
  'Alfa Joyería',
  'Duolingo',
  '$2.000.000',
];

const presentForbidden = forbidden.filter((text) => source.includes(text));
if (presentForbidden.length) {
  console.error('Forbidden or inherited content:', presentForbidden.join(', '));
  process.exit(1);
}

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicates.length) {
  console.error('Duplicate IDs:', [...new Set(duplicates)].join(', '));
  process.exit(1);
}

console.log('check ok');
