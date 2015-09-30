import expect from 'expect.js'
import {validate, string, number} from '../src/validate'

describe('Library Validate', () => {

  describe('#validate()', () => {

    it('should expose a function', () =>  {
      expect(validate).to.be.a('function')
      expect(string.minLength).to.be.a('function')
      expect(string.maxLength).to.be.a('function')
      expect(string.hasString).to.be.a('function')
      expect(number.maxNumber).to.be.a('function')
      expect(number.minNumber).to.be.a('function')
      expect(number.between).to.be.a('function')
      expect(number.isNumber).to.be.a('function')
    })

  })

  describe('string#minLength', () => {

    it('should be true for all', () => {
        expect(validate(string.minLength(0))('')).to.be.ok()
        expect(validate(string.minLength(0))('1')).to.be.ok()
        expect(validate(string.minLength(1))('1')).to.be.ok()
        expect(validate(string.minLength(-1))('')).to.be.ok()
    })

    it('should be false for all', () => {
      expect(validate(string.minLength(2))('1')).to.not.be.ok()
      expect(validate(string.minLength(2))(null)).to.not.be.ok()
      expect(validate(string.minLength(2))(undefined)).to.not.be.ok()
      expect(validate(string.minLength(2))(1)).to.not.be.ok()
      expect(validate(string.minLength(2))(1.2)).to.not.be.ok()
      expect(validate(string.minLength(2))([])).to.not.be.ok()
      expect(validate(string.minLength(2))(['a', 'b'])).to.not.be.ok()
      expect(validate(string.minLength(2))({})).to.not.be.ok()
    })

  })

})
