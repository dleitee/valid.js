import expect from 'expect.js';
import {validate, util} from '../dist/validate';

describe('Usage with es6', () => {
    describe('#es6', () => {
        it('should be true when value is true', () => {
            let result = validate(util.isRequired);
            expect(result(true)).to.be.ok();
        });
    });
});
