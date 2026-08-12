import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');

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
];

const missing = required.filter((text) => !html.includes(text));
if (missing.length) {
  console.error('Missing required content:', missing.join(', '));
  process.exit(1);
}

const forbidden = [
  '#B4FF39',
  '#C7F464',
  'Medellín Gold District',
  'Alfa Joyería',
  'Duolingo',
  '$2.000.000',
];

const presentForbidden = forbidden.filter((text) => html.includes(text));
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
