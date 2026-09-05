import { RESUME_TEMPLATE_REGISTRY } from "../templates/registry";
import { describe, it, expect } from "vitest";

describe("Resume Template Registry", () => {
  it("should have all 17 templates defined", () => {
    const expectedSlugs = [
      "academic-cv-lite",
      "consultant-polished",
      "developer-mono",
      "government-standard",
      "architects-portfolio",
      "minimalist-grid",
      "nordic-minimal",
      "desert-modern",
      "executive-slate",
      "elegant",
      "macchiato",
      "sidebar",
      "creative-studio",
      "even",
      "art-deco",
      "art-school-modern",
      "brutalist",
    ];

    for (const slug of expectedSlugs) {
      expect(RESUME_TEMPLATE_REGISTRY[slug]).toBeDefined();
      expect(typeof RESUME_TEMPLATE_REGISTRY[slug]).toBe("function");
    }
  });

  it("should not crash when a fallback template is rendered", async () => {
    const renderCb = RESUME_TEMPLATE_REGISTRY["consultant-polished"];
    const html = await renderCb({});
    expect(html).toContain("Preview not available");
  });
});
