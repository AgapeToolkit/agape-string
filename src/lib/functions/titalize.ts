/**
 * Converts a string to title case.
 * Capitalizes the first letter of each word, except for small words (e.g., "of", "and")
 * unless they appear at the beginning.
 *
 * @param input The string to be converted to title case.
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