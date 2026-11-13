import path from "path";
import fs from "fs";
import { fork } from "child_process";

export interface RenderThemeOptions {
  template: string;
  jsonResume: any;
  timeoutMs?: number;
}

/**
 * Finds the worker script across different runtime environments (local vs. Vercel serverless Lambda)
 */
function resolveWorkerPath(): string {
  const candidatePaths = [
    path.resolve(process.cwd(), "src/features/resume-builder/workers/theme-worker.cjs"),
    path.resolve(__dirname, "theme-worker.cjs"),
    path.resolve(__dirname, "../../workers/theme-worker.cjs"),
    path.resolve(process.cwd(), ".next/server/chunks/theme-worker.cjs"),
  ];

  for (const candidate of candidatePaths) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  // Fallback to primary expected path
  return candidatePaths[0];
}

/**
 * Executes JSONResume theme rendering in an isolated Node.js child process.
 * This completely isolates execution from Next.js 15 React Server Component (RSC)
 * webpack bundle restrictions (where React.createContext is omitted).
 */
export async function renderThemeInNodeWorker({
  template,
  jsonResume,
  timeoutMs = 8000,
}: RenderThemeOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    // Resolve absolute path to worker script
    const workerPath = resolveWorkerPath();

    let child: ReturnType<typeof fork> | null = null;
    let timer: NodeJS.Timeout | null = null;
    let isSettled = false;

    const cleanup = () => {
      if (timer) clearTimeout(timer);
      if (child && !child.killed) {
        try {
          child.kill();
        } catch {
          // ignore kill errors
        }
      }
    };

    try {
      child = fork(workerPath, [], {
        stdio: ["pipe", "pipe", "pipe", "ipc"],
      });
    } catch (forkErr: any) {
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

    child.on("message", (msg: any) => {
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

    // Send payload to worker
    child.send({ id: 1, template, jsonResume });
  });
}
