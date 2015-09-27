import string from './lib/string'

(()=>{
    'use strict';
module.exports = {
    hasString: (string) => string.isString(string),
    minLength: (value) => (string) => string.isString(string)?string.length >= value: false,
    maxLength: (value) => (string) => string.isString(string)?string.length <= value: false
}
}());






