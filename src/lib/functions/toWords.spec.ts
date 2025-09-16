import { toWords } from './toWords';

describe('toWords', () => {

  it('should verbalize kebab-case', () => {
    expect(toWords('foo-bar')).toEqual('Foo bar');
    expect(toWords('user-profile-id')).toEqual('User profile id');
  });

  it('should verbalize snake_case', () => {
    expect(toWords('foo_bar')).toEqual('Foo bar');
    expect(toWords('user_profile_id')).toEqual('User profile id');
  });

  it('should verbalize camelCase', () => {
    expect(toWords('fooBar')).toEqual('Foo bar');
    expect(toWords('userProfileId')).toEqual('User profile id');
  });

  it('should verbalize PascalCase', () => {
    expect(toWords('FooBar')).toEqual('Foo bar');
    expect(toWords('UserProfileId')).toEqual('User profile id');
  });

  it('should handle mixed delimiters', () => {
    expect(toWords('user-profile_id')).toEqual('User profile id');
    expect(toWords('userProfile_id-name')).toEqual('User profile id name');
  });

  it('should preserve and separate numbers', () => {
    expect(toWords('version2Id')).toEqual('Version 2 id');
    expect(toWords('api_v2_response')).toEqual('Api v2 response');
    expect(toWords('html5Parser')).toEqual('Html 5 parser');
  });

  it('should trim and clean up input', () => {
    expect(toWords('   user   profile   ')).toEqual('User profile');
  });

  it('should capitalize the first letter of the result', () => {
    expect(toWords('foo')).toEqual('Foo');
    expect(toWords('userProfile')).toEqual('User profile');
  });

  it('should handle empty input', () => {
    expect(toWords('')).toEqual('');
  });

  it('should handle a single uppercase acronym', () => {
    expect(toWords('NASA')).toEqual('NASA');
    expect(toWords('XMLHttpRequest')).toEqual('XML http request');
  });

  it('should keep v and the version number together', () => {
    expect(toWords("EmployeeV2")).toEqual("Employee v2")
  })

});
