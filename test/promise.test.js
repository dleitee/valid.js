import expect from 'expect.js';
import { promise, validate } from '../src/validate';

describe('Function Promise', () => {

	describe('#isPromise', () => {

		it('should be true when value is a promise', () => {
			let promiseTest = new Promise( (r) => {});
			let result = validate(promise.isPromise);
			expect(result( promiseTest )).to.be.ok();
		});

		it('should be false when value is not a promise', () => {
			let promiseTest = undefined;
			let result = validate(promise.isPromise);
			expect(result( promiseTest )).to.not.be.ok();
		});
	});
});