import { camelize, kebabify, verbalize, pascalize, pluralize, titalize, quanitfy } from './string'

describe('camelize', () => {
  it('should convert space-separated words to camelCase', () => {
    expect(camelize('first name')).toEqual('firstName');
    expect(camelize('user profile id')).toEqual('userProfileId');
  });

  it('should convert hyphenated words to camelCase', () => {
    expect(camelize('first-name')).toEqual('firstName');
    expect(camelize('user-profile-id')).toEqual('userProfileId');
  });

  it('should convert snake_case to camelCase', () => {
    expect(camelize('first_name')).toEqual('firstName');
    expect(camelize('user_profile_id')).toEqual('userProfileId');
  });

  it('should handle mixed delimiters', () => {
    expect(camelize('user-profile_id')).toEqual('userProfileId');
    expect(camelize('user profile_id-name')).toEqual('userProfileIdName');
  });

  it('should lowercase the first character', () => {
    expect(camelize('First Name')).toEqual('firstName');
  });

  it('should remove non-alphanumeric characters', () => {
    expect(camelize('user@name!')).toEqual('userName');
    expect(camelize('hello.world')).toEqual('helloWorld');
  });

  it('should handle numbers correctly', () => {
    expect(camelize('version 2 id')).toEqual('version2Id');
    expect(camelize('api_2_response')).toEqual('api2Response');
  });

  it('should return empty string for empty input', () => {
    expect(camelize('')).toEqual('');
  });

  it('should not change already camelCased input', () => {
    expect(camelize('alreadyCamelCase')).toEqual('alreadyCamelCase');
  });

  it('should handle a single word', () => {
    expect(camelize('username')).toEqual('username');
    expect(camelize('Username')).toEqual('username');
  });
});

describe('pascalize', () => {
  it('should convert space-separated words to PascalCase', () => {
    expect(pascalize('first name')).toEqual('FirstName');
    expect(pascalize('api response')).toEqual('ApiResponse');
  });

  it('should convert kebab-case to PascalCase', () => {
    expect(pascalize('user-profile')).toEqual('UserProfile');
    expect(pascalize('api-response-code')).toEqual('ApiResponseCode');
  });

  it('should convert snake_case to PascalCase', () => {
    expect(pascalize('user_profile')).toEqual('UserProfile');
    expect(pascalize('api_response_code')).toEqual('ApiResponseCode');
  });

  it('should convert mixed delimiters to PascalCase', () => {
    expect(pascalize('user_profile-id')).toEqual('UserProfileId');
    expect(pascalize('user profile-id_name')).toEqual('UserProfileIdName');
  });

  it('should remove non-alphanumeric characters', () => {
    expect(pascalize('foo@bar!baz')).toEqual('FooBarBaz');
    expect(pascalize('hello.world')).toEqual('HelloWorld');
    expect(pascalize('this#is$clean')).toEqual('ThisIsClean');
  });

  it('should preserve numeric prefix', () => {
    expect(pascalize('123foo bar')).toEqual('123FooBar');
    expect(pascalize('456-api-response')).toEqual('456ApiResponse');
  });

  it('should retain numbers elsewhere in the string', () => {
    expect(pascalize('version 2')).toEqual('Version2');
    expect(pascalize('item_404')).toEqual('Item404');
    expect(pascalize('response code 500')).toEqual('ResponseCode500');
  });

  it('should preserve clean PascalCase input', () => {
    expect(pascalize('UserProfile')).toEqual('UserProfile');
    expect(pascalize('XMLHttpRequest')).toEqual('XMLHttpRequest');
  });

  it('should capitalize the first letter of lowercase words', () => {
    expect(pascalize('username')).toEqual('Username');
    expect(pascalize('profile')).toEqual('Profile');
  });

  it('should trim and clean excess whitespace', () => {
    expect(pascalize('  user   profile  ')).toEqual('UserProfile');
    expect(pascalize('\t api \n response')).toEqual('ApiResponse');
  });

  it('should return empty string for empty input', () => {
    expect(pascalize('')).toEqual('');
    expect(pascalize('   ')).toEqual('');
  });

  it('should not break on single-character input', () => {
    expect(pascalize('x')).toEqual('X');
    expect(pascalize('X')).toEqual('X');
  });

  it('should not alter valid all-digit strings except trimming', () => {
    expect(pascalize('123')).toEqual('123');
    expect(pascalize('   123   ')).toEqual('123');
  });
});


