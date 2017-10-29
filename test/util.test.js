import expect from 'expect.js';
import {validate, util} from '../src/validate';

describe('Functions Util', () => {
    describe('#isRequired(value)', () => {
        it('should be true when value is true', () => {
            let result = validate(util.isRequired);
            expect(result(true)).to.be.ok();
        });

        it('should be false when value is false', () => {
            let result = validate(util.isRequired);
            expect(result(false)).to.not.be.ok();
        });

        it('should be true when array.length > 0', () => {
            let result = validate(util.isRequired);
            expect(result(['Test'])).to.be.ok();
        });

        it('should be false when array.length <= 0', () => {
            let result = validate(util.isRequired);
            expect(result([])).to.not.be.ok();
        });

        it('should be true when integer > 0', () => {
            let result = validate(util.isRequired);
            expect(result(1)).to.be.ok();
        });

        it('should be false when integer <= 0', () => {
            let result = validate(util.isRequired);
            expect(result(0)).to.not.be.ok();
        });

        it('should be true when number > 0', () => {
            let result = validate(util.isRequired);
            expect(result(1.0)).to.be.ok();
        });

        it('should be false when number <= 0', () => {
            let result = validate(util.isRequired);
            expect(result(0.0)).to.not.be.ok();
        });

        it('should be true when object.length > 0', () => {
            let result = validate(util.isRequired);
            expect(result({test: true})).to.be.ok();
        });

        it('should be false when object.length <= 0', () => {
            let result = validate(util.isRequired);
            expect(result({})).to.not.be.ok();
        });

        it('should be true when string.length > 0', () => {
            let result = validate(util.isRequired);
            expect(result('Test')).to.be.ok();
        });

        it('should be false when string.length <= 0', () => {
            let result = validate(util.isRequired);
            expect(result('')).to.not.be.ok();
        });

        it('should be false when value is null', () => {
            let result = validate(util.isRequired);
            expect(result(null)).to.not.be.ok();
        });

        it('should be false when value is undefined', () => {
            let result = validate(util.isRequired);
            expect(result(undefined)).to.not.be.ok();
        });
    });

    describe('#isEmail(value)', () => {
        it('should be true when value is .com', () => {
            let result = validate(util.isEmail);
            expect(result('email@provedor.com')).to.be.ok();
        });

        it('should be true when value is .com.br', () => {
            let result = validate(util.isEmail);
            expect(result('email@provedor.com.br')).to.be.ok();
        });

        it('should be true when value is .org.br', () => {
            let result = validate(util.isEmail);
            expect(result('email@provedor.org.br')).to.be.ok();
        });

        it('should be false when value is provedor', () => {
            let result = validate(util.isEmail);
            expect(result('emailprovedor')).to.not.be.ok();
        });

        it('should be true when email is valid', () => {
            let result = validate(util.isEmail);
            expect(result('prettyandsimple@example.com')).to.be.ok();
        });

        it('should be true when email is valid', () => {
            let result = validate(util.isEmail);
            expect(result('very.common@example.com')).to.be.ok();
        });

        it('should be true when email is valid', () => {
            let result = validate(util.isEmail);
            expect(result('disposable.style.email.with+symbol@example.com')).to.be.ok();
        });

        it('should be true when email is valid', () => {
            let result = validate(util.isEmail);
            expect(result('other.email-with-dash@example.com')).to.be.ok();
        });

        it('should be true when email is valid ["much.more unusual"@example.com]', () => {
            let result = validate(util.isEmail);
            expect(result('"much.more unusual"@example.com')).to.be.ok();
        });

        it('should be true when email is valid ["very.unusual.@.unusual.com"@example.com]', () => {
            let result = validate(util.isEmail);
            expect(result('"very.unusual.@.unusual.com"@example.com')).to.be.ok();
        });

        it('should be true when email is valid [admin@mailserver1]', () => {
            let result = validate(util.isEmail);
            expect(result('admin@mailserver1')).to.be.ok();
        });

        it('should be true when email is valid [#!$%&*+-/=?^_`{}|~@example.org]', () => {
            let result = validate(util.isEmail);
            expect(result('#!$%&*+\'-/=?^_`{}|~@example.org')).to.be.ok();
        });

        it('should be true when email is valid ["()<>[]:,;@\\\"!#$%&\'*+-/=?^_`{}| ~.a"@example.org]', () => {
            let result = validate(util.isEmail);
            expect(result('"()<>[]:,;@\\\"!#$%&\'*+-/=?^_`{}| ~.a"@example.org')).to.be.ok();
        });

        it('should be true when email is valid [" "@example.org]', () => {
            let result = validate(util.isEmail);
            expect(result('" "@example.org')).to.be.ok();
        });

        it('should be true when email contains unicode characters on local part [üñîçøðé@example.com]', () => {
            let result = validate(util.isEmail);
            expect(result('üñîçøðé@example.com')).to.be.ok();
        });

        it('should be true when email contains unicode characters on domain part [üñîçøðé@üñîçøðé.com]', () => {
            let result = validate(util.isEmail);
            expect(result('üñîçøðé@üñîçøðé.com')).to.be.ok();
        });

        it('should be true when email contains quoted unicode text ["uñicødé"@üñîçøðé.com]', () => {
            let result = validate(util.isEmail);
            expect(result('"uñicødé"@üñîçøðé.com')).to.be.ok();
        });
    });

    describe('#isCep(value)', () => {
        it('should be true when value is 99999-999', () => {
            let result = validate(util.isCep);
            expect(result('99999-999')).to.be.ok();
        });

        it('should be false when value is 99999999', () => {
            let result = validate(util.isCep);
            expect(result('99999999')).to.not.be.ok();
        });

        it('should be false when value is 99999/999', () => {
            let result = validate(util.isCep);
            expect(result('99999/999')).to.not.be.ok();
        });

        it('should be false when value is 9999-999', () => {
            let result = validate(util.isCep);
            expect(result('9999-999')).to.not.be.ok();
        });
    });

    describe('#isURL(value)', () => {
        it('should match', () => {
            let result = validate(util.isURL);
            let fixtures = [
                'http://foo.com/blah_blah',
                'http://foo.com/blah_blah/',
                'http://foo.com/blah_blah_(wikipedia)',
                'http://foo.com/blah_blah_(wikipedia)_(again)',
                'http://www.example.com/wpstyle/?p=364',
                'https://www.example.com/foo/?bar=baz&inga=42&quux',
                'http://✪df.ws/123',
                'http://userid:password@example.com:8080',
                'http://userid:password@example.com:8080/',
                'http://userid@example.com',
                'http://userid@example.com/',
                'http://userid@example.com:8080',
                'http://userid@example.com:8080/',
                'http://userid:password@example.com',
                'http://userid:password@example.com/',
                'http://142.42.1.1/',
                'http://142.42.1.1:8080/',
                'http://➡.ws/䨹',
                'http://⌘.ws',
                'http://⌘.ws/',
                'http://foo.com/blah_(wikipedia)#cite-1',
                'http://foo.com/blah_(wikipedia)_blah#cite-1',
                'http://foo.com/unicode_(✪)_in_parens',
                'http://foo.com/(something)?after=parens',
                'http://☺.damowmow.com/',
                'http://code.google.com/events/#&product=browser',
                'http://j.mp',
                'ftp://foo.bar/baz',
                'http://foo.bar/?q=Test%20URL-encoded%20stuff',
                'http://مثال.إختبار',
                'http://例子.测试',
                'http://उदाहरण.परीक्षा',
                'http://-.~_!$&\'()*+,;=:%40:80%2f::::::@example.com',
                'http://1337.net',
                'http://a.b-c.de',
                'http://www.foo.bar./',
                'http://223.255.255.254'
            ];

            fixtures.forEach(el => {
                expect(result(el)).to.be.ok();
            });
        });

        it('should not match', () => {
            let result = validate(util.isURL);
            let fixtures = [
                'http://',
                'http://.',
                'http://..',
                'http://../',
                'http://?',
                'http://??',
                'http://??/',
                'http://#',
                'http://##',
                'http://##/',
                'http://foo.bar?q=Spaces should be encoded',
                '//',
                '//a',
                '///a',
                '///',
                'http:///a',
                'foo.com',
                'rdar://1234',
                'h://test',
                'http:// shouldfail.com',
                ':// should fail',
                'http://foo.bar/foo(bar)baz quux',
                'ftps://foo.bar/',
                'http://-error-.invalid/',
                'http://-a.b.co',
                'http://a.b-.co',
                'http://0.0.0.0',
                'http://10.1.1.0',
                'http://10.1.1.255',
                'http://224.1.1.1',
                'http://1.1.1.1.1',
                'http://123.123.123',
                'http://3628126748',
                'http://.www.foo.bar/',
                'http://.www.foo.bar./',
                'http://10.1.1.1'
            ];

            fixtures.forEach(el => {
                expect(result(el)).to.not.be.ok();
            });
        });
    });

    describe('#isHexColor(value)', () => {
        it('should be true when value is #000000', () => {
            let result = validate(util.isHexColor);
            expect(result('#000000')).to.be.ok();
        });

        it('should be true when value is #1F9a0E', () => {
            let result = validate(util.isHexColor);
            expect(result('#1F9a0E')).to.be.ok();
        });

        it('should be true when value is #fff', () => {
            let result = validate(util.isHexColor);
            expect(result('#fff')).to.be.ok();
        });

        it('should be false when value is #aaeefg', () => {
            let result = validate(util.isHexColor);
            expect(result('#aaeefg')).to.not.be.ok();
        });

        it('should be false when value is missing hash', () => {
            let result = validate(util.isHexColor);
            expect(result('000000')).to.not.be.ok();
        });

        it('should be false when value is too short(5)', () => {
            let result = validate(util.isHexColor);
            expect(result('#00000')).to.not.be.ok();
        });

        it('should be false when value is too long', () => {
            let result = validate(util.isHexColor);
            expect(result('#ff00ffa')).to.not.be.ok();
        });

        it('should be false when value is too short(2)', () => {
            let result = validate(util.isHexColor);
            expect(result('#00')).to.not.be.ok();
        });
    });

    describe('#isCpf(cpfNumber)', () => {
        let validCpf1 = '31227496451';
        let validCpf2 = '849.778.168-62';
        let validCpf3 = '984248.51374';
        let invalidCpf1 = '849.920.384.22';
        let invalidCpf2 = '84992038222';
        let invalidCpf3 = '111.111.111-11';

        it('should be true when value is a valid CPF number without separators', () => {
            let result = validate(util.isCpf);
            expect(result(validCpf1)).to.be.ok();
        });
        it('should be true when value is a valid CPF number with dots and dash separators', () => {
            let result = validate(util.isCpf);
            expect(result(validCpf2)).to.be.ok();
        });
        it('should be true when value is a valid CPF number even if miss some separators', () => {
            let result = validate(util.isCpf);
            expect(result(validCpf3)).to.be.ok();
        });
        it('should be false when value is CPF number, but with wrong separators', () => {
            let result = validate(util.isCpf);
            expect(result(invalidCpf1)).to.not.be.ok();
        });
        it('should be false when value is invalid CPF number', () => {
            let result = validate(util.isCpf);
            expect(result(invalidCpf2)).to.not.be.ok();
        });
        it('should be false when value has all the same numbers ', () => {
            let result = validate(util.isCpf);
            expect(result(invalidCpf3)).to.not.be.ok();
        });
        it('should be false when value is null', () => {
            let result = validate(util.isCpf);
            expect(result(null)).to.not.be.ok();
        });
        it('should be false when value is undefined', () => {
            let result = validate(util.isCpf);
            expect(result(undefined)).to.not.be.ok();
        });
        it('should be false when value is blank', () => {
            let result = validate(util.isCpf);
            expect(result('')).to.not.be.ok();
        });
        it('should be valid', () => {
            let result = validate(util.isCpf);
            [
                '587.527.742-44',
                '183.871.513-43',
                '012.076.274-96',
                '806.094.478-90',
                '040.666.844-24',
                '798.135.178-24',
                '892.940.222-42',
                '623.211.444-24',
                '722.521.764-07',
                '402.562.946-15',
                '857.223.383-03',
                '331.869.113-54',
                '411.446.745-90',
                '556.481.877-69',
                '241.555.747-13',
                '045.687.511-52',
                '433.256.263-19',
                '427.200.483-21'
            ].forEach(el => {
                expect(result(el)).to.be.ok();
            });
        });
        it('should be invalid', () => {
            let result = validate(util.isCpf);
            [
                '587.527.742-43',
                '183.871.513-42',
                '012.076.274-95',
                '806.094.478-89',
                '040.666.844-23',
                '798.135.178-23',
                '892.940.222-41',
                '623.211.444-23',
                '722.521.764-06',
                '402.562.946-14',
                '857.223.383-02',
                '331.869.113-53',
                '411.446.745-89',
                '556.481.877-68',
                '241.555.747-12',
                '045.687.511-51',
                '433.256.263-18',
                '427.200.483-20'
            ].forEach(el => {
                expect(result(el)).to.not.be.ok();
            });
        });
    });

    describe('#isCnpj(cnpjNumber)', () => {
        let validCnpj1 = '76486875000107';
        let validCnpj2 = '64.645.368/0001-90';
        let validCnpj3 = '67152871/000100';
        let invalidCnpj1 = '24.765.837.0001.90';
        let invalidCnpj2 = '05880288000121';
        let invalidCnpj3 = '11111111111111';

        it('should be true when value is a valid CNPJ number without separators', () => {
            let result = validate(util.isCnpj);
            expect(result(validCnpj1)).to.be.ok();
        });
        it('should be true when value is a valid CNPJ number with dots, dash and slash separators', () => {
            let result = validate(util.isCnpj);
            expect(result(validCnpj2)).to.be.ok();
        });
        it('should be true when value is a valid CNPJ number even if miss some separators', () => {
            let result = validate(util.isCnpj);
            expect(result(validCnpj3)).to.be.ok();
        });
        it('should be false when value is CNPJ number, but with wrong separators', () => {
            let result = validate(util.isCnpj);
            expect(result(invalidCnpj1)).to.not.be.ok();
        });
        it('should be false when value is invalid CNPJ number', () => {
            let result = validate(util.isCnpj);
            expect(result(invalidCnpj2)).to.not.be.ok();
        });
        it('should be false when value has all the same numbers', () => {
            let result = validate(util.isCnpj);
            expect(result(invalidCnpj3)).to.not.be.ok();
        });
        it('should be false when value is null', () => {
            let result = validate(util.isCnpj);
            expect(result(null)).to.not.be.ok();
        });
        it('should be false when value is undefined', () => {
            let result = validate(util.isCnpj);
            expect(result(undefined)).to.not.be.ok();
        });
        it('should be false when value is blank', () => {
            let result = validate(util.isCnpj);
            expect(result('')).to.not.be.ok();
        });
        it('should be valid', () => {
            let result = validate(util.isCnpj);
            [
                '43.132.177/0001-54',
                '83.245.505/0001-43',
                '82.728.348/0001-64',
                '71.347.734/0001-90',
                '78.710.967/0001-54',
                '23.453.775/0001-18',
                '77.943.162/0001-98',
                '26.306.662/0001-88',
                '66.655.374/0001-53',
                '03.277.226/0001-22',
                '05.261.831/0001-30',
                '66.615.405/0001-42',
                '02.238.116/0001-99',
                '77.987.387/0001-46',
                '64.223.491/0001-12',
                '36.369.882/0001-04',
                '32.882.042/0001-90',
                '86.244.514/0001-08'
            ].forEach(el => {
                expect(result(el)).to.be.ok();
            });
        });
        it('should be invalid', () => {
            let result = validate(util.isCnpj);
            [
                '42.131.177/0020-52',
                '82.235.505/0101-41',
                '81.628.348/0101-62',
                '70.346.734/0031-88',
                '77.700.967/4001-52',
                '22.353.775/2001-16',
                '76.942.162/0001-96',
                '25.296.662/0001-86',
                '65.555.374/0001-51',
                '02.276.226/0001-20',
                '04.251.831/0001-28',
                '65.515.405/0001-40',
                '01.237.116/0001-97',
                '76.977.387/0001-44',
                '63.123.491/0001-10',
                '35.368.882/0001-02',
                '31.872.042/0001-88',
                '85.144.514/0001-06'
            ].forEach(el => {
                expect(result(el)).to.not.be.ok();
            });
        });
    });
});
