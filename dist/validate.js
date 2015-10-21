!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.valid||(t.valid={})).js=e()}}(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!s&&a)return a(o,!0);if(u)return u(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[o].exports}for(var u="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){"use strict";function r(e){return 1==e}function i(e){return 0==e}Object.defineProperty(n,"__esModule",{value:!0});var u={isTrue:r,isFalse:i};n.bool=u},{}],2:[function(e,t,n){"use strict";function r(e){return s._isDate(e)}function i(){var e=arguments.length<=0||void 0===arguments[0]?new Date(3e3,1,1):arguments[0];return function(t){return s._isDate(t)&&e>=t}}function u(){var e=arguments.length<=0||void 0===arguments[0]?new Date(1900,1,1):arguments[0];return function(t){return s._isDate(t)&&t>=e}}function o(){var e=this,t=arguments.length<=0||void 0===arguments[0]?new Date(1900,1,1):arguments[0],n=arguments.length<=1||void 0===arguments[1]?new Date(3e3,1,1):arguments[1];return function(r){return e.minDate(t)(r)&&e.maxDate(n)(r)}}Object.defineProperty(n,"__esModule",{value:!0});var s=e("./lib/date"),a={maxDate:i,minDate:u,between:o,isDate:r};n.date=a},{"./lib/date":4}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};n._isArray=r},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return"[object Date]"===Object.prototype.toString.call(e)};n._isDate=r},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e<<0===e};n._isInteger=r},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return null==e};n.isNil=r},{}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return"[object Number]"===Object.prototype.toString.call(e)};n._isNumber=r},{}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return"[object Object]"===Object.prototype.toString.call(e)};n._isObject=r},{}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,t,n){var r=n[Symbol.iterator](),i=function(t,n){for(var r=!0;r;){var i=t,u=n;o=s=a=void 0,r=!1;var o=u.next(),s=o.value,a=o.done;if(a)return i;t=e(i,s),n=u,r=!0}};return i(t,r)};n.reduce=r},{}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return"[object String]"===Object.prototype.toString.call(e)};n._isString=r},{}],11:[function(e,t,n){"use strict";function r(e){return s._isNumber(e)}function i(){var e=arguments.length<=0||void 0===arguments[0]?Number.MAX_VALUE:arguments[0];return function(t){return s._isNumber(t)&&e>=t}}function u(){var e=arguments.length<=0||void 0===arguments[0]?Number.MIN_VALUE:arguments[0];return function(t){return s._isNumber(t)&&t>=e}}function o(){var e=this,t=arguments.length<=0||void 0===arguments[0]?Number.MIN_VALUE:arguments[0],n=arguments.length<=1||void 0===arguments[1]?Number.MAX_VALUE:arguments[1];return function(r){return e.minNumber(t)(r)&&e.maxNumber(n)(r)}}Object.defineProperty(n,"__esModule",{value:!0});var s=e("./lib/number"),a={maxNumber:i,minNumber:u,between:o,isNumber:r};n.number=a},{"./lib/number":7}],12:[function(e,t,n){"use strict";function r(e){return l._isString(e)}function i(){var e=arguments.length<=0||void 0===arguments[0]?Number.MIN_VALUE:arguments[0];return function(t){return l._isString(t)&&t.length>=e}}function u(){var e=arguments.length<=0||void 0===arguments[0]?Number.MAX_VALUE:arguments[0];return a.isNil(e)&&(e=Number.MAX_VALUE),function(t){return l._isString(t)&&t.length<=e}}function o(){var e=this,t=arguments.length<=0||void 0===arguments[0]?Number.MIN_VALUE:arguments[0],n=arguments.length<=1||void 0===arguments[1]?Number.MAX_VALUE:arguments[1];return function(r){return e.minLength(t)(r)&&e.maxLength(n)(r)}}function s(e){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return function(n){var r=e;return r.lastIndex=t,r.test(n)}}Object.defineProperty(n,"__esModule",{value:!0});var a=e("./lib/isnil.js"),l=e("./lib/string"),c={isString:r,minLength:i,maxLength:u,length:o,regex:s};n.string=c},{"./lib/isnil.js":6,"./lib/string":10}],13:[function(e,t,n){"use strict";function r(e){return o.isNil(e)?!1:s._isArray(e)?e.length>0:a._isInteger(e)?!!e:l._isNumber(e)?e>0:c._isObject(e)?Object.keys(e).length>0:f._isString(e)?e.length>0:!!e}function i(e){return g.string.regex(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)(e)}function u(e){return g.string.regex(/^[0-9]{5}-[0-9]{3}$/)(e)}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./lib/isnil.js"),s=e("./lib/array.js"),a=e("./lib/integer.js"),l=e("./lib/number.js"),c=e("./lib/object.js"),f=e("./lib/string.js"),g=e("./string.js"),b={isRequired:r,isEmail:i,isCep:u};n.util=b},{"./lib/array.js":3,"./lib/integer.js":5,"./lib/isnil.js":6,"./lib/number.js":7,"./lib/object.js":8,"./lib/string.js":10,"./string.js":12}],14:[function(e,t,n){"use strict";function r(e,t){var n=t({},e);return delete n["default"],n}function i(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],u=Object.getOwnPropertyDescriptor(t,i);u&&u.configurable&&void 0===e[i]&&Object.defineProperty(e,i,u)}return e}Object.defineProperty(n,"__esModule",{value:!0});var u=e("./lib/isnil.js"),o=e("./lib/reduce.js"),s=e("./string");i(n,r(s,i));var a=e("./util");i(n,r(a,i));var l=e("./boolean");i(n,r(l,i));var c=e("./number");i(n,r(c,i));var f=e("./date");i(n,r(f,i));var g=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return u.isNil(e)?!1:o.reduce(function(t,n){if(u.isNil(n))throw new Error("The function for validation is null or undefined.");return t&&n(e)},!0,t)}};n.validate=g},{"./boolean":1,"./date":2,"./lib/isnil.js":6,"./lib/reduce.js":9,"./number":11,"./string":12,"./util":13}]},{},[14])(14)});