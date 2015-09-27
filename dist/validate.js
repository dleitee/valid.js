'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _string = require('./string');

_defaults(exports, _interopExportWildcard(_string, _defaults));

var validate = function validate(value) {
  for (var _len = arguments.length, fn = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fn[_key - 1] = arguments[_key];
  }

  return !_ramda2['default'].isNil(value) ? _ramda2['default'].reduce(function (acc, x) {
    return acc && x(value);
  }, true, fn) : false;
};
exports.validate = validate;