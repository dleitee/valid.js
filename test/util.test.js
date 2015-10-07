import expect from 'expect.js'
import {validate, util} from '../src/validate'

describe('Functions Util', () => {

  describe('#required(value)', () => {

    it('should be true when value is true', () => {
      let result = validate(util.required)
      expect(result(true)).to.be.ok()
    })

    it('should be false when value is false', () => {
      let result = validate(util.required)
      expect(result(false)).to.not.be.ok()
    })

    it('should be true when array.length > 0', () => {
      let result = validate(util.required)
      expect(result(['Test'])).to.be.ok()
    })

    it('should be false when array.length <= 0', () => {
      let result = validate(util.required)
      expect(result([])).to.not.be.ok()
    })

    it('should be true when integer > 0', () => {
      let result = validate(util.required)
      expect(result(1)).to.be.ok()
    })

    it('should be false when integer <= 0', () => {
      let result = validate(util.required)
      expect(result(0)).to.not.be.ok()
    })

    it('should be true when number > 0', () => {
      let result = validate(util.required)
      expect(result(1.0)).to.be.ok()
    })

    it('should be false when number <= 0', () => {
      let result = validate(util.required)
      expect(result(0.0)).to.not.be.ok()
    })

    it('should be true when object.length > 0', () => {
      let result = validate(util.required)
      expect(result({test: true})).to.be.ok()
    })

    it('should be false when object.length <= 0', () => {
      let result = validate(util.required)
      expect(result({})).to.not.be.ok()
    })

    it('should be true when string.length > 0', () => {
      let result = validate(util.required)
      expect(result('Test')).to.be.ok()
    })

    it('should be false when string.length <= 0', () => {
      let result = validate(util.required)
      expect(result('')).to.not.be.ok()
    })

    it('should be false when value is null', () => {
      let result = validate(util.required)
      expect(result(null)).to.not.be.ok()
    })

    it('should be false when value is undefined', () => {
      let result = validate(util.required)
      expect(result(undefined)).to.not.be.ok()
    })

  })

  describe('#isEmail(value)', () => {

    it('should be true when value is .com', () => {
      let result = validate(util.isEmail)
      expect(result('email@provedor.com')).to.be.ok()
    })

    it('should be true when value is .com.br', () => {
      let result = validate(util.isEmail)
      expect(result('email@provedor.com.br')).to.be.ok()
    })

    it('should be true when value is .org.br', () => {
      let result = validate(util.isEmail)
      expect(result('email@provedor.org.br')).to.be.ok()
    })

    it('should be false when value is @provedor', () => {
      let result = validate(util.isEmail)
      expect(result('email@provedor')).to.not.be.ok()
    })

    it('should be false when value is provedor', () => {
      let result = validate(util.isEmail)
      expect(result('emailprovedor')).to.not.be.ok()
    })

  })


})
