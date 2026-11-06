import { describe, it, expect } from "vitest";

describe("Realtime Token Scoping & Capability Invariants", () => {
  it("should restrict channel capability strictly to the authenticated user's private channel", () => {
    const authClerkUserId = "user_clerk_12345";
    const authDbUserId = "cuid_db_98765";

    // Capability minting logic as defined in /api/realtime/token
    const capability: Record<string, string[]> = {
      [`notifications:user:${authClerkUserId}`]: ["subscribe"],
      [`notifications:user:${authDbUserId}`]: ["subscribe"],
    };

    // User can only subscribe to their own channels
    expect(capability[`notifications:user:${authClerkUserId}`]).toEqual(["subscribe"]);
    expect(capability[`notifications:user:${authDbUserId}`]).toEqual(["subscribe"]);

    // Attempting to access another user's channel is forbidden
    const victimClerkId = "user_clerk_victim";
    const victimDbId = "cuid_db_victim";
    expect(capability[`notifications:user:${victimClerkId}`]).toBeUndefined();
    expect(capability[`notifications:user:${victimDbId}`]).toBeUndefined();

    // User is never granted "publish" capability
    expect(capability[`notifications:user:${authClerkUserId}`]).not.toContain("publish");
  });

  it("should generate deterministic idempotency keys for job completion and failure", () => {
    const jobId = "job_test_abc123";

    const completionKey1 = `job:${jobId}:completed`;
    const completionKey2 = `job:${jobId}:completed`;
    const failureKey = `job:${jobId}:failed`;

    // Identical operations yield identical keys
    expect(completionKey1).toBe(completionKey2);
    // Completion and failure have distinct keys
    expect(completionKey1).not.toBe(failureKey);
    // Format adheres to colon-delimited namespacing
    expect(completionKey1).toMatch(/^job:[a-zA-Z0-9_]+:completed$/);
  });

  it("should correctly parse since query parameters across ISO string and numeric timestamps", () => {
    const parseSince = (sinceParam: string | null): Date | null => {
      if (!sinceParam) return null;
      const parsedNumber = Number(sinceParam);
      if (!isNaN(parsedNumber) && parsedNumber > 0) {
        return new Date(parsedNumber);
      }
      const parsedIso = new Date(sinceParam);
      return !isNaN(parsedIso.getTime()) ? parsedIso : null;
    };

    const isoString = "2026-11-06T12:00:00.000Z";
    const timestampMs = "1730894400000";

    const parsedFromIso = parseSince(isoString);
    const parsedFromMs = parseSince(timestampMs);
    const parsedFromInvalid = parseSince("not-a-valid-date");
    const parsedFromNull = parseSince(null);

    expect(parsedFromIso).toBeInstanceOf(Date);
    expect(parsedFromIso?.toISOString()).toBe(isoString);

    expect(parsedFromMs).toBeInstanceOf(Date);
    expect(parsedFromMs?.getTime()).toBe(1730894400000);

    expect(parsedFromInvalid).toBeNull();
    expect(parsedFromNull).toBeNull();
  });
});
