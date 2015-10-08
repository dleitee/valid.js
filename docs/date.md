# Dates

```es6
import {date} from 'valid.js'
```

## isDate

Checks for a 'Date'

#### Usage
```es6
import {validate, date} from 'valid.js'

let isvalid = validate(date.isDate)
let result = isvalid(new Date())
// result => true
let resultFalse = isvalid('A')
// resultFalse => false
```


## maxDate(maxDate)

Validates that 'date' is less than or equal to (<=) the value

#### Usage
```es6
import {validate, date} from 'valid.js'

let isvalid = validate(date.maxNumber(15))
let result = isvalid(15)
// result => true
let resultFalse = isvalid(16)
// resultFalse => false
```

## minDate(min)

Validates that 'date' is greater than or equal to (>=) the value

#### Usage

```es6
import {validate, date} from 'valid.js'

let isvalid = validate(date.minNumber(15))
let result = isvalid(15)
// result => true
let resultFalse = isvalid(14)
// resultFalse => false
```

## between(min, max)

Validates if date is within the range

#### Usage

```es6
import {validate, date} from 'valid.js'

let isvalid = validate(date.between(10, 15))
let result = isvalid(13)
// result => true
let resultFalse = isvalid(9)
// resultFalse => false
```

.
