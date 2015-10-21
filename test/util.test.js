import expect from 'expect.js'
import {validate, util} from '../src/validate'

describe('Functions Util', () => {
  describe('#isRequired(value)', () => {
    it('should be true when value is true', () => {
      let result = validate(util.isRequired)
      expect(result(true)).to.be.ok()
    })

    it('should be false when value is false', () => {
      let result = validate(util.isRequired)
      expect(result(false)).to.not.be.ok()
    })

    it('should be true when array.length > 0', () => {
      let result = validate(util.isRequired)
      expect(result(['Test'])).to.be.ok()
    })

    it('should be false when array.length <= 0', () => {
      let result = validate(util.isRequired)
      expect(result([])).to.not.be.ok()
    })

    it('should be true when integer > 0', () => {
      let result = validate(util.isRequired)
      expect(result(1)).to.be.ok()
    })

    it('should be false when integer <= 0', () => {
      let result = validate(util.isRequired)
      expect(result(0)).to.not.be.ok()
    })

    it('should be true when number > 0', () => {
      let result = validate(util.isRequired)
      expect(result(1.0)).to.be.ok()
    })

    it('should be false when number <= 0', () => {
      let result = validate(util.isRequired)
      expect(result(0.0)).to.not.be.ok()
    })

    it('should be true when object.length > 0', () => {
      let result = validate(util.isRequired)
      expect(result({test: true})).to.be.ok()
    })

    it('should be false when object.length <= 0', () => {
      let result = validate(util.isRequired)
      expect(result({})).to.not.be.ok()
    })

    it('should be true when string.length > 0', () => {
      let result = validate(util.isRequired)
      expect(result('Test')).to.be.ok()
    })

    it('should be false when string.length <= 0', () => {
      let result = validate(util.isRequired)
      expect(result('')).to.not.be.ok()
    })

    it('should be false when value is null', () => {
      let result = validate(util.isRequired)
      expect(result(null)).to.not.be.ok()
    })

    it('should be false when value is undefined', () => {
      let result = validate(util.isRequired)
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

    it('should be false when value is provedor', () => {
      let result = validate(util.isEmail)
      expect(result('emailprovedor')).to.not.be.ok()
    })

    it('should be true when email is valid', () => {
      let result = validate(util.isEmail)
      expect(result('prettyandsimple@example.com')).to.be.ok()
    })

    it('should be true when email is valid', () => {
      let result = validate(util.isEmail)
      expect(result('very.common@example.com')).to.be.ok()
    })

    it('should be true when email is valid', () => {
      let result = validate(util.isEmail)
      expect(result('disposable.style.email.with+symbol@example.com')).to.be.ok()
    })

    it('should be true when email is valid', () => {
      let result = validate(util.isEmail)
      expect(result('other.email-with-dash@example.com')).to.be.ok()
    })

    it('should be true when email is valid ["much.more unusual"@example.com]', () => {
      let result = validate(util.isEmail)
      expect(result('"much.more unusual"@example.com')).to.be.ok()
    })

    it('should be true when email is valid ["very.unusual.@.unusual.com"@example.com]', () => {
      let result = validate(util.isEmail)
      expect(result('"very.unusual.@.unusual.com"@example.com')).to.be.ok()
    })

    it('should be true when email is valid [admin@mailserver1]', () => {
      let result = validate(util.isEmail)
      expect(result('admin@mailserver1')).to.be.ok()
    })

    it('should be true when email is valid [#!$%&*+-/=?^_`{}|~@example.org]', () => {
      let result = validate(util.isEmail)
      expect(result('#!$%&*+\'-/=?^_`{}|~@example.org')).to.be.ok()
    })

    it('should be true when email is valid ["()<>[]:,;@\\\"!#$%&\'*+-/=?^_`{}| ~.a"@example.org]', () => {
      let result = validate(util.isEmail)
      expect(result('"()<>[]:,;@\\\"!#$%&\'*+-/=?^_`{}| ~.a"@example.org')).to.be.ok()
    })

    it('should be true when email is valid [" "@example.org]', () => {
      let result = validate(util.isEmail)
      expect(result('" "@example.org')).to.be.ok()
    })
  })

  describe('#isCep(value)', () => {
    it('should be true when value is 99999-999', () => {
      let result = validate(util.isCep)
      expect(result('99999-999')).to.be.ok()
    })

    it('should be false when value is 99999999', () => {
      let result = validate(util.isCep)
      expect(result('99999999')).to.not.be.ok()
    })

    it('should be false when value is 99999/999', () => {
      let result = validate(util.isCep)
      expect(result('99999/999')).to.not.be.ok()
    })

    it('should be false when value is 9999-999', () => {
      let result = validate(util.isCep)
      expect(result('9999-999')).to.not.be.ok()
    })
  })
})