describe('pluralize', () => {

  it('should pluralize regular nouns', () => {
    expect(pluralize('dog')).toEqual('dogs');
    expect(pluralize('book')).toEqual('books');
    expect(pluralize('car')).toEqual('cars');
  });

  it('should pluralize words ending in "y"', () => {
    expect(pluralize('city')).toEqual('cities');
    expect(pluralize('puppy')).toEqual('puppies');
  });

  it('should pluralize words ending in "s", "x", "z", "ch", "sh"', () => {
    expect(pluralize('bus')).toEqual('buses');
    expect(pluralize('box')).toEqual('boxes');
    expect(pluralize('buzz')).toEqual('buzzes');
    expect(pluralize('watch')).toEqual('watches');
    expect(pluralize('dish')).toEqual('dishes');
  });

  it('should pluralize known irregulars', () => {
    expect(pluralize('child')).toEqual('children');
    expect(pluralize('person')).toEqual('people');
    expect(pluralize('mouse')).toEqual('mice');
    expect(pluralize('goose')).toEqual('geese');
    expect(pluralize('foot')).toEqual('feet');
    expect(pluralize('tooth')).toEqual('teeth');
    expect(pluralize('man')).toEqual('men');
    expect(pluralize('woman')).toEqual('women');
    expect(pluralize('analysis')).toEqual('analyses');
    expect(pluralize('cactus')).toEqual('cacti');
  });

  it('should preserve initial capitalization', () => {
    expect(pluralize('City')).toEqual('Cities');
    expect(pluralize('Bus')).toEqual('Buses');
    expect(pluralize('Child')).toEqual('Children');
    expect(pluralize('Person')).toEqual('People');
    expect(pluralize('Box')).toEqual('Boxes');
  });

  it('should preserve all-uppercase acronyms', () => {
    expect(pluralize('API')).toEqual('APIs');
    expect(pluralize('ID')).toEqual('IDs');
    expect(pluralize('HTML')).toEqual('HTMLs');
  });

  it('should pluralize single-letter words', () => {
    expect(pluralize('A')).toEqual('As');
    expect(pluralize('x')).toEqual('xs');
  });

  it('should handle empty string', () => {
    expect(pluralize('')).toEqual('s');
  });

  it('should pluralize words with existing "es" ending appropriately', () => {
    expect(pluralize('thesis')).toEqual('theses');
    expect(pluralize('crisis')).toEqual('crises');
    expect(pluralize('diagnosis')).toEqual('diagnoses');
    expect(pluralize('syllabus')).toEqual('syllabi');
  });

});

describe('titalize', () => {

  it('should capitalize each significant word', () => {
    expect(titalize('foo bar')).toEqual('Foo Bar');
    expect(titalize('quick brown fox')).toEqual('Quick Brown Fox');
  });

  it('should preserve case after hyphens', () => {
    expect(titalize('foo-bar')).toEqual('Foo-bar');
    expect(titalize('jack-in-the-box')).toEqual('Jack-in-the-box');
  });

  it('should lowercase functional words except when first', () => {
    expect(titalize('hop on pop')).toEqual('Hop on Pop');
    expect(titalize('ducks in a row')).toEqual('Ducks in a Row');
    expect(titalize('james and the anteater')).toEqual('James and the Anteater');
    expect(titalize('the wonderful world of mystery science')).toEqual('The Wonderful World of Mystery Science');
    expect(titalize('and then there were none')).toEqual('And Then There Were None');
  });

  it('should capitalize functional words when first', () => {
    expect(titalize('in the beginning')).toEqual('In the Beginning');
    expect(titalize('at the gates')).toEqual('At the Gates');
    expect(titalize('by the sea')).toEqual('By the Sea');
  });

  it('should not change casing of punctuation', () => {
    expect(titalize('who framed roger rabbit?')).toEqual('Who Framed Roger Rabbit?');
    expect(titalize('what time is it, mr. fox?')).toEqual('What Time Is It, Mr. Fox?');
  });

  it('should handle mixed casing inputs by preserving case (seems intentional)', () => {
    expect(titalize('ThE gIrL wItH tHe DrAgOn TaTtOo')).toEqual('ThE gIrL wItH tHe DrAgOn TaTtOo');
  });

  it('should trim and clean excess whitespace', () => {
    expect(titalize('  the   jungle   book  ')).toEqual('The Jungle Book');
    expect(titalize('\nhop\non\npop\n')).toEqual('Hop on Pop');
  });

  it('should work with single-word input', () => {
    expect(titalize('frozen')).toEqual('Frozen');
    expect(titalize('and')).toEqual('And');
  });

  it('should handle acronyms as capitalized', () => {
    expect(titalize('the rise of NASA')).toEqual('The Rise of NASA');
  });

  it('should handle empty string', () => {
    expect(titalize('')).toEqual('');
  });

});

