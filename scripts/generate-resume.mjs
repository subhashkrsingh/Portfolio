import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(scriptDir, '..', 'public', 'resume.pdf');

const content = [
  'BT',
  '/F1 24 Tf',
  '72 740 Td',
  '(Subhash Kumar Singh) Tj',
  '/F1 14 Tf',
  '0 -32 Td',
  '(AI Engineer & Full Stack Developer) Tj',
  '/F1 11 Tf',
  '0 -26 Td',
  '(Portfolio resume placeholder) Tj',
  '0 -18 Td',
  '(Replace this file with the final PDF resume when ready.) Tj',
  'ET',
].join('\n');

const objects = [
  '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
  '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
  '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>\nendobj\n',
  `4 0 obj\n<< /Length ${Buffer.byteLength(content, 'ascii')} >>\nstream\n${content}\nendstream\nendobj\n`,
  '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
];

let pdf = '%PDF-1.4\n';
const offsets = [0];

for (const object of objects) {
  offsets.push(Buffer.byteLength(pdf, 'ascii'));
  pdf += object;
}

const xrefStart = Buffer.byteLength(pdf, 'ascii');
pdf += 'xref\n0 6\n0000000000 65535 f \n';

for (let index = 1; index < offsets.length; index += 1) {
  pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`;
}

pdf += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

fs.writeFileSync(outputPath, pdf, 'ascii');
console.log(`Wrote ${outputPath}`);
