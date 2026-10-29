/**
 * Centralized Application Error Handling & Normalization
 * Converts low-level errors (Gemini 503/429, Zod, Prisma, network timeouts) into clean, user-facing error structures.
 */

export interface AppError {
  code: string;
  title: string;
  message: string;
  retryable: boolean;
  raw?: unknown;
}

export function normalizeError(err: unknown): AppError {
  if (!err) {
    return {
      code: "UNKNOWN_ERROR",
      title: "Unknown Error",
      message: "An unexpected error occurred. Please try again.",
      retryable: true,
    };
  }

  const rawString = typeof err === "string" ? err : err instanceof Error ? err.message : JSON.stringify(err);

  // 1. Gemini / AI High Demand / 503 Service Unavailable
  if (
    rawString.includes("503") ||
    rawString.includes("UNAVAILABLE") ||
    rawString.toLowerCase().includes("high demand") ||
    rawString.toLowerCase().includes("temporarily overloaded") ||
    rawString.toLowerCase().includes("spikes in demand")
  ) {
    return {
      code: "AI_SERVICE_UNAVAILABLE",
      title: "AI Service Temporarily Busy",
      message:
        "The AI service is currently experiencing high demand. This spike is temporary—please click 'Try Again' in a moment.",
      retryable: true,
      raw: err,
    };
  }

  // 2. Gemini / AI Quota / 429 Rate Limit
  if (
    rawString.includes("429") ||
    rawString.includes("RESOURCE_EXHAUSTED") ||
    rawString.toLowerCase().includes("quota exceeded") ||
    rawString.toLowerCase().includes("rate limit")
  ) {
    return {
      code: "AI_RATE_LIMIT",
      title: "Rate Limit Reached",
      message:
        "The AI request quota has temporarily been reached. Please wait a minute before trying again.",
      retryable: true,
      raw: err,
    };
  }

  // 3. Schema / Parsing / Validation Failures
  if (
    rawString.toLowerCase().includes("failed to generate valid") ||
    rawString.toLowerCase().includes("json parse") ||
    rawString.toLowerCase().includes("zoderror") ||
    rawString.toLowerCase().includes("validation error")
  ) {
    return {
      code: "AI_PARSING_ERROR",
      title: "Content Generation Error",
      message:
        "The generated content could not be formatted properly. Retrying will produce a fresh result.",
      retryable: true,
      raw: err,
    };
  }

  // 4. Network / Timeout Failures
  if (
    rawString.toLowerCase().includes("timeout") ||
    rawString.toLowerCase().includes("econnreset") ||
    rawString.toLowerCase().includes("fetch failed") ||
    rawString.toLowerCase().includes("network error")
  ) {
    return {
      code: "NETWORK_TIMEOUT",
      title: "Connection Timeout",
      message:
        "The network connection timed out while processing your request. Please check your connection and try again.",
      retryable: true,
      raw: err,
    };
  }

  // 5. Default generic error
  const standardMessage = err instanceof Error ? err.message : rawString;
  return {
    code: "OPERATION_FAILED",
    title: "Generation Failed",
    message: standardMessage.length > 200 ? "The service encountered an unexpected error. Please try again." : standardMessage,
    retryable: true,
    raw: err,
  };
}

export async function safeAction<T>(
  action: () => Promise<T>
): Promise<{ success: true; data: T } | { success: false; error: AppError }> {
  try {
    const data = await action();
    return { success: true, data };
  } catch (err) {
    const error = normalizeError(err);
    console.error("[SafeAction] Intercepted error:", error);
    return { success: false, error };
  }
}
