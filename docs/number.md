# Numbers

```es6
import {number} from 'valid.js'
```

## isNumber

Checks for a 'Number'

#### Usage
```es6
import {validate, number} from 'valid.js'

let isvalid = validate(number.isNumber)
let result = isvalid(15)
// result => true
let resultFalse = isvalid('A')
// resultFalse => false
```


## maxNumber(maxValue)

Validates the size of the 'number' is less than or equal to (<=) the value

#### Usage
```es6
import {validate, number} from 'valid.js'

let isvalid = validate(number.maxNumber(15))
let result = isvalid(15)
// result => true
let resultFalse = isvalid(16)
// resultFalse => false
```

## minNumber(minValue)

Validates the size of the 'number' is greater than or equal to (>=) the value

#### Usage

```es6
import {validate, number} from 'valid.js'

let isvalid = validate(number.minNumber(15))
let result = isvalid(15)
// result => true
let resultFalse = isvalid(14)
// resultFalse => false
```

## between(minValue, maxValue)

Validates if number is within the range

#### Usage

```es6
import {validate, number} from 'valid.js'

let isvalid = validate(number.between(10, 15))
let result = isvalid(13)
// result => true
let resultFalse = isvalid(9)
// resultFalse => false
```

.
