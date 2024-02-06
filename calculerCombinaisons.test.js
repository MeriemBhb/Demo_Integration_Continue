const calculerCombinaisons = require('./Binominal_function');

describe('calculerCombinaisons function', () => {
    it('should return 1 for n equal to k', () => {
        expect(calculerCombinaisons(5, 5)).toBe(1);
    });

    it('should return 1 for k equal to 0', () => {
        expect(calculerCombinaisons(7, 0)).toBe(1);
    });
    it('should return 0 for k greater than n', () => {
        expect(calculerCombinaisons(2, 5)).toBe(0);
    });

    it('should calculate the combinations correctly for other inputs', () => {
        expect(calculerCombinaisons(5, 2)).toBe(10);
        expect(calculerCombinaisons(6, 3)).toBe(20);
        expect(calculerCombinaisons(8, 4)).toBe(70);
        expect(calculerCombinaisons(4, 2)).toBe(6);
// Add more test cases as needed
    });
});
