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

})
