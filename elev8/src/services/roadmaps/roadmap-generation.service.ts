import { GoogleGenAI } from "@google/genai";
import { zodToJsonSchema } from "zod-to-json-schema";
import { GeneratedRoadmap, RoadmapRequest } from "@/features/roadmaps/types";
import { RoadmapPromptService } from "./roadmap-prompt.service";
import { RoadmapValidator } from "./roadmap-validator";
import { GeneratedRoadmapSchema } from "./roadmap-schema";

const jsonSchema = zodToJsonSchema(GeneratedRoadmapSchema, {
  name: "GeneratedRoadmap",
  $refStrategy: "none",
}) as any;

export class RoadmapGenerationService {
  private static ai = new GoogleGenAI({});

  /**
   * Generates a validated logical roadmap using Google Gemini LLM with automatic retry capability.
   */
  public static async generate(
    request: RoadmapRequest
  ): Promise<GeneratedRoadmap> {
    const systemInstruction = RoadmapPromptService.getSystemPrompt();
    const userPrompt = RoadmapPromptService.getUserPrompt(request);

    const maxAttempts = 3;
    let lastErrors: string[] = [];

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        console.log(
          `[RoadmapGenerationService] Generation attempt ${attempt}/${maxAttempts}`
        );

        // Call Gemini model with strict structured output schema
        const response = await this.ai.models.generateContent({
          model: process.env.GEMINI_MODEL || "gemini-3.6-flash",
          contents: userPrompt,
          config: {
            systemInstruction,
            responseMimeType: "application/json",
            responseSchema: jsonSchema.definitions?.GeneratedRoadmap || jsonSchema,
            temperature: 0.2, // Low temperature for deterministic structure
          },
        });

        const rawText = response.text;
        if (!rawText) {
          lastErrors = ["Received empty response from AI model."];
          continue;
        }

        // Validate structure & graph integrity
        const validation = RoadmapValidator.validate(rawText);
        if (validation.isValid && validation.data) {
          console.log(
            `[RoadmapGenerationService] Successfully generated & validated roadmap on attempt ${attempt}`
          );
          return validation.data;
        } else {
          console.warn(
            `[RoadmapGenerationService] Validation failed on attempt ${attempt}:`,
            validation.errors
          );
          lastErrors = validation.errors;
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(
          `[RoadmapGenerationService] Exception during attempt ${attempt}:`,
          message
        );
        lastErrors = [message || "Transient AI provider failure."];
      }
    }

    throw new Error(
      `Failed to generate valid roadmap after ${maxAttempts} attempts. Errors: ${lastErrors.join("; ")}`
    );
  }
}
