/**
 * Primitives — override alias entry point.
 *
 * This is a convenience re-export of {@link primitives} intended for the
 * "bulldoze" pattern where you want to replace Highcharts' built-in shapes
 * (circle, diamond, square, triangle, triangle-down) with the custom ones.
 *
 * @example
 * ```ts
 * import { primitives, registerSymbols } from 'highcharts-custom-symbols/primitives-override';
 * import Highcharts from 'highcharts';
 *
 * // Replaces HC defaults — no prefix, so 'circle' === custom circle
 * registerSymbols(primitives, Highcharts);
 *
 * // Optionally add ALL primitives to Highcharts' default cycling list:
 * registerSymbols(primitives, Highcharts, { addToDefaultSymbols: true });
 * ```
 *
 * For the non-invasive variant (prefix: 'primitive') use:
 *   `import { primitives, registerSymbols } from 'highcharts-custom-symbols/primitives'`
 *   `registerSymbols(primitives, Highcharts, { prefix: 'primitive' })`
 */
export { primitives } from "./primitives.js";
export { registerSymbols } from "./register.js";
export type { SymbolFn, SymbolMap, RegisterOptions, HighchartsInstance } from "./register.js";
