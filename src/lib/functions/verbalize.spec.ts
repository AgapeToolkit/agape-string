import { verbalize } from './verbalize';

describe('verbalize', () => {

  it('should verbalize kebab-case', () => {
    expect(verbalize('foo-bar')).toEqual('Foo bar');
    expect(verbalize('user-profile-id')).toEqual('User profile id');
  });

  it('should verbalize snake_case', () => {
    expect(verbalize('foo_bar')).toEqual('Foo bar');
    expect(verbalize('user_profile_id')).toEqual('User profile id');
  });

  it('should verbalize camelCase', () => {
    expect(verbalize('fooBar')).toEqual('Foo bar');
    expect(verbalize('userProfileId')).toEqual('User profile id');
  });

  it('should verbalize PascalCase', () => {
    expect(verbalize('FooBar')).toEqual('Foo bar');
    expect(verbalize('UserProfileId')).toEqual('User profile id');
  });

  it('should handle mixed delimiters', () => {
    expect(verbalize('user-profile_id')).toEqual('User profile id');
    expect(verbalize('userProfile_id-name')).toEqual('User profile id name');
  });

  it('should preserve and separate numbers', () => {
    expect(verbalize('version2Id')).toEqual('Version 2 id');
    expect(verbalize('api_v2_response')).toEqual('Api v2 response');
    expect(verbalize('html5Parser')).toEqual('Html 5 parser');
  });

  it('should trim and clean up input', () => {
    expect(verbalize('   user   profile   ')).toEqual('User profile');
  });

  it('should capitalize the first letter of the result', () => {
    expect(verbalize('foo')).toEqual('Foo');
    expect(verbalize('userProfile')).toEqual('User profile');
  });

  it('should handle empty input', () => {
    expect(verbalize('')).toEqual('');
  });

  it('should handle a single uppercase acronym', () => {
    expect(verbalize('NASA')).toEqual('NASA');
    expect(verbalize('XMLHttpRequest')).toEqual('XML http request');
  });

  it('should keep v and the version number together', () => {
    expect(verbalize("EmployeeV2")).toEqual("Employee v2")
  })

});