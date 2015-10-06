import {isNil} from './lib/isnil.js'
import {_isString} from './lib/string'

/*
 * Checks for a 'String'
 * @param string - value for check
 * @return boolean
 */
const isString = (string) => _isString(string)

/*
 * Validates the size of the 'string' is less than or equal to (<=) the value
 * @param minLength
 * @param string - value for check
 * @return boolean
 */
const minLength =
        (minLength) =>
          (string) => {
            if(isNil(minLength))
              throw new Error('The value for minLength is null or undefined.')
            else
              return _isString(string)?string.length >= minLength: false
          }

/*
 * Validates the size of the 'string' is greater than or equal to (> =) the value
 * @param maxLength
 * @param string - value for check
 * @return boolean
 */
const maxLength =
        (maxLength) =>
          (string) => {
            if(isNil(maxLength))
              throw new Error('The value for maxLength is null or undefined.')
            else
              return _isString(string)?string.length <= maxLength: false
          }


export const string = {
    isString: isString,
    minLength: minLength,
    maxLength: maxLength
}





