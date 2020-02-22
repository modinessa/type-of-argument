const defineTypeOfValue = require('../src/define-type-of-value');

describe('defineTypeOfValue function', () => {
  it('should return "array" if a passed value is an array ', () => {
    expect(defineTypeOfValue([])).to.equal('array');
  });

  it('should return "string" if a passed value is a string', () => {
    expect(defineTypeOfValue('')).to.equal('string');
  });

  it('should return "undefined" if a passed value is an undefined', () => {
    expect(defineTypeOfValue()).to.equal('undefined');
  });

  it('should return null if a passed value is a null', () => {
    expect(defineTypeOfValue(null)).to.equal(null);
  });

  it('should return "object" if a passed value is an object', () => {
    expect(defineTypeOfValue({})).to.equal('object');
  });

  it('should return "symbol" if a passed value is a symbol', () => {
    expect(defineTypeOfValue(Symbol('foo'))).to.equal('symbol');
  });

  it('should return "number" if a passed value is a number', () => {
    expect(defineTypeOfValue(1)).to.equal('number');
  });

  it('should return "boolean" if a passed value is  true', () => {
    expect(defineTypeOfValue(true)).to.equal('boolean');
  });
});
