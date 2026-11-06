import {
  __name,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// src/lib/error-handler.ts
init_esm();
function normalizeError(err) {
  if (!err) {
    return {
      code: "UNKNOWN_ERROR",
      title: "Unknown Error",
      message: "An unexpected error occurred. Please try again.",
      retryable: true
    };
  }
  const rawString = typeof err === "string" ? err : err instanceof Error ? err.message : JSON.stringify(err);
  if (rawString.includes("503") || rawString.includes("UNAVAILABLE") || rawString.toLowerCase().includes("high demand") || rawString.toLowerCase().includes("temporarily overloaded") || rawString.toLowerCase().includes("spikes in demand")) {
    return {
      code: "AI_SERVICE_UNAVAILABLE",
      title: "AI Service Temporarily Busy",
      message: "The AI service is currently experiencing high demand. This spike is temporary—please click 'Try Again' in a moment.",
      retryable: true,
      raw: err
    };
  }
  if (rawString.includes("429") || rawString.includes("RESOURCE_EXHAUSTED") || rawString.toLowerCase().includes("quota exceeded") || rawString.toLowerCase().includes("rate limit")) {
    return {
      code: "AI_RATE_LIMIT",
      title: "Rate Limit Reached",
      message: "The AI request quota has temporarily been reached. Please wait a minute before trying again.",
      retryable: true,
      raw: err
    };
  }
  if (rawString.toLowerCase().includes("failed to generate valid") || rawString.toLowerCase().includes("json parse") || rawString.toLowerCase().includes("zoderror") || rawString.toLowerCase().includes("validation error")) {
    return {
      code: "AI_PARSING_ERROR",
      title: "Content Generation Error",
      message: "The generated content could not be formatted properly. Retrying will produce a fresh result.",
      retryable: true,
      raw: err
    };
  }
  if (rawString.toLowerCase().includes("timeout") || rawString.toLowerCase().includes("econnreset") || rawString.toLowerCase().includes("fetch failed") || rawString.toLowerCase().includes("network error")) {
    return {
      code: "NETWORK_TIMEOUT",
      title: "Connection Timeout",
      message: "The network connection timed out while processing your request. Please check your connection and try again.",
      retryable: true,
      raw: err
    };
  }
  const standardMessage = err instanceof Error ? err.message : rawString;
  return {
    code: "OPERATION_FAILED",
    title: "Generation Failed",
    message: standardMessage.length > 200 ? "The service encountered an unexpected error. Please try again." : standardMessage,
    retryable: true,
    raw: err
  };
}
__name(normalizeError, "normalizeError");

export {
  normalizeError
};
//# sourceMappingURL=chunk-C4TX2XUR.mjs.map
