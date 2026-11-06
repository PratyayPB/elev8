import {
  require_cookies,
  require_dynamic_rendering,
  require_dynamic_rendering_utils,
  require_hooks_server_context,
  require_invariant_error,
  require_reflect,
  require_static_generation_bailout,
  require_utils,
  require_work_async_storage_external,
  require_work_unit_async_storage_external
} from "./chunk-UQPM4TIK.mjs";
import {
  require_react
} from "./chunk-ZPESTPYW.mjs";
import {
  __commonJS,
  __name,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js
var require_request_cookies = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    __name(_export, "_export");
    _export(exports, {
      MutableRequestCookiesAdapter: /* @__PURE__ */ __name(function() {
        return MutableRequestCookiesAdapter;
      }, "MutableRequestCookiesAdapter"),
      ReadonlyRequestCookiesError: /* @__PURE__ */ __name(function() {
        return ReadonlyRequestCookiesError;
      }, "ReadonlyRequestCookiesError"),
      RequestCookiesAdapter: /* @__PURE__ */ __name(function() {
        return RequestCookiesAdapter;
      }, "RequestCookiesAdapter"),
      appendMutableCookies: /* @__PURE__ */ __name(function() {
        return appendMutableCookies;
      }, "appendMutableCookies"),
      areCookiesMutableInCurrentPhase: /* @__PURE__ */ __name(function() {
        return areCookiesMutableInCurrentPhase;
      }, "areCookiesMutableInCurrentPhase"),
      createCookiesWithMutableAccessCheck: /* @__PURE__ */ __name(function() {
        return createCookiesWithMutableAccessCheck;
      }, "createCookiesWithMutableAccessCheck"),
      getModifiedCookieValues: /* @__PURE__ */ __name(function() {
        return getModifiedCookieValues;
      }, "getModifiedCookieValues"),
      responseCookiesToRequestCookies: /* @__PURE__ */ __name(function() {
        return responseCookiesToRequestCookies;
      }, "responseCookiesToRequestCookies")
    });
    var _cookies = require_cookies();
    var _reflect = require_reflect();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var ReadonlyRequestCookiesError = class _ReadonlyRequestCookiesError extends Error {
      static {
        __name(this, "ReadonlyRequestCookiesError");
      }
      constructor() {
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
      }
      static callable() {
        throw new _ReadonlyRequestCookiesError();
      }
    };
    var RequestCookiesAdapter = class {
      static {
        __name(this, "RequestCookiesAdapter");
      }
      static seal(cookies) {
        return new Proxy(cookies, {
          get(target, prop, receiver) {
            switch (prop) {
              case "clear":
              case "delete":
              case "set":
                return ReadonlyRequestCookiesError.callable;
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
      }
    };
    var SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
    function getModifiedCookieValues(cookies) {
      const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
      if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
      }
      return modified;
    }
    __name(getModifiedCookieValues, "getModifiedCookieValues");
    function appendMutableCookies(headers, mutableCookies) {
      const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
      if (modifiedCookieValues.length === 0) {
        return false;
      }
      const resCookies = new _cookies.ResponseCookies(headers);
      const returnedCookies = resCookies.getAll();
      for (const cookie of modifiedCookieValues) {
        resCookies.set(cookie);
      }
      for (const cookie of returnedCookies) {
        resCookies.set(cookie);
      }
      return true;
    }
    __name(appendMutableCookies, "appendMutableCookies");
    var MutableRequestCookiesAdapter = class {
      static {
        __name(this, "MutableRequestCookiesAdapter");
      }
      static wrap(cookies, onUpdateCookies) {
        const responseCookies = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()) {
          responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = /* @__PURE__ */ new Set();
        const updateResponseCookies = /* @__PURE__ */ __name(() => {
          const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
          if (workStore) {
            workStore.pathWasRevalidated = true;
          }
          const allCookies = responseCookies.getAll();
          modifiedValues = allCookies.filter((c) => modifiedCookies.has(c.name));
          if (onUpdateCookies) {
            const serializedCookies = [];
            for (const cookie of modifiedValues) {
              const tempCookies = new _cookies.ResponseCookies(new Headers());
              tempCookies.set(cookie);
              serializedCookies.push(tempCookies.toString());
            }
            onUpdateCookies(serializedCookies);
          }
        }, "updateResponseCookies");
        const wrappedCookies = new Proxy(responseCookies, {
          get(target, prop, receiver) {
            switch (prop) {
              // A special symbol to get the modified cookie values
              case SYMBOL_MODIFY_COOKIE_VALUES:
                return modifiedValues;
              // TODO: Throw error if trying to set a cookie after the response
              // headers have been set.
              case "delete":
                return function(...args) {
                  modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                  try {
                    target.delete(...args);
                    return wrappedCookies;
                  } finally {
                    updateResponseCookies();
                  }
                };
              case "set":
                return function(...args) {
                  modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                  try {
                    target.set(...args);
                    return wrappedCookies;
                  } finally {
                    updateResponseCookies();
                  }
                };
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
        return wrappedCookies;
      }
    };
    function createCookiesWithMutableAccessCheck(requestStore) {
      const wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get(target, prop, receiver) {
          switch (prop) {
            case "delete":
              return function(...args) {
                ensureCookiesAreStillMutable(requestStore, "cookies().delete");
                target.delete(...args);
                return wrappedCookies;
              };
            case "set":
              return function(...args) {
                ensureCookiesAreStillMutable(requestStore, "cookies().set");
                target.set(...args);
                return wrappedCookies;
              };
            default:
              return _reflect.ReflectAdapter.get(target, prop, receiver);
          }
        }
      });
      return wrappedCookies;
    }
    __name(createCookiesWithMutableAccessCheck, "createCookiesWithMutableAccessCheck");
    function areCookiesMutableInCurrentPhase(requestStore) {
      return requestStore.phase === "action";
    }
    __name(areCookiesMutableInCurrentPhase, "areCookiesMutableInCurrentPhase");
    function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
      if (!areCookiesMutableInCurrentPhase(requestStore)) {
        throw new ReadonlyRequestCookiesError();
      }
    }
    __name(ensureCookiesAreStillMutable, "ensureCookiesAreStillMutable");
    function responseCookiesToRequestCookies(responseCookies) {
      const requestCookies = new _cookies.RequestCookies(new Headers());
      for (const cookie of responseCookies.getAll()) {
        requestCookies.set(cookie);
      }
      return requestCookies;
    }
    __name(responseCookiesToRequestCookies, "responseCookiesToRequestCookies");
  }
});

// node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js
var require_create_deduped_by_callsite_server_error_logger = __commonJS({
  "node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
      }, "get")
    });
    var _react = /* @__PURE__ */ _interop_require_wildcard(require_react());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = /* @__PURE__ */ __name(function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      }, "_getRequireWildcardCache"))(nodeInterop);
    }
    __name(_getRequireWildcardCache, "_getRequireWildcardCache");
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
          default: obj
        };
      }
      var cache2 = _getRequireWildcardCache(nodeInterop);
      if (cache2 && cache2.has(obj)) {
        return cache2.get(obj);
      }
      var newObj = {
        __proto__: null
      };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache2) {
        cache2.set(obj, newObj);
      }
      return newObj;
    }
    __name(_interop_require_wildcard, "_interop_require_wildcard");
    var errorRef = {
      current: null
    };
    var cache = typeof _react.cache === "function" ? _react.cache : (fn) => fn;
    var logErrorOrWarn = process.env.__NEXT_CACHE_COMPONENTS ? console.error : console.warn;
    var flushCurrentErrorIfNew = cache(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars -- cache key
      (key) => {
        try {
          logErrorOrWarn(errorRef.current);
        } finally {
          errorRef.current = null;
        }
      }
    );
    function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
      return /* @__PURE__ */ __name(function logDedupedError(...args) {
        const message = getMessage(...args);
        if (process.env.NODE_ENV !== "production") {
          var _stack;
          const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split("\n");
          if (callStackFrames === void 0 || callStackFrames.length < 4) {
            logErrorOrWarn(message);
          } else {
            const key = callStackFrames[4];
            errorRef.current = message;
            flushCurrentErrorIfNew(key);
          }
        } else {
          logErrorOrWarn(message);
        }
      }, "logDedupedError");
    }
    __name(createDedupedByCallsiteServerErrorLoggerDev, "createDedupedByCallsiteServerErrorLoggerDev");
  }
});

