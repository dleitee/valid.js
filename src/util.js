import {isNil} from './lib/isnil.js'
import {_isArray} from './lib/array.js'
import {_isInteger} from './lib/integer.js'
import {_isNumber} from './lib/number.js'
import {_isObject} from './lib/object.js'
import {_isString} from './lib/string.js'

export const util = {
    required: (value) => {
      if(isNil(value))
          return false
      else
      if(_isArray(value))
        return value.length > 0
      else
      if(_isInteger(value))
          return !!value
      else
      if(_isNumber(value))
          return value > 0
      else
      if(_isObject(value))
          return Object.keys(value).length > 0
      else
      if(_isString(value))
          return value.length > 0
      else
        return !!value
    }
}

