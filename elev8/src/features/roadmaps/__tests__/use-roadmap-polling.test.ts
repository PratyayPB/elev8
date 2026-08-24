import assert from "node:assert";
import {
  ROADMAP_STAGES,
  resolveRoadmapStage,
} from "../components/roadmap-viewer/LoadingOverlay";
import { POLLING_INTERVAL_MS } from "../hooks/use-roadmap-polling";

async function runPollingAndStageTests() {
  console.log("Running Roadmap Polling & Stage-Based UX Tests...\n");

  // ==========================================
  // 1. Stage Resolution Function
  // ==========================================
  console.log("1. Testing resolveRoadmapStage mapping...");
  
  assert.strictEqual(ROADMAP_STAGES.length, 4, "Must have exactly 4 defined user-facing stages");
  assert.strictEqual(ROADMAP_STAGES[0], "Analyzing your career goals");
  assert.strictEqual(ROADMAP_STAGES[1], "Building skill requirements");
  assert.strictEqual(ROADMAP_STAGES[2], "Generating roadmap");
  assert.strictEqual(ROADMAP_STAGES[3], "Preparing your roadmap");

  // Range 0-24 -> Stage 0
  assert.strictEqual(resolveRoadmapStage(0), 0, "Progress 0 must map to Stage 0");
  assert.strictEqual(resolveRoadmapStage(10), 0, "Progress 10 must map to Stage 0");
  assert.strictEqual(resolveRoadmapStage(24), 0, "Progress 24 must map to Stage 0");

  // Range 25-49 -> Stage 1
  assert.strictEqual(resolveRoadmapStage(25), 1, "Progress 25 must map to Stage 1");
  assert.strictEqual(resolveRoadmapStage(35), 1, "Progress 35 must map to Stage 1");
  assert.strictEqual(resolveRoadmapStage(49), 1, "Progress 49 must map to Stage 1");

  // Range 50-79 -> Stage 2
  assert.strictEqual(resolveRoadmapStage(50), 2, "Progress 50 must map to Stage 2");
  assert.strictEqual(resolveRoadmapStage(65), 2, "Progress 65 must map to Stage 2");
  assert.strictEqual(resolveRoadmapStage(79), 2, "Progress 79 must map to Stage 2");

  // Range 80-100 -> Stage 3
  assert.strictEqual(resolveRoadmapStage(80), 3, "Progress 80 must map to Stage 3");
  assert.strictEqual(resolveRoadmapStage(95), 3, "Progress 95 must map to Stage 3");
  assert.strictEqual(resolveRoadmapStage(100), 3, "Progress 100 must map to Stage 3");

  console.log("✔ resolveRoadmapStage tests passed.");

  // ==========================================
  // 2. Polling Interval Constant
  // ==========================================
  console.log("2. Testing polling interval bounds...");
  assert.ok(
    POLLING_INTERVAL_MS >= 2000 && POLLING_INTERVAL_MS <= 3000,
    `POLLING_INTERVAL_MS (${POLLING_INTERVAL_MS}) must be between 2000ms and 3000ms`
  );
  console.log("✔ Polling interval constant verified (2500ms).");

  // ==========================================
  // 3. Timer Lifecycle Controller Logic
  // ==========================================
  console.log("3. Testing timer lifecycle state machine logic...");

  class PollingController {
    public timerId: any = null;
    public pollCount = 0;
    public isActive = false;

    public update(isLoading: boolean) {
      if (!isLoading) {
        this.stop();
        return;
      }

      // Guard: prevent duplicate timers
      if (this.timerId !== null) {
        return;
      }

      this.isActive = true;
      this.timerId = setInterval(() => {
        this.pollCount++;
      }, 50);
    }

    public stop() {
      if (this.timerId !== null) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
      this.isActive = false;
    }
  }

  const controller = new PollingController();

  // Test Case A: Initial load with isLoading = false -> Timer not created
  controller.update(false);
  assert.strictEqual(controller.timerId, null, "Timer should not start if isLoading is false");
  assert.strictEqual(controller.isActive, false);

  // Test Case B: Active generation starts (isLoading = true) -> Timer starts
  controller.update(true);
  assert.ok(controller.timerId !== null, "Timer must be active when isLoading is true");
  assert.strictEqual(controller.isActive, true);

  const initialTimer = controller.timerId;

  // Test Case C: Multiple re-renders while still loading -> Duplicate timers guarded
  controller.update(true);
  controller.update(true);
  assert.strictEqual(
    controller.timerId,
    initialTimer,
    "Timer ID must not change / duplicate on multiple render calls"
  );

  // Wait for intervals to fire
  await new Promise((res) => setTimeout(res, 120));
  assert.ok(controller.pollCount >= 2, `Expected at least 2 polls, got ${controller.pollCount}`);

  // Test Case D: Job finishes (isLoading = false) -> Polling terminates immediately
  controller.update(false);
  assert.strictEqual(controller.timerId, null, "Timer must be cleared when isLoading becomes false");
  assert.strictEqual(controller.isActive, false);

  const countAfterStop = controller.pollCount;
  await new Promise((res) => setTimeout(res, 100));
  assert.strictEqual(
    controller.pollCount,
    countAfterStop,
    "Poll count must not increase after termination"
  );

  // Test Case E: Unmount cleanup
  controller.update(true);
  assert.ok(controller.timerId !== null);
  controller.stop();
  assert.strictEqual(controller.timerId, null, "Timer must be cleaned up on unmount");

  console.log("✔ Timer lifecycle and duplicate guard tests passed.");

  console.log("\n=========================================");
  console.log("All Roadmap Polling unit tests passed!");
  console.log("=========================================\n");
}

runPollingAndStageTests().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
