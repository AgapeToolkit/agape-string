
/**
 * Converts a string to camelCase.
 * Removes all non-alphanumeric separators and capitalizes each word except the first.
 *
 * @param input The input string to be camelized.
 */
export function camelize(input: string): string {
  const parts = input
    .replace(/[^A-Za-z0-9]+/g, ' ')                        // normalize delimiters
    .replace(/([a-z])([A-Z])/g, '$1 $2')                   // split camelCase
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')             // split acronyms like "HTMLParser"
    .trim()
    .split(/\s+/);                                         // split by space

  return parts
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}


/**
 * Converts a string to kebab-case.
 * Replaces spaces, underscores, and camelCase transitions with dashes,
 * removes special characters, and lowercases the result.
 *
 * @param input A string to be converted to kebab-case.
 */
export function kebabify(input: string): string {
  return input
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')           // camelCase → camel-Case
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')         // XMLHttp → XML-Http
    .replace(/[_\s]+/g, '-')                          // underscores/spaces → dash
    .replace(/[^a-zA-Z0-9\-]+/g, '')                  // remove symbols except dash
    .replace(/--+/g, '-')                             // collapse multiple dashes
    .replace(/^-+|-+$/g, '')                          // trim starting/trailing dash
    .toLowerCase();
}

/**
 * Returns a string formatted as spoken words.
 * Adds spaces between words in camelCase, PascalCase, snake_case, or kebab-case identifiers.
 * Capitalizes the first word only.
 * 
 * @param input A string to be returned as spoken words.
 */
export function verbalize(input: string): string {
  return input
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')       // camelCase → camel Case
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')     // XMLHttp → XML Http
    .replace(/[-_]+/g, ' ')                       // kebab-case and snake_case → space
    .replace(/\s+/g, ' ')                         // collapse extra spaces
    .trim()
    .replace(/^([a-z])/, (match) => match.toUpperCase()); // Capitalize first letter
}

/**
 * Converts a string to PascalCase.
 * Removes non-alphanumeric characters, capitalizes each word, and strips leading numbers.
 *
 * @param input A string to be returned in PascalCase.
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
    .map((word, index) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

/**
 * Returns a string formatted in its plural form.
 * Handles common English pluralization rules, including:
 * - y → ies
 * - s/x/z/ch/sh → es
 * - known irregulars (e.g., child → children)
 * 
 * The output preserves the casing of the input, especially the prefix.
 *
 * @param word A singular word to be pluralized
 */
export function pluralize(word: string): string {
  const lower = word.toLowerCase();

  const irregulars: Record<string, string> = {
    person: 'people',
    man: 'men',
    woman: 'women',
    child: 'children',
    tooth: 'teeth',
    foot: 'feet',
    mouse: 'mice',
    goose: 'geese',
    ox: 'oxen',
    cactus: 'cacti',
    nucleus: 'nuclei',
    fungus: 'fungi',
    syllabus: 'syllabi',
    analysis: 'analyses',
    diagnosis: 'diagnoses',
    thesis: 'theses',
    crisis: 'crises'
  };

  // Handle irregulars
  if (irregulars[lower]) {
    const plural = irregulars[lower];
    return preserveCasing(word, lower, plural);
  }

  // y → ies
  if (word.match(/[^aeiou]y$/i)) {
    return word.slice(0, -1) + 'ies';
  }

  // s, x, z, ch, sh → es
  if (word.match(/(s|x|z|ch|sh)$/i)) {
    return word + 'es';
  }

  // Default: just add 's'
  return word + 's';
}

/**
 * Copies the casing of `source` onto `target`, from the start.
 * Only affects characters that exist in the same position in both strings.
 * Appends remaining part of `target` (if longer) in lowercase.
 *
 * @param source Original input word (with desired casing)
 * @param sourceLower Lowercase version of source
 * @param target Plural version (assumed lowercase)
 */
function preserveCasing(source: string, sourceLower: string, target: string): string {
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


// define a file-level copy of the pluralize function so that the quanitfy
// function can have a `pluralize` attribute and still use `_pluralize`
const _pluralize = pluralize;

/**
 * Returns the singular form of a plural word.
 * Handles common English pluralization patterns and known irregulars.
 * Preserves casing of the original input.
 * 
 * @param word Plural word to be converted to singular
 */
export function singularize(word: string): string {
  const lower = word.toLowerCase();

  const irregulars: Record<string, string> = {
    people: 'person',
    men: 'man',
    women: 'woman',
    children: 'child',
    teeth: 'tooth',
    feet: 'foot',
    mice: 'mouse',
    geese: 'goose',
    oxen: 'ox',
    cacti: 'cactus',
    nuclei: 'nucleus',
    fungi: 'fungus',
    syllabi: 'syllabus',
    analyses: 'analysis',
    diagnoses: 'diagnosis',
    theses: 'thesis',
    crises: 'crisis'
  };

  // Handle irregulars
  if (irregulars[lower]) {
    const singular = irregulars[lower];
    return preserveCasing(word, lower, singular);
  }

  // ies → y
  if (word.match(/ies$/i) && word.length > 3) {
    return word.slice(0, -3) + 'y';
  }

  // es → base (for s, x, z, ch, sh)
  if (word.match(/(ses|xes|zes|ches|shes)$/i)) {
    return word.slice(0, -2); // remove 'es'
  }

  // s → base
  if (word.match(/s$/i) && !word.match(/ss$/i)) {
    return word.slice(0, -1);
  }

  // Default: assume word is already singular
  return word;
}

/**
 * Format a number in units, pluralizing the units if there is more or less than
 * one count.
 * @param count Number of units
 * @param unit Label for the value
 * @param plural Plural label for the value, will pluralize the single unit if
 *               not provided
 * @returns String in `x units` format
 */
export function quanitfy(count: number|string, unit: string, plural?: string) {
  const value = typeof count == 'number' ? count : Number(count);
  
  const label = value === 1 ? unit : plural === undefined ? pluralize(unit) : plural;
  
  return `${count} ${label}`

}

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
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) => {
      if (index === 0 || !smallWords.has(word)) {
        return word[0].toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(' ');
}