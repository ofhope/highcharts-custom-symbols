/**
 * Transportation symbol set (airplane, bicycle, bus, car, train, …).
 *
 * @example
 * ```ts
 * import { transportation, registerSymbols } from 'highcharts-custom-symbols/transportation';
 * import Highcharts from 'highcharts';
 *
 * registerSymbols(transportation, Highcharts);
 * // marker: { symbol: 'airplane' }
 *
 * // Add to Highcharts' automatic symbol cycling:
 * registerSymbols(transportation, Highcharts, { addToDefaultSymbols: true });
 * ```
 */
import {
  airplane,
  airplaneTaxiing,
  airplaneTilt,
  bicycle,
  boat,
  bus,
  cableCar,
  car,
  moped,
  mopedFront,
  motorcycle,
  sailboat,
  scooter,
  train,
  trainSimple,
  tram,
  van,
} from "./symbols/transportation/index.js";
import type { SymbolMap } from "./register.js";

/** All transportation symbols, keyed by their Highcharts symbol name */
export const transportation: SymbolMap = {
  "airplane": airplane,
  "airplane-taxiing": airplaneTaxiing,
  "airplane-tilt": airplaneTilt,
  "bicycle": bicycle,
  "boat": boat,
  "bus": bus,
  "cable-car": cableCar,
  "car": car,
  "moped": moped,
  "moped-front": mopedFront,
  "motorcycle": motorcycle,
  "sailboat": sailboat,
  "scooter": scooter,
  "train": train,
  "train-simple": trainSimple,
  "tram": tram,
  "van": van,
};

export { registerSymbols } from "./register.js";
export type { SymbolFn, SymbolMap, RegisterOptions, HighchartsInstance } from "./register.js";
