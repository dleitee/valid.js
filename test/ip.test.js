import expect from 'expect.js'
import {ip} from '../src/validate'

describe('Functions Ip', () => {
  describe('#isIp(value)', () => {
    it('should be true when IP is correct', () => {
      let result = ip.isIp('127.0.0.1')
      expect(result).to.be.ok()
    })

    it('should be true when IP is incorrect', () => {
      let result = ip.isIp('527.0.780.1')
      expect(result).to.not.be.ok()
    })
  })
})
