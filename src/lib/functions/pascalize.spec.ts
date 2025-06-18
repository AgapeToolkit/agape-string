import { pascalize } from './pascalize';

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