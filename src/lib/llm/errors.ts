import { LLMErrorClassification, LLMProviderName } from "./types";

export interface ProviderAttemptError {
  provider: LLMProviderName;
  model?: string;
  reason: string;
  message: string;
  statusCode?: number;
}

export class AllProvidersFailedError extends Error {
  public readonly attempts: ProviderAttemptError[];

  constructor(message: string, attempts: ProviderAttemptError[]) {
    super(message);
    this.name = "AllProvidersFailedError";
    this.attempts = attempts;
    Object.setPrototypeOf(this, AllProvidersFailedError.prototype);
  }
}

/**
 * Strips potentially sensitive strings like API keys or Bearer tokens from error messages.
 */
export function sanitizeErrorMessage(message: string): string {
  if (!message) return "";
  return message
    .replace(/Bearer\s+[A-Za-z0-9_\-\.]+/gi, "Bearer [REDACTED]")
    .replace(/(?:key|token|secret)[=:]\s*["']?[A-Za-z0-9_\-\.]{8,}["']?/gi, "$1=[REDACTED]");
}

/**
 * Inspects any caught error and classifies whether it qualifies for provider fallback.
 */
export function classifyLLMError(error: unknown): LLMErrorClassification {
  if (!error) {
    return {
      fallbackEligible: false,
      reason: "unknown_error",
    };
  }

  // 1. User Abort / Cancellation
  if (
    (error as any)?.name === "AbortError" ||
    (error as any)?.code === "ABORT_ERR" ||
    (error instanceof Error && error.message.toLowerCase().includes("abort"))
  ) {
    return {
      fallbackEligible: false,
      isAbort: true,
      reason: "aborted",
    };
  }

  const errObj = error as Record<string, any>;
  const status: number | undefined =
    errObj.status ||
    errObj.statusCode ||
    errObj.response?.status ||
    errObj.response?.statusCode;

  const rawMessage = error instanceof Error ? error.message : String(error);
  const msgLower = rawMessage.toLowerCase();

  // 2. HTTP Status Code Checks
  if (status) {
    if (status === 429) {
      return {
        fallbackEligible: true,
        reason: "rate_limit",
        statusCode: 429,
      };
    }
    if (status === 401 || status === 403) {
      // Isolated provider credential / permission failure -> eligible to try another provider
      return {
        fallbackEligible: true,
        reason: "provider_auth_failure",
        statusCode: status,
      };
    }
    if (status === 503) {
      return {
        fallbackEligible: true,
        reason: "service_unavailable",
        statusCode: 503,
      };
    }
    if (status === 500 || status === 502 || status === 504) {
      return {
        fallbackEligible: true,
        reason: "provider_server_error",
        statusCode: status,
      };
    }
    if (status === 400 || status === 422) {
      // Usually bad parameters / schema from caller; not fallback eligible
      return {
        fallbackEligible: false,
        reason: "bad_request",
        statusCode: status,
      };
    }
  }

  // 3. String & Error Code heuristics
  if (
    msgLower.includes("429") ||
    msgLower.includes("resource_exhausted") ||
    msgLower.includes("quota exceeded") ||
    msgLower.includes("rate limit") ||
    msgLower.includes("too many requests") ||
    msgLower.includes("tokens per minute") ||
    msgLower.includes("requests per minute")
  ) {
    return {
      fallbackEligible: true,
      reason: "rate_limit",
      statusCode: 429,
    };
  }

  if (
    msgLower.includes("503") ||
    msgLower.includes("unavailable") ||
    msgLower.includes("high demand") ||
    msgLower.includes("temporarily overloaded") ||
    msgLower.includes("spikes in demand") ||
    msgLower.includes("overloaded") ||
    msgLower.includes("502 bad gateway") ||
    msgLower.includes("504 gateway timeout") ||
    msgLower.includes("internal server error")
  ) {
    return {
      fallbackEligible: true,
      reason: "service_unavailable",
      statusCode: 503,
    };
  }

  if (
    msgLower.includes("timeout") ||
    msgLower.includes("timed out") ||
    msgLower.includes("econnreset") ||
    msgLower.includes("econnrefused") ||
    msgLower.includes("etimedout") ||
    msgLower.includes("fetch failed") ||
    msgLower.includes("network error")
  ) {
    return {
      fallbackEligible: true,
      reason: "network_timeout",
    };
  }

  if (
    msgLower.includes("api key") ||
    msgLower.includes("unauthorized") ||
    msgLower.includes("invalid api key") ||
    msgLower.includes("authentication") ||
    msgLower.includes("permission denied")
  ) {
    return {
      fallbackEligible: true,
      reason: "provider_auth_failure",
      statusCode: 401,
    };
  }

  // 4. Fallback for unexpected provider crash or empty output
  if (msgLower.includes("empty response") || msgLower.includes("no content")) {
    return {
      fallbackEligible: true,
      reason: "empty_response",
    };
  }

  // Default: unclassified error
  return {
    fallbackEligible: false,
    reason: "unknown_error",
  };
}