// node_modules/next/dist/server/request/cookies.js
var require_cookies2 = __commonJS({
  "node_modules/next/dist/server/request/cookies.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "cookies", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return cookies;
      }, "get")
    });
    var _requestcookies = require_request_cookies();
    var _cookies = require_cookies();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _dynamicrendering = require_dynamic_rendering();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _creatededupedbycallsiteservererrorlogger = require_create_deduped_by_callsite_server_error_logger();
    var _utils = require_utils();
    var _invarianterror = require_invariant_error();
    var _reflect = require_reflect();
    function cookies() {
      const callingExpression = "cookies";
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore) {
        if (workUnitStore && workUnitStore.phase === "after" && !(0, _utils.isRequestAPICallableInsideAfter)()) {
          throw Object.defineProperty(new Error(
            // TODO(after): clarify that this only applies to pages?
            `Route ${workStore.route} used "cookies" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "cookies" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`
          ), "__NEXT_ERROR_CODE", {
            value: "E88",
            enumerable: false,
            configurable: true
          });
        }
        if (workStore.forceStatic) {
          const underlyingCookies = createEmptyCookies();
          return makeUntrackedExoticCookies(underlyingCookies);
        }
        if (workStore.dynamicShouldError) {
          throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E549",
            enumerable: false,
            configurable: true
          });
        }
        if (workUnitStore) {
          switch (workUnitStore.type) {
            case "cache":
              const error = Object.defineProperty(new Error(`Route ${workStore.route} used "cookies" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E398",
                enumerable: false,
                configurable: true
              });
              Error.captureStackTrace(error, cookies);
              workStore.invalidDynamicUsageError ??= error;
              throw error;
            case "unstable-cache":
              throw Object.defineProperty(new Error(`Route ${workStore.route} used "cookies" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                value: "E157",
                enumerable: false,
                configurable: true
              });
            case "prerender":
              return makeHangingCookies(workStore, workUnitStore);
            case "prerender-client":
              const exportName = "`cookies`";
              throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E693",
                enumerable: false,
                configurable: true
              });
            case "prerender-ppr":
              return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
            case "prerender-legacy":
              return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
            case "prerender-runtime":
              return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedCookies(workUnitStore.cookies));
            case "private-cache":
              if (process.env.__NEXT_CACHE_COMPONENTS) {
                return makeUntrackedCookies(workUnitStore.cookies);
              }
              return makeUntrackedExoticCookies(workUnitStore.cookies);
            case "request":
              (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
              let underlyingCookies;
              if ((0, _requestcookies.areCookiesMutableInCurrentPhase)(workUnitStore)) {
                underlyingCookies = workUnitStore.userspaceMutableCookies;
              } else {
                underlyingCookies = workUnitStore.cookies;
              }
              if (process.env.NODE_ENV === "development") {
                if (process.env.__NEXT_CACHE_COMPONENTS) {
                  return makeUntrackedCookiesWithDevWarnings(underlyingCookies, workStore == null ? void 0 : workStore.route);
                }
                return makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, workStore == null ? void 0 : workStore.route);
              } else {
                if (process.env.__NEXT_CACHE_COMPONENTS) {
                  return makeUntrackedCookies(underlyingCookies);
                }
                return makeUntrackedExoticCookies(underlyingCookies);
              }
            default:
              workUnitStore;
          }
        }
      }
      (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
    }
    __name(cookies, "cookies");
    function createEmptyCookies() {
      return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
    }
    __name(createEmptyCookies, "createEmptyCookies");
    var CachedCookies = /* @__PURE__ */ new WeakMap();
    function makeHangingCookies(workStore, prerenderStore) {
      const cachedPromise = CachedCookies.get(prerenderStore);
      if (cachedPromise) {
        return cachedPromise;
      }
      const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, "`cookies()`");
      CachedCookies.set(prerenderStore, promise);
      return promise;
    }
    __name(makeHangingCookies, "makeHangingCookies");
    function makeUntrackedCookies(underlyingCookies) {
      const cachedCookies = CachedCookies.get(underlyingCookies);
      if (cachedCookies) {
        return cachedCookies;
      }
      const promise = Promise.resolve(underlyingCookies);
      CachedCookies.set(underlyingCookies, promise);
      return promise;
    }
    __name(makeUntrackedCookies, "makeUntrackedCookies");
    function makeUntrackedExoticCookies(underlyingCookies) {
      const cachedCookies = CachedCookies.get(underlyingCookies);
      if (cachedCookies) {
        return cachedCookies;
      }
      const promise = Promise.resolve(underlyingCookies);
      CachedCookies.set(underlyingCookies, promise);
      Object.defineProperties(promise, {
        [Symbol.iterator]: {
          value: underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].bind(underlyingCookies) : (
            // We should remove this and unify our cookies types. We could just let this continue to throw lazily
            // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
            // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
            // has extra properties not available on RequestCookie instances.
            polyfilledResponseCookiesIterator.bind(underlyingCookies)
          )
        },
        size: {
          get() {
            return underlyingCookies.size;
          }
        },
        get: {
          value: underlyingCookies.get.bind(underlyingCookies)
        },
        getAll: {
          value: underlyingCookies.getAll.bind(underlyingCookies)
        },
        has: {
          value: underlyingCookies.has.bind(underlyingCookies)
        },
        set: {
          value: underlyingCookies.set.bind(underlyingCookies)
        },
        delete: {
          value: underlyingCookies.delete.bind(underlyingCookies)
        },
        clear: {
          value: (
            // @ts-expect-error clear is defined in RequestCookies implementation but not in the type
            typeof underlyingCookies.clear === "function" ? underlyingCookies.clear.bind(underlyingCookies) : (
              // We should remove this and unify our cookies types. We could just let this continue to throw lazily
              // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
              // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
              // has extra properties not available on RequestCookie instances.
              polyfilledResponseCookiesClear.bind(underlyingCookies, promise)
            )
          )
        },
        toString: {
          value: underlyingCookies.toString.bind(underlyingCookies)
        }
      });
      return promise;
    }
    __name(makeUntrackedExoticCookies, "makeUntrackedExoticCookies");
    function makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, route) {
      const cachedCookies = CachedCookies.get(underlyingCookies);
      if (cachedCookies) {
        return cachedCookies;
      }
      const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingCookies);
      CachedCookies.set(underlyingCookies, promise);
      Object.defineProperties(promise, {
        [Symbol.iterator]: {
          value: /* @__PURE__ */ __name(function() {
            const expression = "`...cookies()` or similar iteration";
            syncIODev(route, expression);
            return underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].apply(underlyingCookies, arguments) : (
              // We should remove this and unify our cookies types. We could just let this continue to throw lazily
              // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
              // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
              // has extra properties not available on RequestCookie instances.
              polyfilledResponseCookiesIterator.call(underlyingCookies)
            );
          }, "value"),
          writable: false
        },
        size: {
          get() {
            const expression = "`cookies().size`";
            syncIODev(route, expression);
            return underlyingCookies.size;
          }
        },
        get: {
          value: /* @__PURE__ */ __name(function get() {
            let expression;
            if (arguments.length === 0) {
              expression = "`cookies().get()`";
            } else {
              expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
            }
            syncIODev(route, expression);
            return underlyingCookies.get.apply(underlyingCookies, arguments);
          }, "get"),
          writable: false
        },
        getAll: {
          value: /* @__PURE__ */ __name(function getAll() {
            let expression;
            if (arguments.length === 0) {
              expression = "`cookies().getAll()`";
            } else {
              expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
            }
            syncIODev(route, expression);
            return underlyingCookies.getAll.apply(underlyingCookies, arguments);
          }, "getAll"),
          writable: false
        },
        has: {
          value: /* @__PURE__ */ __name(function get() {
            let expression;
            if (arguments.length === 0) {
              expression = "`cookies().has()`";
            } else {
              expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
            }
            syncIODev(route, expression);
            return underlyingCookies.has.apply(underlyingCookies, arguments);
          }, "get"),
          writable: false
        },
        set: {
          value: /* @__PURE__ */ __name(function set() {
            let expression;
            if (arguments.length === 0) {
              expression = "`cookies().set()`";
            } else {
              const arg = arguments[0];
              if (arg) {
                expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
              } else {
                expression = "`cookies().set(...)`";
              }
            }
            syncIODev(route, expression);
            return underlyingCookies.set.apply(underlyingCookies, arguments);
          }, "set"),
          writable: false
        },
        delete: {
          value: /* @__PURE__ */ __name(function() {
            let expression;
            if (arguments.length === 0) {
              expression = "`cookies().delete()`";
            } else if (arguments.length === 1) {
              expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
            } else {
              expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
            }
            syncIODev(route, expression);
            return underlyingCookies.delete.apply(underlyingCookies, arguments);
          }, "value"),
          writable: false
        },
        clear: {
          value: /* @__PURE__ */ __name(function clear() {
            const expression = "`cookies().clear()`";
            syncIODev(route, expression);
            return typeof underlyingCookies.clear === "function" ? underlyingCookies.clear.apply(underlyingCookies, arguments) : (
              // We should remove this and unify our cookies types. We could just let this continue to throw lazily
              // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
              // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
              // has extra properties not available on RequestCookie instances.
              polyfilledResponseCookiesClear.call(underlyingCookies, promise)
            );
          }, "clear"),
          writable: false
        },
        toString: {
          value: /* @__PURE__ */ __name(function toString() {
            const expression = "`cookies().toString()` or implicit casting";
            syncIODev(route, expression);
            return underlyingCookies.toString.apply(underlyingCookies, arguments);
          }, "toString"),
          writable: false
        }
      });
      return promise;
    }
    __name(makeUntrackedExoticCookiesWithDevWarnings, "makeUntrackedExoticCookiesWithDevWarnings");
    function makeUntrackedCookiesWithDevWarnings(underlyingCookies, route) {
      const cachedCookies = CachedCookies.get(underlyingCookies);
      if (cachedCookies) {
        return cachedCookies;
      }
      const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingCookies);
      const proxiedPromise = new Proxy(promise, {
        get(target, prop, receiver) {
          switch (prop) {
            case Symbol.iterator: {
              warnForSyncAccess(route, "`...cookies()` or similar iteration");
              break;
            }
            case "size":
            case "get":
            case "getAll":
            case "has":
            case "set":
            case "delete":
            case "clear":
            case "toString": {
              warnForSyncAccess(route, `\`cookies().${prop}\``);
              break;
            }
            default: {
            }
          }
          return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
      });
      CachedCookies.set(underlyingCookies, proxiedPromise);
      return proxiedPromise;
    }
    __name(makeUntrackedCookiesWithDevWarnings, "makeUntrackedCookiesWithDevWarnings");
    function describeNameArg(arg) {
      return typeof arg === "object" && arg !== null && typeof arg.name === "string" ? `'${arg.name}'` : typeof arg === "string" ? `'${arg}'` : "...";
    }
    __name(describeNameArg, "describeNameArg");
    function syncIODev(route, expression) {
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "request":
            if (workUnitStore.prerenderPhase === true) {
              (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(workUnitStore);
            }
            break;
          case "prerender":
          case "prerender-client":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-legacy":
          case "cache":
          case "private-cache":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
      warnForSyncAccess(route, expression);
    }
    __name(syncIODev, "syncIODev");
    var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createCookiesAccessError);
    function createCookiesAccessError(route, expression) {
      const prefix = route ? `Route "${route}" ` : "This route ";
      return Object.defineProperty(new Error(`${prefix}used ${expression}. \`cookies()\` should be awaited before using its value. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E223",
        enumerable: false,
        configurable: true
      });
    }
    __name(createCookiesAccessError, "createCookiesAccessError");
    function polyfilledResponseCookiesIterator() {
      return this.getAll().map((c) => [
        c.name,
        c
      ]).values();
    }
    __name(polyfilledResponseCookiesIterator, "polyfilledResponseCookiesIterator");
    function polyfilledResponseCookiesClear(returnable) {
      for (const cookie of this.getAll()) {
        this.delete(cookie.name);
      }
      return returnable;
    }
    __name(polyfilledResponseCookiesClear, "polyfilledResponseCookiesClear");
  }
});

// node_modules/next/dist/server/web/spec-extension/adapters/headers.js
var require_headers = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/adapters/headers.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    __name(_export, "_export");
    _export(exports, {
      HeadersAdapter: /* @__PURE__ */ __name(function() {
        return HeadersAdapter;
      }, "HeadersAdapter"),
      ReadonlyHeadersError: /* @__PURE__ */ __name(function() {
        return ReadonlyHeadersError;
      }, "ReadonlyHeadersError")
    });
    var _reflect = require_reflect();
    var ReadonlyHeadersError = class _ReadonlyHeadersError extends Error {
      static {
        __name(this, "ReadonlyHeadersError");
      }
      constructor() {
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
      }
      static callable() {
        throw new _ReadonlyHeadersError();
      }
    };
    var HeadersAdapter = class _HeadersAdapter extends Headers {
      static {
        __name(this, "HeadersAdapter");
      }
      constructor(headers) {
        super();
        this.headers = new Proxy(headers, {
          get(target, prop, receiver) {
            if (typeof prop === "symbol") {
              return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined") return;
            return _reflect.ReflectAdapter.get(target, original, receiver);
          },
          set(target, prop, value, receiver) {
            if (typeof prop === "symbol") {
              return _reflect.ReflectAdapter.set(target, prop, value, receiver);
            }
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
          },
          has(target, prop) {
            if (typeof prop === "symbol") return _reflect.ReflectAdapter.has(target, prop);
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined") return false;
            return _reflect.ReflectAdapter.has(target, original);
          },
          deleteProperty(target, prop) {
            if (typeof prop === "symbol") return _reflect.ReflectAdapter.deleteProperty(target, prop);
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined") return true;
            return _reflect.ReflectAdapter.deleteProperty(target, original);
          }
        });
      }
      /**
      * Seals a Headers instance to prevent modification by throwing an error when
      * any mutating method is called.
      */
      static seal(headers) {
        return new Proxy(headers, {
          get(target, prop, receiver) {
            switch (prop) {
              case "append":
              case "delete":
              case "set":
                return ReadonlyHeadersError.callable;
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
      }
      /**
      * Merges a header value into a string. This stores multiple values as an
      * array, so we need to merge them into a string.
      *
      * @param value a header value
      * @returns a merged header value (a string)
      */
      merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
      }
      /**
      * Creates a Headers instance from a plain object or a Headers instance.
      *
      * @param headers a plain object or a Headers instance
      * @returns a headers instance
      */
      static from(headers) {
        if (headers instanceof Headers) return headers;
        return new _HeadersAdapter(headers);
      }
      append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
          this.headers[name] = [
            existing,
            value
          ];
        } else if (Array.isArray(existing)) {
          existing.push(value);
        } else {
          this.headers[name] = value;
        }
      }
      delete(name) {
        delete this.headers[name];
      }
      get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
      }
      has(name) {
        return typeof this.headers[name] !== "undefined";
      }
      set(name, value) {
        this.headers[name] = value;
      }
      forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()) {
          callbackfn.call(thisArg, value, name, this);
        }
      }
      *entries() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          const value = this.get(name);
          yield [
            name,
            value
          ];
        }
      }
      *keys() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          yield name;
        }
      }
      *values() {
        for (const key of Object.keys(this.headers)) {
          const value = this.get(key);
          yield value;
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
  }
});

// node_modules/next/dist/server/request/headers.js
var require_headers2 = __commonJS({
  "node_modules/next/dist/server/request/headers.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "headers", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return headers;
      }, "get")
    });
    var _headers = require_headers();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _dynamicrendering = require_dynamic_rendering();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _creatededupedbycallsiteservererrorlogger = require_create_deduped_by_callsite_server_error_logger();
    var _utils = require_utils();
    var _invarianterror = require_invariant_error();
    var _reflect = require_reflect();
    function headers() {
      const callingExpression = "headers";
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore) {
        if (workUnitStore && workUnitStore.phase === "after" && !(0, _utils.isRequestAPICallableInsideAfter)()) {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "headers" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
            value: "E367",
            enumerable: false,
            configurable: true
          });
        }
        if (workStore.forceStatic) {
          const underlyingHeaders = _headers.HeadersAdapter.seal(new Headers({}));
          return makeUntrackedExoticHeaders(underlyingHeaders);
        }
        if (workUnitStore) {
          switch (workUnitStore.type) {
            case "cache": {
              const error = Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E304",
                enumerable: false,
                configurable: true
              });
              Error.captureStackTrace(error, headers);
              workStore.invalidDynamicUsageError ??= error;
              throw error;
            }
            case "private-cache": {
              const error = Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside "use cache: private". Accessing "headers" inside a private cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E742",
                enumerable: false,
                configurable: true
              });
              Error.captureStackTrace(error, headers);
              workStore.invalidDynamicUsageError ??= error;
              throw error;
            }
            case "unstable-cache":
              throw Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                value: "E127",
                enumerable: false,
                configurable: true
              });
            case "prerender":
            case "prerender-client":
            case "prerender-runtime":
            case "prerender-ppr":
            case "prerender-legacy":
            case "request":
              break;
            default:
              workUnitStore;
          }
        }
        if (workStore.dynamicShouldError) {
          throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E525",
            enumerable: false,
            configurable: true
          });
        }
        if (workUnitStore) {
          switch (workUnitStore.type) {
            case "prerender":
            case "prerender-runtime":
              return makeHangingHeaders(workStore, workUnitStore);
            case "prerender-client":
              const exportName = "`headers`";
              throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E693",
                enumerable: false,
                configurable: true
              });
            case "prerender-ppr":
              return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
            case "prerender-legacy":
              return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
            case "request":
              (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
              if (process.env.NODE_ENV === "development") {
                if (process.env.__NEXT_CACHE_COMPONENTS) {
                  return makeUntrackedHeadersWithDevWarnings(workUnitStore.headers, workStore == null ? void 0 : workStore.route);
                }
                return makeUntrackedExoticHeadersWithDevWarnings(workUnitStore.headers, workStore == null ? void 0 : workStore.route);
              } else {
                if (process.env.__NEXT_CACHE_COMPONENTS) {
                  return makeUntrackedHeaders(workUnitStore.headers);
                }
                return makeUntrackedExoticHeaders(workUnitStore.headers);
              }
              break;
            default:
              workUnitStore;
          }
        }
      }
      (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
    }
    __name(headers, "headers");
    var CachedHeaders = /* @__PURE__ */ new WeakMap();
    function makeHangingHeaders(workStore, prerenderStore) {
      const cachedHeaders = CachedHeaders.get(prerenderStore);
      if (cachedHeaders) {
        return cachedHeaders;
      }
      const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, "`headers()`");
      CachedHeaders.set(prerenderStore, promise);
      return promise;
    }
    __name(makeHangingHeaders, "makeHangingHeaders");
    function makeUntrackedHeaders(underlyingHeaders) {
      const cachedHeaders = CachedHeaders.get(underlyingHeaders);
      if (cachedHeaders) {
        return cachedHeaders;
      }
      const promise = Promise.resolve(underlyingHeaders);
      CachedHeaders.set(underlyingHeaders, promise);
      return promise;
    }
    __name(makeUntrackedHeaders, "makeUntrackedHeaders");
    function makeUntrackedExoticHeaders(underlyingHeaders) {
      const cachedHeaders = CachedHeaders.get(underlyingHeaders);
      if (cachedHeaders) {
        return cachedHeaders;
      }
      const promise = Promise.resolve(underlyingHeaders);
      CachedHeaders.set(underlyingHeaders, promise);
      Object.defineProperties(promise, {
        append: {
          value: underlyingHeaders.append.bind(underlyingHeaders)
        },
        delete: {
          value: underlyingHeaders.delete.bind(underlyingHeaders)
        },
        get: {
          value: underlyingHeaders.get.bind(underlyingHeaders)
        },
        has: {
          value: underlyingHeaders.has.bind(underlyingHeaders)
        },
        set: {
          value: underlyingHeaders.set.bind(underlyingHeaders)
        },
        getSetCookie: {
          value: underlyingHeaders.getSetCookie.bind(underlyingHeaders)
        },
        forEach: {
          value: underlyingHeaders.forEach.bind(underlyingHeaders)
        },
        keys: {
          value: underlyingHeaders.keys.bind(underlyingHeaders)
        },
        values: {
          value: underlyingHeaders.values.bind(underlyingHeaders)
        },
        entries: {
          value: underlyingHeaders.entries.bind(underlyingHeaders)
        },
        [Symbol.iterator]: {
          value: underlyingHeaders[Symbol.iterator].bind(underlyingHeaders)
        }
      });
      return promise;
    }
    __name(makeUntrackedExoticHeaders, "makeUntrackedExoticHeaders");
    function makeUntrackedExoticHeadersWithDevWarnings(underlyingHeaders, route) {
      const cachedHeaders = CachedHeaders.get(underlyingHeaders);
      if (cachedHeaders) {
        return cachedHeaders;
      }
      const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingHeaders);
      CachedHeaders.set(underlyingHeaders, promise);
      Object.defineProperties(promise, {
        append: {
          value: /* @__PURE__ */ __name(function append() {
            const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
            syncIODev(route, expression);
            return underlyingHeaders.append.apply(underlyingHeaders, arguments);
          }, "append")
        },
        delete: {
          value: /* @__PURE__ */ __name(function _delete() {
            const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
            syncIODev(route, expression);
            return underlyingHeaders.delete.apply(underlyingHeaders, arguments);
          }, "_delete")
        },
        get: {
          value: /* @__PURE__ */ __name(function get() {
            const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
            syncIODev(route, expression);
            return underlyingHeaders.get.apply(underlyingHeaders, arguments);
          }, "get")
        },
        has: {
          value: /* @__PURE__ */ __name(function has() {
            const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
            syncIODev(route, expression);
            return underlyingHeaders.has.apply(underlyingHeaders, arguments);
          }, "has")
        },
        set: {
          value: /* @__PURE__ */ __name(function set() {
            const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
            syncIODev(route, expression);
            return underlyingHeaders.set.apply(underlyingHeaders, arguments);
          }, "set")
        },
        getSetCookie: {
          value: /* @__PURE__ */ __name(function getSetCookie() {
            const expression = "`headers().getSetCookie()`";
            syncIODev(route, expression);
            return underlyingHeaders.getSetCookie.apply(underlyingHeaders, arguments);
          }, "getSetCookie")
        },
        forEach: {
          value: /* @__PURE__ */ __name(function forEach() {
            const expression = "`headers().forEach(...)`";
            syncIODev(route, expression);
            return underlyingHeaders.forEach.apply(underlyingHeaders, arguments);
          }, "forEach")
        },
        keys: {
          value: /* @__PURE__ */ __name(function keys() {
            const expression = "`headers().keys()`";
            syncIODev(route, expression);
            return underlyingHeaders.keys.apply(underlyingHeaders, arguments);
          }, "keys")
        },
        values: {
          value: /* @__PURE__ */ __name(function values() {
            const expression = "`headers().values()`";
            syncIODev(route, expression);
            return underlyingHeaders.values.apply(underlyingHeaders, arguments);
          }, "values")
        },
        entries: {
          value: /* @__PURE__ */ __name(function entries() {
            const expression = "`headers().entries()`";
            syncIODev(route, expression);
            return underlyingHeaders.entries.apply(underlyingHeaders, arguments);
          }, "entries")
        },
        [Symbol.iterator]: {
          value: /* @__PURE__ */ __name(function() {
            const expression = "`...headers()` or similar iteration";
            syncIODev(route, expression);
            return underlyingHeaders[Symbol.iterator].apply(underlyingHeaders, arguments);
          }, "value")
        }
      });
      return promise;
    }
    __name(makeUntrackedExoticHeadersWithDevWarnings, "makeUntrackedExoticHeadersWithDevWarnings");
    function makeUntrackedHeadersWithDevWarnings(underlyingHeaders, route) {
      const cachedHeaders = CachedHeaders.get(underlyingHeaders);
      if (cachedHeaders) {
        return cachedHeaders;
      }
      const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingHeaders);
      const proxiedPromise = new Proxy(promise, {
        get(target, prop, receiver) {
          switch (prop) {
            case Symbol.iterator: {
              warnForSyncAccess(route, "`...headers()` or similar iteration");
              break;
            }
            case "append":
            case "delete":
            case "get":
            case "has":
            case "set":
            case "getSetCookie":
            case "forEach":
            case "keys":
            case "values":
            case "entries": {
              warnForSyncAccess(route, `\`headers().${prop}\``);
              break;
            }
            default: {
            }
          }
          return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
      });
      CachedHeaders.set(underlyingHeaders, proxiedPromise);
      return proxiedPromise;
    }
    __name(makeUntrackedHeadersWithDevWarnings, "makeUntrackedHeadersWithDevWarnings");
    function describeNameArg(arg) {
      return typeof arg === "string" ? `'${arg}'` : "...";
    }
    __name(describeNameArg, "describeNameArg");
    function syncIODev(route, expression) {
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "request":
            if (workUnitStore.prerenderPhase === true) {
              (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(workUnitStore);
            }
            break;
          case "prerender":
          case "prerender-client":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-legacy":
          case "cache":
          case "private-cache":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
      warnForSyncAccess(route, expression);
    }
    __name(syncIODev, "syncIODev");
    var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createHeadersAccessError);
    function createHeadersAccessError(route, expression) {
      const prefix = route ? `Route "${route}" ` : "This route ";
      return Object.defineProperty(new Error(`${prefix}used ${expression}. \`headers()\` should be awaited before using its value. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E277",
        enumerable: false,
        configurable: true
      });
    }
    __name(createHeadersAccessError, "createHeadersAccessError");
  }
});

// node_modules/next/dist/server/request/draft-mode.js
var require_draft_mode = __commonJS({
  "node_modules/next/dist/server/request/draft-mode.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "draftMode", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return draftMode;
      }, "get")
    });
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _dynamicrendering = require_dynamic_rendering();
    var _creatededupedbycallsiteservererrorlogger = require_create_deduped_by_callsite_server_error_logger();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _hooksservercontext = require_hooks_server_context();
    var _invarianterror = require_invariant_error();
    var _reflect = require_reflect();
    function draftMode() {
      const callingExpression = "draftMode";
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (!workStore || !workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
      }
      switch (workUnitStore.type) {
        case "prerender-runtime":
          return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, createOrGetCachedDraftMode(workUnitStore.draftMode, workStore));
        case "request":
          return createOrGetCachedDraftMode(workUnitStore.draftMode, workStore);
        case "cache":
        case "private-cache":
        case "unstable-cache":
          const draftModeProvider = (0, _workunitasyncstorageexternal.getDraftModeProviderForCacheScope)(workStore, workUnitStore);
          if (draftModeProvider) {
            return createOrGetCachedDraftMode(draftModeProvider, workStore);
          }
        // Otherwise, we fall through to providing an empty draft mode.
        // eslint-disable-next-line no-fallthrough
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
          return createOrGetCachedDraftMode(null, workStore);
        default:
          return workUnitStore;
      }
    }
    __name(draftMode, "draftMode");
    function createOrGetCachedDraftMode(draftModeProvider, workStore) {
      const cacheKey = draftModeProvider ?? NullDraftMode;
      const cachedDraftMode = CachedDraftModes.get(cacheKey);
      if (cachedDraftMode) {
        return cachedDraftMode;
      }
      let promise;
      if (process.env.NODE_ENV === "development" && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        const route = workStore == null ? void 0 : workStore.route;
        if (process.env.__NEXT_CACHE_COMPONENTS) {
          return createDraftModeWithDevWarnings(draftModeProvider, route);
        }
        promise = createExoticDraftModeWithDevWarnings(draftModeProvider, route);
      } else {
        if (process.env.__NEXT_CACHE_COMPONENTS) {
          return Promise.resolve(new DraftMode(draftModeProvider));
        }
        promise = createExoticDraftMode(draftModeProvider);
      }
      CachedDraftModes.set(cacheKey, promise);
      return promise;
    }
    __name(createOrGetCachedDraftMode, "createOrGetCachedDraftMode");
    var NullDraftMode = {};
    var CachedDraftModes = /* @__PURE__ */ new WeakMap();
    function createExoticDraftMode(underlyingProvider) {
      const instance = new DraftMode(underlyingProvider);
      const promise = Promise.resolve(instance);
      Object.defineProperty(promise, "isEnabled", {
        get() {
          return instance.isEnabled;
        },
        enumerable: true,
        configurable: true
      });
      promise.enable = instance.enable.bind(instance);
      promise.disable = instance.disable.bind(instance);
      return promise;
    }
    __name(createExoticDraftMode, "createExoticDraftMode");
    function createExoticDraftModeWithDevWarnings(underlyingProvider, route) {
      const instance = new DraftMode(underlyingProvider);
      const promise = Promise.resolve(instance);
      Object.defineProperty(promise, "isEnabled", {
        get() {
          const expression = "`draftMode().isEnabled`";
          syncIODev(route, expression);
          return instance.isEnabled;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(promise, "enable", {
        value: /* @__PURE__ */ __name(function get() {
          const expression = "`draftMode().enable()`";
          syncIODev(route, expression);
          return instance.enable.apply(instance, arguments);
        }, "get")
      });
      Object.defineProperty(promise, "disable", {
        value: /* @__PURE__ */ __name(function get() {
          const expression = "`draftMode().disable()`";
          syncIODev(route, expression);
          return instance.disable.apply(instance, arguments);
        }, "get")
      });
      return promise;
    }
    __name(createExoticDraftModeWithDevWarnings, "createExoticDraftModeWithDevWarnings");
    function createDraftModeWithDevWarnings(underlyingProvider, route) {
      const instance = new DraftMode(underlyingProvider);
      const promise = Promise.resolve(instance);
      const proxiedPromise = new Proxy(promise, {
        get(target, prop, receiver) {
          switch (prop) {
            case "isEnabled":
              warnForSyncAccess(route, `\`draftMode().${prop}\``);
              break;
            case "enable":
            case "disable": {
              warnForSyncAccess(route, `\`draftMode().${prop}()\``);
              break;
            }
            default: {
            }
          }
          return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
      });
      return proxiedPromise;
    }
    __name(createDraftModeWithDevWarnings, "createDraftModeWithDevWarnings");
    var DraftMode = class {
      static {
        __name(this, "DraftMode");
      }
      constructor(provider) {
        this._provider = provider;
      }
      get isEnabled() {
        if (this._provider !== null) {
          return this._provider.isEnabled;
        }
        return false;
      }
      enable() {
        trackDynamicDraftMode("draftMode().enable()", this.enable);
        if (this._provider !== null) {
          this._provider.enable();
        }
      }
      disable() {
        trackDynamicDraftMode("draftMode().disable()", this.disable);
        if (this._provider !== null) {
          this._provider.disable();
        }
      }
    };
    function syncIODev(route, expression) {
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "request":
            if (workUnitStore.prerenderPhase === true) {
              (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(workUnitStore);
            }
            break;
          case "prerender":
          case "prerender-client":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-legacy":
          case "cache":
          case "private-cache":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
      warnForSyncAccess(route, expression);
    }
    __name(syncIODev, "syncIODev");
    var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createDraftModeAccessError);
    function createDraftModeAccessError(route, expression) {
      const prefix = route ? `Route "${route}" ` : "This route ";
      return Object.defineProperty(new Error(`${prefix}used ${expression}. \`draftMode()\` should be awaited before using its value. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E377",
        enumerable: false,
        configurable: true
      });
    }
    __name(createDraftModeAccessError, "createDraftModeAccessError");
    function trackDynamicDraftMode(expression, constructorOpt) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore) {
        if ((workUnitStore == null ? void 0 : workUnitStore.phase) === "after") {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside \`after\`. The enabled status of draftMode can be read inside \`after\` but you cannot enable or disable draftMode. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
            value: "E348",
            enumerable: false,
            configurable: true
          });
        }
        if (workStore.dynamicShouldError) {
          throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
          });
        }
        if (workUnitStore) {
          switch (workUnitStore.type) {
            case "cache":
            case "private-cache": {
              const error = Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside "use cache". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E246",
                enumerable: false,
                configurable: true
              });
              Error.captureStackTrace(error, constructorOpt);
              workStore.invalidDynamicUsageError ??= error;
              throw error;
            }
            case "unstable-cache":
              throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside a function cached with "unstable_cache(...)". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                value: "E259",
                enumerable: false,
                configurable: true
              });
            case "prerender":
            case "prerender-runtime": {
              const error = Object.defineProperty(new Error(`Route ${workStore.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`), "__NEXT_ERROR_CODE", {
                value: "E126",
                enumerable: false,
                configurable: true
              });
              return (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(workStore.route, expression, error, workUnitStore);
            }
            case "prerender-client":
              const exportName = "`draftMode`";
              throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E693",
                enumerable: false,
                configurable: true
              });
            case "prerender-ppr":
              return (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, workUnitStore.dynamicTracking);
            case "prerender-legacy":
              workUnitStore.revalidate = 0;
              const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${workStore.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                value: "E558",
                enumerable: false,
                configurable: true
              });
              workStore.dynamicUsageDescription = expression;
              workStore.dynamicUsageStack = err.stack;
              throw err;
            case "request":
              (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
              break;
            default:
              workUnitStore;
          }
        }
      }
    }
    __name(trackDynamicDraftMode, "trackDynamicDraftMode");
  }
});

// node_modules/next/headers.js
var require_headers3 = __commonJS({
  "node_modules/next/headers.js"(exports, module) {
    init_esm();
    module.exports.cookies = require_cookies2().cookies;
    module.exports.headers = require_headers2().headers;
    module.exports.draftMode = require_draft_mode().draftMode;
  }
});
export default require_headers3();
//# sourceMappingURL=headers-TE4BFOU7.mjs.map