describe('kebabify', () => {

  it('should kebabify space-separated strings', () => {
    expect(kebabify('Foo Bar')).toEqual('foo-bar');
    expect(kebabify('The Quick Brown Fox')).toEqual('the-quick-brown-fox');
  });

  it('should kebabify camelCase', () => {
    expect(kebabify('fooBar')).toEqual('foo-bar');
    expect(kebabify('getUserId')).toEqual('get-user-id');
  });

  it('should kebabify PascalCase', () => {
    expect(kebabify('FooBar')).toEqual('foo-bar');
    expect(kebabify('HTMLParser')).toEqual('html-parser');
    expect(kebabify('GetUserID')).toEqual('get-user-id');
  });

  it('should normalize existing kebab-case', () => {
    expect(kebabify('foo-bar')).toEqual('foo-bar');
  });

  it('should preserve multiple dashes', () => {
    expect(kebabify('foo--bar')).toEqual('foo--bar');
    expect(kebabify('foo---bar---baz')).toEqual('foo---bar---baz');
  });

  it('should convert multiple underscores to multiple hyphens', () => {
    expect(kebabify('foo__bar')).toEqual('foo--bar');
    expect(kebabify('foo___bar___baz')).toEqual('foo---bar---baz');
  });

  it('should convert snake_case to kebab-case', () => {
    expect(kebabify('foo_bar')).toEqual('foo-bar');
    expect(kebabify('get_user_id')).toEqual('get-user-id');
  });

  it('should remove special characters and preserve alphanumerics', () => {
    expect(kebabify('foo@bar!baz')).toEqual('foo-bar-baz');
    expect(kebabify('hello.world')).toEqual('hello-world');
    expect(kebabify('what#the$heck')).toEqual('what-the-heck');
  });

  it('should kebabify acronyms and numbers', () => {
    expect(kebabify('APIResponse')).toEqual('api-response');
    expect(kebabify('userID2')).toEqual('user-id-2');
    expect(kebabify('html5Parser')).toEqual('html-5-parser');
    expect(kebabify('v2Response')).toEqual('v2-response');
  });

  it('should preserve version tokens like v2, v1.0, v2.0.1', () => {
    expect(kebabify('v2')).toEqual('v2');
    expect(kebabify('v1.0')).toEqual('v1-0');
    expect(kebabify('v2.0.1')).toEqual('v2-0-1');
    expect(kebabify('apiV1.0')).toEqual('api-v1-0');
    expect(kebabify('apiV2.0.1Response')).toEqual('api-v2-0-1-response');
  });

  it('should kebabify mixed delimiters and normalize them', () => {
    expect(kebabify('foo_bar-baz value')).toEqual('foo-bar-baz-value');
    expect(kebabify('foo_bar--baz')).toEqual('foo-bar--baz');
  });

  it('should return empty string for empty input', () => {
    expect(kebabify('')).toEqual('');
  });

  it('should return a single lowercase word if input is a single word', () => {
    expect(kebabify('FOO')).toEqual('foo');
    expect(kebabify('bar')).toEqual('bar');
  });

  it('should strip leading and trailing dashes from messy input', () => {
    expect(kebabify('---foo--bar---')).toEqual('foo--bar');
    expect(kebabify('  foo bar  ')).toEqual('foo-bar');
  });

});



describe('verbalize', () => {
  
  it('should verbalize the string', () => {
    expect( verbalize('foo-bar') ).toEqual('Foo bar')
  })

})

describe('quantify', () => {

  let value: number|string;
  let label: string;

  beforeEach( () => {
    value = undefined;
    label = 'cat';
  })

  it('should pluralize the label if < 0', () => {
    value = -1;
    expect( quanitfy(value, label) ).toBe("-1 cats")
  })

  it('should pluralize the label if 0', () => {
    value = 0;
    expect( quanitfy(value, label) ).toBe("0 cats")
  })

  it('should pluralize the label if > 0 and < 1', () => {
    value = 0.5;
    expect( quanitfy(value, label) ).toBe("0.5 cats")
  })

  it('should not pluralize the label if 1', () => {
    value = 1;
    expect( quanitfy(value, label) ).toBe("1 cat")
  })

  it('should pluralize the label if 1.x', () => {
    value = -1;
    expect( quanitfy(value, label) ).toBe("-1 cats")
  })

  it('should pluralize the label if >= 2', () => {
    value = 2;
    expect( quanitfy(value, label) ).toBe("2 cats")

    value = 420;
    expect( quanitfy(value, label) ).toBe("420 cats")
  })

  it('should display formatted numbers', () => {
    value = "05.6";
    expect( quanitfy(value, label) ).toBe("05.6 cats")
  })

  it('should display formatted numbers', () => {
    value = "432.00";
    expect( quanitfy(value, label) ).toBe("432.00 cats")
  })
})