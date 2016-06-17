import {isNil} from '../src/lib/isnil.js';

import expect from 'expect.js';

describe('Library isNil', () => {
    describe('#isNil(value)', () => {
        it('should be true when value is null', () => {
            let result = isNil(null);
            expect(result).to.be.ok();
        });

        it('should be true when value is undefined', () => {
            let result = isNil(undefined);
            expect(result).to.be.ok();
        });

        it('should be false when value is false', () => {
            let result = isNil(false);
            expect(result).to.not.be.ok();
        });

        it('should be false when value is 0', () => {
            let result = isNil(0);
            expect(result).to.not.be.ok();
        });

        it('should be false when value is NaN', () => {
            let result = isNil(NaN);
            expect(result).to.not.be.ok();
        });

        it('should be false when value is number', () => {
            let result = isNil(1);
            expect(result).to.not.be.ok();
        });

        it('should be false when value is array', () => {
            let result = isNil([]);
            expect(result).to.not.be.ok();
        });

        it('should be false when value is object', () => {
            let result = isNil({});
            expect(result).to.not.be.ok();
        });

        it('should be false when value is string', () => {
            let result = isNil('1');
            expect(result).to.not.be.ok();
        });

        it('should be false when value is function', () => {
            let result = isNil(() => null);
            expect(result).to.not.be.ok();
        });
    });
});
