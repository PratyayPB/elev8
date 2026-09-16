/* eslint-disable @typescript-eslint/no-explicit-any */
import assert from "node:assert";
import { prisma } from "@/lib/prisma";
import { RoadmapActionsService } from "../roadmap-actions.service";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { RoadmapStatus, CareerLevel } from "@prisma/client";

export async function runRoadmapActionsServiceTests() {
  console.log("Running RoadmapActionsService Unit & Security Tests...\n");

  // Save original prisma and blob storage methods
  const origRoadmapFindFirst = prisma.roadmap.findFirst;
  const origRoadmapFindUnique = prisma.roadmap.findUnique;
  const origRoadmapCreate = prisma.roadmap.create;
  const origRoadmapDelete = prisma.roadmap.delete;
  const origRoadmapCount = prisma.roadmap.count;
  const origGlobalFindUnique = prisma.globalRoadmap.findUnique;
  const origGlobalCount = prisma.globalRoadmap.count;
  const origJobDeleteMany = prisma.job.deleteMany;
  const origBlobDelete = BlobStorageService.delete;

  try {
    // ----------------------------------------------------
    // 1. duplicateRoadmap (Personal Success)
    // ----------------------------------------------------
    console.log("1. Testing duplicateRoadmap on own personal roadmap...");
    let createdPayload: any = null;

    (prisma.roadmap as any).findFirst = async (args: any) => {
      if (args.where.id === "rm_personal_1" && args.where.userId === "user_alice") {
        return {
          id: "rm_personal_1",
          userId: "user_alice",
          title: "Fullstack Path",
          description: "Fullstack roadmap description",
          targetRole: "Fullstack Developer",
          experienceLevel: CareerLevel.INTERMEDIATE,
          estimatedDuration: "16 weeks",
          status: RoadmapStatus.COMPLETED,
          blobUrl: "https://blob.vercel-storage.com/rm_1.json",
          personalized: true,
          profileSnapshot: { currentRole: "Junior Dev" },
        };
      }
      return null;
    };

    (prisma.roadmap as any).create = async (args: any) => {
      createdPayload = args.data;
      return { id: "rm_copy_1", ...args.data };
    };

    const duplicateRes = await RoadmapActionsService.duplicateRoadmap("rm_personal_1", "user_alice");
    assert.strictEqual(duplicateRes.title, "Fullstack Path (Copy)");
    assert.strictEqual(createdPayload.userId, "user_alice");
    assert.strictEqual(createdPayload.personalized, true);
    assert.deepStrictEqual(createdPayload.profileSnapshot, { currentRole: "Junior Dev" });
    console.log("✔ Personal roadmap successfully duplicated with snapshot context.");

    // ----------------------------------------------------
    // 2. IDOR Protection: Duplicate another user's personal roadmap
    // ----------------------------------------------------
    console.log("2. Testing IDOR Protection in duplicateRoadmap (cross-user attempt)...");
    (prisma.globalRoadmap as any).findUnique = async () => null;

    await assert.rejects(
      async () => {
        // User Bob tries to duplicate Alice's personal roadmap
        await RoadmapActionsService.duplicateRoadmap("rm_personal_1", "user_bob");
      },
      (err: any) => {
        assert.ok(err.message.includes("not found or access denied"));
        return true;
      },
      "Must reject unauthorized duplication of another user's personal roadmap"
    );
    console.log("✔ IDOR attempt successfully blocked by userId query scoping.");

    // ----------------------------------------------------
    // 3. duplicateRoadmap (Global Success)
    // ----------------------------------------------------
    console.log("3. Testing duplicateRoadmap from global roadmap into personal roadmap schema...");
    (prisma.roadmap as any).findFirst = async () => null;
    (prisma.globalRoadmap as any).findUnique = async (args: any) => {
      if (args.where.id === "global_rm_1") {
        return {
          id: "global_rm_1",
          title: "Frontend Guide",
          description: "Public frontend guide",
          targetRole: "Frontend Developer",
          experienceLevel: CareerLevel.BEGINNER,
          estimatedDuration: "8 weeks",
          status: RoadmapStatus.COMPLETED,
          blobUrl: "https://blob.vercel-storage.com/global_1.json",
        };
      }
      return null;
    };

    const globalDup = await RoadmapActionsService.duplicateRoadmap("global_rm_1", "user_bob");
    assert.strictEqual(globalDup.title, "Frontend Guide (Copy)");
    assert.strictEqual(createdPayload.userId, "user_bob");
    assert.strictEqual(createdPayload.personalized, false);
    console.log("✔ Global roadmap successfully duplicated into personal Roadmap schema.");

    // ----------------------------------------------------
    // 4. deleteRoadmap (Personal Success & Cascade Cleanup)
    // ----------------------------------------------------
    console.log("4. Testing deleteRoadmap on own personal roadmap with job cascade & blob deletion...");
    let deletedRoadmapId: string | null = null;
    let deletedJobArtifactId: string | null = null;
    let deletedBlobUrl: string | null = null;

    (prisma.roadmap as any).findUnique = async (args: any) => {
      if (args.where.id === "rm_to_delete") {
        return {
          id: "rm_to_delete",
          userId: "user_alice",
          blobUrl: "https://blob.vercel-storage.com/delete_me.json",
        };
      }
      return null;
    };

    (prisma.roadmap as any).delete = async (args: any) => {
      deletedRoadmapId = args.where.id;
      return { id: args.where.id };
    };

    (prisma.job as any).deleteMany = async (args: any) => {
      deletedJobArtifactId = args.where.artifactId;
      return { count: 2 };
    };

    (prisma.roadmap as any).count = async () => 0;
    (prisma.globalRoadmap as any).count = async () => 0;
    (BlobStorageService as any).delete = async (url: string) => {
      deletedBlobUrl = url;
    };

    const deleteSuccess = await RoadmapActionsService.deleteRoadmap("rm_to_delete", "user_alice");
    assert.strictEqual(deleteSuccess, true);
    assert.strictEqual(deletedRoadmapId, "rm_to_delete");
    assert.strictEqual(deletedJobArtifactId, "rm_to_delete");
    assert.strictEqual(deletedBlobUrl, "https://blob.vercel-storage.com/delete_me.json");
    console.log("✔ Personal roadmap, jobs, and unreferenced blob cleaned up on delete.");

    // ----------------------------------------------------
    // 5. deleteRoadmap Unauthorized (Non-Owner Attempt)
    // ----------------------------------------------------
    console.log("5. Testing deleteRoadmap ownership check (unauthorized user)...");
    await assert.rejects(
      async () => {
        await RoadmapActionsService.deleteRoadmap("rm_to_delete", "user_attacker");
      },
      (err: any) => {
        assert.ok(err.message.includes("Unauthorized: You can only delete your own roadmaps"));
        return true;
      }
    );
    console.log("✔ Unauthorized delete attempt strictly rejected.");

    // ----------------------------------------------------
    // 6. deleteRoadmap (Global Roadmaps Rejection)
    // ----------------------------------------------------
    console.log("6. Testing deleteRoadmap on global roadmap...");
    (prisma.roadmap as any).findUnique = async () => null;
    (prisma.globalRoadmap as any).findUnique = async (args: any) => {
      if (args.where.id === "global_rm_permanent") {
        return { id: "global_rm_permanent" };
      }
      return null;
    };

    await assert.rejects(
      async () => {
        await RoadmapActionsService.deleteRoadmap("global_rm_permanent", "user_alice");
      },
      (err: any) => {
        assert.ok(err.message.includes("Delete is not available for global roadmaps"));
        return true;
      }
    );
    console.log("✔ Global roadmaps deletion attempt correctly rejected.");

    console.log("\n=========================================");
    console.log("All RoadmapActionsService unit tests passed!");
    console.log("=========================================\n");
  } finally {
    // Restore all original methods
    (prisma.roadmap as any).findFirst = origRoadmapFindFirst;
    (prisma.roadmap as any).findUnique = origRoadmapFindUnique;
    (prisma.roadmap as any).create = origRoadmapCreate;
    (prisma.roadmap as any).delete = origRoadmapDelete;
    (prisma.roadmap as any).count = origRoadmapCount;
    (prisma.globalRoadmap as any).findUnique = origGlobalFindUnique;
    (prisma.globalRoadmap as any).count = origGlobalCount;
    (prisma.job as any).deleteMany = origJobDeleteMany;
    (BlobStorageService as any).delete = origBlobDelete;
  }
}

runRoadmapActionsServiceTests().catch((err) => {
  console.error("RoadmapActionsService Test Failure:", err);
  process.exit(1);
});
