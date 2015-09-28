'use strict'

var reduce = require('./dist/lib/reduce.js').reduce;
var validate = require('./dist/validate').validate;
var string = require('./dist/validate').string;

var functions = ['22', string.hasString, string.minLength(0), string.maxLength(2)]
var result = validate.apply(null, functions);
console.log(result);

var add = function(a,b){
    return a*b;
}
var array = [1,2,3,4,5]
console.log(reduce(add, 1, array))

