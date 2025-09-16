import { PLACEHOLDER } from "../private/constants";

/**
 * Converts a string to kebab-case.
 *
 * Replaces spaces, underscores, camelCase transitions, and other separators with dashes.
 * It also preserves version tokens like "v2" and lowercases the result.
 *
 * @example
 * ```ts
 * toKebabCase("hello world"); // "hello-world"
 * ```
 *
 * @example
 * ```ts
 * toKebabCase("first_name"); // "first-name"
 * ```
 *
 * @example
 * ```ts
 * toKebabCase("userProfile42"); // "user-profile-42"
 * ```
 *
 * @example
 * ```ts
 * toKebabCase("APIResponseV2"); // "api-response-v2"
 * ```
 *
 * @example
 * ```ts
 * toKebabCase("HTML5_Parser v3"); // "html-5-parser-v3"
 * ```
 *
 * @example
 * ```ts
 * toKebabCase("  Leading_and trailing   "); // "leading-and-trailing"
 * ```
 *
 * @param input A string to be converted to kebab-case.
 * @returns The kebab-cased version of the input string.
 */
export function toKebabCase(input: string): string {
  const versionMatches: string[] = [];

  // Step 1: replace version tokens (v2) with unique placeholders
  const preserved = input.replace(/(v\d+)(?=[A-Z]|\b)/gi, (match) => {
    const id = versionMatches.length;
    versionMatches.push(match);
    return `-${PLACEHOLDER}-${id}`;
  });

  let kebabed = preserved
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')          // camelCase
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')        // acronymWord
    .replace(/([a-zA-Z])([0-9])/g, '$1-$2')          // letter-digit
    .replace(/([0-9])([a-zA-Z])/g, '$1-$2')          // digit-letter
    .replace(/_/g, '-')                              // underscore → dash (1:1)
    .replace(/\s+/g, '-')                            // spaces → dash
    .replace(new RegExp(`[^a-zA-Z0-9-${PLACEHOLDER}]+`, 'g'), '-') // symbols → dash
    .replace(/^-+|-+$/g, '')                         // trim dashes
    .toLowerCase();

  // Step 3: restore version placeholders (convert dots to dashes, lowercase)
  versionMatches.forEach((version, i) => {
    kebabed = kebabed.replace(`${PLACEHOLDER}-${i}`, version);
  });

  // Step 4: lowercase entire result
  return kebabed.toLowerCase();
}
