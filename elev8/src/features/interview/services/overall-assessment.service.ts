import { GoogleGenAI } from "@google/genai";
import { InterviewArtifact, QuestionFeedback, OverallAssessment, Analytics } from "../types";
import { OVERALL_ASSESSMENT_PROMPT } from "./assessment-prompts";
import { OverallAssessmentSchema } from "../assessment-schema";

export class OverallAssessmentService {
  public static async generateOverallAssessment(
    artifact: InterviewArtifact,
    questionAssessments: Record<string, QuestionFeedback>
  ): Promise<OverallAssessment> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }

    const ai = new GoogleGenAI({ apiKey });

    // Prepare payload
    const payload = {
      metadata: artifact.metadata,
      questionsAndAnswers: artifact.questions.map((q) => {
        const answer = artifact.answers.find((a) => a.questionId === q.id);
        const assessment = questionAssessments[q.id];
        return {
          question: q.question,
          category: q.category,
          userAnswer: answer ? answer.answerText : "",
          assessment: assessment,
        };
      }),
    };

    const userPrompt = `Synthesize an overall assessment based on this data:\n\n${JSON.stringify(payload, null, 2)}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: `${OVERALL_ASSESSMENT_PROMPT}\n\n${userPrompt}` }],
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
      throw new Error(`Failed to parse AI Overall Assessment response as JSON: ${text}`);
    }

    return OverallAssessmentSchema.parse(rawJson);
  }

  public static generateAnalytics(artifact: InterviewArtifact): Analytics {
    const totalQuestions = artifact.questions.length;
    const answeredAnswers = artifact.answers.filter((a) => a.answerText.trim().length > 0);
    const questionsAttempted = answeredAnswers.length;
    const completionPercentage = totalQuestions > 0 ? Math.round((questionsAttempted / totalQuestions) * 100) : 0;

    let totalWords = 0;
    for (const ans of answeredAnswers) {
      const words = ans.answerText.trim().split(/\s+/).filter((w) => w.length > 0);
      totalWords += words.length;
    }

    const averageWordsPerAnswer = questionsAttempted > 0 ? Math.round(totalWords / questionsAttempted) : 0;

    // Time calculations omitted for now, assuming 0 if not tracked precisely in the artifact
    return {
      averageAnswerTimeMs: null, 
      questionsAttempted,
      completionPercentage,
      totalWords,
      averageWordsPerAnswer,
    };
  }
}
