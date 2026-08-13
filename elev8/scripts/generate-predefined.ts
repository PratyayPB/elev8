import fs from "fs";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import "dotenv/config";

const INTERVIEW_CONFIGS = [
  { id: "general-hr", role: "General HR / Behavioral", type: "BEHAVIORAL" },
  { id: "leadership-management", role: "Leadership & Management", type: "BEHAVIORAL" },
];

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function generateRole(ai: GoogleGenAI, config: any) {
  console.log(`Generating ${config.id}...`);

  const schema = {
    type: Type.OBJECT,
    properties: {
      description: { type: Type.STRING },
      levels: {
        type: Type.OBJECT,
        properties: {
          EASY: {
            type: Type.OBJECT,
            properties: {
              estimatedDuration: { type: Type.STRING },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    question: { type: Type.STRING },
                    category: { type: Type.STRING },
                    expectedTopics: { type: Type.ARRAY, items: { type: Type.STRING } },
                    estimatedAnswerTime: { type: Type.INTEGER }
                  },
                  required: ["id", "question", "category", "expectedTopics", "estimatedAnswerTime"]
                }
              }
            },
            required: ["estimatedDuration", "questions"]
          },
          MEDIUM: {
            type: Type.OBJECT,
            properties: {
              estimatedDuration: { type: Type.STRING },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    question: { type: Type.STRING },
                    category: { type: Type.STRING },
                    expectedTopics: { type: Type.ARRAY, items: { type: Type.STRING } },
                    estimatedAnswerTime: { type: Type.INTEGER }
                  },
                  required: ["id", "question", "category", "expectedTopics", "estimatedAnswerTime"]
                }
              }
            },
            required: ["estimatedDuration", "questions"]
          },
          HARD: {
            type: Type.OBJECT,
            properties: {
              estimatedDuration: { type: Type.STRING },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    question: { type: Type.STRING },
                    category: { type: Type.STRING },
                    expectedTopics: { type: Type.ARRAY, items: { type: Type.STRING } },
                    estimatedAnswerTime: { type: Type.INTEGER }
                  },
                  required: ["id", "question", "category", "expectedTopics", "estimatedAnswerTime"]
                }
              }
            },
            required: ["estimatedDuration", "questions"]
          }
        },
        required: ["EASY", "MEDIUM", "HARD"]
      }
    },
    required: ["description", "levels"]
  };

  const prompt = `You are generating a predefined interview catalog for the role of ${config.role}. The interview type is ${config.type}.
Requirements:
1. Provide a short description (1-2 sentences) of what this interview evaluates.
2. For EASY level, generate 7 distinct questions focusing on fundamentals. Format estimatedDuration as "20-25 minutes".
3. For MEDIUM level, generate 9 distinct questions focusing on practical application and scenarios. Format estimatedDuration as "25-35 minutes".
4. For HARD level, generate 11 distinct questions focusing on advanced concepts, system design, and trade-offs. Format estimatedDuration as "35-45 minutes".
5. For every question, ensure unique IDs within this role (e.g., q1 to q27).
6. Give expectedTopics (2-4 keywords) and estimatedAnswerTime (in minutes, 2-5).
Ensure questions are role-specific and non-generic.
Make sure the output exactly matches the JSON schema.`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: schema
    }
  });

  const text = response.text?.trim() || "{}";
  let data = JSON.parse(text);

  // Convert questions array to Record<string, PredefinedInterviewQuestion> and inject empty answers
  const formatLevel = (levelData: any) => {
    const questionRecord: any = {};
    for (const q of levelData.questions) {
      questionRecord[q.id] = { ...q, answer: "" };
    }
    return {
      estimatedDuration: levelData.estimatedDuration,
      questions: questionRecord
    };
  };

  const finalObject = {
    id: config.id,
    role: config.role,
    type: config.type,
    description: data.description,
    levels: {
      EASY: formatLevel(data.levels.EASY),
      MEDIUM: formatLevel(data.levels.MEDIUM),
      HARD: formatLevel(data.levels.HARD)
    }
  };

  const fileContent = `import { PredefinedInterview } from "../../types/predefined-interview";

export const ${config.id.replace(/-/g, "_")}: PredefinedInterview = ${JSON.stringify(finalObject, null, 2)};
`;

  const outPath = path.join(process.cwd(), "src", "features", "interview", "data", "interviews", `${config.id}.ts`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, fileContent, "utf-8");
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("Missing GEMINI_API_KEY");

  const ai = new GoogleGenAI({ apiKey });

  // Generate files sequentially to avoid rate limits
  for (const config of INTERVIEW_CONFIGS) {
    try {
      await generateRole(ai, config);
      await sleep(2000); // 2 second delay between requests
    } catch (e) {
      console.error(`Failed on ${config.id}:`, e);
    }
  }
}

main().catch(console.error);
