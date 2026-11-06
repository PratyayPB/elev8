import {
  packageVersion
} from "./chunk-I4PRX5SF.mjs";
import {
  DEBUG_PREFIXES
} from "./chunk-IDLBZYRU.mjs";
import {
  wrapper_default
} from "./chunk-PZDTKSVQ.mjs";
import {
  __name,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/puppeteer-core/lib/puppeteer/node/NodeWebSocketTransport.js
init_esm();
var NodeWebSocketTransport = class _NodeWebSocketTransport {
  static {
    __name(this, "NodeWebSocketTransport");
  }
  static create(url, headers, logger) {
    return new Promise((resolve, reject) => {
      const ws = new wrapper_default(url, [], {
        followRedirects: true,
        perMessageDeflate: false,
        allowSynchronousEvents: false,
        maxPayload: 256 * 1024 * 1024,
        // 256Mb
        headers: {
          "User-Agent": `Puppeteer ${packageVersion}`,
          ...headers
        }
      });
      ws.addEventListener("open", () => {
        return resolve(new _NodeWebSocketTransport(ws, logger));
      });
      ws.addEventListener("error", reject);
    });
  }
  #ws;
  #logger;
  onmessage;
  onclose;
  constructor(ws, logger) {
    this.#ws = ws;
    this.#logger = logger;
    this.#ws.addEventListener("message", (event) => {
      if (this.onmessage) {
        this.onmessage.call(null, event.data);
      }
    });
    this.#ws.addEventListener("close", () => {
      if (this.onclose) {
        this.onclose.call(null);
      }
    });
    this.#ws.addEventListener("error", (err) => {
      this.#logger?.(DEBUG_PREFIXES.error)?.(err);
    });
  }
  send(message) {
    this.#ws.send(message);
  }
  close() {
    this.#ws.close();
  }
};

export {
  NodeWebSocketTransport
};
/*! Bundled license information:

puppeteer-core/lib/puppeteer/node/NodeWebSocketTransport.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=chunk-O7QQAOUT.mjs.map
