import {_isNumber} from './lib/number';

/*
 * Checks for a 'Number'
 * @param number
 * @return boolean
 */
const isNumber = number => _isNumber(number);

/*
 * Validates that 'number' is less than or equal to (<=) the value
 * @param maxValue
 * @return boolean
 */
const maxNumber = (maxValue = Number.MAX_VALUE) => value => _isNumber(value) && value <= maxValue;

/*
 * Validates that 'number' is greater than or equal to (>=) the value
 * @param minValue
 * @return boolean
 */
const minNumber = (minValue = Number.MIN_VALUE) => value => _isNumber(value) && value >= minValue;

/*
 * Validates if number is within the range
 * @param minValue
 * @param maxValue
 * @return boolean
 */
const between = (minValue = Number.MIN_VALUE, maxValue = Number.MAX_VALUE) =>
    value => minNumber(minValue)(value) && maxNumber(maxValue)(value);

/*
 * Export constant number
 */
export const number = {
    maxNumber: maxNumber,
    minNumber: minNumber,
    between: between,
    isNumber: isNumber
};
