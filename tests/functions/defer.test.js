const defer = require('../../src/functions/defer');

describe('defer', function () {
    jest.useFakeTimers();

    it('should call the passed function immediately after the current event stack completes', function () {
        const input = jest.fn();

        defer(input);
        expect(input).not.toHaveBeenCalled();

        jest.runAllTimers();
        expect(input).toHaveBeenCalledTimes(1);
    });

    it('should pass arguments from the returned function to the original function', function () {
        const input = jest.fn();

        defer(input, 'a', 'b');
        expect(input).not.toHaveBeenCalled();

        jest.runAllTimers();
        expect(input).toHaveBeenCalledWith('a', 'b');
    });
});