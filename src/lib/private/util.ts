/**
 * Copies the casing of `source` onto `target`, from the start.
 * Only affects characters that exist in the same position in both strings.
 * Appends remaining part of `target` (if longer) in lowercase.
 *
 * @param source Original input word (with desired casing)
 * @param sourceLower Lowercase version of source
 * @param target Plural version (assumed lowercase)
 */
export function preserveCasing(source: string, sourceLower: string, target: string): string {
  let result = '';

  for (let i = 0; i < target.length; i++) {
    if (i < source.length) {
      // Match casing from original input
      result += source[i] === sourceLower[i]
        ? target[i]
        : target[i].toUpperCase();
    } else {
      // Suffix, use as-is (lowercase)
      result += target[i];
    }
  }

  return result;
}