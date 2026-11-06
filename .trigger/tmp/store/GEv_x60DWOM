import {
  __commonJS,
  isNext16OrHigher
} from "./chunk-A76ZDJXN.mjs";
import {
  __name,
  __require,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/@clerk/nextjs/dist/esm/server/fs/middleware-location.js
init_esm();

// node_modules/@clerk/nextjs/dist/esm/server/fs/utils.js
init_esm();

// node_modules/@clerk/nextjs/dist/esm/runtime/node/safe-node-apis.js
init_esm();
var require_safe_node_apis = __commonJS({
  "src/runtime/node/safe-node-apis.js"(exports, module) {
    const { existsSync, writeFileSync, readFileSync, appendFileSync, mkdirSync, rmSync } = __require("node:fs");
    const path = __require("node:path");
    const fs = {
      existsSync,
      writeFileSync,
      readFileSync,
      appendFileSync,
      mkdirSync,
      rmSync
    };
    const cwd = /* @__PURE__ */ __name(() => process.cwd(), "cwd");
    module.exports = { fs, path, cwd };
  }
});
var safe_node_apis_default = require_safe_node_apis();

// node_modules/@clerk/nextjs/dist/esm/server/fs/utils.js
function assertNotNullable(value, moduleName) {
  if (!value) {
    throw new Error(`Clerk: ${moduleName} is missing. This is an internal error. Please contact Clerk's support.`);
  }
}
__name(assertNotNullable, "assertNotNullable");
var nodeFsOrThrow = /* @__PURE__ */ __name(() => {
  assertNotNullable(safe_node_apis_default.fs, "fs");
  return safe_node_apis_default.fs;
}, "nodeFsOrThrow");
var nodePathOrThrow = /* @__PURE__ */ __name(() => {
  assertNotNullable(safe_node_apis_default.path, "path");
  return safe_node_apis_default.path;
}, "nodePathOrThrow");
var nodeCwdOrThrow = /* @__PURE__ */ __name(() => {
  assertNotNullable(safe_node_apis_default.cwd, "cwd");
  return safe_node_apis_default.cwd;
}, "nodeCwdOrThrow");

// node_modules/@clerk/nextjs/dist/esm/server/fs/middleware-location.js
function hasSrcAppDir() {
  const { existsSync } = nodeFsOrThrow();
  const path = nodePathOrThrow();
  const cwd = nodeCwdOrThrow();
  const projectWithAppSrc = path.join(cwd(), "src", "app");
  return !!existsSync(projectWithAppSrc);
}
__name(hasSrcAppDir, "hasSrcAppDir");
function suggestMiddlewareLocation() {
  const fileExtensions = ["ts", "js"];
  const fileNames = isNext16OrHigher ? ["middleware", "proxy"] : ["middleware"];
  const fileNameDisplay = isNext16OrHigher ? "middleware or proxy" : "middleware";
  const suggestionMessage = /* @__PURE__ */ __name((fileName, extension, to, from) => `Clerk: clerkMiddleware() was not run, your ${fileNameDisplay} file might be misplaced. Move your ${fileNameDisplay} file to ./${to}${fileName}.${extension}. Currently located at ./${from}${fileName}.${extension}`, "suggestionMessage");
  const { existsSync } = nodeFsOrThrow();
  const path = nodePathOrThrow();
  const cwd = nodeCwdOrThrow();
  const projectWithAppSrcPath = path.join(cwd(), "src", "app");
  const projectWithAppPath = path.join(cwd(), "app");
  const checkMiddlewareLocation = /* @__PURE__ */ __name((basePath, to, from) => {
    for (const fileName of fileNames) {
      for (const fileExtension of fileExtensions) {
        if (existsSync(path.join(basePath, `${fileName}.${fileExtension}`))) {
          return suggestionMessage(fileName, fileExtension, to, from);
        }
      }
    }
    return void 0;
  }, "checkMiddlewareLocation");
  if (existsSync(projectWithAppSrcPath)) {
    return checkMiddlewareLocation(projectWithAppSrcPath, "src/", "src/app/") || checkMiddlewareLocation(cwd(), "src/", "");
  }
  if (existsSync(projectWithAppPath)) {
    return checkMiddlewareLocation(projectWithAppPath, "", "app/");
  }
  return void 0;
}
__name(suggestMiddlewareLocation, "suggestMiddlewareLocation");
export {
  hasSrcAppDir,
  suggestMiddlewareLocation
};
//# sourceMappingURL=middleware-location-VLFPBRDX.mjs.map
