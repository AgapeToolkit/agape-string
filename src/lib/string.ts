
/**
 * Returns a string formatted in camel case. 
 * @param string A string to be returned as a class name
 */
export function camelize(string: string) {
  return string
    .replace(/[-_]/, ' ')
    .replace(/(\w)([a-z]+)/g , (str, left, right) => { return left.toUpperCase() + right } )
    .replace(/[^A-Za-z0-9]/, '')
    .replace(/^([A-Z])/, (str) => { return str.toLowerCase() } )
}

/**
 * Returns a string formatted as a token. Removes all symbols and replaces
 * spaces and punctuation with dashes.
 * 
 * @param string A string to be returned as a token
 */
export function kebabify(string: string) {
  return string
    .replace(/[^A-Za-z0-9\s\-_]/g, '')
    .replace(/(.)([A-Z][a-z]+)/g , (str, left, right) => { return left + '-' + right } )
    .replace(/([a-z0-9])([A-Z])/g, (str, left, right) => { return left + '-' + right } )
    .replace(/[_\s]+-?/, '-')
    .toLowerCase()
}

/**
 * Returns a string formatted as spoken words. Adds spaces between words,
 * replacing underscores and hyphens.
 * @param string A string to be returned as spoken words
 */
export function verbalize(string: string) {
  return string
    .replace(/(.)([A-Z][a-z]+)/g , (str, left, right) => { return left + ' ' + right } )
    .replace(/([a-z0-9])([A-Z])/g, (str, left, right) => { return left + ' ' + right } )
    .replace(/[-_]/, ' ')
    .replace(/^([a-z])/, (str) => { return str.toUpperCase() } )
}

/**
 * Returns a string formatted as a label. Adds spaces between words,
 * replacing underscores and hyphens, capitalize the first word.
 * @param string A string to be returned as spoken words
 */
export function labelize(string: string) {
  return string
    .replace(/(.)([A-Z][a-z]+)/g , (str, left, right) => { return left + ' ' + right } )
    .replace(/([a-z0-9])([A-Z])/g, (str, left, right) => { return left + ' ' + right } )
    .replace(/[-_]/, ' ')
    .toLocaleLowerCase()
    .replace(/^([a-z])/, (str) => { return str.toUpperCase() } )
}

/**
 * Returns a string formatted as a class name. Removes all spaces and symbols,
 * captializes the first letter of each word.
 * @param string A string to be returned in pascal case
 */
export function pascalize(string: string) {
  return string
    .replace(/[-_]/, ' ')
    .replace(/(\w)([a-z]+)/g , (str, left, right) => { return left.toUpperCase() + right } )
    .replace(/[^A-Za-z0-9]/, '')
    .replace(/^[0-9]+/, '')
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
 * @param plural Set to false to disable pluralization
 * @returns String in `x units` format
 */
export function quanitfy(count: number|string, unit: string, pluralize = true) {
  const value = typeof count == 'number' ? count : Number(count);
  
  const label = pluralize === false || value === 1 ? unit : _pluralize(unit);
  
  return `${count} ${label}`

}

/**
 * Formats a string in it's labels form. Most strings a returned
 * with an 's' appended to the end. For strings that end with 'y',
 * the 'y' is replaced with 'ies'. Strings that end with 'us', the
 * 'us' is replaced with 'i'.
 * @param string String to be returned in labels form
 */
export function titalize(string: string) {
  return string
    .replace(/(^|\s)([a-z])/g , (str, left, right) => { return left + right.toUpperCase() } )
    .replace(/(?!^)\b(The)\b/, 'the')
    .replace(/(?!^)\b(Of)\b/, 'of')
    .replace(/(?!^)\b(In)\b/, 'in')
    .replace(/(?!^)\b(On)\b/, 'on')
    .replace(/(?!^)\b(A)\b/, 'a')
    .replace(/(?!^)\b(An)\b/, 'an')
    .replace(/(?!^)\b(And)\b/, 'and')
    .replace(/(?!^)\b(At)\b/, 'at')
    .replace(/(?!^)\b(By)\b/, 'by')
    .replace(/(?!^)\b(Be)\b/, 'be')
    .replace(/(?!^)\b(To)\b/, 'to')
    .replace(/(?!^)\b(But)\b/, 'but')
    .replace(/(?!^)\b(For)\b/, 'for')
}