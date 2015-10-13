import {isNil} from './lib/isnil.js'
import {_isArray} from './lib/array.js'
import {_isInteger} from './lib/integer.js'
import {_isNumber} from './lib/number.js'
import {_isObject} from './lib/object.js'
import {_isString} from './lib/string.js'
import {string} from './string.js'

/*
 * Checks for data
 * @params value
 * @return boolean
 */
function isRequired(value) {
  if(isNil(value))
    return false

  if(_isArray(value))
    return value.length > 0

  if(_isInteger(value))
    return !!value

  if(_isNumber(value))
    return value > 0

  if(_isObject(value))
    return Object.keys(value).length > 0

  if(_isString(value))
    return value.length > 0

  return !!value
}

/*
 * Checks for email
 * @params email
 * @return boolean
 */
function isEmail(email) {
  return string.regex(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)(email)
}

/*
 * Checks for cep
 * @params cep
 * @return boolean
 */
function isCep(cep) {
  return string.regex(/^[0-9]{5}-[0-9]{3}$/)(cep)
}

/*
 * Export constant util
 */
export const util = {
    isRequired: isRequired,
    isEmail: isEmail,
    isCep: isCep
}

