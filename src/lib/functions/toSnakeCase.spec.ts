import { toSnakeCase } from './toSnakeCase';

describe('toSnakeCase', () => {
  it('converts camelCase to snake_case', () => {
    expect(toSnakeCase('camelCaseExample')).toBe('camel_case_example');
  });

  it('handles PascalCase correctly', () => {
    expect(toSnakeCase('PascalCase')).toBe('pascal_case');
  });

  it('separates acronym and word', () => {
    expect(toSnakeCase('HTMLParser')).toBe('html_parser');
  });

  it('handles version tags correctly', () => {
    expect(toSnakeCase('EmployeeV2')).toBe('employee_v2');
    expect(toSnakeCase('ApiV3Response')).toBe('api_v3_response');
  });

  it('preserves number separation', () => {
    expect(toSnakeCase('Version2Id')).toBe('version_2_id');
    expect(toSnakeCase('HTML5Parser')).toBe('html_5_parser');
  });

  it('converts spaces to underscores', () => {
    expect(toSnakeCase('this is spaced')).toBe('this_is_spaced');
  });

  it('converts dashes and symbols to underscores', () => {
    expect(toSnakeCase('hello-world!again')).toBe('hello_world_again');
  });

  it('trims leading and trailing symbols', () => {
    expect(toSnakeCase('__HelloWorld__')).toBe('hello_world');
  });

  it('handles a complex example with everything', () => {
    expect(toSnakeCase('  V2HTML5ApiResponse_v3.1! ')).toBe('v2_html_5_api_response_v3_1');
  });

  it('returns empty string when input is empty', () => {
    expect(toSnakeCase('')).toBe('');
  });
});
