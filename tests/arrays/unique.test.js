const unique = require('../../src/arrays/unique');

describe('unique', function () {
    it('should return a new array with all the unique elements from the input', function () {
        var input = [1, 2, 1, 2];
        var output = unique(input);

        expect(output).toHaveLength(2);
        expect(output).toEqual([1, 2]);
    });

    it('should do type checking when comparing uniqueness', function () {
        var input = [1, 2, '1', 2];
        var output = unique(input);

        expect(output).toHaveLength(3);
        expect(output).toEqual([1, 2, '1']);
    });

    it('should return a new array and not modify the input', function () {
        var input = [1, 2, 1, 2];
        var output = unique(input);

        expect(output).not.toBe(input);
    });
});