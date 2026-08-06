import { GoogleGenAI } from "@google/genai";
import { ParsedResume } from "../types";
import { RESUME_NORMALIZE_PROMPT } from "../constants/resume-prompts";
import { ResumeValidator } from "./resume-validator";

export class ResumeNormalizerService {
  /**
   * Transforms raw extracted text from a PDF resume into a structured, validated ParsedResume JSON.
   */
  public static async normalize(rawText: string): Promise<ParsedResume> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `${RESUME_NORMALIZE_PROMPT}\n\nRAW RESUME TEXT:\n${rawText}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text?.trim() || "";
    let rawJson: unknown;
    try {
      rawJson = JSON.parse(text);
    } catch (e) {
      throw new Error(`Failed to parse Resume Normalization response as JSON: ${text}`);
    }

    return ResumeValidator.validateParsedResume(rawJson);
  }
}
