import {
  BlobStorageService,
  GoogleGenAI,
  ModuleActivityService,
  external_exports,
  import_client,
  normalizeError,
  prisma,
  require_default,
  task
} from "./chunk-X57CFT4W.mjs";
import "./chunk-WRDGJYLU.mjs";
import {
  __name,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// src/trigger/assess-interview.ts
init_esm();
var import_client3 = __toESM(require_default());

// src/features/interview/services/question-assessment.service.ts
init_esm();

// src/features/interview/services/assessment-prompts.ts
init_esm();
var BULK_QUESTION_ASSESSMENT_PROMPT = `
You are an expert technical interviewer and hiring manager assessing a candidate's interview responses.
You will be provided with a JSON array of interview questions, expected topics, estimated answer time, candidate's actual answer time, and the candidate's answers.

Your task is to evaluate EVERY question independently with rigorous quantitative scoring and constructive qualitative feedback.

TIMING EVALUATION GUIDELINES:
- Consider "estimatedTimeSeconds" vs "actualTimeSeconds" as a SUPPORTING SIGNAL alongside technical correctness, depth, and clarity.
- Do NOT automatically penalize candidates solely for taking more time if their response is comprehensive, structured, and technically accurate.
- Taking significantly less time with a shallow/incomplete answer indicates rushing or superficial knowledge.
- Taking significantly more time with a high-quality answer reflects deliberate formulation and depth.
- Timing is never the sole scoring criterion.

CRITICAL OUTPUT FORMAT:
You MUST return a JSON object with a single top-level key named "assessments".
Inside "assessments", map each question's \`id\` string to its evaluation object.

Example output:
{
  "assessments": {
    "question_id_1": {
      "score": 88,
      "technicalAccuracy": 85,
      "communication": 90,
      "depthScore": 80,
      "strengths": ["Clear explanation of key concepts", "Accurate terminology"],
      "weaknesses": ["Missed edge cases in concurrent usage"],
      "coveredTopics": ["State management", "Re-rendering lifecycle"],
      "missedTopics": ["Error boundary propagation"],
      "feedback": "Solid answer overall. Good pacing and clear explanation of core concepts."
    }
  }
}

Evaluation criteria for each question:
- **score**: A balanced overall score for this specific question (0-100).
- **technicalAccuracy**: How technically correct and accurate is the answer? (0-100)
- **communication**: Is the answer clear, structured, and easy to understand? (0-100)
- **depthScore**: How well did the candidate address nuances, edge cases, trade-offs, and practical considerations? (0-100)
- **strengths**: 1-3 key positive aspects of the answer.
- **weaknesses**: 1-3 areas where the answer fell short.
- **coveredTopics**: Array of expected topics that the candidate demonstrably addressed.
- **missedTopics**: Array of expected topics that the candidate failed to mention or explained incorrectly.
- **feedback**: Actionable, constructive feedback for the candidate taking timing and quality into context.

Be strictly professional, fair, but rigorous. If an answer is blank or skipped, score it 0 across all metrics and note that it was skipped.
`;
var OVERALL_ASSESSMENT_PROMPT = `
You are an expert technical interviewer and hiring manager finalizing an interview assessment report.
You will be provided with:
1. Interview Metadata (Role, Experience Level, Interview Type)
2. The candidate's questions and answers, including estimated and actual response times
3. The detailed question-by-question assessments generated previously.

Your task is to synthesize this information into a cohesive, highly quantitative and actionable evaluation report.

CRITICAL OUTPUT FORMAT:
Return a single JSON object matching this structure:
{
  "overallScore": number (0-100),
  "technicalScore": number (0-100),
  "communicationScore": number (0-100),
  "confidenceScore": number (0-100),
  "problemSolvingScore": number (0-100),
  "practicalDepthScore": number (0-100),
  "strengths": string[],
  "weaknesses": string[],
  "topicMastery": [
    {
      "topic": string,
      "score": number (0-100),
      "status": "STRONG" | "SATISFACTORY" | "NEEDS_IMPROVEMENT"
    }
  ],
  "recommendedLearning": [
    {
      "title": string,
      "description": string,
      "priority": "HIGH" | "MEDIUM" | "LOW"
    }
  ],
  "nextSteps": string[],
  "summary": string
}

Scoring Calibration:
- Scores 85-100: Exceptional, senior/staff-level mastery.
- Scores 70-84: Solid competent performance with minor omissions.
- Scores 55-69: Foundational understanding, needs polish on edge cases or structure.
- Scores < 55: Significant gaps in core principles or omitted responses.
- topicMastery: status should be "STRONG" (score >= 80), "SATISFACTORY" (score 60-79), or "NEEDS_IMPROVEMENT" (score < 60).

Be objective, encouraging, and highly specific to the provided data.
`;

// src/features/interview/assessment-schema.ts
init_esm();
var QuestionFeedbackSchema = external_exports.object({
  score: external_exports.coerce.number().min(0).max(100).catch(50),
  technicalAccuracy: external_exports.coerce.number().min(0).max(100).catch(50),
  communication: external_exports.coerce.number().min(0).max(100).catch(50),
  depthScore: external_exports.coerce.number().min(0).max(100).catch(50),
  strengths: external_exports.array(external_exports.string()).catch([]),
  weaknesses: external_exports.array(external_exports.string()).catch([]),
  coveredTopics: external_exports.array(external_exports.string()).optional().catch([]),
  missedTopics: external_exports.array(external_exports.string()).catch([]),
  feedback: external_exports.string().catch("No feedback provided.")
});
var BulkQuestionAssessmentSchema = external_exports.object({
  assessments: external_exports.record(external_exports.string(), QuestionFeedbackSchema)
});
var TopicMasteryItemSchema = external_exports.object({
  topic: external_exports.string(),
  score: external_exports.coerce.number().min(0).max(100),
  status: external_exports.enum(["STRONG", "SATISFACTORY", "NEEDS_IMPROVEMENT"]).catch("SATISFACTORY")
});
var RecommendedLearningItemSchema = external_exports.object({
  title: external_exports.string(),
  description: external_exports.string(),
  priority: external_exports.enum(["HIGH", "MEDIUM", "LOW"]).catch("MEDIUM")
});
var OverallAssessmentSchema = external_exports.object({
  overallScore: external_exports.coerce.number().min(0).max(100).catch(50),
  technicalScore: external_exports.coerce.number().min(0).max(100).catch(50),
  communicationScore: external_exports.coerce.number().min(0).max(100).catch(50),
  confidenceScore: external_exports.coerce.number().min(0).max(100).catch(50),
  problemSolvingScore: external_exports.coerce.number().min(0).max(100).catch(50),
  practicalDepthScore: external_exports.coerce.number().min(0).max(100).catch(50),
  strengths: external_exports.array(external_exports.string()).catch([]),
  weaknesses: external_exports.array(external_exports.string()).catch([]),
  topicMastery: external_exports.array(TopicMasteryItemSchema).optional().catch([]),
  recommendedLearning: external_exports.array(RecommendedLearningItemSchema).catch([]),
  nextSteps: external_exports.array(external_exports.string()).catch([]),
  summary: external_exports.string().catch("Assessment summary unavailable.")
});

// src/features/interview/services/question-assessment.service.ts
var QuestionAssessmentService = class {
  static {
    __name(this, "QuestionAssessmentService");
  }
  static async assessQuestions(artifact) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    const ai = new GoogleGenAI({ apiKey });
    const payload = artifact.questions.map((q) => {
      const answer = artifact.answers.find((a) => a.questionId === q.id);
      return {
        id: q.id,
        category: q.category,
        question: q.question,
        expectedTopics: q.expectedTopics,
        difficulty: q.difficulty,
        estimatedTimeSeconds: q.estimatedTimeSeconds,
        actualTimeSeconds: answer?.actualTimeSeconds ?? null,
        userAnswer: answer ? answer.answerText : ""
      };
    });
    const userPrompt = `Assess the following questions and answers:

${JSON.stringify(payload, null, 2)}`;
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: `${BULK_QUESTION_ASSESSMENT_PROMPT}

${userPrompt}` }]
        }
      ],
      config: {
        responseMimeType: "application/json"
      }
    });
    const text = response.text?.trim() || "";
    let rawJson;
    try {
      rawJson = JSON.parse(text);
    } catch (e) {
      throw new Error(`Failed to parse AI Question Assessment response as JSON: ${text}`);
    }
    if (typeof rawJson === "object" && rawJson !== null && !Array.isArray(rawJson) && !("assessments" in rawJson)) {
      rawJson = { assessments: rawJson };
    }
    const parsed = BulkQuestionAssessmentSchema.parse(rawJson);
    return parsed.assessments;
  }
};

