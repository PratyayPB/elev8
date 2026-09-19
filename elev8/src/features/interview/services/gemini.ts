import { GoogleGenAI } from "@google/genai";

export const INTERVIEW_GEMINI_MODEL = "gemini-3.8-flash";

let genAiInstance: GoogleGenAI | null = null;

export function getInterviewGenAI(): GoogleGenAI {
  if (!genAiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    genAiInstance = new GoogleGenAI({ apiKey });
  }
  return genAiInstance;
}
