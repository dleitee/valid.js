import expect from 'expect.js';
import {validate, number} from '../src/validate';

describe('Functions Number', () => {
    describe('#maxNumber(value)', () => {
        it('should be true when number < value', () => {
            let result = validate(number.maxNumber(10));
            expect(result(9)).to.be.ok();
        });

        it('should be true when number = value', () => {
            let result = validate(number.maxNumber(10));
            expect(result(10)).to.be.ok();
        });

        it('should be false when number > value', () => {
            let result = validate(number.maxNumber(10));
            expect(result(11)).to.not.be.ok();
        });

        it('should be false when value is null', () => {
            let result = validate(number.maxNumber(null));
            expect(result(11)).to.not.be.ok();
        });

        it('should be true when value is undefined', () => {
            let result = validate(number.maxNumber(undefined));
            expect(result(11)).to.be.ok();
        });

        it('should be false when number is null', () => {
            let result = validate(number.maxNumber(10));
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when number is undefined', () => {
            let result = validate(number.maxNumber(10));
            expect(result(undefined)).to.not.be.ok();
        });
    });

    describe('#minNumber(value)', () => {
        it('should be true when number > value', () => {
            let result = validate(number.minNumber(10));
            expect(result(11)).to.be.ok();
        });

        it('should be true when number = value', () => {
            let result = validate(number.minNumber(10));
            expect(result(10)).to.be.ok();
        });

        it('should be false when number < value', () => {
            let result = validate(number.minNumber(10));
            expect(result(9)).to.not.be.ok();
        });

        it('should be true when value is null', () => {
            let result = validate(number.minNumber(null));
            expect(result(11)).to.be.ok();
        });

        it('should be true when value is undefined', () => {
            let result = validate(number.minNumber(undefined));
            expect(result(11)).to.be.ok();
        });

        it('should be false when number is null', () => {
            let result = validate(number.minNumber(10));
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when number is undefined', () => {
            let result = validate(number.minNumber(10));
            expect(result(undefined)).to.not.be.ok();
        });
    });

    describe('#between(min, max)', () => {
        let min = 10;
        let max = 20;
        let result = validate(number.between(min, max));
        it('should be true when number >= min and number <= max', () => {
            expect(result(11)).to.be.ok();
        });

        it('should be true when number = min', () => {
            expect(result(min)).to.be.ok();
        });

        it('should be true when number = max', () => {
            expect(result(max)).to.be.ok();
        });

        it('should be false when number < min', () => {
            expect(result(min - 1)).to.not.be.ok();
        });

        it('should be false when number > max', () => {
            expect(result(max + 1)).to.not.be.ok();
        });
    });

    describe('#isNumber(value)', () => {
        it('should be true when value is number', () => {
            let result = validate(number.isNumber);
            expect(result(1)).to.be.ok();
        });

        it('should be false when value is string', () => {
            let result = validate(number.isNumber);
            expect(result('')).to.not.be.ok();
        });

        it('should be false when value is array', () => {
            let result = validate(number.isNumber);
            expect(result([])).to.not.be.ok();
        });

        it('should be false when value is object', () => {
            let result = validate(number.isNumber);
            expect(result({})).to.not.be.ok();
        });

        it('should be false when value is null', () => {
            let result = validate(number.isNumber);
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when value is undefined', () => {
            let result = validate(number.isNumber);
            expect(result(undefined)).to.not.be.ok();
        });
    });
});
