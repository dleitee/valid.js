import {isNil} from './lib/isnil.js'
import {_isString} from './lib/string'

const isString = (string) => _isString(string)

const minLength =
        (value) =>
          (string) => {
            if(isNil(value))
              throw new Error('The value for minLength is null or undefined.')
            else
              return _isString(string)?string.length >= value: false
          }

const maxLength =
        (value) =>
          (string) => {
            if(isNil(value))
              throw new Error('The value for maxLength is null or undefined.')
            else
              return _isString(string)?string.length <= value: false
          }


export const string = {
    isString: isString,
    minLength: minLength,
    maxLength: maxLength
}





