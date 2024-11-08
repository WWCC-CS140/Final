const forEach = require('../../src/collections/for-each');

describe('forEach', function () {
    it('should invoke the callback once for every element in the array', function () {
        const input = [1, 2, 3];
        const cb = jest.fn();

        forEach(input, cb);

        expect(cb).toHaveBeenCalledTimes(3);
        expect(cb).toHaveBeenCalledWith(input[0], 0, input);
        expect(cb).toHaveBeenCalledWith(input[1], 1, input);
        expect(cb).toHaveBeenCalledWith(input[2], 2, input);
    });

    it('should invoke the callback once for every character in the string', function () {
        const input = 'abc';
        const cb = jest.fn();

        forEach(input, cb);

        expect(cb).toHaveBeenCalledTimes(3);
        expect(cb).toHaveBeenCalledWith(input[0], 0, input);
        expect(cb).toHaveBeenCalledWith(input[1], 1, input);
        expect(cb).toHaveBeenCalledWith(input[2], 2, input);
    });

    it('should invoke the callback once for every key in the object', function () {
        const input = {
            key1: true,
            key2: 2,
            key3: 'JavaScript'
        };
        const cb = jest.fn();

        forEach(input, cb);

        expect(cb).toHaveBeenCalledTimes(3);
        expect(cb).toHaveBeenCalledWith(input.key1, 'key1', input);
        expect(cb).toHaveBeenCalledWith(input.key2, 'key2', input);
        expect(cb).toHaveBeenCalledWith(input.key3, 'key3', input);
    });

    it('should throw an exception when the collection is any other data type', function () {
        const input = 5;
        const cb = jest.fn();

        expect(function () {
            forEach(input, cb);
        }).toThrow();

        expect(cb).not.toHaveBeenCalled();
    });

    it('should throw an exception when the collection is null', function () {
        const input = null;
        const cb = jest.fn();

        expect(function () {
            forEach(input, cb);
        }).toThrow();

        expect(cb).not.toHaveBeenCalled();
    });
});