const isString = require('../../src/utils/is-string');

describe('isString', function () {
    it('should return true for a string literal', function () {
        var input = 'JavaScript';
        var output = isString(input);

        expect(output).toBe(true);
    });

    it('should return true for a string class instance', function () {
        var input = new String('JavaScript');
        var output = isString(input);

        expect(output).toBe(true);
    });

    it('should return false for an object literal', function () {
        var input = {};
        var output = isString(input);

        expect(output).toBe(false);
    });

    it('should return false for an array literal', function () {
        var input = [];
        var output = isString(input);

        expect(output).toBe(false);
    });

    it('should return false for null', function () {
        var input = null;
        var output = isString(input);

        expect(output).toBe(false);
    });

    it('should return false for undefined', function () {
        var output = isString();

        expect(output).toBe(false);
    });
});