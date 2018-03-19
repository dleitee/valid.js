# Files

```es6
import {file} from 'valid.js'
```

## extensionFile(arrayFileExtensions)(file)

Validates that 'fileExtension' belongs to a specific set of extensions

#### Usage

```es6
import {validate, file} from 'valid.js'

//fileValue type object Object or object File

let fileValue = document.getElementById("file").files[0] //<input type="file" id="file"> selected a image .jpg
let isvalid   = validate(file.extensionFile(["jpg","png","pdf"]))
let result    = isvalid(fileValue)
// result => true

fileValue = document.getElementById("file").files[0] //<input type="file" id="file"> selected a file .odt
let resultFalse = isvalid(fileValue)
// resultFalse => false
```

## maxSizeFile(maxValue)(file)

Validates the size of the 'file' is less than or equal to (<=) the value

#### Usage
```es6
import {validate, file} from 'valid.js'

let fileValue = document.getElementById("file").files[0] //<input type="file" id="file"> selected a file of 1024 bytes
let isvalid = validate(file.maxSizeFile(1)) //value in Kilobyte
let result = isvalid(fileValue)
// result => true

fileValue = document.getElementById("file").files[0] //<input type="file" id="file"> selected a file of 1025 bytes
let resultFalse = isvalid(1)
// resultFalse => false
```

.