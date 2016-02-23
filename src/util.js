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

/**
 * Check for URL
 *
 * Copyright (c) 2010-2013 Diego Perini (http://www.iport.it), MIT licensed
 * https://gist.github.com/dperini/729294
 * see also https://mathiasbynens.be/demo/url-regex
 *
 * @params url
 * @return boolean
 */
function isURL(url) {
  const regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
  return string.regex(regex)(url)
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
 * Checks for hex color
 * @params color
 * @return boolean
 */
function isHexColor(color) {
  return string.regex(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)(color)
}

/*
 * Validate CPF string with the following format 000.000.000-00
 * Dots and dash separators are optional
 * @param string
 * @return boolean
 */
function isCpf(cpfNumber) {
  var cpfRegex = /^(\d{3}[\.]?\d{3}[\.]?\d{3}[-]?\d{2})$/
  if (cpfRegex.test(cpfNumber)) {
    var cpf = cpfNumber.replace(/\.|-/g, '')
    if (cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999') {
      return false
    }

    var final
    var sum = 0
    for (var firstIndex = 0; firstIndex < 9; firstIndex++) {
      sum += parseInt(cpf.charAt(firstIndex), 10) * (10 - firstIndex)
    }

    final = 11 - (sum % 11)

    if (final === 10 || final === 11) {
      final = 0
    }

    if (final !== parseInt(cpf.charAt(9), 10)) {
      return false
    }

    sum = 0
    for (var secondIndex = 0; secondIndex < 10; secondIndex++) {
      sum += parseInt(cpf.charAt(secondIndex), 10) * (11 - secondIndex)
    }

    final = 11 - (sum % 11)

    if (final === 10 || final === 11) {
      final = 0
    }

    if (final !== parseInt(cpf.charAt(10), 10)) {
      return false
    }

    return true
  }
}

/*
 * Validate CPNJ string with the following format 00.000.000/0000-00
 * Dots, dash and slash separators are optional
 * @param string
 * @return boolean
 */
function isCnpj(cnpjNumber) {
  var cnpjRegex = /^(\d{2}[\.]?\d{3}[\.]?\d{3}[\/]?\d{4}[-]?\d{2})$/
  if (cnpjRegex.test(cnpjNumber)) {
    var cnpj = cnpjNumber.replace(/\.|-|\//g, '')
    return cnpj
  }
}

/*
 * Export constant util
 */
export const util = {
  isRequired: isRequired,
  isEmail: isEmail,
  isCep: isCep,
  isURL: isURL,
  isHexColor: isHexColor,
  isCpf: isCpf,
  isCnpj: isCnpj
}
