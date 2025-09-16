import { toPlural } from './toPlural';


describe('toPlural', () => {

  it('should pluralize regular nouns', () => {
    expect(toPlural('dog')).toEqual('dogs');
    expect(toPlural('book')).toEqual('books');
    expect(toPlural('car')).toEqual('cars');
  });

  it('should pluralize words ending in "y"', () => {
    expect(toPlural('city')).toEqual('cities');
    expect(toPlural('puppy')).toEqual('puppies');
  });

  it('should pluralize words ending in "s", "x", "z", "ch", "sh"', () => {
    expect(toPlural('bus')).toEqual('buses');
    expect(toPlural('box')).toEqual('boxes');
    expect(toPlural('buzz')).toEqual('buzzes');
    expect(toPlural('watch')).toEqual('watches');
    expect(toPlural('dish')).toEqual('dishes');
  });

  it('should pluralize known irregulars', () => {
    expect(toPlural('child')).toEqual('children');
    expect(toPlural('person')).toEqual('people');
    expect(toPlural('mouse')).toEqual('mice');
    expect(toPlural('goose')).toEqual('geese');
    expect(toPlural('foot')).toEqual('feet');
    expect(toPlural('tooth')).toEqual('teeth');
    expect(toPlural('man')).toEqual('men');
    expect(toPlural('woman')).toEqual('women');
    expect(toPlural('analysis')).toEqual('analyses');
    expect(toPlural('cactus')).toEqual('cacti');
  });

  it('should preserve initial capitalization', () => {
    expect(toPlural('City')).toEqual('Cities');
    expect(toPlural('Bus')).toEqual('Buses');
    expect(toPlural('Child')).toEqual('Children');
    expect(toPlural('Person')).toEqual('People');
    expect(toPlural('Box')).toEqual('Boxes');
  });

  it('should preserve all-uppercase acronyms', () => {
    expect(toPlural('API')).toEqual('APIs');
    expect(toPlural('ID')).toEqual('IDs');
    expect(toPlural('HTML')).toEqual('HTMLs');
  });

  it('should pluralize single-letter words', () => {
    expect(toPlural('A')).toEqual('As');
    expect(toPlural('x')).toEqual('xs');
  });

  it('should handle empty string', () => {
    expect(toPlural('')).toEqual('');
  });

  it('should pluralize words with existing "es" ending appropriately', () => {
    expect(toPlural('thesis')).toEqual('theses');
    expect(toPlural('crisis')).toEqual('crises');
    expect(toPlural('diagnosis')).toEqual('diagnoses');
    expect(toPlural('syllabus')).toEqual('syllabi');
  });

});
