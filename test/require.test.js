import expect from 'expect.js';

var validatejs = require('../dist/validate');
var validate = validatejs.validate;
var util = validatejs.util;

describe('Usage with require', () => {
    describe('#require', () => {
        it('should be true when value is true', () => {
            let result = validate(util.isRequired);
            expect(result(true)).to.be.ok();
        });
    });
});
