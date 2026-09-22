import { describe, it } from "node:test";
import assert from "node:assert";
import { GeminiProvider } from "../providers/gemini.provider";
import { OpenRouterProvider } from "../providers/openrouter.provider";

describe("Model Fallbacks & Iteration Logging", () => {
  it("GeminiProvider iterates through models (3.8 -> 3.7 -> 3.6) and succeeds on secondary iteration", async () => {
    process.env.GEMINI_API_KEY = "test-gemini-key";
    process.env.GEMINI_MODEL = "gemini-3.8-flash,gemini-3.7-flash,gemini-3.6-flash";

    const provider = new GeminiProvider();

    const attemptedModels: string[] = [];
    const mockAi = {
      models: {
        generateContent: async ({ model }: { model: string }) => {
          attemptedModels.push(model);
          if (model === "gemini-3.8-flash") {
            throw new Error("503 Service Unavailable on 3.8-flash");
          }
          return {
            text: JSON.stringify({ message: "Success from 3.7-flash" }),
          };
        },
      },
    };

    (provider as any).client = mockAi;
    (provider as any).currentApiKey = "test-gemini-key";

    const response = await provider.generate({
      feature: "test-feature",
      prompt: "Hello",
      responseMimeType: "application/json",
    });

    assert.deepStrictEqual(attemptedModels, ["gemini-3.8-flash", "gemini-3.7-flash"]);
    assert.strictEqual(response.model, "gemini-3.7-flash");
    assert.deepStrictEqual(response.parsed, { message: "Success from 3.7-flash" });
  });

  it("GeminiProvider throws if all 3 model iterations fail", async () => {
    process.env.GEMINI_API_KEY = "test-gemini-key";
    process.env.GEMINI_MODEL = "gemini-3.8-flash,gemini-3.7-flash,gemini-3.6-flash";

    const provider = new GeminiProvider();
    const attemptedModels: string[] = [];

    const mockAi = {
      models: {
        generateContent: async ({ model }: { model: string }) => {
          attemptedModels.push(model);
          throw new Error(`Quota limit on ${model}`);
        },
      },
    };

    (provider as any).client = mockAi;
    (provider as any).currentApiKey = "test-gemini-key";

    await assert.rejects(
      async () => {
        await provider.generate({
          feature: "test-feature",
          prompt: "Hello",
        });
      },
      /Quota limit on gemini-3.6-flash/
    );

    assert.deepStrictEqual(attemptedModels, [
      "gemini-3.8-flash",
      "gemini-3.7-flash",
      "gemini-3.6-flash",
    ]);
  });

  it("OpenRouterProvider configures native 5-model fallback in request body", async () => {
    process.env.OPENROUTER_API_KEY = "test-openrouter-key";
    process.env.OPENROUTER_MODEL =
      "meta-llama/llama-3.3-70b-instruct:free,google/gemini-2.5-flash,anthropic/claude-3-haiku,mistralai/mistral-nemo,qwen/qwen-2.5-72b-instruct";

    const provider = new OpenRouterProvider();
    let capturedParams: any = null;

    const mockOpenAI = {
      chat: {
        completions: {
          create: async (params: any) => {
            capturedParams = params;
            return {
              model: "anthropic/claude-3-haiku", // Simulated native fallback selection
              choices: [
                {
                  message: {
                    content: "Generated via fallback",
                  },
                },
              ],
            };
          },
        },
      },
    };

    (provider as any).client = mockOpenAI;
    (provider as any).currentApiKey = "test-openrouter-key";

    const response = await provider.generate({
      feature: "test-feature",
      prompt: "Hello",
    });

    assert.strictEqual(capturedParams.model, "meta-llama/llama-3.3-70b-instruct:free");
    assert.deepStrictEqual(capturedParams.models, [
      "meta-llama/llama-3.3-70b-instruct:free",
      "google/gemini-2.5-flash",
      "anthropic/claude-3-haiku",
      "mistralai/mistral-nemo",
      "qwen/qwen-2.5-72b-instruct",
    ]);
    assert.strictEqual(response.model, "anthropic/claude-3-haiku");
    assert.strictEqual(response.text, "Generated via fallback");
  });
});
