# Util

```es6
import {util} from 'valid.js'
```

## isRequired

Checks for data

#### Usage
```es6
import {validate, util} from 'valid.js'

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
import {validate, util} from 'valid.js'

let isvalid = validate(util.isEmail)
let result = isvalid('email@gmail.com')
// result => true
let resultFalse = isvalid('emailgmail.com')
// resultFalse => false
```

## isCep

Checks for cep

#### Usage
```es6
import {validate, util} from 'valid.js'

let isvalid = validate(util.isCep)
let result = isvalid('88075-290')
// result => true
let resultFalse = isvalid('88075290')
// resultFalse => false
```

## isURL

Checks for url

#### Usage
```es6
import {validate, util} from 'valid.js'

let isvalid = validate(util.isURL)
let result = isvalid('https://github.com')
// result => true
let resultFalse = isvalid('http://.google.com')
// resultFalse => false
```

## isHexColor

Checks for hex color. Supports both standard and shorthand

#### Usage
```es6
import {validate, util} from 'valid.js'

let isvalid = validate(util.isHexColor)
let result = isvalid('#1CE')
// result => true
let result = isvalid('#c0ffee')
// result => true
let resultFalse = isvalid('ff00gg')
// resultFalse => false
```

## isCpf

Checks for valid CPF number

#### Usage
```es6
import {validate, util} from 'valid.js'

let isvalid = validate(util.isCpf)
let result = isvalid('948.155.461-93')
// result => true
let result = isvalid('94815546193')
// result => true
let result = isvalid('948155.46193')
// result => true
let result = isvalid('948.155.461-94')
// result => false
```

## isCnpj

Checks for valid CNPJ number

#### Usage
```es6
import {validate, util} from 'valid.js'

let isvalid = validate(util.isCnpj)
let result = isvalid('43.132.546/0001-09')
// result => true
let result = isvalid('43132546000109')
// result => true
let result = isvalid('43132546/000109')
// result => true
let result = isvalid('43.132.546/0001-10')
// result => false
```
