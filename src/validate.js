import R from 'ramda'
import string from './string'

(()=>{
'use strict'
module.exports = {
    validate: (value, ...fn) => !R.isNil(value) ? R.reduce((acc, x) => acc && x(value), true, fn): false,
    string: string
}
}());
