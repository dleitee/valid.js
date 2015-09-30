
//import{isNil, reduce} from 'ramda'
import {isNil} from './lib/isnil.js'
import {reduce} from './lib/reduce.js'

export * from './string'
export * from './util'
export * from './boolean'


export const validate =
  (...fn) =>
    (value) => {
      if(isNil(value))
        return false
      else
        return reduce((acc, x) => {
          if(isNil(x))
            throw new Error('The function for validation is null or undefined.')
          else
            return acc && x(value)
        }, true, fn)
    }



//export function mymodule() {}

