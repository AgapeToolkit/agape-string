import { preserveCasing } from '../private/util';

/**
 * Returns the singular form of a plural word.
 *
 * Handles common English pluralization patterns such as:
 * - ies → y
 * - es → base (for s, x, z, ch, sh endings)
 * - s → base (general fallback)
 * - known irregulars (e.g., children → child)
 *
 * Preserves the casing of the original input, including acronyms or title case.
 *
 * ## Usage
 *
 * ```ts
 * singularize("cities"); // "city"
 * ```
 *
 * ```ts
 * singularize("boxes"); // "box"
 * ```
 *
 * ```ts
 * singularize("children"); // "child"
 * ```
 *
 * ```ts
 * singularize("teeth"); // "tooth"
 * ```
 *
 * ```ts
 * singularize("dogs"); // "dog"
 * ```
 *
 * ```ts
 * singularize("BUZZES"); // "BUZZ"
 * ```
 *
 * ```ts
 * singularize("IDs"); // "ID"
 * ```
 *
 * @param word Plural word to be converted to singular.
 * @returns The singular form of the input word.
 */
export function singularize(word: string): string {
  const lower = word.toLowerCase();

  const irregulars: Record<string, string> = {
    people: 'person',
    men: 'man',
    women: 'woman',
    children: 'child',
    teeth: 'tooth',
    feet: 'foot',
    mice: 'mouse',
    geese: 'goose',
    oxen: 'ox',
    cacti: 'cactus',
    nuclei: 'nucleus',
    fungi: 'fungus',
    syllabi: 'syllabus',
    analyses: 'analysis',
    diagnoses: 'diagnosis',
    theses: 'thesis',
    crises: 'crisis'
  };

  // Handle irregulars
  if (irregulars[lower]) {
    const singular = irregulars[lower];
    return preserveCasing(word, lower, singular);
  }

  const isUppercase = word === word.toUpperCase();

  // ies → y
  if (word.match(/ies$/i) && word.length > 3) {
    return word.slice(0, -3) + (isUppercase ? 'Y' : 'y');
  }

  // es → base (for s, x, z, ch, sh)
  if (word.match(/(ses|xes|zes|ches|shes)$/i)) {
    return word.slice(0, -2); // remove 'es'
  }

  // s → base
  if (word.match(/s$/i) && !word.match(/ss$/i)) {
    return word.slice(0, -1);
  }

  // Default: assume word is already singular
  return word;
}
