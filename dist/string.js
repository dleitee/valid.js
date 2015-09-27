'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _libString = require('./lib/string');

var string = {
    hasString: function hasString(string) {
        return (0, _libString._isString)(string);
    },
    minLength: function minLength(value) {
        return function (string) {
            return (0, _libString._isString)(string) ? string.length >= value : false;
        };
    },
    maxLength: function maxLength(value) {
        return function (string) {
            return (0, _libString._isString)(string) ? string.length <= value : false;
        };
    }
};
exports.string = string;