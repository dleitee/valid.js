(()=>{
    'use strict';
module.exports = {
    isString: (value) => Object.prototype.toString.call(value) === '[object String]'
}

}());
