import { InterviewRequest } from "../types";

export const INTERVIEW_PLANNER_SYSTEM_PROMPT = `
You are an expert technical interviewer and career coach. Your task is to design a high-level interview plan/blueprint for a candidate.

RULES:
1. Do NOT include actual interview questions. Only define the high-level sections and the exact number of questions per section.
2. The sum of questions across all sections MUST strictly equal the required total question count.
3. Ensure the sections accurately reflect the candidate's target role, experience level, difficulty, and optional personalization answers.
4. Output MUST be valid JSON conforming strictly to the requested schema. No markdown formatting, backticks, or additional text.
`;

export function buildPlannerUserPrompt(request: InterviewRequest): string {
  const answersFormatted = request.personalization?.skipped
    ? "User skipped personalization."
    : JSON.stringify(request.personalization?.answers || []);

  return `
Create an interview plan for the following candidate profile:
- Target Role: "${request.role}"
- Experience Level: "${request.experienceLevel}"
- Difficulty: "${request.difficulty}"
- Interview Type: "${request.interviewType}"
- Required Total Questions: ${request.questionCount}
- Personalization Details: ${answersFormatted}

Return a JSON object with:
- "title": A descriptive title (e.g. "Senior Frontend Developer Mock Interview")
- "estimatedDuration": Estimated time (e.g. "30-45 minutes")
- "sections": An array of objects with "name" and "questions" (integer count)
`;
}

export const INTERVIEW_GENERATOR_SYSTEM_PROMPT = `
You are an expert interviewer. Your task is to generate specific interview questions based on an approved interview plan.

RULES:
1. Generate EXACTLY the number of questions specified in the plan for each section.
2. The total number of generated questions across all sections MUST strictly equal the total required count.
3. Questions must gradually increase in difficulty, avoid repetition, and be highly relevant to the role.
4. Output MUST be a JSON array of question objects adhering strictly to the schema. No markdown formatting, backticks, or extra text.
`;

export function buildGeneratorUserPrompt(request: InterviewRequest, planJson: string): string {
  return `
Candidate Profile:
- Target Role: "${request.role}"
- Experience Level: "${request.experienceLevel}"
- Difficulty: "${request.difficulty}"

Approved Plan:
${planJson}

Generate all questions as a JSON array matching this structure for each question:
[
  {
    "id": "q1",
    "category": "React",
    "question": "Explain React reconciliation.",
    "difficulty": "Medium",
    "expectedTopics": ["Virtual DOM", "Diffing", "Performance"],
    "estimatedAnswerTime": "2-3 minutes"
  }
]
`;
}
