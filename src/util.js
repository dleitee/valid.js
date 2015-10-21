import {isNil} from './lib/isnil.js'
import {_isArray} from './lib/array.js'
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
  if (isNil(value)) {
    return false
  }

  if (_isArray(value)) {
    return value.length > 0
  }

  if (_isNumber(value)) {
    return value > 0
  }

  if (_isObject(value)) {
    return Object.keys(value).length > 0
  }

  if (_isString(value)) {
    return value.length > 0
  }

  return Boolean(value)
}

/*
 * Checks for email
 * @params email
 * @return boolean
 */
function isEmail(email) {
  var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]'
  var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]'
  var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+'
  var sQuotedPair = '\\x5c[\\x00-\\x7f]'
  var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d'
  var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22'
  var sDomainRef = sAtom
  var sSubDomain = '(' + sDomainRef + '|' + sDomainLiteral + ')'
  var sWord = '(' + sAtom + '|' + sQuotedString + ')'
  var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*'
  var sLocalPart = sWord + '(\\x2e' + sWord + ')*'
  var sAddrSpec = sLocalPart + '\\x40' + sDomain
  var sValidEmail = '^' + sAddrSpec + '$'
  return string.regex(sValidEmail)(email)
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

