import expect from 'expect.js'
import {creditCard} from '../src/validate'

describe('Functions CreditCard', () => {
  let validVisa = '4485167472072613'
  let validAmex = '345420937661290'
  let validMasterCard = '5156602052038753'
  let validDiners = '38266178165885'

  describe('#isVisa(creditCard)', () => {
    it('should be true when value is valid visa credit card', () => {
      let result = creditCard.isVisa(validVisa)
      expect(result).to.be.ok()
    })
    it('should be false when value is valid amex credit card', () => {
      let result = creditCard.isVisa(validAmex)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is valid mastercard credit card', () => {
      let result = creditCard.isVisa(validMasterCard)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is blank', () => {
      let result = creditCard.isVisa('')
      expect(result).to.not.be.ok()
    })
  })

  describe('#isMasterCard(creditCard)', () => {
    it('should be true when value is valid mastercard credit card', () => {
      let result = creditCard.isMasterCard(validMasterCard)
      expect(result).to.be.ok()
    })
    it('should be false when value is valid amex credit card', () => {
      let result = creditCard.isMasterCard(validAmex)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is valid visa credit card', () => {
      let result = creditCard.isMasterCard(validVisa)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is blank', () => {
      let result = creditCard.isMasterCard('')
      expect(result).to.not.be.ok()
    })
  })

  describe('#isDiners(creditCard)', () => {
    it('should be true when value is valid diners credit card', () => {
      let result = creditCard.isDiners(validDiners)
      expect(result).to.be.ok()
    })
    it('should be false when value is valid amex credit card', () => {
      let result = creditCard.isDiners(validAmex)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is valid visa credit card', () => {
      let result = creditCard.isDiners(validVisa)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is blank', () => {
      let result = creditCard.isDiners('')
      expect(result).to.not.be.ok()
    })
  })

  describe('#isAmex(creditCard)', () => {
    it('should be true when value is valid amex credit card', () => {
      let result = creditCard.isAmex(validAmex)
      expect(result).to.be.ok()
    })
    it('should be false when value is valid diners credit card', () => {
      let result = creditCard.isAmex(validDiners)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is valid visa credit card', () => {
      let result = creditCard.isAmex(validVisa)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is blank', () => {
      let result = creditCard.isAmex('')
      expect(result).to.not.be.ok()
    })
  })
})
