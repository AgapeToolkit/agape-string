import { toSingular } from './toSingular';

describe('toSingular', () => {
  it('should handle regular plurals ending in "s"', () => {
    expect(toSingular('cats')).toBe('cat');
    expect(toSingular('tables')).toBe('table');
  });

  it('should handle plurals ending in "ies"', () => {
    expect(toSingular('cities')).toBe('city');
    expect(toSingular('bodies')).toBe('body');
  });

  it('should handle plurals ending in "es" for certain patterns', () => {
    expect(toSingular('boxes')).toBe('box');
    expect(toSingular('wishes')).toBe('wish');
    expect(toSingular('buzzes')).toBe('buzz');
    expect(toSingular('matches')).toBe('match');
  });

  it('should handle known irregular plurals', () => {
    expect(toSingular('people')).toBe('person');
    expect(toSingular('children')).toBe('child');
    expect(toSingular('geese')).toBe('goose');
    expect(toSingular('mice')).toBe('mouse');
    expect(toSingular('analyses')).toBe('analysis');
  });

  it('should preserve original casing', () => {
    expect(toSingular('People')).toBe('Person');
    expect(toSingular('CHILDREN')).toBe('CHILD');
    expect(toSingular('Geese')).toBe('Goose');
    expect(toSingular('CITIES')).toBe('CITY');
    expect(toSingular('Boxes')).toBe('Box');
  });

  it('should not modify already singular words', () => {
    expect(toSingular('fish')).toBe('fish');
    expect(toSingular('man')).toBe('man');
    expect(toSingular('box')).toBe('box');
  });

  it('should not overcorrect double "s" endings', () => {
    expect(toSingular('boss')).toBe('boss');
    expect(toSingular('glass')).toBe('glass');
  });
});
