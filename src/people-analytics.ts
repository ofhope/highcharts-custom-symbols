/**
 * People-analytics symbol set (baby, building, house, gift, …).
 *
 * @example
 * ```ts
 * import { peopleAnalytics, registerSymbols } from 'highcharts-custom-symbols/people-analytics';
 * import Highcharts from 'highcharts';
 *
 * registerSymbols(peopleAnalytics, Highcharts);
 * // marker: { symbol: 'house' }
 * ```
 */
import {
  baby,
  building,
  buildingApartment,
  buildingOffice,
  cross,
  gift,
  house,
} from "./symbols/people-analytics/index.js";
import type { SymbolMap } from "./register.js";

/** All people-analytics symbols, keyed by their Highcharts symbol name */
export const peopleAnalytics: SymbolMap = {
  "baby": baby,
  "building": building,
  "building-apartment": buildingApartment,
  "building-office": buildingOffice,
  "cross": cross,
  "gift": gift,
  "house": house,
};

export { registerSymbols } from "./register.js";
export type { SymbolFn, SymbolMap, RegisterOptions, HighchartsInstance } from "./register.js";
