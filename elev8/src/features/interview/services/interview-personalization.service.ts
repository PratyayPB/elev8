"use server";

import { Question, ExperienceLevel, Difficulty, InterviewType, InterviewTypeOption } from "../types";

export async function fetchInterviewPersonalizationQuestions(
  role: string,
  experienceLevel: ExperienceLevel,
  difficulty: Difficulty,
  interviewType: InterviewType | InterviewTypeOption | string
): Promise<Question[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Hardcoded mocked questions to avoid Gemini usage in Phase 3.1
  return [
    {
      id: "q_company",
      question: "Which type of company are you targeting?",
      type: "single",
      options: [
        "Startup",
        "Mid-sized Company",
        "FAANG / Big Tech",
        "Government / Defense",
        "No Preference",
      ],
    },
    {
      id: "q_topics",
      question: "Which specific topics should be emphasized?",
      type: "multi",
      options: [
        "System Design",
        "Data Structures & Algorithms",
        "Framework Specifics",
        "Database Architecture",
        "Behavioral / Culture Fit",
      ],
    },
    {
      id: "q_format",
      question: "What format do you struggle with the most?",
      type: "single",
      options: [
        "Live Coding",
        "Take-home Assignments",
        "Whiteboard Design",
        "Past Experience Deep-Dive",
      ],
    }
  ];
}
