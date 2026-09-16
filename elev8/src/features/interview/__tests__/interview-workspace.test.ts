import assert from "node:assert";
import { InterviewSession, InterviewStatus, InterviewDifficulty, CareerExperienceLevel, InterviewType, InterviewTemplateSource } from "@prisma/client";

function filterInterviews(
  interviews: InterviewSession[],
  search: string,
  difficultyFilter: string
): InterviewSession[] {
  return interviews.filter((item) => {
    // Search
    const matchesSearch =
      search === "" ||
      item.role.toLowerCase().includes(search.toLowerCase()) ||
      (item.interviewType && item.interviewType.toLowerCase().includes(search.toLowerCase()));

    // Difficulty
    const matchesDifficulty =
      difficultyFilter === "ALL" ||
      (item.difficulty && item.difficulty.toLowerCase() === difficultyFilter.toLowerCase());

    return matchesSearch && matchesDifficulty;
  });
}

async function runWorkspaceFilterTests() {
  console.log("Running Interview Workspace Difficulty & Filter Unit Tests...\n");

  const mockInterviews: InterviewSession[] = [
    {
      id: "int_1",
      userId: "user_1",
      interviewTemplateId: null,
      globalInterviewTemplateId: "gt_1",
      templateSource: InterviewTemplateSource.GLOBAL,
      role: "Frontend Engineer",
      experienceLevel: CareerExperienceLevel.MID,
      difficulty: InterviewDifficulty.EASY,
      interviewType: InterviewType.TECHNICAL,
      questionCount: 10,
      estimatedDuration: "30 mins",
      blobUrl: "https://blob.example.com/1",
      overallScore: 85,
      durationSeconds: 1800,
      assessment: null,
      personalized: false,
      profileSnapshot: null,
      profileId: null,
      resumeId: null,
      roadmapId: null,
      status: InterviewStatus.COMPLETED,
      createdAt: new Date("2026-01-01"),
      updatedAt: new Date("2026-01-01"),
    },
    {
      id: "int_2",
      userId: "user_1",
      interviewTemplateId: null,
      globalInterviewTemplateId: "gt_2",
      templateSource: InterviewTemplateSource.GLOBAL,
      role: "Frontend Engineer",
      experienceLevel: CareerExperienceLevel.SENIOR,
      difficulty: InterviewDifficulty.HARD,
      interviewType: InterviewType.SYSTEM_DESIGN,
      questionCount: 10,
      estimatedDuration: "45 mins",
      blobUrl: "https://blob.example.com/2",
      overallScore: 90,
      durationSeconds: 2700,
      assessment: null,
      personalized: false,
      profileSnapshot: null,
      profileId: null,
      resumeId: null,
      roadmapId: null,
      status: InterviewStatus.COMPLETED,
      createdAt: new Date("2026-01-02"),
      updatedAt: new Date("2026-01-02"),
    },
    {
      id: "int_3",
      userId: "user_1",
      interviewTemplateId: null,
      globalInterviewTemplateId: "gt_3",
      templateSource: InterviewTemplateSource.GLOBAL,
      role: "Backend Engineer",
      experienceLevel: CareerExperienceLevel.ENTRY,
      difficulty: InterviewDifficulty.MEDIUM,
      interviewType: InterviewType.TECHNICAL,
      questionCount: 8,
      estimatedDuration: "25 mins",
      blobUrl: "https://blob.example.com/3",
      overallScore: null,
      durationSeconds: null,
      assessment: null,
      personalized: false,
      profileSnapshot: null,
      profileId: null,
      resumeId: null,
      roadmapId: null,
      status: InterviewStatus.READY,
      createdAt: new Date("2026-01-03"),
      updatedAt: new Date("2026-01-03"),
    },
  ];

  // 1. Test Filter All (no-op filter)
  console.log("1. Testing ALL difficulty filter...");
  const allResults = filterInterviews(mockInterviews, "", "ALL");
  assert.strictEqual(allResults.length, 3, "ALL filter should return all 3 interviews");
  console.log("✔ ALL difficulty filter passed.");

  // 2. Test Easy Difficulty Filter
  console.log("2. Testing 'Easy' difficulty filter...");
  const easyResults = filterInterviews(mockInterviews, "", "Easy");
  assert.strictEqual(easyResults.length, 1, "Easy filter should return exactly 1 interview");
  assert.strictEqual(easyResults[0].id, "int_1");
  console.log("✔ 'Easy' difficulty filter passed.");

  // 3. Test Hard Difficulty Filter
  console.log("3. Testing 'Hard' difficulty filter...");
  const hardResults = filterInterviews(mockInterviews, "", "Hard");
  assert.strictEqual(hardResults.length, 1, "Hard filter should return exactly 1 interview");
  assert.strictEqual(hardResults[0].id, "int_2");
  console.log("✔ 'Hard' difficulty filter passed.");

  // 4. Test Medium Difficulty Filter
  console.log("4. Testing 'Medium' difficulty filter...");
  const mediumResults = filterInterviews(mockInterviews, "", "Medium");
  assert.strictEqual(mediumResults.length, 1, "Medium filter should return exactly 1 interview");
  assert.strictEqual(mediumResults[0].id, "int_3");
  console.log("✔ 'Medium' difficulty filter passed.");

  // 5. Test Combined Search + Difficulty Filter
  console.log("5. Testing Combined Search + Difficulty Filter...");
  const combinedMatch = filterInterviews(mockInterviews, "Frontend", "Hard");
  assert.strictEqual(combinedMatch.length, 1);
  assert.strictEqual(combinedMatch[0].id, "int_2");

  const combinedMiss = filterInterviews(mockInterviews, "Backend", "Hard");
  assert.strictEqual(combinedMiss.length, 0, "Backend with Hard difficulty should yield 0 results");
  console.log("✔ Combined filter tests passed.");

  console.log("\n================================================");
  console.log("All Interview Workspace Filtering tests passed!");
  console.log("================================================\n");
}

runWorkspaceFilterTests().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
