import { describe, it } from "node:test";
import assert from "node:assert";
import {
  InterviewRequestSchema,
  InterviewRequestStage1Schema,
  InterviewProfileContextSchema,
} from "../schemas/interview-request.schema";
import {
  InterviewPlanSchema,
  GeneratedQuestionSchema,
  GeneratedQuestionsListSchema,
} from "../constants/interview-schema";
import {
  QuestionFeedbackSchema,
  OverallAssessmentSchema,
} from "../assessment-schema";

describe("Interview Schemas Unit Tests", () => {
  describe("InterviewProfileContextSchema", () => {
    it("should accept valid profile context", () => {
      const result = InterviewProfileContextSchema.safeParse({
        currentStatus: "EMPLOYED",
        currentRole: "Software Engineer",
        yearsOfExperience: 3,
        highestQualification: "Bachelor's",
        fieldOfStudy: "Computer Science",
        primaryGoal: "LAND_A_JOB",
        targetCompanyType: "ENTERPRISE",
      });
      assert.strictEqual(result.success, true);
    });

    it("should accept empty or nullable fields", () => {
      const result = InterviewProfileContextSchema.safeParse({
        currentStatus: null,
        currentRole: undefined,
      });
      assert.strictEqual(result.success, true);
    });
  });

  describe("InterviewRequestStage1Schema", () => {
    it("should validate a correct stage 1 payload", () => {
      const result = InterviewRequestStage1Schema.safeParse({
        role: "Full Stack Developer",
        experienceLevel: "Intermediate",
        difficulty: "Medium",
        interviewType: "Standard Interview",
      });
      assert.strictEqual(result.success, true);
    });

    it("should reject role with fewer than 2 characters", () => {
      const result = InterviewRequestStage1Schema.safeParse({
        role: "A",
        experienceLevel: "Intermediate",
        difficulty: "Medium",
        interviewType: "Standard Interview",
      });
      assert.strictEqual(result.success, false);
    });

    it("should reject role exceeding 100 characters", () => {
      const result = InterviewRequestStage1Schema.safeParse({
        role: "A".repeat(101),
        experienceLevel: "Intermediate",
        difficulty: "Medium",
        interviewType: "Standard Interview",
      });
      assert.strictEqual(result.success, false);
    });

    it("should reject invalid experience level", () => {
      const result = InterviewRequestStage1Schema.safeParse({
        role: "Engineer",
        experienceLevel: "SuperExpert",
        difficulty: "Medium",
        interviewType: "Standard Interview",
      });
      assert.strictEqual(result.success, false);
    });

    it("should reject invalid difficulty", () => {
      const result = InterviewRequestStage1Schema.safeParse({
        role: "Engineer",
        experienceLevel: "Intermediate",
        difficulty: "Nightmare",
        interviewType: "Standard Interview",
      });
      assert.strictEqual(result.success, false);
    });
  });

  describe("InterviewRequestSchema", () => {
    it("should validate a full interview request", () => {
      const result = InterviewRequestSchema.safeParse({
        role: "Backend Engineer",
        experienceLevel: "Advanced",
        difficulty: "Hard",
        interviewType: "Comprehensive Interview",
        questionCount: 15,
        personalization: {
          skipped: true,
          profile: null,
        },
      });
      assert.strictEqual(result.success, true);
    });

    it("should reject question count less than 1 or greater than 30", () => {
      const lowResult = InterviewRequestSchema.safeParse({
        role: "Backend Engineer",
        experienceLevel: "Advanced",
        difficulty: "Hard",
        interviewType: "Quick Practice",
        questionCount: 0,
        personalization: { skipped: true },
      });
      assert.strictEqual(lowResult.success, false);

      const highResult = InterviewRequestSchema.safeParse({
        role: "Backend Engineer",
        experienceLevel: "Advanced",
        difficulty: "Hard",
        interviewType: "Quick Practice",
        questionCount: 31,
        personalization: { skipped: true },
      });
      assert.strictEqual(highResult.success, false);
    });
  });

  describe("InterviewPlanSchema", () => {
    it("should validate a correct interview plan", () => {
      const result = InterviewPlanSchema.safeParse({
        title: "Senior Backend Technical Interview",
        estimatedDuration: "45 mins",
        sections: [
          { name: "System Design", questions: 5 },
          { name: "Database Optimization", questions: 5 },
        ],
      });
      assert.strictEqual(result.success, true);
    });

    it("should reject plan with missing sections", () => {
      const result = InterviewPlanSchema.safeParse({
        title: "Test",
        estimatedDuration: "30 mins",
      });
      assert.strictEqual(result.success, false);
    });
  });

  describe("GeneratedQuestionSchema", () => {
    it("should validate a generated question", () => {
      const result = GeneratedQuestionSchema.safeParse({
        id: "q_1",
        category: "Technical",
        question: "Explain database indexing in PostgreSQL.",
        difficulty: "Medium",
        expectedTopics: ["B-Tree", "Indexes", "Query Optimization"],
        estimatedTimeSeconds: 180,
      });
      assert.strictEqual(result.success, true);
    });

    it("should reject invalid difficulty in generated question", () => {
      const result = GeneratedQuestionSchema.safeParse({
        id: "q_1",
        category: "Technical",
        question: "Explain indexing.",
        difficulty: "Impossible",
        expectedTopics: ["B-Tree"],
        estimatedTimeSeconds: 180,
      });
      assert.strictEqual(result.success, false);
    });

    it("should validate a list of questions", () => {
      const result = GeneratedQuestionsListSchema.safeParse([
        {
          id: "q_1",
          category: "System Design",
          question: "How would you design a URL shortener?",
          difficulty: "Hard",
          expectedTopics: ["Hashing", "Database", "Caching"],
          estimatedTimeSeconds: 300,
        },
      ]);
      assert.strictEqual(result.success, true);
    });
  });

  describe("Assessment Schemas", () => {
    it("should validate question feedback", () => {
      const result = QuestionFeedbackSchema.safeParse({
        score: 85,
        technicalAccuracy: 90,
        communication: 80,
        depthScore: 85,
        strengths: ["Clear explanation", "Mentioned B-trees"],
        weaknesses: ["Did not cover write amplification"],
        coveredTopics: ["B-Tree", "Indexes"],
        missedTopics: ["Write Amplification"],
        feedback: "Solid answer with good technical depth.",
      });
      assert.strictEqual(result.success, true);
    });

    it("should validate overall assessment", () => {
      const result = OverallAssessmentSchema.safeParse({
        overallScore: 88,
        technicalScore: 90,
        communicationScore: 85,
        confidenceScore: 87,
        problemSolvingScore: 89,
        practicalDepthScore: 86,
        strengths: ["Strong systems knowledge"],
        weaknesses: ["Could improve pacing"],
        recommendedLearning: [
          {
            title: "Database Internals",
            description: "Study storage engines",
            priority: "HIGH",
          },
        ],
        nextSteps: ["Review caching strategies"],
        summary: "Excellent performance overall.",
      });
      assert.strictEqual(result.success, true);
    });
  });
});
