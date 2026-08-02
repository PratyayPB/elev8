"use server";

import { GoogleGenAI } from "@google/genai";
import { Question, QuestionsListSchema, ExperienceLevel } from "../types";

export async function fetchPersonalizationQuestions(
  role: string,
  experienceLevel: ExperienceLevel,
  hoursPerWeek: number | "Flexible"
): Promise<Question[]> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not configured. Returning fallback personalization questions.");
    return getFallbackQuestions(role);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
You are an expert career guidance AI. Generate at most 4 dynamic, highly targeted, multiple-choice follow-up questions to customize a learning roadmap for a user.

User Profile:
- Target Role: "${role}"
- Experience Level: "${experienceLevel}"
- Weekly Hours Available: ${hoursPerWeek}

Rules for Questions:
1. Generate between 1 and 4 questions (maximum 4).
2. Questions must be relevant to the role "${role}" and level "${experienceLevel}".
3. EVERY question MUST be multiple-choice only.
4. "type" field must be either "single" (single selection) or "multi" (multiple selection).
5. Include 3 to 5 relevant options per question.
6. Do NOT repeat required inputs (role, experience level, weekly hours).
7. Do NOT ask open-ended or text input questions.

Return ONLY a JSON array matching this structure:
[
  {
    "id": "q1",
    "question": "Which frontend framework do you know best?",
    "type": "single",
    "options": ["React", "Vue", "Angular", "None of these"]
  }
]
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text?.trim() || "[]";
    const rawJson = JSON.parse(responseText);

    // Validate using Zod schema
    const parsedQuestions = QuestionsListSchema.safeParse(rawJson);

    if (parsedQuestions.success) {
      return parsedQuestions.data;
    } else {
      console.error("Zod validation failed for Gemini response:", parsedQuestions.error);
      return getFallbackQuestions(role);
    }
  } catch (error) {
    console.error("Failed to fetch personalization questions from Gemini:", error);
    return getFallbackQuestions(role);
  }
}

function getFallbackQuestions(role: string): Question[] {
  return [
    {
      id: "q_focus",
      question: `What primary area of ${role} do you want to emphasize?`,
      type: "single",
      options: ["Practical Projects", "Theory & Fundamentals", "Interview Prep", "Balanced"],
    },
    {
      id: "q_company",
      question: "What type of target organization are you aiming for?",
      type: "single",
      options: ["Startup / Product Company", "Enterprise / Corporate", "Freelance / Agency", "No Preference"],
    },
  ];
}
