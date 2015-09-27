# validate.js
A simple library for data validation.

## Example

```javascript
var validate = require('./dist/validate.js').validate;
var string = require('./dist/validate.js').string;

var result = validate('12', string.hasString,
                            string.minLength(0),
                            string.maxLength(2));
// result = true

var result2 = validate('123', string.hasString,
                                string.minLength(0),
                                string.maxLength(2));
// result2 = false
```
# LICENSE
MIT®
