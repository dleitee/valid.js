import expect from 'expect.js';
import {validate, date} from '../src/validate';

describe('Functions Date', () => {
    describe('#maxDate(value)', () => {
        it('should be true when date < value', () => {
            let result = validate(date.maxDate(new Date(2015, 9, 15)));
            expect(result(new Date(2015, 9, 14))).to.be.ok();
        });

        it('should be true when date = value', () => {
            let result = validate(date.maxDate(new Date(2015, 9, 15)));
            expect(result(new Date(2015, 9, 15))).to.be.ok();
        });

        it('should be false when date > value', () => {
            let result = validate(date.maxDate(new Date(2015, 9, 15)));
            expect(result(new Date(2015, 9, 16))).to.not.be.ok();
        });

        it('should be false when value is null', () => {
            let result = validate(date.maxDate(null));
            expect(result(new Date(2015, 9, 15))).to.not.be.ok();
        });

        it('should be true when value is undefined', () => {
            let result = validate(date.maxDate(undefined));
            expect(result(new Date(2015, 9, 15))).to.be.ok();
        });

        it('should be false when date is null', () => {
            let result = validate(date.maxDate(new Date(2015, 9, 15)));
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when date is undefined', () => {
            let result = validate(date.maxDate(new Date(2015, 9, 15)));
            expect(result(undefined)).to.not.be.ok();
        });
    });

    describe('#minDate(value)', () => {
        it('should be true when date > value', () => {
            let result = validate(date.minDate(new Date(2015, 9, 15)));
            expect(result(new Date(2015, 9, 16))).to.be.ok();
        });

        it('should be true when date = value', () => {
            let result = validate(date.minDate(new Date(2015, 9, 15)));
            expect(result(new Date(2015, 9, 15))).to.be.ok();
        });

        it('should be false when date < value', () => {
            let result = validate(date.minDate(new Date(2015, 9, 15)));
            expect(result(new Date(2015, 9, 14))).to.not.be.ok();
        });

        it('should be true when value is null', () => {
            let result = validate(date.minDate(null));
            expect(result(new Date(2015, 9, 15))).to.be.ok();
        });

        it('should be true when value is undefined', () => {
            let result = validate(date.minDate(undefined));
            expect(result(new Date(2015, 9, 15))).to.be.ok();
        });

        it('should be false when date is null', () => {
            let result = validate(date.minDate(new Date(2015, 9, 15)));
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when date is undefined', () => {
            let result = validate(date.minDate(new Date(2015, 9, 15)));
            expect(result(undefined)).to.not.be.ok();
        });
    });

    describe('#between(min, max)', () => {
        let min = new Date(2015, 9, 15);
        let max = new Date(2015, 9, 20);
        let result = validate(date.between(min, max));
        it('should be true when date >= min and date <= max', () => {
            expect(result(new Date(2015, 9, 15))).to.be.ok();
        });

        it('should be true when date = min', () => {
            expect(result(min)).to.be.ok();
        });

        it('should be true when date = max', () => {
            expect(result(max)).to.be.ok();
        });

        it('should be false when date < min', () => {
            expect(result(new Date(2015, 9, 14))).to.not.be.ok();
        });

        it('should be false when date > max', () => {
            expect(result(new Date(2015, 9, 21))).to.not.be.ok();
        });
    });

    describe('#isDate(value)', () => {
        it('should be true when value is date', () => {
            let result = validate(date.isDate);
            expect(result(new Date(2015, 9, 15))).to.be.ok();
        });

        it('should be false when value is string', () => {
            let result = validate(date.isDate);
            expect(result('')).to.not.be.ok();
        });

        it('should be false when value is array', () => {
            let result = validate(date.isDate);
            expect(result([])).to.not.be.ok();
        });

        it('should be false when value is object', () => {
            let result = validate(date.isDate);
            expect(result({})).to.not.be.ok();
        });

        it('should be false when value is null', () => {
            let result = validate(date.isDate);
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when value is undefined', () => {
            let result = validate(date.isDate);
            expect(result(undefined)).to.not.be.ok();
        });
    });
});
