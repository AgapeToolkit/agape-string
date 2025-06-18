import { camelize } from './camelize';

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