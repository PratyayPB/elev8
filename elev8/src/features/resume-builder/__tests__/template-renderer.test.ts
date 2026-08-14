import assert from "node:assert";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { BuilderResumeArtifact } from "../types";
import { ResumeTemplateRenderer } from "../components/templates/resume-template-renderer";

export async function runTemplateRendererTests() {
  console.log("Running template renderer unit tests...");

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

  // Test 1: Classic Template HTML Rendering
  const classicHtml = ReactDOMServer.renderToStaticMarkup(
    React.createElement(ResumeTemplateRenderer, { artifact: mockArtifact, template: "CLASSIC" })
  );
  assert.ok(classicHtml.includes("Jane Architect"));
  assert.ok(classicHtml.includes("Lead Architect"));
  assert.ok(classicHtml.includes("MIT"));
  assert.ok(classicHtml.includes("TypeScript"));

  // Test 2: Modern Template HTML Rendering
  const modernHtml = ReactDOMServer.renderToStaticMarkup(
    React.createElement(ResumeTemplateRenderer, { artifact: mockArtifact, template: "MODERN" })
  );
  assert.ok(modernHtml.includes("Jane Architect"));
  assert.ok(modernHtml.includes("Acme Corp"));
  assert.ok(modernHtml.includes("AWS Solutions Architect"));

  // Test 3: Minimal Template HTML Rendering
  const minimalHtml = ReactDOMServer.renderToStaticMarkup(
    React.createElement(ResumeTemplateRenderer, { artifact: mockArtifact, template: "MINIMAL" })
  );
  assert.ok(minimalHtml.includes("Jane Architect"));
  assert.ok(minimalHtml.includes("Top Innovator Award"));

  // Test 4: Empty sections handling (must not throw or render broken blocks)
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

  const emptyClassic = ReactDOMServer.renderToStaticMarkup(
    React.createElement(ResumeTemplateRenderer, { artifact: emptyArtifact, template: "CLASSIC" })
  );
  assert.ok(emptyClassic.includes("Simple User"));
  assert.strictEqual(emptyClassic.includes("Work Experience"), false);
  assert.strictEqual(emptyClassic.includes("Education"), false);

  console.log("All template renderer unit tests passed!");
}

if (require.main === module) {
  runTemplateRendererTests().catch((err) => {
    console.error("Test failure:", err);
    process.exit(1);
  });
}
