# @agape/string

String manipulation and transformation utilities for TypeScript.

## ✨ Functions

### `toCamelCase(input: string)`
Converts a string to camelCase format.

### `toKebabCase(input: string)`
Converts a string to kebab-case format.

### `toPascalCase(input: string)`
Converts a string to PascalCase format.

### `toSnakeCase(input: string)`
Converts a string to snake_case format.

### `toTitleCase(input: string)`
Converts a string to Title Case format.

### `toWords(input: string)`
Converts identifiers to natural language words.

### `toPlural(word: string)`
Converts a singular word to its plural form.

### `toSingular(word: string)`
Converts a plural word to its singular form.

### `quantify(count: number | string, unit: string, plural?: string)`
Formats a number with a unit, automatically pluralizing based on count.

---

## 🚀 Example

```ts
import { 
  toCamelCase, 
  toKebabCase, 
  toPascalCase, 
  toSnakeCase, 
  toTitleCase, 
  toWords, 
  toPlural, 
  toSingular, 
  quantify 
} from '@agape/string';

// Case conversion
toCamelCase('user name')          // "userName"
toCamelCase('email-address')      // "emailAddress"

toKebabCase('Display Name')       // "display-name"
toKebabCase('userProfileId')      // "user-profile-id"

toPascalCase('user id')           // "UserId"
toPascalCase('api_response_code') // "ApiResponseCode"

toSnakeCase('userName')           // "user_name"
toSnakeCase('APIResponseCode')    // "api_response_code"

toTitleCase('the lord of the rings')  // "The Lord of the Rings"
toTitleCase('war and peace')          // "War and Peace"

// Natural language
toWords('user-profile-id')        // "User profile id"
toWords('XMLHttpRequest')         // "XML Http Request"

// Pluralization
toPlural('city')                  // "cities"
toPlural('analysis')              // "analyses"
toPlural('API')                   // "APIs"

toSingular('cities')              // "city"
toSingular('analyses')            // "analysis"
toSingular('APIs')                // "API"

// Quantification
quantify(1, 'item')               // "1 item"
quantify(3, 'box')                // "3 boxes"
quantify(1, 'child', 'children')  // "1 child"
quantify(2, 'child', 'children')  // "2 children"
quantify(5, 'CPU')                // "5 CPUs"
```

---

## 🔧 Function Details

### `toCamelCase(input: string)`
Converts a string to camelCase by removing non-alphanumeric separators and capitalizing each word except the first.

**Examples:**
- `"hello world"` → `"helloWorld"`
- `"API_response_code"` → `"apiResponseCode"`
- `"user-42-profile"` → `"user42Profile"`

### `toKebabCase(input: string)`
Converts a string to kebab-case by replacing spaces, underscores, and camelCase transitions with dashes. Preserves version tokens like "v2".

**Examples:**
- `"hello world"` → `"hello-world"`
- `"UserProfileV2"` → `"user-profile-v2"`
- `"HTML5 Parser"` → `"html-5-parser"`

### `toPascalCase(input: string)`
Converts a string to PascalCase by removing non-alphanumeric characters, splitting on casing and digits, and capitalizing each word.

**Examples:**
- `"hello world"` → `"HelloWorld"`
- `"user42Profile"` → `"User42Profile"`
- `"API response code"` → `"ApiResponseCode"`

### `toSnakeCase(input: string)`
Converts a string to snake_case by replacing spaces, dashes, and camelCase transitions with underscores. Preserves version tokens.

**Examples:**
- `"hello world"` → `"hello_world"`
- `"UserProfileV2"` → `"user_profile_v2"`
- `"HTML5 Parser"` → `"html_5_parser"`

### `toTitleCase(input: string)`
Converts a string to Title Case by capitalizing the first letter of each word, except for small words (like "of", "and", "the") unless they appear at the beginning.

**Examples:**
- `"the quick brown fox"` → `"The Quick Brown Fox"`
- `"a tale of two cities"` → `"A Tale of Two Cities"`
- `"API reference guide"` → `"API Reference Guide"`

### `toWords(input: string)`
Converts identifiers to natural language words by splitting camelCase, PascalCase, snake_case, and kebab-case into space-separated words.

**Examples:**
- `"userProfileId"` → `"User profile id"`
- `"XMLHttpRequest"` → `"XML Http Request"`
- `"api_v2_response"` → `"Api v2 response"`

### `toPlural(word: string)`
Converts a singular word to its plural form using common English pluralization rules.

**Features:**
- Handles irregular plurals (child → children, person → people)
- Preserves acronyms (API → APIs, ID → IDs)
- Maintains original casing

**Examples:**
- `"city"` → `"cities"`
- `"box"` → `"boxes"`
- `"child"` → `"children"`
- `"API"` → `"APIs"`

### `toSingular(word: string)`
Converts a plural word to its singular form using common English patterns.

**Features:**
- Handles irregular plurals (children → child, people → person)
- Preserves original casing
- Smart about double letters (boss → boss, not bo)

**Examples:**
- `"cities"` → `"city"`
- `"boxes"` → `"box"`
- `"children"` → `"child"`
- `"APIs"` → `"API"`

### `quantify(count: number | string, unit: string, plural?: string)`
Formats a number with a unit, automatically pluralizing the unit based on the count.

**Parameters:**
- `count`: Number of units (number or string)
- `unit`: Label for the singular unit
- `plural`: Optional plural label (auto-generated if not provided)

**Examples:**
- `quantify(1, 'item')` → `"1 item"`
- `quantify(3, 'box')` → `"3 boxes"`
- `quantify(1, 'child', 'children')` → `"1 child"`
- `quantify(2, 'child', 'children')` → `"2 children"`

---

## 📚 Documentation

See the full API documentation at [agape.dev/api](https://agape.dev/api).

## 📦 Agape Toolkit

This package is part of the [Agape Toolkit](https://github.com/AgapeToolkit/AgapeToolkit) - a comprehensive collection of TypeScript utilities and libraries for modern web development.
