import {
  __commonJS,
  __name,
  __require,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/@vercel/cli-exec/dist/errors.js
var require_errors = __commonJS({
  "node_modules/@vercel/cli-exec/dist/errors.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var errors_exports = {};
    __export(errors_exports, {
      VercelCliError: /* @__PURE__ */ __name(() => VercelCliError2, "VercelCliError"),
      assertValidCwd: /* @__PURE__ */ __name(() => assertValidCwd, "assertValidCwd"),
      getCliNotFoundMessage: /* @__PURE__ */ __name(() => getCliNotFoundMessage, "getCliNotFoundMessage"),
      toVercelCliError: /* @__PURE__ */ __name(() => toVercelCliError, "toVercelCliError")
    });
    module.exports = __toCommonJS(errors_exports);
    var import_promises = __require("node:fs/promises");
    var VercelCliError2 = class extends Error {
      static {
        __name(this, "VercelCliError");
      }
      constructor(options) {
        super(options.message);
        this.name = "VercelCliError";
        this.code = options.code;
        this.invocation = options.invocation;
        this.stdout = options.stdout;
        this.stderr = options.stderr;
        this.exitCode = options.exitCode;
        if (options.cause !== void 0) {
          this.cause = options.cause;
        }
      }
    };
    function getCliNotFoundMessage(diagnostics) {
      const details = [];
      const { localBinSearch } = diagnostics;
      if (localBinSearch.stopReason === "project-root-marker") {
        details.push(
          `Local bin lookup stopped at ${JSON.stringify(localBinSearch.stoppedAt)} (${JSON.stringify(localBinSearch.markerPath)}).`
        );
      } else if (localBinSearch.stopReason === "filesystem-root") {
        details.push(
          `No project root marker was found from ${JSON.stringify(localBinSearch.searchRoot)}; local bin lookup reached the filesystem root.`
        );
      }
      for (const skippedNodeModules of localBinSearch.skippedNodeModules) {
        details.push(
          `Skipped ${JSON.stringify(skippedNodeModules.directory)}: ${skippedNodeModules.reason}.`
        );
      }
      for (const skippedLocalBin of diagnostics.skippedLocalBins) {
        details.push(
          `Skipped ${JSON.stringify(skippedLocalBin.candidate)}: ${skippedLocalBin.reason}.`
        );
      }
      if (details.length === 0) {
        return "Unable to find a usable Vercel CLI installation.";
      }
      return ["Unable to find a usable Vercel CLI installation.", ...details].join(
        "\n"
      );
    }
    __name(getCliNotFoundMessage, "getCliNotFoundMessage");
    async function assertValidCwd(cwd) {
      try {
        if (!(await (0, import_promises.stat)(cwd)).isDirectory()) {
          throw new Error("not a directory");
        }
      } catch {
        throw new VercelCliError2({
          code: "VERCEL_CLI_INVALID_CWD",
          message: `Working directory ${JSON.stringify(cwd)} does not exist or is not a directory.`
        });
      }
    }
    __name(assertValidCwd, "assertValidCwd");
    function toVercelCliError(invocation, error) {
      if (typeof error === "object" && error !== null) {
        const execaError = error;
        if (execaError.code === "ENOENT") {
          return new VercelCliError2({
            code: "VERCEL_CLI_NOT_FOUND",
            message: `Unable to find Vercel CLI command ${JSON.stringify(invocation.command)}.`,
            invocation,
            cause: error
          });
        }
        if (execaError.code === "EACCES" || execaError.code === "EPERM") {
          return new VercelCliError2({
            code: "VERCEL_CLI_PERMISSION_DENIED",
            message: `Permission denied while executing Vercel CLI command ${JSON.stringify(invocation.command)}.`,
            invocation,
            cause: error
          });
        }
        if (execaError.timedOut) {
          return new VercelCliError2({
            code: "VERCEL_CLI_TIMED_OUT",
            message: `Timed out while executing Vercel CLI command ${JSON.stringify(invocation.command)}.`,
            invocation,
            stdout: execaError.stdout,
            stderr: execaError.stderr,
            cause: error
          });
        }
        if (execaError.isCanceled) {
          return new VercelCliError2({
            code: "VERCEL_CLI_CANCELED",
            message: `Canceled while executing Vercel CLI command ${JSON.stringify(invocation.command)}.`,
            invocation,
            stdout: execaError.stdout,
            stderr: execaError.stderr,
            cause: error
          });
        }
        if (execaError.signal) {
          return new VercelCliError2({
            code: "VERCEL_CLI_SIGNALED",
            message: `Vercel CLI command ${JSON.stringify(invocation.command)} exited due to signal ${execaError.signal}.`,
            invocation,
            stdout: execaError.stdout,
            stderr: execaError.stderr,
            cause: error
          });
        }
        if (typeof execaError.exitCode === "number") {
          return new VercelCliError2({
            code: "VERCEL_CLI_ERRORED",
            message: execaError.shortMessage ?? execaError.message ?? `Vercel CLI command ${JSON.stringify(invocation.command)} exited with code ${execaError.exitCode}.`,
            invocation,
            stdout: execaError.stdout,
            stderr: execaError.stderr,
            exitCode: execaError.exitCode,
            cause: error
          });
        }
      }
      return new VercelCliError2({
        code: "VERCEL_CLI_EXEC_FAILED",
        message: `Could not execute Vercel CLI command ${JSON.stringify(invocation.command)}.`,
        invocation,
        cause: error
      });
    }
    __name(toVercelCliError, "toVercelCliError");
  }
});

// node_modules/isexe/windows.js
var require_windows = __commonJS({
  "node_modules/isexe/windows.js"(exports, module) {
    init_esm();
    module.exports = isexe;
    isexe.sync = sync;
    var fs = __require("fs");
    function checkPathExt(path, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i = 0; i < pathext.length; i++) {
        var p = pathext[i].toLowerCase();
        if (p && path.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    __name(checkPathExt, "checkPathExt");
    function checkStat(stat, path, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path, options);
    }
    __name(checkStat, "checkStat");
    function isexe(path, options, cb) {
      fs.stat(path, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path, options));
      });
    }
    __name(isexe, "isexe");
    function sync(path, options) {
      return checkStat(fs.statSync(path), path, options);
    }
    __name(sync, "sync");
  }
});

// node_modules/isexe/mode.js
var require_mode = __commonJS({
  "node_modules/isexe/mode.js"(exports, module) {
    init_esm();
    module.exports = isexe;
    isexe.sync = sync;
    var fs = __require("fs");
    function isexe(path, options, cb) {
      fs.stat(path, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    __name(isexe, "isexe");
    function sync(path, options) {
      return checkStat(fs.statSync(path), options);
    }
    __name(sync, "sync");
    function checkStat(stat, options) {
      return stat.isFile() && checkMode(stat, options);
    }
    __name(checkStat, "checkStat");
    function checkMode(stat, options) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options.uid !== void 0 ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== void 0 ? options.gid : process.getgid && process.getgid();
      var u = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o = parseInt("001", 8);
      var ug = u | g;
      var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
    __name(checkMode, "checkMode");
  }
});

// node_modules/isexe/index.js
var require_isexe = __commonJS({
  "node_modules/isexe/index.js"(exports, module) {
    init_esm();
    var fs = __require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module.exports = isexe;
    isexe.sync = sync;
    function isexe(path, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve, reject) {
          isexe(path, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    __name(isexe, "isexe");
    function sync(path, options) {
      try {
        return core.sync(path, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
    __name(sync, "sync");
  }
});

// node_modules/which/which.js
var require_which = __commonJS({
  "node_modules/which/which.js"(exports, module) {
    init_esm();
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path = __require("path");
    var COLON = isWindows ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = /* @__PURE__ */ __name((cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" }), "getNotFoundError");
    var getPathInfo = /* @__PURE__ */ __name((cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
        // windows always checks the cwd first
        ...isWindows ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */
        "").split(colon)
      ];
      const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows ? pathExtExe.split(colon) : [""];
      if (isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    }, "getPathInfo");
    var which = /* @__PURE__ */ __name((cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = /* @__PURE__ */ __name((i) => new Promise((resolve, reject) => {
        if (i === pathEnv.length)
          return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve(subStep(p, i, 0));
      }), "step");
      const subStep = /* @__PURE__ */ __name((p, i, ii) => new Promise((resolve, reject) => {
        if (ii === pathExt.length)
          return resolve(step(i + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve(p + ext);
          }
          return resolve(subStep(p, i, ii + 1));
        });
      }), "subStep");
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    }, "which");
    var whichSync = /* @__PURE__ */ __name((cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i = 0; i < pathEnv.length; i++) {
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    }, "whichSync");
    module.exports = which;
    which.sync = whichSync;
  }
});

// node_modules/path-key/index.js
var require_path_key = __commonJS({
  "node_modules/path-key/index.js"(exports, module) {
    "use strict";
    init_esm();
    var pathKey = /* @__PURE__ */ __name((options = {}) => {
      const environment = options.env || process.env;
      const platform = options.platform || process.platform;
      if (platform !== "win32") {
        return "PATH";
      }
      return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    }, "pathKey");
    module.exports = pathKey;
    module.exports.default = pathKey;
  }
});

// node_modules/cross-spawn/lib/util/resolveCommand.js
var require_resolveCommand = __commonJS({
  "node_modules/cross-spawn/lib/util/resolveCommand.js"(exports, module) {
    "use strict";
    init_esm();
    var path = __require("path");
    var which = require_which();
    var getPathKey = require_path_key();
    function resolveCommandAttempt(parsed, withoutPathExt) {
      const env = parsed.options.env || process.env;
      const cwd = process.cwd();
      const hasCustomCwd = parsed.options.cwd != null;
      const shouldSwitchCwd = hasCustomCwd && process.chdir !== void 0 && !process.chdir.disabled;
      if (shouldSwitchCwd) {
        try {
          process.chdir(parsed.options.cwd);
        } catch (err) {
        }
      }
      let resolved;
      try {
        resolved = which.sync(parsed.command, {
          path: env[getPathKey({ env })],
          pathExt: withoutPathExt ? path.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    __name(resolveCommandAttempt, "resolveCommandAttempt");
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    __name(resolveCommand, "resolveCommand");
    module.exports = resolveCommand;
  }
});

// node_modules/cross-spawn/lib/util/escape.js
var require_escape = __commonJS({
  "node_modules/cross-spawn/lib/util/escape.js"(exports, module) {
    "use strict";
    init_esm();
    var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
    function escapeCommand(arg) {
      arg = arg.replace(metaCharsRegExp, "^$1");
      return arg;
    }
    __name(escapeCommand, "escapeCommand");
    function escapeArgument(arg, doubleEscapeMetaChars) {
      arg = `${arg}`;
      arg = arg.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"');
      arg = arg.replace(/(?=(\\+?)?)\1$/, "$1$1");
      arg = `"${arg}"`;
      arg = arg.replace(metaCharsRegExp, "^$1");
      if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, "^$1");
      }
      return arg;
    }
    __name(escapeArgument, "escapeArgument");
    module.exports.command = escapeCommand;
    module.exports.argument = escapeArgument;
  }
});

// node_modules/shebang-regex/index.js
var require_shebang_regex = __commonJS({
  "node_modules/shebang-regex/index.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = /^#!(.*)/;
  }
});

// node_modules/shebang-command/index.js
var require_shebang_command = __commonJS({
  "node_modules/shebang-command/index.js"(exports, module) {
    "use strict";
    init_esm();
    var shebangRegex = require_shebang_regex();
    module.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});

// node_modules/cross-spawn/lib/util/readShebang.js
var require_readShebang = __commonJS({
  "node_modules/cross-spawn/lib/util/readShebang.js"(exports, module) {
    "use strict";
    init_esm();
    var fs = __require("fs");
    var shebangCommand = require_shebang_command();
    function readShebang(command) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs.openSync(command, "r");
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    __name(readShebang, "readShebang");
    module.exports = readShebang;
  }
});

// node_modules/cross-spawn/lib/parse.js
var require_parse = __commonJS({
  "node_modules/cross-spawn/lib/parse.js"(exports, module) {
    "use strict";
    init_esm();
    var path = __require("path");
    var resolveCommand = require_resolveCommand();
    var escape = require_escape();
    var readShebang = require_readShebang();
    var isWin = process.platform === "win32";
    var isExecutableRegExp = /\.(?:com|exe)$/i;
    var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function detectShebang(parsed) {
      parsed.file = resolveCommand(parsed);
      const shebang = parsed.file && readShebang(parsed.file);
      if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return resolveCommand(parsed);
      }
      return parsed.file;
    }
    __name(detectShebang, "detectShebang");
    function parseNonShell(parsed) {
      if (!isWin) {
        return parsed;
      }
      const commandFile = detectShebang(parsed);
      const needsShell = !isExecutableRegExp.test(commandFile);
      if (parsed.options.forceShell || needsShell) {
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
        parsed.command = path.normalize(parsed.command);
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [parsed.command].concat(parsed.args).join(" ");
        parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true;
      }
      return parsed;
    }
    __name(parseNonShell, "parseNonShell");
    function parse(command, args, options) {
      if (args && !Array.isArray(args)) {
        options = args;
        args = null;
      }
      args = args ? args.slice(0) : [];
      options = Object.assign({}, options);
      const parsed = {
        command,
        args,
        options,
        file: void 0,
        original: {
          command,
          args
        }
      };
      return options.shell ? parsed : parseNonShell(parsed);
    }
    __name(parse, "parse");
    module.exports = parse;
  }
});

// node_modules/cross-spawn/lib/enoent.js
var require_enoent = __commonJS({
  "node_modules/cross-spawn/lib/enoent.js"(exports, module) {
    "use strict";
    init_esm();
    var isWin = process.platform === "win32";
    function notFoundError(original, syscall) {
      return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
      });
    }
    __name(notFoundError, "notFoundError");
    function hookChildProcess(cp, parsed) {
      if (!isWin) {
        return;
      }
      const originalEmit = cp.emit;
      cp.emit = function(name, arg1) {
        if (name === "exit") {
          const err = verifyENOENT(arg1, parsed);
          if (err) {
            return originalEmit.call(cp, "error", err);
          }
        }
        return originalEmit.apply(cp, arguments);
      };
    }
    __name(hookChildProcess, "hookChildProcess");
    function verifyENOENT(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawn");
      }
      return null;
    }
    __name(verifyENOENT, "verifyENOENT");
    function verifyENOENTSync(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawnSync");
      }
      return null;
    }
    __name(verifyENOENTSync, "verifyENOENTSync");
    module.exports = {
      hookChildProcess,
      verifyENOENT,
      verifyENOENTSync,
      notFoundError
    };
  }
});

// node_modules/cross-spawn/index.js
var require_cross_spawn = __commonJS({
  "node_modules/cross-spawn/index.js"(exports, module) {
    "use strict";
    init_esm();
    var cp = __require("child_process");
    var parse = require_parse();
    var enoent = require_enoent();
    function spawn(command, args, options) {
      const parsed = parse(command, args, options);
      const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    __name(spawn, "spawn");
    function spawnSync(command, args, options) {
      const parsed = parse(command, args, options);
      const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
      result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
      return result;
    }
    __name(spawnSync, "spawnSync");
    module.exports = spawn;
    module.exports.spawn = spawn;
    module.exports.sync = spawnSync;
    module.exports._parse = parse;
    module.exports._enoent = enoent;
  }
});

// node_modules/@vercel/cli-exec/node_modules/strip-final-newline/index.js
var require_strip_final_newline = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/strip-final-newline/index.js"(exports, module) {
    "use strict";
    init_esm();
    module.exports = (input) => {
      const LF = typeof input === "string" ? "\n" : "\n".charCodeAt();
      const CR = typeof input === "string" ? "\r" : "\r".charCodeAt();
      if (input[input.length - 1] === LF) {
        input = input.slice(0, input.length - 1);
      }
      if (input[input.length - 1] === CR) {
        input = input.slice(0, input.length - 1);
      }
      return input;
    };
  }
});

// node_modules/@vercel/cli-exec/node_modules/npm-run-path/index.js
var require_npm_run_path = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/npm-run-path/index.js"(exports, module) {
    "use strict";
    init_esm();
    var path = __require("path");
    var pathKey = require_path_key();
    var npmRunPath = /* @__PURE__ */ __name((options) => {
      options = {
        cwd: process.cwd(),
        path: process.env[pathKey()],
        execPath: process.execPath,
        ...options
      };
      let previous;
      let cwdPath = path.resolve(options.cwd);
      const result = [];
      while (previous !== cwdPath) {
        result.push(path.join(cwdPath, "node_modules/.bin"));
        previous = cwdPath;
        cwdPath = path.resolve(cwdPath, "..");
      }
      const execPathDir = path.resolve(options.cwd, options.execPath, "..");
      result.push(execPathDir);
      return result.concat(options.path).join(path.delimiter);
    }, "npmRunPath");
    module.exports = npmRunPath;
    module.exports.default = npmRunPath;
    module.exports.env = (options) => {
      options = {
        env: process.env,
        ...options
      };
      const env = { ...options.env };
      const path2 = pathKey({ env });
      options.path = env[path2];
      env[path2] = module.exports(options);
      return env;
    };
  }
});

// node_modules/@vercel/cli-exec/node_modules/mimic-fn/index.js
var require_mimic_fn = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/mimic-fn/index.js"(exports, module) {
    "use strict";
    init_esm();
    var mimicFn = /* @__PURE__ */ __name((to, from) => {
      for (const prop of Reflect.ownKeys(from)) {
        Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
      }
      return to;
    }, "mimicFn");
    module.exports = mimicFn;
    module.exports.default = mimicFn;
  }
});

// node_modules/@vercel/cli-exec/node_modules/onetime/index.js
var require_onetime = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/onetime/index.js"(exports, module) {
    "use strict";
    init_esm();
    var mimicFn = require_mimic_fn();
    var calledFunctions = /* @__PURE__ */ new WeakMap();
    var onetime = /* @__PURE__ */ __name((function_, options = {}) => {
      if (typeof function_ !== "function") {
        throw new TypeError("Expected a function");
      }
      let returnValue;
      let callCount = 0;
      const functionName = function_.displayName || function_.name || "<anonymous>";
      const onetime2 = /* @__PURE__ */ __name(function(...arguments_) {
        calledFunctions.set(onetime2, ++callCount);
        if (callCount === 1) {
          returnValue = function_.apply(this, arguments_);
          function_ = null;
        } else if (options.throw === true) {
          throw new Error(`Function \`${functionName}\` can only be called once`);
        }
        return returnValue;
      }, "onetime");
      mimicFn(onetime2, function_);
      calledFunctions.set(onetime2, callCount);
      return onetime2;
    }, "onetime");
    module.exports = onetime;
    module.exports.default = onetime;
    module.exports.callCount = (function_) => {
      if (!calledFunctions.has(function_)) {
        throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
      }
      return calledFunctions.get(function_);
    };
  }
});

// node_modules/@vercel/cli-exec/node_modules/human-signals/build/src/core.js
var require_core = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/human-signals/build/src/core.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SIGNALS = void 0;
    var SIGNALS = [
      {
        name: "SIGHUP",
        number: 1,
        action: "terminate",
        description: "Terminal closed",
        standard: "posix"
      },
      {
        name: "SIGINT",
        number: 2,
        action: "terminate",
        description: "User interruption with CTRL-C",
        standard: "ansi"
      },
      {
        name: "SIGQUIT",
        number: 3,
        action: "core",
        description: "User interruption with CTRL-\\",
        standard: "posix"
      },
      {
        name: "SIGILL",
        number: 4,
        action: "core",
        description: "Invalid machine instruction",
        standard: "ansi"
      },
      {
        name: "SIGTRAP",
        number: 5,
        action: "core",
        description: "Debugger breakpoint",
        standard: "posix"
      },
      {
        name: "SIGABRT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "ansi"
      },
      {
        name: "SIGIOT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "bsd"
      },
      {
        name: "SIGBUS",
        number: 7,
        action: "core",
        description: "Bus error due to misaligned, non-existing address or paging error",
        standard: "bsd"
      },
      {
        name: "SIGEMT",
        number: 7,
        action: "terminate",
        description: "Command should be emulated but is not implemented",
        standard: "other"
      },
      {
        name: "SIGFPE",
        number: 8,
        action: "core",
        description: "Floating point arithmetic error",
        standard: "ansi"
      },
      {
        name: "SIGKILL",
        number: 9,
        action: "terminate",
        description: "Forced termination",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGUSR1",
        number: 10,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGSEGV",
        number: 11,
        action: "core",
        description: "Segmentation fault",
        standard: "ansi"
      },
      {
        name: "SIGUSR2",
        number: 12,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGPIPE",
        number: 13,
        action: "terminate",
        description: "Broken pipe or socket",
        standard: "posix"
      },
      {
        name: "SIGALRM",
        number: 14,
        action: "terminate",
        description: "Timeout or timer",
        standard: "posix"
      },
      {
        name: "SIGTERM",
        number: 15,
        action: "terminate",
        description: "Termination",
        standard: "ansi"
      },
      {
        name: "SIGSTKFLT",
        number: 16,
        action: "terminate",
        description: "Stack is empty or overflowed",
        standard: "other"
      },
      {
        name: "SIGCHLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "posix"
      },
      {
        name: "SIGCLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "other"
      },
      {
        name: "SIGCONT",
        number: 18,
        action: "unpause",
        description: "Unpaused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGSTOP",
        number: 19,
        action: "pause",
        description: "Paused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGTSTP",
        number: 20,
        action: "pause",
        description: 'Paused using CTRL-Z or "suspend"',
        standard: "posix"
      },
      {
        name: "SIGTTIN",
        number: 21,
        action: "pause",
        description: "Background process cannot read terminal input",
        standard: "posix"
      },
      {
        name: "SIGBREAK",
        number: 21,
        action: "terminate",
        description: "User interruption with CTRL-BREAK",
        standard: "other"
      },
      {
        name: "SIGTTOU",
        number: 22,
        action: "pause",
        description: "Background process cannot write to terminal output",
        standard: "posix"
      },
      {
        name: "SIGURG",
        number: 23,
        action: "ignore",
        description: "Socket received out-of-band data",
        standard: "bsd"
      },
      {
        name: "SIGXCPU",
        number: 24,
        action: "core",
        description: "Process timed out",
        standard: "bsd"
      },
      {
        name: "SIGXFSZ",
        number: 25,
        action: "core",
        description: "File too big",
        standard: "bsd"
      },
      {
        name: "SIGVTALRM",
        number: 26,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGPROF",
        number: 27,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGWINCH",
        number: 28,
        action: "ignore",
        description: "Terminal window size changed",
        standard: "bsd"
      },
      {
        name: "SIGIO",
        number: 29,
        action: "terminate",
        description: "I/O is available",
        standard: "other"
      },
      {
        name: "SIGPOLL",
        number: 29,
        action: "terminate",
        description: "Watched event",
        standard: "other"
      },
      {
        name: "SIGINFO",
        number: 29,
        action: "ignore",
        description: "Request for process information",
        standard: "other"
      },
      {
        name: "SIGPWR",
        number: 30,
        action: "terminate",
        description: "Device running out of power",
        standard: "systemv"
      },
      {
        name: "SIGSYS",
        number: 31,
        action: "core",
        description: "Invalid system call",
        standard: "other"
      },
      {
        name: "SIGUNUSED",
        number: 31,
        action: "terminate",
        description: "Invalid system call",
        standard: "other"
      }
    ];
    exports.SIGNALS = SIGNALS;
  }
});

// node_modules/@vercel/cli-exec/node_modules/human-signals/build/src/realtime.js
var require_realtime = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/human-signals/build/src/realtime.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SIGRTMAX = exports.getRealtimeSignals = void 0;
    var getRealtimeSignals = /* @__PURE__ */ __name(function() {
      const length = SIGRTMAX - SIGRTMIN + 1;
      return Array.from({ length }, getRealtimeSignal);
    }, "getRealtimeSignals");
    exports.getRealtimeSignals = getRealtimeSignals;
    var getRealtimeSignal = /* @__PURE__ */ __name(function(value, index) {
      return {
        name: `SIGRT${index + 1}`,
        number: SIGRTMIN + index,
        action: "terminate",
        description: "Application-specific signal (realtime)",
        standard: "posix"
      };
    }, "getRealtimeSignal");
    var SIGRTMIN = 34;
    var SIGRTMAX = 64;
    exports.SIGRTMAX = SIGRTMAX;
  }
});

// node_modules/@vercel/cli-exec/node_modules/human-signals/build/src/signals.js
var require_signals = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/human-signals/build/src/signals.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSignals = void 0;
    var _os = __require("os");
    var _core = require_core();
    var _realtime = require_realtime();
    var getSignals = /* @__PURE__ */ __name(function() {
      const realtimeSignals = (0, _realtime.getRealtimeSignals)();
      const signals = [..._core.SIGNALS, ...realtimeSignals].map(normalizeSignal);
      return signals;
    }, "getSignals");
    exports.getSignals = getSignals;
    var normalizeSignal = /* @__PURE__ */ __name(function({
      name,
      number: defaultNumber,
      description,
      action,
      forced = false,
      standard
    }) {
      const {
        signals: { [name]: constantSignal }
      } = _os.constants;
      const supported = constantSignal !== void 0;
      const number = supported ? constantSignal : defaultNumber;
      return { name, number, description, supported, action, forced, standard };
    }, "normalizeSignal");
  }
});

// node_modules/@vercel/cli-exec/node_modules/human-signals/build/src/main.js
var require_main = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/human-signals/build/src/main.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.signalsByNumber = exports.signalsByName = void 0;
    var _os = __require("os");
    var _signals = require_signals();
    var _realtime = require_realtime();
    var getSignalsByName = /* @__PURE__ */ __name(function() {
      const signals = (0, _signals.getSignals)();
      return signals.reduce(getSignalByName, {});
    }, "getSignalsByName");
    var getSignalByName = /* @__PURE__ */ __name(function(signalByNameMemo, { name, number, description, supported, action, forced, standard }) {
      return {
        ...signalByNameMemo,
        [name]: { name, number, description, supported, action, forced, standard }
      };
    }, "getSignalByName");
    var signalsByName = getSignalsByName();
    exports.signalsByName = signalsByName;
    var getSignalsByNumber = /* @__PURE__ */ __name(function() {
      const signals = (0, _signals.getSignals)();
      const length = _realtime.SIGRTMAX + 1;
      const signalsA = Array.from({ length }, (value, number) => getSignalByNumber(number, signals));
      return Object.assign({}, ...signalsA);
    }, "getSignalsByNumber");
    var getSignalByNumber = /* @__PURE__ */ __name(function(number, signals) {
      const signal = findSignalByNumber(number, signals);
      if (signal === void 0) {
        return {};
      }
      const { name, description, supported, action, forced, standard } = signal;
      return {
        [number]: {
          name,
          number,
          description,
          supported,
          action,
          forced,
          standard
        }
      };
    }, "getSignalByNumber");
    var findSignalByNumber = /* @__PURE__ */ __name(function(number, signals) {
      const signal = signals.find(({ name }) => _os.constants.signals[name] === number);
      if (signal !== void 0) {
        return signal;
      }
      return signals.find((signalA) => signalA.number === number);
    }, "findSignalByNumber");
    var signalsByNumber = getSignalsByNumber();
    exports.signalsByNumber = signalsByNumber;
  }
});

// node_modules/@vercel/cli-exec/node_modules/execa/lib/error.js
var require_error = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/execa/lib/error.js"(exports, module) {
    "use strict";
    init_esm();
    var { signalsByName } = require_main();
    var getErrorPrefix = /* @__PURE__ */ __name(({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled }) => {
      if (timedOut) {
        return `timed out after ${timeout} milliseconds`;
      }
      if (isCanceled) {
        return "was canceled";
      }
      if (errorCode !== void 0) {
        return `failed with ${errorCode}`;
      }
      if (signal !== void 0) {
        return `was killed with ${signal} (${signalDescription})`;
      }
      if (exitCode !== void 0) {
        return `failed with exit code ${exitCode}`;
      }
      return "failed";
    }, "getErrorPrefix");
    var makeError = /* @__PURE__ */ __name(({
      stdout,
      stderr,
      all,
      error,
      signal,
      exitCode,
      command,
      escapedCommand,
      timedOut,
      isCanceled,
      killed,
      parsed: { options: { timeout } }
    }) => {
      exitCode = exitCode === null ? void 0 : exitCode;
      signal = signal === null ? void 0 : signal;
      const signalDescription = signal === void 0 ? void 0 : signalsByName[signal].description;
      const errorCode = error && error.code;
      const prefix = getErrorPrefix({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled });
      const execaMessage = `Command ${prefix}: ${command}`;
      const isError = Object.prototype.toString.call(error) === "[object Error]";
      const shortMessage = isError ? `${execaMessage}
${error.message}` : execaMessage;
      const message = [shortMessage, stderr, stdout].filter(Boolean).join("\n");
      if (isError) {
        error.originalMessage = error.message;
        error.message = message;
      } else {
        error = new Error(message);
      }
      error.shortMessage = shortMessage;
      error.command = command;
      error.escapedCommand = escapedCommand;
      error.exitCode = exitCode;
      error.signal = signal;
      error.signalDescription = signalDescription;
      error.stdout = stdout;
      error.stderr = stderr;
      if (all !== void 0) {
        error.all = all;
      }
      if ("bufferedData" in error) {
        delete error.bufferedData;
      }
      error.failed = true;
      error.timedOut = Boolean(timedOut);
      error.isCanceled = isCanceled;
      error.killed = killed && !timedOut;
      return error;
    }, "makeError");
    module.exports = makeError;
  }
});

// node_modules/@vercel/cli-exec/node_modules/execa/lib/stdio.js
var require_stdio = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/execa/lib/stdio.js"(exports, module) {
    "use strict";
    init_esm();
    var aliases = ["stdin", "stdout", "stderr"];
    var hasAlias = /* @__PURE__ */ __name((options) => aliases.some((alias) => options[alias] !== void 0), "hasAlias");
    var normalizeStdio = /* @__PURE__ */ __name((options) => {
      if (!options) {
        return;
      }
      const { stdio } = options;
      if (stdio === void 0) {
        return aliases.map((alias) => options[alias]);
      }
      if (hasAlias(options)) {
        throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${aliases.map((alias) => `\`${alias}\``).join(", ")}`);
      }
      if (typeof stdio === "string") {
        return stdio;
      }
      if (!Array.isArray(stdio)) {
        throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
      }
      const length = Math.max(stdio.length, aliases.length);
      return Array.from({ length }, (value, index) => stdio[index]);
    }, "normalizeStdio");
    module.exports = normalizeStdio;
    module.exports.node = (options) => {
      const stdio = normalizeStdio(options);
      if (stdio === "ipc") {
        return "ipc";
      }
      if (stdio === void 0 || typeof stdio === "string") {
        return [stdio, stdio, stdio, "ipc"];
      }
      if (stdio.includes("ipc")) {
        return stdio;
      }
      return [...stdio, "ipc"];
    };
  }
});

// node_modules/@vercel/cli-exec/node_modules/signal-exit/signals.js
var require_signals2 = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/signal-exit/signals.js"(exports, module) {
    init_esm();
    module.exports = [
      "SIGABRT",
      "SIGALRM",
      "SIGHUP",
      "SIGINT",
      "SIGTERM"
    ];
    if (process.platform !== "win32") {
      module.exports.push(
        "SIGVTALRM",
        "SIGXCPU",
        "SIGXFSZ",
        "SIGUSR2",
        "SIGTRAP",
        "SIGSYS",
        "SIGQUIT",
        "SIGIOT"
        // should detect profiler and enable/disable accordingly.
        // see #21
        // 'SIGPROF'
      );
    }
    if (process.platform === "linux") {
      module.exports.push(
        "SIGIO",
        "SIGPOLL",
        "SIGPWR",
        "SIGSTKFLT",
        "SIGUNUSED"
      );
    }
  }
});

// node_modules/@vercel/cli-exec/node_modules/signal-exit/index.js
var require_signal_exit = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/signal-exit/index.js"(exports, module) {
    init_esm();
    var process2 = global.process;
    var processOk = /* @__PURE__ */ __name(function(process3) {
      return process3 && typeof process3 === "object" && typeof process3.removeListener === "function" && typeof process3.emit === "function" && typeof process3.reallyExit === "function" && typeof process3.listeners === "function" && typeof process3.kill === "function" && typeof process3.pid === "number" && typeof process3.on === "function";
    }, "processOk");
    if (!processOk(process2)) {
      module.exports = function() {
        return function() {
        };
      };
    } else {
      assert = __require("assert");
      signals = require_signals2();
      isWin = /^win/i.test(process2.platform);
      EE = __require("events");
      if (typeof EE !== "function") {
        EE = EE.EventEmitter;
      }
      if (process2.__signal_exit_emitter__) {
        emitter = process2.__signal_exit_emitter__;
      } else {
        emitter = process2.__signal_exit_emitter__ = new EE();
        emitter.count = 0;
        emitter.emitted = {};
      }
      if (!emitter.infinite) {
        emitter.setMaxListeners(Infinity);
        emitter.infinite = true;
      }
      module.exports = function(cb, opts) {
        if (!processOk(global.process)) {
          return function() {
          };
        }
        assert.equal(typeof cb, "function", "a callback must be provided for exit handler");
        if (loaded === false) {
          load();
        }
        var ev = "exit";
        if (opts && opts.alwaysLast) {
          ev = "afterexit";
        }
        var remove = /* @__PURE__ */ __name(function() {
          emitter.removeListener(ev, cb);
          if (emitter.listeners("exit").length === 0 && emitter.listeners("afterexit").length === 0) {
            unload();
          }
        }, "remove");
        emitter.on(ev, cb);
        return remove;
      };
      unload = /* @__PURE__ */ __name(function unload2() {
        if (!loaded || !processOk(global.process)) {
          return;
        }
        loaded = false;
        signals.forEach(function(sig) {
          try {
            process2.removeListener(sig, sigListeners[sig]);
          } catch (er) {
          }
        });
        process2.emit = originalProcessEmit;
        process2.reallyExit = originalProcessReallyExit;
        emitter.count -= 1;
      }, "unload");
      module.exports.unload = unload;
      emit = /* @__PURE__ */ __name(function emit2(event, code, signal) {
        if (emitter.emitted[event]) {
          return;
        }
        emitter.emitted[event] = true;
        emitter.emit(event, code, signal);
      }, "emit");
      sigListeners = {};
      signals.forEach(function(sig) {
        sigListeners[sig] = /* @__PURE__ */ __name(function listener() {
          if (!processOk(global.process)) {
            return;
          }
          var listeners = process2.listeners(sig);
          if (listeners.length === emitter.count) {
            unload();
            emit("exit", null, sig);
            emit("afterexit", null, sig);
            if (isWin && sig === "SIGHUP") {
              sig = "SIGINT";
            }
            process2.kill(process2.pid, sig);
          }
        }, "listener");
      });
      module.exports.signals = function() {
        return signals;
      };
      loaded = false;
      load = /* @__PURE__ */ __name(function load2() {
        if (loaded || !processOk(global.process)) {
          return;
        }
        loaded = true;
        emitter.count += 1;
        signals = signals.filter(function(sig) {
          try {
            process2.on(sig, sigListeners[sig]);
            return true;
          } catch (er) {
            return false;
          }
        });
        process2.emit = processEmit;
        process2.reallyExit = processReallyExit;
      }, "load");
      module.exports.load = load;
      originalProcessReallyExit = process2.reallyExit;
      processReallyExit = /* @__PURE__ */ __name(function processReallyExit2(code) {
        if (!processOk(global.process)) {
          return;
        }
        process2.exitCode = code || /* istanbul ignore next */
        0;
        emit("exit", process2.exitCode, null);
        emit("afterexit", process2.exitCode, null);
        originalProcessReallyExit.call(process2, process2.exitCode);
      }, "processReallyExit");
      originalProcessEmit = process2.emit;
      processEmit = /* @__PURE__ */ __name(function processEmit2(ev, arg) {
        if (ev === "exit" && processOk(global.process)) {
          if (arg !== void 0) {
            process2.exitCode = arg;
          }
          var ret = originalProcessEmit.apply(this, arguments);
          emit("exit", process2.exitCode, null);
          emit("afterexit", process2.exitCode, null);
          return ret;
        } else {
          return originalProcessEmit.apply(this, arguments);
        }
      }, "processEmit");
    }
    var assert;
    var signals;
    var isWin;
    var EE;
    var emitter;
    var unload;
    var emit;
    var sigListeners;
    var loaded;
    var load;
    var originalProcessReallyExit;
    var processReallyExit;
    var originalProcessEmit;
    var processEmit;
  }
});

// node_modules/@vercel/cli-exec/node_modules/execa/lib/kill.js
var require_kill = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/execa/lib/kill.js"(exports, module) {
    "use strict";
    init_esm();
    var os = __require("os");
    var onExit = require_signal_exit();
    var DEFAULT_FORCE_KILL_TIMEOUT = 1e3 * 5;
    var spawnedKill = /* @__PURE__ */ __name((kill, signal = "SIGTERM", options = {}) => {
      const killResult = kill(signal);
      setKillTimeout(kill, signal, options, killResult);
      return killResult;
    }, "spawnedKill");
    var setKillTimeout = /* @__PURE__ */ __name((kill, signal, options, killResult) => {
      if (!shouldForceKill(signal, options, killResult)) {
        return;
      }
      const timeout = getForceKillAfterTimeout(options);
      const t = setTimeout(() => {
        kill("SIGKILL");
      }, timeout);
      if (t.unref) {
        t.unref();
      }
    }, "setKillTimeout");
    var shouldForceKill = /* @__PURE__ */ __name((signal, { forceKillAfterTimeout }, killResult) => {
      return isSigterm(signal) && forceKillAfterTimeout !== false && killResult;
    }, "shouldForceKill");
    var isSigterm = /* @__PURE__ */ __name((signal) => {
      return signal === os.constants.signals.SIGTERM || typeof signal === "string" && signal.toUpperCase() === "SIGTERM";
    }, "isSigterm");
    var getForceKillAfterTimeout = /* @__PURE__ */ __name(({ forceKillAfterTimeout = true }) => {
      if (forceKillAfterTimeout === true) {
        return DEFAULT_FORCE_KILL_TIMEOUT;
      }
      if (!Number.isFinite(forceKillAfterTimeout) || forceKillAfterTimeout < 0) {
        throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout}\` (${typeof forceKillAfterTimeout})`);
      }
      return forceKillAfterTimeout;
    }, "getForceKillAfterTimeout");
    var spawnedCancel = /* @__PURE__ */ __name((spawned, context) => {
      const killResult = spawned.kill();
      if (killResult) {
        context.isCanceled = true;
      }
    }, "spawnedCancel");
    var timeoutKill = /* @__PURE__ */ __name((spawned, signal, reject) => {
      spawned.kill(signal);
      reject(Object.assign(new Error("Timed out"), { timedOut: true, signal }));
    }, "timeoutKill");
    var setupTimeout = /* @__PURE__ */ __name((spawned, { timeout, killSignal = "SIGTERM" }, spawnedPromise) => {
      if (timeout === 0 || timeout === void 0) {
        return spawnedPromise;
      }
      let timeoutId;
      const timeoutPromise = new Promise((resolve, reject) => {
        timeoutId = setTimeout(() => {
          timeoutKill(spawned, killSignal, reject);
        }, timeout);
      });
      const safeSpawnedPromise = spawnedPromise.finally(() => {
        clearTimeout(timeoutId);
      });
      return Promise.race([timeoutPromise, safeSpawnedPromise]);
    }, "setupTimeout");
    var validateTimeout = /* @__PURE__ */ __name(({ timeout }) => {
      if (timeout !== void 0 && (!Number.isFinite(timeout) || timeout < 0)) {
        throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
      }
    }, "validateTimeout");
    var setExitHandler = /* @__PURE__ */ __name(async (spawned, { cleanup, detached }, timedPromise) => {
      if (!cleanup || detached) {
        return timedPromise;
      }
      const removeExitHandler = onExit(() => {
        spawned.kill();
      });
      return timedPromise.finally(() => {
        removeExitHandler();
      });
    }, "setExitHandler");
    module.exports = {
      spawnedKill,
      spawnedCancel,
      setupTimeout,
      validateTimeout,
      setExitHandler
    };
  }
});

// node_modules/@vercel/cli-exec/node_modules/is-stream/index.js
var require_is_stream = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/is-stream/index.js"(exports, module) {
    "use strict";
    init_esm();
    var isStream = /* @__PURE__ */ __name((stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function", "isStream");
    isStream.writable = (stream) => isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
    isStream.readable = (stream) => isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
    isStream.duplex = (stream) => isStream.writable(stream) && isStream.readable(stream);
    isStream.transform = (stream) => isStream.duplex(stream) && typeof stream._transform === "function";
    module.exports = isStream;
  }
});

// node_modules/@vercel/cli-exec/node_modules/get-stream/buffer-stream.js
var require_buffer_stream = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/get-stream/buffer-stream.js"(exports, module) {
    "use strict";
    init_esm();
    var { PassThrough: PassThroughStream } = __require("stream");
    module.exports = (options) => {
      options = { ...options };
      const { array } = options;
      let { encoding } = options;
      const isBuffer = encoding === "buffer";
      let objectMode = false;
      if (array) {
        objectMode = !(encoding || isBuffer);
      } else {
        encoding = encoding || "utf8";
      }
      if (isBuffer) {
        encoding = null;
      }
      const stream = new PassThroughStream({ objectMode });
      if (encoding) {
        stream.setEncoding(encoding);
      }
      let length = 0;
      const chunks = [];
      stream.on("data", (chunk) => {
        chunks.push(chunk);
        if (objectMode) {
          length = chunks.length;
        } else {
          length += chunk.length;
        }
      });
      stream.getBufferedValue = () => {
        if (array) {
          return chunks;
        }
        return isBuffer ? Buffer.concat(chunks, length) : chunks.join("");
      };
      stream.getBufferedLength = () => length;
      return stream;
    };
  }
});

// node_modules/@vercel/cli-exec/node_modules/get-stream/index.js
var require_get_stream = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/get-stream/index.js"(exports, module) {
    "use strict";
    init_esm();
    var { constants: BufferConstants } = __require("buffer");
    var stream = __require("stream");
    var { promisify } = __require("util");
    var bufferStream = require_buffer_stream();
    var streamPipelinePromisified = promisify(stream.pipeline);
    var MaxBufferError = class extends Error {
      static {
        __name(this, "MaxBufferError");
      }
      constructor() {
        super("maxBuffer exceeded");
        this.name = "MaxBufferError";
      }
    };
    async function getStream(inputStream, options) {
      if (!inputStream) {
        throw new Error("Expected a stream");
      }
      options = {
        maxBuffer: Infinity,
        ...options
      };
      const { maxBuffer } = options;
      const stream2 = bufferStream(options);
      await new Promise((resolve, reject) => {
        const rejectPromise = /* @__PURE__ */ __name((error) => {
          if (error && stream2.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
            error.bufferedData = stream2.getBufferedValue();
          }
          reject(error);
        }, "rejectPromise");
        (async () => {
          try {
            await streamPipelinePromisified(inputStream, stream2);
            resolve();
          } catch (error) {
            rejectPromise(error);
          }
        })();
        stream2.on("data", () => {
          if (stream2.getBufferedLength() > maxBuffer) {
            rejectPromise(new MaxBufferError());
          }
        });
      });
      return stream2.getBufferedValue();
    }
    __name(getStream, "getStream");
    module.exports = getStream;
    module.exports.buffer = (stream2, options) => getStream(stream2, { ...options, encoding: "buffer" });
    module.exports.array = (stream2, options) => getStream(stream2, { ...options, array: true });
    module.exports.MaxBufferError = MaxBufferError;
  }
});

// node_modules/merge-stream/index.js
var require_merge_stream = __commonJS({
  "node_modules/merge-stream/index.js"(exports, module) {
    "use strict";
    init_esm();
    var { PassThrough } = __require("stream");
    module.exports = function() {
      var sources = [];
      var output = new PassThrough({ objectMode: true });
      output.setMaxListeners(0);
      output.add = add;
      output.isEmpty = isEmpty;
      output.on("unpipe", remove);
      Array.prototype.slice.call(arguments).forEach(add);
      return output;
      function add(source) {
        if (Array.isArray(source)) {
          source.forEach(add);
          return this;
        }
        sources.push(source);
        source.once("end", remove.bind(null, source));
        source.once("error", output.emit.bind(output, "error"));
        source.pipe(output, { end: false });
        return this;
      }
      __name(add, "add");
      function isEmpty() {
        return sources.length == 0;
      }
      __name(isEmpty, "isEmpty");
      function remove(source) {
        sources = sources.filter(function(it) {
          return it !== source;
        });
        if (!sources.length && output.readable) {
          output.end();
        }
      }
      __name(remove, "remove");
    };
  }
});

// node_modules/@vercel/cli-exec/node_modules/execa/lib/stream.js
var require_stream = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/execa/lib/stream.js"(exports, module) {
    "use strict";
    init_esm();
    var isStream = require_is_stream();
    var getStream = require_get_stream();
    var mergeStream = require_merge_stream();
    var handleInput = /* @__PURE__ */ __name((spawned, input) => {
      if (input === void 0 || spawned.stdin === void 0) {
        return;
      }
      if (isStream(input)) {
        input.pipe(spawned.stdin);
      } else {
        spawned.stdin.end(input);
      }
    }, "handleInput");
    var makeAllStream = /* @__PURE__ */ __name((spawned, { all }) => {
      if (!all || !spawned.stdout && !spawned.stderr) {
        return;
      }
      const mixed = mergeStream();
      if (spawned.stdout) {
        mixed.add(spawned.stdout);
      }
      if (spawned.stderr) {
        mixed.add(spawned.stderr);
      }
      return mixed;
    }, "makeAllStream");
    var getBufferedData = /* @__PURE__ */ __name(async (stream, streamPromise) => {
      if (!stream) {
        return;
      }
      stream.destroy();
      try {
        return await streamPromise;
      } catch (error) {
        return error.bufferedData;
      }
    }, "getBufferedData");
    var getStreamPromise = /* @__PURE__ */ __name((stream, { encoding, buffer, maxBuffer }) => {
      if (!stream || !buffer) {
        return;
      }
      if (encoding) {
        return getStream(stream, { encoding, maxBuffer });
      }
      return getStream.buffer(stream, { maxBuffer });
    }, "getStreamPromise");
    var getSpawnedResult = /* @__PURE__ */ __name(async ({ stdout, stderr, all }, { encoding, buffer, maxBuffer }, processDone) => {
      const stdoutPromise = getStreamPromise(stdout, { encoding, buffer, maxBuffer });
      const stderrPromise = getStreamPromise(stderr, { encoding, buffer, maxBuffer });
      const allPromise = getStreamPromise(all, { encoding, buffer, maxBuffer: maxBuffer * 2 });
      try {
        return await Promise.all([processDone, stdoutPromise, stderrPromise, allPromise]);
      } catch (error) {
        return Promise.all([
          { error, signal: error.signal, timedOut: error.timedOut },
          getBufferedData(stdout, stdoutPromise),
          getBufferedData(stderr, stderrPromise),
          getBufferedData(all, allPromise)
        ]);
      }
    }, "getSpawnedResult");
    var validateInputSync = /* @__PURE__ */ __name(({ input }) => {
      if (isStream(input)) {
        throw new TypeError("The `input` option cannot be a stream in sync mode");
      }
    }, "validateInputSync");
    module.exports = {
      handleInput,
      makeAllStream,
      getSpawnedResult,
      validateInputSync
    };
  }
});

// node_modules/@vercel/cli-exec/node_modules/execa/lib/promise.js
var require_promise = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/execa/lib/promise.js"(exports, module) {
    "use strict";
    init_esm();
    var nativePromisePrototype = (async () => {
    })().constructor.prototype;
    var descriptors = ["then", "catch", "finally"].map((property) => [
      property,
      Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)
    ]);
    var mergePromise = /* @__PURE__ */ __name((spawned, promise) => {
      for (const [property, descriptor] of descriptors) {
        const value = typeof promise === "function" ? (...args) => Reflect.apply(descriptor.value, promise(), args) : descriptor.value.bind(promise);
        Reflect.defineProperty(spawned, property, { ...descriptor, value });
      }
      return spawned;
    }, "mergePromise");
    var getSpawnedPromise = /* @__PURE__ */ __name((spawned) => {
      return new Promise((resolve, reject) => {
        spawned.on("exit", (exitCode, signal) => {
          resolve({ exitCode, signal });
        });
        spawned.on("error", (error) => {
          reject(error);
        });
        if (spawned.stdin) {
          spawned.stdin.on("error", (error) => {
            reject(error);
          });
        }
      });
    }, "getSpawnedPromise");
    module.exports = {
      mergePromise,
      getSpawnedPromise
    };
  }
});

// node_modules/@vercel/cli-exec/node_modules/execa/lib/command.js
var require_command = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/execa/lib/command.js"(exports, module) {
    "use strict";
    init_esm();
    var normalizeArgs = /* @__PURE__ */ __name((file, args = []) => {
      if (!Array.isArray(args)) {
        return [file];
      }
      return [file, ...args];
    }, "normalizeArgs");
    var NO_ESCAPE_REGEXP = /^[\w.-]+$/;
    var DOUBLE_QUOTES_REGEXP = /"/g;
    var escapeArg = /* @__PURE__ */ __name((arg) => {
      if (typeof arg !== "string" || NO_ESCAPE_REGEXP.test(arg)) {
        return arg;
      }
      return `"${arg.replace(DOUBLE_QUOTES_REGEXP, '\\"')}"`;
    }, "escapeArg");
    var joinCommand = /* @__PURE__ */ __name((file, args) => {
      return normalizeArgs(file, args).join(" ");
    }, "joinCommand");
    var getEscapedCommand = /* @__PURE__ */ __name((file, args) => {
      return normalizeArgs(file, args).map((arg) => escapeArg(arg)).join(" ");
    }, "getEscapedCommand");
    var SPACES_REGEXP = / +/g;
    var parseCommand = /* @__PURE__ */ __name((command) => {
      const tokens = [];
      for (const token of command.trim().split(SPACES_REGEXP)) {
        const previousToken = tokens[tokens.length - 1];
        if (previousToken && previousToken.endsWith("\\")) {
          tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
        } else {
          tokens.push(token);
        }
      }
      return tokens;
    }, "parseCommand");
    module.exports = {
      joinCommand,
      getEscapedCommand,
      parseCommand
    };
  }
});

// node_modules/@vercel/cli-exec/node_modules/execa/index.js
var require_execa = __commonJS({
  "node_modules/@vercel/cli-exec/node_modules/execa/index.js"(exports, module) {
    "use strict";
    init_esm();
    var path = __require("path");
    var childProcess = __require("child_process");
    var crossSpawn = require_cross_spawn();
    var stripFinalNewline = require_strip_final_newline();
    var npmRunPath = require_npm_run_path();
    var onetime = require_onetime();
    var makeError = require_error();
    var normalizeStdio = require_stdio();
    var { spawnedKill, spawnedCancel, setupTimeout, validateTimeout, setExitHandler } = require_kill();
    var { handleInput, getSpawnedResult, makeAllStream, validateInputSync } = require_stream();
    var { mergePromise, getSpawnedPromise } = require_promise();
    var { joinCommand, parseCommand, getEscapedCommand } = require_command();
    var DEFAULT_MAX_BUFFER = 1e3 * 1e3 * 100;
    var getEnv = /* @__PURE__ */ __name(({ env: envOption, extendEnv, preferLocal, localDir, execPath }) => {
      const env = extendEnv ? { ...process.env, ...envOption } : envOption;
      if (preferLocal) {
        return npmRunPath.env({ env, cwd: localDir, execPath });
      }
      return env;
    }, "getEnv");
    var handleArguments = /* @__PURE__ */ __name((file, args, options = {}) => {
      const parsed = crossSpawn._parse(file, args, options);
      file = parsed.command;
      args = parsed.args;
      options = parsed.options;
      options = {
        maxBuffer: DEFAULT_MAX_BUFFER,
        buffer: true,
        stripFinalNewline: true,
        extendEnv: true,
        preferLocal: false,
        localDir: options.cwd || process.cwd(),
        execPath: process.execPath,
        encoding: "utf8",
        reject: true,
        cleanup: true,
        all: false,
        windowsHide: true,
        ...options
      };
      options.env = getEnv(options);
      options.stdio = normalizeStdio(options);
      if (process.platform === "win32" && path.basename(file, ".exe") === "cmd") {
        args.unshift("/q");
      }
      return { file, args, options, parsed };
    }, "handleArguments");
    var handleOutput = /* @__PURE__ */ __name((options, value, error) => {
      if (typeof value !== "string" && !Buffer.isBuffer(value)) {
        return error === void 0 ? void 0 : "";
      }
      if (options.stripFinalNewline) {
        return stripFinalNewline(value);
      }
      return value;
    }, "handleOutput");
    var execa = /* @__PURE__ */ __name((file, args, options) => {
      const parsed = handleArguments(file, args, options);
      const command = joinCommand(file, args);
      const escapedCommand = getEscapedCommand(file, args);
      validateTimeout(parsed.options);
      let spawned;
      try {
        spawned = childProcess.spawn(parsed.file, parsed.args, parsed.options);
      } catch (error) {
        const dummySpawned = new childProcess.ChildProcess();
        const errorPromise = Promise.reject(makeError({
          error,
          stdout: "",
          stderr: "",
          all: "",
          command,
          escapedCommand,
          parsed,
          timedOut: false,
          isCanceled: false,
          killed: false
        }));
        return mergePromise(dummySpawned, errorPromise);
      }
      const spawnedPromise = getSpawnedPromise(spawned);
      const timedPromise = setupTimeout(spawned, parsed.options, spawnedPromise);
      const processDone = setExitHandler(spawned, parsed.options, timedPromise);
      const context = { isCanceled: false };
      spawned.kill = spawnedKill.bind(null, spawned.kill.bind(spawned));
      spawned.cancel = spawnedCancel.bind(null, spawned, context);
      const handlePromise = /* @__PURE__ */ __name(async () => {
        const [{ error, exitCode, signal, timedOut }, stdoutResult, stderrResult, allResult] = await getSpawnedResult(spawned, parsed.options, processDone);
        const stdout = handleOutput(parsed.options, stdoutResult);
        const stderr = handleOutput(parsed.options, stderrResult);
        const all = handleOutput(parsed.options, allResult);
        if (error || exitCode !== 0 || signal !== null) {
          const returnedError = makeError({
            error,
            exitCode,
            signal,
            stdout,
            stderr,
            all,
            command,
            escapedCommand,
            parsed,
            timedOut,
            isCanceled: context.isCanceled,
            killed: spawned.killed
          });
          if (!parsed.options.reject) {
            return returnedError;
          }
          throw returnedError;
        }
        return {
          command,
          escapedCommand,
          exitCode: 0,
          stdout,
          stderr,
          all,
          failed: false,
          timedOut: false,
          isCanceled: false,
          killed: false
        };
      }, "handlePromise");
      const handlePromiseOnce = onetime(handlePromise);
      handleInput(spawned, parsed.options.input);
      spawned.all = makeAllStream(spawned, parsed.options);
      return mergePromise(spawned, handlePromiseOnce);
    }, "execa");
    module.exports = execa;
    module.exports.sync = (file, args, options) => {
      const parsed = handleArguments(file, args, options);
      const command = joinCommand(file, args);
      const escapedCommand = getEscapedCommand(file, args);
      validateInputSync(parsed.options);
      let result;
      try {
        result = childProcess.spawnSync(parsed.file, parsed.args, parsed.options);
      } catch (error) {
        throw makeError({
          error,
          stdout: "",
          stderr: "",
          all: "",
          command,
          escapedCommand,
          parsed,
          timedOut: false,
          isCanceled: false,
          killed: false
        });
      }
      const stdout = handleOutput(parsed.options, result.stdout, result.error);
      const stderr = handleOutput(parsed.options, result.stderr, result.error);
      if (result.error || result.status !== 0 || result.signal !== null) {
        const error = makeError({
          stdout,
          stderr,
          error: result.error,
          signal: result.signal,
          exitCode: result.status,
          command,
          escapedCommand,
          parsed,
          timedOut: result.error && result.error.code === "ETIMEDOUT",
          isCanceled: false,
          killed: result.signal !== null
        });
        if (!parsed.options.reject) {
          return error;
        }
        throw error;
      }
      return {
        command,
        escapedCommand,
        exitCode: 0,
        stdout,
        stderr,
        failed: false,
        timedOut: false,
        isCanceled: false,
        killed: false
      };
    };
    module.exports.command = (command, options) => {
      const [file, ...args] = parseCommand(command);
      return execa(file, args, options);
    };
    module.exports.commandSync = (command, options) => {
      const [file, ...args] = parseCommand(command);
      return execa.sync(file, args, options);
    };
    module.exports.node = (scriptPath, args, options = {}) => {
      if (args && !Array.isArray(args) && typeof args === "object") {
        options = args;
        args = [];
      }
      const stdio = normalizeStdio.node(options);
      const defaultExecArgv = process.execArgv.filter((arg) => !arg.startsWith("--inspect"));
      const {
        nodePath = process.execPath,
        nodeOptions = defaultExecArgv
      } = options;
      return execa(
        nodePath,
        [
          ...nodeOptions,
          scriptPath,
          ...Array.isArray(args) ? args : []
        ],
        {
          ...options,
          stdin: void 0,
          stdout: void 0,
          stderr: void 0,
          stdio,
          shell: false
        }
      );
    };
  }
});

// node_modules/@vercel/cli-exec/dist/envpath.js
var require_envpath = __commonJS({
  "node_modules/@vercel/cli-exec/dist/envpath.js"(exports, module) {
    "use strict";
    init_esm();
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var envpath_exports = {};
    __export(envpath_exports, {
      getEnvPath: /* @__PURE__ */ __name(() => getEnvPath, "getEnvPath"),
      prependPathEntries: /* @__PURE__ */ __name(() => prependPathEntries, "prependPathEntries"),
      setEnvPath: /* @__PURE__ */ __name(() => setEnvPath, "setEnvPath"),
      splitPath: /* @__PURE__ */ __name(() => splitPath, "splitPath")
    });
    module.exports = __toCommonJS(envpath_exports);
    var import_node_path = __toESM(__require("node:path"));
    function prependPathEntries(pathValue, directories) {
      const pathParts = pathValue.split(import_node_path.default.delimiter).filter(Boolean);
      const prepended = [];
      for (const directory of directories) {
        if (!pathParts.includes(directory) && !prepended.includes(directory)) {
          prepended.push(directory);
        }
      }
      if (prepended.length === 0) {
        return pathValue;
      }
      return pathValue === "" || pathValue === import_node_path.default.delimiter ? `${prepended.join(import_node_path.default.delimiter)}${pathValue}` : [...prepended, pathValue].join(import_node_path.default.delimiter);
    }
    __name(prependPathEntries, "prependPathEntries");
    function splitPath(pathValue) {
      return pathValue.split(import_node_path.default.delimiter).filter(Boolean);
    }
    __name(splitPath, "splitPath");
    function getEnvPath(env = process.env) {
      if (process.platform !== "win32") {
        return env.PATH ?? "";
      }
      const pathKeys = Object.keys(env).filter((key) => key.toLowerCase() === "path");
      for (let index = pathKeys.length - 1; index >= 0; index--) {
        const value = env[pathKeys[index]];
        if (value !== void 0) {
          return value;
        }
      }
      return "";
    }
    __name(getEnvPath, "getEnvPath");
    function setEnvPath(env = process.env, pathValue) {
      if (process.platform !== "win32") {
        return {
          ...env,
          PATH: pathValue
        };
      }
      const normalizedEnv = { ...env };
      for (const key of Object.keys(normalizedEnv)) {
        if (key !== "PATH" && key.toLowerCase() === "path") {
          delete normalizedEnv[key];
        }
      }
      normalizedEnv.PATH = pathValue;
      return normalizedEnv;
    }
    __name(setEnvPath, "setEnvPath");
  }
});

// node_modules/@vercel/cli-exec/dist/errutils.js
var require_errutils = __commonJS({
  "node_modules/@vercel/cli-exec/dist/errutils.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var errutils_exports = {};
    __export(errutils_exports, {
      getErrorMessage: /* @__PURE__ */ __name(() => getErrorMessage, "getErrorMessage"),
      isMissingPathError: /* @__PURE__ */ __name(() => isMissingPathError, "isMissingPathError")
    });
    module.exports = __toCommonJS(errutils_exports);
    function getErrorMessage(error) {
      if (error instanceof Error) {
        return error.message;
      }
      return String(error);
    }
    __name(getErrorMessage, "getErrorMessage");
    function isMissingPathError(error) {
      return typeof error === "object" && error !== null && "code" in error && (error.code === "ENOENT" || error.code === "ENOTDIR");
    }
    __name(isMissingPathError, "isMissingPathError");
  }
});

// node_modules/@vercel/cli-exec/dist/fsutils.js
var require_fsutils = __commonJS({
  "node_modules/@vercel/cli-exec/dist/fsutils.js"(exports, module) {
    "use strict";
    init_esm();
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var fsutils_exports = {};
    __export(fsutils_exports, {
      getCanonicalPath: /* @__PURE__ */ __name(() => getCanonicalPath, "getCanonicalPath"),
      getCommandBase: /* @__PURE__ */ __name(() => getCommandBase, "getCommandBase"),
      getDirectoriesBetween: /* @__PURE__ */ __name(() => getDirectoriesBetween, "getDirectoriesBetween"),
      isNodeScript: /* @__PURE__ */ __name(() => isNodeScript, "isNodeScript"),
      isSubpath: /* @__PURE__ */ __name(() => isSubpath, "isSubpath"),
      statIfExists: /* @__PURE__ */ __name(() => statIfExists, "statIfExists")
    });
    module.exports = __toCommonJS(fsutils_exports);
    var import_promises = __require("node:fs/promises");
    var import_node_path = __toESM(__require("node:path"));
    var import_errutils = require_errutils();
    async function getCanonicalPath(filePath) {
      try {
        return await (0, import_promises.realpath)(filePath);
      } catch {
        return filePath;
      }
    }
    __name(getCanonicalPath, "getCanonicalPath");
    function getDirectoriesBetween(parent, child) {
      const directories = [];
      let current = import_node_path.default.resolve(child);
      const resolvedParent = import_node_path.default.resolve(parent);
      while (true) {
        directories.push(current);
        if (current === resolvedParent) {
          return directories.reverse();
        }
        const next = import_node_path.default.dirname(current);
        if (next === current) {
          return [];
        }
        current = next;
      }
    }
    __name(getDirectoriesBetween, "getDirectoriesBetween");
    async function statIfExists(filePath) {
      try {
        return { stats: await (0, import_promises.stat)(filePath) };
      } catch (error) {
        if ((0, import_errutils.isMissingPathError)(error)) {
          return { missing: true };
        }
        return { reason: `could not inspect: ${(0, import_errutils.getErrorMessage)(error)}` };
      }
    }
    __name(statIfExists, "statIfExists");
    function isNodeScript(filePath) {
      return [".js", ".cjs", ".mjs"].includes(import_node_path.default.extname(filePath));
    }
    __name(isNodeScript, "isNodeScript");
    function isSubpath(parent, child) {
      const relativePath = import_node_path.default.relative(parent, child);
      return relativePath === "" || relativePath !== "" && !relativePath.startsWith("..") && !import_node_path.default.isAbsolute(relativePath);
    }
    __name(isSubpath, "isSubpath");
    function getCommandBase(command) {
      const extension = import_node_path.default.extname(command).toLowerCase();
      if (process.platform === "win32" && [".cmd", ".exe"].includes(extension)) {
        return import_node_path.default.basename(command, extension);
      }
      return import_node_path.default.basename(command);
    }
    __name(getCommandBase, "getCommandBase");
  }
});

// node_modules/@vercel/cli-exec/dist/safety.js
var require_safety = __commonJS({
  "node_modules/@vercel/cli-exec/dist/safety.js"(exports, module) {
    "use strict";
    init_esm();
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var safety_exports = {};
    __export(safety_exports, {
      getSkippedNodeModulesReason: /* @__PURE__ */ __name(() => getSkippedNodeModulesReason, "getSkippedNodeModulesReason"),
      getUnsafeDirectoryReason: /* @__PURE__ */ __name(() => getUnsafeDirectoryReason, "getUnsafeDirectoryReason"),
      getUnsafePackageBinReason: /* @__PURE__ */ __name(() => getUnsafePackageBinReason, "getUnsafePackageBinReason"),
      getUnsafePackageDirectoryReason: /* @__PURE__ */ __name(() => getUnsafePackageDirectoryReason, "getUnsafePackageDirectoryReason"),
      getUnsafePackageFileReason: /* @__PURE__ */ __name(() => getUnsafePackageFileReason, "getUnsafePackageFileReason"),
      getUnsafeStatsReason: /* @__PURE__ */ __name(() => getUnsafeStatsReason, "getUnsafeStatsReason")
    });
    module.exports = __toCommonJS(safety_exports);
    var import_promises = __require("node:fs/promises");
    var import_node_path = __toESM(__require("node:path"));
    var import_errutils = require_errutils();
    var import_fsutils = require_fsutils();
    async function getSkippedNodeModulesReason(nodeModulesDirectory, parentDirectories) {
      const parentDirectory = import_node_path.default.dirname(nodeModulesDirectory);
      parentDirectories ??= [parentDirectory];
      for (const directory of parentDirectories) {
        let unsafeParentReason;
        try {
          unsafeParentReason = await getUnsafeDirectoryReason(directory);
        } catch (error) {
          unsafeParentReason = `could not inspect: ${(0, import_errutils.getErrorMessage)(error)}`;
        }
        if (unsafeParentReason) {
          return `${directory} is ${unsafeParentReason}`;
        }
      }
      const result = await (0, import_fsutils.statIfExists)(nodeModulesDirectory);
      if ("missing" in result) {
        return null;
      }
      if ("reason" in result) {
        return result.reason;
      }
      if (!result.stats.isDirectory()) {
        return "not a directory";
      }
      const unsafeNodeModulesReason = getUnsafeStatsReason(result.stats);
      if (unsafeNodeModulesReason) {
        return unsafeNodeModulesReason;
      }
      return await getSkippedLocalBinDirectoryReason(
        import_node_path.default.join(nodeModulesDirectory, ".bin")
      );
    }
    __name(getSkippedNodeModulesReason, "getSkippedNodeModulesReason");
    async function getSkippedLocalBinDirectoryReason(localBinDirectory) {
      const result = await (0, import_fsutils.statIfExists)(localBinDirectory);
      if ("missing" in result) {
        return null;
      }
      if ("reason" in result) {
        return `${localBinDirectory} ${result.reason}`;
      }
      if (!result.stats.isDirectory()) {
        return `${localBinDirectory} is not a directory`;
      }
      const unsafeLocalBinReason = getUnsafeStatsReason(result.stats);
      return unsafeLocalBinReason ? `${localBinDirectory} is ${unsafeLocalBinReason}` : null;
    }
    __name(getSkippedLocalBinDirectoryReason, "getSkippedLocalBinDirectoryReason");
    async function getUnsafePackageBinReason(nodeModulesDirectory, packageDirectory, binPath) {
      const unsafePackageDirectoryReason = await getUnsafePackageDirectoryReason(
        nodeModulesDirectory,
        packageDirectory
      );
      if (unsafePackageDirectoryReason) {
        return unsafePackageDirectoryReason;
      }
      return await getUnsafePackageFileReason(packageDirectory, binPath);
    }
    __name(getUnsafePackageBinReason, "getUnsafePackageBinReason");
    async function getUnsafePackageDirectoryReason(nodeModulesDirectory, packageDirectory) {
      const directoriesToCheck = (0, import_fsutils.getDirectoriesBetween)(
        nodeModulesDirectory,
        packageDirectory
      );
      if (directoriesToCheck.length === 0) {
        return `${packageDirectory} resolves outside local node_modules`;
      }
      for (const directory of directoriesToCheck) {
        const reason = await getUnsafeDirectoryReason(directory);
        if (reason) {
          return `${directory} is ${reason}`;
        }
      }
      return null;
    }
    __name(getUnsafePackageDirectoryReason, "getUnsafePackageDirectoryReason");
    async function getUnsafePackageFileReason(packageDirectory, filePath) {
      const directoriesToCheck = (0, import_fsutils.getDirectoriesBetween)(
        packageDirectory,
        import_node_path.default.dirname(filePath)
      );
      if (directoriesToCheck.length === 0) {
        return `${filePath} resolves outside package`;
      }
      for (const directory of directoriesToCheck) {
        const reason2 = await getUnsafeDirectoryReason(directory);
        if (reason2) {
          return `${directory} is ${reason2}`;
        }
      }
      const reason = await getUnsafeFileReason(filePath);
      return reason ? `${filePath} is ${reason}` : null;
    }
    __name(getUnsafePackageFileReason, "getUnsafePackageFileReason");
    async function getUnsafeDirectoryReason(directory) {
      const stats = await (0, import_promises.stat)(directory);
      if (!stats.isDirectory()) {
        return "not a directory";
      }
      return getUnsafeStatsReason(stats);
    }
    __name(getUnsafeDirectoryReason, "getUnsafeDirectoryReason");
    async function getUnsafeFileReason(filePath) {
      const stats = await (0, import_promises.stat)(filePath);
      if (!stats.isFile()) {
        return "not a file";
      }
      return getUnsafeStatsReason(stats);
    }
    __name(getUnsafeFileReason, "getUnsafeFileReason");
    function getUnsafeStatsReason(stats) {
      const getuid = process.geteuid ?? process.getuid;
      if (typeof getuid !== "function") {
        return null;
      }
      const uid = getuid();
      if ((stats.mode & 18) !== 0) {
        if ((stats.mode & 2) !== 0) {
          return "world-writable";
        }
        return "group-writable";
      }
      if (stats.uid !== uid) {
        return `owned by uid ${stats.uid}, current uid is ${uid}`;
      }
      return null;
    }
    __name(getUnsafeStatsReason, "getUnsafeStatsReason");
  }
});

// node_modules/@vercel/cli-exec/dist/lookup.js
var require_lookup = __commonJS({
  "node_modules/@vercel/cli-exec/dist/lookup.js"(exports, module) {
    "use strict";
    init_esm();
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var lookup_exports = {};
    __export(lookup_exports, {
      clearCachedCliInvocation: /* @__PURE__ */ __name(() => clearCachedCliInvocation, "clearCachedCliInvocation"),
      clearVercelCliLookupCache: /* @__PURE__ */ __name(() => clearVercelCliLookupCache2, "clearVercelCliLookupCache"),
      findVercelCli: /* @__PURE__ */ __name(() => findVercelCli2, "findVercelCli"),
      getLocalBinSearch: /* @__PURE__ */ __name(() => getLocalBinSearch, "getLocalBinSearch"),
      resolveCachedCliInvocation: /* @__PURE__ */ __name(() => resolveCachedCliInvocation, "resolveCachedCliInvocation"),
      toVercelCliInvocation: /* @__PURE__ */ __name(() => toVercelCliInvocation, "toVercelCliInvocation")
    });
    module.exports = __toCommonJS(lookup_exports);
    var import_promises = __require("node:fs/promises");
    var import_node_path = __toESM(__require("node:path"));
    var import_envpath = require_envpath();
    var import_errutils = require_errutils();
    var import_fsutils = require_fsutils();
    var import_safety = require_safety();
    var cliInvocationCache = /* @__PURE__ */ new Map();
    async function findVercelCli2(options = {}) {
      const cwd = import_node_path.default.resolve(options.cwd ?? process.cwd());
      const pathValue = options.path ?? (0, import_envpath.getEnvPath)(process.env);
      const resolution = await resolveCachedCliInvocation(cwd, pathValue);
      return resolution.found ? toVercelCliInvocation(resolution) : null;
    }
    __name(findVercelCli2, "findVercelCli");
    function resolveCachedCliInvocation(cwd, pathValue) {
      const cacheKey = getCliInvocationCacheKey(cwd, pathValue);
      if (cliInvocationCache.has(cacheKey)) {
        return cliInvocationCache.get(cacheKey);
      }
      const resolution = resolveCliInvocation(cwd, pathValue).catch((error) => {
        cliInvocationCache.delete(cacheKey);
        throw error;
      });
      cliInvocationCache.set(cacheKey, resolution);
      return resolution;
    }
    __name(resolveCachedCliInvocation, "resolveCachedCliInvocation");
    function toVercelCliInvocation(resolution) {
      return {
        command: resolution.command,
        commandArgs: resolution.commandArgs,
        source: resolution.source
      };
    }
    __name(toVercelCliInvocation, "toVercelCliInvocation");
    function clearVercelCliLookupCache2() {
      cliInvocationCache.clear();
    }
    __name(clearVercelCliLookupCache2, "clearVercelCliLookupCache");
    function clearCachedCliInvocation(cwd, pathValue) {
      cliInvocationCache.delete(getCliInvocationCacheKey(cwd, pathValue));
    }
    __name(clearCachedCliInvocation, "clearCachedCliInvocation");
    async function resolveCliInvocation(cwd, pathValue) {
      const localBinSearch = await getLocalBinSearch(cwd);
      const diagnostics = {
        localBinSearch: localBinSearch.diagnostics,
        skippedLocalBins: []
      };
      const resolvedPath = (0, import_envpath.prependPathEntries)(
        pathValue,
        localBinSearch.directories
      );
      for (const command of getVercelCommandNames()) {
        const resolvedCommand = await findCommandInPath(
          command,
          resolvedPath,
          cwd,
          localBinSearch,
          diagnostics
        );
        if (!resolvedCommand) {
          continue;
        }
        if ((0, import_fsutils.isNodeScript)(resolvedCommand.realPath)) {
          return {
            found: true,
            command: process.execPath,
            commandArgs: [resolvedCommand.realPath],
            source: resolvedCommand.source,
            diagnostics
          };
        }
        return {
          found: true,
          command: resolvedCommand.realPath,
          commandArgs: [],
          source: resolvedCommand.source,
          diagnostics
        };
      }
      return { found: false, diagnostics };
    }
    __name(resolveCliInvocation, "resolveCliInvocation");
    async function findCommandInPath(command, pathValue, cwd, localBinSearch, diagnostics) {
      for (const directory of (0, import_envpath.splitPath)(pathValue)) {
        const candidate = getPathCommandCandidate(directory, command, cwd);
        try {
          const canAccess = await canAccessCommandCandidate(
            candidate,
            localBinSearch,
            diagnostics
          );
          if (canAccess) {
            const resolvedCommand = await resolveCommandCandidate(
              command,
              candidate,
              localBinSearch,
              diagnostics
            );
            if (resolvedCommand) {
              return resolvedCommand;
            }
          }
        } catch {
        }
      }
      return null;
    }
    __name(findCommandInPath, "findCommandInPath");
    function getPathCommandCandidate(directory, command, cwd) {
      const candidateDirectory = import_node_path.default.isAbsolute(directory) ? directory : import_node_path.default.resolve(cwd, directory);
      return import_node_path.default.join(candidateDirectory, command);
    }
    __name(getPathCommandCandidate, "getPathCommandCandidate");
    async function canAccessCommandCandidate(candidate, localBinSearch, diagnostics) {
      try {
        await (0, import_promises.access)(
          candidate,
          process.platform === "win32" ? import_promises.constants.F_OK : import_promises.constants.F_OK | import_promises.constants.X_OK
        );
        return true;
      } catch (error) {
        if (!(0, import_errutils.isMissingPathError)(error)) {
          await recordInaccessibleLocalBinCandidate(
            candidate,
            error,
            localBinSearch,
            diagnostics
          );
        }
        return false;
      }
    }
    __name(canAccessCommandCandidate, "canAccessCommandCandidate");
    async function recordInaccessibleLocalBinCandidate(candidate, error, localBinSearch, diagnostics) {
      const localBinCandidate = await classifyPathLocalBinCandidate(
        candidate,
        localBinSearch.directories
      );
      if (!localBinCandidate) {
        return;
      }
      recordSkippedLocalBin(
        diagnostics,
        candidate,
        "reason" in localBinCandidate ? localBinCandidate.reason : `local bin is not accessible: ${(0, import_errutils.getErrorMessage)(error)}`
      );
    }
    __name(recordInaccessibleLocalBinCandidate, "recordInaccessibleLocalBinCandidate");
    async function resolveCommandCandidate(command, candidate, localBinSearch, diagnostics) {
      if (!(await (0, import_promises.stat)(candidate)).isFile()) {
        return null;
      }
      const realPath = await (0, import_promises.realpath)(candidate);
      const localBinCandidate = await classifyPathLocalBinCandidate(
        candidate,
        localBinSearch.directories
      );
      if (!localBinCandidate) {
        return { realPath, source: "path" };
      }
      if ("reason" in localBinCandidate) {
        recordSkippedLocalBin(diagnostics, candidate, localBinCandidate.reason);
        return null;
      }
      const localPackageBinResult = await getLocalVercelPackageBin(
        command,
        localBinCandidate.directory
      );
      if ("reason" in localPackageBinResult) {
        recordSkippedLocalBin(diagnostics, candidate, localPackageBinResult.reason);
        return null;
      }
      return { realPath: localPackageBinResult.binPath, source: "local-bin" };
    }
    __name(resolveCommandCandidate, "resolveCommandCandidate");
    function recordSkippedLocalBin(diagnostics, candidate, reason) {
      diagnostics.skippedLocalBins.push({ candidate, reason });
    }
    __name(recordSkippedLocalBin, "recordSkippedLocalBin");
    function getVercelCommandNames() {
      const commandBases = ["vercel"];
      if (process.platform !== "win32") {
        return commandBases;
      }
      const extensions = [".cmd", ".exe", ""];
      return commandBases.flatMap(
        (command) => extensions.map((extension) => `${command}${extension}`)
      );
    }
    __name(getVercelCommandNames, "getVercelCommandNames");
    async function getLocalBinSearch(cwd) {
      const searchRoot = await (0, import_fsutils.getCanonicalPath)(import_node_path.default.resolve(cwd));
      const ancestorSearch = await getAncestorDirectorySearch(searchRoot);
      const skippedNodeModules = [];
      const directories = [];
      for (const directory of ancestorSearch.directories) {
        const nodeModulesDirectory = import_node_path.default.join(directory, "node_modules");
        const parentDirectories = ancestorSearch.stopReason === "project-root-marker" ? (0, import_fsutils.getDirectoriesBetween)(ancestorSearch.stoppedAt, directory) : (0, import_fsutils.getDirectoriesBetween)(directory, searchRoot);
        const skippedReason = await (0, import_safety.getSkippedNodeModulesReason)(
          nodeModulesDirectory,
          parentDirectories
        );
        if (skippedReason) {
          skippedNodeModules.push({
            directory: nodeModulesDirectory,
            reason: skippedReason
          });
          continue;
        }
        directories.push(import_node_path.default.join(nodeModulesDirectory, ".bin"));
      }
      return {
        directories,
        diagnostics: {
          searchRoot,
          stoppedAt: ancestorSearch.stoppedAt,
          stopReason: ancestorSearch.stopReason,
          markerPath: ancestorSearch.markerPath,
          skippedNodeModules
        }
      };
    }
    __name(getLocalBinSearch, "getLocalBinSearch");
    async function getAncestorDirectorySearch(cwd) {
      const directories = [];
      let current = import_node_path.default.resolve(cwd);
      while (true) {
        directories.push(current);
        const marker = await getProjectRootMarker(current);
        if (marker) {
          return {
            directories,
            stoppedAt: current,
            stopReason: "project-root-marker",
            markerPath: marker.path
          };
        }
        const parent = import_node_path.default.dirname(current);
        if (parent === current) {
          return {
            directories,
            stoppedAt: current,
            stopReason: "filesystem-root"
          };
        }
        current = parent;
      }
    }
    __name(getAncestorDirectorySearch, "getAncestorDirectorySearch");
    async function getProjectRootMarker(directory) {
      const gitPath = import_node_path.default.join(directory, ".git");
      try {
        await (0, import_promises.stat)(gitPath);
        return { path: gitPath };
      } catch {
      }
      return null;
    }
    __name(getProjectRootMarker, "getProjectRootMarker");
    async function getLocalBinDirectory(filePath, localBinDirectories) {
      const resolvedFilePath = import_node_path.default.resolve(filePath);
      let canonicalFilePath = resolvedFilePath;
      try {
        canonicalFilePath = import_node_path.default.join(
          await (0, import_promises.realpath)(import_node_path.default.dirname(resolvedFilePath)),
          import_node_path.default.basename(resolvedFilePath)
        );
      } catch {
      }
      for (let localBinDirectory of localBinDirectories) {
        try {
          localBinDirectory = await (0, import_promises.realpath)(localBinDirectory);
        } catch {
        }
        if (canonicalFilePath.startsWith(`${localBinDirectory}${import_node_path.default.sep}`)) {
          return localBinDirectory;
        }
      }
      return null;
    }
    __name(getLocalBinDirectory, "getLocalBinDirectory");
    async function getNodeModulesBinDirectory(filePath) {
      const candidateDirectory = import_node_path.default.resolve(import_node_path.default.dirname(filePath));
      const directories = [candidateDirectory];
      try {
        const canonicalDirectory = await (0, import_promises.realpath)(candidateDirectory);
        if (!directories.includes(canonicalDirectory)) {
          directories.push(canonicalDirectory);
        }
      } catch {
      }
      for (const directory of directories) {
        if (import_node_path.default.basename(directory) === ".bin" && import_node_path.default.basename(import_node_path.default.dirname(directory)) === "node_modules") {
          return directory;
        }
      }
      return null;
    }
    __name(getNodeModulesBinDirectory, "getNodeModulesBinDirectory");
    async function classifyPathLocalBinCandidate(filePath, localBinDirectories) {
      const localBinDirectory = await getLocalBinDirectory(
        filePath,
        localBinDirectories
      );
      if (localBinDirectory) {
        return { directory: localBinDirectory };
      }
      const nodeModulesBinDirectory = await getNodeModulesBinDirectory(filePath);
      if (!nodeModulesBinDirectory) {
        return null;
      }
      const nodeModulesDirectory = import_node_path.default.dirname(nodeModulesBinDirectory);
      const skippedReason = await (0, import_safety.getSkippedNodeModulesReason)(nodeModulesDirectory);
      if (skippedReason) {
        return { reason: `local node_modules is ${skippedReason}` };
      }
      return { reason: "local bin is outside project lookup boundary" };
    }
    __name(classifyPathLocalBinCandidate, "classifyPathLocalBinCandidate");
    async function getLocalVercelPackageBin(command, localBinDirectory) {
      const commandBase = (0, import_fsutils.getCommandBase)(command);
      const nodeModulesDirectory = import_node_path.default.dirname(localBinDirectory);
      if (commandBase !== "vercel" || import_node_path.default.basename(nodeModulesDirectory) !== "node_modules") {
        return { reason: "not a local vercel bin" };
      }
      try {
        const localPackage = await getLocalVercelPackage(nodeModulesDirectory);
        if ("reason" in localPackage) {
          return localPackage;
        }
        const packageJsonResult = await readLocalVercelPackageJson(
          localPackage.realPackageDirectory
        );
        if ("reason" in packageJsonResult) {
          return packageJsonResult;
        }
        localPackage.packageJson = packageJsonResult.packageJson;
        return await getDeclaredLocalVercelPackageBin(localPackage, commandBase);
      } catch (error) {
        return {
          reason: `could not validate local vercel package: ${(0, import_errutils.getErrorMessage)(error)}`
        };
      }
    }
    __name(getLocalVercelPackageBin, "getLocalVercelPackageBin");
    async function getLocalVercelPackage(nodeModulesDirectory) {
      const packageDirectory = import_node_path.default.join(nodeModulesDirectory, "vercel");
      const realNodeModulesDirectory = await (0, import_promises.realpath)(nodeModulesDirectory);
      const realPackageDirectory = await (0, import_promises.realpath)(packageDirectory);
      if (!(0, import_fsutils.isSubpath)(realNodeModulesDirectory, realPackageDirectory)) {
        return {
          reason: "local vercel package resolves outside local node_modules"
        };
      }
      const unsafePackageDirectoryReason = await (0, import_safety.getUnsafePackageDirectoryReason)(
        realNodeModulesDirectory,
        realPackageDirectory
      );
      if (unsafePackageDirectoryReason) {
        return {
          reason: `local vercel package is unsafe: ${unsafePackageDirectoryReason}`
        };
      }
      return {
        realNodeModulesDirectory,
        realPackageDirectory,
        packageJson: {}
      };
    }
    __name(getLocalVercelPackage, "getLocalVercelPackage");
    async function readLocalVercelPackageJson(realPackageDirectory) {
      const packageJsonPath = import_node_path.default.join(realPackageDirectory, "package.json");
      const realPackageJsonPath = await (0, import_promises.realpath)(packageJsonPath);
      if (!(0, import_fsutils.isSubpath)(realPackageDirectory, realPackageJsonPath)) {
        return { reason: "local vercel package.json resolves outside package" };
      }
      const unsafePackageJsonReason = await (0, import_safety.getUnsafePackageFileReason)(
        realPackageDirectory,
        realPackageJsonPath
      );
      if (unsafePackageJsonReason) {
        return {
          reason: `local vercel package.json is unsafe: ${unsafePackageJsonReason}`
        };
      }
      const packageJson = JSON.parse(
        await (0, import_promises.readFile)(realPackageJsonPath, "utf8")
      );
      if (packageJson.name !== "vercel") {
        return {
          reason: 'local vercel package.json does not have name "vercel"'
        };
      }
      return { packageJson };
    }
    __name(readLocalVercelPackageJson, "readLocalVercelPackageJson");
    async function getDeclaredLocalVercelPackageBin(localPackage, commandBase) {
      const { packageJson, realNodeModulesDirectory, realPackageDirectory } = localPackage;
      const binTarget = getPackageBinTarget(packageJson, commandBase);
      if (!binTarget) {
        return { reason: "local vercel package does not declare bin.vercel" };
      }
      const declaredBinPath = import_node_path.default.resolve(realPackageDirectory, binTarget);
      const realDeclaredBinPath = await (0, import_promises.realpath)(declaredBinPath);
      if (!(0, import_fsutils.isSubpath)(realPackageDirectory, realDeclaredBinPath)) {
        return { reason: "local vercel package bin resolves outside package" };
      }
      const unsafePackageBinReason = await (0, import_safety.getUnsafePackageBinReason)(
        realNodeModulesDirectory,
        realPackageDirectory,
        realDeclaredBinPath
      );
      if (unsafePackageBinReason) {
        return {
          reason: `local vercel package bin is unsafe: ${unsafePackageBinReason}`
        };
      }
      if (process.platform !== "win32" && !(0, import_fsutils.isNodeScript)(realDeclaredBinPath)) {
        try {
          await (0, import_promises.access)(realDeclaredBinPath, import_promises.constants.F_OK | import_promises.constants.X_OK);
        } catch (error) {
          return {
            reason: `local vercel package bin is not executable: ${(0, import_errutils.getErrorMessage)(error)}`
          };
        }
      }
      return { binPath: realDeclaredBinPath };
    }
    __name(getDeclaredLocalVercelPackageBin, "getDeclaredLocalVercelPackageBin");
    function getPackageBinTarget(packageJson, command) {
      const bin = packageJson.bin;
      if (typeof bin === "string") {
        return command === "vercel" ? bin : null;
      }
      if (bin && typeof bin === "object") {
        const target = bin[command];
        if (typeof target === "string") {
          return target;
        }
      }
      return null;
    }
    __name(getPackageBinTarget, "getPackageBinTarget");
    function getCliInvocationCacheKey(cwd, pathValue) {
      return `${cwd}\0${pathValue}`;
    }
    __name(getCliInvocationCacheKey, "getCliInvocationCacheKey");
  }
});

// node_modules/@vercel/cli-exec/dist/exec.js
var require_exec = __commonJS({
  "node_modules/@vercel/cli-exec/dist/exec.js"(exports, module) {
    "use strict";
    init_esm();
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var exec_exports = {};
    __export(exec_exports, {
      execVercelCli: /* @__PURE__ */ __name(() => execVercelCli2, "execVercelCli")
    });
    module.exports = __toCommonJS(exec_exports);
    var import_node_path = __toESM(__require("node:path"));
    var import_execa = __toESM(require_execa());
    var import_envpath = require_envpath();
    var import_errors = require_errors();
    var import_lookup = require_lookup();
    async function execVercelCli2(args, options = {}) {
      const cwd = import_node_path.default.resolve(options.cwd ?? process.cwd());
      await (0, import_errors.assertValidCwd)(cwd);
      const env = mergeExecEnv(options.env);
      const pathValue = (0, import_envpath.getEnvPath)(env);
      try {
        return await execResolvedVercelCli(args, options, cwd, env, pathValue);
      } catch (error) {
        if (error instanceof import_errors.VercelCliError && error.code === "VERCEL_CLI_NOT_FOUND") {
          (0, import_lookup.clearCachedCliInvocation)(cwd, pathValue);
          return await execResolvedVercelCli(args, options, cwd, env, pathValue);
        }
        throw error;
      }
    }
    __name(execVercelCli2, "execVercelCli");
    async function execResolvedVercelCli(args, options, cwd, env, pathValue) {
      const invocation = await resolveInvocationOrThrow(cwd, pathValue);
      try {
        const execaOptions = {
          input: options.input,
          stdio: options.stdio,
          stdin: options.stdin,
          stdout: options.stdout,
          stderr: options.stderr,
          timeout: options.timeout,
          cwd,
          env: await prependLocalBinsToEnvPath(cwd, env),
          windowsHide: true
        };
        if (options.signal) {
          execaOptions.signal = options.signal;
        }
        const { stdout, stderr } = await (0, import_execa.default)(
          invocation.command,
          [...invocation.commandArgs, ...args],
          execaOptions
        );
        return { stdout, stderr, invocation };
      } catch (error) {
        throw (0, import_errors.toVercelCliError)(invocation, error);
      }
    }
    __name(execResolvedVercelCli, "execResolvedVercelCli");
    async function resolveInvocationOrThrow(cwd, pathValue) {
      const resolution = await (0, import_lookup.resolveCachedCliInvocation)(cwd, pathValue);
      if (!resolution.found) {
        throw new import_errors.VercelCliError({
          code: "VERCEL_CLI_NOT_FOUND",
          message: (0, import_errors.getCliNotFoundMessage)(resolution.diagnostics)
        });
      }
      return (0, import_lookup.toVercelCliInvocation)(resolution);
    }
    __name(resolveInvocationOrThrow, "resolveInvocationOrThrow");
    function mergeExecEnv(env) {
      if (!env) {
        return process.env;
      }
      return { ...process.env, ...env };
    }
    __name(mergeExecEnv, "mergeExecEnv");
    async function prependLocalBinsToEnvPath(cwd, env = process.env) {
      const localPath = await prependLocalBinsToPath(cwd, (0, import_envpath.getEnvPath)(env));
      return (0, import_envpath.setEnvPath)(
        env,
        (0, import_envpath.prependPathEntries)(localPath, [import_node_path.default.dirname(process.execPath)])
      );
    }
    __name(prependLocalBinsToEnvPath, "prependLocalBinsToEnvPath");
    async function prependLocalBinsToPath(cwd, pathValue = "") {
      return (0, import_envpath.prependPathEntries)(
        pathValue,
        (await (0, import_lookup.getLocalBinSearch)(cwd)).directories
      );
    }
    __name(prependLocalBinsToPath, "prependLocalBinsToPath");
  }
});

// node_modules/@vercel/cli-exec/dist/index.js
var require_dist = __commonJS({
  "node_modules/@vercel/cli-exec/dist/index.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export(src_exports, {
      VercelCliError: /* @__PURE__ */ __name(() => import_errors.VercelCliError, "VercelCliError"),
      clearVercelCliLookupCache: /* @__PURE__ */ __name(() => import_lookup.clearVercelCliLookupCache, "clearVercelCliLookupCache"),
      execVercelCli: /* @__PURE__ */ __name(() => import_exec.execVercelCli, "execVercelCli"),
      findVercelCli: /* @__PURE__ */ __name(() => import_lookup.findVercelCli, "findVercelCli")
    });
    module.exports = __toCommonJS(src_exports);
    var import_errors = require_errors();
    var import_exec = require_exec();
    var import_lookup = require_lookup();
  }
});

// node_modules/@vercel/cli-config/dist/types.js
var require_types = __commonJS({
  "node_modules/@vercel/cli-config/dist/types.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_CRED_STORAGE = exports.CRED_STORAGE_VALUES = exports.CRED_STORAGE_CONFIG_VALUES = void 0;
    exports.CRED_STORAGE_CONFIG_VALUES = [
      "auto",
      "file",
      "keyring"
    ];
    exports.CRED_STORAGE_VALUES = exports.CRED_STORAGE_CONFIG_VALUES.filter((storage) => storage !== "auto");
    exports.DEFAULT_CRED_STORAGE = "file";
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/core.cjs
var require_core2 = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/core.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.globalConfig = exports.$ZodEncodeError = exports.$ZodAsyncError = exports.$brand = exports.NEVER = void 0;
    exports.$constructor = $constructor;
    exports.config = config;
    exports.NEVER = Object.freeze({
      status: "aborted"
    });
    function $constructor(name, initializer, params) {
      function init(inst, def) {
        var _a;
        Object.defineProperty(inst, "_zod", {
          value: inst._zod ?? {},
          enumerable: false
        });
        (_a = inst._zod).traits ?? (_a.traits = /* @__PURE__ */ new Set());
        inst._zod.traits.add(name);
        initializer(inst, def);
        for (const k in _.prototype) {
          if (!(k in inst))
            Object.defineProperty(inst, k, { value: _.prototype[k].bind(inst) });
        }
        inst._zod.constr = _;
        inst._zod.def = def;
      }
      __name(init, "init");
      const Parent = params?.Parent ?? Object;
      class Definition extends Parent {
        static {
          __name(this, "Definition");
        }
      }
      Object.defineProperty(Definition, "name", { value: name });
      function _(def) {
        var _a;
        const inst = params?.Parent ? new Definition() : this;
        init(inst, def);
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        for (const fn of inst._zod.deferred) {
          fn();
        }
        return inst;
      }
      __name(_, "_");
      Object.defineProperty(_, "init", { value: init });
      Object.defineProperty(_, Symbol.hasInstance, {
        value: /* @__PURE__ */ __name((inst) => {
          if (params?.Parent && inst instanceof params.Parent)
            return true;
          return inst?._zod?.traits?.has(name);
        }, "value")
      });
      Object.defineProperty(_, "name", { value: name });
      return _;
    }
    __name($constructor, "$constructor");
    exports.$brand = Symbol("zod_brand");
    var $ZodAsyncError = class extends Error {
      static {
        __name(this, "$ZodAsyncError");
      }
      constructor() {
        super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
      }
    };
    exports.$ZodAsyncError = $ZodAsyncError;
    var $ZodEncodeError = class extends Error {
      static {
        __name(this, "$ZodEncodeError");
      }
      constructor(name) {
        super(`Encountered unidirectional transform during encode: ${name}`);
        this.name = "ZodEncodeError";
      }
    };
    exports.$ZodEncodeError = $ZodEncodeError;
    exports.globalConfig = {};
    function config(newConfig) {
      if (newConfig)
        Object.assign(exports.globalConfig, newConfig);
      return exports.globalConfig;
    }
    __name(config, "config");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/util.cjs
var require_util = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/util.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Class = exports.BIGINT_FORMAT_RANGES = exports.NUMBER_FORMAT_RANGES = exports.primitiveTypes = exports.propertyKeyTypes = exports.getParsedType = exports.allowsEval = exports.captureStackTrace = void 0;
    exports.assertEqual = assertEqual;
    exports.assertNotEqual = assertNotEqual;
    exports.assertIs = assertIs;
    exports.assertNever = assertNever;
    exports.assert = assert;
    exports.getEnumValues = getEnumValues;
    exports.joinValues = joinValues;
    exports.jsonStringifyReplacer = jsonStringifyReplacer;
    exports.cached = cached;
    exports.nullish = nullish;
    exports.cleanRegex = cleanRegex;
    exports.floatSafeRemainder = floatSafeRemainder;
    exports.defineLazy = defineLazy;
    exports.objectClone = objectClone;
    exports.assignProp = assignProp;
    exports.mergeDefs = mergeDefs;
    exports.cloneDef = cloneDef;
    exports.getElementAtPath = getElementAtPath;
    exports.promiseAllObject = promiseAllObject;
    exports.randomString = randomString;
    exports.esc = esc;
    exports.isObject = isObject;
    exports.isPlainObject = isPlainObject;
    exports.shallowClone = shallowClone;
    exports.numKeys = numKeys;
    exports.escapeRegex = escapeRegex;
    exports.clone = clone;
    exports.normalizeParams = normalizeParams;
    exports.createTransparentProxy = createTransparentProxy;
    exports.stringifyPrimitive = stringifyPrimitive;
    exports.optionalKeys = optionalKeys;
    exports.pick = pick;
    exports.omit = omit;
    exports.extend = extend;
    exports.safeExtend = safeExtend;
    exports.merge = merge;
    exports.partial = partial;
    exports.required = required;
    exports.aborted = aborted;
    exports.prefixIssues = prefixIssues;
    exports.unwrapMessage = unwrapMessage;
    exports.finalizeIssue = finalizeIssue;
    exports.getSizableOrigin = getSizableOrigin;
    exports.getLengthableOrigin = getLengthableOrigin;
    exports.issue = issue;
    exports.cleanEnum = cleanEnum;
    exports.base64ToUint8Array = base64ToUint8Array;
    exports.uint8ArrayToBase64 = uint8ArrayToBase64;
    exports.base64urlToUint8Array = base64urlToUint8Array;
    exports.uint8ArrayToBase64url = uint8ArrayToBase64url;
    exports.hexToUint8Array = hexToUint8Array;
    exports.uint8ArrayToHex = uint8ArrayToHex;
    function assertEqual(val) {
      return val;
    }
    __name(assertEqual, "assertEqual");
    function assertNotEqual(val) {
      return val;
    }
    __name(assertNotEqual, "assertNotEqual");
    function assertIs(_arg) {
    }
    __name(assertIs, "assertIs");
    function assertNever(_x) {
      throw new Error();
    }
    __name(assertNever, "assertNever");
    function assert(_) {
    }
    __name(assert, "assert");
    function getEnumValues(entries) {
      const numericValues = Object.values(entries).filter((v) => typeof v === "number");
      const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
      return values;
    }
    __name(getEnumValues, "getEnumValues");
    function joinValues(array, separator = "|") {
      return array.map((val) => stringifyPrimitive(val)).join(separator);
    }
    __name(joinValues, "joinValues");
    function jsonStringifyReplacer(_, value) {
      if (typeof value === "bigint")
        return value.toString();
      return value;
    }
    __name(jsonStringifyReplacer, "jsonStringifyReplacer");
    function cached(getter) {
      const set = false;
      return {
        get value() {
          if (!set) {
            const value = getter();
            Object.defineProperty(this, "value", { value });
            return value;
          }
          throw new Error("cached value already set");
        }
      };
    }
    __name(cached, "cached");
    function nullish(input) {
      return input === null || input === void 0;
    }
    __name(nullish, "nullish");
    function cleanRegex(source) {
      const start = source.startsWith("^") ? 1 : 0;
      const end = source.endsWith("$") ? source.length - 1 : source.length;
      return source.slice(start, end);
    }
    __name(cleanRegex, "cleanRegex");
    function floatSafeRemainder(val, step) {
      const valDecCount = (val.toString().split(".")[1] || "").length;
      const stepString = step.toString();
      let stepDecCount = (stepString.split(".")[1] || "").length;
      if (stepDecCount === 0 && /\d?e-\d?/.test(stepString)) {
        const match = stepString.match(/\d?e-(\d?)/);
        if (match?.[1]) {
          stepDecCount = Number.parseInt(match[1]);
        }
      }
      const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
      const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
      const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
      return valInt % stepInt / 10 ** decCount;
    }
    __name(floatSafeRemainder, "floatSafeRemainder");
    var EVALUATING = Symbol("evaluating");
    function defineLazy(object, key, getter) {
      let value = void 0;
      Object.defineProperty(object, key, {
        get() {
          if (value === EVALUATING) {
            return void 0;
          }
          if (value === void 0) {
            value = EVALUATING;
            value = getter();
          }
          return value;
        },
        set(v) {
          Object.defineProperty(object, key, {
            value: v
            // configurable: true,
          });
        },
        configurable: true
      });
    }
    __name(defineLazy, "defineLazy");
    function objectClone(obj) {
      return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
    }
    __name(objectClone, "objectClone");
    function assignProp(target, prop, value) {
      Object.defineProperty(target, prop, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
    __name(assignProp, "assignProp");
    function mergeDefs(...defs) {
      const mergedDescriptors = {};
      for (const def of defs) {
        const descriptors = Object.getOwnPropertyDescriptors(def);
        Object.assign(mergedDescriptors, descriptors);
      }
      return Object.defineProperties({}, mergedDescriptors);
    }
    __name(mergeDefs, "mergeDefs");
    function cloneDef(schema) {
      return mergeDefs(schema._zod.def);
    }
    __name(cloneDef, "cloneDef");
    function getElementAtPath(obj, path) {
      if (!path)
        return obj;
      return path.reduce((acc, key) => acc?.[key], obj);
    }
    __name(getElementAtPath, "getElementAtPath");
    function promiseAllObject(promisesObj) {
      const keys = Object.keys(promisesObj);
      const promises = keys.map((key) => promisesObj[key]);
      return Promise.all(promises).then((results) => {
        const resolvedObj = {};
        for (let i = 0; i < keys.length; i++) {
          resolvedObj[keys[i]] = results[i];
        }
        return resolvedObj;
      });
    }
    __name(promiseAllObject, "promiseAllObject");
    function randomString(length = 10) {
      const chars = "abcdefghijklmnopqrstuvwxyz";
      let str = "";
      for (let i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
      return str;
    }
    __name(randomString, "randomString");
    function esc(str) {
      return JSON.stringify(str);
    }
    __name(esc, "esc");
    exports.captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
    };
    function isObject(data) {
      return typeof data === "object" && data !== null && !Array.isArray(data);
    }
    __name(isObject, "isObject");
    exports.allowsEval = cached(() => {
      if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
        return false;
      }
      try {
        const F = Function;
        new F("");
        return true;
      } catch (_) {
        return false;
      }
    });
    function isPlainObject(o) {
      if (isObject(o) === false)
        return false;
      const ctor = o.constructor;
      if (ctor === void 0)
        return true;
      const prot = ctor.prototype;
      if (isObject(prot) === false)
        return false;
      if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
        return false;
      }
      return true;
    }
    __name(isPlainObject, "isPlainObject");
    function shallowClone(o) {
      if (isPlainObject(o))
        return { ...o };
      if (Array.isArray(o))
        return [...o];
      return o;
    }
    __name(shallowClone, "shallowClone");
    function numKeys(data) {
      let keyCount = 0;
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          keyCount++;
        }
      }
      return keyCount;
    }
    __name(numKeys, "numKeys");
    var getParsedType = /* @__PURE__ */ __name((data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return "undefined";
        case "string":
          return "string";
        case "number":
          return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
          return "boolean";
        case "function":
          return "function";
        case "bigint":
          return "bigint";
        case "symbol":
          return "symbol";
        case "object":
          if (Array.isArray(data)) {
            return "array";
          }
          if (data === null) {
            return "null";
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return "promise";
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return "map";
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return "set";
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return "date";
          }
          if (typeof File !== "undefined" && data instanceof File) {
            return "file";
          }
          return "object";
        default:
          throw new Error(`Unknown data type: ${t}`);
      }
    }, "getParsedType");
    exports.getParsedType = getParsedType;
    exports.propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
    exports.primitiveTypes = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
    function escapeRegex(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    __name(escapeRegex, "escapeRegex");
    function clone(inst, def, params) {
      const cl = new inst._zod.constr(def ?? inst._zod.def);
      if (!def || params?.parent)
        cl._zod.parent = inst;
      return cl;
    }
    __name(clone, "clone");
    function normalizeParams(_params) {
      const params = _params;
      if (!params)
        return {};
      if (typeof params === "string")
        return { error: /* @__PURE__ */ __name(() => params, "error") };
      if (params?.message !== void 0) {
        if (params?.error !== void 0)
          throw new Error("Cannot specify both `message` and `error` params");
        params.error = params.message;
      }
      delete params.message;
      if (typeof params.error === "string")
        return { ...params, error: /* @__PURE__ */ __name(() => params.error, "error") };
      return params;
    }
    __name(normalizeParams, "normalizeParams");
    function createTransparentProxy(getter) {
      let target;
      return new Proxy({}, {
        get(_, prop, receiver) {
          target ?? (target = getter());
          return Reflect.get(target, prop, receiver);
        },
        set(_, prop, value, receiver) {
          target ?? (target = getter());
          return Reflect.set(target, prop, value, receiver);
        },
        has(_, prop) {
          target ?? (target = getter());
          return Reflect.has(target, prop);
        },
        deleteProperty(_, prop) {
          target ?? (target = getter());
          return Reflect.deleteProperty(target, prop);
        },
        ownKeys(_) {
          target ?? (target = getter());
          return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor(_, prop) {
          target ?? (target = getter());
          return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty(_, prop, descriptor) {
          target ?? (target = getter());
          return Reflect.defineProperty(target, prop, descriptor);
        }
      });
    }
    __name(createTransparentProxy, "createTransparentProxy");
    function stringifyPrimitive(value) {
      if (typeof value === "bigint")
        return value.toString() + "n";
      if (typeof value === "string")
        return `"${value}"`;
      return `${value}`;
    }
    __name(stringifyPrimitive, "stringifyPrimitive");
    function optionalKeys(shape) {
      return Object.keys(shape).filter((k) => {
        return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
      });
    }
    __name(optionalKeys, "optionalKeys");
    exports.NUMBER_FORMAT_RANGES = {
      safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
      int32: [-2147483648, 2147483647],
      uint32: [0, 4294967295],
      float32: [-34028234663852886e22, 34028234663852886e22],
      float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
    };
    exports.BIGINT_FORMAT_RANGES = {
      int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
      uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
    };
    function pick(schema, mask) {
      const currDef = schema._zod.def;
      const def = mergeDefs(schema._zod.def, {
        get shape() {
          const newShape = {};
          for (const key in mask) {
            if (!(key in currDef.shape)) {
              throw new Error(`Unrecognized key: "${key}"`);
            }
            if (!mask[key])
              continue;
            newShape[key] = currDef.shape[key];
          }
          assignProp(this, "shape", newShape);
          return newShape;
        },
        checks: []
      });
      return clone(schema, def);
    }
    __name(pick, "pick");
    function omit(schema, mask) {
      const currDef = schema._zod.def;
      const def = mergeDefs(schema._zod.def, {
        get shape() {
          const newShape = { ...schema._zod.def.shape };
          for (const key in mask) {
            if (!(key in currDef.shape)) {
              throw new Error(`Unrecognized key: "${key}"`);
            }
            if (!mask[key])
              continue;
            delete newShape[key];
          }
          assignProp(this, "shape", newShape);
          return newShape;
        },
        checks: []
      });
      return clone(schema, def);
    }
    __name(omit, "omit");
    function extend(schema, shape) {
      if (!isPlainObject(shape)) {
        throw new Error("Invalid input to extend: expected a plain object");
      }
      const checks = schema._zod.def.checks;
      const hasChecks = checks && checks.length > 0;
      if (hasChecks) {
        throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
      }
      const def = mergeDefs(schema._zod.def, {
        get shape() {
          const _shape = { ...schema._zod.def.shape, ...shape };
          assignProp(this, "shape", _shape);
          return _shape;
        },
        checks: []
      });
      return clone(schema, def);
    }
    __name(extend, "extend");
    function safeExtend(schema, shape) {
      if (!isPlainObject(shape)) {
        throw new Error("Invalid input to safeExtend: expected a plain object");
      }
      const def = {
        ...schema._zod.def,
        get shape() {
          const _shape = { ...schema._zod.def.shape, ...shape };
          assignProp(this, "shape", _shape);
          return _shape;
        },
        checks: schema._zod.def.checks
      };
      return clone(schema, def);
    }
    __name(safeExtend, "safeExtend");
    function merge(a, b) {
      const def = mergeDefs(a._zod.def, {
        get shape() {
          const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
          assignProp(this, "shape", _shape);
          return _shape;
        },
        get catchall() {
          return b._zod.def.catchall;
        },
        checks: []
        // delete existing checks
      });
      return clone(a, def);
    }
    __name(merge, "merge");
    function partial(Class2, schema, mask) {
      const def = mergeDefs(schema._zod.def, {
        get shape() {
          const oldShape = schema._zod.def.shape;
          const shape = { ...oldShape };
          if (mask) {
            for (const key in mask) {
              if (!(key in oldShape)) {
                throw new Error(`Unrecognized key: "${key}"`);
              }
              if (!mask[key])
                continue;
              shape[key] = Class2 ? new Class2({
                type: "optional",
                innerType: oldShape[key]
              }) : oldShape[key];
            }
          } else {
            for (const key in oldShape) {
              shape[key] = Class2 ? new Class2({
                type: "optional",
                innerType: oldShape[key]
              }) : oldShape[key];
            }
          }
          assignProp(this, "shape", shape);
          return shape;
        },
        checks: []
      });
      return clone(schema, def);
    }
    __name(partial, "partial");
    function required(Class2, schema, mask) {
      const def = mergeDefs(schema._zod.def, {
        get shape() {
          const oldShape = schema._zod.def.shape;
          const shape = { ...oldShape };
          if (mask) {
            for (const key in mask) {
              if (!(key in shape)) {
                throw new Error(`Unrecognized key: "${key}"`);
              }
              if (!mask[key])
                continue;
              shape[key] = new Class2({
                type: "nonoptional",
                innerType: oldShape[key]
              });
            }
          } else {
            for (const key in oldShape) {
              shape[key] = new Class2({
                type: "nonoptional",
                innerType: oldShape[key]
              });
            }
          }
          assignProp(this, "shape", shape);
          return shape;
        },
        checks: []
      });
      return clone(schema, def);
    }
    __name(required, "required");
    function aborted(x, startIndex = 0) {
      if (x.aborted === true)
        return true;
      for (let i = startIndex; i < x.issues.length; i++) {
        if (x.issues[i]?.continue !== true) {
          return true;
        }
      }
      return false;
    }
    __name(aborted, "aborted");
    function prefixIssues(path, issues) {
      return issues.map((iss) => {
        var _a;
        (_a = iss).path ?? (_a.path = []);
        iss.path.unshift(path);
        return iss;
      });
    }
    __name(prefixIssues, "prefixIssues");
    function unwrapMessage(message) {
      return typeof message === "string" ? message : message?.message;
    }
    __name(unwrapMessage, "unwrapMessage");
    function finalizeIssue(iss, ctx, config) {
      const full = { ...iss, path: iss.path ?? [] };
      if (!iss.message) {
        const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
        full.message = message;
      }
      delete full.inst;
      delete full.continue;
      if (!ctx?.reportInput) {
        delete full.input;
      }
      return full;
    }
    __name(finalizeIssue, "finalizeIssue");
    function getSizableOrigin(input) {
      if (input instanceof Set)
        return "set";
      if (input instanceof Map)
        return "map";
      if (input instanceof File)
        return "file";
      return "unknown";
    }
    __name(getSizableOrigin, "getSizableOrigin");
    function getLengthableOrigin(input) {
      if (Array.isArray(input))
        return "array";
      if (typeof input === "string")
        return "string";
      return "unknown";
    }
    __name(getLengthableOrigin, "getLengthableOrigin");
    function issue(...args) {
      const [iss, input, inst] = args;
      if (typeof iss === "string") {
        return {
          message: iss,
          code: "custom",
          input,
          inst
        };
      }
      return { ...iss };
    }
    __name(issue, "issue");
    function cleanEnum(obj) {
      return Object.entries(obj).filter(([k, _]) => {
        return Number.isNaN(Number.parseInt(k, 10));
      }).map((el) => el[1]);
    }
    __name(cleanEnum, "cleanEnum");
    function base64ToUint8Array(base64) {
      const binaryString = atob(base64);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes;
    }
    __name(base64ToUint8Array, "base64ToUint8Array");
    function uint8ArrayToBase64(bytes) {
      let binaryString = "";
      for (let i = 0; i < bytes.length; i++) {
        binaryString += String.fromCharCode(bytes[i]);
      }
      return btoa(binaryString);
    }
    __name(uint8ArrayToBase64, "uint8ArrayToBase64");
    function base64urlToUint8Array(base64url) {
      const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
      const padding = "=".repeat((4 - base64.length % 4) % 4);
      return base64ToUint8Array(base64 + padding);
    }
    __name(base64urlToUint8Array, "base64urlToUint8Array");
    function uint8ArrayToBase64url(bytes) {
      return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }
    __name(uint8ArrayToBase64url, "uint8ArrayToBase64url");
    function hexToUint8Array(hex) {
      const cleanHex = hex.replace(/^0x/, "");
      if (cleanHex.length % 2 !== 0) {
        throw new Error("Invalid hex string length");
      }
      const bytes = new Uint8Array(cleanHex.length / 2);
      for (let i = 0; i < cleanHex.length; i += 2) {
        bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
      }
      return bytes;
    }
    __name(hexToUint8Array, "hexToUint8Array");
    function uint8ArrayToHex(bytes) {
      return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
    }
    __name(uint8ArrayToHex, "uint8ArrayToHex");
    var Class = class {
      static {
        __name(this, "Class");
      }
      constructor(..._args) {
      }
    };
    exports.Class = Class;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/errors.cjs
var require_errors2 = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/errors.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.$ZodRealError = exports.$ZodError = void 0;
    exports.flattenError = flattenError;
    exports.formatError = formatError;
    exports.treeifyError = treeifyError;
    exports.toDotPath = toDotPath;
    exports.prettifyError = prettifyError;
    var core_js_1 = require_core2();
    var util = __importStar(require_util());
    var initializer = /* @__PURE__ */ __name((inst, def) => {
      inst.name = "$ZodError";
      Object.defineProperty(inst, "_zod", {
        value: inst._zod,
        enumerable: false
      });
      Object.defineProperty(inst, "issues", {
        value: def,
        enumerable: false
      });
      inst.message = JSON.stringify(def, util.jsonStringifyReplacer, 2);
      Object.defineProperty(inst, "toString", {
        value: /* @__PURE__ */ __name(() => inst.message, "value"),
        enumerable: false
      });
    }, "initializer");
    exports.$ZodError = (0, core_js_1.$constructor)("$ZodError", initializer);
    exports.$ZodRealError = (0, core_js_1.$constructor)("$ZodError", initializer, { Parent: Error });
    function flattenError(error, mapper = (issue) => issue.message) {
      const fieldErrors = {};
      const formErrors = [];
      for (const sub of error.issues) {
        if (sub.path.length > 0) {
          fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
          fieldErrors[sub.path[0]].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    __name(flattenError, "flattenError");
    function formatError(error, _mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const fieldErrors = { _errors: [] };
      const processError = /* @__PURE__ */ __name((error2) => {
        for (const issue of error2.issues) {
          if (issue.code === "invalid_union" && issue.errors.length) {
            issue.errors.map((issues) => processError({ issues }));
          } else if (issue.code === "invalid_key") {
            processError({ issues: issue.issues });
          } else if (issue.code === "invalid_element") {
            processError({ issues: issue.issues });
          } else if (issue.path.length === 0) {
            fieldErrors._errors.push(mapper(issue));
          } else {
            let curr = fieldErrors;
            let i = 0;
            while (i < issue.path.length) {
              const el = issue.path[i];
              const terminal = i === issue.path.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue));
              }
              curr = curr[el];
              i++;
            }
          }
        }
      }, "processError");
      processError(error);
      return fieldErrors;
    }
    __name(formatError, "formatError");
    function treeifyError(error, _mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const result = { errors: [] };
      const processError = /* @__PURE__ */ __name((error2, path = []) => {
        var _a, _b;
        for (const issue of error2.issues) {
          if (issue.code === "invalid_union" && issue.errors.length) {
            issue.errors.map((issues) => processError({ issues }, issue.path));
          } else if (issue.code === "invalid_key") {
            processError({ issues: issue.issues }, issue.path);
          } else if (issue.code === "invalid_element") {
            processError({ issues: issue.issues }, issue.path);
          } else {
            const fullpath = [...path, ...issue.path];
            if (fullpath.length === 0) {
              result.errors.push(mapper(issue));
              continue;
            }
            let curr = result;
            let i = 0;
            while (i < fullpath.length) {
              const el = fullpath[i];
              const terminal = i === fullpath.length - 1;
              if (typeof el === "string") {
                curr.properties ?? (curr.properties = {});
                (_a = curr.properties)[el] ?? (_a[el] = { errors: [] });
                curr = curr.properties[el];
              } else {
                curr.items ?? (curr.items = []);
                (_b = curr.items)[el] ?? (_b[el] = { errors: [] });
                curr = curr.items[el];
              }
              if (terminal) {
                curr.errors.push(mapper(issue));
              }
              i++;
            }
          }
        }
      }, "processError");
      processError(error);
      return result;
    }
    __name(treeifyError, "treeifyError");
    function toDotPath(_path) {
      const segs = [];
      const path = _path.map((seg) => typeof seg === "object" ? seg.key : seg);
      for (const seg of path) {
        if (typeof seg === "number")
          segs.push(`[${seg}]`);
        else if (typeof seg === "symbol")
          segs.push(`[${JSON.stringify(String(seg))}]`);
        else if (/[^\w$]/.test(seg))
          segs.push(`[${JSON.stringify(seg)}]`);
        else {
          if (segs.length)
            segs.push(".");
          segs.push(seg);
        }
      }
      return segs.join("");
    }
    __name(toDotPath, "toDotPath");
    function prettifyError(error) {
      const lines = [];
      const issues = [...error.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
      for (const issue of issues) {
        lines.push(`✖ ${issue.message}`);
        if (issue.path?.length)
          lines.push(`  → at ${toDotPath(issue.path)}`);
      }
      return lines.join("\n");
    }
    __name(prettifyError, "prettifyError");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/parse.cjs
var require_parse2 = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/parse.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.safeDecodeAsync = exports._safeDecodeAsync = exports.safeEncodeAsync = exports._safeEncodeAsync = exports.safeDecode = exports._safeDecode = exports.safeEncode = exports._safeEncode = exports.decodeAsync = exports._decodeAsync = exports.encodeAsync = exports._encodeAsync = exports.decode = exports._decode = exports.encode = exports._encode = exports.safeParseAsync = exports._safeParseAsync = exports.safeParse = exports._safeParse = exports.parseAsync = exports._parseAsync = exports.parse = exports._parse = void 0;
    var core = __importStar(require_core2());
    var errors = __importStar(require_errors2());
    var util = __importStar(require_util());
    var _parse = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx, _params) => {
      const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
      const result = schema._zod.run({ value, issues: [] }, ctx);
      if (result instanceof Promise) {
        throw new core.$ZodAsyncError();
      }
      if (result.issues.length) {
        const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())));
        util.captureStackTrace(e, _params?.callee);
        throw e;
      }
      return result.value;
    }, "_parse");
    exports._parse = _parse;
    exports.parse = (0, exports._parse)(errors.$ZodRealError);
    var _parseAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx, params) => {
      const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
      let result = schema._zod.run({ value, issues: [] }, ctx);
      if (result instanceof Promise)
        result = await result;
      if (result.issues.length) {
        const e = new (params?.Err ?? _Err)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())));
        util.captureStackTrace(e, params?.callee);
        throw e;
      }
      return result.value;
    }, "_parseAsync");
    exports._parseAsync = _parseAsync;
    exports.parseAsync = (0, exports._parseAsync)(errors.$ZodRealError);
    var _safeParse = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx) => {
      const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
      const result = schema._zod.run({ value, issues: [] }, ctx);
      if (result instanceof Promise) {
        throw new core.$ZodAsyncError();
      }
      return result.issues.length ? {
        success: false,
        error: new (_Err ?? errors.$ZodError)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())))
      } : { success: true, data: result.value };
    }, "_safeParse");
    exports._safeParse = _safeParse;
    exports.safeParse = (0, exports._safeParse)(errors.$ZodRealError);
    var _safeParseAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx) => {
      const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
      let result = schema._zod.run({ value, issues: [] }, ctx);
      if (result instanceof Promise)
        result = await result;
      return result.issues.length ? {
        success: false,
        error: new _Err(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())))
      } : { success: true, data: result.value };
    }, "_safeParseAsync");
    exports._safeParseAsync = _safeParseAsync;
    exports.safeParseAsync = (0, exports._safeParseAsync)(errors.$ZodRealError);
    var _encode = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx) => {
      const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
      return (0, exports._parse)(_Err)(schema, value, ctx);
    }, "_encode");
    exports._encode = _encode;
    exports.encode = (0, exports._encode)(errors.$ZodRealError);
    var _decode = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx) => {
      return (0, exports._parse)(_Err)(schema, value, _ctx);
    }, "_decode");
    exports._decode = _decode;
    exports.decode = (0, exports._decode)(errors.$ZodRealError);
    var _encodeAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx) => {
      const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
      return (0, exports._parseAsync)(_Err)(schema, value, ctx);
    }, "_encodeAsync");
    exports._encodeAsync = _encodeAsync;
    exports.encodeAsync = (0, exports._encodeAsync)(errors.$ZodRealError);
    var _decodeAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx) => {
      return (0, exports._parseAsync)(_Err)(schema, value, _ctx);
    }, "_decodeAsync");
    exports._decodeAsync = _decodeAsync;
    exports.decodeAsync = (0, exports._decodeAsync)(errors.$ZodRealError);
    var _safeEncode = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx) => {
      const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
      return (0, exports._safeParse)(_Err)(schema, value, ctx);
    }, "_safeEncode");
    exports._safeEncode = _safeEncode;
    exports.safeEncode = (0, exports._safeEncode)(errors.$ZodRealError);
    var _safeDecode = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx) => {
      return (0, exports._safeParse)(_Err)(schema, value, _ctx);
    }, "_safeDecode");
    exports._safeDecode = _safeDecode;
    exports.safeDecode = (0, exports._safeDecode)(errors.$ZodRealError);
    var _safeEncodeAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx) => {
      const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
      return (0, exports._safeParseAsync)(_Err)(schema, value, ctx);
    }, "_safeEncodeAsync");
    exports._safeEncodeAsync = _safeEncodeAsync;
    exports.safeEncodeAsync = (0, exports._safeEncodeAsync)(errors.$ZodRealError);
    var _safeDecodeAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx) => {
      return (0, exports._safeParseAsync)(_Err)(schema, value, _ctx);
    }, "_safeDecodeAsync");
    exports._safeDecodeAsync = _safeDecodeAsync;
    exports.safeDecodeAsync = (0, exports._safeDecodeAsync)(errors.$ZodRealError);
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/regexes.cjs
var require_regexes = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/regexes.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sha384_base64 = exports.sha384_hex = exports.sha256_base64url = exports.sha256_base64 = exports.sha256_hex = exports.sha1_base64url = exports.sha1_base64 = exports.sha1_hex = exports.md5_base64url = exports.md5_base64 = exports.md5_hex = exports.hex = exports.uppercase = exports.lowercase = exports.undefined = exports.null = exports.boolean = exports.number = exports.integer = exports.bigint = exports.string = exports.date = exports.e164 = exports.domain = exports.hostname = exports.base64url = exports.base64 = exports.cidrv6 = exports.cidrv4 = exports.ipv6 = exports.ipv4 = exports.browserEmail = exports.idnEmail = exports.unicodeEmail = exports.rfc5322Email = exports.html5Email = exports.email = exports.uuid7 = exports.uuid6 = exports.uuid4 = exports.uuid = exports.guid = exports.extendedDuration = exports.duration = exports.nanoid = exports.ksuid = exports.xid = exports.ulid = exports.cuid2 = exports.cuid = void 0;
    exports.sha512_base64url = exports.sha512_base64 = exports.sha512_hex = exports.sha384_base64url = void 0;
    exports.emoji = emoji;
    exports.time = time;
    exports.datetime = datetime;
    exports.cuid = /^[cC][^\s-]{8,}$/;
    exports.cuid2 = /^[0-9a-z]+$/;
    exports.ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
    exports.xid = /^[0-9a-vA-V]{20}$/;
    exports.ksuid = /^[A-Za-z0-9]{27}$/;
    exports.nanoid = /^[a-zA-Z0-9_-]{21}$/;
    exports.duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
    exports.extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    exports.guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
    var uuid = /* @__PURE__ */ __name((version) => {
      if (!version)
        return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
      return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
    }, "uuid");
    exports.uuid = uuid;
    exports.uuid4 = (0, exports.uuid)(4);
    exports.uuid6 = (0, exports.uuid)(6);
    exports.uuid7 = (0, exports.uuid)(7);
    exports.email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
    exports.html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    exports.rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    exports.unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
    exports.idnEmail = exports.unicodeEmail;
    exports.browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    function emoji() {
      return new RegExp(_emoji, "u");
    }
    __name(emoji, "emoji");
    exports.ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    exports.ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
    exports.cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
    exports.cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    exports.base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
    exports.base64url = /^[A-Za-z0-9_-]*$/;
    exports.hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
    exports.domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    exports.e164 = /^\+(?:[0-9]){6,14}[0-9]$/;
    var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
    exports.date = new RegExp(`^${dateSource}$`);
    function timeSource(args) {
      const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
      const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
      return regex;
    }
    __name(timeSource, "timeSource");
    function time(args) {
      return new RegExp(`^${timeSource(args)}$`);
    }
    __name(time, "time");
    function datetime(args) {
      const time2 = timeSource({ precision: args.precision });
      const opts = ["Z"];
      if (args.local)
        opts.push("");
      if (args.offset)
        opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
      const timeRegex = `${time2}(?:${opts.join("|")})`;
      return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
    }
    __name(datetime, "datetime");
    var string = /* @__PURE__ */ __name((params) => {
      const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
      return new RegExp(`^${regex}$`);
    }, "string");
    exports.string = string;
    exports.bigint = /^-?\d+n?$/;
    exports.integer = /^-?\d+$/;
    exports.number = /^-?\d+(?:\.\d+)?/;
    exports.boolean = /^(?:true|false)$/i;
    var _null = /^null$/i;
    exports.null = _null;
    var _undefined = /^undefined$/i;
    exports.undefined = _undefined;
    exports.lowercase = /^[^A-Z]*$/;
    exports.uppercase = /^[^a-z]*$/;
    exports.hex = /^[0-9a-fA-F]*$/;
    function fixedBase64(bodyLength, padding) {
      return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
    }
    __name(fixedBase64, "fixedBase64");
    function fixedBase64url(length) {
      return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
    }
    __name(fixedBase64url, "fixedBase64url");
    exports.md5_hex = /^[0-9a-fA-F]{32}$/;
    exports.md5_base64 = fixedBase64(22, "==");
    exports.md5_base64url = fixedBase64url(22);
    exports.sha1_hex = /^[0-9a-fA-F]{40}$/;
    exports.sha1_base64 = fixedBase64(27, "=");
    exports.sha1_base64url = fixedBase64url(27);
    exports.sha256_hex = /^[0-9a-fA-F]{64}$/;
    exports.sha256_base64 = fixedBase64(43, "=");
    exports.sha256_base64url = fixedBase64url(43);
    exports.sha384_hex = /^[0-9a-fA-F]{96}$/;
    exports.sha384_base64 = fixedBase64(64, "");
    exports.sha384_base64url = fixedBase64url(64);
    exports.sha512_hex = /^[0-9a-fA-F]{128}$/;
    exports.sha512_base64 = fixedBase64(86, "==");
    exports.sha512_base64url = fixedBase64url(86);
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/checks.cjs
var require_checks = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/checks.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.$ZodCheckOverwrite = exports.$ZodCheckMimeType = exports.$ZodCheckProperty = exports.$ZodCheckEndsWith = exports.$ZodCheckStartsWith = exports.$ZodCheckIncludes = exports.$ZodCheckUpperCase = exports.$ZodCheckLowerCase = exports.$ZodCheckRegex = exports.$ZodCheckStringFormat = exports.$ZodCheckLengthEquals = exports.$ZodCheckMinLength = exports.$ZodCheckMaxLength = exports.$ZodCheckSizeEquals = exports.$ZodCheckMinSize = exports.$ZodCheckMaxSize = exports.$ZodCheckBigIntFormat = exports.$ZodCheckNumberFormat = exports.$ZodCheckMultipleOf = exports.$ZodCheckGreaterThan = exports.$ZodCheckLessThan = exports.$ZodCheck = void 0;
    var core = __importStar(require_core2());
    var regexes = __importStar(require_regexes());
    var util = __importStar(require_util());
    exports.$ZodCheck = core.$constructor("$ZodCheck", (inst, def) => {
      var _a;
      inst._zod ?? (inst._zod = {});
      inst._zod.def = def;
      (_a = inst._zod).onattach ?? (_a.onattach = []);
    });
    var numericOriginMap = {
      number: "number",
      bigint: "bigint",
      object: "date"
    };
    exports.$ZodCheckLessThan = core.$constructor("$ZodCheckLessThan", (inst, def) => {
      exports.$ZodCheck.init(inst, def);
      const origin = numericOriginMap[typeof def.value];
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        if (def.value < curr) {
          if (def.inclusive)
            bag.maximum = def.value;
          else
            bag.exclusiveMaximum = def.value;
        }
      });
      inst._zod.check = (payload) => {
        if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
          return;
        }
        payload.issues.push({
          origin,
          code: "too_big",
          maximum: def.value,
          input: payload.value,
          inclusive: def.inclusive,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckGreaterThan = core.$constructor("$ZodCheckGreaterThan", (inst, def) => {
      exports.$ZodCheck.init(inst, def);
      const origin = numericOriginMap[typeof def.value];
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        if (def.value > curr) {
          if (def.inclusive)
            bag.minimum = def.value;
          else
            bag.exclusiveMinimum = def.value;
        }
      });
      inst._zod.check = (payload) => {
        if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
          return;
        }
        payload.issues.push({
          origin,
          code: "too_small",
          minimum: def.value,
          input: payload.value,
          inclusive: def.inclusive,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckMultipleOf = /* @__PURE__ */ core.$constructor("$ZodCheckMultipleOf", (inst, def) => {
      exports.$ZodCheck.init(inst, def);
      inst._zod.onattach.push((inst2) => {
        var _a;
        (_a = inst2._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
      });
      inst._zod.check = (payload) => {
        if (typeof payload.value !== typeof def.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : util.floatSafeRemainder(payload.value, def.value) === 0;
        if (isMultiple)
          return;
        payload.issues.push({
          origin: typeof payload.value,
          code: "not_multiple_of",
          divisor: def.value,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckNumberFormat = core.$constructor("$ZodCheckNumberFormat", (inst, def) => {
      exports.$ZodCheck.init(inst, def);
      def.format = def.format || "float64";
      const isInt = def.format?.includes("int");
      const origin = isInt ? "int" : "number";
      const [minimum, maximum] = util.NUMBER_FORMAT_RANGES[def.format];
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
        if (isInt)
          bag.pattern = regexes.integer;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        if (isInt) {
          if (!Number.isInteger(input)) {
            payload.issues.push({
              expected: origin,
              format: def.format,
              code: "invalid_type",
              continue: false,
              input,
              inst
            });
            return;
          }
          if (!Number.isSafeInteger(input)) {
            if (input > 0) {
              payload.issues.push({
                input,
                code: "too_big",
                maximum: Number.MAX_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst,
                origin,
                continue: !def.abort
              });
            } else {
              payload.issues.push({
                input,
                code: "too_small",
                minimum: Number.MIN_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst,
                origin,
                continue: !def.abort
              });
            }
            return;
          }
        }
        if (input < minimum) {
          payload.issues.push({
            origin: "number",
            input,
            code: "too_small",
            minimum,
            inclusive: true,
            inst,
            continue: !def.abort
          });
        }
        if (input > maximum) {
          payload.issues.push({
            origin: "number",
            input,
            code: "too_big",
            maximum,
            inst
          });
        }
      };
    });
    exports.$ZodCheckBigIntFormat = core.$constructor("$ZodCheckBigIntFormat", (inst, def) => {
      exports.$ZodCheck.init(inst, def);
      const [minimum, maximum] = util.BIGINT_FORMAT_RANGES[def.format];
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        if (input < minimum) {
          payload.issues.push({
            origin: "bigint",
            input,
            code: "too_small",
            minimum,
            inclusive: true,
            inst,
            continue: !def.abort
          });
        }
        if (input > maximum) {
          payload.issues.push({
            origin: "bigint",
            input,
            code: "too_big",
            maximum,
            inst
          });
        }
      };
    });
    exports.$ZodCheckMaxSize = core.$constructor("$ZodCheckMaxSize", (inst, def) => {
      var _a;
      exports.$ZodCheck.init(inst, def);
      (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.size !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (def.maximum < curr)
          inst2._zod.bag.maximum = def.maximum;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size <= def.maximum)
          return;
        payload.issues.push({
          origin: util.getSizableOrigin(input),
          code: "too_big",
          maximum: def.maximum,
          inclusive: true,
          input,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckMinSize = core.$constructor("$ZodCheckMinSize", (inst, def) => {
      var _a;
      exports.$ZodCheck.init(inst, def);
      (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.size !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (def.minimum > curr)
          inst2._zod.bag.minimum = def.minimum;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size >= def.minimum)
          return;
        payload.issues.push({
          origin: util.getSizableOrigin(input),
          code: "too_small",
          minimum: def.minimum,
          inclusive: true,
          input,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckSizeEquals = core.$constructor("$ZodCheckSizeEquals", (inst, def) => {
      var _a;
      exports.$ZodCheck.init(inst, def);
      (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.size !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.minimum = def.size;
        bag.maximum = def.size;
        bag.size = def.size;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size === def.size)
          return;
        const tooBig = size > def.size;
        payload.issues.push({
          origin: util.getSizableOrigin(input),
          ...tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size },
          inclusive: true,
          exact: true,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckMaxLength = core.$constructor("$ZodCheckMaxLength", (inst, def) => {
      var _a;
      exports.$ZodCheck.init(inst, def);
      (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.length !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (def.maximum < curr)
          inst2._zod.bag.maximum = def.maximum;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const length = input.length;
        if (length <= def.maximum)
          return;
        const origin = util.getLengthableOrigin(input);
        payload.issues.push({
          origin,
          code: "too_big",
          maximum: def.maximum,
          inclusive: true,
          input,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckMinLength = core.$constructor("$ZodCheckMinLength", (inst, def) => {
      var _a;
      exports.$ZodCheck.init(inst, def);
      (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.length !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (def.minimum > curr)
          inst2._zod.bag.minimum = def.minimum;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const length = input.length;
        if (length >= def.minimum)
          return;
        const origin = util.getLengthableOrigin(input);
        payload.issues.push({
          origin,
          code: "too_small",
          minimum: def.minimum,
          inclusive: true,
          input,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckLengthEquals = core.$constructor("$ZodCheckLengthEquals", (inst, def) => {
      var _a;
      exports.$ZodCheck.init(inst, def);
      (_a = inst._zod.def).when ?? (_a.when = (payload) => {
        const val = payload.value;
        return !util.nullish(val) && val.length !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.minimum = def.length;
        bag.maximum = def.length;
        bag.length = def.length;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const length = input.length;
        if (length === def.length)
          return;
        const origin = util.getLengthableOrigin(input);
        const tooBig = length > def.length;
        payload.issues.push({
          origin,
          ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
          inclusive: true,
          exact: true,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckStringFormat = core.$constructor("$ZodCheckStringFormat", (inst, def) => {
      var _a, _b;
      exports.$ZodCheck.init(inst, def);
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.format = def.format;
        if (def.pattern) {
          bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
          bag.patterns.add(def.pattern);
        }
      });
      if (def.pattern)
        (_a = inst._zod).check ?? (_a.check = (payload) => {
          def.pattern.lastIndex = 0;
          if (def.pattern.test(payload.value))
            return;
          payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: def.format,
            input: payload.value,
            ...def.pattern ? { pattern: def.pattern.toString() } : {},
            inst,
            continue: !def.abort
          });
        });
      else
        (_b = inst._zod).check ?? (_b.check = () => {
        });
    });
    exports.$ZodCheckRegex = core.$constructor("$ZodCheckRegex", (inst, def) => {
      exports.$ZodCheckStringFormat.init(inst, def);
      inst._zod.check = (payload) => {
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "regex",
          input: payload.value,
          pattern: def.pattern.toString(),
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckLowerCase = core.$constructor("$ZodCheckLowerCase", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.lowercase);
      exports.$ZodCheckStringFormat.init(inst, def);
    });
    exports.$ZodCheckUpperCase = core.$constructor("$ZodCheckUpperCase", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.uppercase);
      exports.$ZodCheckStringFormat.init(inst, def);
    });
    exports.$ZodCheckIncludes = core.$constructor("$ZodCheckIncludes", (inst, def) => {
      exports.$ZodCheck.init(inst, def);
      const escapedRegex = util.escapeRegex(def.includes);
      const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
      def.pattern = pattern;
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
        bag.patterns.add(pattern);
      });
      inst._zod.check = (payload) => {
        if (payload.value.includes(def.includes, def.position))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "includes",
          includes: def.includes,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckStartsWith = core.$constructor("$ZodCheckStartsWith", (inst, def) => {
      exports.$ZodCheck.init(inst, def);
      const pattern = new RegExp(`^${util.escapeRegex(def.prefix)}.*`);
      def.pattern ?? (def.pattern = pattern);
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
        bag.patterns.add(pattern);
      });
      inst._zod.check = (payload) => {
        if (payload.value.startsWith(def.prefix))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "starts_with",
          prefix: def.prefix,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckEndsWith = core.$constructor("$ZodCheckEndsWith", (inst, def) => {
      exports.$ZodCheck.init(inst, def);
      const pattern = new RegExp(`.*${util.escapeRegex(def.suffix)}$`);
      def.pattern ?? (def.pattern = pattern);
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
        bag.patterns.add(pattern);
      });
      inst._zod.check = (payload) => {
        if (payload.value.endsWith(def.suffix))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "ends_with",
          suffix: def.suffix,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    function handleCheckPropertyResult(result, payload, property) {
      if (result.issues.length) {
        payload.issues.push(...util.prefixIssues(property, result.issues));
      }
    }
    __name(handleCheckPropertyResult, "handleCheckPropertyResult");
    exports.$ZodCheckProperty = core.$constructor("$ZodCheckProperty", (inst, def) => {
      exports.$ZodCheck.init(inst, def);
      inst._zod.check = (payload) => {
        const result = def.schema._zod.run({
          value: payload.value[def.property],
          issues: []
        }, {});
        if (result instanceof Promise) {
          return result.then((result2) => handleCheckPropertyResult(result2, payload, def.property));
        }
        handleCheckPropertyResult(result, payload, def.property);
        return;
      };
    });
    exports.$ZodCheckMimeType = core.$constructor("$ZodCheckMimeType", (inst, def) => {
      exports.$ZodCheck.init(inst, def);
      const mimeSet = new Set(def.mime);
      inst._zod.onattach.push((inst2) => {
        inst2._zod.bag.mime = def.mime;
      });
      inst._zod.check = (payload) => {
        if (mimeSet.has(payload.value.type))
          return;
        payload.issues.push({
          code: "invalid_value",
          values: def.mime,
          input: payload.value.type,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCheckOverwrite = core.$constructor("$ZodCheckOverwrite", (inst, def) => {
      exports.$ZodCheck.init(inst, def);
      inst._zod.check = (payload) => {
        payload.value = def.tx(payload.value);
      };
    });
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/doc.cjs
var require_doc = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/doc.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Doc = void 0;
    var Doc = class {
      static {
        __name(this, "Doc");
      }
      constructor(args = []) {
        this.content = [];
        this.indent = 0;
        if (this)
          this.args = args;
      }
      indented(fn) {
        this.indent += 1;
        fn(this);
        this.indent -= 1;
      }
      write(arg) {
        if (typeof arg === "function") {
          arg(this, { execution: "sync" });
          arg(this, { execution: "async" });
          return;
        }
        const content = arg;
        const lines = content.split("\n").filter((x) => x);
        const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
        const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
        for (const line of dedented) {
          this.content.push(line);
        }
      }
      compile() {
        const F = Function;
        const args = this?.args;
        const content = this?.content ?? [``];
        const lines = [...content.map((x) => `  ${x}`)];
        return new F(...args, lines.join("\n"));
      }
    };
    exports.Doc = Doc;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/versions.cjs
var require_versions = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/versions.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.version = void 0;
    exports.version = {
      major: 4,
      minor: 1,
      patch: 11
    };
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/schemas.cjs
var require_schemas = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/schemas.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.$ZodMap = exports.$ZodRecord = exports.$ZodTuple = exports.$ZodIntersection = exports.$ZodDiscriminatedUnion = exports.$ZodUnion = exports.$ZodObjectJIT = exports.$ZodObject = exports.$ZodArray = exports.$ZodDate = exports.$ZodVoid = exports.$ZodNever = exports.$ZodUnknown = exports.$ZodAny = exports.$ZodNull = exports.$ZodUndefined = exports.$ZodSymbol = exports.$ZodBigIntFormat = exports.$ZodBigInt = exports.$ZodBoolean = exports.$ZodNumberFormat = exports.$ZodNumber = exports.$ZodCustomStringFormat = exports.$ZodJWT = exports.$ZodE164 = exports.$ZodBase64URL = exports.$ZodBase64 = exports.$ZodCIDRv6 = exports.$ZodCIDRv4 = exports.$ZodIPv6 = exports.$ZodIPv4 = exports.$ZodISODuration = exports.$ZodISOTime = exports.$ZodISODate = exports.$ZodISODateTime = exports.$ZodKSUID = exports.$ZodXID = exports.$ZodULID = exports.$ZodCUID2 = exports.$ZodCUID = exports.$ZodNanoID = exports.$ZodEmoji = exports.$ZodURL = exports.$ZodEmail = exports.$ZodUUID = exports.$ZodGUID = exports.$ZodStringFormat = exports.$ZodString = exports.clone = exports.$ZodType = void 0;
    exports.$ZodCustom = exports.$ZodLazy = exports.$ZodPromise = exports.$ZodFunction = exports.$ZodTemplateLiteral = exports.$ZodReadonly = exports.$ZodCodec = exports.$ZodPipe = exports.$ZodNaN = exports.$ZodCatch = exports.$ZodSuccess = exports.$ZodNonOptional = exports.$ZodPrefault = exports.$ZodDefault = exports.$ZodNullable = exports.$ZodOptional = exports.$ZodTransform = exports.$ZodFile = exports.$ZodLiteral = exports.$ZodEnum = exports.$ZodSet = void 0;
    exports.isValidBase64 = isValidBase64;
    exports.isValidBase64URL = isValidBase64URL;
    exports.isValidJWT = isValidJWT;
    var checks = __importStar(require_checks());
    var core = __importStar(require_core2());
    var doc_js_1 = require_doc();
    var parse_js_1 = require_parse2();
    var regexes = __importStar(require_regexes());
    var util = __importStar(require_util());
    var versions_js_1 = require_versions();
    exports.$ZodType = core.$constructor("$ZodType", (inst, def) => {
      var _a;
      inst ?? (inst = {});
      inst._zod.def = def;
      inst._zod.bag = inst._zod.bag || {};
      inst._zod.version = versions_js_1.version;
      const checks2 = [...inst._zod.def.checks ?? []];
      if (inst._zod.traits.has("$ZodCheck")) {
        checks2.unshift(inst);
      }
      for (const ch of checks2) {
        for (const fn of ch._zod.onattach) {
          fn(inst);
        }
      }
      if (checks2.length === 0) {
        (_a = inst._zod).deferred ?? (_a.deferred = []);
        inst._zod.deferred?.push(() => {
          inst._zod.run = inst._zod.parse;
        });
      } else {
        const runChecks = /* @__PURE__ */ __name((payload, checks3, ctx) => {
          let isAborted = util.aborted(payload);
          let asyncResult;
          for (const ch of checks3) {
            if (ch._zod.def.when) {
              const shouldRun = ch._zod.def.when(payload);
              if (!shouldRun)
                continue;
            } else if (isAborted) {
              continue;
            }
            const currLen = payload.issues.length;
            const _ = ch._zod.check(payload);
            if (_ instanceof Promise && ctx?.async === false) {
              throw new core.$ZodAsyncError();
            }
            if (asyncResult || _ instanceof Promise) {
              asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
                await _;
                const nextLen = payload.issues.length;
                if (nextLen === currLen)
                  return;
                if (!isAborted)
                  isAborted = util.aborted(payload, currLen);
              });
            } else {
              const nextLen = payload.issues.length;
              if (nextLen === currLen)
                continue;
              if (!isAborted)
                isAborted = util.aborted(payload, currLen);
            }
          }
          if (asyncResult) {
            return asyncResult.then(() => {
              return payload;
            });
          }
          return payload;
        }, "runChecks");
        const handleCanaryResult = /* @__PURE__ */ __name((canary, payload, ctx) => {
          if (util.aborted(canary)) {
            canary.aborted = true;
            return canary;
          }
          const checkResult = runChecks(payload, checks2, ctx);
          if (checkResult instanceof Promise) {
            if (ctx.async === false)
              throw new core.$ZodAsyncError();
            return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
          }
          return inst._zod.parse(checkResult, ctx);
        }, "handleCanaryResult");
        inst._zod.run = (payload, ctx) => {
          if (ctx.skipChecks) {
            return inst._zod.parse(payload, ctx);
          }
          if (ctx.direction === "backward") {
            const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
            if (canary instanceof Promise) {
              return canary.then((canary2) => {
                return handleCanaryResult(canary2, payload, ctx);
              });
            }
            return handleCanaryResult(canary, payload, ctx);
          }
          const result = inst._zod.parse(payload, ctx);
          if (result instanceof Promise) {
            if (ctx.async === false)
              throw new core.$ZodAsyncError();
            return result.then((result2) => runChecks(result2, checks2, ctx));
          }
          return runChecks(result, checks2, ctx);
        };
      }
      inst["~standard"] = {
        validate: /* @__PURE__ */ __name((value) => {
          try {
            const r = (0, parse_js_1.safeParse)(inst, value);
            return r.success ? { value: r.data } : { issues: r.error?.issues };
          } catch (_) {
            return (0, parse_js_1.safeParseAsync)(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
          }
        }, "validate"),
        vendor: "zod",
        version: 1
      };
    });
    var util_js_1 = require_util();
    Object.defineProperty(exports, "clone", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return util_js_1.clone;
    }, "get") });
    exports.$ZodString = core.$constructor("$ZodString", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? regexes.string(inst._zod.bag);
      inst._zod.parse = (payload, _) => {
        if (def.coerce)
          try {
            payload.value = String(payload.value);
          } catch (_2) {
          }
        if (typeof payload.value === "string")
          return payload;
        payload.issues.push({
          expected: "string",
          code: "invalid_type",
          input: payload.value,
          inst
        });
        return payload;
      };
    });
    exports.$ZodStringFormat = core.$constructor("$ZodStringFormat", (inst, def) => {
      checks.$ZodCheckStringFormat.init(inst, def);
      exports.$ZodString.init(inst, def);
    });
    exports.$ZodGUID = core.$constructor("$ZodGUID", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.guid);
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodUUID = core.$constructor("$ZodUUID", (inst, def) => {
      if (def.version) {
        const versionMap = {
          v1: 1,
          v2: 2,
          v3: 3,
          v4: 4,
          v5: 5,
          v6: 6,
          v7: 7,
          v8: 8
        };
        const v = versionMap[def.version];
        if (v === void 0)
          throw new Error(`Invalid UUID version: "${def.version}"`);
        def.pattern ?? (def.pattern = regexes.uuid(v));
      } else
        def.pattern ?? (def.pattern = regexes.uuid());
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodEmail = core.$constructor("$ZodEmail", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.email);
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodURL = core.$constructor("$ZodURL", (inst, def) => {
      exports.$ZodStringFormat.init(inst, def);
      inst._zod.check = (payload) => {
        try {
          const trimmed = payload.value.trim();
          const url = new URL(trimmed);
          if (def.hostname) {
            def.hostname.lastIndex = 0;
            if (!def.hostname.test(url.hostname)) {
              payload.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: regexes.hostname.source,
                input: payload.value,
                inst,
                continue: !def.abort
              });
            }
          }
          if (def.protocol) {
            def.protocol.lastIndex = 0;
            if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) {
              payload.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: def.protocol.source,
                input: payload.value,
                inst,
                continue: !def.abort
              });
            }
          }
          if (def.normalize) {
            payload.value = url.href;
          } else {
            payload.value = trimmed;
          }
          return;
        } catch (_) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      };
    });
    exports.$ZodEmoji = core.$constructor("$ZodEmoji", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.emoji());
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodNanoID = core.$constructor("$ZodNanoID", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.nanoid);
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodCUID = core.$constructor("$ZodCUID", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.cuid);
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodCUID2 = core.$constructor("$ZodCUID2", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.cuid2);
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodULID = core.$constructor("$ZodULID", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.ulid);
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodXID = core.$constructor("$ZodXID", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.xid);
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodKSUID = core.$constructor("$ZodKSUID", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.ksuid);
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodISODateTime = core.$constructor("$ZodISODateTime", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.datetime(def));
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodISODate = core.$constructor("$ZodISODate", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.date);
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodISOTime = core.$constructor("$ZodISOTime", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.time(def));
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodISODuration = core.$constructor("$ZodISODuration", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.duration);
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodIPv4 = core.$constructor("$ZodIPv4", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.ipv4);
      exports.$ZodStringFormat.init(inst, def);
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.format = `ipv4`;
      });
    });
    exports.$ZodIPv6 = core.$constructor("$ZodIPv6", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.ipv6);
      exports.$ZodStringFormat.init(inst, def);
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.format = `ipv6`;
      });
      inst._zod.check = (payload) => {
        try {
          new URL(`http://[${payload.value}]`);
        } catch {
          payload.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      };
    });
    exports.$ZodCIDRv4 = core.$constructor("$ZodCIDRv4", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.cidrv4);
      exports.$ZodStringFormat.init(inst, def);
    });
    exports.$ZodCIDRv6 = core.$constructor("$ZodCIDRv6", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.cidrv6);
      exports.$ZodStringFormat.init(inst, def);
      inst._zod.check = (payload) => {
        const parts = payload.value.split("/");
        try {
          if (parts.length !== 2)
            throw new Error();
          const [address, prefix] = parts;
          if (!prefix)
            throw new Error();
          const prefixNum = Number(prefix);
          if (`${prefixNum}` !== prefix)
            throw new Error();
          if (prefixNum < 0 || prefixNum > 128)
            throw new Error();
          new URL(`http://[${address}]`);
        } catch {
          payload.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      };
    });
    function isValidBase64(data) {
      if (data === "")
        return true;
      if (data.length % 4 !== 0)
        return false;
      try {
        atob(data);
        return true;
      } catch {
        return false;
      }
    }
    __name(isValidBase64, "isValidBase64");
    exports.$ZodBase64 = core.$constructor("$ZodBase64", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.base64);
      exports.$ZodStringFormat.init(inst, def);
      inst._zod.onattach.push((inst2) => {
        inst2._zod.bag.contentEncoding = "base64";
      });
      inst._zod.check = (payload) => {
        if (isValidBase64(payload.value))
          return;
        payload.issues.push({
          code: "invalid_format",
          format: "base64",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    function isValidBase64URL(data) {
      if (!regexes.base64url.test(data))
        return false;
      const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
      const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
      return isValidBase64(padded);
    }
    __name(isValidBase64URL, "isValidBase64URL");
    exports.$ZodBase64URL = core.$constructor("$ZodBase64URL", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.base64url);
      exports.$ZodStringFormat.init(inst, def);
      inst._zod.onattach.push((inst2) => {
        inst2._zod.bag.contentEncoding = "base64url";
      });
      inst._zod.check = (payload) => {
        if (isValidBase64URL(payload.value))
          return;
        payload.issues.push({
          code: "invalid_format",
          format: "base64url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodE164 = core.$constructor("$ZodE164", (inst, def) => {
      def.pattern ?? (def.pattern = regexes.e164);
      exports.$ZodStringFormat.init(inst, def);
    });
    function isValidJWT(token, algorithm = null) {
      try {
        const tokensParts = token.split(".");
        if (tokensParts.length !== 3)
          return false;
        const [header] = tokensParts;
        if (!header)
          return false;
        const parsedHeader = JSON.parse(atob(header));
        if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
          return false;
        if (!parsedHeader.alg)
          return false;
        if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
          return false;
        return true;
      } catch {
        return false;
      }
    }
    __name(isValidJWT, "isValidJWT");
    exports.$ZodJWT = core.$constructor("$ZodJWT", (inst, def) => {
      exports.$ZodStringFormat.init(inst, def);
      inst._zod.check = (payload) => {
        if (isValidJWT(payload.value, def.alg))
          return;
        payload.issues.push({
          code: "invalid_format",
          format: "jwt",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodCustomStringFormat = core.$constructor("$ZodCustomStringFormat", (inst, def) => {
      exports.$ZodStringFormat.init(inst, def);
      inst._zod.check = (payload) => {
        if (def.fn(payload.value))
          return;
        payload.issues.push({
          code: "invalid_format",
          format: def.format,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    exports.$ZodNumber = core.$constructor("$ZodNumber", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.pattern = inst._zod.bag.pattern ?? regexes.number;
      inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
          try {
            payload.value = Number(payload.value);
          } catch (_) {
          }
        const input = payload.value;
        if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
          return payload;
        }
        const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
        payload.issues.push({
          expected: "number",
          code: "invalid_type",
          input,
          inst,
          ...received ? { received } : {}
        });
        return payload;
      };
    });
    exports.$ZodNumberFormat = core.$constructor("$ZodNumber", (inst, def) => {
      checks.$ZodCheckNumberFormat.init(inst, def);
      exports.$ZodNumber.init(inst, def);
    });
    exports.$ZodBoolean = core.$constructor("$ZodBoolean", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.pattern = regexes.boolean;
      inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
          try {
            payload.value = Boolean(payload.value);
          } catch (_) {
          }
        const input = payload.value;
        if (typeof input === "boolean")
          return payload;
        payload.issues.push({
          expected: "boolean",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    exports.$ZodBigInt = core.$constructor("$ZodBigInt", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.pattern = regexes.bigint;
      inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
          try {
            payload.value = BigInt(payload.value);
          } catch (_) {
          }
        if (typeof payload.value === "bigint")
          return payload;
        payload.issues.push({
          expected: "bigint",
          code: "invalid_type",
          input: payload.value,
          inst
        });
        return payload;
      };
    });
    exports.$ZodBigIntFormat = core.$constructor("$ZodBigInt", (inst, def) => {
      checks.$ZodCheckBigIntFormat.init(inst, def);
      exports.$ZodBigInt.init(inst, def);
    });
    exports.$ZodSymbol = core.$constructor("$ZodSymbol", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "symbol")
          return payload;
        payload.issues.push({
          expected: "symbol",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    exports.$ZodUndefined = core.$constructor("$ZodUndefined", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.pattern = regexes.undefined;
      inst._zod.values = /* @__PURE__ */ new Set([void 0]);
      inst._zod.optin = "optional";
      inst._zod.optout = "optional";
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "undefined")
          return payload;
        payload.issues.push({
          expected: "undefined",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    exports.$ZodNull = core.$constructor("$ZodNull", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.pattern = regexes.null;
      inst._zod.values = /* @__PURE__ */ new Set([null]);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (input === null)
          return payload;
        payload.issues.push({
          expected: "null",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    exports.$ZodAny = core.$constructor("$ZodAny", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload) => payload;
    });
    exports.$ZodUnknown = core.$constructor("$ZodUnknown", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload) => payload;
    });
    exports.$ZodNever = core.$constructor("$ZodNever", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        payload.issues.push({
          expected: "never",
          code: "invalid_type",
          input: payload.value,
          inst
        });
        return payload;
      };
    });
    exports.$ZodVoid = core.$constructor("$ZodVoid", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "undefined")
          return payload;
        payload.issues.push({
          expected: "void",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    exports.$ZodDate = core.$constructor("$ZodDate", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        if (def.coerce) {
          try {
            payload.value = new Date(payload.value);
          } catch (_err) {
          }
        }
        const input = payload.value;
        const isDate = input instanceof Date;
        const isValidDate = isDate && !Number.isNaN(input.getTime());
        if (isValidDate)
          return payload;
        payload.issues.push({
          expected: "date",
          code: "invalid_type",
          input,
          ...isDate ? { received: "Invalid Date" } : {},
          inst
        });
        return payload;
      };
    });
    function handleArrayResult(result, final, index) {
      if (result.issues.length) {
        final.issues.push(...util.prefixIssues(index, result.issues));
      }
      final.value[index] = result.value;
    }
    __name(handleArrayResult, "handleArrayResult");
    exports.$ZodArray = core.$constructor("$ZodArray", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!Array.isArray(input)) {
          payload.issues.push({
            expected: "array",
            code: "invalid_type",
            input,
            inst
          });
          return payload;
        }
        payload.value = Array(input.length);
        const proms = [];
        for (let i = 0; i < input.length; i++) {
          const item = input[i];
          const result = def.element._zod.run({
            value: item,
            issues: []
          }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
          } else {
            handleArrayResult(result, payload, i);
          }
        }
        if (proms.length) {
          return Promise.all(proms).then(() => payload);
        }
        return payload;
      };
    });
    function handlePropertyResult(result, final, key, input) {
      if (result.issues.length) {
        final.issues.push(...util.prefixIssues(key, result.issues));
      }
      if (result.value === void 0) {
        if (key in input) {
          final.value[key] = void 0;
        }
      } else {
        final.value[key] = result.value;
      }
    }
    __name(handlePropertyResult, "handlePropertyResult");
    function normalizeDef(def) {
      const keys = Object.keys(def.shape);
      for (const k of keys) {
        if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
          throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
        }
      }
      const okeys = util.optionalKeys(def.shape);
      return {
        ...def,
        keys,
        keySet: new Set(keys),
        numKeys: keys.length,
        optionalKeys: new Set(okeys)
      };
    }
    __name(normalizeDef, "normalizeDef");
    function handleCatchall(proms, input, payload, ctx, def, inst) {
      const unrecognized = [];
      const keySet = def.keySet;
      const _catchall = def.catchall._zod;
      const t = _catchall.def.type;
      for (const key of Object.keys(input)) {
        if (keySet.has(key))
          continue;
        if (t === "never") {
          unrecognized.push(key);
          continue;
        }
        const r = _catchall.run({ value: input[key], issues: [] }, ctx);
        if (r instanceof Promise) {
          proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input)));
        } else {
          handlePropertyResult(r, payload, key, input);
        }
      }
      if (unrecognized.length) {
        payload.issues.push({
          code: "unrecognized_keys",
          keys: unrecognized,
          input,
          inst
        });
      }
      if (!proms.length)
        return payload;
      return Promise.all(proms).then(() => {
        return payload;
      });
    }
    __name(handleCatchall, "handleCatchall");
    exports.$ZodObject = core.$constructor("$ZodObject", (inst, def) => {
      exports.$ZodType.init(inst, def);
      const desc = Object.getOwnPropertyDescriptor(def, "shape");
      if (!desc?.get) {
        const sh = def.shape;
        Object.defineProperty(def, "shape", {
          get: /* @__PURE__ */ __name(() => {
            const newSh = { ...sh };
            Object.defineProperty(def, "shape", {
              value: newSh
            });
            return newSh;
          }, "get")
        });
      }
      const _normalized = util.cached(() => normalizeDef(def));
      util.defineLazy(inst._zod, "propValues", () => {
        const shape = def.shape;
        const propValues = {};
        for (const key in shape) {
          const field = shape[key]._zod;
          if (field.values) {
            propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
            for (const v of field.values)
              propValues[key].add(v);
          }
        }
        return propValues;
      });
      const isObject = util.isObject;
      const catchall = def.catchall;
      let value;
      inst._zod.parse = (payload, ctx) => {
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject(input)) {
          payload.issues.push({
            expected: "object",
            code: "invalid_type",
            input,
            inst
          });
          return payload;
        }
        payload.value = {};
        const proms = [];
        const shape = value.shape;
        for (const key of value.keys) {
          const el = shape[key];
          const r = el._zod.run({ value: input[key], issues: [] }, ctx);
          if (r instanceof Promise) {
            proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input)));
          } else {
            handlePropertyResult(r, payload, key, input);
          }
        }
        if (!catchall) {
          return proms.length ? Promise.all(proms).then(() => payload) : payload;
        }
        return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
      };
    });
    exports.$ZodObjectJIT = core.$constructor("$ZodObjectJIT", (inst, def) => {
      exports.$ZodObject.init(inst, def);
      const superParse = inst._zod.parse;
      const _normalized = util.cached(() => normalizeDef(def));
      const generateFastpass = /* @__PURE__ */ __name((shape) => {
        const doc = new doc_js_1.Doc(["shape", "payload", "ctx"]);
        const normalized = _normalized.value;
        const parseStr = /* @__PURE__ */ __name((key) => {
          const k = util.esc(key);
          return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
        }, "parseStr");
        doc.write(`const input = payload.value;`);
        const ids = /* @__PURE__ */ Object.create(null);
        let counter = 0;
        for (const key of normalized.keys) {
          ids[key] = `key_${counter++}`;
        }
        doc.write(`const newResult = {};`);
        for (const key of normalized.keys) {
          const id = ids[key];
          const k = util.esc(key);
          doc.write(`const ${id} = ${parseStr(key)};`);
          doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
        }
        doc.write(`payload.value = newResult;`);
        doc.write(`return payload;`);
        const fn = doc.compile();
        return (payload, ctx) => fn(shape, payload, ctx);
      }, "generateFastpass");
      let fastpass;
      const isObject = util.isObject;
      const jit = !core.globalConfig.jitless;
      const allowsEval = util.allowsEval;
      const fastEnabled = jit && allowsEval.value;
      const catchall = def.catchall;
      let value;
      inst._zod.parse = (payload, ctx) => {
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject(input)) {
          payload.issues.push({
            expected: "object",
            code: "invalid_type",
            input,
            inst
          });
          return payload;
        }
        if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
          if (!fastpass)
            fastpass = generateFastpass(def.shape);
          payload = fastpass(payload, ctx);
          if (!catchall)
            return payload;
          return handleCatchall([], input, payload, ctx, value, inst);
        }
        return superParse(payload, ctx);
      };
    });
    function handleUnionResults(results, final, inst, ctx) {
      for (const result of results) {
        if (result.issues.length === 0) {
          final.value = result.value;
          return final;
        }
      }
      const nonaborted = results.filter((r) => !util.aborted(r));
      if (nonaborted.length === 1) {
        final.value = nonaborted[0].value;
        return nonaborted[0];
      }
      final.issues.push({
        code: "invalid_union",
        input: final.value,
        inst,
        errors: results.map((result) => result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())))
      });
      return final;
    }
    __name(handleUnionResults, "handleUnionResults");
    exports.$ZodUnion = core.$constructor("$ZodUnion", (inst, def) => {
      exports.$ZodType.init(inst, def);
      util.defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
      util.defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
      util.defineLazy(inst._zod, "values", () => {
        if (def.options.every((o) => o._zod.values)) {
          return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
        }
        return void 0;
      });
      util.defineLazy(inst._zod, "pattern", () => {
        if (def.options.every((o) => o._zod.pattern)) {
          const patterns = def.options.map((o) => o._zod.pattern);
          return new RegExp(`^(${patterns.map((p) => util.cleanRegex(p.source)).join("|")})$`);
        }
        return void 0;
      });
      const single = def.options.length === 1;
      const first = def.options[0]._zod.run;
      inst._zod.parse = (payload, ctx) => {
        if (single) {
          return first(payload, ctx);
        }
        let async = false;
        const results = [];
        for (const option of def.options) {
          const result = option._zod.run({
            value: payload.value,
            issues: []
          }, ctx);
          if (result instanceof Promise) {
            results.push(result);
            async = true;
          } else {
            if (result.issues.length === 0)
              return result;
            results.push(result);
          }
        }
        if (!async)
          return handleUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results2) => {
          return handleUnionResults(results2, payload, inst, ctx);
        });
      };
    });
    exports.$ZodDiscriminatedUnion = /* @__PURE__ */ core.$constructor("$ZodDiscriminatedUnion", (inst, def) => {
      exports.$ZodUnion.init(inst, def);
      const _super = inst._zod.parse;
      util.defineLazy(inst._zod, "propValues", () => {
        const propValues = {};
        for (const option of def.options) {
          const pv = option._zod.propValues;
          if (!pv || Object.keys(pv).length === 0)
            throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
          for (const [k, v] of Object.entries(pv)) {
            if (!propValues[k])
              propValues[k] = /* @__PURE__ */ new Set();
            for (const val of v) {
              propValues[k].add(val);
            }
          }
        }
        return propValues;
      });
      const disc = util.cached(() => {
        const opts = def.options;
        const map = /* @__PURE__ */ new Map();
        for (const o of opts) {
          const values = o._zod.propValues?.[def.discriminator];
          if (!values || values.size === 0)
            throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
          for (const v of values) {
            if (map.has(v)) {
              throw new Error(`Duplicate discriminator value "${String(v)}"`);
            }
            map.set(v, o);
          }
        }
        return map;
      });
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!util.isObject(input)) {
          payload.issues.push({
            code: "invalid_type",
            expected: "object",
            input,
            inst
          });
          return payload;
        }
        const opt = disc.value.get(input?.[def.discriminator]);
        if (opt) {
          return opt._zod.run(payload, ctx);
        }
        if (def.unionFallback) {
          return _super(payload, ctx);
        }
        payload.issues.push({
          code: "invalid_union",
          errors: [],
          note: "No matching discriminator",
          discriminator: def.discriminator,
          input,
          path: [def.discriminator],
          inst
        });
        return payload;
      };
    });
    exports.$ZodIntersection = core.$constructor("$ZodIntersection", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        const left = def.left._zod.run({ value: input, issues: [] }, ctx);
        const right = def.right._zod.run({ value: input, issues: [] }, ctx);
        const async = left instanceof Promise || right instanceof Promise;
        if (async) {
          return Promise.all([left, right]).then(([left2, right2]) => {
            return handleIntersectionResults(payload, left2, right2);
          });
        }
        return handleIntersectionResults(payload, left, right);
      };
    });
    function mergeValues(a, b) {
      if (a === b) {
        return { valid: true, data: a };
      }
      if (a instanceof Date && b instanceof Date && +a === +b) {
        return { valid: true, data: a };
      }
      if (util.isPlainObject(a) && util.isPlainObject(b)) {
        const bKeys = Object.keys(b);
        const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
          const sharedValue = mergeValues(a[key], b[key]);
          if (!sharedValue.valid) {
            return {
              valid: false,
              mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
            };
          }
          newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
      }
      if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
          return { valid: false, mergeErrorPath: [] };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
          const itemA = a[index];
          const itemB = b[index];
          const sharedValue = mergeValues(itemA, itemB);
          if (!sharedValue.valid) {
            return {
              valid: false,
              mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
            };
          }
          newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
      }
      return { valid: false, mergeErrorPath: [] };
    }
    __name(mergeValues, "mergeValues");
    function handleIntersectionResults(result, left, right) {
      if (left.issues.length) {
        result.issues.push(...left.issues);
      }
      if (right.issues.length) {
        result.issues.push(...right.issues);
      }
      if (util.aborted(result))
        return result;
      const merged = mergeValues(left.value, right.value);
      if (!merged.valid) {
        throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
      }
      result.value = merged.data;
      return result;
    }
    __name(handleIntersectionResults, "handleIntersectionResults");
    exports.$ZodTuple = core.$constructor("$ZodTuple", (inst, def) => {
      exports.$ZodType.init(inst, def);
      const items = def.items;
      const optStart = items.length - [...items].reverse().findIndex((item) => item._zod.optin !== "optional");
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!Array.isArray(input)) {
          payload.issues.push({
            input,
            inst,
            expected: "tuple",
            code: "invalid_type"
          });
          return payload;
        }
        payload.value = [];
        const proms = [];
        if (!def.rest) {
          const tooBig = input.length > items.length;
          const tooSmall = input.length < optStart - 1;
          if (tooBig || tooSmall) {
            payload.issues.push({
              ...tooBig ? { code: "too_big", maximum: items.length } : { code: "too_small", minimum: items.length },
              input,
              inst,
              origin: "array"
            });
            return payload;
          }
        }
        let i = -1;
        for (const item of items) {
          i++;
          if (i >= input.length) {
            if (i >= optStart)
              continue;
          }
          const result = item._zod.run({
            value: input[i],
            issues: []
          }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
          } else {
            handleTupleResult(result, payload, i);
          }
        }
        if (def.rest) {
          const rest = input.slice(items.length);
          for (const el of rest) {
            i++;
            const result = def.rest._zod.run({
              value: el,
              issues: []
            }, ctx);
            if (result instanceof Promise) {
              proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
            } else {
              handleTupleResult(result, payload, i);
            }
          }
        }
        if (proms.length)
          return Promise.all(proms).then(() => payload);
        return payload;
      };
    });
    function handleTupleResult(result, final, index) {
      if (result.issues.length) {
        final.issues.push(...util.prefixIssues(index, result.issues));
      }
      final.value[index] = result.value;
    }
    __name(handleTupleResult, "handleTupleResult");
    exports.$ZodRecord = core.$constructor("$ZodRecord", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!util.isPlainObject(input)) {
          payload.issues.push({
            expected: "record",
            code: "invalid_type",
            input,
            inst
          });
          return payload;
        }
        const proms = [];
        if (def.keyType._zod.values) {
          const values = def.keyType._zod.values;
          payload.value = {};
          for (const key of values) {
            if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
              const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
              if (result instanceof Promise) {
                proms.push(result.then((result2) => {
                  if (result2.issues.length) {
                    payload.issues.push(...util.prefixIssues(key, result2.issues));
                  }
                  payload.value[key] = result2.value;
                }));
              } else {
                if (result.issues.length) {
                  payload.issues.push(...util.prefixIssues(key, result.issues));
                }
                payload.value[key] = result.value;
              }
            }
          }
          let unrecognized;
          for (const key in input) {
            if (!values.has(key)) {
              unrecognized = unrecognized ?? [];
              unrecognized.push(key);
            }
          }
          if (unrecognized && unrecognized.length > 0) {
            payload.issues.push({
              code: "unrecognized_keys",
              input,
              inst,
              keys: unrecognized
            });
          }
        } else {
          payload.value = {};
          for (const key of Reflect.ownKeys(input)) {
            if (key === "__proto__")
              continue;
            const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
            if (keyResult instanceof Promise) {
              throw new Error("Async schemas not supported in object keys currently");
            }
            if (keyResult.issues.length) {
              payload.issues.push({
                code: "invalid_key",
                origin: "record",
                issues: keyResult.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())),
                input: key,
                path: [key],
                inst
              });
              payload.value[keyResult.value] = keyResult.value;
              continue;
            }
            const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
            if (result instanceof Promise) {
              proms.push(result.then((result2) => {
                if (result2.issues.length) {
                  payload.issues.push(...util.prefixIssues(key, result2.issues));
                }
                payload.value[keyResult.value] = result2.value;
              }));
            } else {
              if (result.issues.length) {
                payload.issues.push(...util.prefixIssues(key, result.issues));
              }
              payload.value[keyResult.value] = result.value;
            }
          }
        }
        if (proms.length) {
          return Promise.all(proms).then(() => payload);
        }
        return payload;
      };
    });
    exports.$ZodMap = core.$constructor("$ZodMap", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!(input instanceof Map)) {
          payload.issues.push({
            expected: "map",
            code: "invalid_type",
            input,
            inst
          });
          return payload;
        }
        const proms = [];
        payload.value = /* @__PURE__ */ new Map();
        for (const [key, value] of input) {
          const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
          const valueResult = def.valueType._zod.run({ value, issues: [] }, ctx);
          if (keyResult instanceof Promise || valueResult instanceof Promise) {
            proms.push(Promise.all([keyResult, valueResult]).then(([keyResult2, valueResult2]) => {
              handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
            }));
          } else {
            handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
          }
        }
        if (proms.length)
          return Promise.all(proms).then(() => payload);
        return payload;
      };
    });
    function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
      if (keyResult.issues.length) {
        if (util.propertyKeyTypes.has(typeof key)) {
          final.issues.push(...util.prefixIssues(key, keyResult.issues));
        } else {
          final.issues.push({
            code: "invalid_key",
            origin: "map",
            input,
            inst,
            issues: keyResult.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))
          });
        }
      }
      if (valueResult.issues.length) {
        if (util.propertyKeyTypes.has(typeof key)) {
          final.issues.push(...util.prefixIssues(key, valueResult.issues));
        } else {
          final.issues.push({
            origin: "map",
            code: "invalid_element",
            input,
            inst,
            key,
            issues: valueResult.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))
          });
        }
      }
      final.value.set(keyResult.value, valueResult.value);
    }
    __name(handleMapResult, "handleMapResult");
    exports.$ZodSet = core.$constructor("$ZodSet", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!(input instanceof Set)) {
          payload.issues.push({
            input,
            inst,
            expected: "set",
            code: "invalid_type"
          });
          return payload;
        }
        const proms = [];
        payload.value = /* @__PURE__ */ new Set();
        for (const item of input) {
          const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => handleSetResult(result2, payload)));
          } else
            handleSetResult(result, payload);
        }
        if (proms.length)
          return Promise.all(proms).then(() => payload);
        return payload;
      };
    });
    function handleSetResult(result, final) {
      if (result.issues.length) {
        final.issues.push(...result.issues);
      }
      final.value.add(result.value);
    }
    __name(handleSetResult, "handleSetResult");
    exports.$ZodEnum = core.$constructor("$ZodEnum", (inst, def) => {
      exports.$ZodType.init(inst, def);
      const values = util.getEnumValues(def.entries);
      const valuesSet = new Set(values);
      inst._zod.values = valuesSet;
      inst._zod.pattern = new RegExp(`^(${values.filter((k) => util.propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? util.escapeRegex(o) : o.toString()).join("|")})$`);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (valuesSet.has(input)) {
          return payload;
        }
        payload.issues.push({
          code: "invalid_value",
          values,
          input,
          inst
        });
        return payload;
      };
    });
    exports.$ZodLiteral = core.$constructor("$ZodLiteral", (inst, def) => {
      exports.$ZodType.init(inst, def);
      if (def.values.length === 0) {
        throw new Error("Cannot create literal schema with no valid values");
      }
      inst._zod.values = new Set(def.values);
      inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? util.escapeRegex(o) : o ? util.escapeRegex(o.toString()) : String(o)).join("|")})$`);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (inst._zod.values.has(input)) {
          return payload;
        }
        payload.issues.push({
          code: "invalid_value",
          values: def.values,
          input,
          inst
        });
        return payload;
      };
    });
    exports.$ZodFile = core.$constructor("$ZodFile", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (input instanceof File)
          return payload;
        payload.issues.push({
          expected: "file",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    exports.$ZodTransform = core.$constructor("$ZodTransform", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          throw new core.$ZodEncodeError(inst.constructor.name);
        }
        const _out = def.transform(payload.value, payload);
        if (ctx.async) {
          const output = _out instanceof Promise ? _out : Promise.resolve(_out);
          return output.then((output2) => {
            payload.value = output2;
            return payload;
          });
        }
        if (_out instanceof Promise) {
          throw new core.$ZodAsyncError();
        }
        payload.value = _out;
        return payload;
      };
    });
    function handleOptionalResult(result, input) {
      if (result.issues.length && input === void 0) {
        return { issues: [], value: void 0 };
      }
      return result;
    }
    __name(handleOptionalResult, "handleOptionalResult");
    exports.$ZodOptional = core.$constructor("$ZodOptional", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.optin = "optional";
      inst._zod.optout = "optional";
      util.defineLazy(inst._zod, "values", () => {
        return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
      });
      util.defineLazy(inst._zod, "pattern", () => {
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${util.cleanRegex(pattern.source)})?$`) : void 0;
      });
      inst._zod.parse = (payload, ctx) => {
        if (def.innerType._zod.optin === "optional") {
          const result = def.innerType._zod.run(payload, ctx);
          if (result instanceof Promise)
            return result.then((r) => handleOptionalResult(r, payload.value));
          return handleOptionalResult(result, payload.value);
        }
        if (payload.value === void 0) {
          return payload;
        }
        return def.innerType._zod.run(payload, ctx);
      };
    });
    exports.$ZodNullable = core.$constructor("$ZodNullable", (inst, def) => {
      exports.$ZodType.init(inst, def);
      util.defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
      util.defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
      util.defineLazy(inst._zod, "pattern", () => {
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${util.cleanRegex(pattern.source)}|null)$`) : void 0;
      });
      util.defineLazy(inst._zod, "values", () => {
        return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
      });
      inst._zod.parse = (payload, ctx) => {
        if (payload.value === null)
          return payload;
        return def.innerType._zod.run(payload, ctx);
      };
    });
    exports.$ZodDefault = core.$constructor("$ZodDefault", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.optin = "optional";
      util.defineLazy(inst._zod, "values", () => def.innerType._zod.values);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          return def.innerType._zod.run(payload, ctx);
        }
        if (payload.value === void 0) {
          payload.value = def.defaultValue;
          return payload;
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
          return result.then((result2) => handleDefaultResult(result2, def));
        }
        return handleDefaultResult(result, def);
      };
    });
    function handleDefaultResult(payload, def) {
      if (payload.value === void 0) {
        payload.value = def.defaultValue;
      }
      return payload;
    }
    __name(handleDefaultResult, "handleDefaultResult");
    exports.$ZodPrefault = core.$constructor("$ZodPrefault", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.optin = "optional";
      util.defineLazy(inst._zod, "values", () => def.innerType._zod.values);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          return def.innerType._zod.run(payload, ctx);
        }
        if (payload.value === void 0) {
          payload.value = def.defaultValue;
        }
        return def.innerType._zod.run(payload, ctx);
      };
    });
    exports.$ZodNonOptional = core.$constructor("$ZodNonOptional", (inst, def) => {
      exports.$ZodType.init(inst, def);
      util.defineLazy(inst._zod, "values", () => {
        const v = def.innerType._zod.values;
        return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
      });
      inst._zod.parse = (payload, ctx) => {
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
          return result.then((result2) => handleNonOptionalResult(result2, inst));
        }
        return handleNonOptionalResult(result, inst);
      };
    });
    function handleNonOptionalResult(payload, inst) {
      if (!payload.issues.length && payload.value === void 0) {
        payload.issues.push({
          code: "invalid_type",
          expected: "nonoptional",
          input: payload.value,
          inst
        });
      }
      return payload;
    }
    __name(handleNonOptionalResult, "handleNonOptionalResult");
    exports.$ZodSuccess = core.$constructor("$ZodSuccess", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          throw new core.$ZodEncodeError("ZodSuccess");
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
          return result.then((result2) => {
            payload.value = result2.issues.length === 0;
            return payload;
          });
        }
        payload.value = result.issues.length === 0;
        return payload;
      };
    });
    exports.$ZodCatch = core.$constructor("$ZodCatch", (inst, def) => {
      exports.$ZodType.init(inst, def);
      util.defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
      util.defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
      util.defineLazy(inst._zod, "values", () => def.innerType._zod.values);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          return def.innerType._zod.run(payload, ctx);
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
          return result.then((result2) => {
            payload.value = result2.value;
            if (result2.issues.length) {
              payload.value = def.catchValue({
                ...payload,
                error: {
                  issues: result2.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))
                },
                input: payload.value
              });
              payload.issues = [];
            }
            return payload;
          });
        }
        payload.value = result.value;
        if (result.issues.length) {
          payload.value = def.catchValue({
            ...payload,
            error: {
              issues: result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))
            },
            input: payload.value
          });
          payload.issues = [];
        }
        return payload;
      };
    });
    exports.$ZodNaN = core.$constructor("$ZodNaN", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
          payload.issues.push({
            input: payload.value,
            inst,
            expected: "nan",
            code: "invalid_type"
          });
          return payload;
        }
        return payload;
      };
    });
    exports.$ZodPipe = core.$constructor("$ZodPipe", (inst, def) => {
      exports.$ZodType.init(inst, def);
      util.defineLazy(inst._zod, "values", () => def.in._zod.values);
      util.defineLazy(inst._zod, "optin", () => def.in._zod.optin);
      util.defineLazy(inst._zod, "optout", () => def.out._zod.optout);
      util.defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          const right = def.out._zod.run(payload, ctx);
          if (right instanceof Promise) {
            return right.then((right2) => handlePipeResult(right2, def.in, ctx));
          }
          return handlePipeResult(right, def.in, ctx);
        }
        const left = def.in._zod.run(payload, ctx);
        if (left instanceof Promise) {
          return left.then((left2) => handlePipeResult(left2, def.out, ctx));
        }
        return handlePipeResult(left, def.out, ctx);
      };
    });
    function handlePipeResult(left, next, ctx) {
      if (left.issues.length) {
        left.aborted = true;
        return left;
      }
      return next._zod.run({ value: left.value, issues: left.issues }, ctx);
    }
    __name(handlePipeResult, "handlePipeResult");
    exports.$ZodCodec = core.$constructor("$ZodCodec", (inst, def) => {
      exports.$ZodType.init(inst, def);
      util.defineLazy(inst._zod, "values", () => def.in._zod.values);
      util.defineLazy(inst._zod, "optin", () => def.in._zod.optin);
      util.defineLazy(inst._zod, "optout", () => def.out._zod.optout);
      util.defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
      inst._zod.parse = (payload, ctx) => {
        const direction = ctx.direction || "forward";
        if (direction === "forward") {
          const left = def.in._zod.run(payload, ctx);
          if (left instanceof Promise) {
            return left.then((left2) => handleCodecAResult(left2, def, ctx));
          }
          return handleCodecAResult(left, def, ctx);
        } else {
          const right = def.out._zod.run(payload, ctx);
          if (right instanceof Promise) {
            return right.then((right2) => handleCodecAResult(right2, def, ctx));
          }
          return handleCodecAResult(right, def, ctx);
        }
      };
    });
    function handleCodecAResult(result, def, ctx) {
      if (result.issues.length) {
        result.aborted = true;
        return result;
      }
      const direction = ctx.direction || "forward";
      if (direction === "forward") {
        const transformed = def.transform(result.value, result);
        if (transformed instanceof Promise) {
          return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
        }
        return handleCodecTxResult(result, transformed, def.out, ctx);
      } else {
        const transformed = def.reverseTransform(result.value, result);
        if (transformed instanceof Promise) {
          return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
        }
        return handleCodecTxResult(result, transformed, def.in, ctx);
      }
    }
    __name(handleCodecAResult, "handleCodecAResult");
    function handleCodecTxResult(left, value, nextSchema, ctx) {
      if (left.issues.length) {
        left.aborted = true;
        return left;
      }
      return nextSchema._zod.run({ value, issues: left.issues }, ctx);
    }
    __name(handleCodecTxResult, "handleCodecTxResult");
    exports.$ZodReadonly = core.$constructor("$ZodReadonly", (inst, def) => {
      exports.$ZodType.init(inst, def);
      util.defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
      util.defineLazy(inst._zod, "values", () => def.innerType._zod.values);
      util.defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
      util.defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          return def.innerType._zod.run(payload, ctx);
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
          return result.then(handleReadonlyResult);
        }
        return handleReadonlyResult(result);
      };
    });
    function handleReadonlyResult(payload) {
      payload.value = Object.freeze(payload.value);
      return payload;
    }
    __name(handleReadonlyResult, "handleReadonlyResult");
    exports.$ZodTemplateLiteral = core.$constructor("$ZodTemplateLiteral", (inst, def) => {
      exports.$ZodType.init(inst, def);
      const regexParts = [];
      for (const part of def.parts) {
        if (typeof part === "object" && part !== null) {
          if (!part._zod.pattern) {
            throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
          }
          const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
          if (!source)
            throw new Error(`Invalid template literal part: ${part._zod.traits}`);
          const start = source.startsWith("^") ? 1 : 0;
          const end = source.endsWith("$") ? source.length - 1 : source.length;
          regexParts.push(source.slice(start, end));
        } else if (part === null || util.primitiveTypes.has(typeof part)) {
          regexParts.push(util.escapeRegex(`${part}`));
        } else {
          throw new Error(`Invalid template literal part: ${part}`);
        }
      }
      inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
      inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "string") {
          payload.issues.push({
            input: payload.value,
            inst,
            expected: "template_literal",
            code: "invalid_type"
          });
          return payload;
        }
        inst._zod.pattern.lastIndex = 0;
        if (!inst._zod.pattern.test(payload.value)) {
          payload.issues.push({
            input: payload.value,
            inst,
            code: "invalid_format",
            format: def.format ?? "template_literal",
            pattern: inst._zod.pattern.source
          });
          return payload;
        }
        return payload;
      };
    });
    exports.$ZodFunction = core.$constructor("$ZodFunction", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._def = def;
      inst._zod.def = def;
      inst.implement = (func) => {
        if (typeof func !== "function") {
          throw new Error("implement() must be called with a function");
        }
        return function(...args) {
          const parsedArgs = inst._def.input ? (0, parse_js_1.parse)(inst._def.input, args) : args;
          const result = Reflect.apply(func, this, parsedArgs);
          if (inst._def.output) {
            return (0, parse_js_1.parse)(inst._def.output, result);
          }
          return result;
        };
      };
      inst.implementAsync = (func) => {
        if (typeof func !== "function") {
          throw new Error("implementAsync() must be called with a function");
        }
        return async function(...args) {
          const parsedArgs = inst._def.input ? await (0, parse_js_1.parseAsync)(inst._def.input, args) : args;
          const result = await Reflect.apply(func, this, parsedArgs);
          if (inst._def.output) {
            return await (0, parse_js_1.parseAsync)(inst._def.output, result);
          }
          return result;
        };
      };
      inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "function") {
          payload.issues.push({
            code: "invalid_type",
            expected: "function",
            input: payload.value,
            inst
          });
          return payload;
        }
        const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
        if (hasPromiseOutput) {
          payload.value = inst.implementAsync(payload.value);
        } else {
          payload.value = inst.implement(payload.value);
        }
        return payload;
      };
      inst.input = (...args) => {
        const F = inst.constructor;
        if (Array.isArray(args[0])) {
          return new F({
            type: "function",
            input: new exports.$ZodTuple({
              type: "tuple",
              items: args[0],
              rest: args[1]
            }),
            output: inst._def.output
          });
        }
        return new F({
          type: "function",
          input: args[0],
          output: inst._def.output
        });
      };
      inst.output = (output) => {
        const F = inst.constructor;
        return new F({
          type: "function",
          input: inst._def.input,
          output
        });
      };
      return inst;
    });
    exports.$ZodPromise = core.$constructor("$ZodPromise", (inst, def) => {
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
      };
    });
    exports.$ZodLazy = core.$constructor("$ZodLazy", (inst, def) => {
      exports.$ZodType.init(inst, def);
      util.defineLazy(inst._zod, "innerType", () => def.getter());
      util.defineLazy(inst._zod, "pattern", () => inst._zod.innerType._zod.pattern);
      util.defineLazy(inst._zod, "propValues", () => inst._zod.innerType._zod.propValues);
      util.defineLazy(inst._zod, "optin", () => inst._zod.innerType._zod.optin ?? void 0);
      util.defineLazy(inst._zod, "optout", () => inst._zod.innerType._zod.optout ?? void 0);
      inst._zod.parse = (payload, ctx) => {
        const inner = inst._zod.innerType;
        return inner._zod.run(payload, ctx);
      };
    });
    exports.$ZodCustom = core.$constructor("$ZodCustom", (inst, def) => {
      checks.$ZodCheck.init(inst, def);
      exports.$ZodType.init(inst, def);
      inst._zod.parse = (payload, _) => {
        return payload;
      };
      inst._zod.check = (payload) => {
        const input = payload.value;
        const r = def.fn(input);
        if (r instanceof Promise) {
          return r.then((r2) => handleRefineResult(r2, payload, input, inst));
        }
        handleRefineResult(r, payload, input, inst);
        return;
      };
    });
    function handleRefineResult(result, payload, input, inst) {
      if (!result) {
        const _iss = {
          code: "custom",
          input,
          inst,
          // incorporates params.error into issue reporting
          path: [...inst._zod.def.path ?? []],
          // incorporates params.error into issue reporting
          continue: !inst._zod.def.abort
          // params: inst._zod.def.params,
        };
        if (inst._zod.def.params)
          _iss.params = inst._zod.def.params;
        payload.issues.push(util.issue(_iss));
      }
    }
    __name(handleRefineResult, "handleRefineResult");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ar.cjs
var require_ar = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ar.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "حرف", verb: "أن يحوي" },
        file: { unit: "بايت", verb: "أن يحوي" },
        array: { unit: "عنصر", verb: "أن يحوي" },
        set: { unit: "عنصر", verb: "أن يحوي" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "مدخل",
        email: "بريد إلكتروني",
        url: "رابط",
        emoji: "إيموجي",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "تاريخ ووقت بمعيار ISO",
        date: "تاريخ بمعيار ISO",
        time: "وقت بمعيار ISO",
        duration: "مدة بمعيار ISO",
        ipv4: "عنوان IPv4",
        ipv6: "عنوان IPv6",
        cidrv4: "مدى عناوين بصيغة IPv4",
        cidrv6: "مدى عناوين بصيغة IPv6",
        base64: "نَص بترميز base64-encoded",
        base64url: "نَص بترميز base64url-encoded",
        json_string: "نَص على هيئة JSON",
        e164: "رقم هاتف بمعيار E.164",
        jwt: "JWT",
        template_literal: "مدخل"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `مدخلات غير مقبولة: يفترض إدخال ${issue.expected}، ولكن تم إدخال ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `مدخلات غير مقبولة: يفترض إدخال ${util.stringifyPrimitive(issue.values[0])}`;
            return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return ` أكبر من اللازم: يفترض أن تكون ${issue.origin ?? "القيمة"} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "عنصر"}`;
            return `أكبر من اللازم: يفترض أن تكون ${issue.origin ?? "القيمة"} ${adj} ${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `أصغر من اللازم: يفترض لـ ${issue.origin} أن يكون ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `أصغر من اللازم: يفترض لـ ${issue.origin} أن يكون ${adj} ${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `نَص غير مقبول: يجب أن يبدأ بـ "${issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `نَص غير مقبول: يجب أن ينتهي بـ "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `نَص غير مقبول: يجب أن يتضمَّن "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `نَص غير مقبول: يجب أن يطابق النمط ${_issue.pattern}`;
            return `${Nouns[_issue.format] ?? issue.format} غير مقبول`;
          }
          case "not_multiple_of":
            return `رقم غير مقبول: يجب أن يكون من مضاعفات ${issue.divisor}`;
          case "unrecognized_keys":
            return `معرف${issue.keys.length > 1 ? "ات" : ""} غريب${issue.keys.length > 1 ? "ة" : ""}: ${util.joinValues(issue.keys, "، ")}`;
          case "invalid_key":
            return `معرف غير مقبول في ${issue.origin}`;
          case "invalid_union":
            return "مدخل غير مقبول";
          case "invalid_element":
            return `مدخل غير مقبول في ${issue.origin}`;
          default:
            return "مدخل غير مقبول";
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/az.cjs
var require_az = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/az.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "simvol", verb: "olmalıdır" },
        file: { unit: "bayt", verb: "olmalıdır" },
        array: { unit: "element", verb: "olmalıdır" },
        set: { unit: "element", verb: "olmalıdır" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Yanlış dəyər: gözlənilən ${issue.expected}, daxil olan ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Yanlış dəyər: gözlənilən ${util.stringifyPrimitive(issue.values[0])}`;
            return `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Çox böyük: gözlənilən ${issue.origin ?? "dəyər"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "element"}`;
            return `Çox böyük: gözlənilən ${issue.origin ?? "dəyər"} ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Çox kiçik: gözlənilən ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            return `Çox kiçik: gözlənilən ${issue.origin} ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Yanlış mətn: "${_issue.prefix}" ilə başlamalıdır`;
            if (_issue.format === "ends_with")
              return `Yanlış mətn: "${_issue.suffix}" ilə bitməlidir`;
            if (_issue.format === "includes")
              return `Yanlış mətn: "${_issue.includes}" daxil olmalıdır`;
            if (_issue.format === "regex")
              return `Yanlış mətn: ${_issue.pattern} şablonuna uyğun olmalıdır`;
            return `Yanlış ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Yanlış ədəd: ${issue.divisor} ilə bölünə bilən olmalıdır`;
          case "unrecognized_keys":
            return `Tanınmayan açar${issue.keys.length > 1 ? "lar" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `${issue.origin} daxilində yanlış açar`;
          case "invalid_union":
            return "Yanlış dəyər";
          case "invalid_element":
            return `${issue.origin} daxilində yanlış dəyər`;
          default:
            return `Yanlış dəyər`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/be.cjs
var require_be = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/be.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    function getBelarusianPlural(count, one, few, many) {
      const absCount = Math.abs(count);
      const lastDigit = absCount % 10;
      const lastTwoDigits = absCount % 100;
      if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
      }
      if (lastDigit === 1) {
        return one;
      }
      if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
      }
      return many;
    }
    __name(getBelarusianPlural, "getBelarusianPlural");
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: {
          unit: {
            one: "сімвал",
            few: "сімвалы",
            many: "сімвалаў"
          },
          verb: "мець"
        },
        array: {
          unit: {
            one: "элемент",
            few: "элементы",
            many: "элементаў"
          },
          verb: "мець"
        },
        set: {
          unit: {
            one: "элемент",
            few: "элементы",
            many: "элементаў"
          },
          verb: "мець"
        },
        file: {
          unit: {
            one: "байт",
            few: "байты",
            many: "байтаў"
          },
          verb: "мець"
        }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "лік";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "масіў";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "увод",
        email: "email адрас",
        url: "URL",
        emoji: "эмодзі",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO дата і час",
        date: "ISO дата",
        time: "ISO час",
        duration: "ISO працягласць",
        ipv4: "IPv4 адрас",
        ipv6: "IPv6 адрас",
        cidrv4: "IPv4 дыяпазон",
        cidrv6: "IPv6 дыяпазон",
        base64: "радок у фармаце base64",
        base64url: "радок у фармаце base64url",
        json_string: "JSON радок",
        e164: "нумар E.164",
        jwt: "JWT",
        template_literal: "увод"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Няправільны ўвод: чакаўся ${issue.expected}, атрымана ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Няправільны ўвод: чакалася ${util.stringifyPrimitive(issue.values[0])}`;
            return `Няправільны варыянт: чакаўся адзін з ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              const maxValue = Number(issue.maximum);
              const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
              return `Занадта вялікі: чакалася, што ${issue.origin ?? "значэнне"} павінна ${sizing.verb} ${adj}${issue.maximum.toString()} ${unit}`;
            }
            return `Занадта вялікі: чакалася, што ${issue.origin ?? "значэнне"} павінна быць ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              const minValue = Number(issue.minimum);
              const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
              return `Занадта малы: чакалася, што ${issue.origin} павінна ${sizing.verb} ${adj}${issue.minimum.toString()} ${unit}`;
            }
            return `Занадта малы: чакалася, што ${issue.origin} павінна быць ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Няправільны радок: павінен пачынацца з "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Няправільны радок: павінен заканчвацца на "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Няправільны радок: павінен змяшчаць "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Няправільны радок: павінен адпавядаць шаблону ${_issue.pattern}`;
            return `Няправільны ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Няправільны лік: павінен быць кратным ${issue.divisor}`;
          case "unrecognized_keys":
            return `Нераспазнаны ${issue.keys.length > 1 ? "ключы" : "ключ"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Няправільны ключ у ${issue.origin}`;
          case "invalid_union":
            return "Няправільны ўвод";
          case "invalid_element":
            return `Няправільнае значэнне ў ${issue.origin}`;
          default:
            return `Няправільны ўвод`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ca.cjs
var require_ca = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ca.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "caràcters", verb: "contenir" },
        file: { unit: "bytes", verb: "contenir" },
        array: { unit: "elements", verb: "contenir" },
        set: { unit: "elements", verb: "contenir" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "entrada",
        email: "adreça electrònica",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "durada ISO",
        ipv4: "adreça IPv4",
        ipv6: "adreça IPv6",
        cidrv4: "rang IPv4",
        cidrv6: "rang IPv6",
        base64: "cadena codificada en base64",
        base64url: "cadena codificada en base64url",
        json_string: "cadena JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${parsedType(issue.input)}`;
          // return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${util.getParsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Valor invàlid: s'esperava ${util.stringifyPrimitive(issue.values[0])}`;
            return `Opció invàlida: s'esperava una de ${util.joinValues(issue.values, " o ")}`;
          case "too_big": {
            const adj = issue.inclusive ? "com a màxim" : "menys de";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Massa gran: s'esperava que ${issue.origin ?? "el valor"} contingués ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
            return `Massa gran: s'esperava que ${issue.origin ?? "el valor"} fos ${adj} ${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? "com a mínim" : "més de";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Massa petit: s'esperava que ${issue.origin} contingués ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Massa petit: s'esperava que ${issue.origin} fos ${adj} ${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `Format invàlid: ha de començar amb "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Format invàlid: ha d'acabar amb "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Format invàlid: ha d'incloure "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Format invàlid: ha de coincidir amb el patró ${_issue.pattern}`;
            return `Format invàlid per a ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Número invàlid: ha de ser múltiple de ${issue.divisor}`;
          case "unrecognized_keys":
            return `Clau${issue.keys.length > 1 ? "s" : ""} no reconeguda${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Clau invàlida a ${issue.origin}`;
          case "invalid_union":
            return "Entrada invàlida";
          // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
          case "invalid_element":
            return `Element invàlid a ${issue.origin}`;
          default:
            return `Entrada invàlida`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/cs.cjs
var require_cs = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/cs.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "znaků", verb: "mít" },
        file: { unit: "bajtů", verb: "mít" },
        array: { unit: "prvků", verb: "mít" },
        set: { unit: "prvků", verb: "mít" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "číslo";
          }
          case "string": {
            return "řetězec";
          }
          case "boolean": {
            return "boolean";
          }
          case "bigint": {
            return "bigint";
          }
          case "function": {
            return "funkce";
          }
          case "symbol": {
            return "symbol";
          }
          case "undefined": {
            return "undefined";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "pole";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "regulární výraz",
        email: "e-mailová adresa",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "datum a čas ve formátu ISO",
        date: "datum ve formátu ISO",
        time: "čas ve formátu ISO",
        duration: "doba trvání ISO",
        ipv4: "IPv4 adresa",
        ipv6: "IPv6 adresa",
        cidrv4: "rozsah IPv4",
        cidrv6: "rozsah IPv6",
        base64: "řetězec zakódovaný ve formátu base64",
        base64url: "řetězec zakódovaný ve formátu base64url",
        json_string: "řetězec ve formátu JSON",
        e164: "číslo E.164",
        jwt: "JWT",
        template_literal: "vstup"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Neplatný vstup: očekáváno ${issue.expected}, obdrženo ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Neplatný vstup: očekáváno ${util.stringifyPrimitive(issue.values[0])}`;
            return `Neplatná možnost: očekávána jedna z hodnot ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Hodnota je příliš velká: ${issue.origin ?? "hodnota"} musí mít ${adj}${issue.maximum.toString()} ${sizing.unit ?? "prvků"}`;
            }
            return `Hodnota je příliš velká: ${issue.origin ?? "hodnota"} musí být ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Hodnota je příliš malá: ${issue.origin ?? "hodnota"} musí mít ${adj}${issue.minimum.toString()} ${sizing.unit ?? "prvků"}`;
            }
            return `Hodnota je příliš malá: ${issue.origin ?? "hodnota"} musí být ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Neplatný řetězec: musí začínat na "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Neplatný řetězec: musí končit na "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Neplatný řetězec: musí obsahovat "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Neplatný řetězec: musí odpovídat vzoru ${_issue.pattern}`;
            return `Neplatný formát ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Neplatné číslo: musí být násobkem ${issue.divisor}`;
          case "unrecognized_keys":
            return `Neznámé klíče: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Neplatný klíč v ${issue.origin}`;
          case "invalid_union":
            return "Neplatný vstup";
          case "invalid_element":
            return `Neplatná hodnota v ${issue.origin}`;
          default:
            return `Neplatný vstup`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/da.cjs
var require_da = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/da.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "tegn", verb: "havde" },
        file: { unit: "bytes", verb: "havde" },
        array: { unit: "elementer", verb: "indeholdt" },
        set: { unit: "elementer", verb: "indeholdt" }
      };
      const TypeNames = {
        string: "streng",
        number: "tal",
        boolean: "boolean",
        array: "liste",
        object: "objekt",
        set: "sæt",
        file: "fil"
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      function getTypeName(type) {
        return TypeNames[type] ?? type;
      }
      __name(getTypeName, "getTypeName");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "tal";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "liste";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
            return "objekt";
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "input",
        email: "e-mailadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslæt",
        date: "ISO-dato",
        time: "ISO-klokkeslæt",
        duration: "ISO-varighed",
        ipv4: "IPv4-område",
        ipv6: "IPv6-område",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodet streng",
        base64url: "base64url-kodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Ugyldigt input: forventede ${getTypeName(issue.expected)}, fik ${getTypeName(parsedType(issue.input))}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Ugyldig værdi: forventede ${util.stringifyPrimitive(issue.values[0])}`;
            return `Ugyldigt valg: forventede en af følgende ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            const origin = getTypeName(issue.origin);
            if (sizing)
              return `For stor: forventede ${origin ?? "value"} ${sizing.verb} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "elementer"}`;
            return `For stor: forventede ${origin ?? "value"} havde ${adj} ${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            const origin = getTypeName(issue.origin);
            if (sizing) {
              return `For lille: forventede ${origin} ${sizing.verb} ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `For lille: forventede ${origin} havde ${adj} ${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Ugyldig streng: skal starte med "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Ugyldig streng: skal ende med "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Ugyldig streng: skal indeholde "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Ugyldig streng: skal matche mønsteret ${_issue.pattern}`;
            return `Ugyldig ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Ugyldigt tal: skal være deleligt med ${issue.divisor}`;
          case "unrecognized_keys":
            return `${issue.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Ugyldig nøgle i ${issue.origin}`;
          case "invalid_union":
            return "Ugyldigt input: matcher ingen af de tilladte typer";
          case "invalid_element":
            return `Ugyldig værdi i ${issue.origin}`;
          default:
            return `Ugyldigt input`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/de.cjs
var require_de = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/de.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "Zeichen", verb: "zu haben" },
        file: { unit: "Bytes", verb: "zu haben" },
        array: { unit: "Elemente", verb: "zu haben" },
        set: { unit: "Elemente", verb: "zu haben" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "Zahl";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "Array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "Eingabe",
        email: "E-Mail-Adresse",
        url: "URL",
        emoji: "Emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-Datum und -Uhrzeit",
        date: "ISO-Datum",
        time: "ISO-Uhrzeit",
        duration: "ISO-Dauer",
        ipv4: "IPv4-Adresse",
        ipv6: "IPv6-Adresse",
        cidrv4: "IPv4-Bereich",
        cidrv6: "IPv6-Bereich",
        base64: "Base64-codierter String",
        base64url: "Base64-URL-codierter String",
        json_string: "JSON-String",
        e164: "E.164-Nummer",
        jwt: "JWT",
        template_literal: "Eingabe"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Ungültige Eingabe: erwartet ${issue.expected}, erhalten ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Ungültige Eingabe: erwartet ${util.stringifyPrimitive(issue.values[0])}`;
            return `Ungültige Option: erwartet eine von ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Zu groß: erwartet, dass ${issue.origin ?? "Wert"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
            return `Zu groß: erwartet, dass ${issue.origin ?? "Wert"} ${adj}${issue.maximum.toString()} ist`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Zu klein: erwartet, dass ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} hat`;
            }
            return `Zu klein: erwartet, dass ${issue.origin} ${adj}${issue.minimum.toString()} ist`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Ungültiger String: muss mit "${_issue.prefix}" beginnen`;
            if (_issue.format === "ends_with")
              return `Ungültiger String: muss mit "${_issue.suffix}" enden`;
            if (_issue.format === "includes")
              return `Ungültiger String: muss "${_issue.includes}" enthalten`;
            if (_issue.format === "regex")
              return `Ungültiger String: muss dem Muster ${_issue.pattern} entsprechen`;
            return `Ungültig: ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Ungültige Zahl: muss ein Vielfaches von ${issue.divisor} sein`;
          case "unrecognized_keys":
            return `${issue.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Ungültiger Schlüssel in ${issue.origin}`;
          case "invalid_union":
            return "Ungültige Eingabe";
          case "invalid_element":
            return `Ungültiger Wert in ${issue.origin}`;
          default:
            return `Ungültige Eingabe`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/en.cjs
var require_en = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/en.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parsedType = void 0;
    exports.default = default_1;
    var util = __importStar(require_util());
    var parsedType = /* @__PURE__ */ __name((data) => {
      const t = typeof data;
      switch (t) {
        case "number": {
          return Number.isNaN(data) ? "NaN" : "number";
        }
        case "object": {
          if (Array.isArray(data)) {
            return "array";
          }
          if (data === null) {
            return "null";
          }
          if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
            return data.constructor.name;
          }
        }
      }
      return t;
    }, "parsedType");
    exports.parsedType = parsedType;
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "characters", verb: "to have" },
        file: { unit: "bytes", verb: "to have" },
        array: { unit: "items", verb: "to have" },
        set: { unit: "items", verb: "to have" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const Nouns = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Invalid input: expected ${issue.expected}, received ${(0, exports.parsedType)(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Invalid input: expected ${util.stringifyPrimitive(issue.values[0])}`;
            return `Invalid option: expected one of ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Too big: expected ${issue.origin ?? "value"} to have ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
            return `Too big: expected ${issue.origin ?? "value"} to be ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Too small: expected ${issue.origin} to have ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Too small: expected ${issue.origin} to be ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `Invalid string: must start with "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Invalid string: must end with "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Invalid string: must include "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Invalid string: must match pattern ${_issue.pattern}`;
            return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Invalid number: must be a multiple of ${issue.divisor}`;
          case "unrecognized_keys":
            return `Unrecognized key${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Invalid key in ${issue.origin}`;
          case "invalid_union":
            return "Invalid input";
          case "invalid_element":
            return `Invalid value in ${issue.origin}`;
          default:
            return `Invalid input`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/eo.cjs
var require_eo = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/eo.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parsedType = void 0;
    exports.default = default_1;
    var util = __importStar(require_util());
    var parsedType = /* @__PURE__ */ __name((data) => {
      const t = typeof data;
      switch (t) {
        case "number": {
          return Number.isNaN(data) ? "NaN" : "nombro";
        }
        case "object": {
          if (Array.isArray(data)) {
            return "tabelo";
          }
          if (data === null) {
            return "senvalora";
          }
          if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
            return data.constructor.name;
          }
        }
      }
      return t;
    }, "parsedType");
    exports.parsedType = parsedType;
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "karaktrojn", verb: "havi" },
        file: { unit: "bajtojn", verb: "havi" },
        array: { unit: "elementojn", verb: "havi" },
        set: { unit: "elementojn", verb: "havi" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const Nouns = {
        regex: "enigo",
        email: "retadreso",
        url: "URL",
        emoji: "emoĝio",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-datotempo",
        date: "ISO-dato",
        time: "ISO-tempo",
        duration: "ISO-daŭro",
        ipv4: "IPv4-adreso",
        ipv6: "IPv6-adreso",
        cidrv4: "IPv4-rango",
        cidrv6: "IPv6-rango",
        base64: "64-ume kodita karaktraro",
        base64url: "URL-64-ume kodita karaktraro",
        json_string: "JSON-karaktraro",
        e164: "E.164-nombro",
        jwt: "JWT",
        template_literal: "enigo"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Nevalida enigo: atendiĝis ${issue.expected}, riceviĝis ${(0, exports.parsedType)(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Nevalida enigo: atendiĝis ${util.stringifyPrimitive(issue.values[0])}`;
            return `Nevalida opcio: atendiĝis unu el ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Tro granda: atendiĝis ke ${issue.origin ?? "valoro"} havu ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
            return `Tro granda: atendiĝis ke ${issue.origin ?? "valoro"} havu ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Tro malgranda: atendiĝis ke ${issue.origin} havu ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Tro malgranda: atendiĝis ke ${issue.origin} estu ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Nevalida karaktraro: devas komenciĝi per "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Nevalida karaktraro: devas finiĝi per "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
            return `Nevalida ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Nevalida nombro: devas esti oblo de ${issue.divisor}`;
          case "unrecognized_keys":
            return `Nekonata${issue.keys.length > 1 ? "j" : ""} ŝlosilo${issue.keys.length > 1 ? "j" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Nevalida ŝlosilo en ${issue.origin}`;
          case "invalid_union":
            return "Nevalida enigo";
          case "invalid_element":
            return `Nevalida valoro en ${issue.origin}`;
          default:
            return `Nevalida enigo`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/es.cjs
var require_es = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/es.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "caracteres", verb: "tener" },
        file: { unit: "bytes", verb: "tener" },
        array: { unit: "elementos", verb: "tener" },
        set: { unit: "elementos", verb: "tener" }
      };
      const TypeNames = {
        string: "texto",
        number: "número",
        boolean: "booleano",
        array: "arreglo",
        object: "objeto",
        set: "conjunto",
        file: "archivo",
        date: "fecha",
        bigint: "número grande",
        symbol: "símbolo",
        undefined: "indefinido",
        null: "nulo",
        function: "función",
        map: "mapa",
        record: "registro",
        tuple: "tupla",
        enum: "enumeración",
        union: "unión",
        literal: "literal",
        promise: "promesa",
        void: "vacío",
        never: "nunca",
        unknown: "desconocido",
        any: "cualquiera"
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      function getTypeName(type) {
        return TypeNames[type] ?? type;
      }
      __name(getTypeName, "getTypeName");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype) {
              return data.constructor.name;
            }
            return "object";
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "entrada",
        email: "dirección de correo electrónico",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "fecha y hora ISO",
        date: "fecha ISO",
        time: "hora ISO",
        duration: "duración ISO",
        ipv4: "dirección IPv4",
        ipv6: "dirección IPv6",
        cidrv4: "rango IPv4",
        cidrv6: "rango IPv6",
        base64: "cadena codificada en base64",
        base64url: "URL codificada en base64",
        json_string: "cadena JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Entrada inválida: se esperaba ${getTypeName(issue.expected)}, recibido ${getTypeName(parsedType(issue.input))}`;
          // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Entrada inválida: se esperaba ${util.stringifyPrimitive(issue.values[0])}`;
            return `Opción inválida: se esperaba una de ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            const origin = getTypeName(issue.origin);
            if (sizing)
              return `Demasiado grande: se esperaba que ${origin ?? "valor"} tuviera ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementos"}`;
            return `Demasiado grande: se esperaba que ${origin ?? "valor"} fuera ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            const origin = getTypeName(issue.origin);
            if (sizing) {
              return `Demasiado pequeño: se esperaba que ${origin} tuviera ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Demasiado pequeño: se esperaba que ${origin} fuera ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Cadena inválida: debe comenzar con "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Cadena inválida: debe terminar en "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Cadena inválida: debe incluir "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Cadena inválida: debe coincidir con el patrón ${_issue.pattern}`;
            return `Inválido ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Número inválido: debe ser múltiplo de ${issue.divisor}`;
          case "unrecognized_keys":
            return `Llave${issue.keys.length > 1 ? "s" : ""} desconocida${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Llave inválida en ${getTypeName(issue.origin)}`;
          case "invalid_union":
            return "Entrada inválida";
          case "invalid_element":
            return `Valor inválido en ${getTypeName(issue.origin)}`;
          default:
            return `Entrada inválida`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/fa.cjs
var require_fa = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/fa.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "کاراکتر", verb: "داشته باشد" },
        file: { unit: "بایت", verb: "داشته باشد" },
        array: { unit: "آیتم", verb: "داشته باشد" },
        set: { unit: "آیتم", verb: "داشته باشد" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "عدد";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "آرایه";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "ورودی",
        email: "آدرس ایمیل",
        url: "URL",
        emoji: "ایموجی",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "تاریخ و زمان ایزو",
        date: "تاریخ ایزو",
        time: "زمان ایزو",
        duration: "مدت زمان ایزو",
        ipv4: "IPv4 آدرس",
        ipv6: "IPv6 آدرس",
        cidrv4: "IPv4 دامنه",
        cidrv6: "IPv6 دامنه",
        base64: "base64-encoded رشته",
        base64url: "base64url-encoded رشته",
        json_string: "JSON رشته",
        e164: "E.164 عدد",
        jwt: "JWT",
        template_literal: "ورودی"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `ورودی نامعتبر: می‌بایست ${issue.expected} می‌بود، ${parsedType(issue.input)} دریافت شد`;
          case "invalid_value":
            if (issue.values.length === 1) {
              return `ورودی نامعتبر: می‌بایست ${util.stringifyPrimitive(issue.values[0])} می‌بود`;
            }
            return `گزینه نامعتبر: می‌بایست یکی از ${util.joinValues(issue.values, "|")} می‌بود`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `خیلی بزرگ: ${issue.origin ?? "مقدار"} باید ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عنصر"} باشد`;
            }
            return `خیلی بزرگ: ${issue.origin ?? "مقدار"} باید ${adj}${issue.maximum.toString()} باشد`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `خیلی کوچک: ${issue.origin} باید ${adj}${issue.minimum.toString()} ${sizing.unit} باشد`;
            }
            return `خیلی کوچک: ${issue.origin} باید ${adj}${issue.minimum.toString()} باشد`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `رشته نامعتبر: باید با "${_issue.prefix}" شروع شود`;
            }
            if (_issue.format === "ends_with") {
              return `رشته نامعتبر: باید با "${_issue.suffix}" تمام شود`;
            }
            if (_issue.format === "includes") {
              return `رشته نامعتبر: باید شامل "${_issue.includes}" باشد`;
            }
            if (_issue.format === "regex") {
              return `رشته نامعتبر: باید با الگوی ${_issue.pattern} مطابقت داشته باشد`;
            }
            return `${Nouns[_issue.format] ?? issue.format} نامعتبر`;
          }
          case "not_multiple_of":
            return `عدد نامعتبر: باید مضرب ${issue.divisor} باشد`;
          case "unrecognized_keys":
            return `کلید${issue.keys.length > 1 ? "های" : ""} ناشناس: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `کلید ناشناس در ${issue.origin}`;
          case "invalid_union":
            return `ورودی نامعتبر`;
          case "invalid_element":
            return `مقدار نامعتبر در ${issue.origin}`;
          default:
            return `ورودی نامعتبر`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/fi.cjs
var require_fi = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/fi.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "merkkiä", subject: "merkkijonon" },
        file: { unit: "tavua", subject: "tiedoston" },
        array: { unit: "alkiota", subject: "listan" },
        set: { unit: "alkiota", subject: "joukon" },
        number: { unit: "", subject: "luvun" },
        bigint: { unit: "", subject: "suuren kokonaisluvun" },
        int: { unit: "", subject: "kokonaisluvun" },
        date: { unit: "", subject: "päivämäärän" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "säännöllinen lauseke",
        email: "sähköpostiosoite",
        url: "URL-osoite",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-aikaleima",
        date: "ISO-päivämäärä",
        time: "ISO-aika",
        duration: "ISO-kesto",
        ipv4: "IPv4-osoite",
        ipv6: "IPv6-osoite",
        cidrv4: "IPv4-alue",
        cidrv6: "IPv6-alue",
        base64: "base64-koodattu merkkijono",
        base64url: "base64url-koodattu merkkijono",
        json_string: "JSON-merkkijono",
        e164: "E.164-luku",
        jwt: "JWT",
        template_literal: "templaattimerkkijono"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Virheellinen tyyppi: odotettiin ${issue.expected}, oli ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Virheellinen syöte: täytyy olla ${util.stringifyPrimitive(issue.values[0])}`;
            return `Virheellinen valinta: täytyy olla yksi seuraavista: ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Liian suuri: ${sizing.subject} täytyy olla ${adj}${issue.maximum.toString()} ${sizing.unit}`.trim();
            }
            return `Liian suuri: arvon täytyy olla ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Liian pieni: ${sizing.subject} täytyy olla ${adj}${issue.minimum.toString()} ${sizing.unit}`.trim();
            }
            return `Liian pieni: arvon täytyy olla ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Virheellinen syöte: täytyy alkaa "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Virheellinen syöte: täytyy loppua "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Virheellinen syöte: täytyy sisältää "${_issue.includes}"`;
            if (_issue.format === "regex") {
              return `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${_issue.pattern}`;
            }
            return `Virheellinen ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Virheellinen luku: täytyy olla luvun ${issue.divisor} monikerta`;
          case "unrecognized_keys":
            return `${issue.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return "Virheellinen avain tietueessa";
          case "invalid_union":
            return "Virheellinen unioni";
          case "invalid_element":
            return "Virheellinen arvo joukossa";
          default:
            return `Virheellinen syöte`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/fr.cjs
var require_fr = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/fr.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "caractères", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "éléments", verb: "avoir" },
        set: { unit: "éléments", verb: "avoir" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "nombre";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "tableau";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "entrée",
        email: "adresse e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date et heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "durée ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "chaîne encodée en base64",
        base64url: "chaîne encodée en base64url",
        json_string: "chaîne JSON",
        e164: "numéro E.164",
        jwt: "JWT",
        template_literal: "entrée"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Entrée invalide : ${issue.expected} attendu, ${parsedType(issue.input)} reçu`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Entrée invalide : ${util.stringifyPrimitive(issue.values[0])} attendu`;
            return `Option invalide : une valeur parmi ${util.joinValues(issue.values, "|")} attendue`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Trop grand : ${issue.origin ?? "valeur"} doit ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "élément(s)"}`;
            return `Trop grand : ${issue.origin ?? "valeur"} doit être ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Trop petit : ${issue.origin} doit ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Trop petit : ${issue.origin} doit être ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Chaîne invalide : doit inclure "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Chaîne invalide : doit correspondre au modèle ${_issue.pattern}`;
            return `${Nouns[_issue.format] ?? issue.format} invalide`;
          }
          case "not_multiple_of":
            return `Nombre invalide : doit être un multiple de ${issue.divisor}`;
          case "unrecognized_keys":
            return `Clé${issue.keys.length > 1 ? "s" : ""} non reconnue${issue.keys.length > 1 ? "s" : ""} : ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Clé invalide dans ${issue.origin}`;
          case "invalid_union":
            return "Entrée invalide";
          case "invalid_element":
            return `Valeur invalide dans ${issue.origin}`;
          default:
            return `Entrée invalide`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/fr-CA.cjs
var require_fr_CA = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/fr-CA.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "caractères", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "éléments", verb: "avoir" },
        set: { unit: "éléments", verb: "avoir" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "entrée",
        email: "adresse courriel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date-heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "durée ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "chaîne encodée en base64",
        base64url: "chaîne encodée en base64url",
        json_string: "chaîne JSON",
        e164: "numéro E.164",
        jwt: "JWT",
        template_literal: "entrée"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Entrée invalide : attendu ${issue.expected}, reçu ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Entrée invalide : attendu ${util.stringifyPrimitive(issue.values[0])}`;
            return `Option invalide : attendu l'une des valeurs suivantes ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "≤" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Trop grand : attendu que ${issue.origin ?? "la valeur"} ait ${adj}${issue.maximum.toString()} ${sizing.unit}`;
            return `Trop grand : attendu que ${issue.origin ?? "la valeur"} soit ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? "≥" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Trop petit : attendu que ${issue.origin} ait ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Trop petit : attendu que ${issue.origin} soit ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Chaîne invalide : doit inclure "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Chaîne invalide : doit correspondre au motif ${_issue.pattern}`;
            return `${Nouns[_issue.format] ?? issue.format} invalide`;
          }
          case "not_multiple_of":
            return `Nombre invalide : doit être un multiple de ${issue.divisor}`;
          case "unrecognized_keys":
            return `Clé${issue.keys.length > 1 ? "s" : ""} non reconnue${issue.keys.length > 1 ? "s" : ""} : ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Clé invalide dans ${issue.origin}`;
          case "invalid_union":
            return "Entrée invalide";
          case "invalid_element":
            return `Valeur invalide dans ${issue.origin}`;
          default:
            return `Entrée invalide`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/he.cjs
var require_he = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/he.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "אותיות", verb: "לכלול" },
        file: { unit: "בייטים", verb: "לכלול" },
        array: { unit: "פריטים", verb: "לכלול" },
        set: { unit: "פריטים", verb: "לכלול" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "קלט",
        email: "כתובת אימייל",
        url: "כתובת רשת",
        emoji: "אימוג'י",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "תאריך וזמן ISO",
        date: "תאריך ISO",
        time: "זמן ISO",
        duration: "משך זמן ISO",
        ipv4: "כתובת IPv4",
        ipv6: "כתובת IPv6",
        cidrv4: "טווח IPv4",
        cidrv6: "טווח IPv6",
        base64: "מחרוזת בבסיס 64",
        base64url: "מחרוזת בבסיס 64 לכתובות רשת",
        json_string: "מחרוזת JSON",
        e164: "מספר E.164",
        jwt: "JWT",
        template_literal: "קלט"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `קלט לא תקין: צריך ${issue.expected}, התקבל ${parsedType(issue.input)}`;
          // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `קלט לא תקין: צריך ${util.stringifyPrimitive(issue.values[0])}`;
            return `קלט לא תקין: צריך אחת מהאפשרויות  ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `גדול מדי: ${issue.origin ?? "value"} צריך להיות ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
            return `גדול מדי: ${issue.origin ?? "value"} צריך להיות ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `קטן מדי: ${issue.origin} צריך להיות ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `קטן מדי: ${issue.origin} צריך להיות ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `מחרוזת לא תקינה: חייבת להתחיל ב"${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `מחרוזת לא תקינה: חייבת להסתיים ב "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `מחרוזת לא תקינה: חייבת לכלול "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${_issue.pattern}`;
            return `${Nouns[_issue.format] ?? issue.format} לא תקין`;
          }
          case "not_multiple_of":
            return `מספר לא תקין: חייב להיות מכפלה של ${issue.divisor}`;
          case "unrecognized_keys":
            return `מפתח${issue.keys.length > 1 ? "ות" : ""} לא מזוה${issue.keys.length > 1 ? "ים" : "ה"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `מפתח לא תקין ב${issue.origin}`;
          case "invalid_union":
            return "קלט לא תקין";
          case "invalid_element":
            return `ערך לא תקין ב${issue.origin}`;
          default:
            return `קלט לא תקין`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/hu.cjs
var require_hu = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/hu.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "karakter", verb: "legyen" },
        file: { unit: "byte", verb: "legyen" },
        array: { unit: "elem", verb: "legyen" },
        set: { unit: "elem", verb: "legyen" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "szám";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "tömb";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "bemenet",
        email: "email cím",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO időbélyeg",
        date: "ISO dátum",
        time: "ISO idő",
        duration: "ISO időintervallum",
        ipv4: "IPv4 cím",
        ipv6: "IPv6 cím",
        cidrv4: "IPv4 tartomány",
        cidrv6: "IPv6 tartomány",
        base64: "base64-kódolt string",
        base64url: "base64url-kódolt string",
        json_string: "JSON string",
        e164: "E.164 szám",
        jwt: "JWT",
        template_literal: "bemenet"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Érvénytelen bemenet: a várt érték ${issue.expected}, a kapott érték ${parsedType(issue.input)}`;
          // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Érvénytelen bemenet: a várt érték ${util.stringifyPrimitive(issue.values[0])}`;
            return `Érvénytelen opció: valamelyik érték várt ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Túl nagy: ${issue.origin ?? "érték"} mérete túl nagy ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elem"}`;
            return `Túl nagy: a bemeneti érték ${issue.origin ?? "érték"} túl nagy: ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Túl kicsi: a bemeneti érték ${issue.origin} mérete túl kicsi ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Túl kicsi: a bemeneti érték ${issue.origin} túl kicsi ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Érvénytelen string: "${_issue.prefix}" értékkel kell kezdődnie`;
            if (_issue.format === "ends_with")
              return `Érvénytelen string: "${_issue.suffix}" értékkel kell végződnie`;
            if (_issue.format === "includes")
              return `Érvénytelen string: "${_issue.includes}" értéket kell tartalmaznia`;
            if (_issue.format === "regex")
              return `Érvénytelen string: ${_issue.pattern} mintának kell megfelelnie`;
            return `Érvénytelen ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Érvénytelen szám: ${issue.divisor} többszörösének kell lennie`;
          case "unrecognized_keys":
            return `Ismeretlen kulcs${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Érvénytelen kulcs ${issue.origin}`;
          case "invalid_union":
            return "Érvénytelen bemenet";
          case "invalid_element":
            return `Érvénytelen érték: ${issue.origin}`;
          default:
            return `Érvénytelen bemenet`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/id.cjs
var require_id = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/id.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "karakter", verb: "memiliki" },
        file: { unit: "byte", verb: "memiliki" },
        array: { unit: "item", verb: "memiliki" },
        set: { unit: "item", verb: "memiliki" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "input",
        email: "alamat email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tanggal dan waktu format ISO",
        date: "tanggal format ISO",
        time: "jam format ISO",
        duration: "durasi format ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "rentang alamat IPv4",
        cidrv6: "rentang alamat IPv6",
        base64: "string dengan enkode base64",
        base64url: "string dengan enkode base64url",
        json_string: "string JSON",
        e164: "angka E.164",
        jwt: "JWT",
        template_literal: "input"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Input tidak valid: diharapkan ${issue.expected}, diterima ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Input tidak valid: diharapkan ${util.stringifyPrimitive(issue.values[0])}`;
            return `Pilihan tidak valid: diharapkan salah satu dari ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Terlalu besar: diharapkan ${issue.origin ?? "value"} memiliki ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elemen"}`;
            return `Terlalu besar: diharapkan ${issue.origin ?? "value"} menjadi ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Terlalu kecil: diharapkan ${issue.origin} memiliki ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Terlalu kecil: diharapkan ${issue.origin} menjadi ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `String tidak valid: harus menyertakan "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
            return `${Nouns[_issue.format] ?? issue.format} tidak valid`;
          }
          case "not_multiple_of":
            return `Angka tidak valid: harus kelipatan dari ${issue.divisor}`;
          case "unrecognized_keys":
            return `Kunci tidak dikenali ${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Kunci tidak valid di ${issue.origin}`;
          case "invalid_union":
            return "Input tidak valid";
          case "invalid_element":
            return `Nilai tidak valid di ${issue.origin}`;
          default:
            return `Input tidak valid`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/is.cjs
var require_is = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/is.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parsedType = void 0;
    exports.default = default_1;
    var util = __importStar(require_util());
    var parsedType = /* @__PURE__ */ __name((data) => {
      const t = typeof data;
      switch (t) {
        case "number": {
          return Number.isNaN(data) ? "NaN" : "númer";
        }
        case "object": {
          if (Array.isArray(data)) {
            return "fylki";
          }
          if (data === null) {
            return "null";
          }
          if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
            return data.constructor.name;
          }
        }
      }
      return t;
    }, "parsedType");
    exports.parsedType = parsedType;
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "stafi", verb: "að hafa" },
        file: { unit: "bæti", verb: "að hafa" },
        array: { unit: "hluti", verb: "að hafa" },
        set: { unit: "hluti", verb: "að hafa" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const Nouns = {
        regex: "gildi",
        email: "netfang",
        url: "vefslóð",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dagsetning og tími",
        date: "ISO dagsetning",
        time: "ISO tími",
        duration: "ISO tímalengd",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded strengur",
        base64url: "base64url-encoded strengur",
        json_string: "JSON strengur",
        e164: "E.164 tölugildi",
        jwt: "JWT",
        template_literal: "gildi"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Rangt gildi: Þú slóst inn ${(0, exports.parsedType)(issue.input)} þar sem á að vera ${issue.expected}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Rangt gildi: gert ráð fyrir ${util.stringifyPrimitive(issue.values[0])}`;
            return `Ógilt val: má vera eitt af eftirfarandi ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Of stórt: gert er ráð fyrir að ${issue.origin ?? "gildi"} hafi ${adj}${issue.maximum.toString()} ${sizing.unit ?? "hluti"}`;
            return `Of stórt: gert er ráð fyrir að ${issue.origin ?? "gildi"} sé ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Of lítið: gert er ráð fyrir að ${issue.origin} hafi ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Of lítið: gert er ráð fyrir að ${issue.origin} sé ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `Ógildur strengur: verður að byrja á "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Ógildur strengur: verður að enda á "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Ógildur strengur: verður að innihalda "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Ógildur strengur: verður að fylgja mynstri ${_issue.pattern}`;
            return `Rangt ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Röng tala: verður að vera margfeldi af ${issue.divisor}`;
          case "unrecognized_keys":
            return `Óþekkt ${issue.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Rangur lykill í ${issue.origin}`;
          case "invalid_union":
            return "Rangt gildi";
          case "invalid_element":
            return `Rangt gildi í ${issue.origin}`;
          default:
            return `Rangt gildi`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/it.cjs
var require_it = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/it.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "caratteri", verb: "avere" },
        file: { unit: "byte", verb: "avere" },
        array: { unit: "elementi", verb: "avere" },
        set: { unit: "elementi", verb: "avere" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "numero";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "vettore";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "input",
        email: "indirizzo email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e ora ISO",
        date: "data ISO",
        time: "ora ISO",
        duration: "durata ISO",
        ipv4: "indirizzo IPv4",
        ipv6: "indirizzo IPv6",
        cidrv4: "intervallo IPv4",
        cidrv6: "intervallo IPv6",
        base64: "stringa codificata in base64",
        base64url: "URL codificata in base64",
        json_string: "stringa JSON",
        e164: "numero E.164",
        jwt: "JWT",
        template_literal: "input"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Input non valido: atteso ${issue.expected}, ricevuto ${parsedType(issue.input)}`;
          // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Input non valido: atteso ${util.stringifyPrimitive(issue.values[0])}`;
            return `Opzione non valida: atteso uno tra ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Troppo grande: ${issue.origin ?? "valore"} deve avere ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementi"}`;
            return `Troppo grande: ${issue.origin ?? "valore"} deve essere ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Troppo piccolo: ${issue.origin} deve avere ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Troppo piccolo: ${issue.origin} deve essere ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Stringa non valida: deve includere "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
            return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Numero non valido: deve essere un multiplo di ${issue.divisor}`;
          case "unrecognized_keys":
            return `Chiav${issue.keys.length > 1 ? "i" : "e"} non riconosciut${issue.keys.length > 1 ? "e" : "a"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Chiave non valida in ${issue.origin}`;
          case "invalid_union":
            return "Input non valido";
          case "invalid_element":
            return `Valore non valido in ${issue.origin}`;
          default:
            return `Input non valido`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ja.cjs
var require_ja = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ja.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "文字", verb: "である" },
        file: { unit: "バイト", verb: "である" },
        array: { unit: "要素", verb: "である" },
        set: { unit: "要素", verb: "である" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "数値";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "配列";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "入力値",
        email: "メールアドレス",
        url: "URL",
        emoji: "絵文字",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO日時",
        date: "ISO日付",
        time: "ISO時刻",
        duration: "ISO期間",
        ipv4: "IPv4アドレス",
        ipv6: "IPv6アドレス",
        cidrv4: "IPv4範囲",
        cidrv6: "IPv6範囲",
        base64: "base64エンコード文字列",
        base64url: "base64urlエンコード文字列",
        json_string: "JSON文字列",
        e164: "E.164番号",
        jwt: "JWT",
        template_literal: "入力値"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `無効な入力: ${issue.expected}が期待されましたが、${parsedType(issue.input)}が入力されました`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `無効な入力: ${util.stringifyPrimitive(issue.values[0])}が期待されました`;
            return `無効な選択: ${util.joinValues(issue.values, "、")}のいずれかである必要があります`;
          case "too_big": {
            const adj = issue.inclusive ? "以下である" : "より小さい";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `大きすぎる値: ${issue.origin ?? "値"}は${issue.maximum.toString()}${sizing.unit ?? "要素"}${adj}必要があります`;
            return `大きすぎる値: ${issue.origin ?? "値"}は${issue.maximum.toString()}${adj}必要があります`;
          }
          case "too_small": {
            const adj = issue.inclusive ? "以上である" : "より大きい";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `小さすぎる値: ${issue.origin}は${issue.minimum.toString()}${sizing.unit}${adj}必要があります`;
            return `小さすぎる値: ${issue.origin}は${issue.minimum.toString()}${adj}必要があります`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `無効な文字列: "${_issue.prefix}"で始まる必要があります`;
            if (_issue.format === "ends_with")
              return `無効な文字列: "${_issue.suffix}"で終わる必要があります`;
            if (_issue.format === "includes")
              return `無効な文字列: "${_issue.includes}"を含む必要があります`;
            if (_issue.format === "regex")
              return `無効な文字列: パターン${_issue.pattern}に一致する必要があります`;
            return `無効な${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `無効な数値: ${issue.divisor}の倍数である必要があります`;
          case "unrecognized_keys":
            return `認識されていないキー${issue.keys.length > 1 ? "群" : ""}: ${util.joinValues(issue.keys, "、")}`;
          case "invalid_key":
            return `${issue.origin}内の無効なキー`;
          case "invalid_union":
            return "無効な入力";
          case "invalid_element":
            return `${issue.origin}内の無効な値`;
          default:
            return `無効な入力`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ka.cjs
var require_ka = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ka.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parsedType = void 0;
    exports.default = default_1;
    var util = __importStar(require_util());
    var parsedType = /* @__PURE__ */ __name((data) => {
      const t = typeof data;
      switch (t) {
        case "number": {
          return Number.isNaN(data) ? "NaN" : "რიცხვი";
        }
        case "object": {
          if (Array.isArray(data)) {
            return "მასივი";
          }
          if (data === null) {
            return "null";
          }
          if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
            return data.constructor.name;
          }
        }
      }
      const typeMap = {
        string: "სტრინგი",
        boolean: "ბულეანი",
        undefined: "undefined",
        bigint: "bigint",
        symbol: "symbol",
        function: "ფუნქცია"
      };
      return typeMap[t] ?? t;
    }, "parsedType");
    exports.parsedType = parsedType;
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
        file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
        array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
        set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const Nouns = {
        regex: "შეყვანა",
        email: "ელ-ფოსტის მისამართი",
        url: "URL",
        emoji: "ემოჯი",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "თარიღი-დრო",
        date: "თარიღი",
        time: "დრო",
        duration: "ხანგრძლივობა",
        ipv4: "IPv4 მისამართი",
        ipv6: "IPv6 მისამართი",
        cidrv4: "IPv4 დიაპაზონი",
        cidrv6: "IPv6 დიაპაზონი",
        base64: "base64-კოდირებული სტრინგი",
        base64url: "base64url-კოდირებული სტრინგი",
        json_string: "JSON სტრინგი",
        e164: "E.164 ნომერი",
        jwt: "JWT",
        template_literal: "შეყვანა"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `არასწორი შეყვანა: მოსალოდნელი ${issue.expected}, მიღებული ${(0, exports.parsedType)(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `არასწორი შეყვანა: მოსალოდნელი ${util.stringifyPrimitive(issue.values[0])}`;
            return `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${util.joinValues(issue.values, "|")}-დან`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `ზედმეტად დიდი: მოსალოდნელი ${issue.origin ?? "მნიშვნელობა"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit}`;
            return `ზედმეტად დიდი: მოსალოდნელი ${issue.origin ?? "მნიშვნელობა"} იყოს ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `ზედმეტად პატარა: მოსალოდნელი ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `ზედმეტად პატარა: მოსალოდნელი ${issue.origin} იყოს ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `არასწორი სტრინგი: უნდა იწყებოდეს "${_issue.prefix}"-ით`;
            }
            if (_issue.format === "ends_with")
              return `არასწორი სტრინგი: უნდა მთავრდებოდეს "${_issue.suffix}"-ით`;
            if (_issue.format === "includes")
              return `არასწორი სტრინგი: უნდა შეიცავდეს "${_issue.includes}"-ს`;
            if (_issue.format === "regex")
              return `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${_issue.pattern}`;
            return `არასწორი ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `არასწორი რიცხვი: უნდა იყოს ${issue.divisor}-ის ჯერადი`;
          case "unrecognized_keys":
            return `უცნობი გასაღებ${issue.keys.length > 1 ? "ები" : "ი"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `არასწორი გასაღები ${issue.origin}-ში`;
          case "invalid_union":
            return "არასწორი შეყვანა";
          case "invalid_element":
            return `არასწორი მნიშვნელობა ${issue.origin}-ში`;
          default:
            return `არასწორი შეყვანა`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/km.cjs
var require_km = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/km.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "តួអក្សរ", verb: "គួរមាន" },
        file: { unit: "បៃ", verb: "គួរមាន" },
        array: { unit: "ធាតុ", verb: "គួរមាន" },
        set: { unit: "ធាតុ", verb: "គួរមាន" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "អារេ (Array)";
            }
            if (data === null) {
              return "គ្មានតម្លៃ (null)";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "ទិន្នន័យបញ្ចូល",
        email: "អាសយដ្ឋានអ៊ីមែល",
        url: "URL",
        emoji: "សញ្ញាអារម្មណ៍",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
        date: "កាលបរិច្ឆេទ ISO",
        time: "ម៉ោង ISO",
        duration: "រយៈពេល ISO",
        ipv4: "អាសយដ្ឋាន IPv4",
        ipv6: "អាសយដ្ឋាន IPv6",
        cidrv4: "ដែនអាសយដ្ឋាន IPv4",
        cidrv6: "ដែនអាសយដ្ឋាន IPv6",
        base64: "ខ្សែអក្សរអ៊ិកូដ base64",
        base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
        json_string: "ខ្សែអក្សរ JSON",
        e164: "លេខ E.164",
        jwt: "JWT",
        template_literal: "ទិន្នន័យបញ្ចូល"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${issue.expected} ប៉ុន្តែទទួលបាន ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${util.stringifyPrimitive(issue.values[0])}`;
            return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `ធំពេក៖ ត្រូវការ ${issue.origin ?? "តម្លៃ"} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "ធាតុ"}`;
            return `ធំពេក៖ ត្រូវការ ${issue.origin ?? "តម្លៃ"} ${adj} ${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `តូចពេក៖ ត្រូវការ ${issue.origin} ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `តូចពេក៖ ត្រូវការ ${issue.origin} ${adj} ${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${_issue.pattern}`;
            return `មិនត្រឹមត្រូវ៖ ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${issue.divisor}`;
          case "unrecognized_keys":
            return `រកឃើញសោមិនស្គាល់៖ ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `សោមិនត្រឹមត្រូវនៅក្នុង ${issue.origin}`;
          case "invalid_union":
            return `ទិន្នន័យមិនត្រឹមត្រូវ`;
          case "invalid_element":
            return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${issue.origin}`;
          default:
            return `ទិន្នន័យមិនត្រឹមត្រូវ`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/kh.cjs
var require_kh = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/kh.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var km_js_1 = __importDefault(require_km());
    function default_1() {
      return (0, km_js_1.default)();
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ko.cjs
var require_ko = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ko.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "문자", verb: "to have" },
        file: { unit: "바이트", verb: "to have" },
        array: { unit: "개", verb: "to have" },
        set: { unit: "개", verb: "to have" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "입력",
        email: "이메일 주소",
        url: "URL",
        emoji: "이모지",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO 날짜시간",
        date: "ISO 날짜",
        time: "ISO 시간",
        duration: "ISO 기간",
        ipv4: "IPv4 주소",
        ipv6: "IPv6 주소",
        cidrv4: "IPv4 범위",
        cidrv6: "IPv6 범위",
        base64: "base64 인코딩 문자열",
        base64url: "base64url 인코딩 문자열",
        json_string: "JSON 문자열",
        e164: "E.164 번호",
        jwt: "JWT",
        template_literal: "입력"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `잘못된 입력: 예상 타입은 ${issue.expected}, 받은 타입은 ${parsedType(issue.input)}입니다`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `잘못된 입력: 값은 ${util.stringifyPrimitive(issue.values[0])} 이어야 합니다`;
            return `잘못된 옵션: ${util.joinValues(issue.values, "또는 ")} 중 하나여야 합니다`;
          case "too_big": {
            const adj = issue.inclusive ? "이하" : "미만";
            const suffix = adj === "미만" ? "이어야 합니다" : "여야 합니다";
            const sizing = getSizing(issue.origin);
            const unit = sizing?.unit ?? "요소";
            if (sizing)
              return `${issue.origin ?? "값"}이 너무 큽니다: ${issue.maximum.toString()}${unit} ${adj}${suffix}`;
            return `${issue.origin ?? "값"}이 너무 큽니다: ${issue.maximum.toString()} ${adj}${suffix}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? "이상" : "초과";
            const suffix = adj === "이상" ? "이어야 합니다" : "여야 합니다";
            const sizing = getSizing(issue.origin);
            const unit = sizing?.unit ?? "요소";
            if (sizing) {
              return `${issue.origin ?? "값"}이 너무 작습니다: ${issue.minimum.toString()}${unit} ${adj}${suffix}`;
            }
            return `${issue.origin ?? "값"}이 너무 작습니다: ${issue.minimum.toString()} ${adj}${suffix}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `잘못된 문자열: "${_issue.prefix}"(으)로 시작해야 합니다`;
            }
            if (_issue.format === "ends_with")
              return `잘못된 문자열: "${_issue.suffix}"(으)로 끝나야 합니다`;
            if (_issue.format === "includes")
              return `잘못된 문자열: "${_issue.includes}"을(를) 포함해야 합니다`;
            if (_issue.format === "regex")
              return `잘못된 문자열: 정규식 ${_issue.pattern} 패턴과 일치해야 합니다`;
            return `잘못된 ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `잘못된 숫자: ${issue.divisor}의 배수여야 합니다`;
          case "unrecognized_keys":
            return `인식할 수 없는 키: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `잘못된 키: ${issue.origin}`;
          case "invalid_union":
            return `잘못된 입력`;
          case "invalid_element":
            return `잘못된 값: ${issue.origin}`;
          default:
            return `잘못된 입력`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/lt.cjs
var require_lt = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/lt.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parsedType = void 0;
    exports.default = default_1;
    var util = __importStar(require_util());
    var parsedType = /* @__PURE__ */ __name((data) => {
      const t = typeof data;
      return parsedTypeFromType(t, data);
    }, "parsedType");
    exports.parsedType = parsedType;
    var parsedTypeFromType = /* @__PURE__ */ __name((t, data = void 0) => {
      switch (t) {
        case "number": {
          return Number.isNaN(data) ? "NaN" : "skaičius";
        }
        case "bigint": {
          return "sveikasis skaičius";
        }
        case "string": {
          return "eilutė";
        }
        case "boolean": {
          return "loginė reikšmė";
        }
        case "undefined":
        case "void": {
          return "neapibrėžta reikšmė";
        }
        case "function": {
          return "funkcija";
        }
        case "symbol": {
          return "simbolis";
        }
        case "object": {
          if (data === void 0)
            return "nežinomas objektas";
          if (data === null)
            return "nulinė reikšmė";
          if (Array.isArray(data))
            return "masyvas";
          if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
            return data.constructor.name;
          }
          return "objektas";
        }
        //Zod types below
        case "null": {
          return "nulinė reikšmė";
        }
      }
      return t;
    }, "parsedTypeFromType");
    var capitalizeFirstCharacter = /* @__PURE__ */ __name((text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }, "capitalizeFirstCharacter");
    function getUnitTypeFromNumber(number) {
      const abs = Math.abs(number);
      const last = abs % 10;
      const last2 = abs % 100;
      if (last2 >= 11 && last2 <= 19 || last === 0)
        return "many";
      if (last === 1)
        return "one";
      return "few";
    }
    __name(getUnitTypeFromNumber, "getUnitTypeFromNumber");
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: {
          unit: {
            one: "simbolis",
            few: "simboliai",
            many: "simbolių"
          },
          verb: {
            smaller: {
              inclusive: "turi būti ne ilgesnė kaip",
              notInclusive: "turi būti trumpesnė kaip"
            },
            bigger: {
              inclusive: "turi būti ne trumpesnė kaip",
              notInclusive: "turi būti ilgesnė kaip"
            }
          }
        },
        file: {
          unit: {
            one: "baitas",
            few: "baitai",
            many: "baitų"
          },
          verb: {
            smaller: {
              inclusive: "turi būti ne didesnis kaip",
              notInclusive: "turi būti mažesnis kaip"
            },
            bigger: {
              inclusive: "turi būti ne mažesnis kaip",
              notInclusive: "turi būti didesnis kaip"
            }
          }
        },
        array: {
          unit: {
            one: "elementą",
            few: "elementus",
            many: "elementų"
          },
          verb: {
            smaller: {
              inclusive: "turi turėti ne daugiau kaip",
              notInclusive: "turi turėti mažiau kaip"
            },
            bigger: {
              inclusive: "turi turėti ne mažiau kaip",
              notInclusive: "turi turėti daugiau kaip"
            }
          }
        },
        set: {
          unit: {
            one: "elementą",
            few: "elementus",
            many: "elementų"
          },
          verb: {
            smaller: {
              inclusive: "turi turėti ne daugiau kaip",
              notInclusive: "turi turėti mažiau kaip"
            },
            bigger: {
              inclusive: "turi turėti ne mažiau kaip",
              notInclusive: "turi turėti daugiau kaip"
            }
          }
        }
      };
      function getSizing(origin, unitType, inclusive, targetShouldBe) {
        const result = Sizable[origin] ?? null;
        if (result === null)
          return result;
        return {
          unit: result.unit[unitType],
          verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
        };
      }
      __name(getSizing, "getSizing");
      const Nouns = {
        regex: "įvestis",
        email: "el. pašto adresas",
        url: "URL",
        emoji: "jaustukas",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO data ir laikas",
        date: "ISO data",
        time: "ISO laikas",
        duration: "ISO trukmė",
        ipv4: "IPv4 adresas",
        ipv6: "IPv6 adresas",
        cidrv4: "IPv4 tinklo prefiksas (CIDR)",
        cidrv6: "IPv6 tinklo prefiksas (CIDR)",
        base64: "base64 užkoduota eilutė",
        base64url: "base64url užkoduota eilutė",
        json_string: "JSON eilutė",
        e164: "E.164 numeris",
        jwt: "JWT",
        template_literal: "įvestis"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Gautas tipas ${(0, exports.parsedType)(issue.input)}, o tikėtasi - ${parsedTypeFromType(issue.expected)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Privalo būti ${util.stringifyPrimitive(issue.values[0])}`;
            return `Privalo būti vienas iš ${util.joinValues(issue.values, "|")} pasirinkimų`;
          case "too_big": {
            const origin = parsedTypeFromType(issue.origin);
            const sizing = getSizing(issue.origin, getUnitTypeFromNumber(Number(issue.maximum)), issue.inclusive ?? false, "smaller");
            if (sizing?.verb)
              return `${capitalizeFirstCharacter(origin ?? issue.origin ?? "reikšmė")} ${sizing.verb} ${issue.maximum.toString()} ${sizing.unit ?? "elementų"}`;
            const adj = issue.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
            return `${capitalizeFirstCharacter(origin ?? issue.origin ?? "reikšmė")} turi būti ${adj} ${issue.maximum.toString()} ${sizing?.unit}`;
          }
          case "too_small": {
            const origin = parsedTypeFromType(issue.origin);
            const sizing = getSizing(issue.origin, getUnitTypeFromNumber(Number(issue.minimum)), issue.inclusive ?? false, "bigger");
            if (sizing?.verb)
              return `${capitalizeFirstCharacter(origin ?? issue.origin ?? "reikšmė")} ${sizing.verb} ${issue.minimum.toString()} ${sizing.unit ?? "elementų"}`;
            const adj = issue.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
            return `${capitalizeFirstCharacter(origin ?? issue.origin ?? "reikšmė")} turi būti ${adj} ${issue.minimum.toString()} ${sizing?.unit}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `Eilutė privalo prasidėti "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Eilutė privalo pasibaigti "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Eilutė privalo įtraukti "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Eilutė privalo atitikti ${_issue.pattern}`;
            return `Neteisingas ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Skaičius privalo būti ${issue.divisor} kartotinis.`;
          case "unrecognized_keys":
            return `Neatpažint${issue.keys.length > 1 ? "i" : "as"} rakt${issue.keys.length > 1 ? "ai" : "as"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return "Rastas klaidingas raktas";
          case "invalid_union":
            return "Klaidinga įvestis";
          case "invalid_element": {
            const origin = parsedTypeFromType(issue.origin);
            return `${capitalizeFirstCharacter(origin ?? issue.origin ?? "reikšmė")} turi klaidingą įvestį`;
          }
          default:
            return "Klaidinga įvestis";
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/mk.cjs
var require_mk = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/mk.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "знаци", verb: "да имаат" },
        file: { unit: "бајти", verb: "да имаат" },
        array: { unit: "ставки", verb: "да имаат" },
        set: { unit: "ставки", verb: "да имаат" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "број";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "низа";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "внес",
        email: "адреса на е-пошта",
        url: "URL",
        emoji: "емоџи",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO датум и време",
        date: "ISO датум",
        time: "ISO време",
        duration: "ISO времетраење",
        ipv4: "IPv4 адреса",
        ipv6: "IPv6 адреса",
        cidrv4: "IPv4 опсег",
        cidrv6: "IPv6 опсег",
        base64: "base64-енкодирана низа",
        base64url: "base64url-енкодирана низа",
        json_string: "JSON низа",
        e164: "E.164 број",
        jwt: "JWT",
        template_literal: "внес"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Грешен внес: се очекува ${issue.expected}, примено ${parsedType(issue.input)}`;
          // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Invalid input: expected ${util.stringifyPrimitive(issue.values[0])}`;
            return `Грешана опција: се очекува една ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Премногу голем: се очекува ${issue.origin ?? "вредноста"} да има ${adj}${issue.maximum.toString()} ${sizing.unit ?? "елементи"}`;
            return `Премногу голем: се очекува ${issue.origin ?? "вредноста"} да биде ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Премногу мал: се очекува ${issue.origin} да има ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Премногу мал: се очекува ${issue.origin} да биде ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `Неважечка низа: мора да започнува со "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Неважечка низа: мора да завршува со "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Неважечка низа: мора да вклучува "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Неважечка низа: мора да одгоара на патернот ${_issue.pattern}`;
            return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Грешен број: мора да биде делив со ${issue.divisor}`;
          case "unrecognized_keys":
            return `${issue.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Грешен клуч во ${issue.origin}`;
          case "invalid_union":
            return "Грешен внес";
          case "invalid_element":
            return `Грешна вредност во ${issue.origin}`;
          default:
            return `Грешен внес`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ms.cjs
var require_ms = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ms.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "aksara", verb: "mempunyai" },
        file: { unit: "bait", verb: "mempunyai" },
        array: { unit: "elemen", verb: "mempunyai" },
        set: { unit: "elemen", verb: "mempunyai" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "nombor";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "input",
        email: "alamat e-mel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tarikh masa ISO",
        date: "tarikh ISO",
        time: "masa ISO",
        duration: "tempoh ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "julat IPv4",
        cidrv6: "julat IPv6",
        base64: "string dikodkan base64",
        base64url: "string dikodkan base64url",
        json_string: "string JSON",
        e164: "nombor E.164",
        jwt: "JWT",
        template_literal: "input"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Input tidak sah: dijangka ${issue.expected}, diterima ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Input tidak sah: dijangka ${util.stringifyPrimitive(issue.values[0])}`;
            return `Pilihan tidak sah: dijangka salah satu daripada ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Terlalu besar: dijangka ${issue.origin ?? "nilai"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elemen"}`;
            return `Terlalu besar: dijangka ${issue.origin ?? "nilai"} adalah ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Terlalu kecil: dijangka ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Terlalu kecil: dijangka ${issue.origin} adalah ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
            return `${Nouns[_issue.format] ?? issue.format} tidak sah`;
          }
          case "not_multiple_of":
            return `Nombor tidak sah: perlu gandaan ${issue.divisor}`;
          case "unrecognized_keys":
            return `Kunci tidak dikenali: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Kunci tidak sah dalam ${issue.origin}`;
          case "invalid_union":
            return "Input tidak sah";
          case "invalid_element":
            return `Nilai tidak sah dalam ${issue.origin}`;
          default:
            return `Input tidak sah`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/nl.cjs
var require_nl = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/nl.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "tekens" },
        file: { unit: "bytes" },
        array: { unit: "elementen" },
        set: { unit: "elementen" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "getal";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "invoer",
        email: "emailadres",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum en tijd",
        date: "ISO datum",
        time: "ISO tijd",
        duration: "ISO duur",
        ipv4: "IPv4-adres",
        ipv6: "IPv6-adres",
        cidrv4: "IPv4-bereik",
        cidrv6: "IPv6-bereik",
        base64: "base64-gecodeerde tekst",
        base64url: "base64 URL-gecodeerde tekst",
        json_string: "JSON string",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "invoer"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Ongeldige invoer: verwacht ${issue.expected}, ontving ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Ongeldige invoer: verwacht ${util.stringifyPrimitive(issue.values[0])}`;
            return `Ongeldige optie: verwacht één van ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Te lang: verwacht dat ${issue.origin ?? "waarde"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementen"} bevat`;
            return `Te lang: verwacht dat ${issue.origin ?? "waarde"} ${adj}${issue.maximum.toString()} is`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Te kort: verwacht dat ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} bevat`;
            }
            return `Te kort: verwacht dat ${issue.origin} ${adj}${issue.minimum.toString()} is`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
            }
            if (_issue.format === "ends_with")
              return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
            if (_issue.format === "includes")
              return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
            if (_issue.format === "regex")
              return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
            return `Ongeldig: ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Ongeldig getal: moet een veelvoud van ${issue.divisor} zijn`;
          case "unrecognized_keys":
            return `Onbekende key${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Ongeldige key in ${issue.origin}`;
          case "invalid_union":
            return "Ongeldige invoer";
          case "invalid_element":
            return `Ongeldige waarde in ${issue.origin}`;
          default:
            return `Ongeldige invoer`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/no.cjs
var require_no = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/no.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "tegn", verb: "å ha" },
        file: { unit: "bytes", verb: "å ha" },
        array: { unit: "elementer", verb: "å inneholde" },
        set: { unit: "elementer", verb: "å inneholde" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "tall";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "liste";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "input",
        email: "e-postadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslett",
        date: "ISO-dato",
        time: "ISO-klokkeslett",
        duration: "ISO-varighet",
        ipv4: "IPv4-område",
        ipv6: "IPv6-område",
        cidrv4: "IPv4-spekter",
        cidrv6: "IPv6-spekter",
        base64: "base64-enkodet streng",
        base64url: "base64url-enkodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Ugyldig input: forventet ${issue.expected}, fikk ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Ugyldig verdi: forventet ${util.stringifyPrimitive(issue.values[0])}`;
            return `Ugyldig valg: forventet en av ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `For stor(t): forventet ${issue.origin ?? "value"} til å ha ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementer"}`;
            return `For stor(t): forventet ${issue.origin ?? "value"} til å ha ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `For lite(n): forventet ${issue.origin} til å ha ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `For lite(n): forventet ${issue.origin} til å ha ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Ugyldig streng: må starte med "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Ugyldig streng: må ende med "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Ugyldig streng: må inneholde "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Ugyldig streng: må matche mønsteret ${_issue.pattern}`;
            return `Ugyldig ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Ugyldig tall: må være et multiplum av ${issue.divisor}`;
          case "unrecognized_keys":
            return `${issue.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Ugyldig nøkkel i ${issue.origin}`;
          case "invalid_union":
            return "Ugyldig input";
          case "invalid_element":
            return `Ugyldig verdi i ${issue.origin}`;
          default:
            return `Ugyldig input`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ota.cjs
var require_ota = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ota.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "harf", verb: "olmalıdır" },
        file: { unit: "bayt", verb: "olmalıdır" },
        array: { unit: "unsur", verb: "olmalıdır" },
        set: { unit: "unsur", verb: "olmalıdır" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "numara";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "saf";
            }
            if (data === null) {
              return "gayb";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "giren",
        email: "epostagâh",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO hengâmı",
        date: "ISO tarihi",
        time: "ISO zamanı",
        duration: "ISO müddeti",
        ipv4: "IPv4 nişânı",
        ipv6: "IPv6 nişânı",
        cidrv4: "IPv4 menzili",
        cidrv6: "IPv6 menzili",
        base64: "base64-şifreli metin",
        base64url: "base64url-şifreli metin",
        json_string: "JSON metin",
        e164: "E.164 sayısı",
        jwt: "JWT",
        template_literal: "giren"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Fâsit giren: umulan ${issue.expected}, alınan ${parsedType(issue.input)}`;
          // return `Fâsit giren: umulan ${issue.expected}, alınan ${util.getParsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Fâsit giren: umulan ${util.stringifyPrimitive(issue.values[0])}`;
            return `Fâsit tercih: mûteberler ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Fazla büyük: ${issue.origin ?? "value"}, ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmalıydı.`;
            return `Fazla büyük: ${issue.origin ?? "value"}, ${adj}${issue.maximum.toString()} olmalıydı.`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Fazla küçük: ${issue.origin}, ${adj}${issue.minimum.toString()} ${sizing.unit} sahip olmalıydı.`;
            }
            return `Fazla küçük: ${issue.origin}, ${adj}${issue.minimum.toString()} olmalıydı.`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Fâsit metin: "${_issue.prefix}" ile başlamalı.`;
            if (_issue.format === "ends_with")
              return `Fâsit metin: "${_issue.suffix}" ile bitmeli.`;
            if (_issue.format === "includes")
              return `Fâsit metin: "${_issue.includes}" ihtivâ etmeli.`;
            if (_issue.format === "regex")
              return `Fâsit metin: ${_issue.pattern} nakşına uymalı.`;
            return `Fâsit ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Fâsit sayı: ${issue.divisor} katı olmalıydı.`;
          case "unrecognized_keys":
            return `Tanınmayan anahtar ${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `${issue.origin} için tanınmayan anahtar var.`;
          case "invalid_union":
            return "Giren tanınamadı.";
          case "invalid_element":
            return `${issue.origin} için tanınmayan kıymet var.`;
          default:
            return `Kıymet tanınamadı.`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ps.cjs
var require_ps = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ps.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "توکي", verb: "ولري" },
        file: { unit: "بایټس", verb: "ولري" },
        array: { unit: "توکي", verb: "ولري" },
        set: { unit: "توکي", verb: "ولري" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "عدد";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "ارې";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "ورودي",
        email: "بریښنالیک",
        url: "یو آر ال",
        emoji: "ایموجي",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "نیټه او وخت",
        date: "نېټه",
        time: "وخت",
        duration: "موده",
        ipv4: "د IPv4 پته",
        ipv6: "د IPv6 پته",
        cidrv4: "د IPv4 ساحه",
        cidrv6: "د IPv6 ساحه",
        base64: "base64-encoded متن",
        base64url: "base64url-encoded متن",
        json_string: "JSON متن",
        e164: "د E.164 شمېره",
        jwt: "JWT",
        template_literal: "ورودي"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `ناسم ورودي: باید ${issue.expected} وای, مګر ${parsedType(issue.input)} ترلاسه شو`;
          case "invalid_value":
            if (issue.values.length === 1) {
              return `ناسم ورودي: باید ${util.stringifyPrimitive(issue.values[0])} وای`;
            }
            return `ناسم انتخاب: باید یو له ${util.joinValues(issue.values, "|")} څخه وای`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `ډیر لوی: ${issue.origin ?? "ارزښت"} باید ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عنصرونه"} ولري`;
            }
            return `ډیر لوی: ${issue.origin ?? "ارزښت"} باید ${adj}${issue.maximum.toString()} وي`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `ډیر کوچنی: ${issue.origin} باید ${adj}${issue.minimum.toString()} ${sizing.unit} ولري`;
            }
            return `ډیر کوچنی: ${issue.origin} باید ${adj}${issue.minimum.toString()} وي`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `ناسم متن: باید د "${_issue.prefix}" سره پیل شي`;
            }
            if (_issue.format === "ends_with") {
              return `ناسم متن: باید د "${_issue.suffix}" سره پای ته ورسيږي`;
            }
            if (_issue.format === "includes") {
              return `ناسم متن: باید "${_issue.includes}" ولري`;
            }
            if (_issue.format === "regex") {
              return `ناسم متن: باید د ${_issue.pattern} سره مطابقت ولري`;
            }
            return `${Nouns[_issue.format] ?? issue.format} ناسم دی`;
          }
          case "not_multiple_of":
            return `ناسم عدد: باید د ${issue.divisor} مضرب وي`;
          case "unrecognized_keys":
            return `ناسم ${issue.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `ناسم کلیډ په ${issue.origin} کې`;
          case "invalid_union":
            return `ناسمه ورودي`;
          case "invalid_element":
            return `ناسم عنصر په ${issue.origin} کې`;
          default:
            return `ناسمه ورودي`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/pl.cjs
var require_pl = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/pl.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "znaków", verb: "mieć" },
        file: { unit: "bajtów", verb: "mieć" },
        array: { unit: "elementów", verb: "mieć" },
        set: { unit: "elementów", verb: "mieć" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "liczba";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "tablica";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "wyrażenie",
        email: "adres email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i godzina w formacie ISO",
        date: "data w formacie ISO",
        time: "godzina w formacie ISO",
        duration: "czas trwania ISO",
        ipv4: "adres IPv4",
        ipv6: "adres IPv6",
        cidrv4: "zakres IPv4",
        cidrv6: "zakres IPv6",
        base64: "ciąg znaków zakodowany w formacie base64",
        base64url: "ciąg znaków zakodowany w formacie base64url",
        json_string: "ciąg znaków w formacie JSON",
        e164: "liczba E.164",
        jwt: "JWT",
        template_literal: "wejście"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Nieprawidłowe dane wejściowe: oczekiwano ${issue.expected}, otrzymano ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Nieprawidłowe dane wejściowe: oczekiwano ${util.stringifyPrimitive(issue.values[0])}`;
            return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Za duża wartość: oczekiwano, że ${issue.origin ?? "wartość"} będzie mieć ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementów"}`;
            }
            return `Zbyt duż(y/a/e): oczekiwano, że ${issue.origin ?? "wartość"} będzie wynosić ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Za mała wartość: oczekiwano, że ${issue.origin ?? "wartość"} będzie mieć ${adj}${issue.minimum.toString()} ${sizing.unit ?? "elementów"}`;
            }
            return `Zbyt mał(y/a/e): oczekiwano, że ${issue.origin ?? "wartość"} będzie wynosić ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Nieprawidłowy ciąg znaków: musi zaczynać się od "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Nieprawidłowy ciąg znaków: musi kończyć się na "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Nieprawidłowy ciąg znaków: musi zawierać "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${_issue.pattern}`;
            return `Nieprawidłow(y/a/e) ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Nieprawidłowa liczba: musi być wielokrotnością ${issue.divisor}`;
          case "unrecognized_keys":
            return `Nierozpoznane klucze${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Nieprawidłowy klucz w ${issue.origin}`;
          case "invalid_union":
            return "Nieprawidłowe dane wejściowe";
          case "invalid_element":
            return `Nieprawidłowa wartość w ${issue.origin}`;
          default:
            return `Nieprawidłowe dane wejściowe`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/pt.cjs
var require_pt = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/pt.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "caracteres", verb: "ter" },
        file: { unit: "bytes", verb: "ter" },
        array: { unit: "itens", verb: "ter" },
        set: { unit: "itens", verb: "ter" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "número";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "nulo";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "padrão",
        email: "endereço de e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "duração ISO",
        ipv4: "endereço IPv4",
        ipv6: "endereço IPv6",
        cidrv4: "faixa de IPv4",
        cidrv6: "faixa de IPv6",
        base64: "texto codificado em base64",
        base64url: "URL codificada em base64",
        json_string: "texto JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Tipo inválido: esperado ${issue.expected}, recebido ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Entrada inválida: esperado ${util.stringifyPrimitive(issue.values[0])}`;
            return `Opção inválida: esperada uma das ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Muito grande: esperado que ${issue.origin ?? "valor"} tivesse ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementos"}`;
            return `Muito grande: esperado que ${issue.origin ?? "valor"} fosse ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Muito pequeno: esperado que ${issue.origin} tivesse ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Muito pequeno: esperado que ${issue.origin} fosse ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Texto inválido: deve começar com "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Texto inválido: deve terminar com "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Texto inválido: deve incluir "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Texto inválido: deve corresponder ao padrão ${_issue.pattern}`;
            return `${Nouns[_issue.format] ?? issue.format} inválido`;
          }
          case "not_multiple_of":
            return `Número inválido: deve ser múltiplo de ${issue.divisor}`;
          case "unrecognized_keys":
            return `Chave${issue.keys.length > 1 ? "s" : ""} desconhecida${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Chave inválida em ${issue.origin}`;
          case "invalid_union":
            return "Entrada inválida";
          case "invalid_element":
            return `Valor inválido em ${issue.origin}`;
          default:
            return `Campo inválido`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ru.cjs
var require_ru = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ru.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    function getRussianPlural(count, one, few, many) {
      const absCount = Math.abs(count);
      const lastDigit = absCount % 10;
      const lastTwoDigits = absCount % 100;
      if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
      }
      if (lastDigit === 1) {
        return one;
      }
      if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
      }
      return many;
    }
    __name(getRussianPlural, "getRussianPlural");
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: {
          unit: {
            one: "символ",
            few: "символа",
            many: "символов"
          },
          verb: "иметь"
        },
        file: {
          unit: {
            one: "байт",
            few: "байта",
            many: "байт"
          },
          verb: "иметь"
        },
        array: {
          unit: {
            one: "элемент",
            few: "элемента",
            many: "элементов"
          },
          verb: "иметь"
        },
        set: {
          unit: {
            one: "элемент",
            few: "элемента",
            many: "элементов"
          },
          verb: "иметь"
        }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "число";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "массив";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "ввод",
        email: "email адрес",
        url: "URL",
        emoji: "эмодзи",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO дата и время",
        date: "ISO дата",
        time: "ISO время",
        duration: "ISO длительность",
        ipv4: "IPv4 адрес",
        ipv6: "IPv6 адрес",
        cidrv4: "IPv4 диапазон",
        cidrv6: "IPv6 диапазон",
        base64: "строка в формате base64",
        base64url: "строка в формате base64url",
        json_string: "JSON строка",
        e164: "номер E.164",
        jwt: "JWT",
        template_literal: "ввод"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Неверный ввод: ожидалось ${issue.expected}, получено ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Неверный ввод: ожидалось ${util.stringifyPrimitive(issue.values[0])}`;
            return `Неверный вариант: ожидалось одно из ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              const maxValue = Number(issue.maximum);
              const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
              return `Слишком большое значение: ожидалось, что ${issue.origin ?? "значение"} будет иметь ${adj}${issue.maximum.toString()} ${unit}`;
            }
            return `Слишком большое значение: ожидалось, что ${issue.origin ?? "значение"} будет ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              const minValue = Number(issue.minimum);
              const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
              return `Слишком маленькое значение: ожидалось, что ${issue.origin} будет иметь ${adj}${issue.minimum.toString()} ${unit}`;
            }
            return `Слишком маленькое значение: ожидалось, что ${issue.origin} будет ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Неверная строка: должна начинаться с "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Неверная строка: должна заканчиваться на "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Неверная строка: должна содержать "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Неверная строка: должна соответствовать шаблону ${_issue.pattern}`;
            return `Неверный ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Неверное число: должно быть кратным ${issue.divisor}`;
          case "unrecognized_keys":
            return `Нераспознанн${issue.keys.length > 1 ? "ые" : "ый"} ключ${issue.keys.length > 1 ? "и" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Неверный ключ в ${issue.origin}`;
          case "invalid_union":
            return "Неверные входные данные";
          case "invalid_element":
            return `Неверное значение в ${issue.origin}`;
          default:
            return `Неверные входные данные`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/sl.cjs
var require_sl = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/sl.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "znakov", verb: "imeti" },
        file: { unit: "bajtov", verb: "imeti" },
        array: { unit: "elementov", verb: "imeti" },
        set: { unit: "elementov", verb: "imeti" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "število";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "tabela";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "vnos",
        email: "e-poštni naslov",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum in čas",
        date: "ISO datum",
        time: "ISO čas",
        duration: "ISO trajanje",
        ipv4: "IPv4 naslov",
        ipv6: "IPv6 naslov",
        cidrv4: "obseg IPv4",
        cidrv6: "obseg IPv6",
        base64: "base64 kodiran niz",
        base64url: "base64url kodiran niz",
        json_string: "JSON niz",
        e164: "E.164 številka",
        jwt: "JWT",
        template_literal: "vnos"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Neveljaven vnos: pričakovano ${issue.expected}, prejeto ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Neveljaven vnos: pričakovano ${util.stringifyPrimitive(issue.values[0])}`;
            return `Neveljavna možnost: pričakovano eno izmed ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Preveliko: pričakovano, da bo ${issue.origin ?? "vrednost"} imelo ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementov"}`;
            return `Preveliko: pričakovano, da bo ${issue.origin ?? "vrednost"} ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Premajhno: pričakovano, da bo ${issue.origin} imelo ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Premajhno: pričakovano, da bo ${issue.origin} ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `Neveljaven niz: mora se začeti z "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Neveljaven niz: mora se končati z "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Neveljaven niz: mora vsebovati "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}`;
            return `Neveljaven ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Neveljavno število: mora biti večkratnik ${issue.divisor}`;
          case "unrecognized_keys":
            return `Neprepoznan${issue.keys.length > 1 ? "i ključi" : " ključ"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Neveljaven ključ v ${issue.origin}`;
          case "invalid_union":
            return "Neveljaven vnos";
          case "invalid_element":
            return `Neveljavna vrednost v ${issue.origin}`;
          default:
            return "Neveljaven vnos";
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/sv.cjs
var require_sv = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/sv.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "tecken", verb: "att ha" },
        file: { unit: "bytes", verb: "att ha" },
        array: { unit: "objekt", verb: "att innehålla" },
        set: { unit: "objekt", verb: "att innehålla" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "antal";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "lista";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "reguljärt uttryck",
        email: "e-postadress",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-datum och tid",
        date: "ISO-datum",
        time: "ISO-tid",
        duration: "ISO-varaktighet",
        ipv4: "IPv4-intervall",
        ipv6: "IPv6-intervall",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodad sträng",
        base64url: "base64url-kodad sträng",
        json_string: "JSON-sträng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "mall-literal"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Ogiltig inmatning: förväntat ${issue.expected}, fick ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Ogiltig inmatning: förväntat ${util.stringifyPrimitive(issue.values[0])}`;
            return `Ogiltigt val: förväntade en av ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `För stor(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.maximum.toString()} ${sizing.unit ?? "element"}`;
            }
            return `För stor(t): förväntat ${issue.origin ?? "värdet"} att ha ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `För lite(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `För lite(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `Ogiltig sträng: måste börja med "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Ogiltig sträng: måste sluta med "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Ogiltig sträng: måste innehålla "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Ogiltig sträng: måste matcha mönstret "${_issue.pattern}"`;
            return `Ogiltig(t) ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Ogiltigt tal: måste vara en multipel av ${issue.divisor}`;
          case "unrecognized_keys":
            return `${issue.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Ogiltig nyckel i ${issue.origin ?? "värdet"}`;
          case "invalid_union":
            return "Ogiltig input";
          case "invalid_element":
            return `Ogiltigt värde i ${issue.origin ?? "värdet"}`;
          default:
            return `Ogiltig input`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ta.cjs
var require_ta = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ta.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
        file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
        array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
        set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "எண் அல்லாதது" : "எண்";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "அணி";
            }
            if (data === null) {
              return "வெறுமை";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "உள்ளீடு",
        email: "மின்னஞ்சல் முகவரி",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO தேதி நேரம்",
        date: "ISO தேதி",
        time: "ISO நேரம்",
        duration: "ISO கால அளவு",
        ipv4: "IPv4 முகவரி",
        ipv6: "IPv6 முகவரி",
        cidrv4: "IPv4 வரம்பு",
        cidrv6: "IPv6 வரம்பு",
        base64: "base64-encoded சரம்",
        base64url: "base64url-encoded சரம்",
        json_string: "JSON சரம்",
        e164: "E.164 எண்",
        jwt: "JWT",
        template_literal: "input"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${issue.expected}, பெறப்பட்டது ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${util.stringifyPrimitive(issue.values[0])}`;
            return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${util.joinValues(issue.values, "|")} இல் ஒன்று`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue.origin ?? "மதிப்பு"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
            }
            return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue.origin ?? "மதிப்பு"} ${adj}${issue.maximum.toString()} ஆக இருக்க வேண்டும்`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} ஆக இருக்க வேண்டும்`;
            }
            return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue.origin} ${adj}${issue.minimum.toString()} ஆக இருக்க வேண்டும்`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `தவறான சரம்: "${_issue.prefix}" இல் தொடங்க வேண்டும்`;
            if (_issue.format === "ends_with")
              return `தவறான சரம்: "${_issue.suffix}" இல் முடிவடைய வேண்டும்`;
            if (_issue.format === "includes")
              return `தவறான சரம்: "${_issue.includes}" ஐ உள்ளடக்க வேண்டும்`;
            if (_issue.format === "regex")
              return `தவறான சரம்: ${_issue.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
            return `தவறான ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `தவறான எண்: ${issue.divisor} இன் பலமாக இருக்க வேண்டும்`;
          case "unrecognized_keys":
            return `அடையாளம் தெரியாத விசை${issue.keys.length > 1 ? "கள்" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `${issue.origin} இல் தவறான விசை`;
          case "invalid_union":
            return "தவறான உள்ளீடு";
          case "invalid_element":
            return `${issue.origin} இல் தவறான மதிப்பு`;
          default:
            return `தவறான உள்ளீடு`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/th.cjs
var require_th = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/th.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "ตัวอักษร", verb: "ควรมี" },
        file: { unit: "ไบต์", verb: "ควรมี" },
        array: { unit: "รายการ", verb: "ควรมี" },
        set: { unit: "รายการ", verb: "ควรมี" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "อาร์เรย์ (Array)";
            }
            if (data === null) {
              return "ไม่มีค่า (null)";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "ข้อมูลที่ป้อน",
        email: "ที่อยู่อีเมล",
        url: "URL",
        emoji: "อิโมจิ",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "วันที่เวลาแบบ ISO",
        date: "วันที่แบบ ISO",
        time: "เวลาแบบ ISO",
        duration: "ช่วงเวลาแบบ ISO",
        ipv4: "ที่อยู่ IPv4",
        ipv6: "ที่อยู่ IPv6",
        cidrv4: "ช่วง IP แบบ IPv4",
        cidrv6: "ช่วง IP แบบ IPv6",
        base64: "ข้อความแบบ Base64",
        base64url: "ข้อความแบบ Base64 สำหรับ URL",
        json_string: "ข้อความแบบ JSON",
        e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
        jwt: "โทเคน JWT",
        template_literal: "ข้อมูลที่ป้อน"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${issue.expected} แต่ได้รับ ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `ค่าไม่ถูกต้อง: ควรเป็น ${util.stringifyPrimitive(issue.values[0])}`;
            return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "ไม่เกิน" : "น้อยกว่า";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `เกินกำหนด: ${issue.origin ?? "ค่า"} ควรมี${adj} ${issue.maximum.toString()} ${sizing.unit ?? "รายการ"}`;
            return `เกินกำหนด: ${issue.origin ?? "ค่า"} ควรมี${adj} ${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? "อย่างน้อย" : "มากกว่า";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `น้อยกว่ากำหนด: ${issue.origin} ควรมี${adj} ${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `น้อยกว่ากำหนด: ${issue.origin} ควรมี${adj} ${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${_issue.includes}" อยู่ในข้อความ`;
            if (_issue.format === "regex")
              return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${_issue.pattern}`;
            return `รูปแบบไม่ถูกต้อง: ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${issue.divisor} ได้ลงตัว`;
          case "unrecognized_keys":
            return `พบคีย์ที่ไม่รู้จัก: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `คีย์ไม่ถูกต้องใน ${issue.origin}`;
          case "invalid_union":
            return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
          case "invalid_element":
            return `ข้อมูลไม่ถูกต้องใน ${issue.origin}`;
          default:
            return `ข้อมูลไม่ถูกต้อง`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/tr.cjs
var require_tr = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/tr.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parsedType = void 0;
    exports.default = default_1;
    var util = __importStar(require_util());
    var parsedType = /* @__PURE__ */ __name((data) => {
      const t = typeof data;
      switch (t) {
        case "number": {
          return Number.isNaN(data) ? "NaN" : "number";
        }
        case "object": {
          if (Array.isArray(data)) {
            return "array";
          }
          if (data === null) {
            return "null";
          }
          if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
            return data.constructor.name;
          }
        }
      }
      return t;
    }, "parsedType");
    exports.parsedType = parsedType;
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "karakter", verb: "olmalı" },
        file: { unit: "bayt", verb: "olmalı" },
        array: { unit: "öğe", verb: "olmalı" },
        set: { unit: "öğe", verb: "olmalı" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const Nouns = {
        regex: "girdi",
        email: "e-posta adresi",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO tarih ve saat",
        date: "ISO tarih",
        time: "ISO saat",
        duration: "ISO süre",
        ipv4: "IPv4 adresi",
        ipv6: "IPv6 adresi",
        cidrv4: "IPv4 aralığı",
        cidrv6: "IPv6 aralığı",
        base64: "base64 ile şifrelenmiş metin",
        base64url: "base64url ile şifrelenmiş metin",
        json_string: "JSON dizesi",
        e164: "E.164 sayısı",
        jwt: "JWT",
        template_literal: "Şablon dizesi"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Geçersiz değer: beklenen ${issue.expected}, alınan ${(0, exports.parsedType)(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Geçersiz değer: beklenen ${util.stringifyPrimitive(issue.values[0])}`;
            return `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Çok büyük: beklenen ${issue.origin ?? "değer"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "öğe"}`;
            return `Çok büyük: beklenen ${issue.origin ?? "değer"} ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Çok küçük: beklenen ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            return `Çok küçük: beklenen ${issue.origin} ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Geçersiz metin: "${_issue.prefix}" ile başlamalı`;
            if (_issue.format === "ends_with")
              return `Geçersiz metin: "${_issue.suffix}" ile bitmeli`;
            if (_issue.format === "includes")
              return `Geçersiz metin: "${_issue.includes}" içermeli`;
            if (_issue.format === "regex")
              return `Geçersiz metin: ${_issue.pattern} desenine uymalı`;
            return `Geçersiz ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Geçersiz sayı: ${issue.divisor} ile tam bölünebilmeli`;
          case "unrecognized_keys":
            return `Tanınmayan anahtar${issue.keys.length > 1 ? "lar" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `${issue.origin} içinde geçersiz anahtar`;
          case "invalid_union":
            return "Geçersiz değer";
          case "invalid_element":
            return `${issue.origin} içinde geçersiz değer`;
          default:
            return `Geçersiz değer`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/uk.cjs
var require_uk = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/uk.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "символів", verb: "матиме" },
        file: { unit: "байтів", verb: "матиме" },
        array: { unit: "елементів", verb: "матиме" },
        set: { unit: "елементів", verb: "матиме" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "число";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "масив";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "вхідні дані",
        email: "адреса електронної пошти",
        url: "URL",
        emoji: "емодзі",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "дата та час ISO",
        date: "дата ISO",
        time: "час ISO",
        duration: "тривалість ISO",
        ipv4: "адреса IPv4",
        ipv6: "адреса IPv6",
        cidrv4: "діапазон IPv4",
        cidrv6: "діапазон IPv6",
        base64: "рядок у кодуванні base64",
        base64url: "рядок у кодуванні base64url",
        json_string: "рядок JSON",
        e164: "номер E.164",
        jwt: "JWT",
        template_literal: "вхідні дані"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${parsedType(issue.input)}`;
          // return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${util.getParsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Неправильні вхідні дані: очікується ${util.stringifyPrimitive(issue.values[0])}`;
            return `Неправильна опція: очікується одне з ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Занадто велике: очікується, що ${issue.origin ?? "значення"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "елементів"}`;
            return `Занадто велике: очікується, що ${issue.origin ?? "значення"} буде ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Занадто мале: очікується, що ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Занадто мале: очікується, що ${issue.origin} буде ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Неправильний рядок: повинен починатися з "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Неправильний рядок: повинен закінчуватися на "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Неправильний рядок: повинен містити "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Неправильний рядок: повинен відповідати шаблону ${_issue.pattern}`;
            return `Неправильний ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Неправильне число: повинно бути кратним ${issue.divisor}`;
          case "unrecognized_keys":
            return `Нерозпізнаний ключ${issue.keys.length > 1 ? "і" : ""}: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Неправильний ключ у ${issue.origin}`;
          case "invalid_union":
            return "Неправильні вхідні дані";
          case "invalid_element":
            return `Неправильне значення у ${issue.origin}`;
          default:
            return `Неправильні вхідні дані`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ua.cjs
var require_ua = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ua.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var uk_js_1 = __importDefault(require_uk());
    function default_1() {
      return (0, uk_js_1.default)();
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ur.cjs
var require_ur = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/ur.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "حروف", verb: "ہونا" },
        file: { unit: "بائٹس", verb: "ہونا" },
        array: { unit: "آئٹمز", verb: "ہونا" },
        set: { unit: "آئٹمز", verb: "ہونا" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "نمبر";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "آرے";
            }
            if (data === null) {
              return "نل";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "ان پٹ",
        email: "ای میل ایڈریس",
        url: "یو آر ایل",
        emoji: "ایموجی",
        uuid: "یو یو آئی ڈی",
        uuidv4: "یو یو آئی ڈی وی 4",
        uuidv6: "یو یو آئی ڈی وی 6",
        nanoid: "نینو آئی ڈی",
        guid: "جی یو آئی ڈی",
        cuid: "سی یو آئی ڈی",
        cuid2: "سی یو آئی ڈی 2",
        ulid: "یو ایل آئی ڈی",
        xid: "ایکس آئی ڈی",
        ksuid: "کے ایس یو آئی ڈی",
        datetime: "آئی ایس او ڈیٹ ٹائم",
        date: "آئی ایس او تاریخ",
        time: "آئی ایس او وقت",
        duration: "آئی ایس او مدت",
        ipv4: "آئی پی وی 4 ایڈریس",
        ipv6: "آئی پی وی 6 ایڈریس",
        cidrv4: "آئی پی وی 4 رینج",
        cidrv6: "آئی پی وی 6 رینج",
        base64: "بیس 64 ان کوڈڈ سٹرنگ",
        base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
        json_string: "جے ایس او این سٹرنگ",
        e164: "ای 164 نمبر",
        jwt: "جے ڈبلیو ٹی",
        template_literal: "ان پٹ"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `غلط ان پٹ: ${issue.expected} متوقع تھا، ${parsedType(issue.input)} موصول ہوا`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `غلط ان پٹ: ${util.stringifyPrimitive(issue.values[0])} متوقع تھا`;
            return `غلط آپشن: ${util.joinValues(issue.values, "|")} میں سے ایک متوقع تھا`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `بہت بڑا: ${issue.origin ?? "ویلیو"} کے ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عناصر"} ہونے متوقع تھے`;
            return `بہت بڑا: ${issue.origin ?? "ویلیو"} کا ${adj}${issue.maximum.toString()} ہونا متوقع تھا`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `بہت چھوٹا: ${issue.origin} کے ${adj}${issue.minimum.toString()} ${sizing.unit} ہونے متوقع تھے`;
            }
            return `بہت چھوٹا: ${issue.origin} کا ${adj}${issue.minimum.toString()} ہونا متوقع تھا`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `غلط سٹرنگ: "${_issue.prefix}" سے شروع ہونا چاہیے`;
            }
            if (_issue.format === "ends_with")
              return `غلط سٹرنگ: "${_issue.suffix}" پر ختم ہونا چاہیے`;
            if (_issue.format === "includes")
              return `غلط سٹرنگ: "${_issue.includes}" شامل ہونا چاہیے`;
            if (_issue.format === "regex")
              return `غلط سٹرنگ: پیٹرن ${_issue.pattern} سے میچ ہونا چاہیے`;
            return `غلط ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `غلط نمبر: ${issue.divisor} کا مضاعف ہونا چاہیے`;
          case "unrecognized_keys":
            return `غیر تسلیم شدہ کی${issue.keys.length > 1 ? "ز" : ""}: ${util.joinValues(issue.keys, "، ")}`;
          case "invalid_key":
            return `${issue.origin} میں غلط کی`;
          case "invalid_union":
            return "غلط ان پٹ";
          case "invalid_element":
            return `${issue.origin} میں غلط ویلیو`;
          default:
            return `غلط ان پٹ`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/vi.cjs
var require_vi = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/vi.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "ký tự", verb: "có" },
        file: { unit: "byte", verb: "có" },
        array: { unit: "phần tử", verb: "có" },
        set: { unit: "phần tử", verb: "có" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "số";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "mảng";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "đầu vào",
        email: "địa chỉ email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ngày giờ ISO",
        date: "ngày ISO",
        time: "giờ ISO",
        duration: "khoảng thời gian ISO",
        ipv4: "địa chỉ IPv4",
        ipv6: "địa chỉ IPv6",
        cidrv4: "dải IPv4",
        cidrv6: "dải IPv6",
        base64: "chuỗi mã hóa base64",
        base64url: "chuỗi mã hóa base64url",
        json_string: "chuỗi JSON",
        e164: "số E.164",
        jwt: "JWT",
        template_literal: "đầu vào"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Đầu vào không hợp lệ: mong đợi ${issue.expected}, nhận được ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Đầu vào không hợp lệ: mong đợi ${util.stringifyPrimitive(issue.values[0])}`;
            return `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Quá lớn: mong đợi ${issue.origin ?? "giá trị"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "phần tử"}`;
            return `Quá lớn: mong đợi ${issue.origin ?? "giá trị"} ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `Quá nhỏ: mong đợi ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `Quá nhỏ: mong đợi ${issue.origin} ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Chuỗi không hợp lệ: phải bắt đầu bằng "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Chuỗi không hợp lệ: phải kết thúc bằng "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Chuỗi không hợp lệ: phải bao gồm "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Chuỗi không hợp lệ: phải khớp với mẫu ${_issue.pattern}`;
            return `${Nouns[_issue.format] ?? issue.format} không hợp lệ`;
          }
          case "not_multiple_of":
            return `Số không hợp lệ: phải là bội số của ${issue.divisor}`;
          case "unrecognized_keys":
            return `Khóa không được nhận dạng: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Khóa không hợp lệ trong ${issue.origin}`;
          case "invalid_union":
            return "Đầu vào không hợp lệ";
          case "invalid_element":
            return `Giá trị không hợp lệ trong ${issue.origin}`;
          default:
            return `Đầu vào không hợp lệ`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/zh-CN.cjs
var require_zh_CN = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/zh-CN.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "字符", verb: "包含" },
        file: { unit: "字节", verb: "包含" },
        array: { unit: "项", verb: "包含" },
        set: { unit: "项", verb: "包含" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "非数字(NaN)" : "数字";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "数组";
            }
            if (data === null) {
              return "空值(null)";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "输入",
        email: "电子邮件",
        url: "URL",
        emoji: "表情符号",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO日期时间",
        date: "ISO日期",
        time: "ISO时间",
        duration: "ISO时长",
        ipv4: "IPv4地址",
        ipv6: "IPv6地址",
        cidrv4: "IPv4网段",
        cidrv6: "IPv6网段",
        base64: "base64编码字符串",
        base64url: "base64url编码字符串",
        json_string: "JSON字符串",
        e164: "E.164号码",
        jwt: "JWT",
        template_literal: "输入"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `无效输入：期望 ${issue.expected}，实际接收 ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `无效输入：期望 ${util.stringifyPrimitive(issue.values[0])}`;
            return `无效选项：期望以下之一 ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `数值过大：期望 ${issue.origin ?? "值"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "个元素"}`;
            return `数值过大：期望 ${issue.origin ?? "值"} ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `数值过小：期望 ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `数值过小：期望 ${issue.origin} ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `无效字符串：必须以 "${_issue.prefix}" 开头`;
            if (_issue.format === "ends_with")
              return `无效字符串：必须以 "${_issue.suffix}" 结尾`;
            if (_issue.format === "includes")
              return `无效字符串：必须包含 "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `无效字符串：必须满足正则表达式 ${_issue.pattern}`;
            return `无效${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `无效数字：必须是 ${issue.divisor} 的倍数`;
          case "unrecognized_keys":
            return `出现未知的键(key): ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `${issue.origin} 中的键(key)无效`;
          case "invalid_union":
            return "无效输入";
          case "invalid_element":
            return `${issue.origin} 中包含无效值(value)`;
          default:
            return `无效输入`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/zh-TW.cjs
var require_zh_TW = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/zh-TW.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "字元", verb: "擁有" },
        file: { unit: "位元組", verb: "擁有" },
        array: { unit: "項目", verb: "擁有" },
        set: { unit: "項目", verb: "擁有" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "array";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "輸入",
        email: "郵件地址",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO 日期時間",
        date: "ISO 日期",
        time: "ISO 時間",
        duration: "ISO 期間",
        ipv4: "IPv4 位址",
        ipv6: "IPv6 位址",
        cidrv4: "IPv4 範圍",
        cidrv6: "IPv6 範圍",
        base64: "base64 編碼字串",
        base64url: "base64url 編碼字串",
        json_string: "JSON 字串",
        e164: "E.164 數值",
        jwt: "JWT",
        template_literal: "輸入"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `無效的輸入值：預期為 ${issue.expected}，但收到 ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `無效的輸入值：預期為 ${util.stringifyPrimitive(issue.values[0])}`;
            return `無效的選項：預期為以下其中之一 ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `數值過大：預期 ${issue.origin ?? "值"} 應為 ${adj}${issue.maximum.toString()} ${sizing.unit ?? "個元素"}`;
            return `數值過大：預期 ${issue.origin ?? "值"} 應為 ${adj}${issue.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing) {
              return `數值過小：預期 ${issue.origin} 應為 ${adj}${issue.minimum.toString()} ${sizing.unit}`;
            }
            return `數值過小：預期 ${issue.origin} 應為 ${adj}${issue.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with") {
              return `無效的字串：必須以 "${_issue.prefix}" 開頭`;
            }
            if (_issue.format === "ends_with")
              return `無效的字串：必須以 "${_issue.suffix}" 結尾`;
            if (_issue.format === "includes")
              return `無效的字串：必須包含 "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `無效的字串：必須符合格式 ${_issue.pattern}`;
            return `無效的 ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `無效的數字：必須為 ${issue.divisor} 的倍數`;
          case "unrecognized_keys":
            return `無法識別的鍵值${issue.keys.length > 1 ? "們" : ""}：${util.joinValues(issue.keys, "、")}`;
          case "invalid_key":
            return `${issue.origin} 中有無效的鍵值`;
          case "invalid_union":
            return "無效的輸入值";
          case "invalid_element":
            return `${issue.origin} 中有無效的值`;
          default:
            return `無效的輸入值`;
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/yo.cjs
var require_yo = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/yo.cjs"(exports, module) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
    var util = __importStar(require_util());
    var error = /* @__PURE__ */ __name(() => {
      const Sizable = {
        string: { unit: "àmi", verb: "ní" },
        file: { unit: "bytes", verb: "ní" },
        array: { unit: "nkan", verb: "ní" },
        set: { unit: "nkan", verb: "ní" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      __name(getSizing, "getSizing");
      const parsedType = /* @__PURE__ */ __name((data) => {
        const t = typeof data;
        switch (t) {
          case "number": {
            return Number.isNaN(data) ? "NaN" : "nọ́mbà";
          }
          case "object": {
            if (Array.isArray(data)) {
              return "akopọ";
            }
            if (data === null) {
              return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
              return data.constructor.name;
            }
          }
        }
        return t;
      }, "parsedType");
      const Nouns = {
        regex: "ẹ̀rọ ìbáwọlé",
        email: "àdírẹ́sì ìmẹ́lì",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "àkókò ISO",
        date: "ọjọ́ ISO",
        time: "àkókò ISO",
        duration: "àkókò tó pé ISO",
        ipv4: "àdírẹ́sì IPv4",
        ipv6: "àdírẹ́sì IPv6",
        cidrv4: "àgbègbè IPv4",
        cidrv6: "àgbègbè IPv6",
        base64: "ọ̀rọ̀ tí a kọ́ ní base64",
        base64url: "ọ̀rọ̀ base64url",
        json_string: "ọ̀rọ̀ JSON",
        e164: "nọ́mbà E.164",
        jwt: "JWT",
        template_literal: "ẹ̀rọ ìbáwọlé"
      };
      return (issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Ìbáwọlé aṣìṣe: a ní láti fi ${issue.expected}, àmọ̀ a rí ${parsedType(issue.input)}`;
          case "invalid_value":
            if (issue.values.length === 1)
              return `Ìbáwọlé aṣìṣe: a ní láti fi ${util.stringifyPrimitive(issue.values[0])}`;
            return `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${util.joinValues(issue.values, "|")}`;
          case "too_big": {
            const adj = issue.inclusive ? "<=" : "<";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Tó pọ̀ jù: a ní láti jẹ́ pé ${issue.origin ?? "iye"} ${sizing.verb} ${adj}${issue.maximum} ${sizing.unit}`;
            return `Tó pọ̀ jù: a ní láti jẹ́ ${adj}${issue.maximum}`;
          }
          case "too_small": {
            const adj = issue.inclusive ? ">=" : ">";
            const sizing = getSizing(issue.origin);
            if (sizing)
              return `Kéré ju: a ní láti jẹ́ pé ${issue.origin} ${sizing.verb} ${adj}${issue.minimum} ${sizing.unit}`;
            return `Kéré ju: a ní láti jẹ́ ${adj}${issue.minimum}`;
          }
          case "invalid_format": {
            const _issue = issue;
            if (_issue.format === "starts_with")
              return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${_issue.pattern}`;
            return `Aṣìṣe: ${Nouns[_issue.format] ?? issue.format}`;
          }
          case "not_multiple_of":
            return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${issue.divisor}`;
          case "unrecognized_keys":
            return `Bọtìnì àìmọ̀: ${util.joinValues(issue.keys, ", ")}`;
          case "invalid_key":
            return `Bọtìnì aṣìṣe nínú ${issue.origin}`;
          case "invalid_union":
            return "Ìbáwọlé aṣìṣe";
          case "invalid_element":
            return `Iye aṣìṣe nínú ${issue.origin}`;
          default:
            return "Ìbáwọlé aṣìṣe";
        }
      };
    }, "error");
    function default_1() {
      return {
        localeError: error()
      };
    }
    __name(default_1, "default_1");
    module.exports = exports.default;
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/locales/index.cjs
var require_locales = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/locales/index.cjs"(exports) {
    "use strict";
    init_esm();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.yo = exports.zhTW = exports.zhCN = exports.vi = exports.ur = exports.uk = exports.ua = exports.tr = exports.th = exports.ta = exports.sv = exports.sl = exports.ru = exports.pt = exports.pl = exports.ps = exports.ota = exports.no = exports.nl = exports.ms = exports.mk = exports.lt = exports.ko = exports.km = exports.kh = exports.ka = exports.ja = exports.it = exports.is = exports.id = exports.hu = exports.he = exports.frCA = exports.fr = exports.fi = exports.fa = exports.es = exports.eo = exports.en = exports.de = exports.da = exports.cs = exports.ca = exports.be = exports.az = exports.ar = void 0;
    var ar_js_1 = require_ar();
    Object.defineProperty(exports, "ar", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ar_js_1).default;
    }, "get") });
    var az_js_1 = require_az();
    Object.defineProperty(exports, "az", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(az_js_1).default;
    }, "get") });
    var be_js_1 = require_be();
    Object.defineProperty(exports, "be", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(be_js_1).default;
    }, "get") });
    var ca_js_1 = require_ca();
    Object.defineProperty(exports, "ca", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ca_js_1).default;
    }, "get") });
    var cs_js_1 = require_cs();
    Object.defineProperty(exports, "cs", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(cs_js_1).default;
    }, "get") });
    var da_js_1 = require_da();
    Object.defineProperty(exports, "da", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(da_js_1).default;
    }, "get") });
    var de_js_1 = require_de();
    Object.defineProperty(exports, "de", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(de_js_1).default;
    }, "get") });
    var en_js_1 = require_en();
    Object.defineProperty(exports, "en", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(en_js_1).default;
    }, "get") });
    var eo_js_1 = require_eo();
    Object.defineProperty(exports, "eo", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(eo_js_1).default;
    }, "get") });
    var es_js_1 = require_es();
    Object.defineProperty(exports, "es", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(es_js_1).default;
    }, "get") });
    var fa_js_1 = require_fa();
    Object.defineProperty(exports, "fa", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(fa_js_1).default;
    }, "get") });
    var fi_js_1 = require_fi();
    Object.defineProperty(exports, "fi", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(fi_js_1).default;
    }, "get") });
    var fr_js_1 = require_fr();
    Object.defineProperty(exports, "fr", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(fr_js_1).default;
    }, "get") });
    var fr_CA_js_1 = require_fr_CA();
    Object.defineProperty(exports, "frCA", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(fr_CA_js_1).default;
    }, "get") });
    var he_js_1 = require_he();
    Object.defineProperty(exports, "he", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(he_js_1).default;
    }, "get") });
    var hu_js_1 = require_hu();
    Object.defineProperty(exports, "hu", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(hu_js_1).default;
    }, "get") });
    var id_js_1 = require_id();
    Object.defineProperty(exports, "id", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(id_js_1).default;
    }, "get") });
    var is_js_1 = require_is();
    Object.defineProperty(exports, "is", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(is_js_1).default;
    }, "get") });
    var it_js_1 = require_it();
    Object.defineProperty(exports, "it", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(it_js_1).default;
    }, "get") });
    var ja_js_1 = require_ja();
    Object.defineProperty(exports, "ja", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ja_js_1).default;
    }, "get") });
    var ka_js_1 = require_ka();
    Object.defineProperty(exports, "ka", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ka_js_1).default;
    }, "get") });
    var kh_js_1 = require_kh();
    Object.defineProperty(exports, "kh", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(kh_js_1).default;
    }, "get") });
    var km_js_1 = require_km();
    Object.defineProperty(exports, "km", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(km_js_1).default;
    }, "get") });
    var ko_js_1 = require_ko();
    Object.defineProperty(exports, "ko", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ko_js_1).default;
    }, "get") });
    var lt_js_1 = require_lt();
    Object.defineProperty(exports, "lt", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(lt_js_1).default;
    }, "get") });
    var mk_js_1 = require_mk();
    Object.defineProperty(exports, "mk", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(mk_js_1).default;
    }, "get") });
    var ms_js_1 = require_ms();
    Object.defineProperty(exports, "ms", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ms_js_1).default;
    }, "get") });
    var nl_js_1 = require_nl();
    Object.defineProperty(exports, "nl", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(nl_js_1).default;
    }, "get") });
    var no_js_1 = require_no();
    Object.defineProperty(exports, "no", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(no_js_1).default;
    }, "get") });
    var ota_js_1 = require_ota();
    Object.defineProperty(exports, "ota", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ota_js_1).default;
    }, "get") });
    var ps_js_1 = require_ps();
    Object.defineProperty(exports, "ps", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ps_js_1).default;
    }, "get") });
    var pl_js_1 = require_pl();
    Object.defineProperty(exports, "pl", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(pl_js_1).default;
    }, "get") });
    var pt_js_1 = require_pt();
    Object.defineProperty(exports, "pt", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(pt_js_1).default;
    }, "get") });
    var ru_js_1 = require_ru();
    Object.defineProperty(exports, "ru", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ru_js_1).default;
    }, "get") });
    var sl_js_1 = require_sl();
    Object.defineProperty(exports, "sl", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(sl_js_1).default;
    }, "get") });
    var sv_js_1 = require_sv();
    Object.defineProperty(exports, "sv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(sv_js_1).default;
    }, "get") });
    var ta_js_1 = require_ta();
    Object.defineProperty(exports, "ta", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ta_js_1).default;
    }, "get") });
    var th_js_1 = require_th();
    Object.defineProperty(exports, "th", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(th_js_1).default;
    }, "get") });
    var tr_js_1 = require_tr();
    Object.defineProperty(exports, "tr", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(tr_js_1).default;
    }, "get") });
    var ua_js_1 = require_ua();
    Object.defineProperty(exports, "ua", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ua_js_1).default;
    }, "get") });
    var uk_js_1 = require_uk();
    Object.defineProperty(exports, "uk", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(uk_js_1).default;
    }, "get") });
    var ur_js_1 = require_ur();
    Object.defineProperty(exports, "ur", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(ur_js_1).default;
    }, "get") });
    var vi_js_1 = require_vi();
    Object.defineProperty(exports, "vi", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(vi_js_1).default;
    }, "get") });
    var zh_CN_js_1 = require_zh_CN();
    Object.defineProperty(exports, "zhCN", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(zh_CN_js_1).default;
    }, "get") });
    var zh_TW_js_1 = require_zh_TW();
    Object.defineProperty(exports, "zhTW", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(zh_TW_js_1).default;
    }, "get") });
    var yo_js_1 = require_yo();
    Object.defineProperty(exports, "yo", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return __importDefault(yo_js_1).default;
    }, "get") });
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/registries.cjs
var require_registries = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/registries.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.globalRegistry = exports.$ZodRegistry = exports.$input = exports.$output = void 0;
    exports.registry = registry;
    exports.$output = Symbol("ZodOutput");
    exports.$input = Symbol("ZodInput");
    var $ZodRegistry = class {
      static {
        __name(this, "$ZodRegistry");
      }
      constructor() {
        this._map = /* @__PURE__ */ new WeakMap();
        this._idmap = /* @__PURE__ */ new Map();
      }
      add(schema, ..._meta) {
        const meta = _meta[0];
        this._map.set(schema, meta);
        if (meta && typeof meta === "object" && "id" in meta) {
          if (this._idmap.has(meta.id)) {
            throw new Error(`ID ${meta.id} already exists in the registry`);
          }
          this._idmap.set(meta.id, schema);
        }
        return this;
      }
      clear() {
        this._map = /* @__PURE__ */ new WeakMap();
        this._idmap = /* @__PURE__ */ new Map();
        return this;
      }
      remove(schema) {
        const meta = this._map.get(schema);
        if (meta && typeof meta === "object" && "id" in meta) {
          this._idmap.delete(meta.id);
        }
        this._map.delete(schema);
        return this;
      }
      get(schema) {
        const p = schema._zod.parent;
        if (p) {
          const pm = { ...this.get(p) ?? {} };
          delete pm.id;
          const f = { ...pm, ...this._map.get(schema) };
          return Object.keys(f).length ? f : void 0;
        }
        return this._map.get(schema);
      }
      has(schema) {
        return this._map.has(schema);
      }
    };
    exports.$ZodRegistry = $ZodRegistry;
    function registry() {
      return new $ZodRegistry();
    }
    __name(registry, "registry");
    exports.globalRegistry = registry();
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/api.cjs
var require_api = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/api.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TimePrecision = void 0;
    exports._string = _string;
    exports._coercedString = _coercedString;
    exports._email = _email;
    exports._guid = _guid;
    exports._uuid = _uuid;
    exports._uuidv4 = _uuidv4;
    exports._uuidv6 = _uuidv6;
    exports._uuidv7 = _uuidv7;
    exports._url = _url;
    exports._emoji = _emoji;
    exports._nanoid = _nanoid;
    exports._cuid = _cuid;
    exports._cuid2 = _cuid2;
    exports._ulid = _ulid;
    exports._xid = _xid;
    exports._ksuid = _ksuid;
    exports._ipv4 = _ipv4;
    exports._ipv6 = _ipv6;
    exports._cidrv4 = _cidrv4;
    exports._cidrv6 = _cidrv6;
    exports._base64 = _base64;
    exports._base64url = _base64url;
    exports._e164 = _e164;
    exports._jwt = _jwt;
    exports._isoDateTime = _isoDateTime;
    exports._isoDate = _isoDate;
    exports._isoTime = _isoTime;
    exports._isoDuration = _isoDuration;
    exports._number = _number;
    exports._coercedNumber = _coercedNumber;
    exports._int = _int;
    exports._float32 = _float32;
    exports._float64 = _float64;
    exports._int32 = _int32;
    exports._uint32 = _uint32;
    exports._boolean = _boolean;
    exports._coercedBoolean = _coercedBoolean;
    exports._bigint = _bigint;
    exports._coercedBigint = _coercedBigint;
    exports._int64 = _int64;
    exports._uint64 = _uint64;
    exports._symbol = _symbol;
    exports._undefined = _undefined;
    exports._null = _null;
    exports._any = _any;
    exports._unknown = _unknown;
    exports._never = _never;
    exports._void = _void;
    exports._date = _date;
    exports._coercedDate = _coercedDate;
    exports._nan = _nan;
    exports._lt = _lt;
    exports._lte = _lte;
    exports._max = _lte;
    exports._lte = _lte;
    exports._max = _lte;
    exports._gt = _gt;
    exports._gte = _gte;
    exports._min = _gte;
    exports._gte = _gte;
    exports._min = _gte;
    exports._positive = _positive;
    exports._negative = _negative;
    exports._nonpositive = _nonpositive;
    exports._nonnegative = _nonnegative;
    exports._multipleOf = _multipleOf;
    exports._maxSize = _maxSize;
    exports._minSize = _minSize;
    exports._size = _size;
    exports._maxLength = _maxLength;
    exports._minLength = _minLength;
    exports._length = _length;
    exports._regex = _regex;
    exports._lowercase = _lowercase;
    exports._uppercase = _uppercase;
    exports._includes = _includes;
    exports._startsWith = _startsWith;
    exports._endsWith = _endsWith;
    exports._property = _property;
    exports._mime = _mime;
    exports._overwrite = _overwrite;
    exports._normalize = _normalize;
    exports._trim = _trim;
    exports._toLowerCase = _toLowerCase;
    exports._toUpperCase = _toUpperCase;
    exports._array = _array;
    exports._union = _union;
    exports._discriminatedUnion = _discriminatedUnion;
    exports._intersection = _intersection;
    exports._tuple = _tuple;
    exports._record = _record;
    exports._map = _map;
    exports._set = _set;
    exports._enum = _enum;
    exports._nativeEnum = _nativeEnum;
    exports._literal = _literal;
    exports._file = _file;
    exports._transform = _transform;
    exports._optional = _optional;
    exports._nullable = _nullable;
    exports._default = _default;
    exports._nonoptional = _nonoptional;
    exports._success = _success;
    exports._catch = _catch;
    exports._pipe = _pipe;
    exports._readonly = _readonly;
    exports._templateLiteral = _templateLiteral;
    exports._lazy = _lazy;
    exports._promise = _promise;
    exports._custom = _custom;
    exports._refine = _refine;
    exports._superRefine = _superRefine;
    exports._check = _check;
    exports._stringbool = _stringbool;
    exports._stringFormat = _stringFormat;
    var checks = __importStar(require_checks());
    var schemas = __importStar(require_schemas());
    var util = __importStar(require_util());
    function _string(Class, params) {
      return new Class({
        type: "string",
        ...util.normalizeParams(params)
      });
    }
    __name(_string, "_string");
    function _coercedString(Class, params) {
      return new Class({
        type: "string",
        coerce: true,
        ...util.normalizeParams(params)
      });
    }
    __name(_coercedString, "_coercedString");
    function _email(Class, params) {
      return new Class({
        type: "string",
        format: "email",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_email, "_email");
    function _guid(Class, params) {
      return new Class({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_guid, "_guid");
    function _uuid(Class, params) {
      return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_uuid, "_uuid");
    function _uuidv4(Class, params) {
      return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v4",
        ...util.normalizeParams(params)
      });
    }
    __name(_uuidv4, "_uuidv4");
    function _uuidv6(Class, params) {
      return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v6",
        ...util.normalizeParams(params)
      });
    }
    __name(_uuidv6, "_uuidv6");
    function _uuidv7(Class, params) {
      return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v7",
        ...util.normalizeParams(params)
      });
    }
    __name(_uuidv7, "_uuidv7");
    function _url(Class, params) {
      return new Class({
        type: "string",
        format: "url",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_url, "_url");
    function _emoji(Class, params) {
      return new Class({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_emoji, "_emoji");
    function _nanoid(Class, params) {
      return new Class({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_nanoid, "_nanoid");
    function _cuid(Class, params) {
      return new Class({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_cuid, "_cuid");
    function _cuid2(Class, params) {
      return new Class({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_cuid2, "_cuid2");
    function _ulid(Class, params) {
      return new Class({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_ulid, "_ulid");
    function _xid(Class, params) {
      return new Class({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_xid, "_xid");
    function _ksuid(Class, params) {
      return new Class({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_ksuid, "_ksuid");
    function _ipv4(Class, params) {
      return new Class({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_ipv4, "_ipv4");
    function _ipv6(Class, params) {
      return new Class({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_ipv6, "_ipv6");
    function _cidrv4(Class, params) {
      return new Class({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_cidrv4, "_cidrv4");
    function _cidrv6(Class, params) {
      return new Class({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_cidrv6, "_cidrv6");
    function _base64(Class, params) {
      return new Class({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_base64, "_base64");
    function _base64url(Class, params) {
      return new Class({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_base64url, "_base64url");
    function _e164(Class, params) {
      return new Class({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_e164, "_e164");
    function _jwt(Class, params) {
      return new Class({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: false,
        ...util.normalizeParams(params)
      });
    }
    __name(_jwt, "_jwt");
    exports.TimePrecision = {
      Any: null,
      Minute: -1,
      Second: 0,
      Millisecond: 3,
      Microsecond: 6
    };
    function _isoDateTime(Class, params) {
      return new Class({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: false,
        local: false,
        precision: null,
        ...util.normalizeParams(params)
      });
    }
    __name(_isoDateTime, "_isoDateTime");
    function _isoDate(Class, params) {
      return new Class({
        type: "string",
        format: "date",
        check: "string_format",
        ...util.normalizeParams(params)
      });
    }
    __name(_isoDate, "_isoDate");
    function _isoTime(Class, params) {
      return new Class({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...util.normalizeParams(params)
      });
    }
    __name(_isoTime, "_isoTime");
    function _isoDuration(Class, params) {
      return new Class({
        type: "string",
        format: "duration",
        check: "string_format",
        ...util.normalizeParams(params)
      });
    }
    __name(_isoDuration, "_isoDuration");
    function _number(Class, params) {
      return new Class({
        type: "number",
        checks: [],
        ...util.normalizeParams(params)
      });
    }
    __name(_number, "_number");
    function _coercedNumber(Class, params) {
      return new Class({
        type: "number",
        coerce: true,
        checks: [],
        ...util.normalizeParams(params)
      });
    }
    __name(_coercedNumber, "_coercedNumber");
    function _int(Class, params) {
      return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "safeint",
        ...util.normalizeParams(params)
      });
    }
    __name(_int, "_int");
    function _float32(Class, params) {
      return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float32",
        ...util.normalizeParams(params)
      });
    }
    __name(_float32, "_float32");
    function _float64(Class, params) {
      return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float64",
        ...util.normalizeParams(params)
      });
    }
    __name(_float64, "_float64");
    function _int32(Class, params) {
      return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "int32",
        ...util.normalizeParams(params)
      });
    }
    __name(_int32, "_int32");
    function _uint32(Class, params) {
      return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "uint32",
        ...util.normalizeParams(params)
      });
    }
    __name(_uint32, "_uint32");
    function _boolean(Class, params) {
      return new Class({
        type: "boolean",
        ...util.normalizeParams(params)
      });
    }
    __name(_boolean, "_boolean");
    function _coercedBoolean(Class, params) {
      return new Class({
        type: "boolean",
        coerce: true,
        ...util.normalizeParams(params)
      });
    }
    __name(_coercedBoolean, "_coercedBoolean");
    function _bigint(Class, params) {
      return new Class({
        type: "bigint",
        ...util.normalizeParams(params)
      });
    }
    __name(_bigint, "_bigint");
    function _coercedBigint(Class, params) {
      return new Class({
        type: "bigint",
        coerce: true,
        ...util.normalizeParams(params)
      });
    }
    __name(_coercedBigint, "_coercedBigint");
    function _int64(Class, params) {
      return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "int64",
        ...util.normalizeParams(params)
      });
    }
    __name(_int64, "_int64");
    function _uint64(Class, params) {
      return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "uint64",
        ...util.normalizeParams(params)
      });
    }
    __name(_uint64, "_uint64");
    function _symbol(Class, params) {
      return new Class({
        type: "symbol",
        ...util.normalizeParams(params)
      });
    }
    __name(_symbol, "_symbol");
    function _undefined(Class, params) {
      return new Class({
        type: "undefined",
        ...util.normalizeParams(params)
      });
    }
    __name(_undefined, "_undefined");
    function _null(Class, params) {
      return new Class({
        type: "null",
        ...util.normalizeParams(params)
      });
    }
    __name(_null, "_null");
    function _any(Class) {
      return new Class({
        type: "any"
      });
    }
    __name(_any, "_any");
    function _unknown(Class) {
      return new Class({
        type: "unknown"
      });
    }
    __name(_unknown, "_unknown");
    function _never(Class, params) {
      return new Class({
        type: "never",
        ...util.normalizeParams(params)
      });
    }
    __name(_never, "_never");
    function _void(Class, params) {
      return new Class({
        type: "void",
        ...util.normalizeParams(params)
      });
    }
    __name(_void, "_void");
    function _date(Class, params) {
      return new Class({
        type: "date",
        ...util.normalizeParams(params)
      });
    }
    __name(_date, "_date");
    function _coercedDate(Class, params) {
      return new Class({
        type: "date",
        coerce: true,
        ...util.normalizeParams(params)
      });
    }
    __name(_coercedDate, "_coercedDate");
    function _nan(Class, params) {
      return new Class({
        type: "nan",
        ...util.normalizeParams(params)
      });
    }
    __name(_nan, "_nan");
    function _lt(value, params) {
      return new checks.$ZodCheckLessThan({
        check: "less_than",
        ...util.normalizeParams(params),
        value,
        inclusive: false
      });
    }
    __name(_lt, "_lt");
    function _lte(value, params) {
      return new checks.$ZodCheckLessThan({
        check: "less_than",
        ...util.normalizeParams(params),
        value,
        inclusive: true
      });
    }
    __name(_lte, "_lte");
    function _gt(value, params) {
      return new checks.$ZodCheckGreaterThan({
        check: "greater_than",
        ...util.normalizeParams(params),
        value,
        inclusive: false
      });
    }
    __name(_gt, "_gt");
    function _gte(value, params) {
      return new checks.$ZodCheckGreaterThan({
        check: "greater_than",
        ...util.normalizeParams(params),
        value,
        inclusive: true
      });
    }
    __name(_gte, "_gte");
    function _positive(params) {
      return _gt(0, params);
    }
    __name(_positive, "_positive");
    function _negative(params) {
      return _lt(0, params);
    }
    __name(_negative, "_negative");
    function _nonpositive(params) {
      return _lte(0, params);
    }
    __name(_nonpositive, "_nonpositive");
    function _nonnegative(params) {
      return _gte(0, params);
    }
    __name(_nonnegative, "_nonnegative");
    function _multipleOf(value, params) {
      return new checks.$ZodCheckMultipleOf({
        check: "multiple_of",
        ...util.normalizeParams(params),
        value
      });
    }
    __name(_multipleOf, "_multipleOf");
    function _maxSize(maximum, params) {
      return new checks.$ZodCheckMaxSize({
        check: "max_size",
        ...util.normalizeParams(params),
        maximum
      });
    }
    __name(_maxSize, "_maxSize");
    function _minSize(minimum, params) {
      return new checks.$ZodCheckMinSize({
        check: "min_size",
        ...util.normalizeParams(params),
        minimum
      });
    }
    __name(_minSize, "_minSize");
    function _size(size, params) {
      return new checks.$ZodCheckSizeEquals({
        check: "size_equals",
        ...util.normalizeParams(params),
        size
      });
    }
    __name(_size, "_size");
    function _maxLength(maximum, params) {
      const ch = new checks.$ZodCheckMaxLength({
        check: "max_length",
        ...util.normalizeParams(params),
        maximum
      });
      return ch;
    }
    __name(_maxLength, "_maxLength");
    function _minLength(minimum, params) {
      return new checks.$ZodCheckMinLength({
        check: "min_length",
        ...util.normalizeParams(params),
        minimum
      });
    }
    __name(_minLength, "_minLength");
    function _length(length, params) {
      return new checks.$ZodCheckLengthEquals({
        check: "length_equals",
        ...util.normalizeParams(params),
        length
      });
    }
    __name(_length, "_length");
    function _regex(pattern, params) {
      return new checks.$ZodCheckRegex({
        check: "string_format",
        format: "regex",
        ...util.normalizeParams(params),
        pattern
      });
    }
    __name(_regex, "_regex");
    function _lowercase(params) {
      return new checks.$ZodCheckLowerCase({
        check: "string_format",
        format: "lowercase",
        ...util.normalizeParams(params)
      });
    }
    __name(_lowercase, "_lowercase");
    function _uppercase(params) {
      return new checks.$ZodCheckUpperCase({
        check: "string_format",
        format: "uppercase",
        ...util.normalizeParams(params)
      });
    }
    __name(_uppercase, "_uppercase");
    function _includes(includes, params) {
      return new checks.$ZodCheckIncludes({
        check: "string_format",
        format: "includes",
        ...util.normalizeParams(params),
        includes
      });
    }
    __name(_includes, "_includes");
    function _startsWith(prefix, params) {
      return new checks.$ZodCheckStartsWith({
        check: "string_format",
        format: "starts_with",
        ...util.normalizeParams(params),
        prefix
      });
    }
    __name(_startsWith, "_startsWith");
    function _endsWith(suffix, params) {
      return new checks.$ZodCheckEndsWith({
        check: "string_format",
        format: "ends_with",
        ...util.normalizeParams(params),
        suffix
      });
    }
    __name(_endsWith, "_endsWith");
    function _property(property, schema, params) {
      return new checks.$ZodCheckProperty({
        check: "property",
        property,
        schema,
        ...util.normalizeParams(params)
      });
    }
    __name(_property, "_property");
    function _mime(types, params) {
      return new checks.$ZodCheckMimeType({
        check: "mime_type",
        mime: types,
        ...util.normalizeParams(params)
      });
    }
    __name(_mime, "_mime");
    function _overwrite(tx) {
      return new checks.$ZodCheckOverwrite({
        check: "overwrite",
        tx
      });
    }
    __name(_overwrite, "_overwrite");
    function _normalize(form) {
      return _overwrite((input) => input.normalize(form));
    }
    __name(_normalize, "_normalize");
    function _trim() {
      return _overwrite((input) => input.trim());
    }
    __name(_trim, "_trim");
    function _toLowerCase() {
      return _overwrite((input) => input.toLowerCase());
    }
    __name(_toLowerCase, "_toLowerCase");
    function _toUpperCase() {
      return _overwrite((input) => input.toUpperCase());
    }
    __name(_toUpperCase, "_toUpperCase");
    function _array(Class, element, params) {
      return new Class({
        type: "array",
        element,
        // get element() {
        //   return element;
        // },
        ...util.normalizeParams(params)
      });
    }
    __name(_array, "_array");
    function _union(Class, options, params) {
      return new Class({
        type: "union",
        options,
        ...util.normalizeParams(params)
      });
    }
    __name(_union, "_union");
    function _discriminatedUnion(Class, discriminator, options, params) {
      return new Class({
        type: "union",
        options,
        discriminator,
        ...util.normalizeParams(params)
      });
    }
    __name(_discriminatedUnion, "_discriminatedUnion");
    function _intersection(Class, left, right) {
      return new Class({
        type: "intersection",
        left,
        right
      });
    }
    __name(_intersection, "_intersection");
    function _tuple(Class, items, _paramsOrRest, _params) {
      const hasRest = _paramsOrRest instanceof schemas.$ZodType;
      const params = hasRest ? _params : _paramsOrRest;
      const rest = hasRest ? _paramsOrRest : null;
      return new Class({
        type: "tuple",
        items,
        rest,
        ...util.normalizeParams(params)
      });
    }
    __name(_tuple, "_tuple");
    function _record(Class, keyType, valueType, params) {
      return new Class({
        type: "record",
        keyType,
        valueType,
        ...util.normalizeParams(params)
      });
    }
    __name(_record, "_record");
    function _map(Class, keyType, valueType, params) {
      return new Class({
        type: "map",
        keyType,
        valueType,
        ...util.normalizeParams(params)
      });
    }
    __name(_map, "_map");
    function _set(Class, valueType, params) {
      return new Class({
        type: "set",
        valueType,
        ...util.normalizeParams(params)
      });
    }
    __name(_set, "_set");
    function _enum(Class, values, params) {
      const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
      return new Class({
        type: "enum",
        entries,
        ...util.normalizeParams(params)
      });
    }
    __name(_enum, "_enum");
    function _nativeEnum(Class, entries, params) {
      return new Class({
        type: "enum",
        entries,
        ...util.normalizeParams(params)
      });
    }
    __name(_nativeEnum, "_nativeEnum");
    function _literal(Class, value, params) {
      return new Class({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ...util.normalizeParams(params)
      });
    }
    __name(_literal, "_literal");
    function _file(Class, params) {
      return new Class({
        type: "file",
        ...util.normalizeParams(params)
      });
    }
    __name(_file, "_file");
    function _transform(Class, fn) {
      return new Class({
        type: "transform",
        transform: fn
      });
    }
    __name(_transform, "_transform");
    function _optional(Class, innerType) {
      return new Class({
        type: "optional",
        innerType
      });
    }
    __name(_optional, "_optional");
    function _nullable(Class, innerType) {
      return new Class({
        type: "nullable",
        innerType
      });
    }
    __name(_nullable, "_nullable");
    function _default(Class, innerType, defaultValue) {
      return new Class({
        type: "default",
        innerType,
        get defaultValue() {
          return typeof defaultValue === "function" ? defaultValue() : util.shallowClone(defaultValue);
        }
      });
    }
    __name(_default, "_default");
    function _nonoptional(Class, innerType, params) {
      return new Class({
        type: "nonoptional",
        innerType,
        ...util.normalizeParams(params)
      });
    }
    __name(_nonoptional, "_nonoptional");
    function _success(Class, innerType) {
      return new Class({
        type: "success",
        innerType
      });
    }
    __name(_success, "_success");
    function _catch(Class, innerType, catchValue) {
      return new Class({
        type: "catch",
        innerType,
        catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
      });
    }
    __name(_catch, "_catch");
    function _pipe(Class, in_, out) {
      return new Class({
        type: "pipe",
        in: in_,
        out
      });
    }
    __name(_pipe, "_pipe");
    function _readonly(Class, innerType) {
      return new Class({
        type: "readonly",
        innerType
      });
    }
    __name(_readonly, "_readonly");
    function _templateLiteral(Class, parts, params) {
      return new Class({
        type: "template_literal",
        parts,
        ...util.normalizeParams(params)
      });
    }
    __name(_templateLiteral, "_templateLiteral");
    function _lazy(Class, getter) {
      return new Class({
        type: "lazy",
        getter
      });
    }
    __name(_lazy, "_lazy");
    function _promise(Class, innerType) {
      return new Class({
        type: "promise",
        innerType
      });
    }
    __name(_promise, "_promise");
    function _custom(Class, fn, _params) {
      const norm = util.normalizeParams(_params);
      norm.abort ?? (norm.abort = true);
      const schema = new Class({
        type: "custom",
        check: "custom",
        fn,
        ...norm
      });
      return schema;
    }
    __name(_custom, "_custom");
    function _refine(Class, fn, _params) {
      const schema = new Class({
        type: "custom",
        check: "custom",
        fn,
        ...util.normalizeParams(_params)
      });
      return schema;
    }
    __name(_refine, "_refine");
    function _superRefine(fn) {
      const ch = _check((payload) => {
        payload.addIssue = (issue) => {
          if (typeof issue === "string") {
            payload.issues.push(util.issue(issue, payload.value, ch._zod.def));
          } else {
            const _issue = issue;
            if (_issue.fatal)
              _issue.continue = false;
            _issue.code ?? (_issue.code = "custom");
            _issue.input ?? (_issue.input = payload.value);
            _issue.inst ?? (_issue.inst = ch);
            _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
            payload.issues.push(util.issue(_issue));
          }
        };
        return fn(payload.value, payload);
      });
      return ch;
    }
    __name(_superRefine, "_superRefine");
    function _check(fn, params) {
      const ch = new checks.$ZodCheck({
        check: "custom",
        ...util.normalizeParams(params)
      });
      ch._zod.check = fn;
      return ch;
    }
    __name(_check, "_check");
    function _stringbool(Classes, _params) {
      const params = util.normalizeParams(_params);
      let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
      let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
      if (params.case !== "sensitive") {
        truthyArray = truthyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
        falsyArray = falsyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
      }
      const truthySet = new Set(truthyArray);
      const falsySet = new Set(falsyArray);
      const _Codec = Classes.Codec ?? schemas.$ZodCodec;
      const _Boolean = Classes.Boolean ?? schemas.$ZodBoolean;
      const _String = Classes.String ?? schemas.$ZodString;
      const stringSchema = new _String({ type: "string", error: params.error });
      const booleanSchema = new _Boolean({ type: "boolean", error: params.error });
      const codec = new _Codec({
        type: "pipe",
        in: stringSchema,
        out: booleanSchema,
        transform: /* @__PURE__ */ __name((input, payload) => {
          let data = input;
          if (params.case !== "sensitive")
            data = data.toLowerCase();
          if (truthySet.has(data)) {
            return true;
          } else if (falsySet.has(data)) {
            return false;
          } else {
            payload.issues.push({
              code: "invalid_value",
              expected: "stringbool",
              values: [...truthySet, ...falsySet],
              input: payload.value,
              inst: codec,
              continue: false
            });
            return {};
          }
        }, "transform"),
        reverseTransform: /* @__PURE__ */ __name((input, _payload) => {
          if (input === true) {
            return truthyArray[0] || "true";
          } else {
            return falsyArray[0] || "false";
          }
        }, "reverseTransform"),
        error: params.error
      });
      return codec;
    }
    __name(_stringbool, "_stringbool");
    function _stringFormat(Class, format, fnOrRegex, _params = {}) {
      const params = util.normalizeParams(_params);
      const def = {
        ...util.normalizeParams(_params),
        check: "string_format",
        type: "string",
        format,
        fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
        ...params
      };
      if (fnOrRegex instanceof RegExp) {
        def.pattern = fnOrRegex;
      }
      const inst = new Class(def);
      return inst;
    }
    __name(_stringFormat, "_stringFormat");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/to-json-schema.cjs
var require_to_json_schema = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/to-json-schema.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JSONSchemaGenerator = void 0;
    exports.toJSONSchema = toJSONSchema;
    var registries_js_1 = require_registries();
    var util_js_1 = require_util();
    var JSONSchemaGenerator = class {
      static {
        __name(this, "JSONSchemaGenerator");
      }
      constructor(params) {
        this.counter = 0;
        this.metadataRegistry = params?.metadata ?? registries_js_1.globalRegistry;
        this.target = params?.target ?? "draft-2020-12";
        this.unrepresentable = params?.unrepresentable ?? "throw";
        this.override = params?.override ?? (() => {
        });
        this.io = params?.io ?? "output";
        this.seen = /* @__PURE__ */ new Map();
      }
      process(schema, _params = { path: [], schemaPath: [] }) {
        var _a;
        const def = schema._zod.def;
        const formatMap = {
          guid: "uuid",
          url: "uri",
          datetime: "date-time",
          json_string: "json-string",
          regex: ""
          // do not set
        };
        const seen = this.seen.get(schema);
        if (seen) {
          seen.count++;
          const isCycle = _params.schemaPath.includes(schema);
          if (isCycle) {
            seen.cycle = _params.path;
          }
          return seen.schema;
        }
        const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
        this.seen.set(schema, result);
        const overrideSchema = schema._zod.toJSONSchema?.();
        if (overrideSchema) {
          result.schema = overrideSchema;
        } else {
          const params = {
            ..._params,
            schemaPath: [..._params.schemaPath, schema],
            path: _params.path
          };
          const parent = schema._zod.parent;
          if (parent) {
            result.ref = parent;
            this.process(parent, params);
            this.seen.get(parent).isParent = true;
          } else {
            const _json = result.schema;
            switch (def.type) {
              case "string": {
                const json = _json;
                json.type = "string";
                const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
                if (typeof minimum === "number")
                  json.minLength = minimum;
                if (typeof maximum === "number")
                  json.maxLength = maximum;
                if (format) {
                  json.format = formatMap[format] ?? format;
                  if (json.format === "")
                    delete json.format;
                }
                if (contentEncoding)
                  json.contentEncoding = contentEncoding;
                if (patterns && patterns.size > 0) {
                  const regexes = [...patterns];
                  if (regexes.length === 1)
                    json.pattern = regexes[0].source;
                  else if (regexes.length > 1) {
                    result.schema.allOf = [
                      ...regexes.map((regex) => ({
                        ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                        pattern: regex.source
                      }))
                    ];
                  }
                }
                break;
              }
              case "number": {
                const json = _json;
                const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
                if (typeof format === "string" && format.includes("int"))
                  json.type = "integer";
                else
                  json.type = "number";
                if (typeof exclusiveMinimum === "number") {
                  if (this.target === "draft-4" || this.target === "openapi-3.0") {
                    json.minimum = exclusiveMinimum;
                    json.exclusiveMinimum = true;
                  } else {
                    json.exclusiveMinimum = exclusiveMinimum;
                  }
                }
                if (typeof minimum === "number") {
                  json.minimum = minimum;
                  if (typeof exclusiveMinimum === "number" && this.target !== "draft-4") {
                    if (exclusiveMinimum >= minimum)
                      delete json.minimum;
                    else
                      delete json.exclusiveMinimum;
                  }
                }
                if (typeof exclusiveMaximum === "number") {
                  if (this.target === "draft-4" || this.target === "openapi-3.0") {
                    json.maximum = exclusiveMaximum;
                    json.exclusiveMaximum = true;
                  } else {
                    json.exclusiveMaximum = exclusiveMaximum;
                  }
                }
                if (typeof maximum === "number") {
                  json.maximum = maximum;
                  if (typeof exclusiveMaximum === "number" && this.target !== "draft-4") {
                    if (exclusiveMaximum <= maximum)
                      delete json.maximum;
                    else
                      delete json.exclusiveMaximum;
                  }
                }
                if (typeof multipleOf === "number")
                  json.multipleOf = multipleOf;
                break;
              }
              case "boolean": {
                const json = _json;
                json.type = "boolean";
                break;
              }
              case "bigint": {
                if (this.unrepresentable === "throw") {
                  throw new Error("BigInt cannot be represented in JSON Schema");
                }
                break;
              }
              case "symbol": {
                if (this.unrepresentable === "throw") {
                  throw new Error("Symbols cannot be represented in JSON Schema");
                }
                break;
              }
              case "null": {
                if (this.target === "openapi-3.0") {
                  _json.type = "string";
                  _json.nullable = true;
                  _json.enum = [null];
                } else
                  _json.type = "null";
                break;
              }
              case "any": {
                break;
              }
              case "unknown": {
                break;
              }
              case "undefined": {
                if (this.unrepresentable === "throw") {
                  throw new Error("Undefined cannot be represented in JSON Schema");
                }
                break;
              }
              case "void": {
                if (this.unrepresentable === "throw") {
                  throw new Error("Void cannot be represented in JSON Schema");
                }
                break;
              }
              case "never": {
                _json.not = {};
                break;
              }
              case "date": {
                if (this.unrepresentable === "throw") {
                  throw new Error("Date cannot be represented in JSON Schema");
                }
                break;
              }
              case "array": {
                const json = _json;
                const { minimum, maximum } = schema._zod.bag;
                if (typeof minimum === "number")
                  json.minItems = minimum;
                if (typeof maximum === "number")
                  json.maxItems = maximum;
                json.type = "array";
                json.items = this.process(def.element, { ...params, path: [...params.path, "items"] });
                break;
              }
              case "object": {
                const json = _json;
                json.type = "object";
                json.properties = {};
                const shape = def.shape;
                for (const key in shape) {
                  json.properties[key] = this.process(shape[key], {
                    ...params,
                    path: [...params.path, "properties", key]
                  });
                }
                const allKeys = new Set(Object.keys(shape));
                const requiredKeys = new Set([...allKeys].filter((key) => {
                  const v = def.shape[key]._zod;
                  if (this.io === "input") {
                    return v.optin === void 0;
                  } else {
                    return v.optout === void 0;
                  }
                }));
                if (requiredKeys.size > 0) {
                  json.required = Array.from(requiredKeys);
                }
                if (def.catchall?._zod.def.type === "never") {
                  json.additionalProperties = false;
                } else if (!def.catchall) {
                  if (this.io === "output")
                    json.additionalProperties = false;
                } else if (def.catchall) {
                  json.additionalProperties = this.process(def.catchall, {
                    ...params,
                    path: [...params.path, "additionalProperties"]
                  });
                }
                break;
              }
              case "union": {
                const json = _json;
                const options = def.options.map((x, i) => this.process(x, {
                  ...params,
                  path: [...params.path, "anyOf", i]
                }));
                json.anyOf = options;
                break;
              }
              case "intersection": {
                const json = _json;
                const a = this.process(def.left, {
                  ...params,
                  path: [...params.path, "allOf", 0]
                });
                const b = this.process(def.right, {
                  ...params,
                  path: [...params.path, "allOf", 1]
                });
                const isSimpleIntersection = /* @__PURE__ */ __name((val) => "allOf" in val && Object.keys(val).length === 1, "isSimpleIntersection");
                const allOf = [
                  ...isSimpleIntersection(a) ? a.allOf : [a],
                  ...isSimpleIntersection(b) ? b.allOf : [b]
                ];
                json.allOf = allOf;
                break;
              }
              case "tuple": {
                const json = _json;
                json.type = "array";
                const prefixPath = this.target === "draft-2020-12" ? "prefixItems" : "items";
                const restPath = this.target === "draft-2020-12" ? "items" : this.target === "openapi-3.0" ? "items" : "additionalItems";
                const prefixItems = def.items.map((x, i) => this.process(x, {
                  ...params,
                  path: [...params.path, prefixPath, i]
                }));
                const rest = def.rest ? this.process(def.rest, {
                  ...params,
                  path: [...params.path, restPath, ...this.target === "openapi-3.0" ? [def.items.length] : []]
                }) : null;
                if (this.target === "draft-2020-12") {
                  json.prefixItems = prefixItems;
                  if (rest) {
                    json.items = rest;
                  }
                } else if (this.target === "openapi-3.0") {
                  json.items = {
                    anyOf: prefixItems
                  };
                  if (rest) {
                    json.items.anyOf.push(rest);
                  }
                  json.minItems = prefixItems.length;
                  if (!rest) {
                    json.maxItems = prefixItems.length;
                  }
                } else {
                  json.items = prefixItems;
                  if (rest) {
                    json.additionalItems = rest;
                  }
                }
                const { minimum, maximum } = schema._zod.bag;
                if (typeof minimum === "number")
                  json.minItems = minimum;
                if (typeof maximum === "number")
                  json.maxItems = maximum;
                break;
              }
              case "record": {
                const json = _json;
                json.type = "object";
                if (this.target === "draft-7" || this.target === "draft-2020-12") {
                  json.propertyNames = this.process(def.keyType, {
                    ...params,
                    path: [...params.path, "propertyNames"]
                  });
                }
                json.additionalProperties = this.process(def.valueType, {
                  ...params,
                  path: [...params.path, "additionalProperties"]
                });
                break;
              }
              case "map": {
                if (this.unrepresentable === "throw") {
                  throw new Error("Map cannot be represented in JSON Schema");
                }
                break;
              }
              case "set": {
                if (this.unrepresentable === "throw") {
                  throw new Error("Set cannot be represented in JSON Schema");
                }
                break;
              }
              case "enum": {
                const json = _json;
                const values = (0, util_js_1.getEnumValues)(def.entries);
                if (values.every((v) => typeof v === "number"))
                  json.type = "number";
                if (values.every((v) => typeof v === "string"))
                  json.type = "string";
                json.enum = values;
                break;
              }
              case "literal": {
                const json = _json;
                const vals = [];
                for (const val of def.values) {
                  if (val === void 0) {
                    if (this.unrepresentable === "throw") {
                      throw new Error("Literal `undefined` cannot be represented in JSON Schema");
                    } else {
                    }
                  } else if (typeof val === "bigint") {
                    if (this.unrepresentable === "throw") {
                      throw new Error("BigInt literals cannot be represented in JSON Schema");
                    } else {
                      vals.push(Number(val));
                    }
                  } else {
                    vals.push(val);
                  }
                }
                if (vals.length === 0) {
                } else if (vals.length === 1) {
                  const val = vals[0];
                  json.type = val === null ? "null" : typeof val;
                  if (this.target === "draft-4" || this.target === "openapi-3.0") {
                    json.enum = [val];
                  } else {
                    json.const = val;
                  }
                } else {
                  if (vals.every((v) => typeof v === "number"))
                    json.type = "number";
                  if (vals.every((v) => typeof v === "string"))
                    json.type = "string";
                  if (vals.every((v) => typeof v === "boolean"))
                    json.type = "string";
                  if (vals.every((v) => v === null))
                    json.type = "null";
                  json.enum = vals;
                }
                break;
              }
              case "file": {
                const json = _json;
                const file = {
                  type: "string",
                  format: "binary",
                  contentEncoding: "binary"
                };
                const { minimum, maximum, mime } = schema._zod.bag;
                if (minimum !== void 0)
                  file.minLength = minimum;
                if (maximum !== void 0)
                  file.maxLength = maximum;
                if (mime) {
                  if (mime.length === 1) {
                    file.contentMediaType = mime[0];
                    Object.assign(json, file);
                  } else {
                    json.anyOf = mime.map((m) => {
                      const mFile = { ...file, contentMediaType: m };
                      return mFile;
                    });
                  }
                } else {
                  Object.assign(json, file);
                }
                break;
              }
              case "transform": {
                if (this.unrepresentable === "throw") {
                  throw new Error("Transforms cannot be represented in JSON Schema");
                }
                break;
              }
              case "nullable": {
                const inner = this.process(def.innerType, params);
                if (this.target === "openapi-3.0") {
                  result.ref = def.innerType;
                  _json.nullable = true;
                } else {
                  _json.anyOf = [inner, { type: "null" }];
                }
                break;
              }
              case "nonoptional": {
                this.process(def.innerType, params);
                result.ref = def.innerType;
                break;
              }
              case "success": {
                const json = _json;
                json.type = "boolean";
                break;
              }
              case "default": {
                this.process(def.innerType, params);
                result.ref = def.innerType;
                _json.default = JSON.parse(JSON.stringify(def.defaultValue));
                break;
              }
              case "prefault": {
                this.process(def.innerType, params);
                result.ref = def.innerType;
                if (this.io === "input")
                  _json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
                break;
              }
              case "catch": {
                this.process(def.innerType, params);
                result.ref = def.innerType;
                let catchValue;
                try {
                  catchValue = def.catchValue(void 0);
                } catch {
                  throw new Error("Dynamic catch values are not supported in JSON Schema");
                }
                _json.default = catchValue;
                break;
              }
              case "nan": {
                if (this.unrepresentable === "throw") {
                  throw new Error("NaN cannot be represented in JSON Schema");
                }
                break;
              }
              case "template_literal": {
                const json = _json;
                const pattern = schema._zod.pattern;
                if (!pattern)
                  throw new Error("Pattern not found in template literal");
                json.type = "string";
                json.pattern = pattern.source;
                break;
              }
              case "pipe": {
                const innerType = this.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
                this.process(innerType, params);
                result.ref = innerType;
                break;
              }
              case "readonly": {
                this.process(def.innerType, params);
                result.ref = def.innerType;
                _json.readOnly = true;
                break;
              }
              // passthrough types
              case "promise": {
                this.process(def.innerType, params);
                result.ref = def.innerType;
                break;
              }
              case "optional": {
                this.process(def.innerType, params);
                result.ref = def.innerType;
                break;
              }
              case "lazy": {
                const innerType = schema._zod.innerType;
                this.process(innerType, params);
                result.ref = innerType;
                break;
              }
              case "custom": {
                if (this.unrepresentable === "throw") {
                  throw new Error("Custom types cannot be represented in JSON Schema");
                }
                break;
              }
              case "function": {
                if (this.unrepresentable === "throw") {
                  throw new Error("Function types cannot be represented in JSON Schema");
                }
                break;
              }
              default: {
                def;
              }
            }
          }
        }
        const meta = this.metadataRegistry.get(schema);
        if (meta)
          Object.assign(result.schema, meta);
        if (this.io === "input" && isTransforming(schema)) {
          delete result.schema.examples;
          delete result.schema.default;
        }
        if (this.io === "input" && result.schema._prefault)
          (_a = result.schema).default ?? (_a.default = result.schema._prefault);
        delete result.schema._prefault;
        const _result = this.seen.get(schema);
        return _result.schema;
      }
      emit(schema, _params) {
        const params = {
          cycles: _params?.cycles ?? "ref",
          reused: _params?.reused ?? "inline",
          // unrepresentable: _params?.unrepresentable ?? "throw",
          // uri: _params?.uri ?? ((id) => `${id}`),
          external: _params?.external ?? void 0
        };
        const root = this.seen.get(schema);
        if (!root)
          throw new Error("Unprocessed schema. This is a bug in Zod.");
        const makeURI = /* @__PURE__ */ __name((entry) => {
          const defsSegment = this.target === "draft-2020-12" ? "$defs" : "definitions";
          if (params.external) {
            const externalId = params.external.registry.get(entry[0])?.id;
            const uriGenerator = params.external.uri ?? ((id2) => id2);
            if (externalId) {
              return { ref: uriGenerator(externalId) };
            }
            const id = entry[1].defId ?? entry[1].schema.id ?? `schema${this.counter++}`;
            entry[1].defId = id;
            return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
          }
          if (entry[1] === root) {
            return { ref: "#" };
          }
          const uriPrefix = `#`;
          const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
          const defId = entry[1].schema.id ?? `__schema${this.counter++}`;
          return { defId, ref: defUriPrefix + defId };
        }, "makeURI");
        const extractToDef = /* @__PURE__ */ __name((entry) => {
          if (entry[1].schema.$ref) {
            return;
          }
          const seen = entry[1];
          const { ref, defId } = makeURI(entry);
          seen.def = { ...seen.schema };
          if (defId)
            seen.defId = defId;
          const schema2 = seen.schema;
          for (const key in schema2) {
            delete schema2[key];
          }
          schema2.$ref = ref;
        }, "extractToDef");
        if (params.cycles === "throw") {
          for (const entry of this.seen.entries()) {
            const seen = entry[1];
            if (seen.cycle) {
              throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
            }
          }
        }
        for (const entry of this.seen.entries()) {
          const seen = entry[1];
          if (schema === entry[0]) {
            extractToDef(entry);
            continue;
          }
          if (params.external) {
            const ext = params.external.registry.get(entry[0])?.id;
            if (schema !== entry[0] && ext) {
              extractToDef(entry);
              continue;
            }
          }
          const id = this.metadataRegistry.get(entry[0])?.id;
          if (id) {
            extractToDef(entry);
            continue;
          }
          if (seen.cycle) {
            extractToDef(entry);
            continue;
          }
          if (seen.count > 1) {
            if (params.reused === "ref") {
              extractToDef(entry);
              continue;
            }
          }
        }
        const flattenRef = /* @__PURE__ */ __name((zodSchema, params2) => {
          const seen = this.seen.get(zodSchema);
          const schema2 = seen.def ?? seen.schema;
          const _cached = { ...schema2 };
          if (seen.ref === null) {
            return;
          }
          const ref = seen.ref;
          seen.ref = null;
          if (ref) {
            flattenRef(ref, params2);
            const refSchema = this.seen.get(ref).schema;
            if (refSchema.$ref && (params2.target === "draft-7" || params2.target === "draft-4" || params2.target === "openapi-3.0")) {
              schema2.allOf = schema2.allOf ?? [];
              schema2.allOf.push(refSchema);
            } else {
              Object.assign(schema2, refSchema);
              Object.assign(schema2, _cached);
            }
          }
          if (!seen.isParent)
            this.override({
              zodSchema,
              jsonSchema: schema2,
              path: seen.path ?? []
            });
        }, "flattenRef");
        for (const entry of [...this.seen.entries()].reverse()) {
          flattenRef(entry[0], { target: this.target });
        }
        const result = {};
        if (this.target === "draft-2020-12") {
          result.$schema = "https://json-schema.org/draft/2020-12/schema";
        } else if (this.target === "draft-7") {
          result.$schema = "http://json-schema.org/draft-07/schema#";
        } else if (this.target === "draft-4") {
          result.$schema = "http://json-schema.org/draft-04/schema#";
        } else if (this.target === "openapi-3.0") {
        } else {
          console.warn(`Invalid target: ${this.target}`);
        }
        if (params.external?.uri) {
          const id = params.external.registry.get(schema)?.id;
          if (!id)
            throw new Error("Schema is missing an `id` property");
          result.$id = params.external.uri(id);
        }
        Object.assign(result, root.def);
        const defs = params.external?.defs ?? {};
        for (const entry of this.seen.entries()) {
          const seen = entry[1];
          if (seen.def && seen.defId) {
            defs[seen.defId] = seen.def;
          }
        }
        if (params.external) {
        } else {
          if (Object.keys(defs).length > 0) {
            if (this.target === "draft-2020-12") {
              result.$defs = defs;
            } else {
              result.definitions = defs;
            }
          }
        }
        try {
          return JSON.parse(JSON.stringify(result));
        } catch (_err) {
          throw new Error("Error converting schema to JSON.");
        }
      }
    };
    exports.JSONSchemaGenerator = JSONSchemaGenerator;
    function toJSONSchema(input, _params) {
      if (input instanceof registries_js_1.$ZodRegistry) {
        const gen2 = new JSONSchemaGenerator(_params);
        const defs = {};
        for (const entry of input._idmap.entries()) {
          const [_, schema] = entry;
          gen2.process(schema);
        }
        const schemas = {};
        const external = {
          registry: input,
          uri: _params?.uri,
          defs
        };
        for (const entry of input._idmap.entries()) {
          const [key, schema] = entry;
          schemas[key] = gen2.emit(schema, {
            ..._params,
            external
          });
        }
        if (Object.keys(defs).length > 0) {
          const defsSegment = gen2.target === "draft-2020-12" ? "$defs" : "definitions";
          schemas.__shared = {
            [defsSegment]: defs
          };
        }
        return { schemas };
      }
      const gen = new JSONSchemaGenerator(_params);
      gen.process(input);
      return gen.emit(input, _params);
    }
    __name(toJSONSchema, "toJSONSchema");
    function isTransforming(_schema, _ctx) {
      const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
      if (ctx.seen.has(_schema))
        return false;
      ctx.seen.add(_schema);
      const schema = _schema;
      const def = schema._zod.def;
      switch (def.type) {
        case "string":
        case "number":
        case "bigint":
        case "boolean":
        case "date":
        case "symbol":
        case "undefined":
        case "null":
        case "any":
        case "unknown":
        case "never":
        case "void":
        case "literal":
        case "enum":
        case "nan":
        case "file":
        case "template_literal":
          return false;
        case "array": {
          return isTransforming(def.element, ctx);
        }
        case "object": {
          for (const key in def.shape) {
            if (isTransforming(def.shape[key], ctx))
              return true;
          }
          return false;
        }
        case "union": {
          for (const option of def.options) {
            if (isTransforming(option, ctx))
              return true;
          }
          return false;
        }
        case "intersection": {
          return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
        }
        case "tuple": {
          for (const item of def.items) {
            if (isTransforming(item, ctx))
              return true;
          }
          if (def.rest && isTransforming(def.rest, ctx))
            return true;
          return false;
        }
        case "record": {
          return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
        }
        case "map": {
          return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
        }
        case "set": {
          return isTransforming(def.valueType, ctx);
        }
        // inner types
        case "promise":
        case "optional":
        case "nonoptional":
        case "nullable":
        case "readonly":
          return isTransforming(def.innerType, ctx);
        case "lazy":
          return isTransforming(def.getter(), ctx);
        case "default": {
          return isTransforming(def.innerType, ctx);
        }
        case "prefault": {
          return isTransforming(def.innerType, ctx);
        }
        case "custom": {
          return false;
        }
        case "transform": {
          return true;
        }
        case "pipe": {
          return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
        }
        case "success": {
          return false;
        }
        case "catch": {
          return false;
        }
        case "function": {
          return false;
        }
        default:
          def;
      }
      throw new Error(`Unknown schema type: ${def.type}`);
    }
    __name(isTransforming, "isTransforming");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/json-schema.cjs
var require_json_schema = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/json-schema.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/core/index.cjs
var require_core3 = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/core/index.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JSONSchema = exports.locales = exports.regexes = exports.util = void 0;
    __exportStar(require_core2(), exports);
    __exportStar(require_parse2(), exports);
    __exportStar(require_errors2(), exports);
    __exportStar(require_schemas(), exports);
    __exportStar(require_checks(), exports);
    __exportStar(require_versions(), exports);
    exports.util = __importStar(require_util());
    exports.regexes = __importStar(require_regexes());
    exports.locales = __importStar(require_locales());
    __exportStar(require_registries(), exports);
    __exportStar(require_doc(), exports);
    __exportStar(require_api(), exports);
    __exportStar(require_to_json_schema(), exports);
    exports.JSONSchema = __importStar(require_json_schema());
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/classic/checks.cjs
var require_checks2 = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/classic/checks.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUpperCase = exports.toLowerCase = exports.trim = exports.normalize = exports.overwrite = exports.mime = exports.property = exports.endsWith = exports.startsWith = exports.includes = exports.uppercase = exports.lowercase = exports.regex = exports.length = exports.minLength = exports.maxLength = exports.size = exports.minSize = exports.maxSize = exports.multipleOf = exports.nonnegative = exports.nonpositive = exports.negative = exports.positive = exports.gte = exports.gt = exports.lte = exports.lt = void 0;
    var index_js_1 = require_core3();
    Object.defineProperty(exports, "lt", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._lt;
    }, "get") });
    Object.defineProperty(exports, "lte", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._lte;
    }, "get") });
    Object.defineProperty(exports, "gt", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._gt;
    }, "get") });
    Object.defineProperty(exports, "gte", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._gte;
    }, "get") });
    Object.defineProperty(exports, "positive", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._positive;
    }, "get") });
    Object.defineProperty(exports, "negative", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._negative;
    }, "get") });
    Object.defineProperty(exports, "nonpositive", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._nonpositive;
    }, "get") });
    Object.defineProperty(exports, "nonnegative", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._nonnegative;
    }, "get") });
    Object.defineProperty(exports, "multipleOf", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._multipleOf;
    }, "get") });
    Object.defineProperty(exports, "maxSize", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._maxSize;
    }, "get") });
    Object.defineProperty(exports, "minSize", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._minSize;
    }, "get") });
    Object.defineProperty(exports, "size", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._size;
    }, "get") });
    Object.defineProperty(exports, "maxLength", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._maxLength;
    }, "get") });
    Object.defineProperty(exports, "minLength", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._minLength;
    }, "get") });
    Object.defineProperty(exports, "length", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._length;
    }, "get") });
    Object.defineProperty(exports, "regex", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._regex;
    }, "get") });
    Object.defineProperty(exports, "lowercase", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._lowercase;
    }, "get") });
    Object.defineProperty(exports, "uppercase", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._uppercase;
    }, "get") });
    Object.defineProperty(exports, "includes", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._includes;
    }, "get") });
    Object.defineProperty(exports, "startsWith", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._startsWith;
    }, "get") });
    Object.defineProperty(exports, "endsWith", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._endsWith;
    }, "get") });
    Object.defineProperty(exports, "property", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._property;
    }, "get") });
    Object.defineProperty(exports, "mime", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._mime;
    }, "get") });
    Object.defineProperty(exports, "overwrite", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._overwrite;
    }, "get") });
    Object.defineProperty(exports, "normalize", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._normalize;
    }, "get") });
    Object.defineProperty(exports, "trim", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._trim;
    }, "get") });
    Object.defineProperty(exports, "toLowerCase", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._toLowerCase;
    }, "get") });
    Object.defineProperty(exports, "toUpperCase", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1._toUpperCase;
    }, "get") });
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/classic/iso.cjs
var require_iso = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/classic/iso.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZodISODuration = exports.ZodISOTime = exports.ZodISODate = exports.ZodISODateTime = void 0;
    exports.datetime = datetime;
    exports.date = date;
    exports.time = time;
    exports.duration = duration;
    var core = __importStar(require_core3());
    var schemas = __importStar(require_schemas2());
    exports.ZodISODateTime = core.$constructor("ZodISODateTime", (inst, def) => {
      core.$ZodISODateTime.init(inst, def);
      schemas.ZodStringFormat.init(inst, def);
    });
    function datetime(params) {
      return core._isoDateTime(exports.ZodISODateTime, params);
    }
    __name(datetime, "datetime");
    exports.ZodISODate = core.$constructor("ZodISODate", (inst, def) => {
      core.$ZodISODate.init(inst, def);
      schemas.ZodStringFormat.init(inst, def);
    });
    function date(params) {
      return core._isoDate(exports.ZodISODate, params);
    }
    __name(date, "date");
    exports.ZodISOTime = core.$constructor("ZodISOTime", (inst, def) => {
      core.$ZodISOTime.init(inst, def);
      schemas.ZodStringFormat.init(inst, def);
    });
    function time(params) {
      return core._isoTime(exports.ZodISOTime, params);
    }
    __name(time, "time");
    exports.ZodISODuration = core.$constructor("ZodISODuration", (inst, def) => {
      core.$ZodISODuration.init(inst, def);
      schemas.ZodStringFormat.init(inst, def);
    });
    function duration(params) {
      return core._isoDuration(exports.ZodISODuration, params);
    }
    __name(duration, "duration");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/classic/errors.cjs
var require_errors3 = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/classic/errors.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZodRealError = exports.ZodError = void 0;
    var core = __importStar(require_core3());
    var index_js_1 = require_core3();
    var util = __importStar(require_util());
    var initializer = /* @__PURE__ */ __name((inst, issues) => {
      index_js_1.$ZodError.init(inst, issues);
      inst.name = "ZodError";
      Object.defineProperties(inst, {
        format: {
          value: /* @__PURE__ */ __name((mapper) => core.formatError(inst, mapper), "value")
          // enumerable: false,
        },
        flatten: {
          value: /* @__PURE__ */ __name((mapper) => core.flattenError(inst, mapper), "value")
          // enumerable: false,
        },
        addIssue: {
          value: /* @__PURE__ */ __name((issue) => {
            inst.issues.push(issue);
            inst.message = JSON.stringify(inst.issues, util.jsonStringifyReplacer, 2);
          }, "value")
          // enumerable: false,
        },
        addIssues: {
          value: /* @__PURE__ */ __name((issues2) => {
            inst.issues.push(...issues2);
            inst.message = JSON.stringify(inst.issues, util.jsonStringifyReplacer, 2);
          }, "value")
          // enumerable: false,
        },
        isEmpty: {
          get() {
            return inst.issues.length === 0;
          }
          // enumerable: false,
        }
      });
    }, "initializer");
    exports.ZodError = core.$constructor("ZodError", initializer);
    exports.ZodRealError = core.$constructor("ZodError", initializer, {
      Parent: Error
    });
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/classic/parse.cjs
var require_parse3 = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/classic/parse.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.safeDecodeAsync = exports.safeEncodeAsync = exports.safeDecode = exports.safeEncode = exports.decodeAsync = exports.encodeAsync = exports.decode = exports.encode = exports.safeParseAsync = exports.safeParse = exports.parseAsync = exports.parse = void 0;
    var core = __importStar(require_core3());
    var errors_js_1 = require_errors3();
    exports.parse = core._parse(errors_js_1.ZodRealError);
    exports.parseAsync = core._parseAsync(errors_js_1.ZodRealError);
    exports.safeParse = core._safeParse(errors_js_1.ZodRealError);
    exports.safeParseAsync = core._safeParseAsync(errors_js_1.ZodRealError);
    exports.encode = core._encode(errors_js_1.ZodRealError);
    exports.decode = core._decode(errors_js_1.ZodRealError);
    exports.encodeAsync = core._encodeAsync(errors_js_1.ZodRealError);
    exports.decodeAsync = core._decodeAsync(errors_js_1.ZodRealError);
    exports.safeEncode = core._safeEncode(errors_js_1.ZodRealError);
    exports.safeDecode = core._safeDecode(errors_js_1.ZodRealError);
    exports.safeEncodeAsync = core._safeEncodeAsync(errors_js_1.ZodRealError);
    exports.safeDecodeAsync = core._safeDecodeAsync(errors_js_1.ZodRealError);
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/classic/schemas.cjs
var require_schemas2 = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/classic/schemas.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZodTransform = exports.ZodFile = exports.ZodLiteral = exports.ZodEnum = exports.ZodSet = exports.ZodMap = exports.ZodRecord = exports.ZodTuple = exports.ZodIntersection = exports.ZodDiscriminatedUnion = exports.ZodUnion = exports.ZodObject = exports.ZodArray = exports.ZodDate = exports.ZodVoid = exports.ZodNever = exports.ZodUnknown = exports.ZodAny = exports.ZodNull = exports.ZodUndefined = exports.ZodSymbol = exports.ZodBigIntFormat = exports.ZodBigInt = exports.ZodBoolean = exports.ZodNumberFormat = exports.ZodNumber = exports.ZodCustomStringFormat = exports.ZodJWT = exports.ZodE164 = exports.ZodBase64URL = exports.ZodBase64 = exports.ZodCIDRv6 = exports.ZodCIDRv4 = exports.ZodIPv6 = exports.ZodIPv4 = exports.ZodKSUID = exports.ZodXID = exports.ZodULID = exports.ZodCUID2 = exports.ZodCUID = exports.ZodNanoID = exports.ZodEmoji = exports.ZodURL = exports.ZodUUID = exports.ZodGUID = exports.ZodEmail = exports.ZodStringFormat = exports.ZodString = exports._ZodString = exports.ZodType = void 0;
    exports.stringbool = exports.ZodCustom = exports.ZodFunction = exports.ZodPromise = exports.ZodLazy = exports.ZodTemplateLiteral = exports.ZodReadonly = exports.ZodCodec = exports.ZodPipe = exports.ZodNaN = exports.ZodCatch = exports.ZodSuccess = exports.ZodNonOptional = exports.ZodPrefault = exports.ZodDefault = exports.ZodNullable = exports.ZodOptional = void 0;
    exports.string = string;
    exports.email = email;
    exports.guid = guid;
    exports.uuid = uuid;
    exports.uuidv4 = uuidv4;
    exports.uuidv6 = uuidv6;
    exports.uuidv7 = uuidv7;
    exports.url = url;
    exports.httpUrl = httpUrl;
    exports.emoji = emoji;
    exports.nanoid = nanoid;
    exports.cuid = cuid;
    exports.cuid2 = cuid2;
    exports.ulid = ulid;
    exports.xid = xid;
    exports.ksuid = ksuid;
    exports.ipv4 = ipv4;
    exports.ipv6 = ipv6;
    exports.cidrv4 = cidrv4;
    exports.cidrv6 = cidrv6;
    exports.base64 = base64;
    exports.base64url = base64url;
    exports.e164 = e164;
    exports.jwt = jwt;
    exports.stringFormat = stringFormat;
    exports.hostname = hostname;
    exports.hex = hex;
    exports.hash = hash;
    exports.number = number;
    exports.int = int;
    exports.float32 = float32;
    exports.float64 = float64;
    exports.int32 = int32;
    exports.uint32 = uint32;
    exports.boolean = boolean;
    exports.bigint = bigint;
    exports.int64 = int64;
    exports.uint64 = uint64;
    exports.symbol = symbol;
    exports.undefined = _undefined;
    exports.null = _null;
    exports.any = any;
    exports.unknown = unknown;
    exports.never = never;
    exports.void = _void;
    exports.date = date;
    exports.array = array;
    exports.keyof = keyof;
    exports.object = object;
    exports.strictObject = strictObject;
    exports.looseObject = looseObject;
    exports.union = union;
    exports.discriminatedUnion = discriminatedUnion;
    exports.intersection = intersection;
    exports.tuple = tuple;
    exports.record = record;
    exports.partialRecord = partialRecord;
    exports.map = map;
    exports.set = set;
    exports.enum = _enum;
    exports.nativeEnum = nativeEnum;
    exports.literal = literal;
    exports.file = file;
    exports.transform = transform;
    exports.optional = optional;
    exports.nullable = nullable;
    exports.nullish = nullish;
    exports._default = _default;
    exports.prefault = prefault;
    exports.nonoptional = nonoptional;
    exports.success = success;
    exports.catch = _catch;
    exports.nan = nan;
    exports.pipe = pipe;
    exports.codec = codec;
    exports.readonly = readonly;
    exports.templateLiteral = templateLiteral;
    exports.lazy = lazy;
    exports.promise = promise;
    exports._function = _function;
    exports.function = _function;
    exports._function = _function;
    exports.function = _function;
    exports.check = check;
    exports.custom = custom;
    exports.refine = refine;
    exports.superRefine = superRefine;
    exports.instanceof = _instanceof;
    exports.json = json;
    exports.preprocess = preprocess;
    var core = __importStar(require_core3());
    var index_js_1 = require_core3();
    var checks = __importStar(require_checks2());
    var iso = __importStar(require_iso());
    var parse = __importStar(require_parse3());
    exports.ZodType = core.$constructor("ZodType", (inst, def) => {
      core.$ZodType.init(inst, def);
      inst.def = def;
      inst.type = def.type;
      Object.defineProperty(inst, "_def", { value: def });
      inst.check = (...checks2) => {
        return inst.clone(index_js_1.util.mergeDefs(def, {
          checks: [
            ...def.checks ?? [],
            ...checks2.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
          ]
        }));
      };
      inst.clone = (def2, params) => core.clone(inst, def2, params);
      inst.brand = () => inst;
      inst.register = (reg, meta) => {
        reg.add(inst, meta);
        return inst;
      };
      inst.parse = (data, params) => parse.parse(inst, data, params, { callee: inst.parse });
      inst.safeParse = (data, params) => parse.safeParse(inst, data, params);
      inst.parseAsync = async (data, params) => parse.parseAsync(inst, data, params, { callee: inst.parseAsync });
      inst.safeParseAsync = async (data, params) => parse.safeParseAsync(inst, data, params);
      inst.spa = inst.safeParseAsync;
      inst.encode = (data, params) => parse.encode(inst, data, params);
      inst.decode = (data, params) => parse.decode(inst, data, params);
      inst.encodeAsync = async (data, params) => parse.encodeAsync(inst, data, params);
      inst.decodeAsync = async (data, params) => parse.decodeAsync(inst, data, params);
      inst.safeEncode = (data, params) => parse.safeEncode(inst, data, params);
      inst.safeDecode = (data, params) => parse.safeDecode(inst, data, params);
      inst.safeEncodeAsync = async (data, params) => parse.safeEncodeAsync(inst, data, params);
      inst.safeDecodeAsync = async (data, params) => parse.safeDecodeAsync(inst, data, params);
      inst.refine = (check2, params) => inst.check(refine(check2, params));
      inst.superRefine = (refinement) => inst.check(superRefine(refinement));
      inst.overwrite = (fn) => inst.check(checks.overwrite(fn));
      inst.optional = () => optional(inst);
      inst.nullable = () => nullable(inst);
      inst.nullish = () => optional(nullable(inst));
      inst.nonoptional = (params) => nonoptional(inst, params);
      inst.array = () => array(inst);
      inst.or = (arg) => union([inst, arg]);
      inst.and = (arg) => intersection(inst, arg);
      inst.transform = (tx) => pipe(inst, transform(tx));
      inst.default = (def2) => _default(inst, def2);
      inst.prefault = (def2) => prefault(inst, def2);
      inst.catch = (params) => _catch(inst, params);
      inst.pipe = (target) => pipe(inst, target);
      inst.readonly = () => readonly(inst);
      inst.describe = (description) => {
        const cl = inst.clone();
        core.globalRegistry.add(cl, { description });
        return cl;
      };
      Object.defineProperty(inst, "description", {
        get() {
          return core.globalRegistry.get(inst)?.description;
        },
        configurable: true
      });
      inst.meta = (...args) => {
        if (args.length === 0) {
          return core.globalRegistry.get(inst);
        }
        const cl = inst.clone();
        core.globalRegistry.add(cl, args[0]);
        return cl;
      };
      inst.isOptional = () => inst.safeParse(void 0).success;
      inst.isNullable = () => inst.safeParse(null).success;
      return inst;
    });
    exports._ZodString = core.$constructor("_ZodString", (inst, def) => {
      core.$ZodString.init(inst, def);
      exports.ZodType.init(inst, def);
      const bag = inst._zod.bag;
      inst.format = bag.format ?? null;
      inst.minLength = bag.minimum ?? null;
      inst.maxLength = bag.maximum ?? null;
      inst.regex = (...args) => inst.check(checks.regex(...args));
      inst.includes = (...args) => inst.check(checks.includes(...args));
      inst.startsWith = (...args) => inst.check(checks.startsWith(...args));
      inst.endsWith = (...args) => inst.check(checks.endsWith(...args));
      inst.min = (...args) => inst.check(checks.minLength(...args));
      inst.max = (...args) => inst.check(checks.maxLength(...args));
      inst.length = (...args) => inst.check(checks.length(...args));
      inst.nonempty = (...args) => inst.check(checks.minLength(1, ...args));
      inst.lowercase = (params) => inst.check(checks.lowercase(params));
      inst.uppercase = (params) => inst.check(checks.uppercase(params));
      inst.trim = () => inst.check(checks.trim());
      inst.normalize = (...args) => inst.check(checks.normalize(...args));
      inst.toLowerCase = () => inst.check(checks.toLowerCase());
      inst.toUpperCase = () => inst.check(checks.toUpperCase());
    });
    exports.ZodString = core.$constructor("ZodString", (inst, def) => {
      core.$ZodString.init(inst, def);
      exports._ZodString.init(inst, def);
      inst.email = (params) => inst.check(core._email(exports.ZodEmail, params));
      inst.url = (params) => inst.check(core._url(exports.ZodURL, params));
      inst.jwt = (params) => inst.check(core._jwt(exports.ZodJWT, params));
      inst.emoji = (params) => inst.check(core._emoji(exports.ZodEmoji, params));
      inst.guid = (params) => inst.check(core._guid(exports.ZodGUID, params));
      inst.uuid = (params) => inst.check(core._uuid(exports.ZodUUID, params));
      inst.uuidv4 = (params) => inst.check(core._uuidv4(exports.ZodUUID, params));
      inst.uuidv6 = (params) => inst.check(core._uuidv6(exports.ZodUUID, params));
      inst.uuidv7 = (params) => inst.check(core._uuidv7(exports.ZodUUID, params));
      inst.nanoid = (params) => inst.check(core._nanoid(exports.ZodNanoID, params));
      inst.guid = (params) => inst.check(core._guid(exports.ZodGUID, params));
      inst.cuid = (params) => inst.check(core._cuid(exports.ZodCUID, params));
      inst.cuid2 = (params) => inst.check(core._cuid2(exports.ZodCUID2, params));
      inst.ulid = (params) => inst.check(core._ulid(exports.ZodULID, params));
      inst.base64 = (params) => inst.check(core._base64(exports.ZodBase64, params));
      inst.base64url = (params) => inst.check(core._base64url(exports.ZodBase64URL, params));
      inst.xid = (params) => inst.check(core._xid(exports.ZodXID, params));
      inst.ksuid = (params) => inst.check(core._ksuid(exports.ZodKSUID, params));
      inst.ipv4 = (params) => inst.check(core._ipv4(exports.ZodIPv4, params));
      inst.ipv6 = (params) => inst.check(core._ipv6(exports.ZodIPv6, params));
      inst.cidrv4 = (params) => inst.check(core._cidrv4(exports.ZodCIDRv4, params));
      inst.cidrv6 = (params) => inst.check(core._cidrv6(exports.ZodCIDRv6, params));
      inst.e164 = (params) => inst.check(core._e164(exports.ZodE164, params));
      inst.datetime = (params) => inst.check(iso.datetime(params));
      inst.date = (params) => inst.check(iso.date(params));
      inst.time = (params) => inst.check(iso.time(params));
      inst.duration = (params) => inst.check(iso.duration(params));
    });
    function string(params) {
      return core._string(exports.ZodString, params);
    }
    __name(string, "string");
    exports.ZodStringFormat = core.$constructor("ZodStringFormat", (inst, def) => {
      core.$ZodStringFormat.init(inst, def);
      exports._ZodString.init(inst, def);
    });
    exports.ZodEmail = core.$constructor("ZodEmail", (inst, def) => {
      core.$ZodEmail.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function email(params) {
      return core._email(exports.ZodEmail, params);
    }
    __name(email, "email");
    exports.ZodGUID = core.$constructor("ZodGUID", (inst, def) => {
      core.$ZodGUID.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function guid(params) {
      return core._guid(exports.ZodGUID, params);
    }
    __name(guid, "guid");
    exports.ZodUUID = core.$constructor("ZodUUID", (inst, def) => {
      core.$ZodUUID.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function uuid(params) {
      return core._uuid(exports.ZodUUID, params);
    }
    __name(uuid, "uuid");
    function uuidv4(params) {
      return core._uuidv4(exports.ZodUUID, params);
    }
    __name(uuidv4, "uuidv4");
    function uuidv6(params) {
      return core._uuidv6(exports.ZodUUID, params);
    }
    __name(uuidv6, "uuidv6");
    function uuidv7(params) {
      return core._uuidv7(exports.ZodUUID, params);
    }
    __name(uuidv7, "uuidv7");
    exports.ZodURL = core.$constructor("ZodURL", (inst, def) => {
      core.$ZodURL.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function url(params) {
      return core._url(exports.ZodURL, params);
    }
    __name(url, "url");
    function httpUrl(params) {
      return core._url(exports.ZodURL, {
        protocol: /^https?$/,
        hostname: core.regexes.domain,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(httpUrl, "httpUrl");
    exports.ZodEmoji = core.$constructor("ZodEmoji", (inst, def) => {
      core.$ZodEmoji.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function emoji(params) {
      return core._emoji(exports.ZodEmoji, params);
    }
    __name(emoji, "emoji");
    exports.ZodNanoID = core.$constructor("ZodNanoID", (inst, def) => {
      core.$ZodNanoID.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function nanoid(params) {
      return core._nanoid(exports.ZodNanoID, params);
    }
    __name(nanoid, "nanoid");
    exports.ZodCUID = core.$constructor("ZodCUID", (inst, def) => {
      core.$ZodCUID.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function cuid(params) {
      return core._cuid(exports.ZodCUID, params);
    }
    __name(cuid, "cuid");
    exports.ZodCUID2 = core.$constructor("ZodCUID2", (inst, def) => {
      core.$ZodCUID2.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function cuid2(params) {
      return core._cuid2(exports.ZodCUID2, params);
    }
    __name(cuid2, "cuid2");
    exports.ZodULID = core.$constructor("ZodULID", (inst, def) => {
      core.$ZodULID.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function ulid(params) {
      return core._ulid(exports.ZodULID, params);
    }
    __name(ulid, "ulid");
    exports.ZodXID = core.$constructor("ZodXID", (inst, def) => {
      core.$ZodXID.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function xid(params) {
      return core._xid(exports.ZodXID, params);
    }
    __name(xid, "xid");
    exports.ZodKSUID = core.$constructor("ZodKSUID", (inst, def) => {
      core.$ZodKSUID.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function ksuid(params) {
      return core._ksuid(exports.ZodKSUID, params);
    }
    __name(ksuid, "ksuid");
    exports.ZodIPv4 = core.$constructor("ZodIPv4", (inst, def) => {
      core.$ZodIPv4.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function ipv4(params) {
      return core._ipv4(exports.ZodIPv4, params);
    }
    __name(ipv4, "ipv4");
    exports.ZodIPv6 = core.$constructor("ZodIPv6", (inst, def) => {
      core.$ZodIPv6.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function ipv6(params) {
      return core._ipv6(exports.ZodIPv6, params);
    }
    __name(ipv6, "ipv6");
    exports.ZodCIDRv4 = core.$constructor("ZodCIDRv4", (inst, def) => {
      core.$ZodCIDRv4.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function cidrv4(params) {
      return core._cidrv4(exports.ZodCIDRv4, params);
    }
    __name(cidrv4, "cidrv4");
    exports.ZodCIDRv6 = core.$constructor("ZodCIDRv6", (inst, def) => {
      core.$ZodCIDRv6.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function cidrv6(params) {
      return core._cidrv6(exports.ZodCIDRv6, params);
    }
    __name(cidrv6, "cidrv6");
    exports.ZodBase64 = core.$constructor("ZodBase64", (inst, def) => {
      core.$ZodBase64.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function base64(params) {
      return core._base64(exports.ZodBase64, params);
    }
    __name(base64, "base64");
    exports.ZodBase64URL = core.$constructor("ZodBase64URL", (inst, def) => {
      core.$ZodBase64URL.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function base64url(params) {
      return core._base64url(exports.ZodBase64URL, params);
    }
    __name(base64url, "base64url");
    exports.ZodE164 = core.$constructor("ZodE164", (inst, def) => {
      core.$ZodE164.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function e164(params) {
      return core._e164(exports.ZodE164, params);
    }
    __name(e164, "e164");
    exports.ZodJWT = core.$constructor("ZodJWT", (inst, def) => {
      core.$ZodJWT.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function jwt(params) {
      return core._jwt(exports.ZodJWT, params);
    }
    __name(jwt, "jwt");
    exports.ZodCustomStringFormat = core.$constructor("ZodCustomStringFormat", (inst, def) => {
      core.$ZodCustomStringFormat.init(inst, def);
      exports.ZodStringFormat.init(inst, def);
    });
    function stringFormat(format, fnOrRegex, _params = {}) {
      return core._stringFormat(exports.ZodCustomStringFormat, format, fnOrRegex, _params);
    }
    __name(stringFormat, "stringFormat");
    function hostname(_params) {
      return core._stringFormat(exports.ZodCustomStringFormat, "hostname", core.regexes.hostname, _params);
    }
    __name(hostname, "hostname");
    function hex(_params) {
      return core._stringFormat(exports.ZodCustomStringFormat, "hex", core.regexes.hex, _params);
    }
    __name(hex, "hex");
    function hash(alg, params) {
      const enc = params?.enc ?? "hex";
      const format = `${alg}_${enc}`;
      const regex = core.regexes[format];
      if (!regex)
        throw new Error(`Unrecognized hash format: ${format}`);
      return core._stringFormat(exports.ZodCustomStringFormat, format, regex, params);
    }
    __name(hash, "hash");
    exports.ZodNumber = core.$constructor("ZodNumber", (inst, def) => {
      core.$ZodNumber.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.gt = (value, params) => inst.check(checks.gt(value, params));
      inst.gte = (value, params) => inst.check(checks.gte(value, params));
      inst.min = (value, params) => inst.check(checks.gte(value, params));
      inst.lt = (value, params) => inst.check(checks.lt(value, params));
      inst.lte = (value, params) => inst.check(checks.lte(value, params));
      inst.max = (value, params) => inst.check(checks.lte(value, params));
      inst.int = (params) => inst.check(int(params));
      inst.safe = (params) => inst.check(int(params));
      inst.positive = (params) => inst.check(checks.gt(0, params));
      inst.nonnegative = (params) => inst.check(checks.gte(0, params));
      inst.negative = (params) => inst.check(checks.lt(0, params));
      inst.nonpositive = (params) => inst.check(checks.lte(0, params));
      inst.multipleOf = (value, params) => inst.check(checks.multipleOf(value, params));
      inst.step = (value, params) => inst.check(checks.multipleOf(value, params));
      inst.finite = () => inst;
      const bag = inst._zod.bag;
      inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
      inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
      inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
      inst.isFinite = true;
      inst.format = bag.format ?? null;
    });
    function number(params) {
      return core._number(exports.ZodNumber, params);
    }
    __name(number, "number");
    exports.ZodNumberFormat = core.$constructor("ZodNumberFormat", (inst, def) => {
      core.$ZodNumberFormat.init(inst, def);
      exports.ZodNumber.init(inst, def);
    });
    function int(params) {
      return core._int(exports.ZodNumberFormat, params);
    }
    __name(int, "int");
    function float32(params) {
      return core._float32(exports.ZodNumberFormat, params);
    }
    __name(float32, "float32");
    function float64(params) {
      return core._float64(exports.ZodNumberFormat, params);
    }
    __name(float64, "float64");
    function int32(params) {
      return core._int32(exports.ZodNumberFormat, params);
    }
    __name(int32, "int32");
    function uint32(params) {
      return core._uint32(exports.ZodNumberFormat, params);
    }
    __name(uint32, "uint32");
    exports.ZodBoolean = core.$constructor("ZodBoolean", (inst, def) => {
      core.$ZodBoolean.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function boolean(params) {
      return core._boolean(exports.ZodBoolean, params);
    }
    __name(boolean, "boolean");
    exports.ZodBigInt = core.$constructor("ZodBigInt", (inst, def) => {
      core.$ZodBigInt.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.gte = (value, params) => inst.check(checks.gte(value, params));
      inst.min = (value, params) => inst.check(checks.gte(value, params));
      inst.gt = (value, params) => inst.check(checks.gt(value, params));
      inst.gte = (value, params) => inst.check(checks.gte(value, params));
      inst.min = (value, params) => inst.check(checks.gte(value, params));
      inst.lt = (value, params) => inst.check(checks.lt(value, params));
      inst.lte = (value, params) => inst.check(checks.lte(value, params));
      inst.max = (value, params) => inst.check(checks.lte(value, params));
      inst.positive = (params) => inst.check(checks.gt(BigInt(0), params));
      inst.negative = (params) => inst.check(checks.lt(BigInt(0), params));
      inst.nonpositive = (params) => inst.check(checks.lte(BigInt(0), params));
      inst.nonnegative = (params) => inst.check(checks.gte(BigInt(0), params));
      inst.multipleOf = (value, params) => inst.check(checks.multipleOf(value, params));
      const bag = inst._zod.bag;
      inst.minValue = bag.minimum ?? null;
      inst.maxValue = bag.maximum ?? null;
      inst.format = bag.format ?? null;
    });
    function bigint(params) {
      return core._bigint(exports.ZodBigInt, params);
    }
    __name(bigint, "bigint");
    exports.ZodBigIntFormat = core.$constructor("ZodBigIntFormat", (inst, def) => {
      core.$ZodBigIntFormat.init(inst, def);
      exports.ZodBigInt.init(inst, def);
    });
    function int64(params) {
      return core._int64(exports.ZodBigIntFormat, params);
    }
    __name(int64, "int64");
    function uint64(params) {
      return core._uint64(exports.ZodBigIntFormat, params);
    }
    __name(uint64, "uint64");
    exports.ZodSymbol = core.$constructor("ZodSymbol", (inst, def) => {
      core.$ZodSymbol.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function symbol(params) {
      return core._symbol(exports.ZodSymbol, params);
    }
    __name(symbol, "symbol");
    exports.ZodUndefined = core.$constructor("ZodUndefined", (inst, def) => {
      core.$ZodUndefined.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function _undefined(params) {
      return core._undefined(exports.ZodUndefined, params);
    }
    __name(_undefined, "_undefined");
    exports.ZodNull = core.$constructor("ZodNull", (inst, def) => {
      core.$ZodNull.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function _null(params) {
      return core._null(exports.ZodNull, params);
    }
    __name(_null, "_null");
    exports.ZodAny = core.$constructor("ZodAny", (inst, def) => {
      core.$ZodAny.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function any() {
      return core._any(exports.ZodAny);
    }
    __name(any, "any");
    exports.ZodUnknown = core.$constructor("ZodUnknown", (inst, def) => {
      core.$ZodUnknown.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function unknown() {
      return core._unknown(exports.ZodUnknown);
    }
    __name(unknown, "unknown");
    exports.ZodNever = core.$constructor("ZodNever", (inst, def) => {
      core.$ZodNever.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function never(params) {
      return core._never(exports.ZodNever, params);
    }
    __name(never, "never");
    exports.ZodVoid = core.$constructor("ZodVoid", (inst, def) => {
      core.$ZodVoid.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function _void(params) {
      return core._void(exports.ZodVoid, params);
    }
    __name(_void, "_void");
    exports.ZodDate = core.$constructor("ZodDate", (inst, def) => {
      core.$ZodDate.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.min = (value, params) => inst.check(checks.gte(value, params));
      inst.max = (value, params) => inst.check(checks.lte(value, params));
      const c = inst._zod.bag;
      inst.minDate = c.minimum ? new Date(c.minimum) : null;
      inst.maxDate = c.maximum ? new Date(c.maximum) : null;
    });
    function date(params) {
      return core._date(exports.ZodDate, params);
    }
    __name(date, "date");
    exports.ZodArray = core.$constructor("ZodArray", (inst, def) => {
      core.$ZodArray.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.element = def.element;
      inst.min = (minLength, params) => inst.check(checks.minLength(minLength, params));
      inst.nonempty = (params) => inst.check(checks.minLength(1, params));
      inst.max = (maxLength, params) => inst.check(checks.maxLength(maxLength, params));
      inst.length = (len, params) => inst.check(checks.length(len, params));
      inst.unwrap = () => inst.element;
    });
    function array(element, params) {
      return core._array(exports.ZodArray, element, params);
    }
    __name(array, "array");
    function keyof(schema) {
      const shape = schema._zod.def.shape;
      return _enum(Object.keys(shape));
    }
    __name(keyof, "keyof");
    exports.ZodObject = core.$constructor("ZodObject", (inst, def) => {
      core.$ZodObjectJIT.init(inst, def);
      exports.ZodType.init(inst, def);
      index_js_1.util.defineLazy(inst, "shape", () => {
        return def.shape;
      });
      inst.keyof = () => _enum(Object.keys(inst._zod.def.shape));
      inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall });
      inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
      inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
      inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
      inst.strip = () => inst.clone({ ...inst._zod.def, catchall: void 0 });
      inst.extend = (incoming) => {
        return index_js_1.util.extend(inst, incoming);
      };
      inst.safeExtend = (incoming) => {
        return index_js_1.util.safeExtend(inst, incoming);
      };
      inst.merge = (other) => index_js_1.util.merge(inst, other);
      inst.pick = (mask) => index_js_1.util.pick(inst, mask);
      inst.omit = (mask) => index_js_1.util.omit(inst, mask);
      inst.partial = (...args) => index_js_1.util.partial(exports.ZodOptional, inst, args[0]);
      inst.required = (...args) => index_js_1.util.required(exports.ZodNonOptional, inst, args[0]);
    });
    function object(shape, params) {
      const def = {
        type: "object",
        shape: shape ?? {},
        ...index_js_1.util.normalizeParams(params)
      };
      return new exports.ZodObject(def);
    }
    __name(object, "object");
    function strictObject(shape, params) {
      return new exports.ZodObject({
        type: "object",
        shape,
        catchall: never(),
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(strictObject, "strictObject");
    function looseObject(shape, params) {
      return new exports.ZodObject({
        type: "object",
        shape,
        catchall: unknown(),
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(looseObject, "looseObject");
    exports.ZodUnion = core.$constructor("ZodUnion", (inst, def) => {
      core.$ZodUnion.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.options = def.options;
    });
    function union(options, params) {
      return new exports.ZodUnion({
        type: "union",
        options,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(union, "union");
    exports.ZodDiscriminatedUnion = core.$constructor("ZodDiscriminatedUnion", (inst, def) => {
      exports.ZodUnion.init(inst, def);
      core.$ZodDiscriminatedUnion.init(inst, def);
    });
    function discriminatedUnion(discriminator, options, params) {
      return new exports.ZodDiscriminatedUnion({
        type: "union",
        options,
        discriminator,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(discriminatedUnion, "discriminatedUnion");
    exports.ZodIntersection = core.$constructor("ZodIntersection", (inst, def) => {
      core.$ZodIntersection.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function intersection(left, right) {
      return new exports.ZodIntersection({
        type: "intersection",
        left,
        right
      });
    }
    __name(intersection, "intersection");
    exports.ZodTuple = core.$constructor("ZodTuple", (inst, def) => {
      core.$ZodTuple.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.rest = (rest) => inst.clone({
        ...inst._zod.def,
        rest
      });
    });
    function tuple(items, _paramsOrRest, _params) {
      const hasRest = _paramsOrRest instanceof core.$ZodType;
      const params = hasRest ? _params : _paramsOrRest;
      const rest = hasRest ? _paramsOrRest : null;
      return new exports.ZodTuple({
        type: "tuple",
        items,
        rest,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(tuple, "tuple");
    exports.ZodRecord = core.$constructor("ZodRecord", (inst, def) => {
      core.$ZodRecord.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.keyType = def.keyType;
      inst.valueType = def.valueType;
    });
    function record(keyType, valueType, params) {
      return new exports.ZodRecord({
        type: "record",
        keyType,
        valueType,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(record, "record");
    function partialRecord(keyType, valueType, params) {
      const k = core.clone(keyType);
      k._zod.values = void 0;
      return new exports.ZodRecord({
        type: "record",
        keyType: k,
        valueType,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(partialRecord, "partialRecord");
    exports.ZodMap = core.$constructor("ZodMap", (inst, def) => {
      core.$ZodMap.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.keyType = def.keyType;
      inst.valueType = def.valueType;
    });
    function map(keyType, valueType, params) {
      return new exports.ZodMap({
        type: "map",
        keyType,
        valueType,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(map, "map");
    exports.ZodSet = core.$constructor("ZodSet", (inst, def) => {
      core.$ZodSet.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.min = (...args) => inst.check(core._minSize(...args));
      inst.nonempty = (params) => inst.check(core._minSize(1, params));
      inst.max = (...args) => inst.check(core._maxSize(...args));
      inst.size = (...args) => inst.check(core._size(...args));
    });
    function set(valueType, params) {
      return new exports.ZodSet({
        type: "set",
        valueType,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(set, "set");
    exports.ZodEnum = core.$constructor("ZodEnum", (inst, def) => {
      core.$ZodEnum.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.enum = def.entries;
      inst.options = Object.values(def.entries);
      const keys = new Set(Object.keys(def.entries));
      inst.extract = (values, params) => {
        const newEntries = {};
        for (const value of values) {
          if (keys.has(value)) {
            newEntries[value] = def.entries[value];
          } else
            throw new Error(`Key ${value} not found in enum`);
        }
        return new exports.ZodEnum({
          ...def,
          checks: [],
          ...index_js_1.util.normalizeParams(params),
          entries: newEntries
        });
      };
      inst.exclude = (values, params) => {
        const newEntries = { ...def.entries };
        for (const value of values) {
          if (keys.has(value)) {
            delete newEntries[value];
          } else
            throw new Error(`Key ${value} not found in enum`);
        }
        return new exports.ZodEnum({
          ...def,
          checks: [],
          ...index_js_1.util.normalizeParams(params),
          entries: newEntries
        });
      };
    });
    function _enum(values, params) {
      const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
      return new exports.ZodEnum({
        type: "enum",
        entries,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(_enum, "_enum");
    function nativeEnum(entries, params) {
      return new exports.ZodEnum({
        type: "enum",
        entries,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(nativeEnum, "nativeEnum");
    exports.ZodLiteral = core.$constructor("ZodLiteral", (inst, def) => {
      core.$ZodLiteral.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.values = new Set(def.values);
      Object.defineProperty(inst, "value", {
        get() {
          if (def.values.length > 1) {
            throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
          }
          return def.values[0];
        }
      });
    });
    function literal(value, params) {
      return new exports.ZodLiteral({
        type: "literal",
        values: Array.isArray(value) ? value : [value],
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(literal, "literal");
    exports.ZodFile = core.$constructor("ZodFile", (inst, def) => {
      core.$ZodFile.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.min = (size, params) => inst.check(core._minSize(size, params));
      inst.max = (size, params) => inst.check(core._maxSize(size, params));
      inst.mime = (types, params) => inst.check(core._mime(Array.isArray(types) ? types : [types], params));
    });
    function file(params) {
      return core._file(exports.ZodFile, params);
    }
    __name(file, "file");
    exports.ZodTransform = core.$constructor("ZodTransform", (inst, def) => {
      core.$ZodTransform.init(inst, def);
      exports.ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        if (_ctx.direction === "backward") {
          throw new core.$ZodEncodeError(inst.constructor.name);
        }
        payload.addIssue = (issue) => {
          if (typeof issue === "string") {
            payload.issues.push(index_js_1.util.issue(issue, payload.value, def));
          } else {
            const _issue = issue;
            if (_issue.fatal)
              _issue.continue = false;
            _issue.code ?? (_issue.code = "custom");
            _issue.input ?? (_issue.input = payload.value);
            _issue.inst ?? (_issue.inst = inst);
            payload.issues.push(index_js_1.util.issue(_issue));
          }
        };
        const output = def.transform(payload.value, payload);
        if (output instanceof Promise) {
          return output.then((output2) => {
            payload.value = output2;
            return payload;
          });
        }
        payload.value = output;
        return payload;
      };
    });
    function transform(fn) {
      return new exports.ZodTransform({
        type: "transform",
        transform: fn
      });
    }
    __name(transform, "transform");
    exports.ZodOptional = core.$constructor("ZodOptional", (inst, def) => {
      core.$ZodOptional.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.unwrap = () => inst._zod.def.innerType;
    });
    function optional(innerType) {
      return new exports.ZodOptional({
        type: "optional",
        innerType
      });
    }
    __name(optional, "optional");
    exports.ZodNullable = core.$constructor("ZodNullable", (inst, def) => {
      core.$ZodNullable.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.unwrap = () => inst._zod.def.innerType;
    });
    function nullable(innerType) {
      return new exports.ZodNullable({
        type: "nullable",
        innerType
      });
    }
    __name(nullable, "nullable");
    function nullish(innerType) {
      return optional(nullable(innerType));
    }
    __name(nullish, "nullish");
    exports.ZodDefault = core.$constructor("ZodDefault", (inst, def) => {
      core.$ZodDefault.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.unwrap = () => inst._zod.def.innerType;
      inst.removeDefault = inst.unwrap;
    });
    function _default(innerType, defaultValue) {
      return new exports.ZodDefault({
        type: "default",
        innerType,
        get defaultValue() {
          return typeof defaultValue === "function" ? defaultValue() : index_js_1.util.shallowClone(defaultValue);
        }
      });
    }
    __name(_default, "_default");
    exports.ZodPrefault = core.$constructor("ZodPrefault", (inst, def) => {
      core.$ZodPrefault.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.unwrap = () => inst._zod.def.innerType;
    });
    function prefault(innerType, defaultValue) {
      return new exports.ZodPrefault({
        type: "prefault",
        innerType,
        get defaultValue() {
          return typeof defaultValue === "function" ? defaultValue() : index_js_1.util.shallowClone(defaultValue);
        }
      });
    }
    __name(prefault, "prefault");
    exports.ZodNonOptional = core.$constructor("ZodNonOptional", (inst, def) => {
      core.$ZodNonOptional.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.unwrap = () => inst._zod.def.innerType;
    });
    function nonoptional(innerType, params) {
      return new exports.ZodNonOptional({
        type: "nonoptional",
        innerType,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(nonoptional, "nonoptional");
    exports.ZodSuccess = core.$constructor("ZodSuccess", (inst, def) => {
      core.$ZodSuccess.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.unwrap = () => inst._zod.def.innerType;
    });
    function success(innerType) {
      return new exports.ZodSuccess({
        type: "success",
        innerType
      });
    }
    __name(success, "success");
    exports.ZodCatch = core.$constructor("ZodCatch", (inst, def) => {
      core.$ZodCatch.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.unwrap = () => inst._zod.def.innerType;
      inst.removeCatch = inst.unwrap;
    });
    function _catch(innerType, catchValue) {
      return new exports.ZodCatch({
        type: "catch",
        innerType,
        catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
      });
    }
    __name(_catch, "_catch");
    exports.ZodNaN = core.$constructor("ZodNaN", (inst, def) => {
      core.$ZodNaN.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function nan(params) {
      return core._nan(exports.ZodNaN, params);
    }
    __name(nan, "nan");
    exports.ZodPipe = core.$constructor("ZodPipe", (inst, def) => {
      core.$ZodPipe.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.in = def.in;
      inst.out = def.out;
    });
    function pipe(in_, out) {
      return new exports.ZodPipe({
        type: "pipe",
        in: in_,
        out
        // ...util.normalizeParams(params),
      });
    }
    __name(pipe, "pipe");
    exports.ZodCodec = core.$constructor("ZodCodec", (inst, def) => {
      exports.ZodPipe.init(inst, def);
      core.$ZodCodec.init(inst, def);
    });
    function codec(in_, out, params) {
      return new exports.ZodCodec({
        type: "pipe",
        in: in_,
        out,
        transform: params.decode,
        reverseTransform: params.encode
      });
    }
    __name(codec, "codec");
    exports.ZodReadonly = core.$constructor("ZodReadonly", (inst, def) => {
      core.$ZodReadonly.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.unwrap = () => inst._zod.def.innerType;
    });
    function readonly(innerType) {
      return new exports.ZodReadonly({
        type: "readonly",
        innerType
      });
    }
    __name(readonly, "readonly");
    exports.ZodTemplateLiteral = core.$constructor("ZodTemplateLiteral", (inst, def) => {
      core.$ZodTemplateLiteral.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function templateLiteral(parts, params) {
      return new exports.ZodTemplateLiteral({
        type: "template_literal",
        parts,
        ...index_js_1.util.normalizeParams(params)
      });
    }
    __name(templateLiteral, "templateLiteral");
    exports.ZodLazy = core.$constructor("ZodLazy", (inst, def) => {
      core.$ZodLazy.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.unwrap = () => inst._zod.def.getter();
    });
    function lazy(getter) {
      return new exports.ZodLazy({
        type: "lazy",
        getter
      });
    }
    __name(lazy, "lazy");
    exports.ZodPromise = core.$constructor("ZodPromise", (inst, def) => {
      core.$ZodPromise.init(inst, def);
      exports.ZodType.init(inst, def);
      inst.unwrap = () => inst._zod.def.innerType;
    });
    function promise(innerType) {
      return new exports.ZodPromise({
        type: "promise",
        innerType
      });
    }
    __name(promise, "promise");
    exports.ZodFunction = core.$constructor("ZodFunction", (inst, def) => {
      core.$ZodFunction.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function _function(params) {
      return new exports.ZodFunction({
        type: "function",
        input: Array.isArray(params?.input) ? tuple(params?.input) : params?.input ?? array(unknown()),
        output: params?.output ?? unknown()
      });
    }
    __name(_function, "_function");
    exports.ZodCustom = core.$constructor("ZodCustom", (inst, def) => {
      core.$ZodCustom.init(inst, def);
      exports.ZodType.init(inst, def);
    });
    function check(fn) {
      const ch = new core.$ZodCheck({
        check: "custom"
        // ...util.normalizeParams(params),
      });
      ch._zod.check = fn;
      return ch;
    }
    __name(check, "check");
    function custom(fn, _params) {
      return core._custom(exports.ZodCustom, fn ?? (() => true), _params);
    }
    __name(custom, "custom");
    function refine(fn, _params = {}) {
      return core._refine(exports.ZodCustom, fn, _params);
    }
    __name(refine, "refine");
    function superRefine(fn) {
      return core._superRefine(fn);
    }
    __name(superRefine, "superRefine");
    function _instanceof(cls, params = {
      error: `Input not instance of ${cls.name}`
    }) {
      const inst = new exports.ZodCustom({
        type: "custom",
        check: "custom",
        fn: /* @__PURE__ */ __name((data) => data instanceof cls, "fn"),
        abort: true,
        ...index_js_1.util.normalizeParams(params)
      });
      inst._zod.bag.Class = cls;
      return inst;
    }
    __name(_instanceof, "_instanceof");
    var stringbool = /* @__PURE__ */ __name((...args) => core._stringbool({
      Codec: exports.ZodCodec,
      Boolean: exports.ZodBoolean,
      String: exports.ZodString
    }, ...args), "stringbool");
    exports.stringbool = stringbool;
    function json(params) {
      const jsonSchema = lazy(() => {
        return union([string(params), number(), boolean(), _null(), array(jsonSchema), record(string(), jsonSchema)]);
      });
      return jsonSchema;
    }
    __name(json, "json");
    function preprocess(fn, schema) {
      return pipe(transform(fn), schema);
    }
    __name(preprocess, "preprocess");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/classic/compat.cjs
var require_compat = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/classic/compat.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZodFirstPartyTypeKind = exports.config = exports.$brand = exports.ZodIssueCode = void 0;
    exports.setErrorMap = setErrorMap;
    exports.getErrorMap = getErrorMap;
    var core = __importStar(require_core3());
    exports.ZodIssueCode = {
      invalid_type: "invalid_type",
      too_big: "too_big",
      too_small: "too_small",
      invalid_format: "invalid_format",
      not_multiple_of: "not_multiple_of",
      unrecognized_keys: "unrecognized_keys",
      invalid_union: "invalid_union",
      invalid_key: "invalid_key",
      invalid_element: "invalid_element",
      invalid_value: "invalid_value",
      custom: "custom"
    };
    var index_js_1 = require_core3();
    Object.defineProperty(exports, "$brand", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1.$brand;
    }, "get") });
    Object.defineProperty(exports, "config", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_1.config;
    }, "get") });
    function setErrorMap(map) {
      core.config({
        customError: map
      });
    }
    __name(setErrorMap, "setErrorMap");
    function getErrorMap() {
      return core.config().customError;
    }
    __name(getErrorMap, "getErrorMap");
    var ZodFirstPartyTypeKind;
    /* @__PURE__ */ (function(ZodFirstPartyTypeKind2) {
    })(ZodFirstPartyTypeKind || (exports.ZodFirstPartyTypeKind = ZodFirstPartyTypeKind = {}));
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/classic/coerce.cjs
var require_coerce = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/classic/coerce.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.string = string;
    exports.number = number;
    exports.boolean = boolean;
    exports.bigint = bigint;
    exports.date = date;
    var core = __importStar(require_core3());
    var schemas = __importStar(require_schemas2());
    function string(params) {
      return core._coercedString(schemas.ZodString, params);
    }
    __name(string, "string");
    function number(params) {
      return core._coercedNumber(schemas.ZodNumber, params);
    }
    __name(number, "number");
    function boolean(params) {
      return core._coercedBoolean(schemas.ZodBoolean, params);
    }
    __name(boolean, "boolean");
    function bigint(params) {
      return core._coercedBigint(schemas.ZodBigInt, params);
    }
    __name(bigint, "bigint");
    function date(params) {
      return core._coercedDate(schemas.ZodDate, params);
    }
    __name(date, "date");
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/v4/classic/external.cjs
var require_external = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/v4/classic/external.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.coerce = exports.iso = exports.ZodISODuration = exports.ZodISOTime = exports.ZodISODate = exports.ZodISODateTime = exports.locales = exports.NEVER = exports.util = exports.TimePrecision = exports.toJSONSchema = exports.flattenError = exports.formatError = exports.prettifyError = exports.treeifyError = exports.regexes = exports.clone = exports.$brand = exports.$input = exports.$output = exports.config = exports.registry = exports.globalRegistry = exports.core = void 0;
    exports.core = __importStar(require_core3());
    __exportStar(require_schemas2(), exports);
    __exportStar(require_checks2(), exports);
    __exportStar(require_errors3(), exports);
    __exportStar(require_parse3(), exports);
    __exportStar(require_compat(), exports);
    var index_js_1 = require_core3();
    var en_js_1 = __importDefault(require_en());
    (0, index_js_1.config)((0, en_js_1.default)());
    var index_js_2 = require_core3();
    Object.defineProperty(exports, "globalRegistry", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.globalRegistry;
    }, "get") });
    Object.defineProperty(exports, "registry", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.registry;
    }, "get") });
    Object.defineProperty(exports, "config", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.config;
    }, "get") });
    Object.defineProperty(exports, "$output", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.$output;
    }, "get") });
    Object.defineProperty(exports, "$input", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.$input;
    }, "get") });
    Object.defineProperty(exports, "$brand", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.$brand;
    }, "get") });
    Object.defineProperty(exports, "clone", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.clone;
    }, "get") });
    Object.defineProperty(exports, "regexes", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.regexes;
    }, "get") });
    Object.defineProperty(exports, "treeifyError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.treeifyError;
    }, "get") });
    Object.defineProperty(exports, "prettifyError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.prettifyError;
    }, "get") });
    Object.defineProperty(exports, "formatError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.formatError;
    }, "get") });
    Object.defineProperty(exports, "flattenError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.flattenError;
    }, "get") });
    Object.defineProperty(exports, "toJSONSchema", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.toJSONSchema;
    }, "get") });
    Object.defineProperty(exports, "TimePrecision", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.TimePrecision;
    }, "get") });
    Object.defineProperty(exports, "util", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.util;
    }, "get") });
    Object.defineProperty(exports, "NEVER", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return index_js_2.NEVER;
    }, "get") });
    exports.locales = __importStar(require_locales());
    var iso_js_1 = require_iso();
    Object.defineProperty(exports, "ZodISODateTime", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return iso_js_1.ZodISODateTime;
    }, "get") });
    Object.defineProperty(exports, "ZodISODate", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return iso_js_1.ZodISODate;
    }, "get") });
    Object.defineProperty(exports, "ZodISOTime", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return iso_js_1.ZodISOTime;
    }, "get") });
    Object.defineProperty(exports, "ZodISODuration", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return iso_js_1.ZodISODuration;
    }, "get") });
    exports.iso = __importStar(require_iso());
    exports.coerce = __importStar(require_coerce());
  }
});

// node_modules/@vercel/cli-config/node_modules/zod/index.cjs
var require_zod = __commonJS({
  "node_modules/@vercel/cli-config/node_modules/zod/index.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    var z = __importStar(require_external());
    exports.z = z;
    __exportStar(require_external(), exports);
    exports.default = z;
  }
});

// node_modules/@vercel/cli-config/dist/schema.zod.js
var require_schema_zod = __commonJS({
  "node_modules/@vercel/cli-config/dist/schema.zod.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.globalConfigSchema = exports.authFileConfigSchema = exports.authConfigSchema = exports.credStorageSchema = exports.updatesConfigSchema = exports.guidanceConfigSchema = exports.telemetryConfigSchema = void 0;
    var zod_1 = require_zod();
    exports.telemetryConfigSchema = zod_1.z.object({
      enabled: zod_1.z.boolean().optional()
    });
    exports.guidanceConfigSchema = zod_1.z.object({
      enabled: zod_1.z.boolean().optional()
    });
    exports.updatesConfigSchema = zod_1.z.object({
      auto: zod_1.z.boolean().optional()
    });
    exports.credStorageSchema = zod_1.z.union([
      zod_1.z.literal("auto"),
      zod_1.z.literal("file"),
      zod_1.z.literal("keyring")
    ]);
    exports.authConfigSchema = zod_1.z.object({
      "// Note": zod_1.z.string().optional(),
      "// Docs": zod_1.z.string().optional(),
      skipWrite: zod_1.z.boolean().optional(),
      token: zod_1.z.string().optional(),
      userId: zod_1.z.string().optional(),
      refreshToken: zod_1.z.string().optional(),
      expiresAt: zod_1.z.number().optional(),
      tokenSource: zod_1.z.union([zod_1.z.literal("flag"), zod_1.z.literal("env")]).optional()
    });
    exports.authFileConfigSchema = exports.authConfigSchema.omit({
      tokenSource: true
    });
    exports.globalConfigSchema = zod_1.z.object({
      "// Note": zod_1.z.string().optional(),
      "// Docs": zod_1.z.string().optional(),
      credStorage: exports.credStorageSchema.optional(),
      currentTeam: zod_1.z.string().optional(),
      api: zod_1.z.string().optional(),
      telemetry: exports.telemetryConfigSchema.optional(),
      guidance: exports.guidanceConfigSchema.optional(),
      updates: exports.updatesConfigSchema.optional(),
      useNativeBinary: zod_1.z.boolean().optional()
    });
  }
});

// node_modules/@vercel/cli-config/dist/schema.js
var require_schema = __commonJS({
  "node_modules/@vercel/cli-config/dist/schema.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.authConfigSchema = exports.globalConfigSchema = exports.credStorageSchema = exports.updatesConfigSchema = exports.guidanceConfigSchema = exports.telemetryConfigSchema = void 0;
    var zod_1 = require_zod();
    var schema_zod_1 = require_schema_zod();
    var types_1 = require_types();
    function formatCredStorageError(value) {
      return `Invalid value for \`credStorage\`: ${JSON.stringify(value)}. Expected one of: ${types_1.CRED_STORAGE_CONFIG_VALUES.map((storage) => JSON.stringify(storage)).join(", ")}.`;
    }
    __name(formatCredStorageError, "formatCredStorageError");
    exports.telemetryConfigSchema = schema_zod_1.telemetryConfigSchema.passthrough();
    exports.guidanceConfigSchema = schema_zod_1.guidanceConfigSchema.passthrough();
    exports.updatesConfigSchema = schema_zod_1.updatesConfigSchema.passthrough();
    exports.credStorageSchema = zod_1.z.enum(types_1.CRED_STORAGE_CONFIG_VALUES, {
      error: /* @__PURE__ */ __name((issue) => {
        return formatCredStorageError(issue.input);
      }, "error")
    }).optional();
    exports.globalConfigSchema = schema_zod_1.globalConfigSchema.extend({
      credStorage: exports.credStorageSchema,
      telemetry: exports.telemetryConfigSchema.optional(),
      guidance: exports.guidanceConfigSchema.optional(),
      updates: exports.updatesConfigSchema.optional()
    }).passthrough();
    exports.authConfigSchema = schema_zod_1.authConfigSchema.passthrough();
  }
});

// node_modules/os-paths/src/lib/index.js
var require_lib = __commonJS({
  "node_modules/os-paths/src/lib/index.js"(exports, module) {
    "use strict";
    init_esm();
    var os = __require("os");
    var paths = __require("path");
    var isWinOS = /^win/i.test(process.platform);
    function normalize_path(path) {
      return paths.normalize(paths.join(path, "."));
    }
    __name(normalize_path, "normalize_path");
    var base = /* @__PURE__ */ __name(() => {
      const { env } = process;
      const object = {};
      object.home = () => normalize_path(os.homedir ? os.homedir() : env.HOME);
      object.temp = () => normalize_path(os.tmpdir ? os.tmpdir() : env.TMPDIR || env.TEMP || env.TMP);
      return object;
    }, "base");
    var windows = /* @__PURE__ */ __name(() => {
      const { env } = process;
      const object = {};
      object.home = () => normalize_path(
        os.homedir ? os.homedir() : env.USERPROFILE || paths.join(env.HOMEDRIVE, env.HOMEPATH) || env.HOME
      );
      object.temp = () => normalize_path(
        os.tmpdir ? os.tmpdir() : env.TEMP || env.TMP || paths.join(env.LOCALAPPDATA || env.SystemRoot || env.windir, "Temp")
      );
      return object;
    }, "windows");
    var _OSPaths = class __OSPaths {
      static {
        __name(this, "_OSPaths");
      }
      constructor() {
        const OSPaths = /* @__PURE__ */ __name(function() {
          return new __OSPaths();
        }, "OSPaths");
        this._fn = OSPaths;
        const extension = isWinOS ? windows() : base();
        Object.keys(extension).forEach((key) => {
          this._fn[key] = extension[key];
        });
        return this._fn;
      }
    };
    module.exports = new _OSPaths();
  }
});

// node_modules/xdg-portable/src/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/xdg-portable/src/lib/index.js"(exports, module) {
    "use strict";
    init_esm();
    var path = __require("path");
    var osPaths = require_lib();
    var linux = /* @__PURE__ */ __name(() => {
      const object = {};
      object.cache = () => process.env.XDG_CACHE_HOME || path.join(osPaths.home() || osPaths.temp(), ".cache");
      object.config = () => process.env.XDG_CONFIG_HOME || path.join(osPaths.home() || osPaths.temp(), ".config");
      object.data = () => process.env.XDG_DATA_HOME || path.join(osPaths.home() || osPaths.temp(), ".local", "share");
      object.runtime = () => process.env.XDG_RUNTIME_DIR || void 0;
      object.state = () => process.env.XDG_STATE_HOME || path.join(osPaths.home() || osPaths.temp(), ".local", "state");
      return object;
    }, "linux");
    var macos = /* @__PURE__ */ __name(() => {
      const object = {};
      object.cache = () => process.env.XDG_CACHE_HOME || path.join(path.join(osPaths.home() || osPaths.temp(), "Library"), "Caches");
      object.config = () => process.env.XDG_CONFIG_HOME || path.join(path.join(osPaths.home() || osPaths.temp(), "Library"), "Preferences");
      object.data = () => process.env.XDG_DATA_HOME || path.join(path.join(osPaths.home() || osPaths.temp(), "Library"), "Application Support");
      object.runtime = () => process.env.XDG_RUNTIME_DIR || void 0;
      object.state = () => process.env.XDG_STATE_HOME || path.join(path.join(osPaths.home() || osPaths.temp(), "Library"), "State");
      return object;
    }, "macos");
    var windows = /* @__PURE__ */ __name(() => {
      const object = {};
      object.cache = () => {
        const localAppData = process.env.LOCALAPPDATA || path.join(osPaths.home() || osPaths.temp(), "AppData", "Local");
        return process.env.XDG_CACHE_HOME || path.join(localAppData, "xdg.cache");
      };
      object.config = () => {
        const appData = process.env.APPDATA || path.join(osPaths.home() || osPaths.temp(), "AppData", "Roaming");
        return process.env.XDG_CONFIG_HOME || path.join(appData, "xdg.config");
      };
      object.data = () => {
        const appData = process.env.APPDATA || path.join(osPaths.home() || osPaths.temp(), "AppData", "Roaming");
        return process.env.XDG_DATA_HOME || path.join(appData, "xdg.data");
      };
      object.runtime = () => process.env.XDG_RUNTIME_DIR || void 0;
      object.state = () => {
        const localAppData = process.env.LOCALAPPDATA || path.join(osPaths.home() || osPaths.temp(), "AppData", "Local");
        return process.env.XDG_STATE_HOME || path.join(localAppData, "xdg.state");
      };
      return object;
    }, "windows");
    var _XDGPortable = /* @__PURE__ */ __name(() => {
      const XDGPortable = /* @__PURE__ */ __name(function() {
        return _XDGPortable();
      }, "XDGPortable");
      let extension = {};
      if (/^darwin$/i.test(process.platform)) {
        extension = macos();
      } else if (/^win/i.test(process.platform)) {
        extension = windows();
      } else {
        extension = linux();
      }
      extension.configDirs = () => {
        const dirs = [];
        dirs.push(extension.config());
        if (process.env.XDG_CONFIG_DIRS) {
          dirs.push(...process.env.XDG_CONFIG_DIRS.split(path.delimiter));
        }
        return dirs;
      };
      extension.dataDirs = () => {
        const dirs = [];
        dirs.push(extension.data());
        if (process.env.XDG_DATA_DIRS) {
          dirs.push(...process.env.XDG_DATA_DIRS.split(path.delimiter));
        }
        return dirs;
      };
      Object.keys(extension).forEach((key) => {
        XDGPortable[key] = extension[key];
      });
      return XDGPortable;
    }, "_XDGPortable");
    module.exports = _XDGPortable();
  }
});

// node_modules/xdg-app-paths/src/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/xdg-app-paths/src/lib/index.js"(exports, module) {
    "use strict";
    init_esm();
    var path = __require("path");
    var xdg = require_lib2();
    function normalizeOptions_(options, isolated) {
      if (!isObject(options)) {
        options = { isolated: options };
      }
      options = options || {};
      options.isolated = options.isolated === void 0 || options.isolated === null ? isolated : options.isolated;
      if (!isBoolean(options.isolated)) {
        throw new TypeError(
          `Expected boolean for "isolated" argument, got ${typeOf(options.isolated)}`
        );
      }
      return options;
    }
    __name(normalizeOptions_, "normalizeOptions_");
    function isBoolean(value) {
      return typeOf(value) === "boolean";
    }
    __name(isBoolean, "isBoolean");
    function isObject(value) {
      return typeOf(value) === "object";
    }
    __name(isObject, "isObject");
    function isString(value) {
      return typeOf(value) === "string";
    }
    __name(isString, "isString");
    function typeOf(value) {
      return typeof value;
    }
    __name(typeOf, "typeOf");
    var XDGAppPaths_ = class _XDGAppPaths_ {
      static {
        __name(this, "XDGAppPaths_");
      }
      constructor(options = null) {
        const XDGAppPaths = /* @__PURE__ */ __name(function(options2 = null) {
          return new _XDGAppPaths_(options2).fn;
        }, "XDGAppPaths");
        if (!isObject(options)) {
          options = { name: options };
        }
        options = options || {};
        options.isolated = options.isolated === void 0 || options.isolated === null ? true : options.isolated;
        const isolated_ = options.isolated;
        if (!isBoolean(isolated_)) {
          throw new TypeError(`Expected boolean for "isolated" argument, got ${typeOf(isolated_)}`);
        }
        options.suffix = options.suffix === void 0 || options.suffix === null ? "" : options.suffix;
        const suffix_ = options.suffix;
        if (!isString(suffix_)) {
          throw new TypeError(`Expected string for "suffix" argument, got ${typeOf(suffix_)}`);
        }
        options.name = options.name === void 0 || options.name === null ? "" : options.name;
        let name_ = options.name;
        if (!isString(name_)) {
          throw new TypeError(`Expected string for "name" argument, got ${typeOf(name_)}`);
        }
        if (!name_) {
          name_ = path.parse(__require.main && __require.main.filename || process.execPath).name;
        }
        name_ += suffix_ || "";
        XDGAppPaths.$name = () => name_;
        XDGAppPaths.$isolated = () => isolated_;
        XDGAppPaths.cache = (dirOptions = null) => {
          dirOptions = normalizeOptions_(dirOptions, isolated_);
          return path.join(xdg.cache(), dirOptions.isolated ? name_ : "");
        };
        XDGAppPaths.config = function(dirOptions = null) {
          dirOptions = normalizeOptions_(dirOptions, isolated_);
          return path.join(xdg.config(), dirOptions.isolated ? name_ : "");
        };
        XDGAppPaths.data = function(dirOptions = null) {
          dirOptions = normalizeOptions_(dirOptions, isolated_);
          return path.join(xdg.data(), dirOptions.isolated ? name_ : "");
        };
        XDGAppPaths.runtime = function(dirOptions = null) {
          dirOptions = normalizeOptions_(dirOptions, isolated_);
          return xdg.runtime() ? path.join(xdg.runtime(), dirOptions.isolated ? name_ : "") : void 0;
        };
        XDGAppPaths.state = function(dirOptions = null) {
          dirOptions = normalizeOptions_(dirOptions, isolated_);
          return path.join(xdg.state(), dirOptions.isolated ? name_ : "");
        };
        XDGAppPaths.configDirs = function(dirOptions = null) {
          dirOptions = normalizeOptions_(dirOptions, isolated_);
          return xdg.configDirs().map((s) => path.join(s, dirOptions.isolated ? name_ : ""));
        };
        XDGAppPaths.dataDirs = function(dirOptions = null) {
          dirOptions = normalizeOptions_(dirOptions, isolated_);
          return xdg.dataDirs().map((s) => path.join(s, dirOptions.isolated ? name_ : ""));
        };
        this.fn = XDGAppPaths;
      }
    };
    module.exports = new XDGAppPaths_().fn;
  }
});

// node_modules/@vercel/cli-config/dist/paths.js
var require_paths = __commonJS({
  "node_modules/@vercel/cli-config/dist/paths.js"(exports) {
    "use strict";
    init_esm();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGlobalPathConfig = getGlobalPathConfig;
    exports.getConfigFilePath = getConfigFilePath;
    exports.getAuthConfigFilePath = getAuthConfigFilePath;
    exports.readGlobalConfigFlag = readGlobalConfigFlag;
    var node_fs_1 = __importDefault(__require("node:fs"));
    var node_path_1 = __importDefault(__require("node:path"));
    var node_os_1 = __require("node:os");
    var xdg_app_paths_1 = __importDefault(require_lib3());
    function isReadableDirectory(targetPath) {
      try {
        return node_fs_1.default.lstatSync(targetPath).isDirectory();
      } catch (_) {
        return false;
      }
    }
    __name(isReadableDirectory, "isReadableDirectory");
    function getGlobalPathConfig() {
      const vercelDirectories = (0, xdg_app_paths_1.default)("com.vercel.cli").dataDirs();
      const possibleConfigPaths = [
        ...vercelDirectories,
        // latest vercel directory
        node_path_1.default.join((0, node_os_1.homedir)(), ".now"),
        // legacy config in user's home directory
        ...(0, xdg_app_paths_1.default)("now").dataDirs()
        // legacy XDG directory
      ];
      return possibleConfigPaths.find((configPath) => isReadableDirectory(configPath)) || vercelDirectories[0];
    }
    __name(getGlobalPathConfig, "getGlobalPathConfig");
    function getConfigFilePath(configDir) {
      return node_path_1.default.join(configDir, "config.json");
    }
    __name(getConfigFilePath, "getConfigFilePath");
    function getAuthConfigFilePath(configDir) {
      return node_path_1.default.join(configDir, "auth.json");
    }
    __name(getAuthConfigFilePath, "getAuthConfigFilePath");
    function readGlobalConfigFlag(configPath, key) {
      try {
        const content = node_fs_1.default.readFileSync(configPath, "utf8").replace(/^\uFEFF/, "");
        const parsed = JSON.parse(content);
        if (parsed && typeof parsed === "object") {
          return parsed[key];
        }
      } catch {
      }
      return void 0;
    }
    __name(readGlobalConfigFlag, "readGlobalConfigFlag");
  }
});

// node_modules/@vercel/cli-config/dist/cli-config.js
var require_cli_config = __commonJS({
  "node_modules/@vercel/cli-config/dist/cli-config.js"(exports) {
    "use strict";
    init_esm();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultAuthConfig = exports.defaultGlobalConfig = exports.getGlobalPathConfig = exports.getConfigFilePath = exports.getAuthConfigFilePath = void 0;
    exports.getDefaultAuthConfig = getDefaultAuthConfig;
    exports.parseGlobalConfig = parseGlobalConfig;
    exports.parseAuthConfig = parseAuthConfig;
    exports.parseAuthFileConfig = parseAuthFileConfig;
    exports.readConfigFile = readConfigFile;
    exports.writeConfigFile = writeConfigFile;
    exports.readGlobalConfigFile = readGlobalConfigFile;
    exports.writeGlobalConfigFile = writeGlobalConfigFile;
    exports.readAuthConfigFile = readAuthConfigFile;
    exports.readAuthFileConfig = readAuthFileConfig;
    exports.readAuthConfig = readAuthConfig;
    exports.tryReadAuthConfig = tryReadAuthConfig;
    exports.writeAuthConfigFile = writeAuthConfigFile;
    exports.writeAuthConfig = writeAuthConfig;
    exports.deleteAuthConfigFile = deleteAuthConfigFile;
    exports.deleteAuthConfig = deleteAuthConfig;
    var node_fs_1 = __importDefault(__require("node:fs"));
    var node_path_1 = __importDefault(__require("node:path"));
    var zod_1 = require_zod();
    var schema_1 = require_schema();
    var paths_1 = require_paths();
    Object.defineProperty(exports, "getAuthConfigFilePath", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return paths_1.getAuthConfigFilePath;
    }, "get") });
    Object.defineProperty(exports, "getConfigFilePath", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return paths_1.getConfigFilePath;
    }, "get") });
    Object.defineProperty(exports, "getGlobalPathConfig", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return paths_1.getGlobalPathConfig;
    }, "get") });
    var DOCS_URL = "https://vercel.com/docs/projects/project-configuration/global-configuration";
    exports.defaultGlobalConfig = {
      "// Note": "This is your Vercel config file. For more information see the global configuration documentation.",
      "// Docs": `${DOCS_URL}#config.json`
    };
    function getDefaultAuthConfig() {
      return {
        "// Note": "This is your Vercel credentials file. DO NOT SHARE!",
        "// Docs": `${DOCS_URL}#auth.json`
      };
    }
    __name(getDefaultAuthConfig, "getDefaultAuthConfig");
    exports.defaultAuthConfig = getDefaultAuthConfig();
    function normalizeConfigError(error) {
      if (error instanceof zod_1.z.ZodError) {
        const credStorageIssue = error.issues.find((issue) => issue.path[0] === "credStorage");
        if (credStorageIssue) {
          throw new Error(credStorageIssue.message);
        }
      }
      throw error;
    }
    __name(normalizeConfigError, "normalizeConfigError");
    function parseGlobalConfig(value) {
      try {
        return schema_1.globalConfigSchema.parse(value);
      } catch (error) {
        normalizeConfigError(error);
      }
    }
    __name(parseGlobalConfig, "parseGlobalConfig");
    function parseAuthConfig(value) {
      return schema_1.authConfigSchema.parse(value);
    }
    __name(parseAuthConfig, "parseAuthConfig");
    function parseAuthFileConfig(value) {
      const { tokenSource, ...authConfig } = parseAuthConfig(value);
      return authConfig;
    }
    __name(parseAuthFileConfig, "parseAuthFileConfig");
    function readJsonFileSync(filePath) {
      const content = node_fs_1.default.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
      return JSON.parse(content);
    }
    __name(readJsonFileSync, "readJsonFileSync");
    function writeJsonFileSync(filePath, value, options = {}) {
      const directory = node_path_1.default.dirname(filePath);
      const tempFilePath = node_path_1.default.join(directory, `.${node_path_1.default.basename(filePath)}.${process.pid}.${Date.now()}.tmp`);
      const content = `${JSON.stringify(value, null, options.indent ?? 2)}
`;
      node_fs_1.default.mkdirSync(directory, { recursive: true });
      try {
        node_fs_1.default.writeFileSync(tempFilePath, content, {
          encoding: "utf8",
          mode: options.mode
        });
        node_fs_1.default.renameSync(tempFilePath, filePath);
      } catch (error) {
        try {
          node_fs_1.default.rmSync(tempFilePath, { force: true });
        } catch {
        }
        throw error;
      }
    }
    __name(writeJsonFileSync, "writeJsonFileSync");
    function readConfigFile(configPath, schema) {
      return schema.parse(readJsonFileSync(configPath));
    }
    __name(readConfigFile, "readConfigFile");
    function writeConfigFile(configPath, schema, config, options) {
      const normalizedConfig = zod_1.z.encode(schema, config);
      writeJsonFileSync(configPath, normalizedConfig, {
        indent: 2,
        ...options
      });
    }
    __name(writeConfigFile, "writeConfigFile");
    function readGlobalConfigFile(configPath) {
      try {
        return readConfigFile(configPath, schema_1.globalConfigSchema);
      } catch (error) {
        normalizeConfigError(error);
      }
    }
    __name(readGlobalConfigFile, "readGlobalConfigFile");
    function writeGlobalConfigFile(configPath, config) {
      writeConfigFile(configPath, schema_1.globalConfigSchema, config);
    }
    __name(writeGlobalConfigFile, "writeGlobalConfigFile");
    function readAuthConfigFile(configPath) {
      return readConfigFile(configPath, schema_1.authConfigSchema);
    }
    __name(readAuthConfigFile, "readAuthConfigFile");
    function readAuthFileConfig(configPath) {
      return parseAuthFileConfig(readJsonFileSync(configPath));
    }
    __name(readAuthFileConfig, "readAuthFileConfig");
    function readAuthConfig(configDir) {
      return readAuthConfigFile((0, paths_1.getAuthConfigFilePath)(configDir));
    }
    __name(readAuthConfig, "readAuthConfig");
    function tryReadAuthConfig(configDir) {
      try {
        return readAuthConfig(configDir);
      } catch {
        return null;
      }
    }
    __name(tryReadAuthConfig, "tryReadAuthConfig");
    function writeAuthConfigFile(configPath, authConfig) {
      if (authConfig.skipWrite) {
        return;
      }
      writeConfigFile(configPath, schema_1.authConfigSchema, authConfig, {
        mode: 384
      });
    }
    __name(writeAuthConfigFile, "writeAuthConfigFile");
    function writeAuthConfig(configDir, authConfig) {
      writeAuthConfigFile((0, paths_1.getAuthConfigFilePath)(configDir), authConfig);
    }
    __name(writeAuthConfig, "writeAuthConfig");
    function deleteAuthConfigFile(configPath) {
      node_fs_1.default.rmSync(configPath, { force: true });
    }
    __name(deleteAuthConfigFile, "deleteAuthConfigFile");
    function deleteAuthConfig(configDir) {
      deleteAuthConfigFile((0, paths_1.getAuthConfigFilePath)(configDir));
    }
    __name(deleteAuthConfig, "deleteAuthConfig");
  }
});

// node_modules/@vercel/cli-config/dist/cred-storage.js
var require_cred_storage = __commonJS({
  "node_modules/@vercel/cli-config/dist/cred-storage.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.authConfigHasUsableTokenData = authConfigHasUsableTokenData;
    exports.getLikelyEffectiveCredStorage = getLikelyEffectiveCredStorage;
    var types_1 = require_types();
    var cli_config_1 = require_cli_config();
    var TOKEN_STORAGE_ENV = "VERCEL_TOKEN_STORAGE";
    function isErrnoException(error) {
      return typeof error === "object" && error !== null && "code" in error;
    }
    __name(isErrnoException, "isErrnoException");
    function isCredStorage(value) {
      return types_1.CRED_STORAGE_CONFIG_VALUES.includes(value);
    }
    __name(isCredStorage, "isCredStorage");
    function formatCredStorageError(value, source) {
      return `Invalid value for \`${source}\`: ${JSON.stringify(value)}. Expected one of: ${types_1.CRED_STORAGE_CONFIG_VALUES.map((storage) => JSON.stringify(storage)).join(", ")}.`;
    }
    __name(formatCredStorageError, "formatCredStorageError");
    function parseCredStorage(value, source = "credStorage") {
      if (typeof value === "undefined") {
        return void 0;
      }
      if (isCredStorage(value)) {
        return value;
      }
      throw new Error(formatCredStorageError(value, source));
    }
    __name(parseCredStorage, "parseCredStorage");
    function authConfigHasUsableTokenData(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      const authConfig = value;
      return typeof authConfig.token === "string" && authConfig.token.length > 0 || typeof authConfig.refreshToken === "string" && authConfig.refreshToken.length > 0;
    }
    __name(authConfigHasUsableTokenData, "authConfigHasUsableTokenData");
    function getLikelyAutoCredStorage(configDir) {
      try {
        return authConfigHasUsableTokenData((0, cli_config_1.readAuthConfigFile)((0, cli_config_1.getAuthConfigFilePath)(configDir))) ? "file" : "keyring";
      } catch {
        return "keyring";
      }
    }
    __name(getLikelyAutoCredStorage, "getLikelyAutoCredStorage");
    function getLikelyConfiguredCredStorage(configDir, credStorage) {
      if (credStorage === "keyring") {
        return "keyring";
      }
      if (credStorage !== "auto") {
        return types_1.DEFAULT_CRED_STORAGE;
      }
      return getLikelyAutoCredStorage(configDir);
    }
    __name(getLikelyConfiguredCredStorage, "getLikelyConfiguredCredStorage");
    function getLikelyEffectiveCredStorage(configDir) {
      let config = {};
      const credStorageOverride = process.env[TOKEN_STORAGE_ENV];
      if (typeof credStorageOverride !== "undefined") {
        return getLikelyConfiguredCredStorage(configDir, parseCredStorage(credStorageOverride, TOKEN_STORAGE_ENV));
      }
      try {
        const parsed = (0, cli_config_1.readGlobalConfigFile)((0, cli_config_1.getConfigFilePath)(configDir));
        config = {
          ...parsed,
          credStorage: parseCredStorage(parsed.credStorage)
        };
      } catch (error) {
        if (!(isErrnoException(error) && error.code === "ENOENT")) {
          throw error;
        }
      }
      return getLikelyConfiguredCredStorage(configDir, config.credStorage);
    }
    __name(getLikelyEffectiveCredStorage, "getLikelyEffectiveCredStorage");
  }
});

// node_modules/@vercel/cli-config/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@vercel/cli-config/dist/index.js"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_types(), exports);
    __exportStar(require_schema(), exports);
    __exportStar(require_cli_config(), exports);
    __exportStar(require_cred_storage(), exports);
  }
});

// node_modules/@vercel/oidc/dist/token-error.js
var require_token_error = __commonJS({
  "node_modules/@vercel/oidc/dist/token-error.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var token_error_exports = {};
    __export(token_error_exports, {
      VercelOidcTokenError: /* @__PURE__ */ __name(() => VercelOidcTokenError, "VercelOidcTokenError")
    });
    module.exports = __toCommonJS(token_error_exports);
    var VercelOidcTokenError = class extends Error {
      static {
        __name(this, "VercelOidcTokenError");
      }
      constructor(message, cause) {
        super(message);
        this.name = "VercelOidcTokenError";
        this.cause = cause;
      }
      toString() {
        if (this.cause) {
          return `${this.name}: ${this.message}: ${this.cause}`;
        }
        return `${this.name}: ${this.message}`;
      }
    };
  }
});

// node_modules/@vercel/oidc/dist/token-io.js
var require_token_io = __commonJS({
  "node_modules/@vercel/oidc/dist/token-io.js"(exports, module) {
    "use strict";
    init_esm();
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var token_io_exports = {};
    __export(token_io_exports, {
      findRootDir: /* @__PURE__ */ __name(() => findRootDir, "findRootDir"),
      getUserDataDir: /* @__PURE__ */ __name(() => getUserDataDir, "getUserDataDir")
    });
    module.exports = __toCommonJS(token_io_exports);
    var import_path = __toESM(__require("path"));
    var import_fs = __toESM(__require("fs"));
    var import_os = __toESM(__require("os"));
    var import_token_error = require_token_error();
    function findRootDir() {
      try {
        let dir = process.cwd();
        while (dir !== import_path.default.dirname(dir)) {
          const pkgPath = import_path.default.join(dir, ".vercel");
          if (import_fs.default.existsSync(pkgPath)) {
            return dir;
          }
          dir = import_path.default.dirname(dir);
        }
      } catch (_e) {
        throw new import_token_error.VercelOidcTokenError(
          "Token refresh only supported in node server environments"
        );
      }
      return null;
    }
    __name(findRootDir, "findRootDir");
    function getUserDataDir() {
      if (process.env.XDG_DATA_HOME) {
        return process.env.XDG_DATA_HOME;
      }
      switch (import_os.default.platform()) {
        case "darwin":
          return import_path.default.join(import_os.default.homedir(), "Library/Application Support");
        case "linux":
          return import_path.default.join(import_os.default.homedir(), ".local/share");
        case "win32":
          if (process.env.LOCALAPPDATA) {
            return process.env.LOCALAPPDATA;
          }
          return null;
        default:
          return null;
      }
    }
    __name(getUserDataDir, "getUserDataDir");
  }
});

// node_modules/@vercel/oidc/dist/oauth.js
var require_oauth = __commonJS({
  "node_modules/@vercel/oidc/dist/oauth.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var oauth_exports = {};
    __export(oauth_exports, {
      processTokenResponse: /* @__PURE__ */ __name(() => processTokenResponse, "processTokenResponse"),
      refreshTokenRequest: /* @__PURE__ */ __name(() => refreshTokenRequest, "refreshTokenRequest")
    });
    module.exports = __toCommonJS(oauth_exports);
    var import_os = __require("os");
    var VERCEL_ISSUER = "https://vercel.com";
    var VERCEL_CLI_CLIENT_ID = "cl_HYyOPBNtFMfHhaUn9L4QPfTZz6TP47bp";
    var userAgent = `@vercel/oidc node-${process.version} ${(0, import_os.platform)()} (${(0, import_os.arch)()}) ${(0, import_os.hostname)()}`;
    var _tokenEndpoint = null;
    async function getTokenEndpoint() {
      if (_tokenEndpoint) {
        return _tokenEndpoint;
      }
      const discoveryUrl = `${VERCEL_ISSUER}/.well-known/openid-configuration`;
      const response = await fetch(discoveryUrl, {
        headers: { "user-agent": userAgent }
      });
      if (!response.ok) {
        throw new Error("Failed to discover OAuth endpoints");
      }
      const metadata = await response.json();
      if (!metadata || typeof metadata.token_endpoint !== "string") {
        throw new Error("Invalid OAuth discovery response");
      }
      const endpoint = metadata.token_endpoint;
      _tokenEndpoint = endpoint;
      return endpoint;
    }
    __name(getTokenEndpoint, "getTokenEndpoint");
    async function refreshTokenRequest(options) {
      const tokenEndpoint = await getTokenEndpoint();
      return await fetch(tokenEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "user-agent": userAgent
        },
        body: new URLSearchParams({
          client_id: VERCEL_CLI_CLIENT_ID,
          grant_type: "refresh_token",
          ...options
        })
      });
    }
    __name(refreshTokenRequest, "refreshTokenRequest");
    async function processTokenResponse(response) {
      const json = await response.json();
      if (!response.ok) {
        const errorMsg = typeof json === "object" && json && "error" in json ? String(json.error) : "Token refresh failed";
        return [new Error(errorMsg)];
      }
      if (typeof json !== "object" || json === null) {
        return [new Error("Invalid token response")];
      }
      if (typeof json.access_token !== "string") {
        return [new Error("Missing access_token in response")];
      }
      if (json.token_type !== "Bearer") {
        return [new Error("Invalid token_type in response")];
      }
      if (typeof json.expires_in !== "number") {
        return [new Error("Missing expires_in in response")];
      }
      return [null, json];
    }
    __name(processTokenResponse, "processTokenResponse");
  }
});

// node_modules/@vercel/oidc/dist/auth-errors.js
var require_auth_errors = __commonJS({
  "node_modules/@vercel/oidc/dist/auth-errors.js"(exports, module) {
    "use strict";
    init_esm();
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var auth_errors_exports = {};
    __export(auth_errors_exports, {
      AccessTokenMissingError: /* @__PURE__ */ __name(() => AccessTokenMissingError, "AccessTokenMissingError"),
      RefreshAccessTokenFailedError: /* @__PURE__ */ __name(() => RefreshAccessTokenFailedError, "RefreshAccessTokenFailedError")
    });
    module.exports = __toCommonJS(auth_errors_exports);
    var AccessTokenMissingError = class extends Error {
      static {
        __name(this, "AccessTokenMissingError");
      }
      constructor() {
        super(
          "No authentication found. Please log in with the Vercel CLI (vercel login)."
        );
        this.name = "AccessTokenMissingError";
      }
    };
    var RefreshAccessTokenFailedError = class extends Error {
      static {
        __name(this, "RefreshAccessTokenFailedError");
      }
      constructor(cause) {
        super("Failed to refresh authentication token.");
        this.name = "RefreshAccessTokenFailedError";
        if (cause !== void 0) {
          this.cause = cause;
        }
      }
    };
  }
});

// node_modules/@vercel/oidc/dist/token-util.js
var require_token_util = __commonJS({
  "node_modules/@vercel/oidc/dist/token-util.js"(exports, module) {
    init_esm();
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var token_util_exports = {};
    __export(token_util_exports, {
      assertVercelOidcTokenResponse: /* @__PURE__ */ __name(() => assertVercelOidcTokenResponse, "assertVercelOidcTokenResponse"),
      findProjectInfo: /* @__PURE__ */ __name(() => findProjectInfo, "findProjectInfo"),
      getTokenPayload: /* @__PURE__ */ __name(() => getTokenPayload, "getTokenPayload"),
      getVercelOidcToken: /* @__PURE__ */ __name(() => getVercelOidcToken, "getVercelOidcToken"),
      getVercelOidcTokenFromCli: /* @__PURE__ */ __name(() => getVercelOidcTokenFromCli, "getVercelOidcTokenFromCli"),
      getVercelToken: /* @__PURE__ */ __name(() => getVercelToken, "getVercelToken"),
      isExpired: /* @__PURE__ */ __name(() => isExpired, "isExpired"),
      loadToken: /* @__PURE__ */ __name(() => loadToken, "loadToken"),
      saveToken: /* @__PURE__ */ __name(() => saveToken, "saveToken")
    });
    module.exports = __toCommonJS(token_util_exports);
    var path = __toESM(__require("path"));
    var fs = __toESM(__require("fs"));
    var import_cli_exec = require_dist();
    var import_cli_config = require_dist2();
    var import_token_error = require_token_error();
    var import_token_io = require_token_io();
    var import_oauth = require_oauth();
    var import_auth_errors = require_auth_errors();
    async function getVercelToken(options) {
      const configDir = (0, import_cli_config.getGlobalPathConfig)();
      const authConfig = (0, import_cli_config.tryReadAuthConfig)(configDir);
      if (!authConfig || !authConfig.token && !authConfig.refreshToken) {
        throw new import_auth_errors.AccessTokenMissingError();
      }
      if (isValidAccessToken(authConfig, options?.expirationBufferMs)) {
        return authConfig.token;
      }
      if (!authConfig.refreshToken) {
        (0, import_cli_config.writeAuthConfig)(configDir, {});
        throw new import_auth_errors.RefreshAccessTokenFailedError("No refresh token available");
      }
      try {
        const tokenResponse = await (0, import_oauth.refreshTokenRequest)({
          refresh_token: authConfig.refreshToken
        });
        const [tokensError, tokens] = await (0, import_oauth.processTokenResponse)(tokenResponse);
        if (tokensError || !tokens) {
          (0, import_cli_config.writeAuthConfig)(configDir, {});
          throw new import_auth_errors.RefreshAccessTokenFailedError(tokensError);
        }
        const updatedConfig = {
          token: tokens.access_token,
          expiresAt: Math.floor(Date.now() / 1e3) + tokens.expires_in,
          refreshToken: tokens.refresh_token
        };
        (0, import_cli_config.writeAuthConfig)(configDir, updatedConfig);
        return updatedConfig.token;
      } catch (error) {
        (0, import_cli_config.writeAuthConfig)(configDir, {});
        if (error instanceof import_auth_errors.AccessTokenMissingError || error instanceof import_auth_errors.RefreshAccessTokenFailedError) {
          throw error;
        }
        throw new import_auth_errors.RefreshAccessTokenFailedError(error);
      }
    }
    __name(getVercelToken, "getVercelToken");
    function isValidAccessToken(authConfig, expirationBufferMs = 0) {
      if (!authConfig.token)
        return false;
      if (typeof authConfig.expiresAt !== "number")
        return true;
      const nowInSeconds = Math.floor(Date.now() / 1e3);
      const bufferInSeconds = expirationBufferMs / 1e3;
      return authConfig.expiresAt >= nowInSeconds + bufferInSeconds;
    }
    __name(isValidAccessToken, "isValidAccessToken");
    async function getVercelOidcTokenFromCli(projectId, teamId) {
      const args = ["project", "token", projectId, "--format=json"];
      if (teamId) {
        args.push("--scope", teamId);
      }
      try {
        const { stdout } = await (0, import_cli_exec.execVercelCli)(args);
        let parsedOutput;
        if (typeof stdout !== "string") {
          throw new import_token_error.VercelOidcTokenError(
            "Failed to refresh OIDC token: `vercel project token` did not return stdout"
          );
        }
        try {
          parsedOutput = JSON.parse(stdout);
        } catch {
          throw new import_token_error.VercelOidcTokenError(
            "Failed to refresh OIDC token: `vercel project token` returned invalid JSON: " + stdout
          );
        }
        assertVercelOidcTokenResponse(parsedOutput);
        return parsedOutput;
      } catch (error) {
        if (error instanceof import_token_error.VercelOidcTokenError) {
          throw error;
        }
        let message = error instanceof Error ? error.message : "";
        const stderr = error instanceof import_cli_exec.VercelCliError ? error.stderr?.trim() : void 0;
        if (stderr && !message.includes(stderr)) {
          message = `${message}
${stderr}`.trim();
        }
        throw new import_token_error.VercelOidcTokenError(
          message ? `Failed to refresh OIDC token with the Vercel CLI: ${message}` : "Failed to refresh OIDC token with the Vercel CLI"
        );
      }
    }
    __name(getVercelOidcTokenFromCli, "getVercelOidcTokenFromCli");
    async function getVercelOidcToken(authToken, projectId, teamId) {
      const url = `https://api.vercel.com/v1/projects/${projectId}/token?source=vercel-oidc-refresh${teamId ? `&teamId=${teamId}` : ""}`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      if (!res.ok) {
        throw new import_token_error.VercelOidcTokenError(
          `Failed to refresh OIDC token: ${res.statusText}`
        );
      }
      const tokenRes = await res.json();
      assertVercelOidcTokenResponse(tokenRes);
      return tokenRes;
    }
    __name(getVercelOidcToken, "getVercelOidcToken");
    function assertVercelOidcTokenResponse(res) {
      if (!res || typeof res !== "object") {
        throw new TypeError("Vercel OIDC token is malformed. Expected an object.");
      }
      if (!("token" in res) || typeof res.token !== "string") {
        throw new TypeError(
          "Vercel OIDC token is malformed. Expected a string-valued token property."
        );
      }
    }
    __name(assertVercelOidcTokenResponse, "assertVercelOidcTokenResponse");
    function findProjectInfo() {
      const dir = (0, import_token_io.findRootDir)();
      if (!dir) {
        throw new import_token_error.VercelOidcTokenError(
          "Unable to find project root directory. Have you linked your project with `vc link?`"
        );
      }
      const prjPath = path.join(dir, ".vercel", "project.json");
      if (!fs.existsSync(prjPath)) {
        throw new import_token_error.VercelOidcTokenError(
          "project.json not found, have you linked your project with `vc link?`"
        );
      }
      const prj = JSON.parse(fs.readFileSync(prjPath, "utf8"));
      if (typeof prj.projectId !== "string" && typeof prj.orgId !== "string") {
        throw new TypeError(
          "Expected a string-valued projectId property. Try running `vc link` to re-link your project."
        );
      }
      return { projectId: prj.projectId, teamId: prj.orgId };
    }
    __name(findProjectInfo, "findProjectInfo");
    function saveToken(token, projectId) {
      const dir = (0, import_token_io.getUserDataDir)();
      if (!dir) {
        throw new import_token_error.VercelOidcTokenError(
          "Unable to find user data directory. Please reach out to Vercel support."
        );
      }
      const tokenPath = path.join(dir, "com.vercel.token", `${projectId}.json`);
      const tokenJson = JSON.stringify(token);
      fs.mkdirSync(path.dirname(tokenPath), { mode: 504, recursive: true });
      fs.writeFileSync(tokenPath, tokenJson);
      fs.chmodSync(tokenPath, 432);
      return;
    }
    __name(saveToken, "saveToken");
    function loadToken(projectId) {
      const dir = (0, import_token_io.getUserDataDir)();
      if (!dir) {
        throw new import_token_error.VercelOidcTokenError(
          "Unable to find user data directory. Please reach out to Vercel support."
        );
      }
      const tokenPath = path.join(dir, "com.vercel.token", `${projectId}.json`);
      if (!fs.existsSync(tokenPath)) {
        return null;
      }
      const token = JSON.parse(fs.readFileSync(tokenPath, "utf8"));
      assertVercelOidcTokenResponse(token);
      return token;
    }
    __name(loadToken, "loadToken");
    function getTokenPayload(token) {
      const tokenParts = token.split(".");
      if (tokenParts.length !== 3) {
        throw new import_token_error.VercelOidcTokenError("Invalid token.");
      }
      const base64 = tokenParts[1].replace(/-/g, "+").replace(/_/g, "/");
      const padded = base64.padEnd(
        base64.length + (4 - base64.length % 4) % 4,
        "="
      );
      return JSON.parse(Buffer.from(padded, "base64").toString("utf8"));
    }
    __name(getTokenPayload, "getTokenPayload");
    function isExpired(token, bufferMs = 0) {
      return token.exp * 1e3 < Date.now() + bufferMs;
    }
    __name(isExpired, "isExpired");
  }
});

export {
  require_token_error,
  require_dist2 as require_dist,
  require_auth_errors,
  require_token_util
};
//# sourceMappingURL=chunk-WRDGJYLU.mjs.map
