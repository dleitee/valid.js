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

## minLength(value = Number.MIN_VALUE)

Validates the size of the 'string' is greater than or equal to (>=) the value

#### Usage
```es6
import {validate, string} from 'validate'

let isvalid = validate(string.minLength(15))
let result = isvalid('Test ValidateJS')
// result => true
let resultFalse = isvalid('TestValidateJS')
// resultFalse => false
```

## maxLength(value = Number.MAX_VALUE)

Validates the size of the 'string' is less than or equal to (<=) the value

#### Usage
```es6
import {validate, string} from 'validate'

let isvalid = validate(string.maxLength(15))
let result = isvalid('Test ValidateJS')
// result => true
let resultFalse = isvalid('Test ValidateJS Brazil')
// resultFalse => false
```

## lenght(minValue = Number.MIN_VALUE, maxValue = Number.MAX_VALUE)

Validates that the length of the string is within the range

#### Usage

```es6
import {validate, string} from 'validate'

let isvalid = validate(string.length(10, 15))
let result = isvalid('Test ValidateJS')
// result => true
let resultFalse = isvalid('Test ValidateJS Brazil')
// resultFalse => false
```

## regex(expression, lastIndex)

Validate [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

#### Usage

```es6
import {validate, string} from 'validate'

let isvalid = validate(string.regex(/a/))
let result = isvalid('Test ValidateJS')
// result => true
let resultFalse = isvalid('Test VlidteJS Brzil')
// resultFalse => false
```

.
