"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _libString=require("./lib/string"),string={hasString:function(n){return _libString._isString(n)},minLength:function(n){return function(t){return _libString._isString(t)?t.length>=n:!1}},maxLength:function(n){return function(t){return _libString._isString(t)?t.length<=n:!1}}};exports.string=string;