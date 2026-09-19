import { describe, it } from "node:test";
import assert from "node:assert";
import { GlobalInterviewTemplateService } from "../services/global-interview-template.service";
import { InterviewValidator } from "../services/interview-validator";
import { OverallAssessmentService } from "../services/overall-assessment.service";
import { InterviewRequestService } from "../services/interview-request.service";
import { InterviewArtifact } from "../types";

describe("Interview Services Unit Tests", () => {
  describe("GlobalInterviewTemplateService.normalizeRole", () => {
    it("should normalize known role aliases to canonical form", () => {
      const canonicalFrontend = GlobalInterviewTemplateService.normalizeRole("frontend engineer");
      assert.ok(canonicalFrontend);
      assert.strictEqual(typeof canonicalFrontend, "string");

      const canonicalBackend = GlobalInterviewTemplateService.normalizeRole("backend developer");
      assert.ok(canonicalBackend);
    });

    it("should normalize raw role strings cleanly", () => {
      const normalized = GlobalInterviewTemplateService.normalizeRole("  DevOps Engineer  ");
      assert.ok(normalized);
      assert.strictEqual(normalized, normalized.toLowerCase());
    });
  });

  describe("InterviewValidator.validatePlan", () => {
    it("should accept valid plan matching question count", () => {
      const validPlan = {
        title: "Frontend Technical Round",
        estimatedDuration: "30 mins",
        sections: [
          { name: "JavaScript Core", questions: 5 },
          { name: "React Internals", questions: 5 },
        ],
      };

      const result = InterviewValidator.validatePlan(validPlan, 10);
      assert.strictEqual(result.title, "Frontend Technical Round");
      assert.strictEqual(result.sections.length, 2);
    });

    it("should throw error if section questions total does not match expected count", () => {
      const mismatchedPlan = {
        title: "Frontend Technical Round",
        estimatedDuration: "30 mins",
        sections: [
          { name: "JavaScript Core", questions: 3 },
          { name: "React Internals", questions: 3 },
        ],
      };

      assert.throws(
        () => InterviewValidator.validatePlan(mismatchedPlan, 10),
        /Plan question count mismatch/
      );
    });

    it("should throw error if plan schema is invalid", () => {
      assert.throws(
        () => InterviewValidator.validatePlan({ invalid: true }, 5),
        /Plan validation failed/
      );
    });
  });

  describe("InterviewValidator.validateQuestions", () => {
    it("should accept valid questions matching expected count", () => {
      const validQuestions = [
        {
          id: "q_1",
          category: "JavaScript",
          question: "Explain closures.",
          difficulty: "Medium",
          expectedTopics: ["Scope", "Lexical"],
          estimatedTimeSeconds: 120,
        },
        {
          id: "q_2",
          category: "JavaScript",
          question: "Explain event loop.",
          difficulty: "Medium",
          expectedTopics: ["Microtasks", "Macrotasks"],
          estimatedTimeSeconds: 150,
        },
      ];

      const result = InterviewValidator.validateQuestions(validQuestions, 2);
      assert.strictEqual(result.length, 2);
      assert.strictEqual(result[0].id, "q_1");
    });

    it("should throw error when question count does not match", () => {
      const questions = [
        {
          id: "q_1",
          category: "JavaScript",
          question: "Explain closures.",
          difficulty: "Medium",
          expectedTopics: ["Scope"],
          estimatedTimeSeconds: 120,
        },
      ];

      assert.throws(
        () => InterviewValidator.validateQuestions(questions, 2),
        /Questions length mismatch/
      );
    });

    it("should throw error when duplicate question IDs exist", () => {
      const duplicateIdQuestions = [
        {
          id: "q_same",
          category: "JavaScript",
          question: "Question A",
          difficulty: "Easy",
          expectedTopics: ["Topic"],
          estimatedTimeSeconds: 100,
        },
        {
          id: "q_same",
          category: "JavaScript",
          question: "Question B",
          difficulty: "Easy",
          expectedTopics: ["Topic"],
          estimatedTimeSeconds: 100,
        },
      ];

      assert.throws(
        () => InterviewValidator.validateQuestions(duplicateIdQuestions, 2),
        /Duplicate question ID detected/
      );
    });

    it("should throw error when estimatedTimeSeconds is missing or non-positive", () => {
      const invalidTimeQuestions = [
        {
          id: "q_1",
          category: "JavaScript",
          question: "Question A",
          difficulty: "Easy",
          expectedTopics: ["Topic"],
          estimatedTimeSeconds: 0,
        },
      ];

      assert.throws(
        () => InterviewValidator.validateQuestions(invalidTimeQuestions, 1),
        /Questions validation failed|Invalid estimatedTimeSeconds/
      );
    });
  });

  describe("OverallAssessmentService.generateAnalytics", () => {
    it("should calculate correct deterministic analytics for a completed interview", () => {
      const mockArtifact: InterviewArtifact = {
        version: "1.0.0",
        metadata: {
          interviewId: "sess_test",
          role: "Frontend Engineer",
          experienceLevel: "Intermediate",
          difficulty: "Medium",
          interviewType: "Standard Interview",
          questionCount: 2,
          estimatedDuration: "10 mins",
          generatedAt: new Date().toISOString(),
          generatorVersion: "1.0.0",
        },
        questions: [
          {
            id: "q_1",
            category: "Core",
            question: "What is React?",
            difficulty: "Medium",
            expectedTopics: ["Virtual DOM"],
            estimatedTimeSeconds: 100,
          },
          {
            id: "q_2",
            category: "Core",
            question: "What is state?",
            difficulty: "Medium",
            expectedTopics: ["Immutability"],
            estimatedTimeSeconds: 100,
          },
        ],
        answers: [
          {
            questionId: "q_1",
            answerText: "React is a declarative JavaScript library for user interfaces.",
            actualTimeSeconds: 95,
          },
          {
            questionId: "q_2",
            answerText: "State is an observable object containing data over time.",
            actualTimeSeconds: 105,
          },
        ],
        assessment: null,
      };

      const analytics = OverallAssessmentService.generateAnalytics(mockArtifact);

      assert.strictEqual(analytics.questionsAttempted, 2);
      assert.strictEqual(analytics.completionPercentage, 100);
      assert.strictEqual(analytics.totalWords, 18);
      assert.strictEqual(analytics.averageWordsPerAnswer, 9);
      assert.strictEqual(analytics.totalInterviewTimeSeconds, 200);
      assert.strictEqual(analytics.averageAnswerTimeMs, 100000);
      assert.strictEqual(analytics.pacingEfficiencyRating, "OPTIMAL");
    });

    it("should handle empty answers gracefully", () => {
      const mockArtifact: InterviewArtifact = {
        version: "1.0.0",
        metadata: {
          interviewId: "sess_empty",
          role: "Engineer",
          experienceLevel: "Intermediate",
          difficulty: "Medium",
          interviewType: "Standard Interview",
          questionCount: 2,
          estimatedDuration: "10 mins",
          generatedAt: new Date().toISOString(),
          generatorVersion: "1.0.0",
        },
        questions: [
          {
            id: "q_1",
            category: "Core",
            question: "Q1",
            difficulty: "Medium",
            expectedTopics: [],
            estimatedTimeSeconds: 100,
          },
        ],
        answers: [],
        assessment: null,
      };

      const analytics = OverallAssessmentService.generateAnalytics(mockArtifact);
      assert.strictEqual(analytics.questionsAttempted, 0);
      assert.strictEqual(analytics.completionPercentage, 0);
      assert.strictEqual(analytics.totalWords, 0);
      assert.strictEqual(analytics.totalInterviewTimeSeconds, 0);
    });
  });

  describe("InterviewRequestService.buildRequest", () => {
    it("should validate and return typed request", () => {
      const raw = {
        role: "DevOps Engineer",
        experienceLevel: "Intermediate",
        difficulty: "Medium",
        interviewType: "Standard Interview",
        personalization: { skipped: true },
      };

      const request = InterviewRequestService.buildRequest(raw);
      assert.strictEqual(request.role, "DevOps Engineer");
    });

    it("should throw error on invalid request payload", () => {
      assert.throws(
        () => InterviewRequestService.buildRequest({ role: "A" }),
        /Invalid interview request data/
      );
    });
  });
});
