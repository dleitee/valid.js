# Util

```es6
import {util} from 'validate'
```

## required

Checks for data

#### Usage
```es6
import {validate, util} from 'validate'

let isvalid = validate(util.required)
let result = isvalid(15)
// result => true
let resultFalse = isvalid(null)
// resultFalse => false
```

## isEmail

Checks for email

#### Usage
```es6
import {validate, util} from 'validate'

let isvalid = validate(util.isEmail)
let result = isvalid('email@gmail.com')
// result => true
let resultFalse = isvalid('emailgmail.com')
// resultFalse => false
```


.
