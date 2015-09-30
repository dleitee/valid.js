import expect from 'expect.js'
import {validate, string} from '../src/validate'

describe('Functions String', () => {

  describe('#minLength(value)', () => {

    it('should be true when string.length >=', () => {
      let result = validate(string.minLength(1))
      expect(result('T')).to.be.ok()
    })

    it('should be false when string.length <', () => {
      let result = validate(string.minLength(1))
      expect(result('')).to.not.be.ok()
    })

    it('should be false when value is null', () => {
      let result = validate(string.minLength(1))
      expect(result(null)).to.not.be.ok()
    })

    it('should be false when value is undefined', () => {
      let result = validate(string.minLength(1))
      expect(result(undefined)).to.not.be.ok()
    })

    it('should be false when value is array', () => {
      let result = validate(string.minLength(1))
      expect(result([])).to.not.be.ok()
    })

    it('should be false when value is object', () => {
      let result = validate(string.minLength(1))
      expect(result({})).to.not.be.ok()
    })

    it('It should be an exception when undefined', () => {
      let result = validate(string.minLength(null))
      expect(result.bind(this, 'Test')).to.throwError()
    })

    it('It should be an exception when undefined', () => {
      let result = validate(string.minLength(undefined))
      expect(result.bind(this, 'Test')).to.throwError()
    })

  })

  describe('#maxLength(value)', () => {

    it('should be true when string.length <=', () => {
      let result = validate(string.maxLength(1))
      expect(result('T')).to.be.ok()
    })

    it('should be true when string.length <=', () => {
      let result = validate(string.maxLength(1))
      expect(result('')).to.be.ok()
    })

    it('should be false when string.length >', () => {
      let result = validate(string.maxLength(1))
      expect(result('Te')).to.not.be.ok()
    })

    it('should be false when value is null', () => {
      let result = validate(string.maxLength(1))
      expect(result(null)).to.not.be.ok()
    })

    it('should be false when value is undefined', () => {
      let result = validate(string.maxLength(1))
      expect(result(undefined)).to.not.be.ok()
    })

    it('should be false when value is array', () => {
      let result = validate(string.maxLength(1))
      expect(result([])).to.not.be.ok()
    })

    it('should be false when value is object', () => {
      let result = validate(string.maxLength(1))
      expect(result({})).to.not.be.ok()
    })

    it('It should be an exception when undefined', () => {
      let result = validate(string.maxLength(null))
      expect(result.bind(this, 'Test')).to.throwError()
    })

    it('It should be an exception when undefined', () => {
      let result = validate(string.maxLength(undefined))
      expect(result.bind(this, 'Test')).to.throwError()
    })

  })

  describe('#isString(string)', () => {

    it('should be true when a string', () => {
      let result = validate(string.isString)
      expect(result('Test')).to.be.ok()
    })

    it('should be false when an array', () => {
      let result = validate(string.isString)
      expect(result([])).to.not.be.ok()
    })

    it('should be false when an object', () => {
      let result = validate(string.isString)
      expect(result({})).to.not.be.ok()
    })

    it('should be false when a number', () => {
      let result = validate(string.isString)
      expect(result(1)).to.not.be.ok()
    })

    it('should be false when value is null', () => {
      let result = validate(string.isString)
      expect(result(null)).to.not.be.ok()
    })

    it('should be false when value is undefined', () => {
      let result = validate(string.isString)
      expect(result(undefined)).to.not.be.ok()
    })

  })

})
