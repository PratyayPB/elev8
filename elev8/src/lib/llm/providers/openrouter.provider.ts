import OpenAI from "openai";
import { LLMMessage, LLMProvider, LLMRequest, LLMResponse } from "../types";
import { LLMLogger } from "../logger";

export class OpenRouterProvider implements LLMProvider {
  public readonly name = "openrouter" as const;
  private client: OpenAI | null = null;
  private currentApiKey: string | null = null;

  public isConfigured(): boolean {
    return Boolean(
      process.env.OPENROUTER_API_KEY &&
        process.env.OPENROUTER_API_KEY.trim().length > 0
    );
  }

  private getClient(): OpenAI {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error("OPENROUTER_API_KEY environment variable is not configured.");
    }
    if (!this.client || this.currentApiKey !== apiKey) {
      this.client = new OpenAI({
        apiKey,
        baseURL: "https://openrouter.ai/api/v1",
        defaultHeaders: {
          "HTTP-Referer": "https://elev8.app",
          "X-Title": "Elev8 Career Platform",
        },
      });
      this.currentApiKey = apiKey;
    }
    return this.client;
  }

  public async generate(request: LLMRequest): Promise<LLMResponse> {
    const client = this.getClient();
    
    // Parse models list for OpenRouter native multi-model fallback (up to 5 models)
    const rawModelConfig =
      request.model ||
      process.env.OPENROUTER_MODEL ||
      "meta-llama/llama-3.3-70b-instruct:free,google/gemini-2.5-flash,anthropic/claude-3-haiku,mistralai/mistral-nemo,qwen/qwen-2.5-72b-instruct";

    const models = rawModelConfig
      .split(",")
      .map((m) => m.trim())
      .filter(Boolean);

    const primaryModel = models[0] || "meta-llama/llama-3.3-70b-instruct:free";
    const fallbackModels = models.slice(1);

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [];

    // 1. System instructions
    let systemInstruction = request.systemInstruction || "";
    if (request.responseMimeType === "application/json") {
      const jsonNotice =
        "Output strictly valid JSON conforming to the requested format. Do not output preamble or markdown wrapper.";
      systemInstruction = systemInstruction
        ? `${systemInstruction}\n\n${jsonNotice}`
        : jsonNotice;
    }

    if (systemInstruction) {
      messages.push({ role: "system", content: systemInstruction });
    }

    // 2. Body messages
    if (request.messages && request.messages.length > 0) {
      for (const msg of request.messages) {
        if (msg.role === "system") {
          if (!systemInstruction.includes(msg.content)) {
            messages.unshift({ role: "system", content: msg.content });
          }
        } else {
          messages.push({
            role: msg.role === "assistant" ? "assistant" : "user",
            content: msg.content,
          });
        }
      }
    } else if (typeof request.prompt === "string") {
      messages.push({ role: "user", content: request.prompt });
    } else if (typeof request.contents === "string") {
      messages.push({ role: "user", content: request.contents });
    } else if (Array.isArray(request.contents)) {
      for (const item of request.contents) {
        if (typeof item === "string") {
          messages.push({ role: "user", content: item });
        } else if ("parts" in item && Array.isArray(item.parts)) {
          const textPart = item.parts.map((p: any) => p.text || "").join("\n");
          const role =
            item.role === "model" || item.role === "assistant"
              ? "assistant"
              : "user";
          messages.push({ role, content: textPart });
        } else if ("role" in item && "content" in item) {
          messages.push({
            role: item.role === "assistant" ? "assistant" : "user",
            content: item.content,
          });
        }
      }
    } else {
      throw new Error("Invalid request: No prompt, contents, or messages provided.");
    }

    const completionParams: any = {
      model: primaryModel,
      messages,
    };

    // OpenRouter native fallback configuration:
    // Supply models array in body and extra_body for client compatibility
    if (fallbackModels.length > 0) {
      completionParams.models = [primaryModel, ...fallbackModels];
      completionParams.extra_body = {
        models: fallbackModels,
      };
    }

    if (typeof request.temperature === "number") {
      completionParams.temperature = request.temperature;
    }
    if (typeof request.maxOutputTokens === "number") {
      completionParams.max_tokens = request.maxOutputTokens;
    }
    if (request.responseMimeType === "application/json") {
      completionParams.response_format = { type: "json_object" };
    }

    // Log to Trigger.dev console and stdout
    LLMLogger.logIteration({
      provider: this.name,
      iterationIndex: 1,
      totalIterations: models.length,
      model: `${primaryModel}${fallbackModels.length > 0 ? ` (+${fallbackModels.length} fallbacks: ${fallbackModels.join(", ")})` : ""}`,
      feature: request.feature,
    });

    const startTime = performance.now();

    const completion = await client.chat.completions.create(completionParams, {
      signal: request.abortSignal,
      timeout: request.timeoutMs,
    });

    const durationMs = Math.round(performance.now() - startTime);
    const rawContent = completion.choices[0]?.message?.content || "";
    const text = rawContent.trim();

    let parsed: any = undefined;
    if (request.responseMimeType === "application/json" && text) {
      try {
        parsed = JSON.parse(text);
      } catch {
        // Leave undefined
      }
    }

    const usage = completion.usage
      ? {
          inputTokens: completion.usage.prompt_tokens,
          outputTokens: completion.usage.completion_tokens,
          totalTokens: completion.usage.total_tokens,
        }
      : undefined;

    // OpenRouter returns the model that actually succeeded in completion.model
    const actualModel = (completion as any).model || primaryModel;

    return {
      text,
      parsed,
      provider: this.name,
      model: actualModel,
      durationMs,
      usage,
    };
  }
}
