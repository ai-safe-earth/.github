// Builds the animated README art: SVG files with SMIL motion and the text as embedded PNGs.
// Run from the repo root:  node profile/brand/art/build-art.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const d = dirname(fileURLToPath(import.meta.url));
const png = (n) => 'data:image/png;base64,' + readFileSync(join(d, n)).toString('base64');
const hdr = (w, h, label) => `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}"><rect width="${w}" height="${h}" fill="#0A0A0A"/>`;
const img = (u, w, h, x = 0, y = 0, extra = '') => `<image x="${x}" y="${y}" width="${w}" height="${h}" href="${u}" xlink:href="${u}"${extra}`;

// 1. Rotating lines
{
  const L = ['_l2.png', '_l3.png', '_l4.png'].map(png);
  const k = [['0;0.03;0.3;0.333;1', '0;1;1;0;0'], ['0;0.333;0.363;0.63;0.667;1', '0;0;1;1;0;0'], ['0;0.667;0.697;0.97;1', '0;0;1;1;0']];
  let s = hdr(1280, 180, 'We don’t rely on social media to socialise, we build real networks. We don’t talk about the end of the world, we build a better one.');
  L.forEach((u, i) => {
    const ty = k[i][1].split(';').map(v => (v === '0' ? '0 12' : '0 0')).join(';');
    s += `<g opacity="0"><animate attributeName="opacity" dur="9s" repeatCount="indefinite" keyTimes="${k[i][0]}" values="${k[i][1]}"/>${img(u, 1280, 170)}><animateTransform attributeName="transform" type="translate" dur="9s" repeatCount="indefinite" keyTimes="${k[i][0]}" values="${ty}"/></image></g>`;
  });
  s += `<rect y="174" width="1280" height="6" fill="#1C1C1C"/><rect y="174" width="0" height="6" fill="#E6FF00"><animate attributeName="width" values="0;1280" dur="3s" repeatCount="indefinite"/></rect></svg>`;
  writeFileSync(join(d, 'lines.svg'), s);
}

// 2. How we act: 1 spot, 2 build, 3 hit
{
  let a = hdr(1280, 420, 'How we act: 1 spot, 2 build, 3 hit') + img(png('_act.png'), 1280, 420) + '/>';
  a += `<path d="M136 124H448M536 124H848" stroke="#2A2A2A" stroke-width="3"/><path d="M438 114l10 10-10 10M838 114l10 10-10 10" fill="none" stroke="#2A2A2A" stroke-width="3"/>`;
  const dim = [['0;0.333', '0;0.72'], ['0;0.333;0.667', '0.72;0;0.72'], ['0;0.667', '0.72;0']];
  [64, 464, 864].forEach((x, i) => {
    a += `<rect x="${x - 16}" y="80" width="384" height="320" fill="#0A0A0A" opacity="${dim[i][1].split(';')[0]}"><animate attributeName="opacity" dur="3.6s" repeatCount="indefinite" calcMode="discrete" keyTimes="${dim[i][0]}" values="${dim[i][1]}"/></rect>`;
  });
  a += `<circle r="8" fill="#E6FF00"><animateMotion dur="3.6s" repeatCount="indefinite" path="M136 124H848" keyPoints="0;0;0.5;0.5;1;1" keyTimes="0;0.15;0.333;0.48;0.667;1" calcMode="linear"/><animate attributeName="opacity" dur="3.6s" repeatCount="indefinite" keyTimes="0;0.667;0.7;1" values="1;1;0;0"/></circle>`;
  [1, 2].forEach(n => {
    const kt = (0.667 + n * 0.04).toFixed(3);
    a += `<circle cx="892" cy="124" r="30" fill="none" stroke="#E6FF00" stroke-width="3" opacity="0"><animate attributeName="r" dur="3.6s" repeatCount="indefinite" keyTimes="0;${kt};0.98;1" values="30;30;${60 + n * 30};30"/><animate attributeName="opacity" dur="3.6s" repeatCount="indefinite" keyTimes="0;${kt};0.98;1" values="0;0.9;0;0"/></circle>`;
  });
  writeFileSync(join(d, 'how-we-act.svg'), a + '</svg>');
}

// 3. Three ways to contribute feed three fronts
{
  let f = hdr(1280, 560, 'Three ways to contribute (build, research, communicate) feed three fronts (street, code, decision makers). One fight.') + img(png('_fronts.png'), 1280, 560) + '/>';
  const ys = [156, 296, 436], bc = ['#E6FF00', '#2D4BFF', '#7B3CFF'], fc = ['#7B3CFF', '#E6FF00', '#2D4BFF'];
  const inP = ys.map(y => `M404 ${y}C500 ${y} 520 303 594 303`), outP = ys.map(y => `M686 303C760 303 780 ${y} 876 ${y}`);
  [...inP, ...outP].forEach(p => { f += `<path d="${p}" fill="none" stroke="#2A2A2A" stroke-width="2"/>`; });
  inP.forEach((p, i) => [0, 1.2].forEach(o => { f += `<circle r="6" fill="${bc[i]}"><animateMotion dur="2.4s" begin="${(o + i * 0.25).toFixed(2)}s" repeatCount="indefinite" path="${p}"/></circle>`; }));
  outP.forEach((p, i) => [0.6, 1.8].forEach(o => { f += `<circle r="6" fill="${fc[i]}"><animateMotion dur="2.4s" begin="${(o + i * 0.25).toFixed(2)}s" repeatCount="indefinite" path="${p}"/></circle>`; }));
  f += `<circle cx="640" cy="303" r="8" fill="none" stroke="#E6FF00" stroke-width="2"><animate attributeName="r" values="8;54" dur="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.8;0" dur="1.2s" repeatCount="indefinite"/></circle>`;
  writeFileSync(join(d, 'contribute-fronts.svg'), f + '</svg>');
}

// 4. AISG audit
{
  let u = hdr(1280, 360, 'AISG audit: finds risks in a repository and opens a pull request with the fixes') + img(png('_audit.png'), 1280, 360) + '/>';
  [86, 124, 162, 200, 238, 290].forEach((y, i) => {
    const t = 0.05 + i * 0.1;
    u += `<rect x="30" y="${y}" width="1220" height="40" fill="#0A0A0A"><animate attributeName="opacity" dur="7s" repeatCount="indefinite" keyTimes="0;${t.toFixed(2)};${(t + 0.02).toFixed(2)};0.93;1" values="1;1;0;0;1"/></rect>`;
  });
  u += `<rect x="16" y="96" width="10" height="24" fill="#E6FF00"><animate attributeName="y" dur="7s" repeatCount="indefinite" calcMode="discrete" keyTimes="0;0.05;0.15;0.25;0.35;0.45;0.55;0.93" values="96;96;134;172;210;248;300;96"/><animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite"/></rect>`;
  u += img(png('_fixed.png'), 140, 36, 1100, 20, ' opacity="0"') + `><animate attributeName="opacity" dur="7s" repeatCount="indefinite" keyTimes="0;0.62;0.64;0.93;1" values="0;0;1;1;0"/></image>`;
  writeFileSync(join(d, 'audit.svg'), u + '</svg>');
}

console.log('wrote lines.svg, how-we-act.svg, contribute-fronts.svg, audit.svg');
