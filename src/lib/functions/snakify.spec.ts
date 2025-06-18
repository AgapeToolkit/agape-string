import { snakify } from './snakify';

describe('snakify', () => {
  it('converts camelCase to kebab-case', () => {
    expect(snakify('camelCaseExample')).toBe('camel_case_example');
  });

  it('handles PascalCase correctly', () => {
    expect(snakify('PascalCase')).toBe('pascal_case');
  });

  it('separates acronym and word', () => {
    expect(snakify('HTMLParser')).toBe('html_parser');
  });

  it('handles version tags correctly', () => {
    expect(snakify('EmployeeV2')).toBe('employee_v2');
    expect(snakify('ApiV3Response')).toBe('api_v3_response');
  });

  it('preserves number separation', () => {
    expect(snakify('Version2Id')).toBe('version_2_id');
    expect(snakify('HTML5Parser')).toBe('html_5_parser');
  });

  it('converts spaces to underscores', () => {
    expect(snakify('this is spaced')).toBe('this_is_spaced');
  });

  it('converts dashes and symbols to underscores', () => {
    expect(snakify('hello-world!again')).toBe('hello_world_again');
  });

  it('trims leading and trailing symbols', () => {
    expect(snakify('__HelloWorld__')).toBe('hello_world');
  });

  it('handles a complex example with everything', () => {
    expect(snakify('  V2HTML5ApiResponse_v3.1! ')).toBe('v2_html_5_api_response_v3_1');
  });

  it('returns empty string when input is empty', () => {
    expect(snakify('')).toBe('');
  });
});
