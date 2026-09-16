import {
  JobService,
  metadata
} from "./chunk-4QEGXLXS.mjs";
import {
  BlobStorageService,
  GoogleGenAI,
  ModuleActivityService,
  ZodFirstPartyTypeKind,
  external_exports,
  import_client,
  normalizeError,
  prisma,
  require_default,
  schemaTask
} from "./chunk-X57CFT4W.mjs";
import {
  __commonJS,
  __name,
  __require,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    init_esm();
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    __name(listCacheClear, "listCacheClear");
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    init_esm();
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    __name(eq, "eq");
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    init_esm();
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    __name(assocIndexOf, "assocIndexOf");
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    init_esm();
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    __name(listCacheDelete, "listCacheDelete");
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    init_esm();
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    __name(listCacheGet, "listCacheGet");
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    init_esm();
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    __name(listCacheHas, "listCacheHas");
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    init_esm();
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    __name(listCacheSet, "listCacheSet");
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    init_esm();
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    __name(ListCache, "ListCache");
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    init_esm();
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    __name(stackClear, "stackClear");
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    init_esm();
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    __name(stackDelete, "stackDelete");
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    init_esm();
    function stackGet(key) {
      return this.__data__.get(key);
    }
    __name(stackGet, "stackGet");
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    init_esm();
    function stackHas(key) {
      return this.__data__.has(key);
    }
    __name(stackHas, "stackHas");
    module.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    init_esm();
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    init_esm();
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    init_esm();
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    init_esm();
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    __name(getRawTag, "getRawTag");
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    init_esm();
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    __name(objectToString, "objectToString");
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    init_esm();
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    __name(baseGetTag, "baseGetTag");
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    init_esm();
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    __name(isObject, "isObject");
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    init_esm();
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    __name(isFunction, "isFunction");
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    init_esm();
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    init_esm();
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    __name(isMasked, "isMasked");
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    init_esm();
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    __name(toSource, "toSource");
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    init_esm();
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    __name(baseIsNative, "baseIsNative");
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    init_esm();
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    __name(getValue, "getValue");
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    init_esm();
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    __name(getNative, "getNative");
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    init_esm();
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    init_esm();
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    init_esm();
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    __name(hashClear, "hashClear");
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    init_esm();
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    __name(hashDelete, "hashDelete");
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    init_esm();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    __name(hashGet, "hashGet");
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    init_esm();
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    __name(hashHas, "hashHas");
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    init_esm();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    __name(hashSet, "hashSet");
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    init_esm();
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    __name(Hash, "Hash");
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    init_esm();
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    __name(mapCacheClear, "mapCacheClear");
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    init_esm();
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    __name(isKeyable, "isKeyable");
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    init_esm();
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    __name(getMapData, "getMapData");
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    init_esm();
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    __name(mapCacheDelete, "mapCacheDelete");
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    init_esm();
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    __name(mapCacheGet, "mapCacheGet");
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    init_esm();
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    __name(mapCacheHas, "mapCacheHas");
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    init_esm();
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    __name(mapCacheSet, "mapCacheSet");
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    init_esm();
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    __name(MapCache, "MapCache");
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    init_esm();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    __name(stackSet, "stackSet");
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    init_esm();
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    __name(Stack, "Stack");
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module) {
    init_esm();
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    __name(arrayEach, "arrayEach");
    module.exports = arrayEach;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    init_esm();
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    init_esm();
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    __name(baseAssignValue, "baseAssignValue");
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    init_esm();
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    __name(assignValue, "assignValue");
    module.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module) {
    init_esm();
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    __name(copyObject, "copyObject");
    module.exports = copyObject;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    init_esm();
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    __name(baseTimes, "baseTimes");
    module.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    init_esm();
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    init_esm();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    __name(baseIsArguments, "baseIsArguments");
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    init_esm();
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    init_esm();
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    init_esm();
    function stubFalse() {
      return false;
    }
    __name(stubFalse, "stubFalse");
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    init_esm();
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    init_esm();
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    __name(isIndex, "isIndex");
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    init_esm();
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    __name(isLength, "isLength");
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    init_esm();
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    __name(baseIsTypedArray, "baseIsTypedArray");
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    init_esm();
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    __name(baseUnary, "baseUnary");
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    init_esm();
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    init_esm();
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    init_esm();
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    __name(arrayLikeKeys, "arrayLikeKeys");
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    init_esm();
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    __name(isPrototype, "isPrototype");
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    init_esm();
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    __name(overArg, "overArg");
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    init_esm();
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    init_esm();
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    __name(baseKeys, "baseKeys");
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    init_esm();
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    __name(isArrayLike, "isArrayLike");
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    init_esm();
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    __name(keys, "keys");
    module.exports = keys;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module) {
    init_esm();
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    __name(baseAssign, "baseAssign");
    module.exports = baseAssign;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    init_esm();
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    __name(nativeKeysIn, "nativeKeysIn");
    module.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module) {
    init_esm();
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    __name(baseKeysIn, "baseKeysIn");
    module.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module) {
    init_esm();
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    __name(keysIn, "keysIn");
    module.exports = keysIn;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module) {
    init_esm();
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    __name(baseAssignIn, "baseAssignIn");
    module.exports = baseAssignIn;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module) {
    init_esm();
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    __name(cloneBuffer, "cloneBuffer");
    module.exports = cloneBuffer;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module) {
    init_esm();
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    __name(copyArray, "copyArray");
    module.exports = copyArray;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    init_esm();
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    __name(arrayFilter, "arrayFilter");
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    init_esm();
    function stubArray() {
      return [];
    }
    __name(stubArray, "stubArray");
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    init_esm();
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module) {
    init_esm();
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    __name(copySymbols, "copySymbols");
    module.exports = copySymbols;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    init_esm();
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    __name(arrayPush, "arrayPush");
    module.exports = arrayPush;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    init_esm();
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    init_esm();
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    init_esm();
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    __name(copySymbolsIn, "copySymbolsIn");
    module.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    init_esm();
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    __name(baseGetAllKeys, "baseGetAllKeys");
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    init_esm();
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    __name(getAllKeys, "getAllKeys");
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    init_esm();
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    __name(getAllKeysIn, "getAllKeysIn");
    module.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    init_esm();
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    init_esm();
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    init_esm();
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    init_esm();
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    init_esm();
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = /* @__PURE__ */ __name(function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      }, "getTag");
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module) {
    init_esm();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    __name(initCloneArray, "initCloneArray");
    module.exports = initCloneArray;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    init_esm();
    var root = require_root();
    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    init_esm();
    var Uint8Array = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    __name(cloneArrayBuffer, "cloneArrayBuffer");
    module.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module) {
    init_esm();
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    __name(cloneDataView, "cloneDataView");
    module.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module) {
    init_esm();
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    __name(cloneRegExp, "cloneRegExp");
    module.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module) {
    init_esm();
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    __name(cloneSymbol, "cloneSymbol");
    module.exports = cloneSymbol;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    init_esm();
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    __name(cloneTypedArray, "cloneTypedArray");
    module.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module) {
    init_esm();
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    __name(initCloneByTag, "initCloneByTag");
    module.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module) {
    init_esm();
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      __name(object, "object");
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module) {
    init_esm();
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    __name(initCloneObject, "initCloneObject");
    module.exports = initCloneObject;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module) {
    init_esm();
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    __name(baseIsMap, "baseIsMap");
    module.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module) {
    init_esm();
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module) {
    init_esm();
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    __name(baseIsSet, "baseIsSet");
    module.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module) {
    init_esm();
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module) {
    init_esm();
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    __name(baseClone, "baseClone");
    module.exports = baseClone;
  }
});

// node_modules/lodash/clone.js
var require_clone = __commonJS({
  "node_modules/lodash/clone.js"(exports, module) {
    init_esm();
    var baseClone = require_baseClone();
    var CLONE_SYMBOLS_FLAG = 4;
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }
    __name(clone, "clone");
    module.exports = clone;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    init_esm();
    function constant(value) {
      return function() {
        return value;
      };
    }
    __name(constant, "constant");
    module.exports = constant;
  }
});

// node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module) {
    init_esm();
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    __name(createBaseFor, "createBaseFor");
    module.exports = createBaseFor;
  }
});

// node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module) {
    init_esm();
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "node_modules/lodash/_baseForOwn.js"(exports, module) {
    init_esm();
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    __name(baseForOwn, "baseForOwn");
    module.exports = baseForOwn;
  }
});

// node_modules/lodash/_createBaseEach.js
var require_createBaseEach = __commonJS({
  "node_modules/lodash/_createBaseEach.js"(exports, module) {
    init_esm();
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    __name(createBaseEach, "createBaseEach");
    module.exports = createBaseEach;
  }
});

// node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  "node_modules/lodash/_baseEach.js"(exports, module) {
    init_esm();
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    init_esm();
    function identity(value) {
      return value;
    }
    __name(identity, "identity");
    module.exports = identity;
  }
});

// node_modules/lodash/_castFunction.js
var require_castFunction = __commonJS({
  "node_modules/lodash/_castFunction.js"(exports, module) {
    init_esm();
    var identity = require_identity();
    function castFunction(value) {
      return typeof value == "function" ? value : identity;
    }
    __name(castFunction, "castFunction");
    module.exports = castFunction;
  }
});

// node_modules/lodash/forEach.js
var require_forEach = __commonJS({
  "node_modules/lodash/forEach.js"(exports, module) {
    init_esm();
    var arrayEach = require_arrayEach();
    var baseEach = require_baseEach();
    var castFunction = require_castFunction();
    var isArray = require_isArray();
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, castFunction(iteratee));
    }
    __name(forEach, "forEach");
    module.exports = forEach;
  }
});

// node_modules/lodash/each.js
var require_each = __commonJS({
  "node_modules/lodash/each.js"(exports, module) {
    init_esm();
    module.exports = require_forEach();
  }
});

// node_modules/lodash/_baseFilter.js
var require_baseFilter = __commonJS({
  "node_modules/lodash/_baseFilter.js"(exports, module) {
    init_esm();
    var baseEach = require_baseEach();
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection2) {
        if (predicate(value, index, collection2)) {
          result.push(value);
        }
      });
      return result;
    }
    __name(baseFilter, "baseFilter");
    module.exports = baseFilter;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    init_esm();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    __name(setCacheAdd, "setCacheAdd");
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    init_esm();
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    __name(setCacheHas, "setCacheHas");
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    init_esm();
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    __name(SetCache, "SetCache");
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    init_esm();
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    __name(arraySome, "arraySome");
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    init_esm();
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    __name(cacheHas, "cacheHas");
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    init_esm();
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    __name(equalArrays, "equalArrays");
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    init_esm();
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    __name(mapToArray, "mapToArray");
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    init_esm();
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    __name(setToArray, "setToArray");
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    init_esm();
    var Symbol2 = require_Symbol();
    var Uint8Array = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    __name(equalByTag, "equalByTag");
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    init_esm();
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    __name(equalObjects, "equalObjects");
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    init_esm();
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    __name(baseIsEqualDeep, "baseIsEqualDeep");
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    init_esm();
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    __name(baseIsEqual, "baseIsEqual");
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    init_esm();
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    __name(baseIsMatch, "baseIsMatch");
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    init_esm();
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    __name(isStrictComparable, "isStrictComparable");
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    init_esm();
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    __name(getMatchData, "getMatchData");
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    init_esm();
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    __name(matchesStrictComparable, "matchesStrictComparable");
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    init_esm();
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    __name(baseMatches, "baseMatches");
    module.exports = baseMatches;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    init_esm();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    __name(isSymbol, "isSymbol");
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    init_esm();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    __name(isKey, "isKey");
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    init_esm();
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = /* @__PURE__ */ __name(function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      }, "memoized");
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    __name(memoize, "memoize");
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    init_esm();
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    __name(memoizeCapped, "memoizeCapped");
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    init_esm();
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    init_esm();
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    __name(arrayMap, "arrayMap");
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    init_esm();
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    __name(baseToString, "baseToString");
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    init_esm();
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    __name(toString, "toString");
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    init_esm();
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    __name(castPath, "castPath");
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    init_esm();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    __name(toKey, "toKey");
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    init_esm();
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    __name(baseGet, "baseGet");
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    init_esm();
    var baseGet = require_baseGet();
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    __name(get, "get");
    module.exports = get;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    init_esm();
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    __name(baseHasIn, "baseHasIn");
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    init_esm();
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1, length = path.length, result = false;
      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    __name(hasPath, "hasPath");
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    init_esm();
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    __name(hasIn, "hasIn");
    module.exports = hasIn;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    init_esm();
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    __name(baseMatchesProperty, "baseMatchesProperty");
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    init_esm();
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    __name(baseProperty, "baseProperty");
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    init_esm();
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    __name(basePropertyDeep, "basePropertyDeep");
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    init_esm();
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    __name(property, "property");
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    init_esm();
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    __name(baseIteratee, "baseIteratee");
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/filter.js
var require_filter = __commonJS({
  "node_modules/lodash/filter.js"(exports, module) {
    init_esm();
    var arrayFilter = require_arrayFilter();
    var baseFilter = require_baseFilter();
    var baseIteratee = require_baseIteratee();
    var isArray = require_isArray();
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, baseIteratee(predicate, 3));
    }
    __name(filter, "filter");
    module.exports = filter;
  }
});

// node_modules/lodash/_baseHas.js
var require_baseHas = __commonJS({
  "node_modules/lodash/_baseHas.js"(exports, module) {
    init_esm();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }
    __name(baseHas, "baseHas");
    module.exports = baseHas;
  }
});

// node_modules/lodash/has.js
var require_has = __commonJS({
  "node_modules/lodash/has.js"(exports, module) {
    init_esm();
    var baseHas = require_baseHas();
    var hasPath = require_hasPath();
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }
    __name(has, "has");
    module.exports = has;
  }
});

// node_modules/lodash/isEmpty.js
var require_isEmpty = __commonJS({
  "node_modules/lodash/isEmpty.js"(exports, module) {
    init_esm();
    var baseKeys = require_baseKeys();
    var getTag = require_getTag();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isArrayLike = require_isArrayLike();
    var isBuffer = require_isBuffer();
    var isPrototype = require_isPrototype();
    var isTypedArray = require_isTypedArray();
    var mapTag = "[object Map]";
    var setTag = "[object Set]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }
    __name(isEmpty, "isEmpty");
    module.exports = isEmpty;
  }
});

// node_modules/lodash/isUndefined.js
var require_isUndefined = __commonJS({
  "node_modules/lodash/isUndefined.js"(exports, module) {
    init_esm();
    function isUndefined(value) {
      return value === void 0;
    }
    __name(isUndefined, "isUndefined");
    module.exports = isUndefined;
  }
});

// node_modules/lodash/_baseMap.js
var require_baseMap = __commonJS({
  "node_modules/lodash/_baseMap.js"(exports, module) {
    init_esm();
    var baseEach = require_baseEach();
    var isArrayLike = require_isArrayLike();
    function baseMap(collection, iteratee) {
      var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection2) {
        result[++index] = iteratee(value, key, collection2);
      });
      return result;
    }
    __name(baseMap, "baseMap");
    module.exports = baseMap;
  }
});

// node_modules/lodash/map.js
var require_map = __commonJS({
  "node_modules/lodash/map.js"(exports, module) {
    init_esm();
    var arrayMap = require_arrayMap();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var isArray = require_isArray();
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, baseIteratee(iteratee, 3));
    }
    __name(map, "map");
    module.exports = map;
  }
});

// node_modules/lodash/_arrayReduce.js
var require_arrayReduce = __commonJS({
  "node_modules/lodash/_arrayReduce.js"(exports, module) {
    init_esm();
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    __name(arrayReduce, "arrayReduce");
    module.exports = arrayReduce;
  }
});

// node_modules/lodash/_baseReduce.js
var require_baseReduce = __commonJS({
  "node_modules/lodash/_baseReduce.js"(exports, module) {
    init_esm();
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
      });
      return accumulator;
    }
    __name(baseReduce, "baseReduce");
    module.exports = baseReduce;
  }
});

// node_modules/lodash/reduce.js
var require_reduce = __commonJS({
  "node_modules/lodash/reduce.js"(exports, module) {
    init_esm();
    var arrayReduce = require_arrayReduce();
    var baseEach = require_baseEach();
    var baseIteratee = require_baseIteratee();
    var baseReduce = require_baseReduce();
    var isArray = require_isArray();
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
      return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }
    __name(reduce, "reduce");
    module.exports = reduce;
  }
});

// node_modules/lodash/isString.js
var require_isString = __commonJS({
  "node_modules/lodash/isString.js"(exports, module) {
    init_esm();
    var baseGetTag = require_baseGetTag();
    var isArray = require_isArray();
    var isObjectLike = require_isObjectLike();
    var stringTag = "[object String]";
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
    }
    __name(isString, "isString");
    module.exports = isString;
  }
});

// node_modules/lodash/_asciiSize.js
var require_asciiSize = __commonJS({
  "node_modules/lodash/_asciiSize.js"(exports, module) {
    init_esm();
    var baseProperty = require_baseProperty();
    var asciiSize = baseProperty("length");
    module.exports = asciiSize;
  }
});

// node_modules/lodash/_hasUnicode.js
var require_hasUnicode = __commonJS({
  "node_modules/lodash/_hasUnicode.js"(exports, module) {
    init_esm();
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsZWJ = "\\u200d";
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    __name(hasUnicode, "hasUnicode");
    module.exports = hasUnicode;
  }
});

// node_modules/lodash/_unicodeSize.js
var require_unicodeSize = __commonJS({
  "node_modules/lodash/_unicodeSize.js"(exports, module) {
    init_esm();
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsCombo = "[" + rsComboRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    __name(unicodeSize, "unicodeSize");
    module.exports = unicodeSize;
  }
});

// node_modules/lodash/_stringSize.js
var require_stringSize = __commonJS({
  "node_modules/lodash/_stringSize.js"(exports, module) {
    init_esm();
    var asciiSize = require_asciiSize();
    var hasUnicode = require_hasUnicode();
    var unicodeSize = require_unicodeSize();
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    __name(stringSize, "stringSize");
    module.exports = stringSize;
  }
});

// node_modules/lodash/size.js
var require_size = __commonJS({
  "node_modules/lodash/size.js"(exports, module) {
    init_esm();
    var baseKeys = require_baseKeys();
    var getTag = require_getTag();
    var isArrayLike = require_isArrayLike();
    var isString = require_isString();
    var stringSize = require_stringSize();
    var mapTag = "[object Map]";
    var setTag = "[object Set]";
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }
    __name(size, "size");
    module.exports = size;
  }
});

// node_modules/lodash/transform.js
var require_transform = __commonJS({
  "node_modules/lodash/transform.js"(exports, module) {
    init_esm();
    var arrayEach = require_arrayEach();
    var baseCreate = require_baseCreate();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    var getPrototype = require_getPrototype();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isFunction = require_isFunction();
    var isObject = require_isObject();
    var isTypedArray = require_isTypedArray();
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
      iteratee = baseIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor() : [];
        } else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        } else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
        return iteratee(accumulator, value, index, object2);
      });
      return accumulator;
    }
    __name(transform, "transform");
    module.exports = transform;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    init_esm();
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    __name(isFlattenable, "isFlattenable");
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    init_esm();
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    __name(baseFlatten, "baseFlatten");
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    init_esm();
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    __name(apply, "apply");
    module.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    init_esm();
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    __name(overRest, "overRest");
    module.exports = overRest;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    init_esm();
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    init_esm();
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    __name(shortOut, "shortOut");
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    init_esm();
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module) {
    init_esm();
    var identity = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    __name(baseRest, "baseRest");
    module.exports = baseRest;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    init_esm();
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    __name(baseFindIndex, "baseFindIndex");
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    init_esm();
    function baseIsNaN(value) {
      return value !== value;
    }
    __name(baseIsNaN, "baseIsNaN");
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    init_esm();
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    __name(strictIndexOf, "strictIndexOf");
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    init_esm();
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    __name(baseIndexOf, "baseIndexOf");
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    init_esm();
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    __name(arrayIncludes, "arrayIncludes");
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    init_esm();
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    __name(arrayIncludesWith, "arrayIncludesWith");
    module.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    init_esm();
    function noop() {
    }
    __name(noop, "noop");
    module.exports = noop;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    init_esm();
    var Set2 = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set2(values);
    };
    module.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    init_esm();
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    __name(baseUniq, "baseUniq");
    module.exports = baseUniq;
  }
});

// node_modules/lodash/isArrayLikeObject.js
var require_isArrayLikeObject = __commonJS({
  "node_modules/lodash/isArrayLikeObject.js"(exports, module) {
    init_esm();
    var isArrayLike = require_isArrayLike();
    var isObjectLike = require_isObjectLike();
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    __name(isArrayLikeObject, "isArrayLikeObject");
    module.exports = isArrayLikeObject;
  }
});

// node_modules/lodash/union.js
var require_union = __commonJS({
  "node_modules/lodash/union.js"(exports, module) {
    init_esm();
    var baseFlatten = require_baseFlatten();
    var baseRest = require_baseRest();
    var baseUniq = require_baseUniq();
    var isArrayLikeObject = require_isArrayLikeObject();
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });
    module.exports = union;
  }
});

// node_modules/lodash/_baseValues.js
var require_baseValues = __commonJS({
  "node_modules/lodash/_baseValues.js"(exports, module) {
    init_esm();
    var arrayMap = require_arrayMap();
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    __name(baseValues, "baseValues");
    module.exports = baseValues;
  }
});

// node_modules/lodash/values.js
var require_values = __commonJS({
  "node_modules/lodash/values.js"(exports, module) {
    init_esm();
    var baseValues = require_baseValues();
    var keys = require_keys();
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }
    __name(values, "values");
    module.exports = values;
  }
});

// node_modules/graphlib/lib/lodash.js
var require_lodash = __commonJS({
  "node_modules/graphlib/lib/lodash.js"(exports, module) {
    init_esm();
    var lodash;
    if (typeof __require === "function") {
      try {
        lodash = {
          clone: require_clone(),
          constant: require_constant(),
          each: require_each(),
          filter: require_filter(),
          has: require_has(),
          isArray: require_isArray(),
          isEmpty: require_isEmpty(),
          isFunction: require_isFunction(),
          isUndefined: require_isUndefined(),
          keys: require_keys(),
          map: require_map(),
          reduce: require_reduce(),
          size: require_size(),
          transform: require_transform(),
          union: require_union(),
          values: require_values()
        };
      } catch (e) {
      }
    }
    if (!lodash) {
      lodash = window._;
    }
    module.exports = lodash;
  }
});

