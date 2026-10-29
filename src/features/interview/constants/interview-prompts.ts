import { InterviewRequest, InterviewProfileContext } from "../types";

export const DEFAULT_INTERVIEW_QUESTION_COUNT = 10;

export const INTERVIEW_PLANNER_SYSTEM_PROMPT = `
You are an expert technical interviewer and career coach. Your task is to design a high-level interview plan/blueprint for a candidate.

RULES:
1. Do NOT include actual interview questions. Only define the high-level sections and the exact number of questions per section.
2. The sum of questions across all sections MUST strictly equal the required total question count.
3. Ensure the sections accurately reflect the candidate's target role, experience level, difficulty, and optional profile personalization context.
4. If candidate profile context (current role, experience, transition goals) is provided, use it to tailor the breadth and emphasis of interview sections appropriately without compromising role expectations.
5. Output MUST be valid JSON conforming strictly to the requested schema. No markdown formatting, backticks, or additional text.
`;

function formatProfileContext(
  profile?: InterviewProfileContext | null
): string {
  if (!profile)
    return "None (Generic interview based strictly on target role).";

  const lines: string[] = [];
  if (profile.currentStatus)
    lines.push(`- Current Status: ${profile.currentStatus}`);
  if (profile.currentRole) lines.push(`- Current Role: ${profile.currentRole}`);
  if (profile.yearsOfExperience != null)
    lines.push(`- Years of Experience: ${profile.yearsOfExperience}`);
  if (profile.highestQualification)
    lines.push(`- Highest Qualification: ${profile.highestQualification}`);
  if (profile.fieldOfStudy)
    lines.push(`- Field of Study: ${profile.fieldOfStudy}`);
  if (profile.primaryGoal)
    lines.push(`- Primary Career Goal: ${profile.primaryGoal}`);
  if (profile.targetCompanyType)
    lines.push(`- Target Company Type: ${profile.targetCompanyType}`);

  return lines.length > 0 ? lines.join("\n") : "None.";
}

export function buildPlannerUserPrompt(
  request: InterviewRequest,
  questionCount: number = DEFAULT_INTERVIEW_QUESTION_COUNT
): string {
  const profileDetails = request.personalization?.skipped
    ? "None (User skipped personalization)."
    : formatProfileContext(request.personalization?.profile);

  return `
Create an interview plan for the following candidate profile:
- Target Role: "${request.role}"
- Experience Level: "${request.experienceLevel}"
- Difficulty: "${request.difficulty}"
- Interview Type: "${request.interviewType}"
- Required Total Questions: Exactly ${questionCount} questions

Candidate Background Context:
${profileDetails}

Return a JSON object matching this schema:
{
  "title": "Descriptive Title (e.g. Full Stack Developer Mock Interview)",
  "estimatedDuration": "Estimated time (e.g. 30-45 minutes)",
  "sections": [
    {
      "name": "Section Name (e.g. Core JavaScript & Async)",
      "questions": 3
    }
  ]
}
Note: The sum of "questions" in all sections MUST equal exactly ${questionCount}.
`;
}

