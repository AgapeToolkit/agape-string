import { pluralize } from './pluralize';


describe('pluralize', () => {

  it('should pluralize regular nouns', () => {
    expect(pluralize('dog')).toEqual('dogs');
    expect(pluralize('book')).toEqual('books');
    expect(pluralize('car')).toEqual('cars');
  });

  it('should pluralize words ending in "y"', () => {
    expect(pluralize('city')).toEqual('cities');
    expect(pluralize('puppy')).toEqual('puppies');
  });

  it('should pluralize words ending in "s", "x", "z", "ch", "sh"', () => {
    expect(pluralize('bus')).toEqual('buses');
    expect(pluralize('box')).toEqual('boxes');
    expect(pluralize('buzz')).toEqual('buzzes');
    expect(pluralize('watch')).toEqual('watches');
    expect(pluralize('dish')).toEqual('dishes');
  });

  it('should pluralize known irregulars', () => {
    expect(pluralize('child')).toEqual('children');
    expect(pluralize('person')).toEqual('people');
    expect(pluralize('mouse')).toEqual('mice');
    expect(pluralize('goose')).toEqual('geese');
    expect(pluralize('foot')).toEqual('feet');
    expect(pluralize('tooth')).toEqual('teeth');
    expect(pluralize('man')).toEqual('men');
    expect(pluralize('woman')).toEqual('women');
    expect(pluralize('analysis')).toEqual('analyses');
    expect(pluralize('cactus')).toEqual('cacti');
  });

  it('should preserve initial capitalization', () => {
    expect(pluralize('City')).toEqual('Cities');
    expect(pluralize('Bus')).toEqual('Buses');
    expect(pluralize('Child')).toEqual('Children');
    expect(pluralize('Person')).toEqual('People');
    expect(pluralize('Box')).toEqual('Boxes');
  });

  it('should preserve all-uppercase acronyms', () => {
    expect(pluralize('API')).toEqual('APIs');
    expect(pluralize('ID')).toEqual('IDs');
    expect(pluralize('HTML')).toEqual('HTMLs');
  });

  it('should pluralize single-letter words', () => {
    expect(pluralize('A')).toEqual('As');
    expect(pluralize('x')).toEqual('xs');
  });

  it('should handle empty string', () => {
    expect(pluralize('')).toEqual('');
  });

  it('should pluralize words with existing "es" ending appropriately', () => {
    expect(pluralize('thesis')).toEqual('theses');
    expect(pluralize('crisis')).toEqual('crises');
    expect(pluralize('diagnosis')).toEqual('diagnoses');
    expect(pluralize('syllabus')).toEqual('syllabi');
  });

});