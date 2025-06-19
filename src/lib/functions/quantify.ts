import { pluralize } from './pluralize';

/**
 * Formats a number with a unit, automatically pluralizing the unit based on the count.
 *
 * If the `count` is exactly 1, the singular `unit` is used. Otherwise, it either uses
 * the provided `plural` form or calls `pluralize(unit)` to generate one.
 *
 * @param count Number of units, as a number or numeric string.
 * @param unit Label for the singular unit (e.g., "apple").
 * @param plural Optional plural label. If not provided, the unit is pluralized automatically.
 * @returns A formatted string in the form `x unit(s)`.
 *
 * @example
 * quantify(1, "apple"); // "1 apple"
 *
 * @example
 * quantify(3, "apple"); // "3 apples"
 *
 * @example
 * quantify("2", "box"); // "2 boxes"
 *
 * @example
 * quantify(1, "child", "children"); // "1 child"
 *
 * @example
 * quantify(2, "child", "children"); // "2 children"
 *
 * @example
 * quantify(5, "CPU"); // "5 CPUs"
 */
export function quantify(count: number|string, unit: string, plural?: string) {
  const value = typeof count == 'number' ? count : Number(count);

  const label = value === 1 ? unit : plural === undefined ? pluralize(unit) : plural;

  return `${count} ${label}`

}