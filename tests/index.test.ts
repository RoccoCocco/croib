import { validateOIB, generateRandomOIB } from '../src/index';

describe('Validate OIB', () => {
  it('Should validate OIB', () => {
    expect(validateOIB('1234')).toBe(false);
    expect(validateOIB('asdfghjklqw')).toBe(false);
    expect(validateOIB('00000000001')).toBe(true);
    expect(validateOIB('12345678901')).toBe(false);
    expect(validateOIB('10000000001')).toBe(false);
  });

  it('Should generate random OIB', () => {
    for (let i = 0; i < 100; i++) {
      const random = generateRandomOIB();
      expect(typeof random).toBe('string');
      expect(validateOIB(random)).toBe(true);
    }
  });
});
