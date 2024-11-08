const omit = require('../../src/objects/omit');

describe('omit', function () {
    it('should return a new object with the same key/values for all keys not on the blacklist', function () {
        const input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        const blacklist = ['key1', 'key2'];
        const output = omit(input, blacklist);

        expect(output).toEqual({
            key3: input.key3
        });
    });

    it('should return a new object with shallow copies of the values', function () {
        const input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        const blacklist = ['key1', 'key2'];
        const output = omit(input, blacklist);

        expect(output.key3).toBe(input.key3);
    });

    it('should return a new empty object for an empty object input', function () {
        const input = {};
        const blacklist = ['key1'];
        const output = omit(input, blacklist);

        expect(output).toEqual({});
    });

    it('should return a new object with all keys for an empty blacklist', function () {
        const input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        const blacklist = [];
        const output = omit(input, blacklist);

        expect(output).toEqual(input);
    });
});