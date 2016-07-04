import expect from 'expect.js';
import {validate, string} from '../src/validate';

describe('Functions String', () => {
    describe('#minLength(value)', () => {
        it('should be true when string.length >=', () => {
            let result = validate(string.minLength(1));
            expect(result('T')).to.be.ok();
        });

        it('should be false when string.length <', () => {
            let result = validate(string.minLength(1));
            expect(result('')).to.not.be.ok();
        });

        it('should be false when value is null', () => {
            let result = validate(string.minLength(1));
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when value is undefined', () => {
            let result = validate(string.minLength(1));
            expect(result(undefined)).to.not.be.ok();
        });

        it('should be false when value is array', () => {
            let result = validate(string.minLength(1));
            expect(result([])).to.not.be.ok();
        });

        it('should be false when value is object', () => {
            let result = validate(string.minLength(1));
            expect(result({})).to.not.be.ok();
        });

        it('It should be an exception when undefined', () => {
            let result = validate(string.minLength(null));
            expect(result('Test')).to.be.ok();
        });

        it('It should be an exception when undefined', () => {
            let result = validate(string.minLength(undefined));
            expect(result('Test')).to.be.ok();
        });
    });

    describe('#maxLength(value)', () => {
        it('should be true when string.length <=', () => {
            let result = validate(string.maxLength(1));
            expect(result('T')).to.be.ok();
        });

        it('should be true when string.length <=', () => {
            let result = validate(string.maxLength(1));
            expect(result('')).to.be.ok();
        });

        it('should be false when string.length >', () => {
            let result = validate(string.maxLength(1));
            expect(result('Te')).to.not.be.ok();
        });

        it('should be false when value is null', () => {
            let result = validate(string.maxLength(1));
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when value is undefined', () => {
            let result = validate(string.maxLength(1));
            expect(result(undefined)).to.not.be.ok();
        });

        it('should be false when value is array', () => {
            let result = validate(string.maxLength(1));
            expect(result([])).to.not.be.ok();
        });

        it('should be false when value is object', () => {
            let result = validate(string.maxLength(1));
            expect(result({})).to.not.be.ok();
        });

        it('It should be an exception when undefined', () => {
            let result = validate(string.maxLength(null));
            expect(result('Test')).to.be.ok();
        });

        it('It should be an exception when undefined', () => {
            let result = validate(string.maxLength(undefined));
            expect(result('Test')).to.be.ok();
        });
    });

    describe('#isString(string)', () => {
        it('should be true when a string', () => {
            let result = validate(string.isString);
            expect(result('Test')).to.be.ok();
        });

        it('should be false when an array', () => {
            let result = validate(string.isString);
            expect(result([])).to.not.be.ok();
        });

        it('should be false when an object', () => {
            let result = validate(string.isString);
            expect(result({})).to.not.be.ok();
        });

        it('should be false when a number', () => {
            let result = validate(string.isString);
            expect(result(1)).to.not.be.ok();
        });

        it('should be false when value is null', () => {
            let result = validate(string.isString);
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when value is undefined', () => {
            let result = validate(string.isString);
            expect(result(undefined)).to.not.be.ok();
        });
    });

    describe('#length(min, max)', () => {
        it('should be true when string.length between min and max', () => {
            let result = validate(string.length(1, 10));
            expect(result('T')).to.be.ok();
        });

        it('should be true when string.length between min and max', () => {
            let result = validate(string.length(1, 10));
            expect(result('1234567890')).to.be.ok();
        });

        it('should be false when string.length out of range min and max', () => {
            let result = validate(string.length(1, 10));
            expect(result('')).to.not.be.ok();
        });

        it('should be false when string.length out of range min and max', () => {
            let result = validate(string.length(1, 10));
            expect(result('12345678901')).to.not.be.ok();
        });
    });

    describe('#regex(expression, lastIndex)', () => {
        it('should be true', () => {
            let result = validate(string.regex(/a/, 2));
            expect(result('a')).to.be.ok();
        });

        it('should be false', () => {
            let result = validate(string.regex(/a/, 2));
            expect(result('b')).to.not.be.ok();
        });
    });
});
