import { PLACEHOLDER } from '../private/constants';

/**
 * Returns a string formatted as spoken words.
 *
 * Converts camelCase, PascalCase, snake_case, kebab-case, or mixed alphanumeric
 * identifiers into space-separated words. Capitalizes the first word, and
 * preserves acronyms and version tokens (e.g., `v2`, `v3.1`).
 *
 * ## Usage
 *
 * ```ts
 * verbalize("helloWorld"); // "Hello world"
 * ```
 *
 * ```ts
 * verbalize("HTML5Parser"); // "HTML 5 parser"
 * ```
 *
 * ```ts
 * verbalize("api_v2_response"); // "Api v2 response"
 * ```
 *
 * ```ts
 * verbalize("User-ID"); // "User ID"
 * ```
 *
 * ```ts
 * verbalize("employeeV3Final"); // "Employee v3 final"
 * ```
 *
 * ```ts
 * verbalize("version_2_0_release"); // "Version 2 0 release"
 * ```
 *
 * @param input A string to be returned as spoken words.
 * @returns A natural-language version of the input identifier.
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
