const map = require('../../src/collections/map');

describe('map', function () {
    function toString(x) {
        return x.toString();
    }

    function toInteger(x) {
        return +x;
    }

    function double(x) {
        return x * 2;
    }

    it('should invoke the callback once for every element in the array', function () {
        const input = [1, 2, 3];
        const cb = jest.fn(toString);

        const output = map(input, cb);

        expect(cb).toHaveBeenCalledTimes(3);
        expect(cb).toHaveBeenCalledWith(input[0], 0, input);
        expect(cb).toHaveBeenCalledWith(input[1], 1, input);
        expect(cb).toHaveBeenCalledWith(input[2], 2, input);
        expect(output).toEqual(['1', '2', '3']);
    });

    it('should invoke the callback once for every character in the string', function () {
        const input = '123';
        const cb = jest.fn(toInteger);

        const output = map(input, cb);

        expect(cb).toHaveBeenCalledTimes(3);
        expect(cb).toHaveBeenCalledWith(input[0], 0, input);
        expect(cb).toHaveBeenCalledWith(input[1], 1, input);
        expect(cb).toHaveBeenCalledWith(input[2], 2, input);
        expect(output).toEqual([1, 2, 3]);
    });

    it('should invoke the callback once for every key in the object', function () {
        const input = {
            key1: 1,
            key2: 2,
            key3: 3
        };
        const cb = jest.fn(double);

        const output = map(input, cb);

        expect(cb).toHaveBeenCalledTimes(3);
        expect(cb).toHaveBeenCalledWith(input.key1, 'key1', input);
        expect(cb).toHaveBeenCalledWith(input.key2, 'key2', input);
        expect(cb).toHaveBeenCalledWith(input.key3, 'key3', input);
        expect(output).toEqual([2, 4, 6]);
    });

    it('should throw an exception when the collection is any other data type', function () {
        const input = 5;
        const cb = jest.fn();

        expect(function () {
            map(input, cb);
        }).toThrow();

        expect(cb).not.toHaveBeenCalled();
    });

    it('should throw an exception when the collection is null', function () {
        const input = null;
        const cb = jest.fn();

        expect(function () {
            map(input, cb);
        }).toThrow();

        expect(cb).not.toHaveBeenCalled();
    });
});