// node_modules/graphlib/lib/graph.js
var require_graph = __commonJS({
  "node_modules/graphlib/lib/graph.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash();
    module.exports = Graph;
    var DEFAULT_EDGE_NAME = "\0";
    var GRAPH_NODE = "\0";
    var EDGE_KEY_DELIM = "";
    function Graph(opts) {
      this._isDirected = _.has(opts, "directed") ? opts.directed : true;
      this._isMultigraph = _.has(opts, "multigraph") ? opts.multigraph : false;
      this._isCompound = _.has(opts, "compound") ? opts.compound : false;
      this._label = void 0;
      this._defaultNodeLabelFn = _.constant(void 0);
      this._defaultEdgeLabelFn = _.constant(void 0);
      this._nodes = {};
      if (this._isCompound) {
        this._parent = {};
        this._children = {};
        this._children[GRAPH_NODE] = {};
      }
      this._in = {};
      this._preds = {};
      this._out = {};
      this._sucs = {};
      this._edgeObjs = {};
      this._edgeLabels = {};
    }
    __name(Graph, "Graph");
    Graph.prototype._nodeCount = 0;
    Graph.prototype._edgeCount = 0;
    Graph.prototype.isDirected = function() {
      return this._isDirected;
    };
    Graph.prototype.isMultigraph = function() {
      return this._isMultigraph;
    };
    Graph.prototype.isCompound = function() {
      return this._isCompound;
    };
    Graph.prototype.setGraph = function(label) {
      this._label = label;
      return this;
    };
    Graph.prototype.graph = function() {
      return this._label;
    };
    Graph.prototype.setDefaultNodeLabel = function(newDefault) {
      if (!_.isFunction(newDefault)) {
        newDefault = _.constant(newDefault);
      }
      this._defaultNodeLabelFn = newDefault;
      return this;
    };
    Graph.prototype.nodeCount = function() {
      return this._nodeCount;
    };
    Graph.prototype.nodes = function() {
      return _.keys(this._nodes);
    };
    Graph.prototype.sources = function() {
      var self2 = this;
      return _.filter(this.nodes(), function(v) {
        return _.isEmpty(self2._in[v]);
      });
    };
    Graph.prototype.sinks = function() {
      var self2 = this;
      return _.filter(this.nodes(), function(v) {
        return _.isEmpty(self2._out[v]);
      });
    };
    Graph.prototype.setNodes = function(vs, value) {
      var args = arguments;
      var self2 = this;
      _.each(vs, function(v) {
        if (args.length > 1) {
          self2.setNode(v, value);
        } else {
          self2.setNode(v);
        }
      });
      return this;
    };
    Graph.prototype.setNode = function(v, value) {
      if (_.has(this._nodes, v)) {
        if (arguments.length > 1) {
          this._nodes[v] = value;
        }
        return this;
      }
      this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
      if (this._isCompound) {
        this._parent[v] = GRAPH_NODE;
        this._children[v] = {};
        this._children[GRAPH_NODE][v] = true;
      }
      this._in[v] = {};
      this._preds[v] = {};
      this._out[v] = {};
      this._sucs[v] = {};
      ++this._nodeCount;
      return this;
    };
    Graph.prototype.node = function(v) {
      return this._nodes[v];
    };
    Graph.prototype.hasNode = function(v) {
      return _.has(this._nodes, v);
    };
    Graph.prototype.removeNode = function(v) {
      var self2 = this;
      if (_.has(this._nodes, v)) {
        var removeEdge = /* @__PURE__ */ __name(function(e) {
          self2.removeEdge(self2._edgeObjs[e]);
        }, "removeEdge");
        delete this._nodes[v];
        if (this._isCompound) {
          this._removeFromParentsChildList(v);
          delete this._parent[v];
          _.each(this.children(v), function(child) {
            self2.setParent(child);
          });
          delete this._children[v];
        }
        _.each(_.keys(this._in[v]), removeEdge);
        delete this._in[v];
        delete this._preds[v];
        _.each(_.keys(this._out[v]), removeEdge);
        delete this._out[v];
        delete this._sucs[v];
        --this._nodeCount;
      }
      return this;
    };
    Graph.prototype.setParent = function(v, parent) {
      if (!this._isCompound) {
        throw new Error("Cannot set parent in a non-compound graph");
      }
      if (_.isUndefined(parent)) {
        parent = GRAPH_NODE;
      } else {
        parent += "";
        for (var ancestor = parent; !_.isUndefined(ancestor); ancestor = this.parent(ancestor)) {
          if (ancestor === v) {
            throw new Error("Setting " + parent + " as parent of " + v + " would create a cycle");
          }
        }
        this.setNode(parent);
      }
      this.setNode(v);
      this._removeFromParentsChildList(v);
      this._parent[v] = parent;
      this._children[parent][v] = true;
      return this;
    };
    Graph.prototype._removeFromParentsChildList = function(v) {
      delete this._children[this._parent[v]][v];
    };
    Graph.prototype.parent = function(v) {
      if (this._isCompound) {
        var parent = this._parent[v];
        if (parent !== GRAPH_NODE) {
          return parent;
        }
      }
    };
    Graph.prototype.children = function(v) {
      if (_.isUndefined(v)) {
        v = GRAPH_NODE;
      }
      if (this._isCompound) {
        var children = this._children[v];
        if (children) {
          return _.keys(children);
        }
      } else if (v === GRAPH_NODE) {
        return this.nodes();
      } else if (this.hasNode(v)) {
        return [];
      }
    };
    Graph.prototype.predecessors = function(v) {
      var predsV = this._preds[v];
      if (predsV) {
        return _.keys(predsV);
      }
    };
    Graph.prototype.successors = function(v) {
      var sucsV = this._sucs[v];
      if (sucsV) {
        return _.keys(sucsV);
      }
    };
    Graph.prototype.neighbors = function(v) {
      var preds = this.predecessors(v);
      if (preds) {
        return _.union(preds, this.successors(v));
      }
    };
    Graph.prototype.isLeaf = function(v) {
      var neighbors;
      if (this.isDirected()) {
        neighbors = this.successors(v);
      } else {
        neighbors = this.neighbors(v);
      }
      return neighbors.length === 0;
    };
    Graph.prototype.filterNodes = function(filter) {
      var copy = new this.constructor({
        directed: this._isDirected,
        multigraph: this._isMultigraph,
        compound: this._isCompound
      });
      copy.setGraph(this.graph());
      var self2 = this;
      _.each(this._nodes, function(value, v) {
        if (filter(v)) {
          copy.setNode(v, value);
        }
      });
      _.each(this._edgeObjs, function(e) {
        if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
          copy.setEdge(e, self2.edge(e));
        }
      });
      var parents = {};
      function findParent(v) {
        var parent = self2.parent(v);
        if (parent === void 0 || copy.hasNode(parent)) {
          parents[v] = parent;
          return parent;
        } else if (parent in parents) {
          return parents[parent];
        } else {
          return findParent(parent);
        }
      }
      __name(findParent, "findParent");
      if (this._isCompound) {
        _.each(copy.nodes(), function(v) {
          copy.setParent(v, findParent(v));
        });
      }
      return copy;
    };
    Graph.prototype.setDefaultEdgeLabel = function(newDefault) {
      if (!_.isFunction(newDefault)) {
        newDefault = _.constant(newDefault);
      }
      this._defaultEdgeLabelFn = newDefault;
      return this;
    };
    Graph.prototype.edgeCount = function() {
      return this._edgeCount;
    };
    Graph.prototype.edges = function() {
      return _.values(this._edgeObjs);
    };
    Graph.prototype.setPath = function(vs, value) {
      var self2 = this;
      var args = arguments;
      _.reduce(vs, function(v, w) {
        if (args.length > 1) {
          self2.setEdge(v, w, value);
        } else {
          self2.setEdge(v, w);
        }
        return w;
      });
      return this;
    };
    Graph.prototype.setEdge = function() {
      var v, w, name, value;
      var valueSpecified = false;
      var arg0 = arguments[0];
      if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
        v = arg0.v;
        w = arg0.w;
        name = arg0.name;
        if (arguments.length === 2) {
          value = arguments[1];
          valueSpecified = true;
        }
      } else {
        v = arg0;
        w = arguments[1];
        name = arguments[3];
        if (arguments.length > 2) {
          value = arguments[2];
          valueSpecified = true;
        }
      }
      v = "" + v;
      w = "" + w;
      if (!_.isUndefined(name)) {
        name = "" + name;
      }
      var e = edgeArgsToId(this._isDirected, v, w, name);
      if (_.has(this._edgeLabels, e)) {
        if (valueSpecified) {
          this._edgeLabels[e] = value;
        }
        return this;
      }
      if (!_.isUndefined(name) && !this._isMultigraph) {
        throw new Error("Cannot set a named edge when isMultigraph = false");
      }
      this.setNode(v);
      this.setNode(w);
      this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);
      var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
      v = edgeObj.v;
      w = edgeObj.w;
      Object.freeze(edgeObj);
      this._edgeObjs[e] = edgeObj;
      incrementOrInitEntry(this._preds[w], v);
      incrementOrInitEntry(this._sucs[v], w);
      this._in[w][e] = edgeObj;
      this._out[v][e] = edgeObj;
      this._edgeCount++;
      return this;
    };
    Graph.prototype.edge = function(v, w, name) {
      var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
      return this._edgeLabels[e];
    };
    Graph.prototype.hasEdge = function(v, w, name) {
      var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
      return _.has(this._edgeLabels, e);
    };
    Graph.prototype.removeEdge = function(v, w, name) {
      var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
      var edge = this._edgeObjs[e];
      if (edge) {
        v = edge.v;
        w = edge.w;
        delete this._edgeLabels[e];
        delete this._edgeObjs[e];
        decrementOrRemoveEntry(this._preds[w], v);
        decrementOrRemoveEntry(this._sucs[v], w);
        delete this._in[w][e];
        delete this._out[v][e];
        this._edgeCount--;
      }
      return this;
    };
    Graph.prototype.inEdges = function(v, u) {
      var inV = this._in[v];
      if (inV) {
        var edges = _.values(inV);
        if (!u) {
          return edges;
        }
        return _.filter(edges, function(edge) {
          return edge.v === u;
        });
      }
    };
    Graph.prototype.outEdges = function(v, w) {
      var outV = this._out[v];
      if (outV) {
        var edges = _.values(outV);
        if (!w) {
          return edges;
        }
        return _.filter(edges, function(edge) {
          return edge.w === w;
        });
      }
    };
    Graph.prototype.nodeEdges = function(v, w) {
      var inEdges = this.inEdges(v, w);
      if (inEdges) {
        return inEdges.concat(this.outEdges(v, w));
      }
    };
    function incrementOrInitEntry(map, k) {
      if (map[k]) {
        map[k]++;
      } else {
        map[k] = 1;
      }
    }
    __name(incrementOrInitEntry, "incrementOrInitEntry");
    function decrementOrRemoveEntry(map, k) {
      if (!--map[k]) {
        delete map[k];
      }
    }
    __name(decrementOrRemoveEntry, "decrementOrRemoveEntry");
    function edgeArgsToId(isDirected, v_, w_, name) {
      var v = "" + v_;
      var w = "" + w_;
      if (!isDirected && v > w) {
        var tmp = v;
        v = w;
        w = tmp;
      }
      return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (_.isUndefined(name) ? DEFAULT_EDGE_NAME : name);
    }
    __name(edgeArgsToId, "edgeArgsToId");
    function edgeArgsToObj(isDirected, v_, w_, name) {
      var v = "" + v_;
      var w = "" + w_;
      if (!isDirected && v > w) {
        var tmp = v;
        v = w;
        w = tmp;
      }
      var edgeObj = { v, w };
      if (name) {
        edgeObj.name = name;
      }
      return edgeObj;
    }
    __name(edgeArgsToObj, "edgeArgsToObj");
    function edgeObjToId(isDirected, edgeObj) {
      return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
    }
    __name(edgeObjToId, "edgeObjToId");
  }
});

// node_modules/graphlib/lib/version.js
var require_version = __commonJS({
  "node_modules/graphlib/lib/version.js"(exports, module) {
    init_esm();
    module.exports = "2.1.8";
  }
});

// node_modules/graphlib/lib/index.js
var require_lib = __commonJS({
  "node_modules/graphlib/lib/index.js"(exports, module) {
    init_esm();
    module.exports = {
      Graph: require_graph(),
      version: require_version()
    };
  }
});

// node_modules/graphlib/lib/json.js
var require_json = __commonJS({
  "node_modules/graphlib/lib/json.js"(exports, module) {
    init_esm();
    var _ = require_lodash();
    var Graph = require_graph();
    module.exports = {
      write,
      read
    };
    function write(g) {
      var json = {
        options: {
          directed: g.isDirected(),
          multigraph: g.isMultigraph(),
          compound: g.isCompound()
        },
        nodes: writeNodes(g),
        edges: writeEdges(g)
      };
      if (!_.isUndefined(g.graph())) {
        json.value = _.clone(g.graph());
      }
      return json;
    }
    __name(write, "write");
    function writeNodes(g) {
      return _.map(g.nodes(), function(v) {
        var nodeValue = g.node(v);
        var parent = g.parent(v);
        var node = { v };
        if (!_.isUndefined(nodeValue)) {
          node.value = nodeValue;
        }
        if (!_.isUndefined(parent)) {
          node.parent = parent;
        }
        return node;
      });
    }
    __name(writeNodes, "writeNodes");
    function writeEdges(g) {
      return _.map(g.edges(), function(e) {
        var edgeValue = g.edge(e);
        var edge = { v: e.v, w: e.w };
        if (!_.isUndefined(e.name)) {
          edge.name = e.name;
        }
        if (!_.isUndefined(edgeValue)) {
          edge.value = edgeValue;
        }
        return edge;
      });
    }
    __name(writeEdges, "writeEdges");
    function read(json) {
      var g = new Graph(json.options).setGraph(json.value);
      _.each(json.nodes, function(entry) {
        g.setNode(entry.v, entry.value);
        if (entry.parent) {
          g.setParent(entry.v, entry.parent);
        }
      });
      _.each(json.edges, function(entry) {
        g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
      });
      return g;
    }
    __name(read, "read");
  }
});

// node_modules/graphlib/lib/alg/components.js
var require_components = __commonJS({
  "node_modules/graphlib/lib/alg/components.js"(exports, module) {
    init_esm();
    var _ = require_lodash();
    module.exports = components;
    function components(g) {
      var visited = {};
      var cmpts = [];
      var cmpt;
      function dfs(v) {
        if (_.has(visited, v)) return;
        visited[v] = true;
        cmpt.push(v);
        _.each(g.successors(v), dfs);
        _.each(g.predecessors(v), dfs);
      }
      __name(dfs, "dfs");
      _.each(g.nodes(), function(v) {
        cmpt = [];
        dfs(v);
        if (cmpt.length) {
          cmpts.push(cmpt);
        }
      });
      return cmpts;
    }
    __name(components, "components");
  }
});

// node_modules/graphlib/lib/data/priority-queue.js
var require_priority_queue = __commonJS({
  "node_modules/graphlib/lib/data/priority-queue.js"(exports, module) {
    init_esm();
    var _ = require_lodash();
    module.exports = PriorityQueue;
    function PriorityQueue() {
      this._arr = [];
      this._keyIndices = {};
    }
    __name(PriorityQueue, "PriorityQueue");
    PriorityQueue.prototype.size = function() {
      return this._arr.length;
    };
    PriorityQueue.prototype.keys = function() {
      return this._arr.map(function(x) {
        return x.key;
      });
    };
    PriorityQueue.prototype.has = function(key) {
      return _.has(this._keyIndices, key);
    };
    PriorityQueue.prototype.priority = function(key) {
      var index = this._keyIndices[key];
      if (index !== void 0) {
        return this._arr[index].priority;
      }
    };
    PriorityQueue.prototype.min = function() {
      if (this.size() === 0) {
        throw new Error("Queue underflow");
      }
      return this._arr[0].key;
    };
    PriorityQueue.prototype.add = function(key, priority) {
      var keyIndices = this._keyIndices;
      key = String(key);
      if (!_.has(keyIndices, key)) {
        var arr = this._arr;
        var index = arr.length;
        keyIndices[key] = index;
        arr.push({ key, priority });
        this._decrease(index);
        return true;
      }
      return false;
    };
    PriorityQueue.prototype.removeMin = function() {
      this._swap(0, this._arr.length - 1);
      var min = this._arr.pop();
      delete this._keyIndices[min.key];
      this._heapify(0);
      return min.key;
    };
    PriorityQueue.prototype.decrease = function(key, priority) {
      var index = this._keyIndices[key];
      if (priority > this._arr[index].priority) {
        throw new Error("New priority is greater than current priority. Key: " + key + " Old: " + this._arr[index].priority + " New: " + priority);
      }
      this._arr[index].priority = priority;
      this._decrease(index);
    };
    PriorityQueue.prototype._heapify = function(i) {
      var arr = this._arr;
      var l = 2 * i;
      var r = l + 1;
      var largest = i;
      if (l < arr.length) {
        largest = arr[l].priority < arr[largest].priority ? l : largest;
        if (r < arr.length) {
          largest = arr[r].priority < arr[largest].priority ? r : largest;
        }
        if (largest !== i) {
          this._swap(i, largest);
          this._heapify(largest);
        }
      }
    };
    PriorityQueue.prototype._decrease = function(index) {
      var arr = this._arr;
      var priority = arr[index].priority;
      var parent;
      while (index !== 0) {
        parent = index >> 1;
        if (arr[parent].priority < priority) {
          break;
        }
        this._swap(index, parent);
        index = parent;
      }
    };
    PriorityQueue.prototype._swap = function(i, j) {
      var arr = this._arr;
      var keyIndices = this._keyIndices;
      var origArrI = arr[i];
      var origArrJ = arr[j];
      arr[i] = origArrJ;
      arr[j] = origArrI;
      keyIndices[origArrJ.key] = i;
      keyIndices[origArrI.key] = j;
    };
  }
});

// node_modules/graphlib/lib/alg/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/graphlib/lib/alg/dijkstra.js"(exports, module) {
    init_esm();
    var _ = require_lodash();
    var PriorityQueue = require_priority_queue();
    module.exports = dijkstra;
    var DEFAULT_WEIGHT_FUNC = _.constant(1);
    function dijkstra(g, source, weightFn, edgeFn) {
      return runDijkstra(
        g,
        String(source),
        weightFn || DEFAULT_WEIGHT_FUNC,
        edgeFn || function(v) {
          return g.outEdges(v);
        }
      );
    }
    __name(dijkstra, "dijkstra");
    function runDijkstra(g, source, weightFn, edgeFn) {
      var results = {};
      var pq = new PriorityQueue();
      var v, vEntry;
      var updateNeighbors = /* @__PURE__ */ __name(function(edge) {
        var w = edge.v !== v ? edge.v : edge.w;
        var wEntry = results[w];
        var weight = weightFn(edge);
        var distance = vEntry.distance + weight;
        if (weight < 0) {
          throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + edge + " Weight: " + weight);
        }
        if (distance < wEntry.distance) {
          wEntry.distance = distance;
          wEntry.predecessor = v;
          pq.decrease(w, distance);
        }
      }, "updateNeighbors");
      g.nodes().forEach(function(v2) {
        var distance = v2 === source ? 0 : Number.POSITIVE_INFINITY;
        results[v2] = { distance };
        pq.add(v2, distance);
      });
      while (pq.size() > 0) {
        v = pq.removeMin();
        vEntry = results[v];
        if (vEntry.distance === Number.POSITIVE_INFINITY) {
          break;
        }
        edgeFn(v).forEach(updateNeighbors);
      }
      return results;
    }
    __name(runDijkstra, "runDijkstra");
  }
});

// node_modules/graphlib/lib/alg/dijkstra-all.js
var require_dijkstra_all = __commonJS({
  "node_modules/graphlib/lib/alg/dijkstra-all.js"(exports, module) {
    init_esm();
    var dijkstra = require_dijkstra();
    var _ = require_lodash();
    module.exports = dijkstraAll;
    function dijkstraAll(g, weightFunc, edgeFunc) {
      return _.transform(g.nodes(), function(acc, v) {
        acc[v] = dijkstra(g, v, weightFunc, edgeFunc);
      }, {});
    }
    __name(dijkstraAll, "dijkstraAll");
  }
});

// node_modules/graphlib/lib/alg/tarjan.js
var require_tarjan = __commonJS({
  "node_modules/graphlib/lib/alg/tarjan.js"(exports, module) {
    init_esm();
    var _ = require_lodash();
    module.exports = tarjan;
    function tarjan(g) {
      var index = 0;
      var stack = [];
      var visited = {};
      var results = [];
      function dfs(v) {
        var entry = visited[v] = {
          onStack: true,
          lowlink: index,
          index: index++
        };
        stack.push(v);
        g.successors(v).forEach(function(w2) {
          if (!_.has(visited, w2)) {
            dfs(w2);
            entry.lowlink = Math.min(entry.lowlink, visited[w2].lowlink);
          } else if (visited[w2].onStack) {
            entry.lowlink = Math.min(entry.lowlink, visited[w2].index);
          }
        });
        if (entry.lowlink === entry.index) {
          var cmpt = [];
          var w;
          do {
            w = stack.pop();
            visited[w].onStack = false;
            cmpt.push(w);
          } while (v !== w);
          results.push(cmpt);
        }
      }
      __name(dfs, "dfs");
      g.nodes().forEach(function(v) {
        if (!_.has(visited, v)) {
          dfs(v);
        }
      });
      return results;
    }
    __name(tarjan, "tarjan");
  }
});

// node_modules/graphlib/lib/alg/find-cycles.js
var require_find_cycles = __commonJS({
  "node_modules/graphlib/lib/alg/find-cycles.js"(exports, module) {
    init_esm();
    var _ = require_lodash();
    var tarjan = require_tarjan();
    module.exports = findCycles;
    function findCycles(g) {
      return _.filter(tarjan(g), function(cmpt) {
        return cmpt.length > 1 || cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]);
      });
    }
    __name(findCycles, "findCycles");
  }
});

// node_modules/graphlib/lib/alg/floyd-warshall.js
var require_floyd_warshall = __commonJS({
  "node_modules/graphlib/lib/alg/floyd-warshall.js"(exports, module) {
    init_esm();
    var _ = require_lodash();
    module.exports = floydWarshall;
    var DEFAULT_WEIGHT_FUNC = _.constant(1);
    function floydWarshall(g, weightFn, edgeFn) {
      return runFloydWarshall(
        g,
        weightFn || DEFAULT_WEIGHT_FUNC,
        edgeFn || function(v) {
          return g.outEdges(v);
        }
      );
    }
    __name(floydWarshall, "floydWarshall");
    function runFloydWarshall(g, weightFn, edgeFn) {
      var results = {};
      var nodes = g.nodes();
      nodes.forEach(function(v) {
        results[v] = {};
        results[v][v] = { distance: 0 };
        nodes.forEach(function(w) {
          if (v !== w) {
            results[v][w] = { distance: Number.POSITIVE_INFINITY };
          }
        });
        edgeFn(v).forEach(function(edge) {
          var w = edge.v === v ? edge.w : edge.v;
          var d = weightFn(edge);
          results[v][w] = { distance: d, predecessor: v };
        });
      });
      nodes.forEach(function(k) {
        var rowK = results[k];
        nodes.forEach(function(i) {
          var rowI = results[i];
          nodes.forEach(function(j) {
            var ik = rowI[k];
            var kj = rowK[j];
            var ij = rowI[j];
            var altDistance = ik.distance + kj.distance;
            if (altDistance < ij.distance) {
              ij.distance = altDistance;
              ij.predecessor = kj.predecessor;
            }
          });
        });
      });
      return results;
    }
    __name(runFloydWarshall, "runFloydWarshall");
  }
});

// node_modules/graphlib/lib/alg/topsort.js
var require_topsort = __commonJS({
  "node_modules/graphlib/lib/alg/topsort.js"(exports, module) {
    init_esm();
    var _ = require_lodash();
    module.exports = topsort;
    topsort.CycleException = CycleException;
    function topsort(g) {
      var visited = {};
      var stack = {};
      var results = [];
      function visit(node) {
        if (_.has(stack, node)) {
          throw new CycleException();
        }
        if (!_.has(visited, node)) {
          stack[node] = true;
          visited[node] = true;
          _.each(g.predecessors(node), visit);
          delete stack[node];
          results.push(node);
        }
      }
      __name(visit, "visit");
      _.each(g.sinks(), visit);
      if (_.size(visited) !== g.nodeCount()) {
        throw new CycleException();
      }
      return results;
    }
    __name(topsort, "topsort");
    function CycleException() {
    }
    __name(CycleException, "CycleException");
    CycleException.prototype = new Error();
  }
});

// node_modules/graphlib/lib/alg/is-acyclic.js
var require_is_acyclic = __commonJS({
  "node_modules/graphlib/lib/alg/is-acyclic.js"(exports, module) {
    init_esm();
    var topsort = require_topsort();
    module.exports = isAcyclic;
    function isAcyclic(g) {
      try {
        topsort(g);
      } catch (e) {
        if (e instanceof topsort.CycleException) {
          return false;
        }
        throw e;
      }
      return true;
    }
    __name(isAcyclic, "isAcyclic");
  }
});

// node_modules/graphlib/lib/alg/dfs.js
var require_dfs = __commonJS({
  "node_modules/graphlib/lib/alg/dfs.js"(exports, module) {
    init_esm();
    var _ = require_lodash();
    module.exports = dfs;
    function dfs(g, vs, order) {
      if (!_.isArray(vs)) {
        vs = [vs];
      }
      var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);
      var acc = [];
      var visited = {};
      _.each(vs, function(v) {
        if (!g.hasNode(v)) {
          throw new Error("Graph does not have node: " + v);
        }
        doDfs(g, v, order === "post", visited, navigation, acc);
      });
      return acc;
    }
    __name(dfs, "dfs");
    function doDfs(g, v, postorder, visited, navigation, acc) {
      if (!_.has(visited, v)) {
        visited[v] = true;
        if (!postorder) {
          acc.push(v);
        }
        _.each(navigation(v), function(w) {
          doDfs(g, w, postorder, visited, navigation, acc);
        });
        if (postorder) {
          acc.push(v);
        }
      }
    }
    __name(doDfs, "doDfs");
  }
});

// node_modules/graphlib/lib/alg/postorder.js
var require_postorder = __commonJS({
  "node_modules/graphlib/lib/alg/postorder.js"(exports, module) {
    init_esm();
    var dfs = require_dfs();
    module.exports = postorder;
    function postorder(g, vs) {
      return dfs(g, vs, "post");
    }
    __name(postorder, "postorder");
  }
});

// node_modules/graphlib/lib/alg/preorder.js
var require_preorder = __commonJS({
  "node_modules/graphlib/lib/alg/preorder.js"(exports, module) {
    init_esm();
    var dfs = require_dfs();
    module.exports = preorder;
    function preorder(g, vs) {
      return dfs(g, vs, "pre");
    }
    __name(preorder, "preorder");
  }
});

// node_modules/graphlib/lib/alg/prim.js
var require_prim = __commonJS({
  "node_modules/graphlib/lib/alg/prim.js"(exports, module) {
    init_esm();
    var _ = require_lodash();
    var Graph = require_graph();
    var PriorityQueue = require_priority_queue();
    module.exports = prim;
    function prim(g, weightFunc) {
      var result = new Graph();
      var parents = {};
      var pq = new PriorityQueue();
      var v;
      function updateNeighbors(edge) {
        var w = edge.v === v ? edge.w : edge.v;
        var pri = pq.priority(w);
        if (pri !== void 0) {
          var edgeWeight = weightFunc(edge);
          if (edgeWeight < pri) {
            parents[w] = v;
            pq.decrease(w, edgeWeight);
          }
        }
      }
      __name(updateNeighbors, "updateNeighbors");
      if (g.nodeCount() === 0) {
        return result;
      }
      _.each(g.nodes(), function(v2) {
        pq.add(v2, Number.POSITIVE_INFINITY);
        result.setNode(v2);
      });
      pq.decrease(g.nodes()[0], 0);
      var init = false;
      while (pq.size() > 0) {
        v = pq.removeMin();
        if (_.has(parents, v)) {
          result.setEdge(v, parents[v]);
        } else if (init) {
          throw new Error("Input graph is not connected: " + g);
        } else {
          init = true;
        }
        g.nodeEdges(v).forEach(updateNeighbors);
      }
      return result;
    }
    __name(prim, "prim");
  }
});

