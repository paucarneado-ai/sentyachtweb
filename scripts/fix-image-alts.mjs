#!/usr/bin/env node
/**
 * Fill empty alt="" attributes on img tags inside boat detail pages.
 * Uses each page's <title> tag to derive the boat name, then emits
 * `${name} — foto N` (ES) or `${name} — photo N` (EN), incremented per page.
 *
 * Idempotent: only touches alt="" (empty), leaves existing alts alone.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const TARGETS = [
  { dir: 'es/barcos', label: 'foto' },
  { dir: 'en/boats',  label: 'photo' },
];

function listBoatPages(dir) {
  const full = join(ROOT, dir);
  return readdirSync(full)
    .map(name => join(full, name, 'index.html'))
    .filter(p => {
      try { return statSync(p).isFile(); } catch { return false; }
    });
}

function extractBoatName(html) {
  const m = html.match(/<title>([^<]+)<\/title>/i);
  if (!m) return null;
  // Title format is typically "Boat Name — Year · Price · SentYacht".
  // Strip the price segment (anything from " · " onwards) and any trailing
  // SentYacht suffix, then collapse whitespace.
  return m[1]
    .replace(/\s+[·|]\s+.*$/, '')          // drop everything from first " · " or " | "
    .replace(/\s*[—-]\s*SentYacht.*$/i, '') // belt and braces
    .replace(/\s+/g, ' ')
    .trim();
}

let totalFiles = 0, totalChanged = 0, totalReplacements = 0;

for (const { dir, label } of TARGETS) {
  for (const file of listBoatPages(dir)) {
    totalFiles++;
    const original = readFileSync(file, 'utf8');
    const name = extractBoatName(original);
    if (!name) {
      console.warn(`!! no <title> in ${file}, skipping`);
      continue;
    }
    let counter = 0;
    const updated = original.replace(/<img\b([^>]*?)\salt=""([^>]*)>/g, (_, before, after) => {
      counter++;
      const altText = `${name} — ${label} ${counter}`;
      // Escape any double quotes inside the boat name (paranoia)
      const safe = altText.replace(/"/g, '&quot;');
      return `<img${before} alt="${safe}"${after}>`;
    });
    if (counter > 0 && updated !== original) {
      writeFileSync(file, updated, 'utf8');
      totalChanged++;
      totalReplacements += counter;
      console.log(`✓ ${file.replace(ROOT + '\\', '').replace(/\\/g, '/')}  (${counter} alts → "${name}")`);
    }
  }
}

console.log(`\nDone. Files scanned: ${totalFiles}, files modified: ${totalChanged}, total alt fills: ${totalReplacements}`);
