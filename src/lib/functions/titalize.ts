/**
 * Converts a string to title case.
 *
 * Capitalizes the first letter of each word, except for small words
 * (like "of", "and", "the") unless they appear at the beginning.
 * Preserves words already containing uppercase letters (e.g., acronyms).
 *
 * @param input The string to be converted to title case.
 * @returns The input string formatted in title case.
 *
 * @example
 * titalize("the quick brown fox"); // "The Quick Brown Fox"
 *
 * @example
 * titalize("a tale of two cities"); // "A Tale of Two Cities"
 *
 * @example
 * titalize("in the heart of the sea"); // "In the Heart of the Sea"
 *
 * @example
 * titalize("API reference guide"); // "API Reference Guide"
 *
 * @example
 * titalize("   war and peace   "); // "War and Peace"
 */
export function titalize(input: string): string {
  const smallWords = new Set([
    'a', 'an', 'and', 'at', 'be', 'but', 'by', 'for',
    'in', 'of', 'on', 'the', 'to'
  ]);

  return input
    .trim()
    .split(/\s+/)
    .filter(word => word.length)
    .map(
      (word, index) => {
        const lowercased = word.toLowerCase();
        if (/[A-Z]/.test(word)) {
          return word;
        }
        if (smallWords.has(lowercased) && index != 0) {
          return lowercased;
        }
        return word[0].toUpperCase() + word.slice(1);
      }
    )
    .join(' ');
}