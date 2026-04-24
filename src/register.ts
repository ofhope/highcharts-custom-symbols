/**
 * registerSymbols — the single point of contact between this library and your
 * Highcharts instance.
 *
 * The library never imports Highcharts itself; you pass in whichever copy your
 * project already uses.  This means there is no version conflict risk and no
 * accidental dual-bundling of Highcharts.
 *
 * @example Basic usage — register a set under its own names:
 * ```ts
 * import { transportation, registerSymbols } from 'highcharts-custom-symbols/transportation';
 * import Highcharts from 'highcharts';
 *
 * registerSymbols(transportation, Highcharts);
 * // → Highcharts.SVGRenderer.prototype.symbols['airplane'] = …
 * ```
 *
 * @example Non-invasive primitives — keeps Highcharts' built-in shapes intact:
 * ```ts
 * import { primitives, registerSymbols } from 'highcharts-custom-symbols/primitives';
 * registerSymbols(primitives, Highcharts, { prefix: 'primitive' });
 * // → symbols['primitive-circle'], symbols['primitive-square'], …
 * // Use in a series: marker: { symbol: 'primitive-square' }
 * ```
 *
 * @example Override Highcharts' built-in shapes:
 * ```ts
 * registerSymbols(primitives, Highcharts);
 * // → replaces symbols['circle'], symbols['square'], …
 * ```
 *
 * @example Add symbols to Highcharts' default cycling list:
 * ```ts
 * registerSymbols(transportation, Highcharts, { addToDefaultSymbols: true });
 * // → charts automatically cycle through transportation shapes for each series
 * ```
 *
 * @example Register everything at once:
 * ```ts
 * import { primitives, decorative, transportation, peopleAnalytics, registerSymbols }
 *   from 'highcharts-custom-symbols';
 *
 * registerSymbols({ ...primitives, ...decorative, ...transportation, ...peopleAnalytics }, Highcharts);
 * ```
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** A Highcharts-compatible path-drawing function */
export type SymbolFn = (
  x: number,
  y: number,
  w: number,
  h: number
) => (string | number)[];

/**
 * A map of kebab-case symbol names to their drawing functions.
 * Keys match what you pass to `marker: { symbol: '…' }` in Highcharts.
 */
export type SymbolMap = Record<string, SymbolFn>;

/** Options for {@link registerSymbols} */
export interface RegisterOptions {
  /**
   * Prepend a prefix to every symbol key before registering.
   *
   * ```ts
   * registerSymbols(primitives, Highcharts, { prefix: 'primitive' });
   * // registers 'primitive-circle', 'primitive-square', …
   * ```
   */
  prefix?: string;

  /**
   * If `true`, the registered symbol names are appended to Highcharts' default
   * symbol cycling list so that charts automatically use them for new series
   * (in addition to, or instead of, the built-in shapes).
   *
   * Internally this calls:
   * ```ts
   * Highcharts.setOptions({ symbols: [...currentSymbols, ...newNames] });
   * ```
   */
  addToDefaultSymbols?: boolean;
}

/**
 * Minimal interface this library requires from the Highcharts object.
 * Any version of Highcharts satisfies this automatically — no need to cast.
 */
export interface HighchartsInstance {
  SVGRenderer: {
    prototype: {
      symbols: Record<string, unknown>;
    };
  };
  setOptions?: (options: { symbols?: string[] }) => void;
  getOptions?: () => { symbols?: string[] };
}

// ---------------------------------------------------------------------------
// Implementation
// ---------------------------------------------------------------------------

/**
 * Register one or more symbol collections with a Highcharts instance.
 *
 * @param symbols    - A {@link SymbolMap} (e.g. `primitives`, `transportation`).
 * @param Highcharts - Your project's Highcharts global (not imported by this library).
 * @param options    - Optional {@link RegisterOptions}.
 */
export function registerSymbols(
  symbols: SymbolMap,
  Highcharts: HighchartsInstance,
  options: RegisterOptions = {}
): void {
  const { prefix, addToDefaultSymbols = false } = options;
  const registeredNames: string[] = [];

  for (const [name, fn] of Object.entries(symbols)) {
    const key = prefix ? `${prefix}-${name}` : name;
    Highcharts.SVGRenderer.prototype.symbols[key] = fn;
    registeredNames.push(key);
  }

  if (addToDefaultSymbols && registeredNames.length > 0) {
    const current = Highcharts.getOptions?.()?.symbols ?? [];
    Highcharts.setOptions?.({ symbols: [...current, ...registeredNames] });
  }
}
