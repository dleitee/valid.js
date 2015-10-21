
var validatejs = require('./dist/validate')
var validate = validatejs.validate
var string = validatejs.string
var util = validatejs.util

var isvalid = validate(string.maxLength(15), util.isRequired)
var result = isvalid('Test ValidateJS')
console.log(result)
