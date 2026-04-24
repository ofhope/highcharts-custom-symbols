/**
 * Decorative symbol set (avocardo, balloon, bomb, bone, heart, …).
 *
 * @example
 * ```ts
 * import { decorative, registerSymbols } from 'highcharts-custom-symbols/decorative';
 * import Highcharts from 'highcharts';
 *
 * registerSymbols(decorative, Highcharts);
 * // marker: { symbol: 'balloon' }
 *
 * // Add to Highcharts' automatic symbol cycling:
 * registerSymbols(decorative, Highcharts, { addToDefaultSymbols: true });
 * ```
 */
import {
  avocardo,
  balloon,
  bomb,
  bone,
  heart,
  lightling,
  moon,
  puzzle,
  star,
  tag,
} from "./symbols/decorative/index.js";
import type { SymbolMap } from "./register.js";

/** All decorative symbols, keyed by their Highcharts symbol name */
export const decorative: SymbolMap = {
  "avocardo": avocardo,
  "balloon": balloon,
  "bomb": bomb,
  "bone": bone,
  "heart": heart,
  "lightling": lightling,
  "moon": moon,
  "puzzle": puzzle,
  "star": star,
  "tag": tag,
};

export { registerSymbols } from "./register.js";
export type { SymbolFn, SymbolMap, RegisterOptions, HighchartsInstance } from "./register.js";
