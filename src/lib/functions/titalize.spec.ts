import { titalize } from '@agape/string';

describe('titalize', () => {

  it('should capitalize each significant word', () => {
    expect(titalize('foo bar')).toEqual('Foo Bar');
    expect(titalize('quick brown fox')).toEqual('Quick Brown Fox');
  });

  it('should preserve case after hyphens', () => {
    expect(titalize('foo-bar')).toEqual('Foo-bar');
    expect(titalize('jack-in-the-box')).toEqual('Jack-in-the-box');
  });

  it('should lowercase functional words except when first', () => {
    expect(titalize('hop on pop')).toEqual('Hop on Pop');
    expect(titalize('ducks in a row')).toEqual('Ducks in a Row');
    expect(titalize('james and the anteater')).toEqual('James and the Anteater');
    expect(titalize('the wonderful world of mystery science')).toEqual('The Wonderful World of Mystery Science');
    expect(titalize('and then there were none')).toEqual('And Then There Were None');
  });

  it('should capitalize functional words when first', () => {
    expect(titalize('in the beginning')).toEqual('In the Beginning');
    expect(titalize('at the gates')).toEqual('At the Gates');
    expect(titalize('by the sea')).toEqual('By the Sea');
  });

  it('should not change casing of punctuation', () => {
    expect(titalize('who framed roger rabbit?')).toEqual('Who Framed Roger Rabbit?');
    expect(titalize('what time is it, mr. fox?')).toEqual('What Time Is It, Mr. Fox?');
  });

  it('should handle mixed casing inputs by preserving case (seems intentional)', () => {
    expect(titalize('ThE gIrL wItH tHe DrAgOn TaTtOo')).toEqual('ThE gIrL wItH tHe DrAgOn TaTtOo');
  });

  it('should trim and clean excess whitespace', () => {
    expect(titalize('  the   jungle   book  ')).toEqual('The Jungle Book');
    expect(titalize('\nhop\non\npop\n')).toEqual('Hop on Pop');
  });

  it('should work with single-word input', () => {
    expect(titalize('frozen')).toEqual('Frozen');
    expect(titalize('and')).toEqual('And');
  });

  it('should handle acronyms as capitalized', () => {
    expect(titalize('the rise of NASA')).toEqual('The Rise of NASA');
  });

  it('should handle empty string', () => {
    expect(titalize('')).toEqual('');
  });

});