import { GoogleGenAI } from "@google/genai";
import { ProfileData } from "@/features/profile/types";
import { GapAnalysis } from "@/features/skill-gap/types";
import {
  AssessmentOutput,
  ModuleActivityContext,
} from "../types";
import {
  ASSESSMENT_MODEL,
} from "../constants";
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
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }

    const ai = new GoogleGenAI({ apiKey });
    const systemPrompt = CareerAssessmentPromptBuilder.buildSystemPrompt();
    const userPrompt = CareerAssessmentPromptBuilder.buildAssessmentPrompt(
      profile,
      activity,
      gapAnalysis
    );

    const startTime = performance.now();

    const response = await ai.models.generateContent({
      model: ASSESSMENT_MODEL,
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }],
        },
      ],
      config: {
        responseMimeType: "application/json",
      },
    });

    const endTime = performance.now();
    const processingDurationMs = Math.round(endTime - startTime);

    const text = response.text?.trim() || "";
    if (!text) {
      throw new Error("Received empty response from Career Assessment AI model.");
    }

    let rawJson: unknown;
    try {
      rawJson = JSON.parse(text);
    } catch (err) {
      throw new Error(`Failed to parse AI Career Assessment output as JSON: ${text}`);
    }

    const parsedOutput = AssessmentOutputSchema.parse(rawJson);

    return {
      output: parsedOutput,
      model: ASSESSMENT_MODEL,
      processingDurationMs,
    };
  }
}
