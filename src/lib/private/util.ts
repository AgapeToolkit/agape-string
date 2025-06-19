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
  if (source === source.toUpperCase()) {
    return target.toUpperCase();
  }

  if (source[0] === source[0].toUpperCase() && source.slice(1) === source.slice(1).toLowerCase()) {
    return target[0].toUpperCase() + target.slice(1).toLowerCase();
  }

  if (source === source.toLowerCase()) {
    return target.toLowerCase();
  }

  let result = '';
  for (let i = 0; i < target.length; i++) {
    if (i < source.length) {
      result += source[i] === sourceLower[i]
        ? target[i]
        : target[i].toUpperCase();
    } else {
      result += target[i];
    }
  }

  return result;
}
