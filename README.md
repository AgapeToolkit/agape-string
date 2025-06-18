# @agape/string

String and token manipulation

## Synopsis

```
import { 
    camelize,
    kebabify, 
    pascalize, 
    pluralize, 
    titalize, 
    verbalize,
    quantify
} from '@agape/string'

camelize('user name')          // userName
camelize('email-address')      // emailAddress

kebabify('Display Name')       // display-name
kebabify('userProfileId')      // user-profile-id

pascalize('user id')           // UserId
pascalize('api_response_code') // ApiResponseCode

pluralize('city')              // cities
pluralize('analysis')          // analyses

quantify(1, 'item')            // 1 item
quantify(3, 'box')             // 3 boxes

titalize('the lord of the rings')  // The Lord of the Rings
titalize('war and peace')          // War and Peace

verbalize('user-profile-id')   // User profile id
verbalize('XMLHttpRequest')    // XML Http Request
```

## Description

Translate strings between different representations.

## Functions

`camelize(input: string)`

Convert to camel case.

`kebabify(input: string)`

Converted to kebab-case: lower case, word boundaries replaced with dashes. 

`pascalize(input: string)`

Remove all symbols and spaces, captialize words.

`pluralize(input: string)`

Adds an 's' to most words. Words that end in 'y' are changed to 'ies'. 
Words that end in s have 'es' appended to the word. Handles special cases
like children and geese.

`quantify(value: number, unit: string, plural?: string)`

The value will be paired with the unit, either singular or plural form

`singularize(input: string)`

Converts a word to it's singular form if it is a plural. Removes the 's' from
most words. Replacies 'ies' with 'y'. Removes 'es' from the end of a word.
Handles special cases like 'child' and 'goose'.

`snakify(input: string)`

Converted to snake_case: lower case, word boundaries replaced with underscores. 

`titalize(input: number)`

The first letter of each word is capitalized with the exception of
`a, an, and, at, be, but, by, for, if, in, of, on, the, to` which are only 
capitalized if they are the first word in the string, otherwise they 
are converted to lowercase.

`verbalize(input: number)`

First character capitalized, word boundaries replaced with spaces.


## Author

Maverik Minett  maverik.minett@gmail.com


## Copyright

© 2020-2025 Maverik Minett

## License

MIT
