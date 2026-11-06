import {
  convertPuppeteerChannelToBrowsersChannel
} from "./chunk-K47PDKDW.mjs";
import {
  Browser,
  CDP_WEBSOCKET_ENDPOINT_REGEX,
  TimeoutError as TimeoutError2,
  WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX,
  computeExecutablePath,
  computeSystemExecutablePath,
  createProfile,
  detectBrowserPlatform,
  getInstalledBrowsers,
  launch,
  resolveBuildId,
  uninstall
} from "./chunk-VWBOMHCV.mjs";
import {
  CDPSessionEvent,
  CdpBrowser,
  Connection,
  DEFAULT_VIEWPORT,
  DisposableStack,
  EventEmitter,
  PUPPETEER_REVISIONS,
  Puppeteer,
  TimeoutError,
  assert,
  assertSupportedUrlRestrictions,
  asyncDisposeSymbol,
  bufferCount,
  concatMap,
  createIncrementalIdGenerator,
  filter,
  firstValueFrom,
  from,
  fromEmitterEvent,
  fromEvent,
  guarded,
  lastValueFrom,
  map,
  race,
  takeUntil,
  tap,
  timer
} from "./chunk-DUVQ4I6S.mjs";
import {
  NodeWebSocketTransport
} from "./chunk-O7QQAOUT.mjs";
import {
  DEBUG_PREFIXES,
  debug,
  environment
} from "./chunk-IDLBZYRU.mjs";
import {
  ResumeBuilderService,
  builderToJsonResume,
  renderResumeTheme
} from "./chunk-RYEWKFRG.mjs";
import {
  BlobStorageService,
  JobService
} from "./chunk-CM3Z5QHD.mjs";
import {
  ModuleActivityService,
  import_client
} from "./chunk-H7NAHCK2.mjs";
import {
  external_exports,
  metadata,
  schemaTask
} from "./chunk-3HTFOM3X.mjs";
import {
  __commonJS,
  __name,
  __require,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/lilconfig/src/index.js
var require_src = __commonJS({
  "node_modules/lilconfig/src/index.js"(exports, module) {
    init_esm();
    var path4 = __require("path");
    var fs5 = __require("fs");
    var os4 = __require("os");
    var url = __require("url");
    var fsReadFileAsync = fs5.promises.readFile;
    function getDefaultSearchPlaces(name, sync) {
      return [
        "package.json",
        `.${name}rc.json`,
        `.${name}rc.js`,
        `.${name}rc.cjs`,
        ...sync ? [] : [`.${name}rc.mjs`],
        `.config/${name}rc`,
        `.config/${name}rc.json`,
        `.config/${name}rc.js`,
        `.config/${name}rc.cjs`,
        ...sync ? [] : [`.config/${name}rc.mjs`],
        `${name}.config.js`,
        `${name}.config.cjs`,
        ...sync ? [] : [`${name}.config.mjs`]
      ];
    }
    __name(getDefaultSearchPlaces, "getDefaultSearchPlaces");
    function parentDir(p) {
      return path4.dirname(p) || path4.sep;
    }
    __name(parentDir, "parentDir");
    var jsonLoader = /* @__PURE__ */ __name((_, content) => JSON.parse(content), "jsonLoader");
    var requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
    var defaultLoadersSync = Object.freeze({
      ".js": requireFunc,
      ".json": requireFunc,
      ".cjs": requireFunc,
      noExt: jsonLoader
    });
    module.exports.defaultLoadersSync = defaultLoadersSync;
    var dynamicImport = /* @__PURE__ */ __name(async (id) => {
      try {
        const fileUrl = url.pathToFileURL(id).href;
        const mod = await import(
          /* webpackIgnore: true */
          fileUrl
        );
        return mod.default;
      } catch (e) {
        try {
          return requireFunc(id);
        } catch (requireE) {
          if (requireE.code === "ERR_REQUIRE_ESM" || requireE instanceof SyntaxError && requireE.toString().includes("Cannot use import statement outside a module")) {
            throw e;
          }
          throw requireE;
        }
      }
    }, "dynamicImport");
    var defaultLoaders = Object.freeze({
      ".js": dynamicImport,
      ".mjs": dynamicImport,
      ".cjs": dynamicImport,
      ".json": jsonLoader,
      noExt: jsonLoader
    });
    module.exports.defaultLoaders = defaultLoaders;
    function getOptions(name, options, sync) {
      const conf = {
        stopDir: os4.homedir(),
        searchPlaces: getDefaultSearchPlaces(name, sync),
        ignoreEmptySearchPlaces: true,
        cache: true,
        transform: /* @__PURE__ */ __name((x) => x, "transform"),
        packageProp: [name],
        ...options,
        loaders: {
          ...sync ? defaultLoadersSync : defaultLoaders,
          ...options.loaders
        }
      };
      conf.searchPlaces.forEach((place) => {
        const key = path4.extname(place) || "noExt";
        const loader = conf.loaders[key];
        if (!loader) {
          throw new Error(`Missing loader for extension "${place}"`);
        }
        if (typeof loader !== "function") {
          throw new Error(
            `Loader for extension "${place}" is not a function: Received ${typeof loader}.`
          );
        }
      });
      return conf;
    }
    __name(getOptions, "getOptions");
    function getPackageProp(props, obj) {
      if (typeof props === "string" && props in obj) return obj[props];
      return (Array.isArray(props) ? props : props.split(".")).reduce(
        (acc, prop) => acc === void 0 ? acc : acc[prop],
        obj
      ) || null;
    }
    __name(getPackageProp, "getPackageProp");
    function validateFilePath(filepath) {
      if (!filepath) throw new Error("load must pass a non-empty string");
    }
    __name(validateFilePath, "validateFilePath");
    function validateLoader(loader, ext) {
      if (!loader) throw new Error(`No loader specified for extension "${ext}"`);
      if (typeof loader !== "function") throw new Error("loader is not a function");
    }
    __name(validateLoader, "validateLoader");
    var makeEmplace = /* @__PURE__ */ __name((enableCache) => (c, filepath, res) => {
      if (enableCache) c.set(filepath, res);
      return res;
    }, "makeEmplace");
    module.exports.lilconfig = /* @__PURE__ */ __name(function lilconfig2(name, options) {
      const {
        ignoreEmptySearchPlaces,
        loaders,
        packageProp,
        searchPlaces,
        stopDir,
        transform,
        cache
      } = getOptions(name, options ?? {}, false);
      const searchCache = /* @__PURE__ */ new Map();
      const loadCache = /* @__PURE__ */ new Map();
      const emplace = makeEmplace(cache);
      return {
        async search(searchFrom = process.cwd()) {
          const result = {
            config: null,
            filepath: ""
          };
          const visited = /* @__PURE__ */ new Set();
          let dir = searchFrom;
          dirLoop: while (true) {
            if (cache) {
              const r = searchCache.get(dir);
              if (r !== void 0) {
                for (const p of visited) searchCache.set(p, r);
                return r;
              }
              visited.add(dir);
            }
            for (const searchPlace of searchPlaces) {
              const filepath = path4.join(dir, searchPlace);
              try {
                await fs5.promises.access(filepath);
              } catch {
                continue;
              }
              const content = String(await fsReadFileAsync(filepath));
              const loaderKey = path4.extname(searchPlace) || "noExt";
              const loader = loaders[loaderKey];
              if (searchPlace === "package.json") {
                const pkg = await loader(filepath, content);
                const maybeConfig = getPackageProp(packageProp, pkg);
                if (maybeConfig != null) {
                  result.config = maybeConfig;
                  result.filepath = filepath;
                  break dirLoop;
                }
                continue;
              }
              const isEmpty = content.trim() === "";
              if (isEmpty && ignoreEmptySearchPlaces) continue;
              if (isEmpty) {
                result.isEmpty = true;
                result.config = void 0;
              } else {
                validateLoader(loader, loaderKey);
                result.config = await loader(filepath, content);
              }
              result.filepath = filepath;
              break dirLoop;
            }
            if (dir === stopDir || dir === parentDir(dir)) break dirLoop;
            dir = parentDir(dir);
          }
          const transformed = (
            // not found
            result.filepath === "" && result.config === null ? transform(null) : transform(result)
          );
          if (cache) {
            for (const p of visited) searchCache.set(p, transformed);
          }
          return transformed;
        },
        async load(filepath) {
          validateFilePath(filepath);
          const absPath = path4.resolve(process.cwd(), filepath);
          if (cache && loadCache.has(absPath)) {
            return loadCache.get(absPath);
          }
          const { base, ext } = path4.parse(absPath);
          const loaderKey = ext || "noExt";
          const loader = loaders[loaderKey];
          validateLoader(loader, loaderKey);
          const content = String(await fsReadFileAsync(absPath));
          if (base === "package.json") {
            const pkg = await loader(absPath, content);
            return emplace(
              loadCache,
              absPath,
              transform({
                config: getPackageProp(packageProp, pkg),
                filepath: absPath
              })
            );
          }
          const result = {
            config: null,
            filepath: absPath
          };
          const isEmpty = content.trim() === "";
          if (isEmpty && ignoreEmptySearchPlaces)
            return emplace(
              loadCache,
              absPath,
              transform({
                config: void 0,
                filepath: absPath,
                isEmpty: true
              })
            );
          result.config = isEmpty ? void 0 : await loader(absPath, content);
          return emplace(
            loadCache,
            absPath,
            transform(isEmpty ? { ...result, isEmpty, config: void 0 } : result)
          );
        },
        clearLoadCache() {
          if (cache) loadCache.clear();
        },
        clearSearchCache() {
          if (cache) searchCache.clear();
        },
        clearCaches() {
          if (cache) {
            loadCache.clear();
            searchCache.clear();
          }
        }
      };
    }, "lilconfig");
    module.exports.lilconfigSync = /* @__PURE__ */ __name(function lilconfigSync(name, options) {
      const {
        ignoreEmptySearchPlaces,
        loaders,
        packageProp,
        searchPlaces,
        stopDir,
        transform,
        cache
      } = getOptions(name, options ?? {}, true);
      const searchCache = /* @__PURE__ */ new Map();
      const loadCache = /* @__PURE__ */ new Map();
      const emplace = makeEmplace(cache);
      return {
        search(searchFrom = process.cwd()) {
          const result = {
            config: null,
            filepath: ""
          };
          const visited = /* @__PURE__ */ new Set();
          let dir = searchFrom;
          dirLoop: while (true) {
            if (cache) {
              const r = searchCache.get(dir);
              if (r !== void 0) {
                for (const p of visited) searchCache.set(p, r);
                return r;
              }
              visited.add(dir);
            }
            for (const searchPlace of searchPlaces) {
              const filepath = path4.join(dir, searchPlace);
              try {
                fs5.accessSync(filepath);
              } catch {
                continue;
              }
              const loaderKey = path4.extname(searchPlace) || "noExt";
              const loader = loaders[loaderKey];
              const content = String(fs5.readFileSync(filepath));
              if (searchPlace === "package.json") {
                const pkg = loader(filepath, content);
                const maybeConfig = getPackageProp(packageProp, pkg);
                if (maybeConfig != null) {
                  result.config = maybeConfig;
                  result.filepath = filepath;
                  break dirLoop;
                }
                continue;
              }
              const isEmpty = content.trim() === "";
              if (isEmpty && ignoreEmptySearchPlaces) continue;
              if (isEmpty) {
                result.isEmpty = true;
                result.config = void 0;
              } else {
                validateLoader(loader, loaderKey);
                result.config = loader(filepath, content);
              }
              result.filepath = filepath;
              break dirLoop;
            }
            if (dir === stopDir || dir === parentDir(dir)) break dirLoop;
            dir = parentDir(dir);
          }
          const transformed = (
            // not found
            result.filepath === "" && result.config === null ? transform(null) : transform(result)
          );
          if (cache) {
            for (const p of visited) searchCache.set(p, transformed);
          }
          return transformed;
        },
        load(filepath) {
          validateFilePath(filepath);
          const absPath = path4.resolve(process.cwd(), filepath);
          if (cache && loadCache.has(absPath)) {
            return loadCache.get(absPath);
          }
          const { base, ext } = path4.parse(absPath);
          const loaderKey = ext || "noExt";
          const loader = loaders[loaderKey];
          validateLoader(loader, loaderKey);
          const content = String(fs5.readFileSync(absPath));
          if (base === "package.json") {
            const pkg = loader(absPath, content);
            return transform({
              config: getPackageProp(packageProp, pkg),
              filepath: absPath
            });
          }
          const result = {
            config: null,
            filepath: absPath
          };
          const isEmpty = content.trim() === "";
          if (isEmpty && ignoreEmptySearchPlaces)
            return emplace(
              loadCache,
              absPath,
              transform({
                filepath: absPath,
                config: void 0,
                isEmpty: true
              })
            );
          result.config = isEmpty ? void 0 : loader(absPath, content);
          return emplace(
            loadCache,
            absPath,
            transform(isEmpty ? { ...result, isEmpty, config: void 0 } : result)
          );
        },
        clearLoadCache() {
          if (cache) loadCache.clear();
        },
        clearSearchCache() {
          if (cache) searchCache.clear();
        },
        clearCaches() {
          if (cache) {
            loadCache.clear();
            searchCache.clear();
          }
        }
      };
    }, "lilconfigSync");
  }
});

// src/trigger/export-resume-pdf.ts
init_esm();

// node_modules/puppeteer/lib/puppeteer/puppeteer.js
init_esm();

// node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js
init_esm();

// node_modules/puppeteer-core/lib/puppeteer/node-env-setup.js
init_esm();
import fs from "node:fs";
import path from "node:path";
import { debuglog } from "node:util";
environment.value = {
  fs,
  path,
  debuglog,
  ScreenRecorder: environment.value.ScreenRecorder
};

// node_modules/puppeteer-core/lib/puppeteer/index.js
init_esm();

// node_modules/puppeteer-core/lib/puppeteer/node/node.js
init_esm();

// node_modules/puppeteer-core/lib/puppeteer/node/ChromeLauncher.js
init_esm();
import { mkdtemp } from "node:fs/promises";
import os from "node:os";
import path2 from "node:path";

// node_modules/puppeteer-core/lib/puppeteer/node/BrowserLauncher.js
init_esm();
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

// node_modules/puppeteer-core/lib/puppeteer/node/PipeTransport.js
init_esm();
var PipeTransport = class {
  static {
    __name(this, "PipeTransport");
  }
  #pipeWrite;
  #subscriptions = new DisposableStack();
  #logger;
  #isClosed = false;
  #pendingMessage = [];
  onclose;
  onmessage;
  constructor(pipeWrite, pipeRead, logger) {
    this.#pipeWrite = pipeWrite;
    this.#logger = logger;
    const pipeReadEmitter = this.#subscriptions.use(
      // NodeJS event emitters don't support `*` so we need to typecast
      // As long as we don't use it we should be OK.
      new EventEmitter(pipeRead, logger)
    );
    pipeReadEmitter.on("data", (buffer) => {
      return this.#dispatch(buffer);
    });
    pipeReadEmitter.on("close", () => {
      if (this.onclose) {
        this.onclose.call(null);
      }
    });
    pipeReadEmitter.on("error", (err) => {
      this.#logger?.(DEBUG_PREFIXES.error)?.(err);
    });
    const pipeWriteEmitter = this.#subscriptions.use(
      // NodeJS event emitters don't support `*` so we need to typecast
      // As long as we don't use it we should be OK.
      new EventEmitter(pipeWrite)
    );
    pipeWriteEmitter.on("error", (err) => {
      this.#logger?.(DEBUG_PREFIXES.error)?.(err);
    });
  }
  send(message) {
    assert(!this.#isClosed, "`PipeTransport` is closed.");
    this.#pipeWrite.write(message);
    this.#pipeWrite.write("\0");
  }
  #dispatch(buffer) {
    assert(!this.#isClosed, "`PipeTransport` is closed.");
    this.#pendingMessage.push(buffer);
    if (buffer.indexOf("\0") === -1) {
      return;
    }
    const concatBuffer = Buffer.concat(this.#pendingMessage);
    let start = 0;
    let end = concatBuffer.indexOf("\0");
    while (end !== -1) {
      const message = concatBuffer.toString(void 0, start, end);
      setImmediate(() => {
        if (this.onmessage) {
          this.onmessage.call(null, message);
        }
      });
      start = end + 1;
      end = concatBuffer.indexOf("\0", start);
    }
    if (start >= concatBuffer.length) {
      this.#pendingMessage = [];
    } else {
      this.#pendingMessage = [concatBuffer.subarray(start)];
    }
  }
  close() {
    this.#isClosed = true;
    this.#subscriptions.dispose();
  }
};

// node_modules/puppeteer-core/lib/puppeteer/node/BrowserLauncher.js
function getBrowserTypeDisplayName(browserType) {
  switch (browserType) {
    case Browser.FIREFOX:
    case Browser.CHROME:
      return browserType.charAt(0).toUpperCase() + browserType.slice(1);
    default:
      return browserType;
  }
}
__name(getBrowserTypeDisplayName, "getBrowserTypeDisplayName");
var BrowserLauncher = class {
  static {
    __name(this, "BrowserLauncher");
  }
  #browser;
  #logger;
  /**
   * @internal
   */
  /**
   * @internal
   */
  puppeteer;
  /**
   * @internal
   */
  constructor(puppeteer3, browser, logger) {
    this.puppeteer = puppeteer3;
    this.#browser = browser;
    this.#logger = logger;
  }
  /**
   * @internal
   */
  get logger() {
    return this.#logger;
  }
  get browser() {
    return this.#browser;
  }
  async launch(options = {}) {
    options.logger ??= this.#logger;
    const { dumpio = false, enableExtensions = false, extensionsEnabledInIncognito = [], env = process.env, handleSIGINT = true, handleSIGTERM = true, handleSIGHUP = true, acceptInsecureCerts = false, networkEnabled = true, issuesEnabled = true, defaultViewport = DEFAULT_VIEWPORT, downloadBehavior, slowMo = 0, timeout = 3e4, waitForInitialPage = true, protocolTimeout, handleDevToolsAsPage, idGenerator = createIncrementalIdGenerator(), blocklist, allowlist } = options;
    let { protocol } = options;
    if (this.#browser === "firefox" && protocol === void 0) {
      protocol = "webDriverBiDi";
    }
    assertSupportedUrlRestrictions({
      allowlist,
      blocklist,
      protocol
    });
    if (this.#browser === "firefox" && protocol === "cdp") {
      throw new Error("Connecting to Firefox using CDP is no longer supported");
    }
    const launchArgs = await this.computeLaunchArguments({
      ...options,
      protocol
    });
    if (!existsSync(launchArgs.executablePath)) {
      throw new Error(`Browser was not found at the configured executablePath (${launchArgs.executablePath})`);
    }
    const usePipe = launchArgs.args.includes("--remote-debugging-pipe");
    const onProcessExit = /* @__PURE__ */ __name(async () => {
      await this.cleanUserDataDir(launchArgs.userDataDir, {
        isTemp: launchArgs.isTempUserDataDir
      });
    }, "onProcessExit");
    if (this.#browser === "firefox" && protocol === "webDriverBiDi" && usePipe) {
      throw new Error("Pipe connections are not supported with Firefox and WebDriver BiDi");
    }
    const browserProcess = launch({
      executablePath: launchArgs.executablePath,
      args: launchArgs.args,
      handleSIGHUP,
      handleSIGTERM,
      handleSIGINT,
      dumpio,
      env,
      pipe: usePipe,
      onExit: onProcessExit,
      signal: options.signal,
      logger: options.logger
    });
    let browser;
    let cdpConnection;
    let closing = false;
    const browserCloseCallback = /* @__PURE__ */ __name(async () => {
      if (closing) {
        return;
      }
      closing = true;
      await this.closeBrowser(browserProcess, cdpConnection);
    }, "browserCloseCallback");
    try {
      if (this.#browser === "firefox") {
        browser = await this.createBiDiBrowser(browserProcess, browserCloseCallback, {
          timeout,
          protocolTimeout,
          slowMo,
          defaultViewport,
          acceptInsecureCerts,
          networkEnabled,
          idGenerator,
          logger: options.logger
        });
      } else {
        if (usePipe) {
          cdpConnection = await this.createCdpPipeConnection(browserProcess, {
            timeout,
            protocolTimeout,
            slowMo,
            idGenerator,
            logger: options.logger
          });
        } else {
          cdpConnection = await this.createCdpSocketConnection(browserProcess, {
            timeout,
            protocolTimeout,
            slowMo,
            idGenerator,
            logger: options.logger
          });
        }
        if (protocol === "webDriverBiDi") {
          browser = await this.createBiDiOverCdpBrowser(browserProcess, cdpConnection, browserCloseCallback, {
            defaultViewport,
            acceptInsecureCerts,
            networkEnabled,
            issuesEnabled,
            logger: options.logger
          });
        } else {
          browser = await CdpBrowser._create(cdpConnection, [], acceptInsecureCerts, defaultViewport, downloadBehavior, browserProcess.nodeProcess, browserCloseCallback, options.targetFilter, void 0, void 0, networkEnabled, issuesEnabled, handleDevToolsAsPage, blocklist, allowlist, options.logger);
        }
      }
    } catch (error) {
      void browserCloseCallback();
      const logs = browserProcess.getRecentLogs().join("\n");
      if (logs.includes("Failed to create a ProcessSingleton for your profile directory") || // On Windows we will not get logs due to the singleton process handover. See
      // https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/process_singleton_win.cc;l=46;drc=fc7952f0422b5073515a205a04ec9c3a1ae81658
      process.platform === "win32" && existsSync(join(launchArgs.userDataDir, "lockfile"))) {
        throw new Error(`The browser is already running for ${launchArgs.userDataDir}. Use a different \`userDataDir\` or stop the running browser first.`);
      }
      if (logs.includes("Missing X server") && options.headless === false) {
        throw new Error(`Missing X server to start the headful browser. Either set headless to true or use xvfb-run to run your Puppeteer script.`);
      }
      if (error instanceof TimeoutError2) {
        throw new TimeoutError(error.message);
      }
      throw error;
    }
    if (Array.isArray(enableExtensions)) {
      await Promise.all([
        enableExtensions.map((path4) => {
          return browser.installExtension(path4, {
            enabledInIncognito: extensionsEnabledInIncognito.includes(path4)
          });
        })
      ]);
    }
    if (waitForInitialPage) {
      await this.waitForPageTarget(browser, timeout);
    }
    return browser;
  }
  /**
   * @internal
   */
  async closeBrowser(browserProcess, cdpConnection) {
    if (cdpConnection) {
      try {
        await cdpConnection.closeBrowser();
        await browserProcess.hasClosed();
      } catch (error) {
        this.#logger?.(DEBUG_PREFIXES.error)?.(error);
        await browserProcess.close();
      }
    } else {
      await firstValueFrom(race(from(browserProcess.hasClosed()), timer(5e3).pipe(map(() => {
        return from(browserProcess.close());
      }))));
    }
  }
  /**
   * @internal
   */
  async waitForPageTarget(browser, timeout) {
    try {
      await browser.waitForTarget((t) => {
        return t.type() === "page";
      }, { timeout });
    } catch (error) {
      await browser.close();
      throw error;
    }
  }
  /**
   * @internal
   */
  async createCdpSocketConnection(browserProcess, opts) {
    const browserWSEndpoint = await browserProcess.waitForLineOutput(CDP_WEBSOCKET_ENDPOINT_REGEX, opts.timeout);
    const transport = await NodeWebSocketTransport.create(browserWSEndpoint, void 0, opts.logger);
    return new Connection(
      browserWSEndpoint,
      transport,
      opts.slowMo,
      opts.protocolTimeout,
      /* rawErrors */
      false,
      opts.idGenerator,
      opts.logger
    );
  }
  /**
   * @internal
   */
  async createCdpPipeConnection(browserProcess, opts) {
    const { 3: pipeWrite, 4: pipeRead } = browserProcess.nodeProcess.stdio;
    const transport = new PipeTransport(pipeWrite, pipeRead, opts.logger);
    return new Connection(
      "",
      transport,
      opts.slowMo,
      opts.protocolTimeout,
      /* rawErrors */
      false,
      opts.idGenerator,
      opts.logger
    );
  }
  /**
   * @internal
   */
  async createBiDiOverCdpBrowser(browserProcess, cdpConnection, closeCallback, opts) {
    const bidiOnly = process.env["PUPPETEER_WEBDRIVER_BIDI_ONLY"] === "true";
    const BiDi = await import(
      /* webpackIgnore: true */
      "./bidi-AEVDRDUR.mjs"
    );
    const bidiConnection = await BiDi.connectBidiOverCdp(cdpConnection, opts.logger);
    return await BiDi.BidiBrowser.create({
      connection: bidiConnection,
      // Do not provide CDP connection to Browser, if BiDi-only mode is enabled. This
      // would restrict Browser to use only BiDi endpoint.
      cdpConnection: bidiOnly ? void 0 : cdpConnection,
      closeCallback,
      process: browserProcess.nodeProcess,
      defaultViewport: opts.defaultViewport,
      acceptInsecureCerts: opts.acceptInsecureCerts,
      networkEnabled: opts.networkEnabled,
      issuesEnabled: opts.issuesEnabled,
      logger: opts.logger
    });
  }
  /**
   * @internal
   */
  async createBiDiBrowser(browserProcess, closeCallback, opts) {
    const browserWSEndpoint = await browserProcess.waitForLineOutput(WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX, opts.timeout) + "/session";
    const transport = await NodeWebSocketTransport.create(browserWSEndpoint, void 0, opts.logger);
    const BiDi = await import(
      /* webpackIgnore: true */
      "./bidi-AEVDRDUR.mjs"
    );
    const bidiConnection = new BiDi.BidiConnection(browserWSEndpoint, transport, opts.idGenerator, opts.slowMo, opts.protocolTimeout, opts.logger);
    return await BiDi.BidiBrowser.create({
      connection: bidiConnection,
      closeCallback,
      process: browserProcess.nodeProcess,
      defaultViewport: opts.defaultViewport,
      acceptInsecureCerts: opts.acceptInsecureCerts,
      networkEnabled: opts.networkEnabled ?? true,
      issuesEnabled: opts.issuesEnabled ?? true,
      logger: opts.logger
    });
  }
  /**
   * @internal
   */
  async getProfilePath() {
    const config = await this.puppeteer.configuration();
    return join(config.temporaryDirectory ?? tmpdir(), `puppeteer_dev_${this.browser}_profile-`);
  }
  /**
   * @internal
   */
  async resolveExecutablePath(headless, validatePath = true) {
    const config = await this.puppeteer.configuration();
    let executablePath3 = config.executablePath;
    if (executablePath3) {
      if (validatePath && !existsSync(executablePath3)) {
        throw new Error(`Tried to find the browser at the configured path (${executablePath3}), but no executable was found.`);
      }
      return executablePath3;
    }
    function puppeteerBrowserToInstalledBrowser(browser, headless2) {
      switch (browser) {
        case "chrome":
          if (headless2 === "shell") {
            return Browser.CHROMEHEADLESSSHELL;
          }
          return Browser.CHROME;
        case "firefox":
          return Browser.FIREFOX;
      }
      return Browser.CHROME;
    }
    __name(puppeteerBrowserToInstalledBrowser, "puppeteerBrowserToInstalledBrowser");
    const browserType = puppeteerBrowserToInstalledBrowser(this.browser, headless);
    const defaultDownloadPath = await this.puppeteer.defaultDownloadPath();
    const browserVersion = await this.puppeteer.browserVersion();
    executablePath3 = computeExecutablePath({
      cacheDir: defaultDownloadPath,
      browser: browserType,
      buildId: browserVersion
    });
    if (validatePath && !existsSync(executablePath3)) {
      const configVersion = config?.[this.browser]?.version;
      if (configVersion) {
        throw new Error(`Tried to find the browser at the configured path (${executablePath3}) for version ${configVersion}, but no executable was found.`);
      }
      throw new Error(`Could not find ${getBrowserTypeDisplayName(browserType)} (ver. ${browserVersion}). This can occur if either
 1. you did not perform an installation before running the script (e.g. \`npx puppeteer browsers install ${browserType}\`) or
 2. your cache path is incorrectly configured (which is: ${config.cacheDirectory}).
For (2), check out our guide on configuring puppeteer at https://pptr.dev/guides/configuration.`);
    }
    return executablePath3;
  }
};

// node_modules/puppeteer-core/lib/puppeteer/node/util/fs.js
init_esm();
import fs2 from "node:fs";
var rmOptions = {
  force: true,
  recursive: true,
  maxRetries: 5
};
async function rm(path4) {
  await fs2.promises.rm(path4, rmOptions);
}
__name(rm, "rm");

// node_modules/puppeteer-core/lib/puppeteer/node/ChromeLauncher.js
var ChromeLauncher = class extends BrowserLauncher {
  static {
    __name(this, "ChromeLauncher");
  }
  constructor(puppeteer3, logger) {
    super(puppeteer3, "chrome", logger);
  }
  async launch(options = {}) {
    const config = await this.puppeteer.configuration();
    if (config.logLevel === "warn" && process.platform === "darwin" && process.arch === "x64") {
      const cpus = os.cpus();
      if (cpus[0]?.model.includes("Apple")) {
        console.warn([
          "\x1B[1m\x1B[43m\x1B[30m",
          "Degraded performance warning:\x1B[0m\x1B[33m",
          "Launching Chrome on Mac Silicon (arm64) from an x64 Node installation results in",
          "Rosetta translating the Chrome binary, even if Chrome is already arm64. This would",
          "result in huge performance issues. To resolve this, you must run Puppeteer with",
          "a version of Node built for arm64."
        ].join("\n  "));
      }
    }
    return await super.launch(options);
  }
  /**
   * @internal
   */
  async computeLaunchArguments(options = {}) {
    const { ignoreDefaultArgs = false, args = [], pipe = false, debuggingPort, channel, executablePath: executablePath3 } = options;
    const chromeArguments = [];
    if (!ignoreDefaultArgs) {
      chromeArguments.push(...this.defaultArgs(options));
    } else if (Array.isArray(ignoreDefaultArgs)) {
      chromeArguments.push(...this.defaultArgs(options).filter((arg) => {
        return !ignoreDefaultArgs.includes(arg);
      }));
    } else {
      chromeArguments.push(...args);
    }
    if (!chromeArguments.some((argument) => {
      return argument.startsWith("--remote-debugging-");
    })) {
      if (pipe) {
        assert(!debuggingPort, "Browser should be launched with either pipe or debugging port - not both.");
        chromeArguments.push("--remote-debugging-pipe");
      } else {
        chromeArguments.push(`--remote-debugging-port=${debuggingPort || 0}`);
      }
    }
    let isTempUserDataDir = false;
    const userDataDirIndex = chromeArguments.findIndex((arg) => {
      return arg.startsWith("--user-data-dir");
    });
    let userDataDir;
    if (userDataDirIndex < 0) {
      isTempUserDataDir = true;
      const profilePath = await this.getProfilePath();
      userDataDir = await mkdtemp(profilePath);
      chromeArguments.push(`--user-data-dir=${userDataDir}`);
    } else {
      const parsedUserDataDir = chromeArguments[userDataDirIndex].split("=", 2)[1];
      assert(typeof parsedUserDataDir === "string", "`--user-data-dir` is malformed");
      userDataDir = parsedUserDataDir;
    }
    let chromeExecutable = executablePath3;
    if (!chromeExecutable) {
      assert(channel || !this.puppeteer._isPuppeteerCore, `An \`executablePath\` or \`channel\` must be specified for \`puppeteer-core\``);
      chromeExecutable = channel ? await this.executablePath(channel) : await this.resolveExecutablePath(options.headless ?? true);
    }
    return {
      executablePath: chromeExecutable,
      args: chromeArguments,
      isTempUserDataDir,
      userDataDir
    };
  }
  /**
   * @internal
   */
  async cleanUserDataDir(path4, opts) {
    if (opts.isTemp) {
      try {
        await rm(path4);
      } catch (error) {
        this.logger(DEBUG_PREFIXES.error)?.(error);
        throw error;
      }
    }
  }
  defaultArgs(options = {}) {
    const userDisabledFeatures = getFeatures("--disable-features", options.args);
    if (options.args && userDisabledFeatures.length > 0) {
      removeMatchingFlags(options.args, "--disable-features");
    }
    const turnOnExperimentalFeaturesForTesting = process.env["PUPPETEER_TEST_EXPERIMENTAL_CHROME_FEATURES"] === "true";
    const userEnabledFeatures = getFeatures("--enable-features", options.args);
    if (options.args && userEnabledFeatures.length > 0) {
      removeMatchingFlags(options.args, "--enable-features");
    }
    const enabledFeatures = [
      "PdfOopif",
      // Add features to enable by default here.
      ...userEnabledFeatures
    ].filter((feature) => {
      return feature !== "";
    });
    const disabledFeatures = [
      "Translate",
      // AcceptCHFrame disabled because of crbug.com/1348106.
      "AcceptCHFrame",
      "MediaRouter",
      "OptimizationHints",
      "WebUIReloadButton",
      "WebUIOmniboxPopup",
      "WebUIOmniboxAimPopup",
      ...turnOnExperimentalFeaturesForTesting ? [] : [
        // https://crbug.com/1492053
        "ProcessPerSiteUpToMainFrameThreshold",
        // https://github.com/puppeteer/puppeteer/issues/10715
        "IsolateSandboxedIframes"
      ],
      ...userDisabledFeatures
    ].filter((feature) => {
      return feature !== "";
    }).filter((disabledFeature) => {
      return !enabledFeatures.includes(disabledFeature);
    });
    const chromeArguments = [
      "--allow-pre-commit-input",
      "--disable-background-networking",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-breakpad",
      "--disable-client-side-phishing-detection",
      "--disable-component-extensions-with-background-pages",
      "--disable-crash-reporter",
      // No crash reporting in CfT.
      "--disable-default-apps",
      "--disable-dev-shm-usage",
      "--disable-hang-monitor",
      "--disable-infobars",
      "--disable-ipc-flooding-protection",
      "--disable-popup-blocking",
      "--disable-prompt-on-repost",
      "--disable-renderer-backgrounding",
      "--disable-search-engine-choice-screen",
      "--disable-sync",
      "--enable-automation",
      "--export-tagged-pdf",
      "--force-color-profile=srgb",
      "--generate-pdf-document-outline",
      "--metrics-recording-only",
      "--no-first-run",
      "--password-store=basic",
      "--use-mock-keychain",
      `--disable-features=${disabledFeatures.join(",")}`,
      `--enable-features=${enabledFeatures.join(",")}`
    ].filter((arg) => {
      return arg !== "";
    });
    const { devtools = false, headless = !devtools, args = [], userDataDir, enableExtensions = false } = options;
    if (process.env["PUPPETEER_DANGEROUS_NO_SANDBOX"] === "true" && !args.includes("--no-sandbox")) {
      chromeArguments.push("--no-sandbox");
    }
    if (userDataDir) {
      chromeArguments.push(`--user-data-dir=${path2.posix.isAbsolute(userDataDir) || path2.win32.isAbsolute(userDataDir) ? userDataDir : path2.resolve(userDataDir)}`);
    }
    if (devtools) {
      chromeArguments.push("--auto-open-devtools-for-tabs");
    }
    if (headless) {
      chromeArguments.push(headless === "shell" ? "--headless" : "--headless=new", "--hide-scrollbars", "--mute-audio");
    }
    if (!enableExtensions) {
      chromeArguments.push("--disable-extensions");
    }
    if (args.every((arg) => {
      return arg.startsWith("-");
    })) {
      chromeArguments.push("about:blank");
    }
    chromeArguments.push(...args);
    return chromeArguments;
  }
  async executablePath(channel, validatePath = true) {
    if (channel) {
      return computeSystemExecutablePath({
        browser: Browser.CHROME,
        channel: convertPuppeteerChannelToBrowsersChannel(channel)
      });
    } else {
      return await this.resolveExecutablePath(void 0, validatePath);
    }
  }
};
function getFeatures(flag, options = []) {
  const prefix = flag.endsWith("=") ? flag : `${flag}=`;
  return options.filter((s) => {
    return s.startsWith(prefix);
  }).flatMap((s) => {
    return s.substring(s.indexOf("=") + 1).trim().split(",").map((feature) => {
      return feature.trim();
    });
  }).filter((s) => {
    return s;
  });
}
__name(getFeatures, "getFeatures");
function removeMatchingFlags(array, flag) {
  const prefix = flag.endsWith("=") ? flag : `${flag}=`;
  let i = 0;
  while (i < array.length) {
    if (array[i].startsWith(prefix)) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
}
__name(removeMatchingFlags, "removeMatchingFlags");

// node_modules/puppeteer-core/lib/puppeteer/node/FirefoxLauncher.js
init_esm();
import fs3 from "node:fs";
import { rename, unlink, mkdtemp as mkdtemp2 } from "node:fs/promises";
import os2 from "node:os";
import path3 from "node:path";
var FirefoxLauncher = class _FirefoxLauncher extends BrowserLauncher {
  static {
    __name(this, "FirefoxLauncher");
  }
  constructor(puppeteer3, logger) {
    super(puppeteer3, "firefox", logger);
  }
  static getPreferences(extraPrefsFirefox) {
    return {
      ...extraPrefsFirefox,
      // Force all web content to use a single content process. TODO: remove
      // this once Firefox supports mouse event dispatch from the main frame
      // context. See https://bugzilla.mozilla.org/show_bug.cgi?id=1773393.
      "fission.webContentIsolationStrategy": 0
    };
  }
  /**
   * @internal
   */
  async computeLaunchArguments(options = {}) {
    const { ignoreDefaultArgs = false, args = [], executablePath: executablePath3, pipe = false, extraPrefsFirefox = {}, debuggingPort = null } = options;
    const firefoxArguments = [];
    if (!ignoreDefaultArgs) {
      firefoxArguments.push(...this.defaultArgs(options));
    } else if (Array.isArray(ignoreDefaultArgs)) {
      firefoxArguments.push(...this.defaultArgs(options).filter((arg) => {
        return !ignoreDefaultArgs.includes(arg);
      }));
    } else {
      firefoxArguments.push(...args);
    }
    if (!firefoxArguments.some((argument) => {
      return argument.startsWith("--remote-debugging-");
    })) {
      if (pipe) {
        assert(debuggingPort === null, "Browser should be launched with either pipe or debugging port - not both.");
      }
      firefoxArguments.push(`--remote-debugging-port=${debuggingPort || 0}`);
    }
    let userDataDir;
    let isTempUserDataDir = true;
    const profileArgIndex = firefoxArguments.findIndex((arg) => {
      return ["-profile", "--profile"].includes(arg);
    });
    if (profileArgIndex !== -1) {
      userDataDir = firefoxArguments[profileArgIndex + 1];
      if (!userDataDir) {
        throw new Error(`Missing value for profile command line argument`);
      }
      isTempUserDataDir = false;
    } else {
      const profilePath = await this.getProfilePath();
      userDataDir = await mkdtemp2(profilePath);
      firefoxArguments.push("--profile");
      firefoxArguments.push(userDataDir);
    }
    await createProfile(Browser.FIREFOX, {
      path: userDataDir,
      preferences: _FirefoxLauncher.getPreferences(extraPrefsFirefox)
    });
    let firefoxExecutable;
    if (this.puppeteer._isPuppeteerCore || executablePath3) {
      assert(executablePath3, `An \`executablePath\` must be specified for \`puppeteer-core\``);
      firefoxExecutable = executablePath3;
    } else {
      firefoxExecutable = await this.executablePath(void 0);
    }
    return {
      isTempUserDataDir,
      userDataDir,
      args: firefoxArguments,
      executablePath: firefoxExecutable
    };
  }
  /**
   * @internal
   */
  async cleanUserDataDir(userDataDir, opts) {
    if (opts.isTemp) {
      try {
        await rm(userDataDir);
      } catch (error) {
        this.logger(DEBUG_PREFIXES.error)?.(error);
        throw error;
      }
    } else {
      try {
        const backupSuffix = ".puppeteer";
        const backupFiles = ["prefs.js", "user.js"];
        const results = await Promise.allSettled(backupFiles.map(async (file) => {
          const prefsBackupPath = path3.join(userDataDir, file + backupSuffix);
          if (fs3.existsSync(prefsBackupPath)) {
            const prefsPath = path3.join(userDataDir, file);
            await unlink(prefsPath);
            await rename(prefsBackupPath, prefsPath);
          }
        }));
        for (const result of results) {
          if (result.status === "rejected") {
            throw result.reason;
          }
        }
      } catch (error) {
        this.logger(DEBUG_PREFIXES.error)?.(error);
      }
    }
  }
  async executablePath(_, validatePath = true) {
    return await this.resolveExecutablePath(
      void 0,
      /* validatePath=*/
      validatePath
    );
  }
  defaultArgs(options = {}) {
    const { devtools = false, headless = !devtools, args = [], userDataDir = null } = options;
    const firefoxArguments = [];
    switch (os2.platform()) {
      case "darwin":
        firefoxArguments.push("--foreground");
        break;
      case "win32":
        firefoxArguments.push("--wait-for-browser");
        break;
    }
    if (userDataDir) {
      firefoxArguments.push("--profile");
      firefoxArguments.push(userDataDir);
    }
    if (headless) {
      firefoxArguments.push("--headless");
    }
    if (devtools) {
      firefoxArguments.push("--devtools");
    }
    if (args.every((arg) => {
      return arg.startsWith("-");
    })) {
      firefoxArguments.push("about:blank");
    }
    firefoxArguments.push(...args);
    return firefoxArguments;
  }
};

// node_modules/puppeteer-core/lib/puppeteer/node/PuppeteerNode.js
init_esm();
var PuppeteerNode = class extends Puppeteer {
  static {
    __name(this, "PuppeteerNode");
  }
  #launcher;
  #lastLaunchedBrowser;
  configuration;
  /**
   * @internal
   */
  constructor(settings) {
    const { configuration, ...commonSettings } = settings;
    super(commonSettings);
    if (configuration) {
      this.configuration = configuration;
    } else {
      this.configuration = () => {
        return Promise.resolve({});
      };
    }
    this.connect = this.connect.bind(this);
    this.launch = this.launch.bind(this);
    this.executablePath = this.executablePath.bind(this);
    this.defaultArgs = this.defaultArgs.bind(this);
    this.trimCache = this.trimCache.bind(this);
  }
  /**
   * This method attaches Puppeteer to an existing browser instance.
   *
   * @param options - Set of configurable options to set on the browser.
   * @returns Promise which resolves to browser instance.
   */
  connect(options) {
    options.logger ??= debug;
    return super.connect(options);
  }
  /**
   * Launches a browser instance with given arguments and options when
   * specified.
   *
   * When using with `puppeteer-core`,
   * {@link LaunchOptions.executablePath | options.executablePath} or
   * {@link LaunchOptions.channel | options.channel} must be provided.
   *
   * @example
   * You can use {@link LaunchOptions.ignoreDefaultArgs | options.ignoreDefaultArgs}
   * to filter out `--mute-audio` from default arguments:
   *
   * ```ts
   * const browser = await puppeteer.launch({
   *   ignoreDefaultArgs: ['--mute-audio'],
   * });
   * ```
   *
   * @remarks
   * Puppeteer can also be used to control the Chrome browser, but it works best
   * with the version of Chrome for Testing downloaded by default.
   * There is no guarantee it will work with any other version. If Google Chrome
   * (rather than Chrome for Testing) is preferred, a
   * {@link https://www.google.com/chrome/browser/canary.html | Chrome Canary}
   * or
   * {@link https://www.chromium.org/getting-involved/dev-channel | Dev Channel}
   * build is suggested. See
   * {@link https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/ | this article}
   * for a description of the differences between Chromium and Chrome.
   * {@link https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md | This article}
   * describes some differences for Linux users. See
   * {@link https://developer.chrome.com/blog/chrome-for-testing/ | this doc} for the description
   * of Chrome for Testing.
   *
   * @param options - Options to configure launching behavior.
   */
  async launch(options = {}) {
    options.logger ??= debug;
    const { browser = await this.defaultBrowser() } = options;
    this.#lastLaunchedBrowser = browser;
    if (!["chrome", "firefox"].includes(browser)) {
      throw new Error(`Unknown product: ${browser}`);
    }
    this.#launcher = this.#getLauncher(browser, options.logger);
    return await this.#launcher.launch(options);
  }
  #getLauncher(browser, logger) {
    if (this.#launcher && this.#launcher.browser === browser) {
      return this.#launcher;
    }
    switch (browser) {
      case "chrome":
        return new ChromeLauncher(this, logger);
      case "firefox":
        return new FirefoxLauncher(this, logger);
      default:
        throw new Error(`Unknown product: ${browser}`);
    }
  }
  async executablePath(optsOrChannel) {
    if (optsOrChannel === void 0) {
      return await this.#getLauncher(await this.lastLaunchedBrowser(), debug).executablePath(
        void 0,
        /* validatePath= */
        false
      );
    }
    if (typeof optsOrChannel === "string") {
      return await this.#getLauncher("chrome", debug).executablePath(
        optsOrChannel,
        /* validatePath= */
        false
      );
    }
    return await this.#getLauncher(optsOrChannel.browser ?? await this.lastLaunchedBrowser(), optsOrChannel.logger ?? debug).resolveExecutablePath(
      optsOrChannel.headless,
      /* validatePath= */
      false
    );
  }
  /**
   * @internal
   */
  async browserVersion() {
    const config = await this.configuration();
    const lastLaunched = await this.lastLaunchedBrowser();
    return config?.[lastLaunched]?.version ?? PUPPETEER_REVISIONS[lastLaunched];
  }
  /**
   * The default download path for puppeteer. For puppeteer-core, this
   * code should never be called as it is never defined.
   *
   * @internal
   */
  async defaultDownloadPath() {
    const config = await this.configuration();
    return config.cacheDirectory;
  }
  /**
   * The name of the browser that was last launched.
   */
  async lastLaunchedBrowser() {
    return this.#lastLaunchedBrowser ?? await this.defaultBrowser();
  }
  /**
   * The name of the browser that will be launched by default. For
   * `puppeteer`, this is influenced by your configuration. Otherwise, it's
   * `chrome`.
   */
  async defaultBrowser() {
    const config = await this.configuration();
    return config.defaultBrowser ?? "chrome";
  }
  /**
   * @param options - Set of configurable options to set on the browser.
   *
   * @returns The default arguments that the browser will be launched with.
   */
  async defaultArgs(options = {}) {
    return this.#getLauncher(options.browser ?? await this.lastLaunchedBrowser(), options.logger ?? debug).defaultArgs(options);
  }
  /**
   * Removes all non-current Firefox and Chrome binaries in the cache directory
   * identified by the provided Puppeteer configuration. The current browser
   * version is determined by resolving PUPPETEER_REVISIONS from Puppeteer
   * unless `configuration.browserRevision` is provided.
   *
   * @remarks
   *
   * Note that the method does not check if any other Puppeteer versions
   * installed on the host that use the same cache directory require the
   * non-current binaries.
   *
   * @public
   */
  async trimCache() {
    const platform = detectBrowserPlatform();
    if (!platform) {
      throw new Error("The current platform is not supported.");
    }
    const config = await this.configuration();
    const cacheDir = config.cacheDirectory;
    const installedBrowsers = await getInstalledBrowsers({
      cacheDir
    });
    const puppeteerBrowsers = [
      {
        product: "chrome",
        browser: Browser.CHROME,
        currentBuildId: ""
      },
      {
        product: "firefox",
        browser: Browser.FIREFOX,
        currentBuildId: ""
      }
    ];
    await Promise.all(puppeteerBrowsers.map(async (item) => {
      const tag = config?.[item.product]?.version ?? PUPPETEER_REVISIONS[item.product];
      item.currentBuildId = await resolveBuildId(item.browser, platform, tag);
    }));
    const currentBrowserBuilds = new Set(puppeteerBrowsers.map((browser) => {
      return `${browser.browser}_${browser.currentBuildId}`;
    }));
    const currentBrowsers = new Set(puppeteerBrowsers.map((browser) => {
      return browser.browser;
    }));
    for (const installedBrowser of installedBrowsers) {
      if (!currentBrowsers.has(installedBrowser.browser)) {
        continue;
      }
      if (currentBrowserBuilds.has(`${installedBrowser.browser}_${installedBrowser.buildId}`)) {
        continue;
      }
      await uninstall({
        browser: installedBrowser.browser,
        platform,
        cacheDir,
        buildId: installedBrowser.buildId
      });
    }
  }
};

