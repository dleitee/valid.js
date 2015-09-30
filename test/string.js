import expect from 'expect.js'
import {validate, string} from '../src/validate'

describe('Functions String', () => {

  describe('#minLength', () => {

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