// node_modules/graphlib/lib/alg/index.js
var require_alg = __commonJS({
  "node_modules/graphlib/lib/alg/index.js"(exports, module) {
    init_esm();
    module.exports = {
      components: require_components(),
      dijkstra: require_dijkstra(),
      dijkstraAll: require_dijkstra_all(),
      findCycles: require_find_cycles(),
      floydWarshall: require_floyd_warshall(),
      isAcyclic: require_is_acyclic(),
      postorder: require_postorder(),
      preorder: require_preorder(),
      prim: require_prim(),
      tarjan: require_tarjan(),
      topsort: require_topsort()
    };
  }
});

// node_modules/graphlib/index.js
var require_graphlib = __commonJS({
  "node_modules/graphlib/index.js"(exports, module) {
    init_esm();
    var lib = require_lib();
    module.exports = {
      Graph: lib.Graph,
      json: require_json(),
      alg: require_alg(),
      version: lib.version
    };
  }
});

// node_modules/dagre/lib/graphlib.js
var require_graphlib2 = __commonJS({
  "node_modules/dagre/lib/graphlib.js"(exports, module) {
    init_esm();
    var graphlib;
    if (typeof __require === "function") {
      try {
        graphlib = require_graphlib();
      } catch (e) {
      }
    }
    if (!graphlib) {
      graphlib = window.graphlib;
    }
    module.exports = graphlib;
  }
});

// node_modules/lodash/cloneDeep.js
var require_cloneDeep = __commonJS({
  "node_modules/lodash/cloneDeep.js"(exports, module) {
    init_esm();
    var baseClone = require_baseClone();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_SYMBOLS_FLAG = 4;
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    __name(cloneDeep, "cloneDeep");
    module.exports = cloneDeep;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    init_esm();
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    __name(isIterateeCall, "isIterateeCall");
    module.exports = isIterateeCall;
  }
});

// node_modules/lodash/defaults.js
var require_defaults = __commonJS({
  "node_modules/lodash/defaults.js"(exports, module) {
    init_esm();
    var baseRest = require_baseRest();
    var eq = require_eq();
    var isIterateeCall = require_isIterateeCall();
    var keysIn = require_keysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var defaults = baseRest(function(object, sources) {
      object = Object(object);
      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }
      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;
        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];
          if (value === void 0 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            object[key] = source[key];
          }
        }
      }
      return object;
    });
    module.exports = defaults;
  }
});

// node_modules/lodash/_createFind.js
var require_createFind = __commonJS({
  "node_modules/lodash/_createFind.js"(exports, module) {
    init_esm();
    var baseIteratee = require_baseIteratee();
    var isArrayLike = require_isArrayLike();
    var keys = require_keys();
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = baseIteratee(predicate, 3);
          collection = keys(collection);
          predicate = /* @__PURE__ */ __name(function(key) {
            return iteratee(iterable[key], key, iterable);
          }, "predicate");
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
      };
    }
    __name(createFind, "createFind");
    module.exports = createFind;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    init_esm();
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    __name(trimmedEndIndex, "trimmedEndIndex");
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    init_esm();
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    __name(baseTrim, "baseTrim");
    module.exports = baseTrim;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    init_esm();
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    __name(toNumber, "toNumber");
    module.exports = toNumber;
  }
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "node_modules/lodash/toFinite.js"(exports, module) {
    init_esm();
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    __name(toFinite, "toFinite");
    module.exports = toFinite;
  }
});

// node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "node_modules/lodash/toInteger.js"(exports, module) {
    init_esm();
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    __name(toInteger, "toInteger");
    module.exports = toInteger;
  }
});

// node_modules/lodash/findIndex.js
var require_findIndex = __commonJS({
  "node_modules/lodash/findIndex.js"(exports, module) {
    init_esm();
    var baseFindIndex = require_baseFindIndex();
    var baseIteratee = require_baseIteratee();
    var toInteger = require_toInteger();
    var nativeMax = Math.max;
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, baseIteratee(predicate, 3), index);
    }
    __name(findIndex, "findIndex");
    module.exports = findIndex;
  }
});

// node_modules/lodash/find.js
var require_find = __commonJS({
  "node_modules/lodash/find.js"(exports, module) {
    init_esm();
    var createFind = require_createFind();
    var findIndex = require_findIndex();
    var find = createFind(findIndex);
    module.exports = find;
  }
});

// node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "node_modules/lodash/flatten.js"(exports, module) {
    init_esm();
    var baseFlatten = require_baseFlatten();
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }
    __name(flatten, "flatten");
    module.exports = flatten;
  }
});

// node_modules/lodash/forIn.js
var require_forIn = __commonJS({
  "node_modules/lodash/forIn.js"(exports, module) {
    init_esm();
    var baseFor = require_baseFor();
    var castFunction = require_castFunction();
    var keysIn = require_keysIn();
    function forIn(object, iteratee) {
      return object == null ? object : baseFor(object, castFunction(iteratee), keysIn);
    }
    __name(forIn, "forIn");
    module.exports = forIn;
  }
});

// node_modules/lodash/last.js
var require_last = __commonJS({
  "node_modules/lodash/last.js"(exports, module) {
    init_esm();
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : void 0;
    }
    __name(last, "last");
    module.exports = last;
  }
});

// node_modules/lodash/mapValues.js
var require_mapValues = __commonJS({
  "node_modules/lodash/mapValues.js"(exports, module) {
    init_esm();
    var baseAssignValue = require_baseAssignValue();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = baseIteratee(iteratee, 3);
      baseForOwn(object, function(value, key, object2) {
        baseAssignValue(result, key, iteratee(value, key, object2));
      });
      return result;
    }
    __name(mapValues, "mapValues");
    module.exports = mapValues;
  }
});

// node_modules/lodash/_baseExtremum.js
var require_baseExtremum = __commonJS({
  "node_modules/lodash/_baseExtremum.js"(exports, module) {
    init_esm();
    var isSymbol = require_isSymbol();
    function baseExtremum(array, iteratee, comparator) {
      var index = -1, length = array.length;
      while (++index < length) {
        var value = array[index], current = iteratee(value);
        if (current != null && (computed === void 0 ? current === current && !isSymbol(current) : comparator(current, computed))) {
          var computed = current, result = value;
        }
      }
      return result;
    }
    __name(baseExtremum, "baseExtremum");
    module.exports = baseExtremum;
  }
});

// node_modules/lodash/_baseGt.js
var require_baseGt = __commonJS({
  "node_modules/lodash/_baseGt.js"(exports, module) {
    init_esm();
    function baseGt(value, other) {
      return value > other;
    }
    __name(baseGt, "baseGt");
    module.exports = baseGt;
  }
});

// node_modules/lodash/max.js
var require_max = __commonJS({
  "node_modules/lodash/max.js"(exports, module) {
    init_esm();
    var baseExtremum = require_baseExtremum();
    var baseGt = require_baseGt();
    var identity = require_identity();
    function max(array) {
      return array && array.length ? baseExtremum(array, identity, baseGt) : void 0;
    }
    __name(max, "max");
    module.exports = max;
  }
});

// node_modules/lodash/_assignMergeValue.js
var require_assignMergeValue = __commonJS({
  "node_modules/lodash/_assignMergeValue.js"(exports, module) {
    init_esm();
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    __name(assignMergeValue, "assignMergeValue");
    module.exports = assignMergeValue;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module) {
    init_esm();
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    __name(isPlainObject, "isPlainObject");
    module.exports = isPlainObject;
  }
});

// node_modules/lodash/_safeGet.js
var require_safeGet = __commonJS({
  "node_modules/lodash/_safeGet.js"(exports, module) {
    init_esm();
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    __name(safeGet, "safeGet");
    module.exports = safeGet;
  }
});

// node_modules/lodash/toPlainObject.js
var require_toPlainObject = __commonJS({
  "node_modules/lodash/toPlainObject.js"(exports, module) {
    init_esm();
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    __name(toPlainObject, "toPlainObject");
    module.exports = toPlainObject;
  }
});

// node_modules/lodash/_baseMergeDeep.js
var require_baseMergeDeep = __commonJS({
  "node_modules/lodash/_baseMergeDeep.js"(exports, module) {
    init_esm();
    var assignMergeValue = require_assignMergeValue();
    var cloneBuffer = require_cloneBuffer();
    var cloneTypedArray = require_cloneTypedArray();
    var copyArray = require_copyArray();
    var initCloneObject = require_initCloneObject();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isArrayLikeObject = require_isArrayLikeObject();
    var isBuffer = require_isBuffer();
    var isFunction = require_isFunction();
    var isObject = require_isObject();
    var isPlainObject = require_isPlainObject();
    var isTypedArray = require_isTypedArray();
    var safeGet = require_safeGet();
    var toPlainObject = require_toPlainObject();
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    __name(baseMergeDeep, "baseMergeDeep");
    module.exports = baseMergeDeep;
  }
});

// node_modules/lodash/_baseMerge.js
var require_baseMerge = __commonJS({
  "node_modules/lodash/_baseMerge.js"(exports, module) {
    init_esm();
    var Stack = require_Stack();
    var assignMergeValue = require_assignMergeValue();
    var baseFor = require_baseFor();
    var baseMergeDeep = require_baseMergeDeep();
    var isObject = require_isObject();
    var keysIn = require_keysIn();
    var safeGet = require_safeGet();
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    __name(baseMerge, "baseMerge");
    module.exports = baseMerge;
  }
});

// node_modules/lodash/_createAssigner.js
var require_createAssigner = __commonJS({
  "node_modules/lodash/_createAssigner.js"(exports, module) {
    init_esm();
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    __name(createAssigner, "createAssigner");
    module.exports = createAssigner;
  }
});

// node_modules/lodash/merge.js
var require_merge = __commonJS({
  "node_modules/lodash/merge.js"(exports, module) {
    init_esm();
    var baseMerge = require_baseMerge();
    var createAssigner = require_createAssigner();
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    module.exports = merge;
  }
});

// node_modules/lodash/_baseLt.js
var require_baseLt = __commonJS({
  "node_modules/lodash/_baseLt.js"(exports, module) {
    init_esm();
    function baseLt(value, other) {
      return value < other;
    }
    __name(baseLt, "baseLt");
    module.exports = baseLt;
  }
});

// node_modules/lodash/min.js
var require_min = __commonJS({
  "node_modules/lodash/min.js"(exports, module) {
    init_esm();
    var baseExtremum = require_baseExtremum();
    var baseLt = require_baseLt();
    var identity = require_identity();
    function min(array) {
      return array && array.length ? baseExtremum(array, identity, baseLt) : void 0;
    }
    __name(min, "min");
    module.exports = min;
  }
});

// node_modules/lodash/minBy.js
var require_minBy = __commonJS({
  "node_modules/lodash/minBy.js"(exports, module) {
    init_esm();
    var baseExtremum = require_baseExtremum();
    var baseIteratee = require_baseIteratee();
    var baseLt = require_baseLt();
    function minBy(array, iteratee) {
      return array && array.length ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt) : void 0;
    }
    __name(minBy, "minBy");
    module.exports = minBy;
  }
});

// node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module) {
    init_esm();
    var root = require_root();
    var now = /* @__PURE__ */ __name(function() {
      return root.Date.now();
    }, "now");
    module.exports = now;
  }
});

// node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "node_modules/lodash/_baseSet.js"(exports, module) {
    init_esm();
    var assignValue = require_assignValue();
    var castPath = require_castPath();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    var toKey = require_toKey();
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);
      var index = -1, length = path.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index < length) {
        var key = toKey(path[index]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          return object;
        }
        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    __name(baseSet, "baseSet");
    module.exports = baseSet;
  }
});

// node_modules/lodash/_basePickBy.js
var require_basePickBy = __commonJS({
  "node_modules/lodash/_basePickBy.js"(exports, module) {
    init_esm();
    var baseGet = require_baseGet();
    var baseSet = require_baseSet();
    var castPath = require_castPath();
    function basePickBy(object, paths, predicate) {
      var index = -1, length = paths.length, result = {};
      while (++index < length) {
        var path = paths[index], value = baseGet(object, path);
        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }
    __name(basePickBy, "basePickBy");
    module.exports = basePickBy;
  }
});

// node_modules/lodash/_basePick.js
var require_basePick = __commonJS({
  "node_modules/lodash/_basePick.js"(exports, module) {
    init_esm();
    var basePickBy = require_basePickBy();
    var hasIn = require_hasIn();
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }
    __name(basePick, "basePick");
    module.exports = basePick;
  }
});

// node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "node_modules/lodash/_flatRest.js"(exports, module) {
    init_esm();
    var flatten = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten), func + "");
    }
    __name(flatRest, "flatRest");
    module.exports = flatRest;
  }
});

// node_modules/lodash/pick.js
var require_pick = __commonJS({
  "node_modules/lodash/pick.js"(exports, module) {
    init_esm();
    var basePick = require_basePick();
    var flatRest = require_flatRest();
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });
    module.exports = pick;
  }
});

// node_modules/lodash/_baseRange.js
var require_baseRange = __commonJS({
  "node_modules/lodash/_baseRange.js"(exports, module) {
    init_esm();
    var nativeCeil = Math.ceil;
    var nativeMax = Math.max;
    function baseRange(start, end, step, fromRight) {
      var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }
    __name(baseRange, "baseRange");
    module.exports = baseRange;
  }
});

// node_modules/lodash/_createRange.js
var require_createRange = __commonJS({
  "node_modules/lodash/_createRange.js"(exports, module) {
    init_esm();
    var baseRange = require_baseRange();
    var isIterateeCall = require_isIterateeCall();
    var toFinite = require_toFinite();
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
          end = step = void 0;
        }
        start = toFinite(start);
        if (end === void 0) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === void 0 ? start < end ? 1 : -1 : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }
    __name(createRange, "createRange");
    module.exports = createRange;
  }
});

// node_modules/lodash/range.js
var require_range = __commonJS({
  "node_modules/lodash/range.js"(exports, module) {
    init_esm();
    var createRange = require_createRange();
    var range = createRange();
    module.exports = range;
  }
});

// node_modules/lodash/_baseSortBy.js
var require_baseSortBy = __commonJS({
  "node_modules/lodash/_baseSortBy.js"(exports, module) {
    init_esm();
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    __name(baseSortBy, "baseSortBy");
    module.exports = baseSortBy;
  }
});

// node_modules/lodash/_compareAscending.js
var require_compareAscending = __commonJS({
  "node_modules/lodash/_compareAscending.js"(exports, module) {
    init_esm();
    var isSymbol = require_isSymbol();
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
        var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
          return 1;
        }
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }
    __name(compareAscending, "compareAscending");
    module.exports = compareAscending;
  }
});

// node_modules/lodash/_compareMultiple.js
var require_compareMultiple = __commonJS({
  "node_modules/lodash/_compareMultiple.js"(exports, module) {
    init_esm();
    var compareAscending = require_compareAscending();
    function compareMultiple(object, other, orders) {
      var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == "desc" ? -1 : 1);
        }
      }
      return object.index - other.index;
    }
    __name(compareMultiple, "compareMultiple");
    module.exports = compareMultiple;
  }
});

// node_modules/lodash/_baseOrderBy.js
var require_baseOrderBy = __commonJS({
  "node_modules/lodash/_baseOrderBy.js"(exports, module) {
    init_esm();
    var arrayMap = require_arrayMap();
    var baseGet = require_baseGet();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var baseSortBy = require_baseSortBy();
    var baseUnary = require_baseUnary();
    var compareMultiple = require_compareMultiple();
    var identity = require_identity();
    var isArray = require_isArray();
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            };
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }
      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      var result = baseMap(collection, function(value, key, collection2) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { "criteria": criteria, "index": ++index, "value": value };
      });
      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }
    __name(baseOrderBy, "baseOrderBy");
    module.exports = baseOrderBy;
  }
});

// node_modules/lodash/sortBy.js
var require_sortBy = __commonJS({
  "node_modules/lodash/sortBy.js"(exports, module) {
    init_esm();
    var baseFlatten = require_baseFlatten();
    var baseOrderBy = require_baseOrderBy();
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });
    module.exports = sortBy;
  }
});

// node_modules/lodash/uniqueId.js
var require_uniqueId = __commonJS({
  "node_modules/lodash/uniqueId.js"(exports, module) {
    init_esm();
    var toString = require_toString();
    var idCounter = 0;
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }
    __name(uniqueId, "uniqueId");
    module.exports = uniqueId;
  }
});

// node_modules/lodash/_baseZipObject.js
var require_baseZipObject = __commonJS({
  "node_modules/lodash/_baseZipObject.js"(exports, module) {
    init_esm();
    function baseZipObject(props, values, assignFunc) {
      var index = -1, length = props.length, valsLength = values.length, result = {};
      while (++index < length) {
        var value = index < valsLength ? values[index] : void 0;
        assignFunc(result, props[index], value);
      }
      return result;
    }
    __name(baseZipObject, "baseZipObject");
    module.exports = baseZipObject;
  }
});

// node_modules/lodash/zipObject.js
var require_zipObject = __commonJS({
  "node_modules/lodash/zipObject.js"(exports, module) {
    init_esm();
    var assignValue = require_assignValue();
    var baseZipObject = require_baseZipObject();
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }
    __name(zipObject, "zipObject");
    module.exports = zipObject;
  }
});

// node_modules/dagre/lib/lodash.js
var require_lodash2 = __commonJS({
  "node_modules/dagre/lib/lodash.js"(exports, module) {
    init_esm();
    var lodash;
    if (typeof __require === "function") {
      try {
        lodash = {
          cloneDeep: require_cloneDeep(),
          constant: require_constant(),
          defaults: require_defaults(),
          each: require_each(),
          filter: require_filter(),
          find: require_find(),
          flatten: require_flatten(),
          forEach: require_forEach(),
          forIn: require_forIn(),
          has: require_has(),
          isUndefined: require_isUndefined(),
          last: require_last(),
          map: require_map(),
          mapValues: require_mapValues(),
          max: require_max(),
          merge: require_merge(),
          min: require_min(),
          minBy: require_minBy(),
          now: require_now(),
          pick: require_pick(),
          range: require_range(),
          reduce: require_reduce(),
          sortBy: require_sortBy(),
          uniqueId: require_uniqueId(),
          values: require_values(),
          zipObject: require_zipObject()
        };
      } catch (e) {
      }
    }
    if (!lodash) {
      lodash = window._;
    }
    module.exports = lodash;
  }
});

// node_modules/dagre/lib/data/list.js
var require_list = __commonJS({
  "node_modules/dagre/lib/data/list.js"(exports, module) {
    init_esm();
    module.exports = List;
    function List() {
      var sentinel = {};
      sentinel._next = sentinel._prev = sentinel;
      this._sentinel = sentinel;
    }
    __name(List, "List");
    List.prototype.dequeue = function() {
      var sentinel = this._sentinel;
      var entry = sentinel._prev;
      if (entry !== sentinel) {
        unlink(entry);
        return entry;
      }
    };
    List.prototype.enqueue = function(entry) {
      var sentinel = this._sentinel;
      if (entry._prev && entry._next) {
        unlink(entry);
      }
      entry._next = sentinel._next;
      sentinel._next._prev = entry;
      sentinel._next = entry;
      entry._prev = sentinel;
    };
    List.prototype.toString = function() {
      var strs = [];
      var sentinel = this._sentinel;
      var curr = sentinel._prev;
      while (curr !== sentinel) {
        strs.push(JSON.stringify(curr, filterOutLinks));
        curr = curr._prev;
      }
      return "[" + strs.join(", ") + "]";
    };
    function unlink(entry) {
      entry._prev._next = entry._next;
      entry._next._prev = entry._prev;
      delete entry._next;
      delete entry._prev;
    }
    __name(unlink, "unlink");
    function filterOutLinks(k, v) {
      if (k !== "_next" && k !== "_prev") {
        return v;
      }
    }
    __name(filterOutLinks, "filterOutLinks");
  }
});

// node_modules/dagre/lib/greedy-fas.js
var require_greedy_fas = __commonJS({
  "node_modules/dagre/lib/greedy-fas.js"(exports, module) {
    init_esm();
    var _ = require_lodash2();
    var Graph = require_graphlib2().Graph;
    var List = require_list();
    module.exports = greedyFAS;
    var DEFAULT_WEIGHT_FN = _.constant(1);
    function greedyFAS(g, weightFn) {
      if (g.nodeCount() <= 1) {
        return [];
      }
      var state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
      var results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);
      return _.flatten(_.map(results, function(e) {
        return g.outEdges(e.v, e.w);
      }), true);
    }
    __name(greedyFAS, "greedyFAS");
    function doGreedyFAS(g, buckets, zeroIdx) {
      var results = [];
      var sources = buckets[buckets.length - 1];
      var sinks = buckets[0];
      var entry;
      while (g.nodeCount()) {
        while (entry = sinks.dequeue()) {
          removeNode(g, buckets, zeroIdx, entry);
        }
        while (entry = sources.dequeue()) {
          removeNode(g, buckets, zeroIdx, entry);
        }
        if (g.nodeCount()) {
          for (var i = buckets.length - 2; i > 0; --i) {
            entry = buckets[i].dequeue();
            if (entry) {
              results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
              break;
            }
          }
        }
      }
      return results;
    }
    __name(doGreedyFAS, "doGreedyFAS");
    function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
      var results = collectPredecessors ? [] : void 0;
      _.forEach(g.inEdges(entry.v), function(edge) {
        var weight = g.edge(edge);
        var uEntry = g.node(edge.v);
        if (collectPredecessors) {
          results.push({ v: edge.v, w: edge.w });
        }
        uEntry.out -= weight;
        assignBucket(buckets, zeroIdx, uEntry);
      });
      _.forEach(g.outEdges(entry.v), function(edge) {
        var weight = g.edge(edge);
        var w = edge.w;
        var wEntry = g.node(w);
        wEntry["in"] -= weight;
        assignBucket(buckets, zeroIdx, wEntry);
      });
      g.removeNode(entry.v);
      return results;
    }
    __name(removeNode, "removeNode");
    function buildState(g, weightFn) {
      var fasGraph = new Graph();
      var maxIn = 0;
      var maxOut = 0;
      _.forEach(g.nodes(), function(v) {
        fasGraph.setNode(v, { v, "in": 0, out: 0 });
      });
      _.forEach(g.edges(), function(e) {
        var prevWeight = fasGraph.edge(e.v, e.w) || 0;
        var weight = weightFn(e);
        var edgeWeight = prevWeight + weight;
        fasGraph.setEdge(e.v, e.w, edgeWeight);
        maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
        maxIn = Math.max(maxIn, fasGraph.node(e.w)["in"] += weight);
      });
      var buckets = _.range(maxOut + maxIn + 3).map(function() {
        return new List();
      });
      var zeroIdx = maxIn + 1;
      _.forEach(fasGraph.nodes(), function(v) {
        assignBucket(buckets, zeroIdx, fasGraph.node(v));
      });
      return { graph: fasGraph, buckets, zeroIdx };
    }
    __name(buildState, "buildState");
    function assignBucket(buckets, zeroIdx, entry) {
      if (!entry.out) {
        buckets[0].enqueue(entry);
      } else if (!entry["in"]) {
        buckets[buckets.length - 1].enqueue(entry);
      } else {
        buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
      }
    }
    __name(assignBucket, "assignBucket");
  }
});

// node_modules/dagre/lib/acyclic.js
var require_acyclic = __commonJS({
  "node_modules/dagre/lib/acyclic.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    var greedyFAS = require_greedy_fas();
    module.exports = {
      run,
      undo
    };
    function run(g) {
      var fas = g.graph().acyclicer === "greedy" ? greedyFAS(g, weightFn(g)) : dfsFAS(g);
      _.forEach(fas, function(e) {
        var label = g.edge(e);
        g.removeEdge(e);
        label.forwardName = e.name;
        label.reversed = true;
        g.setEdge(e.w, e.v, label, _.uniqueId("rev"));
      });
      function weightFn(g2) {
        return function(e) {
          return g2.edge(e).weight;
        };
      }
      __name(weightFn, "weightFn");
    }
    __name(run, "run");
    function dfsFAS(g) {
      var fas = [];
      var stack = {};
      var visited = {};
      function dfs(v) {
        if (_.has(visited, v)) {
          return;
        }
        visited[v] = true;
        stack[v] = true;
        _.forEach(g.outEdges(v), function(e) {
          if (_.has(stack, e.w)) {
            fas.push(e);
          } else {
            dfs(e.w);
          }
        });
        delete stack[v];
      }
      __name(dfs, "dfs");
      _.forEach(g.nodes(), dfs);
      return fas;
    }
    __name(dfsFAS, "dfsFAS");
    function undo(g) {
      _.forEach(g.edges(), function(e) {
        var label = g.edge(e);
        if (label.reversed) {
          g.removeEdge(e);
          var forwardName = label.forwardName;
          delete label.reversed;
          delete label.forwardName;
          g.setEdge(e.w, e.v, label, forwardName);
        }
      });
    }
    __name(undo, "undo");
  }
});

