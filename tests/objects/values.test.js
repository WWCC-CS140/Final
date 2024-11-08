const values = require('../../src/objects/values');

describe('values', function () {
    it('should return values for all the enumerable keys on an object', function () {
        var input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        var output = values(input);

        expect(output).toHaveLength(3);
        expect(output).toContain(input.key1);
        expect(output).toContain(input.key2);
        expect(output).toContain(input.key3);
    });

    it('should return values all the enumerable keys on an object', function () {
        var input = {
            key1: true,
            key2: function () { }
        };
        var output = values(input);

        expect(output).toHaveLength(2);
        expect(output).toContain(input.key1);
        expect(output).toContain(input.key2);
    });

    it('should return an empty array for an empty object', function () {
        var input = {};
        var output = values(input);

        expect(output).toEqual([]);
    });
});