export const INTERVIEW_GENERATOR_SYSTEM_PROMPT = `
You are an expert technical and behavioral interviewer responsible for generating a high-quality interview from an approved interview plan.

Your output will be consumed programmatically. Follow every rule exactly.

## CORE RULES

1. The Approved Interview Plan is the PRIMARY SOURCE OF TRUTH.
   - Follow its sections, topics, question distribution, and constraints exactly.
   - Do not introduce sections or topics that are not supported by the plan unless required to produce a coherent question.

2. Generate EXACTLY the required number of questions.
   - The total number of questions MUST equal the requested total.
   - Do not generate fewer or additional questions.
   - Do not compensate for one section by exceeding another section's allocation.

3. Every question MUST contain:
   - id
   - category
   - question
   - difficulty
   - expectedTopics
   - estimatedTimeSeconds

4. estimatedTimeSeconds MUST be:
   - an integer
   - greater than 0
   - realistic for the question's complexity
   - generally within 60 to 300 seconds
   - based on the time required to understand, reason about, and formulate a complete answer

5. PERSONALIZATION:
   If candidate profile context is provided:
   - Adapt questions to the candidate's current role, experience, education, goals, and target role.
   - Adjust expected depth according to their background.
   - Use realistic scenarios relevant to their career transition or current experience when appropriate.
   - Do NOT simply repeat profile information.
   - Do NOT assume the candidate has experience that is not present in the profile.
   - Do NOT make every question dependent on personal background; maintain balanced role-specific coverage.

6. RELEVANCE:
   Every question must directly contribute to evaluating the candidate for:
   - target role
   - experience level
   - interview type
   - requested difficulty
   - approved plan topics

7. DIFFICULTY:
   - Respect the requested interview difficulty.
   - Questions may gradually increase in depth within that difficulty level.
   - Do not unintentionally turn an Easy interview into a Medium/Hard interview.
   - Do not use complexity alone as a substitute for difficulty.

8. QUESTION QUALITY:
   - Avoid duplicate or near-duplicate questions.
   - Avoid trivial rewordings of the same concept.
   - Prefer questions that test reasoning, understanding, practical application, and decision-making where appropriate.
   - Use direct, unambiguous wording.
   - Avoid unnecessary multi-part questions unless the plan explicitly requires them.
   - Avoid questions whose answer can be given by simply repeating the question's wording.

9. EXPECTED TOPICS:
   - List the key concepts that a strong answer should address.
   - Keep expectedTopics concise and directly relevant.
   - Do not include concepts unrelated to the question.

10. INTERVIEW TYPE:
   Adapt question style to the interview type.
   - Technical: test technical knowledge, reasoning, implementation, debugging, architecture, or problem solving as appropriate.
   - Behavioral: test past behavior, decision-making, communication, ownership, teamwork, and problem solving.
   - Non-Technical: evaluate role-relevant communication, situational judgment, domain understanding, or other approved non-technical competencies.
   - Follow the approved plan when it specifies a more precise style.

11. QUESTION IDs:
   - Generate sequential IDs starting from q1.
   - IDs must be unique.
   - Do not skip IDs.

12. OUTPUT:
   - Return ONLY a valid JSON array.
   - No markdown.
   - No code fences.
   - No explanations.
   - No additional properties outside the required schema.
`;
export function buildGeneratorUserPrompt(
  request: InterviewRequest,
  planJson: string,
  questionCount: number = DEFAULT_INTERVIEW_QUESTION_COUNT
): string {
  const profileDetails = request.personalization?.skipped
    ? "No candidate profile provided. Generate a generic role-appropriate interview."
    : formatProfileContext(request.personalization?.profile);

  return `
Generate an interview using the following inputs.

## INTERVIEW CONFIGURATION

Target Role: ${request.role}
Experience Level: ${request.experienceLevel}
Difficulty: ${request.difficulty}
Interview Type: ${request.interviewType}

Total Questions Required: EXACTLY ${questionCount}

## CANDIDATE PROFILE

${profileDetails}

## APPROVED INTERVIEW PLAN

${planJson}

## GENERATION REQUIREMENTS

Generate exactly ${questionCount} questions.

The Approved Interview Plan is authoritative for:
- section/topic coverage
- question distribution
- required competencies
- interview structure

Use the candidate profile only when it is provided.

Personalize question context and expected depth without inventing candidate experience.

Ensure questions are:
- relevant to the target role
- appropriate for the experience level
- appropriate for the requested difficulty
- appropriate for the interview type
- non-repetitive
- progressively deeper where appropriate

For every question, generate a realistic estimatedTimeSeconds value.

Return ONLY the JSON array.

Required structure:

[
  {
    "id": "q1",
    "category": "React State Management",
    "question": "Explain how React state updates are processed and describe a situation where incorrect state handling could cause a bug.",
    "difficulty": "Medium",
    "expectedTopics": [
      "State updates",
      "Rendering",
      "State synchronization",
      "Common state management issues"
    ],
    "estimatedTimeSeconds": 120
  }
]
`;
}
