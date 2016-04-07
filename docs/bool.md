# Boolean

```es6
import {bool} from 'valid.js'
```

## isTrue

Checks for true

#### Usage
```es6
import {validate, bool} from 'valid.js'

let isvalid = validate(bool.isTrue)
let result = isvalid(true)
// result => true
let resultFalse = isvalid(false)
// resultFalse => false
```

## isFalse

Checks for false

#### Usage
```es6
import {validate, bool} from 'valid.js'

let isvalid = validate(bool.isFalse)
let result = isvalid(false)
// result => true
let resultFalse = isvalid(true)
// resultFalse => false
```

.
