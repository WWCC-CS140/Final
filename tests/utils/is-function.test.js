const isFunction = require('../../src/utils/is-function');

describe('isFunction', function () {
    it('should return true for a function literal', function () {
        var input = function () { };
        var output = isFunction(input);

        expect(output).toBe(true);
    });

    it('should return true for a function class instance', function () {
        var input = new Function();
        var output = isFunction(input);

        expect(output).toBe(true);
    });

    it('should return false for an object literal', function () {
        var input = {};
        var output = isFunction(input);

        expect(output).toBe(false);
    });

    it('should return false for an array literal', function () {
        var input = [];
        var output = isFunction(input);

        expect(output).toBe(false);
    });

    it('should return false for null', function () {
        var input = null;
        var output = isFunction(input);

        expect(output).toBe(false);
    });

    it('should return false for undefined', function () {
        var output = isFunction();

        expect(output).toBe(false);
    });
});