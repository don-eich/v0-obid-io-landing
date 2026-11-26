#!/usr/bin/env node
// Renders a CV written in the job-hunt markdown subset to a one-column,
// ATS-readable PDF.
//
//   node build-cv.js <input.md> <output.pdf> [--preview]
//
// --preview highlights [BRACKETED] placeholders so missing data is visible.
// Without it, the build fails if any placeholder remains.

const fs = require('fs');
const { chromium } = require('playwright');

const [input, output, flag] = process.argv.slice(2);
if (!input || !output) {
  console.error('usage: build-cv.js <input.md> <output.pdf> [--preview]');
  process.exit(2);
}
const preview = flag === '--preview';
const md = fs.readFileSync(input, 'utf8');

const placeholders = md.match(/\[[^\]\n]*[A-ZÁÉÍÓÚÑ¿]{3,}[^\]\n]*\]/g) || [];
if (placeholders.length && !preview) {
  console.error('Unresolved placeholders, refusing to build a final PDF:');
  placeholders.forEach((p) => console.error('  ' + p));
  process.exit(1);
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[[^\]\n]*[A-ZÁÉÍÓÚÑ¿]{3,}[^\]\n]*\]/g, (m) => `<mark>${m}</mark>`);

const out = [];
let list = false;
let para = [];
let headerLines = 0;
const flushPara = () => {
  if (para.length) {
    out.push(`<p>${para.map(inline).join('<br>')}</p>`);
    para = [];
  }
};
const closeList = () => {
  if (list) {
    out.push('</ul>');
    list = false;
  }
};
let role = false;
const closeRole = () => {
  if (role) {
    out.push('</div>');
    role = false;
  }
};

for (const line of md.split('\n')) {
  if (/^# /.test(line)) {
    flushPara(); closeList(); closeRole();
    out.push(`<h1>${inline(line.slice(2))}</h1>`);
    headerLines = 3;
  } else if (/^## /.test(line)) {
    flushPara(); closeList(); closeRole();
    headerLines = 0;
    out.push(`<h2>${inline(line.slice(3))}</h2>`);
  } else if (/^### /.test(line)) {
    flushPara(); closeList(); closeRole();
    out.push('<div class="role">');
    role = true;
    out.push(`<h3>${inline(line.slice(4))}</h3>`);
  } else if (/^- /.test(line)) {
    flushPara();
    if (!list) { out.push('<ul>'); list = true; }
    out.push(`<li>${inline(line.slice(2))}</li>`);
  } else if (line.trim() === '' || line.trim() === '---') {
    flushPara(); closeList();
  } else if (headerLines > 0) {
    out.push(`<p class="contact">${inline(line)}</p>`);
    headerLines--;
  } else if (/^\*\*.+\*\*$/.test(line.trim())) {
    flushPara(); closeList();
    out.push(`<p class="meta">${inline(line.trim().slice(2, -2))}</p>`);
  } else {
    para.push(line);
  }
}
flushPara(); closeList(); closeRole();

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Erick Bonilla - CV</title>
<style>
  @page { size: A4; margin: 15mm 17mm; }
  body { font-family: Arial, Helvetica, sans-serif; font-size: 10pt; line-height: 1.38; color: #111; margin: 0; }
  h1 { font-size: 19pt; letter-spacing: 0.5pt; margin: 0 0 2pt; }
  p.contact { margin: 0; font-size: 9.5pt; color: #333; }
  h2 { font-size: 10.5pt; letter-spacing: 1pt; border-bottom: 0.75pt solid #111; padding-bottom: 2pt; margin: 13pt 0 6pt; }
  h3 { font-size: 10.5pt; margin: 9pt 0 0; break-after: avoid; }
  p.meta { margin: 0 0 3pt; font-size: 9.5pt; color: #444; break-after: avoid; }
  p { margin: 0 0 4pt; }
  ul { margin: 2pt 0 4pt; padding-left: 14pt; }
  li { margin-bottom: 2pt; }
  div.role { break-inside: avoid; }
  mark { background: #ffe66d; }
</style></head><body>${out.join('\n')}</body></html>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  await page.pdf({ path: output, format: 'A4', printBackground: true });
  await browser.close();
  console.log(`wrote ${output}${preview ? ` (preview, ${placeholders.length} placeholders)` : ''}`);
})();