// node_modules/dagre/lib/util.js
var require_util = __commonJS({
  "node_modules/dagre/lib/util.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    var Graph = require_graphlib2().Graph;
    module.exports = {
      addDummyNode,
      simplify,
      asNonCompoundGraph,
      successorWeights,
      predecessorWeights,
      intersectRect,
      buildLayerMatrix,
      normalizeRanks,
      removeEmptyRanks,
      addBorderNode,
      maxRank,
      partition,
      time,
      notime
    };
    function addDummyNode(g, type, attrs, name) {
      var v;
      do {
        v = _.uniqueId(name);
      } while (g.hasNode(v));
      attrs.dummy = type;
      g.setNode(v, attrs);
      return v;
    }
    __name(addDummyNode, "addDummyNode");
    function simplify(g) {
      var simplified = new Graph().setGraph(g.graph());
      _.forEach(g.nodes(), function(v) {
        simplified.setNode(v, g.node(v));
      });
      _.forEach(g.edges(), function(e) {
        var simpleLabel = simplified.edge(e.v, e.w) || { weight: 0, minlen: 1 };
        var label = g.edge(e);
        simplified.setEdge(e.v, e.w, {
          weight: simpleLabel.weight + label.weight,
          minlen: Math.max(simpleLabel.minlen, label.minlen)
        });
      });
      return simplified;
    }
    __name(simplify, "simplify");
    function asNonCompoundGraph(g) {
      var simplified = new Graph({ multigraph: g.isMultigraph() }).setGraph(g.graph());
      _.forEach(g.nodes(), function(v) {
        if (!g.children(v).length) {
          simplified.setNode(v, g.node(v));
        }
      });
      _.forEach(g.edges(), function(e) {
        simplified.setEdge(e, g.edge(e));
      });
      return simplified;
    }
    __name(asNonCompoundGraph, "asNonCompoundGraph");
    function successorWeights(g) {
      var weightMap = _.map(g.nodes(), function(v) {
        var sucs = {};
        _.forEach(g.outEdges(v), function(e) {
          sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
        });
        return sucs;
      });
      return _.zipObject(g.nodes(), weightMap);
    }
    __name(successorWeights, "successorWeights");
    function predecessorWeights(g) {
      var weightMap = _.map(g.nodes(), function(v) {
        var preds = {};
        _.forEach(g.inEdges(v), function(e) {
          preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
        });
        return preds;
      });
      return _.zipObject(g.nodes(), weightMap);
    }
    __name(predecessorWeights, "predecessorWeights");
    function intersectRect(rect, point) {
      var x = rect.x;
      var y = rect.y;
      var dx = point.x - x;
      var dy = point.y - y;
      var w = rect.width / 2;
      var h = rect.height / 2;
      if (!dx && !dy) {
        throw new Error("Not possible to find intersection inside of the rectangle");
      }
      var sx, sy;
      if (Math.abs(dy) * w > Math.abs(dx) * h) {
        if (dy < 0) {
          h = -h;
        }
        sx = h * dx / dy;
        sy = h;
      } else {
        if (dx < 0) {
          w = -w;
        }
        sx = w;
        sy = w * dy / dx;
      }
      return { x: x + sx, y: y + sy };
    }
    __name(intersectRect, "intersectRect");
    function buildLayerMatrix(g) {
      var layering = _.map(_.range(maxRank(g) + 1), function() {
        return [];
      });
      _.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        var rank = node.rank;
        if (!_.isUndefined(rank)) {
          layering[rank][node.order] = v;
        }
      });
      return layering;
    }
    __name(buildLayerMatrix, "buildLayerMatrix");
    function normalizeRanks(g) {
      var min = _.min(_.map(g.nodes(), function(v) {
        return g.node(v).rank;
      }));
      _.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (_.has(node, "rank")) {
          node.rank -= min;
        }
      });
    }
    __name(normalizeRanks, "normalizeRanks");
    function removeEmptyRanks(g) {
      var offset = _.min(_.map(g.nodes(), function(v) {
        return g.node(v).rank;
      }));
      var layers = [];
      _.forEach(g.nodes(), function(v) {
        var rank = g.node(v).rank - offset;
        if (!layers[rank]) {
          layers[rank] = [];
        }
        layers[rank].push(v);
      });
      var delta = 0;
      var nodeRankFactor = g.graph().nodeRankFactor;
      _.forEach(layers, function(vs, i) {
        if (_.isUndefined(vs) && i % nodeRankFactor !== 0) {
          --delta;
        } else if (delta) {
          _.forEach(vs, function(v) {
            g.node(v).rank += delta;
          });
        }
      });
    }
    __name(removeEmptyRanks, "removeEmptyRanks");
    function addBorderNode(g, prefix, rank, order) {
      var node = {
        width: 0,
        height: 0
      };
      if (arguments.length >= 4) {
        node.rank = rank;
        node.order = order;
      }
      return addDummyNode(g, "border", node, prefix);
    }
    __name(addBorderNode, "addBorderNode");
    function maxRank(g) {
      return _.max(_.map(g.nodes(), function(v) {
        var rank = g.node(v).rank;
        if (!_.isUndefined(rank)) {
          return rank;
        }
      }));
    }
    __name(maxRank, "maxRank");
    function partition(collection, fn) {
      var result = { lhs: [], rhs: [] };
      _.forEach(collection, function(value) {
        if (fn(value)) {
          result.lhs.push(value);
        } else {
          result.rhs.push(value);
        }
      });
      return result;
    }
    __name(partition, "partition");
    function time(name, fn) {
      var start = _.now();
      try {
        return fn();
      } finally {
        console.log(name + " time: " + (_.now() - start) + "ms");
      }
    }
    __name(time, "time");
    function notime(name, fn) {
      return fn();
    }
    __name(notime, "notime");
  }
});

// node_modules/dagre/lib/normalize.js
var require_normalize = __commonJS({
  "node_modules/dagre/lib/normalize.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    var util = require_util();
    module.exports = {
      run,
      undo
    };
    function run(g) {
      g.graph().dummyChains = [];
      _.forEach(g.edges(), function(edge) {
        normalizeEdge(g, edge);
      });
    }
    __name(run, "run");
    function normalizeEdge(g, e) {
      var v = e.v;
      var vRank = g.node(v).rank;
      var w = e.w;
      var wRank = g.node(w).rank;
      var name = e.name;
      var edgeLabel = g.edge(e);
      var labelRank = edgeLabel.labelRank;
      if (wRank === vRank + 1) return;
      g.removeEdge(e);
      var dummy, attrs, i;
      for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
        edgeLabel.points = [];
        attrs = {
          width: 0,
          height: 0,
          edgeLabel,
          edgeObj: e,
          rank: vRank
        };
        dummy = util.addDummyNode(g, "edge", attrs, "_d");
        if (vRank === labelRank) {
          attrs.width = edgeLabel.width;
          attrs.height = edgeLabel.height;
          attrs.dummy = "edge-label";
          attrs.labelpos = edgeLabel.labelpos;
        }
        g.setEdge(v, dummy, { weight: edgeLabel.weight }, name);
        if (i === 0) {
          g.graph().dummyChains.push(dummy);
        }
        v = dummy;
      }
      g.setEdge(v, w, { weight: edgeLabel.weight }, name);
    }
    __name(normalizeEdge, "normalizeEdge");
    function undo(g) {
      _.forEach(g.graph().dummyChains, function(v) {
        var node = g.node(v);
        var origLabel = node.edgeLabel;
        var w;
        g.setEdge(node.edgeObj, origLabel);
        while (node.dummy) {
          w = g.successors(v)[0];
          g.removeNode(v);
          origLabel.points.push({ x: node.x, y: node.y });
          if (node.dummy === "edge-label") {
            origLabel.x = node.x;
            origLabel.y = node.y;
            origLabel.width = node.width;
            origLabel.height = node.height;
          }
          v = w;
          node = g.node(v);
        }
      });
    }
    __name(undo, "undo");
  }
});

// node_modules/dagre/lib/rank/util.js
var require_util2 = __commonJS({
  "node_modules/dagre/lib/rank/util.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    module.exports = {
      longestPath,
      slack
    };
    function longestPath(g) {
      var visited = {};
      function dfs(v) {
        var label = g.node(v);
        if (_.has(visited, v)) {
          return label.rank;
        }
        visited[v] = true;
        var rank = _.min(_.map(g.outEdges(v), function(e) {
          return dfs(e.w) - g.edge(e).minlen;
        }));
        if (rank === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
        rank === void 0 || // return value of _.map([]) for Lodash 4
        rank === null) {
          rank = 0;
        }
        return label.rank = rank;
      }
      __name(dfs, "dfs");
      _.forEach(g.sources(), dfs);
    }
    __name(longestPath, "longestPath");
    function slack(g, e) {
      return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
    }
    __name(slack, "slack");
  }
});

// node_modules/dagre/lib/rank/feasible-tree.js
var require_feasible_tree = __commonJS({
  "node_modules/dagre/lib/rank/feasible-tree.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    var Graph = require_graphlib2().Graph;
    var slack = require_util2().slack;
    module.exports = feasibleTree;
    function feasibleTree(g) {
      var t = new Graph({ directed: false });
      var start = g.nodes()[0];
      var size = g.nodeCount();
      t.setNode(start, {});
      var edge, delta;
      while (tightTree(t, g) < size) {
        edge = findMinSlackEdge(t, g);
        delta = t.hasNode(edge.v) ? slack(g, edge) : -slack(g, edge);
        shiftRanks(t, g, delta);
      }
      return t;
    }
    __name(feasibleTree, "feasibleTree");
    function tightTree(t, g) {
      function dfs(v) {
        _.forEach(g.nodeEdges(v), function(e) {
          var edgeV = e.v, w = v === edgeV ? e.w : edgeV;
          if (!t.hasNode(w) && !slack(g, e)) {
            t.setNode(w, {});
            t.setEdge(v, w, {});
            dfs(w);
          }
        });
      }
      __name(dfs, "dfs");
      _.forEach(t.nodes(), dfs);
      return t.nodeCount();
    }
    __name(tightTree, "tightTree");
    function findMinSlackEdge(t, g) {
      return _.minBy(g.edges(), function(e) {
        if (t.hasNode(e.v) !== t.hasNode(e.w)) {
          return slack(g, e);
        }
      });
    }
    __name(findMinSlackEdge, "findMinSlackEdge");
    function shiftRanks(t, g, delta) {
      _.forEach(t.nodes(), function(v) {
        g.node(v).rank += delta;
      });
    }
    __name(shiftRanks, "shiftRanks");
  }
});

// node_modules/dagre/lib/rank/network-simplex.js
var require_network_simplex = __commonJS({
  "node_modules/dagre/lib/rank/network-simplex.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    var feasibleTree = require_feasible_tree();
    var slack = require_util2().slack;
    var initRank = require_util2().longestPath;
    var preorder = require_graphlib2().alg.preorder;
    var postorder = require_graphlib2().alg.postorder;
    var simplify = require_util().simplify;
    module.exports = networkSimplex;
    networkSimplex.initLowLimValues = initLowLimValues;
    networkSimplex.initCutValues = initCutValues;
    networkSimplex.calcCutValue = calcCutValue;
    networkSimplex.leaveEdge = leaveEdge;
    networkSimplex.enterEdge = enterEdge;
    networkSimplex.exchangeEdges = exchangeEdges;
    function networkSimplex(g) {
      g = simplify(g);
      initRank(g);
      var t = feasibleTree(g);
      initLowLimValues(t);
      initCutValues(t, g);
      var e, f;
      while (e = leaveEdge(t)) {
        f = enterEdge(t, g, e);
        exchangeEdges(t, g, e, f);
      }
    }
    __name(networkSimplex, "networkSimplex");
    function initCutValues(t, g) {
      var vs = postorder(t, t.nodes());
      vs = vs.slice(0, vs.length - 1);
      _.forEach(vs, function(v) {
        assignCutValue(t, g, v);
      });
    }
    __name(initCutValues, "initCutValues");
    function assignCutValue(t, g, child) {
      var childLab = t.node(child);
      var parent = childLab.parent;
      t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
    }
    __name(assignCutValue, "assignCutValue");
    function calcCutValue(t, g, child) {
      var childLab = t.node(child);
      var parent = childLab.parent;
      var childIsTail = true;
      var graphEdge = g.edge(child, parent);
      var cutValue = 0;
      if (!graphEdge) {
        childIsTail = false;
        graphEdge = g.edge(parent, child);
      }
      cutValue = graphEdge.weight;
      _.forEach(g.nodeEdges(child), function(e) {
        var isOutEdge = e.v === child, other = isOutEdge ? e.w : e.v;
        if (other !== parent) {
          var pointsToHead = isOutEdge === childIsTail, otherWeight = g.edge(e).weight;
          cutValue += pointsToHead ? otherWeight : -otherWeight;
          if (isTreeEdge(t, child, other)) {
            var otherCutValue = t.edge(child, other).cutvalue;
            cutValue += pointsToHead ? -otherCutValue : otherCutValue;
          }
        }
      });
      return cutValue;
    }
    __name(calcCutValue, "calcCutValue");
    function initLowLimValues(tree, root) {
      if (arguments.length < 2) {
        root = tree.nodes()[0];
      }
      dfsAssignLowLim(tree, {}, 1, root);
    }
    __name(initLowLimValues, "initLowLimValues");
    function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
      var low = nextLim;
      var label = tree.node(v);
      visited[v] = true;
      _.forEach(tree.neighbors(v), function(w) {
        if (!_.has(visited, w)) {
          nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
        }
      });
      label.low = low;
      label.lim = nextLim++;
      if (parent) {
        label.parent = parent;
      } else {
        delete label.parent;
      }
      return nextLim;
    }
    __name(dfsAssignLowLim, "dfsAssignLowLim");
    function leaveEdge(tree) {
      return _.find(tree.edges(), function(e) {
        return tree.edge(e).cutvalue < 0;
      });
    }
    __name(leaveEdge, "leaveEdge");
    function enterEdge(t, g, edge) {
      var v = edge.v;
      var w = edge.w;
      if (!g.hasEdge(v, w)) {
        v = edge.w;
        w = edge.v;
      }
      var vLabel = t.node(v);
      var wLabel = t.node(w);
      var tailLabel = vLabel;
      var flip = false;
      if (vLabel.lim > wLabel.lim) {
        tailLabel = wLabel;
        flip = true;
      }
      var candidates = _.filter(g.edges(), function(edge2) {
        return flip === isDescendant(t, t.node(edge2.v), tailLabel) && flip !== isDescendant(t, t.node(edge2.w), tailLabel);
      });
      return _.minBy(candidates, function(edge2) {
        return slack(g, edge2);
      });
    }
    __name(enterEdge, "enterEdge");
    function exchangeEdges(t, g, e, f) {
      var v = e.v;
      var w = e.w;
      t.removeEdge(v, w);
      t.setEdge(f.v, f.w, {});
      initLowLimValues(t);
      initCutValues(t, g);
      updateRanks(t, g);
    }
    __name(exchangeEdges, "exchangeEdges");
    function updateRanks(t, g) {
      var root = _.find(t.nodes(), function(v) {
        return !g.node(v).parent;
      });
      var vs = preorder(t, root);
      vs = vs.slice(1);
      _.forEach(vs, function(v) {
        var parent = t.node(v).parent, edge = g.edge(v, parent), flipped = false;
        if (!edge) {
          edge = g.edge(parent, v);
          flipped = true;
        }
        g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
      });
    }
    __name(updateRanks, "updateRanks");
    function isTreeEdge(tree, u, v) {
      return tree.hasEdge(u, v);
    }
    __name(isTreeEdge, "isTreeEdge");
    function isDescendant(tree, vLabel, rootLabel) {
      return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
    }
    __name(isDescendant, "isDescendant");
  }
});

// node_modules/dagre/lib/rank/index.js
var require_rank = __commonJS({
  "node_modules/dagre/lib/rank/index.js"(exports, module) {
    "use strict";
    init_esm();
    var rankUtil = require_util2();
    var longestPath = rankUtil.longestPath;
    var feasibleTree = require_feasible_tree();
    var networkSimplex = require_network_simplex();
    module.exports = rank;
    function rank(g) {
      switch (g.graph().ranker) {
        case "network-simplex":
          networkSimplexRanker(g);
          break;
        case "tight-tree":
          tightTreeRanker(g);
          break;
        case "longest-path":
          longestPathRanker(g);
          break;
        default:
          networkSimplexRanker(g);
      }
    }
    __name(rank, "rank");
    var longestPathRanker = longestPath;
    function tightTreeRanker(g) {
      longestPath(g);
      feasibleTree(g);
    }
    __name(tightTreeRanker, "tightTreeRanker");
    function networkSimplexRanker(g) {
      networkSimplex(g);
    }
    __name(networkSimplexRanker, "networkSimplexRanker");
  }
});

// node_modules/dagre/lib/parent-dummy-chains.js
var require_parent_dummy_chains = __commonJS({
  "node_modules/dagre/lib/parent-dummy-chains.js"(exports, module) {
    init_esm();
    var _ = require_lodash2();
    module.exports = parentDummyChains;
    function parentDummyChains(g) {
      var postorderNums = postorder(g);
      _.forEach(g.graph().dummyChains, function(v) {
        var node = g.node(v);
        var edgeObj = node.edgeObj;
        var pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
        var path = pathData.path;
        var lca = pathData.lca;
        var pathIdx = 0;
        var pathV = path[pathIdx];
        var ascending = true;
        while (v !== edgeObj.w) {
          node = g.node(v);
          if (ascending) {
            while ((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node.rank) {
              pathIdx++;
            }
            if (pathV === lca) {
              ascending = false;
            }
          }
          if (!ascending) {
            while (pathIdx < path.length - 1 && g.node(pathV = path[pathIdx + 1]).minRank <= node.rank) {
              pathIdx++;
            }
            pathV = path[pathIdx];
          }
          g.setParent(v, pathV);
          v = g.successors(v)[0];
        }
      });
    }
    __name(parentDummyChains, "parentDummyChains");
    function findPath(g, postorderNums, v, w) {
      var vPath = [];
      var wPath = [];
      var low = Math.min(postorderNums[v].low, postorderNums[w].low);
      var lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
      var parent;
      var lca;
      parent = v;
      do {
        parent = g.parent(parent);
        vPath.push(parent);
      } while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
      lca = parent;
      parent = w;
      while ((parent = g.parent(parent)) !== lca) {
        wPath.push(parent);
      }
      return { path: vPath.concat(wPath.reverse()), lca };
    }
    __name(findPath, "findPath");
    function postorder(g) {
      var result = {};
      var lim = 0;
      function dfs(v) {
        var low = lim;
        _.forEach(g.children(v), dfs);
        result[v] = { low, lim: lim++ };
      }
      __name(dfs, "dfs");
      _.forEach(g.children(), dfs);
      return result;
    }
    __name(postorder, "postorder");
  }
});

// node_modules/dagre/lib/nesting-graph.js
var require_nesting_graph = __commonJS({
  "node_modules/dagre/lib/nesting-graph.js"(exports, module) {
    init_esm();
    var _ = require_lodash2();
    var util = require_util();
    module.exports = {
      run,
      cleanup
    };
    function run(g) {
      var root = util.addDummyNode(g, "root", {}, "_root");
      var depths = treeDepths(g);
      var height = _.max(_.values(depths)) - 1;
      var nodeSep = 2 * height + 1;
      g.graph().nestingRoot = root;
      _.forEach(g.edges(), function(e) {
        g.edge(e).minlen *= nodeSep;
      });
      var weight = sumWeights(g) + 1;
      _.forEach(g.children(), function(child) {
        dfs(g, root, nodeSep, weight, height, depths, child);
      });
      g.graph().nodeRankFactor = nodeSep;
    }
    __name(run, "run");
    function dfs(g, root, nodeSep, weight, height, depths, v) {
      var children = g.children(v);
      if (!children.length) {
        if (v !== root) {
          g.setEdge(root, v, { weight: 0, minlen: nodeSep });
        }
        return;
      }
      var top = util.addBorderNode(g, "_bt");
      var bottom = util.addBorderNode(g, "_bb");
      var label = g.node(v);
      g.setParent(top, v);
      label.borderTop = top;
      g.setParent(bottom, v);
      label.borderBottom = bottom;
      _.forEach(children, function(child) {
        dfs(g, root, nodeSep, weight, height, depths, child);
        var childNode = g.node(child);
        var childTop = childNode.borderTop ? childNode.borderTop : child;
        var childBottom = childNode.borderBottom ? childNode.borderBottom : child;
        var thisWeight = childNode.borderTop ? weight : 2 * weight;
        var minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;
        g.setEdge(top, childTop, {
          weight: thisWeight,
          minlen,
          nestingEdge: true
        });
        g.setEdge(childBottom, bottom, {
          weight: thisWeight,
          minlen,
          nestingEdge: true
        });
      });
      if (!g.parent(v)) {
        g.setEdge(root, top, { weight: 0, minlen: height + depths[v] });
      }
    }
    __name(dfs, "dfs");
    function treeDepths(g) {
      var depths = {};
      function dfs2(v, depth) {
        var children = g.children(v);
        if (children && children.length) {
          _.forEach(children, function(child) {
            dfs2(child, depth + 1);
          });
        }
        depths[v] = depth;
      }
      __name(dfs2, "dfs");
      _.forEach(g.children(), function(v) {
        dfs2(v, 1);
      });
      return depths;
    }
    __name(treeDepths, "treeDepths");
    function sumWeights(g) {
      return _.reduce(g.edges(), function(acc, e) {
        return acc + g.edge(e).weight;
      }, 0);
    }
    __name(sumWeights, "sumWeights");
    function cleanup(g) {
      var graphLabel = g.graph();
      g.removeNode(graphLabel.nestingRoot);
      delete graphLabel.nestingRoot;
      _.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (edge.nestingEdge) {
          g.removeEdge(e);
        }
      });
    }
    __name(cleanup, "cleanup");
  }
});

// node_modules/dagre/lib/add-border-segments.js
var require_add_border_segments = __commonJS({
  "node_modules/dagre/lib/add-border-segments.js"(exports, module) {
    init_esm();
    var _ = require_lodash2();
    var util = require_util();
    module.exports = addBorderSegments;
    function addBorderSegments(g) {
      function dfs(v) {
        var children = g.children(v);
        var node = g.node(v);
        if (children.length) {
          _.forEach(children, dfs);
        }
        if (_.has(node, "minRank")) {
          node.borderLeft = [];
          node.borderRight = [];
          for (var rank = node.minRank, maxRank = node.maxRank + 1; rank < maxRank; ++rank) {
            addBorderNode(g, "borderLeft", "_bl", v, node, rank);
            addBorderNode(g, "borderRight", "_br", v, node, rank);
          }
        }
      }
      __name(dfs, "dfs");
      _.forEach(g.children(), dfs);
    }
    __name(addBorderSegments, "addBorderSegments");
    function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
      var label = { width: 0, height: 0, rank, borderType: prop };
      var prev = sgNode[prop][rank - 1];
      var curr = util.addDummyNode(g, "border", label, prefix);
      sgNode[prop][rank] = curr;
      g.setParent(curr, sg);
      if (prev) {
        g.setEdge(prev, curr, { weight: 1 });
      }
    }
    __name(addBorderNode, "addBorderNode");
  }
});

// node_modules/dagre/lib/coordinate-system.js
var require_coordinate_system = __commonJS({
  "node_modules/dagre/lib/coordinate-system.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    module.exports = {
      adjust,
      undo
    };
    function adjust(g) {
      var rankDir = g.graph().rankdir.toLowerCase();
      if (rankDir === "lr" || rankDir === "rl") {
        swapWidthHeight(g);
      }
    }
    __name(adjust, "adjust");
    function undo(g) {
      var rankDir = g.graph().rankdir.toLowerCase();
      if (rankDir === "bt" || rankDir === "rl") {
        reverseY(g);
      }
      if (rankDir === "lr" || rankDir === "rl") {
        swapXY(g);
        swapWidthHeight(g);
      }
    }
    __name(undo, "undo");
    function swapWidthHeight(g) {
      _.forEach(g.nodes(), function(v) {
        swapWidthHeightOne(g.node(v));
      });
      _.forEach(g.edges(), function(e) {
        swapWidthHeightOne(g.edge(e));
      });
    }
    __name(swapWidthHeight, "swapWidthHeight");
    function swapWidthHeightOne(attrs) {
      var w = attrs.width;
      attrs.width = attrs.height;
      attrs.height = w;
    }
    __name(swapWidthHeightOne, "swapWidthHeightOne");
    function reverseY(g) {
      _.forEach(g.nodes(), function(v) {
        reverseYOne(g.node(v));
      });
      _.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        _.forEach(edge.points, reverseYOne);
        if (_.has(edge, "y")) {
          reverseYOne(edge);
        }
      });
    }
    __name(reverseY, "reverseY");
    function reverseYOne(attrs) {
      attrs.y = -attrs.y;
    }
    __name(reverseYOne, "reverseYOne");
    function swapXY(g) {
      _.forEach(g.nodes(), function(v) {
        swapXYOne(g.node(v));
      });
      _.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        _.forEach(edge.points, swapXYOne);
        if (_.has(edge, "x")) {
          swapXYOne(edge);
        }
      });
    }
    __name(swapXY, "swapXY");
    function swapXYOne(attrs) {
      var x = attrs.x;
      attrs.x = attrs.y;
      attrs.y = x;
    }
    __name(swapXYOne, "swapXYOne");
  }
});

