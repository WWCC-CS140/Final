const reduce = require('../../src/collections/reduce');

describe('reduce', function () {
    function sum(result, x) {
        return result + x;
    }

    it('should invoke the callback once for every element in the array', function () {
        const input = [1, 2, 3];
        const cb = jest.fn(sum);

        const output = reduce(input, cb, 0);

        expect(cb).toHaveBeenCalledTimes(3);
        expect(cb).toHaveBeenCalledWith(0, input[0]);
        expect(cb).toHaveBeenCalledWith(1, input[1]);
        expect(cb).toHaveBeenCalledWith(3, input[2]);
        expect(output).toEqual(6);
    });

    it('should use intial value as the first result parameter', function () {
        const input = [1, 2, 3];
        const cb = jest.fn(sum);

        const output = reduce(input, cb, 5);

        expect(cb).toHaveBeenCalledTimes(3);
        expect(cb).toHaveBeenCalledWith(5, input[0]);
        expect(cb).toHaveBeenCalledWith(6, input[1]);
        expect(cb).toHaveBeenCalledWith(8, input[2]);
        expect(output).toEqual(11);
    });

    it('should throw an exception when the collection is any other data type', function () {
        const input = 5;
        const cb = jest.fn();

        expect(function () {
            reduce(input, cb, 0);
        }).toThrow();

        expect(cb).not.toHaveBeenCalled();
    });

    it('should throw an exception when the collection is null', function () {
        const input = null;
        const cb = jest.fn();

        expect(function () {
            reduce(input, cb, 0);
        }).toThrow();

        expect(cb).not.toHaveBeenCalled();
    });
});