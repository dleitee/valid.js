
var validatejs = require('./dist/validate')
var validate = validatejs.validate,
    string = validatejs.string,
    util = validatejs.util

var isvalid = validate(string.maxLength(15), util.isRequired)
var result = isvalid('Test ValidateJS')
console.log(result)