// node_modules/dagre/lib/order/init-order.js
var require_init_order = __commonJS({
  "node_modules/dagre/lib/order/init-order.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    module.exports = initOrder;
    function initOrder(g) {
      var visited = {};
      var simpleNodes = _.filter(g.nodes(), function(v) {
        return !g.children(v).length;
      });
      var maxRank = _.max(_.map(simpleNodes, function(v) {
        return g.node(v).rank;
      }));
      var layers = _.map(_.range(maxRank + 1), function() {
        return [];
      });
      function dfs(v) {
        if (_.has(visited, v)) return;
        visited[v] = true;
        var node = g.node(v);
        layers[node.rank].push(v);
        _.forEach(g.successors(v), dfs);
      }
      __name(dfs, "dfs");
      var orderedVs = _.sortBy(simpleNodes, function(v) {
        return g.node(v).rank;
      });
      _.forEach(orderedVs, dfs);
      return layers;
    }
    __name(initOrder, "initOrder");
  }
});

// node_modules/dagre/lib/order/cross-count.js
var require_cross_count = __commonJS({
  "node_modules/dagre/lib/order/cross-count.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    module.exports = crossCount;
    function crossCount(g, layering) {
      var cc = 0;
      for (var i = 1; i < layering.length; ++i) {
        cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
      }
      return cc;
    }
    __name(crossCount, "crossCount");
    function twoLayerCrossCount(g, northLayer, southLayer) {
      var southPos = _.zipObject(
        southLayer,
        _.map(southLayer, function(v, i) {
          return i;
        })
      );
      var southEntries = _.flatten(_.map(northLayer, function(v) {
        return _.sortBy(_.map(g.outEdges(v), function(e) {
          return { pos: southPos[e.w], weight: g.edge(e).weight };
        }), "pos");
      }), true);
      var firstIndex = 1;
      while (firstIndex < southLayer.length) firstIndex <<= 1;
      var treeSize = 2 * firstIndex - 1;
      firstIndex -= 1;
      var tree = _.map(new Array(treeSize), function() {
        return 0;
      });
      var cc = 0;
      _.forEach(southEntries.forEach(function(entry) {
        var index = entry.pos + firstIndex;
        tree[index] += entry.weight;
        var weightSum = 0;
        while (index > 0) {
          if (index % 2) {
            weightSum += tree[index + 1];
          }
          index = index - 1 >> 1;
          tree[index] += entry.weight;
        }
        cc += entry.weight * weightSum;
      }));
      return cc;
    }
    __name(twoLayerCrossCount, "twoLayerCrossCount");
  }
});

// node_modules/dagre/lib/order/barycenter.js
var require_barycenter = __commonJS({
  "node_modules/dagre/lib/order/barycenter.js"(exports, module) {
    init_esm();
    var _ = require_lodash2();
    module.exports = barycenter;
    function barycenter(g, movable) {
      return _.map(movable, function(v) {
        var inV = g.inEdges(v);
        if (!inV.length) {
          return { v };
        } else {
          var result = _.reduce(inV, function(acc, e) {
            var edge = g.edge(e), nodeU = g.node(e.v);
            return {
              sum: acc.sum + edge.weight * nodeU.order,
              weight: acc.weight + edge.weight
            };
          }, { sum: 0, weight: 0 });
          return {
            v,
            barycenter: result.sum / result.weight,
            weight: result.weight
          };
        }
      });
    }
    __name(barycenter, "barycenter");
  }
});

// node_modules/dagre/lib/order/resolve-conflicts.js
var require_resolve_conflicts = __commonJS({
  "node_modules/dagre/lib/order/resolve-conflicts.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    module.exports = resolveConflicts;
    function resolveConflicts(entries, cg) {
      var mappedEntries = {};
      _.forEach(entries, function(entry, i) {
        var tmp = mappedEntries[entry.v] = {
          indegree: 0,
          "in": [],
          out: [],
          vs: [entry.v],
          i
        };
        if (!_.isUndefined(entry.barycenter)) {
          tmp.barycenter = entry.barycenter;
          tmp.weight = entry.weight;
        }
      });
      _.forEach(cg.edges(), function(e) {
        var entryV = mappedEntries[e.v];
        var entryW = mappedEntries[e.w];
        if (!_.isUndefined(entryV) && !_.isUndefined(entryW)) {
          entryW.indegree++;
          entryV.out.push(mappedEntries[e.w]);
        }
      });
      var sourceSet = _.filter(mappedEntries, function(entry) {
        return !entry.indegree;
      });
      return doResolveConflicts(sourceSet);
    }
    __name(resolveConflicts, "resolveConflicts");
    function doResolveConflicts(sourceSet) {
      var entries = [];
      function handleIn(vEntry) {
        return function(uEntry) {
          if (uEntry.merged) {
            return;
          }
          if (_.isUndefined(uEntry.barycenter) || _.isUndefined(vEntry.barycenter) || uEntry.barycenter >= vEntry.barycenter) {
            mergeEntries(vEntry, uEntry);
          }
        };
      }
      __name(handleIn, "handleIn");
      function handleOut(vEntry) {
        return function(wEntry) {
          wEntry["in"].push(vEntry);
          if (--wEntry.indegree === 0) {
            sourceSet.push(wEntry);
          }
        };
      }
      __name(handleOut, "handleOut");
      while (sourceSet.length) {
        var entry = sourceSet.pop();
        entries.push(entry);
        _.forEach(entry["in"].reverse(), handleIn(entry));
        _.forEach(entry.out, handleOut(entry));
      }
      return _.map(
        _.filter(entries, function(entry2) {
          return !entry2.merged;
        }),
        function(entry2) {
          return _.pick(entry2, ["vs", "i", "barycenter", "weight"]);
        }
      );
    }
    __name(doResolveConflicts, "doResolveConflicts");
    function mergeEntries(target, source) {
      var sum = 0;
      var weight = 0;
      if (target.weight) {
        sum += target.barycenter * target.weight;
        weight += target.weight;
      }
      if (source.weight) {
        sum += source.barycenter * source.weight;
        weight += source.weight;
      }
      target.vs = source.vs.concat(target.vs);
      target.barycenter = sum / weight;
      target.weight = weight;
      target.i = Math.min(source.i, target.i);
      source.merged = true;
    }
    __name(mergeEntries, "mergeEntries");
  }
});

// node_modules/dagre/lib/order/sort.js
var require_sort = __commonJS({
  "node_modules/dagre/lib/order/sort.js"(exports, module) {
    init_esm();
    var _ = require_lodash2();
    var util = require_util();
    module.exports = sort;
    function sort(entries, biasRight) {
      var parts = util.partition(entries, function(entry) {
        return _.has(entry, "barycenter");
      });
      var sortable = parts.lhs, unsortable = _.sortBy(parts.rhs, function(entry) {
        return -entry.i;
      }), vs = [], sum = 0, weight = 0, vsIndex = 0;
      sortable.sort(compareWithBias(!!biasRight));
      vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
      _.forEach(sortable, function(entry) {
        vsIndex += entry.vs.length;
        vs.push(entry.vs);
        sum += entry.barycenter * entry.weight;
        weight += entry.weight;
        vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
      });
      var result = { vs: _.flatten(vs, true) };
      if (weight) {
        result.barycenter = sum / weight;
        result.weight = weight;
      }
      return result;
    }
    __name(sort, "sort");
    function consumeUnsortable(vs, unsortable, index) {
      var last;
      while (unsortable.length && (last = _.last(unsortable)).i <= index) {
        unsortable.pop();
        vs.push(last.vs);
        index++;
      }
      return index;
    }
    __name(consumeUnsortable, "consumeUnsortable");
    function compareWithBias(bias) {
      return function(entryV, entryW) {
        if (entryV.barycenter < entryW.barycenter) {
          return -1;
        } else if (entryV.barycenter > entryW.barycenter) {
          return 1;
        }
        return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
      };
    }
    __name(compareWithBias, "compareWithBias");
  }
});

// node_modules/dagre/lib/order/sort-subgraph.js
var require_sort_subgraph = __commonJS({
  "node_modules/dagre/lib/order/sort-subgraph.js"(exports, module) {
    init_esm();
    var _ = require_lodash2();
    var barycenter = require_barycenter();
    var resolveConflicts = require_resolve_conflicts();
    var sort = require_sort();
    module.exports = sortSubgraph;
    function sortSubgraph(g, v, cg, biasRight) {
      var movable = g.children(v);
      var node = g.node(v);
      var bl = node ? node.borderLeft : void 0;
      var br = node ? node.borderRight : void 0;
      var subgraphs = {};
      if (bl) {
        movable = _.filter(movable, function(w) {
          return w !== bl && w !== br;
        });
      }
      var barycenters = barycenter(g, movable);
      _.forEach(barycenters, function(entry) {
        if (g.children(entry.v).length) {
          var subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
          subgraphs[entry.v] = subgraphResult;
          if (_.has(subgraphResult, "barycenter")) {
            mergeBarycenters(entry, subgraphResult);
          }
        }
      });
      var entries = resolveConflicts(barycenters, cg);
      expandSubgraphs(entries, subgraphs);
      var result = sort(entries, biasRight);
      if (bl) {
        result.vs = _.flatten([bl, result.vs, br], true);
        if (g.predecessors(bl).length) {
          var blPred = g.node(g.predecessors(bl)[0]), brPred = g.node(g.predecessors(br)[0]);
          if (!_.has(result, "barycenter")) {
            result.barycenter = 0;
            result.weight = 0;
          }
          result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
          result.weight += 2;
        }
      }
      return result;
    }
    __name(sortSubgraph, "sortSubgraph");
    function expandSubgraphs(entries, subgraphs) {
      _.forEach(entries, function(entry) {
        entry.vs = _.flatten(entry.vs.map(function(v) {
          if (subgraphs[v]) {
            return subgraphs[v].vs;
          }
          return v;
        }), true);
      });
    }
    __name(expandSubgraphs, "expandSubgraphs");
    function mergeBarycenters(target, other) {
      if (!_.isUndefined(target.barycenter)) {
        target.barycenter = (target.barycenter * target.weight + other.barycenter * other.weight) / (target.weight + other.weight);
        target.weight += other.weight;
      } else {
        target.barycenter = other.barycenter;
        target.weight = other.weight;
      }
    }
    __name(mergeBarycenters, "mergeBarycenters");
  }
});

// node_modules/dagre/lib/order/build-layer-graph.js
var require_build_layer_graph = __commonJS({
  "node_modules/dagre/lib/order/build-layer-graph.js"(exports, module) {
    init_esm();
    var _ = require_lodash2();
    var Graph = require_graphlib2().Graph;
    module.exports = buildLayerGraph;
    function buildLayerGraph(g, rank, relationship) {
      var root = createRootNode(g), result = new Graph({ compound: true }).setGraph({ root }).setDefaultNodeLabel(function(v) {
        return g.node(v);
      });
      _.forEach(g.nodes(), function(v) {
        var node = g.node(v), parent = g.parent(v);
        if (node.rank === rank || node.minRank <= rank && rank <= node.maxRank) {
          result.setNode(v);
          result.setParent(v, parent || root);
          _.forEach(g[relationship](v), function(e) {
            var u = e.v === v ? e.w : e.v, edge = result.edge(u, v), weight = !_.isUndefined(edge) ? edge.weight : 0;
            result.setEdge(u, v, { weight: g.edge(e).weight + weight });
          });
          if (_.has(node, "minRank")) {
            result.setNode(v, {
              borderLeft: node.borderLeft[rank],
              borderRight: node.borderRight[rank]
            });
          }
        }
      });
      return result;
    }
    __name(buildLayerGraph, "buildLayerGraph");
    function createRootNode(g) {
      var v;
      while (g.hasNode(v = _.uniqueId("_root"))) ;
      return v;
    }
    __name(createRootNode, "createRootNode");
  }
});

// node_modules/dagre/lib/order/add-subgraph-constraints.js
var require_add_subgraph_constraints = __commonJS({
  "node_modules/dagre/lib/order/add-subgraph-constraints.js"(exports, module) {
    init_esm();
    var _ = require_lodash2();
    module.exports = addSubgraphConstraints;
    function addSubgraphConstraints(g, cg, vs) {
      var prev = {}, rootPrev;
      _.forEach(vs, function(v) {
        var child = g.parent(v), parent, prevChild;
        while (child) {
          parent = g.parent(child);
          if (parent) {
            prevChild = prev[parent];
            prev[parent] = child;
          } else {
            prevChild = rootPrev;
            rootPrev = child;
          }
          if (prevChild && prevChild !== child) {
            cg.setEdge(prevChild, child);
            return;
          }
          child = parent;
        }
      });
    }
    __name(addSubgraphConstraints, "addSubgraphConstraints");
  }
});

// node_modules/dagre/lib/order/index.js
var require_order = __commonJS({
  "node_modules/dagre/lib/order/index.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    var initOrder = require_init_order();
    var crossCount = require_cross_count();
    var sortSubgraph = require_sort_subgraph();
    var buildLayerGraph = require_build_layer_graph();
    var addSubgraphConstraints = require_add_subgraph_constraints();
    var Graph = require_graphlib2().Graph;
    var util = require_util();
    module.exports = order;
    function order(g) {
      var maxRank = util.maxRank(g), downLayerGraphs = buildLayerGraphs(g, _.range(1, maxRank + 1), "inEdges"), upLayerGraphs = buildLayerGraphs(g, _.range(maxRank - 1, -1, -1), "outEdges");
      var layering = initOrder(g);
      assignOrder(g, layering);
      var bestCC = Number.POSITIVE_INFINITY, best;
      for (var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
        sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);
        layering = util.buildLayerMatrix(g);
        var cc = crossCount(g, layering);
        if (cc < bestCC) {
          lastBest = 0;
          best = _.cloneDeep(layering);
          bestCC = cc;
        }
      }
      assignOrder(g, best);
    }
    __name(order, "order");
    function buildLayerGraphs(g, ranks, relationship) {
      return _.map(ranks, function(rank) {
        return buildLayerGraph(g, rank, relationship);
      });
    }
    __name(buildLayerGraphs, "buildLayerGraphs");
    function sweepLayerGraphs(layerGraphs, biasRight) {
      var cg = new Graph();
      _.forEach(layerGraphs, function(lg) {
        var root = lg.graph().root;
        var sorted = sortSubgraph(lg, root, cg, biasRight);
        _.forEach(sorted.vs, function(v, i) {
          lg.node(v).order = i;
        });
        addSubgraphConstraints(lg, cg, sorted.vs);
      });
    }
    __name(sweepLayerGraphs, "sweepLayerGraphs");
    function assignOrder(g, layering) {
      _.forEach(layering, function(layer) {
        _.forEach(layer, function(v, i) {
          g.node(v).order = i;
        });
      });
    }
    __name(assignOrder, "assignOrder");
  }
});

// node_modules/dagre/lib/position/bk.js
var require_bk = __commonJS({
  "node_modules/dagre/lib/position/bk.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    var Graph = require_graphlib2().Graph;
    var util = require_util();
    module.exports = {
      positionX,
      findType1Conflicts,
      findType2Conflicts,
      addConflict,
      hasConflict,
      verticalAlignment,
      horizontalCompaction,
      alignCoordinates,
      findSmallestWidthAlignment,
      balance
    };
    function findType1Conflicts(g, layering) {
      var conflicts = {};
      function visitLayer(prevLayer, layer) {
        var k0 = 0, scanPos = 0, prevLayerLength = prevLayer.length, lastNode = _.last(layer);
        _.forEach(layer, function(v, i) {
          var w = findOtherInnerSegmentNode(g, v), k1 = w ? g.node(w).order : prevLayerLength;
          if (w || v === lastNode) {
            _.forEach(layer.slice(scanPos, i + 1), function(scanNode) {
              _.forEach(g.predecessors(scanNode), function(u) {
                var uLabel = g.node(u), uPos = uLabel.order;
                if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) {
                  addConflict(conflicts, u, scanNode);
                }
              });
            });
            scanPos = i + 1;
            k0 = k1;
          }
        });
        return layer;
      }
      __name(visitLayer, "visitLayer");
      _.reduce(layering, visitLayer);
      return conflicts;
    }
    __name(findType1Conflicts, "findType1Conflicts");
    function findType2Conflicts(g, layering) {
      var conflicts = {};
      function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
        var v;
        _.forEach(_.range(southPos, southEnd), function(i) {
          v = south[i];
          if (g.node(v).dummy) {
            _.forEach(g.predecessors(v), function(u) {
              var uNode = g.node(u);
              if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
                addConflict(conflicts, u, v);
              }
            });
          }
        });
      }
      __name(scan, "scan");
      function visitLayer(north, south) {
        var prevNorthPos = -1, nextNorthPos, southPos = 0;
        _.forEach(south, function(v, southLookahead) {
          if (g.node(v).dummy === "border") {
            var predecessors = g.predecessors(v);
            if (predecessors.length) {
              nextNorthPos = g.node(predecessors[0]).order;
              scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
              southPos = southLookahead;
              prevNorthPos = nextNorthPos;
            }
          }
          scan(south, southPos, south.length, nextNorthPos, north.length);
        });
        return south;
      }
      __name(visitLayer, "visitLayer");
      _.reduce(layering, visitLayer);
      return conflicts;
    }
    __name(findType2Conflicts, "findType2Conflicts");
    function findOtherInnerSegmentNode(g, v) {
      if (g.node(v).dummy) {
        return _.find(g.predecessors(v), function(u) {
          return g.node(u).dummy;
        });
      }
    }
    __name(findOtherInnerSegmentNode, "findOtherInnerSegmentNode");
    function addConflict(conflicts, v, w) {
      if (v > w) {
        var tmp = v;
        v = w;
        w = tmp;
      }
      var conflictsV = conflicts[v];
      if (!conflictsV) {
        conflicts[v] = conflictsV = {};
      }
      conflictsV[w] = true;
    }
    __name(addConflict, "addConflict");
    function hasConflict(conflicts, v, w) {
      if (v > w) {
        var tmp = v;
        v = w;
        w = tmp;
      }
      return _.has(conflicts[v], w);
    }
    __name(hasConflict, "hasConflict");
    function verticalAlignment(g, layering, conflicts, neighborFn) {
      var root = {}, align = {}, pos = {};
      _.forEach(layering, function(layer) {
        _.forEach(layer, function(v, order) {
          root[v] = v;
          align[v] = v;
          pos[v] = order;
        });
      });
      _.forEach(layering, function(layer) {
        var prevIdx = -1;
        _.forEach(layer, function(v) {
          var ws = neighborFn(v);
          if (ws.length) {
            ws = _.sortBy(ws, function(w2) {
              return pos[w2];
            });
            var mp = (ws.length - 1) / 2;
            for (var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
              var w = ws[i];
              if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
                align[w] = v;
                align[v] = root[v] = root[w];
                prevIdx = pos[w];
              }
            }
          }
        });
      });
      return { root, align };
    }
    __name(verticalAlignment, "verticalAlignment");
    function horizontalCompaction(g, layering, root, align, reverseSep) {
      var xs = {}, blockG = buildBlockGraph(g, layering, root, reverseSep), borderType = reverseSep ? "borderLeft" : "borderRight";
      function iterate(setXsFunc, nextNodesFunc) {
        var stack = blockG.nodes();
        var elem = stack.pop();
        var visited = {};
        while (elem) {
          if (visited[elem]) {
            setXsFunc(elem);
          } else {
            visited[elem] = true;
            stack.push(elem);
            stack = stack.concat(nextNodesFunc(elem));
          }
          elem = stack.pop();
        }
      }
      __name(iterate, "iterate");
      function pass1(elem) {
        xs[elem] = blockG.inEdges(elem).reduce(function(acc, e) {
          return Math.max(acc, xs[e.v] + blockG.edge(e));
        }, 0);
      }
      __name(pass1, "pass1");
      function pass2(elem) {
        var min = blockG.outEdges(elem).reduce(function(acc, e) {
          return Math.min(acc, xs[e.w] - blockG.edge(e));
        }, Number.POSITIVE_INFINITY);
        var node = g.node(elem);
        if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
          xs[elem] = Math.max(xs[elem], min);
        }
      }
      __name(pass2, "pass2");
      iterate(pass1, blockG.predecessors.bind(blockG));
      iterate(pass2, blockG.successors.bind(blockG));
      _.forEach(align, function(v) {
        xs[v] = xs[root[v]];
      });
      return xs;
    }
    __name(horizontalCompaction, "horizontalCompaction");
    function buildBlockGraph(g, layering, root, reverseSep) {
      var blockGraph = new Graph(), graphLabel = g.graph(), sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);
      _.forEach(layering, function(layer) {
        var u;
        _.forEach(layer, function(v) {
          var vRoot = root[v];
          blockGraph.setNode(vRoot);
          if (u) {
            var uRoot = root[u], prevMax = blockGraph.edge(uRoot, vRoot);
            blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
          }
          u = v;
        });
      });
      return blockGraph;
    }
    __name(buildBlockGraph, "buildBlockGraph");
    function findSmallestWidthAlignment(g, xss) {
      return _.minBy(_.values(xss), function(xs) {
        var max = Number.NEGATIVE_INFINITY;
        var min = Number.POSITIVE_INFINITY;
        _.forIn(xs, function(x, v) {
          var halfWidth = width(g, v) / 2;
          max = Math.max(x + halfWidth, max);
          min = Math.min(x - halfWidth, min);
        });
        return max - min;
      });
    }
    __name(findSmallestWidthAlignment, "findSmallestWidthAlignment");
    function alignCoordinates(xss, alignTo) {
      var alignToVals = _.values(alignTo), alignToMin = _.min(alignToVals), alignToMax = _.max(alignToVals);
      _.forEach(["u", "d"], function(vert) {
        _.forEach(["l", "r"], function(horiz) {
          var alignment = vert + horiz, xs = xss[alignment], delta;
          if (xs === alignTo) return;
          var xsVals = _.values(xs);
          delta = horiz === "l" ? alignToMin - _.min(xsVals) : alignToMax - _.max(xsVals);
          if (delta) {
            xss[alignment] = _.mapValues(xs, function(x) {
              return x + delta;
            });
          }
        });
      });
    }
    __name(alignCoordinates, "alignCoordinates");
    function balance(xss, align) {
      return _.mapValues(xss.ul, function(ignore, v) {
        if (align) {
          return xss[align.toLowerCase()][v];
        } else {
          var xs = _.sortBy(_.map(xss, v));
          return (xs[1] + xs[2]) / 2;
        }
      });
    }
    __name(balance, "balance");
    function positionX(g) {
      var layering = util.buildLayerMatrix(g);
      var conflicts = _.merge(
        findType1Conflicts(g, layering),
        findType2Conflicts(g, layering)
      );
      var xss = {};
      var adjustedLayering;
      _.forEach(["u", "d"], function(vert) {
        adjustedLayering = vert === "u" ? layering : _.values(layering).reverse();
        _.forEach(["l", "r"], function(horiz) {
          if (horiz === "r") {
            adjustedLayering = _.map(adjustedLayering, function(inner) {
              return _.values(inner).reverse();
            });
          }
          var neighborFn = (vert === "u" ? g.predecessors : g.successors).bind(g);
          var align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
          var xs = horizontalCompaction(
            g,
            adjustedLayering,
            align.root,
            align.align,
            horiz === "r"
          );
          if (horiz === "r") {
            xs = _.mapValues(xs, function(x) {
              return -x;
            });
          }
          xss[vert + horiz] = xs;
        });
      });
      var smallestWidth = findSmallestWidthAlignment(g, xss);
      alignCoordinates(xss, smallestWidth);
      return balance(xss, g.graph().align);
    }
    __name(positionX, "positionX");
    function sep(nodeSep, edgeSep, reverseSep) {
      return function(g, v, w) {
        var vLabel = g.node(v);
        var wLabel = g.node(w);
        var sum = 0;
        var delta;
        sum += vLabel.width / 2;
        if (_.has(vLabel, "labelpos")) {
          switch (vLabel.labelpos.toLowerCase()) {
            case "l":
              delta = -vLabel.width / 2;
              break;
            case "r":
              delta = vLabel.width / 2;
              break;
          }
        }
        if (delta) {
          sum += reverseSep ? delta : -delta;
        }
        delta = 0;
        sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
        sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;
        sum += wLabel.width / 2;
        if (_.has(wLabel, "labelpos")) {
          switch (wLabel.labelpos.toLowerCase()) {
            case "l":
              delta = wLabel.width / 2;
              break;
            case "r":
              delta = -wLabel.width / 2;
              break;
          }
        }
        if (delta) {
          sum += reverseSep ? delta : -delta;
        }
        delta = 0;
        return sum;
      };
    }
    __name(sep, "sep");
    function width(g, v) {
      return g.node(v).width;
    }
    __name(width, "width");
  }
});

// node_modules/dagre/lib/position/index.js
var require_position = __commonJS({
  "node_modules/dagre/lib/position/index.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    var util = require_util();
    var positionX = require_bk().positionX;
    module.exports = position;
    function position(g) {
      g = util.asNonCompoundGraph(g);
      positionY(g);
      _.forEach(positionX(g), function(x, v) {
        g.node(v).x = x;
      });
    }
    __name(position, "position");
    function positionY(g) {
      var layering = util.buildLayerMatrix(g);
      var rankSep = g.graph().ranksep;
      var prevY = 0;
      _.forEach(layering, function(layer) {
        var maxHeight = _.max(_.map(layer, function(v) {
          return g.node(v).height;
        }));
        _.forEach(layer, function(v) {
          g.node(v).y = prevY + maxHeight / 2;
        });
        prevY += maxHeight + rankSep;
      });
    }
    __name(positionY, "positionY");
  }
});

