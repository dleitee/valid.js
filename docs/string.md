# String

```es6
import {string} from 'validate'
```

## isString

Checks for a 'String'

#### Usage

```es6
import {validate, string} from 'validate'

let isvalid = validate(string.isString)
let result = isvalid('Test ValidateJS')
// result => true
```

## minLength(value)

Validates the size of the 'string' is less than or equal to (<=) the value

#### Usage
```es6
import {validate, string} from 'validate'

let isvalid = validate(string.minLength(15)
let result = isvalid('Test ValidateJS')
// result => true
let resultFalse = isvalid('TestValidateJS')
// resultFalse => true
```

## maxLength(value)

Validates the size of the 'string' is greater than or equal to (> =) the value

#### Usage
```es6
import {validate, string} from 'validate'

let isvalid = validate(string.maxLength(15)
let result = isvalid('Test ValidateJS')
// result => true
let resultFalse = isvalid('Test ValidateJS Brazil')
// resultFalse => true
```
