export const _isArray = (value) => {
        (value != null &&
         value.length >= 0 &&
         Object.prototype.toString.call(value) === '[object Array]')
}

