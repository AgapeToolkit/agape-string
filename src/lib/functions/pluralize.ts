import { preserveCasing } from '../private/util';

/**
 * Returns a string formatted in its plural form.
 * Handles common English pluralization rules, including:
 * - y → ies
 * - s/x/z/ch/sh → es
 * - known irregulars (e.g., child → children)
 *
 * The output preserves the casing of the input, especially the prefix.
 *
 * @param word A singular word to be pluralized
 */
export function pluralize(word: string): string {
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

  if (irregulars[lower]) {
    const plural = irregulars[lower];
    return preserveCasing(word, lower, plural);
  }

  if (word.match(/[^aeiou]y$/i)) {
    return word.slice(0, -1) + 'ies';
  }

  if (word.length > 1 && word.match(/(s|x|z|ch|sh)$/i)) {
    return word + 'es';
  }

  return word + 's';
}
