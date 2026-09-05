import { builderToJsonResume } from "../adapters/builder-to-json-resume";
import { BuilderResumeArtifact } from "../types";
import { describe, it, expect } from "vitest";

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

    expect(result.basics.name).toBe("Jane Doe");
    expect(result.basics.email).toBe("jane@example.com");
    expect(result.basics.phone).toBe("555-1234");
    expect(result.basics.location.address).toBe("New York");
    expect(result.basics.url).toBe("janedoe.com");
    expect(result.basics.summary).toBe("A great developer.");
    expect(result.basics.profiles[0].url).toBe("linkedin.com/in/jane");
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

    expect(result.work[0].name).toBe("Tech Corp");
    expect(result.work[0].position).toBe("Software Engineer");
    expect(result.work[0].startDate).toBe("2020-01");
    expect(result.work[0].endDate).toBe("2022-01");
    expect(result.work[0].summary).toBe("Wrote code.");
    expect(result.work[0].highlights[0]).toBe("Did a thing");
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

    expect(result.basics.name).toBe("Jane Doe");
    expect(result.work).toBeUndefined();
    expect(result.education).toBeUndefined();
    expect(result.projects).toBeUndefined();
  });
});
