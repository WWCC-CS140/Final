const concat = require('../../src/arrays/concat');

describe('concat', function () {
    it('should return a new array with all the elements from array a and array b', function () {
        var inputA = ['a', 'b'];
        var inputB = [1, 2];
        var output = concat(inputA, inputB);

        expect(output).toHaveLength(4);
        expect(output).toEqual(['a', 'b', 1, 2]);
    });

    it('should return a new array with all the elements from array a and array b', function () {
        var inputA = ['a', 'b'];
        var inputB = [];
        var output = concat(inputA, inputB);

        expect(output).toHaveLength(2);
        expect(output).toEqual(['a', 'b']);
    });

    it('should return a new array with all the elements from array a and array b', function () {
        var inputA = [];
        var inputB = [1, 2];
        var output = concat(inputA, inputB);

        expect(output).toHaveLength(2);
        expect(output).toEqual([1, 2]);
    });

    it('should return an empty array when concatenating two empty arrays', function () {
        var inputA = [];
        var inputB = [];
        var output = concat(inputA, inputB);

        expect(output).toHaveLength(0);
    });

    it('should create a new array as output', function () {
        var inputA = ['a', 'b'];
        var inputB = [1, 2];
        var output = concat(inputA, inputB);

        expect(output).not.toBe(inputA);
        expect(output).not.toBe(inputB);
    });
});