import { toTitleCase } from './toTitleCase';

describe('toTitleCase', () => {

  it('should capitalize each significant word', () => {
    expect(toTitleCase('foo bar')).toEqual('Foo Bar');
    expect(toTitleCase('quick brown fox')).toEqual('Quick Brown Fox');
  });

  it('should preserve case after hyphens', () => {
    expect(toTitleCase('foo-bar')).toEqual('Foo-bar');
    expect(toTitleCase('jack-in-the-box')).toEqual('Jack-in-the-box');
  });

  it('should lowercase functional words except when first', () => {
    expect(toTitleCase('hop on pop')).toEqual('Hop on Pop');
    expect(toTitleCase('ducks in a row')).toEqual('Ducks in a Row');
    expect(toTitleCase('james and the anteater')).toEqual('James and the Anteater');
    expect(toTitleCase('the wonderful world of mystery science')).toEqual('The Wonderful World of Mystery Science');
    expect(toTitleCase('and then there were none')).toEqual('And Then There Were None');
  });

  it('should capitalize functional words when first', () => {
    expect(toTitleCase('in the beginning')).toEqual('In the Beginning');
    expect(toTitleCase('at the gates')).toEqual('At the Gates');
    expect(toTitleCase('by the sea')).toEqual('By the Sea');
  });

  it('should not change casing of punctuation', () => {
    expect(toTitleCase('who framed roger rabbit?')).toEqual('Who Framed Roger Rabbit?');
    expect(toTitleCase('what time is it, mr. fox?')).toEqual('What Time Is It, Mr. Fox?');
  });

  it('should handle mixed casing inputs by preserving case (seems intentional)', () => {
    expect(toTitleCase('ThE gIrL wItH tHe DrAgOn TaTtOo')).toEqual('ThE gIrL wItH tHe DrAgOn TaTtOo');
  });

  it('should trim and clean excess whitespace', () => {
    expect(toTitleCase('  the   jungle   book  ')).toEqual('The Jungle Book');
    expect(toTitleCase('\nhop\non\npop\n')).toEqual('Hop on Pop');
  });

  it('should work with single-word input', () => {
    expect(toTitleCase('frozen')).toEqual('Frozen');
    expect(toTitleCase('and')).toEqual('And');
  });

  it('should handle acronyms as capitalized', () => {
    expect(toTitleCase('the rise of NASA')).toEqual('The Rise of NASA');
  });

  it('should handle empty string', () => {
    expect(toTitleCase('')).toEqual('');
  });

});
