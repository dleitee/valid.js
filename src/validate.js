import {isNil} from './lib/isnil.js';
import {_isArray} from './lib/array.js';
import {reduce} from './lib/reduce.js';

export * from './string';
export * from './util';
export * from './boolean';
export * from './number';
export * from './date';
export * from './creditCard';
export * from './ip';

export const validate =
    (...fn) =>
        value => {
            if (isNil(value)) {
                return false;
            }

            return reduce((acc, x) => {
                if (isNil(x)) {
                    throw new Error('The function for validation is null or undefined.');
                } else {
                    return acc && x(value);
                }
            }, true, fn);
    };

export const isValid = (v, r = []) => (validate(...(_isArray(r) ? r : [r]))(v));
