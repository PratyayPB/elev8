import {
  InputStreamOncePromise,
  ManualWaitpointPromise,
  SemanticInternalAttributes,
  SpanStatusCode,
  WaitpointTimeoutError,
  accessoryAttributes,
  apiClientManager,
  conditionallyImportAndParsePacket,
  init_esm as init_esm2,
  inputStreams,
  locals,
  logger,
  mergeRequestOptions,
  prisma,
  realtimeStreams,
  require_default,
  runMetadata,
  runtime,
  taskContext,
  tracer
} from "./chunk-X57CFT4W.mjs";
import {
  __name,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/@trigger.dev/sdk/dist/esm/v3/metadata.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/sessionStreams/types.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/streams.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/locals.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/streams.js
init_esm2();
var DEFAULT_STREAM_KEY = "default";
var inChatAgentRunKey = locals.create("streams.inChatAgentRun");
var chatAgentStreamsWarnedKey = locals.create("streams.chatAgentWarned");
function warnIfChatAgentStreamsMisuse(method) {
  if (!locals.get(inChatAgentRunKey))
    return;
  if (locals.get(chatAgentStreamsWarnedKey))
    return;
  locals.set(chatAgentStreamsWarnedKey, true);
  logger.warn(`streams.${method}() was called inside a chat.agent run. This writes to a run-scoped realtime stream and is NOT visible on the chat session, so the chat UI will not see these chunks. For chat output use chat.response.write() or chat.stream.* instead. See https://trigger.dev/docs/ai-chat/patterns/large-payloads. (Logged once per run; subsequent streams.${method}() calls in this run are silent.)`);
}
__name(warnIfChatAgentStreamsMisuse, "warnIfChatAgentStreamsMisuse");
function pipe(keyOrValue, valueOrOptions, options) {
  let key;
  let value;
  let opts;
  if (typeof keyOrValue === "string") {
    key = keyOrValue;
    value = valueOrOptions;
    opts = options;
  } else {
    key = DEFAULT_STREAM_KEY;
    value = keyOrValue;
    opts = valueOrOptions;
  }
  return pipeInternal(key, value, opts, opts?.spanName ?? "streams.pipe()");
}
__name(pipe, "pipe");
function pipeInternal(key, value, opts, spanName) {
  warnIfChatAgentStreamsMisuse(spanName === "streams.writer()" ? "writer" : "pipe");
  const runId = getRunIdForOptions(opts);
  if (!runId) {
    throw new Error("Could not determine the target run ID for the realtime stream. Please specify a target run ID using the `target` option or use this function from inside a task.");
  }
  const span = tracer.startSpan(spanName, {
    attributes: {
      key,
      runId,
      [SemanticInternalAttributes.ENTITY_TYPE]: "realtime-stream",
      [SemanticInternalAttributes.ENTITY_ID]: `${runId}:${key}`,
      [SemanticInternalAttributes.STYLE_ICON]: "streams",
      ...opts?.collapsed ? { [SemanticInternalAttributes.COLLAPSED]: true } : {},
      ...accessoryAttributes({
        items: [
          {
            text: key,
            variant: "normal"
          }
        ],
        style: "codepath"
      })
    }
  });
  const requestOptions = mergeRequestOptions({}, opts?.requestOptions);
  try {
    const instance = realtimeStreams.pipe(key, value, {
      signal: opts?.signal,
      target: runId,
      requestOptions
    });
    instance.wait().finally(() => {
      span.end();
    });
    return {
      stream: instance.stream,
      waitUntilComplete: /* @__PURE__ */ __name(async () => {
        return instance.wait();
      }, "waitUntilComplete")
    };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      span.end();
      throw error;
    }
    if (error instanceof Error || typeof error === "string") {
      span.recordException(error);
    } else {
      span.recordException(String(error));
    }
    span.setStatus({ code: SpanStatusCode.ERROR });
    span.end();
    throw error;
  }
}
__name(pipeInternal, "pipeInternal");
async function read(runId, keyOrOptions, options) {
  let key;
  let opts;
  if (typeof keyOrOptions === "string") {
    key = keyOrOptions;
    opts = options;
  } else {
    key = DEFAULT_STREAM_KEY;
    opts = keyOrOptions;
  }
  return readStreamImpl(runId, key, opts);
}
__name(read, "read");
async function readStreamImpl(runId, key, options) {
  warnIfChatAgentStreamsMisuse("read");
  const apiClient = apiClientManager.clientOrThrow();
  const span = tracer.startSpan("streams.read()", {
    attributes: {
      key,
      runId,
      [SemanticInternalAttributes.ENTITY_TYPE]: "realtime-stream",
      [SemanticInternalAttributes.ENTITY_ID]: `${runId}:${key}`,
      [SemanticInternalAttributes.ENTITY_METADATA]: JSON.stringify({
        startIndex: options?.startIndex
      }),
      [SemanticInternalAttributes.STYLE_ICON]: "streams",
      ...accessoryAttributes({
        items: [
          {
            text: key,
            variant: "normal"
          }
        ],
        style: "codepath"
      })
    }
  });
  return await apiClient.fetchStream(runId, key, {
    signal: options?.signal,
    timeoutInSeconds: options?.timeoutInSeconds ?? 60,
    lastEventId: options?.startIndex ? (options.startIndex - 1).toString() : void 0,
    from: options?.startIndex !== void 0 ? void 0 : options?.from,
    onComplete: /* @__PURE__ */ __name(() => {
      span.end();
    }, "onComplete"),
    onError: /* @__PURE__ */ __name((error) => {
      span.recordException(error);
      span.setStatus({ code: SpanStatusCode.ERROR });
      span.end();
    }, "onError")
  });
}
__name(readStreamImpl, "readStreamImpl");
function append(keyOrValue, valueOrOptions, options) {
  if (typeof keyOrValue === "string" && typeof valueOrOptions === "string") {
    return appendInternal(keyOrValue, valueOrOptions, options);
  }
  if (typeof keyOrValue === "string") {
    if (isAppendStreamOptions(valueOrOptions)) {
      return appendInternal(DEFAULT_STREAM_KEY, keyOrValue, valueOrOptions);
    } else {
      if (!valueOrOptions) {
        return appendInternal(DEFAULT_STREAM_KEY, keyOrValue, options);
      }
      return appendInternal(keyOrValue, valueOrOptions, options);
    }
  } else {
    if (isAppendStreamOptions(valueOrOptions)) {
      return appendInternal(DEFAULT_STREAM_KEY, keyOrValue, valueOrOptions);
    } else {
      return appendInternal(DEFAULT_STREAM_KEY, keyOrValue, options);
    }
  }
}
__name(append, "append");
async function appendInternal(key, part, options) {
  warnIfChatAgentStreamsMisuse("append");
  const runId = getRunIdForOptions(options);
  if (!runId) {
    throw new Error("Could not determine the target run ID for the realtime stream. Please specify a target run ID using the `target` option or use this function from inside a task.");
  }
  const span = tracer.startSpan("streams.append()", {
    attributes: {
      key,
      runId,
      [SemanticInternalAttributes.ENTITY_TYPE]: "realtime-stream",
      [SemanticInternalAttributes.ENTITY_ID]: `${runId}:${key}`,
      [SemanticInternalAttributes.STYLE_ICON]: "streams",
      ...accessoryAttributes({
        items: [
          {
            text: key,
            variant: "normal"
          }
        ],
        style: "codepath"
      })
    }
  });
  try {
    await realtimeStreams.append(key, part, options);
    span.end();
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      span.end();
      throw error;
    }
    if (error instanceof Error || typeof error === "string") {
      span.recordException(error);
    } else {
      span.recordException(String(error));
    }
    span.setStatus({ code: SpanStatusCode.ERROR });
    span.end();
    throw error;
  }
}
__name(appendInternal, "appendInternal");
function isAppendStreamOptions(val) {
  return typeof val === "object" && val !== null && !Array.isArray(val) && ("target" in val && typeof val.target === "string" || "requestOptions" in val && typeof val.requestOptions === "object");
}
__name(isAppendStreamOptions, "isAppendStreamOptions");
function writer(keyOrOptions, valueOrOptions) {
  if (typeof keyOrOptions === "string") {
    return writerInternal(keyOrOptions, valueOrOptions);
  }
  return writerInternal(DEFAULT_STREAM_KEY, keyOrOptions);
}
__name(writer, "writer");
function writerInternal(key, options) {
  let controller;
  const ongoingStreamPromises = [];
  const stream2 = new ReadableStream({
    start(controllerArg) {
      controller = controllerArg;
    }
  });
  function safeEnqueue(data) {
    try {
      controller.enqueue(data);
    } catch (_error) {
    }
  }
  __name(safeEnqueue, "safeEnqueue");
  try {
    const result = options.execute({
      write(part) {
        safeEnqueue(part);
      },
      merge(streamArg) {
        ongoingStreamPromises.push((async () => {
          const reader = streamArg.getReader();
          while (true) {
            const { done, value } = await reader.read();
            if (done)
              break;
            safeEnqueue(value);
          }
        })().catch((error) => {
          console.error(error);
        }));
      }
    });
    if (result) {
      ongoingStreamPromises.push(result.catch((error) => {
        console.error(error);
      }));
    }
  } catch (error) {
    console.error(error);
  }
  const waitForStreams = new Promise((resolve, reject) => {
    (async () => {
      while (ongoingStreamPromises.length > 0) {
        await ongoingStreamPromises.shift();
      }
      resolve();
    })().catch(reject);
  });
  waitForStreams.finally(() => {
    try {
      controller.close();
    } catch (_error) {
    }
  });
  return pipeInternal(key, stream2, options, options.spanName ?? "streams.writer()");
}
__name(writerInternal, "writerInternal");
function define(opts) {
  return {
    id: opts.id,
    pipe(value, options) {
      return pipe(opts.id, value, options);
    },
    read(runId, options) {
      return read(runId, opts.id, options);
    },
    async append(value, options) {
      const { waitUntilComplete } = writer(opts.id, {
        ...options,
        spanName: "streams.append()",
        execute: /* @__PURE__ */ __name(({ write }) => {
          write(value);
        }, "execute")
      });
      await waitUntilComplete();
    },
    writer(options) {
      return writer(opts.id, options);
    }
  };
}
__name(define, "define");
function input(opts) {
  return {
    id: opts.id,
    on(handler) {
      return inputStreams.on(opts.id, handler);
    },
    once(options) {
      const ctx = taskContext.ctx;
      const runId = ctx?.run.id;
      const innerPromise = inputStreams.once(opts.id, options);
      return new InputStreamOncePromise((resolve, reject) => {
        tracer.startActiveSpan(options?.spanName ?? `inputStream.once()`, async () => {
          const result = await innerPromise;
          resolve(result);
        }, {
          attributes: {
            [SemanticInternalAttributes.STYLE_ICON]: "streams",
            [SemanticInternalAttributes.ENTITY_TYPE]: "input-stream",
            ...runId ? { [SemanticInternalAttributes.ENTITY_ID]: `${runId}:${opts.id}` } : {},
            streamId: opts.id,
            ...accessoryAttributes({
              items: [{ text: opts.id, variant: "normal" }],
              style: "codepath"
            })
          }
        }).catch(reject);
      });
    },
    peek() {
      return inputStreams.peek(opts.id);
    },
    wait(options) {
      return new ManualWaitpointPromise(async (resolve, reject) => {
        try {
          const ctx = taskContext.ctx;
          if (!ctx) {
            throw new Error("inputStream.wait() can only be used from inside a task.run()");
          }
          const apiClient = apiClientManager.clientOrThrow();
          const response = await apiClient.createInputStreamWaitpoint(ctx.run.id, {
            streamId: opts.id,
            timeout: options?.timeout,
            idempotencyKey: options?.idempotencyKey,
            idempotencyKeyTTL: options?.idempotencyKeyTTL,
            tags: options?.tags,
            lastSeqNum: inputStreams.lastSeqNum(opts.id)
          });
          const result = await tracer.startActiveSpan(options?.spanName ?? `inputStream.wait()`, async (span) => {
            const waitResponse = await apiClient.waitForWaitpointToken({
              runFriendlyId: ctx.run.id,
              waitpointFriendlyId: response.waitpointId
            });
            if (!waitResponse.success) {
              throw new Error("Failed to block on input stream waitpoint");
            }
            inputStreams.disconnectStream(opts.id);
            const waitResult = await runtime.waitUntil(response.waitpointId);
            const data = waitResult.output !== void 0 ? await conditionallyImportAndParsePacket({
              data: waitResult.output,
              dataType: waitResult.outputType ?? "application/json"
            }, apiClient) : void 0;
            if (waitResult.ok) {
              const prevSeq = inputStreams.lastSeqNum(opts.id);
              inputStreams.setLastSeqNum(opts.id, (prevSeq ?? -1) + 1);
              return { ok: true, output: data };
            } else {
              const error = new WaitpointTimeoutError(data?.message ?? "Timed out");
              span.recordException(error);
              span.setStatus({ code: SpanStatusCode.ERROR });
              return { ok: false, error };
            }
          }, {
            attributes: {
              [SemanticInternalAttributes.STYLE_ICON]: "wait",
              [SemanticInternalAttributes.ENTITY_TYPE]: "waitpoint",
              [SemanticInternalAttributes.ENTITY_ID]: response.waitpointId,
              streamId: opts.id,
              ...accessoryAttributes({
                items: [
                  {
                    text: opts.id,
                    variant: "normal"
                  }
                ],
                style: "codepath"
              })
            }
          });
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    },
    async waitWithIdleTimeout(options) {
      const self = this;
      const spanName = options.spanName ?? `inputStream.waitWithIdleTimeout()`;
      return tracer.startActiveSpan(spanName, async (span) => {
        if (options.idleTimeoutInSeconds > 0) {
          const warm = await inputStreams.once(opts.id, {
            timeoutMs: options.idleTimeoutInSeconds * 1e3
          });
          if (warm.ok) {
            span.setAttribute("wait.resolved", "idle");
            return { ok: true, output: warm.output };
          }
        }
        if (options.skipSuspend) {
          span.setAttribute("wait.resolved", "skipped");
          return {
            ok: false,
            error: new WaitpointTimeoutError("Idle timeout elapsed and skipSuspend is set")
          };
        }
        if (options.onSuspend) {
          await options.onSuspend();
        }
        span.setAttribute("wait.resolved", "suspended");
        const waitResult = await self.wait({
          timeout: options.timeout,
          spanName: "suspended"
        });
        if (waitResult.ok && options.onResume) {
          await options.onResume();
        }
        return waitResult;
      }, {
        attributes: {
          [SemanticInternalAttributes.STYLE_ICON]: "streams",
          streamId: opts.id,
          ...accessoryAttributes({
            items: [{ text: opts.id, variant: "normal" }],
            style: "codepath"
          })
        }
      });
    },
    async send(runId, data, options) {
      return tracer.startActiveSpan(`inputStream.send()`, async () => {
        const apiClient = apiClientManager.clientOrThrow();
        await apiClient.sendInputStream(runId, opts.id, data, options?.requestOptions);
      }, {
        attributes: {
          [SemanticInternalAttributes.STYLE_ICON]: "streams",
          [SemanticInternalAttributes.ENTITY_TYPE]: "input-stream",
          [SemanticInternalAttributes.ENTITY_ID]: `${runId}:${opts.id}`,
          streamId: opts.id,
          runId,
          ...accessoryAttributes({
            items: [{ text: opts.id, variant: "normal" }],
            style: "codepath"
          })
        }
      });
    }
  };
}
__name(input, "input");
var streams = {
  pipe,
  read,
  append,
  writer,
  define,
  input
};
function getRunIdForOptions(options) {
  if (options?.target) {
    if (options.target === "parent") {
      return taskContext.ctx?.run?.parentTaskRunId ?? taskContext.ctx?.run?.id;
    }
    if (options.target === "root") {
      return taskContext.ctx?.run?.rootTaskRunId ?? taskContext.ctx?.run?.id;
    }
    if (options.target === "self") {
      return taskContext.ctx?.run?.id;
    }
    return options.target;
  }
  return taskContext.ctx?.run?.id;
}
__name(getRunIdForOptions, "getRunIdForOptions");

// node_modules/@trigger.dev/sdk/dist/esm/v3/metadata.js
var parentMetadataUpdater = runMetadata.parent;
var rootMetadataUpdater = runMetadata.root;
var metadataUpdater = {
  set: setMetadataKey,
  del: deleteMetadataKey,
  append: appendMetadataKey,
  remove: removeMetadataKey,
  increment: incrementMetadataKey,
  decrement: decrementMetadataKey,
  flush: flushMetadata
};
var metadata = {
  current: currentMetadata,
  get: getMetadataKey,
  save: saveMetadata,
  replace: replaceMetadata,
  stream,
  fetchStream,
  parent: parentMetadataUpdater,
  root: rootMetadataUpdater,
  refresh: refreshMetadata,
  ...metadataUpdater
};
function currentMetadata() {
  return runMetadata.current();
}
__name(currentMetadata, "currentMetadata");
function getMetadataKey(key) {
  return runMetadata.getKey(key);
}
__name(getMetadataKey, "getMetadataKey");
function setMetadataKey(key, value) {
  runMetadata.set(key, value);
  return metadataUpdater;
}
__name(setMetadataKey, "setMetadataKey");
function deleteMetadataKey(key) {
  runMetadata.del(key);
  return metadataUpdater;
}
__name(deleteMetadataKey, "deleteMetadataKey");
function replaceMetadata(metadata2) {
  runMetadata.update(metadata2);
}
__name(replaceMetadata, "replaceMetadata");
function saveMetadata(metadata2) {
  runMetadata.update(metadata2);
}
__name(saveMetadata, "saveMetadata");
function incrementMetadataKey(key, value = 1) {
  runMetadata.increment(key, value);
  return metadataUpdater;
}
__name(incrementMetadataKey, "incrementMetadataKey");
function decrementMetadataKey(key, value = 1) {
  runMetadata.decrement(key, value);
  return metadataUpdater;
}
__name(decrementMetadataKey, "decrementMetadataKey");
function appendMetadataKey(key, value) {
  runMetadata.append(key, value);
  return metadataUpdater;
}
__name(appendMetadataKey, "appendMetadataKey");
function removeMetadataKey(key, value) {
  runMetadata.remove(key, value);
  return metadataUpdater;
}
__name(removeMetadataKey, "removeMetadataKey");
async function flushMetadata(requestOptions) {
  const $requestOptions = mergeRequestOptions({
    tracer,
    name: "metadata.flush()",
    icon: "code-plus"
  }, requestOptions);
  await runMetadata.flush($requestOptions);
}
__name(flushMetadata, "flushMetadata");
async function refreshMetadata(requestOptions) {
  const $requestOptions = mergeRequestOptions({
    tracer,
    name: "metadata.refresh()",
    icon: "code-plus"
  }, requestOptions);
  await runMetadata.refresh($requestOptions);
}
__name(refreshMetadata, "refreshMetadata");
async function stream(key, value, signal) {
  const streamInstance = await streams.pipe(key, value, {
    signal
  });
  return streamInstance.stream;
}
__name(stream, "stream");
async function fetchStream(key, signal) {
  return runMetadata.fetchStream(key, signal);
}
__name(fetchStream, "fetchStream");

// src/services/jobs/job.service.ts
init_esm();
var import_client = __toESM(require_default());
var JobService = class {
  static {
    __name(this, "JobService");
  }
  static async createJob(input2) {
    return prisma.job.create({
      data: {
        userId: input2.userId,
        type: input2.type,
        status: import_client.JobStatus.QUEUED,
        progress: 0,
        step: "Queued",
        triggerRunId: input2.triggerRunId
      }
    });
  }
  static async updateProgress(jobId, progress, step, triggerRunId) {
    return prisma.job.update({
      where: { id: jobId },
      data: {
        status: import_client.JobStatus.RUNNING,
        progress,
        step,
        triggerRunId: triggerRunId || void 0,
        startedAt: progress === 0 ? /* @__PURE__ */ new Date() : void 0
      }
    });
  }
  static async completeJob(jobId, artifactId, artifactType) {
    return prisma.job.update({
      where: { id: jobId },
      data: {
        status: import_client.JobStatus.COMPLETED,
        progress: 100,
        step: "Completed",
        artifactId,
        artifactType,
        completedAt: /* @__PURE__ */ new Date()
      }
    });
  }
  static async failJob(jobId, error) {
    return prisma.job.update({
      where: { id: jobId },
      data: {
        status: import_client.JobStatus.FAILED,
        error,
        completedAt: /* @__PURE__ */ new Date()
      }
    });
  }
  static async getJob(jobId) {
    return prisma.job.findUnique({
      where: { id: jobId }
    });
  }
};

export {
  metadata,
  JobService
};
//# sourceMappingURL=chunk-4QEGXLXS.mjs.map
