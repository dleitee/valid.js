'use strict'
var validate = require('./dist/validate').validate;
var string = require('./dist/validate').string;

var functions = ['22', string.hasString, string.minLength(0), string.maxLength(2)]
var result = validate.apply(null, functions);
console.log(result);
