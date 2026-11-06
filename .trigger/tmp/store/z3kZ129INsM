import {
  require_moment
} from "./chunk-74IFH7JE.mjs";
import {
  __commonJS,
  __esm,
  __export,
  __name,
  __require,
  __toCommonJS,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/underscore/modules/_setup.js
var VERSION, root, ArrayProto, ObjProto, SymbolProto, push, slice, toString, hasOwnProperty, supportsArrayBuffer, supportsDataView, nativeIsArray, nativeKeys, nativeCreate, nativeIsView, _isNaN, _isFinite, hasEnumBug, nonEnumerableProps, MAX_ARRAY_INDEX;
var init_setup = __esm({
  "node_modules/underscore/modules/_setup.js"() {
    init_esm();
    VERSION = "1.13.8";
    root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {};
    ArrayProto = Array.prototype;
    ObjProto = Object.prototype;
    SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
    push = ArrayProto.push;
    slice = ArrayProto.slice;
    toString = ObjProto.toString;
    hasOwnProperty = ObjProto.hasOwnProperty;
    supportsArrayBuffer = typeof ArrayBuffer !== "undefined";
    supportsDataView = typeof DataView !== "undefined";
    nativeIsArray = Array.isArray;
    nativeKeys = Object.keys;
    nativeCreate = Object.create;
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
    _isNaN = isNaN;
    _isFinite = isFinite;
    hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
    nonEnumerableProps = [
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString"
    ];
    MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  }
});

// node_modules/underscore/modules/restArguments.js
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0), rest2 = Array(length), index = 0;
    for (; index < length; index++) {
      rest2[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0:
        return func.call(this, rest2);
      case 1:
        return func.call(this, arguments[0], rest2);
      case 2:
        return func.call(this, arguments[0], arguments[1], rest2);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest2;
    return func.apply(this, args);
  };
}
var init_restArguments = __esm({
  "node_modules/underscore/modules/restArguments.js"() {
    init_esm();
    __name(restArguments, "restArguments");
  }
});

// node_modules/underscore/modules/isObject.js
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || type === "object" && !!obj;
}
var init_isObject = __esm({
  "node_modules/underscore/modules/isObject.js"() {
    init_esm();
    __name(isObject, "isObject");
  }
});

// node_modules/underscore/modules/isNull.js
function isNull(obj) {
  return obj === null;
}
var init_isNull = __esm({
  "node_modules/underscore/modules/isNull.js"() {
    init_esm();
    __name(isNull, "isNull");
  }
});

// node_modules/underscore/modules/isUndefined.js
function isUndefined(obj) {
  return obj === void 0;
}
var init_isUndefined = __esm({
  "node_modules/underscore/modules/isUndefined.js"() {
    init_esm();
    __name(isUndefined, "isUndefined");
  }
});

// node_modules/underscore/modules/isBoolean.js
function isBoolean(obj) {
  return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
}
var init_isBoolean = __esm({
  "node_modules/underscore/modules/isBoolean.js"() {
    init_esm();
    init_setup();
    __name(isBoolean, "isBoolean");
  }
});

// node_modules/underscore/modules/isElement.js
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}
var init_isElement = __esm({
  "node_modules/underscore/modules/isElement.js"() {
    init_esm();
    __name(isElement, "isElement");
  }
});

// node_modules/underscore/modules/_tagTester.js
function tagTester(name) {
  var tag = "[object " + name + "]";
  return function(obj) {
    return toString.call(obj) === tag;
  };
}
var init_tagTester = __esm({
  "node_modules/underscore/modules/_tagTester.js"() {
    init_esm();
    init_setup();
    __name(tagTester, "tagTester");
  }
});

// node_modules/underscore/modules/isString.js
var isString_default;
var init_isString = __esm({
  "node_modules/underscore/modules/isString.js"() {
    init_esm();
    init_tagTester();
    isString_default = tagTester("String");
  }
});

// node_modules/underscore/modules/isNumber.js
var isNumber_default;
var init_isNumber = __esm({
  "node_modules/underscore/modules/isNumber.js"() {
    init_esm();
    init_tagTester();
    isNumber_default = tagTester("Number");
  }
});

// node_modules/underscore/modules/isDate.js
var isDate_default;
var init_isDate = __esm({
  "node_modules/underscore/modules/isDate.js"() {
    init_esm();
    init_tagTester();
    isDate_default = tagTester("Date");
  }
});

// node_modules/underscore/modules/isRegExp.js
var isRegExp_default;
var init_isRegExp = __esm({
  "node_modules/underscore/modules/isRegExp.js"() {
    init_esm();
    init_tagTester();
    isRegExp_default = tagTester("RegExp");
  }
});

// node_modules/underscore/modules/isError.js
var isError_default;
var init_isError = __esm({
  "node_modules/underscore/modules/isError.js"() {
    init_esm();
    init_tagTester();
    isError_default = tagTester("Error");
  }
});

// node_modules/underscore/modules/isSymbol.js
var isSymbol_default;
var init_isSymbol = __esm({
  "node_modules/underscore/modules/isSymbol.js"() {
    init_esm();
    init_tagTester();
    isSymbol_default = tagTester("Symbol");
  }
});

// node_modules/underscore/modules/isArrayBuffer.js
var isArrayBuffer_default;
var init_isArrayBuffer = __esm({
  "node_modules/underscore/modules/isArrayBuffer.js"() {
    init_esm();
    init_tagTester();
    isArrayBuffer_default = tagTester("ArrayBuffer");
  }
});

// node_modules/underscore/modules/isFunction.js
var isFunction, nodelist, isFunction_default;
var init_isFunction = __esm({
  "node_modules/underscore/modules/isFunction.js"() {
    init_esm();
    init_tagTester();
    init_setup();
    isFunction = tagTester("Function");
    nodelist = root.document && root.document.childNodes;
    if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
      isFunction = /* @__PURE__ */ __name(function(obj) {
        return typeof obj == "function" || false;
      }, "isFunction");
    }
    isFunction_default = isFunction;
  }
});

// node_modules/underscore/modules/_hasObjectTag.js
var hasObjectTag_default;
var init_hasObjectTag = __esm({
  "node_modules/underscore/modules/_hasObjectTag.js"() {
    init_esm();
    init_tagTester();
    hasObjectTag_default = tagTester("Object");
  }
});

// node_modules/underscore/modules/_stringTagBug.js
var hasDataViewBug, isIE11;
var init_stringTagBug = __esm({
  "node_modules/underscore/modules/_stringTagBug.js"() {
    init_esm();
    init_setup();
    init_hasObjectTag();
    hasDataViewBug = supportsDataView && (!/\[native code\]/.test(String(DataView)) || hasObjectTag_default(new DataView(new ArrayBuffer(8))));
    isIE11 = typeof Map !== "undefined" && hasObjectTag_default(/* @__PURE__ */ new Map());
  }
});

// node_modules/underscore/modules/isDataView.js
function alternateIsDataView(obj) {
  return obj != null && isFunction_default(obj.getInt8) && isArrayBuffer_default(obj.buffer);
}
var isDataView, isDataView_default;
var init_isDataView = __esm({
  "node_modules/underscore/modules/isDataView.js"() {
    init_esm();
    init_tagTester();
    init_isFunction();
    init_isArrayBuffer();
    init_stringTagBug();
    isDataView = tagTester("DataView");
    __name(alternateIsDataView, "alternateIsDataView");
    isDataView_default = hasDataViewBug ? alternateIsDataView : isDataView;
  }
});

// node_modules/underscore/modules/isArray.js
var isArray_default;
var init_isArray = __esm({
  "node_modules/underscore/modules/isArray.js"() {
    init_esm();
    init_setup();
    init_tagTester();
    isArray_default = nativeIsArray || tagTester("Array");
  }
});

// node_modules/underscore/modules/_has.js
function has(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}
var init_has = __esm({
  "node_modules/underscore/modules/_has.js"() {
    init_esm();
    init_setup();
    __name(has, "has");
  }
});

// node_modules/underscore/modules/isArguments.js
var isArguments, isArguments_default;
var init_isArguments = __esm({
  "node_modules/underscore/modules/isArguments.js"() {
    init_esm();
    init_tagTester();
    init_has();
    isArguments = tagTester("Arguments");
    (function() {
      if (!isArguments(arguments)) {
        isArguments = /* @__PURE__ */ __name(function(obj) {
          return has(obj, "callee");
        }, "isArguments");
      }
    })();
    isArguments_default = isArguments;
  }
});

// node_modules/underscore/modules/isFinite.js
function isFinite2(obj) {
  return !isSymbol_default(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
}
var init_isFinite = __esm({
  "node_modules/underscore/modules/isFinite.js"() {
    init_esm();
    init_setup();
    init_isSymbol();
    __name(isFinite2, "isFinite");
  }
});

// node_modules/underscore/modules/isNaN.js
function isNaN2(obj) {
  return isNumber_default(obj) && _isNaN(obj);
}
var init_isNaN = __esm({
  "node_modules/underscore/modules/isNaN.js"() {
    init_esm();
    init_setup();
    init_isNumber();
    __name(isNaN2, "isNaN");
  }
});

// node_modules/underscore/modules/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var init_constant = __esm({
  "node_modules/underscore/modules/constant.js"() {
    init_esm();
    __name(constant, "constant");
  }
});

// node_modules/underscore/modules/_createSizePropertyCheck.js
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
  };
}
var init_createSizePropertyCheck = __esm({
  "node_modules/underscore/modules/_createSizePropertyCheck.js"() {
    init_esm();
    init_setup();
    __name(createSizePropertyCheck, "createSizePropertyCheck");
  }
});

// node_modules/underscore/modules/_shallowProperty.js
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}
var init_shallowProperty = __esm({
  "node_modules/underscore/modules/_shallowProperty.js"() {
    init_esm();
    __name(shallowProperty, "shallowProperty");
  }
});

// node_modules/underscore/modules/_getByteLength.js
var getByteLength_default;
var init_getByteLength = __esm({
  "node_modules/underscore/modules/_getByteLength.js"() {
    init_esm();
    init_shallowProperty();
    getByteLength_default = shallowProperty("byteLength");
  }
});

// node_modules/underscore/modules/_isBufferLike.js
var isBufferLike_default;
var init_isBufferLike = __esm({
  "node_modules/underscore/modules/_isBufferLike.js"() {
    init_esm();
    init_createSizePropertyCheck();
    init_getByteLength();
    isBufferLike_default = createSizePropertyCheck(getByteLength_default);
  }
});

// node_modules/underscore/modules/isTypedArray.js
function isTypedArray(obj) {
  return nativeIsView ? nativeIsView(obj) && !isDataView_default(obj) : isBufferLike_default(obj) && typedArrayPattern.test(toString.call(obj));
}
var typedArrayPattern, isTypedArray_default;
var init_isTypedArray = __esm({
  "node_modules/underscore/modules/isTypedArray.js"() {
    init_esm();
    init_setup();
    init_isDataView();
    init_constant();
    init_isBufferLike();
    typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
    __name(isTypedArray, "isTypedArray");
    isTypedArray_default = supportsArrayBuffer ? isTypedArray : constant(false);
  }
});

// node_modules/underscore/modules/_getLength.js
var getLength_default;
var init_getLength = __esm({
  "node_modules/underscore/modules/_getLength.js"() {
    init_esm();
    init_shallowProperty();
    getLength_default = shallowProperty("length");
  }
});

// node_modules/underscore/modules/_collectNonEnumProps.js
function emulatedSet(keys2) {
  var hash = {};
  for (var l = keys2.length, i = 0; i < l; ++i) hash[keys2[i]] = true;
  return {
    contains: /* @__PURE__ */ __name(function(key) {
      return hash[key] === true;
    }, "contains"),
    push: /* @__PURE__ */ __name(function(key) {
      hash[key] = true;
      return keys2.push(key);
    }, "push")
  };
}
function collectNonEnumProps(obj, keys2) {
  keys2 = emulatedSet(keys2);
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = isFunction_default(constructor) && constructor.prototype || ObjProto;
  var prop = "constructor";
  if (has(obj, prop) && !keys2.contains(prop)) keys2.push(prop);
  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys2.contains(prop)) {
      keys2.push(prop);
    }
  }
}
var init_collectNonEnumProps = __esm({
  "node_modules/underscore/modules/_collectNonEnumProps.js"() {
    init_esm();
    init_setup();
    init_isFunction();
    init_has();
    __name(emulatedSet, "emulatedSet");
    __name(collectNonEnumProps, "collectNonEnumProps");
  }
});

// node_modules/underscore/modules/keys.js
function keys(obj) {
  if (!isObject(obj)) return [];
  if (nativeKeys) return nativeKeys(obj);
  var keys2 = [];
  for (var key in obj) if (has(obj, key)) keys2.push(key);
  if (hasEnumBug) collectNonEnumProps(obj, keys2);
  return keys2;
}
var init_keys = __esm({
  "node_modules/underscore/modules/keys.js"() {
    init_esm();
    init_isObject();
    init_setup();
    init_has();
    init_collectNonEnumProps();
    __name(keys, "keys");
  }
});

// node_modules/underscore/modules/isEmpty.js
function isEmpty(obj) {
  if (obj == null) return true;
  var length = getLength_default(obj);
  if (typeof length == "number" && (isArray_default(obj) || isString_default(obj) || isArguments_default(obj))) return length === 0;
  return getLength_default(keys(obj)) === 0;
}
var init_isEmpty = __esm({
  "node_modules/underscore/modules/isEmpty.js"() {
    init_esm();
    init_getLength();
    init_isArray();
    init_isString();
    init_isArguments();
    init_keys();
    __name(isEmpty, "isEmpty");
  }
});

// node_modules/underscore/modules/isMatch.js
function isMatch(object2, attrs) {
  var _keys = keys(attrs), length = _keys.length;
  if (object2 == null) return !length;
  var obj = Object(object2);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}
var init_isMatch = __esm({
  "node_modules/underscore/modules/isMatch.js"() {
    init_esm();
    init_keys();
    __name(isMatch, "isMatch");
  }
});

// node_modules/underscore/modules/underscore.js
function _2(obj) {
  if (obj instanceof _2) return obj;
  if (!(this instanceof _2)) return new _2(obj);
  this._wrapped = obj;
}
var init_underscore = __esm({
  "node_modules/underscore/modules/underscore.js"() {
    init_esm();
    init_setup();
    __name(_2, "_");
    _2.VERSION = VERSION;
    _2.prototype.value = function() {
      return this._wrapped;
    };
    _2.prototype.valueOf = _2.prototype.toJSON = _2.prototype.value;
    _2.prototype.toString = function() {
      return String(this._wrapped);
    };
  }
});

// node_modules/underscore/modules/_toBufferView.js
function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    getByteLength_default(bufferSource)
  );
}
var init_toBufferView = __esm({
  "node_modules/underscore/modules/_toBufferView.js"() {
    init_esm();
    init_getByteLength();
    __name(toBufferView, "toBufferView");
  }
});

// node_modules/underscore/modules/isEqual.js
function isEqual(a, b) {
  var todo = [{ a, b }];
  var aStack = [], bStack = [];
  while (todo.length) {
    var frame = todo.pop();
    if (frame === true) {
      aStack.pop();
      bStack.pop();
      continue;
    }
    a = frame.a;
    b = frame.b;
    if (a === b) {
      if (a !== 0 || 1 / a === 1 / b) continue;
      return false;
    }
    if (a == null || b == null) return false;
    if (a !== a) {
      if (b !== b) continue;
      return false;
    }
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object") return false;
    if (a instanceof _2) a = a._wrapped;
    if (b instanceof _2) b = b._wrapped;
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    if (hasDataViewBug && className == "[object Object]" && isDataView_default(a)) {
      if (!isDataView_default(b)) return false;
      className = tagDataView;
    }
    switch (className) {
      // These types are compared by value.
      case "[object RegExp]":
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case "[object String]":
        if ("" + a === "" + b) continue;
        return false;
      case "[object Number]":
        todo.push({ a: +a, b: +b });
        continue;
      case "[object Date]":
      case "[object Boolean]":
        if (+a === +b) continue;
        return false;
      case "[object Symbol]":
        if (SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b)) continue;
        return false;
      case "[object ArrayBuffer]":
      case tagDataView:
        todo.push({ a: toBufferView(a), b: toBufferView(b) });
        continue;
    }
    var areArrays = className === "[object Array]";
    if (!areArrays && isTypedArray_default(a)) {
      var byteLength = getByteLength_default(a);
      if (byteLength !== getByteLength_default(b)) return false;
      if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) continue;
      areArrays = true;
    }
    if (!areArrays) {
      if (typeof a != "object" || typeof b != "object") return false;
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(isFunction_default(aCtor) && aCtor instanceof aCtor && isFunction_default(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
        return false;
      }
    }
    var length = aStack.length;
    while (length--) {
      if (aStack[length] === a) {
        if (bStack[length] === b) break;
        return false;
      }
    }
    if (length >= 0) continue;
    aStack.push(a);
    bStack.push(b);
    todo.push(true);
    if (areArrays) {
      length = a.length;
      if (length !== b.length) return false;
      while (length--) {
        todo.push({ a: a[length], b: b[length] });
      }
    } else {
      var _keys = keys(a), key;
      length = _keys.length;
      if (keys(b).length !== length) return false;
      while (length--) {
        key = _keys[length];
        if (!has(b, key)) return false;
        todo.push({ a: a[key], b: b[key] });
      }
    }
  }
  return true;
}
var tagDataView;
var init_isEqual = __esm({
  "node_modules/underscore/modules/isEqual.js"() {
    init_esm();
    init_underscore();
    init_setup();
    init_getByteLength();
    init_isTypedArray();
    init_isFunction();
    init_stringTagBug();
    init_isDataView();
    init_keys();
    init_has();
    init_toBufferView();
    tagDataView = "[object DataView]";
    __name(isEqual, "isEqual");
  }
});

// node_modules/underscore/modules/allKeys.js
function allKeys(obj) {
  if (!isObject(obj)) return [];
  var keys2 = [];
  for (var key in obj) keys2.push(key);
  if (hasEnumBug) collectNonEnumProps(obj, keys2);
  return keys2;
}
var init_allKeys = __esm({
  "node_modules/underscore/modules/allKeys.js"() {
    init_esm();
    init_isObject();
    init_setup();
    init_collectNonEnumProps();
    __name(allKeys, "allKeys");
  }
});

// node_modules/underscore/modules/_methodFingerprint.js
function ie11fingerprint(methods) {
  var length = getLength_default(methods);
  return function(obj) {
    if (obj == null) return false;
    var keys2 = allKeys(obj);
    if (getLength_default(keys2)) return false;
    for (var i = 0; i < length; i++) {
      if (!isFunction_default(obj[methods[i]])) return false;
    }
    return methods !== weakMapMethods || !isFunction_default(obj[forEachName]);
  };
}
var forEachName, hasName, commonInit, mapTail, mapMethods, weakMapMethods, setMethods;
var init_methodFingerprint = __esm({
  "node_modules/underscore/modules/_methodFingerprint.js"() {
    init_esm();
    init_getLength();
    init_isFunction();
    init_allKeys();
    __name(ie11fingerprint, "ie11fingerprint");
    forEachName = "forEach";
    hasName = "has";
    commonInit = ["clear", "delete"];
    mapTail = ["get", hasName, "set"];
    mapMethods = commonInit.concat(forEachName, mapTail);
    weakMapMethods = commonInit.concat(mapTail);
    setMethods = ["add"].concat(commonInit, forEachName, hasName);
  }
});

// node_modules/underscore/modules/isMap.js
var isMap_default;
var init_isMap = __esm({
  "node_modules/underscore/modules/isMap.js"() {
    init_esm();
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isMap_default = isIE11 ? ie11fingerprint(mapMethods) : tagTester("Map");
  }
});

// node_modules/underscore/modules/isWeakMap.js
var isWeakMap_default;
var init_isWeakMap = __esm({
  "node_modules/underscore/modules/isWeakMap.js"() {
    init_esm();
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isWeakMap_default = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester("WeakMap");
  }
});

// node_modules/underscore/modules/isSet.js
var isSet_default;
var init_isSet = __esm({
  "node_modules/underscore/modules/isSet.js"() {
    init_esm();
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isSet_default = isIE11 ? ie11fingerprint(setMethods) : tagTester("Set");
  }
});

// node_modules/underscore/modules/isWeakSet.js
var isWeakSet_default;
var init_isWeakSet = __esm({
  "node_modules/underscore/modules/isWeakSet.js"() {
    init_esm();
    init_tagTester();
    isWeakSet_default = tagTester("WeakSet");
  }
});

// node_modules/underscore/modules/values.js
function values(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var values2 = Array(length);
  for (var i = 0; i < length; i++) {
    values2[i] = obj[_keys[i]];
  }
  return values2;
}
var init_values = __esm({
  "node_modules/underscore/modules/values.js"() {
    init_esm();
    init_keys();
    __name(values, "values");
  }
});

// node_modules/underscore/modules/pairs.js
function pairs(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var pairs2 = Array(length);
  for (var i = 0; i < length; i++) {
    pairs2[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs2;
}
var init_pairs = __esm({
  "node_modules/underscore/modules/pairs.js"() {
    init_esm();
    init_keys();
    __name(pairs, "pairs");
  }
});

// node_modules/underscore/modules/invert.js
function invert(obj) {
  var result2 = {};
  var _keys = keys(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result2[obj[_keys[i]]] = _keys[i];
  }
  return result2;
}
var init_invert = __esm({
  "node_modules/underscore/modules/invert.js"() {
    init_esm();
    init_keys();
    __name(invert, "invert");
  }
});

// node_modules/underscore/modules/functions.js
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (isFunction_default(obj[key])) names.push(key);
  }
  return names.sort();
}
var init_functions = __esm({
  "node_modules/underscore/modules/functions.js"() {
    init_esm();
    init_isFunction();
    __name(functions, "functions");
  }
});

// node_modules/underscore/modules/_createAssigner.js
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index], keys2 = keysFunc(source), l = keys2.length;
      for (var i = 0; i < l; i++) {
        var key = keys2[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
}
var init_createAssigner = __esm({
  "node_modules/underscore/modules/_createAssigner.js"() {
    init_esm();
    __name(createAssigner, "createAssigner");
  }
});

// node_modules/underscore/modules/extend.js
var extend_default;
var init_extend = __esm({
  "node_modules/underscore/modules/extend.js"() {
    init_esm();
    init_createAssigner();
    init_allKeys();
    extend_default = createAssigner(allKeys);
  }
});

// node_modules/underscore/modules/extendOwn.js
var extendOwn_default;
var init_extendOwn = __esm({
  "node_modules/underscore/modules/extendOwn.js"() {
    init_esm();
    init_createAssigner();
    init_keys();
    extendOwn_default = createAssigner(keys);
  }
});

// node_modules/underscore/modules/defaults.js
var defaults_default;
var init_defaults = __esm({
  "node_modules/underscore/modules/defaults.js"() {
    init_esm();
    init_createAssigner();
    init_allKeys();
    defaults_default = createAssigner(allKeys, true);
  }
});

// node_modules/underscore/modules/_baseCreate.js
function ctor() {
  return function() {
  };
}
function baseCreate(prototype) {
  if (!isObject(prototype)) return {};
  if (nativeCreate) return nativeCreate(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result2 = new Ctor();
  Ctor.prototype = null;
  return result2;
}
var init_baseCreate = __esm({
  "node_modules/underscore/modules/_baseCreate.js"() {
    init_esm();
    init_isObject();
    init_setup();
    __name(ctor, "ctor");
    __name(baseCreate, "baseCreate");
  }
});

// node_modules/underscore/modules/create.js
function create(prototype, props) {
  var result2 = baseCreate(prototype);
  if (props) extendOwn_default(result2, props);
  return result2;
}
var init_create = __esm({
  "node_modules/underscore/modules/create.js"() {
    init_esm();
    init_baseCreate();
    init_extendOwn();
    __name(create, "create");
  }
});

// node_modules/underscore/modules/clone.js
function clone(obj) {
  if (!isObject(obj)) return obj;
  return isArray_default(obj) ? obj.slice() : extend_default({}, obj);
}
var init_clone = __esm({
  "node_modules/underscore/modules/clone.js"() {
    init_esm();
    init_isObject();
    init_isArray();
    init_extend();
    __name(clone, "clone");
  }
});

// node_modules/underscore/modules/tap.js
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}
var init_tap = __esm({
  "node_modules/underscore/modules/tap.js"() {
    init_esm();
    __name(tap, "tap");
  }
});

// node_modules/underscore/modules/toPath.js
function toPath(path) {
  return isArray_default(path) ? path : [path];
}
var init_toPath = __esm({
  "node_modules/underscore/modules/toPath.js"() {
    init_esm();
    init_underscore();
    init_isArray();
    __name(toPath, "toPath");
    _2.toPath = toPath;
  }
});

// node_modules/underscore/modules/_toPath.js
function toPath2(path) {
  return _2.toPath(path);
}
var init_toPath2 = __esm({
  "node_modules/underscore/modules/_toPath.js"() {
    init_esm();
    init_underscore();
    init_toPath();
    __name(toPath2, "toPath");
  }
});

// node_modules/underscore/modules/_deepGet.js
function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}
var init_deepGet = __esm({
  "node_modules/underscore/modules/_deepGet.js"() {
    init_esm();
    __name(deepGet, "deepGet");
  }
});

// node_modules/underscore/modules/get.js
function get(object2, path, defaultValue) {
  var value = deepGet(object2, toPath2(path));
  return isUndefined(value) ? defaultValue : value;
}
var init_get = __esm({
  "node_modules/underscore/modules/get.js"() {
    init_esm();
    init_toPath2();
    init_deepGet();
    init_isUndefined();
    __name(get, "get");
  }
});

// node_modules/underscore/modules/has.js
function has2(obj, path) {
  path = toPath2(path);
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!has(obj, key)) return false;
    obj = obj[key];
  }
  return !!length;
}
var init_has2 = __esm({
  "node_modules/underscore/modules/has.js"() {
    init_esm();
    init_has();
    init_toPath2();
    __name(has2, "has");
  }
});

// node_modules/underscore/modules/identity.js
function identity(value) {
  return value;
}
var init_identity = __esm({
  "node_modules/underscore/modules/identity.js"() {
    init_esm();
    __name(identity, "identity");
  }
});

// node_modules/underscore/modules/matcher.js
function matcher(attrs) {
  attrs = extendOwn_default({}, attrs);
  return function(obj) {
    return isMatch(obj, attrs);
  };
}
var init_matcher = __esm({
  "node_modules/underscore/modules/matcher.js"() {
    init_esm();
    init_extendOwn();
    init_isMatch();
    __name(matcher, "matcher");
  }
});

// node_modules/underscore/modules/property.js
function property(path) {
  path = toPath2(path);
  return function(obj) {
    return deepGet(obj, path);
  };
}
var init_property = __esm({
  "node_modules/underscore/modules/property.js"() {
    init_esm();
    init_deepGet();
    init_toPath2();
    __name(property, "property");
  }
});

// node_modules/underscore/modules/_optimizeCb.js
function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function(value) {
        return func.call(context, value);
      };
    // The 2-argument case is omitted because we’re not using it.
    case 3:
      return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
    case 4:
      return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
  }
  return function() {
    return func.apply(context, arguments);
  };
}
var init_optimizeCb = __esm({
  "node_modules/underscore/modules/_optimizeCb.js"() {
    init_esm();
    __name(optimizeCb, "optimizeCb");
  }
});

// node_modules/underscore/modules/_baseIteratee.js
function baseIteratee(value, context, argCount) {
  if (value == null) return identity;
  if (isFunction_default(value)) return optimizeCb(value, context, argCount);
  if (isObject(value) && !isArray_default(value)) return matcher(value);
  return property(value);
}
var init_baseIteratee = __esm({
  "node_modules/underscore/modules/_baseIteratee.js"() {
    init_esm();
    init_identity();
    init_isFunction();
    init_isObject();
    init_isArray();
    init_matcher();
    init_property();
    init_optimizeCb();
    __name(baseIteratee, "baseIteratee");
  }
});

// node_modules/underscore/modules/iteratee.js
function iteratee(value, context) {
  return baseIteratee(value, context, Infinity);
}
var init_iteratee = __esm({
  "node_modules/underscore/modules/iteratee.js"() {
    init_esm();
    init_underscore();
    init_baseIteratee();
    __name(iteratee, "iteratee");
    _2.iteratee = iteratee;
  }
});

// node_modules/underscore/modules/_cb.js
function cb(value, context, argCount) {
  if (_2.iteratee !== iteratee) return _2.iteratee(value, context);
  return baseIteratee(value, context, argCount);
}
var init_cb = __esm({
  "node_modules/underscore/modules/_cb.js"() {
    init_esm();
    init_underscore();
    init_baseIteratee();
    init_iteratee();
    __name(cb, "cb");
  }
});

// node_modules/underscore/modules/mapObject.js
function mapObject(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = keys(obj), length = _keys.length, results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
var init_mapObject = __esm({
  "node_modules/underscore/modules/mapObject.js"() {
    init_esm();
    init_cb();
    init_keys();
    __name(mapObject, "mapObject");
  }
});

// node_modules/underscore/modules/noop.js
function noop() {
}
var init_noop = __esm({
  "node_modules/underscore/modules/noop.js"() {
    init_esm();
    __name(noop, "noop");
  }
});

// node_modules/underscore/modules/propertyOf.js
function propertyOf(obj) {
  if (obj == null) return noop;
  return function(path) {
    return get(obj, path);
  };
}
var init_propertyOf = __esm({
  "node_modules/underscore/modules/propertyOf.js"() {
    init_esm();
    init_noop();
    init_get();
    __name(propertyOf, "propertyOf");
  }
});

// node_modules/underscore/modules/times.js
function times(n, iteratee2, context) {
  var accum = Array(Math.max(0, n));
  iteratee2 = optimizeCb(iteratee2, context, 1);
  for (var i = 0; i < n; i++) accum[i] = iteratee2(i);
  return accum;
}
var init_times = __esm({
  "node_modules/underscore/modules/times.js"() {
    init_esm();
    init_optimizeCb();
    __name(times, "times");
  }
});

// node_modules/underscore/modules/random.js
function random(min2, max2) {
  if (max2 == null) {
    max2 = min2;
    min2 = 0;
  }
  return min2 + Math.floor(Math.random() * (max2 - min2 + 1));
}
var init_random = __esm({
  "node_modules/underscore/modules/random.js"() {
    init_esm();
    __name(random, "random");
  }
});

// node_modules/underscore/modules/now.js
var now_default;
var init_now = __esm({
  "node_modules/underscore/modules/now.js"() {
    init_esm();
    now_default = Date.now || function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  }
});

// node_modules/underscore/modules/_createEscaper.js
function createEscaper(map2) {
  var escaper = /* @__PURE__ */ __name(function(match) {
    return map2[match];
  }, "escaper");
  var source = "(?:" + keys(map2).join("|") + ")";
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, "g");
  return function(string) {
    string = string == null ? "" : "" + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}
var init_createEscaper = __esm({
  "node_modules/underscore/modules/_createEscaper.js"() {
    init_esm();
    init_keys();
    __name(createEscaper, "createEscaper");
  }
});

// node_modules/underscore/modules/_escapeMap.js
var escapeMap_default;
var init_escapeMap = __esm({
  "node_modules/underscore/modules/_escapeMap.js"() {
    init_esm();
    escapeMap_default = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    };
  }
});

// node_modules/underscore/modules/escape.js
var escape_default;
var init_escape = __esm({
  "node_modules/underscore/modules/escape.js"() {
    init_esm();
    init_createEscaper();
    init_escapeMap();
    escape_default = createEscaper(escapeMap_default);
  }
});

// node_modules/underscore/modules/_unescapeMap.js
var unescapeMap_default;
var init_unescapeMap = __esm({
  "node_modules/underscore/modules/_unescapeMap.js"() {
    init_esm();
    init_invert();
    init_escapeMap();
    unescapeMap_default = invert(escapeMap_default);
  }
});

// node_modules/underscore/modules/unescape.js
var unescape_default;
var init_unescape = __esm({
  "node_modules/underscore/modules/unescape.js"() {
    init_esm();
    init_createEscaper();
    init_unescapeMap();
    unescape_default = createEscaper(unescapeMap_default);
  }
});

// node_modules/underscore/modules/templateSettings.js
var templateSettings_default;
var init_templateSettings = __esm({
  "node_modules/underscore/modules/templateSettings.js"() {
    init_esm();
    init_underscore();
    templateSettings_default = _2.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
  }
});

// node_modules/underscore/modules/template.js
function escapeChar(match) {
  return "\\" + escapes[match];
}
function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = defaults_default({}, settings, _2.templateSettings);
  var matcher2 = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join("|") + "|$", "g");
  var index = 0;
  var source = "__p+='";
  text.replace(matcher2, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;
    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }
    return match;
  });
  source += "';\n";
  var argument = settings.variable;
  if (argument) {
    if (!bareIdentifier.test(argument)) throw new Error(
      "variable is not a bare identifier: " + argument
    );
  } else {
    source = "with(obj||{}){\n" + source + "}\n";
    argument = "obj";
  }
  source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
  var render;
  try {
    render = new Function(argument, "_", source);
  } catch (e) {
    e.source = source;
    throw e;
  }
  var template2 = /* @__PURE__ */ __name(function(data) {
    return render.call(this, data, _2);
  }, "template");
  template2.source = "function(" + argument + "){\n" + source + "}";
  return template2;
}
var noMatch, escapes, escapeRegExp, bareIdentifier;
var init_template = __esm({
  "node_modules/underscore/modules/template.js"() {
    init_esm();
    init_defaults();
    init_underscore();
    init_templateSettings();
    noMatch = /(.)^/;
    escapes = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
    __name(escapeChar, "escapeChar");
    bareIdentifier = /^\s*(\w|\$)+\s*$/;
    __name(template, "template");
  }
});

// node_modules/underscore/modules/result.js
function result(obj, path, fallback) {
  path = toPath2(path);
  var length = path.length;
  if (!length) {
    return isFunction_default(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length;
    }
    obj = isFunction_default(prop) ? prop.call(obj) : prop;
  }
  return obj;
}
var init_result = __esm({
  "node_modules/underscore/modules/result.js"() {
    init_esm();
    init_isFunction();
    init_toPath2();
    __name(result, "result");
  }
});

// node_modules/underscore/modules/uniqueId.js
function uniqueId(prefix) {
  var id = ++idCounter + "";
  return prefix ? prefix + id : id;
}
var idCounter;
var init_uniqueId = __esm({
  "node_modules/underscore/modules/uniqueId.js"() {
    init_esm();
    idCounter = 0;
    __name(uniqueId, "uniqueId");
  }
});

// node_modules/underscore/modules/chain.js
function chain(obj) {
  var instance = _2(obj);
  instance._chain = true;
  return instance;
}
var init_chain = __esm({
  "node_modules/underscore/modules/chain.js"() {
    init_esm();
    init_underscore();
    __name(chain, "chain");
  }
});

// node_modules/underscore/modules/_executeBound.js
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self2 = baseCreate(sourceFunc.prototype);
  var result2 = sourceFunc.apply(self2, args);
  if (isObject(result2)) return result2;
  return self2;
}
var init_executeBound = __esm({
  "node_modules/underscore/modules/_executeBound.js"() {
    init_esm();
    init_baseCreate();
    init_isObject();
    __name(executeBound, "executeBound");
  }
});

// node_modules/underscore/modules/partial.js
var partial, partial_default;
var init_partial = __esm({
  "node_modules/underscore/modules/partial.js"() {
    init_esm();
    init_restArguments();
    init_executeBound();
    init_underscore();
    partial = restArguments(function(func, boundArgs) {
      var placeholder = partial.placeholder;
      var bound = /* @__PURE__ */ __name(function() {
        var position = 0, length = boundArgs.length;
        var args = Array(length);
        for (var i = 0; i < length; i++) {
          args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
        }
        while (position < arguments.length) args.push(arguments[position++]);
        return executeBound(func, bound, this, this, args);
      }, "bound");
      return bound;
    });
    partial.placeholder = _2;
    partial_default = partial;
  }
});

// node_modules/underscore/modules/bind.js
var bind_default;
var init_bind = __esm({
  "node_modules/underscore/modules/bind.js"() {
    init_esm();
    init_restArguments();
    init_isFunction();
    init_executeBound();
    bind_default = restArguments(function(func, context, args) {
      if (!isFunction_default(func)) throw new TypeError("Bind must be called on a function");
      var bound = restArguments(function(callArgs) {
        return executeBound(func, bound, context, this, args.concat(callArgs));
      });
      return bound;
    });
  }
});

// node_modules/underscore/modules/_isArrayLike.js
var isArrayLike_default;
var init_isArrayLike = __esm({
  "node_modules/underscore/modules/_isArrayLike.js"() {
    init_esm();
    init_createSizePropertyCheck();
    init_getLength();
    isArrayLike_default = createSizePropertyCheck(getLength_default);
  }
});

// node_modules/underscore/modules/_flatten.js
function flatten(input, depth, strict) {
  if (!depth && depth !== 0) depth = Infinity;
  var output = [], idx = 0, i = 0, length = getLength_default(input) || 0, stack = [];
  while (true) {
    if (i >= length) {
      if (!stack.length) break;
      var frame = stack.pop();
      i = frame.i;
      input = frame.v;
      length = getLength_default(input);
      continue;
    }
    var value = input[i++];
    if (stack.length >= depth) {
      output[idx++] = value;
    } else if (isArrayLike_default(value) && (isArray_default(value) || isArguments_default(value))) {
      stack.push({ i, v: input });
      i = 0;
      input = value;
      length = getLength_default(input);
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}
var init_flatten = __esm({
  "node_modules/underscore/modules/_flatten.js"() {
    init_esm();
    init_getLength();
    init_isArrayLike();
    init_isArray();
    init_isArguments();
    __name(flatten, "flatten");
  }
});

// node_modules/underscore/modules/bindAll.js
var bindAll_default;
var init_bindAll = __esm({
  "node_modules/underscore/modules/bindAll.js"() {
    init_esm();
    init_restArguments();
    init_flatten();
    init_bind();
    bindAll_default = restArguments(function(obj, keys2) {
      keys2 = flatten(keys2, false, false);
      var index = keys2.length;
      if (index < 1) throw new Error("bindAll must be passed function names");
      while (index--) {
        var key = keys2[index];
        obj[key] = bind_default(obj[key], obj);
      }
      return obj;
    });
  }
});

// node_modules/underscore/modules/memoize.js
function memoize(func, hasher) {
  var memoize2 = /* @__PURE__ */ __name(function(key) {
    var cache = memoize2.cache;
    var address = "" + (hasher ? hasher.apply(this, arguments) : key);
    if (!has(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  }, "memoize");
  memoize2.cache = {};
  return memoize2;
}
var init_memoize = __esm({
  "node_modules/underscore/modules/memoize.js"() {
    init_esm();
    init_has();
    __name(memoize, "memoize");
  }
});

// node_modules/underscore/modules/delay.js
var delay_default;
var init_delay = __esm({
  "node_modules/underscore/modules/delay.js"() {
    init_esm();
    init_restArguments();
    delay_default = restArguments(function(func, wait, args) {
      return setTimeout(function() {
        return func.apply(null, args);
      }, wait);
    });
  }
});

// node_modules/underscore/modules/defer.js
var defer_default;
var init_defer = __esm({
  "node_modules/underscore/modules/defer.js"() {
    init_esm();
    init_partial();
    init_delay();
    init_underscore();
    defer_default = partial_default(delay_default, _2, 1);
  }
});

// node_modules/underscore/modules/throttle.js
function throttle(func, wait, options) {
  var timeout, context, args, result2;
  var previous = 0;
  if (!options) options = {};
  var later = /* @__PURE__ */ __name(function() {
    previous = options.leading === false ? 0 : now_default();
    timeout = null;
    result2 = func.apply(context, args);
    if (!timeout) context = args = null;
  }, "later");
  var throttled = /* @__PURE__ */ __name(function() {
    var _now = now_default();
    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result2 = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result2;
  }, "throttled");
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };
  return throttled;
}
var init_throttle = __esm({
  "node_modules/underscore/modules/throttle.js"() {
    init_esm();
    init_now();
    __name(throttle, "throttle");
  }
});

// node_modules/underscore/modules/debounce.js
function debounce(func, wait, immediate) {
  var timeout, previous, args, result2, context;
  var later = /* @__PURE__ */ __name(function() {
    var passed = now_default() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) result2 = func.apply(context, args);
      if (!timeout) args = context = null;
    }
  }, "later");
  var debounced = restArguments(function(_args) {
    context = this;
    args = _args;
    previous = now_default();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate) result2 = func.apply(context, args);
    }
    return result2;
  });
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };
  return debounced;
}
var init_debounce = __esm({
  "node_modules/underscore/modules/debounce.js"() {
    init_esm();
    init_restArguments();
    init_now();
    __name(debounce, "debounce");
  }
});

// node_modules/underscore/modules/wrap.js
function wrap(func, wrapper) {
  return partial_default(wrapper, func);
}
var init_wrap = __esm({
  "node_modules/underscore/modules/wrap.js"() {
    init_esm();
    init_partial();
    __name(wrap, "wrap");
  }
});

// node_modules/underscore/modules/negate.js
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}
var init_negate = __esm({
  "node_modules/underscore/modules/negate.js"() {
    init_esm();
    __name(negate, "negate");
  }
});

// node_modules/underscore/modules/compose.js
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result2 = args[start].apply(this, arguments);
    while (i--) result2 = args[i].call(this, result2);
    return result2;
  };
}
var init_compose = __esm({
  "node_modules/underscore/modules/compose.js"() {
    init_esm();
    __name(compose, "compose");
  }
});

// node_modules/underscore/modules/after.js
function after(times2, func) {
  return function() {
    if (--times2 < 1) {
      return func.apply(this, arguments);
    }
  };
}
var init_after = __esm({
  "node_modules/underscore/modules/after.js"() {
    init_esm();
    __name(after, "after");
  }
});

// node_modules/underscore/modules/before.js
function before(times2, func) {
  var memo;
  return function() {
    if (--times2 > 0) {
      memo = func.apply(this, arguments);
    }
    if (times2 <= 1) func = null;
    return memo;
  };
}
var init_before = __esm({
  "node_modules/underscore/modules/before.js"() {
    init_esm();
    __name(before, "before");
  }
});

// node_modules/underscore/modules/once.js
var once_default;
var init_once = __esm({
  "node_modules/underscore/modules/once.js"() {
    init_esm();
    init_partial();
    init_before();
    once_default = partial_default(before, 2);
  }
});

// node_modules/underscore/modules/findKey.js
function findKey(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = keys(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}
var init_findKey = __esm({
  "node_modules/underscore/modules/findKey.js"() {
    init_esm();
    init_cb();
    init_keys();
    __name(findKey, "findKey");
  }
});

// node_modules/underscore/modules/_createPredicateIndexFinder.js
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = getLength_default(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}
var init_createPredicateIndexFinder = __esm({
  "node_modules/underscore/modules/_createPredicateIndexFinder.js"() {
    init_esm();
    init_cb();
    init_getLength();
    __name(createPredicateIndexFinder, "createPredicateIndexFinder");
  }
});

// node_modules/underscore/modules/findIndex.js
var findIndex_default;
var init_findIndex = __esm({
  "node_modules/underscore/modules/findIndex.js"() {
    init_esm();
    init_createPredicateIndexFinder();
    findIndex_default = createPredicateIndexFinder(1);
  }
});

// node_modules/underscore/modules/findLastIndex.js
var findLastIndex_default;
var init_findLastIndex = __esm({
  "node_modules/underscore/modules/findLastIndex.js"() {
    init_esm();
    init_createPredicateIndexFinder();
    findLastIndex_default = createPredicateIndexFinder(-1);
  }
});

// node_modules/underscore/modules/sortedIndex.js
function sortedIndex(array, obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context, 1);
  var value = iteratee2(obj);
  var low = 0, high = getLength_default(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee2(array[mid]) < value) low = mid + 1;
    else high = mid;
  }
  return low;
}
var init_sortedIndex = __esm({
  "node_modules/underscore/modules/sortedIndex.js"() {
    init_esm();
    init_cb();
    init_getLength();
    __name(sortedIndex, "sortedIndex");
  }
});

// node_modules/underscore/modules/_createIndexFinder.js
function createIndexFinder(dir, predicateFind, sortedIndex2) {
  return function(array, item, idx) {
    var i = 0, length = getLength_default(array);
    if (typeof idx == "number") {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex2 && idx && length) {
      idx = sortedIndex2(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i, length), isNaN2);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}
var init_createIndexFinder = __esm({
  "node_modules/underscore/modules/_createIndexFinder.js"() {
    init_esm();
    init_getLength();
    init_setup();
    init_isNaN();
    __name(createIndexFinder, "createIndexFinder");
  }
});

// node_modules/underscore/modules/indexOf.js
var indexOf_default;
var init_indexOf = __esm({
  "node_modules/underscore/modules/indexOf.js"() {
    init_esm();
    init_sortedIndex();
    init_findIndex();
    init_createIndexFinder();
    indexOf_default = createIndexFinder(1, findIndex_default, sortedIndex);
  }
});

// node_modules/underscore/modules/lastIndexOf.js
var lastIndexOf_default;
var init_lastIndexOf = __esm({
  "node_modules/underscore/modules/lastIndexOf.js"() {
    init_esm();
    init_findLastIndex();
    init_createIndexFinder();
    lastIndexOf_default = createIndexFinder(-1, findLastIndex_default);
  }
});

// node_modules/underscore/modules/find.js
function find(obj, predicate, context) {
  var keyFinder = isArrayLike_default(obj) ? findIndex_default : findKey;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}
var init_find = __esm({
  "node_modules/underscore/modules/find.js"() {
    init_esm();
    init_isArrayLike();
    init_findIndex();
    init_findKey();
    __name(find, "find");
  }
});

// node_modules/underscore/modules/findWhere.js
function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
}
var init_findWhere = __esm({
  "node_modules/underscore/modules/findWhere.js"() {
    init_esm();
    init_find();
    init_matcher();
    __name(findWhere, "findWhere");
  }
});

// node_modules/underscore/modules/each.js
function each(obj, iteratee2, context) {
  iteratee2 = optimizeCb(iteratee2, context);
  var i, length;
  if (isArrayLike_default(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee2(obj[i], i, obj);
    }
  } else {
    var _keys = keys(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee2(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}
var init_each = __esm({
  "node_modules/underscore/modules/each.js"() {
    init_esm();
    init_optimizeCb();
    init_isArrayLike();
    init_keys();
    __name(each, "each");
  }
});

// node_modules/underscore/modules/map.js
function map(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
var init_map = __esm({
  "node_modules/underscore/modules/map.js"() {
    init_esm();
    init_cb();
    init_isArrayLike();
    init_keys();
    __name(map, "map");
  }
});

// node_modules/underscore/modules/_createReduce.js
function createReduce(dir) {
  var reducer = /* @__PURE__ */ __name(function(obj, iteratee2, memo, initial2) {
    var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
    if (!initial2) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee2(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  }, "reducer");
  return function(obj, iteratee2, memo, context) {
    var initial2 = arguments.length >= 3;
    return reducer(obj, optimizeCb(iteratee2, context, 4), memo, initial2);
  };
}
var init_createReduce = __esm({
  "node_modules/underscore/modules/_createReduce.js"() {
    init_esm();
    init_isArrayLike();
    init_keys();
    init_optimizeCb();
    __name(createReduce, "createReduce");
  }
});

// node_modules/underscore/modules/reduce.js
var reduce_default;
var init_reduce = __esm({
  "node_modules/underscore/modules/reduce.js"() {
    init_esm();
    init_createReduce();
    reduce_default = createReduce(1);
  }
});

// node_modules/underscore/modules/reduceRight.js
var reduceRight_default;
var init_reduceRight = __esm({
  "node_modules/underscore/modules/reduceRight.js"() {
    init_esm();
    init_createReduce();
    reduceRight_default = createReduce(-1);
  }
});

// node_modules/underscore/modules/filter.js
function filter(obj, predicate, context) {
  var results = [];
  predicate = cb(predicate, context);
  each(obj, function(value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}
var init_filter = __esm({
  "node_modules/underscore/modules/filter.js"() {
    init_esm();
    init_cb();
    init_each();
    __name(filter, "filter");
  }
});

// node_modules/underscore/modules/reject.js
function reject(obj, predicate, context) {
  return filter(obj, negate(cb(predicate)), context);
}
var init_reject = __esm({
  "node_modules/underscore/modules/reject.js"() {
    init_esm();
    init_filter();
    init_negate();
    init_cb();
    __name(reject, "reject");
  }
});

// node_modules/underscore/modules/every.js
function every(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }
  return true;
}
var init_every = __esm({
  "node_modules/underscore/modules/every.js"() {
    init_esm();
    init_cb();
    init_isArrayLike();
    init_keys();
    __name(every, "every");
  }
});

// node_modules/underscore/modules/some.js
function some(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }
  return false;
}
var init_some = __esm({
  "node_modules/underscore/modules/some.js"() {
    init_esm();
    init_cb();
    init_isArrayLike();
    init_keys();
    __name(some, "some");
  }
});

// node_modules/underscore/modules/contains.js
function contains(obj, item, fromIndex, guard) {
  if (!isArrayLike_default(obj)) obj = values(obj);
  if (typeof fromIndex != "number" || guard) fromIndex = 0;
  return indexOf_default(obj, item, fromIndex) >= 0;
}
var init_contains = __esm({
  "node_modules/underscore/modules/contains.js"() {
    init_esm();
    init_isArrayLike();
    init_values();
    init_indexOf();
    __name(contains, "contains");
  }
});

// node_modules/underscore/modules/invoke.js
var invoke_default;
var init_invoke = __esm({
  "node_modules/underscore/modules/invoke.js"() {
    init_esm();
    init_restArguments();
    init_isFunction();
    init_map();
    init_deepGet();
    init_toPath2();
    invoke_default = restArguments(function(obj, path, args) {
      var contextPath, func;
      if (isFunction_default(path)) {
        func = path;
      } else {
        path = toPath2(path);
        contextPath = path.slice(0, -1);
        path = path[path.length - 1];
      }
      return map(obj, function(context) {
        var method = func;
        if (!method) {
          if (contextPath && contextPath.length) {
            context = deepGet(context, contextPath);
          }
          if (context == null) return void 0;
          method = context[path];
        }
        return method == null ? method : method.apply(context, args);
      });
    });
  }
});

// node_modules/underscore/modules/pluck.js
function pluck(obj, key) {
  return map(obj, property(key));
}
var init_pluck = __esm({
  "node_modules/underscore/modules/pluck.js"() {
    init_esm();
    init_map();
    init_property();
    __name(pluck, "pluck");
  }
});

// node_modules/underscore/modules/where.js
function where(obj, attrs) {
  return filter(obj, matcher(attrs));
}
var init_where = __esm({
  "node_modules/underscore/modules/where.js"() {
    init_esm();
    init_filter();
    init_matcher();
    __name(where, "where");
  }
});

// node_modules/underscore/modules/max.js
function max(obj, iteratee2, context) {
  var result2 = -Infinity, lastComputed = -Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike_default(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result2) {
        result2 = value;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result2 === -Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
var init_max = __esm({
  "node_modules/underscore/modules/max.js"() {
    init_esm();
    init_isArrayLike();
    init_values();
    init_cb();
    init_each();
    __name(max, "max");
  }
});

// node_modules/underscore/modules/min.js
function min(obj, iteratee2, context) {
  var result2 = Infinity, lastComputed = Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike_default(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result2) {
        result2 = value;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed < lastComputed || computed === Infinity && result2 === Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
var init_min = __esm({
  "node_modules/underscore/modules/min.js"() {
    init_esm();
    init_isArrayLike();
    init_values();
    init_cb();
    init_each();
    __name(min, "min");
  }
});

// node_modules/underscore/modules/toArray.js
function toArray(obj) {
  if (!obj) return [];
  if (isArray_default(obj)) return slice.call(obj);
  if (isString_default(obj)) {
    return obj.match(reStrSymbol);
  }
  if (isArrayLike_default(obj)) return map(obj, identity);
  return values(obj);
}
var reStrSymbol;
var init_toArray = __esm({
  "node_modules/underscore/modules/toArray.js"() {
    init_esm();
    init_isArray();
    init_setup();
    init_isString();
    init_isArrayLike();
    init_map();
    init_identity();
    init_values();
    reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    __name(toArray, "toArray");
  }
});

// node_modules/underscore/modules/sample.js
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike_default(obj)) obj = values(obj);
    return obj[random(obj.length - 1)];
  }
  var sample2 = toArray(obj);
  var length = getLength_default(sample2);
  n = Math.max(Math.min(n, length), 0);
  var last2 = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = random(index, last2);
    var temp = sample2[index];
    sample2[index] = sample2[rand];
    sample2[rand] = temp;
  }
  return sample2.slice(0, n);
}
var init_sample = __esm({
  "node_modules/underscore/modules/sample.js"() {
    init_esm();
    init_isArrayLike();
    init_values();
    init_getLength();
    init_random();
    init_toArray();
    __name(sample, "sample");
  }
});

// node_modules/underscore/modules/shuffle.js
function shuffle(obj) {
  return sample(obj, Infinity);
}
var init_shuffle = __esm({
  "node_modules/underscore/modules/shuffle.js"() {
    init_esm();
    init_sample();
    __name(shuffle, "shuffle");
  }
});

// node_modules/underscore/modules/sortBy.js
function sortBy(obj, iteratee2, context) {
  var index = 0;
  iteratee2 = cb(iteratee2, context);
  return pluck(map(obj, function(value, key, list) {
    return {
      value,
      index: index++,
      criteria: iteratee2(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  }), "value");
}
var init_sortBy = __esm({
  "node_modules/underscore/modules/sortBy.js"() {
    init_esm();
    init_cb();
    init_pluck();
    init_map();
    __name(sortBy, "sortBy");
  }
});

// node_modules/underscore/modules/_group.js
function group(behavior, partition) {
  return function(obj, iteratee2, context) {
    var result2 = partition ? [[], []] : {};
    iteratee2 = cb(iteratee2, context);
    each(obj, function(value, index) {
      var key = iteratee2(value, index, obj);
      behavior(result2, value, key);
    });
    return result2;
  };
}
var init_group = __esm({
  "node_modules/underscore/modules/_group.js"() {
    init_esm();
    init_cb();
    init_each();
    __name(group, "group");
  }
});

// node_modules/underscore/modules/groupBy.js
var groupBy_default;
var init_groupBy = __esm({
  "node_modules/underscore/modules/groupBy.js"() {
    init_esm();
    init_group();
    init_has();
    groupBy_default = group(function(result2, value, key) {
      if (has(result2, key)) result2[key].push(value);
      else result2[key] = [value];
    });
  }
});

// node_modules/underscore/modules/indexBy.js
var indexBy_default;
var init_indexBy = __esm({
  "node_modules/underscore/modules/indexBy.js"() {
    init_esm();
    init_group();
    indexBy_default = group(function(result2, value, key) {
      result2[key] = value;
    });
  }
});

// node_modules/underscore/modules/countBy.js
var countBy_default;
var init_countBy = __esm({
  "node_modules/underscore/modules/countBy.js"() {
    init_esm();
    init_group();
    init_has();
    countBy_default = group(function(result2, value, key) {
      if (has(result2, key)) result2[key]++;
      else result2[key] = 1;
    });
  }
});

// node_modules/underscore/modules/partition.js
var partition_default;
var init_partition = __esm({
  "node_modules/underscore/modules/partition.js"() {
    init_esm();
    init_group();
    partition_default = group(function(result2, value, pass) {
      result2[pass ? 0 : 1].push(value);
    }, true);
  }
});

// node_modules/underscore/modules/size.js
function size(obj) {
  if (obj == null) return 0;
  return isArrayLike_default(obj) ? obj.length : keys(obj).length;
}
var init_size = __esm({
  "node_modules/underscore/modules/size.js"() {
    init_esm();
    init_isArrayLike();
    init_keys();
    __name(size, "size");
  }
});

// node_modules/underscore/modules/_keyInObj.js
function keyInObj(value, key, obj) {
  return key in obj;
}
var init_keyInObj = __esm({
  "node_modules/underscore/modules/_keyInObj.js"() {
    init_esm();
    __name(keyInObj, "keyInObj");
  }
});

// node_modules/underscore/modules/pick.js
var pick_default;
var init_pick = __esm({
  "node_modules/underscore/modules/pick.js"() {
    init_esm();
    init_restArguments();
    init_isFunction();
    init_optimizeCb();
    init_allKeys();
    init_keyInObj();
    init_flatten();
    pick_default = restArguments(function(obj, keys2) {
      var result2 = {}, iteratee2 = keys2[0];
      if (obj == null) return result2;
      if (isFunction_default(iteratee2)) {
        if (keys2.length > 1) iteratee2 = optimizeCb(iteratee2, keys2[1]);
        keys2 = allKeys(obj);
      } else {
        iteratee2 = keyInObj;
        keys2 = flatten(keys2, false, false);
        obj = Object(obj);
      }
      for (var i = 0, length = keys2.length; i < length; i++) {
        var key = keys2[i];
        var value = obj[key];
        if (iteratee2(value, key, obj)) result2[key] = value;
      }
      return result2;
    });
  }
});

// node_modules/underscore/modules/omit.js
var omit_default;
var init_omit = __esm({
  "node_modules/underscore/modules/omit.js"() {
    init_esm();
    init_restArguments();
    init_isFunction();
    init_negate();
    init_map();
    init_flatten();
    init_contains();
    init_pick();
    omit_default = restArguments(function(obj, keys2) {
      var iteratee2 = keys2[0], context;
      if (isFunction_default(iteratee2)) {
        iteratee2 = negate(iteratee2);
        if (keys2.length > 1) context = keys2[1];
      } else {
        keys2 = map(flatten(keys2, false, false), String);
        iteratee2 = /* @__PURE__ */ __name(function(value, key) {
          return !contains(keys2, key);
        }, "iteratee");
      }
      return pick_default(obj, iteratee2, context);
    });
  }
});

// node_modules/underscore/modules/initial.js
function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}
var init_initial = __esm({
  "node_modules/underscore/modules/initial.js"() {
    init_esm();
    init_setup();
    __name(initial, "initial");
  }
});

// node_modules/underscore/modules/first.js
function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[0];
  return initial(array, array.length - n);
}
var init_first = __esm({
  "node_modules/underscore/modules/first.js"() {
    init_esm();
    init_initial();
    __name(first, "first");
  }
});

// node_modules/underscore/modules/rest.js
function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}
var init_rest = __esm({
  "node_modules/underscore/modules/rest.js"() {
    init_esm();
    init_setup();
    __name(rest, "rest");
  }
});

// node_modules/underscore/modules/last.js
function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return rest(array, Math.max(0, array.length - n));
}
var init_last = __esm({
  "node_modules/underscore/modules/last.js"() {
    init_esm();
    init_rest();
    __name(last, "last");
  }
});

// node_modules/underscore/modules/compact.js
function compact(array) {
  return filter(array, Boolean);
}
var init_compact = __esm({
  "node_modules/underscore/modules/compact.js"() {
    init_esm();
    init_filter();
    __name(compact, "compact");
  }
});

// node_modules/underscore/modules/flatten.js
function flatten2(array, depth) {
  return flatten(array, depth, false);
}
var init_flatten2 = __esm({
  "node_modules/underscore/modules/flatten.js"() {
    init_esm();
    init_flatten();
    __name(flatten2, "flatten");
  }
});

// node_modules/underscore/modules/difference.js
var difference_default;
var init_difference = __esm({
  "node_modules/underscore/modules/difference.js"() {
    init_esm();
    init_restArguments();
    init_flatten();
    init_filter();
    init_contains();
    difference_default = restArguments(function(array, rest2) {
      rest2 = flatten(rest2, true, true);
      return filter(array, function(value) {
        return !contains(rest2, value);
      });
    });
  }
});

// node_modules/underscore/modules/without.js
var without_default;
var init_without = __esm({
  "node_modules/underscore/modules/without.js"() {
    init_esm();
    init_restArguments();
    init_difference();
    without_default = restArguments(function(array, otherArrays) {
      return difference_default(array, otherArrays);
    });
  }
});

// node_modules/underscore/modules/uniq.js
function uniq(array, isSorted, iteratee2, context) {
  if (!isBoolean(isSorted)) {
    context = iteratee2;
    iteratee2 = isSorted;
    isSorted = false;
  }
  if (iteratee2 != null) iteratee2 = cb(iteratee2, context);
  var result2 = [];
  var seen = [];
  for (var i = 0, length = getLength_default(array); i < length; i++) {
    var value = array[i], computed = iteratee2 ? iteratee2(value, i, array) : value;
    if (isSorted && !iteratee2) {
      if (!i || seen !== computed) result2.push(value);
      seen = computed;
    } else if (iteratee2) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result2.push(value);
      }
    } else if (!contains(result2, value)) {
      result2.push(value);
    }
  }
  return result2;
}
var init_uniq = __esm({
  "node_modules/underscore/modules/uniq.js"() {
    init_esm();
    init_isBoolean();
    init_cb();
    init_getLength();
    init_contains();
    __name(uniq, "uniq");
  }
});

// node_modules/underscore/modules/union.js
var union_default;
var init_union = __esm({
  "node_modules/underscore/modules/union.js"() {
    init_esm();
    init_restArguments();
    init_uniq();
    init_flatten();
    union_default = restArguments(function(arrays) {
      return uniq(flatten(arrays, true, true));
    });
  }
});

// node_modules/underscore/modules/intersection.js
function intersection(array) {
  var result2 = [];
  var argsLength = arguments.length;
  for (var i = 0, length = getLength_default(array); i < length; i++) {
    var item = array[i];
    if (contains(result2, item)) continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!contains(arguments[j], item)) break;
    }
    if (j === argsLength) result2.push(item);
  }
  return result2;
}
var init_intersection = __esm({
  "node_modules/underscore/modules/intersection.js"() {
    init_esm();
    init_getLength();
    init_contains();
    __name(intersection, "intersection");
  }
});

// node_modules/underscore/modules/unzip.js
function unzip(array) {
  var length = array && max(array, getLength_default).length || 0;
  var result2 = Array(length);
  for (var index = 0; index < length; index++) {
    result2[index] = pluck(array, index);
  }
  return result2;
}
var init_unzip = __esm({
  "node_modules/underscore/modules/unzip.js"() {
    init_esm();
    init_max();
    init_getLength();
    init_pluck();
    __name(unzip, "unzip");
  }
});

// node_modules/underscore/modules/zip.js
var zip_default;
var init_zip = __esm({
  "node_modules/underscore/modules/zip.js"() {
    init_esm();
    init_restArguments();
    init_unzip();
    zip_default = restArguments(unzip);
  }
});

// node_modules/underscore/modules/object.js
function object(list, values2) {
  var result2 = {};
  for (var i = 0, length = getLength_default(list); i < length; i++) {
    if (values2) {
      result2[list[i]] = values2[i];
    } else {
      result2[list[i][0]] = list[i][1];
    }
  }
  return result2;
}
var init_object = __esm({
  "node_modules/underscore/modules/object.js"() {
    init_esm();
    init_getLength();
    __name(object, "object");
  }
});

// node_modules/underscore/modules/range.js
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }
  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range2 = Array(length);
  for (var idx = 0; idx < length; idx++, start += step) {
    range2[idx] = start;
  }
  return range2;
}
var init_range = __esm({
  "node_modules/underscore/modules/range.js"() {
    init_esm();
    __name(range, "range");
  }
});

// node_modules/underscore/modules/chunk.js
function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result2 = [];
  var i = 0, length = array.length;
  while (i < length) {
    result2.push(slice.call(array, i, i += count));
  }
  return result2;
}
var init_chunk = __esm({
  "node_modules/underscore/modules/chunk.js"() {
    init_esm();
    init_setup();
    __name(chunk, "chunk");
  }
});

// node_modules/underscore/modules/_chainResult.js
function chainResult(instance, obj) {
  return instance._chain ? _2(obj).chain() : obj;
}
var init_chainResult = __esm({
  "node_modules/underscore/modules/_chainResult.js"() {
    init_esm();
    init_underscore();
    __name(chainResult, "chainResult");
  }
});

// node_modules/underscore/modules/mixin.js
function mixin(obj) {
  each(functions(obj), function(name) {
    var func = _2[name] = obj[name];
    _2.prototype[name] = function() {
      var args = [this._wrapped];
      push.apply(args, arguments);
      return chainResult(this, func.apply(_2, args));
    };
  });
  return _2;
}
var init_mixin = __esm({
  "node_modules/underscore/modules/mixin.js"() {
    init_esm();
    init_underscore();
    init_each();
    init_functions();
    init_setup();
    init_chainResult();
    __name(mixin, "mixin");
  }
});

// node_modules/underscore/modules/underscore-array-methods.js
var underscore_array_methods_default;
var init_underscore_array_methods = __esm({
  "node_modules/underscore/modules/underscore-array-methods.js"() {
    init_esm();
    init_underscore();
    init_each();
    init_setup();
    init_chainResult();
    each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
      var method = ArrayProto[name];
      _2.prototype[name] = function() {
        var obj = this._wrapped;
        if (obj != null) {
          method.apply(obj, arguments);
          if ((name === "shift" || name === "splice") && obj.length === 0) {
            delete obj[0];
          }
        }
        return chainResult(this, obj);
      };
    });
    each(["concat", "join", "slice"], function(name) {
      var method = ArrayProto[name];
      _2.prototype[name] = function() {
        var obj = this._wrapped;
        if (obj != null) obj = method.apply(obj, arguments);
        return chainResult(this, obj);
      };
    });
    underscore_array_methods_default = _2;
  }
});

// node_modules/underscore/modules/index.js
var modules_exports = {};
__export(modules_exports, {
  VERSION: () => VERSION,
  after: () => after,
  all: () => every,
  allKeys: () => allKeys,
  any: () => some,
  assign: () => extendOwn_default,
  before: () => before,
  bind: () => bind_default,
  bindAll: () => bindAll_default,
  chain: () => chain,
  chunk: () => chunk,
  clone: () => clone,
  collect: () => map,
  compact: () => compact,
  compose: () => compose,
  constant: () => constant,
  contains: () => contains,
  countBy: () => countBy_default,
  create: () => create,
  debounce: () => debounce,
  default: () => underscore_array_methods_default,
  defaults: () => defaults_default,
  defer: () => defer_default,
  delay: () => delay_default,
  detect: () => find,
  difference: () => difference_default,
  drop: () => rest,
  each: () => each,
  escape: () => escape_default,
  every: () => every,
  extend: () => extend_default,
  extendOwn: () => extendOwn_default,
  filter: () => filter,
  find: () => find,
  findIndex: () => findIndex_default,
  findKey: () => findKey,
  findLastIndex: () => findLastIndex_default,
  findWhere: () => findWhere,
  first: () => first,
  flatten: () => flatten2,
  foldl: () => reduce_default,
  foldr: () => reduceRight_default,
  forEach: () => each,
  functions: () => functions,
  get: () => get,
  groupBy: () => groupBy_default,
  has: () => has2,
  head: () => first,
  identity: () => identity,
  include: () => contains,
  includes: () => contains,
  indexBy: () => indexBy_default,
  indexOf: () => indexOf_default,
  initial: () => initial,
  inject: () => reduce_default,
  intersection: () => intersection,
  invert: () => invert,
  invoke: () => invoke_default,
  isArguments: () => isArguments_default,
  isArray: () => isArray_default,
  isArrayBuffer: () => isArrayBuffer_default,
  isBoolean: () => isBoolean,
  isDataView: () => isDataView_default,
  isDate: () => isDate_default,
  isElement: () => isElement,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isError: () => isError_default,
  isFinite: () => isFinite2,
  isFunction: () => isFunction_default,
  isMap: () => isMap_default,
  isMatch: () => isMatch,
  isNaN: () => isNaN2,
  isNull: () => isNull,
  isNumber: () => isNumber_default,
  isObject: () => isObject,
  isRegExp: () => isRegExp_default,
  isSet: () => isSet_default,
  isString: () => isString_default,
  isSymbol: () => isSymbol_default,
  isTypedArray: () => isTypedArray_default,
  isUndefined: () => isUndefined,
  isWeakMap: () => isWeakMap_default,
  isWeakSet: () => isWeakSet_default,
  iteratee: () => iteratee,
  keys: () => keys,
  last: () => last,
  lastIndexOf: () => lastIndexOf_default,
  map: () => map,
  mapObject: () => mapObject,
  matcher: () => matcher,
  matches: () => matcher,
  max: () => max,
  memoize: () => memoize,
  methods: () => functions,
  min: () => min,
  mixin: () => mixin,
  negate: () => negate,
  noop: () => noop,
  now: () => now_default,
  object: () => object,
  omit: () => omit_default,
  once: () => once_default,
  pairs: () => pairs,
  partial: () => partial_default,
  partition: () => partition_default,
  pick: () => pick_default,
  pluck: () => pluck,
  property: () => property,
  propertyOf: () => propertyOf,
  random: () => random,
  range: () => range,
  reduce: () => reduce_default,
  reduceRight: () => reduceRight_default,
  reject: () => reject,
  rest: () => rest,
  restArguments: () => restArguments,
  result: () => result,
  sample: () => sample,
  select: () => filter,
  shuffle: () => shuffle,
  size: () => size,
  some: () => some,
  sortBy: () => sortBy,
  sortedIndex: () => sortedIndex,
  tail: () => rest,
  take: () => first,
  tap: () => tap,
  template: () => template,
  templateSettings: () => templateSettings_default,
  throttle: () => throttle,
  times: () => times,
  toArray: () => toArray,
  toPath: () => toPath,
  transpose: () => unzip,
  unescape: () => unescape_default,
  union: () => union_default,
  uniq: () => uniq,
  unique: () => uniq,
  uniqueId: () => uniqueId,
  unzip: () => unzip,
  values: () => values,
  where: () => where,
  without: () => without_default,
  wrap: () => wrap,
  zip: () => zip_default
});
var init_modules = __esm({
  "node_modules/underscore/modules/index.js"() {
    init_esm();
    init_setup();
    init_restArguments();
    init_isObject();
    init_isNull();
    init_isUndefined();
    init_isBoolean();
    init_isElement();
    init_isString();
    init_isNumber();
    init_isDate();
    init_isRegExp();
    init_isError();
    init_isSymbol();
    init_isArrayBuffer();
    init_isDataView();
    init_isArray();
    init_isFunction();
    init_isArguments();
    init_isFinite();
    init_isNaN();
    init_isTypedArray();
    init_isEmpty();
    init_isMatch();
    init_isEqual();
    init_isMap();
    init_isWeakMap();
    init_isSet();
    init_isWeakSet();
    init_keys();
    init_allKeys();
    init_values();
    init_pairs();
    init_invert();
    init_functions();
    init_extend();
    init_extendOwn();
    init_defaults();
    init_create();
    init_clone();
    init_tap();
    init_get();
    init_has2();
    init_mapObject();
    init_identity();
    init_constant();
    init_noop();
    init_toPath();
    init_property();
    init_propertyOf();
    init_matcher();
    init_times();
    init_random();
    init_now();
    init_escape();
    init_unescape();
    init_templateSettings();
    init_template();
    init_result();
    init_uniqueId();
    init_chain();
    init_iteratee();
    init_partial();
    init_bind();
    init_bindAll();
    init_memoize();
    init_delay();
    init_defer();
    init_throttle();
    init_debounce();
    init_wrap();
    init_negate();
    init_compose();
    init_after();
    init_before();
    init_once();
    init_findKey();
    init_findIndex();
    init_findLastIndex();
    init_sortedIndex();
    init_indexOf();
    init_lastIndexOf();
    init_find();
    init_findWhere();
    init_each();
    init_map();
    init_reduce();
    init_reduceRight();
    init_filter();
    init_reject();
    init_every();
    init_some();
    init_contains();
    init_invoke();
    init_pluck();
    init_where();
    init_max();
    init_min();
    init_shuffle();
    init_sample();
    init_sortBy();
    init_groupBy();
    init_indexBy();
    init_countBy();
    init_partition();
    init_toArray();
    init_size();
    init_pick();
    init_omit();
    init_first();
    init_initial();
    init_last();
    init_rest();
    init_compact();
    init_flatten2();
    init_without();
    init_uniq();
    init_union();
    init_intersection();
    init_difference();
    init_unzip();
    init_zip();
    init_object();
    init_range();
    init_chunk();
    init_mixin();
    init_underscore_array_methods();
  }
});

// node_modules/underscore/modules/index-default.js
var _3, index_default_default;
var init_index_default = __esm({
  "node_modules/underscore/modules/index-default.js"() {
    init_esm();
    init_modules();
    init_modules();
    _3 = mixin(modules_exports);
    _3._ = _3;
    index_default_default = _3;
  }
});

// node_modules/underscore/modules/index-all.js
var index_all_exports = {};
__export(index_all_exports, {
  VERSION: () => VERSION,
  after: () => after,
  all: () => every,
  allKeys: () => allKeys,
  any: () => some,
  assign: () => extendOwn_default,
  before: () => before,
  bind: () => bind_default,
  bindAll: () => bindAll_default,
  chain: () => chain,
  chunk: () => chunk,
  clone: () => clone,
  collect: () => map,
  compact: () => compact,
  compose: () => compose,
  constant: () => constant,
  contains: () => contains,
  countBy: () => countBy_default,
  create: () => create,
  debounce: () => debounce,
  default: () => index_default_default,
  defaults: () => defaults_default,
  defer: () => defer_default,
  delay: () => delay_default,
  detect: () => find,
  difference: () => difference_default,
  drop: () => rest,
  each: () => each,
  escape: () => escape_default,
  every: () => every,
  extend: () => extend_default,
  extendOwn: () => extendOwn_default,
  filter: () => filter,
  find: () => find,
  findIndex: () => findIndex_default,
  findKey: () => findKey,
  findLastIndex: () => findLastIndex_default,
  findWhere: () => findWhere,
  first: () => first,
  flatten: () => flatten2,
  foldl: () => reduce_default,
  foldr: () => reduceRight_default,
  forEach: () => each,
  functions: () => functions,
  get: () => get,
  groupBy: () => groupBy_default,
  has: () => has2,
  head: () => first,
  identity: () => identity,
  include: () => contains,
  includes: () => contains,
  indexBy: () => indexBy_default,
  indexOf: () => indexOf_default,
  initial: () => initial,
  inject: () => reduce_default,
  intersection: () => intersection,
  invert: () => invert,
  invoke: () => invoke_default,
  isArguments: () => isArguments_default,
  isArray: () => isArray_default,
  isArrayBuffer: () => isArrayBuffer_default,
  isBoolean: () => isBoolean,
  isDataView: () => isDataView_default,
  isDate: () => isDate_default,
  isElement: () => isElement,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isError: () => isError_default,
  isFinite: () => isFinite2,
  isFunction: () => isFunction_default,
  isMap: () => isMap_default,
  isMatch: () => isMatch,
  isNaN: () => isNaN2,
  isNull: () => isNull,
  isNumber: () => isNumber_default,
  isObject: () => isObject,
  isRegExp: () => isRegExp_default,
  isSet: () => isSet_default,
  isString: () => isString_default,
  isSymbol: () => isSymbol_default,
  isTypedArray: () => isTypedArray_default,
  isUndefined: () => isUndefined,
  isWeakMap: () => isWeakMap_default,
  isWeakSet: () => isWeakSet_default,
  iteratee: () => iteratee,
  keys: () => keys,
  last: () => last,
  lastIndexOf: () => lastIndexOf_default,
  map: () => map,
  mapObject: () => mapObject,
  matcher: () => matcher,
  matches: () => matcher,
  max: () => max,
  memoize: () => memoize,
  methods: () => functions,
  min: () => min,
  mixin: () => mixin,
  negate: () => negate,
  noop: () => noop,
  now: () => now_default,
  object: () => object,
  omit: () => omit_default,
  once: () => once_default,
  pairs: () => pairs,
  partial: () => partial_default,
  partition: () => partition_default,
  pick: () => pick_default,
  pluck: () => pluck,
  property: () => property,
  propertyOf: () => propertyOf,
  random: () => random,
  range: () => range,
  reduce: () => reduce_default,
  reduceRight: () => reduceRight_default,
  reject: () => reject,
  rest: () => rest,
  restArguments: () => restArguments,
  result: () => result,
  sample: () => sample,
  select: () => filter,
  shuffle: () => shuffle,
  size: () => size,
  some: () => some,
  sortBy: () => sortBy,
  sortedIndex: () => sortedIndex,
  tail: () => rest,
  take: () => first,
  tap: () => tap,
  template: () => template,
  templateSettings: () => templateSettings_default,
  throttle: () => throttle,
  times: () => times,
  toArray: () => toArray,
  toPath: () => toPath,
  transpose: () => unzip,
  unescape: () => unescape_default,
  union: () => union_default,
  uniq: () => uniq,
  unique: () => uniq,
  uniqueId: () => uniqueId,
  unzip: () => unzip,
  values: () => values,
  where: () => where,
  without: () => without_default,
  wrap: () => wrap,
  zip: () => zip_default
});
var init_index_all = __esm({
  "node_modules/underscore/modules/index-all.js"() {
    init_esm();
    init_index_default();
    init_modules();
  }
});

// node_modules/jsonresume-themeutils/config.js
var require_config = __commonJS({
  "node_modules/jsonresume-themeutils/config.js"(exports, module) {
    init_esm();
    module.exports = {
      date_format: "MMM DD, YYYY",
      gravatar: {
        s: "100",
        r: "pg",
        d: "mm"
      }
    };
  }
});

// node_modules/blueimp-md5/js/md5.js
var require_md5 = __commonJS({
  "node_modules/blueimp-md5/js/md5.js"(exports, module) {
    init_esm();
    (function($) {
      "use strict";
      function safeAdd(x, y) {
        var lsw = (x & 65535) + (y & 65535);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535;
      }
      __name(safeAdd, "safeAdd");
      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      __name(bitRotateLeft, "bitRotateLeft");
      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }
      __name(md5cmn, "md5cmn");
      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
      }
      __name(md5ff, "md5ff");
      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
      }
      __name(md5gg, "md5gg");
      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }
      __name(md5hh, "md5hh");
      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      __name(md5ii, "md5ii");
      function binlMD5(x, len) {
        x[len >> 5] |= 128 << len % 32;
        x[(len + 64 >>> 9 << 4) + 14] = len;
        var i;
        var olda;
        var oldb;
        var oldc;
        var oldd;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (i = 0; i < x.length; i += 16) {
          olda = a;
          oldb = b;
          oldc = c;
          oldd = d;
          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }
        return [a, b, c, d];
      }
      __name(binlMD5, "binlMD5");
      function binl2rstr(input) {
        var i;
        var output = "";
        var length32 = input.length * 32;
        for (i = 0; i < length32; i += 8) {
          output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
        }
        return output;
      }
      __name(binl2rstr, "binl2rstr");
      function rstr2binl(input) {
        var i;
        var output = [];
        output[(input.length >> 2) - 1] = void 0;
        for (i = 0; i < output.length; i += 1) {
          output[i] = 0;
        }
        var length8 = input.length * 8;
        for (i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << i % 32;
        }
        return output;
      }
      __name(rstr2binl, "rstr2binl");
      function rstrMD5(s) {
        return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
      }
      __name(rstrMD5, "rstrMD5");
      function rstrHMACMD5(key, data) {
        var i;
        var bkey = rstr2binl(key);
        var ipad = [];
        var opad = [];
        var hash;
        ipad[15] = opad[15] = void 0;
        if (bkey.length > 16) {
          bkey = binlMD5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 909522486;
          opad[i] = bkey[i] ^ 1549556828;
        }
        hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
      }
      __name(rstrHMACMD5, "rstrHMACMD5");
      function rstr2hex(input) {
        var hexTab = "0123456789abcdef";
        var output = "";
        var x;
        var i;
        for (i = 0; i < input.length; i += 1) {
          x = input.charCodeAt(i);
          output += hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15);
        }
        return output;
      }
      __name(rstr2hex, "rstr2hex");
      function str2rstrUTF8(input) {
        return unescape(encodeURIComponent(input));
      }
      __name(str2rstrUTF8, "str2rstrUTF8");
      function rawMD5(s) {
        return rstrMD5(str2rstrUTF8(s));
      }
      __name(rawMD5, "rawMD5");
      function hexMD5(s) {
        return rstr2hex(rawMD5(s));
      }
      __name(hexMD5, "hexMD5");
      function rawHMACMD5(k, d) {
        return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
      }
      __name(rawHMACMD5, "rawHMACMD5");
      function hexHMACMD5(k, d) {
        return rstr2hex(rawHMACMD5(k, d));
      }
      __name(hexHMACMD5, "hexHMACMD5");
      function md5(string, key, raw) {
        if (!key) {
          if (!raw) {
            return hexMD5(string);
          }
          return rawMD5(string);
        }
        if (!raw) {
          return hexHMACMD5(key, string);
        }
        return rawHMACMD5(key, string);
      }
      __name(md5, "md5");
      if (typeof define === "function" && define.amd) {
        define(function() {
          return md5;
        });
      } else if (typeof module === "object" && module.exports) {
        module.exports = md5;
      } else {
        $.md5 = md5;
      }
    })(exports);
  }
});

// node_modules/gravatar/lib/gravatar.js
var require_gravatar = __commonJS({
  "node_modules/gravatar/lib/gravatar.js"(exports, module) {
    init_esm();
    var md5 = require_md5();
    var querystring = __require("querystring");
    var MD5_REGEX = /^[0-9a-f]{32}$/;
    function params(options) {
      var params2 = {}, removing = { protocol: 1, format: 1 };
      for (var key in options) {
        if (!removing[key]) params2[key] = options[key];
      }
      return params2;
    }
    __name(params, "params");
    function proto(options, protocol) {
      if (!options) return;
      if (typeof options.protocol === "boolean") return options.protocol;
      return options.protocol === "http" ? false : options.protocol === "https" ? true : void 0;
    }
    __name(proto, "proto");
    function getHash(email) {
      email = typeof email === "string" ? email.trim().toLowerCase() : "unspecified";
      return email.match(MD5_REGEX) ? email : md5(email);
    }
    __name(getHash, "getHash");
    function getQueryString(options) {
      var queryData = querystring.stringify(params(options));
      return queryData && "?" + queryData || "";
    }
    __name(getQueryString, "getQueryString");
    var gravatar = module.exports = {
      url: /* @__PURE__ */ __name(function(email, options, protocol) {
        var baseURL = "//www.gravatar.com/avatar/";
        if (options && options.cdn) {
          baseURL = options.cdn + "/avatar/";
          delete options.cdn;
        } else {
          if (options && options.protocol) protocol = proto(options);
          if (typeof protocol !== "undefined") {
            baseURL = protocol ? "https://s.gravatar.com/avatar/" : "http://www.gravatar.com/avatar/";
          }
        }
        var query = getQueryString(options);
        return baseURL + getHash(email) + query;
      }, "url"),
      profile_url: /* @__PURE__ */ __name(function(email, options, https) {
        var format = options != void 0 && options.format != void 0 ? String(options.format) : "json";
        var baseURL;
        if (options && options.cdn) {
          baseURL = options.cdn + "/";
          delete options.cdn;
        } else {
          if (options && options.protocol) https = proto(options);
          var baseURL = https && "https://secure.gravatar.com/" || "http://www.gravatar.com/";
        }
        var query = getQueryString(options);
        return baseURL + getHash(email) + "." + format + query;
      }, "profile_url")
    };
  }
});

// node_modules/gravatar/index.js
var require_gravatar2 = __commonJS({
  "node_modules/gravatar/index.js"(exports, module) {
    init_esm();
    module.exports = require_gravatar();
  }
});

// node_modules/jsonresume-themeutils/basics.js
var require_basics = __commonJS({
  "node_modules/jsonresume-themeutils/basics.js"(exports, module) {
    init_esm();
    var config = require_config();
    var _4 = (init_index_all(), __toCommonJS(index_all_exports));
    var gravatar = require_gravatar2();
    var urlMap = {
      github: "github.com",
      twitter: "twitter.com",
      soundcloud: "soundcloud.com",
      pinterest: "pinterest.com",
      vimeo: "vimeo.com",
      behance: "behance.net",
      codepen: "codepen.io",
      foursquare: "foursquare.com",
      reddit: "reddit.com",
      spotify: "open.spotify.com",
      dribble: "dribbble.com",
      dribbble: "dribbble.com",
      facebook: "facebook.com",
      angellist: "angel.co",
      bitbucket: "bitbucket.org",
      exercism: "exercism.io",
      instagram: "instagram.com",
      googleplus: "plus.google.com",
      gratipay: "gratipay.com",
      hackernews: "news.ycombinator.com",
      lastfm: "last.fm",
      stackexchange: "stackexchange.com",
      stackoverflow: "stackoverflow.com",
      tumblr: "tumblr.com",
      youtube: "youtube.com",
      medium: "medium.com",
      blogger: "blogspot.com",
      meetup: "meetup.com",
      flickr: "flickr.com",
      telegram: "telegram.me"
    };
    function getPictureFromEmail(email) {
      return gravatar.url(email, config.gravatar, "https");
    }
    __name(getPictureFromEmail, "getPictureFromEmail");
    function getUrlForPicture(resume2) {
      return resume2.basics.picture || getPictureFromEmail(resume2.basics.email);
    }
    __name(getUrlForPicture, "getUrlForPicture");
    function getProfile(resume2, network) {
      var profiles = resume2.basics.profiles;
      return _4.find(profiles, function(profile) {
        return profile.network.toLowerCase() === network.toLowerCase();
      });
    }
    __name(getProfile, "getProfile");
    function getUrlForProfile(resume2, network) {
      var url, username, profile = getProfile(resume2, network);
      if (profile.url) {
        return profile.url;
      }
      username = profile.username;
      url = urlMap[network];
      if (!username && !url) {
        return;
      }
      if (network === "medium" && !/^@.*/.test(username)) {
        username = "@" + username;
      }
      switch (network) {
        case "skype":
          return "skype:" + username + "?call";
        case "reddit":
        case "spotify":
        case "lastfm":
        case "foursquare":
        case "youtube":
          return "//" + url + "/user/" + username;
        case "hackernews":
          return "//" + url + "/user?id=" + username;
        case "stackexchange":
        case "stackoverflow":
          return "//" + url + "/users/" + username;
        case "tumblr":
        case "blogger":
          return "//" + username + "." + url;
        case "meetup":
          return "//" + url + "/members/" + username;
        case "flickr":
          return "//" + url + "/people/" + username;
        default:
          return "//" + url + "/" + username;
      }
    }
    __name(getUrlForProfile, "getUrlForProfile");
    module.exports = {
      getUrlForPicture,
      getProfile,
      getUrlForProfile
    };
  }
});

// node_modules/jsonresume-themeutils/common.js
var require_common = __commonJS({
  "node_modules/jsonresume-themeutils/common.js"(exports, module) {
    init_esm();
    var config = require_config();
    var moment = require_moment();
    function getFormattedDate(date, date_format) {
      var DATE_FORMAT_INPUT = "YYYY-MM-DD";
      date_format = date_format || config.date_format;
      return moment(date, DATE_FORMAT_INPUT).format(date_format);
    }
    __name(getFormattedDate, "getFormattedDate");
    function humanizeDuration(duration) {
      var days, months = duration.months(), years = duration.years(), month_str = months > 1 ? "months" : "month", year_str = years > 1 ? "years" : "year";
      if (months && years) {
        return years + " " + year_str + " " + months + " " + month_str;
      }
      if (months) {
        return months + " " + month_str;
      }
      if (years) {
        return years + " " + year_str;
      }
      days = duration.days();
      return days > 1 ? days + " days" : days + " day";
    }
    __name(humanizeDuration, "humanizeDuration");
    function getDuration(start_date, end_date, humanize) {
      var duration;
      start_date = new Date(start_date);
      end_date = new Date(end_date);
      duration = moment.duration(end_date.getTime() - start_date.getTime());
      return humanize ? humanizeDuration(duration) : duration;
    }
    __name(getDuration, "getDuration");
    module.exports = {
      getFormattedDate,
      getDuration
    };
  }
});

// node_modules/jsonresume-themeutils/languages.js
var require_languages = __commonJS({
  "node_modules/jsonresume-themeutils/languages.js"(exports, module) {
    init_esm();
    var config = require_config();
    var _4 = (init_index_all(), __toCommonJS(index_all_exports));
    function getNativeLanguage(resume2) {
      var languages = resume2.languages;
      return _4.find(languages, function(language) {
        return language.fluency === "Native speaker";
      });
    }
    __name(getNativeLanguage, "getNativeLanguage");
    module.exports = {
      getNativeLanguage
    };
  }
});

// node_modules/jsonresume-themeutils/index.js
var require_jsonresume_themeutils = __commonJS({
  "node_modules/jsonresume-themeutils/index.js"(exports, module) {
    init_esm();
    var config = require_config();
    var basics = require_basics();
    var common = require_common();
    var languages = require_languages();
    var _4 = (init_index_all(), __toCommonJS(index_all_exports));
    function setConfig(opts) {
      _4.extend(config, opts || {});
    }
    __name(setConfig, "setConfig");
    module.exports = {
      setConfig,
      getUrlForPicture: basics.getUrlForPicture,
      getProfile: basics.getProfile,
      getUrlForProfile: basics.getUrlForProfile,
      getFormattedDate: common.getFormattedDate,
      getDuration: common.getDuration,
      getNativeLanguage: languages.getNativeLanguage
    };
  }
});

// node_modules/entities/maps/entities.json
var require_entities = __commonJS({
  "node_modules/entities/maps/entities.json"(exports, module) {
    module.exports = { Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", amp: "&", AMP: "&", andand: "⩕", And: "⩓", and: "∧", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angmsd: "∡", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", apacir: "⩯", ap: "≈", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxHd: "╤", boxhD: "╥", boxHD: "╦", boxhu: "┴", boxHu: "╧", boxhU: "╨", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsolb: "⧅", bsol: "\\", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", capand: "⩄", capbrcup: "⩉", capcap: "⩋", cap: "∩", Cap: "⋒", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cir: "○", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cup: "∪", Cup: "⋓", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", Darr: "↡", dArr: "⇓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", ddagger: "‡", ddarr: "⇊", DD: "ⅅ", dd: "ⅆ", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrowBar: "⤓", downarrow: "↓", DownArrow: "↓", Downarrow: "⇓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVectorBar: "⥖", DownLeftVector: "↽", DownRightTeeVector: "⥟", DownRightVectorBar: "⥗", DownRightVector: "⇁", DownTeeArrow: "↧", DownTee: "⊤", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", Ecirc: "Ê", ecirc: "ê", ecir: "≖", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", edot: "ė", eDot: "≑", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp13: " ", emsp14: " ", emsp: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", ge: "≥", gE: "≧", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", gescc: "⪩", ges: "⩾", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gla: "⪥", gl: "≷", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gt: ">", GT: ">", Gt: "≫", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", harrcir: "⥈", harr: "↔", hArr: "⇔", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", Im: "ℑ", imof: "⊷", imped: "Ƶ", Implies: "⇒", incare: "℅", in: "∈", infin: "∞", infintie: "⧝", inodot: "ı", intcal: "⊺", int: "∫", Int: "∬", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larrb: "⇤", larrbfs: "⤟", larr: "←", Larr: "↞", lArr: "⇐", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", latail: "⤙", lAtail: "⤛", lat: "⪫", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", LeftArrowBar: "⇤", leftarrow: "←", LeftArrow: "←", Leftarrow: "⇐", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVectorBar: "⥙", LeftDownVector: "⇃", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTeeArrow: "↤", LeftTee: "⊣", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangleBar: "⧏", LeftTriangle: "⊲", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVectorBar: "⥘", LeftUpVector: "↿", LeftVectorBar: "⥒", LeftVector: "↼", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", lescc: "⪨", les: "⩽", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", llarr: "⇇", ll: "≪", Ll: "⋘", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoustache: "⎰", lmoust: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftrightarrow: "⟷", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longmapsto: "⟼", longrightarrow: "⟶", LongRightArrow: "⟶", Longrightarrow: "⟹", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", lt: "<", LT: "<", Lt: "≪", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", midast: "*", midcir: "⫰", mid: "∣", middot: "·", minusb: "⊟", minus: "−", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natural: "♮", naturals: "ℕ", natur: "♮", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", ne: "≠", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: "\n", nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nlE: "≦̸", nle: "≰", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangleBar: "⧏̸", NotLeftTriangle: "⋪", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangleBar: "⧐̸", NotRightTriangle: "⋫", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", nparallel: "∦", npar: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", nprec: "⊀", npreceq: "⪯̸", npre: "⪯̸", nrarrc: "⤳̸", nrarr: "↛", nrArr: "⇏", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", Ocirc: "Ô", ocirc: "ô", ocir: "⊚", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", orarr: "↻", Or: "⩔", or: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", otimesas: "⨶", Otimes: "⨷", otimes: "⊗", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", para: "¶", parallel: "∥", par: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plus: "+", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", prap: "⪷", Pr: "⪻", pr: "≺", prcue: "≼", precapprox: "⪷", prec: "≺", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", pre: "⪯", prE: "⪳", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportional: "∝", Proportion: "∷", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarr: "→", Rarr: "↠", rArr: "⇒", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", Re: "ℜ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrowBar: "⇥", rightarrow: "→", RightArrow: "→", Rightarrow: "⇒", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVectorBar: "⥕", RightDownVector: "⇂", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTeeArrow: "↦", RightTee: "⊢", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangleBar: "⧐", RightTriangle: "⊳", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVectorBar: "⥔", RightUpVector: "↾", RightVectorBar: "⥓", RightVector: "⇀", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoustache: "⎱", rmoust: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", scap: "⪸", Scaron: "Š", scaron: "š", Sc: "⪼", sc: "≻", sccue: "≽", sce: "⪰", scE: "⪴", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdotb: "⊡", sdot: "⋅", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", solbar: "⌿", solb: "⧄", sol: "/", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squ: "□", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succapprox: "⪸", succ: "≻", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", sup: "⊃", Sup: "⋑", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", therefore: "∴", Therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", timesbar: "⨱", timesb: "⊠", times: "×", timesd: "⨰", tint: "∭", toea: "⤨", topbot: "⌶", topcir: "⫱", top: "⊤", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", uarr: "↑", Uarr: "↟", uArr: "⇑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrowBar: "⤒", uparrow: "↑", UpArrow: "↑", Uparrow: "⇑", UpArrowDownArrow: "⇅", updownarrow: "↕", UpDownArrow: "↕", Updownarrow: "⇕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTeeArrow: "↥", UpTee: "⊥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", Vcy: "В", vcy: "в", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", veebar: "⊻", vee: "∨", Vee: "⋁", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xharr: "⟷", xhArr: "⟺", Xi: "Ξ", xi: "ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", yuml: "ÿ", Yuml: "Ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", zfr: "𝔷", Zfr: "ℨ", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
  }
});

// node_modules/markdown-it/lib/common/entities.js
var require_entities2 = __commonJS({
  "node_modules/markdown-it/lib/common/entities.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = require_entities();
  }
});

// node_modules/uc.micro/categories/P/regex.js
var require_regex = __commonJS({
  "node_modules/uc.micro/categories/P/regex.js"(exports, module) {
    init_esm();
    module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
  }
});

// node_modules/mdurl/encode.js
var require_encode = __commonJS({
  "node_modules/mdurl/encode.js"(exports, module) {
    "use strict";
    init_esm();
    var encodeCache = {};
    function getEncodeCache(exclude) {
      var i, ch, cache = encodeCache[exclude];
      if (cache) {
        return cache;
      }
      cache = encodeCache[exclude] = [];
      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        if (/^[0-9a-z]$/i.test(ch)) {
          cache.push(ch);
        } else {
          cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
        }
      }
      for (i = 0; i < exclude.length; i++) {
        cache[exclude.charCodeAt(i)] = exclude[i];
      }
      return cache;
    }
    __name(getEncodeCache, "getEncodeCache");
    function encode(string, exclude, keepEscaped) {
      var i, l, code, nextCode, cache, result2 = "";
      if (typeof exclude !== "string") {
        keepEscaped = exclude;
        exclude = encode.defaultChars;
      }
      if (typeof keepEscaped === "undefined") {
        keepEscaped = true;
      }
      cache = getEncodeCache(exclude);
      for (i = 0, l = string.length; i < l; i++) {
        code = string.charCodeAt(i);
        if (keepEscaped && code === 37 && i + 2 < l) {
          if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
            result2 += string.slice(i, i + 3);
            i += 2;
            continue;
          }
        }
        if (code < 128) {
          result2 += cache[code];
          continue;
        }
        if (code >= 55296 && code <= 57343) {
          if (code >= 55296 && code <= 56319 && i + 1 < l) {
            nextCode = string.charCodeAt(i + 1);
            if (nextCode >= 56320 && nextCode <= 57343) {
              result2 += encodeURIComponent(string[i] + string[i + 1]);
              i++;
              continue;
            }
          }
          result2 += "%EF%BF%BD";
          continue;
        }
        result2 += encodeURIComponent(string[i]);
      }
      return result2;
    }
    __name(encode, "encode");
    encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
    encode.componentChars = "-_.!~*'()";
    module.exports = encode;
  }
});

// node_modules/mdurl/decode.js
var require_decode = __commonJS({
  "node_modules/mdurl/decode.js"(exports, module) {
    "use strict";
    init_esm();
    var decodeCache = {};
    function getDecodeCache(exclude) {
      var i, ch, cache = decodeCache[exclude];
      if (cache) {
        return cache;
      }
      cache = decodeCache[exclude] = [];
      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        cache.push(ch);
      }
      for (i = 0; i < exclude.length; i++) {
        ch = exclude.charCodeAt(i);
        cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
      }
      return cache;
    }
    __name(getDecodeCache, "getDecodeCache");
    function decode(string, exclude) {
      var cache;
      if (typeof exclude !== "string") {
        exclude = decode.defaultChars;
      }
      cache = getDecodeCache(exclude);
      return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
        var i, l, b1, b2, b3, b4, chr, result2 = "";
        for (i = 0, l = seq.length; i < l; i += 3) {
          b1 = parseInt(seq.slice(i + 1, i + 3), 16);
          if (b1 < 128) {
            result2 += cache[b1];
            continue;
          }
          if ((b1 & 224) === 192 && i + 3 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            if ((b2 & 192) === 128) {
              chr = b1 << 6 & 1984 | b2 & 63;
              if (chr < 128) {
                result2 += "��";
              } else {
                result2 += String.fromCharCode(chr);
              }
              i += 3;
              continue;
            }
          }
          if ((b1 & 240) === 224 && i + 6 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            b3 = parseInt(seq.slice(i + 7, i + 9), 16);
            if ((b2 & 192) === 128 && (b3 & 192) === 128) {
              chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
              if (chr < 2048 || chr >= 55296 && chr <= 57343) {
                result2 += "���";
              } else {
                result2 += String.fromCharCode(chr);
              }
              i += 6;
              continue;
            }
          }
          if ((b1 & 248) === 240 && i + 9 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            b3 = parseInt(seq.slice(i + 7, i + 9), 16);
            b4 = parseInt(seq.slice(i + 10, i + 12), 16);
            if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
              chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
              if (chr < 65536 || chr > 1114111) {
                result2 += "����";
              } else {
                chr -= 65536;
                result2 += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
              }
              i += 9;
              continue;
            }
          }
          result2 += "�";
        }
        return result2;
      });
    }
    __name(decode, "decode");
    decode.defaultChars = ";/?:@&=+$,#";
    decode.componentChars = "";
    module.exports = decode;
  }
});

// node_modules/mdurl/format.js
var require_format = __commonJS({
  "node_modules/mdurl/format.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function format(url) {
      var result2 = "";
      result2 += url.protocol || "";
      result2 += url.slashes ? "//" : "";
      result2 += url.auth ? url.auth + "@" : "";
      if (url.hostname && url.hostname.indexOf(":") !== -1) {
        result2 += "[" + url.hostname + "]";
      } else {
        result2 += url.hostname || "";
      }
      result2 += url.port ? ":" + url.port : "";
      result2 += url.pathname || "";
      result2 += url.search || "";
      result2 += url.hash || "";
      return result2;
    }, "format");
  }
});

// node_modules/mdurl/parse.js
var require_parse = __commonJS({
  "node_modules/mdurl/parse.js"(exports, module) {
    "use strict";
    init_esm();
    function Url() {
      this.protocol = null;
      this.slashes = null;
      this.auth = null;
      this.port = null;
      this.hostname = null;
      this.hash = null;
      this.search = null;
      this.pathname = null;
    }
    __name(Url, "Url");
    var protocolPattern = /^([a-z0-9.+-]+:)/i;
    var portPattern = /:[0-9]*$/;
    var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
    var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
    var autoEscape = ["'"].concat(unwise);
    var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
    var hostEndingChars = ["/", "?", "#"];
    var hostnameMaxLen = 255;
    var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    var hostlessProtocol = {
      "javascript": true,
      "javascript:": true
    };
    var slashedProtocol = {
      "http": true,
      "https": true,
      "ftp": true,
      "gopher": true,
      "file": true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    };
    function urlParse(url, slashesDenoteHost) {
      if (url && url instanceof Url) {
        return url;
      }
      var u = new Url();
      u.parse(url, slashesDenoteHost);
      return u;
    }
    __name(urlParse, "urlParse");
    Url.prototype.parse = function(url, slashesDenoteHost) {
      var i, l, lowerProto, hec, slashes, rest2 = url;
      rest2 = rest2.trim();
      if (!slashesDenoteHost && url.split("#").length === 1) {
        var simplePath = simplePathPattern.exec(rest2);
        if (simplePath) {
          this.pathname = simplePath[1];
          if (simplePath[2]) {
            this.search = simplePath[2];
          }
          return this;
        }
      }
      var proto = protocolPattern.exec(rest2);
      if (proto) {
        proto = proto[0];
        lowerProto = proto.toLowerCase();
        this.protocol = proto;
        rest2 = rest2.substr(proto.length);
      }
      if (slashesDenoteHost || proto || rest2.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        slashes = rest2.substr(0, 2) === "//";
        if (slashes && !(proto && hostlessProtocol[proto])) {
          rest2 = rest2.substr(2);
          this.slashes = true;
        }
      }
      if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
        var hostEnd = -1;
        for (i = 0; i < hostEndingChars.length; i++) {
          hec = rest2.indexOf(hostEndingChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
            hostEnd = hec;
          }
        }
        var auth, atSign;
        if (hostEnd === -1) {
          atSign = rest2.lastIndexOf("@");
        } else {
          atSign = rest2.lastIndexOf("@", hostEnd);
        }
        if (atSign !== -1) {
          auth = rest2.slice(0, atSign);
          rest2 = rest2.slice(atSign + 1);
          this.auth = auth;
        }
        hostEnd = -1;
        for (i = 0; i < nonHostChars.length; i++) {
          hec = rest2.indexOf(nonHostChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
            hostEnd = hec;
          }
        }
        if (hostEnd === -1) {
          hostEnd = rest2.length;
        }
        if (rest2[hostEnd - 1] === ":") {
          hostEnd--;
        }
        var host = rest2.slice(0, hostEnd);
        rest2 = rest2.slice(hostEnd);
        this.parseHost(host);
        this.hostname = this.hostname || "";
        var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!ipv6Hostname) {
          var hostparts = this.hostname.split(/\./);
          for (i = 0, l = hostparts.length; i < l; i++) {
            var part = hostparts[i];
            if (!part) {
              continue;
            }
            if (!part.match(hostnamePartPattern)) {
              var newpart = "";
              for (var j = 0, k = part.length; j < k; j++) {
                if (part.charCodeAt(j) > 127) {
                  newpart += "x";
                } else {
                  newpart += part[j];
                }
              }
              if (!newpart.match(hostnamePartPattern)) {
                var validParts = hostparts.slice(0, i);
                var notHost = hostparts.slice(i + 1);
                var bit = part.match(hostnamePartStart);
                if (bit) {
                  validParts.push(bit[1]);
                  notHost.unshift(bit[2]);
                }
                if (notHost.length) {
                  rest2 = notHost.join(".") + rest2;
                }
                this.hostname = validParts.join(".");
                break;
              }
            }
          }
        }
        if (this.hostname.length > hostnameMaxLen) {
          this.hostname = "";
        }
        if (ipv6Hostname) {
          this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        }
      }
      var hash = rest2.indexOf("#");
      if (hash !== -1) {
        this.hash = rest2.substr(hash);
        rest2 = rest2.slice(0, hash);
      }
      var qm = rest2.indexOf("?");
      if (qm !== -1) {
        this.search = rest2.substr(qm);
        rest2 = rest2.slice(0, qm);
      }
      if (rest2) {
        this.pathname = rest2;
      }
      if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
        this.pathname = "";
      }
      return this;
    };
    Url.prototype.parseHost = function(host) {
      var port = portPattern.exec(host);
      if (port) {
        port = port[0];
        if (port !== ":") {
          this.port = port.substr(1);
        }
        host = host.substr(0, host.length - port.length);
      }
      if (host) {
        this.hostname = host;
      }
    };
    module.exports = urlParse;
  }
});

// node_modules/mdurl/index.js
var require_mdurl = __commonJS({
  "node_modules/mdurl/index.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports.encode = require_encode();
    module.exports.decode = require_decode();
    module.exports.format = require_format();
    module.exports.parse = require_parse();
  }
});

// node_modules/uc.micro/properties/Any/regex.js
var require_regex2 = __commonJS({
  "node_modules/uc.micro/properties/Any/regex.js"(exports, module) {
    init_esm();
    module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  }
});

// node_modules/uc.micro/categories/Cc/regex.js
var require_regex3 = __commonJS({
  "node_modules/uc.micro/categories/Cc/regex.js"(exports, module) {
    init_esm();
    module.exports = /[\0-\x1F\x7F-\x9F]/;
  }
});

// node_modules/uc.micro/categories/Cf/regex.js
var require_regex4 = __commonJS({
  "node_modules/uc.micro/categories/Cf/regex.js"(exports, module) {
    init_esm();
    module.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
  }
});

// node_modules/uc.micro/categories/Z/regex.js
var require_regex5 = __commonJS({
  "node_modules/uc.micro/categories/Z/regex.js"(exports, module) {
    init_esm();
    module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  }
});

// node_modules/uc.micro/index.js
var require_uc = __commonJS({
  "node_modules/uc.micro/index.js"(exports) {
    "use strict";
    init_esm();
    exports.Any = require_regex2();
    exports.Cc = require_regex3();
    exports.Cf = require_regex4();
    exports.P = require_regex();
    exports.Z = require_regex5();
  }
});

// node_modules/markdown-it/lib/common/utils.js
var require_utils = __commonJS({
  "node_modules/markdown-it/lib/common/utils.js"(exports) {
    "use strict";
    init_esm();
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    __name(_class, "_class");
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    __name(isString, "isString");
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function has3(object2, key) {
      return _hasOwnProperty.call(object2, key);
    }
    __name(has3, "has");
    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function(source) {
        if (!source) {
          return;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be object");
        }
        Object.keys(source).forEach(function(key) {
          obj[key] = source[key];
        });
      });
      return obj;
    }
    __name(assign, "assign");
    function arrayReplaceAt(src, pos, newElements) {
      return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
    }
    __name(arrayReplaceAt, "arrayReplaceAt");
    function isValidEntityCode(c) {
      if (c >= 55296 && c <= 57343) {
        return false;
      }
      if (c >= 64976 && c <= 65007) {
        return false;
      }
      if ((c & 65535) === 65535 || (c & 65535) === 65534) {
        return false;
      }
      if (c >= 0 && c <= 8) {
        return false;
      }
      if (c === 11) {
        return false;
      }
      if (c >= 14 && c <= 31) {
        return false;
      }
      if (c >= 127 && c <= 159) {
        return false;
      }
      if (c > 1114111) {
        return false;
      }
      return true;
    }
    __name(isValidEntityCode, "isValidEntityCode");
    function fromCodePoint(c) {
      if (c > 65535) {
        c -= 65536;
        var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
        return String.fromCharCode(surrogate1, surrogate2);
      }
      return String.fromCharCode(c);
    }
    __name(fromCodePoint, "fromCodePoint");
    var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
    var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
    var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
    var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
    var entities = require_entities2();
    function replaceEntityPattern(match, name) {
      var code = 0;
      if (has3(entities, name)) {
        return entities[name];
      }
      if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
        code = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
        if (isValidEntityCode(code)) {
          return fromCodePoint(code);
        }
      }
      return match;
    }
    __name(replaceEntityPattern, "replaceEntityPattern");
    function unescapeMd(str) {
      if (str.indexOf("\\") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_MD_RE, "$1");
    }
    __name(unescapeMd, "unescapeMd");
    function unescapeAll(str) {
      if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
        if (escaped) {
          return escaped;
        }
        return replaceEntityPattern(match, entity);
      });
    }
    __name(unescapeAll, "unescapeAll");
    var HTML_ESCAPE_TEST_RE = /[&<>"]/;
    var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
    var HTML_REPLACEMENTS = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function replaceUnsafeChar(ch) {
      return HTML_REPLACEMENTS[ch];
    }
    __name(replaceUnsafeChar, "replaceUnsafeChar");
    function escapeHtml(str) {
      if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
      }
      return str;
    }
    __name(escapeHtml, "escapeHtml");
    var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
    function escapeRE(str) {
      return str.replace(REGEXP_ESCAPE_RE, "\\$&");
    }
    __name(escapeRE, "escapeRE");
    function isSpace(code) {
      switch (code) {
        case 9:
        case 32:
          return true;
      }
      return false;
    }
    __name(isSpace, "isSpace");
    function isWhiteSpace(code) {
      if (code >= 8192 && code <= 8202) {
        return true;
      }
      switch (code) {
        case 9:
        // \t
        case 10:
        // \n
        case 11:
        // \v
        case 12:
        // \f
        case 13:
        // \r
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return true;
      }
      return false;
    }
    __name(isWhiteSpace, "isWhiteSpace");
    var UNICODE_PUNCT_RE = require_regex();
    function isPunctChar(ch) {
      return UNICODE_PUNCT_RE.test(ch);
    }
    __name(isPunctChar, "isPunctChar");
    function isMdAsciiPunct(ch) {
      switch (ch) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }
    __name(isMdAsciiPunct, "isMdAsciiPunct");
    function normalizeReference(str) {
      return str.trim().replace(/\s+/g, " ").toUpperCase();
    }
    __name(normalizeReference, "normalizeReference");
    exports.lib = {};
    exports.lib.mdurl = require_mdurl();
    exports.lib.ucmicro = require_uc();
    exports.assign = assign;
    exports.isString = isString;
    exports.has = has3;
    exports.unescapeMd = unescapeMd;
    exports.unescapeAll = unescapeAll;
    exports.isValidEntityCode = isValidEntityCode;
    exports.fromCodePoint = fromCodePoint;
    exports.escapeHtml = escapeHtml;
    exports.arrayReplaceAt = arrayReplaceAt;
    exports.isSpace = isSpace;
    exports.isWhiteSpace = isWhiteSpace;
    exports.isMdAsciiPunct = isMdAsciiPunct;
    exports.isPunctChar = isPunctChar;
    exports.escapeRE = escapeRE;
    exports.normalizeReference = normalizeReference;
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_label.js
var require_parse_link_label = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_label.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function parseLinkLabel(state, start, disableNested) {
      var level, found, marker, prevPos, labelEnd = -1, max2 = state.posMax, oldPos = state.pos;
      state.pos = start + 1;
      level = 1;
      while (state.pos < max2) {
        marker = state.src.charCodeAt(state.pos);
        if (marker === 93) {
          level--;
          if (level === 0) {
            found = true;
            break;
          }
        }
        prevPos = state.pos;
        state.md.inline.skipToken(state);
        if (marker === 91) {
          if (prevPos === state.pos - 1) {
            level++;
          } else if (disableNested) {
            state.pos = oldPos;
            return -1;
          }
        }
      }
      if (found) {
        labelEnd = state.pos;
      }
      state.pos = oldPos;
      return labelEnd;
    }, "parseLinkLabel");
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_destination.js
var require_parse_link_destination = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_destination.js"(exports, module) {
    "use strict";
    init_esm();
    var isSpace = require_utils().isSpace;
    var unescapeAll = require_utils().unescapeAll;
    module.exports = /* @__PURE__ */ __name(function parseLinkDestination(str, pos, max2) {
      var code, level, lines = 0, start = pos, result2 = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ""
      };
      if (str.charCodeAt(pos) === 60) {
        pos++;
        while (pos < max2) {
          code = str.charCodeAt(pos);
          if (code === 10 || isSpace(code)) {
            return result2;
          }
          if (code === 62) {
            result2.pos = pos + 1;
            result2.str = unescapeAll(str.slice(start + 1, pos));
            result2.ok = true;
            return result2;
          }
          if (code === 92 && pos + 1 < max2) {
            pos += 2;
            continue;
          }
          pos++;
        }
        return result2;
      }
      level = 0;
      while (pos < max2) {
        code = str.charCodeAt(pos);
        if (code === 32) {
          break;
        }
        if (code < 32 || code === 127) {
          break;
        }
        if (code === 92 && pos + 1 < max2) {
          pos += 2;
          continue;
        }
        if (code === 40) {
          level++;
          if (level > 1) {
            break;
          }
        }
        if (code === 41) {
          level--;
          if (level < 0) {
            break;
          }
        }
        pos++;
      }
      if (start === pos) {
        return result2;
      }
      result2.str = unescapeAll(str.slice(start, pos));
      result2.lines = lines;
      result2.pos = pos;
      result2.ok = true;
      return result2;
    }, "parseLinkDestination");
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_title.js
var require_parse_link_title = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_title.js"(exports, module) {
    "use strict";
    init_esm();
    var unescapeAll = require_utils().unescapeAll;
    module.exports = /* @__PURE__ */ __name(function parseLinkTitle(str, pos, max2) {
      var code, marker, lines = 0, start = pos, result2 = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ""
      };
      if (pos >= max2) {
        return result2;
      }
      marker = str.charCodeAt(pos);
      if (marker !== 34 && marker !== 39 && marker !== 40) {
        return result2;
      }
      pos++;
      if (marker === 40) {
        marker = 41;
      }
      while (pos < max2) {
        code = str.charCodeAt(pos);
        if (code === marker) {
          result2.pos = pos + 1;
          result2.lines = lines;
          result2.str = unescapeAll(str.slice(start + 1, pos));
          result2.ok = true;
          return result2;
        } else if (code === 10) {
          lines++;
        } else if (code === 92 && pos + 1 < max2) {
          pos++;
          if (str.charCodeAt(pos) === 10) {
            lines++;
          }
        }
        pos++;
      }
      return result2;
    }, "parseLinkTitle");
  }
});

// node_modules/markdown-it/lib/helpers/index.js
var require_helpers = __commonJS({
  "node_modules/markdown-it/lib/helpers/index.js"(exports) {
    "use strict";
    init_esm();
    exports.parseLinkLabel = require_parse_link_label();
    exports.parseLinkDestination = require_parse_link_destination();
    exports.parseLinkTitle = require_parse_link_title();
  }
});

// node_modules/markdown-it/lib/renderer.js
var require_renderer = __commonJS({
  "node_modules/markdown-it/lib/renderer.js"(exports, module) {
    "use strict";
    init_esm();
    var assign = require_utils().assign;
    var unescapeAll = require_utils().unescapeAll;
    var escapeHtml = require_utils().escapeHtml;
    var default_rules = {};
    default_rules.code_inline = function(tokens, idx, options, env, slf) {
      var token = tokens[idx], attrs = slf.renderAttrs(token);
      return "<code" + (attrs ? " " + attrs : "") + ">" + escapeHtml(tokens[idx].content) + "</code>";
    };
    default_rules.code_block = function(tokens, idx, options, env, slf) {
      var token = tokens[idx], attrs = slf.renderAttrs(token);
      return "<pre" + (attrs ? " " + attrs : "") + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
    };
    default_rules.fence = function(tokens, idx, options, env, slf) {
      var token = tokens[idx], info = token.info ? unescapeAll(token.info).trim() : "", langName = "", highlighted, i, tmpAttrs, tmpToken;
      if (info) {
        langName = info.split(/\s+/g)[0];
      }
      if (options.highlight) {
        highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
      } else {
        highlighted = escapeHtml(token.content);
      }
      if (highlighted.indexOf("<pre") === 0) {
        return highlighted + "\n";
      }
      if (info) {
        i = token.attrIndex("class");
        tmpAttrs = token.attrs ? token.attrs.slice() : [];
        if (i < 0) {
          tmpAttrs.push(["class", options.langPrefix + langName]);
        } else {
          tmpAttrs[i] += " " + options.langPrefix + langName;
        }
        tmpToken = {
          attrs: tmpAttrs
        };
        return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
      }
      return "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
    };
    default_rules.image = function(tokens, idx, options, env, slf) {
      var token = tokens[idx];
      token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
      return slf.renderToken(tokens, idx, options);
    };
    default_rules.hardbreak = function(tokens, idx, options) {
      return options.xhtmlOut ? "<br />\n" : "<br>\n";
    };
    default_rules.softbreak = function(tokens, idx, options) {
      return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
    };
    default_rules.text = function(tokens, idx) {
      return escapeHtml(tokens[idx].content);
    };
    default_rules.html_block = function(tokens, idx) {
      return tokens[idx].content;
    };
    default_rules.html_inline = function(tokens, idx) {
      return tokens[idx].content;
    };
    function Renderer() {
      this.rules = assign({}, default_rules);
    }
    __name(Renderer, "Renderer");
    Renderer.prototype.renderAttrs = /* @__PURE__ */ __name(function renderAttrs(token) {
      var i, l, result2;
      if (!token.attrs) {
        return "";
      }
      result2 = "";
      for (i = 0, l = token.attrs.length; i < l; i++) {
        result2 += " " + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
      }
      return result2;
    }, "renderAttrs");
    Renderer.prototype.renderToken = /* @__PURE__ */ __name(function renderToken(tokens, idx, options) {
      var nextToken, result2 = "", needLf = false, token = tokens[idx];
      if (token.hidden) {
        return "";
      }
      if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
        result2 += "\n";
      }
      result2 += (token.nesting === -1 ? "</" : "<") + token.tag;
      result2 += this.renderAttrs(token);
      if (token.nesting === 0 && options.xhtmlOut) {
        result2 += " /";
      }
      if (token.block) {
        needLf = true;
        if (token.nesting === 1) {
          if (idx + 1 < tokens.length) {
            nextToken = tokens[idx + 1];
            if (nextToken.type === "inline" || nextToken.hidden) {
              needLf = false;
            } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
              needLf = false;
            }
          }
        }
      }
      result2 += needLf ? ">\n" : ">";
      return result2;
    }, "renderToken");
    Renderer.prototype.renderInline = function(tokens, options, env) {
      var type, result2 = "", rules = this.rules;
      for (var i = 0, len = tokens.length; i < len; i++) {
        type = tokens[i].type;
        if (typeof rules[type] !== "undefined") {
          result2 += rules[type](tokens, i, options, env, this);
        } else {
          result2 += this.renderToken(tokens, i, options);
        }
      }
      return result2;
    };
    Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
      var result2 = "";
      for (var i = 0, len = tokens.length; i < len; i++) {
        if (tokens[i].type === "text") {
          result2 += tokens[i].content;
        } else if (tokens[i].type === "image") {
          result2 += this.renderInlineAsText(tokens[i].children, options, env);
        }
      }
      return result2;
    };
    Renderer.prototype.render = function(tokens, options, env) {
      var i, len, type, result2 = "", rules = this.rules;
      for (i = 0, len = tokens.length; i < len; i++) {
        type = tokens[i].type;
        if (type === "inline") {
          result2 += this.renderInline(tokens[i].children, options, env);
        } else if (typeof rules[type] !== "undefined") {
          result2 += rules[tokens[i].type](tokens, i, options, env, this);
        } else {
          result2 += this.renderToken(tokens, i, options, env);
        }
      }
      return result2;
    };
    module.exports = Renderer;
  }
});

// node_modules/markdown-it/lib/ruler.js
var require_ruler = __commonJS({
  "node_modules/markdown-it/lib/ruler.js"(exports, module) {
    "use strict";
    init_esm();
    function Ruler() {
      this.__rules__ = [];
      this.__cache__ = null;
    }
    __name(Ruler, "Ruler");
    Ruler.prototype.__find__ = function(name) {
      for (var i = 0; i < this.__rules__.length; i++) {
        if (this.__rules__[i].name === name) {
          return i;
        }
      }
      return -1;
    };
    Ruler.prototype.__compile__ = function() {
      var self2 = this;
      var chains = [""];
      self2.__rules__.forEach(function(rule) {
        if (!rule.enabled) {
          return;
        }
        rule.alt.forEach(function(altName) {
          if (chains.indexOf(altName) < 0) {
            chains.push(altName);
          }
        });
      });
      self2.__cache__ = {};
      chains.forEach(function(chain2) {
        self2.__cache__[chain2] = [];
        self2.__rules__.forEach(function(rule) {
          if (!rule.enabled) {
            return;
          }
          if (chain2 && rule.alt.indexOf(chain2) < 0) {
            return;
          }
          self2.__cache__[chain2].push(rule.fn);
        });
      });
    };
    Ruler.prototype.at = function(name, fn, options) {
      var index = this.__find__(name);
      var opt = options || {};
      if (index === -1) {
        throw new Error("Parser rule not found: " + name);
      }
      this.__rules__[index].fn = fn;
      this.__rules__[index].alt = opt.alt || [];
      this.__cache__ = null;
    };
    Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
      var index = this.__find__(beforeName);
      var opt = options || {};
      if (index === -1) {
        throw new Error("Parser rule not found: " + beforeName);
      }
      this.__rules__.splice(index, 0, {
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.after = function(afterName, ruleName, fn, options) {
      var index = this.__find__(afterName);
      var opt = options || {};
      if (index === -1) {
        throw new Error("Parser rule not found: " + afterName);
      }
      this.__rules__.splice(index + 1, 0, {
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.push = function(ruleName, fn, options) {
      var opt = options || {};
      this.__rules__.push({
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.enable = function(list, ignoreInvalid) {
      if (!Array.isArray(list)) {
        list = [list];
      }
      var result2 = [];
      list.forEach(function(name) {
        var idx = this.__find__(name);
        if (idx < 0) {
          if (ignoreInvalid) {
            return;
          }
          throw new Error("Rules manager: invalid rule name " + name);
        }
        this.__rules__[idx].enabled = true;
        result2.push(name);
      }, this);
      this.__cache__ = null;
      return result2;
    };
    Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
      if (!Array.isArray(list)) {
        list = [list];
      }
      this.__rules__.forEach(function(rule) {
        rule.enabled = false;
      });
      this.enable(list, ignoreInvalid);
    };
    Ruler.prototype.disable = function(list, ignoreInvalid) {
      if (!Array.isArray(list)) {
        list = [list];
      }
      var result2 = [];
      list.forEach(function(name) {
        var idx = this.__find__(name);
        if (idx < 0) {
          if (ignoreInvalid) {
            return;
          }
          throw new Error("Rules manager: invalid rule name " + name);
        }
        this.__rules__[idx].enabled = false;
        result2.push(name);
      }, this);
      this.__cache__ = null;
      return result2;
    };
    Ruler.prototype.getRules = function(chainName) {
      if (this.__cache__ === null) {
        this.__compile__();
      }
      return this.__cache__[chainName] || [];
    };
    module.exports = Ruler;
  }
});

// node_modules/markdown-it/lib/rules_core/normalize.js
var require_normalize = __commonJS({
  "node_modules/markdown-it/lib/rules_core/normalize.js"(exports, module) {
    "use strict";
    init_esm();
    var NEWLINES_RE = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g;
    var NULL_RE = /\u0000/g;
    module.exports = /* @__PURE__ */ __name(function inline(state) {
      var str;
      str = state.src.replace(NEWLINES_RE, "\n");
      str = str.replace(NULL_RE, "�");
      state.src = str;
    }, "inline");
  }
});

// node_modules/markdown-it/lib/rules_core/block.js
var require_block = __commonJS({
  "node_modules/markdown-it/lib/rules_core/block.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function block(state) {
      var token;
      if (state.inlineMode) {
        token = new state.Token("inline", "", 0);
        token.content = state.src;
        token.map = [0, 1];
        token.children = [];
        state.tokens.push(token);
      } else {
        state.md.block.parse(state.src, state.md, state.env, state.tokens);
      }
    }, "block");
  }
});

// node_modules/markdown-it/lib/rules_core/inline.js
var require_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_core/inline.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function inline(state) {
      var tokens = state.tokens, tok, i, l;
      for (i = 0, l = tokens.length; i < l; i++) {
        tok = tokens[i];
        if (tok.type === "inline") {
          state.md.inline.parse(tok.content, state.md, state.env, tok.children);
        }
      }
    }, "inline");
  }
});

// node_modules/markdown-it/lib/rules_core/linkify.js
var require_linkify = __commonJS({
  "node_modules/markdown-it/lib/rules_core/linkify.js"(exports, module) {
    "use strict";
    init_esm();
    var arrayReplaceAt = require_utils().arrayReplaceAt;
    function isLinkOpen(str) {
      return /^<a[>\s]/i.test(str);
    }
    __name(isLinkOpen, "isLinkOpen");
    function isLinkClose(str) {
      return /^<\/a\s*>/i.test(str);
    }
    __name(isLinkClose, "isLinkClose");
    module.exports = /* @__PURE__ */ __name(function linkify(state) {
      var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
      if (!state.md.options.linkify) {
        return;
      }
      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
          continue;
        }
        tokens = blockTokens[j].children;
        htmlLinkLevel = 0;
        for (i = tokens.length - 1; i >= 0; i--) {
          currentToken = tokens[i];
          if (currentToken.type === "link_close") {
            i--;
            while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
              i--;
            }
            continue;
          }
          if (currentToken.type === "html_inline") {
            if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
              htmlLinkLevel--;
            }
            if (isLinkClose(currentToken.content)) {
              htmlLinkLevel++;
            }
          }
          if (htmlLinkLevel > 0) {
            continue;
          }
          if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
            text = currentToken.content;
            links = state.md.linkify.match(text);
            nodes = [];
            level = currentToken.level;
            lastPos = 0;
            for (ln = 0; ln < links.length; ln++) {
              url = links[ln].url;
              fullUrl = state.md.normalizeLink(url);
              if (!state.md.validateLink(fullUrl)) {
                continue;
              }
              urlText = links[ln].text;
              if (!links[ln].schema) {
                urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
              } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
                urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
              } else {
                urlText = state.md.normalizeLinkText(urlText);
              }
              pos = links[ln].index;
              if (pos > lastPos) {
                token = new state.Token("text", "", 0);
                token.content = text.slice(lastPos, pos);
                token.level = level;
                nodes.push(token);
              }
              token = new state.Token("link_open", "a", 1);
              token.attrs = [["href", fullUrl]];
              token.level = level++;
              token.markup = "linkify";
              token.info = "auto";
              nodes.push(token);
              token = new state.Token("text", "", 0);
              token.content = urlText;
              token.level = level;
              nodes.push(token);
              token = new state.Token("link_close", "a", -1);
              token.level = --level;
              token.markup = "linkify";
              token.info = "auto";
              nodes.push(token);
              lastPos = links[ln].lastIndex;
            }
            if (lastPos < text.length) {
              token = new state.Token("text", "", 0);
              token.content = text.slice(lastPos);
              token.level = level;
              nodes.push(token);
            }
            blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
          }
        }
      }
    }, "linkify");
  }
});

// node_modules/markdown-it/lib/rules_core/replacements.js
var require_replacements = __commonJS({
  "node_modules/markdown-it/lib/rules_core/replacements.js"(exports, module) {
    "use strict";
    init_esm();
    var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
    var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;
    var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
    var SCOPED_ABBR = {
      c: "©",
      r: "®",
      p: "§",
      tm: "™"
    };
    function replaceFn(match, name) {
      return SCOPED_ABBR[name.toLowerCase()];
    }
    __name(replaceFn, "replaceFn");
    function replace_scoped(inlineTokens) {
      var i, token;
      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];
        if (token.type === "text") {
          token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
        }
      }
    }
    __name(replace_scoped, "replace_scoped");
    function replace_rare(inlineTokens) {
      var i, token;
      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];
        if (token.type === "text") {
          if (RARE_RE.test(token.content)) {
            token.content = token.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1—$2").replace(/(^|\s)--(\s|$)/mg, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1–$2");
          }
        }
      }
    }
    __name(replace_rare, "replace_rare");
    module.exports = /* @__PURE__ */ __name(function replace(state) {
      var blkIdx;
      if (!state.md.options.typographer) {
        return;
      }
      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== "inline") {
          continue;
        }
        if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
          replace_scoped(state.tokens[blkIdx].children);
        }
        if (RARE_RE.test(state.tokens[blkIdx].content)) {
          replace_rare(state.tokens[blkIdx].children);
        }
      }
    }, "replace");
  }
});

// node_modules/markdown-it/lib/rules_core/smartquotes.js
var require_smartquotes = __commonJS({
  "node_modules/markdown-it/lib/rules_core/smartquotes.js"(exports, module) {
    "use strict";
    init_esm();
    var isWhiteSpace = require_utils().isWhiteSpace;
    var isPunctChar = require_utils().isPunctChar;
    var isMdAsciiPunct = require_utils().isMdAsciiPunct;
    var QUOTE_TEST_RE = /['"]/;
    var QUOTE_RE = /['"]/g;
    var APOSTROPHE = "’";
    function replaceAt(str, index, ch) {
      return str.substr(0, index) + ch + str.substr(index + 1);
    }
    __name(replaceAt, "replaceAt");
    function process_inlines(tokens, state) {
      var i, token, text, t, pos, max2, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
      stack = [];
      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        thisLevel = tokens[i].level;
        for (j = stack.length - 1; j >= 0; j--) {
          if (stack[j].level <= thisLevel) {
            break;
          }
        }
        stack.length = j + 1;
        if (token.type !== "text") {
          continue;
        }
        text = token.content;
        pos = 0;
        max2 = text.length;
        OUTER:
          while (pos < max2) {
            QUOTE_RE.lastIndex = pos;
            t = QUOTE_RE.exec(text);
            if (!t) {
              break;
            }
            canOpen = canClose = true;
            pos = t.index + 1;
            isSingle = t[0] === "'";
            lastChar = 32;
            if (t.index - 1 >= 0) {
              lastChar = text.charCodeAt(t.index - 1);
            } else {
              for (j = i - 1; j >= 0; j--) {
                if (tokens[j].type !== "text") {
                  continue;
                }
                lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
                break;
              }
            }
            nextChar = 32;
            if (pos < max2) {
              nextChar = text.charCodeAt(pos);
            } else {
              for (j = i + 1; j < tokens.length; j++) {
                if (tokens[j].type !== "text") {
                  continue;
                }
                nextChar = tokens[j].content.charCodeAt(0);
                break;
              }
            }
            isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
            isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
            isLastWhiteSpace = isWhiteSpace(lastChar);
            isNextWhiteSpace = isWhiteSpace(nextChar);
            if (isNextWhiteSpace) {
              canOpen = false;
            } else if (isNextPunctChar) {
              if (!(isLastWhiteSpace || isLastPunctChar)) {
                canOpen = false;
              }
            }
            if (isLastWhiteSpace) {
              canClose = false;
            } else if (isLastPunctChar) {
              if (!(isNextWhiteSpace || isNextPunctChar)) {
                canClose = false;
              }
            }
            if (nextChar === 34 && t[0] === '"') {
              if (lastChar >= 48 && lastChar <= 57) {
                canClose = canOpen = false;
              }
            }
            if (canOpen && canClose) {
              canOpen = false;
              canClose = isNextPunctChar;
            }
            if (!canOpen && !canClose) {
              if (isSingle) {
                token.content = replaceAt(token.content, t.index, APOSTROPHE);
              }
              continue;
            }
            if (canClose) {
              for (j = stack.length - 1; j >= 0; j--) {
                item = stack[j];
                if (stack[j].level < thisLevel) {
                  break;
                }
                if (item.single === isSingle && stack[j].level === thisLevel) {
                  item = stack[j];
                  if (isSingle) {
                    openQuote = state.md.options.quotes[2];
                    closeQuote = state.md.options.quotes[3];
                  } else {
                    openQuote = state.md.options.quotes[0];
                    closeQuote = state.md.options.quotes[1];
                  }
                  token.content = replaceAt(token.content, t.index, closeQuote);
                  tokens[item.token].content = replaceAt(
                    tokens[item.token].content,
                    item.pos,
                    openQuote
                  );
                  pos += closeQuote.length - 1;
                  if (item.token === i) {
                    pos += openQuote.length - 1;
                  }
                  text = token.content;
                  max2 = text.length;
                  stack.length = j;
                  continue OUTER;
                }
              }
            }
            if (canOpen) {
              stack.push({
                token: i,
                pos: t.index,
                single: isSingle,
                level: thisLevel
              });
            } else if (canClose && isSingle) {
              token.content = replaceAt(token.content, t.index, APOSTROPHE);
            }
          }
      }
    }
    __name(process_inlines, "process_inlines");
    module.exports = /* @__PURE__ */ __name(function smartquotes(state) {
      var blkIdx;
      if (!state.md.options.typographer) {
        return;
      }
      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
          continue;
        }
        process_inlines(state.tokens[blkIdx].children, state);
      }
    }, "smartquotes");
  }
});

// node_modules/markdown-it/lib/token.js
var require_token = __commonJS({
  "node_modules/markdown-it/lib/token.js"(exports, module) {
    "use strict";
    init_esm();
    function Token(type, tag, nesting) {
      this.type = type;
      this.tag = tag;
      this.attrs = null;
      this.map = null;
      this.nesting = nesting;
      this.level = 0;
      this.children = null;
      this.content = "";
      this.markup = "";
      this.info = "";
      this.meta = null;
      this.block = false;
      this.hidden = false;
    }
    __name(Token, "Token");
    Token.prototype.attrIndex = /* @__PURE__ */ __name(function attrIndex(name) {
      var attrs, i, len;
      if (!this.attrs) {
        return -1;
      }
      attrs = this.attrs;
      for (i = 0, len = attrs.length; i < len; i++) {
        if (attrs[i][0] === name) {
          return i;
        }
      }
      return -1;
    }, "attrIndex");
    Token.prototype.attrPush = /* @__PURE__ */ __name(function attrPush(attrData) {
      if (this.attrs) {
        this.attrs.push(attrData);
      } else {
        this.attrs = [attrData];
      }
    }, "attrPush");
    Token.prototype.attrSet = /* @__PURE__ */ __name(function attrSet(name, value) {
      var idx = this.attrIndex(name), attrData = [name, value];
      if (idx < 0) {
        this.attrPush(attrData);
      } else {
        this.attrs[idx] = attrData;
      }
    }, "attrSet");
    Token.prototype.attrGet = /* @__PURE__ */ __name(function attrGet(name) {
      var idx = this.attrIndex(name), value = null;
      if (idx >= 0) {
        value = this.attrs[idx][1];
      }
      return value;
    }, "attrGet");
    Token.prototype.attrJoin = /* @__PURE__ */ __name(function attrJoin(name, value) {
      var idx = this.attrIndex(name);
      if (idx < 0) {
        this.attrPush([name, value]);
      } else {
        this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
      }
    }, "attrJoin");
    module.exports = Token;
  }
});

// node_modules/markdown-it/lib/rules_core/state_core.js
var require_state_core = __commonJS({
  "node_modules/markdown-it/lib/rules_core/state_core.js"(exports, module) {
    "use strict";
    init_esm();
    var Token = require_token();
    function StateCore(src, md, env) {
      this.src = src;
      this.env = env;
      this.tokens = [];
      this.inlineMode = false;
      this.md = md;
    }
    __name(StateCore, "StateCore");
    StateCore.prototype.Token = Token;
    module.exports = StateCore;
  }
});

// node_modules/markdown-it/lib/parser_core.js
var require_parser_core = __commonJS({
  "node_modules/markdown-it/lib/parser_core.js"(exports, module) {
    "use strict";
    init_esm();
    var Ruler = require_ruler();
    var _rules = [
      ["normalize", require_normalize()],
      ["block", require_block()],
      ["inline", require_inline()],
      ["linkify", require_linkify()],
      ["replacements", require_replacements()],
      ["smartquotes", require_smartquotes()]
    ];
    function Core() {
      this.ruler = new Ruler();
      for (var i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1]);
      }
    }
    __name(Core, "Core");
    Core.prototype.process = function(state) {
      var i, l, rules;
      rules = this.ruler.getRules("");
      for (i = 0, l = rules.length; i < l; i++) {
        rules[i](state);
      }
    };
    Core.prototype.State = require_state_core();
    module.exports = Core;
  }
});

// node_modules/markdown-it/lib/rules_block/table.js
var require_table = __commonJS({
  "node_modules/markdown-it/lib/rules_block/table.js"(exports, module) {
    "use strict";
    init_esm();
    function getLine(state, line) {
      var pos = state.bMarks[line] + state.blkIndent, max2 = state.eMarks[line];
      return state.src.substr(pos, max2 - pos);
    }
    __name(getLine, "getLine");
    function escapedSplit(str) {
      var result2 = [], pos = 0, max2 = str.length, ch, escapes2 = 0, lastPos = 0, backTicked = false, lastBackTick = 0;
      ch = str.charCodeAt(pos);
      while (pos < max2) {
        if (ch === 96 && escapes2 % 2 === 0) {
          backTicked = !backTicked;
          lastBackTick = pos;
        } else if (ch === 124 && escapes2 % 2 === 0 && !backTicked) {
          result2.push(str.substring(lastPos, pos));
          lastPos = pos + 1;
        } else if (ch === 92) {
          escapes2++;
        } else {
          escapes2 = 0;
        }
        pos++;
        if (pos === max2 && backTicked) {
          backTicked = false;
          pos = lastBackTick + 1;
        }
        ch = str.charCodeAt(pos);
      }
      result2.push(str.substring(lastPos));
      return result2;
    }
    __name(escapedSplit, "escapedSplit");
    module.exports = /* @__PURE__ */ __name(function table(state, startLine, endLine, silent) {
      var ch, lineText, pos, i, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines;
      if (startLine + 2 > endLine) {
        return false;
      }
      nextLine = startLine + 1;
      if (state.sCount[nextLine] < state.blkIndent) {
        return false;
      }
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      if (pos >= state.eMarks[nextLine]) {
        return false;
      }
      ch = state.src.charCodeAt(pos);
      if (ch !== 124 && ch !== 45 && ch !== 58) {
        return false;
      }
      lineText = getLine(state, startLine + 1);
      if (!/^[-:| ]+$/.test(lineText)) {
        return false;
      }
      columns = lineText.split("|");
      aligns = [];
      for (i = 0; i < columns.length; i++) {
        t = columns[i].trim();
        if (!t) {
          if (i === 0 || i === columns.length - 1) {
            continue;
          } else {
            return false;
          }
        }
        if (!/^:?-+:?$/.test(t)) {
          return false;
        }
        if (t.charCodeAt(t.length - 1) === 58) {
          aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
        } else if (t.charCodeAt(0) === 58) {
          aligns.push("left");
        } else {
          aligns.push("");
        }
      }
      lineText = getLine(state, startLine).trim();
      if (lineText.indexOf("|") === -1) {
        return false;
      }
      columns = escapedSplit(lineText.replace(/^\||\|$/g, ""));
      columnCount = columns.length;
      if (columnCount > aligns.length) {
        return false;
      }
      if (silent) {
        return true;
      }
      token = state.push("table_open", "table", 1);
      token.map = tableLines = [startLine, 0];
      token = state.push("thead_open", "thead", 1);
      token.map = [startLine, startLine + 1];
      token = state.push("tr_open", "tr", 1);
      token.map = [startLine, startLine + 1];
      for (i = 0; i < columns.length; i++) {
        token = state.push("th_open", "th", 1);
        token.map = [startLine, startLine + 1];
        if (aligns[i]) {
          token.attrs = [["style", "text-align:" + aligns[i]]];
        }
        token = state.push("inline", "", 0);
        token.content = columns[i].trim();
        token.map = [startLine, startLine + 1];
        token.children = [];
        token = state.push("th_close", "th", -1);
      }
      token = state.push("tr_close", "tr", -1);
      token = state.push("thead_close", "thead", -1);
      token = state.push("tbody_open", "tbody", 1);
      token.map = tbodyLines = [startLine + 2, 0];
      for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        lineText = getLine(state, nextLine);
        if (lineText.indexOf("|") === -1) {
          break;
        }
        columns = escapedSplit(lineText.replace(/^\||\|\s*$/g, ""));
        token = state.push("tr_open", "tr", 1);
        for (i = 0; i < columnCount; i++) {
          token = state.push("td_open", "td", 1);
          if (aligns[i]) {
            token.attrs = [["style", "text-align:" + aligns[i]]];
          }
          token = state.push("inline", "", 0);
          token.content = columns[i] ? columns[i].trim() : "";
          token.children = [];
          token = state.push("td_close", "td", -1);
        }
        token = state.push("tr_close", "tr", -1);
      }
      token = state.push("tbody_close", "tbody", -1);
      token = state.push("table_close", "table", -1);
      tableLines[1] = tbodyLines[1] = nextLine;
      state.line = nextLine;
      return true;
    }, "table");
  }
});

// node_modules/markdown-it/lib/rules_block/code.js
var require_code = __commonJS({
  "node_modules/markdown-it/lib/rules_block/code.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function code(state, startLine, endLine) {
      var nextLine, last2, token, emptyLines = 0;
      if (state.sCount[startLine] - state.blkIndent < 4) {
        return false;
      }
      last2 = nextLine = startLine + 1;
      while (nextLine < endLine) {
        if (state.isEmpty(nextLine)) {
          emptyLines++;
          if (emptyLines >= 2 && state.parentType === "list") {
            break;
          }
          nextLine++;
          continue;
        }
        emptyLines = 0;
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          nextLine++;
          last2 = nextLine;
          continue;
        }
        break;
      }
      state.line = last2;
      token = state.push("code_block", "code", 0);
      token.content = state.getLines(startLine, last2, 4 + state.blkIndent, true);
      token.map = [startLine, state.line];
      return true;
    }, "code");
  }
});

// node_modules/markdown-it/lib/rules_block/fence.js
var require_fence = __commonJS({
  "node_modules/markdown-it/lib/rules_block/fence.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function fence(state, startLine, endLine, silent) {
      var marker, len, params, nextLine, mem, token, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
      if (pos + 3 > max2) {
        return false;
      }
      marker = state.src.charCodeAt(pos);
      if (marker !== 126 && marker !== 96) {
        return false;
      }
      mem = pos;
      pos = state.skipChars(pos, marker);
      len = pos - mem;
      if (len < 3) {
        return false;
      }
      markup = state.src.slice(mem, pos);
      params = state.src.slice(pos, max2);
      if (params.indexOf("`") >= 0) {
        return false;
      }
      if (silent) {
        return true;
      }
      nextLine = startLine;
      for (; ; ) {
        nextLine++;
        if (nextLine >= endLine) {
          break;
        }
        pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
        max2 = state.eMarks[nextLine];
        if (pos < max2 && state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        if (state.src.charCodeAt(pos) !== marker) {
          continue;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          continue;
        }
        pos = state.skipChars(pos, marker);
        if (pos - mem < len) {
          continue;
        }
        pos = state.skipSpaces(pos);
        if (pos < max2) {
          continue;
        }
        haveEndMarker = true;
        break;
      }
      len = state.sCount[startLine];
      state.line = nextLine + (haveEndMarker ? 1 : 0);
      token = state.push("fence", "code", 0);
      token.info = params;
      token.content = state.getLines(startLine + 1, nextLine, len, true);
      token.markup = markup;
      token.map = [startLine, state.line];
      return true;
    }, "fence");
  }
});

// node_modules/markdown-it/lib/rules_block/blockquote.js
var require_blockquote = __commonJS({
  "node_modules/markdown-it/lib/rules_block/blockquote.js"(exports, module) {
    "use strict";
    init_esm();
    var isSpace = require_utils().isSpace;
    module.exports = /* @__PURE__ */ __name(function blockquote(state, startLine, endLine, silent) {
      var nextLine, lastLineEmpty, oldTShift, oldSCount, oldBMarks, oldIndent, oldParentType, lines, initial2, offset, ch, terminatorRules, token, i, l, terminate, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
      if (state.src.charCodeAt(pos++) !== 62) {
        return false;
      }
      if (silent) {
        return true;
      }
      if (state.src.charCodeAt(pos) === 32) {
        pos++;
      }
      oldIndent = state.blkIndent;
      state.blkIndent = 0;
      initial2 = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);
      oldBMarks = [state.bMarks[startLine]];
      state.bMarks[startLine] = pos;
      while (pos < max2) {
        ch = state.src.charCodeAt(pos);
        if (isSpace(ch)) {
          if (ch === 9) {
            offset += 4 - offset % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }
        pos++;
      }
      lastLineEmpty = pos >= max2;
      oldSCount = [state.sCount[startLine]];
      state.sCount[startLine] = offset - initial2;
      oldTShift = [state.tShift[startLine]];
      state.tShift[startLine] = pos - state.bMarks[startLine];
      terminatorRules = state.md.block.ruler.getRules("blockquote");
      for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < oldIndent) {
          break;
        }
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max2 = state.eMarks[nextLine];
        if (pos >= max2) {
          break;
        }
        if (state.src.charCodeAt(pos++) === 62) {
          if (state.src.charCodeAt(pos) === 32) {
            pos++;
          }
          initial2 = offset = state.sCount[nextLine] + pos - (state.bMarks[nextLine] + state.tShift[nextLine]);
          oldBMarks.push(state.bMarks[nextLine]);
          state.bMarks[nextLine] = pos;
          while (pos < max2) {
            ch = state.src.charCodeAt(pos);
            if (isSpace(ch)) {
              if (ch === 9) {
                offset += 4 - offset % 4;
              } else {
                offset++;
              }
            } else {
              break;
            }
            pos++;
          }
          lastLineEmpty = pos >= max2;
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] = offset - initial2;
          oldTShift.push(state.tShift[nextLine]);
          state.tShift[nextLine] = pos - state.bMarks[nextLine];
          continue;
        }
        if (lastLineEmpty) {
          break;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
        oldBMarks.push(state.bMarks[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] = -1;
      }
      oldParentType = state.parentType;
      state.parentType = "blockquote";
      token = state.push("blockquote_open", "blockquote", 1);
      token.markup = ">";
      token.map = lines = [startLine, 0];
      state.md.block.tokenize(state, startLine, nextLine);
      token = state.push("blockquote_close", "blockquote", -1);
      token.markup = ">";
      state.parentType = oldParentType;
      lines[1] = state.line;
      for (i = 0; i < oldTShift.length; i++) {
        state.bMarks[i + startLine] = oldBMarks[i];
        state.tShift[i + startLine] = oldTShift[i];
        state.sCount[i + startLine] = oldSCount[i];
      }
      state.blkIndent = oldIndent;
      return true;
    }, "blockquote");
  }
});

// node_modules/markdown-it/lib/rules_block/hr.js
var require_hr = __commonJS({
  "node_modules/markdown-it/lib/rules_block/hr.js"(exports, module) {
    "use strict";
    init_esm();
    var isSpace = require_utils().isSpace;
    module.exports = /* @__PURE__ */ __name(function hr(state, startLine, endLine, silent) {
      var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
      marker = state.src.charCodeAt(pos++);
      if (marker !== 42 && marker !== 45 && marker !== 95) {
        return false;
      }
      cnt = 1;
      while (pos < max2) {
        ch = state.src.charCodeAt(pos++);
        if (ch !== marker && !isSpace(ch)) {
          return false;
        }
        if (ch === marker) {
          cnt++;
        }
      }
      if (cnt < 3) {
        return false;
      }
      if (silent) {
        return true;
      }
      state.line = startLine + 1;
      token = state.push("hr", "hr", 0);
      token.map = [startLine, state.line];
      token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
      return true;
    }, "hr");
  }
});

// node_modules/markdown-it/lib/rules_block/list.js
var require_list = __commonJS({
  "node_modules/markdown-it/lib/rules_block/list.js"(exports, module) {
    "use strict";
    init_esm();
    var isSpace = require_utils().isSpace;
    function skipBulletListMarker(state, startLine) {
      var marker, pos, max2, ch;
      pos = state.bMarks[startLine] + state.tShift[startLine];
      max2 = state.eMarks[startLine];
      marker = state.src.charCodeAt(pos++);
      if (marker !== 42 && marker !== 45 && marker !== 43) {
        return -1;
      }
      if (pos < max2) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          return -1;
        }
      }
      return pos;
    }
    __name(skipBulletListMarker, "skipBulletListMarker");
    function skipOrderedListMarker(state, startLine) {
      var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max2 = state.eMarks[startLine];
      if (pos + 1 >= max2) {
        return -1;
      }
      ch = state.src.charCodeAt(pos++);
      if (ch < 48 || ch > 57) {
        return -1;
      }
      for (; ; ) {
        if (pos >= max2) {
          return -1;
        }
        ch = state.src.charCodeAt(pos++);
        if (ch >= 48 && ch <= 57) {
          if (pos - start >= 10) {
            return -1;
          }
          continue;
        }
        if (ch === 41 || ch === 46) {
          break;
        }
        return -1;
      }
      if (pos < max2) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          return -1;
        }
      }
      return pos;
    }
    __name(skipOrderedListMarker, "skipOrderedListMarker");
    function markTightParagraphs(state, idx) {
      var i, l, level = state.level + 2;
      for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
        if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
          state.tokens[i + 2].hidden = true;
          state.tokens[i].hidden = true;
          i += 2;
        }
      }
    }
    __name(markTightParagraphs, "markTightParagraphs");
    module.exports = /* @__PURE__ */ __name(function list(state, startLine, endLine, silent) {
      var nextLine, initial2, offset, indent, oldTShift, oldIndent, oldLIndent, oldTight, oldParentType, start, posAfterMarker, ch, pos, max2, indentAfterMarker, markerValue, markerCharCode, isOrdered, contentStart, listTokIdx, prevEmptyEnd, listLines, itemLines, tight = true, terminatorRules, token, i, l, terminate;
      if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
        isOrdered = true;
      } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
        isOrdered = false;
      } else {
        return false;
      }
      markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
      if (silent) {
        return true;
      }
      listTokIdx = state.tokens.length;
      if (isOrdered) {
        start = state.bMarks[startLine] + state.tShift[startLine];
        markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));
        token = state.push("ordered_list_open", "ol", 1);
        if (markerValue !== 1) {
          token.attrs = [["start", markerValue]];
        }
      } else {
        token = state.push("bullet_list_open", "ul", 1);
      }
      token.map = listLines = [startLine, 0];
      token.markup = String.fromCharCode(markerCharCode);
      nextLine = startLine;
      prevEmptyEnd = false;
      terminatorRules = state.md.block.ruler.getRules("list");
      while (nextLine < endLine) {
        pos = posAfterMarker;
        max2 = state.eMarks[nextLine];
        initial2 = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
        while (pos < max2) {
          ch = state.src.charCodeAt(pos);
          if (isSpace(ch)) {
            if (ch === 9) {
              offset += 4 - offset % 4;
            } else {
              offset++;
            }
          } else {
            break;
          }
          pos++;
        }
        contentStart = pos;
        if (contentStart >= max2) {
          indentAfterMarker = 1;
        } else {
          indentAfterMarker = offset - initial2;
        }
        if (indentAfterMarker > 4) {
          indentAfterMarker = 1;
        }
        indent = initial2 + indentAfterMarker;
        token = state.push("list_item_open", "li", 1);
        token.markup = String.fromCharCode(markerCharCode);
        token.map = itemLines = [startLine, 0];
        oldIndent = state.blkIndent;
        oldTight = state.tight;
        oldTShift = state.tShift[startLine];
        oldLIndent = state.sCount[startLine];
        oldParentType = state.parentType;
        state.blkIndent = indent;
        state.tight = true;
        state.parentType = "list";
        state.tShift[startLine] = contentStart - state.bMarks[startLine];
        state.sCount[startLine] = offset;
        if (contentStart >= max2 && state.isEmpty(startLine + 1)) {
          state.line = Math.min(state.line + 2, endLine);
        } else {
          state.md.block.tokenize(state, startLine, endLine, true);
        }
        if (!state.tight || prevEmptyEnd) {
          tight = false;
        }
        prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
        state.blkIndent = oldIndent;
        state.tShift[startLine] = oldTShift;
        state.sCount[startLine] = oldLIndent;
        state.tight = oldTight;
        state.parentType = oldParentType;
        token = state.push("list_item_close", "li", -1);
        token.markup = String.fromCharCode(markerCharCode);
        nextLine = startLine = state.line;
        itemLines[1] = nextLine;
        contentStart = state.bMarks[startLine];
        if (nextLine >= endLine) {
          break;
        }
        if (state.isEmpty(nextLine)) {
          break;
        }
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
        if (isOrdered) {
          posAfterMarker = skipOrderedListMarker(state, nextLine);
          if (posAfterMarker < 0) {
            break;
          }
        } else {
          posAfterMarker = skipBulletListMarker(state, nextLine);
          if (posAfterMarker < 0) {
            break;
          }
        }
        if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
          break;
        }
      }
      if (isOrdered) {
        token = state.push("ordered_list_close", "ol", -1);
      } else {
        token = state.push("bullet_list_close", "ul", -1);
      }
      token.markup = String.fromCharCode(markerCharCode);
      listLines[1] = nextLine;
      state.line = nextLine;
      if (tight) {
        markTightParagraphs(state, listTokIdx);
      }
      return true;
    }, "list");
  }
});

// node_modules/markdown-it/lib/rules_block/reference.js
var require_reference = __commonJS({
  "node_modules/markdown-it/lib/rules_block/reference.js"(exports, module) {
    "use strict";
    init_esm();
    var parseLinkDestination = require_parse_link_destination();
    var parseLinkTitle = require_parse_link_title();
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = /* @__PURE__ */ __name(function reference(state, startLine, _endLine, silent) {
      var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine], nextLine = startLine + 1;
      if (state.src.charCodeAt(pos) !== 91) {
        return false;
      }
      while (++pos < max2) {
        if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
          if (pos + 1 === max2) {
            return false;
          }
          if (state.src.charCodeAt(pos + 1) !== 58) {
            return false;
          }
          break;
        }
      }
      endLine = state.lineMax;
      terminatorRules = state.md.block.ruler.getRules("reference");
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      max2 = str.length;
      for (pos = 1; pos < max2; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 91) {
          return false;
        } else if (ch === 93) {
          labelEnd = pos;
          break;
        } else if (ch === 10) {
          lines++;
        } else if (ch === 92) {
          pos++;
          if (pos < max2 && str.charCodeAt(pos) === 10) {
            lines++;
          }
        }
      }
      if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
        return false;
      }
      for (pos = labelEnd + 2; pos < max2; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 10) {
          lines++;
        } else if (isSpace(ch)) {
        } else {
          break;
        }
      }
      res = parseLinkDestination(str, pos, max2);
      if (!res.ok) {
        return false;
      }
      href = state.md.normalizeLink(res.str);
      if (!state.md.validateLink(href)) {
        return false;
      }
      pos = res.pos;
      lines += res.lines;
      destEndPos = pos;
      destEndLineNo = lines;
      start = pos;
      for (; pos < max2; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 10) {
          lines++;
        } else if (isSpace(ch)) {
        } else {
          break;
        }
      }
      res = parseLinkTitle(str, pos, max2);
      if (pos < max2 && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        lines += res.lines;
      } else {
        title = "";
        pos = destEndPos;
        lines = destEndLineNo;
      }
      while (pos < max2) {
        ch = str.charCodeAt(pos);
        if (!isSpace(ch)) {
          break;
        }
        pos++;
      }
      if (pos < max2 && str.charCodeAt(pos) !== 10) {
        if (title) {
          title = "";
          pos = destEndPos;
          lines = destEndLineNo;
          while (pos < max2) {
            ch = str.charCodeAt(pos);
            if (!isSpace(ch)) {
              break;
            }
            pos++;
          }
        }
      }
      if (pos < max2 && str.charCodeAt(pos) !== 10) {
        return false;
      }
      label = normalizeReference(str.slice(1, labelEnd));
      if (!label) {
        return false;
      }
      if (silent) {
        return true;
      }
      if (typeof state.env.references === "undefined") {
        state.env.references = {};
      }
      if (typeof state.env.references[label] === "undefined") {
        state.env.references[label] = { title, href };
      }
      state.line = startLine + lines + 1;
      return true;
    }, "reference");
  }
});

// node_modules/markdown-it/lib/rules_block/heading.js
var require_heading = __commonJS({
  "node_modules/markdown-it/lib/rules_block/heading.js"(exports, module) {
    "use strict";
    init_esm();
    var isSpace = require_utils().isSpace;
    module.exports = /* @__PURE__ */ __name(function heading(state, startLine, endLine, silent) {
      var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
      ch = state.src.charCodeAt(pos);
      if (ch !== 35 || pos >= max2) {
        return false;
      }
      level = 1;
      ch = state.src.charCodeAt(++pos);
      while (ch === 35 && pos < max2 && level <= 6) {
        level++;
        ch = state.src.charCodeAt(++pos);
      }
      if (level > 6 || pos < max2 && ch !== 32) {
        return false;
      }
      if (silent) {
        return true;
      }
      max2 = state.skipSpacesBack(max2, pos);
      tmp = state.skipCharsBack(max2, 35, pos);
      if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
        max2 = tmp;
      }
      state.line = startLine + 1;
      token = state.push("heading_open", "h" + String(level), 1);
      token.markup = "########".slice(0, level);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = state.src.slice(pos, max2).trim();
      token.map = [startLine, state.line];
      token.children = [];
      token = state.push("heading_close", "h" + String(level), -1);
      token.markup = "########".slice(0, level);
      return true;
    }, "heading");
  }
});

// node_modules/markdown-it/lib/rules_block/lheading.js
var require_lheading = __commonJS({
  "node_modules/markdown-it/lib/rules_block/lheading.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function lheading(state, startLine, endLine) {
      var content, terminate, i, l, token, pos, max2, level, marker, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph");
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] >= state.blkIndent) {
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max2 = state.eMarks[nextLine];
          if (pos < max2) {
            marker = state.src.charCodeAt(pos);
            if (marker === 45 || marker === 61) {
              pos = state.skipChars(pos, marker);
              pos = state.skipSpaces(pos);
              if (pos >= max2) {
                level = marker === 61 ? 1 : 2;
                break;
              }
            }
          }
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      if (!level) {
        return false;
      }
      content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      state.line = nextLine + 1;
      token = state.push("heading_open", "h" + String(level), 1);
      token.markup = String.fromCharCode(marker);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = content;
      token.map = [startLine, state.line - 1];
      token.children = [];
      token = state.push("heading_close", "h" + String(level), -1);
      token.markup = String.fromCharCode(marker);
      return true;
    }, "lheading");
  }
});

// node_modules/markdown-it/lib/common/html_blocks.js
var require_html_blocks = __commonJS({
  "node_modules/markdown-it/lib/common/html_blocks.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "meta",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "pre",
      "section",
      "source",
      "title",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul"
    ];
  }
});

// node_modules/markdown-it/lib/common/html_re.js
var require_html_re = __commonJS({
  "node_modules/markdown-it/lib/common/html_re.js"(exports, module) {
    "use strict";
    init_esm();
    var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
    var unquoted = "[^\"'=<>`\\x00-\\x20]+";
    var single_quoted = "'[^']*'";
    var double_quoted = '"[^"]*"';
    var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
    var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
    var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
    var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
    var comment = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
    var processing = "<[?].*?[?]>";
    var declaration = "<![A-Z]+\\s+[^>]*>";
    var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
    var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
    var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
    module.exports.HTML_TAG_RE = HTML_TAG_RE;
    module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
  }
});

// node_modules/markdown-it/lib/rules_block/html_block.js
var require_html_block = __commonJS({
  "node_modules/markdown-it/lib/rules_block/html_block.js"(exports, module) {
    "use strict";
    init_esm();
    var block_names = require_html_blocks();
    var HTML_OPEN_CLOSE_TAG_RE = require_html_re().HTML_OPEN_CLOSE_TAG_RE;
    var HTML_SEQUENCES = [
      [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
      [/^<!--/, /-->/, true],
      [/^<\?/, /\?>/, true],
      [/^<![A-Z]/, />/, true],
      [/^<!\[CDATA\[/, /\]\]>/, true],
      [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
      [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
    ];
    module.exports = /* @__PURE__ */ __name(function html_block(state, startLine, endLine, silent) {
      var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
      if (!state.md.options.html) {
        return false;
      }
      if (state.src.charCodeAt(pos) !== 60) {
        return false;
      }
      lineText = state.src.slice(pos, max2);
      for (i = 0; i < HTML_SEQUENCES.length; i++) {
        if (HTML_SEQUENCES[i][0].test(lineText)) {
          break;
        }
      }
      if (i === HTML_SEQUENCES.length) {
        return false;
      }
      if (silent) {
        return HTML_SEQUENCES[i][2];
      }
      nextLine = startLine + 1;
      if (!HTML_SEQUENCES[i][1].test(lineText)) {
        for (; nextLine < endLine; nextLine++) {
          if (state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max2 = state.eMarks[nextLine];
          lineText = state.src.slice(pos, max2);
          if (HTML_SEQUENCES[i][1].test(lineText)) {
            if (lineText.length !== 0) {
              nextLine++;
            }
            break;
          }
        }
      }
      state.line = nextLine;
      token = state.push("html_block", "", 0);
      token.map = [startLine, nextLine];
      token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
      return true;
    }, "html_block");
  }
});

// node_modules/markdown-it/lib/rules_block/paragraph.js
var require_paragraph = __commonJS({
  "node_modules/markdown-it/lib/rules_block/paragraph.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function paragraph(state, startLine) {
      var content, terminate, i, l, token, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      state.line = nextLine;
      token = state.push("paragraph_open", "p", 1);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = content;
      token.map = [startLine, state.line];
      token.children = [];
      token = state.push("paragraph_close", "p", -1);
      return true;
    }, "paragraph");
  }
});

// node_modules/markdown-it/lib/rules_block/state_block.js
var require_state_block = __commonJS({
  "node_modules/markdown-it/lib/rules_block/state_block.js"(exports, module) {
    "use strict";
    init_esm();
    var Token = require_token();
    var isSpace = require_utils().isSpace;
    function StateBlock(src, md, env, tokens) {
      var ch, s, start, pos, len, indent, offset, indent_found;
      this.src = src;
      this.md = md;
      this.env = env;
      this.tokens = tokens;
      this.bMarks = [];
      this.eMarks = [];
      this.tShift = [];
      this.sCount = [];
      this.blkIndent = 0;
      this.line = 0;
      this.lineMax = 0;
      this.tight = false;
      this.parentType = "root";
      this.ddIndent = -1;
      this.level = 0;
      this.result = "";
      s = this.src;
      indent_found = false;
      for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
        ch = s.charCodeAt(pos);
        if (!indent_found) {
          if (isSpace(ch)) {
            indent++;
            if (ch === 9) {
              offset += 4 - offset % 4;
            } else {
              offset++;
            }
            continue;
          } else {
            indent_found = true;
          }
        }
        if (ch === 10 || pos === len - 1) {
          if (ch !== 10) {
            pos++;
          }
          this.bMarks.push(start);
          this.eMarks.push(pos);
          this.tShift.push(indent);
          this.sCount.push(offset);
          indent_found = false;
          indent = 0;
          offset = 0;
          start = pos + 1;
        }
      }
      this.bMarks.push(s.length);
      this.eMarks.push(s.length);
      this.tShift.push(0);
      this.sCount.push(0);
      this.lineMax = this.bMarks.length - 1;
    }
    __name(StateBlock, "StateBlock");
    StateBlock.prototype.push = function(type, tag, nesting) {
      var token = new Token(type, tag, nesting);
      token.block = true;
      if (nesting < 0) {
        this.level--;
      }
      token.level = this.level;
      if (nesting > 0) {
        this.level++;
      }
      this.tokens.push(token);
      return token;
    };
    StateBlock.prototype.isEmpty = /* @__PURE__ */ __name(function isEmpty2(line) {
      return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
    }, "isEmpty");
    StateBlock.prototype.skipEmptyLines = /* @__PURE__ */ __name(function skipEmptyLines(from) {
      for (var max2 = this.lineMax; from < max2; from++) {
        if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
          break;
        }
      }
      return from;
    }, "skipEmptyLines");
    StateBlock.prototype.skipSpaces = /* @__PURE__ */ __name(function skipSpaces(pos) {
      var ch;
      for (var max2 = this.src.length; pos < max2; pos++) {
        ch = this.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          break;
        }
      }
      return pos;
    }, "skipSpaces");
    StateBlock.prototype.skipSpacesBack = /* @__PURE__ */ __name(function skipSpacesBack(pos, min2) {
      if (pos <= min2) {
        return pos;
      }
      while (pos > min2) {
        if (!isSpace(this.src.charCodeAt(--pos))) {
          return pos + 1;
        }
      }
      return pos;
    }, "skipSpacesBack");
    StateBlock.prototype.skipChars = /* @__PURE__ */ __name(function skipChars(pos, code) {
      for (var max2 = this.src.length; pos < max2; pos++) {
        if (this.src.charCodeAt(pos) !== code) {
          break;
        }
      }
      return pos;
    }, "skipChars");
    StateBlock.prototype.skipCharsBack = /* @__PURE__ */ __name(function skipCharsBack(pos, code, min2) {
      if (pos <= min2) {
        return pos;
      }
      while (pos > min2) {
        if (code !== this.src.charCodeAt(--pos)) {
          return pos + 1;
        }
      }
      return pos;
    }, "skipCharsBack");
    StateBlock.prototype.getLines = /* @__PURE__ */ __name(function getLines(begin, end, indent, keepLastLF) {
      var i, lineIndent, ch, first2, last2, queue, lineStart, line = begin;
      if (begin >= end) {
        return "";
      }
      queue = new Array(end - begin);
      for (i = 0; line < end; line++, i++) {
        lineIndent = 0;
        lineStart = first2 = this.bMarks[line];
        if (line + 1 < end || keepLastLF) {
          last2 = this.eMarks[line] + 1;
        } else {
          last2 = this.eMarks[line];
        }
        while (first2 < last2 && lineIndent < indent) {
          ch = this.src.charCodeAt(first2);
          if (isSpace(ch)) {
            if (ch === 9) {
              lineIndent += 4 - lineIndent % 4;
            } else {
              lineIndent++;
            }
          } else if (first2 - lineStart < this.tShift[line]) {
            lineIndent++;
          } else {
            break;
          }
          first2++;
        }
        queue[i] = this.src.slice(first2, last2);
      }
      return queue.join("");
    }, "getLines");
    StateBlock.prototype.Token = Token;
    module.exports = StateBlock;
  }
});

// node_modules/markdown-it/lib/parser_block.js
var require_parser_block = __commonJS({
  "node_modules/markdown-it/lib/parser_block.js"(exports, module) {
    "use strict";
    init_esm();
    var Ruler = require_ruler();
    var _rules = [
      // First 2 params - rule name & source. Secondary array - list of rules,
      // which can be terminated by this one.
      ["table", require_table(), ["paragraph", "reference"]],
      ["code", require_code()],
      ["fence", require_fence(), ["paragraph", "reference", "blockquote", "list"]],
      ["blockquote", require_blockquote(), ["paragraph", "reference", "list"]],
      ["hr", require_hr(), ["paragraph", "reference", "blockquote", "list"]],
      ["list", require_list(), ["paragraph", "reference", "blockquote"]],
      ["reference", require_reference()],
      ["heading", require_heading(), ["paragraph", "reference", "blockquote"]],
      ["lheading", require_lheading()],
      ["html_block", require_html_block(), ["paragraph", "reference", "blockquote"]],
      ["paragraph", require_paragraph()]
    ];
    function ParserBlock() {
      this.ruler = new Ruler();
      for (var i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
      }
    }
    __name(ParserBlock, "ParserBlock");
    ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
      var ok, i, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
      while (line < endLine) {
        state.line = line = state.skipEmptyLines(line);
        if (line >= endLine) {
          break;
        }
        if (state.sCount[line] < state.blkIndent) {
          break;
        }
        if (state.level >= maxNesting) {
          state.line = endLine;
          break;
        }
        for (i = 0; i < len; i++) {
          ok = rules[i](state, line, endLine, false);
          if (ok) {
            break;
          }
        }
        state.tight = !hasEmptyLines;
        if (state.isEmpty(state.line - 1)) {
          hasEmptyLines = true;
        }
        line = state.line;
        if (line < endLine && state.isEmpty(line)) {
          hasEmptyLines = true;
          line++;
          if (line < endLine && state.parentType === "list" && state.isEmpty(line)) {
            break;
          }
          state.line = line;
        }
      }
    };
    ParserBlock.prototype.parse = function(src, md, env, outTokens) {
      var state;
      if (!src) {
        return;
      }
      state = new this.State(src, md, env, outTokens);
      this.tokenize(state, state.line, state.lineMax);
    };
    ParserBlock.prototype.State = require_state_block();
    module.exports = ParserBlock;
  }
});

// node_modules/markdown-it/lib/rules_inline/text.js
var require_text = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/text.js"(exports, module) {
    "use strict";
    init_esm();
    function isTerminatorChar(ch) {
      switch (ch) {
        case 10:
        case 33:
        case 35:
        case 36:
        case 37:
        case 38:
        case 42:
        case 43:
        case 45:
        case 58:
        case 60:
        case 61:
        case 62:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }
    __name(isTerminatorChar, "isTerminatorChar");
    module.exports = /* @__PURE__ */ __name(function text(state, silent) {
      var pos = state.pos;
      while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
        pos++;
      }
      if (pos === state.pos) {
        return false;
      }
      if (!silent) {
        state.pending += state.src.slice(state.pos, pos);
      }
      state.pos = pos;
      return true;
    }, "text");
  }
});

// node_modules/markdown-it/lib/rules_inline/newline.js
var require_newline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/newline.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function newline(state, silent) {
      var pmax, max2, pos = state.pos;
      if (state.src.charCodeAt(pos) !== 10) {
        return false;
      }
      pmax = state.pending.length - 1;
      max2 = state.posMax;
      if (!silent) {
        if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
          if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
            state.pending = state.pending.replace(/ +$/, "");
            state.push("hardbreak", "br", 0);
          } else {
            state.pending = state.pending.slice(0, -1);
            state.push("softbreak", "br", 0);
          }
        } else {
          state.push("softbreak", "br", 0);
        }
      }
      pos++;
      while (pos < max2 && state.src.charCodeAt(pos) === 32) {
        pos++;
      }
      state.pos = pos;
      return true;
    }, "newline");
  }
});

// node_modules/markdown-it/lib/rules_inline/escape.js
var require_escape = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/escape.js"(exports, module) {
    "use strict";
    init_esm();
    var isSpace = require_utils().isSpace;
    var ESCAPED = [];
    for (i = 0; i < 256; i++) {
      ESCAPED.push(0);
    }
    var i;
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
      ESCAPED[ch.charCodeAt(0)] = 1;
    });
    module.exports = /* @__PURE__ */ __name(function escape(state, silent) {
      var ch, pos = state.pos, max2 = state.posMax;
      if (state.src.charCodeAt(pos) !== 92) {
        return false;
      }
      pos++;
      if (pos < max2) {
        ch = state.src.charCodeAt(pos);
        if (ch < 256 && ESCAPED[ch] !== 0) {
          if (!silent) {
            state.pending += state.src[pos];
          }
          state.pos += 2;
          return true;
        }
        if (ch === 10) {
          if (!silent) {
            state.push("hardbreak", "br", 0);
          }
          pos++;
          while (pos < max2) {
            ch = state.src.charCodeAt(pos);
            if (!isSpace(ch)) {
              break;
            }
            pos++;
          }
          state.pos = pos;
          return true;
        }
      }
      if (!silent) {
        state.pending += "\\";
      }
      state.pos++;
      return true;
    }, "escape");
  }
});

// node_modules/markdown-it/lib/rules_inline/backticks.js
var require_backticks = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/backticks.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function backtick(state, silent) {
      var start, max2, marker, matchStart, matchEnd, token, pos = state.pos, ch = state.src.charCodeAt(pos);
      if (ch !== 96) {
        return false;
      }
      start = pos;
      pos++;
      max2 = state.posMax;
      while (pos < max2 && state.src.charCodeAt(pos) === 96) {
        pos++;
      }
      marker = state.src.slice(start, pos);
      matchStart = matchEnd = pos;
      while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
        matchEnd = matchStart + 1;
        while (matchEnd < max2 && state.src.charCodeAt(matchEnd) === 96) {
          matchEnd++;
        }
        if (matchEnd - matchStart === marker.length) {
          if (!silent) {
            token = state.push("code_inline", "code", 0);
            token.markup = marker;
            token.content = state.src.slice(pos, matchStart).replace(/[ \n]+/g, " ").trim();
          }
          state.pos = matchEnd;
          return true;
        }
      }
      if (!silent) {
        state.pending += marker;
      }
      state.pos += marker.length;
      return true;
    }, "backtick");
  }
});

// node_modules/markdown-it/lib/rules_inline/strikethrough.js
var require_strikethrough = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/strikethrough.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports.tokenize = /* @__PURE__ */ __name(function strikethrough(state, silent) {
      var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
      if (silent) {
        return false;
      }
      if (marker !== 126) {
        return false;
      }
      scanned = state.scanDelims(state.pos, true);
      len = scanned.length;
      ch = String.fromCharCode(marker);
      if (len < 2) {
        return false;
      }
      if (len % 2) {
        token = state.push("text", "", 0);
        token.content = ch;
        len--;
      }
      for (i = 0; i < len; i += 2) {
        token = state.push("text", "", 0);
        token.content = ch + ch;
        state.delimiters.push({
          marker,
          jump: i,
          token: state.tokens.length - 1,
          level: state.level,
          end: -1,
          open: scanned.can_open,
          close: scanned.can_close
        });
      }
      state.pos += scanned.length;
      return true;
    }, "strikethrough");
    module.exports.postProcess = /* @__PURE__ */ __name(function strikethrough(state) {
      var i, j, startDelim, endDelim, token, loneMarkers = [], delimiters = state.delimiters, max2 = state.delimiters.length;
      for (i = 0; i < max2; i++) {
        startDelim = delimiters[i];
        if (startDelim.marker !== 126) {
          continue;
        }
        if (startDelim.end === -1) {
          continue;
        }
        endDelim = delimiters[startDelim.end];
        token = state.tokens[startDelim.token];
        token.type = "s_open";
        token.tag = "s";
        token.nesting = 1;
        token.markup = "~~";
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = "s_close";
        token.tag = "s";
        token.nesting = -1;
        token.markup = "~~";
        token.content = "";
        if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
          loneMarkers.push(endDelim.token - 1);
        }
      }
      while (loneMarkers.length) {
        i = loneMarkers.pop();
        j = i + 1;
        while (j < state.tokens.length && state.tokens[j].type === "s_close") {
          j++;
        }
        j--;
        if (i !== j) {
          token = state.tokens[j];
          state.tokens[j] = state.tokens[i];
          state.tokens[i] = token;
        }
      }
    }, "strikethrough");
  }
});

// node_modules/markdown-it/lib/rules_inline/emphasis.js
var require_emphasis = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/emphasis.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports.tokenize = /* @__PURE__ */ __name(function emphasis(state, silent) {
      var i, scanned, token, start = state.pos, marker = state.src.charCodeAt(start);
      if (silent) {
        return false;
      }
      if (marker !== 95 && marker !== 42) {
        return false;
      }
      scanned = state.scanDelims(state.pos, marker === 42);
      for (i = 0; i < scanned.length; i++) {
        token = state.push("text", "", 0);
        token.content = String.fromCharCode(marker);
        state.delimiters.push({
          // Char code of the starting marker (number).
          //
          marker,
          // An amount of characters before this one that's equivalent to
          // current one. In plain English: if this delimiter does not open
          // an emphasis, neither do previous `jump` characters.
          //
          // Used to skip sequences like "*****" in one step, for 1st asterisk
          // value will be 0, for 2nd it's 1 and so on.
          //
          jump: i,
          // A position of the token this delimiter corresponds to.
          //
          token: state.tokens.length - 1,
          // Token level.
          //
          level: state.level,
          // If this delimiter is matched as a valid opener, `end` will be
          // equal to its position, otherwise it's `-1`.
          //
          end: -1,
          // Boolean flags that determine if this delimiter could open or close
          // an emphasis.
          //
          open: scanned.can_open,
          close: scanned.can_close
        });
      }
      state.pos += scanned.length;
      return true;
    }, "emphasis");
    module.exports.postProcess = /* @__PURE__ */ __name(function emphasis(state) {
      var i, startDelim, endDelim, token, ch, isStrong, delimiters = state.delimiters, max2 = state.delimiters.length;
      for (i = 0; i < max2; i++) {
        startDelim = delimiters[i];
        if (startDelim.marker !== 95 && startDelim.marker !== 42) {
          continue;
        }
        if (startDelim.end === -1) {
          continue;
        }
        endDelim = delimiters[startDelim.end];
        isStrong = i + 1 < max2 && delimiters[i + 1].end === startDelim.end - 1 && delimiters[i + 1].token === startDelim.token + 1 && delimiters[startDelim.end - 1].token === endDelim.token - 1 && delimiters[i + 1].marker === startDelim.marker;
        ch = String.fromCharCode(startDelim.marker);
        token = state.tokens[startDelim.token];
        token.type = isStrong ? "strong_open" : "em_open";
        token.tag = isStrong ? "strong" : "em";
        token.nesting = 1;
        token.markup = isStrong ? ch + ch : ch;
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = isStrong ? "strong_close" : "em_close";
        token.tag = isStrong ? "strong" : "em";
        token.nesting = -1;
        token.markup = isStrong ? ch + ch : ch;
        token.content = "";
        if (isStrong) {
          state.tokens[delimiters[i + 1].token].content = "";
          state.tokens[delimiters[startDelim.end - 1].token].content = "";
          i++;
        }
      }
    }, "emphasis");
  }
});

// node_modules/markdown-it/lib/rules_inline/link.js
var require_link = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/link.js"(exports, module) {
    "use strict";
    init_esm();
    var parseLinkLabel = require_parse_link_label();
    var parseLinkDestination = require_parse_link_destination();
    var parseLinkTitle = require_parse_link_title();
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = /* @__PURE__ */ __name(function link(state, silent) {
      var attrs, code, label, labelEnd, labelStart, pos, res, ref, title, token, href = "", oldPos = state.pos, max2 = state.posMax, start = state.pos;
      if (state.src.charCodeAt(state.pos) !== 91) {
        return false;
      }
      labelStart = state.pos + 1;
      labelEnd = parseLinkLabel(state, state.pos, true);
      if (labelEnd < 0) {
        return false;
      }
      pos = labelEnd + 1;
      if (pos < max2 && state.src.charCodeAt(pos) === 40) {
        pos++;
        for (; pos < max2; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 10) {
            break;
          }
        }
        if (pos >= max2) {
          return false;
        }
        start = pos;
        res = parseLinkDestination(state.src, pos, state.posMax);
        if (res.ok) {
          href = state.md.normalizeLink(res.str);
          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = "";
          }
        }
        start = pos;
        for (; pos < max2; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 10) {
            break;
          }
        }
        res = parseLinkTitle(state.src, pos, state.posMax);
        if (pos < max2 && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;
          for (; pos < max2; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
        } else {
          title = "";
        }
        if (pos >= max2 || state.src.charCodeAt(pos) !== 41) {
          state.pos = oldPos;
          return false;
        }
        pos++;
      } else {
        if (typeof state.env.references === "undefined") {
          return false;
        }
        if (pos < max2 && state.src.charCodeAt(pos) === 91) {
          start = pos + 1;
          pos = parseLinkLabel(state, pos);
          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
          pos = labelEnd + 1;
        }
        if (!label) {
          label = state.src.slice(labelStart, labelEnd);
        }
        ref = state.env.references[normalizeReference(label)];
        if (!ref) {
          state.pos = oldPos;
          return false;
        }
        href = ref.href;
        title = ref.title;
      }
      if (!silent) {
        state.pos = labelStart;
        state.posMax = labelEnd;
        token = state.push("link_open", "a", 1);
        token.attrs = attrs = [["href", href]];
        if (title) {
          attrs.push(["title", title]);
        }
        state.md.inline.tokenize(state);
        token = state.push("link_close", "a", -1);
      }
      state.pos = pos;
      state.posMax = max2;
      return true;
    }, "link");
  }
});

// node_modules/markdown-it/lib/rules_inline/image.js
var require_image = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/image.js"(exports, module) {
    "use strict";
    init_esm();
    var parseLinkLabel = require_parse_link_label();
    var parseLinkDestination = require_parse_link_destination();
    var parseLinkTitle = require_parse_link_title();
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = /* @__PURE__ */ __name(function image(state, silent) {
      var attrs, code, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = "", oldPos = state.pos, max2 = state.posMax;
      if (state.src.charCodeAt(state.pos) !== 33) {
        return false;
      }
      if (state.src.charCodeAt(state.pos + 1) !== 91) {
        return false;
      }
      labelStart = state.pos + 2;
      labelEnd = parseLinkLabel(state, state.pos + 1, false);
      if (labelEnd < 0) {
        return false;
      }
      pos = labelEnd + 1;
      if (pos < max2 && state.src.charCodeAt(pos) === 40) {
        pos++;
        for (; pos < max2; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 10) {
            break;
          }
        }
        if (pos >= max2) {
          return false;
        }
        start = pos;
        res = parseLinkDestination(state.src, pos, state.posMax);
        if (res.ok) {
          href = state.md.normalizeLink(res.str);
          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = "";
          }
        }
        start = pos;
        for (; pos < max2; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 10) {
            break;
          }
        }
        res = parseLinkTitle(state.src, pos, state.posMax);
        if (pos < max2 && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;
          for (; pos < max2; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
        } else {
          title = "";
        }
        if (pos >= max2 || state.src.charCodeAt(pos) !== 41) {
          state.pos = oldPos;
          return false;
        }
        pos++;
      } else {
        if (typeof state.env.references === "undefined") {
          return false;
        }
        if (pos < max2 && state.src.charCodeAt(pos) === 91) {
          start = pos + 1;
          pos = parseLinkLabel(state, pos);
          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
          pos = labelEnd + 1;
        }
        if (!label) {
          label = state.src.slice(labelStart, labelEnd);
        }
        ref = state.env.references[normalizeReference(label)];
        if (!ref) {
          state.pos = oldPos;
          return false;
        }
        href = ref.href;
        title = ref.title;
      }
      if (!silent) {
        content = state.src.slice(labelStart, labelEnd);
        state.md.inline.parse(
          content,
          state.md,
          state.env,
          tokens = []
        );
        token = state.push("image", "img", 0);
        token.attrs = attrs = [["src", href], ["alt", ""]];
        token.children = tokens;
        token.content = content;
        if (title) {
          attrs.push(["title", title]);
        }
      }
      state.pos = pos;
      state.posMax = max2;
      return true;
    }, "image");
  }
});

// node_modules/markdown-it/lib/rules_inline/autolink.js
var require_autolink = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/autolink.js"(exports, module) {
    "use strict";
    init_esm();
    var EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
    var AUTOLINK_RE = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
    module.exports = /* @__PURE__ */ __name(function autolink(state, silent) {
      var tail, linkMatch, emailMatch, url, fullUrl, token, pos = state.pos;
      if (state.src.charCodeAt(pos) !== 60) {
        return false;
      }
      tail = state.src.slice(pos);
      if (tail.indexOf(">") < 0) {
        return false;
      }
      if (AUTOLINK_RE.test(tail)) {
        linkMatch = tail.match(AUTOLINK_RE);
        url = linkMatch[0].slice(1, -1);
        fullUrl = state.md.normalizeLink(url);
        if (!state.md.validateLink(fullUrl)) {
          return false;
        }
        if (!silent) {
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "autolink";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "autolink";
          token.info = "auto";
        }
        state.pos += linkMatch[0].length;
        return true;
      }
      if (EMAIL_RE.test(tail)) {
        emailMatch = tail.match(EMAIL_RE);
        url = emailMatch[0].slice(1, -1);
        fullUrl = state.md.normalizeLink("mailto:" + url);
        if (!state.md.validateLink(fullUrl)) {
          return false;
        }
        if (!silent) {
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "autolink";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "autolink";
          token.info = "auto";
        }
        state.pos += emailMatch[0].length;
        return true;
      }
      return false;
    }, "autolink");
  }
});

// node_modules/markdown-it/lib/rules_inline/html_inline.js
var require_html_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/html_inline.js"(exports, module) {
    "use strict";
    init_esm();
    var HTML_TAG_RE = require_html_re().HTML_TAG_RE;
    function isLetter(ch) {
      var lc = ch | 32;
      return lc >= 97 && lc <= 122;
    }
    __name(isLetter, "isLetter");
    module.exports = /* @__PURE__ */ __name(function html_inline(state, silent) {
      var ch, match, max2, token, pos = state.pos;
      if (!state.md.options.html) {
        return false;
      }
      max2 = state.posMax;
      if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max2) {
        return false;
      }
      ch = state.src.charCodeAt(pos + 1);
      if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
        return false;
      }
      match = state.src.slice(pos).match(HTML_TAG_RE);
      if (!match) {
        return false;
      }
      if (!silent) {
        token = state.push("html_inline", "", 0);
        token.content = state.src.slice(pos, pos + match[0].length);
      }
      state.pos += match[0].length;
      return true;
    }, "html_inline");
  }
});

// node_modules/markdown-it/lib/rules_inline/entity.js
var require_entity = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/entity.js"(exports, module) {
    "use strict";
    init_esm();
    var entities = require_entities2();
    var has3 = require_utils().has;
    var isValidEntityCode = require_utils().isValidEntityCode;
    var fromCodePoint = require_utils().fromCodePoint;
    var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
    var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
    module.exports = /* @__PURE__ */ __name(function entity(state, silent) {
      var ch, code, match, pos = state.pos, max2 = state.posMax;
      if (state.src.charCodeAt(pos) !== 38) {
        return false;
      }
      if (pos + 1 < max2) {
        ch = state.src.charCodeAt(pos + 1);
        if (ch === 35) {
          match = state.src.slice(pos).match(DIGITAL_RE);
          if (match) {
            if (!silent) {
              code = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
              state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(65533);
            }
            state.pos += match[0].length;
            return true;
          }
        } else {
          match = state.src.slice(pos).match(NAMED_RE);
          if (match) {
            if (has3(entities, match[1])) {
              if (!silent) {
                state.pending += entities[match[1]];
              }
              state.pos += match[0].length;
              return true;
            }
          }
        }
      }
      if (!silent) {
        state.pending += "&";
      }
      state.pos++;
      return true;
    }, "entity");
  }
});

// node_modules/markdown-it/lib/rules_inline/balance_pairs.js
var require_balance_pairs = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/balance_pairs.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function link_pairs(state) {
      var i, j, lastDelim, currDelim, delimiters = state.delimiters, max2 = state.delimiters.length;
      for (i = 0; i < max2; i++) {
        lastDelim = delimiters[i];
        if (!lastDelim.close) {
          continue;
        }
        j = i - lastDelim.jump - 1;
        while (j >= 0) {
          currDelim = delimiters[j];
          if (currDelim.open && currDelim.marker === lastDelim.marker && currDelim.end < 0 && currDelim.level === lastDelim.level) {
            lastDelim.jump = i - j;
            lastDelim.open = false;
            currDelim.end = i;
            currDelim.jump = 0;
            break;
          }
          j -= currDelim.jump + 1;
        }
      }
    }, "link_pairs");
  }
});

// node_modules/markdown-it/lib/rules_inline/text_collapse.js
var require_text_collapse = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/text_collapse.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function text_collapse(state) {
      var curr, last2, level = 0, tokens = state.tokens, max2 = state.tokens.length;
      for (curr = last2 = 0; curr < max2; curr++) {
        level += tokens[curr].nesting;
        tokens[curr].level = level;
        if (tokens[curr].type === "text" && curr + 1 < max2 && tokens[curr + 1].type === "text") {
          tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
        } else {
          if (curr !== last2) {
            tokens[last2] = tokens[curr];
          }
          last2++;
        }
      }
      if (curr !== last2) {
        tokens.length = last2;
      }
    }, "text_collapse");
  }
});

// node_modules/markdown-it/lib/rules_inline/state_inline.js
var require_state_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/state_inline.js"(exports, module) {
    "use strict";
    init_esm();
    var Token = require_token();
    var isWhiteSpace = require_utils().isWhiteSpace;
    var isPunctChar = require_utils().isPunctChar;
    var isMdAsciiPunct = require_utils().isMdAsciiPunct;
    function StateInline(src, md, env, outTokens) {
      this.src = src;
      this.env = env;
      this.md = md;
      this.tokens = outTokens;
      this.pos = 0;
      this.posMax = this.src.length;
      this.level = 0;
      this.pending = "";
      this.pendingLevel = 0;
      this.cache = {};
      this.delimiters = [];
    }
    __name(StateInline, "StateInline");
    StateInline.prototype.pushPending = function() {
      var token = new Token("text", "", 0);
      token.content = this.pending;
      token.level = this.pendingLevel;
      this.tokens.push(token);
      this.pending = "";
      return token;
    };
    StateInline.prototype.push = function(type, tag, nesting) {
      if (this.pending) {
        this.pushPending();
      }
      var token = new Token(type, tag, nesting);
      if (nesting < 0) {
        this.level--;
      }
      token.level = this.level;
      if (nesting > 0) {
        this.level++;
      }
      this.pendingLevel = this.level;
      this.tokens.push(token);
      return token;
    };
    StateInline.prototype.scanDelims = function(start, canSplitWord) {
      var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max2 = this.posMax, marker = this.src.charCodeAt(start);
      lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
      while (pos < max2 && this.src.charCodeAt(pos) === marker) {
        pos++;
      }
      count = pos - start;
      nextChar = pos < max2 ? this.src.charCodeAt(pos) : 32;
      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);
      if (isNextWhiteSpace) {
        left_flanking = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          left_flanking = false;
        }
      }
      if (isLastWhiteSpace) {
        right_flanking = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          right_flanking = false;
        }
      }
      if (!canSplitWord) {
        can_open = left_flanking && (!right_flanking || isLastPunctChar);
        can_close = right_flanking && (!left_flanking || isNextPunctChar);
      } else {
        can_open = left_flanking;
        can_close = right_flanking;
      }
      return {
        can_open,
        can_close,
        length: count
      };
    };
    StateInline.prototype.Token = Token;
    module.exports = StateInline;
  }
});

// node_modules/markdown-it/lib/parser_inline.js
var require_parser_inline = __commonJS({
  "node_modules/markdown-it/lib/parser_inline.js"(exports, module) {
    "use strict";
    init_esm();
    var Ruler = require_ruler();
    var _rules = [
      ["text", require_text()],
      ["newline", require_newline()],
      ["escape", require_escape()],
      ["backticks", require_backticks()],
      ["strikethrough", require_strikethrough().tokenize],
      ["emphasis", require_emphasis().tokenize],
      ["link", require_link()],
      ["image", require_image()],
      ["autolink", require_autolink()],
      ["html_inline", require_html_inline()],
      ["entity", require_entity()]
    ];
    var _rules2 = [
      ["balance_pairs", require_balance_pairs()],
      ["strikethrough", require_strikethrough().postProcess],
      ["emphasis", require_emphasis().postProcess],
      ["text_collapse", require_text_collapse()]
    ];
    function ParserInline() {
      var i;
      this.ruler = new Ruler();
      for (i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1]);
      }
      this.ruler2 = new Ruler();
      for (i = 0; i < _rules2.length; i++) {
        this.ruler2.push(_rules2[i][0], _rules2[i][1]);
      }
    }
    __name(ParserInline, "ParserInline");
    ParserInline.prototype.skipToken = function(state) {
      var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
      if (typeof cache[pos] !== "undefined") {
        state.pos = cache[pos];
        return;
      }
      if (state.level < maxNesting) {
        for (i = 0; i < len; i++) {
          state.level++;
          ok = rules[i](state, true);
          state.level--;
          if (ok) {
            break;
          }
        }
      } else {
        state.pos = state.posMax;
      }
      if (!ok) {
        state.pos++;
      }
      cache[pos] = state.pos;
    };
    ParserInline.prototype.tokenize = function(state) {
      var ok, i, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
      while (state.pos < end) {
        if (state.level < maxNesting) {
          for (i = 0; i < len; i++) {
            ok = rules[i](state, false);
            if (ok) {
              break;
            }
          }
        }
        if (ok) {
          if (state.pos >= end) {
            break;
          }
          continue;
        }
        state.pending += state.src[state.pos++];
      }
      if (state.pending) {
        state.pushPending();
      }
    };
    ParserInline.prototype.parse = function(str, md, env, outTokens) {
      var i, rules, len;
      var state = new this.State(str, md, env, outTokens);
      this.tokenize(state);
      rules = this.ruler2.getRules("");
      len = rules.length;
      for (i = 0; i < len; i++) {
        rules[i](state);
      }
    };
    ParserInline.prototype.State = require_state_inline();
    module.exports = ParserInline;
  }
});

// node_modules/linkify-it/lib/re.js
var require_re = __commonJS({
  "node_modules/linkify-it/lib/re.js"(exports) {
    "use strict";
    init_esm();
    var src_Any = exports.src_Any = require_regex2().source;
    var src_Cc = exports.src_Cc = require_regex3().source;
    var src_Z = exports.src_Z = require_regex5().source;
    var src_P = exports.src_P = require_regex().source;
    var src_ZPCc = exports.src_ZPCc = [src_Z, src_P, src_Cc].join("|");
    var src_ZCc = exports.src_ZCc = [src_Z, src_Cc].join("|");
    var src_pseudo_letter = "(?:(?!>|<|" + src_ZPCc + ")" + src_Any + ")";
    var src_ip4 = exports.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    exports.src_auth = "(?:(?:(?!" + src_ZCc + "|[@/]).)+@)?";
    var src_port = exports.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
    var src_host_terminator = exports.src_host_terminator = "(?=$|>|<|" + src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + src_ZPCc + "))";
    var src_path = exports.src_path = "(?:[/?#](?:(?!" + src_ZCc + `|[()[\\]{}.,"'?!\\-<>]).|\\[(?:(?!` + src_ZCc + "|\\]).)*\\]|\\((?:(?!" + src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + src_ZCc + `|["]).)+\\"|\\'(?:(?!` + src_ZCc + "|[']).)+\\'|\\'(?=" + src_pseudo_letter + ").|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + src_ZCc + "|[.]).|\\-(?!--(?:[^-]|$))(?:-*)|\\,(?!" + src_ZCc + ").|\\!(?!" + src_ZCc + "|[!]).|\\?(?!" + src_ZCc + "|[?]).)+|\\/)?";
    var src_email_name = exports.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+';
    var src_xn = exports.src_xn = "xn--[a-z0-9\\-]{1,59}";
    var src_domain_root = exports.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + src_xn + "|" + src_pseudo_letter + "{1,63})";
    var src_domain = exports.src_domain = "(?:" + src_xn + "|(?:" + src_pseudo_letter + ")|(?:" + src_pseudo_letter + "(?:-(?!-)|" + src_pseudo_letter + "){0,61}" + src_pseudo_letter + "))";
    var src_host = exports.src_host = "(?:(?:(?:(?:" + src_domain + ")\\.)*" + src_domain_root + "))";
    var tpl_host_fuzzy = exports.tpl_host_fuzzy = "(?:" + src_ip4 + "|(?:(?:(?:" + src_domain + ")\\.)+(?:%TLDS%)))";
    var tpl_host_no_ip_fuzzy = exports.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + src_domain + ")\\.)+(?:%TLDS%))";
    exports.src_host_strict = src_host + src_host_terminator;
    var tpl_host_fuzzy_strict = exports.tpl_host_fuzzy_strict = tpl_host_fuzzy + src_host_terminator;
    exports.src_host_port_strict = src_host + src_port + src_host_terminator;
    var tpl_host_port_fuzzy_strict = exports.tpl_host_port_fuzzy_strict = tpl_host_fuzzy + src_port + src_host_terminator;
    var tpl_host_port_no_ip_fuzzy_strict = exports.tpl_host_port_no_ip_fuzzy_strict = tpl_host_no_ip_fuzzy + src_port + src_host_terminator;
    exports.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + src_ZPCc + "|>|$))";
    exports.tpl_email_fuzzy = "(^|<|>|\\(|" + src_ZCc + ")(" + src_email_name + "@" + tpl_host_fuzzy_strict + ")";
    exports.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|]|" + src_ZPCc + "))((?![$+<=>^`|])" + tpl_host_port_fuzzy_strict + src_path + ")";
    exports.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|]|" + src_ZPCc + "))((?![$+<=>^`|])" + tpl_host_port_no_ip_fuzzy_strict + src_path + ")";
  }
});

// node_modules/linkify-it/index.js
var require_linkify_it = __commonJS({
  "node_modules/linkify-it/index.js"(exports, module) {
    "use strict";
    init_esm();
    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function(source) {
        if (!source) {
          return;
        }
        Object.keys(source).forEach(function(key) {
          obj[key] = source[key];
        });
      });
      return obj;
    }
    __name(assign, "assign");
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    __name(_class, "_class");
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    __name(isString, "isString");
    function isObject2(obj) {
      return _class(obj) === "[object Object]";
    }
    __name(isObject2, "isObject");
    function isRegExp(obj) {
      return _class(obj) === "[object RegExp]";
    }
    __name(isRegExp, "isRegExp");
    function isFunction2(obj) {
      return _class(obj) === "[object Function]";
    }
    __name(isFunction2, "isFunction");
    function escapeRE(str) {
      return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    }
    __name(escapeRE, "escapeRE");
    var defaultOptions = {
      fuzzyLink: true,
      fuzzyEmail: true,
      fuzzyIP: false
    };
    function isOptionsObj(obj) {
      return Object.keys(obj || {}).reduce(function(acc, k) {
        return acc || defaultOptions.hasOwnProperty(k);
      }, false);
    }
    __name(isOptionsObj, "isOptionsObj");
    var defaultSchemas = {
      "http:": {
        validate: /* @__PURE__ */ __name(function(text, pos, self2) {
          var tail = text.slice(pos);
          if (!self2.re.http) {
            self2.re.http = new RegExp(
              "^\\/\\/" + self2.re.src_auth + self2.re.src_host_port_strict + self2.re.src_path,
              "i"
            );
          }
          if (self2.re.http.test(tail)) {
            return tail.match(self2.re.http)[0].length;
          }
          return 0;
        }, "validate")
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: /* @__PURE__ */ __name(function(text, pos, self2) {
          var tail = text.slice(pos);
          if (!self2.re.no_http) {
            self2.re.no_http = new RegExp(
              "^" + self2.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
              // with code comments
              "(?:localhost|(?:(?:" + self2.re.src_domain + ")\\.)+" + self2.re.src_domain_root + ")" + self2.re.src_port + self2.re.src_host_terminator + self2.re.src_path,
              "i"
            );
          }
          if (self2.re.no_http.test(tail)) {
            if (pos >= 3 && text[pos - 3] === ":") {
              return 0;
            }
            if (pos >= 3 && text[pos - 3] === "/") {
              return 0;
            }
            return tail.match(self2.re.no_http)[0].length;
          }
          return 0;
        }, "validate")
      },
      "mailto:": {
        validate: /* @__PURE__ */ __name(function(text, pos, self2) {
          var tail = text.slice(pos);
          if (!self2.re.mailto) {
            self2.re.mailto = new RegExp(
              "^" + self2.re.src_email_name + "@" + self2.re.src_host_strict,
              "i"
            );
          }
          if (self2.re.mailto.test(tail)) {
            return tail.match(self2.re.mailto)[0].length;
          }
          return 0;
        }, "validate")
      }
    };
    var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
    var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
    function resetScanCache(self2) {
      self2.__index__ = -1;
      self2.__text_cache__ = "";
    }
    __name(resetScanCache, "resetScanCache");
    function createValidator(re) {
      return function(text, pos) {
        var tail = text.slice(pos);
        if (re.test(tail)) {
          return tail.match(re)[0].length;
        }
        return 0;
      };
    }
    __name(createValidator, "createValidator");
    function createNormalizer() {
      return function(match, self2) {
        self2.normalize(match);
      };
    }
    __name(createNormalizer, "createNormalizer");
    function compile(self2) {
      var re = self2.re = assign({}, require_re());
      var tlds = self2.__tlds__.slice();
      if (!self2.__tlds_replaced__) {
        tlds.push(tlds_2ch_src_re);
      }
      tlds.push(re.src_xn);
      re.src_tlds = tlds.join("|");
      function untpl(tpl) {
        return tpl.replace("%TLDS%", re.src_tlds);
      }
      __name(untpl, "untpl");
      re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
      re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
      re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
      re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
      var aliases = [];
      self2.__compiled__ = {};
      function schemaError(name, val) {
        throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
      }
      __name(schemaError, "schemaError");
      Object.keys(self2.__schemas__).forEach(function(name) {
        var val = self2.__schemas__[name];
        if (val === null) {
          return;
        }
        var compiled = { validate: null, link: null };
        self2.__compiled__[name] = compiled;
        if (isObject2(val)) {
          if (isRegExp(val.validate)) {
            compiled.validate = createValidator(val.validate);
          } else if (isFunction2(val.validate)) {
            compiled.validate = val.validate;
          } else {
            schemaError(name, val);
          }
          if (isFunction2(val.normalize)) {
            compiled.normalize = val.normalize;
          } else if (!val.normalize) {
            compiled.normalize = createNormalizer();
          } else {
            schemaError(name, val);
          }
          return;
        }
        if (isString(val)) {
          aliases.push(name);
          return;
        }
        schemaError(name, val);
      });
      aliases.forEach(function(alias) {
        if (!self2.__compiled__[self2.__schemas__[alias]]) {
          return;
        }
        self2.__compiled__[alias].validate = self2.__compiled__[self2.__schemas__[alias]].validate;
        self2.__compiled__[alias].normalize = self2.__compiled__[self2.__schemas__[alias]].normalize;
      });
      self2.__compiled__[""] = { validate: null, normalize: createNormalizer() };
      var slist = Object.keys(self2.__compiled__).filter(function(name) {
        return name.length > 0 && self2.__compiled__[name];
      }).map(escapeRE).join("|");
      self2.re.schema_test = RegExp("(^|(?!_)(?:[><]|" + re.src_ZPCc + "))(" + slist + ")", "i");
      self2.re.schema_search = RegExp("(^|(?!_)(?:[><]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
      self2.re.pretest = RegExp(
        "(" + self2.re.schema_test.source + ")|(" + self2.re.host_fuzzy_test.source + ")|@",
        "i"
      );
      resetScanCache(self2);
    }
    __name(compile, "compile");
    function Match(self2, shift) {
      var start = self2.__index__, end = self2.__last_index__, text = self2.__text_cache__.slice(start, end);
      this.schema = self2.__schema__.toLowerCase();
      this.index = start + shift;
      this.lastIndex = end + shift;
      this.raw = text;
      this.text = text;
      this.url = text;
    }
    __name(Match, "Match");
    function createMatch(self2, shift) {
      var match = new Match(self2, shift);
      self2.__compiled__[match.schema].normalize(match, self2);
      return match;
    }
    __name(createMatch, "createMatch");
    function LinkifyIt(schemas, options) {
      if (!(this instanceof LinkifyIt)) {
        return new LinkifyIt(schemas, options);
      }
      if (!options) {
        if (isOptionsObj(schemas)) {
          options = schemas;
          schemas = {};
        }
      }
      this.__opts__ = assign({}, defaultOptions, options);
      this.__index__ = -1;
      this.__last_index__ = -1;
      this.__schema__ = "";
      this.__text_cache__ = "";
      this.__schemas__ = assign({}, defaultSchemas, schemas);
      this.__compiled__ = {};
      this.__tlds__ = tlds_default;
      this.__tlds_replaced__ = false;
      this.re = {};
      compile(this);
    }
    __name(LinkifyIt, "LinkifyIt");
    LinkifyIt.prototype.add = /* @__PURE__ */ __name(function add(schema, definition) {
      this.__schemas__[schema] = definition;
      compile(this);
      return this;
    }, "add");
    LinkifyIt.prototype.set = /* @__PURE__ */ __name(function set(options) {
      this.__opts__ = assign(this.__opts__, options);
      return this;
    }, "set");
    LinkifyIt.prototype.test = /* @__PURE__ */ __name(function test(text) {
      this.__text_cache__ = text;
      this.__index__ = -1;
      if (!text.length) {
        return false;
      }
      var m, ml, me, len, shift, next, re, tld_pos, at_pos;
      if (this.re.schema_test.test(text)) {
        re = this.re.schema_search;
        re.lastIndex = 0;
        while ((m = re.exec(text)) !== null) {
          len = this.testSchemaAt(text, m[2], re.lastIndex);
          if (len) {
            this.__schema__ = m[2];
            this.__index__ = m.index + m[1].length;
            this.__last_index__ = m.index + m[0].length + len;
            break;
          }
        }
      }
      if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
        tld_pos = text.search(this.re.host_fuzzy_test);
        if (tld_pos >= 0) {
          if (this.__index__ < 0 || tld_pos < this.__index__) {
            if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
              shift = ml.index + ml[1].length;
              if (this.__index__ < 0 || shift < this.__index__) {
                this.__schema__ = "";
                this.__index__ = shift;
                this.__last_index__ = ml.index + ml[0].length;
              }
            }
          }
        }
      }
      if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
        at_pos = text.indexOf("@");
        if (at_pos >= 0) {
          if ((me = text.match(this.re.email_fuzzy)) !== null) {
            shift = me.index + me[1].length;
            next = me.index + me[0].length;
            if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
              this.__schema__ = "mailto:";
              this.__index__ = shift;
              this.__last_index__ = next;
            }
          }
        }
      }
      return this.__index__ >= 0;
    }, "test");
    LinkifyIt.prototype.pretest = /* @__PURE__ */ __name(function pretest(text) {
      return this.re.pretest.test(text);
    }, "pretest");
    LinkifyIt.prototype.testSchemaAt = /* @__PURE__ */ __name(function testSchemaAt(text, schema, pos) {
      if (!this.__compiled__[schema.toLowerCase()]) {
        return 0;
      }
      return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
    }, "testSchemaAt");
    LinkifyIt.prototype.match = /* @__PURE__ */ __name(function match(text) {
      var shift = 0, result2 = [];
      if (this.__index__ >= 0 && this.__text_cache__ === text) {
        result2.push(createMatch(this, shift));
        shift = this.__last_index__;
      }
      var tail = shift ? text.slice(shift) : text;
      while (this.test(tail)) {
        result2.push(createMatch(this, shift));
        tail = tail.slice(this.__last_index__);
        shift += this.__last_index__;
      }
      if (result2.length) {
        return result2;
      }
      return null;
    }, "match");
    LinkifyIt.prototype.tlds = /* @__PURE__ */ __name(function tlds(list, keepOld) {
      list = Array.isArray(list) ? list : [list];
      if (!keepOld) {
        this.__tlds__ = list.slice();
        this.__tlds_replaced__ = true;
        compile(this);
        return this;
      }
      this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
        return el !== arr[idx - 1];
      }).reverse();
      compile(this);
      return this;
    }, "tlds");
    LinkifyIt.prototype.normalize = /* @__PURE__ */ __name(function normalize(match) {
      if (!match.schema) {
        match.url = "http://" + match.url;
      }
      if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
        match.url = "mailto:" + match.url;
      }
    }, "normalize");
    module.exports = LinkifyIt;
  }
});

// node_modules/markdown-it/lib/presets/default.js
var require_default = __commonJS({
  "node_modules/markdown-it/lib/presets/default.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = {
      options: {
        html: false,
        // Enable HTML tags in source
        xhtmlOut: false,
        // Use '/' to close single tags (<br />)
        breaks: false,
        // Convert '\n' in paragraphs into <br>
        langPrefix: "language-",
        // CSS language prefix for fenced blocks
        linkify: false,
        // autoconvert URL-like texts to links
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: "“”‘’",
        /* “”‘’ */
        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externaly.
        // If result starts with <pre... internal wrapper is skipped.
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        maxNesting: 100
        // Internal protection, recursion limit
      },
      components: {
        core: {},
        block: {},
        inline: {}
      }
    };
  }
});

// node_modules/markdown-it/lib/presets/zero.js
var require_zero = __commonJS({
  "node_modules/markdown-it/lib/presets/zero.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = {
      options: {
        html: false,
        // Enable HTML tags in source
        xhtmlOut: false,
        // Use '/' to close single tags (<br />)
        breaks: false,
        // Convert '\n' in paragraphs into <br>
        langPrefix: "language-",
        // CSS language prefix for fenced blocks
        linkify: false,
        // autoconvert URL-like texts to links
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: "“”‘’",
        /* “”‘’ */
        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externaly.
        // If result starts with <pre... internal wrapper is skipped.
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        maxNesting: 20
        // Internal protection, recursion limit
      },
      components: {
        core: {
          rules: [
            "normalize",
            "block",
            "inline"
          ]
        },
        block: {
          rules: [
            "paragraph"
          ]
        },
        inline: {
          rules: [
            "text"
          ],
          rules2: [
            "balance_pairs",
            "text_collapse"
          ]
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/presets/commonmark.js
var require_commonmark = __commonJS({
  "node_modules/markdown-it/lib/presets/commonmark.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = {
      options: {
        html: true,
        // Enable HTML tags in source
        xhtmlOut: true,
        // Use '/' to close single tags (<br />)
        breaks: false,
        // Convert '\n' in paragraphs into <br>
        langPrefix: "language-",
        // CSS language prefix for fenced blocks
        linkify: false,
        // autoconvert URL-like texts to links
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: "“”‘’",
        /* “”‘’ */
        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externaly.
        // If result starts with <pre... internal wrapper is skipped.
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        maxNesting: 20
        // Internal protection, recursion limit
      },
      components: {
        core: {
          rules: [
            "normalize",
            "block",
            "inline"
          ]
        },
        block: {
          rules: [
            "blockquote",
            "code",
            "fence",
            "heading",
            "hr",
            "html_block",
            "lheading",
            "list",
            "reference",
            "paragraph"
          ]
        },
        inline: {
          rules: [
            "autolink",
            "backticks",
            "emphasis",
            "entity",
            "escape",
            "html_inline",
            "image",
            "link",
            "newline",
            "text"
          ],
          rules2: [
            "balance_pairs",
            "emphasis",
            "text_collapse"
          ]
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/index.js
var require_lib = __commonJS({
  "node_modules/markdown-it/lib/index.js"(exports, module) {
    "use strict";
    init_esm();
    var utils = require_utils();
    var helpers = require_helpers();
    var Renderer = require_renderer();
    var ParserCore = require_parser_core();
    var ParserBlock = require_parser_block();
    var ParserInline = require_parser_inline();
    var LinkifyIt = require_linkify_it();
    var mdurl = require_mdurl();
    var punycode = __require("punycode");
    var config = {
      "default": require_default(),
      zero: require_zero(),
      commonmark: require_commonmark()
    };
    var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
    var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
    function validateLink(url) {
      var str = url.trim().toLowerCase();
      return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
    }
    __name(validateLink, "validateLink");
    var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
    function normalizeLink(url) {
      var parsed = mdurl.parse(url, true);
      if (parsed.hostname) {
        if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
          try {
            parsed.hostname = punycode.toASCII(parsed.hostname);
          } catch (er) {
          }
        }
      }
      return mdurl.encode(mdurl.format(parsed));
    }
    __name(normalizeLink, "normalizeLink");
    function normalizeLinkText(url) {
      var parsed = mdurl.parse(url, true);
      if (parsed.hostname) {
        if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
          try {
            parsed.hostname = punycode.toUnicode(parsed.hostname);
          } catch (er) {
          }
        }
      }
      return mdurl.decode(mdurl.format(parsed));
    }
    __name(normalizeLinkText, "normalizeLinkText");
    function MarkdownIt(presetName, options) {
      if (!(this instanceof MarkdownIt)) {
        return new MarkdownIt(presetName, options);
      }
      if (!options) {
        if (!utils.isString(presetName)) {
          options = presetName || {};
          presetName = "default";
        }
      }
      this.inline = new ParserInline();
      this.block = new ParserBlock();
      this.core = new ParserCore();
      this.renderer = new Renderer();
      this.linkify = new LinkifyIt();
      this.validateLink = validateLink;
      this.normalizeLink = normalizeLink;
      this.normalizeLinkText = normalizeLinkText;
      this.utils = utils;
      this.helpers = helpers;
      this.options = {};
      this.configure(presetName);
      if (options) {
        this.set(options);
      }
    }
    __name(MarkdownIt, "MarkdownIt");
    MarkdownIt.prototype.set = function(options) {
      utils.assign(this.options, options);
      return this;
    };
    MarkdownIt.prototype.configure = function(presets) {
      var self2 = this, presetName;
      if (utils.isString(presets)) {
        presetName = presets;
        presets = config[presetName];
        if (!presets) {
          throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
        }
      }
      if (!presets) {
        throw new Error("Wrong `markdown-it` preset, can't be empty");
      }
      if (presets.options) {
        self2.set(presets.options);
      }
      if (presets.components) {
        Object.keys(presets.components).forEach(function(name) {
          if (presets.components[name].rules) {
            self2[name].ruler.enableOnly(presets.components[name].rules);
          }
          if (presets.components[name].rules2) {
            self2[name].ruler2.enableOnly(presets.components[name].rules2);
          }
        });
      }
      return this;
    };
    MarkdownIt.prototype.enable = function(list, ignoreInvalid) {
      var result2 = [];
      if (!Array.isArray(list)) {
        list = [list];
      }
      ["core", "block", "inline"].forEach(function(chain2) {
        result2 = result2.concat(this[chain2].ruler.enable(list, true));
      }, this);
      result2 = result2.concat(this.inline.ruler2.enable(list, true));
      var missed = list.filter(function(name) {
        return result2.indexOf(name) < 0;
      });
      if (missed.length && !ignoreInvalid) {
        throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
      }
      return this;
    };
    MarkdownIt.prototype.disable = function(list, ignoreInvalid) {
      var result2 = [];
      if (!Array.isArray(list)) {
        list = [list];
      }
      ["core", "block", "inline"].forEach(function(chain2) {
        result2 = result2.concat(this[chain2].ruler.disable(list, true));
      }, this);
      result2 = result2.concat(this.inline.ruler2.disable(list, true));
      var missed = list.filter(function(name) {
        return result2.indexOf(name) < 0;
      });
      if (missed.length && !ignoreInvalid) {
        throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
      }
      return this;
    };
    MarkdownIt.prototype.use = function(plugin) {
      var args = [this].concat(Array.prototype.slice.call(arguments, 1));
      plugin.apply(plugin, args);
      return this;
    };
    MarkdownIt.prototype.parse = function(src, env) {
      var state = new this.core.State(src, this, env);
      this.core.process(state);
      return state.tokens;
    };
    MarkdownIt.prototype.render = function(src, env) {
      env = env || {};
      return this.renderer.render(this.parse(src, env), this.options, env);
    };
    MarkdownIt.prototype.parseInline = function(src, env) {
      var state = new this.core.State(src, this, env);
      state.inlineMode = true;
      this.core.process(state);
      return state.tokens;
    };
    MarkdownIt.prototype.renderInline = function(src, env) {
      env = env || {};
      return this.renderer.render(this.parseInline(src, env), this.options, env);
    };
    module.exports = MarkdownIt;
  }
});

// node_modules/markdown-it/index.js
var require_markdown_it = __commonJS({
  "node_modules/markdown-it/index.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = require_lib();
  }
});

// node_modules/markdown-it-abbr/index.js
var require_markdown_it_abbr = __commonJS({
  "node_modules/markdown-it-abbr/index.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /* @__PURE__ */ __name(function sub_plugin(md) {
      var escapeRE = md.utils.escapeRE, arrayReplaceAt = md.utils.arrayReplaceAt;
      var OTHER_CHARS = " \r\n$+<=>^`|~";
      var UNICODE_PUNCT_RE = md.utils.lib.ucmicro.P.source;
      var UNICODE_SPACE_RE = md.utils.lib.ucmicro.Z.source;
      function abbr_def(state, startLine, endLine, silent) {
        var label, title, ch, labelStart, labelEnd, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
        if (pos + 2 >= max2) {
          return false;
        }
        if (state.src.charCodeAt(pos++) !== 42) {
          return false;
        }
        if (state.src.charCodeAt(pos++) !== 91) {
          return false;
        }
        labelStart = pos;
        for (; pos < max2; pos++) {
          ch = state.src.charCodeAt(pos);
          if (ch === 91) {
            return false;
          } else if (ch === 93) {
            labelEnd = pos;
            break;
          } else if (ch === 92) {
            pos++;
          }
        }
        if (labelEnd < 0 || state.src.charCodeAt(labelEnd + 1) !== 58) {
          return false;
        }
        if (silent) {
          return true;
        }
        label = state.src.slice(labelStart, labelEnd).replace(/\\(.)/g, "$1");
        title = state.src.slice(labelEnd + 2, max2).trim();
        if (label.length === 0) {
          return false;
        }
        if (title.length === 0) {
          return false;
        }
        if (!state.env.abbreviations) {
          state.env.abbreviations = {};
        }
        if (typeof state.env.abbreviations[":" + label] === "undefined") {
          state.env.abbreviations[":" + label] = title;
        }
        state.line = startLine + 1;
        return true;
      }
      __name(abbr_def, "abbr_def");
      function abbr_replace(state) {
        var i, j, l, tokens, token, text, nodes, pos, reg, m, regText, regSimple, currentToken, blockTokens = state.tokens;
        if (!state.env.abbreviations) {
          return;
        }
        regSimple = new RegExp("(?:" + Object.keys(state.env.abbreviations).map(function(x) {
          return x.substr(1);
        }).sort(function(a, b) {
          return b.length - a.length;
        }).map(escapeRE).join("|") + ")");
        regText = "(^|" + UNICODE_PUNCT_RE + "|" + UNICODE_SPACE_RE + "|[" + OTHER_CHARS.split("").map(escapeRE).join("") + "])(" + Object.keys(state.env.abbreviations).map(function(x) {
          return x.substr(1);
        }).sort(function(a, b) {
          return b.length - a.length;
        }).map(escapeRE).join("|") + ")($|" + UNICODE_PUNCT_RE + "|" + UNICODE_SPACE_RE + "|[" + OTHER_CHARS.split("").map(escapeRE).join("") + "])";
        reg = new RegExp(regText, "g");
        for (j = 0, l = blockTokens.length; j < l; j++) {
          if (blockTokens[j].type !== "inline") {
            continue;
          }
          tokens = blockTokens[j].children;
          for (i = tokens.length - 1; i >= 0; i--) {
            currentToken = tokens[i];
            if (currentToken.type !== "text") {
              continue;
            }
            pos = 0;
            text = currentToken.content;
            reg.lastIndex = 0;
            nodes = [];
            if (!regSimple.test(text)) {
              continue;
            }
            while (m = reg.exec(text)) {
              if (m.index > 0 || m[1].length > 0) {
                token = new state.Token("text", "", 0);
                token.content = text.slice(pos, m.index + m[1].length);
                nodes.push(token);
              }
              token = new state.Token("abbr_open", "abbr", 1);
              token.attrs = [["title", state.env.abbreviations[":" + m[2]]]];
              nodes.push(token);
              token = new state.Token("text", "", 0);
              token.content = m[2];
              nodes.push(token);
              token = new state.Token("abbr_close", "abbr", -1);
              nodes.push(token);
              reg.lastIndex -= m[3].length;
              pos = reg.lastIndex;
            }
            if (!nodes.length) {
              continue;
            }
            if (pos < text.length) {
              token = new state.Token("text", "", 0);
              token.content = text.slice(pos);
              nodes.push(token);
            }
            blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
          }
        }
      }
      __name(abbr_replace, "abbr_replace");
      md.block.ruler.before("reference", "abbr_def", abbr_def, { alt: ["paragraph", "reference"] });
      md.core.ruler.after("linkify", "abbr_replace", abbr_replace);
    }, "sub_plugin");
  }
});

// node_modules/jsonresume-theme-elegant/tpl/index.js
var require_tpl = __commonJS({
  "node_modules/jsonresume-theme-elegant/tpl/index.js"(exports, module) {
    init_esm();
    function pug_attr(t, e, n, r) {
      if (false === e || null == e || !e && ("class" === t || "style" === t)) return "";
      if (true === e) return " " + (r ? t : t + '="' + t + '"');
      var f = typeof e;
      return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
    }
    __name(pug_attr, "pug_attr");
    function pug_classes(s, r) {
      return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == typeof s ? pug_classes_object(s) : s || "";
    }
    __name(pug_classes, "pug_classes");
    function pug_classes_array(r, a) {
      for (var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++) (s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), e = e + u + s, u = " ");
      return e;
    }
    __name(pug_classes_array, "pug_classes_array");
    function pug_classes_object(r) {
      var a = "", n = "";
      for (var o in r) o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, n = " ");
      return a;
    }
    __name(pug_classes_object, "pug_classes_object");
    function pug_escape(e) {
      var a = "" + e, t = pug_match_html.exec(a);
      if (!t) return e;
      var r, c, n, s = "";
      for (r = t.index, c = 0; r < a.length; r++) {
        switch (a.charCodeAt(r)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
      }
      return c !== r ? s + a.substring(c, r) : s;
    }
    __name(pug_escape, "pug_escape");
    var pug_has_own_property = Object.prototype.hasOwnProperty;
    var pug_match_html = /["&<>]/;
    function pug_rethrow(n, e, r, t) {
      if (!(n instanceof Error)) throw n;
      if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n;
      try {
        t = t || __require("fs").readFileSync(e, "utf8");
      } catch (e2) {
        pug_rethrow(n, null, r);
      }
      var i = 3, a = t.split("\n"), o = Math.max(r - i, 0), h = Math.min(a.length, r + i), i = a.slice(o, h).map(function(n2, e2) {
        var t2 = e2 + o + 1;
        return (t2 == r ? "  > " : "    ") + t2 + "| " + n2;
      }).join("\n");
      throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
    }
    __name(pug_rethrow, "pug_rethrow");
    function template2(locals) {
      var pug_html = "", pug_mixins = {}, pug_interp;
      var pug_debug_filename, pug_debug_line;
      try {
        var pug_debug_sources = { "index.pug": '|<!DOCTYPE html>\nhtml(lang="en")\n  head\n    meta(charset="utf-8")\n    meta(http-equiv="X-UA-Compatible", content="IE=edge")\n    meta(name="viewport", content="width=device-width, initial-scale=1")\n    title= resume.basics.name\n    include pug/stylesheets.pug\n\n  body(itemscope, itemtype="http://schema.org/Person")\n    .container-fluid\n      .row.main.clearfix\n        include pug/floating-nav.pug\n        include pug/profile-card.pug\n        include pug/background-card.pug\n\n    include pug/scripts.pug\n', "pug/stylesheets.pug": 'link(rel="stylesheet", href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css")\nstyle!= css\n', "pug/floating-nav.pug": `mixin make_nav_link(nav_item)
  li
    a(href="#" + nav_item.target)
      i.mr-10(class='icon-' + nav_item.icon)
      | #{nav_item.label}

a(href="#").js-floating-nav-trigger.floating-nav-trigger
  i.icon-bars
  span.close-icon &times;

nav.floating-nav.js-floating-nav
  ul.list-unstyled
    each nav_item in floating_nav_items
      +make_nav_link(nav_item)
`, "pug/profile-card.pug": `mixin profile_card_detail(icon, info, itemprop, icon_title)
  .detail
    span.icon(title=icon_title)
      i.icon.fs-lg(class=icon)
    span.info(itemprop=itemprop)
      if block
        block
      else
        |#{info}

mixin render_links(profiles)
  each profile in profiles
    a.fs-2x.social-link(
      href=profile.url,
      target="_blank",
      data-toggle="tooltip",
      title= resume.basics.name + " on " + profile.network,
      class="link-" + profile.label + " icon-" + profile.label)
      if profile.network.toLowerCase() == 'meetup'
        span.path2
        span.path3
      if profile.network.toLowerCase() == 'gitlab'
        span.path1
        span.path2
        span.path3
        span.path4
        span.path5
        span.path6
        span.path7
        span.path8

section.col-md-3.card-wrapper.profile-card-wrapper.affix
  .card.profile-card
    span.profile-pic-container
      .profile-pic
        img.media-object.img-circle.center-block(
          data-src="holder.js/100x100",
          alt=resume.basics.name,
          src=resume.basics.picture,
          itemprop="image")

      .name-and-profession.text-center
        h3(itemprop="name"): b= resume.basics.name
        h5.text-muted(itemprop="jobTitle")= resume.basics.label

    hr

    .contact-details.clearfix
      if resume.basics.computed_location
        +profile_card_detail("icon-location", resume.basics.computed_location)
      if resume.basics.phone
        +profile_card_detail("icon-phone", resume.basics.phone, "telephone")
      if resume.basics.email
        +profile_card_detail("icon-mail")
          a.link-disguise(href="mailto:" + resume.basics.email, itemprop="email")= resume.basics.email
      if resume.basics.website
        +profile_card_detail("icon-link")
          a(href=resume.basics.website, target="_blank")= resume.basics.website
      if resume.basics.languages
        +profile_card_detail('icon-language', resume.basics.languages, null, 'Languages I speak')

    hr

    .social-links.text-center
      div
        +render_links(resume.basics.top_five_profiles)

        if resume.basics.remaining_profiles.length > 0
          button.btn.btn-default.btn-sm.btn-circle-sm.pull-right.js-profiles-collapse(
            data-toggle="collapse",
            data-target="#remaining-profiles")
            i.icon-chevron-down.fs-lg

          #remaining-profiles.collapse.text-left
            +render_links(resume.basics.remaining_profiles)
`, "pug/background-card.pug": "section.col-md-9.card-wrapper.pull-right\n  .card.background-card\n    h4.text-uppercase Background\n    hr\n\n    .background-details\n      include background/about.pug\n      include background/work-experience.pug\n      include background/projects-experience.pug\n      include background/skills.pug\n      include background/education.pug\n      include background/certificates.pug\n      include background/awards.pug\n      include background/volunteer-work.pug\n      include background/publications.pug\n      include background/interests.pug\n      include background/references.pug\n", "pug/background/about.pug": 'unless _.isEmpty(resume.basics.summary)\n  .detail#about\n    .icon\n      i.fs-lg.icon-board\n      span.mobile-title About\n    .info\n      h4.title.text-uppercase About\n\n      .card.card-nested\n        .content.mop-wrapper(itemprop="description")!= resume.basics.summary\n', "pug/background/work-experience.pug": `unless _.isEmpty(resume.work)
  .detail#work-experience
    .icon
      i.fs-lg.icon-office
      span.mobile-title Work Experience

    .info
      h4.title.text-uppercase Work Experience

      ul.list-unstyled.clear-margin
        each experience in resume.work
          li.card.card-nested.clearfix
            .content
              p.clear-margin.relative
                if !experience.endDate
                  i.icon-circle.current-event(
                    rel="tooltip",
                    title="Currently Working",
                    data-placement="left"
                  )
                strong= experience.position
                |,&nbsp;
                if experience.url
                  a(href=experience.url, target="_blank")= experience.name
                else
                  |#{experience.name}

              p.text-muted
                small
                  span.space-right
                    |#{experience.startDate} - #{experience.endDate || 'Present'}

                  if experience.duration
                    span
                      i.icon-clock.mr-5
                      |#{experience.duration}

              .mop-wrapper.space-bottom!= experience.summary

              unless _.isEmpty(experience.highlights)
                ul
                  each highlight in experience.highlights
                    li.mop-wrapper!= highlight
`, "pug/background/projects-experience.pug": `unless _.isEmpty(resume.projects)
  .detail#projects-experience
    .icon
      i.fs-lg.icon-code
      span.mobile-title Projects Experience

    .info
      h4.title.text-uppercase Projects Experience

      ul.list-unstyled.clear-margin
        each project in resume.projects
          li.card.card-nested.clearfix
            .content
              p.clear-margin.relative
                if !project.endDate
                  i.icon-circle.current-event(
                    rel="tooltip",
                    title="Currently Working",
                    data-placement="left"
                  )
                if project.url
                  a(href=project.url, target="_blank")
                    strong=project.name
                else
                  strong=project.name
                if project.entity
                  span
                    |,&nbsp;#{project.entity}

              p.text-muted
                small
                  span.space-right
                    |#{project.startDate} - #{project.endDate || 'Present'}

                  if project.duration
                    span
                      i.icon-clock.mr-5
                      |#{project.duration}

              .mop-wrapper.space-bottom!= project.description

              unless _.isEmpty(project.highlights)
                ul
                  each highlight in project.highlights
                    li.mop-wrapper!= highlight
`, "pug/background/skills.pug": 'unless _.isEmpty(resume.skills)\n  .detail#skills\n    .icon\n      i.fs-lg.icon-tools\n      span.mobile-title Skills\n\n    .info\n      h4.title.text-uppercase Skills\n\n      .content\n        ul.list-unstyled.clear-margin\n          each skill in resume.skills\n            li.card.card-nested.card-skills\n              if skill.display_progress_bar\n                .skill-level(data-toggle="tooltip", title=skill.level, data-placement="left")\n                  .skill-progress(class=skill.skill_class)\n\n              .skill-info\n                strong= skill.name\n\n                unless _.isEmpty(skill.keywords)\n                  .space-top.labels\n                    each keyword in skill.keywords\n                      span.label.label-keyword!= keyword\n', "pug/background/education.pug": `unless _.isEmpty(resume.education)
  .detail#education
    .icon
      i.fs-lg.icon-graduation-cap
      span.mobile-title Education

    .info
      h4.title.text-uppercase Education

      .content
        ul.list-unstyled.clear-margin
          each education_info in resume.education
            li.card.card-nested
              .content
                p.clear-margin.relative
                  if !education_info.endDate
                    i.icon-circle.current-event(
                      rel="tooltip",
                      title="Currently Pursuing",
                      data-placement="left"
                    )

                  strong
                    |#{education_info.area}, #{education_info.studyType},&nbsp;
                  |#{education_info.institution}

                p.text-muted(class=!education_info.gpa && _.isEmpty(education_info.courses) ? 'clear-margin' : '')
                  small
                    |#{education_info.startDate} - #{education_info.endDate || 'Present'}
                i= education_info.gpa

                unless _.isEmpty(education_info.courses)
                  .space-top.labels
                    each course in education_info.courses
                      span.label.label-keyword!= course

`, "pug/background/certificates.pug": `unless _.isEmpty(resume.certificates)
  .detail#certificates
    .icon
      i.fs-lg.icon-profile
      span.mobile-title Certificates

    .info
      h4.title.text-uppercase Certificates

      .content
        ul.list-unstyled.clear-margin
          each certificate in resume.certificates
            li.card.card-nested
              .content
                p.clear-margin(itemprop="certificate")
                  strong
                    if certificate.url
                      a(href=certificate.url, target="_blank")= certificate.name
                      |,&nbsp;
                    else
                      |#{certificate.name + ', '}
                  |#{certificate.issuer}

                p.text-muted
                  small
                    |Issued on: #{certificate.date}
`, "pug/background/awards.pug": 'unless _.isEmpty(resume.awards)\n  .detail#awards\n    .icon\n      i.fs-lg.icon-trophy\n      span.mobile-title Awards\n\n    .info\n      h4.title.text-uppercase Awards\n\n      .content\n        ul.list-unstyled.clear-margin\n          each award in resume.awards\n            li.card.card-nested\n              .content\n                p.clear-margin(itemprop="award")\n                  strong= award.title + " "\n                  |,&nbsp;#{award.awarder}\n\n                p.text-muted\n                  small\n                    |Awarded on: #{award.date}\n\n                .mop-wrapper!= award.summary\n', "pug/background/volunteer-work.pug": `unless _.isEmpty(resume.volunteer)
  .detail#volunteer-work
    .icon
      i.fs-lg.icon-child
      span.mobile-title Volunteer Work

    .info
      h4.title.text-uppercase Volunteer Work

      .content
        ul.list-unstyled.clear-margin
          each volunteer_info in resume.volunteer
            li.card.card-nested
              .content
                p.clear-margin.relative
                  if !volunteer_info.endDate
                    i.icon-circle.current-event(
                      rel="tooltip",
                      title="Currently Volunteering",
                      data-placement="left"
                    )

                  strong= volunteer_info.position + ', '
                  if volunteer_info.website
                    a(href=volunteer_info.website, target="_blank")= volunteer_info.organization
                  else
                    |#{volunteer_info.organization}

                p.text-muted
                  small
                    |#{volunteer_info.startDate} - #{volunteer_info.endDate || 'Present'}

                .mop-wrapper!= volunteer_info.summary

                unless _.isEmpty(volunteer_info.highlights)
                  ul
                    each highlight in volunteer_info.highlights
                      li.mop-wrapper!= highlight
`, "pug/background/publications.pug": `
unless _.isEmpty(resume.publications)
  .detail#publications
    .icon
      i.fs-lg.icon-newspaper
      span.mobile-title Publications

    .info
      h4.title.text-uppercase Publications

      .content
        ul.list-unstyled.clear-margin
          each publication in resume.publications
            li.card.card-nested
              .content
                p.clear-margin
                  strong
                    if publication.url
                      a(href=publication.url, target="_blank")= publication.name
                      |&nbsp;,&nbsp;
                    else
                      |#{publication.name + ', '}
                  |#{publication.publisher}

                p.text-muted
                  small= 'Published on: ' + publication.releaseDate

                .mop-wrapper!= publication.summary
`, "pug/background/interests.pug": "unless _.isEmpty(resume.interests)\n  .detail#interests\n    .icon\n      i.fs-lg.icon-heart\n      span.mobile-title Interests\n\n    .info\n      h4.title.text-uppercase Interests\n\n      .content\n        ul.list-unstyled.clear-margin\n          each interest in resume.interests\n            li.card.card-nested\n              p\n                strong= interest.name\n\n              unless _.isEmpty(interest.keywords)\n                .space-top.labels\n                  each keyword in interest.keywords\n                    span.label.label-keyword= keyword\n", "pug/background/references.pug": 'unless _.isEmpty(resume.references)\n  .detail#references\n    .icon\n      i.fs-lg.icon-thumbs-up\n      span.mobile-title References\n\n    .info\n      h4.title.text-uppercase References\n\n      .content\n        ul.list-unstyled.clear-margin\n          each reference_info in resume.references\n            li.card.card-nested\n              if reference_info.website\n                a(href=reference_info.website, target="_blank")= reference_info.name\n              else\n                |#{reference_info.name}\n\n              blockquote.quote\n                .mop-wrapper!= reference_info.reference\n', "pug/scripts.pug": `script(src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js")
script(src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js")

script.
  $(function () {
    var toggleFloatingMenu = function() {
      $( '.js-floating-nav' ).toggleClass( 'is-visible' );
      $( '.js-floating-nav-trigger' ).toggleClass( 'is-open' );
    };

    $( ".background-card" ).css( "min-height", window.screen.availHeight + "px" );
    $( "[data-toggle=tooltip]" ).tooltip();
    $( '.js-floating-nav-trigger' ).on( 'click', function(e) {
      e.preventDefault();
      toggleFloatingMenu();
    });
    $( '.js-floating-nav a' ).on( 'click', toggleFloatingMenu );

    $("#remaining-profiles").on('show.bs.collapse', function() {
      $( '.js-profiles-collapse > i' )
        .removeClass( 'icon-chevron-down' )
        .addClass( 'icon-chevron-up' );
    });

    $("#remaining-profiles").on('hidden.bs.collapse', function() {
      $( '.js-profiles-collapse > i' )
        .removeClass( 'icon-chevron-up' )
        .addClass( 'icon-chevron-down' );
    });
  });

script.
  WebFontConfig = {
    google: { families: [ 'Lato:300,400,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
` };
        ;
        var locals_for_with = locals || {};
        (function(_4, css2, floating_nav_items2, resume2) {
          ;
          pug_debug_line = 1;
          pug_debug_filename = "index.pug";
          pug_html = pug_html + "<!DOCTYPE html>";
          ;
          pug_debug_line = 2;
          pug_debug_filename = "index.pug";
          pug_html = pug_html + '<html lang="en">';
          ;
          pug_debug_line = 3;
          pug_debug_filename = "index.pug";
          pug_html = pug_html + "<head>";
          ;
          pug_debug_line = 4;
          pug_debug_filename = "index.pug";
          pug_html = pug_html + '<meta charset="utf-8"/>';
          ;
          pug_debug_line = 5;
          pug_debug_filename = "index.pug";
          pug_html = pug_html + '<meta http-equiv="X-UA-Compatible" content="IE=edge"/>';
          ;
          pug_debug_line = 6;
          pug_debug_filename = "index.pug";
          pug_html = pug_html + '<meta name="viewport" content="width=device-width, initial-scale=1"/>';
          ;
          pug_debug_line = 7;
          pug_debug_filename = "index.pug";
          pug_html = pug_html + "<title>";
          ;
          pug_debug_line = 7;
          pug_debug_filename = "index.pug";
          pug_html = pug_html + pug_escape(null == (pug_interp = resume2.basics.name) ? "" : pug_interp) + "</title>";
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/stylesheets.pug";
          pug_html = pug_html + '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>';
          ;
          pug_debug_line = 2;
          pug_debug_filename = "pug/stylesheets.pug";
          pug_html = pug_html + "<style>";
          ;
          pug_debug_line = 2;
          pug_debug_filename = "pug/stylesheets.pug";
          pug_html = pug_html + (null == (pug_interp = css2) ? "" : pug_interp) + "</style></head>";
          ;
          pug_debug_line = 10;
          pug_debug_filename = "index.pug";
          pug_html = pug_html + "<body" + (pug_attr("itemscope", true, true, false) + ' itemtype="http://schema.org/Person"') + ">";
          ;
          pug_debug_line = 11;
          pug_debug_filename = "index.pug";
          pug_html = pug_html + '<div class="container-fluid">';
          ;
          pug_debug_line = 12;
          pug_debug_filename = "index.pug";
          pug_html = pug_html + '<div class="row main clearfix">';
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/floating-nav.pug";
          pug_mixins["make_nav_link"] = pug_interp = /* @__PURE__ */ __name(function(nav_item) {
            var block = this && this.block, attributes = this && this.attributes || {};
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/floating-nav.pug";
            pug_html = pug_html + "<li>";
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/floating-nav.pug";
            pug_html = pug_html + "<a" + pug_attr("href", "#" + nav_item.target, true, false) + ">";
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/floating-nav.pug";
            pug_html = pug_html + "<i" + pug_attr("class", pug_classes(["mr-10", "icon-" + nav_item.icon], [false, true]), false, false) + "></i>";
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/floating-nav.pug";
            pug_html = pug_html + pug_escape(null == (pug_interp = nav_item.label) ? "" : pug_interp) + "</a></li>";
          }, "pug_interp");
          ;
          pug_debug_line = 7;
          pug_debug_filename = "pug/floating-nav.pug";
          pug_html = pug_html + '<a class="js-floating-nav-trigger floating-nav-trigger" href="#">';
          ;
          pug_debug_line = 8;
          pug_debug_filename = "pug/floating-nav.pug";
          pug_html = pug_html + '<i class="icon-bars"></i>';
          ;
          pug_debug_line = 9;
          pug_debug_filename = "pug/floating-nav.pug";
          pug_html = pug_html + '<span class="close-icon">';
          ;
          pug_debug_line = 9;
          pug_debug_filename = "pug/floating-nav.pug";
          pug_html = pug_html + "&times;</span></a>";
          ;
          pug_debug_line = 11;
          pug_debug_filename = "pug/floating-nav.pug";
          pug_html = pug_html + '<nav class="floating-nav js-floating-nav">';
          ;
          pug_debug_line = 12;
          pug_debug_filename = "pug/floating-nav.pug";
          pug_html = pug_html + '<ul class="list-unstyled">';
          ;
          pug_debug_line = 13;
          pug_debug_filename = "pug/floating-nav.pug";
          ;
          (function() {
            var $$obj = floating_nav_items2;
            if ("number" == typeof $$obj.length) {
              for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
                var nav_item = $$obj[pug_index0];
                ;
                pug_debug_line = 14;
                pug_debug_filename = "pug/floating-nav.pug";
                pug_mixins["make_nav_link"](nav_item);
              }
            } else {
              var $$l = 0;
              for (var pug_index0 in $$obj) {
                $$l++;
                var nav_item = $$obj[pug_index0];
                ;
                pug_debug_line = 14;
                pug_debug_filename = "pug/floating-nav.pug";
                pug_mixins["make_nav_link"](nav_item);
              }
            }
          }).call(this);
          pug_html = pug_html + "</ul></nav>";
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/profile-card.pug";
          pug_mixins["profile_card_detail"] = pug_interp = /* @__PURE__ */ __name(function(icon, info, itemprop, icon_title) {
            var block = this && this.block, attributes = this && this.attributes || {};
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/profile-card.pug";
            pug_html = pug_html + '<div class="detail">';
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/profile-card.pug";
            pug_html = pug_html + "<span" + (' class="icon"' + pug_attr("title", icon_title, true, false)) + ">";
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/profile-card.pug";
            pug_html = pug_html + "<i" + pug_attr("class", pug_classes(["icon", "fs-lg", icon], [false, false, true]), false, false) + "></i></span>";
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/profile-card.pug";
            pug_html = pug_html + "<span" + (' class="info"' + pug_attr("itemprop", itemprop, true, false)) + ">";
            ;
            pug_debug_line = 6;
            pug_debug_filename = "pug/profile-card.pug";
            if (block) {
              ;
              pug_debug_line = 7;
              pug_debug_filename = "pug/profile-card.pug";
              block && block();
            } else {
              ;
              pug_debug_line = 9;
              pug_debug_filename = "pug/profile-card.pug";
              pug_html = pug_html + pug_escape(null == (pug_interp = info) ? "" : pug_interp);
            }
            pug_html = pug_html + "</span></div>";
          }, "pug_interp");
          ;
          pug_debug_line = 11;
          pug_debug_filename = "pug/profile-card.pug";
          pug_mixins["render_links"] = pug_interp = /* @__PURE__ */ __name(function(profiles) {
            var block = this && this.block, attributes = this && this.attributes || {};
            ;
            pug_debug_line = 12;
            pug_debug_filename = "pug/profile-card.pug";
            ;
            (function() {
              var $$obj = profiles;
              if ("number" == typeof $$obj.length) {
                for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
                  var profile = $$obj[pug_index1];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/profile-card.pug";
                  pug_html = pug_html + "<a" + (pug_attr("class", pug_classes(["fs-2x", "social-link", "link-" + profile.label + " icon-" + profile.label], [false, false, true]), false, false) + pug_attr("href", profile.url, true, false) + ' target="_blank" data-toggle="tooltip"' + pug_attr("title", resume2.basics.name + " on " + profile.network, true, false)) + ">";
                  ;
                  pug_debug_line = 19;
                  pug_debug_filename = "pug/profile-card.pug";
                  if (profile.network.toLowerCase() == "meetup") {
                    ;
                    pug_debug_line = 20;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path2"></span>';
                    ;
                    pug_debug_line = 21;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path3"></span>';
                  }
                  ;
                  pug_debug_line = 22;
                  pug_debug_filename = "pug/profile-card.pug";
                  if (profile.network.toLowerCase() == "gitlab") {
                    ;
                    pug_debug_line = 23;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path1"></span>';
                    ;
                    pug_debug_line = 24;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path2"></span>';
                    ;
                    pug_debug_line = 25;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path3"></span>';
                    ;
                    pug_debug_line = 26;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path4"></span>';
                    ;
                    pug_debug_line = 27;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path5"></span>';
                    ;
                    pug_debug_line = 28;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path6"></span>';
                    ;
                    pug_debug_line = 29;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path7"></span>';
                    ;
                    pug_debug_line = 30;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path8"></span>';
                  }
                  pug_html = pug_html + "</a>";
                }
              } else {
                var $$l = 0;
                for (var pug_index1 in $$obj) {
                  $$l++;
                  var profile = $$obj[pug_index1];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/profile-card.pug";
                  pug_html = pug_html + "<a" + (pug_attr("class", pug_classes(["fs-2x", "social-link", "link-" + profile.label + " icon-" + profile.label], [false, false, true]), false, false) + pug_attr("href", profile.url, true, false) + ' target="_blank" data-toggle="tooltip"' + pug_attr("title", resume2.basics.name + " on " + profile.network, true, false)) + ">";
                  ;
                  pug_debug_line = 19;
                  pug_debug_filename = "pug/profile-card.pug";
                  if (profile.network.toLowerCase() == "meetup") {
                    ;
                    pug_debug_line = 20;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path2"></span>';
                    ;
                    pug_debug_line = 21;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path3"></span>';
                  }
                  ;
                  pug_debug_line = 22;
                  pug_debug_filename = "pug/profile-card.pug";
                  if (profile.network.toLowerCase() == "gitlab") {
                    ;
                    pug_debug_line = 23;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path1"></span>';
                    ;
                    pug_debug_line = 24;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path2"></span>';
                    ;
                    pug_debug_line = 25;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path3"></span>';
                    ;
                    pug_debug_line = 26;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path4"></span>';
                    ;
                    pug_debug_line = 27;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path5"></span>';
                    ;
                    pug_debug_line = 28;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path6"></span>';
                    ;
                    pug_debug_line = 29;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path7"></span>';
                    ;
                    pug_debug_line = 30;
                    pug_debug_filename = "pug/profile-card.pug";
                    pug_html = pug_html + '<span class="path8"></span>';
                  }
                  pug_html = pug_html + "</a>";
                }
              }
            }).call(this);
          }, "pug_interp");
          ;
          pug_debug_line = 32;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + '<section class="col-md-3 card-wrapper profile-card-wrapper affix">';
          ;
          pug_debug_line = 33;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + '<div class="card profile-card">';
          ;
          pug_debug_line = 34;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + '<span class="profile-pic-container">';
          ;
          pug_debug_line = 35;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + '<div class="profile-pic">';
          ;
          pug_debug_line = 36;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + "<img" + (' class="media-object img-circle center-block" data-src="holder.js/100x100"' + pug_attr("alt", resume2.basics.name, true, false) + pug_attr("src", resume2.basics.picture, true, false) + ' itemprop="image"') + "/></div>";
          ;
          pug_debug_line = 42;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + '<div class="name-and-profession text-center">';
          ;
          pug_debug_line = 43;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + '<h3 itemprop="name">';
          ;
          pug_debug_line = 43;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + "<b>";
          ;
          pug_debug_line = 43;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + pug_escape(null == (pug_interp = resume2.basics.name) ? "" : pug_interp) + "</b></h3>";
          ;
          pug_debug_line = 44;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + '<h5 class="text-muted" itemprop="jobTitle">';
          ;
          pug_debug_line = 44;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + pug_escape(null == (pug_interp = resume2.basics.label) ? "" : pug_interp) + "</h5></div></span>";
          ;
          pug_debug_line = 46;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + "<hr/>";
          ;
          pug_debug_line = 48;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + '<div class="contact-details clearfix">';
          ;
          pug_debug_line = 49;
          pug_debug_filename = "pug/profile-card.pug";
          if (resume2.basics.computed_location) {
            ;
            pug_debug_line = 50;
            pug_debug_filename = "pug/profile-card.pug";
            pug_mixins["profile_card_detail"]("icon-location", resume2.basics.computed_location);
          }
          ;
          pug_debug_line = 51;
          pug_debug_filename = "pug/profile-card.pug";
          if (resume2.basics.phone) {
            ;
            pug_debug_line = 52;
            pug_debug_filename = "pug/profile-card.pug";
            pug_mixins["profile_card_detail"]("icon-phone", resume2.basics.phone, "telephone");
          }
          ;
          pug_debug_line = 53;
          pug_debug_filename = "pug/profile-card.pug";
          if (resume2.basics.email) {
            ;
            pug_debug_line = 54;
            pug_debug_filename = "pug/profile-card.pug";
            pug_mixins["profile_card_detail"].call({
              block: /* @__PURE__ */ __name(function() {
                ;
                pug_debug_line = 55;
                pug_debug_filename = "pug/profile-card.pug";
                pug_html = pug_html + "<a" + (' class="link-disguise"' + pug_attr("href", "mailto:" + resume2.basics.email, true, false) + ' itemprop="email"') + ">";
                ;
                pug_debug_line = 55;
                pug_debug_filename = "pug/profile-card.pug";
                pug_html = pug_html + pug_escape(null == (pug_interp = resume2.basics.email) ? "" : pug_interp) + "</a>";
              }, "block")
            }, "icon-mail");
          }
          ;
          pug_debug_line = 56;
          pug_debug_filename = "pug/profile-card.pug";
          if (resume2.basics.website) {
            ;
            pug_debug_line = 57;
            pug_debug_filename = "pug/profile-card.pug";
            pug_mixins["profile_card_detail"].call({
              block: /* @__PURE__ */ __name(function() {
                ;
                pug_debug_line = 58;
                pug_debug_filename = "pug/profile-card.pug";
                pug_html = pug_html + "<a" + (pug_attr("href", resume2.basics.website, true, false) + ' target="_blank"') + ">";
                ;
                pug_debug_line = 58;
                pug_debug_filename = "pug/profile-card.pug";
                pug_html = pug_html + pug_escape(null == (pug_interp = resume2.basics.website) ? "" : pug_interp) + "</a>";
              }, "block")
            }, "icon-link");
          }
          ;
          pug_debug_line = 59;
          pug_debug_filename = "pug/profile-card.pug";
          if (resume2.basics.languages) {
            ;
            pug_debug_line = 60;
            pug_debug_filename = "pug/profile-card.pug";
            pug_mixins["profile_card_detail"]("icon-language", resume2.basics.languages, null, "Languages I speak");
          }
          pug_html = pug_html + "</div>";
          ;
          pug_debug_line = 62;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + "<hr/>";
          ;
          pug_debug_line = 64;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + '<div class="social-links text-center">';
          ;
          pug_debug_line = 65;
          pug_debug_filename = "pug/profile-card.pug";
          pug_html = pug_html + "<div>";
          ;
          pug_debug_line = 66;
          pug_debug_filename = "pug/profile-card.pug";
          pug_mixins["render_links"](resume2.basics.top_five_profiles);
          ;
          pug_debug_line = 68;
          pug_debug_filename = "pug/profile-card.pug";
          if (resume2.basics.remaining_profiles.length > 0) {
            ;
            pug_debug_line = 69;
            pug_debug_filename = "pug/profile-card.pug";
            pug_html = pug_html + '<button class="btn btn-default btn-sm btn-circle-sm pull-right js-profiles-collapse" data-toggle="collapse" data-target="#remaining-profiles">';
            ;
            pug_debug_line = 72;
            pug_debug_filename = "pug/profile-card.pug";
            pug_html = pug_html + '<i class="icon-chevron-down fs-lg"></i></button>';
            ;
            pug_debug_line = 74;
            pug_debug_filename = "pug/profile-card.pug";
            pug_html = pug_html + '<div class="collapse text-left" id="remaining-profiles">';
            ;
            pug_debug_line = 75;
            pug_debug_filename = "pug/profile-card.pug";
            pug_mixins["render_links"](resume2.basics.remaining_profiles);
            pug_html = pug_html + "</div>";
          }
          pug_html = pug_html + "</div></div></div></section>";
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/background-card.pug";
          pug_html = pug_html + '<section class="col-md-9 card-wrapper pull-right">';
          ;
          pug_debug_line = 2;
          pug_debug_filename = "pug/background-card.pug";
          pug_html = pug_html + '<div class="card background-card">';
          ;
          pug_debug_line = 3;
          pug_debug_filename = "pug/background-card.pug";
          pug_html = pug_html + '<h4 class="text-uppercase">';
          ;
          pug_debug_line = 3;
          pug_debug_filename = "pug/background-card.pug";
          pug_html = pug_html + "Background</h4>";
          ;
          pug_debug_line = 4;
          pug_debug_filename = "pug/background-card.pug";
          pug_html = pug_html + "<hr/>";
          ;
          pug_debug_line = 6;
          pug_debug_filename = "pug/background-card.pug";
          pug_html = pug_html + '<div class="background-details">';
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/background/about.pug";
          if (!_4.isEmpty(resume2.basics.summary)) {
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/background/about.pug";
            pug_html = pug_html + '<div class="detail" id="about">';
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/background/about.pug";
            pug_html = pug_html + '<div class="icon">';
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/background/about.pug";
            pug_html = pug_html + '<i class="fs-lg icon-board"></i>';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/about.pug";
            pug_html = pug_html + '<span class="mobile-title">';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/about.pug";
            pug_html = pug_html + "About</span></div>";
            ;
            pug_debug_line = 6;
            pug_debug_filename = "pug/background/about.pug";
            pug_html = pug_html + '<div class="info">';
            ;
            pug_debug_line = 7;
            pug_debug_filename = "pug/background/about.pug";
            pug_html = pug_html + '<h4 class="title text-uppercase">';
            ;
            pug_debug_line = 7;
            pug_debug_filename = "pug/background/about.pug";
            pug_html = pug_html + "About</h4>";
            ;
            pug_debug_line = 9;
            pug_debug_filename = "pug/background/about.pug";
            pug_html = pug_html + '<div class="card card-nested">';
            ;
            pug_debug_line = 10;
            pug_debug_filename = "pug/background/about.pug";
            pug_html = pug_html + '<div class="content mop-wrapper" itemprop="description">';
            ;
            pug_debug_line = 10;
            pug_debug_filename = "pug/background/about.pug";
            pug_html = pug_html + (null == (pug_interp = resume2.basics.summary) ? "" : pug_interp) + "</div></div></div></div>";
          }
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/background/work-experience.pug";
          if (!_4.isEmpty(resume2.work)) {
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/background/work-experience.pug";
            pug_html = pug_html + '<div class="detail" id="work-experience">';
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/background/work-experience.pug";
            pug_html = pug_html + '<div class="icon">';
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/background/work-experience.pug";
            pug_html = pug_html + '<i class="fs-lg icon-office"></i>';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/work-experience.pug";
            pug_html = pug_html + '<span class="mobile-title">';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/work-experience.pug";
            pug_html = pug_html + "Work Experience</span></div>";
            ;
            pug_debug_line = 7;
            pug_debug_filename = "pug/background/work-experience.pug";
            pug_html = pug_html + '<div class="info">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/work-experience.pug";
            pug_html = pug_html + '<h4 class="title text-uppercase">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/work-experience.pug";
            pug_html = pug_html + "Work Experience</h4>";
            ;
            pug_debug_line = 10;
            pug_debug_filename = "pug/background/work-experience.pug";
            pug_html = pug_html + '<ul class="list-unstyled clear-margin">';
            ;
            pug_debug_line = 11;
            pug_debug_filename = "pug/background/work-experience.pug";
            ;
            (function() {
              var $$obj = resume2.work;
              if ("number" == typeof $$obj.length) {
                for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
                  var experience = $$obj[pug_index2];
                  ;
                  pug_debug_line = 12;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<li class="card card-nested clearfix">';
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<p class="clear-margin relative">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  if (!experience.endDate) {
                    ;
                    pug_debug_line = 16;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + '<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>';
                  }
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = experience.position) ? "" : pug_interp) + "</strong>";
                  ;
                  pug_debug_line = 22;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + ",&nbsp;";
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  if (experience.url) {
                    ;
                    pug_debug_line = 24;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", experience.url, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 24;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = experience.name) ? "" : pug_interp) + "</a>";
                  } else {
                    ;
                    pug_debug_line = 26;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = experience.name) ? "" : pug_interp);
                  }
                  pug_html = pug_html + "</p>";
                  ;
                  pug_debug_line = 28;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 29;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 30;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<span class="space-right">';
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = experience.startDate) ? "" : pug_interp);
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + " - ";
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = experience.endDate || "Present") ? "" : pug_interp) + "</span>";
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  if (experience.duration) {
                    ;
                    pug_debug_line = 34;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + "<span>";
                    ;
                    pug_debug_line = 35;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + '<i class="icon-clock mr-5"></i>';
                    ;
                    pug_debug_line = 36;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = experience.duration) ? "" : pug_interp) + "</span>";
                  }
                  pug_html = pug_html + "</small></p>";
                  ;
                  pug_debug_line = 38;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<div class="mop-wrapper space-bottom">';
                  ;
                  pug_debug_line = 38;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + (null == (pug_interp = experience.summary) ? "" : pug_interp) + "</div>";
                  ;
                  pug_debug_line = 40;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  if (!_4.isEmpty(experience.highlights)) {
                    ;
                    pug_debug_line = 41;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + "<ul>";
                    ;
                    pug_debug_line = 42;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    ;
                    (function() {
                      var $$obj2 = experience.highlights;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index3 = 0, $$l2 = $$obj2.length; pug_index3 < $$l2; pug_index3++) {
                          var highlight = $$obj2[pug_index3];
                          ;
                          pug_debug_line = 43;
                          pug_debug_filename = "pug/background/work-experience.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 43;
                          pug_debug_filename = "pug/background/work-experience.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index3 in $$obj2) {
                          $$l2++;
                          var highlight = $$obj2[pug_index3];
                          ;
                          pug_debug_line = 43;
                          pug_debug_filename = "pug/background/work-experience.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 43;
                          pug_debug_filename = "pug/background/work-experience.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</ul>";
                  }
                  pug_html = pug_html + "</div></li>";
                }
              } else {
                var $$l = 0;
                for (var pug_index2 in $$obj) {
                  $$l++;
                  var experience = $$obj[pug_index2];
                  ;
                  pug_debug_line = 12;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<li class="card card-nested clearfix">';
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<p class="clear-margin relative">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  if (!experience.endDate) {
                    ;
                    pug_debug_line = 16;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + '<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>';
                  }
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = experience.position) ? "" : pug_interp) + "</strong>";
                  ;
                  pug_debug_line = 22;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + ",&nbsp;";
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  if (experience.url) {
                    ;
                    pug_debug_line = 24;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", experience.url, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 24;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = experience.name) ? "" : pug_interp) + "</a>";
                  } else {
                    ;
                    pug_debug_line = 26;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = experience.name) ? "" : pug_interp);
                  }
                  pug_html = pug_html + "</p>";
                  ;
                  pug_debug_line = 28;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 29;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 30;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<span class="space-right">';
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = experience.startDate) ? "" : pug_interp);
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + " - ";
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = experience.endDate || "Present") ? "" : pug_interp) + "</span>";
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  if (experience.duration) {
                    ;
                    pug_debug_line = 34;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + "<span>";
                    ;
                    pug_debug_line = 35;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + '<i class="icon-clock mr-5"></i>';
                    ;
                    pug_debug_line = 36;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = experience.duration) ? "" : pug_interp) + "</span>";
                  }
                  pug_html = pug_html + "</small></p>";
                  ;
                  pug_debug_line = 38;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + '<div class="mop-wrapper space-bottom">';
                  ;
                  pug_debug_line = 38;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  pug_html = pug_html + (null == (pug_interp = experience.summary) ? "" : pug_interp) + "</div>";
                  ;
                  pug_debug_line = 40;
                  pug_debug_filename = "pug/background/work-experience.pug";
                  if (!_4.isEmpty(experience.highlights)) {
                    ;
                    pug_debug_line = 41;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    pug_html = pug_html + "<ul>";
                    ;
                    pug_debug_line = 42;
                    pug_debug_filename = "pug/background/work-experience.pug";
                    ;
                    (function() {
                      var $$obj2 = experience.highlights;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index4 = 0, $$l2 = $$obj2.length; pug_index4 < $$l2; pug_index4++) {
                          var highlight = $$obj2[pug_index4];
                          ;
                          pug_debug_line = 43;
                          pug_debug_filename = "pug/background/work-experience.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 43;
                          pug_debug_filename = "pug/background/work-experience.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index4 in $$obj2) {
                          $$l2++;
                          var highlight = $$obj2[pug_index4];
                          ;
                          pug_debug_line = 43;
                          pug_debug_filename = "pug/background/work-experience.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 43;
                          pug_debug_filename = "pug/background/work-experience.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</ul>";
                  }
                  pug_html = pug_html + "</div></li>";
                }
              }
            }).call(this);
            pug_html = pug_html + "</ul></div></div>";
          }
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/background/projects-experience.pug";
          if (!_4.isEmpty(resume2.projects)) {
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/background/projects-experience.pug";
            pug_html = pug_html + '<div class="detail" id="projects-experience">';
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/background/projects-experience.pug";
            pug_html = pug_html + '<div class="icon">';
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/background/projects-experience.pug";
            pug_html = pug_html + '<i class="fs-lg icon-code"></i>';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/projects-experience.pug";
            pug_html = pug_html + '<span class="mobile-title">';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/projects-experience.pug";
            pug_html = pug_html + "Projects Experience</span></div>";
            ;
            pug_debug_line = 7;
            pug_debug_filename = "pug/background/projects-experience.pug";
            pug_html = pug_html + '<div class="info">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/projects-experience.pug";
            pug_html = pug_html + '<h4 class="title text-uppercase">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/projects-experience.pug";
            pug_html = pug_html + "Projects Experience</h4>";
            ;
            pug_debug_line = 10;
            pug_debug_filename = "pug/background/projects-experience.pug";
            pug_html = pug_html + '<ul class="list-unstyled clear-margin">';
            ;
            pug_debug_line = 11;
            pug_debug_filename = "pug/background/projects-experience.pug";
            ;
            (function() {
              var $$obj = resume2.projects;
              if ("number" == typeof $$obj.length) {
                for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
                  var project = $$obj[pug_index5];
                  ;
                  pug_debug_line = 12;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<li class="card card-nested clearfix">';
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<p class="clear-margin relative">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  if (!project.endDate) {
                    ;
                    pug_debug_line = 16;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + '<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>';
                  }
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  if (project.url) {
                    ;
                    pug_debug_line = 22;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", project.url, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 23;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<strong>";
                    ;
                    pug_debug_line = 23;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = project.name) ? "" : pug_interp) + "</strong></a>";
                  } else {
                    ;
                    pug_debug_line = 25;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<strong>";
                    ;
                    pug_debug_line = 25;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = project.name) ? "" : pug_interp) + "</strong>";
                  }
                  ;
                  pug_debug_line = 26;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  if (project.entity) {
                    ;
                    pug_debug_line = 27;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<span>";
                    ;
                    pug_debug_line = 28;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + ",&nbsp;";
                    ;
                    pug_debug_line = 28;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = project.entity) ? "" : pug_interp) + "</span>";
                  }
                  pug_html = pug_html + "</p>";
                  ;
                  pug_debug_line = 30;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 32;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<span class="space-right">';
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = project.startDate) ? "" : pug_interp);
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + " - ";
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = project.endDate || "Present") ? "" : pug_interp) + "</span>";
                  ;
                  pug_debug_line = 35;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  if (project.duration) {
                    ;
                    pug_debug_line = 36;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<span>";
                    ;
                    pug_debug_line = 37;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + '<i class="icon-clock mr-5"></i>';
                    ;
                    pug_debug_line = 38;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = project.duration) ? "" : pug_interp) + "</span>";
                  }
                  pug_html = pug_html + "</small></p>";
                  ;
                  pug_debug_line = 40;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<div class="mop-wrapper space-bottom">';
                  ;
                  pug_debug_line = 40;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + (null == (pug_interp = project.description) ? "" : pug_interp) + "</div>";
                  ;
                  pug_debug_line = 42;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  if (!_4.isEmpty(project.highlights)) {
                    ;
                    pug_debug_line = 43;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<ul>";
                    ;
                    pug_debug_line = 44;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    ;
                    (function() {
                      var $$obj2 = project.highlights;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index6 = 0, $$l2 = $$obj2.length; pug_index6 < $$l2; pug_index6++) {
                          var highlight = $$obj2[pug_index6];
                          ;
                          pug_debug_line = 45;
                          pug_debug_filename = "pug/background/projects-experience.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 45;
                          pug_debug_filename = "pug/background/projects-experience.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index6 in $$obj2) {
                          $$l2++;
                          var highlight = $$obj2[pug_index6];
                          ;
                          pug_debug_line = 45;
                          pug_debug_filename = "pug/background/projects-experience.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 45;
                          pug_debug_filename = "pug/background/projects-experience.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</ul>";
                  }
                  pug_html = pug_html + "</div></li>";
                }
              } else {
                var $$l = 0;
                for (var pug_index5 in $$obj) {
                  $$l++;
                  var project = $$obj[pug_index5];
                  ;
                  pug_debug_line = 12;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<li class="card card-nested clearfix">';
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<p class="clear-margin relative">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  if (!project.endDate) {
                    ;
                    pug_debug_line = 16;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + '<i class="icon-circle current-event" rel="tooltip" title="Currently Working" data-placement="left"></i>';
                  }
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  if (project.url) {
                    ;
                    pug_debug_line = 22;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", project.url, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 23;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<strong>";
                    ;
                    pug_debug_line = 23;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = project.name) ? "" : pug_interp) + "</strong></a>";
                  } else {
                    ;
                    pug_debug_line = 25;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<strong>";
                    ;
                    pug_debug_line = 25;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = project.name) ? "" : pug_interp) + "</strong>";
                  }
                  ;
                  pug_debug_line = 26;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  if (project.entity) {
                    ;
                    pug_debug_line = 27;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<span>";
                    ;
                    pug_debug_line = 28;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + ",&nbsp;";
                    ;
                    pug_debug_line = 28;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = project.entity) ? "" : pug_interp) + "</span>";
                  }
                  pug_html = pug_html + "</p>";
                  ;
                  pug_debug_line = 30;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 32;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<span class="space-right">';
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = project.startDate) ? "" : pug_interp);
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + " - ";
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = project.endDate || "Present") ? "" : pug_interp) + "</span>";
                  ;
                  pug_debug_line = 35;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  if (project.duration) {
                    ;
                    pug_debug_line = 36;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<span>";
                    ;
                    pug_debug_line = 37;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + '<i class="icon-clock mr-5"></i>';
                    ;
                    pug_debug_line = 38;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = project.duration) ? "" : pug_interp) + "</span>";
                  }
                  pug_html = pug_html + "</small></p>";
                  ;
                  pug_debug_line = 40;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + '<div class="mop-wrapper space-bottom">';
                  ;
                  pug_debug_line = 40;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  pug_html = pug_html + (null == (pug_interp = project.description) ? "" : pug_interp) + "</div>";
                  ;
                  pug_debug_line = 42;
                  pug_debug_filename = "pug/background/projects-experience.pug";
                  if (!_4.isEmpty(project.highlights)) {
                    ;
                    pug_debug_line = 43;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    pug_html = pug_html + "<ul>";
                    ;
                    pug_debug_line = 44;
                    pug_debug_filename = "pug/background/projects-experience.pug";
                    ;
                    (function() {
                      var $$obj2 = project.highlights;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index7 = 0, $$l2 = $$obj2.length; pug_index7 < $$l2; pug_index7++) {
                          var highlight = $$obj2[pug_index7];
                          ;
                          pug_debug_line = 45;
                          pug_debug_filename = "pug/background/projects-experience.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 45;
                          pug_debug_filename = "pug/background/projects-experience.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index7 in $$obj2) {
                          $$l2++;
                          var highlight = $$obj2[pug_index7];
                          ;
                          pug_debug_line = 45;
                          pug_debug_filename = "pug/background/projects-experience.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 45;
                          pug_debug_filename = "pug/background/projects-experience.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</ul>";
                  }
                  pug_html = pug_html + "</div></li>";
                }
              }
            }).call(this);
            pug_html = pug_html + "</ul></div></div>";
          }
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/background/skills.pug";
          if (!_4.isEmpty(resume2.skills)) {
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/background/skills.pug";
            pug_html = pug_html + '<div class="detail" id="skills">';
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/background/skills.pug";
            pug_html = pug_html + '<div class="icon">';
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/background/skills.pug";
            pug_html = pug_html + '<i class="fs-lg icon-tools"></i>';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/skills.pug";
            pug_html = pug_html + '<span class="mobile-title">';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/skills.pug";
            pug_html = pug_html + "Skills</span></div>";
            ;
            pug_debug_line = 7;
            pug_debug_filename = "pug/background/skills.pug";
            pug_html = pug_html + '<div class="info">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/skills.pug";
            pug_html = pug_html + '<h4 class="title text-uppercase">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/skills.pug";
            pug_html = pug_html + "Skills</h4>";
            ;
            pug_debug_line = 10;
            pug_debug_filename = "pug/background/skills.pug";
            pug_html = pug_html + '<div class="content">';
            ;
            pug_debug_line = 11;
            pug_debug_filename = "pug/background/skills.pug";
            pug_html = pug_html + '<ul class="list-unstyled clear-margin">';
            ;
            pug_debug_line = 12;
            pug_debug_filename = "pug/background/skills.pug";
            ;
            (function() {
              var $$obj = resume2.skills;
              if ("number" == typeof $$obj.length) {
                for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
                  var skill = $$obj[pug_index8];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/skills.pug";
                  pug_html = pug_html + '<li class="card card-nested card-skills">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/skills.pug";
                  if (skill.display_progress_bar) {
                    ;
                    pug_debug_line = 15;
                    pug_debug_filename = "pug/background/skills.pug";
                    pug_html = pug_html + "<div" + (' class="skill-level" data-toggle="tooltip"' + pug_attr("title", skill.level, true, false) + ' data-placement="left"') + ">";
                    ;
                    pug_debug_line = 16;
                    pug_debug_filename = "pug/background/skills.pug";
                    pug_html = pug_html + "<div" + pug_attr("class", pug_classes(["skill-progress", skill.skill_class], [false, true]), false, false) + "></div></div>";
                  }
                  ;
                  pug_debug_line = 18;
                  pug_debug_filename = "pug/background/skills.pug";
                  pug_html = pug_html + '<div class="skill-info">';
                  ;
                  pug_debug_line = 19;
                  pug_debug_filename = "pug/background/skills.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 19;
                  pug_debug_filename = "pug/background/skills.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = skill.name) ? "" : pug_interp) + "</strong>";
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/skills.pug";
                  if (!_4.isEmpty(skill.keywords)) {
                    ;
                    pug_debug_line = 22;
                    pug_debug_filename = "pug/background/skills.pug";
                    pug_html = pug_html + '<div class="space-top labels">';
                    ;
                    pug_debug_line = 23;
                    pug_debug_filename = "pug/background/skills.pug";
                    ;
                    (function() {
                      var $$obj2 = skill.keywords;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index9 = 0, $$l2 = $$obj2.length; pug_index9 < $$l2; pug_index9++) {
                          var keyword = $$obj2[pug_index9];
                          ;
                          pug_debug_line = 24;
                          pug_debug_filename = "pug/background/skills.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 24;
                          pug_debug_filename = "pug/background/skills.pug";
                          pug_html = pug_html + (null == (pug_interp = keyword) ? "" : pug_interp) + "</span>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index9 in $$obj2) {
                          $$l2++;
                          var keyword = $$obj2[pug_index9];
                          ;
                          pug_debug_line = 24;
                          pug_debug_filename = "pug/background/skills.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 24;
                          pug_debug_filename = "pug/background/skills.pug";
                          pug_html = pug_html + (null == (pug_interp = keyword) ? "" : pug_interp) + "</span>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</div>";
                  }
                  pug_html = pug_html + "</div></li>";
                }
              } else {
                var $$l = 0;
                for (var pug_index8 in $$obj) {
                  $$l++;
                  var skill = $$obj[pug_index8];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/skills.pug";
                  pug_html = pug_html + '<li class="card card-nested card-skills">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/skills.pug";
                  if (skill.display_progress_bar) {
                    ;
                    pug_debug_line = 15;
                    pug_debug_filename = "pug/background/skills.pug";
                    pug_html = pug_html + "<div" + (' class="skill-level" data-toggle="tooltip"' + pug_attr("title", skill.level, true, false) + ' data-placement="left"') + ">";
                    ;
                    pug_debug_line = 16;
                    pug_debug_filename = "pug/background/skills.pug";
                    pug_html = pug_html + "<div" + pug_attr("class", pug_classes(["skill-progress", skill.skill_class], [false, true]), false, false) + "></div></div>";
                  }
                  ;
                  pug_debug_line = 18;
                  pug_debug_filename = "pug/background/skills.pug";
                  pug_html = pug_html + '<div class="skill-info">';
                  ;
                  pug_debug_line = 19;
                  pug_debug_filename = "pug/background/skills.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 19;
                  pug_debug_filename = "pug/background/skills.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = skill.name) ? "" : pug_interp) + "</strong>";
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/skills.pug";
                  if (!_4.isEmpty(skill.keywords)) {
                    ;
                    pug_debug_line = 22;
                    pug_debug_filename = "pug/background/skills.pug";
                    pug_html = pug_html + '<div class="space-top labels">';
                    ;
                    pug_debug_line = 23;
                    pug_debug_filename = "pug/background/skills.pug";
                    ;
                    (function() {
                      var $$obj2 = skill.keywords;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index10 = 0, $$l2 = $$obj2.length; pug_index10 < $$l2; pug_index10++) {
                          var keyword = $$obj2[pug_index10];
                          ;
                          pug_debug_line = 24;
                          pug_debug_filename = "pug/background/skills.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 24;
                          pug_debug_filename = "pug/background/skills.pug";
                          pug_html = pug_html + (null == (pug_interp = keyword) ? "" : pug_interp) + "</span>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index10 in $$obj2) {
                          $$l2++;
                          var keyword = $$obj2[pug_index10];
                          ;
                          pug_debug_line = 24;
                          pug_debug_filename = "pug/background/skills.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 24;
                          pug_debug_filename = "pug/background/skills.pug";
                          pug_html = pug_html + (null == (pug_interp = keyword) ? "" : pug_interp) + "</span>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</div>";
                  }
                  pug_html = pug_html + "</div></li>";
                }
              }
            }).call(this);
            pug_html = pug_html + "</ul></div></div></div>";
          }
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/background/education.pug";
          if (!_4.isEmpty(resume2.education)) {
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/background/education.pug";
            pug_html = pug_html + '<div class="detail" id="education">';
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/background/education.pug";
            pug_html = pug_html + '<div class="icon">';
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/background/education.pug";
            pug_html = pug_html + '<i class="fs-lg icon-graduation-cap"></i>';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/education.pug";
            pug_html = pug_html + '<span class="mobile-title">';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/education.pug";
            pug_html = pug_html + "Education</span></div>";
            ;
            pug_debug_line = 7;
            pug_debug_filename = "pug/background/education.pug";
            pug_html = pug_html + '<div class="info">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/education.pug";
            pug_html = pug_html + '<h4 class="title text-uppercase">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/education.pug";
            pug_html = pug_html + "Education</h4>";
            ;
            pug_debug_line = 10;
            pug_debug_filename = "pug/background/education.pug";
            pug_html = pug_html + '<div class="content">';
            ;
            pug_debug_line = 11;
            pug_debug_filename = "pug/background/education.pug";
            pug_html = pug_html + '<ul class="list-unstyled clear-margin">';
            ;
            pug_debug_line = 12;
            pug_debug_filename = "pug/background/education.pug";
            ;
            (function() {
              var $$obj = resume2.education;
              if ("number" == typeof $$obj.length) {
                for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
                  var education_info = $$obj[pug_index11];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + '<p class="clear-margin relative">';
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/education.pug";
                  if (!education_info.endDate) {
                    ;
                    pug_debug_line = 17;
                    pug_debug_filename = "pug/background/education.pug";
                    pug_html = pug_html + '<i class="icon-circle current-event" rel="tooltip" title="Currently Pursuing" data-placement="left"></i>';
                  }
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.area) ? "" : pug_interp);
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + ", ";
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.studyType) ? "" : pug_interp);
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + ",&nbsp;</strong>";
                  ;
                  pug_debug_line = 25;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.institution) ? "" : pug_interp) + "</p>";
                  ;
                  pug_debug_line = 27;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + "<p" + pug_attr("class", pug_classes(["text-muted", !education_info.gpa && _4.isEmpty(education_info.courses) ? "clear-margin" : ""], [false, true]), false, false) + ">";
                  ;
                  pug_debug_line = 28;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 29;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.startDate) ? "" : pug_interp);
                  ;
                  pug_debug_line = 29;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + " - ";
                  ;
                  pug_debug_line = 29;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.endDate || "Present") ? "" : pug_interp) + "</small></p>";
                  ;
                  pug_debug_line = 30;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + "<i>";
                  ;
                  pug_debug_line = 30;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.gpa) ? "" : pug_interp) + "</i>";
                  ;
                  pug_debug_line = 32;
                  pug_debug_filename = "pug/background/education.pug";
                  if (!_4.isEmpty(education_info.courses)) {
                    ;
                    pug_debug_line = 33;
                    pug_debug_filename = "pug/background/education.pug";
                    pug_html = pug_html + '<div class="space-top labels">';
                    ;
                    pug_debug_line = 34;
                    pug_debug_filename = "pug/background/education.pug";
                    ;
                    (function() {
                      var $$obj2 = education_info.courses;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index12 = 0, $$l2 = $$obj2.length; pug_index12 < $$l2; pug_index12++) {
                          var course = $$obj2[pug_index12];
                          ;
                          pug_debug_line = 35;
                          pug_debug_filename = "pug/background/education.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 35;
                          pug_debug_filename = "pug/background/education.pug";
                          pug_html = pug_html + (null == (pug_interp = course) ? "" : pug_interp) + "</span>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index12 in $$obj2) {
                          $$l2++;
                          var course = $$obj2[pug_index12];
                          ;
                          pug_debug_line = 35;
                          pug_debug_filename = "pug/background/education.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 35;
                          pug_debug_filename = "pug/background/education.pug";
                          pug_html = pug_html + (null == (pug_interp = course) ? "" : pug_interp) + "</span>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</div>";
                  }
                  pug_html = pug_html + "</div></li>";
                }
              } else {
                var $$l = 0;
                for (var pug_index11 in $$obj) {
                  $$l++;
                  var education_info = $$obj[pug_index11];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + '<p class="clear-margin relative">';
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/education.pug";
                  if (!education_info.endDate) {
                    ;
                    pug_debug_line = 17;
                    pug_debug_filename = "pug/background/education.pug";
                    pug_html = pug_html + '<i class="icon-circle current-event" rel="tooltip" title="Currently Pursuing" data-placement="left"></i>';
                  }
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.area) ? "" : pug_interp);
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + ", ";
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.studyType) ? "" : pug_interp);
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + ",&nbsp;</strong>";
                  ;
                  pug_debug_line = 25;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.institution) ? "" : pug_interp) + "</p>";
                  ;
                  pug_debug_line = 27;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + "<p" + pug_attr("class", pug_classes(["text-muted", !education_info.gpa && _4.isEmpty(education_info.courses) ? "clear-margin" : ""], [false, true]), false, false) + ">";
                  ;
                  pug_debug_line = 28;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 29;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.startDate) ? "" : pug_interp);
                  ;
                  pug_debug_line = 29;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + " - ";
                  ;
                  pug_debug_line = 29;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.endDate || "Present") ? "" : pug_interp) + "</small></p>";
                  ;
                  pug_debug_line = 30;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + "<i>";
                  ;
                  pug_debug_line = 30;
                  pug_debug_filename = "pug/background/education.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = education_info.gpa) ? "" : pug_interp) + "</i>";
                  ;
                  pug_debug_line = 32;
                  pug_debug_filename = "pug/background/education.pug";
                  if (!_4.isEmpty(education_info.courses)) {
                    ;
                    pug_debug_line = 33;
                    pug_debug_filename = "pug/background/education.pug";
                    pug_html = pug_html + '<div class="space-top labels">';
                    ;
                    pug_debug_line = 34;
                    pug_debug_filename = "pug/background/education.pug";
                    ;
                    (function() {
                      var $$obj2 = education_info.courses;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index13 = 0, $$l2 = $$obj2.length; pug_index13 < $$l2; pug_index13++) {
                          var course = $$obj2[pug_index13];
                          ;
                          pug_debug_line = 35;
                          pug_debug_filename = "pug/background/education.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 35;
                          pug_debug_filename = "pug/background/education.pug";
                          pug_html = pug_html + (null == (pug_interp = course) ? "" : pug_interp) + "</span>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index13 in $$obj2) {
                          $$l2++;
                          var course = $$obj2[pug_index13];
                          ;
                          pug_debug_line = 35;
                          pug_debug_filename = "pug/background/education.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 35;
                          pug_debug_filename = "pug/background/education.pug";
                          pug_html = pug_html + (null == (pug_interp = course) ? "" : pug_interp) + "</span>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</div>";
                  }
                  pug_html = pug_html + "</div></li>";
                }
              }
            }).call(this);
            pug_html = pug_html + "</ul></div></div></div>";
          }
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/background/certificates.pug";
          if (!_4.isEmpty(resume2.certificates)) {
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/background/certificates.pug";
            pug_html = pug_html + '<div class="detail" id="certificates">';
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/background/certificates.pug";
            pug_html = pug_html + '<div class="icon">';
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/background/certificates.pug";
            pug_html = pug_html + '<i class="fs-lg icon-profile"></i>';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/certificates.pug";
            pug_html = pug_html + '<span class="mobile-title">';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/certificates.pug";
            pug_html = pug_html + "Certificates</span></div>";
            ;
            pug_debug_line = 7;
            pug_debug_filename = "pug/background/certificates.pug";
            pug_html = pug_html + '<div class="info">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/certificates.pug";
            pug_html = pug_html + '<h4 class="title text-uppercase">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/certificates.pug";
            pug_html = pug_html + "Certificates</h4>";
            ;
            pug_debug_line = 10;
            pug_debug_filename = "pug/background/certificates.pug";
            pug_html = pug_html + '<div class="content">';
            ;
            pug_debug_line = 11;
            pug_debug_filename = "pug/background/certificates.pug";
            pug_html = pug_html + '<ul class="list-unstyled clear-margin">';
            ;
            pug_debug_line = 12;
            pug_debug_filename = "pug/background/certificates.pug";
            ;
            (function() {
              var $$obj = resume2.certificates;
              if ("number" == typeof $$obj.length) {
                for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
                  var certificate = $$obj[pug_index14];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + '<p class="clear-margin" itemprop="certificate">';
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 17;
                  pug_debug_filename = "pug/background/certificates.pug";
                  if (certificate.url) {
                    ;
                    pug_debug_line = 18;
                    pug_debug_filename = "pug/background/certificates.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", certificate.url, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 18;
                    pug_debug_filename = "pug/background/certificates.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = certificate.name) ? "" : pug_interp) + "</a>";
                    ;
                    pug_debug_line = 19;
                    pug_debug_filename = "pug/background/certificates.pug";
                    pug_html = pug_html + ",&nbsp;";
                  } else {
                    ;
                    pug_debug_line = 21;
                    pug_debug_filename = "pug/background/certificates.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = certificate.name + ", ") ? "" : pug_interp);
                  }
                  pug_html = pug_html + "</strong>";
                  ;
                  pug_debug_line = 22;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = certificate.issuer) ? "" : pug_interp) + "</p>";
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 25;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 26;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + "Issued on: ";
                  ;
                  pug_debug_line = 26;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = certificate.date) ? "" : pug_interp) + "</small></p></div></li>";
                }
              } else {
                var $$l = 0;
                for (var pug_index14 in $$obj) {
                  $$l++;
                  var certificate = $$obj[pug_index14];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + '<p class="clear-margin" itemprop="certificate">';
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 17;
                  pug_debug_filename = "pug/background/certificates.pug";
                  if (certificate.url) {
                    ;
                    pug_debug_line = 18;
                    pug_debug_filename = "pug/background/certificates.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", certificate.url, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 18;
                    pug_debug_filename = "pug/background/certificates.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = certificate.name) ? "" : pug_interp) + "</a>";
                    ;
                    pug_debug_line = 19;
                    pug_debug_filename = "pug/background/certificates.pug";
                    pug_html = pug_html + ",&nbsp;";
                  } else {
                    ;
                    pug_debug_line = 21;
                    pug_debug_filename = "pug/background/certificates.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = certificate.name + ", ") ? "" : pug_interp);
                  }
                  pug_html = pug_html + "</strong>";
                  ;
                  pug_debug_line = 22;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = certificate.issuer) ? "" : pug_interp) + "</p>";
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 25;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 26;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + "Issued on: ";
                  ;
                  pug_debug_line = 26;
                  pug_debug_filename = "pug/background/certificates.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = certificate.date) ? "" : pug_interp) + "</small></p></div></li>";
                }
              }
            }).call(this);
            pug_html = pug_html + "</ul></div></div></div>";
          }
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/background/awards.pug";
          if (!_4.isEmpty(resume2.awards)) {
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/background/awards.pug";
            pug_html = pug_html + '<div class="detail" id="awards">';
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/background/awards.pug";
            pug_html = pug_html + '<div class="icon">';
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/background/awards.pug";
            pug_html = pug_html + '<i class="fs-lg icon-trophy"></i>';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/awards.pug";
            pug_html = pug_html + '<span class="mobile-title">';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/awards.pug";
            pug_html = pug_html + "Awards</span></div>";
            ;
            pug_debug_line = 7;
            pug_debug_filename = "pug/background/awards.pug";
            pug_html = pug_html + '<div class="info">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/awards.pug";
            pug_html = pug_html + '<h4 class="title text-uppercase">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/awards.pug";
            pug_html = pug_html + "Awards</h4>";
            ;
            pug_debug_line = 10;
            pug_debug_filename = "pug/background/awards.pug";
            pug_html = pug_html + '<div class="content">';
            ;
            pug_debug_line = 11;
            pug_debug_filename = "pug/background/awards.pug";
            pug_html = pug_html + '<ul class="list-unstyled clear-margin">';
            ;
            pug_debug_line = 12;
            pug_debug_filename = "pug/background/awards.pug";
            ;
            (function() {
              var $$obj = resume2.awards;
              if ("number" == typeof $$obj.length) {
                for (var pug_index15 = 0, $$l = $$obj.length; pug_index15 < $$l; pug_index15++) {
                  var award = $$obj[pug_index15];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + '<p class="clear-margin" itemprop="award">';
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = award.title + " ") ? "" : pug_interp) + "</strong>";
                  ;
                  pug_debug_line = 17;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + ",&nbsp;";
                  ;
                  pug_debug_line = 17;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = award.awarder) ? "" : pug_interp) + "</p>";
                  ;
                  pug_debug_line = 19;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 20;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + "Awarded on: ";
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = award.date) ? "" : pug_interp) + "</small></p>";
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + '<div class="mop-wrapper">';
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + (null == (pug_interp = award.summary) ? "" : pug_interp) + "</div></div></li>";
                }
              } else {
                var $$l = 0;
                for (var pug_index15 in $$obj) {
                  $$l++;
                  var award = $$obj[pug_index15];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + '<p class="clear-margin" itemprop="award">';
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = award.title + " ") ? "" : pug_interp) + "</strong>";
                  ;
                  pug_debug_line = 17;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + ",&nbsp;";
                  ;
                  pug_debug_line = 17;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = award.awarder) ? "" : pug_interp) + "</p>";
                  ;
                  pug_debug_line = 19;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 20;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + "Awarded on: ";
                  ;
                  pug_debug_line = 21;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = award.date) ? "" : pug_interp) + "</small></p>";
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + '<div class="mop-wrapper">';
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/awards.pug";
                  pug_html = pug_html + (null == (pug_interp = award.summary) ? "" : pug_interp) + "</div></div></li>";
                }
              }
            }).call(this);
            pug_html = pug_html + "</ul></div></div></div>";
          }
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/background/volunteer-work.pug";
          if (!_4.isEmpty(resume2.volunteer)) {
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/background/volunteer-work.pug";
            pug_html = pug_html + '<div class="detail" id="volunteer-work">';
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/background/volunteer-work.pug";
            pug_html = pug_html + '<div class="icon">';
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/background/volunteer-work.pug";
            pug_html = pug_html + '<i class="fs-lg icon-child"></i>';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/volunteer-work.pug";
            pug_html = pug_html + '<span class="mobile-title">';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/volunteer-work.pug";
            pug_html = pug_html + "Volunteer Work</span></div>";
            ;
            pug_debug_line = 7;
            pug_debug_filename = "pug/background/volunteer-work.pug";
            pug_html = pug_html + '<div class="info">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/volunteer-work.pug";
            pug_html = pug_html + '<h4 class="title text-uppercase">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/volunteer-work.pug";
            pug_html = pug_html + "Volunteer Work</h4>";
            ;
            pug_debug_line = 10;
            pug_debug_filename = "pug/background/volunteer-work.pug";
            pug_html = pug_html + '<div class="content">';
            ;
            pug_debug_line = 11;
            pug_debug_filename = "pug/background/volunteer-work.pug";
            pug_html = pug_html + '<ul class="list-unstyled clear-margin">';
            ;
            pug_debug_line = 12;
            pug_debug_filename = "pug/background/volunteer-work.pug";
            ;
            (function() {
              var $$obj = resume2.volunteer;
              if ("number" == typeof $$obj.length) {
                for (var pug_index16 = 0, $$l = $$obj.length; pug_index16 < $$l; pug_index16++) {
                  var volunteer_info = $$obj[pug_index16];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + '<p class="clear-margin relative">';
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  if (!volunteer_info.endDate) {
                    ;
                    pug_debug_line = 17;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    pug_html = pug_html + '<i class="icon-circle current-event" rel="tooltip" title="Currently Volunteering" data-placement="left"></i>';
                  }
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = volunteer_info.position + ", ") ? "" : pug_interp) + "</strong>";
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  if (volunteer_info.website) {
                    ;
                    pug_debug_line = 25;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", volunteer_info.website, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 25;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = volunteer_info.organization) ? "" : pug_interp) + "</a>";
                  } else {
                    ;
                    pug_debug_line = 27;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = volunteer_info.organization) ? "" : pug_interp);
                  }
                  pug_html = pug_html + "</p>";
                  ;
                  pug_debug_line = 29;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 30;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = volunteer_info.startDate) ? "" : pug_interp);
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + " - ";
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = volunteer_info.endDate || "Present") ? "" : pug_interp) + "</small></p>";
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + '<div class="mop-wrapper">';
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + (null == (pug_interp = volunteer_info.summary) ? "" : pug_interp) + "</div>";
                  ;
                  pug_debug_line = 35;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  if (!_4.isEmpty(volunteer_info.highlights)) {
                    ;
                    pug_debug_line = 36;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    pug_html = pug_html + "<ul>";
                    ;
                    pug_debug_line = 37;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    ;
                    (function() {
                      var $$obj2 = volunteer_info.highlights;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index17 = 0, $$l2 = $$obj2.length; pug_index17 < $$l2; pug_index17++) {
                          var highlight = $$obj2[pug_index17];
                          ;
                          pug_debug_line = 38;
                          pug_debug_filename = "pug/background/volunteer-work.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 38;
                          pug_debug_filename = "pug/background/volunteer-work.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index17 in $$obj2) {
                          $$l2++;
                          var highlight = $$obj2[pug_index17];
                          ;
                          pug_debug_line = 38;
                          pug_debug_filename = "pug/background/volunteer-work.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 38;
                          pug_debug_filename = "pug/background/volunteer-work.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</ul>";
                  }
                  pug_html = pug_html + "</div></li>";
                }
              } else {
                var $$l = 0;
                for (var pug_index16 in $$obj) {
                  $$l++;
                  var volunteer_info = $$obj[pug_index16];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + '<p class="clear-margin relative">';
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  if (!volunteer_info.endDate) {
                    ;
                    pug_debug_line = 17;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    pug_html = pug_html + '<i class="icon-circle current-event" rel="tooltip" title="Currently Volunteering" data-placement="left"></i>';
                  }
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = volunteer_info.position + ", ") ? "" : pug_interp) + "</strong>";
                  ;
                  pug_debug_line = 24;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  if (volunteer_info.website) {
                    ;
                    pug_debug_line = 25;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", volunteer_info.website, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 25;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = volunteer_info.organization) ? "" : pug_interp) + "</a>";
                  } else {
                    ;
                    pug_debug_line = 27;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = volunteer_info.organization) ? "" : pug_interp);
                  }
                  pug_html = pug_html + "</p>";
                  ;
                  pug_debug_line = 29;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 30;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = volunteer_info.startDate) ? "" : pug_interp);
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + " - ";
                  ;
                  pug_debug_line = 31;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = volunteer_info.endDate || "Present") ? "" : pug_interp) + "</small></p>";
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + '<div class="mop-wrapper">';
                  ;
                  pug_debug_line = 33;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  pug_html = pug_html + (null == (pug_interp = volunteer_info.summary) ? "" : pug_interp) + "</div>";
                  ;
                  pug_debug_line = 35;
                  pug_debug_filename = "pug/background/volunteer-work.pug";
                  if (!_4.isEmpty(volunteer_info.highlights)) {
                    ;
                    pug_debug_line = 36;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    pug_html = pug_html + "<ul>";
                    ;
                    pug_debug_line = 37;
                    pug_debug_filename = "pug/background/volunteer-work.pug";
                    ;
                    (function() {
                      var $$obj2 = volunteer_info.highlights;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index18 = 0, $$l2 = $$obj2.length; pug_index18 < $$l2; pug_index18++) {
                          var highlight = $$obj2[pug_index18];
                          ;
                          pug_debug_line = 38;
                          pug_debug_filename = "pug/background/volunteer-work.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 38;
                          pug_debug_filename = "pug/background/volunteer-work.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index18 in $$obj2) {
                          $$l2++;
                          var highlight = $$obj2[pug_index18];
                          ;
                          pug_debug_line = 38;
                          pug_debug_filename = "pug/background/volunteer-work.pug";
                          pug_html = pug_html + '<li class="mop-wrapper">';
                          ;
                          pug_debug_line = 38;
                          pug_debug_filename = "pug/background/volunteer-work.pug";
                          pug_html = pug_html + (null == (pug_interp = highlight) ? "" : pug_interp) + "</li>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</ul>";
                  }
                  pug_html = pug_html + "</div></li>";
                }
              }
            }).call(this);
            pug_html = pug_html + "</ul></div></div></div>";
          }
          ;
          pug_debug_line = 2;
          pug_debug_filename = "pug/background/publications.pug";
          if (!_4.isEmpty(resume2.publications)) {
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/background/publications.pug";
            pug_html = pug_html + '<div class="detail" id="publications">';
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/background/publications.pug";
            pug_html = pug_html + '<div class="icon">';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/publications.pug";
            pug_html = pug_html + '<i class="fs-lg icon-newspaper"></i>';
            ;
            pug_debug_line = 6;
            pug_debug_filename = "pug/background/publications.pug";
            pug_html = pug_html + '<span class="mobile-title">';
            ;
            pug_debug_line = 6;
            pug_debug_filename = "pug/background/publications.pug";
            pug_html = pug_html + "Publications</span></div>";
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/publications.pug";
            pug_html = pug_html + '<div class="info">';
            ;
            pug_debug_line = 9;
            pug_debug_filename = "pug/background/publications.pug";
            pug_html = pug_html + '<h4 class="title text-uppercase">';
            ;
            pug_debug_line = 9;
            pug_debug_filename = "pug/background/publications.pug";
            pug_html = pug_html + "Publications</h4>";
            ;
            pug_debug_line = 11;
            pug_debug_filename = "pug/background/publications.pug";
            pug_html = pug_html + '<div class="content">';
            ;
            pug_debug_line = 12;
            pug_debug_filename = "pug/background/publications.pug";
            pug_html = pug_html + '<ul class="list-unstyled clear-margin">';
            ;
            pug_debug_line = 13;
            pug_debug_filename = "pug/background/publications.pug";
            ;
            (function() {
              var $$obj = resume2.publications;
              if ("number" == typeof $$obj.length) {
                for (var pug_index19 = 0, $$l = $$obj.length; pug_index19 < $$l; pug_index19++) {
                  var publication = $$obj[pug_index19];
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + '<p class="clear-margin">';
                  ;
                  pug_debug_line = 17;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 18;
                  pug_debug_filename = "pug/background/publications.pug";
                  if (publication.url) {
                    ;
                    pug_debug_line = 19;
                    pug_debug_filename = "pug/background/publications.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", publication.url, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 19;
                    pug_debug_filename = "pug/background/publications.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = publication.name) ? "" : pug_interp) + "</a>";
                    ;
                    pug_debug_line = 20;
                    pug_debug_filename = "pug/background/publications.pug";
                    pug_html = pug_html + "&nbsp;,&nbsp;";
                  } else {
                    ;
                    pug_debug_line = 22;
                    pug_debug_filename = "pug/background/publications.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = publication.name + ", ") ? "" : pug_interp);
                  }
                  pug_html = pug_html + "</strong>";
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = publication.publisher) ? "" : pug_interp) + "</p>";
                  ;
                  pug_debug_line = 25;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 26;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 26;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = "Published on: " + publication.releaseDate) ? "" : pug_interp) + "</small></p>";
                  ;
                  pug_debug_line = 28;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + '<div class="mop-wrapper">';
                  ;
                  pug_debug_line = 28;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + (null == (pug_interp = publication.summary) ? "" : pug_interp) + "</div></div></li>";
                }
              } else {
                var $$l = 0;
                for (var pug_index19 in $$obj) {
                  $$l++;
                  var publication = $$obj[pug_index19];
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + '<div class="content">';
                  ;
                  pug_debug_line = 16;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + '<p class="clear-margin">';
                  ;
                  pug_debug_line = 17;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 18;
                  pug_debug_filename = "pug/background/publications.pug";
                  if (publication.url) {
                    ;
                    pug_debug_line = 19;
                    pug_debug_filename = "pug/background/publications.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", publication.url, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 19;
                    pug_debug_filename = "pug/background/publications.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = publication.name) ? "" : pug_interp) + "</a>";
                    ;
                    pug_debug_line = 20;
                    pug_debug_filename = "pug/background/publications.pug";
                    pug_html = pug_html + "&nbsp;,&nbsp;";
                  } else {
                    ;
                    pug_debug_line = 22;
                    pug_debug_filename = "pug/background/publications.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = publication.name + ", ") ? "" : pug_interp);
                  }
                  pug_html = pug_html + "</strong>";
                  ;
                  pug_debug_line = 23;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = publication.publisher) ? "" : pug_interp) + "</p>";
                  ;
                  pug_debug_line = 25;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + '<p class="text-muted">';
                  ;
                  pug_debug_line = 26;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + "<small>";
                  ;
                  pug_debug_line = 26;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = "Published on: " + publication.releaseDate) ? "" : pug_interp) + "</small></p>";
                  ;
                  pug_debug_line = 28;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + '<div class="mop-wrapper">';
                  ;
                  pug_debug_line = 28;
                  pug_debug_filename = "pug/background/publications.pug";
                  pug_html = pug_html + (null == (pug_interp = publication.summary) ? "" : pug_interp) + "</div></div></li>";
                }
              }
            }).call(this);
            pug_html = pug_html + "</ul></div></div></div>";
          }
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/background/interests.pug";
          if (!_4.isEmpty(resume2.interests)) {
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/background/interests.pug";
            pug_html = pug_html + '<div class="detail" id="interests">';
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/background/interests.pug";
            pug_html = pug_html + '<div class="icon">';
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/background/interests.pug";
            pug_html = pug_html + '<i class="fs-lg icon-heart"></i>';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/interests.pug";
            pug_html = pug_html + '<span class="mobile-title">';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/interests.pug";
            pug_html = pug_html + "Interests</span></div>";
            ;
            pug_debug_line = 7;
            pug_debug_filename = "pug/background/interests.pug";
            pug_html = pug_html + '<div class="info">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/interests.pug";
            pug_html = pug_html + '<h4 class="title text-uppercase">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/interests.pug";
            pug_html = pug_html + "Interests</h4>";
            ;
            pug_debug_line = 10;
            pug_debug_filename = "pug/background/interests.pug";
            pug_html = pug_html + '<div class="content">';
            ;
            pug_debug_line = 11;
            pug_debug_filename = "pug/background/interests.pug";
            pug_html = pug_html + '<ul class="list-unstyled clear-margin">';
            ;
            pug_debug_line = 12;
            pug_debug_filename = "pug/background/interests.pug";
            ;
            (function() {
              var $$obj = resume2.interests;
              if ("number" == typeof $$obj.length) {
                for (var pug_index20 = 0, $$l = $$obj.length; pug_index20 < $$l; pug_index20++) {
                  var interest = $$obj[pug_index20];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/interests.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/interests.pug";
                  pug_html = pug_html + "<p>";
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/interests.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/interests.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = interest.name) ? "" : pug_interp) + "</strong></p>";
                  ;
                  pug_debug_line = 17;
                  pug_debug_filename = "pug/background/interests.pug";
                  if (!_4.isEmpty(interest.keywords)) {
                    ;
                    pug_debug_line = 18;
                    pug_debug_filename = "pug/background/interests.pug";
                    pug_html = pug_html + '<div class="space-top labels">';
                    ;
                    pug_debug_line = 19;
                    pug_debug_filename = "pug/background/interests.pug";
                    ;
                    (function() {
                      var $$obj2 = interest.keywords;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index21 = 0, $$l2 = $$obj2.length; pug_index21 < $$l2; pug_index21++) {
                          var keyword = $$obj2[pug_index21];
                          ;
                          pug_debug_line = 20;
                          pug_debug_filename = "pug/background/interests.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 20;
                          pug_debug_filename = "pug/background/interests.pug";
                          pug_html = pug_html + pug_escape(null == (pug_interp = keyword) ? "" : pug_interp) + "</span>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index21 in $$obj2) {
                          $$l2++;
                          var keyword = $$obj2[pug_index21];
                          ;
                          pug_debug_line = 20;
                          pug_debug_filename = "pug/background/interests.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 20;
                          pug_debug_filename = "pug/background/interests.pug";
                          pug_html = pug_html + pug_escape(null == (pug_interp = keyword) ? "" : pug_interp) + "</span>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</div>";
                  }
                  pug_html = pug_html + "</li>";
                }
              } else {
                var $$l = 0;
                for (var pug_index20 in $$obj) {
                  $$l++;
                  var interest = $$obj[pug_index20];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/interests.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/interests.pug";
                  pug_html = pug_html + "<p>";
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/interests.pug";
                  pug_html = pug_html + "<strong>";
                  ;
                  pug_debug_line = 15;
                  pug_debug_filename = "pug/background/interests.pug";
                  pug_html = pug_html + pug_escape(null == (pug_interp = interest.name) ? "" : pug_interp) + "</strong></p>";
                  ;
                  pug_debug_line = 17;
                  pug_debug_filename = "pug/background/interests.pug";
                  if (!_4.isEmpty(interest.keywords)) {
                    ;
                    pug_debug_line = 18;
                    pug_debug_filename = "pug/background/interests.pug";
                    pug_html = pug_html + '<div class="space-top labels">';
                    ;
                    pug_debug_line = 19;
                    pug_debug_filename = "pug/background/interests.pug";
                    ;
                    (function() {
                      var $$obj2 = interest.keywords;
                      if ("number" == typeof $$obj2.length) {
                        for (var pug_index22 = 0, $$l2 = $$obj2.length; pug_index22 < $$l2; pug_index22++) {
                          var keyword = $$obj2[pug_index22];
                          ;
                          pug_debug_line = 20;
                          pug_debug_filename = "pug/background/interests.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 20;
                          pug_debug_filename = "pug/background/interests.pug";
                          pug_html = pug_html + pug_escape(null == (pug_interp = keyword) ? "" : pug_interp) + "</span>";
                        }
                      } else {
                        var $$l2 = 0;
                        for (var pug_index22 in $$obj2) {
                          $$l2++;
                          var keyword = $$obj2[pug_index22];
                          ;
                          pug_debug_line = 20;
                          pug_debug_filename = "pug/background/interests.pug";
                          pug_html = pug_html + '<span class="label label-keyword">';
                          ;
                          pug_debug_line = 20;
                          pug_debug_filename = "pug/background/interests.pug";
                          pug_html = pug_html + pug_escape(null == (pug_interp = keyword) ? "" : pug_interp) + "</span>";
                        }
                      }
                    }).call(this);
                    pug_html = pug_html + "</div>";
                  }
                  pug_html = pug_html + "</li>";
                }
              }
            }).call(this);
            pug_html = pug_html + "</ul></div></div></div>";
          }
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/background/references.pug";
          if (!_4.isEmpty(resume2.references)) {
            ;
            pug_debug_line = 2;
            pug_debug_filename = "pug/background/references.pug";
            pug_html = pug_html + '<div class="detail" id="references">';
            ;
            pug_debug_line = 3;
            pug_debug_filename = "pug/background/references.pug";
            pug_html = pug_html + '<div class="icon">';
            ;
            pug_debug_line = 4;
            pug_debug_filename = "pug/background/references.pug";
            pug_html = pug_html + '<i class="fs-lg icon-thumbs-up"></i>';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/references.pug";
            pug_html = pug_html + '<span class="mobile-title">';
            ;
            pug_debug_line = 5;
            pug_debug_filename = "pug/background/references.pug";
            pug_html = pug_html + "References</span></div>";
            ;
            pug_debug_line = 7;
            pug_debug_filename = "pug/background/references.pug";
            pug_html = pug_html + '<div class="info">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/references.pug";
            pug_html = pug_html + '<h4 class="title text-uppercase">';
            ;
            pug_debug_line = 8;
            pug_debug_filename = "pug/background/references.pug";
            pug_html = pug_html + "References</h4>";
            ;
            pug_debug_line = 10;
            pug_debug_filename = "pug/background/references.pug";
            pug_html = pug_html + '<div class="content">';
            ;
            pug_debug_line = 11;
            pug_debug_filename = "pug/background/references.pug";
            pug_html = pug_html + '<ul class="list-unstyled clear-margin">';
            ;
            pug_debug_line = 12;
            pug_debug_filename = "pug/background/references.pug";
            ;
            (function() {
              var $$obj = resume2.references;
              if ("number" == typeof $$obj.length) {
                for (var pug_index23 = 0, $$l = $$obj.length; pug_index23 < $$l; pug_index23++) {
                  var reference_info = $$obj[pug_index23];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/references.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/references.pug";
                  if (reference_info.website) {
                    ;
                    pug_debug_line = 15;
                    pug_debug_filename = "pug/background/references.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", reference_info.website, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 15;
                    pug_debug_filename = "pug/background/references.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = reference_info.name) ? "" : pug_interp) + "</a>";
                  } else {
                    ;
                    pug_debug_line = 17;
                    pug_debug_filename = "pug/background/references.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = reference_info.name) ? "" : pug_interp);
                  }
                  ;
                  pug_debug_line = 19;
                  pug_debug_filename = "pug/background/references.pug";
                  pug_html = pug_html + '<blockquote class="quote">';
                  ;
                  pug_debug_line = 20;
                  pug_debug_filename = "pug/background/references.pug";
                  pug_html = pug_html + '<div class="mop-wrapper">';
                  ;
                  pug_debug_line = 20;
                  pug_debug_filename = "pug/background/references.pug";
                  pug_html = pug_html + (null == (pug_interp = reference_info.reference) ? "" : pug_interp) + "</div></blockquote></li>";
                }
              } else {
                var $$l = 0;
                for (var pug_index23 in $$obj) {
                  $$l++;
                  var reference_info = $$obj[pug_index23];
                  ;
                  pug_debug_line = 13;
                  pug_debug_filename = "pug/background/references.pug";
                  pug_html = pug_html + '<li class="card card-nested">';
                  ;
                  pug_debug_line = 14;
                  pug_debug_filename = "pug/background/references.pug";
                  if (reference_info.website) {
                    ;
                    pug_debug_line = 15;
                    pug_debug_filename = "pug/background/references.pug";
                    pug_html = pug_html + "<a" + (pug_attr("href", reference_info.website, true, false) + ' target="_blank"') + ">";
                    ;
                    pug_debug_line = 15;
                    pug_debug_filename = "pug/background/references.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = reference_info.name) ? "" : pug_interp) + "</a>";
                  } else {
                    ;
                    pug_debug_line = 17;
                    pug_debug_filename = "pug/background/references.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = reference_info.name) ? "" : pug_interp);
                  }
                  ;
                  pug_debug_line = 19;
                  pug_debug_filename = "pug/background/references.pug";
                  pug_html = pug_html + '<blockquote class="quote">';
                  ;
                  pug_debug_line = 20;
                  pug_debug_filename = "pug/background/references.pug";
                  pug_html = pug_html + '<div class="mop-wrapper">';
                  ;
                  pug_debug_line = 20;
                  pug_debug_filename = "pug/background/references.pug";
                  pug_html = pug_html + (null == (pug_interp = reference_info.reference) ? "" : pug_interp) + "</div></blockquote></li>";
                }
              }
            }).call(this);
            pug_html = pug_html + "</ul></div></div></div>";
          }
          pug_html = pug_html + "</div></div></section></div></div>";
          ;
          pug_debug_line = 1;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>';
          ;
          pug_debug_line = 2;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + '<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>';
          ;
          pug_debug_line = 4;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "<script>";
          ;
          pug_debug_line = 5;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "$(function () {";
          ;
          pug_debug_line = 6;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 6;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  var toggleFloatingMenu = function() {";
          ;
          pug_debug_line = 7;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 7;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "    $( '.js-floating-nav' ).toggleClass( 'is-visible' );";
          ;
          pug_debug_line = 8;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 8;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "    $( '.js-floating-nav-trigger' ).toggleClass( 'is-open' );";
          ;
          pug_debug_line = 9;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 9;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  };";
          ;
          pug_debug_line = 10;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 10;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "";
          ;
          pug_debug_line = 11;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 11;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + '  $( ".background-card" ).css( "min-height", window.screen.availHeight + "px" );';
          ;
          pug_debug_line = 12;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 12;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + '  $( "[data-toggle=tooltip]" ).tooltip();';
          ;
          pug_debug_line = 13;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 13;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  $( '.js-floating-nav-trigger' ).on( 'click', function(e) {";
          ;
          pug_debug_line = 14;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 14;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "    e.preventDefault();";
          ;
          pug_debug_line = 15;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 15;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "    toggleFloatingMenu();";
          ;
          pug_debug_line = 16;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 16;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  });";
          ;
          pug_debug_line = 17;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 17;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  $( '.js-floating-nav a' ).on( 'click', toggleFloatingMenu );";
          ;
          pug_debug_line = 18;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 18;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "";
          ;
          pug_debug_line = 19;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 19;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + `  $("#remaining-profiles").on('show.bs.collapse', function() {`;
          ;
          pug_debug_line = 20;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 20;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "    $( '.js-profiles-collapse > i' )";
          ;
          pug_debug_line = 21;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 21;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "      .removeClass( 'icon-chevron-down' )";
          ;
          pug_debug_line = 22;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 22;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "      .addClass( 'icon-chevron-up' );";
          ;
          pug_debug_line = 23;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 23;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  });";
          ;
          pug_debug_line = 24;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 24;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "";
          ;
          pug_debug_line = 25;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 25;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + `  $("#remaining-profiles").on('hidden.bs.collapse', function() {`;
          ;
          pug_debug_line = 26;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 26;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "    $( '.js-profiles-collapse > i' )";
          ;
          pug_debug_line = 27;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 27;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "      .removeClass( 'icon-chevron-up' )";
          ;
          pug_debug_line = 28;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 28;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "      .addClass( 'icon-chevron-down' );";
          ;
          pug_debug_line = 29;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 29;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  });";
          ;
          pug_debug_line = 30;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 30;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "});";
          ;
          pug_debug_line = 31;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 31;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "</script>";
          ;
          pug_debug_line = 32;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "<script>";
          ;
          pug_debug_line = 33;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "WebFontConfig = {";
          ;
          pug_debug_line = 34;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 34;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  google: { families: [ 'Lato:300,400,700:latin' ] }";
          ;
          pug_debug_line = 35;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 35;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "};";
          ;
          pug_debug_line = 36;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 36;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "(function() {";
          ;
          pug_debug_line = 37;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 37;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  var wf = document.createElement('script');";
          ;
          pug_debug_line = 38;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 38;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +";
          ;
          pug_debug_line = 39;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 39;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';";
          ;
          pug_debug_line = 40;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 40;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  wf.type = 'text/javascript';";
          ;
          pug_debug_line = 41;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 41;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  wf.async = 'true';";
          ;
          pug_debug_line = 42;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 42;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  var s = document.getElementsByTagName('script')[0];";
          ;
          pug_debug_line = 43;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 43;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "  s.parentNode.insertBefore(wf, s);";
          ;
          pug_debug_line = 44;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "\n";
          ;
          pug_debug_line = 44;
          pug_debug_filename = "pug/scripts.pug";
          pug_html = pug_html + "})();</script></body></html>";
        }).call(this, "_" in locals_for_with ? locals_for_with._ : typeof _ !== "undefined" ? _ : void 0, "css" in locals_for_with ? locals_for_with.css : typeof css !== "undefined" ? css : void 0, "floating_nav_items" in locals_for_with ? locals_for_with.floating_nav_items : typeof floating_nav_items !== "undefined" ? floating_nav_items : void 0, "resume" in locals_for_with ? locals_for_with.resume : typeof resume !== "undefined" ? resume : void 0);
      } catch (err) {
        pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
      }
      ;
      return pug_html;
    }
    __name(template2, "template");
    module.exports = { renderResume: template2 };
  }
});

// node_modules/jsonresume-theme-elegant/moment-precise-range.js
var require_moment_precise_range = __commonJS({
  "node_modules/jsonresume-theme-elegant/moment-precise-range.js"(exports, module) {
    init_esm();
    var moment = require_moment();
    (function(moment2) {
      var STRINGS = {
        nodiff: "",
        year: "year",
        years: "years",
        month: "month",
        months: "months",
        day: "day",
        days: "days",
        hour: "hour",
        hours: "hours",
        minute: "minute",
        minutes: "minutes",
        second: "second",
        seconds: "seconds",
        delimiter: " "
      };
      moment2.fn.preciseDiff = function(d2) {
        return moment2.preciseDiff(this, d2);
      };
      moment2.preciseDiff = function(d1, d2) {
        var m1 = moment2(d1), m2 = moment2(d2);
        m1 = m1.startOf("day");
        m2 = m2.add(1, "day").startOf("day");
        if (m1.isSame(m2)) {
          return STRINGS.nodiff;
        }
        if (m1.isAfter(m2)) {
          var tmp = m1;
          m1 = m2;
          m2 = tmp;
        }
        var yDiff = m2.year() - m1.year();
        var mDiff = m2.month() - m1.month();
        var dDiff = m2.date() - m1.date();
        var hourDiff = m2.hour() - m1.hour();
        var minDiff = m2.minute() - m1.minute();
        var secDiff = m2.second() - m1.second();
        if (secDiff < 0) {
          secDiff = 60 + secDiff;
          minDiff--;
        }
        if (minDiff < 0) {
          minDiff = 60 + minDiff;
          hourDiff--;
        }
        if (hourDiff < 0) {
          hourDiff = 24 + hourDiff;
          dDiff--;
        }
        if (dDiff < 0) {
          var daysInLastFullMonth = moment2(m2.year() + "-" + (m2.month() + 1), "YYYY-MM").subtract(1, "M").daysInMonth();
          if (daysInLastFullMonth < m1.date()) {
            dDiff = daysInLastFullMonth + dDiff + (m1.date() - daysInLastFullMonth);
          } else {
            dDiff = daysInLastFullMonth + dDiff;
          }
          mDiff--;
        }
        if (mDiff < 0) {
          mDiff = 12 + mDiff;
          yDiff--;
        }
        function pluralize(num, word) {
          return num + " " + STRINGS[word + (num === 1 ? "" : "s")];
        }
        __name(pluralize, "pluralize");
        if (!yDiff && !mDiff) {
          if (dDiff >= 1) {
            return pluralize(dDiff, "day");
          } else {
            return "Joined Today";
          }
        } else {
          var result2 = [];
          if (yDiff) {
            result2.push(pluralize(yDiff, "year"));
          }
          if (mDiff) {
            result2.push(pluralize(mDiff, "month"));
          }
          return result2.join(STRINGS.delimiter);
        }
      };
    })(moment);
    module.exports = moment;
  }
});

// node_modules/jsonresume-theme-elegant/index.js
var require_jsonresume_theme_elegant = __commonJS({
  "node_modules/jsonresume-theme-elegant/index.js"(exports, module) {
    init_esm();
    var fs = __require("fs");
    var _4 = (init_index_all(), __toCommonJS(index_all_exports));
    var utils = require_jsonresume_themeutils();
    var moment = require_moment();
    var markdown = require_markdown_it()({
      breaks: true
    }).use(require_markdown_it_abbr());
    var { renderResume } = require_tpl();
    require_moment_precise_range();
    utils.setConfig({ date_format: "MMM, YYYY" });
    function render(resume2) {
      const addressAttrs = ["address", "city", "region", "countryCode", "postalCode"];
      const addressValues = addressAttrs.map((key) => resume2.basics.location[key]);
      const css2 = fs.readFileSync(__dirname + "/assets/css/theme.css", "utf-8");
      resume2.basics.picture = utils.getUrlForPicture(resume2);
      resume2.basics.summary = convertMarkdown(resume2.basics.summary);
      resume2.basics.computed_location = _4.compact(addressValues).join(", ");
      if (resume2.languages) {
        resume2.basics.languages = _4.pluck(resume2.languages, "language").join(", ");
      }
      _4(resume2.basics.profiles).forEach((p) => {
        const label = p.network.toLowerCase();
        p.url = utils.getUrlForProfile(resume2, label);
        p.label = label;
      });
      resume2.basics.top_five_profiles = resume2.basics.profiles.slice(0, 5);
      resume2.basics.remaining_profiles = resume2.basics.profiles.slice(5);
      _4(resume2.projects).forEach((project_info) => {
        const start_date = moment(project_info.startDate, "YYYY-MM-DD");
        const end_date = moment(project_info.endDate, "YYYY-MM-DD");
        const can_calculate_period = start_date.isValid() && end_date.isValid();
        if (can_calculate_period) {
          project_info.duration = project_info.endDate != null && end_date.isValid() ? moment.preciseDiff(start_date, end_date) : moment.preciseDiff(start_date, moment());
        }
        if (start_date.isValid()) {
          project_info.startDate = utils.getFormattedDate(start_date);
        }
        if (end_date.isValid()) {
          project_info.endDate = utils.getFormattedDate(end_date);
        }
        project_info.description = convertMarkdown(project_info.description);
        project_info.highlights = _4(project_info.highlights).map((highlight) => convertMarkdown(highlight));
      });
      _4(resume2.work).forEach((work_info) => {
        const start_date = moment(work_info.startDate, "YYYY-MM-DD");
        const end_date = moment(work_info.endDate, "YYYY-MM-DD");
        const can_calculate_period = start_date.isValid() && end_date.isValid();
        if (can_calculate_period) {
          work_info.duration = work_info.endDate != null && end_date.isValid() ? moment.preciseDiff(start_date, end_date) : moment.preciseDiff(start_date, moment());
        }
        if (start_date.isValid()) {
          work_info.startDate = utils.getFormattedDate(start_date);
        }
        if (end_date.isValid()) {
          work_info.endDate = utils.getFormattedDate(end_date);
        }
        work_info.summary = convertMarkdown(work_info.summary);
        work_info.highlights = _4(work_info.highlights).map((highlight) => convertMarkdown(highlight));
      });
      _4(resume2.skills).forEach((skill_info) => {
        const levels = ["Beginner", "Intermediate", "Advanced", "Master"];
        skill_info.keywords = _4(skill_info.keywords).map((k) => convertMarkdown(k));
        if (skill_info.level) {
          skill_info.skill_class = skill_info.level.toLowerCase();
          skill_info.level = capitalize(skill_info.level.trim());
          skill_info.display_progress_bar = _4.contains(levels, skill_info.level);
        }
      });
      _4(resume2.education).forEach((education_info) => {
        ["startDate", "endDate"].forEach((type) => {
          const date = education_info[type];
          if (date) {
            education_info[type] = utils.getFormattedDate(date);
          }
        });
        education_info.courses = _4(education_info.courses).map((c) => convertMarkdown(c));
      });
      _4(resume2.certificates).forEach((c) => {
        const date = c.date;
        if (date) {
          c.date = utils.getFormattedDate(date, "MMM DD, YYYY");
        }
      });
      _4(resume2.awards).forEach((a) => {
        const date = a.date;
        a.summary = convertMarkdown(a.summary);
        if (date) {
          a.date = utils.getFormattedDate(date, "MMM DD, YYYY");
        }
      });
      _4(resume2.volunteer).forEach((v) => {
        v.summary = convertMarkdown(v.summary);
        ["startDate", "endDate"].forEach((type) => {
          const date = v[type];
          if (date) {
            v[type] = utils.getFormattedDate(date);
          }
        });
        v.highlights = _4(v.highlights).map(convertMarkdown);
      });
      _4(resume2.publications).forEach((p) => {
        const date = p.releaseDate;
        p.summary = convertMarkdown(p.summary);
        if (date) {
          p.releaseDate = utils.getFormattedDate(date, "MMM DD, YYYY");
        }
      });
      _4(resume2.references).forEach((r) => {
        r.reference = convertMarkdown(r.reference);
      });
      return renderResume({
        resume: resume2,
        floating_nav_items: getFloatingNavItems(resume2),
        css: css2,
        _: _4
      });
    }
    __name(render, "render");
    function interpolate(object2, keyPath) {
      const keys2 = keyPath.split(".");
      return keys2.reduce((res, key) => (res || {})[key], object2);
    }
    __name(interpolate, "interpolate");
    function capitalize(str) {
      if (str) {
        str = str.toString();
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      }
      return str;
    }
    __name(capitalize, "capitalize");
    function convertMarkdown(str) {
      if (str != null) {
        return markdown.render(str);
      }
    }
    __name(convertMarkdown, "convertMarkdown");
    function getFloatingNavItems(resume2) {
      const floating_nav_items2 = [
        { label: "About", target: "about", icon: "board", requires: "basics.summary" },
        { label: "Work Experience", target: "work-experience", icon: "office", requires: "work" },
        { label: "Projects Experience", target: "projects-experience", icon: "code", requires: "projects" },
        { label: "Skills", target: "skills", icon: "tools", requires: "skills" },
        { label: "Education", target: "education", icon: "graduation-cap", requires: "education" },
        { label: "Certificates", target: "certificates", icon: "profile", requires: "certificates" },
        { label: "Awards", target: "awards", icon: "trophy", requires: "awards" },
        { label: "Volunteer Work", target: "volunteer-work", icon: "child", requires: "volunteer" },
        { label: "Publications", target: "publications", icon: "newspaper", requires: "publications" },
        { label: "Interests", target: "interests", icon: "heart", requires: "interests" },
        { label: "References", target: "references", icon: "thumbs-up", requires: "references" }
      ];
      return _4(floating_nav_items2).filter((item) => {
        const value = interpolate(resume2, item.requires);
        return !_4.isEmpty(value);
      });
    }
    __name(getFloatingNavItems, "getFloatingNavItems");
    module.exports = { render };
  }
});
export default require_jsonresume_theme_elegant();
//# sourceMappingURL=jsonresume-theme-elegant-RKUJ3AED.mjs.map
