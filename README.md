<p align="center">
    <img src="https://user-images.githubusercontent.com/4838076/28783446-c16cb57c-75e6-11e7-8a38-882954701265.png">
</p>

[![Build Status](https://travis-ci.org/dleitee/valid.js.svg?branch=master)](https://travis-ci.org/dleitee/valid.js)
[![Coverage Status](https://coveralls.io/repos/github/dleitee/valid.js/badge.svg?branch=master)](https://coveralls.io/github/dleitee/valid.js?branch=master)
[![Code Climate](https://codeclimate.com/github/dleitee/valid.js/badges/gpa.svg)](https://codeclimate.com/github/dleitee/valid.js)

A library for data validation.

## Install

ValidateJS is available on npm:
```
npm install valid.js --save
```

or bower:
```
bower install valid.js
```

## Usage

### With ES6/import

```javascript
import {validate, string, util, isValid} from 'valid.js'

let testIsValid = validate(string.maxLength(15), util.isRequired)
let result = testIsValid('Test ValidateJS')
// result => true

// or using the 'isValid' shorthand method
let result = isValid('Test ValidateJS', [string.maxLength(15), util.isRequired])
// result => true
```

### With require

```javascript
var validatejs = require('valid.js')
var validate = validatejs.validate,
    isValid = validatejs.isValid,
    string = validatejs.string,
    util = validatejs.util

var testIsValid = validate(string.maxLength(15), util.isRequired)
var result = testIsValid('Test ValidateJS')
// result => true

// or using the 'isValid' shorthand method
var result = isValid('Test ValidateJS', [string.maxLength(15), util.isRequired])
// result => true
```

### With Browser

```html
<script src="./bower_components/valid.js/dist/validate.js"></script>
```

```javascript
var validate = validate.validate
var string = validate.string
var util = validate.util

var testIsValid = validate(string.maxLength(15), util.isRequired)
var result = testIsValid('Test ValidateJS')
// result => true
```
OR
```javascript
var validate = window.validate.validate
var string = window.validate.string
var util = window.validate.util

var testIsValid = validate(string.maxLength(15), util.isRequired)
var result = testIsValid('Test ValidateJS')
// result => true
```
OR
```javascript
var isValid = window.validate.isValid
var string = window.validate.string
var util = window.validate.util

var result = isValid('Test ValidateJS', [string.maxLength(15), util.isRequired])
// result => true
```

Also available for [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)

# Validation Functions

- [x] [String](https://github.com/dleitee/valid.js/blob/master/docs/string.md)
    - [x] isString
    - [x] minLength(min)
    - [x] maxLength(max)
    - [x] length(min, max)
    - [x] regex(reg)
- [x] [Number](https://github.com/dleitee/valid.js/blob/master/docs/number.md)
    - [x] isNumber
    - [x] minNumber
    - [x] maxNumber
    - [x] between
- [x] [Date](https://github.com/dleitee/valid.js/blob/master/docs/date.md)
    - [x] isDate
    - [x] minDate(min)
    - [x] maxDate(max)
    - [x] between(min, max)
- [x] [Bool](https://github.com/dleitee/valid.js/blob/master/docs/bool.md)
    - [x] isTrue
    - [x] isFalse
- [x] [Util](https://github.com/dleitee/valid.js/blob/master/docs/util.md)
    - [x] isRequired
    - [x] isEmail
    - [x] isCep
    - [x] isUrl
    - [x] isHexColor
    - [x] isCpf
    - [x] isCnpj
- [x] [Credit Card](https://github.com/dleitee/valid.js/blob/master/docs/creditCard.md)
    - [x] isVisa
    - [x] isElo
    - [x] isHipercard
    - [x] isMasterCard
    - [x] isDiners
    - [x] isAmex
    - [x] isCreditCard

# Contributing

Send us a Pull Request! Here is how:

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Stage your changes: git add .
3. Commit your changes: git commit -m 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request

# LICENSE
The MIT License (MIT)

Copyright (c) 2015 Daniel Leite de Oliveira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

