const calculerFactoriel = require('./factorial_function');

describe('calculerFactoriel function', () => {
    it('should return 1 for input 0', () => {
        expect(calculerFactoriel(0)).toBe(1);
    });

    it('should return 1 for input 1', () => {
        expect(calculerFactoriel(1)).toBe(1);
    });

    it('should calculate the factorial correctly for other inputs', () => {
        expect(calculerFactoriel(2)).toBe(2);
        expect(calculerFactoriel(3)).toBe(6);
        expect(calculerFactoriel(4)).toBe(24);
        expect(calculerFactoriel(5)).toBe(120);
        // Add more test cases as needed
    });
});
