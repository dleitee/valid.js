import {reduce} from '../src/lib/reduce.js';

import expect from 'expect.js';

describe('Library Reduce', () => {
    describe('#reduce(func, index, array)', () => {
        const add = (a, b) => a + b;

        it('should be 15 when array is [1,2,3,4,5]', () => {
            let result = reduce(add, 0, [1, 2, 3, 4, 5]);
            expect(result).to.be(15);
        });

        it('It should be an exception when index is not an array', () => {
            let result = reduce.bind(this, add, 0, null);
            expect(result).to.throwError();
        });

        it('It should be an exception when func is not a function', () => {
            let result = reduce.bind(this, undefined, 0, [1, 2, 3, 4, 5]);
            expect(result).to.throwError();
        });
    });
});

describe('Library Reduce without Array.prototype.reduce', () => {
    const reduceTemp = Array.prototype.reduce;
    before(()=> {
        Array.prototype.reduce = null;
    });
    describe('#reduce(func, index, array)', () => {
        const add = (a, b) => a + b;

        it('should be 15 when array is [1,2,3,4,5]', () => {
            let result = reduce(add, 0, [1, 2, 3, 4, 5]);
            expect(result).to.be(15);
        });

        it('It should be an exception when index is not an array', () => {
            let result = reduce.bind(this, add, 0, null);
            expect(result).to.throwError();
        });

        it('It should be an exception when func is not a function', () => {
            let result = reduce.bind(this, undefined, 0, [1, 2, 3, 4, 5]);
            expect(result).to.throwError();
        });
    });
    after(()=> {
        Array.prototype.reduce = reduceTemp;
    });
});
