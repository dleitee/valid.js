//import{isNil, reduce} from 'ramda'
import {isNil} from './lib/isnil.js'
export * from './string'


export const validate = (value, ...fn) => !isNil(value) ? fn.reduce((acc, x) => acc && x(value), true): false

