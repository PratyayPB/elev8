import { GoogleGenAI } from "@google/genai";
import { InterviewArtifact, QuestionFeedback } from "../types";
import { BULK_QUESTION_ASSESSMENT_PROMPT } from "./assessment-prompts";
import { BulkQuestionAssessmentSchema } from "../assessment-schema";
import { z } from "zod";

export class QuestionAssessmentService {
  public static async assessQuestions(artifact: InterviewArtifact): Promise<Record<string, QuestionFeedback>> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }

    const ai = new GoogleGenAI({ apiKey });

    // Prepare the payload for the AI
    const payload = artifact.questions.map((q) => {
      const answer = artifact.answers.find((a) => a.questionId === q.id);
      return {
        id: q.id,
        category: q.category,
        question: q.question,
        expectedTopics: q.expectedTopics,
        difficulty: q.difficulty,
        userAnswer: answer ? answer.answerText : "",
      };
    });

    const userPrompt = `Assess the following questions and answers:\n\n${JSON.stringify(payload, null, 2)}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: `${BULK_QUESTION_ASSESSMENT_PROMPT}\n\n${userPrompt}` }],
        },
      ],
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text?.trim() || "";
    let rawJson: unknown;
    try {
      rawJson = JSON.parse(text);
    } catch (e) {
      throw new Error(`Failed to parse AI Question Assessment response as JSON: ${text}`);
    }

    // If AI returned top-level dictionary of question IDs directly without "assessments" wrapper, normalize it
    if (typeof rawJson === "object" && rawJson !== null && !Array.isArray(rawJson) && !("assessments" in rawJson)) {
      rawJson = { assessments: rawJson };
    }

    // Validate and return
    const parsed = BulkQuestionAssessmentSchema.parse(rawJson);
    return parsed.assessments;
  }
}

