/**
 * Converts a string to camelCase.
 * Removes all non-alphanumeric separators and capitalizes each word except the first.
 *
 * @example
 * ```ts
 * toCamelCase("hello world"); // "helloWorld"
 * ```
 *
 * @example
 * ```ts
 * toCamelCase("Hello_world"); // "helloWorld"
 * ```
 *
 * @example
 * ```ts
 * toCamelCase("API_response_code"); // "apiResponseCode"
 * ```
 *
 * @example
 * ```ts
 * toCamelCase("user-42-profile"); // "user42Profile"
 * ```
 *
 * @example
 * ```ts
 * toCamelCase("ThisIsALongVariableName"); // "thisIsALongVariableName"
 * ```
 *
 * @param input The input string to be camelized.
 * @returns The camelCased version of the input string.
 */
export function toCamelCase(input: string): string {
  const parts = input
    .replace(/[^A-Za-z0-9]+/g, ' ')
    .replace(/([0-9])([A-Za-z])/g, '$1 $2')     // digit → letter
    .replace(/([A-Za-z])([0-9])/g, '$1 $2')     // letter → digit
    .replace(/([A-Z])/g, ' $1')                 // split every capital letter
    .trim()
    .split(/\s+/);

  return parts
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}
