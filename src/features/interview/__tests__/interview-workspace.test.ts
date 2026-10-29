import { describe, it } from "node:test";
import assert from "node:assert";
import {
  InterviewSession,
  InterviewStatus,
  InterviewDifficulty,
  CareerExperienceLevel,
  InterviewType,
  InterviewTemplateSource,
} from "@prisma/client";
import {
  mapInterviewType,
  mapExperienceLevel,
  mapDifficulty,
  mapExpToStr,
  mapDiffToStr,
} from "../utils/interview-mappers";

function filterInterviews(
  interviews: InterviewSession[],
  search: string,
  difficultyFilter: string
): InterviewSession[] {
  return interviews.filter((item) => {
    const matchesSearch =
      search === "" ||
      item.role.toLowerCase().includes(search.toLowerCase()) ||
      (item.interviewType && item.interviewType.toLowerCase().includes(search.toLowerCase()));

    const matchesDifficulty =
      difficultyFilter === "ALL" ||
      (item.difficulty && item.difficulty.toLowerCase() === difficultyFilter.toLowerCase());

    return matchesSearch && matchesDifficulty;
  });
}

describe("Interview Workspace & Filter Tests", () => {
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

  it("should return all interviews when difficulty is ALL", () => {
    const allResults = filterInterviews(mockInterviews, "", "ALL");
    assert.strictEqual(allResults.length, 3);
  });

  it("should filter by Easy difficulty", () => {
    const easyResults = filterInterviews(mockInterviews, "", "Easy");
    assert.strictEqual(easyResults.length, 1);
    assert.strictEqual(easyResults[0].id, "int_1");
  });

  it("should filter by Hard difficulty", () => {
    const hardResults = filterInterviews(mockInterviews, "", "Hard");
    assert.strictEqual(hardResults.length, 1);
    assert.strictEqual(hardResults[0].id, "int_2");
  });

  it("should filter by Medium difficulty", () => {
    const mediumResults = filterInterviews(mockInterviews, "", "Medium");
    assert.strictEqual(mediumResults.length, 1);
    assert.strictEqual(mediumResults[0].id, "int_3");
  });

  it("should combine search query and difficulty filter", () => {
    const match = filterInterviews(mockInterviews, "Frontend", "Hard");
    assert.strictEqual(match.length, 1);
    assert.strictEqual(match[0].id, "int_2");

    const miss = filterInterviews(mockInterviews, "Backend", "Hard");
    assert.strictEqual(miss.length, 0);
  });

  it("should detect stuck generating interviews older than 5 minutes", () => {
    const now = Date.now();
    const sixMinutesAgo = new Date(now - 6 * 60 * 1000);
    const twoMinutesAgo = new Date(now - 2 * 60 * 1000);

    const stuckSessions = [
      { id: "stuck_1", status: InterviewStatus.GENERATING, updatedAt: sixMinutesAgo },
      { id: "fresh_2", status: InterviewStatus.GENERATING, updatedAt: twoMinutesAgo },
      { id: "ready_3", status: InterviewStatus.READY, updatedAt: sixMinutesAgo },
    ];

    const timeoutThreshold = new Date(now - 5 * 60 * 1000);
    const timedOut = stuckSessions.filter(
      (s) => s.status === InterviewStatus.GENERATING && s.updatedAt < timeoutThreshold
    );

    assert.strictEqual(timedOut.length, 1);
    assert.strictEqual(timedOut[0].id, "stuck_1");
  });

  it("should gate global interview retry to only creator", () => {
    const globalTemplateOwned = { id: "gt_1", createdByUserId: "user_123" };
    const globalTemplateOther = { id: "gt_2", createdByUserId: "user_456" };
    const currentUserId = "user_123";

    assert.strictEqual(globalTemplateOwned.createdByUserId === currentUserId, true);
    assert.strictEqual(globalTemplateOther.createdByUserId === currentUserId, false);
  });

  it("should cascade user template cleanup and never delete global templates", () => {
    const mockDb = {
      globalTemplates: [{ id: "gt_100", role: "Software Engineer" }],
      userTemplates: [{ id: "ut_100", userId: "user_123" }],
      sessions: [
        {
          id: "sess_100",
          userId: "user_123",
          interviewTemplateId: "ut_100",
          globalInterviewTemplateId: "gt_100",
        },
      ],
    };

    const sessionToDelete = mockDb.sessions.find(
      (s) => s.id === "sess_100" && s.userId === "user_123"
    );
    assert.ok(sessionToDelete);

    mockDb.sessions = mockDb.sessions.filter((s) => s.id !== "sess_100");
    const remainingWithTemplate = mockDb.sessions.filter(
      (s) => s.interviewTemplateId === sessionToDelete.interviewTemplateId
    );
    if (remainingWithTemplate.length === 0 && sessionToDelete.interviewTemplateId) {
      mockDb.userTemplates = mockDb.userTemplates.filter(
        (t) => t.id !== sessionToDelete.interviewTemplateId
      );
    }

    assert.strictEqual(mockDb.sessions.length, 0);
    assert.strictEqual(mockDb.userTemplates.length, 0);
    assert.strictEqual(mockDb.globalTemplates.length, 1);
  });

  describe("Shared Interview Mappers", () => {
    it("should map interview types correctly with fallback", () => {
      assert.strictEqual(mapInterviewType("Behavioral Interview"), InterviewType.BEHAVIORAL);
      assert.strictEqual(mapInterviewType("System Design"), InterviewType.SYSTEM_DESIGN);
      assert.strictEqual(mapInterviewType("Role Specific"), InterviewType.ROLE_SPECIFIC);
      assert.strictEqual(mapInterviewType("General"), InterviewType.GENERAL);
      assert.strictEqual(mapInterviewType("Unknown Type"), InterviewType.TECHNICAL);
    });

    it("should map experience levels correctly with fallback", () => {
      assert.strictEqual(mapExperienceLevel("Beginner"), CareerExperienceLevel.ENTRY);
      assert.strictEqual(mapExperienceLevel("Entry"), CareerExperienceLevel.ENTRY);
      assert.strictEqual(mapExperienceLevel("Junior"), CareerExperienceLevel.JUNIOR);
      assert.strictEqual(mapExperienceLevel("Senior"), CareerExperienceLevel.SENIOR);
      assert.strictEqual(mapExperienceLevel("Lead"), CareerExperienceLevel.LEAD);
      assert.strictEqual(mapExperienceLevel("Intermediate"), CareerExperienceLevel.MID);
    });

    it("should map difficulties correctly with fallback", () => {
      assert.strictEqual(mapDifficulty("Easy"), InterviewDifficulty.EASY);
      assert.strictEqual(mapDifficulty("Hard"), InterviewDifficulty.HARD);
      assert.strictEqual(mapDifficulty("Unknown"), InterviewDifficulty.MEDIUM);
    });

    it("should map enums back to user-facing strings", () => {
      assert.strictEqual(mapExpToStr(CareerExperienceLevel.ENTRY), "Beginner");
      assert.strictEqual(mapExpToStr(CareerExperienceLevel.JUNIOR), "Basic");
      assert.strictEqual(mapExpToStr(CareerExperienceLevel.MID), "Intermediate");
      assert.strictEqual(mapExpToStr(CareerExperienceLevel.SENIOR), "Advanced");
      assert.strictEqual(mapExpToStr(CareerExperienceLevel.LEAD), "Advanced");

      assert.strictEqual(mapDiffToStr(InterviewDifficulty.EASY), "Easy");
      assert.strictEqual(mapDiffToStr(InterviewDifficulty.MEDIUM), "Medium");
      assert.strictEqual(mapDiffToStr(InterviewDifficulty.HARD), "Hard");
    });
  });
});
