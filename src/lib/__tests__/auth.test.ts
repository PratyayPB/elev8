import { describe, it, expect, vi, beforeEach } from "vitest";
import { getAuthSession, getAuthUser, requireAuth, getOrCreateDbUser } from "../auth";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

vi.mock("@clerk/nextjs/server", () => ({
  auth: vi.fn(),
  currentUser: vi.fn(),
}));

vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
      upsert: vi.fn(),
    },
  },
}));

describe("Core Auth Server Utilities (src/lib/auth.ts)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getAuthSession", () => {
    it("returns the session from Clerk auth()", async () => {
      const mockSession = { userId: "user_123", sessionId: "sess_456" };
      vi.mocked(auth).mockResolvedValueOnce(mockSession as any);

      const result = await getAuthSession();
      expect(result).toEqual(mockSession);
      expect(auth).toHaveBeenCalledTimes(1);
    });
  });

  describe("getAuthUser", () => {
    it("returns user details from Clerk currentUser()", async () => {
      const mockUser = { id: "user_123", emailAddresses: [{ emailAddress: "dev@elev8.ai" }] };
      vi.mocked(currentUser).mockResolvedValueOnce(mockUser as any);

      const result = await getAuthUser();
      expect(result).toEqual(mockUser);
      expect(currentUser).toHaveBeenCalledTimes(1);
    });
  });

  describe("requireAuth", () => {
    it("returns userId when user is authenticated", async () => {
      vi.mocked(auth).mockResolvedValueOnce({ userId: "user_authenticated_1" } as any);

      const userId = await requireAuth();
      expect(userId).toBe("user_authenticated_1");
    });

    it("throws Unauthorized error when user is not signed in", async () => {
      vi.mocked(auth).mockResolvedValueOnce({ userId: null } as any);

      await expect(requireAuth()).rejects.toThrow("Unauthorized");
    });

    it("throws Unauthorized error when userId is undefined", async () => {
      vi.mocked(auth).mockResolvedValueOnce({} as any);

      await expect(requireAuth()).rejects.toThrow("Unauthorized");
    });
  });

  describe("getOrCreateDbUser", () => {
    it("throws Unauthorized error when clerkId is missing", async () => {
      vi.mocked(auth).mockResolvedValueOnce({ userId: null } as any);

      await expect(getOrCreateDbUser()).rejects.toThrow("Unauthorized: Please sign in.");
      expect(prisma.user.findUnique).not.toHaveBeenCalled();
    });

    it("returns existing user from database when found", async () => {
      vi.mocked(auth).mockResolvedValueOnce({ userId: "clerk_existing_user" } as any);
      const existingDbUser = {
        id: "db_user_uuid_123",
        clerkId: "clerk_existing_user",
        email: "existing@elev8.ai",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      vi.mocked(prisma.user.findUnique).mockResolvedValueOnce(existingDbUser as any);

      const result = await getOrCreateDbUser();
      expect(result).toEqual(existingDbUser);
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { clerkId: "clerk_existing_user" },
      });
      expect(currentUser).not.toHaveBeenCalled();
      expect(prisma.user.upsert).not.toHaveBeenCalled();
    });

    it("fetches email from Clerk and upserts new user when not found in DB", async () => {
      vi.mocked(auth).mockResolvedValueOnce({ userId: "clerk_new_user" } as any);
      vi.mocked(prisma.user.findUnique).mockResolvedValueOnce(null);

      const mockClerkUser = {
        id: "clerk_new_user",
        emailAddresses: [{ emailAddress: "newcomer@elev8.ai" }],
      };
      vi.mocked(currentUser).mockResolvedValueOnce(mockClerkUser as any);

      const createdUser = {
        id: "db_user_uuid_999",
        clerkId: "clerk_new_user",
        email: "newcomer@elev8.ai",
      };
      vi.mocked(prisma.user.upsert).mockResolvedValueOnce(createdUser as any);

      const result = await getOrCreateDbUser();
      expect(result).toEqual(createdUser);
      expect(prisma.user.upsert).toHaveBeenCalledWith({
        where: { clerkId: "clerk_new_user" },
        create: {
          clerkId: "clerk_new_user",
          email: "newcomer@elev8.ai",
        },
        update: {
          email: "newcomer@elev8.ai",
        },
      });
    });

    it("handles missing email address gracefully when upserting", async () => {
      vi.mocked(auth).mockResolvedValueOnce({ userId: "clerk_no_email_user" } as any);
      vi.mocked(prisma.user.findUnique).mockResolvedValueOnce(null);
      vi.mocked(currentUser).mockResolvedValueOnce({ id: "clerk_no_email_user", emailAddresses: [] } as any);

      const createdUser = {
        id: "db_user_uuid_000",
        clerkId: "clerk_no_email_user",
        email: undefined,
      };
      vi.mocked(prisma.user.upsert).mockResolvedValueOnce(createdUser as any);

      const result = await getOrCreateDbUser();
      expect(result).toEqual(createdUser);
      expect(prisma.user.upsert).toHaveBeenCalledWith({
        where: { clerkId: "clerk_no_email_user" },
        create: {
          clerkId: "clerk_no_email_user",
          email: undefined,
        },
        update: {
          email: undefined,
        },
      });
    });
  });
});
