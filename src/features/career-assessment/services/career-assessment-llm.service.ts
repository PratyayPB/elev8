import { ProfileData } from "@/features/profile/types";
import { GapAnalysis } from "@/features/skill-gap/types";
import {
  AssessmentOutput,
  ModuleActivityContext,
} from "../types";
import {
  ASSESSMENT_MODEL,
} from "../constants";
import { LLMSelectorService, llm } from "@/lib/llm";
import { AssessmentOutputSchema } from "../schemas";
import { CareerAssessmentPromptBuilder } from "./assessment-prompt-builder";

export interface LLMAssessmentResult {
  output: AssessmentOutput;
  model: string;
  processingDurationMs: number;
}

export class CareerAssessmentLLMService {
  public static async generateAssessment(
    profile: ProfileData,
    activity?: ModuleActivityContext,
    gapAnalysis?: GapAnalysis
  ): Promise<LLMAssessmentResult> {
    const systemPrompt = CareerAssessmentPromptBuilder.buildSystemPrompt();
    const userPrompt = CareerAssessmentPromptBuilder.buildAssessmentPrompt(
      profile,
      activity,
      gapAnalysis
    );

    const model = profile.userId
      ? await LLMSelectorService.getModelForUser(profile.userId)
      : ASSESSMENT_MODEL;

    const response = await llm.generate({
      feature: "career-assessment",
      systemInstruction: systemPrompt,
      prompt: userPrompt,
      model,
      responseMimeType: "application/json",
      temperature: 0.2,
    });

    const text = response.text?.trim() || "";
    let rawJson: unknown = response.parsed;
    if (!rawJson && text) {
      try {
        rawJson = JSON.parse(text);
      } catch (err) {
        throw new Error(`Failed to parse AI Career Assessment output as JSON: ${text}`);
      }
    }

    if (!rawJson) {
      throw new Error("Received empty or invalid response from Career Assessment AI model.");
    }

    const parsedOutput = AssessmentOutputSchema.parse(rawJson);

    return {
      output: parsedOutput,
      model: response.model,
      processingDurationMs: response.durationMs,
    };
  }
}
