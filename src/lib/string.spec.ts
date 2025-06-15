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
    expect(camelize('API Response')).toEqual('apiResponse');
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

  it('should pluralize a string', () => {
    expect( pluralize('foo') ).toEqual('foos')
  })

  it('should pluralize city', () => {
    expect( pluralize('city') ).toEqual('cities')
  })
  
  it('should maintain case', () => {
    expect( pluralize('Foo') ).toEqual('Foos')
    expect( pluralize('City') ).toEqual('Cities')
  })
})


describe('titalize', () => {

  it('should titalize the string', () => {
    expect( titalize('foo bar') ).toEqual('Foo Bar')
  })
  it('should maintain case after hyphen', () => {
    expect( titalize('foo-bar') ).toEqual('Foo-bar')
  })
  it('should lowercase functional words', () => {
    expect( titalize('hop on pop') ).toEqual('Hop on Pop')
    expect( titalize('ducks in a row') ).toEqual('Ducks in a Row')
    expect( titalize('james and the anteater') ).toEqual('James and the Anteater')
    expect( titalize('the wonderful world of mystery science') ).toEqual('The Wonderful World of Mystery Science')
  })

})

describe('kebabify', () => {

  it('should kebabify the string', () => {
    expect( kebabify('Foo Bar') ).toEqual('foo-bar')
  })

  it('should kebabify the string', () => {
    expect( kebabify('FooBar') ).toEqual('foo-bar')
  })

})


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