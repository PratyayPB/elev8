import {
  __name,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/puppeteer-core/lib/puppeteer/common/Debug.js
init_esm();

// node_modules/puppeteer-core/lib/puppeteer/environment.js
init_esm();
var isNode = !!(typeof process !== "undefined" && process.version);
var environment = {
  value: {
    get fs() {
      throw new Error("fs is not available in this environment");
    },
    ScreenRecorder: class {
      static {
        __name(this, "ScreenRecorder");
      }
      constructor() {
        throw new Error("ScreenRecorder is not available in this environment");
      }
    }
  }
};

// node_modules/puppeteer-core/lib/puppeteer/common/Debug.js
var DEBUG_PREFIXES = {
  cdpSend: "puppeteer:protocol:SEND ►",
  cdpReceive: "puppeteer:protocol:RECV ◀",
  bidiSend: "puppeteer:webDriverBiDi:SEND ►",
  bidiReceive: "puppeteer:webDriverBiDi:RECV ◀",
  error: "puppeteer:error",
  ffmpeg: "puppeteer:ffmpeg"
};
var debug = /* @__PURE__ */ __name((prefix) => {
  if (isNode) {
    const nodeDebug = environment.value.debuglog?.(prefix);
    if (!nodeDebug || !nodeDebug.enabled) {
      return;
    }
    return (...logArgs) => {
      if (captureLogs) {
        capturedLogs.push(prefix + logArgs);
      }
      nodeDebug(...logArgs);
    };
  }
  const debugLevel = globalThis.__PUPPETEER_DEBUG;
  if (!debugLevel) {
    return;
  }
  const everythingShouldBeLogged = debugLevel === "*";
  const prefixMatchesDebugLevel = everythingShouldBeLogged || /**
   * If the debug level is `foo*`, that means we match any prefix that
   * starts with `foo`. If the level is `foo`, we match only the prefix
   * `foo`.
   */
  (debugLevel.endsWith("*") ? prefix.startsWith(debugLevel.slice(0, -1)) : prefix === debugLevel);
  if (!prefixMatchesDebugLevel) {
    return;
  }
  return (...logArgs) => {
    console.log(`${prefix}:`, ...logArgs);
  };
}, "debug");
var capturedLogs = [];
var captureLogs = false;

export {
  isNode,
  environment,
  DEBUG_PREFIXES,
  debug
};
/*! Bundled license information:

puppeteer-core/lib/puppeteer/environment.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/puppeteer/common/Debug.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=chunk-IDLBZYRU.mjs.map
