
var validatejs = require('./dist/validate')
var validate = validatejs.validate
var string = validatejs.string
var util = validatejs.util

var isValid = validatejs.isValid

console.time('test')

var result = isValid('Test ValidateJS', [string.minLength(5), string.maxLength(15), util.isRequired]);
console.log(result)

var resultSingleRule = isValid('Test ValidateJS Big String', string.maxLength(15));
console.log(resultSingleRule)

console.timeEnd('test')
