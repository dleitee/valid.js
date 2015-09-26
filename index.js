require("babel-core").transform("code", []);
var R = require("ramda")

reduce = R.reduce

var text = 'aabcd'

var length = (string) => reduce((acc, x) => x==='d'?acc+1:acc, 0, string)


console.time('functional');
console.log(length(text))
console.timeEnd('functional');

console.time('non functional');
console.log(text.length)
console.timeEnd('non functional');
