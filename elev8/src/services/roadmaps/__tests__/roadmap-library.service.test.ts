/* eslint-disable @typescript-eslint/no-explicit-any */
import assert from "node:assert";
import { prisma } from "@/lib/prisma";
import { RoadmapLibraryService } from "../roadmap-library.service";
import { RoadmapStatus, CareerLevel } from "@prisma/client";

export async function runRoadmapLibraryServiceTests() {
  console.log("Running RoadmapLibraryService Unit & Query Tests...\n");

  const origGlobalFindMany = prisma.globalRoadmap.findMany;
  const origGlobalCount = prisma.globalRoadmap.count;
  const origRoadmapFindMany = prisma.roadmap.findMany;

  try {
    // ----------------------------------------------------
    // 1. Global Section: status == COMPLETED enforcement
    // ----------------------------------------------------
    console.log("1. Testing global roadmaps query enforces status: COMPLETED...");
    let capturedGlobalWhere: any = null;

    (prisma.globalRoadmap as any).findMany = async (args: any) => {
      capturedGlobalWhere = args.where;
      return [
        {
          id: "g_1",
          title: "DevOps Engineer Roadmap",
          description: "Learn Docker, K8s, CI/CD",
          targetRole: "DevOps Engineer",
          experienceLevel: CareerLevel.INTERMEDIATE,
          status: RoadmapStatus.COMPLETED,
          estimatedDuration: "14 weeks",
          blobUrl: "https://blob/devops.json",
          createdByUserId: "user_other",
          createdAt: new Date("2026-01-01"),
          updatedAt: new Date("2026-01-02"),
        },
      ];
    };

    (prisma.globalRoadmap as any).count = async () => 1;

    const globalRes = await RoadmapLibraryService.getRoadmaps({
      userId: "user_current",
      section: "global",
    });

    assert.strictEqual(
      capturedGlobalWhere.status,
      RoadmapStatus.COMPLETED,
      "Global section query MUST filter by status: COMPLETED"
    );
    assert.strictEqual(globalRes.roadmaps.length, 1);
    assert.strictEqual(globalRes.roadmaps[0].isGlobal, true);
    assert.strictEqual(globalRes.roadmaps[0].isOwner, false);
    assert.strictEqual(globalRes.pagination.total, 1);
    console.log("✔ Global section query strictly filters by status: COMPLETED.");

    // ----------------------------------------------------
    // 2. Global Section: Search query integration
    // ----------------------------------------------------
    console.log("2. Testing global section search filter structure...");
    await RoadmapLibraryService.getRoadmaps({
      userId: "user_current",
      section: "global",
      search: "DevOps",
    });

    assert.strictEqual(capturedGlobalWhere.status, RoadmapStatus.COMPLETED);
    assert.ok(capturedGlobalWhere.AND, "Search should be nested in AND clause to preserve status");
    console.log("✔ Search query safely combined with status constraint.");

    // ----------------------------------------------------
    // 3. Mine Section: Merges personal & user-created globals
    // ----------------------------------------------------
    console.log("3. Testing 'mine' section merges personal and user-created globals...");
    (prisma.roadmap as any).findMany = async (args: any) => {
      assert.strictEqual(args.where.userId, "user_alice");
      return [
        {
          id: "p_1",
          title: "Personal AI Roadmap",
          description: "LLMs and Agents",
          targetRole: "AI Engineer",
          experienceLevel: CareerLevel.ADVANCED,
          status: RoadmapStatus.COMPLETED,
          estimatedDuration: "20 weeks",
          blobUrl: "https://blob/ai.json",
          personalized: true,
          createdAt: new Date("2026-02-01"),
          updatedAt: new Date("2026-02-02"),
        },
      ];
    };

    (prisma.globalRoadmap as any).findMany = async (args: any) => {
      assert.strictEqual(args.where.createdByUserId, "user_alice");
      return [
        {
          id: "g_user_1",
          title: "Public Rust Roadmap",
          description: "Rust basics and systems",
          targetRole: "Systems Engineer",
          experienceLevel: CareerLevel.BEGINNER,
          status: RoadmapStatus.COMPLETED,
          estimatedDuration: "10 weeks",
          blobUrl: "https://blob/rust.json",
          createdAt: new Date("2026-03-01"),
          updatedAt: new Date("2026-03-02"),
        },
      ];
    };

    const mineRes = await RoadmapLibraryService.getRoadmaps({
      userId: "user_alice",
      section: "mine",
      sort: "newest",
    });

    assert.strictEqual(mineRes.roadmaps.length, 2, "Must contain both personal and user-created global");
    // Newest first -> Rust (March) should come before AI (February)
    assert.strictEqual(mineRes.roadmaps[0].id, "g_user_1");
    assert.strictEqual(mineRes.roadmaps[0].isGlobal, true);
    assert.strictEqual(mineRes.roadmaps[0].isOwner, true);

    assert.strictEqual(mineRes.roadmaps[1].id, "p_1");
    assert.strictEqual(mineRes.roadmaps[1].isGlobal, false);
    assert.strictEqual(mineRes.roadmaps[1].isOwner, true);
    console.log("✔ Personal and user-created global roadmaps merged and sorted correctly.");

    // ----------------------------------------------------
    // 4. Mine Section: Alphabetical sort
    // ----------------------------------------------------
    console.log("4. Testing alphabetical sorting in 'mine' section...");
    const alphaRes = await RoadmapLibraryService.getRoadmaps({
      userId: "user_alice",
      section: "mine",
      sort: "alphabetical",
    });

    assert.strictEqual(alphaRes.roadmaps[0].title, "Personal AI Roadmap");
    assert.strictEqual(alphaRes.roadmaps[1].title, "Public Rust Roadmap");
    console.log("✔ Alphabetical sort operates accurately.");

    console.log("\n=========================================");
    console.log("All RoadmapLibraryService unit tests passed!");
    console.log("=========================================\n");
  } finally {
    (prisma.globalRoadmap as any).findMany = origGlobalFindMany;
    (prisma.globalRoadmap as any).count = origGlobalCount;
    (prisma.roadmap as any).findMany = origRoadmapFindMany;
  }
}

runRoadmapLibraryServiceTests().catch((err) => {
  console.error("RoadmapLibraryService Test Failure:", err);
  process.exit(1);
});
