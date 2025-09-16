import { toPascalCase } from './toPascalCase';

describe('toPascalCase', () => {
  it('should convert space-separated words to PascalCase', () => {
    expect(toPascalCase('first name')).toEqual('FirstName');
    expect(toPascalCase('api response')).toEqual('ApiResponse');
  });

  it('should convert kebab-case to PascalCase', () => {
    expect(toPascalCase('user-profile')).toEqual('UserProfile');
    expect(toPascalCase('api-response-code')).toEqual('ApiResponseCode');
  });

  it('should convert snake_case to PascalCase', () => {
    expect(toPascalCase('user_profile')).toEqual('UserProfile');
    expect(toPascalCase('api_response_code')).toEqual('ApiResponseCode');
  });

  it('should convert mixed delimiters to PascalCase', () => {
    expect(toPascalCase('user_profile-id')).toEqual('UserProfileId');
    expect(toPascalCase('user profile-id_name')).toEqual('UserProfileIdName');
  });

  it('should remove non-alphanumeric characters', () => {
    expect(toPascalCase('foo@bar!baz')).toEqual('FooBarBaz');
    expect(toPascalCase('hello.world')).toEqual('HelloWorld');
    expect(toPascalCase('this#is$clean')).toEqual('ThisIsClean');
  });

  it('should preserve numeric prefix', () => {
    expect(toPascalCase('123foo bar')).toEqual('123FooBar');
    expect(toPascalCase('456-api-response')).toEqual('456ApiResponse');
  });

  it('should retain numbers elsewhere in the string', () => {
    expect(toPascalCase('version 2')).toEqual('Version2');
    expect(toPascalCase('item_404')).toEqual('Item404');
    expect(toPascalCase('response code 500')).toEqual('ResponseCode500');
  });

  it('should preserve clean PascalCase input', () => {
    expect(toPascalCase('UserProfile')).toEqual('UserProfile');
    expect(toPascalCase('XMLHttpRequest')).toEqual('XMLHttpRequest');
  });

  it('should capitalize the first letter of lowercase words', () => {
    expect(toPascalCase('username')).toEqual('Username');
    expect(toPascalCase('profile')).toEqual('Profile');
  });

  it('should trim and clean excess whitespace', () => {
    expect(toPascalCase('  user   profile  ')).toEqual('UserProfile');
    expect(toPascalCase('\t api \n response')).toEqual('ApiResponse');
  });

  it('should return empty string for empty input', () => {
    expect(toPascalCase('')).toEqual('');
    expect(toPascalCase('   ')).toEqual('');
  });

  it('should not break on single-character input', () => {
    expect(toPascalCase('x')).toEqual('X');
    expect(toPascalCase('X')).toEqual('X');
  });

  it('should not alter valid all-digit strings except trimming', () => {
    expect(toPascalCase('123')).toEqual('123');
    expect(toPascalCase('   123   ')).toEqual('123');
  });
});
