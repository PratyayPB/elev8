import { llm } from "@/lib/llm";
import { zodToJsonSchema } from "zod-to-json-schema";
import { GeneratedRoadmap, RoadmapRequest } from "@/features/roadmaps/types";
import { RoadmapPromptService } from "./roadmap-prompt.service";
import { RoadmapValidator } from "./roadmap-validator";
import { GeneratedRoadmapSchema } from "./roadmap-schema";
import { RoadmapDurationService } from "./roadmap-duration.service";

const jsonSchema = zodToJsonSchema(GeneratedRoadmapSchema, {
  name: "GeneratedRoadmap",
  $refStrategy: "none",
}) as any;

export class RoadmapGenerationService {
  /**
   * Generates a validated logical roadmap using multi-provider LLM fallback with automatic retry capability.
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

        // Call LLM router with strict structured output schema and multi-provider fallback
        const response = await llm.generate({
          feature: "roadmap-generation",
          systemInstruction,
          prompt: userPrompt,
          responseMimeType: "application/json",
          responseSchema: jsonSchema.definitions?.GeneratedRoadmap || jsonSchema,
          temperature: 0.2, // Low temperature for deterministic structure
        });

        const rawText = response.text;
        if (!rawText) {
          lastErrors = ["Received empty response from AI model."];
          continue;
        }

        // Validate structure & graph integrity
        const validation = RoadmapValidator.validate(rawText);
        if (validation.isValid && validation.data) {
          const generatedRoadmap = validation.data;

          // Application-side enrichment: set deterministic timestamp and calculated duration
          generatedRoadmap.metadata.generatedAt = new Date().toISOString();
          generatedRoadmap.metadata.estimatedDuration = RoadmapDurationService.calculate(
            generatedRoadmap.logicalGraph.nodes,
            request.personalization?.profileContext?.weeklyLearningHours
          );

          console.log(
            `[RoadmapGenerationService] Successfully generated & validated roadmap on attempt ${attempt} using ${response.provider}`
          );
          return generatedRoadmap;
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
