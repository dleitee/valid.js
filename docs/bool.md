# Boolean

```es6
import {bool} from 'validate'
```

## isTrue

Checks for true

#### Usage
```es6
import {validate, bool} from 'validate'

let isvalid = validate(number.isTrue)
let result = isvalid(true)
// result => true
let resultFalse = isvalid(false)
// resultFalse => false
```

## isFalse

Checks for false

#### Usage
```es6
import {validate, bool} from 'validate'

let isvalid = validate(number.isFalse)
let result = isvalid(false)
// result => true
let resultFalse = isvalid(true)
// resultFalse => false
```
