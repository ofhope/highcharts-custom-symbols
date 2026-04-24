/**
 * Primitive geometric shapes symbol set.
 *
 * Import this set and call {@link registerSymbols} with your Highcharts instance.
 *
 * @example Non-invasive (adds `primitive-*` names, leaves HC defaults intact):
 * ```ts
 * import { primitives, registerSymbols } from 'highcharts-custom-symbols/primitives';
 * import Highcharts from 'highcharts';
 *
 * registerSymbols(primitives, Highcharts, { prefix: 'primitive' });
 * // marker: { symbol: 'primitive-square' }
 * ```
 *
 * @example Override Highcharts' built-in shapes (circle, square, diamond, …):
 * ```ts
 * registerSymbols(primitives, Highcharts);
 * // replaces the default circle, square, diamond, triangle, triangle-down
 * ```
 */
import {
  circle,
  circleDashed,
  circleHalf,
  circleHalfTilt,
  diamond,
  egg,
  hexagon,
  octagon,
  parallelogram,
  pentagon,
  square,
  teardrop,
  triangle,
  triangleDown,
  triangleDashed,
} from "./symbols/primitives/index.js";
import type { SymbolMap } from "./register.js";

/** All primitive geometric shapes, keyed by their Highcharts symbol name */
export const primitives: SymbolMap = {
  "circle": circle,
  "circle-dashed": circleDashed,
  "circle-half": circleHalf,
  "circle-half-tilt": circleHalfTilt,
  "diamond": diamond,
  "egg": egg,
  "hexagon": hexagon,
  "octagon": octagon,
  "parallelogram": parallelogram,
  "pentagon": pentagon,
  "square": square,
  "teardrop": teardrop,
  "triangle": triangle,
  "triangle-down": triangleDown,
  "triangle-dashed": triangleDashed,
};

export { registerSymbols } from "./register.js";
export type { SymbolFn, SymbolMap, RegisterOptions, HighchartsInstance } from "./register.js";
