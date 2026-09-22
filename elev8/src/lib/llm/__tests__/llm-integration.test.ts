import { describe, it } from "node:test";
import assert from "node:assert";
import { LLMRouter } from "../router";
import { AllProvidersFailedError } from "../errors";
import { LLMProvider, LLMRequest, LLMResponse } from "../types";

describe("LLM Multi-Provider Fallback Integration & Edge Cases", () => {
  it("Scenario A: Structured JSON generation with provider fallback", async () => {
    // Primary provider returns 429 quota exhaustion
    const geminiQuotaError = new Error("Resource has been exhausted (e.g. check quota).");
    (geminiQuotaError as any).status = 429;

    const geminiMock: LLMProvider = {
      name: "gemini",
      isConfigured: () => true,
      generate: async () => {
        throw geminiQuotaError;
      },
    };

    // Fallback provider returns valid JSON
    const groqMock: LLMProvider = {
      name: "groq",
      isConfigured: () => true,
      generate: async (req: LLMRequest): Promise<LLMResponse> => {
        const jsonContent = JSON.stringify({
          title: "Senior Fullstack Engineer",
          score: 95,
          skills: ["React", "Node.js", "PostgreSQL"],
        });
        return {
          text: jsonContent,
          parsed: JSON.parse(jsonContent),
          provider: "groq",
          model: "llama-3.3-70b-versatile",
          durationMs: 120,
          usage: { inputTokens: 250, outputTokens: 80, totalTokens: 330 },
        };
      },
    };

    const router = new LLMRouter({
      primaryProvider: "gemini",
      fallbackOrder: ["gemini", "groq"],
      providers: { gemini: geminiMock, groq: groqMock },
    });

    const result = await router.generate<{ title: string; score: number; skills: string[] }>({
      feature: "resume-scoring",
      prompt: "Evaluate candidate resume against job spec",
      responseMimeType: "application/json",
    });

    assert.strictEqual(result.provider, "groq");
    assert.strictEqual(result.parsed?.title, "Senior Fullstack Engineer");
    assert.strictEqual(result.parsed?.score, 95);
    assert.strictEqual(result.parsed?.skills.length, 3);
    assert.strictEqual(result.usage?.totalTokens, 330);
  });

  it("Scenario B: Provider returns malformed JSON and throws", async () => {
    // Provider returns broken text when json expected
    const brokenProvider: LLMProvider = {
      name: "gemini",
      isConfigured: () => true,
      generate: async (): Promise<LLMResponse> => {
        return {
          text: "Here is your response: { not valid json }",
          parsed: undefined,
          provider: "gemini",
          model: "gemini-2.5-flash",
          durationMs: 50,
        };
      },
    };

    const router = new LLMRouter({
      primaryProvider: "gemini",
      providers: { gemini: brokenProvider },
    });

    const result = await router.generate({
      feature: "broken-test",
      prompt: "Give me json",
      responseMimeType: "application/json",
    });

    // parsed should be undefined because parsing failed, text is preserved
    assert.strictEqual(result.parsed, undefined);
    assert(result.text.includes("{ not valid json }"));
  });

  it("Scenario C: Authentication failure on primary provider gracefully falls back to secondary", async () => {
    const authError = new Error("API_KEY_INVALID: 401 Unauthorized");
    (authError as any).status = 401;

    const geminiWithBadKey: LLMProvider = {
      name: "gemini",
      isConfigured: () => true,
      generate: async () => {
        throw authError;
      },
    };

    const groqWithGoodKey: LLMProvider = {
      name: "groq",
      isConfigured: () => true,
      generate: async (): Promise<LLMResponse> => {
        return {
          text: "Groq answered successfully despite Gemini auth failure",
          provider: "groq",
          model: "llama-3.3-70b-versatile",
          durationMs: 80,
        };
      },
    };

    const router = new LLMRouter({
      primaryProvider: "gemini",
      fallbackOrder: ["gemini", "groq"],
      providers: { gemini: geminiWithBadKey, groq: groqWithGoodKey },
    });

    const response = await router.generate({
      feature: "auth-fallback-test",
      prompt: "Hello",
    });

    assert.strictEqual(response.provider, "groq");
    assert.strictEqual(response.text, "Groq answered successfully despite Gemini auth failure");
  });

  it("Scenario D: Preserves custom model selection if specified in request", async () => {
    let receivedModel: string | undefined;

    const geminiMock: LLMProvider = {
      name: "gemini",
      isConfigured: () => true,
      generate: async (req) => {
        receivedModel = req.model;
        return {
          text: "Done",
          provider: "gemini",
          model: req.model || "gemini-default",
          durationMs: 40,
        };
      },
    };

    const router = new LLMRouter({
      primaryProvider: "gemini",
      providers: { gemini: geminiMock },
    });

    await router.generate({
      feature: "custom-model-test",
      prompt: "Analyze",
      model: "gemini-3.7-flash",
    });

    assert.strictEqual(receivedModel, "gemini-3.7-flash");
  });
});
