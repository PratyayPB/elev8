import assert from "node:assert";
import { describe, it } from "node:test";
import { builderToJsonResume } from "../adapters/builder-to-json-resume";
import { BuilderResumeArtifact } from "../types";

describe("builderToJsonResume adapter", () => {
  it("should map personal information to basics", () => {
    const artifact: BuilderResumeArtifact = {
      resumeId: "123",
      version: 1,
      personalInformation: {
        fullName: "Jane Doe",
        email: "jane@example.com",
        phone: "555-1234",
        location: "New York",
        linkedin: "linkedin.com/in/jane",
        portfolio: "janedoe.com",
      },
      professionalSummary: "A great developer.",
      education: [],
      experience: [],
      projects: [],
      skills: [],
      certifications: [],
      achievements: [],
    };

    const result = builderToJsonResume(artifact);

    assert.strictEqual(result.basics.name, "Jane Doe");
    assert.strictEqual(result.basics.email, "jane@example.com");
    assert.strictEqual(result.basics.phone, "555-1234");
    assert.strictEqual(result.basics.location.address, "New York");
    assert.strictEqual(result.basics.url, "janedoe.com");
    assert.strictEqual(result.basics.summary, "A great developer.");
    assert.strictEqual(result.basics.profiles[0].url, "linkedin.com/in/jane");
  });

  it("should map work experience correctly", () => {
    const artifact: BuilderResumeArtifact = {
      resumeId: "123",
      version: 1,
      personalInformation: { fullName: "Jane Doe", email: "jane@example.com" },
      professionalSummary: "",
      education: [],
      experience: [
        {
          id: "exp1",
          company: "Tech Corp",
          jobTitle: "Software Engineer",
          startDate: "2020-01",
          endDate: "2022-01",
          currentlyWorking: false,
          description: "Wrote code.",
          achievements: ["Did a thing"],
        },
      ],
      projects: [],
      skills: [],
      certifications: [],
      achievements: [],
    };

    const result = builderToJsonResume(artifact);

    assert.strictEqual(result.work[0].name, "Tech Corp");
    assert.strictEqual(result.work[0].position, "Software Engineer");
    assert.strictEqual(result.work[0].startDate, "2020-01");
    assert.strictEqual(result.work[0].endDate, "2022-01");
    assert.strictEqual(result.work[0].summary, "Wrote code.");
    assert.strictEqual(result.work[0].highlights[0], "Did a thing");
  });

  it("should safely handle empty sections", () => {
    const artifact: BuilderResumeArtifact = {
      resumeId: "123",
      version: 1,
      personalInformation: { fullName: "Jane Doe", email: "jane@example.com" },
      professionalSummary: "",
      education: [],
      experience: [],
      projects: [],
      skills: [],
      certifications: [],
      achievements: [],
    };

    const result = builderToJsonResume(artifact);

    assert.strictEqual(result.basics.name, "Jane Doe");
    assert.strictEqual(result.work, undefined);
    assert.strictEqual(result.education, undefined);
    assert.strictEqual(result.projects, undefined);
  });
});
