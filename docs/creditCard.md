# Credit Card

```es6
import {creditCard} from 'valid.js'
```

## isVisa

Checks for valid Visa&copy; credit card

#### Usage
```es6
import {creditCard} from 'valid.js'

let result = creditCard.isVisa(creditCard)
// result => true
let resultFalse = creditCard.isVisa(invalidVisaCreditCard)
// resultFalse => false
```


## isElo

Checks for valid Elo&copy; credit card

#### Usage
```es6
import {creditCard} from 'valid.js'

let result = creditCard.isElo(creditCard)
// result => true
let resultFalse = creditCard.isElo(invalidEloCreditCard)
// resultFalse => false
```


## isHipercard

Checks for valid Hipercard&copy; credit card

#### Usage
```es6
import {creditCard} from 'valid.js'

let result = creditCard.isHipercard(creditCard)
// result => true
let resultFalse = creditCard.isHipercard(invalidHipercardCreditCard)
// resultFalse => false


## isMasterCard

Checks for valid Mastercard&copy; credit card

#### Usage
```es6
import {creditCard} from 'valid.js'

let result = creditCard.isMasterCard(creditCard)
// result => true
let resultFalse = creditCard.isMasterCard(invalidMastercardCreditCard)
// resultFalse => false


## isDiners

Checks for valid Diners&copy; credit card

#### Usage
```es6
import {creditCard} from 'valid.js'

let result = creditCard.isDiners(creditCard)
// result => true
let resultFalse = creditCard.isDiners(invalidDinersCreditCard)
// resultFalse => false


## isAmex

Checks for valid American Express&copy; credit card

#### Usage
```es6
import {creditCard} from 'valid.js'

let result = creditCard.isAmex(creditCard)
// result => true
let resultFalse = creditCard.isAmex(invalidAmexCreditCard)
// resultFalse => false


## isCreditCard

Checks for valid credit card

#### Usage
```es6
import {creditCard} from 'valid.js'

let result = creditCard.isCreditCard(creditCard)
// result => true
let resultFalse = creditCard.isCreditCard(invalidCreditCard)
// resultFalse => false
