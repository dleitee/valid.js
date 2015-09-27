import R from 'ramda'
export * from './string'

export const validate = (value, ...fn) => !R.isNil(value) ? R.reduce((acc, x) => acc && x(value), true, fn): false
