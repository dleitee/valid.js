import expect from 'expect.js'
import {cpf} from '../src/validate'

describe('Functions CPF', () => {
  let validCpf1 = '58923849242'
  let validCpf2 = '348.829.854-21'
  let validCpf3 = '782.37482932'
  let invalidCpf1 = '849.920.384.22'
  let invalidCpf2 = '849.920.3822'

  describe('#isCpf(cpfNumber)', () => {
    it('should be true when value is a valid CPF number without separators', () => {
      let result = cpf.isCpf(validCpf1)
      expect(result).to.be.ok()
    })
    it('should be true when value is a valid CPF number with dots and dash separators', () => {
      let result = cpf.isCpf(validCpf2)
      expect(result).to.be.ok()
    })
    it('should be true when value is a valid CPF number even if miss some separators', () => {
      let result = cpf.isCpf(validCpf3)
      expect(result).to.be.ok()
    })
    it('should be false when value is valid CPF number, but with wrong separators', () => {
      let result = cpf.isCpf(invalidCpf1)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is invalid CPF number', () => {
      let result = cpf.isCpf(invalidCpf2)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is null', () => {
      let result = cpf.isCpf(null)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is undefined', () => {
      let result = cpf.isCpf(undefined)
      expect(result).to.not.be.ok()
    })
    it('should be false when value is blank', () => {
      let result = cpf.isCpf('')
      expect(result).to.not.be.ok()
    })
  })
})
