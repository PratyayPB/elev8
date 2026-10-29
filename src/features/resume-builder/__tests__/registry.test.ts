import assert from "node:assert";
import { describe, it } from "vitest";
import { RESUME_TEMPLATE_REGISTRY } from "../templates/registry";

describe("Resume Template Registry", () => {
  it("should have all 15 templates defined", () => {
    const expectedSlugs = [
      "academic-cv-lite",
      "consultant-polished",
      "developer-mono",
      "government-standard",
      "architects-portfolio",
      "minimalist-grid",
      "nordic-minimal",
      "desert-modern",
      "elegant",
      "macchiato",
      "sidebar",
      "creative-studio",
      "art-deco",
      "art-school-modern",
      "brutalist",
    ];

    for (const slug of expectedSlugs) {
      assert.ok(RESUME_TEMPLATE_REGISTRY[slug]);
      assert.strictEqual(typeof RESUME_TEMPLATE_REGISTRY[slug], "function");
    }
  });

  it("should successfully render consultant-polished template", async () => {
    const renderCb = RESUME_TEMPLATE_REGISTRY["consultant-polished"];
    const html = await renderCb({
      basics: { name: "Test User", email: "test@example.com", location: { address: "City" } },
      work: [],
      education: [],
      skills: [],
    });
    assert.ok(typeof html === "string");
    assert.ok(html.includes("Test User"));
  });

  it("should render all 15 templates without throwing on empty and populated resumes", async () => {
    const { builderToJsonResume } = await import("../adapters/builder-to-json-resume");
    const { createEmptyResumeArtifact } = await import("../utils/create-empty-resume");

    const emptyArtifact = createEmptyResumeArtifact("res-empty");
    const emptyJson = builderToJsonResume(emptyArtifact);

    const populatedJson = builderToJsonResume({
      ...emptyArtifact,
      personalInformation: {
        fullName: "Jane Architect",
        email: "jane@example.com",
        phone: "+1 555-0199",
        location: "San Francisco, CA",
        linkedin: "https://linkedin.com/in/jane",
        github: "https://github.com/jane",
        portfolio: "https://jane.dev",
      },
      professionalSummary: "Senior software engineer with 10 years experience.",
      education: [
        {
          id: "edu-1",
          institution: "MIT",
          degree: "B.S. Computer Science",
          fieldOfStudy: "Engineering",
          startDate: "2014-09-01",
          endDate: "2018-05-30",
        },
      ],
      experience: [
        {
          id: "exp-1",
          jobTitle: "Staff Engineer",
          company: "Tech Corp",
          location: "San Francisco",
          startDate: "2018-06-01",
          endDate: "",
          currentlyWorking: true,
          description: "Architected distributed systems.",
          achievements: ["Reduced latency by 40%"],
        },
      ],
      projects: [
        {
          id: "p-1",
          name: "Project Titan",
          description: "Cloud database",
          technologies: ["Rust", "TypeScript"],
        },
      ],
      skills: [{ id: "s-1", name: "TypeScript", proficiency: "Expert" }],
      certifications: [{ id: "c-1", name: "AWS Pro", issuingOrganization: "Amazon" }],
      achievements: [{ id: "a-1", title: "Inventor of the Year" }],
    });

    for (const [slug, renderer] of Object.entries(RESUME_TEMPLATE_REGISTRY)) {
      const emptyHtml = await renderer(emptyJson);
      assert.ok(typeof emptyHtml === "string", `Template ${slug} failed on empty resume`);
      assert.ok(emptyHtml.length > 50, `Template ${slug} generated suspiciously short output`);

      const popHtml = await renderer(populatedJson);
      assert.ok(typeof popHtml === "string", `Template ${slug} failed on populated resume`);
      assert.ok(popHtml.includes("Jane Architect"), `Template ${slug} does not contain resume name`);
    }
  }, 30000);
});
