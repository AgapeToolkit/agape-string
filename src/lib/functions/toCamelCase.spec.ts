import { toCamelCase } from './toCamelCase';

describe('toCamelCase', () => {
  it('should convert space-separated words to camelCase', () => {
    expect(toCamelCase('first name')).toEqual('firstName');
    expect(toCamelCase('user profile id')).toEqual('userProfileId');
  });

  it('should convert hyphenated words to camelCase', () => {
    expect(toCamelCase('first-name')).toEqual('firstName');
    expect(toCamelCase('user-profile-id')).toEqual('userProfileId');
  });

  it('should convert snake_case to camelCase', () => {
    expect(toCamelCase('first_name')).toEqual('firstName');
    expect(toCamelCase('user_profile_id')).toEqual('userProfileId');
  });

  it('should handle mixed delimiters', () => {
    expect(toCamelCase('user-profile_id')).toEqual('userProfileId');
    expect(toCamelCase('user profile_id-name')).toEqual('userProfileIdName');
  });

  it('should lowercase the first character', () => {
    expect(toCamelCase('First Name')).toEqual('firstName');
  });

  it('should remove non-alphanumeric characters', () => {
    expect(toCamelCase('user@name!')).toEqual('userName');
    expect(toCamelCase('hello.world')).toEqual('helloWorld');
  });

  it('should handle numbers correctly', () => {
    expect(toCamelCase('version 2 id')).toEqual('version2Id');
    expect(toCamelCase('api_2_response')).toEqual('api2Response');
  });

  it('should return empty string for empty input', () => {
    expect(toCamelCase('')).toEqual('');
  });

  it('should not change already camelCased input', () => {
    expect(toCamelCase('alreadyCamelCase')).toEqual('alreadyCamelCase');
  });

  it('should handle a single word', () => {
    expect(toCamelCase('username')).toEqual('username');
    expect(toCamelCase('Username')).toEqual('username');
  });
});
