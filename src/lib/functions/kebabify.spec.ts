import { kebabify } from './kebabify';

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