const pick = require('../../src/objects/pick');

describe('pick', function () {
    it('should return a new object with the same key/values for only the keys in the whitelist', function () {
        const input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        const whitelist = ['key1', 'key3'];
        const output = pick(input, whitelist);

        expect(output).toEqual({
            key1: input.key1,
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
        const whitelist = ['key3'];
        const output = pick(input, whitelist);

        expect(output.key3).toBe(input.key3);
    });

    it('should return a new empty object for an empty object input', function () {
        const input = {};
        const whitelist = ['key1'];
        const output = pick(input, whitelist);

        expect(output).toEqual({});
    });

    it('should return a new empty object for an empty whitelist', function () {
        const input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        const whitelist = [];
        const output = pick(input, whitelist);

        expect(output).toEqual({});
    });
});