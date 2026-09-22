import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";
import { LLMRouter } from "../router";
import { AllProvidersFailedError, classifyLLMError } from "../errors";
import { LLMProvider, LLMRequest, LLMResponse } from "../types";

// Mock provider creator
function createMockProvider(
  name: "gemini" | "groq" | "openrouter",
  options: {
    isConfigured?: boolean;
    generateResult?: Partial<LLMResponse>;
    generateError?: any;
    onGenerate?: (req: LLMRequest) => void;
  } = {}
): LLMProvider & { calls: LLMRequest[] } {
  const calls: LLMRequest[] = [];
  return {
    name,
    calls,
    isConfigured: () => (options.isConfigured !== undefined ? options.isConfigured : true),
    generate: async (req: LLMRequest): Promise<LLMResponse> => {
      calls.push(req);
      if (options.onGenerate) {
        options.onGenerate(req);
      }
      if (options.generateError) {
        throw options.generateError;
      }
      return {
        text: options.generateResult?.text || "test output",
        parsed: options.generateResult?.parsed,
        provider: name,
        model: options.generateResult?.model || `${name}-default-model`,
        durationMs: 50,
      };
    },
  };
}

describe("LLM Multi-Provider Fallback Router", () => {
  it("Test 1 — Primary provider succeeds: subsequent providers are not called", async () => {
    const gemini = createMockProvider("gemini", {
      generateResult: { text: "gemini output", model: "gemini-3.5-flash-lite" },
    });
    const groq = createMockProvider("groq");
    const openrouter = createMockProvider("openrouter");

    const router = new LLMRouter({
      primaryProvider: "gemini",
      fallbackOrder: ["gemini", "groq", "openrouter"],
      providers: { gemini, groq, openrouter },
    });

    const result = await router.generate({
      feature: "test-feature",
      prompt: "Hello",
    });

    assert.strictEqual(result.provider, "gemini");
    assert.strictEqual(result.text, "gemini output");
    assert.strictEqual(gemini.calls.length, 1);
    assert.strictEqual(groq.calls.length, 0);
    assert.strictEqual(openrouter.calls.length, 0);
  });

  it("Test 2 — Gemini quota/rate-limit (429): cascades to Groq", async () => {
    const rateLimitError = new Error("Resource exhausted: 429 quota exceeded");
    (rateLimitError as any).status = 429;

    const gemini = createMockProvider("gemini", { generateError: rateLimitError });
    const groq = createMockProvider("groq", {
      generateResult: { text: "groq response", model: "llama-3.3-70b-versatile" },
    });
    const openrouter = createMockProvider("openrouter");

    const router = new LLMRouter({
      primaryProvider: "gemini",
      fallbackOrder: ["gemini", "groq", "openrouter"],
      providers: { gemini, groq, openrouter },
    });

    const result = await router.generate({
      feature: "test-feature",
      prompt: "Generate interview",
    });

    assert.strictEqual(result.provider, "groq");
    assert.strictEqual(result.text, "groq response");
    assert.strictEqual(gemini.calls.length, 1);
    assert.strictEqual(groq.calls.length, 1);
    assert.strictEqual(openrouter.calls.length, 0);
  });

  it("Test 3 — Gemini + Groq failure: cascades to OpenRouter", async () => {
    const geminiErr = new Error("Resource exhausted: quota exceeded");
    const groqErr = new Error("503 Service Unavailable: High demand");
    (groqErr as any).status = 503;

    const gemini = createMockProvider("gemini", { generateError: geminiErr });
    const groq = createMockProvider("groq", { generateError: groqErr });
    const openrouter = createMockProvider("openrouter", {
      generateResult: { text: "openrouter response", model: "meta-llama/llama-3.3-70b" },
    });

    const router = new LLMRouter({
      primaryProvider: "gemini",
      fallbackOrder: ["gemini", "groq", "openrouter"],
      providers: { gemini, groq, openrouter },
    });

    const result = await router.generate({
      feature: "test-feature",
      prompt: "Generate roadmap",
    });

    assert.strictEqual(result.provider, "openrouter");
    assert.strictEqual(result.text, "openrouter response");
    assert.strictEqual(gemini.calls.length, 1);
    assert.strictEqual(groq.calls.length, 1);
    assert.strictEqual(openrouter.calls.length, 1);
  });

  it("Test 4 — All providers fail: throws AllProvidersFailedError with clean sanitized summary", async () => {
    const geminiErr = new Error("429 rate limit token Bearer sk-secret12345678");
    (geminiErr as any).status = 429;
    const groqErr = new Error("500 internal server error");
    (groqErr as any).status = 500;
    const openrouterErr = new Error("network timeout");

    const gemini = createMockProvider("gemini", { generateError: geminiErr });
    const groq = createMockProvider("groq", { generateError: groqErr });
    const openrouter = createMockProvider("openrouter", { generateError: openrouterErr });

    const router = new LLMRouter({
      primaryProvider: "gemini",
      fallbackOrder: ["gemini", "groq", "openrouter"],
      providers: { gemini, groq, openrouter },
    });

    await assert.rejects(
      async () => {
        await router.generate({ feature: "test-feature", prompt: "Hello" });
      },
      (err: any) => {
        assert(err instanceof AllProvidersFailedError);
        assert.strictEqual(err.attempts.length, 3);
        // Ensure secret token was sanitized
        assert(!err.message.includes("sk-secret12345678"));
        assert(err.message.includes("[REDACTED]") || !err.message.includes("secret"));
        return true;
      }
    );
  });

  it("Test 5 — Non-fallback error (e.g. 400 Bad Request): aborts immediately without trying fallback", async () => {
    const badRequestErr = new Error("400 Bad Request: Invalid parameter combination");
    (badRequestErr as any).status = 400;

    const gemini = createMockProvider("gemini", { generateError: badRequestErr });
    const groq = createMockProvider("groq");
    const openrouter = createMockProvider("openrouter");

    const router = new LLMRouter({
      primaryProvider: "gemini",
      fallbackOrder: ["gemini", "groq", "openrouter"],
      providers: { gemini, groq, openrouter },
    });

    await assert.rejects(
      async () => {
        await router.generate({ feature: "test-feature", prompt: "Hello" });
      },
      (err: any) => {
        assert.strictEqual(err, badRequestErr);
        return true;
      }
    );

    assert.strictEqual(gemini.calls.length, 1);
    assert.strictEqual(groq.calls.length, 0);
    assert.strictEqual(openrouter.calls.length, 0);
  });

  it("Test 6 — User abort / cancellation: terminates without cascade", async () => {
    const abortErr = new Error("The operation was aborted");
    abortErr.name = "AbortError";

    const gemini = createMockProvider("gemini", { generateError: abortErr });
    const groq = createMockProvider("groq");

    const router = new LLMRouter({
      primaryProvider: "gemini",
      fallbackOrder: ["gemini", "groq"],
      providers: { gemini, groq },
    });

    await assert.rejects(
      async () => {
        await router.generate({ feature: "test-feature", prompt: "Hello" });
      },
      (err: any) => {
        assert.strictEqual(err.name, "AbortError");
        return true;
      }
    );

    assert.strictEqual(gemini.calls.length, 1);
    assert.strictEqual(groq.calls.length, 0);
  });

  it("Test 7 — Unconfigured provider: skips unconfigured provider and continues", async () => {
    const gemini = createMockProvider("gemini", { isConfigured: false });
    const groq = createMockProvider("groq", {
      isConfigured: true,
      generateResult: { text: "groq took over", model: "llama-3.3-70b-versatile" },
    });

    const router = new LLMRouter({
      primaryProvider: "gemini",
      fallbackOrder: ["gemini", "groq"],
      providers: { gemini, groq },
    });

    const result = await router.generate({
      feature: "test-feature",
      prompt: "Hello",
    });

    assert.strictEqual(result.provider, "groq");
    assert.strictEqual(gemini.calls.length, 0);
    assert.strictEqual(groq.calls.length, 1);
  });
});
