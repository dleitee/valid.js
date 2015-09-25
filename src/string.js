export const string = {
    isString: (string) => typeof string === 'string',
    minLength: (value) => (string) => typeof string === 'string'?string.length >= value: false,
    maxLength: (value) => (string) => typeof string === 'string'?string.length <= value: false
}
