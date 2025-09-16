import { PLACEHOLDER } from '../private/constants';

/**
 * Converts a string to snake_case.
 *
 * Replaces spaces, dashes, and camelCase transitions with underscores,
 * removes special characters, preserves embedded version tokens (like "v2"),
 * and lowercases the result.
 *
 * @example
 * ```ts
 * toSnakeCase("hello world"); // "hello_world"
 * ```
 *
 * @example
 * ```ts
 * toSnakeCase("UserProfileV2"); // "user_profile_v2"
 * ```
 *
 * @example
 * ```ts
 * toSnakeCase("HTML5 Parser"); // "html_5_parser"
 * ```
 *
 * @example
 * ```ts
 * toSnakeCase("  messy-input_string  "); // "messy_input_string"
 * ```
 *
 * @example
 * ```ts
 * toSnakeCase("ReportV3Final"); // "report_v3_final"
 * ```
 *
 * @param input A string to be converted to snake_case.
 * @returns The snake_cased version of the input.
 */
export function toSnakeCase(input: string): string {
  const versionMatches: string[] = [];

  // Step 1: replace version tokens (v2) with unique placeholders
  const preserved = input.replace(/(v\d+)(?=[A-Z]|\b)/gi, (match) => {
    const id = versionMatches.length;
    versionMatches.push(match);
    return `_${PLACEHOLDER}_${id}`;
  });

  let kebabed = preserved
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')          // camelCase
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')        // acronymWord
    .replace(/([a-zA-Z])([0-9])/g, '$1_$2')          // letter-digit
    .replace(/([0-9])([a-zA-Z])/g, '$1_$2')          // digit-letter
    .replace(/-/g, '_')                              // dash → underscore (1:1)
    .replace(/\s+/g, '_')                            // spaces → dash
    .replace(new RegExp(`[^a-zA-Z0-9-${PLACEHOLDER}]+`, 'g'), '_') // symbols → dash
    .replace(/^_+|_+$/g, '')                         // trim underscores
    .toLowerCase();

  // Step 3: restore version placeholders (convert dots to dashes, lowercase)
  versionMatches.forEach((version, i) => {
    kebabed = kebabed.replace(`${PLACEHOLDER}_${i}`, version);
  });

  // Step 4: lowercase entire result
  return kebabed.toLowerCase();
}
