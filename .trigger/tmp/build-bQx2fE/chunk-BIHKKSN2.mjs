import {
  isNext16OrHigher,
  isNextWithUnstableServerActions,
  package_default
} from "./chunk-A76ZDJXN.mjs";
import {
  resolveRoleAlias
} from "./chunk-5QBTDJ2B.mjs";
import {
  LLMSelectorService,
  llm
} from "./chunk-4C4WQQUD.mjs";
import {
  getCountryName,
  isValidCountryCode
} from "./chunk-DXC2ORYG.mjs";
import {
  CacheKeys,
  CacheService,
  CacheTTL,
  ModuleActivityService,
  createNotification,
  import_client,
  prisma,
  require_action_async_storage_external,
  require_constants,
  require_default,
  require_log,
  require_lru_cache,
  require_request,
  require_server,
  require_utils
} from "./chunk-H7NAHCK2.mjs";
import {
  require_bailout_to_csr,
  require_dynamic_rendering,
  require_dynamic_rendering_utils,
  require_hooks_server_context,
  require_invariant_error,
  require_scheduler,
  require_work_async_storage_external,
  require_work_unit_async_storage_external
} from "./chunk-UQPM4TIK.mjs";
import {
  require_react
} from "./chunk-ZPESTPYW.mjs";
import {
  esm_exports,
  external_exports,
  init_esm as init_esm2,
  metadata,
  schemaTask
} from "./chunk-3HTFOM3X.mjs";
import {
  __commonJS,
  __esm,
  __export as __export2,
  __name,
  __toCommonJS,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require_interop_require_default = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports) {
    "use strict";
    init_esm();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    __name(_interop_require_default, "_interop_require_default");
    exports._ = _interop_require_default;
  }
});

// node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js
var require_app_router_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js"(exports) {
    "use client";
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
      AppRouterContext: /* @__PURE__ */ __name(function() {
        return AppRouterContext;
      }, "AppRouterContext"),
      GlobalLayoutRouterContext: /* @__PURE__ */ __name(function() {
        return GlobalLayoutRouterContext;
      }, "GlobalLayoutRouterContext"),
      LayoutRouterContext: /* @__PURE__ */ __name(function() {
        return LayoutRouterContext;
      }, "LayoutRouterContext"),
      MissingSlotContext: /* @__PURE__ */ __name(function() {
        return MissingSlotContext;
      }, "MissingSlotContext"),
      TemplateContext: /* @__PURE__ */ __name(function() {
        return TemplateContext;
      }, "TemplateContext")
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(require_react());
    var AppRouterContext = _react.default.createContext(null);
    var LayoutRouterContext = _react.default.createContext(null);
    var GlobalLayoutRouterContext = _react.default.createContext(null);
    var TemplateContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      AppRouterContext.displayName = "AppRouterContext";
      LayoutRouterContext.displayName = "LayoutRouterContext";
      GlobalLayoutRouterContext.displayName = "GlobalLayoutRouterContext";
      TemplateContext.displayName = "TemplateContext";
    }
    var MissingSlotContext = _react.default.createContext(/* @__PURE__ */ new Set());
  }
});

// node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js
var require_hooks_client_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js"(exports) {
    "use client";
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
      PathParamsContext: /* @__PURE__ */ __name(function() {
        return PathParamsContext;
      }, "PathParamsContext"),
      PathnameContext: /* @__PURE__ */ __name(function() {
        return PathnameContext;
      }, "PathnameContext"),
      SearchParamsContext: /* @__PURE__ */ __name(function() {
        return SearchParamsContext;
      }, "SearchParamsContext")
    });
    var _react = require_react();
    var SearchParamsContext = (0, _react.createContext)(null);
    var PathnameContext = (0, _react.createContext)(null);
    var PathParamsContext = (0, _react.createContext)(null);
    if (process.env.NODE_ENV !== "production") {
      SearchParamsContext.displayName = "SearchParamsContext";
      PathnameContext.displayName = "PathnameContext";
      PathParamsContext.displayName = "PathParamsContext";
    }
  }
});

// node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js
var require_get_segment_value = __commonJS({
  "node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js"(exports, module) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getSegmentValue", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return getSegmentValue;
      }, "get")
    });
    function getSegmentValue(segment) {
      return Array.isArray(segment) ? segment[1] : segment;
    }
    __name(getSegmentValue, "getSegmentValue");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/segment.js
var require_segment = __commonJS({
  "node_modules/next/dist/shared/lib/segment.js"(exports) {
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
      DEFAULT_SEGMENT_KEY: /* @__PURE__ */ __name(function() {
        return DEFAULT_SEGMENT_KEY;
      }, "DEFAULT_SEGMENT_KEY"),
      PAGE_SEGMENT_KEY: /* @__PURE__ */ __name(function() {
        return PAGE_SEGMENT_KEY;
      }, "PAGE_SEGMENT_KEY"),
      addSearchParamsIfPageSegment: /* @__PURE__ */ __name(function() {
        return addSearchParamsIfPageSegment;
      }, "addSearchParamsIfPageSegment"),
      isGroupSegment: /* @__PURE__ */ __name(function() {
        return isGroupSegment;
      }, "isGroupSegment"),
      isParallelRouteSegment: /* @__PURE__ */ __name(function() {
        return isParallelRouteSegment;
      }, "isParallelRouteSegment")
    });
    function isGroupSegment(segment) {
      return segment[0] === "(" && segment.endsWith(")");
    }
    __name(isGroupSegment, "isGroupSegment");
    function isParallelRouteSegment(segment) {
      return segment.startsWith("@") && segment !== "@children";
    }
    __name(isParallelRouteSegment, "isParallelRouteSegment");
    function addSearchParamsIfPageSegment(segment, searchParams) {
      const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
      if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== "{}" ? PAGE_SEGMENT_KEY + "?" + stringifiedQuery : PAGE_SEGMENT_KEY;
      }
      return segment;
    }
    __name(addSearchParamsIfPageSegment, "addSearchParamsIfPageSegment");
    var PAGE_SEGMENT_KEY = "__PAGE__";
    var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
  }
});

// node_modules/next/dist/client/components/redirect-status-code.js
var require_redirect_status_code = __commonJS({
  "node_modules/next/dist/client/components/redirect-status-code.js"(exports, module) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "RedirectStatusCode", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return RedirectStatusCode;
      }, "get")
    });
    var RedirectStatusCode = /* @__PURE__ */ function(RedirectStatusCode2) {
      RedirectStatusCode2[RedirectStatusCode2["SeeOther"] = 303] = "SeeOther";
      RedirectStatusCode2[RedirectStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
      RedirectStatusCode2[RedirectStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
      return RedirectStatusCode2;
    }({});
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/redirect-error.js
var require_redirect_error = __commonJS({
  "node_modules/next/dist/client/components/redirect-error.js"(exports, module) {
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
      REDIRECT_ERROR_CODE: /* @__PURE__ */ __name(function() {
        return REDIRECT_ERROR_CODE;
      }, "REDIRECT_ERROR_CODE"),
      RedirectType: /* @__PURE__ */ __name(function() {
        return RedirectType;
      }, "RedirectType"),
      isRedirectError: /* @__PURE__ */ __name(function() {
        return isRedirectError;
      }, "isRedirectError")
    });
    var _redirectstatuscode = require_redirect_status_code();
    var REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
    var RedirectType = /* @__PURE__ */ function(RedirectType2) {
      RedirectType2["push"] = "push";
      RedirectType2["replace"] = "replace";
      return RedirectType2;
    }({});
    function isRedirectError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
      }
      const digest = error.digest.split(";");
      const [errorCode, type] = digest;
      const destination = digest.slice(2, -2).join(";");
      const status = digest.at(-2);
      const statusCode = Number(status);
      return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
    }
    __name(isRedirectError, "isRedirectError");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/redirect.js
var require_redirect = __commonJS({
  "node_modules/next/dist/client/components/redirect.js"(exports, module) {
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
      getRedirectError: /* @__PURE__ */ __name(function() {
        return getRedirectError;
      }, "getRedirectError"),
      getRedirectStatusCodeFromError: /* @__PURE__ */ __name(function() {
        return getRedirectStatusCodeFromError;
      }, "getRedirectStatusCodeFromError"),
      getRedirectTypeFromError: /* @__PURE__ */ __name(function() {
        return getRedirectTypeFromError;
      }, "getRedirectTypeFromError"),
      getURLFromRedirectError: /* @__PURE__ */ __name(function() {
        return getURLFromRedirectError;
      }, "getURLFromRedirectError"),
      permanentRedirect: /* @__PURE__ */ __name(function() {
        return permanentRedirect;
      }, "permanentRedirect"),
      redirect: /* @__PURE__ */ __name(function() {
        return redirect2;
      }, "redirect")
    });
    var _redirectstatuscode = require_redirect_status_code();
    var _redirecterror = require_redirect_error();
    var actionAsyncStorage = typeof window === "undefined" ? require_action_async_storage_external().actionAsyncStorage : void 0;
    function getRedirectError(url, type, statusCode) {
      if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
      const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
      return error;
    }
    __name(getRedirectError, "getRedirectError");
    function redirect2(url, type) {
      var _actionAsyncStorage_getStore;
      type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
      throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
    }
    __name(redirect2, "redirect");
    function permanentRedirect(url, type) {
      if (type === void 0) type = _redirecterror.RedirectType.replace;
      throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
    }
    __name(permanentRedirect, "permanentRedirect");
    function getURLFromRedirectError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) return null;
      return error.digest.split(";").slice(2, -2).join(";");
    }
    __name(getURLFromRedirectError, "getURLFromRedirectError");
    function getRedirectTypeFromError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: false,
          configurable: true
        });
      }
      return error.digest.split(";", 2)[1];
    }
    __name(getRedirectTypeFromError, "getRedirectTypeFromError");
    function getRedirectStatusCodeFromError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: false,
          configurable: true
        });
      }
      return Number(error.digest.split(";").at(-2));
    }
    __name(getRedirectStatusCodeFromError, "getRedirectStatusCodeFromError");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js
var require_http_access_fallback = __commonJS({
  "node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js"(exports, module) {
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
      HTTPAccessErrorStatus: /* @__PURE__ */ __name(function() {
        return HTTPAccessErrorStatus;
      }, "HTTPAccessErrorStatus"),
      HTTP_ERROR_FALLBACK_ERROR_CODE: /* @__PURE__ */ __name(function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE2;
      }, "HTTP_ERROR_FALLBACK_ERROR_CODE"),
      getAccessFallbackErrorTypeByStatus: /* @__PURE__ */ __name(function() {
        return getAccessFallbackErrorTypeByStatus;
      }, "getAccessFallbackErrorTypeByStatus"),
      getAccessFallbackHTTPStatus: /* @__PURE__ */ __name(function() {
        return getAccessFallbackHTTPStatus;
      }, "getAccessFallbackHTTPStatus"),
      isHTTPAccessFallbackError: /* @__PURE__ */ __name(function() {
        return isHTTPAccessFallbackError;
      }, "isHTTPAccessFallbackError")
    });
    var HTTPAccessErrorStatus = {
      NOT_FOUND: 404,
      FORBIDDEN: 403,
      UNAUTHORIZED: 401
    };
    var ALLOWED_CODES2 = new Set(Object.values(HTTPAccessErrorStatus));
    var HTTP_ERROR_FALLBACK_ERROR_CODE2 = "NEXT_HTTP_ERROR_FALLBACK";
    function isHTTPAccessFallbackError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
      }
      const [prefix, httpStatus] = error.digest.split(";");
      return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE2 && ALLOWED_CODES2.has(Number(httpStatus));
    }
    __name(isHTTPAccessFallbackError, "isHTTPAccessFallbackError");
    function getAccessFallbackHTTPStatus(error) {
      const httpStatus = error.digest.split(";")[1];
      return Number(httpStatus);
    }
    __name(getAccessFallbackHTTPStatus, "getAccessFallbackHTTPStatus");
    function getAccessFallbackErrorTypeByStatus(status) {
      switch (status) {
        case 401:
          return "unauthorized";
        case 403:
          return "forbidden";
        case 404:
          return "not-found";
        default:
          return;
      }
    }
    __name(getAccessFallbackErrorTypeByStatus, "getAccessFallbackErrorTypeByStatus");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/not-found.js
var require_not_found = __commonJS({
  "node_modules/next/dist/client/components/not-found.js"(exports, module) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "notFound", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return notFound2;
      }, "get")
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
    function notFound2() {
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    __name(notFound2, "notFound");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/forbidden.js
var require_forbidden = __commonJS({
  "node_modules/next/dist/client/components/forbidden.js"(exports, module) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "forbidden", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return forbidden;
      }, "get")
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
    function forbidden() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E488",
          enumerable: false,
          configurable: true
        });
      }
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    __name(forbidden, "forbidden");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/unauthorized.js
var require_unauthorized = __commonJS({
  "node_modules/next/dist/client/components/unauthorized.js"(exports, module) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "unauthorized", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return unauthorized2;
      }, "get")
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
    function unauthorized2() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E411",
          enumerable: false,
          configurable: true
        });
      }
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    __name(unauthorized2, "unauthorized");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/server/lib/router-utils/is-postpone.js
var require_is_postpone = __commonJS({
  "node_modules/next/dist/server/lib/router-utils/is-postpone.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isPostpone", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return isPostpone;
      }, "get")
    });
    var REACT_POSTPONE_TYPE = Symbol.for("react.postpone");
    function isPostpone(error) {
      return typeof error === "object" && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
    }
    __name(isPostpone, "isPostpone");
  }
});

// node_modules/next/dist/client/components/is-next-router-error.js
var require_is_next_router_error = __commonJS({
  "node_modules/next/dist/client/components/is-next-router-error.js"(exports, module) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isNextRouterError", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return isNextRouterError;
      }, "get")
    });
    var _httpaccessfallback = require_http_access_fallback();
    var _redirecterror = require_redirect_error();
    function isNextRouterError(error) {
      return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
    }
    __name(isNextRouterError, "isNextRouterError");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/unstable-rethrow.server.js
var require_unstable_rethrow_server = __commonJS({
  "node_modules/next/dist/client/components/unstable-rethrow.server.js"(exports, module) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "unstable_rethrow", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return unstable_rethrow;
      }, "get")
    });
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _ispostpone = require_is_postpone();
    var _bailouttocsr = require_bailout_to_csr();
    var _isnextroutererror = require_is_next_router_error();
    var _dynamicrendering = require_dynamic_rendering();
    var _hooksservercontext = require_hooks_server_context();
    function unstable_rethrow(error) {
      if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
        throw error;
      }
      if (error instanceof Error && "cause" in error) {
        unstable_rethrow(error.cause);
      }
    }
    __name(unstable_rethrow, "unstable_rethrow");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/unstable-rethrow.browser.js
var require_unstable_rethrow_browser = __commonJS({
  "node_modules/next/dist/client/components/unstable-rethrow.browser.js"(exports, module) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "unstable_rethrow", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return unstable_rethrow;
      }, "get")
    });
    var _bailouttocsr = require_bailout_to_csr();
    var _isnextroutererror = require_is_next_router_error();
    function unstable_rethrow(error) {
      if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
        throw error;
      }
      if (error instanceof Error && "cause" in error) {
        unstable_rethrow(error.cause);
      }
    }
    __name(unstable_rethrow, "unstable_rethrow");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/unstable-rethrow.js
var require_unstable_rethrow = __commonJS({
  "node_modules/next/dist/client/components/unstable-rethrow.js"(exports, module) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "unstable_rethrow", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return unstable_rethrow;
      }, "get")
    });
    var unstable_rethrow = typeof window === "undefined" ? require_unstable_rethrow_server().unstable_rethrow : require_unstable_rethrow_browser().unstable_rethrow;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/navigation.react-server.js
var require_navigation_react_server = __commonJS({
  "node_modules/next/dist/client/components/navigation.react-server.js"(exports, module) {
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
      ReadonlyURLSearchParams: /* @__PURE__ */ __name(function() {
        return ReadonlyURLSearchParams;
      }, "ReadonlyURLSearchParams"),
      RedirectType: /* @__PURE__ */ __name(function() {
        return _redirecterror.RedirectType;
      }, "RedirectType"),
      forbidden: /* @__PURE__ */ __name(function() {
        return _forbidden.forbidden;
      }, "forbidden"),
      notFound: /* @__PURE__ */ __name(function() {
        return _notfound.notFound;
      }, "notFound"),
      permanentRedirect: /* @__PURE__ */ __name(function() {
        return _redirect.permanentRedirect;
      }, "permanentRedirect"),
      redirect: /* @__PURE__ */ __name(function() {
        return _redirect.redirect;
      }, "redirect"),
      unauthorized: /* @__PURE__ */ __name(function() {
        return _unauthorized.unauthorized;
      }, "unauthorized"),
      unstable_isUnrecognizedActionError: /* @__PURE__ */ __name(function() {
        return unstable_isUnrecognizedActionError;
      }, "unstable_isUnrecognizedActionError"),
      unstable_rethrow: /* @__PURE__ */ __name(function() {
        return _unstablerethrow.unstable_rethrow;
      }, "unstable_rethrow")
    });
    var _redirect = require_redirect();
    var _redirecterror = require_redirect_error();
    var _notfound = require_not_found();
    var _forbidden = require_forbidden();
    var _unauthorized = require_unauthorized();
    var _unstablerethrow = require_unstable_rethrow();
    var ReadonlyURLSearchParamsError = class extends Error {
      static {
        __name(this, "ReadonlyURLSearchParamsError");
      }
      constructor() {
        super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
      }
    };
    var ReadonlyURLSearchParams = class extends URLSearchParams {
      static {
        __name(this, "ReadonlyURLSearchParams");
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      append() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      delete() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      set() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      sort() {
        throw new ReadonlyURLSearchParamsError();
      }
    };
    function unstable_isUnrecognizedActionError() {
      throw Object.defineProperty(new Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
      });
    }
    __name(unstable_isUnrecognizedActionError, "unstable_isUnrecognizedActionError");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require_interop_require_wildcard = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports) {
    "use strict";
    init_esm();
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
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
      var cache4 = _getRequireWildcardCache(nodeInterop);
      if (cache4 && cache4.has(obj)) return cache4.get(obj);
      var newObj = { __proto__: null };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
          else newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      if (cache4) cache4.set(obj, newObj);
      return newObj;
    }
    __name(_interop_require_wildcard, "_interop_require_wildcard");
    exports._ = _interop_require_wildcard;
  }
});

// node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js
var require_server_inserted_html_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js"(exports) {
    "use client";
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
      ServerInsertedHTMLContext: /* @__PURE__ */ __name(function() {
        return ServerInsertedHTMLContext;
      }, "ServerInsertedHTMLContext"),
      useServerInsertedHTML: /* @__PURE__ */ __name(function() {
        return useServerInsertedHTML;
      }, "useServerInsertedHTML")
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _react = /* @__PURE__ */ _interop_require_wildcard._(require_react());
    var ServerInsertedHTMLContext = /* @__PURE__ */ _react.default.createContext(null);
    function useServerInsertedHTML(callback) {
      const addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
      if (addInsertedServerHTMLCallback) {
        addInsertedServerHTMLCallback(callback);
      }
    }
    __name(useServerInsertedHTML, "useServerInsertedHTML");
  }
});

// node_modules/next/dist/client/components/unrecognized-action-error.js
var require_unrecognized_action_error = __commonJS({
  "node_modules/next/dist/client/components/unrecognized-action-error.js"(exports, module) {
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
      UnrecognizedActionError: /* @__PURE__ */ __name(function() {
        return UnrecognizedActionError;
      }, "UnrecognizedActionError"),
      unstable_isUnrecognizedActionError: /* @__PURE__ */ __name(function() {
        return unstable_isUnrecognizedActionError;
      }, "unstable_isUnrecognizedActionError")
    });
    var UnrecognizedActionError = class extends Error {
      static {
        __name(this, "UnrecognizedActionError");
      }
      constructor(...args) {
        super(...args);
        this.name = "UnrecognizedActionError";
      }
    };
    function unstable_isUnrecognizedActionError(error) {
      return !!(error && typeof error === "object" && error instanceof UnrecognizedActionError);
    }
    __name(unstable_isUnrecognizedActionError, "unstable_isUnrecognizedActionError");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/bailout-to-client-rendering.js
var require_bailout_to_client_rendering = __commonJS({
  "node_modules/next/dist/client/components/bailout-to-client-rendering.js"(exports, module) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "bailoutToClientRendering", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return bailoutToClientRendering;
      }, "get")
    });
    var _bailouttocsr = require_bailout_to_csr();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    function bailoutToClientRendering(reason) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (workStore == null ? void 0 : workStore.forceStatic) return;
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender":
          case "prerender-runtime":
          case "prerender-client":
          case "prerender-ppr":
          case "prerender-legacy":
            throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
              value: "E394",
              enumerable: false,
              configurable: true
            });
          case "request":
          case "cache":
          case "private-cache":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
    }
    __name(bailoutToClientRendering, "bailoutToClientRendering");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/components/navigation.js
var require_navigation = __commonJS({
  "node_modules/next/dist/client/components/navigation.js"(exports, module) {
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
      ReadonlyURLSearchParams: /* @__PURE__ */ __name(function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
      }, "ReadonlyURLSearchParams"),
      RedirectType: /* @__PURE__ */ __name(function() {
        return _navigationreactserver.RedirectType;
      }, "RedirectType"),
      ServerInsertedHTMLContext: /* @__PURE__ */ __name(function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
      }, "ServerInsertedHTMLContext"),
      forbidden: /* @__PURE__ */ __name(function() {
        return _navigationreactserver.forbidden;
      }, "forbidden"),
      notFound: /* @__PURE__ */ __name(function() {
        return _navigationreactserver.notFound;
      }, "notFound"),
      permanentRedirect: /* @__PURE__ */ __name(function() {
        return _navigationreactserver.permanentRedirect;
      }, "permanentRedirect"),
      redirect: /* @__PURE__ */ __name(function() {
        return _navigationreactserver.redirect;
      }, "redirect"),
      unauthorized: /* @__PURE__ */ __name(function() {
        return _navigationreactserver.unauthorized;
      }, "unauthorized"),
      unstable_isUnrecognizedActionError: /* @__PURE__ */ __name(function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
      }, "unstable_isUnrecognizedActionError"),
      unstable_rethrow: /* @__PURE__ */ __name(function() {
        return _navigationreactserver.unstable_rethrow;
      }, "unstable_rethrow"),
      useParams: /* @__PURE__ */ __name(function() {
        return useParams;
      }, "useParams"),
      usePathname: /* @__PURE__ */ __name(function() {
        return usePathname;
      }, "usePathname"),
      useRouter: /* @__PURE__ */ __name(function() {
        return useRouter;
      }, "useRouter"),
      useSearchParams: /* @__PURE__ */ __name(function() {
        return useSearchParams;
      }, "useSearchParams"),
      useSelectedLayoutSegment: /* @__PURE__ */ __name(function() {
        return useSelectedLayoutSegment;
      }, "useSelectedLayoutSegment"),
      useSelectedLayoutSegments: /* @__PURE__ */ __name(function() {
        return useSelectedLayoutSegments;
      }, "useSelectedLayoutSegments"),
      useServerInsertedHTML: /* @__PURE__ */ __name(function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
      }, "useServerInsertedHTML")
    });
    var _react = require_react();
    var _approutercontextsharedruntime = require_app_router_context_shared_runtime();
    var _hooksclientcontextsharedruntime = require_hooks_client_context_shared_runtime();
    var _getsegmentvalue = require_get_segment_value();
    var _segment = require_segment();
    var _navigationreactserver = require_navigation_react_server();
    var _serverinsertedhtmlsharedruntime = require_server_inserted_html_shared_runtime();
    var _unrecognizedactionerror = require_unrecognized_action_error();
    var useDynamicRouteParams = typeof window === "undefined" ? require_dynamic_rendering().useDynamicRouteParams : void 0;
    function useSearchParams() {
      const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
      const readonlySearchParams = (0, _react.useMemo)(() => {
        if (!searchParams) {
          return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
      }, [
        searchParams
      ]);
      if (typeof window === "undefined") {
        const { bailoutToClientRendering } = require_bailout_to_client_rendering();
        bailoutToClientRendering("useSearchParams()");
      }
      return readonlySearchParams;
    }
    __name(useSearchParams, "useSearchParams");
    function usePathname() {
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("usePathname()");
      return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    }
    __name(usePathname, "usePathname");
    function useRouter() {
      const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
      if (router === null) {
        throw Object.defineProperty(new Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
          value: "E238",
          enumerable: false,
          configurable: true
        });
      }
      return router;
    }
    __name(useRouter, "useRouter");
    function useParams() {
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useParams()");
      return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    }
    __name(useParams, "useParams");
    function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
      if (first === void 0) first = true;
      if (segmentPath === void 0) segmentPath = [];
      let node;
      if (first) {
        node = tree[1][parallelRouteKey];
      } else {
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
      }
      if (!node) return segmentPath;
      const segment = node[0];
      let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
      if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
      }
      segmentPath.push(segmentValue);
      return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
    }
    __name(getSelectedLayoutSegmentPath, "getSelectedLayoutSegmentPath");
    function useSelectedLayoutSegments(parallelRouteKey) {
      if (parallelRouteKey === void 0) parallelRouteKey = "children";
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useSelectedLayoutSegments()");
      const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
      if (!context) return null;
      return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
    }
    __name(useSelectedLayoutSegments, "useSelectedLayoutSegments");
    function useSelectedLayoutSegment(parallelRouteKey) {
      if (parallelRouteKey === void 0) parallelRouteKey = "children";
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useSelectedLayoutSegment()");
      const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
      if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
      }
      const selectedLayoutSegment = parallelRouteKey === "children" ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
      return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
    }
    __name(useSelectedLayoutSegment, "useSelectedLayoutSegment");
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/navigation.js
var require_navigation2 = __commonJS({
  "node_modules/next/navigation.js"(exports, module) {
    init_esm();
    module.exports = require_navigation();
  }
});

// polyshed-server-only:server-only
var server_only_exports = {};
__export2(server_only_exports, {
  default: () => server_only_default
});
var server_only_default;
var init_server_only = __esm({
  "polyshed-server-only:server-only"() {
    init_esm();
    server_only_default = true;
  }
});

// node_modules/next/dist/server/lib/trace/constants.js
var require_constants2 = __commonJS({
  "node_modules/next/dist/server/lib/trace/constants.js"(exports) {
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
      AppRenderSpan: /* @__PURE__ */ __name(function() {
        return AppRenderSpan;
      }, "AppRenderSpan"),
      AppRouteRouteHandlersSpan: /* @__PURE__ */ __name(function() {
        return AppRouteRouteHandlersSpan;
      }, "AppRouteRouteHandlersSpan"),
      BaseServerSpan: /* @__PURE__ */ __name(function() {
        return BaseServerSpan;
      }, "BaseServerSpan"),
      LoadComponentsSpan: /* @__PURE__ */ __name(function() {
        return LoadComponentsSpan;
      }, "LoadComponentsSpan"),
      LogSpanAllowList: /* @__PURE__ */ __name(function() {
        return LogSpanAllowList;
      }, "LogSpanAllowList"),
      MiddlewareSpan: /* @__PURE__ */ __name(function() {
        return MiddlewareSpan;
      }, "MiddlewareSpan"),
      NextNodeServerSpan: /* @__PURE__ */ __name(function() {
        return NextNodeServerSpan;
      }, "NextNodeServerSpan"),
      NextServerSpan: /* @__PURE__ */ __name(function() {
        return NextServerSpan;
      }, "NextServerSpan"),
      NextVanillaSpanAllowlist: /* @__PURE__ */ __name(function() {
        return NextVanillaSpanAllowlist;
      }, "NextVanillaSpanAllowlist"),
      NodeSpan: /* @__PURE__ */ __name(function() {
        return NodeSpan;
      }, "NodeSpan"),
      RenderSpan: /* @__PURE__ */ __name(function() {
        return RenderSpan;
      }, "RenderSpan"),
      ResolveMetadataSpan: /* @__PURE__ */ __name(function() {
        return ResolveMetadataSpan;
      }, "ResolveMetadataSpan"),
      RouterSpan: /* @__PURE__ */ __name(function() {
        return RouterSpan;
      }, "RouterSpan"),
      StartServerSpan: /* @__PURE__ */ __name(function() {
        return StartServerSpan;
      }, "StartServerSpan")
    });
    var BaseServerSpan = /* @__PURE__ */ function(BaseServerSpan2) {
      BaseServerSpan2["handleRequest"] = "BaseServer.handleRequest";
      BaseServerSpan2["run"] = "BaseServer.run";
      BaseServerSpan2["pipe"] = "BaseServer.pipe";
      BaseServerSpan2["getStaticHTML"] = "BaseServer.getStaticHTML";
      BaseServerSpan2["render"] = "BaseServer.render";
      BaseServerSpan2["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
      BaseServerSpan2["renderToResponse"] = "BaseServer.renderToResponse";
      BaseServerSpan2["renderToHTML"] = "BaseServer.renderToHTML";
      BaseServerSpan2["renderError"] = "BaseServer.renderError";
      BaseServerSpan2["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
      BaseServerSpan2["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
      BaseServerSpan2["render404"] = "BaseServer.render404";
      return BaseServerSpan2;
    }(BaseServerSpan || {});
    var LoadComponentsSpan = /* @__PURE__ */ function(LoadComponentsSpan2) {
      LoadComponentsSpan2["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
      LoadComponentsSpan2["loadComponents"] = "LoadComponents.loadComponents";
      return LoadComponentsSpan2;
    }(LoadComponentsSpan || {});
    var NextServerSpan = /* @__PURE__ */ function(NextServerSpan2) {
      NextServerSpan2["getRequestHandler"] = "NextServer.getRequestHandler";
      NextServerSpan2["getServer"] = "NextServer.getServer";
      NextServerSpan2["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
      NextServerSpan2["createServer"] = "createServer.createServer";
      return NextServerSpan2;
    }(NextServerSpan || {});
    var NextNodeServerSpan = /* @__PURE__ */ function(NextNodeServerSpan2) {
      NextNodeServerSpan2["compression"] = "NextNodeServer.compression";
      NextNodeServerSpan2["getBuildId"] = "NextNodeServer.getBuildId";
      NextNodeServerSpan2["createComponentTree"] = "NextNodeServer.createComponentTree";
      NextNodeServerSpan2["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
      NextNodeServerSpan2["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
      NextNodeServerSpan2["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
      NextNodeServerSpan2["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
      NextNodeServerSpan2["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
      NextNodeServerSpan2["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
      NextNodeServerSpan2["sendRenderResult"] = "NextNodeServer.sendRenderResult";
      NextNodeServerSpan2["proxyRequest"] = "NextNodeServer.proxyRequest";
      NextNodeServerSpan2["runApi"] = "NextNodeServer.runApi";
      NextNodeServerSpan2["render"] = "NextNodeServer.render";
      NextNodeServerSpan2["renderHTML"] = "NextNodeServer.renderHTML";
      NextNodeServerSpan2["imageOptimizer"] = "NextNodeServer.imageOptimizer";
      NextNodeServerSpan2["getPagePath"] = "NextNodeServer.getPagePath";
      NextNodeServerSpan2["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
      NextNodeServerSpan2["findPageComponents"] = "NextNodeServer.findPageComponents";
      NextNodeServerSpan2["getFontManifest"] = "NextNodeServer.getFontManifest";
      NextNodeServerSpan2["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
      NextNodeServerSpan2["getRequestHandler"] = "NextNodeServer.getRequestHandler";
      NextNodeServerSpan2["renderToHTML"] = "NextNodeServer.renderToHTML";
      NextNodeServerSpan2["renderError"] = "NextNodeServer.renderError";
      NextNodeServerSpan2["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
      NextNodeServerSpan2["render404"] = "NextNodeServer.render404";
      NextNodeServerSpan2["startResponse"] = "NextNodeServer.startResponse";
      NextNodeServerSpan2["route"] = "route";
      NextNodeServerSpan2["onProxyReq"] = "onProxyReq";
      NextNodeServerSpan2["apiResolver"] = "apiResolver";
      NextNodeServerSpan2["internalFetch"] = "internalFetch";
      return NextNodeServerSpan2;
    }(NextNodeServerSpan || {});
    var StartServerSpan = /* @__PURE__ */ function(StartServerSpan2) {
      StartServerSpan2["startServer"] = "startServer.startServer";
      return StartServerSpan2;
    }(StartServerSpan || {});
    var RenderSpan = /* @__PURE__ */ function(RenderSpan2) {
      RenderSpan2["getServerSideProps"] = "Render.getServerSideProps";
      RenderSpan2["getStaticProps"] = "Render.getStaticProps";
      RenderSpan2["renderToString"] = "Render.renderToString";
      RenderSpan2["renderDocument"] = "Render.renderDocument";
      RenderSpan2["createBodyResult"] = "Render.createBodyResult";
      return RenderSpan2;
    }(RenderSpan || {});
    var AppRenderSpan = /* @__PURE__ */ function(AppRenderSpan2) {
      AppRenderSpan2["renderToString"] = "AppRender.renderToString";
      AppRenderSpan2["renderToReadableStream"] = "AppRender.renderToReadableStream";
      AppRenderSpan2["getBodyResult"] = "AppRender.getBodyResult";
      AppRenderSpan2["fetch"] = "AppRender.fetch";
      return AppRenderSpan2;
    }(AppRenderSpan || {});
    var RouterSpan = /* @__PURE__ */ function(RouterSpan2) {
      RouterSpan2["executeRoute"] = "Router.executeRoute";
      return RouterSpan2;
    }(RouterSpan || {});
    var NodeSpan = /* @__PURE__ */ function(NodeSpan2) {
      NodeSpan2["runHandler"] = "Node.runHandler";
      return NodeSpan2;
    }(NodeSpan || {});
    var AppRouteRouteHandlersSpan = /* @__PURE__ */ function(AppRouteRouteHandlersSpan2) {
      AppRouteRouteHandlersSpan2["runHandler"] = "AppRouteRouteHandlers.runHandler";
      return AppRouteRouteHandlersSpan2;
    }(AppRouteRouteHandlersSpan || {});
    var ResolveMetadataSpan = /* @__PURE__ */ function(ResolveMetadataSpan2) {
      ResolveMetadataSpan2["generateMetadata"] = "ResolveMetadata.generateMetadata";
      ResolveMetadataSpan2["generateViewport"] = "ResolveMetadata.generateViewport";
      return ResolveMetadataSpan2;
    }(ResolveMetadataSpan || {});
    var MiddlewareSpan = /* @__PURE__ */ function(MiddlewareSpan2) {
      MiddlewareSpan2["execute"] = "Middleware.execute";
      return MiddlewareSpan2;
    }(MiddlewareSpan || {});
    var NextVanillaSpanAllowlist = /* @__PURE__ */ new Set([
      "Middleware.execute",
      "BaseServer.handleRequest",
      "Render.getServerSideProps",
      "Render.getStaticProps",
      "AppRender.fetch",
      "AppRender.getBodyResult",
      "Render.renderDocument",
      "Node.runHandler",
      "AppRouteRouteHandlers.runHandler",
      "ResolveMetadata.generateMetadata",
      "ResolveMetadata.generateViewport",
      "NextNodeServer.createComponentTree",
      "NextNodeServer.findPageComponents",
      "NextNodeServer.getLayoutOrPageModule",
      "NextNodeServer.startResponse",
      "NextNodeServer.clientComponentLoading"
    ]);
    var LogSpanAllowList = /* @__PURE__ */ new Set([
      "NextNodeServer.findPageComponents",
      "NextNodeServer.createComponentTree",
      "NextNodeServer.clientComponentLoading"
    ]);
  }
});

// node_modules/next/dist/shared/lib/is-thenable.js
var require_is_thenable = __commonJS({
  "node_modules/next/dist/shared/lib/is-thenable.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isThenable", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return isThenable;
      }, "get")
    });
    function isThenable(promise) {
      return promise !== null && typeof promise === "object" && "then" in promise && typeof promise.then === "function";
    }
    __name(isThenable, "isThenable");
  }
});

// node_modules/next/dist/compiled/@opentelemetry/api/index.js
var require_api = __commonJS({
  "node_modules/next/dist/compiled/@opentelemetry/api/index.js"(exports, module) {
    init_esm();
    (() => {
      "use strict";
      var e = { 491: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.ContextAPI = void 0;
        const n = r2(223);
        const a = r2(172);
        const o = r2(930);
        const i = "context";
        const c = new n.NoopContextManager();
        class ContextAPI {
          static {
            __name(this, "ContextAPI");
          }
          constructor() {
          }
          static getInstance() {
            if (!this._instance) {
              this._instance = new ContextAPI();
            }
            return this._instance;
          }
          setGlobalContextManager(e3) {
            return (0, a.registerGlobal)(i, e3, o.DiagAPI.instance());
          }
          active() {
            return this._getContextManager().active();
          }
          with(e3, t3, r3, ...n2) {
            return this._getContextManager().with(e3, t3, r3, ...n2);
          }
          bind(e3, t3) {
            return this._getContextManager().bind(e3, t3);
          }
          _getContextManager() {
            return (0, a.getGlobal)(i) || c;
          }
          disable() {
            this._getContextManager().disable();
            (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
          }
        }
        t2.ContextAPI = ContextAPI;
      }, 930: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.DiagAPI = void 0;
        const n = r2(56);
        const a = r2(912);
        const o = r2(957);
        const i = r2(172);
        const c = "diag";
        class DiagAPI {
          static {
            __name(this, "DiagAPI");
          }
          constructor() {
            function _logProxy(e4) {
              return function(...t3) {
                const r3 = (0, i.getGlobal)("diag");
                if (!r3) return;
                return r3[e4](...t3);
              };
            }
            __name(_logProxy, "_logProxy");
            const e3 = this;
            const setLogger = /* @__PURE__ */ __name((t3, r3 = { logLevel: o.DiagLogLevel.INFO }) => {
              var n2, c2, s2;
              if (t3 === e3) {
                const t4 = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                e3.error((n2 = t4.stack) !== null && n2 !== void 0 ? n2 : t4.message);
                return false;
              }
              if (typeof r3 === "number") {
                r3 = { logLevel: r3 };
              }
              const u2 = (0, i.getGlobal)("diag");
              const l = (0, a.createLogLevelDiagLogger)((c2 = r3.logLevel) !== null && c2 !== void 0 ? c2 : o.DiagLogLevel.INFO, t3);
              if (u2 && !r3.suppressOverrideMessage) {
                const e4 = (s2 = new Error().stack) !== null && s2 !== void 0 ? s2 : "<failed to generate stacktrace>";
                u2.warn(`Current logger will be overwritten from ${e4}`);
                l.warn(`Current logger will overwrite one already registered from ${e4}`);
              }
              return (0, i.registerGlobal)("diag", l, e3, true);
            }, "setLogger");
            e3.setLogger = setLogger;
            e3.disable = () => {
              (0, i.unregisterGlobal)(c, e3);
            };
            e3.createComponentLogger = (e4) => new n.DiagComponentLogger(e4);
            e3.verbose = _logProxy("verbose");
            e3.debug = _logProxy("debug");
            e3.info = _logProxy("info");
            e3.warn = _logProxy("warn");
            e3.error = _logProxy("error");
          }
          static instance() {
            if (!this._instance) {
              this._instance = new DiagAPI();
            }
            return this._instance;
          }
        }
        t2.DiagAPI = DiagAPI;
      }, 653: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.MetricsAPI = void 0;
        const n = r2(660);
        const a = r2(172);
        const o = r2(930);
        const i = "metrics";
        class MetricsAPI {
          static {
            __name(this, "MetricsAPI");
          }
          constructor() {
          }
          static getInstance() {
            if (!this._instance) {
              this._instance = new MetricsAPI();
            }
            return this._instance;
          }
          setGlobalMeterProvider(e3) {
            return (0, a.registerGlobal)(i, e3, o.DiagAPI.instance());
          }
          getMeterProvider() {
            return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
          }
          getMeter(e3, t3, r3) {
            return this.getMeterProvider().getMeter(e3, t3, r3);
          }
          disable() {
            (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
          }
        }
        t2.MetricsAPI = MetricsAPI;
      }, 181: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.PropagationAPI = void 0;
        const n = r2(172);
        const a = r2(874);
        const o = r2(194);
        const i = r2(277);
        const c = r2(369);
        const s2 = r2(930);
        const u2 = "propagation";
        const l = new a.NoopTextMapPropagator();
        class PropagationAPI {
          static {
            __name(this, "PropagationAPI");
          }
          constructor() {
            this.createBaggage = c.createBaggage;
            this.getBaggage = i.getBaggage;
            this.getActiveBaggage = i.getActiveBaggage;
            this.setBaggage = i.setBaggage;
            this.deleteBaggage = i.deleteBaggage;
          }
          static getInstance() {
            if (!this._instance) {
              this._instance = new PropagationAPI();
            }
            return this._instance;
          }
          setGlobalPropagator(e3) {
            return (0, n.registerGlobal)(u2, e3, s2.DiagAPI.instance());
          }
          inject(e3, t3, r3 = o.defaultTextMapSetter) {
            return this._getGlobalPropagator().inject(e3, t3, r3);
          }
          extract(e3, t3, r3 = o.defaultTextMapGetter) {
            return this._getGlobalPropagator().extract(e3, t3, r3);
          }
          fields() {
            return this._getGlobalPropagator().fields();
          }
          disable() {
            (0, n.unregisterGlobal)(u2, s2.DiagAPI.instance());
          }
          _getGlobalPropagator() {
            return (0, n.getGlobal)(u2) || l;
          }
        }
        t2.PropagationAPI = PropagationAPI;
      }, 997: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.TraceAPI = void 0;
        const n = r2(172);
        const a = r2(846);
        const o = r2(139);
        const i = r2(607);
        const c = r2(930);
        const s2 = "trace";
        class TraceAPI {
          static {
            __name(this, "TraceAPI");
          }
          constructor() {
            this._proxyTracerProvider = new a.ProxyTracerProvider();
            this.wrapSpanContext = o.wrapSpanContext;
            this.isSpanContextValid = o.isSpanContextValid;
            this.deleteSpan = i.deleteSpan;
            this.getSpan = i.getSpan;
            this.getActiveSpan = i.getActiveSpan;
            this.getSpanContext = i.getSpanContext;
            this.setSpan = i.setSpan;
            this.setSpanContext = i.setSpanContext;
          }
          static getInstance() {
            if (!this._instance) {
              this._instance = new TraceAPI();
            }
            return this._instance;
          }
          setGlobalTracerProvider(e3) {
            const t3 = (0, n.registerGlobal)(s2, this._proxyTracerProvider, c.DiagAPI.instance());
            if (t3) {
              this._proxyTracerProvider.setDelegate(e3);
            }
            return t3;
          }
          getTracerProvider() {
            return (0, n.getGlobal)(s2) || this._proxyTracerProvider;
          }
          getTracer(e3, t3) {
            return this.getTracerProvider().getTracer(e3, t3);
          }
          disable() {
            (0, n.unregisterGlobal)(s2, c.DiagAPI.instance());
            this._proxyTracerProvider = new a.ProxyTracerProvider();
          }
        }
        t2.TraceAPI = TraceAPI;
      }, 277: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.deleteBaggage = t2.setBaggage = t2.getActiveBaggage = t2.getBaggage = void 0;
        const n = r2(491);
        const a = r2(780);
        const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
        function getBaggage(e3) {
          return e3.getValue(o) || void 0;
        }
        __name(getBaggage, "getBaggage");
        t2.getBaggage = getBaggage;
        function getActiveBaggage() {
          return getBaggage(n.ContextAPI.getInstance().active());
        }
        __name(getActiveBaggage, "getActiveBaggage");
        t2.getActiveBaggage = getActiveBaggage;
        function setBaggage(e3, t3) {
          return e3.setValue(o, t3);
        }
        __name(setBaggage, "setBaggage");
        t2.setBaggage = setBaggage;
        function deleteBaggage(e3) {
          return e3.deleteValue(o);
        }
        __name(deleteBaggage, "deleteBaggage");
        t2.deleteBaggage = deleteBaggage;
      }, 993: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.BaggageImpl = void 0;
        class BaggageImpl {
          static {
            __name(this, "BaggageImpl");
          }
          constructor(e3) {
            this._entries = e3 ? new Map(e3) : /* @__PURE__ */ new Map();
          }
          getEntry(e3) {
            const t3 = this._entries.get(e3);
            if (!t3) {
              return void 0;
            }
            return Object.assign({}, t3);
          }
          getAllEntries() {
            return Array.from(this._entries.entries()).map(([e3, t3]) => [e3, t3]);
          }
          setEntry(e3, t3) {
            const r2 = new BaggageImpl(this._entries);
            r2._entries.set(e3, t3);
            return r2;
          }
          removeEntry(e3) {
            const t3 = new BaggageImpl(this._entries);
            t3._entries.delete(e3);
            return t3;
          }
          removeEntries(...e3) {
            const t3 = new BaggageImpl(this._entries);
            for (const r2 of e3) {
              t3._entries.delete(r2);
            }
            return t3;
          }
          clear() {
            return new BaggageImpl();
          }
        }
        t2.BaggageImpl = BaggageImpl;
      }, 830: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.baggageEntryMetadataSymbol = void 0;
        t2.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
      }, 369: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.baggageEntryMetadataFromString = t2.createBaggage = void 0;
        const n = r2(930);
        const a = r2(993);
        const o = r2(830);
        const i = n.DiagAPI.instance();
        function createBaggage(e3 = {}) {
          return new a.BaggageImpl(new Map(Object.entries(e3)));
        }
        __name(createBaggage, "createBaggage");
        t2.createBaggage = createBaggage;
        function baggageEntryMetadataFromString(e3) {
          if (typeof e3 !== "string") {
            i.error(`Cannot create baggage metadata from unknown type: ${typeof e3}`);
            e3 = "";
          }
          return { __TYPE__: o.baggageEntryMetadataSymbol, toString() {
            return e3;
          } };
        }
        __name(baggageEntryMetadataFromString, "baggageEntryMetadataFromString");
        t2.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
      }, 67: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.context = void 0;
        const n = r2(491);
        t2.context = n.ContextAPI.getInstance();
      }, 223: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.NoopContextManager = void 0;
        const n = r2(780);
        class NoopContextManager {
          static {
            __name(this, "NoopContextManager");
          }
          active() {
            return n.ROOT_CONTEXT;
          }
          with(e3, t3, r3, ...n2) {
            return t3.call(r3, ...n2);
          }
          bind(e3, t3) {
            return t3;
          }
          enable() {
            return this;
          }
          disable() {
            return this;
          }
        }
        t2.NoopContextManager = NoopContextManager;
      }, 780: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.ROOT_CONTEXT = t2.createContextKey = void 0;
        function createContextKey(e3) {
          return Symbol.for(e3);
        }
        __name(createContextKey, "createContextKey");
        t2.createContextKey = createContextKey;
        class BaseContext {
          static {
            __name(this, "BaseContext");
          }
          constructor(e3) {
            const t3 = this;
            t3._currentContext = e3 ? new Map(e3) : /* @__PURE__ */ new Map();
            t3.getValue = (e4) => t3._currentContext.get(e4);
            t3.setValue = (e4, r2) => {
              const n = new BaseContext(t3._currentContext);
              n._currentContext.set(e4, r2);
              return n;
            };
            t3.deleteValue = (e4) => {
              const r2 = new BaseContext(t3._currentContext);
              r2._currentContext.delete(e4);
              return r2;
            };
          }
        }
        t2.ROOT_CONTEXT = new BaseContext();
      }, 506: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.diag = void 0;
        const n = r2(930);
        t2.diag = n.DiagAPI.instance();
      }, 56: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.DiagComponentLogger = void 0;
        const n = r2(172);
        class DiagComponentLogger {
          static {
            __name(this, "DiagComponentLogger");
          }
          constructor(e3) {
            this._namespace = e3.namespace || "DiagComponentLogger";
          }
          debug(...e3) {
            return logProxy("debug", this._namespace, e3);
          }
          error(...e3) {
            return logProxy("error", this._namespace, e3);
          }
          info(...e3) {
            return logProxy("info", this._namespace, e3);
          }
          warn(...e3) {
            return logProxy("warn", this._namespace, e3);
          }
          verbose(...e3) {
            return logProxy("verbose", this._namespace, e3);
          }
        }
        t2.DiagComponentLogger = DiagComponentLogger;
        function logProxy(e3, t3, r3) {
          const a = (0, n.getGlobal)("diag");
          if (!a) {
            return;
          }
          r3.unshift(t3);
          return a[e3](...r3);
        }
        __name(logProxy, "logProxy");
      }, 972: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.DiagConsoleLogger = void 0;
        const r2 = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }];
        class DiagConsoleLogger {
          static {
            __name(this, "DiagConsoleLogger");
          }
          constructor() {
            function _consoleFunc(e3) {
              return function(...t3) {
                if (console) {
                  let r3 = console[e3];
                  if (typeof r3 !== "function") {
                    r3 = console.log;
                  }
                  if (typeof r3 === "function") {
                    return r3.apply(console, t3);
                  }
                }
              };
            }
            __name(_consoleFunc, "_consoleFunc");
            for (let e3 = 0; e3 < r2.length; e3++) {
              this[r2[e3].n] = _consoleFunc(r2[e3].c);
            }
          }
        }
        t2.DiagConsoleLogger = DiagConsoleLogger;
      }, 912: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.createLogLevelDiagLogger = void 0;
        const n = r2(957);
        function createLogLevelDiagLogger(e3, t3) {
          if (e3 < n.DiagLogLevel.NONE) {
            e3 = n.DiagLogLevel.NONE;
          } else if (e3 > n.DiagLogLevel.ALL) {
            e3 = n.DiagLogLevel.ALL;
          }
          t3 = t3 || {};
          function _filterFunc(r3, n2) {
            const a = t3[r3];
            if (typeof a === "function" && e3 >= n2) {
              return a.bind(t3);
            }
            return function() {
            };
          }
          __name(_filterFunc, "_filterFunc");
          return { error: _filterFunc("error", n.DiagLogLevel.ERROR), warn: _filterFunc("warn", n.DiagLogLevel.WARN), info: _filterFunc("info", n.DiagLogLevel.INFO), debug: _filterFunc("debug", n.DiagLogLevel.DEBUG), verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE) };
        }
        __name(createLogLevelDiagLogger, "createLogLevelDiagLogger");
        t2.createLogLevelDiagLogger = createLogLevelDiagLogger;
      }, 957: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.DiagLogLevel = void 0;
        var r2;
        (function(e3) {
          e3[e3["NONE"] = 0] = "NONE";
          e3[e3["ERROR"] = 30] = "ERROR";
          e3[e3["WARN"] = 50] = "WARN";
          e3[e3["INFO"] = 60] = "INFO";
          e3[e3["DEBUG"] = 70] = "DEBUG";
          e3[e3["VERBOSE"] = 80] = "VERBOSE";
          e3[e3["ALL"] = 9999] = "ALL";
        })(r2 = t2.DiagLogLevel || (t2.DiagLogLevel = {}));
      }, 172: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.unregisterGlobal = t2.getGlobal = t2.registerGlobal = void 0;
        const n = r2(200);
        const a = r2(521);
        const o = r2(130);
        const i = a.VERSION.split(".")[0];
        const c = Symbol.for(`opentelemetry.js.api.${i}`);
        const s2 = n._globalThis;
        function registerGlobal(e3, t3, r3, n2 = false) {
          var o2;
          const i2 = s2[c] = (o2 = s2[c]) !== null && o2 !== void 0 ? o2 : { version: a.VERSION };
          if (!n2 && i2[e3]) {
            const t4 = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e3}`);
            r3.error(t4.stack || t4.message);
            return false;
          }
          if (i2.version !== a.VERSION) {
            const t4 = new Error(`@opentelemetry/api: Registration of version v${i2.version} for ${e3} does not match previously registered API v${a.VERSION}`);
            r3.error(t4.stack || t4.message);
            return false;
          }
          i2[e3] = t3;
          r3.debug(`@opentelemetry/api: Registered a global for ${e3} v${a.VERSION}.`);
          return true;
        }
        __name(registerGlobal, "registerGlobal");
        t2.registerGlobal = registerGlobal;
        function getGlobal(e3) {
          var t3, r3;
          const n2 = (t3 = s2[c]) === null || t3 === void 0 ? void 0 : t3.version;
          if (!n2 || !(0, o.isCompatible)(n2)) {
            return;
          }
          return (r3 = s2[c]) === null || r3 === void 0 ? void 0 : r3[e3];
        }
        __name(getGlobal, "getGlobal");
        t2.getGlobal = getGlobal;
        function unregisterGlobal(e3, t3) {
          t3.debug(`@opentelemetry/api: Unregistering a global for ${e3} v${a.VERSION}.`);
          const r3 = s2[c];
          if (r3) {
            delete r3[e3];
          }
        }
        __name(unregisterGlobal, "unregisterGlobal");
        t2.unregisterGlobal = unregisterGlobal;
      }, 130: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.isCompatible = t2._makeCompatibilityCheck = void 0;
        const n = r2(521);
        const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
        function _makeCompatibilityCheck(e3) {
          const t3 = /* @__PURE__ */ new Set([e3]);
          const r3 = /* @__PURE__ */ new Set();
          const n2 = e3.match(a);
          if (!n2) {
            return () => false;
          }
          const o = { major: +n2[1], minor: +n2[2], patch: +n2[3], prerelease: n2[4] };
          if (o.prerelease != null) {
            return /* @__PURE__ */ __name(function isExactmatch(t4) {
              return t4 === e3;
            }, "isExactmatch");
          }
          function _reject(e4) {
            r3.add(e4);
            return false;
          }
          __name(_reject, "_reject");
          function _accept(e4) {
            t3.add(e4);
            return true;
          }
          __name(_accept, "_accept");
          return /* @__PURE__ */ __name(function isCompatible(e4) {
            if (t3.has(e4)) {
              return true;
            }
            if (r3.has(e4)) {
              return false;
            }
            const n3 = e4.match(a);
            if (!n3) {
              return _reject(e4);
            }
            const i = { major: +n3[1], minor: +n3[2], patch: +n3[3], prerelease: n3[4] };
            if (i.prerelease != null) {
              return _reject(e4);
            }
            if (o.major !== i.major) {
              return _reject(e4);
            }
            if (o.major === 0) {
              if (o.minor === i.minor && o.patch <= i.patch) {
                return _accept(e4);
              }
              return _reject(e4);
            }
            if (o.minor <= i.minor) {
              return _accept(e4);
            }
            return _reject(e4);
          }, "isCompatible");
        }
        __name(_makeCompatibilityCheck, "_makeCompatibilityCheck");
        t2._makeCompatibilityCheck = _makeCompatibilityCheck;
        t2.isCompatible = _makeCompatibilityCheck(n.VERSION);
      }, 886: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.metrics = void 0;
        const n = r2(653);
        t2.metrics = n.MetricsAPI.getInstance();
      }, 901: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.ValueType = void 0;
        var r2;
        (function(e3) {
          e3[e3["INT"] = 0] = "INT";
          e3[e3["DOUBLE"] = 1] = "DOUBLE";
        })(r2 = t2.ValueType || (t2.ValueType = {}));
      }, 102: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.createNoopMeter = t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t2.NOOP_OBSERVABLE_GAUGE_METRIC = t2.NOOP_OBSERVABLE_COUNTER_METRIC = t2.NOOP_UP_DOWN_COUNTER_METRIC = t2.NOOP_HISTOGRAM_METRIC = t2.NOOP_COUNTER_METRIC = t2.NOOP_METER = t2.NoopObservableUpDownCounterMetric = t2.NoopObservableGaugeMetric = t2.NoopObservableCounterMetric = t2.NoopObservableMetric = t2.NoopHistogramMetric = t2.NoopUpDownCounterMetric = t2.NoopCounterMetric = t2.NoopMetric = t2.NoopMeter = void 0;
        class NoopMeter {
          static {
            __name(this, "NoopMeter");
          }
          constructor() {
          }
          createHistogram(e3, r2) {
            return t2.NOOP_HISTOGRAM_METRIC;
          }
          createCounter(e3, r2) {
            return t2.NOOP_COUNTER_METRIC;
          }
          createUpDownCounter(e3, r2) {
            return t2.NOOP_UP_DOWN_COUNTER_METRIC;
          }
          createObservableGauge(e3, r2) {
            return t2.NOOP_OBSERVABLE_GAUGE_METRIC;
          }
          createObservableCounter(e3, r2) {
            return t2.NOOP_OBSERVABLE_COUNTER_METRIC;
          }
          createObservableUpDownCounter(e3, r2) {
            return t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
          }
          addBatchObservableCallback(e3, t3) {
          }
          removeBatchObservableCallback(e3) {
          }
        }
        t2.NoopMeter = NoopMeter;
        class NoopMetric {
          static {
            __name(this, "NoopMetric");
          }
        }
        t2.NoopMetric = NoopMetric;
        class NoopCounterMetric extends NoopMetric {
          static {
            __name(this, "NoopCounterMetric");
          }
          add(e3, t3) {
          }
        }
        t2.NoopCounterMetric = NoopCounterMetric;
        class NoopUpDownCounterMetric extends NoopMetric {
          static {
            __name(this, "NoopUpDownCounterMetric");
          }
          add(e3, t3) {
          }
        }
        t2.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
        class NoopHistogramMetric extends NoopMetric {
          static {
            __name(this, "NoopHistogramMetric");
          }
          record(e3, t3) {
          }
        }
        t2.NoopHistogramMetric = NoopHistogramMetric;
        class NoopObservableMetric {
          static {
            __name(this, "NoopObservableMetric");
          }
          addCallback(e3) {
          }
          removeCallback(e3) {
          }
        }
        t2.NoopObservableMetric = NoopObservableMetric;
        class NoopObservableCounterMetric extends NoopObservableMetric {
          static {
            __name(this, "NoopObservableCounterMetric");
          }
        }
        t2.NoopObservableCounterMetric = NoopObservableCounterMetric;
        class NoopObservableGaugeMetric extends NoopObservableMetric {
          static {
            __name(this, "NoopObservableGaugeMetric");
          }
        }
        t2.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
        class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
          static {
            __name(this, "NoopObservableUpDownCounterMetric");
          }
        }
        t2.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
        t2.NOOP_METER = new NoopMeter();
        t2.NOOP_COUNTER_METRIC = new NoopCounterMetric();
        t2.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
        t2.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
        t2.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
        t2.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
        t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
        function createNoopMeter() {
          return t2.NOOP_METER;
        }
        __name(createNoopMeter, "createNoopMeter");
        t2.createNoopMeter = createNoopMeter;
      }, 660: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.NOOP_METER_PROVIDER = t2.NoopMeterProvider = void 0;
        const n = r2(102);
        class NoopMeterProvider {
          static {
            __name(this, "NoopMeterProvider");
          }
          getMeter(e3, t3, r3) {
            return n.NOOP_METER;
          }
        }
        t2.NoopMeterProvider = NoopMeterProvider;
        t2.NOOP_METER_PROVIDER = new NoopMeterProvider();
      }, 200: function(e2, t2, r2) {
        var n = this && this.__createBinding || (Object.create ? function(e3, t3, r3, n2) {
          if (n2 === void 0) n2 = r3;
          Object.defineProperty(e3, n2, { enumerable: true, get: /* @__PURE__ */ __name(function() {
            return t3[r3];
          }, "get") });
        } : function(e3, t3, r3, n2) {
          if (n2 === void 0) n2 = r3;
          e3[n2] = t3[r3];
        });
        var a = this && this.__exportStar || function(e3, t3) {
          for (var r3 in e3) if (r3 !== "default" && !Object.prototype.hasOwnProperty.call(t3, r3)) n(t3, e3, r3);
        };
        Object.defineProperty(t2, "__esModule", { value: true });
        a(r2(46), t2);
      }, 651: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2._globalThis = void 0;
        t2._globalThis = typeof globalThis === "object" ? globalThis : global;
      }, 46: function(e2, t2, r2) {
        var n = this && this.__createBinding || (Object.create ? function(e3, t3, r3, n2) {
          if (n2 === void 0) n2 = r3;
          Object.defineProperty(e3, n2, { enumerable: true, get: /* @__PURE__ */ __name(function() {
            return t3[r3];
          }, "get") });
        } : function(e3, t3, r3, n2) {
          if (n2 === void 0) n2 = r3;
          e3[n2] = t3[r3];
        });
        var a = this && this.__exportStar || function(e3, t3) {
          for (var r3 in e3) if (r3 !== "default" && !Object.prototype.hasOwnProperty.call(t3, r3)) n(t3, e3, r3);
        };
        Object.defineProperty(t2, "__esModule", { value: true });
        a(r2(651), t2);
      }, 939: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.propagation = void 0;
        const n = r2(181);
        t2.propagation = n.PropagationAPI.getInstance();
      }, 874: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.NoopTextMapPropagator = void 0;
        class NoopTextMapPropagator {
          static {
            __name(this, "NoopTextMapPropagator");
          }
          inject(e3, t3) {
          }
          extract(e3, t3) {
            return e3;
          }
          fields() {
            return [];
          }
        }
        t2.NoopTextMapPropagator = NoopTextMapPropagator;
      }, 194: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.defaultTextMapSetter = t2.defaultTextMapGetter = void 0;
        t2.defaultTextMapGetter = { get(e3, t3) {
          if (e3 == null) {
            return void 0;
          }
          return e3[t3];
        }, keys(e3) {
          if (e3 == null) {
            return [];
          }
          return Object.keys(e3);
        } };
        t2.defaultTextMapSetter = { set(e3, t3, r2) {
          if (e3 == null) {
            return;
          }
          e3[t3] = r2;
        } };
      }, 845: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.trace = void 0;
        const n = r2(997);
        t2.trace = n.TraceAPI.getInstance();
      }, 403: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.NonRecordingSpan = void 0;
        const n = r2(476);
        class NonRecordingSpan {
          static {
            __name(this, "NonRecordingSpan");
          }
          constructor(e3 = n.INVALID_SPAN_CONTEXT) {
            this._spanContext = e3;
          }
          spanContext() {
            return this._spanContext;
          }
          setAttribute(e3, t3) {
            return this;
          }
          setAttributes(e3) {
            return this;
          }
          addEvent(e3, t3) {
            return this;
          }
          setStatus(e3) {
            return this;
          }
          updateName(e3) {
            return this;
          }
          end(e3) {
          }
          isRecording() {
            return false;
          }
          recordException(e3, t3) {
          }
        }
        t2.NonRecordingSpan = NonRecordingSpan;
      }, 614: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.NoopTracer = void 0;
        const n = r2(491);
        const a = r2(607);
        const o = r2(403);
        const i = r2(139);
        const c = n.ContextAPI.getInstance();
        class NoopTracer {
          static {
            __name(this, "NoopTracer");
          }
          startSpan(e3, t3, r3 = c.active()) {
            const n2 = Boolean(t3 === null || t3 === void 0 ? void 0 : t3.root);
            if (n2) {
              return new o.NonRecordingSpan();
            }
            const s2 = r3 && (0, a.getSpanContext)(r3);
            if (isSpanContext(s2) && (0, i.isSpanContextValid)(s2)) {
              return new o.NonRecordingSpan(s2);
            } else {
              return new o.NonRecordingSpan();
            }
          }
          startActiveSpan(e3, t3, r3, n2) {
            let o2;
            let i2;
            let s2;
            if (arguments.length < 2) {
              return;
            } else if (arguments.length === 2) {
              s2 = t3;
            } else if (arguments.length === 3) {
              o2 = t3;
              s2 = r3;
            } else {
              o2 = t3;
              i2 = r3;
              s2 = n2;
            }
            const u2 = i2 !== null && i2 !== void 0 ? i2 : c.active();
            const l = this.startSpan(e3, o2, u2);
            const g = (0, a.setSpan)(u2, l);
            return c.with(g, s2, void 0, l);
          }
        }
        t2.NoopTracer = NoopTracer;
        function isSpanContext(e3) {
          return typeof e3 === "object" && typeof e3["spanId"] === "string" && typeof e3["traceId"] === "string" && typeof e3["traceFlags"] === "number";
        }
        __name(isSpanContext, "isSpanContext");
      }, 124: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.NoopTracerProvider = void 0;
        const n = r2(614);
        class NoopTracerProvider {
          static {
            __name(this, "NoopTracerProvider");
          }
          getTracer(e3, t3, r3) {
            return new n.NoopTracer();
          }
        }
        t2.NoopTracerProvider = NoopTracerProvider;
      }, 125: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.ProxyTracer = void 0;
        const n = r2(614);
        const a = new n.NoopTracer();
        class ProxyTracer {
          static {
            __name(this, "ProxyTracer");
          }
          constructor(e3, t3, r3, n2) {
            this._provider = e3;
            this.name = t3;
            this.version = r3;
            this.options = n2;
          }
          startSpan(e3, t3, r3) {
            return this._getTracer().startSpan(e3, t3, r3);
          }
          startActiveSpan(e3, t3, r3, n2) {
            const a2 = this._getTracer();
            return Reflect.apply(a2.startActiveSpan, a2, arguments);
          }
          _getTracer() {
            if (this._delegate) {
              return this._delegate;
            }
            const e3 = this._provider.getDelegateTracer(this.name, this.version, this.options);
            if (!e3) {
              return a;
            }
            this._delegate = e3;
            return this._delegate;
          }
        }
        t2.ProxyTracer = ProxyTracer;
      }, 846: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.ProxyTracerProvider = void 0;
        const n = r2(125);
        const a = r2(124);
        const o = new a.NoopTracerProvider();
        class ProxyTracerProvider {
          static {
            __name(this, "ProxyTracerProvider");
          }
          getTracer(e3, t3, r3) {
            var a2;
            return (a2 = this.getDelegateTracer(e3, t3, r3)) !== null && a2 !== void 0 ? a2 : new n.ProxyTracer(this, e3, t3, r3);
          }
          getDelegate() {
            var e3;
            return (e3 = this._delegate) !== null && e3 !== void 0 ? e3 : o;
          }
          setDelegate(e3) {
            this._delegate = e3;
          }
          getDelegateTracer(e3, t3, r3) {
            var n2;
            return (n2 = this._delegate) === null || n2 === void 0 ? void 0 : n2.getTracer(e3, t3, r3);
          }
        }
        t2.ProxyTracerProvider = ProxyTracerProvider;
      }, 996: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.SamplingDecision = void 0;
        var r2;
        (function(e3) {
          e3[e3["NOT_RECORD"] = 0] = "NOT_RECORD";
          e3[e3["RECORD"] = 1] = "RECORD";
          e3[e3["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
        })(r2 = t2.SamplingDecision || (t2.SamplingDecision = {}));
      }, 607: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.getSpanContext = t2.setSpanContext = t2.deleteSpan = t2.setSpan = t2.getActiveSpan = t2.getSpan = void 0;
        const n = r2(780);
        const a = r2(403);
        const o = r2(491);
        const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
        function getSpan(e3) {
          return e3.getValue(i) || void 0;
        }
        __name(getSpan, "getSpan");
        t2.getSpan = getSpan;
        function getActiveSpan() {
          return getSpan(o.ContextAPI.getInstance().active());
        }
        __name(getActiveSpan, "getActiveSpan");
        t2.getActiveSpan = getActiveSpan;
        function setSpan(e3, t3) {
          return e3.setValue(i, t3);
        }
        __name(setSpan, "setSpan");
        t2.setSpan = setSpan;
        function deleteSpan(e3) {
          return e3.deleteValue(i);
        }
        __name(deleteSpan, "deleteSpan");
        t2.deleteSpan = deleteSpan;
        function setSpanContext(e3, t3) {
          return setSpan(e3, new a.NonRecordingSpan(t3));
        }
        __name(setSpanContext, "setSpanContext");
        t2.setSpanContext = setSpanContext;
        function getSpanContext(e3) {
          var t3;
          return (t3 = getSpan(e3)) === null || t3 === void 0 ? void 0 : t3.spanContext();
        }
        __name(getSpanContext, "getSpanContext");
        t2.getSpanContext = getSpanContext;
      }, 325: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.TraceStateImpl = void 0;
        const n = r2(564);
        const a = 32;
        const o = 512;
        const i = ",";
        const c = "=";
        class TraceStateImpl {
          static {
            __name(this, "TraceStateImpl");
          }
          constructor(e3) {
            this._internalState = /* @__PURE__ */ new Map();
            if (e3) this._parse(e3);
          }
          set(e3, t3) {
            const r3 = this._clone();
            if (r3._internalState.has(e3)) {
              r3._internalState.delete(e3);
            }
            r3._internalState.set(e3, t3);
            return r3;
          }
          unset(e3) {
            const t3 = this._clone();
            t3._internalState.delete(e3);
            return t3;
          }
          get(e3) {
            return this._internalState.get(e3);
          }
          serialize() {
            return this._keys().reduce((e3, t3) => {
              e3.push(t3 + c + this.get(t3));
              return e3;
            }, []).join(i);
          }
          _parse(e3) {
            if (e3.length > o) return;
            this._internalState = e3.split(i).reverse().reduce((e4, t3) => {
              const r3 = t3.trim();
              const a2 = r3.indexOf(c);
              if (a2 !== -1) {
                const o2 = r3.slice(0, a2);
                const i2 = r3.slice(a2 + 1, t3.length);
                if ((0, n.validateKey)(o2) && (0, n.validateValue)(i2)) {
                  e4.set(o2, i2);
                } else {
                }
              }
              return e4;
            }, /* @__PURE__ */ new Map());
            if (this._internalState.size > a) {
              this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
            }
          }
          _keys() {
            return Array.from(this._internalState.keys()).reverse();
          }
          _clone() {
            const e3 = new TraceStateImpl();
            e3._internalState = new Map(this._internalState);
            return e3;
          }
        }
        t2.TraceStateImpl = TraceStateImpl;
      }, 564: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.validateValue = t2.validateKey = void 0;
        const r2 = "[_0-9a-z-*/]";
        const n = `[a-z]${r2}{0,255}`;
        const a = `[a-z0-9]${r2}{0,240}@[a-z]${r2}{0,13}`;
        const o = new RegExp(`^(?:${n}|${a})$`);
        const i = /^[ -~]{0,255}[!-~]$/;
        const c = /,|=/;
        function validateKey(e3) {
          return o.test(e3);
        }
        __name(validateKey, "validateKey");
        t2.validateKey = validateKey;
        function validateValue(e3) {
          return i.test(e3) && !c.test(e3);
        }
        __name(validateValue, "validateValue");
        t2.validateValue = validateValue;
      }, 98: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.createTraceState = void 0;
        const n = r2(325);
        function createTraceState(e3) {
          return new n.TraceStateImpl(e3);
        }
        __name(createTraceState, "createTraceState");
        t2.createTraceState = createTraceState;
      }, 476: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.INVALID_SPAN_CONTEXT = t2.INVALID_TRACEID = t2.INVALID_SPANID = void 0;
        const n = r2(475);
        t2.INVALID_SPANID = "0000000000000000";
        t2.INVALID_TRACEID = "00000000000000000000000000000000";
        t2.INVALID_SPAN_CONTEXT = { traceId: t2.INVALID_TRACEID, spanId: t2.INVALID_SPANID, traceFlags: n.TraceFlags.NONE };
      }, 357: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.SpanKind = void 0;
        var r2;
        (function(e3) {
          e3[e3["INTERNAL"] = 0] = "INTERNAL";
          e3[e3["SERVER"] = 1] = "SERVER";
          e3[e3["CLIENT"] = 2] = "CLIENT";
          e3[e3["PRODUCER"] = 3] = "PRODUCER";
          e3[e3["CONSUMER"] = 4] = "CONSUMER";
        })(r2 = t2.SpanKind || (t2.SpanKind = {}));
      }, 139: (e2, t2, r2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.wrapSpanContext = t2.isSpanContextValid = t2.isValidSpanId = t2.isValidTraceId = void 0;
        const n = r2(476);
        const a = r2(403);
        const o = /^([0-9a-f]{32})$/i;
        const i = /^[0-9a-f]{16}$/i;
        function isValidTraceId(e3) {
          return o.test(e3) && e3 !== n.INVALID_TRACEID;
        }
        __name(isValidTraceId, "isValidTraceId");
        t2.isValidTraceId = isValidTraceId;
        function isValidSpanId(e3) {
          return i.test(e3) && e3 !== n.INVALID_SPANID;
        }
        __name(isValidSpanId, "isValidSpanId");
        t2.isValidSpanId = isValidSpanId;
        function isSpanContextValid(e3) {
          return isValidTraceId(e3.traceId) && isValidSpanId(e3.spanId);
        }
        __name(isSpanContextValid, "isSpanContextValid");
        t2.isSpanContextValid = isSpanContextValid;
        function wrapSpanContext(e3) {
          return new a.NonRecordingSpan(e3);
        }
        __name(wrapSpanContext, "wrapSpanContext");
        t2.wrapSpanContext = wrapSpanContext;
      }, 847: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.SpanStatusCode = void 0;
        var r2;
        (function(e3) {
          e3[e3["UNSET"] = 0] = "UNSET";
          e3[e3["OK"] = 1] = "OK";
          e3[e3["ERROR"] = 2] = "ERROR";
        })(r2 = t2.SpanStatusCode || (t2.SpanStatusCode = {}));
      }, 475: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.TraceFlags = void 0;
        var r2;
        (function(e3) {
          e3[e3["NONE"] = 0] = "NONE";
          e3[e3["SAMPLED"] = 1] = "SAMPLED";
        })(r2 = t2.TraceFlags || (t2.TraceFlags = {}));
      }, 521: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true });
        t2.VERSION = void 0;
        t2.VERSION = "1.6.0";
      } };
      var t = {};
      function __nccwpck_require__(r2) {
        var n = t[r2];
        if (n !== void 0) {
          return n.exports;
        }
        var a = t[r2] = { exports: {} };
        var o = true;
        try {
          e[r2].call(a.exports, a, a.exports, __nccwpck_require__);
          o = false;
        } finally {
          if (o) delete t[r2];
        }
        return a.exports;
      }
      __name(__nccwpck_require__, "__nccwpck_require__");
      if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
      var r = {};
      (() => {
        var e2 = r;
        Object.defineProperty(e2, "__esModule", { value: true });
        e2.trace = e2.propagation = e2.metrics = e2.diag = e2.context = e2.INVALID_SPAN_CONTEXT = e2.INVALID_TRACEID = e2.INVALID_SPANID = e2.isValidSpanId = e2.isValidTraceId = e2.isSpanContextValid = e2.createTraceState = e2.TraceFlags = e2.SpanStatusCode = e2.SpanKind = e2.SamplingDecision = e2.ProxyTracerProvider = e2.ProxyTracer = e2.defaultTextMapSetter = e2.defaultTextMapGetter = e2.ValueType = e2.createNoopMeter = e2.DiagLogLevel = e2.DiagConsoleLogger = e2.ROOT_CONTEXT = e2.createContextKey = e2.baggageEntryMetadataFromString = void 0;
        var t2 = __nccwpck_require__(369);
        Object.defineProperty(e2, "baggageEntryMetadataFromString", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return t2.baggageEntryMetadataFromString;
        }, "get") });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e2, "createContextKey", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return n.createContextKey;
        }, "get") });
        Object.defineProperty(e2, "ROOT_CONTEXT", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return n.ROOT_CONTEXT;
        }, "get") });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e2, "DiagConsoleLogger", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return a.DiagConsoleLogger;
        }, "get") });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e2, "DiagLogLevel", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return o.DiagLogLevel;
        }, "get") });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e2, "createNoopMeter", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return i.createNoopMeter;
        }, "get") });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e2, "ValueType", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return c.ValueType;
        }, "get") });
        var s2 = __nccwpck_require__(194);
        Object.defineProperty(e2, "defaultTextMapGetter", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return s2.defaultTextMapGetter;
        }, "get") });
        Object.defineProperty(e2, "defaultTextMapSetter", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return s2.defaultTextMapSetter;
        }, "get") });
        var u2 = __nccwpck_require__(125);
        Object.defineProperty(e2, "ProxyTracer", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return u2.ProxyTracer;
        }, "get") });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e2, "ProxyTracerProvider", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return l.ProxyTracerProvider;
        }, "get") });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e2, "SamplingDecision", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return g.SamplingDecision;
        }, "get") });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e2, "SpanKind", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return p.SpanKind;
        }, "get") });
        var d2 = __nccwpck_require__(847);
        Object.defineProperty(e2, "SpanStatusCode", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return d2.SpanStatusCode;
        }, "get") });
        var _2 = __nccwpck_require__(475);
        Object.defineProperty(e2, "TraceFlags", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return _2.TraceFlags;
        }, "get") });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e2, "createTraceState", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return f.createTraceState;
        }, "get") });
        var b2 = __nccwpck_require__(139);
        Object.defineProperty(e2, "isSpanContextValid", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return b2.isSpanContextValid;
        }, "get") });
        Object.defineProperty(e2, "isValidTraceId", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return b2.isValidTraceId;
        }, "get") });
        Object.defineProperty(e2, "isValidSpanId", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return b2.isValidSpanId;
        }, "get") });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e2, "INVALID_SPANID", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return v.INVALID_SPANID;
        }, "get") });
        Object.defineProperty(e2, "INVALID_TRACEID", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return v.INVALID_TRACEID;
        }, "get") });
        Object.defineProperty(e2, "INVALID_SPAN_CONTEXT", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return v.INVALID_SPAN_CONTEXT;
        }, "get") });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e2, "context", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return O.context;
        }, "get") });
        const P2 = __nccwpck_require__(506);
        Object.defineProperty(e2, "diag", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return P2.diag;
        }, "get") });
        const N2 = __nccwpck_require__(886);
        Object.defineProperty(e2, "metrics", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return N2.metrics;
        }, "get") });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e2, "propagation", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return S.propagation;
        }, "get") });
        const C2 = __nccwpck_require__(845);
        Object.defineProperty(e2, "trace", { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return C2.trace;
        }, "get") });
        e2["default"] = { context: O.context, diag: P2.diag, metrics: N2.metrics, propagation: S.propagation, trace: C2.trace };
      })();
      module.exports = r;
    })();
  }
});

// node_modules/next/dist/server/lib/trace/tracer.js
var require_tracer = __commonJS({
  "node_modules/next/dist/server/lib/trace/tracer.js"(exports) {
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
      BubbledError: /* @__PURE__ */ __name(function() {
        return BubbledError;
      }, "BubbledError"),
      SpanKind: /* @__PURE__ */ __name(function() {
        return SpanKind;
      }, "SpanKind"),
      SpanStatusCode: /* @__PURE__ */ __name(function() {
        return SpanStatusCode;
      }, "SpanStatusCode"),
      getTracer: /* @__PURE__ */ __name(function() {
        return getTracer;
      }, "getTracer"),
      isBubbledError: /* @__PURE__ */ __name(function() {
        return isBubbledError;
      }, "isBubbledError")
    });
    var _constants = require_constants2();
    var _isthenable = require_is_thenable();
    var NEXT_OTEL_PERFORMANCE_PREFIX = process.env.NEXT_OTEL_PERFORMANCE_PREFIX;
    var api;
    if (process.env.NEXT_RUNTIME === "edge") {
      api = (init_esm2(), __toCommonJS(esm_exports));
    } else {
      try {
        api = (init_esm2(), __toCommonJS(esm_exports));
      } catch (err) {
        api = require_api();
      }
    }
    var { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
    var BubbledError = class extends Error {
      static {
        __name(this, "BubbledError");
      }
      constructor(bubble, result2) {
        super(), this.bubble = bubble, this.result = result2;
      }
    };
    function isBubbledError(error) {
      if (typeof error !== "object" || error === null) return false;
      return error instanceof BubbledError;
    }
    __name(isBubbledError, "isBubbledError");
    var closeSpanWithError = /* @__PURE__ */ __name((span, error) => {
      if (isBubbledError(error) && error.bubble) {
        span.setAttribute("next.bubble", true);
      } else {
        if (error) {
          span.recordException(error);
          span.setAttribute("error.type", error.name);
        }
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: error == null ? void 0 : error.message
        });
      }
      span.end();
    }, "closeSpanWithError");
    var rootSpanAttributesStore = /* @__PURE__ */ new Map();
    var rootSpanIdKey = api.createContextKey("next.rootSpanId");
    var lastSpanId = 0;
    var getSpanId = /* @__PURE__ */ __name(() => lastSpanId++, "getSpanId");
    var clientTraceDataSetter = {
      set(carrier, key, value) {
        carrier.push({
          key,
          value
        });
      }
    };
    var NextTracerImpl = class {
      static {
        __name(this, "NextTracerImpl");
      }
      /**
      * Returns an instance to the trace with configured name.
      * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
      * This should be lazily evaluated.
      */
      getTracerInstance() {
        return trace.getTracer("next.js", "0.0.1");
      }
      getContext() {
        return context;
      }
      getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
      }
      getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
      }
      withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
          return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
      }
      trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        const { fn, options } = typeof fnOrOptions === "function" ? {
          fn: fnOrOptions,
          options: {}
        } : {
          fn: fnOrEmpty,
          options: {
            ...fnOrOptions
          }
        };
        const spanName = options.spanName ?? type;
        if (!_constants.NextVanillaSpanAllowlist.has(type) && process.env.NEXT_OTEL_VERBOSE !== "1" || options.hideSpan) {
          return fn();
        }
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
          spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
          isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
          isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
          "next.span_name": spanName,
          "next.span_type": type,
          ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), () => this.getTracerInstance().startActiveSpan(spanName, options, (span) => {
          let startTime;
          if (NEXT_OTEL_PERFORMANCE_PREFIX && type && _constants.LogSpanAllowList.has(type)) {
            startTime = "performance" in globalThis && "measure" in performance ? globalThis.performance.now() : void 0;
          }
          let cleanedUp = false;
          const onCleanup = /* @__PURE__ */ __name(() => {
            if (cleanedUp) return;
            cleanedUp = true;
            rootSpanAttributesStore.delete(spanId);
            if (startTime) {
              performance.measure(`${NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split(".").pop() || "").replace(/[A-Z]/g, (match2) => "-" + match2.toLowerCase())}`, {
                start: startTime,
                end: performance.now()
              });
            }
          }, "onCleanup");
          if (isRootSpan) {
            rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
          }
          if (fn.length > 1) {
            try {
              return fn(span, (err) => closeSpanWithError(span, err));
            } catch (err) {
              closeSpanWithError(span, err);
              throw err;
            } finally {
              onCleanup();
            }
          }
          try {
            const result2 = fn(span);
            if ((0, _isthenable.isThenable)(result2)) {
              return result2.then((res) => {
                span.end();
                return res;
              }).catch((err) => {
                closeSpanWithError(span, err);
                throw err;
              }).finally(onCleanup);
            } else {
              span.end();
              onCleanup();
            }
            return result2;
          } catch (err) {
            closeSpanWithError(span, err);
            onCleanup();
            throw err;
          }
        }));
      }
      wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
          args[0],
          {},
          args[1]
        ];
        if (!_constants.NextVanillaSpanAllowlist.has(name) && process.env.NEXT_OTEL_VERBOSE !== "1") {
          return fn;
        }
        return function() {
          let optionsObj = options;
          if (typeof optionsObj === "function" && typeof fn === "function") {
            optionsObj = optionsObj.apply(this, arguments);
          }
          const lastArgId = arguments.length - 1;
          const cb = arguments[lastArgId];
          if (typeof cb === "function") {
            const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
            return tracer.trace(name, optionsObj, (_span, done) => {
              arguments[lastArgId] = function(err) {
                done == null ? void 0 : done(err);
                return scopeBoundCb.apply(this, arguments);
              };
              return fn.apply(this, arguments);
            });
          } else {
            return tracer.trace(name, optionsObj, () => fn.apply(this, arguments));
          }
        };
      }
      startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
      }
      getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : void 0;
        return spanContext;
      }
      getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
      }
      setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes) {
          attributes.set(key, value);
        }
      }
    };
    var getTracer = (() => {
      const tracer = new NextTracerImpl();
      return () => tracer;
    })();
  }
});

// node_modules/next/dist/server/lib/clone-response.js
var require_clone_response = __commonJS({
  "node_modules/next/dist/server/lib/clone-response.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "cloneResponse", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return cloneResponse;
      }, "get")
    });
    var noop2 = /* @__PURE__ */ __name(() => {
    }, "noop");
    var registry;
    if (globalThis.FinalizationRegistry) {
      registry = new FinalizationRegistry((weakRef) => {
        const stream = weakRef.deref();
        if (stream && !stream.locked) {
          stream.cancel("Response object has been garbage collected").then(noop2);
        }
      });
    }
    function cloneResponse(original) {
      if (!original.body) {
        return [
          original,
          original
        ];
      }
      const [body1, body2] = original.body.tee();
      const cloned1 = new Response(body1, {
        status: original.status,
        statusText: original.statusText,
        headers: original.headers
      });
      Object.defineProperty(cloned1, "url", {
        value: original.url,
        // How the original response.url behaves
        configurable: true,
        enumerable: true,
        writable: false
      });
      if (registry && cloned1.body) {
        registry.register(cloned1, new WeakRef(cloned1.body));
      }
      const cloned2 = new Response(body2, {
        status: original.status,
        statusText: original.statusText,
        headers: original.headers
      });
      Object.defineProperty(cloned2, "url", {
        value: original.url,
        // How the original response.url behaves
        configurable: true,
        enumerable: true,
        writable: false
      });
      return [
        cloned1,
        cloned2
      ];
    }
    __name(cloneResponse, "cloneResponse");
  }
});

// node_modules/next/dist/server/lib/dedupe-fetch.js
var require_dedupe_fetch = __commonJS({
  "node_modules/next/dist/server/lib/dedupe-fetch.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "createDedupeFetch", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return createDedupeFetch;
      }, "get")
    });
    var _react = /* @__PURE__ */ _interop_require_wildcard(require_react());
    var _cloneresponse = require_clone_response();
    var _invarianterror = require_invariant_error();
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
      var cache4 = _getRequireWildcardCache(nodeInterop);
      if (cache4 && cache4.has(obj)) {
        return cache4.get(obj);
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
      if (cache4) {
        cache4.set(obj, newObj);
      }
      return newObj;
    }
    __name(_interop_require_wildcard, "_interop_require_wildcard");
    var simpleCacheKey = '["GET",[],null,"follow",null,null,null,null]';
    function generateCacheKey(request) {
      return JSON.stringify([
        request.method,
        Array.from(request.headers.entries()),
        request.mode,
        request.redirect,
        request.credentials,
        request.referrer,
        request.referrerPolicy,
        request.integrity
      ]);
    }
    __name(generateCacheKey, "generateCacheKey");
    function createDedupeFetch(originalFetch) {
      const getCacheEntries = _react.cache(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars -- url is the cache key
        (url) => []
      );
      return /* @__PURE__ */ __name(function dedupeFetch(resource, options) {
        if (options && options.signal) {
          return originalFetch(resource, options);
        }
        let url;
        let cacheKey;
        if (typeof resource === "string" && !options) {
          cacheKey = simpleCacheKey;
          url = resource;
        } else {
          const request = typeof resource === "string" || resource instanceof URL ? new Request(resource, options) : resource;
          if (request.method !== "GET" && request.method !== "HEAD" || request.keepalive) {
            return originalFetch(resource, options);
          }
          cacheKey = generateCacheKey(request);
          url = request.url;
        }
        const cacheEntries = getCacheEntries(url);
        for (let i = 0, j2 = cacheEntries.length; i < j2; i += 1) {
          const [key, promise2] = cacheEntries[i];
          if (key === cacheKey) {
            return promise2.then(() => {
              const response = cacheEntries[i][2];
              if (!response) throw Object.defineProperty(new _invarianterror.InvariantError("No cached response"), "__NEXT_ERROR_CODE", {
                value: "E579",
                enumerable: false,
                configurable: true
              });
              const [cloned1, cloned2] = (0, _cloneresponse.cloneResponse)(response);
              cacheEntries[i][2] = cloned2;
              return cloned1;
            });
          }
        }
        const promise = originalFetch(resource, options);
        const entry = [
          cacheKey,
          promise,
          null
        ];
        cacheEntries.push(entry);
        return promise.then((response) => {
          const [cloned1, cloned2] = (0, _cloneresponse.cloneResponse)(response);
          entry[2] = cloned2;
          return cloned1;
        });
      }, "dedupeFetch");
    }
    __name(createDedupeFetch, "createDedupeFetch");
  }
});

// node_modules/next/dist/lib/detached-promise.js
var require_detached_promise = __commonJS({
  "node_modules/next/dist/lib/detached-promise.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "DetachedPromise", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return DetachedPromise;
      }, "get")
    });
    var DetachedPromise = class {
      static {
        __name(this, "DetachedPromise");
      }
      constructor() {
        let resolve;
        let reject;
        this.promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        this.resolve = resolve;
        this.reject = reject;
      }
    };
  }
});

// node_modules/next/dist/lib/batcher.js
var require_batcher = __commonJS({
  "node_modules/next/dist/lib/batcher.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Batcher", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return Batcher;
      }, "get")
    });
    var _detachedpromise = require_detached_promise();
    var Batcher = class _Batcher {
      static {
        __name(this, "Batcher");
      }
      constructor(cacheKeyFn, schedulerFn = (fn) => fn()) {
        this.cacheKeyFn = cacheKeyFn;
        this.schedulerFn = schedulerFn;
        this.pending = /* @__PURE__ */ new Map();
      }
      static create(options) {
        return new _Batcher(options == null ? void 0 : options.cacheKeyFn, options == null ? void 0 : options.schedulerFn);
      }
      /**
      * Wraps a function in a promise that will be resolved or rejected only once
      * for a given key. This will allow multiple calls to the function to be
      * made, but only one will be executed at a time. The result of the first
      * call will be returned to all callers.
      *
      * @param key the key to use for the cache
      * @param fn the function to wrap
      * @returns a promise that resolves to the result of the function
      */
      async batch(key, fn) {
        const cacheKey = this.cacheKeyFn ? await this.cacheKeyFn(key) : key;
        if (cacheKey === null) {
          return fn(cacheKey, Promise.resolve);
        }
        const pending = this.pending.get(cacheKey);
        if (pending) return pending;
        const { promise, resolve, reject } = new _detachedpromise.DetachedPromise();
        this.pending.set(cacheKey, promise);
        this.schedulerFn(async () => {
          try {
            const result2 = await fn(cacheKey, resolve);
            resolve(result2);
          } catch (err) {
            reject(err);
          } finally {
            this.pending.delete(cacheKey);
          }
        });
        return promise;
      }
    };
  }
});

// node_modules/next/dist/server/response-cache/types.js
var require_types = __commonJS({
  "node_modules/next/dist/server/response-cache/types.js"(exports) {
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
      CachedRouteKind: /* @__PURE__ */ __name(function() {
        return CachedRouteKind;
      }, "CachedRouteKind"),
      IncrementalCacheKind: /* @__PURE__ */ __name(function() {
        return IncrementalCacheKind;
      }, "IncrementalCacheKind")
    });
    var CachedRouteKind = /* @__PURE__ */ function(CachedRouteKind2) {
      CachedRouteKind2["APP_PAGE"] = "APP_PAGE";
      CachedRouteKind2["APP_ROUTE"] = "APP_ROUTE";
      CachedRouteKind2["PAGES"] = "PAGES";
      CachedRouteKind2["FETCH"] = "FETCH";
      CachedRouteKind2["REDIRECT"] = "REDIRECT";
      CachedRouteKind2["IMAGE"] = "IMAGE";
      return CachedRouteKind2;
    }({});
    var IncrementalCacheKind = /* @__PURE__ */ function(IncrementalCacheKind2) {
      IncrementalCacheKind2["APP_PAGE"] = "APP_PAGE";
      IncrementalCacheKind2["APP_ROUTE"] = "APP_ROUTE";
      IncrementalCacheKind2["PAGES"] = "PAGES";
      IncrementalCacheKind2["FETCH"] = "FETCH";
      IncrementalCacheKind2["IMAGE"] = "IMAGE";
      return IncrementalCacheKind2;
    }({});
  }
});

// node_modules/next/dist/server/stream-utils/encoded-tags.js
var require_encoded_tags = __commonJS({
  "node_modules/next/dist/server/stream-utils/encoded-tags.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ENCODED_TAGS", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return ENCODED_TAGS;
      }, "get")
    });
    var ENCODED_TAGS = {
      // opening tags do not have the closing `>` since they can contain other attributes such as `<body className=''>`
      OPENING: {
        // <html
        HTML: new Uint8Array([
          60,
          104,
          116,
          109,
          108
        ]),
        // <body
        BODY: new Uint8Array([
          60,
          98,
          111,
          100,
          121
        ])
      },
      CLOSED: {
        // </head>
        HEAD: new Uint8Array([
          60,
          47,
          104,
          101,
          97,
          100,
          62
        ]),
        // </body>
        BODY: new Uint8Array([
          60,
          47,
          98,
          111,
          100,
          121,
          62
        ]),
        // </html>
        HTML: new Uint8Array([
          60,
          47,
          104,
          116,
          109,
          108,
          62
        ]),
        // </body></html>
        BODY_AND_HTML: new Uint8Array([
          60,
          47,
          98,
          111,
          100,
          121,
          62,
          60,
          47,
          104,
          116,
          109,
          108,
          62
        ])
      },
      META: {
        // Only the match the prefix cause the suffix can be different wether it's xml compatible or not ">" or "/>"
        // <meta name="«nxt-icon»"
        // This is a special mark that will be replaced by the icon insertion script tag.
        ICON_MARK: new Uint8Array([
          60,
          109,
          101,
          116,
          97,
          32,
          110,
          97,
          109,
          101,
          61,
          34,
          194,
          171,
          110,
          120,
          116,
          45,
          105,
          99,
          111,
          110,
          194,
          187,
          34
        ])
      }
    };
  }
});

// node_modules/next/dist/server/stream-utils/uint8array-helpers.js
var require_uint8array_helpers = __commonJS({
  "node_modules/next/dist/server/stream-utils/uint8array-helpers.js"(exports) {
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
      indexOfUint8Array: /* @__PURE__ */ __name(function() {
        return indexOfUint8Array;
      }, "indexOfUint8Array"),
      isEquivalentUint8Arrays: /* @__PURE__ */ __name(function() {
        return isEquivalentUint8Arrays;
      }, "isEquivalentUint8Arrays"),
      removeFromUint8Array: /* @__PURE__ */ __name(function() {
        return removeFromUint8Array;
      }, "removeFromUint8Array")
    });
    function indexOfUint8Array(a, b2) {
      if (b2.length === 0) return 0;
      if (a.length === 0 || b2.length > a.length) return -1;
      for (let i = 0; i <= a.length - b2.length; i++) {
        let completeMatch = true;
        for (let j2 = 0; j2 < b2.length; j2++) {
          if (a[i + j2] !== b2[j2]) {
            completeMatch = false;
            break;
          }
        }
        if (completeMatch) {
          return i;
        }
      }
      return -1;
    }
    __name(indexOfUint8Array, "indexOfUint8Array");
    function isEquivalentUint8Arrays(a, b2) {
      if (a.length !== b2.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b2[i]) return false;
      }
      return true;
    }
    __name(isEquivalentUint8Arrays, "isEquivalentUint8Arrays");
    function removeFromUint8Array(a, b2) {
      const tagIndex = indexOfUint8Array(a, b2);
      if (tagIndex === 0) return a.subarray(b2.length);
      if (tagIndex > -1) {
        const removed = new Uint8Array(a.length - b2.length);
        removed.set(a.slice(0, tagIndex));
        removed.set(a.slice(tagIndex + b2.length), tagIndex);
        return removed;
      } else {
        return a;
      }
    }
    __name(removeFromUint8Array, "removeFromUint8Array");
  }
});

// node_modules/next/dist/shared/lib/errors/constants.js
var require_constants3 = __commonJS({
  "node_modules/next/dist/shared/lib/errors/constants.js"(exports, module) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "MISSING_ROOT_TAGS_ERROR", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return MISSING_ROOT_TAGS_ERROR;
      }, "get")
    });
    var MISSING_ROOT_TAGS_ERROR = "NEXT_MISSING_ROOT_TAGS";
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/segment-cache/output-export-prefetch-encoding.js
var require_output_export_prefetch_encoding = __commonJS({
  "node_modules/next/dist/shared/lib/segment-cache/output-export-prefetch-encoding.js"(exports) {
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
      DOC_PREFETCH_RANGE_HEADER_VALUE: /* @__PURE__ */ __name(function() {
        return DOC_PREFETCH_RANGE_HEADER_VALUE;
      }, "DOC_PREFETCH_RANGE_HEADER_VALUE"),
      doesExportedHtmlMatchBuildId: /* @__PURE__ */ __name(function() {
        return doesExportedHtmlMatchBuildId;
      }, "doesExportedHtmlMatchBuildId"),
      insertBuildIdComment: /* @__PURE__ */ __name(function() {
        return insertBuildIdComment;
      }, "insertBuildIdComment")
    });
    var DOCTYPE_PREFIX = "<!DOCTYPE html>";
    var MAX_BUILD_ID_LENGTH = 24;
    var DOC_PREFETCH_RANGE_HEADER_VALUE = "bytes=0-63";
    function escapeBuildId(buildId) {
      const truncated = buildId.slice(0, MAX_BUILD_ID_LENGTH);
      return truncated.replace(/-/g, "_");
    }
    __name(escapeBuildId, "escapeBuildId");
    function insertBuildIdComment(originalHtml, buildId) {
      if (
        // Skip if the build id contains a closing comment marker.
        buildId.includes("-->") || // React always inserts a doctype at the start of the document. Skip if it
        // isn't present. Shouldn't happen; suggests an issue elsewhere.
        !originalHtml.startsWith(DOCTYPE_PREFIX)
      ) {
        return originalHtml;
      }
      return originalHtml.replace(DOCTYPE_PREFIX, DOCTYPE_PREFIX + "<!--" + escapeBuildId(buildId) + "-->");
    }
    __name(insertBuildIdComment, "insertBuildIdComment");
    function doesExportedHtmlMatchBuildId(partialHtmlDocument, buildId) {
      return partialHtmlDocument.startsWith(DOCTYPE_PREFIX + "<!--" + escapeBuildId(buildId) + "-->");
    }
    __name(doesExportedHtmlMatchBuildId, "doesExportedHtmlMatchBuildId");
  }
});

// node_modules/next/dist/server/stream-utils/node-web-streams-helper.js
var require_node_web_streams_helper = __commonJS({
  "node_modules/next/dist/server/stream-utils/node-web-streams-helper.js"(exports) {
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
      chainStreams: /* @__PURE__ */ __name(function() {
        return chainStreams;
      }, "chainStreams"),
      continueDynamicHTMLResume: /* @__PURE__ */ __name(function() {
        return continueDynamicHTMLResume;
      }, "continueDynamicHTMLResume"),
      continueDynamicPrerender: /* @__PURE__ */ __name(function() {
        return continueDynamicPrerender;
      }, "continueDynamicPrerender"),
      continueFizzStream: /* @__PURE__ */ __name(function() {
        return continueFizzStream;
      }, "continueFizzStream"),
      continueStaticPrerender: /* @__PURE__ */ __name(function() {
        return continueStaticPrerender;
      }, "continueStaticPrerender"),
      createBufferedTransformStream: /* @__PURE__ */ __name(function() {
        return createBufferedTransformStream;
      }, "createBufferedTransformStream"),
      createDocumentClosingStream: /* @__PURE__ */ __name(function() {
        return createDocumentClosingStream;
      }, "createDocumentClosingStream"),
      createRootLayoutValidatorStream: /* @__PURE__ */ __name(function() {
        return createRootLayoutValidatorStream;
      }, "createRootLayoutValidatorStream"),
      renderToInitialFizzStream: /* @__PURE__ */ __name(function() {
        return renderToInitialFizzStream;
      }, "renderToInitialFizzStream"),
      streamFromBuffer: /* @__PURE__ */ __name(function() {
        return streamFromBuffer;
      }, "streamFromBuffer"),
      streamFromString: /* @__PURE__ */ __name(function() {
        return streamFromString;
      }, "streamFromString"),
      streamToBuffer: /* @__PURE__ */ __name(function() {
        return streamToBuffer;
      }, "streamToBuffer"),
      streamToString: /* @__PURE__ */ __name(function() {
        return streamToString;
      }, "streamToString")
    });
    var _tracer = require_tracer();
    var _constants = require_constants2();
    var _detachedpromise = require_detached_promise();
    var _scheduler = require_scheduler();
    var _encodedtags = require_encoded_tags();
    var _uint8arrayhelpers = require_uint8array_helpers();
    var _constants1 = require_constants3();
    var _outputexportprefetchencoding = require_output_export_prefetch_encoding();
    function voidCatch() {
    }
    __name(voidCatch, "voidCatch");
    var encoder = new TextEncoder();
    function chainStreams(...streams) {
      if (streams.length === 0) {
        return new ReadableStream({
          start(controller) {
            controller.close();
          }
        });
      }
      if (streams.length === 1) {
        return streams[0];
      }
      const { readable, writable } = new TransformStream();
      let promise = streams[0].pipeTo(writable, {
        preventClose: true
      });
      let i = 1;
      for (; i < streams.length - 1; i++) {
        const nextStream = streams[i];
        promise = promise.then(() => nextStream.pipeTo(writable, {
          preventClose: true
        }));
      }
      const lastStream = streams[i];
      promise = promise.then(() => lastStream.pipeTo(writable));
      promise.catch(voidCatch);
      return readable;
    }
    __name(chainStreams, "chainStreams");
    function streamFromString(str) {
      return new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(str));
          controller.close();
        }
      });
    }
    __name(streamFromString, "streamFromString");
    function streamFromBuffer(chunk) {
      return new ReadableStream({
        start(controller) {
          controller.enqueue(chunk);
          controller.close();
        }
      });
    }
    __name(streamFromBuffer, "streamFromBuffer");
    async function streamToBuffer(stream) {
      const reader = stream.getReader();
      const chunks = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        chunks.push(value);
      }
      return Buffer.concat(chunks);
    }
    __name(streamToBuffer, "streamToBuffer");
    async function streamToString(stream, signal) {
      const decoder = new TextDecoder("utf-8", {
        fatal: true
      });
      let string = "";
      for await (const chunk of stream) {
        if (signal == null ? void 0 : signal.aborted) {
          return string;
        }
        string += decoder.decode(chunk, {
          stream: true
        });
      }
      string += decoder.decode();
      return string;
    }
    __name(streamToString, "streamToString");
    function createBufferedTransformStream() {
      let bufferedChunks = [];
      let bufferByteLength = 0;
      let pending;
      const flush = /* @__PURE__ */ __name((controller) => {
        if (pending) return;
        const detached = new _detachedpromise.DetachedPromise();
        pending = detached;
        (0, _scheduler.scheduleImmediate)(() => {
          try {
            const chunk = new Uint8Array(bufferByteLength);
            let copiedBytes = 0;
            for (let i = 0; i < bufferedChunks.length; i++) {
              const bufferedChunk = bufferedChunks[i];
              chunk.set(bufferedChunk, copiedBytes);
              copiedBytes += bufferedChunk.byteLength;
            }
            bufferedChunks.length = 0;
            bufferByteLength = 0;
            controller.enqueue(chunk);
          } catch {
          } finally {
            pending = void 0;
            detached.resolve();
          }
        });
      }, "flush");
      return new TransformStream({
        transform(chunk, controller) {
          bufferedChunks.push(chunk);
          bufferByteLength += chunk.byteLength;
          flush(controller);
        },
        flush() {
          if (!pending) return;
          return pending.promise;
        }
      });
    }
    __name(createBufferedTransformStream, "createBufferedTransformStream");
    function createPrefetchCommentStream(isBuildTimePrerendering, buildId) {
      let didTransformFirstChunk = false;
      return new TransformStream({
        transform(chunk, controller) {
          if (isBuildTimePrerendering && !didTransformFirstChunk) {
            didTransformFirstChunk = true;
            const decoder = new TextDecoder("utf-8", {
              fatal: true
            });
            const chunkStr = decoder.decode(chunk, {
              stream: true
            });
            const updatedChunkStr = (0, _outputexportprefetchencoding.insertBuildIdComment)(chunkStr, buildId);
            controller.enqueue(encoder.encode(updatedChunkStr));
            return;
          }
          controller.enqueue(chunk);
        }
      });
    }
    __name(createPrefetchCommentStream, "createPrefetchCommentStream");
    function renderToInitialFizzStream({ ReactDOMServer, element, streamOptions }) {
      return (0, _tracer.getTracer)().trace(_constants.AppRenderSpan.renderToReadableStream, async () => ReactDOMServer.renderToReadableStream(element, streamOptions));
    }
    __name(renderToInitialFizzStream, "renderToInitialFizzStream");
    function createMetadataTransformStream(insert) {
      let chunkIndex = -1;
      let isMarkRemoved = false;
      return new TransformStream({
        async transform(chunk, controller) {
          let iconMarkIndex = -1;
          let closedHeadIndex = -1;
          chunkIndex++;
          if (isMarkRemoved) {
            controller.enqueue(chunk);
            return;
          }
          let iconMarkLength = 0;
          if (iconMarkIndex === -1) {
            iconMarkIndex = (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedtags.ENCODED_TAGS.META.ICON_MARK);
            if (iconMarkIndex === -1) {
              controller.enqueue(chunk);
              return;
            } else {
              iconMarkLength = _encodedtags.ENCODED_TAGS.META.ICON_MARK.length;
              if (chunk[iconMarkIndex + iconMarkLength] === 47) {
                iconMarkLength += 2;
              } else {
                iconMarkLength++;
              }
            }
          }
          if (chunkIndex === 0) {
            closedHeadIndex = (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedtags.ENCODED_TAGS.CLOSED.HEAD);
            if (iconMarkIndex !== -1) {
              if (iconMarkIndex < closedHeadIndex) {
                const replaced = new Uint8Array(chunk.length - iconMarkLength);
                replaced.set(chunk.subarray(0, iconMarkIndex));
                replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex);
                chunk = replaced;
              } else {
                const insertion = await insert();
                const encodedInsertion = encoder.encode(insertion);
                const insertionLength = encodedInsertion.length;
                const replaced = new Uint8Array(chunk.length - iconMarkLength + insertionLength);
                replaced.set(chunk.subarray(0, iconMarkIndex));
                replaced.set(encodedInsertion, iconMarkIndex);
                replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex + insertionLength);
                chunk = replaced;
              }
              isMarkRemoved = true;
            }
          } else {
            const insertion = await insert();
            const encodedInsertion = encoder.encode(insertion);
            const insertionLength = encodedInsertion.length;
            const replaced = new Uint8Array(chunk.length - iconMarkLength + insertionLength);
            replaced.set(chunk.subarray(0, iconMarkIndex));
            replaced.set(encodedInsertion, iconMarkIndex);
            replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex + insertionLength);
            chunk = replaced;
            isMarkRemoved = true;
          }
          controller.enqueue(chunk);
        }
      });
    }
    __name(createMetadataTransformStream, "createMetadataTransformStream");
    function createHeadInsertionTransformStream(insert) {
      let inserted = false;
      let hasBytes = false;
      return new TransformStream({
        async transform(chunk, controller) {
          hasBytes = true;
          const insertion = await insert();
          if (inserted) {
            if (insertion) {
              const encodedInsertion = encoder.encode(insertion);
              controller.enqueue(encodedInsertion);
            }
            controller.enqueue(chunk);
          } else {
            const index = (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedtags.ENCODED_TAGS.CLOSED.HEAD);
            if (index !== -1) {
              if (insertion) {
                const encodedInsertion = encoder.encode(insertion);
                const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
                insertedHeadContent.set(chunk.slice(0, index));
                insertedHeadContent.set(encodedInsertion, index);
                insertedHeadContent.set(chunk.slice(index), index + encodedInsertion.length);
                controller.enqueue(insertedHeadContent);
              } else {
                controller.enqueue(chunk);
              }
              inserted = true;
            } else {
              if (insertion) {
                controller.enqueue(encoder.encode(insertion));
              }
              controller.enqueue(chunk);
              inserted = true;
            }
          }
        },
        async flush(controller) {
          if (hasBytes) {
            const insertion = await insert();
            if (insertion) {
              controller.enqueue(encoder.encode(insertion));
            }
          }
        }
      });
    }
    __name(createHeadInsertionTransformStream, "createHeadInsertionTransformStream");
    function createDeferredSuffixStream(suffix) {
      let flushed = false;
      let pending;
      const flush = /* @__PURE__ */ __name((controller) => {
        const detached = new _detachedpromise.DetachedPromise();
        pending = detached;
        (0, _scheduler.scheduleImmediate)(() => {
          try {
            controller.enqueue(encoder.encode(suffix));
          } catch {
          } finally {
            pending = void 0;
            detached.resolve();
          }
        });
      }, "flush");
      return new TransformStream({
        transform(chunk, controller) {
          controller.enqueue(chunk);
          if (flushed) return;
          flushed = true;
          flush(controller);
        },
        flush(controller) {
          if (pending) return pending.promise;
          if (flushed) return;
          controller.enqueue(encoder.encode(suffix));
        }
      });
    }
    __name(createDeferredSuffixStream, "createDeferredSuffixStream");
    function createFlightDataInjectionTransformStream(stream, delayDataUntilFirstHtmlChunk) {
      let htmlStreamFinished = false;
      let pull = null;
      let donePulling = false;
      function startOrContinuePulling(controller) {
        if (!pull) {
          pull = startPulling(controller);
        }
        return pull;
      }
      __name(startOrContinuePulling, "startOrContinuePulling");
      async function startPulling(controller) {
        const reader = stream.getReader();
        if (delayDataUntilFirstHtmlChunk) {
          await (0, _scheduler.atLeastOneTask)();
        }
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              donePulling = true;
              return;
            }
            if (!delayDataUntilFirstHtmlChunk && !htmlStreamFinished) {
              await (0, _scheduler.atLeastOneTask)();
            }
            controller.enqueue(value);
          }
        } catch (err) {
          controller.error(err);
        }
      }
      __name(startPulling, "startPulling");
      return new TransformStream({
        start(controller) {
          if (!delayDataUntilFirstHtmlChunk) {
            startOrContinuePulling(controller);
          }
        },
        transform(chunk, controller) {
          controller.enqueue(chunk);
          if (delayDataUntilFirstHtmlChunk) {
            startOrContinuePulling(controller);
          }
        },
        flush(controller) {
          htmlStreamFinished = true;
          if (donePulling) {
            return;
          }
          return startOrContinuePulling(controller);
        }
      });
    }
    __name(createFlightDataInjectionTransformStream, "createFlightDataInjectionTransformStream");
    var CLOSE_TAG = "</body></html>";
    function createMoveSuffixStream() {
      let foundSuffix = false;
      return new TransformStream({
        transform(chunk, controller) {
          if (foundSuffix) {
            return controller.enqueue(chunk);
          }
          const index = (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedtags.ENCODED_TAGS.CLOSED.BODY_AND_HTML);
          if (index > -1) {
            foundSuffix = true;
            if (chunk.length === _encodedtags.ENCODED_TAGS.CLOSED.BODY_AND_HTML.length) {
              return;
            }
            const before = chunk.slice(0, index);
            controller.enqueue(before);
            if (chunk.length > _encodedtags.ENCODED_TAGS.CLOSED.BODY_AND_HTML.length + index) {
              const after = chunk.slice(index + _encodedtags.ENCODED_TAGS.CLOSED.BODY_AND_HTML.length);
              controller.enqueue(after);
            }
          } else {
            controller.enqueue(chunk);
          }
        },
        flush(controller) {
          controller.enqueue(_encodedtags.ENCODED_TAGS.CLOSED.BODY_AND_HTML);
        }
      });
    }
    __name(createMoveSuffixStream, "createMoveSuffixStream");
    function createStripDocumentClosingTagsTransform() {
      return new TransformStream({
        transform(chunk, controller) {
          if ((0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedtags.ENCODED_TAGS.CLOSED.BODY_AND_HTML) || (0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedtags.ENCODED_TAGS.CLOSED.BODY) || (0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedtags.ENCODED_TAGS.CLOSED.HTML)) {
            return;
          }
          chunk = (0, _uint8arrayhelpers.removeFromUint8Array)(chunk, _encodedtags.ENCODED_TAGS.CLOSED.BODY);
          chunk = (0, _uint8arrayhelpers.removeFromUint8Array)(chunk, _encodedtags.ENCODED_TAGS.CLOSED.HTML);
          controller.enqueue(chunk);
        }
      });
    }
    __name(createStripDocumentClosingTagsTransform, "createStripDocumentClosingTagsTransform");
    function createRootLayoutValidatorStream() {
      let foundHtml = false;
      let foundBody = false;
      return new TransformStream({
        async transform(chunk, controller) {
          if (!foundHtml && (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedtags.ENCODED_TAGS.OPENING.HTML) > -1) {
            foundHtml = true;
          }
          if (!foundBody && (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedtags.ENCODED_TAGS.OPENING.BODY) > -1) {
            foundBody = true;
          }
          controller.enqueue(chunk);
        },
        flush(controller) {
          const missingTags = [];
          if (!foundHtml) missingTags.push("html");
          if (!foundBody) missingTags.push("body");
          if (!missingTags.length) return;
          controller.enqueue(encoder.encode(`<html id="__next_error__">
            <template
              data-next-error-message="Missing ${missingTags.map((c) => `<${c}>`).join(missingTags.length > 1 ? " and " : "")} tags in the root layout.
Read more at https://nextjs.org/docs/messages/missing-root-layout-tags"
              data-next-error-digest="${_constants1.MISSING_ROOT_TAGS_ERROR}"
              data-next-error-stack=""
            ></template>
          `));
        }
      });
    }
    __name(createRootLayoutValidatorStream, "createRootLayoutValidatorStream");
    function chainTransformers(readable, transformers) {
      let stream = readable;
      for (const transformer of transformers) {
        if (!transformer) continue;
        stream = stream.pipeThrough(transformer);
      }
      return stream;
    }
    __name(chainTransformers, "chainTransformers");
    async function continueFizzStream(renderStream, { suffix, inlinedDataStream, isStaticGeneration, isBuildTimePrerendering, buildId, getServerInsertedHTML, getServerInsertedMetadata, validateRootLayout }) {
      const suffixUnclosed = suffix ? suffix.split(CLOSE_TAG, 1)[0] : null;
      if (isStaticGeneration) {
        await renderStream.allReady;
      }
      return chainTransformers(renderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Add build id comment to start of the HTML document (in export mode)
        createPrefetchCommentStream(isBuildTimePrerendering, buildId),
        // Transform metadata
        createMetadataTransformStream(getServerInsertedMetadata),
        // Insert suffix content
        suffixUnclosed != null && suffixUnclosed.length > 0 ? createDeferredSuffixStream(suffixUnclosed) : null,
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        inlinedDataStream ? createFlightDataInjectionTransformStream(inlinedDataStream, true) : null,
        // Validate the root layout for missing html or body tags
        validateRootLayout ? createRootLayoutValidatorStream() : null,
        // Close tags should always be deferred to the end
        createMoveSuffixStream(),
        // Special head insertions
        // TODO-APP: Insert server side html to end of head in app layout rendering, to avoid
        // hydration errors. Remove this once it's ready to be handled by react itself.
        createHeadInsertionTransformStream(getServerInsertedHTML)
      ]);
    }
    __name(continueFizzStream, "continueFizzStream");
    async function continueDynamicPrerender(prerenderStream, { getServerInsertedHTML, getServerInsertedMetadata }) {
      return prerenderStream.pipeThrough(createBufferedTransformStream()).pipeThrough(createStripDocumentClosingTagsTransform()).pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)).pipeThrough(createMetadataTransformStream(getServerInsertedMetadata));
    }
    __name(continueDynamicPrerender, "continueDynamicPrerender");
    async function continueStaticPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata, isBuildTimePrerendering, buildId }) {
      return prerenderStream.pipeThrough(createBufferedTransformStream()).pipeThrough(createPrefetchCommentStream(isBuildTimePrerendering, buildId)).pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)).pipeThrough(createMetadataTransformStream(getServerInsertedMetadata)).pipeThrough(createFlightDataInjectionTransformStream(inlinedDataStream, true)).pipeThrough(createMoveSuffixStream());
    }
    __name(continueStaticPrerender, "continueStaticPrerender");
    async function continueDynamicHTMLResume(renderStream, { delayDataUntilFirstHtmlChunk, inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata }) {
      return renderStream.pipeThrough(createBufferedTransformStream()).pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)).pipeThrough(createMetadataTransformStream(getServerInsertedMetadata)).pipeThrough(createFlightDataInjectionTransformStream(inlinedDataStream, delayDataUntilFirstHtmlChunk)).pipeThrough(createMoveSuffixStream());
    }
    __name(continueDynamicHTMLResume, "continueDynamicHTMLResume");
    function createDocumentClosingStream() {
      return streamFromString(CLOSE_TAG);
    }
    __name(createDocumentClosingStream, "createDocumentClosingStream");
  }
});

// node_modules/next/dist/server/request-meta.js
var require_request_meta = __commonJS({
  "node_modules/next/dist/server/request-meta.js"(exports) {
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
      NEXT_REQUEST_META: /* @__PURE__ */ __name(function() {
        return NEXT_REQUEST_META;
      }, "NEXT_REQUEST_META"),
      addRequestMeta: /* @__PURE__ */ __name(function() {
        return addRequestMeta;
      }, "addRequestMeta"),
      getRequestMeta: /* @__PURE__ */ __name(function() {
        return getRequestMeta;
      }, "getRequestMeta"),
      removeRequestMeta: /* @__PURE__ */ __name(function() {
        return removeRequestMeta;
      }, "removeRequestMeta"),
      setRequestMeta: /* @__PURE__ */ __name(function() {
        return setRequestMeta;
      }, "setRequestMeta")
    });
    var NEXT_REQUEST_META = Symbol.for("NextInternalRequestMeta");
    function getRequestMeta(req, key) {
      const meta = req[NEXT_REQUEST_META] || {};
      return typeof key === "string" ? meta[key] : meta;
    }
    __name(getRequestMeta, "getRequestMeta");
    function setRequestMeta(req, meta) {
      req[NEXT_REQUEST_META] = meta;
      return meta;
    }
    __name(setRequestMeta, "setRequestMeta");
    function addRequestMeta(request, key, value) {
      const meta = getRequestMeta(request);
      meta[key] = value;
      return setRequestMeta(request, meta);
    }
    __name(addRequestMeta, "addRequestMeta");
    function removeRequestMeta(request, key) {
      const meta = getRequestMeta(request);
      delete meta[key];
      return setRequestMeta(request, meta);
    }
    __name(removeRequestMeta, "removeRequestMeta");
  }
});

// node_modules/next/dist/server/base-http/helpers.js
var require_helpers = __commonJS({
  "node_modules/next/dist/server/base-http/helpers.js"(exports) {
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
      isNodeNextRequest: /* @__PURE__ */ __name(function() {
        return isNodeNextRequest;
      }, "isNodeNextRequest"),
      isNodeNextResponse: /* @__PURE__ */ __name(function() {
        return isNodeNextResponse;
      }, "isNodeNextResponse"),
      isWebNextRequest: /* @__PURE__ */ __name(function() {
        return isWebNextRequest;
      }, "isWebNextRequest"),
      isWebNextResponse: /* @__PURE__ */ __name(function() {
        return isWebNextResponse;
      }, "isWebNextResponse")
    });
    var isWebNextRequest = /* @__PURE__ */ __name((req) => process.env.NEXT_RUNTIME === "edge", "isWebNextRequest");
    var isWebNextResponse = /* @__PURE__ */ __name((res) => process.env.NEXT_RUNTIME === "edge", "isWebNextResponse");
    var isNodeNextRequest = /* @__PURE__ */ __name((req) => process.env.NEXT_RUNTIME !== "edge", "isNodeNextRequest");
    var isNodeNextResponse = /* @__PURE__ */ __name((res) => process.env.NEXT_RUNTIME !== "edge", "isNodeNextResponse");
  }
});

// node_modules/next/dist/server/web/spec-extension/adapters/next-request.js
var require_next_request = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/adapters/next-request.js"(exports) {
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
      NextRequestAdapter: /* @__PURE__ */ __name(function() {
        return NextRequestAdapter;
      }, "NextRequestAdapter"),
      ResponseAborted: /* @__PURE__ */ __name(function() {
        return ResponseAborted;
      }, "ResponseAborted"),
      ResponseAbortedName: /* @__PURE__ */ __name(function() {
        return ResponseAbortedName;
      }, "ResponseAbortedName"),
      createAbortController: /* @__PURE__ */ __name(function() {
        return createAbortController;
      }, "createAbortController"),
      signalFromNodeResponse: /* @__PURE__ */ __name(function() {
        return signalFromNodeResponse;
      }, "signalFromNodeResponse")
    });
    var _requestmeta = require_request_meta();
    var _utils = require_utils();
    var _request = require_request();
    var _helpers = require_helpers();
    var ResponseAbortedName = "ResponseAborted";
    var ResponseAborted = class extends Error {
      static {
        __name(this, "ResponseAborted");
      }
      constructor(...args) {
        super(...args), this.name = ResponseAbortedName;
      }
    };
    function createAbortController(response) {
      const controller = new AbortController();
      response.once("close", () => {
        if (response.writableFinished) return;
        controller.abort(new ResponseAborted());
      });
      return controller;
    }
    __name(createAbortController, "createAbortController");
    function signalFromNodeResponse(response) {
      const { errored, destroyed } = response;
      if (errored || destroyed) {
        return AbortSignal.abort(errored ?? new ResponseAborted());
      }
      const { signal } = createAbortController(response);
      return signal;
    }
    __name(signalFromNodeResponse, "signalFromNodeResponse");
    var NextRequestAdapter = class _NextRequestAdapter {
      static {
        __name(this, "NextRequestAdapter");
      }
      static fromBaseNextRequest(request, signal) {
        if (
          // The type check here ensures that `req` is correctly typed, and the
          // environment variable check provides dead code elimination.
          process.env.NEXT_RUNTIME === "edge" && (0, _helpers.isWebNextRequest)(request)
        ) {
          return _NextRequestAdapter.fromWebNextRequest(request);
        } else if (
          // The type check here ensures that `req` is correctly typed, and the
          // environment variable check provides dead code elimination.
          process.env.NEXT_RUNTIME !== "edge" && (0, _helpers.isNodeNextRequest)(request)
        ) {
          return _NextRequestAdapter.fromNodeNextRequest(request, signal);
        } else {
          throw Object.defineProperty(new Error("Invariant: Unsupported NextRequest type"), "__NEXT_ERROR_CODE", {
            value: "E345",
            enumerable: false,
            configurable: true
          });
        }
      }
      static fromNodeNextRequest(request, signal) {
        let body = null;
        if (request.method !== "GET" && request.method !== "HEAD" && request.body) {
          body = request.body;
        }
        let url;
        if (request.url.startsWith("http")) {
          url = new URL(request.url);
        } else {
          const base = (0, _requestmeta.getRequestMeta)(request, "initURL");
          if (!base || !base.startsWith("http")) {
            url = new URL(request.url, "http://n");
          } else {
            url = new URL(request.url, base);
          }
        }
        return new _request.NextRequest(url, {
          method: request.method,
          headers: (0, _utils.fromNodeOutgoingHttpHeaders)(request.headers),
          duplex: "half",
          signal,
          // geo
          // ip
          // nextConfig
          // body can not be passed if request was aborted
          // or we get a Request body was disturbed error
          ...signal.aborted ? {} : {
            body
          }
        });
      }
      static fromWebNextRequest(request) {
        let body = null;
        if (request.method !== "GET" && request.method !== "HEAD") {
          body = request.body;
        }
        return new _request.NextRequest(request.url, {
          method: request.method,
          headers: (0, _utils.fromNodeOutgoingHttpHeaders)(request.headers),
          duplex: "half",
          signal: request.request.signal,
          // geo
          // ip
          // nextConfig
          // body can not be passed if request was aborted
          // or we get a Request body was disturbed error
          ...request.request.signal.aborted ? {} : {
            body
          }
        });
      }
    };
  }
});

// node_modules/next/dist/server/client-component-renderer-logger.js
var require_client_component_renderer_logger = __commonJS({
  "node_modules/next/dist/server/client-component-renderer-logger.js"(exports) {
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
      getClientComponentLoaderMetrics: /* @__PURE__ */ __name(function() {
        return getClientComponentLoaderMetrics;
      }, "getClientComponentLoaderMetrics"),
      wrapClientComponentLoader: /* @__PURE__ */ __name(function() {
        return wrapClientComponentLoader;
      }, "wrapClientComponentLoader")
    });
    var clientComponentLoadStart = 0;
    var clientComponentLoadTimes = 0;
    var clientComponentLoadCount = 0;
    function wrapClientComponentLoader(ComponentMod) {
      if (!("performance" in globalThis)) {
        return ComponentMod.__next_app__;
      }
      return {
        require: /* @__PURE__ */ __name((...args) => {
          const startTime = performance.now();
          if (clientComponentLoadStart === 0) {
            clientComponentLoadStart = startTime;
          }
          try {
            clientComponentLoadCount += 1;
            return ComponentMod.__next_app__.require(...args);
          } finally {
            clientComponentLoadTimes += performance.now() - startTime;
          }
        }, "require"),
        loadChunk: /* @__PURE__ */ __name((...args) => {
          const startTime = performance.now();
          const result2 = ComponentMod.__next_app__.loadChunk(...args);
          result2.finally(() => {
            clientComponentLoadTimes += performance.now() - startTime;
          });
          return result2;
        }, "loadChunk")
      };
    }
    __name(wrapClientComponentLoader, "wrapClientComponentLoader");
    function getClientComponentLoaderMetrics(options = {}) {
      const metrics = clientComponentLoadStart === 0 ? void 0 : {
        clientComponentLoadStart,
        clientComponentLoadTimes,
        clientComponentLoadCount
      };
      if (options.reset) {
        clientComponentLoadStart = 0;
        clientComponentLoadTimes = 0;
        clientComponentLoadCount = 0;
      }
      return metrics;
    }
    __name(getClientComponentLoaderMetrics, "getClientComponentLoaderMetrics");
  }
});

// node_modules/next/dist/server/pipe-readable.js
var require_pipe_readable = __commonJS({
  "node_modules/next/dist/server/pipe-readable.js"(exports) {
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
      isAbortError: /* @__PURE__ */ __name(function() {
        return isAbortError;
      }, "isAbortError"),
      pipeToNodeResponse: /* @__PURE__ */ __name(function() {
        return pipeToNodeResponse;
      }, "pipeToNodeResponse")
    });
    var _nextrequest = require_next_request();
    var _detachedpromise = require_detached_promise();
    var _tracer = require_tracer();
    var _constants = require_constants2();
    var _clientcomponentrendererlogger = require_client_component_renderer_logger();
    function isAbortError(e) {
      return (e == null ? void 0 : e.name) === "AbortError" || (e == null ? void 0 : e.name) === _nextrequest.ResponseAbortedName;
    }
    __name(isAbortError, "isAbortError");
    function createWriterFromResponse(res, waitUntilForEnd) {
      let started = false;
      let drained = new _detachedpromise.DetachedPromise();
      function onDrain() {
        drained.resolve();
      }
      __name(onDrain, "onDrain");
      res.on("drain", onDrain);
      res.once("close", () => {
        res.off("drain", onDrain);
        drained.resolve();
      });
      const finished = new _detachedpromise.DetachedPromise();
      res.once("finish", () => {
        finished.resolve();
      });
      return new WritableStream({
        write: /* @__PURE__ */ __name(async (chunk) => {
          if (!started) {
            started = true;
            if ("performance" in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX) {
              const metrics = (0, _clientcomponentrendererlogger.getClientComponentLoaderMetrics)();
              if (metrics) {
                performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, {
                  start: metrics.clientComponentLoadStart,
                  end: metrics.clientComponentLoadStart + metrics.clientComponentLoadTimes
                });
              }
            }
            res.flushHeaders();
            (0, _tracer.getTracer)().trace(_constants.NextNodeServerSpan.startResponse, {
              spanName: "start response"
            }, () => void 0);
          }
          try {
            const ok = res.write(chunk);
            if ("flush" in res && typeof res.flush === "function") {
              res.flush();
            }
            if (!ok) {
              await drained.promise;
              drained = new _detachedpromise.DetachedPromise();
            }
          } catch (err) {
            res.end();
            throw Object.defineProperty(new Error("failed to write chunk to response", {
              cause: err
            }), "__NEXT_ERROR_CODE", {
              value: "E321",
              enumerable: false,
              configurable: true
            });
          }
        }, "write"),
        abort: /* @__PURE__ */ __name((err) => {
          if (res.writableFinished) return;
          res.destroy(err);
        }, "abort"),
        close: /* @__PURE__ */ __name(async () => {
          if (waitUntilForEnd) {
            await waitUntilForEnd;
          }
          if (res.writableFinished) return;
          res.end();
          return finished.promise;
        }, "close")
      });
    }
    __name(createWriterFromResponse, "createWriterFromResponse");
    async function pipeToNodeResponse(readable, res, waitUntilForEnd) {
      try {
        const { errored, destroyed } = res;
        if (errored || destroyed) return;
        const controller = (0, _nextrequest.createAbortController)(res);
        const writer = createWriterFromResponse(res, waitUntilForEnd);
        await readable.pipeTo(writer, {
          signal: controller.signal
        });
      } catch (err) {
        if (isAbortError(err)) return;
        throw Object.defineProperty(new Error("failed to pipe response", {
          cause: err
        }), "__NEXT_ERROR_CODE", {
          value: "E180",
          enumerable: false,
          configurable: true
        });
      }
    }
    __name(pipeToNodeResponse, "pipeToNodeResponse");
  }
});

// node_modules/next/dist/server/render-result.js
var require_render_result = __commonJS({
  "node_modules/next/dist/server/render-result.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return RenderResult;
      }, "get")
    });
    var _nodewebstreamshelper = require_node_web_streams_helper();
    var _pipereadable = require_pipe_readable();
    var _invarianterror = require_invariant_error();
    var RenderResult = class _RenderResult {
      static {
        __name(this, "RenderResult");
      }
      static #_ = (
        /**
        * A render result that represents an empty response. This is used to
        * represent a response that was not found or was already sent.
        */
        this.EMPTY = new _RenderResult(null, {
          metadata: {},
          contentType: null
        })
      );
      /**
      * Creates a new RenderResult instance from a static response.
      *
      * @param value the static response value
      * @param contentType the content type of the response
      * @returns a new RenderResult instance
      */
      static fromStatic(value, contentType) {
        return new _RenderResult(value, {
          metadata: {},
          contentType
        });
      }
      constructor(response, { contentType, waitUntil, metadata: metadata2 }) {
        this.response = response;
        this.contentType = contentType;
        this.metadata = metadata2;
        this.waitUntil = waitUntil;
      }
      assignMetadata(metadata2) {
        Object.assign(this.metadata, metadata2);
      }
      /**
      * Returns true if the response is null. It can be null if the response was
      * not found or was already sent.
      */
      get isNull() {
        return this.response === null;
      }
      /**
      * Returns false if the response is a string. It can be a string if the page
      * was prerendered. If it's not, then it was generated dynamically.
      */
      get isDynamic() {
        return typeof this.response !== "string";
      }
      toUnchunkedString(stream = false) {
        if (this.response === null) {
          return "";
        }
        if (typeof this.response !== "string") {
          if (!stream) {
            throw Object.defineProperty(new _invarianterror.InvariantError("dynamic responses cannot be unchunked. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
              value: "E732",
              enumerable: false,
              configurable: true
            });
          }
          return (0, _nodewebstreamshelper.streamToString)(this.readable);
        }
        return this.response;
      }
      /**
      * Returns a readable stream of the response.
      */
      get readable() {
        if (this.response === null) {
          return new ReadableStream({
            start(controller) {
              controller.close();
            }
          });
        }
        if (typeof this.response === "string") {
          return (0, _nodewebstreamshelper.streamFromString)(this.response);
        }
        if (Buffer.isBuffer(this.response)) {
          return (0, _nodewebstreamshelper.streamFromBuffer)(this.response);
        }
        if (Array.isArray(this.response)) {
          return (0, _nodewebstreamshelper.chainStreams)(...this.response);
        }
        return this.response;
      }
      /**
      * Coerces the response to an array of streams. This will convert the response
      * to an array of streams if it is not already one.
      *
      * @returns An array of streams
      */
      coerce() {
        if (this.response === null) {
          return [];
        }
        if (typeof this.response === "string") {
          return [
            (0, _nodewebstreamshelper.streamFromString)(this.response)
          ];
        } else if (Array.isArray(this.response)) {
          return this.response;
        } else if (Buffer.isBuffer(this.response)) {
          return [
            (0, _nodewebstreamshelper.streamFromBuffer)(this.response)
          ];
        } else {
          return [
            this.response
          ];
        }
      }
      /**
      * Unshifts a new stream to the response. This will convert the response to an
      * array of streams if it is not already one and will add the new stream to
      * the start of the array. When this response is piped, all of the streams
      * will be piped one after the other.
      *
      * @param readable The new stream to unshift
      */
      unshift(readable) {
        this.response = this.coerce();
        this.response.unshift(readable);
      }
      /**
      * Chains a new stream to the response. This will convert the response to an
      * array of streams if it is not already one and will add the new stream to
      * the end. When this response is piped, all of the streams will be piped
      * one after the other.
      *
      * @param readable The new stream to chain
      */
      push(readable) {
        this.response = this.coerce();
        this.response.push(readable);
      }
      /**
      * Pipes the response to a writable stream. This will close/cancel the
      * writable stream if an error is encountered. If this doesn't throw, then
      * the writable stream will be closed or aborted.
      *
      * @param writable Writable stream to pipe the response to
      */
      async pipeTo(writable) {
        try {
          await this.readable.pipeTo(writable, {
            // We want to close the writable stream ourselves so that we can wait
            // for the waitUntil promise to resolve before closing it. If an error
            // is encountered, we'll abort the writable stream if we swallowed the
            // error.
            preventClose: true
          });
          if (this.waitUntil) await this.waitUntil;
          await writable.close();
        } catch (err) {
          if ((0, _pipereadable.isAbortError)(err)) {
            await writable.abort(err);
            return;
          }
          throw err;
        }
      }
      /**
      * Pipes the response to a node response. This will close/cancel the node
      * response if an error is encountered.
      *
      * @param res
      */
      async pipeToNodeResponse(res) {
        await (0, _pipereadable.pipeToNodeResponse)(this.readable, res, this.waitUntil);
      }
    };
  }
});

// node_modules/next/dist/server/route-kind.js
var require_route_kind = __commonJS({
  "node_modules/next/dist/server/route-kind.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "RouteKind", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return RouteKind;
      }, "get")
    });
    var RouteKind = /* @__PURE__ */ function(RouteKind2) {
      RouteKind2["PAGES"] = "PAGES";
      RouteKind2["PAGES_API"] = "PAGES_API";
      RouteKind2["APP_PAGE"] = "APP_PAGE";
      RouteKind2["APP_ROUTE"] = "APP_ROUTE";
      RouteKind2["IMAGE"] = "IMAGE";
      return RouteKind2;
    }({});
  }
});

// node_modules/next/dist/server/response-cache/utils.js
var require_utils2 = __commonJS({
  "node_modules/next/dist/server/response-cache/utils.js"(exports) {
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
      fromResponseCacheEntry: /* @__PURE__ */ __name(function() {
        return fromResponseCacheEntry;
      }, "fromResponseCacheEntry"),
      routeKindToIncrementalCacheKind: /* @__PURE__ */ __name(function() {
        return routeKindToIncrementalCacheKind;
      }, "routeKindToIncrementalCacheKind"),
      toResponseCacheEntry: /* @__PURE__ */ __name(function() {
        return toResponseCacheEntry;
      }, "toResponseCacheEntry")
    });
    var _types = require_types();
    var _renderresult = /* @__PURE__ */ _interop_require_default(require_render_result());
    var _routekind = require_route_kind();
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    __name(_interop_require_default, "_interop_require_default");
    async function fromResponseCacheEntry(cacheEntry) {
      var _cacheEntry_value, _cacheEntry_value1;
      return {
        ...cacheEntry,
        value: ((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) === _types.CachedRouteKind.PAGES ? {
          kind: _types.CachedRouteKind.PAGES,
          html: await cacheEntry.value.html.toUnchunkedString(true),
          pageData: cacheEntry.value.pageData,
          headers: cacheEntry.value.headers,
          status: cacheEntry.value.status
        } : ((_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind) === _types.CachedRouteKind.APP_PAGE ? {
          kind: _types.CachedRouteKind.APP_PAGE,
          html: await cacheEntry.value.html.toUnchunkedString(true),
          postponed: cacheEntry.value.postponed,
          rscData: cacheEntry.value.rscData,
          headers: cacheEntry.value.headers,
          status: cacheEntry.value.status,
          segmentData: cacheEntry.value.segmentData
        } : cacheEntry.value
      };
    }
    __name(fromResponseCacheEntry, "fromResponseCacheEntry");
    async function toResponseCacheEntry(response) {
      var _response_value, _response_value1;
      if (!response) return null;
      return {
        isMiss: response.isMiss,
        isStale: response.isStale,
        cacheControl: response.cacheControl,
        value: ((_response_value = response.value) == null ? void 0 : _response_value.kind) === _types.CachedRouteKind.PAGES ? {
          kind: _types.CachedRouteKind.PAGES,
          html: _renderresult.default.fromStatic(response.value.html, _constants.HTML_CONTENT_TYPE_HEADER),
          pageData: response.value.pageData,
          headers: response.value.headers,
          status: response.value.status
        } : ((_response_value1 = response.value) == null ? void 0 : _response_value1.kind) === _types.CachedRouteKind.APP_PAGE ? {
          kind: _types.CachedRouteKind.APP_PAGE,
          html: _renderresult.default.fromStatic(response.value.html, _constants.HTML_CONTENT_TYPE_HEADER),
          rscData: response.value.rscData,
          headers: response.value.headers,
          status: response.value.status,
          postponed: response.value.postponed,
          segmentData: response.value.segmentData
        } : response.value
      };
    }
    __name(toResponseCacheEntry, "toResponseCacheEntry");
    function routeKindToIncrementalCacheKind(routeKind) {
      switch (routeKind) {
        case _routekind.RouteKind.PAGES:
          return _types.IncrementalCacheKind.PAGES;
        case _routekind.RouteKind.APP_PAGE:
          return _types.IncrementalCacheKind.APP_PAGE;
        case _routekind.RouteKind.IMAGE:
          return _types.IncrementalCacheKind.IMAGE;
        case _routekind.RouteKind.APP_ROUTE:
          return _types.IncrementalCacheKind.APP_ROUTE;
        case _routekind.RouteKind.PAGES_API:
          throw Object.defineProperty(new Error(`Unexpected route kind ${routeKind}`), "__NEXT_ERROR_CODE", {
            value: "E64",
            enumerable: false,
            configurable: true
          });
        default:
          return routeKind;
      }
    }
    __name(routeKindToIncrementalCacheKind, "routeKindToIncrementalCacheKind");
  }
});

// node_modules/next/dist/server/response-cache/index.js
var require_response_cache = __commonJS({
  "node_modules/next/dist/server/response-cache/index.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return ResponseCache;
      }, "get")
    });
    var _batcher = require_batcher();
    var _lrucache = require_lru_cache();
    var _log = require_log();
    var _scheduler = require_scheduler();
    var _utils = require_utils2();
    _export_star(require_types(), exports);
    function _export_star(from, to) {
      Object.keys(from).forEach(function(k2) {
        if (k2 !== "default" && !Object.prototype.hasOwnProperty.call(to, k2)) {
          Object.defineProperty(to, k2, {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return from[k2];
            }, "get")
          });
        }
      });
      return from;
    }
    __name(_export_star, "_export_star");
    function parsePositiveInt(envValue, fallback) {
      if (!envValue) return fallback;
      const parsed = parseInt(envValue, 10);
      return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
    }
    __name(parsePositiveInt, "parsePositiveInt");
    var DEFAULT_TTL_MS = parsePositiveInt(process.env.NEXT_PRIVATE_RESPONSE_CACHE_TTL, 1e4);
    var DEFAULT_MAX_SIZE = parsePositiveInt(process.env.NEXT_PRIVATE_RESPONSE_CACHE_MAX_SIZE, 150);
    var KEY_SEPARATOR = "\0";
    var TTL_SENTINEL = "__ttl_sentinel__";
    function createCacheKey(pathname, invocationID) {
      return `${pathname}${KEY_SEPARATOR}${invocationID ?? TTL_SENTINEL}`;
    }
    __name(createCacheKey, "createCacheKey");
    function extractInvocationID(compoundKey) {
      const separatorIndex = compoundKey.lastIndexOf(KEY_SEPARATOR);
      if (separatorIndex === -1) return void 0;
      const invocationID = compoundKey.slice(separatorIndex + 1);
      return invocationID === TTL_SENTINEL ? void 0 : invocationID;
    }
    __name(extractInvocationID, "extractInvocationID");
    var ResponseCache = class {
      static {
        __name(this, "ResponseCache");
      }
      constructor(minimal_mode, maxSize = DEFAULT_MAX_SIZE, ttl = DEFAULT_TTL_MS) {
        this.batcher = _batcher.Batcher.create({
          // Ensure on-demand revalidate doesn't block normal requests, it should be
          // safe to run an on-demand revalidate for the same key as a normal request.
          cacheKeyFn: /* @__PURE__ */ __name(({ key, isOnDemandRevalidate }) => `${key}-${isOnDemandRevalidate ? "1" : "0"}`, "cacheKeyFn"),
          // We wait to do any async work until after we've added our promise to
          // `pendingResponses` to ensure that any any other calls will reuse the
          // same promise until we've fully finished our work.
          schedulerFn: _scheduler.scheduleOnNextTick
        });
        this.revalidateBatcher = _batcher.Batcher.create({
          // We wait to do any async work until after we've added our promise to
          // `pendingResponses` to ensure that any any other calls will reuse the
          // same promise until we've fully finished our work.
          schedulerFn: _scheduler.scheduleOnNextTick
        });
        this.evictedInvocationIDs = /* @__PURE__ */ new Set();
        this.minimal_mode = minimal_mode;
        this.maxSize = maxSize;
        this.ttl = ttl;
        this.cache = new _lrucache.LRUCache(maxSize, void 0, (compoundKey) => {
          const invocationID = extractInvocationID(compoundKey);
          if (invocationID) {
            if (this.evictedInvocationIDs.size >= 100) {
              const first = this.evictedInvocationIDs.values().next().value;
              if (first) this.evictedInvocationIDs.delete(first);
            }
            this.evictedInvocationIDs.add(invocationID);
          }
        });
      }
      async get(key, responseGenerator, context) {
        if (!key) {
          return responseGenerator({
            hasResolved: false,
            previousCacheEntry: null
          });
        }
        if (this.minimal_mode) {
          const cacheKey = createCacheKey(key, context.invocationID);
          const cachedItem = this.cache.get(cacheKey);
          if (cachedItem) {
            if (context.invocationID !== void 0) {
              return (0, _utils.toResponseCacheEntry)(cachedItem.entry);
            }
            const now = Date.now();
            if (cachedItem.expiresAt > now) {
              return (0, _utils.toResponseCacheEntry)(cachedItem.entry);
            }
            this.cache.remove(cacheKey);
          }
          if (context.invocationID && this.evictedInvocationIDs.has(context.invocationID)) {
            (0, _log.warnOnce)(`Response cache entry was evicted for invocation ${context.invocationID}. Consider increasing NEXT_PRIVATE_RESPONSE_CACHE_MAX_SIZE (current: ${this.maxSize}).`);
          }
        }
        const { incrementalCache, isOnDemandRevalidate = false, isFallback = false, isRoutePPREnabled = false, isPrefetch = false, waitUntil, routeKind, invocationID } = context;
        const response = await this.batcher.batch({
          key,
          isOnDemandRevalidate
        }, (_cacheKey, resolve) => {
          const promise = this.handleGet(key, responseGenerator, {
            incrementalCache,
            isOnDemandRevalidate,
            isFallback,
            isRoutePPREnabled,
            isPrefetch,
            routeKind,
            invocationID
          }, resolve);
          if (waitUntil) {
            waitUntil(promise);
          }
          return promise;
        });
        return (0, _utils.toResponseCacheEntry)(response);
      }
      /**
      * Handles the get request for the response cache.
      *
      * @param key - The key to get the response cache entry for.
      * @param responseGenerator - The response generator to use to generate the response cache entry.
      * @param context - The context for the get request.
      * @param resolve - The resolve function to use to resolve the response cache entry.
      * @returns The response cache entry.
      */
      async handleGet(key, responseGenerator, context, resolve) {
        let previousIncrementalCacheEntry = null;
        let resolved = false;
        try {
          previousIncrementalCacheEntry = !this.minimal_mode ? await context.incrementalCache.get(key, {
            kind: (0, _utils.routeKindToIncrementalCacheKind)(context.routeKind),
            isRoutePPREnabled: context.isRoutePPREnabled,
            isFallback: context.isFallback
          }) : null;
          if (previousIncrementalCacheEntry && !context.isOnDemandRevalidate) {
            resolve(previousIncrementalCacheEntry);
            resolved = true;
            if (!previousIncrementalCacheEntry.isStale || context.isPrefetch) {
              return previousIncrementalCacheEntry;
            }
          }
          const incrementalResponseCacheEntry = await this.revalidate(key, context.incrementalCache, context.isRoutePPREnabled, context.isFallback, responseGenerator, previousIncrementalCacheEntry, previousIncrementalCacheEntry !== null && !context.isOnDemandRevalidate, void 0, context.invocationID);
          if (!incrementalResponseCacheEntry) {
            if (this.minimal_mode) {
              const cacheKey = createCacheKey(key, context.invocationID);
              this.cache.remove(cacheKey);
            }
            return null;
          }
          if (context.isOnDemandRevalidate && !resolved) {
            return incrementalResponseCacheEntry;
          }
          return incrementalResponseCacheEntry;
        } catch (err) {
          if (resolved) {
            console.error(err);
            return null;
          }
          throw err;
        }
      }
      /**
      * Revalidates the cache entry for the given key.
      *
      * @param key - The key to revalidate the cache entry for.
      * @param incrementalCache - The incremental cache to use to revalidate the cache entry.
      * @param isRoutePPREnabled - Whether the route is PPR enabled.
      * @param isFallback - Whether the route is a fallback.
      * @param responseGenerator - The response generator to use to generate the response cache entry.
      * @param previousIncrementalCacheEntry - The previous cache entry to use to revalidate the cache entry.
      * @param hasResolved - Whether the response has been resolved.
      * @param waitUntil - Optional function to register background work.
      * @param invocationID - The invocation ID for cache key scoping.
      * @returns The revalidated cache entry.
      */
      async revalidate(key, incrementalCache, isRoutePPREnabled, isFallback, responseGenerator, previousIncrementalCacheEntry, hasResolved, waitUntil, invocationID) {
        return this.revalidateBatcher.batch(key, () => {
          const promise = this.handleRevalidate(key, incrementalCache, isRoutePPREnabled, isFallback, responseGenerator, previousIncrementalCacheEntry, hasResolved, invocationID);
          if (waitUntil) waitUntil(promise);
          return promise;
        });
      }
      async handleRevalidate(key, incrementalCache, isRoutePPREnabled, isFallback, responseGenerator, previousIncrementalCacheEntry, hasResolved, invocationID) {
        try {
          const responseCacheEntry = await responseGenerator({
            hasResolved,
            previousCacheEntry: previousIncrementalCacheEntry,
            isRevalidating: true
          });
          if (!responseCacheEntry) {
            return null;
          }
          const incrementalResponseCacheEntry = await (0, _utils.fromResponseCacheEntry)({
            ...responseCacheEntry,
            isMiss: !previousIncrementalCacheEntry
          });
          if (incrementalResponseCacheEntry.cacheControl) {
            if (this.minimal_mode) {
              const cacheKey = createCacheKey(key, invocationID);
              this.cache.set(cacheKey, {
                entry: incrementalResponseCacheEntry,
                expiresAt: Date.now() + this.ttl
              });
            } else {
              await incrementalCache.set(key, incrementalResponseCacheEntry.value, {
                cacheControl: incrementalResponseCacheEntry.cacheControl,
                isRoutePPREnabled,
                isFallback
              });
            }
          }
          return incrementalResponseCacheEntry;
        } catch (err) {
          if (previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.cacheControl) {
            const revalidate = Math.min(Math.max(previousIncrementalCacheEntry.cacheControl.revalidate || 3, 3), 30);
            const expire = previousIncrementalCacheEntry.cacheControl.expire === void 0 ? void 0 : Math.max(revalidate + 3, previousIncrementalCacheEntry.cacheControl.expire);
            await incrementalCache.set(key, previousIncrementalCacheEntry.value, {
              cacheControl: {
                revalidate,
                expire
              },
              isRoutePPREnabled,
              isFallback
            });
          }
          throw err;
        }
      }
    };
  }
});

// node_modules/next/dist/server/lib/patch-fetch.js
var require_patch_fetch = __commonJS({
  "node_modules/next/dist/server/lib/patch-fetch.js"(exports) {
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
      NEXT_PATCH_SYMBOL: /* @__PURE__ */ __name(function() {
        return NEXT_PATCH_SYMBOL;
      }, "NEXT_PATCH_SYMBOL"),
      createPatchedFetcher: /* @__PURE__ */ __name(function() {
        return createPatchedFetcher;
      }, "createPatchedFetcher"),
      patchFetch: /* @__PURE__ */ __name(function() {
        return patchFetch;
      }, "patchFetch"),
      validateRevalidate: /* @__PURE__ */ __name(function() {
        return validateRevalidate;
      }, "validateRevalidate"),
      validateTags: /* @__PURE__ */ __name(function() {
        return validateTags;
      }, "validateTags")
    });
    var _constants = require_constants2();
    var _tracer = require_tracer();
    var _constants1 = require_constants();
    var _dynamicrendering = require_dynamic_rendering();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _dedupefetch = require_dedupe_fetch();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _responsecache = require_response_cache();
    var _scheduler = require_scheduler();
    var _cloneresponse = require_clone_response();
    var isEdgeRuntime = process.env.NEXT_RUNTIME === "edge";
    var NEXT_PATCH_SYMBOL = Symbol.for("next-patch");
    function isFetchPatched() {
      return globalThis[NEXT_PATCH_SYMBOL] === true;
    }
    __name(isFetchPatched, "isFetchPatched");
    function validateRevalidate(revalidateVal, route) {
      try {
        let normalizedRevalidate = void 0;
        if (revalidateVal === false) {
          normalizedRevalidate = _constants1.INFINITE_CACHE;
        } else if (typeof revalidateVal === "number" && !isNaN(revalidateVal) && revalidateVal > -1) {
          normalizedRevalidate = revalidateVal;
        } else if (typeof revalidateVal !== "undefined") {
          throw Object.defineProperty(new Error(`Invalid revalidate value "${revalidateVal}" on "${route}", must be a non-negative number or false`), "__NEXT_ERROR_CODE", {
            value: "E179",
            enumerable: false,
            configurable: true
          });
        }
        return normalizedRevalidate;
      } catch (err) {
        if (err instanceof Error && err.message.includes("Invalid revalidate")) {
          throw err;
        }
        return void 0;
      }
    }
    __name(validateRevalidate, "validateRevalidate");
    function validateTags(tags, description) {
      const validTags = [];
      const invalidTags = [];
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        if (typeof tag !== "string") {
          invalidTags.push({
            tag,
            reason: "invalid type, must be a string"
          });
        } else if (tag.length > _constants1.NEXT_CACHE_TAG_MAX_LENGTH) {
          invalidTags.push({
            tag,
            reason: `exceeded max length of ${_constants1.NEXT_CACHE_TAG_MAX_LENGTH}`
          });
        } else {
          validTags.push(tag);
        }
        if (validTags.length > _constants1.NEXT_CACHE_TAG_MAX_ITEMS) {
          console.warn(`Warning: exceeded max tag count for ${description}, dropped tags:`, tags.slice(i).join(", "));
          break;
        }
      }
      if (invalidTags.length > 0) {
        console.warn(`Warning: invalid tags passed to ${description}: `);
        for (const { tag, reason } of invalidTags) {
          console.log(`tag: "${tag}" ${reason}`);
        }
      }
      return validTags;
    }
    __name(validateTags, "validateTags");
    function trackFetchMetric(workStore, ctx) {
      if (!workStore.shouldTrackFetchMetrics) {
        return;
      }
      workStore.fetchMetrics ??= [];
      workStore.fetchMetrics.push({
        ...ctx,
        end: performance.timeOrigin + performance.now(),
        idx: workStore.nextFetchId || 0
      });
    }
    __name(trackFetchMetric, "trackFetchMetric");
    async function createCachedPrerenderResponse(res, cacheKey, incrementalCacheContext, incrementalCache, revalidate, handleUnlock) {
      const bodyBuffer = await res.arrayBuffer();
      const fetchedData = {
        headers: Object.fromEntries(res.headers.entries()),
        body: Buffer.from(bodyBuffer).toString("base64"),
        status: res.status,
        url: res.url
      };
      if (incrementalCacheContext) {
        await incrementalCache.set(cacheKey, {
          kind: _responsecache.CachedRouteKind.FETCH,
          data: fetchedData,
          revalidate
        }, incrementalCacheContext);
      }
      await handleUnlock();
      return new Response(bodyBuffer, {
        headers: res.headers,
        status: res.status,
        statusText: res.statusText
      });
    }
    __name(createCachedPrerenderResponse, "createCachedPrerenderResponse");
    async function createCachedDynamicResponse(workStore, res, cacheKey, incrementalCacheContext, incrementalCache, serverComponentsHmrCache, revalidate, input, handleUnlock) {
      const [cloned1, cloned2] = (0, _cloneresponse.cloneResponse)(res);
      const cacheSetPromise = cloned1.arrayBuffer().then(async (arrayBuffer) => {
        const bodyBuffer = Buffer.from(arrayBuffer);
        const fetchedData = {
          headers: Object.fromEntries(cloned1.headers.entries()),
          body: bodyBuffer.toString("base64"),
          status: cloned1.status,
          url: cloned1.url
        };
        serverComponentsHmrCache == null ? void 0 : serverComponentsHmrCache.set(cacheKey, fetchedData);
        if (incrementalCacheContext) {
          await incrementalCache.set(cacheKey, {
            kind: _responsecache.CachedRouteKind.FETCH,
            data: fetchedData,
            revalidate
          }, incrementalCacheContext);
        }
      }).catch((error) => console.warn(`Failed to set fetch cache`, input, error)).finally(handleUnlock);
      const pendingRevalidateKey = `cache-set-${cacheKey}`;
      workStore.pendingRevalidates ??= {};
      if (pendingRevalidateKey in workStore.pendingRevalidates) {
        await workStore.pendingRevalidates[pendingRevalidateKey];
      }
      workStore.pendingRevalidates[pendingRevalidateKey] = cacheSetPromise.finally(() => {
        var _workStore_pendingRevalidates;
        if (!((_workStore_pendingRevalidates = workStore.pendingRevalidates) == null ? void 0 : _workStore_pendingRevalidates[pendingRevalidateKey])) {
          return;
        }
        delete workStore.pendingRevalidates[pendingRevalidateKey];
      });
      return cloned2;
    }
    __name(createCachedDynamicResponse, "createCachedDynamicResponse");
    function createPatchedFetcher(originFetch, { workAsyncStorage, workUnitAsyncStorage }) {
      const patched = /* @__PURE__ */ __name(async function fetch2(input, init) {
        var _init_method, _init_next;
        let url;
        try {
          url = new URL(input instanceof Request ? input.url : input);
          url.username = "";
          url.password = "";
        } catch {
          url = void 0;
        }
        const fetchUrl = (url == null ? void 0 : url.href) ?? "";
        const method = (init == null ? void 0 : (_init_method = init.method) == null ? void 0 : _init_method.toUpperCase()) || "GET";
        const isInternal = (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) === true;
        const hideSpan = process.env.NEXT_OTEL_FETCH_DISABLED === "1";
        const fetchStart = isInternal ? void 0 : performance.timeOrigin + performance.now();
        const workStore = workAsyncStorage.getStore();
        const workUnitStore = workUnitAsyncStorage.getStore();
        let cacheSignal = workUnitStore ? (0, _workunitasyncstorageexternal.getCacheSignal)(workUnitStore) : null;
        if (cacheSignal) {
          cacheSignal.beginRead();
        }
        const result2 = (0, _tracer.getTracer)().trace(isInternal ? _constants.NextNodeServerSpan.internalFetch : _constants.AppRenderSpan.fetch, {
          hideSpan,
          kind: _tracer.SpanKind.CLIENT,
          spanName: [
            "fetch",
            method,
            fetchUrl
          ].filter(Boolean).join(" "),
          attributes: {
            "http.url": fetchUrl,
            "http.method": method,
            "net.peer.name": url == null ? void 0 : url.hostname,
            "net.peer.port": (url == null ? void 0 : url.port) || void 0
          }
        }, async () => {
          var _getRequestMeta;
          if (isInternal) {
            return originFetch(input, init);
          }
          if (!workStore) {
            return originFetch(input, init);
          }
          if (workStore.isDraftMode) {
            return originFetch(input, init);
          }
          const isRequestInput = input && typeof input === "object" && typeof input.method === "string";
          if (isRequestInput && init) {
            const { next, ...overrides } = init;
            input = new Request(input, overrides);
            init = next ? {
              next
            } : void 0;
          }
          const getRequestMeta = /* @__PURE__ */ __name((field) => {
            const value = init == null ? void 0 : init[field];
            return value || (isRequestInput ? input[field] : null);
          }, "getRequestMeta");
          let finalRevalidate = void 0;
          const getNextField = /* @__PURE__ */ __name((field) => {
            var _init_next2, _init_next1, _input_next;
            return typeof (init == null ? void 0 : (_init_next2 = init.next) == null ? void 0 : _init_next2[field]) !== "undefined" ? init == null ? void 0 : (_init_next1 = init.next) == null ? void 0 : _init_next1[field] : isRequestInput ? (_input_next = input.next) == null ? void 0 : _input_next[field] : void 0;
          }, "getNextField");
          const originalFetchRevalidate = getNextField("revalidate");
          let currentFetchRevalidate = originalFetchRevalidate;
          const tags = validateTags(getNextField("tags") || [], `fetch ${input.toString()}`);
          let revalidateStore;
          if (workUnitStore) {
            switch (workUnitStore.type) {
              case "prerender":
              case "prerender-runtime":
              // TODO: Stop accumulating tags in client prerender. (fallthrough)
              case "prerender-client":
              case "prerender-ppr":
              case "prerender-legacy":
              case "cache":
              case "private-cache":
                revalidateStore = workUnitStore;
                break;
              case "request":
              case "unstable-cache":
                break;
              default:
                workUnitStore;
            }
          }
          if (revalidateStore) {
            if (Array.isArray(tags)) {
              const collectedTags = revalidateStore.tags ?? (revalidateStore.tags = []);
              for (const tag of tags) {
                if (!collectedTags.includes(tag)) {
                  collectedTags.push(tag);
                }
              }
            }
          }
          const implicitTags = workUnitStore == null ? void 0 : workUnitStore.implicitTags;
          let pageFetchCacheMode = workStore.fetchCache;
          if (workUnitStore) {
            switch (workUnitStore.type) {
              case "unstable-cache":
                pageFetchCacheMode = "force-no-store";
                break;
              case "prerender":
              case "prerender-client":
              case "prerender-runtime":
              case "prerender-ppr":
              case "prerender-legacy":
              case "request":
              case "cache":
              case "private-cache":
                break;
              default:
                workUnitStore;
            }
          }
          const isUsingNoStore = !!workStore.isUnstableNoStore;
          let currentFetchCacheConfig = getRequestMeta("cache");
          let cacheReason = "";
          let cacheWarning;
          if (typeof currentFetchCacheConfig === "string" && typeof currentFetchRevalidate !== "undefined") {
            const isConflictingRevalidate = (
              // revalidate: 0 and cache: force-cache
              currentFetchCacheConfig === "force-cache" && currentFetchRevalidate === 0 || // revalidate: >0 or revalidate: false and cache: no-store
              currentFetchCacheConfig === "no-store" && (currentFetchRevalidate > 0 || currentFetchRevalidate === false)
            );
            if (isConflictingRevalidate) {
              cacheWarning = `Specified "cache: ${currentFetchCacheConfig}" and "revalidate: ${currentFetchRevalidate}", only one should be specified.`;
              currentFetchCacheConfig = void 0;
              currentFetchRevalidate = void 0;
            }
          }
          const hasExplicitFetchCacheOptOut = (
            // fetch config itself signals not to cache
            currentFetchCacheConfig === "no-cache" || currentFetchCacheConfig === "no-store" || // the fetch isn't explicitly caching and the segment level cache config signals not to cache
            // note: `pageFetchCacheMode` is also set by being in an unstable_cache context.
            pageFetchCacheMode === "force-no-store" || pageFetchCacheMode === "only-no-store"
          );
          const noFetchConfigAndForceDynamic = !pageFetchCacheMode && !currentFetchCacheConfig && !currentFetchRevalidate && workStore.forceDynamic;
          if (
            // force-cache was specified without a revalidate value. We set the revalidate value to false
            // which will signal the cache to not revalidate
            currentFetchCacheConfig === "force-cache" && typeof currentFetchRevalidate === "undefined"
          ) {
            currentFetchRevalidate = false;
          } else if (hasExplicitFetchCacheOptOut || noFetchConfigAndForceDynamic) {
            currentFetchRevalidate = 0;
          }
          if (currentFetchCacheConfig === "no-cache" || currentFetchCacheConfig === "no-store") {
            cacheReason = `cache: ${currentFetchCacheConfig}`;
          }
          finalRevalidate = validateRevalidate(currentFetchRevalidate, workStore.route);
          const _headers = getRequestMeta("headers");
          const initHeaders = typeof (_headers == null ? void 0 : _headers.get) === "function" ? _headers : new Headers(_headers || {});
          const hasUnCacheableHeader = initHeaders.get("authorization") || initHeaders.get("cookie");
          const isUnCacheableMethod = ![
            "get",
            "head"
          ].includes(((_getRequestMeta = getRequestMeta("method")) == null ? void 0 : _getRequestMeta.toLowerCase()) || "get");
          const hasNoExplicitCacheConfig = (
            // eslint-disable-next-line eqeqeq
            pageFetchCacheMode == void 0 && // eslint-disable-next-line eqeqeq
            (currentFetchCacheConfig == void 0 || // when considering whether to opt into the default "no-cache" fetch semantics,
            // a "default" cache config should be treated the same as no cache config
            currentFetchCacheConfig === "default") && // eslint-disable-next-line eqeqeq
            currentFetchRevalidate == void 0
          );
          let autoNoCache = Boolean((hasUnCacheableHeader || isUnCacheableMethod) && (revalidateStore == null ? void 0 : revalidateStore.revalidate) === 0);
          let isImplicitBuildTimeCache = false;
          if (!autoNoCache && hasNoExplicitCacheConfig) {
            if (workStore.isBuildTimePrerendering) {
              isImplicitBuildTimeCache = true;
            } else {
              autoNoCache = true;
            }
          }
          if (hasNoExplicitCacheConfig && workUnitStore !== void 0) {
            switch (workUnitStore.type) {
              case "prerender":
              case "prerender-runtime":
              // While we don't want to do caching in the client scope we know the
              // fetch will be dynamic for cacheComponents so we may as well avoid the
              // call here. (fallthrough)
              case "prerender-client":
                if (cacheSignal) {
                  cacheSignal.endRead();
                  cacheSignal = null;
                }
                return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, "fetch()");
              case "prerender-ppr":
              case "prerender-legacy":
              case "request":
              case "cache":
              case "private-cache":
              case "unstable-cache":
                break;
              default:
                workUnitStore;
            }
          }
          switch (pageFetchCacheMode) {
            case "force-no-store": {
              cacheReason = "fetchCache = force-no-store";
              break;
            }
            case "only-no-store": {
              if (currentFetchCacheConfig === "force-cache" || typeof finalRevalidate !== "undefined" && finalRevalidate > 0) {
                throw Object.defineProperty(new Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`), "__NEXT_ERROR_CODE", {
                  value: "E448",
                  enumerable: false,
                  configurable: true
                });
              }
              cacheReason = "fetchCache = only-no-store";
              break;
            }
            case "only-cache": {
              if (currentFetchCacheConfig === "no-store") {
                throw Object.defineProperty(new Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`), "__NEXT_ERROR_CODE", {
                  value: "E521",
                  enumerable: false,
                  configurable: true
                });
              }
              break;
            }
            case "force-cache": {
              if (typeof currentFetchRevalidate === "undefined" || currentFetchRevalidate === 0) {
                cacheReason = "fetchCache = force-cache";
                finalRevalidate = _constants1.INFINITE_CACHE;
              }
              break;
            }
            case "default-cache":
            case "default-no-store":
            case "auto":
            case void 0:
              break;
            default:
              pageFetchCacheMode;
          }
          if (typeof finalRevalidate === "undefined") {
            if (pageFetchCacheMode === "default-cache" && !isUsingNoStore) {
              finalRevalidate = _constants1.INFINITE_CACHE;
              cacheReason = "fetchCache = default-cache";
            } else if (pageFetchCacheMode === "default-no-store") {
              finalRevalidate = 0;
              cacheReason = "fetchCache = default-no-store";
            } else if (isUsingNoStore) {
              finalRevalidate = 0;
              cacheReason = "noStore call";
            } else if (autoNoCache) {
              finalRevalidate = 0;
              cacheReason = "auto no cache";
            } else {
              cacheReason = "auto cache";
              finalRevalidate = revalidateStore ? revalidateStore.revalidate : _constants1.INFINITE_CACHE;
            }
          } else if (!cacheReason) {
            cacheReason = `revalidate: ${finalRevalidate}`;
          }
          if (
            // when force static is configured we don't bail from
            // `revalidate: 0` values
            !(workStore.forceStatic && finalRevalidate === 0) && // we don't consider autoNoCache to switch to dynamic for ISR
            !autoNoCache && // If the revalidate value isn't currently set or the value is less
            // than the current revalidate value, we should update the revalidate
            // value.
            revalidateStore && finalRevalidate < revalidateStore.revalidate
          ) {
            if (finalRevalidate === 0) {
              if (workUnitStore) {
                switch (workUnitStore.type) {
                  case "prerender":
                  case "prerender-client":
                  case "prerender-runtime":
                    if (cacheSignal) {
                      cacheSignal.endRead();
                      cacheSignal = null;
                    }
                    return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, "fetch()");
                  case "prerender-ppr":
                  case "prerender-legacy":
                  case "request":
                  case "cache":
                  case "private-cache":
                  case "unstable-cache":
                    break;
                  default:
                    workUnitStore;
                }
              }
              (0, _dynamicrendering.markCurrentScopeAsDynamic)(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
            }
            if (revalidateStore && originalFetchRevalidate === finalRevalidate) {
              revalidateStore.revalidate = finalRevalidate;
            }
          }
          const isCacheableRevalidate = typeof finalRevalidate === "number" && finalRevalidate > 0;
          let cacheKey;
          const { incrementalCache } = workStore;
          let isHmrRefresh = false;
          let serverComponentsHmrCache;
          if (workUnitStore) {
            switch (workUnitStore.type) {
              case "request":
              case "cache":
              case "private-cache":
                isHmrRefresh = workUnitStore.isHmrRefresh ?? false;
                serverComponentsHmrCache = workUnitStore.serverComponentsHmrCache;
                break;
              case "prerender":
              case "prerender-client":
              case "prerender-runtime":
              case "prerender-ppr":
              case "prerender-legacy":
              case "unstable-cache":
                break;
              default:
                workUnitStore;
            }
          }
          if (incrementalCache && (isCacheableRevalidate || serverComponentsHmrCache)) {
            try {
              cacheKey = await incrementalCache.generateCacheKey(fetchUrl, isRequestInput ? input : init);
            } catch (cause) {
              console.error(`Failed to generate cache key for`, input, cause);
            }
          }
          const fetchIdx = workStore.nextFetchId ?? 1;
          workStore.nextFetchId = fetchIdx + 1;
          let handleUnlock = /* @__PURE__ */ __name(() => {
          }, "handleUnlock");
          const doOriginalFetch = /* @__PURE__ */ __name(async (isStale, cacheReasonOverride2) => {
            const requestInputFields = [
              "cache",
              "credentials",
              "headers",
              "integrity",
              "keepalive",
              "method",
              "mode",
              "redirect",
              "referrer",
              "referrerPolicy",
              "window",
              "duplex",
              // don't pass through signal when revalidating
              ...isStale ? [] : [
                "signal"
              ]
            ];
            if (isRequestInput) {
              const reqInput = input;
              const reqOptions = {
                body: reqInput._ogBody || reqInput.body
              };
              for (const field of requestInputFields) {
                reqOptions[field] = reqInput[field];
              }
              input = new Request(reqInput.url, reqOptions);
            } else if (init) {
              const { _ogBody, body, signal, ...otherInput } = init;
              init = {
                ...otherInput,
                body: _ogBody || body,
                signal: isStale ? void 0 : signal
              };
            }
            const clonedInit = {
              ...init,
              next: {
                ...init == null ? void 0 : init.next,
                fetchType: "origin",
                fetchIdx
              }
            };
            return originFetch(input, clonedInit).then(async (res) => {
              if (!isStale && fetchStart) {
                trackFetchMetric(workStore, {
                  start: fetchStart,
                  url: fetchUrl,
                  cacheReason: cacheReasonOverride2 || cacheReason,
                  cacheStatus: finalRevalidate === 0 || cacheReasonOverride2 ? "skip" : "miss",
                  cacheWarning,
                  status: res.status,
                  method: clonedInit.method || "GET"
                });
              }
              if (res.status === 200 && incrementalCache && cacheKey && (isCacheableRevalidate || serverComponentsHmrCache)) {
                const normalizedRevalidate = finalRevalidate >= _constants1.INFINITE_CACHE ? _constants1.CACHE_ONE_YEAR : finalRevalidate;
                const incrementalCacheConfig = isCacheableRevalidate ? {
                  fetchCache: true,
                  fetchUrl,
                  fetchIdx,
                  tags,
                  isImplicitBuildTimeCache
                } : void 0;
                switch (workUnitStore == null ? void 0 : workUnitStore.type) {
                  case "prerender":
                  case "prerender-client":
                  case "prerender-runtime":
                    return createCachedPrerenderResponse(res, cacheKey, incrementalCacheConfig, incrementalCache, normalizedRevalidate, handleUnlock);
                  case "prerender-ppr":
                  case "prerender-legacy":
                  case "request":
                  case "cache":
                  case "private-cache":
                  case "unstable-cache":
                  case void 0:
                    return createCachedDynamicResponse(workStore, res, cacheKey, incrementalCacheConfig, incrementalCache, serverComponentsHmrCache, normalizedRevalidate, input, handleUnlock);
                  default:
                    workUnitStore;
                }
              }
              await handleUnlock();
              return res;
            }).catch((error) => {
              handleUnlock();
              throw error;
            });
          }, "doOriginalFetch");
          let cacheReasonOverride;
          let isForegroundRevalidate = false;
          let isHmrRefreshCache = false;
          if (cacheKey && incrementalCache) {
            let cachedFetchData;
            if (isHmrRefresh && serverComponentsHmrCache) {
              cachedFetchData = serverComponentsHmrCache.get(cacheKey);
              isHmrRefreshCache = true;
            }
            if (isCacheableRevalidate && !cachedFetchData) {
              handleUnlock = await incrementalCache.lock(cacheKey);
              const entry = workStore.isOnDemandRevalidate ? null : await incrementalCache.get(cacheKey, {
                kind: _responsecache.IncrementalCacheKind.FETCH,
                revalidate: finalRevalidate,
                fetchUrl,
                fetchIdx,
                tags,
                softTags: implicitTags == null ? void 0 : implicitTags.tags
              });
              if (hasNoExplicitCacheConfig && workUnitStore) {
                switch (workUnitStore.type) {
                  case "prerender":
                  case "prerender-client":
                  case "prerender-runtime":
                    await (0, _scheduler.waitAtLeastOneReactRenderTask)();
                    break;
                  case "prerender-ppr":
                  case "prerender-legacy":
                  case "request":
                  case "cache":
                  case "private-cache":
                  case "unstable-cache":
                    break;
                  default:
                    workUnitStore;
                }
              }
              if (entry) {
                await handleUnlock();
              } else {
                cacheReasonOverride = "cache-control: no-cache (hard refresh)";
              }
              if ((entry == null ? void 0 : entry.value) && entry.value.kind === _responsecache.CachedRouteKind.FETCH) {
                if (workStore.isRevalidate && entry.isStale) {
                  isForegroundRevalidate = true;
                } else {
                  if (entry.isStale) {
                    workStore.pendingRevalidates ??= {};
                    if (!workStore.pendingRevalidates[cacheKey]) {
                      const pendingRevalidate = doOriginalFetch(true).then(async (response) => ({
                        body: await response.arrayBuffer(),
                        headers: response.headers,
                        status: response.status,
                        statusText: response.statusText
                      })).finally(() => {
                        workStore.pendingRevalidates ??= {};
                        delete workStore.pendingRevalidates[cacheKey || ""];
                      });
                      pendingRevalidate.catch(console.error);
                      workStore.pendingRevalidates[cacheKey] = pendingRevalidate;
                    }
                  }
                  cachedFetchData = entry.value.data;
                }
              }
            }
            if (cachedFetchData) {
              if (fetchStart) {
                trackFetchMetric(workStore, {
                  start: fetchStart,
                  url: fetchUrl,
                  cacheReason,
                  cacheStatus: isHmrRefreshCache ? "hmr" : "hit",
                  cacheWarning,
                  status: cachedFetchData.status || 200,
                  method: (init == null ? void 0 : init.method) || "GET"
                });
              }
              const response = new Response(Buffer.from(cachedFetchData.body, "base64"), {
                headers: cachedFetchData.headers,
                status: cachedFetchData.status
              });
              Object.defineProperty(response, "url", {
                value: cachedFetchData.url
              });
              return response;
            }
          }
          if (workStore.isStaticGeneration && init && typeof init === "object") {
            const { cache: cache4 } = init;
            if (isEdgeRuntime) delete init.cache;
            if (cache4 === "no-store") {
              if (workUnitStore) {
                switch (workUnitStore.type) {
                  case "prerender":
                  case "prerender-client":
                  case "prerender-runtime":
                    if (cacheSignal) {
                      cacheSignal.endRead();
                      cacheSignal = null;
                    }
                    return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, "fetch()");
                  case "prerender-ppr":
                  case "prerender-legacy":
                  case "request":
                  case "cache":
                  case "private-cache":
                  case "unstable-cache":
                    break;
                  default:
                    workUnitStore;
                }
              }
              (0, _dynamicrendering.markCurrentScopeAsDynamic)(workStore, workUnitStore, `no-store fetch ${input} ${workStore.route}`);
            }
            const hasNextConfig = "next" in init;
            const { next = {} } = init;
            if (typeof next.revalidate === "number" && revalidateStore && next.revalidate < revalidateStore.revalidate) {
              if (next.revalidate === 0) {
                if (workUnitStore) {
                  switch (workUnitStore.type) {
                    case "prerender":
                    case "prerender-client":
                    case "prerender-runtime":
                      return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, "fetch()");
                    case "request":
                    case "cache":
                    case "private-cache":
                    case "unstable-cache":
                    case "prerender-legacy":
                    case "prerender-ppr":
                      break;
                    default:
                      workUnitStore;
                  }
                }
                (0, _dynamicrendering.markCurrentScopeAsDynamic)(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
              }
              if (!workStore.forceStatic || next.revalidate !== 0) {
                revalidateStore.revalidate = next.revalidate;
              }
            }
            if (hasNextConfig) delete init.next;
          }
          if (cacheKey && isForegroundRevalidate) {
            const pendingRevalidateKey = cacheKey;
            workStore.pendingRevalidates ??= {};
            let pendingRevalidate = workStore.pendingRevalidates[pendingRevalidateKey];
            if (pendingRevalidate) {
              const revalidatedResult = await pendingRevalidate;
              return new Response(revalidatedResult.body, {
                headers: revalidatedResult.headers,
                status: revalidatedResult.status,
                statusText: revalidatedResult.statusText
              });
            }
            const pendingResponse = doOriginalFetch(true, cacheReasonOverride).then(_cloneresponse.cloneResponse);
            pendingRevalidate = pendingResponse.then(async (responses) => {
              const response = responses[0];
              return {
                body: await response.arrayBuffer(),
                headers: response.headers,
                status: response.status,
                statusText: response.statusText
              };
            }).finally(() => {
              var _workStore_pendingRevalidates;
              if (!((_workStore_pendingRevalidates = workStore.pendingRevalidates) == null ? void 0 : _workStore_pendingRevalidates[pendingRevalidateKey])) {
                return;
              }
              delete workStore.pendingRevalidates[pendingRevalidateKey];
            });
            pendingRevalidate.catch(() => {
            });
            workStore.pendingRevalidates[pendingRevalidateKey] = pendingRevalidate;
            return pendingResponse.then((responses) => responses[1]);
          } else {
            return doOriginalFetch(false, cacheReasonOverride);
          }
        });
        if (cacheSignal) {
          try {
            return await result2;
          } finally {
            if (cacheSignal) {
              cacheSignal.endRead();
            }
          }
        }
        return result2;
      }, "fetch");
      patched.__nextPatched = true;
      patched.__nextGetStaticStore = () => workAsyncStorage;
      patched._nextOriginalFetch = originFetch;
      globalThis[NEXT_PATCH_SYMBOL] = true;
      Object.defineProperty(patched, "name", {
        value: "fetch",
        writable: false
      });
      return patched;
    }
    __name(createPatchedFetcher, "createPatchedFetcher");
    function patchFetch(options) {
      if (isFetchPatched()) return;
      const original = (0, _dedupefetch.createDedupeFetch)(globalThis.fetch);
      globalThis.fetch = createPatchedFetcher(original, options);
    }
    __name(patchFetch, "patchFetch");
  }
});

// node_modules/next/dist/server/web/spec-extension/unstable-cache.js
var require_unstable_cache = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/unstable-cache.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "unstable_cache", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return unstable_cache;
      }, "get")
    });
    var _constants = require_constants();
    var _patchfetch = require_patch_fetch();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _responsecache = require_response_cache();
    var noStoreFetchIdx = 0;
    async function cacheNewResult(result2, incrementalCache, cacheKey, tags, revalidate, fetchIdx, fetchUrl) {
      await incrementalCache.set(cacheKey, {
        kind: _responsecache.CachedRouteKind.FETCH,
        data: {
          headers: {},
          // TODO: handle non-JSON values?
          body: JSON.stringify(result2),
          status: 200,
          url: ""
        },
        revalidate: typeof revalidate !== "number" ? _constants.CACHE_ONE_YEAR : revalidate
      }, {
        fetchCache: true,
        tags,
        fetchIdx,
        fetchUrl
      });
      return;
    }
    __name(cacheNewResult, "cacheNewResult");
    function unstable_cache(cb, keyParts, options = {}) {
      if (options.revalidate === 0) {
        throw Object.defineProperty(new Error(`Invariant revalidate: 0 can not be passed to unstable_cache(), must be "false" or "> 0" ${cb.toString()}`), "__NEXT_ERROR_CODE", {
          value: "E57",
          enumerable: false,
          configurable: true
        });
      }
      const tags = options.tags ? (0, _patchfetch.validateTags)(options.tags, `unstable_cache ${cb.toString()}`) : [];
      (0, _patchfetch.validateRevalidate)(options.revalidate, `unstable_cache ${cb.name || cb.toString()}`);
      const fixedKey = `${cb.toString()}-${Array.isArray(keyParts) && keyParts.join(",")}`;
      const cachedCb = /* @__PURE__ */ __name(async (...args) => {
        const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
        const maybeIncrementalCache = (workStore == null ? void 0 : workStore.incrementalCache) || globalThis.__incrementalCache;
        if (!maybeIncrementalCache) {
          throw Object.defineProperty(new Error(`Invariant: incrementalCache missing in unstable_cache ${cb.toString()}`), "__NEXT_ERROR_CODE", {
            value: "E469",
            enumerable: false,
            configurable: true
          });
        }
        const incrementalCache = maybeIncrementalCache;
        const cacheSignal = workUnitStore ? (0, _workunitasyncstorageexternal.getCacheSignal)(workUnitStore) : null;
        if (cacheSignal) {
          cacheSignal.beginRead();
        }
        try {
          const fetchUrlPrefix = workStore && workUnitStore ? getFetchUrlPrefix(workStore, workUnitStore) : "";
          const invocationKey = `${fixedKey}-${JSON.stringify(args)}`;
          const cacheKey = await incrementalCache.generateSimpleCacheKey(invocationKey);
          const fetchUrl = `unstable_cache ${fetchUrlPrefix} ${cb.name ? ` ${cb.name}` : cacheKey}`;
          const fetchIdx = (workStore ? workStore.nextFetchId : noStoreFetchIdx) ?? 1;
          const implicitTags = workUnitStore == null ? void 0 : workUnitStore.implicitTags;
          const innerCacheStore = {
            type: "unstable-cache",
            phase: "render",
            implicitTags,
            draftMode: workUnitStore && workStore && (0, _workunitasyncstorageexternal.getDraftModeProviderForCacheScope)(workStore, workUnitStore)
          };
          if (workStore) {
            workStore.nextFetchId = fetchIdx + 1;
            let isNestedUnstableCache = false;
            if (workUnitStore) {
              switch (workUnitStore.type) {
                case "cache":
                case "private-cache":
                case "prerender":
                case "prerender-runtime":
                case "prerender-ppr":
                case "prerender-legacy":
                  if (typeof options.revalidate === "number") {
                    if (workUnitStore.revalidate < options.revalidate) {
                    } else {
                      workUnitStore.revalidate = options.revalidate;
                    }
                  }
                  const collectedTags = workUnitStore.tags;
                  if (collectedTags === null) {
                    workUnitStore.tags = tags.slice();
                  } else {
                    for (const tag of tags) {
                      if (!collectedTags.includes(tag)) {
                        collectedTags.push(tag);
                      }
                    }
                  }
                  break;
                case "unstable-cache":
                  isNestedUnstableCache = true;
                  break;
                case "prerender-client":
                case "request":
                  break;
                default:
                  workUnitStore;
              }
            }
            if (
              // when we are nested inside of other unstable_cache's
              // we should bypass cache similar to fetches
              !isNestedUnstableCache && workStore.fetchCache !== "force-no-store" && !workStore.isOnDemandRevalidate && !incrementalCache.isOnDemandRevalidate && !workStore.isDraftMode
            ) {
              const cacheEntry = await incrementalCache.get(cacheKey, {
                kind: _responsecache.IncrementalCacheKind.FETCH,
                revalidate: options.revalidate,
                tags,
                softTags: implicitTags == null ? void 0 : implicitTags.tags,
                fetchIdx,
                fetchUrl
              });
              if (cacheEntry && cacheEntry.value) {
                if (cacheEntry.value.kind !== _responsecache.CachedRouteKind.FETCH) {
                  console.error(`Invariant invalid cacheEntry returned for ${invocationKey}`);
                } else {
                  const cachedResponse = cacheEntry.value.data.body !== void 0 ? JSON.parse(cacheEntry.value.data.body) : void 0;
                  if (cacheEntry.isStale) {
                    if (!workStore.pendingRevalidates) {
                      workStore.pendingRevalidates = {};
                    }
                    if (!workStore.pendingRevalidates[invocationKey]) {
                      const revalidationPromise = _workunitasyncstorageexternal.workUnitAsyncStorage.run(innerCacheStore, cb, ...args).then(async (result3) => {
                        await cacheNewResult(result3, incrementalCache, cacheKey, tags, options.revalidate, fetchIdx, fetchUrl);
                        return result3;
                      }).catch((err) => {
                        console.error(`revalidating cache with key: ${invocationKey}`, err);
                        return cachedResponse;
                      });
                      if (workStore.isRevalidate) {
                        revalidationPromise.catch(() => {
                        });
                      }
                      workStore.pendingRevalidates[invocationKey] = revalidationPromise;
                    }
                    if (workStore.isRevalidate) {
                      return workStore.pendingRevalidates[invocationKey];
                    }
                  }
                  return cachedResponse;
                }
              }
            }
            const result2 = await _workunitasyncstorageexternal.workUnitAsyncStorage.run(innerCacheStore, cb, ...args);
            if (!workStore.isDraftMode) {
              if (!workStore.pendingRevalidates) {
                workStore.pendingRevalidates = {};
              }
              workStore.pendingRevalidates[invocationKey] = cacheNewResult(result2, incrementalCache, cacheKey, tags, options.revalidate, fetchIdx, fetchUrl);
            }
            return result2;
          } else {
            noStoreFetchIdx += 1;
            if (!incrementalCache.isOnDemandRevalidate) {
              const cacheEntry = await incrementalCache.get(cacheKey, {
                kind: _responsecache.IncrementalCacheKind.FETCH,
                revalidate: options.revalidate,
                tags,
                fetchIdx,
                fetchUrl,
                softTags: implicitTags == null ? void 0 : implicitTags.tags
              });
              if (cacheEntry && cacheEntry.value) {
                if (cacheEntry.value.kind !== _responsecache.CachedRouteKind.FETCH) {
                  console.error(`Invariant invalid cacheEntry returned for ${invocationKey}`);
                } else if (!cacheEntry.isStale) {
                  return cacheEntry.value.data.body !== void 0 ? JSON.parse(cacheEntry.value.data.body) : void 0;
                }
              }
            }
            const result2 = await _workunitasyncstorageexternal.workUnitAsyncStorage.run(innerCacheStore, cb, ...args);
            await cacheNewResult(result2, incrementalCache, cacheKey, tags, options.revalidate, fetchIdx, fetchUrl);
            return result2;
          }
        } finally {
          if (cacheSignal) {
            cacheSignal.endRead();
          }
        }
      }, "cachedCb");
      return cachedCb;
    }
    __name(unstable_cache, "unstable_cache");
    function getFetchUrlPrefix(workStore, workUnitStore) {
      switch (workUnitStore.type) {
        case "request":
          const pathname = workUnitStore.url.pathname;
          const searchParams = new URLSearchParams(workUnitStore.url.search);
          const sortedSearch = [
            ...searchParams.keys()
          ].sort((a, b2) => a.localeCompare(b2)).map((key) => `${key}=${searchParams.get(key)}`).join("&");
          return `${pathname}${sortedSearch.length ? "?" : ""}${sortedSearch}`;
        case "prerender":
        case "prerender-client":
        case "prerender-runtime":
        case "prerender-ppr":
        case "prerender-legacy":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return workStore.route;
        default:
          return workUnitStore;
      }
    }
    __name(getFetchUrlPrefix, "getFetchUrlPrefix");
  }
});

// node_modules/next/dist/shared/lib/router/utils/sorted-routes.js
var require_sorted_routes = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/sorted-routes.js"(exports) {
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
      getSortedRouteObjects: /* @__PURE__ */ __name(function() {
        return getSortedRouteObjects;
      }, "getSortedRouteObjects"),
      getSortedRoutes: /* @__PURE__ */ __name(function() {
        return getSortedRoutes;
      }, "getSortedRoutes")
    });
    var UrlNode = class _UrlNode {
      static {
        __name(this, "UrlNode");
      }
      insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
          ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c) => this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr) => [
          ...prev,
          ...curr
        ], []);
        if (this.slugName !== null) {
          routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
          const r = prefix === "/" ? "/" : prefix.slice(0, -1);
          if (this.optionalRestSlugName != null) {
            throw Object.defineProperty(new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").'), "__NEXT_ERROR_CODE", {
              value: "E458",
              enumerable: false,
              configurable: true
            });
          }
          routes.unshift(r);
        }
        if (this.restSlugName !== null) {
          routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
          routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
      }
      _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
          this.placeholder = false;
          return;
        }
        if (isCatchAll) {
          throw Object.defineProperty(new Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
            value: "E392",
            enumerable: false,
            configurable: true
          });
        }
        let nextSegment = urlPaths[0];
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
          let handleSlug = function(previousSlug, nextSlug) {
            if (previousSlug !== null) {
              if (previousSlug !== nextSlug) {
                throw Object.defineProperty(new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "')."), "__NEXT_ERROR_CODE", {
                  value: "E337",
                  enumerable: false,
                  configurable: true
                });
              }
            }
            slugNames.forEach((slug) => {
              if (slug === nextSlug) {
                throw Object.defineProperty(new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path'), "__NEXT_ERROR_CODE", {
                  value: "E247",
                  enumerable: false,
                  configurable: true
                });
              }
              if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                throw Object.defineProperty(new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path'), "__NEXT_ERROR_CODE", {
                  value: "E499",
                  enumerable: false,
                  configurable: true
                });
              }
            });
            slugNames.push(nextSlug);
          };
          __name(handleSlug, "handleSlug");
          let segmentName = nextSegment.slice(1, -1);
          let isOptional = false;
          if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
            segmentName = segmentName.slice(1, -1);
            isOptional = true;
          }
          if (segmentName.startsWith("…")) {
            throw Object.defineProperty(new Error("Detected a three-dot character ('…') at ('" + segmentName + "'). Did you mean ('...')?"), "__NEXT_ERROR_CODE", {
              value: "E147",
              enumerable: false,
              configurable: true
            });
          }
          if (segmentName.startsWith("...")) {
            segmentName = segmentName.substring(3);
            isCatchAll = true;
          }
          if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
            throw Object.defineProperty(new Error("Segment names may not start or end with extra brackets ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
              value: "E421",
              enumerable: false,
              configurable: true
            });
          }
          if (segmentName.startsWith(".")) {
            throw Object.defineProperty(new Error("Segment names may not start with erroneous periods ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
              value: "E288",
              enumerable: false,
              configurable: true
            });
          }
          if (isCatchAll) {
            if (isOptional) {
              if (this.restSlugName != null) {
                throw Object.defineProperty(new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).'), "__NEXT_ERROR_CODE", {
                  value: "E299",
                  enumerable: false,
                  configurable: true
                });
              }
              handleSlug(this.optionalRestSlugName, segmentName);
              this.optionalRestSlugName = segmentName;
              nextSegment = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null) {
                throw Object.defineProperty(new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                  value: "E300",
                  enumerable: false,
                  configurable: true
                });
              }
              handleSlug(this.restSlugName, segmentName);
              this.restSlugName = segmentName;
              nextSegment = "[...]";
            }
          } else {
            if (isOptional) {
              throw Object.defineProperty(new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                value: "E435",
                enumerable: false,
                configurable: true
              });
            }
            handleSlug(this.slugName, segmentName);
            this.slugName = segmentName;
            nextSegment = "[]";
          }
        }
        if (!this.children.has(nextSegment)) {
          this.children.set(nextSegment, new _UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
      }
      constructor() {
        this.placeholder = true;
        this.children = /* @__PURE__ */ new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
      }
    };
    function getSortedRoutes(normalizedPages) {
      const root = new UrlNode();
      normalizedPages.forEach((pagePath) => root.insert(pagePath));
      return root.smoosh();
    }
    __name(getSortedRoutes, "getSortedRoutes");
    function getSortedRouteObjects(objects, getter) {
      const indexes = {};
      const pathnames = [];
      for (let i = 0; i < objects.length; i++) {
        const pathname = getter(objects[i]);
        indexes[pathname] = i;
        pathnames[i] = pathname;
      }
      const sorted = getSortedRoutes(pathnames);
      return sorted.map((pathname) => objects[indexes[pathname]]);
    }
    __name(getSortedRouteObjects, "getSortedRouteObjects");
  }
});

// node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js
var require_ensure_leading_slash = __commonJS({
  "node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ensureLeadingSlash", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return ensureLeadingSlash;
      }, "get")
    });
    function ensureLeadingSlash(path) {
      return path.startsWith("/") ? path : "/" + path;
    }
    __name(ensureLeadingSlash, "ensureLeadingSlash");
  }
});

// node_modules/next/dist/shared/lib/router/utils/app-paths.js
var require_app_paths = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/app-paths.js"(exports) {
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
      normalizeAppPath: /* @__PURE__ */ __name(function() {
        return normalizeAppPath;
      }, "normalizeAppPath"),
      normalizeRscURL: /* @__PURE__ */ __name(function() {
        return normalizeRscURL;
      }, "normalizeRscURL")
    });
    var _ensureleadingslash = require_ensure_leading_slash();
    var _segment = require_segment();
    function normalizeAppPath(route) {
      return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments) => {
        if (!segment) {
          return pathname;
        }
        if ((0, _segment.isGroupSegment)(segment)) {
          return pathname;
        }
        if (segment[0] === "@") {
          return pathname;
        }
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
          return pathname;
        }
        return pathname + "/" + segment;
      }, ""));
    }
    __name(normalizeAppPath, "normalizeAppPath");
    function normalizeRscURL(url) {
      return url.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
    __name(normalizeRscURL, "normalizeRscURL");
  }
});

// node_modules/next/dist/shared/lib/router/utils/interception-routes.js
var require_interception_routes = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/interception-routes.js"(exports) {
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
      INTERCEPTION_ROUTE_MARKERS: /* @__PURE__ */ __name(function() {
        return INTERCEPTION_ROUTE_MARKERS;
      }, "INTERCEPTION_ROUTE_MARKERS"),
      extractInterceptionRouteInformation: /* @__PURE__ */ __name(function() {
        return extractInterceptionRouteInformation;
      }, "extractInterceptionRouteInformation"),
      isInterceptionRouteAppPath: /* @__PURE__ */ __name(function() {
        return isInterceptionRouteAppPath;
      }, "isInterceptionRouteAppPath")
    });
    var _apppaths = require_app_paths();
    var INTERCEPTION_ROUTE_MARKERS = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function isInterceptionRouteAppPath(path) {
      return path.split("/").find((segment) => INTERCEPTION_ROUTE_MARKERS.find((m2) => segment.startsWith(m2))) !== void 0;
    }
    __name(isInterceptionRouteAppPath, "isInterceptionRouteAppPath");
    function extractInterceptionRouteInformation(path) {
      let interceptingRoute, marker, interceptedRoute;
      for (const segment of path.split("/")) {
        marker = INTERCEPTION_ROUTE_MARKERS.find((m2) => segment.startsWith(m2));
        if (marker) {
          ;
          [interceptingRoute, interceptedRoute] = path.split(marker, 2);
          break;
        }
      }
      if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"), "__NEXT_ERROR_CODE", {
          value: "E269",
          enumerable: false,
          configurable: true
        });
      }
      interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute);
      switch (marker) {
        case "(.)":
          if (interceptingRoute === "/") {
            interceptedRoute = "/" + interceptedRoute;
          } else {
            interceptedRoute = interceptingRoute + "/" + interceptedRoute;
          }
          break;
        case "(..)":
          if (interceptingRoute === "/") {
            throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..) marker at the root level, use (.) instead."), "__NEXT_ERROR_CODE", {
              value: "E207",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
          break;
        case "(...)":
          interceptedRoute = "/" + interceptedRoute;
          break;
        case "(..)(..)":
          const splitInterceptingRoute = interceptingRoute.split("/");
          if (splitInterceptingRoute.length <= 2) {
            throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..)(..) marker at the root level or one level up."), "__NEXT_ERROR_CODE", {
              value: "E486",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
          break;
        default:
          throw Object.defineProperty(new Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", {
            value: "E112",
            enumerable: false,
            configurable: true
          });
      }
      return {
        interceptingRoute,
        interceptedRoute
      };
    }
    __name(extractInterceptionRouteInformation, "extractInterceptionRouteInformation");
  }
});

// node_modules/next/dist/shared/lib/router/utils/is-dynamic.js
var require_is_dynamic = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/is-dynamic.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isDynamicRoute", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return isDynamicRoute;
      }, "get")
    });
    var _interceptionroutes = require_interception_routes();
    var TEST_ROUTE = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
    var TEST_STRICT_ROUTE = /\/\[[^/]+\](?=\/|$)/;
    function isDynamicRoute(route, strict) {
      if (strict === void 0) strict = true;
      if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
      }
      if (strict) {
        return TEST_STRICT_ROUTE.test(route);
      }
      return TEST_ROUTE.test(route);
    }
    __name(isDynamicRoute, "isDynamicRoute");
  }
});

// node_modules/next/dist/shared/lib/router/utils/index.js
var require_utils3 = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/index.js"(exports) {
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
      getSortedRouteObjects: /* @__PURE__ */ __name(function() {
        return _sortedroutes.getSortedRouteObjects;
      }, "getSortedRouteObjects"),
      getSortedRoutes: /* @__PURE__ */ __name(function() {
        return _sortedroutes.getSortedRoutes;
      }, "getSortedRoutes"),
      isDynamicRoute: /* @__PURE__ */ __name(function() {
        return _isdynamic.isDynamicRoute;
      }, "isDynamicRoute")
    });
    var _sortedroutes = require_sorted_routes();
    var _isdynamic = require_is_dynamic();
  }
});

// node_modules/next/dist/server/web/spec-extension/revalidate.js
var require_revalidate = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/revalidate.js"(exports) {
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
      revalidatePath: /* @__PURE__ */ __name(function() {
        return revalidatePath2;
      }, "revalidatePath"),
      revalidateTag: /* @__PURE__ */ __name(function() {
        return revalidateTag;
      }, "revalidateTag"),
      unstable_expirePath: /* @__PURE__ */ __name(function() {
        return unstable_expirePath;
      }, "unstable_expirePath"),
      unstable_expireTag: /* @__PURE__ */ __name(function() {
        return unstable_expireTag;
      }, "unstable_expireTag")
    });
    var _dynamicrendering = require_dynamic_rendering();
    var _utils = require_utils3();
    var _constants = require_constants();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _hooksservercontext = require_hooks_server_context();
    var _invarianterror = require_invariant_error();
    function revalidateTag(tag) {
      return revalidate([
        tag
      ], `revalidateTag ${tag}`);
    }
    __name(revalidateTag, "revalidateTag");
    function unstable_expirePath(originalPath, type) {
      if (originalPath.length > _constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH) {
        console.warn(`Warning: expirePath received "${originalPath}" which exceeded max length of ${_constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH}. See more info here https://nextjs.org/docs/app/api-reference/functions/unstable_expirePath`);
        return;
      }
      let normalizedPath = `${_constants.NEXT_CACHE_IMPLICIT_TAG_ID}${originalPath}`;
      if (type) {
        normalizedPath += `${normalizedPath.endsWith("/") ? "" : "/"}${type}`;
      } else if ((0, _utils.isDynamicRoute)(originalPath)) {
        console.warn(`Warning: a dynamic page path "${originalPath}" was passed to "expirePath", but the "type" parameter is missing. This has no effect by default, see more info here https://nextjs.org/docs/app/api-reference/functions/unstable_expirePath`);
      }
      return revalidate([
        normalizedPath
      ], `unstable_expirePath ${originalPath}`);
    }
    __name(unstable_expirePath, "unstable_expirePath");
    function unstable_expireTag(...tags) {
      return revalidate(tags, `unstable_expireTag ${tags.join(", ")}`);
    }
    __name(unstable_expireTag, "unstable_expireTag");
    function revalidatePath2(originalPath, type) {
      if (originalPath.length > _constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH) {
        console.warn(`Warning: revalidatePath received "${originalPath}" which exceeded max length of ${_constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH}. See more info here https://nextjs.org/docs/app/api-reference/functions/revalidatePath`);
        return;
      }
      let normalizedPath = `${_constants.NEXT_CACHE_IMPLICIT_TAG_ID}${originalPath}`;
      if (type) {
        normalizedPath += `${normalizedPath.endsWith("/") ? "" : "/"}${type}`;
      } else if ((0, _utils.isDynamicRoute)(originalPath)) {
        console.warn(`Warning: a dynamic page path "${originalPath}" was passed to "revalidatePath", but the "type" parameter is missing. This has no effect by default, see more info here https://nextjs.org/docs/app/api-reference/functions/revalidatePath`);
      }
      return revalidate([
        normalizedPath
      ], `revalidatePath ${originalPath}`);
    }
    __name(revalidatePath2, "revalidatePath");
    function revalidate(tags, expression) {
      const store = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (!store || !store.incrementalCache) {
        throw Object.defineProperty(new Error(`Invariant: static generation store missing in ${expression}`), "__NEXT_ERROR_CODE", {
          value: "E263",
          enumerable: false,
          configurable: true
        });
      }
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workUnitStore) {
        if (workUnitStore.phase === "render") {
          throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" during render which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E7",
            enumerable: false,
            configurable: true
          });
        }
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
            throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside a "use cache" which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
              value: "E181",
              enumerable: false,
              configurable: true
            });
          case "unstable-cache":
            throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside a function cached with "unstable_cache(...)" which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
              value: "E306",
              enumerable: false,
              configurable: true
            });
          case "prerender":
          case "prerender-runtime":
            const error = Object.defineProperty(new Error(`Route ${store.route} used ${expression} without first calling \`await connection()\`.`), "__NEXT_ERROR_CODE", {
              value: "E406",
              enumerable: false,
              configurable: true
            });
            return (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(store.route, expression, error, workUnitStore);
          case "prerender-client":
            throw Object.defineProperty(new _invarianterror.InvariantError(`${expression} must not be used within a client component. Next.js should be preventing ${expression} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E693",
              enumerable: false,
              configurable: true
            });
          case "prerender-ppr":
            return (0, _dynamicrendering.postponeWithTracking)(store.route, expression, workUnitStore.dynamicTracking);
          case "prerender-legacy":
            workUnitStore.revalidate = 0;
            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
              value: "E558",
              enumerable: false,
              configurable: true
            });
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
          case "request":
            if (process.env.NODE_ENV !== "production") {
              workUnitStore.usedDynamic = true;
            }
            break;
          default:
            workUnitStore;
        }
      }
      if (!store.pendingRevalidatedTags) {
        store.pendingRevalidatedTags = [];
      }
      for (const tag of tags) {
        if (!store.pendingRevalidatedTags.includes(tag)) {
          store.pendingRevalidatedTags.push(tag);
        }
      }
      store.pathWasRevalidated = true;
    }
    __name(revalidate, "revalidate");
  }
});

// node_modules/next/dist/server/web/spec-extension/unstable-no-store.js
var require_unstable_no_store = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/unstable-no-store.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "unstable_noStore", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return unstable_noStore;
      }, "get")
    });
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _dynamicrendering = require_dynamic_rendering();
    function unstable_noStore() {
      const callingExpression = "unstable_noStore()";
      const store = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (!store) {
        return;
      } else if (store.forceStatic) {
        return;
      } else {
        store.isUnstableNoStore = true;
        if (workUnitStore) {
          switch (workUnitStore.type) {
            case "prerender":
            case "prerender-client":
            case "prerender-runtime":
              return;
            case "prerender-ppr":
            case "prerender-legacy":
            case "request":
            case "cache":
            case "private-cache":
            case "unstable-cache":
              break;
            default:
              workUnitStore;
          }
        }
        (0, _dynamicrendering.markCurrentScopeAsDynamic)(store, workUnitStore, callingExpression);
      }
    }
    __name(unstable_noStore, "unstable_noStore");
  }
});

// node_modules/next/dist/server/use-cache/cache-life.js
var require_cache_life = __commonJS({
  "node_modules/next/dist/server/use-cache/cache-life.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "cacheLife", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return cacheLife;
      }, "get")
    });
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    function validateCacheLife(profile) {
      if (profile.stale !== void 0) {
        if (profile.stale === false) {
          throw Object.defineProperty(new Error("Pass `Infinity` instead of `false` if you want to cache on the client forever without checking with the server."), "__NEXT_ERROR_CODE", {
            value: "E407",
            enumerable: false,
            configurable: true
          });
        } else if (typeof profile.stale !== "number") {
          throw Object.defineProperty(new Error("The stale option must be a number of seconds."), "__NEXT_ERROR_CODE", {
            value: "E308",
            enumerable: false,
            configurable: true
          });
        }
      }
      if (profile.revalidate !== void 0) {
        if (profile.revalidate === false) {
          throw Object.defineProperty(new Error("Pass `Infinity` instead of `false` if you do not want to revalidate by time."), "__NEXT_ERROR_CODE", {
            value: "E104",
            enumerable: false,
            configurable: true
          });
        } else if (typeof profile.revalidate !== "number") {
          throw Object.defineProperty(new Error("The revalidate option must be a number of seconds."), "__NEXT_ERROR_CODE", {
            value: "E233",
            enumerable: false,
            configurable: true
          });
        }
      }
      if (profile.expire !== void 0) {
        if (profile.expire === false) {
          throw Object.defineProperty(new Error("Pass `Infinity` instead of `false` if you want to cache on the server forever without checking with the origin."), "__NEXT_ERROR_CODE", {
            value: "E658",
            enumerable: false,
            configurable: true
          });
        } else if (typeof profile.expire !== "number") {
          throw Object.defineProperty(new Error("The expire option must be a number of seconds."), "__NEXT_ERROR_CODE", {
            value: "E3",
            enumerable: false,
            configurable: true
          });
        }
      }
      if (profile.revalidate !== void 0 && profile.expire !== void 0) {
        if (profile.revalidate > profile.expire) {
          throw Object.defineProperty(new Error("If providing both the revalidate and expire options, the expire option must be greater than the revalidate option. The expire option indicates how many seconds from the start until it can no longer be used."), "__NEXT_ERROR_CODE", {
            value: "E656",
            enumerable: false,
            configurable: true
          });
        }
      }
      if (profile.stale !== void 0 && profile.expire !== void 0) {
        if (profile.stale > profile.expire) {
          throw Object.defineProperty(new Error("If providing both the stale and expire options, the expire option must be greater than the stale option. The expire option indicates how many seconds from the start until it can no longer be used."), "__NEXT_ERROR_CODE", {
            value: "E655",
            enumerable: false,
            configurable: true
          });
        }
      }
    }
    __name(validateCacheLife, "validateCacheLife");
    function cacheLife(profile) {
      if (!process.env.__NEXT_USE_CACHE) {
        throw Object.defineProperty(new Error("cacheLife() is only available with the experimental.useCache config."), "__NEXT_ERROR_CODE", {
          value: "E627",
          enumerable: false,
          configurable: true
        });
      }
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      switch (workUnitStore == null ? void 0 : workUnitStore.type) {
        case "prerender":
        case "prerender-client":
        case "prerender-runtime":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "unstable-cache":
        case void 0:
          throw Object.defineProperty(new Error('cacheLife() can only be called inside a "use cache" function.'), "__NEXT_ERROR_CODE", {
            value: "E250",
            enumerable: false,
            configurable: true
          });
        case "cache":
        case "private-cache":
          break;
        default:
          workUnitStore;
      }
      if (typeof profile === "string") {
        const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
        if (!workStore) {
          throw Object.defineProperty(new Error("cacheLife() can only be called during App Router rendering at the moment."), "__NEXT_ERROR_CODE", {
            value: "E94",
            enumerable: false,
            configurable: true
          });
        }
        if (!workStore.cacheLifeProfiles) {
          throw Object.defineProperty(new Error("cacheLifeProfiles should always be provided. This is a bug in Next.js."), "__NEXT_ERROR_CODE", {
            value: "E294",
            enumerable: false,
            configurable: true
          });
        }
        const configuredProfile = workStore.cacheLifeProfiles[profile];
        if (configuredProfile === void 0) {
          if (workStore.cacheLifeProfiles[profile.trim()]) {
            throw Object.defineProperty(new Error(`Unknown cacheLife profile "${profile}" is not configured in next.config.js
Did you mean "${profile.trim()}" without the spaces?`), "__NEXT_ERROR_CODE", {
              value: "E16",
              enumerable: false,
              configurable: true
            });
          }
          throw Object.defineProperty(new Error(`Unknown cacheLife profile "${profile}" is not configured in next.config.js
module.exports = {
  experimental: {
    cacheLife: {
      "${profile}": ...
    }
  }
}`), "__NEXT_ERROR_CODE", {
            value: "E137",
            enumerable: false,
            configurable: true
          });
        }
        profile = configuredProfile;
      } else if (typeof profile !== "object" || profile === null || Array.isArray(profile)) {
        throw Object.defineProperty(new Error("Invalid cacheLife() option. Either pass a profile name or object."), "__NEXT_ERROR_CODE", {
          value: "E110",
          enumerable: false,
          configurable: true
        });
      } else {
        validateCacheLife(profile);
      }
      if (profile.revalidate !== void 0) {
        if (workUnitStore.explicitRevalidate === void 0 || workUnitStore.explicitRevalidate > profile.revalidate) {
          workUnitStore.explicitRevalidate = profile.revalidate;
        }
      }
      if (profile.expire !== void 0) {
        if (workUnitStore.explicitExpire === void 0 || workUnitStore.explicitExpire > profile.expire) {
          workUnitStore.explicitExpire = profile.expire;
        }
      }
      if (profile.stale !== void 0) {
        if (workUnitStore.explicitStale === void 0 || workUnitStore.explicitStale > profile.stale) {
          workUnitStore.explicitStale = profile.stale;
        }
      }
    }
    __name(cacheLife, "cacheLife");
  }
});

// node_modules/next/dist/server/use-cache/cache-tag.js
var require_cache_tag = __commonJS({
  "node_modules/next/dist/server/use-cache/cache-tag.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "cacheTag", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return cacheTag;
      }, "get")
    });
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _patchfetch = require_patch_fetch();
    function cacheTag(...tags) {
      if (!process.env.__NEXT_USE_CACHE) {
        throw Object.defineProperty(new Error("cacheTag() is only available with the experimental.useCache config."), "__NEXT_ERROR_CODE", {
          value: "E628",
          enumerable: false,
          configurable: true
        });
      }
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      switch (workUnitStore == null ? void 0 : workUnitStore.type) {
        case "prerender":
        case "prerender-client":
        case "prerender-runtime":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "unstable-cache":
        case void 0:
          throw Object.defineProperty(new Error('cacheTag() can only be called inside a "use cache" function.'), "__NEXT_ERROR_CODE", {
            value: "E177",
            enumerable: false,
            configurable: true
          });
        case "cache":
        case "private-cache":
          break;
        default:
          workUnitStore;
      }
      const validTags = (0, _patchfetch.validateTags)(tags, "cacheTag()");
      if (!workUnitStore.tags) {
        workUnitStore.tags = validTags;
      } else {
        workUnitStore.tags.push(...validTags);
      }
    }
    __name(cacheTag, "cacheTag");
  }
});

// node_modules/next/cache.js
var require_cache = __commonJS({
  "node_modules/next/cache.js"(exports, module) {
    init_esm();
    var cacheExports = {
      unstable_cache: require_unstable_cache().unstable_cache,
      revalidateTag: require_revalidate().revalidateTag,
      revalidatePath: require_revalidate().revalidatePath,
      unstable_expireTag: require_revalidate().unstable_expireTag,
      unstable_expirePath: require_revalidate().unstable_expirePath,
      unstable_noStore: require_unstable_no_store().unstable_noStore,
      unstable_cacheLife: require_cache_life().cacheLife,
      unstable_cacheTag: require_cache_tag().cacheTag
    };
    module.exports = cacheExports;
    exports.unstable_cache = cacheExports.unstable_cache;
    exports.revalidatePath = cacheExports.revalidatePath;
    exports.revalidateTag = cacheExports.revalidateTag;
    exports.unstable_expireTag = cacheExports.unstable_expireTag;
    exports.unstable_expirePath = cacheExports.unstable_expirePath;
    exports.unstable_noStore = cacheExports.unstable_noStore;
    exports.unstable_cacheLife = cacheExports.unstable_cacheLife;
    exports.unstable_cacheTag = cacheExports.unstable_cacheTag;
  }
});

// src/trigger/generate-assessment.ts
init_esm();

// src/features/profile/services/index.ts
init_esm();

// src/features/profile/services/profile.service.ts
init_esm();
var import_react = __toESM(require_react());

// src/features/profile/schemas.ts
init_esm();

// src/features/profile/constants.ts
init_esm();
var PROFILE_VALIDATION = {
  AGE_MIN: 16,
  AGE_MAX: 100,
  NAME_MIN: 1,
  NAME_MAX: 100,
  ROLE_MAX: 100,
  QUALIFICATION_MAX: 100,
  FIELD_OF_STUDY_MAX: 100,
  TARGET_ROLE_MAX: 100,
  SKILL_NAME_MAX: 100,
  DESIRED_SKILL_MAX: 100,
  MAX_SKILLS: 50,
  MAX_DESIRED_SKILLS: 30
};

// node_modules/libphonenumber-js/index.js
init_esm();

// node_modules/libphonenumber-js/min/exports/parsePhoneNumberWithError.js
init_esm();

// node_modules/libphonenumber-js/min/exports/withMetadataArgument.js
init_esm();

// node_modules/libphonenumber-js/metadata.min.json.js
init_esm();
var metadata_min_json_default = { "version": 4, "country_calling_codes": { "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "7": ["RU", "KZ"], "20": ["EG"], "27": ["ZA"], "30": ["GR"], "31": ["NL"], "32": ["BE"], "33": ["FR"], "34": ["ES"], "36": ["HU"], "39": ["IT", "VA"], "40": ["RO"], "41": ["CH"], "43": ["AT"], "44": ["GB", "GG", "IM", "JE"], "45": ["DK"], "46": ["SE"], "47": ["NO", "SJ"], "48": ["PL"], "49": ["DE"], "51": ["PE"], "52": ["MX"], "53": ["CU"], "54": ["AR"], "55": ["BR"], "56": ["CL"], "57": ["CO"], "58": ["VE"], "60": ["MY"], "61": ["AU", "CC", "CX"], "62": ["ID"], "63": ["PH"], "64": ["NZ"], "65": ["SG"], "66": ["TH"], "81": ["JP"], "82": ["KR"], "84": ["VN"], "86": ["CN"], "90": ["TR"], "91": ["IN"], "92": ["PK"], "93": ["AF"], "94": ["LK"], "95": ["MM"], "98": ["IR"], "211": ["SS"], "212": ["MA", "EH"], "213": ["DZ"], "216": ["TN"], "218": ["LY"], "220": ["GM"], "221": ["SN"], "222": ["MR"], "223": ["ML"], "224": ["GN"], "225": ["CI"], "226": ["BF"], "227": ["NE"], "228": ["TG"], "229": ["BJ"], "230": ["MU"], "231": ["LR"], "232": ["SL"], "233": ["GH"], "234": ["NG"], "235": ["TD"], "236": ["CF"], "237": ["CM"], "238": ["CV"], "239": ["ST"], "240": ["GQ"], "241": ["GA"], "242": ["CG"], "243": ["CD"], "244": ["AO"], "245": ["GW"], "246": ["IO"], "247": ["AC"], "248": ["SC"], "249": ["SD"], "250": ["RW"], "251": ["ET"], "252": ["SO"], "253": ["DJ"], "254": ["KE"], "255": ["TZ"], "256": ["UG"], "257": ["BI"], "258": ["MZ"], "260": ["ZM"], "261": ["MG"], "262": ["RE", "YT"], "263": ["ZW"], "264": ["NA"], "265": ["MW"], "266": ["LS"], "267": ["BW"], "268": ["SZ"], "269": ["KM"], "290": ["SH", "TA"], "291": ["ER"], "297": ["AW"], "298": ["FO"], "299": ["GL"], "350": ["GI"], "351": ["PT"], "352": ["LU"], "353": ["IE"], "354": ["IS"], "355": ["AL"], "356": ["MT"], "357": ["CY"], "358": ["FI", "AX"], "359": ["BG"], "370": ["LT"], "371": ["LV"], "372": ["EE"], "373": ["MD"], "374": ["AM"], "375": ["BY"], "376": ["AD"], "377": ["MC"], "378": ["SM"], "380": ["UA"], "381": ["RS"], "382": ["ME"], "383": ["XK"], "385": ["HR"], "386": ["SI"], "387": ["BA"], "389": ["MK"], "420": ["CZ"], "421": ["SK"], "423": ["LI"], "500": ["FK"], "501": ["BZ"], "502": ["GT"], "503": ["SV"], "504": ["HN"], "505": ["NI"], "506": ["CR"], "507": ["PA"], "508": ["PM"], "509": ["HT"], "590": ["GP", "BL", "MF"], "591": ["BO"], "592": ["GY"], "593": ["EC"], "594": ["GF"], "595": ["PY"], "596": ["MQ"], "597": ["SR"], "598": ["UY"], "599": ["CW", "BQ"], "670": ["TL"], "672": ["NF"], "673": ["BN"], "674": ["NR"], "675": ["PG"], "676": ["TO"], "677": ["SB"], "678": ["VU"], "679": ["FJ"], "680": ["PW"], "681": ["WF"], "682": ["CK"], "683": ["NU"], "685": ["WS"], "686": ["KI"], "687": ["NC"], "688": ["TV"], "689": ["PF"], "690": ["TK"], "691": ["FM"], "692": ["MH"], "850": ["KP"], "852": ["HK"], "853": ["MO"], "855": ["KH"], "856": ["LA"], "880": ["BD"], "886": ["TW"], "960": ["MV"], "961": ["LB"], "962": ["JO"], "963": ["SY"], "964": ["IQ"], "965": ["KW"], "966": ["SA"], "967": ["YE"], "968": ["OM"], "970": ["PS"], "971": ["AE"], "972": ["IL"], "973": ["BH"], "974": ["QA"], "975": ["BT"], "976": ["MN"], "977": ["NP"], "992": ["TJ"], "993": ["TM"], "994": ["AZ"], "995": ["GE"], "996": ["KG"], "998": ["UZ"] }, "countries": { "AC": ["247", "00", "(?:[01589]\\d|[2-467])\\d{4}", [5, 6]], "AD": ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], "AE": ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AF": ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], "AG": ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], "AI": ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], "AL": ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], "AM": ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], "AO": ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], "AR": ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], "AS": ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], "AT": ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AU": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "AW": ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], "AX": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], "AZ": ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], "BA": ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], "BB": ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], "BD": ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], "BE": ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], "BF": ["226", "00", "[024-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], "BG": ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], "BH": ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], "BI": ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], "BJ": ["229", "00", "(?:01\\d|8)\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], "BL": ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:2[7-9]|3[3-7]|5[12]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], "BM": ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], "BN": ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], "BO": ["591", "00(?:1\\d)?", "(?:[2-7]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]|50"]], ["(\\d{8})", "$1", ["[5-7]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], "BQ": ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], "BR": ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], "BS": ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], "BT": ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], "BW": ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], "BY": ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], "BZ": ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], "CA": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], "CC": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CD": ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], "CF": ["236", "00", "8776\\d{4}|(?:[27]\\d|61)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-8]"]]]], "CG": ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], "CH": ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], "CI": ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], "CK": ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], "CL": ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], "CM": ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], "CN": ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], "CO": ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], "CR": ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], "CU": ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], "CV": ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], "CW": ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], "CX": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CY": ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], "CZ": ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], "DE": ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], "DJ": ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], "DK": ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], "DM": ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], "DO": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], "DZ": ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], "EC": ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], "EE": ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "EG": ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], "EH": ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, 0, [["528[89]\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|3[01]|5[0-5]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], "ER": ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], "ES": ["34", "00", "(?:400|[5-9]\\d\\d)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-9]"]]]], "ET": ["251", "00", "(?:11|[2-57-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], "0"], "FI": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], "FJ": ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "FK": ["500", "00", "[2-7]\\d{4}", [5]], "FM": ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], "FO": ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], "FR": ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], "GA": ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], "GB": ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], "GD": ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], "GE": ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], "GF": ["594", "00", "(?:694\\d|7093)\\d{5}|(?:59|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|80[6-9]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], "GG": ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], "GH": ["233", "00", "[235]\\d{8}|800\\d{5,6}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2358]"], "0$1"]], "0"], "GI": ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], "GL": ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], "GM": ["220", "00", "[48]\\d{8}|[2-9]\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|4(?:[0-35]|4[16-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]"]]]], "GN": ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], "GP": ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|80[6-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], "GQ": ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], "GR": ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], "GT": ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "GU": ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], "GW": ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], "GY": ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "HK": ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "HN": ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], "HR": ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], "HT": ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], "HU": ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], "ID": ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], "IE": ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "IL": ["972", "0(?:0|1(?:05|[2-9]))", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], "IM": ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], "IN": ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31)|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:3171|5[15][2-6]|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|8(?:16|2[014]|3[126]|6[136]|7[78]|83)(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|3[129]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7(?:[23569]|8[0-57-9])|8[1-6])|7(?:1(?:[013-8]|9[6-9])|3(?:17|2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578])\\d|7(?:[23569]\\d|8[0-57-9])|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|3(?:2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["16|[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["18[06]", "18[06]0"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], "IO": ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], "IQ": ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], "IR": ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], "IS": ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "IT": ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], "JE": ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], "JM": ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], "JO": ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[47]"], "0$1"]], "0"], "JP": ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], "KE": ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], "KG": ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "KH": ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "KI": ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], "KM": ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], "KN": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], "KP": ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], "KR": ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], "KW": ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], "KY": ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], "KZ": ["7", "810", "8\\d{13}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "7", 0, "8~10"], "LA": ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], "LB": ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], "LC": ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], "LI": ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], "LK": ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], "LR": ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], "LS": ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], "LT": ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], "LU": ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["20"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], "LV": ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], "LY": ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], "MA": ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{4})(\\d{5})", "$1-$2", ["892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8(?:0[0-7]|9)"], "0$1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[5-8]"], "0$1"]], "0", 0, 0, 0, 0, "[5-8]"], "MC": ["377", "00", "(?:[3489]|[67]\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[67]"], "0$1"]], "0"], "MD": ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], "ME": ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], "MF": ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], "MG": ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], "MH": ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], "MK": ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], "ML": ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], "MM": ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], "MN": ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["11|2[16]"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], "MO": ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], "MP": ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], "MQ": ["596", "00", "7091\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "MR": ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], "MS": ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], "MT": ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], "MU": ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], "MV": ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MW": ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-37-9]"], "0$1"]], "0"], "MX": ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MY": ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], "MZ": ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "NA": ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "NC": ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], "NE": ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], "NF": ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], "NG": ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], "NI": ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], "NL": ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], "NO": ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], "NP": ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], "NR": ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], "NU": ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], "NZ": ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], "OM": ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], "PA": ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], "PE": ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], "PF": ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "PG": ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85[02-46-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "PH": ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], "PK": ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], "PL": ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], "PM": ["508", "00", "[78]\\d{8}|[2-9]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "PR": ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], "PS": ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "PT": ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], "PW": ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "PY": ["595", "00", "[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["3[289]|4[246-8]|61|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], "QA": ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], "RE": ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2631[0-6]\\d{4}|26(?:2\\d|30|88)\\d{5}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], "RO": ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], "RS": ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], "RU": ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "[3489]", 0, "8~10"], "RW": ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], "SA": ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], "SB": ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], "SC": ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "SD": ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "SE": ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], "SG": ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "SH": ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], "SI": ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[013]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], "SJ": ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], "SK": ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-5]"], "0$1"]], "0"], "SL": ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], "SM": ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], "SN": ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], "SO": ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|9[2-9]"]], ["(\\d)(\\d{7})", "$1 $2", ["[267]|904"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[346-9]"]]], "0"], "SR": ["597", "00", "(?:[2-5]|[6-9]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], "SS": ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "ST": ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], "SV": ["503", "00", "[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[25-7]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], "SX": ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], "SY": ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], "SZ": ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], "TA": ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], "TC": ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], "TD": ["235", "00|16", "(?:22|[3689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "TG": ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], "TH": ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "TJ": ["992", "810", "(?:[0-57-9]\\d|66)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["\\d"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], "TK": ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], "TL": ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], "TM": ["993", "810", "[1-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], "TN": ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], "TO": ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], "TR": ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], "TT": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], "TV": ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "TW": ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["826"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["83"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["82"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[25]0|37|49|8[09]"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-478])|7[1-9]", "[23568]|4(?:0[2-48]|[1-478])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], "TZ": ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], "UA": ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], "UG": ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024", "20240"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["20[0-35-7]|4(?:6[45]|[7-9])|[7-9]", "20(?:[0135-7]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[2-4]"], "0$1"]], "0"], "US": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:472[2-47-9]|983[2-57-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[02469]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-2478]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]]], "UY": ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], "UZ": ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], "VA": ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], "VC": ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], "VE": ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], "VG": ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], "VI": ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], "VN": ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{6,7}|7\\d{6}", [7, 8, 9, 10], [["(\\d{4})(\\d{4,6})", "$1 $2", ["1(?:2[02]|[89])"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[26]|6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], "VU": ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], "WF": ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "WS": ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "XK": ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], "YE": ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], "YT": ["262", "00", "(?:639\\d|7093)\\d{5}|(?:26|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["26(?:89\\d|9(?:0[0-467]|15|5[0-4]|6\\d|[78]0))\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], "ZA": ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "ZM": ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], "ZW": ["263", "00", "(?:13|8\\d{4})\\d{5}|[235-8]\\d{8}|[2-689]\\d{6}", [7, 9, 10], [["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|29|58)|67[0-46-9]|(?:55|68)[0-69]"], "0$1"], ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|[27]|48)|37|675|(?:55|68)[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["548"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[256]|39|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["3"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"]], "0"] }, "nonGeographic": { "800": ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], "808": ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], "870": ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], "878": ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], "881": ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], "882": ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|5[12]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], "883": ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], "888": ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], "979": ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };

// node_modules/libphonenumber-js/min/exports/withMetadataArgument.js
function withMetadataArgument(func, _arguments) {
  var args = Array.prototype.slice.call(_arguments);
  args.push(metadata_min_json_default);
  return func.apply(this, args);
}
__name(withMetadataArgument, "withMetadataArgument");

// node_modules/libphonenumber-js/core/index.js
init_esm();

// node_modules/libphonenumber-js/es6/PhoneNumber.js
init_esm();

// node_modules/libphonenumber-js/es6/metadata.js
init_esm();

// node_modules/libphonenumber-js/es6/tools/semver-compare.js
init_esm();
function semver_compare_default(a, b2) {
  a = a.split("-");
  b2 = b2.split("-");
  var pa = a[0].split(".");
  var pb = b2[0].split(".");
  for (var i = 0; i < 3; i++) {
    var na = Number(pa[i]);
    var nb = Number(pb[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }
  if (a[1] && b2[1]) {
    return a[1] > b2[1] ? 1 : a[1] < b2[1] ? -1 : 0;
  }
  return !a[1] && b2[1] ? 1 : a[1] && !b2[1] ? -1 : 0;
}
__name(semver_compare_default, "default");

// node_modules/libphonenumber-js/es6/helpers/isObject.js
init_esm();
var objectConstructor = {}.constructor;
function isObject(object) {
  return object !== void 0 && object !== null && object.constructor === objectConstructor;
}
__name(isObject, "isObject");

// node_modules/libphonenumber-js/es6/helpers/isCallingCode.js
init_esm();
var CALLING_CODE_REG_EXP = /^\d+$/;
function isCallingCode(string) {
  return CALLING_CODE_REG_EXP.test(string);
}
__name(isCallingCode, "isCallingCode");

// node_modules/libphonenumber-js/es6/metadata.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
__name(_typeof, "_typeof");
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
__name(_classCallCheck, "_classCallCheck");
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
__name(_defineProperties, "_defineProperties");
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
__name(_createClass, "_createClass");
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
__name(_toPropertyKey, "_toPropertyKey");
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
__name(_toPrimitive, "_toPrimitive");
var V3 = "1.2.0";
var V4 = "1.7.35";
var DEFAULT_EXT_PREFIX = " ext. ";
var Metadata = /* @__PURE__ */ function() {
  function Metadata2(metadata2) {
    _classCallCheck(this, Metadata2);
    validateMetadata(metadata2);
    this.metadata = metadata2;
    setVersion.call(this, metadata2);
  }
  __name(Metadata2, "Metadata");
  return _createClass(Metadata2, [{
    key: "getCountries",
    value: /* @__PURE__ */ __name(function getCountries() {
      return Object.keys(this.metadata.countries).filter(function(_2) {
        return _2 !== "001";
      });
    }, "getCountries")
  }, {
    key: "getCountryMetadata",
    value: /* @__PURE__ */ __name(function getCountryMetadata(countryCode) {
      return this.metadata.countries[countryCode];
    }, "getCountryMetadata")
  }, {
    key: "nonGeographic",
    value: /* @__PURE__ */ __name(function nonGeographic() {
      if (this.v1 || this.v2 || this.v3) return;
      return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }, "nonGeographic")
  }, {
    key: "hasCountry",
    value: /* @__PURE__ */ __name(function hasCountry(country) {
      return this.getCountryMetadata(country) !== void 0;
    }, "hasCountry")
  }, {
    key: "hasCallingCode",
    value: /* @__PURE__ */ __name(function hasCallingCode(callingCode) {
      if (this.getCountryCodesForCallingCode(callingCode)) {
        return true;
      }
      if (this.nonGeographic()) {
        if (this.nonGeographic()[callingCode]) {
          return true;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return true;
        }
      }
    }, "hasCallingCode")
  }, {
    key: "isNonGeographicCallingCode",
    value: /* @__PURE__ */ __name(function isNonGeographicCallingCode(callingCode) {
      if (this.nonGeographic()) {
        return this.nonGeographic()[callingCode] ? true : false;
      } else {
        return this.getCountryCodesForCallingCode(callingCode) ? false : true;
      }
    }, "isNonGeographicCallingCode")
    // Deprecated.
  }, {
    key: "country",
    value: /* @__PURE__ */ __name(function country(countryCode) {
      return this.selectNumberingPlan(countryCode);
    }, "country")
    /**
     * Selects a telephone numbering plan based on either a country code or a calling code.
     * @param {string} argument — Country code or calling code.
     * @param {string} legacyArgumentCallingCode — Legacy argument: calling code, if the first argument is not passed.
     */
  }, {
    key: "selectNumberingPlan",
    value: /* @__PURE__ */ __name(function selectNumberingPlan(argument, legacyArgumentCallingCode) {
      var countryCode;
      var callingCode;
      if (argument) {
        if (isCallingCode(argument)) {
          callingCode = argument;
        } else {
          countryCode = argument;
        }
      }
      if (legacyArgumentCallingCode) {
        callingCode = legacyArgumentCallingCode;
      }
      if (countryCode && countryCode !== "001") {
        var countryMetadata = this.getCountryMetadata(countryCode);
        if (!countryMetadata) {
          throw new Error("Unknown country: ".concat(countryCode));
        }
        this.numberingPlan = new NumberingPlan(countryMetadata, this);
      } else if (callingCode) {
        if (!this.hasCallingCode(callingCode)) {
          throw new Error("Unknown calling code: ".concat(callingCode));
        }
        this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
      } else {
        this.numberingPlan = void 0;
      }
      return this;
    }, "selectNumberingPlan")
  }, {
    key: "getCountryCodesForCallingCode",
    value: /* @__PURE__ */ __name(function getCountryCodesForCallingCode(callingCode) {
      var countryCodes = this.countryCallingCodes()[callingCode];
      if (countryCodes) {
        if (countryCodes.length === 1 && countryCodes[0].length === 3) {
          return;
        }
        return countryCodes;
      }
    }, "getCountryCodesForCallingCode")
  }, {
    key: "getCountryCodeForCallingCode",
    value: /* @__PURE__ */ __name(function getCountryCodeForCallingCode(callingCode) {
      var countryCodes = this.getCountryCodesForCallingCode(callingCode);
      if (countryCodes) {
        return countryCodes[0];
      }
    }, "getCountryCodeForCallingCode")
  }, {
    key: "getNumberingPlanMetadata",
    value: /* @__PURE__ */ __name(function getNumberingPlanMetadata(callingCode) {
      var countryCode = this.getCountryCodeForCallingCode(callingCode);
      if (countryCode) {
        return this.getCountryMetadata(countryCode);
      }
      if (this.nonGeographic()) {
        var metadata2 = this.nonGeographic()[callingCode];
        if (metadata2) {
          return metadata2;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return this.metadata.countries["001"];
        }
      }
    }, "getNumberingPlanMetadata")
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: /* @__PURE__ */ __name(function countryCallingCode() {
      return this.numberingPlan.callingCode();
    }, "countryCallingCode")
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: /* @__PURE__ */ __name(function IDDPrefix() {
      return this.numberingPlan.IDDPrefix();
    }, "IDDPrefix")
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: /* @__PURE__ */ __name(function defaultIDDPrefix() {
      return this.numberingPlan.defaultIDDPrefix();
    }, "defaultIDDPrefix")
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: /* @__PURE__ */ __name(function nationalNumberPattern() {
      return this.numberingPlan.nationalNumberPattern();
    }, "nationalNumberPattern")
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: /* @__PURE__ */ __name(function possibleLengths() {
      return this.numberingPlan.possibleLengths();
    }, "possibleLengths")
    // Deprecated.
  }, {
    key: "formats",
    value: /* @__PURE__ */ __name(function formats() {
      return this.numberingPlan.formats();
    }, "formats")
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: /* @__PURE__ */ __name(function nationalPrefixForParsing() {
      return this.numberingPlan.nationalPrefixForParsing();
    }, "nationalPrefixForParsing")
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: /* @__PURE__ */ __name(function nationalPrefixTransformRule() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }, "nationalPrefixTransformRule")
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: /* @__PURE__ */ __name(function leadingDigits() {
      return this.numberingPlan.leadingDigits();
    }, "leadingDigits")
    // Deprecated.
  }, {
    key: "hasTypes",
    value: /* @__PURE__ */ __name(function hasTypes() {
      return this.numberingPlan.hasTypes();
    }, "hasTypes")
    // Deprecated.
  }, {
    key: "type",
    value: /* @__PURE__ */ __name(function type(_type) {
      return this.numberingPlan.type(_type);
    }, "type")
    // Deprecated.
  }, {
    key: "ext",
    value: /* @__PURE__ */ __name(function ext() {
      return this.numberingPlan.ext();
    }, "ext")
  }, {
    key: "countryCallingCodes",
    value: /* @__PURE__ */ __name(function countryCallingCodes() {
      if (this.v1) return this.metadata.country_phone_code_to_countries;
      return this.metadata.country_calling_codes;
    }, "countryCallingCodes")
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: /* @__PURE__ */ __name(function chooseCountryByCountryCallingCode(callingCode) {
      return this.selectNumberingPlan(callingCode);
    }, "chooseCountryByCountryCallingCode")
  }, {
    key: "hasSelectedNumberingPlan",
    value: /* @__PURE__ */ __name(function hasSelectedNumberingPlan() {
      return this.numberingPlan !== void 0;
    }, "hasSelectedNumberingPlan")
  }]);
}();
var NumberingPlan = /* @__PURE__ */ function() {
  function NumberingPlan2(metadata2, globalMetadataObject) {
    _classCallCheck(this, NumberingPlan2);
    this.globalMetadataObject = globalMetadataObject;
    this.metadata = metadata2;
    setVersion.call(this, globalMetadataObject.metadata);
  }
  __name(NumberingPlan2, "NumberingPlan");
  return _createClass(NumberingPlan2, [{
    key: "callingCode",
    value: /* @__PURE__ */ __name(function callingCode() {
      return this.metadata[0];
    }, "callingCode")
    // When multiple countries share the same calling code,
    // all phone number formatting rules are included in the metadata
    // of the "default" country for that calling code.
    // Any other countries' metdata doesn't include any formatting rules.
    // Google developers said that such storage architecture was chosen for performance reasons.
    //
    // For example, for NANPA region ("North American Numbering Plan Administration",
    // which includes USA, Canada, Cayman Islands, Bahamas, etc) all formatting rules
    // are contained in the metadata of `US` country.
    //
    // This is not public API.
    //
  }, {
    key: "_getDefaultCountryMetadataForThisCallingCode",
    value: /* @__PURE__ */ __name(function _getDefaultCountryMetadataForThisCallingCode() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }, "_getDefaultCountryMetadataForThisCallingCode")
    // Deprecated.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: /* @__PURE__ */ __name(function getDefaultCountryMetadataForRegion() {
      return this._getDefaultCountryMetadataForThisCallingCode();
    }, "getDefaultCountryMetadataForRegion")
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: /* @__PURE__ */ __name(function IDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[1];
    }, "IDDPrefix")
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: /* @__PURE__ */ __name(function defaultIDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[12];
    }, "defaultIDDPrefix")
  }, {
    key: "nationalNumberPattern",
    value: /* @__PURE__ */ __name(function nationalNumberPattern() {
      if (this.v1 || this.v2) return this.metadata[1];
      return this.metadata[2];
    }, "nationalNumberPattern")
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: /* @__PURE__ */ __name(function possibleLengths() {
      if (this.v1) return;
      return this.metadata[this.v2 ? 2 : 3];
    }, "possibleLengths")
  }, {
    key: "_getFormats",
    value: /* @__PURE__ */ __name(function _getFormats(metadata2) {
      return metadata2[this.v1 ? 2 : this.v2 ? 3 : 4];
    }, "_getFormats")
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: /* @__PURE__ */ __name(function formats() {
      var _this = this;
      var formats2 = this._getFormats(this.metadata) || this._getFormats(this._getDefaultCountryMetadataForThisCallingCode()) || [];
      return formats2.map(function(_2) {
        return new Format(_2, _this);
      });
    }, "formats")
  }, {
    key: "nationalPrefix",
    value: /* @__PURE__ */ __name(function nationalPrefix() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }, "nationalPrefix")
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: /* @__PURE__ */ __name(function _getNationalPrefixFormattingRule(metadata2) {
      return metadata2[this.v1 ? 4 : this.v2 ? 5 : 6];
    }, "_getNationalPrefixFormattingRule")
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: /* @__PURE__ */ __name(function nationalPrefixFormattingRule() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this._getDefaultCountryMetadataForThisCallingCode());
    }, "nationalPrefixFormattingRule")
  }, {
    key: "_nationalPrefixForParsing",
    value: /* @__PURE__ */ __name(function _nationalPrefixForParsing() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }, "_nationalPrefixForParsing")
  }, {
    key: "nationalPrefixForParsing",
    value: /* @__PURE__ */ __name(function nationalPrefixForParsing() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }, "nationalPrefixForParsing")
  }, {
    key: "nationalPrefixTransformRule",
    value: /* @__PURE__ */ __name(function nationalPrefixTransformRule() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }, "nationalPrefixTransformRule")
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: /* @__PURE__ */ __name(function _getNationalPrefixIsOptionalWhenFormatting() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }, "_getNationalPrefixIsOptionalWhenFormatting")
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: /* @__PURE__ */ __name(function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this._getDefaultCountryMetadataForThisCallingCode());
    }, "nationalPrefixIsOptionalWhenFormattingInNationalFormat")
  }, {
    key: "leadingDigits",
    value: /* @__PURE__ */ __name(function leadingDigits() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }, "leadingDigits")
  }, {
    key: "types",
    value: /* @__PURE__ */ __name(function types() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }, "types")
  }, {
    key: "hasTypes",
    value: /* @__PURE__ */ __name(function hasTypes() {
      if (this.types() && this.types().length === 0) {
        return false;
      }
      return !!this.types();
    }, "hasTypes")
  }, {
    key: "type",
    value: /* @__PURE__ */ __name(function type(_type2) {
      if (this.hasTypes() && getType(this.types(), _type2)) {
        return new Type(getType(this.types(), _type2), this);
      }
    }, "type")
  }, {
    key: "ext",
    value: /* @__PURE__ */ __name(function ext() {
      if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
      return this.metadata[13] || DEFAULT_EXT_PREFIX;
    }, "ext")
  }]);
}();
var Format = /* @__PURE__ */ function() {
  function Format2(format, metadata2) {
    _classCallCheck(this, Format2);
    this._format = format;
    this.metadata = metadata2;
  }
  __name(Format2, "Format");
  return _createClass(Format2, [{
    key: "pattern",
    value: /* @__PURE__ */ __name(function pattern() {
      return this._format[0];
    }, "pattern")
  }, {
    key: "format",
    value: /* @__PURE__ */ __name(function format() {
      return this._format[1];
    }, "format")
  }, {
    key: "leadingDigitsPatterns",
    value: /* @__PURE__ */ __name(function leadingDigitsPatterns() {
      return this._format[2] || [];
    }, "leadingDigitsPatterns")
  }, {
    key: "nationalPrefixFormattingRule",
    value: /* @__PURE__ */ __name(function nationalPrefixFormattingRule() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }, "nationalPrefixFormattingRule")
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: /* @__PURE__ */ __name(function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }, "nationalPrefixIsOptionalWhenFormattingInNationalFormat")
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: /* @__PURE__ */ __name(function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }, "nationalPrefixIsMandatoryWhenFormattingInNationalFormat")
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: /* @__PURE__ */ __name(function usesNationalPrefix() {
      return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()) ? true : false;
    }, "usesNationalPrefix")
  }, {
    key: "internationalFormat",
    value: /* @__PURE__ */ __name(function internationalFormat() {
      return this._format[5] || this.format();
    }, "internationalFormat")
  }]);
}();
var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;
var Type = /* @__PURE__ */ function() {
  function Type2(type, metadata2) {
    _classCallCheck(this, Type2);
    this.type = type;
    this.metadata = metadata2;
  }
  __name(Type2, "Type");
  return _createClass(Type2, [{
    key: "pattern",
    value: /* @__PURE__ */ __name(function pattern() {
      if (this.metadata.v1) return this.type;
      return this.type[0];
    }, "pattern")
  }, {
    key: "possibleLengths",
    value: /* @__PURE__ */ __name(function possibleLengths() {
      if (this.metadata.v1) return;
      return this.type[1] || this.metadata.possibleLengths();
    }, "possibleLengths")
  }]);
}();
function getType(types, type) {
  switch (type) {
    case "FIXED_LINE":
      return types[0];
    case "MOBILE":
      return types[1];
    case "TOLL_FREE":
      return types[2];
    case "PREMIUM_RATE":
      return types[3];
    case "PERSONAL_NUMBER":
      return types[4];
    case "VOICEMAIL":
      return types[5];
    case "UAN":
      return types[6];
    case "PAGER":
      return types[7];
    case "VOIP":
      return types[8];
    case "SHARED_COST":
      return types[9];
  }
}
__name(getType, "getType");
function validateMetadata(metadata2) {
  if (!metadata2) {
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  }
  if (!isObject(metadata2) || !isObject(metadata2.countries)) {
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(isObject(metadata2) ? "an object of shape: { " + Object.keys(metadata2).join(", ") + " }" : "a " + typeOf(metadata2) + ": " + metadata2, "."));
  }
}
__name(validateMetadata, "validateMetadata");
var typeOf = /* @__PURE__ */ __name(function typeOf2(_2) {
  return _typeof(_2);
}, "typeOf");
function getCountryCallingCode(country, metadataJson) {
  var metadata2 = new Metadata(metadataJson);
  if (metadata2.hasCountry(country)) {
    return metadata2.selectNumberingPlan(country).countryCallingCode();
  }
  throw new Error("Unknown country: ".concat(country));
}
__name(getCountryCallingCode, "getCountryCallingCode");
function setVersion(metadata2) {
  var version = metadata2.version;
  if (typeof version === "number") {
    this.v1 = version === 1;
    this.v2 = version === 2;
    this.v3 = version === 3;
    this.v4 = version === 4;
  } else {
    if (!version) {
      this.v1 = true;
    } else if (semver_compare_default(version, V3) === -1) {
      this.v2 = true;
    } else if (semver_compare_default(version, V4) === -1) {
      this.v3 = true;
    } else {
      this.v4 = true;
    }
  }
}
__name(setVersion, "setVersion");

// node_modules/libphonenumber-js/es6/isPossible.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
init_esm();
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function() {
      return o >= r.length ? { done: true } : { done: false, value: r[o++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_createForOfIteratorHelperLoose, "_createForOfIteratorHelperLoose");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
__name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
__name(_arrayLikeToArray, "_arrayLikeToArray");
function mergeArrays(a, b2) {
  var merged = a.slice();
  for (var _iterator = _createForOfIteratorHelperLoose(b2), _step; !(_step = _iterator()).done; ) {
    var element = _step.value;
    if (a.indexOf(element) < 0) {
      merged.push(element);
    }
  }
  return merged.sort(function(a2, b3) {
    return a2 - b3;
  });
}
__name(mergeArrays, "mergeArrays");

// node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
function checkNumberLength(nationalNumber, country, metadata2) {
  return checkNumberLengthForType(nationalNumber, void 0, country, metadata2);
}
__name(checkNumberLength, "checkNumberLength");
function checkNumberLengthForType(nationalNumber, type, country, metadata2) {
  if (country) {
    metadata2 = new Metadata(metadata2.metadata);
    metadata2.selectNumberingPlan(country);
  }
  var type_info = metadata2.type(type);
  var possible_lengths = type_info && type_info.possibleLengths() || metadata2.possibleLengths();
  if (!possible_lengths) {
    return "IS_POSSIBLE";
  }
  if (type === "FIXED_LINE_OR_MOBILE") {
    if (!metadata2.type("FIXED_LINE")) {
      return checkNumberLengthForType(nationalNumber, "MOBILE", country, metadata2);
    }
    var mobile_type = metadata2.type("MOBILE");
    if (mobile_type) {
      possible_lengths = mergeArrays(possible_lengths, mobile_type.possibleLengths());
    }
  } else if (type && !type_info) {
    return "INVALID_LENGTH";
  }
  var actual_length = nationalNumber.length;
  var minimum_length = possible_lengths[0];
  if (minimum_length === actual_length) {
    return "IS_POSSIBLE";
  }
  if (minimum_length > actual_length) {
    return "TOO_SHORT";
  }
  if (possible_lengths[possible_lengths.length - 1] < actual_length) {
    return "TOO_LONG";
  }
  return possible_lengths.indexOf(actual_length, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
__name(checkNumberLengthForType, "checkNumberLengthForType");

// node_modules/libphonenumber-js/es6/isPossible.js
function isPossiblePhoneNumber(input, options, metadataJson) {
  if (options === void 0) {
    options = {};
  }
  var metadata2 = new Metadata(metadataJson);
  if (options.v2) {
    if (!input.countryCallingCode) {
      throw new Error("Invalid phone number object passed");
    }
    metadata2.selectNumberingPlan(input.country || input.countryCallingCode);
  } else {
    if (!input.phone) {
      return false;
    }
    if (input.country) {
      if (!metadata2.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }
      metadata2.selectNumberingPlan(input.country);
    } else {
      if (!input.countryCallingCode) {
        throw new Error("Invalid phone number object passed");
      }
      metadata2.selectNumberingPlan(input.countryCallingCode);
    }
  }
  if (metadata2.possibleLengths()) {
    return isPossibleNumber(input.phone || input.nationalNumber, metadata2);
  }
  if (input.countryCallingCode && metadata2.isNonGeographicCallingCode(input.countryCallingCode)) {
    return true;
  }
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
__name(isPossiblePhoneNumber, "isPossiblePhoneNumber");
function isPossibleNumber(nationalNumber, metadata2) {
  switch (checkNumberLength(nationalNumber, void 0, metadata2)) {
    case "IS_POSSIBLE":
      return true;
    // This library ignores "local-only" phone numbers (for simplicity).
    // See the readme for more info on what are "local-only" phone numbers.
    // case 'IS_POSSIBLE_LOCAL_ONLY':
    // 	return !isInternational
    default:
      return false;
  }
}
__name(isPossibleNumber, "isPossibleNumber");

// node_modules/libphonenumber-js/es6/isValid.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
init_esm();
function matchesEntirely(text, regularExpressionText) {
  text = text || "";
  return new RegExp("^(?:" + regularExpressionText + ")$").test(text);
}
__name(matchesEntirely, "matchesEntirely");

// node_modules/libphonenumber-js/es6/helpers/getNumberType.js
init_esm();
function _createForOfIteratorHelperLoose2(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray2(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function() {
      return o >= r.length ? { done: true } : { done: false, value: r[o++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_createForOfIteratorHelperLoose2, "_createForOfIteratorHelperLoose");
function _unsupportedIterableToArray2(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0;
  }
}
__name(_unsupportedIterableToArray2, "_unsupportedIterableToArray");
function _arrayLikeToArray2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
__name(_arrayLikeToArray2, "_arrayLikeToArray");
var NON_FIXED_LINE_PHONE_TYPES = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function getNumberType(input, options, metadataJson) {
  options = options || {};
  if (!input.country && !input.countryCallingCode) {
    return;
  }
  var metadata2 = new Metadata(metadataJson);
  metadata2.selectNumberingPlan(input.country || input.countryCallingCode);
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  if (!matchesEntirely(nationalNumber, metadata2.nationalNumberPattern())) {
    return;
  }
  if (isNumberTypeEqualTo(nationalNumber, "FIXED_LINE", metadata2)) {
    if (metadata2.type("MOBILE") && metadata2.type("MOBILE").pattern() === "") {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (!metadata2.type("MOBILE")) {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (isNumberTypeEqualTo(nationalNumber, "MOBILE", metadata2)) {
      return "FIXED_LINE_OR_MOBILE";
    }
    return "FIXED_LINE";
  }
  for (var _iterator = _createForOfIteratorHelperLoose2(NON_FIXED_LINE_PHONE_TYPES), _step; !(_step = _iterator()).done; ) {
    var type = _step.value;
    if (isNumberTypeEqualTo(nationalNumber, type, metadata2)) {
      return type;
    }
  }
}
__name(getNumberType, "getNumberType");
function isNumberTypeEqualTo(nationalNumber, type, metadata2) {
  var typeDefinition = metadata2.type(type);
  if (!typeDefinition || !typeDefinition.pattern()) {
    return false;
  }
  if (typeDefinition.possibleLengths() && typeDefinition.possibleLengths().indexOf(nationalNumber.length) < 0) {
    return false;
  }
  return matchesEntirely(nationalNumber, typeDefinition.pattern());
}
__name(isNumberTypeEqualTo, "isNumberTypeEqualTo");

// node_modules/libphonenumber-js/es6/isValid.js
function isValidNumber(input, options, metadataJson) {
  options = options || {};
  var metadata2 = new Metadata(metadataJson);
  metadata2.selectNumberingPlan(input.country || input.countryCallingCode);
  if (metadata2.hasTypes()) {
    return getNumberType(input, options, metadata2.metadata) !== void 0;
  }
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  return matchesEntirely(nationalNumber, metadata2.nationalNumberPattern());
}
__name(isValidNumber, "isValidNumber");

// node_modules/libphonenumber-js/es6/helpers/getCountryAndCallingCodeFromOneOfThem.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/isCountryCode.js
init_esm();
var COUNTRY_CODE_REG_EXP = /^[A-Z]{2}$/;
function isCountryCode(string) {
  return COUNTRY_CODE_REG_EXP.test(string);
}
__name(isCountryCode, "isCountryCode");

// node_modules/libphonenumber-js/es6/helpers/getCountryAndCallingCodeFromOneOfThem.js
var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
function getCountryAndCallingCodeFromOneOfThem(countryOrCallingCode, metadataJson) {
  var country;
  var callingCode;
  var metadata2 = new Metadata(metadataJson);
  if (isCountryCode(countryOrCallingCode)) {
    country = countryOrCallingCode;
    metadata2.selectNumberingPlan(country);
    callingCode = metadata2.countryCallingCode();
  } else {
    callingCode = countryOrCallingCode;
    if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
      if (metadata2.isNonGeographicCallingCode(callingCode)) {
        country = "001";
      }
    }
  }
  return {
    country,
    callingCode
  };
}
__name(getCountryAndCallingCodeFromOneOfThem, "getCountryAndCallingCodeFromOneOfThem");

// node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
init_esm();
function getPossibleCountriesForNumber(callingCode, nationalNumber, metadata2) {
  var _metadata = new Metadata(metadata2);
  var possibleCountries = _metadata.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return [];
  }
  return possibleCountries.filter(function(country) {
    return couldNationalNumberBelongToCountry(nationalNumber, country, metadata2);
  });
}
__name(getPossibleCountriesForNumber, "getPossibleCountriesForNumber");
function couldNationalNumberBelongToCountry(nationalNumber, country, metadataJson) {
  var metadata2 = new Metadata(metadataJson);
  metadata2.selectNumberingPlan(country);
  return metadata2.numberingPlan.possibleLengths().indexOf(nationalNumber.length) >= 0;
}
__name(couldNationalNumberBelongToCountry, "couldNationalNumberBelongToCountry");

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js
init_esm();

// node_modules/libphonenumber-js/es6/constants.js
init_esm();
var MIN_LENGTH_FOR_NSN = 2;
var MAX_LENGTH_FOR_NSN = 17;
var MAX_LENGTH_COUNTRY_CODE = 3;
var VALID_DIGITS = "0-9０-９٠-٩۰-۹";
var DASHES = "-‐-―−ー－";
var SLASHES = "／/";
var DOTS = "．.";
var WHITESPACE = "  ­​⁠　";
var BRACKETS = "()（）［］\\[\\]";
var TILDES = "~⁓∼～";
var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
var PLUS_CHARS = "+＋";

// node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js
var CAPTURING_DIGIT_PATTERN = new RegExp("([" + VALID_DIGITS + "])");
function stripIddPrefix(number, country, callingCode, metadataJson) {
  if (!country) {
    return;
  }
  var metadata2 = new Metadata(metadataJson);
  metadata2.selectNumberingPlan(country || callingCode);
  var IDDPrefixPattern = new RegExp(metadata2.IDDPrefix());
  if (number.search(IDDPrefixPattern) !== 0) {
    return;
  }
  number = number.slice(number.match(IDDPrefixPattern)[0].length);
  var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);
  if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
    if (matchedGroups[1] === "0") {
      return;
    }
  }
  return number;
}
__name(stripIddPrefix, "stripIddPrefix");

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
init_esm();
function extractNationalNumberFromPossiblyIncompleteNumber(number, metadata2) {
  if (number && metadata2.numberingPlan.nationalPrefixForParsing()) {
    var prefixPattern = new RegExp("^(?:" + metadata2.numberingPlan.nationalPrefixForParsing() + ")");
    var prefixMatch = prefixPattern.exec(number);
    if (prefixMatch) {
      var nationalNumber;
      var carrierCode;
      var capturedGroupsCount = prefixMatch.length - 1;
      var hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];
      if (metadata2.nationalPrefixTransformRule() && hasCapturedGroups) {
        nationalNumber = number.replace(prefixPattern, metadata2.nationalPrefixTransformRule());
        if (capturedGroupsCount > 1) {
          carrierCode = prefixMatch[1];
        }
      } else {
        var prefixBeforeNationalNumber = prefixMatch[0];
        nationalNumber = number.slice(prefixBeforeNationalNumber.length);
        if (hasCapturedGroups) {
          carrierCode = prefixMatch[1];
        }
      }
      var nationalPrefix;
      if (hasCapturedGroups) {
        var possiblePositionOfTheFirstCapturedGroup = number.indexOf(prefixMatch[1]);
        var possibleNationalPrefix = number.slice(0, possiblePositionOfTheFirstCapturedGroup);
        if (possibleNationalPrefix === metadata2.numberingPlan.nationalPrefix()) {
          nationalPrefix = metadata2.numberingPlan.nationalPrefix();
        }
      } else {
        nationalPrefix = prefixMatch[0];
      }
      return {
        nationalNumber,
        nationalPrefix,
        carrierCode
      };
    }
  }
  return {
    nationalNumber: number
  };
}
__name(extractNationalNumberFromPossiblyIncompleteNumber, "extractNationalNumberFromPossiblyIncompleteNumber");

// node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/getCountryByNationalNumber.js
init_esm();
function _createForOfIteratorHelperLoose3(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray3(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function() {
      return o >= r.length ? { done: true } : { done: false, value: r[o++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_createForOfIteratorHelperLoose3, "_createForOfIteratorHelperLoose");
function _unsupportedIterableToArray3(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray3(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray3(r, a) : void 0;
  }
}
__name(_unsupportedIterableToArray3, "_unsupportedIterableToArray");
function _arrayLikeToArray3(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
__name(_arrayLikeToArray3, "_arrayLikeToArray");
function getCountryByNationalNumber(nationalNumber, countries, metadataJson) {
  var metadata2 = new Metadata(metadataJson);
  for (var _iterator = _createForOfIteratorHelperLoose3(countries), _step; !(_step = _iterator()).done; ) {
    var country = _step.value;
    metadata2.selectNumberingPlan(country);
    if (metadata2.leadingDigits()) {
      if (nationalNumber && nationalNumber.search(metadata2.leadingDigits()) === 0) {
        return country;
      }
    } else if (getNumberType({
      phone: nationalNumber,
      country
    }, void 0, metadata2.metadata)) {
      return country;
    }
  }
}
__name(getCountryByNationalNumber, "getCountryByNationalNumber");

// node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
var USE_NON_GEOGRAPHIC_COUNTRY_CODE2 = false;
function getCountryByCallingCode(callingCode, _ref) {
  var nationalNumber = _ref.nationalNumber, metadata2 = _ref.metadata;
  if (USE_NON_GEOGRAPHIC_COUNTRY_CODE2) {
    if (metadata2.isNonGeographicCallingCode(callingCode)) {
      return "001";
    }
  }
  var possibleCountries = metadata2.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return;
  }
  if (possibleCountries.length === 1) {
    return possibleCountries[0];
  }
  return getCountryByNationalNumber(nationalNumber, possibleCountries, metadata2.metadata);
}
__name(getCountryByCallingCode, "getCountryByCallingCode");

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
function extractNationalNumber(number, country, metadata2) {
  var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(number, metadata2), carrierCode = _extractNationalNumbe.carrierCode, nationalNumber = _extractNationalNumbe.nationalNumber;
  if (nationalNumber !== number) {
    if (!shouldHaveExtractedNationalPrefix(number, nationalNumber, metadata2)) {
      return {
        nationalNumber: number
      };
    }
    if (metadata2.numberingPlan.possibleLengths()) {
      if (!country) {
        country = getCountryByCallingCode(metadata2.numberingPlan.callingCode(), {
          nationalNumber,
          metadata: metadata2
        });
      }
      if (!isPossibleIncompleteNationalNumber(nationalNumber, country, metadata2)) {
        return {
          nationalNumber: number
        };
      }
    }
  }
  return {
    nationalNumber,
    carrierCode
  };
}
__name(extractNationalNumber, "extractNationalNumber");
function shouldHaveExtractedNationalPrefix(nationalNumberBefore, nationalNumberAfter, metadata2) {
  if (matchesEntirely(nationalNumberBefore, metadata2.nationalNumberPattern()) && !matchesEntirely(nationalNumberAfter, metadata2.nationalNumberPattern())) {
    return false;
  }
  return true;
}
__name(shouldHaveExtractedNationalPrefix, "shouldHaveExtractedNationalPrefix");
function isPossibleIncompleteNationalNumber(nationalNumber, country, metadata2) {
  switch (checkNumberLength(nationalNumber, country, metadata2)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return false;
    default:
      return true;
  }
}
__name(isPossibleIncompleteNationalNumber, "isPossibleIncompleteNationalNumber");

// node_modules/libphonenumber-js/es6/getCountryCallingCode.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, defaultCountry, defaultCallingCode, metadataJson) {
  if (!(country || defaultCountry || defaultCallingCode)) {
    return {
      number
    };
  }
  var countryCallingCode = country || defaultCountry ? getCountryCallingCode(country || defaultCountry, metadataJson) : defaultCallingCode;
  if (number.indexOf(countryCallingCode) === 0) {
    var metadata2 = new Metadata(metadataJson);
    metadata2.selectNumberingPlan(country || defaultCountry || defaultCallingCode);
    var possibleShorterNumber = number.slice(countryCallingCode.length);
    var _extractNationalNumbe = extractNationalNumber(possibleShorterNumber, void 0, metadata2), possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;
    var _extractNationalNumbe2 = extractNationalNumber(number, void 0, metadata2), nationalNumber = _extractNationalNumbe2.nationalNumber;
    if (!matchesEntirely(nationalNumber, metadata2.nationalNumberPattern()) && matchesEntirely(possibleShorterNationalNumber, metadata2.nationalNumberPattern()) || checkNumberLength(nationalNumber, void 0, metadata2) === "TOO_LONG") {
      return {
        countryCallingCode,
        number: possibleShorterNumber
      };
    }
  }
  return {
    number
  };
}
__name(extractCountryCallingCodeFromInternationalNumberWithoutPlusSign, "extractCountryCallingCodeFromInternationalNumberWithoutPlusSign");

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
function extractCountryCallingCode(number, country, defaultCountry, defaultCallingCode, metadataJson) {
  if (!number) {
    return {};
  }
  var isNumberWithIddPrefix;
  if (number[0] !== "+") {
    var numberWithoutIDD = stripIddPrefix(number, country || defaultCountry, defaultCallingCode, metadataJson);
    if (numberWithoutIDD && numberWithoutIDD !== number) {
      isNumberWithIddPrefix = true;
      number = "+" + numberWithoutIDD;
    } else {
      if (country || defaultCountry || defaultCallingCode) {
        var _extractCountryCallin = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, defaultCountry, defaultCallingCode, metadataJson), countryCallingCode = _extractCountryCallin.countryCallingCode, shorterNumber = _extractCountryCallin.number;
        if (countryCallingCode) {
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode,
            number: shorterNumber
          };
        }
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number
      };
    }
  }
  if (number[1] === "0") {
    return {};
  }
  var metadata2 = new Metadata(metadataJson);
  var i = 2;
  while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
    var _countryCallingCode = number.slice(1, i);
    if (metadata2.hasCallingCode(_countryCallingCode)) {
      metadata2.selectNumberingPlan(_countryCallingCode);
      return {
        countryCallingCodeSource: isNumberWithIddPrefix ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: _countryCallingCode,
        number: number.slice(i)
      };
    }
    i++;
  }
  return {};
}
__name(extractCountryCallingCode, "extractCountryCallingCode");

// node_modules/libphonenumber-js/es6/format.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
init_esm();
function applyInternationalSeparatorStyle(formattedNumber) {
  return formattedNumber.replace(new RegExp("[".concat(VALID_PUNCTUATION, "]+"), "g"), " ").trim();
}
__name(applyInternationalSeparatorStyle, "applyInternationalSeparatorStyle");

// node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
var FIRST_GROUP_PATTERN = /(\$\d)/;
function formatNationalNumberUsingFormat(number, format, _ref) {
  var useInternationalFormat = _ref.useInternationalFormat, withNationalPrefix = _ref.withNationalPrefix, carrierCode = _ref.carrierCode, metadata2 = _ref.metadata;
  var formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    withNationalPrefix && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format()
  ));
  if (useInternationalFormat) {
    return applyInternationalSeparatorStyle(formattedNumber);
  }
  return formattedNumber;
}
__name(formatNationalNumberUsingFormat, "formatNationalNumberUsingFormat");

// node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
init_esm();
var SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function getIddPrefix(country, callingCode, metadata2) {
  var countryMetadata = new Metadata(metadata2);
  countryMetadata.selectNumberingPlan(country || callingCode);
  if (countryMetadata.defaultIDDPrefix()) {
    return countryMetadata.defaultIDDPrefix();
  }
  if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
    return countryMetadata.IDDPrefix();
  }
}
__name(getIddPrefix, "getIddPrefix");

// node_modules/libphonenumber-js/es6/helpers/RFC3966.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
init_esm();
var RFC3966_EXTN_PREFIX = ";ext=";
var getExtensionDigitsPattern = /* @__PURE__ */ __name(function getExtensionDigitsPattern2(maxLength) {
  return "([".concat(VALID_DIGITS, "]{1,").concat(maxLength, "})");
}, "getExtensionDigitsPattern");
function createExtensionPattern(purpose) {
  var extLimitAfterExplicitLabel = "20";
  var extLimitAfterLikelyLabel = "15";
  var extLimitAfterAmbiguousChar = "9";
  var extLimitWhenNotSure = "6";
  var possibleSeparatorsBetweenNumberAndExtLabel = "[  \\t,]*";
  var possibleCharsAfterExtLabel = "[:\\.．]?[  \\t,-]*";
  var optionalExtnSuffix = "#?";
  var explicitExtLabels = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)";
  var ambiguousExtLabels = "(?:[xｘ#＃~～]|int|ｉｎｔ)";
  var ambiguousSeparator = "[- ]+";
  var possibleSeparatorsNumberExtLabelNoComma = "[  \\t]*";
  var autoDiallingAndExtLabelsFound = "(?:,{2}|;)";
  var rfcExtn = RFC3966_EXTN_PREFIX + getExtensionDigitsPattern(extLimitAfterExplicitLabel);
  var explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
  var ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  var americanStyleExtnWithSuffix = ambiguousSeparator + getExtensionDigitsPattern(extLimitWhenNotSure) + "#";
  var autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
  var onlyCommasExtn = possibleSeparatorsNumberExtLabelNoComma + "(?:,)+" + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  return rfcExtn + "|" + explicitExtn + "|" + ambiguousExtn + "|" + americanStyleExtnWithSuffix + "|" + autoDiallingExtn + "|" + onlyCommasExtn;
}
__name(createExtensionPattern, "createExtensionPattern");

// node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
var MIN_LENGTH_PHONE_NUMBER_PATTERN = "[" + VALID_DIGITS + "]{" + MIN_LENGTH_FOR_NSN + "}";
var VALID_PHONE_NUMBER = "[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){3,}[" + VALID_PUNCTUATION + VALID_DIGITS + "]*";
var VALID_PHONE_NUMBER_START_REG_EXP = new RegExp("^[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){1,2}$", "i");
var VALID_PHONE_NUMBER_WITH_EXTENSION = VALID_PHONE_NUMBER + // Phone number extensions
"(?:" + createExtensionPattern() + ")?";
var VALID_PHONE_NUMBER_PATTERN = new RegExp(
  // Either a short two-digit-only phone number
  "^" + MIN_LENGTH_PHONE_NUMBER_PATTERN + "$|^" + VALID_PHONE_NUMBER_WITH_EXTENSION + "$",
  "i"
);
function isViablePhoneNumber(number) {
  return number.length >= MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
}
__name(isViablePhoneNumber, "isViablePhoneNumber");
function isViablePhoneNumberStart(number) {
  return VALID_PHONE_NUMBER_START_REG_EXP.test(number);
}
__name(isViablePhoneNumberStart, "isViablePhoneNumberStart");

// node_modules/libphonenumber-js/es6/helpers/RFC3966.js
function formatRFC3966(_ref) {
  var number = _ref.number, ext = _ref.ext;
  if (!number) {
    return "";
  }
  if (number[0] !== "+") {
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  }
  return "tel:".concat(number).concat(ext ? ";ext=" + ext : "");
}
__name(formatRFC3966, "formatRFC3966");

// node_modules/libphonenumber-js/es6/format.js
var DEFAULT_OPTIONS = {
  formatExtension: /* @__PURE__ */ __name(function formatExtension(formattedNumber, extension, metadata2) {
    return "".concat(formattedNumber).concat(metadata2.ext()).concat(extension);
  }, "formatExtension")
};
function formatNumber(input, format, options, metadataJson) {
  if (options) {
    options = merge({}, DEFAULT_OPTIONS, options);
  } else {
    options = DEFAULT_OPTIONS;
  }
  var metadata2 = new Metadata(metadataJson);
  if (input.country && input.country !== "001") {
    if (!metadata2.hasCountry(input.country)) {
      throw new Error("Unknown country: ".concat(input.country));
    }
    metadata2.selectNumberingPlan(input.country);
  } else if (input.countryCallingCode) {
    metadata2.selectNumberingPlan(input.countryCallingCode);
  } else return input.phone || "";
  var countryCallingCode = metadata2.countryCallingCode();
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  var number;
  switch (format) {
    case "NATIONAL":
      if (!nationalNumber) {
        return "";
      }
      number = formatNationalNumber(nationalNumber, input.carrierCode, "NATIONAL", metadata2, options);
      return addExtension(number, input.ext, metadata2, options.formatExtension);
    case "INTERNATIONAL":
      if (!nationalNumber) {
        return "+".concat(countryCallingCode);
      }
      number = formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata2, options);
      number = "+".concat(countryCallingCode, " ").concat(number);
      return addExtension(number, input.ext, metadata2, options.formatExtension);
    case "E.164":
      return "+".concat(countryCallingCode).concat(nationalNumber);
    case "RFC3966":
      return formatRFC3966({
        number: "+".concat(countryCallingCode).concat(nationalNumber),
        ext: input.ext
      });
    // For reference, here's Google's IDD formatter:
    // https://github.com/google/libphonenumber/blob/32719cf74e68796788d1ca45abc85dcdc63ba5b9/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L1546
    // Not saying that this IDD formatter replicates it 1:1, but it seems to work.
    // Who would even need to format phone numbers in IDD format anyway?
    case "IDD":
      if (!options.fromCountry) {
        return;
      }
      var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata2);
      if (!formattedNumber) {
        return;
      }
      return addExtension(formattedNumber, input.ext, metadata2, options.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(format, '"'));
  }
}
__name(formatNumber, "formatNumber");
function formatNationalNumber(number, carrierCode, formatAs, metadata2, options) {
  var format = chooseFormatForNumber(metadata2.formats(), number);
  if (!format) {
    return number;
  }
  return formatNationalNumberUsingFormat(number, format, {
    useInternationalFormat: formatAs === "INTERNATIONAL",
    withNationalPrefix: format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false ? false : true,
    carrierCode,
    metadata: metadata2
  });
}
__name(formatNationalNumber, "formatNationalNumber");
function chooseFormatForNumber(availableFormats, nationalNumber) {
  return pickFirstMatchingElement(availableFormats, function(format) {
    if (format.leadingDigitsPatterns().length > 0) {
      var lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1];
      if (nationalNumber.search(lastLeadingDigitsPattern) !== 0) {
        return false;
      }
    }
    return matchesEntirely(nationalNumber, format.pattern());
  });
}
__name(chooseFormatForNumber, "chooseFormatForNumber");
function addExtension(formattedNumber, ext, metadata2, formatExtension2) {
  return ext ? formatExtension2(formattedNumber, ext, metadata2) : formattedNumber;
}
__name(addExtension, "addExtension");
function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata2) {
  var fromCountryCallingCode = getCountryCallingCode(fromCountry, metadata2.metadata);
  if (fromCountryCallingCode === countryCallingCode) {
    var formattedNumber = formatNationalNumber(nationalNumber, carrierCode, "NATIONAL", metadata2);
    if (countryCallingCode === "1") {
      return countryCallingCode + " " + formattedNumber;
    }
    return formattedNumber;
  }
  var iddPrefix = getIddPrefix(fromCountry, void 0, metadata2.metadata);
  if (iddPrefix) {
    return "".concat(iddPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata2));
  }
}
__name(formatIDD, "formatIDD");
function merge() {
  var i = 1;
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }
  while (i < objects.length) {
    if (objects[i]) {
      for (var key in objects[i]) {
        objects[0][key] = objects[i][key];
      }
    }
    i++;
  }
  return objects[0];
}
__name(merge, "merge");
function pickFirstMatchingElement(elements, testFunction) {
  var i = 0;
  while (i < elements.length) {
    if (testFunction(elements[i])) {
      return elements[i];
    }
    i++;
  }
}
__name(pickFirstMatchingElement, "pickFirstMatchingElement");

// node_modules/libphonenumber-js/es6/PhoneNumber.js
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
__name(_typeof2, "_typeof");
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
__name(ownKeys, "ownKeys");
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
__name(_objectSpread, "_objectSpread");
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
__name(_defineProperty, "_defineProperty");
function _classCallCheck2(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
__name(_classCallCheck2, "_classCallCheck");
function _defineProperties2(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey2(o.key), o);
  }
}
__name(_defineProperties2, "_defineProperties");
function _createClass2(e, r, t) {
  return r && _defineProperties2(e.prototype, r), t && _defineProperties2(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
__name(_createClass2, "_createClass");
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == _typeof2(i) ? i : i + "";
}
__name(_toPropertyKey2, "_toPropertyKey");
function _toPrimitive2(t, r) {
  if ("object" != _typeof2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
__name(_toPrimitive2, "_toPrimitive");
var PhoneNumber = /* @__PURE__ */ function() {
  function PhoneNumber3(countryOrCountryCallingCode, nationalNumber, metadata2) {
    _classCallCheck2(this, PhoneNumber3);
    if (!countryOrCountryCallingCode) {
      throw new TypeError("First argument is required");
    }
    if (typeof countryOrCountryCallingCode !== "string") {
      throw new TypeError("First argument must be a string");
    }
    if (countryOrCountryCallingCode[0] === "+" && !nationalNumber) {
      throw new TypeError("`metadata` argument not passed");
    }
    if (isObject(nationalNumber) && isObject(nationalNumber.countries)) {
      metadata2 = nationalNumber;
      var e164Number = countryOrCountryCallingCode;
      if (!E164_NUMBER_REGEXP.test(e164Number)) {
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      }
      var _extractCountryCallin = extractCountryCallingCode(e164Number, void 0, void 0, void 0, metadata2), _countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
      nationalNumber = number;
      countryOrCountryCallingCode = _countryCallingCode;
      if (!nationalNumber) {
        throw new Error("Invalid `number` argument passed: too short");
      }
    }
    if (!nationalNumber) {
      throw new TypeError("`nationalNumber` argument is required");
    }
    if (typeof nationalNumber !== "string") {
      throw new TypeError("`nationalNumber` argument must be a string");
    }
    validateMetadata(metadata2);
    var _getCountryAndCalling = getCountryAndCallingCodeFromOneOfThem(countryOrCountryCallingCode, metadata2), country = _getCountryAndCalling.country, countryCallingCode = _getCountryAndCalling.callingCode;
    this.country = country;
    this.countryCallingCode = countryCallingCode;
    this.nationalNumber = nationalNumber;
    this.number = "+" + this.countryCallingCode + this.nationalNumber;
    this.getMetadata = function() {
      return metadata2;
    };
  }
  __name(PhoneNumber3, "PhoneNumber");
  return _createClass2(PhoneNumber3, [{
    key: "setExt",
    value: /* @__PURE__ */ __name(function setExt(ext) {
      this.ext = ext;
    }, "setExt")
  }, {
    key: "getPossibleCountries",
    value: /* @__PURE__ */ __name(function getPossibleCountries() {
      if (this.country) {
        return [this.country];
      }
      return getPossibleCountriesForNumber(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }, "getPossibleCountries")
  }, {
    key: "isPossible",
    value: /* @__PURE__ */ __name(function isPossible() {
      return isPossiblePhoneNumber(this, {
        v2: true
      }, this.getMetadata());
    }, "isPossible")
  }, {
    key: "isValid",
    value: /* @__PURE__ */ __name(function isValid() {
      return isValidNumber(this, {
        v2: true
      }, this.getMetadata());
    }, "isValid")
  }, {
    key: "isNonGeographic",
    value: /* @__PURE__ */ __name(function isNonGeographic() {
      var metadata2 = new Metadata(this.getMetadata());
      return metadata2.isNonGeographicCallingCode(this.countryCallingCode);
    }, "isNonGeographic")
  }, {
    key: "isEqual",
    value: /* @__PURE__ */ __name(function isEqual(phoneNumber) {
      return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
    }, "isEqual")
    // `validateLength()` method was originally meant to be an equivalent for `validatePhoneNumberLength()`.
    //
    // Later, it became apparent that it's not really a true equivalent.
    // The reason is that a `PhoneNumber` instance is not created
    // when the phone number string is too short for it to be considered a valid phone number:
    // * When there must be at least 2 national (significant) number digits: `"1"`.
    // * When the country calling code part of an international number is incomplete: `"+12"`.
    //
    // So leaving this `validateLength()` method here would suggest a hidden anti-pattern
    // of using it instead of `validatePhoneNumberLength()` while ignoring
    // the "too short to be even possible" case from phone number length validation.
    // And ignoring that case wouldn't make any sense in a real-world application
    // because it would still be a valid case that should be handled.
    //
    // Because of that, this method was eventually commented out in order to not introduce
    // that kind of an anti-pattern.
    //
    // validateLength() {
    // 	const result = checkNumberLength(
    // 		this.nationalNumber,
    // 		undefined,
    // 		this.getMetadata()
    // 	)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: /* @__PURE__ */ __name(function getType2() {
      return getNumberType(this, {
        v2: true
      }, this.getMetadata());
    }, "getType")
  }, {
    key: "format",
    value: /* @__PURE__ */ __name(function format(_format, options) {
      return formatNumber(this, _format, options ? _objectSpread(_objectSpread({}, options), {}, {
        v2: true
      }) : {
        v2: true
      }, this.getMetadata());
    }, "format")
  }, {
    key: "formatNational",
    value: /* @__PURE__ */ __name(function formatNational(options) {
      return this.format("NATIONAL", options);
    }, "formatNational")
  }, {
    key: "formatInternational",
    value: /* @__PURE__ */ __name(function formatInternational(options) {
      return this.format("INTERNATIONAL", options);
    }, "formatInternational")
  }, {
    key: "getURI",
    value: /* @__PURE__ */ __name(function getURI(options) {
      return this.format("RFC3966", options);
    }, "getURI")
  }]);
}();
var E164_NUMBER_REGEXP = /^\+\d+$/;

// node_modules/libphonenumber-js/es6/ParseError.js
init_esm();
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
}
__name(_typeof3, "_typeof");
function _defineProperties3(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey3(o.key), o);
  }
}
__name(_defineProperties3, "_defineProperties");
function _createClass3(e, r, t) {
  return r && _defineProperties3(e.prototype, r), t && _defineProperties3(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
__name(_createClass3, "_createClass");
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return "symbol" == _typeof3(i) ? i : i + "";
}
__name(_toPropertyKey3, "_toPropertyKey");
function _toPrimitive3(t, r) {
  if ("object" != _typeof3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
__name(_toPrimitive3, "_toPrimitive");
function _classCallCheck3(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
__name(_classCallCheck3, "_classCallCheck");
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
__name(_callSuper, "_callSuper");
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof3(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
__name(_possibleConstructorReturn, "_possibleConstructorReturn");
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
__name(_assertThisInitialized, "_assertThisInitialized");
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: true, configurable: true } }), Object.defineProperty(t, "prototype", { writable: false }), e && _setPrototypeOf(t, e);
}
__name(_inherits, "_inherits");
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = /* @__PURE__ */ __name(function _wrapNativeSuper2(t2) {
    if (null === t2 || !_isNativeFunction(t2)) return t2;
    if ("function" != typeof t2) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t2)) return r.get(t2);
      r.set(t2, Wrapper);
    }
    function Wrapper() {
      return _construct(t2, arguments, _getPrototypeOf(this).constructor);
    }
    __name(Wrapper, "Wrapper");
    return Wrapper.prototype = Object.create(t2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(Wrapper, t2);
  }, "_wrapNativeSuper"), _wrapNativeSuper(t);
}
__name(_wrapNativeSuper, "_wrapNativeSuper");
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
__name(_construct, "_construct");
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = /* @__PURE__ */ __name(function _isNativeReflectConstruct2() {
    return !!t;
  }, "_isNativeReflectConstruct"))();
}
__name(_isNativeReflectConstruct, "_isNativeReflectConstruct");
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
__name(_isNativeFunction, "_isNativeFunction");
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
__name(_setPrototypeOf, "_setPrototypeOf");
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
__name(_getPrototypeOf, "_getPrototypeOf");
var ParseError = /* @__PURE__ */ function(_Error) {
  function ParseError2(code) {
    var _this;
    _classCallCheck3(this, ParseError2);
    _this = _callSuper(this, ParseError2, [code]);
    Object.setPrototypeOf(_this, ParseError2.prototype);
    _this.name = _this.constructor.name;
    return _this;
  }
  __name(ParseError2, "ParseError");
  _inherits(ParseError2, _Error);
  return _createClass3(ParseError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));

// node_modules/libphonenumber-js/es6/parsePhoneNumberWithError.js
init_esm();

// node_modules/libphonenumber-js/es6/parsePhoneNumberWithError_.js
init_esm();

// node_modules/libphonenumber-js/es6/parse.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js
init_esm();
var EXTN_PATTERN = new RegExp("(?:" + createExtensionPattern() + ")$", "i");
function extractExtension(number) {
  var start = number.search(EXTN_PATTERN);
  if (start < 0) {
    return {};
  }
  var numberWithoutExtension = number.slice(0, start);
  var matches2 = number.match(EXTN_PATTERN);
  var i = 1;
  while (i < matches2.length) {
    if (matches2[i]) {
      return {
        number: numberWithoutExtension,
        ext: matches2[i]
      };
    }
    i++;
  }
}
__name(extractExtension, "extractExtension");

// node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/parseDigits.js
init_esm();
var DIGITS = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function parseDigit(character) {
  return DIGITS[character];
}
__name(parseDigit, "parseDigit");

// node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
function _createForOfIteratorHelperLoose4(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray4(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function() {
      return o >= r.length ? { done: true } : { done: false, value: r[o++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_createForOfIteratorHelperLoose4, "_createForOfIteratorHelperLoose");
function _unsupportedIterableToArray4(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray4(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray4(r, a) : void 0;
  }
}
__name(_unsupportedIterableToArray4, "_unsupportedIterableToArray");
function _arrayLikeToArray4(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
__name(_arrayLikeToArray4, "_arrayLikeToArray");
function parseIncompletePhoneNumber(string) {
  var result2 = "";
  for (var _iterator = _createForOfIteratorHelperLoose4(string.split("")), _step; !(_step = _iterator()).done; ) {
    var character = _step.value;
    result2 += parsePhoneNumberCharacter(character, result2) || "";
  }
  return result2;
}
__name(parseIncompletePhoneNumber, "parseIncompletePhoneNumber");
function parsePhoneNumberCharacter(character, prevParsedCharacters, eventListener) {
  if (character === "+") {
    if (prevParsedCharacters) {
      if (typeof eventListener === "function") {
        eventListener("end");
      }
      return;
    }
    return "+";
  }
  return parseDigit(character);
}
__name(parsePhoneNumberCharacter, "parsePhoneNumberCharacter");

// node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
init_esm();

// node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.js
init_esm();
var PLUS_SIGN = "+";
var RFC3966_VISUAL_SEPARATOR_ = "[\\-\\.\\(\\)]?";
var RFC3966_PHONE_DIGIT_ = "([" + VALID_DIGITS + "]|" + RFC3966_VISUAL_SEPARATOR_ + ")";
var RFC3966_GLOBAL_NUMBER_DIGITS_ = "^\\" + PLUS_SIGN + RFC3966_PHONE_DIGIT_ + "*[" + VALID_DIGITS + "]" + RFC3966_PHONE_DIGIT_ + "*$";
var RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_ = new RegExp(RFC3966_GLOBAL_NUMBER_DIGITS_, "g");
var ALPHANUM_ = VALID_DIGITS;
var RFC3966_DOMAINLABEL_ = "[" + ALPHANUM_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var VALID_ALPHA_ = "a-zA-Z";
var RFC3966_TOPLABEL_ = "[" + VALID_ALPHA_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var RFC3966_DOMAINNAME_ = "^(" + RFC3966_DOMAINLABEL_ + "\\.)*" + RFC3966_TOPLABEL_ + "\\.?$";
var RFC3966_DOMAINNAME_PATTERN_ = new RegExp(RFC3966_DOMAINNAME_, "g");
var RFC3966_PREFIX_ = "tel:";
var RFC3966_PHONE_CONTEXT_ = ";phone-context=";
var RFC3966_ISDN_SUBADDRESS_ = ";isub=";
function extractPhoneContext(numberToExtractFrom) {
  var indexOfPhoneContext = numberToExtractFrom.indexOf(RFC3966_PHONE_CONTEXT_);
  if (indexOfPhoneContext < 0) {
    return null;
  }
  var phoneContextStart = indexOfPhoneContext + RFC3966_PHONE_CONTEXT_.length;
  if (phoneContextStart >= numberToExtractFrom.length) {
    return "";
  }
  var phoneContextEnd = numberToExtractFrom.indexOf(";", phoneContextStart);
  if (phoneContextEnd >= 0) {
    return numberToExtractFrom.substring(phoneContextStart, phoneContextEnd);
  } else {
    return numberToExtractFrom.substring(phoneContextStart);
  }
}
__name(extractPhoneContext, "extractPhoneContext");
function isPhoneContextValid(phoneContext) {
  if (phoneContext === null) {
    return true;
  }
  if (phoneContext.length === 0) {
    return false;
  }
  return RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_.test(phoneContext) || RFC3966_DOMAINNAME_PATTERN_.test(phoneContext);
}
__name(isPhoneContextValid, "isPhoneContextValid");

// node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
function extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(numberToParse, _ref) {
  var extractFormattedPhoneNumber = _ref.extractFormattedPhoneNumber;
  var phoneContext = extractPhoneContext(numberToParse);
  if (!isPhoneContextValid(phoneContext)) {
    throw new ParseError("NOT_A_NUMBER");
  }
  var phoneNumberString;
  if (phoneContext === null) {
    phoneNumberString = extractFormattedPhoneNumber(numberToParse) || "";
  } else {
    phoneNumberString = "";
    if (phoneContext.charAt(0) === PLUS_SIGN) {
      phoneNumberString += phoneContext;
    }
    var indexOfRfc3966Prefix = numberToParse.indexOf(RFC3966_PREFIX_);
    var indexOfNationalNumber;
    if (indexOfRfc3966Prefix >= 0) {
      indexOfNationalNumber = indexOfRfc3966Prefix + RFC3966_PREFIX_.length;
    } else {
      indexOfNationalNumber = 0;
    }
    var indexOfPhoneContext = numberToParse.indexOf(RFC3966_PHONE_CONTEXT_);
    phoneNumberString += numberToParse.substring(indexOfNationalNumber, indexOfPhoneContext);
  }
  var indexOfIsdn = phoneNumberString.indexOf(RFC3966_ISDN_SUBADDRESS_);
  if (indexOfIsdn > 0) {
    phoneNumberString = phoneNumberString.substring(0, indexOfIsdn);
  }
  if (phoneNumberString !== "") {
    return phoneNumberString;
  }
}
__name(extractFormattedPhoneNumberFromPossibleRfc3966NumberUri, "extractFormattedPhoneNumberFromPossibleRfc3966NumberUri");

// node_modules/libphonenumber-js/es6/parse.js
var MAX_INPUT_STRING_LENGTH = 250;
var PHONE_NUMBER_START_PATTERN = new RegExp("[" + PLUS_CHARS + VALID_DIGITS + "]");
var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp("[^" + VALID_DIGITS + "#]+$");
var USE_NON_GEOGRAPHIC_COUNTRY_CODE3 = false;
function parse(text, options, metadataJson) {
  options = options || {};
  var metadata2 = new Metadata(metadataJson);
  if (options.defaultCountry && !metadata2.hasCountry(options.defaultCountry)) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    throw new Error("Unknown country: ".concat(options.defaultCountry));
  }
  var _parseInput = parseInput(text, options.v2, options.extract), formattedPhoneNumber = _parseInput.number, ext = _parseInput.ext, error = _parseInput.error;
  if (!formattedPhoneNumber) {
    if (options.v2) {
      if (error === "TOO_SHORT") {
        throw new ParseError("TOO_SHORT");
      }
      throw new ParseError("NOT_A_NUMBER");
    }
    return {};
  }
  var _parsePhoneNumber = parsePhoneNumber(
    formattedPhoneNumber,
    options.defaultCountry,
    options.defaultCallingCode,
    // If `country` is returned, its numbering plan will also be selected in `metadata`.
    // Otherwise, if `countryCallingCode` is returned, its numbering plan will also be selected in `metadata`.
    // Otherwise, if neither `country` nor `countryCallingCode` are returned, no numbering plan will be selected in `metadata`.
    metadata2
  ), country = _parsePhoneNumber.country, nationalNumber = _parsePhoneNumber.nationalNumber, countryCallingCode = _parsePhoneNumber.countryCallingCode, countryCallingCodeSource = _parsePhoneNumber.countryCallingCodeSource, carrierCode = _parsePhoneNumber.carrierCode;
  if (!metadata2.hasSelectedNumberingPlan()) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    return {};
  }
  if (!nationalNumber || nationalNumber.length < MIN_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_SHORT");
    }
    return {};
  }
  if (nationalNumber.length > MAX_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_LONG");
    }
    return {};
  }
  if (options.v2) {
    var phoneNumber = new PhoneNumber(countryCallingCode, nationalNumber, metadata2.metadata);
    if (country) {
      phoneNumber.country = country;
    }
    if (carrierCode) {
      phoneNumber.carrierCode = carrierCode;
    }
    if (ext) {
      phoneNumber.ext = ext;
    }
    phoneNumber.__countryCallingCodeSource = countryCallingCodeSource;
    return phoneNumber;
  }
  var valid = (options.extended ? metadata2.hasSelectedNumberingPlan() : country) ? matchesEntirely(nationalNumber, metadata2.nationalNumberPattern()) : false;
  if (!options.extended) {
    return valid ? result(country, nationalNumber, ext) : {};
  }
  return {
    country,
    countryCallingCode,
    carrierCode,
    valid,
    possible: valid ? true : options.extended === true && metadata2.possibleLengths() && isPossibleNumber(nationalNumber, metadata2) ? true : false,
    phone: nationalNumber,
    ext
  };
}
__name(parse, "parse");
function _extractFormattedPhoneNumber(text, extract, throwOnError) {
  if (!text) {
    return;
  }
  if (text.length > MAX_INPUT_STRING_LENGTH) {
    if (throwOnError) {
      throw new ParseError("TOO_LONG");
    }
    return;
  }
  if (extract === false) {
    return text;
  }
  var startsAt = text.search(PHONE_NUMBER_START_PATTERN);
  if (startsAt < 0) {
    return;
  }
  return text.slice(startsAt).replace(AFTER_PHONE_NUMBER_END_PATTERN, "");
}
__name(_extractFormattedPhoneNumber, "_extractFormattedPhoneNumber");
function parseInput(text, v2, extract) {
  var number = extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(text, {
    extractFormattedPhoneNumber: /* @__PURE__ */ __name(function extractFormattedPhoneNumber(text2) {
      return _extractFormattedPhoneNumber(text2, extract, v2);
    }, "extractFormattedPhoneNumber")
  });
  if (!number) {
    return {};
  }
  if (!isViablePhoneNumber(number)) {
    if (isViablePhoneNumberStart(number)) {
      return {
        error: "TOO_SHORT"
      };
    }
    return {};
  }
  var withExtensionStripped = extractExtension(number);
  if (withExtensionStripped.ext) {
    return withExtensionStripped;
  }
  return {
    number
  };
}
__name(parseInput, "parseInput");
function result(country, nationalNumber, ext) {
  var result2 = {
    country,
    phone: nationalNumber
  };
  if (ext) {
    result2.ext = ext;
  }
  return result2;
}
__name(result, "result");
function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata2) {
  var _extractCountryCallin = extractCountryCallingCode(
    parseIncompletePhoneNumber(formattedPhoneNumber),
    void 0,
    // `defaultCountry` and `defaultCallingCode` are only used to detect
    // if it's an "international" phone number or not. They won't be used
    // to derive the resulting `countryCallingCode` from them, or anything like that.
    defaultCountry,
    defaultCallingCode,
    metadata2.metadata
  ), countryCallingCodeSource = _extractCountryCallin.countryCallingCodeSource, countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
  var country;
  if (countryCallingCode) {
    metadata2.selectNumberingPlan(countryCallingCode);
  } else if (number && (defaultCountry || defaultCallingCode)) {
    if (defaultCountry) {
      country = defaultCountry;
      metadata2.selectNumberingPlan(defaultCountry);
      countryCallingCode = metadata2.numberingPlan.callingCode();
    } else {
      metadata2.selectNumberingPlan(defaultCallingCode);
      countryCallingCode = defaultCallingCode;
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE3) {
        if (metadata2.isNonGeographicCallingCode(countryCallingCode)) {
          country = "001";
        }
      }
    }
  } else return {};
  if (!number) {
    return {
      countryCallingCodeSource,
      countryCallingCode
    };
  }
  var _extractNationalNumbe = extractNationalNumber(parseIncompletePhoneNumber(number), void 0, metadata2), nationalNumber = _extractNationalNumbe.nationalNumber, carrierCode = _extractNationalNumbe.carrierCode;
  var exactCountry = getCountryByCallingCode(countryCallingCode, {
    nationalNumber,
    metadata: metadata2
  });
  if (exactCountry) {
    country = exactCountry;
    if (exactCountry === "001") {
    } else {
      metadata2.selectNumberingPlan(country);
    }
  }
  return {
    country,
    countryCallingCode,
    countryCallingCodeSource,
    nationalNumber,
    carrierCode
  };
}
__name(parsePhoneNumber, "parsePhoneNumber");

// node_modules/libphonenumber-js/es6/parsePhoneNumberWithError_.js
function _typeof4(o) {
  "@babel/helpers - typeof";
  return _typeof4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof4(o);
}
__name(_typeof4, "_typeof");
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
__name(ownKeys2, "ownKeys");
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
__name(_objectSpread2, "_objectSpread");
function _defineProperty2(e, r, t) {
  return (r = _toPropertyKey4(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
__name(_defineProperty2, "_defineProperty");
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return "symbol" == _typeof4(i) ? i : i + "";
}
__name(_toPropertyKey4, "_toPropertyKey");
function _toPrimitive4(t, r) {
  if ("object" != _typeof4(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof4(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
__name(_toPrimitive4, "_toPrimitive");
function parsePhoneNumberWithError(text, options, metadata2) {
  return parse(text, _objectSpread2(_objectSpread2({}, options), {}, {
    v2: true
  }), metadata2);
}
__name(parsePhoneNumberWithError, "parsePhoneNumberWithError");

// node_modules/libphonenumber-js/es6/normalizeArguments.js
init_esm();
function _typeof5(o) {
  "@babel/helpers - typeof";
  return _typeof5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof5(o);
}
__name(_typeof5, "_typeof");
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
__name(ownKeys3, "ownKeys");
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), true).forEach(function(r2) {
      _defineProperty3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
__name(_objectSpread3, "_objectSpread");
function _defineProperty3(e, r, t) {
  return (r = _toPropertyKey5(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
__name(_defineProperty3, "_defineProperty");
function _toPropertyKey5(t) {
  var i = _toPrimitive5(t, "string");
  return "symbol" == _typeof5(i) ? i : i + "";
}
__name(_toPropertyKey5, "_toPropertyKey");
function _toPrimitive5(t, r) {
  if ("object" != _typeof5(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof5(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
__name(_toPrimitive5, "_toPrimitive");
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray5(r, e) || _nonIterableRest();
}
__name(_slicedToArray, "_slicedToArray");
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_nonIterableRest, "_nonIterableRest");
function _unsupportedIterableToArray5(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray5(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray5(r, a) : void 0;
  }
}
__name(_unsupportedIterableToArray5, "_unsupportedIterableToArray");
function _arrayLikeToArray5(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
__name(_arrayLikeToArray5, "_arrayLikeToArray");
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u2, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u2 = t["return"](), Object(u2) !== u2)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
__name(_iterableToArrayLimit, "_iterableToArrayLimit");
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
__name(_arrayWithHoles, "_arrayWithHoles");
function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args), _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 4), arg_1 = _Array$prototype$slic2[0], arg_2 = _Array$prototype$slic2[1], arg_3 = _Array$prototype$slic2[2], arg_4 = _Array$prototype$slic2[3];
  var text;
  var options;
  var metadata2;
  if (typeof arg_1 === "string") {
    text = arg_1;
  } else throw new TypeError("A text for parsing must be a string.");
  if (!arg_2 || typeof arg_2 === "string") {
    if (arg_4) {
      options = arg_3;
      metadata2 = arg_4;
    } else {
      options = void 0;
      metadata2 = arg_3;
    }
    if (arg_2) {
      options = _objectSpread3({
        defaultCountry: arg_2
      }, options);
    }
  } else if (isObject(arg_2)) {
    if (arg_3) {
      options = arg_2;
      metadata2 = arg_3;
    } else {
      metadata2 = arg_2;
    }
  } else throw new Error("Invalid second argument: ".concat(arg_2));
  return {
    text,
    options,
    metadata: metadata2
  };
}
__name(normalizeArguments, "normalizeArguments");

// node_modules/libphonenumber-js/es6/parsePhoneNumberWithError.js
function parsePhoneNumberWithError2() {
  var _normalizeArguments = normalizeArguments(arguments), text = _normalizeArguments.text, options = _normalizeArguments.options, metadata2 = _normalizeArguments.metadata;
  return parsePhoneNumberWithError(text, options, metadata2);
}
__name(parsePhoneNumberWithError2, "parsePhoneNumberWithError");

// node_modules/libphonenumber-js/min/exports/parsePhoneNumberWithError.js
function parsePhoneNumberWithError3() {
  return withMetadataArgument(parsePhoneNumberWithError2, arguments);
}
__name(parsePhoneNumberWithError3, "parsePhoneNumberWithError");

// src/features/profile/utils.ts
init_esm();
function normalizeCareerStatus(input) {
  if (!input) return "OTHER";
  const trimmed = input.trim();
  if (!trimmed) return "OTHER";
  const cleaned = trimmed.toUpperCase().replace(/[\s-]+/g, "_");
  const validStatuses = [
    "STUDENT",
    "EMPLOYED",
    "SELF_EMPLOYED",
    "BUSINESS_OWNER",
    "FREELANCER",
    "JOB_SEEKER",
    "RECENT_GRADUATE",
    "OTHER"
  ];
  if (validStatuses.includes(cleaned)) {
    return cleaned;
  }
  const lower = trimmed.toLowerCase();
  if (/\b(student|studying|college|university|undergrad|postgrad|scholar|school|btech|phd|masters|bachelors)\b/i.test(lower)) {
    return "STUDENT";
  }
  if (/\b(freelance|freelancer|freelancing|contractor|gig|consultant)\b/i.test(lower)) {
    return "FREELANCER";
  }
  if (/\b(self[\s_-]?employed|independent|solopreneur|solo[\s_-]?founder)\b/i.test(lower)) {
    return "SELF_EMPLOYED";
  }
  if (/\b(business[\s_-]?owner|founder|co[\s_-]?founder|entrepreneur|ceo|owner|proprietor|agency[\s_-]?owner|startup[\s_-]?founder)\b/i.test(lower)) {
    return "BUSINESS_OWNER";
  }
  if (/\b(graduat\w*|recent[\s_-]?grad|fresh[\s_-]?grad|freshers?|new[\s_-]?grad|alumni|passed[\s_-]?out)\b/i.test(lower)) {
    return "RECENT_GRADUATE";
  }
  if (/\b(job[\s_-]?seeker|looking[\s_-]?for|seeking|unemployed|in[\s_-]?between|hunting|open[\s_-]?to[\s_-]?work)\b/i.test(lower)) {
    return "JOB_SEEKER";
  }
  if (/\b(employed|working|full[\s_-]?time|part[\s_-]?time|developer|engineer|manager|employee|corporate)\b/i.test(lower)) {
    return "EMPLOYED";
  }
  return "OTHER";
}
__name(normalizeCareerStatus, "normalizeCareerStatus");
function normalizeSkillName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}
__name(normalizeSkillName, "normalizeSkillName");
function deduplicateSkills(skills) {
  const seen = /* @__PURE__ */ new Set();
  const result2 = [];
  for (const skill of skills) {
    const trimmed = skill.name.trim();
    if (!trimmed) continue;
    const normalized = normalizeSkillName(trimmed);
    if (!seen.has(normalized)) {
      seen.add(normalized);
      result2.push({
        name: trimmed,
        proficiency: skill.proficiency,
        normalizedName: normalized
      });
    }
  }
  return result2;
}
__name(deduplicateSkills, "deduplicateSkills");
function deduplicateDesiredSkills(skills) {
  const seen = /* @__PURE__ */ new Set();
  const result2 = [];
  for (const skill of skills) {
    const trimmed = skill.trim();
    if (!trimmed) continue;
    const normalized = normalizeSkillName(trimmed);
    if (!seen.has(normalized)) {
      seen.add(normalized);
      result2.push({
        name: trimmed,
        normalizedName: normalized
      });
    }
  }
  return result2;
}
__name(deduplicateDesiredSkills, "deduplicateDesiredSkills");

// src/features/profile/schemas.ts
var skillProficiencySchema = external_exports.enum(["BEGINNER", "BASIC", "INTERMEDIATE", "ADVANCED", "EXPERT"]);
var careerStatusSchema = external_exports.enum(["STUDENT", "EMPLOYED", "SELF_EMPLOYED", "BUSINESS_OWNER", "FREELANCER", "JOB_SEEKER", "RECENT_GRADUATE", "OTHER"]);
var currentStatusSchema = careerStatusSchema;
var primaryGoalSchema = external_exports.enum(["LAND_A_JOB", "GET_AN_INTERNSHIP", "SWITCH_CAREER", "GET_PROMOTED", "LEARN_NEW_SKILLS", "PREPARE_FOR_INTERVIEW", "BUILD_RESUME", "IMPROVE_RESUME", "BECOME_JOB_READY", "EXPLORE_CAREERS", "OTHER"]);
var careerExperienceLevelSchema = external_exports.enum(["ENTRY", "JUNIOR", "MID", "SENIOR", "LEAD"]);
var targetCompanyTypeSchema = external_exports.enum(["STARTUP", "MID_SIZE", "ENTERPRISE", "FAANG", "GOVERNMENT", "NON_PROFIT", "NO_PREFERENCE"]);
var validatePhoneNumber = /* @__PURE__ */ __name((data, ctx) => {
  const hasCountryCode = !!data.phoneCountryCode;
  const hasNumber = !!data.phoneNumber;
  if (hasCountryCode && !hasNumber) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: "Phone number is required when country code is provided.",
      path: ["phoneNumber"]
    });
    return;
  }
  if (!hasCountryCode && hasNumber) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: "Country code is required when phone number is provided.",
      path: ["phoneCountryCode"]
    });
    return;
  }
  if (hasCountryCode && hasNumber) {
    try {
      const fullNumber = `${data.phoneCountryCode}${data.phoneNumber}`;
      const phone = parsePhoneNumberWithError3(fullNumber);
      if (!phone.isValid()) {
        ctx.addIssue({
          code: external_exports.ZodIssueCode.custom,
          message: "Enter a valid international phone number.",
          path: ["phoneNumber"]
        });
      }
    } catch (error) {
      ctx.addIssue({
        code: external_exports.ZodIssueCode.custom,
        message: "Enter a valid international phone number.",
        path: ["phoneNumber"]
      });
    }
  }
}, "validatePhoneNumber");
var profileSkillSchema = external_exports.object({
  name: external_exports.string().trim().min(1, "Skill name is required").max(PROFILE_VALIDATION.SKILL_NAME_MAX, `Maximum ${PROFILE_VALIDATION.SKILL_NAME_MAX} characters`),
  proficiency: skillProficiencySchema
});
var profileDesiredSkillSchema = external_exports.object({
  name: external_exports.string().trim().min(1, "Skill name is required").max(PROFILE_VALIDATION.DESIRED_SKILL_MAX, `Maximum ${PROFILE_VALIDATION.DESIRED_SKILL_MAX} characters`)
});
var profileEducationSchema = external_exports.object({
  highestQualification: external_exports.string().trim().min(1, "Highest qualification is required").max(PROFILE_VALIDATION.QUALIFICATION_MAX),
  fieldOfStudy: external_exports.string().trim().min(1, "Field of study is required").max(PROFILE_VALIDATION.FIELD_OF_STUDY_MAX)
});
var profileCareerGoalsSchema = external_exports.object({
  primaryGoal: primaryGoalSchema,
  targetRole: external_exports.string().trim().max(PROFILE_VALIDATION.TARGET_ROLE_MAX).optional().nullable().transform((val) => val && val.trim().length > 0 ? val.trim() : null)
});
var mandatoryProfileSchema = external_exports.object({
  name: external_exports.string().trim().min(PROFILE_VALIDATION.NAME_MIN, "Name is required").max(PROFILE_VALIDATION.NAME_MAX, `Maximum ${PROFILE_VALIDATION.NAME_MAX} characters`),
  age: external_exports.coerce.number({ invalid_type_error: "Age must be a number" }).int("Age must be an integer").min(PROFILE_VALIDATION.AGE_MIN, `Age must be at least ${PROFILE_VALIDATION.AGE_MIN}`).max(PROFILE_VALIDATION.AGE_MAX, `Age must be at most ${PROFILE_VALIDATION.AGE_MAX}`),
  country: external_exports.string().trim().min(1, "Country is required").refine((val) => isValidCountryCode(val), {
    message: "Please select a valid country"
  })
});
var optionalProfileSchema = external_exports.object({
  phoneCountryCode: external_exports.string().trim().transform((val) => val === "" ? null : val).nullable().optional(),
  phoneNumber: external_exports.string().trim().transform((val) => val === "" ? null : val).nullable().optional(),
  currentStatus: currentStatusSchema.nullable().optional(),
  currentRole: external_exports.string().trim().max(PROFILE_VALIDATION.ROLE_MAX).nullable().optional(),
  yearsOfExperience: external_exports.coerce.number({ invalid_type_error: "Years of experience must be a number" }).int("Years of experience must be an integer").min(0, "Years of experience cannot be negative").nullable().optional(),
  highestQualification: external_exports.string().trim().max(PROFILE_VALIDATION.QUALIFICATION_MAX).nullable().optional(),
  fieldOfStudy: external_exports.string().trim().max(PROFILE_VALIDATION.FIELD_OF_STUDY_MAX).nullable().optional(),
  primaryGoal: primaryGoalSchema.nullable().optional(),
  targetRole: external_exports.string().trim().max(PROFILE_VALIDATION.TARGET_ROLE_MAX).optional().nullable().transform((val) => val && val.trim().length > 0 ? val.trim() : null),
  targetCompanyType: targetCompanyTypeSchema.nullable().optional(),
  weeklyLearningHours: external_exports.coerce.number({ invalid_type_error: "Weekly learning hours must be a number" }).int("Weekly learning hours must be an integer").min(1, "Must be at least 1 hour").max(168, "Cannot exceed 168 hours").nullable().optional(),
  skills: external_exports.array(profileSkillSchema).max(PROFILE_VALIDATION.MAX_SKILLS, `Cannot exceed ${PROFILE_VALIDATION.MAX_SKILLS} skills`).default([]),
  desiredSkills: external_exports.array(
    external_exports.string().trim().min(1, "Desired skill cannot be empty").max(PROFILE_VALIDATION.DESIRED_SKILL_MAX)
  ).max(
    PROFILE_VALIDATION.MAX_DESIRED_SKILLS,
    `Cannot exceed ${PROFILE_VALIDATION.MAX_DESIRED_SKILLS} desired skills`
  ).default([])
});
var transformProfile = /* @__PURE__ */ __name((data) => {
  const result2 = { ...data };
  if (result2.phoneCountryCode && result2.phoneNumber) {
    try {
      const fullNumber = `${result2.phoneCountryCode}${result2.phoneNumber}`;
      const phone = parsePhoneNumberWithError3(fullNumber);
      const callingCode = phone.countryCallingCode;
      result2.phoneCountryCode = `+${callingCode}`;
      result2.phoneNumber = phone.nationalNumber;
    } catch (e) {
    }
  }
  if (result2.currentStatus) {
    result2.currentStatus = normalizeCareerStatus(result2.currentStatus);
  }
  return result2;
}, "transformProfile");
var profileCreateSchema = mandatoryProfileSchema.merge(optionalProfileSchema.partial()).superRefine(validatePhoneNumber).transform(transformProfile);
var profileUpdateSchema = mandatoryProfileSchema.partial().merge(optionalProfileSchema.partial()).superRefine(validatePhoneNumber).transform(transformProfile);
var profileUpsertSchema = mandatoryProfileSchema.partial().merge(optionalProfileSchema.partial()).superRefine(validatePhoneNumber).transform(transformProfile);

// src/features/profile/services/profile.service.ts
var ProfileConflictError = class extends Error {
  static {
    __name(this, "ProfileConflictError");
  }
  constructor(message = "A profile already exists for this user") {
    super(message);
    this.name = "ProfileConflictError";
  }
};
var ProfileNotFoundError = class extends Error {
  static {
    __name(this, "ProfileNotFoundError");
  }
  constructor(message = "Profile not found") {
    super(message);
    this.name = "ProfileNotFoundError";
  }
};
var ProfileService = class _ProfileService {
  static {
    __name(this, "ProfileService");
  }
  static {
    /**
     * Retrieves a Profile by internal DB userId.
     * Cached in React cache() per request and in Redis for 30 minutes with write-through invalidation on mutations.
     */
    this.getProfile = (0, import_react.cache)(async (userId) => {
      const profile = await CacheService.getOrSet(
        CacheKeys.userProfile(userId),
        async () => {
          const found = await prisma.profile.findUnique({
            where: { userId },
            include: {
              skills: {
                orderBy: { name: "asc" }
              },
              desiredSkills: {
                orderBy: { name: "asc" }
              }
            }
          });
          if (!found) return null;
          return _ProfileService.mapToProfileData(found);
        },
        CacheTTL.USER_PROFILE
      );
      if (profile) {
        if (typeof profile.createdAt === "string") profile.createdAt = new Date(profile.createdAt);
        if (typeof profile.updatedAt === "string") profile.updatedAt = new Date(profile.updatedAt);
      }
      return profile;
    });
  }
  /**
   * Creates a new Profile for the user.
   * Fails with ProfileConflictError if a Profile already exists.
   */
  static async createProfile(userId, input) {
    const validated = profileCreateSchema.parse(input);
    const existing = await prisma.profile.findUnique({
      where: { userId },
      select: { id: true }
    });
    if (existing) {
      throw new ProfileConflictError();
    }
    const cleanSkills = deduplicateSkills(validated.skills ?? []);
    const cleanDesiredSkills = deduplicateDesiredSkills(validated.desiredSkills ?? []);
    const isMandatory = Boolean(validated.name?.trim()) && typeof validated.age === "number" && validated.age > 0 && Boolean(validated.country?.trim()) && Boolean(validated.phoneNumber?.trim());
    const createDataObj = {
      userId,
      name: validated.name,
      age: validated.age,
      country: validated.country,
      phoneCountryCode: validated.phoneCountryCode ?? null,
      phoneNumber: validated.phoneNumber ?? null,
      currentStatus: validated.currentStatus ?? null,
      currentRole: validated.currentRole ?? null,
      yearsOfExperience: validated.yearsOfExperience ?? null,
      highestQualification: validated.highestQualification ?? null,
      fieldOfStudy: validated.fieldOfStudy ?? null,
      primaryGoal: validated.primaryGoal ?? null,
      targetRole: validated.targetRole ?? null,
      targetCompanyType: validated.targetCompanyType ?? null,
      weeklyLearningHours: validated.weeklyLearningHours ?? null,
      isMandatoryCompleted: isMandatory
    };
    const isCompleted = _ProfileService.checkIsCompleted(createDataObj, cleanSkills, cleanDesiredSkills);
    const created = await prisma.profile.create({
      data: {
        ...createDataObj,
        isCompleted,
        skills: {
          create: cleanSkills.map((s2) => ({
            name: s2.name,
            normalizedName: s2.normalizedName,
            proficiency: s2.proficiency
          }))
        },
        desiredSkills: {
          create: cleanDesiredSkills.map((s2) => ({
            name: s2.name,
            normalizedName: s2.normalizedName
          }))
        }
      },
      include: {
        skills: {
          orderBy: { name: "asc" }
        },
        desiredSkills: {
          orderBy: { name: "asc" }
        }
      }
    });
    const mapped = this.mapToProfileData(created);
    await CacheService.del(CacheKeys.userProfile(userId)).catch(() => {
    });
    return mapped;
  }
  static checkIsCompleted(data, skills, desiredSkills) {
    const isEducationComplete = Boolean(
      typeof data.highestQualification === "string" && data.highestQualification.trim() && typeof data.fieldOfStudy === "string" && data.fieldOfStudy.trim()
    );
    const hasValidYearsOfExp = typeof data.yearsOfExperience === "number" && data.yearsOfExperience >= 0;
    const hasValidTargetRole = typeof data.targetRole === "string" && data.targetRole.trim().length > 0;
    const hasValidCurrentRole = typeof data.currentRole === "string" && data.currentRole.trim().length > 0;
    return Boolean(
      data.isMandatoryCompleted && Boolean(data.currentStatus) && hasValidCurrentRole && hasValidYearsOfExp && isEducationComplete && Boolean(data.primaryGoal) && hasValidTargetRole && Boolean(data.targetCompanyType) && typeof data.weeklyLearningHours === "number" && data.weeklyLearningHours > 0 && skills.length > 0 && skills.every((s2) => typeof s2.name === "string" && s2.name.trim() && Boolean(s2.proficiency)) && desiredSkills.length > 0 && desiredSkills.every((s2) => typeof s2.name === "string" && s2.name.trim())
    );
  }
  /**
   * Updates an existing Profile atomically.
   */
  static async updateProfile(userId, input) {
    const validated = profileUpdateSchema.parse(input);
    const existing = await prisma.profile.findUnique({
      where: { userId },
      include: {
        skills: true,
        desiredSkills: true
      }
    });
    if (!existing) {
      throw new ProfileNotFoundError();
    }
    const result2 = await prisma.$transaction(async (tx) => {
      let currentSkills = existing.skills;
      if (validated.skills !== void 0) {
        await tx.profileSkill.deleteMany({
          where: { profileId: existing.id }
        });
        const cleanSkills = deduplicateSkills(validated.skills);
        if (cleanSkills.length > 0) {
          await tx.profileSkill.createMany({
            data: cleanSkills.map((s2) => ({
              profileId: existing.id,
              name: s2.name,
              normalizedName: s2.normalizedName,
              proficiency: s2.proficiency
            }))
          });
        }
        currentSkills = cleanSkills;
      }
      let currentDesiredSkills = existing.desiredSkills;
      if (validated.desiredSkills !== void 0) {
        await tx.profileDesiredSkill.deleteMany({
          where: { profileId: existing.id }
        });
        const cleanDesiredSkills = deduplicateDesiredSkills(validated.desiredSkills);
        if (cleanDesiredSkills.length > 0) {
          await tx.profileDesiredSkill.createMany({
            data: cleanDesiredSkills.map((s2) => ({
              profileId: existing.id,
              name: s2.name,
              normalizedName: s2.normalizedName
            }))
          });
        }
        currentDesiredSkills = cleanDesiredSkills;
      }
      const updateData = {};
      if (validated.name !== void 0) updateData.name = validated.name;
      if (validated.age !== void 0) updateData.age = validated.age;
      if (validated.country !== void 0) updateData.country = validated.country;
      if (validated.phoneCountryCode !== void 0) updateData.phoneCountryCode = validated.phoneCountryCode;
      if (validated.phoneNumber !== void 0) updateData.phoneNumber = validated.phoneNumber;
      if (validated.currentStatus !== void 0) updateData.currentStatus = validated.currentStatus;
      if (validated.currentRole !== void 0) updateData.currentRole = validated.currentRole;
      if (validated.yearsOfExperience !== void 0)
        updateData.yearsOfExperience = validated.yearsOfExperience;
      if (validated.highestQualification !== void 0)
        updateData.highestQualification = validated.highestQualification;
      if (validated.fieldOfStudy !== void 0)
        updateData.fieldOfStudy = validated.fieldOfStudy;
      if (validated.primaryGoal !== void 0) updateData.primaryGoal = validated.primaryGoal;
      if (validated.targetRole !== void 0)
        updateData.targetRole = validated.targetRole ?? null;
      if (validated.targetCompanyType !== void 0)
        updateData.targetCompanyType = validated.targetCompanyType;
      if (validated.weeklyLearningHours !== void 0)
        updateData.weeklyLearningHours = validated.weeklyLearningHours;
      const effectiveName = validated.name !== void 0 ? validated.name : existing.name;
      const effectiveAge = validated.age !== void 0 ? validated.age : existing.age;
      const effectiveCountry = validated.country !== void 0 ? validated.country : existing.country;
      const effectivePhone = validated.phoneNumber !== void 0 ? validated.phoneNumber : existing.phoneNumber;
      const isMandatory = Boolean(effectiveName?.trim()) && typeof effectiveAge === "number" && effectiveAge > 0 && Boolean(effectiveCountry?.trim()) && Boolean(effectivePhone?.trim());
      updateData.isMandatoryCompleted = isMandatory;
      const combinedData = { ...existing, ...updateData, isMandatoryCompleted: isMandatory };
      updateData.isCompleted = _ProfileService.checkIsCompleted(combinedData, currentSkills, currentDesiredSkills);
      const updated = await tx.profile.update({
        where: { id: existing.id },
        data: updateData,
        include: {
          skills: {
            orderBy: { name: "asc" }
          },
          desiredSkills: {
            orderBy: { name: "asc" }
          }
        }
      });
      return updated;
    });
    const mapped = this.mapToProfileData(result2);
    await CacheService.del(CacheKeys.userProfile(userId)).catch(() => {
    });
    return mapped;
  }
  /**
   * Upserts a Profile (Create if missing, update if exists).
   * Supports partial updates on existing, but enforces required fields on create.
   */
  static async upsertProfile(userId, input) {
    const existing = await prisma.profile.findUnique({
      where: { userId },
      select: { id: true }
    });
    if (existing) {
      return this.updateProfile(userId, input);
    }
    const createData = input;
    return this.createProfile(userId, createData);
  }
  /**
   * Checks whether any career context data has meaningfully changed.
   */
  static checkCareerContextChanged(existing, input) {
    if (input.currentStatus !== void 0 && input.currentStatus !== existing.currentStatus)
      return true;
    if (input.currentRole !== void 0 && input.currentRole !== existing.currentRole)
      return true;
    if (input.yearsOfExperience !== void 0 && input.yearsOfExperience !== existing.yearsOfExperience)
      return true;
    if (input.highestQualification !== void 0 && input.highestQualification !== existing.highestQualification)
      return true;
    if (input.fieldOfStudy !== void 0 && input.fieldOfStudy !== existing.fieldOfStudy)
      return true;
    if (input.primaryGoal !== void 0 && input.primaryGoal !== existing.primaryGoal)
      return true;
    if (input.targetRole !== void 0 && (input.targetRole ?? null) !== existing.targetRole)
      return true;
    if (input.targetCompanyType !== void 0 && input.targetCompanyType !== existing.targetCompanyType)
      return true;
    if (input.weeklyLearningHours !== void 0 && input.weeklyLearningHours !== existing.weeklyLearningHours)
      return true;
    if (input.skills !== void 0) {
      const cleanSkills = deduplicateSkills(input.skills);
      if (cleanSkills.length !== existing.skills.length) return true;
      const existingSkillMap = new Map(
        existing.skills.map((s2) => [s2.normalizedName, s2.proficiency])
      );
      for (const s2 of cleanSkills) {
        const existingProficiency = existingSkillMap.get(s2.normalizedName);
        if (existingProficiency !== s2.proficiency) return true;
      }
    }
    if (input.desiredSkills !== void 0) {
      const cleanDesired = deduplicateDesiredSkills(input.desiredSkills);
      if (cleanDesired.length !== existing.desiredSkills.length) return true;
      const existingSet = new Set(existing.desiredSkills.map((s2) => s2.normalizedName));
      for (const s2 of cleanDesired) {
        if (!existingSet.has(s2.normalizedName)) return true;
      }
    }
    return false;
  }
  /**
   * Maps internal Prisma model with relations to the canonical ProfileData DTO.
   */
  static mapToProfileData(profile) {
    return {
      id: profile.id,
      userId: profile.userId,
      name: profile.name || "",
      age: profile.age || 0,
      country: profile.country || "",
      phoneCountryCode: profile.phoneCountryCode || null,
      phoneNumber: profile.phoneNumber || null,
      currentStatus: profile.currentStatus,
      currentRole: profile.currentRole,
      yearsOfExperience: profile.yearsOfExperience,
      education: profile.highestQualification || profile.fieldOfStudy ? {
        highestQualification: profile.highestQualification || "",
        fieldOfStudy: profile.fieldOfStudy || ""
      } : null,
      careerGoals: profile.primaryGoal ? {
        primaryGoal: profile.primaryGoal,
        targetRole: profile.targetRole
      } : null,
      skills: profile.skills.map((s2) => ({
        id: s2.id,
        name: s2.name,
        proficiency: s2.proficiency
      })),
      desiredSkills: profile.desiredSkills.map((s2) => s2.name),
      targetCompanyType: profile.targetCompanyType || null,
      weeklyLearningHours: profile.weeklyLearningHours,
      isMandatoryCompleted: profile.isMandatoryCompleted,
      isCompleted: profile.isCompleted,
      profileVersion: 1,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt
    };
  }
};

// src/features/profile/services/actions.ts
init_esm();

// src/lib/auth.ts
init_esm();
var import_react2 = __toESM(require_react());

// node_modules/@clerk/nextjs/dist/esm/server/index.js
init_esm();

// node_modules/@clerk/shared/dist/runtime/pathToRegexp-Bu45OrlU.mjs
init_esm();
function _(r) {
  for (var n = [], e = 0; e < r.length; ) {
    var a = r[e];
    if (a === "*" || a === "+" || a === "?") {
      n.push({
        type: "MODIFIER",
        index: e,
        value: r[e++]
      });
      continue;
    }
    if (a === "\\") {
      n.push({
        type: "ESCAPED_CHAR",
        index: e++,
        value: r[e++]
      });
      continue;
    }
    if (a === "{") {
      n.push({
        type: "OPEN",
        index: e,
        value: r[e++]
      });
      continue;
    }
    if (a === "}") {
      n.push({
        type: "CLOSE",
        index: e,
        value: r[e++]
      });
      continue;
    }
    if (a === ":") {
      for (var u2 = "", t = e + 1; t < r.length; ) {
        var c = r.charCodeAt(t);
        if (c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || c === 95) {
          u2 += r[t++];
          continue;
        }
        break;
      }
      if (!u2) throw new TypeError("Missing parameter name at ".concat(e));
      n.push({
        type: "NAME",
        index: e,
        value: u2
      }), e = t;
      continue;
    }
    if (a === "(") {
      var o = 1, m2 = "", t = e + 1;
      if (r[t] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(t));
      for (; t < r.length; ) {
        if (r[t] === "\\") {
          m2 += r[t++] + r[t++];
          continue;
        }
        if (r[t] === ")") {
          if (o--, o === 0) {
            t++;
            break;
          }
        } else if (r[t] === "(" && (o++, r[t + 1] !== "?")) throw new TypeError("Capturing groups are not allowed at ".concat(t));
        m2 += r[t++];
      }
      if (o) throw new TypeError("Unbalanced pattern at ".concat(e));
      if (!m2) throw new TypeError("Missing pattern at ".concat(e));
      n.push({
        type: "PATTERN",
        index: e,
        value: m2
      }), e = t;
      continue;
    }
    n.push({
      type: "CHAR",
      index: e,
      value: r[e++]
    });
  }
  return n.push({
    type: "END",
    index: e,
    value: ""
  }), n;
}
__name(_, "_");
function F(r, n) {
  n === void 0 && (n = {});
  for (var e = _(r), a = n.prefixes, u2 = a === void 0 ? "./" : a, t = n.delimiter, c = t === void 0 ? "/#?" : t, o = [], m2 = 0, h = 0, p = "", f = function(l) {
    if (h < e.length && e[h].type === l) return e[h++].value;
  }, w2 = function(l) {
    var v = f(l);
    if (v !== void 0) return v;
    var E2 = e[h], N2 = E2.type, S = E2.index;
    throw new TypeError("Unexpected ".concat(N2, " at ").concat(S, ", expected ").concat(l));
  }, d2 = function() {
    for (var l = "", v; v = f("CHAR") || f("ESCAPED_CHAR"); ) l += v;
    return l;
  }, M = function(l) {
    for (var v = 0, E2 = c; v < E2.length; v++) {
      var N2 = E2[v];
      if (l.indexOf(N2) > -1) return true;
    }
    return false;
  }, A2 = function(l) {
    var v = o[o.length - 1], E2 = l || (v && typeof v == "string" ? v : "");
    if (v && !E2) throw new TypeError('Must have text between two parameters, missing text after "'.concat(v.name, '"'));
    return !E2 || M(E2) ? "[^".concat(s(c), "]+?") : "(?:(?!".concat(s(E2), ")[^").concat(s(c), "])+?");
  }; h < e.length; ) {
    var T2 = f("CHAR"), x = f("NAME"), C2 = f("PATTERN");
    if (x || C2) {
      var g = T2 || "";
      u2.indexOf(g) === -1 && (p += g, g = ""), p && (o.push(p), p = ""), o.push({
        name: x || m2++,
        prefix: g,
        suffix: "",
        pattern: C2 || A2(g),
        modifier: f("MODIFIER") || ""
      });
      continue;
    }
    var i = T2 || f("ESCAPED_CHAR");
    if (i) {
      p += i;
      continue;
    }
    p && (o.push(p), p = "");
    if (f("OPEN")) {
      var g = d2(), y = f("NAME") || "", O = f("PATTERN") || "", b2 = d2();
      w2("CLOSE"), o.push({
        name: y || (O ? m2++ : ""),
        pattern: y && !O ? A2(g) : O,
        prefix: g,
        suffix: b2,
        modifier: f("MODIFIER") || ""
      });
      continue;
    }
    w2("END");
  }
  return o;
}
__name(F, "F");
function H(r, n) {
  var e = [];
  return I(P(r, e, n), e, n);
}
__name(H, "H");
function I(r, n, e) {
  e === void 0 && (e = {});
  var a = e.decode, u2 = a === void 0 ? function(t) {
    return t;
  } : a;
  return function(t) {
    var c = r.exec(t);
    if (!c) return false;
    for (var o = c[0], m2 = c.index, h = /* @__PURE__ */ Object.create(null), p = function(w2) {
      if (c[w2] === void 0) return "continue";
      var d2 = n[w2 - 1];
      d2.modifier === "*" || d2.modifier === "+" ? h[d2.name] = c[w2].split(d2.prefix + d2.suffix).map(function(M) {
        return u2(M, d2);
      }) : h[d2.name] = u2(c[w2], d2);
    }, f = 1; f < c.length; f++) p(f);
    return {
      path: o,
      index: m2,
      params: h
    };
  };
}
__name(I, "I");
function s(r) {
  return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(s, "s");
function D(r) {
  return r && r.sensitive ? "" : "i";
}
__name(D, "D");
function $(r, n) {
  if (!n) return r;
  for (var e = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, u2 = e.exec(r.source); u2; ) n.push({
    name: u2[1] || a++,
    prefix: "",
    suffix: "",
    modifier: "",
    pattern: ""
  }), u2 = e.exec(r.source);
  return r;
}
__name($, "$");
function W(r, n, e) {
  var a = r.map(function(u2) {
    return P(u2, n, e).source;
  });
  return new RegExp("(?:".concat(a.join("|"), ")"), D(e));
}
__name(W, "W");
function L(r, n, e) {
  return U(F(r, e), n, e);
}
__name(L, "L");
function U(r, n, e) {
  e === void 0 && (e = {});
  for (var a = e.strict, u2 = a === void 0 ? false : a, t = e.start, c = t === void 0 ? true : t, o = e.end, m2 = o === void 0 ? true : o, h = e.encode, p = h === void 0 ? function(v) {
    return v;
  } : h, f = e.delimiter, w2 = f === void 0 ? "/#?" : f, d2 = e.endsWith, M = d2 === void 0 ? "" : d2, A2 = "[".concat(s(M), "]|$"), T2 = "[".concat(s(w2), "]"), x = c ? "^" : "", C2 = 0, g = r; C2 < g.length; C2++) {
    var i = g[C2];
    if (typeof i == "string") x += s(p(i));
    else {
      var R2 = s(p(i.prefix)), y = s(p(i.suffix));
      if (i.pattern) if (n && n.push(i), R2 || y) if (i.modifier === "+" || i.modifier === "*") {
        var O = i.modifier === "*" ? "?" : "";
        x += "(?:".concat(R2, "((?:").concat(i.pattern, ")(?:").concat(y).concat(R2, "(?:").concat(i.pattern, "))*)").concat(y, ")").concat(O);
      } else x += "(?:".concat(R2, "(").concat(i.pattern, ")").concat(y, ")").concat(i.modifier);
      else {
        if (i.modifier === "+" || i.modifier === "*") throw new TypeError('Can not repeat "'.concat(i.name, '" without a prefix and suffix'));
        x += "(".concat(i.pattern, ")").concat(i.modifier);
      }
      else x += "(?:".concat(R2).concat(y, ")").concat(i.modifier);
    }
  }
  if (m2) u2 || (x += "".concat(T2, "?")), x += e.endsWith ? "(?=".concat(A2, ")") : "$";
  else {
    var b2 = r[r.length - 1], l = typeof b2 == "string" ? T2.indexOf(b2[b2.length - 1]) > -1 : b2 === void 0;
    u2 || (x += "(?:".concat(T2, "(?=").concat(A2, "))?")), l || (x += "(?=".concat(T2, "|").concat(A2, ")"));
  }
  return new RegExp(x, D(e));
}
__name(U, "U");
function P(r, n, e) {
  return r instanceof RegExp ? $(r, n) : Array.isArray(r) ? W(r, n, e) : L(r, n, e);
}
__name(P, "P");
function match(str, options) {
  try {
    return H(str, options);
  } catch (e) {
    throw new Error(`Invalid path and options: Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp/tree/6.x
${e.message}`);
  }
}
__name(match, "match");

// node_modules/@clerk/backend/dist/index.mjs
init_esm();

// node_modules/@clerk/backend/dist/chunk-QQ3KHOKZ.mjs
init_esm();

// node_modules/@clerk/backend/dist/chunk-YBVFDYDR.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/deprecated.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/runtimeEnvironment-BB2sO-19.mjs
init_esm();
var isDevelopmentEnvironment = /* @__PURE__ */ __name(() => {
  try {
    return process.env.NODE_ENV === "development";
  } catch {
  }
  return false;
}, "isDevelopmentEnvironment");
var isTestEnvironment = /* @__PURE__ */ __name(() => {
  try {
    return process.env.NODE_ENV === "test";
  } catch {
  }
  return false;
}, "isTestEnvironment");
var isProductionEnvironment = /* @__PURE__ */ __name(() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
  }
  return false;
}, "isProductionEnvironment");

// node_modules/@clerk/shared/dist/runtime/deprecated-BqlFbLHj.mjs
init_esm();
var displayedWarnings = /* @__PURE__ */ new Set();
var deprecated = /* @__PURE__ */ __name((fnName, warning, key) => {
  const hideWarning = isTestEnvironment() || isProductionEnvironment();
  const messageId = key ?? fnName;
  if (displayedWarnings.has(messageId) || hideWarning) return;
  displayedWarnings.add(messageId);
  console.warn(`Clerk - DEPRECATION WARNING: "${fnName}" is deprecated and will be removed in the next major release.
${warning}`);
}, "deprecated");

// node_modules/@clerk/shared/dist/runtime/keys.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/constants-ByUssRbE.mjs
init_esm();
var LEGACY_DEV_INSTANCE_SUFFIXES = [
  ".lcl.dev",
  ".lclstage.dev",
  ".lclclerk.com"
];
var CURRENT_DEV_INSTANCE_SUFFIXES = [
  ".accounts.dev",
  ".accountsstage.dev",
  ".accounts.lclclerk.com"
];
var DEV_OR_STAGING_SUFFIXES = [
  ".lcl.dev",
  ".stg.dev",
  ".lclstage.dev",
  ".stgstage.dev",
  ".dev.lclclerk.com",
  ".stg.lclclerk.com",
  ".accounts.lclclerk.com",
  "accountsstage.dev",
  "accounts.dev"
];
var LOCAL_ENV_SUFFIXES = [
  ".lcl.dev",
  "lclstage.dev",
  ".lclclerk.com",
  ".accounts.lclclerk.com"
];
var STAGING_ENV_SUFFIXES = [".accountsstage.dev"];
var LOCAL_API_URL = "https://api.lclclerk.com";
var STAGING_API_URL = "https://api.clerkstage.dev";
var PROD_API_URL = "https://api.clerk.com";

// node_modules/@clerk/shared/dist/runtime/isomorphicAtob-DybBXGFR.mjs
init_esm();
var isomorphicAtob = /* @__PURE__ */ __name((data) => {
  if (typeof atob !== "undefined" && typeof atob === "function") return atob(data);
  else if (typeof global !== "undefined" && global.Buffer) return new global.Buffer(data, "base64").toString();
  return data;
}, "isomorphicAtob");

// node_modules/@clerk/shared/dist/runtime/isomorphicBtoa-Dr7WubZv.mjs
init_esm();
var isomorphicBtoa = /* @__PURE__ */ __name((data) => {
  if (typeof btoa !== "undefined" && typeof btoa === "function") return btoa(data);
  else if (typeof global !== "undefined" && global.Buffer) return new global.Buffer(data).toString("base64");
  return data;
}, "isomorphicBtoa");

// node_modules/@clerk/shared/dist/runtime/keys-YNv6yjKk.mjs
init_esm();
var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
function isValidDecodedPublishableKey(decoded) {
  if (!decoded.endsWith("$")) return false;
  const withoutTrailing = decoded.slice(0, -1);
  if (withoutTrailing.includes("$")) return false;
  return withoutTrailing.includes(".");
}
__name(isValidDecodedPublishableKey, "isValidDecodedPublishableKey");
function parsePublishableKey(key, options = {}) {
  key = key || "";
  if (!key || !isPublishableKey(key)) {
    if (options.fatal && !key) throw new Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");
    if (options.fatal && !isPublishableKey(key)) throw new Error("Publishable key not valid.");
    return null;
  }
  const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
  let decodedFrontendApi;
  try {
    decodedFrontendApi = isomorphicAtob(key.split("_")[2]);
  } catch {
    if (options.fatal) throw new Error("Publishable key not valid: Failed to decode key.");
    return null;
  }
  if (!isValidDecodedPublishableKey(decodedFrontendApi)) {
    if (options.fatal) throw new Error("Publishable key not valid: Decoded key has invalid format.");
    return null;
  }
  let frontendApi = decodedFrontendApi.slice(0, -1);
  if (options.proxyUrl) frontendApi = options.proxyUrl;
  else if (instanceType !== "development" && options.domain && options.isSatellite) frontendApi = `clerk.${options.domain}`;
  return {
    instanceType,
    frontendApi
  };
}
__name(parsePublishableKey, "parsePublishableKey");
function isPublishableKey(key = "") {
  try {
    if (!(key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX))) return false;
    const parts = key.split("_");
    if (parts.length !== 3) return false;
    const encodedPart = parts[2];
    if (!encodedPart) return false;
    return isValidDecodedPublishableKey(isomorphicAtob(encodedPart));
  } catch {
    return false;
  }
}
__name(isPublishableKey, "isPublishableKey");
function createDevOrStagingUrlCache() {
  const devOrStagingUrlCache = /* @__PURE__ */ new Map();
  return { isDevOrStagingUrl: /* @__PURE__ */ __name((url) => {
    if (!url) return false;
    const hostname = typeof url === "string" ? url : url.hostname;
    let res = devOrStagingUrlCache.get(hostname);
    if (res === void 0) {
      res = DEV_OR_STAGING_SUFFIXES.some((s2) => hostname.endsWith(s2));
      devOrStagingUrlCache.set(hostname, res);
    }
    return res;
  }, "isDevOrStagingUrl") };
}
__name(createDevOrStagingUrlCache, "createDevOrStagingUrlCache");
function isDevelopmentFromSecretKey(apiKey) {
  return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
}
__name(isDevelopmentFromSecretKey, "isDevelopmentFromSecretKey");
async function getCookieSuffix(publishableKey, subtle = globalThis.crypto.subtle) {
  const data = new TextEncoder().encode(publishableKey);
  const digest = await subtle.digest("sha-1", data);
  return isomorphicBtoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8);
}
__name(getCookieSuffix, "getCookieSuffix");
var getSuffixedCookieName = /* @__PURE__ */ __name((cookieName, cookieSuffix) => {
  return `${cookieName}_${cookieSuffix}`;
}, "getSuffixedCookieName");

// node_modules/@clerk/shared/dist/runtime/retry.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/retry-DAlTROH9.mjs
init_esm();
var defaultOptions = {
  initialDelay: 125,
  maxDelayBetweenRetries: 0,
  factor: 2,
  shouldRetry: /* @__PURE__ */ __name((_2, iteration) => iteration < 5, "shouldRetry"),
  retryImmediately: false,
  jitter: true
};
var RETRY_IMMEDIATELY_DELAY = 100;
var sleep = /* @__PURE__ */ __name(async (ms) => new Promise((s2) => setTimeout(s2, ms)), "sleep");
var applyJitter = /* @__PURE__ */ __name((delay, jitter) => {
  return jitter ? delay * (1 + Math.random()) : delay;
}, "applyJitter");
var createExponentialDelayAsyncFn = /* @__PURE__ */ __name((opts) => {
  let timesCalled = 0;
  const calculateDelayInMs = /* @__PURE__ */ __name(() => {
    const constant = opts.initialDelay;
    const base = opts.factor;
    let delay = constant * Math.pow(base, timesCalled);
    delay = applyJitter(delay, opts.jitter);
    return Math.min(opts.maxDelayBetweenRetries || delay, delay);
  }, "calculateDelayInMs");
  return async () => {
    await sleep(calculateDelayInMs());
    timesCalled++;
  };
}, "createExponentialDelayAsyncFn");
var retry = /* @__PURE__ */ __name(async (callback, options = {}) => {
  let iterations = 0;
  const { shouldRetry, initialDelay, maxDelayBetweenRetries, factor, retryImmediately, jitter, onBeforeRetry } = {
    ...defaultOptions,
    ...options
  };
  const delay = createExponentialDelayAsyncFn({
    initialDelay,
    maxDelayBetweenRetries,
    factor,
    jitter
  });
  while (true) try {
    return await callback();
  } catch (e) {
    iterations++;
    if (!shouldRetry(e, iterations)) throw e;
    if (onBeforeRetry) await onBeforeRetry(iterations);
    if (retryImmediately && iterations === 1) await sleep(applyJitter(RETRY_IMMEDIATELY_DELAY, jitter));
    else await delay();
  }
}, "retry");

// node_modules/@clerk/shared/dist/runtime/url.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/instance-Cze6Nv61.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/url-Cdy8w8vK.mjs
init_esm();
function isLegacyDevAccountPortalOrigin(host) {
  return LEGACY_DEV_INSTANCE_SUFFIXES.some((legacyDevSuffix) => {
    return host.startsWith("accounts.") && host.endsWith(legacyDevSuffix);
  });
}
__name(isLegacyDevAccountPortalOrigin, "isLegacyDevAccountPortalOrigin");
function isCurrentDevAccountPortalOrigin(host) {
  return CURRENT_DEV_INSTANCE_SUFFIXES.some((currentDevSuffix) => {
    return host.endsWith(currentDevSuffix) && !host.endsWith(".clerk" + currentDevSuffix);
  });
}
__name(isCurrentDevAccountPortalOrigin, "isCurrentDevAccountPortalOrigin");

// node_modules/@clerk/shared/dist/runtime/error.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/error-Dl9xmUf3.mjs
init_esm();
function createErrorTypeGuard(ErrorClass) {
  function typeGuard(error) {
    const target = error ?? this;
    if (!target) throw new TypeError(`${ErrorClass.kind || ErrorClass.name} type guard requires an error object`);
    if (ErrorClass.kind && typeof target === "object" && target !== null && "constructor" in target) {
      if (target.constructor?.kind === ErrorClass.kind) return true;
    }
    return target instanceof ErrorClass;
  }
  __name(typeGuard, "typeGuard");
  return typeGuard;
}
__name(createErrorTypeGuard, "createErrorTypeGuard");
var ClerkAPIError = class {
  static {
    __name(this, "ClerkAPIError");
  }
  static kind = "ClerkApiError";
  code;
  message;
  longMessage;
  meta;
  constructor(json) {
    const parsedError = {
      code: json.code,
      message: json.message,
      longMessage: json.long_message,
      meta: {
        paramName: json.meta?.param_name,
        sessionId: json.meta?.session_id,
        emailAddresses: json.meta?.email_addresses,
        identifiers: json.meta?.identifiers,
        zxcvbn: json.meta?.zxcvbn,
        plan: json.meta?.plan,
        isPlanUpgradePossible: json.meta?.is_plan_upgrade_possible
      }
    };
    this.code = parsedError.code;
    this.message = parsedError.message;
    this.longMessage = parsedError.longMessage;
    this.meta = parsedError.meta;
  }
};
var isClerkAPIError = createErrorTypeGuard(ClerkAPIError);
function parseError(error) {
  return new ClerkAPIError(error);
}
__name(parseError, "parseError");
var ClerkError = class ClerkError2 extends Error {
  static {
    __name(this, "ClerkError");
  }
  static kind = "ClerkError";
  clerkError = true;
  code;
  longMessage;
  docsUrl;
  cause;
  get name() {
    return this.constructor.name;
  }
  constructor(opts) {
    super(new.target.formatMessage(new.target.kind, opts.message, opts.code, opts.docsUrl), { cause: opts.cause });
    Object.setPrototypeOf(this, ClerkError2.prototype);
    this.code = opts.code;
    this.docsUrl = opts.docsUrl;
    this.longMessage = opts.longMessage;
    this.cause = opts.cause;
  }
  toString() {
    return `[${this.name}]
Message:${this.message}`;
  }
  static formatMessage(name, msg, code, docsUrl) {
    const prefix = "Clerk:";
    const regex = new RegExp(prefix.replace(" ", "\\s*"), "i");
    msg = msg.replace(regex, "");
    msg = `${prefix} ${msg.trim()}

(code="${code}")

`;
    if (docsUrl) msg += `

Docs: ${docsUrl}`;
    return msg;
  }
};
var ClerkAPIResponseError = class ClerkAPIResponseError2 extends ClerkError {
  static {
    __name(this, "ClerkAPIResponseError");
  }
  static kind = "ClerkAPIResponseError";
  status;
  clerkTraceId;
  retryAfter;
  errors;
  constructor(message, options) {
    const { data: errorsJson, status, clerkTraceId, retryAfter } = options;
    super({
      ...options,
      message,
      code: "api_response_error"
    });
    Object.setPrototypeOf(this, ClerkAPIResponseError2.prototype);
    this.status = status;
    this.clerkTraceId = clerkTraceId;
    this.retryAfter = retryAfter;
    this.errors = (errorsJson || []).map((e) => new ClerkAPIError(e));
  }
  toString() {
    let message = `[${this.name}]
Message:${this.message}
Status:${this.status}
Serialized errors: ${this.errors.map((e) => JSON.stringify(e))}`;
    if (this.clerkTraceId) message += `
Clerk Trace ID: ${this.clerkTraceId}`;
    return message;
  }
  static formatMessage(name, msg, _2, __) {
    return msg;
  }
};
var isClerkAPIResponseError = createErrorTypeGuard(ClerkAPIResponseError);
var DefaultMessages = Object.freeze({
  InvalidProxyUrlErrorMessage: `The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})`,
  InvalidPublishableKeyErrorMessage: `The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
  MissingPublishableKeyErrorMessage: `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
  MissingSecretKeyErrorMessage: `Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
  MissingClerkProvider: `{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`
});
function buildErrorThrower({ packageName, customMessages }) {
  let pkg = packageName;
  function buildMessage(rawMessage, replacements) {
    if (!replacements) return `${pkg}: ${rawMessage}`;
    let msg = rawMessage;
    const matches2 = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
    for (const match2 of matches2) {
      const replacement = (replacements[match2[1]] || "").toString();
      msg = msg.replace(`{{${match2[1]}}}`, replacement);
    }
    return `${pkg}: ${msg}`;
  }
  __name(buildMessage, "buildMessage");
  const messages = {
    ...DefaultMessages,
    ...customMessages
  };
  return {
    setPackageName({ packageName: packageName$1 }) {
      if (typeof packageName$1 === "string") pkg = packageName$1;
      return this;
    },
    setMessages({ customMessages: customMessages$1 }) {
      Object.assign(messages, customMessages$1 || {});
      return this;
    },
    throwInvalidPublishableKeyError(params) {
      throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
    },
    throwInvalidProxyUrl(params) {
      throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
    },
    throwMissingPublishableKeyError() {
      throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
    },
    throwMissingSecretKeyError() {
      throw new Error(buildMessage(messages.MissingSecretKeyErrorMessage));
    },
    throwMissingClerkProviderError(params) {
      throw new Error(buildMessage(messages.MissingClerkProvider, params));
    },
    throw(message) {
      throw new Error(buildMessage(message));
    }
  };
}
__name(buildErrorThrower, "buildErrorThrower");
var ClerkRuntimeError = class ClerkRuntimeError2 extends ClerkError {
  static {
    __name(this, "ClerkRuntimeError");
  }
  static kind = "ClerkRuntimeError";
  /**
  * @deprecated Use `clerkError` property instead. This property is maintained for backward compatibility.
  */
  clerkRuntimeError = true;
  constructor(message, options) {
    super({
      ...options,
      message
    });
    Object.setPrototypeOf(this, ClerkRuntimeError2.prototype);
  }
};
var isClerkRuntimeError = createErrorTypeGuard(ClerkRuntimeError);

// node_modules/@clerk/backend/dist/chunk-YBVFDYDR.mjs
var errorThrower = buildErrorThrower({ packageName: "@clerk/backend" });
var { isDevOrStagingUrl } = createDevOrStagingUrlCache();

// node_modules/@clerk/backend/dist/chunk-KDNHJOF3.mjs
init_esm();

// node_modules/@clerk/backend/dist/chunk-I4B6KCGC.mjs
init_esm();
var TokenVerificationErrorCode = {
  InvalidSecretKey: "clerk_key_invalid"
};
var TokenVerificationErrorReason = {
  TokenExpired: "token-expired",
  TokenInvalid: "token-invalid",
  TokenInvalidAlgorithm: "token-invalid-algorithm",
  TokenInvalidAuthorizedParties: "token-invalid-authorized-parties",
  TokenInvalidSignature: "token-invalid-signature",
  TokenNotActiveYet: "token-not-active-yet",
  TokenIatInTheFuture: "token-iat-in-the-future",
  TokenVerificationFailed: "token-verification-failed",
  InvalidSecretKey: "secret-key-invalid",
  LocalJWKMissing: "jwk-local-missing",
  RemoteJWKFailedToLoad: "jwk-remote-failed-to-load",
  RemoteJWKInvalid: "jwk-remote-invalid",
  RemoteJWKMissing: "jwk-remote-missing",
  JWKFailedToResolve: "jwk-failed-to-resolve",
  JWKKidMismatch: "jwk-kid-mismatch"
};
var TokenVerificationErrorAction = {
  ContactSupport: "Contact support@clerk.com",
  EnsureClerkJWT: "Make sure that this is a valid Clerk-generated JWT.",
  SetClerkJWTKey: "Set the CLERK_JWT_KEY environment variable.",
  SetClerkSecretKey: "Set the CLERK_SECRET_KEY environment variable.",
  EnsureClockSync: "Make sure your system clock is in sync (e.g. turn off and on automatic time synchronization)."
};
var TokenVerificationError = class _TokenVerificationError extends Error {
  static {
    __name(this, "_TokenVerificationError");
  }
  constructor({
    action,
    message,
    reason
  }) {
    super(message);
    Object.setPrototypeOf(this, _TokenVerificationError.prototype);
    this.reason = reason;
    this.message = message;
    this.action = action;
  }
  getFullMessage() {
    return `${[this.message, this.action].filter((m2) => m2).join(" ")} (reason=${this.reason}, token-carrier=${this.tokenCarrier})`;
  }
};
var SignJWTError = class extends Error {
  static {
    __name(this, "SignJWTError");
  }
};
var MachineTokenVerificationErrorCode = {
  TokenInvalid: "token-invalid",
  InvalidSecretKey: "secret-key-invalid",
  UnexpectedError: "unexpected-error",
  TokenVerificationFailed: "token-verification-failed"
};
var _MachineTokenVerificationError = class _MachineTokenVerificationError2 extends ClerkError {
  static {
    __name(this, "_MachineTokenVerificationError");
  }
  constructor({
    message,
    code,
    status,
    action
  }) {
    super({ message, code });
    Object.setPrototypeOf(this, _MachineTokenVerificationError2.prototype);
    this.status = status;
    this.action = action;
  }
  // Keep message unformatted, matching ClerkAPIResponseError's approach
  static formatMessage(_name, msg, _code, _docsUrl) {
    return msg;
  }
  getFullMessage() {
    return `${this.message} (code=${this.code}, status=${this.status || "n/a"})`;
  }
};
_MachineTokenVerificationError.kind = "MachineTokenVerificationError";
var MachineTokenVerificationError = _MachineTokenVerificationError;

// node_modules/@clerk/backend/dist/runtime/node/crypto.mjs
init_esm();
import { webcrypto } from "node:crypto";

// node_modules/@clerk/shared/dist/runtime/isomorphicAtob.mjs
init_esm();

// node_modules/@clerk/backend/dist/chunk-KDNHJOF3.mjs
var globalFetch = fetch.bind(globalThis);
var runtime = {
  crypto: webcrypto,
  get fetch() {
    return process.env.NODE_ENV === "test" ? fetch : globalFetch;
  },
  AbortController: globalThis.AbortController,
  Blob: globalThis.Blob,
  FormData: globalThis.FormData,
  Headers: globalThis.Headers,
  Request: globalThis.Request,
  Response: globalThis.Response
};
var base64url = {
  parse(string, opts) {
    return parse2(string, base64UrlEncoding, opts);
  },
  stringify(data, opts) {
    return stringify(data, base64UrlEncoding, opts);
  }
};
var base64UrlEncoding = {
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bits: 6
};
function parse2(string, encoding, opts = {}) {
  if (!encoding.codes) {
    encoding.codes = {};
    for (let i = 0; i < encoding.chars.length; ++i) {
      encoding.codes[encoding.chars[i]] = i;
    }
  }
  if (!opts.loose && string.length * encoding.bits & 7) {
    throw new SyntaxError("Invalid padding");
  }
  let end = string.length;
  while (string[end - 1] === "=") {
    --end;
    if (!opts.loose && !((string.length - end) * encoding.bits & 7)) {
      throw new SyntaxError("Invalid padding");
    }
  }
  const out = new (opts.out ?? Uint8Array)(end * encoding.bits / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = encoding.codes[string[i]];
    if (value === void 0) {
      throw new SyntaxError("Invalid character " + string[i]);
    }
    buffer = buffer << encoding.bits | value;
    bits += encoding.bits;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= encoding.bits || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
}
__name(parse2, "parse");
function stringify(data, encoding, opts = {}) {
  const { pad = true } = opts;
  const mask = (1 << encoding.bits) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | 255 & data[i];
    bits += 8;
    while (bits > encoding.bits) {
      bits -= encoding.bits;
      out += encoding.chars[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += encoding.chars[mask & buffer << encoding.bits - bits];
  }
  if (pad) {
    while (out.length * encoding.bits & 7) {
      out += "=";
    }
  }
  return out;
}
__name(stringify, "stringify");
var algToHash = {
  RS256: "SHA-256",
  RS384: "SHA-384",
  RS512: "SHA-512"
};
var RSA_ALGORITHM_NAME = "RSASSA-PKCS1-v1_5";
var jwksAlgToCryptoAlg = {
  RS256: RSA_ALGORITHM_NAME,
  RS384: RSA_ALGORITHM_NAME,
  RS512: RSA_ALGORITHM_NAME
};
var algs = Object.keys(algToHash);
function getCryptoAlgorithm(algorithmName) {
  const hash = algToHash[algorithmName];
  const name = jwksAlgToCryptoAlg[algorithmName];
  if (!hash || !name) {
    throw new Error(`Unsupported algorithm ${algorithmName}, expected one of ${algs.join(",")}.`);
  }
  return {
    hash: { name: algToHash[algorithmName] },
    name: jwksAlgToCryptoAlg[algorithmName]
  };
}
__name(getCryptoAlgorithm, "getCryptoAlgorithm");
var isArrayString = /* @__PURE__ */ __name((s2) => {
  return Array.isArray(s2) && s2.length > 0 && s2.every((a) => typeof a === "string");
}, "isArrayString");
var assertAudienceClaim = /* @__PURE__ */ __name((aud, audience) => {
  const audienceList = [audience].flat().filter((a) => !!a);
  const audList = [aud].flat().filter((a) => !!a);
  const shouldVerifyAudience = audienceList.length > 0 && audList.length > 0;
  if (!shouldVerifyAudience) {
    return;
  }
  if (typeof aud === "string") {
    if (!audienceList.includes(aud)) {
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.EnsureClerkJWT,
        reason: TokenVerificationErrorReason.TokenVerificationFailed,
        message: `Invalid JWT audience claim (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(
          audienceList
        )}".`
      });
    }
  } else if (isArrayString(aud)) {
    if (!aud.some((a) => audienceList.includes(a))) {
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.EnsureClerkJWT,
        reason: TokenVerificationErrorReason.TokenVerificationFailed,
        message: `Invalid JWT audience claim array (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(
          audienceList
        )}".`
      });
    }
  }
}, "assertAudienceClaim");
var assertHeaderType = /* @__PURE__ */ __name((typ, allowedTypes = "JWT") => {
  if (typeof typ === "undefined") {
    return;
  }
  const allowed = Array.isArray(allowedTypes) ? allowedTypes : [allowedTypes];
  if (!allowed.includes(typ)) {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenInvalid,
      message: `Invalid JWT type ${JSON.stringify(typ)}. Expected "${allowed.join(", ")}".`
    });
  }
}, "assertHeaderType");
var assertHeaderAlgorithm = /* @__PURE__ */ __name((alg) => {
  if (!algs.includes(alg)) {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenInvalidAlgorithm,
      message: `Invalid JWT algorithm ${JSON.stringify(alg)}. Supported: ${algs}.`
    });
  }
}, "assertHeaderAlgorithm");
var assertSubClaim = /* @__PURE__ */ __name((sub) => {
  if (typeof sub !== "string") {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenVerificationFailed,
      message: `Subject claim (sub) is required and must be a string. Received ${JSON.stringify(sub)}.`
    });
  }
}, "assertSubClaim");
var assertAuthorizedPartiesClaim = /* @__PURE__ */ __name((azp, authorizedParties) => {
  if (!azp || !authorizedParties || authorizedParties.length === 0) {
    return;
  }
  if (!authorizedParties.includes(azp)) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenInvalidAuthorizedParties,
      message: `Invalid JWT Authorized party claim (azp) ${JSON.stringify(azp)}. Expected "${authorizedParties}".`
    });
  }
}, "assertAuthorizedPartiesClaim");
var assertExpirationClaim = /* @__PURE__ */ __name((exp, clockSkewInMs) => {
  if (typeof exp !== "number") {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenVerificationFailed,
      message: `Invalid JWT expiry date claim (exp) ${JSON.stringify(exp)}. Expected number.`
    });
  }
  const currentDate = new Date(Date.now());
  const expiryDate = /* @__PURE__ */ new Date(0);
  expiryDate.setUTCSeconds(exp);
  const expired = expiryDate.getTime() <= currentDate.getTime() - clockSkewInMs;
  if (expired) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenExpired,
      message: `JWT is expired. Expiry date: ${expiryDate.toUTCString()}, Current date: ${currentDate.toUTCString()}.`
    });
  }
}, "assertExpirationClaim");
var assertActivationClaim = /* @__PURE__ */ __name((nbf, clockSkewInMs) => {
  if (typeof nbf === "undefined") {
    return;
  }
  if (typeof nbf !== "number") {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenVerificationFailed,
      message: `Invalid JWT not before date claim (nbf) ${JSON.stringify(nbf)}. Expected number.`
    });
  }
  const currentDate = new Date(Date.now());
  const notBeforeDate = /* @__PURE__ */ new Date(0);
  notBeforeDate.setUTCSeconds(nbf);
  const early = notBeforeDate.getTime() > currentDate.getTime() + clockSkewInMs;
  if (early) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenNotActiveYet,
      message: `JWT cannot be used prior to not before date claim (nbf). Not before date: ${notBeforeDate.toUTCString()}; Current date: ${currentDate.toUTCString()};`
    });
  }
}, "assertActivationClaim");
var assertIssuedAtClaim = /* @__PURE__ */ __name((iat, clockSkewInMs) => {
  if (typeof iat === "undefined") {
    return;
  }
  if (typeof iat !== "number") {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenVerificationFailed,
      message: `Invalid JWT issued at date claim (iat) ${JSON.stringify(iat)}. Expected number.`
    });
  }
  const currentDate = new Date(Date.now());
  const issuedAtDate = /* @__PURE__ */ new Date(0);
  issuedAtDate.setUTCSeconds(iat);
  const postIssued = issuedAtDate.getTime() > currentDate.getTime() + clockSkewInMs;
  if (postIssued) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenIatInTheFuture,
      message: `JWT issued at date claim (iat) is in the future. Issued at date: ${issuedAtDate.toUTCString()}; Current date: ${currentDate.toUTCString()};`
    });
  }
}, "assertIssuedAtClaim");
function pemToBuffer(secret) {
  const trimmed = secret.replace(/-----BEGIN.*?-----/g, "").replace(/-----END.*?-----/g, "").replace(/\s/g, "");
  const decoded = isomorphicAtob(trimmed);
  const buffer = new ArrayBuffer(decoded.length);
  const bufView = new Uint8Array(buffer);
  for (let i = 0, strLen = decoded.length; i < strLen; i++) {
    bufView[i] = decoded.charCodeAt(i);
  }
  return bufView;
}
__name(pemToBuffer, "pemToBuffer");
function importKey(key, algorithm, keyUsage) {
  if (typeof key === "object") {
    return runtime.crypto.subtle.importKey("jwk", key, algorithm, false, [keyUsage]);
  }
  const keyData = pemToBuffer(key);
  const format = keyUsage === "sign" ? "pkcs8" : "spki";
  return runtime.crypto.subtle.importKey(format, keyData, algorithm, false, [keyUsage]);
}
__name(importKey, "importKey");
var DEFAULT_CLOCK_SKEW_IN_MS = 5 * 1e3;
async function hasValidSignature(jwt, key) {
  const { header, signature, raw } = jwt;
  const encoder = new TextEncoder();
  const data = encoder.encode([raw.header, raw.payload].join("."));
  const algorithm = getCryptoAlgorithm(header.alg);
  try {
    const cryptoKey = await importKey(key, algorithm, "verify");
    const verified = await runtime.crypto.subtle.verify(algorithm.name, cryptoKey, signature, data);
    return { data: verified };
  } catch (error) {
    return {
      errors: [
        new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenInvalidSignature,
          message: error?.message
        })
      ]
    };
  }
}
__name(hasValidSignature, "hasValidSignature");
function decodeJwt(token) {
  const tokenParts = (token || "").toString().split(".");
  if (tokenParts.length !== 3) {
    return {
      errors: [
        new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenInvalid,
          message: `Invalid JWT form. A JWT consists of three parts separated by dots.`
        })
      ]
    };
  }
  const [rawHeader, rawPayload, rawSignature] = tokenParts;
  const decoder = new TextDecoder();
  const header = JSON.parse(decoder.decode(base64url.parse(rawHeader, { loose: true })));
  const payload = JSON.parse(decoder.decode(base64url.parse(rawPayload, { loose: true })));
  const signature = base64url.parse(rawSignature, { loose: true });
  const data = {
    header,
    payload,
    signature,
    raw: {
      header: rawHeader,
      payload: rawPayload,
      signature: rawSignature,
      text: token
    }
  };
  return { data };
}
__name(decodeJwt, "decodeJwt");
async function verifyJwt(token, options) {
  const { audience, authorizedParties, clockSkewInMs, key, headerType } = options;
  const clockSkew = clockSkewInMs || DEFAULT_CLOCK_SKEW_IN_MS;
  const { data: decoded, errors } = decodeJwt(token);
  if (errors) {
    return { errors };
  }
  const { header, payload } = decoded;
  try {
    const { typ, alg } = header;
    assertHeaderType(typ, headerType);
    assertHeaderAlgorithm(alg);
    const { azp, sub, aud, iat, exp, nbf } = payload;
    assertSubClaim(sub);
    assertAudienceClaim([aud], [audience]);
    assertAuthorizedPartiesClaim(azp, authorizedParties);
    assertExpirationClaim(exp, clockSkew);
    assertActivationClaim(nbf, clockSkew);
    assertIssuedAtClaim(iat, clockSkew);
  } catch (err) {
    return { errors: [err] };
  }
  const { data: signatureValid, errors: signatureErrors } = await hasValidSignature(decoded, key);
  if (signatureErrors) {
    return {
      errors: [
        new TokenVerificationError({
          action: TokenVerificationErrorAction.EnsureClerkJWT,
          reason: TokenVerificationErrorReason.TokenVerificationFailed,
          message: `Error verifying JWT signature. ${signatureErrors[0]}`
        })
      ]
    };
  }
  if (!signatureValid) {
    return {
      errors: [
        new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenInvalidSignature,
          message: "JWT signature is invalid."
        })
      ]
    };
  }
  return { data: payload };
}
__name(verifyJwt, "verifyJwt");

// node_modules/@clerk/backend/dist/chunk-TOROEX6P.mjs
init_esm();
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = /* @__PURE__ */ __name((msg) => {
  throw TypeError(msg);
}, "__typeError");
var __commonJS2 = /* @__PURE__ */ __name((cb, mod) => /* @__PURE__ */ __name(function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, "__require"), "__commonJS");
var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
}, "__copyProps");
var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
)), "__toESM");
var __accessCheck = /* @__PURE__ */ __name((obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg), "__accessCheck");
var __privateGet = /* @__PURE__ */ __name((obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), "__privateGet");
var __privateAdd = /* @__PURE__ */ __name((obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value), "__privateAdd");
var __privateSet = /* @__PURE__ */ __name((obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value), "__privateSet");
var __privateMethod = /* @__PURE__ */ __name((obj, member, method) => (__accessCheck(obj, member, "access private method"), method), "__privateMethod");

// node_modules/@clerk/shared/dist/runtime/buildAccountsBaseUrl.mjs
init_esm();
function buildAccountsBaseUrl(frontendApi) {
  if (!frontendApi) return "";
  return `https://${frontendApi.replace(/clerk\.accountsstage\./, "accountsstage.").replace(/clerk\.accounts\.|clerk\./, "accounts.")}`;
}
__name(buildAccountsBaseUrl, "buildAccountsBaseUrl");

// node_modules/@clerk/shared/dist/runtime/authorization.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/authorization-CV9xGlIX.mjs
init_esm();
var TYPES_TO_OBJECTS = {
  strict_mfa: {
    afterMinutes: 10,
    level: "multi_factor"
  },
  strict: {
    afterMinutes: 10,
    level: "second_factor"
  },
  moderate: {
    afterMinutes: 60,
    level: "second_factor"
  },
  lax: {
    afterMinutes: 1440,
    level: "second_factor"
  }
};
var ALLOWED_LEVELS = /* @__PURE__ */ new Set([
  "first_factor",
  "second_factor",
  "multi_factor"
]);
var ALLOWED_TYPES = /* @__PURE__ */ new Set([
  "strict_mfa",
  "strict",
  "moderate",
  "lax"
]);
var isValidMaxAge = /* @__PURE__ */ __name((maxAge) => typeof maxAge === "number" && maxAge > 0, "isValidMaxAge");
var isValidLevel = /* @__PURE__ */ __name((level) => ALLOWED_LEVELS.has(level), "isValidLevel");
var isValidVerificationType = /* @__PURE__ */ __name((type) => ALLOWED_TYPES.has(type), "isValidVerificationType");
var isValidFactorAge = /* @__PURE__ */ __name((x) => typeof x === "number" && Number.isFinite(x) && (x === -1 || x >= 0), "isValidFactorAge");
var prefixWithOrg = /* @__PURE__ */ __name((value) => value.replace(/^(org:)*/, "org:"), "prefixWithOrg");
var checkOrgAuthorization = /* @__PURE__ */ __name((params, options) => {
  const { orgId, orgRole, orgPermissions } = options;
  const roleAsked = params.role !== void 0;
  const permissionAsked = params.permission !== void 0;
  if (!roleAsked && !permissionAsked) return "skip";
  if (roleAsked && typeof params.role !== "string") return "fail";
  if (permissionAsked && typeof params.permission !== "string") return "fail";
  if (!orgId) return "fail";
  if (roleAsked) {
    if (typeof orgRole !== "string" || !orgRole) return "fail";
    if (prefixWithOrg(orgRole) !== prefixWithOrg(params.role)) return "fail";
  }
  if (permissionAsked) {
    if (!Array.isArray(orgPermissions)) return "fail";
    if (!orgPermissions.includes(prefixWithOrg(params.permission))) return "fail";
  }
  return "pass";
}, "checkOrgAuthorization");
var checkForFeatureOrPlan = /* @__PURE__ */ __name((claim, featureOrPlan) => {
  const { org: orgFeatures, user: userFeatures } = splitByScope(claim);
  const [scope, _id] = featureOrPlan.split(":");
  const id = _id || scope;
  if (scope === "org") return orgFeatures.includes(id);
  else if (scope === "user") return userFeatures.includes(id);
  else return [...orgFeatures, ...userFeatures].includes(id);
}, "checkForFeatureOrPlan");
var checkBillingAuthorization = /* @__PURE__ */ __name((params, options) => {
  const { features, plans } = options;
  const featureAsked = params.feature !== void 0;
  const planAsked = params.plan !== void 0;
  if (!featureAsked && !planAsked) return "skip";
  if (featureAsked && typeof params.feature !== "string") return "fail";
  if (planAsked && typeof params.plan !== "string") return "fail";
  if (featureAsked) {
    if (typeof features !== "string" || !features) return "fail";
    try {
      if (!checkForFeatureOrPlan(features, params.feature)) return "fail";
    } catch {
      return "fail";
    }
  }
  if (planAsked) {
    if (typeof plans !== "string" || !plans) return "fail";
    try {
      if (!checkForFeatureOrPlan(plans, params.plan)) return "fail";
    } catch {
      return "fail";
    }
  }
  return "pass";
}, "checkBillingAuthorization");
var splitByScope = /* @__PURE__ */ __name((fea) => {
  const features = fea ? fea.split(",").map((f) => f.trim()) : [];
  return {
    org: features.filter((f) => f.split(":")[0].includes("o")).map((f) => f.split(":")[1]),
    user: features.filter((f) => f.split(":")[0].includes("u")).map((f) => f.split(":")[1])
  };
}, "splitByScope");
var validateReverificationConfig = /* @__PURE__ */ __name((config) => {
  if (!config) return false;
  const convertConfigToObject = /* @__PURE__ */ __name((config$1) => {
    if (typeof config$1 === "string") return TYPES_TO_OBJECTS[config$1];
    return config$1;
  }, "convertConfigToObject");
  const isValidStringValue = typeof config === "string" && isValidVerificationType(config);
  const isValidObjectValue = typeof config === "object" && isValidLevel(config.level) && isValidMaxAge(config.afterMinutes);
  if (isValidStringValue || isValidObjectValue) return convertConfigToObject.bind(null, config);
  return false;
}, "validateReverificationConfig");
var checkReverificationAuthorization = /* @__PURE__ */ __name((params, { factorVerificationAge }) => {
  if (params.reverification === void 0) return "skip";
  if (!factorVerificationAge) return "fail";
  if (!Array.isArray(factorVerificationAge) || factorVerificationAge.length !== 2 || !isValidFactorAge(factorVerificationAge[0]) || !isValidFactorAge(factorVerificationAge[1])) return "fail";
  const getConfig = validateReverificationConfig(params.reverification);
  if (!getConfig) return "fail";
  const { level, afterMinutes } = getConfig();
  const [factor1Age, factor2Age] = factorVerificationAge;
  if (factor1Age === -1 && factor2Age === -1) return "fail";
  const factor1FreshEnough = factor1Age !== -1 && afterMinutes > factor1Age;
  const factor2FreshEnough = factor2Age !== -1 && afterMinutes > factor2Age;
  switch (level) {
    case "first_factor":
      return factor1FreshEnough ? "pass" : "fail";
    case "second_factor":
      if (factor2Age === -1) return factor1FreshEnough ? "pass" : "fail";
      if (factor1Age === -1) return factor2FreshEnough ? "pass" : "fail";
      return factor2FreshEnough ? "pass" : "fail";
    case "multi_factor":
      if (factor2Age === -1) return factor1FreshEnough ? "pass" : "fail";
      if (factor1Age === -1) return "fail";
      return factor1FreshEnough && factor2FreshEnough ? "pass" : "fail";
  }
}, "checkReverificationAuthorization");
var combine = /* @__PURE__ */ __name((results) => results.some((r) => r === "pass") && results.every((r) => r === "pass" || r === "skip"), "combine");
var createCheckAuthorization = /* @__PURE__ */ __name((options) => {
  return (params) => {
    if (!options.userId) return false;
    return combine([
      checkOrgAuthorization(params, options),
      checkBillingAuthorization(params, options),
      checkReverificationAuthorization(params, options)
    ]);
  };
}, "createCheckAuthorization");

// node_modules/@clerk/shared/dist/runtime/jwtPayloadParser.mjs
init_esm();
var parsePermissions = /* @__PURE__ */ __name(({ per, fpm }) => {
  if (!per || !fpm) return {
    permissions: [],
    featurePermissionMap: []
  };
  const permissions = per.split(",").map((p) => p.trim());
  return {
    permissions,
    featurePermissionMap: fpm.split(",").map((permission) => Number.parseInt(permission.trim(), 10)).map((permission) => permission.toString(2).padStart(permissions.length, "0").split("").map((bit) => Number.parseInt(bit, 10)).reverse()).filter(Boolean)
  };
}, "parsePermissions");
function buildOrgPermissions({ features, permissions, featurePermissionMap }) {
  if (!features || !permissions || !featurePermissionMap) return [];
  const orgPermissions = [];
  for (let featureIndex = 0; featureIndex < features.length; featureIndex++) {
    const feature = features[featureIndex];
    if (featureIndex >= featurePermissionMap.length) continue;
    const permissionBits = featurePermissionMap[featureIndex];
    if (!permissionBits) continue;
    for (let permIndex = 0; permIndex < permissionBits.length; permIndex++) if (permissionBits[permIndex] === 1) orgPermissions.push(`org:${feature}:${permissions[permIndex]}`);
  }
  return orgPermissions;
}
__name(buildOrgPermissions, "buildOrgPermissions");
var __experimental_JWTPayloadToAuthObjectProperties = /* @__PURE__ */ __name((claims) => {
  let orgId;
  let orgRole;
  let orgSlug;
  let orgPermissions;
  const factorVerificationAge = claims.fva ?? null;
  const sessionStatus = claims.sts ?? null;
  switch (claims.v) {
    case 2:
      if (claims.o) {
        orgId = claims.o?.id;
        orgSlug = claims.o?.slg;
        if (claims.o?.rol) orgRole = `org:${claims.o?.rol}`;
        const { org } = splitByScope(claims.fea);
        const { permissions, featurePermissionMap } = parsePermissions({
          per: claims.o?.per,
          fpm: claims.o?.fpm
        });
        orgPermissions = buildOrgPermissions({
          features: org,
          featurePermissionMap,
          permissions
        });
      }
      break;
    default:
      orgId = claims.org_id;
      orgRole = claims.org_role;
      orgSlug = claims.org_slug;
      orgPermissions = claims.org_permissions;
      break;
  }
  return {
    sessionClaims: claims,
    sessionId: claims.sid,
    sessionStatus,
    actor: claims.act,
    userId: claims.sub,
    orgId,
    orgRole,
    orgSlug,
    orgPermissions,
    factorVerificationAge
  };
}, "__experimental_JWTPayloadToAuthObjectProperties");

// node_modules/@clerk/shared/dist/runtime/pathToRegexp.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/authorization-errors.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/authorization-errors-CS1pNy8i.mjs
init_esm();

// node_modules/@clerk/backend/dist/chunk-QQ3KHOKZ.mjs
var require_dist = __commonJS2({
  "../../node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = parse22;
    exports.serialize = serialize;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C2 = /* @__PURE__ */ __name(function() {
      }, "C");
      C2.prototype = /* @__PURE__ */ Object.create(null);
      return C2;
    })();
    function parse22(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode;
      let index = 0;
      do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1)
          break;
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        if (obj[key] === void 0) {
          let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
          let valEndIdx = endIndex(str, endIdx, valStartIdx);
          const value = dec(str.slice(valStartIdx, valEndIdx));
          obj[key] = value;
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    __name(parse22, "parse2");
    function startIndex(str, index, max) {
      do {
        const code = str.charCodeAt(index);
        if (code !== 32 && code !== 9)
          return index;
      } while (++index < max);
      return max;
    }
    __name(startIndex, "startIndex");
    function endIndex(str, index, min) {
      while (index > min) {
        const code = str.charCodeAt(--index);
        if (code !== 32 && code !== 9)
          return index + 1;
      }
      return min;
    }
    __name(endIndex, "endIndex");
    function serialize(name, val, options) {
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
      }
      const value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
      }
      let str = name + "=" + value;
      if (!options)
        return str;
      if (options.maxAge !== void 0) {
        if (!Number.isInteger(options.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
      }
      if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
          throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
      }
      if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
          throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
      }
      if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
      }
      if (options.httpOnly) {
        str += "; HttpOnly";
      }
      if (options.secure) {
        str += "; Secure";
      }
      if (options.partitioned) {
        str += "; Partitioned";
      }
      if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
      }
      if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
      }
      return str;
    }
    __name(serialize, "serialize");
    function decode(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    __name(decode, "decode");
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
    __name(isDate, "isDate");
  }
});
var API_URL = "https://api.clerk.com";
var API_VERSION = "v1";
var USER_AGENT = `${"@clerk/backend"}@${"2.33.6"}`;
var MAX_CACHE_LAST_UPDATED_AT_SECONDS = 5 * 60;
var SUPPORTED_BAPI_VERSION = "2025-11-10";
var Attributes = {
  AuthToken: "__clerkAuthToken",
  AuthSignature: "__clerkAuthSignature",
  AuthStatus: "__clerkAuthStatus",
  AuthReason: "__clerkAuthReason",
  AuthMessage: "__clerkAuthMessage",
  ClerkUrl: "__clerkUrl"
};
var Cookies = {
  Session: "__session",
  Refresh: "__refresh",
  ClientUat: "__client_uat",
  Handshake: "__clerk_handshake",
  DevBrowser: "__clerk_db_jwt",
  RedirectCount: "__clerk_redirect_count",
  HandshakeNonce: "__clerk_handshake_nonce"
};
var QueryParameters = {
  ClerkSynced: "__clerk_synced",
  SuffixedCookies: "suffixed_cookies",
  ClerkRedirectUrl: "__clerk_redirect_url",
  // use the reference to Cookies to indicate that it's the same value
  DevBrowser: Cookies.DevBrowser,
  Handshake: Cookies.Handshake,
  HandshakeHelp: "__clerk_help",
  LegacyDevBrowser: "__dev_session",
  HandshakeReason: "__clerk_hs_reason",
  HandshakeNonce: Cookies.HandshakeNonce,
  HandshakeFormat: "format",
  Session: "__session"
};
var Headers2 = {
  Accept: "accept",
  AuthMessage: "x-clerk-auth-message",
  Authorization: "authorization",
  AuthReason: "x-clerk-auth-reason",
  AuthSignature: "x-clerk-auth-signature",
  AuthStatus: "x-clerk-auth-status",
  AuthToken: "x-clerk-auth-token",
  CacheControl: "cache-control",
  ClerkRedirectTo: "x-clerk-redirect-to",
  ClerkRequestData: "x-clerk-request-data",
  ClerkUrl: "x-clerk-clerk-url",
  CloudFrontForwardedProto: "cloudfront-forwarded-proto",
  ContentType: "content-type",
  ContentSecurityPolicy: "content-security-policy",
  ContentSecurityPolicyReportOnly: "content-security-policy-report-only",
  EnableDebug: "x-clerk-debug",
  ForwardedHost: "x-forwarded-host",
  ForwardedPort: "x-forwarded-port",
  ForwardedProto: "x-forwarded-proto",
  Host: "host",
  Location: "location",
  Nonce: "x-nonce",
  Origin: "origin",
  Referrer: "referer",
  SecFetchDest: "sec-fetch-dest",
  SecFetchSite: "sec-fetch-site",
  UserAgent: "user-agent",
  ReportingEndpoints: "reporting-endpoints"
};
var ContentTypes = {
  Json: "application/json"
};
var constants = {
  Attributes,
  Cookies,
  Headers: Headers2,
  ContentTypes,
  QueryParameters
};
var buildUrl = /* @__PURE__ */ __name((_baseUrl, _targetUrl, _returnBackUrl, _devBrowserToken) => {
  if (_baseUrl === "") {
    return legacyBuildUrl(_targetUrl.toString(), _returnBackUrl?.toString());
  }
  const baseUrl = new URL(_baseUrl);
  const returnBackUrl = _returnBackUrl ? new URL(_returnBackUrl, baseUrl) : void 0;
  const res = new URL(_targetUrl, baseUrl);
  const isCrossOriginRedirect = `${baseUrl.hostname}:${baseUrl.port}` !== `${res.hostname}:${res.port}`;
  if (returnBackUrl) {
    if (isCrossOriginRedirect) {
      returnBackUrl.searchParams.delete(constants.QueryParameters.ClerkSynced);
    }
    res.searchParams.set("redirect_url", returnBackUrl.toString());
  }
  if (isCrossOriginRedirect && _devBrowserToken) {
    res.searchParams.set(constants.QueryParameters.DevBrowser, _devBrowserToken);
  }
  return res.toString();
}, "buildUrl");
var legacyBuildUrl = /* @__PURE__ */ __name((targetUrl, redirectUrl) => {
  let url;
  if (!targetUrl.startsWith("http")) {
    if (!redirectUrl || !redirectUrl.startsWith("http")) {
      throw new Error("destination url or return back url should be an absolute path url!");
    }
    const baseURL = new URL(redirectUrl);
    url = new URL(targetUrl, baseURL.origin);
  } else {
    url = new URL(targetUrl);
  }
  if (redirectUrl) {
    url.searchParams.set("redirect_url", redirectUrl);
  }
  return url.toString();
}, "legacyBuildUrl");
var createRedirect = /* @__PURE__ */ __name((params) => {
  const { publishableKey, redirectAdapter, signInUrl, signUpUrl, baseUrl, sessionStatus } = params;
  const parsedPublishableKey = parsePublishableKey(publishableKey);
  const frontendApi = parsedPublishableKey?.frontendApi;
  const isDevelopment = parsedPublishableKey?.instanceType === "development";
  const accountsBaseUrl = buildAccountsBaseUrl(frontendApi);
  const hasPendingStatus = sessionStatus === "pending";
  const redirectToTasks = /* @__PURE__ */ __name((url, { returnBackUrl }) => {
    return redirectAdapter(
      buildUrl(baseUrl, `${url}/tasks`, returnBackUrl, isDevelopment ? params.devBrowserToken : null)
    );
  }, "redirectToTasks");
  const redirectToSignUp = /* @__PURE__ */ __name(({ returnBackUrl } = {}) => {
    if (!signUpUrl && !accountsBaseUrl) {
      errorThrower.throwMissingPublishableKeyError();
    }
    const accountsSignUpUrl = `${accountsBaseUrl}/sign-up`;
    function buildSignUpUrl(signIn) {
      if (!signIn) {
        return;
      }
      const url = new URL(signIn, baseUrl);
      url.pathname = `${url.pathname}/create`;
      return url.toString();
    }
    __name(buildSignUpUrl, "buildSignUpUrl");
    const targetUrl = signUpUrl || buildSignUpUrl(signInUrl) || accountsSignUpUrl;
    if (hasPendingStatus) {
      return redirectToTasks(targetUrl, { returnBackUrl });
    }
    return redirectAdapter(buildUrl(baseUrl, targetUrl, returnBackUrl, isDevelopment ? params.devBrowserToken : null));
  }, "redirectToSignUp");
  const redirectToSignIn = /* @__PURE__ */ __name(({ returnBackUrl } = {}) => {
    if (!signInUrl && !accountsBaseUrl) {
      errorThrower.throwMissingPublishableKeyError();
    }
    const accountsSignInUrl = `${accountsBaseUrl}/sign-in`;
    const targetUrl = signInUrl || accountsSignInUrl;
    if (hasPendingStatus) {
      return redirectToTasks(targetUrl, { returnBackUrl });
    }
    return redirectAdapter(buildUrl(baseUrl, targetUrl, returnBackUrl, isDevelopment ? params.devBrowserToken : null));
  }, "redirectToSignIn");
  return { redirectToSignUp, redirectToSignIn };
}, "createRedirect");
function mergePreDefinedOptions(preDefinedOptions, options) {
  return Object.keys(preDefinedOptions).reduce(
    (obj, key) => {
      return { ...obj, [key]: options[key] || obj[key] };
    },
    { ...preDefinedOptions }
  );
}
__name(mergePreDefinedOptions, "mergePreDefinedOptions");
function assertValidSecretKey(val) {
  if (!val || typeof val !== "string") {
    throw Error("Missing Clerk Secret Key. Go to https://dashboard.clerk.com and get your key for your instance.");
  }
}
__name(assertValidSecretKey, "assertValidSecretKey");
function assertValidPublishableKey(val) {
  parsePublishableKey(val, { fatal: true });
}
__name(assertValidPublishableKey, "assertValidPublishableKey");
var TokenType = {
  SessionToken: "session_token",
  ApiKey: "api_key",
  M2MToken: "m2m_token",
  OAuthToken: "oauth_token"
};
var AuthenticateContext = class {
  static {
    __name(this, "AuthenticateContext");
  }
  constructor(cookieSuffix, clerkRequest, options) {
    this.cookieSuffix = cookieSuffix;
    this.clerkRequest = clerkRequest;
    this.originalFrontendApi = "";
    if (options.acceptsToken === TokenType.M2MToken || options.acceptsToken === TokenType.ApiKey) {
      this.initHeaderValues();
    } else {
      this.initPublishableKeyValues(options);
      this.initHeaderValues();
      this.initCookieValues();
      this.initHandshakeValues();
    }
    Object.assign(this, options);
    this.clerkUrl = this.clerkRequest.clerkUrl;
  }
  /**
   * Retrieves the session token from either the cookie or the header.
   *
   * @returns {string | undefined} The session token if available, otherwise undefined.
   */
  get sessionToken() {
    return this.sessionTokenInCookie || this.tokenInHeader;
  }
  usesSuffixedCookies() {
    const suffixedClientUat = this.getSuffixedCookie(constants.Cookies.ClientUat);
    const clientUat = this.getCookie(constants.Cookies.ClientUat);
    const suffixedSession = this.getSuffixedCookie(constants.Cookies.Session) || "";
    const session = this.getCookie(constants.Cookies.Session) || "";
    if (session && !this.tokenHasIssuer(session)) {
      return false;
    }
    if (session && !this.tokenBelongsToInstance(session)) {
      return true;
    }
    if (!suffixedClientUat && !suffixedSession) {
      return false;
    }
    const { data: sessionData } = decodeJwt(session);
    const sessionIat = sessionData?.payload.iat || 0;
    const { data: suffixedSessionData } = decodeJwt(suffixedSession);
    const suffixedSessionIat = suffixedSessionData?.payload.iat || 0;
    if (suffixedClientUat !== "0" && clientUat !== "0" && sessionIat > suffixedSessionIat) {
      return false;
    }
    if (suffixedClientUat === "0" && clientUat !== "0") {
      return false;
    }
    if (this.instanceType !== "production") {
      const isSuffixedSessionExpired = this.sessionExpired(suffixedSessionData);
      if (suffixedClientUat !== "0" && clientUat === "0" && isSuffixedSessionExpired) {
        return false;
      }
    }
    if (!suffixedClientUat && suffixedSession) {
      return false;
    }
    return true;
  }
  /**
   * Determines if the request came from a different origin based on the referrer header.
   * Used for cross-origin detection in multi-domain authentication flows.
   *
   * @returns {boolean} True if referrer exists and is from a different origin, false otherwise.
   */
  isCrossOriginReferrer() {
    if (!this.referrer || !this.clerkUrl.origin) {
      return false;
    }
    try {
      const referrerOrigin = new URL(this.referrer).origin;
      return referrerOrigin !== this.clerkUrl.origin;
    } catch {
      return false;
    }
  }
  /**
   * Determines if the referrer URL is from a Clerk domain (accounts portal or FAPI).
   * This includes both development and production account portal domains, as well as FAPI domains
   * used for redirect-based authentication flows.
   *
   * @returns {boolean} True if the referrer is from a Clerk accounts portal or FAPI domain, false otherwise
   */
  isKnownClerkReferrer() {
    if (!this.referrer) {
      return false;
    }
    try {
      const referrerOrigin = new URL(this.referrer);
      const referrerHost = referrerOrigin.hostname;
      if (this.frontendApi) {
        const fapiHost = this.frontendApi.startsWith("http") ? new URL(this.frontendApi).hostname : this.frontendApi;
        if (referrerHost === fapiHost) {
          return true;
        }
      }
      if (isLegacyDevAccountPortalOrigin(referrerHost) || isCurrentDevAccountPortalOrigin(referrerHost)) {
        return true;
      }
      const expectedAccountsUrl = buildAccountsBaseUrl(this.frontendApi);
      if (expectedAccountsUrl) {
        const expectedAccountsOrigin = new URL(expectedAccountsUrl).origin;
        if (referrerOrigin.origin === expectedAccountsOrigin) {
          return true;
        }
      }
      if (referrerHost.startsWith("accounts.")) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
  initPublishableKeyValues(options) {
    assertValidPublishableKey(options.publishableKey);
    this.publishableKey = options.publishableKey;
    const originalPk = parsePublishableKey(this.publishableKey, {
      fatal: true,
      domain: options.domain,
      isSatellite: options.isSatellite
    });
    this.originalFrontendApi = originalPk.frontendApi;
    const pk = parsePublishableKey(this.publishableKey, {
      fatal: true,
      proxyUrl: options.proxyUrl,
      domain: options.domain,
      isSatellite: options.isSatellite
    });
    this.instanceType = pk.instanceType;
    this.frontendApi = pk.frontendApi;
  }
  initHeaderValues() {
    this.tokenInHeader = this.parseAuthorizationHeader(this.getHeader(constants.Headers.Authorization));
    this.origin = this.getHeader(constants.Headers.Origin);
    this.host = this.getHeader(constants.Headers.Host);
    this.forwardedHost = this.getHeader(constants.Headers.ForwardedHost);
    this.forwardedProto = this.getHeader(constants.Headers.CloudFrontForwardedProto) || this.getHeader(constants.Headers.ForwardedProto);
    this.referrer = this.getHeader(constants.Headers.Referrer);
    this.userAgent = this.getHeader(constants.Headers.UserAgent);
    this.secFetchDest = this.getHeader(constants.Headers.SecFetchDest);
    this.accept = this.getHeader(constants.Headers.Accept);
  }
  initCookieValues() {
    this.sessionTokenInCookie = this.getSuffixedOrUnSuffixedCookie(constants.Cookies.Session);
    this.refreshTokenInCookie = this.getSuffixedCookie(constants.Cookies.Refresh);
    this.clientUat = Number.parseInt(this.getSuffixedOrUnSuffixedCookie(constants.Cookies.ClientUat) || "") || 0;
  }
  initHandshakeValues() {
    this.devBrowserToken = this.getQueryParam(constants.QueryParameters.DevBrowser) || this.getSuffixedOrUnSuffixedCookie(constants.Cookies.DevBrowser);
    this.handshakeToken = this.getQueryParam(constants.QueryParameters.Handshake) || this.getCookie(constants.Cookies.Handshake);
    this.handshakeRedirectLoopCounter = Number(this.getCookie(constants.Cookies.RedirectCount)) || 0;
    this.handshakeNonce = this.getQueryParam(constants.QueryParameters.HandshakeNonce) || this.getCookie(constants.Cookies.HandshakeNonce);
  }
  getQueryParam(name) {
    return this.clerkRequest.clerkUrl.searchParams.get(name);
  }
  getHeader(name) {
    return this.clerkRequest.headers.get(name) || void 0;
  }
  getCookie(name) {
    return this.clerkRequest.cookies.get(name) || void 0;
  }
  getSuffixedCookie(name) {
    return this.getCookie(getSuffixedCookieName(name, this.cookieSuffix)) || void 0;
  }
  getSuffixedOrUnSuffixedCookie(cookieName) {
    if (this.usesSuffixedCookies()) {
      return this.getSuffixedCookie(cookieName);
    }
    return this.getCookie(cookieName);
  }
  parseAuthorizationHeader(authorizationHeader) {
    if (!authorizationHeader) {
      return void 0;
    }
    const [scheme, token] = authorizationHeader.split(" ", 2);
    if (!token) {
      return scheme;
    }
    if (scheme === "Bearer") {
      return token;
    }
    return void 0;
  }
  tokenHasIssuer(token) {
    const { data, errors } = decodeJwt(token);
    if (errors) {
      return false;
    }
    return !!data.payload.iss;
  }
  tokenBelongsToInstance(token) {
    if (!token) {
      return false;
    }
    const { data, errors } = decodeJwt(token);
    if (errors) {
      return false;
    }
    const tokenIssuer = data.payload.iss.replace(/https?:\/\//gi, "");
    return this.originalFrontendApi === tokenIssuer;
  }
  sessionExpired(jwt) {
    return !!jwt && jwt?.payload.exp <= Date.now() / 1e3 >> 0;
  }
};
var createAuthenticateContext = /* @__PURE__ */ __name(async (clerkRequest, options) => {
  const cookieSuffix = options.publishableKey ? await getCookieSuffix(options.publishableKey, runtime.crypto.subtle) : "";
  return new AuthenticateContext(cookieSuffix, clerkRequest, options);
}, "createAuthenticateContext");
var SEPARATOR = "/";
var MULTIPLE_SEPARATOR_REGEX = new RegExp("(?<!:)" + SEPARATOR + "{1,}", "g");
function joinPaths(...args) {
  return args.filter((p) => p).join(SEPARATOR).replace(MULTIPLE_SEPARATOR_REGEX, SEPARATOR);
}
__name(joinPaths, "joinPaths");
var AbstractAPI = class {
  static {
    __name(this, "AbstractAPI");
  }
  constructor(request) {
    this.request = request;
  }
  requireId(id) {
    if (!id) {
      throw new Error("A valid resource ID is required.");
    }
  }
};
var basePath = "/actor_tokens";
var ActorTokenAPI = class extends AbstractAPI {
  static {
    __name(this, "ActorTokenAPI");
  }
  async create(params) {
    return this.request({
      method: "POST",
      path: basePath,
      bodyParams: params
    });
  }
  async revoke(actorTokenId) {
    this.requireId(actorTokenId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath, actorTokenId, "revoke")
    });
  }
};
var basePath2 = "/agents/tasks";
var AgentTaskAPI = class extends AbstractAPI {
  static {
    __name(this, "AgentTaskAPI");
  }
  /**
   * @experimental This is an experimental API for the Agent Tokens feature that is available under a private beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
   */
  async create(params) {
    return this.request({
      method: "POST",
      path: basePath2,
      bodyParams: params,
      options: {
        deepSnakecaseBodyParamKeys: true
      }
    });
  }
  async revoke(agentTaskId) {
    this.requireId(agentTaskId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath2, agentTaskId, "revoke")
    });
  }
};
var basePath3 = "/accountless_applications";
var AccountlessApplicationAPI = class extends AbstractAPI {
  static {
    __name(this, "AccountlessApplicationAPI");
  }
  async createAccountlessApplication(params) {
    const headerParams = params?.requestHeaders ? Object.fromEntries(params.requestHeaders.entries()) : void 0;
    return this.request({
      method: "POST",
      path: basePath3,
      headerParams
    });
  }
  async completeAccountlessApplicationOnboarding(params) {
    const headerParams = params?.requestHeaders ? Object.fromEntries(params.requestHeaders.entries()) : void 0;
    return this.request({
      method: "POST",
      path: joinPaths(basePath3, "complete"),
      headerParams
    });
  }
};
var basePath4 = "/allowlist_identifiers";
var AllowlistIdentifierAPI = class extends AbstractAPI {
  static {
    __name(this, "AllowlistIdentifierAPI");
  }
  async getAllowlistIdentifierList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath4,
      queryParams: { ...params, paginated: true }
    });
  }
  async createAllowlistIdentifier(params) {
    return this.request({
      method: "POST",
      path: basePath4,
      bodyParams: params
    });
  }
  async deleteAllowlistIdentifier(allowlistIdentifierId) {
    this.requireId(allowlistIdentifierId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath4, allowlistIdentifierId)
    });
  }
};
var basePath5 = "/api_keys";
var APIKeysAPI = class extends AbstractAPI {
  static {
    __name(this, "APIKeysAPI");
  }
  async list(queryParams) {
    return this.request({
      method: "GET",
      path: basePath5,
      queryParams
    });
  }
  async create(params) {
    return this.request({
      method: "POST",
      path: basePath5,
      bodyParams: params
    });
  }
  async get(apiKeyId) {
    this.requireId(apiKeyId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath5, apiKeyId)
    });
  }
  async update(params) {
    const { apiKeyId, ...bodyParams } = params;
    this.requireId(apiKeyId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath5, apiKeyId),
      bodyParams
    });
  }
  async delete(apiKeyId) {
    this.requireId(apiKeyId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath5, apiKeyId)
    });
  }
  async revoke(params) {
    const { apiKeyId, revocationReason = null } = params;
    this.requireId(apiKeyId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath5, apiKeyId, "revoke"),
      bodyParams: { revocationReason }
    });
  }
  async getSecret(apiKeyId) {
    this.requireId(apiKeyId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath5, apiKeyId, "secret")
    });
  }
  async verify(secret) {
    return this.request({
      method: "POST",
      path: joinPaths(basePath5, "verify"),
      bodyParams: { secret }
    });
  }
  /**
   * @deprecated Use `verify()` instead. This method will be removed in the next major release.
   */
  async verifySecret(secret) {
    deprecated("apiKeys.verifySecret()", "Use `apiKeys.verify()` instead.");
    return this.verify(secret);
  }
};
var basePath6 = "/beta_features";
var BetaFeaturesAPI = class extends AbstractAPI {
  static {
    __name(this, "BetaFeaturesAPI");
  }
  /**
   * Change the domain of a production instance.
   *
   * Changing the domain requires updating the DNS records accordingly, deploying new SSL certificates,
   * updating your Social Connection's redirect URLs and setting the new keys in your code.
   *
   * @remarks
   * WARNING: Changing your domain will invalidate all current user sessions (i.e. users will be logged out).
   *          Also, while your application is being deployed, a small downtime is expected to occur.
   */
  async changeDomain(params) {
    return this.request({
      method: "POST",
      path: joinPaths(basePath6, "change_domain"),
      bodyParams: params
    });
  }
};
var basePath7 = "/blocklist_identifiers";
var BlocklistIdentifierAPI = class extends AbstractAPI {
  static {
    __name(this, "BlocklistIdentifierAPI");
  }
  async getBlocklistIdentifierList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath7,
      queryParams: params
    });
  }
  async createBlocklistIdentifier(params) {
    return this.request({
      method: "POST",
      path: basePath7,
      bodyParams: params
    });
  }
  async deleteBlocklistIdentifier(blocklistIdentifierId) {
    this.requireId(blocklistIdentifierId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath7, blocklistIdentifierId)
    });
  }
};
var basePath8 = "/clients";
var ClientAPI = class extends AbstractAPI {
  static {
    __name(this, "ClientAPI");
  }
  async getClientList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath8,
      queryParams: { ...params, paginated: true }
    });
  }
  async getClient(clientId) {
    this.requireId(clientId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath8, clientId)
    });
  }
  verifyClient(token) {
    return this.request({
      method: "POST",
      path: joinPaths(basePath8, "verify"),
      bodyParams: { token }
    });
  }
  async getHandshakePayload(queryParams) {
    return this.request({
      method: "GET",
      path: joinPaths(basePath8, "handshake_payload"),
      queryParams
    });
  }
};
var basePath9 = "/domains";
var DomainAPI = class extends AbstractAPI {
  static {
    __name(this, "DomainAPI");
  }
  async list() {
    return this.request({
      method: "GET",
      path: basePath9
    });
  }
  async add(params) {
    return this.request({
      method: "POST",
      path: basePath9,
      bodyParams: params
    });
  }
  async update(params) {
    const { domainId, ...bodyParams } = params;
    this.requireId(domainId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath9, domainId),
      bodyParams
    });
  }
  /**
   * Deletes a satellite domain for the instance.
   * It is currently not possible to delete the instance's primary domain.
   */
  async delete(satelliteDomainId) {
    return this.deleteDomain(satelliteDomainId);
  }
  /**
   * @deprecated Use `delete` instead
   */
  async deleteDomain(satelliteDomainId) {
    this.requireId(satelliteDomainId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath9, satelliteDomainId)
    });
  }
};
var basePath10 = "/email_addresses";
var EmailAddressAPI = class extends AbstractAPI {
  static {
    __name(this, "EmailAddressAPI");
  }
  async getEmailAddress(emailAddressId) {
    this.requireId(emailAddressId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath10, emailAddressId)
    });
  }
  async createEmailAddress(params) {
    return this.request({
      method: "POST",
      path: basePath10,
      bodyParams: params
    });
  }
  async updateEmailAddress(emailAddressId, params = {}) {
    this.requireId(emailAddressId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath10, emailAddressId),
      bodyParams: params
    });
  }
  async deleteEmailAddress(emailAddressId) {
    this.requireId(emailAddressId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath10, emailAddressId)
    });
  }
};
var basePath11 = "/oauth_applications/access_tokens";
var IdPOAuthAccessTokenApi = class extends AbstractAPI {
  static {
    __name(this, "IdPOAuthAccessTokenApi");
  }
  async verify(accessToken) {
    return this.request({
      method: "POST",
      path: joinPaths(basePath11, "verify"),
      bodyParams: { access_token: accessToken }
    });
  }
  /**
   * @deprecated Use `verify()` instead. This method will be removed in the next major release.
   */
  async verifyAccessToken(accessToken) {
    deprecated("idPOAuthAccessToken.verifyAccessToken()", "Use `idPOAuthAccessToken.verify()` instead.");
    return this.verify(accessToken);
  }
};
var basePath12 = "/instance";
var InstanceAPI = class extends AbstractAPI {
  static {
    __name(this, "InstanceAPI");
  }
  async get() {
    return this.request({
      method: "GET",
      path: basePath12
    });
  }
  async update(params) {
    return this.request({
      method: "PATCH",
      path: basePath12,
      bodyParams: params
    });
  }
  async updateRestrictions(params) {
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath12, "restrictions"),
      bodyParams: params
    });
  }
  async updateOrganizationSettings(params) {
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath12, "organization_settings"),
      bodyParams: params
    });
  }
};
var basePath13 = "/invitations";
var InvitationAPI = class extends AbstractAPI {
  static {
    __name(this, "InvitationAPI");
  }
  async getInvitationList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath13,
      queryParams: { ...params, paginated: true }
    });
  }
  async createInvitation(params) {
    return this.request({
      method: "POST",
      path: basePath13,
      bodyParams: params
    });
  }
  async createInvitationBulk(params) {
    return this.request({
      method: "POST",
      path: joinPaths(basePath13, "bulk"),
      bodyParams: params
    });
  }
  async revokeInvitation(invitationId) {
    this.requireId(invitationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath13, invitationId, "revoke")
    });
  }
};
var basePath14 = "/machines";
var MachineApi = class extends AbstractAPI {
  static {
    __name(this, "MachineApi");
  }
  async get(machineId) {
    this.requireId(machineId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath14, machineId)
    });
  }
  async list(queryParams = {}) {
    return this.request({
      method: "GET",
      path: basePath14,
      queryParams
    });
  }
  async create(bodyParams) {
    return this.request({
      method: "POST",
      path: basePath14,
      bodyParams
    });
  }
  async update(params) {
    const { machineId, ...bodyParams } = params;
    this.requireId(machineId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath14, machineId),
      bodyParams
    });
  }
  async delete(machineId) {
    this.requireId(machineId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath14, machineId)
    });
  }
  async getSecretKey(machineId) {
    this.requireId(machineId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath14, machineId, "secret_key")
    });
  }
  async rotateSecretKey(params) {
    const { machineId, previousTokenTtl } = params;
    this.requireId(machineId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath14, machineId, "secret_key", "rotate"),
      bodyParams: {
        previousTokenTtl
      }
    });
  }
  /**
   * Creates a new machine scope, allowing the specified machine to access another machine.
   *
   * @param machineId - The ID of the machine that will have access to another machine.
   * @param toMachineId - The ID of the machine that will be scoped to the current machine.
   */
  async createScope(machineId, toMachineId) {
    this.requireId(machineId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath14, machineId, "scopes"),
      bodyParams: {
        toMachineId
      }
    });
  }
  /**
   * Deletes a machine scope, removing access from one machine to another.
   *
   * @param machineId - The ID of the machine that has access to another machine.
   * @param otherMachineId - The ID of the machine that is being accessed.
   */
  async deleteScope(machineId, otherMachineId) {
    this.requireId(machineId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath14, machineId, "scopes", otherMachineId)
    });
  }
};
var IdPOAuthAccessToken = class _IdPOAuthAccessToken {
  static {
    __name(this, "_IdPOAuthAccessToken");
  }
  constructor(id, clientId, type, subject, scopes, revoked, revocationReason, expired, expiration, createdAt, updatedAt) {
    this.id = id;
    this.clientId = clientId;
    this.type = type;
    this.subject = subject;
    this.scopes = scopes;
    this.revoked = revoked;
    this.revocationReason = revocationReason;
    this.expired = expired;
    this.expiration = expiration;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _IdPOAuthAccessToken(
      data.id,
      data.client_id,
      data.type,
      data.subject,
      data.scopes,
      data.revoked,
      data.revocation_reason,
      data.expired,
      data.expiration,
      data.created_at,
      data.updated_at
    );
  }
  /**
   * Creates an IdPOAuthAccessToken from a JWT payload.
   * Maps standard JWT claims and OAuth-specific fields to token properties.
   */
  static fromJwtPayload(payload, clockSkewInMs = 5e3) {
    const oauthPayload = payload;
    return new _IdPOAuthAccessToken(
      oauthPayload.jti ?? "",
      oauthPayload.client_id ?? "",
      "oauth_token",
      payload.sub,
      oauthPayload.scp ?? oauthPayload.scope?.split(" ") ?? [],
      false,
      null,
      payload.exp * 1e3 <= Date.now() - clockSkewInMs,
      payload.exp,
      payload.iat,
      payload.iat
    );
  }
};
var M2MToken = class _M2MToken {
  static {
    __name(this, "_M2MToken");
  }
  constructor(id, subject, scopes, claims, revoked, revocationReason, expired, expiration, createdAt, updatedAt, token) {
    this.id = id;
    this.subject = subject;
    this.scopes = scopes;
    this.claims = claims;
    this.revoked = revoked;
    this.revocationReason = revocationReason;
    this.expired = expired;
    this.expiration = expiration;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.token = token;
  }
  static fromJSON(data) {
    return new _M2MToken(
      data.id,
      data.subject,
      data.scopes,
      data.claims,
      data.revoked,
      data.revocation_reason,
      data.expired,
      data.expiration,
      data.created_at,
      data.updated_at,
      data.token
    );
  }
  static fromJwtPayload(payload, clockSkewInMs = 5e3) {
    return new _M2MToken(
      payload.jti ?? "",
      // jti should always be present in Clerk-issued M2M JWTs
      payload.sub,
      payload.scopes?.split(" ") ?? payload.aud ?? [],
      null,
      false,
      null,
      payload.exp * 1e3 <= Date.now() - clockSkewInMs,
      payload.exp * 1e3,
      // milliseconds — expiration, converted from JWT exp claim
      payload.iat * 1e3,
      // milliseconds — createdAt, converted from JWT iat claim
      payload.iat * 1e3
      // milliseconds — updatedAt, no JWT equivalent; defaults to iat
    );
  }
};
var cache2 = {};
var lastUpdatedAt = 0;
function getFromCache(kid) {
  return cache2[kid];
}
__name(getFromCache, "getFromCache");
function getCacheValues() {
  return Object.values(cache2);
}
__name(getCacheValues, "getCacheValues");
function setInCache(cacheKey, jwk, shouldExpire = true) {
  cache2[cacheKey] = jwk;
  lastUpdatedAt = shouldExpire ? Date.now() : -1;
}
__name(setInCache, "setInCache");
var PEM_HEADER = "-----BEGIN PUBLIC KEY-----";
var PEM_TRAILER = "-----END PUBLIC KEY-----";
var RSA_PREFIX = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA";
var RSA_SUFFIX = "IDAQAB";
function loadClerkJwkFromPem(params) {
  const { kid, pem } = params;
  const prefixedKid = `local-${kid}`;
  const cachedJwk = getFromCache(prefixedKid);
  if (cachedJwk) {
    return cachedJwk;
  }
  if (!pem) {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.SetClerkJWTKey,
      message: "Missing local JWK.",
      reason: TokenVerificationErrorReason.LocalJWKMissing
    });
  }
  const modulus = pem.replace(/\r\n|\n|\r/g, "").replace(PEM_HEADER, "").replace(PEM_TRAILER, "").replace(RSA_PREFIX, "").replace(RSA_SUFFIX, "").replace(/\+/g, "-").replace(/\//g, "_");
  const jwk = { kid: prefixedKid, kty: "RSA", alg: "RS256", n: modulus, e: "AQAB" };
  setInCache(prefixedKid, jwk, false);
  return jwk;
}
__name(loadClerkJwkFromPem, "loadClerkJwkFromPem");
async function loadClerkJWKFromRemote(params) {
  const { secretKey, apiUrl = API_URL, apiVersion = API_VERSION, kid, skipJwksCache } = params;
  if (skipJwksCache || cacheHasExpired() || !getFromCache(kid)) {
    if (!secretKey) {
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.ContactSupport,
        message: "Failed to load JWKS from Clerk Backend or Frontend API.",
        reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
      });
    }
    const fetcher = /* @__PURE__ */ __name(() => fetchJWKSFromBAPI(apiUrl, secretKey, apiVersion), "fetcher");
    const { keys } = await retry(fetcher);
    if (!keys || !keys.length) {
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.ContactSupport,
        message: "The JWKS endpoint did not contain any signing keys. Contact support@clerk.com.",
        reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
      });
    }
    keys.forEach((key) => setInCache(key.kid, key));
  }
  const jwk = getFromCache(kid);
  if (!jwk) {
    const cacheValues = getCacheValues();
    const jwkKeys = cacheValues.map((jwk2) => jwk2.kid).sort().join(", ");
    throw new TokenVerificationError({
      action: `Go to your Dashboard and validate your secret and public keys are correct. ${TokenVerificationErrorAction.ContactSupport} if the issue persists.`,
      message: `Unable to find a signing key in JWKS that matches the kid='${kid}' of the provided session token. Please make sure that the __session cookie or the HTTP authorization header contain a Clerk-generated session JWT. The following kid is available: ${jwkKeys}`,
      reason: TokenVerificationErrorReason.JWKKidMismatch
    });
  }
  return jwk;
}
__name(loadClerkJWKFromRemote, "loadClerkJWKFromRemote");
async function fetchJWKSFromBAPI(apiUrl, key, apiVersion) {
  if (!key) {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.SetClerkSecretKey,
      message: "Missing Clerk Secret Key or API Key. Go to https://dashboard.clerk.com and get your key for your instance.",
      reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
    });
  }
  const url = new URL(apiUrl);
  url.pathname = joinPaths(url.pathname, apiVersion, "/jwks");
  const response = await runtime.fetch(url.href, {
    headers: {
      Authorization: `Bearer ${key}`,
      "Clerk-API-Version": SUPPORTED_BAPI_VERSION,
      "Content-Type": "application/json",
      "User-Agent": USER_AGENT
    }
  });
  if (!response.ok) {
    const json = await response.json();
    const invalidSecretKeyError = getErrorObjectByCode(json?.errors, TokenVerificationErrorCode.InvalidSecretKey);
    if (invalidSecretKeyError) {
      const reason = TokenVerificationErrorReason.InvalidSecretKey;
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.ContactSupport,
        message: invalidSecretKeyError.message,
        reason
      });
    }
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.ContactSupport,
      message: `Error loading Clerk JWKS from ${url.href} with code=${response.status}`,
      reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
    });
  }
  return response.json();
}
__name(fetchJWKSFromBAPI, "fetchJWKSFromBAPI");
function cacheHasExpired() {
  if (lastUpdatedAt === -1) {
    return false;
  }
  const isExpired = Date.now() - lastUpdatedAt >= MAX_CACHE_LAST_UPDATED_AT_SECONDS * 1e3;
  if (isExpired) {
    cache2 = {};
  }
  return isExpired;
}
__name(cacheHasExpired, "cacheHasExpired");
var getErrorObjectByCode = /* @__PURE__ */ __name((errors, code) => {
  if (!errors) {
    return null;
  }
  return errors.find((err) => err.code === code);
}, "getErrorObjectByCode");
var M2M_TOKEN_PREFIX = "mt_";
var M2M_SUBJECT_PREFIX = "mch_";
var OAUTH_TOKEN_PREFIX = "oat_";
var API_KEY_PREFIX = "ak_";
var MACHINE_TOKEN_PREFIXES = [M2M_TOKEN_PREFIX, OAUTH_TOKEN_PREFIX, API_KEY_PREFIX];
var JwtFormatRegExp = /^[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+$/;
function isJwtFormat(token) {
  return JwtFormatRegExp.test(token);
}
__name(isJwtFormat, "isJwtFormat");
var OAUTH_ACCESS_TOKEN_TYPES = ["at+jwt", "application/at+jwt"];
function isOAuthJwt(token) {
  if (!isJwtFormat(token)) {
    return false;
  }
  try {
    const { data, errors } = decodeJwt(token);
    return !errors && !!data && OAUTH_ACCESS_TOKEN_TYPES.includes(data.header.typ);
  } catch {
    return false;
  }
}
__name(isOAuthJwt, "isOAuthJwt");
function isM2MJwt(token) {
  if (!isJwtFormat(token)) {
    return false;
  }
  try {
    const { data, errors } = decodeJwt(token);
    return !errors && !!data && typeof data.payload.sub === "string" && data.payload.sub.startsWith(M2M_SUBJECT_PREFIX);
  } catch {
    return false;
  }
}
__name(isM2MJwt, "isM2MJwt");
function isMachineJwt(token) {
  return isOAuthJwt(token) || isM2MJwt(token);
}
__name(isMachineJwt, "isMachineJwt");
function isMachineTokenByPrefix(token) {
  return MACHINE_TOKEN_PREFIXES.some((prefix) => token.startsWith(prefix));
}
__name(isMachineTokenByPrefix, "isMachineTokenByPrefix");
function isMachineToken(token) {
  return isMachineTokenByPrefix(token) || isOAuthJwt(token) || isM2MJwt(token);
}
__name(isMachineToken, "isMachineToken");
function getMachineTokenType(token) {
  if (token.startsWith(M2M_TOKEN_PREFIX) || isM2MJwt(token)) {
    return TokenType.M2MToken;
  }
  if (token.startsWith(OAUTH_TOKEN_PREFIX) || isOAuthJwt(token)) {
    return TokenType.OAuthToken;
  }
  if (token.startsWith(API_KEY_PREFIX)) {
    return TokenType.ApiKey;
  }
  throw new Error("Unknown machine token type");
}
__name(getMachineTokenType, "getMachineTokenType");
var isTokenTypeAccepted = /* @__PURE__ */ __name((tokenType, acceptsToken) => {
  if (!tokenType) {
    return false;
  }
  if (acceptsToken === "any") {
    return true;
  }
  const tokenTypes = Array.isArray(acceptsToken) ? acceptsToken : [acceptsToken];
  return tokenTypes.includes(tokenType);
}, "isTokenTypeAccepted");
var MACHINE_TOKEN_TYPES = /* @__PURE__ */ new Set([TokenType.ApiKey, TokenType.M2MToken, TokenType.OAuthToken]);
function isMachineTokenType(type) {
  return MACHINE_TOKEN_TYPES.has(type);
}
__name(isMachineTokenType, "isMachineTokenType");
async function resolveKeyAndVerifyJwt(token, kid, options, headerType) {
  try {
    let key;
    if (options.jwtKey) {
      key = loadClerkJwkFromPem({ kid, pem: options.jwtKey });
    } else if (options.secretKey) {
      key = await loadClerkJWKFromRemote({ ...options, kid });
    } else {
      return {
        error: new MachineTokenVerificationError({
          action: TokenVerificationErrorAction.SetClerkJWTKey,
          message: "Failed to resolve JWK during verification.",
          code: MachineTokenVerificationErrorCode.TokenVerificationFailed
        })
      };
    }
    const { data: payload, errors: verifyErrors } = await verifyJwt(token, {
      ...options,
      key,
      ...headerType ? { headerType } : {}
    });
    if (verifyErrors) {
      return {
        error: new MachineTokenVerificationError({
          code: MachineTokenVerificationErrorCode.TokenVerificationFailed,
          message: verifyErrors[0].message
        })
      };
    }
    return { payload };
  } catch (error) {
    return {
      error: new MachineTokenVerificationError({
        code: MachineTokenVerificationErrorCode.TokenVerificationFailed,
        message: error.message
      })
    };
  }
}
__name(resolveKeyAndVerifyJwt, "resolveKeyAndVerifyJwt");
async function verifyM2MJwt(token, decoded, options) {
  const result2 = await resolveKeyAndVerifyJwt(token, decoded.header.kid, options);
  if ("error" in result2) {
    return { data: void 0, tokenType: TokenType.M2MToken, errors: [result2.error] };
  }
  return {
    data: M2MToken.fromJwtPayload(result2.payload, options.clockSkewInMs),
    tokenType: TokenType.M2MToken,
    errors: void 0
  };
}
__name(verifyM2MJwt, "verifyM2MJwt");
async function verifyOAuthJwt(token, decoded, options) {
  const result2 = await resolveKeyAndVerifyJwt(token, decoded.header.kid, options, OAUTH_ACCESS_TOKEN_TYPES);
  if ("error" in result2) {
    return { data: void 0, tokenType: TokenType.OAuthToken, errors: [result2.error] };
  }
  return {
    data: IdPOAuthAccessToken.fromJwtPayload(result2.payload, options.clockSkewInMs),
    tokenType: TokenType.OAuthToken,
    errors: void 0
  };
}
__name(verifyOAuthJwt, "verifyOAuthJwt");
var basePath15 = "/m2m_tokens";
var _verifyOptions;
var _M2MTokenApi_instances;
var createRequestOptions_fn;
var verifyJwtFormat_fn;
var M2MTokenApi = class extends AbstractAPI {
  static {
    __name(this, "M2MTokenApi");
  }
  /**
   * @param verifyOptions - JWT verification options (secretKey, apiUrl, etc.).
   * Passed explicitly because BuildRequestOptions are captured inside the buildRequest closure
   * and are not accessible from the RequestFunction itself.
   */
  constructor(request, verifyOptions = {}) {
    super(request);
    __privateAdd(this, _M2MTokenApi_instances);
    __privateAdd(this, _verifyOptions);
    __privateSet(this, _verifyOptions, verifyOptions);
  }
  async list(queryParams) {
    return this.request({
      method: "GET",
      path: basePath15,
      queryParams
    });
  }
  async createToken(params) {
    const { claims = null, machineSecretKey, secondsUntilExpiration = null, tokenFormat = "opaque" } = params || {};
    const requestOptions = __privateMethod(this, _M2MTokenApi_instances, createRequestOptions_fn).call(this, {
      method: "POST",
      path: basePath15,
      bodyParams: {
        secondsUntilExpiration,
        claims,
        tokenFormat
      }
    }, machineSecretKey);
    return this.request(requestOptions);
  }
  async revokeToken(params) {
    const { m2mTokenId, revocationReason = null, machineSecretKey } = params;
    this.requireId(m2mTokenId);
    const requestOptions = __privateMethod(this, _M2MTokenApi_instances, createRequestOptions_fn).call(this, {
      method: "POST",
      path: joinPaths(basePath15, m2mTokenId, "revoke"),
      bodyParams: {
        revocationReason
      }
    }, machineSecretKey);
    return this.request(requestOptions);
  }
  async verify(params) {
    const { token, machineSecretKey } = params;
    if (isM2MJwt(token)) {
      return __privateMethod(this, _M2MTokenApi_instances, verifyJwtFormat_fn).call(this, token);
    }
    const requestOptions = __privateMethod(this, _M2MTokenApi_instances, createRequestOptions_fn).call(this, {
      method: "POST",
      path: joinPaths(basePath15, "verify"),
      bodyParams: { token }
    }, machineSecretKey);
    return this.request(requestOptions);
  }
  /**
   * @deprecated Use `verify()` instead. This method will be removed in the next major release.
   */
  async verifyToken(params) {
    deprecated("m2m.verifyToken()", "Use `m2m.verify()` instead.");
    return this.verify(params);
  }
};
_verifyOptions = /* @__PURE__ */ new WeakMap();
_M2MTokenApi_instances = /* @__PURE__ */ new WeakSet();
createRequestOptions_fn = /* @__PURE__ */ __name(function(options, machineSecretKey) {
  if (machineSecretKey) {
    return {
      ...options,
      headerParams: {
        ...options.headerParams,
        Authorization: `Bearer ${machineSecretKey}`
      }
    };
  }
  return options;
}, "createRequestOptions_fn");
verifyJwtFormat_fn = /* @__PURE__ */ __name(async function(token) {
  let decoded;
  try {
    const { data, errors } = decodeJwt(token);
    if (errors) {
      throw errors[0];
    }
    decoded = data;
  } catch (e) {
    throw new MachineTokenVerificationError({
      code: MachineTokenVerificationErrorCode.TokenInvalid,
      message: e.message
    });
  }
  const result2 = await verifyM2MJwt(token, decoded, __privateGet(this, _verifyOptions));
  if (result2.errors) {
    throw result2.errors[0];
  }
  return result2.data;
}, "verifyJwtFormat_fn");
var basePath16 = "/jwks";
var JwksAPI = class extends AbstractAPI {
  static {
    __name(this, "JwksAPI");
  }
  async getJwks() {
    return this.request({
      method: "GET",
      path: basePath16
    });
  }
};
var basePath17 = "/jwt_templates";
var JwtTemplatesApi = class extends AbstractAPI {
  static {
    __name(this, "JwtTemplatesApi");
  }
  async list(params = {}) {
    return this.request({
      method: "GET",
      path: basePath17,
      queryParams: { ...params, paginated: true }
    });
  }
  async get(templateId) {
    this.requireId(templateId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath17, templateId)
    });
  }
  async create(params) {
    return this.request({
      method: "POST",
      path: basePath17,
      bodyParams: params
    });
  }
  async update(params) {
    const { templateId, ...bodyParams } = params;
    this.requireId(templateId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath17, templateId),
      bodyParams
    });
  }
  async delete(templateId) {
    this.requireId(templateId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath17, templateId)
    });
  }
};
var basePath18 = "/organizations";
var OrganizationAPI = class extends AbstractAPI {
  static {
    __name(this, "OrganizationAPI");
  }
  async getOrganizationList(params) {
    return this.request({
      method: "GET",
      path: basePath18,
      queryParams: params
    });
  }
  async createOrganization(params) {
    return this.request({
      method: "POST",
      path: basePath18,
      bodyParams: params
    });
  }
  async getOrganization(params) {
    const { includeMembersCount } = params;
    const organizationIdOrSlug = "organizationId" in params ? params.organizationId : params.slug;
    this.requireId(organizationIdOrSlug);
    return this.request({
      method: "GET",
      path: joinPaths(basePath18, organizationIdOrSlug),
      queryParams: {
        includeMembersCount
      }
    });
  }
  async updateOrganization(organizationId, params) {
    this.requireId(organizationId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath18, organizationId),
      bodyParams: params
    });
  }
  async updateOrganizationLogo(organizationId, params) {
    this.requireId(organizationId);
    const formData = new runtime.FormData();
    formData.append("file", params?.file);
    if (params?.uploaderUserId) {
      formData.append("uploader_user_id", params?.uploaderUserId);
    }
    return this.request({
      method: "PUT",
      path: joinPaths(basePath18, organizationId, "logo"),
      formData
    });
  }
  async deleteOrganizationLogo(organizationId) {
    this.requireId(organizationId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath18, organizationId, "logo")
    });
  }
  async updateOrganizationMetadata(organizationId, params) {
    this.requireId(organizationId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath18, organizationId, "metadata"),
      bodyParams: params
    });
  }
  async deleteOrganization(organizationId) {
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath18, organizationId)
    });
  }
  async getOrganizationMembershipList(params) {
    const { organizationId, ...queryParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath18, organizationId, "memberships"),
      queryParams
    });
  }
  async getInstanceOrganizationMembershipList(params) {
    return this.request({
      method: "GET",
      path: "/organization_memberships",
      queryParams: params
    });
  }
  async createOrganizationMembership(params) {
    const { organizationId, ...bodyParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath18, organizationId, "memberships"),
      bodyParams
    });
  }
  async updateOrganizationMembership(params) {
    const { organizationId, userId, ...bodyParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath18, organizationId, "memberships", userId),
      bodyParams
    });
  }
  async updateOrganizationMembershipMetadata(params) {
    const { organizationId, userId, ...bodyParams } = params;
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath18, organizationId, "memberships", userId, "metadata"),
      bodyParams
    });
  }
  async deleteOrganizationMembership(params) {
    const { organizationId, userId } = params;
    this.requireId(organizationId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath18, organizationId, "memberships", userId)
    });
  }
  async getOrganizationInvitationList(params) {
    const { organizationId, ...queryParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath18, organizationId, "invitations"),
      queryParams
    });
  }
  async createOrganizationInvitation(params) {
    const { organizationId, ...bodyParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath18, organizationId, "invitations"),
      bodyParams
    });
  }
  async createOrganizationInvitationBulk(organizationId, params) {
    this.requireId(organizationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath18, organizationId, "invitations", "bulk"),
      bodyParams: params
    });
  }
  async getOrganizationInvitation(params) {
    const { organizationId, invitationId } = params;
    this.requireId(organizationId);
    this.requireId(invitationId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath18, organizationId, "invitations", invitationId)
    });
  }
  async revokeOrganizationInvitation(params) {
    const { organizationId, invitationId, ...bodyParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath18, organizationId, "invitations", invitationId, "revoke"),
      bodyParams
    });
  }
  async getOrganizationDomainList(params) {
    const { organizationId, ...queryParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath18, organizationId, "domains"),
      queryParams
    });
  }
  async createOrganizationDomain(params) {
    const { organizationId, ...bodyParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath18, organizationId, "domains"),
      bodyParams: {
        ...bodyParams,
        verified: bodyParams.verified ?? true
      }
    });
  }
  async updateOrganizationDomain(params) {
    const { organizationId, domainId, ...bodyParams } = params;
    this.requireId(organizationId);
    this.requireId(domainId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath18, organizationId, "domains", domainId),
      bodyParams
    });
  }
  async deleteOrganizationDomain(params) {
    const { organizationId, domainId } = params;
    this.requireId(organizationId);
    this.requireId(domainId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath18, organizationId, "domains", domainId)
    });
  }
};
var basePath19 = "/oauth_applications";
var OAuthApplicationsApi = class extends AbstractAPI {
  static {
    __name(this, "OAuthApplicationsApi");
  }
  async list(params = {}) {
    return this.request({
      method: "GET",
      path: basePath19,
      queryParams: params
    });
  }
  async get(oauthApplicationId) {
    this.requireId(oauthApplicationId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath19, oauthApplicationId)
    });
  }
  async create(params) {
    return this.request({
      method: "POST",
      path: basePath19,
      bodyParams: params
    });
  }
  async update(params) {
    const { oauthApplicationId, ...bodyParams } = params;
    this.requireId(oauthApplicationId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath19, oauthApplicationId),
      bodyParams
    });
  }
  async delete(oauthApplicationId) {
    this.requireId(oauthApplicationId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath19, oauthApplicationId)
    });
  }
  async rotateSecret(oauthApplicationId) {
    this.requireId(oauthApplicationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath19, oauthApplicationId, "rotate_secret")
    });
  }
};
var basePath20 = "/phone_numbers";
var PhoneNumberAPI = class extends AbstractAPI {
  static {
    __name(this, "PhoneNumberAPI");
  }
  async getPhoneNumber(phoneNumberId) {
    this.requireId(phoneNumberId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath20, phoneNumberId)
    });
  }
  async createPhoneNumber(params) {
    return this.request({
      method: "POST",
      path: basePath20,
      bodyParams: params
    });
  }
  async updatePhoneNumber(phoneNumberId, params = {}) {
    this.requireId(phoneNumberId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath20, phoneNumberId),
      bodyParams: params
    });
  }
  async deletePhoneNumber(phoneNumberId) {
    this.requireId(phoneNumberId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath20, phoneNumberId)
    });
  }
};
var basePath21 = "/proxy_checks";
var ProxyCheckAPI = class extends AbstractAPI {
  static {
    __name(this, "ProxyCheckAPI");
  }
  async verify(params) {
    return this.request({
      method: "POST",
      path: basePath21,
      bodyParams: params
    });
  }
};
var basePath22 = "/redirect_urls";
var RedirectUrlAPI = class extends AbstractAPI {
  static {
    __name(this, "RedirectUrlAPI");
  }
  async getRedirectUrlList() {
    return this.request({
      method: "GET",
      path: basePath22,
      queryParams: { paginated: true }
    });
  }
  async getRedirectUrl(redirectUrlId) {
    this.requireId(redirectUrlId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath22, redirectUrlId)
    });
  }
  async createRedirectUrl(params) {
    return this.request({
      method: "POST",
      path: basePath22,
      bodyParams: params
    });
  }
  async deleteRedirectUrl(redirectUrlId) {
    this.requireId(redirectUrlId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath22, redirectUrlId)
    });
  }
};
var basePath23 = "/saml_connections";
var SamlConnectionAPI = class extends AbstractAPI {
  static {
    __name(this, "SamlConnectionAPI");
  }
  async getSamlConnectionList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath23,
      queryParams: params
    });
  }
  async createSamlConnection(params) {
    return this.request({
      method: "POST",
      path: basePath23,
      bodyParams: params,
      options: {
        deepSnakecaseBodyParamKeys: true
      }
    });
  }
  async getSamlConnection(samlConnectionId) {
    this.requireId(samlConnectionId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath23, samlConnectionId)
    });
  }
  async updateSamlConnection(samlConnectionId, params = {}) {
    this.requireId(samlConnectionId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath23, samlConnectionId),
      bodyParams: params,
      options: {
        deepSnakecaseBodyParamKeys: true
      }
    });
  }
  async deleteSamlConnection(samlConnectionId) {
    this.requireId(samlConnectionId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath23, samlConnectionId)
    });
  }
};
var basePath24 = "/sessions";
var SessionAPI = class extends AbstractAPI {
  static {
    __name(this, "SessionAPI");
  }
  async getSessionList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath24,
      queryParams: { ...params, paginated: true }
    });
  }
  async getSession(sessionId) {
    this.requireId(sessionId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath24, sessionId)
    });
  }
  async createSession(params) {
    return this.request({
      method: "POST",
      path: basePath24,
      bodyParams: params
    });
  }
  async revokeSession(sessionId) {
    this.requireId(sessionId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath24, sessionId, "revoke")
    });
  }
  async verifySession(sessionId, token) {
    this.requireId(sessionId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath24, sessionId, "verify"),
      bodyParams: { token }
    });
  }
  /**
   * Retrieves a session token or generates a JWT using a specified template.
   *
   * @param sessionId - The ID of the session for which to generate the token
   * @param template - Optional name of the JWT template configured in the Clerk Dashboard.
   * @param expiresInSeconds - Optional expiration time for the token in seconds.
   *   If not provided, uses the default expiration.
   *
   * @returns A promise that resolves to the generated token
   *
   * @throws {Error} When sessionId is invalid or empty
   */
  async getToken(sessionId, template, expiresInSeconds) {
    this.requireId(sessionId);
    const path = template ? joinPaths(basePath24, sessionId, "tokens", template) : joinPaths(basePath24, sessionId, "tokens");
    const requestOptions = {
      method: "POST",
      path
    };
    if (expiresInSeconds !== void 0) {
      requestOptions.bodyParams = { expires_in_seconds: expiresInSeconds };
    }
    return this.request(requestOptions);
  }
  async refreshSession(sessionId, params) {
    this.requireId(sessionId);
    const { suffixed_cookies, ...restParams } = params;
    return this.request({
      method: "POST",
      path: joinPaths(basePath24, sessionId, "refresh"),
      bodyParams: restParams,
      queryParams: { suffixed_cookies }
    });
  }
};
var basePath25 = "/sign_in_tokens";
var SignInTokenAPI = class extends AbstractAPI {
  static {
    __name(this, "SignInTokenAPI");
  }
  async createSignInToken(params) {
    return this.request({
      method: "POST",
      path: basePath25,
      bodyParams: params
    });
  }
  async revokeSignInToken(signInTokenId) {
    this.requireId(signInTokenId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath25, signInTokenId, "revoke")
    });
  }
};
var basePath26 = "/sign_ups";
var SignUpAPI = class extends AbstractAPI {
  static {
    __name(this, "SignUpAPI");
  }
  async get(signUpAttemptId) {
    this.requireId(signUpAttemptId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath26, signUpAttemptId)
    });
  }
  async update(params) {
    const { signUpAttemptId, ...bodyParams } = params;
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath26, signUpAttemptId),
      bodyParams
    });
  }
};
var basePath27 = "/testing_tokens";
var TestingTokenAPI = class extends AbstractAPI {
  static {
    __name(this, "TestingTokenAPI");
  }
  async createTestingToken() {
    return this.request({
      method: "POST",
      path: basePath27
    });
  }
};
var basePath28 = "/users";
var UserAPI = class extends AbstractAPI {
  static {
    __name(this, "UserAPI");
  }
  async getUserList(params = {}) {
    const { limit, offset, orderBy, ...userCountParams } = params;
    const [data, totalCount] = await Promise.all([
      this.request({
        method: "GET",
        path: basePath28,
        queryParams: params
      }),
      this.getCount(userCountParams)
    ]);
    return { data, totalCount };
  }
  async getUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath28, userId)
    });
  }
  async createUser(params) {
    return this.request({
      method: "POST",
      path: basePath28,
      bodyParams: params
    });
  }
  async updateUser(userId, params = {}) {
    this.requireId(userId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath28, userId),
      bodyParams: params
    });
  }
  async updateUserProfileImage(userId, params) {
    this.requireId(userId);
    const formData = new runtime.FormData();
    formData.append("file", params?.file);
    return this.request({
      method: "POST",
      path: joinPaths(basePath28, userId, "profile_image"),
      formData
    });
  }
  async updateUserMetadata(userId, params) {
    this.requireId(userId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath28, userId, "metadata"),
      bodyParams: params
    });
  }
  async deleteUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath28, userId)
    });
  }
  async getCount(params = {}) {
    return this.request({
      method: "GET",
      path: joinPaths(basePath28, "count"),
      queryParams: params
    });
  }
  async getUserOauthAccessToken(userId, provider) {
    this.requireId(userId);
    const hasPrefix = provider.startsWith("oauth_");
    const _provider = hasPrefix ? provider : `oauth_${provider}`;
    if (hasPrefix) {
      deprecated(
        "getUserOauthAccessToken(userId, provider)",
        "Remove the `oauth_` prefix from the `provider` argument."
      );
    }
    return this.request({
      method: "GET",
      path: joinPaths(basePath28, userId, "oauth_access_tokens", _provider),
      queryParams: { paginated: true }
    });
  }
  async disableUserMFA(userId) {
    this.requireId(userId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath28, userId, "mfa")
    });
  }
  async getOrganizationMembershipList(params) {
    const { userId, limit, offset } = params;
    this.requireId(userId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath28, userId, "organization_memberships"),
      queryParams: { limit, offset }
    });
  }
  async getOrganizationInvitationList(params) {
    const { userId, ...queryParams } = params;
    this.requireId(userId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath28, userId, "organization_invitations"),
      queryParams
    });
  }
  async verifyPassword(params) {
    const { userId, password } = params;
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath28, userId, "verify_password"),
      bodyParams: { password }
    });
  }
  async verifyTOTP(params) {
    const { userId, code } = params;
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath28, userId, "verify_totp"),
      bodyParams: { code }
    });
  }
  async banUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath28, userId, "ban")
    });
  }
  async unbanUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath28, userId, "unban")
    });
  }
  async lockUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath28, userId, "lock")
    });
  }
  async unlockUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath28, userId, "unlock")
    });
  }
  async deleteUserProfileImage(userId) {
    this.requireId(userId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath28, userId, "profile_image")
    });
  }
  async deleteUserPasskey(params) {
    this.requireId(params.userId);
    this.requireId(params.passkeyIdentificationId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath28, params.userId, "passkeys", params.passkeyIdentificationId)
    });
  }
  async deleteUserWeb3Wallet(params) {
    this.requireId(params.userId);
    this.requireId(params.web3WalletIdentificationId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath28, params.userId, "web3_wallets", params.web3WalletIdentificationId)
    });
  }
  async deleteUserExternalAccount(params) {
    this.requireId(params.userId);
    this.requireId(params.externalAccountId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath28, params.userId, "external_accounts", params.externalAccountId)
    });
  }
  async deleteUserBackupCodes(userId) {
    this.requireId(userId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath28, userId, "backup_code")
    });
  }
  async deleteUserTOTP(userId) {
    this.requireId(userId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath28, userId, "totp")
    });
  }
  async setPasswordCompromised(userId, params = {
    revokeAllSessions: false
  }) {
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath28, userId, "password", "set_compromised"),
      bodyParams: params
    });
  }
  async unsetPasswordCompromised(userId) {
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath28, userId, "password", "unset_compromised")
    });
  }
};
var basePath29 = "/waitlist_entries";
var WaitlistEntryAPI = class extends AbstractAPI {
  static {
    __name(this, "WaitlistEntryAPI");
  }
  /**
   * List waitlist entries.
   * @param params Optional parameters (e.g., `query`, `status`, `orderBy`).
   */
  async list(params = {}) {
    return this.request({
      method: "GET",
      path: basePath29,
      queryParams: params
    });
  }
  /**
   * Create a waitlist entry.
   * @param params The parameters for creating a waitlist entry.
   */
  async create(params) {
    return this.request({
      method: "POST",
      path: basePath29,
      bodyParams: params
    });
  }
  /**
   * Bulk create waitlist entries.
   * @param params An array of parameters for creating waitlist entries.
   */
  async createBulk(params) {
    return this.request({
      method: "POST",
      path: joinPaths(basePath29, "bulk"),
      bodyParams: params
    });
  }
  /**
   * Invite a waitlist entry.
   * @param id The waitlist entry ID.
   * @param params Optional parameters (e.g., `ignoreExisting`).
   */
  async invite(id, params = {}) {
    this.requireId(id);
    return this.request({
      method: "POST",
      path: joinPaths(basePath29, id, "invite"),
      bodyParams: params
    });
  }
  /**
   * Reject a waitlist entry.
   * @param id The waitlist entry ID.
   */
  async reject(id) {
    this.requireId(id);
    return this.request({
      method: "POST",
      path: joinPaths(basePath29, id, "reject")
    });
  }
  /**
   * Delete a waitlist entry.
   * @param id The waitlist entry ID.
   */
  async delete(id) {
    this.requireId(id);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath29, id)
    });
  }
};
var basePath30 = "/webhooks";
var WebhookAPI = class extends AbstractAPI {
  static {
    __name(this, "WebhookAPI");
  }
  async createSvixApp() {
    return this.request({
      method: "POST",
      path: joinPaths(basePath30, "svix")
    });
  }
  async generateSvixAuthURL() {
    return this.request({
      method: "POST",
      path: joinPaths(basePath30, "svix_url")
    });
  }
  async deleteSvixApp() {
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath30, "svix")
    });
  }
};
var basePath31 = "/billing";
var organizationBasePath = "/organizations";
var userBasePath = "/users";
var BillingAPI = class extends AbstractAPI {
  static {
    __name(this, "BillingAPI");
  }
  /**
   * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
   */
  async getPlanList(params) {
    return this.request({
      method: "GET",
      path: joinPaths(basePath31, "plans"),
      queryParams: params
    });
  }
  /**
   * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
   */
  async cancelSubscriptionItem(subscriptionItemId, params) {
    this.requireId(subscriptionItemId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath31, "subscription_items", subscriptionItemId),
      queryParams: params
    });
  }
  /**
   * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
   */
  async extendSubscriptionItemFreeTrial(subscriptionItemId, params) {
    this.requireId(subscriptionItemId);
    return this.request({
      method: "POST",
      path: joinPaths("/billing", "subscription_items", subscriptionItemId, "extend_free_trial"),
      bodyParams: params
    });
  }
  /**
   * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
   */
  async getOrganizationBillingSubscription(organizationId) {
    this.requireId(organizationId);
    return this.request({
      method: "GET",
      path: joinPaths(organizationBasePath, organizationId, "billing", "subscription")
    });
  }
  /**
   * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
   */
  async getUserBillingSubscription(userId) {
    this.requireId(userId);
    return this.request({
      method: "GET",
      path: joinPaths(userBasePath, userId, "billing", "subscription")
    });
  }
};
var isObject2 = /* @__PURE__ */ __name((value) => typeof value === "object" && value !== null, "isObject");
var isObjectCustom = /* @__PURE__ */ __name((value) => isObject2(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date) && !(globalThis.Blob && value instanceof globalThis.Blob), "isObjectCustom");
var mapObjectSkip = Symbol("mapObjectSkip");
var _mapObject = /* @__PURE__ */ __name((object, mapper, options, isSeen = /* @__PURE__ */ new WeakMap()) => {
  options = {
    deep: false,
    target: {},
    ...options
  };
  if (isSeen.has(object)) {
    return isSeen.get(object);
  }
  isSeen.set(object, options.target);
  const { target } = options;
  delete options.target;
  const mapArray = /* @__PURE__ */ __name((array) => array.map((element) => isObjectCustom(element) ? _mapObject(element, mapper, options, isSeen) : element), "mapArray");
  if (Array.isArray(object)) {
    return mapArray(object);
  }
  for (const [key, value] of Object.entries(object)) {
    const mapResult = mapper(key, value, object);
    if (mapResult === mapObjectSkip) {
      continue;
    }
    let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;
    if (newKey === "__proto__") {
      continue;
    }
    if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
      newValue = Array.isArray(newValue) ? mapArray(newValue) : _mapObject(newValue, mapper, options, isSeen);
    }
    target[newKey] = newValue;
  }
  return target;
}, "_mapObject");
function mapObject(object, mapper, options) {
  if (!isObject2(object)) {
    throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
  }
  if (Array.isArray(object)) {
    throw new TypeError("Expected an object, got an array");
  }
  return _mapObject(object, mapper, options);
}
__name(mapObject, "mapObject");
var SPLIT_LOWER_UPPER_RE = new RegExp("([\\p{Ll}\\d])(\\p{Lu})", "gu");
var SPLIT_UPPER_UPPER_RE = new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])", "gu");
var SPLIT_SEPARATE_NUMBER_RE = new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d", "u");
var DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
var SPLIT_REPLACE_VALUE = "$1\0$2";
var DEFAULT_PREFIX_SUFFIX_CHARACTERS = "";
function split(value) {
  let result2 = value.trim();
  result2 = result2.replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE).replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);
  result2 = result2.replace(DEFAULT_STRIP_REGEXP, "\0");
  let start = 0;
  let end = result2.length;
  while (result2.charAt(start) === "\0")
    start++;
  if (start === end)
    return [];
  while (result2.charAt(end - 1) === "\0")
    end--;
  return result2.slice(start, end).split(/\0/g);
}
__name(split, "split");
function splitSeparateNumbers(value) {
  const words = split(value);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const match2 = SPLIT_SEPARATE_NUMBER_RE.exec(word);
    if (match2) {
      const offset = match2.index + (match2[1] ?? match2[2]).length;
      words.splice(i, 1, word.slice(0, offset), word.slice(offset));
    }
  }
  return words;
}
__name(splitSeparateNumbers, "splitSeparateNumbers");
function noCase(input, options) {
  const [prefix, words, suffix] = splitPrefixSuffix(input, options);
  return prefix + words.map(lowerFactory(options?.locale)).join(options?.delimiter ?? " ") + suffix;
}
__name(noCase, "noCase");
function snakeCase(input, options) {
  return noCase(input, { delimiter: "_", ...options });
}
__name(snakeCase, "snakeCase");
function lowerFactory(locale) {
  return locale === false ? (input) => input.toLowerCase() : (input) => input.toLocaleLowerCase(locale);
}
__name(lowerFactory, "lowerFactory");
function splitPrefixSuffix(input, options = {}) {
  const splitFn = options.split ?? (options.separateNumbers ? splitSeparateNumbers : split);
  const prefixCharacters = options.prefixCharacters ?? DEFAULT_PREFIX_SUFFIX_CHARACTERS;
  const suffixCharacters = options.suffixCharacters ?? DEFAULT_PREFIX_SUFFIX_CHARACTERS;
  let prefixIndex = 0;
  let suffixIndex = input.length;
  while (prefixIndex < input.length) {
    const char = input.charAt(prefixIndex);
    if (!prefixCharacters.includes(char))
      break;
    prefixIndex++;
  }
  while (suffixIndex > prefixIndex) {
    const index = suffixIndex - 1;
    const char = input.charAt(index);
    if (!suffixCharacters.includes(char))
      break;
    suffixIndex = index;
  }
  return [
    input.slice(0, prefixIndex),
    splitFn(input.slice(prefixIndex, suffixIndex)),
    input.slice(suffixIndex)
  ];
}
__name(splitPrefixSuffix, "splitPrefixSuffix");
var PlainObjectConstructor = {}.constructor;
function snakecaseKeys(obj, options) {
  if (Array.isArray(obj)) {
    if (obj.some((item) => item.constructor !== PlainObjectConstructor)) {
      throw new Error("obj must be array of plain objects");
    }
    options = { deep: true, exclude: [], parsingOptions: {}, ...options };
    const convertCase2 = options.snakeCase || ((key) => snakeCase(key, options.parsingOptions));
    return obj.map((item) => {
      return mapObject(item, (key, val) => {
        return [
          matches(options.exclude, key) ? key : convertCase2(key),
          val,
          mapperOptions(key, val, options)
        ];
      }, options);
    });
  } else {
    if (obj.constructor !== PlainObjectConstructor) {
      throw new Error("obj must be an plain object");
    }
  }
  options = { deep: true, exclude: [], parsingOptions: {}, ...options };
  const convertCase = options.snakeCase || ((key) => snakeCase(key, options.parsingOptions));
  return mapObject(obj, (key, val) => {
    return [
      matches(options.exclude, key) ? key : convertCase(key),
      val,
      mapperOptions(key, val, options)
    ];
  }, options);
}
__name(snakecaseKeys, "snakecaseKeys");
function matches(patterns, value) {
  return patterns.some((pattern) => {
    return typeof pattern === "string" ? pattern === value : pattern.test(value);
  });
}
__name(matches, "matches");
function mapperOptions(key, val, options) {
  return options.shouldRecurse ? { shouldRecurse: options.shouldRecurse(key, val) } : void 0;
}
__name(mapperOptions, "mapperOptions");
var snakecase_keys_default = snakecaseKeys;
var AccountlessApplication = class _AccountlessApplication {
  static {
    __name(this, "_AccountlessApplication");
  }
  constructor(publishableKey, secretKey, claimUrl, apiKeysUrl) {
    this.publishableKey = publishableKey;
    this.secretKey = secretKey;
    this.claimUrl = claimUrl;
    this.apiKeysUrl = apiKeysUrl;
  }
  static fromJSON(data) {
    return new _AccountlessApplication(data.publishable_key, data.secret_key, data.claim_url, data.api_keys_url);
  }
};
var AgentTask = class _AgentTask {
  static {
    __name(this, "_AgentTask");
  }
  constructor(agentId, taskId, url) {
    this.agentId = agentId;
    this.taskId = taskId;
    this.url = url;
  }
  /**
   * Creates a AgentTask instance from a JSON object.
   *
   * @param data - The JSON object containing agent task data
   * @returns A new AgentTask instance
   */
  static fromJSON(data) {
    return new _AgentTask(data.agent_id, data.task_id, data.url);
  }
};
var ActorToken = class _ActorToken {
  static {
    __name(this, "_ActorToken");
  }
  constructor(id, status, userId, actor, token, url, createdAt, updatedAt) {
    this.id = id;
    this.status = status;
    this.userId = userId;
    this.actor = actor;
    this.token = token;
    this.url = url;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _ActorToken(
      data.id,
      data.status,
      data.user_id,
      data.actor,
      data.token,
      data.url,
      data.created_at,
      data.updated_at
    );
  }
};
var AllowlistIdentifier = class _AllowlistIdentifier {
  static {
    __name(this, "_AllowlistIdentifier");
  }
  constructor(id, identifier, identifierType, createdAt, updatedAt, instanceId, invitationId) {
    this.id = id;
    this.identifier = identifier;
    this.identifierType = identifierType;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.instanceId = instanceId;
    this.invitationId = invitationId;
  }
  static fromJSON(data) {
    return new _AllowlistIdentifier(
      data.id,
      data.identifier,
      data.identifier_type,
      data.created_at,
      data.updated_at,
      data.instance_id,
      data.invitation_id
    );
  }
};
var APIKey = class _APIKey {
  static {
    __name(this, "_APIKey");
  }
  constructor(id, type, name, subject, scopes, claims, revoked, revocationReason, expired, expiration, createdBy, description, lastUsedAt, createdAt, updatedAt, secret) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.subject = subject;
    this.scopes = scopes;
    this.claims = claims;
    this.revoked = revoked;
    this.revocationReason = revocationReason;
    this.expired = expired;
    this.expiration = expiration;
    this.createdBy = createdBy;
    this.description = description;
    this.lastUsedAt = lastUsedAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.secret = secret;
  }
  static fromJSON(data) {
    return new _APIKey(
      data.id,
      data.type,
      data.name,
      data.subject,
      data.scopes,
      data.claims,
      data.revoked,
      data.revocation_reason,
      data.expired,
      data.expiration,
      data.created_by,
      data.description,
      data.last_used_at,
      data.created_at,
      data.updated_at,
      data.secret
    );
  }
};
var BlocklistIdentifier = class _BlocklistIdentifier {
  static {
    __name(this, "_BlocklistIdentifier");
  }
  constructor(id, identifier, identifierType, createdAt, updatedAt, instanceId) {
    this.id = id;
    this.identifier = identifier;
    this.identifierType = identifierType;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.instanceId = instanceId;
  }
  static fromJSON(data) {
    return new _BlocklistIdentifier(
      data.id,
      data.identifier,
      data.identifier_type,
      data.created_at,
      data.updated_at,
      data.instance_id
    );
  }
};
var SessionActivity = class _SessionActivity {
  static {
    __name(this, "_SessionActivity");
  }
  constructor(id, isMobile, ipAddress, city, country, browserVersion, browserName, deviceType) {
    this.id = id;
    this.isMobile = isMobile;
    this.ipAddress = ipAddress;
    this.city = city;
    this.country = country;
    this.browserVersion = browserVersion;
    this.browserName = browserName;
    this.deviceType = deviceType;
  }
  static fromJSON(data) {
    return new _SessionActivity(
      data.id,
      data.is_mobile,
      data.ip_address,
      data.city,
      data.country,
      data.browser_version,
      data.browser_name,
      data.device_type
    );
  }
};
var Session = class _Session {
  static {
    __name(this, "_Session");
  }
  constructor(id, clientId, userId, status, lastActiveAt, expireAt, abandonAt, createdAt, updatedAt, lastActiveOrganizationId, latestActivity, actor = null) {
    this.id = id;
    this.clientId = clientId;
    this.userId = userId;
    this.status = status;
    this.lastActiveAt = lastActiveAt;
    this.expireAt = expireAt;
    this.abandonAt = abandonAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.lastActiveOrganizationId = lastActiveOrganizationId;
    this.latestActivity = latestActivity;
    this.actor = actor;
  }
  static fromJSON(data) {
    return new _Session(
      data.id,
      data.client_id,
      data.user_id,
      data.status,
      data.last_active_at,
      data.expire_at,
      data.abandon_at,
      data.created_at,
      data.updated_at,
      data.last_active_organization_id,
      data.latest_activity && SessionActivity.fromJSON(data.latest_activity),
      data.actor
    );
  }
};
var Client = class _Client {
  static {
    __name(this, "_Client");
  }
  constructor(id, sessionIds, sessions, signInId, signUpId, lastActiveSessionId, lastAuthenticationStrategy, createdAt, updatedAt) {
    this.id = id;
    this.sessionIds = sessionIds;
    this.sessions = sessions;
    this.signInId = signInId;
    this.signUpId = signUpId;
    this.lastActiveSessionId = lastActiveSessionId;
    this.lastAuthenticationStrategy = lastAuthenticationStrategy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _Client(
      data.id,
      data.session_ids,
      data.sessions.map((x) => Session.fromJSON(x)),
      data.sign_in_id,
      data.sign_up_id,
      data.last_active_session_id,
      data.last_authentication_strategy,
      data.created_at,
      data.updated_at
    );
  }
};
var CnameTarget = class _CnameTarget {
  static {
    __name(this, "_CnameTarget");
  }
  constructor(host, value, required) {
    this.host = host;
    this.value = value;
    this.required = required;
  }
  static fromJSON(data) {
    return new _CnameTarget(data.host, data.value, data.required);
  }
};
var Cookies2 = class _Cookies {
  static {
    __name(this, "_Cookies");
  }
  constructor(cookies) {
    this.cookies = cookies;
  }
  static fromJSON(data) {
    return new _Cookies(data.cookies);
  }
};
var DeletedObject = class _DeletedObject {
  static {
    __name(this, "_DeletedObject");
  }
  constructor(object, id, slug, deleted) {
    this.object = object;
    this.id = id;
    this.slug = slug;
    this.deleted = deleted;
  }
  static fromJSON(data) {
    return new _DeletedObject(data.object, data.id || null, data.slug || null, data.deleted);
  }
};
var Domain = class _Domain {
  static {
    __name(this, "_Domain");
  }
  constructor(id, name, isSatellite, frontendApiUrl, developmentOrigin, cnameTargets, accountsPortalUrl, proxyUrl) {
    this.id = id;
    this.name = name;
    this.isSatellite = isSatellite;
    this.frontendApiUrl = frontendApiUrl;
    this.developmentOrigin = developmentOrigin;
    this.cnameTargets = cnameTargets;
    this.accountsPortalUrl = accountsPortalUrl;
    this.proxyUrl = proxyUrl;
  }
  static fromJSON(data) {
    return new _Domain(
      data.id,
      data.name,
      data.is_satellite,
      data.frontend_api_url,
      data.development_origin,
      data.cname_targets && data.cname_targets.map((x) => CnameTarget.fromJSON(x)),
      data.accounts_portal_url,
      data.proxy_url
    );
  }
};
var Email = class _Email {
  static {
    __name(this, "_Email");
  }
  constructor(id, fromEmailName, emailAddressId, toEmailAddress, subject, body, bodyPlain, status, slug, data, deliveredByClerk) {
    this.id = id;
    this.fromEmailName = fromEmailName;
    this.emailAddressId = emailAddressId;
    this.toEmailAddress = toEmailAddress;
    this.subject = subject;
    this.body = body;
    this.bodyPlain = bodyPlain;
    this.status = status;
    this.slug = slug;
    this.data = data;
    this.deliveredByClerk = deliveredByClerk;
  }
  static fromJSON(data) {
    return new _Email(
      data.id,
      data.from_email_name,
      data.email_address_id,
      data.to_email_address,
      data.subject,
      data.body,
      data.body_plain,
      data.status,
      data.slug,
      data.data,
      data.delivered_by_clerk
    );
  }
};
var IdentificationLink = class _IdentificationLink {
  static {
    __name(this, "_IdentificationLink");
  }
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }
  static fromJSON(data) {
    return new _IdentificationLink(data.id, data.type);
  }
};
var Verification = class _Verification {
  static {
    __name(this, "_Verification");
  }
  constructor(status, strategy, externalVerificationRedirectURL = null, attempts = null, expireAt = null, nonce = null, message = null) {
    this.status = status;
    this.strategy = strategy;
    this.externalVerificationRedirectURL = externalVerificationRedirectURL;
    this.attempts = attempts;
    this.expireAt = expireAt;
    this.nonce = nonce;
    this.message = message;
  }
  static fromJSON(data) {
    return new _Verification(
      data.status,
      data.strategy,
      data.external_verification_redirect_url ? new URL(data.external_verification_redirect_url) : null,
      data.attempts,
      data.expire_at,
      data.nonce
    );
  }
};
var EmailAddress = class _EmailAddress {
  static {
    __name(this, "_EmailAddress");
  }
  constructor(id, emailAddress, verification, linkedTo) {
    this.id = id;
    this.emailAddress = emailAddress;
    this.verification = verification;
    this.linkedTo = linkedTo;
  }
  static fromJSON(data) {
    return new _EmailAddress(
      data.id,
      data.email_address,
      data.verification && Verification.fromJSON(data.verification),
      data.linked_to.map((link) => IdentificationLink.fromJSON(link))
    );
  }
};
var ExternalAccount = class _ExternalAccount {
  static {
    __name(this, "_ExternalAccount");
  }
  constructor(id, provider, providerUserId, identificationId, externalId, approvedScopes, emailAddress, firstName, lastName, imageUrl, username, phoneNumber, publicMetadata = {}, label, verification) {
    this.id = id;
    this.provider = provider;
    this.providerUserId = providerUserId;
    this.identificationId = identificationId;
    this.externalId = externalId;
    this.approvedScopes = approvedScopes;
    this.emailAddress = emailAddress;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
    this.username = username;
    this.phoneNumber = phoneNumber;
    this.publicMetadata = publicMetadata;
    this.label = label;
    this.verification = verification;
  }
  static fromJSON(data) {
    return new _ExternalAccount(
      data.id,
      data.provider,
      data.provider_user_id,
      data.identification_id,
      data.provider_user_id,
      data.approved_scopes,
      data.email_address,
      data.first_name,
      data.last_name,
      data.image_url || "",
      data.username,
      data.phone_number,
      data.public_metadata,
      data.label,
      data.verification && Verification.fromJSON(data.verification)
    );
  }
};
var Instance = class _Instance {
  static {
    __name(this, "_Instance");
  }
  constructor(id, environmentType, allowedOrigins) {
    this.id = id;
    this.environmentType = environmentType;
    this.allowedOrigins = allowedOrigins;
  }
  static fromJSON(data) {
    return new _Instance(data.id, data.environment_type, data.allowed_origins);
  }
};
var InstanceRestrictions = class _InstanceRestrictions {
  static {
    __name(this, "_InstanceRestrictions");
  }
  constructor(allowlist, blocklist, blockEmailSubaddresses, blockDisposableEmailDomains, ignoreDotsForGmailAddresses) {
    this.allowlist = allowlist;
    this.blocklist = blocklist;
    this.blockEmailSubaddresses = blockEmailSubaddresses;
    this.blockDisposableEmailDomains = blockDisposableEmailDomains;
    this.ignoreDotsForGmailAddresses = ignoreDotsForGmailAddresses;
  }
  static fromJSON(data) {
    return new _InstanceRestrictions(
      data.allowlist,
      data.blocklist,
      data.block_email_subaddresses,
      data.block_disposable_email_domains,
      data.ignore_dots_for_gmail_addresses
    );
  }
};
var InstanceSettings = class _InstanceSettings {
  static {
    __name(this, "_InstanceSettings");
  }
  constructor(id, restrictedToAllowlist, fromEmailAddress, progressiveSignUp, enhancedEmailDeliverability) {
    this.id = id;
    this.restrictedToAllowlist = restrictedToAllowlist;
    this.fromEmailAddress = fromEmailAddress;
    this.progressiveSignUp = progressiveSignUp;
    this.enhancedEmailDeliverability = enhancedEmailDeliverability;
  }
  static fromJSON(data) {
    return new _InstanceSettings(
      data.id,
      data.restricted_to_allowlist,
      data.from_email_address,
      data.progressive_sign_up,
      data.enhanced_email_deliverability
    );
  }
};
var Invitation = class _Invitation {
  static {
    __name(this, "_Invitation");
  }
  constructor(id, emailAddress, publicMetadata, createdAt, updatedAt, status, url, revoked) {
    this.id = id;
    this.emailAddress = emailAddress;
    this.publicMetadata = publicMetadata;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.status = status;
    this.url = url;
    this.revoked = revoked;
    this._raw = null;
  }
  get raw() {
    return this._raw;
  }
  static fromJSON(data) {
    const res = new _Invitation(
      data.id,
      data.email_address,
      data.public_metadata,
      data.created_at,
      data.updated_at,
      data.status,
      data.url,
      data.revoked
    );
    res._raw = data;
    return res;
  }
};
var ObjectType = {
  AccountlessApplication: "accountless_application",
  ActorToken: "actor_token",
  AgentTask: "agent_task",
  AllowlistIdentifier: "allowlist_identifier",
  ApiKey: "api_key",
  BlocklistIdentifier: "blocklist_identifier",
  Client: "client",
  Cookies: "cookies",
  Domain: "domain",
  Email: "email",
  EmailAddress: "email_address",
  ExternalAccount: "external_account",
  FacebookAccount: "facebook_account",
  GoogleAccount: "google_account",
  Instance: "instance",
  InstanceRestrictions: "instance_restrictions",
  InstanceSettings: "instance_settings",
  Invitation: "invitation",
  Machine: "machine",
  MachineScope: "machine_scope",
  MachineSecretKey: "machine_secret_key",
  M2MToken: "machine_to_machine_token",
  JwtTemplate: "jwt_template",
  OauthAccessToken: "oauth_access_token",
  IdpOAuthAccessToken: "clerk_idp_oauth_access_token",
  OAuthApplication: "oauth_application",
  Organization: "organization",
  OrganizationDomain: "organization_domain",
  OrganizationInvitation: "organization_invitation",
  OrganizationMembership: "organization_membership",
  OrganizationSettings: "organization_settings",
  PhoneNumber: "phone_number",
  ProxyCheck: "proxy_check",
  RedirectUrl: "redirect_url",
  SamlAccount: "saml_account",
  SamlConnection: "saml_connection",
  Session: "session",
  SignInAttempt: "sign_in_attempt",
  SignInToken: "sign_in_token",
  SignUpAttempt: "sign_up_attempt",
  SmsMessage: "sms_message",
  User: "user",
  WaitlistEntry: "waitlist_entry",
  Web3Wallet: "web3_wallet",
  Token: "token",
  TotalCount: "total_count",
  TestingToken: "testing_token",
  Role: "role",
  Permission: "permission",
  BillingPayer: "commerce_payer",
  BillingPaymentAttempt: "commerce_payment_attempt",
  BillingSubscription: "commerce_subscription",
  BillingSubscriptionItem: "commerce_subscription_item",
  BillingPlan: "commerce_plan",
  Feature: "feature"
};
var Machine = class _Machine {
  static {
    __name(this, "_Machine");
  }
  constructor(id, name, instanceId, createdAt, updatedAt, scopedMachines, defaultTokenTtl, secretKey) {
    this.id = id;
    this.name = name;
    this.instanceId = instanceId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.scopedMachines = scopedMachines;
    this.defaultTokenTtl = defaultTokenTtl;
    this.secretKey = secretKey;
  }
  static fromJSON(data) {
    return new _Machine(
      data.id,
      data.name,
      data.instance_id,
      data.created_at,
      data.updated_at,
      data.scoped_machines.map(
        (m2) => new _Machine(
          m2.id,
          m2.name,
          m2.instance_id,
          m2.created_at,
          m2.updated_at,
          [],
          // Nested machines don't have scoped_machines
          m2.default_token_ttl
        )
      ),
      data.default_token_ttl,
      data.secret_key
    );
  }
};
var MachineScope = class _MachineScope {
  static {
    __name(this, "_MachineScope");
  }
  constructor(fromMachineId, toMachineId, createdAt, deleted) {
    this.fromMachineId = fromMachineId;
    this.toMachineId = toMachineId;
    this.createdAt = createdAt;
    this.deleted = deleted;
  }
  static fromJSON(data) {
    return new _MachineScope(data.from_machine_id, data.to_machine_id, data.created_at, data.deleted);
  }
};
var MachineSecretKey = class _MachineSecretKey {
  static {
    __name(this, "_MachineSecretKey");
  }
  constructor(secret) {
    this.secret = secret;
  }
  static fromJSON(data) {
    return new _MachineSecretKey(data.secret);
  }
};
var JwtTemplate = class _JwtTemplate {
  static {
    __name(this, "_JwtTemplate");
  }
  constructor(id, name, claims, lifetime, allowedClockSkew, customSigningKey, signingAlgorithm, createdAt, updatedAt) {
    this.id = id;
    this.name = name;
    this.claims = claims;
    this.lifetime = lifetime;
    this.allowedClockSkew = allowedClockSkew;
    this.customSigningKey = customSigningKey;
    this.signingAlgorithm = signingAlgorithm;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _JwtTemplate(
      data.id,
      data.name,
      data.claims,
      data.lifetime,
      data.allowed_clock_skew,
      data.custom_signing_key,
      data.signing_algorithm,
      data.created_at,
      data.updated_at
    );
  }
};
var OauthAccessToken = class _OauthAccessToken {
  static {
    __name(this, "_OauthAccessToken");
  }
  constructor(externalAccountId, provider, token, publicMetadata = {}, label, scopes, tokenSecret, expiresAt, idToken) {
    this.externalAccountId = externalAccountId;
    this.provider = provider;
    this.token = token;
    this.publicMetadata = publicMetadata;
    this.label = label;
    this.scopes = scopes;
    this.tokenSecret = tokenSecret;
    this.expiresAt = expiresAt;
    this.idToken = idToken;
  }
  static fromJSON(data) {
    return new _OauthAccessToken(
      data.external_account_id,
      data.provider,
      data.token,
      data.public_metadata,
      data.label || "",
      data.scopes,
      data.token_secret,
      data.expires_at,
      data.id_token
    );
  }
};
var OAuthApplication = class _OAuthApplication {
  static {
    __name(this, "_OAuthApplication");
  }
  constructor(id, instanceId, name, clientId, clientUri, clientImageUrl, dynamicallyRegistered, consentScreenEnabled, pkceRequired, isPublic, scopes, redirectUris, authorizeUrl, tokenFetchUrl, userInfoUrl, discoveryUrl, tokenIntrospectionUrl, createdAt, updatedAt, clientSecret) {
    this.id = id;
    this.instanceId = instanceId;
    this.name = name;
    this.clientId = clientId;
    this.clientUri = clientUri;
    this.clientImageUrl = clientImageUrl;
    this.dynamicallyRegistered = dynamicallyRegistered;
    this.consentScreenEnabled = consentScreenEnabled;
    this.pkceRequired = pkceRequired;
    this.isPublic = isPublic;
    this.scopes = scopes;
    this.redirectUris = redirectUris;
    this.authorizeUrl = authorizeUrl;
    this.tokenFetchUrl = tokenFetchUrl;
    this.userInfoUrl = userInfoUrl;
    this.discoveryUrl = discoveryUrl;
    this.tokenIntrospectionUrl = tokenIntrospectionUrl;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.clientSecret = clientSecret;
  }
  static fromJSON(data) {
    return new _OAuthApplication(
      data.id,
      data.instance_id,
      data.name,
      data.client_id,
      data.client_uri,
      data.client_image_url,
      data.dynamically_registered,
      data.consent_screen_enabled,
      data.pkce_required,
      data.public,
      data.scopes,
      data.redirect_uris,
      data.authorize_url,
      data.token_fetch_url,
      data.user_info_url,
      data.discovery_url,
      data.token_introspection_url,
      data.created_at,
      data.updated_at,
      data.client_secret
    );
  }
};
var Organization = class _Organization {
  static {
    __name(this, "_Organization");
  }
  constructor(id, name, slug, imageUrl, hasImage, createdAt, updatedAt, publicMetadata = {}, privateMetadata = {}, maxAllowedMemberships, adminDeleteEnabled, membersCount, createdBy) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.imageUrl = imageUrl;
    this.hasImage = hasImage;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.publicMetadata = publicMetadata;
    this.privateMetadata = privateMetadata;
    this.maxAllowedMemberships = maxAllowedMemberships;
    this.adminDeleteEnabled = adminDeleteEnabled;
    this.membersCount = membersCount;
    this.createdBy = createdBy;
    this._raw = null;
  }
  get raw() {
    return this._raw;
  }
  static fromJSON(data) {
    const res = new _Organization(
      data.id,
      data.name,
      data.slug,
      data.image_url || "",
      data.has_image,
      data.created_at,
      data.updated_at,
      data.public_metadata,
      data.private_metadata,
      data.max_allowed_memberships,
      data.admin_delete_enabled,
      data.members_count,
      data.created_by
    );
    res._raw = data;
    return res;
  }
};
var OrganizationInvitation = class _OrganizationInvitation {
  static {
    __name(this, "_OrganizationInvitation");
  }
  constructor(id, emailAddress, role, roleName, organizationId, createdAt, updatedAt, expiresAt, url, status, publicMetadata = {}, privateMetadata = {}, publicOrganizationData) {
    this.id = id;
    this.emailAddress = emailAddress;
    this.role = role;
    this.roleName = roleName;
    this.organizationId = organizationId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.expiresAt = expiresAt;
    this.url = url;
    this.status = status;
    this.publicMetadata = publicMetadata;
    this.privateMetadata = privateMetadata;
    this.publicOrganizationData = publicOrganizationData;
    this._raw = null;
  }
  get raw() {
    return this._raw;
  }
  static fromJSON(data) {
    const res = new _OrganizationInvitation(
      data.id,
      data.email_address,
      data.role,
      data.role_name,
      data.organization_id,
      data.created_at,
      data.updated_at,
      data.expires_at,
      data.url,
      data.status,
      data.public_metadata,
      data.private_metadata,
      data.public_organization_data
    );
    res._raw = data;
    return res;
  }
};
var OrganizationMembership = class _OrganizationMembership {
  static {
    __name(this, "_OrganizationMembership");
  }
  constructor(id, role, permissions, publicMetadata = {}, privateMetadata = {}, createdAt, updatedAt, organization, publicUserData) {
    this.id = id;
    this.role = role;
    this.permissions = permissions;
    this.publicMetadata = publicMetadata;
    this.privateMetadata = privateMetadata;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.organization = organization;
    this.publicUserData = publicUserData;
    this._raw = null;
  }
  get raw() {
    return this._raw;
  }
  static fromJSON(data) {
    const res = new _OrganizationMembership(
      data.id,
      data.role,
      data.permissions,
      data.public_metadata,
      data.private_metadata,
      data.created_at,
      data.updated_at,
      Organization.fromJSON(data.organization),
      OrganizationMembershipPublicUserData.fromJSON(data.public_user_data)
    );
    res._raw = data;
    return res;
  }
};
var OrganizationMembershipPublicUserData = class _OrganizationMembershipPublicUserData {
  static {
    __name(this, "_OrganizationMembershipPublicUserData");
  }
  constructor(identifier, firstName, lastName, imageUrl, hasImage, userId) {
    this.identifier = identifier;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
    this.hasImage = hasImage;
    this.userId = userId;
  }
  static fromJSON(data) {
    return new _OrganizationMembershipPublicUserData(
      data.identifier,
      data.first_name,
      data.last_name,
      data.image_url,
      data.has_image,
      data.user_id
    );
  }
};
var OrganizationSettings = class _OrganizationSettings {
  static {
    __name(this, "_OrganizationSettings");
  }
  constructor(enabled, maxAllowedMemberships, maxAllowedRoles, maxAllowedPermissions, creatorRole, adminDeleteEnabled, domainsEnabled, slugDisabled, domainsEnrollmentModes, domainsDefaultRole) {
    this.enabled = enabled;
    this.maxAllowedMemberships = maxAllowedMemberships;
    this.maxAllowedRoles = maxAllowedRoles;
    this.maxAllowedPermissions = maxAllowedPermissions;
    this.creatorRole = creatorRole;
    this.adminDeleteEnabled = adminDeleteEnabled;
    this.domainsEnabled = domainsEnabled;
    this.slugDisabled = slugDisabled;
    this.domainsEnrollmentModes = domainsEnrollmentModes;
    this.domainsDefaultRole = domainsDefaultRole;
  }
  static fromJSON(data) {
    return new _OrganizationSettings(
      data.enabled,
      data.max_allowed_memberships,
      data.max_allowed_roles,
      data.max_allowed_permissions,
      data.creator_role,
      data.admin_delete_enabled,
      data.domains_enabled,
      data.slug_disabled,
      data.domains_enrollment_modes,
      data.domains_default_role
    );
  }
};
var PhoneNumber2 = class _PhoneNumber {
  static {
    __name(this, "_PhoneNumber");
  }
  constructor(id, phoneNumber, reservedForSecondFactor, defaultSecondFactor, verification, linkedTo) {
    this.id = id;
    this.phoneNumber = phoneNumber;
    this.reservedForSecondFactor = reservedForSecondFactor;
    this.defaultSecondFactor = defaultSecondFactor;
    this.verification = verification;
    this.linkedTo = linkedTo;
  }
  static fromJSON(data) {
    return new _PhoneNumber(
      data.id,
      data.phone_number,
      data.reserved_for_second_factor,
      data.default_second_factor,
      data.verification && Verification.fromJSON(data.verification),
      data.linked_to.map((link) => IdentificationLink.fromJSON(link))
    );
  }
};
var ProxyCheck = class _ProxyCheck {
  static {
    __name(this, "_ProxyCheck");
  }
  constructor(id, domainId, lastRunAt, proxyUrl, successful, createdAt, updatedAt) {
    this.id = id;
    this.domainId = domainId;
    this.lastRunAt = lastRunAt;
    this.proxyUrl = proxyUrl;
    this.successful = successful;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _ProxyCheck(
      data.id,
      data.domain_id,
      data.last_run_at,
      data.proxy_url,
      data.successful,
      data.created_at,
      data.updated_at
    );
  }
};
var RedirectUrl = class _RedirectUrl {
  static {
    __name(this, "_RedirectUrl");
  }
  constructor(id, url, createdAt, updatedAt) {
    this.id = id;
    this.url = url;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _RedirectUrl(data.id, data.url, data.created_at, data.updated_at);
  }
};
var SamlConnection = class _SamlConnection {
  static {
    __name(this, "_SamlConnection");
  }
  constructor(id, name, domain, organizationId, idpEntityId, idpSsoUrl, idpCertificate, idpMetadataUrl, idpMetadata, acsUrl, spEntityId, spMetadataUrl, active, provider, userCount, syncUserAttributes, allowSubdomains, allowIdpInitiated, createdAt, updatedAt, attributeMapping) {
    this.id = id;
    this.name = name;
    this.domain = domain;
    this.organizationId = organizationId;
    this.idpEntityId = idpEntityId;
    this.idpSsoUrl = idpSsoUrl;
    this.idpCertificate = idpCertificate;
    this.idpMetadataUrl = idpMetadataUrl;
    this.idpMetadata = idpMetadata;
    this.acsUrl = acsUrl;
    this.spEntityId = spEntityId;
    this.spMetadataUrl = spMetadataUrl;
    this.active = active;
    this.provider = provider;
    this.userCount = userCount;
    this.syncUserAttributes = syncUserAttributes;
    this.allowSubdomains = allowSubdomains;
    this.allowIdpInitiated = allowIdpInitiated;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.attributeMapping = attributeMapping;
  }
  static fromJSON(data) {
    return new _SamlConnection(
      data.id,
      data.name,
      data.domain,
      data.organization_id,
      data.idp_entity_id,
      data.idp_sso_url,
      data.idp_certificate,
      data.idp_metadata_url,
      data.idp_metadata,
      data.acs_url,
      data.sp_entity_id,
      data.sp_metadata_url,
      data.active,
      data.provider,
      data.user_count,
      data.sync_user_attributes,
      data.allow_subdomains,
      data.allow_idp_initiated,
      data.created_at,
      data.updated_at,
      data.attribute_mapping && AttributeMapping.fromJSON(data.attribute_mapping)
    );
  }
};
var SamlAccountConnection = class _SamlAccountConnection {
  static {
    __name(this, "_SamlAccountConnection");
  }
  constructor(id, name, domain, active, provider, syncUserAttributes, allowSubdomains, allowIdpInitiated, createdAt, updatedAt) {
    this.id = id;
    this.name = name;
    this.domain = domain;
    this.active = active;
    this.provider = provider;
    this.syncUserAttributes = syncUserAttributes;
    this.allowSubdomains = allowSubdomains;
    this.allowIdpInitiated = allowIdpInitiated;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _SamlAccountConnection(
      data.id,
      data.name,
      data.domain,
      data.active,
      data.provider,
      data.sync_user_attributes,
      data.allow_subdomains,
      data.allow_idp_initiated,
      data.created_at,
      data.updated_at
    );
  }
};
var AttributeMapping = class _AttributeMapping {
  static {
    __name(this, "_AttributeMapping");
  }
  constructor(userId, emailAddress, firstName, lastName) {
    this.userId = userId;
    this.emailAddress = emailAddress;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static fromJSON(data) {
    return new _AttributeMapping(data.user_id, data.email_address, data.first_name, data.last_name);
  }
};
var SamlAccount = class _SamlAccount {
  static {
    __name(this, "_SamlAccount");
  }
  constructor(id, provider, providerUserId, active, emailAddress, firstName, lastName, verification, samlConnection, lastAuthenticatedAt, enterpriseConnectionId) {
    this.id = id;
    this.provider = provider;
    this.providerUserId = providerUserId;
    this.active = active;
    this.emailAddress = emailAddress;
    this.firstName = firstName;
    this.lastName = lastName;
    this.verification = verification;
    this.samlConnection = samlConnection;
    this.lastAuthenticatedAt = lastAuthenticatedAt;
    this.enterpriseConnectionId = enterpriseConnectionId;
  }
  static fromJSON(data) {
    return new _SamlAccount(
      data.id,
      data.provider,
      data.provider_user_id,
      data.active,
      data.email_address,
      data.first_name,
      data.last_name,
      data.verification && Verification.fromJSON(data.verification),
      data.saml_connection && SamlAccountConnection.fromJSON(data.saml_connection),
      data.last_authenticated_at ?? null,
      data.enterprise_connection_id
    );
  }
};
var SignInToken = class _SignInToken {
  static {
    __name(this, "_SignInToken");
  }
  constructor(id, userId, token, status, url, createdAt, updatedAt) {
    this.id = id;
    this.userId = userId;
    this.token = token;
    this.status = status;
    this.url = url;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _SignInToken(data.id, data.user_id, data.token, data.status, data.url, data.created_at, data.updated_at);
  }
};
var SignUpAttemptVerification = class _SignUpAttemptVerification {
  static {
    __name(this, "_SignUpAttemptVerification");
  }
  constructor(nextAction, supportedStrategies) {
    this.nextAction = nextAction;
    this.supportedStrategies = supportedStrategies;
  }
  static fromJSON(data) {
    return new _SignUpAttemptVerification(data.next_action, data.supported_strategies);
  }
};
var SignUpAttemptVerifications = class _SignUpAttemptVerifications {
  static {
    __name(this, "_SignUpAttemptVerifications");
  }
  constructor(emailAddress, phoneNumber, web3Wallet, externalAccount) {
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.web3Wallet = web3Wallet;
    this.externalAccount = externalAccount;
  }
  static fromJSON(data) {
    return new _SignUpAttemptVerifications(
      data.email_address && SignUpAttemptVerification.fromJSON(data.email_address),
      data.phone_number && SignUpAttemptVerification.fromJSON(data.phone_number),
      data.web3_wallet && SignUpAttemptVerification.fromJSON(data.web3_wallet),
      data.external_account
    );
  }
};
var SignUpAttempt = class _SignUpAttempt {
  static {
    __name(this, "_SignUpAttempt");
  }
  constructor(id, status, requiredFields, optionalFields, missingFields, unverifiedFields, verifications, username, emailAddress, phoneNumber, web3Wallet, passwordEnabled, firstName, lastName, customAction, externalId, createdSessionId, createdUserId, abandonAt, legalAcceptedAt, publicMetadata, unsafeMetadata) {
    this.id = id;
    this.status = status;
    this.requiredFields = requiredFields;
    this.optionalFields = optionalFields;
    this.missingFields = missingFields;
    this.unverifiedFields = unverifiedFields;
    this.verifications = verifications;
    this.username = username;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.web3Wallet = web3Wallet;
    this.passwordEnabled = passwordEnabled;
    this.firstName = firstName;
    this.lastName = lastName;
    this.customAction = customAction;
    this.externalId = externalId;
    this.createdSessionId = createdSessionId;
    this.createdUserId = createdUserId;
    this.abandonAt = abandonAt;
    this.legalAcceptedAt = legalAcceptedAt;
    this.publicMetadata = publicMetadata;
    this.unsafeMetadata = unsafeMetadata;
  }
  static fromJSON(data) {
    return new _SignUpAttempt(
      data.id,
      data.status,
      data.required_fields,
      data.optional_fields,
      data.missing_fields,
      data.unverified_fields,
      data.verifications ? SignUpAttemptVerifications.fromJSON(data.verifications) : null,
      data.username,
      data.email_address,
      data.phone_number,
      data.web3_wallet,
      data.password_enabled,
      data.first_name,
      data.last_name,
      data.custom_action,
      data.external_id,
      data.created_session_id,
      data.created_user_id,
      data.abandon_at,
      data.legal_accepted_at,
      data.public_metadata,
      data.unsafe_metadata
    );
  }
};
var SMSMessage = class _SMSMessage {
  static {
    __name(this, "_SMSMessage");
  }
  constructor(id, fromPhoneNumber, toPhoneNumber, message, status, phoneNumberId, data) {
    this.id = id;
    this.fromPhoneNumber = fromPhoneNumber;
    this.toPhoneNumber = toPhoneNumber;
    this.message = message;
    this.status = status;
    this.phoneNumberId = phoneNumberId;
    this.data = data;
  }
  static fromJSON(data) {
    return new _SMSMessage(
      data.id,
      data.from_phone_number,
      data.to_phone_number,
      data.message,
      data.status,
      data.phone_number_id,
      data.data
    );
  }
};
var Token = class _Token {
  static {
    __name(this, "_Token");
  }
  constructor(jwt) {
    this.jwt = jwt;
  }
  static fromJSON(data) {
    return new _Token(data.jwt);
  }
};
var Web3Wallet = class _Web3Wallet {
  static {
    __name(this, "_Web3Wallet");
  }
  constructor(id, web3Wallet, verification) {
    this.id = id;
    this.web3Wallet = web3Wallet;
    this.verification = verification;
  }
  static fromJSON(data) {
    return new _Web3Wallet(data.id, data.web3_wallet, data.verification && Verification.fromJSON(data.verification));
  }
};
var User = class _User {
  static {
    __name(this, "_User");
  }
  constructor(id, passwordEnabled, totpEnabled, backupCodeEnabled, twoFactorEnabled, banned, locked, createdAt, updatedAt, imageUrl, hasImage, primaryEmailAddressId, primaryPhoneNumberId, primaryWeb3WalletId, lastSignInAt, externalId, username, firstName, lastName, publicMetadata = {}, privateMetadata = {}, unsafeMetadata = {}, emailAddresses = [], phoneNumbers = [], web3Wallets = [], externalAccounts = [], samlAccounts = [], lastActiveAt, createOrganizationEnabled, createOrganizationsLimit = null, deleteSelfEnabled, legalAcceptedAt, locale) {
    this.id = id;
    this.passwordEnabled = passwordEnabled;
    this.totpEnabled = totpEnabled;
    this.backupCodeEnabled = backupCodeEnabled;
    this.twoFactorEnabled = twoFactorEnabled;
    this.banned = banned;
    this.locked = locked;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.imageUrl = imageUrl;
    this.hasImage = hasImage;
    this.primaryEmailAddressId = primaryEmailAddressId;
    this.primaryPhoneNumberId = primaryPhoneNumberId;
    this.primaryWeb3WalletId = primaryWeb3WalletId;
    this.lastSignInAt = lastSignInAt;
    this.externalId = externalId;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.publicMetadata = publicMetadata;
    this.privateMetadata = privateMetadata;
    this.unsafeMetadata = unsafeMetadata;
    this.emailAddresses = emailAddresses;
    this.phoneNumbers = phoneNumbers;
    this.web3Wallets = web3Wallets;
    this.externalAccounts = externalAccounts;
    this.samlAccounts = samlAccounts;
    this.lastActiveAt = lastActiveAt;
    this.createOrganizationEnabled = createOrganizationEnabled;
    this.createOrganizationsLimit = createOrganizationsLimit;
    this.deleteSelfEnabled = deleteSelfEnabled;
    this.legalAcceptedAt = legalAcceptedAt;
    this.locale = locale;
    this._raw = null;
  }
  get raw() {
    return this._raw;
  }
  static fromJSON(data) {
    const res = new _User(
      data.id,
      data.password_enabled,
      data.totp_enabled,
      data.backup_code_enabled,
      data.two_factor_enabled,
      data.banned,
      data.locked,
      data.created_at,
      data.updated_at,
      data.image_url,
      data.has_image,
      data.primary_email_address_id,
      data.primary_phone_number_id,
      data.primary_web3_wallet_id,
      data.last_sign_in_at,
      data.external_id,
      data.username,
      data.first_name,
      data.last_name,
      data.public_metadata,
      data.private_metadata,
      data.unsafe_metadata,
      (data.email_addresses || []).map((x) => EmailAddress.fromJSON(x)),
      (data.phone_numbers || []).map((x) => PhoneNumber2.fromJSON(x)),
      (data.web3_wallets || []).map((x) => Web3Wallet.fromJSON(x)),
      (data.external_accounts || []).map((x) => ExternalAccount.fromJSON(x)),
      (data.saml_accounts || []).map((x) => SamlAccount.fromJSON(x)),
      data.last_active_at,
      data.create_organization_enabled,
      data.create_organizations_limit,
      data.delete_self_enabled,
      data.legal_accepted_at,
      data.locale
    );
    res._raw = data;
    return res;
  }
  /**
   * The primary email address of the user.
   */
  get primaryEmailAddress() {
    return this.emailAddresses.find(({ id }) => id === this.primaryEmailAddressId) ?? null;
  }
  /**
   * The primary phone number of the user.
   */
  get primaryPhoneNumber() {
    return this.phoneNumbers.find(({ id }) => id === this.primaryPhoneNumberId) ?? null;
  }
  /**
   * The primary web3 wallet of the user.
   */
  get primaryWeb3Wallet() {
    return this.web3Wallets.find(({ id }) => id === this.primaryWeb3WalletId) ?? null;
  }
  /**
   * The full name of the user.
   */
  get fullName() {
    return [this.firstName, this.lastName].join(" ").trim() || null;
  }
};
var WaitlistEntry = class _WaitlistEntry {
  static {
    __name(this, "_WaitlistEntry");
  }
  constructor(id, emailAddress, status, invitation, createdAt, updatedAt, isLocked) {
    this.id = id;
    this.emailAddress = emailAddress;
    this.status = status;
    this.invitation = invitation;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isLocked = isLocked;
  }
  static fromJSON(data) {
    return new _WaitlistEntry(
      data.id,
      data.email_address,
      data.status,
      data.invitation && Invitation.fromJSON(data.invitation),
      data.created_at,
      data.updated_at,
      data.is_locked
    );
  }
};
var Feature = class _Feature {
  static {
    __name(this, "_Feature");
  }
  constructor(id, name, description, slug, avatarUrl) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.slug = slug;
    this.avatarUrl = avatarUrl;
  }
  static fromJSON(data) {
    return new _Feature(data.id, data.name, data.description ?? null, data.slug, data.avatar_url ?? null);
  }
};
var BillingPlan = class _BillingPlan {
  static {
    __name(this, "_BillingPlan");
  }
  constructor(id, name, slug, description, isDefault, isRecurring, hasBaseFee, publiclyVisible, fee, annualFee, annualMonthlyFee, forPayerType, features) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.description = description;
    this.isDefault = isDefault;
    this.isRecurring = isRecurring;
    this.hasBaseFee = hasBaseFee;
    this.publiclyVisible = publiclyVisible;
    this.fee = fee;
    this.annualFee = annualFee;
    this.annualMonthlyFee = annualMonthlyFee;
    this.forPayerType = forPayerType;
    this.features = features;
  }
  static fromJSON(data) {
    const formatAmountJSON = /* @__PURE__ */ __name((fee) => {
      return fee ? {
        amount: fee.amount,
        amountFormatted: fee.amount_formatted,
        currency: fee.currency,
        currencySymbol: fee.currency_symbol
      } : null;
    }, "formatAmountJSON");
    return new _BillingPlan(
      data.id,
      data.name,
      data.slug,
      data.description ?? null,
      data.is_default,
      data.is_recurring,
      data.has_base_fee,
      data.publicly_visible,
      formatAmountJSON(data.fee),
      formatAmountJSON(data.annual_fee),
      formatAmountJSON(data.annual_monthly_fee),
      data.for_payer_type,
      (data.features ?? []).map((feature) => Feature.fromJSON(feature))
    );
  }
};
var BillingSubscriptionItem = class _BillingSubscriptionItem {
  static {
    __name(this, "_BillingSubscriptionItem");
  }
  constructor(id, status, planPeriod, periodStart, nextPayment, amount, plan, planId, createdAt, updatedAt, periodEnd, canceledAt, pastDueAt, endedAt, payerId, isFreeTrial, lifetimePaid) {
    this.id = id;
    this.status = status;
    this.planPeriod = planPeriod;
    this.periodStart = periodStart;
    this.nextPayment = nextPayment;
    this.amount = amount;
    this.plan = plan;
    this.planId = planId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.periodEnd = periodEnd;
    this.canceledAt = canceledAt;
    this.pastDueAt = pastDueAt;
    this.endedAt = endedAt;
    this.payerId = payerId;
    this.isFreeTrial = isFreeTrial;
    this.lifetimePaid = lifetimePaid;
  }
  static fromJSON(data) {
    function formatAmountJSON(amount) {
      if (!amount) {
        return amount;
      }
      return {
        amount: amount.amount,
        amountFormatted: amount.amount_formatted,
        currency: amount.currency,
        currencySymbol: amount.currency_symbol
      };
    }
    __name(formatAmountJSON, "formatAmountJSON");
    return new _BillingSubscriptionItem(
      data.id,
      data.status,
      data.plan_period,
      data.period_start,
      data.next_payment,
      formatAmountJSON(data.amount) ?? void 0,
      data.plan ? BillingPlan.fromJSON(data.plan) : null,
      data.plan_id ?? null,
      data.created_at,
      data.updated_at,
      data.period_end,
      data.canceled_at,
      data.past_due_at,
      data.ended_at,
      data.payer_id,
      data.is_free_trial,
      formatAmountJSON(data.lifetime_paid) ?? void 0
    );
  }
};
var BillingSubscription = class _BillingSubscription {
  static {
    __name(this, "_BillingSubscription");
  }
  constructor(id, status, payerId, createdAt, updatedAt, activeAt, pastDueAt, subscriptionItems, nextPayment, eligibleForFreeTrial) {
    this.id = id;
    this.status = status;
    this.payerId = payerId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.activeAt = activeAt;
    this.pastDueAt = pastDueAt;
    this.subscriptionItems = subscriptionItems;
    this.nextPayment = nextPayment;
    this.eligibleForFreeTrial = eligibleForFreeTrial;
  }
  static fromJSON(data) {
    const nextPayment = data.next_payment ? {
      date: data.next_payment.date,
      amount: {
        amount: data.next_payment.amount.amount,
        amountFormatted: data.next_payment.amount.amount_formatted,
        currency: data.next_payment.amount.currency,
        currencySymbol: data.next_payment.amount.currency_symbol
      }
    } : null;
    return new _BillingSubscription(
      data.id,
      data.status,
      data.payer_id,
      data.created_at,
      data.updated_at,
      data.active_at ?? null,
      data.past_due_at ?? null,
      (data.subscription_items ?? []).map((item) => BillingSubscriptionItem.fromJSON(item)),
      nextPayment,
      data.eligible_for_free_trial ?? false
    );
  }
};
function deserialize(payload) {
  let data, totalCount;
  if (Array.isArray(payload)) {
    const data2 = payload.map((item) => jsonToObject(item));
    return { data: data2 };
  } else if (isM2MTokenResponse(payload)) {
    data = payload.m2m_tokens.map((item) => jsonToObject(item));
    totalCount = payload.total_count;
    return { data, totalCount };
  } else if (isPaginated(payload)) {
    data = payload.data.map((item) => jsonToObject(item));
    totalCount = payload.total_count;
    return { data, totalCount };
  } else {
    return { data: jsonToObject(payload) };
  }
}
__name(deserialize, "deserialize");
function isPaginated(payload) {
  if (!payload || typeof payload !== "object" || !("data" in payload)) {
    return false;
  }
  return Array.isArray(payload.data) && payload.data !== void 0;
}
__name(isPaginated, "isPaginated");
function isM2MTokenResponse(payload) {
  if (!payload || typeof payload !== "object" || !("m2m_tokens" in payload)) {
    return false;
  }
  return Array.isArray(payload.m2m_tokens);
}
__name(isM2MTokenResponse, "isM2MTokenResponse");
function getCount(item) {
  return item.total_count;
}
__name(getCount, "getCount");
function jsonToObject(item) {
  if (typeof item !== "string" && "object" in item && "deleted" in item) {
    return DeletedObject.fromJSON(item);
  }
  switch (item.object) {
    case ObjectType.AccountlessApplication:
      return AccountlessApplication.fromJSON(item);
    case ObjectType.ActorToken:
      return ActorToken.fromJSON(item);
    case ObjectType.AllowlistIdentifier:
      return AllowlistIdentifier.fromJSON(item);
    case ObjectType.ApiKey:
      return APIKey.fromJSON(item);
    case ObjectType.BlocklistIdentifier:
      return BlocklistIdentifier.fromJSON(item);
    case ObjectType.Client:
      return Client.fromJSON(item);
    case ObjectType.Cookies:
      return Cookies2.fromJSON(item);
    case ObjectType.Domain:
      return Domain.fromJSON(item);
    case ObjectType.EmailAddress:
      return EmailAddress.fromJSON(item);
    case ObjectType.Email:
      return Email.fromJSON(item);
    case ObjectType.IdpOAuthAccessToken:
      return IdPOAuthAccessToken.fromJSON(item);
    case ObjectType.Instance:
      return Instance.fromJSON(item);
    case ObjectType.InstanceRestrictions:
      return InstanceRestrictions.fromJSON(item);
    case ObjectType.InstanceSettings:
      return InstanceSettings.fromJSON(item);
    case ObjectType.Invitation:
      return Invitation.fromJSON(item);
    case ObjectType.JwtTemplate:
      return JwtTemplate.fromJSON(item);
    case ObjectType.Machine:
      return Machine.fromJSON(item);
    case ObjectType.MachineScope:
      return MachineScope.fromJSON(item);
    case ObjectType.MachineSecretKey:
      return MachineSecretKey.fromJSON(item);
    case ObjectType.M2MToken:
      return M2MToken.fromJSON(item);
    case ObjectType.OauthAccessToken:
      return OauthAccessToken.fromJSON(item);
    case ObjectType.OAuthApplication:
      return OAuthApplication.fromJSON(item);
    case ObjectType.Organization:
      return Organization.fromJSON(item);
    case ObjectType.OrganizationInvitation:
      return OrganizationInvitation.fromJSON(item);
    case ObjectType.OrganizationMembership:
      return OrganizationMembership.fromJSON(item);
    case ObjectType.OrganizationSettings:
      return OrganizationSettings.fromJSON(item);
    case ObjectType.PhoneNumber:
      return PhoneNumber2.fromJSON(item);
    case ObjectType.ProxyCheck:
      return ProxyCheck.fromJSON(item);
    case ObjectType.RedirectUrl:
      return RedirectUrl.fromJSON(item);
    case ObjectType.SamlConnection:
      return SamlConnection.fromJSON(item);
    case ObjectType.SignInToken:
      return SignInToken.fromJSON(item);
    case ObjectType.AgentTask:
      return AgentTask.fromJSON(item);
    case ObjectType.SignUpAttempt:
      return SignUpAttempt.fromJSON(item);
    case ObjectType.Session:
      return Session.fromJSON(item);
    case ObjectType.SmsMessage:
      return SMSMessage.fromJSON(item);
    case ObjectType.Token:
      return Token.fromJSON(item);
    case ObjectType.TotalCount:
      return getCount(item);
    case ObjectType.User:
      return User.fromJSON(item);
    case ObjectType.WaitlistEntry:
      return WaitlistEntry.fromJSON(item);
    case ObjectType.BillingPlan:
      return BillingPlan.fromJSON(item);
    case ObjectType.BillingSubscription:
      return BillingSubscription.fromJSON(item);
    case ObjectType.BillingSubscriptionItem:
      return BillingSubscriptionItem.fromJSON(item);
    case ObjectType.Feature:
      return Feature.fromJSON(item);
    default:
      return item;
  }
}
__name(jsonToObject, "jsonToObject");
function buildRequest(options) {
  const requestFn = /* @__PURE__ */ __name(async (requestOptions) => {
    const {
      secretKey,
      machineSecretKey,
      useMachineSecretKey = false,
      requireSecretKey = true,
      apiUrl = API_URL,
      apiVersion = API_VERSION,
      userAgent = USER_AGENT,
      skipApiVersionInUrl = false
    } = options;
    const { path, method, queryParams, headerParams, bodyParams, formData, options: opts } = requestOptions;
    const { deepSnakecaseBodyParamKeys = false } = opts || {};
    if (requireSecretKey) {
      assertValidSecretKey(secretKey);
    }
    const url = skipApiVersionInUrl ? joinPaths(apiUrl, path) : joinPaths(apiUrl, apiVersion, path);
    const finalUrl = new URL(url);
    if (queryParams) {
      const snakecasedQueryParams = snakecase_keys_default({ ...queryParams });
      for (const [key, val] of Object.entries(snakecasedQueryParams)) {
        if (val) {
          [val].flat().forEach((v) => finalUrl.searchParams.append(key, v));
        }
      }
    }
    const headers = new Headers({
      "Clerk-API-Version": SUPPORTED_BAPI_VERSION,
      [constants.Headers.UserAgent]: userAgent,
      ...headerParams
    });
    const authorizationHeader = constants.Headers.Authorization;
    if (!headers.has(authorizationHeader)) {
      if (useMachineSecretKey && machineSecretKey) {
        headers.set(authorizationHeader, `Bearer ${machineSecretKey}`);
      } else if (secretKey) {
        headers.set(authorizationHeader, `Bearer ${secretKey}`);
      }
    }
    let res;
    try {
      if (formData) {
        res = await runtime.fetch(finalUrl.href, {
          method,
          headers,
          body: formData
        });
      } else {
        headers.set("Content-Type", "application/json");
        const buildBody = /* @__PURE__ */ __name(() => {
          const hasBody = method !== "GET" && bodyParams && Object.keys(bodyParams).length > 0;
          if (!hasBody) {
            return null;
          }
          const formatKeys = /* @__PURE__ */ __name((object) => snakecase_keys_default(object, { deep: deepSnakecaseBodyParamKeys }), "formatKeys");
          return {
            body: JSON.stringify(Array.isArray(bodyParams) ? bodyParams.map(formatKeys) : formatKeys(bodyParams))
          };
        }, "buildBody");
        res = await runtime.fetch(finalUrl.href, {
          method,
          headers,
          ...buildBody()
        });
      }
      const isJSONResponse = res?.headers && res.headers?.get(constants.Headers.ContentType) === constants.ContentTypes.Json;
      const responseBody = await (isJSONResponse ? res.json() : res.text());
      if (!res.ok) {
        return {
          data: null,
          errors: parseErrors2(responseBody),
          status: res?.status,
          statusText: res?.statusText,
          clerkTraceId: getTraceId(responseBody, res?.headers),
          retryAfter: getRetryAfter(res?.headers)
        };
      }
      return {
        ...deserialize(responseBody),
        errors: null
      };
    } catch (err) {
      if (err instanceof Error) {
        return {
          data: null,
          errors: [
            {
              code: "unexpected_error",
              message: err.message || "Unexpected error"
            }
          ],
          clerkTraceId: getTraceId(err, res?.headers)
        };
      }
      return {
        data: null,
        errors: parseErrors2(err),
        status: res?.status,
        statusText: res?.statusText,
        clerkTraceId: getTraceId(err, res?.headers),
        retryAfter: getRetryAfter(res?.headers)
      };
    }
  }, "requestFn");
  return withLegacyRequestReturn(requestFn);
}
__name(buildRequest, "buildRequest");
function getTraceId(data, headers) {
  if (data && typeof data === "object" && "clerk_trace_id" in data && typeof data.clerk_trace_id === "string") {
    return data.clerk_trace_id;
  }
  const cfRay = headers?.get("cf-ray");
  return cfRay || "";
}
__name(getTraceId, "getTraceId");
function getRetryAfter(headers) {
  const retryAfter = headers?.get("Retry-After");
  if (!retryAfter) {
    return;
  }
  const value = parseInt(retryAfter, 10);
  if (isNaN(value)) {
    return;
  }
  return value;
}
__name(getRetryAfter, "getRetryAfter");
function parseErrors2(data) {
  if (!!data && typeof data === "object" && "errors" in data) {
    const errors = data.errors;
    return errors.length > 0 ? errors.map(parseError) : [];
  }
  return [];
}
__name(parseErrors2, "parseErrors");
function withLegacyRequestReturn(cb) {
  return async (...args) => {
    const { data, errors, totalCount, status, statusText, clerkTraceId, retryAfter } = await cb(...args);
    if (errors) {
      const error = new ClerkAPIResponseError(statusText || "", {
        data: [],
        status,
        clerkTraceId,
        retryAfter
      });
      error.errors = errors;
      throw error;
    }
    if (typeof totalCount !== "undefined") {
      return { data, totalCount };
    }
    return data;
  };
}
__name(withLegacyRequestReturn, "withLegacyRequestReturn");
function createBackendApiClient(options) {
  const request = buildRequest(options);
  return {
    __experimental_accountlessApplications: new AccountlessApplicationAPI(
      buildRequest({ ...options, requireSecretKey: false })
    ),
    actorTokens: new ActorTokenAPI(request),
    /**
     * @experimental This is an experimental API for the Agent Tasks feature that is available under a private beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
     */
    agentTasks: new AgentTaskAPI(request),
    allowlistIdentifiers: new AllowlistIdentifierAPI(request),
    apiKeys: new APIKeysAPI(
      buildRequest({
        ...options,
        skipApiVersionInUrl: true
      })
    ),
    betaFeatures: new BetaFeaturesAPI(request),
    blocklistIdentifiers: new BlocklistIdentifierAPI(request),
    /**
     * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
     */
    billing: new BillingAPI(request),
    clients: new ClientAPI(request),
    domains: new DomainAPI(request),
    emailAddresses: new EmailAddressAPI(request),
    idPOAuthAccessToken: new IdPOAuthAccessTokenApi(
      buildRequest({
        ...options,
        skipApiVersionInUrl: true
      })
    ),
    instance: new InstanceAPI(request),
    invitations: new InvitationAPI(request),
    jwks: new JwksAPI(request),
    jwtTemplates: new JwtTemplatesApi(request),
    machines: new MachineApi(request),
    m2m: new M2MTokenApi(
      buildRequest({
        ...options,
        skipApiVersionInUrl: true,
        requireSecretKey: false,
        useMachineSecretKey: true
      }),
      {
        secretKey: options.secretKey,
        apiUrl: options.apiUrl,
        jwtKey: options.jwtKey
      }
    ),
    oauthApplications: new OAuthApplicationsApi(request),
    organizations: new OrganizationAPI(request),
    phoneNumbers: new PhoneNumberAPI(request),
    proxyChecks: new ProxyCheckAPI(request),
    redirectUrls: new RedirectUrlAPI(request),
    samlConnections: new SamlConnectionAPI(request),
    sessions: new SessionAPI(request),
    signInTokens: new SignInTokenAPI(request),
    signUps: new SignUpAPI(request),
    testingTokens: new TestingTokenAPI(request),
    users: new UserAPI(request),
    waitlistEntries: new WaitlistEntryAPI(request),
    webhooks: new WebhookAPI(request)
  };
}
__name(createBackendApiClient, "createBackendApiClient");
var createDebug = /* @__PURE__ */ __name((data) => {
  return () => {
    const res = { ...data };
    res.secretKey = (res.secretKey || "").substring(0, 7);
    res.jwtKey = (res.jwtKey || "").substring(0, 7);
    return { ...res };
  };
}, "createDebug");
function signedInAuthObject(authenticateContext, sessionToken, sessionClaims) {
  const { actor, sessionId, sessionStatus, userId, orgId, orgRole, orgSlug, orgPermissions, factorVerificationAge } = __experimental_JWTPayloadToAuthObjectProperties(sessionClaims);
  const apiClient = createBackendApiClient(authenticateContext);
  const getToken = createGetToken({
    sessionId,
    sessionToken,
    fetcher: /* @__PURE__ */ __name(async (sessionId2, template, expiresInSeconds) => (await apiClient.sessions.getToken(sessionId2, template || "", expiresInSeconds)).jwt, "fetcher")
  });
  return {
    tokenType: TokenType.SessionToken,
    actor,
    sessionClaims,
    sessionId,
    sessionStatus,
    userId,
    orgId,
    orgRole,
    orgSlug,
    orgPermissions,
    factorVerificationAge,
    getToken,
    has: createCheckAuthorization({
      orgId,
      orgRole,
      orgPermissions,
      userId,
      factorVerificationAge,
      features: sessionClaims.fea || "",
      plans: sessionClaims.pla || ""
    }),
    debug: createDebug({ ...authenticateContext, sessionToken }),
    isAuthenticated: true
  };
}
__name(signedInAuthObject, "signedInAuthObject");
function signedOutAuthObject(debugData, initialSessionStatus) {
  return {
    tokenType: TokenType.SessionToken,
    sessionClaims: null,
    sessionId: null,
    sessionStatus: initialSessionStatus ?? null,
    userId: null,
    actor: null,
    orgId: null,
    orgRole: null,
    orgSlug: null,
    orgPermissions: null,
    factorVerificationAge: null,
    getToken: /* @__PURE__ */ __name(() => Promise.resolve(null), "getToken"),
    has: /* @__PURE__ */ __name(() => false, "has"),
    debug: createDebug(debugData),
    isAuthenticated: false
  };
}
__name(signedOutAuthObject, "signedOutAuthObject");
function authenticatedMachineObject(tokenType, token, verificationResult, debugData) {
  const baseObject = {
    id: verificationResult.id,
    subject: verificationResult.subject,
    getToken: /* @__PURE__ */ __name(() => Promise.resolve(token), "getToken"),
    has: /* @__PURE__ */ __name(() => false, "has"),
    debug: createDebug(debugData),
    isAuthenticated: true
  };
  switch (tokenType) {
    case TokenType.ApiKey: {
      const result2 = verificationResult;
      return {
        ...baseObject,
        tokenType,
        name: result2.name,
        claims: result2.claims,
        scopes: result2.scopes,
        userId: result2.subject.startsWith("user_") ? result2.subject : null,
        orgId: result2.subject.startsWith("org_") ? result2.subject : null
      };
    }
    case TokenType.M2MToken: {
      const result2 = verificationResult;
      return {
        ...baseObject,
        tokenType,
        claims: result2.claims,
        scopes: result2.scopes,
        machineId: result2.subject
      };
    }
    case TokenType.OAuthToken: {
      const result2 = verificationResult;
      return {
        ...baseObject,
        tokenType,
        scopes: result2.scopes,
        userId: result2.subject,
        clientId: result2.clientId
      };
    }
    default:
      throw new Error(`Invalid token type: ${tokenType}`);
  }
}
__name(authenticatedMachineObject, "authenticatedMachineObject");
function unauthenticatedMachineObject(tokenType, debugData) {
  const baseObject = {
    id: null,
    subject: null,
    scopes: null,
    has: /* @__PURE__ */ __name(() => false, "has"),
    getToken: /* @__PURE__ */ __name(() => Promise.resolve(null), "getToken"),
    debug: createDebug(debugData),
    isAuthenticated: false
  };
  switch (tokenType) {
    case TokenType.ApiKey: {
      return {
        ...baseObject,
        tokenType,
        name: null,
        claims: null,
        scopes: null,
        userId: null,
        orgId: null
      };
    }
    case TokenType.M2MToken: {
      return {
        ...baseObject,
        tokenType,
        claims: null,
        scopes: null,
        machineId: null
      };
    }
    case TokenType.OAuthToken: {
      return {
        ...baseObject,
        tokenType,
        scopes: null,
        userId: null,
        clientId: null
      };
    }
    default:
      throw new Error(`Invalid token type: ${tokenType}`);
  }
}
__name(unauthenticatedMachineObject, "unauthenticatedMachineObject");
function invalidTokenAuthObject() {
  return {
    isAuthenticated: false,
    tokenType: null,
    getToken: /* @__PURE__ */ __name(() => Promise.resolve(null), "getToken"),
    has: /* @__PURE__ */ __name(() => false, "has"),
    debug: /* @__PURE__ */ __name(() => ({}), "debug")
  };
}
__name(invalidTokenAuthObject, "invalidTokenAuthObject");
var createGetToken = /* @__PURE__ */ __name((params) => {
  const { fetcher, sessionToken, sessionId } = params || {};
  return async (options = {}) => {
    if (!sessionId) {
      return null;
    }
    if (options.template || options.expiresInSeconds !== void 0) {
      return fetcher(sessionId, options.template, options.expiresInSeconds);
    }
    return sessionToken;
  };
}, "createGetToken");
var getAuthObjectFromJwt = /* @__PURE__ */ __name((jwt, { treatPendingAsSignedOut = true, ...options }) => {
  const authObject = signedInAuthObject(options, jwt.raw.text, jwt.payload);
  if (treatPendingAsSignedOut && authObject.sessionStatus === "pending") {
    return signedOutAuthObject(options, authObject.sessionStatus);
  }
  return authObject;
}, "getAuthObjectFromJwt");
var getAuthObjectForAcceptedToken = /* @__PURE__ */ __name(({
  authObject,
  acceptsToken = TokenType.SessionToken
}) => {
  if (acceptsToken === "any") {
    return authObject;
  }
  if (Array.isArray(acceptsToken)) {
    if (!isTokenTypeAccepted(authObject.tokenType, acceptsToken)) {
      return invalidTokenAuthObject();
    }
    return authObject;
  }
  if (!isTokenTypeAccepted(authObject.tokenType, acceptsToken)) {
    if (isMachineTokenType(acceptsToken)) {
      return unauthenticatedMachineObject(acceptsToken, authObject.debug);
    }
    return signedOutAuthObject(authObject.debug);
  }
  return authObject;
}, "getAuthObjectForAcceptedToken");
var AuthStatus = {
  SignedIn: "signed-in",
  SignedOut: "signed-out",
  Handshake: "handshake"
};
var AuthErrorReason = {
  ClientUATWithoutSessionToken: "client-uat-but-no-session-token",
  DevBrowserMissing: "dev-browser-missing",
  DevBrowserSync: "dev-browser-sync",
  PrimaryRespondsToSyncing: "primary-responds-to-syncing",
  PrimaryDomainCrossOriginSync: "primary-domain-cross-origin-sync",
  SatelliteCookieNeedsSyncing: "satellite-needs-syncing",
  SessionTokenAndUATMissing: "session-token-and-uat-missing",
  SessionTokenMissing: "session-token-missing",
  SessionTokenExpired: "session-token-expired",
  SessionTokenIATBeforeClientUAT: "session-token-iat-before-client-uat",
  SessionTokenNBF: "session-token-nbf",
  SessionTokenIatInTheFuture: "session-token-iat-in-the-future",
  SessionTokenWithoutClientUAT: "session-token-but-no-client-uat",
  ActiveOrganizationMismatch: "active-organization-mismatch",
  TokenTypeMismatch: "token-type-mismatch",
  UnexpectedError: "unexpected-error"
};
function signedIn(params) {
  const { authenticateContext, headers = new Headers(), token } = params;
  const toAuth = /* @__PURE__ */ __name(({ treatPendingAsSignedOut = true } = {}) => {
    if (params.tokenType === TokenType.SessionToken) {
      const { sessionClaims } = params;
      const authObject = signedInAuthObject(authenticateContext, token, sessionClaims);
      if (treatPendingAsSignedOut && authObject.sessionStatus === "pending") {
        return signedOutAuthObject(void 0, authObject.sessionStatus);
      }
      return authObject;
    }
    const { machineData } = params;
    return authenticatedMachineObject(params.tokenType, token, machineData, authenticateContext);
  }, "toAuth");
  return {
    status: AuthStatus.SignedIn,
    reason: null,
    message: null,
    proxyUrl: authenticateContext.proxyUrl || "",
    publishableKey: authenticateContext.publishableKey || "",
    isSatellite: authenticateContext.isSatellite || false,
    domain: authenticateContext.domain || "",
    signInUrl: authenticateContext.signInUrl || "",
    signUpUrl: authenticateContext.signUpUrl || "",
    afterSignInUrl: authenticateContext.afterSignInUrl || "",
    afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
    isSignedIn: true,
    isAuthenticated: true,
    tokenType: params.tokenType,
    toAuth,
    headers,
    token
  };
}
__name(signedIn, "signedIn");
function signedOut(params) {
  const { authenticateContext, headers = new Headers(), reason, message = "", tokenType } = params;
  const toAuth = /* @__PURE__ */ __name(() => {
    if (tokenType === TokenType.SessionToken) {
      return signedOutAuthObject({ ...authenticateContext, status: AuthStatus.SignedOut, reason, message });
    }
    return unauthenticatedMachineObject(tokenType, { reason, message, headers });
  }, "toAuth");
  return withDebugHeaders({
    status: AuthStatus.SignedOut,
    reason,
    message,
    proxyUrl: authenticateContext.proxyUrl || "",
    publishableKey: authenticateContext.publishableKey || "",
    isSatellite: authenticateContext.isSatellite || false,
    domain: authenticateContext.domain || "",
    signInUrl: authenticateContext.signInUrl || "",
    signUpUrl: authenticateContext.signUpUrl || "",
    afterSignInUrl: authenticateContext.afterSignInUrl || "",
    afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
    isSignedIn: false,
    isAuthenticated: false,
    tokenType,
    toAuth,
    headers,
    token: null
  });
}
__name(signedOut, "signedOut");
function handshake(authenticateContext, reason, message = "", headers) {
  return withDebugHeaders({
    status: AuthStatus.Handshake,
    reason,
    message,
    publishableKey: authenticateContext.publishableKey || "",
    isSatellite: authenticateContext.isSatellite || false,
    domain: authenticateContext.domain || "",
    proxyUrl: authenticateContext.proxyUrl || "",
    signInUrl: authenticateContext.signInUrl || "",
    signUpUrl: authenticateContext.signUpUrl || "",
    afterSignInUrl: authenticateContext.afterSignInUrl || "",
    afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
    isSignedIn: false,
    isAuthenticated: false,
    tokenType: TokenType.SessionToken,
    toAuth: /* @__PURE__ */ __name(() => null, "toAuth"),
    headers,
    token: null
  });
}
__name(handshake, "handshake");
function signedOutInvalidToken() {
  const authObject = invalidTokenAuthObject();
  return withDebugHeaders({
    status: AuthStatus.SignedOut,
    reason: AuthErrorReason.TokenTypeMismatch,
    message: "",
    proxyUrl: "",
    publishableKey: "",
    isSatellite: false,
    domain: "",
    signInUrl: "",
    signUpUrl: "",
    afterSignInUrl: "",
    afterSignUpUrl: "",
    isSignedIn: false,
    isAuthenticated: false,
    tokenType: null,
    toAuth: /* @__PURE__ */ __name(() => authObject, "toAuth"),
    headers: new Headers(),
    token: null
  });
}
__name(signedOutInvalidToken, "signedOutInvalidToken");
var withDebugHeaders = /* @__PURE__ */ __name((requestState) => {
  const headers = new Headers(requestState.headers || {});
  if (requestState.message) {
    try {
      headers.set(constants.Headers.AuthMessage, requestState.message);
    } catch {
    }
  }
  if (requestState.reason) {
    try {
      headers.set(constants.Headers.AuthReason, requestState.reason);
    } catch {
    }
  }
  if (requestState.status) {
    try {
      headers.set(constants.Headers.AuthStatus, requestState.status);
    } catch {
    }
  }
  requestState.headers = headers;
  return requestState;
}, "withDebugHeaders");
var import_cookie = __toESM2(require_dist());
var ClerkUrl = class extends URL {
  static {
    __name(this, "ClerkUrl");
  }
  isCrossOrigin(other) {
    return this.origin !== new URL(other.toString()).origin;
  }
};
var createClerkUrl = /* @__PURE__ */ __name((...args) => {
  return new ClerkUrl(...args);
}, "createClerkUrl");
var ClerkRequest = class extends Request {
  static {
    __name(this, "ClerkRequest");
  }
  constructor(input, init) {
    const url = typeof input !== "string" && "url" in input ? input.url : String(input);
    super(url, init || typeof input === "string" ? void 0 : input);
    this.clerkUrl = this.deriveUrlFromHeaders(this);
    this.cookies = this.parseCookies(this);
  }
  toJSON() {
    return {
      url: this.clerkUrl.href,
      method: this.method,
      headers: JSON.stringify(Object.fromEntries(this.headers)),
      clerkUrl: this.clerkUrl.toString(),
      cookies: JSON.stringify(Object.fromEntries(this.cookies))
    };
  }
  /**
   * Used to fix request.url using the x-forwarded-* headers
   * TODO add detailed description of the issues this solves
   */
  deriveUrlFromHeaders(req) {
    const initialUrl = new URL(req.url);
    const forwardedProto = req.headers.get(constants.Headers.ForwardedProto);
    const forwardedHost = req.headers.get(constants.Headers.ForwardedHost);
    const host = req.headers.get(constants.Headers.Host);
    const protocol = initialUrl.protocol;
    const resolvedHost = this.getFirstValueFromHeader(forwardedHost) ?? host;
    const resolvedProtocol = this.getFirstValueFromHeader(forwardedProto) ?? protocol?.replace(/[:/]/, "");
    const origin = resolvedHost && resolvedProtocol ? `${resolvedProtocol}://${resolvedHost}` : initialUrl.origin;
    if (origin === initialUrl.origin) {
      return createClerkUrl(initialUrl);
    }
    return createClerkUrl(initialUrl.pathname + initialUrl.search, origin);
  }
  getFirstValueFromHeader(value) {
    return value?.split(",")[0];
  }
  parseCookies(req) {
    const cookiesRecord = (0, import_cookie.parse)(this.decodeCookieValue(req.headers.get("cookie") || ""));
    return new Map(Object.entries(cookiesRecord));
  }
  decodeCookieValue(str) {
    return str ? str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : str;
  }
};
var createClerkRequest = /* @__PURE__ */ __name((...args) => {
  const isClerkRequest = args[0] && typeof args[0] === "object" && "clerkUrl" in args[0] && "cookies" in args[0];
  return isClerkRequest ? args[0] : new ClerkRequest(...args);
}, "createClerkRequest");
var getCookieName = /* @__PURE__ */ __name((cookieDirective) => {
  return cookieDirective.split(";")[0]?.split("=")[0];
}, "getCookieName");
var getCookieValue = /* @__PURE__ */ __name((cookieDirective) => {
  return cookieDirective.split(";")[0]?.split("=")[1];
}, "getCookieValue");
async function verifyToken(token, options) {
  const { data: decodedResult, errors } = decodeJwt(token);
  if (errors) {
    return { errors };
  }
  const { header } = decodedResult;
  const { kid } = header;
  try {
    let key;
    if (options.jwtKey) {
      key = loadClerkJwkFromPem({ kid, pem: options.jwtKey });
    } else if (options.secretKey) {
      key = await loadClerkJWKFromRemote({ ...options, kid });
    } else {
      return {
        errors: [
          new TokenVerificationError({
            action: TokenVerificationErrorAction.SetClerkJWTKey,
            message: "Failed to resolve JWK during verification.",
            reason: TokenVerificationErrorReason.JWKFailedToResolve
          })
        ]
      };
    }
    return await verifyJwt(token, { ...options, key });
  } catch (error) {
    return { errors: [error] };
  }
}
__name(verifyToken, "verifyToken");
function handleClerkAPIError(tokenType, err, notFoundMessage) {
  if (isClerkAPIResponseError(err)) {
    let code;
    let message;
    switch (err.status) {
      case 401:
        code = MachineTokenVerificationErrorCode.InvalidSecretKey;
        message = err.errors[0]?.message || "Invalid secret key";
        break;
      case 404:
        code = MachineTokenVerificationErrorCode.TokenInvalid;
        message = notFoundMessage;
        break;
      default:
        code = MachineTokenVerificationErrorCode.UnexpectedError;
        message = "Unexpected error";
    }
    return {
      data: void 0,
      tokenType,
      errors: [
        new MachineTokenVerificationError({
          message,
          code,
          status: err.status
        })
      ]
    };
  }
  return {
    data: void 0,
    tokenType,
    errors: [
      new MachineTokenVerificationError({
        message: "Unexpected error",
        code: MachineTokenVerificationErrorCode.UnexpectedError,
        status: err.status
      })
    ]
  };
}
__name(handleClerkAPIError, "handleClerkAPIError");
async function verifyM2MToken(token, options) {
  try {
    const client = createBackendApiClient(options);
    const verifiedToken = await client.m2m.verify({ token });
    return { data: verifiedToken, tokenType: TokenType.M2MToken, errors: void 0 };
  } catch (err) {
    return handleClerkAPIError(TokenType.M2MToken, err, "Machine token not found");
  }
}
__name(verifyM2MToken, "verifyM2MToken");
async function verifyOAuthToken(accessToken, options) {
  try {
    const client = createBackendApiClient(options);
    const verifiedToken = await client.idPOAuthAccessToken.verify(accessToken);
    return { data: verifiedToken, tokenType: TokenType.OAuthToken, errors: void 0 };
  } catch (err) {
    return handleClerkAPIError(TokenType.OAuthToken, err, "OAuth token not found");
  }
}
__name(verifyOAuthToken, "verifyOAuthToken");
async function verifyAPIKey(secret, options) {
  try {
    const client = createBackendApiClient(options);
    const verifiedToken = await client.apiKeys.verify(secret);
    return { data: verifiedToken, tokenType: TokenType.ApiKey, errors: void 0 };
  } catch (err) {
    return handleClerkAPIError(TokenType.ApiKey, err, "API key not found");
  }
}
__name(verifyAPIKey, "verifyAPIKey");
async function verifyMachineAuthToken(token, options) {
  if (isJwtFormat(token)) {
    let decodedResult;
    try {
      const { data, errors: decodeErrors } = decodeJwt(token);
      if (decodeErrors) {
        throw decodeErrors[0];
      }
      decodedResult = data;
    } catch (e) {
      return {
        data: void 0,
        tokenType: TokenType.M2MToken,
        errors: [
          new MachineTokenVerificationError({
            code: MachineTokenVerificationErrorCode.TokenInvalid,
            message: e.message
          })
        ]
      };
    }
    if (decodedResult.payload.sub.startsWith(M2M_SUBJECT_PREFIX)) {
      return verifyM2MJwt(token, decodedResult, options);
    }
    if (OAUTH_ACCESS_TOKEN_TYPES.includes(decodedResult.header.typ)) {
      return verifyOAuthJwt(token, decodedResult, options);
    }
    return {
      data: void 0,
      tokenType: TokenType.OAuthToken,
      errors: [
        new MachineTokenVerificationError({
          code: MachineTokenVerificationErrorCode.TokenVerificationFailed,
          message: `Invalid JWT type: ${decodedResult.header.typ ?? "missing"}. Expected one of: ${OAUTH_ACCESS_TOKEN_TYPES.join(", ")} for OAuth, or sub starting with 'mch_' for M2M`
        })
      ]
    };
  }
  if (token.startsWith(M2M_TOKEN_PREFIX)) {
    return verifyM2MToken(token, options);
  }
  if (token.startsWith(OAUTH_TOKEN_PREFIX)) {
    return verifyOAuthToken(token, options);
  }
  if (token.startsWith(API_KEY_PREFIX)) {
    return verifyAPIKey(token, options);
  }
  throw new Error("Unknown machine token type");
}
__name(verifyMachineAuthToken, "verifyMachineAuthToken");
async function verifyHandshakeJwt(token, { key }) {
  const { data: decoded, errors } = decodeJwt(token);
  if (errors) {
    throw errors[0];
  }
  const { header, payload } = decoded;
  const { typ, alg } = header;
  assertHeaderType(typ);
  assertHeaderAlgorithm(alg);
  const { data: signatureValid, errors: signatureErrors } = await hasValidSignature(decoded, key);
  if (signatureErrors) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenVerificationFailed,
      message: `Error verifying handshake token. ${signatureErrors[0]}`
    });
  }
  if (!signatureValid) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenInvalidSignature,
      message: "Handshake signature is invalid."
    });
  }
  return payload;
}
__name(verifyHandshakeJwt, "verifyHandshakeJwt");
async function verifyHandshakeToken(token, options) {
  const { secretKey, apiUrl, apiVersion, jwksCacheTtlInMs, jwtKey, skipJwksCache } = options;
  const { data, errors } = decodeJwt(token);
  if (errors) {
    throw errors[0];
  }
  const { kid } = data.header;
  let key;
  if (jwtKey) {
    key = loadClerkJwkFromPem({ kid, pem: jwtKey });
  } else if (secretKey) {
    key = await loadClerkJWKFromRemote({ secretKey, apiUrl, apiVersion, kid, jwksCacheTtlInMs, skipJwksCache });
  } else {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.SetClerkJWTKey,
      message: "Failed to resolve JWK during handshake verification.",
      reason: TokenVerificationErrorReason.JWKFailedToResolve
    });
  }
  return verifyHandshakeJwt(token, { key });
}
__name(verifyHandshakeToken, "verifyHandshakeToken");
var HandshakeService = class {
  static {
    __name(this, "HandshakeService");
  }
  constructor(authenticateContext, options, organizationMatcher) {
    this.authenticateContext = authenticateContext;
    this.options = options;
    this.organizationMatcher = organizationMatcher;
  }
  /**
   * Determines if a request is eligible for handshake based on its headers
   *
   * Currently, a request is only eligible for a handshake if we can say it's *probably* a request for a document, not a fetch or some other exotic request.
   * This heuristic should give us a reliable enough signal for browsers that support `Sec-Fetch-Dest` and for those that don't.
   *
   * @returns boolean indicating if the request is eligible for handshake
   */
  isRequestEligibleForHandshake() {
    const { accept, secFetchDest } = this.authenticateContext;
    if (secFetchDest === "document" || secFetchDest === "iframe") {
      return true;
    }
    if (!secFetchDest && accept?.startsWith("text/html")) {
      return true;
    }
    return false;
  }
  /**
   * Builds the redirect headers for a handshake request
   * @param reason - The reason for the handshake (e.g. 'session-token-expired')
   * @returns Headers object containing the Location header for redirect
   * @throws Error if clerkUrl is missing in authenticateContext
   */
  buildRedirectToHandshake(reason) {
    if (!this.authenticateContext?.clerkUrl) {
      throw new Error("Missing clerkUrl in authenticateContext");
    }
    const redirectUrl = this.removeDevBrowserFromURL(this.authenticateContext.clerkUrl);
    let baseUrl = this.authenticateContext.frontendApi.startsWith("http") ? this.authenticateContext.frontendApi : `https://${this.authenticateContext.frontendApi}`;
    baseUrl = baseUrl.replace(/\/+$/, "") + "/";
    const url = new URL("v1/client/handshake", baseUrl);
    url.searchParams.append("redirect_url", redirectUrl?.href || "");
    url.searchParams.append("__clerk_api_version", SUPPORTED_BAPI_VERSION);
    url.searchParams.append(
      constants.QueryParameters.SuffixedCookies,
      this.authenticateContext.usesSuffixedCookies().toString()
    );
    url.searchParams.append(constants.QueryParameters.HandshakeReason, reason);
    url.searchParams.append(constants.QueryParameters.HandshakeFormat, "nonce");
    if (this.authenticateContext.sessionToken) {
      url.searchParams.append(constants.QueryParameters.Session, this.authenticateContext.sessionToken);
    }
    if (this.authenticateContext.instanceType === "development" && this.authenticateContext.devBrowserToken) {
      url.searchParams.append(constants.QueryParameters.DevBrowser, this.authenticateContext.devBrowserToken);
    }
    const toActivate = this.getOrganizationSyncTarget(this.authenticateContext.clerkUrl, this.organizationMatcher);
    if (toActivate) {
      const params = this.getOrganizationSyncQueryParams(toActivate);
      params.forEach((value, key) => {
        url.searchParams.append(key, value);
      });
    }
    return new Headers({ [constants.Headers.Location]: url.href });
  }
  /**
   * Gets cookies from either a handshake nonce or a handshake token
   * @returns Promise resolving to string array of cookie directives
   */
  async getCookiesFromHandshake() {
    const cookiesToSet = [];
    if (this.authenticateContext.handshakeNonce) {
      try {
        const handshakePayload = await this.authenticateContext.apiClient?.clients.getHandshakePayload({
          nonce: this.authenticateContext.handshakeNonce
        });
        if (handshakePayload) {
          cookiesToSet.push(...handshakePayload.directives);
        }
      } catch (error) {
        console.error("Clerk: HandshakeService: error getting handshake payload:", error);
      }
    } else if (this.authenticateContext.handshakeToken) {
      const handshakePayload = await verifyHandshakeToken(
        this.authenticateContext.handshakeToken,
        this.authenticateContext
      );
      if (handshakePayload && Array.isArray(handshakePayload.handshake)) {
        cookiesToSet.push(...handshakePayload.handshake);
      }
    }
    return cookiesToSet;
  }
  /**
   * Resolves a handshake request by verifying the handshake token and setting appropriate cookies
   * @returns Promise resolving to either a SignedInState or SignedOutState
   * @throws Error if handshake verification fails or if there are issues with the session token
   */
  async resolveHandshake() {
    const headers = new Headers({
      "Access-Control-Allow-Origin": "null",
      "Access-Control-Allow-Credentials": "true"
    });
    const cookiesToSet = await this.getCookiesFromHandshake();
    let sessionToken = "";
    cookiesToSet.forEach((x) => {
      headers.append("Set-Cookie", x);
      if (getCookieName(x).startsWith(constants.Cookies.Session)) {
        sessionToken = getCookieValue(x);
      }
    });
    if (this.authenticateContext.instanceType === "development") {
      const newUrl = new URL(this.authenticateContext.clerkUrl);
      newUrl.searchParams.delete(constants.QueryParameters.Handshake);
      newUrl.searchParams.delete(constants.QueryParameters.HandshakeHelp);
      newUrl.searchParams.delete(constants.QueryParameters.DevBrowser);
      newUrl.searchParams.delete(constants.QueryParameters.HandshakeNonce);
      headers.append(constants.Headers.Location, newUrl.toString());
      headers.set(constants.Headers.CacheControl, "no-store");
    }
    if (sessionToken === "") {
      return signedOut({
        tokenType: TokenType.SessionToken,
        authenticateContext: this.authenticateContext,
        reason: AuthErrorReason.SessionTokenMissing,
        message: "",
        headers
      });
    }
    const { data, errors: [error] = [] } = await verifyToken(sessionToken, this.authenticateContext);
    if (data) {
      return signedIn({
        tokenType: TokenType.SessionToken,
        authenticateContext: this.authenticateContext,
        sessionClaims: data,
        headers,
        token: sessionToken
      });
    }
    if (this.authenticateContext.instanceType === "development" && (error?.reason === TokenVerificationErrorReason.TokenExpired || error?.reason === TokenVerificationErrorReason.TokenNotActiveYet || error?.reason === TokenVerificationErrorReason.TokenIatInTheFuture)) {
      const developmentError = new TokenVerificationError({
        action: error.action,
        message: error.message,
        reason: error.reason
      });
      developmentError.tokenCarrier = "cookie";
      console.error(
        `Clerk: Clock skew detected. This usually means that your system clock is inaccurate. Clerk will attempt to account for the clock skew in development.

To resolve this issue, make sure your system's clock is set to the correct time (e.g. turn off and on automatic time synchronization).

---

${developmentError.getFullMessage()}`
      );
      const { data: retryResult, errors: [retryError] = [] } = await verifyToken(sessionToken, {
        ...this.authenticateContext,
        clockSkewInMs: 864e5
      });
      if (retryResult) {
        return signedIn({
          tokenType: TokenType.SessionToken,
          authenticateContext: this.authenticateContext,
          sessionClaims: retryResult,
          headers,
          token: sessionToken
        });
      }
      throw new Error(retryError?.message || "Clerk: Handshake retry failed.");
    }
    throw new Error(error?.message || "Clerk: Handshake failed.");
  }
  /**
   * Handles handshake token verification errors in development mode
   * @param error - The TokenVerificationError that occurred
   * @throws Error with a descriptive message about the verification failure
   */
  handleTokenVerificationErrorInDevelopment(error) {
    if (error.reason === TokenVerificationErrorReason.TokenInvalidSignature) {
      const msg = `Clerk: Handshake token verification failed due to an invalid signature. If you have switched Clerk keys locally, clear your cookies and try again.`;
      throw new Error(msg);
    }
    throw new Error(`Clerk: Handshake token verification failed: ${error.getFullMessage()}.`);
  }
  /**
   * Checks if a redirect loop is detected and sets headers to track redirect count
   * @param headers - The Headers object to modify
   * @returns boolean indicating if a redirect loop was detected (true) or if the request can proceed (false)
   */
  checkAndTrackRedirectLoop(headers) {
    if (this.authenticateContext.handshakeRedirectLoopCounter === 3) {
      return true;
    }
    const newCounterValue = this.authenticateContext.handshakeRedirectLoopCounter + 1;
    const cookieName = constants.Cookies.RedirectCount;
    headers.append("Set-Cookie", `${cookieName}=${newCounterValue}; SameSite=Lax; HttpOnly; Max-Age=2`);
    return false;
  }
  removeDevBrowserFromURL(url) {
    const updatedURL = new URL(url);
    updatedURL.searchParams.delete(constants.QueryParameters.DevBrowser);
    updatedURL.searchParams.delete(constants.QueryParameters.LegacyDevBrowser);
    return updatedURL;
  }
  getOrganizationSyncTarget(url, matchers) {
    return matchers.findTarget(url);
  }
  getOrganizationSyncQueryParams(toActivate) {
    const ret = /* @__PURE__ */ new Map();
    if (toActivate.type === "personalAccount") {
      ret.set("organization_id", "");
    }
    if (toActivate.type === "organization") {
      if (toActivate.organizationId) {
        ret.set("organization_id", toActivate.organizationId);
      }
      if (toActivate.organizationSlug) {
        ret.set("organization_id", toActivate.organizationSlug);
      }
    }
    return ret;
  }
};
var OrganizationMatcher = class {
  static {
    __name(this, "OrganizationMatcher");
  }
  constructor(options) {
    this.organizationPattern = this.createMatcher(options?.organizationPatterns);
    this.personalAccountPattern = this.createMatcher(options?.personalAccountPatterns);
  }
  createMatcher(pattern) {
    if (!pattern) {
      return null;
    }
    try {
      return match(pattern);
    } catch (e) {
      throw new Error(`Invalid pattern "${pattern}": ${e}`);
    }
  }
  findTarget(url) {
    const orgTarget = this.findOrganizationTarget(url);
    if (orgTarget) {
      return orgTarget;
    }
    return this.findPersonalAccountTarget(url);
  }
  findOrganizationTarget(url) {
    if (!this.organizationPattern) {
      return null;
    }
    try {
      const result2 = this.organizationPattern(url.pathname);
      if (!result2 || !("params" in result2)) {
        return null;
      }
      const params = result2.params;
      if (params.id) {
        return { type: "organization", organizationId: params.id };
      }
      if (params.slug) {
        return { type: "organization", organizationSlug: params.slug };
      }
      return null;
    } catch (e) {
      console.error("Failed to match organization pattern:", e);
      return null;
    }
  }
  findPersonalAccountTarget(url) {
    if (!this.personalAccountPattern) {
      return null;
    }
    try {
      const result2 = this.personalAccountPattern(url.pathname);
      return result2 ? { type: "personalAccount" } : null;
    } catch (e) {
      console.error("Failed to match personal account pattern:", e);
      return null;
    }
  }
};
var RefreshTokenErrorReason = {
  NonEligibleNoCookie: "non-eligible-no-refresh-cookie",
  NonEligibleNonGet: "non-eligible-non-get",
  InvalidSessionToken: "invalid-session-token",
  MissingApiClient: "missing-api-client",
  MissingSessionToken: "missing-session-token",
  MissingRefreshToken: "missing-refresh-token",
  ExpiredSessionTokenDecodeFailed: "expired-session-token-decode-failed",
  ExpiredSessionTokenMissingSidClaim: "expired-session-token-missing-sid-claim",
  FetchError: "fetch-error",
  UnexpectedSDKError: "unexpected-sdk-error",
  UnexpectedBAPIError: "unexpected-bapi-error"
};
function assertSignInUrlExists(signInUrl, key) {
  if (!signInUrl && isDevelopmentFromSecretKey(key)) {
    throw new Error(`Missing signInUrl. Pass a signInUrl for dev instances if an app is satellite`);
  }
}
__name(assertSignInUrlExists, "assertSignInUrlExists");
function assertProxyUrlOrDomain(proxyUrlOrDomain) {
  if (!proxyUrlOrDomain) {
    throw new Error(`Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl`);
  }
}
__name(assertProxyUrlOrDomain, "assertProxyUrlOrDomain");
function assertSignInUrlFormatAndOrigin(_signInUrl, origin) {
  let signInUrl;
  try {
    signInUrl = new URL(_signInUrl);
  } catch {
    throw new Error(`The signInUrl needs to have a absolute url format.`);
  }
  if (signInUrl.origin === origin) {
    throw new Error(`The signInUrl needs to be on a different origin than your satellite application.`);
  }
}
__name(assertSignInUrlFormatAndOrigin, "assertSignInUrlFormatAndOrigin");
function assertMachineSecretOrSecretKey(authenticateContext) {
  if (!authenticateContext.machineSecretKey && !authenticateContext.secretKey) {
    throw new Error(
      "Machine token authentication requires either a Machine secret key or a Clerk secret key. Ensure a Clerk secret key or Machine secret key is set."
    );
  }
}
__name(assertMachineSecretOrSecretKey, "assertMachineSecretOrSecretKey");
function isRequestEligibleForRefresh(err, authenticateContext, request) {
  return err.reason === TokenVerificationErrorReason.TokenExpired && !!authenticateContext.refreshTokenInCookie && request.method === "GET";
}
__name(isRequestEligibleForRefresh, "isRequestEligibleForRefresh");
function checkTokenTypeMismatch(parsedTokenType, acceptsToken, authenticateContext) {
  const mismatch = !isTokenTypeAccepted(parsedTokenType, acceptsToken);
  if (mismatch) {
    const tokenTypeToReturn = typeof acceptsToken === "string" ? acceptsToken : parsedTokenType;
    return signedOut({
      tokenType: tokenTypeToReturn,
      authenticateContext,
      reason: AuthErrorReason.TokenTypeMismatch
    });
  }
  return null;
}
__name(checkTokenTypeMismatch, "checkTokenTypeMismatch");
function isTokenTypeInAcceptedArray(acceptsToken, authenticateContext) {
  let parsedTokenType = null;
  const { tokenInHeader } = authenticateContext;
  if (tokenInHeader) {
    if (isMachineToken(tokenInHeader)) {
      parsedTokenType = getMachineTokenType(tokenInHeader);
    } else {
      parsedTokenType = TokenType.SessionToken;
    }
  }
  const typeToCheck = parsedTokenType ?? TokenType.SessionToken;
  return isTokenTypeAccepted(typeToCheck, acceptsToken);
}
__name(isTokenTypeInAcceptedArray, "isTokenTypeInAcceptedArray");
var authenticateRequest = /* @__PURE__ */ __name(async (request, options) => {
  const authenticateContext = await createAuthenticateContext(createClerkRequest(request), options);
  const acceptsToken = options.acceptsToken ?? TokenType.SessionToken;
  if (acceptsToken !== TokenType.M2MToken) {
    assertValidSecretKey(authenticateContext.secretKey);
    if (authenticateContext.isSatellite) {
      assertSignInUrlExists(authenticateContext.signInUrl, authenticateContext.secretKey);
      if (authenticateContext.signInUrl && authenticateContext.origin) {
        assertSignInUrlFormatAndOrigin(authenticateContext.signInUrl, authenticateContext.origin);
      }
      assertProxyUrlOrDomain(authenticateContext.proxyUrl || authenticateContext.domain);
    }
  }
  if (acceptsToken === TokenType.M2MToken) {
    assertMachineSecretOrSecretKey(authenticateContext);
  }
  const organizationMatcher = new OrganizationMatcher(options.organizationSyncOptions);
  const handshakeService = new HandshakeService(
    authenticateContext,
    { organizationSyncOptions: options.organizationSyncOptions },
    organizationMatcher
  );
  async function refreshToken(authenticateContext2) {
    if (!options.apiClient) {
      return {
        data: null,
        error: {
          message: "An apiClient is needed to perform token refresh.",
          cause: { reason: RefreshTokenErrorReason.MissingApiClient }
        }
      };
    }
    const { sessionToken: expiredSessionToken, refreshTokenInCookie: refreshToken2 } = authenticateContext2;
    if (!expiredSessionToken) {
      return {
        data: null,
        error: {
          message: "Session token must be provided.",
          cause: { reason: RefreshTokenErrorReason.MissingSessionToken }
        }
      };
    }
    if (!refreshToken2) {
      return {
        data: null,
        error: {
          message: "Refresh token must be provided.",
          cause: { reason: RefreshTokenErrorReason.MissingRefreshToken }
        }
      };
    }
    const { data: decodeResult, errors: decodedErrors } = decodeJwt(expiredSessionToken);
    if (!decodeResult || decodedErrors) {
      return {
        data: null,
        error: {
          message: "Unable to decode the expired session token.",
          cause: { reason: RefreshTokenErrorReason.ExpiredSessionTokenDecodeFailed, errors: decodedErrors }
        }
      };
    }
    if (!decodeResult?.payload?.sid) {
      return {
        data: null,
        error: {
          message: "Expired session token is missing the `sid` claim.",
          cause: { reason: RefreshTokenErrorReason.ExpiredSessionTokenMissingSidClaim }
        }
      };
    }
    try {
      const response = await options.apiClient.sessions.refreshSession(decodeResult.payload.sid, {
        format: "cookie",
        suffixed_cookies: authenticateContext2.usesSuffixedCookies(),
        expired_token: expiredSessionToken || "",
        refresh_token: refreshToken2 || "",
        request_origin: authenticateContext2.clerkUrl.origin,
        // The refresh endpoint expects headers as Record<string, string[]>, so we need to transform it.
        request_headers: Object.fromEntries(Array.from(request.headers.entries()).map(([k2, v]) => [k2, [v]]))
      });
      return { data: response.cookies, error: null };
    } catch (err) {
      if (err?.errors?.length) {
        if (err.errors[0].code === "unexpected_error") {
          return {
            data: null,
            error: {
              message: `Fetch unexpected error`,
              cause: { reason: RefreshTokenErrorReason.FetchError, errors: err.errors }
            }
          };
        }
        return {
          data: null,
          error: {
            message: err.errors[0].code,
            cause: { reason: err.errors[0].code, errors: err.errors }
          }
        };
      } else {
        return {
          data: null,
          error: {
            message: `Unexpected Server/BAPI error`,
            cause: { reason: RefreshTokenErrorReason.UnexpectedBAPIError, errors: [err] }
          }
        };
      }
    }
  }
  __name(refreshToken, "refreshToken");
  async function attemptRefresh(authenticateContext2) {
    const { data: cookiesToSet, error } = await refreshToken(authenticateContext2);
    if (!cookiesToSet || cookiesToSet.length === 0) {
      return { data: null, error };
    }
    const headers = new Headers();
    let sessionToken = "";
    cookiesToSet.forEach((x) => {
      headers.append("Set-Cookie", x);
      if (getCookieName(x).startsWith(constants.Cookies.Session)) {
        sessionToken = getCookieValue(x);
      }
    });
    const { data: jwtPayload, errors } = await verifyToken(sessionToken, authenticateContext2);
    if (errors) {
      return {
        data: null,
        error: {
          message: `Clerk: unable to verify refreshed session token.`,
          cause: { reason: RefreshTokenErrorReason.InvalidSessionToken, errors }
        }
      };
    }
    return { data: { jwtPayload, sessionToken, headers }, error: null };
  }
  __name(attemptRefresh, "attemptRefresh");
  function handleMaybeHandshakeStatus(authenticateContext2, reason, message, headers) {
    if (!handshakeService.isRequestEligibleForHandshake()) {
      return signedOut({
        tokenType: TokenType.SessionToken,
        authenticateContext: authenticateContext2,
        reason,
        message
      });
    }
    const handshakeHeaders = headers ?? handshakeService.buildRedirectToHandshake(reason);
    if (handshakeHeaders.get(constants.Headers.Location)) {
      handshakeHeaders.set(constants.Headers.CacheControl, "no-store");
    }
    const isRedirectLoop = handshakeService.checkAndTrackRedirectLoop(handshakeHeaders);
    if (isRedirectLoop) {
      const msg = `Clerk: Refreshing the session token resulted in an infinite redirect loop. This usually means that your Clerk instance keys do not match - make sure to copy the correct publishable and secret keys from the Clerk dashboard.`;
      console.log(msg);
      return signedOut({
        tokenType: TokenType.SessionToken,
        authenticateContext: authenticateContext2,
        reason,
        message
      });
    }
    return handshake(authenticateContext2, reason, message, handshakeHeaders);
  }
  __name(handleMaybeHandshakeStatus, "handleMaybeHandshakeStatus");
  function handleMaybeOrganizationSyncHandshake(authenticateContext2, auth2) {
    const organizationSyncTarget = organizationMatcher.findTarget(authenticateContext2.clerkUrl);
    if (!organizationSyncTarget) {
      return null;
    }
    let mustActivate = false;
    if (organizationSyncTarget.type === "organization") {
      if (organizationSyncTarget.organizationSlug && organizationSyncTarget.organizationSlug !== auth2.orgSlug) {
        mustActivate = true;
      }
      if (organizationSyncTarget.organizationId && organizationSyncTarget.organizationId !== auth2.orgId) {
        mustActivate = true;
      }
    }
    if (organizationSyncTarget.type === "personalAccount" && auth2.orgId) {
      mustActivate = true;
    }
    if (!mustActivate) {
      return null;
    }
    if (authenticateContext2.handshakeRedirectLoopCounter >= 3) {
      console.warn(
        "Clerk: Organization activation handshake loop detected. This is likely due to an invalid organization ID or slug. Skipping organization activation."
      );
      return null;
    }
    const handshakeState = handleMaybeHandshakeStatus(
      authenticateContext2,
      AuthErrorReason.ActiveOrganizationMismatch,
      ""
    );
    if (handshakeState.status !== "handshake") {
      return null;
    }
    return handshakeState;
  }
  __name(handleMaybeOrganizationSyncHandshake, "handleMaybeOrganizationSyncHandshake");
  async function authenticateRequestWithTokenInHeader() {
    const { tokenInHeader } = authenticateContext;
    if (isMachineJwt(tokenInHeader)) {
      return signedOut({
        tokenType: TokenType.SessionToken,
        authenticateContext,
        reason: AuthErrorReason.TokenTypeMismatch,
        message: ""
      });
    }
    try {
      const { data, errors } = await verifyToken(tokenInHeader, authenticateContext);
      if (errors) {
        throw errors[0];
      }
      return signedIn({
        tokenType: TokenType.SessionToken,
        authenticateContext,
        sessionClaims: data,
        headers: new Headers(),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        token: tokenInHeader
      });
    } catch (err) {
      return handleSessionTokenError(err, "header");
    }
  }
  __name(authenticateRequestWithTokenInHeader, "authenticateRequestWithTokenInHeader");
  async function authenticateRequestWithTokenInCookie() {
    const hasActiveClient = authenticateContext.clientUat;
    const hasSessionToken = !!authenticateContext.sessionTokenInCookie;
    const hasDevBrowserToken = !!authenticateContext.devBrowserToken;
    if (authenticateContext.handshakeNonce || authenticateContext.handshakeToken) {
      try {
        return await handshakeService.resolveHandshake();
      } catch (error) {
        if (error instanceof TokenVerificationError && authenticateContext.instanceType === "development") {
          handshakeService.handleTokenVerificationErrorInDevelopment(error);
        } else {
          console.error("Clerk: unable to resolve handshake:", error);
        }
      }
    }
    const isRequestEligibleForMultiDomainSync = authenticateContext.isSatellite && authenticateContext.secFetchDest === "document";
    if (authenticateContext.instanceType === "production" && isRequestEligibleForMultiDomainSync) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SatelliteCookieNeedsSyncing, "");
    }
    if (authenticateContext.instanceType === "development" && isRequestEligibleForMultiDomainSync && !authenticateContext.clerkUrl.searchParams.has(constants.QueryParameters.ClerkSynced)) {
      const redirectURL = new URL(authenticateContext.signInUrl);
      redirectURL.searchParams.append(
        constants.QueryParameters.ClerkRedirectUrl,
        authenticateContext.clerkUrl.toString()
      );
      const headers = new Headers({ [constants.Headers.Location]: redirectURL.toString() });
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SatelliteCookieNeedsSyncing, "", headers);
    }
    const redirectUrl = new URL(authenticateContext.clerkUrl).searchParams.get(
      constants.QueryParameters.ClerkRedirectUrl
    );
    if (authenticateContext.instanceType === "development" && !authenticateContext.isSatellite && redirectUrl) {
      const redirectBackToSatelliteUrl = new URL(redirectUrl);
      if (authenticateContext.devBrowserToken) {
        redirectBackToSatelliteUrl.searchParams.append(
          constants.QueryParameters.DevBrowser,
          authenticateContext.devBrowserToken
        );
      }
      redirectBackToSatelliteUrl.searchParams.append(constants.QueryParameters.ClerkSynced, "true");
      const headers = new Headers({ [constants.Headers.Location]: redirectBackToSatelliteUrl.toString() });
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.PrimaryRespondsToSyncing, "", headers);
    }
    if (authenticateContext.instanceType === "development" && authenticateContext.clerkUrl.searchParams.has(constants.QueryParameters.DevBrowser)) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.DevBrowserSync, "");
    }
    if (authenticateContext.instanceType === "development" && !hasDevBrowserToken) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.DevBrowserMissing, "");
    }
    if (!hasActiveClient && !hasSessionToken) {
      return signedOut({
        tokenType: TokenType.SessionToken,
        authenticateContext,
        reason: AuthErrorReason.SessionTokenAndUATMissing
      });
    }
    if (!hasActiveClient && hasSessionToken) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SessionTokenWithoutClientUAT, "");
    }
    if (hasActiveClient && !hasSessionToken) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.ClientUATWithoutSessionToken, "");
    }
    const { data: decodeResult, errors: decodedErrors } = decodeJwt(authenticateContext.sessionTokenInCookie);
    if (decodedErrors) {
      return handleSessionTokenError(decodedErrors[0], "cookie");
    }
    if (decodeResult.payload.iat < authenticateContext.clientUat) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SessionTokenIATBeforeClientUAT, "");
    }
    try {
      const { data, errors } = await verifyToken(authenticateContext.sessionTokenInCookie, authenticateContext);
      if (errors) {
        throw errors[0];
      }
      const signedInRequestState = signedIn({
        tokenType: TokenType.SessionToken,
        authenticateContext,
        sessionClaims: data,
        headers: new Headers(),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        token: authenticateContext.sessionTokenInCookie
      });
      const shouldForceHandshakeForCrossDomain = !authenticateContext.isSatellite && // We're on primary
      authenticateContext.secFetchDest === "document" && // Document navigation
      authenticateContext.isCrossOriginReferrer() && // Came from different domain
      !authenticateContext.isKnownClerkReferrer() && // Not from Clerk accounts portal or FAPI
      authenticateContext.handshakeRedirectLoopCounter === 0;
      if (shouldForceHandshakeForCrossDomain) {
        return handleMaybeHandshakeStatus(
          authenticateContext,
          AuthErrorReason.PrimaryDomainCrossOriginSync,
          "Cross-origin request from satellite domain requires handshake"
        );
      }
      const authObject = signedInRequestState.toAuth();
      if (authObject.userId) {
        const handshakeRequestState = handleMaybeOrganizationSyncHandshake(authenticateContext, authObject);
        if (handshakeRequestState) {
          return handshakeRequestState;
        }
      }
      return signedInRequestState;
    } catch (err) {
      return handleSessionTokenError(err, "cookie");
    }
    return signedOut({
      tokenType: TokenType.SessionToken,
      authenticateContext,
      reason: AuthErrorReason.UnexpectedError
    });
  }
  __name(authenticateRequestWithTokenInCookie, "authenticateRequestWithTokenInCookie");
  async function handleSessionTokenError(err, tokenCarrier) {
    if (!(err instanceof TokenVerificationError)) {
      return signedOut({
        tokenType: TokenType.SessionToken,
        authenticateContext,
        reason: AuthErrorReason.UnexpectedError
      });
    }
    let refreshError;
    if (isRequestEligibleForRefresh(err, authenticateContext, request)) {
      const { data, error } = await attemptRefresh(authenticateContext);
      if (data) {
        return signedIn({
          tokenType: TokenType.SessionToken,
          authenticateContext,
          sessionClaims: data.jwtPayload,
          headers: data.headers,
          token: data.sessionToken
        });
      }
      if (error?.cause?.reason) {
        refreshError = error.cause.reason;
      } else {
        refreshError = RefreshTokenErrorReason.UnexpectedSDKError;
      }
    } else {
      if (request.method !== "GET") {
        refreshError = RefreshTokenErrorReason.NonEligibleNonGet;
      } else if (!authenticateContext.refreshTokenInCookie) {
        refreshError = RefreshTokenErrorReason.NonEligibleNoCookie;
      } else {
        refreshError = null;
      }
    }
    err.tokenCarrier = tokenCarrier;
    const reasonToHandshake = [
      TokenVerificationErrorReason.TokenExpired,
      TokenVerificationErrorReason.TokenNotActiveYet,
      TokenVerificationErrorReason.TokenIatInTheFuture
    ].includes(err.reason);
    if (reasonToHandshake) {
      return handleMaybeHandshakeStatus(
        authenticateContext,
        convertTokenVerificationErrorReasonToAuthErrorReason({ tokenError: err.reason, refreshError }),
        err.getFullMessage()
      );
    }
    return signedOut({
      tokenType: TokenType.SessionToken,
      authenticateContext,
      reason: err.reason,
      message: err.getFullMessage()
    });
  }
  __name(handleSessionTokenError, "handleSessionTokenError");
  function handleMachineError(tokenType, err) {
    if (!(err instanceof MachineTokenVerificationError)) {
      return signedOut({
        tokenType,
        authenticateContext,
        reason: AuthErrorReason.UnexpectedError
      });
    }
    return signedOut({
      tokenType,
      authenticateContext,
      reason: err.code,
      message: err.getFullMessage()
    });
  }
  __name(handleMachineError, "handleMachineError");
  async function authenticateMachineRequestWithTokenInHeader() {
    const { tokenInHeader } = authenticateContext;
    if (!tokenInHeader) {
      return handleSessionTokenError(new Error("Missing token in header"), "header");
    }
    if (!isMachineToken(tokenInHeader)) {
      return signedOut({
        tokenType: acceptsToken,
        authenticateContext,
        reason: AuthErrorReason.TokenTypeMismatch,
        message: ""
      });
    }
    const parsedTokenType = getMachineTokenType(tokenInHeader);
    const mismatchState = checkTokenTypeMismatch(parsedTokenType, acceptsToken, authenticateContext);
    if (mismatchState) {
      return mismatchState;
    }
    const { data, tokenType, errors } = await verifyMachineAuthToken(tokenInHeader, authenticateContext);
    if (errors) {
      return handleMachineError(tokenType, errors[0]);
    }
    return signedIn({
      tokenType,
      authenticateContext,
      machineData: data,
      token: tokenInHeader
    });
  }
  __name(authenticateMachineRequestWithTokenInHeader, "authenticateMachineRequestWithTokenInHeader");
  async function authenticateAnyRequestWithTokenInHeader() {
    const { tokenInHeader } = authenticateContext;
    if (!tokenInHeader) {
      return handleSessionTokenError(new Error("Missing token in header"), "header");
    }
    if (isMachineToken(tokenInHeader)) {
      const parsedTokenType = getMachineTokenType(tokenInHeader);
      const mismatchState = checkTokenTypeMismatch(parsedTokenType, acceptsToken, authenticateContext);
      if (mismatchState) {
        return mismatchState;
      }
      const { data: data2, tokenType, errors: errors2 } = await verifyMachineAuthToken(tokenInHeader, authenticateContext);
      if (errors2) {
        return handleMachineError(tokenType, errors2[0]);
      }
      return signedIn({
        tokenType,
        authenticateContext,
        machineData: data2,
        token: tokenInHeader
      });
    }
    const { data, errors } = await verifyToken(tokenInHeader, authenticateContext);
    if (errors) {
      return handleSessionTokenError(errors[0], "header");
    }
    return signedIn({
      tokenType: TokenType.SessionToken,
      authenticateContext,
      sessionClaims: data,
      token: tokenInHeader
    });
  }
  __name(authenticateAnyRequestWithTokenInHeader, "authenticateAnyRequestWithTokenInHeader");
  if (Array.isArray(acceptsToken)) {
    if (!isTokenTypeInAcceptedArray(acceptsToken, authenticateContext)) {
      return signedOutInvalidToken();
    }
  }
  if (authenticateContext.tokenInHeader) {
    if (acceptsToken === "any" || Array.isArray(acceptsToken)) {
      return authenticateAnyRequestWithTokenInHeader();
    }
    if (acceptsToken === TokenType.SessionToken) {
      return authenticateRequestWithTokenInHeader();
    }
    return authenticateMachineRequestWithTokenInHeader();
  }
  if (acceptsToken === TokenType.OAuthToken || acceptsToken === TokenType.ApiKey || acceptsToken === TokenType.M2MToken) {
    return signedOut({
      tokenType: acceptsToken,
      authenticateContext,
      reason: "No token in header"
    });
  }
  return authenticateRequestWithTokenInCookie();
}, "authenticateRequest");
var debugRequestState = /* @__PURE__ */ __name((params) => {
  const { isSignedIn, isAuthenticated, proxyUrl, reason, message, publishableKey, isSatellite, domain } = params;
  return { isSignedIn, isAuthenticated, proxyUrl, reason, message, publishableKey, isSatellite, domain };
}, "debugRequestState");
var convertTokenVerificationErrorReasonToAuthErrorReason = /* @__PURE__ */ __name(({
  tokenError,
  refreshError
}) => {
  switch (tokenError) {
    case TokenVerificationErrorReason.TokenExpired:
      return `${AuthErrorReason.SessionTokenExpired}-refresh-${refreshError}`;
    case TokenVerificationErrorReason.TokenNotActiveYet:
      return AuthErrorReason.SessionTokenNBF;
    case TokenVerificationErrorReason.TokenIatInTheFuture:
      return AuthErrorReason.SessionTokenIatInTheFuture;
    default:
      return AuthErrorReason.UnexpectedError;
  }
}, "convertTokenVerificationErrorReasonToAuthErrorReason");
var defaultOptions2 = {
  secretKey: "",
  machineSecretKey: "",
  jwtKey: "",
  apiUrl: void 0,
  apiVersion: void 0,
  proxyUrl: "",
  publishableKey: "",
  isSatellite: false,
  domain: "",
  audience: ""
};
function createAuthenticateRequest(params) {
  const buildTimeOptions = mergePreDefinedOptions(defaultOptions2, params.options);
  const apiClient = params.apiClient;
  const authenticateRequest2 = /* @__PURE__ */ __name((request, options = {}) => {
    const { apiUrl, apiVersion } = buildTimeOptions;
    const runTimeOptions = mergePreDefinedOptions(buildTimeOptions, options);
    return authenticateRequest(request, {
      ...options,
      ...runTimeOptions,
      // We should add all the omitted props from options here (eg apiUrl / apiVersion)
      // to avoid runtime options override them.
      apiUrl,
      apiVersion,
      apiClient
    });
  }, "authenticateRequest2");
  return {
    authenticateRequest: authenticateRequest2,
    debugRequestState
  };
}
__name(createAuthenticateRequest, "createAuthenticateRequest");

// node_modules/@clerk/backend/dist/chunk-P263NW7Z.mjs
init_esm();
function withLegacyReturn(cb) {
  return async (...args) => {
    const { data, errors } = await cb(...args);
    if (errors) {
      throw errors[0];
    }
    return data;
  };
}
__name(withLegacyReturn, "withLegacyReturn");
function withLegacySyncReturn(cb) {
  return (...args) => {
    const { data, errors } = cb(...args);
    if (errors) {
      throw errors[0];
    }
    return data;
  };
}
__name(withLegacySyncReturn, "withLegacySyncReturn");

// node_modules/@clerk/shared/dist/runtime/telemetry.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/underscore-DjQrhefX.mjs
init_esm();
function snakeToCamel(str) {
  return str ? str.replace(/([-_][a-z])/g, (match2) => match2.toUpperCase().replace(/-|_/, "")) : "";
}
__name(snakeToCamel, "snakeToCamel");
function camelToSnake(str) {
  return str ? str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`) : "";
}
__name(camelToSnake, "camelToSnake");
var createDeepObjectTransformer = /* @__PURE__ */ __name((transform) => {
  const deepTransform = /* @__PURE__ */ __name((obj) => {
    if (!obj) return obj;
    if (Array.isArray(obj)) return obj.map((el) => {
      if (typeof el === "object" || Array.isArray(el)) return deepTransform(el);
      return el;
    });
    const copy = { ...obj };
    const keys = Object.keys(copy);
    for (const oldName of keys) {
      const newName = transform(oldName.toString());
      if (newName !== oldName) {
        copy[newName] = copy[oldName];
        delete copy[oldName];
      }
      if (typeof copy[newName] === "object") copy[newName] = deepTransform(copy[newName]);
    }
    return copy;
  }, "deepTransform");
  return deepTransform;
}, "createDeepObjectTransformer");
var deepCamelToSnake = createDeepObjectTransformer(camelToSnake);
var deepSnakeToCamel = createDeepObjectTransformer(snakeToCamel);
function isTruthy(value) {
  if (typeof value === `boolean`) return value;
  if (value === void 0 || value === null) return false;
  if (typeof value === `string`) {
    if (value.toLowerCase() === `true`) return true;
    if (value.toLowerCase() === `false`) return false;
  }
  const number = parseInt(value, 10);
  if (isNaN(number)) return false;
  if (number > 0) return true;
  return false;
}
__name(isTruthy, "isTruthy");

// node_modules/@clerk/shared/dist/runtime/telemetry-wqMDWlvR.mjs
init_esm();
var DEFAULT_CACHE_TTL_MS = 864e5;
var TelemetryEventThrottler = class {
  static {
    __name(this, "TelemetryEventThrottler");
  }
  #cache;
  #cacheTtl = DEFAULT_CACHE_TTL_MS;
  constructor(cache4) {
    this.#cache = cache4;
  }
  isEventThrottled(payload) {
    const now = Date.now();
    const key = this.#generateKey(payload);
    const entry = this.#cache.getItem(key);
    if (!entry) {
      this.#cache.setItem(key, now);
      return false;
    }
    if (now - entry > this.#cacheTtl) {
      this.#cache.setItem(key, now);
      return false;
    }
    return true;
  }
  /**
  * Generates a consistent unique key for telemetry events by sorting payload properties.
  * This ensures that payloads with identical content in different orders produce the same key.
  */
  #generateKey(event) {
    const { sk: _sk, pk: _pk, payload, ...rest } = event;
    const sanitizedEvent = {
      ...payload,
      ...rest
    };
    return JSON.stringify(Object.keys({
      ...payload,
      ...rest
    }).sort().map((key) => sanitizedEvent[key]));
  }
};
var LocalStorageThrottlerCache = class {
  static {
    __name(this, "LocalStorageThrottlerCache");
  }
  #storageKey = "clerk_telemetry_throttler";
  getItem(key) {
    return this.#getCache()[key];
  }
  setItem(key, value) {
    try {
      const cache4 = this.#getCache();
      cache4[key] = value;
      localStorage.setItem(this.#storageKey, JSON.stringify(cache4));
    } catch (err) {
      if (err instanceof DOMException && (err.name === "QuotaExceededError" || err.name === "NS_ERROR_DOM_QUOTA_REACHED") && localStorage.length > 0) localStorage.removeItem(this.#storageKey);
    }
  }
  removeItem(key) {
    try {
      const cache4 = this.#getCache();
      delete cache4[key];
      localStorage.setItem(this.#storageKey, JSON.stringify(cache4));
    } catch {
    }
  }
  #getCache() {
    try {
      const cacheString = localStorage.getItem(this.#storageKey);
      if (!cacheString) return {};
      return JSON.parse(cacheString);
    } catch {
      return {};
    }
  }
  static isSupported() {
    return typeof window !== "undefined" && !!window.localStorage;
  }
};
var InMemoryThrottlerCache = class {
  static {
    __name(this, "InMemoryThrottlerCache");
  }
  #cache = /* @__PURE__ */ new Map();
  #maxSize = 1e4;
  getItem(key) {
    if (this.#cache.size > this.#maxSize) {
      this.#cache.clear();
      return;
    }
    return this.#cache.get(key);
  }
  setItem(key, value) {
    this.#cache.set(key, value);
  }
  removeItem(key) {
    this.#cache.delete(key);
  }
};
function isWindowClerkWithMetadata(clerk) {
  return typeof clerk === "object" && clerk !== null && "constructor" in clerk && typeof clerk.constructor === "function";
}
__name(isWindowClerkWithMetadata, "isWindowClerkWithMetadata");
var VALID_LOG_LEVELS = /* @__PURE__ */ new Set([
  "error",
  "warn",
  "info",
  "debug",
  "trace"
]);
var DEFAULT_CONFIG = {
  samplingRate: 1,
  maxBufferSize: 5,
  endpoint: "https://clerk-telemetry.com"
};
var TelemetryCollector = class {
  static {
    __name(this, "TelemetryCollector");
  }
  #config;
  #eventThrottler;
  #metadata = {};
  #buffer = [];
  #pendingFlush = null;
  constructor(options) {
    this.#config = {
      maxBufferSize: options.maxBufferSize ?? DEFAULT_CONFIG.maxBufferSize,
      samplingRate: options.samplingRate ?? DEFAULT_CONFIG.samplingRate,
      perEventSampling: options.perEventSampling ?? true,
      disabled: options.disabled ?? false,
      debug: options.debug ?? false,
      endpoint: DEFAULT_CONFIG.endpoint
    };
    if (!options.clerkVersion && typeof window === "undefined") this.#metadata.clerkVersion = "";
    else this.#metadata.clerkVersion = options.clerkVersion ?? "";
    this.#metadata.sdk = options.sdk;
    this.#metadata.sdkVersion = options.sdkVersion;
    this.#metadata.publishableKey = options.publishableKey ?? "";
    const parsedKey = parsePublishableKey(options.publishableKey);
    if (parsedKey) this.#metadata.instanceType = parsedKey.instanceType;
    if (options.secretKey) this.#metadata.secretKey = options.secretKey.substring(0, 16);
    this.#eventThrottler = new TelemetryEventThrottler(LocalStorageThrottlerCache.isSupported() ? new LocalStorageThrottlerCache() : new InMemoryThrottlerCache());
  }
  get isEnabled() {
    if (this.#metadata.instanceType !== "development") return false;
    if (this.#config.disabled || typeof process !== "undefined" && process.env && isTruthy(process.env.CLERK_TELEMETRY_DISABLED)) return false;
    if (typeof window !== "undefined" && !!window?.navigator?.webdriver) return false;
    return true;
  }
  get isDebug() {
    return this.#config.debug || typeof process !== "undefined" && process.env && isTruthy(process.env.CLERK_TELEMETRY_DEBUG);
  }
  record(event) {
    try {
      const preparedPayload = this.#preparePayload(event.event, event.payload);
      this.#logEvent(preparedPayload.event, preparedPayload);
      if (!this.#shouldRecord(preparedPayload, event.eventSamplingRate)) return;
      this.#buffer.push({
        kind: "event",
        value: preparedPayload
      });
      this.#scheduleFlush();
    } catch (error) {
      console.error("[clerk/telemetry] Error recording telemetry event", error);
    }
  }
  /**
  * Records a telemetry log entry if logging is enabled and not in debug mode.
  *
  * @param entry - The telemetry log entry to record.
  */
  recordLog(entry) {
    try {
      if (!this.#shouldRecordLog(entry)) return;
      const levelIsValid = typeof entry?.level === "string" && VALID_LOG_LEVELS.has(entry.level);
      const messageIsValid = typeof entry?.message === "string" && entry.message.trim().length > 0;
      let normalizedTimestamp = null;
      const timestampInput = entry?.timestamp;
      if (typeof timestampInput === "number" || typeof timestampInput === "string") {
        const candidate = new Date(timestampInput);
        if (!Number.isNaN(candidate.getTime())) normalizedTimestamp = candidate;
      }
      if (!levelIsValid || !messageIsValid || normalizedTimestamp === null) {
        if (this.isDebug && typeof console !== "undefined") console.warn("[clerk/telemetry] Dropping invalid telemetry log entry", {
          levelIsValid,
          messageIsValid,
          timestampIsValid: normalizedTimestamp !== null
        });
        return;
      }
      const sdkMetadata = this.#getSDKMetadata();
      const logData = {
        sdk: sdkMetadata.name,
        sdkv: sdkMetadata.version,
        cv: this.#metadata.clerkVersion ?? "",
        lvl: entry.level,
        msg: entry.message,
        ts: normalizedTimestamp.toISOString(),
        pk: this.#metadata.publishableKey || null,
        payload: this.#sanitizeContext(entry.context)
      };
      this.#buffer.push({
        kind: "log",
        value: logData
      });
      this.#scheduleFlush();
    } catch (error) {
      console.error("[clerk/telemetry] Error recording telemetry log entry", error);
    }
  }
  #shouldRecord(preparedPayload, eventSamplingRate) {
    return this.isEnabled && !this.isDebug && this.#shouldBeSampled(preparedPayload, eventSamplingRate);
  }
  #shouldRecordLog(_entry) {
    return true;
  }
  #shouldBeSampled(preparedPayload, eventSamplingRate) {
    const randomSeed = Math.random();
    if (!(randomSeed <= this.#config.samplingRate && (this.#config.perEventSampling === false || typeof eventSamplingRate === "undefined" || randomSeed <= eventSamplingRate))) return false;
    return !this.#eventThrottler.isEventThrottled(preparedPayload);
  }
  #scheduleFlush() {
    if (typeof window === "undefined") {
      this.#flush();
      return;
    }
    if (this.#buffer.length >= this.#config.maxBufferSize) {
      if (this.#pendingFlush) if (typeof cancelIdleCallback !== "undefined") cancelIdleCallback(Number(this.#pendingFlush));
      else clearTimeout(Number(this.#pendingFlush));
      this.#flush();
      return;
    }
    if (this.#pendingFlush) return;
    if ("requestIdleCallback" in window) this.#pendingFlush = requestIdleCallback(() => {
      this.#flush();
      this.#pendingFlush = null;
    });
    else this.#pendingFlush = setTimeout(() => {
      this.#flush();
      this.#pendingFlush = null;
    }, 0);
  }
  #flush() {
    const itemsToSend = [...this.#buffer];
    this.#buffer = [];
    this.#pendingFlush = null;
    if (itemsToSend.length === 0) return;
    const eventsToSend = itemsToSend.filter((item) => item.kind === "event").map((item) => item.value);
    const logsToSend = itemsToSend.filter((item) => item.kind === "log").map((item) => item.value);
    if (eventsToSend.length > 0) {
      const eventsUrl = new URL("/v1/event", this.#config.endpoint);
      fetch(eventsUrl, {
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        method: "POST",
        body: JSON.stringify({ events: eventsToSend })
      }).catch(() => void 0);
    }
    if (logsToSend.length > 0) {
      const logsUrl = new URL("/v1/logs", this.#config.endpoint);
      fetch(logsUrl, {
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        method: "POST",
        body: JSON.stringify({ logs: logsToSend })
      }).catch(() => void 0);
    }
  }
  /**
  * If running in debug mode, log the event and its payload to the console.
  */
  #logEvent(event, payload) {
    if (!this.isDebug) return;
    if (typeof console.groupCollapsed !== "undefined") {
      console.groupCollapsed("[clerk/telemetry]", event);
      console.log(payload);
      console.groupEnd();
    } else console.log("[clerk/telemetry]", event, payload);
  }
  /**
  * If in browser, attempt to lazily grab the SDK metadata from the Clerk singleton, otherwise fallback to the initially passed in values.
  *
  * This is necessary because the sdkMetadata can be set by the host SDK after the TelemetryCollector is instantiated.
  */
  #getSDKMetadata() {
    const sdkMetadata = {
      name: this.#metadata.sdk,
      version: this.#metadata.sdkVersion
    };
    if (typeof window !== "undefined") {
      const windowWithClerk = window;
      if (windowWithClerk.Clerk) {
        const windowClerk = windowWithClerk.Clerk;
        if (isWindowClerkWithMetadata(windowClerk) && windowClerk.constructor.sdkMetadata) {
          const { name, version } = windowClerk.constructor.sdkMetadata;
          if (name !== void 0) sdkMetadata.name = name;
          if (version !== void 0) sdkMetadata.version = version;
        }
      }
    }
    return sdkMetadata;
  }
  /**
  * Append relevant metadata from the Clerk singleton to the event payload.
  */
  #preparePayload(event, payload) {
    const sdkMetadata = this.#getSDKMetadata();
    return {
      event,
      cv: this.#metadata.clerkVersion ?? "",
      it: this.#metadata.instanceType ?? "",
      sdk: sdkMetadata.name,
      sdkv: sdkMetadata.version,
      ...this.#metadata.publishableKey ? { pk: this.#metadata.publishableKey } : {},
      ...this.#metadata.secretKey ? { sk: this.#metadata.secretKey } : {},
      payload
    };
  }
  /**
  * Best-effort sanitization of the context payload. Returns a plain object with JSON-serializable
  * values or null when the input is missing or not serializable. Arrays are not accepted.
  */
  #sanitizeContext(context) {
    if (context === null || typeof context === "undefined") return null;
    if (typeof context !== "object") return null;
    try {
      const cleaned = JSON.parse(JSON.stringify(context));
      if (cleaned && typeof cleaned === "object" && !Array.isArray(cleaned)) return cleaned;
      return null;
    } catch {
      return null;
    }
  }
};

// node_modules/@clerk/backend/dist/index.mjs
var verifyToken2 = withLegacyReturn(verifyToken);
function createClerkClient(options) {
  const opts = { ...options };
  const apiClient = createBackendApiClient(opts);
  const requestState = createAuthenticateRequest({ options: opts, apiClient });
  const telemetry = new TelemetryCollector({
    publishableKey: opts.publishableKey,
    secretKey: opts.secretKey,
    samplingRate: 0.1,
    ...opts.sdkMetadata ? { sdk: opts.sdkMetadata.name, sdkVersion: opts.sdkMetadata.version } : {},
    ...opts.telemetry || {}
  });
  return {
    ...apiClient,
    ...requestState,
    telemetry
  };
}
__name(createClerkClient, "createClerkClient");

// node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js
init_esm();

// node_modules/@clerk/backend/dist/internal.mjs
init_esm();

// node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js
init_esm();
var import_server = __toESM(require_server());
var isPrerenderingBailout = /* @__PURE__ */ __name((e) => {
  if (!(e instanceof Error) || !("message" in e)) {
    return false;
  }
  const { message } = e;
  const lowerCaseInput = message.toLowerCase();
  const dynamicServerUsage = lowerCaseInput.includes("dynamic server usage");
  const bailOutPrerendering = lowerCaseInput.includes("this page needs to bail out of prerendering");
  const routeRegex = /Route .*? needs to bail out of prerendering at this point because it used .*?./;
  return routeRegex.test(message) || dynamicServerUsage || bailOutPrerendering;
}, "isPrerenderingBailout");
async function buildRequestLike() {
  try {
    const { headers } = await import("./headers-TE4BFOU7.mjs");
    const resolvedHeaders = await headers();
    return new import_server.NextRequest("https://placeholder.com", { headers: resolvedHeaders });
  } catch (e) {
    if (e && isPrerenderingBailout(e)) {
      throw e;
    }
    throw new Error(
      `Clerk: auth(), currentUser() and clerkClient(), are only supported in App Router (/app directory).
If you're using /pages, try getAuth() instead.
Original error: ${e}`
    );
  }
}
__name(buildRequestLike, "buildRequestLike");

// node_modules/@clerk/nextjs/dist/esm/server/createClerkClient.js
init_esm();

// node_modules/@clerk/nextjs/dist/esm/server/constants.js
init_esm();

// node_modules/@clerk/shared/dist/runtime/apiUrlFromPublishableKey.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/apiUrlFromPublishableKey-B2KkwQp6.mjs
init_esm();
var apiUrlFromPublishableKey = /* @__PURE__ */ __name((publishableKey) => {
  const frontendApi = parsePublishableKey(publishableKey)?.frontendApi;
  if (frontendApi?.startsWith("clerk.") && LEGACY_DEV_INSTANCE_SUFFIXES.some((suffix) => frontendApi?.endsWith(suffix))) return PROD_API_URL;
  if (LOCAL_ENV_SUFFIXES.some((suffix) => frontendApi?.endsWith(suffix))) return LOCAL_API_URL;
  if (STAGING_ENV_SUFFIXES.some((suffix) => frontendApi?.endsWith(suffix))) return STAGING_API_URL;
  return PROD_API_URL;
}, "apiUrlFromPublishableKey");

// node_modules/@clerk/shared/dist/runtime/underscore.mjs
init_esm();

// node_modules/@clerk/nextjs/dist/esm/server/constants.js
var CLERK_JS_VERSION = process.env.NEXT_PUBLIC_CLERK_JS_VERSION || "";
var CLERK_JS_URL = process.env.NEXT_PUBLIC_CLERK_JS_URL || "";
var API_VERSION2 = process.env.CLERK_API_VERSION || "v1";
var SECRET_KEY = process.env.CLERK_SECRET_KEY || "";
var MACHINE_SECRET_KEY = process.env.CLERK_MACHINE_SECRET_KEY || "";
var PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
var ENCRYPTION_KEY = process.env.CLERK_ENCRYPTION_KEY || "";
var API_URL2 = process.env.CLERK_API_URL || apiUrlFromPublishableKey(PUBLISHABLE_KEY);
var DOMAIN = process.env.NEXT_PUBLIC_CLERK_DOMAIN || "";
var PROXY_URL = process.env.NEXT_PUBLIC_CLERK_PROXY_URL || "";
var IS_SATELLITE = isTruthy(process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE) || false;
var SIGN_IN_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "";
var SIGN_UP_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "";
var SDK_METADATA = {
  name: "@clerk/nextjs",
  version: "6.39.6",
  environment: process.env.NODE_ENV
};
var TELEMETRY_DISABLED = isTruthy(process.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED);
var TELEMETRY_DEBUG = isTruthy(process.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);
var KEYLESS_DISABLED = isTruthy(process.env.NEXT_PUBLIC_CLERK_KEYLESS_DISABLED) || false;

// node_modules/@clerk/nextjs/dist/esm/server/createClerkClient.js
var clerkClientDefaultOptions = {
  secretKey: SECRET_KEY,
  publishableKey: PUBLISHABLE_KEY,
  apiUrl: API_URL2,
  apiVersion: API_VERSION2,
  userAgent: `${"@clerk/nextjs"}@${"6.39.6"}`,
  proxyUrl: PROXY_URL,
  domain: DOMAIN,
  isSatellite: IS_SATELLITE,
  machineSecretKey: MACHINE_SECRET_KEY,
  sdkMetadata: SDK_METADATA,
  telemetry: {
    disabled: TELEMETRY_DISABLED,
    debug: TELEMETRY_DEBUG
  }
};
var createClerkClientWithOptions = /* @__PURE__ */ __name((options) => createClerkClient({ ...clerkClientDefaultOptions, ...options }), "createClerkClientWithOptions");

// node_modules/@clerk/nextjs/dist/esm/server/headers-utils.js
init_esm();
function getCustomAttributeFromRequest(req, key) {
  return key in req ? req[key] : void 0;
}
__name(getCustomAttributeFromRequest, "getCustomAttributeFromRequest");
function getAuthKeyFromRequest(req, key) {
  return getCustomAttributeFromRequest(req, constants.Attributes[key]) || getHeader(req, constants.Headers[key]);
}
__name(getAuthKeyFromRequest, "getAuthKeyFromRequest");
function getHeader(req, name) {
  var _a, _b;
  if (isNextRequest(req) || isRequestWebAPI(req)) {
    return req.headers.get(name);
  }
  return req.headers[name] || req.headers[name.toLowerCase()] || ((_b = (_a = req.socket) == null ? void 0 : _a._httpMessage) == null ? void 0 : _b.getHeader(name));
}
__name(getHeader, "getHeader");
function detectClerkMiddleware(req) {
  return Boolean(getAuthKeyFromRequest(req, "AuthStatus"));
}
__name(detectClerkMiddleware, "detectClerkMiddleware");
function isNextRequest(val) {
  try {
    const { headers, nextUrl, cookies } = val || {};
    return typeof (headers == null ? void 0 : headers.get) === "function" && typeof (nextUrl == null ? void 0 : nextUrl.searchParams.get) === "function" && typeof (cookies == null ? void 0 : cookies.get) === "function";
  } catch {
    return false;
  }
}
__name(isNextRequest, "isNextRequest");
function isRequestWebAPI(val) {
  try {
    const { headers } = val || {};
    return typeof (headers == null ? void 0 : headers.get) === "function";
  } catch {
    return false;
  }
}
__name(isRequestWebAPI, "isRequestWebAPI");

// node_modules/@clerk/nextjs/dist/esm/server/middleware-storage.js
init_esm();
import { AsyncLocalStorage } from "node:async_hooks";
var clerkMiddlewareRequestDataStorage = new AsyncLocalStorage();

// node_modules/@clerk/nextjs/dist/esm/server/utils.js
init_esm();

// node_modules/@clerk/shared/dist/runtime/logger.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/logger-B9q7E6uE.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/proxy.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/proxy-Bq8EHApG.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/utils/index.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/handleValueOrFn-CcwnRX-K.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/noop-B3MbDAfb.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/createDeferredPromise-CjYZzUuU.mjs
init_esm();

// node_modules/@clerk/shared/dist/runtime/utils-seY-ehg-.mjs
init_esm();

// node_modules/@clerk/nextjs/dist/esm/server/utils.js
var import_server2 = __toESM(require_server());

// node_modules/@clerk/nextjs/dist/esm/constants.js
init_esm();
var Headers3 = {
  NextRewrite: "x-middleware-rewrite",
  NextResume: "x-middleware-next",
  NextRedirect: "Location",
  // Used by next to identify internal navigation for app router
  NextUrl: "next-url",
  NextAction: "next-action",
  // Used by next to identify internal navigation for pages router
  NextjsData: "x-nextjs-data"
};
var constants2 = {
  Headers: Headers3
};

// node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js
init_esm();
var canUseKeyless = !isNextWithUnstableServerActions && // Next.js will inline the value of 'development' or 'production' on the client bundle, so this is client-safe.
isDevelopmentEnvironment() && !KEYLESS_DISABLED;

// node_modules/@clerk/nextjs/dist/esm/vendor/crypto-es.js
init_esm();
var kt = Object.defineProperty;
var bt = /* @__PURE__ */ __name((c, t, s2) => t in c ? kt(c, t, { enumerable: true, configurable: true, writable: true, value: s2 }) : c[t] = s2, "bt");
var it = /* @__PURE__ */ __name((c, t, s2) => bt(c, typeof t != "symbol" ? t + "" : t, s2), "it");
var lt;
var ht;
var dt;
var pt;
var xt;
var _t;
var at = ((lt = typeof globalThis != "undefined" ? globalThis : void 0) == null ? void 0 : lt.crypto) || ((ht = typeof global != "undefined" ? global : void 0) == null ? void 0 : ht.crypto) || ((dt = typeof window != "undefined" ? window : void 0) == null ? void 0 : dt.crypto) || ((pt = typeof self != "undefined" ? self : void 0) == null ? void 0 : pt.crypto) || ((_t = (xt = typeof frames != "undefined" ? frames : void 0) == null ? void 0 : xt[0]) == null ? void 0 : _t.crypto);
var Z;
at ? Z = /* @__PURE__ */ __name((c) => {
  let t = [];
  for (let s2 = 0, e; s2 < c; s2 += 4) t.push(at.getRandomValues(new Uint32Array(1))[0]);
  return new u(t, c);
}, "Z") : Z = /* @__PURE__ */ __name((c) => {
  let t = [], s2 = /* @__PURE__ */ __name((e) => {
    let r = e, o = 987654321, n = 4294967295;
    return () => {
      o = 36969 * (o & 65535) + (o >> 16) & n, r = 18e3 * (r & 65535) + (r >> 16) & n;
      let h = (o << 16) + r & n;
      return h /= 4294967296, h += 0.5, h * (Math.random() > 0.5 ? 1 : -1);
    };
  }, "s");
  for (let e = 0, r; e < c; e += 4) {
    let o = s2((r || Math.random()) * 4294967296);
    r = o() * 987654071, t.push(o() * 4294967296 | 0);
  }
  return new u(t, c);
}, "Z");
var m = class {
  static {
    __name(this, "m");
  }
  static create(...t) {
    return new this(...t);
  }
  mixIn(t) {
    return Object.assign(this, t);
  }
  clone() {
    let t = new this.constructor();
    return Object.assign(t, this), t;
  }
};
var u = class extends m {
  static {
    __name(this, "u");
  }
  constructor(t = [], s2 = t.length * 4) {
    super();
    let e = t;
    if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
      let r = e.byteLength, o = [];
      for (let n = 0; n < r; n += 1) o[n >>> 2] |= e[n] << 24 - n % 4 * 8;
      this.words = o, this.sigBytes = r;
    } else this.words = t, this.sigBytes = s2;
  }
  toString(t = Mt) {
    return t.stringify(this);
  }
  concat(t) {
    let s2 = this.words, e = t.words, r = this.sigBytes, o = t.sigBytes;
    if (this.clamp(), r % 4) for (let n = 0; n < o; n += 1) {
      let h = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
      s2[r + n >>> 2] |= h << 24 - (r + n) % 4 * 8;
    }
    else for (let n = 0; n < o; n += 4) s2[r + n >>> 2] = e[n >>> 2];
    return this.sigBytes += o, this;
  }
  clamp() {
    let { words: t, sigBytes: s2 } = this;
    t[s2 >>> 2] &= 4294967295 << 32 - s2 % 4 * 8, t.length = Math.ceil(s2 / 4);
  }
  clone() {
    let t = super.clone.call(this);
    return t.words = this.words.slice(0), t;
  }
};
it(u, "random", Z);
var Mt = { stringify(c) {
  let { words: t, sigBytes: s2 } = c, e = [];
  for (let r = 0; r < s2; r += 1) {
    let o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
    e.push((o >>> 4).toString(16)), e.push((o & 15).toString(16));
  }
  return e.join("");
}, parse(c) {
  let t = c.length, s2 = [];
  for (let e = 0; e < t; e += 2) s2[e >>> 3] |= parseInt(c.substr(e, 2), 16) << 24 - e % 8 * 4;
  return new u(s2, t / 2);
} };
var ft = { stringify(c) {
  let { words: t, sigBytes: s2 } = c, e = [];
  for (let r = 0; r < s2; r += 1) {
    let o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
    e.push(String.fromCharCode(o));
  }
  return e.join("");
}, parse(c) {
  let t = c.length, s2 = [];
  for (let e = 0; e < t; e += 1) s2[e >>> 2] |= (c.charCodeAt(e) & 255) << 24 - e % 4 * 8;
  return new u(s2, t);
} };
var X = { stringify(c) {
  try {
    return decodeURIComponent(escape(ft.stringify(c)));
  } catch {
    throw new Error("Malformed UTF-8 data");
  }
}, parse(c) {
  return ft.parse(unescape(encodeURIComponent(c)));
} };
var N = class extends m {
  static {
    __name(this, "N");
  }
  constructor() {
    super(), this._minBufferSize = 0;
  }
  reset() {
    this._data = new u(), this._nDataBytes = 0;
  }
  _append(t) {
    let s2 = t;
    typeof s2 == "string" && (s2 = X.parse(s2)), this._data.concat(s2), this._nDataBytes += s2.sigBytes;
  }
  _process(t) {
    let s2, { _data: e, blockSize: r } = this, o = e.words, n = e.sigBytes, h = r * 4, x = n / h;
    t ? x = Math.ceil(x) : x = Math.max((x | 0) - this._minBufferSize, 0);
    let p = x * r, _2 = Math.min(p * 4, n);
    if (p) {
      for (let y = 0; y < p; y += r) this._doProcessBlock(o, y);
      s2 = o.splice(0, p), e.sigBytes -= _2;
    }
    return new u(s2, _2);
  }
  clone() {
    let t = super.clone.call(this);
    return t._data = this._data.clone(), t;
  }
};
var H2 = class extends N {
  static {
    __name(this, "H");
  }
  constructor(t) {
    super(), this.blockSize = 512 / 32, this.cfg = Object.assign(new m(), t), this.reset();
  }
  static _createHelper(t) {
    return (s2, e) => new t(e).finalize(s2);
  }
  static _createHmacHelper(t) {
    return (s2, e) => new $2(t, e).finalize(s2);
  }
  reset() {
    super.reset.call(this), this._doReset();
  }
  update(t) {
    return this._append(t), this._process(), this;
  }
  finalize(t) {
    return t && this._append(t), this._doFinalize();
  }
};
var $2 = class extends m {
  static {
    __name(this, "$");
  }
  constructor(t, s2) {
    super();
    let e = new t();
    this._hasher = e;
    let r = s2;
    typeof r == "string" && (r = X.parse(r));
    let o = e.blockSize, n = o * 4;
    r.sigBytes > n && (r = e.finalize(s2)), r.clamp();
    let h = r.clone();
    this._oKey = h;
    let x = r.clone();
    this._iKey = x;
    let p = h.words, _2 = x.words;
    for (let y = 0; y < o; y += 1) p[y] ^= 1549556828, _2[y] ^= 909522486;
    h.sigBytes = n, x.sigBytes = n, this.reset();
  }
  reset() {
    let t = this._hasher;
    t.reset(), t.update(this._iKey);
  }
  update(t) {
    return this._hasher.update(t), this;
  }
  finalize(t) {
    let s2 = this._hasher, e = s2.finalize(t);
    return s2.reset(), s2.finalize(this._oKey.clone().concat(e));
  }
};
var zt = /* @__PURE__ */ __name((c, t, s2) => {
  let e = [], r = 0;
  for (let o = 0; o < t; o += 1) if (o % 4) {
    let n = s2[c.charCodeAt(o - 1)] << o % 4 * 2, h = s2[c.charCodeAt(o)] >>> 6 - o % 4 * 2, x = n | h;
    e[r >>> 2] |= x << 24 - r % 4 * 8, r += 1;
  }
  return u.create(e, r);
}, "zt");
var tt = { stringify(c) {
  let { words: t, sigBytes: s2 } = c, e = this._map;
  c.clamp();
  let r = [];
  for (let n = 0; n < s2; n += 3) {
    let h = t[n >>> 2] >>> 24 - n % 4 * 8 & 255, x = t[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255, p = t[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255, _2 = h << 16 | x << 8 | p;
    for (let y = 0; y < 4 && n + y * 0.75 < s2; y += 1) r.push(e.charAt(_2 >>> 6 * (3 - y) & 63));
  }
  let o = e.charAt(64);
  if (o) for (; r.length % 4; ) r.push(o);
  return r.join("");
}, parse(c) {
  let t = c.length, s2 = this._map, e = this._reverseMap;
  if (!e) {
    this._reverseMap = [], e = this._reverseMap;
    for (let o = 0; o < s2.length; o += 1) e[s2.charCodeAt(o)] = o;
  }
  let r = s2.charAt(64);
  if (r) {
    let o = c.indexOf(r);
    o !== -1 && (t = o);
  }
  return zt(c, t, e);
}, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
var d = [];
for (let c = 0; c < 64; c += 1) d[c] = Math.abs(Math.sin(c + 1)) * 4294967296 | 0;
var w = /* @__PURE__ */ __name((c, t, s2, e, r, o, n) => {
  let h = c + (t & s2 | ~t & e) + r + n;
  return (h << o | h >>> 32 - o) + t;
}, "w");
var B = /* @__PURE__ */ __name((c, t, s2, e, r, o, n) => {
  let h = c + (t & e | s2 & ~e) + r + n;
  return (h << o | h >>> 32 - o) + t;
}, "B");
var k = /* @__PURE__ */ __name((c, t, s2, e, r, o, n) => {
  let h = c + (t ^ s2 ^ e) + r + n;
  return (h << o | h >>> 32 - o) + t;
}, "k");
var b = /* @__PURE__ */ __name((c, t, s2, e, r, o, n) => {
  let h = c + (s2 ^ (t | ~e)) + r + n;
  return (h << o | h >>> 32 - o) + t;
}, "b");
var L2 = class extends H2 {
  static {
    __name(this, "L");
  }
  _doReset() {
    this._hash = new u([1732584193, 4023233417, 2562383102, 271733878]);
  }
  _doProcessBlock(t, s2) {
    let e = t;
    for (let Y = 0; Y < 16; Y += 1) {
      let ct = s2 + Y, G = t[ct];
      e[ct] = (G << 8 | G >>> 24) & 16711935 | (G << 24 | G >>> 8) & 4278255360;
    }
    let r = this._hash.words, o = e[s2 + 0], n = e[s2 + 1], h = e[s2 + 2], x = e[s2 + 3], p = e[s2 + 4], _2 = e[s2 + 5], y = e[s2 + 6], M = e[s2 + 7], z = e[s2 + 8], v = e[s2 + 9], g = e[s2 + 10], O = e[s2 + 11], S = e[s2 + 12], P2 = e[s2 + 13], I2 = e[s2 + 14], W2 = e[s2 + 15], i = r[0], a = r[1], f = r[2], l = r[3];
    i = w(i, a, f, l, o, 7, d[0]), l = w(l, i, a, f, n, 12, d[1]), f = w(f, l, i, a, h, 17, d[2]), a = w(a, f, l, i, x, 22, d[3]), i = w(i, a, f, l, p, 7, d[4]), l = w(l, i, a, f, _2, 12, d[5]), f = w(f, l, i, a, y, 17, d[6]), a = w(a, f, l, i, M, 22, d[7]), i = w(i, a, f, l, z, 7, d[8]), l = w(l, i, a, f, v, 12, d[9]), f = w(f, l, i, a, g, 17, d[10]), a = w(a, f, l, i, O, 22, d[11]), i = w(i, a, f, l, S, 7, d[12]), l = w(l, i, a, f, P2, 12, d[13]), f = w(f, l, i, a, I2, 17, d[14]), a = w(a, f, l, i, W2, 22, d[15]), i = B(i, a, f, l, n, 5, d[16]), l = B(l, i, a, f, y, 9, d[17]), f = B(f, l, i, a, O, 14, d[18]), a = B(a, f, l, i, o, 20, d[19]), i = B(i, a, f, l, _2, 5, d[20]), l = B(l, i, a, f, g, 9, d[21]), f = B(f, l, i, a, W2, 14, d[22]), a = B(a, f, l, i, p, 20, d[23]), i = B(i, a, f, l, v, 5, d[24]), l = B(l, i, a, f, I2, 9, d[25]), f = B(f, l, i, a, x, 14, d[26]), a = B(a, f, l, i, z, 20, d[27]), i = B(i, a, f, l, P2, 5, d[28]), l = B(l, i, a, f, h, 9, d[29]), f = B(f, l, i, a, M, 14, d[30]), a = B(a, f, l, i, S, 20, d[31]), i = k(i, a, f, l, _2, 4, d[32]), l = k(l, i, a, f, z, 11, d[33]), f = k(f, l, i, a, O, 16, d[34]), a = k(a, f, l, i, I2, 23, d[35]), i = k(i, a, f, l, n, 4, d[36]), l = k(l, i, a, f, p, 11, d[37]), f = k(f, l, i, a, M, 16, d[38]), a = k(a, f, l, i, g, 23, d[39]), i = k(i, a, f, l, P2, 4, d[40]), l = k(l, i, a, f, o, 11, d[41]), f = k(f, l, i, a, x, 16, d[42]), a = k(a, f, l, i, y, 23, d[43]), i = k(i, a, f, l, v, 4, d[44]), l = k(l, i, a, f, S, 11, d[45]), f = k(f, l, i, a, W2, 16, d[46]), a = k(a, f, l, i, h, 23, d[47]), i = b(i, a, f, l, o, 6, d[48]), l = b(l, i, a, f, M, 10, d[49]), f = b(f, l, i, a, I2, 15, d[50]), a = b(a, f, l, i, _2, 21, d[51]), i = b(i, a, f, l, S, 6, d[52]), l = b(l, i, a, f, x, 10, d[53]), f = b(f, l, i, a, g, 15, d[54]), a = b(a, f, l, i, n, 21, d[55]), i = b(i, a, f, l, z, 6, d[56]), l = b(l, i, a, f, W2, 10, d[57]), f = b(f, l, i, a, y, 15, d[58]), a = b(a, f, l, i, P2, 21, d[59]), i = b(i, a, f, l, p, 6, d[60]), l = b(l, i, a, f, O, 10, d[61]), f = b(f, l, i, a, h, 15, d[62]), a = b(a, f, l, i, v, 21, d[63]), r[0] = r[0] + i | 0, r[1] = r[1] + a | 0, r[2] = r[2] + f | 0, r[3] = r[3] + l | 0;
  }
  _doFinalize() {
    let t = this._data, s2 = t.words, e = this._nDataBytes * 8, r = t.sigBytes * 8;
    s2[r >>> 5] |= 128 << 24 - r % 32;
    let o = Math.floor(e / 4294967296), n = e;
    s2[(r + 64 >>> 9 << 4) + 15] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, s2[(r + 64 >>> 9 << 4) + 14] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360, t.sigBytes = (s2.length + 1) * 4, this._process();
    let h = this._hash, x = h.words;
    for (let p = 0; p < 4; p += 1) {
      let _2 = x[p];
      x[p] = (_2 << 8 | _2 >>> 24) & 16711935 | (_2 << 24 | _2 >>> 8) & 4278255360;
    }
    return h;
  }
  clone() {
    let t = super.clone.call(this);
    return t._hash = this._hash.clone(), t;
  }
};
var St = H2._createHelper(L2);
var Pt = H2._createHmacHelper(L2);
var T = class extends m {
  static {
    __name(this, "T");
  }
  constructor(t) {
    super(), this.cfg = Object.assign(new m(), { keySize: 128 / 32, hasher: L2, iterations: 1 }, t);
  }
  compute(t, s2) {
    let e, { cfg: r } = this, o = r.hasher.create(), n = u.create(), h = n.words, { keySize: x, iterations: p } = r;
    for (; h.length < x; ) {
      e && o.update(e), e = o.update(t).finalize(s2), o.reset();
      for (let _2 = 1; _2 < p; _2 += 1) e = o.finalize(e), o.reset();
      n.concat(e);
    }
    return n.sigBytes = x * 4, n;
  }
};
var C = class extends N {
  static {
    __name(this, "C");
  }
  constructor(t, s2, e) {
    super(), this.cfg = Object.assign(new m(), e), this._xformMode = t, this._key = s2, this.reset();
  }
  static createEncryptor(t, s2) {
    return this.create(this._ENC_XFORM_MODE, t, s2);
  }
  static createDecryptor(t, s2) {
    return this.create(this._DEC_XFORM_MODE, t, s2);
  }
  static _createHelper(t) {
    let s2 = /* @__PURE__ */ __name((e) => typeof e == "string" ? q : E, "s");
    return { encrypt(e, r, o) {
      return s2(r).encrypt(t, e, r, o);
    }, decrypt(e, r, o) {
      return s2(r).decrypt(t, e, r, o);
    } };
  }
  reset() {
    super.reset.call(this), this._doReset();
  }
  process(t) {
    return this._append(t), this._process();
  }
  finalize(t) {
    return t && this._append(t), this._doFinalize();
  }
};
C._ENC_XFORM_MODE = 1;
C._DEC_XFORM_MODE = 2;
C.keySize = 128 / 32;
C.ivSize = 128 / 32;
var et = class extends m {
  static {
    __name(this, "et");
  }
  constructor(t, s2) {
    super(), this._cipher = t, this._iv = s2;
  }
  static createEncryptor(t, s2) {
    return this.Encryptor.create(t, s2);
  }
  static createDecryptor(t, s2) {
    return this.Decryptor.create(t, s2);
  }
};
function yt(c, t, s2) {
  let e = c, r, o = this._iv;
  o ? (r = o, this._iv = void 0) : r = this._prevBlock;
  for (let n = 0; n < s2; n += 1) e[t + n] ^= r[n];
}
__name(yt, "yt");
var j = class extends et {
  static {
    __name(this, "j");
  }
};
j.Encryptor = class extends j {
  processBlock(c, t) {
    let s2 = this._cipher, { blockSize: e } = s2;
    yt.call(this, c, t, e), s2.encryptBlock(c, t), this._prevBlock = c.slice(t, t + e);
  }
};
j.Decryptor = class extends j {
  processBlock(c, t) {
    let s2 = this._cipher, { blockSize: e } = s2, r = c.slice(t, t + e);
    s2.decryptBlock(c, t), yt.call(this, c, t, e), this._prevBlock = r;
  }
};
var vt = { pad(c, t) {
  let s2 = t * 4, e = s2 - c.sigBytes % s2, r = e << 24 | e << 16 | e << 8 | e, o = [];
  for (let h = 0; h < e; h += 4) o.push(r);
  let n = u.create(o, e);
  c.concat(n);
}, unpad(c) {
  let t = c, s2 = t.words[t.sigBytes - 1 >>> 2] & 255;
  t.sigBytes -= s2;
} };
var U2 = class extends C {
  static {
    __name(this, "U");
  }
  constructor(t, s2, e) {
    super(t, s2, Object.assign({ mode: j, padding: vt }, e)), this.blockSize = 128 / 32;
  }
  reset() {
    let t;
    super.reset.call(this);
    let { cfg: s2 } = this, { iv: e, mode: r } = s2;
    this._xformMode === this.constructor._ENC_XFORM_MODE ? t = r.createEncryptor : (t = r.createDecryptor, this._minBufferSize = 1), this._mode = t.call(r, this, e && e.words), this._mode.__creator = t;
  }
  _doProcessBlock(t, s2) {
    this._mode.processBlock(t, s2);
  }
  _doFinalize() {
    let t, { padding: s2 } = this.cfg;
    return this._xformMode === this.constructor._ENC_XFORM_MODE ? (s2.pad(this._data, this.blockSize), t = this._process(true)) : (t = this._process(true), s2.unpad(t)), t;
  }
};
var V = class extends m {
  static {
    __name(this, "V");
  }
  constructor(t) {
    super(), this.mixIn(t);
  }
  toString(t) {
    return (t || this.formatter).stringify(this);
  }
};
var Rt = { stringify(c) {
  let t, { ciphertext: s2, salt: e } = c;
  return e ? t = u.create([1398893684, 1701076831]).concat(e).concat(s2) : t = s2, t.toString(tt);
}, parse(c) {
  let t, s2 = tt.parse(c), e = s2.words;
  return e[0] === 1398893684 && e[1] === 1701076831 && (t = u.create(e.slice(2, 4)), e.splice(0, 4), s2.sigBytes -= 16), V.create({ ciphertext: s2, salt: t });
} };
var E = class extends m {
  static {
    __name(this, "E");
  }
  static encrypt(t, s2, e, r) {
    let o = Object.assign(new m(), this.cfg, r), n = t.createEncryptor(e, o), h = n.finalize(s2), x = n.cfg;
    return V.create({ ciphertext: h, key: e, iv: x.iv, algorithm: t, mode: x.mode, padding: x.padding, blockSize: n.blockSize, formatter: o.format });
  }
  static decrypt(t, s2, e, r) {
    let o = s2, n = Object.assign(new m(), this.cfg, r);
    return o = this._parse(o, n.format), t.createDecryptor(e, n).finalize(o.ciphertext);
  }
  static _parse(t, s2) {
    return typeof t == "string" ? s2.parse(t, this) : t;
  }
};
E.cfg = Object.assign(new m(), { format: Rt });
var Ft = { execute(c, t, s2, e, r) {
  let o = e;
  o || (o = u.random(64 / 8));
  let n;
  r ? n = T.create({ keySize: t + s2, hasher: r }).compute(c, o) : n = T.create({ keySize: t + s2 }).compute(c, o);
  let h = u.create(n.words.slice(t), s2 * 4);
  return n.sigBytes = t * 4, V.create({ key: n, iv: h, salt: o });
} };
var q = class extends E {
  static {
    __name(this, "q");
  }
  static encrypt(t, s2, e, r) {
    let o = Object.assign(new m(), this.cfg, r), n = o.kdf.execute(e, t.keySize, t.ivSize, o.salt, o.hasher);
    o.iv = n.iv;
    let h = E.encrypt.call(this, t, s2, n.key, o);
    return h.mixIn(n), h;
  }
  static decrypt(t, s2, e, r) {
    let o = s2, n = Object.assign(new m(), this.cfg, r);
    o = this._parse(o, n.format);
    let h = n.kdf.execute(e, t.keySize, t.ivSize, o.salt, n.hasher);
    return n.iv = h.iv, E.decrypt.call(this, t, o, h.key, n);
  }
};
q.cfg = Object.assign(E.cfg, { kdf: Ft });
var R = [];
var ut = [];
var gt = [];
var mt = [];
var wt = [];
var Bt = [];
var st = [];
var rt = [];
var ot = [];
var nt = [];
var A = [];
for (let c = 0; c < 256; c += 1) c < 128 ? A[c] = c << 1 : A[c] = c << 1 ^ 283;
var F2 = 0;
var D2 = 0;
for (let c = 0; c < 256; c += 1) {
  let t = D2 ^ D2 << 1 ^ D2 << 2 ^ D2 << 3 ^ D2 << 4;
  t = t >>> 8 ^ t & 255 ^ 99, R[F2] = t, ut[t] = F2;
  let s2 = A[F2], e = A[s2], r = A[e], o = A[t] * 257 ^ t * 16843008;
  gt[F2] = o << 24 | o >>> 8, mt[F2] = o << 16 | o >>> 16, wt[F2] = o << 8 | o >>> 24, Bt[F2] = o, o = r * 16843009 ^ e * 65537 ^ s2 * 257 ^ F2 * 16843008, st[t] = o << 24 | o >>> 8, rt[t] = o << 16 | o >>> 16, ot[t] = o << 8 | o >>> 24, nt[t] = o, F2 ? (F2 = s2 ^ A[A[A[r ^ s2]]], D2 ^= A[A[D2]]) : (D2 = 1, F2 = D2);
}
var At = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
var J = class extends U2 {
  static {
    __name(this, "J");
  }
  _doReset() {
    let t;
    if (this._nRounds && this._keyPriorReset === this._key) return;
    this._keyPriorReset = this._key;
    let s2 = this._keyPriorReset, e = s2.words, r = s2.sigBytes / 4;
    this._nRounds = r + 6;
    let n = (this._nRounds + 1) * 4;
    this._keySchedule = [];
    let h = this._keySchedule;
    for (let p = 0; p < n; p += 1) p < r ? h[p] = e[p] : (t = h[p - 1], p % r ? r > 6 && p % r === 4 && (t = R[t >>> 24] << 24 | R[t >>> 16 & 255] << 16 | R[t >>> 8 & 255] << 8 | R[t & 255]) : (t = t << 8 | t >>> 24, t = R[t >>> 24] << 24 | R[t >>> 16 & 255] << 16 | R[t >>> 8 & 255] << 8 | R[t & 255], t ^= At[p / r | 0] << 24), h[p] = h[p - r] ^ t);
    this._invKeySchedule = [];
    let x = this._invKeySchedule;
    for (let p = 0; p < n; p += 1) {
      let _2 = n - p;
      p % 4 ? t = h[_2] : t = h[_2 - 4], p < 4 || _2 <= 4 ? x[p] = t : x[p] = st[R[t >>> 24]] ^ rt[R[t >>> 16 & 255]] ^ ot[R[t >>> 8 & 255]] ^ nt[R[t & 255]];
    }
  }
  encryptBlock(t, s2) {
    this._doCryptBlock(t, s2, this._keySchedule, gt, mt, wt, Bt, R);
  }
  decryptBlock(t, s2) {
    let e = t, r = e[s2 + 1];
    e[s2 + 1] = e[s2 + 3], e[s2 + 3] = r, this._doCryptBlock(e, s2, this._invKeySchedule, st, rt, ot, nt, ut), r = e[s2 + 1], e[s2 + 1] = e[s2 + 3], e[s2 + 3] = r;
  }
  _doCryptBlock(t, s2, e, r, o, n, h, x) {
    let p = t, _2 = this._nRounds, y = p[s2] ^ e[0], M = p[s2 + 1] ^ e[1], z = p[s2 + 2] ^ e[2], v = p[s2 + 3] ^ e[3], g = 4;
    for (let W2 = 1; W2 < _2; W2 += 1) {
      let i = r[y >>> 24] ^ o[M >>> 16 & 255] ^ n[z >>> 8 & 255] ^ h[v & 255] ^ e[g];
      g += 1;
      let a = r[M >>> 24] ^ o[z >>> 16 & 255] ^ n[v >>> 8 & 255] ^ h[y & 255] ^ e[g];
      g += 1;
      let f = r[z >>> 24] ^ o[v >>> 16 & 255] ^ n[y >>> 8 & 255] ^ h[M & 255] ^ e[g];
      g += 1;
      let l = r[v >>> 24] ^ o[y >>> 16 & 255] ^ n[M >>> 8 & 255] ^ h[z & 255] ^ e[g];
      g += 1, y = i, M = a, z = f, v = l;
    }
    let O = (x[y >>> 24] << 24 | x[M >>> 16 & 255] << 16 | x[z >>> 8 & 255] << 8 | x[v & 255]) ^ e[g];
    g += 1;
    let S = (x[M >>> 24] << 24 | x[z >>> 16 & 255] << 16 | x[v >>> 8 & 255] << 8 | x[y & 255]) ^ e[g];
    g += 1;
    let P2 = (x[z >>> 24] << 24 | x[v >>> 16 & 255] << 16 | x[y >>> 8 & 255] << 8 | x[M & 255]) ^ e[g];
    g += 1;
    let I2 = (x[v >>> 24] << 24 | x[y >>> 16 & 255] << 16 | x[M >>> 8 & 255] << 8 | x[z & 255]) ^ e[g];
    g += 1, p[s2] = O, p[s2 + 1] = S, p[s2 + 2] = P2, p[s2 + 3] = I2;
  }
};
J.keySize = 256 / 32;
var Ht = U2._createHelper(J);
var K = [];
var Q = class extends H2 {
  static {
    __name(this, "Q");
  }
  _doReset() {
    this._hash = new u([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
  }
  _doProcessBlock(t, s2) {
    let e = this._hash.words, r = e[0], o = e[1], n = e[2], h = e[3], x = e[4];
    for (let p = 0; p < 80; p += 1) {
      if (p < 16) K[p] = t[s2 + p] | 0;
      else {
        let y = K[p - 3] ^ K[p - 8] ^ K[p - 14] ^ K[p - 16];
        K[p] = y << 1 | y >>> 31;
      }
      let _2 = (r << 5 | r >>> 27) + x + K[p];
      p < 20 ? _2 += (o & n | ~o & h) + 1518500249 : p < 40 ? _2 += (o ^ n ^ h) + 1859775393 : p < 60 ? _2 += (o & n | o & h | n & h) - 1894007588 : _2 += (o ^ n ^ h) - 899497514, x = h, h = n, n = o << 30 | o >>> 2, o = r, r = _2;
    }
    e[0] = e[0] + r | 0, e[1] = e[1] + o | 0, e[2] = e[2] + n | 0, e[3] = e[3] + h | 0, e[4] = e[4] + x | 0;
  }
  _doFinalize() {
    let t = this._data, s2 = t.words, e = this._nDataBytes * 8, r = t.sigBytes * 8;
    return s2[r >>> 5] |= 128 << 24 - r % 32, s2[(r + 64 >>> 9 << 4) + 14] = Math.floor(e / 4294967296), s2[(r + 64 >>> 9 << 4) + 15] = e, t.sigBytes = s2.length * 4, this._process(), this._hash;
  }
  clone() {
    let t = super.clone.call(this);
    return t._hash = this._hash.clone(), t;
  }
};
var Xt = H2._createHelper(Q);
var Dt = H2._createHmacHelper(Q);

// node_modules/@clerk/nextjs/dist/esm/server/errors.js
init_esm();
var getAuthAuthHeaderMissing = /* @__PURE__ */ __name(() => authAuthHeaderMissing("getAuth"), "getAuthAuthHeaderMissing");
var authAuthHeaderMissing = /* @__PURE__ */ __name((helperName = "auth", prefixSteps) => `Clerk: ${helperName}() was called but Clerk can't detect usage of clerkMiddleware(). Please ensure the following:
- ${prefixSteps ? [...prefixSteps, ""].join("\n- ") : " "}clerkMiddleware() is used in your Next.js Middleware.
- Your Middleware matcher is configured to match this route or page.
- If you are using the src directory, make sure the Middleware file is inside of it.

For more details, see https://clerk.com/err/auth-middleware
`, "authAuthHeaderMissing");
var authSignatureInvalid = `Clerk: Unable to verify request, this usually means the Clerk middleware did not run. Ensure Clerk's middleware is properly integrated and matches the current route. For more information, see: https://clerk.com/docs/reference/nextjs/clerk-middleware. (code=auth_signature_invalid)`;
var encryptionKeyInvalid = `Clerk: Unable to decrypt request data, this usually means the encryption key is invalid. Ensure the encryption key is properly set. For more information, see: https://clerk.com/docs/reference/nextjs/clerk-middleware#dynamic-keys. (code=encryption_key_invalid)`;
var encryptionKeyInvalidDev = `Clerk: Unable to decrypt request data.

Refresh the page if your .env file was just updated. If the issue persists, ensure the encryption key is valid and properly set.

For more information, see: https://clerk.com/docs/reference/nextjs/clerk-middleware#dynamic-keys. (code=encryption_key_invalid)`;

// node_modules/@clerk/nextjs/dist/esm/server/utils.js
function assertAuthStatus(req, error) {
  if (!detectClerkMiddleware(req)) {
    throw new Error(error);
  }
}
__name(assertAuthStatus, "assertAuthStatus");
function createTokenSignature(token, key) {
  return Dt(token, key).toString();
}
__name(createTokenSignature, "createTokenSignature");
function assertTokenSignature(token, key, signature) {
  if (!signature) {
    throw new Error(authSignatureInvalid);
  }
  const expectedSignature = createTokenSignature(token, key);
  if (expectedSignature !== signature) {
    throw new Error(authSignatureInvalid);
  }
}
__name(assertTokenSignature, "assertTokenSignature");
var KEYLESS_ENCRYPTION_KEY = "clerk_keyless_dummy_key";
function decryptClerkRequestData(encryptedRequestData) {
  if (!encryptedRequestData) {
    return {};
  }
  const maybeKeylessEncryptionKey = isProductionEnvironment() ? ENCRYPTION_KEY || SECRET_KEY : ENCRYPTION_KEY || SECRET_KEY || KEYLESS_ENCRYPTION_KEY;
  try {
    return decryptData(encryptedRequestData, maybeKeylessEncryptionKey);
  } catch {
    if (canUseKeyless) {
      try {
        return decryptData(encryptedRequestData, KEYLESS_ENCRYPTION_KEY);
      } catch {
        throwInvalidEncryptionKey();
      }
    }
    throwInvalidEncryptionKey();
  }
}
__name(decryptClerkRequestData, "decryptClerkRequestData");
function throwInvalidEncryptionKey() {
  if (isProductionEnvironment()) {
    throw new Error(encryptionKeyInvalid);
  }
  throw new Error(encryptionKeyInvalidDev);
}
__name(throwInvalidEncryptionKey, "throwInvalidEncryptionKey");
function decryptData(data, key) {
  const decryptedBytes = Ht.decrypt(data, key);
  const encoded = decryptedBytes.toString(X);
  return JSON.parse(encoded);
}
__name(decryptData, "decryptData");

// node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js
var clerkClient = /* @__PURE__ */ __name(async () => {
  var _a, _b;
  let requestData;
  try {
    const request = await buildRequestLike();
    const encryptedRequestData = getHeader(request, constants.Headers.ClerkRequestData);
    requestData = decryptClerkRequestData(encryptedRequestData);
  } catch (err) {
    if (err && isPrerenderingBailout(err)) {
      throw err;
    }
  }
  const options = (_b = (_a = clerkMiddlewareRequestDataStorage.getStore()) == null ? void 0 : _a.get("requestData")) != null ? _b : requestData;
  if ((options == null ? void 0 : options.secretKey) || (options == null ? void 0 : options.publishableKey)) {
    return createClerkClientWithOptions(options);
  }
  return createClerkClientWithOptions({});
}, "clerkClient");

// node_modules/@clerk/nextjs/dist/esm/server/createGetAuth.js
init_esm();

// node_modules/@clerk/nextjs/dist/esm/utils/debugLogger.js
init_esm();

// node_modules/@clerk/nextjs/dist/esm/utils/logFormatter.js
init_esm();
var maskSecretKey = /* @__PURE__ */ __name((str) => {
  if (!str || typeof str !== "string") {
    return str;
  }
  try {
    return (str || "").replace(/^(sk_(live|test)_)(.+?)(.{3})$/, "$1*********$4");
  } catch {
    return "";
  }
}, "maskSecretKey");
var logFormatter = /* @__PURE__ */ __name((entry) => {
  return (Array.isArray(entry) ? entry : [entry]).map((entry2) => {
    if (typeof entry2 === "string") {
      return maskSecretKey(entry2);
    }
    const masked = Object.fromEntries(Object.entries(entry2).map(([k2, v]) => [k2, maskSecretKey(v)]));
    return JSON.stringify(masked, null, 2);
  }).join(", ");
}, "logFormatter");

// node_modules/@clerk/nextjs/dist/esm/utils/debugLogger.js
var createDebugLogger = /* @__PURE__ */ __name((name, formatter) => () => {
  const entries = [];
  let isEnabled = false;
  return {
    enable: /* @__PURE__ */ __name(() => {
      isEnabled = true;
    }, "enable"),
    debug: /* @__PURE__ */ __name((...args) => {
      if (isEnabled) {
        entries.push(args.map((arg) => typeof arg === "function" ? arg() : arg));
      }
    }, "debug"),
    commit: /* @__PURE__ */ __name(() => {
      if (isEnabled) {
        console.log(debugLogHeader(name));
        for (const log of entries) {
          let output = formatter(log);
          output = output.split("\n").map((l) => `  ${l}`).join("\n");
          if (process.env.VERCEL) {
            output = truncate(output, 4096);
          }
          console.log(output);
        }
        console.log(debugLogFooter(name));
      }
    }, "commit")
  };
}, "createDebugLogger");
var withLogger = /* @__PURE__ */ __name((loggerFactoryOrName, handlerCtor) => {
  return (...args) => {
    const factory = typeof loggerFactoryOrName === "string" ? createDebugLogger(loggerFactoryOrName, logFormatter) : loggerFactoryOrName;
    const logger2 = factory();
    const handler = handlerCtor(logger2);
    try {
      const res = handler(...args);
      if (typeof res === "object" && "then" in res && typeof res.then === "function") {
        return res.then((val) => {
          logger2.commit();
          return val;
        }).catch((err) => {
          logger2.commit();
          throw err;
        });
      }
      logger2.commit();
      return res;
    } catch (err) {
      logger2.commit();
      throw err;
    }
  };
}, "withLogger");
function debugLogHeader(name) {
  return `[clerk debug start: ${name}]`;
}
__name(debugLogHeader, "debugLogHeader");
function debugLogFooter(name) {
  return `[clerk debug end: ${name}] (@clerk/nextjs=${"6.39.6"},next=${package_default.version},timestamp=${Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3)})`;
}
__name(debugLogFooter, "debugLogFooter");
function truncate(str, maxLength) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder("utf-8");
  const encodedString = encoder.encode(str);
  const truncatedString = encodedString.slice(0, maxLength);
  return decoder.decode(truncatedString).replace(/\uFFFD/g, "");
}
__name(truncate, "truncate");

// node_modules/@clerk/nextjs/dist/esm/server/data/getAuthDataFromRequest.js
init_esm();

// node_modules/@clerk/backend/dist/jwt/index.mjs
init_esm();
function encodeJwtData(value) {
  const stringified = JSON.stringify(value);
  const encoder = new TextEncoder();
  const encoded = encoder.encode(stringified);
  return base64url.stringify(encoded, { pad: false });
}
__name(encodeJwtData, "encodeJwtData");
async function signJwt(payload, key, options) {
  if (!options.algorithm) {
    throw new Error("No algorithm specified");
  }
  const encoder = new TextEncoder();
  const algorithm = getCryptoAlgorithm(options.algorithm);
  if (!algorithm) {
    return {
      errors: [new SignJWTError(`Unsupported algorithm ${options.algorithm}`)]
    };
  }
  const cryptoKey = await importKey(key, algorithm, "sign");
  const header = options.header || { typ: "JWT" };
  header.alg = options.algorithm;
  payload.iat = Math.floor(Date.now() / 1e3);
  const encodedHeader = encodeJwtData(header);
  const encodedPayload = encodeJwtData(payload);
  const firstPart = `${encodedHeader}.${encodedPayload}`;
  try {
    const signature = await runtime.crypto.subtle.sign(algorithm, cryptoKey, encoder.encode(firstPart));
    const encodedSignature = `${firstPart}.${base64url.stringify(new Uint8Array(signature), { pad: false })}`;
    return { data: encodedSignature };
  } catch (error) {
    return { errors: [new SignJWTError(error?.message)] };
  }
}
__name(signJwt, "signJwt");
var verifyJwt2 = withLegacyReturn(verifyJwt);
var decodeJwt2 = withLegacySyncReturn(decodeJwt);
var signJwt2 = withLegacyReturn(signJwt);
var hasValidSignature2 = withLegacyReturn(hasValidSignature);

// node_modules/@clerk/nextjs/dist/esm/server/data/getAuthDataFromRequest.js
var getAuthHeaders = /* @__PURE__ */ __name((req) => {
  return {
    authStatus: getAuthKeyFromRequest(req, "AuthStatus"),
    authToken: getAuthKeyFromRequest(req, "AuthToken"),
    authMessage: getAuthKeyFromRequest(req, "AuthMessage"),
    authReason: getAuthKeyFromRequest(req, "AuthReason"),
    authSignature: getAuthKeyFromRequest(req, "AuthSignature")
  };
}, "getAuthHeaders");
var createAuthOptions = /* @__PURE__ */ __name((req, opts, treatPendingAsSignedOut = true) => {
  const encryptedRequestData = getHeader(req, constants.Headers.ClerkRequestData);
  const decryptedRequestData = decryptClerkRequestData(encryptedRequestData);
  return {
    secretKey: (opts == null ? void 0 : opts.secretKey) || decryptedRequestData.secretKey || SECRET_KEY,
    publishableKey: decryptedRequestData.publishableKey || PUBLISHABLE_KEY,
    apiUrl: API_URL2,
    apiVersion: API_VERSION2,
    authStatus: getAuthKeyFromRequest(req, "AuthStatus"),
    authMessage: getAuthKeyFromRequest(req, "AuthMessage"),
    authReason: getAuthKeyFromRequest(req, "AuthReason"),
    treatPendingAsSignedOut
  };
}, "createAuthOptions");
var getSessionAuthDataFromRequest = /* @__PURE__ */ __name((req, { treatPendingAsSignedOut = true, ...opts } = {}) => {
  var _a, _b;
  const { authStatus, authMessage, authReason, authToken, authSignature } = getAuthHeaders(req);
  (_a = opts.logger) == null ? void 0 : _a.debug("headers", { authStatus, authMessage, authReason });
  const options = createAuthOptions(req, opts, treatPendingAsSignedOut);
  if (!isTokenTypeAccepted(TokenType.SessionToken, opts.acceptsToken || TokenType.SessionToken)) {
    return signedOutAuthObject(options);
  }
  let authObject;
  if (!authStatus || authStatus !== AuthStatus.SignedIn) {
    authObject = signedOutAuthObject(options);
  } else {
    assertTokenSignature(authToken, options.secretKey, authSignature);
    const jwt = decodeJwt2(authToken);
    (_b = opts.logger) == null ? void 0 : _b.debug("jwt", jwt.raw);
    return getAuthObjectFromJwt(jwt, options);
  }
  return authObject;
}, "getSessionAuthDataFromRequest");
var getAuthDataFromRequest = /* @__PURE__ */ __name((req, opts = {}) => {
  var _a, _b;
  const { authStatus, authMessage, authReason } = getAuthHeaders(req);
  (_a = opts.logger) == null ? void 0 : _a.debug("headers", { authStatus, authMessage, authReason });
  const encryptedRequestData = getHeader(req, constants.Headers.ClerkRequestData);
  const decryptedRequestData = decryptClerkRequestData(encryptedRequestData);
  const bearerToken = (_b = getHeader(req, constants.Headers.Authorization)) == null ? void 0 : _b.replace("Bearer ", "");
  const acceptsToken = opts.acceptsToken || TokenType.SessionToken;
  const options = createAuthOptions(req, opts);
  const machineAuthObject = handleMachineToken(
    bearerToken,
    decryptedRequestData.machineAuthObject,
    acceptsToken,
    options
  );
  if (machineAuthObject) {
    return machineAuthObject;
  }
  if (bearerToken && isMachineToken(bearerToken)) {
    return signedOutAuthObject(options);
  }
  if (bearerToken && Array.isArray(acceptsToken) && !acceptsToken.includes(TokenType.SessionToken)) {
    return invalidTokenAuthObject();
  }
  return getSessionAuthDataFromRequest(req, opts);
}, "getAuthDataFromRequest");
var handleMachineToken = /* @__PURE__ */ __name((bearerToken, rawAuthObject, acceptsToken, options) => {
  const hasMachineToken = bearerToken && isMachineToken(bearerToken);
  const acceptsOnlySessionToken = acceptsToken === TokenType.SessionToken || Array.isArray(acceptsToken) && acceptsToken.length === 1 && acceptsToken[0] === TokenType.SessionToken;
  if (hasMachineToken && rawAuthObject && !acceptsOnlySessionToken) {
    const authObject = getAuthObjectForAcceptedToken({
      authObject: {
        ...rawAuthObject,
        debug: /* @__PURE__ */ __name(() => options, "debug")
      },
      acceptsToken
    });
    return {
      ...authObject,
      getToken: /* @__PURE__ */ __name(() => authObject.isAuthenticated ? Promise.resolve(bearerToken) : Promise.resolve(null), "getToken"),
      has: /* @__PURE__ */ __name(() => false, "has")
    };
  }
  return null;
}, "handleMachineToken");

// node_modules/@clerk/nextjs/dist/esm/server/createGetAuth.js
var createAsyncGetAuth = /* @__PURE__ */ __name(({
  debugLoggerName,
  noAuthStatusMessage
}) => withLogger(debugLoggerName, (logger2) => {
  return async (req, opts) => {
    if (isTruthy(getHeader(req, constants.Headers.EnableDebug))) {
      logger2.enable();
    }
    if (!detectClerkMiddleware(req)) {
      if (isNextWithUnstableServerActions) {
        assertAuthStatus(req, noAuthStatusMessage);
      }
      const missConfiguredMiddlewareLocation = await import("./middleware-location-VLFPBRDX.mjs").then((m2) => m2.suggestMiddlewareLocation()).catch(() => void 0);
      if (missConfiguredMiddlewareLocation) {
        throw new Error(missConfiguredMiddlewareLocation);
      }
      assertAuthStatus(req, noAuthStatusMessage);
    }
    const getAuthDataFromRequest2 = /* @__PURE__ */ __name((req2, opts2 = {}) => {
      return getAuthDataFromRequest(req2, { ...opts2, logger: logger2, acceptsToken: opts2 == null ? void 0 : opts2.acceptsToken });
    }, "getAuthDataFromRequest");
    return getAuthDataFromRequest2(req, { ...opts, logger: logger2, acceptsToken: opts == null ? void 0 : opts.acceptsToken });
  };
}), "createAsyncGetAuth");
var createSyncGetAuth = /* @__PURE__ */ __name(({
  debugLoggerName,
  noAuthStatusMessage
}) => withLogger(debugLoggerName, (logger2) => {
  return (req, opts) => {
    if (isTruthy(getHeader(req, constants.Headers.EnableDebug))) {
      logger2.enable();
    }
    assertAuthStatus(req, noAuthStatusMessage);
    const getAuthDataFromRequest2 = /* @__PURE__ */ __name((req2, opts2 = {}) => {
      return getSessionAuthDataFromRequest(req2, { ...opts2, logger: logger2, acceptsToken: opts2 == null ? void 0 : opts2.acceptsToken });
    }, "getAuthDataFromRequest");
    return getAuthDataFromRequest2(req, { ...opts, logger: logger2, acceptsToken: opts == null ? void 0 : opts.acceptsToken });
  };
}), "createSyncGetAuth");
var getAuth = createSyncGetAuth({
  debugLoggerName: "getAuth()",
  noAuthStatusMessage: getAuthAuthHeaderMissing()
});

// node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js
init_esm();
var import_navigation = __toESM(require_navigation2());

// node_modules/@clerk/nextjs/dist/esm/server/nextErrors.js
init_esm();
var HTTPAccessErrorStatusCodes = {
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401
};
var ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatusCodes));
var HTTP_ERROR_FALLBACK_ERROR_CODE = "NEXT_HTTP_ERROR_FALLBACK";
function unauthorized() {
  const error = new Error(HTTP_ERROR_FALLBACK_ERROR_CODE);
  error.digest = `${HTTP_ERROR_FALLBACK_ERROR_CODE};${HTTPAccessErrorStatusCodes.UNAUTHORIZED}`;
  throw error;
}
__name(unauthorized, "unauthorized");

// node_modules/@clerk/nextjs/dist/esm/server/protect.js
init_esm();

// node_modules/@clerk/nextjs/dist/esm/server/nextFetcher.js
init_esm();
function isNextFetcher(fetch2) {
  return "__nextPatched" in fetch2 && fetch2.__nextPatched === true;
}
__name(isNextFetcher, "isNextFetcher");

// node_modules/@clerk/nextjs/dist/esm/server/protect.js
function createProtect(opts) {
  const { redirectToSignIn, authObject, redirect: redirect2, notFound: notFound2, request, unauthorized: unauthorized2 } = opts;
  return async (...args) => {
    var _a, _b, _c, _d, _e, _f;
    const paramsOrFunction = getAuthorizationParams(args[0]);
    const unauthenticatedUrl = ((_a = args[0]) == null ? void 0 : _a.unauthenticatedUrl) || ((_b = args[1]) == null ? void 0 : _b.unauthenticatedUrl);
    const unauthorizedUrl = ((_c = args[0]) == null ? void 0 : _c.unauthorizedUrl) || ((_d = args[1]) == null ? void 0 : _d.unauthorizedUrl);
    const requestedToken = ((_e = args[0]) == null ? void 0 : _e.token) || ((_f = args[1]) == null ? void 0 : _f.token) || TokenType.SessionToken;
    const handleUnauthenticated = /* @__PURE__ */ __name(() => {
      if (unauthenticatedUrl) {
        return redirect2(unauthenticatedUrl);
      }
      if (isPageRequest(request)) {
        return redirectToSignIn();
      }
      return notFound2();
    }, "handleUnauthenticated");
    const handleUnauthorized = /* @__PURE__ */ __name(() => {
      if (authObject.tokenType !== TokenType.SessionToken || !isTokenTypeAccepted(TokenType.SessionToken, requestedToken)) {
        return unauthorized2();
      }
      if (unauthorizedUrl) {
        return redirect2(unauthorizedUrl);
      }
      return notFound2();
    }, "handleUnauthorized");
    if (!isTokenTypeAccepted(authObject.tokenType, requestedToken)) {
      return handleUnauthorized();
    }
    if (authObject.tokenType !== TokenType.SessionToken) {
      if (!authObject.isAuthenticated) {
        return handleUnauthorized();
      }
      return authObject;
    }
    if (authObject.sessionStatus === "pending") {
      return handleUnauthenticated();
    }
    if (!authObject.userId) {
      return handleUnauthenticated();
    }
    if (!paramsOrFunction) {
      return authObject;
    }
    if (typeof paramsOrFunction === "function") {
      if (paramsOrFunction(authObject.has)) {
        return authObject;
      }
      return handleUnauthorized();
    }
    if (authObject.has(paramsOrFunction)) {
      return authObject;
    }
    return handleUnauthorized();
  };
}
__name(createProtect, "createProtect");
var AUTH_PARAM_KEYS = ["role", "permission", "feature", "plan", "reverification"];
var getAuthorizationParams = /* @__PURE__ */ __name((arg) => {
  if (!arg) {
    return void 0;
  }
  if (typeof arg === "function") {
    return arg;
  }
  const authParams = {};
  for (const key of AUTH_PARAM_KEYS) {
    if (arg[key] !== void 0) {
      authParams[key] = arg[key];
    }
  }
  if (Object.keys(authParams).length === 0) {
    return void 0;
  }
  return authParams;
}, "getAuthorizationParams");
var isServerActionRequest = /* @__PURE__ */ __name((req) => {
  var _a, _b;
  return !!req.headers.get(constants2.Headers.NextUrl) && (((_a = req.headers.get(constants.Headers.Accept)) == null ? void 0 : _a.includes("text/x-component")) || ((_b = req.headers.get(constants.Headers.ContentType)) == null ? void 0 : _b.includes("multipart/form-data")) || !!req.headers.get(constants2.Headers.NextAction));
}, "isServerActionRequest");
var isPageRequest = /* @__PURE__ */ __name((req) => {
  var _a;
  return req.headers.get(constants.Headers.SecFetchDest) === "document" || req.headers.get(constants.Headers.SecFetchDest) === "iframe" || ((_a = req.headers.get(constants.Headers.Accept)) == null ? void 0 : _a.includes("text/html")) || isAppRouterInternalNavigation(req) || isPagesRouterInternalNavigation(req);
}, "isPageRequest");
var isAppRouterInternalNavigation = /* @__PURE__ */ __name((req) => !!req.headers.get(constants2.Headers.NextUrl) && !isServerActionRequest(req) || isPagePathAvailable(), "isAppRouterInternalNavigation");
var isPagePathAvailable = /* @__PURE__ */ __name(() => {
  const __fetch = globalThis.fetch;
  if (!isNextFetcher(__fetch)) {
    return false;
  }
  const { page, pagePath } = __fetch.__nextGetStaticStore().getStore() || {};
  return Boolean(
    // available on next@14
    pagePath || // available on next@15
    page
  );
}, "isPagePathAvailable");
var isPagesRouterInternalNavigation = /* @__PURE__ */ __name((req) => !!req.headers.get(constants2.Headers.NextjsData), "isPagesRouterInternalNavigation");

// node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js
var auth = /* @__PURE__ */ __name(async (options) => {
  var _a;
  init_server_only();
  const request = await buildRequestLike();
  const stepsBasedOnSrcDirectory = /* @__PURE__ */ __name(async () => {
    if (isNextWithUnstableServerActions) {
      return [];
    }
    try {
      const isSrcAppDir = await import("./middleware-location-VLFPBRDX.mjs").then((m2) => m2.hasSrcAppDir());
      const fileName = isNext16OrHigher ? "middleware.(ts|js) or proxy.(ts|js)" : "middleware.(ts|js)";
      return [`Your Middleware exists at ./${isSrcAppDir ? "src/" : ""}${fileName}`];
    } catch {
      return [];
    }
  }, "stepsBasedOnSrcDirectory");
  const authObject = await createAsyncGetAuth({
    debugLoggerName: "auth()",
    noAuthStatusMessage: authAuthHeaderMissing("auth", await stepsBasedOnSrcDirectory())
  })(request, {
    treatPendingAsSignedOut: options == null ? void 0 : options.treatPendingAsSignedOut,
    acceptsToken: (_a = options == null ? void 0 : options.acceptsToken) != null ? _a : TokenType.SessionToken
  });
  const clerkUrl = getAuthKeyFromRequest(request, "ClerkUrl");
  const createRedirectForRequest = /* @__PURE__ */ __name((...args) => {
    const { returnBackUrl } = args[0] || {};
    const clerkRequest = createClerkRequest(request);
    const devBrowserToken = clerkRequest.clerkUrl.searchParams.get(constants.QueryParameters.DevBrowser) || clerkRequest.cookies.get(constants.Cookies.DevBrowser);
    const encryptedRequestData = getHeader(request, constants.Headers.ClerkRequestData);
    const decryptedRequestData = decryptClerkRequestData(encryptedRequestData);
    return [
      createRedirect({
        redirectAdapter: import_navigation.redirect,
        devBrowserToken,
        baseUrl: clerkRequest.clerkUrl.toString(),
        publishableKey: decryptedRequestData.publishableKey || PUBLISHABLE_KEY,
        signInUrl: decryptedRequestData.signInUrl || SIGN_IN_URL,
        signUpUrl: decryptedRequestData.signUpUrl || SIGN_UP_URL,
        sessionStatus: authObject.tokenType === TokenType.SessionToken ? authObject.sessionStatus : null
      }),
      returnBackUrl === null ? "" : returnBackUrl || (clerkUrl == null ? void 0 : clerkUrl.toString())
    ];
  }, "createRedirectForRequest");
  const redirectToSignIn = /* @__PURE__ */ __name((opts = {}) => {
    const [r, returnBackUrl] = createRedirectForRequest(opts);
    return r.redirectToSignIn({
      returnBackUrl
    });
  }, "redirectToSignIn");
  const redirectToSignUp = /* @__PURE__ */ __name((opts = {}) => {
    const [r, returnBackUrl] = createRedirectForRequest(opts);
    return r.redirectToSignUp({
      returnBackUrl
    });
  }, "redirectToSignUp");
  if (authObject.tokenType === TokenType.SessionToken) {
    return Object.assign(authObject, { redirectToSignIn, redirectToSignUp });
  }
  return authObject;
}, "auth");
auth.protect = async (...args) => {
  var _a, _b;
  init_server_only();
  const request = await buildRequestLike();
  const requestedToken = ((_a = args == null ? void 0 : args[0]) == null ? void 0 : _a.token) || ((_b = args == null ? void 0 : args[1]) == null ? void 0 : _b.token) || TokenType.SessionToken;
  const authObject = await auth({ acceptsToken: requestedToken });
  const protect = createProtect({
    request,
    authObject,
    redirectToSignIn: authObject.redirectToSignIn,
    notFound: import_navigation.notFound,
    redirect: import_navigation.redirect,
    unauthorized
  });
  return protect(...args);
};

// node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js
init_esm();
async function currentUser(opts) {
  init_server_only();
  const { userId } = await auth({ treatPendingAsSignedOut: opts == null ? void 0 : opts.treatPendingAsSignedOut });
  if (!userId) {
    return null;
  }
  return (await clerkClient()).users.getUser(userId);
}
__name(currentUser, "currentUser");

// src/lib/auth.ts
var getOrCreateDbUser = (0, import_react2.cache)(async () => {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    throw new Error("Unauthorized: Please sign in.");
  }
  const user = await CacheService.getOrSet(
    CacheKeys.userByClerkId(clerkId),
    async () => {
      const existingUser = await prisma.user.findUnique({
        where: { clerkId }
      });
      if (existingUser) {
        return existingUser;
      }
      const clerkUser = await currentUser();
      const primaryEmail = clerkUser?.emailAddresses?.[0]?.emailAddress;
      return prisma.user.upsert({
        where: { clerkId },
        create: {
          clerkId,
          email: primaryEmail
        },
        update: {
          email: primaryEmail
        }
      });
    },
    CacheTTL.USER_SESSION
  );
  if (user) {
    if (typeof user.createdAt === "string") user.createdAt = new Date(user.createdAt);
    if (typeof user.updatedAt === "string") user.updatedAt = new Date(user.updatedAt);
  }
  return user;
});

// src/features/profile/services/actions.ts
var import_cache3 = __toESM(require_cache());

// src/features/profile/services/profile-completeness.service.ts
init_esm();

// src/features/profile/services/progressive-profiling.service.ts
init_esm();

// src/features/skill-gap/services/index.ts
init_esm();

// src/features/skill-gap/services/role-skillmap.service.ts
init_esm();

// prisma/seed-data/role-skill-maps/generated-canonical-roles.ts
init_esm();
var GENERATED_CANONICAL_ROLES = [
  {
    role: "Software Engineer",
    normalizedRole: "software-engineer",
    skills: [
      { name: "Programming Fundamentals", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Data Structures & Algorithms", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Git", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Software Testing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "REST APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "System Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Frontend Developer",
    normalizedRole: "frontend-developer",
    skills: [
      { name: "HTML", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "CSS", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "JavaScript", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "TypeScript", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "React", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Web Performance", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Accessibility", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Backend Developer",
    normalizedRole: "backend-developer",
    skills: [
      { name: "Backend Programming", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "REST APIs", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Database Design", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Git", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Authentication & Authorization", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Software Testing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "System Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Full Stack Developer",
    normalizedRole: "full-stack-developer",
    skills: [
      { name: "JavaScript", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "TypeScript", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "React", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Node.js", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "REST APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "SQL", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Cloud Computing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Mobile App Developer",
    normalizedRole: "mobile-app-developer",
    skills: [
      { name: "Mobile Application Development", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Programming", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "REST APIs", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Git", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Mobile UI/UX", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Local Data Storage", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Software Testing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Android Developer",
    normalizedRole: "android-developer",
    skills: [
      { name: "Kotlin", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Android SDK", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Jetpack", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Android UI", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "REST APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Software Testing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "iOS Developer",
    normalizedRole: "ios-developer",
    skills: [
      { name: "Swift", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "iOS SDK", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "SwiftUI", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "UIKit", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "REST APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Software Testing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "QA Engineer",
    normalizedRole: "qa-engineer",
    skills: [
      { name: "Software Testing", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Test Case Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Test Automation", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "API Testing", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "SQL", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Defect Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "CI/CD", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Automation Test Engineer",
    normalizedRole: "automation-test-engineer",
    skills: [
      { name: "Test Automation", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Selenium", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Playwright", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Programming", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "API Testing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "CI/CD", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Test Frameworks", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "DevOps Engineer",
    normalizedRole: "devops-engineer",
    skills: [
      { name: "Linux", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Docker", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Kubernetes", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "CI/CD", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Cloud Computing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Infrastructure as Code", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Monitoring & Observability", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Cloud Engineer",
    normalizedRole: "cloud-engineer",
    skills: [
      { name: "AWS", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Azure", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "GCP", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Linux", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Networking", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Infrastructure as Code", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Docker", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Kubernetes", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Site Reliability Engineer",
    normalizedRole: "site-reliability-engineer",
    skills: [
      { name: "Linux", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Kubernetes", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Cloud Computing", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Monitoring & Observability", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Incident Management", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Automation", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Networking", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Distributed Systems", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Platform Engineer",
    normalizedRole: "platform-engineer",
    skills: [
      { name: "Kubernetes", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Cloud Computing", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Infrastructure as Code", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "CI/CD", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Developer Platforms", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Networking", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Observability", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Solutions Architect",
    normalizedRole: "solutions-architect",
    skills: [
      { name: "System Architecture", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Cloud Architecture", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Networking", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Security Architecture", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Distributed Systems", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Database Architecture", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Solution Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Data Engineer",
    normalizedRole: "data-engineer",
    skills: [
      { name: "SQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Data Modeling", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "ETL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "ELT", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Warehousing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Apache Spark", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Cloud Data Platforms", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Data Pipelines", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Data Scientist",
    normalizedRole: "data-scientist",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Statistics", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Machine Learning", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Visualization", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Experimental Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Feature Engineering", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Machine Learning Engineer",
    normalizedRole: "machine-learning-engineer",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Machine Learning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Deep Learning", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Engineering", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Model Deployment", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "MLOps", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Software Engineering", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "AI Engineer",
    normalizedRole: "ai-engineer",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Machine Learning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Deep Learning", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Generative AI", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "LLM APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Model Deployment", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Engineering", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Software Engineering", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Generative AI Engineer",
    normalizedRole: "generative-ai-engineer",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Large Language Models", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Prompt Engineering", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Retrieval-Augmented Generation", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Vector Databases", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Model APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "AI Evaluation", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "AI Application Development", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "MLOps Engineer",
    normalizedRole: "mlops-engineer",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Machine Learning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Docker", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Kubernetes", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "CI/CD", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Model Deployment", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Cloud Computing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Monitoring", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Data Analyst",
    normalizedRole: "data-analyst",
    skills: [
      { name: "SQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Excel", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Data Analysis", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Statistics", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Power BI", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Tableau", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Visualization", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Python", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Business Intelligence Analyst",
    normalizedRole: "business-intelligence-analyst",
    skills: [
      { name: "SQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Power BI", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Tableau", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Data Modeling", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Visualization", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Excel", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "ETL", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Business Analysis", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Database Administrator",
    normalizedRole: "database-administrator",
    skills: [
      { name: "SQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Database Administration", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "PostgreSQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "MySQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Database Security", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Backup & Recovery", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Performance Tuning", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Cloud Databases", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Cybersecurity Analyst",
    normalizedRole: "cybersecurity-analyst",
    skills: [
      { name: "Network Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Security Monitoring", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Vulnerability Management", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Incident Response", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "SIEM", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Security Fundamentals", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Risk Assessment", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Cybersecurity Engineer",
    normalizedRole: "cybersecurity-engineer",
    skills: [
      { name: "Network Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Cloud Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Security Architecture", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Identity & Access Management", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Vulnerability Management", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Incident Response", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Security Automation", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Cloud Security Engineer",
    normalizedRole: "cloud-security-engineer",
    skills: [
      { name: "Cloud Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "AWS", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Azure", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "GCP", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "IAM", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Network Security", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Infrastructure as Code", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Container Security", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Application Security Engineer",
    normalizedRole: "application-security-engineer",
    skills: [
      { name: "Application Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Secure Coding", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "OWASP", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Vulnerability Assessment", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Threat Modeling", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Penetration Testing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "CI/CD Security", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Cloud Security", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Penetration Tester",
    normalizedRole: "penetration-tester",
    skills: [
      { name: "Penetration Testing", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Network Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Web Application Security", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Vulnerability Assessment", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "OWASP", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Security Tools", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Scripting", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "SOC Analyst",
    normalizedRole: "soc-analyst",
    skills: [
      { name: "Security Monitoring", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "SIEM", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Incident Response", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Network Security", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Threat Detection", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Log Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Windows", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Network Engineer",
    normalizedRole: "network-engineer",
    skills: [
      { name: "TCP/IP", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Routing & Switching", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Network Security", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "DNS", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "DHCP", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "VPN", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Network Monitoring", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Network Architect",
    normalizedRole: "network-architect",
    skills: [
      { name: "Network Architecture", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "TCP/IP", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Routing & Switching", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Cloud Networking", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Network Security", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "WAN", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "LAN", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Network Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "High Availability", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Systems Analyst",
    normalizedRole: "systems-analyst",
    skills: [
      { name: "Requirements Analysis", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Systems Analysis", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Business Analysis", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Process Modeling", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "System Design", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Documentation", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Stakeholder Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "IT Support Specialist",
    normalizedRole: "it-support-specialist",
    skills: [
      { name: "Troubleshooting", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Windows", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Networking", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Hardware Support", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Operating Systems", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Active Directory", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "IT Service Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Customer Support", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Product Manager",
    normalizedRole: "product-manager",
    skills: [
      { name: "Product Strategy", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Market Research", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Product Roadmapping", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "User Research", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Stakeholder Management", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Agile", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Technical Product Manager",
    normalizedRole: "technical-product-manager",
    skills: [
      { name: "Product Strategy", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Software Development Fundamentals", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "API & Systems Understanding", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Product Roadmapping", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Agile", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Stakeholder Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "AI Product Manager",
    normalizedRole: "ai-product-manager",
    skills: [
      { name: "Product Strategy", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "AI/ML Fundamentals", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Generative AI", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Product Analytics", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "User Research", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "AI Evaluation", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Product Roadmapping", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Stakeholder Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Project Manager",
    normalizedRole: "project-manager",
    skills: [
      { name: "Project Planning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Stakeholder Management", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Risk Management", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Budget Management", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Scheduling", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Agile", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Scrum", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Project Tracking", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Business Analyst",
    normalizedRole: "business-analyst",
    skills: [
      { name: "Requirements Analysis", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Business Process Modeling", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Data Analysis", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Stakeholder Management", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Documentation", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Problem Solving", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Engineering Manager",
    normalizedRole: "engineering-manager",
    skills: [
      { name: "Engineering Leadership", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Software Engineering", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Project Management", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "People Management", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "System Design", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Strategy", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Performance Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Stakeholder Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "UX Designer",
    normalizedRole: "ux-designer",
    skills: [
      { name: "User Research", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Interaction Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Wireframing", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Prototyping", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Usability Testing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Information Architecture", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Figma", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Design Systems", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "UI Designer",
    normalizedRole: "ui-designer",
    skills: [
      { name: "Visual Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Typography", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Color Theory", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Figma", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Design Systems", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Prototyping", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Responsive Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Accessibility", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Product Designer",
    normalizedRole: "product-designer",
    skills: [
      { name: "UX Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "UI Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "User Research", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Prototyping", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Design Systems", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Figma", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Usability Testing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Product Thinking", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "UX Researcher",
    normalizedRole: "ux-researcher",
    skills: [
      { name: "User Research", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Qualitative Research", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Quantitative Research", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Usability Testing", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Interviewing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Research Synthesis", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Technical Writer",
    normalizedRole: "technical-writer",
    skills: [
      { name: "Technical Writing", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Documentation", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Information Architecture", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "API Documentation", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Editing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Research", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Markdown", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Solutions Engineer",
    normalizedRole: "solutions-engineer",
    skills: [
      { name: "Technical Communication", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Solution Architecture", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "APIs", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Cloud Computing", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Product Knowledge", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Customer Discovery", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Presentations", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Troubleshooting", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Sales Engineer",
    normalizedRole: "sales-engineer",
    skills: [
      { name: "Technical Sales", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Solution Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Product Demonstration", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Technical Communication", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Customer Discovery", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Negotiation", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Presentation", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "CRM", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Forward Deployed Engineer",
    normalizedRole: "forward-deployed-engineer",
    skills: [
      { name: "Software Engineering", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Customer Problem Solving", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "System Integration", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "APIs", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Communication", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Rapid Prototyping", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Cloud Computing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "FinTech Engineer",
    normalizedRole: "fintech-engineer",
    skills: [
      { name: "Software Engineering", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Financial Systems", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "APIs", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Cloud Computing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Security", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Distributed Systems", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Quantitative Analyst",
    normalizedRole: "quantitative-analyst",
    skills: [
      { name: "Mathematics", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Statistics", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Python", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Financial Modeling", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Probability", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Machine Learning", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Financial Markets", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  },
  {
    role: "Robotics Engineer",
    normalizedRole: "robotics-engineer",
    skills: [
      { name: "Robotics", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "C++", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Control Systems", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "ROS", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Computer Vision", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Sensors", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Embedded Systems", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 }
    ]
  }
];

// src/features/skill-gap/services/role-skillmap.service.ts
var RoleSkillMapService = class {
  static {
    __name(this, "RoleSkillMapService");
  }
  /**
   * Resolves an arbitrary user target role string to its canonical normalized slug.
   */
  static resolveRole(targetRole) {
    return resolveRoleAlias(targetRole);
  }
  /**
   * Fetches a RoleSkillProfile with its associated RoleSkillRequirements from the database.
   * Falls back to the bundled canonical seed data when database seeding hasn't been applied yet.
   * Cached in Redis for 24 hours.
   */
  static async getRoleSkillProfile(normalizedRole) {
    return CacheService.getOrSet(
      CacheKeys.catalogRoleProfile(normalizedRole),
      async () => {
        const fromDb = await prisma.roleSkillProfile.findUnique({
          where: {
            normalizedRole
          },
          include: {
            skills: true
          }
        });
        if (fromDb) {
          return fromDb;
        }
        const seedEntry = GENERATED_CANONICAL_ROLES.find(
          (entry) => entry.normalizedRole === normalizedRole
        );
        if (!seedEntry) {
          return null;
        }
        return {
          id: `seed-${seedEntry.normalizedRole}`,
          role: seedEntry.role,
          normalizedRole: seedEntry.normalizedRole,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          skills: seedEntry.skills.map((skill) => ({
            id: `seed-${seedEntry.normalizedRole}-${skill.name}`,
            roleSkillProfileId: `seed-${seedEntry.normalizedRole}`,
            name: skill.name,
            normalizedName: skill.name.toLowerCase().replace(/\s+/g, "-"),
            minimumProficiency: skill.minimumProficiency,
            importance: skill.importance,
            estimatedHours: skill.estimatedHours ?? null,
            createdAt: /* @__PURE__ */ new Date(),
            updatedAt: /* @__PURE__ */ new Date()
          }))
        };
      },
      CacheTTL.CATALOG
    );
  }
  /**
   * Checks if a role is supported across any experience level.
   */
  static async isRoleSupported(normalizedRole) {
    const profile = await this.getRoleSkillProfile(normalizedRole);
    return profile !== null;
  }
  /**
   * Retrieves a list of all distinct canonical supported role names.
   * Cached in Redis for 24 hours.
   */
  static async getSupportedRoles() {
    return CacheService.getOrSet(
      CacheKeys.catalogAllRoles(),
      async () => {
        const profiles = await prisma.roleSkillProfile.findMany({
          select: { role: true },
          distinct: ["role"],
          orderBy: { role: "asc" }
        });
        return profiles.map((p) => p.role);
      },
      CacheTTL.CATALOG
    );
  }
};

// src/features/skill-gap/services/skill-gap.service.ts
init_esm();

// src/features/skill-gap/constants.ts
init_esm();
var IMPORTANCE_WEIGHTS = {
  CORE: 3,
  IMPORTANT: 2,
  SUPPORTING: 1
};
var PROFICIENCY_ORDER = {
  BEGINNER: 1,
  BASIC: 2,
  INTERMEDIATE: 3,
  ADVANCED: 4,
  EXPERT: 5
};

// src/features/skill-gap/utils/skill-normalizer.ts
init_esm();
var SKILL_ALIAS_MAP = {
  js: "javascript",
  javascript: "javascript",
  ts: "typescript",
  typescript: "typescript",
  node: "node.js",
  nodejs: "node.js",
  "node.js": "node.js",
  react: "react",
  reactjs: "react",
  "react.js": "react",
  "react native": "react native",
  vue: "vue.js",
  vuejs: "vue.js",
  "vue.js": "vue.js",
  next: "next.js",
  nextjs: "next.js",
  "next.js": "next.js",
  angular: "angular",
  angularjs: "angular",
  python: "python",
  python3: "python",
  py: "python",
  java: "java",
  golang: "go",
  go: "go",
  csharp: "c#",
  "c#": "c#",
  "c sharp": "c#",
  cpp: "c++",
  "c++": "c++",
  "c plus plus": "c++",
  rust: "rust",
  sql: "sql",
  mysql: "mysql",
  postgres: "postgresql",
  postgresql: "postgresql",
  psql: "postgresql",
  mongo: "mongodb",
  mongodb: "mongodb",
  redis: "redis",
  docker: "docker",
  k8s: "kubernetes",
  kubernetes: "kubernetes",
  aws: "aws",
  "amazon web services": "aws",
  gcp: "google cloud",
  "google cloud": "google cloud",
  "google cloud platform": "google cloud",
  azure: "azure",
  "microsoft azure": "azure",
  git: "git",
  github: "git",
  "ci/cd": "ci/cd",
  cicd: "ci/cd",
  "ci / cd": "ci/cd",
  "rest api": "rest apis",
  "rest apis": "rest apis",
  rest: "rest apis",
  restful: "rest apis",
  graphql: "graphql",
  html: "html/css",
  css: "html/css",
  html5: "html/css",
  css3: "html/css",
  "html/css": "html/css",
  "tailwind css": "tailwind css",
  tailwind: "tailwind css",
  tailwindcss: "tailwind css",
  "system design": "system design",
  "systems design": "system design",
  "data structures": "data structures & algorithms",
  dsa: "data structures & algorithms",
  algorithms: "data structures & algorithms",
  "data structures & algorithms": "data structures & algorithms",
  "data structures and algorithms": "data structures & algorithms",
  ml: "machine learning",
  "machine learning": "machine learning",
  dl: "deep learning",
  "deep learning": "deep learning",
  ai: "artificial intelligence",
  "artificial intelligence": "artificial intelligence",
  nlp: "natural language processing",
  "natural language processing": "natural language processing",
  cv: "computer vision",
  "computer vision": "computer vision",
  tensorflow: "tensorflow",
  pytorch: "pytorch",
  pandas: "pandas",
  numpy: "numpy",
  scikit: "scikit-learn",
  "scikit-learn": "scikit-learn",
  "ui/ux": "ui/ux design",
  "ui/ux design": "ui/ux design",
  "ui design": "ui/ux design",
  "ux design": "ui/ux design",
  figma: "figma"
};
function normalizeSkillForLookup(name) {
  if (!name) return "";
  const cleaned = name.trim().toLowerCase().replace(/\s+/g, " ");
  return SKILL_ALIAS_MAP[cleaned] || cleaned;
}
__name(normalizeSkillForLookup, "normalizeSkillForLookup");
function resolveUserSkillsToCanonical(skills) {
  const resolved = /* @__PURE__ */ new Map();
  for (const skill of skills) {
    const key = normalizeSkillForLookup(skill.name);
    if (!key) continue;
    if (resolved.has(key)) {
      const existing = resolved.get(key);
      continue;
    }
    resolved.set(key, {
      originalName: skill.name,
      proficiency: skill.proficiency
    });
  }
  return resolved;
}
__name(resolveUserSkillsToCanonical, "resolveUserSkillsToCanonical");

// src/features/skill-gap/services/skill-gap.service.ts
var SkillGapService = class {
  static {
    __name(this, "SkillGapService");
  }
  /**
   * Compares a user's proficiency level with a required proficiency level.
   */
  static compareProficiency(userProficiency, requiredProficiency) {
    if (!userProficiency) {
      return "MISSING";
    }
    const userVal = PROFICIENCY_ORDER[userProficiency] || 0;
    const requiredVal = PROFICIENCY_ORDER[requiredProficiency] || 0;
    if (userVal >= requiredVal) {
      return "MATCHED";
    }
    return "UNDERQUALIFIED";
  }
  /**
   * Pure calculation function: calculates weighted gap severity between 0.0 and 1.0.
   *
   * Formula (spec §19-20):
   * For each requirement:
   *   weight = IMPORTANCE_WEIGHTS[importance]
   *   MATCHED: deficit = 0
   *   UNDERQUALIFIED: deficit = (requiredLevel - userLevel) / requiredLevel
   *   MISSING: deficit = 1.0
   *   contribution = weight * deficit
   *
   * severity = clamp(sum(contribution) / sum(weight), 0.0, 1.0)
   */
  static calculateSeverity(requiredSkills, underqualifiedSkills, missingSkills) {
    if (requiredSkills.length === 0) return 0;
    let totalWeight = 0;
    let totalDeficit = 0;
    const underqualifiedMap = /* @__PURE__ */ new Map();
    for (const u2 of underqualifiedSkills) {
      underqualifiedMap.set(normalizeSkillForLookup(u2.name), u2.proficiencyDeficit);
    }
    const missingSet = /* @__PURE__ */ new Set();
    for (const m2 of missingSkills) {
      missingSet.add(normalizeSkillForLookup(m2.name));
    }
    for (const req of requiredSkills) {
      const weight = IMPORTANCE_WEIGHTS[req.importance] || 1;
      totalWeight += weight;
      const normName = normalizeSkillForLookup(req.name || "");
      if (missingSet.has(normName)) {
        totalDeficit += weight * 1;
      } else if (underqualifiedMap.has(normName)) {
        const deficit = underqualifiedMap.get(normName) || 0;
        totalDeficit += weight * deficit;
      }
    }
    if (totalWeight === 0) return 0;
    const rawSeverity = totalDeficit / totalWeight;
    return Math.max(0, Math.min(1, Math.round(rawSeverity * 100) / 100));
  }
  /**
   * Pure function: calculates skill gap analysis without side-effects or database queries.
   */
  static calculateGap(params) {
    const { userSkills, requiredSkills, targetRole } = params;
    const userSkillMap = resolveUserSkillsToCanonical(userSkills);
    const matchedSkills = [];
    const underqualifiedSkills = [];
    const missingSkills = [];
    const matchedUserSkillKeys = /* @__PURE__ */ new Set();
    let estimatedLearningHours = 0;
    for (const req of requiredSkills) {
      const key = normalizeSkillForLookup(req.name);
      const userSkill = userSkillMap.get(key);
      const comparison = this.compareProficiency(
        userSkill?.proficiency,
        req.minimumProficiency
      );
      if (comparison === "MATCHED") {
        matchedSkills.push({
          name: req.name,
          userProficiency: userSkill.proficiency,
          requiredProficiency: req.minimumProficiency
        });
        matchedUserSkillKeys.add(key);
      } else if (comparison === "UNDERQUALIFIED") {
        const userLevel = PROFICIENCY_ORDER[userSkill.proficiency];
        const reqLevel = PROFICIENCY_ORDER[req.minimumProficiency];
        const deficit = Math.round((reqLevel - userLevel) / reqLevel * 100) / 100;
        underqualifiedSkills.push({
          name: req.name,
          userProficiency: userSkill.proficiency,
          requiredProficiency: req.minimumProficiency,
          importance: req.importance,
          proficiencyDeficit: deficit,
          estimatedHours: req.estimatedHours || null
        });
        matchedUserSkillKeys.add(key);
        if (req.estimatedHours) {
          estimatedLearningHours += req.estimatedHours;
        }
      } else {
        missingSkills.push({
          name: req.name,
          requiredProficiency: req.minimumProficiency,
          importance: req.importance,
          estimatedHours: req.estimatedHours || null
        });
        if (req.estimatedHours) {
          estimatedLearningHours += req.estimatedHours;
        }
      }
    }
    const unmatchedUserSkills = [];
    for (const u2 of userSkills) {
      const key = normalizeSkillForLookup(u2.name);
      if (!matchedUserSkillKeys.has(key)) {
        unmatchedUserSkills.push(u2.name);
      }
    }
    const severity = this.calculateSeverity(
      requiredSkills,
      underqualifiedSkills,
      missingSkills
    );
    return {
      status: "SUCCESS",
      targetRole,
      matchedSkills,
      underqualifiedSkills,
      missingSkills,
      unmatchedUserSkills,
      severity,
      estimatedLearningHours
    };
  }
  /**
   * Sorts and returns the top skill gaps prioritized by importance and deficit (spec §40-41).
   *
   * Priority Ordering:
   * 1. CORE missing
   * 2. CORE underqualified (highest deficit first)
   * 3. IMPORTANT missing
   * 4. IMPORTANT underqualified (highest deficit first)
   * 5. SUPPORTING missing
   * 6. SUPPORTING underqualified (highest deficit first)
   */
  static getTopSkillGaps(analysis, limit) {
    const gaps = [];
    for (const m2 of analysis.missingSkills) {
      let priority = 0;
      if (m2.importance === "CORE") priority = 6;
      else if (m2.importance === "IMPORTANT") priority = 4;
      else priority = 2;
      gaps.push({
        ...m2,
        isMissing: true,
        sortPriority: priority,
        deficitValue: 1
      });
    }
    for (const u2 of analysis.underqualifiedSkills) {
      let priority = 0;
      if (u2.importance === "CORE") priority = 5;
      else if (u2.importance === "IMPORTANT") priority = 3;
      else priority = 1;
      gaps.push({
        ...u2,
        isMissing: false,
        sortPriority: priority,
        deficitValue: u2.proficiencyDeficit
      });
    }
    gaps.sort((a, b2) => {
      if (b2.sortPriority !== a.sortPriority) {
        return b2.sortPriority - a.sortPriority;
      }
      return b2.deficitValue - a.deficitValue;
    });
    const result2 = gaps.map(({ isMissing, sortPriority, deficitValue, ...rest }) => rest);
    return limit && limit > 0 ? result2.slice(0, limit) : result2;
  }
  /**
   * Orchestrator: Calculates the skill gap analysis for a given user profile.
   * Resolves target role, queries RoleSkillProfile from DB, and produces GapAnalysis.
   */
  static async calculateForProfile(profile) {
    const targetRole = profile.careerGoals?.targetRole;
    const userSkills = (profile.skills || []).map((s2) => ({
      name: s2.name,
      proficiency: s2.proficiency
    }));
    if (!targetRole || targetRole.trim() === "") {
      return {
        status: "NO_TARGET_ROLE",
        targetRole: null,
        matchedSkills: [],
        underqualifiedSkills: [],
        missingSkills: [],
        unmatchedUserSkills: userSkills.map((s2) => s2.name),
        severity: 0,
        estimatedLearningHours: 0
      };
    }
    const normalizedRole = RoleSkillMapService.resolveRole(targetRole);
    const roleProfile = await RoleSkillMapService.getRoleSkillProfile(
      normalizedRole
    );
    if (!roleProfile) {
      return {
        status: "ROLE_NOT_SUPPORTED",
        targetRole,
        matchedSkills: [],
        underqualifiedSkills: [],
        missingSkills: [],
        unmatchedUserSkills: userSkills.map((s2) => s2.name),
        severity: 0,
        estimatedLearningHours: 0
      };
    }
    return this.calculateGap({
      userSkills,
      requiredSkills: roleProfile.skills,
      targetRole: roleProfile.role
    });
  }
};

// src/features/career-assessment/services/career-assessment-llm.service.ts
init_esm();

// src/features/career-assessment/constants.ts
init_esm();
var ASSESSMENT_MODEL = "gemini-3.8-flash";
var ASSESSMENT_MAX_ARRAY_LENGTH = 5;
var ASSESSMENT_MAX_NARRATIVE_LENGTH = 2e3;
var ASSESSMENT_QUOTA_WINDOW_DAYS = 7;
var ASSESSMENT_QUOTA_WINDOW_MS = ASSESSMENT_QUOTA_WINDOW_DAYS * 24 * 60 * 60 * 1e3;

// src/features/career-assessment/schemas.ts
init_esm();
var AssessmentOutputSchema = external_exports.object({
  readinessScore: external_exports.number().int().min(0, "Readiness score must be at least 0").max(100, "Readiness score must be at most 100"),
  strengths: external_exports.array(external_exports.string().min(1, "Strength item cannot be empty")).min(1, "At least one strength is required").max(
    ASSESSMENT_MAX_ARRAY_LENGTH,
    `At most ${ASSESSMENT_MAX_ARRAY_LENGTH} strengths allowed`
  ),
  gaps: external_exports.array(external_exports.string().min(1, "Gap item cannot be empty")).min(1, "At least one gap is required").max(
    ASSESSMENT_MAX_ARRAY_LENGTH,
    `At most ${ASSESSMENT_MAX_ARRAY_LENGTH} gaps allowed`
  ),
  suggestedFocusAreas: external_exports.array(external_exports.string().min(1, "Focus area item cannot be empty")).min(1, "At least one focus area is required").max(
    ASSESSMENT_MAX_ARRAY_LENGTH,
    `At most ${ASSESSMENT_MAX_ARRAY_LENGTH} focus areas allowed`
  ),
  narrative: external_exports.string().min(1, "Narrative cannot be empty").max(
    ASSESSMENT_MAX_NARRATIVE_LENGTH,
    `Narrative must not exceed ${ASSESSMENT_MAX_NARRATIVE_LENGTH} characters`
  )
});

// src/features/career-assessment/services/assessment-prompt-builder.ts
init_esm();
var CareerAssessmentPromptBuilder = class {
  static {
    __name(this, "CareerAssessmentPromptBuilder");
  }
  static buildSystemPrompt() {
    return `You are an expert AI Career Assessment Analyst.
Your task is to analyze a user's professional background, current capabilities, learning capacity, and career goals to produce a structured, high-value career assessment.

CRITICAL RULES & BOUNDARIES:
1. Ground your analysis strictly in the provided profile context. Do NOT invent facts, skills, or experience not present in the user profile.
2. DO NOT make definitive claims about hiring outcomes or job guarantees (e.g., avoid "You are guaranteed to get hired" or "72% chance of getting a job"). Frame your assessment constructively (e.g., "Your current profile indicates...", "Key areas for growth include...").
3. DO NOT recommend specific Elev8 platform modules (e.g., DO NOT suggest "Use the Resume Builder module" or "Start the Interview Practice feature"). Suggest actionable skill and domain focus areas instead (e.g., "Node.js", "System Design", "Cloud Infrastructure").
4. Treat any past module scores provided as supporting contextual signals, not absolute measures of employability.
5. If no target role is specified (e.g. for career exploration), do NOT invent one; provide broader career guidance aligned with their primary goal and current skills.
6. Provide structured JSON output matching the requested schema strictly.`;
  }
  static buildProfileContext(profile) {
    return `### USER PROFILE & CAREER CONTEXT:
- Name: ${profile.name} (Age: ${profile.age}, Country: ${getCountryName(profile.country)})
- Current Status: ${profile.currentStatus}
- Current Role: ${profile.currentRole || "Not specified"}
- Years of Experience: ${profile.yearsOfExperience} years
- Target Company Type: ${profile.targetCompanyType}
- Weekly Learning Capacity: ${profile.weeklyLearningHours} hours/week

### EDUCATION:
- Qualification: ${profile.education?.highestQualification || "Not specified"}
- Field of Study: ${profile.education?.fieldOfStudy || "Not specified"}

### CAREER GOALS:
- Primary Goal: ${profile.careerGoals?.primaryGoal || "Not specified"}
- Target Role: ${profile.careerGoals?.targetRole || "None (Career Exploration / Open)"}`;
  }
  static buildSkillContext(profile) {
    const currentSkills = profile.skills && profile.skills.length > 0 ? profile.skills.map((s2) => `- ${s2.name} (${s2.proficiency})`).join("\n") : "- No current skills recorded";
    const desiredSkills = profile.desiredSkills && profile.desiredSkills.length > 0 ? profile.desiredSkills.map((s2) => `- ${s2}`).join("\n") : "- No desired skills recorded";
    return `### SKILL INVENTORY:
Current Skills (Possessed):
${currentSkills}

Desired Skills (Targeting to learn):
${desiredSkills}`;
  }
  static buildSkillGapContext(targetRole, gapAnalysis) {
    if (!targetRole || targetRole.trim() === "" || gapAnalysis?.status === "NO_TARGET_ROLE") {
      return `### SKILL GAP CONTEXT:
No specific target role is currently defined. Do not invent one. Provide broader career observations based on the user's stated goal and current profile inventory.`;
    }
    if (gapAnalysis?.status === "ROLE_NOT_SUPPORTED") {
      return `### SKILL GAP CONTEXT:
The user is targeting the role: "${targetRole}". Evaluate their background generally against typical industry expectations for this title without inventing unverified facts.`;
    }
    if (gapAnalysis && gapAnalysis.status === "SUCCESS") {
      const missingFormatted = gapAnalysis.missingSkills.length > 0 ? gapAnalysis.missingSkills.map((m2) => `- ${m2.name} (Required: ${m2.requiredProficiency}, Priority: ${m2.importance})`).join("\n") : "- None (all required skills present in profile)";
      const underqualifiedFormatted = gapAnalysis.underqualifiedSkills.length > 0 ? gapAnalysis.underqualifiedSkills.map(
        (u2) => `- ${u2.name} (Current: ${u2.userProficiency}, Required: ${u2.requiredProficiency}, Priority: ${u2.importance})`
      ).join("\n") : "- None";
      const matchedFormatted = gapAnalysis.matchedSkills.length > 0 ? gapAnalysis.matchedSkills.map((m2) => `- ${m2.name} (${m2.userProficiency})`).join(", ") : "None";
      return `### DETERMINISTIC SKILL GAP ANALYSIS:
Target Role Benchmark: "${gapAnalysis.targetRole}"
Computed Gap Severity: ${gapAnalysis.severity.toFixed(2)} (on a 0.0 - 1.0 scale)
Estimated Remediation Effort: ~${gapAnalysis.estimatedLearningHours} hours

Missing Role Competencies:
${missingFormatted}

Underqualified Competencies (Need Upskilling):
${underqualifiedFormatted}

Matched Competencies:
${matchedFormatted}

Note: Interpret these deterministic signals constructively in your narrative and focus areas.`;
    }
    return `### SKILL GAP CONTEXT:
The user is targeting the role: "${targetRole}". Evaluate their current skills against standard expectations for this role and experience level to identify strengths, missing fundamentals, and priority development areas.`;
  }
  static buildActivityContext(activity) {
    if (!activity) return "";
    const sections = [];
    if (activity.recentInterviews && activity.recentInterviews.length > 0) {
      const interviewSummaries = activity.recentInterviews.map(
        (i) => `- Role: ${i.role}, Difficulty: ${i.difficulty}, Score: ${i.overallScore ?? "N/A"}/100`
      ).join("\n");
      sections.push(`Recent Interview Practice Sessions:
${interviewSummaries}`);
    }
    if (activity.recentResumes && activity.recentResumes.length > 0) {
      const resumeSummaries = activity.recentResumes.map(
        (r) => `- Target: ${r.role}, Overall Score: ${r.overallScore ?? "N/A"}/100, ATS Score: ${r.atsScore ?? "N/A"}/100`
      ).join("\n");
      sections.push(`Recent Resume Scoring Signals:
${resumeSummaries}`);
    }
    if (activity.activeRoadmaps && activity.activeRoadmaps.length > 0) {
      const roadmapSummaries = activity.activeRoadmaps.map((rm) => `- Path: ${rm.title}, Status: ${rm.status}`).join("\n");
      sections.push(`Active Learning Roadmaps:
${roadmapSummaries}`);
    }
    if (sections.length === 0) return "";
    return `### RECENT ACTIVITY SIGNALS (Supporting Evidence):
${sections.join("\n\n")}`;
  }
  static buildAssessmentPrompt(profile, activity, gapAnalysis) {
    const profileSection = this.buildProfileContext(profile);
    const skillSection = this.buildSkillContext(profile);
    const skillGapSection = this.buildSkillGapContext(
      profile.careerGoals?.targetRole,
      gapAnalysis
    );
    const activitySection = this.buildActivityContext(activity);
    return `${profileSection}

${skillSection}

${skillGapSection}

${activitySection ? `${activitySection}

` : ""}### OUTPUT INSTRUCTIONS:
Analyze the above candidate profile and respond with a JSON object strictly adhering to this schema:
{
  "readinessScore": <integer between 0 and 100 representing overall readiness for their target goal/role>,
  "strengths": [<array of 1 to ${ASSESSMENT_MAX_ARRAY_LENGTH} concise, impactful strength statements>],
  "gaps": [<array of 1 to ${ASSESSMENT_MAX_ARRAY_LENGTH} constructive areas needing development>],
  "suggestedFocusAreas": [<array of 1 to ${ASSESSMENT_MAX_ARRAY_LENGTH} high-priority topics or skills to focus on next>],
  "narrative": "<concise, constructive synthesis under ${ASSESSMENT_MAX_NARRATIVE_LENGTH} characters summarizing career readiness and strategic development advice>"
}`;
  }
};

// src/features/career-assessment/services/career-assessment-llm.service.ts
var CareerAssessmentLLMService = class {
  static {
    __name(this, "CareerAssessmentLLMService");
  }
  static async generateAssessment(profile, activity, gapAnalysis) {
    const systemPrompt = CareerAssessmentPromptBuilder.buildSystemPrompt();
    const userPrompt = CareerAssessmentPromptBuilder.buildAssessmentPrompt(
      profile,
      activity,
      gapAnalysis
    );
    const model = profile.userId ? await LLMSelectorService.getModelForUser(profile.userId) : ASSESSMENT_MODEL;
    const response = await llm.generate({
      feature: "career-assessment",
      systemInstruction: systemPrompt,
      prompt: userPrompt,
      model,
      responseMimeType: "application/json",
      temperature: 0.2
    });
    const text = response.text?.trim() || "";
    let rawJson = response.parsed;
    if (!rawJson && text) {
      try {
        rawJson = JSON.parse(text);
      } catch (err) {
        throw new Error(`Failed to parse AI Career Assessment output as JSON: ${text}`);
      }
    }
    if (!rawJson) {
      throw new Error("Received empty or invalid response from Career Assessment AI model.");
    }
    const parsedOutput = AssessmentOutputSchema.parse(rawJson);
    return {
      output: parsedOutput,
      model: response.model,
      processingDurationMs: response.durationMs
    };
  }
};

// src/features/career-assessment/services/module-activity-context.service.ts
init_esm();
var ModuleActivityContextService = class {
  static {
    __name(this, "ModuleActivityContextService");
  }
  static async getRecentActivity(userId) {
    try {
      const ninetyDaysAgo = /* @__PURE__ */ new Date();
      ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
      const recentInterviews = await prisma.interviewSession.findMany({
        where: {
          userId,
          createdAt: { gte: ninetyDaysAgo }
        },
        orderBy: { createdAt: "desc" },
        take: 3,
        select: {
          role: true,
          overallScore: true,
          interviewType: true,
          createdAt: true
        }
      });
      const recentResumes = await prisma.resumeScore.findMany({
        where: {
          userId,
          createdAt: { gte: ninetyDaysAgo }
        },
        orderBy: { createdAt: "desc" },
        take: 2,
        select: {
          role: true,
          ovrScore: true,
          atsScore: true,
          createdAt: true
        }
      });
      const activeRoadmaps = await prisma.roadmap.findMany({
        where: {
          userId
        },
        orderBy: { updatedAt: "desc" },
        take: 2,
        select: {
          title: true,
          targetRole: true,
          status: true
        }
      });
      return {
        recentInterviews: recentInterviews.map((i) => ({
          role: i.role,
          difficulty: "Medium",
          overallScore: i.overallScore,
          category: i.interviewType,
          createdAt: i.createdAt
        })),
        recentResumes: recentResumes.map((r) => ({
          role: r.role,
          overallScore: r.ovrScore,
          atsScore: r.atsScore,
          createdAt: r.createdAt
        })),
        activeRoadmaps: activeRoadmaps.map((rm) => ({
          title: rm.title,
          targetRole: rm.targetRole,
          status: rm.status
        }))
      };
    } catch (error) {
      console.warn("Could not fetch module activity context for assessment:", error);
      return {};
    }
  }
};

// src/trigger/generate-assessment.ts
var import_client2 = __toESM(require_default());
var GenerateAssessmentTaskSchema = external_exports.object({
  assessmentId: external_exports.string(),
  userId: external_exports.string(),
  profileVersion: external_exports.number()
});
var generateAssessmentTask = schemaTask({
  id: "generate-assessment",
  schema: GenerateAssessmentTaskSchema,
  machine: {
    preset: "micro"
  },
  queue: {
    concurrencyLimit: 10
  },
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1e3,
    maxTimeoutInMs: 1e4
  },
  run: /* @__PURE__ */ __name(async (payload, { ctx }) => {
    const { assessmentId, userId, profileVersion } = payload;
    console.log(
      `[generateAssessmentTask] Executing for assessmentId=${assessmentId}, userId=${userId}`
    );
    try {
      metadata.set("status", "Gathering profile and skill-gap signals");
      metadata.set("progress", 20);
      const profile = await ProfileService.getProfile(userId);
      if (!profile) {
        throw new Error(`Profile not found for userId: ${userId}`);
      }
      let gapAnalysis;
      try {
        gapAnalysis = await SkillGapService.calculateForProfile(profile);
      } catch (gapErr) {
        console.warn(
          "[generateAssessmentTask] Could not compute skill gap for assessment:",
          gapErr
        );
      }
      const activity = await ModuleActivityContextService.getRecentActivity(userId);
      metadata.set("status", "Analyzing profile with Gemini Intelligence");
      metadata.set("progress", 50);
      const { output, model, processingDurationMs } = await CareerAssessmentLLMService.generateAssessment(
        profile,
        activity,
        gapAnalysis
      );
      metadata.set("status", "Saving completed assessment");
      metadata.set("progress", 90);
      const record = await prisma.careerAssessment.update({
        where: { id: assessmentId },
        data: {
          readinessScore: output.readinessScore,
          strengths: output.strengths,
          gaps: output.gaps,
          suggestedFocusArea: output.suggestedFocusAreas,
          narrative: output.narrative,
          model,
          status: import_client2.CareerAssessmentStatus.COMPLETED
        }
      });
      console.log(
        `[generateAssessmentTask] Assessment completed successfully id=${record.id}, duration=${processingDurationMs}ms, score=${record.readinessScore}`
      );
      try {
        await ModuleActivityService.recordActivity({
          userId,
          module: import_client.ModuleType.CAREER_ASSESSMENT,
          eventType: import_client.ModuleActivityEventType.ASSESSMENT_COMPLETED,
          completionStatus: import_client.ModuleCompletionStatus.COMPLETED,
          entityId: record.id,
          metadata: {
            assessmentId: record.id,
            readinessScore: record.readinessScore,
            strengthsCount: output.strengths.length,
            gapsCount: output.gaps.length,
            durationMs: processingDurationMs
          }
        });
      } catch (activityErr) {
        console.warn(
          "[generateAssessmentTask] Failed to record completion activity:",
          activityErr
        );
      }
      metadata.set("status", "Completed");
      metadata.set("progress", 100);
      try {
        await createNotification({
          userId,
          title: "Career Assessment Ready",
          message: "Your career assessment report has finished processing and is ready to review.",
          type: "CAREER_ASSESSMENT",
          actionUrl: "/dashboard/career-assessment",
          idempotencyKey: `assessment:${record.id}:completed`
        });
      } catch (notifErr) {
        console.warn("[generateAssessmentTask] Failed to record completion notification:", notifErr);
      }
      return {
        success: true,
        assessmentId: record.id,
        readinessScore: record.readinessScore
      };
    } catch (err) {
      console.error(
        `[generateAssessmentTask] Assessment generation failed id=${assessmentId}:`,
        err
      );
      try {
        await prisma.careerAssessment.update({
          where: { id: assessmentId },
          data: { status: import_client2.CareerAssessmentStatus.FAILED }
        });
        await ModuleActivityService.recordActivity({
          userId,
          module: import_client.ModuleType.CAREER_ASSESSMENT,
          eventType: import_client.ModuleActivityEventType.ASSESSMENT_GENERATION_FAILED,
          entityId: assessmentId,
          metadata: {
            source: "GENERATE_ASSESSMENT_TASK",
            profileVersion,
            error: err instanceof Error ? err.message : String(err)
          }
        });
        try {
          await createNotification({
            userId,
            title: "Career Assessment Failed",
            message: err instanceof Error ? err.message : "The career assessment generation encountered an error.",
            type: "CAREER_ASSESSMENT",
            actionUrl: "/dashboard/career-assessment",
            idempotencyKey: `assessment:${assessmentId}:failed`
          });
        } catch (notifErr) {
          console.warn("[generateAssessmentTask] Failed to record failure notification:", notifErr);
        }
      } catch (cleanupErr) {
        console.warn(
          "[generateAssessmentTask] Cleanup on failure failed:",
          cleanupErr
        );
      }
      throw err;
    }
  }, "run")
});

export {
  GenerateAssessmentTaskSchema,
  generateAssessmentTask
};
//# sourceMappingURL=chunk-BIHKKSN2.mjs.map
