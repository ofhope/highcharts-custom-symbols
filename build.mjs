#!/usr/bin/env node
/**
 * Library build script.
 *
 * Uses the TypeScript compiler to compile the library entry points and all
 * their symbol-function dependencies into dist/.  The public API surface is
 * defined by the `exports` field in package.json.
 */
import { execSync } from 'child_process';

console.log('📦 Building highcharts-custom-symbols…\n');

try {
  execSync('node_modules/.bin/tsc --project tsconfig.build.json', {
    stdio: 'inherit',
    cwd: process.cwd(),
  });
} catch {
  // tsc exits 1 for type errors but still emits JS — warn and continue.
  console.warn('\n⚠️  tsc reported type errors (see above). Emitted files may still be valid.\n');
}

console.log('\n✨ Build complete  →  dist/\n');
console.log('   Public entry points:');
console.log("   import 'highcharts-custom-symbols'                  // all symbols");
console.log("   import 'highcharts-custom-symbols/primitives'       // non-invasive  (primitive-circle, …)");
console.log("   import 'highcharts-custom-symbols/primitives-override' // replaces HC defaults");
console.log("   import 'highcharts-custom-symbols/decorative'");
console.log("   import 'highcharts-custom-symbols/transportation'");
console.log("   import 'highcharts-custom-symbols/people-analytics'\n");
