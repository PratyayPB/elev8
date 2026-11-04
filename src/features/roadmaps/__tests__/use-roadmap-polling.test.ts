import { describe, it, expect } from "vitest";
import {
  ROADMAP_STAGES,
  resolveRoadmapStage,
} from "../components/roadmap-viewer/LoadingOverlay";
import { POLLING_INTERVAL_MS } from "../hooks/use-roadmap-polling";

describe("Roadmap Polling & Stage-Based UX Tests", () => {
  it("should have correct resolveRoadmapStage mapping", () => {
    expect(ROADMAP_STAGES.length).toBe(4);
    expect(ROADMAP_STAGES[0]).toBe("Analyzing your career goals");
    expect(ROADMAP_STAGES[1]).toBe("Building skill requirements");
    expect(ROADMAP_STAGES[2]).toBe("Generating roadmap");
    expect(ROADMAP_STAGES[3]).toBe("Preparing your roadmap");

    // Range 0-24 -> Stage 0
    expect(resolveRoadmapStage(0)).toBe(0);
    expect(resolveRoadmapStage(10)).toBe(0);
    expect(resolveRoadmapStage(24)).toBe(0);

    // Range 25-49 -> Stage 1
    expect(resolveRoadmapStage(25)).toBe(1);
    expect(resolveRoadmapStage(35)).toBe(1);
    expect(resolveRoadmapStage(49)).toBe(1);

    // Range 50-79 -> Stage 2
    expect(resolveRoadmapStage(50)).toBe(2);
    expect(resolveRoadmapStage(65)).toBe(2);
    expect(resolveRoadmapStage(79)).toBe(2);

    // Range 80-100 -> Stage 3
    expect(resolveRoadmapStage(80)).toBe(3);
    expect(resolveRoadmapStage(95)).toBe(3);
    expect(resolveRoadmapStage(100)).toBe(3);
  });

  it("should verify polling interval bounds", () => {
    expect(POLLING_INTERVAL_MS).toBeGreaterThanOrEqual(2000);
    expect(POLLING_INTERVAL_MS).toBeLessThanOrEqual(3000);
  });

  it("should guard timer lifecycle and duplicate timers", async () => {
    class PollingController {
      public timerId: any = null;
      public pollCount = 0;
      public isActive = false;

      update(isLoading: boolean) {
        if (!isLoading) {
          if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
          }
          this.isActive = false;
          return;
        }

        if (this.timerId) {
          return;
        }

        this.isActive = true;
        this.timerId = setInterval(() => {
          this.pollCount++;
        }, 50);
      }

      stop() {
        if (this.timerId) {
          clearInterval(this.timerId);
          this.timerId = null;
        }
        this.isActive = false;
      }
    }

    const controller = new PollingController();

    // Inactive initially
    controller.update(false);
    expect(controller.timerId).toBeNull();
    expect(controller.isActive).toBe(false);

    // Active
    controller.update(true);
    expect(controller.timerId).not.toBeNull();
    expect(controller.isActive).toBe(true);

    const initialTimer = controller.timerId;

    // Multiple updates while loading -> no duplicate timers
    controller.update(true);
    controller.update(true);
    expect(controller.timerId).toBe(initialTimer);

    // Wait for ticks
    await new Promise((res) => setTimeout(res, 120));
    expect(controller.pollCount).toBeGreaterThanOrEqual(2);

    // Stops when loading finishes
    controller.update(false);
    expect(controller.timerId).toBeNull();
    expect(controller.isActive).toBe(false);

    const countAfterStop = controller.pollCount;
    await new Promise((res) => setTimeout(res, 60));
    expect(controller.pollCount).toBe(countAfterStop);

    // Unmount cleanup
    controller.update(true);
    expect(controller.timerId).not.toBeNull();
    controller.stop();
    expect(controller.timerId).toBeNull();
  });
});
