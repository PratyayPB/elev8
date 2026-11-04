const path = require("path");

// Ensure global React is defined for older JSONResume themes
const React = require("react");
if (typeof globalThis !== "undefined") {
  if (!globalThis.React) {
    globalThis.React = React;
  }
}

const THEMES = {
  "academic-cv-lite": "jsonresume-theme-academic-cv-lite",
  "developer-mono": "jsonresume-theme-developer-mono",
  "government-standard": "jsonresume-theme-government-standard",
  "architects-portfolio": "jsonresume-theme-architects-portfolio",
  "minimalist-grid": "jsonresume-theme-minimalist-grid",
  "nordic-minimal": "jsonresume-theme-nordic-minimal",
  "desert-modern": "jsonresume-theme-desert-modern",
  "elegant": "jsonresume-theme-elegant",
  "macchiato": "jsonresume-theme-macchiato",
  "sidebar": "jsonresume-theme-sidebar",
  "art-deco": "jsonresume-theme-art-deco",
  "art-school-modern": "jsonresume-theme-art-school-modern",
  "brutalist": "jsonresume-theme-brutalist",
  "consultant-polished": "@jsonresume/jsonresume-theme-consultant-polished",
  "creative-studio": "@jsonresume/jsonresume-theme-creative-studio",
};

process.on("message", async ({ id, template, jsonResume }) => {
  try {
    const pkg = THEMES[template] || THEMES["academic-cv-lite"];
    const mod = require(pkg);
    const renderFn = mod.render || mod.default?.render || mod.default;

    if (typeof renderFn !== "function") {
      throw new Error(`Theme package "${pkg}" does not export a valid render function`);
    }

    const html = await renderFn(jsonResume);
    process.send({ id, success: true, html });
  } catch (err) {
    process.send({
      id,
      success: false,
      error: err && err.message ? err.message : String(err),
      stack: err && err.stack ? err.stack : undefined,
    });
  }
});
