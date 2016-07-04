import expect from 'expect.js';
import {ip} from '../src/validate';

describe('Functions Ip', () => {
    describe('#isIp(value)', () => {
        it('should be true when IPv4 is correct', () => {
            let result = ip.isIp('127.0.0.1');
            expect(result).to.be.ok();
        });

        it('should be false when IPv4 is incorrect', () => {
            let result = ip.isIp('527.0.780.1');
            expect(result).to.not.be.ok();
        });

        it('should be true when IPv6 is correct', () => {
            let result = ip.isIp('21DA:00D3:0000:2F3B:02AA:00FF:FE28:9C5A');
            expect(result).to.be.ok();
        });

        it('should be false when IPv6 is incorrect', () => {
            let result = ip.isIp('0000:0000:0000:0000:MMMM:0000:0000:0000');
            expect(result).to.not.be.ok();
        });
    });
});
