import assert from "node:assert";
import { describe, it } from "node:test";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { BuilderResumeArtifact } from "../types";
import { ResumeTemplateRenderer } from "../components/templates/resume-template-renderer";

describe("Resume Template Renderer Component", () => {
  const mockArtifact: BuilderResumeArtifact = {
    resumeId: "test_res_123",
    version: 1,
    personalInformation: {
      fullName: "Jane Architect",
      email: "jane.architect@example.com",
      phone: "+1 555-0199",
      location: "San Francisco, CA",
      linkedin: "https://linkedin.com/in/janearchitect",
      github: "https://github.com/janearchitect",
      portfolio: "https://janearchitect.dev",
    },
    professionalSummary: "Senior cloud architect with 8+ years experience scaling enterprise applications.",
    education: [
      {
        id: "edu_1",
        institution: "MIT",
        degree: "B.S.",
        fieldOfStudy: "Computer Science",
        startDate: "2014",
        endDate: "2018",
        description: "Graduated with High Honors",
      },
    ],
    experience: [
      {
        id: "exp_1",
        jobTitle: "Lead Architect",
        company: "Acme Corp",
        location: "San Francisco, CA",
        startDate: "2020",
        endDate: "Present",
        currentlyWorking: true,
        description: "Spearheaded migration to microservices.",
        achievements: ["Reduced latency by 45%", "Managed 12 engineers"],
      },
    ],
    projects: [
      {
        id: "proj_1",
        name: "OpenSource Cloud Framework",
        description: "High-performance mesh router",
        technologies: ["Go", "Kubernetes", "gRPC"],
        url: "https://github.com/example/framework",
        startDate: "2021",
        endDate: "2022",
      },
    ],
    skills: [
      { id: "s1", name: "TypeScript", category: "Languages" },
      { id: "s2", name: "Go", category: "Languages" },
      { id: "s3", name: "AWS", category: "Cloud" },
    ],
    certifications: [
      { id: "c1", name: "AWS Solutions Architect Professional", issuingOrganization: "AWS", issueDate: "2022" },
    ],
    achievements: [
      { id: "a1", title: "Top Innovator Award", description: "Recognized for cloud architecture design", date: "2023" },
    ],
  };

  it("renders academic-cv-lite template fallback markup", () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ResumeTemplateRenderer, { artifact: mockArtifact, template: "academic-cv-lite" })
    );
    assert.ok(html.includes("Jane Architect"));
    assert.ok(html.includes("Lead Architect"));
    assert.ok(html.includes("MIT"));
    assert.ok(html.includes("TypeScript"));
  });

  it("renders developer-mono template fallback markup", () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ResumeTemplateRenderer, { artifact: mockArtifact, template: "developer-mono" })
    );
    assert.ok(html.includes("Jane Architect"));
    assert.ok(html.includes("Acme Corp"));
    assert.ok(html.includes("AWS Solutions Architect"));
  });

  it("safely handles empty sections without throwing", () => {
    const emptyArtifact: BuilderResumeArtifact = {
      resumeId: "empty_res",
      version: 1,
      personalInformation: { fullName: "Simple User", email: "user@example.com" },
      professionalSummary: "",
      education: [],
      experience: [],
      projects: [],
      skills: [],
      certifications: [],
      achievements: [],
    };

    const emptyHtml = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ResumeTemplateRenderer, { artifact: emptyArtifact, template: "academic-cv-lite" })
    );
    assert.ok(emptyHtml.includes("Simple User"));
    assert.strictEqual(emptyHtml.includes("Work Experience"), false);
    assert.strictEqual(emptyHtml.includes("Education"), false);
  });
});
