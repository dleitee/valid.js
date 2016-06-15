import expect from 'expect.js';
import {validate, string} from '../src/validate';

describe('Library Validate', () => {
  describe('#validate(...fn)(value)', () => {
    it('must accept more than one parameter', () => {
      let result = validate(string.minLength(0), string.maxLength(10));
      expect(result('Test')).to.be.ok();
    });

    it('must accept only one parameter', () => {
      let result = validate(string.maxLength(10));
      expect(result('Test')).to.be.ok();
    });

    it('must accept empty parameter', () => {
      let result = validate();
      expect(result('')).to.be.ok();
    });

    it('It should be an exception when null', () => {
      let result = validate(null);
      expect(result.bind(this, '')).to.throwError();
    });

    it('It should be an exception when undefined', () => {
      let result = validate(undefined);
      expect(result.bind(this, '')).to.throwError();
    });
  });
});
