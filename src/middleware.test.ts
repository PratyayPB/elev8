import { describe, it, expect, vi, beforeEach } from "vitest";

// Capture the route handler passed to clerkMiddleware
let capturedHandler: ((auth: any, req: any) => Promise<void>) | null = null;
let mockRouteMatcher: ((routes: string[]) => (req: any) => boolean) | null = null;

vi.mock("@clerk/nextjs/server", () => ({
  createRouteMatcher: vi.fn((patterns: string[]) => {
    return (req: { nextUrl: { pathname: string } } | { url: string }) => {
      const pathname = "nextUrl" in req ? req.nextUrl.pathname : new URL(req.url, "http://localhost").pathname;
      return patterns.some((pattern) => {
        const regexStr = pattern.replace("(.*)", ".*");
        return new RegExp(`^${regexStr}$`).test(pathname);
      });
    };
  }),
  clerkMiddleware: vi.fn((handler: any) => {
    capturedHandler = handler;
    return handler;
  }),
}));

describe("Middleware Route Protection (src/middleware.ts)", () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    // Re-import middleware to populate capturedHandler
    await import("./middleware");
  });

  it("registers clerkMiddleware handler", () => {
    expect(capturedHandler).toBeTypeOf("function");
  });

  describe("Protected Route Enforcement", () => {
    it("calls auth.protect() on /dashboard", async () => {
      const mockAuth = { protect: vi.fn().mockResolvedValue(undefined) };
      const mockReq = { nextUrl: { pathname: "/dashboard" } };

      await capturedHandler!(mockAuth, mockReq);
      expect(mockAuth.protect).toHaveBeenCalledTimes(1);
    });

    it("calls auth.protect() on nested dashboard routes", async () => {
      const paths = [
        "/dashboard/resumes",
        "/dashboard/resumes/builder/123",
        "/dashboard/interview",
        "/dashboard/career-assessment",
        "/dashboard/settings",
      ];

      for (const pathname of paths) {
        const mockAuth = { protect: vi.fn().mockResolvedValue(undefined) };
        const mockReq = { nextUrl: { pathname } };

        await capturedHandler!(mockAuth, mockReq);
        expect(mockAuth.protect).toHaveBeenCalledTimes(1);
      }
    });

    it("does NOT call auth.protect() on public routes", async () => {
      const publicPaths = [
        "/",
        "/sign-in",
        "/sign-up",
        "/about",
        "/pricing",
        "/privacy",
        "/terms",
      ];

      for (const pathname of publicPaths) {
        const mockAuth = { protect: vi.fn().mockResolvedValue(undefined) };
        const mockReq = { nextUrl: { pathname } };

        await capturedHandler!(mockAuth, mockReq);
        expect(mockAuth.protect).not.toHaveBeenCalled();
      }
    });
  });

  describe("Matcher Configuration", () => {
    it("exports config matcher array targeting routes and excluding static assets", async () => {
      const { config } = await import("./middleware");
      expect(config).toBeDefined();
      expect(Array.isArray(config.matcher)).toBe(true);
      expect(config.matcher.length).toBeGreaterThanOrEqual(2);

      const staticExclusionRegex = new RegExp(config.matcher[0]);
      // Should match application routes
      expect(staticExclusionRegex.test("/dashboard")).toBe(true);
      expect(staticExclusionRegex.test("/sign-in")).toBe(true);

      // Should bypass static assets
      expect(staticExclusionRegex.test("/_next/static/chunks/main.js")).toBe(false);
      expect(staticExclusionRegex.test("/logo.svg")).toBe(false);
      expect(staticExclusionRegex.test("/favicon.ico")).toBe(false);
      expect(staticExclusionRegex.test("/styles.css")).toBe(false);

      const apiMatcherRegex = new RegExp(config.matcher[1]);
      // Should match API routes
      expect(apiMatcherRegex.test("/api/builder/resumes")).toBe(true);
      expect(apiMatcherRegex.test("/api/webhooks/clerk")).toBe(true);
    });
  });
});
