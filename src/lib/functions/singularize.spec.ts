import { singularize } from './singularize';

describe('singularize', () => {
  it('should handle regular plurals ending in "s"', () => {
    expect(singularize('cats')).toBe('cat');
    expect(singularize('tables')).toBe('table');
  });

  it('should handle plurals ending in "ies"', () => {
    expect(singularize('cities')).toBe('city');
    expect(singularize('bodies')).toBe('body');
  });

  it('should handle plurals ending in "es" for certain patterns', () => {
    expect(singularize('boxes')).toBe('box');
    expect(singularize('wishes')).toBe('wish');
    expect(singularize('buzzes')).toBe('buzz');
    expect(singularize('matches')).toBe('match');
  });

  it('should handle known irregular plurals', () => {
    expect(singularize('people')).toBe('person');
    expect(singularize('children')).toBe('child');
    expect(singularize('geese')).toBe('goose');
    expect(singularize('mice')).toBe('mouse');
    expect(singularize('analyses')).toBe('analysis');
  });

  it('should preserve original casing', () => {
    expect(singularize('People')).toBe('Person');
    expect(singularize('CHILDREN')).toBe('CHILD');
    expect(singularize('Geese')).toBe('Goose');
    expect(singularize('CITIES')).toBe('CITY');
    expect(singularize('Boxes')).toBe('Box');
  });

  it('should not modify already singular words', () => {
    expect(singularize('fish')).toBe('fish');
    expect(singularize('man')).toBe('man');
    expect(singularize('box')).toBe('box');
  });

  it('should not overcorrect double "s" endings', () => {
    expect(singularize('boss')).toBe('boss');
    expect(singularize('glass')).toBe('glass');
  });
});
