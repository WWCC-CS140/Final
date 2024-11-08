const once = require('../../src/functions/once');

describe('once', function () {
    it('should return a function', function () {
        const input = jest.fn();
        const outputFn = once(input);

        expect(typeof outputFn).toBe('function');
        expect(input).not.toHaveBeenCalled();
    });

    it('should only allow the input function to be called once', function () {
        const input = jest.fn();
        input.mockReturnValueOnce(5)
            .mockReturnValueOnce(10)
            .mockReturnValue(15);

        const outputFn = once(input);
        const firstOutput = outputFn();
        const secondOutput = outputFn();

        expect(firstOutput).toEqual(5);
        expect(secondOutput).toEqual(5);
        expect(input).toHaveBeenCalledTimes(1);
    });

    it('should pass arguments from the returned function to the original function', function () {
        const input = jest.fn()
            .mockImplementation((value) => {
                if (value === 'a') return 5;
                else if (value === 'b') return 10;
                else return 15;
            });

        const outputFn = once(input);
        const firstOutput = outputFn('a');
        const secondOutput = outputFn('b');

        expect(firstOutput).toEqual(5);
        expect(secondOutput).toEqual(5);
        expect(input).toHaveBeenCalledTimes(1);
    });
});