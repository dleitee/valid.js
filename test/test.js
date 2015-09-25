import expect from 'expect.js'
import {validate, string} from '../src/validate'

describe('Library Validate', () => {

  describe('#validate()', () => {

    it('should expose a function', () =>  {
      expect(validate).to.be.a('function')
      expect(string.minLength).to.be.a('function')
      expect(string.maxLength).to.be.a('function')
      expect(string.isString).to.be.a('function')
    })

  })

  describe('string#minLength', () => {

    it('should be true for all', () => {
        expect(validate('', string.minLength(0))).to.be.ok()
        expect(validate('1', string.minLength(0))).to.be.ok()
        expect(validate('1', string.minLength(1))).to.be.ok()
        expect(validate('', string.minLength(-1))).to.be.ok()
    })

    it('should be false for all', () => {
      expect(validate('1', string.minLength(2))).to.not.be.ok()
      expect(validate(null, string.minLength(2))).to.not.be.ok()
      expect(validate(undefined, string.minLength(2))).to.not.be.ok()
      expect(validate(1, string.minLength(2))).to.not.be.ok()
      expect(validate(1.2, string.minLength(2))).to.not.be.ok()
      expect(validate([], string.minLength(2))).to.not.be.ok()
      expect(validate(['a', 'b'], string.minLength(2))).to.not.be.ok()
      expect(validate({}, string.minLength(2))).to.not.be.ok()
    })

  })

})
