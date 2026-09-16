import assert from "node:assert";
import { ModuleActivityService } from "../services/module-activity.service";
import { ModuleActivityEventType, ModuleProgressStatus, ModuleType } from "../types";

export async function runModuleActivityServiceTests() {
  console.log("Running ModuleActivityService State Computation Unit Tests...\n");

  // 1. Career Assessment Started -> IN_PROGRESS, 25%
  {
    const state = ModuleActivityService.computeProgressState(
      ModuleType.CAREER_ASSESSMENT,
      ModuleActivityEventType.ASSESSMENT_STARTED
    );
    assert.strictEqual(state.careerAssessmentStatus, ModuleProgressStatus.IN_PROGRESS);
    assert.strictEqual(state.careerAssessmentProgress, 25);
    console.log("✔ Assessment Started projects to IN_PROGRESS (25%)");
  }

  // 2. Career Assessment Completed -> COMPLETED, 100%
  {
    const state = ModuleActivityService.computeProgressState(
      ModuleType.CAREER_ASSESSMENT,
      ModuleActivityEventType.ASSESSMENT_COMPLETED,
      { readinessScore: 88 },
      "assess_1"
    );
    assert.strictEqual(state.careerAssessmentStatus, ModuleProgressStatus.COMPLETED);
    assert.strictEqual(state.careerAssessmentProgress, 100);
    assert.strictEqual(state.careerAssessmentMetadata?.readinessScore, 88);
    console.log("✔ Assessment Completed projects to COMPLETED (100%) with readinessScore metadata");
  }

  // 3. Roadmap Generated -> READY, 100%
  {
    const state = ModuleActivityService.computeProgressState(
      ModuleType.ROADMAP,
      ModuleActivityEventType.ROADMAP_GENERATED,
      { targetRole: "Full Stack Developer" }
    );
    assert.strictEqual(state.roadmapStatus, ModuleProgressStatus.READY);
    assert.strictEqual(state.roadmapProgress, 100);
    console.log("✔ Roadmap Generated projects to READY (100%)");
  }

  // 4. Roadmap Completed -> COMPLETED, 100%
  {
    const state = ModuleActivityService.computeProgressState(
      ModuleType.ROADMAP,
      ModuleActivityEventType.ROADMAP_COMPLETED,
      { targetRole: "Full Stack Developer" }
    );
    assert.strictEqual(state.roadmapStatus, ModuleProgressStatus.COMPLETED);
    assert.strictEqual(state.roadmapProgress, 100);
    console.log("✔ Roadmap Completed projects to COMPLETED (100%)");
  }

  // 5. Interview Question Answered (5/10) -> IN_PROGRESS, 50%
  {
    const state = ModuleActivityService.computeProgressState(
      ModuleType.INTERVIEW_PRACTICE,
      ModuleActivityEventType.INTERVIEW_QUESTION_ANSWERED,
      { answeredQuestions: 5, totalQuestions: 10 }
    );
    assert.strictEqual(state.interviewStatus, ModuleProgressStatus.IN_PROGRESS);
    assert.strictEqual(state.interviewProgress, 50);
    console.log("✔ Interview 5/10 questions answered projects to IN_PROGRESS (50%)");
  }

  // 6. Interview All Questions Answered (10/10) -> READY, 100%
  {
    const state = ModuleActivityService.computeProgressState(
      ModuleType.INTERVIEW_PRACTICE,
      ModuleActivityEventType.INTERVIEW_QUESTION_ANSWERED,
      { answeredQuestions: 10, totalQuestions: 10 }
    );
    assert.strictEqual(state.interviewStatus, ModuleProgressStatus.READY);
    assert.strictEqual(state.interviewProgress, 100);
    console.log("✔ Interview 10/10 questions answered projects to READY (100%)");
  }

  // 7. Resume Build Ready -> READY, 90%
  {
    const state = ModuleActivityService.computeProgressState(
      ModuleType.RESUME_BUILD,
      ModuleActivityEventType.RESUME_BUILD_READY,
      { template: "CLASSIC" },
      "res_1"
    );
    assert.strictEqual(state.resumeBuildStatus, ModuleProgressStatus.READY);
    assert.strictEqual(state.resumeBuildProgress, 90);
    console.log("✔ Resume Build Ready projects to READY (90%)");
  }

  // 8. Resume Score Completed -> COMPLETED, 100%
  {
    const state = ModuleActivityService.computeProgressState(
      ModuleType.RESUME_SCORE,
      ModuleActivityEventType.RESUME_SCORE_COMPLETED,
      { overallScore: 82, atsScore: 85 },
      "score_1"
    );
    assert.strictEqual(state.resumeScoreStatus, ModuleProgressStatus.COMPLETED);
    assert.strictEqual(state.resumeScoreProgress, 100);
    assert.strictEqual(state.resumeScoreMetadata?.atsScore, 85);
    console.log("✔ Resume Score Completed projects to COMPLETED (100%) with ATS score metadata");
  }

  console.log("\nAll ModuleActivityService projection tests passed successfully!");
}

if (require.main === module) {
  runModuleActivityServiceTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
