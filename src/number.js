import {_isNumber} from './lib/number'

/*
 * Checks for a 'Number'
 * @param number
 * @return boolean
 */
function isNumber(number) {
  return _isNumber(number)
}

/*
 * Validates that 'number' is less than or equal to (<=) the value
 * @param maxValue
 * @return boolean
 */
function maxNumber(maxValue = Number.MAX_VALUE) {
  return value => _isNumber(value) && value <= maxValue
}

/*
 * Validates that 'number' is greater than or equal to (>=) the value
 * @param minValue
 * @return boolean
 */
function minNumber(minValue = Number.MIN_VALUE) {
  return value => _isNumber(value) && value >= minValue
}

/*
 * Validates if number is within the range
 * @param minValue
 * @param maxValue
 * @return boolean
 */
function between(minValue = Number.MIN_VALUE, maxValue = Number.MAX_VALUE) {
  return value => this.minNumber(minValue)(value) &&
                        this.maxNumber(maxValue)(value)
}

/*
 * Export constant number
 */
export const number = {
  maxNumber: maxNumber,
  minNumber: minNumber,
  between: between,
  isNumber: isNumber
}
