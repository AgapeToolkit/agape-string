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
    verbalize 
} from '@agape/string'

camelize('foo bar')      // fooBar

kebabify('Foo bar')      // foo-bar

pascalize('Foo bar')      // FooBar

pluralize('foo')         // foos

titalize('a foo a bar')  // A Foo a Bar

verbalize('foo-bar')     // Foo bar
```

## Description

Translate strings between different representations.

## Functions

`camelize`

Convert to camel case.

`kebabify`

Converted to kebab-case: lower case, word boundaries replaced with dashes. 

`pascalize`

Remove all symbols and spaces, captialize words.

`pluralize`

Adds an 's' to most words. Words that end in 'y' are changed to 'ies'. 
Words that end in s have 'es' appended to the word.

`titalize`

The first letter of each word is capitalized with the exception of
`a, an, and, at, be, but, by, for, if, in, of, on, the, to` which are only 
capitalized if they are the first word in the string, otherwise they 
are converted to lowercase.

`verbalize`

First character capitalized, word boundaries replaced with spaces.


## Author

Maverik Minett  maverik.minett@gmail.com


## Copyright

© 2020-2024 Maverik Minett

## License

MIT
