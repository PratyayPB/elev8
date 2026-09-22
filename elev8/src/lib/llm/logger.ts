import { logger } from "@trigger.dev/sdk/v3";
import { LLMProviderName } from "./types";
import { sanitizeErrorMessage } from "./errors";

export class LLMLogger {
  public static logIteration(params: {
    provider: LLMProviderName;
    iterationIndex: number;
    totalIterations: number;
    model: string;
    feature?: string;
  }): void {
    const msg = `[LLM_ITERATION] provider=${params.provider} iteration=${params.iterationIndex}/${params.totalIterations} model=${params.model}${
      params.feature ? ` feature=${params.feature}` : ""
    }`;
    console.log(msg);
    try {
      logger.info(msg, {
        provider: params.provider,
        iterationIndex: params.iterationIndex,
        totalIterations: params.totalIterations,
        model: params.model,
        feature: params.feature,
      });
    } catch {
      // Safe fallback outside Trigger task
    }
  }

  public static logRequest(params: {
    feature: string;
    provider: LLMProviderName;
    model: string;
    attempt: number;
  }): void {
    const msg = `[LLM_REQUEST] feature=${params.feature} provider=${params.provider} model=${params.model} attempt=${params.attempt}`;
    console.log(msg);
    try {
      logger.info(msg, params);
    } catch {
      // Safe fallback
    }
  }

  public static logSuccess(params: {
    feature: string;
    provider: LLMProviderName;
    model: string;
    attempt: number;
    durationMs: number;
    usage?: { inputTokens?: number; outputTokens?: number; totalTokens?: number };
  }): void {
    const tokensInfo = params.usage?.totalTokens ? ` tokens=${params.usage.totalTokens}` : "";
    const msg = `[LLM_SUCCESS] feature=${params.feature} provider=${params.provider} model=${params.model} attempt=${params.attempt} duration=${params.durationMs}ms${tokensInfo}`;
    console.log(msg);
    try {
      logger.info(msg, params);
    } catch {
      // Safe fallback
    }
  }

  public static logFallback(params: {
    feature: string;
    from: LLMProviderName;
    to: LLMProviderName;
    reason: string;
    errorSnippet?: string;
  }): void {
    const cleanErr = params.errorSnippet ? ` error="${sanitizeErrorMessage(params.errorSnippet)}"` : "";
    const msg = `[LLM_FALLBACK] feature=${params.feature} from=${params.from} to=${params.to} reason=${params.reason}${cleanErr}`;
    console.warn(msg);
    try {
      logger.warn(msg, params);
    } catch {
      // Safe fallback
    }
  }

  public static logProviderFailure(params: {
    feature: string;
    provider: LLMProviderName;
    reason: string;
    errorSnippet: string;
  }): void {
    const msg = `[LLM_PROVIDER_FAILURE] feature=${params.feature} provider=${params.provider} reason=${params.reason} error="${sanitizeErrorMessage(params.errorSnippet)}"`;
    console.warn(msg);
    try {
      logger.warn(msg, params);
    } catch {
      // Safe fallback
    }
  }

  public static logAllFailed(params: {
    feature: string;
    totalAttempts: number;
  }): void {
    const msg = `[LLM_ALL_FAILED] feature=${params.feature} totalAttempts=${params.totalAttempts}`;
    console.error(msg);
    try {
      logger.error(msg, params);
    } catch {
      // Safe fallback
    }
  }
}
