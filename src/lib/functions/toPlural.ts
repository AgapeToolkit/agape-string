import { preserveCasing } from '../private/util';

/**
 * Returns a string formatted in its plural form.
 *
 * Handles common English pluralization rules, including:
 * - y → ies
 * - s/x/z/ch/sh → es
 * - known irregulars (e.g., child → children)
 * - acronym exceptions (e.g., API → APIs)
 *
 * The output preserves the casing of the input, especially the prefix.
 *
 * @example
 * ```ts
 * toPlural("city"); // "cities"
 * ```
 *
 * @example
 * ```ts
 * toPlural("box"); // "boxes"
 * ```
 *
 * @example
 * ```ts
 * toPlural("child"); // "children"
 * ```
 *
 * @example
 * ```ts
 * toPlural("person"); // "people"
 * ```
 *
 * @example
 * ```ts
 * toPlural("API"); // "APIs"
 * ```
 *
 * @example
 * ```ts
 * toPlural("ID"); // "IDs"
 * ```
 *
 * @example
 * ```ts
 * toPlural("File"); // "Files"
 * ```
 *
 * @example
 * ```ts
 * toPlural("buzz"); // "buzzes"
 * ```
 *
 * @example
 * ```ts
 * toPlural("CPU"); // "CPUs"
 * ```
 *
 * @example
 * ```ts
 * toPlural("DOG"); // "DOGS"
 * ```
 *
 * @example
 * ```ts
 * toPlural("A"); // "As"
 * ```
 *
 * @param word A singular word to be pluralized.
 * @returns The plural form of the input word.
 */
export function toPlural(word: string): string {
  if (word.length === 0) return '';
  const lower = word.toLowerCase();

  const irregulars: Record<string, string> = {
    person: 'people',
    man: 'men',
    woman: 'women',
    child: 'children',
    tooth: 'teeth',
    foot: 'feet',
    mouse: 'mice',
    goose: 'geese',
    ox: 'oxen',
    cactus: 'cacti',
    nucleus: 'nuclei',
    fungus: 'fungi',
    syllabus: 'syllabi',
    analysis: 'analyses',
    diagnosis: 'diagnoses',
    thesis: 'theses',
    crisis: 'crises'
  };

  const acronyms: Record<string, string> = {
    API: 'APIs',
    ID: 'IDs',
    HTML: 'HTMLs',
    URL: 'URLs',
    CPU: 'CPUs',
    GPU: 'GPUs',
    FAQ: 'FAQs',
    UI: 'UIs',
    UX: 'UXs',
    IP: 'IPs',
    DBM: 'DBMs',
    ORM: 'ORMs',
    SDK: 'SDKs',
    CLI: 'CLIs',
    DOM: 'DOMs',
    JSON: 'JSONs',
    PDF: 'PDFs',
  }

  if (irregulars[lower]) {
    const plural = irregulars[lower];
    return preserveCasing(word, lower, plural);
  }

  const isUppercase = word.length && word === word.toUpperCase();

  if (isUppercase && acronyms[word]) {
    return acronyms[word];
  }

  if (word.match(/[^aeiou]y$/i)) {
    return word.slice(0, -1) + (isUppercase ? 'EIS' : 'ies');
  }

  if (word.match(/^.$/)) {
    return word + 's';
  }

  if (word.length > 1 && word.match(/(s|x|z|ch|sh)$/i)) {
    return word + (isUppercase ? 'ES' : 'es');
  }

  return word + (isUppercase ? 'S' : 's');
}
