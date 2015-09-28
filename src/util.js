import {isNil} from './lib/isnil.js'
export const util = {
    required: (value) => {
        if(isNil(value)){
            return false
        }else if(value.length > 0){
            return true
        }else {
            return false
        }
    }
}
