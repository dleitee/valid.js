import {_isDate} from './lib/date'

/*
 * Checks for a 'date'
 * @param date
 * @return boolean
 */
function isDate(date) {
  return _isDate(date)
}

/*
 * Validates that 'date' is less than or equal to (<=) the value
 * @param max
 * @return boolean
 */
function maxDate(max = new Date(3000, 1, 1)) {
  return value => _isDate(value) && value <= max
}

/*
 * Validates that 'date' is greater than or equal to (>=) the value
 * @param min
 * @return boolean
 */
function minDate(min = new Date(1900, 1, 1)) {
  return value => _isDate(value) && value >= min
}

/*
 * Validates if date is within the range
 * @param min
 * @param max
 * @return boolean
 */
function between(min = new Date(1900, 1, 1), max = new Date(3000, 1, 1)) {
  return value => this.minDate(min)(value) &&
                        this.maxDate(max)(value)
}

/*
 * Export constant date
 */
export const date = {
  maxDate: maxDate,
  minDate: minDate,
  between: between,
  isDate: isDate
}
