'use strict'
var validate = require('./dist/validate.js').validate;
var string = require('./dist/validate.js').string;


result = validate('', string.minLength(0), string.maxLength(2));
console.log(result);
//console.log(v.string.hasString(''));
