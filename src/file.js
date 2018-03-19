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
        if(value===false) return false;
        let ext = value.substring(value.lastIndexOf('.') + 1);
        return ((exts.indexOf(ext)>=0) ? true: false);
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
        if(!_isNumber(maxSizeFileValue)){
            return false;
        }
        if(_isFile(file)){
            return ((file.size/1024) > maxSizeFileValue) ? false:true; 
        }
        return false;
    });
};

/*
 * Export constant file
 */
export const file = {
    extensionFile:extensionFile,
    maxSizeFile:maxSizeFile
};