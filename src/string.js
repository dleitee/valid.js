import {isNil} from './lib/isnil.js';
import {_isString} from './lib/string';

/*
 * Checks for a 'String'
 * @param string - value for check
 * @return boolean
 */
const isString = string => _isString(string);

/*
 * Validates the size of the 'string' is greater than or equal to (> =) the max
 * @param minLength
 * @param string - value for check
 * @return boolean
 */
const minLength = (min = Number.MIN_VALUE) => string => _isString(string) && string.length >= min;

/*
 * Validates the size of the 'string' is less than or equal to (<=) the min
 * @param maxLength
 * @param string - value for check
 * @return boolean
 */
const maxLength = (max = Number.MAX_VALUE) => {
    if (isNil(max)) {
        max = Number.MAX_VALUE;
    }
    return string => _isString(string) && string.length <= max;
};

/*
 * Validates that the length of the string is within the range
 * @param min
 * @param max
 * @return boolean
 */
const length = (min = Number.MIN_VALUE, max = Number.MAX_VALUE) =>
    string => minLength(min)(string) && maxLength(max)(string);

/*
 * Validate regular expressions
 * @doc https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * @param expression
 * @param lastIndex
 * @return boolean
 */
const regex = expression =>
    string => {
        let reg = new RegExp(expression);
        return reg.test(string);
    };

/*
 * Export constant string
 */
export const string = {
    isString: isString,
    minLength: minLength,
    maxLength: maxLength,
    length: length,
    regex: regex
};
