export * from "./types";
export * from "./errors";
export * from "./logger";
export * from "./router";
export * from "./llm-selector.service";
export * from "./providers/gemini.provider";
export * from "./providers/groq.provider";
export * from "./providers/openrouter.provider";

import { defaultLLMRouter } from "./router";
import { LLMRequest, LLMResponse } from "./types";

/**
 * Universal application-wide LLM helper with automatic multi-provider fallback.
 */
export const llm = {
  generate: <T = unknown>(request: LLMRequest): Promise<LLMResponse<T>> => {
    return defaultLLMRouter.generate<T>(request);
  },
};
