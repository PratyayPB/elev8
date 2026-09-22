import {
  AllProvidersFailedError,
  classifyLLMError,
  ProviderAttemptError,
  sanitizeErrorMessage,
} from "./errors";
import { LLMLogger } from "./logger";
import { GeminiProvider } from "./providers/gemini.provider";
import { GroqProvider } from "./providers/groq.provider";
import { OpenRouterProvider } from "./providers/openrouter.provider";
import {
  LLMProvider,
  LLMProviderName,
  LLMRequest,
  LLMResponse,
} from "./types";

export interface LLMRouterOptions {
  primaryProvider?: LLMProviderName;
  fallbackOrder?: LLMProviderName[];
  providers?: Partial<Record<LLMProviderName, LLMProvider>>;
}

export class LLMRouter {
  private providers: Record<LLMProviderName, LLMProvider>;
  private primaryProviderConfig?: LLMProviderName;
  private fallbackOrderConfig?: LLMProviderName[];

  constructor(options?: LLMRouterOptions) {
    this.primaryProviderConfig = options?.primaryProvider;
    this.fallbackOrderConfig = options?.fallbackOrder;

    this.providers = {
      gemini: options?.providers?.gemini || new GeminiProvider(),
      groq: options?.providers?.groq || new GroqProvider(),
      openrouter: options?.providers?.openrouter || new OpenRouterProvider(),
    };
  }

  /**
   * Resolves the ordered list of provider names to try for a request.
   */
  public getResolvedProviderOrder(): LLMProviderName[] {
    const rawOrderEnv = process.env.LLM_FALLBACK_ORDER || "gemini,groq,openrouter";
    const envOrder = rawOrderEnv
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter((s): s is LLMProviderName => s === "gemini" || s === "groq" || s === "openrouter");

    const fallbackOrder = this.fallbackOrderConfig || (envOrder.length > 0 ? envOrder : ["gemini", "groq", "openrouter"]);

    const primary =
      this.primaryProviderConfig ||
      (process.env.LLM_PRIMARY_PROVIDER as LLMProviderName) ||
      fallbackOrder[0] ||
      "gemini";

    const ordered: LLMProviderName[] = [];
    if (primary && ["gemini", "groq", "openrouter"].includes(primary)) {
      ordered.push(primary);
    }
    for (const p of fallbackOrder) {
      if (!ordered.includes(p)) {
        ordered.push(p);
      }
    }

    return ordered;
  }

  /**
   * Executes an LLM generation with automated fallback across configured providers.
   */
  public async generate<T = unknown>(request: LLMRequest): Promise<LLMResponse<T>> {
    const providerOrder = this.getResolvedProviderOrder();
    const feature = request.feature || "general";
    const attempts: ProviderAttemptError[] = [];

    // Filter to configured providers
    const eligibleProviders: { name: LLMProviderName; provider: LLMProvider }[] = [];
    for (const name of providerOrder) {
      const provider = this.providers[name];
      if (provider && provider.isConfigured()) {
        eligibleProviders.push({ name, provider });
      }
    }

    if (eligibleProviders.length === 0) {
      const errorMsg = `No LLM providers are configured. Checked providers: ${providerOrder.join(", ")}. Please set GEMINI_API_KEY, GROQ_API_KEY, or OPENROUTER_API_KEY.`;
      console.error(`[LLMRouter] ${errorMsg}`);
      throw new AllProvidersFailedError(errorMsg, [
        {
          provider: providerOrder[0] || "gemini",
          reason: "no_providers_configured",
          message: errorMsg,
        },
      ]);
    }

    for (let i = 0; i < eligibleProviders.length; i++) {
      const { name, provider } = eligibleProviders[i];
      const attemptNum = i + 1;
      const model = request.model || (name === "gemini" ? process.env.GEMINI_MODEL || "gemini-2.5-flash" : name === "groq" ? process.env.GROQ_MODEL || "llama-3.3-70b-versatile" : process.env.OPENROUTER_MODEL || "meta-llama/llama-3.3-70b-instruct:free");

      LLMLogger.logRequest({
        feature,
        provider: name,
        model,
        attempt: attemptNum,
      });

      try {
        const response = await provider.generate(request);

        LLMLogger.logSuccess({
          feature,
          provider: name,
          model: response.model,
          attempt: attemptNum,
          durationMs: response.durationMs,
          usage: response.usage,
        });

        return response as LLMResponse<T>;
      } catch (err: unknown) {
        const classification = classifyLLMError(err);
        const rawErrMsg = err instanceof Error ? err.message : String(err);
        const sanitizedMsg = sanitizeErrorMessage(rawErrMsg);

        LLMLogger.logProviderFailure({
          feature,
          provider: name,
          reason: classification.reason,
          errorSnippet: sanitizedMsg.slice(0, 300),
        });

        attempts.push({
          provider: name,
          model,
          reason: classification.reason,
          message: sanitizedMsg,
          statusCode: classification.statusCode,
        });

        // If error is not fallback-eligible (e.g. malformed user request, or cancellation), abort immediately
        if (!classification.fallbackEligible || classification.isAbort) {
          throw err;
        }

        // If there's a next provider available, log the fallback transition
        const nextCandidate = eligibleProviders[i + 1];
        if (nextCandidate) {
          LLMLogger.logFallback({
            feature,
            from: name,
            to: nextCandidate.name,
            reason: classification.reason,
            errorSnippet: sanitizedMsg.slice(0, 150),
          });
        }
      }
    }

    // If all eligible providers failed
    LLMLogger.logAllFailed({
      feature,
      totalAttempts: attempts.length,
    });

    const summaryReasons = attempts
      .map((a) => `${a.provider} (${a.reason}: ${a.message.slice(0, 80)})`)
      .join(" | ");

    throw new AllProvidersFailedError(
      `All configured LLM providers failed for feature '${feature}': ${summaryReasons}`,
      attempts
    );
  }
}

// Global default router singleton
export const defaultLLMRouter = new LLMRouter();
