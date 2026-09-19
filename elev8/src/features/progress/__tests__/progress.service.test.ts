import assert from "node:assert";
import { ProgressService } from "../services/progress.service";

export async function runProgressServiceTests() {
  console.log("Running ProgressService Unit & Boundary Tests...\n");

  // 1. Rejection on missing or empty userId
  {
    await assert.rejects(
      async () => {
        await ProgressService.getDashboardData("");
      },
      {
        message: "Valid userId is required to fetch progress dashboard data.",
      },
      "getDashboardData should reject empty userId"
    );

    await assert.rejects(
      async () => {
        await ProgressService.getDashboardData("   ");
      },
      {
        message: "Valid userId is required to fetch progress dashboard data.",
      },
      "getDashboardData should reject whitespace-only userId"
    );

    await assert.rejects(
      async () => {
        await ProgressService.getDashboardData(null as any);
      },
      {
        message: "Valid userId is required to fetch progress dashboard data.",
      },
      "getDashboardData should reject null userId"
    );

    console.log("✔ Validation boundaries enforced for userId in getDashboardData");
  }

  console.log("\n==================================================");
  console.log("All ProgressService tests passed!");
  console.log("==================================================\n");
}

runProgressServiceTests().catch((err) => {
  console.error("ProgressService Test Failed:", err);
  process.exit(1);
});
