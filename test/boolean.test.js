import expect from 'expect.js';
import {validate, bool} from '../src/validate';

describe('Functions Boolean', () => {
    describe('#isTrue(value)', () => {
        it('should be true when value is true', () => {
            let result = validate(bool.isTrue);
            expect(result(true)).to.be.ok();
        });

        it('should be false when value is false', () => {
            let result = validate(bool.isTrue);
            expect(result(false)).to.not.be.ok();
        });

        it('should be false when value is null', () => {
            let result = validate(bool.isTrue);
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when value is undefined', () => {
            let result = validate(bool.isTrue);
            expect(result(undefined)).to.not.be.ok();
        });
    });

    describe('#isFalse(value)', () => {
        it('should be false when value is true', () => {
            let result = validate(bool.isFalse);
            expect(result(true)).to.not.be.ok();
        });

        it('should be true when value is false', () => {
            let result = validate(bool.isFalse);
            expect(result(false)).to.be.ok();
        });

        it('should be false when value is null', () => {
            let result = validate(bool.isFalse);
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when value is undefined', () => {
            let result = validate(bool.isFalse);
            expect(result(undefined)).to.not.be.ok();
        });
    });
});
