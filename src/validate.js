import R from 'ramda'
export * from './string'

export const validate = (value, ...fn) => value != null && value != undefined ? R.reduce((acc, x) => acc && x(value), true, fn): false
