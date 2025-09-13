import { quantify } from './quantify';


describe('quantify', () => {

  let value: number | string | undefined;
  let label: string;

  beforeEach( () => {
    value = undefined;
    label = 'cat';
  })

  it('should pluralize the label if < 0', () => {
    value = -1;
    expect(quantify(value, label)).toBe("-1 cats")
  })

  it('should pluralize the label if 0', () => {
    value = 0;
    expect(quantify(value, label)).toBe("0 cats")
  })

  it('should pluralize the label if > 0 and < 1', () => {
    value = 0.5;
    expect(quantify(value, label)).toBe("0.5 cats")
  })

  it('should not pluralize the label if 1', () => {
    value = 1;
    expect(quantify(value, label)).toBe("1 cat")
  })

  it('should pluralize the label if 1.x', () => {
    value = -1;
    expect(quantify(value, label)).toBe("-1 cats")
  })

  it('should pluralize the label if >= 2', () => {
    value = 2;
    expect(quantify(value, label)).toBe("2 cats")

    value = 420;
    expect(quantify(value, label)).toBe("420 cats")
  })

  it('should display formatted numbers', () => {
    value = "05.6";
    expect(quantify(value, label)).toBe("05.6 cats")
  })

  it('should display formatted numbers', () => {
    value = "432.00";
    expect(quantify(value, label)).toBe("432.00 cats")
  })
})
