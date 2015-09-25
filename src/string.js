import R from 'ramda'
import {_isString} from './lib/string'

export const string = {
    hasString: (string) => _isString(string),
    minLength: (value) => (string) => _isString(string)?string.length >= value: false,
    maxLength: (value) => (string) => _isString(string)?string.length <= value: false
}







