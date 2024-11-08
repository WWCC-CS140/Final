const get = require('../../src/objects/get');

describe('get', function () {
    const input = {
        key1: true,
        key2: 2,
        key3: {
            nested1: 'JavaScript',
            nested2: {
                nested11: '3 levels deep'
            }
        },
        key4: ['a', 'b', 'c'],
        key5: {
            nested1: [{
                nested11: ['z']
            }]
        }
    };

    it('should return the value stored at a path one entry deep', function () {
        const output1 = get(input, ['key1']);
        const output2 = get(input, ['key2']);

        expect(output1).toBe(true);
        expect(output2).toEqual(2);
    });

    it('should return the value stored at a path two entries deep', function () {
        const output = get(input, ['key3', 'nested1']);

        expect(output).toEqual('JavaScript');
    });

    it('should return the value stored at a path N entries deep', function () {
        const output = get(input, ['key3', 'nested2', 'nested11']);

        expect(output).toEqual('3 levels deep');
    });

    it('should return the default value stored at an invalid path one entry deep', function () {
        const output = get(input, ['keyZ'], 'test');

        expect(output).toEqual('test');
    });

    it('should return the default value stored at an invalid path two entries deep', function () {
        const output1 = get(input, ['key3', 'keyZ'], 'test1');
        const output2 = get(input, ['keyZ', 'nested1'], 'test2');

        expect(output1).toEqual('test1');
        expect(output2).toEqual('test2');
    });

    it('should return the default value stored at an invalid path N entry deep', function () {
        const output1 = get(input, ['key3', 'nested2', 'keyZ'], 'test1');
        const output2 = get(input, ['keyZ', 'nested1', 'nested11'], 'test2');

        expect(output1).toEqual('test1');
        expect(output2).toEqual('test2');
    });

    it('should return the value stored at a path through objects and arrays', function () {
        const output = get(input, ['key5', 'nested1', '0', 'nested11', '0']);

        expect(output).toEqual('z');
    });
});