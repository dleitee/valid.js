export const _isFile = value => (Object.prototype.toString.call(value) === '[object File]') || (Object.prototype.toString.call(value) === '[object Object]') && (value.size!=null && value.name!=null);