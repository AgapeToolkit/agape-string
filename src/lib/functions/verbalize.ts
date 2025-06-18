import { PLACEHOLDER } from '../private/constants';

/**
 * Returns a string formatted as spoken words.
 * Adds spaces between words in camelCase, PascalCase, snake_case, or kebab-case identifiers.
 * Capitalizes the first word only.
 *
 * @param input A string to be returned as spoken words.
 */
export function verbalize(input: string): string {
  const versionMatches: string[] = [];

  const preserved = input.replace(/(v\d+(\.\d+)*)(?=[^a-zA-Z0-9]|$)/gi, (_, match) => {
    const id = versionMatches.length;
    versionMatches.push(match.toLowerCase());
    return ` ${PLACEHOLDER}${id}`;
  });

  const split = preserved
    .replace(/([a-z])([A-Z])/g, '$1 $2')            // camelCase → camel Case
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')      // XMLHTTP → XML HTTP
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')            // foo2 → foo 2
    .replace(/(\d)([a-zA-Z])/g, '$1 $2')            // 2foo → 2 foo
    .replace(/[-_]+/g, ' ')                         // kebab/snake → space
    .replace(/\s+/g, ' ')                           // collapse multiple spaces
    .trim();

  const result = split
    .split(' ')
    .map(word => {
      const versionIndex = new RegExp(`^${PLACEHOLDER}(\\d+)$`).exec(word);
      if (versionIndex) {
        return versionMatches[parseInt(versionIndex[1], 10)];
      }
      if (word === word.toUpperCase()) {
        return word; // preserve acronyms
      }
      return word.toLowerCase();
    })
    .join(' ');

  return result.charAt(0).toUpperCase() + result.slice(1);
}