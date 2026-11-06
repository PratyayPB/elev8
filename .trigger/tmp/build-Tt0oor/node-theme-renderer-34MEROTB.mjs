import {
  __name,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// src/features/resume-builder/workers/node-theme-renderer.ts
init_esm();
import path from "path";
import { fork } from "child_process";
async function renderThemeInNodeWorker({
  template,
  jsonResume,
  timeoutMs = 8e3
}) {
  return new Promise((resolve, reject) => {
    const workerPath = path.resolve(
      process.cwd(),
      "src/features/resume-builder/workers/theme-worker.cjs"
    );
    let child = null;
    let timer = null;
    let isSettled = false;
    const cleanup = /* @__PURE__ */ __name(() => {
      if (timer) clearTimeout(timer);
      if (child && !child.killed) {
        try {
          child.kill();
        } catch {
        }
      }
    }, "cleanup");
    try {
      child = fork(workerPath, [], {
        stdio: ["pipe", "pipe", "pipe", "ipc"]
      });
    } catch (forkErr) {
      cleanup();
      return reject(
        new Error(`Failed to fork theme-worker: ${forkErr?.message || forkErr}`)
      );
    }
    timer = setTimeout(() => {
      if (!isSettled) {
        isSettled = true;
        cleanup();
        reject(
          new Error(
            `Theme rendering timed out for "${template}" after ${timeoutMs}ms`
          )
        );
      }
    }, timeoutMs);
    child.on("message", (msg) => {
      if (isSettled) return;
      isSettled = true;
      cleanup();
      if (msg && msg.success) {
        resolve(msg.html);
      } else {
        const errorMsg = msg?.error || "Unknown theme render failure";
        const error = new Error(errorMsg);
        if (msg?.stack) error.stack = msg.stack;
        reject(error);
      }
    });
    child.on("error", (err) => {
      if (isSettled) return;
      isSettled = true;
      cleanup();
      reject(err);
    });
    child.on("exit", (code) => {
      if (isSettled) return;
      isSettled = true;
      cleanup();
      if (code !== 0) {
        reject(new Error(`Theme worker exited unexpectedly with code ${code}`));
      }
    });
    child.send({ id: 1, template, jsonResume });
  });
}
__name(renderThemeInNodeWorker, "renderThemeInNodeWorker");
export {
  renderThemeInNodeWorker
};
//# sourceMappingURL=node-theme-renderer-34MEROTB.mjs.map
