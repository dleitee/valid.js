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

let isvalid = validate(date.maxDate(new Date(2016, 0, 1)))
let result = isvalid(new Date(2015, 9, 24))
// result => true
let resultFalse = isvalid(new Date(2016, 1, 1))
// resultFalse => false
```

## minDate(min)

Validates that 'date' is greater than or equal to (>=) the value

#### Usage

```es6
import {validate, date} from 'valid.js'

let isvalid = validate(date.minDate(new Date(2015, 0, 1)))
let result = isvalid(new Date(2015, 9, 24))
// result => true
let resultFalse = isvalid(new Date(2014, 10, 1))
// resultFalse => false
```

## between(min, max)

Validates if date is within the range

#### Usage

```es6
import {validate, date} from 'valid.js'

let min = new Date(2015, 0, 1)
let max = new Date(2016, 0, 1)
let isvalid = validate(date.between(min, max))
let result = isvalid(new Date(2015, 9, 24))
// result => true
let resultFalse = isvalid(new Date(2014, 5, 1))
// resultFalse => false
```

.
