import { GoogleGenAI } from "@google/genai";
import { LLMMessage, LLMProvider, LLMRequest, LLMResponse } from "../types";
import { LLMLogger } from "../logger";

export class GeminiProvider implements LLMProvider {
  public readonly name = "gemini" as const;
  private client: GoogleGenAI | null = null;
  private currentApiKey: string | null = null;

  public isConfigured(): boolean {
    return Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 0);
  }

  private getClient(): GoogleGenAI {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not configured.");
    }
    if (!this.client || this.currentApiKey !== apiKey) {
      this.client = new GoogleGenAI({ apiKey });
      this.currentApiKey = apiKey;
    }
    return this.client;
  }

  public async generate(request: LLMRequest): Promise<LLMResponse> {
    const ai = this.getClient();
    const rawModelConfig =
      request.model ||
      process.env.GEMINI_MODEL ||
      "gemini-3.8-flash,gemini-3.7-flash,gemini-3.6-flash";

    const models = rawModelConfig
      .split(",")
      .map((m) => m.trim())
      .filter(Boolean);

    if (models.length === 0) {
      models.push("gemini-3.8-flash");
    }

    // Build Gemini contents and system instruction
    let systemInstruction = request.systemInstruction;
    let contents: any[] = [];

    if (request.messages && request.messages.length > 0) {
      for (const msg of request.messages) {
        if (msg.role === "system") {
          systemInstruction = systemInstruction
            ? `${systemInstruction}\n\n${msg.content}`
            : msg.content;
        } else {
          contents.push({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }],
          });
        }
      }
    } else if (typeof request.prompt === "string") {
      contents = [{ role: "user", parts: [{ text: request.prompt }] }];
    } else if (typeof request.contents === "string") {
      contents = [{ role: "user", parts: [{ text: request.contents }] }];
    } else if (Array.isArray(request.contents)) {
      // Check if it's already Gemini format or LLMMessage array
      if (request.contents.length > 0 && "parts" in request.contents[0]) {
        contents = request.contents;
      } else {
        for (const item of request.contents as LLMMessage[]) {
          if (item.role === "system") {
            systemInstruction = systemInstruction
              ? `${systemInstruction}\n\n${item.content}`
              : item.content;
          } else {
            contents.push({
              role: item.role === "assistant" ? "model" : "user",
              parts: [{ text: item.content }],
            });
          }
        }
      }
    } else {
      throw new Error("Invalid request: No prompt, contents, or messages provided.");
    }

    const config: Record<string, any> = {};
    if (systemInstruction) {
      config.systemInstruction = systemInstruction;
    }
    if (request.responseMimeType) {
      config.responseMimeType = request.responseMimeType;
    }
    if (request.responseSchema) {
      config.responseSchema = request.responseSchema;
    }
    if (typeof request.temperature === "number") {
      config.temperature = request.temperature;
    }
    if (typeof request.maxOutputTokens === "number") {
      config.maxOutputTokens = request.maxOutputTokens;
    }

    let lastError: unknown = null;

    for (let index = 0; index < models.length; index++) {
      const currentModel = models[index];
      const iterationIndex = index + 1;

      // Log the iteration index and current model to the Trigger.dev console and stdout
      LLMLogger.logIteration({
        provider: this.name,
        iterationIndex,
        totalIterations: models.length,
        model: currentModel,
        feature: request.feature,
      });

      const startTime = performance.now();
      try {
        const response = await ai.models.generateContent({
          model: currentModel,
          contents,
          config,
        });

        const durationMs = Math.round(performance.now() - startTime);
        const text = response.text?.trim() || "";

        let parsed: any = undefined;
        if (request.responseMimeType === "application/json" && text) {
          try {
            parsed = JSON.parse(text);
          } catch (err) {
            // Leave parsed as undefined; callers can inspect or catch
          }
        }

        const usageMetadata = (response as any).usageMetadata;
        const usage = usageMetadata
          ? {
              inputTokens: usageMetadata.promptTokenCount,
              outputTokens: usageMetadata.candidatesTokenCount,
              totalTokens: usageMetadata.totalTokenCount,
            }
          : undefined;

        return {
          text,
          parsed,
          provider: this.name,
          model: currentModel,
          durationMs,
          usage,
        };
      } catch (err: unknown) {
        lastError = err;
        const rawErrMsg = err instanceof Error ? err.message : String(err);
        console.warn(
          `[GeminiProvider] Iteration ${iterationIndex}/${models.length} with model '${currentModel}' failed: ${rawErrMsg.slice(0, 150)}`
        );

        // Continue to the next fallback model in the cascade if available
        if (index < models.length - 1) {
          continue;
        }
      }
    }

    throw lastError;
  }
}