// node_modules/puppeteer-core/lib/puppeteer/node/ScreenRecorder.js
init_esm();
import { spawn, spawnSync } from "node:child_process";
import fs4 from "node:fs";
import os3 from "node:os";
import { dirname } from "node:path";
import { PassThrough } from "node:stream";
var __runInitializers = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __setFunctionName = function(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var CRF_VALUE = 30;
var DEFAULT_FPS = 30;
function countFrames(startTimestamp, previousTimestamp, timestamp, fps) {
  const end = Math.round((timestamp - startTimestamp) * fps);
  const start = Math.round((previousTimestamp - startTimestamp) * fps);
  return Math.max(0, end - start);
}
__name(countFrames, "countFrames");
var ScreenRecorder = (() => {
  let _classSuper = PassThrough;
  let _instanceExtraInitializers = [];
  let _private_writeFrame_decorators;
  let _private_writeFrame_descriptor;
  let _stop_decorators;
  return class ScreenRecorder extends _classSuper {
    static {
      __name(this, "ScreenRecorder");
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate(this, _private_writeFrame_descriptor = { value: __setFunctionName(async function(buffer) {
        const error = await new Promise((resolve) => {
          this.#process.stdin.write(buffer, resolve);
        });
        if (error) {
          console.log(`ffmpeg failed to write: ${error.message}.`);
        }
      }, "#writeFrame") }, _private_writeFrame_decorators, { kind: "method", name: "#writeFrame", static: false, private: true, access: { has: /* @__PURE__ */ __name((obj) => #writeFrame in obj, "has"), get: /* @__PURE__ */ __name((obj) => obj.#writeFrame, "get") }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate(this, null, _stop_decorators, { kind: "method", name: "stop", static: false, private: false, access: { has: /* @__PURE__ */ __name((obj) => "stop" in obj, "has"), get: /* @__PURE__ */ __name((obj) => obj.stop, "get") }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    #page = __runInitializers(this, _instanceExtraInitializers);
    #process;
    #controller = new AbortController();
    #lastFrame;
    #fps;
    #logger;
    /**
     * @internal
     */
    constructor(page, width, height, { ffmpegPath, speed, scale, crop, format, fps, loop, delay, quality, colors, path: path4, overwrite } = {}, logger) {
      super({ allowHalfOpen: false });
      this.#logger = logger;
      ffmpegPath ??= "ffmpeg";
      format ??= "webm";
      fps ??= DEFAULT_FPS;
      loop ||= -1;
      delay ??= -1;
      quality ??= CRF_VALUE;
      colors ??= 256;
      overwrite ??= true;
      this.#fps = fps;
      const { error } = spawnSync(ffmpegPath);
      if (error) {
        throw error;
      }
      const filters = [
        `crop='min(${width},iw):min(${height},ih):0:0'`,
        `pad=${width}:${height}:0:0`
      ];
      if (speed) {
        filters.push(`setpts=${1 / speed}*PTS`);
      }
      if (crop) {
        filters.push(`crop=${crop.width}:${crop.height}:${crop.x}:${crop.y}`);
      }
      if (scale) {
        filters.push(`scale=iw*${scale}:-1:flags=lanczos`);
      }
      const formatArgs = this.#getFormatArgs(format, fps, loop, delay, quality, colors);
      const vf = formatArgs.indexOf("-vf");
      if (vf !== -1) {
        filters.push(formatArgs.splice(vf, 2).at(-1) ?? "");
      }
      if (path4) {
        fs4.mkdirSync(dirname(path4), { recursive: overwrite });
      }
      this.#process = spawn(
        ffmpegPath,
        // See https://trac.ffmpeg.org/wiki/Encode/VP9 for more information on flags.
        [
          ["-loglevel", "error"],
          // Reduces general buffering.
          ["-avioflags", "direct"],
          // Reduces initial buffering while analyzing input fps and other stats.
          [
            "-fpsprobesize",
            "0",
            "-probesize",
            "32",
            "-analyzeduration",
            "0",
            "-fflags",
            "nobuffer"
          ],
          // Forces input to be read from standard input, and forces png input
          // image format. `-framerate` is an input option and must appear before
          // `-i`; otherwise ffmpeg ignores it and the image2pipe demuxer falls
          // back to its default 25fps, stretching the output timeline relative to
          // the frames we feed it at `fps`.
          // prettier-ignore
          ["-framerate", `${fps}`, "-f", "image2pipe", "-vcodec", "png", "-i", "pipe:0"],
          // No audio
          ["-an"],
          // This drastically reduces stalling when cpu is overbooked. By default
          // VP9 tries to use all available threads?
          ["-threads", "1"],
          // Disable bitrate.
          ["-b:v", "0"],
          // Specifies the encoding and format we are using.
          formatArgs,
          // Filters to ensure the images are piped correctly,
          // combined with any format-specific filters.
          ["-vf", filters.join()],
          // Overwrite output, or exit immediately if file already exists.
          [overwrite ? "-y" : "-n"],
          "pipe:1"
        ].flat(),
        { stdio: ["pipe", "pipe", "pipe"] }
      );
      this.#process.stdout.pipe(this);
      this.#process.stderr.on("data", (data) => {
        this.#logger?.(DEBUG_PREFIXES.ffmpeg)?.(data.toString("utf8"));
      });
      this.#page = page;
      const { client } = this.#page.mainFrame();
      client.once(CDPSessionEvent.Disconnected, () => {
        void this.stop().catch((err) => {
          this.#logger?.(DEBUG_PREFIXES.error)?.(err);
        });
      });
      let startTimestamp;
      this.#lastFrame = lastValueFrom(fromEmitterEvent(client, "Page.screencastFrame").pipe(tap((event) => {
        void client.send("Page.screencastFrameAck", {
          sessionId: event.sessionId
        });
      }), filter((event) => {
        return event.metadata.timestamp !== void 0;
      }), map((event) => {
        return {
          buffer: Buffer.from(event.data, "base64"),
          timestamp: event.metadata.timestamp
        };
      }), bufferCount(2, 1), concatMap(([{ timestamp: previousTimestamp, buffer }, { timestamp }]) => {
        startTimestamp ??= previousTimestamp;
        return from(Array(countFrames(startTimestamp, previousTimestamp, timestamp, fps)).fill(buffer));
      }), map((buffer) => {
        void this.#writeFrame(buffer);
        return [buffer, performance.now()];
      }), takeUntil(fromEvent(this.#controller.signal, "abort"))), { defaultValue: [Buffer.from([]), performance.now()] });
    }
    #getFormatArgs(format, fps, loop, delay, quality, colors) {
      const libvpx = [
        ["-vcodec", "vp9"],
        // Sets the quality. Lower the better.
        ["-crf", `${quality}`],
        // Sets the quality and how efficient the compression will be.
        [
          "-deadline",
          "realtime",
          "-cpu-used",
          `${Math.min(os3.cpus().length / 2, 8)}`
        ]
      ];
      switch (format) {
        case "webm":
          return [
            ...libvpx,
            // Sets the format
            ["-f", "webm"]
          ].flat();
        case "gif":
          fps = DEFAULT_FPS === fps ? 20 : "source_fps";
          if (loop === Infinity) {
            loop = 0;
          }
          if (delay !== -1) {
            delay /= 10;
          }
          return [
            // Sets the frame rate and uses a custom palette generated from the
            // input.
            [
              "-vf",
              `fps=${fps},split[s0][s1];[s0]palettegen=stats_mode=diff:max_colors=${colors}[p];[s1][p]paletteuse=dither=bayer`
            ],
            // Sets the number of times to loop playback.
            ["-loop", `${loop}`],
            // Sets the delay between iterations of a loop.
            ["-final_delay", `${delay}`],
            // Sets the format
            ["-f", "gif"]
          ].flat();
        case "mp4":
          return [
            ...libvpx,
            // Fragment file during stream to avoid errors.
            ["-movflags", "hybrid_fragmented"],
            // Sets the format
            ["-f", "mp4"]
          ].flat();
      }
    }
    get #writeFrame() {
      return _private_writeFrame_descriptor.value;
    }
    /**
     * Stops the recorder.
     *
     * @public
     */
    async stop() {
      if (this.#controller.signal.aborted) {
        return;
      }
      await this.#page._stopScreencast().catch((err) => {
        this.#logger?.(DEBUG_PREFIXES.error)?.(err);
      });
      this.#controller.abort();
      const [buffer, timestamp] = await this.#lastFrame;
      await Promise.all(Array(Math.max(1, Math.round(this.#fps * (performance.now() - timestamp) / 1e3))).fill(buffer).map(this.#writeFrame.bind(this)));
      this.#process.stdin.end();
      await new Promise((resolve) => {
        this.#process.once("close", resolve);
      });
    }
    async [(_private_writeFrame_decorators = [guarded()], _stop_decorators = [guarded()], asyncDisposeSymbol)]() {
      await this.stop();
      await super[asyncDisposeSymbol]();
    }
  };
})();

// node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js
environment.value.ScreenRecorder = ScreenRecorder;
var puppeteer = new PuppeteerNode({
  isPuppeteerCore: true
});
var {
  /**
   * @public
   */
  connect,
  /**
   * @public
   */
  defaultArgs,
  /**
   * @public
   */
  executablePath,
  /**
   * @public
   */
  launch: launch2
} = puppeteer;

// node_modules/puppeteer/lib/puppeteer/getConfiguration.js
init_esm();
var import_lilconfig = __toESM(require_src(), 1);
import { homedir } from "node:os";
import { join as join2 } from "node:path";
function getBooleanEnvVar(name) {
  const env = process.env[name];
  if (env === void 0) {
    return;
  }
  switch (env.toLowerCase()) {
    case "":
    case "0":
    case "false":
    case "off":
      return false;
    default:
      return true;
  }
}
__name(getBooleanEnvVar, "getBooleanEnvVar");
function isSupportedBrowser(product) {
  switch (product) {
    case "chrome":
    case "firefox":
      return true;
    default:
      return false;
  }
}
__name(isSupportedBrowser, "isSupportedBrowser");
function getDefaultBrowser(browser) {
  if (!browser) {
    return "chrome";
  }
  if (!isSupportedBrowser(browser)) {
    throw new Error(`Unsupported browser ${browser}`);
  }
  return browser;
}
__name(getDefaultBrowser, "getDefaultBrowser");
function getLogLevel(logLevel) {
  switch (logLevel) {
    case "silent":
      return "silent";
    case "error":
      return "error";
    default:
      return "warn";
  }
}
__name(getLogLevel, "getLogLevel");
function getBrowserSetting(browser, configuration, defaultConfig = {}) {
  const browserSetting = {};
  const browserEnvName = browser.replaceAll("-", "_").toUpperCase();
  browserSetting.version = process.env[`PUPPETEER_${browserEnvName}_VERSION`] ?? configuration[browser]?.version ?? defaultConfig.version;
  browserSetting.downloadBaseUrl = process.env[`PUPPETEER_${browserEnvName}_DOWNLOAD_BASE_URL`] ?? configuration[browser]?.downloadBaseUrl ?? defaultConfig.downloadBaseUrl;
  browserSetting.skipDownload = getBooleanEnvVar(`PUPPETEER_${browserEnvName}_SKIP_DOWNLOAD`) ?? getBooleanEnvVar(`PUPPETEER_SKIP_${browserEnvName}_DOWNLOAD`) ?? configuration[browser]?.skipDownload ?? configuration.skipDownload ?? defaultConfig.skipDownload;
  return browserSetting;
}
__name(getBrowserSetting, "getBrowserSetting");
var getConfiguration = /* @__PURE__ */ __name(async () => {
  const result = await (0, import_lilconfig.lilconfig)("puppeteer", {
    searchPlaces: [
      "package.json",
      ".config/puppeteer.config.cjs",
      ".config/puppeteer.config.js",
      ".config/puppeteerrc.cjs",
      ".config/puppeteerrc.js",
      ".config/puppeteerrc.json",
      ".config/puppeteerrc",
      ".puppeteerrc.cjs",
      ".puppeteerrc.js",
      ".puppeteerrc.json",
      ".puppeteerrc",
      "puppeteer.config.cjs",
      "puppeteer.config.js"
    ]
  }).search();
  const configuration = result ? { ...result.config } : {};
  configuration.logLevel = getLogLevel(process.env["PUPPETEER_LOGLEVEL"] ?? configuration.logLevel);
  configuration.defaultBrowser = getDefaultBrowser(process.env["PUPPETEER_BROWSER"] ?? configuration.defaultBrowser);
  configuration.executablePath = process.env["PUPPETEER_EXECUTABLE_PATH"] ?? configuration.executablePath;
  if (configuration.executablePath) {
    configuration.skipDownload = true;
  }
  configuration.skipDownload = getBooleanEnvVar("PUPPETEER_SKIP_DOWNLOAD") ?? configuration.skipDownload;
  configuration.chrome = getBrowserSetting("chrome", configuration);
  configuration["chrome-headless-shell"] = getBrowserSetting("chrome-headless-shell", configuration);
  configuration.firefox = getBrowserSetting("firefox", configuration, {
    skipDownload: true
  });
  configuration.cacheDirectory = process.env["PUPPETEER_CACHE_DIR"] ?? configuration.cacheDirectory ?? join2(homedir(), ".cache", "puppeteer");
  configuration.temporaryDirectory = process.env["PUPPETEER_TMP_DIR"] ?? configuration.temporaryDirectory;
  configuration.experiments ??= {};
  return configuration;
}, "getConfiguration");

// node_modules/puppeteer/lib/puppeteer/puppeteer.js
var puppeteer2 = new PuppeteerNode({
  isPuppeteerCore: false,
  configuration: getConfiguration
});
var {
  /**
   * @public
   */
  connect: connect2,
  /**
   * @public
   */
  defaultArgs: defaultArgs2,
  /**
   * @public
   */
  executablePath: executablePath2,
  /**
   * @public
   */
  launch: launch3,
  /**
   * @public
   */
  trimCache
} = puppeteer2;
var puppeteer_default = puppeteer2;

// src/trigger/export-resume-pdf.ts
import crypto from "crypto";
var ExportResumePdfTaskSchema = external_exports.object({
  resumeId: external_exports.string(),
  userId: external_exports.string(),
  jobId: external_exports.string()
});
var exportResumePdfTask = schemaTask({
  id: "export-resume-pdf",
  schema: ExportResumePdfTaskSchema,
  machine: {
    preset: "medium-2x"
    // 1 vCPU, 2 GB RAM for headless Chrome
  },
  queue: {
    concurrencyLimit: 5
  },
  maxDuration: 60,
  run: /* @__PURE__ */ __name(async (payload, { ctx }) => {
    const { resumeId, userId, jobId } = payload;
    let browser = null;
    try {
      metadata.set("status", "Fetching Resume Artifact");
      metadata.set("progress", 10);
      await JobService.updateProgress(jobId, 10, "Fetching Resume Artifact", ctx.run.id);
      const resume = await ResumeBuilderService.getResume(userId, resumeId);
      const artifact = await ResumeBuilderService.getResumeArtifact(userId, resumeId);
      metadata.set("status", "Rendering Template HTML");
      metadata.set("progress", 25);
      await JobService.updateProgress(jobId, 25, "Rendering Template HTML");
      const jsonResume = builderToJsonResume(artifact);
      let themeHtml;
      try {
        themeHtml = await renderResumeTheme(resume.template, jsonResume);
      } catch (renderError) {
        console.warn(
          `[ExportResumePdfTask] Theme render failed for "${resume.template}", falling back to academic-cv-lite:`,
          renderError
        );
        themeHtml = await renderResumeTheme("academic-cv-lite", jsonResume);
      }
      metadata.set("status", "Launching Headless Chrome");
      metadata.set("progress", 45);
      await JobService.updateProgress(jobId, 45, "Launching Headless Chrome");
      browser = await puppeteer_default.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
      });
      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(3e4);
      const fullHtml = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
              html, body {
                background-color: #ffffff !important;
                min-height: 100vh !important;
                margin: 0 !important;
              }
              #resume, .resume-container, .container, main, article, #wrapper {
                background-color: #ffffff !important;
                box-shadow: none !important;
                min-height: 100vh !important;
                margin: 0 auto !important;
              }
            </style>
          </head>
          <body class="bg-white">
            ${themeHtml}
          </body>
        </html>
      `;
      metadata.set("status", "Rendering PDF Layout");
      metadata.set("progress", 65);
      await JobService.updateProgress(jobId, 65, "Rendering PDF Layout");
      await page.setContent(fullHtml, { waitUntil: "domcontentloaded", timeout: 3e4 });
      const pdfUint8Array = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: {
          top: "0.4in",
          bottom: "0.4in",
          left: "0.4in",
          right: "0.4in"
        }
      });
      metadata.set("status", "Uploading PDF to Storage");
      metadata.set("progress", 85);
      await JobService.updateProgress(jobId, 85, "Uploading PDF to Storage");
      const pdfBuffer = Buffer.from(pdfUint8Array);
      const sanitizedTitle = (resume.title || "Resume").replace(/[\/\\?%*:|"<>]/g, "").trim().replace(/\s+/g, "-");
      const blobPath = `resumes/exports/${resumeId}_${Date.now()}.pdf`;
      const rawBlobUrl = await BlobStorageService.uploadBuffer(
        blobPath,
        pdfBuffer,
        "application/pdf"
      );
      const secret = process.env.BLOB_READ_WRITE_TOKEN || process.env.CLERK_SECRET_KEY || process.env.TRIGGER_SECRET_KEY || "elev8-fallback-secret-key";
      const tokenPayload = {
        resumeId,
        blobUrl: rawBlobUrl,
        exp: Date.now() + 24 * 60 * 60 * 1e3
        // Valid for 24 hours
      };
      const encodedPayload = Buffer.from(JSON.stringify(tokenPayload)).toString("base64url");
      const signature = crypto.createHmac("sha256", secret).update(encodedPayload).digest("base64url");
      const signedToken = `${encodedPayload}.${signature}`;
      const downloadUrl = `/api/builder/resumes/${resumeId}/download?token=${signedToken}`;
      await ModuleActivityService.recordActivity({
        userId,
        module: import_client.ModuleType.RESUME_BUILD,
        eventType: import_client.ModuleActivityEventType.RESUME_PDF_GENERATED,
        completionStatus: import_client.ModuleCompletionStatus.COMPLETED,
        entityId: resumeId,
        metadata: {
          source: "TRIGGER_RESUME_PDF_TASK",
          resumeId,
          title: resume.title,
          template: resume.template,
          downloadUrl,
          rawBlobUrl
        }
      }).catch(
        (activityError) => console.warn("[ExportResumePdfTask] Failed to record activity:", activityError)
      );
      metadata.set("status", "Completed");
      metadata.set("progress", 100);
      metadata.set("downloadUrl", downloadUrl);
      metadata.set("filename", `${sanitizedTitle}.pdf`);
      await JobService.completeJob(jobId, resumeId, "RESUME_PDF");
      return {
        downloadUrl,
        filename: `${sanitizedTitle}.pdf`
      };
    } finally {
      if (browser) {
        await browser.close().catch(
          (err) => console.warn("[ExportResumePdfTask] Error closing browser:", err)
        );
      }
    }
  }, "run")
});

export {
  ExportResumePdfTaskSchema,
  exportResumePdfTask
};
/*! Bundled license information:

puppeteer-core/lib/puppeteer/node-env-setup.js:
  (**
   * @license
   * Copyright 2026 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/puppeteer/node/BrowserLauncher.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/puppeteer/node/util/fs.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/puppeteer/node/ChromeLauncher.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/puppeteer/node/FirefoxLauncher.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/puppeteer/node/PuppeteerNode.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/puppeteer/node/ScreenRecorder.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/puppeteer/node/node.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/puppeteer/index.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/puppeteer/puppeteer-core.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer/lib/puppeteer/getConfiguration.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer/lib/puppeteer/puppeteer.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=chunk-WGAUOYC4.mjs.map
