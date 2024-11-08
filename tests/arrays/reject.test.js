const reject = require('../../src/arrays/reject');

describe('reject', function () {
    it('should return a new array without the elements rejected by the filter', function () {
        var input = [1, 2, 3, 4];
        var output = reject(input, isOdd);

        expect(output).toHaveLength(2);
        expect(output).toEqual([2, 4]);
    });

    it('should return a new array without the elements rejected by the filter', function () {
        var input = [1, 2, 3, 4];
        var output = reject(input, isEven);

        expect(output).toHaveLength(2);
        expect(output).toEqual([1, 3]);
    });

    it('should return a new array with no elements when the rejection filter returns true', function () {
        var input = [1, 2, 3, 4];
        var output = reject(input, alwaysTrue);

        expect(output).toHaveLength(0);
    });

    it('should return a new array with all elements when the rejection filter returns false', function () {
        var input = [1, 2, 3, 4];
        var output = reject(input, alwaysFalse);

        expect(output).toHaveLength(4);
        expect(output).toEqual(input);
    });

    it('should return a new array and not modify the input', function () {
        var input = [1, 2, 1, 2];
        var output = reject(input, isEven);

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