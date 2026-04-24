#!/usr/bin/env node
/**
 * One-time script to transform auto-registering symbol files into
 * pure named-export functions, so entry files can control registration.
 *
 * Before:
 *   import Highcharts from "highcharts";
 *   Highcharts.SVGRenderer.prototype.symbols["my-name"] = function (x, y, w, h) { ... };
 *
 * After:
 *   export const myName = function (x: number, y: number, w: number, h: number) { ... };
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SYMBOLS_DIR = path.join(ROOT, 'src', 'symbols');

/** Convert kebab-case (or any-case with hyphens) to camelCase */
function toCamelCase(str) {
  return str.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());
}

/** Transform a single symbol .ts file */
function transformFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Find the symbol name from the Highcharts registration
  const registrationMatch = content.match(
    /Highcharts\.SVGRenderer\.prototype\.symbols\["([^"]+)"\]\s*=\s*function/
  );

  if (!registrationMatch) {
    console.log(`  ⏭  Skipping (no registration found): ${path.relative(ROOT, filePath)}`);
    return;
  }

  const symbolKey = registrationMatch[1];          // e.g. "airplane-tilt"
  const exportName = toCamelCase(symbolKey);       // e.g. "airplaneTilt"

  let newContent = content;

  // 1. Remove the Highcharts import line (and the blank line that follows it)
  newContent = newContent.replace(/^import Highcharts from "highcharts";\r?\n(\r?\n)?/m, '');

  // 2. Replace the registration assignment with an export const declaration
  newContent = newContent.replace(
    `Highcharts.SVGRenderer.prototype.symbols["${symbolKey}"] = function`,
    `export const ${exportName} = function`
  );

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`  ✅ ${path.relative(ROOT, filePath)}  →  export const ${exportName}`);
}

/** Recursively find all .ts files in a directory, excluding index.ts */
function findSymbolFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findSymbolFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts') {
      results.push(full);
    }
  }
  return results;
}

console.log('🔧 Transforming symbol files to named exports…\n');

const files = findSymbolFiles(SYMBOLS_DIR);
for (const file of files) {
  // Skip non-symbol utility files
  if (file.endsWith('transformUtils.ts')) {
    console.log(`  ⏭  Skipping utility: ${path.relative(ROOT, file)}`);
    continue;
  }
  transformFile(file);
}

console.log(`\n✨ Done — transformed ${files.length - 1} files.`);
console.log('   Run "npm run build" to rebuild the dist.\n');
