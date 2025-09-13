/**
 * Converts a string to PascalCase.
 *
 * Removes non-alphanumeric characters, splits on casing and digits,
 * capitalizes each word, and strips leading/trailing separators.
 *
 * ## Usage
 *
 * ```ts
 * pascalize("hello world"); // "HelloWorld"
 * ```
 *
 * ```ts
 * pascalize("first_name"); // "FirstName"
 * ```
 *
 * ```ts
 * pascalize("user42Profile"); // "User42Profile"
 * ```
 *
 * ```ts
 * pascalize("API response code"); // "ApiResponseCode"
 * ```
 *
 * ```ts
 * pascalize("  messy__input--string  "); // "MessyInputString"
 * ```
 *
 * @param input A string to be returned in PascalCase.
 * @returns The PascalCased version of the input string.
 */
export function pascalize(input: string): string {
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
