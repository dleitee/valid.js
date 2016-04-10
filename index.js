
var validatejs = require('./dist/validate')
var validate = validatejs.validate
var string = validatejs.string
var util = validatejs.util

var isValid = validatejs.isValid

console.time('test')

var isvalid = validate(string.maxLength(15), util.isRequired)
var result1 = isvalid('Test ValidateJS')
console.log(result1)

var result2 = isValid('Test ValidateJS', [string.minLength(5), string.maxLength(15), util.isRequired])
console.log(result2)

var resultSingleRule = isValid('Test ValidateJS Big String', string.maxLength(15))
console.log(resultSingleRule)

console.timeEnd('test')
