import {isNil} from './lib/isnil.js'
import {_isString} from './lib/string'

/*
 * Checks for a 'String'
 * @param string - value for check
 * @return boolean
 */
function isString(string) {
  return _isString(string)
}

/*
 * Validates the size of the 'string' is greater than or equal to (> =) the max
 * @param minLength
 * @param string - value for check
 * @return boolean
 */
function minLength(min = Number.MIN_VALUE) {
  return (string) => _isString(string) && string.length >= min
}

/*
 * Validates the size of the 'string' is less than or equal to (<=) the min
 * @param maxLength
 * @param string - value for check
 * @return boolean
 */
function maxLength(max = Number.MAX_VALUE) {
  if(isNil(max)) {
    max = Number.MAX_VALUE
  }
  return (string) => _isString(string) && string.length <= max
}

/*
 * Validates that the length of the string is within the range
 * @param min
 * @param max
 * @return boolean
 */
function length(min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
  return (string) => this.minLength(min)(string) && this.maxLength(max)(string)
}

/*
 * Validate regular expressions
 * @doc https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * @param expression
 * @param lastIndex
 * @return boolean
 */
function regex(expression){
  return (string) => {
    var reg = new RegExp(expression)
    return reg.test(string)
  }
}

/*
 * Export constant string
 */
export const string = {
  isString: isString,
  minLength: minLength,
  maxLength: maxLength,
  length: length,
  regex: regex
}
