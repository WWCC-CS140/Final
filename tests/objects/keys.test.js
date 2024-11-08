const keys = require('../../src/objects/keys');

describe('keys', function () {
    it('should return all the enumerable keys on an object', function () {
        const input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        const output = keys(input);

        expect(output).toEqual(['key1', 'key2', 'key3']);
    });

    it('should return all the enumerable keys on an object', function () {
        const input = {
            key1: true,
            key2: function () { }
        };
        const output = keys(input);

        expect(output).toEqual(['key1', 'key2']);
    });

    it('should return an empty array for an empty object', function () {
        const input = {};
        const output = keys(input);

        expect(output).toEqual([]);
    });
});