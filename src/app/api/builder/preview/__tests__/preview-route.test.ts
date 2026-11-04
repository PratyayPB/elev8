import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "../route";

// Mock @/lib/auth
vi.mock("@/lib/auth", () => ({
  getOrCreateDbUser: vi.fn().mockResolvedValue({ id: "user_test_123" }),
}));

describe("POST /api/builder/preview route handler", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockArtifact = {
    resumeId: "res_preview_test",
    version: 1,
    personalInformation: {
      fullName: "Alex Rivera",
      email: "alex@example.com",
      phone: "+1 555 1234",
      location: "San Francisco, CA",
      linkedin: "https://linkedin.com/in/alex",
      github: "https://github.com/alex",
      portfolio: "",
    },
    professionalSummary: "Full stack engineer specializing in Next.js and distributed systems.",
    education: [
      {
        id: "edu_1",
        institution: "UC Berkeley",
        degree: "B.S.",
        fieldOfStudy: "Computer Science",
        startDate: "2016",
        endDate: "2020",
        description: "Honors graduate",
      },
    ],
    experience: [
      {
        id: "exp_1",
        jobTitle: "Senior Engineer",
        company: "Venture Corp",
        location: "San Francisco, CA",
        startDate: "2020",
        endDate: "Present",
        currentlyWorking: true,
        description: "Built scalable web apps.",
        achievements: ["Improved performance by 50%"],
      },
    ],
    projects: [],
    skills: [
      { id: "s1", name: "TypeScript", category: "Languages" },
      { id: "s2", name: "React", category: "Frontend" },
    ],
    certifications: [],
    achievements: [],
    languages: [],
    volunteer: [],
    publications: [],
    interests: [],
    references: [],
  };

  it("successfully renders template preview HTML with clean CSS injection", async () => {
    const req = new Request("http://localhost:3000/api/builder/preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        artifact: mockArtifact,
        template: "academic-cv-lite",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toContain("text/html");

    const html = await res.text();
    expect(html).toContain("Alex Rivera");
    expect(html).toContain("Venture Corp");

    // Verify no double-nested <!DOCTYPE html> or <html> tags
    const doctypeCount = (html.match(/<!DOCTYPE html/gi) || []).length;
    expect(doctypeCount).toBeLessThanOrEqual(1);

    const htmlTagCount = (html.match(/<html/gi) || []).length;
    expect(htmlTagCount).toBeLessThanOrEqual(1);

    // Verify customCss was injected
    expect(html).toContain("scrollbar-width: none");
  });

  it("handles incomplete draft artifacts gracefully without throwing 400 or crashing", async () => {
    const draftArtifact = {
      resumeId: "res_draft",
      personalInformation: {
        fullName: "Draft User",
      },
    };

    const req = new Request("http://localhost:3000/api/builder/preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        artifact: draftArtifact,
        template: "developer-mono",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain("Draft User");
  });

  it("successfully renders sidebar template without createContext error", async () => {
    const req = new Request("http://localhost:3000/api/builder/preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        artifact: mockArtifact,
        template: "sidebar",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain("Alex Rivera");
    expect(html).toContain("Venture Corp");
  });
});
