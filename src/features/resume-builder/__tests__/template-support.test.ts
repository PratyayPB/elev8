import assert from "node:assert";
import { describe, it } from "vitest";
import {
  getTemplateSupport,
  TEMPLATE_SUPPORT_MANIFEST,
} from "../constants/template-support";

describe("Template Support Manifest", () => {
  it("should return valid template support for all 15 active templates", () => {
    const slugs = [
      "academic-cv-lite",
      "developer-mono",
      "government-standard",
      "architects-portfolio",
      "minimalist-grid",
      "nordic-minimal",
      "desert-modern",
      "elegant",
      "macchiato",
      "sidebar",
      "art-deco",
      "art-school-modern",
      "brutalist",
      "consultant-polished",
      "creative-studio",
    ];

    for (const slug of slugs) {
      const support = getTemplateSupport(slug);
      assert.ok(support, `Support missing for ${slug}`);
      assert.ok(Array.isArray(support.sections), `Sections array missing for ${slug}`);
      assert.ok(Array.isArray(support.personalFields), `personalFields missing for ${slug}`);
      assert.ok(Array.isArray(support.educationFields), `educationFields missing for ${slug}`);
      assert.ok(Array.isArray(support.achievementFields), `achievementFields missing for ${slug}`);

      // Basic invariant checks
      assert.ok(support.sections.includes("personal-info"));
      assert.ok(support.sections.includes("experience"));
      assert.ok(support.sections.includes("education"));
      assert.ok(support.personalFields.includes("label"));
      assert.ok(support.achievementFields.includes("awarder"));
    }
  });

  it("should correctly identify image support only on visual templates", () => {
    const sidebarSupport = getTemplateSupport("sidebar");
    assert.ok(sidebarSupport.personalFields.includes("image"));

    const artSchoolSupport = getTemplateSupport("art-school-modern");
    assert.ok(artSchoolSupport.personalFields.includes("image"));

    const monoSupport = getTemplateSupport("developer-mono");
    assert.strictEqual(monoSupport.personalFields.includes("image"), false);
  });

  it("should fallback gracefully for unknown template", () => {
    const fallbackSupport = getTemplateSupport("unknown-template-xyz");
    assert.ok(fallbackSupport);
    assert.strictEqual(fallbackSupport, TEMPLATE_SUPPORT_MANIFEST["academic-cv-lite"]);
  });
});