// src/features/interview/services/overall-assessment.service.ts
init_esm();
var OverallAssessmentService = class {
  static {
    __name(this, "OverallAssessmentService");
  }
  static async generateOverallAssessment(artifact, questionAssessments) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    const ai = new GoogleGenAI({ apiKey });
    const payload = {
      metadata: artifact.metadata,
      questionsAndAnswers: artifact.questions.map((q) => {
        const answer = artifact.answers.find((a) => a.questionId === q.id);
        const assessment = questionAssessments[q.id];
        return {
          question: q.question,
          category: q.category,
          estimatedTimeSeconds: q.estimatedTimeSeconds,
          actualTimeSeconds: answer?.actualTimeSeconds ?? null,
          userAnswer: answer ? answer.answerText : "",
          assessment
        };
      })
    };
    const userPrompt = `Synthesize an overall assessment based on this data:

${JSON.stringify(payload, null, 2)}`;
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: `${OVERALL_ASSESSMENT_PROMPT}

${userPrompt}` }]
        }
      ],
      config: {
        responseMimeType: "application/json"
      }
    });
    const text = response.text?.trim() || "";
    let rawJson;
    try {
      rawJson = JSON.parse(text);
    } catch (e) {
      throw new Error(`Failed to parse AI Overall Assessment response as JSON: ${text}`);
    }
    return OverallAssessmentSchema.parse(rawJson);
  }
  static generateAnalytics(artifact) {
    const totalQuestions = artifact.questions.length;
    const answeredAnswers = artifact.answers.filter((a) => a.answerText && a.answerText.trim().length > 0);
    const questionsAttempted = answeredAnswers.length;
    const completionPercentage = totalQuestions > 0 ? Math.round(questionsAttempted / totalQuestions * 100) : 0;
    let totalWords = 0;
    for (const ans of answeredAnswers) {
      const words = ans.answerText.trim().split(/\s+/).filter((w) => w.length > 0);
      totalWords += words.length;
    }
    const averageWordsPerAnswer = questionsAttempted > 0 ? Math.round(totalWords / questionsAttempted) : 0;
    const answersWithTime = artifact.answers.filter(
      (a) => a.actualTimeSeconds !== void 0 && a.actualTimeSeconds !== null && a.actualTimeSeconds > 0
    );
    const totalTimeMs = answersWithTime.reduce((acc, a) => acc + (a.actualTimeSeconds || 0) * 1e3, 0);
    const averageAnswerTimeMs = answersWithTime.length > 0 ? Math.round(totalTimeMs / answersWithTime.length) : null;
    const totalInterviewTimeSeconds = artifact.answers.reduce(
      (acc, a) => acc + (a.actualTimeSeconds && a.actualTimeSeconds > 0 ? a.actualTimeSeconds : 0),
      0
    );
    let pacingEfficiencyRating = "OPTIMAL";
    const pacingRatios = [];
    for (const q of artifact.questions) {
      const ans = artifact.answers.find((a) => a.questionId === q.id);
      if (ans && ans.actualTimeSeconds && ans.actualTimeSeconds > 0 && q.estimatedTimeSeconds > 0) {
        pacingRatios.push(ans.actualTimeSeconds / q.estimatedTimeSeconds);
      }
    }
    if (pacingRatios.length > 0) {
      const avgRatio = pacingRatios.reduce((sum, r) => sum + r, 0) / pacingRatios.length;
      const variance = pacingRatios.reduce((sum, r) => sum + Math.pow(r - avgRatio, 2), 0) / pacingRatios.length;
      const stdDev = Math.sqrt(variance);
      if (stdDev > 0.65) {
        pacingEfficiencyRating = "VARIABLE";
      } else if (avgRatio < 0.75) {
        pacingEfficiencyRating = "FAST";
      } else if (avgRatio > 1.35) {
        pacingEfficiencyRating = "DELIBERATE";
      } else {
        pacingEfficiencyRating = "OPTIMAL";
      }
    }
    return {
      averageAnswerTimeMs,
      totalInterviewTimeSeconds,
      questionsAttempted,
      completionPercentage,
      totalWords,
      averageWordsPerAnswer,
      pacingEfficiencyRating
    };
  }
};

