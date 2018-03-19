import {_isString} from './lib/string';
import {_isFile} from './lib/file';
import {_isNumber} from './lib/number';

/*
 * Check file extension 
 * @params exts
 * @params value
 * @return boolean
 */

const extensionFile = exts => {
    return (value=>{
        value = _isString(value) ? value: (
            _isFile(value) ? value.name : false   
        );
        let ext = (value===false) ? false: value.substring(value.lastIndexOf('.') + 1);
        return (ext===false ? false :exts.indexOf(ext)>=0);
    });
};

/*
 * Check size of file in megabytes
 * @params maxSizeFile
 * @params file
 * @return boolean
 */

const maxSizeFile = (maxSizeFileValue = Number.MAX_VALUE) => {
    return (file=>{
        if(_isNumber(maxSizeFileValue) && _isFile(file))
            return ( (file.size/1024) <= maxSizeFileValue ); 
    });
};

/*
 * Export constant file
 */
export const file = {
    extensionFile:extensionFile,
    maxSizeFile:maxSizeFile
};