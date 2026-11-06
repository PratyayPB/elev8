import {
  DEBUG_PREFIXES
} from "./chunk-IDLBZYRU.mjs";
import {
  __name,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/puppeteer-core/lib/puppeteer/common/BrowserWebSocketTransport.js
init_esm();
var BrowserWebSocketTransport = class _BrowserWebSocketTransport {
  static {
    __name(this, "BrowserWebSocketTransport");
  }
  static create(url, _headers, logger) {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(url);
      ws.addEventListener("open", () => {
        return resolve(new _BrowserWebSocketTransport(ws, logger));
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
    this.#ws.addEventListener("error", () => {
      this.#logger?.(DEBUG_PREFIXES.error);
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
  BrowserWebSocketTransport
};
//# sourceMappingURL=chunk-JOLKXROQ.mjs.map
