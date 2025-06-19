/**
 * Converts a string to camelCase.
 * Removes all non-alphanumeric separators and capitalizes each word except the first.
 *
 * @param input The input string to be camelized.
 * @returns The camelCased version of the input string.
 *
 * @example
 * camelize("hello world"); // "helloWorld"
 *
 * @example
 * camelize("Hello_world"); // "helloWorld"
 *
 * @example
 * camelize("API_response_code"); // "apiResponseCode"
 *
 * @example
 * camelize("user-42-profile"); // "user42Profile"
 *
 * @example
 * camelize("ThisIsALongVariableName"); // "thisIsALongVariableName"
 */
export function camelize(input: string): string {
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
