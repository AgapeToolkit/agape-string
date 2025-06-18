import { pluralize } from './pluralize';

/**
 * Format a number in units, pluralizing the units if there is more or less than
 * one count.
 * @param count Number of units
 * @param unit Label for the value
 * @param plural Plural label for the value, will pluralize the single unit if
 *               not provided
 * @returns String in `x units` format
 */
export function quanitfy(count: number|string, unit: string, plural?: string) {
  const value = typeof count == 'number' ? count : Number(count);

  const label = value === 1 ? unit : plural === undefined ? pluralize(unit) : plural;

  return `${count} ${label}`

}