// node_modules/dagre/lib/layout.js
var require_layout = __commonJS({
  "node_modules/dagre/lib/layout.js"(exports, module) {
    "use strict";
    init_esm();
    var _ = require_lodash2();
    var acyclic = require_acyclic();
    var normalize = require_normalize();
    var rank = require_rank();
    var normalizeRanks = require_util().normalizeRanks;
    var parentDummyChains = require_parent_dummy_chains();
    var removeEmptyRanks = require_util().removeEmptyRanks;
    var nestingGraph = require_nesting_graph();
    var addBorderSegments = require_add_border_segments();
    var coordinateSystem = require_coordinate_system();
    var order = require_order();
    var position = require_position();
    var util = require_util();
    var Graph = require_graphlib2().Graph;
    module.exports = layout;
    function layout(g, opts) {
      var time = opts && opts.debugTiming ? util.time : util.notime;
      time("layout", function() {
        var layoutGraph = time("  buildLayoutGraph", function() {
          return buildLayoutGraph(g);
        });
        time("  runLayout", function() {
          runLayout(layoutGraph, time);
        });
        time("  updateInputGraph", function() {
          updateInputGraph(g, layoutGraph);
        });
      });
    }
    __name(layout, "layout");
    function runLayout(g, time) {
      time("    makeSpaceForEdgeLabels", function() {
        makeSpaceForEdgeLabels(g);
      });
      time("    removeSelfEdges", function() {
        removeSelfEdges(g);
      });
      time("    acyclic", function() {
        acyclic.run(g);
      });
      time("    nestingGraph.run", function() {
        nestingGraph.run(g);
      });
      time("    rank", function() {
        rank(util.asNonCompoundGraph(g));
      });
      time("    injectEdgeLabelProxies", function() {
        injectEdgeLabelProxies(g);
      });
      time("    removeEmptyRanks", function() {
        removeEmptyRanks(g);
      });
      time("    nestingGraph.cleanup", function() {
        nestingGraph.cleanup(g);
      });
      time("    normalizeRanks", function() {
        normalizeRanks(g);
      });
      time("    assignRankMinMax", function() {
        assignRankMinMax(g);
      });
      time("    removeEdgeLabelProxies", function() {
        removeEdgeLabelProxies(g);
      });
      time("    normalize.run", function() {
        normalize.run(g);
      });
      time("    parentDummyChains", function() {
        parentDummyChains(g);
      });
      time("    addBorderSegments", function() {
        addBorderSegments(g);
      });
      time("    order", function() {
        order(g);
      });
      time("    insertSelfEdges", function() {
        insertSelfEdges(g);
      });
      time("    adjustCoordinateSystem", function() {
        coordinateSystem.adjust(g);
      });
      time("    position", function() {
        position(g);
      });
      time("    positionSelfEdges", function() {
        positionSelfEdges(g);
      });
      time("    removeBorderNodes", function() {
        removeBorderNodes(g);
      });
      time("    normalize.undo", function() {
        normalize.undo(g);
      });
      time("    fixupEdgeLabelCoords", function() {
        fixupEdgeLabelCoords(g);
      });
      time("    undoCoordinateSystem", function() {
        coordinateSystem.undo(g);
      });
      time("    translateGraph", function() {
        translateGraph(g);
      });
      time("    assignNodeIntersects", function() {
        assignNodeIntersects(g);
      });
      time("    reversePoints", function() {
        reversePointsForReversedEdges(g);
      });
      time("    acyclic.undo", function() {
        acyclic.undo(g);
      });
    }
    __name(runLayout, "runLayout");
    function updateInputGraph(inputGraph, layoutGraph) {
      _.forEach(inputGraph.nodes(), function(v) {
        var inputLabel = inputGraph.node(v);
        var layoutLabel = layoutGraph.node(v);
        if (inputLabel) {
          inputLabel.x = layoutLabel.x;
          inputLabel.y = layoutLabel.y;
          if (layoutGraph.children(v).length) {
            inputLabel.width = layoutLabel.width;
            inputLabel.height = layoutLabel.height;
          }
        }
      });
      _.forEach(inputGraph.edges(), function(e) {
        var inputLabel = inputGraph.edge(e);
        var layoutLabel = layoutGraph.edge(e);
        inputLabel.points = layoutLabel.points;
        if (_.has(layoutLabel, "x")) {
          inputLabel.x = layoutLabel.x;
          inputLabel.y = layoutLabel.y;
        }
      });
      inputGraph.graph().width = layoutGraph.graph().width;
      inputGraph.graph().height = layoutGraph.graph().height;
    }
    __name(updateInputGraph, "updateInputGraph");
    var graphNumAttrs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
    var graphDefaults = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" };
    var graphAttrs = ["acyclicer", "ranker", "rankdir", "align"];
    var nodeNumAttrs = ["width", "height"];
    var nodeDefaults = { width: 0, height: 0 };
    var edgeNumAttrs = ["minlen", "weight", "width", "height", "labeloffset"];
    var edgeDefaults = {
      minlen: 1,
      weight: 1,
      width: 0,
      height: 0,
      labeloffset: 10,
      labelpos: "r"
    };
    var edgeAttrs = ["labelpos"];
    function buildLayoutGraph(inputGraph) {
      var g = new Graph({ multigraph: true, compound: true });
      var graph = canonicalize(inputGraph.graph());
      g.setGraph(_.merge(
        {},
        graphDefaults,
        selectNumberAttrs(graph, graphNumAttrs),
        _.pick(graph, graphAttrs)
      ));
      _.forEach(inputGraph.nodes(), function(v) {
        var node = canonicalize(inputGraph.node(v));
        g.setNode(v, _.defaults(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
        g.setParent(v, inputGraph.parent(v));
      });
      _.forEach(inputGraph.edges(), function(e) {
        var edge = canonicalize(inputGraph.edge(e));
        g.setEdge(e, _.merge(
          {},
          edgeDefaults,
          selectNumberAttrs(edge, edgeNumAttrs),
          _.pick(edge, edgeAttrs)
        ));
      });
      return g;
    }
    __name(buildLayoutGraph, "buildLayoutGraph");
    function makeSpaceForEdgeLabels(g) {
      var graph = g.graph();
      graph.ranksep /= 2;
      _.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        edge.minlen *= 2;
        if (edge.labelpos.toLowerCase() !== "c") {
          if (graph.rankdir === "TB" || graph.rankdir === "BT") {
            edge.width += edge.labeloffset;
          } else {
            edge.height += edge.labeloffset;
          }
        }
      });
    }
    __name(makeSpaceForEdgeLabels, "makeSpaceForEdgeLabels");
    function injectEdgeLabelProxies(g) {
      _.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (edge.width && edge.height) {
          var v = g.node(e.v);
          var w = g.node(e.w);
          var label = { rank: (w.rank - v.rank) / 2 + v.rank, e };
          util.addDummyNode(g, "edge-proxy", label, "_ep");
        }
      });
    }
    __name(injectEdgeLabelProxies, "injectEdgeLabelProxies");
    function assignRankMinMax(g) {
      var maxRank = 0;
      _.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (node.borderTop) {
          node.minRank = g.node(node.borderTop).rank;
          node.maxRank = g.node(node.borderBottom).rank;
          maxRank = _.max(maxRank, node.maxRank);
        }
      });
      g.graph().maxRank = maxRank;
    }
    __name(assignRankMinMax, "assignRankMinMax");
    function removeEdgeLabelProxies(g) {
      _.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (node.dummy === "edge-proxy") {
          g.edge(node.e).labelRank = node.rank;
          g.removeNode(v);
        }
      });
    }
    __name(removeEdgeLabelProxies, "removeEdgeLabelProxies");
    function translateGraph(g) {
      var minX = Number.POSITIVE_INFINITY;
      var maxX = 0;
      var minY = Number.POSITIVE_INFINITY;
      var maxY = 0;
      var graphLabel = g.graph();
      var marginX = graphLabel.marginx || 0;
      var marginY = graphLabel.marginy || 0;
      function getExtremes(attrs) {
        var x = attrs.x;
        var y = attrs.y;
        var w = attrs.width;
        var h = attrs.height;
        minX = Math.min(minX, x - w / 2);
        maxX = Math.max(maxX, x + w / 2);
        minY = Math.min(minY, y - h / 2);
        maxY = Math.max(maxY, y + h / 2);
      }
      __name(getExtremes, "getExtremes");
      _.forEach(g.nodes(), function(v) {
        getExtremes(g.node(v));
      });
      _.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (_.has(edge, "x")) {
          getExtremes(edge);
        }
      });
      minX -= marginX;
      minY -= marginY;
      _.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        node.x -= minX;
        node.y -= minY;
      });
      _.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        _.forEach(edge.points, function(p) {
          p.x -= minX;
          p.y -= minY;
        });
        if (_.has(edge, "x")) {
          edge.x -= minX;
        }
        if (_.has(edge, "y")) {
          edge.y -= minY;
        }
      });
      graphLabel.width = maxX - minX + marginX;
      graphLabel.height = maxY - minY + marginY;
    }
    __name(translateGraph, "translateGraph");
    function assignNodeIntersects(g) {
      _.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        var nodeV = g.node(e.v);
        var nodeW = g.node(e.w);
        var p1, p2;
        if (!edge.points) {
          edge.points = [];
          p1 = nodeW;
          p2 = nodeV;
        } else {
          p1 = edge.points[0];
          p2 = edge.points[edge.points.length - 1];
        }
        edge.points.unshift(util.intersectRect(nodeV, p1));
        edge.points.push(util.intersectRect(nodeW, p2));
      });
    }
    __name(assignNodeIntersects, "assignNodeIntersects");
    function fixupEdgeLabelCoords(g) {
      _.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (_.has(edge, "x")) {
          if (edge.labelpos === "l" || edge.labelpos === "r") {
            edge.width -= edge.labeloffset;
          }
          switch (edge.labelpos) {
            case "l":
              edge.x -= edge.width / 2 + edge.labeloffset;
              break;
            case "r":
              edge.x += edge.width / 2 + edge.labeloffset;
              break;
          }
        }
      });
    }
    __name(fixupEdgeLabelCoords, "fixupEdgeLabelCoords");
    function reversePointsForReversedEdges(g) {
      _.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (edge.reversed) {
          edge.points.reverse();
        }
      });
    }
    __name(reversePointsForReversedEdges, "reversePointsForReversedEdges");
    function removeBorderNodes(g) {
      _.forEach(g.nodes(), function(v) {
        if (g.children(v).length) {
          var node = g.node(v);
          var t = g.node(node.borderTop);
          var b = g.node(node.borderBottom);
          var l = g.node(_.last(node.borderLeft));
          var r = g.node(_.last(node.borderRight));
          node.width = Math.abs(r.x - l.x);
          node.height = Math.abs(b.y - t.y);
          node.x = l.x + node.width / 2;
          node.y = t.y + node.height / 2;
        }
      });
      _.forEach(g.nodes(), function(v) {
        if (g.node(v).dummy === "border") {
          g.removeNode(v);
        }
      });
    }
    __name(removeBorderNodes, "removeBorderNodes");
    function removeSelfEdges(g) {
      _.forEach(g.edges(), function(e) {
        if (e.v === e.w) {
          var node = g.node(e.v);
          if (!node.selfEdges) {
            node.selfEdges = [];
          }
          node.selfEdges.push({ e, label: g.edge(e) });
          g.removeEdge(e);
        }
      });
    }
    __name(removeSelfEdges, "removeSelfEdges");
    function insertSelfEdges(g) {
      var layers = util.buildLayerMatrix(g);
      _.forEach(layers, function(layer) {
        var orderShift = 0;
        _.forEach(layer, function(v, i) {
          var node = g.node(v);
          node.order = i + orderShift;
          _.forEach(node.selfEdges, function(selfEdge) {
            util.addDummyNode(g, "selfedge", {
              width: selfEdge.label.width,
              height: selfEdge.label.height,
              rank: node.rank,
              order: i + ++orderShift,
              e: selfEdge.e,
              label: selfEdge.label
            }, "_se");
          });
          delete node.selfEdges;
        });
      });
    }
    __name(insertSelfEdges, "insertSelfEdges");
    function positionSelfEdges(g) {
      _.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (node.dummy === "selfedge") {
          var selfNode = g.node(node.e.v);
          var x = selfNode.x + selfNode.width / 2;
          var y = selfNode.y;
          var dx = node.x - x;
          var dy = selfNode.height / 2;
          g.setEdge(node.e, node.label);
          g.removeNode(v);
          node.label.points = [
            { x: x + 2 * dx / 3, y: y - dy },
            { x: x + 5 * dx / 6, y: y - dy },
            { x: x + dx, y },
            { x: x + 5 * dx / 6, y: y + dy },
            { x: x + 2 * dx / 3, y: y + dy }
          ];
          node.label.x = node.x;
          node.label.y = node.y;
        }
      });
    }
    __name(positionSelfEdges, "positionSelfEdges");
    function selectNumberAttrs(obj, attrs) {
      return _.mapValues(_.pick(obj, attrs), Number);
    }
    __name(selectNumberAttrs, "selectNumberAttrs");
    function canonicalize(attrs) {
      var newAttrs = {};
      _.forEach(attrs, function(v, k) {
        newAttrs[k.toLowerCase()] = v;
      });
      return newAttrs;
    }
    __name(canonicalize, "canonicalize");
  }
});

// node_modules/dagre/lib/debug.js
var require_debug = __commonJS({
  "node_modules/dagre/lib/debug.js"(exports, module) {
    init_esm();
    var _ = require_lodash2();
    var util = require_util();
    var Graph = require_graphlib2().Graph;
    module.exports = {
      debugOrdering
    };
    function debugOrdering(g) {
      var layerMatrix = util.buildLayerMatrix(g);
      var h = new Graph({ compound: true, multigraph: true }).setGraph({});
      _.forEach(g.nodes(), function(v) {
        h.setNode(v, { label: v });
        h.setParent(v, "layer" + g.node(v).rank);
      });
      _.forEach(g.edges(), function(e) {
        h.setEdge(e.v, e.w, {}, e.name);
      });
      _.forEach(layerMatrix, function(layer, i) {
        var layerV = "layer" + i;
        h.setNode(layerV, { rank: "same" });
        _.reduce(layer, function(u, v) {
          h.setEdge(u, v, { style: "invis" });
          return v;
        });
      });
      return h;
    }
    __name(debugOrdering, "debugOrdering");
  }
});

// node_modules/dagre/lib/version.js
var require_version2 = __commonJS({
  "node_modules/dagre/lib/version.js"(exports, module) {
    init_esm();
    module.exports = "0.8.5";
  }
});

// node_modules/dagre/index.js
var require_dagre = __commonJS({
  "node_modules/dagre/index.js"(exports, module) {
    init_esm();
    module.exports = {
      graphlib: require_graphlib2(),
      layout: require_layout(),
      debug: require_debug(),
      util: {
        time: require_util().time,
        notime: require_util().notime
      },
      version: require_version2()
    };
  }
});

// src/trigger/generate-roadmap.ts
init_esm();

// src/features/roadmaps/types.ts
init_esm();
var ExistingSkillSchema = external_exports.object({
  name: external_exports.string(),
  proficiency: external_exports.string()
});
var ProfileContextSchema = external_exports.object({
  currentStatus: external_exports.string().nullable(),
  currentRole: external_exports.string().nullable(),
  yearsOfExperience: external_exports.number().nullable(),
  highestQualification: external_exports.string().nullable(),
  fieldOfStudy: external_exports.string().nullable(),
  targetCompanyType: external_exports.string().nullable(),
  weeklyLearningHours: external_exports.number().nullable(),
  primaryGoal: external_exports.string().nullable().optional(),
  existingSkills: external_exports.array(ExistingSkillSchema)
});
var Stage1Schema = external_exports.object({
  role: external_exports.string().min(1, "Target Role is required"),
  experienceLevel: external_exports.enum(["Beginner", "Basic", "Intermediate", "Advanced"])
});
var RoadmapRequestSchema = external_exports.object({
  role: external_exports.string().min(1),
  experienceLevel: external_exports.enum(["Beginner", "Basic", "Intermediate", "Advanced"]),
  personalization: external_exports.object({
    skipped: external_exports.boolean(),
    profileContext: ProfileContextSchema.nullable().optional()
  })
});

// src/services/roadmaps/roadmap-generation.service.ts
init_esm();

// node_modules/zod-to-json-schema/dist/esm/index.js
init_esm();

// node_modules/zod-to-json-schema/dist/esm/Options.js
init_esm();
var ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: true,
  rejectedAdditionalProperties: false,
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: false,
  definitions: {},
  errorMessages: false,
  markdownDescription: false,
  patternStrategy: "escape",
  applyRegexFlags: false,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref",
  openAiAnyTypeName: "OpenAiAnyType"
};
var getDefaultOptions = /* @__PURE__ */ __name((options) => typeof options === "string" ? {
  ...defaultOptions,
  name: options
} : {
  ...defaultOptions,
  ...options
}, "getDefaultOptions");

