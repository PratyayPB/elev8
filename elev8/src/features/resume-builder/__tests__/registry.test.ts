import assert from "node:assert";
import { describe, it } from "node:test";
import { RESUME_TEMPLATE_REGISTRY } from "../templates/registry";

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
      assert.ok(RESUME_TEMPLATE_REGISTRY[slug]);
      assert.strictEqual(typeof RESUME_TEMPLATE_REGISTRY[slug], "function");
    }
  });

  it("should not crash when a fallback template is rendered", async () => {
    const renderCb = RESUME_TEMPLATE_REGISTRY["consultant-polished"];
    const html = await renderCb({});
    assert.ok(html.includes("Preview not available"));
  });
});
