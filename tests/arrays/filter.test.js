const filter = require('../../src/arrays/filter');

describe('filter', function () {
    it('should return a new array with elements that match the filter', function () {
        var input = [1, 2, 3, 4];
        var output = filter(input, isOdd);

        expect(output).toHaveLength(2);
        expect(output).toEqual([1, 3]);
    });

    it('should return a new array with elements that match the filter', function () {
        var input = [1, 2, 3, 4];
        var output = filter(input, isEven);

        expect(output).toHaveLength(2);
        expect(output).toEqual([2, 4]);
    });

    it('should return a new array with all elements when the filter returns true', function () {
        var input = [1, 2, 3, 4];
        var output = filter(input, alwaysTrue);

        expect(output).toHaveLength(4);
        expect(output).toEqual(input);
    });

    it('should return a new array with no elements when the filter returns false', function () {
        var input = [1, 2, 3, 4];
        var output = filter(input, alwaysFalse);

        expect(output).toHaveLength(0);
    });

    it('should return a new array and not modify the input', function () {
        var input = [1, 2, 1, 2];
        var output = filter(input, isEven);

        expect(output).not.toBe(input);
    });

    function isOdd(x) {
        return x % 2 === 1;
    }

    function isEven(x) {
        return x % 2 === 0;
    }

    function alwaysTrue() {
        return true;
    }

    function alwaysFalse() {
        return false;
    }
});