// src/features/interview/services/assessment-artifact.service.ts
init_esm();
var import_client2 = __toESM(require_default());
var AssessmentArtifactService = class {
  static {
    __name(this, "AssessmentArtifactService");
  }
  /**
   * Appends the assessment report to the artifact, uploads it to Blob Storage,
   * and updates Prisma metadata.
   */
  static async finalizeAssessment(interviewId, currentBlobUrl, artifact, assessmentReport) {
    const updatedArtifact = {
      ...artifact,
      assessment: assessmentReport,
      status: "COMPLETED"
    };
    const newBlobUrl = await BlobStorageService.replaceJson(
      currentBlobUrl,
      `interviews/${interviewId}.json`,
      updatedArtifact
    );
    const interview = await prisma.interviewSession.update({
      where: { id: interviewId },
      data: {
        blobUrl: newBlobUrl,
        overallScore: assessmentReport.overallScores.overallScore,
        status: import_client2.InterviewStatus.COMPLETED,
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    try {
      await ModuleActivityService.recordActivity({
        userId: interview.userId,
        module: import_client.ModuleType.INTERVIEW_PRACTICE,
        eventType: import_client.ModuleActivityEventType.INTERVIEW_COMPLETED,
        completionStatus: import_client.ModuleCompletionStatus.COMPLETED,
        entityId: interviewId,
        metadata: {
          interviewId,
          role: interview.role,
          experienceLevel: interview.experienceLevel,
          overallScore: assessmentReport.overallScores.overallScore
        }
      });
    } catch (err) {
      console.error("[AssessmentArtifactService] Failed to record activity:", err);
    }
    return newBlobUrl;
  }
};

// src/trigger/assess-interview.ts
var assessInterviewJob = task({
  id: "assess-interview",
  retry: {
    maxAttempts: 3
  },
  run: /* @__PURE__ */ __name(async (payload) => {
    const { jobId, interviewId } = payload;
    const updateJob = /* @__PURE__ */ __name(async (progress, step) => {
      await prisma.job.update({
        where: { id: jobId },
        data: { progress, step }
      });
    }, "updateJob");
    try {
      await prisma.job.update({
        where: { id: jobId },
        data: { status: import_client3.JobStatus.RUNNING, startedAt: /* @__PURE__ */ new Date() }
      });
      await updateJob(10, "Loading Interview Artifact");
      const interview = await prisma.interviewSession.findUnique({
        where: { id: interviewId }
      });
      if (!interview || !interview.blobUrl) {
        throw new Error("Interview not found or blob URL missing.");
      }
      const currentBlobUrl = interview.blobUrl;
      const artifact = await BlobStorageService.fetchJson(currentBlobUrl);
      await updateJob(20, "Validating Artifact");
      if (!artifact.questions || artifact.questions.length === 0) {
        throw new Error("Artifact has no questions.");
      }
      await updateJob(40, "Running Bulk Question Assessment (AI)");
      const questionAssessments = await QuestionAssessmentService.assessQuestions(artifact);
      await updateJob(70, "Generating Overall Assessment (AI)");
      const overallAssessment = await OverallAssessmentService.generateOverallAssessment(
        artifact,
        questionAssessments
      );
      await updateJob(85, "Generating Deterministic Analytics");
      const analytics = OverallAssessmentService.generateAnalytics(artifact);
      const assessmentReport = {
        overallScores: overallAssessment,
        questionAnalysis: questionAssessments,
        analytics,
        assessedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      await updateJob(90, "Updating Interview Artifact and Database");
      await AssessmentArtifactService.finalizeAssessment(
        interviewId,
        currentBlobUrl,
        artifact,
        assessmentReport
      );
      await prisma.job.update({
        where: { id: jobId },
        data: {
          status: import_client3.JobStatus.COMPLETED,
          progress: 100,
          step: "Assessment Complete",
          completedAt: /* @__PURE__ */ new Date()
        }
      });
      return { success: true, interviewId };
    } catch (error) {
      const appError = normalizeError(error);
      console.error("Assessment Job Failed:", appError.message, error);
      try {
        await prisma.job.update({
          where: { id: jobId },
          data: {
            status: import_client3.JobStatus.FAILED,
            error: appError.message,
            completedAt: /* @__PURE__ */ new Date()
          }
        });
      } catch (jobErr) {
        console.error("Failed to update job status on error:", jobErr);
      }
      try {
        const failedInterview = await prisma.interviewSession.update({
          where: { id: interviewId },
          data: {
            status: import_client3.InterviewStatus.FAILED
          }
        });
        await ModuleActivityService.recordActivity({
          userId: failedInterview.userId,
          module: import_client.ModuleType.INTERVIEW_PRACTICE,
          eventType: import_client.ModuleActivityEventType.INTERVIEW_FAILED,
          entityId: interviewId,
          metadata: {
            source: "ASSESS_INTERVIEW_TASK",
            interviewId,
            jobId,
            error: appError.message
          }
        }).catch(
          (activityError) => console.warn("[AssessInterviewJob] Failed to record failure activity:", activityError)
        );
      } catch (interviewErr) {
        console.error("Failed to update interview status on error:", interviewErr);
      }
      throw error;
    }
  }, "run")
});
export {
  assessInterviewJob
};
//# sourceMappingURL=assess-interview.mjs.map
