/**
 * Converts a string to PascalCase.
 *
 * Removes non-alphanumeric characters, splits on casing and digits,
 * capitalizes each word, and strips leading/trailing separators.
 *
 * @example
 * ```ts
 * toPascalCase("hello world"); // "HelloWorld"
 * ```
 *
 * @example
 * ```ts
 * toPascalCase("first_name"); // "FirstName"
 * ```
 *
 * @example
 * ```ts
 * toPascalCase("user42Profile"); // "User42Profile"
 * ```
 *
 * @example
 * ```ts
 * toPascalCase("API response code"); // "ApiResponseCode"
 * ```
 *
 * @example
 * ```ts
 * toPascalCase("  messy__input--string  "); // "MessyInputString"
 * ```
 *
 * @param input A string to be returned in PascalCase.
 * @returns The PascalCased version of the input string.
 */
export function toPascalCase(input: string): string {
  const parts = input
    .replace(/[^A-Za-z0-9]+/g, ' ')
    .replace(/([0-9])([A-Za-z])/g, '$1 $2')     // digit → letter
    .replace(/([A-Za-z])([0-9])/g, '$1 $2')     // letter → digit
    .replace(/([A-Z])/g, ' $1')                 // split every capital letter
    .trim()
    .split(/\s+/);

  return parts
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}
