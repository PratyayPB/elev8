/* eslint-disable @typescript-eslint/no-explicit-any */
import assert from "node:assert";
import { prisma } from "@/lib/prisma";
import { RoadmapViewerService } from "../roadmap-viewer.service";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { ModuleActivityService } from "@/features/progress/services";
import { RoadmapStatus, JobStatus, CareerLevel } from "@prisma/client";

export async function runRoadmapViewerServiceTests() {
  console.log("Running RoadmapViewerService Unit & Security Tests...\n");

  const origRoadmapFindFirst = prisma.roadmap.findFirst;
  const origGlobalFindUnique = prisma.globalRoadmap.findUnique;
  const origJobFindFirst = prisma.job.findFirst;
  const origFetchJson = BlobStorageService.fetchJson;
  const origRecordActivity = ModuleActivityService.recordActivity;

  (ModuleActivityService as any).recordActivity = async () => ({ id: "mock_act" });

  try {
    const validArtifact = {
      metadata: {
        title: "Cloud Architect Roadmap",
        role: "Cloud Architect",
        experienceLevel: "Advanced",
        estimatedDuration: "24 weeks",
        generatedAt: new Date().toISOString(),
      },
      summary: "Comprehensive cloud architect curriculum",
      projects: [],
      resources: [],
      careerTips: [],
      logicalGraph: {
        nodes: [{ id: "n1", title: "AWS Solutions", description: "Learn AWS", type: "skill" }],
        edges: [],
      },
      reactFlow: {
        nodes: [{ id: "n1", position: { x: 0, y: 0 }, data: { label: "AWS" } }],
        edges: [],
      },
    };

    // ----------------------------------------------------
    // 1. Personal Roadmap: View by Owner
    // ----------------------------------------------------
    console.log("1. Testing getRoadmapForViewer on personal roadmap by owner...");
    (prisma.roadmap as any).findFirst = async (args: any) => {
      if (args.where.id === "rm_pers_1" && args.where.userId === "user_owner") {
        return {
          id: "rm_pers_1",
          title: "Cloud Architect Roadmap",
          status: RoadmapStatus.COMPLETED,
          blobUrl: "https://blob/cloud.json",
          targetRole: "Cloud Architect",
          experienceLevel: CareerLevel.ADVANCED,
          estimatedDuration: "24 weeks",
          personalized: true,
        };
      }
      return null;
    };

    (prisma.job as any).findFirst = async () => null;
    (BlobStorageService as any).fetchJson = async () => validArtifact;

    const ownerRes = await RoadmapViewerService.getRoadmapForViewer("rm_pers_1", "user_owner");
    assert.ok(ownerRes, "Owner must be able to load their personal roadmap");
    assert.strictEqual(ownerRes.roadmap.id, "rm_pers_1");
    assert.strictEqual(ownerRes.roadmap.isGlobal, false);
    assert.strictEqual(ownerRes.roadmap.personalized, true);
    assert.ok(ownerRes.artifact, "Must return valid artifact");
    assert.strictEqual(ownerRes.artifact.metadata.title, "Cloud Architect Roadmap");
    console.log("✔ Personal roadmap loaded successfully for owner.");

    // ----------------------------------------------------
    // 2. Personal Roadmap: Non-Owner Access Control
    // ----------------------------------------------------
    console.log("2. Testing non-owner cannot view another user's personal roadmap...");
    (prisma.globalRoadmap as any).findUnique = async () => null;

    const nonOwnerRes = await RoadmapViewerService.getRoadmapForViewer("rm_pers_1", "user_stranger");
    assert.strictEqual(nonOwnerRes, null, "Must return null (not found) for unauthorized user");
    console.log("✔ Non-owner access correctly rejected with null.");

    // ----------------------------------------------------
    // 3. Global Roadmap: Publicly accessible by any authenticated user
    // ----------------------------------------------------
    console.log("3. Testing global roadmap viewer access...");
    (prisma.roadmap as any).findFirst = async () => null;
    (prisma.globalRoadmap as any).findUnique = async (args: any) => {
      if (args.where.id === "rm_glob_1") {
        return {
          id: "rm_glob_1",
          title: "Public SRE Guide",
          status: RoadmapStatus.COMPLETED,
          blobUrl: "https://blob/sre.json",
          targetRole: "SRE",
          experienceLevel: CareerLevel.INTERMEDIATE,
          estimatedDuration: "12 weeks",
        };
      }
      return null;
    };

    const globalViewerRes = await RoadmapViewerService.getRoadmapForViewer("rm_glob_1", "user_any");
    assert.ok(globalViewerRes);
    assert.strictEqual(globalViewerRes.roadmap.id, "rm_glob_1");
    assert.strictEqual(globalViewerRes.roadmap.isGlobal, true);
    assert.strictEqual(globalViewerRes.roadmap.personalized, false);
    console.log("✔ Global roadmap accessible to authenticated user.");

    // ----------------------------------------------------
    // 4. Failed Background Job Error Extraction
    // ----------------------------------------------------
    console.log("4. Testing error extraction from failed background job...");
    (prisma.roadmap as any).findFirst = async () => ({
      id: "rm_failed_1",
      title: "Failed Roadmap",
      status: RoadmapStatus.FAILED,
      blobUrl: null,
      targetRole: "Engineer",
      experienceLevel: CareerLevel.BEGINNER,
      estimatedDuration: null,
      personalized: false,
    });

    (prisma.job as any).findFirst = async () => ({
      id: "job_err_1",
      status: JobStatus.FAILED,
      step: "AI Generation",
      progress: 25,
      error: "AI model quota exceeded. Please try again.",
    });

    const failedRes = await RoadmapViewerService.getRoadmapForViewer("rm_failed_1", "user_owner");
    assert.ok(failedRes);
    assert.strictEqual(failedRes.artifact, null);
    assert.strictEqual(failedRes.error, "AI model quota exceeded. Please try again.");
    console.log("✔ Failed background job status and error cleanly surfaced.");

    console.log("\n=========================================");
    console.log("All RoadmapViewerService unit tests passed!");
    console.log("=========================================\n");
  } finally {
    (prisma.roadmap as any).findFirst = origRoadmapFindFirst;
    (prisma.globalRoadmap as any).findUnique = origGlobalFindUnique;
    (prisma.job as any).findFirst = origJobFindFirst;
    (BlobStorageService as any).fetchJson = origFetchJson;
    ModuleActivityService.recordActivity = origRecordActivity;
  }
}

runRoadmapViewerServiceTests().catch((err) => {
  console.error("RoadmapViewerService Test Failure:", err);
  process.exit(1);
});
