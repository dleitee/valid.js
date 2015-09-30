import {isNil} from './lib/isnil.js'
import {_isString} from './lib/string'

export const string = {
    hasString: (string) => _isString(string),
    minLength: (value) =>
                    (string) => {
                        if(isNil(value))
                            throw new Error('The value for minLength is null or undefined.')
                        else
                            return _isString(string)?string.length >= value: false
                    },
    maxLength: (value) => (string) => _isString(string)?string.length <= value: false
}






