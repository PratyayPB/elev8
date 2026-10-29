import OpenAI from "openai";
import { LLMMessage, LLMProvider, LLMRequest, LLMResponse } from "../types";

export class GroqProvider implements LLMProvider {
  public readonly name = "groq" as const;
  private client: OpenAI | null = null;
  private currentApiKey: string | null = null;

  public isConfigured(): boolean {
    return Boolean(process.env.GROQ_API_KEY && process.env.GROQ_API_KEY.trim().length > 0);
  }

  private getClient(): OpenAI {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error("GROQ_API_KEY environment variable is not configured.");
    }
    if (!this.client || this.currentApiKey !== apiKey) {
      this.client = new OpenAI({
        apiKey,
        baseURL: "https://api.groq.com/openai/v1",
      });
      this.currentApiKey = apiKey;
    }
    return this.client;
  }

  public async generate(request: LLMRequest): Promise<LLMResponse> {
    const client = this.getClient();
    // Default model from spec / Groq free catalog
    const model = request.model || process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [];

    // 1. System instructions
    let systemInstruction = request.systemInstruction || "";
    if (request.responseMimeType === "application/json") {
      const jsonNotice = "Output strictly valid JSON conforming to the requested schema. Do not enclose in markdown ticks if possible.";
      systemInstruction = systemInstruction ? `${systemInstruction}\n\n${jsonNotice}` : jsonNotice;
    }

    if (systemInstruction) {
      messages.push({ role: "system", content: systemInstruction });
    }

    // 2. Body messages
    if (request.messages && request.messages.length > 0) {
      for (const msg of request.messages) {
        if (msg.role === "system") {
          // If not already included
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
          const role = item.role === "model" || item.role === "assistant" ? "assistant" : "user";
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

    const completionParams: OpenAI.Chat.Completions.ChatCompletionCreateParamsNonStreaming = {
      model,
      messages,
    };

    if (typeof request.temperature === "number") {
      completionParams.temperature = request.temperature;
    }
    if (typeof request.maxOutputTokens === "number") {
      completionParams.max_tokens = request.maxOutputTokens;
    }
    if (request.responseMimeType === "application/json") {
      completionParams.response_format = { type: "json_object" };
    }

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

    return {
      text,
      parsed,
      provider: this.name,
      model,
      durationMs,
      usage,
    };
  }
}