// node_modules/zod-to-json-schema/dist/esm/Refs.js
init_esm();
var getRefs = /* @__PURE__ */ __name((options) => {
  const _options = getDefaultOptions(options);
  const currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
  return {
    ..._options,
    flags: { hasReferencedOpenAiAnyType: false },
    currentPath,
    propertyPath: void 0,
    seen: new Map(Object.entries(_options.definitions).map(([name, def]) => [
      def._def,
      {
        def: def._def,
        path: [..._options.basePath, _options.definitionPath, name],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
}, "getRefs");

// node_modules/zod-to-json-schema/dist/esm/errorMessages.js
init_esm();
function addErrorMessage(res, key, errorMessage, refs) {
  if (!refs?.errorMessages)
    return;
  if (errorMessage) {
    res.errorMessage = {
      ...res.errorMessage,
      [key]: errorMessage
    };
  }
}
__name(addErrorMessage, "addErrorMessage");
function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
  res[key] = value;
  addErrorMessage(res, key, errorMessage, refs);
}
__name(setResponseValueAndErrors, "setResponseValueAndErrors");

// node_modules/zod-to-json-schema/dist/esm/getRelativePath.js
init_esm();
var getRelativePath = /* @__PURE__ */ __name((pathA, pathB) => {
  let i = 0;
  for (; i < pathA.length && i < pathB.length; i++) {
    if (pathA[i] !== pathB[i])
      break;
  }
  return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
}, "getRelativePath");

// node_modules/zod-to-json-schema/dist/esm/parseDef.js
init_esm();

// node_modules/zod-to-json-schema/dist/esm/selectParser.js
init_esm();

// node_modules/zod-to-json-schema/dist/esm/parsers/any.js
init_esm();
function parseAnyDef(refs) {
  if (refs.target !== "openAi") {
    return {};
  }
  const anyDefinitionPath = [
    ...refs.basePath,
    refs.definitionPath,
    refs.openAiAnyTypeName
  ];
  refs.flags.hasReferencedOpenAiAnyType = true;
  return {
    $ref: refs.$refStrategy === "relative" ? getRelativePath(anyDefinitionPath, refs.currentPath) : anyDefinitionPath.join("/")
  };
}
__name(parseAnyDef, "parseAnyDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/array.js
init_esm();
function parseArrayDef(def, refs) {
  const res = {
    type: "array"
  };
  if (def.type?._def && def.type?._def?.typeName !== ZodFirstPartyTypeKind.ZodAny) {
    res.items = parseDef(def.type._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
  }
  if (def.minLength) {
    setResponseValueAndErrors(res, "minItems", def.minLength.value, def.minLength.message, refs);
  }
  if (def.maxLength) {
    setResponseValueAndErrors(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
  }
  if (def.exactLength) {
    setResponseValueAndErrors(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
    setResponseValueAndErrors(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
  }
  return res;
}
__name(parseArrayDef, "parseArrayDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js
init_esm();
function parseBigintDef(def, refs) {
  const res = {
    type: "integer",
    format: "int64"
  };
  if (!def.checks)
    return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMinimum = true;
          }
          setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
        }
        break;
      case "max":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMaximum = true;
          }
          setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
        }
        break;
      case "multipleOf":
        setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
        break;
    }
  }
  return res;
}
__name(parseBigintDef, "parseBigintDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js
init_esm();
function parseBooleanDef() {
  return {
    type: "boolean"
  };
}
__name(parseBooleanDef, "parseBooleanDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/branded.js
init_esm();
function parseBrandedDef(_def, refs) {
  return parseDef(_def.type._def, refs);
}
__name(parseBrandedDef, "parseBrandedDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/catch.js
init_esm();
var parseCatchDef = /* @__PURE__ */ __name((def, refs) => {
  return parseDef(def.innerType._def, refs);
}, "parseCatchDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/date.js
init_esm();
function parseDateDef(def, refs, overrideDateStrategy) {
  const strategy = overrideDateStrategy ?? refs.dateStrategy;
  if (Array.isArray(strategy)) {
    return {
      anyOf: strategy.map((item, i) => parseDateDef(def, refs, item))
    };
  }
  switch (strategy) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return integerDateParser(def, refs);
  }
}
__name(parseDateDef, "parseDateDef");
var integerDateParser = /* @__PURE__ */ __name((def, refs) => {
  const res = {
    type: "integer",
    format: "unix-time"
  };
  if (refs.target === "openApi3") {
    return res;
  }
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        setResponseValueAndErrors(
          res,
          "minimum",
          check.value,
          // This is in milliseconds
          check.message,
          refs
        );
        break;
      case "max":
        setResponseValueAndErrors(
          res,
          "maximum",
          check.value,
          // This is in milliseconds
          check.message,
          refs
        );
        break;
    }
  }
  return res;
}, "integerDateParser");

// node_modules/zod-to-json-schema/dist/esm/parsers/default.js
init_esm();
function parseDefaultDef(_def, refs) {
  return {
    ...parseDef(_def.innerType._def, refs),
    default: _def.defaultValue()
  };
}
__name(parseDefaultDef, "parseDefaultDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/effects.js
init_esm();
function parseEffectsDef(_def, refs) {
  return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef(refs);
}
__name(parseEffectsDef, "parseEffectsDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/enum.js
init_esm();
function parseEnumDef(def) {
  return {
    type: "string",
    enum: Array.from(def.values)
  };
}
__name(parseEnumDef, "parseEnumDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js
init_esm();
var isJsonSchema7AllOfType = /* @__PURE__ */ __name((type) => {
  if ("type" in type && type.type === "string")
    return false;
  return "allOf" in type;
}, "isJsonSchema7AllOfType");
function parseIntersectionDef(def, refs) {
  const allOf = [
    parseDef(def.left._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    }),
    parseDef(def.right._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "1"]
    })
  ].filter((x) => !!x);
  let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0;
  const mergedAllOf = [];
  allOf.forEach((schema) => {
    if (isJsonSchema7AllOfType(schema)) {
      mergedAllOf.push(...schema.allOf);
      if (schema.unevaluatedProperties === void 0) {
        unevaluatedProperties = void 0;
      }
    } else {
      let nestedSchema = schema;
      if ("additionalProperties" in schema && schema.additionalProperties === false) {
        const { additionalProperties, ...rest } = schema;
        nestedSchema = rest;
      } else {
        unevaluatedProperties = void 0;
      }
      mergedAllOf.push(nestedSchema);
    }
  });
  return mergedAllOf.length ? {
    allOf: mergedAllOf,
    ...unevaluatedProperties
  } : void 0;
}
__name(parseIntersectionDef, "parseIntersectionDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/literal.js
init_esm();
function parseLiteralDef(def, refs) {
  const parsedType = typeof def.value;
  if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
    return {
      type: Array.isArray(def.value) ? "array" : "object"
    };
  }
  if (refs.target === "openApi3") {
    return {
      type: parsedType === "bigint" ? "integer" : parsedType,
      enum: [def.value]
    };
  }
  return {
    type: parsedType === "bigint" ? "integer" : parsedType,
    const: def.value
  };
}
__name(parseLiteralDef, "parseLiteralDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/map.js
init_esm();

// node_modules/zod-to-json-schema/dist/esm/parsers/record.js
init_esm();

// node_modules/zod-to-json-schema/dist/esm/parsers/string.js
init_esm();
var emojiRegex = void 0;
var zodPatterns = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: /* @__PURE__ */ __name(() => {
    if (emojiRegex === void 0) {
      emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
    }
    return emojiRegex;
  }, "emoji"),
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
  const res = {
    type: "string"
  };
  if (def.checks) {
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
          break;
        case "max":
          setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
          break;
        case "email":
          switch (refs.emailStrategy) {
            case "format:email":
              addFormat(res, "email", check.message, refs);
              break;
            case "format:idn-email":
              addFormat(res, "idn-email", check.message, refs);
              break;
            case "pattern:zod":
              addPattern(res, zodPatterns.email, check.message, refs);
              break;
          }
          break;
        case "url":
          addFormat(res, "uri", check.message, refs);
          break;
        case "uuid":
          addFormat(res, "uuid", check.message, refs);
          break;
        case "regex":
          addPattern(res, check.regex, check.message, refs);
          break;
        case "cuid":
          addPattern(res, zodPatterns.cuid, check.message, refs);
          break;
        case "cuid2":
          addPattern(res, zodPatterns.cuid2, check.message, refs);
          break;
        case "startsWith":
          addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
          break;
        case "endsWith":
          addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
          break;
        case "datetime":
          addFormat(res, "date-time", check.message, refs);
          break;
        case "date":
          addFormat(res, "date", check.message, refs);
          break;
        case "time":
          addFormat(res, "time", check.message, refs);
          break;
        case "duration":
          addFormat(res, "duration", check.message, refs);
          break;
        case "length":
          setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
          setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
          break;
        case "includes": {
          addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
          break;
        }
        case "ip": {
          if (check.version !== "v6") {
            addFormat(res, "ipv4", check.message, refs);
          }
          if (check.version !== "v4") {
            addFormat(res, "ipv6", check.message, refs);
          }
          break;
        }
        case "base64url":
          addPattern(res, zodPatterns.base64url, check.message, refs);
          break;
        case "jwt":
          addPattern(res, zodPatterns.jwt, check.message, refs);
          break;
        case "cidr": {
          if (check.version !== "v6") {
            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
          }
          if (check.version !== "v4") {
            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
          }
          break;
        }
        case "emoji":
          addPattern(res, zodPatterns.emoji(), check.message, refs);
          break;
        case "ulid": {
          addPattern(res, zodPatterns.ulid, check.message, refs);
          break;
        }
        case "base64": {
          switch (refs.base64Strategy) {
            case "format:binary": {
              addFormat(res, "binary", check.message, refs);
              break;
            }
            case "contentEncoding:base64": {
              setResponseValueAndErrors(res, "contentEncoding", "base64", check.message, refs);
              break;
            }
            case "pattern:zod": {
              addPattern(res, zodPatterns.base64, check.message, refs);
              break;
            }
          }
          break;
        }
        case "nanoid": {
          addPattern(res, zodPatterns.nanoid, check.message, refs);
        }
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          /* @__PURE__ */ ((_) => {
          })(check);
      }
    }
  }
  return res;
}
__name(parseStringDef, "parseStringDef");
function escapeLiteralCheckValue(literal, refs) {
  return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
__name(escapeLiteralCheckValue, "escapeLiteralCheckValue");
var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
  let result = "";
  for (let i = 0; i < source.length; i++) {
    if (!ALPHA_NUMERIC.has(source[i])) {
      result += "\\";
    }
    result += source[i];
  }
  return result;
}
__name(escapeNonAlphaNumeric, "escapeNonAlphaNumeric");
function addFormat(schema, value, message, refs) {
  if (schema.format || schema.anyOf?.some((x) => x.format)) {
    if (!schema.anyOf) {
      schema.anyOf = [];
    }
    if (schema.format) {
      schema.anyOf.push({
        format: schema.format,
        ...schema.errorMessage && refs.errorMessages && {
          errorMessage: { format: schema.errorMessage.format }
        }
      });
      delete schema.format;
      if (schema.errorMessage) {
        delete schema.errorMessage.format;
        if (Object.keys(schema.errorMessage).length === 0) {
          delete schema.errorMessage;
        }
      }
    }
    schema.anyOf.push({
      format: value,
      ...message && refs.errorMessages && { errorMessage: { format: message } }
    });
  } else {
    setResponseValueAndErrors(schema, "format", value, message, refs);
  }
}
__name(addFormat, "addFormat");
function addPattern(schema, regex, message, refs) {
  if (schema.pattern || schema.allOf?.some((x) => x.pattern)) {
    if (!schema.allOf) {
      schema.allOf = [];
    }
    if (schema.pattern) {
      schema.allOf.push({
        pattern: schema.pattern,
        ...schema.errorMessage && refs.errorMessages && {
          errorMessage: { pattern: schema.errorMessage.pattern }
        }
      });
      delete schema.pattern;
      if (schema.errorMessage) {
        delete schema.errorMessage.pattern;
        if (Object.keys(schema.errorMessage).length === 0) {
          delete schema.errorMessage;
        }
      }
    }
    schema.allOf.push({
      pattern: stringifyRegExpWithFlags(regex, refs),
      ...message && refs.errorMessages && { errorMessage: { pattern: message } }
    });
  } else {
    setResponseValueAndErrors(schema, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
  }
}
__name(addPattern, "addPattern");
function stringifyRegExpWithFlags(regex, refs) {
  if (!refs.applyRegexFlags || !regex.flags) {
    return regex.source;
  }
  const flags = {
    i: regex.flags.includes("i"),
    m: regex.flags.includes("m"),
    s: regex.flags.includes("s")
    // `.` matches newlines
  };
  const source = flags.i ? regex.source.toLowerCase() : regex.source;
  let pattern = "";
  let isEscaped = false;
  let inCharGroup = false;
  let inCharRange = false;
  for (let i = 0; i < source.length; i++) {
    if (isEscaped) {
      pattern += source[i];
      isEscaped = false;
      continue;
    }
    if (flags.i) {
      if (inCharGroup) {
        if (source[i].match(/[a-z]/)) {
          if (inCharRange) {
            pattern += source[i];
            pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
            inCharRange = false;
          } else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
            pattern += source[i];
            inCharRange = true;
          } else {
            pattern += `${source[i]}${source[i].toUpperCase()}`;
          }
          continue;
        }
      } else if (source[i].match(/[a-z]/)) {
        pattern += `[${source[i]}${source[i].toUpperCase()}]`;
        continue;
      }
    }
    if (flags.m) {
      if (source[i] === "^") {
        pattern += `(^|(?<=[\r
]))`;
        continue;
      } else if (source[i] === "$") {
        pattern += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (flags.s && source[i] === ".") {
      pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
      continue;
    }
    pattern += source[i];
    if (source[i] === "\\") {
      isEscaped = true;
    } else if (inCharGroup && source[i] === "]") {
      inCharGroup = false;
    } else if (!inCharGroup && source[i] === "[") {
      inCharGroup = true;
    }
  }
  try {
    new RegExp(pattern);
  } catch {
    console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
    return regex.source;
  }
  return pattern;
}
__name(stringifyRegExpWithFlags, "stringifyRegExpWithFlags");

// node_modules/zod-to-json-schema/dist/esm/parsers/record.js
function parseRecordDef(def, refs) {
  if (refs.target === "openAi") {
    console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
  }
  if (refs.target === "openApi3" && def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
    return {
      type: "object",
      required: def.keyType._def.values,
      properties: def.keyType._def.values.reduce((acc, key) => ({
        ...acc,
        [key]: parseDef(def.valueType._def, {
          ...refs,
          currentPath: [...refs.currentPath, "properties", key]
        }) ?? parseAnyDef(refs)
      }), {}),
      additionalProperties: refs.rejectedAdditionalProperties
    };
  }
  const schema = {
    type: "object",
    additionalProperties: parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    }) ?? refs.allowedAdditionalProperties
  };
  if (refs.target === "openApi3") {
    return schema;
  }
  if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.checks?.length) {
    const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
    return {
      ...schema,
      propertyNames: {
        enum: def.keyType._def.values
      }
    };
  } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.type._def.checks?.length) {
    const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  }
  return schema;
}
__name(parseRecordDef, "parseRecordDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/map.js
function parseMapDef(def, refs) {
  if (refs.mapStrategy === "record") {
    return parseRecordDef(def, refs);
  }
  const keys = parseDef(def.keyType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "0"]
  }) || parseAnyDef(refs);
  const values = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "1"]
  }) || parseAnyDef(refs);
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [keys, values],
      minItems: 2,
      maxItems: 2
    }
  };
}
__name(parseMapDef, "parseMapDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js
init_esm();
function parseNativeEnumDef(def) {
  const object = def.values;
  const actualKeys = Object.keys(def.values).filter((key) => {
    return typeof object[object[key]] !== "number";
  });
  const actualValues = actualKeys.map((key) => object[key]);
  const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
  return {
    type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: actualValues
  };
}
__name(parseNativeEnumDef, "parseNativeEnumDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/never.js
init_esm();
function parseNeverDef(refs) {
  return refs.target === "openAi" ? void 0 : {
    not: parseAnyDef({
      ...refs,
      currentPath: [...refs.currentPath, "not"]
    })
  };
}
__name(parseNeverDef, "parseNeverDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/null.js
init_esm();
function parseNullDef(refs) {
  return refs.target === "openApi3" ? {
    enum: ["null"],
    nullable: true
  } : {
    type: "null"
  };
}
__name(parseNullDef, "parseNullDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js
init_esm();

// node_modules/zod-to-json-schema/dist/esm/parsers/union.js
init_esm();
var primitiveMappings = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function parseUnionDef(def, refs) {
  if (refs.target === "openApi3")
    return asAnyOf(def, refs);
  const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
  if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
    const types = options.reduce((types2, x) => {
      const type = primitiveMappings[x._def.typeName];
      return type && !types2.includes(type) ? [...types2, type] : types2;
    }, []);
    return {
      type: types.length > 1 ? types : types[0]
    };
  } else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
    const types = options.reduce((acc, x) => {
      const type = typeof x._def.value;
      switch (type) {
        case "string":
        case "number":
        case "boolean":
          return [...acc, type];
        case "bigint":
          return [...acc, "integer"];
        case "object":
          if (x._def.value === null)
            return [...acc, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return acc;
      }
    }, []);
    if (types.length === options.length) {
      const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
      return {
        type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
        enum: options.reduce((acc, x) => {
          return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
        }, [])
      };
    }
  } else if (options.every((x) => x._def.typeName === "ZodEnum")) {
    return {
      type: "string",
      enum: options.reduce((acc, x) => [
        ...acc,
        ...x._def.values.filter((x2) => !acc.includes(x2))
      ], [])
    };
  }
  return asAnyOf(def, refs);
}
__name(parseUnionDef, "parseUnionDef");
var asAnyOf = /* @__PURE__ */ __name((def, refs) => {
  const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", `${i}`]
  })).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
  return anyOf.length ? { anyOf } : void 0;
}, "asAnyOf");

// node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js
function parseNullableDef(def, refs) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
    if (refs.target === "openApi3") {
      return {
        type: primitiveMappings[def.innerType._def.typeName],
        nullable: true
      };
    }
    return {
      type: [
        primitiveMappings[def.innerType._def.typeName],
        "null"
      ]
    };
  }
  if (refs.target === "openApi3") {
    const base2 = parseDef(def.innerType._def, {
      ...refs,
      currentPath: [...refs.currentPath]
    });
    if (base2 && "$ref" in base2)
      return { allOf: [base2], nullable: true };
    return base2 && { ...base2, nullable: true };
  }
  const base = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "0"]
  });
  return base && { anyOf: [base, { type: "null" }] };
}
__name(parseNullableDef, "parseNullableDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/number.js
init_esm();
function parseNumberDef(def, refs) {
  const res = {
    type: "number"
  };
  if (!def.checks)
    return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "int":
        res.type = "integer";
        addErrorMessage(res, "type", check.message, refs);
        break;
      case "min":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMinimum = true;
          }
          setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
        }
        break;
      case "max":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMaximum = true;
          }
          setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
        }
        break;
      case "multipleOf":
        setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
        break;
    }
  }
  return res;
}
__name(parseNumberDef, "parseNumberDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/object.js
init_esm();
function parseObjectDef(def, refs) {
  const forceOptionalIntoNullable = refs.target === "openAi";
  const result = {
    type: "object",
    properties: {}
  };
  const required = [];
  const shape = def.shape();
  for (const propName in shape) {
    let propDef = shape[propName];
    if (propDef === void 0 || propDef._def === void 0) {
      continue;
    }
    let propOptional = safeIsOptional(propDef);
    if (propOptional && forceOptionalIntoNullable) {
      if (propDef._def.typeName === "ZodOptional") {
        propDef = propDef._def.innerType;
      }
      if (!propDef.isNullable()) {
        propDef = propDef.nullable();
      }
      propOptional = false;
    }
    const parsedDef = parseDef(propDef._def, {
      ...refs,
      currentPath: [...refs.currentPath, "properties", propName],
      propertyPath: [...refs.currentPath, "properties", propName]
    });
    if (parsedDef === void 0) {
      continue;
    }
    result.properties[propName] = parsedDef;
    if (!propOptional) {
      required.push(propName);
    }
  }
  if (required.length) {
    result.required = required;
  }
  const additionalProperties = decideAdditionalProperties(def, refs);
  if (additionalProperties !== void 0) {
    result.additionalProperties = additionalProperties;
  }
  return result;
}
__name(parseObjectDef, "parseObjectDef");
function decideAdditionalProperties(def, refs) {
  if (def.catchall._def.typeName !== "ZodNever") {
    return parseDef(def.catchall._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    });
  }
  switch (def.unknownKeys) {
    case "passthrough":
      return refs.allowedAdditionalProperties;
    case "strict":
      return refs.rejectedAdditionalProperties;
    case "strip":
      return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
  }
}
__name(decideAdditionalProperties, "decideAdditionalProperties");
function safeIsOptional(schema) {
  try {
    return schema.isOptional();
  } catch {
    return true;
  }
}
__name(safeIsOptional, "safeIsOptional");

// node_modules/zod-to-json-schema/dist/esm/parsers/optional.js
init_esm();
var parseOptionalDef = /* @__PURE__ */ __name((def, refs) => {
  if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
    return parseDef(def.innerType._def, refs);
  }
  const innerSchema = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "1"]
  });
  return innerSchema ? {
    anyOf: [
      {
        not: parseAnyDef(refs)
      },
      innerSchema
    ]
  } : parseAnyDef(refs);
}, "parseOptionalDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js
init_esm();
var parsePipelineDef = /* @__PURE__ */ __name((def, refs) => {
  if (refs.pipeStrategy === "input") {
    return parseDef(def.in._def, refs);
  } else if (refs.pipeStrategy === "output") {
    return parseDef(def.out._def, refs);
  }
  const a = parseDef(def.in._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", "0"]
  });
  const b = parseDef(def.out._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"]
  });
  return {
    allOf: [a, b].filter((x) => x !== void 0)
  };
}, "parsePipelineDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/promise.js
init_esm();
function parsePromiseDef(def, refs) {
  return parseDef(def.type._def, refs);
}
__name(parsePromiseDef, "parsePromiseDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/set.js
init_esm();
function parseSetDef(def, refs) {
  const items = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items"]
  });
  const schema = {
    type: "array",
    uniqueItems: true,
    items
  };
  if (def.minSize) {
    setResponseValueAndErrors(schema, "minItems", def.minSize.value, def.minSize.message, refs);
  }
  if (def.maxSize) {
    setResponseValueAndErrors(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
  }
  return schema;
}
__name(parseSetDef, "parseSetDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js
init_esm();
function parseTupleDef(def, refs) {
  if (def.rest) {
    return {
      type: "array",
      minItems: def.items.length,
      items: def.items.map((x, i) => parseDef(x._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i}`]
      })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
      additionalItems: parseDef(def.rest._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalItems"]
      })
    };
  } else {
    return {
      type: "array",
      minItems: def.items.length,
      maxItems: def.items.length,
      items: def.items.map((x, i) => parseDef(x._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i}`]
      })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
    };
  }
}
__name(parseTupleDef, "parseTupleDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js
init_esm();
function parseUndefinedDef(refs) {
  return {
    not: parseAnyDef(refs)
  };
}
__name(parseUndefinedDef, "parseUndefinedDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js
init_esm();
function parseUnknownDef(refs) {
  return parseAnyDef(refs);
}
__name(parseUnknownDef, "parseUnknownDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js
init_esm();
var parseReadonlyDef = /* @__PURE__ */ __name((def, refs) => {
  return parseDef(def.innerType._def, refs);
}, "parseReadonlyDef");

// node_modules/zod-to-json-schema/dist/esm/selectParser.js
var selectParser = /* @__PURE__ */ __name((def, typeName, refs) => {
  switch (typeName) {
    case ZodFirstPartyTypeKind.ZodString:
      return parseStringDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNumber:
      return parseNumberDef(def, refs);
    case ZodFirstPartyTypeKind.ZodObject:
      return parseObjectDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBigInt:
      return parseBigintDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBoolean:
      return parseBooleanDef();
    case ZodFirstPartyTypeKind.ZodDate:
      return parseDateDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUndefined:
      return parseUndefinedDef(refs);
    case ZodFirstPartyTypeKind.ZodNull:
      return parseNullDef(refs);
    case ZodFirstPartyTypeKind.ZodArray:
      return parseArrayDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUnion:
    case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
      return parseUnionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodIntersection:
      return parseIntersectionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodTuple:
      return parseTupleDef(def, refs);
    case ZodFirstPartyTypeKind.ZodRecord:
      return parseRecordDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLiteral:
      return parseLiteralDef(def, refs);
    case ZodFirstPartyTypeKind.ZodEnum:
      return parseEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNativeEnum:
      return parseNativeEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNullable:
      return parseNullableDef(def, refs);
    case ZodFirstPartyTypeKind.ZodOptional:
      return parseOptionalDef(def, refs);
    case ZodFirstPartyTypeKind.ZodMap:
      return parseMapDef(def, refs);
    case ZodFirstPartyTypeKind.ZodSet:
      return parseSetDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLazy:
      return () => def.getter()._def;
    case ZodFirstPartyTypeKind.ZodPromise:
      return parsePromiseDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNaN:
    case ZodFirstPartyTypeKind.ZodNever:
      return parseNeverDef(refs);
    case ZodFirstPartyTypeKind.ZodEffects:
      return parseEffectsDef(def, refs);
    case ZodFirstPartyTypeKind.ZodAny:
      return parseAnyDef(refs);
    case ZodFirstPartyTypeKind.ZodUnknown:
      return parseUnknownDef(refs);
    case ZodFirstPartyTypeKind.ZodDefault:
      return parseDefaultDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBranded:
      return parseBrandedDef(def, refs);
    case ZodFirstPartyTypeKind.ZodReadonly:
      return parseReadonlyDef(def, refs);
    case ZodFirstPartyTypeKind.ZodCatch:
      return parseCatchDef(def, refs);
    case ZodFirstPartyTypeKind.ZodPipeline:
      return parsePipelineDef(def, refs);
    case ZodFirstPartyTypeKind.ZodFunction:
    case ZodFirstPartyTypeKind.ZodVoid:
    case ZodFirstPartyTypeKind.ZodSymbol:
      return void 0;
    default:
      return /* @__PURE__ */ ((_) => void 0)(typeName);
  }
}, "selectParser");

// node_modules/zod-to-json-schema/dist/esm/parseDef.js
function parseDef(def, refs, forceResolution = false) {
  const seenItem = refs.seen.get(def);
  if (refs.override) {
    const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
    if (overrideResult !== ignoreOverride) {
      return overrideResult;
    }
  }
  if (seenItem && !forceResolution) {
    const seenSchema = get$ref(seenItem, refs);
    if (seenSchema !== void 0) {
      return seenSchema;
    }
  }
  const newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
  refs.seen.set(def, newItem);
  const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
  const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
  if (jsonSchema2) {
    addMeta(def, refs, jsonSchema2);
  }
  if (refs.postProcess) {
    const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
    newItem.jsonSchema = jsonSchema2;
    return postProcessResult;
  }
  newItem.jsonSchema = jsonSchema2;
  return jsonSchema2;
}
__name(parseDef, "parseDef");
var get$ref = /* @__PURE__ */ __name((item, refs) => {
  switch (refs.$refStrategy) {
    case "root":
      return { $ref: item.path.join("/") };
    case "relative":
      return { $ref: getRelativePath(refs.currentPath, item.path) };
    case "none":
    case "seen": {
      if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
        console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
        return parseAnyDef(refs);
      }
      return refs.$refStrategy === "seen" ? parseAnyDef(refs) : void 0;
    }
  }
}, "get$ref");
var addMeta = /* @__PURE__ */ __name((def, refs, jsonSchema2) => {
  if (def.description) {
    jsonSchema2.description = def.description;
    if (refs.markdownDescription) {
      jsonSchema2.markdownDescription = def.description;
    }
  }
  return jsonSchema2;
}, "addMeta");

// node_modules/zod-to-json-schema/dist/esm/parseTypes.js
init_esm();

// node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js
init_esm();
var zodToJsonSchema = /* @__PURE__ */ __name((schema, options) => {
  const refs = getRefs(options);
  let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name2, schema2]) => ({
    ...acc,
    [name2]: parseDef(schema2._def, {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name2]
    }, true) ?? parseAnyDef(refs)
  }), {}) : void 0;
  const name = typeof options === "string" ? options : options?.nameStrategy === "title" ? void 0 : options?.name;
  const main = parseDef(schema._def, name === void 0 ? refs : {
    ...refs,
    currentPath: [...refs.basePath, refs.definitionPath, name]
  }, false) ?? parseAnyDef(refs);
  const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
  if (title !== void 0) {
    main.title = title;
  }
  if (refs.flags.hasReferencedOpenAiAnyType) {
    if (!definitions) {
      definitions = {};
    }
    if (!definitions[refs.openAiAnyTypeName]) {
      definitions[refs.openAiAnyTypeName] = {
        // Skipping "object" as no properties can be defined and additionalProperties must be "false"
        type: ["string", "number", "integer", "boolean", "array", "null"],
        items: {
          $ref: refs.$refStrategy === "relative" ? "1" : [
            ...refs.basePath,
            refs.definitionPath,
            refs.openAiAnyTypeName
          ].join("/")
        }
      };
    }
  }
  const combined = name === void 0 ? definitions ? {
    ...main,
    [refs.definitionPath]: definitions
  } : main : {
    $ref: [
      ...refs.$refStrategy === "relative" ? [] : refs.basePath,
      refs.definitionPath,
      name
    ].join("/"),
    [refs.definitionPath]: {
      ...definitions,
      [name]: main
    }
  };
  if (refs.target === "jsonSchema7") {
    combined.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (refs.target === "jsonSchema2019-09" || refs.target === "openAi") {
    combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
  }
  if (refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type))) {
    console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
  }
  return combined;
}, "zodToJsonSchema");

// src/services/roadmaps/roadmap-prompt.service.ts
init_esm();

// src/services/roadmaps/roadmap-prompts.ts
init_esm();
var ROADMAP_SYSTEM_PROMPT = `ROLE:
You are an expert technical career mentor and curriculum developer.
Your goal is to generate a comprehensive, highly personalized, step-by-step learning roadmap and logical graph for a given target role and experience level.

PERSONALIZATION REQUIREMENTS:
- Treat existing skills as the user's current capability baseline.
- Compare existing skills against the skills required for the target role.
- Prioritize genuine skill gaps.
- Avoid unnecessary beginner-level repetition when proficiency indicates mastery.
- Reinforce partially known skills where appropriate.
- Introduce prerequisites required for downstream topics.
- Use currentRole and currentStatus to understand starting context.
- Use yearsOfExperience to understand practical exposure.
- Use highestQualification and fieldOfStudy to infer relevant academic foundations.
- Use targetCompanyType to adjust depth and expectations when relevant.

TARGET-ROLE EXPERIENCE:
- The provided Experience Level describes experience specifically in the target role.
- Use it as the primary signal for technical starting depth.
- Overall professional experience may influence practical context and learning style.
- Overall professional experience must NOT automatically imply technical proficiency in the target role.

MISSING DATA:
- Profile fields may be null or unavailable.
- Never invent missing user information.
- Do not assume skills, qualifications, experience, or preferences that were not provided.
- When personalization data is unavailable, fall back to target role and target-role experience level.

REALISM:
- The roadmap must be achievable within the specified weekly time commitment if provided.
- Prioritize essential skills over exhaustive coverage.
- Estimated hours must be internally consistent.
- Projects and resources must be appropriate for the user's current level.

GRAPH SEMANTICS:
- Every edge must represent a genuine learning prerequisite.
- Do not create edges merely to make the graph connected.
- Avoid unnecessary edges.
- Foundational skills must precede dependent skills.
- Projects should depend on skills they actually require.
- The graph must remain a true Directed Acyclic Graph (DAG) with NO circular dependencies.

CONSISTENCY:
- Project difficulty must match required skills.
- Estimated hours must be plausible.
- Do not create references to nonexistent IDs.

CRITICAL OUTPUT INSTRUCTIONS:
1. You MUST respond ONLY with valid JSON adhering strictly to the JSON Schema provided.
2. DO NOT wrap the output in Markdown code blocks (e.g. do NOT use \`\`\`json ... \`\`\`).
3. DO NOT include any introductory text, explanations, or commentary outside the JSON response.
4. DO NOT generate React Flow positioning metadata or coordinates (x, y, position). You must ONLY generate a logical graph (node list with ids, titles, types, and edge list connecting node ids).
5. Ensure node IDs in "logicalGraph.edges" refer to actual existing node IDs in "logicalGraph.nodes".
6. Graph must be a Directed Acyclic Graph (DAG) with NO circular dependencies.
7. EVERY OBJECT in every array (projects, resources, careerTips, nodes, edges) MUST have a non-empty string "id" field (e.g. "proj_1", "res_1", "tip_1", "n1", "e1").
8. The top-level "projects", "resources", and "careerTips" arrays MUST contain full objects, NEVER plain strings.

STRUCTURAL REQUIREMENTS:
- metadata: title, role, experienceLevel ("Beginner" | "Basic" | "Intermediate" | "Advanced").
- summary: high-level overview of the roadmap strategy.
- projects: top-level array of { id, title, description, difficulty ("Beginner" | "Intermediate" | "Advanced"), skillsRequired (string[]) }.
- resources: top-level array of { id, title, url, type, isFree (boolean), description }.
- careerTips: top-level array of { id, category, tip }.
- logicalGraph:
  - nodes: array of { id, title, description, type: "skill" | "project", category, estimatedHours }
  - edges: array of { id, source, target } representing prerequisite relationships (e.g. source: "html", target: "css").
`;
var ROADMAP_USER_PROMPT_TEMPLATE = `Target Role: {role}
Experience Level (in target role): {experienceLevel}
{weeklyHoursText}
Normalized User Profile Context:
{profileContextText}

Use the profile context to personalize the roadmap.

The target-role experience level is the primary signal for technical starting depth.

Use existing skills as the user's baseline:
- avoid unnecessarily repeating mastered fundamentals
- identify meaningful skill gaps
- reinforce partially known skills
- introduce prerequisite skills when necessary

Use weekly time commitment to keep the roadmap realistic and achievable if provided.

If profile information is missing, do not invent it. Fall back to the target role and target-role experience level.

Generate the complete logical roadmap according to the required JSON schema.`;

