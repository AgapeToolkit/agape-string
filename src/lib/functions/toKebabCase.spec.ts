import { toKebabCase } from './toKebabCase';

describe('toKebabCase', () => {

  it('should kebabify space-separated strings', () => {
    expect(toKebabCase('Foo Bar')).toEqual('foo-bar');
    expect(toKebabCase('The Quick Brown Fox')).toEqual('the-quick-brown-fox');
  });

  it('should kebabify camelCase', () => {
    expect(toKebabCase('fooBar')).toEqual('foo-bar');
    expect(toKebabCase('getUserId')).toEqual('get-user-id');
  });

  it('should kebabify PascalCase', () => {
    expect(toKebabCase('FooBar')).toEqual('foo-bar');
    expect(toKebabCase('HTMLParser')).toEqual('html-parser');
    expect(toKebabCase('GetUserID')).toEqual('get-user-id');
  });

  it('should normalize existing kebab-case', () => {
    expect(toKebabCase('foo-bar')).toEqual('foo-bar');
  });

  it('should preserve multiple dashes', () => {
    expect(toKebabCase('foo--bar')).toEqual('foo--bar');
    expect(toKebabCase('foo---bar---baz')).toEqual('foo---bar---baz');
  });

  it('should convert multiple underscores to multiple hyphens', () => {
    expect(toKebabCase('foo__bar')).toEqual('foo--bar');
    expect(toKebabCase('foo___bar___baz')).toEqual('foo---bar---baz');
  });

  it('should convert snake_case to kebab-case', () => {
    expect(toKebabCase('foo_bar')).toEqual('foo-bar');
    expect(toKebabCase('get_user_id')).toEqual('get-user-id');
  });

  it('should remove special characters and preserve alphanumerics', () => {
    expect(toKebabCase('foo@bar!baz')).toEqual('foo-bar-baz');
    expect(toKebabCase('hello.world')).toEqual('hello-world');
    expect(toKebabCase('what#the$heck')).toEqual('what-the-heck');
  });

  it('should kebabify acronyms and numbers', () => {
    expect(toKebabCase('APIResponse')).toEqual('api-response');
    expect(toKebabCase('userID2')).toEqual('user-id-2');
    expect(toKebabCase('html5Parser')).toEqual('html-5-parser');
    expect(toKebabCase('v2Response')).toEqual('v2-response');
  });

  it('should preserve version tokens like v2, v1.0, v2.0.1', () => {
    expect(toKebabCase('v2')).toEqual('v2');
    expect(toKebabCase('v1.0')).toEqual('v1-0');
    expect(toKebabCase('v2.0.1')).toEqual('v2-0-1');
    expect(toKebabCase('apiV1.0')).toEqual('api-v1-0');
    expect(toKebabCase('apiV2.0.1Response')).toEqual('api-v2-0-1-response');
  });

  it('should kebabify mixed delimiters and normalize them', () => {
    expect(toKebabCase('foo_bar-baz value')).toEqual('foo-bar-baz-value');
    expect(toKebabCase('foo_bar--baz')).toEqual('foo-bar--baz');
  });

  it('should return empty string for empty input', () => {
    expect(toKebabCase('')).toEqual('');
  });

  it('should return a single lowercase word if input is a single word', () => {
    expect(toKebabCase('FOO')).toEqual('foo');
    expect(toKebabCase('bar')).toEqual('bar');
  });

  it('should strip leading and trailing dashes from messy input', () => {
    expect(toKebabCase('---foo--bar---')).toEqual('foo--bar');
    expect(toKebabCase('  foo bar  ')).toEqual('foo-bar');
  });

});
