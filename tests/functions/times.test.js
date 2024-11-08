const times = require('../../src/functions/times');

describe('times', function () {
    it('should return a function', function () {
        const input = jest.fn();
        const outputFn = times(input, 1);

        expect(typeof outputFn).toBe('function');
        expect(input).not.toHaveBeenCalled();
    });

    it('should only allow the input function to be called n times', function () {
        const input = jest.fn();
        input.mockReturnValueOnce(5)
            .mockReturnValueOnce(10)
            .mockReturnValue(15);

        const outputFn = times(input, 2);
        const firstOutput = outputFn();
        const secondOutput = outputFn();
        const thirdOutput = outputFn();

        expect(firstOutput).toEqual(5);
        expect(secondOutput).toEqual(10);
        expect(thirdOutput).toEqual(10);
        expect(input).toHaveBeenCalledTimes(2);
    });

    it('should pass arguments from the returned function to the original function', function () {
        const input = jest.fn()
            .mockImplementation((value) => {
                if (value === 'a') return 5;
                else if (value === 'b') return 10;
                else return 15;
            });

        const outputFn = times(input, 2);
        const firstOutput = outputFn('a');
        const secondOutput = outputFn('b');
        const thirdOutput = outputFn('a');

        expect(firstOutput).toEqual(5);
        expect(secondOutput).toEqual(10);
        expect(thirdOutput).toEqual(10);
        expect(input).toHaveBeenCalledTimes(2);
    });
});