// src/services/roadmaps/roadmap-prompt.service.ts
var RoadmapPromptService = class {
  static {
    __name(this, "RoadmapPromptService");
  }
  /**
   * Returns the system prompt instructing the LLM on output requirements and structure.
   */
  static getSystemPrompt() {
    return ROADMAP_SYSTEM_PROMPT;
  }
  /**
   * Formats normalized ProfileContext into a clean string representation for the LLM.
   */
  static formatProfileContext(context) {
    if (!context) {
      return "No profile context provided. Generate a standard general roadmap.";
    }
    const sections = [];
    const situationLines = [];
    if (context.currentStatus) {
      situationLines.push(`Current Status: ${context.currentStatus}`);
    }
    if (context.currentRole) {
      situationLines.push(`Current Role: ${context.currentRole}`);
    }
    if (context.yearsOfExperience != null) {
      situationLines.push(`Years of Experience: ${context.yearsOfExperience}`);
    }
    if (situationLines.length > 0) {
      sections.push(situationLines.join("\n"));
    }
    if (context.primaryGoal) {
      sections.push(`Primary Career Goal: ${context.primaryGoal}`);
    }
    const educationLines = [];
    if (context.highestQualification) {
      educationLines.push(`Highest Qualification: ${context.highestQualification}`);
    }
    if (context.fieldOfStudy) {
      educationLines.push(`Field of Study: ${context.fieldOfStudy}`);
    }
    if (educationLines.length > 0) {
      sections.push(educationLines.join("\n"));
    }
    if (context.targetCompanyType) {
      sections.push(`Target Company Type: ${context.targetCompanyType}`);
    }
    if (context.weeklyLearningHours != null && context.weeklyLearningHours > 0) {
      sections.push(`Weekly Learning Availability: ${context.weeklyLearningHours} hours/week`);
    }
    if (context.existingSkills && context.existingSkills.length > 0) {
      const skillLines = context.existingSkills.map(
        (s) => `- ${s.name} — ${s.proficiency}`
      );
      sections.push(`Existing Skills:
${skillLines.join("\n")}`);
    }
    if (sections.length === 0) {
      return "No profile context provided. Generate a standard general roadmap.";
    }
    return sections.join("\n\n");
  }
  /**
   * Constructs the user prompt by injecting personalization parameters from RoadmapRequest.
   */
  static getUserPrompt(request) {
    let profileContextText = "No profile context provided. Generate a standard general roadmap.";
    let weeklyHoursText = "";
    const ctx = request.personalization?.profileContext;
    if (!request.personalization?.skipped && ctx) {
      profileContextText = this.formatProfileContext(ctx);
      if (ctx.weeklyLearningHours != null && ctx.weeklyLearningHours > 0) {
        weeklyHoursText = `Weekly Time Commitment: ${ctx.weeklyLearningHours} hours/week
`;
      }
    }
    return ROADMAP_USER_PROMPT_TEMPLATE.replace("{role}", request.role).replace("{experienceLevel}", request.experienceLevel).replace("{weeklyHoursText}", weeklyHoursText).replace("{profileContextText}", profileContextText);
  }
};

// src/services/roadmaps/roadmap-validator.ts
init_esm();

// src/services/roadmaps/roadmap-schema.ts
init_esm();
var RoadmapNodeSchema = external_exports.object({
  id: external_exports.string().min(1, "Node ID is required"),
  title: external_exports.string().min(1, "Node title is required"),
  description: external_exports.string(),
  type: external_exports.string().default("skill"),
  category: external_exports.string().optional(),
  estimatedHours: external_exports.number().optional()
});
var RoadmapEdgeSchema = external_exports.object({
  id: external_exports.string().min(1, "Edge ID is required"),
  source: external_exports.string().min(1, "Edge source is required"),
  target: external_exports.string().min(1, "Edge target is required")
});
var LearningResourceSchema = external_exports.object({
  id: external_exports.string(),
  title: external_exports.string(),
  url: external_exports.string(),
  type: external_exports.string(),
  isFree: external_exports.boolean(),
  description: external_exports.string().optional()
});
var ProjectSchema = external_exports.object({
  id: external_exports.string(),
  title: external_exports.string(),
  description: external_exports.string(),
  difficulty: external_exports.enum(["Beginner", "Intermediate", "Advanced"]),
  skillsRequired: external_exports.array(external_exports.string()),
  keyFeatures: external_exports.array(external_exports.string()).optional()
});
var CareerTipSchema = external_exports.object({
  id: external_exports.string(),
  category: external_exports.string(),
  tip: external_exports.string()
});
var RoadmapMetadataSchema = external_exports.object({
  title: external_exports.string(),
  role: external_exports.string(),
  experienceLevel: external_exports.enum(["Beginner", "Basic", "Intermediate", "Advanced"]),
  estimatedDuration: external_exports.string().optional(),
  generatedAt: external_exports.string().optional()
});
var LogicalGraphSchema = external_exports.object({
  nodes: external_exports.array(RoadmapNodeSchema).min(1, "Graph must contain at least one node"),
  edges: external_exports.array(RoadmapEdgeSchema)
});
var GeneratedRoadmapSchema = external_exports.object({
  metadata: RoadmapMetadataSchema,
  summary: external_exports.string(),
  projects: external_exports.array(ProjectSchema),
  resources: external_exports.array(LearningResourceSchema),
  careerTips: external_exports.array(CareerTipSchema),
  logicalGraph: LogicalGraphSchema
});

// src/services/roadmaps/roadmap-validator.ts
var RoadmapValidator = class {
  static {
    __name(this, "RoadmapValidator");
  }
  /**
   * Validates raw JSON string or object against schema and topological/graph constraints.
   */
  static validate(rawInput) {
    const errors = [];
    let parsedData = rawInput;
    if (typeof rawInput === "string") {
      try {
        const cleaned = rawInput.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/\s*```$/i, "").trim();
        parsedData = JSON.parse(cleaned);
      } catch (err) {
        const message = err instanceof Error ? err.message : "JSON parse failure";
        return {
          isValid: false,
          errors: [`Invalid JSON output: ${message}`]
        };
      }
    }
    const schemaResult = GeneratedRoadmapSchema.safeParse(parsedData);
    if (!schemaResult.success) {
      const zodErrors = schemaResult.error.errors.map(
        (e) => `[${e.path.join(".")}] ${e.message}`
      );
      return {
        isValid: false,
        errors: zodErrors
      };
    }
    const roadmap = schemaResult.data;
    const { nodes, edges } = roadmap.logicalGraph;
    if (!nodes || nodes.length === 0) {
      errors.push("Logical graph cannot be empty: must contain at least one node.");
    }
    const nodeIds = /* @__PURE__ */ new Set();
    for (const node of nodes) {
      if (nodeIds.has(node.id)) {
        errors.push(`Duplicate node ID found: "${node.id}".`);
      }
      nodeIds.add(node.id);
    }
    const edgeIds = /* @__PURE__ */ new Set();
    for (const edge of edges) {
      if (edgeIds.has(edge.id)) {
        errors.push(`Duplicate edge ID found: "${edge.id}".`);
      }
      edgeIds.add(edge.id);
      if (!nodeIds.has(edge.source)) {
        errors.push(
          `Edge "${edge.id}" references missing source node ID "${edge.source}".`
        );
      }
      if (!nodeIds.has(edge.target)) {
        errors.push(
          `Edge "${edge.id}" references missing target node ID "${edge.target}".`
        );
      }
    }
    if (nodeIds.size > 0 && errors.length === 0) {
      const hasCycle = this.detectCircularDependency(Array.from(nodeIds), edges);
      if (hasCycle) {
        errors.push("Circular dependencies detected in the logical roadmap graph.");
      }
    }
    return {
      isValid: errors.length === 0,
      errors,
      data: errors.length === 0 ? roadmap : void 0
    };
  }
  /**
   * Helper algorithm to detect cycles in directed graph.
   */
  static detectCircularDependency(nodes, edges) {
    const adj = /* @__PURE__ */ new Map();
    nodes.forEach((id) => adj.set(id, []));
    edges.forEach((edge) => {
      if (adj.has(edge.source)) {
        adj.get(edge.source).push(edge.target);
      }
    });
    const visited = /* @__PURE__ */ new Map();
    const dfs = /* @__PURE__ */ __name((u) => {
      visited.set(u, 1);
      const neighbors = adj.get(u) || [];
      for (const v of neighbors) {
        const state = visited.get(v) || 0;
        if (state === 1) {
          return true;
        }
        if (state === 0) {
          if (dfs(v)) return true;
        }
      }
      visited.set(u, 2);
      return false;
    }, "dfs");
    for (const node of nodes) {
      if ((visited.get(node) || 0) === 0) {
        if (dfs(node)) return true;
      }
    }
    return false;
  }
};

// src/services/roadmaps/roadmap-duration.service.ts
init_esm();
var RoadmapDurationService = class {
  static {
    __name(this, "RoadmapDurationService");
  }
  /**
   * Calculates a deterministic overall duration string (e.g. "6 weeks", "3 months")
   * from graph nodes and weekly hours.
   */
  static calculate(nodes, weeklyHoursInput) {
    if (!nodes || nodes.length === 0) {
      return "Flexible";
    }
    const totalHours = nodes.reduce(
      (sum, n) => sum + (typeof n.estimatedHours === "number" && n.estimatedHours > 0 ? n.estimatedHours : 8),
      0
    );
    const weeklyHours = typeof weeklyHoursInput === "number" && weeklyHoursInput > 0 ? weeklyHoursInput : 10;
    const estimatedWeeks = Math.max(1, Math.ceil(totalHours / weeklyHours));
    return this.formatDuration(estimatedWeeks);
  }
  /**
   * Converts weeks into a clean human-readable duration string.
   */
  static formatDuration(weeks) {
    if (weeks <= 0) return "Flexible";
    if (weeks === 1) return "1 week";
    if (weeks < 4) return `${weeks} weeks`;
    const months = Math.round(weeks / 4.33 * 10) / 10;
    const roundedMonths = Math.round(months);
    if (roundedMonths <= 1) return "1 month";
    if (roundedMonths < 12) return `${roundedMonths} months`;
    const years = Math.round(roundedMonths / 12 * 10) / 10;
    const roundedYears = Math.round(years);
    return roundedYears === 1 ? "1 year" : `${roundedYears} years`;
  }
};

// src/services/roadmaps/roadmap-generation.service.ts
var jsonSchema = zodToJsonSchema(GeneratedRoadmapSchema, {
  name: "GeneratedRoadmap",
  $refStrategy: "none"
});
var RoadmapGenerationService = class {
  static {
    __name(this, "RoadmapGenerationService");
  }
  static {
    this.ai = new GoogleGenAI({});
  }
  /**
   * Generates a validated logical roadmap using Google Gemini LLM with automatic retry capability.
   */
  static async generate(request) {
    const systemInstruction = RoadmapPromptService.getSystemPrompt();
    const userPrompt = RoadmapPromptService.getUserPrompt(request);
    const maxAttempts = 3;
    let lastErrors = [];
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        console.log(
          `[RoadmapGenerationService] Generation attempt ${attempt}/${maxAttempts}`
        );
        const response = await this.ai.models.generateContent({
          model: process.env.GEMINI_MODEL || "gemini-3.6-flash",
          contents: userPrompt,
          config: {
            systemInstruction,
            responseMimeType: "application/json",
            responseSchema: jsonSchema.definitions?.GeneratedRoadmap || jsonSchema,
            temperature: 0.2
            // Low temperature for deterministic structure
          }
        });
        const rawText = response.text;
        if (!rawText) {
          lastErrors = ["Received empty response from AI model."];
          continue;
        }
        const validation = RoadmapValidator.validate(rawText);
        if (validation.isValid && validation.data) {
          const generatedRoadmap = validation.data;
          generatedRoadmap.metadata.generatedAt = (/* @__PURE__ */ new Date()).toISOString();
          generatedRoadmap.metadata.estimatedDuration = RoadmapDurationService.calculate(
            generatedRoadmap.logicalGraph.nodes,
            request.personalization?.profileContext?.weeklyLearningHours
          );
          console.log(
            `[RoadmapGenerationService] Successfully generated & validated roadmap on attempt ${attempt}`
          );
          return generatedRoadmap;
        } else {
          console.warn(
            `[RoadmapGenerationService] Validation failed on attempt ${attempt}:`,
            validation.errors
          );
          lastErrors = validation.errors;
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(
          `[RoadmapGenerationService] Exception during attempt ${attempt}:`,
          message
        );
        lastErrors = [message || "Transient AI provider failure."];
      }
    }
    throw new Error(
      `Failed to generate valid roadmap after ${maxAttempts} attempts. Errors: ${lastErrors.join("; ")}`
    );
  }
};

// src/services/roadmaps/roadmap-artifact.service.ts
init_esm();

// src/services/roadmaps/roadmap-render.service.ts
init_esm();

// src/services/roadmaps/layout.service.ts
init_esm();
var import_dagre = __toESM(require_dagre());
var LayoutService = class {
  static {
    __name(this, "LayoutService");
  }
  static {
    this.DEFAULT_NODE_WIDTH = 280;
  }
  static {
    this.DEFAULT_NODE_HEIGHT = 110;
  }
  /**
   * Computes deterministic top-to-bottom layout for logical roadmap graph using Dagre.
   */
  static computeLayout(nodes, edges, direction = "TB") {
    const g = new import_dagre.default.graphlib.Graph();
    g.setGraph({
      rankdir: direction,
      nodesep: 100,
      // Generous horizontal spacing between adjacent sibling nodes to prevent collisions
      ranksep: 110,
      // Vertical spacing between ranks/levels
      marginx: 50,
      marginy: 50
    });
    g.setDefaultEdgeLabel(() => ({}));
    nodes.forEach((node) => {
      g.setNode(node.id, {
        width: this.DEFAULT_NODE_WIDTH,
        height: this.DEFAULT_NODE_HEIGHT
      });
    });
    edges.forEach((edge) => {
      g.setEdge(edge.source, edge.target);
    });
    import_dagre.default.layout(g);
    const positionedNodes = nodes.map((node) => {
      const dagreNode = g.node(node.id);
      return {
        ...node,
        width: this.DEFAULT_NODE_WIDTH,
        height: this.DEFAULT_NODE_HEIGHT,
        position: {
          x: dagreNode ? dagreNode.x - this.DEFAULT_NODE_WIDTH / 2 : 0,
          y: dagreNode ? dagreNode.y - this.DEFAULT_NODE_HEIGHT / 2 : 0
        }
      };
    });
    return {
      nodes: positionedNodes,
      edges
    };
  }
};

// src/services/roadmaps/roadmap-render.service.ts
var RoadmapRenderService = class {
  static {
    __name(this, "RoadmapRenderService");
  }
  /**
   * Converts logical graph nodes and edges into React Flow compatible node and edge structures.
   */
  static convertToReactFlow(logicalNodes, logicalEdges) {
    const { nodes: positionedNodes } = LayoutService.computeLayout(logicalNodes, logicalEdges);
    const reactFlowNodes = positionedNodes.map((node) => ({
      id: node.id,
      type: "customSkillNode",
      // Custom custom React Flow node component
      position: node.position,
      data: {
        label: node.title,
        title: node.title,
        description: node.description,
        category: node.category,
        estimatedHours: node.estimatedHours,
        nodeType: node.type
      },
      draggable: false,
      // Read-only enforcement
      selectable: true
    }));
    const reactFlowEdges = logicalEdges.map((edge) => ({
      id: edge.id || `e-${edge.source}-${edge.target}`,
      source: edge.source,
      target: edge.target,
      type: "smoothstep",
      animated: true
    }));
    return {
      nodes: reactFlowNodes,
      edges: reactFlowEdges
    };
  }
};

// src/services/roadmaps/roadmap-artifact.service.ts
var RoadmapArtifactService = class {
  static {
    __name(this, "RoadmapArtifactService");
  }
  /**
   * Builds a versioned roadmap artifact complete with pre-calculated React Flow positions.
   */
  static buildArtifact(generated) {
    const reactFlow = RoadmapRenderService.convertToReactFlow(
      generated.logicalGraph.nodes,
      generated.logicalGraph.edges
    );
    return {
      metadata: generated.metadata,
      summary: generated.summary,
      projects: generated.projects,
      resources: generated.resources,
      careerTips: generated.careerTips,
      logicalGraph: generated.logicalGraph,
      reactFlow
    };
  }
  /**
   * Uploads versioned roadmap artifact to Blob Storage.
   */
  static async uploadArtifact(roadmapId, artifact) {
    const path = `roadmaps/${roadmapId}.json`;
    return BlobStorageService.upsertJson(path, artifact);
  }
  /**
   * Validates version and schema integrity of a retrieved artifact.
   */
  static validateArtifact(artifact) {
    if (!artifact || typeof artifact !== "object") return false;
    const a = artifact;
    return Boolean(
      a.metadata && typeof a.metadata.title === "string" && a.logicalGraph && Array.isArray(a.logicalGraph.nodes) && a.reactFlow && Array.isArray(a.reactFlow.nodes)
    );
  }
};

// src/trigger/generate-roadmap.ts
var import_client3 = __toESM(require_default());

// src/features/roadmaps/utils.ts
init_esm();
var import_client2 = __toESM(require_default());
function parseCareerLevel(level) {
  const upper = (level || "").toUpperCase();
  if (upper === "BEGINNER" || upper === "BASIC") return import_client2.CareerLevel.BEGINNER;
  if (upper === "INTERMEDIATE") return import_client2.CareerLevel.INTERMEDIATE;
  if (upper === "ADVANCED") return import_client2.CareerLevel.ADVANCED;
  return import_client2.CareerLevel.BEGINNER;
}
__name(parseCareerLevel, "parseCareerLevel");
function normalizeRole(role) {
  return role.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
__name(normalizeRole, "normalizeRole");

// src/trigger/generate-roadmap.ts
var GenerateRoadmapTaskSchema = RoadmapRequestSchema.extend({
  jobId: external_exports.string().optional(),
  userId: external_exports.string().optional(),
  roadmapId: external_exports.string().optional(),
  isGlobal: external_exports.boolean().optional(),
  normalizedRole: external_exports.string().optional()
});
var generateRoadmapTask = schemaTask({
  id: "generate-roadmap",
  schema: GenerateRoadmapTaskSchema,
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1e3,
    maxTimeoutInMs: 1e4
  },
  run: /* @__PURE__ */ __name(async (payload, { ctx }) => {
    const jobId = payload.jobId;
    const userId = payload.userId;
    const recordStage = /* @__PURE__ */ __name(async (stageNumber, stage, entityId) => {
      if (!userId || !entityId) return;
      await ModuleActivityService.recordActivity({
        userId,
        module: import_client.ModuleType.ROADMAP,
        eventType: import_client.ModuleActivityEventType.ROADMAP_GENERATION_STAGE_CHANGED,
        entityId,
        metadata: {
          source: "GENERATE_ROADMAP_TASK",
          roadmapId: entityId,
          stage,
          stageNumber,
          totalStages: 4
        }
      }).catch(
        (error) => console.warn(`[RoadmapActivity] Stage ${stageNumber} log failed:`, error)
      );
    }, "recordStage");
    try {
      metadata.set("progress", 10);
      if (jobId) await JobService.updateProgress(jobId, 10, "Preparing Prompt", ctx.run.id);
      metadata.set("status", "Generating Roadmap");
      metadata.set("progress", 25);
      if (jobId) await JobService.updateProgress(jobId, 25, "Generating Roadmap");
      await recordStage(1, "Generating Roadmap", payload.roadmapId);
      const generatedRoadmap = await RoadmapGenerationService.generate(payload);
      metadata.set("status", "Validating Graph");
      metadata.set("progress", 45);
      if (jobId) await JobService.updateProgress(jobId, 45, "Validating Graph");
      metadata.set("status", "Computing Layout");
      metadata.set("progress", 65);
      if (jobId) await JobService.updateProgress(jobId, 65, "Computing Layout");
      await recordStage(2, "Computing Layout", payload.roadmapId);
      const artifact = RoadmapArtifactService.buildArtifact(generatedRoadmap);
      metadata.set("status", "Uploading Artifact");
      metadata.set("progress", 80);
      if (jobId) await JobService.updateProgress(jobId, 80, "Uploading Artifact");
      await recordStage(3, "Uploading Artifact", payload.roadmapId);
      const targetId = payload.roadmapId || `rm_${Date.now()}`;
      const blobUrl = await RoadmapArtifactService.uploadArtifact(targetId, artifact);
      metadata.set("status", "Saving Metadata");
      metadata.set("progress", 95);
      if (jobId) await JobService.updateProgress(jobId, 95, "Saving Metadata");
      await recordStage(4, "Saving Metadata", payload.roadmapId);
      let finalRoadmapId = targetId;
      if (payload.isGlobal) {
        const normRole = payload.normalizedRole || normalizeRole(payload.role);
        const expLevel = parseCareerLevel(payload.experienceLevel);
        const globalRecord = await prisma.globalRoadmap.upsert({
          where: {
            normalizedRole_experienceLevel: {
              normalizedRole: normRole,
              experienceLevel: expLevel
            }
          },
          create: {
            id: targetId,
            createdByUserId: userId || null,
            title: generatedRoadmap.metadata.title,
            description: generatedRoadmap.summary,
            targetRole: payload.role,
            normalizedRole: normRole,
            experienceLevel: expLevel,
            estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
            status: import_client3.RoadmapStatus.COMPLETED,
            blobUrl
          },
          update: {
            title: generatedRoadmap.metadata.title,
            description: generatedRoadmap.summary,
            targetRole: payload.role,
            estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
            status: import_client3.RoadmapStatus.COMPLETED,
            blobUrl
          }
        });
        finalRoadmapId = globalRecord.id;
        metadata.set("status", "Completed");
        metadata.set("progress", 100);
        if (jobId) {
          await JobService.completeJob(jobId, finalRoadmapId, "GLOBAL_ROADMAP");
        }
      } else {
        let roadmapRecord;
        if (userId) {
          roadmapRecord = await prisma.roadmap.upsert({
            where: { id: targetId },
            create: {
              id: targetId,
              userId,
              title: generatedRoadmap.metadata.title,
              description: generatedRoadmap.summary,
              targetRole: payload.role,
              experienceLevel: parseCareerLevel(payload.experienceLevel),
              estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
              status: import_client3.RoadmapStatus.COMPLETED,
              blobUrl,
              personalized: true,
              profileSnapshot: payload.personalization.profileContext ? JSON.parse(JSON.stringify(payload.personalization.profileContext)) : void 0
            },
            update: {
              title: generatedRoadmap.metadata.title,
              description: generatedRoadmap.summary,
              targetRole: payload.role,
              experienceLevel: parseCareerLevel(payload.experienceLevel),
              estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
              status: import_client3.RoadmapStatus.COMPLETED,
              blobUrl
            }
          });
          finalRoadmapId = roadmapRecord?.id || targetId;
        }
        metadata.set("status", "Completed");
        metadata.set("progress", 100);
        if (jobId) {
          await JobService.completeJob(jobId, finalRoadmapId, "ROADMAP");
        }
      }
      console.log("[Trigger.dev] Roadmap post-processing pipeline finished successfully!");
      if (userId) await ModuleActivityService.recordActivity({
        userId,
        module: import_client.ModuleType.ROADMAP,
        eventType: import_client.ModuleActivityEventType.ROADMAP_GENERATED,
        entityId: finalRoadmapId,
        metadata: { source: "GENERATE_ROADMAP_TASK", roadmapId: finalRoadmapId }
      }).catch((e) => console.warn("[RoadmapActivity] Generation completed log failed:", e));
      return {
        success: true,
        roadmapId: finalRoadmapId,
        blobUrl,
        artifact
      };
    } catch (err) {
      const appError = normalizeError(err);
      console.error("[Trigger.dev] Pipeline error:", appError.message, err);
      if (jobId) {
        await JobService.failJob(jobId, appError.message);
      }
      if (payload.roadmapId) {
        if (payload.isGlobal) {
          await prisma.globalRoadmap.update({
            where: { id: payload.roadmapId },
            data: { status: import_client3.RoadmapStatus.FAILED }
          }).catch((dbErr) => console.warn("[Trigger.dev] Failed to mark GlobalRoadmap as FAILED:", dbErr));
        } else {
          await prisma.roadmap.update({
            where: { id: payload.roadmapId },
            data: { status: import_client3.RoadmapStatus.FAILED }
          }).catch((dbErr) => console.warn("[Trigger.dev] Failed to mark Roadmap as FAILED:", dbErr));
        }
      }
      if (userId) await ModuleActivityService.recordActivity({
        userId,
        module: import_client.ModuleType.ROADMAP,
        eventType: import_client.ModuleActivityEventType.ROADMAP_GENERATION_FAILED,
        entityId: payload.roadmapId,
        metadata: { source: "GENERATE_ROADMAP_TASK", roadmapId: payload.roadmapId, error: appError.message }
      }).catch((e) => console.warn("[RoadmapActivity] Generation failed log error:", e));
      throw err;
    }
  }, "run")
});

export {
  GenerateRoadmapTaskSchema,
  generateRoadmapTask
};
//# sourceMappingURL=chunk-DWDEMIDN.mjs.map
