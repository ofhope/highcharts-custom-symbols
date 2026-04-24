/**
 * highcharts-custom-symbols
 *
 * All symbol sets + the {@link registerSymbols} function in one import.
 * The library never imports Highcharts — you pass your own instance to
 * `registerSymbols` so there is no version conflict or dual-bundling risk.
 *
 * @example Register everything:
 * ```ts
 * import { primitives, decorative, transportation, peopleAnalytics, registerSymbols }
 *   from 'highcharts-custom-symbols';
 * import Highcharts from 'highcharts';
 *
 * registerSymbols(
 *   { ...primitives, ...decorative, ...transportation, ...peopleAnalytics },
 *   Highcharts
 * );
 * ```
 *
 * @example Non-invasive primitives + custom sets side-by-side:
 * ```ts
 * import { primitives, transportation, registerSymbols } from 'highcharts-custom-symbols';
 *
 * registerSymbols(primitives,     Highcharts, { prefix: 'primitive' });
 * registerSymbols(transportation, Highcharts, { addToDefaultSymbols: true });
 * ```
 *
 * Selective per-set imports (smaller bundles):
 *   `import { transportation, registerSymbols } from 'highcharts-custom-symbols/transportation'`
 *   `import { decorative,     registerSymbols } from 'highcharts-custom-symbols/decorative'`
 *   `import { primitives,     registerSymbols } from 'highcharts-custom-symbols/primitives'`
 *   `import { peopleAnalytics,registerSymbols } from 'highcharts-custom-symbols/people-analytics'`
 */

export { primitives }       from "./primitives.js";
export { decorative }       from "./decorative.js";
export { transportation }   from "./transportation.js";
export { peopleAnalytics }  from "./people-analytics.js";

export { registerSymbols }  from "./register.js";
export type { SymbolFn, SymbolMap, RegisterOptions, HighchartsInstance } from "./register.js";
