# validate.js
A simple library for data validation.

## Install

ValidateJS is available on npm:
```
npm install validatejs --save
```

or bower: 
```
bower install validatejs
```

## Usage

### With ES6/import

```javascript
import {validate, string, util} from '../src/validate'

let isvalid = validate(string.maxLength(15), util.required)
let result = isvalid('Test ValidateJS')
// result => true
```

### With require

```javascript
var validatejs = require('../dist/validate')
var validate = validatejs.validate,
    string = validatejs.string,
    util = validatejs.util

var isvalid = validate(string.maxLength(15), util.required)
var result = isvalid('Test ValidateJS')
// result => true
```


## Example

```javascript
var validate = require('./dist/validate.js').validate;
var string = require('./dist/validate.js').string;

var result = validate('12', string.hasString,
                            string.minLength(0),
                            string.maxLength(2));
// result = true

var result2 = validate('123', string.hasString,
                                string.minLength(0),
                                string.maxLength(2));
// result2 = false
```
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

