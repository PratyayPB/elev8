import { llm } from "@/lib/llm";
import { ParsedResume } from "../types";
import { RESUME_NORMALIZE_PROMPT } from "../constants/resume-prompts";
import { ResumeValidator } from "./resume-validator";

export class ResumeNormalizerService {
  /**
   * Transforms raw extracted text from a PDF resume into a structured, validated ParsedResume JSON.
   */
  public static async normalize(rawText: string): Promise<ParsedResume> {
    const prompt = `${RESUME_NORMALIZE_PROMPT}\n\nRAW RESUME TEXT:\n${rawText}`;

    const response = await llm.generate({
      feature: "resume-normalizer",
      prompt,
      responseMimeType: "application/json",
      temperature: 0.2,
    });

    const text = response.text?.trim() || "";
    let rawJson: unknown = response.parsed;
    if (!rawJson && text) {
      try {
        rawJson = JSON.parse(text);
      } catch (e) {
        throw new Error(`Failed to parse Resume Normalization response as JSON: ${text}`);
      }
    }

    if (!rawJson) {
      throw new Error(`Failed to parse Resume Normalization response as JSON: ${text}`);
    }

    return ResumeValidator.validateParsedResume(rawJson);
  }
}
