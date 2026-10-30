import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { POST } from "../route";
import { prisma } from "@/lib/prisma";
import { Webhook } from "svix";
import { UserAccountDeletionService } from "@/services/user";

// Mock next/headers
const mockHeaderGet = vi.fn();
vi.mock("next/headers", () => ({
  headers: vi.fn(async () => ({
    get: mockHeaderGet,
  })),
}));

// Mock svix
vi.mock("svix", () => {
  return {
    Webhook: vi.fn().mockImplementation(() => ({
      verify: vi.fn(),
    })),
  };
});

// Mock user account deletion service
vi.mock("@/services/user", () => ({
  UserAccountDeletionService: {
    purgeUserDataByClerkId: vi.fn(),
  },
}));

// Mock prisma
vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      upsert: vi.fn(),
      deleteMany: vi.fn(),
    },
  },
}));

describe("Clerk Webhook Route (POST /api/webhooks/clerk)", () => {
  const originalEnv = process.env.WEBHOOK_SECRET;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.WEBHOOK_SECRET = "whsec_test_secret_key_12345";
  });

  afterEach(() => {
    process.env.WEBHOOK_SECRET = originalEnv;
  });

  function createMockRequest(body: string) {
    return {
      text: vi.fn().mockResolvedValue(body),
    } as any;
  }

  it("returns 500 when WEBHOOK_SECRET is not configured", async () => {
    delete process.env.WEBHOOK_SECRET;
    const req = createMockRequest("{}");

    const response = await POST(req);
    const json = await response.json();

    expect(response.status).toBe(500);
    expect(json.error).toBe("Configuration error");
  });

  it("returns 400 when svix headers are missing", async () => {
    mockHeaderGet.mockReturnValue(null);
    const req = createMockRequest("{}");

    const response = await POST(req);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.error).toContain("no svix headers");
  });

  it("returns 400 when Svix verification fails", async () => {
    mockHeaderGet.mockImplementation((name: string) => {
      if (name === "svix-id") return "msg_123";
      if (name === "svix-timestamp") return "1730000000";
      if (name === "svix-signature") return "v1,invalid_sig";
      return null;
    });

    const mockVerify = vi.fn().mockImplementation(() => {
      throw new Error("Invalid signature");
    });
    vi.mocked(Webhook).mockImplementationOnce(() => ({ verify: mockVerify } as any));

    const req = createMockRequest('{"type":"user.created"}');

    const response = await POST(req);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.error).toBe("Error occured");
  });

  it("handles user.created event and upserts user in database", async () => {
    mockHeaderGet.mockImplementation((name: string) => {
      if (name === "svix-id") return "msg_test_user_created";
      if (name === "svix-timestamp") return "1730000000";
      if (name === "svix-signature") return "v1,valid_signature";
      return null;
    });

    const eventPayload = {
      type: "user.created",
      data: {
        id: "user_clerk_101",
        email_addresses: [
          { email_address: "alice@example.com" },
        ],
      },
    };

    const mockVerify = vi.fn().mockReturnValue(eventPayload);
    vi.mocked(Webhook).mockImplementationOnce(() => ({ verify: mockVerify } as any));
    vi.mocked(prisma.user.upsert).mockResolvedValueOnce({
      id: "db_uuid_101",
      clerkId: "user_clerk_101",
      email: "alice@example.com",
    } as any);

    const req = createMockRequest(JSON.stringify(eventPayload));
    const response = await POST(req);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.message).toBe("Handled user.created");
    expect(prisma.user.upsert).toHaveBeenCalledWith({
      where: { clerkId: "user_clerk_101" },
      create: {
        clerkId: "user_clerk_101",
        email: "alice@example.com",
      },
      update: {
        email: "alice@example.com",
      },
    });
  });

  it("handles user.updated event and updates user email in database", async () => {
    mockHeaderGet.mockImplementation((name: string) => {
      if (name === "svix-id") return "msg_test_user_updated";
      if (name === "svix-timestamp") return "1730000000";
      if (name === "svix-signature") return "v1,valid_signature";
      return null;
    });

    const eventPayload = {
      type: "user.updated",
      data: {
        id: "user_clerk_101",
        email_addresses: [
          { email_address: "alice.updated@example.com" },
        ],
      },
    };

    const mockVerify = vi.fn().mockReturnValue(eventPayload);
    vi.mocked(Webhook).mockImplementationOnce(() => ({ verify: mockVerify } as any));
    vi.mocked(prisma.user.upsert).mockResolvedValueOnce({
      id: "db_uuid_101",
      clerkId: "user_clerk_101",
      email: "alice.updated@example.com",
    } as any);

    const req = createMockRequest(JSON.stringify(eventPayload));
    const response = await POST(req);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.message).toBe("Handled user.updated");
    expect(prisma.user.upsert).toHaveBeenCalledWith({
      where: { clerkId: "user_clerk_101" },
      create: {
        clerkId: "user_clerk_101",
        email: "alice.updated@example.com",
      },
      update: {
        email: "alice.updated@example.com",
      },
    });
  });

  it("handles user.deleted event and deletes user records from database", async () => {
    mockHeaderGet.mockImplementation((name: string) => {
      if (name === "svix-id") return "msg_test_user_deleted";
      if (name === "svix-timestamp") return "1730000000";
      if (name === "svix-signature") return "v1,valid_signature";
      return null;
    });

    const eventPayload = {
      type: "user.deleted",
      data: {
        id: "user_clerk_deleted_202",
      },
    };

    const mockVerify = vi.fn().mockReturnValue(eventPayload);
    vi.mocked(Webhook).mockImplementationOnce(() => ({ verify: mockVerify } as any));
    vi.mocked(UserAccountDeletionService.purgeUserDataByClerkId).mockResolvedValueOnce(true);

    const req = createMockRequest(JSON.stringify(eventPayload));
    const response = await POST(req);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.message).toBe("Handled user.deleted");
    expect(UserAccountDeletionService.purgeUserDataByClerkId).toHaveBeenCalledWith("user_clerk_deleted_202");
  });

  it("handles unrecognized event types gracefully with 200 ignored response", async () => {
    mockHeaderGet.mockImplementation((name: string) => {
      if (name === "svix-id") return "msg_test_unknown";
      if (name === "svix-timestamp") return "1730000000";
      if (name === "svix-signature") return "v1,valid_signature";
      return null;
    });

    const eventPayload = {
      type: "session.created",
      data: { id: "sess_xyz_123" },
    };

    const mockVerify = vi.fn().mockReturnValue(eventPayload);
    vi.mocked(Webhook).mockImplementationOnce(() => ({ verify: mockVerify } as any));

    const req = createMockRequest(JSON.stringify(eventPayload));
    const response = await POST(req);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.message).toBe("Ignored session.created");
    expect(prisma.user.upsert).not.toHaveBeenCalled();
    expect(prisma.user.deleteMany).not.toHaveBeenCalled();
  });
});
