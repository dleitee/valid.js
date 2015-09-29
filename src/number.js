import {_isNumber} from './lib/number'

export const number = {
    maxNumber: (maxValue) => (value) => _isNumber(value)?value <= maxValue: false,
    minNumber: (minValue) => (value) => _isNumber(value)?value >= minValue: false,
    between: (minValue, maxValue) => (value) => _isNumber(value)? value <= maxValue && value >= minValue: false,
    isNumber: (value) => _isNumber(value)
}
