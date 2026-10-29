import assert from "node:assert";
import { describe, it } from "vitest";
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
      languages: [],
      volunteer: [],
      publications: [],
      interests: [],
      references: [],
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
      languages: [],
      volunteer: [],
      publications: [],
      interests: [],
      references: [],
    };

    const result = builderToJsonResume(artifact);

    assert.strictEqual(result.work[0].name, "Tech Corp");
    assert.strictEqual(result.work[0].position, "Software Engineer");
    assert.strictEqual(result.work[0].startDate, "2020-01");
    assert.strictEqual(result.work[0].endDate, "2022-01");
    assert.strictEqual(result.work[0].summary, "Wrote code.");
    assert.strictEqual(result.work[0].highlights[0], "Did a thing");
  });

  it("should map new fields and extended sections correctly", () => {
    const artifact: BuilderResumeArtifact = {
      resumeId: "123",
      version: 1,
      personalInformation: {
        fullName: "Jane Doe",
        email: "jane@example.com",
        label: "Lead Architect",
        image: "https://example.com/avatar.jpg",
        location: "New York, NY",
        city: "New York",
        region: "NY",
        countryCode: "US",
        twitter: "https://twitter.com/janedoe",
      },
      professionalSummary: "A great developer.",
      education: [
        {
          id: "edu1",
          institution: "MIT",
          degree: "B.S.",
          score: "3.9 GPA",
          courses: ["Algorithms", "Distributed Systems"],
        },
      ],
      experience: [],
      projects: [],
      skills: [],
      certifications: [],
      achievements: [
        {
          id: "ach1",
          title: "Hackathon Champion",
          awarder: "Tech Council",
        },
      ],
      languages: [
        {
          id: "lang1",
          language: "English",
          fluency: "Native",
        },
      ],
      volunteer: [
        {
          id: "vol1",
          organization: "Code for Good",
          position: "Mentor",
        },
      ],
      publications: [
        {
          id: "pub1",
          name: "Cloud Scaling",
          publisher: "Tech Press",
        },
      ],
      interests: [
        {
          id: "int1",
          name: "Robotics",
          keywords: ["ROS", "Sensors"],
        },
      ],
      references: [
        {
          id: "ref1",
          name: "John Boss",
          reference: "Available upon request",
        },
      ],
    };

    const result = builderToJsonResume(artifact);

    assert.strictEqual(result.basics.label, "Lead Architect");
    assert.strictEqual(result.basics.image, "https://example.com/avatar.jpg");
    assert.strictEqual(result.basics.location.city, "New York");
    assert.strictEqual(result.basics.location.region, "NY");
    assert.strictEqual(result.basics.location.countryCode, "US");
    assert.strictEqual(result.basics.profiles[0].network, "Twitter");
    assert.strictEqual(result.education[0].score, "3.9 GPA");
    assert.deepStrictEqual(result.education[0].courses, ["Algorithms", "Distributed Systems"]);
    assert.strictEqual(result.awards[0].awarder, "Tech Council");
    assert.strictEqual(result.languages[0].language, "English");
    assert.strictEqual(result.languages[0].fluency, "Native");
    assert.strictEqual(result.volunteer[0].organization, "Code for Good");
    assert.strictEqual(result.publications[0].publisher, "Tech Press");
    assert.strictEqual(result.interests[0].name, "Robotics");
    assert.strictEqual(result.references[0].name, "John Boss");
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
      languages: [],
      volunteer: [],
      publications: [],
      interests: [],
      references: [],
    };

    const result = builderToJsonResume(artifact);

    assert.strictEqual(result.basics.name, "Jane Doe");
    assert.deepStrictEqual(result.work, []);
    assert.deepStrictEqual(result.education, []);
    assert.deepStrictEqual(result.projects, []);
    assert.deepStrictEqual(result.languages, []);
    assert.deepStrictEqual(result.volunteer, []);
    assert.deepStrictEqual(result.publications, []);
    assert.deepStrictEqual(result.interests, []);
    assert.deepStrictEqual(result.references, []);
  });
});
