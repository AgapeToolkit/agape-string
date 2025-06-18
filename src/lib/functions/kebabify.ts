import { PLACEHOLDER } from "../private/constants";

/**
 * Converts a string to kebab-case.
 * Replaces spaces, underscores, and camelCase transitions with dashes,
 * removes special characters, and lowercases the result.
 *
 * @param input A string to be converted to kebab-case.
 */
export function kebabify(input: string): string {
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