import {
  require_async_local_storage,
  require_cookies,
  require_dynamic_rendering,
  require_dynamic_rendering_utils,
  require_invariant_error,
  require_reflect,
  require_static_generation_bailout,
  require_utils,
  require_work_async_storage_external,
  require_work_unit_async_storage_external
} from "./chunk-UQPM4TIK.mjs";
import {
  subtle
} from "./chunk-UXG3MEYK.mjs";
import {
  __commonJS,
  __name,
  __require,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS({
  "node_modules/@prisma/client/runtime/library.js"(exports, module) {
    "use strict";
    init_esm();
    var yu = Object.create;
    var jt = Object.defineProperty;
    var bu = Object.getOwnPropertyDescriptor;
    var Eu = Object.getOwnPropertyNames;
    var wu = Object.getPrototypeOf;
    var xu = Object.prototype.hasOwnProperty;
    var Do = /* @__PURE__ */ __name((e, r) => () => (e && (r = e(e = 0)), r), "Do");
    var ue = /* @__PURE__ */ __name((e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), "ue");
    var tr = /* @__PURE__ */ __name((e, r) => {
      for (var t in r) jt(e, t, { get: r[t], enumerable: true });
    }, "tr");
    var Oo = /* @__PURE__ */ __name((e, r, t, n) => {
      if (r && typeof r == "object" || typeof r == "function") for (let i of Eu(r)) !xu.call(e, i) && i !== t && jt(e, i, { get: /* @__PURE__ */ __name(() => r[i], "get"), enumerable: !(n = bu(r, i)) || n.enumerable });
      return e;
    }, "Oo");
    var O = /* @__PURE__ */ __name((e, r, t) => (t = e != null ? yu(wu(e)) : {}, Oo(r || !e || !e.__esModule ? jt(t, "default", { value: e, enumerable: true }) : t, e)), "O");
    var vu = /* @__PURE__ */ __name((e) => Oo(jt({}, "__esModule", { value: true }), e), "vu");
    var hi = ue((_g, is) => {
      "use strict";
      is.exports = (e, r = process.argv) => {
        let t = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = r.indexOf(t + e), i = r.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var as = ue((Ng, ss) => {
      "use strict";
      var Fc = __require("node:os"), os = __require("node:tty"), de = hi(), { env: G } = process, Qe;
      de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? Qe = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (Qe = 1);
      "FORCE_COLOR" in G && (G.FORCE_COLOR === "true" ? Qe = 1 : G.FORCE_COLOR === "false" ? Qe = 0 : Qe = G.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(G.FORCE_COLOR, 10), 3));
      function yi(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      __name(yi, "yi");
      function bi(e, r) {
        if (Qe === 0) return 0;
        if (de("color=16m") || de("color=full") || de("color=truecolor")) return 3;
        if (de("color=256")) return 2;
        if (e && !r && Qe === void 0) return 0;
        let t = Qe || 0;
        if (G.TERM === "dumb") return t;
        if (process.platform === "win32") {
          let n = Fc.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in G) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in G) || G.CI_NAME === "codeship" ? 1 : t;
        if ("TEAMCITY_VERSION" in G) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(G.TEAMCITY_VERSION) ? 1 : 0;
        if (G.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in G) {
          let n = parseInt((G.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (G.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(G.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(G.TERM) || "COLORTERM" in G ? 1 : t;
      }
      __name(bi, "bi");
      function Mc(e) {
        let r = bi(e, e && e.isTTY);
        return yi(r);
      }
      __name(Mc, "Mc");
      ss.exports = { supportsColor: Mc, stdout: yi(bi(true, os.isatty(1))), stderr: yi(bi(true, os.isatty(2))) };
    });
    var cs = ue((Lg, us) => {
      "use strict";
      var $c = as(), br = hi();
      function ls(e) {
        if (/^\d{3,4}$/.test(e)) {
          let t = /(\d{1,2})(\d{2})/.exec(e) || [];
          return { major: 0, minor: parseInt(t[1], 10), patch: parseInt(t[2], 10) };
        }
        let r = (e || "").split(".").map((t) => parseInt(t, 10));
        return { major: r[0], minor: r[1], patch: r[2] };
      }
      __name(ls, "ls");
      function Ei(e) {
        let { CI: r, FORCE_HYPERLINK: t, NETLIFY: n, TEAMCITY_VERSION: i, TERM_PROGRAM: o, TERM_PROGRAM_VERSION: s, VTE_VERSION: a, TERM: l } = process.env;
        if (t) return !(t.length > 0 && parseInt(t, 10) === 0);
        if (br("no-hyperlink") || br("no-hyperlinks") || br("hyperlink=false") || br("hyperlink=never")) return false;
        if (br("hyperlink=true") || br("hyperlink=always") || n) return true;
        if (!$c.supportsColor(e) || e && !e.isTTY) return false;
        if ("WT_SESSION" in process.env) return true;
        if (process.platform === "win32" || r || i) return false;
        if (o) {
          let u = ls(s || "");
          switch (o) {
            case "iTerm.app":
              return u.major === 3 ? u.minor >= 1 : u.major > 3;
            case "WezTerm":
              return u.major >= 20200620;
            case "vscode":
              return u.major > 1 || u.major === 1 && u.minor >= 72;
            case "ghostty":
              return true;
          }
        }
        if (a) {
          if (a === "0.50.0") return false;
          let u = ls(a);
          return u.major > 0 || u.minor >= 50;
        }
        switch (l) {
          case "alacritty":
            return true;
        }
        return false;
      }
      __name(Ei, "Ei");
      us.exports = { supportsHyperlink: Ei, stdout: Ei(process.stdout), stderr: Ei(process.stderr) };
    });
    var ps = ue((Kg, qc) => {
      qc.exports = { name: "@prisma/internals", version: "6.19.3", description: "This package is intended for Prisma's internal use", main: "dist/index.js", types: "dist/index.d.ts", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/internals" }, homepage: "https://www.prisma.io", author: "Tim Suchanek <suchanek@prisma.io>", bugs: "https://github.com/prisma/prisma/issues", license: "Apache-2.0", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", test: "dotenv -e ../../.db.env -- jest --silent", prepublishOnly: "pnpm run build" }, files: ["README.md", "dist", "!**/libquery_engine*", "!dist/get-generators/engines/*", "scripts"], devDependencies: { "@babel/helper-validator-identifier": "7.25.9", "@opentelemetry/api": "1.9.0", "@swc/core": "1.11.5", "@swc/jest": "0.2.37", "@types/babel__helper-validator-identifier": "7.15.2", "@types/jest": "29.5.14", "@types/node": "18.19.76", "@types/resolve": "1.20.6", archiver: "6.0.2", "checkpoint-client": "1.1.33", "cli-truncate": "4.0.0", dotenv: "16.5.0", empathic: "2.0.0", "escape-string-regexp": "5.0.0", execa: "8.0.1", "fast-glob": "3.3.3", "find-up": "7.0.0", "fp-ts": "2.16.9", "fs-extra": "11.3.0", "global-directory": "4.0.0", globby: "11.1.0", "identifier-regex": "1.0.0", "indent-string": "4.0.0", "is-windows": "1.0.2", "is-wsl": "3.1.0", jest: "29.7.0", "jest-junit": "16.0.0", kleur: "4.1.5", "mock-stdin": "1.0.0", "new-github-issue-url": "0.2.1", "node-fetch": "3.3.2", "npm-packlist": "5.1.3", open: "7.4.2", "p-map": "4.0.0", resolve: "1.22.10", "string-width": "7.2.0", "strip-indent": "4.0.0", "temp-dir": "2.0.0", tempy: "1.0.1", "terminal-link": "4.0.0", tmp: "0.2.3", "ts-pattern": "5.6.2", "ts-toolbelt": "9.6.0", typescript: "5.4.5", yarn: "1.22.22" }, dependencies: { "@prisma/config": "workspace:*", "@prisma/debug": "workspace:*", "@prisma/dmmf": "workspace:*", "@prisma/driver-adapter-utils": "workspace:*", "@prisma/engines": "workspace:*", "@prisma/fetch-engine": "workspace:*", "@prisma/generator": "workspace:*", "@prisma/generator-helper": "workspace:*", "@prisma/get-platform": "workspace:*", "@prisma/prisma-schema-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", "@prisma/schema-engine-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", "@prisma/schema-files-loader": "workspace:*", arg: "5.0.2", prompts: "2.4.2" }, peerDependencies: { typescript: ">=5.1.0" }, peerDependenciesMeta: { typescript: { optional: true } }, sideEffects: false };
    });
    var Ti = ue((gh, Qc) => {
      Qc.exports = { name: "@prisma/engines-version", version: "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var on = ue((nn) => {
      "use strict";
      Object.defineProperty(nn, "__esModule", { value: true });
      nn.enginesVersion = void 0;
      nn.enginesVersion = Ti().prisma.enginesVersion;
    });
    var hs = ue((Ih, gs) => {
      "use strict";
      gs.exports = (e) => {
        let r = e.match(/^[ \t]*(?=\S)/gm);
        return r ? r.reduce((t, n) => Math.min(t, n.length), 1 / 0) : 0;
      };
    });
    var Di = ue((kh, Es) => {
      "use strict";
      Es.exports = (e, r = 1, t) => {
        if (t = { indent: " ", includeEmptyLines: false, ...t }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof r != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof r}\``);
        if (typeof t.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);
        if (r === 0) return e;
        let n = t.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, t.indent.repeat(r));
      };
    });
    var vs = ue((jh, tp) => {
      tp.exports = { name: "dotenv", version: "16.5.0", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { types: "./lib/main.d.ts", require: "./lib/main.js", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", pretest: "npm run lint && npm run dts-check", test: "tap run --allow-empty-coverage --disable-coverage --timeout=60000", "test:coverage": "tap run --show-full-coverage --timeout=60000 --coverage-report=lcov", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, homepage: "https://github.com/motdotla/dotenv#readme", funding: "https://dotenvx.com", keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^18.11.3", decache: "^4.6.2", sinon: "^14.0.1", standard: "^17.0.0", "standard-version": "^9.5.0", tap: "^19.2.0", typescript: "^4.8.4" }, engines: { node: ">=12" }, browser: { fs: false } };
    });
    var As = ue((Bh, _e) => {
      "use strict";
      var Fi = __require("node:fs"), Mi = __require("node:path"), np = __require("node:os"), ip = __require("node:crypto"), op = vs(), Ts = op.version, sp = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function ap(e) {
        let r = {}, t = e.toString();
        t = t.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = sp.exec(t)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), r[i] = o;
        }
        return r;
      }
      __name(ap, "ap");
      function lp(e) {
        let r = Rs(e), t = B.configDotenv({ path: r });
        if (!t.parsed) {
          let s = new Error(`MISSING_DATA: Cannot parse ${r} for an unknown reason`);
          throw s.code = "MISSING_DATA", s;
        }
        let n = Ss(e).split(","), i = n.length, o;
        for (let s = 0; s < i; s++) try {
          let a = n[s].trim(), l = cp(t, a);
          o = B.decrypt(l.ciphertext, l.key);
          break;
        } catch (a) {
          if (s + 1 >= i) throw a;
        }
        return B.parse(o);
      }
      __name(lp, "lp");
      function up(e) {
        console.log(`[dotenv@${Ts}][WARN] ${e}`);
      }
      __name(up, "up");
      function ot(e) {
        console.log(`[dotenv@${Ts}][DEBUG] ${e}`);
      }
      __name(ot, "ot");
      function Ss(e) {
        return e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0 ? e.DOTENV_KEY : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0 ? process.env.DOTENV_KEY : "";
      }
      __name(Ss, "Ss");
      function cp(e, r) {
        let t;
        try {
          t = new URL(r);
        } catch (a) {
          if (a.code === "ERR_INVALID_URL") {
            let l = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
            throw l.code = "INVALID_DOTENV_KEY", l;
          }
          throw a;
        }
        let n = t.password;
        if (!n) {
          let a = new Error("INVALID_DOTENV_KEY: Missing key part");
          throw a.code = "INVALID_DOTENV_KEY", a;
        }
        let i = t.searchParams.get("environment");
        if (!i) {
          let a = new Error("INVALID_DOTENV_KEY: Missing environment part");
          throw a.code = "INVALID_DOTENV_KEY", a;
        }
        let o = `DOTENV_VAULT_${i.toUpperCase()}`, s = e.parsed[o];
        if (!s) {
          let a = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);
          throw a.code = "NOT_FOUND_DOTENV_ENVIRONMENT", a;
        }
        return { ciphertext: s, key: n };
      }
      __name(cp, "cp");
      function Rs(e) {
        let r = null;
        if (e && e.path && e.path.length > 0) if (Array.isArray(e.path)) for (let t of e.path) Fi.existsSync(t) && (r = t.endsWith(".vault") ? t : `${t}.vault`);
        else r = e.path.endsWith(".vault") ? e.path : `${e.path}.vault`;
        else r = Mi.resolve(process.cwd(), ".env.vault");
        return Fi.existsSync(r) ? r : null;
      }
      __name(Rs, "Rs");
      function Ps(e) {
        return e[0] === "~" ? Mi.join(np.homedir(), e.slice(1)) : e;
      }
      __name(Ps, "Ps");
      function pp(e) {
        !!(e && e.debug) && ot("Loading env from encrypted .env.vault");
        let t = B._parseVault(e), n = process.env;
        return e && e.processEnv != null && (n = e.processEnv), B.populate(n, t, e), { parsed: t };
      }
      __name(pp, "pp");
      function dp(e) {
        let r = Mi.resolve(process.cwd(), ".env"), t = "utf8", n = !!(e && e.debug);
        e && e.encoding ? t = e.encoding : n && ot("No encoding is specified. UTF-8 is used by default");
        let i = [r];
        if (e && e.path) if (!Array.isArray(e.path)) i = [Ps(e.path)];
        else {
          i = [];
          for (let l of e.path) i.push(Ps(l));
        }
        let o, s = {};
        for (let l of i) try {
          let u = B.parse(Fi.readFileSync(l, { encoding: t }));
          B.populate(s, u, e);
        } catch (u) {
          n && ot(`Failed to load ${l} ${u.message}`), o = u;
        }
        let a = process.env;
        return e && e.processEnv != null && (a = e.processEnv), B.populate(a, s, e), o ? { parsed: s, error: o } : { parsed: s };
      }
      __name(dp, "dp");
      function mp(e) {
        if (Ss(e).length === 0) return B.configDotenv(e);
        let r = Rs(e);
        return r ? B._configVault(e) : (up(`You set DOTENV_KEY but you are missing a .env.vault file at ${r}. Did you forget to build it?`), B.configDotenv(e));
      }
      __name(mp, "mp");
      function fp(e, r) {
        let t = Buffer.from(r.slice(-64), "hex"), n = Buffer.from(e, "base64"), i = n.subarray(0, 12), o = n.subarray(-16);
        n = n.subarray(12, -16);
        try {
          let s = ip.createDecipheriv("aes-256-gcm", t, i);
          return s.setAuthTag(o), `${s.update(n)}${s.final()}`;
        } catch (s) {
          let a = s instanceof RangeError, l = s.message === "Invalid key length", u = s.message === "Unsupported state or unable to authenticate data";
          if (a || l) {
            let c = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
            throw c.code = "INVALID_DOTENV_KEY", c;
          } else if (u) {
            let c = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
            throw c.code = "DECRYPTION_FAILED", c;
          } else throw s;
        }
      }
      __name(fp, "fp");
      function gp(e, r, t = {}) {
        let n = !!(t && t.debug), i = !!(t && t.override);
        if (typeof r != "object") {
          let o = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
          throw o.code = "OBJECT_REQUIRED", o;
        }
        for (let o of Object.keys(r)) Object.prototype.hasOwnProperty.call(e, o) ? (i === true && (e[o] = r[o]), n && ot(i === true ? `"${o}" is already defined and WAS overwritten` : `"${o}" is already defined and was NOT overwritten`)) : e[o] = r[o];
      }
      __name(gp, "gp");
      var B = { configDotenv: dp, _configVault: pp, _parseVault: lp, config: mp, decrypt: fp, parse: ap, populate: gp };
      _e.exports.configDotenv = B.configDotenv;
      _e.exports._configVault = B._configVault;
      _e.exports._parseVault = B._parseVault;
      _e.exports.config = B.config;
      _e.exports.decrypt = B.decrypt;
      _e.exports.parse = B.parse;
      _e.exports.populate = B.populate;
      _e.exports = B;
    });
    var Os = ue((Kh, cn) => {
      "use strict";
      cn.exports = (e = {}) => {
        let r;
        if (e.repoUrl) r = e.repoUrl;
        else if (e.user && e.repo) r = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let t = new URL(`${r}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            t.searchParams.set(i, o);
          }
        }
        return t.toString();
      };
      cn.exports.default = cn.exports;
    });
    var Ki = ue((vb, ea) => {
      "use strict";
      ea.exports = /* @__PURE__ */ function() {
        function e(r, t, n, i, o) {
          return r < t || n < t ? r > n ? n + 1 : r + 1 : i === o ? t : t + 1;
        }
        __name(e, "e");
        return function(r, t) {
          if (r === t) return 0;
          if (r.length > t.length) {
            var n = r;
            r = t, t = n;
          }
          for (var i = r.length, o = t.length; i > 0 && r.charCodeAt(i - 1) === t.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && r.charCodeAt(s) === t.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, l, u, c, p, d, f, h, g, I, T, S, b, D = [];
          for (l = 0; l < i; l++) D.push(l + 1), D.push(r.charCodeAt(s + l));
          for (var me = D.length - 1; a < o - 3; ) for (I = t.charCodeAt(s + (u = a)), T = t.charCodeAt(s + (c = a + 1)), S = t.charCodeAt(s + (p = a + 2)), b = t.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < me; l += 2) h = D[l], g = D[l + 1], u = e(h, u, c, I, g), c = e(u, c, p, T, g), p = e(c, p, d, S, g), f = e(p, d, f, b, g), D[l] = f, d = p, p = c, c = u, u = h;
          for (; a < o; ) for (I = t.charCodeAt(s + (u = a)), f = ++a, l = 0; l < me; l += 2) h = D[l], D[l] = f = e(h, u, f, I, D[l + 1]), u = h;
          return f;
        };
      }();
    });
    var oa = Do(() => {
      "use strict";
    });
    var sa = Do(() => {
      "use strict";
    });
    var jf = {};
    tr(jf, { DMMF: /* @__PURE__ */ __name(() => ct, "DMMF"), Debug: /* @__PURE__ */ __name(() => N, "Debug"), Decimal: /* @__PURE__ */ __name(() => Fe, "Decimal"), Extensions: /* @__PURE__ */ __name(() => ni, "Extensions"), MetricsClient: /* @__PURE__ */ __name(() => Lr, "MetricsClient"), PrismaClientInitializationError: /* @__PURE__ */ __name(() => P, "PrismaClientInitializationError"), PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => z, "PrismaClientKnownRequestError"), PrismaClientRustPanicError: /* @__PURE__ */ __name(() => ae, "PrismaClientRustPanicError"), PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => V, "PrismaClientUnknownRequestError"), PrismaClientValidationError: /* @__PURE__ */ __name(() => Z, "PrismaClientValidationError"), Public: /* @__PURE__ */ __name(() => ii, "Public"), Sql: /* @__PURE__ */ __name(() => ie, "Sql"), createParam: /* @__PURE__ */ __name(() => va, "createParam"), defineDmmfProperty: /* @__PURE__ */ __name(() => Ca, "defineDmmfProperty"), deserializeJsonResponse: /* @__PURE__ */ __name(() => Vr, "deserializeJsonResponse"), deserializeRawResult: /* @__PURE__ */ __name(() => Xn, "deserializeRawResult"), dmmfToRuntimeDataModel: /* @__PURE__ */ __name(() => Ns, "dmmfToRuntimeDataModel"), empty: /* @__PURE__ */ __name(() => Oa, "empty"), getPrismaClient: /* @__PURE__ */ __name(() => fu, "getPrismaClient"), getRuntime: /* @__PURE__ */ __name(() => Kn, "getRuntime"), join: /* @__PURE__ */ __name(() => Da, "join"), makeStrictEnum: /* @__PURE__ */ __name(() => gu, "makeStrictEnum"), makeTypedQueryFactory: /* @__PURE__ */ __name(() => Ia, "makeTypedQueryFactory"), objectEnumValues: /* @__PURE__ */ __name(() => On, "objectEnumValues"), raw: /* @__PURE__ */ __name(() => no, "raw"), serializeJsonQuery: /* @__PURE__ */ __name(() => $n, "serializeJsonQuery"), skip: /* @__PURE__ */ __name(() => Mn, "skip"), sqltag: /* @__PURE__ */ __name(() => io, "sqltag"), warnEnvConflicts: /* @__PURE__ */ __name(() => hu, "warnEnvConflicts"), warnOnce: /* @__PURE__ */ __name(() => at, "warnOnce") });
    module.exports = vu(jf);
    var ni = {};
    tr(ni, { defineExtension: /* @__PURE__ */ __name(() => ko, "defineExtension"), getExtensionContext: /* @__PURE__ */ __name(() => _o, "getExtensionContext") });
    function ko(e) {
      return typeof e == "function" ? e : (r) => r.$extends(e);
    }
    __name(ko, "ko");
    function _o(e) {
      return e;
    }
    __name(_o, "_o");
    var ii = {};
    tr(ii, { validator: /* @__PURE__ */ __name(() => No, "validator") });
    function No(...e) {
      return (r) => r;
    }
    __name(No, "No");
    var Bt = {};
    tr(Bt, { $: /* @__PURE__ */ __name(() => qo, "$"), bgBlack: /* @__PURE__ */ __name(() => ku, "bgBlack"), bgBlue: /* @__PURE__ */ __name(() => Fu, "bgBlue"), bgCyan: /* @__PURE__ */ __name(() => $u, "bgCyan"), bgGreen: /* @__PURE__ */ __name(() => Nu, "bgGreen"), bgMagenta: /* @__PURE__ */ __name(() => Mu, "bgMagenta"), bgRed: /* @__PURE__ */ __name(() => _u, "bgRed"), bgWhite: /* @__PURE__ */ __name(() => qu, "bgWhite"), bgYellow: /* @__PURE__ */ __name(() => Lu, "bgYellow"), black: /* @__PURE__ */ __name(() => Cu, "black"), blue: /* @__PURE__ */ __name(() => nr, "blue"), bold: /* @__PURE__ */ __name(() => W, "bold"), cyan: /* @__PURE__ */ __name(() => De, "cyan"), dim: /* @__PURE__ */ __name(() => Ce, "dim"), gray: /* @__PURE__ */ __name(() => Hr, "gray"), green: /* @__PURE__ */ __name(() => qe, "green"), grey: /* @__PURE__ */ __name(() => Ou, "grey"), hidden: /* @__PURE__ */ __name(() => Ru, "hidden"), inverse: /* @__PURE__ */ __name(() => Su, "inverse"), italic: /* @__PURE__ */ __name(() => Tu, "italic"), magenta: /* @__PURE__ */ __name(() => Iu, "magenta"), red: /* @__PURE__ */ __name(() => ce, "red"), reset: /* @__PURE__ */ __name(() => Pu, "reset"), strikethrough: /* @__PURE__ */ __name(() => Au, "strikethrough"), underline: /* @__PURE__ */ __name(() => Y, "underline"), white: /* @__PURE__ */ __name(() => Du, "white"), yellow: /* @__PURE__ */ __name(() => Ie, "yellow") });
    var oi;
    var Lo;
    var Fo;
    var Mo;
    var $o = true;
    typeof process < "u" && ({ FORCE_COLOR: oi, NODE_DISABLE_COLORS: Lo, NO_COLOR: Fo, TERM: Mo } = process.env || {}, $o = process.stdout && process.stdout.isTTY);
    var qo = { enabled: !Lo && Fo == null && Mo !== "dumb" && (oi != null && oi !== "0" || $o) };
    function F(e, r) {
      let t = new RegExp(`\\x1b\\[${r}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${r}m`;
      return function(o) {
        return !qo.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(t, i + n) : o) + i;
      };
    }
    __name(F, "F");
    var Pu = F(0, 0);
    var W = F(1, 22);
    var Ce = F(2, 22);
    var Tu = F(3, 23);
    var Y = F(4, 24);
    var Su = F(7, 27);
    var Ru = F(8, 28);
    var Au = F(9, 29);
    var Cu = F(30, 39);
    var ce = F(31, 39);
    var qe = F(32, 39);
    var Ie = F(33, 39);
    var nr = F(34, 39);
    var Iu = F(35, 39);
    var De = F(36, 39);
    var Du = F(37, 39);
    var Hr = F(90, 39);
    var Ou = F(90, 39);
    var ku = F(40, 49);
    var _u = F(41, 49);
    var Nu = F(42, 49);
    var Lu = F(43, 49);
    var Fu = F(44, 49);
    var Mu = F(45, 49);
    var $u = F(46, 49);
    var qu = F(47, 49);
    var Vu = 100;
    var Vo = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var Yr = [];
    var jo = Date.now();
    var ju = 0;
    var si = typeof process < "u" ? process.env : {};
    globalThis.DEBUG ??= si.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= si.DEBUG_COLORS ? si.DEBUG_COLORS === "true" : true;
    var zr = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let r = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), t = r.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = r.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return t && !n;
    }, log: /* @__PURE__ */ __name((...e) => {
      let [r, t, ...n] = e;
      (console.warn ?? console.log)(`${r} ${t}`, ...n);
    }, "log"), formatters: {} };
    function Bu(e) {
      let r = { color: Vo[ju++ % Vo.length], enabled: zr.enabled(e), namespace: e, log: zr.log, extend: /* @__PURE__ */ __name(() => {
      }, "extend") }, t = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = r;
        if (n.length !== 0 && Yr.push([o, ...n]), Yr.length > Vu && Yr.shift(), zr.enabled(o) || i) {
          let l = n.map((c) => typeof c == "string" ? c : Uu(c)), u = `+${Date.now() - jo}ms`;
          jo = Date.now(), globalThis.DEBUG_COLORS ? a(Bt[s](W(o)), ...l, Bt[s](u)) : a(o, ...l, u);
        }
      }, "t");
      return new Proxy(t, { get: /* @__PURE__ */ __name((n, i) => r[i], "get"), set: /* @__PURE__ */ __name((n, i, o) => r[i] = o, "set") });
    }
    __name(Bu, "Bu");
    var N = new Proxy(Bu, { get: /* @__PURE__ */ __name((e, r) => zr[r], "get"), set: /* @__PURE__ */ __name((e, r, t) => zr[r] = t, "set") });
    function Uu(e, r = 2) {
      let t = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (t.has(i)) return "[Circular *]";
          t.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, r);
    }
    __name(Uu, "Uu");
    function Bo(e = 7500) {
      let r = Yr.map(([t, ...n]) => `${t} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
      return r.length < e ? r : r.slice(-e);
    }
    __name(Bo, "Bo");
    function Uo() {
      Yr.length = 0;
    }
    __name(Uo, "Uo");
    var gr = N;
    var Go = O(__require("node:fs"));
    function ai() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && Go.default.existsSync(e)) && process.arch === "ia32") throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    __name(ai, "ai");
    var li = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
    var Ut = "libquery_engine";
    function Gt(e, r) {
      let t = r === "url";
      return e.includes("windows") ? t ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? t ? `${Ut}.dylib.node` : `${Ut}-${e}.dylib.node` : t ? `${Ut}.so.node` : `${Ut}-${e}.so.node`;
    }
    __name(Gt, "Gt");
    var Ko = O(__require("node:child_process"));
    var mi = O(__require("node:fs/promises"));
    var Ht = O(__require("node:os"));
    var Oe = Symbol.for("@ts-pattern/matcher");
    var Gu = Symbol.for("@ts-pattern/isVariadic");
    var Wt = "@ts-pattern/anonymous-select-key";
    var ui = /* @__PURE__ */ __name((e) => !!(e && typeof e == "object"), "ui");
    var Qt = /* @__PURE__ */ __name((e) => e && !!e[Oe], "Qt");
    var Ee = /* @__PURE__ */ __name((e, r, t) => {
      if (Qt(e)) {
        let n = e[Oe](), { matched: i, selections: o } = n.match(r);
        return i && o && Object.keys(o).forEach((s) => t(s, o[s])), i;
      }
      if (ui(e)) {
        if (!ui(r)) return false;
        if (Array.isArray(e)) {
          if (!Array.isArray(r)) return false;
          let n = [], i = [], o = [];
          for (let s of e.keys()) {
            let a = e[s];
            Qt(a) && a[Gu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
          }
          if (o.length) {
            if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
            if (r.length < n.length + i.length) return false;
            let s = r.slice(0, n.length), a = i.length === 0 ? [] : r.slice(-i.length), l = r.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
            return n.every((u, c) => Ee(u, s[c], t)) && i.every((u, c) => Ee(u, a[c], t)) && (o.length === 0 || Ee(o[0], l, t));
          }
          return e.length === r.length && e.every((s, a) => Ee(s, r[a], t));
        }
        return Reflect.ownKeys(e).every((n) => {
          let i = e[n];
          return (n in r || Qt(o = i) && o[Oe]().matcherType === "optional") && Ee(i, r[n], t);
          var o;
        });
      }
      return Object.is(r, e);
    }, "Ee");
    var Ge = /* @__PURE__ */ __name((e) => {
      var r, t, n;
      return ui(e) ? Qt(e) ? (r = (t = (n = e[Oe]()).getSelectionKeys) == null ? void 0 : t.call(n)) != null ? r : [] : Array.isArray(e) ? Zr(e, Ge) : Zr(Object.values(e), Ge) : [];
    }, "Ge");
    var Zr = /* @__PURE__ */ __name((e, r) => e.reduce((t, n) => t.concat(r(n)), []), "Zr");
    function pe(e) {
      return Object.assign(e, { optional: /* @__PURE__ */ __name(() => Qu(e), "optional"), and: /* @__PURE__ */ __name((r) => q(e, r), "and"), or: /* @__PURE__ */ __name((r) => Wu(e, r), "or"), select: /* @__PURE__ */ __name((r) => r === void 0 ? Qo(e) : Qo(r, e), "select") });
    }
    __name(pe, "pe");
    function Qu(e) {
      return pe({ [Oe]: () => ({ match: /* @__PURE__ */ __name((r) => {
        let t = {}, n = /* @__PURE__ */ __name((i, o) => {
          t[i] = o;
        }, "n");
        return r === void 0 ? (Ge(e).forEach((i) => n(i, void 0)), { matched: true, selections: t }) : { matched: Ee(e, r, n), selections: t };
      }, "match"), getSelectionKeys: /* @__PURE__ */ __name(() => Ge(e), "getSelectionKeys"), matcherType: "optional" }) });
    }
    __name(Qu, "Qu");
    function q(...e) {
      return pe({ [Oe]: () => ({ match: /* @__PURE__ */ __name((r) => {
        let t = {}, n = /* @__PURE__ */ __name((i, o) => {
          t[i] = o;
        }, "n");
        return { matched: e.every((i) => Ee(i, r, n)), selections: t };
      }, "match"), getSelectionKeys: /* @__PURE__ */ __name(() => Zr(e, Ge), "getSelectionKeys"), matcherType: "and" }) });
    }
    __name(q, "q");
    function Wu(...e) {
      return pe({ [Oe]: () => ({ match: /* @__PURE__ */ __name((r) => {
        let t = {}, n = /* @__PURE__ */ __name((i, o) => {
          t[i] = o;
        }, "n");
        return Zr(e, Ge).forEach((i) => n(i, void 0)), { matched: e.some((i) => Ee(i, r, n)), selections: t };
      }, "match"), getSelectionKeys: /* @__PURE__ */ __name(() => Zr(e, Ge), "getSelectionKeys"), matcherType: "or" }) });
    }
    __name(Wu, "Wu");
    function A(e) {
      return { [Oe]: () => ({ match: /* @__PURE__ */ __name((r) => ({ matched: !!e(r) }), "match") }) };
    }
    __name(A, "A");
    function Qo(...e) {
      let r = typeof e[0] == "string" ? e[0] : void 0, t = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
      return pe({ [Oe]: () => ({ match: /* @__PURE__ */ __name((n) => {
        let i = { [r ?? Wt]: n };
        return { matched: t === void 0 || Ee(t, n, (o, s) => {
          i[o] = s;
        }), selections: i };
      }, "match"), getSelectionKeys: /* @__PURE__ */ __name(() => [r ?? Wt].concat(t === void 0 ? [] : Ge(t)), "getSelectionKeys") }) });
    }
    __name(Qo, "Qo");
    function ye(e) {
      return typeof e == "number";
    }
    __name(ye, "ye");
    function Ve(e) {
      return typeof e == "string";
    }
    __name(Ve, "Ve");
    function je(e) {
      return typeof e == "bigint";
    }
    __name(je, "je");
    var eg = pe(A(function(e) {
      return true;
    }));
    var Be = /* @__PURE__ */ __name((e) => Object.assign(pe(e), { startsWith: /* @__PURE__ */ __name((r) => {
      return Be(q(e, (t = r, A((n) => Ve(n) && n.startsWith(t)))));
      var t;
    }, "startsWith"), endsWith: /* @__PURE__ */ __name((r) => {
      return Be(q(e, (t = r, A((n) => Ve(n) && n.endsWith(t)))));
      var t;
    }, "endsWith"), minLength: /* @__PURE__ */ __name((r) => Be(q(e, ((t) => A((n) => Ve(n) && n.length >= t))(r))), "minLength"), length: /* @__PURE__ */ __name((r) => Be(q(e, ((t) => A((n) => Ve(n) && n.length === t))(r))), "length"), maxLength: /* @__PURE__ */ __name((r) => Be(q(e, ((t) => A((n) => Ve(n) && n.length <= t))(r))), "maxLength"), includes: /* @__PURE__ */ __name((r) => {
      return Be(q(e, (t = r, A((n) => Ve(n) && n.includes(t)))));
      var t;
    }, "includes"), regex: /* @__PURE__ */ __name((r) => {
      return Be(q(e, (t = r, A((n) => Ve(n) && !!n.match(t)))));
      var t;
    }, "regex") }), "Be");
    var rg = Be(A(Ve));
    var be = /* @__PURE__ */ __name((e) => Object.assign(pe(e), { between: /* @__PURE__ */ __name((r, t) => be(q(e, ((n, i) => A((o) => ye(o) && n <= o && i >= o))(r, t))), "between"), lt: /* @__PURE__ */ __name((r) => be(q(e, ((t) => A((n) => ye(n) && n < t))(r))), "lt"), gt: /* @__PURE__ */ __name((r) => be(q(e, ((t) => A((n) => ye(n) && n > t))(r))), "gt"), lte: /* @__PURE__ */ __name((r) => be(q(e, ((t) => A((n) => ye(n) && n <= t))(r))), "lte"), gte: /* @__PURE__ */ __name((r) => be(q(e, ((t) => A((n) => ye(n) && n >= t))(r))), "gte"), int: /* @__PURE__ */ __name(() => be(q(e, A((r) => ye(r) && Number.isInteger(r)))), "int"), finite: /* @__PURE__ */ __name(() => be(q(e, A((r) => ye(r) && Number.isFinite(r)))), "finite"), positive: /* @__PURE__ */ __name(() => be(q(e, A((r) => ye(r) && r > 0))), "positive"), negative: /* @__PURE__ */ __name(() => be(q(e, A((r) => ye(r) && r < 0))), "negative") }), "be");
    var tg = be(A(ye));
    var Ue = /* @__PURE__ */ __name((e) => Object.assign(pe(e), { between: /* @__PURE__ */ __name((r, t) => Ue(q(e, ((n, i) => A((o) => je(o) && n <= o && i >= o))(r, t))), "between"), lt: /* @__PURE__ */ __name((r) => Ue(q(e, ((t) => A((n) => je(n) && n < t))(r))), "lt"), gt: /* @__PURE__ */ __name((r) => Ue(q(e, ((t) => A((n) => je(n) && n > t))(r))), "gt"), lte: /* @__PURE__ */ __name((r) => Ue(q(e, ((t) => A((n) => je(n) && n <= t))(r))), "lte"), gte: /* @__PURE__ */ __name((r) => Ue(q(e, ((t) => A((n) => je(n) && n >= t))(r))), "gte"), positive: /* @__PURE__ */ __name(() => Ue(q(e, A((r) => je(r) && r > 0))), "positive"), negative: /* @__PURE__ */ __name(() => Ue(q(e, A((r) => je(r) && r < 0))), "negative") }), "Ue");
    var ng = Ue(A(je));
    var ig = pe(A(function(e) {
      return typeof e == "boolean";
    }));
    var og = pe(A(function(e) {
      return typeof e == "symbol";
    }));
    var sg = pe(A(function(e) {
      return e == null;
    }));
    var ag = pe(A(function(e) {
      return e != null;
    }));
    var ci = class extends Error {
      static {
        __name(this, "ci");
      }
      constructor(r) {
        let t;
        try {
          t = JSON.stringify(r);
        } catch {
          t = r;
        }
        super(`Pattern matching error: no pattern matches value ${t}`), this.input = void 0, this.input = r;
      }
    };
    var pi = { matched: false, value: void 0 };
    function hr(e) {
      return new di(e, pi);
    }
    __name(hr, "hr");
    var di = class e {
      static {
        __name(this, "e");
      }
      constructor(r, t) {
        this.input = void 0, this.state = void 0, this.input = r, this.state = t;
      }
      with(...r) {
        if (this.state.matched) return this;
        let t = r[r.length - 1], n = [r[0]], i;
        r.length === 3 && typeof r[1] == "function" ? i = r[1] : r.length > 2 && n.push(...r.slice(1, r.length - 1));
        let o = false, s = {}, a = /* @__PURE__ */ __name((u, c) => {
          o = true, s[u] = c;
        }, "a"), l = !n.some((u) => Ee(u, this.input, a)) || i && !i(this.input) ? pi : { matched: true, value: t(o ? Wt in s ? s[Wt] : s : this.input, this.input) };
        return new e(this.input, l);
      }
      when(r, t) {
        if (this.state.matched) return this;
        let n = !!r(this.input);
        return new e(this.input, n ? { matched: true, value: t(this.input, this.input) } : pi);
      }
      otherwise(r) {
        return this.state.matched ? this.state.value : r(this.input);
      }
      exhaustive() {
        if (this.state.matched) return this.state.value;
        throw new ci(this.input);
      }
      run() {
        return this.exhaustive();
      }
      returnType() {
        return this;
      }
    };
    var Ho = __require("node:util");
    var Ju = { warn: Ie("prisma:warn") };
    var Ku = { warn: /* @__PURE__ */ __name(() => !process.env.PRISMA_DISABLE_WARNINGS, "warn") };
    function Jt(e, ...r) {
      Ku.warn() && console.warn(`${Ju.warn} ${e}`, ...r);
    }
    __name(Jt, "Jt");
    var Hu = (0, Ho.promisify)(Ko.default.exec);
    var ee = gr("prisma:get-platform");
    var Yu = ["1.0.x", "1.1.x", "3.0.x"];
    async function Yo() {
      let e = Ht.default.platform(), r = process.arch;
      if (e === "freebsd") {
        let s = await Yt("freebsd-version");
        if (s && s.trim().length > 0) {
          let l = /^(\d+)\.?/.exec(s);
          if (l) return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: r };
        }
      }
      if (e !== "linux") return { platform: e, arch: r };
      let t = await Zu(), n = await sc(), i = ec({ arch: r, archFromUname: n, familyDistro: t.familyDistro }), { libssl: o } = await rc(i);
      return { platform: "linux", libssl: o, arch: r, archFromUname: n, ...t };
    }
    __name(Yo, "Yo");
    function zu(e) {
      let r = /^ID="?([^"\n]*)"?$/im, t = /^ID_LIKE="?([^"\n]*)"?$/im, n = r.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = t.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = hr({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return ee(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    __name(zu, "zu");
    async function Zu() {
      let e = "/etc/os-release";
      try {
        let r = await mi.default.readFile(e, { encoding: "utf-8" });
        return zu(r);
      } catch {
        return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
      }
    }
    __name(Zu, "Zu");
    function Xu(e) {
      let r = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (r) {
        let t = `${r[1]}.x`;
        return zo(t);
      }
    }
    __name(Xu, "Xu");
    function Wo(e) {
      let r = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (r) {
        let t = `${r[1]}${r[2] ?? ".0"}.x`;
        return zo(t);
      }
    }
    __name(Wo, "Wo");
    function zo(e) {
      let r = (() => {
        if (Xo(e)) return e;
        let t = e.split(".");
        return t[1] = "0", t.join(".");
      })();
      if (Yu.includes(r)) return r;
    }
    __name(zo, "zo");
    function ec(e) {
      return hr(e).with({ familyDistro: "musl" }, () => (ee('Trying platform-specific paths for "alpine"'), ["/lib", "/usr/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: r }) => (ee('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${r}-linux-gnu`, `/lib/${r}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (ee('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: r, arch: t, archFromUname: n }) => (ee(`Don't know any platform-specific paths for "${r}" on ${t} (${n})`), []));
    }
    __name(ec, "ec");
    async function rc(e) {
      let r = 'grep -v "libssl.so.0"', t = await Jo(e);
      if (t) {
        ee(`Found libssl.so file using platform-specific paths: ${t}`);
        let o = Wo(t);
        if (ee(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "libssl-specific-path" };
      }
      ee('Falling back to "ldconfig" and other generic paths');
      let n = await Yt(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${r}`);
      if (n || (n = await Jo(["/lib64", "/usr/lib64", "/lib", "/usr/lib"])), n) {
        ee(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
        let o = Wo(n);
        if (ee(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "ldconfig" };
      }
      let i = await Yt("openssl version -v");
      if (i) {
        ee(`Found openssl binary with version: ${i}`);
        let o = Xu(i);
        if (ee(`The parsed openssl version is: ${o}`), o) return { libssl: o, strategy: "openssl-binary" };
      }
      return ee("Couldn't find any version of libssl or OpenSSL in the system"), {};
    }
    __name(rc, "rc");
    async function Jo(e) {
      for (let r of e) {
        let t = await tc(r);
        if (t) return t;
      }
    }
    __name(Jo, "Jo");
    async function tc(e) {
      try {
        return (await mi.default.readdir(e)).find((t) => t.startsWith("libssl.so.") && !t.startsWith("libssl.so.0"));
      } catch (r) {
        if (r.code === "ENOENT") return;
        throw r;
      }
    }
    __name(tc, "tc");
    async function ir() {
      let { binaryTarget: e } = await Zo();
      return e;
    }
    __name(ir, "ir");
    function nc(e) {
      return e.binaryTarget !== void 0;
    }
    __name(nc, "nc");
    async function fi() {
      let { memoized: e, ...r } = await Zo();
      return r;
    }
    __name(fi, "fi");
    var Kt = {};
    async function Zo() {
      if (nc(Kt)) return Promise.resolve({ ...Kt, memoized: true });
      let e = await Yo(), r = ic(e);
      return Kt = { ...e, binaryTarget: r }, { ...Kt, memoized: false };
    }
    __name(Zo, "Zo");
    function ic(e) {
      let { platform: r, arch: t, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      r === "linux" && !["x64", "arm64"].includes(t) && Jt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${t}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (r === "linux" && i === void 0) {
        let c = hr({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        Jt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (r === "linux" && o === void 0 && ee(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), r === "darwin" && t === "arm64") return "darwin-arm64";
      if (r === "darwin") return "darwin";
      if (r === "win32") return "windows";
      if (r === "freebsd") return o;
      if (r === "openbsd") return "openbsd";
      if (r === "netbsd") return "netbsd";
      if (r === "linux" && o === "nixos") return "linux-nixos";
      if (r === "linux" && t === "arm64") return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (r === "linux" && t === "arm") return `linux-arm-openssl-${i || l}`;
      if (r === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || Xo(i) ? c : `${c}-openssl-${i}`;
      }
      return r === "linux" && o && i ? `${o}-openssl-${i}` : (r !== "linux" && Jt(`Prisma detected unknown OS "${r}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    __name(ic, "ic");
    async function oc(e) {
      try {
        return await e();
      } catch {
        return;
      }
    }
    __name(oc, "oc");
    function Yt(e) {
      return oc(async () => {
        let r = await Hu(e);
        return ee(`Command "${e}" successfully returned "${r.stdout}"`), r.stdout;
      });
    }
    __name(Yt, "Yt");
    async function sc() {
      return typeof Ht.default.machine == "function" ? Ht.default.machine() : (await Yt("uname -m"))?.trim();
    }
    __name(sc, "sc");
    function Xo(e) {
      return e.startsWith("1.");
    }
    __name(Xo, "Xo");
    var Xt = {};
    tr(Xt, { beep: /* @__PURE__ */ __name(() => kc, "beep"), clearScreen: /* @__PURE__ */ __name(() => Cc, "clearScreen"), clearTerminal: /* @__PURE__ */ __name(() => Ic, "clearTerminal"), cursorBackward: /* @__PURE__ */ __name(() => mc, "cursorBackward"), cursorDown: /* @__PURE__ */ __name(() => pc, "cursorDown"), cursorForward: /* @__PURE__ */ __name(() => dc, "cursorForward"), cursorGetPosition: /* @__PURE__ */ __name(() => hc, "cursorGetPosition"), cursorHide: /* @__PURE__ */ __name(() => Ec, "cursorHide"), cursorLeft: /* @__PURE__ */ __name(() => ts, "cursorLeft"), cursorMove: /* @__PURE__ */ __name(() => cc, "cursorMove"), cursorNextLine: /* @__PURE__ */ __name(() => yc, "cursorNextLine"), cursorPrevLine: /* @__PURE__ */ __name(() => bc, "cursorPrevLine"), cursorRestorePosition: /* @__PURE__ */ __name(() => gc, "cursorRestorePosition"), cursorSavePosition: /* @__PURE__ */ __name(() => fc, "cursorSavePosition"), cursorShow: /* @__PURE__ */ __name(() => wc, "cursorShow"), cursorTo: /* @__PURE__ */ __name(() => uc, "cursorTo"), cursorUp: /* @__PURE__ */ __name(() => rs, "cursorUp"), enterAlternativeScreen: /* @__PURE__ */ __name(() => Dc, "enterAlternativeScreen"), eraseDown: /* @__PURE__ */ __name(() => Tc, "eraseDown"), eraseEndLine: /* @__PURE__ */ __name(() => vc, "eraseEndLine"), eraseLine: /* @__PURE__ */ __name(() => ns, "eraseLine"), eraseLines: /* @__PURE__ */ __name(() => xc, "eraseLines"), eraseScreen: /* @__PURE__ */ __name(() => gi, "eraseScreen"), eraseStartLine: /* @__PURE__ */ __name(() => Pc, "eraseStartLine"), eraseUp: /* @__PURE__ */ __name(() => Sc, "eraseUp"), exitAlternativeScreen: /* @__PURE__ */ __name(() => Oc, "exitAlternativeScreen"), iTerm: /* @__PURE__ */ __name(() => Lc, "iTerm"), image: /* @__PURE__ */ __name(() => Nc, "image"), link: /* @__PURE__ */ __name(() => _c, "link"), scrollDown: /* @__PURE__ */ __name(() => Ac, "scrollDown"), scrollUp: /* @__PURE__ */ __name(() => Rc, "scrollUp") });
    var Zt = O(__require("node:process"), 1);
    var zt = globalThis.window?.document !== void 0;
    var gg = globalThis.process?.versions?.node !== void 0;
    var hg = globalThis.process?.versions?.bun !== void 0;
    var yg = globalThis.Deno?.version?.deno !== void 0;
    var bg = globalThis.process?.versions?.electron !== void 0;
    var Eg = globalThis.navigator?.userAgent?.includes("jsdom") === true;
    var wg = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
    var xg = typeof DedicatedWorkerGlobalScope < "u" && globalThis instanceof DedicatedWorkerGlobalScope;
    var vg = typeof SharedWorkerGlobalScope < "u" && globalThis instanceof SharedWorkerGlobalScope;
    var Pg = typeof ServiceWorkerGlobalScope < "u" && globalThis instanceof ServiceWorkerGlobalScope;
    var Xr = globalThis.navigator?.userAgentData?.platform;
    var Tg = Xr === "macOS" || globalThis.navigator?.platform === "MacIntel" || globalThis.navigator?.userAgent?.includes(" Mac ") === true || globalThis.process?.platform === "darwin";
    var Sg = Xr === "Windows" || globalThis.navigator?.platform === "Win32" || globalThis.process?.platform === "win32";
    var Rg = Xr === "Linux" || globalThis.navigator?.platform?.startsWith("Linux") === true || globalThis.navigator?.userAgent?.includes(" Linux ") === true || globalThis.process?.platform === "linux";
    var Ag = Xr === "iOS" || globalThis.navigator?.platform === "MacIntel" && globalThis.navigator?.maxTouchPoints > 1 || /iPad|iPhone|iPod/.test(globalThis.navigator?.platform);
    var Cg = Xr === "Android" || globalThis.navigator?.platform === "Android" || globalThis.navigator?.userAgent?.includes(" Android ") === true || globalThis.process?.platform === "android";
    var C = "\x1B[";
    var rt = "\x1B]";
    var yr = "\x07";
    var et = ";";
    var es = !zt && Zt.default.env.TERM_PROGRAM === "Apple_Terminal";
    var ac = !zt && Zt.default.platform === "win32";
    var lc = zt ? () => {
      throw new Error("`process.cwd()` only works in Node.js, not the browser.");
    } : Zt.default.cwd;
    var uc = /* @__PURE__ */ __name((e, r) => {
      if (typeof e != "number") throw new TypeError("The `x` argument is required");
      return typeof r != "number" ? C + (e + 1) + "G" : C + (r + 1) + et + (e + 1) + "H";
    }, "uc");
    var cc = /* @__PURE__ */ __name((e, r) => {
      if (typeof e != "number") throw new TypeError("The `x` argument is required");
      let t = "";
      return e < 0 ? t += C + -e + "D" : e > 0 && (t += C + e + "C"), r < 0 ? t += C + -r + "A" : r > 0 && (t += C + r + "B"), t;
    }, "cc");
    var rs = /* @__PURE__ */ __name((e = 1) => C + e + "A", "rs");
    var pc = /* @__PURE__ */ __name((e = 1) => C + e + "B", "pc");
    var dc = /* @__PURE__ */ __name((e = 1) => C + e + "C", "dc");
    var mc = /* @__PURE__ */ __name((e = 1) => C + e + "D", "mc");
    var ts = C + "G";
    var fc = es ? "\x1B7" : C + "s";
    var gc = es ? "\x1B8" : C + "u";
    var hc = C + "6n";
    var yc = C + "E";
    var bc = C + "F";
    var Ec = C + "?25l";
    var wc = C + "?25h";
    var xc = /* @__PURE__ */ __name((e) => {
      let r = "";
      for (let t = 0; t < e; t++) r += ns + (t < e - 1 ? rs() : "");
      return e && (r += ts), r;
    }, "xc");
    var vc = C + "K";
    var Pc = C + "1K";
    var ns = C + "2K";
    var Tc = C + "J";
    var Sc = C + "1J";
    var gi = C + "2J";
    var Rc = C + "S";
    var Ac = C + "T";
    var Cc = "\x1Bc";
    var Ic = ac ? `${gi}${C}0f` : `${gi}${C}3J${C}H`;
    var Dc = C + "?1049h";
    var Oc = C + "?1049l";
    var kc = yr;
    var _c = /* @__PURE__ */ __name((e, r) => [rt, "8", et, et, r, yr, e, rt, "8", et, et, yr].join(""), "_c");
    var Nc = /* @__PURE__ */ __name((e, r = {}) => {
      let t = `${rt}1337;File=inline=1`;
      return r.width && (t += `;width=${r.width}`), r.height && (t += `;height=${r.height}`), r.preserveAspectRatio === false && (t += ";preserveAspectRatio=0"), t + ":" + Buffer.from(e).toString("base64") + yr;
    }, "Nc");
    var Lc = { setCwd: /* @__PURE__ */ __name((e = lc()) => `${rt}50;CurrentDir=${e}${yr}`, "setCwd"), annotation(e, r = {}) {
      let t = `${rt}1337;`, n = r.x !== void 0, i = r.y !== void 0;
      if ((n || i) && !(n && i && r.length !== void 0)) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
      return e = e.replaceAll("|", ""), t += r.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", r.length > 0 ? t += (n ? [e, r.length, r.x, r.y] : [r.length, e]).join("|") : t += e, t + yr;
    } };
    var en = O(cs(), 1);
    function or(e, r, { target: t = "stdout", ...n } = {}) {
      return en.default[t] ? Xt.link(e, r) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, r) : `${e} (​${r}​)`;
    }
    __name(or, "or");
    or.isSupported = en.default.stdout;
    or.stderr = (e, r, t = {}) => or(e, r, { target: "stderr", ...t });
    or.stderr.isSupported = en.default.stderr;
    function wi(e) {
      return or(e, e, { fallback: Y });
    }
    __name(wi, "wi");
    var Vc = ps();
    var xi = Vc.version;
    function Er(e) {
      let r = jc();
      return r || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : e?.config.engineType === "client" ? "client" : Bc());
    }
    __name(Er, "Er");
    function jc() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : e === "client" ? "client" : void 0;
    }
    __name(jc, "jc");
    function Bc() {
      return "library";
    }
    __name(Bc, "Bc");
    function vi(e) {
      return e.name === "DriverAdapterError" && typeof e.cause == "object";
    }
    __name(vi, "vi");
    function rn(e) {
      return { ok: true, value: e, map(r) {
        return rn(r(e));
      }, flatMap(r) {
        return r(e);
      } };
    }
    __name(rn, "rn");
    function sr(e) {
      return { ok: false, error: e, map() {
        return sr(e);
      }, flatMap() {
        return sr(e);
      } };
    }
    __name(sr, "sr");
    var ds = N("driver-adapter-utils");
    var Pi = class {
      static {
        __name(this, "Pi");
      }
      registeredErrors = [];
      consumeError(r) {
        return this.registeredErrors[r];
      }
      registerNewError(r) {
        let t = 0;
        for (; this.registeredErrors[t] !== void 0; ) t++;
        return this.registeredErrors[t] = { error: r }, t;
      }
    };
    var tn = /* @__PURE__ */ __name((e, r = new Pi()) => {
      let t = { adapterName: e.adapterName, errorRegistry: r, queryRaw: ke(r, e.queryRaw.bind(e)), executeRaw: ke(r, e.executeRaw.bind(e)), executeScript: ke(r, e.executeScript.bind(e)), dispose: ke(r, e.dispose.bind(e)), provider: e.provider, startTransaction: /* @__PURE__ */ __name(async (...n) => (await ke(r, e.startTransaction.bind(e))(...n)).map((o) => Uc(r, o)), "startTransaction") };
      return e.getConnectionInfo && (t.getConnectionInfo = Gc(r, e.getConnectionInfo.bind(e))), t;
    }, "tn");
    var Uc = /* @__PURE__ */ __name((e, r) => ({ adapterName: r.adapterName, provider: r.provider, options: r.options, queryRaw: ke(e, r.queryRaw.bind(r)), executeRaw: ke(e, r.executeRaw.bind(r)), commit: ke(e, r.commit.bind(r)), rollback: ke(e, r.rollback.bind(r)) }), "Uc");
    function ke(e, r) {
      return async (...t) => {
        try {
          return rn(await r(...t));
        } catch (n) {
          if (ds("[error@wrapAsync]", n), vi(n)) return sr(n.cause);
          let i = e.registerNewError(n);
          return sr({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(ke, "ke");
    function Gc(e, r) {
      return (...t) => {
        try {
          return rn(r(...t));
        } catch (n) {
          if (ds("[error@wrapSync]", n), vi(n)) return sr(n.cause);
          let i = e.registerNewError(n);
          return sr({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(Gc, "Gc");
    var Wc = O(on());
    var M = O(__require("node:path"));
    var Jc = O(on());
    var wh = N("prisma:engines");
    function ms() {
      return M.default.join(__dirname, "../");
    }
    __name(ms, "ms");
    M.default.join(__dirname, "../query-engine-darwin");
    M.default.join(__dirname, "../query-engine-darwin-arm64");
    M.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    M.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    M.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    M.default.join(__dirname, "../query-engine-linux-static-x64");
    M.default.join(__dirname, "../query-engine-linux-static-arm64");
    M.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    M.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    M.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    M.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    M.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../query_engine-windows.dll.node");
    var Si = O(__require("node:fs"));
    var fs = gr("chmodPlusX");
    function Ri(e) {
      if (process.platform === "win32") return;
      let r = Si.default.statSync(e), t = r.mode | 64 | 8 | 1;
      if (r.mode === t) {
        fs(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = t.toString(8).slice(-3);
      fs(`Have to call chmodPlusX on ${e}`), Si.default.chmodSync(e, n);
    }
    __name(Ri, "Ri");
    function Ai(e) {
      let r = e.e, t = /* @__PURE__ */ __name((a) => `Prisma cannot find the required \`${a}\` system library in your system`, "t"), n = r.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${wi("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Ce(e.id)}\`).`, s = hr({ message: r.message, code: r.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${t("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${t("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${t("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${r.message}`;
    }
    __name(Ai, "Ai");
    var ys = O(hs(), 1);
    function Ci(e) {
      let r = (0, ys.default)(e);
      if (r === 0) return e;
      let t = new RegExp(`^[ \\t]{${r}}`, "gm");
      return e.replace(t, "");
    }
    __name(Ci, "Ci");
    var bs = "prisma+postgres";
    var sn = `${bs}:`;
    function an(e) {
      return e?.toString().startsWith(`${sn}//`) ?? false;
    }
    __name(an, "an");
    function Ii(e) {
      if (!an(e)) return false;
      let { host: r } = new URL(e);
      return r.includes("localhost") || r.includes("127.0.0.1") || r.includes("[::1]");
    }
    __name(Ii, "Ii");
    var ws = O(Di());
    function ki(e) {
      return String(new Oi(e));
    }
    __name(ki, "ki");
    var Oi = class {
      static {
        __name(this, "Oi");
      }
      constructor(r) {
        this.config = r;
      }
      toString() {
        let { config: r } = this, t = r.provider.fromEnvVar ? `env("${r.provider.fromEnvVar}")` : r.provider.value, n = JSON.parse(JSON.stringify({ provider: t, binaryTargets: Kc(r.binaryTargets) }));
        return `generator ${r.name} {
${(0, ws.default)(Hc(n), 2)}
}`;
      }
    };
    function Kc(e) {
      let r;
      if (e.length > 0) {
        let t = e.find((n) => n.fromEnvVar !== null);
        t ? r = `env("${t.fromEnvVar}")` : r = e.map((n) => n.native ? "native" : n.value);
      } else r = void 0;
      return r;
    }
    __name(Kc, "Kc");
    function Hc(e) {
      let r = Object.keys(e).reduce((t, n) => Math.max(t, n.length), 0);
      return Object.entries(e).map(([t, n]) => `${t.padEnd(r)} = ${Yc(n)}`).join(`
`);
    }
    __name(Hc, "Hc");
    function Yc(e) {
      return JSON.parse(JSON.stringify(e, (r, t) => Array.isArray(t) ? `[${t.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(t)));
    }
    __name(Yc, "Yc");
    var nt = {};
    tr(nt, { error: /* @__PURE__ */ __name(() => Xc, "error"), info: /* @__PURE__ */ __name(() => Zc, "info"), log: /* @__PURE__ */ __name(() => zc, "log"), query: /* @__PURE__ */ __name(() => ep, "query"), should: /* @__PURE__ */ __name(() => xs, "should"), tags: /* @__PURE__ */ __name(() => tt, "tags"), warn: /* @__PURE__ */ __name(() => _i, "warn") });
    var tt = { error: ce("prisma:error"), warn: Ie("prisma:warn"), info: De("prisma:info"), query: nr("prisma:query") };
    var xs = { warn: /* @__PURE__ */ __name(() => !process.env.PRISMA_DISABLE_WARNINGS, "warn") };
    function zc(...e) {
      console.log(...e);
    }
    __name(zc, "zc");
    function _i(e, ...r) {
      xs.warn() && console.warn(`${tt.warn} ${e}`, ...r);
    }
    __name(_i, "_i");
    function Zc(e, ...r) {
      console.info(`${tt.info} ${e}`, ...r);
    }
    __name(Zc, "Zc");
    function Xc(e, ...r) {
      console.error(`${tt.error} ${e}`, ...r);
    }
    __name(Xc, "Xc");
    function ep(e, ...r) {
      console.log(`${tt.query} ${e}`, ...r);
    }
    __name(ep, "ep");
    function ln(e, r) {
      if (!e) throw new Error(`${r}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    __name(ln, "ln");
    function ar(e, r) {
      throw new Error(r);
    }
    __name(ar, "ar");
    function Ni({ onlyFirst: e = false } = {}) {
      let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
      return new RegExp(t, e ? void 0 : "g");
    }
    __name(Ni, "Ni");
    var rp = Ni();
    function wr(e) {
      if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
      return e.replace(rp, "");
    }
    __name(wr, "wr");
    var it = O(__require("node:path"));
    function Li(e) {
      return it.default.sep === it.default.posix.sep ? e : e.split(it.default.sep).join(it.default.posix.sep);
    }
    __name(Li, "Li");
    var qi = O(As());
    var un = O(__require("node:fs"));
    var xr = O(__require("node:path"));
    function Cs(e) {
      let r = e.ignoreProcessEnv ? {} : process.env, t = /* @__PURE__ */ __name((n) => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
        let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
        if (!a) return o;
        let l = a[1], u, c;
        if (l === "\\") c = a[0], u = c.replace("\\$", "$");
        else {
          let p = a[2];
          c = a[0].substring(l.length), u = Object.hasOwnProperty.call(r, p) ? r[p] : e.parsed[p] || "", u = t(u);
        }
        return o.replace(c, u);
      }, n) ?? n, "t");
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(r, n) ? r[n] : e.parsed[n];
        e.parsed[n] = t(i);
      }
      for (let n in e.parsed) r[n] = e.parsed[n];
      return e;
    }
    __name(Cs, "Cs");
    var $i = gr("prisma:tryLoadEnv");
    function st({ rootEnvPath: e, schemaEnvPath: r }, t = { conflictCheck: "none" }) {
      let n = Is(e);
      t.conflictCheck !== "none" && hp(n, r, t.conflictCheck);
      let i = null;
      return Ds(n?.path, r) || (i = Is(r)), !n && !i && $i("No Environment variables loaded"), i?.dotenvResult.error ? console.error(ce(W("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
    }
    __name(st, "st");
    function hp(e, r, t) {
      let n = e?.dotenvResult.parsed, i = !Ds(e?.path, r);
      if (n && r && i && un.default.existsSync(r)) {
        let o = qi.default.parse(un.default.readFileSync(r)), s = [];
        for (let a in o) n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = xr.default.relative(process.cwd(), e.path), l = xr.default.relative(process.cwd(), r);
          if (t === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${Y(a)} and ${Y(l)}
Conflicting env vars:
${s.map((c) => `  ${W(c)}`).join(`
`)}

We suggest to move the contents of ${Y(l)} to ${Y(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (t === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => W(c)).join(", ")} in ${Y(a)} and ${Y(l)}
Env vars from ${Y(l)} overwrite the ones from ${Y(a)}
      `;
            console.warn(`${Ie("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    __name(hp, "hp");
    function Is(e) {
      if (yp(e)) {
        $i(`Environment variables loaded from ${e}`);
        let r = qi.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 });
        return { dotenvResult: Cs(r), message: Ce(`Environment variables loaded from ${xr.default.relative(process.cwd(), e)}`), path: e };
      } else $i(`Environment variables not found at ${e}`);
      return null;
    }
    __name(Is, "Is");
    function Ds(e, r) {
      return e && r && xr.default.resolve(e) === xr.default.resolve(r);
    }
    __name(Ds, "Ds");
    function yp(e) {
      return !!(e && un.default.existsSync(e));
    }
    __name(yp, "yp");
    function Vi(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }
    __name(Vi, "Vi");
    function pn(e, r) {
      let t = {};
      for (let n of Object.keys(e)) t[n] = r(e[n], n);
      return t;
    }
    __name(pn, "pn");
    function ji(e, r) {
      if (e.length === 0) return;
      let t = e[0];
      for (let n = 1; n < e.length; n++) r(t, e[n]) < 0 && (t = e[n]);
      return t;
    }
    __name(ji, "ji");
    function x(e, r) {
      Object.defineProperty(e, "name", { value: r, configurable: true });
    }
    __name(x, "x");
    var ks = /* @__PURE__ */ new Set();
    var at = /* @__PURE__ */ __name((e, r, ...t) => {
      ks.has(e) || (ks.add(e), _i(r, ...t));
    }, "at");
    var P = class e extends Error {
      static {
        __name(this, "e");
      }
      clientVersion;
      errorCode;
      retryable;
      constructor(r, t, n) {
        super(r), this.name = "PrismaClientInitializationError", this.clientVersion = t, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    x(P, "PrismaClientInitializationError");
    var z = class extends Error {
      static {
        __name(this, "z");
      }
      code;
      meta;
      clientVersion;
      batchRequestIdx;
      constructor(r, { code: t, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(r), this.name = "PrismaClientKnownRequestError", this.code = t, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    x(z, "PrismaClientKnownRequestError");
    var ae = class extends Error {
      static {
        __name(this, "ae");
      }
      clientVersion;
      constructor(r, t) {
        super(r), this.name = "PrismaClientRustPanicError", this.clientVersion = t;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    x(ae, "PrismaClientRustPanicError");
    var V = class extends Error {
      static {
        __name(this, "V");
      }
      clientVersion;
      batchRequestIdx;
      constructor(r, { clientVersion: t, batchRequestIdx: n }) {
        super(r), this.name = "PrismaClientUnknownRequestError", this.clientVersion = t, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    x(V, "PrismaClientUnknownRequestError");
    var Z = class extends Error {
      static {
        __name(this, "Z");
      }
      name = "PrismaClientValidationError";
      clientVersion;
      constructor(r, { clientVersion: t }) {
        super(r), this.clientVersion = t;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    x(Z, "PrismaClientValidationError");
    var we = class {
      static {
        __name(this, "we");
      }
      _map = /* @__PURE__ */ new Map();
      get(r) {
        return this._map.get(r)?.value;
      }
      set(r, t) {
        this._map.set(r, { value: t });
      }
      getOrCreate(r, t) {
        let n = this._map.get(r);
        if (n) return n.value;
        let i = t();
        return this.set(r, i), i;
      }
    };
    function We(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(We, "We");
    function _s(e, r) {
      let t = {};
      for (let n of e) {
        let i = n[r];
        t[i] = n;
      }
      return t;
    }
    __name(_s, "_s");
    function lt(e) {
      let r;
      return { get() {
        return r || (r = { value: e() }), r.value;
      } };
    }
    __name(lt, "lt");
    function Ns(e) {
      return { models: Bi(e.models), enums: Bi(e.enums), types: Bi(e.types) };
    }
    __name(Ns, "Ns");
    function Bi(e) {
      let r = {};
      for (let { name: t, ...n } of e) r[t] = n;
      return r;
    }
    __name(Bi, "Bi");
    function vr(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(vr, "vr");
    function mn(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(mn, "mn");
    var Pr = 9e15;
    var Ye = 1e9;
    var Ui = "0123456789abcdef";
    var hn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var yn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var Gi = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Pr, maxE: Pr, crypto: false };
    var $s;
    var Ne;
    var w = true;
    var En = "[DecimalError] ";
    var He = En + "Invalid argument: ";
    var qs = En + "Precision limit exceeded";
    var Vs = En + "crypto unavailable";
    var js = "[object Decimal]";
    var X = Math.floor;
    var U = Math.pow;
    var bp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var Ep = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var wp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var Bs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var fe = 1e7;
    var E = 7;
    var xp = 9007199254740991;
    var vp = hn.length - 1;
    var Qi = yn.length - 1;
    var m = { toStringTag: js };
    m.absoluteValue = m.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), y(e);
    };
    m.ceil = function() {
      return y(new this.constructor(this), this.e + 1, 2);
    };
    m.clampedTo = m.clamp = function(e, r) {
      var t, n = this, i = n.constructor;
      if (e = new i(e), r = new i(r), !e.s || !r.s) return new i(NaN);
      if (e.gt(r)) throw Error(He + r);
      return t = n.cmp(e), t < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
    };
    m.comparedTo = m.cmp = function(e) {
      var r, t, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a) return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
      if (l !== u) return l;
      if (o.e !== e.e) return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, r = 0, t = n < i ? n : i; r < t; ++r) if (s[r] !== a[r]) return s[r] > a[r] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    m.cosine = m.cos = function() {
      var e, r, t = this, n = t.constructor;
      return t.d ? t.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = Pp(n, Js(n, t)), n.precision = e, n.rounding = r, y(Ne == 2 || Ne == 3 ? t.neg() : t, e, r, true)) : new n(1) : new n(NaN);
    };
    m.cubeRoot = m.cbrt = function() {
      var e, r, t, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero()) return new p(c);
      for (w = false, o = c.s * U(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (t = J(c.d), e = c.e, (o = (e - t.length + 1) % 3) && (t += o == 1 || o == -2 ? "0" : "00"), o = U(t, 1 / 3), e = X((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new p(t), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; ) if (a = n, l = a.times(a).times(a), u = l.plus(c), n = L(u.plus(c).times(a), u.plus(l), s + 2, 1), J(a.d).slice(0, s) === (t = J(n.d)).slice(0, s)) if (t = t.slice(s - 3, s + 1), t == "9999" || !i && t == "4999") {
        if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        s += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, e + 1, 1), r = !n.times(n).times(n).eq(c));
        break;
      }
      return w = true, y(n, e, p.rounding, r);
    };
    m.decimalPlaces = m.dp = function() {
      var e, r = this.d, t = NaN;
      if (r) {
        if (e = r.length - 1, t = (e - X(this.e / E)) * E, e = r[e], e) for (; e % 10 == 0; e /= 10) t--;
        t < 0 && (t = 0);
      }
      return t;
    };
    m.dividedBy = m.div = function(e) {
      return L(this, new this.constructor(e));
    };
    m.dividedToIntegerBy = m.divToInt = function(e) {
      var r = this, t = r.constructor;
      return y(L(r, new t(e), 0, 1, 1), t.precision, t.rounding);
    };
    m.equals = m.eq = function(e) {
      return this.cmp(e) === 0;
    };
    m.floor = function() {
      return y(new this.constructor(this), this.e + 1, 3);
    };
    m.greaterThan = m.gt = function(e) {
      return this.cmp(e) > 0;
    };
    m.greaterThanOrEqualTo = m.gte = function(e) {
      var r = this.cmp(e);
      return r == 1 || r === 0;
    };
    m.hyperbolicCosine = m.cosh = function() {
      var e, r, t, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero()) return a;
      t = s.precision, n = s.rounding, s.precision = t + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / xn(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Tr(s, 1, o.times(r), new s(1), true);
      for (var l, u = e, c = new s(8); u--; ) l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return y(o, s.precision = t, s.rounding = n, true);
    };
    m.hyperbolicSine = m.sinh = function() {
      var e, r, t, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero()) return new o(i);
      if (r = o.precision, t = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = Tr(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / xn(5, e)), i = Tr(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; ) s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = r, o.rounding = t, y(i, r, t, true);
    };
    m.hyperbolicTangent = m.tanh = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, L(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s);
    };
    m.inverseCosine = m.acos = function() {
      var e = this, r = e.constructor, t = e.abs().cmp(1), n = r.precision, i = r.rounding;
      return t !== -1 ? t === 0 ? e.isNeg() ? xe(r, n, i) : new r(0) : new r(NaN) : e.isZero() ? xe(r, n + 4, i).times(0.5) : (r.precision = n + 6, r.rounding = 1, e = new r(1).minus(e).div(e.plus(1)).sqrt().atan(), r.precision = n, r.rounding = i, e.times(2));
    };
    m.inverseHyperbolicCosine = m.acosh = function() {
      var e, r, t = this, n = t.constructor;
      return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, w = false, t = t.times(t).minus(1).sqrt().plus(t), w = true, n.precision = e, n.rounding = r, t.ln()) : new n(t);
    };
    m.inverseHyperbolicSine = m.asinh = function() {
      var e, r, t = this, n = t.constructor;
      return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, w = false, t = t.times(t).plus(1).sqrt().plus(t), w = true, n.precision = e, n.rounding = r, t.ln());
    };
    m.inverseHyperbolicTangent = m.atanh = function() {
      var e, r, t, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, r = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? y(new o(i), e, r, true) : (o.precision = t = n - i.e, i = L(i.plus(1), new o(1).minus(i), t + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = r, i.times(0.5))) : new o(NaN);
    };
    m.inverseSine = m.asin = function() {
      var e, r, t, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (r = i.abs().cmp(1), t = o.precision, n = o.rounding, r !== -1 ? r === 0 ? (e = xe(o, t + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = t + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = t, o.rounding = n, i.times(2)));
    };
    m.inverseTangent = m.atan = function() {
      var e, r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
      if (u.isFinite()) {
        if (u.isZero()) return new c(u);
        if (u.abs().eq(1) && p + 4 <= Qi) return s = xe(c, p + 4, d).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s) return new c(NaN);
        if (p + 4 <= Qi) return s = xe(c, p + 4, d).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, t = Math.min(28, a / E + 2 | 0), e = t; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (w = false, r = Math.ceil(a / E), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; ) if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[r] !== void 0) for (e = r; s.d[e] === o.d[e] && e--; ) ;
      return t && (s = s.times(2 << t - 1)), w = true, y(s, c.precision = p, c.rounding = d, true);
    };
    m.isFinite = function() {
      return !!this.d;
    };
    m.isInteger = m.isInt = function() {
      return !!this.d && X(this.e / E) > this.d.length - 2;
    };
    m.isNaN = function() {
      return !this.s;
    };
    m.isNegative = m.isNeg = function() {
      return this.s < 0;
    };
    m.isPositive = m.isPos = function() {
      return this.s > 0;
    };
    m.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    m.lessThan = m.lt = function(e) {
      return this.cmp(e) < 0;
    };
    m.lessThanOrEqualTo = m.lte = function(e) {
      return this.cmp(e) < 1;
    };
    m.logarithm = m.log = function(e) {
      var r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
      if (e == null) e = new c(10), r = true;
      else {
        if (e = new c(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1)) return new c(NaN);
        r = e.eq(10);
      }
      if (t = u.d, u.s < 0 || !t || !t[0] || u.eq(1)) return new c(t && !t[0] ? -1 / 0 : u.s != 1 ? NaN : t ? 0 : 1 / 0);
      if (r) if (t.length > 1) o = true;
      else {
        for (i = t[0]; i % 10 === 0; ) i /= 10;
        o = i !== 1;
      }
      if (w = false, a = p + f, s = Ke(u, a), n = r ? bn(c, a + 10) : Ke(e, a), l = L(s, n, a, 1), ut(l.d, i = p, d)) do
        if (a += 10, s = Ke(u, a), n = r ? bn(c, a + 10) : Ke(e, a), l = L(s, n, a, 1), !o) {
          +J(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = y(l, p + 1, 0));
          break;
        }
      while (ut(l.d, i += 10, d));
      return w = true, y(l, p, d);
    };
    m.minus = m.sub = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p, d, f = this, h = f.constructor;
      if (e = new h(e), !f.d || !e.d) return !f.s || !e.s ? e = new h(NaN) : f.d ? e.s = -e.s : e = new h(e.d || f.s !== e.s ? f : NaN), e;
      if (f.s != e.s) return e.s = -e.s, f.plus(e);
      if (u = f.d, d = e.d, a = h.precision, l = h.rounding, !u[0] || !d[0]) {
        if (d[0]) e.s = -e.s;
        else if (u[0]) e = new h(f);
        else return new h(l === 3 ? -0 : 0);
        return w ? y(e, a, l) : e;
      }
      if (t = X(e.e / E), c = X(f.e / E), u = u.slice(), o = c - t, o) {
        for (p = o < 0, p ? (r = u, o = -o, s = d.length) : (r = d, t = c, s = u.length), n = Math.max(Math.ceil(a / E), s) + 2, o > n && (o = n, r.length = 1), r.reverse(), n = o; n--; ) r.push(0);
        r.reverse();
      } else {
        for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++) if (u[n] != d[n]) {
          p = u[n] < d[n];
          break;
        }
        o = 0;
      }
      for (p && (r = u, u = d, d = r, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n) u[s++] = 0;
      for (n = d.length; n > o; ) {
        if (u[--n] < d[n]) {
          for (i = n; i && u[--i] === 0; ) u[i] = fe - 1;
          --u[i], u[n] += fe;
        }
        u[n] -= d[n];
      }
      for (; u[--s] === 0; ) u.pop();
      for (; u[0] === 0; u.shift()) --t;
      return u[0] ? (e.d = u, e.e = wn(u, t), w ? y(e, a, l) : e) : new h(l === 3 ? -0 : 0);
    };
    m.modulo = m.mod = function(e) {
      var r, t = this, n = t.constructor;
      return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? y(new n(t), n.precision, n.rounding) : (w = false, n.modulo == 9 ? (r = L(t, e.abs(), 0, 3, 1), r.s *= e.s) : r = L(t, e, 0, n.modulo, 1), r = r.times(e), w = true, t.minus(r));
    };
    m.naturalExponential = m.exp = function() {
      return Wi(this);
    };
    m.naturalLogarithm = m.ln = function() {
      return Ke(this);
    };
    m.negated = m.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, y(e);
    };
    m.plus = m.add = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
      if (e = new d(e), !p.d || !e.d) return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s) return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0]) return c[0] || (e = new d(p)), w ? y(e, a, l) : e;
      if (o = X(p.e / E), n = X(e.e / E), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (t = u, i = -i, s = c.length) : (t = c, n = o, s = u.length), o = Math.ceil(a / E), s = o > s ? o + 1 : s + 1, i > s && (i = s, t.length = 1), t.reverse(); i--; ) t.push(0);
        t.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, t = c, c = u, u = t), r = 0; i; ) r = (u[--i] = u[i] + c[i] + r) / fe | 0, u[i] %= fe;
      for (r && (u.unshift(r), ++n), s = u.length; u[--s] == 0; ) u.pop();
      return e.d = u, e.e = wn(u, n), w ? y(e, a, l) : e;
    };
    m.precision = m.sd = function(e) {
      var r, t = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(He + e);
      return t.d ? (r = Us(t.d), e && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
    };
    m.round = function() {
      var e = this, r = e.constructor;
      return y(new r(e), e.e + 1, r.rounding);
    };
    m.sine = m.sin = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = Sp(n, Js(n, t)), n.precision = e, n.rounding = r, y(Ne > 2 ? t.neg() : t, e, r, true)) : new n(NaN);
    };
    m.squareRoot = m.sqrt = function() {
      var e, r, t, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (w = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (r = J(a), (r.length + l) % 2 == 0 && (r += "0"), u = Math.sqrt(r), l = X((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? r = "5e" + l : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + l), n = new c(r)) : n = new c(u.toString()), t = (l = c.precision) + 3; ; ) if (o = n, n = o.plus(L(s, o, t + 2, 1)).times(0.5), J(o.d).slice(0, t) === (r = J(n.d)).slice(0, t)) if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
        if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        t += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, l + 1, 1), e = !n.times(n).eq(s));
        break;
      }
      return w = true, y(n, l, c.rounding, e);
    };
    m.tangent = m.tan = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = L(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, y(Ne == 2 || Ne == 4 ? t.neg() : t, e, r, true)) : new n(NaN);
    };
    m.times = m.mul = function(e) {
      var r, t, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
      if (e.s *= c.s, !d || !d[0] || !f || !f[0]) return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
      for (t = X(c.e / E) + X(e.e / E), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; ) o.push(0);
      for (n = u; --n >= 0; ) {
        for (r = 0, i = l + n; i > n; ) a = o[i] + f[n] * d[i - n - 1] + r, o[i--] = a % fe | 0, r = a / fe | 0;
        o[i] = (o[i] + r) % fe | 0;
      }
      for (; !o[--s]; ) o.pop();
      return r ? ++t : o.shift(), e.d = o, e.e = wn(o, t), w ? y(e, p.precision, p.rounding) : e;
    };
    m.toBinary = function(e, r) {
      return Ji(this, 2, e, r);
    };
    m.toDecimalPlaces = m.toDP = function(e, r) {
      var t = this, n = t.constructor;
      return t = new n(t), e === void 0 ? t : (ne(e, 0, Ye), r === void 0 ? r = n.rounding : ne(r, 0, 8), y(t, e + t.e + 1, r));
    };
    m.toExponential = function(e, r) {
      var t, n = this, i = n.constructor;
      return e === void 0 ? t = ve(n, true) : (ne(e, 0, Ye), r === void 0 ? r = i.rounding : ne(r, 0, 8), n = y(new i(n), e + 1, r), t = ve(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
    };
    m.toFixed = function(e, r) {
      var t, n, i = this, o = i.constructor;
      return e === void 0 ? t = ve(i) : (ne(e, 0, Ye), r === void 0 ? r = o.rounding : ne(r, 0, 8), n = y(new o(i), e + i.e + 1, r), t = ve(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
    };
    m.toFraction = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p, d, f = this, h = f.d, g = f.constructor;
      if (!h) return new g(f);
      if (u = t = new g(1), n = l = new g(0), r = new g(n), o = r.e = Us(h) - f.e - 1, s = o % E, r.d[0] = U(10, s < 0 ? E + s : s), e == null) e = o > 0 ? r : u;
      else {
        if (a = new g(e), !a.isInt() || a.lt(u)) throw Error(He + a);
        e = a.gt(r) ? o > 0 ? r : u : a;
      }
      for (w = false, a = new g(J(h)), c = g.precision, g.precision = o = h.length * E * 2; p = L(a, r, 0, 1, 1), i = t.plus(p.times(n)), i.cmp(e) != 1; ) t = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = r, r = a.minus(p.times(i)), a = i;
      return i = L(e.minus(t), n, 0, 1, 1), l = l.plus(i.times(u)), t = t.plus(i.times(n)), l.s = u.s = f.s, d = L(u, n, o, 1).minus(f).abs().cmp(L(l, t, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, t], g.precision = c, w = true, d;
    };
    m.toHexadecimal = m.toHex = function(e, r) {
      return Ji(this, 16, e, r);
    };
    m.toNearest = function(e, r) {
      var t = this, n = t.constructor;
      if (t = new n(t), e == null) {
        if (!t.d) return t;
        e = new n(1), r = n.rounding;
      } else {
        if (e = new n(e), r === void 0 ? r = n.rounding : ne(r, 0, 8), !t.d) return e.s ? t : e;
        if (!e.d) return e.s && (e.s = t.s), e;
      }
      return e.d[0] ? (w = false, t = L(t, e, 0, r, 1).times(e), w = true, y(t)) : (e.s = t.s, t = e), t;
    };
    m.toNumber = function() {
      return +this;
    };
    m.toOctal = function(e, r) {
      return Ji(this, 8, e, r);
    };
    m.toPower = m.pow = function(e) {
      var r, t, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(U(+a, u));
      if (a = new l(a), a.eq(1)) return a;
      if (n = l.precision, o = l.rounding, e.eq(1)) return y(a, n, o);
      if (r = X(e.e / E), r >= e.d.length - 1 && (t = u < 0 ? -u : u) <= xp) return i = Gs(l, a, t, n), e.s < 0 ? new l(1).div(i) : y(i, n, o);
      if (s = a.s, s < 0) {
        if (r < e.d.length - 1) return new l(NaN);
        if ((e.d[r] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
      }
      return t = U(+a, u), r = t == 0 || !isFinite(t) ? X(u * (Math.log("0." + J(a.d)) / Math.LN10 + a.e + 1)) : new l(t + "").e, r > l.maxE + 1 || r < l.minE - 1 ? new l(r > 0 ? s / 0 : 0) : (w = false, l.rounding = a.s = 1, t = Math.min(12, (r + "").length), i = Wi(e.times(Ke(a, n + t)), n), i.d && (i = y(i, n + 5, 1), ut(i.d, n, o) && (r = n + 10, i = y(Wi(e.times(Ke(a, r + t)), r), r + 5, 1), +J(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = y(i, n + 1, 0)))), i.s = s, w = true, l.rounding = o, y(i, n, o));
    };
    m.toPrecision = function(e, r) {
      var t, n = this, i = n.constructor;
      return e === void 0 ? t = ve(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ne(e, 1, Ye), r === void 0 ? r = i.rounding : ne(r, 0, 8), n = y(new i(n), e, r), t = ve(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
    };
    m.toSignificantDigits = m.toSD = function(e, r) {
      var t = this, n = t.constructor;
      return e === void 0 ? (e = n.precision, r = n.rounding) : (ne(e, 1, Ye), r === void 0 ? r = n.rounding : ne(r, 0, 8)), y(new n(t), e, r);
    };
    m.toString = function() {
      var e = this, r = e.constructor, t = ve(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + t : t;
    };
    m.truncated = m.trunc = function() {
      return y(new this.constructor(this), this.e + 1, 1);
    };
    m.valueOf = m.toJSON = function() {
      var e = this, r = e.constructor, t = ve(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
      return e.isNeg() ? "-" + t : t;
    };
    function J(e) {
      var r, t, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, r = 1; r < i; r++) n = e[r] + "", t = E - n.length, t && (o += Je(t)), o += n;
        s = e[r], n = s + "", t = E - n.length, t && (o += Je(t));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    __name(J, "J");
    function ne(e, r, t) {
      if (e !== ~~e || e < r || e > t) throw Error(He + e);
    }
    __name(ne, "ne");
    function ut(e, r, t, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10) --r;
      return --r < 0 ? (r += E, i = 0) : (i = Math.ceil((r + 1) / E), r %= E), o = U(10, E - r), a = e[i] % o | 0, n == null ? r < 3 ? (r == 0 ? a = a / 100 | 0 : r == 1 && (a = a / 10 | 0), s = t < 4 && a == 99999 || t > 3 && a == 49999 || a == 5e4 || a == 0) : s = (t < 4 && a + 1 == o || t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == U(10, r - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? a = a / 1e3 | 0 : r == 1 ? a = a / 100 | 0 : r == 2 && (a = a / 10 | 0), s = (n || t < 4) && a == 9999 || !n && t > 3 && a == 4999) : s = ((n || t < 4) && a + 1 == o || !n && t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == U(10, r - 3) - 1, s;
    }
    __name(ut, "ut");
    function fn(e, r, t) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; ) i[o] *= r;
        for (i[0] += Ui.indexOf(e.charAt(s++)), n = 0; n < i.length; n++) i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
      }
      return i.reverse();
    }
    __name(fn, "fn");
    function Pp(e, r) {
      var t, n, i;
      if (r.isZero()) return r;
      n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / xn(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e.precision += t, r = Tr(e, 1, r.times(i), new e(1));
      for (var o = t; o--; ) {
        var s = r.times(r);
        r = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= t, r;
    }
    __name(Pp, "Pp");
    var L = /* @__PURE__ */ function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; ) s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      __name(e, "e");
      function r(n, i, o, s) {
        var a, l;
        if (o != s) l = o > s ? 1 : -1;
        else for (a = l = 0; a < o; a++) if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
        return l;
      }
      __name(r, "r");
      function t(n, i, o, s) {
        for (var a = 0; o--; ) n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; ) n.shift();
      }
      __name(t, "t");
      return function(n, i, o, s, a, l) {
        var u, c, p, d, f, h, g, I, T, S, b, D, me, se, Kr, j, te, Ae, K, fr, Vt = n.constructor, ti = n.s == i.s ? 1 : -1, H = n.d, k = i.d;
        if (!H || !H[0] || !k || !k[0]) return new Vt(!n.s || !i.s || (H ? k && H[0] == k[0] : !k) ? NaN : H && H[0] == 0 || !k ? ti * 0 : ti / 0);
        for (l ? (f = 1, c = n.e - i.e) : (l = fe, f = E, c = X(n.e / f) - X(i.e / f)), K = k.length, te = H.length, T = new Vt(ti), S = T.d = [], p = 0; k[p] == (H[p] || 0); p++) ;
        if (k[p] > (H[p] || 0) && c--, o == null ? (se = o = Vt.precision, s = Vt.rounding) : a ? se = o + (n.e - i.e) + 1 : se = o, se < 0) S.push(1), h = true;
        else {
          if (se = se / f + 2 | 0, p = 0, K == 1) {
            for (d = 0, k = k[0], se++; (p < te || d) && se--; p++) Kr = d * l + (H[p] || 0), S[p] = Kr / k | 0, d = Kr % k | 0;
            h = d || p < te;
          } else {
            for (d = l / (k[0] + 1) | 0, d > 1 && (k = e(k, d, l), H = e(H, d, l), K = k.length, te = H.length), j = K, b = H.slice(0, K), D = b.length; D < K; ) b[D++] = 0;
            fr = k.slice(), fr.unshift(0), Ae = k[0], k[1] >= l / 2 && ++Ae;
            do
              d = 0, u = r(k, b, K, D), u < 0 ? (me = b[0], K != D && (me = me * l + (b[1] || 0)), d = me / Ae | 0, d > 1 ? (d >= l && (d = l - 1), g = e(k, d, l), I = g.length, D = b.length, u = r(g, b, I, D), u == 1 && (d--, t(g, K < I ? fr : k, I, l))) : (d == 0 && (u = d = 1), g = k.slice()), I = g.length, I < D && g.unshift(0), t(b, g, D, l), u == -1 && (D = b.length, u = r(k, b, K, D), u < 1 && (d++, t(b, K < D ? fr : k, D, l))), D = b.length) : u === 0 && (d++, b = [0]), S[p++] = d, u && b[0] ? b[D++] = H[j] || 0 : (b = [H[j]], D = 1);
            while ((j++ < te || b[0] !== void 0) && se--);
            h = b[0] !== void 0;
          }
          S[0] || S.shift();
        }
        if (f == 1) T.e = c, $s = h;
        else {
          for (p = 1, d = S[0]; d >= 10; d /= 10) p++;
          T.e = p + c * f - 1, y(T, a ? o + T.e + 1 : o, s, h);
        }
        return T;
      };
    }();
    function y(e, r, t, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor;
      e: if (r != null) {
        if (p = e.d, !p) return e;
        for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
        if (o = r - i, o < 0) o += E, s = r, c = p[d = 0], l = c / U(10, i - s - 1) % 10 | 0;
        else if (d = Math.ceil((o + 1) / E), a = p.length, d >= a) if (n) {
          for (; a++ <= d; ) p.push(0);
          c = l = 0, i = 1, o %= E, s = o - E + 1;
        } else break e;
        else {
          for (c = a = p[d], i = 1; a >= 10; a /= 10) i++;
          o %= E, s = o - E + i, l = s < 0 ? 0 : c / U(10, i - s - 1) % 10 | 0;
        }
        if (n = n || r < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % U(10, i - s - 1)), u = t < 4 ? (l || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (t == 4 || n || t == 6 && (o > 0 ? s > 0 ? c / U(10, i - s) : 0 : p[d - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !p[0]) return p.length = 0, u ? (r -= e.e + 1, p[0] = U(10, (E - r % E) % E), e.e = -r || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = U(10, E - o), p[d] = s > 0 ? (c / U(10, i - s) % U(10, s) | 0) * a : 0), u) for (; ; ) if (d == 0) {
          for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
          for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, p[0] == fe && (p[0] = 1));
          break;
        } else {
          if (p[d] += a, p[d] != fe) break;
          p[d--] = 0, a = 1;
        }
        for (o = p.length; p[--o] === 0; ) p.pop();
      }
      return w && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
    }
    __name(y, "y");
    function ve(e, r, t) {
      if (!e.isFinite()) return Ws(e);
      var n, i = e.e, o = J(e.d), s = o.length;
      return r ? (t && (n = t - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Je(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Je(-i - 1) + o, t && (n = t - s) > 0 && (o += Je(n))) : i >= s ? (o += Je(i + 1 - s), t && (n = t - i - 1) > 0 && (o = o + "." + Je(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - s) > 0 && (i + 1 === s && (o += "."), o += Je(n))), o;
    }
    __name(ve, "ve");
    function wn(e, r) {
      var t = e[0];
      for (r *= E; t >= 10; t /= 10) r++;
      return r;
    }
    __name(wn, "wn");
    function bn(e, r, t) {
      if (r > vp) throw w = true, t && (e.precision = t), Error(qs);
      return y(new e(hn), r, 1, true);
    }
    __name(bn, "bn");
    function xe(e, r, t) {
      if (r > Qi) throw Error(qs);
      return y(new e(yn), r, t, true);
    }
    __name(xe, "xe");
    function Us(e) {
      var r = e.length - 1, t = r * E + 1;
      if (r = e[r], r) {
        for (; r % 10 == 0; r /= 10) t--;
        for (r = e[0]; r >= 10; r /= 10) t++;
      }
      return t;
    }
    __name(Us, "Us");
    function Je(e) {
      for (var r = ""; e--; ) r += "0";
      return r;
    }
    __name(Je, "Je");
    function Gs(e, r, t, n) {
      var i, o = new e(1), s = Math.ceil(n / E + 4);
      for (w = false; ; ) {
        if (t % 2 && (o = o.times(r), Fs(o.d, s) && (i = true)), t = X(t / 2), t === 0) {
          t = o.d.length - 1, i && o.d[t] === 0 && ++o.d[t];
          break;
        }
        r = r.times(r), Fs(r.d, s);
      }
      return w = true, o;
    }
    __name(Gs, "Gs");
    function Ls(e) {
      return e.d[e.d.length - 1] & 1;
    }
    __name(Ls, "Ls");
    function Qs(e, r, t) {
      for (var n, i, o = new e(r[0]), s = 0; ++s < r.length; ) {
        if (i = new e(r[s]), !i.s) {
          o = i;
          break;
        }
        n = o.cmp(i), (n === t || n === 0 && o.s === t) && (o = i);
      }
      return o;
    }
    __name(Qs, "Qs");
    function Wi(e, r) {
      var t, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, h = d.precision;
      if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (r == null ? (w = false, l = h) : l = r, a = new d(0.03125); e.e > -2; ) e = e.times(a), p += 5;
      for (n = Math.log(U(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, t = o = s = new d(1), d.precision = l; ; ) {
        if (o = y(o.times(e), l, 1), t = t.times(++c), a = s.plus(L(o, t, l, 1)), J(a.d).slice(0, l) === J(s.d).slice(0, l)) {
          for (i = p; i--; ) s = y(s.times(s), l, 1);
          if (r == null) if (u < 3 && ut(s.d, l - n, f, u)) d.precision = l += 10, t = o = a = new d(1), c = 0, u++;
          else return y(s, d.precision = h, f, w = true);
          else return d.precision = h, s;
        }
        s = a;
      }
    }
    __name(Wi, "Wi");
    function Ke(e, r) {
      var t, n, i, o, s, a, l, u, c, p, d, f = 1, h = 10, g = e, I = g.d, T = g.constructor, S = T.rounding, b = T.precision;
      if (g.s < 0 || !I || !I[0] || !g.e && I[0] == 1 && I.length == 1) return new T(I && !I[0] ? -1 / 0 : g.s != 1 ? NaN : I ? 0 : g);
      if (r == null ? (w = false, c = b) : c = r, T.precision = c += h, t = J(I), n = t.charAt(0), Math.abs(o = g.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; ) g = g.times(e), t = J(g.d), n = t.charAt(0), f++;
        o = g.e, n > 1 ? (g = new T("0." + t), o++) : g = new T(n + "." + t.slice(1));
      } else return u = bn(T, c + 2, b).times(o + ""), g = Ke(new T(n + "." + t.slice(1)), c - h).plus(u), T.precision = b, r == null ? y(g, b, S, w = true) : g;
      for (p = g, l = s = g = L(g.minus(1), g.plus(1), c, 1), d = y(g.times(g), c, 1), i = 3; ; ) {
        if (s = y(s.times(d), c, 1), u = l.plus(L(s, new T(i), c, 1)), J(u.d).slice(0, c) === J(l.d).slice(0, c)) if (l = l.times(2), o !== 0 && (l = l.plus(bn(T, c + 2, b).times(o + ""))), l = L(l, new T(f), c, 1), r == null) if (ut(l.d, c - h, S, a)) T.precision = c += h, u = s = g = L(p.minus(1), p.plus(1), c, 1), d = y(g.times(g), c, 1), i = a = 1;
        else return y(l, T.precision = b, S, w = true);
        else return T.precision = b, l;
        l = u, i += 2;
      }
    }
    __name(Ke, "Ke");
    function Ws(e) {
      return String(e.s * e.s / 0);
    }
    __name(Ws, "Ws");
    function gn(e, r) {
      var t, n, i;
      for ((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), n = 0; r.charCodeAt(n) === 48; n++) ;
      for (i = r.length; r.charCodeAt(i - 1) === 48; --i) ;
      if (r = r.slice(n, i), r) {
        if (i -= n, e.e = t = t - n - 1, e.d = [], n = (t + 1) % E, t < 0 && (n += E), n < i) {
          for (n && e.d.push(+r.slice(0, n)), i -= E; n < i; ) e.d.push(+r.slice(n, n += E));
          r = r.slice(n), n = E - r.length;
        } else n -= i;
        for (; n--; ) r += "0";
        e.d.push(+r), w && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else e.e = 0, e.d = [0];
      return e;
    }
    __name(gn, "gn");
    function Tp(e, r) {
      var t, n, i, o, s, a, l, u, c;
      if (r.indexOf("_") > -1) {
        if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Bs.test(r)) return gn(e, r);
      } else if (r === "Infinity" || r === "NaN") return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (Ep.test(r)) t = 16, r = r.toLowerCase();
      else if (bp.test(r)) t = 2;
      else if (wp.test(r)) t = 8;
      else throw Error(He + r);
      for (o = r.search(/p/i), o > 0 ? (l = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), s = o >= 0, n = e.constructor, s && (r = r.replace(".", ""), a = r.length, o = a - o, i = Gs(n, new n(t), o, o * 2)), u = fn(r, t, fe), c = u.length - 1, o = c; u[o] === 0; --o) u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = wn(u, c), e.d = u, w = false, s && (e = L(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? U(2, l) : Le.pow(2, l))), w = true, e);
    }
    __name(Tp, "Tp");
    function Sp(e, r) {
      var t, n = r.d.length;
      if (n < 3) return r.isZero() ? r : Tr(e, 2, r, r);
      t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / xn(5, t)), r = Tr(e, 2, r, r);
      for (var i, o = new e(5), s = new e(16), a = new e(20); t--; ) i = r.times(r), r = r.times(o.plus(i.times(s.times(i).minus(a))));
      return r;
    }
    __name(Sp, "Sp");
    function Tr(e, r, t, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / E);
      for (w = false, l = t.times(t), a = new e(n); ; ) {
        if (s = L(a.times(l), new e(r++ * r++), c, 1), a = i ? n.plus(s) : n.minus(s), n = L(s.times(l), new e(r++ * r++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; ) ;
          if (o == -1) break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return w = true, s.d.length = p + 1, s;
    }
    __name(Tr, "Tr");
    function xn(e, r) {
      for (var t = e; --r; ) t *= e;
      return t;
    }
    __name(xn, "xn");
    function Js(e, r) {
      var t, n = r.s < 0, i = xe(e, e.precision, 1), o = i.times(0.5);
      if (r = r.abs(), r.lte(o)) return Ne = n ? 4 : 1, r;
      if (t = r.divToInt(i), t.isZero()) Ne = n ? 3 : 2;
      else {
        if (r = r.minus(t.times(i)), r.lte(o)) return Ne = Ls(t) ? n ? 2 : 3 : n ? 4 : 1, r;
        Ne = Ls(t) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return r.minus(i).abs();
    }
    __name(Js, "Js");
    function Ji(e, r, t, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor, h = t !== void 0;
      if (h ? (ne(t, 1, Ye), n === void 0 ? n = f.rounding : ne(n, 0, 8)) : (t = f.precision, n = f.rounding), !e.isFinite()) c = Ws(e);
      else {
        for (c = ve(e), s = c.indexOf("."), h ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = fn(ve(d), 10, i), d.e = d.d.length), p = fn(c, 10, i), o = l = p.length; p[--l] == 0; ) p.pop();
        if (!p[0]) c = h ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = L(e, d, t, n, 0, i), p = e.d, o = e.e, u = $s), s = p[t], a = i / 2, u = u || p[t + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = t, u) for (; ++p[--t] > i - 1; ) p[t] = 0, t || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l) ;
          for (s = 0, c = ""; s < l; s++) c += Ui.charAt(p[s]);
          if (h) {
            if (l > 1) if (r == 16 || r == 8) {
              for (s = r == 16 ? 4 : 3, --l; l % s; l++) c += "0";
              for (p = fn(c, i, r), l = p.length; !p[l - 1]; --l) ;
              for (s = 1, c = "1."; s < l; s++) c += Ui.charAt(p[s]);
            } else c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; ) c = "0" + c;
            c = "0." + c;
          } else if (++o > l) for (o -= l; o--; ) c += "0";
          else o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    __name(Ji, "Ji");
    function Fs(e, r) {
      if (e.length > r) return e.length = r, true;
    }
    __name(Fs, "Fs");
    function Rp(e) {
      return new this(e).abs();
    }
    __name(Rp, "Rp");
    function Ap(e) {
      return new this(e).acos();
    }
    __name(Ap, "Ap");
    function Cp(e) {
      return new this(e).acosh();
    }
    __name(Cp, "Cp");
    function Ip(e, r) {
      return new this(e).plus(r);
    }
    __name(Ip, "Ip");
    function Dp(e) {
      return new this(e).asin();
    }
    __name(Dp, "Dp");
    function Op(e) {
      return new this(e).asinh();
    }
    __name(Op, "Op");
    function kp(e) {
      return new this(e).atan();
    }
    __name(kp, "kp");
    function _p(e) {
      return new this(e).atanh();
    }
    __name(_p, "_p");
    function Np(e, r) {
      e = new this(e), r = new this(r);
      var t, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !r.s ? t = new this(NaN) : !e.d && !r.d ? (t = xe(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), t.s = e.s) : !r.d || e.isZero() ? (t = r.s < 0 ? xe(this, n, i) : new this(0), t.s = e.s) : !e.d || r.isZero() ? (t = xe(this, o, 1).times(0.5), t.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, t = this.atan(L(e, r, o, 1)), r = xe(this, o, 1), this.precision = n, this.rounding = i, t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(L(e, r, o, 1)), t;
    }
    __name(Np, "Np");
    function Lp(e) {
      return new this(e).cbrt();
    }
    __name(Lp, "Lp");
    function Fp(e) {
      return y(e = new this(e), e.e + 1, 2);
    }
    __name(Fp, "Fp");
    function Mp(e, r, t) {
      return new this(e).clamp(r, t);
    }
    __name(Mp, "Mp");
    function $p(e) {
      if (!e || typeof e != "object") throw Error(En + "Object expected");
      var r, t, n, i = e.defaults === true, o = ["precision", 1, Ye, "rounding", 0, 8, "toExpNeg", -Pr, 0, "toExpPos", 0, Pr, "maxE", 0, Pr, "minE", -Pr, 0, "modulo", 0, 9];
      for (r = 0; r < o.length; r += 3) if (t = o[r], i && (this[t] = Gi[t]), (n = e[t]) !== void 0) if (X(n) === n && n >= o[r + 1] && n <= o[r + 2]) this[t] = n;
      else throw Error(He + t + ": " + n);
      if (t = "crypto", i && (this[t] = Gi[t]), (n = e[t]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = true;
      else throw Error(Vs);
      else this[t] = false;
      else throw Error(He + t + ": " + n);
      return this;
    }
    __name($p, "$p");
    function qp(e) {
      return new this(e).cos();
    }
    __name(qp, "qp");
    function Vp(e) {
      return new this(e).cosh();
    }
    __name(Vp, "Vp");
    function Ks(e) {
      var r, t, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i)) return new i(o);
        if (u.constructor = i, Ms(o)) {
          u.s = o.s, w ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10) s++;
            w ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          }
          if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return gn(u, o.toString());
        }
        if (l === "string") return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), Bs.test(o) ? gn(u, o) : Tp(u, o);
        if (l === "bigint") return o < 0 ? (o = -o, u.s = -1) : u.s = 1, gn(u, o.toString());
        throw Error(He + o);
      }
      __name(i, "i");
      if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = $p, i.clone = Ks, i.isDecimal = Ms, i.abs = Rp, i.acos = Ap, i.acosh = Cp, i.add = Ip, i.asin = Dp, i.asinh = Op, i.atan = kp, i.atanh = _p, i.atan2 = Np, i.cbrt = Lp, i.ceil = Fp, i.clamp = Mp, i.cos = qp, i.cosh = Vp, i.div = jp, i.exp = Bp, i.floor = Up, i.hypot = Gp, i.ln = Qp, i.log = Wp, i.log10 = Kp, i.log2 = Jp, i.max = Hp, i.min = Yp, i.mod = zp, i.mul = Zp, i.pow = Xp, i.random = ed, i.round = rd, i.sign = td, i.sin = nd, i.sinh = id, i.sqrt = od, i.sub = sd, i.sum = ad, i.tan = ld, i.tanh = ud, i.trunc = cd, e === void 0 && (e = {}), e && e.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length; ) e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
      return i.config(e), i;
    }
    __name(Ks, "Ks");
    function jp(e, r) {
      return new this(e).div(r);
    }
    __name(jp, "jp");
    function Bp(e) {
      return new this(e).exp();
    }
    __name(Bp, "Bp");
    function Up(e) {
      return y(e = new this(e), e.e + 1, 3);
    }
    __name(Up, "Up");
    function Gp() {
      var e, r, t = new this(0);
      for (w = false, e = 0; e < arguments.length; ) if (r = new this(arguments[e++]), r.d) t.d && (t = t.plus(r.times(r)));
      else {
        if (r.s) return w = true, new this(1 / 0);
        t = r;
      }
      return w = true, t.sqrt();
    }
    __name(Gp, "Gp");
    function Ms(e) {
      return e instanceof Le || e && e.toStringTag === js || false;
    }
    __name(Ms, "Ms");
    function Qp(e) {
      return new this(e).ln();
    }
    __name(Qp, "Qp");
    function Wp(e, r) {
      return new this(e).log(r);
    }
    __name(Wp, "Wp");
    function Jp(e) {
      return new this(e).log(2);
    }
    __name(Jp, "Jp");
    function Kp(e) {
      return new this(e).log(10);
    }
    __name(Kp, "Kp");
    function Hp() {
      return Qs(this, arguments, -1);
    }
    __name(Hp, "Hp");
    function Yp() {
      return Qs(this, arguments, 1);
    }
    __name(Yp, "Yp");
    function zp(e, r) {
      return new this(e).mod(r);
    }
    __name(zp, "zp");
    function Zp(e, r) {
      return new this(e).mul(r);
    }
    __name(Zp, "Zp");
    function Xp(e, r) {
      return new this(e).pow(r);
    }
    __name(Xp, "Xp");
    function ed(e) {
      var r, t, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : ne(e, 1, Ye), n = Math.ceil(e / E), this.crypto) if (crypto.getRandomValues) for (r = crypto.getRandomValues(new Uint32Array(n)); o < n; ) i = r[o], i >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (r = crypto.randomBytes(n *= 4); o < n; ) i = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else throw Error(Vs);
      else for (; o < n; ) a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= E, n && e && (i = U(10, E - e), a[o] = (n / i | 0) * i); a[o] === 0; o--) a.pop();
      if (o < 0) t = 0, a = [0];
      else {
        for (t = -1; a[0] === 0; t -= E) a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
        n < E && (t -= E - n);
      }
      return s.e = t, s.d = a, s;
    }
    __name(ed, "ed");
    function rd(e) {
      return y(e = new this(e), e.e + 1, this.rounding);
    }
    __name(rd, "rd");
    function td(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    __name(td, "td");
    function nd(e) {
      return new this(e).sin();
    }
    __name(nd, "nd");
    function id(e) {
      return new this(e).sinh();
    }
    __name(id, "id");
    function od(e) {
      return new this(e).sqrt();
    }
    __name(od, "od");
    function sd(e, r) {
      return new this(e).sub(r);
    }
    __name(sd, "sd");
    function ad() {
      var e = 0, r = arguments, t = new this(r[e]);
      for (w = false; t.s && ++e < r.length; ) t = t.plus(r[e]);
      return w = true, y(t, this.precision, this.rounding);
    }
    __name(ad, "ad");
    function ld(e) {
      return new this(e).tan();
    }
    __name(ld, "ld");
    function ud(e) {
      return new this(e).tanh();
    }
    __name(ud, "ud");
    function cd(e) {
      return y(e = new this(e), e.e + 1, 1);
    }
    __name(cd, "cd");
    m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
    m[Symbol.toStringTag] = "Decimal";
    var Le = m.constructor = Ks(Gi);
    hn = new Le(hn);
    yn = new Le(yn);
    var Fe = Le;
    function Sr(e) {
      return Le.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(Sr, "Sr");
    var ct = {};
    tr(ct, { ModelAction: /* @__PURE__ */ __name(() => Rr, "ModelAction"), datamodelEnumToSchemaEnum: /* @__PURE__ */ __name(() => pd, "datamodelEnumToSchemaEnum") });
    function pd(e) {
      return { name: e.name, values: e.values.map((r) => r.name) };
    }
    __name(pd, "pd");
    var Rr = ((b) => (b.findUnique = "findUnique", b.findUniqueOrThrow = "findUniqueOrThrow", b.findFirst = "findFirst", b.findFirstOrThrow = "findFirstOrThrow", b.findMany = "findMany", b.create = "create", b.createMany = "createMany", b.createManyAndReturn = "createManyAndReturn", b.update = "update", b.updateMany = "updateMany", b.updateManyAndReturn = "updateManyAndReturn", b.upsert = "upsert", b.delete = "delete", b.deleteMany = "deleteMany", b.groupBy = "groupBy", b.count = "count", b.aggregate = "aggregate", b.findRaw = "findRaw", b.aggregateRaw = "aggregateRaw", b))(Rr || {});
    var Xs = O(Di());
    var Zs = O(__require("node:fs"));
    var Hs = { keyword: De, entity: De, value: /* @__PURE__ */ __name((e) => W(nr(e)), "value"), punctuation: nr, directive: De, function: De, variable: /* @__PURE__ */ __name((e) => W(nr(e)), "variable"), string: /* @__PURE__ */ __name((e) => W(qe(e)), "string"), boolean: Ie, number: De, comment: Hr };
    var dd = /* @__PURE__ */ __name((e) => e, "dd");
    var vn = {};
    var md = 0;
    var v = { manual: vn.Prism && vn.Prism.manual, disableWorkerMessageHandler: vn.Prism && vn.Prism.disableWorkerMessageHandler, util: { encode: /* @__PURE__ */ __name(function(e) {
      if (e instanceof ge) {
        let r = e;
        return new ge(r.type, v.util.encode(r.content), r.alias);
      } else return Array.isArray(e) ? e.map(v.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, "encode"), type: /* @__PURE__ */ __name(function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, "type"), objId: /* @__PURE__ */ __name(function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++md }), e.__id;
    }, "objId"), clone: /* @__PURE__ */ __name(function e(r, t) {
      let n, i, o = v.util.type(r);
      switch (t = t || {}, o) {
        case "Object":
          if (i = v.util.objId(r), t[i]) return t[i];
          n = {}, t[i] = n;
          for (let s in r) r.hasOwnProperty(s) && (n[s] = e(r[s], t));
          return n;
        case "Array":
          return i = v.util.objId(r), t[i] ? t[i] : (n = [], t[i] = n, r.forEach(function(s, a) {
            n[a] = e(s, t);
          }), n);
        default:
          return r;
      }
    }, "e") }, languages: { extend: /* @__PURE__ */ __name(function(e, r) {
      let t = v.util.clone(v.languages[e]);
      for (let n in r) t[n] = r[n];
      return t;
    }, "extend"), insertBefore: /* @__PURE__ */ __name(function(e, r, t, n) {
      n = n || v.languages;
      let i = n[e], o = {};
      for (let a in i) if (i.hasOwnProperty(a)) {
        if (a == r) for (let l in t) t.hasOwnProperty(l) && (o[l] = t[l]);
        t.hasOwnProperty(a) || (o[a] = i[a]);
      }
      let s = n[e];
      return n[e] = o, v.languages.DFS(v.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, "insertBefore"), DFS: /* @__PURE__ */ __name(function e(r, t, n, i) {
      i = i || {};
      let o = v.util.objId;
      for (let s in r) if (r.hasOwnProperty(s)) {
        t.call(r, s, r[s], n || s);
        let a = r[s], l = v.util.type(a);
        l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, t, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, t, s, i));
      }
    }, "e") }, plugins: {}, highlight: /* @__PURE__ */ __name(function(e, r, t) {
      let n = { code: e, grammar: r, language: t };
      return v.hooks.run("before-tokenize", n), n.tokens = v.tokenize(n.code, n.grammar), v.hooks.run("after-tokenize", n), ge.stringify(v.util.encode(n.tokens), n.language);
    }, "highlight"), matchGrammar: /* @__PURE__ */ __name(function(e, r, t, n, i, o, s) {
      for (let g in t) {
        if (!t.hasOwnProperty(g) || !t[g]) continue;
        if (g == s) return;
        let I = t[g];
        I = v.util.type(I) === "Array" ? I : [I];
        for (let T = 0; T < I.length; ++T) {
          let S = I[T], b = S.inside, D = !!S.lookbehind, me = !!S.greedy, se = 0, Kr = S.alias;
          if (me && !S.pattern.global) {
            let j = S.pattern.toString().match(/[imuy]*$/)[0];
            S.pattern = RegExp(S.pattern.source, j + "g");
          }
          S = S.pattern || S;
          for (let j = n, te = i; j < r.length; te += r[j].length, ++j) {
            let Ae = r[j];
            if (r.length > e.length) return;
            if (Ae instanceof ge) continue;
            if (me && j != r.length - 1) {
              S.lastIndex = te;
              var p = S.exec(e);
              if (!p) break;
              var c = p.index + (D ? p[1].length : 0), d = p.index + p[0].length, a = j, l = te;
              for (let k = r.length; a < k && (l < d || !r[a].type && !r[a - 1].greedy); ++a) l += r[a].length, c >= l && (++j, te = l);
              if (r[j] instanceof ge) continue;
              u = a - j, Ae = e.slice(te, l), p.index -= te;
            } else {
              S.lastIndex = 0;
              var p = S.exec(Ae), u = 1;
            }
            if (!p) {
              if (o) break;
              continue;
            }
            D && (se = p[1] ? p[1].length : 0);
            var c = p.index + se, p = p[0].slice(se), d = c + p.length, f = Ae.slice(0, c), h = Ae.slice(d);
            let K = [j, u];
            f && (++j, te += f.length, K.push(f));
            let fr = new ge(g, b ? v.tokenize(p, b) : p, Kr, p, me);
            if (K.push(fr), h && K.push(h), Array.prototype.splice.apply(r, K), u != 1 && v.matchGrammar(e, r, t, j, te, true, g), o) break;
          }
        }
      }
    }, "matchGrammar"), tokenize: /* @__PURE__ */ __name(function(e, r) {
      let t = [e], n = r.rest;
      if (n) {
        for (let i in n) r[i] = n[i];
        delete r.rest;
      }
      return v.matchGrammar(e, t, r, 0, 0, false), t;
    }, "tokenize"), hooks: { all: {}, add: /* @__PURE__ */ __name(function(e, r) {
      let t = v.hooks.all;
      t[e] = t[e] || [], t[e].push(r);
    }, "add"), run: /* @__PURE__ */ __name(function(e, r) {
      let t = v.hooks.all[e];
      if (!(!t || !t.length)) for (var n = 0, i; i = t[n++]; ) i(r);
    }, "run") }, Token: ge };
    v.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    v.languages.javascript = v.languages.extend("clike", { "class-name": [v.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    v.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    v.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: v.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: v.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: v.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: v.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    v.languages.markup && v.languages.markup.tag.addInlined("script", "javascript");
    v.languages.js = v.languages.javascript;
    v.languages.typescript = v.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    v.languages.ts = v.languages.typescript;
    function ge(e, r, t, n, i) {
      this.type = e, this.content = r, this.alias = t, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    __name(ge, "ge");
    ge.stringify = function(e, r) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(t) {
        return ge.stringify(t, r);
      }).join("") : fd(e.type)(e.content);
    };
    function fd(e) {
      return Hs[e] || dd;
    }
    __name(fd, "fd");
    function Ys(e) {
      return gd(e, v.languages.javascript);
    }
    __name(Ys, "Ys");
    function gd(e, r) {
      return v.tokenize(e, r).map((n) => ge.stringify(n)).join("");
    }
    __name(gd, "gd");
    function zs(e) {
      return Ci(e);
    }
    __name(zs, "zs");
    var Pn = class e {
      static {
        __name(this, "e");
      }
      firstLineNumber;
      lines;
      static read(r) {
        let t;
        try {
          t = Zs.default.readFileSync(r, "utf-8");
        } catch {
          return null;
        }
        return e.fromContent(t);
      }
      static fromContent(r) {
        let t = r.split(/\r?\n/);
        return new e(1, t);
      }
      constructor(r, t) {
        this.firstLineNumber = r, this.lines = t;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(r, t) {
        if (r < this.firstLineNumber || r > this.lines.length + this.firstLineNumber) return this;
        let n = r - this.firstLineNumber, i = [...this.lines];
        return i[n] = t(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(r) {
        return new e(this.firstLineNumber, this.lines.map((t, n) => r(t, this.firstLineNumber + n)));
      }
      lineAt(r) {
        return this.lines[r - this.firstLineNumber];
      }
      prependSymbolAt(r, t) {
        return this.mapLines((n, i) => i === r ? `${t} ${n}` : `  ${n}`);
      }
      slice(r, t) {
        let n = this.lines.slice(r - 1, t).join(`
`);
        return new e(r, zs(n).split(`
`));
      }
      highlight() {
        let r = Ys(this.toString());
        return new e(this.firstLineNumber, r.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var hd = { red: ce, gray: Hr, dim: Ce, bold: W, underline: Y, highlightSource: /* @__PURE__ */ __name((e) => e.highlight(), "highlightSource") };
    var yd = { red: /* @__PURE__ */ __name((e) => e, "red"), gray: /* @__PURE__ */ __name((e) => e, "gray"), dim: /* @__PURE__ */ __name((e) => e, "dim"), bold: /* @__PURE__ */ __name((e) => e, "bold"), underline: /* @__PURE__ */ __name((e) => e, "underline"), highlightSource: /* @__PURE__ */ __name((e) => e, "highlightSource") };
    function bd({ message: e, originalMethod: r, isPanic: t, callArguments: n }) {
      return { functionName: `prisma.${r}()`, message: e, isPanic: t ?? false, callArguments: n };
    }
    __name(bd, "bd");
    function Ed({ callsite: e, message: r, originalMethod: t, isPanic: n, callArguments: i }, o) {
      let s = bd({ message: r, originalMethod: t, isPanic: n, callArguments: i });
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production") return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber) return s;
      let l = Math.max(1, a.lineNumber - 3), u = Pn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
      if (u && c) {
        let p = xd(c), d = wd(c);
        if (!d) return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (h) => h.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((h, g) => o.gray(String(g).padStart(f)) + " " + h).mapLines((h) => o.dim(h)).prependSymbolAt(a.lineNumber, o.bold(o.red("→"))), i) {
          let h = p + f + 1;
          h += 2, s.callArguments = (0, Xs.default)(i, h).slice(h);
        }
      }
      return s;
    }
    __name(Ed, "Ed");
    function wd(e) {
      let r = Object.keys(Rr).join("|"), n = new RegExp(String.raw`\.(${r})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    __name(wd, "wd");
    function xd(e) {
      let r = 0;
      for (let t = 0; t < e.length; t++) {
        if (e.charAt(t) !== " ") return r;
        r++;
      }
      return r;
    }
    __name(xd, "xd");
    function vd({ functionName: e, location: r, message: t, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = r ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), r && a.push(s.underline(Pd(r))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(t), a.join(`
`);
    }
    __name(vd, "vd");
    function Pd(e) {
      let r = [e.fileName];
      return e.lineNumber && r.push(String(e.lineNumber)), e.columnNumber && r.push(String(e.columnNumber)), r.join(":");
    }
    __name(Pd, "Pd");
    function Tn(e) {
      let r = e.showColors ? hd : yd, t;
      return t = Ed(e, r), vd(t, r);
    }
    __name(Tn, "Tn");
    var la = O(Ki());
    function na(e, r, t) {
      let n = ia(e), i = Td(n), o = Rd(i);
      o ? Sn(o, r, t) : r.addErrorMessage(() => "Unknown error");
    }
    __name(na, "na");
    function ia(e) {
      return e.errors.flatMap((r) => r.kind === "Union" ? ia(r) : [r]);
    }
    __name(ia, "ia");
    function Td(e) {
      let r = /* @__PURE__ */ new Map(), t = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          t.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = r.get(i);
        o ? r.set(i, { ...n, argument: { ...n.argument, typeNames: Sd(o.argument.typeNames, n.argument.typeNames) } }) : r.set(i, n);
      }
      return t.push(...r.values()), t;
    }
    __name(Td, "Td");
    function Sd(e, r) {
      return [...new Set(e.concat(r))];
    }
    __name(Sd, "Sd");
    function Rd(e) {
      return ji(e, (r, t) => {
        let n = ra(r), i = ra(t);
        return n !== i ? n - i : ta(r) - ta(t);
      });
    }
    __name(Rd, "Rd");
    function ra(e) {
      let r = 0;
      return Array.isArray(e.selectionPath) && (r += e.selectionPath.length), Array.isArray(e.argumentPath) && (r += e.argumentPath.length), r;
    }
    __name(ra, "ra");
    function ta(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(ta, "ta");
    var le = class {
      static {
        __name(this, "le");
      }
      constructor(r, t) {
        this.name = r;
        this.value = t;
      }
      isRequired = false;
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(r) {
        let { colors: { green: t } } = r.context;
        r.addMarginSymbol(t(this.isRequired ? "+" : "?")), r.write(t(this.name)), this.isRequired || r.write(t("?")), r.write(t(": ")), typeof this.value == "string" ? r.write(t(this.value)) : r.write(this.value);
      }
    };
    sa();
    var Ar = class {
      static {
        __name(this, "Ar");
      }
      constructor(r = 0, t) {
        this.context = t;
        this.currentIndent = r;
      }
      lines = [];
      currentLine = "";
      currentIndent = 0;
      marginSymbol;
      afterNextNewLineCallback;
      write(r) {
        return typeof r == "string" ? this.currentLine += r : r.write(this), this;
      }
      writeJoined(r, t, n = (i, o) => o.write(i)) {
        let i = t.length - 1;
        for (let o = 0; o < t.length; o++) n(t[o], this), o !== i && this.write(r);
        return this;
      }
      writeLine(r) {
        return this.write(r).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let r = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, r?.(), this;
      }
      withIndent(r) {
        return this.indent(), r(this), this.unindent(), this;
      }
      afterNextNewline(r) {
        return this.afterNextNewLineCallback = r, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(r) {
        return this.marginSymbol = r, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let r = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + r.slice(1) : r;
      }
    };
    oa();
    var Rn = class {
      static {
        __name(this, "Rn");
      }
      constructor(r) {
        this.value = r;
      }
      write(r) {
        r.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var An = /* @__PURE__ */ __name((e) => e, "An");
    var Cn = { bold: An, red: An, green: An, dim: An, enabled: false };
    var aa = { bold: W, red: ce, green: qe, dim: Ce, enabled: true };
    var Cr = { write(e) {
      e.writeLine(",");
    } };
    var Pe = class {
      static {
        __name(this, "Pe");
      }
      constructor(r) {
        this.contents = r;
      }
      isUnderlined = false;
      color = /* @__PURE__ */ __name((r) => r, "color");
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(r) {
        return this.color = r, this;
      }
      write(r) {
        let t = r.getCurrentLineLength();
        r.write(this.color(this.contents)), this.isUnderlined && r.afterNextNewline(() => {
          r.write(" ".repeat(t)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var ze = class {
      static {
        __name(this, "ze");
      }
      hasError = false;
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var Ir = class extends ze {
      static {
        __name(this, "Ir");
      }
      items = [];
      addItem(r) {
        return this.items.push(new Rn(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((t) => t.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let t = new Pe("[]");
        this.hasError && t.setColor(r.context.colors.red).underline(), r.write(t);
      }
      writeWithItems(r) {
        let { colors: t } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(Cr, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(t.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var Dr = class e extends ze {
      static {
        __name(this, "e");
      }
      fields = {};
      suggestions = [];
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [t, ...n] = r, i = this.getField(t);
        if (!i) return;
        let o = i;
        for (let s of n) {
          let a;
          if (o.value instanceof e ? a = o.value.getField(s) : o.value instanceof Ir && (a = o.value.getField(Number(s))), !a) return;
          o = a;
        }
        return o;
      }
      getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        return this.getField(r)?.value;
      }
      getDeepSubSelectionValue(r) {
        let t = this;
        for (let n of r) {
          if (!(t instanceof e)) return;
          let i = t.getSubSelectionValue(n);
          if (!i) return;
          t = i;
        }
        return t;
      }
      getDeepSelectionParent(r) {
        let t = this.getSelectionParent();
        if (!t) return;
        let n = t;
        for (let i of r) {
          let o = n.value.getFieldValue(i);
          if (!o || !(o instanceof e)) return;
          let s = o.getSelectionParent();
          if (!s) return;
          n = s;
        }
        return n;
      }
      getSelectionParent() {
        let r = this.getField("select")?.value.asObject();
        if (r) return { kind: "select", value: r };
        let t = this.getField("include")?.value.asObject();
        if (t) return { kind: "include", value: t };
      }
      getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((n) => n.getPrintWidth())) + 2;
      }
      write(r) {
        let t = Object.values(this.fields);
        if (t.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, t);
      }
      asObject() {
        return this;
      }
      writeEmpty(r) {
        let t = new Pe("{}");
        this.hasError && t.setColor(r.context.colors.red).underline(), r.write(t);
      }
      writeWithContents(r, t) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(Cr, [...t, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var Q = class extends ze {
      static {
        __name(this, "Q");
      }
      constructor(t) {
        super();
        this.text = t;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(t) {
        let n = new Pe(this.text);
        this.hasError && n.underline().setColor(t.context.colors.red), t.write(n);
      }
      asObject() {
      }
    };
    var pt = class {
      static {
        __name(this, "pt");
      }
      fields = [];
      addField(r, t) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${r}: ${t}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(r) {
        let { colors: { green: t } } = r.context;
        r.writeLine(t("{")).withIndent(() => {
          r.writeJoined(Cr, this.fields).newLine();
        }).write(t("}")).addMarginSymbol(t("+"));
      }
    };
    function Sn(e, r, t) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          Ad(e, r);
          break;
        case "IncludeOnScalar":
          Cd(e, r);
          break;
        case "EmptySelection":
          Id(e, r, t);
          break;
        case "UnknownSelectionField":
          _d(e, r);
          break;
        case "InvalidSelectionValue":
          Nd(e, r);
          break;
        case "UnknownArgument":
          Ld(e, r);
          break;
        case "UnknownInputField":
          Fd(e, r);
          break;
        case "RequiredArgumentMissing":
          Md(e, r);
          break;
        case "InvalidArgumentType":
          $d(e, r);
          break;
        case "InvalidArgumentValue":
          qd(e, r);
          break;
        case "ValueTooLarge":
          Vd(e, r);
          break;
        case "SomeFieldsMissing":
          jd(e, r);
          break;
        case "TooManyFieldsGiven":
          Bd(e, r);
          break;
        case "Union":
          na(e, r, t);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name(Sn, "Sn");
    function Ad(e, r) {
      let t = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      t && (t.getField(e.firstField)?.markAsError(), t.getField(e.secondField)?.markAsError()), r.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(Ad, "Ad");
    function Cd(e, r) {
      let [t, n] = Or(e.selectionPath), i = e.outputType, o = r.arguments.getDeepSelectionParent(t)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new le(s.name, "true"));
      r.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${dt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name(Cd, "Cd");
    function Id(e, r, t) {
      let n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          Dd(e, r, i);
          return;
        }
        if (n.hasField("select")) {
          Od(e, r);
          return;
        }
      }
      if (t?.[We(e.outputType.name)]) {
        kd(e, r);
        return;
      }
      r.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(Id, "Id");
    function Dd(e, r, t) {
      t.removeAllFields();
      for (let n of e.outputType.fields) t.addSuggestion(new le(n.name, "false"));
      r.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(Dd, "Dd");
    function Od(e, r) {
      let t = e.outputType, n = r.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), pa(n, t)), r.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(t.name)} must not be empty. ${dt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(t.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(Od, "Od");
    function kd(e, r) {
      let t = new pt();
      for (let i of e.outputType.fields) i.isRelation || t.addField(i.name, "false");
      let n = new le("omit", t).makeRequired();
      if (e.selectionPath.length === 0) r.arguments.addSuggestion(n);
      else {
        let [i, o] = Or(e.selectionPath), a = r.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let l = a?.value.asObject() ?? new Dr();
          l.addSuggestion(n), a.value = l;
        }
      }
      r.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(kd, "kd");
    function _d(e, r) {
      let t = da(e.selectionPath, r);
      if (t.parentKind !== "unknown") {
        t.field.markAsError();
        let n = t.parent;
        switch (t.parentKind) {
          case "select":
            pa(n, e.outputType);
            break;
          case "include":
            Ud(n, e.outputType);
            break;
          case "omit":
            Gd(n, e.outputType);
            break;
        }
      }
      r.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${t.fieldName}\``)}`];
        return t.parentKind !== "unknown" && i.push(`for ${n.bold(t.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(dt(n)), i.join(" ");
      });
    }
    __name(_d, "_d");
    function Nd(e, r) {
      let t = da(e.selectionPath, r);
      t.parentKind !== "unknown" && t.field.value.markAsError(), r.addErrorMessage((n) => `Invalid value for selection field \`${n.red(t.fieldName)}\`: ${e.underlyingError}`);
    }
    __name(Nd, "Nd");
    function Ld(e, r) {
      let t = e.argumentPath[0], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(t)?.markAsError(), Qd(n, e.arguments)), r.addErrorMessage((i) => ua(i, t, e.arguments.map((o) => o.name)));
    }
    __name(Ld, "Ld");
    function Fd(e, r) {
      let [t, n] = Or(e.argumentPath), i = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(t)?.asObject();
        o && ma(o, e.inputType);
      }
      r.addErrorMessage((o) => ua(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name(Fd, "Fd");
    function ua(e, r, t) {
      let n = [`Unknown argument \`${e.red(r)}\`.`], i = Jd(r, t);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), t.length > 0 && n.push(dt(e)), n.join(" ");
    }
    __name(ua, "ua");
    function Md(e, r) {
      let t;
      r.addErrorMessage((l) => t?.value instanceof Q && t.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n) return;
      let [i, o] = Or(e.argumentPath), s = new pt(), a = n.getDeepFieldValue(i)?.asObject();
      if (a) {
        if (t = a.getField(o), t && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields) s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new le(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map(ca).join(" | ");
          a.addSuggestion(new le(o, l).makeRequired());
        }
        if (e.dependentArgumentPath) {
          n.getDeepField(e.dependentArgumentPath)?.markAsError();
          let [, l] = Or(e.dependentArgumentPath);
          r.addErrorMessage((u) => `Argument \`${u.green(o)}\` is required because argument \`${u.green(l)}\` was provided.`);
        }
      }
    }
    __name(Md, "Md");
    function ca(e) {
      return e.kind === "list" ? `${ca(e.elementType)}[]` : e.name;
    }
    __name(ca, "ca");
    function $d(e, r) {
      let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), r.addErrorMessage((i) => {
        let o = In("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(t)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name($d, "$d");
    function qd(e, r) {
      let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), r.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(t)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = In("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(qd, "qd");
    function Vd(e, r) {
      let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof Q && (i = s.text);
      }
      r.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(t)}\``), s.join(" ");
      });
    }
    __name(Vd, "Vd");
    function jd(e, r) {
      let t = e.argumentPath[e.argumentPath.length - 1], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && ma(i, e.inputType);
      }
      r.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(t)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${In("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(dt(i)), o.join(" ");
      });
    }
    __name(jd, "jd");
    function Bd(e, r) {
      let t = e.argumentPath[e.argumentPath.length - 1], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      r.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(t)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${In("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(Bd, "Bd");
    function pa(e, r) {
      for (let t of r.fields) e.hasField(t.name) || e.addSuggestion(new le(t.name, "true"));
    }
    __name(pa, "pa");
    function Ud(e, r) {
      for (let t of r.fields) t.isRelation && !e.hasField(t.name) && e.addSuggestion(new le(t.name, "true"));
    }
    __name(Ud, "Ud");
    function Gd(e, r) {
      for (let t of r.fields) !e.hasField(t.name) && !t.isRelation && e.addSuggestion(new le(t.name, "true"));
    }
    __name(Gd, "Gd");
    function Qd(e, r) {
      for (let t of r) e.hasField(t.name) || e.addSuggestion(new le(t.name, t.typeNames.join(" | ")));
    }
    __name(Qd, "Qd");
    function da(e, r) {
      let [t, n] = Or(e), i = r.arguments.getDeepSubSelectionValue(t)?.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
      return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(da, "da");
    function ma(e, r) {
      if (r.kind === "object") for (let t of r.fields) e.hasField(t.name) || e.addSuggestion(new le(t.name, t.typeNames.join(" | ")));
    }
    __name(ma, "ma");
    function Or(e) {
      let r = [...e], t = r.pop();
      if (!t) throw new Error("unexpected empty path");
      return [r, t];
    }
    __name(Or, "Or");
    function dt({ green: e, enabled: r }) {
      return "Available options are " + (r ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(dt, "dt");
    function In(e, r) {
      if (r.length === 1) return r[0];
      let t = [...r], n = t.pop();
      return `${t.join(", ")} ${e} ${n}`;
    }
    __name(In, "In");
    var Wd = 3;
    function Jd(e, r) {
      let t = 1 / 0, n;
      for (let i of r) {
        let o = (0, la.default)(e, i);
        o > Wd || o < t && (t = o, n = i);
      }
      return n;
    }
    __name(Jd, "Jd");
    var mt = class {
      static {
        __name(this, "mt");
      }
      modelName;
      name;
      typeName;
      isList;
      isEnum;
      constructor(r, t, n, i, o) {
        this.modelName = r, this.name = t, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let r = this.isList ? "List" : "", t = this.isEnum ? "Enum" : "";
        return `${r}${t}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function kr(e) {
      return e instanceof mt;
    }
    __name(kr, "kr");
    var Dn = Symbol();
    var Yi = /* @__PURE__ */ new WeakMap();
    var Me = class {
      static {
        __name(this, "Me");
      }
      constructor(r) {
        r === Dn ? Yi.set(this, `Prisma.${this._getName()}`) : Yi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Yi.get(this);
      }
    };
    var ft = class extends Me {
      static {
        __name(this, "ft");
      }
      _getNamespace() {
        return "NullTypes";
      }
    };
    var gt = class extends ft {
      static {
        __name(this, "gt");
      }
      #e;
    };
    zi(gt, "DbNull");
    var ht = class extends ft {
      static {
        __name(this, "ht");
      }
      #e;
    };
    zi(ht, "JsonNull");
    var yt = class extends ft {
      static {
        __name(this, "yt");
      }
      #e;
    };
    zi(yt, "AnyNull");
    var On = { classes: { DbNull: gt, JsonNull: ht, AnyNull: yt }, instances: { DbNull: new gt(Dn), JsonNull: new ht(Dn), AnyNull: new yt(Dn) } };
    function zi(e, r) {
      Object.defineProperty(e, "name", { value: r, configurable: true });
    }
    __name(zi, "zi");
    var fa = ": ";
    var kn = class {
      static {
        __name(this, "kn");
      }
      constructor(r, t) {
        this.name = r;
        this.value = t;
      }
      hasError = false;
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + fa.length;
      }
      write(r) {
        let t = new Pe(this.name);
        this.hasError && t.underline().setColor(r.context.colors.red), r.write(t).write(fa).write(this.value);
      }
    };
    var Zi = class {
      static {
        __name(this, "Zi");
      }
      arguments;
      errorMessages = [];
      constructor(r) {
        this.arguments = r;
      }
      write(r) {
        r.write(this.arguments);
      }
      addErrorMessage(r) {
        this.errorMessages.push(r);
      }
      renderAllMessages(r) {
        return this.errorMessages.map((t) => t(r)).join(`
`);
      }
    };
    function _r(e) {
      return new Zi(ga(e));
    }
    __name(_r, "_r");
    function ga(e) {
      let r = new Dr();
      for (let [t, n] of Object.entries(e)) {
        let i = new kn(t, ha(n));
        r.addField(i);
      }
      return r;
    }
    __name(ga, "ga");
    function ha(e) {
      if (typeof e == "string") return new Q(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new Q(String(e));
      if (typeof e == "bigint") return new Q(`${e}n`);
      if (e === null) return new Q("null");
      if (e === void 0) return new Q("undefined");
      if (Sr(e)) return new Q(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new Q(`Buffer.alloc(${e.byteLength})`) : new Q(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let r = mn(e) ? e.toISOString() : "Invalid Date";
        return new Q(`new Date("${r}")`);
      }
      return e instanceof Me ? new Q(`Prisma.${e._getName()}`) : kr(e) ? new Q(`prisma.${We(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Kd(e) : typeof e == "object" ? ga(e) : new Q(Object.prototype.toString.call(e));
    }
    __name(ha, "ha");
    function Kd(e) {
      let r = new Ir();
      for (let t of e) r.addItem(ha(t));
      return r;
    }
    __name(Kd, "Kd");
    function _n(e, r) {
      let t = r === "pretty" ? aa : Cn, n = e.renderAllMessages(t), i = new Ar(0, { colors: t }).write(e).toString();
      return { message: n, args: i };
    }
    __name(_n, "_n");
    function Nn({ args: e, errors: r, errorFormat: t, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = _r(e);
      for (let p of r) Sn(p, a, s);
      let { message: l, args: u } = _n(a, t), c = Tn({ message: l, callsite: n, originalMethod: i, showColors: t === "pretty", callArguments: u });
      throw new Z(c, { clientVersion: o });
    }
    __name(Nn, "Nn");
    function Te(e) {
      return e.replace(/^./, (r) => r.toLowerCase());
    }
    __name(Te, "Te");
    function ba(e, r, t) {
      let n = Te(t);
      return !r.result || !(r.result.$allModels || r.result[n]) ? e : Hd({ ...e, ...ya(r.name, e, r.result.$allModels), ...ya(r.name, e, r.result[n]) });
    }
    __name(ba, "ba");
    function Hd(e) {
      let r = new we(), t = /* @__PURE__ */ __name((n, i) => r.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => t(o, i)) : [n])), "t");
      return pn(e, (n) => ({ ...n, needs: t(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(Hd, "Hd");
    function ya(e, r, t) {
      return t ? pn(t, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Yd(r, o, i) })) : {};
    }
    __name(ya, "ya");
    function Yd(e, r, t) {
      let n = e?.[r]?.compute;
      return n ? (i) => t({ ...i, [r]: n(i) }) : t;
    }
    __name(Yd, "Yd");
    function Ea(e, r) {
      if (!r) return e;
      let t = { ...e };
      for (let n of Object.values(r)) if (e[n.name]) for (let i of n.needs) t[i] = true;
      return t;
    }
    __name(Ea, "Ea");
    function wa(e, r) {
      if (!r) return e;
      let t = { ...e };
      for (let n of Object.values(r)) if (!e[n.name]) for (let i of n.needs) delete t[i];
      return t;
    }
    __name(wa, "wa");
    var Ln = class {
      static {
        __name(this, "Ln");
      }
      constructor(r, t) {
        this.extension = r;
        this.previous = t;
      }
      computedFieldsCache = new we();
      modelExtensionsCache = new we();
      queryCallbacksCache = new we();
      clientExtensions = lt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      batchCallbacks = lt(() => {
        let r = this.previous?.getAllBatchQueryCallbacks() ?? [], t = this.extension.query?.$__internalBatch;
        return t ? r.concat(t) : r;
      });
      getAllComputedFields(r) {
        return this.computedFieldsCache.getOrCreate(r, () => ba(this.previous?.getAllComputedFields(r), this.extension, r));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(r) {
        return this.modelExtensionsCache.getOrCreate(r, () => {
          let t = Te(r);
          return !this.extension.model || !(this.extension.model[t] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(r) : { ...this.previous?.getAllModelExtensions(r), ...this.extension.model.$allModels, ...this.extension.model[t] };
        });
      }
      getAllQueryCallbacks(r, t) {
        return this.queryCallbacksCache.getOrCreate(`${r}:${t}`, () => {
          let n = this.previous?.getAllQueryCallbacks(r, t) ?? [], i = [], o = this.extension.query;
          return !o || !(o[r] || o.$allModels || o[t] || o.$allOperations) ? n : (o[r] !== void 0 && (o[r][t] !== void 0 && i.push(o[r][t]), o[r].$allOperations !== void 0 && i.push(o[r].$allOperations)), r !== "$none" && o.$allModels !== void 0 && (o.$allModels[t] !== void 0 && i.push(o.$allModels[t]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[t] !== void 0 && i.push(o[t]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Nr = class e {
      static {
        __name(this, "e");
      }
      constructor(r) {
        this.head = r;
      }
      static empty() {
        return new e();
      }
      static single(r) {
        return new e(new Ln(r));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(r) {
        return new e(new Ln(r, this.head));
      }
      getAllComputedFields(r) {
        return this.head?.getAllComputedFields(r);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(r) {
        return this.head?.getAllModelExtensions(r);
      }
      getAllQueryCallbacks(r, t) {
        return this.head?.getAllQueryCallbacks(r, t) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    var Fn = class {
      static {
        __name(this, "Fn");
      }
      constructor(r) {
        this.name = r;
      }
    };
    function xa(e) {
      return e instanceof Fn;
    }
    __name(xa, "xa");
    function va(e) {
      return new Fn(e);
    }
    __name(va, "va");
    var Pa = Symbol();
    var bt = class {
      static {
        __name(this, "bt");
      }
      constructor(r) {
        if (r !== Pa) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(r) {
        return r === void 0 ? Mn : r;
      }
    };
    var Mn = new bt(Pa);
    function Se(e) {
      return e instanceof bt;
    }
    __name(Se, "Se");
    var zd = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var Ta = "explicitly `undefined` values are not allowed";
    function $n({ modelName: e, action: r, args: t, runtimeDataModel: n, extensions: i = Nr.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
      let p = new Xi({ runtimeDataModel: n, modelName: e, action: r, rootArgs: t, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c });
      return { modelName: e, action: zd[r], query: Et(t, p) };
    }
    __name($n, "$n");
    function Et({ select: e, include: r, ...t } = {}, n) {
      let i = t.omit;
      return delete t.omit, { arguments: Ra(t, n), selection: Zd(e, r, i, n) };
    }
    __name(Et, "Et");
    function Zd(e, r, t, n) {
      return e ? (r ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : t && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), tm(e, n)) : Xd(n, r, t);
    }
    __name(Zd, "Zd");
    function Xd(e, r, t) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), r && em(n, r, e), rm(n, t, e), n;
    }
    __name(Xd, "Xd");
    function em(e, r, t) {
      for (let [n, i] of Object.entries(r)) {
        if (Se(i)) continue;
        let o = t.nestSelection(n);
        if (eo(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = t.findField(n);
        if (s && s.kind !== "object" && t.throwValidationError({ kind: "IncludeOnScalar", selectionPath: t.getSelectionPath().concat(n), outputType: t.getOutputTypeDescription() }), s) {
          e[n] = Et(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = Et(i, o);
      }
    }
    __name(em, "em");
    function rm(e, r, t) {
      let n = t.getComputedFields(), i = { ...t.getGlobalOmit(), ...r }, o = wa(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (Se(a)) continue;
        eo(a, t.nestSelection(s));
        let l = t.findField(s);
        n?.[s] && !l || (e[s] = !a);
      }
    }
    __name(rm, "rm");
    function tm(e, r) {
      let t = {}, n = r.getComputedFields(), i = Ea(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (Se(s)) continue;
        let a = r.nestSelection(o);
        eo(s, a);
        let l = r.findField(o);
        if (!(n?.[o] && !l)) {
          if (s === false || s === void 0 || Se(s)) {
            t[o] = false;
            continue;
          }
          if (s === true) {
            l?.kind === "object" ? t[o] = Et({}, a) : t[o] = true;
            continue;
          }
          t[o] = Et(s, a);
        }
      }
      return t;
    }
    __name(tm, "tm");
    function Sa(e, r) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (vr(e)) {
        if (mn(e)) return { $type: "DateTime", value: e.toISOString() };
        r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: r.getSelectionPath(), argumentPath: r.getArgumentPath(), argument: { name: r.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (xa(e)) return { $type: "Param", value: e.name };
      if (kr(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return nm(e, r);
      if (ArrayBuffer.isView(e)) {
        let { buffer: t, byteOffset: n, byteLength: i } = e;
        return { $type: "Bytes", value: Buffer.from(t, n, i).toString("base64") };
      }
      if (im(e)) return e.values;
      if (Sr(e)) return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Me) {
        if (e !== On.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (om(e)) return e.toJSON();
      if (typeof e == "object") return Ra(e, r);
      r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: r.getSelectionPath(), argumentPath: r.getArgumentPath(), argument: { name: r.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(Sa, "Sa");
    function Ra(e, r) {
      if (e.$type) return { $type: "Raw", value: e };
      let t = {};
      for (let n in e) {
        let i = e[n], o = r.nestArgument(n);
        Se(i) || (i !== void 0 ? t[n] = Sa(i, o) : r.isPreviewFeatureOn("strictUndefinedChecks") && r.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: r.getSelectionPath(), argument: { name: r.getArgumentName(), typeNames: [] }, underlyingError: Ta }));
      }
      return t;
    }
    __name(Ra, "Ra");
    function nm(e, r) {
      let t = [];
      for (let n = 0; n < e.length; n++) {
        let i = r.nestArgument(String(n)), o = e[n];
        if (o === void 0 || Se(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${r.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        t.push(Sa(o, i));
      }
      return t;
    }
    __name(nm, "nm");
    function im(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(im, "im");
    function om(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(om, "om");
    function eo(e, r) {
      e === void 0 && r.isPreviewFeatureOn("strictUndefinedChecks") && r.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: r.getSelectionPath(), underlyingError: Ta });
    }
    __name(eo, "eo");
    var Xi = class e {
      static {
        __name(this, "e");
      }
      constructor(r) {
        this.params = r;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      modelOrType;
      throwValidationError(r) {
        Nn({ errors: [r], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((r) => ({ name: r.name, typeName: "boolean", isRelation: r.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(r) {
        return this.params.previewFeatures.includes(r);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(r) {
        return this.modelOrType?.fields.find((t) => t.name === r);
      }
      nestSelection(r) {
        let t = this.findField(r), n = t?.kind === "object" ? t.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(r) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[We(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "updateManyAndReturn":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            ar(this.params.action, "Unknown action");
        }
      }
      nestArgument(r) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(r) });
      }
    };
    function Aa(e) {
      if (!e._hasPreviewFlag("metrics")) throw new Z("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: e._clientVersion });
    }
    __name(Aa, "Aa");
    var Lr = class {
      static {
        __name(this, "Lr");
      }
      _client;
      constructor(r) {
        this._client = r;
      }
      prometheus(r) {
        return Aa(this._client), this._client._engine.metrics({ format: "prometheus", ...r });
      }
      json(r) {
        return Aa(this._client), this._client._engine.metrics({ format: "json", ...r });
      }
    };
    function Ca(e, r) {
      let t = lt(() => sm(r));
      Object.defineProperty(e, "dmmf", { get: /* @__PURE__ */ __name(() => t.get(), "get") });
    }
    __name(Ca, "Ca");
    function sm(e) {
      return { datamodel: { models: ro(e.models), enums: ro(e.enums), types: ro(e.types) } };
    }
    __name(sm, "sm");
    function ro(e) {
      return Object.entries(e).map(([r, t]) => ({ name: r, ...t }));
    }
    __name(ro, "ro");
    var to = /* @__PURE__ */ new WeakMap();
    var qn = "$$PrismaTypedSql";
    var wt = class {
      static {
        __name(this, "wt");
      }
      constructor(r, t) {
        to.set(this, { sql: r, values: t }), Object.defineProperty(this, qn, { value: qn });
      }
      get sql() {
        return to.get(this).sql;
      }
      get values() {
        return to.get(this).values;
      }
    };
    function Ia(e) {
      return (...r) => new wt(e, r);
    }
    __name(Ia, "Ia");
    function Vn(e) {
      return e != null && e[qn] === qn;
    }
    __name(Vn, "Vn");
    var cu = O(Ti());
    var pu = __require("node:async_hooks");
    var du = __require("node:events");
    var mu = O(__require("node:fs"));
    var ri = O(__require("node:path"));
    var ie = class e {
      static {
        __name(this, "e");
      }
      constructor(r, t) {
        if (r.length - 1 !== t.length) throw r.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${r.length} strings to have ${r.length - 1} values`);
        let n = t.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = r[0];
        let i = 0, o = 0;
        for (; i < t.length; ) {
          let s = t[i++], a = r[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; ) this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `?${this.strings[t++]}`;
        return n;
      }
      get statement() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `:${t}${this.strings[t++]}`;
        return n;
      }
      get text() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `$${t}${this.strings[t++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function Da(e, r = ",", t = "", n = "") {
      if (e.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new ie([t, ...Array(e.length - 1).fill(r), n], e);
    }
    __name(Da, "Da");
    function no(e) {
      return new ie([e], []);
    }
    __name(no, "no");
    var Oa = no("");
    function io(e, ...r) {
      return new ie(e, r);
    }
    __name(io, "io");
    function xt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(r) {
        return e[r];
      } };
    }
    __name(xt, "xt");
    function re(e, r) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return r();
      } };
    }
    __name(re, "re");
    function lr(e) {
      let r = new we();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(t) {
        return r.getOrCreate(t, () => e.getPropertyValue(t));
      }, getPropertyDescriptor(t) {
        return e.getPropertyDescriptor?.(t);
      } };
    }
    __name(lr, "lr");
    var jn = { enumerable: true, configurable: true, writable: true };
    function Bn(e) {
      let r = new Set(e);
      return { getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf"), getOwnPropertyDescriptor: /* @__PURE__ */ __name(() => jn, "getOwnPropertyDescriptor"), has: /* @__PURE__ */ __name((t, n) => r.has(n), "has"), set: /* @__PURE__ */ __name((t, n, i) => r.add(n) && Reflect.set(t, n, i), "set"), ownKeys: /* @__PURE__ */ __name(() => [...r], "ownKeys") };
    }
    __name(Bn, "Bn");
    var ka = Symbol.for("nodejs.util.inspect.custom");
    function he(e, r) {
      let t = am(r), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = t.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a = t.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = _a(Reflect.ownKeys(o), t), a = _a(Array.from(t.keys()), t);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return t.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = t.get(s);
        return l ? l.getPropertyDescriptor ? { ...jn, ...l?.getPropertyDescriptor(s) } : jn : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      }, getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf") });
      return i[ka] = function() {
        let o = { ...this };
        return delete o[ka], o;
      }, i;
    }
    __name(he, "he");
    function am(e) {
      let r = /* @__PURE__ */ new Map();
      for (let t of e) {
        let n = t.getKeys();
        for (let i of n) r.set(i, t);
      }
      return r;
    }
    __name(am, "am");
    function _a(e, r) {
      return e.filter((t) => r.get(t)?.has?.(t) ?? true);
    }
    __name(_a, "_a");
    function Fr(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(Fr, "Fr");
    function Mr(e, r) {
      return { batch: e, transaction: r?.kind === "batch" ? { isolationLevel: r.options.isolationLevel } : void 0 };
    }
    __name(Mr, "Mr");
    function Na(e) {
      if (e === void 0) return "";
      let r = _r(e);
      return new Ar(0, { colors: Cn }).write(r).toString();
    }
    __name(Na, "Na");
    var lm = "P2037";
    function $r({ error: e, user_facing_error: r }, t, n) {
      return r.error_code ? new z(um(r, n), { code: r.error_code, clientVersion: t, meta: r.meta, batchRequestIdx: r.batch_request_idx }) : new V(e, { clientVersion: t, batchRequestIdx: r.batch_request_idx });
    }
    __name($r, "$r");
    function um(e, r) {
      let t = e.message;
      return (r === "postgresql" || r === "postgres" || r === "mysql") && e.error_code === lm && (t += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), t;
    }
    __name(um, "um");
    var vt = "<unknown>";
    function La(e) {
      var r = e.split(`
`);
      return r.reduce(function(t, n) {
        var i = dm(n) || fm(n) || ym(n) || xm(n) || Em(n);
        return i && t.push(i), t;
      }, []);
    }
    __name(La, "La");
    var cm = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var pm = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function dm(e) {
      var r = cm.exec(e);
      if (!r) return null;
      var t = r[2] && r[2].indexOf("native") === 0, n = r[2] && r[2].indexOf("eval") === 0, i = pm.exec(r[2]);
      return n && i != null && (r[2] = i[1], r[3] = i[2], r[4] = i[3]), { file: t ? null : r[2], methodName: r[1] || vt, arguments: t ? [r[2]] : [], lineNumber: r[3] ? +r[3] : null, column: r[4] ? +r[4] : null };
    }
    __name(dm, "dm");
    var mm = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function fm(e) {
      var r = mm.exec(e);
      return r ? { file: r[2], methodName: r[1] || vt, arguments: [], lineNumber: +r[3], column: r[4] ? +r[4] : null } : null;
    }
    __name(fm, "fm");
    var gm = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var hm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function ym(e) {
      var r = gm.exec(e);
      if (!r) return null;
      var t = r[3] && r[3].indexOf(" > eval") > -1, n = hm.exec(r[3]);
      return t && n != null && (r[3] = n[1], r[4] = n[2], r[5] = null), { file: r[3], methodName: r[1] || vt, arguments: r[2] ? r[2].split(",") : [], lineNumber: r[4] ? +r[4] : null, column: r[5] ? +r[5] : null };
    }
    __name(ym, "ym");
    var bm = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function Em(e) {
      var r = bm.exec(e);
      return r ? { file: r[3], methodName: r[1] || vt, arguments: [], lineNumber: +r[4], column: r[5] ? +r[5] : null } : null;
    }
    __name(Em, "Em");
    var wm = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function xm(e) {
      var r = wm.exec(e);
      return r ? { file: r[2], methodName: r[1] || vt, arguments: [], lineNumber: +r[3], column: r[4] ? +r[4] : null } : null;
    }
    __name(xm, "xm");
    var oo = class {
      static {
        __name(this, "oo");
      }
      getLocation() {
        return null;
      }
    };
    var so = class {
      static {
        __name(this, "so");
      }
      _error;
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let r = this._error.stack;
        if (!r) return null;
        let n = La(r).find((i) => {
          if (!i.file) return false;
          let o = Li(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function Ze(e) {
      return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new oo() : new so();
    }
    __name(Ze, "Ze");
    var Fa = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function qr(e = {}) {
      let r = Pm(e);
      return Object.entries(r).reduce((n, [i, o]) => (Fa[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(qr, "qr");
    function Pm(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(Pm, "Pm");
    function Un(e = {}) {
      return (r) => (typeof e._count == "boolean" && (r._count = r._count._all), r);
    }
    __name(Un, "Un");
    function Ma(e, r) {
      let t = Un(e);
      return r({ action: "aggregate", unpacker: t, argsMapper: qr })(e);
    }
    __name(Ma, "Ma");
    function Tm(e = {}) {
      let { select: r, ...t } = e;
      return typeof r == "object" ? qr({ ...t, _count: r }) : qr({ ...t, _count: { _all: true } });
    }
    __name(Tm, "Tm");
    function Sm(e = {}) {
      return typeof e.select == "object" ? (r) => Un(e)(r)._count : (r) => Un(e)(r)._count._all;
    }
    __name(Sm, "Sm");
    function $a(e, r) {
      return r({ action: "count", unpacker: Sm(e), argsMapper: Tm })(e);
    }
    __name($a, "$a");
    function Rm(e = {}) {
      let r = qr(e);
      if (Array.isArray(r.by)) for (let t of r.by) typeof t == "string" && (r.select[t] = true);
      else typeof r.by == "string" && (r.select[r.by] = true);
      return r;
    }
    __name(Rm, "Rm");
    function Am(e = {}) {
      return (r) => (typeof e?._count == "boolean" && r.forEach((t) => {
        t._count = t._count._all;
      }), r);
    }
    __name(Am, "Am");
    function qa(e, r) {
      return r({ action: "groupBy", unpacker: Am(e), argsMapper: Rm })(e);
    }
    __name(qa, "qa");
    function Va(e, r, t) {
      if (r === "aggregate") return (n) => Ma(n, t);
      if (r === "count") return (n) => $a(n, t);
      if (r === "groupBy") return (n) => qa(n, t);
    }
    __name(Va, "Va");
    function ja(e, r) {
      let t = r.fields.filter((i) => !i.relationName), n = _s(t, "name");
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new mt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...Bn(Object.keys(n)) });
    }
    __name(ja, "ja");
    var Ba = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "Ba");
    var ao = /* @__PURE__ */ __name((e, r) => Ba(r).reduce((t, n) => t && t[n], e), "ao");
    var Ua = /* @__PURE__ */ __name((e, r, t) => Ba(r).reduceRight((n, i, o, s) => Object.assign({}, ao(e, s.slice(0, o)), { [i]: n }), t), "Ua");
    function Cm(e, r) {
      return e === void 0 || r === void 0 ? [] : [...r, "select", e];
    }
    __name(Cm, "Cm");
    function Im(e, r, t) {
      return r === void 0 ? e ?? {} : Ua(r, t, e || true);
    }
    __name(Im, "Im");
    function lo(e, r, t, n, i, o) {
      let a = e._runtimeDataModel.models[r].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
      return (l) => {
        let u = Ze(e._errorFormat), c = Cm(n, i), p = Im(l, o, c), d = t({ dataPath: c, callsite: u })(p), f = Dm(e, r);
        return new Proxy(d, { get(h, g) {
          if (!f.includes(g)) return h[g];
          let T = [a[g].type, t, g], S = [c, p];
          return lo(e, ...T, ...S);
        }, ...Bn([...f, ...Object.getOwnPropertyNames(d)]) });
      };
    }
    __name(lo, "lo");
    function Dm(e, r) {
      return e._runtimeDataModel.models[r].fields.filter((t) => t.kind === "object").map((t) => t.name);
    }
    __name(Dm, "Dm");
    var Om = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var km = ["aggregate", "count", "groupBy"];
    function uo(e, r) {
      let t = e._extensions.getAllModelExtensions(r) ?? {}, n = [_m(e, r), Lm(e, r), xt(t), re("name", () => r), re("$name", () => r), re("$parent", () => e._appliedParent)];
      return he({}, n);
    }
    __name(uo, "uo");
    function _m(e, r) {
      let t = Te(r), n = Object.keys(Rr).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((a) => (l) => {
          let u = Ze(e._errorFormat);
          return e._createPrismaPromise((c) => {
            let p = { args: l, dataPath: [], action: o, model: r, clientMethod: `${t}.${i}`, jsModelName: t, transaction: c, callsite: u };
            return e._request({ ...p, ...a });
          }, { action: o, args: l, model: r });
        }, "s");
        return Om.includes(o) ? lo(e, r, s) : Nm(i) ? Va(e, i, s) : s({});
      } };
    }
    __name(_m, "_m");
    function Nm(e) {
      return km.includes(e);
    }
    __name(Nm, "Nm");
    function Lm(e, r) {
      return lr(re("fields", () => {
        let t = e._runtimeDataModel.models[r];
        return ja(r, t);
      }));
    }
    __name(Lm, "Lm");
    function Ga(e) {
      return e.replace(/^./, (r) => r.toUpperCase());
    }
    __name(Ga, "Ga");
    var co = Symbol();
    function Pt(e) {
      let r = [Fm(e), Mm(e), re(co, () => e), re("$parent", () => e._appliedParent)], t = e._extensions.getAllClientExtensions();
      return t && r.push(xt(t)), he(e, r);
    }
    __name(Pt, "Pt");
    function Fm(e) {
      let r = Object.getPrototypeOf(e._originalClient), t = [...new Set(Object.getOwnPropertyNames(r))];
      return { getKeys() {
        return t;
      }, getPropertyValue(n) {
        return e[n];
      } };
    }
    __name(Fm, "Fm");
    function Mm(e) {
      let r = Object.keys(e._runtimeDataModel.models), t = r.map(Te), n = [...new Set(r.concat(t))];
      return lr({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Ga(i);
        if (e._runtimeDataModel.models[o] !== void 0) return uo(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return uo(e, i);
      }, getPropertyDescriptor(i) {
        if (!t.includes(i)) return { enumerable: false };
      } });
    }
    __name(Mm, "Mm");
    function Qa(e) {
      return e[co] ? e[co] : e;
    }
    __name(Qa, "Qa");
    function Wa(e) {
      if (typeof e == "function") return e(this);
      if (e.client?.__AccelerateEngine) {
        let t = e.client.__AccelerateEngine;
        this._originalClient._engine = new t(this._originalClient._accelerateEngineConfig);
      }
      let r = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $on: { value: void 0 } });
      return Pt(r);
    }
    __name(Wa, "Wa");
    function Ja({ result: e, modelName: r, select: t, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(r);
      if (!o) return e;
      let s = [], a = [];
      for (let l of Object.values(o)) {
        if (n) {
          if (n[l.name]) continue;
          let u = l.needs.filter((c) => n[c]);
          u.length > 0 && a.push(Fr(u));
        } else if (t) {
          if (!t[l.name]) continue;
          let u = l.needs.filter((c) => !t[c]);
          u.length > 0 && a.push(Fr(u));
        }
        $m(e, l.needs) && s.push(qm(l, he(e, s)));
      }
      return s.length > 0 || a.length > 0 ? he(e, [...s, ...a]) : e;
    }
    __name(Ja, "Ja");
    function $m(e, r) {
      return r.every((t) => Vi(e, t));
    }
    __name($m, "$m");
    function qm(e, r) {
      return lr(re(e.name, () => e.compute(r)));
    }
    __name(qm, "qm");
    function Gn({ visitor: e, result: r, args: t, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(r)) {
        for (let s = 0; s < r.length; s++) r[s] = Gn({ result: r[s], args: t, modelName: i, runtimeDataModel: n, visitor: e });
        return r;
      }
      let o = e(r, i, t) ?? r;
      return t.include && Ka({ includeOrSelect: t.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), t.select && Ka({ includeOrSelect: t.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(Gn, "Gn");
    function Ka({ includeOrSelect: e, result: r, parentModelName: t, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || r[o] == null || Se(s)) continue;
        let l = n.models[t].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName) continue;
        let u = typeof s == "object" ? s : {};
        r[o] = Gn({ visitor: i, result: r[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    __name(Ka, "Ka");
    function Ha({ result: e, modelName: r, args: t, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[r] ? e : Gn({ result: e, args: t ?? {}, modelName: r, runtimeDataModel: i, visitor: /* @__PURE__ */ __name((a, l, u) => {
        let c = Te(l);
        return Ja({ result: a, modelName: c, select: u.select, omit: u.select ? void 0 : { ...o?.[c], ...u.omit }, extensions: n });
      }, "visitor") });
    }
    __name(Ha, "Ha");
    var Vm = ["$connect", "$disconnect", "$on", "$transaction", "$extends"];
    var Ya = Vm;
    function za(e) {
      if (e instanceof ie) return jm(e);
      if (Vn(e)) return Bm(e);
      if (Array.isArray(e)) {
        let t = [e[0]];
        for (let n = 1; n < e.length; n++) t[n] = Tt(e[n]);
        return t;
      }
      let r = {};
      for (let t in e) r[t] = Tt(e[t]);
      return r;
    }
    __name(za, "za");
    function jm(e) {
      return new ie(e.strings, e.values);
    }
    __name(jm, "jm");
    function Bm(e) {
      return new wt(e.sql, e.values);
    }
    __name(Bm, "Bm");
    function Tt(e) {
      if (typeof e != "object" || e == null || e instanceof Me || kr(e)) return e;
      if (Sr(e)) return new Fe(e.toFixed());
      if (vr(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let r = e.length, t;
        for (t = Array(r); r--; ) t[r] = Tt(e[r]);
        return t;
      }
      if (typeof e == "object") {
        let r = {};
        for (let t in e) t === "__proto__" ? Object.defineProperty(r, t, { value: Tt(e[t]), configurable: true, enumerable: true, writable: true }) : r[t] = Tt(e[t]);
        return r;
      }
      ar(e, "Unknown value");
    }
    __name(Tt, "Tt");
    function Xa(e, r, t, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = r.customDataProxyFetch;
        return "transaction" in r && i !== void 0 && (r.transaction?.kind === "batch" && r.transaction.lock.then(), r.transaction = i), n === t.length ? e._executeRequest(r) : t[n]({ model: r.model, operation: r.model ? r.action : r.clientMethod, args: za(r.args ?? {}), __internalParams: r, query: /* @__PURE__ */ __name((s, a = r) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = nl(o, l), a.args = s, Xa(e, a, t, n + 1);
        }, "query") });
      });
    }
    __name(Xa, "Xa");
    function el(e, r) {
      let { jsModelName: t, action: n, clientMethod: i } = r, o = t ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(r);
      let s = e._extensions.getAllQueryCallbacks(t ?? "$none", o);
      return Xa(e, r, s);
    }
    __name(el, "el");
    function rl(e) {
      return (r) => {
        let t = { requests: r }, n = r[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? tl(t, n, 0, e) : e(t);
      };
    }
    __name(rl, "rl");
    function tl(e, r, t, n) {
      if (t === r.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return r[t]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = nl(i, l), tl(a, r, t + 1, n);
      } });
    }
    __name(tl, "tl");
    var Za = /* @__PURE__ */ __name((e) => e, "Za");
    function nl(e = Za, r = Za) {
      return (t) => e(r(t));
    }
    __name(nl, "nl");
    var il = N("prisma:client");
    var ol = { Vercel: "vercel", "Netlify CI": "netlify" };
    function sl({ postinstall: e, ciName: r, clientVersion: t, generator: n }) {
      if (il("checkPlatformCaching:postinstall", e), il("checkPlatformCaching:ciName", r), e === true && !(n?.output && typeof (n.output.fromEnvVar ?? n.output.value) == "string") && r && r in ol) {
        let i = `Prisma has detected that this project was built on ${r}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ol[r]}-build`;
        throw console.error(i), new P(i, t);
      }
    }
    __name(sl, "sl");
    function al(e, r) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [r[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    __name(al, "al");
    var dl = O(__require("node:fs"));
    var St = O(__require("node:path"));
    function Qn(e) {
      let { runtimeBinaryTarget: r } = e;
      return `Add "${r}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Um(e)}`;
    }
    __name(Qn, "Qn");
    function Um(e) {
      let { generator: r, generatorBinaryTargets: t, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...t, i];
      return ki({ ...r, binaryTargets: o });
    }
    __name(Um, "Um");
    function Xe(e) {
      let { runtimeBinaryTarget: r } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${r}".`;
    }
    __name(Xe, "Xe");
    function er(e) {
      let { searchedLocations: r } = e;
      return `The following locations have been searched:
${[...new Set(r)].map((i) => `  ${i}`).join(`
`)}`;
    }
    __name(er, "er");
    function ll(e) {
      let { runtimeBinaryTarget: r } = e;
      return `${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${r}".
${Qn(e)}

${er(e)}`;
    }
    __name(ll, "ll");
    function Wn(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    __name(Wn, "Wn");
    function Jn(e) {
      let { errorStack: r } = e;
      return r?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
    }
    __name(Jn, "Jn");
    function ul(e) {
      let { queryEngineName: r } = e;
      return `${Xe(e)}${Jn(e)}

This is likely caused by a bundler that has not copied "${r}" next to the resulting bundle.
Ensure that "${r}" has been copied next to the bundle or in "${e.expectedLocation}".

${Wn("engine-not-found-bundler-investigation")}

${er(e)}`;
    }
    __name(ul, "ul");
    function cl(e) {
      let { runtimeBinaryTarget: r, generatorBinaryTargets: t } = e, n = t.find((i) => i.native);
      return `${Xe(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${r}".
${Qn(e)}

${er(e)}`;
    }
    __name(cl, "cl");
    function pl(e) {
      let { queryEngineName: r } = e;
      return `${Xe(e)}${Jn(e)}

This is likely caused by tooling that has not copied "${r}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${r}" has been copied to "${e.expectedLocation}".

${Wn("engine-not-found-tooling-investigation")}

${er(e)}`;
    }
    __name(pl, "pl");
    var Gm = N("prisma:client:engines:resolveEnginePath");
    var Qm = /* @__PURE__ */ __name(() => new RegExp("runtime[\\\\/]library\\.m?js$"), "Qm");
    async function ml(e, r) {
      let t = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? r.prismaPath;
      if (t !== void 0) return t;
      let { enginePath: n, searchedLocations: i } = await Wm(e, r);
      if (Gm("enginePath", n), n !== void 0 && e === "binary" && Ri(n), n !== void 0) return r.prismaPath = n;
      let o = await ir(), s = r.generator?.binaryTargets ?? [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(Qm()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: r.generator, runtimeBinaryTarget: o, queryEngineName: fl(e, o), expectedLocation: St.default.relative(process.cwd(), r.dirname), errorStack: new Error().stack }, p;
      throw a && l ? p = cl(c) : l ? p = ll(c) : u ? p = ul(c) : p = pl(c), new P(p, r.clientVersion);
    }
    __name(ml, "ml");
    async function Wm(e, r) {
      let t = await ir(), n = [], i = [r.dirname, St.default.resolve(__dirname, ".."), r.generator?.output?.value ?? __dirname, St.default.resolve(__dirname, "../../../.prisma/client"), "/tmp/prisma-engines", r.cwd];
      __filename.includes("resolveEnginePath") && i.push(ms());
      for (let o of i) {
        let s = fl(e, t), a = St.default.join(o, s);
        if (n.push(o), dl.default.existsSync(a)) return { enginePath: a, searchedLocations: n };
      }
      return { enginePath: void 0, searchedLocations: n };
    }
    __name(Wm, "Wm");
    function fl(e, r) {
      return e === "library" ? Gt(r, "fs") : `query-engine-${r}${r === "windows" ? ".exe" : ""}`;
    }
    __name(fl, "fl");
    function gl(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (r) => `${r[0]}5`) : "";
    }
    __name(gl, "gl");
    function hl(e) {
      return e.split(`
`).map((r) => r.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    __name(hl, "hl");
    var yl = O(Os());
    function bl({ title: e, user: r = "prisma", repo: t = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, yl.default)({ user: r, repo: t, template: n, title: e, body: i });
    }
    __name(bl, "bl");
    function El({ version: e, binaryTarget: r, title: t, description: n, engineVersion: i, database: o, query: s }) {
      let a = Bo(6e3 - (s?.length ?? 0)), l = hl(wr(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = wr(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${r?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? gl(s) : ""}
\`\`\`
`), p = bl({ title: t, body: c });
      return `${t}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Y(p)}

If you want the Prisma team to look into it, please open the link above 🙏
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    __name(El, "El");
    function wl(e, r) {
      throw new Error(r);
    }
    __name(wl, "wl");
    function Jm(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name(Jm, "Jm");
    function Km(e, r) {
      let t = {};
      for (let n of Object.keys(e)) t[n] = r(e[n], n);
      return t;
    }
    __name(Km, "Km");
    function Vr(e) {
      return e === null ? e : Array.isArray(e) ? e.map(Vr) : typeof e == "object" ? Jm(e) ? Hm(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : Km(e, Vr) : e;
    }
    __name(Vr, "Vr");
    function Hm({ $type: e, value: r }) {
      switch (e) {
        case "BigInt":
          return BigInt(r);
        case "Bytes": {
          let { buffer: t, byteOffset: n, byteLength: i } = Buffer.from(r, "base64");
          return new Uint8Array(t, n, i);
        }
        case "DateTime":
          return new Date(r);
        case "Decimal":
          return new Le(r);
        case "Json":
          return JSON.parse(r);
        default:
          wl(r, "Unknown tagged value");
      }
    }
    __name(Hm, "Hm");
    var xl = "6.19.3";
    var zm = /* @__PURE__ */ __name(() => globalThis.process?.release?.name === "node", "zm");
    var Zm = /* @__PURE__ */ __name(() => !!globalThis.Bun || !!globalThis.process?.versions?.bun, "Zm");
    var Xm = /* @__PURE__ */ __name(() => !!globalThis.Deno, "Xm");
    var ef = /* @__PURE__ */ __name(() => typeof globalThis.Netlify == "object", "ef");
    var rf = /* @__PURE__ */ __name(() => typeof globalThis.EdgeRuntime == "object", "rf");
    var tf = /* @__PURE__ */ __name(() => globalThis.navigator?.userAgent === "Cloudflare-Workers", "tf");
    function nf() {
      return [[ef, "netlify"], [rf, "edge-light"], [tf, "workerd"], [Xm, "deno"], [Zm, "bun"], [zm, "node"]].flatMap((t) => t[0]() ? [t[1]] : []).at(0) ?? "";
    }
    __name(nf, "nf");
    var of = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function Kn() {
      let e = nf();
      return { id: e, prettyName: of[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(Kn, "Kn");
    function jr({ inlineDatasources: e, overrideDatasources: r, env: t, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = r[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = t[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0) throw new P(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0) throw new P("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    __name(jr, "jr");
    var Hn = class extends Error {
      static {
        __name(this, "Hn");
      }
      clientVersion;
      cause;
      constructor(r, t) {
        super(r), this.clientVersion = t.clientVersion, this.cause = t.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var oe = class extends Hn {
      static {
        __name(this, "oe");
      }
      isRetryable;
      constructor(r, t) {
        super(r, t), this.isRetryable = t.isRetryable ?? true;
      }
    };
    function R(e, r) {
      return { ...e, isRetryable: r };
    }
    __name(R, "R");
    var ur = class extends oe {
      static {
        __name(this, "ur");
      }
      name = "InvalidDatasourceError";
      code = "P6001";
      constructor(r, t) {
        super(r, R(t, false));
      }
    };
    x(ur, "InvalidDatasourceError");
    function vl(e) {
      let r = { clientVersion: e.clientVersion }, t = Object.keys(e.inlineDatasources)[0], n = jr({ inlineDatasources: e.inlineDatasources, overrideDatasources: e.overrideDatasources, clientVersion: e.clientVersion, env: { ...e.env, ...typeof process < "u" ? process.env : {} } }), i;
      try {
        i = new URL(n);
      } catch {
        throw new ur(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\``, r);
      }
      let { protocol: o, searchParams: s } = i;
      if (o !== "prisma:" && o !== sn) throw new ur(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\` or \`prisma+postgres://\``, r);
      let a = s.get("api_key");
      if (a === null || a.length < 1) throw new ur(`Error validating datasource \`${t}\`: the URL must contain a valid API key`, r);
      let l = Ii(i) ? "http:" : "https:";
      process.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && i.searchParams.has("use_http") && (l = "http:");
      let u = new URL(i.href.replace(o, l));
      return { apiKey: a, url: u };
    }
    __name(vl, "vl");
    var Pl = O(on());
    var Yn = class {
      static {
        __name(this, "Yn");
      }
      apiKey;
      tracingHelper;
      logLevel;
      logQueries;
      engineHash;
      constructor({ apiKey: r, tracingHelper: t, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = r, this.tracingHelper = t, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: r, transactionId: t } = {}) {
        let n = { Accept: "application/json", Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json", "Prisma-Engine-Hash": this.engineHash, "Prisma-Engine-Version": Pl.enginesVersion };
        this.tracingHelper.isEnabled() && (n.traceparent = r ?? this.tracingHelper.getTraceParent()), t && (n["X-Transaction-Id"] = t);
        let i = this.#e();
        return i.length > 0 && (n["X-Capture-Telemetry"] = i.join(", ")), n;
      }
      #e() {
        let r = [];
        return this.tracingHelper.isEnabled() && r.push("tracing"), this.logLevel && r.push(this.logLevel), this.logQueries && r.push("query"), r;
      }
    };
    function sf(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    __name(sf, "sf");
    function po(e) {
      return new Date(sf(e));
    }
    __name(po, "po");
    var Br = class extends oe {
      static {
        __name(this, "Br");
      }
      name = "ForcedRetryError";
      code = "P5001";
      constructor(r) {
        super("This request must be retried", R(r, true));
      }
    };
    x(Br, "ForcedRetryError");
    var cr = class extends oe {
      static {
        __name(this, "cr");
      }
      name = "NotImplementedYetError";
      code = "P5004";
      constructor(r, t) {
        super(r, R(t, false));
      }
    };
    x(cr, "NotImplementedYetError");
    var $ = class extends oe {
      static {
        __name(this, "$");
      }
      response;
      constructor(r, t) {
        super(r, t), this.response = t.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    };
    var pr = class extends $ {
      static {
        __name(this, "pr");
      }
      name = "SchemaMissingError";
      code = "P5005";
      constructor(r) {
        super("Schema needs to be uploaded", R(r, true));
      }
    };
    x(pr, "SchemaMissingError");
    var mo = "This request could not be understood by the server";
    var Rt = class extends $ {
      static {
        __name(this, "Rt");
      }
      name = "BadRequestError";
      code = "P5000";
      constructor(r, t, n) {
        super(t || mo, R(r, false)), n && (this.code = n);
      }
    };
    x(Rt, "BadRequestError");
    var At = class extends $ {
      static {
        __name(this, "At");
      }
      name = "HealthcheckTimeoutError";
      code = "P5013";
      logs;
      constructor(r, t) {
        super("Engine not started: healthcheck timeout", R(r, true)), this.logs = t;
      }
    };
    x(At, "HealthcheckTimeoutError");
    var Ct = class extends $ {
      static {
        __name(this, "Ct");
      }
      name = "EngineStartupError";
      code = "P5014";
      logs;
      constructor(r, t, n) {
        super(t, R(r, true)), this.logs = n;
      }
    };
    x(Ct, "EngineStartupError");
    var It = class extends $ {
      static {
        __name(this, "It");
      }
      name = "EngineVersionNotSupportedError";
      code = "P5012";
      constructor(r) {
        super("Engine version is not supported", R(r, false));
      }
    };
    x(It, "EngineVersionNotSupportedError");
    var fo = "Request timed out";
    var Dt = class extends $ {
      static {
        __name(this, "Dt");
      }
      name = "GatewayTimeoutError";
      code = "P5009";
      constructor(r, t = fo) {
        super(t, R(r, false));
      }
    };
    x(Dt, "GatewayTimeoutError");
    var af = "Interactive transaction error";
    var Ot = class extends $ {
      static {
        __name(this, "Ot");
      }
      name = "InteractiveTransactionError";
      code = "P5015";
      constructor(r, t = af) {
        super(t, R(r, false));
      }
    };
    x(Ot, "InteractiveTransactionError");
    var lf = "Request parameters are invalid";
    var kt = class extends $ {
      static {
        __name(this, "kt");
      }
      name = "InvalidRequestError";
      code = "P5011";
      constructor(r, t = lf) {
        super(t, R(r, false));
      }
    };
    x(kt, "InvalidRequestError");
    var go = "Requested resource does not exist";
    var _t = class extends $ {
      static {
        __name(this, "_t");
      }
      name = "NotFoundError";
      code = "P5003";
      constructor(r, t = go) {
        super(t, R(r, false));
      }
    };
    x(_t, "NotFoundError");
    var ho = "Unknown server error";
    var Ur = class extends $ {
      static {
        __name(this, "Ur");
      }
      name = "ServerError";
      code = "P5006";
      logs;
      constructor(r, t, n) {
        super(t || ho, R(r, true)), this.logs = n;
      }
    };
    x(Ur, "ServerError");
    var yo = "Unauthorized, check your connection string";
    var Nt = class extends $ {
      static {
        __name(this, "Nt");
      }
      name = "UnauthorizedError";
      code = "P5007";
      constructor(r, t = yo) {
        super(t, R(r, false));
      }
    };
    x(Nt, "UnauthorizedError");
    var bo = "Usage exceeded, retry again later";
    var Lt = class extends $ {
      static {
        __name(this, "Lt");
      }
      name = "UsageExceededError";
      code = "P5008";
      constructor(r, t = bo) {
        super(t, R(r, true));
      }
    };
    x(Lt, "UsageExceededError");
    async function uf(e) {
      let r;
      try {
        r = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let t = JSON.parse(r);
        if (typeof t == "string") switch (t) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: t };
          default:
            return { type: "UnknownTextError", body: t };
        }
        if (typeof t == "object" && t !== null) {
          if ("is_panic" in t && "message" in t && "error_code" in t) return { type: "QueryEngineError", body: t };
          if ("EngineNotStarted" in t || "InteractiveTransactionMisrouted" in t || "InvalidRequestError" in t) {
            let n = Object.values(t)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: t } : { type: "DataProxyError", body: t };
          }
        }
        return { type: "UnknownJsonError", body: t };
      } catch {
        return r === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: r };
      }
    }
    __name(uf, "uf");
    async function Ft(e, r) {
      if (e.ok) return;
      let t = { clientVersion: r, response: e }, n = await uf(e);
      if (n.type === "QueryEngineError") throw new z(n.body.message, { code: n.body.error_code, clientVersion: r });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError") throw new Ur(t, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing") return new pr(t);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new It(t);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new Ct(t, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new P(i, r, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new At(t, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Ot(t, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body) throw new kt(t, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403) throw new Nt(t, Gr(yo, n));
      if (e.status === 404) return new _t(t, Gr(go, n));
      if (e.status === 429) throw new Lt(t, Gr(bo, n));
      if (e.status === 504) throw new Dt(t, Gr(fo, n));
      if (e.status >= 500) throw new Ur(t, Gr(ho, n));
      if (e.status >= 400) throw new Rt(t, Gr(mo, n));
    }
    __name(Ft, "Ft");
    function Gr(e, r) {
      return r.type === "EmptyError" ? e : `${e}: ${JSON.stringify(r)}`;
    }
    __name(Gr, "Gr");
    function Tl(e) {
      let r = Math.pow(2, e) * 50, t = Math.ceil(Math.random() * r) - Math.ceil(r / 2), n = r + t;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    __name(Tl, "Tl");
    var $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function Sl(e) {
      let r = new TextEncoder().encode(e), t = "", n = r.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
      for (let p = 0; p < o; p = p + 3) c = r[p] << 16 | r[p + 1] << 8 | r[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, t += $e[s] + $e[a] + $e[l] + $e[u];
      return i == 1 ? (c = r[o], s = (c & 252) >> 2, a = (c & 3) << 4, t += $e[s] + $e[a] + "==") : i == 2 && (c = r[o] << 8 | r[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, t += $e[s] + $e[a] + $e[l] + "="), t;
    }
    __name(Sl, "Sl");
    function Rl(e) {
      if (!!e.generator?.previewFeatures.some((t) => t.toLowerCase().includes("metrics"))) throw new P("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    __name(Rl, "Rl");
    var Al = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    var Mt = class extends oe {
      static {
        __name(this, "Mt");
      }
      name = "RequestError";
      code = "P5010";
      constructor(r, t) {
        super(`Cannot fetch data from service:
${r}`, R(t, true));
      }
    };
    x(Mt, "RequestError");
    async function dr(e, r, t = (n) => n) {
      let { clientVersion: n, ...i } = r, o = t(fetch);
      try {
        return await o(e, i);
      } catch (s) {
        let a = s.message ?? "Unknown error";
        throw new Mt(a, { clientVersion: n, cause: s });
      }
    }
    __name(dr, "dr");
    var pf = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var Cl = N("prisma:client:dataproxyEngine");
    async function df(e, r) {
      let t = Al["@prisma/engines-version"], n = r.clientVersion ?? "unknown";
      if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
      let [i, o] = n?.split("-") ?? [];
      if (o === void 0 && pf.test(i)) return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        let [s] = t.split("-") ?? [], [a, l, u] = s.split("."), c = mf(`<=${a}.${l}.${u}`), p = await dr(c, { clientVersion: n });
        if (!p.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
        let d = await p.text();
        Cl("length of body fetched from unpkg.com", d.length);
        let f;
        try {
          f = JSON.parse(d);
        } catch (h) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), h;
        }
        return f.version;
      }
      throw new cr("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    __name(df, "df");
    async function Il(e, r) {
      let t = await df(e, r);
      return Cl("version", t), t;
    }
    __name(Il, "Il");
    function mf(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    __name(mf, "mf");
    var Dl = 3;
    var $t = N("prisma:client:dataproxyEngine");
    var qt = class {
      static {
        __name(this, "qt");
      }
      name = "DataProxyEngine";
      inlineSchema;
      inlineSchemaHash;
      inlineDatasources;
      config;
      logEmitter;
      env;
      clientVersion;
      engineHash;
      tracingHelper;
      remoteClientVersion;
      host;
      headerBuilder;
      startPromise;
      protocol;
      constructor(r) {
        Rl(r), this.config = r, this.env = r.env, this.inlineSchema = Sl(r.inlineSchema), this.inlineDatasources = r.inlineDatasources, this.inlineSchemaHash = r.inlineSchemaHash, this.clientVersion = r.clientVersion, this.engineHash = r.engineVersion, this.logEmitter = r.logEmitter, this.tracingHelper = r.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let { apiKey: r, url: t } = this.getURLAndAPIKey();
          this.host = t.host, this.protocol = t.protocol, this.headerBuilder = new Yn({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel ?? "error", logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Il(this.host, this.config), $t("host", this.host), $t("protocol", this.protocol);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(r) {
        r?.logs?.length && r.logs.forEach((t) => {
          switch (t.level) {
            case "debug":
            case "trace":
              $t(t);
              break;
            case "error":
            case "warn":
            case "info": {
              this.logEmitter.emit(t.level, { timestamp: po(t.timestamp), message: t.attributes.message ?? "", target: t.target ?? "BinaryEngine" });
              break;
            }
            case "query": {
              this.logEmitter.emit("query", { query: t.attributes.query ?? "", timestamp: po(t.timestamp), duration: t.attributes.duration_ms ?? 0, params: t.attributes.params ?? "", target: t.target ?? "BinaryEngine" });
              break;
            }
            default:
              t.level;
          }
        }), r?.traces?.length && this.tracingHelper.dispatchEngineSpans(r.traces);
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(r) {
        return await this.start(), `${this.protocol}//${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
      }
      async uploadSchema() {
        let r = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(r, async () => {
          let t = await dr(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          t.ok || $t("schema response status", t.status);
          let n = await Ft(t, this.clientVersion);
          if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(r, { traceparent: t, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: r, traceparent: t, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(r, { traceparent: t, transaction: n, customDataProxyFetch: i }) {
        let o = n?.kind === "itx" ? n.options : void 0, s = Mr(r, n);
        return (await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: t })).map((l) => (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l ? this.convertProtocolErrorsToClientError(l.errors) : l));
      }
      requestInternal({ body: r, traceparent: t, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: /* @__PURE__ */ __name(async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await dr(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t, transactionId: i?.id }), body: JSON.stringify(r), clientVersion: this.clientVersion }, n);
          a.ok || $t("graphql response status", a.status), await this.handleError(await Ft(a, this.clientVersion));
          let l = await a.json();
          if (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l) throw this.convertProtocolErrorsToClientError(l.errors);
          return "batchResult" in l ? l.batchResult : l;
        }, "callback") });
      }
      async transaction(r, t, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[r]} transaction`, callback: /* @__PURE__ */ __name(async ({ logHttpCall: o }) => {
          if (r === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let l = await dr(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await Ft(l, this.clientVersion));
            let u = await l.json(), { extensions: c } = u;
            c && this.propagateResponseExtensions(c);
            let p = u.id, d = u["data-proxy"].endpoint;
            return { id: p, payload: { endpoint: d } };
          } else {
            let s = `${n.payload.endpoint}/${r}`;
            o(s);
            let a = await dr(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await Ft(a, this.clientVersion));
            let l = await a.json(), { extensions: u } = l;
            u && this.propagateResponseExtensions(u);
            return;
          }
        }, "callback") });
      }
      getURLAndAPIKey() {
        return vl({ clientVersion: this.clientVersion, env: this.env, inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources });
      }
      metrics() {
        throw new cr("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(r) {
        for (let t = 0; ; t++) {
          let n = /* @__PURE__ */ __name((i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${t})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }, "n");
          try {
            return await r.callback({ logHttpCall: n });
          } catch (i) {
            if (!(i instanceof oe) || !i.isRetryable) throw i;
            if (t >= Dl) throw i instanceof Br ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${t + 1}/${Dl} failed for ${r.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let o = await Tl(t);
            this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(r) {
        if (r instanceof pr) throw await this.uploadSchema(), new Br({ clientVersion: this.clientVersion, cause: r });
        if (r) throw r;
      }
      convertProtocolErrorsToClientError(r) {
        return r.length === 1 ? $r(r[0], this.config.clientVersion, this.config.activeProvider) : new V(JSON.stringify(r), { clientVersion: this.config.clientVersion });
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    };
    function Ol(e) {
      if (e?.kind === "itx") return e.options.id;
    }
    __name(Ol, "Ol");
    var wo = O(__require("node:os"));
    var kl = O(__require("node:path"));
    var Eo = Symbol("PrismaLibraryEngineCache");
    function ff() {
      let e = globalThis;
      return e[Eo] === void 0 && (e[Eo] = {}), e[Eo];
    }
    __name(ff, "ff");
    function gf(e) {
      let r = ff();
      if (r[e] !== void 0) return r[e];
      let t = kl.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = wo.default.constants.dlopen.RTLD_LAZY | wo.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, t, i), r[e] = n.exports, n.exports;
    }
    __name(gf, "gf");
    var _l = { async loadLibrary(e) {
      let r = await fi(), t = await ml("library", e);
      try {
        return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => gf(t));
      } catch (n) {
        let i = Ai({ e: n, platformInfo: r, id: t });
        throw new P(i, e.clientVersion);
      }
    } };
    var xo;
    var Nl = { async loadLibrary(e) {
      let { clientVersion: r, adapter: t, engineWasm: n } = e;
      if (t === void 0) throw new P(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Kn().prettyName})`, r);
      if (n === void 0) throw new P("WASM engine was unexpectedly `undefined`", r);
      xo === void 0 && (xo = (async () => {
        let o = await n.getRuntime(), s = await n.getQueryEngineWasmModule();
        if (s == null) throw new P("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", r);
        let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a), u = l.exports.__wbindgen_start;
        return o.__wbg_set_wasm(l.exports), u(), o.QueryEngine;
      })());
      let i = await xo;
      return { debugPanic() {
        return Promise.reject("{}");
      }, dmmf() {
        return Promise.resolve("{}");
      }, version() {
        return { commit: "unknown", version: "unknown" };
      }, QueryEngine: i };
    } };
    var hf = "P2036";
    var Re = N("prisma:client:libraryEngine");
    function yf(e) {
      return e.item_type === "query" && "query" in e;
    }
    __name(yf, "yf");
    function bf(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    __name(bf, "bf");
    var Ll = [...li, "native"];
    var Ef = 0xffffffffffffffffn;
    var vo = 1n;
    function wf() {
      let e = vo++;
      return vo > Ef && (vo = 1n), e;
    }
    __name(wf, "wf");
    var Qr = class {
      static {
        __name(this, "Qr");
      }
      name = "LibraryEngine";
      engine;
      libraryInstantiationPromise;
      libraryStartingPromise;
      libraryStoppingPromise;
      libraryStarted;
      executingQueryPromise;
      config;
      QueryEngineConstructor;
      libraryLoader;
      library;
      logEmitter;
      libQueryEnginePath;
      binaryTarget;
      datasourceOverrides;
      datamodel;
      logQueries;
      logLevel;
      lastQuery;
      loggerRustPanic;
      tracingHelper;
      adapterPromise;
      versionInfo;
      constructor(r, t) {
        this.libraryLoader = t ?? _l, r.engineWasm !== void 0 && (this.libraryLoader = t ?? Nl), this.config = r, this.libraryStarted = false, this.logQueries = r.logQueries ?? false, this.logLevel = r.logLevel ?? "error", this.logEmitter = r.logEmitter, this.datamodel = r.inlineSchema, this.tracingHelper = r.tracingHelper, r.enableDebugLogs && (this.logLevel = "debug");
        let n = Object.keys(r.overrideDatasources)[0], i = r.overrideDatasources[n]?.url;
        n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
      }
      wrapEngine(r) {
        return { applyPendingMigrations: r.applyPendingMigrations?.bind(r), commitTransaction: this.withRequestId(r.commitTransaction.bind(r)), connect: this.withRequestId(r.connect.bind(r)), disconnect: this.withRequestId(r.disconnect.bind(r)), metrics: r.metrics?.bind(r), query: this.withRequestId(r.query.bind(r)), rollbackTransaction: this.withRequestId(r.rollbackTransaction.bind(r)), sdlSchema: r.sdlSchema?.bind(r), startTransaction: this.withRequestId(r.startTransaction.bind(r)), trace: r.trace.bind(r), free: r.free?.bind(r) };
      }
      withRequestId(r) {
        return async (...t) => {
          let n = wf().toString();
          try {
            return await r(...t, n);
          } finally {
            if (this.tracingHelper.isEnabled()) {
              let i = await this.engine?.trace(n);
              if (i) {
                let o = JSON.parse(i);
                this.tracingHelper.dispatchEngineSpans(o.spans);
              }
            }
          }
        };
      }
      async applyPendingMigrations() {
        throw new Error("Cannot call this method from this type of engine instance");
      }
      async transaction(r, t, n) {
        await this.start();
        let i = await this.adapterPromise, o = JSON.stringify(t), s;
        if (r === "start") {
          let l = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
          s = await this.engine?.startTransaction(l, o);
        } else r === "commit" ? s = await this.engine?.commitTransaction(n.id, o) : r === "rollback" && (s = await this.engine?.rollbackTransaction(n.id, o));
        let a = this.parseEngineResponse(s);
        if (xf(a)) {
          let l = this.getExternalAdapterError(a, i?.errorRegistry);
          throw l ? l.error : new z(a.message, { code: a.error_code, clientVersion: this.config.clientVersion, meta: a.meta });
        } else if (typeof a.message == "string") throw new V(a.message, { clientVersion: this.config.clientVersion });
        return a;
      }
      async instantiateLibrary() {
        if (Re("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
        ai(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan("load_engine", () => this.loadEngine()), this.version();
      }
      async getCurrentBinaryTarget() {
        {
          if (this.binaryTarget) return this.binaryTarget;
          let r = await this.tracingHelper.runInChildSpan("detect_platform", () => ir());
          if (!Ll.includes(r)) throw new P(`Unknown ${ce("PRISMA_QUERY_ENGINE_LIBRARY")} ${ce(W(r))}. Possible binaryTargets: ${qe(Ll.join(", "))} or a path to the query engine library.
You may have to run ${qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
          return r;
        }
      }
      parseEngineResponse(r) {
        if (!r) throw new V("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(r);
        } catch {
          throw new V("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      async loadEngine() {
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let r = new WeakRef(this);
            this.adapterPromise || (this.adapterPromise = this.config.adapter?.connect()?.then(tn));
            let t = await this.adapterPromise;
            t && Re("Using driver adapter: %O", t), this.engine = this.wrapEngine(new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json", enableTracing: this.tracingHelper.isEnabled() }, (n) => {
              r.deref()?.logger(n);
            }, t));
          } catch (r) {
            let t = r, n = this.parseInitError(t.message);
            throw typeof n == "string" ? t : new P(n.message, this.config.clientVersion, n.error_code);
          }
        }
      }
      logger(r) {
        let t = this.parseEngineResponse(r);
        t && (t.level = t?.level.toLowerCase() ?? "unknown", yf(t) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: t.query, params: t.params, duration: Number(t.duration_ms), target: t.module_path }) : bf(t) ? this.loggerRustPanic = new ae(Po(this, `${t.message}: ${t.reason} in ${t.file}:${t.line}:${t.column}`), this.config.clientVersion) : this.logEmitter.emit(t.level, { timestamp: /* @__PURE__ */ new Date(), message: t.message, target: t.module_path }));
      }
      parseInitError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      parseRequestError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        if (this.libraryInstantiationPromise || (this.libraryInstantiationPromise = this.instantiateLibrary()), await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Re(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted) return;
        let r = /* @__PURE__ */ __name(async () => {
          Re("library starting");
          try {
            let t = { traceparent: this.tracingHelper.getTraceParent() };
            await this.engine?.connect(JSON.stringify(t)), this.libraryStarted = true, this.adapterPromise || (this.adapterPromise = this.config.adapter?.connect()?.then(tn)), await this.adapterPromise, Re("library started");
          } catch (t) {
            let n = this.parseInitError(t.message);
            throw typeof n == "string" ? t : new P(n.message, this.config.clientVersion, n.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        }, "r");
        return this.libraryStartingPromise = this.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryInstantiationPromise, await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Re("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted) {
          await (await this.adapterPromise)?.dispose(), this.adapterPromise = void 0;
          return;
        }
        let r = /* @__PURE__ */ __name(async () => {
          await new Promise((n) => setImmediate(n)), Re("library stopping");
          let t = { traceparent: this.tracingHelper.getTraceParent() };
          await this.engine?.disconnect(JSON.stringify(t)), this.engine?.free && this.engine.free(), this.engine = void 0, this.libraryStarted = false, this.libraryStoppingPromise = void 0, this.libraryInstantiationPromise = void 0, await (await this.adapterPromise)?.dispose(), this.adapterPromise = void 0, Re("library stopped");
        }, "r");
        return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
      }
      version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
      }
      debugPanic(r) {
        return this.library?.debugPanic(r);
      }
      async request(r, { traceparent: t, interactiveTransaction: n }) {
        Re(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let i = JSON.stringify({ traceparent: t }), o = JSON.stringify(r);
        try {
          await this.start();
          let s = await this.adapterPromise;
          this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
          let a = this.parseEngineResponse(await this.executingQueryPromise);
          if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], s?.errorRegistry) : new V(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic) throw this.loggerRustPanic;
          return { data: a };
        } catch (s) {
          if (s instanceof P) throw s;
          if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:")) throw new ae(Po(this, s.message), this.config.clientVersion);
          let a = this.parseRequestError(s.message);
          throw typeof a == "string" ? s : new V(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(r, { transaction: t, traceparent: n }) {
        Re("requestBatch");
        let i = Mr(r, t);
        await this.start();
        let o = await this.adapterPromise;
        this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine?.query(this.lastQuery, JSON.stringify({ traceparent: n }), Ol(t));
        let s = await this.executingQueryPromise, a = this.parseEngineResponse(s);
        if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], o?.errorRegistry) : new V(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: l, errors: u } = a;
        if (Array.isArray(l)) return l.map((c) => c.errors && c.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0], o?.errorRegistry) : { data: c });
        throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a));
      }
      buildQueryError(r, t) {
        if (r.user_facing_error.is_panic) return new ae(Po(this, r.user_facing_error.message), this.config.clientVersion);
        let n = this.getExternalAdapterError(r.user_facing_error, t);
        return n ? n.error : $r(r, this.config.clientVersion, this.config.activeProvider);
      }
      getExternalAdapterError(r, t) {
        if (r.error_code === hf && t) {
          let n = r.meta?.id;
          ln(typeof n == "number", "Malformed external JS error received from the engine");
          let i = t.consumeError(n);
          return ln(i, "External error with reported id was not registered"), i;
        }
      }
      async metrics(r) {
        await this.start();
        let t = await this.engine.metrics(JSON.stringify(r));
        return r.format === "prometheus" ? t : this.parseEngineResponse(t);
      }
    };
    function xf(e) {
      return typeof e == "object" && e !== null && e.error_code !== void 0;
    }
    __name(xf, "xf");
    function Po(e, r) {
      return El({ binaryTarget: e.binaryTarget, title: r, version: e.config.clientVersion, engineVersion: e.versionInfo?.commit, database: e.config.activeProvider, query: e.lastQuery });
    }
    __name(Po, "Po");
    function Fl({ url: e, adapter: r, copyEngine: t, targetBuildType: n }) {
      let i = [], o = [], s = /* @__PURE__ */ __name((g) => {
        i.push({ _tag: "warning", value: g });
      }, "s"), a = /* @__PURE__ */ __name((g) => {
        let I = g.join(`
`);
        o.push({ _tag: "error", value: I });
      }, "a"), l = !!e?.startsWith("prisma://"), u = an(e), c = !!r, p = l || u;
      !c && t && p && n !== "client" && n !== "wasm-compiler-edge" && s(["recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"]);
      let d = p || !t;
      c && (d || n === "edge") && (n === "edge" ? a(["Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.", "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."]) : p ? a(["You've provided both a driver adapter and an Accelerate database URL. Driver adapters currently cannot connect to Accelerate.", "Please provide either a driver adapter with a direct database URL or an Accelerate URL and no driver adapter."]) : t || a(["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."]));
      let f = { accelerate: d, ppg: u, driverAdapters: c };
      function h(g) {
        return g.length > 0;
      }
      __name(h, "h");
      return h(o) ? { ok: false, diagnostics: { warnings: i, errors: o }, isUsing: f } : { ok: true, diagnostics: { warnings: i }, isUsing: f };
    }
    __name(Fl, "Fl");
    function Ml({ copyEngine: e = true }, r) {
      let t;
      try {
        t = jr({ inlineDatasources: r.inlineDatasources, overrideDatasources: r.overrideDatasources, env: { ...r.env, ...process.env }, clientVersion: r.clientVersion });
      } catch {
      }
      let { ok: n, isUsing: i, diagnostics: o } = Fl({ url: t, adapter: r.adapter, copyEngine: e, targetBuildType: "library" });
      for (let p of o.warnings) at(...p.value);
      if (!n) {
        let p = o.errors[0];
        throw new Z(p.value, { clientVersion: r.clientVersion });
      }
      let s = Er(r.generator), a = s === "library", l = s === "binary", u = s === "client", c = (i.accelerate || i.ppg) && !i.driverAdapters;
      return i.accelerate ? new qt(r) : (i.driverAdapters, a ? new Qr(r) : new Qr(r));
    }
    __name(Ml, "Ml");
    function $l({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    __name($l, "$l");
    var ql = /* @__PURE__ */ __name((e) => ({ command: e }), "ql");
    var Vl = /* @__PURE__ */ __name((e) => e.strings.reduce((r, t, n) => `${r}@P${n}${t}`), "Vl");
    function Wr(e) {
      try {
        return jl(e, "fast");
      } catch {
        return jl(e, "slow");
      }
    }
    __name(Wr, "Wr");
    function jl(e, r) {
      return JSON.stringify(e.map((t) => Ul(t, r)));
    }
    __name(jl, "jl");
    function Ul(e, r) {
      if (Array.isArray(e)) return e.map((t) => Ul(t, r));
      if (typeof e == "bigint") return { prisma__type: "bigint", prisma__value: e.toString() };
      if (vr(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
      if (Fe.isDecimal(e)) return { prisma__type: "decimal", prisma__value: e.toJSON() };
      if (Buffer.isBuffer(e)) return { prisma__type: "bytes", prisma__value: e.toString("base64") };
      if (vf(e)) return { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") };
      if (ArrayBuffer.isView(e)) {
        let { buffer: t, byteOffset: n, byteLength: i } = e;
        return { prisma__type: "bytes", prisma__value: Buffer.from(t, n, i).toString("base64") };
      }
      return typeof e == "object" && r === "slow" ? Gl(e) : e;
    }
    __name(Ul, "Ul");
    function vf(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(vf, "vf");
    function Gl(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(Bl);
      let r = {};
      for (let t of Object.keys(e)) r[t] = Bl(e[t]);
      return r;
    }
    __name(Gl, "Gl");
    function Bl(e) {
      return typeof e == "bigint" ? e.toString() : Gl(e);
    }
    __name(Bl, "Bl");
    var Pf = /^(\s*alter\s)/i;
    var Ql = N("prisma:client");
    function To(e, r, t, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && t.length > 0 && Pf.exec(r)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(To, "To");
    var So = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: r }) => (t) => {
      let n = "", i;
      if (Vn(t)) n = t.sql, i = { values: Wr(t.values), __prismaRawParameters__: true };
      else if (Array.isArray(t)) {
        let [o, ...s] = t;
        n = o, i = { values: Wr(s || []), __prismaRawParameters__: true };
      } else switch (r) {
        case "sqlite":
        case "mysql": {
          n = t.sql, i = { values: Wr(t.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = t.text, i = { values: Wr(t.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = Vl(t), i = { values: Wr(t.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${r} provider does not support ${e}`);
      }
      return i?.values ? Ql(`prisma.${e}(${n}, ${i.values})`) : Ql(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "So");
    var Wl = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [r, ...t] = e;
      return new ie(r, t);
    } };
    var Jl = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function Ro(e) {
      return function(t, n) {
        let i, o = /* @__PURE__ */ __name((s = e) => {
          try {
            return s === void 0 || s?.kind === "itx" ? i ??= Kl(t(s)) : Kl(t(s));
          } catch (a) {
            return Promise.reject(a);
          }
        }, "o");
        return { get spec() {
          return n;
        }, then(s, a) {
          return o().then(s, a);
        }, catch(s) {
          return o().catch(s);
        }, finally(s) {
          return o().finally(s);
        }, requestTransaction(s) {
          let a = o(s);
          return a.requestTransaction ? a.requestTransaction(s) : a;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(Ro, "Ro");
    function Kl(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(Kl, "Kl");
    var Tf = xi.split(".")[0];
    var Sf = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, dispatchEngineSpans() {
    }, getActiveContext() {
    }, runInChildSpan(e, r) {
      return r();
    } };
    var Ao = class {
      static {
        __name(this, "Ao");
      }
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(r) {
        return this.getGlobalTracingHelper().getTraceParent(r);
      }
      dispatchEngineSpans(r) {
        return this.getGlobalTracingHelper().dispatchEngineSpans(r);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(r, t) {
        return this.getGlobalTracingHelper().runInChildSpan(r, t);
      }
      getGlobalTracingHelper() {
        let r = globalThis[`V${Tf}_PRISMA_INSTRUMENTATION`], t = globalThis.PRISMA_INSTRUMENTATION;
        return r?.helper ?? t?.helper ?? Sf;
      }
    };
    function Hl() {
      return new Ao();
    }
    __name(Hl, "Hl");
    function Yl(e, r = () => {
    }) {
      let t, n = new Promise((i) => t = i);
      return { then(i) {
        return --e === 0 && t(r()), i?.(n);
      } };
    }
    __name(Yl, "Yl");
    function zl(e) {
      return typeof e == "string" ? e : e.reduce((r, t) => {
        let n = typeof t == "string" ? t : t.level;
        return n === "query" ? r : r && (t === "info" || r === "info") ? "info" : n;
      }, void 0);
    }
    __name(zl, "zl");
    function zn(e) {
      return typeof e.batchRequestIdx == "number";
    }
    __name(zn, "zn");
    function Zl(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let r = [];
      return e.modelName && r.push(e.modelName), e.query.arguments && r.push(Co(e.query.arguments)), r.push(Co(e.query.selection)), r.join("");
    }
    __name(Zl, "Zl");
    function Co(e) {
      return `(${Object.keys(e).sort().map((t) => {
        let n = e[t];
        return typeof n == "object" && n !== null ? `(${t} ${Co(n)})` : t;
      }).join(" ")})`;
    }
    __name(Co, "Co");
    var Rf = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
    function Io(e) {
      return Rf[e];
    }
    __name(Io, "Io");
    var Zn = class {
      static {
        __name(this, "Zn");
      }
      constructor(r) {
        this.options = r;
        this.batches = {};
      }
      batches;
      tickActive = false;
      request(r) {
        let t = this.options.batchBy(r);
        return t ? (this.batches[t] || (this.batches[t] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[t].push({ request: r, resolve: n, reject: i });
        })) : this.options.singleLoader(r);
      }
      dispatchBatches() {
        for (let r in this.batches) {
          let t = this.batches[r];
          delete this.batches[r], t.length === 1 ? this.options.singleLoader(t[0].request).then((n) => {
            n instanceof Error ? t[0].reject(n) : t[0].resolve(n);
          }).catch((n) => {
            t[0].reject(n);
          }) : (t.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(t.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < t.length; i++) t[i].reject(n);
            else for (let i = 0; i < t.length; i++) {
              let o = n[i];
              o instanceof Error ? t[i].reject(o) : t[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < t.length; i++) t[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    function mr(e, r) {
      if (r === null) return r;
      switch (e) {
        case "bigint":
          return BigInt(r);
        case "bytes": {
          let { buffer: t, byteOffset: n, byteLength: i } = Buffer.from(r, "base64");
          return new Uint8Array(t, n, i);
        }
        case "decimal":
          return new Fe(r);
        case "datetime":
        case "date":
          return new Date(r);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${r}Z`);
        case "bigint-array":
          return r.map((t) => mr("bigint", t));
        case "bytes-array":
          return r.map((t) => mr("bytes", t));
        case "decimal-array":
          return r.map((t) => mr("decimal", t));
        case "datetime-array":
          return r.map((t) => mr("datetime", t));
        case "date-array":
          return r.map((t) => mr("date", t));
        case "time-array":
          return r.map((t) => mr("time", t));
        default:
          return r;
      }
    }
    __name(mr, "mr");
    function Xn(e) {
      let r = [], t = Af(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...t };
        for (let s = 0; s < i.length; s++) o[e.columns[s]] = mr(e.types[s], i[s]);
        r.push(o);
      }
      return r;
    }
    __name(Xn, "Xn");
    function Af(e) {
      let r = {};
      for (let t = 0; t < e.columns.length; t++) r[e.columns[t]] = null;
      return r;
    }
    __name(Af, "Af");
    var Cf = N("prisma:client:request_handler");
    var ei = class {
      static {
        __name(this, "ei");
      }
      client;
      dataloader;
      logEmitter;
      constructor(r, t) {
        this.logEmitter = t, this.client = r, this.dataloader = new Zn({ batchLoader: rl(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => Io(p.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: If(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
            if (p instanceof Error) return p;
            try {
              return this.mapQueryEngineResult(n[d], p);
            } catch (f) {
              return f;
            }
          });
        }), singleLoader: /* @__PURE__ */ __name(async (n) => {
          let i = n.transaction?.kind === "itx" ? Xl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: Io(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, "singleLoader"), batchBy: /* @__PURE__ */ __name((n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Zl(n.protocolQuery), "batchBy"), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(r) {
        try {
          return await this.dataloader.request(r);
        } catch (t) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = r;
          this.handleAndLogRequestError({ error: t, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: r.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: r, unpacker: t }, n) {
        let i = n?.data, o = this.unpack(i, r, t);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
      }
      handleAndLogRequestError(r) {
        try {
          this.handleRequestError(r);
        } catch (t) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: t.message, target: r.clientMethod, timestamp: /* @__PURE__ */ new Date() }), t;
        }
      }
      handleRequestError({ error: r, clientMethod: t, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (Cf(r), Df(r, i)) throw r;
        if (r instanceof z && Of(r)) {
          let u = eu(r.meta);
          Nn({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: t, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l = r.message;
        if (n && (l = Tn({ callsite: n, originalMethod: t, isPanic: r.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), r.code) {
          let u = s ? { modelName: s, ...r.meta } : r.meta;
          throw new z(l, { code: r.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: r.batchRequestIdx });
        } else {
          if (r.isPanic) throw new ae(l, this.client._clientVersion);
          if (r instanceof V) throw new V(l, { clientVersion: this.client._clientVersion, batchRequestIdx: r.batchRequestIdx });
          if (r instanceof P) throw new P(l, this.client._clientVersion);
          if (r instanceof ae) throw new ae(l, this.client._clientVersion);
        }
        throw r.clientVersion = this.client._clientVersion, r;
      }
      sanitizeMessage(r) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? wr(r) : r;
      }
      unpack(r, t, n) {
        if (!r || (r.data && (r = r.data), !r)) return r;
        let i = Object.keys(r)[0], o = Object.values(r)[0], s = t.filter((u) => u !== "select" && u !== "include"), a = ao(o, s), l = i === "queryRaw" ? Xn(a) : Vr(a);
        return n ? n(l) : l;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function If(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx") return { kind: "itx", options: Xl(e) };
        ar(e, "Unknown transaction kind");
      }
    }
    __name(If, "If");
    function Xl(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(Xl, "Xl");
    function Df(e, r) {
      return zn(e) && r?.kind === "batch" && e.batchRequestIdx !== r.index;
    }
    __name(Df, "Df");
    function Of(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name(Of, "Of");
    function eu(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(eu) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...r] = e.selectionPath;
        return { ...e, selectionPath: r };
      }
      return e;
    }
    __name(eu, "eu");
    var ru = xl;
    var su = O(Ki());
    var _ = class extends Error {
      static {
        __name(this, "_");
      }
      constructor(r) {
        super(r + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    x(_, "PrismaClientConstructorValidationError");
    var tu = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var nu = ["pretty", "colorless", "minimal"];
    var iu = ["info", "query", "warn", "error"];
    var kf = { datasources: /* @__PURE__ */ __name((e, { datasourceNames: r }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e)) throw new _(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [t, n] of Object.entries(e)) {
          if (!r.includes(t)) {
            let i = Jr(t, r) || ` Available datasources: ${r.join(", ")}`;
            throw new _(`Unknown datasource ${t} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n)) throw new _(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
            if (i !== "url") throw new _(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string") throw new _(`Invalid value ${JSON.stringify(o)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
        }
      }
    }, "datasources"), adapter: /* @__PURE__ */ __name((e, r) => {
      if (!e && Er(r.generator) === "client") throw new _('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
      if (e !== null) {
        if (e === void 0) throw new _('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
        if (Er(r.generator) === "binary") throw new _('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
      }
    }, "adapter"), datasourceUrl: /* @__PURE__ */ __name((e) => {
      if (typeof e < "u" && typeof e != "string") throw new _(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, "datasourceUrl"), errorFormat: /* @__PURE__ */ __name((e) => {
      if (e) {
        if (typeof e != "string") throw new _(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!nu.includes(e)) {
          let r = Jr(e, nu);
          throw new _(`Invalid errorFormat ${e} provided to PrismaClient constructor.${r}`);
        }
      }
    }, "errorFormat"), log: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new _(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function r(t) {
        if (typeof t == "string" && !iu.includes(t)) {
          let n = Jr(t, iu);
          throw new _(`Invalid log level "${t}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(r, "r");
      for (let t of e) {
        r(t);
        let n = { level: r, emit: /* @__PURE__ */ __name((i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Jr(i, o);
            throw new _(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        }, "emit") };
        if (t && typeof t == "object") for (let [i, o] of Object.entries(t)) if (n[i]) n[i](o);
        else throw new _(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, "log"), transactionOptions: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let r = e.maxWait;
      if (r != null && r <= 0) throw new _(`Invalid value ${r} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let t = e.timeout;
      if (t != null && t <= 0) throw new _(`Invalid value ${t} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, "transactionOptions"), omit: /* @__PURE__ */ __name((e, r) => {
      if (typeof e != "object") throw new _('"omit" option is expected to be an object.');
      if (e === null) throw new _('"omit" option can not be `null`');
      let t = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Nf(n, r.runtimeDataModel);
        if (!o) {
          t.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((u) => u.name === s);
          if (!l) {
            t.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            t.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && t.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (t.length > 0) throw new _(Lf(e, t));
    }, "omit"), __internal: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let r = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new _(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [t] of Object.entries(e)) if (!r.includes(t)) {
        let n = Jr(t, r);
        throw new _(`Invalid property ${JSON.stringify(t)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    }, "__internal") };
    function au(e, r) {
      for (let [t, n] of Object.entries(e)) {
        if (!tu.includes(t)) {
          let i = Jr(t, tu);
          throw new _(`Unknown property ${t} provided to PrismaClient constructor.${i}`);
        }
        kf[t](n, r);
      }
      if (e.datasourceUrl && e.datasources) throw new _('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    __name(au, "au");
    function Jr(e, r) {
      if (r.length === 0 || typeof e != "string") return "";
      let t = _f(e, r);
      return t ? ` Did you mean "${t}"?` : "";
    }
    __name(Jr, "Jr");
    function _f(e, r) {
      if (r.length === 0) return null;
      let t = r.map((i) => ({ value: i, distance: (0, su.default)(e, i) }));
      t.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = t[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(_f, "_f");
    function Nf(e, r) {
      return ou(r.models, e) ?? ou(r.types, e);
    }
    __name(Nf, "Nf");
    function ou(e, r) {
      let t = Object.keys(e).find((n) => We(n) === r);
      if (t) return e[t];
    }
    __name(ou, "ou");
    function Lf(e, r) {
      let t = _r(e);
      for (let o of r) switch (o.kind) {
        case "UnknownModel":
          t.arguments.getField(o.modelKey)?.markAsError(), t.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          t.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), t.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          t.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), t.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          t.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), t.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = _n(t, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(Lf, "Lf");
    function lu(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((r, t) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? t(i) : r(n)));
        }, "a"), l = /* @__PURE__ */ __name((u) => {
          o || (o = true, t(u));
        }, "l");
        for (let u = 0; u < e.length; u++) e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!zn(c)) {
            l(c);
            return;
          }
          c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
      });
    }
    __name(lu, "lu");
    var rr = N("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Ff = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((e) => e, "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs: /* @__PURE__ */ __name((e) => e, "middlewareArgsToRequestArgs") };
    var Mf = Symbol.for("prisma.client.transaction.id");
    var $f = { id: 0, nextId() {
      return ++this.id;
    } };
    function fu(e) {
      class r {
        static {
          __name(this, "r");
        }
        _originalClient = this;
        _runtimeDataModel;
        _requestHandler;
        _connectionPromise;
        _disconnectionPromise;
        _engineConfig;
        _accelerateEngineConfig;
        _clientVersion;
        _errorFormat;
        _tracingHelper;
        _previewFeatures;
        _activeProvider;
        _globalOmit;
        _extensions;
        _engine;
        _appliedParent;
        _createPrismaPromise = Ro();
        constructor(n) {
          e = n?.__internal?.configOverride?.(e) ?? e, sl(e), n && au(n, e);
          let i = new du.EventEmitter().on("error", () => {
          });
          this._extensions = Nr.empty(), this._previewFeatures = $l(e), this._clientVersion = e.clientVersion ?? ru, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Hl();
          let o = e.relativeEnvPaths && { rootEnvPath: e.relativeEnvPaths.rootEnvPath && ri.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && ri.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n?.adapter) {
            s = n.adapter;
            let l = e.activeProvider === "postgresql" || e.activeProvider === "cockroachdb" ? "postgres" : e.activeProvider;
            if (s.provider !== l) throw new P(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0) throw new P("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = !s && o && st(o, { conflictCheck: "none" }) || e.injectableEdgeEnv?.();
          try {
            let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
            c && N.enable("prisma:client");
            let p = ri.default.resolve(e.dirname, e.relativePath);
            mu.default.existsSync(p) || (p = e.dirname), rr("dirname", e.dirname), rr("relativePath", e.relativePath), rr("cwd", p);
            let d = u.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, prismaPath: d.binaryPath ?? void 0, engineEndpoint: d.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && zl(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: al(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2e3, timeout: l.transactionOptions?.timeout ?? 5e3, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: jr, getBatchRequestPayload: Mr, prismaGraphQLToJSError: $r, PrismaClientUnknownRequestError: V, PrismaClientInitializationError: P, PrismaClientKnownRequestError: z, debug: N("prisma:client:accelerateEngine"), engineVersion: cu.version, clientVersion: e.clientVersion } }, rr("clientVersion", e.clientVersion), this._engine = Ml(e, this._engineConfig), this._requestHandler = new ei(this, i), l.log) for (let f of l.log) {
              let h = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              h && this.$on(h, (g) => {
                nt.log(`${nt.tags[h] ?? ""}`, g.message || g.query);
              });
            }
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = Pt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $on(n, i) {
          return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Uo();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: So({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = uu(n, i);
              return To(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new Z("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (To(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new Z(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: ql, callsite: Ze(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: So({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...uu(n, i));
            throw new Z("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new Z("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = $f.nextId(), s = Yl(n.length), a = n.map((l, u) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return l.requestTransaction?.(p) ?? l;
          });
          return lu(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let u = { kind: "itx", ...a };
            l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
          } catch (u) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), u;
          }
          return l;
        }
        _createItxClient(n) {
          return he(Pt(he(Qa(this), [re("_appliedParent", () => this._appliedParent._createItxClient(n)), re("_createPrismaPromise", () => Ro(n)), re(Mf, () => n.id)])), [Fr(Ya)]);
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Ff, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = /* @__PURE__ */ __name(async (l) => {
            let { runInTransaction: u, args: c, ...p } = l, d = { ...n, ...p };
            c && (d.args = i.middlewareArgsToRequestArgs(c)), n.transaction !== void 0 && u === false && delete d.transaction;
            let f = await el(this, d);
            return d.model ? Ha({ result: f, modelName: d.model, args: d.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : f;
          }, "a");
          return this._tracingHelper.runInChildSpan(s.operation, () => new pu.AsyncResource("prisma-client-request").runInAsyncScope(() => a(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
          try {
            n = u ? u(n) : n;
            let h = { name: "serialize" }, g = this._tracingHelper.runInChildSpan(h, () => $n({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return N.enabled("prisma:client") && (rr("Prisma Client call:"), rr(`prisma.${i}(${Na(n)})`), rr("Generated request:"), rr(JSON.stringify(g, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: g, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: f });
          } catch (h) {
            throw h.clientVersion = this._clientVersion, h;
          }
        }
        $metrics = new Lr(this);
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
        $extends = Wa;
      }
      return r;
    }
    __name(fu, "fu");
    function uu(e, r) {
      return qf(e) ? [new ie(e, r), Wl] : [e, Jl];
    }
    __name(uu, "uu");
    function qf(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name(qf, "qf");
    var Vf = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function gu(e) {
      return new Proxy(e, { get(r, t) {
        if (t in r) return r[t];
        if (!Vf.has(t)) throw new TypeError(`Invalid enum value: ${String(t)}`);
      } });
    }
    __name(gu, "gu");
    function hu(e) {
      st(e, { conflictCheck: "warn" });
    }
    __name(hu, "hu");
  }
});

// node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "node_modules/.prisma/client/index.js"(exports) {
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2,
      createParam: createParam2
    } = require_library();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "6.19.3",
      engine: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = __require("path");
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      clerkId: "clerkId",
      email: "email",
      llmPreference: "llmPreference",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.ProfileScalarFieldEnum = {
      id: "id",
      userId: "userId",
      name: "name",
      age: "age",
      country: "country",
      phoneCountryCode: "phoneCountryCode",
      phoneNumber: "phoneNumber",
      currentStatus: "currentStatus",
      currentRole: "currentRole",
      yearsOfExperience: "yearsOfExperience",
      highestQualification: "highestQualification",
      fieldOfStudy: "fieldOfStudy",
      primaryGoal: "primaryGoal",
      targetRole: "targetRole",
      targetCompanyType: "targetCompanyType",
      weeklyLearningHours: "weeklyLearningHours",
      isMandatoryCompleted: "isMandatoryCompleted",
      isCompleted: "isCompleted",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.ProfileSkillScalarFieldEnum = {
      id: "id",
      profileId: "profileId",
      name: "name",
      normalizedName: "normalizedName",
      proficiency: "proficiency"
    };
    exports.Prisma.ProfileDesiredSkillScalarFieldEnum = {
      id: "id",
      profileId: "profileId",
      name: "name",
      normalizedName: "normalizedName"
    };
    exports.Prisma.CareerAssessmentScalarFieldEnum = {
      id: "id",
      userId: "userId",
      profileVersion: "profileVersion",
      readinessScore: "readinessScore",
      strengths: "strengths",
      gaps: "gaps",
      suggestedFocusArea: "suggestedFocusArea",
      narrative: "narrative",
      inputSnapshot: "inputSnapshot",
      model: "model",
      status: "status",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.RoadmapScalarFieldEnum = {
      id: "id",
      userId: "userId",
      title: "title",
      description: "description",
      targetRole: "targetRole",
      experienceLevel: "experienceLevel",
      estimatedDuration: "estimatedDuration",
      status: "status",
      blobUrl: "blobUrl",
      personalized: "personalized",
      profileSnapshot: "profileSnapshot",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.GlobalRoadmapScalarFieldEnum = {
      id: "id",
      createdByUserId: "createdByUserId",
      title: "title",
      description: "description",
      targetRole: "targetRole",
      normalizedRole: "normalizedRole",
      experienceLevel: "experienceLevel",
      estimatedDuration: "estimatedDuration",
      blobUrl: "blobUrl",
      status: "status",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.ResumeScoreScalarFieldEnum = {
      id: "id",
      userId: "userId",
      role: "role",
      roleDesc: "roleDesc",
      expLevel: "expLevel",
      ovrScore: "ovrScore",
      atsScore: "atsScore",
      artifactBlobUrl: "artifactBlobUrl",
      status: "status",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.ResumeBuildScalarFieldEnum = {
      id: "id",
      userId: "userId",
      title: "title",
      template: "template",
      artifactBlobUrl: "artifactBlobUrl",
      status: "status",
      targetJobTitle: "targetJobTitle",
      jobDescription: "jobDescription",
      targetCompany: "targetCompany",
      targetCompanyType: "targetCompanyType",
      isAiGenerated: "isAiGenerated",
      aiGeneratedAt: "aiGeneratedAt",
      aiModel: "aiModel",
      aiPromptVersion: "aiPromptVersion",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.ResumeTemplateScalarFieldEnum = {
      id: "id",
      name: "name",
      slug: "slug",
      category: "category",
      supportedSections: "supportedSections",
      previewImage: "previewImage",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.InterviewTemplateScalarFieldEnum = {
      id: "id",
      userId: "userId",
      role: "role",
      experienceLevel: "experienceLevel",
      difficulty: "difficulty",
      interviewType: "interviewType",
      questionCount: "questionCount",
      estimatedDuration: "estimatedDuration",
      personalized: "personalized",
      profileSnapshot: "profileSnapshot",
      templateBlobUrl: "templateBlobUrl",
      status: "status",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.GlobalInterviewTemplateScalarFieldEnum = {
      id: "id",
      createdByUserId: "createdByUserId",
      role: "role",
      normalizedRole: "normalizedRole",
      experienceLevel: "experienceLevel",
      difficulty: "difficulty",
      interviewType: "interviewType",
      questionCount: "questionCount",
      estimatedDuration: "estimatedDuration",
      templateBlobUrl: "templateBlobUrl",
      status: "status",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.InterviewSessionScalarFieldEnum = {
      id: "id",
      userId: "userId",
      interviewTemplateId: "interviewTemplateId",
      globalInterviewTemplateId: "globalInterviewTemplateId",
      templateSource: "templateSource",
      role: "role",
      experienceLevel: "experienceLevel",
      difficulty: "difficulty",
      interviewType: "interviewType",
      questionCount: "questionCount",
      estimatedDuration: "estimatedDuration",
      blobUrl: "blobUrl",
      overallScore: "overallScore",
      durationSeconds: "durationSeconds",
      personalized: "personalized",
      profileSnapshot: "profileSnapshot",
      profileId: "profileId",
      resumeId: "resumeId",
      roadmapId: "roadmapId",
      status: "status",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.JobScalarFieldEnum = {
      id: "id",
      userId: "userId",
      type: "type",
      status: "status",
      progress: "progress",
      step: "step",
      triggerRunId: "triggerRunId",
      artifactId: "artifactId",
      artifactType: "artifactType",
      error: "error",
      startedAt: "startedAt",
      completedAt: "completedAt",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.RoleSkillProfileScalarFieldEnum = {
      id: "id",
      role: "role",
      normalizedRole: "normalizedRole",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.RoleSkillRequirementScalarFieldEnum = {
      id: "id",
      roleSkillProfileId: "roleSkillProfileId",
      name: "name",
      normalizedName: "normalizedName",
      minimumProficiency: "minimumProficiency",
      importance: "importance",
      estimatedHours: "estimatedHours"
    };
    exports.Prisma.ModuleActivityScalarFieldEnum = {
      id: "id",
      userId: "userId",
      module: "module",
      eventType: "eventType",
      completionStatus: "completionStatus",
      entityId: "entityId",
      metadata: "metadata",
      createdAt: "createdAt"
    };
    exports.Prisma.ProgressScalarFieldEnum = {
      id: "id",
      userId: "userId",
      careerAssessmentStatus: "careerAssessmentStatus",
      roadmapStatus: "roadmapStatus",
      interviewStatus: "interviewStatus",
      resumeBuildStatus: "resumeBuildStatus",
      resumeScoreStatus: "resumeScoreStatus",
      careerAssessmentProgress: "careerAssessmentProgress",
      roadmapProgress: "roadmapProgress",
      interviewProgress: "interviewProgress",
      resumeBuildProgress: "resumeBuildProgress",
      resumeScoreProgress: "resumeScoreProgress",
      careerAssessmentMetadata: "careerAssessmentMetadata",
      roadmapMetadata: "roadmapMetadata",
      interviewMetadata: "interviewMetadata",
      resumeBuildMetadata: "resumeBuildMetadata",
      resumeScoreMetadata: "resumeScoreMetadata",
      lastActivityAt: "lastActivityAt",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.NotificationScalarFieldEnum = {
      id: "id",
      userId: "userId",
      title: "title",
      message: "message",
      type: "type",
      status: "status",
      actionUrl: "actionUrl",
      idempotencyKey: "idempotencyKey",
      createdAt: "createdAt",
      readAt: "readAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.AuditLogScalarFieldEnum = {
      id: "id",
      userId: "userId",
      action: "action",
      target: "target",
      targetId: "targetId",
      metadata: "metadata",
      ipAddress: "ipAddress",
      createdAt: "createdAt"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.NullableJsonNullValueInput = {
      DbNull: Prisma.DbNull,
      JsonNull: Prisma.JsonNull
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.JsonNullValueFilter = {
      DbNull: Prisma.DbNull,
      JsonNull: Prisma.JsonNull,
      AnyNull: Prisma.AnyNull
    };
    exports.CareerStatus = exports.$Enums.CareerStatus = {
      STUDENT: "STUDENT",
      EMPLOYED: "EMPLOYED",
      SELF_EMPLOYED: "SELF_EMPLOYED",
      BUSINESS_OWNER: "BUSINESS_OWNER",
      FREELANCER: "FREELANCER",
      JOB_SEEKER: "JOB_SEEKER",
      RECENT_GRADUATE: "RECENT_GRADUATE",
      OTHER: "OTHER"
    };
    exports.PrimaryGoal = exports.$Enums.PrimaryGoal = {
      LAND_A_JOB: "LAND_A_JOB",
      GET_AN_INTERNSHIP: "GET_AN_INTERNSHIP",
      SWITCH_CAREER: "SWITCH_CAREER",
      GET_PROMOTED: "GET_PROMOTED",
      LEARN_NEW_SKILLS: "LEARN_NEW_SKILLS",
      PREPARE_FOR_INTERVIEW: "PREPARE_FOR_INTERVIEW",
      BUILD_RESUME: "BUILD_RESUME",
      IMPROVE_RESUME: "IMPROVE_RESUME",
      BECOME_JOB_READY: "BECOME_JOB_READY",
      EXPLORE_CAREERS: "EXPLORE_CAREERS",
      OTHER: "OTHER"
    };
    exports.SkillProficiency = exports.$Enums.SkillProficiency = {
      BEGINNER: "BEGINNER",
      BASIC: "BASIC",
      INTERMEDIATE: "INTERMEDIATE",
      ADVANCED: "ADVANCED",
      EXPERT: "EXPERT"
    };
    exports.CareerExperienceLevel = exports.$Enums.CareerExperienceLevel = {
      ENTRY: "ENTRY",
      JUNIOR: "JUNIOR",
      MID: "MID",
      SENIOR: "SENIOR",
      LEAD: "LEAD"
    };
    exports.TargetCompanyType = exports.$Enums.TargetCompanyType = {
      STARTUP: "STARTUP",
      MID_SIZE: "MID_SIZE",
      ENTERPRISE: "ENTERPRISE",
      FAANG: "FAANG",
      GOVERNMENT: "GOVERNMENT",
      NON_PROFIT: "NON_PROFIT",
      NO_PREFERENCE: "NO_PREFERENCE"
    };
    exports.CareerLevel = exports.$Enums.CareerLevel = {
      BEGINNER: "BEGINNER",
      INTERMEDIATE: "INTERMEDIATE",
      ADVANCED: "ADVANCED"
    };
    exports.RoadmapStatus = exports.$Enums.RoadmapStatus = {
      NOT_STARTED: "NOT_STARTED",
      IN_PROGRESS: "IN_PROGRESS",
      COMPLETED: "COMPLETED",
      FAILED: "FAILED"
    };
    exports.ResumeScoreStatus = exports.$Enums.ResumeScoreStatus = {
      PROCESSING: "PROCESSING",
      COMPLETED: "COMPLETED",
      FAILED: "FAILED",
      ARCHIVED: "ARCHIVED"
    };
    exports.ResumeBuildStatus = exports.$Enums.ResumeBuildStatus = {
      DRAFT: "DRAFT",
      READY: "READY",
      ARCHIVED: "ARCHIVED"
    };
    exports.InterviewStatus = exports.$Enums.InterviewStatus = {
      GENERATING: "GENERATING",
      READY: "READY",
      IN_PROGRESS: "IN_PROGRESS",
      COMPLETED: "COMPLETED",
      FAILED: "FAILED",
      ASSESSMENT_FAILED: "ASSESSMENT_FAILED",
      ABANDONED: "ABANDONED"
    };
    exports.InterviewType = exports.$Enums.InterviewType = {
      BEHAVIORAL: "BEHAVIORAL",
      TECHNICAL: "TECHNICAL",
      SYSTEM_DESIGN: "SYSTEM_DESIGN",
      ROLE_SPECIFIC: "ROLE_SPECIFIC",
      GENERAL: "GENERAL"
    };
    exports.InterviewDifficulty = exports.$Enums.InterviewDifficulty = {
      EASY: "EASY",
      MEDIUM: "MEDIUM",
      HARD: "HARD"
    };
    exports.InterviewTemplateSource = exports.$Enums.InterviewTemplateSource = {
      USER_CREATED: "USER_CREATED",
      GLOBAL: "GLOBAL"
    };
    exports.InterviewTemplateStatus = exports.$Enums.InterviewTemplateStatus = {
      ACTIVE: "ACTIVE",
      ARCHIVED: "ARCHIVED",
      FAILED: "FAILED"
    };
    exports.CareerAssessmentStatus = exports.$Enums.CareerAssessmentStatus = {
      PROCESSING: "PROCESSING",
      COMPLETED: "COMPLETED",
      FAILED: "FAILED"
    };
    exports.SkillImportance = exports.$Enums.SkillImportance = {
      CORE: "CORE",
      IMPORTANT: "IMPORTANT",
      SUPPORTING: "SUPPORTING"
    };
    exports.JobStatus = exports.$Enums.JobStatus = {
      QUEUED: "QUEUED",
      RUNNING: "RUNNING",
      COMPLETED: "COMPLETED",
      FAILED: "FAILED",
      CANCELLED: "CANCELLED"
    };
    exports.ResumeCompanyType = exports.$Enums.ResumeCompanyType = {
      STARTUP: "STARTUP",
      PRODUCT_COMPANY: "PRODUCT_COMPANY",
      CONSULTING: "CONSULTING",
      FAANG_ENTERPRISE: "FAANG_ENTERPRISE",
      GOVERNMENT: "GOVERNMENT",
      NON_PROFIT: "NON_PROFIT",
      AGENCY: "AGENCY",
      OTHER: "OTHER"
    };
    exports.JobType = exports.$Enums.JobType = {
      ROADMAP: "ROADMAP",
      CAREER_GUIDANCE: "CAREER_GUIDANCE",
      INTERVIEW: "INTERVIEW",
      RESUME_ANALYSIS: "RESUME_ANALYSIS",
      RESUME_BUILD: "RESUME_BUILD",
      EXPORT: "EXPORT"
    };
    exports.ModuleType = exports.$Enums.ModuleType = {
      ROADMAP: "ROADMAP",
      RESUME_SCORE: "RESUME_SCORE",
      RESUME_BUILD: "RESUME_BUILD",
      INTERVIEW_PRACTICE: "INTERVIEW_PRACTICE",
      CAREER_ASSESSMENT: "CAREER_ASSESSMENT"
    };
    exports.ModuleCompletionStatus = exports.$Enums.ModuleCompletionStatus = {
      STARTED: "STARTED",
      COMPLETED: "COMPLETED",
      ABANDONED: "ABANDONED"
    };
    exports.ModuleProgressStatus = exports.$Enums.ModuleProgressStatus = {
      NOT_STARTED: "NOT_STARTED",
      IN_PROGRESS: "IN_PROGRESS",
      PROCESSING: "PROCESSING",
      READY: "READY",
      COMPLETED: "COMPLETED",
      FAILED: "FAILED",
      ABANDONED: "ABANDONED"
    };
    exports.ModuleActivityEventType = exports.$Enums.ModuleActivityEventType = {
      ASSESSMENT_STARTED: "ASSESSMENT_STARTED",
      ASSESSMENT_INPUT_UPDATED: "ASSESSMENT_INPUT_UPDATED",
      ASSESSMENT_READY: "ASSESSMENT_READY",
      ASSESSMENT_SUBMITTED: "ASSESSMENT_SUBMITTED",
      ASSESSMENT_GENERATION_STARTED: "ASSESSMENT_GENERATION_STARTED",
      ASSESSMENT_GENERATION_STAGE_CHANGED: "ASSESSMENT_GENERATION_STAGE_CHANGED",
      ASSESSMENT_COMPLETED: "ASSESSMENT_COMPLETED",
      ASSESSMENT_GENERATION_FAILED: "ASSESSMENT_GENERATION_FAILED",
      ASSESSMENT_VIEWED: "ASSESSMENT_VIEWED",
      ROADMAP_STARTED: "ROADMAP_STARTED",
      ROADMAP_GENERATION_STARTED: "ROADMAP_GENERATION_STARTED",
      ROADMAP_GENERATION_STAGE_CHANGED: "ROADMAP_GENERATION_STAGE_CHANGED",
      ROADMAP_GENERATED: "ROADMAP_GENERATED",
      ROADMAP_GENERATION_FAILED: "ROADMAP_GENERATION_FAILED",
      ROADMAP_COMPLETED: "ROADMAP_COMPLETED",
      ROADMAP_VIEWED: "ROADMAP_VIEWED",
      INTERVIEW_STARTED: "INTERVIEW_STARTED",
      INTERVIEW_QUESTION_ANSWERED: "INTERVIEW_QUESTION_ANSWERED",
      INTERVIEW_ALL_QUESTIONS_ANSWERED: "INTERVIEW_ALL_QUESTIONS_ANSWERED",
      INTERVIEW_SUBMITTED: "INTERVIEW_SUBMITTED",
      INTERVIEW_EVALUATION_STARTED: "INTERVIEW_EVALUATION_STARTED",
      INTERVIEW_COMPLETED: "INTERVIEW_COMPLETED",
      INTERVIEW_FAILED: "INTERVIEW_FAILED",
      INTERVIEW_ABANDONED: "INTERVIEW_ABANDONED",
      INTERVIEW_VIEWED: "INTERVIEW_VIEWED",
      RESUME_BUILD_STARTED: "RESUME_BUILD_STARTED",
      RESUME_UPDATED: "RESUME_UPDATED",
      RESUME_SECTION_UPDATED: "RESUME_SECTION_UPDATED",
      RESUME_BUILD_READY: "RESUME_BUILD_READY",
      RESUME_BUILD_COMPLETED: "RESUME_BUILD_COMPLETED",
      RESUME_TEMPLATE_CHANGED: "RESUME_TEMPLATE_CHANGED",
      AI_RESUME_BUILD_REQUESTED: "AI_RESUME_BUILD_REQUESTED",
      AI_RESUME_BUILD_STARTED: "AI_RESUME_BUILD_STARTED",
      AI_RESUME_BUILD_COMPLETED: "AI_RESUME_BUILD_COMPLETED",
      AI_RESUME_BUILD_FAILED: "AI_RESUME_BUILD_FAILED",
      RESUME_PDF_GENERATED: "RESUME_PDF_GENERATED",
      RESUME_VIEWED: "RESUME_VIEWED",
      RESUME_SCORE_STARTED: "RESUME_SCORE_STARTED",
      RESUME_SCORE_COMPLETED: "RESUME_SCORE_COMPLETED",
      RESUME_SCORE_FAILED: "RESUME_SCORE_FAILED",
      RESUME_SCORE_VIEWED: "RESUME_SCORE_VIEWED"
    };
    exports.LLMPreference = exports.$Enums.LLMPreference = {
      FAST: "FAST",
      BALANCED: "BALANCED",
      THINK: "THINK"
    };
    exports.NotificationType = exports.$Enums.NotificationType = {
      CAREER_ASSESSMENT: "CAREER_ASSESSMENT",
      ROADMAP: "ROADMAP",
      RESUME: "RESUME",
      INTERVIEW: "INTERVIEW",
      SYSTEM: "SYSTEM"
    };
    exports.NotificationStatus = exports.$Enums.NotificationStatus = {
      UNREAD: "UNREAD",
      READ: "READ"
    };
    exports.ResumeTemplateCategory = exports.$Enums.ResumeTemplateCategory = {
      ATS_FRIENDLY: "ATS_FRIENDLY",
      MINIMAL_MODERN: "MINIMAL_MODERN",
      TWO_COLUMN: "TWO_COLUMN",
      CREATIVE: "CREATIVE"
    };
    exports.Prisma.ModelName = {
      User: "User",
      Profile: "Profile",
      ProfileSkill: "ProfileSkill",
      ProfileDesiredSkill: "ProfileDesiredSkill",
      CareerAssessment: "CareerAssessment",
      Roadmap: "Roadmap",
      GlobalRoadmap: "GlobalRoadmap",
      ResumeScore: "ResumeScore",
      ResumeBuild: "ResumeBuild",
      ResumeTemplate: "ResumeTemplate",
      InterviewTemplate: "InterviewTemplate",
      GlobalInterviewTemplate: "GlobalInterviewTemplate",
      InterviewSession: "InterviewSession",
      Job: "Job",
      RoleSkillProfile: "RoleSkillProfile",
      RoleSkillRequirement: "RoleSkillRequirement",
      ModuleActivity: "ModuleActivity",
      Progress: "Progress",
      Notification: "Notification",
      AuditLog: "AuditLog"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "D:\\Portfolio-projects\\elev8-prod\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": [],
        "sourceFilePath": "D:\\Portfolio-projects\\elev8-prod\\prisma\\schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "6.19.3",
      "engineVersion": "c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": false,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": '// Prisma schema file for Elev8\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider  = "postgresql"\n  url       = env("DATABASE_URL")\n  directUrl = env("DIRECT_DATABASE_URL")\n}\n\n// ==========================================\n// ENUMS\n// ==========================================\n\nenum CareerStatus {\n  STUDENT\n  EMPLOYED\n  SELF_EMPLOYED\n  BUSINESS_OWNER\n  FREELANCER\n  JOB_SEEKER\n  RECENT_GRADUATE\n  OTHER\n}\n\nenum PrimaryGoal {\n  LAND_A_JOB\n  GET_AN_INTERNSHIP\n  SWITCH_CAREER\n  GET_PROMOTED\n  LEARN_NEW_SKILLS\n  PREPARE_FOR_INTERVIEW\n  BUILD_RESUME\n  IMPROVE_RESUME\n  BECOME_JOB_READY\n  EXPLORE_CAREERS\n  OTHER\n}\n\nenum SkillProficiency {\n  BEGINNER\n  BASIC\n  INTERMEDIATE\n  ADVANCED\n  EXPERT\n}\n\nenum CareerExperienceLevel {\n  ENTRY\n  JUNIOR\n  MID\n  SENIOR\n  LEAD\n}\n\nenum TargetCompanyType {\n  STARTUP\n  MID_SIZE\n  ENTERPRISE\n  FAANG\n  GOVERNMENT\n  NON_PROFIT\n  NO_PREFERENCE\n}\n\nenum CareerLevel {\n  BEGINNER\n  INTERMEDIATE\n  ADVANCED\n}\n\nenum RoadmapStatus {\n  NOT_STARTED\n  IN_PROGRESS\n  COMPLETED\n  FAILED\n}\n\nenum ResumeScoreStatus {\n  PROCESSING\n  COMPLETED\n  FAILED\n  ARCHIVED\n}\n\nenum ResumeBuildStatus {\n  DRAFT\n  READY\n  ARCHIVED\n}\n\nenum InterviewStatus {\n  GENERATING\n  READY\n  IN_PROGRESS\n  COMPLETED\n  FAILED\n  ASSESSMENT_FAILED\n  ABANDONED\n}\n\nenum InterviewType {\n  BEHAVIORAL\n  TECHNICAL\n  SYSTEM_DESIGN\n  ROLE_SPECIFIC\n  GENERAL\n}\n\nenum InterviewDifficulty {\n  EASY\n  MEDIUM\n  HARD\n}\n\nenum InterviewTemplateSource {\n  USER_CREATED\n  GLOBAL\n}\n\nenum InterviewTemplateStatus {\n  ACTIVE\n  ARCHIVED\n  FAILED\n}\n\nenum CareerAssessmentStatus {\n  PROCESSING\n  COMPLETED\n  FAILED\n}\n\nenum SkillImportance {\n  CORE\n  IMPORTANT\n  SUPPORTING\n}\n\nenum JobStatus {\n  QUEUED\n  RUNNING\n  COMPLETED\n  FAILED\n  CANCELLED\n}\n\nenum ResumeCompanyType {\n  STARTUP\n  PRODUCT_COMPANY\n  CONSULTING\n  FAANG_ENTERPRISE\n  GOVERNMENT\n  NON_PROFIT\n  AGENCY\n  OTHER\n}\n\nenum JobType {\n  ROADMAP\n  CAREER_GUIDANCE\n  INTERVIEW\n  RESUME_ANALYSIS\n  RESUME_BUILD\n  EXPORT\n}\n\nenum ModuleType {\n  ROADMAP\n  RESUME_SCORE\n  RESUME_BUILD\n  INTERVIEW_PRACTICE\n  CAREER_ASSESSMENT\n}\n\nenum ModuleCompletionStatus {\n  STARTED\n  COMPLETED\n  ABANDONED\n}\n\nenum ModuleProgressStatus {\n  NOT_STARTED\n  IN_PROGRESS\n  PROCESSING\n  READY\n  COMPLETED\n  FAILED\n  ABANDONED\n}\n\nenum ModuleActivityEventType {\n  // Career Assessment\n  ASSESSMENT_STARTED\n  ASSESSMENT_INPUT_UPDATED\n  ASSESSMENT_READY\n  ASSESSMENT_SUBMITTED\n  ASSESSMENT_GENERATION_STARTED\n  ASSESSMENT_GENERATION_STAGE_CHANGED\n  ASSESSMENT_COMPLETED\n  ASSESSMENT_GENERATION_FAILED\n  ASSESSMENT_VIEWED\n\n  // Roadmap\n  ROADMAP_STARTED\n  ROADMAP_GENERATION_STARTED\n  ROADMAP_GENERATION_STAGE_CHANGED\n  ROADMAP_GENERATED\n  ROADMAP_GENERATION_FAILED\n  ROADMAP_COMPLETED\n  ROADMAP_VIEWED\n\n  // Interview\n  INTERVIEW_STARTED\n  INTERVIEW_QUESTION_ANSWERED\n  INTERVIEW_ALL_QUESTIONS_ANSWERED\n  INTERVIEW_SUBMITTED\n  INTERVIEW_EVALUATION_STARTED\n  INTERVIEW_COMPLETED\n  INTERVIEW_FAILED\n  INTERVIEW_ABANDONED\n  INTERVIEW_VIEWED\n\n  // Resume Build\n  RESUME_BUILD_STARTED\n  RESUME_UPDATED\n  RESUME_SECTION_UPDATED\n  RESUME_BUILD_READY\n  RESUME_BUILD_COMPLETED\n  RESUME_TEMPLATE_CHANGED\n  AI_RESUME_BUILD_REQUESTED\n  AI_RESUME_BUILD_STARTED\n  AI_RESUME_BUILD_COMPLETED\n  AI_RESUME_BUILD_FAILED\n  RESUME_PDF_GENERATED\n  RESUME_VIEWED\n\n  // Resume Score\n  RESUME_SCORE_STARTED\n  RESUME_SCORE_COMPLETED\n  RESUME_SCORE_FAILED\n  RESUME_SCORE_VIEWED\n}\n\nenum LLMPreference {\n  FAST\n  BALANCED\n  THINK\n}\n\nenum NotificationType {\n  CAREER_ASSESSMENT\n  ROADMAP\n  RESUME\n  INTERVIEW\n  SYSTEM\n}\n\nenum NotificationStatus {\n  UNREAD\n  READ\n}\n\n// ==========================================\n// MODELS\n// ==========================================\n\nmodel User {\n  id            String        @id @default(cuid())\n  clerkId       String        @unique\n  email         String?       @unique\n  llmPreference LLMPreference @default(BALANCED)\n\n  profile                  Profile?\n  careerAssessments        CareerAssessment[]\n  roadmaps                 Roadmap[]\n  resumeScores             ResumeScore[]\n  resumeBuilds             ResumeBuild[]\n  interviewTemplates       InterviewTemplate[]\n  interviewSessions        InterviewSession[]\n  jobs                     Job[]\n  moduleActivities         ModuleActivity[]\n  progress                 Progress?\n  globalRoadmaps           GlobalRoadmap[]\n  globalInterviewTemplates GlobalInterviewTemplate[]\n  notifications            Notification[]\n  auditLogs                AuditLog[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([clerkId])\n  @@map("users")\n}\n\nmodel Profile {\n  id     String @id @default(cuid())\n  userId String @unique\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  // Basic Information\n  name             String?\n  age              Int?\n  country          String?\n  phoneCountryCode String?\n  phoneNumber      String?\n\n  // Current Situation\n  currentStatus     CareerStatus?\n  currentRole       String?\n  yearsOfExperience Int?\n\n  // Education\n  highestQualification String?\n  fieldOfStudy         String?\n\n  // Career Goals\n  primaryGoal       String?\n  targetRole        String?\n  targetCompanyType String?\n\n  // Learning Preferences\n  weeklyLearningHours Int?\n\n  // Status Flags\n  isMandatoryCompleted Boolean @default(false)\n  isCompleted          Boolean @default(false)\n\n  // Skills\n  skills        ProfileSkill[]\n  desiredSkills ProfileDesiredSkill[]\n  interviews    InterviewSession[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([currentStatus])\n  @@index([targetRole])\n  @@index([country])\n  @@map("profiles")\n}\n\nmodel ProfileSkill {\n  id        String  @id @default(cuid())\n  profileId String\n  profile   Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)\n\n  name           String\n  normalizedName String\n  proficiency    SkillProficiency\n\n  @@unique([profileId, normalizedName])\n  @@index([profileId])\n  @@map("profile_skills")\n}\n\nmodel ProfileDesiredSkill {\n  id        String  @id @default(cuid())\n  profileId String\n  profile   Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)\n\n  name           String\n  normalizedName String\n\n  @@unique([profileId, normalizedName])\n  @@index([profileId])\n  @@map("profile_desired_skills")\n}\n\nmodel CareerAssessment {\n  id     String @id @default(cuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  profileVersion Int\n\n  readinessScore     Int?\n  strengths          Json?\n  gaps               Json?\n  suggestedFocusArea Json?\n  narrative          String?\n\n  inputSnapshot Json?\n\n  model  String?\n  status CareerAssessmentStatus @default(PROCESSING)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([userId])\n  @@index([userId, profileVersion])\n  @@index([userId, createdAt(sort: Desc), status])\n  @@index([status])\n  @@index([createdAt])\n  @@map("career_assessments")\n}\n\nmodel Roadmap {\n  id     String @id @default(cuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  title             String\n  description       String?\n  targetRole        String?\n  experienceLevel   CareerLevel?\n  estimatedDuration String?\n  status            RoadmapStatus @default(NOT_STARTED)\n  blobUrl           String?\n\n  personalized    Boolean?\n  profileSnapshot Json?\n\n  interviews InterviewSession[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([userId])\n  @@index([status])\n  @@index([createdAt])\n  @@map("roadmaps")\n}\n\nmodel GlobalRoadmap {\n  id String @id @default(cuid())\n\n  createdByUserId String?\n  createdByUser   User?   @relation(fields: [createdByUserId], references: [id], onDelete: SetNull)\n\n  title             String\n  description       String?\n  targetRole        String\n  normalizedRole    String\n  experienceLevel   CareerLevel\n  estimatedDuration String?\n\n  blobUrl String?\n\n  status RoadmapStatus @default(COMPLETED)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([normalizedRole, experienceLevel])\n  @@index([createdByUserId])\n  @@index([normalizedRole])\n  @@index([experienceLevel])\n  @@index([status])\n  @@index([createdAt])\n  @@map("global_roadmaps")\n}\n\nmodel ResumeScore {\n  id     String @id @default(cuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  role     String\n  roleDesc String?\n  expLevel CareerExperienceLevel\n\n  ovrScore Int?\n  atsScore Int?\n\n  artifactBlobUrl String?\n\n  status ResumeScoreStatus @default(PROCESSING)\n\n  createdAt  DateTime           @default(now())\n  updatedAt  DateTime           @updatedAt\n  interviews InterviewSession[]\n\n  @@index([userId])\n  @@index([status])\n  @@index([createdAt])\n  @@map("resume_scores")\n}\n\nmodel ResumeBuild {\n  id     String @id @default(cuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  title           String\n  template        String            @default("academic-cv-lite")\n  artifactBlobUrl String?\n  status          ResumeBuildStatus @default(DRAFT)\n\n  targetJobTitle    String?\n  jobDescription    String?\n  targetCompany     String?\n  targetCompanyType ResumeCompanyType?\n\n  isAiGenerated   Boolean   @default(false)\n  aiGeneratedAt   DateTime?\n  aiModel         String?\n  aiPromptVersion String?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([userId, title])\n  @@index([userId])\n  @@index([status])\n  @@index([createdAt])\n  @@map("resume_builds")\n}\n\nenum ResumeTemplateCategory {\n  ATS_FRIENDLY\n  MINIMAL_MODERN\n  TWO_COLUMN\n  CREATIVE\n}\n\nmodel ResumeTemplate {\n  id                String                 @id\n  name              String\n  slug              String                 @unique\n  category          ResumeTemplateCategory\n  supportedSections String[]\n  previewImage      String                 @default("")\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("resume_templates")\n}\n\nmodel InterviewTemplate {\n  id     String  @id @default(cuid())\n  userId String?\n  user   User?   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  role              String\n  experienceLevel   CareerExperienceLevel\n  difficulty        InterviewDifficulty   @default(MEDIUM)\n  interviewType     InterviewType\n  questionCount     Int\n  estimatedDuration String?\n\n  personalized    Boolean?\n  profileSnapshot Json?\n\n  templateBlobUrl String\n\n  status InterviewTemplateStatus @default(ACTIVE)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  interviews InterviewSession[]\n\n  @@index([userId])\n  @@index([difficulty])\n  @@index([status])\n  @@map("interview_templates")\n}\n\nmodel GlobalInterviewTemplate {\n  id String @id @default(cuid())\n\n  createdByUserId String?\n  createdByUser   User?   @relation(fields: [createdByUserId], references: [id], onDelete: SetNull)\n\n  role              String\n  normalizedRole    String\n  experienceLevel   CareerExperienceLevel\n  difficulty        InterviewDifficulty   @default(MEDIUM)\n  interviewType     InterviewType\n  questionCount     Int\n  estimatedDuration String?\n\n  templateBlobUrl String\n\n  status InterviewTemplateStatus @default(ACTIVE)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  interviews InterviewSession[]\n\n  @@unique([normalizedRole, experienceLevel, interviewType, difficulty])\n  @@index([createdByUserId])\n  @@index([normalizedRole])\n  @@index([experienceLevel])\n  @@index([difficulty])\n  @@index([interviewType])\n  @@index([status])\n  @@map("global_interview_templates")\n}\n\nmodel InterviewSession {\n  id     String @id @default(cuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  interviewTemplateId String?\n  interviewTemplate   InterviewTemplate? @relation(fields: [interviewTemplateId], references: [id], onDelete: SetNull)\n\n  globalInterviewTemplateId String?\n  globalInterviewTemplate   GlobalInterviewTemplate? @relation(fields: [globalInterviewTemplateId], references: [id], onDelete: SetNull)\n\n  templateSource InterviewTemplateSource @default(GLOBAL)\n\n  // Historical snapshot\n  role              String\n  experienceLevel   CareerExperienceLevel\n  difficulty        InterviewDifficulty   @default(MEDIUM)\n  interviewType     InterviewType\n  questionCount     Int\n  estimatedDuration String?\n\n  blobUrl String?\n\n  overallScore    Int?\n  durationSeconds Int?\n\n  personalized    Boolean @default(false)\n  profileSnapshot Json?\n\n  profileId String?\n  profile   Profile? @relation(fields: [profileId], references: [id], onDelete: SetNull)\n\n  resumeId String?\n  resume   ResumeScore? @relation(fields: [resumeId], references: [id], onDelete: SetNull)\n\n  roadmapId String?\n  roadmap   Roadmap? @relation(fields: [roadmapId], references: [id], onDelete: SetNull)\n\n  status InterviewStatus @default(READY)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([userId])\n  @@index([profileId])\n  @@index([resumeId])\n  @@index([roadmapId])\n  @@index([interviewTemplateId])\n  @@index([globalInterviewTemplateId])\n  @@index([templateSource])\n  @@index([difficulty])\n  @@index([status])\n  @@index([createdAt])\n  @@map("interviews")\n}\n\nmodel Job {\n  id           String    @id @default(cuid())\n  userId       String\n  user         User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  type         JobType\n  status       JobStatus @default(QUEUED)\n  progress     Int       @default(0)\n  step         String?\n  triggerRunId String?\n  artifactId   String?\n  artifactType String?\n  error        String?\n  startedAt    DateTime?\n  completedAt  DateTime?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([userId])\n  @@index([status])\n  @@index([createdAt])\n  @@map("jobs")\n}\n\nmodel RoleSkillProfile {\n  id             String @id @default(cuid())\n  role           String\n  normalizedRole String\n\n  skills RoleSkillRequirement[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([normalizedRole])\n  @@index([normalizedRole])\n  @@map("role_skill_profiles")\n}\n\nmodel RoleSkillRequirement {\n  id                 String           @id @default(cuid())\n  roleSkillProfileId String\n  roleSkillProfile   RoleSkillProfile @relation(fields: [roleSkillProfileId], references: [id], onDelete: Cascade)\n\n  name               String\n  normalizedName     String\n  minimumProficiency SkillProficiency\n  importance         SkillImportance\n  estimatedHours     Int?\n\n  @@unique([roleSkillProfileId, normalizedName])\n  @@index([roleSkillProfileId])\n  @@map("role_skill_requirements")\n}\n\nmodel ModuleActivity {\n  id     String @id @default(cuid())\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  module           ModuleType\n  eventType        ModuleActivityEventType @default(ASSESSMENT_COMPLETED)\n  completionStatus ModuleCompletionStatus?\n\n  entityId String?\n  metadata Json?\n\n  createdAt DateTime @default(now())\n\n  @@index([userId, module, createdAt])\n  @@index([userId, entityId, createdAt])\n  @@index([userId, eventType, createdAt])\n  @@map("module_activities")\n}\n\nmodel Progress {\n  id     String @id @default(cuid())\n  userId String @unique\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  careerAssessmentStatus ModuleProgressStatus @default(NOT_STARTED)\n  roadmapStatus          ModuleProgressStatus @default(NOT_STARTED)\n  interviewStatus        ModuleProgressStatus @default(NOT_STARTED)\n  resumeBuildStatus      ModuleProgressStatus @default(NOT_STARTED)\n  resumeScoreStatus      ModuleProgressStatus @default(NOT_STARTED)\n\n  careerAssessmentProgress Int @default(0)\n  roadmapProgress          Int @default(0)\n  interviewProgress        Int @default(0)\n  resumeBuildProgress      Int @default(0)\n  resumeScoreProgress      Int @default(0)\n\n  careerAssessmentMetadata Json?\n  roadmapMetadata          Json?\n  interviewMetadata        Json?\n  resumeBuildMetadata      Json?\n  resumeScoreMetadata      Json?\n\n  lastActivityAt DateTime?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([userId])\n  @@index([lastActivityAt])\n  @@map("progress")\n}\n\nmodel Notification {\n  id     String @id @default(cuid())\n  userId String @map("user_id")\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  title   String\n  message String             @db.Text\n  type    NotificationType   @default(SYSTEM)\n  status  NotificationStatus @default(UNREAD)\n\n  actionUrl      String? @map("action_url")\n  idempotencyKey String? @unique @map("idempotency_key")\n\n  createdAt DateTime  @default(now()) @map("created_at")\n  readAt    DateTime? @map("read_at")\n  updatedAt DateTime  @updatedAt @map("updated_at")\n\n  @@index([userId, status])\n  @@index([userId, createdAt(sort: Desc)])\n  @@map("notifications")\n}\n\nmodel AuditLog {\n  id        String  @id @default(cuid())\n  userId    String? @map("user_id")\n  user      User?   @relation(fields: [userId], references: [id], onDelete: SetNull)\n  action    String\n  target    String?\n  targetId  String? @map("target_id")\n  metadata  Json?\n  ipAddress String? @map("ip_address")\n\n  createdAt DateTime @default(now()) @map("created_at")\n\n  @@index([userId, createdAt])\n  @@index([action, createdAt])\n  @@map("audit_logs")\n}\n',
      "inlineSchemaHash": "b38fde7f6775b1e6c15f272eb1a234248da4fb379987668dd2e5b5c58e698fde",
      "copyEngine": true
    };
    var fs = __require("fs");
    config.dirname = __dirname;
    if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "node_modules/.prisma/client",
        ".prisma/client"
      ];
      const alternativePath = alternativePaths.find((altPath) => {
        return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      }) ?? alternativePaths[0];
      config.dirname = path.join(process.cwd(), alternativePath);
      config.isBundled = true;
    }
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":"users","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"clerkId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"llmPreference","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"LLMPreference","nativeType":null,"default":"BALANCED","isGenerated":false,"isUpdatedAt":false},{"name":"profile","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Profile","nativeType":null,"relationName":"ProfileToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"careerAssessments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CareerAssessment","nativeType":null,"relationName":"CareerAssessmentToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"roadmaps","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Roadmap","nativeType":null,"relationName":"RoadmapToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"resumeScores","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ResumeScore","nativeType":null,"relationName":"ResumeScoreToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"resumeBuilds","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ResumeBuild","nativeType":null,"relationName":"ResumeBuildToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"interviewTemplates","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InterviewTemplate","nativeType":null,"relationName":"InterviewTemplateToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"interviewSessions","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InterviewSession","nativeType":null,"relationName":"InterviewSessionToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"jobs","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Job","nativeType":null,"relationName":"JobToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"moduleActivities","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ModuleActivity","nativeType":null,"relationName":"ModuleActivityToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"progress","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Progress","nativeType":null,"relationName":"ProgressToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"globalRoadmaps","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"GlobalRoadmap","nativeType":null,"relationName":"GlobalRoadmapToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"globalInterviewTemplates","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"GlobalInterviewTemplate","nativeType":null,"relationName":"GlobalInterviewTemplateToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"notifications","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Notification","nativeType":null,"relationName":"NotificationToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"auditLogs","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"AuditLog","nativeType":null,"relationName":"AuditLogToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Profile":{"dbName":"profiles","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"ProfileToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"age","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"country","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"phoneCountryCode","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"phoneNumber","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"currentStatus","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CareerStatus","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"currentRole","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"yearsOfExperience","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"highestQualification","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"fieldOfStudy","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"primaryGoal","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"targetRole","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"targetCompanyType","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"weeklyLearningHours","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"isMandatoryCompleted","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"isCompleted","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"skills","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ProfileSkill","nativeType":null,"relationName":"ProfileToProfileSkill","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"desiredSkills","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ProfileDesiredSkill","nativeType":null,"relationName":"ProfileToProfileDesiredSkill","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"interviews","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InterviewSession","nativeType":null,"relationName":"InterviewSessionToProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"ProfileSkill":{"dbName":"profile_skills","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"profileId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"profile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Profile","nativeType":null,"relationName":"ProfileToProfileSkill","relationFromFields":["profileId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"normalizedName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"proficiency","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SkillProficiency","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["profileId","normalizedName"]],"uniqueIndexes":[{"name":null,"fields":["profileId","normalizedName"]}],"isGenerated":false},"ProfileDesiredSkill":{"dbName":"profile_desired_skills","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"profileId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"profile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Profile","nativeType":null,"relationName":"ProfileToProfileDesiredSkill","relationFromFields":["profileId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"normalizedName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["profileId","normalizedName"]],"uniqueIndexes":[{"name":null,"fields":["profileId","normalizedName"]}],"isGenerated":false},"CareerAssessment":{"dbName":"career_assessments","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"CareerAssessmentToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"profileVersion","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"readinessScore","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"strengths","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"gaps","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"suggestedFocusArea","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"narrative","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"inputSnapshot","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"model","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"CareerAssessmentStatus","nativeType":null,"default":"PROCESSING","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Roadmap":{"dbName":"roadmaps","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"RoadmapToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"targetRole","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"experienceLevel","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CareerLevel","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"estimatedDuration","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"RoadmapStatus","nativeType":null,"default":"NOT_STARTED","isGenerated":false,"isUpdatedAt":false},{"name":"blobUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"personalized","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"profileSnapshot","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"interviews","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InterviewSession","nativeType":null,"relationName":"InterviewSessionToRoadmap","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"GlobalRoadmap":{"dbName":"global_roadmaps","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdByUserId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdByUser","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"GlobalRoadmapToUser","relationFromFields":["createdByUserId"],"relationToFields":["id"],"relationOnDelete":"SetNull","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"targetRole","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"normalizedRole","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"experienceLevel","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CareerLevel","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"estimatedDuration","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"blobUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"RoadmapStatus","nativeType":null,"default":"COMPLETED","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[["normalizedRole","experienceLevel"]],"uniqueIndexes":[{"name":null,"fields":["normalizedRole","experienceLevel"]}],"isGenerated":false},"ResumeScore":{"dbName":"resume_scores","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"ResumeScoreToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"roleDesc","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"expLevel","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CareerExperienceLevel","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"ovrScore","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"atsScore","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"artifactBlobUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"ResumeScoreStatus","nativeType":null,"default":"PROCESSING","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"interviews","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InterviewSession","nativeType":null,"relationName":"InterviewSessionToResumeScore","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"ResumeBuild":{"dbName":"resume_builds","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"ResumeBuildToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"template","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":"academic-cv-lite","isGenerated":false,"isUpdatedAt":false},{"name":"artifactBlobUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"ResumeBuildStatus","nativeType":null,"default":"DRAFT","isGenerated":false,"isUpdatedAt":false},{"name":"targetJobTitle","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"jobDescription","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"targetCompany","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"targetCompanyType","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ResumeCompanyType","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"isAiGenerated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"aiGeneratedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"aiModel","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"aiPromptVersion","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[["userId","title"]],"uniqueIndexes":[{"name":null,"fields":["userId","title"]}],"isGenerated":false},"ResumeTemplate":{"dbName":"resume_templates","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"slug","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"category","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ResumeTemplateCategory","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"supportedSections","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"previewImage","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":"","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"InterviewTemplate":{"dbName":"interview_templates","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"InterviewTemplateToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"experienceLevel","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CareerExperienceLevel","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"difficulty","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"InterviewDifficulty","nativeType":null,"default":"MEDIUM","isGenerated":false,"isUpdatedAt":false},{"name":"interviewType","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InterviewType","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"questionCount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"estimatedDuration","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"personalized","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"profileSnapshot","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"templateBlobUrl","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"InterviewTemplateStatus","nativeType":null,"default":"ACTIVE","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"interviews","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InterviewSession","nativeType":null,"relationName":"InterviewSessionToInterviewTemplate","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"GlobalInterviewTemplate":{"dbName":"global_interview_templates","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdByUserId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdByUser","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"GlobalInterviewTemplateToUser","relationFromFields":["createdByUserId"],"relationToFields":["id"],"relationOnDelete":"SetNull","isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"normalizedRole","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"experienceLevel","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CareerExperienceLevel","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"difficulty","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"InterviewDifficulty","nativeType":null,"default":"MEDIUM","isGenerated":false,"isUpdatedAt":false},{"name":"interviewType","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InterviewType","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"questionCount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"estimatedDuration","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"templateBlobUrl","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"InterviewTemplateStatus","nativeType":null,"default":"ACTIVE","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"interviews","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InterviewSession","nativeType":null,"relationName":"GlobalInterviewTemplateToInterviewSession","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["normalizedRole","experienceLevel","interviewType","difficulty"]],"uniqueIndexes":[{"name":null,"fields":["normalizedRole","experienceLevel","interviewType","difficulty"]}],"isGenerated":false},"InterviewSession":{"dbName":"interviews","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"InterviewSessionToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"interviewTemplateId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"interviewTemplate","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InterviewTemplate","nativeType":null,"relationName":"InterviewSessionToInterviewTemplate","relationFromFields":["interviewTemplateId"],"relationToFields":["id"],"relationOnDelete":"SetNull","isGenerated":false,"isUpdatedAt":false},{"name":"globalInterviewTemplateId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"globalInterviewTemplate","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"GlobalInterviewTemplate","nativeType":null,"relationName":"GlobalInterviewTemplateToInterviewSession","relationFromFields":["globalInterviewTemplateId"],"relationToFields":["id"],"relationOnDelete":"SetNull","isGenerated":false,"isUpdatedAt":false},{"name":"templateSource","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"InterviewTemplateSource","nativeType":null,"default":"GLOBAL","isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"experienceLevel","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CareerExperienceLevel","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"difficulty","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"InterviewDifficulty","nativeType":null,"default":"MEDIUM","isGenerated":false,"isUpdatedAt":false},{"name":"interviewType","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InterviewType","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"questionCount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"estimatedDuration","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"blobUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"overallScore","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"durationSeconds","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"personalized","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"profileSnapshot","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"profileId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"profile","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Profile","nativeType":null,"relationName":"InterviewSessionToProfile","relationFromFields":["profileId"],"relationToFields":["id"],"relationOnDelete":"SetNull","isGenerated":false,"isUpdatedAt":false},{"name":"resumeId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"resume","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ResumeScore","nativeType":null,"relationName":"InterviewSessionToResumeScore","relationFromFields":["resumeId"],"relationToFields":["id"],"relationOnDelete":"SetNull","isGenerated":false,"isUpdatedAt":false},{"name":"roadmapId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"roadmap","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Roadmap","nativeType":null,"relationName":"InterviewSessionToRoadmap","relationFromFields":["roadmapId"],"relationToFields":["id"],"relationOnDelete":"SetNull","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"InterviewStatus","nativeType":null,"default":"READY","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Job":{"dbName":"jobs","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"JobToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"JobType","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"JobStatus","nativeType":null,"default":"QUEUED","isGenerated":false,"isUpdatedAt":false},{"name":"progress","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"step","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"triggerRunId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"artifactId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"artifactType","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"error","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"startedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"completedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"RoleSkillProfile":{"dbName":"role_skill_profiles","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"normalizedRole","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"skills","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RoleSkillRequirement","nativeType":null,"relationName":"RoleSkillProfileToRoleSkillRequirement","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[["normalizedRole"]],"uniqueIndexes":[{"name":null,"fields":["normalizedRole"]}],"isGenerated":false},"RoleSkillRequirement":{"dbName":"role_skill_requirements","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"roleSkillProfileId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"roleSkillProfile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RoleSkillProfile","nativeType":null,"relationName":"RoleSkillProfileToRoleSkillRequirement","relationFromFields":["roleSkillProfileId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"normalizedName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"minimumProficiency","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SkillProficiency","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"importance","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SkillImportance","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"estimatedHours","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["roleSkillProfileId","normalizedName"]],"uniqueIndexes":[{"name":null,"fields":["roleSkillProfileId","normalizedName"]}],"isGenerated":false},"ModuleActivity":{"dbName":"module_activities","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"ModuleActivityToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"module","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ModuleType","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"eventType","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"ModuleActivityEventType","nativeType":null,"default":"ASSESSMENT_COMPLETED","isGenerated":false,"isUpdatedAt":false},{"name":"completionStatus","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ModuleCompletionStatus","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"entityId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Progress":{"dbName":"progress","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"ProgressToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"careerAssessmentStatus","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"ModuleProgressStatus","nativeType":null,"default":"NOT_STARTED","isGenerated":false,"isUpdatedAt":false},{"name":"roadmapStatus","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"ModuleProgressStatus","nativeType":null,"default":"NOT_STARTED","isGenerated":false,"isUpdatedAt":false},{"name":"interviewStatus","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"ModuleProgressStatus","nativeType":null,"default":"NOT_STARTED","isGenerated":false,"isUpdatedAt":false},{"name":"resumeBuildStatus","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"ModuleProgressStatus","nativeType":null,"default":"NOT_STARTED","isGenerated":false,"isUpdatedAt":false},{"name":"resumeScoreStatus","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"ModuleProgressStatus","nativeType":null,"default":"NOT_STARTED","isGenerated":false,"isUpdatedAt":false},{"name":"careerAssessmentProgress","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"roadmapProgress","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"interviewProgress","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"resumeBuildProgress","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"resumeScoreProgress","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"careerAssessmentMetadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"roadmapMetadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"interviewMetadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"resumeBuildMetadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"resumeScoreMetadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"lastActivityAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Notification":{"dbName":"notifications","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"NotificationToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"message","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["Text",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"NotificationType","nativeType":null,"default":"SYSTEM","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"NotificationStatus","nativeType":null,"default":"UNREAD","isGenerated":false,"isUpdatedAt":false},{"name":"actionUrl","dbName":"action_url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"idempotencyKey","dbName":"idempotency_key","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"readAt","dbName":"read_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"AuditLog":{"dbName":"audit_logs","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"user_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"AuditLogToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"SetNull","isGenerated":false,"isUpdatedAt":false},{"name":"action","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"target","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"targetId","dbName":"target_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"ipAddress","dbName":"ip_address","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"CareerStatus":{"values":[{"name":"STUDENT","dbName":null},{"name":"EMPLOYED","dbName":null},{"name":"SELF_EMPLOYED","dbName":null},{"name":"BUSINESS_OWNER","dbName":null},{"name":"FREELANCER","dbName":null},{"name":"JOB_SEEKER","dbName":null},{"name":"RECENT_GRADUATE","dbName":null},{"name":"OTHER","dbName":null}],"dbName":null},"PrimaryGoal":{"values":[{"name":"LAND_A_JOB","dbName":null},{"name":"GET_AN_INTERNSHIP","dbName":null},{"name":"SWITCH_CAREER","dbName":null},{"name":"GET_PROMOTED","dbName":null},{"name":"LEARN_NEW_SKILLS","dbName":null},{"name":"PREPARE_FOR_INTERVIEW","dbName":null},{"name":"BUILD_RESUME","dbName":null},{"name":"IMPROVE_RESUME","dbName":null},{"name":"BECOME_JOB_READY","dbName":null},{"name":"EXPLORE_CAREERS","dbName":null},{"name":"OTHER","dbName":null}],"dbName":null},"SkillProficiency":{"values":[{"name":"BEGINNER","dbName":null},{"name":"BASIC","dbName":null},{"name":"INTERMEDIATE","dbName":null},{"name":"ADVANCED","dbName":null},{"name":"EXPERT","dbName":null}],"dbName":null},"CareerExperienceLevel":{"values":[{"name":"ENTRY","dbName":null},{"name":"JUNIOR","dbName":null},{"name":"MID","dbName":null},{"name":"SENIOR","dbName":null},{"name":"LEAD","dbName":null}],"dbName":null},"TargetCompanyType":{"values":[{"name":"STARTUP","dbName":null},{"name":"MID_SIZE","dbName":null},{"name":"ENTERPRISE","dbName":null},{"name":"FAANG","dbName":null},{"name":"GOVERNMENT","dbName":null},{"name":"NON_PROFIT","dbName":null},{"name":"NO_PREFERENCE","dbName":null}],"dbName":null},"CareerLevel":{"values":[{"name":"BEGINNER","dbName":null},{"name":"INTERMEDIATE","dbName":null},{"name":"ADVANCED","dbName":null}],"dbName":null},"RoadmapStatus":{"values":[{"name":"NOT_STARTED","dbName":null},{"name":"IN_PROGRESS","dbName":null},{"name":"COMPLETED","dbName":null},{"name":"FAILED","dbName":null}],"dbName":null},"ResumeScoreStatus":{"values":[{"name":"PROCESSING","dbName":null},{"name":"COMPLETED","dbName":null},{"name":"FAILED","dbName":null},{"name":"ARCHIVED","dbName":null}],"dbName":null},"ResumeBuildStatus":{"values":[{"name":"DRAFT","dbName":null},{"name":"READY","dbName":null},{"name":"ARCHIVED","dbName":null}],"dbName":null},"InterviewStatus":{"values":[{"name":"GENERATING","dbName":null},{"name":"READY","dbName":null},{"name":"IN_PROGRESS","dbName":null},{"name":"COMPLETED","dbName":null},{"name":"FAILED","dbName":null},{"name":"ASSESSMENT_FAILED","dbName":null},{"name":"ABANDONED","dbName":null}],"dbName":null},"InterviewType":{"values":[{"name":"BEHAVIORAL","dbName":null},{"name":"TECHNICAL","dbName":null},{"name":"SYSTEM_DESIGN","dbName":null},{"name":"ROLE_SPECIFIC","dbName":null},{"name":"GENERAL","dbName":null}],"dbName":null},"InterviewDifficulty":{"values":[{"name":"EASY","dbName":null},{"name":"MEDIUM","dbName":null},{"name":"HARD","dbName":null}],"dbName":null},"InterviewTemplateSource":{"values":[{"name":"USER_CREATED","dbName":null},{"name":"GLOBAL","dbName":null}],"dbName":null},"InterviewTemplateStatus":{"values":[{"name":"ACTIVE","dbName":null},{"name":"ARCHIVED","dbName":null},{"name":"FAILED","dbName":null}],"dbName":null},"CareerAssessmentStatus":{"values":[{"name":"PROCESSING","dbName":null},{"name":"COMPLETED","dbName":null},{"name":"FAILED","dbName":null}],"dbName":null},"SkillImportance":{"values":[{"name":"CORE","dbName":null},{"name":"IMPORTANT","dbName":null},{"name":"SUPPORTING","dbName":null}],"dbName":null},"JobStatus":{"values":[{"name":"QUEUED","dbName":null},{"name":"RUNNING","dbName":null},{"name":"COMPLETED","dbName":null},{"name":"FAILED","dbName":null},{"name":"CANCELLED","dbName":null}],"dbName":null},"ResumeCompanyType":{"values":[{"name":"STARTUP","dbName":null},{"name":"PRODUCT_COMPANY","dbName":null},{"name":"CONSULTING","dbName":null},{"name":"FAANG_ENTERPRISE","dbName":null},{"name":"GOVERNMENT","dbName":null},{"name":"NON_PROFIT","dbName":null},{"name":"AGENCY","dbName":null},{"name":"OTHER","dbName":null}],"dbName":null},"JobType":{"values":[{"name":"ROADMAP","dbName":null},{"name":"CAREER_GUIDANCE","dbName":null},{"name":"INTERVIEW","dbName":null},{"name":"RESUME_ANALYSIS","dbName":null},{"name":"RESUME_BUILD","dbName":null},{"name":"EXPORT","dbName":null}],"dbName":null},"ModuleType":{"values":[{"name":"ROADMAP","dbName":null},{"name":"RESUME_SCORE","dbName":null},{"name":"RESUME_BUILD","dbName":null},{"name":"INTERVIEW_PRACTICE","dbName":null},{"name":"CAREER_ASSESSMENT","dbName":null}],"dbName":null},"ModuleCompletionStatus":{"values":[{"name":"STARTED","dbName":null},{"name":"COMPLETED","dbName":null},{"name":"ABANDONED","dbName":null}],"dbName":null},"ModuleProgressStatus":{"values":[{"name":"NOT_STARTED","dbName":null},{"name":"IN_PROGRESS","dbName":null},{"name":"PROCESSING","dbName":null},{"name":"READY","dbName":null},{"name":"COMPLETED","dbName":null},{"name":"FAILED","dbName":null},{"name":"ABANDONED","dbName":null}],"dbName":null},"ModuleActivityEventType":{"values":[{"name":"ASSESSMENT_STARTED","dbName":null},{"name":"ASSESSMENT_INPUT_UPDATED","dbName":null},{"name":"ASSESSMENT_READY","dbName":null},{"name":"ASSESSMENT_SUBMITTED","dbName":null},{"name":"ASSESSMENT_GENERATION_STARTED","dbName":null},{"name":"ASSESSMENT_GENERATION_STAGE_CHANGED","dbName":null},{"name":"ASSESSMENT_COMPLETED","dbName":null},{"name":"ASSESSMENT_GENERATION_FAILED","dbName":null},{"name":"ASSESSMENT_VIEWED","dbName":null},{"name":"ROADMAP_STARTED","dbName":null},{"name":"ROADMAP_GENERATION_STARTED","dbName":null},{"name":"ROADMAP_GENERATION_STAGE_CHANGED","dbName":null},{"name":"ROADMAP_GENERATED","dbName":null},{"name":"ROADMAP_GENERATION_FAILED","dbName":null},{"name":"ROADMAP_COMPLETED","dbName":null},{"name":"ROADMAP_VIEWED","dbName":null},{"name":"INTERVIEW_STARTED","dbName":null},{"name":"INTERVIEW_QUESTION_ANSWERED","dbName":null},{"name":"INTERVIEW_ALL_QUESTIONS_ANSWERED","dbName":null},{"name":"INTERVIEW_SUBMITTED","dbName":null},{"name":"INTERVIEW_EVALUATION_STARTED","dbName":null},{"name":"INTERVIEW_COMPLETED","dbName":null},{"name":"INTERVIEW_FAILED","dbName":null},{"name":"INTERVIEW_ABANDONED","dbName":null},{"name":"INTERVIEW_VIEWED","dbName":null},{"name":"RESUME_BUILD_STARTED","dbName":null},{"name":"RESUME_UPDATED","dbName":null},{"name":"RESUME_SECTION_UPDATED","dbName":null},{"name":"RESUME_BUILD_READY","dbName":null},{"name":"RESUME_BUILD_COMPLETED","dbName":null},{"name":"RESUME_TEMPLATE_CHANGED","dbName":null},{"name":"AI_RESUME_BUILD_REQUESTED","dbName":null},{"name":"AI_RESUME_BUILD_STARTED","dbName":null},{"name":"AI_RESUME_BUILD_COMPLETED","dbName":null},{"name":"AI_RESUME_BUILD_FAILED","dbName":null},{"name":"RESUME_PDF_GENERATED","dbName":null},{"name":"RESUME_VIEWED","dbName":null},{"name":"RESUME_SCORE_STARTED","dbName":null},{"name":"RESUME_SCORE_COMPLETED","dbName":null},{"name":"RESUME_SCORE_FAILED","dbName":null},{"name":"RESUME_SCORE_VIEWED","dbName":null}],"dbName":null},"LLMPreference":{"values":[{"name":"FAST","dbName":null},{"name":"BALANCED","dbName":null},{"name":"THINK","dbName":null}],"dbName":null},"NotificationType":{"values":[{"name":"CAREER_ASSESSMENT","dbName":null},{"name":"ROADMAP","dbName":null},{"name":"RESUME","dbName":null},{"name":"INTERVIEW","dbName":null},{"name":"SYSTEM","dbName":null}],"dbName":null},"NotificationStatus":{"values":[{"name":"UNREAD","dbName":null},{"name":"READ","dbName":null}],"dbName":null},"ResumeTemplateCategory":{"values":[{"name":"ATS_FRIENDLY","dbName":null},{"name":"MINIMAL_MODERN","dbName":null},{"name":"TWO_COLUMN","dbName":null},{"name":"CREATIVE","dbName":null}],"dbName":null}},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
    config.engineWasm = void 0;
    config.compilerWasm = void 0;
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient2(config);
    exports.PrismaClient = PrismaClient2;
    Object.assign(exports, Prisma);
    path.join(__dirname, "query_engine-windows.dll.node");
    path.join(process.cwd(), "node_modules/.prisma/client/query_engine-windows.dll.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
  }
});

// node_modules/.prisma/client/default.js
var require_default = __commonJS({
  "node_modules/.prisma/client/default.js"(exports, module) {
    init_esm();
    module.exports = { ...require_client() };
  }
});

// node_modules/@prisma/client/default.js
var require_default2 = __commonJS({
  "node_modules/@prisma/client/default.js"(exports, module) {
    init_esm();
    module.exports = {
      ...require_default()
    };
  }
});

// node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "detectDomainLocale", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return detectDomainLocale;
      }, "get")
    });
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      if (!domainItems) return;
      if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
      }
      for (const item of domainItems) {
        var _item_domain, _item_locales;
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale) => locale.toLowerCase() === detectedLocale))) {
          return item;
        }
      }
    }
    __name(detectDomainLocale, "detectDomainLocale");
  }
});

// node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
var require_remove_trailing_slash = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "removeTrailingSlash", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return removeTrailingSlash;
      }, "get")
    });
    function removeTrailingSlash(route) {
      return route.replace(/\/$/, "") || "/";
    }
    __name(removeTrailingSlash, "removeTrailingSlash");
  }
});

// node_modules/next/dist/shared/lib/router/utils/parse-path.js
var require_parse_path = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "parsePath", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return parsePath;
      }, "get")
    });
    function parsePath(path) {
      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");
      const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
      if (hasQuery || hashIndex > -1) {
        return {
          pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
          query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
          hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
      }
      return {
        pathname: path,
        query: "",
        hash: ""
      };
    }
    __name(parsePath, "parsePath");
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
var require_add_path_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "addPathPrefix", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return addPathPrefix;
      }, "get")
    });
    var _parsepath = require_parse_path();
    function addPathPrefix(path, prefix) {
      if (!path.startsWith("/") || !prefix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      return "" + prefix + pathname + query + hash;
    }
    __name(addPathPrefix, "addPathPrefix");
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js
var require_add_path_suffix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "addPathSuffix", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return addPathSuffix;
      }, "get")
    });
    var _parsepath = require_parse_path();
    function addPathSuffix(path, suffix) {
      if (!path.startsWith("/") || !suffix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      return "" + pathname + suffix + query + hash;
    }
    __name(addPathSuffix, "addPathSuffix");
  }
});

// node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
var require_path_has_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "pathHasPrefix", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return pathHasPrefix;
      }, "get")
    });
    var _parsepath = require_parse_path();
    function pathHasPrefix(path, prefix) {
      if (typeof path !== "string") {
        return false;
      }
      const { pathname } = (0, _parsepath.parsePath)(path);
      return pathname === prefix || pathname.startsWith(prefix + "/");
    }
    __name(pathHasPrefix, "pathHasPrefix");
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-locale.js
var require_add_locale = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "addLocale", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return addLocale;
      }, "get")
    });
    var _addpathprefix = require_add_path_prefix();
    var _pathhasprefix = require_path_has_prefix();
    function addLocale(path, locale, defaultLocale, ignorePrefix) {
      if (!locale || locale === defaultLocale) return path;
      const lower = path.toLowerCase();
      if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
      }
      return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
    }
    __name(addLocale, "addLocale");
  }
});

// node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js
var require_format_next_pathname_info = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "formatNextPathnameInfo", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return formatNextPathnameInfo;
      }, "get")
    });
    var _removetrailingslash = require_remove_trailing_slash();
    var _addpathprefix = require_add_path_prefix();
    var _addpathsuffix = require_add_path_suffix();
    var _addlocale = require_add_locale();
    function formatNextPathnameInfo(info) {
      let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? void 0 : info.defaultLocale, info.ignorePrefix);
      if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
      }
      if (info.buildId) {
        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
      }
      pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
      return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addpathsuffix.addPathSuffix)(pathname, "/") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
    }
    __name(formatNextPathnameInfo, "formatNextPathnameInfo");
  }
});

// node_modules/next/dist/shared/lib/get-hostname.js
var require_get_hostname = __commonJS({
  "node_modules/next/dist/shared/lib/get-hostname.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getHostname", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return getHostname;
      }, "get")
    });
    function getHostname(parsed, headers) {
      let hostname;
      if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":", 1)[0];
      } else if (parsed.hostname) {
        hostname = parsed.hostname;
      } else return;
      return hostname.toLowerCase();
    }
    __name(getHostname, "getHostname");
  }
});

// node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "normalizeLocalePath", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return normalizeLocalePath;
      }, "get")
    });
    var cache = /* @__PURE__ */ new WeakMap();
    function normalizeLocalePath(pathname, locales) {
      if (!locales) return {
        pathname
      };
      let lowercasedLocales = cache.get(locales);
      if (!lowercasedLocales) {
        lowercasedLocales = locales.map((locale) => locale.toLowerCase());
        cache.set(locales, lowercasedLocales);
      }
      let detectedLocale;
      const segments = pathname.split("/", 2);
      if (!segments[1]) return {
        pathname
      };
      const segment = segments[1].toLowerCase();
      const index = lowercasedLocales.indexOf(segment);
      if (index < 0) return {
        pathname
      };
      detectedLocale = locales[index];
      pathname = pathname.slice(detectedLocale.length + 1) || "/";
      return {
        pathname,
        detectedLocale
      };
    }
    __name(normalizeLocalePath, "normalizeLocalePath");
  }
});

// node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js
var require_remove_path_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "removePathPrefix", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return removePathPrefix;
      }, "get")
    });
    var _pathhasprefix = require_path_has_prefix();
    function removePathPrefix(path, prefix) {
      if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
        return path;
      }
      const withoutPrefix = path.slice(prefix.length);
      if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
      }
      return "/" + withoutPrefix;
    }
    __name(removePathPrefix, "removePathPrefix");
  }
});

// node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js
var require_get_next_pathname_info = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getNextPathnameInfo", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return getNextPathnameInfo;
      }, "get")
    });
    var _normalizelocalepath = require_normalize_locale_path();
    var _removepathprefix = require_remove_path_prefix();
    var _pathhasprefix = require_path_has_prefix();
    function getNextPathnameInfo(pathname, options) {
      var _options_nextConfig;
      const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
      const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
      };
      if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
        info.basePath = basePath;
      }
      let pathnameNoDataPrefix = info.pathname;
      if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        if (options.parseData === true) {
          info.pathname = pathnameNoDataPrefix;
        }
      }
      if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
          result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, _normalizelocalepath.normalizeLocalePath)(pathnameNoDataPrefix, i18n.locales);
          if (result.detectedLocale) {
            info.locale = result.detectedLocale;
          }
        }
      }
      return info;
    }
    __name(getNextPathnameInfo, "getNextPathnameInfo");
  }
});

// node_modules/next/dist/server/web/next-url.js
var require_next_url = __commonJS({
  "node_modules/next/dist/server/web/next-url.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "NextURL", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return NextURL;
      }, "get")
    });
    var _detectdomainlocale = require_detect_domain_locale();
    var _formatnextpathnameinfo = require_format_next_pathname_info();
    var _gethostname = require_get_hostname();
    var _getnextpathnameinfo = require_get_next_pathname_info();
    var REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
    function parseURL(url, base) {
      return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
    }
    __name(parseURL, "parseURL");
    var Internal = Symbol("NextURLInternal");
    var NextURL = class _NextURL {
      static {
        __name(this, "NextURL");
      }
      constructor(input, baseOrOpts, opts) {
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
          base = baseOrOpts;
          options = opts || {};
        } else {
          options = opts || baseOrOpts || {};
        }
        this[Internal] = {
          url: parseURL(input, base ?? options.base),
          options,
          basePath: ""
        };
        this.analyze();
      }
      analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, _getnextpathnameinfo.getNextPathnameInfo)(this[Internal].url.pathname, {
          nextConfig: this[Internal].options.nextConfig,
          parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
          i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, _gethostname.getHostname)(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, _detectdomainlocale.detectDomainLocale)((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
      }
      formatPathname() {
        return (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
          basePath: this[Internal].basePath,
          buildId: this[Internal].buildId,
          defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : void 0,
          locale: this[Internal].locale,
          pathname: this[Internal].url.pathname,
          trailingSlash: this[Internal].trailingSlash
        });
      }
      formatSearch() {
        return this[Internal].url.search;
      }
      get buildId() {
        return this[Internal].buildId;
      }
      set buildId(buildId) {
        this[Internal].buildId = buildId;
      }
      get locale() {
        return this[Internal].locale ?? "";
      }
      set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
          throw Object.defineProperty(new TypeError(`The NextURL configuration includes no locale "${locale}"`), "__NEXT_ERROR_CODE", {
            value: "E597",
            enumerable: false,
            configurable: true
          });
        }
        this[Internal].locale = locale;
      }
      get defaultLocale() {
        return this[Internal].defaultLocale;
      }
      get domainLocale() {
        return this[Internal].domainLocale;
      }
      get searchParams() {
        return this[Internal].url.searchParams;
      }
      get host() {
        return this[Internal].url.host;
      }
      set host(value) {
        this[Internal].url.host = value;
      }
      get hostname() {
        return this[Internal].url.hostname;
      }
      set hostname(value) {
        this[Internal].url.hostname = value;
      }
      get port() {
        return this[Internal].url.port;
      }
      set port(value) {
        this[Internal].url.port = value;
      }
      get protocol() {
        return this[Internal].url.protocol;
      }
      set protocol(value) {
        this[Internal].url.protocol = value;
      }
      get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
      }
      set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
      }
      get origin() {
        return this[Internal].url.origin;
      }
      get pathname() {
        return this[Internal].url.pathname;
      }
      set pathname(value) {
        this[Internal].url.pathname = value;
      }
      get hash() {
        return this[Internal].url.hash;
      }
      set hash(value) {
        this[Internal].url.hash = value;
      }
      get search() {
        return this[Internal].url.search;
      }
      set search(value) {
        this[Internal].url.search = value;
      }
      get password() {
        return this[Internal].url.password;
      }
      set password(value) {
        this[Internal].url.password = value;
      }
      get username() {
        return this[Internal].url.username;
      }
      set username(value) {
        this[Internal].url.username = value;
      }
      get basePath() {
        return this[Internal].basePath;
      }
      set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
      }
      toString() {
        return this.href;
      }
      toJSON() {
        return this.href;
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          href: this.href,
          origin: this.origin,
          protocol: this.protocol,
          username: this.username,
          password: this.password,
          host: this.host,
          hostname: this.hostname,
          port: this.port,
          pathname: this.pathname,
          search: this.search,
          searchParams: this.searchParams,
          hash: this.hash
        };
      }
      clone() {
        return new _NextURL(String(this), this[Internal].options);
      }
    };
  }
});

// node_modules/next/dist/lib/constants.js
var require_constants = __commonJS({
  "node_modules/next/dist/lib/constants.js"(exports) {
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
      ACTION_SUFFIX: /* @__PURE__ */ __name(function() {
        return ACTION_SUFFIX;
      }, "ACTION_SUFFIX"),
      APP_DIR_ALIAS: /* @__PURE__ */ __name(function() {
        return APP_DIR_ALIAS;
      }, "APP_DIR_ALIAS"),
      CACHE_ONE_YEAR: /* @__PURE__ */ __name(function() {
        return CACHE_ONE_YEAR;
      }, "CACHE_ONE_YEAR"),
      DOT_NEXT_ALIAS: /* @__PURE__ */ __name(function() {
        return DOT_NEXT_ALIAS;
      }, "DOT_NEXT_ALIAS"),
      ESLINT_DEFAULT_DIRS: /* @__PURE__ */ __name(function() {
        return ESLINT_DEFAULT_DIRS;
      }, "ESLINT_DEFAULT_DIRS"),
      GSP_NO_RETURNED_VALUE: /* @__PURE__ */ __name(function() {
        return GSP_NO_RETURNED_VALUE;
      }, "GSP_NO_RETURNED_VALUE"),
      GSSP_COMPONENT_MEMBER_ERROR: /* @__PURE__ */ __name(function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
      }, "GSSP_COMPONENT_MEMBER_ERROR"),
      GSSP_NO_RETURNED_VALUE: /* @__PURE__ */ __name(function() {
        return GSSP_NO_RETURNED_VALUE;
      }, "GSSP_NO_RETURNED_VALUE"),
      HTML_CONTENT_TYPE_HEADER: /* @__PURE__ */ __name(function() {
        return HTML_CONTENT_TYPE_HEADER;
      }, "HTML_CONTENT_TYPE_HEADER"),
      INFINITE_CACHE: /* @__PURE__ */ __name(function() {
        return INFINITE_CACHE;
      }, "INFINITE_CACHE"),
      INSTRUMENTATION_HOOK_FILENAME: /* @__PURE__ */ __name(function() {
        return INSTRUMENTATION_HOOK_FILENAME;
      }, "INSTRUMENTATION_HOOK_FILENAME"),
      JSON_CONTENT_TYPE_HEADER: /* @__PURE__ */ __name(function() {
        return JSON_CONTENT_TYPE_HEADER;
      }, "JSON_CONTENT_TYPE_HEADER"),
      MATCHED_PATH_HEADER: /* @__PURE__ */ __name(function() {
        return MATCHED_PATH_HEADER;
      }, "MATCHED_PATH_HEADER"),
      MIDDLEWARE_FILENAME: /* @__PURE__ */ __name(function() {
        return MIDDLEWARE_FILENAME;
      }, "MIDDLEWARE_FILENAME"),
      MIDDLEWARE_LOCATION_REGEXP: /* @__PURE__ */ __name(function() {
        return MIDDLEWARE_LOCATION_REGEXP;
      }, "MIDDLEWARE_LOCATION_REGEXP"),
      NEXT_BODY_SUFFIX: /* @__PURE__ */ __name(function() {
        return NEXT_BODY_SUFFIX;
      }, "NEXT_BODY_SUFFIX"),
      NEXT_CACHE_IMPLICIT_TAG_ID: /* @__PURE__ */ __name(function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
      }, "NEXT_CACHE_IMPLICIT_TAG_ID"),
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: /* @__PURE__ */ __name(function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
      }, "NEXT_CACHE_REVALIDATED_TAGS_HEADER"),
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: /* @__PURE__ */ __name(function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
      }, "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER"),
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: /* @__PURE__ */ __name(function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
      }, "NEXT_CACHE_SOFT_TAG_MAX_LENGTH"),
      NEXT_CACHE_TAGS_HEADER: /* @__PURE__ */ __name(function() {
        return NEXT_CACHE_TAGS_HEADER;
      }, "NEXT_CACHE_TAGS_HEADER"),
      NEXT_CACHE_TAG_MAX_ITEMS: /* @__PURE__ */ __name(function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
      }, "NEXT_CACHE_TAG_MAX_ITEMS"),
      NEXT_CACHE_TAG_MAX_LENGTH: /* @__PURE__ */ __name(function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
      }, "NEXT_CACHE_TAG_MAX_LENGTH"),
      NEXT_DATA_SUFFIX: /* @__PURE__ */ __name(function() {
        return NEXT_DATA_SUFFIX;
      }, "NEXT_DATA_SUFFIX"),
      NEXT_INTERCEPTION_MARKER_PREFIX: /* @__PURE__ */ __name(function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
      }, "NEXT_INTERCEPTION_MARKER_PREFIX"),
      NEXT_META_SUFFIX: /* @__PURE__ */ __name(function() {
        return NEXT_META_SUFFIX;
      }, "NEXT_META_SUFFIX"),
      NEXT_QUERY_PARAM_PREFIX: /* @__PURE__ */ __name(function() {
        return NEXT_QUERY_PARAM_PREFIX;
      }, "NEXT_QUERY_PARAM_PREFIX"),
      NEXT_RESUME_HEADER: /* @__PURE__ */ __name(function() {
        return NEXT_RESUME_HEADER;
      }, "NEXT_RESUME_HEADER"),
      NON_STANDARD_NODE_ENV: /* @__PURE__ */ __name(function() {
        return NON_STANDARD_NODE_ENV;
      }, "NON_STANDARD_NODE_ENV"),
      PAGES_DIR_ALIAS: /* @__PURE__ */ __name(function() {
        return PAGES_DIR_ALIAS;
      }, "PAGES_DIR_ALIAS"),
      PRERENDER_REVALIDATE_HEADER: /* @__PURE__ */ __name(function() {
        return PRERENDER_REVALIDATE_HEADER;
      }, "PRERENDER_REVALIDATE_HEADER"),
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: /* @__PURE__ */ __name(function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
      }, "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"),
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: /* @__PURE__ */ __name(function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
      }, "PUBLIC_DIR_MIDDLEWARE_CONFLICT"),
      ROOT_DIR_ALIAS: /* @__PURE__ */ __name(function() {
        return ROOT_DIR_ALIAS;
      }, "ROOT_DIR_ALIAS"),
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: /* @__PURE__ */ __name(function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
      }, "RSC_ACTION_CLIENT_WRAPPER_ALIAS"),
      RSC_ACTION_ENCRYPTION_ALIAS: /* @__PURE__ */ __name(function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
      }, "RSC_ACTION_ENCRYPTION_ALIAS"),
      RSC_ACTION_PROXY_ALIAS: /* @__PURE__ */ __name(function() {
        return RSC_ACTION_PROXY_ALIAS;
      }, "RSC_ACTION_PROXY_ALIAS"),
      RSC_ACTION_VALIDATE_ALIAS: /* @__PURE__ */ __name(function() {
        return RSC_ACTION_VALIDATE_ALIAS;
      }, "RSC_ACTION_VALIDATE_ALIAS"),
      RSC_CACHE_WRAPPER_ALIAS: /* @__PURE__ */ __name(function() {
        return RSC_CACHE_WRAPPER_ALIAS;
      }, "RSC_CACHE_WRAPPER_ALIAS"),
      RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: /* @__PURE__ */ __name(function() {
        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
      }, "RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS"),
      RSC_MOD_REF_PROXY_ALIAS: /* @__PURE__ */ __name(function() {
        return RSC_MOD_REF_PROXY_ALIAS;
      }, "RSC_MOD_REF_PROXY_ALIAS"),
      RSC_PREFETCH_SUFFIX: /* @__PURE__ */ __name(function() {
        return RSC_PREFETCH_SUFFIX;
      }, "RSC_PREFETCH_SUFFIX"),
      RSC_SEGMENTS_DIR_SUFFIX: /* @__PURE__ */ __name(function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
      }, "RSC_SEGMENTS_DIR_SUFFIX"),
      RSC_SEGMENT_SUFFIX: /* @__PURE__ */ __name(function() {
        return RSC_SEGMENT_SUFFIX;
      }, "RSC_SEGMENT_SUFFIX"),
      RSC_SUFFIX: /* @__PURE__ */ __name(function() {
        return RSC_SUFFIX;
      }, "RSC_SUFFIX"),
      SERVER_PROPS_EXPORT_ERROR: /* @__PURE__ */ __name(function() {
        return SERVER_PROPS_EXPORT_ERROR;
      }, "SERVER_PROPS_EXPORT_ERROR"),
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: /* @__PURE__ */ __name(function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
      }, "SERVER_PROPS_GET_INIT_PROPS_CONFLICT"),
      SERVER_PROPS_SSG_CONFLICT: /* @__PURE__ */ __name(function() {
        return SERVER_PROPS_SSG_CONFLICT;
      }, "SERVER_PROPS_SSG_CONFLICT"),
      SERVER_RUNTIME: /* @__PURE__ */ __name(function() {
        return SERVER_RUNTIME;
      }, "SERVER_RUNTIME"),
      SSG_FALLBACK_EXPORT_ERROR: /* @__PURE__ */ __name(function() {
        return SSG_FALLBACK_EXPORT_ERROR;
      }, "SSG_FALLBACK_EXPORT_ERROR"),
      SSG_GET_INITIAL_PROPS_CONFLICT: /* @__PURE__ */ __name(function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
      }, "SSG_GET_INITIAL_PROPS_CONFLICT"),
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: /* @__PURE__ */ __name(function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
      }, "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR"),
      TEXT_PLAIN_CONTENT_TYPE_HEADER: /* @__PURE__ */ __name(function() {
        return TEXT_PLAIN_CONTENT_TYPE_HEADER;
      }, "TEXT_PLAIN_CONTENT_TYPE_HEADER"),
      UNSTABLE_REVALIDATE_RENAME_ERROR: /* @__PURE__ */ __name(function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
      }, "UNSTABLE_REVALIDATE_RENAME_ERROR"),
      WEBPACK_LAYERS: /* @__PURE__ */ __name(function() {
        return WEBPACK_LAYERS;
      }, "WEBPACK_LAYERS"),
      WEBPACK_RESOURCE_QUERIES: /* @__PURE__ */ __name(function() {
        return WEBPACK_RESOURCE_QUERIES;
      }, "WEBPACK_RESOURCE_QUERIES")
    });
    var TEXT_PLAIN_CONTENT_TYPE_HEADER = "text/plain";
    var HTML_CONTENT_TYPE_HEADER = "text/html; charset=utf-8";
    var JSON_CONTENT_TYPE_HEADER = "application/json; charset=utf-8";
    var NEXT_QUERY_PARAM_PREFIX = "nxtP";
    var NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
    var MATCHED_PATH_HEADER = "x-matched-path";
    var PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
    var PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
    var RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
    var RSC_SEGMENTS_DIR_SUFFIX = ".segments";
    var RSC_SEGMENT_SUFFIX = ".segment.rsc";
    var RSC_SUFFIX = ".rsc";
    var ACTION_SUFFIX = ".action";
    var NEXT_DATA_SUFFIX = ".json";
    var NEXT_META_SUFFIX = ".meta";
    var NEXT_BODY_SUFFIX = ".body";
    var NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
    var NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
    var NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
    var NEXT_RESUME_HEADER = "next-resume";
    var NEXT_CACHE_TAG_MAX_ITEMS = 128;
    var NEXT_CACHE_TAG_MAX_LENGTH = 256;
    var NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
    var NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
    var CACHE_ONE_YEAR = 31536e3;
    var INFINITE_CACHE = 4294967294;
    var MIDDLEWARE_FILENAME = "middleware";
    var MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
    var INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
    var PAGES_DIR_ALIAS = "private-next-pages";
    var DOT_NEXT_ALIAS = "private-dot-next";
    var ROOT_DIR_ALIAS = "private-next-root-dir";
    var APP_DIR_ALIAS = "private-next-app-dir";
    var RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
    var RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
    var RSC_ACTION_PROXY_ALIAS = "private-next-rsc-server-reference";
    var RSC_CACHE_WRAPPER_ALIAS = "private-next-rsc-cache-wrapper";
    var RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = "private-next-rsc-track-dynamic-import";
    var RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
    var RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
    var PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
    var SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
    var SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
    var SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
    var STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
    var SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
    var GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
    var GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
    var UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.";
    var GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
    var NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
    var SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
    var ESLINT_DEFAULT_DIRS = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ];
    var SERVER_RUNTIME = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    };
    var WEBPACK_LAYERS_NAMES = {
      /**
      * The layer for the shared code between the client and server bundles.
      */
      shared: "shared",
      /**
      * The layer for server-only runtime and picking up `react-server` export conditions.
      * Including app router RSC pages and app router custom routes and metadata routes.
      */
      reactServerComponents: "rsc",
      /**
      * Server Side Rendering layer for app (ssr).
      */
      serverSideRendering: "ssr",
      /**
      * The browser client bundle layer for actions.
      */
      actionBrowser: "action-browser",
      /**
      * The Node.js bundle layer for the API routes.
      */
      apiNode: "api-node",
      /**
      * The Edge Lite bundle layer for the API routes.
      */
      apiEdge: "api-edge",
      /**
      * The layer for the middleware code.
      */
      middleware: "middleware",
      /**
      * The layer for the instrumentation hooks.
      */
      instrument: "instrument",
      /**
      * The layer for assets on the edge.
      */
      edgeAsset: "edge-asset",
      /**
      * The browser client bundle layer for App directory.
      */
      appPagesBrowser: "app-pages-browser",
      /**
      * The browser client bundle layer for Pages directory.
      */
      pagesDirBrowser: "pages-dir-browser",
      /**
      * The Edge Lite bundle layer for Pages directory.
      */
      pagesDirEdge: "pages-dir-edge",
      /**
      * The Node.js bundle layer for Pages directory.
      */
      pagesDirNode: "pages-dir-node"
    };
    var WEBPACK_LAYERS = {
      ...WEBPACK_LAYERS_NAMES,
      GROUP: {
        builtinReact: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
          // pages api
          WEBPACK_LAYERS_NAMES.apiNode,
          WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.shared,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
          // app router pages and layouts
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ]
      }
    };
    var WEBPACK_RESOURCE_QUERIES = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  }
});

// node_modules/next/dist/server/web/utils.js
var require_utils2 = __commonJS({
  "node_modules/next/dist/server/web/utils.js"(exports) {
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
      fromNodeOutgoingHttpHeaders: /* @__PURE__ */ __name(function() {
        return fromNodeOutgoingHttpHeaders;
      }, "fromNodeOutgoingHttpHeaders"),
      normalizeNextQueryParam: /* @__PURE__ */ __name(function() {
        return normalizeNextQueryParam;
      }, "normalizeNextQueryParam"),
      splitCookiesString: /* @__PURE__ */ __name(function() {
        return splitCookiesString;
      }, "splitCookiesString"),
      toNodeOutgoingHttpHeaders: /* @__PURE__ */ __name(function() {
        return toNodeOutgoingHttpHeaders;
      }, "toNodeOutgoingHttpHeaders"),
      validateURL: /* @__PURE__ */ __name(function() {
        return validateURL;
      }, "validateURL")
    });
    var _constants = require_constants();
    function fromNodeOutgoingHttpHeaders(nodeHeaders) {
      const headers = new Headers();
      for (let [key, value] of Object.entries(nodeHeaders)) {
        const values = Array.isArray(value) ? value : [
          value
        ];
        for (let v of values) {
          if (typeof v === "undefined") continue;
          if (typeof v === "number") {
            v = v.toString();
          }
          headers.append(key, v);
        }
      }
      return headers;
    }
    __name(fromNodeOutgoingHttpHeaders, "fromNodeOutgoingHttpHeaders");
    function splitCookiesString(cookiesString) {
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      __name(skipWhitespace, "skipWhitespace");
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      __name(notSpecialChar, "notSpecialChar");
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    __name(splitCookiesString, "splitCookiesString");
    function toNodeOutgoingHttpHeaders(headers) {
      const nodeHeaders = {};
      const cookies = [];
      if (headers) {
        for (const [key, value] of headers.entries()) {
          if (key.toLowerCase() === "set-cookie") {
            cookies.push(...splitCookiesString(value));
            nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
          } else {
            nodeHeaders[key] = value;
          }
        }
      }
      return nodeHeaders;
    }
    __name(toNodeOutgoingHttpHeaders, "toNodeOutgoingHttpHeaders");
    function validateURL(url) {
      try {
        return String(new URL(String(url)));
      } catch (error) {
        throw Object.defineProperty(new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
          cause: error
        }), "__NEXT_ERROR_CODE", {
          value: "E61",
          enumerable: false,
          configurable: true
        });
      }
    }
    __name(validateURL, "validateURL");
    function normalizeNextQueryParam(key) {
      const prefixes = [
        _constants.NEXT_QUERY_PARAM_PREFIX,
        _constants.NEXT_INTERCEPTION_MARKER_PREFIX
      ];
      for (const prefix of prefixes) {
        if (key !== prefix && key.startsWith(prefix)) {
          return key.substring(prefix.length);
        }
      }
      return null;
    }
    __name(normalizeNextQueryParam, "normalizeNextQueryParam");
  }
});

// node_modules/next/dist/server/web/error.js
var require_error = __commonJS({
  "node_modules/next/dist/server/web/error.js"(exports) {
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
      PageSignatureError: /* @__PURE__ */ __name(function() {
        return PageSignatureError;
      }, "PageSignatureError"),
      RemovedPageError: /* @__PURE__ */ __name(function() {
        return RemovedPageError;
      }, "RemovedPageError"),
      RemovedUAError: /* @__PURE__ */ __name(function() {
        return RemovedUAError;
      }, "RemovedUAError")
    });
    var PageSignatureError = class extends Error {
      static {
        __name(this, "PageSignatureError");
      }
      constructor({ page }) {
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
      }
    };
    var RemovedPageError = class extends Error {
      static {
        __name(this, "RemovedPageError");
      }
      constructor() {
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
      }
    };
    var RemovedUAError = class extends Error {
      static {
        __name(this, "RemovedUAError");
      }
      constructor() {
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
      }
    };
  }
});

// node_modules/next/dist/server/web/spec-extension/request.js
var require_request = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/request.js"(exports) {
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
      INTERNALS: /* @__PURE__ */ __name(function() {
        return INTERNALS;
      }, "INTERNALS"),
      NextRequest: /* @__PURE__ */ __name(function() {
        return NextRequest;
      }, "NextRequest")
    });
    var _nexturl = require_next_url();
    var _utils = require_utils2();
    var _error = require_error();
    var _cookies = require_cookies();
    var INTERNALS = Symbol("internal request");
    var NextRequest = class extends Request {
      static {
        __name(this, "NextRequest");
      }
      constructor(input, init = {}) {
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0, _utils.validateURL)(url);
        if (process.env.NEXT_RUNTIME !== "edge") {
          if (init.body && init.duplex !== "half") {
            init.duplex = "half";
          }
        }
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new _nexturl.NextURL(url, {
          headers: (0, _utils.toNodeOutgoingHttpHeaders)(this.headers),
          nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
          cookies: new _cookies.RequestCookies(this.headers),
          nextUrl,
          url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url : nextUrl.toString()
        };
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          cookies: this.cookies,
          nextUrl: this.nextUrl,
          url: this.url,
          // rest of props come from Request
          bodyUsed: this.bodyUsed,
          cache: this.cache,
          credentials: this.credentials,
          destination: this.destination,
          headers: Object.fromEntries(this.headers),
          integrity: this.integrity,
          keepalive: this.keepalive,
          method: this.method,
          mode: this.mode,
          redirect: this.redirect,
          referrer: this.referrer,
          referrerPolicy: this.referrerPolicy,
          signal: this.signal
        };
      }
      get cookies() {
        return this[INTERNALS].cookies;
      }
      get nextUrl() {
        return this[INTERNALS].nextUrl;
      }
      /**
      * @deprecated
      * `page` has been deprecated in favour of `URLPattern`.
      * Read more: https://nextjs.org/docs/messages/middleware-request-page
      */
      get page() {
        throw new _error.RemovedPageError();
      }
      /**
      * @deprecated
      * `ua` has been removed in favour of \`userAgent\` function.
      * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
      */
      get ua() {
        throw new _error.RemovedUAError();
      }
      get url() {
        return this[INTERNALS].url;
      }
    };
  }
});

// node_modules/next/dist/server/web/spec-extension/response.js
var require_response = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/response.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "NextResponse", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return NextResponse;
      }, "get")
    });
    var _cookies = require_cookies();
    var _nexturl = require_next_url();
    var _utils = require_utils2();
    var _reflect = require_reflect();
    var _cookies1 = require_cookies();
    var INTERNALS = Symbol("internal response");
    var REDIRECTS = /* @__PURE__ */ new Set([
      301,
      302,
      303,
      307,
      308
    ]);
    function handleMiddlewareField(init, headers) {
      var _init_request;
      if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
          throw Object.defineProperty(new Error("request.headers must be an instance of Headers"), "__NEXT_ERROR_CODE", {
            value: "E119",
            enumerable: false,
            configurable: true
          });
        }
        const keys = [];
        for (const [key, value] of init.request.headers) {
          headers.set("x-middleware-request-" + key, value);
          keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
      }
    }
    __name(handleMiddlewareField, "handleMiddlewareField");
    var NextResponse = class _NextResponse extends Response {
      static {
        __name(this, "NextResponse");
      }
      constructor(body, init = {}) {
        super(body, init);
        const headers = this.headers;
        const cookies = new _cookies1.ResponseCookies(headers);
        const cookiesProxy = new Proxy(cookies, {
          get(target, prop, receiver) {
            switch (prop) {
              case "delete":
              case "set": {
                return (...args) => {
                  const result = Reflect.apply(target[prop], target, args);
                  const newHeaders = new Headers(headers);
                  if (result instanceof _cookies1.ResponseCookies) {
                    headers.set("x-middleware-set-cookie", result.getAll().map((cookie) => (0, _cookies.stringifyCookie)(cookie)).join(","));
                  }
                  handleMiddlewareField(init, newHeaders);
                  return result;
                };
              }
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
        this[INTERNALS] = {
          cookies: cookiesProxy,
          url: init.url ? new _nexturl.NextURL(init.url, {
            headers: (0, _utils.toNodeOutgoingHttpHeaders)(headers),
            nextConfig: init.nextConfig
          }) : void 0
        };
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          cookies: this.cookies,
          url: this.url,
          // rest of props come from Response
          body: this.body,
          bodyUsed: this.bodyUsed,
          headers: Object.fromEntries(this.headers),
          ok: this.ok,
          redirected: this.redirected,
          status: this.status,
          statusText: this.statusText,
          type: this.type
        };
      }
      get cookies() {
        return this[INTERNALS].cookies;
      }
      static json(body, init) {
        const response = Response.json(body, init);
        return new _NextResponse(response.body, response);
      }
      static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
          throw Object.defineProperty(new RangeError('Failed to execute "redirect" on "response": Invalid status code'), "__NEXT_ERROR_CODE", {
            value: "E529",
            enumerable: false,
            configurable: true
          });
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, _utils.validateURL)(url));
        return new _NextResponse(null, {
          ...initObj,
          headers,
          status
        });
      }
      static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, _utils.validateURL)(destination));
        handleMiddlewareField(init, headers);
        return new _NextResponse(null, {
          ...init,
          headers
        });
      }
      static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new _NextResponse(null, {
          ...init,
          headers
        });
      }
    };
  }
});

// node_modules/next/dist/server/web/spec-extension/image-response.js
var require_image_response = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/image-response.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ImageResponse", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return ImageResponse;
      }, "get")
    });
    function ImageResponse() {
      throw Object.defineProperty(new Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead'), "__NEXT_ERROR_CODE", {
        value: "E183",
        enumerable: false,
        configurable: true
      });
    }
    __name(ImageResponse, "ImageResponse");
  }
});

// node_modules/next/dist/compiled/ua-parser-js/ua-parser.js
var require_ua_parser = __commonJS({
  "node_modules/next/dist/compiled/ua-parser-js/ua-parser.js"(exports, module) {
    init_esm();
    (() => {
      var i = { 226: function(i2, e2) {
        (function(o2, a) {
          "use strict";
          var r = "1.0.35", t = "", n = "?", s = "function", b = "undefined", w = "object", l = "string", d = "major", c = "model", u = "name", p = "type", m = "vendor", f = "version", h = "architecture", v = "console", g = "mobile", k = "tablet", x = "smarttv", _ = "wearable", y = "embedded", q = 350;
          var T = "Amazon", S = "Apple", z = "ASUS", N = "BlackBerry", A = "Browser", C = "Chrome", E = "Edge", O = "Firefox", U = "Google", j = "Huawei", P = "LG", R = "Microsoft", M = "Motorola", B = "Opera", V = "Samsung", D = "Sharp", I = "Sony", W = "Viera", F = "Xiaomi", G = "Zebra", H = "Facebook", L = "Chromium OS", Z = "Mac OS";
          var extend = /* @__PURE__ */ __name(function(i3, e3) {
            var o3 = {};
            for (var a2 in i3) {
              if (e3[a2] && e3[a2].length % 2 === 0) {
                o3[a2] = e3[a2].concat(i3[a2]);
              } else {
                o3[a2] = i3[a2];
              }
            }
            return o3;
          }, "extend"), enumerize = /* @__PURE__ */ __name(function(i3) {
            var e3 = {};
            for (var o3 = 0; o3 < i3.length; o3++) {
              e3[i3[o3].toUpperCase()] = i3[o3];
            }
            return e3;
          }, "enumerize"), has = /* @__PURE__ */ __name(function(i3, e3) {
            return typeof i3 === l ? lowerize(e3).indexOf(lowerize(i3)) !== -1 : false;
          }, "has"), lowerize = /* @__PURE__ */ __name(function(i3) {
            return i3.toLowerCase();
          }, "lowerize"), majorize = /* @__PURE__ */ __name(function(i3) {
            return typeof i3 === l ? i3.replace(/[^\d\.]/g, t).split(".")[0] : a;
          }, "majorize"), trim = /* @__PURE__ */ __name(function(i3, e3) {
            if (typeof i3 === l) {
              i3 = i3.replace(/^\s\s*/, t);
              return typeof e3 === b ? i3 : i3.substring(0, q);
            }
          }, "trim");
          var rgxMapper = /* @__PURE__ */ __name(function(i3, e3) {
            var o3 = 0, r2, t2, n2, b2, l2, d2;
            while (o3 < e3.length && !l2) {
              var c2 = e3[o3], u2 = e3[o3 + 1];
              r2 = t2 = 0;
              while (r2 < c2.length && !l2) {
                if (!c2[r2]) {
                  break;
                }
                l2 = c2[r2++].exec(i3);
                if (!!l2) {
                  for (n2 = 0; n2 < u2.length; n2++) {
                    d2 = l2[++t2];
                    b2 = u2[n2];
                    if (typeof b2 === w && b2.length > 0) {
                      if (b2.length === 2) {
                        if (typeof b2[1] == s) {
                          this[b2[0]] = b2[1].call(this, d2);
                        } else {
                          this[b2[0]] = b2[1];
                        }
                      } else if (b2.length === 3) {
                        if (typeof b2[1] === s && !(b2[1].exec && b2[1].test)) {
                          this[b2[0]] = d2 ? b2[1].call(this, d2, b2[2]) : a;
                        } else {
                          this[b2[0]] = d2 ? d2.replace(b2[1], b2[2]) : a;
                        }
                      } else if (b2.length === 4) {
                        this[b2[0]] = d2 ? b2[3].call(this, d2.replace(b2[1], b2[2])) : a;
                      }
                    } else {
                      this[b2] = d2 ? d2 : a;
                    }
                  }
                }
              }
              o3 += 2;
            }
          }, "rgxMapper"), strMapper = /* @__PURE__ */ __name(function(i3, e3) {
            for (var o3 in e3) {
              if (typeof e3[o3] === w && e3[o3].length > 0) {
                for (var r2 = 0; r2 < e3[o3].length; r2++) {
                  if (has(e3[o3][r2], i3)) {
                    return o3 === n ? a : o3;
                  }
                }
              } else if (has(e3[o3], i3)) {
                return o3 === n ? a : o3;
              }
            }
            return i3;
          }, "strMapper");
          var $ = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, X = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" };
          var K = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [f, [u, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [f, [u, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [u, f], [/opios[\/ ]+([\w\.]+)/i], [f, [u, B + " Mini"]], [/\bopr\/([\w\.]+)/i], [f, [u, B]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [u, f], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [f, [u, "UC" + A]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [f, [u, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [f, [u, "WeChat"]], [/konqueror\/([\w\.]+)/i], [f, [u, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [f, [u, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [f, [u, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[u, /(.+)/, "$1 Secure " + A], f], [/\bfocus\/([\w\.]+)/i], [f, [u, O + " Focus"]], [/\bopt\/([\w\.]+)/i], [f, [u, B + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [f, [u, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [f, [u, "Dolphin"]], [/coast\/([\w\.]+)/i], [f, [u, B + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [f, [u, "MIUI " + A]], [/fxios\/([-\w\.]+)/i], [f, [u, O]], [/\bqihu|(qi?ho?o?|360)browser/i], [[u, "360 " + A]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[u, /(.+)/, "$1 " + A], f], [/(comodo_dragon)\/([\w\.]+)/i], [[u, /_/g, " "], f], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [u, f], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [u], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[u, H], f], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [u, f], [/\bgsa\/([\w\.]+) .*safari\//i], [f, [u, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [f, [u, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [f, [u, C + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[u, C + " WebView"], f], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [f, [u, "Android " + A]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [u, f], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [f, [u, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [f, u], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [u, [f, strMapper, $]], [/(webkit|khtml)\/([\w\.]+)/i], [u, f], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[u, "Netscape"], f], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [f, [u, O + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [u, f], [/(cobalt)\/([\w\.]+)/i], [u, [f, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[h, "amd64"]], [/(ia32(?=;))/i], [[h, lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[h, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[h, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[h, "armhf"]], [/windows (ce|mobile); ppc;/i], [[h, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[h, /ower/, t, lowerize]], [/(sun4\w)[;\)]/i], [[h, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[h, lowerize]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [m, V], [p, k]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [c, [m, V], [p, g]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [m, S], [p, g]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [m, S], [p, k]], [/(macintosh);/i], [c, [m, S]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [m, D], [p, g]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [m, j], [p, k]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [m, j], [p, g]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[c, /_/g, " "], [m, F], [p, g]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [m, F], [p, k]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [m, "OPPO"], [p, g]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [m, "Vivo"], [p, g]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [c, [m, "Realme"], [p, g]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [m, M], [p, g]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [m, M], [p, k]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [m, P], [p, k]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [m, P], [p, g]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [m, "Lenovo"], [p, k]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [m, "Nokia"], [p, g]], [/(pixel c)\b/i], [c, [m, U], [p, k]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [m, U], [p, g]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [m, I], [p, g]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [m, I], [p, k]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [m, "OnePlus"], [p, g]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [m, T], [p, k]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [m, T], [p, g]], [/(playbook);[-\w\),; ]+(rim)/i], [c, m, [p, k]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [m, N], [p, g]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [m, z], [p, k]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [m, z], [p, g]], [/(nexus 9)/i], [c, [m, "HTC"], [p, k]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [m, [c, /_/g, " "], [p, g]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [m, "Acer"], [p, k]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [m, "Meizu"], [p, g]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [m, c, [p, g]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [m, c, [p, k]], [/(surface duo)/i], [c, [m, R], [p, k]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [m, "Fairphone"], [p, g]], [/(u304aa)/i], [c, [m, "AT&T"], [p, g]], [/\bsie-(\w*)/i], [c, [m, "Siemens"], [p, g]], [/\b(rct\w+) b/i], [c, [m, "RCA"], [p, k]], [/\b(venue[\d ]{2,7}) b/i], [c, [m, "Dell"], [p, k]], [/\b(q(?:mv|ta)\w+) b/i], [c, [m, "Verizon"], [p, k]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [m, "Barnes & Noble"], [p, k]], [/\b(tm\d{3}\w+) b/i], [c, [m, "NuVision"], [p, k]], [/\b(k88) b/i], [c, [m, "ZTE"], [p, k]], [/\b(nx\d{3}j) b/i], [c, [m, "ZTE"], [p, g]], [/\b(gen\d{3}) b.+49h/i], [c, [m, "Swiss"], [p, g]], [/\b(zur\d{3}) b/i], [c, [m, "Swiss"], [p, k]], [/\b((zeki)?tb.*\b) b/i], [c, [m, "Zeki"], [p, k]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[m, "Dragon Touch"], c, [p, k]], [/\b(ns-?\w{0,9}) b/i], [c, [m, "Insignia"], [p, k]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [m, "NextBook"], [p, k]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[m, "Voice"], c, [p, g]], [/\b(lvtel\-)?(v1[12]) b/i], [[m, "LvTel"], c, [p, g]], [/\b(ph-1) /i], [c, [m, "Essential"], [p, g]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [m, "Envizen"], [p, k]], [/\b(trio[-\w\. ]+) b/i], [c, [m, "MachSpeed"], [p, k]], [/\btu_(1491) b/i], [c, [m, "Rotor"], [p, k]], [/(shield[\w ]+) b/i], [c, [m, "Nvidia"], [p, k]], [/(sprint) (\w+)/i], [m, c, [p, g]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [m, R], [p, g]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [m, G], [p, k]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [m, G], [p, g]], [/smart-tv.+(samsung)/i], [m, [p, x]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [m, V], [p, x]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[m, P], [p, x]], [/(apple) ?tv/i], [m, [c, S + " TV"], [p, x]], [/crkey/i], [[c, C + "cast"], [m, U], [p, x]], [/droid.+aft(\w)( bui|\))/i], [c, [m, T], [p, x]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [m, D], [p, x]], [/(bravia[\w ]+)( bui|\))/i], [c, [m, I], [p, x]], [/(mitv-\w{5}) bui/i], [c, [m, F], [p, x]], [/Hbbtv.*(technisat) (.*);/i], [m, c, [p, x]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[m, trim], [c, trim], [p, x]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[p, x]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [m, c, [p, v]], [/droid.+; (shield) bui/i], [c, [m, "Nvidia"], [p, v]], [/(playstation [345portablevi]+)/i], [c, [m, I], [p, v]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [m, R], [p, v]], [/((pebble))app/i], [m, c, [p, _]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [m, S], [p, _]], [/droid.+; (glass) \d/i], [c, [m, U], [p, _]], [/droid.+; (wt63?0{2,3})\)/i], [c, [m, G], [p, _]], [/(quest( 2| pro)?)/i], [c, [m, H], [p, _]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [m, [p, y]], [/(aeobc)\b/i], [c, [m, T], [p, y]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [c, [p, g]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [p, k]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[p, k]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[p, g]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [m, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [f, [u, E + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [f, [u, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [u, f], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [f, u]], os: [[/microsoft (windows) (vista|xp)/i], [u, f], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [u, [f, strMapper, X]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[u, "Windows"], [f, strMapper, X]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[f, /_/g, "."], [u, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[u, Z], [f, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [f, u], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [u, f], [/\(bb(10);/i], [f, [u, N]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [f, [u, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [f, [u, O + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [f, [u, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [f, [u, "watchOS"]], [/crkey\/([\d\.]+)/i], [f, [u, C + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[u, L], f], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [u, f], [/(sunos) ?([\w\.\d]*)/i], [[u, "Solaris"], f], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [u, f]] };
          var UAParser = /* @__PURE__ */ __name(function(i3, e3) {
            if (typeof i3 === w) {
              e3 = i3;
              i3 = a;
            }
            if (!(this instanceof UAParser)) {
              return new UAParser(i3, e3).getResult();
            }
            var r2 = typeof o2 !== b && o2.navigator ? o2.navigator : a;
            var n2 = i3 || (r2 && r2.userAgent ? r2.userAgent : t);
            var v2 = r2 && r2.userAgentData ? r2.userAgentData : a;
            var x2 = e3 ? extend(K, e3) : K;
            var _2 = r2 && r2.userAgent == n2;
            this.getBrowser = function() {
              var i4 = {};
              i4[u] = a;
              i4[f] = a;
              rgxMapper.call(i4, n2, x2.browser);
              i4[d] = majorize(i4[f]);
              if (_2 && r2 && r2.brave && typeof r2.brave.isBrave == s) {
                i4[u] = "Brave";
              }
              return i4;
            };
            this.getCPU = function() {
              var i4 = {};
              i4[h] = a;
              rgxMapper.call(i4, n2, x2.cpu);
              return i4;
            };
            this.getDevice = function() {
              var i4 = {};
              i4[m] = a;
              i4[c] = a;
              i4[p] = a;
              rgxMapper.call(i4, n2, x2.device);
              if (_2 && !i4[p] && v2 && v2.mobile) {
                i4[p] = g;
              }
              if (_2 && i4[c] == "Macintosh" && r2 && typeof r2.standalone !== b && r2.maxTouchPoints && r2.maxTouchPoints > 2) {
                i4[c] = "iPad";
                i4[p] = k;
              }
              return i4;
            };
            this.getEngine = function() {
              var i4 = {};
              i4[u] = a;
              i4[f] = a;
              rgxMapper.call(i4, n2, x2.engine);
              return i4;
            };
            this.getOS = function() {
              var i4 = {};
              i4[u] = a;
              i4[f] = a;
              rgxMapper.call(i4, n2, x2.os);
              if (_2 && !i4[u] && v2 && v2.platform != "Unknown") {
                i4[u] = v2.platform.replace(/chrome os/i, L).replace(/macos/i, Z);
              }
              return i4;
            };
            this.getResult = function() {
              return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
            };
            this.getUA = function() {
              return n2;
            };
            this.setUA = function(i4) {
              n2 = typeof i4 === l && i4.length > q ? trim(i4, q) : i4;
              return this;
            };
            this.setUA(n2);
            return this;
          }, "UAParser");
          UAParser.VERSION = r;
          UAParser.BROWSER = enumerize([u, f, d]);
          UAParser.CPU = enumerize([h]);
          UAParser.DEVICE = enumerize([c, m, p, v, g, x, k, _, y]);
          UAParser.ENGINE = UAParser.OS = enumerize([u, f]);
          if (typeof e2 !== b) {
            if ("object" !== b && i2.exports) {
              e2 = i2.exports = UAParser;
            }
            e2.UAParser = UAParser;
          } else {
            if (typeof define === s && define.amd) {
              define(function() {
                return UAParser;
              });
            } else if (typeof o2 !== b) {
              o2.UAParser = UAParser;
            }
          }
          var Q = typeof o2 !== b && (o2.jQuery || o2.Zepto);
          if (Q && !Q.ua) {
            var Y = new UAParser();
            Q.ua = Y.getResult();
            Q.ua.get = function() {
              return Y.getUA();
            };
            Q.ua.set = function(i3) {
              Y.setUA(i3);
              var e3 = Y.getResult();
              for (var o3 in e3) {
                Q.ua[o3] = e3[o3];
              }
            };
          }
        })(typeof window === "object" ? window : this);
      } };
      var e = {};
      function __nccwpck_require__(o2) {
        var a = e[o2];
        if (a !== void 0) {
          return a.exports;
        }
        var r = e[o2] = { exports: {} };
        var t = true;
        try {
          i[o2].call(r.exports, r, r.exports, __nccwpck_require__);
          t = false;
        } finally {
          if (t) delete e[o2];
        }
        return r.exports;
      }
      __name(__nccwpck_require__, "__nccwpck_require__");
      if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
      var o = __nccwpck_require__(226);
      module.exports = o;
    })();
  }
});

// node_modules/next/dist/server/web/spec-extension/user-agent.js
var require_user_agent = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/user-agent.js"(exports) {
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
      isBot: /* @__PURE__ */ __name(function() {
        return isBot;
      }, "isBot"),
      userAgent: /* @__PURE__ */ __name(function() {
        return userAgent;
      }, "userAgent"),
      userAgentFromString: /* @__PURE__ */ __name(function() {
        return userAgentFromString;
      }, "userAgentFromString")
    });
    var _uaparserjs = /* @__PURE__ */ _interop_require_default(require_ua_parser());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    __name(_interop_require_default, "_interop_require_default");
    function isBot(input) {
      return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
    }
    __name(isBot, "isBot");
    function userAgentFromString(input) {
      return {
        ...(0, _uaparserjs.default)(input),
        isBot: input === void 0 ? false : isBot(input)
      };
    }
    __name(userAgentFromString, "userAgentFromString");
    function userAgent({ headers }) {
      return userAgentFromString(headers.get("user-agent") || void 0);
    }
    __name(userAgent, "userAgent");
  }
});

// node_modules/next/dist/server/web/spec-extension/url-pattern.js
var require_url_pattern = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/url-pattern.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "URLPattern", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return GlobalURLPattern;
      }, "get")
    });
    var GlobalURLPattern = (
      // @ts-expect-error: URLPattern is not available in Node.js
      typeof URLPattern === "undefined" ? void 0 : URLPattern
    );
  }
});

// node_modules/next/dist/server/after/after.js
var require_after = __commonJS({
  "node_modules/next/dist/server/after/after.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "after", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return after2;
      }, "get")
    });
    var _workasyncstorageexternal = require_work_async_storage_external();
    function after2(task) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (!workStore) {
        throw Object.defineProperty(new Error("`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"), "__NEXT_ERROR_CODE", {
          value: "E468",
          enumerable: false,
          configurable: true
        });
      }
      const { afterContext } = workStore;
      return afterContext.after(task);
    }
    __name(after2, "after");
  }
});

// node_modules/next/dist/server/after/index.js
var require_after2 = __commonJS({
  "node_modules/next/dist/server/after/index.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    _export_star(require_after(), exports);
    function _export_star(from, to) {
      Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
          Object.defineProperty(to, k, {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return from[k];
            }, "get")
          });
        }
      });
      return from;
    }
    __name(_export_star, "_export_star");
  }
});

// node_modules/next/dist/server/request/connection.js
var require_connection = __commonJS({
  "node_modules/next/dist/server/request/connection.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "connection", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return connection;
      }, "get")
    });
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _dynamicrendering = require_dynamic_rendering();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _utils = require_utils();
    function connection() {
      const callingExpression = "connection";
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore) {
        if (workUnitStore && workUnitStore.phase === "after" && !(0, _utils.isRequestAPICallableInsideAfter)()) {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used "connection" inside "after(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but "after(...)" executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
            value: "E186",
            enumerable: false,
            configurable: true
          });
        }
        if (workStore.forceStatic) {
          return Promise.resolve(void 0);
        }
        if (workStore.dynamicShouldError) {
          throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E562",
            enumerable: false,
            configurable: true
          });
        }
        if (workUnitStore) {
          switch (workUnitStore.type) {
            case "cache": {
              const error = Object.defineProperty(new Error(`Route ${workStore.route} used "connection" inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual request, but caches must be able to be produced before a request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E752",
                enumerable: false,
                configurable: true
              });
              Error.captureStackTrace(error, connection);
              workStore.invalidDynamicUsageError ??= error;
              throw error;
            }
            case "private-cache": {
              const error = Object.defineProperty(new Error(`Route ${workStore.route} used "connection" inside "use cache: private". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual navigation request, but caches must be able to be produced before a navigation request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E753",
                enumerable: false,
                configurable: true
              });
              Error.captureStackTrace(error, connection);
              workStore.invalidDynamicUsageError ??= error;
              throw error;
            }
            case "unstable-cache":
              throw Object.defineProperty(new Error(`Route ${workStore.route} used "connection" inside a function cached with "unstable_cache(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                value: "E1",
                enumerable: false,
                configurable: true
              });
            case "prerender":
            case "prerender-client":
            case "prerender-runtime":
              return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, "`connection()`");
            case "prerender-ppr":
              return (0, _dynamicrendering.postponeWithTracking)(workStore.route, "connection", workUnitStore.dynamicTracking);
            case "prerender-legacy":
              return (0, _dynamicrendering.throwToInterruptStaticGeneration)("connection", workStore, workUnitStore);
            case "request":
              (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
              if (process.env.NODE_ENV === "development") {
                return (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(void 0);
              } else {
                return Promise.resolve(void 0);
              }
            default:
              workUnitStore;
          }
        }
      }
      (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
    }
    __name(connection, "connection");
  }
});

// node_modules/next/dist/shared/lib/utils/reflect-utils.js
var require_reflect_utils = __commonJS({
  "node_modules/next/dist/shared/lib/utils/reflect-utils.js"(exports) {
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
      describeHasCheckingStringProperty: /* @__PURE__ */ __name(function() {
        return describeHasCheckingStringProperty;
      }, "describeHasCheckingStringProperty"),
      describeStringPropertyAccess: /* @__PURE__ */ __name(function() {
        return describeStringPropertyAccess;
      }, "describeStringPropertyAccess"),
      wellKnownProperties: /* @__PURE__ */ __name(function() {
        return wellKnownProperties;
      }, "wellKnownProperties")
    });
    var isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
    function describeStringPropertyAccess(target, prop) {
      if (isDefinitelyAValidIdentifier.test(prop)) {
        return "`" + target + "." + prop + "`";
      }
      return "`" + target + "[" + JSON.stringify(prop) + "]`";
    }
    __name(describeStringPropertyAccess, "describeStringPropertyAccess");
    function describeHasCheckingStringProperty(target, prop) {
      const stringifiedProp = JSON.stringify(prop);
      return "`Reflect.has(" + target + ", " + stringifiedProp + ")`, `" + stringifiedProp + " in " + target + "`, or similar";
    }
    __name(describeHasCheckingStringProperty, "describeHasCheckingStringProperty");
    var wellKnownProperties = /* @__PURE__ */ new Set([
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toString",
      "valueOf",
      "toLocaleString",
      // Promise prototype
      // fallthrough
      "then",
      "catch",
      "finally",
      // React Promise extension
      // fallthrough
      "status",
      // React introspection
      "displayName",
      "_debugInfo",
      // Common tested properties
      // fallthrough
      "toJSON",
      "$$typeof",
      "__esModule",
      // Tested by flight when checking for iterables
      "@@iterator"
    ]);
  }
});

// node_modules/next/dist/server/app-render/action-async-storage-instance.js
var require_action_async_storage_instance = __commonJS({
  "node_modules/next/dist/server/app-render/action-async-storage-instance.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "actionAsyncStorageInstance", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return actionAsyncStorageInstance;
      }, "get")
    });
    var _asynclocalstorage = require_async_local_storage();
    var actionAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// node_modules/next/dist/server/app-render/action-async-storage.external.js
var require_action_async_storage_external = __commonJS({
  "node_modules/next/dist/server/app-render/action-async-storage.external.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "actionAsyncStorage", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return _actionasyncstorageinstance.actionAsyncStorageInstance;
      }, "get")
    });
    var _actionasyncstorageinstance = require_action_async_storage_instance();
  }
});

// node_modules/next/dist/lib/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/next/dist/lib/picocolors.js"(exports) {
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
      bgBlack: /* @__PURE__ */ __name(function() {
        return bgBlack;
      }, "bgBlack"),
      bgBlue: /* @__PURE__ */ __name(function() {
        return bgBlue;
      }, "bgBlue"),
      bgCyan: /* @__PURE__ */ __name(function() {
        return bgCyan;
      }, "bgCyan"),
      bgGreen: /* @__PURE__ */ __name(function() {
        return bgGreen;
      }, "bgGreen"),
      bgMagenta: /* @__PURE__ */ __name(function() {
        return bgMagenta;
      }, "bgMagenta"),
      bgRed: /* @__PURE__ */ __name(function() {
        return bgRed;
      }, "bgRed"),
      bgWhite: /* @__PURE__ */ __name(function() {
        return bgWhite;
      }, "bgWhite"),
      bgYellow: /* @__PURE__ */ __name(function() {
        return bgYellow;
      }, "bgYellow"),
      black: /* @__PURE__ */ __name(function() {
        return black;
      }, "black"),
      blue: /* @__PURE__ */ __name(function() {
        return blue;
      }, "blue"),
      bold: /* @__PURE__ */ __name(function() {
        return bold;
      }, "bold"),
      cyan: /* @__PURE__ */ __name(function() {
        return cyan;
      }, "cyan"),
      dim: /* @__PURE__ */ __name(function() {
        return dim;
      }, "dim"),
      gray: /* @__PURE__ */ __name(function() {
        return gray;
      }, "gray"),
      green: /* @__PURE__ */ __name(function() {
        return green;
      }, "green"),
      hidden: /* @__PURE__ */ __name(function() {
        return hidden;
      }, "hidden"),
      inverse: /* @__PURE__ */ __name(function() {
        return inverse;
      }, "inverse"),
      italic: /* @__PURE__ */ __name(function() {
        return italic;
      }, "italic"),
      magenta: /* @__PURE__ */ __name(function() {
        return magenta;
      }, "magenta"),
      purple: /* @__PURE__ */ __name(function() {
        return purple;
      }, "purple"),
      red: /* @__PURE__ */ __name(function() {
        return red;
      }, "red"),
      reset: /* @__PURE__ */ __name(function() {
        return reset;
      }, "reset"),
      strikethrough: /* @__PURE__ */ __name(function() {
        return strikethrough;
      }, "strikethrough"),
      underline: /* @__PURE__ */ __name(function() {
        return underline;
      }, "underline"),
      white: /* @__PURE__ */ __name(function() {
        return white;
      }, "white"),
      yellow: /* @__PURE__ */ __name(function() {
        return yellow;
      }, "yellow")
    });
    var _globalThis;
    var { env, stdout } = ((_globalThis = globalThis) == null ? void 0 : _globalThis.process) ?? {};
    var enabled = env && !env.NO_COLOR && (env.FORCE_COLOR || (stdout == null ? void 0 : stdout.isTTY) && !env.CI && env.TERM !== "dumb");
    var replaceClose = /* @__PURE__ */ __name((str, close, replace, index) => {
      const start = str.substring(0, index) + replace;
      const end = str.substring(index + close.length);
      const nextIndex = end.indexOf(close);
      return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
    }, "replaceClose");
    var formatter = /* @__PURE__ */ __name((open, close, replace = open) => {
      if (!enabled) return String;
      return (input) => {
        const string = "" + input;
        const index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
      };
    }, "formatter");
    var reset = enabled ? (s) => `\x1B[0m${s}\x1B[0m` : String;
    var bold = formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m");
    var dim = formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m");
    var italic = formatter("\x1B[3m", "\x1B[23m");
    var underline = formatter("\x1B[4m", "\x1B[24m");
    var inverse = formatter("\x1B[7m", "\x1B[27m");
    var hidden = formatter("\x1B[8m", "\x1B[28m");
    var strikethrough = formatter("\x1B[9m", "\x1B[29m");
    var black = formatter("\x1B[30m", "\x1B[39m");
    var red = formatter("\x1B[31m", "\x1B[39m");
    var green = formatter("\x1B[32m", "\x1B[39m");
    var yellow = formatter("\x1B[33m", "\x1B[39m");
    var blue = formatter("\x1B[34m", "\x1B[39m");
    var magenta = formatter("\x1B[35m", "\x1B[39m");
    var purple = formatter("\x1B[38;2;173;127;168m", "\x1B[39m");
    var cyan = formatter("\x1B[36m", "\x1B[39m");
    var white = formatter("\x1B[37m", "\x1B[39m");
    var gray = formatter("\x1B[90m", "\x1B[39m");
    var bgBlack = formatter("\x1B[40m", "\x1B[49m");
    var bgRed = formatter("\x1B[41m", "\x1B[49m");
    var bgGreen = formatter("\x1B[42m", "\x1B[49m");
    var bgYellow = formatter("\x1B[43m", "\x1B[49m");
    var bgBlue = formatter("\x1B[44m", "\x1B[49m");
    var bgMagenta = formatter("\x1B[45m", "\x1B[49m");
    var bgCyan = formatter("\x1B[46m", "\x1B[49m");
    var bgWhite = formatter("\x1B[47m", "\x1B[49m");
  }
});

// node_modules/next/dist/server/lib/lru-cache.js
var require_lru_cache = __commonJS({
  "node_modules/next/dist/server/lib/lru-cache.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "LRUCache", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return LRUCache;
      }, "get")
    });
    var LRUNode = class {
      static {
        __name(this, "LRUNode");
      }
      constructor(key, data, size) {
        this.prev = null;
        this.next = null;
        this.key = key;
        this.data = data;
        this.size = size;
      }
    };
    var SentinelNode = class {
      static {
        __name(this, "SentinelNode");
      }
      constructor() {
        this.prev = null;
        this.next = null;
      }
    };
    var LRUCache = class {
      static {
        __name(this, "LRUCache");
      }
      constructor(maxSize, calculateSize, onEvict) {
        this.cache = /* @__PURE__ */ new Map();
        this.totalSize = 0;
        this.maxSize = maxSize;
        this.calculateSize = calculateSize;
        this.onEvict = onEvict;
        this.head = new SentinelNode();
        this.tail = new SentinelNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
      }
      /**
      * Adds a node immediately after the head (marks as most recently used).
      * Used when inserting new items or when an item is accessed.
      * PRECONDITION: node must be disconnected (prev/next should be null)
      */
      addToHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
      }
      /**
      * Removes a node from its current position in the doubly-linked list.
      * Updates the prev/next pointers of adjacent nodes to maintain list integrity.
      * PRECONDITION: node must be connected (prev/next are non-null)
      */
      removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
      }
      /**
      * Moves an existing node to the head position (marks as most recently used).
      * This is the core LRU operation - accessed items become most recent.
      */
      moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
      }
      /**
      * Removes and returns the least recently used node (the one before tail).
      * This is called during eviction when the cache exceeds capacity.
      * PRECONDITION: cache is not empty (ensured by caller)
      */
      removeTail() {
        const lastNode = this.tail.prev;
        this.removeNode(lastNode);
        return lastNode;
      }
      /**
      * Sets a key-value pair in the cache.
      * If the key exists, updates the value and moves to head.
      * If new, adds at head and evicts from tail if necessary.
      *
      * Time Complexity:
      * - O(1) for uniform item sizes
      * - O(k) where k is the number of items evicted (can be O(N) for variable sizes)
      */
      set(key, value) {
        const size = (this.calculateSize == null ? void 0 : this.calculateSize.call(this, value)) ?? 1;
        if (size <= 0) {
          throw Object.defineProperty(new Error(`LRUCache: calculateSize returned ${size}, but size must be > 0. Items with size 0 would never be evicted, causing unbounded cache growth.`), "__NEXT_ERROR_CODE", {
            value: "E789",
            enumerable: false,
            configurable: true
          });
        }
        if (size > this.maxSize) {
          console.warn("Single item size exceeds maxSize");
          return false;
        }
        const existing = this.cache.get(key);
        if (existing) {
          existing.data = value;
          this.totalSize = this.totalSize - existing.size + size;
          existing.size = size;
          this.moveToHead(existing);
        } else {
          const newNode = new LRUNode(key, value, size);
          this.cache.set(key, newNode);
          this.addToHead(newNode);
          this.totalSize += size;
        }
        while (this.totalSize > this.maxSize && this.cache.size > 0) {
          const tail = this.removeTail();
          this.cache.delete(tail.key);
          this.totalSize -= tail.size;
          this.onEvict == null ? void 0 : this.onEvict.call(this, tail.key, tail.data);
        }
        return true;
      }
      /**
      * Checks if a key exists in the cache.
      * This is a pure query operation - does NOT update LRU order.
      *
      * Time Complexity: O(1)
      */
      has(key) {
        return this.cache.has(key);
      }
      /**
      * Retrieves a value by key and marks it as most recently used.
      * Moving to head maintains the LRU property for future evictions.
      *
      * Time Complexity: O(1)
      */
      get(key) {
        const node = this.cache.get(key);
        if (!node) return void 0;
        this.moveToHead(node);
        return node.data;
      }
      /**
      * Returns an iterator over the cache entries. The order is outputted in the
      * order of most recently used to least recently used.
      */
      *[Symbol.iterator]() {
        let current = this.head.next;
        while (current && current !== this.tail) {
          const node = current;
          yield [
            node.key,
            node.data
          ];
          current = current.next;
        }
      }
      /**
      * Removes a specific key from the cache.
      * Updates both the hash map and doubly-linked list.
      *
      * Note: This is an explicit removal and does NOT trigger the `onEvict`
      * callback. Use this for intentional deletions where eviction tracking
      * is not needed.
      *
      * Time Complexity: O(1)
      */
      remove(key) {
        const node = this.cache.get(key);
        if (!node) return;
        this.removeNode(node);
        this.cache.delete(key);
        this.totalSize -= node.size;
      }
      /**
      * Returns the number of items in the cache.
      */
      get size() {
        return this.cache.size;
      }
      /**
      * Returns the current total size of all cached items.
      * This uses the custom size calculation if provided.
      */
      get currentSize() {
        return this.totalSize;
      }
    };
  }
});

// node_modules/next/dist/build/output/log.js
var require_log = __commonJS({
  "node_modules/next/dist/build/output/log.js"(exports) {
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
      bootstrap: /* @__PURE__ */ __name(function() {
        return bootstrap;
      }, "bootstrap"),
      error: /* @__PURE__ */ __name(function() {
        return error;
      }, "error"),
      event: /* @__PURE__ */ __name(function() {
        return event;
      }, "event"),
      info: /* @__PURE__ */ __name(function() {
        return info;
      }, "info"),
      prefixes: /* @__PURE__ */ __name(function() {
        return prefixes;
      }, "prefixes"),
      ready: /* @__PURE__ */ __name(function() {
        return ready;
      }, "ready"),
      trace: /* @__PURE__ */ __name(function() {
        return trace;
      }, "trace"),
      wait: /* @__PURE__ */ __name(function() {
        return wait;
      }, "wait"),
      warn: /* @__PURE__ */ __name(function() {
        return warn;
      }, "warn"),
      warnOnce: /* @__PURE__ */ __name(function() {
        return warnOnce2;
      }, "warnOnce")
    });
    var _picocolors = require_picocolors();
    var _lrucache = require_lru_cache();
    var prefixes = {
      wait: (0, _picocolors.white)((0, _picocolors.bold)("○")),
      error: (0, _picocolors.red)((0, _picocolors.bold)("⨯")),
      warn: (0, _picocolors.yellow)((0, _picocolors.bold)("⚠")),
      ready: "▲",
      info: (0, _picocolors.white)((0, _picocolors.bold)(" ")),
      event: (0, _picocolors.green)((0, _picocolors.bold)("✓")),
      trace: (0, _picocolors.magenta)((0, _picocolors.bold)("»"))
    };
    var LOGGING_METHOD = {
      log: "log",
      warn: "warn",
      error: "error"
    };
    function prefixedLog(prefixType, ...message) {
      if ((message[0] === "" || message[0] === void 0) && message.length === 1) {
        message.shift();
      }
      const consoleMethod = prefixType in LOGGING_METHOD ? LOGGING_METHOD[prefixType] : "log";
      const prefix = prefixes[prefixType];
      if (message.length === 0) {
        console[consoleMethod]("");
      } else {
        if (message.length === 1 && typeof message[0] === "string") {
          console[consoleMethod](" " + prefix + " " + message[0]);
        } else {
          console[consoleMethod](" " + prefix, ...message);
        }
      }
    }
    __name(prefixedLog, "prefixedLog");
    function bootstrap(...message) {
      console.log("   " + message.join(" "));
    }
    __name(bootstrap, "bootstrap");
    function wait(...message) {
      prefixedLog("wait", ...message);
    }
    __name(wait, "wait");
    function error(...message) {
      prefixedLog("error", ...message);
    }
    __name(error, "error");
    function warn(...message) {
      prefixedLog("warn", ...message);
    }
    __name(warn, "warn");
    function ready(...message) {
      prefixedLog("ready", ...message);
    }
    __name(ready, "ready");
    function info(...message) {
      prefixedLog("info", ...message);
    }
    __name(info, "info");
    function event(...message) {
      prefixedLog("event", ...message);
    }
    __name(event, "event");
    function trace(...message) {
      prefixedLog("trace", ...message);
    }
    __name(trace, "trace");
    var warnOnceCache = new _lrucache.LRUCache(1e4, (value) => value.length);
    function warnOnce2(...message) {
      const key = message.join(" ");
      if (!warnOnceCache.has(key)) {
        warnOnceCache.set(key, key);
        warn(...message);
      }
    }
    __name(warnOnce2, "warnOnce");
  }
});

// node_modules/next/dist/server/request/root-params.js
var require_root_params = __commonJS({
  "node_modules/next/dist/server/request/root-params.js"(exports) {
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
      getRootParam: /* @__PURE__ */ __name(function() {
        return getRootParam;
      }, "getRootParam"),
      unstable_rootParams: /* @__PURE__ */ __name(function() {
        return unstable_rootParams;
      }, "unstable_rootParams")
    });
    var _invarianterror = require_invariant_error();
    var _dynamicrendering = require_dynamic_rendering();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _reflectutils = require_reflect_utils();
    var _actionasyncstorageexternal = require_action_async_storage_external();
    var _log = require_log();
    var CachedParams = /* @__PURE__ */ new WeakMap();
    async function unstable_rootParams() {
      (0, _log.warnOnce)("`unstable_rootParams()` is deprecated and will be removed in an upcoming major release. Import specific root params from `next/root-params` instead.");
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError("Missing workStore in unstable_rootParams"), "__NEXT_ERROR_CODE", {
          value: "E615",
          enumerable: false,
          configurable: true
        });
      }
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (!workUnitStore) {
        throw Object.defineProperty(new Error(`Route ${workStore.route} used \`unstable_rootParams()\` in Pages Router. This API is only available within App Router.`), "__NEXT_ERROR_CODE", {
          value: "E641",
          enumerable: false,
          configurable: true
        });
      }
      switch (workUnitStore.type) {
        case "cache":
        case "unstable-cache": {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used \`unstable_rootParams()\` inside \`"use cache"\` or \`unstable_cache\`. Support for this API inside cache scopes is planned for a future version of Next.js.`), "__NEXT_ERROR_CODE", {
            value: "E642",
            enumerable: false,
            configurable: true
          });
        }
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
          return createPrerenderRootParams(workUnitStore.rootParams, workStore, workUnitStore);
        case "private-cache":
        case "prerender-runtime":
        case "request":
          return Promise.resolve(workUnitStore.rootParams);
        default:
          return workUnitStore;
      }
    }
    __name(unstable_rootParams, "unstable_rootParams");
    function createPrerenderRootParams(underlyingParams, workStore, prerenderStore) {
      switch (prerenderStore.type) {
        case "prerender-client": {
          const exportName = "`unstable_rootParams`";
          throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E693",
            enumerable: false,
            configurable: true
          });
        }
        case "prerender": {
          const fallbackParams = prerenderStore.fallbackRouteParams;
          if (fallbackParams) {
            for (const key in underlyingParams) {
              if (fallbackParams.has(key)) {
                const cachedParams = CachedParams.get(underlyingParams);
                if (cachedParams) {
                  return cachedParams;
                }
                const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, "`unstable_rootParams`");
                CachedParams.set(underlyingParams, promise);
                return promise;
              }
            }
          }
          break;
        }
        case "prerender-ppr": {
          const fallbackParams = prerenderStore.fallbackRouteParams;
          if (fallbackParams) {
            for (const key in underlyingParams) {
              if (fallbackParams.has(key)) {
                return makeErroringRootParams(underlyingParams, fallbackParams, workStore, prerenderStore);
              }
            }
          }
          break;
        }
        case "prerender-legacy":
          break;
        default:
          prerenderStore;
      }
      return Promise.resolve(underlyingParams);
    }
    __name(createPrerenderRootParams, "createPrerenderRootParams");
    function makeErroringRootParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
      const cachedParams = CachedParams.get(underlyingParams);
      if (cachedParams) {
        return cachedParams;
      }
      const augmentedUnderlying = {
        ...underlyingParams
      };
      const promise = Promise.resolve(augmentedUnderlying);
      CachedParams.set(underlyingParams, promise);
      Object.keys(underlyingParams).forEach((prop) => {
        if (_reflectutils.wellKnownProperties.has(prop)) {
        } else {
          if (fallbackParams.has(prop)) {
            Object.defineProperty(augmentedUnderlying, prop, {
              get() {
                const expression = (0, _reflectutils.describeStringPropertyAccess)("unstable_rootParams", prop);
                if (prerenderStore.type === "prerender-ppr") {
                  (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                } else {
                  (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                }
              },
              enumerable: true
            });
          } else {
            ;
            promise[prop] = underlyingParams[prop];
          }
        }
      });
      return promise;
    }
    __name(makeErroringRootParams, "makeErroringRootParams");
    function getRootParam(paramName) {
      const apiName = `\`import('next/root-params').${paramName}()\``;
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError(`Missing workStore in ${apiName}`), "__NEXT_ERROR_CODE", {
          value: "E764",
          enumerable: false,
          configurable: true
        });
      }
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (!workUnitStore) {
        throw Object.defineProperty(new Error(`Route ${workStore.route} used ${apiName} outside of a Server Component. This is not allowed.`), "__NEXT_ERROR_CODE", {
          value: "E774",
          enumerable: false,
          configurable: true
        });
      }
      const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
      if (actionStore) {
        if (actionStore.isAppRoute) {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used ${apiName} inside a Route Handler. Support for this API in Route Handlers is planned for a future version of Next.js.`), "__NEXT_ERROR_CODE", {
            value: "E765",
            enumerable: false,
            configurable: true
          });
        }
        if (actionStore.isAction && workUnitStore.phase === "action") {
          throw Object.defineProperty(new Error(`${apiName} was used inside a Server Action. This is not supported. Functions from 'next/root-params' can only be called in the context of a route.`), "__NEXT_ERROR_CODE", {
            value: "E766",
            enumerable: false,
            configurable: true
          });
        }
      }
      switch (workUnitStore.type) {
        case "unstable-cache":
        case "cache": {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used ${apiName} inside \`"use cache"\` or \`unstable_cache\`. Support for this API inside cache scopes is planned for a future version of Next.js.`), "__NEXT_ERROR_CODE", {
            value: "E760",
            enumerable: false,
            configurable: true
          });
        }
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy": {
          return createPrerenderRootParamPromise(paramName, workStore, workUnitStore, apiName);
        }
        case "private-cache":
        case "prerender-runtime":
        case "request": {
          break;
        }
        default: {
          workUnitStore;
        }
      }
      return Promise.resolve(workUnitStore.rootParams[paramName]);
    }
    __name(getRootParam, "getRootParam");
    function createPrerenderRootParamPromise(paramName, workStore, prerenderStore, apiName) {
      switch (prerenderStore.type) {
        case "prerender-client": {
          throw Object.defineProperty(new _invarianterror.InvariantError(`${apiName} must not be used within a client component. Next.js should be preventing ${apiName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
            value: "E693",
            enumerable: false,
            configurable: true
          });
        }
        case "prerender":
        case "prerender-legacy":
        case "prerender-ppr":
        default:
      }
      const underlyingParams = prerenderStore.rootParams;
      switch (prerenderStore.type) {
        case "prerender": {
          if (prerenderStore.fallbackRouteParams && prerenderStore.fallbackRouteParams.has(paramName)) {
            return (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, apiName);
          }
          break;
        }
        case "prerender-ppr": {
          if (prerenderStore.fallbackRouteParams && prerenderStore.fallbackRouteParams.has(paramName)) {
            return makeErroringRootParamPromise(paramName, workStore, prerenderStore, apiName);
          }
          break;
        }
        case "prerender-legacy": {
          break;
        }
        default: {
          prerenderStore;
        }
      }
      return Promise.resolve(underlyingParams[paramName]);
    }
    __name(createPrerenderRootParamPromise, "createPrerenderRootParamPromise");
    async function makeErroringRootParamPromise(paramName, workStore, prerenderStore, apiName) {
      const expression = (0, _reflectutils.describeStringPropertyAccess)(apiName, paramName);
      switch (prerenderStore.type) {
        case "prerender-ppr": {
          return (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
        }
        case "prerender-legacy": {
          return (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
        }
        default: {
          prerenderStore;
        }
      }
    }
    __name(makeErroringRootParamPromise, "makeErroringRootParamPromise");
  }
});

// node_modules/next/server.js
var require_server = __commonJS({
  "node_modules/next/server.js"(exports, module) {
    init_esm();
    var serverExports = {
      NextRequest: require_request().NextRequest,
      NextResponse: require_response().NextResponse,
      ImageResponse: require_image_response().ImageResponse,
      userAgentFromString: require_user_agent().userAgentFromString,
      userAgent: require_user_agent().userAgent,
      URLPattern: require_url_pattern().URLPattern,
      after: require_after2().after,
      connection: require_connection().connection,
      unstable_rootParams: require_root_params().unstable_rootParams
    };
    module.exports = serverExports;
    exports.NextRequest = serverExports.NextRequest;
    exports.NextResponse = serverExports.NextResponse;
    exports.ImageResponse = serverExports.ImageResponse;
    exports.userAgentFromString = serverExports.userAgentFromString;
    exports.userAgent = serverExports.userAgent;
    exports.URLPattern = serverExports.URLPattern;
    exports.after = serverExports.after;
    exports.connection = serverExports.connection;
    exports.unstable_rootParams = serverExports.unstable_rootParams;
  }
});

// node_modules/retry/lib/retry_operation.js
var require_retry_operation = __commonJS({
  "node_modules/retry/lib/retry_operation.js"(exports, module) {
    init_esm();
    function RetryOperation(timeouts, options) {
      if (typeof options === "boolean") {
        options = { forever: options };
      }
      this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
      this._timeouts = timeouts;
      this._options = options || {};
      this._maxRetryTime = options && options.maxRetryTime || Infinity;
      this._fn = null;
      this._errors = [];
      this._attempts = 1;
      this._operationTimeout = null;
      this._operationTimeoutCb = null;
      this._timeout = null;
      this._operationStart = null;
      this._timer = null;
      if (this._options.forever) {
        this._cachedTimeouts = this._timeouts.slice(0);
      }
    }
    __name(RetryOperation, "RetryOperation");
    module.exports = RetryOperation;
    RetryOperation.prototype.reset = function() {
      this._attempts = 1;
      this._timeouts = this._originalTimeouts.slice(0);
    };
    RetryOperation.prototype.stop = function() {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      if (this._timer) {
        clearTimeout(this._timer);
      }
      this._timeouts = [];
      this._cachedTimeouts = null;
    };
    RetryOperation.prototype.retry = function(err) {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      if (!err) {
        return false;
      }
      var currentTime = (/* @__PURE__ */ new Date()).getTime();
      if (err && currentTime - this._operationStart >= this._maxRetryTime) {
        this._errors.push(err);
        this._errors.unshift(new Error("RetryOperation timeout occurred"));
        return false;
      }
      this._errors.push(err);
      var timeout = this._timeouts.shift();
      if (timeout === void 0) {
        if (this._cachedTimeouts) {
          this._errors.splice(0, this._errors.length - 1);
          timeout = this._cachedTimeouts.slice(-1);
        } else {
          return false;
        }
      }
      var self = this;
      this._timer = setTimeout(function() {
        self._attempts++;
        if (self._operationTimeoutCb) {
          self._timeout = setTimeout(function() {
            self._operationTimeoutCb(self._attempts);
          }, self._operationTimeout);
          if (self._options.unref) {
            self._timeout.unref();
          }
        }
        self._fn(self._attempts);
      }, timeout);
      if (this._options.unref) {
        this._timer.unref();
      }
      return true;
    };
    RetryOperation.prototype.attempt = function(fn, timeoutOps) {
      this._fn = fn;
      if (timeoutOps) {
        if (timeoutOps.timeout) {
          this._operationTimeout = timeoutOps.timeout;
        }
        if (timeoutOps.cb) {
          this._operationTimeoutCb = timeoutOps.cb;
        }
      }
      var self = this;
      if (this._operationTimeoutCb) {
        this._timeout = setTimeout(function() {
          self._operationTimeoutCb();
        }, self._operationTimeout);
      }
      this._operationStart = (/* @__PURE__ */ new Date()).getTime();
      this._fn(this._attempts);
    };
    RetryOperation.prototype.try = function(fn) {
      console.log("Using RetryOperation.try() is deprecated");
      this.attempt(fn);
    };
    RetryOperation.prototype.start = function(fn) {
      console.log("Using RetryOperation.start() is deprecated");
      this.attempt(fn);
    };
    RetryOperation.prototype.start = RetryOperation.prototype.try;
    RetryOperation.prototype.errors = function() {
      return this._errors;
    };
    RetryOperation.prototype.attempts = function() {
      return this._attempts;
    };
    RetryOperation.prototype.mainError = function() {
      if (this._errors.length === 0) {
        return null;
      }
      var counts = {};
      var mainError = null;
      var mainErrorCount = 0;
      for (var i = 0; i < this._errors.length; i++) {
        var error = this._errors[i];
        var message = error.message;
        var count = (counts[message] || 0) + 1;
        counts[message] = count;
        if (count >= mainErrorCount) {
          mainError = error;
          mainErrorCount = count;
        }
      }
      return mainError;
    };
  }
});

// node_modules/retry/lib/retry.js
var require_retry = __commonJS({
  "node_modules/retry/lib/retry.js"(exports) {
    init_esm();
    var RetryOperation = require_retry_operation();
    exports.operation = function(options) {
      var timeouts = exports.timeouts(options);
      return new RetryOperation(timeouts, {
        forever: options && (options.forever || options.retries === Infinity),
        unref: options && options.unref,
        maxRetryTime: options && options.maxRetryTime
      });
    };
    exports.timeouts = function(options) {
      if (options instanceof Array) {
        return [].concat(options);
      }
      var opts = {
        retries: 10,
        factor: 2,
        minTimeout: 1 * 1e3,
        maxTimeout: Infinity,
        randomize: false
      };
      for (var key in options) {
        opts[key] = options[key];
      }
      if (opts.minTimeout > opts.maxTimeout) {
        throw new Error("minTimeout is greater than maxTimeout");
      }
      var timeouts = [];
      for (var i = 0; i < opts.retries; i++) {
        timeouts.push(this.createTimeout(i, opts));
      }
      if (options && options.forever && !timeouts.length) {
        timeouts.push(this.createTimeout(i, opts));
      }
      timeouts.sort(function(a, b) {
        return a - b;
      });
      return timeouts;
    };
    exports.createTimeout = function(attempt, opts) {
      var random = opts.randomize ? Math.random() + 1 : 1;
      var timeout = Math.round(random * Math.max(opts.minTimeout, 1) * Math.pow(opts.factor, attempt));
      timeout = Math.min(timeout, opts.maxTimeout);
      return timeout;
    };
    exports.wrap = function(obj, options, methods) {
      if (options instanceof Array) {
        methods = options;
        options = null;
      }
      if (!methods) {
        methods = [];
        for (var key in obj) {
          if (typeof obj[key] === "function") {
            methods.push(key);
          }
        }
      }
      for (var i = 0; i < methods.length; i++) {
        var method = methods[i];
        var original = obj[method];
        obj[method] = (/* @__PURE__ */ __name(function retryWrapper(original2) {
          var op = exports.operation(options);
          var args = Array.prototype.slice.call(arguments, 1);
          var callback = args.pop();
          args.push(function(err) {
            if (op.retry(err)) {
              return;
            }
            if (err) {
              arguments[0] = op.mainError();
            }
            callback.apply(this, arguments);
          });
          op.attempt(function() {
            original2.apply(obj, args);
          });
        }, "retryWrapper")).bind(obj, original);
        obj[method].options = options;
      }
    };
  }
});

// node_modules/retry/index.js
var require_retry2 = __commonJS({
  "node_modules/retry/index.js"(exports, module) {
    init_esm();
    module.exports = require_retry();
  }
});

// node_modules/zod/index.js
init_esm();

// src/lib/prisma.ts
init_esm();
var import_client = __toESM(require_default2());
var globalForPrisma = globalThis;
function createPrismaClient() {
  const client = new import_client.PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"]
  });
  return client.$extends({
    query: {
      $allModels: {
        async $allOperations({ operation, model, args, query }) {
          const timeoutMs = 25e3;
          return Promise.race([
            query(args),
            new Promise(
              (_, reject) => setTimeout(
                () => reject(
                  new Error(
                    `[Prisma Timeout] Query ${model ? `${model}.` : ""}${operation} exceeded ${timeoutMs}ms limit`
                  )
                ),
                timeoutMs
              )
            )
          ]);
        }
      }
    }
  });
}
__name(createPrismaClient, "createPrismaClient");
var prisma = globalForPrisma.prisma || createPrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// src/lib/notify.ts
init_esm();

// src/lib/realtime/ably-transport.ts
init_esm();
var AblyNotificationTransport = class {
  constructor() {
    this.warnedMissingKey = false;
  }
  static {
    __name(this, "AblyNotificationTransport");
  }
  async publish(userId, event) {
    const apiKey = process.env.ABLY_API_KEY;
    if (!apiKey) {
      if (!this.warnedMissingKey && process.env.NODE_ENV !== "test") {
        this.warnedMissingKey = true;
        console.warn("[NotificationTransport] ABLY_API_KEY is not configured; skipping realtime push.");
      }
      return;
    }
    try {
      const channelName = `notifications:user:${userId}`;
      const url = `https://rest.ably.io/channels/${encodeURIComponent(channelName)}/messages`;
      const basicAuth = Buffer.from(apiKey).toString("base64");
      const serverClientId = "elev8-server";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "Content-Type": "application/json",
          "X-Ably-ClientId": Buffer.from(serverClientId).toString("base64")
        },
        body: JSON.stringify({
          name: event.type,
          data: event.data,
          clientId: serverClientId
        }),
        signal: AbortSignal.timeout(3e3)
      });
      if (!response.ok) {
        const errorText = await response.text().catch(() => "");
        console.error(
          `[NotificationTransport] Realtime push failed (HTTP ${response.status}): ${errorText.slice(0, 150)}`
        );
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown Ably publish error";
      console.error(`[NotificationTransport] Realtime push failed: ${errorMsg}`);
    }
  }
};
var notificationTransport = new AblyNotificationTransport();

// src/services/cache/index.ts
init_esm();

// src/services/cache/cache.service.ts
init_esm();

// src/lib/redis.ts
init_esm();

// node_modules/@upstash/redis/nodejs.mjs
init_esm();

// node_modules/@upstash/redis/chunk-CGMWROAN.mjs
init_esm();
var __defProp = Object.defineProperty;
var __export2 = /* @__PURE__ */ __name((target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
}, "__export");
var error_exports = {};
__export2(error_exports, {
  UpstashError: /* @__PURE__ */ __name(() => UpstashError, "UpstashError"),
  UpstashJSONParseError: /* @__PURE__ */ __name(() => UpstashJSONParseError, "UpstashJSONParseError"),
  UrlError: /* @__PURE__ */ __name(() => UrlError, "UrlError")
});
var UpstashError = class extends Error {
  static {
    __name(this, "UpstashError");
  }
  constructor(message, options) {
    super(message, options);
    this.name = "UpstashError";
  }
};
var UrlError = class extends Error {
  static {
    __name(this, "UrlError");
  }
  constructor(url) {
    super(
      `Upstash Redis client was passed an invalid URL. You should pass a URL starting with https. Received: "${url}". `
    );
    this.name = "UrlError";
  }
};
var UpstashJSONParseError = class extends UpstashError {
  static {
    __name(this, "UpstashJSONParseError");
  }
  constructor(body, options) {
    const truncatedBody = body.length > 200 ? body.slice(0, 200) + "..." : body;
    super(`Unable to parse response body: ${truncatedBody}`, options);
    this.name = "UpstashJSONParseError";
  }
};
function parseJSON(value) {
  return JSON.parse(stripBOM(value));
}
__name(parseJSON, "parseJSON");
function stripBOM(value) {
  return typeof value === "string" && value.startsWith("\uFEFF") ? value.slice(1) : value;
}
__name(stripBOM, "stripBOM");
function parseRecursive(obj) {
  const parsed = Array.isArray(obj) ? obj.map((o) => {
    try {
      return parseRecursive(o);
    } catch {
      return o;
    }
  }) : parseJSON(obj);
  if (typeof parsed === "number" && parsed.toString() !== stripBOM(obj)) {
    return obj;
  }
  return parsed;
}
__name(parseRecursive, "parseRecursive");
function parseResponse(result) {
  try {
    return parseRecursive(result);
  } catch {
    return result;
  }
}
__name(parseResponse, "parseResponse");
function deserializeScanResponse(result) {
  return [result[0], ...parseResponse(result.slice(1))];
}
__name(deserializeScanResponse, "deserializeScanResponse");
function deserializeScanWithTypesResponse(result) {
  const [cursor, keys] = result;
  const parsedKeys = [];
  for (let i = 0; i < keys.length; i += 2) {
    parsedKeys.push({ key: keys[i], type: keys[i + 1] });
  }
  return [cursor, parsedKeys];
}
__name(deserializeScanWithTypesResponse, "deserializeScanWithTypesResponse");
function mergeHeaders(...headers) {
  const merged = {};
  for (const header of headers) {
    if (!header) continue;
    for (const [key, value] of Object.entries(header)) {
      if (value !== void 0 && value !== null) {
        merged[key] = value;
      }
    }
  }
  return merged;
}
__name(mergeHeaders, "mergeHeaders");
function kvArrayToObject(v) {
  if (typeof v === "object" && v !== null && !Array.isArray(v)) return v;
  if (!Array.isArray(v)) return {};
  const obj = {};
  for (let i = 0; i < v.length; i += 2) {
    if (typeof v[i] === "string") obj[v[i]] = v[i + 1];
  }
  return obj;
}
__name(kvArrayToObject, "kvArrayToObject");
var MAX_BUFFER_SIZE = 1024 * 1024;
var HttpClient = class {
  static {
    __name(this, "HttpClient");
  }
  baseUrl;
  headers;
  options;
  readYourWrites;
  upstashSyncToken = "";
  hasCredentials;
  retry;
  constructor(config) {
    this.options = {
      backend: config.options?.backend,
      agent: config.agent,
      responseEncoding: config.responseEncoding ?? false,
      cache: config.cache,
      signal: config.signal,
      keepAlive: config.keepAlive ?? true
    };
    this.upstashSyncToken = "";
    this.readYourWrites = config.readYourWrites ?? true;
    this.baseUrl = (config.baseUrl || "").replace(/\/$/, "");
    const urlRegex = /^https?:\/\/[^\s#$./?].\S*$/;
    if (this.baseUrl && !urlRegex.test(this.baseUrl)) {
      throw new UrlError(this.baseUrl);
    }
    this.headers = {
      "Content-Type": "application/json",
      ...config.headers
    };
    this.hasCredentials = Boolean(this.baseUrl && this.headers.authorization.split(" ")[1]);
    if (this.options.responseEncoding === "base64") {
      this.headers["Upstash-Encoding"] = "base64";
    }
    this.retry = typeof config.retry === "boolean" && !config.retry ? {
      attempts: 1,
      backoff: /* @__PURE__ */ __name(() => 0, "backoff")
    } : {
      attempts: config.retry?.retries ?? 5,
      backoff: config.retry?.backoff ?? ((retryCount) => Math.exp(retryCount) * 50)
    };
  }
  mergeTelemetry(telemetry) {
    this.headers = merge(this.headers, "Upstash-Telemetry-Runtime", telemetry.runtime);
    this.headers = merge(this.headers, "Upstash-Telemetry-Platform", telemetry.platform);
    this.headers = merge(this.headers, "Upstash-Telemetry-Sdk", telemetry.sdk);
  }
  async request(req) {
    if (this.readYourWrites) {
      this.headers["upstash-sync-token"] = this.upstashSyncToken;
    }
    const requestHeaders = mergeHeaders(this.headers, req.headers ?? {});
    const requestUrl = [this.baseUrl, ...req.path ?? []].join("/");
    const isEventStream = requestHeaders.Accept === "text/event-stream";
    const signal = req.signal ?? this.options.signal;
    const isSignalFunction = typeof signal === "function";
    const requestOptions = {
      cache: this.options.cache,
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(req.body),
      keepalive: this.options.keepAlive,
      agent: this.options.agent,
      signal: isSignalFunction ? signal() : signal,
      /**
       * Fastly specific
       */
      backend: this.options.backend
    };
    if (!this.hasCredentials) {
      console.warn(
        "[Upstash Redis] Redis client was initialized without url or token. Failed to execute command."
      );
    }
    let res = null;
    let error = null;
    for (let i = 0; i <= this.retry.attempts; i++) {
      if (i > 0 && requestHeaders["Upstash-Telemetry-Sdk"]) {
        requestHeaders["Upstash-Telemetry-Retry"] = String(i);
      }
      try {
        res = await fetch(requestUrl, requestOptions);
        break;
      } catch (error_) {
        if (requestOptions.signal?.aborted && isSignalFunction) {
          throw error_;
        } else if (requestOptions.signal?.aborted) {
          const reason = requestOptions.signal.reason;
          const myBlob = new Blob([
            // Error reasons (e.g. the default DOMException) would serialize to an empty object
            JSON.stringify({ result: reason instanceof Error ? null : reason ?? null })
          ]);
          const myOptions = {
            status: 200,
            statusText: "Aborted"
          };
          res = new Response(myBlob, myOptions);
          break;
        }
        error = error_;
        if (i < this.retry.attempts) {
          await new Promise((r) => setTimeout(r, this.retry.backoff(i)));
        }
      }
    }
    if (!res) {
      throw error ?? new Error("Exhausted all retries");
    }
    if (!res.ok) {
      let body2;
      const rawBody2 = await res.text();
      try {
        body2 = JSON.parse(rawBody2);
      } catch (error2) {
        throw new UpstashJSONParseError(rawBody2, { cause: error2 });
      }
      throw new UpstashError(`${body2.error}, command was: ${JSON.stringify(req.body)}`);
    }
    if (this.readYourWrites) {
      const headers = res.headers;
      this.upstashSyncToken = headers.get("upstash-sync-token") ?? "";
    }
    if (isEventStream && req && req.onMessage && res.body) {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      (async () => {
        try {
          let buffer = "";
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";
            if (buffer.length > MAX_BUFFER_SIZE) {
              throw new Error("Buffer size exceeded (1MB)");
            }
            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6);
                req.onMessage?.(data);
              }
            }
          }
        } catch (error2) {
          if (error2 instanceof Error && error2.name === "AbortError") {
          } else {
            console.error("Stream reading error:", error2);
          }
        } finally {
          try {
            await reader.cancel();
          } catch {
          }
        }
      })();
      return { result: 1 };
    }
    let body;
    const rawBody = await res.text();
    try {
      body = JSON.parse(rawBody);
    } catch (error2) {
      throw new UpstashJSONParseError(rawBody, { cause: error2 });
    }
    if (this.readYourWrites) {
      const headers = res.headers;
      this.upstashSyncToken = headers.get("upstash-sync-token") ?? "";
    }
    if (this.options.responseEncoding === "base64") {
      if (Array.isArray(body)) {
        return body.map(({ result: result2, error: error2 }) => ({
          result: decode(result2),
          error: error2
        }));
      }
      const result = decode(body.result);
      return { result, error: body.error };
    }
    return body;
  }
};
function base64decode(b64) {
  let dec = "";
  try {
    const binString = atob(b64);
    const size = binString.length;
    const bytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
      bytes[i] = binString.charCodeAt(i);
    }
    dec = new TextDecoder().decode(bytes);
  } catch {
    dec = b64;
  }
  return dec;
}
__name(base64decode, "base64decode");
function decode(raw2) {
  let result = void 0;
  switch (typeof raw2) {
    case "undefined": {
      return raw2;
    }
    case "number": {
      result = raw2;
      break;
    }
    case "object": {
      if (Array.isArray(raw2)) {
        result = raw2.map(
          (v) => typeof v === "string" ? base64decode(v) : Array.isArray(v) ? v.map((element) => decode(element)) : v
        );
      } else {
        result = null;
      }
      break;
    }
    case "string": {
      result = raw2 === "OK" ? "OK" : base64decode(raw2);
      break;
    }
    default: {
      break;
    }
  }
  return result;
}
__name(decode, "decode");
function merge(obj, key, value) {
  if (!value) {
    return obj;
  }
  if (!obj[key]) {
    obj[key] = value;
    return obj;
  }
  const values = obj[key].split(",").map((v) => v.trim());
  if (!values.includes(value.trim())) {
    obj[key] = [obj[key], value].join(",");
  }
  return obj;
}
__name(merge, "merge");
var defaultSerializer = /* @__PURE__ */ __name((c) => {
  switch (typeof c) {
    case "string":
    case "number":
    case "boolean": {
      return c;
    }
    default: {
      return JSON.stringify(c);
    }
  }
}, "defaultSerializer");
var Command = class {
  static {
    __name(this, "Command");
  }
  command;
  serialize;
  deserialize;
  headers;
  path;
  onMessage;
  isStreaming;
  signal;
  /**
   * Create a new command instance.
   *
   * You can define a custom `deserialize` function. By default we try to deserialize as json.
   */
  constructor(command, opts) {
    this.serialize = defaultSerializer;
    this.deserialize = opts?.automaticDeserialization === void 0 || opts.automaticDeserialization ? opts?.deserialize ?? parseResponse : (x) => x;
    this.command = command.map((c) => this.serialize(c));
    this.headers = opts?.headers;
    this.path = opts?.path;
    this.onMessage = opts?.streamOptions?.onMessage;
    this.isStreaming = opts?.streamOptions?.isStreaming ?? false;
    this.signal = opts?.streamOptions?.signal;
    if (opts?.latencyLogging) {
      const originalExec = this.exec.bind(this);
      this.exec = async (client) => {
        const start = performance.now();
        const result = await originalExec(client);
        const end = performance.now();
        const loggerResult = (end - start).toFixed(2);
        console.log(
          `Latency for \x1B[38;2;19;185;39m${this.command[0].toString().toUpperCase()}\x1B[0m: \x1B[38;2;0;255;255m${loggerResult} ms\x1B[0m`
        );
        return result;
      };
    }
  }
  /**
   * Execute the command using a client.
   */
  async exec(client) {
    const { result, error } = await client.request({
      body: this.command,
      path: this.path,
      upstashSyncToken: client.upstashSyncToken,
      headers: this.headers,
      onMessage: this.onMessage,
      isStreaming: this.isStreaming,
      signal: this.signal
    });
    if (error) {
      throw new UpstashError(error);
    }
    if (result === void 0) {
      throw new TypeError("Request did not return a result");
    }
    return this.deserialize(result);
  }
};
var ExecCommand = class extends Command {
  static {
    __name(this, "ExecCommand");
  }
  constructor(cmd, opts) {
    const normalizedCmd = cmd.map((arg) => typeof arg === "string" ? arg : String(arg));
    super(normalizedCmd, opts);
  }
};
var FIELD_TYPES = [
  "TEXT",
  "U64",
  "I64",
  "F64",
  "BOOL",
  "DATE",
  "KEYWORD",
  "FACET",
  "HYBRID"
];
function isFieldType(value) {
  return typeof value === "string" && FIELD_TYPES.includes(value);
}
__name(isFieldType, "isFieldType");
function isDetailedField(value) {
  return typeof value === "object" && value !== null && "type" in value && isFieldType(value.type);
}
__name(isDetailedField, "isDetailedField");
function isNestedSchema(value) {
  return typeof value === "object" && value !== null && !isDetailedField(value);
}
__name(isNestedSchema, "isNestedSchema");
function flattenSchema(schema, pathPrefix = []) {
  const fields = [];
  for (const [key, value] of Object.entries(schema)) {
    const currentPath = [...pathPrefix, key];
    const pathString = currentPath.join(".");
    if (isFieldType(value)) {
      fields.push({
        path: pathString,
        type: value
      });
    } else if (isDetailedField(value)) {
      fields.push({
        path: pathString,
        type: value.type,
        fast: "fast" in value ? value.fast : void 0,
        noTokenize: "noTokenize" in value ? value.noTokenize : void 0,
        noStem: "noStem" in value ? value.noStem : void 0,
        from: "from" in value ? value.from : void 0
      });
    } else if (isNestedSchema(value)) {
      const nestedFields = flattenSchema(value, currentPath);
      fields.push(...nestedFields);
    }
  }
  return fields;
}
__name(flattenSchema, "flattenSchema");
function deserializeQueryResponse(rawResponse) {
  return rawResponse.map((itemRaw) => {
    const raw2 = itemRaw;
    const key = raw2[0];
    const score = Number(raw2[1]);
    const rawFields = raw2[2];
    if (rawFields === void 0) {
      return { key, score };
    }
    if (!Array.isArray(rawFields) || rawFields.length === 0) {
      return { key, score, data: {} };
    }
    let data = {};
    for (const fieldRaw of rawFields) {
      const key2 = fieldRaw[0];
      const value = fieldRaw[1];
      const pathParts = key2.split(".");
      if (pathParts.length === 1) {
        data[key2] = value;
      } else {
        let currentObj = data;
        for (let i = 0; i < pathParts.length - 1; i++) {
          const pathPart = pathParts[i];
          if (!(pathPart in currentObj)) {
            currentObj[pathPart] = {};
          }
          currentObj = currentObj[pathPart];
        }
        currentObj[pathParts.at(-1)] = value;
      }
    }
    if ("$" in data) {
      data = data["$"];
    }
    return { key, score, data };
  });
}
__name(deserializeQueryResponse, "deserializeQueryResponse");
function deserializeDescribeResponse(rawResponse) {
  const description = {};
  for (let i = 0; i < rawResponse.length; i += 2) {
    const descriptor = rawResponse[i];
    switch (descriptor) {
      case "name": {
        description["name"] = rawResponse[i + 1];
        break;
      }
      case "type": {
        description["dataType"] = rawResponse[i + 1].toLowerCase();
        break;
      }
      case "prefixes": {
        description["prefixes"] = rawResponse[i + 1];
        break;
      }
      case "language": {
        description["language"] = rawResponse[i + 1];
        break;
      }
      case "schema": {
        const schema = {};
        for (const fieldDescription of rawResponse[i + 1]) {
          const fieldName = fieldDescription[0];
          const fieldInfo = { type: fieldDescription[1] };
          if (fieldDescription.length > 2) {
            for (let j = 2; j < fieldDescription.length; j++) {
              const fieldOption = fieldDescription[j];
              switch (fieldOption) {
                case "NOSTEM": {
                  fieldInfo.noStem = true;
                  break;
                }
                case "NOTOKENIZE": {
                  fieldInfo.noTokenize = true;
                  break;
                }
                case "FAST": {
                  fieldInfo.fast = true;
                  break;
                }
                case "FROM": {
                  fieldInfo.from = fieldDescription[++j];
                  break;
                }
              }
            }
          }
          schema[fieldName] = fieldInfo;
        }
        description["schema"] = schema;
        break;
      }
    }
  }
  return description;
}
__name(deserializeDescribeResponse, "deserializeDescribeResponse");
function parseCountResponse(rawResponse) {
  return typeof rawResponse === "number" ? rawResponse : Number.parseInt(rawResponse, 10);
}
__name(parseCountResponse, "parseCountResponse");
function deserializeAggregateResponse(rawResponse) {
  return parseAggregationArray(rawResponse);
}
__name(deserializeAggregateResponse, "deserializeAggregateResponse");
function parseAggregationArray(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i];
    const value = arr[i + 1];
    if (Array.isArray(value)) {
      if (value.length > 0 && typeof value[0] === "string") {
        result[key] = value[0] === "buckets" ? parseBucketsValue(value) : parseStatsValue(value);
      } else {
        result[key] = parseAggregationArray(value);
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}
__name(parseAggregationArray, "parseAggregationArray");
function coerceNumericString(value) {
  if (typeof value === "string" && value !== "" && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return value;
}
__name(coerceNumericString, "coerceNumericString");
function parseStatsValue(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i];
    const value = arr[i + 1];
    if (Array.isArray(value) && value.length > 0) {
      if (typeof value[0] === "string") {
        result[key] = parseStatsValue(value);
      } else if (Array.isArray(value[0]) && typeof value[0][0] === "string") {
        result[key] = value.map((item) => parseStatsValue(item));
      } else {
        result[key] = value;
      }
    } else {
      result[key] = coerceNumericString(value);
    }
  }
  return result;
}
__name(parseStatsValue, "parseStatsValue");
function parseBucketsValue(arr) {
  if (arr[0] === "buckets" && Array.isArray(arr[1])) {
    const result = {
      buckets: arr[1].map((bucket) => {
        const bucketObj = {};
        for (let i = 0; i < bucket.length; i += 2) {
          const key = bucket[i];
          const value = bucket[i + 1];
          bucketObj[key] = Array.isArray(value) && value.length > 0 && typeof value[0] === "string" ? parseStatsValue(value) : value;
        }
        return bucketObj;
      })
    };
    for (let i = 2; i < arr.length; i += 2) {
      result[arr[i]] = arr[i + 1];
    }
    return result;
  }
  return arr;
}
__name(parseBucketsValue, "parseBucketsValue");
function buildQueryCommand(redisCommand, name, options) {
  const query = JSON.stringify(options?.filter ?? {});
  const command = [redisCommand, name, query];
  if (options?.limit !== void 0) {
    command.push("LIMIT", options.limit.toString());
  }
  if (options?.offset !== void 0) {
    command.push("OFFSET", options.offset.toString());
  }
  if (options?.select && Object.keys(options.select).length === 0) {
    command.push("NOCONTENT");
  }
  if (options) {
    if ("orderBy" in options && options.orderBy) {
      command.push("ORDERBY");
      for (const [field, direction] of Object.entries(options.orderBy)) {
        command.push(field, direction);
      }
    } else if ("scoreFunc" in options && options.scoreFunc) {
      command.push("SCOREFUNC", ...buildScoreFunc(options.scoreFunc));
    }
  }
  if (options?.highlight) {
    command.push(
      "HIGHLIGHT",
      "FIELDS",
      options.highlight.fields.length.toString(),
      ...options.highlight.fields
    );
    if (options.highlight.preTag && options.highlight.postTag) {
      command.push("TAGS", options.highlight.preTag, options.highlight.postTag);
    }
  }
  if (options?.select && Object.keys(options.select).length > 0) {
    command.push(
      "SELECT",
      Object.keys(options.select).length.toString(),
      ...Object.keys(options.select)
    );
  }
  return command;
}
__name(buildQueryCommand, "buildQueryCommand");
function buildScoreFunc(scoreBy) {
  const result = [];
  if (typeof scoreBy === "string") {
    result.push("FIELDVALUE", scoreBy);
  } else if ("fields" in scoreBy) {
    if (scoreBy.combineMode) {
      result.push("COMBINEMODE", scoreBy.combineMode.toUpperCase());
    }
    if (scoreBy.scoreMode) {
      result.push("SCOREMODE", scoreBy.scoreMode.toUpperCase());
    }
    for (const field of scoreBy.fields) {
      result.push(...buildScoreFuncField(field));
    }
  } else {
    result.push(...buildScoreFuncField(scoreBy));
  }
  return result;
}
__name(buildScoreFunc, "buildScoreFunc");
function buildScoreFuncField(field) {
  const result = [];
  if (typeof field === "string") {
    result.push("FIELDVALUE", field);
  } else {
    if (field.scoreMode) {
      result.push("SCOREMODE", field.scoreMode.toUpperCase());
    }
    result.push("FIELDVALUE", field.field);
    if (field.modifier) {
      result.push("MODIFIER", field.modifier.toUpperCase());
    }
    if (field.factor !== void 0) {
      result.push("FACTOR", field.factor.toString());
    }
    if (field.missing !== void 0) {
      result.push("MISSING", field.missing.toString());
    }
  }
  return result;
}
__name(buildScoreFuncField, "buildScoreFuncField");
function buildCreateIndexCommand(params) {
  const { name, schema, dataType, language, skipInitialScan, existsOk } = params;
  let source;
  if (params.dataType === "stream") {
    source = ["ON", "STREAM", params.stream];
  } else {
    const prefixArray = Array.isArray(params.prefix) ? params.prefix : [params.prefix];
    source = [
      "ON",
      dataType.toUpperCase(),
      "PREFIX",
      prefixArray.length.toString(),
      ...prefixArray
    ];
  }
  const payload = [
    name,
    ...skipInitialScan ? ["SKIPINITIALSCAN"] : [],
    ...existsOk ? ["EXISTSOK"] : [],
    ...source,
    ...language ? ["LANGUAGE", language] : [],
    "SCHEMA"
  ];
  const fields = flattenSchema(schema);
  for (const field of fields) {
    payload.push(field.path, field.type);
    if (field.fast) {
      payload.push("FAST");
    }
    if (field.noTokenize) {
      payload.push("NOTOKENIZE");
    }
    if (field.noStem) {
      payload.push("NOSTEM");
    }
    if (field.from) {
      payload.push("FROM", field.from);
    }
  }
  return ["SEARCH.CREATE", ...payload];
}
__name(buildCreateIndexCommand, "buildCreateIndexCommand");
function buildAggregateCommand(name, options) {
  const query = JSON.stringify(options?.filter ?? {});
  const aggregations = JSON.stringify(options.aggregations);
  return ["SEARCH.AGGREGATE", name, query, aggregations];
}
__name(buildAggregateCommand, "buildAggregateCommand");
var SearchIndex = class {
  static {
    __name(this, "SearchIndex");
  }
  name;
  schema;
  client;
  constructor({ name, schema, client }) {
    this.name = name;
    this.schema = schema;
    this.client = client;
  }
  async waitIndexing() {
    const command = ["SEARCH.WAITINDEXING", this.name];
    return await new ExecCommand(command).exec(this.client);
  }
  async describe() {
    const command = ["SEARCH.DESCRIBE", this.name];
    const rawResult = await new ExecCommand(command).exec(
      this.client
    );
    if (!rawResult) return null;
    return deserializeDescribeResponse(rawResult);
  }
  async query(options) {
    const command = buildQueryCommand("SEARCH.QUERY", this.name, options);
    const rawResult = await new ExecCommand(command).exec(
      this.client
    );
    if (!rawResult) return rawResult;
    return deserializeQueryResponse(rawResult);
  }
  async aggregate(options) {
    const command = buildAggregateCommand(this.name, options);
    const rawResult = await new ExecCommand(
      command
    ).exec(this.client);
    return deserializeAggregateResponse(rawResult);
  }
  async count({
    filter
  }) {
    const command = buildQueryCommand("SEARCH.COUNT", this.name, {
      filter
    });
    const rawResult = await new ExecCommand(command).exec(
      this.client
    );
    return { count: parseCountResponse(rawResult) };
  }
  async drop() {
    const command = ["SEARCH.DROP", this.name];
    const result = await new ExecCommand(command).exec(this.client);
    return result;
  }
  async addAlias({ alias }) {
    const command = ["SEARCH.ALIASADD", alias, this.name];
    const result = await new ExecCommand(command).exec(this.client);
    return result;
  }
};
async function createIndex(client, params) {
  const { name, schema } = params;
  const createIndexCommand = buildCreateIndexCommand(params);
  await new ExecCommand(createIndexCommand).exec(client);
  return initIndex(client, { name, schema });
}
__name(createIndex, "createIndex");
function initIndex(client, params) {
  const { name, schema } = params;
  return new SearchIndex({ name, schema, client });
}
__name(initIndex, "initIndex");
async function listAliases(client) {
  const command = ["SEARCH.LISTALIASES"];
  const rawResult = await new ExecCommand(command).exec(client);
  if (rawResult === 0 || Array.isArray(rawResult) && rawResult.length === 0) {
    return {};
  }
  if (!Array.isArray(rawResult)) {
    return {};
  }
  const aliases = {};
  for (const pair of rawResult) {
    if (Array.isArray(pair) && pair.length === 2) {
      const [alias, index] = pair;
      aliases[alias] = index;
    }
  }
  return aliases;
}
__name(listAliases, "listAliases");
async function addAlias(client, { indexName, alias }) {
  const command = ["SEARCH.ALIASADD", alias, indexName];
  const result = await new ExecCommand(command).exec(client);
  return result;
}
__name(addAlias, "addAlias");
async function delAlias(client, { alias }) {
  const command = ["SEARCH.ALIASDEL", alias];
  const result = await new ExecCommand(command).exec(client);
  return result;
}
__name(delAlias, "delAlias");
function float32ToBase64(vector) {
  const bytes = new Uint8Array(vector.length * 4);
  const view = new DataView(bytes.buffer);
  for (const [i, value] of vector.entries()) {
    view.setFloat32(i * 4, value, true);
  }
  let binary = "";
  const chunkSize = 32768;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCodePoint(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}
__name(float32ToBase64, "float32ToBase64");
function serializeVector(vector) {
  if (Array.isArray(vector)) {
    return ["VALUES", vector.length, ...vector];
  }
  if (vector instanceof Float32Array) {
    return ["BASE64-FP32", float32ToBase64(vector)];
  }
  return ["BASE64-FP32", vector.base64];
}
__name(serializeVector, "serializeVector");
function deserializeVectorValues(result) {
  if (result === null) {
    return null;
  }
  return result.map(Number);
}
__name(deserializeVectorValues, "deserializeVectorValues");
function deserializeVectorQueryResponse(result) {
  return result.map(([id, score]) => ({ id: String(id), score: Number(score) }));
}
__name(deserializeVectorQueryResponse, "deserializeVectorQueryResponse");
function deserializeVectorInfoResponse(result) {
  if (result === null) {
    return null;
  }
  const fields = Array.isArray(result) ? Object.fromEntries(
    Array.from({ length: Math.floor(result.length / 2) }, (_, i) => [
      String(result[i * 2]),
      result[i * 2 + 1]
    ])
  ) : result;
  return {
    dimension: Number(fields.dimension),
    metric: String(fields.metric).toUpperCase()
  };
}
__name(deserializeVectorInfoResponse, "deserializeVectorInfoResponse");
var VectorAddCommand = class extends Command {
  static {
    __name(this, "VectorAddCommand");
  }
  constructor([index, id, vector], cmdOpts) {
    super(["VECTOR.ADD", index, id, ...serializeVector(vector)], cmdOpts);
  }
};
var VectorCountCommand = class extends Command {
  static {
    __name(this, "VectorCountCommand");
  }
  constructor([index], cmdOpts) {
    super(["VECTOR.COUNT", index], cmdOpts);
  }
};
var VectorCreateCommand = class extends Command {
  static {
    __name(this, "VectorCreateCommand");
  }
  constructor([index, opts], cmdOpts) {
    const command = [
      "VECTOR.CREATE",
      index,
      "DIM",
      opts.dimension,
      "METRIC",
      opts.metric
    ];
    if (opts.existsOk) {
      command.push("EXISTSOK");
    }
    super(command, cmdOpts);
  }
};
var VectorDelCommand = class extends Command {
  static {
    __name(this, "VectorDelCommand");
  }
  constructor([index, id], cmdOpts) {
    super(["VECTOR.DEL", index, id], cmdOpts);
  }
};
var VectorDropCommand = class extends Command {
  static {
    __name(this, "VectorDropCommand");
  }
  constructor([index], cmdOpts) {
    super(["VECTOR.DROP", index], cmdOpts);
  }
};
var VectorGetCommand = class extends Command {
  static {
    __name(this, "VectorGetCommand");
  }
  constructor([index, id], cmdOpts) {
    super(["VECTOR.GET", index, id], {
      deserialize: deserializeVectorValues,
      ...cmdOpts
    });
  }
};
var VectorInfoCommand = class extends Command {
  static {
    __name(this, "VectorInfoCommand");
  }
  constructor([index], cmdOpts) {
    super(["VECTOR.INFO", index], {
      deserialize: deserializeVectorInfoResponse,
      ...cmdOpts
    });
  }
};
var VectorQueryCommand = class extends Command {
  static {
    __name(this, "VectorQueryCommand");
  }
  constructor([index, opts], cmdOpts) {
    const command = ["VECTOR.QUERY", index, "TOPK", opts.topK];
    if (opts.profile) {
      command.push("PROFILE", opts.profile);
    }
    command.push(...serializeVector(opts.vector));
    super(command, {
      deserialize: deserializeVectorQueryResponse,
      ...cmdOpts
    });
  }
};
var VectorIndex = class {
  static {
    __name(this, "VectorIndex");
  }
  name;
  client;
  commandOptions;
  constructor({ name, client, commandOptions }) {
    this.name = name;
    this.client = client;
    this.commandOptions = commandOptions;
  }
  /**
   * Adds a vector to the index, or overwrites the vector stored under `id`.
   *
   * @returns `1` if a new vector was inserted, `0` if an existing one was overwritten.
   */
  add(id, vector) {
    return new VectorAddCommand([this.name, id, vector], this.commandOptions).exec(this.client);
  }
  /**
   * Returns the vector stored under `id`, or `null` if it does not exist.
   */
  get(id) {
    return new VectorGetCommand([this.name, id], this.commandOptions).exec(this.client);
  }
  /**
   * Returns the `topK` nearest neighbours of the query vector.
   */
  query(options) {
    return new VectorQueryCommand([this.name, options], this.commandOptions).exec(this.client);
  }
  /**
   * Deletes the vector stored under `id`.
   *
   * @returns `1` if the vector existed and was removed, `0` otherwise.
   */
  delete(id) {
    return new VectorDelCommand([this.name, id], this.commandOptions).exec(this.client);
  }
  /**
   * Returns the number of vectors in the index.
   */
  count() {
    return new VectorCountCommand([this.name], this.commandOptions).exec(this.client);
  }
  /**
   * Returns the dimension and metric of the index, or `null` if it does not exist.
   */
  info() {
    return new VectorInfoCommand([this.name], this.commandOptions).exec(this.client);
  }
  /**
   * Drops the index and all vectors in it.
   *
   * @returns `1` if the index existed and was dropped, `0` otherwise.
   */
  drop() {
    return new VectorDropCommand([this.name], this.commandOptions).exec(this.client);
  }
};
async function createVectorIndex(client, { name, ...opts }, commandOptions) {
  await new VectorCreateCommand([name, opts], commandOptions).exec(client);
  return new VectorIndex({ name, client, commandOptions });
}
__name(createVectorIndex, "createVectorIndex");
function initVectorIndex(client, name, commandOptions) {
  return new VectorIndex({ name, client, commandOptions });
}
__name(initVectorIndex, "initVectorIndex");
function deserialize(result) {
  if (result.length === 0) {
    return null;
  }
  const obj = {};
  for (let i = 0; i < result.length; i += 2) {
    const key = result[i];
    const value = result[i + 1];
    try {
      obj[key] = parseJSON(value);
    } catch {
      obj[key] = value;
    }
  }
  return obj;
}
__name(deserialize, "deserialize");
var HRandFieldCommand = class extends Command {
  static {
    __name(this, "HRandFieldCommand");
  }
  constructor(cmd, opts) {
    const command = ["hrandfield", cmd[0]];
    if (typeof cmd[1] === "number") {
      command.push(cmd[1]);
    }
    if (cmd[2]) {
      command.push("WITHVALUES");
    }
    super(command, {
      // @ts-expect-error to silence compiler
      deserialize: cmd[2] ? (result) => deserialize(result) : opts?.deserialize,
      ...opts
    });
  }
};
var AppendCommand = class extends Command {
  static {
    __name(this, "AppendCommand");
  }
  constructor(cmd, opts) {
    super(["append", ...cmd], opts);
  }
};
var ArCountCommand = class extends Command {
  static {
    __name(this, "ArCountCommand");
  }
  constructor(cmd, opts) {
    super(["ARCOUNT", ...cmd], opts);
  }
};
var ArDelCommand = class extends Command {
  static {
    __name(this, "ArDelCommand");
  }
  constructor(cmd, opts) {
    super(["ARDEL", ...cmd], opts);
  }
};
var ArDelRangeCommand = class extends Command {
  static {
    __name(this, "ArDelRangeCommand");
  }
  constructor([key, ...ranges], opts) {
    super(["ARDELRANGE", key, ...ranges.flat()], opts);
  }
};
var ArGetCommand = class extends Command {
  static {
    __name(this, "ArGetCommand");
  }
  constructor(cmd, opts) {
    super(["ARGET", ...cmd], opts);
  }
};
var ArGetRangeCommand = class extends Command {
  static {
    __name(this, "ArGetRangeCommand");
  }
  constructor(cmd, opts) {
    super(["ARGETRANGE", ...cmd], opts);
  }
};
var ArGrepCommand = class extends Command {
  static {
    __name(this, "ArGrepCommand");
  }
  constructor([key, start, end, opts], cmdOpts) {
    const command = ["ARGREP", key, start, end];
    for (const predicate of opts.predicates) {
      if ("exact" in predicate) {
        command.push("EXACT", predicate.exact);
      } else if ("match" in predicate) {
        command.push("MATCH", predicate.match);
      } else if ("glob" in predicate) {
        command.push("GLOB", predicate.glob);
      } else {
        command.push("RE", predicate.re);
      }
    }
    if (opts.combine) {
      command.push(opts.combine.toUpperCase());
    }
    if (opts.noCase) {
      command.push("NOCASE");
    }
    if (opts.withValues) {
      command.push("WITHVALUES");
    }
    if (opts.limit !== void 0) {
      command.push("LIMIT", opts.limit);
    }
    super(command, {
      deserialize: /* @__PURE__ */ __name((result) => parseResponse(result).map(
        (item) => Array.isArray(item) ? [String(item[0]), item[1]] : String(item)
      ), "deserialize"),
      ...cmdOpts
    });
  }
};
function toCamelCase(field) {
  return field.replaceAll(/-([a-z])/g, (_, char) => char.toUpperCase());
}
__name(toCamelCase, "toCamelCase");
function deserializeArInfoResponse(result) {
  const entries = Array.isArray(result) ? Array.from({ length: Math.floor(result.length / 2) }, (_, i) => [
    result[i * 2],
    result[i * 2 + 1]
  ]) : Object.entries(result);
  const indexFields = /* @__PURE__ */ new Set(["len", "nextInsertIndex"]);
  const info = {};
  for (const [field, value] of entries) {
    const name = toCamelCase(String(field));
    if (indexFields.has(name)) {
      info[name] = String(value);
      continue;
    }
    const numeric = typeof value === "number" ? value : Number(value);
    info[name] = Number.isNaN(numeric) ? value : numeric;
  }
  return info;
}
__name(deserializeArInfoResponse, "deserializeArInfoResponse");
var ArInfoCommand = class extends Command {
  static {
    __name(this, "ArInfoCommand");
  }
  constructor([key, opts], cmdOpts) {
    const command = ["ARINFO", key];
    if (opts?.full) {
      command.push("FULL");
    }
    super(command, {
      deserialize: deserializeArInfoResponse,
      ...cmdOpts
    });
  }
};
var ArInsertCommand = class extends Command {
  static {
    __name(this, "ArInsertCommand");
  }
  constructor(cmd, opts) {
    super(["ARINSERT", ...cmd], {
      deserialize: String,
      ...opts
    });
  }
};
var ArLastItemsCommand = class extends Command {
  static {
    __name(this, "ArLastItemsCommand");
  }
  constructor([key, count, opts], cmdOpts) {
    const command = ["ARLASTITEMS", key, count];
    if (opts?.rev) {
      command.push("REV");
    }
    super(command, cmdOpts);
  }
};
var ArLenCommand = class extends Command {
  static {
    __name(this, "ArLenCommand");
  }
  constructor(cmd, opts) {
    super(["ARLEN", ...cmd], {
      deserialize: String,
      ...opts
    });
  }
};
var ArMGetCommand = class extends Command {
  static {
    __name(this, "ArMGetCommand");
  }
  constructor(cmd, opts) {
    super(["ARMGET", ...cmd], opts);
  }
};
var ArMSetCommand = class extends Command {
  static {
    __name(this, "ArMSetCommand");
  }
  constructor([key, values], opts) {
    const pairs = Array.isArray(values) ? values : Object.entries(values);
    super(["ARMSET", key, ...pairs.flatMap(([index, value]) => [index, value])], opts);
  }
};
var ArNextCommand = class extends Command {
  static {
    __name(this, "ArNextCommand");
  }
  constructor(cmd, opts) {
    super(["ARNEXT", ...cmd], {
      deserialize: /* @__PURE__ */ __name((result) => result === null ? null : String(result), "deserialize"),
      ...opts
    });
  }
};
var ArOpCommand = class extends Command {
  static {
    __name(this, "ArOpCommand");
  }
  constructor([key, start, end, operation], opts) {
    const command = ["AROP", key, start, end];
    if (typeof operation === "string") {
      command.push(operation.toUpperCase());
    } else {
      command.push("MATCH", operation.match);
    }
    super(command, {
      deserialize: /* @__PURE__ */ __name((result) => result === null ? null : Number(result), "deserialize"),
      ...opts
    });
  }
};
var ArRingCommand = class extends Command {
  static {
    __name(this, "ArRingCommand");
  }
  constructor(cmd, opts) {
    super(["ARRING", ...cmd], {
      deserialize: String,
      ...opts
    });
  }
};
var ArScanCommand = class extends Command {
  static {
    __name(this, "ArScanCommand");
  }
  constructor([key, start, end, opts], cmdOpts) {
    const command = ["ARSCAN", key, start, end];
    if (opts?.limit !== void 0) {
      command.push("LIMIT", opts.limit);
    }
    super(command, {
      deserialize: /* @__PURE__ */ __name((result) => parseResponse(result).map(([index, value]) => [
        String(index),
        value
      ]), "deserialize"),
      ...cmdOpts
    });
  }
};
var ArSeekCommand = class extends Command {
  static {
    __name(this, "ArSeekCommand");
  }
  constructor(cmd, opts) {
    super(["ARSEEK", ...cmd], opts);
  }
};
var ArSetCommand = class extends Command {
  static {
    __name(this, "ArSetCommand");
  }
  constructor(cmd, opts) {
    super(["ARSET", ...cmd], opts);
  }
};
var BitCountCommand = class extends Command {
  static {
    __name(this, "BitCountCommand");
  }
  constructor([key, start, end], opts) {
    const command = ["bitcount", key];
    if (typeof start === "number") {
      command.push(start);
    }
    if (typeof end === "number") {
      command.push(end);
    }
    super(command, opts);
  }
};
var BitFieldCommand = class {
  static {
    __name(this, "BitFieldCommand");
  }
  constructor(args, client, opts, execOperation = (command) => command.exec(this.client)) {
    this.client = client;
    this.opts = opts;
    this.execOperation = execOperation;
    this.command = ["bitfield", ...args];
  }
  command;
  chain(...args) {
    this.command.push(...args);
    return this;
  }
  get(...args) {
    return this.chain("get", ...args);
  }
  set(...args) {
    return this.chain("set", ...args);
  }
  incrby(...args) {
    return this.chain("incrby", ...args);
  }
  overflow(overflow) {
    return this.chain("overflow", overflow);
  }
  exec() {
    const command = new Command(this.command, this.opts);
    return this.execOperation(command);
  }
};
var BitOpCommand = class extends Command {
  static {
    __name(this, "BitOpCommand");
  }
  constructor(cmd, opts) {
    super(["bitop", ...cmd], opts);
  }
};
var BitPosCommand = class extends Command {
  static {
    __name(this, "BitPosCommand");
  }
  constructor(cmd, opts) {
    super(["bitpos", ...cmd], opts);
  }
};
var ClientSetInfoCommand = class extends Command {
  static {
    __name(this, "ClientSetInfoCommand");
  }
  constructor([attribute, value], opts) {
    super(["CLIENT", "SETINFO", attribute.toUpperCase(), value], opts);
  }
};
var CopyCommand = class extends Command {
  static {
    __name(this, "CopyCommand");
  }
  constructor([key, destinationKey, opts], commandOptions) {
    super(["COPY", key, destinationKey, ...opts?.replace ? ["REPLACE"] : []], {
      ...commandOptions,
      deserialize(result) {
        if (result > 0) {
          return "COPIED";
        }
        return "NOT_COPIED";
      }
    });
  }
};
var DBSizeCommand = class extends Command {
  static {
    __name(this, "DBSizeCommand");
  }
  constructor(opts) {
    super(["dbsize"], opts);
  }
};
var DecrCommand = class extends Command {
  static {
    __name(this, "DecrCommand");
  }
  constructor(cmd, opts) {
    super(["decr", ...cmd], opts);
  }
};
var DecrByCommand = class extends Command {
  static {
    __name(this, "DecrByCommand");
  }
  constructor(cmd, opts) {
    super(["decrby", ...cmd], opts);
  }
};
var DelCommand = class extends Command {
  static {
    __name(this, "DelCommand");
  }
  constructor(cmd, opts) {
    super(["del", ...cmd], opts);
  }
};
var EchoCommand = class extends Command {
  static {
    __name(this, "EchoCommand");
  }
  constructor(cmd, opts) {
    super(["echo", ...cmd], opts);
  }
};
var EvalROCommand = class extends Command {
  static {
    __name(this, "EvalROCommand");
  }
  constructor([script, keys, args], opts) {
    super(["eval_ro", script, keys.length, ...keys, ...args ?? []], opts);
  }
};
var EvalCommand = class extends Command {
  static {
    __name(this, "EvalCommand");
  }
  constructor([script, keys, args], opts) {
    super(["eval", script, keys.length, ...keys, ...args ?? []], opts);
  }
};
var EvalshaROCommand = class extends Command {
  static {
    __name(this, "EvalshaROCommand");
  }
  constructor([sha, keys, args], opts) {
    super(["evalsha_ro", sha, keys.length, ...keys, ...args ?? []], opts);
  }
};
var EvalshaCommand = class extends Command {
  static {
    __name(this, "EvalshaCommand");
  }
  constructor([sha, keys, args], opts) {
    super(["evalsha", sha, keys.length, ...keys, ...args ?? []], opts);
  }
};
var ExistsCommand = class extends Command {
  static {
    __name(this, "ExistsCommand");
  }
  constructor(cmd, opts) {
    super(["exists", ...cmd], opts);
  }
};
var ExpireCommand = class extends Command {
  static {
    __name(this, "ExpireCommand");
  }
  constructor(cmd, opts) {
    super(["expire", ...cmd.filter(Boolean)], opts);
  }
};
var ExpireAtCommand = class extends Command {
  static {
    __name(this, "ExpireAtCommand");
  }
  constructor(cmd, opts) {
    super(["expireat", ...cmd], opts);
  }
};
var FCallCommand = class extends Command {
  static {
    __name(this, "FCallCommand");
  }
  constructor([functionName, keys, args], opts) {
    super(["fcall", functionName, ...keys ? [keys.length, ...keys] : [0], ...args ?? []], opts);
  }
};
var FCallRoCommand = class extends Command {
  static {
    __name(this, "FCallRoCommand");
  }
  constructor([functionName, keys, args], opts) {
    super(
      ["fcall_ro", functionName, ...keys ? [keys.length, ...keys] : [0], ...args ?? []],
      opts
    );
  }
};
var FlushAllCommand = class extends Command {
  static {
    __name(this, "FlushAllCommand");
  }
  constructor(args, opts) {
    const command = ["flushall"];
    if (args && args.length > 0 && args[0].async) {
      command.push("async");
    }
    super(command, opts);
  }
};
var FlushDBCommand = class extends Command {
  static {
    __name(this, "FlushDBCommand");
  }
  constructor([opts], cmdOpts) {
    const command = ["flushdb"];
    if (opts?.async) {
      command.push("async");
    }
    super(command, cmdOpts);
  }
};
var FunctionDeleteCommand = class extends Command {
  static {
    __name(this, "FunctionDeleteCommand");
  }
  constructor([libraryName], opts) {
    super(["function", "delete", libraryName], opts);
  }
};
var FunctionFlushCommand = class extends Command {
  static {
    __name(this, "FunctionFlushCommand");
  }
  constructor(opts) {
    super(["function", "flush"], opts);
  }
};
var FunctionListCommand = class extends Command {
  static {
    __name(this, "FunctionListCommand");
  }
  constructor([args], opts) {
    const command = ["function", "list"];
    if (args?.libraryName) {
      command.push("libraryname", args.libraryName);
    }
    if (args?.withCode) {
      command.push("withcode");
    }
    super(command, { deserialize: deserialize2, ...opts });
  }
};
function deserialize2(result) {
  if (!Array.isArray(result)) return [];
  return result.map((libRaw) => {
    const lib = kvArrayToObject(libRaw);
    const functionsParsed = lib.functions.map(
      (fnRaw) => kvArrayToObject(fnRaw)
    );
    return {
      libraryName: lib.library_name,
      engine: lib.engine,
      functions: functionsParsed.map((fn) => ({
        name: fn.name,
        description: fn.description ?? void 0,
        flags: fn.flags
      })),
      libraryCode: lib.library_code
    };
  });
}
__name(deserialize2, "deserialize2");
var FunctionLoadCommand = class extends Command {
  static {
    __name(this, "FunctionLoadCommand");
  }
  constructor([args], opts) {
    super(["function", "load", ...args.replace ? ["replace"] : [], args.code], opts);
  }
};
var FunctionStatsCommand = class extends Command {
  static {
    __name(this, "FunctionStatsCommand");
  }
  constructor(opts) {
    super(["function", "stats"], { deserialize: deserialize3, ...opts });
  }
};
function deserialize3(result) {
  const rawEngines = kvArrayToObject(kvArrayToObject(result).engines);
  const parsedEngines = Object.fromEntries(
    Object.entries(rawEngines).map(([key, value]) => [key, kvArrayToObject(value)])
  );
  const final = {
    engines: Object.fromEntries(
      Object.entries(parsedEngines).map(([key, value]) => [
        key,
        {
          librariesCount: value.libraries_count,
          functionsCount: value.functions_count
        }
      ])
    )
  };
  return final;
}
__name(deserialize3, "deserialize3");
var GeoAddCommand = class extends Command {
  static {
    __name(this, "GeoAddCommand");
  }
  constructor([key, arg1, ...arg2], opts) {
    const command = ["geoadd", key];
    if ("nx" in arg1 && arg1.nx) {
      command.push("nx");
    } else if ("xx" in arg1 && arg1.xx) {
      command.push("xx");
    }
    if ("ch" in arg1 && arg1.ch) {
      command.push("ch");
    }
    if ("latitude" in arg1 && arg1.latitude) {
      command.push(arg1.longitude, arg1.latitude, arg1.member);
    }
    command.push(
      ...arg2.flatMap(({ latitude, longitude, member }) => [longitude, latitude, member])
    );
    super(command, opts);
  }
};
var GeoDistCommand = class extends Command {
  static {
    __name(this, "GeoDistCommand");
  }
  constructor([key, member1, member2, unit = "M"], opts) {
    super(["GEODIST", key, member1, member2, unit], opts);
  }
};
var GeoHashCommand = class extends Command {
  static {
    __name(this, "GeoHashCommand");
  }
  constructor(cmd, opts) {
    const [key] = cmd;
    const members = Array.isArray(cmd[1]) ? cmd[1] : cmd.slice(1);
    super(["GEOHASH", key, ...members], opts);
  }
};
var GeoPosCommand = class extends Command {
  static {
    __name(this, "GeoPosCommand");
  }
  constructor(cmd, opts) {
    const [key] = cmd;
    const members = Array.isArray(cmd[1]) ? cmd[1] : cmd.slice(1);
    super(["GEOPOS", key, ...members], {
      deserialize: /* @__PURE__ */ __name((result) => transform(result), "deserialize"),
      ...opts
    });
  }
};
function transform(result) {
  const final = [];
  for (const pos of result) {
    if (!pos?.[0] || !pos?.[1]) {
      continue;
    }
    final.push({ lng: Number.parseFloat(pos[0]), lat: Number.parseFloat(pos[1]) });
  }
  return final;
}
__name(transform, "transform");
var GeoSearchCommand = class extends Command {
  static {
    __name(this, "GeoSearchCommand");
  }
  constructor([key, centerPoint, shape, order, opts], commandOptions) {
    const command = ["GEOSEARCH", key];
    if (centerPoint.type === "FROMMEMBER" || centerPoint.type === "frommember") {
      command.push(centerPoint.type, centerPoint.member);
    }
    if (centerPoint.type === "FROMLONLAT" || centerPoint.type === "fromlonlat") {
      command.push(centerPoint.type, centerPoint.coordinate.lon, centerPoint.coordinate.lat);
    }
    if (shape.type === "BYRADIUS" || shape.type === "byradius") {
      command.push(shape.type, shape.radius, shape.radiusType);
    }
    if (shape.type === "BYBOX" || shape.type === "bybox") {
      command.push(shape.type, shape.rect.width, shape.rect.height, shape.rectType);
    }
    command.push(order);
    if (opts?.count) {
      command.push("COUNT", opts.count.limit, ...opts.count.any ? ["ANY"] : []);
    }
    const transform2 = /* @__PURE__ */ __name((result) => {
      if (!opts?.withCoord && !opts?.withDist && !opts?.withHash) {
        return result.map((member) => {
          try {
            return { member: parseJSON(member) };
          } catch {
            return { member };
          }
        });
      }
      return result.map((members) => {
        let counter = 1;
        const obj = {};
        try {
          obj.member = parseJSON(members[0]);
        } catch {
          obj.member = members[0];
        }
        if (opts.withDist) {
          obj.dist = Number.parseFloat(members[counter++]);
        }
        if (opts.withHash) {
          obj.hash = members[counter++].toString();
        }
        if (opts.withCoord) {
          obj.coord = {
            long: Number.parseFloat(members[counter][0]),
            lat: Number.parseFloat(members[counter][1])
          };
        }
        return obj;
      });
    }, "transform2");
    super(
      [
        ...command,
        ...opts?.withCoord ? ["WITHCOORD"] : [],
        ...opts?.withDist ? ["WITHDIST"] : [],
        ...opts?.withHash ? ["WITHHASH"] : []
      ],
      {
        deserialize: transform2,
        ...commandOptions
      }
    );
  }
};
var GeoSearchStoreCommand = class extends Command {
  static {
    __name(this, "GeoSearchStoreCommand");
  }
  constructor([destination, key, centerPoint, shape, order, opts], commandOptions) {
    const command = ["GEOSEARCHSTORE", destination, key];
    if (centerPoint.type === "FROMMEMBER" || centerPoint.type === "frommember") {
      command.push(centerPoint.type, centerPoint.member);
    }
    if (centerPoint.type === "FROMLONLAT" || centerPoint.type === "fromlonlat") {
      command.push(centerPoint.type, centerPoint.coordinate.lon, centerPoint.coordinate.lat);
    }
    if (shape.type === "BYRADIUS" || shape.type === "byradius") {
      command.push(shape.type, shape.radius, shape.radiusType);
    }
    if (shape.type === "BYBOX" || shape.type === "bybox") {
      command.push(shape.type, shape.rect.width, shape.rect.height, shape.rectType);
    }
    command.push(order);
    if (opts?.count) {
      command.push("COUNT", opts.count.limit, ...opts.count.any ? ["ANY"] : []);
    }
    super([...command, ...opts?.storeDist ? ["STOREDIST"] : []], commandOptions);
  }
};
var GetCommand = class extends Command {
  static {
    __name(this, "GetCommand");
  }
  constructor(cmd, opts) {
    super(["get", ...cmd], opts);
  }
};
var GetBitCommand = class extends Command {
  static {
    __name(this, "GetBitCommand");
  }
  constructor(cmd, opts) {
    super(["getbit", ...cmd], opts);
  }
};
var GetDelCommand = class extends Command {
  static {
    __name(this, "GetDelCommand");
  }
  constructor(cmd, opts) {
    super(["getdel", ...cmd], opts);
  }
};
var GetExCommand = class extends Command {
  static {
    __name(this, "GetExCommand");
  }
  constructor([key, opts], cmdOpts) {
    const command = ["getex", key];
    if (opts) {
      if ("ex" in opts && typeof opts.ex === "number") {
        command.push("ex", opts.ex);
      } else if ("px" in opts && typeof opts.px === "number") {
        command.push("px", opts.px);
      } else if ("exat" in opts && typeof opts.exat === "number") {
        command.push("exat", opts.exat);
      } else if ("pxat" in opts && typeof opts.pxat === "number") {
        command.push("pxat", opts.pxat);
      } else if ("persist" in opts && opts.persist) {
        command.push("persist");
      }
    }
    super(command, cmdOpts);
  }
};
var GetRangeCommand = class extends Command {
  static {
    __name(this, "GetRangeCommand");
  }
  constructor(cmd, opts) {
    super(["getrange", ...cmd], opts);
  }
};
var GetSetCommand = class extends Command {
  static {
    __name(this, "GetSetCommand");
  }
  constructor(cmd, opts) {
    super(["getset", ...cmd], opts);
  }
};
var HDelCommand = class extends Command {
  static {
    __name(this, "HDelCommand");
  }
  constructor(cmd, opts) {
    super(["hdel", ...cmd], opts);
  }
};
var HExistsCommand = class extends Command {
  static {
    __name(this, "HExistsCommand");
  }
  constructor(cmd, opts) {
    super(["hexists", ...cmd], opts);
  }
};
var HExpireCommand = class extends Command {
  static {
    __name(this, "HExpireCommand");
  }
  constructor(cmd, opts) {
    const [key, fields, seconds, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hexpire",
        key,
        seconds,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
};
var HExpireAtCommand = class extends Command {
  static {
    __name(this, "HExpireAtCommand");
  }
  constructor(cmd, opts) {
    const [key, fields, timestamp, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hexpireat",
        key,
        timestamp,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
};
var HExpireTimeCommand = class extends Command {
  static {
    __name(this, "HExpireTimeCommand");
  }
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hexpiretime", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
};
var HPersistCommand = class extends Command {
  static {
    __name(this, "HPersistCommand");
  }
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hpersist", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
};
var HPExpireCommand = class extends Command {
  static {
    __name(this, "HPExpireCommand");
  }
  constructor(cmd, opts) {
    const [key, fields, milliseconds, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hpexpire",
        key,
        milliseconds,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
};
var HPExpireAtCommand = class extends Command {
  static {
    __name(this, "HPExpireAtCommand");
  }
  constructor(cmd, opts) {
    const [key, fields, timestamp, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hpexpireat",
        key,
        timestamp,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
};
var HPExpireTimeCommand = class extends Command {
  static {
    __name(this, "HPExpireTimeCommand");
  }
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hpexpiretime", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
};
var HPTtlCommand = class extends Command {
  static {
    __name(this, "HPTtlCommand");
  }
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hpttl", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
};
var HGetCommand = class extends Command {
  static {
    __name(this, "HGetCommand");
  }
  constructor(cmd, opts) {
    super(["hget", ...cmd], opts);
  }
};
function deserialize4(result) {
  if (result.length === 0) {
    return null;
  }
  const obj = {};
  for (let i = 0; i < result.length; i += 2) {
    const key = result[i];
    const value = result[i + 1];
    try {
      const valueIsNumberAndNotSafeInteger = !Number.isNaN(Number(value)) && !Number.isSafeInteger(Number(value));
      obj[key] = valueIsNumberAndNotSafeInteger ? value : parseJSON(value);
    } catch {
      obj[key] = value;
    }
  }
  return obj;
}
__name(deserialize4, "deserialize4");
var HGetAllCommand = class extends Command {
  static {
    __name(this, "HGetAllCommand");
  }
  constructor(cmd, opts) {
    super(["hgetall", ...cmd], {
      deserialize: /* @__PURE__ */ __name((result) => deserialize4(result), "deserialize"),
      ...opts
    });
  }
};
function deserialize5(fields, result) {
  if (result.every((field) => field === null)) {
    return null;
  }
  const obj = {};
  for (const [i, field] of fields.entries()) {
    try {
      obj[field] = parseJSON(result[i]);
    } catch {
      obj[field] = result[i];
    }
  }
  return obj;
}
__name(deserialize5, "deserialize5");
var HMGetCommand = class extends Command {
  static {
    __name(this, "HMGetCommand");
  }
  constructor([key, ...fields], opts) {
    super(["hmget", key, ...fields], {
      deserialize: /* @__PURE__ */ __name((result) => deserialize5(fields, result), "deserialize"),
      ...opts
    });
  }
};
var HGetDelCommand = class extends Command {
  static {
    __name(this, "HGetDelCommand");
  }
  constructor([key, ...fields], opts) {
    super(["hgetdel", key, "FIELDS", fields.length, ...fields], {
      deserialize: /* @__PURE__ */ __name((result) => deserialize5(fields.map(String), result), "deserialize"),
      ...opts
    });
  }
};
var HGetExCommand = class extends Command {
  static {
    __name(this, "HGetExCommand");
  }
  constructor([key, opts, ...fields], cmdOpts) {
    const command = ["hgetex", key];
    if ("ex" in opts && typeof opts.ex === "number") {
      command.push("EX", opts.ex);
    } else if ("px" in opts && typeof opts.px === "number") {
      command.push("PX", opts.px);
    } else if ("exat" in opts && typeof opts.exat === "number") {
      command.push("EXAT", opts.exat);
    } else if ("pxat" in opts && typeof opts.pxat === "number") {
      command.push("PXAT", opts.pxat);
    } else if ("persist" in opts && opts.persist) {
      command.push("PERSIST");
    }
    command.push("FIELDS", fields.length, ...fields);
    super(command, {
      deserialize: /* @__PURE__ */ __name((result) => deserialize5(fields.map(String), result), "deserialize"),
      ...cmdOpts
    });
  }
};
var HIncrByCommand = class extends Command {
  static {
    __name(this, "HIncrByCommand");
  }
  constructor(cmd, opts) {
    super(["hincrby", ...cmd], opts);
  }
};
var HIncrByFloatCommand = class extends Command {
  static {
    __name(this, "HIncrByFloatCommand");
  }
  constructor(cmd, opts) {
    super(["hincrbyfloat", ...cmd], opts);
  }
};
var HKeysCommand = class extends Command {
  static {
    __name(this, "HKeysCommand");
  }
  constructor([key], opts) {
    super(["hkeys", key], opts);
  }
};
var HLenCommand = class extends Command {
  static {
    __name(this, "HLenCommand");
  }
  constructor(cmd, opts) {
    super(["hlen", ...cmd], opts);
  }
};
var HMSetCommand = class extends Command {
  static {
    __name(this, "HMSetCommand");
  }
  constructor([key, kv], opts) {
    super(["hmset", key, ...Object.entries(kv).flatMap(([field, value]) => [field, value])], opts);
  }
};
var HScanCommand = class extends Command {
  static {
    __name(this, "HScanCommand");
  }
  constructor([key, cursor, cmdOpts], opts) {
    const command = ["hscan", key, cursor];
    if (cmdOpts?.match) {
      command.push("match", cmdOpts.match);
    }
    if (typeof cmdOpts?.count === "number") {
      command.push("count", cmdOpts.count);
    }
    super(command, {
      deserialize: deserializeScanResponse,
      ...opts
    });
  }
};
var HSetCommand = class extends Command {
  static {
    __name(this, "HSetCommand");
  }
  constructor([key, kv], opts) {
    super(["hset", key, ...Object.entries(kv).flatMap(([field, value]) => [field, value])], opts);
  }
};
var HSetExCommand = class extends Command {
  static {
    __name(this, "HSetExCommand");
  }
  constructor([key, opts, kv], cmdOpts) {
    const command = ["hsetex", key];
    if (opts.conditional) {
      command.push(opts.conditional.toUpperCase());
    }
    if (opts.expiration) {
      if ("ex" in opts.expiration && typeof opts.expiration.ex === "number") {
        command.push("EX", opts.expiration.ex);
      } else if ("px" in opts.expiration && typeof opts.expiration.px === "number") {
        command.push("PX", opts.expiration.px);
      } else if ("exat" in opts.expiration && typeof opts.expiration.exat === "number") {
        command.push("EXAT", opts.expiration.exat);
      } else if ("pxat" in opts.expiration && typeof opts.expiration.pxat === "number") {
        command.push("PXAT", opts.expiration.pxat);
      } else if ("keepttl" in opts.expiration && opts.expiration.keepttl) {
        command.push("KEEPTTL");
      }
    }
    const entries = Object.entries(kv);
    command.push("FIELDS", entries.length);
    for (const [field, value] of entries) {
      command.push(field, value);
    }
    super(command, cmdOpts);
  }
};
var HSetNXCommand = class extends Command {
  static {
    __name(this, "HSetNXCommand");
  }
  constructor(cmd, opts) {
    super(["hsetnx", ...cmd], opts);
  }
};
var HStrLenCommand = class extends Command {
  static {
    __name(this, "HStrLenCommand");
  }
  constructor(cmd, opts) {
    super(["hstrlen", ...cmd], opts);
  }
};
var HTtlCommand = class extends Command {
  static {
    __name(this, "HTtlCommand");
  }
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["httl", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
};
var HValsCommand = class extends Command {
  static {
    __name(this, "HValsCommand");
  }
  constructor(cmd, opts) {
    super(["hvals", ...cmd], opts);
  }
};
var IncrCommand = class extends Command {
  static {
    __name(this, "IncrCommand");
  }
  constructor(cmd, opts) {
    super(["incr", ...cmd], opts);
  }
};
var IncrByCommand = class extends Command {
  static {
    __name(this, "IncrByCommand");
  }
  constructor(cmd, opts) {
    super(["incrby", ...cmd], opts);
  }
};
var IncrByFloatCommand = class extends Command {
  static {
    __name(this, "IncrByFloatCommand");
  }
  constructor(cmd, opts) {
    super(["incrbyfloat", ...cmd], opts);
  }
};
var JsonArrAppendCommand = class extends Command {
  static {
    __name(this, "JsonArrAppendCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.ARRAPPEND", ...cmd], opts);
  }
};
var JsonArrIndexCommand = class extends Command {
  static {
    __name(this, "JsonArrIndexCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.ARRINDEX", ...cmd], opts);
  }
};
var JsonArrInsertCommand = class extends Command {
  static {
    __name(this, "JsonArrInsertCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.ARRINSERT", ...cmd], opts);
  }
};
var JsonArrLenCommand = class extends Command {
  static {
    __name(this, "JsonArrLenCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.ARRLEN", cmd[0], cmd[1] ?? "$"], opts);
  }
};
var JsonArrPopCommand = class extends Command {
  static {
    __name(this, "JsonArrPopCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.ARRPOP", ...cmd], opts);
  }
};
var JsonArrTrimCommand = class extends Command {
  static {
    __name(this, "JsonArrTrimCommand");
  }
  constructor(cmd, opts) {
    const path = cmd[1] ?? "$";
    const start = cmd[2] ?? 0;
    const stop = cmd[3] ?? 0;
    super(["JSON.ARRTRIM", cmd[0], path, start, stop], opts);
  }
};
var JsonClearCommand = class extends Command {
  static {
    __name(this, "JsonClearCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.CLEAR", ...cmd], opts);
  }
};
var JsonDelCommand = class extends Command {
  static {
    __name(this, "JsonDelCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.DEL", ...cmd], opts);
  }
};
var JsonForgetCommand = class extends Command {
  static {
    __name(this, "JsonForgetCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.FORGET", ...cmd], opts);
  }
};
var JsonGetCommand = class extends Command {
  static {
    __name(this, "JsonGetCommand");
  }
  constructor(cmd, opts) {
    const command = ["JSON.GET"];
    if (typeof cmd[1] === "string") {
      command.push(...cmd);
    } else {
      command.push(cmd[0]);
      if (cmd[1]) {
        if (cmd[1].indent) {
          command.push("INDENT", cmd[1].indent);
        }
        if (cmd[1].newline) {
          command.push("NEWLINE", cmd[1].newline);
        }
        if (cmd[1].space) {
          command.push("SPACE", cmd[1].space);
        }
      }
      command.push(...cmd.slice(2));
    }
    super(command, opts);
  }
};
var JsonMergeCommand = class extends Command {
  static {
    __name(this, "JsonMergeCommand");
  }
  constructor(cmd, opts) {
    const command = ["JSON.MERGE", ...cmd];
    super(command, opts);
  }
};
var JsonMGetCommand = class extends Command {
  static {
    __name(this, "JsonMGetCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.MGET", ...cmd[0], cmd[1]], opts);
  }
};
var JsonMSetCommand = class extends Command {
  static {
    __name(this, "JsonMSetCommand");
  }
  constructor(cmd, opts) {
    const command = ["JSON.MSET"];
    for (const c of cmd) {
      command.push(c.key, c.path, c.value);
    }
    super(command, opts);
  }
};
var JsonNumIncrByCommand = class extends Command {
  static {
    __name(this, "JsonNumIncrByCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.NUMINCRBY", ...cmd], opts);
  }
};
var JsonNumMultByCommand = class extends Command {
  static {
    __name(this, "JsonNumMultByCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.NUMMULTBY", ...cmd], opts);
  }
};
var JsonObjKeysCommand = class extends Command {
  static {
    __name(this, "JsonObjKeysCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.OBJKEYS", ...cmd], opts);
  }
};
var JsonObjLenCommand = class extends Command {
  static {
    __name(this, "JsonObjLenCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.OBJLEN", ...cmd], opts);
  }
};
var JsonRespCommand = class extends Command {
  static {
    __name(this, "JsonRespCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.RESP", ...cmd], opts);
  }
};
var JsonSetCommand = class extends Command {
  static {
    __name(this, "JsonSetCommand");
  }
  constructor(cmd, opts) {
    const command = ["JSON.SET", cmd[0], cmd[1], cmd[2]];
    if (cmd[3]) {
      if (cmd[3].nx) {
        command.push("NX");
      } else if (cmd[3].xx) {
        command.push("XX");
      }
    }
    super(command, opts);
  }
};
var JsonStrAppendCommand = class extends Command {
  static {
    __name(this, "JsonStrAppendCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.STRAPPEND", ...cmd], opts);
  }
};
var JsonStrLenCommand = class extends Command {
  static {
    __name(this, "JsonStrLenCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.STRLEN", ...cmd], opts);
  }
};
var JsonToggleCommand = class extends Command {
  static {
    __name(this, "JsonToggleCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.TOGGLE", ...cmd], opts);
  }
};
var JsonTypeCommand = class extends Command {
  static {
    __name(this, "JsonTypeCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.TYPE", ...cmd], opts);
  }
};
var KeysCommand = class extends Command {
  static {
    __name(this, "KeysCommand");
  }
  constructor(cmd, opts) {
    super(["keys", ...cmd], opts);
  }
};
var LIndexCommand = class extends Command {
  static {
    __name(this, "LIndexCommand");
  }
  constructor(cmd, opts) {
    super(["lindex", ...cmd], opts);
  }
};
var LInsertCommand = class extends Command {
  static {
    __name(this, "LInsertCommand");
  }
  constructor(cmd, opts) {
    super(["linsert", ...cmd], opts);
  }
};
var LLenCommand = class extends Command {
  static {
    __name(this, "LLenCommand");
  }
  constructor(cmd, opts) {
    super(["llen", ...cmd], opts);
  }
};
var LMoveCommand = class extends Command {
  static {
    __name(this, "LMoveCommand");
  }
  constructor(cmd, opts) {
    super(["lmove", ...cmd], opts);
  }
};
var LmPopCommand = class extends Command {
  static {
    __name(this, "LmPopCommand");
  }
  constructor(cmd, opts) {
    const [numkeys, keys, direction, count] = cmd;
    super(["LMPOP", numkeys, ...keys, direction, ...count ? ["COUNT", count] : []], opts);
  }
};
var LPopCommand = class extends Command {
  static {
    __name(this, "LPopCommand");
  }
  constructor(cmd, opts) {
    super(["lpop", ...cmd], opts);
  }
};
var LPosCommand = class extends Command {
  static {
    __name(this, "LPosCommand");
  }
  constructor(cmd, opts) {
    const args = ["lpos", cmd[0], cmd[1]];
    if (typeof cmd[2]?.rank === "number") {
      args.push("rank", cmd[2].rank);
    }
    if (typeof cmd[2]?.count === "number") {
      args.push("count", cmd[2].count);
    }
    if (typeof cmd[2]?.maxLen === "number") {
      args.push("maxLen", cmd[2].maxLen);
    }
    super(args, opts);
  }
};
var LPushCommand = class extends Command {
  static {
    __name(this, "LPushCommand");
  }
  constructor(cmd, opts) {
    super(["lpush", ...cmd], opts);
  }
};
var LPushXCommand = class extends Command {
  static {
    __name(this, "LPushXCommand");
  }
  constructor(cmd, opts) {
    super(["lpushx", ...cmd], opts);
  }
};
var LRangeCommand = class extends Command {
  static {
    __name(this, "LRangeCommand");
  }
  constructor(cmd, opts) {
    super(["lrange", ...cmd], opts);
  }
};
var LRemCommand = class extends Command {
  static {
    __name(this, "LRemCommand");
  }
  constructor(cmd, opts) {
    super(["lrem", ...cmd], opts);
  }
};
var LSetCommand = class extends Command {
  static {
    __name(this, "LSetCommand");
  }
  constructor(cmd, opts) {
    super(["lset", ...cmd], opts);
  }
};
var LTrimCommand = class extends Command {
  static {
    __name(this, "LTrimCommand");
  }
  constructor(cmd, opts) {
    super(["ltrim", ...cmd], opts);
  }
};
var MGetCommand = class extends Command {
  static {
    __name(this, "MGetCommand");
  }
  constructor(cmd, opts) {
    const keys = Array.isArray(cmd[0]) ? cmd[0] : cmd;
    super(["mget", ...keys], opts);
  }
};
var MSetCommand = class extends Command {
  static {
    __name(this, "MSetCommand");
  }
  constructor([kv], opts) {
    super(["mset", ...Object.entries(kv).flatMap(([key, value]) => [key, value])], opts);
  }
};
var MSetNXCommand = class extends Command {
  static {
    __name(this, "MSetNXCommand");
  }
  constructor([kv], opts) {
    super(["msetnx", ...Object.entries(kv).flat()], opts);
  }
};
var PersistCommand = class extends Command {
  static {
    __name(this, "PersistCommand");
  }
  constructor(cmd, opts) {
    super(["persist", ...cmd], opts);
  }
};
var PExpireCommand = class extends Command {
  static {
    __name(this, "PExpireCommand");
  }
  constructor(cmd, opts) {
    super(["pexpire", ...cmd], opts);
  }
};
var PExpireAtCommand = class extends Command {
  static {
    __name(this, "PExpireAtCommand");
  }
  constructor(cmd, opts) {
    super(["pexpireat", ...cmd], opts);
  }
};
var PfAddCommand = class extends Command {
  static {
    __name(this, "PfAddCommand");
  }
  constructor(cmd, opts) {
    super(["pfadd", ...cmd], opts);
  }
};
var PfCountCommand = class extends Command {
  static {
    __name(this, "PfCountCommand");
  }
  constructor(cmd, opts) {
    super(["pfcount", ...cmd], opts);
  }
};
var PfMergeCommand = class extends Command {
  static {
    __name(this, "PfMergeCommand");
  }
  constructor(cmd, opts) {
    super(["pfmerge", ...cmd], opts);
  }
};
var PingCommand = class extends Command {
  static {
    __name(this, "PingCommand");
  }
  constructor(cmd, opts) {
    const command = ["ping"];
    if (cmd?.[0] !== void 0) {
      command.push(cmd[0]);
    }
    super(command, opts);
  }
};
var PSetEXCommand = class extends Command {
  static {
    __name(this, "PSetEXCommand");
  }
  constructor(cmd, opts) {
    super(["psetex", ...cmd], opts);
  }
};
var PTtlCommand = class extends Command {
  static {
    __name(this, "PTtlCommand");
  }
  constructor(cmd, opts) {
    super(["pttl", ...cmd], opts);
  }
};
var PublishCommand = class extends Command {
  static {
    __name(this, "PublishCommand");
  }
  constructor(cmd, opts) {
    super(["publish", ...cmd], opts);
  }
};
var RandomKeyCommand = class extends Command {
  static {
    __name(this, "RandomKeyCommand");
  }
  constructor(opts) {
    super(["randomkey"], opts);
  }
};
var RenameCommand = class extends Command {
  static {
    __name(this, "RenameCommand");
  }
  constructor(cmd, opts) {
    super(["rename", ...cmd], opts);
  }
};
var RenameNXCommand = class extends Command {
  static {
    __name(this, "RenameNXCommand");
  }
  constructor(cmd, opts) {
    super(["renamenx", ...cmd], opts);
  }
};
var RPopCommand = class extends Command {
  static {
    __name(this, "RPopCommand");
  }
  constructor(cmd, opts) {
    super(["rpop", ...cmd], opts);
  }
};
var RPushCommand = class extends Command {
  static {
    __name(this, "RPushCommand");
  }
  constructor(cmd, opts) {
    super(["rpush", ...cmd], opts);
  }
};
var RPushXCommand = class extends Command {
  static {
    __name(this, "RPushXCommand");
  }
  constructor(cmd, opts) {
    super(["rpushx", ...cmd], opts);
  }
};
var SAddCommand = class extends Command {
  static {
    __name(this, "SAddCommand");
  }
  constructor(cmd, opts) {
    super(["sadd", ...cmd], opts);
  }
};
var ScanCommand = class extends Command {
  static {
    __name(this, "ScanCommand");
  }
  constructor([cursor, opts], cmdOpts) {
    const command = ["scan", cursor];
    if (opts?.match) {
      command.push("match", opts.match);
    }
    if (typeof opts?.count === "number") {
      command.push("count", opts.count);
    }
    if (opts && "withType" in opts && opts.withType === true) {
      command.push("withtype");
    } else if (opts && "type" in opts && opts.type && opts.type.length > 0) {
      command.push("type", opts.type);
    }
    super(command, {
      // @ts-expect-error ignore types here
      deserialize: opts?.withType ? deserializeScanWithTypesResponse : deserializeScanResponse,
      ...cmdOpts
    });
  }
};
var SCardCommand = class extends Command {
  static {
    __name(this, "SCardCommand");
  }
  constructor(cmd, opts) {
    super(["scard", ...cmd], opts);
  }
};
var ScriptExistsCommand = class extends Command {
  static {
    __name(this, "ScriptExistsCommand");
  }
  constructor(hashes, opts) {
    super(["script", "exists", ...hashes], {
      deserialize: /* @__PURE__ */ __name((result) => result, "deserialize"),
      ...opts
    });
  }
};
var ScriptFlushCommand = class extends Command {
  static {
    __name(this, "ScriptFlushCommand");
  }
  constructor([opts], cmdOpts) {
    const cmd = ["script", "flush"];
    if (opts?.sync) {
      cmd.push("sync");
    } else if (opts?.async) {
      cmd.push("async");
    }
    super(cmd, cmdOpts);
  }
};
var ScriptLoadCommand = class extends Command {
  static {
    __name(this, "ScriptLoadCommand");
  }
  constructor(args, opts) {
    super(["script", "load", ...args], opts);
  }
};
var SDiffCommand = class extends Command {
  static {
    __name(this, "SDiffCommand");
  }
  constructor(cmd, opts) {
    super(["sdiff", ...cmd], opts);
  }
};
var SDiffStoreCommand = class extends Command {
  static {
    __name(this, "SDiffStoreCommand");
  }
  constructor(cmd, opts) {
    super(["sdiffstore", ...cmd], opts);
  }
};
var SetCommand = class extends Command {
  static {
    __name(this, "SetCommand");
  }
  constructor([key, value, opts], cmdOpts) {
    const command = ["set", key, value];
    if (opts) {
      if ("nx" in opts && opts.nx) {
        command.push("nx");
      } else if ("xx" in opts && opts.xx) {
        command.push("xx");
      }
      if ("get" in opts && opts.get) {
        command.push("get");
      }
      if ("ex" in opts && typeof opts.ex === "number") {
        command.push("ex", opts.ex);
      } else if ("px" in opts && typeof opts.px === "number") {
        command.push("px", opts.px);
      } else if ("exat" in opts && typeof opts.exat === "number") {
        command.push("exat", opts.exat);
      } else if ("pxat" in opts && typeof opts.pxat === "number") {
        command.push("pxat", opts.pxat);
      } else if ("keepTtl" in opts && opts.keepTtl) {
        command.push("keepTtl");
      }
    }
    super(command, cmdOpts);
  }
};
var SetBitCommand = class extends Command {
  static {
    __name(this, "SetBitCommand");
  }
  constructor(cmd, opts) {
    super(["setbit", ...cmd], opts);
  }
};
var SetExCommand = class extends Command {
  static {
    __name(this, "SetExCommand");
  }
  constructor(cmd, opts) {
    super(["setex", ...cmd], opts);
  }
};
var SetNxCommand = class extends Command {
  static {
    __name(this, "SetNxCommand");
  }
  constructor(cmd, opts) {
    super(["setnx", ...cmd], opts);
  }
};
var SetRangeCommand = class extends Command {
  static {
    __name(this, "SetRangeCommand");
  }
  constructor(cmd, opts) {
    super(["setrange", ...cmd], opts);
  }
};
var SInterCommand = class extends Command {
  static {
    __name(this, "SInterCommand");
  }
  constructor(cmd, opts) {
    super(["sinter", ...cmd], opts);
  }
};
var SInterCardCommand = class extends Command {
  static {
    __name(this, "SInterCardCommand");
  }
  constructor(cmd, cmdOpts) {
    const [keys, opts] = cmd;
    const command = ["sintercard", keys.length, ...keys];
    if (opts?.limit !== void 0) {
      command.push("LIMIT", opts.limit);
    }
    super(command, cmdOpts);
  }
};
var SInterStoreCommand = class extends Command {
  static {
    __name(this, "SInterStoreCommand");
  }
  constructor(cmd, opts) {
    super(["sinterstore", ...cmd], opts);
  }
};
var SIsMemberCommand = class extends Command {
  static {
    __name(this, "SIsMemberCommand");
  }
  constructor(cmd, opts) {
    super(["sismember", ...cmd], opts);
  }
};
var SMembersCommand = class extends Command {
  static {
    __name(this, "SMembersCommand");
  }
  constructor(cmd, opts) {
    super(["smembers", ...cmd], opts);
  }
};
var SMIsMemberCommand = class extends Command {
  static {
    __name(this, "SMIsMemberCommand");
  }
  constructor(cmd, opts) {
    super(["smismember", cmd[0], ...cmd[1]], opts);
  }
};
var SMoveCommand = class extends Command {
  static {
    __name(this, "SMoveCommand");
  }
  constructor(cmd, opts) {
    super(["smove", ...cmd], opts);
  }
};
var SPopCommand = class extends Command {
  static {
    __name(this, "SPopCommand");
  }
  constructor([key, count], opts) {
    const command = ["spop", key];
    if (typeof count === "number") {
      command.push(count);
    }
    super(command, opts);
  }
};
var SRandMemberCommand = class extends Command {
  static {
    __name(this, "SRandMemberCommand");
  }
  constructor([key, count], opts) {
    const command = ["srandmember", key];
    if (typeof count === "number") {
      command.push(count);
    }
    super(command, opts);
  }
};
var SRemCommand = class extends Command {
  static {
    __name(this, "SRemCommand");
  }
  constructor(cmd, opts) {
    super(["srem", ...cmd], opts);
  }
};
var SScanCommand = class extends Command {
  static {
    __name(this, "SScanCommand");
  }
  constructor([key, cursor, opts], cmdOpts) {
    const command = ["sscan", key, cursor];
    if (opts?.match) {
      command.push("match", opts.match);
    }
    if (typeof opts?.count === "number") {
      command.push("count", opts.count);
    }
    super(command, {
      deserialize: deserializeScanResponse,
      ...cmdOpts
    });
  }
};
var StrLenCommand = class extends Command {
  static {
    __name(this, "StrLenCommand");
  }
  constructor(cmd, opts) {
    super(["strlen", ...cmd], opts);
  }
};
var SUnionCommand = class extends Command {
  static {
    __name(this, "SUnionCommand");
  }
  constructor(cmd, opts) {
    super(["sunion", ...cmd], opts);
  }
};
var SUnionStoreCommand = class extends Command {
  static {
    __name(this, "SUnionStoreCommand");
  }
  constructor(cmd, opts) {
    super(["sunionstore", ...cmd], opts);
  }
};
var TimeCommand = class extends Command {
  static {
    __name(this, "TimeCommand");
  }
  constructor(opts) {
    super(["time"], opts);
  }
};
var TouchCommand = class extends Command {
  static {
    __name(this, "TouchCommand");
  }
  constructor(cmd, opts) {
    super(["touch", ...cmd], opts);
  }
};
var TtlCommand = class extends Command {
  static {
    __name(this, "TtlCommand");
  }
  constructor(cmd, opts) {
    super(["ttl", ...cmd], opts);
  }
};
var TypeCommand = class extends Command {
  static {
    __name(this, "TypeCommand");
  }
  constructor(cmd, opts) {
    super(["type", ...cmd], opts);
  }
};
var UnlinkCommand = class extends Command {
  static {
    __name(this, "UnlinkCommand");
  }
  constructor(cmd, opts) {
    super(["unlink", ...cmd], opts);
  }
};
var XAckCommand = class extends Command {
  static {
    __name(this, "XAckCommand");
  }
  constructor([key, group, id], opts) {
    const ids = Array.isArray(id) ? [...id] : [id];
    super(["XACK", key, group, ...ids], opts);
  }
};
var XAckDelCommand = class extends Command {
  static {
    __name(this, "XAckDelCommand");
  }
  constructor([key, group, opts, ...ids], cmdOpts) {
    const command = ["XACKDEL", key, group];
    command.push(opts.toUpperCase(), "IDS", ids.length, ...ids);
    super(command, cmdOpts);
  }
};
var XAddCommand = class extends Command {
  static {
    __name(this, "XAddCommand");
  }
  constructor([key, id, entries, opts], commandOptions) {
    const command = ["XADD", key];
    if (opts) {
      if (opts.nomkStream) {
        command.push("NOMKSTREAM");
      }
      if (opts.trim) {
        command.push(opts.trim.type, opts.trim.comparison, opts.trim.threshold);
        if (opts.trim.limit !== void 0) {
          command.push("LIMIT", opts.trim.limit);
        }
      }
    }
    command.push(id);
    for (const [k, v] of Object.entries(entries)) {
      command.push(k, v);
    }
    super(command, commandOptions);
  }
};
var XAutoClaim = class extends Command {
  static {
    __name(this, "XAutoClaim");
  }
  constructor([key, group, consumer, minIdleTime, start, options], opts) {
    const commands = [];
    if (options?.count) {
      commands.push("COUNT", options.count);
    }
    if (options?.justId) {
      commands.push("JUSTID");
    }
    super(["XAUTOCLAIM", key, group, consumer, minIdleTime, start, ...commands], opts);
  }
};
var XClaimCommand = class extends Command {
  static {
    __name(this, "XClaimCommand");
  }
  constructor([key, group, consumer, minIdleTime, id, options], opts) {
    const ids = Array.isArray(id) ? [...id] : [id];
    const commands = [];
    if (options?.idleMS) {
      commands.push("IDLE", options.idleMS);
    }
    if (options?.idleMS) {
      commands.push("TIME", options.timeMS);
    }
    if (options?.retryCount) {
      commands.push("RETRYCOUNT", options.retryCount);
    }
    if (options?.force) {
      commands.push("FORCE");
    }
    if (options?.justId) {
      commands.push("JUSTID");
    }
    if (options?.lastId) {
      commands.push("LASTID", options.lastId);
    }
    super(["XCLAIM", key, group, consumer, minIdleTime, ...ids, ...commands], opts);
  }
};
var XDelCommand = class extends Command {
  static {
    __name(this, "XDelCommand");
  }
  constructor([key, ids], opts) {
    const cmds = Array.isArray(ids) ? [...ids] : [ids];
    super(["XDEL", key, ...cmds], opts);
  }
};
var XDelExCommand = class extends Command {
  static {
    __name(this, "XDelExCommand");
  }
  constructor([key, opts, ...ids], cmdOpts) {
    const command = ["XDELEX", key];
    if (opts) {
      command.push(opts.toUpperCase());
    }
    command.push("IDS", ids.length, ...ids);
    super(command, cmdOpts);
  }
};
var XGroupCommand = class extends Command {
  static {
    __name(this, "XGroupCommand");
  }
  constructor([key, opts], commandOptions) {
    const command = ["XGROUP"];
    switch (opts.type) {
      case "CREATE": {
        command.push("CREATE", key, opts.group, opts.id);
        if (opts.options) {
          if (opts.options.MKSTREAM) {
            command.push("MKSTREAM");
          }
          if (opts.options.ENTRIESREAD !== void 0) {
            command.push("ENTRIESREAD", opts.options.ENTRIESREAD.toString());
          }
        }
        break;
      }
      case "CREATECONSUMER": {
        command.push("CREATECONSUMER", key, opts.group, opts.consumer);
        break;
      }
      case "DELCONSUMER": {
        command.push("DELCONSUMER", key, opts.group, opts.consumer);
        break;
      }
      case "DESTROY": {
        command.push("DESTROY", key, opts.group);
        break;
      }
      case "SETID": {
        command.push("SETID", key, opts.group, opts.id);
        if (opts.options?.ENTRIESREAD !== void 0) {
          command.push("ENTRIESREAD", opts.options.ENTRIESREAD.toString());
        }
        break;
      }
      default: {
        throw new Error("Invalid XGROUP");
      }
    }
    super(command, commandOptions);
  }
};
var XInfoCommand = class extends Command {
  static {
    __name(this, "XInfoCommand");
  }
  constructor([key, options], opts) {
    const cmds = [];
    if (options.type === "CONSUMERS") {
      cmds.push("CONSUMERS", key, options.group);
    } else {
      cmds.push("GROUPS", key);
    }
    super(["XINFO", ...cmds], opts);
  }
};
var XLenCommand = class extends Command {
  static {
    __name(this, "XLenCommand");
  }
  constructor(cmd, opts) {
    super(["XLEN", ...cmd], opts);
  }
};
var XPendingCommand = class extends Command {
  static {
    __name(this, "XPendingCommand");
  }
  constructor([key, group, start, end, count, options], opts) {
    const consumers = options?.consumer === void 0 ? [] : Array.isArray(options.consumer) ? [...options.consumer] : [options.consumer];
    super(
      [
        "XPENDING",
        key,
        group,
        ...options?.idleTime ? ["IDLE", options.idleTime] : [],
        start,
        end,
        count,
        ...consumers
      ],
      opts
    );
  }
};
function deserialize6(result) {
  const obj = {};
  for (const e of result) {
    for (let i = 0; i < e.length; i += 2) {
      const streamId = e[i];
      const entries = e[i + 1];
      if (!(streamId in obj)) {
        obj[streamId] = {};
      }
      for (let j = 0; j < entries.length; j += 2) {
        const field = entries[j];
        const value = entries[j + 1];
        try {
          obj[streamId][field] = parseJSON(value);
        } catch {
          obj[streamId][field] = value;
        }
      }
    }
  }
  return obj;
}
__name(deserialize6, "deserialize6");
var XRangeCommand = class extends Command {
  static {
    __name(this, "XRangeCommand");
  }
  constructor([key, start, end, count], opts) {
    const command = ["XRANGE", key, start, end];
    if (typeof count === "number") {
      command.push("COUNT", count);
    }
    super(command, {
      deserialize: /* @__PURE__ */ __name((result) => deserialize6(result), "deserialize"),
      ...opts
    });
  }
};
var UNBALANCED_XREAD_ERR = "ERR Unbalanced XREAD list of streams: for each stream key an ID or '$' must be specified";
var XReadCommand = class extends Command {
  static {
    __name(this, "XReadCommand");
  }
  constructor([key, id, options], opts) {
    if (Array.isArray(key) && Array.isArray(id) && key.length !== id.length) {
      throw new Error(UNBALANCED_XREAD_ERR);
    }
    const commands = [];
    if (typeof options?.count === "number") {
      commands.push("COUNT", options.count);
    }
    if (typeof options?.blockMS === "number") {
      commands.push("BLOCK", options.blockMS);
    }
    commands.push(
      "STREAMS",
      ...Array.isArray(key) ? [...key] : [key],
      ...Array.isArray(id) ? [...id] : [id]
    );
    super(["XREAD", ...commands], opts);
  }
};
var UNBALANCED_XREADGROUP_ERR = "ERR Unbalanced XREADGROUP list of streams: for each stream key an ID or '$' must be specified";
var XReadGroupCommand = class extends Command {
  static {
    __name(this, "XReadGroupCommand");
  }
  constructor([group, consumer, key, id, options], opts) {
    if (Array.isArray(key) && Array.isArray(id) && key.length !== id.length) {
      throw new Error(UNBALANCED_XREADGROUP_ERR);
    }
    const commands = [];
    if (typeof options?.count === "number") {
      commands.push("COUNT", options.count);
    }
    if (typeof options?.blockMS === "number") {
      commands.push("BLOCK", options.blockMS);
    }
    if (typeof options?.NOACK === "boolean" && options.NOACK) {
      commands.push("NOACK");
    }
    commands.push(
      "STREAMS",
      ...Array.isArray(key) ? [...key] : [key],
      ...Array.isArray(id) ? [...id] : [id]
    );
    super(["XREADGROUP", "GROUP", group, consumer, ...commands], opts);
  }
};
var XRevRangeCommand = class extends Command {
  static {
    __name(this, "XRevRangeCommand");
  }
  constructor([key, end, start, count], opts) {
    const command = ["XREVRANGE", key, end, start];
    if (typeof count === "number") {
      command.push("COUNT", count);
    }
    super(command, {
      deserialize: /* @__PURE__ */ __name((result) => deserialize7(result), "deserialize"),
      ...opts
    });
  }
};
function deserialize7(result) {
  const obj = {};
  for (const e of result) {
    for (let i = 0; i < e.length; i += 2) {
      const streamId = e[i];
      const entries = e[i + 1];
      if (!(streamId in obj)) {
        obj[streamId] = {};
      }
      for (let j = 0; j < entries.length; j += 2) {
        const field = entries[j];
        const value = entries[j + 1];
        try {
          obj[streamId][field] = parseJSON(value);
        } catch {
          obj[streamId][field] = value;
        }
      }
    }
  }
  return obj;
}
__name(deserialize7, "deserialize7");
var XTrimCommand = class extends Command {
  static {
    __name(this, "XTrimCommand");
  }
  constructor([key, options], opts) {
    const { limit, strategy, threshold, exactness = "~" } = options;
    super(["XTRIM", key, strategy, exactness, threshold, ...limit ? ["LIMIT", limit] : []], opts);
  }
};
var ZAddCommand = class extends Command {
  static {
    __name(this, "ZAddCommand");
  }
  constructor([key, arg1, ...arg2], opts) {
    const command = ["zadd", key];
    if ("nx" in arg1 && arg1.nx) {
      command.push("nx");
    } else if ("xx" in arg1 && arg1.xx) {
      command.push("xx");
    }
    if ("ch" in arg1 && arg1.ch) {
      command.push("ch");
    }
    if ("incr" in arg1 && arg1.incr) {
      command.push("incr");
    }
    if ("lt" in arg1 && arg1.lt) {
      command.push("lt");
    } else if ("gt" in arg1 && arg1.gt) {
      command.push("gt");
    }
    if ("score" in arg1 && "member" in arg1) {
      command.push(arg1.score, arg1.member);
    }
    command.push(...arg2.flatMap(({ score, member }) => [score, member]));
    super(command, opts);
  }
};
var ZCardCommand = class extends Command {
  static {
    __name(this, "ZCardCommand");
  }
  constructor(cmd, opts) {
    super(["zcard", ...cmd], opts);
  }
};
var ZCountCommand = class extends Command {
  static {
    __name(this, "ZCountCommand");
  }
  constructor(cmd, opts) {
    super(["zcount", ...cmd], opts);
  }
};
var ZIncrByCommand = class extends Command {
  static {
    __name(this, "ZIncrByCommand");
  }
  constructor(cmd, opts) {
    super(["zincrby", ...cmd], opts);
  }
};
var ZInterStoreCommand = class extends Command {
  static {
    __name(this, "ZInterStoreCommand");
  }
  constructor([destination, numKeys, keyOrKeys, opts], cmdOpts) {
    const command = ["zinterstore", destination, numKeys];
    if (Array.isArray(keyOrKeys)) {
      command.push(...keyOrKeys);
    } else {
      command.push(keyOrKeys);
    }
    if (opts) {
      if ("weights" in opts && opts.weights) {
        command.push("weights", ...opts.weights);
      } else if ("weight" in opts && typeof opts.weight === "number") {
        command.push("weights", opts.weight);
      }
      if ("aggregate" in opts) {
        command.push("aggregate", opts.aggregate);
      }
    }
    super(command, cmdOpts);
  }
};
var ZLexCountCommand = class extends Command {
  static {
    __name(this, "ZLexCountCommand");
  }
  constructor(cmd, opts) {
    super(["zlexcount", ...cmd], opts);
  }
};
var ZPopMaxCommand = class extends Command {
  static {
    __name(this, "ZPopMaxCommand");
  }
  constructor([key, count], opts) {
    const command = ["zpopmax", key];
    if (typeof count === "number") {
      command.push(count);
    }
    super(command, opts);
  }
};
var ZPopMinCommand = class extends Command {
  static {
    __name(this, "ZPopMinCommand");
  }
  constructor([key, count], opts) {
    const command = ["zpopmin", key];
    if (typeof count === "number") {
      command.push(count);
    }
    super(command, opts);
  }
};
var ZRangeCommand = class extends Command {
  static {
    __name(this, "ZRangeCommand");
  }
  constructor([key, min, max, opts], cmdOpts) {
    const command = ["zrange", key, min, max];
    if (opts?.byScore) {
      command.push("byscore");
    }
    if (opts?.byLex) {
      command.push("bylex");
    }
    if (opts?.rev) {
      command.push("rev");
    }
    if (opts?.count !== void 0 && opts.offset !== void 0) {
      command.push("limit", opts.offset, opts.count);
    }
    if (opts?.withScores) {
      command.push("withscores");
    }
    super(command, cmdOpts);
  }
};
var ZRankCommand = class extends Command {
  static {
    __name(this, "ZRankCommand");
  }
  constructor(cmd, opts) {
    super(["zrank", ...cmd], opts);
  }
};
var ZRemCommand = class extends Command {
  static {
    __name(this, "ZRemCommand");
  }
  constructor(cmd, opts) {
    super(["zrem", ...cmd], opts);
  }
};
var ZRemRangeByLexCommand = class extends Command {
  static {
    __name(this, "ZRemRangeByLexCommand");
  }
  constructor(cmd, opts) {
    super(["zremrangebylex", ...cmd], opts);
  }
};
var ZRemRangeByRankCommand = class extends Command {
  static {
    __name(this, "ZRemRangeByRankCommand");
  }
  constructor(cmd, opts) {
    super(["zremrangebyrank", ...cmd], opts);
  }
};
var ZRemRangeByScoreCommand = class extends Command {
  static {
    __name(this, "ZRemRangeByScoreCommand");
  }
  constructor(cmd, opts) {
    super(["zremrangebyscore", ...cmd], opts);
  }
};
var ZRevRankCommand = class extends Command {
  static {
    __name(this, "ZRevRankCommand");
  }
  constructor(cmd, opts) {
    super(["zrevrank", ...cmd], opts);
  }
};
var ZScanCommand = class extends Command {
  static {
    __name(this, "ZScanCommand");
  }
  constructor([key, cursor, opts], cmdOpts) {
    const command = ["zscan", key, cursor];
    if (opts?.match) {
      command.push("match", opts.match);
    }
    if (typeof opts?.count === "number") {
      command.push("count", opts.count);
    }
    super(command, {
      deserialize: deserializeScanResponse,
      ...cmdOpts
    });
  }
};
var ZScoreCommand = class extends Command {
  static {
    __name(this, "ZScoreCommand");
  }
  constructor(cmd, opts) {
    super(["zscore", ...cmd], opts);
  }
};
var ZUnionCommand = class extends Command {
  static {
    __name(this, "ZUnionCommand");
  }
  constructor([numKeys, keyOrKeys, opts], cmdOpts) {
    const command = ["zunion", numKeys];
    if (Array.isArray(keyOrKeys)) {
      command.push(...keyOrKeys);
    } else {
      command.push(keyOrKeys);
    }
    if (opts) {
      if ("weights" in opts && opts.weights) {
        command.push("weights", ...opts.weights);
      } else if ("weight" in opts && typeof opts.weight === "number") {
        command.push("weights", opts.weight);
      }
      if ("aggregate" in opts) {
        command.push("aggregate", opts.aggregate);
      }
      if (opts.withScores) {
        command.push("withscores");
      }
    }
    super(command, cmdOpts);
  }
};
var ZUnionStoreCommand = class extends Command {
  static {
    __name(this, "ZUnionStoreCommand");
  }
  constructor([destination, numKeys, keyOrKeys, opts], cmdOpts) {
    const command = ["zunionstore", destination, numKeys];
    if (Array.isArray(keyOrKeys)) {
      command.push(...keyOrKeys);
    } else {
      command.push(keyOrKeys);
    }
    if (opts) {
      if ("weights" in opts && opts.weights) {
        command.push("weights", ...opts.weights);
      } else if ("weight" in opts && typeof opts.weight === "number") {
        command.push("weights", opts.weight);
      }
      if ("aggregate" in opts) {
        command.push("aggregate", opts.aggregate);
      }
    }
    super(command, cmdOpts);
  }
};
var ZDiffStoreCommand = class extends Command {
  static {
    __name(this, "ZDiffStoreCommand");
  }
  constructor(cmd, opts) {
    super(["zdiffstore", ...cmd], opts);
  }
};
var ZMScoreCommand = class extends Command {
  static {
    __name(this, "ZMScoreCommand");
  }
  constructor(cmd, opts) {
    const [key, members] = cmd;
    super(["zmscore", key, ...members], opts);
  }
};
var Pipeline = class {
  static {
    __name(this, "Pipeline");
  }
  client;
  commands;
  commandOptions;
  multiExec;
  constructor(opts) {
    this.client = opts.client;
    this.commands = [];
    this.commandOptions = opts.commandOptions;
    this.multiExec = opts.multiExec ?? false;
    if (this.commandOptions?.latencyLogging) {
      const originalExec = this.exec.bind(this);
      this.exec = async (options) => {
        const start = performance.now();
        const result = await (options ? originalExec(options) : originalExec());
        const end = performance.now();
        const loggerResult = (end - start).toFixed(2);
        console.log(
          `Latency for \x1B[38;2;19;185;39m${this.multiExec ? ["MULTI-EXEC"] : ["PIPELINE"].toString().toUpperCase()}\x1B[0m: \x1B[38;2;0;255;255m${loggerResult} ms\x1B[0m`
        );
        return result;
      };
    }
  }
  exec = /* @__PURE__ */ __name(async (options) => {
    if (this.commands.length === 0) {
      throw new Error("Pipeline is empty");
    }
    const path = this.multiExec ? ["multi-exec"] : ["pipeline"];
    const res = await this.client.request({
      path,
      body: Object.values(this.commands).map((c) => c.command)
    });
    return options?.keepErrors ? res.map(({ error, result }, i) => {
      return {
        error,
        result: this.commands[i].deserialize(result)
      };
    }) : res.map(({ error, result }, i) => {
      if (error) {
        throw new UpstashError(
          `Command ${i + 1} [ ${this.commands[i].command[0]} ] failed: ${error}`
        );
      }
      return this.commands[i].deserialize(result);
    });
  }, "exec");
  /**
   * Returns the length of pipeline before the execution
   */
  length() {
    return this.commands.length;
  }
  /**
   * Pushes a command into the pipeline and returns a chainable instance of the
   * pipeline
   */
  chain(command) {
    this.commands.push(command);
    return this;
  }
  /**
   * @see https://redis.io/commands/append
   * @see node_modules/@upstash/redis/docs/commands/string/append.mdx
   */
  append = /* @__PURE__ */ __name((...args) => this.chain(new AppendCommand(args, this.commandOptions)), "append");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arcount
   * @see node_modules/@upstash/redis/docs/commands/array/arcount.mdx
   */
  arcount = /* @__PURE__ */ __name((...args) => this.chain(new ArCountCommand(args, this.commandOptions)), "arcount");
  /**
   * @see https://upstash.com/docs/redis/commands/array/ardel
   * @see node_modules/@upstash/redis/docs/commands/array/ardel.mdx
   */
  ardel = /* @__PURE__ */ __name((...args) => this.chain(new ArDelCommand(args, this.commandOptions)), "ardel");
  /**
   * @see https://upstash.com/docs/redis/commands/array/ardelrange
   * @see node_modules/@upstash/redis/docs/commands/array/ardelrange.mdx
   */
  ardelrange = /* @__PURE__ */ __name((...args) => this.chain(new ArDelRangeCommand(args, this.commandOptions)), "ardelrange");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arget
   * @see node_modules/@upstash/redis/docs/commands/array/arget.mdx
   */
  arget = /* @__PURE__ */ __name((...args) => this.chain(new ArGetCommand(args, this.commandOptions)), "arget");
  /**
   * @see https://upstash.com/docs/redis/commands/array/argetrange
   * @see node_modules/@upstash/redis/docs/commands/array/argetrange.mdx
   */
  argetrange = /* @__PURE__ */ __name((...args) => this.chain(new ArGetRangeCommand(args, this.commandOptions)), "argetrange");
  /**
   * @see https://upstash.com/docs/redis/commands/array/argrep
   * @see node_modules/@upstash/redis/docs/commands/array/argrep.mdx
   */
  argrep = /* @__PURE__ */ __name((key, start, end, opts) => this.chain(new ArGrepCommand([key, start, end, opts], this.commandOptions)), "argrep");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arinfo
   * @see node_modules/@upstash/redis/docs/commands/array/arinfo.mdx
   */
  arinfo = /* @__PURE__ */ __name((...args) => this.chain(new ArInfoCommand(args, this.commandOptions)), "arinfo");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arinsert
   * @see node_modules/@upstash/redis/docs/commands/array/arinsert.mdx
   */
  arinsert = /* @__PURE__ */ __name((key, ...values) => this.chain(new ArInsertCommand([key, ...values], this.commandOptions)), "arinsert");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arlastitems
   * @see node_modules/@upstash/redis/docs/commands/array/arlastitems.mdx
   */
  arlastitems = /* @__PURE__ */ __name((...args) => this.chain(new ArLastItemsCommand(args, this.commandOptions)), "arlastitems");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arlen
   * @see node_modules/@upstash/redis/docs/commands/array/arlen.mdx
   */
  arlen = /* @__PURE__ */ __name((...args) => this.chain(new ArLenCommand(args, this.commandOptions)), "arlen");
  /**
   * @see https://upstash.com/docs/redis/commands/array/armget
   * @see node_modules/@upstash/redis/docs/commands/array/armget.mdx
   */
  armget = /* @__PURE__ */ __name((...args) => this.chain(new ArMGetCommand(args, this.commandOptions)), "armget");
  /**
   * @see https://upstash.com/docs/redis/commands/array/armset
   * @see node_modules/@upstash/redis/docs/commands/array/armset.mdx
   */
  armset = /* @__PURE__ */ __name((key, values) => this.chain(new ArMSetCommand([key, values], this.commandOptions)), "armset");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arnext
   * @see node_modules/@upstash/redis/docs/commands/array/arnext.mdx
   */
  arnext = /* @__PURE__ */ __name((...args) => this.chain(new ArNextCommand(args, this.commandOptions)), "arnext");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arop
   * @see node_modules/@upstash/redis/docs/commands/array/arop.mdx
   */
  arop = /* @__PURE__ */ __name((key, start, end, operation) => this.chain(new ArOpCommand([key, start, end, operation], this.commandOptions)), "arop");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arring
   * @see node_modules/@upstash/redis/docs/commands/array/arring.mdx
   */
  arring = /* @__PURE__ */ __name((key, size, ...values) => this.chain(new ArRingCommand([key, size, ...values], this.commandOptions)), "arring");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arscan
   * @see node_modules/@upstash/redis/docs/commands/array/arscan.mdx
   */
  arscan = /* @__PURE__ */ __name((...args) => this.chain(new ArScanCommand(args, this.commandOptions)), "arscan");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arseek
   * @see node_modules/@upstash/redis/docs/commands/array/arseek.mdx
   */
  arseek = /* @__PURE__ */ __name((...args) => this.chain(new ArSeekCommand(args, this.commandOptions)), "arseek");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arset
   * @see node_modules/@upstash/redis/docs/commands/array/arset.mdx
   */
  arset = /* @__PURE__ */ __name((key, index, ...values) => this.chain(new ArSetCommand([key, index, ...values], this.commandOptions)), "arset");
  /**
   * @see https://redis.io/commands/bitcount
   * @see node_modules/@upstash/redis/docs/commands/bitmap/bitcount.mdx
   */
  bitcount = /* @__PURE__ */ __name((...args) => this.chain(new BitCountCommand(args, this.commandOptions)), "bitcount");
  /**
   * Returns an instance that can be used to execute `BITFIELD` commands on one key.
   *
   * @example
   * ```typescript
   * redis.set("mykey", 0);
   * const result = await redis.pipeline()
   *   .bitfield("mykey")
   *   .set("u4", 0, 16)
   *   .incr("u4", "#1", 1)
   *   .exec();
   * console.log(result); // [[0, 1]]
   * ```
   *
   * @see https://redis.io/commands/bitfield
   */
  bitfield = /* @__PURE__ */ __name((...args) => new BitFieldCommand(args, this.client, this.commandOptions, this.chain.bind(this)), "bitfield");
  /**
   * @see https://redis.io/commands/bitop
   * @see node_modules/@upstash/redis/docs/commands/bitmap/bitop.mdx
   */
  bitop = /* @__PURE__ */ __name((op, destinationKey, sourceKey, ...sourceKeys) => this.chain(
    new BitOpCommand([op, destinationKey, sourceKey, ...sourceKeys], this.commandOptions)
  ), "bitop");
  /**
   * @see https://redis.io/commands/bitpos
   * @see node_modules/@upstash/redis/docs/commands/bitmap/bitpos.mdx
   */
  bitpos = /* @__PURE__ */ __name((...args) => this.chain(new BitPosCommand(args, this.commandOptions)), "bitpos");
  /**
   * @see https://redis.io/commands/client-setinfo
   * @see node_modules/@upstash/redis/docs/commands/connection/client_setinfo.mdx
   */
  clientSetinfo = /* @__PURE__ */ __name((...args) => this.chain(new ClientSetInfoCommand(args, this.commandOptions)), "clientSetinfo");
  /**
   * @see https://redis.io/commands/copy
   */
  copy = /* @__PURE__ */ __name((...args) => this.chain(new CopyCommand(args, this.commandOptions)), "copy");
  /**
   * @see https://redis.io/commands/zdiffstore
   * @see node_modules/@upstash/redis/docs/commands/zset/zdiffstore.mdx
   */
  zdiffstore = /* @__PURE__ */ __name((...args) => this.chain(new ZDiffStoreCommand(args, this.commandOptions)), "zdiffstore");
  /**
   * @see https://redis.io/commands/dbsize
   * @see node_modules/@upstash/redis/docs/commands/server/dbsize.mdx
   */
  dbsize = /* @__PURE__ */ __name(() => this.chain(new DBSizeCommand(this.commandOptions)), "dbsize");
  /**
   * @see https://redis.io/commands/decr
   * @see node_modules/@upstash/redis/docs/commands/string/decr.mdx
   */
  decr = /* @__PURE__ */ __name((...args) => this.chain(new DecrCommand(args, this.commandOptions)), "decr");
  /**
   * @see https://redis.io/commands/decrby
   * @see node_modules/@upstash/redis/docs/commands/string/decrby.mdx
   */
  decrby = /* @__PURE__ */ __name((...args) => this.chain(new DecrByCommand(args, this.commandOptions)), "decrby");
  /**
   * @see https://redis.io/commands/del
   * @see node_modules/@upstash/redis/docs/commands/generic/del.mdx
   */
  del = /* @__PURE__ */ __name((...args) => this.chain(new DelCommand(args, this.commandOptions)), "del");
  /**
   * @see https://redis.io/commands/echo
   * @see node_modules/@upstash/redis/docs/commands/auth/echo.mdx
   */
  echo = /* @__PURE__ */ __name((...args) => this.chain(new EchoCommand(args, this.commandOptions)), "echo");
  /**
   * @see https://redis.io/commands/eval_ro
   * @see node_modules/@upstash/redis/docs/commands/scripts/eval_ro.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  evalRo = /* @__PURE__ */ __name((...args) => this.chain(new EvalROCommand(args, this.commandOptions)), "evalRo");
  /**
   * @see https://redis.io/commands/eval
   * @see node_modules/@upstash/redis/docs/commands/scripts/eval.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  eval = /* @__PURE__ */ __name((...args) => this.chain(new EvalCommand(args, this.commandOptions)), "eval");
  /**
   * @see https://redis.io/commands/evalsha_ro
   * @see node_modules/@upstash/redis/docs/commands/scripts/evalsha_ro.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  evalshaRo = /* @__PURE__ */ __name((...args) => this.chain(new EvalshaROCommand(args, this.commandOptions)), "evalshaRo");
  /**
   * @see https://redis.io/commands/evalsha
   * @see node_modules/@upstash/redis/docs/commands/scripts/evalsha.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  evalsha = /* @__PURE__ */ __name((...args) => this.chain(new EvalshaCommand(args, this.commandOptions)), "evalsha");
  /**
   * @see https://redis.io/commands/exists
   * @see node_modules/@upstash/redis/docs/commands/generic/exists.mdx
   */
  exists = /* @__PURE__ */ __name((...args) => this.chain(new ExistsCommand(args, this.commandOptions)), "exists");
  /**
   * @see https://redis.io/commands/expire
   * @see node_modules/@upstash/redis/docs/commands/generic/expire.mdx
   */
  expire = /* @__PURE__ */ __name((...args) => this.chain(new ExpireCommand(args, this.commandOptions)), "expire");
  /**
   * @see https://redis.io/commands/expireat
   * @see node_modules/@upstash/redis/docs/commands/generic/expireat.mdx
   */
  expireat = /* @__PURE__ */ __name((...args) => this.chain(new ExpireAtCommand(args, this.commandOptions)), "expireat");
  /**
   * @see https://redis.io/commands/flushall
   * @see node_modules/@upstash/redis/docs/commands/server/flushall.mdx
   */
  flushall = /* @__PURE__ */ __name((args) => this.chain(new FlushAllCommand(args, this.commandOptions)), "flushall");
  /**
   * @see https://redis.io/commands/flushdb
   * @see node_modules/@upstash/redis/docs/commands/server/flushdb.mdx
   */
  flushdb = /* @__PURE__ */ __name((...args) => this.chain(new FlushDBCommand(args, this.commandOptions)), "flushdb");
  /**
   * @see https://redis.io/commands/geoadd
   */
  geoadd = /* @__PURE__ */ __name((...args) => this.chain(new GeoAddCommand(args, this.commandOptions)), "geoadd");
  /**
   * @see https://redis.io/commands/geodist
   */
  geodist = /* @__PURE__ */ __name((...args) => this.chain(new GeoDistCommand(args, this.commandOptions)), "geodist");
  /**
   * @see https://redis.io/commands/geopos
   */
  geopos = /* @__PURE__ */ __name((...args) => this.chain(new GeoPosCommand(args, this.commandOptions)), "geopos");
  /**
   * @see https://redis.io/commands/geohash
   */
  geohash = /* @__PURE__ */ __name((...args) => this.chain(new GeoHashCommand(args, this.commandOptions)), "geohash");
  /**
   * @see https://redis.io/commands/geosearch
   */
  geosearch = /* @__PURE__ */ __name((...args) => this.chain(new GeoSearchCommand(args, this.commandOptions)), "geosearch");
  /**
   * @see https://redis.io/commands/geosearchstore
   */
  geosearchstore = /* @__PURE__ */ __name((...args) => this.chain(new GeoSearchStoreCommand(args, this.commandOptions)), "geosearchstore");
  /**
   * @see https://redis.io/commands/get
   * @see node_modules/@upstash/redis/docs/commands/string/get.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  get = /* @__PURE__ */ __name((...args) => this.chain(new GetCommand(args, this.commandOptions)), "get");
  /**
   * @see https://redis.io/commands/getbit
   * @see node_modules/@upstash/redis/docs/commands/bitmap/getbit.mdx
   */
  getbit = /* @__PURE__ */ __name((...args) => this.chain(new GetBitCommand(args, this.commandOptions)), "getbit");
  /**
   * @see https://redis.io/commands/getdel
   * @see node_modules/@upstash/redis/docs/commands/string/getdel.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  getdel = /* @__PURE__ */ __name((...args) => this.chain(new GetDelCommand(args, this.commandOptions)), "getdel");
  /**
   * @see https://redis.io/commands/getex
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  getex = /* @__PURE__ */ __name((...args) => this.chain(new GetExCommand(args, this.commandOptions)), "getex");
  /**
   * @see https://redis.io/commands/getrange
   * @see node_modules/@upstash/redis/docs/commands/string/getrange.mdx
   */
  getrange = /* @__PURE__ */ __name((...args) => this.chain(new GetRangeCommand(args, this.commandOptions)), "getrange");
  /**
   * @see https://redis.io/commands/getset
   * @see node_modules/@upstash/redis/docs/commands/string/getset.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  getset = /* @__PURE__ */ __name((key, value) => this.chain(new GetSetCommand([key, value], this.commandOptions)), "getset");
  /**
   * @see https://redis.io/commands/hdel
   * @see node_modules/@upstash/redis/docs/commands/hash/hdel.mdx
   */
  hdel = /* @__PURE__ */ __name((...args) => this.chain(new HDelCommand(args, this.commandOptions)), "hdel");
  /**
   * @see https://redis.io/commands/hexists
   * @see node_modules/@upstash/redis/docs/commands/hash/hexists.mdx
   */
  hexists = /* @__PURE__ */ __name((...args) => this.chain(new HExistsCommand(args, this.commandOptions)), "hexists");
  /**
   * @see https://redis.io/commands/hexpire
   * @see node_modules/@upstash/redis/docs/commands/hash/hexpire.mdx
   */
  hexpire = /* @__PURE__ */ __name((...args) => this.chain(new HExpireCommand(args, this.commandOptions)), "hexpire");
  /**
   * @see https://redis.io/commands/hexpireat
   * @see node_modules/@upstash/redis/docs/commands/hash/hexpireat.mdx
   */
  hexpireat = /* @__PURE__ */ __name((...args) => this.chain(new HExpireAtCommand(args, this.commandOptions)), "hexpireat");
  /**
   * @see https://redis.io/commands/hexpiretime
   * @see node_modules/@upstash/redis/docs/commands/hash/hexpiretime.mdx
   */
  hexpiretime = /* @__PURE__ */ __name((...args) => this.chain(new HExpireTimeCommand(args, this.commandOptions)), "hexpiretime");
  /**
   * @see https://redis.io/commands/httl
   * @see node_modules/@upstash/redis/docs/commands/hash/httl.mdx
   */
  httl = /* @__PURE__ */ __name((...args) => this.chain(new HTtlCommand(args, this.commandOptions)), "httl");
  /**
   * @see https://redis.io/commands/hpexpire
   * @see node_modules/@upstash/redis/docs/commands/hash/hpexpire.mdx
   */
  hpexpire = /* @__PURE__ */ __name((...args) => this.chain(new HPExpireCommand(args, this.commandOptions)), "hpexpire");
  /**
   * @see https://redis.io/commands/hpexpireat
   * @see node_modules/@upstash/redis/docs/commands/hash/hpexpireat.mdx
   */
  hpexpireat = /* @__PURE__ */ __name((...args) => this.chain(new HPExpireAtCommand(args, this.commandOptions)), "hpexpireat");
  /**
   * @see https://redis.io/commands/hpexpiretime
   * @see node_modules/@upstash/redis/docs/commands/hash/hpexpiretime.mdx
   */
  hpexpiretime = /* @__PURE__ */ __name((...args) => this.chain(new HPExpireTimeCommand(args, this.commandOptions)), "hpexpiretime");
  /**
   * @see https://redis.io/commands/hpttl
   * @see node_modules/@upstash/redis/docs/commands/hash/hpttl.mdx
   */
  hpttl = /* @__PURE__ */ __name((...args) => this.chain(new HPTtlCommand(args, this.commandOptions)), "hpttl");
  /**
   * @see https://redis.io/commands/hpersist
   * @see node_modules/@upstash/redis/docs/commands/hash/hpersist.mdx
   */
  hpersist = /* @__PURE__ */ __name((...args) => this.chain(new HPersistCommand(args, this.commandOptions)), "hpersist");
  /**
   * @see https://redis.io/commands/hget
   * @see node_modules/@upstash/redis/docs/commands/hash/hget.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  hget = /* @__PURE__ */ __name((...args) => this.chain(new HGetCommand(args, this.commandOptions)), "hget");
  /**
   * @see https://redis.io/commands/hgetall
   * @see node_modules/@upstash/redis/docs/commands/hash/hgetall.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, hgetall returns a flat array instead, such as
   * ["text", "123", "version", "1"], and [] for a missing key.
   */
  hgetall = /* @__PURE__ */ __name((...args) => this.chain(new HGetAllCommand(args, this.commandOptions)), "hgetall");
  /**
   * @see https://redis.io/commands/hgetdel
   * @see node_modules/@upstash/redis/docs/commands/hash/hgetdel.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, hgetdel returns an array of values in field order instead,
   * such as ["123", null], with null for each field when the key is missing.
   */
  hgetdel = /* @__PURE__ */ __name((...args) => this.chain(new HGetDelCommand(args, this.commandOptions)), "hgetdel");
  /**
   * @see https://redis.io/commands/hgetex
   * @see node_modules/@upstash/redis/docs/commands/hash/hgetex.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, hgetex returns an array of values in field order instead,
   * such as ["123", null], with null for each field when the key is missing.
   */
  hgetex = /* @__PURE__ */ __name((...args) => this.chain(new HGetExCommand(args, this.commandOptions)), "hgetex");
  /**
   * @see https://redis.io/commands/hincrby
   * @see node_modules/@upstash/redis/docs/commands/hash/hincrby.mdx
   */
  hincrby = /* @__PURE__ */ __name((...args) => this.chain(new HIncrByCommand(args, this.commandOptions)), "hincrby");
  /**
   * @see https://redis.io/commands/hincrbyfloat
   * @see node_modules/@upstash/redis/docs/commands/hash/hincrbyfloat.mdx
   */
  hincrbyfloat = /* @__PURE__ */ __name((...args) => this.chain(new HIncrByFloatCommand(args, this.commandOptions)), "hincrbyfloat");
  /**
   * @see https://redis.io/commands/hkeys
   * @see node_modules/@upstash/redis/docs/commands/hash/hkeys.mdx
   */
  hkeys = /* @__PURE__ */ __name((...args) => this.chain(new HKeysCommand(args, this.commandOptions)), "hkeys");
  /**
   * @see https://redis.io/commands/hlen
   * @see node_modules/@upstash/redis/docs/commands/hash/hlen.mdx
   */
  hlen = /* @__PURE__ */ __name((...args) => this.chain(new HLenCommand(args, this.commandOptions)), "hlen");
  /**
   * @see https://redis.io/commands/hmget
   * @see node_modules/@upstash/redis/docs/commands/hash/hmget.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, hmget returns an array of values in field order instead,
   * such as ["123", null], with null for each field when the key is missing.
   */
  hmget = /* @__PURE__ */ __name((...args) => this.chain(new HMGetCommand(args, this.commandOptions)), "hmget");
  /**
   * @see https://redis.io/commands/hmset
   */
  hmset = /* @__PURE__ */ __name((key, kv) => this.chain(new HMSetCommand([key, kv], this.commandOptions)), "hmset");
  /**
   * @see https://redis.io/commands/hrandfield
   * @see node_modules/@upstash/redis/docs/commands/hash/hrandfield.mdx
   */
  hrandfield = /* @__PURE__ */ __name((key, count, withValues) => this.chain(new HRandFieldCommand([key, count, withValues], this.commandOptions)), "hrandfield");
  /**
   * @see https://redis.io/commands/hscan
   * @see node_modules/@upstash/redis/docs/commands/hash/hscan.mdx
   */
  hscan = /* @__PURE__ */ __name((...args) => this.chain(new HScanCommand(args, this.commandOptions)), "hscan");
  /**
   * @see https://redis.io/commands/hset
   * @see node_modules/@upstash/redis/docs/commands/hash/hset.mdx
   */
  hset = /* @__PURE__ */ __name((key, kv) => this.chain(new HSetCommand([key, kv], this.commandOptions)), "hset");
  /**
   * @see https://redis.io/commands/hsetex
   * @see node_modules/@upstash/redis/docs/commands/hash/hsetex.mdx
   */
  hsetex = /* @__PURE__ */ __name((...args) => this.chain(new HSetExCommand(args, this.commandOptions)), "hsetex");
  /**
   * @see https://redis.io/commands/hsetnx
   * @see node_modules/@upstash/redis/docs/commands/hash/hsetnx.mdx
   */
  hsetnx = /* @__PURE__ */ __name((key, field, value) => this.chain(new HSetNXCommand([key, field, value], this.commandOptions)), "hsetnx");
  /**
   * @see https://redis.io/commands/hstrlen
   * @see node_modules/@upstash/redis/docs/commands/hash/hstrlen.mdx
   */
  hstrlen = /* @__PURE__ */ __name((...args) => this.chain(new HStrLenCommand(args, this.commandOptions)), "hstrlen");
  /**
   * @see https://redis.io/commands/hvals
   * @see node_modules/@upstash/redis/docs/commands/hash/hvals.mdx
   */
  hvals = /* @__PURE__ */ __name((...args) => this.chain(new HValsCommand(args, this.commandOptions)), "hvals");
  /**
   * @see https://redis.io/commands/incr
   * @see node_modules/@upstash/redis/docs/commands/string/incr.mdx
   */
  incr = /* @__PURE__ */ __name((...args) => this.chain(new IncrCommand(args, this.commandOptions)), "incr");
  /**
   * @see https://redis.io/commands/incrby
   * @see node_modules/@upstash/redis/docs/commands/string/incrby.mdx
   */
  incrby = /* @__PURE__ */ __name((...args) => this.chain(new IncrByCommand(args, this.commandOptions)), "incrby");
  /**
   * @see https://redis.io/commands/incrbyfloat
   * @see node_modules/@upstash/redis/docs/commands/string/incrbyfloat.mdx
   */
  incrbyfloat = /* @__PURE__ */ __name((...args) => this.chain(new IncrByFloatCommand(args, this.commandOptions)), "incrbyfloat");
  /**
   * @see https://redis.io/commands/keys
   * @see node_modules/@upstash/redis/docs/commands/generic/keys.mdx
   */
  keys = /* @__PURE__ */ __name((...args) => this.chain(new KeysCommand(args, this.commandOptions)), "keys");
  /**
   * @see https://redis.io/commands/lindex
   * @see node_modules/@upstash/redis/docs/commands/list/lindex.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  lindex = /* @__PURE__ */ __name((...args) => this.chain(new LIndexCommand(args, this.commandOptions)), "lindex");
  /**
   * @see https://redis.io/commands/linsert
   * @see node_modules/@upstash/redis/docs/commands/list/linsert.mdx
   */
  linsert = /* @__PURE__ */ __name((key, direction, pivot, value) => this.chain(new LInsertCommand([key, direction, pivot, value], this.commandOptions)), "linsert");
  /**
   * @see https://redis.io/commands/llen
   * @see node_modules/@upstash/redis/docs/commands/list/llen.mdx
   */
  llen = /* @__PURE__ */ __name((...args) => this.chain(new LLenCommand(args, this.commandOptions)), "llen");
  /**
   * @see https://redis.io/commands/lmove
   * @see node_modules/@upstash/redis/docs/commands/list/lmove.mdx
   */
  lmove = /* @__PURE__ */ __name((...args) => this.chain(new LMoveCommand(args, this.commandOptions)), "lmove");
  /**
   * @see https://redis.io/commands/lpop
   * @see node_modules/@upstash/redis/docs/commands/list/lpop.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  lpop = /* @__PURE__ */ __name((...args) => this.chain(new LPopCommand(args, this.commandOptions)), "lpop");
  /**
   * @see https://redis.io/commands/lmpop
   */
  lmpop = /* @__PURE__ */ __name((...args) => this.chain(new LmPopCommand(args, this.commandOptions)), "lmpop");
  /**
   * @see https://redis.io/commands/lpos
   * @see node_modules/@upstash/redis/docs/commands/list/lpos.mdx
   */
  lpos = /* @__PURE__ */ __name((...args) => this.chain(new LPosCommand(args, this.commandOptions)), "lpos");
  /**
   * @see https://redis.io/commands/lpush
   * @see node_modules/@upstash/redis/docs/commands/list/lpush.mdx
   */
  lpush = /* @__PURE__ */ __name((key, ...elements) => this.chain(new LPushCommand([key, ...elements], this.commandOptions)), "lpush");
  /**
   * @see https://redis.io/commands/lpushx
   * @see node_modules/@upstash/redis/docs/commands/list/lpushx.mdx
   */
  lpushx = /* @__PURE__ */ __name((key, ...elements) => this.chain(new LPushXCommand([key, ...elements], this.commandOptions)), "lpushx");
  /**
   * @see https://redis.io/commands/lrange
   * @see node_modules/@upstash/redis/docs/commands/list/lrange.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  lrange = /* @__PURE__ */ __name((...args) => this.chain(new LRangeCommand(args, this.commandOptions)), "lrange");
  /**
   * @see https://redis.io/commands/lrem
   * @see node_modules/@upstash/redis/docs/commands/list/lrem.mdx
   */
  lrem = /* @__PURE__ */ __name((key, count, value) => this.chain(new LRemCommand([key, count, value], this.commandOptions)), "lrem");
  /**
   * @see https://redis.io/commands/lset
   * @see node_modules/@upstash/redis/docs/commands/list/lset.mdx
   */
  lset = /* @__PURE__ */ __name((key, index, value) => this.chain(new LSetCommand([key, index, value], this.commandOptions)), "lset");
  /**
   * @see https://redis.io/commands/ltrim
   * @see node_modules/@upstash/redis/docs/commands/list/ltrim.mdx
   */
  ltrim = /* @__PURE__ */ __name((...args) => this.chain(new LTrimCommand(args, this.commandOptions)), "ltrim");
  /**
   * @see https://redis.io/commands/mget
   * @see node_modules/@upstash/redis/docs/commands/string/mget.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  mget = /* @__PURE__ */ __name((...args) => this.chain(new MGetCommand(args, this.commandOptions)), "mget");
  /**
   * @see https://redis.io/commands/mset
   * @see node_modules/@upstash/redis/docs/commands/string/mset.mdx
   */
  mset = /* @__PURE__ */ __name((kv) => this.chain(new MSetCommand([kv], this.commandOptions)), "mset");
  /**
   * @see https://redis.io/commands/msetnx
   * @see node_modules/@upstash/redis/docs/commands/string/msetnx.mdx
   */
  msetnx = /* @__PURE__ */ __name((kv) => this.chain(new MSetNXCommand([kv], this.commandOptions)), "msetnx");
  /**
   * @see https://redis.io/commands/persist
   * @see node_modules/@upstash/redis/docs/commands/generic/persist.mdx
   */
  persist = /* @__PURE__ */ __name((...args) => this.chain(new PersistCommand(args, this.commandOptions)), "persist");
  /**
   * @see https://redis.io/commands/pexpire
   * @see node_modules/@upstash/redis/docs/commands/generic/pexpire.mdx
   */
  pexpire = /* @__PURE__ */ __name((...args) => this.chain(new PExpireCommand(args, this.commandOptions)), "pexpire");
  /**
   * @see https://redis.io/commands/pexpireat
   * @see node_modules/@upstash/redis/docs/commands/generic/pexpireat.mdx
   */
  pexpireat = /* @__PURE__ */ __name((...args) => this.chain(new PExpireAtCommand(args, this.commandOptions)), "pexpireat");
  /**
   * @see https://redis.io/commands/pfadd
   */
  pfadd = /* @__PURE__ */ __name((...args) => this.chain(new PfAddCommand(args, this.commandOptions)), "pfadd");
  /**
   * @see https://redis.io/commands/pfcount
   */
  pfcount = /* @__PURE__ */ __name((...args) => this.chain(new PfCountCommand(args, this.commandOptions)), "pfcount");
  /**
   * @see https://redis.io/commands/pfmerge
   */
  pfmerge = /* @__PURE__ */ __name((...args) => this.chain(new PfMergeCommand(args, this.commandOptions)), "pfmerge");
  /**
   * @see https://redis.io/commands/ping
   * @see node_modules/@upstash/redis/docs/commands/auth/ping.mdx
   */
  ping = /* @__PURE__ */ __name((args) => this.chain(new PingCommand(args, this.commandOptions)), "ping");
  /**
   * @see https://redis.io/commands/psetex
   */
  psetex = /* @__PURE__ */ __name((key, ttl, value) => this.chain(new PSetEXCommand([key, ttl, value], this.commandOptions)), "psetex");
  /**
   * @see https://redis.io/commands/pttl
   * @see node_modules/@upstash/redis/docs/commands/generic/pttl.mdx
   */
  pttl = /* @__PURE__ */ __name((...args) => this.chain(new PTtlCommand(args, this.commandOptions)), "pttl");
  /**
   * @see https://redis.io/commands/publish
   * @see node_modules/@upstash/redis/docs/commands/pubsub/publish.mdx
   */
  publish = /* @__PURE__ */ __name((...args) => this.chain(new PublishCommand(args, this.commandOptions)), "publish");
  /**
   * @see https://redis.io/commands/randomkey
   * @see node_modules/@upstash/redis/docs/commands/generic/randomkey.mdx
   */
  randomkey = /* @__PURE__ */ __name(() => this.chain(new RandomKeyCommand(this.commandOptions)), "randomkey");
  /**
   * @see https://redis.io/commands/rename
   * @see node_modules/@upstash/redis/docs/commands/generic/rename.mdx
   */
  rename = /* @__PURE__ */ __name((...args) => this.chain(new RenameCommand(args, this.commandOptions)), "rename");
  /**
   * @see https://redis.io/commands/renamenx
   * @see node_modules/@upstash/redis/docs/commands/generic/renamenx.mdx
   */
  renamenx = /* @__PURE__ */ __name((...args) => this.chain(new RenameNXCommand(args, this.commandOptions)), "renamenx");
  /**
   * @see https://redis.io/commands/rpop
   * @see node_modules/@upstash/redis/docs/commands/list/rpop.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  rpop = /* @__PURE__ */ __name((...args) => this.chain(new RPopCommand(args, this.commandOptions)), "rpop");
  /**
   * @see https://redis.io/commands/rpush
   * @see node_modules/@upstash/redis/docs/commands/list/rpush.mdx
   */
  rpush = /* @__PURE__ */ __name((key, ...elements) => this.chain(new RPushCommand([key, ...elements], this.commandOptions)), "rpush");
  /**
   * @see https://redis.io/commands/rpushx
   * @see node_modules/@upstash/redis/docs/commands/list/rpushx.mdx
   */
  rpushx = /* @__PURE__ */ __name((key, ...elements) => this.chain(new RPushXCommand([key, ...elements], this.commandOptions)), "rpushx");
  /**
   * @see https://redis.io/commands/sadd
   * @see node_modules/@upstash/redis/docs/commands/set/sadd.mdx
   */
  sadd = /* @__PURE__ */ __name((key, member, ...members) => this.chain(new SAddCommand([key, member, ...members], this.commandOptions)), "sadd");
  /**
   * @see https://redis.io/commands/scan
   * @see node_modules/@upstash/redis/docs/commands/generic/scan.mdx
   */
  scan = /* @__PURE__ */ __name((...args) => this.chain(new ScanCommand(args, this.commandOptions)), "scan");
  /**
   * @see https://redis.io/commands/scard
   * @see node_modules/@upstash/redis/docs/commands/set/scard.mdx
   */
  scard = /* @__PURE__ */ __name((...args) => this.chain(new SCardCommand(args, this.commandOptions)), "scard");
  /**
   * @see https://redis.io/commands/script-exists
   * @see node_modules/@upstash/redis/docs/commands/scripts/script_exists.mdx
   */
  scriptExists = /* @__PURE__ */ __name((...args) => this.chain(new ScriptExistsCommand(args, this.commandOptions)), "scriptExists");
  /**
   * @see https://redis.io/commands/script-flush
   * @see node_modules/@upstash/redis/docs/commands/scripts/script_flush.mdx
   */
  scriptFlush = /* @__PURE__ */ __name((...args) => this.chain(new ScriptFlushCommand(args, this.commandOptions)), "scriptFlush");
  /**
   * @see https://redis.io/commands/script-load
   * @see node_modules/@upstash/redis/docs/commands/scripts/script_load.mdx
   */
  scriptLoad = /* @__PURE__ */ __name((...args) => this.chain(new ScriptLoadCommand(args, this.commandOptions)), "scriptLoad");
  /*)*
   * @see https://redis.io/commands/sdiff
   * @see node_modules/@upstash/redis/docs/commands/set/sdiff.mdx
   */
  sdiff = /* @__PURE__ */ __name((...args) => this.chain(new SDiffCommand(args, this.commandOptions)), "sdiff");
  /**
   * @see https://redis.io/commands/sdiffstore
   * @see node_modules/@upstash/redis/docs/commands/set/sdiffstore.mdx
   */
  sdiffstore = /* @__PURE__ */ __name((...args) => this.chain(new SDiffStoreCommand(args, this.commandOptions)), "sdiffstore");
  /**
   * @see https://redis.io/commands/set
   * @see node_modules/@upstash/redis/docs/commands/string/set.mdx
   */
  set = /* @__PURE__ */ __name((key, value, opts) => this.chain(new SetCommand([key, value, opts], this.commandOptions)), "set");
  /**
   * @see https://redis.io/commands/setbit
   * @see node_modules/@upstash/redis/docs/commands/bitmap/setbit.mdx
   */
  setbit = /* @__PURE__ */ __name((...args) => this.chain(new SetBitCommand(args, this.commandOptions)), "setbit");
  /**
   * @see https://redis.io/commands/setex
   */
  setex = /* @__PURE__ */ __name((key, ttl, value) => this.chain(new SetExCommand([key, ttl, value], this.commandOptions)), "setex");
  /**
   * @see https://redis.io/commands/setnx
   */
  setnx = /* @__PURE__ */ __name((key, value) => this.chain(new SetNxCommand([key, value], this.commandOptions)), "setnx");
  /**
   * @see https://redis.io/commands/setrange
   * @see node_modules/@upstash/redis/docs/commands/string/setrange.mdx
   */
  setrange = /* @__PURE__ */ __name((...args) => this.chain(new SetRangeCommand(args, this.commandOptions)), "setrange");
  /**
   * @see https://redis.io/commands/sinter
   * @see node_modules/@upstash/redis/docs/commands/set/sinter.mdx
   */
  sinter = /* @__PURE__ */ __name((...args) => this.chain(new SInterCommand(args, this.commandOptions)), "sinter");
  /**
   * @see https://redis.io/commands/sintercard
   */
  sintercard = /* @__PURE__ */ __name((...args) => this.chain(new SInterCardCommand(args, this.commandOptions)), "sintercard");
  /**
   * @see https://redis.io/commands/sinterstore
   * @see node_modules/@upstash/redis/docs/commands/set/sinterstore.mdx
   */
  sinterstore = /* @__PURE__ */ __name((...args) => this.chain(new SInterStoreCommand(args, this.commandOptions)), "sinterstore");
  /**
   * @see https://redis.io/commands/sismember
   * @see node_modules/@upstash/redis/docs/commands/set/sismember.mdx
   */
  sismember = /* @__PURE__ */ __name((key, member) => this.chain(new SIsMemberCommand([key, member], this.commandOptions)), "sismember");
  /**
   * @see https://redis.io/commands/smembers
   * @see node_modules/@upstash/redis/docs/commands/set/smembers.mdx
   */
  smembers = /* @__PURE__ */ __name((...args) => this.chain(new SMembersCommand(args, this.commandOptions)), "smembers");
  /**
   * @see https://redis.io/commands/smismember
   * @see node_modules/@upstash/redis/docs/commands/set/smismember.mdx
   */
  smismember = /* @__PURE__ */ __name((key, members) => this.chain(new SMIsMemberCommand([key, members], this.commandOptions)), "smismember");
  /**
   * @see https://redis.io/commands/smove
   * @see node_modules/@upstash/redis/docs/commands/set/smove.mdx
   */
  smove = /* @__PURE__ */ __name((source, destination, member) => this.chain(new SMoveCommand([source, destination, member], this.commandOptions)), "smove");
  /**
   * @see https://redis.io/commands/spop
   * @see node_modules/@upstash/redis/docs/commands/set/spop.mdx
   */
  spop = /* @__PURE__ */ __name((...args) => this.chain(new SPopCommand(args, this.commandOptions)), "spop");
  /**
   * @see https://redis.io/commands/srandmember
   * @see node_modules/@upstash/redis/docs/commands/set/srandmember.mdx
   */
  srandmember = /* @__PURE__ */ __name((...args) => this.chain(new SRandMemberCommand(args, this.commandOptions)), "srandmember");
  /**
   * @see https://redis.io/commands/srem
   * @see node_modules/@upstash/redis/docs/commands/set/srem.mdx
   */
  srem = /* @__PURE__ */ __name((key, ...members) => this.chain(new SRemCommand([key, ...members], this.commandOptions)), "srem");
  /**
   * @see https://redis.io/commands/sscan
   * @see node_modules/@upstash/redis/docs/commands/set/sscan.mdx
   */
  sscan = /* @__PURE__ */ __name((...args) => this.chain(new SScanCommand(args, this.commandOptions)), "sscan");
  /**
   * @see https://redis.io/commands/strlen
   * @see node_modules/@upstash/redis/docs/commands/string/strlen.mdx
   */
  strlen = /* @__PURE__ */ __name((...args) => this.chain(new StrLenCommand(args, this.commandOptions)), "strlen");
  /**
   * @see https://redis.io/commands/sunion
   * @see node_modules/@upstash/redis/docs/commands/set/sunion.mdx
   */
  sunion = /* @__PURE__ */ __name((...args) => this.chain(new SUnionCommand(args, this.commandOptions)), "sunion");
  /**
   * @see https://redis.io/commands/sunionstore
   * @see node_modules/@upstash/redis/docs/commands/set/sunionstore.mdx
   */
  sunionstore = /* @__PURE__ */ __name((...args) => this.chain(new SUnionStoreCommand(args, this.commandOptions)), "sunionstore");
  /**
   * @see https://redis.io/commands/time
   */
  time = /* @__PURE__ */ __name(() => this.chain(new TimeCommand(this.commandOptions)), "time");
  /**
   * @see https://redis.io/commands/touch
   * @see node_modules/@upstash/redis/docs/commands/generic/touch.mdx
   */
  touch = /* @__PURE__ */ __name((...args) => this.chain(new TouchCommand(args, this.commandOptions)), "touch");
  /**
   * @see https://redis.io/commands/ttl
   * @see node_modules/@upstash/redis/docs/commands/generic/ttl.mdx
   */
  ttl = /* @__PURE__ */ __name((...args) => this.chain(new TtlCommand(args, this.commandOptions)), "ttl");
  /**
   * @see https://redis.io/commands/type
   * @see node_modules/@upstash/redis/docs/commands/generic/type.mdx
   */
  type = /* @__PURE__ */ __name((...args) => this.chain(new TypeCommand(args, this.commandOptions)), "type");
  /**
   * @see https://redis.io/commands/unlink
   * @see node_modules/@upstash/redis/docs/commands/generic/unlink.mdx
   */
  unlink = /* @__PURE__ */ __name((...args) => this.chain(new UnlinkCommand(args, this.commandOptions)), "unlink");
  /**
   * @see https://redis.io/commands/zadd
   * @see node_modules/@upstash/redis/docs/commands/zset/zadd.mdx
   */
  zadd = /* @__PURE__ */ __name((...args) => {
    if ("score" in args[1]) {
      return this.chain(
        new ZAddCommand([args[0], args[1], ...args.slice(2)], this.commandOptions)
      );
    }
    return this.chain(
      new ZAddCommand(
        [args[0], args[1], ...args.slice(2)],
        this.commandOptions
      )
    );
  }, "zadd");
  /**
   * @see https://redis.io/commands/xadd
   * @see node_modules/@upstash/redis/docs/commands/stream/xadd.mdx
   */
  xadd = /* @__PURE__ */ __name((...args) => this.chain(new XAddCommand(args, this.commandOptions)), "xadd");
  /**
   * @see https://redis.io/commands/xack
   * @see node_modules/@upstash/redis/docs/commands/stream/xack.mdx
   */
  xack = /* @__PURE__ */ __name((...args) => this.chain(new XAckCommand(args, this.commandOptions)), "xack");
  /**
   * @see https://redis.io/commands/xackdel
   * @see node_modules/@upstash/redis/docs/commands/stream/xackdel.mdx
   */
  xackdel = /* @__PURE__ */ __name((...args) => this.chain(new XAckDelCommand(args, this.commandOptions)), "xackdel");
  /**
   * @see https://redis.io/commands/xdel
   * @see node_modules/@upstash/redis/docs/commands/stream/xdel.mdx
   */
  xdel = /* @__PURE__ */ __name((...args) => this.chain(new XDelCommand(args, this.commandOptions)), "xdel");
  /**
   * @see https://redis.io/commands/xdelex
   * @see node_modules/@upstash/redis/docs/commands/stream/xdelex.mdx
   */
  xdelex = /* @__PURE__ */ __name((...args) => this.chain(new XDelExCommand(args, this.commandOptions)), "xdelex");
  /**
   * @see https://redis.io/commands/xgroup
   * @see node_modules/@upstash/redis/docs/commands/stream/xgroup.mdx
   */
  xgroup = /* @__PURE__ */ __name((...args) => this.chain(new XGroupCommand(args, this.commandOptions)), "xgroup");
  /**
   * @see https://redis.io/commands/xread
   * @see node_modules/@upstash/redis/docs/commands/stream/xread.mdx
   */
  xread = /* @__PURE__ */ __name((...args) => this.chain(new XReadCommand(args, this.commandOptions)), "xread");
  /**
   * @see https://redis.io/commands/xreadgroup
   * @see node_modules/@upstash/redis/docs/commands/stream/xreadgroup.mdx
   */
  xreadgroup = /* @__PURE__ */ __name((...args) => this.chain(new XReadGroupCommand(args, this.commandOptions)), "xreadgroup");
  /**
   * @see https://redis.io/commands/xinfo
   * @see node_modules/@upstash/redis/docs/commands/stream/xinfo.mdx
   */
  xinfo = /* @__PURE__ */ __name((...args) => this.chain(new XInfoCommand(args, this.commandOptions)), "xinfo");
  /**
   * @see https://redis.io/commands/xlen
   * @see node_modules/@upstash/redis/docs/commands/stream/xlen.mdx
   */
  xlen = /* @__PURE__ */ __name((...args) => this.chain(new XLenCommand(args, this.commandOptions)), "xlen");
  /**
   * @see https://redis.io/commands/xpending
   * @see node_modules/@upstash/redis/docs/commands/stream/xpending.mdx
   */
  xpending = /* @__PURE__ */ __name((...args) => this.chain(new XPendingCommand(args, this.commandOptions)), "xpending");
  /**
   * @see https://redis.io/commands/xclaim
   * @see node_modules/@upstash/redis/docs/commands/stream/xclaim.mdx
   */
  xclaim = /* @__PURE__ */ __name((...args) => this.chain(new XClaimCommand(args, this.commandOptions)), "xclaim");
  /**
   * @see https://redis.io/commands/xautoclaim
   * @see node_modules/@upstash/redis/docs/commands/stream/xautoclaim.mdx
   */
  xautoclaim = /* @__PURE__ */ __name((...args) => this.chain(new XAutoClaim(args, this.commandOptions)), "xautoclaim");
  /**
   * @see https://redis.io/commands/xtrim
   * @see node_modules/@upstash/redis/docs/commands/stream/xtrim.mdx
   */
  xtrim = /* @__PURE__ */ __name((...args) => this.chain(new XTrimCommand(args, this.commandOptions)), "xtrim");
  /**
   * @see https://redis.io/commands/xrange
   * @see node_modules/@upstash/redis/docs/commands/stream/xrange.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, xrange returns [id, [field, value, ...]] entries instead,
   * such as [["1790341484470-0", ["text", "123"]]], and [] for a missing key.
   */
  xrange = /* @__PURE__ */ __name((...args) => this.chain(new XRangeCommand(args, this.commandOptions)), "xrange");
  /**
   * @see https://redis.io/commands/xrevrange
   * @see node_modules/@upstash/redis/docs/commands/stream/xrevrange.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, xrevrange returns [id, [field, value, ...]] entries instead,
   * such as [["1790341484470-0", ["text", "123"]]], and [] for a missing key.
   */
  xrevrange = /* @__PURE__ */ __name((...args) => this.chain(new XRevRangeCommand(args, this.commandOptions)), "xrevrange");
  /**
   * @see https://redis.io/commands/zcard
   * @see node_modules/@upstash/redis/docs/commands/zset/zcard.mdx
   */
  zcard = /* @__PURE__ */ __name((...args) => this.chain(new ZCardCommand(args, this.commandOptions)), "zcard");
  /**
   * @see https://redis.io/commands/zcount
   * @see node_modules/@upstash/redis/docs/commands/zset/zcount.mdx
   */
  zcount = /* @__PURE__ */ __name((...args) => this.chain(new ZCountCommand(args, this.commandOptions)), "zcount");
  /**
   * @see https://redis.io/commands/zincrby
   * @see node_modules/@upstash/redis/docs/commands/zset/zincrby.mdx
   */
  zincrby = /* @__PURE__ */ __name((key, increment, member) => this.chain(new ZIncrByCommand([key, increment, member], this.commandOptions)), "zincrby");
  /**
   * @see https://redis.io/commands/zinterstore
   * @see node_modules/@upstash/redis/docs/commands/zset/zinterstore.mdx
   */
  zinterstore = /* @__PURE__ */ __name((...args) => this.chain(new ZInterStoreCommand(args, this.commandOptions)), "zinterstore");
  /**
   * @see https://redis.io/commands/zlexcount
   * @see node_modules/@upstash/redis/docs/commands/zset/zlexcount.mdx
   */
  zlexcount = /* @__PURE__ */ __name((...args) => this.chain(new ZLexCountCommand(args, this.commandOptions)), "zlexcount");
  /**
   * @see https://redis.io/commands/zmscore
   * @see node_modules/@upstash/redis/docs/commands/zset/zmscore.mdx
   */
  zmscore = /* @__PURE__ */ __name((...args) => this.chain(new ZMScoreCommand(args, this.commandOptions)), "zmscore");
  /**
   * @see https://redis.io/commands/zpopmax
   * @see node_modules/@upstash/redis/docs/commands/zset/zpopmax.mdx
   */
  zpopmax = /* @__PURE__ */ __name((...args) => this.chain(new ZPopMaxCommand(args, this.commandOptions)), "zpopmax");
  /**
   * @see https://redis.io/commands/zpopmin
   * @see node_modules/@upstash/redis/docs/commands/zset/zpopmin.mdx
   */
  zpopmin = /* @__PURE__ */ __name((...args) => this.chain(new ZPopMinCommand(args, this.commandOptions)), "zpopmin");
  /**
   * @see https://redis.io/commands/zrange
   * @see node_modules/@upstash/redis/docs/commands/zset/zrange.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  zrange = /* @__PURE__ */ __name((...args) => this.chain(new ZRangeCommand(args, this.commandOptions)), "zrange");
  /**
   * @see https://redis.io/commands/zrank
   * @see node_modules/@upstash/redis/docs/commands/zset/zrank.mdx
   */
  zrank = /* @__PURE__ */ __name((key, member) => this.chain(new ZRankCommand([key, member], this.commandOptions)), "zrank");
  /**
   * @see https://redis.io/commands/zrem
   * @see node_modules/@upstash/redis/docs/commands/zset/zrem.mdx
   */
  zrem = /* @__PURE__ */ __name((key, ...members) => this.chain(new ZRemCommand([key, ...members], this.commandOptions)), "zrem");
  /**
   * @see https://redis.io/commands/zremrangebylex
   * @see node_modules/@upstash/redis/docs/commands/zset/zremrangebylex.mdx
   */
  zremrangebylex = /* @__PURE__ */ __name((...args) => this.chain(new ZRemRangeByLexCommand(args, this.commandOptions)), "zremrangebylex");
  /**
   * @see https://redis.io/commands/zremrangebyrank
   * @see node_modules/@upstash/redis/docs/commands/zset/zremrangebyrank.mdx
   */
  zremrangebyrank = /* @__PURE__ */ __name((...args) => this.chain(new ZRemRangeByRankCommand(args, this.commandOptions)), "zremrangebyrank");
  /**
   * @see https://redis.io/commands/zremrangebyscore
   * @see node_modules/@upstash/redis/docs/commands/zset/zremrangebyscore.mdx
   */
  zremrangebyscore = /* @__PURE__ */ __name((...args) => this.chain(new ZRemRangeByScoreCommand(args, this.commandOptions)), "zremrangebyscore");
  /**
   * @see https://redis.io/commands/zrevrank
   * @see node_modules/@upstash/redis/docs/commands/zset/zrevrank.mdx
   */
  zrevrank = /* @__PURE__ */ __name((key, member) => this.chain(new ZRevRankCommand([key, member], this.commandOptions)), "zrevrank");
  /**
   * @see https://redis.io/commands/zscan
   * @see node_modules/@upstash/redis/docs/commands/zset/zscan.mdx
   */
  zscan = /* @__PURE__ */ __name((...args) => this.chain(new ZScanCommand(args, this.commandOptions)), "zscan");
  /**
   * @see https://redis.io/commands/zscore
   * @see node_modules/@upstash/redis/docs/commands/zset/zscore.mdx
   */
  zscore = /* @__PURE__ */ __name((key, member) => this.chain(new ZScoreCommand([key, member], this.commandOptions)), "zscore");
  /**
   * @see https://redis.io/commands/zunionstore
   * @see node_modules/@upstash/redis/docs/commands/zset/zunionstore.mdx
   */
  zunionstore = /* @__PURE__ */ __name((...args) => this.chain(new ZUnionStoreCommand(args, this.commandOptions)), "zunionstore");
  /**
   * @see https://redis.io/commands/zunion
   */
  zunion = /* @__PURE__ */ __name((...args) => this.chain(new ZUnionCommand(args, this.commandOptions)), "zunion");
  /**
   * @see https://redis.io/commands/?group=json
   */
  get json() {
    return {
      /**
       * @see https://redis.io/commands/json.arrappend
       * @see node_modules/@upstash/redis/docs/commands/json/arrappend.mdx
       */
      arrappend: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrAppendCommand(args, this.commandOptions)), "arrappend"),
      /**
       * @see https://redis.io/commands/json.arrindex
       * @see node_modules/@upstash/redis/docs/commands/json/arrindex.mdx
       */
      arrindex: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrIndexCommand(args, this.commandOptions)), "arrindex"),
      /**
       * @see https://redis.io/commands/json.arrinsert
       * @see node_modules/@upstash/redis/docs/commands/json/arrinsert.mdx
       */
      arrinsert: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrInsertCommand(args, this.commandOptions)), "arrinsert"),
      /**
       * @see https://redis.io/commands/json.arrlen
       * @see node_modules/@upstash/redis/docs/commands/json/arrlen.mdx
       */
      arrlen: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrLenCommand(args, this.commandOptions)), "arrlen"),
      /**
       * @see https://redis.io/commands/json.arrpop
       * @see node_modules/@upstash/redis/docs/commands/json/arrpop.mdx
       */
      arrpop: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrPopCommand(args, this.commandOptions)), "arrpop"),
      /**
       * @see https://redis.io/commands/json.arrtrim
       * @see node_modules/@upstash/redis/docs/commands/json/arrtrim.mdx
       */
      arrtrim: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrTrimCommand(args, this.commandOptions)), "arrtrim"),
      /**
       * @see https://redis.io/commands/json.clear
       * @see node_modules/@upstash/redis/docs/commands/json/clear.mdx
       */
      clear: /* @__PURE__ */ __name((...args) => this.chain(new JsonClearCommand(args, this.commandOptions)), "clear"),
      /**
       * @see https://redis.io/commands/json.del
       * @see node_modules/@upstash/redis/docs/commands/json/del.mdx
       */
      del: /* @__PURE__ */ __name((...args) => this.chain(new JsonDelCommand(args, this.commandOptions)), "del"),
      /**
       * @see https://redis.io/commands/json.forget
       * @see node_modules/@upstash/redis/docs/commands/json/forget.mdx
       */
      forget: /* @__PURE__ */ __name((...args) => this.chain(new JsonForgetCommand(args, this.commandOptions)), "forget"),
      /**
       * @see https://redis.io/commands/json.get
       * @see node_modules/@upstash/redis/docs/commands/json/get.mdx
       */
      get: /* @__PURE__ */ __name((...args) => this.chain(new JsonGetCommand(args, this.commandOptions)), "get"),
      /**
       * @see https://redis.io/commands/json.merge
       * @see node_modules/@upstash/redis/docs/commands/json/merge.mdx
       */
      merge: /* @__PURE__ */ __name((...args) => this.chain(new JsonMergeCommand(args, this.commandOptions)), "merge"),
      /**
       * @see https://redis.io/commands/json.mget
       * @see node_modules/@upstash/redis/docs/commands/json/mget.mdx
       */
      mget: /* @__PURE__ */ __name((...args) => this.chain(new JsonMGetCommand(args, this.commandOptions)), "mget"),
      /**
       * @see https://redis.io/commands/json.mset
       * @see node_modules/@upstash/redis/docs/commands/json/mset.mdx
       */
      mset: /* @__PURE__ */ __name((...args) => this.chain(new JsonMSetCommand(args, this.commandOptions)), "mset"),
      /**
       * @see https://redis.io/commands/json.numincrby
       * @see node_modules/@upstash/redis/docs/commands/json/numincrby.mdx
       */
      numincrby: /* @__PURE__ */ __name((...args) => this.chain(new JsonNumIncrByCommand(args, this.commandOptions)), "numincrby"),
      /**
       * @see https://redis.io/commands/json.nummultby
       * @see node_modules/@upstash/redis/docs/commands/json/nummultby.mdx
       */
      nummultby: /* @__PURE__ */ __name((...args) => this.chain(new JsonNumMultByCommand(args, this.commandOptions)), "nummultby"),
      /**
       * @see https://redis.io/commands/json.objkeys
       * @see node_modules/@upstash/redis/docs/commands/json/objkeys.mdx
       */
      objkeys: /* @__PURE__ */ __name((...args) => this.chain(new JsonObjKeysCommand(args, this.commandOptions)), "objkeys"),
      /**
       * @see https://redis.io/commands/json.objlen
       * @see node_modules/@upstash/redis/docs/commands/json/objlen.mdx
       */
      objlen: /* @__PURE__ */ __name((...args) => this.chain(new JsonObjLenCommand(args, this.commandOptions)), "objlen"),
      /**
       * @see https://redis.io/commands/json.resp
       */
      resp: /* @__PURE__ */ __name((...args) => this.chain(new JsonRespCommand(args, this.commandOptions)), "resp"),
      /**
       * @see https://redis.io/commands/json.set
       * @see node_modules/@upstash/redis/docs/commands/json/set.mdx
       */
      set: /* @__PURE__ */ __name((...args) => this.chain(new JsonSetCommand(args, this.commandOptions)), "set"),
      /**
       * @see https://redis.io/commands/json.strappend
       * @see node_modules/@upstash/redis/docs/commands/json/strappend.mdx
       */
      strappend: /* @__PURE__ */ __name((...args) => this.chain(new JsonStrAppendCommand(args, this.commandOptions)), "strappend"),
      /**
       * @see https://redis.io/commands/json.strlen
       * @see node_modules/@upstash/redis/docs/commands/json/strlen.mdx
       */
      strlen: /* @__PURE__ */ __name((...args) => this.chain(new JsonStrLenCommand(args, this.commandOptions)), "strlen"),
      /**
       * @see https://redis.io/commands/json.toggle
       * @see node_modules/@upstash/redis/docs/commands/json/toggle.mdx
       */
      toggle: /* @__PURE__ */ __name((...args) => this.chain(new JsonToggleCommand(args, this.commandOptions)), "toggle"),
      /**
       * @see https://redis.io/commands/json.type
       * @see node_modules/@upstash/redis/docs/commands/json/type.mdx
       */
      type: /* @__PURE__ */ __name((...args) => this.chain(new JsonTypeCommand(args, this.commandOptions)), "type")
    };
  }
  get functions() {
    return {
      /**
       * @see https://redis.io/docs/latest/commands/function-load/
       * @see node_modules/@upstash/redis/docs/commands/functions/load.mdx
       */
      load: /* @__PURE__ */ __name((...args) => this.chain(new FunctionLoadCommand(args, this.commandOptions)), "load"),
      /**
       * @see https://redis.io/docs/latest/commands/function-list/
       * @see node_modules/@upstash/redis/docs/commands/functions/list.mdx
       */
      list: /* @__PURE__ */ __name((...args) => this.chain(new FunctionListCommand(args, this.commandOptions)), "list"),
      /**
       * @see https://redis.io/docs/latest/commands/function-delete/
       * @see node_modules/@upstash/redis/docs/commands/functions/delete.mdx
       */
      delete: /* @__PURE__ */ __name((...args) => this.chain(new FunctionDeleteCommand(args, this.commandOptions)), "delete"),
      /**
       * @see https://redis.io/docs/latest/commands/function-flush/
       * @see node_modules/@upstash/redis/docs/commands/functions/flush.mdx
       */
      flush: /* @__PURE__ */ __name(() => this.chain(new FunctionFlushCommand(this.commandOptions)), "flush"),
      /**
       * @see https://redis.io/docs/latest/commands/function-stats/
       * @see node_modules/@upstash/redis/docs/commands/functions/stats.mdx
       */
      stats: /* @__PURE__ */ __name(() => this.chain(new FunctionStatsCommand(this.commandOptions)), "stats"),
      /**
       * @see https://redis.io/docs/latest/commands/fcall/
       * @see node_modules/@upstash/redis/docs/commands/functions/call.mdx
       */
      call: /* @__PURE__ */ __name((...args) => this.chain(new FCallCommand(args, this.commandOptions)), "call"),
      /**
       * @see https://redis.io/docs/latest/commands/fcall_ro/
       * @see node_modules/@upstash/redis/docs/commands/functions/call_ro.mdx
       */
      callRo: /* @__PURE__ */ __name((...args) => this.chain(new FCallRoCommand(args, this.commandOptions)), "callRo")
    };
  }
};
var MAX_PIPELINE_SIZE = 1e3;
var READ_COMMANDS = /* @__PURE__ */ new Set([
  // Array
  "arcount",
  "arget",
  "argetrange",
  "argrep",
  "arinfo",
  "arlastitems",
  "arlen",
  "armget",
  "arnext",
  "arop",
  "arscan",
  // String
  "get",
  "getrange",
  "mget",
  "strlen",
  // Bit
  "bitcount",
  "bitpos",
  "getbit",
  // Hash
  "hexists",
  "hget",
  "hgetall",
  "hkeys",
  "hlen",
  "hmget",
  "hrandfield",
  "hscan",
  "hstrlen",
  "httl",
  "hvals",
  "hexpiretime",
  "hpexpiretime",
  "hpttl",
  // List
  "lindex",
  "llen",
  "lpos",
  "lrange",
  // Set
  "scard",
  "sdiff",
  "sinter",
  "sintercard",
  "sismember",
  "smembers",
  "smismember",
  "srandmember",
  "sscan",
  "sunion",
  // Sorted set
  "zcard",
  "zcount",
  "zlexcount",
  "zmscore",
  "zrange",
  "zrank",
  "zrevrank",
  "zscan",
  "zscore",
  "zunion",
  // Key metadata
  "exists",
  "type",
  "ttl",
  "pttl",
  "randomkey",
  "touch",
  // HyperLogLog
  "pfcount",
  // Stream
  "xinfo",
  "xlen",
  "xpending",
  "xrange",
  "xread",
  "xrevrange",
  // Geo
  "geodist",
  "geohash",
  "geopos",
  "geosearch",
  // Script / eval
  "scriptExists",
  "evalRo",
  "evalshaRo",
  // Utility
  "dbsize",
  "echo",
  "ping",
  "time",
  "scan",
  "keys",
  // JSON namespace
  "arrindex",
  "arrlen",
  "objkeys",
  "objlen",
  "resp",
  // Functions namespace
  "list",
  "stats",
  "callRo"
]);
var EXCLUDE_COMMANDS = /* @__PURE__ */ new Set([
  "scan",
  "keys",
  "flushdb",
  "flushall",
  "dbsize",
  "hscan",
  "hgetall",
  "hkeys",
  "lrange",
  "sscan",
  "smembers",
  "xrange",
  "xrevrange",
  "zscan",
  "zrange",
  "exec"
]);
function createAutoPipelineProxy(_redis, namespace = "root") {
  const redis2 = _redis;
  if (!redis2.autoPipelineExecutor) {
    redis2.autoPipelineExecutor = new AutoPipelineExecutor(redis2);
  }
  return new Proxy(redis2, {
    get: /* @__PURE__ */ __name((redis22, command) => {
      if (command === "pipelineCounter") {
        return redis22.autoPipelineExecutor.pipelineCounter;
      }
      if (namespace === "root" && command === "json") {
        return createAutoPipelineProxy(redis22, "json");
      }
      if (namespace === "root" && command === "functions") {
        return createAutoPipelineProxy(redis22, "functions");
      }
      if (namespace === "root") {
        const commandInRedisButNotPipeline = command in redis22 && !(command in redis22.autoPipelineExecutor.pipeline);
        const isCommandExcluded = EXCLUDE_COMMANDS.has(command);
        if (commandInRedisButNotPipeline || isCommandExcluded) {
          return redis22[command];
        }
      }
      const pipeline = redis22.autoPipelineExecutor.pipeline;
      const targetFunction = namespace === "json" ? pipeline.json[command] : namespace === "functions" ? pipeline.functions[command] : pipeline[command];
      const isFunction = typeof targetFunction === "function";
      if (isFunction) {
        return (...args) => {
          const commandMode = READ_COMMANDS.has(command) ? "read" : "write";
          return redis22.autoPipelineExecutor.withAutoPipeline(commandMode, (pipeline2) => {
            const targetFunction2 = namespace === "json" ? pipeline2.json[command] : namespace === "functions" ? pipeline2.functions[command] : pipeline2[command];
            targetFunction2(...args);
          });
        };
      }
      return targetFunction;
    }, "get")
  });
}
__name(createAutoPipelineProxy, "createAutoPipelineProxy");
var AutoPipelineExecutor = class {
  static {
    __name(this, "AutoPipelineExecutor");
  }
  pipelinePromises = /* @__PURE__ */ new WeakMap();
  activeReadPipeline = null;
  activeWritePipeline = null;
  readIndex = 0;
  writeIndex = 0;
  redis;
  pipeline;
  // only to make sure that proxy can work
  pipelineCounter = 0;
  // to keep track of how many times a pipeline was executed
  constructor(redis2) {
    this.redis = redis2;
    this.pipeline = redis2.pipeline();
  }
  async withAutoPipeline(commandMode, executeWithPipeline) {
    const isRead = commandMode === "read";
    const activePipeline = isRead ? this.activeReadPipeline : this.activeWritePipeline;
    const pipeline = activePipeline ?? this.redis.pipeline();
    if (!activePipeline) {
      if (isRead) {
        this.activeReadPipeline = pipeline;
        this.readIndex = 0;
      } else {
        this.activeWritePipeline = pipeline;
        this.writeIndex = 0;
      }
    }
    const index = isRead ? this.readIndex++ : this.writeIndex++;
    executeWithPipeline(pipeline);
    if (isRead && this.readIndex >= MAX_PIPELINE_SIZE) {
      this.activeReadPipeline = null;
    } else if (!isRead && this.writeIndex >= MAX_PIPELINE_SIZE) {
      this.activeWritePipeline = null;
    }
    const pipelineDone = this.deferExecution().then(() => {
      if (!this.pipelinePromises.has(pipeline)) {
        const pipelinePromise = pipeline.exec({ keepErrors: true });
        this.pipelineCounter += 1;
        this.pipelinePromises.set(pipeline, pipelinePromise);
        if (this.activeReadPipeline === pipeline) {
          this.activeReadPipeline = null;
        }
        if (this.activeWritePipeline === pipeline) {
          this.activeWritePipeline = null;
        }
      }
      return this.pipelinePromises.get(pipeline);
    });
    const results = await pipelineDone;
    const commandResult = results[index];
    if (commandResult.error) {
      throw new UpstashError(`Command failed: ${commandResult.error}`);
    }
    return commandResult.result;
  }
  async deferExecution() {
    await Promise.resolve();
    await Promise.resolve();
  }
};
var PSubscribeCommand = class extends Command {
  static {
    __name(this, "PSubscribeCommand");
  }
  constructor(cmd, opts) {
    const sseHeaders = {
      Accept: "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    };
    super([], {
      ...opts,
      headers: sseHeaders,
      path: ["psubscribe", ...cmd],
      streamOptions: {
        isStreaming: true,
        onMessage: opts?.streamOptions?.onMessage,
        signal: opts?.streamOptions?.signal
      }
    });
  }
};
var Subscriber = class extends EventTarget {
  static {
    __name(this, "Subscriber");
  }
  subscriptions;
  client;
  listeners;
  opts;
  constructor(client, channels, isPattern = false, opts) {
    super();
    this.client = client;
    this.subscriptions = /* @__PURE__ */ new Map();
    this.listeners = /* @__PURE__ */ new Map();
    this.opts = opts;
    for (const channel of channels) {
      if (isPattern) {
        this.subscribeToPattern(channel);
      } else {
        this.subscribeToChannel(channel);
      }
    }
  }
  subscribeToChannel(channel) {
    const controller = new AbortController();
    const command = new SubscribeCommand([channel], {
      streamOptions: {
        signal: controller.signal,
        onMessage: /* @__PURE__ */ __name((data) => this.handleMessage(data, false), "onMessage")
      }
    });
    command.exec(this.client).catch((error) => {
      if (error.name !== "AbortError") {
        this.dispatchToListeners("error", error);
      }
    });
    this.subscriptions.set(channel, {
      command,
      controller,
      isPattern: false
    });
  }
  subscribeToPattern(pattern) {
    const controller = new AbortController();
    const command = new PSubscribeCommand([pattern], {
      streamOptions: {
        signal: controller.signal,
        onMessage: /* @__PURE__ */ __name((data) => this.handleMessage(data, true), "onMessage")
      }
    });
    command.exec(this.client).catch((error) => {
      if (error.name !== "AbortError") {
        this.dispatchToListeners("error", error);
      }
    });
    this.subscriptions.set(pattern, {
      command,
      controller,
      isPattern: true
    });
  }
  handleMessage(data, isPattern) {
    const messageData = data.replace(/^data:\s*/, "");
    const firstCommaIndex = messageData.indexOf(",");
    const secondCommaIndex = messageData.indexOf(",", firstCommaIndex + 1);
    const thirdCommaIndex = isPattern ? messageData.indexOf(",", secondCommaIndex + 1) : -1;
    if (firstCommaIndex !== -1 && secondCommaIndex !== -1) {
      const type = messageData.slice(0, firstCommaIndex);
      if (isPattern && type === "pmessage" && thirdCommaIndex !== -1) {
        const pattern = messageData.slice(firstCommaIndex + 1, secondCommaIndex);
        const channel = messageData.slice(secondCommaIndex + 1, thirdCommaIndex);
        const messageStr = messageData.slice(thirdCommaIndex + 1);
        try {
          const message = this.opts?.automaticDeserialization === false ? messageStr : JSON.parse(messageStr);
          this.dispatchToListeners("pmessage", { pattern, channel, message });
          this.dispatchToListeners(`pmessage:${pattern}`, { pattern, channel, message });
        } catch (error) {
          this.dispatchToListeners("error", new Error(`Failed to parse message: ${error}`));
        }
      } else {
        const channel = messageData.slice(firstCommaIndex + 1, secondCommaIndex);
        const messageStr = messageData.slice(secondCommaIndex + 1);
        try {
          if (type === "subscribe" || type === "psubscribe" || type === "unsubscribe" || type === "punsubscribe") {
            const count = Number.parseInt(messageStr);
            this.dispatchToListeners(type, count);
          } else {
            const message = this.opts?.automaticDeserialization === false ? messageStr : parseWithTryCatch(messageStr);
            this.dispatchToListeners(type, { channel, message });
            this.dispatchToListeners(`${type}:${channel}`, { channel, message });
          }
        } catch (error) {
          this.dispatchToListeners("error", new Error(`Failed to parse message: ${error}`));
        }
      }
    }
  }
  dispatchToListeners(type, data) {
    const listeners = this.listeners.get(type);
    if (listeners) {
      for (const listener of listeners) {
        listener(data);
      }
    }
  }
  on(type, listener) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, /* @__PURE__ */ new Set());
    }
    this.listeners.get(type)?.add(listener);
  }
  removeAllListeners() {
    this.listeners.clear();
  }
  async unsubscribe(channels) {
    if (channels) {
      for (const channel of channels) {
        const subscription = this.subscriptions.get(channel);
        if (subscription) {
          try {
            subscription.controller.abort();
          } catch {
          }
          this.subscriptions.delete(channel);
        }
      }
    } else {
      for (const subscription of this.subscriptions.values()) {
        try {
          subscription.controller.abort();
        } catch {
        }
      }
      this.subscriptions.clear();
      this.removeAllListeners();
    }
  }
  getSubscribedChannels() {
    return [...this.subscriptions.keys()];
  }
};
var SubscribeCommand = class extends Command {
  static {
    __name(this, "SubscribeCommand");
  }
  constructor(cmd, opts) {
    const sseHeaders = {
      Accept: "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    };
    super([], {
      ...opts,
      headers: sseHeaders,
      path: ["subscribe", ...cmd],
      streamOptions: {
        isStreaming: true,
        onMessage: opts?.streamOptions?.onMessage,
        signal: opts?.streamOptions?.signal
      }
    });
  }
};
var parseWithTryCatch = /* @__PURE__ */ __name((str) => {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}, "parseWithTryCatch");
var Script = class {
  static {
    __name(this, "Script");
  }
  script;
  /**
   * @deprecated This property is initialized to an empty string and will be set in the init method
   * asynchronously. Do not use this property immidiately after the constructor.
   *
   * This property is only exposed for backwards compatibility and will be removed in the
   * future major release.
   */
  sha1;
  initPromise;
  redis;
  constructor(redis2, script) {
    this.redis = redis2;
    this.script = script;
    this.sha1 = "";
    void this.init(script);
  }
  /**
   * Initialize the script by computing its SHA-1 hash.
   */
  init(script) {
    if (!this.initPromise) {
      this.initPromise = this.digest(script).then((sha1) => {
        this.sha1 = sha1;
      });
    }
    return this.initPromise;
  }
  /**
   * Send an `EVAL` command to redis.
   */
  async eval(keys, args) {
    await this.init(this.script);
    return await this.redis.eval(this.script, keys, args);
  }
  /**
   * Calculates the sha1 hash of the script and then calls `EVALSHA`.
   */
  async evalsha(keys, args) {
    await this.init(this.script);
    return await this.redis.evalsha(this.sha1, keys, args);
  }
  /**
   * Optimistically try to run `EVALSHA` first.
   * If the script is not loaded in redis, it will fall back and try again with `EVAL`.
   *
   * Following calls will be able to use the cached script
   */
  async exec(keys, args) {
    await this.init(this.script);
    const res = await this.redis.evalsha(this.sha1, keys, args).catch(async (error) => {
      if (error instanceof Error && error.message.toLowerCase().includes("noscript")) {
        return await this.redis.eval(this.script, keys, args);
      }
      throw error;
    });
    return res;
  }
  /**
   * Compute the sha1 hash of the script and return its hex representation.
   */
  async digest(s) {
    const data = new TextEncoder().encode(s);
    const hashBuffer = await subtle.digest("SHA-1", data);
    const hashArray = [...new Uint8Array(hashBuffer)];
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
};
var ScriptRO = class {
  static {
    __name(this, "ScriptRO");
  }
  script;
  /**
   * @deprecated This property is initialized to an empty string and will be set in the init method
   * asynchronously. Do not use this property immidiately after the constructor.
   *
   * This property is only exposed for backwards compatibility and will be removed in the
   * future major release.
   */
  sha1;
  initPromise;
  redis;
  constructor(redis2, script) {
    this.redis = redis2;
    this.sha1 = "";
    this.script = script;
    void this.init(script);
  }
  init(script) {
    if (!this.initPromise) {
      this.initPromise = this.digest(script).then((sha1) => {
        this.sha1 = sha1;
      });
    }
    return this.initPromise;
  }
  /**
   * Send an `EVAL_RO` command to redis.
   */
  async evalRo(keys, args) {
    await this.init(this.script);
    return await this.redis.evalRo(this.script, keys, args);
  }
  /**
   * Calculates the sha1 hash of the script and then calls `EVALSHA_RO`.
   */
  async evalshaRo(keys, args) {
    await this.init(this.script);
    return await this.redis.evalshaRo(this.sha1, keys, args);
  }
  /**
   * Optimistically try to run `EVALSHA_RO` first.
   * If the script is not loaded in redis, it will fall back and try again with `EVAL_RO`.
   *
   * Following calls will be able to use the cached script
   */
  async exec(keys, args) {
    await this.init(this.script);
    const res = await this.redis.evalshaRo(this.sha1, keys, args).catch(async (error) => {
      if (error instanceof Error && error.message.toLowerCase().includes("noscript")) {
        return await this.redis.evalRo(this.script, keys, args);
      }
      throw error;
    });
    return res;
  }
  /**
   * Compute the sha1 hash of the script and return its hex representation.
   */
  async digest(s) {
    const data = new TextEncoder().encode(s);
    const hashBuffer = await subtle.digest("SHA-1", data);
    const hashArray = [...new Uint8Array(hashBuffer)];
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
};
var Redis = class {
  static {
    __name(this, "Redis");
  }
  client;
  opts;
  enableTelemetry;
  enableAutoPipelining;
  /**
   * Create a new redis client
   *
   * @example
   * ```typescript
   * const redis = new Redis({
   *  url: "<UPSTASH_REDIS_REST_URL>",
   *  token: "<UPSTASH_REDIS_REST_TOKEN>",
   * });
   * ```
   */
  constructor(client, opts) {
    this.client = client;
    this.opts = opts;
    this.enableTelemetry = opts?.enableTelemetry ?? true;
    if (opts?.readYourWrites === false) {
      this.client.readYourWrites = false;
    }
    this.enableAutoPipelining = opts?.enableAutoPipelining ?? true;
  }
  get readYourWritesSyncToken() {
    return this.client.upstashSyncToken;
  }
  set readYourWritesSyncToken(session) {
    this.client.upstashSyncToken = session;
  }
  get json() {
    return {
      /**
       * @see https://redis.io/commands/json.arrappend
       * @see node_modules/@upstash/redis/docs/commands/json/arrappend.mdx
       */
      arrappend: /* @__PURE__ */ __name((...args) => new JsonArrAppendCommand(args, this.opts).exec(this.client), "arrappend"),
      /**
       * @see https://redis.io/commands/json.arrindex
       * @see node_modules/@upstash/redis/docs/commands/json/arrindex.mdx
       */
      arrindex: /* @__PURE__ */ __name((...args) => new JsonArrIndexCommand(args, this.opts).exec(this.client), "arrindex"),
      /**
       * @see https://redis.io/commands/json.arrinsert
       * @see node_modules/@upstash/redis/docs/commands/json/arrinsert.mdx
       */
      arrinsert: /* @__PURE__ */ __name((...args) => new JsonArrInsertCommand(args, this.opts).exec(this.client), "arrinsert"),
      /**
       * @see https://redis.io/commands/json.arrlen
       * @see node_modules/@upstash/redis/docs/commands/json/arrlen.mdx
       */
      arrlen: /* @__PURE__ */ __name((...args) => new JsonArrLenCommand(args, this.opts).exec(this.client), "arrlen"),
      /**
       * @see https://redis.io/commands/json.arrpop
       * @see node_modules/@upstash/redis/docs/commands/json/arrpop.mdx
       */
      arrpop: /* @__PURE__ */ __name((...args) => new JsonArrPopCommand(args, this.opts).exec(this.client), "arrpop"),
      /**
       * @see https://redis.io/commands/json.arrtrim
       * @see node_modules/@upstash/redis/docs/commands/json/arrtrim.mdx
       */
      arrtrim: /* @__PURE__ */ __name((...args) => new JsonArrTrimCommand(args, this.opts).exec(this.client), "arrtrim"),
      /**
       * @see https://redis.io/commands/json.clear
       * @see node_modules/@upstash/redis/docs/commands/json/clear.mdx
       */
      clear: /* @__PURE__ */ __name((...args) => new JsonClearCommand(args, this.opts).exec(this.client), "clear"),
      /**
       * @see https://redis.io/commands/json.del
       * @see node_modules/@upstash/redis/docs/commands/json/del.mdx
       */
      del: /* @__PURE__ */ __name((...args) => new JsonDelCommand(args, this.opts).exec(this.client), "del"),
      /**
       * @see https://redis.io/commands/json.forget
       * @see node_modules/@upstash/redis/docs/commands/json/forget.mdx
       */
      forget: /* @__PURE__ */ __name((...args) => new JsonForgetCommand(args, this.opts).exec(this.client), "forget"),
      /**
       * @see https://redis.io/commands/json.get
       * @see node_modules/@upstash/redis/docs/commands/json/get.mdx
       */
      get: /* @__PURE__ */ __name((...args) => new JsonGetCommand(args, this.opts).exec(this.client), "get"),
      /**
       * @see https://redis.io/commands/json.merge
       * @see node_modules/@upstash/redis/docs/commands/json/merge.mdx
       */
      merge: /* @__PURE__ */ __name((...args) => new JsonMergeCommand(args, this.opts).exec(this.client), "merge"),
      /**
       * @see https://redis.io/commands/json.mget
       * @see node_modules/@upstash/redis/docs/commands/json/mget.mdx
       */
      mget: /* @__PURE__ */ __name((...args) => new JsonMGetCommand(args, this.opts).exec(this.client), "mget"),
      /**
       * @see https://redis.io/commands/json.mset
       * @see node_modules/@upstash/redis/docs/commands/json/mset.mdx
       */
      mset: /* @__PURE__ */ __name((...args) => new JsonMSetCommand(args, this.opts).exec(this.client), "mset"),
      /**
       * @see https://redis.io/commands/json.numincrby
       * @see node_modules/@upstash/redis/docs/commands/json/numincrby.mdx
       */
      numincrby: /* @__PURE__ */ __name((...args) => new JsonNumIncrByCommand(args, this.opts).exec(this.client), "numincrby"),
      /**
       * @see https://redis.io/commands/json.nummultby
       * @see node_modules/@upstash/redis/docs/commands/json/nummultby.mdx
       */
      nummultby: /* @__PURE__ */ __name((...args) => new JsonNumMultByCommand(args, this.opts).exec(this.client), "nummultby"),
      /**
       * @see https://redis.io/commands/json.objkeys
       * @see node_modules/@upstash/redis/docs/commands/json/objkeys.mdx
       */
      objkeys: /* @__PURE__ */ __name((...args) => new JsonObjKeysCommand(args, this.opts).exec(this.client), "objkeys"),
      /**
       * @see https://redis.io/commands/json.objlen
       * @see node_modules/@upstash/redis/docs/commands/json/objlen.mdx
       */
      objlen: /* @__PURE__ */ __name((...args) => new JsonObjLenCommand(args, this.opts).exec(this.client), "objlen"),
      /**
       * @see https://redis.io/commands/json.resp
       */
      resp: /* @__PURE__ */ __name((...args) => new JsonRespCommand(args, this.opts).exec(this.client), "resp"),
      /**
       * @see https://redis.io/commands/json.set
       * @see node_modules/@upstash/redis/docs/commands/json/set.mdx
       */
      set: /* @__PURE__ */ __name((...args) => new JsonSetCommand(args, this.opts).exec(this.client), "set"),
      /**
       * @see https://redis.io/commands/json.strappend
       * @see node_modules/@upstash/redis/docs/commands/json/strappend.mdx
       */
      strappend: /* @__PURE__ */ __name((...args) => new JsonStrAppendCommand(args, this.opts).exec(this.client), "strappend"),
      /**
       * @see https://redis.io/commands/json.strlen
       * @see node_modules/@upstash/redis/docs/commands/json/strlen.mdx
       */
      strlen: /* @__PURE__ */ __name((...args) => new JsonStrLenCommand(args, this.opts).exec(this.client), "strlen"),
      /**
       * @see https://redis.io/commands/json.toggle
       * @see node_modules/@upstash/redis/docs/commands/json/toggle.mdx
       */
      toggle: /* @__PURE__ */ __name((...args) => new JsonToggleCommand(args, this.opts).exec(this.client), "toggle"),
      /**
       * @see https://redis.io/commands/json.type
       * @see node_modules/@upstash/redis/docs/commands/json/type.mdx
       */
      type: /* @__PURE__ */ __name((...args) => new JsonTypeCommand(args, this.opts).exec(this.client), "type")
    };
  }
  get functions() {
    return {
      /**
       * @see https://redis.io/docs/latest/commands/function-load/
       * @see node_modules/@upstash/redis/docs/commands/functions/load.mdx
       */
      load: /* @__PURE__ */ __name((...args) => new FunctionLoadCommand(args, this.opts).exec(this.client), "load"),
      /**
       * @see https://redis.io/docs/latest/commands/function-list/
       * @see node_modules/@upstash/redis/docs/commands/functions/list.mdx
       */
      list: /* @__PURE__ */ __name((...args) => new FunctionListCommand(args, this.opts).exec(this.client), "list"),
      /**
       * @see https://redis.io/docs/latest/commands/function-delete/
       * @see node_modules/@upstash/redis/docs/commands/functions/delete.mdx
       */
      delete: /* @__PURE__ */ __name((...args) => new FunctionDeleteCommand(args, this.opts).exec(this.client), "delete"),
      /**
       * @see https://redis.io/docs/latest/commands/function-flush/
       * @see node_modules/@upstash/redis/docs/commands/functions/flush.mdx
       */
      flush: /* @__PURE__ */ __name(() => new FunctionFlushCommand(this.opts).exec(this.client), "flush"),
      /**
       * @see https://redis.io/docs/latest/commands/function-stats/
       * @see node_modules/@upstash/redis/docs/commands/functions/stats.mdx
       *
       * Note: `running_script` field is not supported and therefore not included in the type.
       */
      stats: /* @__PURE__ */ __name(() => new FunctionStatsCommand(this.opts).exec(this.client), "stats"),
      /**
       * @see https://redis.io/docs/latest/commands/fcall/
       * @see node_modules/@upstash/redis/docs/commands/functions/call.mdx
       */
      call: /* @__PURE__ */ __name((...args) => new FCallCommand(args, this.opts).exec(this.client), "call"),
      /**
       * @see https://redis.io/docs/latest/commands/fcall_ro/
       * @see node_modules/@upstash/redis/docs/commands/functions/call_ro.mdx
       */
      callRo: /* @__PURE__ */ __name((...args) => new FCallRoCommand(args, this.opts).exec(this.client), "callRo")
    };
  }
  /**
   * Wrap a new middleware around the HTTP client.
   */
  use = /* @__PURE__ */ __name((middleware) => {
    const makeRequest = this.client.request.bind(this.client);
    this.client.request = (req) => middleware(req, makeRequest);
  }, "use");
  /**
   * Technically this is not private, we can hide it from intellisense by doing this
   */
  addTelemetry = /* @__PURE__ */ __name((telemetry) => {
    if (!this.enableTelemetry) {
      return;
    }
    try {
      this.client.mergeTelemetry(telemetry);
    } catch {
    }
  }, "addTelemetry");
  /**
   * Creates a new script.
   *
   * Scripts offer the ability to optimistically try to execute a script without having to send the
   * entire script to the server. If the script is loaded on the server, it tries again by sending
   * the entire script. Afterwards, the script is cached on the server.
   *
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   *
   * @param script - The script to create
   * @param opts - Optional options to pass to the script `{ readonly?: boolean }`
   * @returns A new script
   *
   * @example
   * ```ts
   * const redis = new Redis({...})
   *
   * const script = redis.createScript<string>("return ARGV[1];")
   * const arg1 = await script.eval([], ["Hello World"])
   * expect(arg1, "Hello World")
   * ```
   * @example
   * ```ts
   * const redis = new Redis({...})
   *
   * const script = redis.createScript<string>("return ARGV[1];", { readonly: true })
   * const arg1 = await script.evalRo([], ["Hello World"])
   * expect(arg1, "Hello World")
   * ```
   */
  createScript(script, opts) {
    return opts?.readonly ? new ScriptRO(this, script) : new Script(this, script);
  }
  get search() {
    return {
      createIndex: /* @__PURE__ */ __name((params) => {
        return createIndex(this.client, params);
      }, "createIndex"),
      index: /* @__PURE__ */ __name((params) => {
        return initIndex(this.client, params);
      }, "index"),
      alias: {
        list: /* @__PURE__ */ __name(() => {
          return listAliases(this.client);
        }, "list"),
        add: /* @__PURE__ */ __name(({ indexName, alias }) => {
          return addAlias(this.client, { indexName, alias });
        }, "add"),
        delete: /* @__PURE__ */ __name(({ alias }) => {
          return delAlias(this.client, { alias });
        }, "delete")
      }
    };
  }
  /**
   * Vector index commands.
   *
   * @example
   * ```typescript
   * const index = await redis.vector.createIndex({ name: "docs", dimension: 3, metric: "COSINE" });
   * await index.add("doc-1", [0.1, 0.2, 0.3]);
   * const hits = await index.query({ vector: [0.1, 0.2, 0.3], topK: 5 });
   * ```
   */
  get vector() {
    return {
      /**
       * Creates a vector index and returns a handle to it.
       */
      createIndex: /* @__PURE__ */ __name((params) => {
        return createVectorIndex(this.client, params, this.opts);
      }, "createIndex"),
      /**
       * Returns a handle to an existing vector index without sending any command.
       */
      index: /* @__PURE__ */ __name((name) => {
        return initVectorIndex(this.client, name, this.opts);
      }, "index")
    };
  }
  /**
   * Create a new pipeline that allows you to send requests in bulk.
   *
   * @see {@link Pipeline}
   */
  pipeline = /* @__PURE__ */ __name(() => new Pipeline({
    client: this.client,
    commandOptions: this.opts,
    multiExec: false
  }), "pipeline");
  autoPipeline = /* @__PURE__ */ __name(() => {
    return createAutoPipelineProxy(this);
  }, "autoPipeline");
  /**
   * Create a new transaction to allow executing multiple steps atomically.
   *
   * All the commands in a transaction are serialized and executed sequentially. A request sent by
   * another client will never be served in the middle of the execution of a Redis Transaction. This
   * guarantees that the commands are executed as a single isolated operation.
   *
   * @see {@link Pipeline}
   */
  multi = /* @__PURE__ */ __name(() => new Pipeline({
    client: this.client,
    commandOptions: this.opts,
    multiExec: true
  }), "multi");
  /**
   * Returns an instance that can be used to execute `BITFIELD` commands on one key.
   *
   * @example
   * ```typescript
   * redis.set("mykey", 0);
   * const result = await redis.bitfield("mykey")
   *   .set("u4", 0, 16)
   *   .incr("u4", "#1", 1)
   *   .exec();
   * console.log(result); // [0, 1]
   * ```
   *
   * @see https://redis.io/commands/bitfield
   */
  bitfield = /* @__PURE__ */ __name((...args) => new BitFieldCommand(args, this.client, this.opts), "bitfield");
  /**
   * @see https://redis.io/commands/append
   * @see node_modules/@upstash/redis/docs/commands/string/append.mdx
   */
  append = /* @__PURE__ */ __name((...args) => new AppendCommand(args, this.opts).exec(this.client), "append");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arcount
   * @see node_modules/@upstash/redis/docs/commands/array/arcount.mdx
   */
  arcount = /* @__PURE__ */ __name((...args) => new ArCountCommand(args, this.opts).exec(this.client), "arcount");
  /**
   * @see https://upstash.com/docs/redis/commands/array/ardel
   * @see node_modules/@upstash/redis/docs/commands/array/ardel.mdx
   */
  ardel = /* @__PURE__ */ __name((...args) => new ArDelCommand(args, this.opts).exec(this.client), "ardel");
  /**
   * @see https://upstash.com/docs/redis/commands/array/ardelrange
   * @see node_modules/@upstash/redis/docs/commands/array/ardelrange.mdx
   */
  ardelrange = /* @__PURE__ */ __name((...args) => new ArDelRangeCommand(args, this.opts).exec(this.client), "ardelrange");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arget
   * @see node_modules/@upstash/redis/docs/commands/array/arget.mdx
   */
  arget = /* @__PURE__ */ __name((...args) => new ArGetCommand(args, this.opts).exec(this.client), "arget");
  /**
   * @see https://upstash.com/docs/redis/commands/array/argetrange
   * @see node_modules/@upstash/redis/docs/commands/array/argetrange.mdx
   */
  argetrange = /* @__PURE__ */ __name((...args) => new ArGetRangeCommand(args, this.opts).exec(this.client), "argetrange");
  /**
   * @see https://upstash.com/docs/redis/commands/array/argrep
   * @see node_modules/@upstash/redis/docs/commands/array/argrep.mdx
   */
  argrep = /* @__PURE__ */ __name((key, start, end, opts) => new ArGrepCommand([key, start, end, opts], this.opts).exec(this.client), "argrep");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arinfo
   * @see node_modules/@upstash/redis/docs/commands/array/arinfo.mdx
   */
  arinfo = /* @__PURE__ */ __name((...args) => new ArInfoCommand(args, this.opts).exec(this.client), "arinfo");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arinsert
   * @see node_modules/@upstash/redis/docs/commands/array/arinsert.mdx
   */
  arinsert = /* @__PURE__ */ __name((key, ...values) => new ArInsertCommand([key, ...values], this.opts).exec(this.client), "arinsert");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arlastitems
   * @see node_modules/@upstash/redis/docs/commands/array/arlastitems.mdx
   */
  arlastitems = /* @__PURE__ */ __name((...args) => new ArLastItemsCommand(args, this.opts).exec(this.client), "arlastitems");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arlen
   * @see node_modules/@upstash/redis/docs/commands/array/arlen.mdx
   */
  arlen = /* @__PURE__ */ __name((...args) => new ArLenCommand(args, this.opts).exec(this.client), "arlen");
  /**
   * @see https://upstash.com/docs/redis/commands/array/armget
   * @see node_modules/@upstash/redis/docs/commands/array/armget.mdx
   */
  armget = /* @__PURE__ */ __name((...args) => new ArMGetCommand(args, this.opts).exec(this.client), "armget");
  /**
   * @see https://upstash.com/docs/redis/commands/array/armset
   * @see node_modules/@upstash/redis/docs/commands/array/armset.mdx
   */
  armset = /* @__PURE__ */ __name((key, values) => new ArMSetCommand([key, values], this.opts).exec(this.client), "armset");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arnext
   * @see node_modules/@upstash/redis/docs/commands/array/arnext.mdx
   */
  arnext = /* @__PURE__ */ __name((...args) => new ArNextCommand(args, this.opts).exec(this.client), "arnext");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arop
   * @see node_modules/@upstash/redis/docs/commands/array/arop.mdx
   */
  arop = /* @__PURE__ */ __name((key, start, end, operation) => new ArOpCommand([key, start, end, operation], this.opts).exec(this.client), "arop");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arring
   * @see node_modules/@upstash/redis/docs/commands/array/arring.mdx
   */
  arring = /* @__PURE__ */ __name((key, size, ...values) => new ArRingCommand([key, size, ...values], this.opts).exec(this.client), "arring");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arscan
   * @see node_modules/@upstash/redis/docs/commands/array/arscan.mdx
   */
  arscan = /* @__PURE__ */ __name((...args) => new ArScanCommand(args, this.opts).exec(this.client), "arscan");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arseek
   * @see node_modules/@upstash/redis/docs/commands/array/arseek.mdx
   */
  arseek = /* @__PURE__ */ __name((...args) => new ArSeekCommand(args, this.opts).exec(this.client), "arseek");
  /**
   * @see https://upstash.com/docs/redis/commands/array/arset
   * @see node_modules/@upstash/redis/docs/commands/array/arset.mdx
   */
  arset = /* @__PURE__ */ __name((key, index, ...values) => new ArSetCommand([key, index, ...values], this.opts).exec(this.client), "arset");
  /**
   * @see https://redis.io/commands/bitcount
   * @see node_modules/@upstash/redis/docs/commands/bitmap/bitcount.mdx
   */
  bitcount = /* @__PURE__ */ __name((...args) => new BitCountCommand(args, this.opts).exec(this.client), "bitcount");
  /**
   * @see https://redis.io/commands/bitop
   * @see node_modules/@upstash/redis/docs/commands/bitmap/bitop.mdx
   */
  bitop = /* @__PURE__ */ __name((op, destinationKey, sourceKey, ...sourceKeys) => new BitOpCommand([op, destinationKey, sourceKey, ...sourceKeys], this.opts).exec(
    this.client
  ), "bitop");
  /**
   * @see https://redis.io/commands/bitpos
   * @see node_modules/@upstash/redis/docs/commands/bitmap/bitpos.mdx
   */
  bitpos = /* @__PURE__ */ __name((...args) => new BitPosCommand(args, this.opts).exec(this.client), "bitpos");
  /**
   * @see https://redis.io/commands/client-setinfo
   * @see node_modules/@upstash/redis/docs/commands/connection/client_setinfo.mdx
   */
  clientSetinfo = /* @__PURE__ */ __name((...args) => new ClientSetInfoCommand(args, this.opts).exec(this.client), "clientSetinfo");
  /**
   * @see https://redis.io/commands/copy
   */
  copy = /* @__PURE__ */ __name((...args) => new CopyCommand(args, this.opts).exec(this.client), "copy");
  /**
   * @see https://redis.io/commands/dbsize
   * @see node_modules/@upstash/redis/docs/commands/server/dbsize.mdx
   */
  dbsize = /* @__PURE__ */ __name(() => new DBSizeCommand(this.opts).exec(this.client), "dbsize");
  /**
   * @see https://redis.io/commands/decr
   * @see node_modules/@upstash/redis/docs/commands/string/decr.mdx
   */
  decr = /* @__PURE__ */ __name((...args) => new DecrCommand(args, this.opts).exec(this.client), "decr");
  /**
   * @see https://redis.io/commands/decrby
   * @see node_modules/@upstash/redis/docs/commands/string/decrby.mdx
   */
  decrby = /* @__PURE__ */ __name((...args) => new DecrByCommand(args, this.opts).exec(this.client), "decrby");
  /**
   * @see https://redis.io/commands/del
   * @see node_modules/@upstash/redis/docs/commands/generic/del.mdx
   */
  del = /* @__PURE__ */ __name((...args) => new DelCommand(args, this.opts).exec(this.client), "del");
  /**
   * @see https://redis.io/commands/echo
   * @see node_modules/@upstash/redis/docs/commands/auth/echo.mdx
   */
  echo = /* @__PURE__ */ __name((...args) => new EchoCommand(args, this.opts).exec(this.client), "echo");
  /**
   * @see https://redis.io/commands/eval_ro
   * @see node_modules/@upstash/redis/docs/commands/scripts/eval_ro.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  evalRo = /* @__PURE__ */ __name((...args) => new EvalROCommand(args, this.opts).exec(this.client), "evalRo");
  /**
   * @see https://redis.io/commands/eval
   * @see node_modules/@upstash/redis/docs/commands/scripts/eval.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  eval = /* @__PURE__ */ __name((...args) => new EvalCommand(args, this.opts).exec(this.client), "eval");
  /**
   * @see https://redis.io/commands/evalsha_ro
   * @see node_modules/@upstash/redis/docs/commands/scripts/evalsha_ro.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  evalshaRo = /* @__PURE__ */ __name((...args) => new EvalshaROCommand(args, this.opts).exec(this.client), "evalshaRo");
  /**
   * @see https://redis.io/commands/evalsha
   * @see node_modules/@upstash/redis/docs/commands/scripts/evalsha.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  evalsha = /* @__PURE__ */ __name((...args) => new EvalshaCommand(args, this.opts).exec(this.client), "evalsha");
  /**
   * Generic method to execute any Redis command.
   */
  exec = /* @__PURE__ */ __name((args) => new ExecCommand(args, this.opts).exec(this.client), "exec");
  /**
   * @see https://redis.io/commands/exists
   * @see node_modules/@upstash/redis/docs/commands/generic/exists.mdx
   */
  exists = /* @__PURE__ */ __name((...args) => new ExistsCommand(args, this.opts).exec(this.client), "exists");
  /**
   * @see https://redis.io/commands/expire
   * @see node_modules/@upstash/redis/docs/commands/generic/expire.mdx
   */
  expire = /* @__PURE__ */ __name((...args) => new ExpireCommand(args, this.opts).exec(this.client), "expire");
  /**
   * @see https://redis.io/commands/expireat
   * @see node_modules/@upstash/redis/docs/commands/generic/expireat.mdx
   */
  expireat = /* @__PURE__ */ __name((...args) => new ExpireAtCommand(args, this.opts).exec(this.client), "expireat");
  /**
   * @see https://redis.io/commands/flushall
   * @see node_modules/@upstash/redis/docs/commands/server/flushall.mdx
   */
  flushall = /* @__PURE__ */ __name((args) => new FlushAllCommand(args, this.opts).exec(this.client), "flushall");
  /**
   * @see https://redis.io/commands/flushdb
   * @see node_modules/@upstash/redis/docs/commands/server/flushdb.mdx
   */
  flushdb = /* @__PURE__ */ __name((...args) => new FlushDBCommand(args, this.opts).exec(this.client), "flushdb");
  /**
   * @see https://redis.io/commands/geoadd
   */
  geoadd = /* @__PURE__ */ __name((...args) => new GeoAddCommand(args, this.opts).exec(this.client), "geoadd");
  /**
   * @see https://redis.io/commands/geopos
   */
  geopos = /* @__PURE__ */ __name((...args) => new GeoPosCommand(args, this.opts).exec(this.client), "geopos");
  /**
   * @see https://redis.io/commands/geodist
   */
  geodist = /* @__PURE__ */ __name((...args) => new GeoDistCommand(args, this.opts).exec(this.client), "geodist");
  /**
   * @see https://redis.io/commands/geohash
   */
  geohash = /* @__PURE__ */ __name((...args) => new GeoHashCommand(args, this.opts).exec(this.client), "geohash");
  /**
   * @see https://redis.io/commands/geosearch
   */
  geosearch = /* @__PURE__ */ __name((...args) => new GeoSearchCommand(args, this.opts).exec(this.client), "geosearch");
  /**
   * @see https://redis.io/commands/geosearchstore
   */
  geosearchstore = /* @__PURE__ */ __name((...args) => new GeoSearchStoreCommand(args, this.opts).exec(this.client), "geosearchstore");
  /**
   * @see https://redis.io/commands/get
   * @see node_modules/@upstash/redis/docs/commands/string/get.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  get = /* @__PURE__ */ __name((...args) => new GetCommand(args, this.opts).exec(this.client), "get");
  /**
   * @see https://redis.io/commands/getbit
   * @see node_modules/@upstash/redis/docs/commands/bitmap/getbit.mdx
   */
  getbit = /* @__PURE__ */ __name((...args) => new GetBitCommand(args, this.opts).exec(this.client), "getbit");
  /**
   * @see https://redis.io/commands/getdel
   * @see node_modules/@upstash/redis/docs/commands/string/getdel.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  getdel = /* @__PURE__ */ __name((...args) => new GetDelCommand(args, this.opts).exec(this.client), "getdel");
  /**
   * @see https://redis.io/commands/getex
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  getex = /* @__PURE__ */ __name((...args) => new GetExCommand(args, this.opts).exec(this.client), "getex");
  /**
   * @see https://redis.io/commands/getrange
   * @see node_modules/@upstash/redis/docs/commands/string/getrange.mdx
   */
  getrange = /* @__PURE__ */ __name((...args) => new GetRangeCommand(args, this.opts).exec(this.client), "getrange");
  /**
   * @see https://redis.io/commands/getset
   * @see node_modules/@upstash/redis/docs/commands/string/getset.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  getset = /* @__PURE__ */ __name((key, value) => new GetSetCommand([key, value], this.opts).exec(this.client), "getset");
  /**
   * @see https://redis.io/commands/hdel
   * @see node_modules/@upstash/redis/docs/commands/hash/hdel.mdx
   */
  hdel = /* @__PURE__ */ __name((...args) => new HDelCommand(args, this.opts).exec(this.client), "hdel");
  /**
   * @see https://redis.io/commands/hexists
   * @see node_modules/@upstash/redis/docs/commands/hash/hexists.mdx
   */
  hexists = /* @__PURE__ */ __name((...args) => new HExistsCommand(args, this.opts).exec(this.client), "hexists");
  /**
   * @see https://redis.io/commands/hexpire
   * @see node_modules/@upstash/redis/docs/commands/hash/hexpire.mdx
   */
  hexpire = /* @__PURE__ */ __name((...args) => new HExpireCommand(args, this.opts).exec(this.client), "hexpire");
  /**
   * @see https://redis.io/commands/hexpireat
   * @see node_modules/@upstash/redis/docs/commands/hash/hexpireat.mdx
   */
  hexpireat = /* @__PURE__ */ __name((...args) => new HExpireAtCommand(args, this.opts).exec(this.client), "hexpireat");
  /**
   * @see https://redis.io/commands/hexpiretime
   * @see node_modules/@upstash/redis/docs/commands/hash/hexpiretime.mdx
   */
  hexpiretime = /* @__PURE__ */ __name((...args) => new HExpireTimeCommand(args, this.opts).exec(this.client), "hexpiretime");
  /**
   * @see https://redis.io/commands/httl
   * @see node_modules/@upstash/redis/docs/commands/hash/httl.mdx
   */
  httl = /* @__PURE__ */ __name((...args) => new HTtlCommand(args, this.opts).exec(this.client), "httl");
  /**
   * @see https://redis.io/commands/hpexpire
   * @see node_modules/@upstash/redis/docs/commands/hash/hpexpire.mdx
   */
  hpexpire = /* @__PURE__ */ __name((...args) => new HPExpireCommand(args, this.opts).exec(this.client), "hpexpire");
  /**
   * @see https://redis.io/commands/hpexpireat
   * @see node_modules/@upstash/redis/docs/commands/hash/hpexpireat.mdx
   */
  hpexpireat = /* @__PURE__ */ __name((...args) => new HPExpireAtCommand(args, this.opts).exec(this.client), "hpexpireat");
  /**
   * @see https://redis.io/commands/hpexpiretime
   * @see node_modules/@upstash/redis/docs/commands/hash/hpexpiretime.mdx
   */
  hpexpiretime = /* @__PURE__ */ __name((...args) => new HPExpireTimeCommand(args, this.opts).exec(this.client), "hpexpiretime");
  /**
   * @see https://redis.io/commands/hpttl
   * @see node_modules/@upstash/redis/docs/commands/hash/hpttl.mdx
   */
  hpttl = /* @__PURE__ */ __name((...args) => new HPTtlCommand(args, this.opts).exec(this.client), "hpttl");
  /**
   * @see https://redis.io/commands/hpersist
   * @see node_modules/@upstash/redis/docs/commands/hash/hpersist.mdx
   */
  hpersist = /* @__PURE__ */ __name((...args) => new HPersistCommand(args, this.opts).exec(this.client), "hpersist");
  /**
   * @see https://redis.io/commands/hget
   * @see node_modules/@upstash/redis/docs/commands/hash/hget.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  hget = /* @__PURE__ */ __name((...args) => new HGetCommand(args, this.opts).exec(this.client), "hget");
  /**
   * @see https://redis.io/commands/hgetall
   * @see node_modules/@upstash/redis/docs/commands/hash/hgetall.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, hgetall returns a flat array instead, such as
   * ["text", "123", "version", "1"], and [] for a missing key.
   */
  hgetall = /* @__PURE__ */ __name((...args) => new HGetAllCommand(args, this.opts).exec(this.client), "hgetall");
  /**
   * @see https://redis.io/commands/hgetdel
   * @see node_modules/@upstash/redis/docs/commands/hash/hgetdel.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, hgetdel returns an array of values in field order instead,
   * such as ["123", null], with null for each field when the key is missing.
   */
  hgetdel = /* @__PURE__ */ __name((...args) => new HGetDelCommand(args, this.opts).exec(this.client), "hgetdel");
  /**
   * @see https://redis.io/commands/hgetex
   * @see node_modules/@upstash/redis/docs/commands/hash/hgetex.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, hgetex returns an array of values in field order instead,
   * such as ["123", null], with null for each field when the key is missing.
   */
  hgetex = /* @__PURE__ */ __name((...args) => new HGetExCommand(args, this.opts).exec(this.client), "hgetex");
  /**
   * @see https://redis.io/commands/hincrby
   * @see node_modules/@upstash/redis/docs/commands/hash/hincrby.mdx
   */
  hincrby = /* @__PURE__ */ __name((...args) => new HIncrByCommand(args, this.opts).exec(this.client), "hincrby");
  /**
   * @see https://redis.io/commands/hincrbyfloat
   * @see node_modules/@upstash/redis/docs/commands/hash/hincrbyfloat.mdx
   */
  hincrbyfloat = /* @__PURE__ */ __name((...args) => new HIncrByFloatCommand(args, this.opts).exec(this.client), "hincrbyfloat");
  /**
   * @see https://redis.io/commands/hkeys
   * @see node_modules/@upstash/redis/docs/commands/hash/hkeys.mdx
   */
  hkeys = /* @__PURE__ */ __name((...args) => new HKeysCommand(args, this.opts).exec(this.client), "hkeys");
  /**
   * @see https://redis.io/commands/hlen
   * @see node_modules/@upstash/redis/docs/commands/hash/hlen.mdx
   */
  hlen = /* @__PURE__ */ __name((...args) => new HLenCommand(args, this.opts).exec(this.client), "hlen");
  /**
   * @see https://redis.io/commands/hmget
   * @see node_modules/@upstash/redis/docs/commands/hash/hmget.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, hmget returns an array of values in field order instead,
   * such as ["123", null], with null for each field when the key is missing.
   */
  hmget = /* @__PURE__ */ __name((...args) => new HMGetCommand(args, this.opts).exec(this.client), "hmget");
  /**
   * @see https://redis.io/commands/hmset
   */
  hmset = /* @__PURE__ */ __name((key, kv) => new HMSetCommand([key, kv], this.opts).exec(this.client), "hmset");
  /**
   * @see https://redis.io/commands/hrandfield
   * @see node_modules/@upstash/redis/docs/commands/hash/hrandfield.mdx
   */
  hrandfield = /* @__PURE__ */ __name((key, count, withValues) => new HRandFieldCommand([key, count, withValues], this.opts).exec(this.client), "hrandfield");
  /**
   * @see https://redis.io/commands/hscan
   * @see node_modules/@upstash/redis/docs/commands/hash/hscan.mdx
   */
  hscan = /* @__PURE__ */ __name((...args) => new HScanCommand(args, this.opts).exec(this.client), "hscan");
  /**
   * @see https://redis.io/commands/hset
   * @see node_modules/@upstash/redis/docs/commands/hash/hset.mdx
   */
  hset = /* @__PURE__ */ __name((key, kv) => new HSetCommand([key, kv], this.opts).exec(this.client), "hset");
  /**
   * @see https://redis.io/commands/hsetex
   * @see node_modules/@upstash/redis/docs/commands/hash/hsetex.mdx
   */
  hsetex = /* @__PURE__ */ __name((...args) => new HSetExCommand(args, this.opts).exec(this.client), "hsetex");
  /**
   * @see https://redis.io/commands/hsetnx
   * @see node_modules/@upstash/redis/docs/commands/hash/hsetnx.mdx
   */
  hsetnx = /* @__PURE__ */ __name((key, field, value) => new HSetNXCommand([key, field, value], this.opts).exec(this.client), "hsetnx");
  /**
   * @see https://redis.io/commands/hstrlen
   * @see node_modules/@upstash/redis/docs/commands/hash/hstrlen.mdx
   */
  hstrlen = /* @__PURE__ */ __name((...args) => new HStrLenCommand(args, this.opts).exec(this.client), "hstrlen");
  /**
   * @see https://redis.io/commands/hvals
   * @see node_modules/@upstash/redis/docs/commands/hash/hvals.mdx
   */
  hvals = /* @__PURE__ */ __name((...args) => new HValsCommand(args, this.opts).exec(this.client), "hvals");
  /**
   * @see https://redis.io/commands/incr
   * @see node_modules/@upstash/redis/docs/commands/string/incr.mdx
   */
  incr = /* @__PURE__ */ __name((...args) => new IncrCommand(args, this.opts).exec(this.client), "incr");
  /**
   * @see https://redis.io/commands/incrby
   * @see node_modules/@upstash/redis/docs/commands/string/incrby.mdx
   */
  incrby = /* @__PURE__ */ __name((...args) => new IncrByCommand(args, this.opts).exec(this.client), "incrby");
  /**
   * @see https://redis.io/commands/incrbyfloat
   * @see node_modules/@upstash/redis/docs/commands/string/incrbyfloat.mdx
   */
  incrbyfloat = /* @__PURE__ */ __name((...args) => new IncrByFloatCommand(args, this.opts).exec(this.client), "incrbyfloat");
  /**
   * @see https://redis.io/commands/keys
   * @see node_modules/@upstash/redis/docs/commands/generic/keys.mdx
   */
  keys = /* @__PURE__ */ __name((...args) => new KeysCommand(args, this.opts).exec(this.client), "keys");
  /**
   * @see https://redis.io/commands/lindex
   * @see node_modules/@upstash/redis/docs/commands/list/lindex.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  lindex = /* @__PURE__ */ __name((...args) => new LIndexCommand(args, this.opts).exec(this.client), "lindex");
  /**
   * @see https://redis.io/commands/linsert
   * @see node_modules/@upstash/redis/docs/commands/list/linsert.mdx
   */
  linsert = /* @__PURE__ */ __name((key, direction, pivot, value) => new LInsertCommand([key, direction, pivot, value], this.opts).exec(this.client), "linsert");
  /**
   * @see https://redis.io/commands/llen
   * @see node_modules/@upstash/redis/docs/commands/list/llen.mdx
   */
  llen = /* @__PURE__ */ __name((...args) => new LLenCommand(args, this.opts).exec(this.client), "llen");
  /**
   * @see https://redis.io/commands/lmove
   * @see node_modules/@upstash/redis/docs/commands/list/lmove.mdx
   */
  lmove = /* @__PURE__ */ __name((...args) => new LMoveCommand(args, this.opts).exec(this.client), "lmove");
  /**
   * @see https://redis.io/commands/lpop
   * @see node_modules/@upstash/redis/docs/commands/list/lpop.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  lpop = /* @__PURE__ */ __name((...args) => new LPopCommand(args, this.opts).exec(this.client), "lpop");
  /**
   * @see https://redis.io/commands/lmpop
   */
  lmpop = /* @__PURE__ */ __name((...args) => new LmPopCommand(args, this.opts).exec(this.client), "lmpop");
  /**
   * @see https://redis.io/commands/lpos
   * @see node_modules/@upstash/redis/docs/commands/list/lpos.mdx
   */
  lpos = /* @__PURE__ */ __name((...args) => new LPosCommand(args, this.opts).exec(this.client), "lpos");
  /**
   * @see https://redis.io/commands/lpush
   * @see node_modules/@upstash/redis/docs/commands/list/lpush.mdx
   */
  lpush = /* @__PURE__ */ __name((key, ...elements) => new LPushCommand([key, ...elements], this.opts).exec(this.client), "lpush");
  /**
   * @see https://redis.io/commands/lpushx
   * @see node_modules/@upstash/redis/docs/commands/list/lpushx.mdx
   */
  lpushx = /* @__PURE__ */ __name((key, ...elements) => new LPushXCommand([key, ...elements], this.opts).exec(this.client), "lpushx");
  /**
   * @see https://redis.io/commands/lrange
   * @see node_modules/@upstash/redis/docs/commands/list/lrange.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  lrange = /* @__PURE__ */ __name((...args) => new LRangeCommand(args, this.opts).exec(this.client), "lrange");
  /**
   * @see https://redis.io/commands/lrem
   * @see node_modules/@upstash/redis/docs/commands/list/lrem.mdx
   */
  lrem = /* @__PURE__ */ __name((key, count, value) => new LRemCommand([key, count, value], this.opts).exec(this.client), "lrem");
  /**
   * @see https://redis.io/commands/lset
   * @see node_modules/@upstash/redis/docs/commands/list/lset.mdx
   */
  lset = /* @__PURE__ */ __name((key, index, value) => new LSetCommand([key, index, value], this.opts).exec(this.client), "lset");
  /**
   * @see https://redis.io/commands/ltrim
   * @see node_modules/@upstash/redis/docs/commands/list/ltrim.mdx
   */
  ltrim = /* @__PURE__ */ __name((...args) => new LTrimCommand(args, this.opts).exec(this.client), "ltrim");
  /**
   * @see https://redis.io/commands/mget
   * @see node_modules/@upstash/redis/docs/commands/string/mget.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  mget = /* @__PURE__ */ __name((...args) => new MGetCommand(args, this.opts).exec(this.client), "mget");
  /**
   * @see https://redis.io/commands/mset
   * @see node_modules/@upstash/redis/docs/commands/string/mset.mdx
   */
  mset = /* @__PURE__ */ __name((kv) => new MSetCommand([kv], this.opts).exec(this.client), "mset");
  /**
   * @see https://redis.io/commands/msetnx
   * @see node_modules/@upstash/redis/docs/commands/string/msetnx.mdx
   */
  msetnx = /* @__PURE__ */ __name((kv) => new MSetNXCommand([kv], this.opts).exec(this.client), "msetnx");
  /**
   * @see https://redis.io/commands/persist
   * @see node_modules/@upstash/redis/docs/commands/generic/persist.mdx
   */
  persist = /* @__PURE__ */ __name((...args) => new PersistCommand(args, this.opts).exec(this.client), "persist");
  /**
   * @see https://redis.io/commands/pexpire
   * @see node_modules/@upstash/redis/docs/commands/generic/pexpire.mdx
   */
  pexpire = /* @__PURE__ */ __name((...args) => new PExpireCommand(args, this.opts).exec(this.client), "pexpire");
  /**
   * @see https://redis.io/commands/pexpireat
   * @see node_modules/@upstash/redis/docs/commands/generic/pexpireat.mdx
   */
  pexpireat = /* @__PURE__ */ __name((...args) => new PExpireAtCommand(args, this.opts).exec(this.client), "pexpireat");
  /**
   * @see https://redis.io/commands/pfadd
   */
  pfadd = /* @__PURE__ */ __name((...args) => new PfAddCommand(args, this.opts).exec(this.client), "pfadd");
  /**
   * @see https://redis.io/commands/pfcount
   */
  pfcount = /* @__PURE__ */ __name((...args) => new PfCountCommand(args, this.opts).exec(this.client), "pfcount");
  /**
   * @see https://redis.io/commands/pfmerge
   */
  pfmerge = /* @__PURE__ */ __name((...args) => new PfMergeCommand(args, this.opts).exec(this.client), "pfmerge");
  /**
   * @see https://redis.io/commands/ping
   * @see node_modules/@upstash/redis/docs/commands/auth/ping.mdx
   */
  ping = /* @__PURE__ */ __name((args) => new PingCommand(args, this.opts).exec(this.client), "ping");
  /**
   * @see https://redis.io/commands/psetex
   */
  psetex = /* @__PURE__ */ __name((key, ttl, value) => new PSetEXCommand([key, ttl, value], this.opts).exec(this.client), "psetex");
  /**
   * @see https://redis.io/commands/psubscribe
   * @see node_modules/@upstash/redis/docs/commands/pubsub/psubscribe.mdx
   * Messages are JSON-parsed automatically: a published "123" arrives as the number 123. Unlike
   * subscribe, a message that is not valid JSON (such as "hello") never reaches the listener and
   * emits an "error" event instead. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  psubscribe = /* @__PURE__ */ __name((patterns) => {
    const patternArray = Array.isArray(patterns) ? patterns : [patterns];
    return new Subscriber(this.client, patternArray, true, this.opts);
  }, "psubscribe");
  /**
   * @see https://redis.io/commands/pttl
   * @see node_modules/@upstash/redis/docs/commands/generic/pttl.mdx
   */
  pttl = /* @__PURE__ */ __name((...args) => new PTtlCommand(args, this.opts).exec(this.client), "pttl");
  /**
   * @see https://redis.io/commands/publish
   * @see node_modules/@upstash/redis/docs/commands/pubsub/publish.mdx
   */
  publish = /* @__PURE__ */ __name((...args) => new PublishCommand(args, this.opts).exec(this.client), "publish");
  /**
   * @see https://redis.io/commands/randomkey
   * @see node_modules/@upstash/redis/docs/commands/generic/randomkey.mdx
   */
  randomkey = /* @__PURE__ */ __name(() => new RandomKeyCommand().exec(this.client), "randomkey");
  /**
   * @see https://redis.io/commands/rename
   * @see node_modules/@upstash/redis/docs/commands/generic/rename.mdx
   */
  rename = /* @__PURE__ */ __name((...args) => new RenameCommand(args, this.opts).exec(this.client), "rename");
  /**
   * @see https://redis.io/commands/renamenx
   * @see node_modules/@upstash/redis/docs/commands/generic/renamenx.mdx
   */
  renamenx = /* @__PURE__ */ __name((...args) => new RenameNXCommand(args, this.opts).exec(this.client), "renamenx");
  /**
   * @see https://redis.io/commands/rpop
   * @see node_modules/@upstash/redis/docs/commands/list/rpop.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  rpop = /* @__PURE__ */ __name((...args) => new RPopCommand(args, this.opts).exec(this.client), "rpop");
  /**
   * @see https://redis.io/commands/rpush
   * @see node_modules/@upstash/redis/docs/commands/list/rpush.mdx
   */
  rpush = /* @__PURE__ */ __name((key, ...elements) => new RPushCommand([key, ...elements], this.opts).exec(this.client), "rpush");
  /**
   * @see https://redis.io/commands/rpushx
   * @see node_modules/@upstash/redis/docs/commands/list/rpushx.mdx
   */
  rpushx = /* @__PURE__ */ __name((key, ...elements) => new RPushXCommand([key, ...elements], this.opts).exec(this.client), "rpushx");
  /**
   * @see https://redis.io/commands/sadd
   * @see node_modules/@upstash/redis/docs/commands/set/sadd.mdx
   */
  sadd = /* @__PURE__ */ __name((key, member, ...members) => new SAddCommand([key, member, ...members], this.opts).exec(this.client), "sadd");
  scan(cursor, opts) {
    return new ScanCommand([cursor, opts], this.opts).exec(this.client);
  }
  /**
   * @see https://redis.io/commands/scard
   * @see node_modules/@upstash/redis/docs/commands/set/scard.mdx
   */
  scard = /* @__PURE__ */ __name((...args) => new SCardCommand(args, this.opts).exec(this.client), "scard");
  /**
   * @see https://redis.io/commands/script-exists
   * @see node_modules/@upstash/redis/docs/commands/scripts/script_exists.mdx
   */
  scriptExists = /* @__PURE__ */ __name((...args) => new ScriptExistsCommand(args, this.opts).exec(this.client), "scriptExists");
  /**
   * @see https://redis.io/commands/script-flush
   * @see node_modules/@upstash/redis/docs/commands/scripts/script_flush.mdx
   */
  scriptFlush = /* @__PURE__ */ __name((...args) => new ScriptFlushCommand(args, this.opts).exec(this.client), "scriptFlush");
  /**
   * @see https://redis.io/commands/script-load
   * @see node_modules/@upstash/redis/docs/commands/scripts/script_load.mdx
   */
  scriptLoad = /* @__PURE__ */ __name((...args) => new ScriptLoadCommand(args, this.opts).exec(this.client), "scriptLoad");
  /**
   * @see https://redis.io/commands/sdiff
   * @see node_modules/@upstash/redis/docs/commands/set/sdiff.mdx
   */
  sdiff = /* @__PURE__ */ __name((...args) => new SDiffCommand(args, this.opts).exec(this.client), "sdiff");
  /**
   * @see https://redis.io/commands/sdiffstore
   * @see node_modules/@upstash/redis/docs/commands/set/sdiffstore.mdx
   */
  sdiffstore = /* @__PURE__ */ __name((...args) => new SDiffStoreCommand(args, this.opts).exec(this.client), "sdiffstore");
  /**
   * @see https://redis.io/commands/set
   * @see node_modules/@upstash/redis/docs/commands/string/set.mdx
   */
  set = /* @__PURE__ */ __name((key, value, opts) => new SetCommand([key, value, opts], this.opts).exec(this.client), "set");
  /**
   * @see https://redis.io/commands/setbit
   * @see node_modules/@upstash/redis/docs/commands/bitmap/setbit.mdx
   */
  setbit = /* @__PURE__ */ __name((...args) => new SetBitCommand(args, this.opts).exec(this.client), "setbit");
  /**
   * @see https://redis.io/commands/setex
   */
  setex = /* @__PURE__ */ __name((key, ttl, value) => new SetExCommand([key, ttl, value], this.opts).exec(this.client), "setex");
  /**
   * @see https://redis.io/commands/setnx
   */
  setnx = /* @__PURE__ */ __name((key, value) => new SetNxCommand([key, value], this.opts).exec(this.client), "setnx");
  /**
   * @see https://redis.io/commands/setrange
   * @see node_modules/@upstash/redis/docs/commands/string/setrange.mdx
   */
  setrange = /* @__PURE__ */ __name((...args) => new SetRangeCommand(args, this.opts).exec(this.client), "setrange");
  /**
   * @see https://redis.io/commands/sinter
   * @see node_modules/@upstash/redis/docs/commands/set/sinter.mdx
   */
  sinter = /* @__PURE__ */ __name((...args) => new SInterCommand(args, this.opts).exec(this.client), "sinter");
  /**
   * @see https://redis.io/commands/sintercard
   */
  sintercard = /* @__PURE__ */ __name((...args) => new SInterCardCommand(args, this.opts).exec(this.client), "sintercard");
  /**
   * @see https://redis.io/commands/sinterstore
   * @see node_modules/@upstash/redis/docs/commands/set/sinterstore.mdx
   */
  sinterstore = /* @__PURE__ */ __name((...args) => new SInterStoreCommand(args, this.opts).exec(this.client), "sinterstore");
  /**
   * @see https://redis.io/commands/sismember
   * @see node_modules/@upstash/redis/docs/commands/set/sismember.mdx
   */
  sismember = /* @__PURE__ */ __name((key, member) => new SIsMemberCommand([key, member], this.opts).exec(this.client), "sismember");
  /**
   * @see https://redis.io/commands/smismember
   * @see node_modules/@upstash/redis/docs/commands/set/smismember.mdx
   */
  smismember = /* @__PURE__ */ __name((key, members) => new SMIsMemberCommand([key, members], this.opts).exec(this.client), "smismember");
  /**
   * @see https://redis.io/commands/smembers
   * @see node_modules/@upstash/redis/docs/commands/set/smembers.mdx
   */
  smembers = /* @__PURE__ */ __name((...args) => new SMembersCommand(args, this.opts).exec(this.client), "smembers");
  /**
   * @see https://redis.io/commands/smove
   * @see node_modules/@upstash/redis/docs/commands/set/smove.mdx
   */
  smove = /* @__PURE__ */ __name((source, destination, member) => new SMoveCommand([source, destination, member], this.opts).exec(this.client), "smove");
  /**
   * @see https://redis.io/commands/spop
   * @see node_modules/@upstash/redis/docs/commands/set/spop.mdx
   */
  spop = /* @__PURE__ */ __name((...args) => new SPopCommand(args, this.opts).exec(this.client), "spop");
  /**
   * @see https://redis.io/commands/srandmember
   * @see node_modules/@upstash/redis/docs/commands/set/srandmember.mdx
   */
  srandmember = /* @__PURE__ */ __name((...args) => new SRandMemberCommand(args, this.opts).exec(this.client), "srandmember");
  /**
   * @see https://redis.io/commands/srem
   * @see node_modules/@upstash/redis/docs/commands/set/srem.mdx
   */
  srem = /* @__PURE__ */ __name((key, ...members) => new SRemCommand([key, ...members], this.opts).exec(this.client), "srem");
  /**
   * @see https://redis.io/commands/sscan
   * @see node_modules/@upstash/redis/docs/commands/set/sscan.mdx
   */
  sscan = /* @__PURE__ */ __name((...args) => new SScanCommand(args, this.opts).exec(this.client), "sscan");
  /**
   * @see https://redis.io/commands/strlen
   * @see node_modules/@upstash/redis/docs/commands/string/strlen.mdx
   */
  strlen = /* @__PURE__ */ __name((...args) => new StrLenCommand(args, this.opts).exec(this.client), "strlen");
  /**
   * @see https://redis.io/commands/subscribe
   * @see node_modules/@upstash/redis/docs/commands/pubsub/subscribe.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  subscribe = /* @__PURE__ */ __name((channels) => {
    const channelArray = Array.isArray(channels) ? channels : [channels];
    return new Subscriber(this.client, channelArray, false, this.opts);
  }, "subscribe");
  /**
   * @see https://redis.io/commands/sunion
   * @see node_modules/@upstash/redis/docs/commands/set/sunion.mdx
   */
  sunion = /* @__PURE__ */ __name((...args) => new SUnionCommand(args, this.opts).exec(this.client), "sunion");
  /**
   * @see https://redis.io/commands/sunionstore
   * @see node_modules/@upstash/redis/docs/commands/set/sunionstore.mdx
   */
  sunionstore = /* @__PURE__ */ __name((...args) => new SUnionStoreCommand(args, this.opts).exec(this.client), "sunionstore");
  /**
   * @see https://redis.io/commands/time
   */
  time = /* @__PURE__ */ __name(() => new TimeCommand().exec(this.client), "time");
  /**
   * @see https://redis.io/commands/touch
   * @see node_modules/@upstash/redis/docs/commands/generic/touch.mdx
   */
  touch = /* @__PURE__ */ __name((...args) => new TouchCommand(args, this.opts).exec(this.client), "touch");
  /**
   * @see https://redis.io/commands/ttl
   * @see node_modules/@upstash/redis/docs/commands/generic/ttl.mdx
   */
  ttl = /* @__PURE__ */ __name((...args) => new TtlCommand(args, this.opts).exec(this.client), "ttl");
  /**
   * @see https://redis.io/commands/type
   * @see node_modules/@upstash/redis/docs/commands/generic/type.mdx
   */
  type = /* @__PURE__ */ __name((...args) => new TypeCommand(args, this.opts).exec(this.client), "type");
  /**
   * @see https://redis.io/commands/unlink
   * @see node_modules/@upstash/redis/docs/commands/generic/unlink.mdx
   */
  unlink = /* @__PURE__ */ __name((...args) => new UnlinkCommand(args, this.opts).exec(this.client), "unlink");
  /**
   * @see https://redis.io/commands/xadd
   * @see node_modules/@upstash/redis/docs/commands/stream/xadd.mdx
   */
  xadd = /* @__PURE__ */ __name((...args) => new XAddCommand(args, this.opts).exec(this.client), "xadd");
  /**
   * @see https://redis.io/commands/xack
   * @see node_modules/@upstash/redis/docs/commands/stream/xack.mdx
   */
  xack = /* @__PURE__ */ __name((...args) => new XAckCommand(args, this.opts).exec(this.client), "xack");
  /**
   * @see https://redis.io/commands/xackdel
   * @see node_modules/@upstash/redis/docs/commands/stream/xackdel.mdx
   */
  xackdel = /* @__PURE__ */ __name((...args) => new XAckDelCommand(args, this.opts).exec(this.client), "xackdel");
  /**
   * @see https://redis.io/commands/xdel
   * @see node_modules/@upstash/redis/docs/commands/stream/xdel.mdx
   */
  xdel = /* @__PURE__ */ __name((...args) => new XDelCommand(args, this.opts).exec(this.client), "xdel");
  /**
   * @see https://redis.io/commands/xdelex
   * @see node_modules/@upstash/redis/docs/commands/stream/xdelex.mdx
   */
  xdelex = /* @__PURE__ */ __name((...args) => new XDelExCommand(args, this.opts).exec(this.client), "xdelex");
  /**
   * @see https://redis.io/commands/xgroup
   * @see node_modules/@upstash/redis/docs/commands/stream/xgroup.mdx
   */
  xgroup = /* @__PURE__ */ __name((...args) => new XGroupCommand(args, this.opts).exec(this.client), "xgroup");
  /**
   * @see https://redis.io/commands/xread
   * @see node_modules/@upstash/redis/docs/commands/stream/xread.mdx
   */
  xread = /* @__PURE__ */ __name((...args) => new XReadCommand(args, this.opts).exec(this.client), "xread");
  /**
   * @see https://redis.io/commands/xreadgroup
   * @see node_modules/@upstash/redis/docs/commands/stream/xreadgroup.mdx
   */
  xreadgroup = /* @__PURE__ */ __name((...args) => new XReadGroupCommand(args, this.opts).exec(this.client), "xreadgroup");
  /**
   * @see https://redis.io/commands/xinfo
   * @see node_modules/@upstash/redis/docs/commands/stream/xinfo.mdx
   */
  xinfo = /* @__PURE__ */ __name((...args) => new XInfoCommand(args, this.opts).exec(this.client), "xinfo");
  /**
   * @see https://redis.io/commands/xlen
   * @see node_modules/@upstash/redis/docs/commands/stream/xlen.mdx
   */
  xlen = /* @__PURE__ */ __name((...args) => new XLenCommand(args, this.opts).exec(this.client), "xlen");
  /**
   * @see https://redis.io/commands/xpending
   * @see node_modules/@upstash/redis/docs/commands/stream/xpending.mdx
   */
  xpending = /* @__PURE__ */ __name((...args) => new XPendingCommand(args, this.opts).exec(this.client), "xpending");
  /**
   * @see https://redis.io/commands/xclaim
   * @see node_modules/@upstash/redis/docs/commands/stream/xclaim.mdx
   */
  xclaim = /* @__PURE__ */ __name((...args) => new XClaimCommand(args, this.opts).exec(this.client), "xclaim");
  /**
   * @see https://redis.io/commands/xautoclaim
   * @see node_modules/@upstash/redis/docs/commands/stream/xautoclaim.mdx
   */
  xautoclaim = /* @__PURE__ */ __name((...args) => new XAutoClaim(args, this.opts).exec(this.client), "xautoclaim");
  /**
   * @see https://redis.io/commands/xtrim
   * @see node_modules/@upstash/redis/docs/commands/stream/xtrim.mdx
   */
  xtrim = /* @__PURE__ */ __name((...args) => new XTrimCommand(args, this.opts).exec(this.client), "xtrim");
  /**
   * @see https://redis.io/commands/xrange
   * @see node_modules/@upstash/redis/docs/commands/stream/xrange.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, xrange returns [id, [field, value, ...]] entries instead,
   * such as [["1790341484470-0", ["text", "123"]]], and [] for a missing key.
   */
  xrange = /* @__PURE__ */ __name((...args) => new XRangeCommand(args, this.opts).exec(this.client), "xrange");
  /**
   * @see https://redis.io/commands/xrevrange
   * @see node_modules/@upstash/redis/docs/commands/stream/xrevrange.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   * With automaticDeserialization: false, xrevrange returns [id, [field, value, ...]] entries instead,
   * such as [["1790341484470-0", ["text", "123"]]], and [] for a missing key.
   */
  xrevrange = /* @__PURE__ */ __name((...args) => new XRevRangeCommand(args, this.opts).exec(this.client), "xrevrange");
  /**
   * @see https://redis.io/commands/zadd
   * @see node_modules/@upstash/redis/docs/commands/zset/zadd.mdx
   */
  zadd = /* @__PURE__ */ __name((...args) => {
    if ("score" in args[1]) {
      return new ZAddCommand([args[0], args[1], ...args.slice(2)], this.opts).exec(
        this.client
      );
    }
    return new ZAddCommand(
      [args[0], args[1], ...args.slice(2)],
      this.opts
    ).exec(this.client);
  }, "zadd");
  /**
   * @see https://redis.io/commands/zcard
   * @see node_modules/@upstash/redis/docs/commands/zset/zcard.mdx
   */
  zcard = /* @__PURE__ */ __name((...args) => new ZCardCommand(args, this.opts).exec(this.client), "zcard");
  /**
   * @see https://redis.io/commands/zcount
   * @see node_modules/@upstash/redis/docs/commands/zset/zcount.mdx
   */
  zcount = /* @__PURE__ */ __name((...args) => new ZCountCommand(args, this.opts).exec(this.client), "zcount");
  /**
   * @see https://redis.io/commands/zdiffstore
   * @see node_modules/@upstash/redis/docs/commands/zset/zdiffstore.mdx
   */
  zdiffstore = /* @__PURE__ */ __name((...args) => new ZDiffStoreCommand(args, this.opts).exec(this.client), "zdiffstore");
  /**
   * @see https://redis.io/commands/zincrby
   * @see node_modules/@upstash/redis/docs/commands/zset/zincrby.mdx
   */
  zincrby = /* @__PURE__ */ __name((key, increment, member) => new ZIncrByCommand([key, increment, member], this.opts).exec(this.client), "zincrby");
  /**
   * @see https://redis.io/commands/zinterstore
   * @see node_modules/@upstash/redis/docs/commands/zset/zinterstore.mdx
   */
  zinterstore = /* @__PURE__ */ __name((...args) => new ZInterStoreCommand(args, this.opts).exec(this.client), "zinterstore");
  /**
   * @see https://redis.io/commands/zlexcount
   * @see node_modules/@upstash/redis/docs/commands/zset/zlexcount.mdx
   */
  zlexcount = /* @__PURE__ */ __name((...args) => new ZLexCountCommand(args, this.opts).exec(this.client), "zlexcount");
  /**
   * @see https://redis.io/commands/zmscore
   * @see node_modules/@upstash/redis/docs/commands/zset/zmscore.mdx
   */
  zmscore = /* @__PURE__ */ __name((...args) => new ZMScoreCommand(args, this.opts).exec(this.client), "zmscore");
  /**
   * @see https://redis.io/commands/zpopmax
   * @see node_modules/@upstash/redis/docs/commands/zset/zpopmax.mdx
   */
  zpopmax = /* @__PURE__ */ __name((...args) => new ZPopMaxCommand(args, this.opts).exec(this.client), "zpopmax");
  /**
   * @see https://redis.io/commands/zpopmin
   * @see node_modules/@upstash/redis/docs/commands/zset/zpopmin.mdx
   */
  zpopmin = /* @__PURE__ */ __name((...args) => new ZPopMinCommand(args, this.opts).exec(this.client), "zpopmin");
  /**
   * @see https://redis.io/commands/zrange
   * @see node_modules/@upstash/redis/docs/commands/zset/zrange.mdx
   * Responses are JSON-parsed automatically: a stored "123" comes back as the number 123, "true" as
   * true, and '{"a":1}' as an object. Pass automaticDeserialization: false to the Redis constructor
   * to receive raw strings.
   */
  zrange = /* @__PURE__ */ __name((...args) => new ZRangeCommand(args, this.opts).exec(this.client), "zrange");
  /**
   * @see https://redis.io/commands/zrank
   * @see node_modules/@upstash/redis/docs/commands/zset/zrank.mdx
   */
  zrank = /* @__PURE__ */ __name((key, member) => new ZRankCommand([key, member], this.opts).exec(this.client), "zrank");
  /**
   * @see https://redis.io/commands/zrem
   * @see node_modules/@upstash/redis/docs/commands/zset/zrem.mdx
   */
  zrem = /* @__PURE__ */ __name((key, ...members) => new ZRemCommand([key, ...members], this.opts).exec(this.client), "zrem");
  /**
   * @see https://redis.io/commands/zremrangebylex
   * @see node_modules/@upstash/redis/docs/commands/zset/zremrangebylex.mdx
   */
  zremrangebylex = /* @__PURE__ */ __name((...args) => new ZRemRangeByLexCommand(args, this.opts).exec(this.client), "zremrangebylex");
  /**
   * @see https://redis.io/commands/zremrangebyrank
   * @see node_modules/@upstash/redis/docs/commands/zset/zremrangebyrank.mdx
   */
  zremrangebyrank = /* @__PURE__ */ __name((...args) => new ZRemRangeByRankCommand(args, this.opts).exec(this.client), "zremrangebyrank");
  /**
   * @see https://redis.io/commands/zremrangebyscore
   * @see node_modules/@upstash/redis/docs/commands/zset/zremrangebyscore.mdx
   */
  zremrangebyscore = /* @__PURE__ */ __name((...args) => new ZRemRangeByScoreCommand(args, this.opts).exec(this.client), "zremrangebyscore");
  /**
   * @see https://redis.io/commands/zrevrank
   * @see node_modules/@upstash/redis/docs/commands/zset/zrevrank.mdx
   */
  zrevrank = /* @__PURE__ */ __name((key, member) => new ZRevRankCommand([key, member], this.opts).exec(this.client), "zrevrank");
  /**
   * @see https://redis.io/commands/zscan
   * @see node_modules/@upstash/redis/docs/commands/zset/zscan.mdx
   */
  zscan = /* @__PURE__ */ __name((...args) => new ZScanCommand(args, this.opts).exec(this.client), "zscan");
  /**
   * @see https://redis.io/commands/zscore
   * @see node_modules/@upstash/redis/docs/commands/zset/zscore.mdx
   */
  zscore = /* @__PURE__ */ __name((key, member) => new ZScoreCommand([key, member], this.opts).exec(this.client), "zscore");
  /**
   * @see https://redis.io/commands/zunion
   */
  zunion = /* @__PURE__ */ __name((...args) => new ZUnionCommand(args, this.opts).exec(this.client), "zunion");
  /**
   * @see https://redis.io/commands/zunionstore
   * @see node_modules/@upstash/redis/docs/commands/zset/zunionstore.mdx
   */
  zunionstore = /* @__PURE__ */ __name((...args) => new ZUnionStoreCommand(args, this.opts).exec(this.client), "zunionstore");
};
var VERSION = "v1.41.0";

// node_modules/@upstash/redis/nodejs.mjs
var BUILD = /* @__PURE__ */ Symbol("build");
var TextFieldBuilder = class _TextFieldBuilder {
  static {
    __name(this, "_TextFieldBuilder");
  }
  _noTokenize;
  _noStem;
  _from;
  constructor(noTokenize = { noTokenize: false }, noStem = { noStem: false }, from = { from: null }) {
    this._noTokenize = noTokenize;
    this._noStem = noStem;
    this._from = from;
  }
  noTokenize() {
    return new _TextFieldBuilder({ noTokenize: true }, this._noStem, this._from);
  }
  noStem() {
    return new _TextFieldBuilder(this._noTokenize, { noStem: true }, this._from);
  }
  from(field) {
    return new _TextFieldBuilder(this._noTokenize, this._noStem, { from: field });
  }
  [BUILD]() {
    return {
      type: "TEXT",
      ...this._noTokenize.noTokenize ? { noTokenize: true } : {},
      ...this._noStem.noStem ? { noStem: true } : {},
      ...this._from.from ? { from: this._from.from } : {}
    };
  }
};
var NumericFieldBuilder = class _NumericFieldBuilder {
  static {
    __name(this, "_NumericFieldBuilder");
  }
  type;
  _from;
  constructor(type, from = { from: null }) {
    this.type = type;
    this._from = from;
  }
  from(field) {
    return new _NumericFieldBuilder(this.type, { from: field });
  }
  [BUILD]() {
    return this._from.from ? {
      type: this.type,
      fast: true,
      from: this._from.from
    } : {
      type: this.type,
      fast: true
    };
  }
};
var BoolFieldBuilder = class _BoolFieldBuilder {
  static {
    __name(this, "_BoolFieldBuilder");
  }
  _fast;
  _from;
  constructor(fast = { fast: false }, from = { from: null }) {
    this._fast = fast;
    this._from = from;
  }
  fast() {
    return new _BoolFieldBuilder({ fast: true }, this._from);
  }
  from(field) {
    return new _BoolFieldBuilder(this._fast, { from: field });
  }
  [BUILD]() {
    const hasFast = this._fast.fast;
    const hasFrom = Boolean(this._from.from);
    if (hasFast && hasFrom) {
      return {
        type: "BOOL",
        fast: true,
        from: this._from.from
      };
    }
    if (hasFast) {
      return {
        type: "BOOL",
        fast: true
      };
    }
    if (hasFrom) {
      return {
        type: "BOOL",
        from: this._from.from
      };
    }
    return { type: "BOOL" };
  }
};
var DateFieldBuilder = class _DateFieldBuilder {
  static {
    __name(this, "_DateFieldBuilder");
  }
  _fast;
  _from;
  constructor(fast = { fast: false }, from = { from: null }) {
    this._fast = fast;
    this._from = from;
  }
  fast() {
    return new _DateFieldBuilder({ fast: true }, this._from);
  }
  from(field) {
    return new _DateFieldBuilder(this._fast, { from: field });
  }
  [BUILD]() {
    const hasFast = this._fast.fast;
    const hasFrom = Boolean(this._from.from);
    if (hasFast && hasFrom) {
      return {
        type: "DATE",
        fast: true,
        from: this._from.from
      };
    }
    if (hasFast) {
      return {
        type: "DATE",
        fast: true
      };
    }
    if (hasFrom) {
      return {
        type: "DATE",
        from: this._from.from
      };
    }
    return { type: "DATE" };
  }
};
var HybridFieldBuilder = class _HybridFieldBuilder {
  static {
    __name(this, "_HybridFieldBuilder");
  }
  _noStem;
  _from;
  constructor(noStem = { noStem: false }, from = { from: null }) {
    this._noStem = noStem;
    this._from = from;
  }
  noStem() {
    return new _HybridFieldBuilder({ noStem: true }, this._from);
  }
  from(field) {
    return new _HybridFieldBuilder(this._noStem, { from: field });
  }
  [BUILD]() {
    return {
      type: "HYBRID",
      ...this._noStem.noStem ? { noStem: true } : {},
      ...this._from.from ? { from: this._from.from } : {}
    };
  }
};
var KeywordFieldBuilder = class {
  static {
    __name(this, "KeywordFieldBuilder");
  }
  [BUILD]() {
    return { type: "KEYWORD" };
  }
};
var FacetFieldBuilder = class {
  static {
    __name(this, "FacetFieldBuilder");
  }
  [BUILD]() {
    return { type: "FACET" };
  }
};
if (typeof atob === "undefined") {
  global.atob = (b64) => Buffer.from(b64, "base64").toString("utf8");
}
var Redis2 = class _Redis extends Redis {
  static {
    __name(this, "_Redis");
  }
  /**
   * Create a new redis client by providing a custom `Requester` implementation
   *
   * @example
   * ```ts
   *
   * import { UpstashRequest, Requester, UpstashResponse, Redis } from "@upstash/redis"
   *
   *  const requester: Requester = {
   *    request: <TResult>(req: UpstashRequest): Promise<UpstashResponse<TResult>> => {
   *      // ...
   *    }
   *  }
   *
   * const redis = new Redis(requester)
   * ```
   */
  constructor(configOrRequester) {
    if ("request" in configOrRequester) {
      super(configOrRequester);
      return;
    }
    if (!configOrRequester.url) {
      console.warn(
        `[Upstash Redis] The 'url' property is missing or undefined in your Redis config. To create a database instantly (no signup needed), run: curl -X POST https://upstash.com/start-redis`
      );
    } else if (configOrRequester.url.startsWith(" ") || configOrRequester.url.endsWith(" ") || /\r|\n/.test(configOrRequester.url)) {
      console.warn(
        "[Upstash Redis] The redis url contains whitespace or newline, which can cause errors!"
      );
    }
    if (!configOrRequester.token) {
      console.warn(
        `[Upstash Redis] The 'token' property is missing or undefined in your Redis config. To create a database instantly (no signup needed), run: curl -X POST https://upstash.com/start-redis`
      );
    } else if (configOrRequester.token.startsWith(" ") || configOrRequester.token.endsWith(" ") || /\r|\n/.test(configOrRequester.token)) {
      console.warn(
        "[Upstash Redis] The redis token contains whitespace or newline, which can cause errors!"
      );
    }
    const client = new HttpClient({
      baseUrl: configOrRequester.url,
      retry: configOrRequester.retry,
      headers: { authorization: `Bearer ${configOrRequester.token}` },
      agent: configOrRequester.agent,
      responseEncoding: configOrRequester.responseEncoding,
      cache: configOrRequester.cache ?? "no-store",
      signal: configOrRequester.signal,
      keepAlive: configOrRequester.keepAlive,
      readYourWrites: configOrRequester.readYourWrites
    });
    const safeEnv = typeof process === "object" && process && typeof process.env === "object" && process.env ? process.env : {};
    super(client, {
      automaticDeserialization: configOrRequester.automaticDeserialization,
      enableTelemetry: configOrRequester.enableTelemetry ?? !safeEnv.UPSTASH_DISABLE_TELEMETRY,
      latencyLogging: configOrRequester.latencyLogging,
      enableAutoPipelining: configOrRequester.enableAutoPipelining
    });
    const nodeVersion = typeof process === "object" && process ? process.version : void 0;
    this.addTelemetry({
      runtime: (
        // @ts-expect-error to silence compiler
        typeof EdgeRuntime === "string" ? "edge-light" : nodeVersion ? `node@${nodeVersion}` : "unknown"
      ),
      platform: safeEnv.UPSTASH_CONSOLE ? "console" : safeEnv.VERCEL ? "vercel" : safeEnv.AWS_REGION ? "aws" : "unknown",
      sdk: `@upstash/redis@${VERSION}`
    });
    if (this.enableAutoPipelining) {
      return this.autoPipeline();
    }
  }
  /**
   * Create a new Upstash Redis instance from environment variables.
   *
   * Use this to automatically load connection secrets from your environment
   * variables. For instance when using the Vercel integration.
   *
   * This tries to load connection details from your environment using `process.env`:
   * - URL: `UPSTASH_REDIS_REST_URL` or fallback to `KV_REST_API_URL`
   * - Token: `UPSTASH_REDIS_REST_TOKEN` or fallback to `KV_REST_API_TOKEN`
   *
   * The fallback variables provide compatibility with Vercel KV and other platforms
   * that may use different naming conventions.
   */
  static fromEnv(config) {
    if (typeof process !== "object" || !process || typeof process.env !== "object" || !process.env) {
      throw new TypeError(
        '[Upstash Redis] Unable to get environment variables, `process.env` is undefined. If you are deploying to cloudflare, please import from "@upstash/redis/cloudflare" instead'
      );
    }
    const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
    if (!url) {
      console.warn(
        "[Upstash Redis] Unable to find environment variable: `UPSTASH_REDIS_REST_URL`. To create a database instantly (no signup needed), run: curl -X POST https://upstash.com/start-redis"
      );
    }
    const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
    if (!token) {
      console.warn(
        "[Upstash Redis] Unable to find environment variable: `UPSTASH_REDIS_REST_TOKEN`. To create a database instantly (no signup needed), run: curl -X POST https://upstash.com/start-redis"
      );
    }
    return new _Redis({ ...config, url, token });
  }
};

// src/lib/redis.ts
var globalForRedis = globalThis;
function createRedisClient() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "[Redis] UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN is missing. Redis caching and distributed features will fail-open (bypass to database)."
      );
    }
    return null;
  }
  return new Redis2({
    url,
    token,
    retry: {
      retries: 2,
      backoff: /* @__PURE__ */ __name((retryCount) => Math.min(Math.exp(retryCount) * 50, 500), "backoff")
    }
  });
}
__name(createRedisClient, "createRedisClient");
var redis = globalForRedis.redisClient !== void 0 ? globalForRedis.redisClient : createRedisClient();
if (process.env.NODE_ENV !== "production") {
  globalForRedis.redisClient = redis;
}
var isRedisConfigured = /* @__PURE__ */ __name(() => {
  return Boolean(redis && process.env.REDIS_CACHE_ENABLED !== "false");
}, "isRedisConfigured");

// src/services/cache/cache-keys.ts
init_esm();
function getEnvPrefix() {
  const env = process.env.NODE_ENV || "development";
  if (env === "production") return "elev8:prod";
  if (env === "test") return "elev8:test";
  return "elev8:dev";
}
__name(getEnvPrefix, "getEnvPrefix");
var CacheKeys = {
  // User & Identity Mapping
  userByClerkId: /* @__PURE__ */ __name((clerkId) => `${getEnvPrefix()}:user:clerk:${clerkId}`, "userByClerkId"),
  userProfile: /* @__PURE__ */ __name((userId) => `${getEnvPrefix()}:user:profile:${userId}`, "userProfile"),
  // Static Catalogs & Reference Data
  catalogAllRoles: /* @__PURE__ */ __name(() => `${getEnvPrefix()}:catalog:roles:all`, "catalogAllRoles"),
  catalogRoleProfile: /* @__PURE__ */ __name((normalizedRole) => `${getEnvPrefix()}:catalog:role:${normalizedRole}`, "catalogRoleProfile"),
  catalogResumeTemplates: /* @__PURE__ */ __name(() => `${getEnvPrefix()}:catalog:templates:resume`, "catalogResumeTemplates"),
  catalogGlobalRoadmaps: /* @__PURE__ */ __name((page = 1, sort = "newest") => `${getEnvPrefix()}:catalog:roadmaps:global:${page}:${sort}`, "catalogGlobalRoadmaps"),
  catalogGlobalRoadmapsPattern: /* @__PURE__ */ __name(() => `${getEnvPrefix()}:catalog:roadmaps:global:*`, "catalogGlobalRoadmapsPattern"),
  catalogGlobalInterviews: /* @__PURE__ */ __name((page = 1, sort = "NEWEST", difficulty = "ALL") => `${getEnvPrefix()}:catalog:interviews:global:${page}:${sort}:${difficulty}`, "catalogGlobalInterviews"),
  catalogGlobalInterviewsPattern: /* @__PURE__ */ __name(() => `${getEnvPrefix()}:catalog:interviews:global:*`, "catalogGlobalInterviewsPattern"),
  // Artifacts & Computed Reports
  roadmapArtifact: /* @__PURE__ */ __name((roadmapId) => `${getEnvPrefix()}:artifact:roadmap:${roadmapId}`, "roadmapArtifact"),
  resumeReport: /* @__PURE__ */ __name((resumeId) => `${getEnvPrefix()}:artifact:resume:${resumeId}`, "resumeReport"),
  interviewArtifact: /* @__PURE__ */ __name((interviewId) => `${getEnvPrefix()}:artifact:interview:${interviewId}`, "interviewArtifact"),
  resumeBuilderArtifact: /* @__PURE__ */ __name((resumeId) => `${getEnvPrefix()}:artifact:resume-builder:${resumeId}`, "resumeBuilderArtifact"),
  // Notifications
  unreadNotificationCount: /* @__PURE__ */ __name((userId) => `${getEnvPrefix()}:notify:unread:${userId}`, "unreadNotificationCount"),
  // Quotas & Limits
  quota: /* @__PURE__ */ __name((type, userId) => `${getEnvPrefix()}:quota:${type}:${userId}`, "quota"),
  // Distributed Locks
  workflowLock: /* @__PURE__ */ __name((action, entityId) => `${getEnvPrefix()}:lock:${action}:${entityId}`, "workflowLock")
};
var CacheTTL = {
  SHORT: 60,
  // 1 minute
  MEDIUM: 300,
  // 5 minutes
  USER_SESSION: 900,
  // 15 minutes
  USER_PROFILE: 1800,
  // 30 minutes
  ARTIFACT: 14400,
  // 4 hours
  CATALOG: 86400,
  // 24 hours
  LOCK: 30
  // 30 seconds
};

// src/services/cache/cache.service.ts
var CacheService = class {
  static {
    __name(this, "CacheService");
  }
  /**
   * Retrieves an item from cache, or executes the fetcher on cache miss and caches the result.
   * Completely fail-open: if Redis throws or is unconfigured, executes fetcher directly.
   */
  static async getOrSet(key, fetcher, ttlSeconds = CacheTTL.MEDIUM) {
    if (!isRedisConfigured() || !redis) {
      return fetcher();
    }
    try {
      const cached = await redis.get(key);
      if (cached !== null && cached !== void 0) {
        return cached;
      }
    } catch (err) {
      console.warn(`[CacheService] Read error for key "${key}", falling back to DB:`, err);
    }
    const freshData = await fetcher();
    if (freshData !== null && freshData !== void 0) {
      try {
        await redis.set(key, freshData, { ex: ttlSeconds });
      } catch (err) {
        console.warn(`[CacheService] Write error for key "${key}":`, err);
      }
    }
    return freshData;
  }
  /**
   * Retrieves an item from cache directly.
   */
  static async get(key) {
    if (!isRedisConfigured() || !redis) return null;
    try {
      return await redis.get(key) ?? null;
    } catch (err) {
      console.warn(`[CacheService] Get error for key "${key}":`, err);
      return null;
    }
  }
  /**
   * Sets an item in cache with explicit expiration.
   */
  static async set(key, value, ttlSeconds = CacheTTL.MEDIUM) {
    if (!isRedisConfigured() || !redis) return;
    try {
      await redis.set(key, value, { ex: ttlSeconds });
    } catch (err) {
      console.warn(`[CacheService] Set error for key "${key}":`, err);
    }
  }
  /**
   * Deletes a specific key.
   */
  static async del(key) {
    if (!isRedisConfigured() || !redis) return;
    try {
      await redis.del(key);
    } catch (err) {
      console.warn(`[CacheService] Delete error for key "${key}":`, err);
    }
  }
  /**
   * Deletes multiple keys matching a wildcard pattern (e.g. "catalog:roadmaps:*").
   */
  static async delPattern(pattern) {
    if (!isRedisConfigured() || !redis) return;
    try {
      const keys = await redis.keys(pattern);
      if (keys && keys.length > 0) {
        await redis.del(...keys);
      }
    } catch (err) {
      console.warn(`[CacheService] Pattern delete error for "${pattern}":`, err);
    }
  }
  /**
   * Atomically increments an integer key. If it doesn't exist, initializes to 1.
   * Optionally resets TTL.
   */
  static async incr(key, ttlSeconds) {
    if (!isRedisConfigured() || !redis) return null;
    try {
      const val = await redis.incr(key);
      if (ttlSeconds && val === 1) {
        await redis.expire(key, ttlSeconds);
      }
      return val;
    } catch (err) {
      console.warn(`[CacheService] Incr error for key "${key}":`, err);
      return null;
    }
  }
  /**
   * Acquires a distributed lock using SETNX with an expiration TTL.
   * Returns true if lock was acquired, false if already locked.
   * If Redis is unavailable, returns true (fail-open) so user operations are not blocked.
   */
  static async acquireLock(lockKey, ttlSeconds = CacheTTL.LOCK) {
    if (!isRedisConfigured() || !redis) return true;
    try {
      const result = await redis.set(lockKey, "locked", {
        nx: true,
        ex: ttlSeconds
      });
      return result === "OK";
    } catch (err) {
      console.warn(`[CacheService] Lock acquisition error for "${lockKey}":`, err);
      return true;
    }
  }
  /**
   * Releases a distributed lock.
   */
  static async releaseLock(lockKey) {
    if (!isRedisConfigured() || !redis) return;
    try {
      await redis.del(lockKey);
    } catch (err) {
      console.warn(`[CacheService] Lock release error for "${lockKey}":`, err);
    }
  }
};

// src/lib/notify.ts
async function createNotification(input) {
  const type = input.type || "SYSTEM";
  const actionUrl = input.actionUrl || null;
  let notification;
  if (input.idempotencyKey) {
    notification = await prisma.notification.upsert({
      where: { idempotencyKey: input.idempotencyKey },
      create: {
        userId: input.userId,
        title: input.title,
        message: input.message,
        type,
        status: "UNREAD",
        actionUrl,
        idempotencyKey: input.idempotencyKey
      },
      update: {}
      // If already exists, return existing row
    });
  } else {
    notification = await prisma.notification.create({
      data: {
        userId: input.userId,
        title: input.title,
        message: input.message,
        type,
        status: "UNREAD",
        actionUrl
      }
    });
  }
  await CacheService.del(CacheKeys.unreadNotificationCount(input.userId)).catch(() => {
  });
  await notificationTransport.publish(notification.userId, {
    type: "notification",
    data: {
      id: notification.id,
      userId: notification.userId,
      title: notification.title,
      message: notification.message,
      type: notification.type,
      status: notification.status,
      actionUrl: notification.actionUrl,
      idempotencyKey: notification.idempotencyKey,
      createdAt: notification.createdAt,
      readAt: notification.readAt
    }
  }).catch((err) => {
    console.error("[createNotification] Transport publish failed:", err?.message || err);
  });
  return notification;
}
__name(createNotification, "createNotification");

// src/features/progress/types.ts
init_esm();
var import_client2 = __toESM(require_default2());

// src/features/progress/services/module-activity.service.ts
init_esm();
var import_server = __toESM(require_server());
var ModuleActivityService = class {
  static {
    __name(this, "ModuleActivityService");
  }
  /**
   * Helper that runs an asynchronous task using Next.js 15 after() when available in request scope,
   * or floating void Promise / background execution when called outside request scope (e.g. background tasks / unit tests).
   */
  static runNonBlocking(task) {
    try {
      (0, import_server.after)(task);
    } catch {
      task().catch((err) => {
        console.warn("[ModuleActivityService] Background task failed:", err);
      });
    }
  }
  /**
   * Internal worker executing the 3 database queries for activity ledgering & projections.
   */
  static async executeRecordActivity(userId, module, eventType, completionStatus, metadata, finalEntityId) {
    if (finalEntityId) {
      const existing = await prisma.moduleActivity.findFirst({
        where: {
          userId,
          module,
          eventType,
          entityId: finalEntityId
        }
      });
      if (existing) {
        return {
          id: existing.id,
          userId: existing.userId,
          module: existing.module,
          eventType: existing.eventType,
          completionStatus: existing.completionStatus,
          entityId: existing.entityId,
          metadata: existing.metadata,
          createdAt: existing.createdAt
        };
      }
    }
    const record = await prisma.moduleActivity.create({
      data: {
        userId,
        module,
        eventType,
        completionStatus: completionStatus ?? void 0,
        entityId: finalEntityId ?? void 0,
        metadata: metadata ?? void 0
      }
    });
    await this.updateProgressProjection(userId, module, eventType, metadata, finalEntityId);
    return {
      id: record.id,
      userId: record.userId,
      module: record.module,
      eventType: record.eventType,
      completionStatus: record.completionStatus,
      entityId: record.entityId,
      metadata: record.metadata,
      createdAt: record.createdAt
    };
  }
  /**
   * Records a user's activity in a platform module, handles idempotency,
   * and updates the user's Progress current-state projection.
   * Offloads writes to Next.js 15 after() when called in a server action or route.
   */
  static async recordActivity(inputOrUserId, moduleArg, completionStatusArg, metadataArg) {
    let input;
    if (typeof inputOrUserId === "string") {
      const module2 = moduleArg;
      const completionStatus2 = completionStatusArg;
      const metadata2 = metadataArg;
      let eventType2 = import_client2.ModuleActivityEventType.ASSESSMENT_COMPLETED;
      if (module2 === import_client2.ModuleType.ROADMAP) {
        eventType2 = import_client2.ModuleActivityEventType.ROADMAP_COMPLETED;
      } else if (module2 === import_client2.ModuleType.INTERVIEW_PRACTICE) {
        eventType2 = import_client2.ModuleActivityEventType.INTERVIEW_COMPLETED;
      } else if (module2 === import_client2.ModuleType.RESUME_BUILD) {
        eventType2 = import_client2.ModuleActivityEventType.RESUME_BUILD_COMPLETED;
      } else if (module2 === import_client2.ModuleType.RESUME_SCORE) {
        eventType2 = import_client2.ModuleActivityEventType.RESUME_SCORE_COMPLETED;
      }
      input = {
        userId: inputOrUserId,
        module: module2,
        eventType: eventType2,
        completionStatus: completionStatus2,
        metadata: metadata2,
        entityId: metadata2?.roadmapId || metadata2?.interviewId || metadata2?.resumeId || metadata2?.scoreId || metadata2?.assessmentId
      };
    } else {
      input = inputOrUserId;
    }
    const { userId, module, eventType, entityId, completionStatus, metadata } = input;
    if (!userId || typeof userId !== "string" || !userId.trim()) {
      throw new Error("Valid userId is required to record module activity.");
    }
    const computeIdempotentEntityId = /* @__PURE__ */ __name((event, baseId, meta) => {
      if (!baseId) return void 0;
      switch (event) {
        case import_client2.ModuleActivityEventType.INTERVIEW_QUESTION_ANSWERED:
          if (meta?.questionNumber !== void 0) {
            return `${baseId}:question:${meta.questionNumber}:answered`;
          }
          break;
        case import_client2.ModuleActivityEventType.ROADMAP_GENERATION_STAGE_CHANGED:
          if (meta?.stageNumber !== void 0) {
            return `${baseId}:stage:${meta.stageNumber}`;
          }
          break;
        case import_client2.ModuleActivityEventType.RESUME_UPDATED:
          if (meta?.version !== void 0) {
            return `${baseId}:version:${meta.version}`;
          }
          break;
        default:
          return baseId;
      }
      return baseId;
    }, "computeIdempotentEntityId");
    const finalEntityId = computeIdempotentEntityId(eventType, entityId ?? void 0, metadata);
    try {
      (0, import_server.after)(async () => {
        await this.executeRecordActivity(
          userId,
          module,
          eventType,
          completionStatus,
          metadata,
          finalEntityId
        );
      });
      return {
        id: `opt_${Date.now()}`,
        userId,
        module,
        eventType,
        completionStatus: completionStatus ?? null,
        entityId: finalEntityId ?? null,
        metadata: metadata ?? null,
        createdAt: /* @__PURE__ */ new Date()
      };
    } catch {
      return await this.executeRecordActivity(
        userId,
        module,
        eventType,
        completionStatus,
        metadata,
        finalEntityId
      );
    }
  }
  /**
   * Computes the progress state payload for a given module and event.
   */
  static computeProgressState(module, eventType, metadata, entityId) {
    const now = /* @__PURE__ */ new Date();
    const progressData = {
      lastActivityAt: now
    };
    switch (module) {
      case import_client2.ModuleType.CAREER_ASSESSMENT: {
        let status = import_client2.ModuleProgressStatus.IN_PROGRESS;
        let progress = 50;
        if (eventType === import_client2.ModuleActivityEventType.ASSESSMENT_STARTED) {
          status = import_client2.ModuleProgressStatus.IN_PROGRESS;
          progress = 25;
        } else if (eventType === import_client2.ModuleActivityEventType.ASSESSMENT_READY) {
          status = import_client2.ModuleProgressStatus.READY;
          progress = 75;
        } else if (eventType === import_client2.ModuleActivityEventType.ASSESSMENT_SUBMITTED || eventType === import_client2.ModuleActivityEventType.ASSESSMENT_GENERATION_STARTED || eventType === import_client2.ModuleActivityEventType.ASSESSMENT_GENERATION_STAGE_CHANGED) {
          status = import_client2.ModuleProgressStatus.PROCESSING;
          progress = 90;
        } else if (eventType === import_client2.ModuleActivityEventType.ASSESSMENT_COMPLETED) {
          status = import_client2.ModuleProgressStatus.COMPLETED;
          progress = 100;
        } else if (eventType === import_client2.ModuleActivityEventType.ASSESSMENT_GENERATION_FAILED) {
          status = import_client2.ModuleProgressStatus.FAILED;
        }
        progressData.careerAssessmentStatus = status;
        progressData.careerAssessmentProgress = progress;
        progressData.careerAssessmentMetadata = {
          ...metadata || {},
          assessmentId: entityId,
          lastEvent: eventType,
          updatedAt: now.toISOString()
        };
        break;
      }
      case import_client2.ModuleType.ROADMAP: {
        let status = import_client2.ModuleProgressStatus.IN_PROGRESS;
        let progress = metadata?.progress ?? 0;
        if (eventType === import_client2.ModuleActivityEventType.ROADMAP_STARTED || eventType === import_client2.ModuleActivityEventType.ROADMAP_GENERATION_STARTED || eventType === import_client2.ModuleActivityEventType.ROADMAP_GENERATION_STAGE_CHANGED) {
          status = import_client2.ModuleProgressStatus.PROCESSING;
          progress = metadata?.stageNumber ? Math.round(metadata.stageNumber / 4 * 100) : 20;
        } else if (eventType === import_client2.ModuleActivityEventType.ROADMAP_GENERATED) {
          status = import_client2.ModuleProgressStatus.READY;
          progress = 100;
        } else if (eventType === import_client2.ModuleActivityEventType.ROADMAP_COMPLETED) {
          status = import_client2.ModuleProgressStatus.COMPLETED;
          progress = 100;
        } else if (eventType === import_client2.ModuleActivityEventType.ROADMAP_GENERATION_FAILED) {
          status = import_client2.ModuleProgressStatus.FAILED;
        }
        progressData.roadmapStatus = status;
        progressData.roadmapProgress = progress;
        progressData.roadmapMetadata = {
          ...metadata || {},
          roadmapId: entityId || metadata?.roadmapId,
          lastEvent: eventType,
          updatedAt: now.toISOString()
        };
        break;
      }
      case import_client2.ModuleType.INTERVIEW_PRACTICE: {
        let status = import_client2.ModuleProgressStatus.IN_PROGRESS;
        let progress = metadata?.progress ?? 0;
        if (eventType === import_client2.ModuleActivityEventType.INTERVIEW_STARTED) {
          status = import_client2.ModuleProgressStatus.IN_PROGRESS;
          progress = 10;
        } else if (eventType === import_client2.ModuleActivityEventType.INTERVIEW_QUESTION_ANSWERED) {
          const answered = metadata?.answeredQuestions ?? 0;
          const total = metadata?.totalQuestions ?? 10;
          progress = Math.min(100, Math.round(answered / Math.max(total, 1) * 100));
          status = answered >= total ? import_client2.ModuleProgressStatus.READY : import_client2.ModuleProgressStatus.IN_PROGRESS;
        } else if (eventType === import_client2.ModuleActivityEventType.INTERVIEW_ALL_QUESTIONS_ANSWERED) {
          status = import_client2.ModuleProgressStatus.READY;
          progress = 100;
        } else if (eventType === import_client2.ModuleActivityEventType.INTERVIEW_SUBMITTED || eventType === import_client2.ModuleActivityEventType.INTERVIEW_EVALUATION_STARTED) {
          status = import_client2.ModuleProgressStatus.PROCESSING;
          progress = 100;
        } else if (eventType === import_client2.ModuleActivityEventType.INTERVIEW_COMPLETED) {
          status = import_client2.ModuleProgressStatus.COMPLETED;
          progress = 100;
        } else if (eventType === import_client2.ModuleActivityEventType.INTERVIEW_FAILED) {
          status = import_client2.ModuleProgressStatus.FAILED;
        } else if (eventType === import_client2.ModuleActivityEventType.INTERVIEW_ABANDONED) {
          status = import_client2.ModuleProgressStatus.ABANDONED;
        }
        progressData.interviewStatus = status;
        progressData.interviewProgress = progress;
        progressData.interviewMetadata = {
          ...metadata || {},
          interviewId: entityId || metadata?.interviewId,
          lastEvent: eventType,
          updatedAt: now.toISOString()
        };
        break;
      }
      case import_client2.ModuleType.RESUME_BUILD: {
        let status = import_client2.ModuleProgressStatus.IN_PROGRESS;
        let progress = metadata?.progress ?? 50;
        if (eventType === import_client2.ModuleActivityEventType.RESUME_BUILD_STARTED) {
          status = import_client2.ModuleProgressStatus.IN_PROGRESS;
          progress = 10;
        } else if (eventType === import_client2.ModuleActivityEventType.RESUME_BUILD_READY) {
          status = import_client2.ModuleProgressStatus.READY;
          progress = 90;
        } else if (eventType === import_client2.ModuleActivityEventType.RESUME_BUILD_COMPLETED || eventType === import_client2.ModuleActivityEventType.RESUME_PDF_GENERATED) {
          status = import_client2.ModuleProgressStatus.COMPLETED;
          progress = 100;
        } else if (eventType === import_client2.ModuleActivityEventType.AI_RESUME_BUILD_REQUESTED || eventType === import_client2.ModuleActivityEventType.AI_RESUME_BUILD_STARTED) {
          status = import_client2.ModuleProgressStatus.PROCESSING;
        } else if (eventType === import_client2.ModuleActivityEventType.AI_RESUME_BUILD_COMPLETED) {
          status = import_client2.ModuleProgressStatus.READY;
          progress = 90;
        } else if (eventType === import_client2.ModuleActivityEventType.AI_RESUME_BUILD_FAILED) {
          status = import_client2.ModuleProgressStatus.FAILED;
        }
        progressData.resumeBuildStatus = status;
        progressData.resumeBuildProgress = progress;
        progressData.resumeBuildMetadata = {
          ...metadata || {},
          resumeId: entityId || metadata?.resumeId,
          lastEvent: eventType,
          updatedAt: now.toISOString()
        };
        break;
      }
      case import_client2.ModuleType.RESUME_SCORE: {
        let status = import_client2.ModuleProgressStatus.IN_PROGRESS;
        let progress = 50;
        if (eventType === import_client2.ModuleActivityEventType.RESUME_SCORE_STARTED) {
          status = import_client2.ModuleProgressStatus.PROCESSING;
          progress = 50;
        } else if (eventType === import_client2.ModuleActivityEventType.RESUME_SCORE_COMPLETED) {
          status = import_client2.ModuleProgressStatus.COMPLETED;
          progress = 100;
        } else if (eventType === import_client2.ModuleActivityEventType.RESUME_SCORE_FAILED) {
          status = import_client2.ModuleProgressStatus.FAILED;
        }
        progressData.resumeScoreStatus = status;
        progressData.resumeScoreProgress = progress;
        progressData.resumeScoreMetadata = {
          ...metadata || {},
          scoreId: entityId || metadata?.scoreId,
          overallScore: metadata?.overallScore ?? metadata?.ovrScore,
          atsScore: metadata?.atsScore,
          lastEvent: eventType,
          updatedAt: now.toISOString()
        };
        break;
      }
    }
    return progressData;
  }
  /**
   * Updates the user's current-state Progress projection based on the recorded event.
   */
  static async updateProgressProjection(userId, module, eventType, metadata, entityId) {
    try {
      const progressData = this.computeProgressState(module, eventType, metadata, entityId);
      await prisma.progress.upsert({
        where: { userId },
        create: {
          userId,
          ...progressData
        },
        update: progressData
      });
    } catch (error) {
      console.warn("[ModuleActivityService] Failed to project progress state:", error);
    }
  }
  /**
   * Retrieves recent module activities for a user within a specified day window.
   * Capped to prevent unbounded multi-day transfers across the wire.
   */
  static async getRecentActivity(userId, limitDays = 90, take = 50) {
    if (!userId || typeof userId !== "string" || !userId.trim()) {
      return [];
    }
    const since = new Date(Date.now() - limitDays * 24 * 60 * 60 * 1e3);
    const records = await prisma.moduleActivity.findMany({
      where: {
        userId: userId.trim(),
        createdAt: { gte: since }
      },
      orderBy: { createdAt: "desc" },
      take: Math.min(Math.max(1, take), 100)
    });
    return records.map((r) => ({
      id: r.id,
      userId: r.userId,
      module: r.module,
      eventType: r.eventType,
      completionStatus: r.completionStatus,
      entityId: r.entityId,
      metadata: r.metadata,
      createdAt: r.createdAt
    }));
  }
  /**
   * Retrieves the most recent activity record for a specific module.
   */
  static async getLatestForModule(userId, module) {
    if (!userId || typeof userId !== "string" || !userId.trim()) {
      return null;
    }
    const record = await prisma.moduleActivity.findFirst({
      where: {
        userId: userId.trim(),
        module
      },
      orderBy: { createdAt: "desc" }
    });
    if (!record) return null;
    return {
      id: record.id,
      userId: record.userId,
      module: record.module,
      eventType: record.eventType,
      completionStatus: record.completionStatus,
      entityId: record.entityId,
      metadata: record.metadata,
      createdAt: record.createdAt
    };
  }
  /**
   * Retrieves or initializes the current-state Progress projection for a user.
   */
  static async getProgress(userId) {
    if (!userId || typeof userId !== "string" || !userId.trim()) {
      throw new Error("Valid userId is required to retrieve progress.");
    }
    const cleanUserId = userId.trim();
    let progress = await prisma.progress.findUnique({
      where: { userId: cleanUserId }
    });
    if (!progress) {
      progress = await prisma.progress.create({
        data: {
          userId: cleanUserId
        }
      });
    }
    return {
      id: progress.id,
      userId: progress.userId,
      careerAssessmentStatus: progress.careerAssessmentStatus,
      roadmapStatus: progress.roadmapStatus,
      interviewStatus: progress.interviewStatus,
      resumeBuildStatus: progress.resumeBuildStatus,
      resumeScoreStatus: progress.resumeScoreStatus,
      careerAssessmentProgress: progress.careerAssessmentProgress,
      roadmapProgress: progress.roadmapProgress,
      interviewProgress: progress.interviewProgress,
      resumeBuildProgress: progress.resumeBuildProgress,
      resumeScoreProgress: progress.resumeScoreProgress,
      careerAssessmentMetadata: progress.careerAssessmentMetadata,
      roadmapMetadata: progress.roadmapMetadata,
      interviewMetadata: progress.interviewMetadata,
      resumeBuildMetadata: progress.resumeBuildMetadata,
      resumeScoreMetadata: progress.resumeScoreMetadata,
      lastActivityAt: progress.lastActivityAt,
      createdAt: progress.createdAt,
      updatedAt: progress.updatedAt
    };
  }
};

// src/features/progress/services/index.ts
init_esm();

// src/features/progress/services/progress.service.ts
init_esm();

export {
  require_default2 as require_default,
  prisma,
  CacheKeys,
  CacheTTL,
  CacheService,
  createNotification,
  require_retry2 as require_retry,
  require_constants,
  require_utils2 as require_utils,
  require_request,
  require_action_async_storage_external,
  require_lru_cache,
  require_log,
  require_server,
  import_client2 as import_client,
  ModuleActivityService
};
/*! Bundled license information:

@prisma/client/runtime/library.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.5.0
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
//# sourceMappingURL=chunk-Q5MBDOPE.mjs.map
