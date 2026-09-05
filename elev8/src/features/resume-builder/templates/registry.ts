import { BuilderResumeArtifact } from "../types";
import { builderToJsonResume } from "../adapters/builder-to-json-resume";

export type ThemeRenderer = (resume: any) => string | Promise<string>;

export const RESUME_TEMPLATE_REGISTRY: Record<string, ThemeRenderer> = {
  // Themes that work correctly with Next.js/Node
  // @ts-ignore
  "academic-cv-lite": async (resume) => (await import("jsonresume-theme-academic-cv-lite")).render(resume),
  // @ts-ignore
  "developer-mono": async (resume) => (await import("jsonresume-theme-developer-mono")).render(resume),
  // @ts-ignore
  "government-standard": async (resume) => (await import("jsonresume-theme-government-standard")).render(resume),
  // @ts-ignore
  "architects-portfolio": async (resume) => (await import("jsonresume-theme-architects-portfolio")).render(resume),
  // @ts-ignore
  "minimalist-grid": async (resume) => (await import("jsonresume-theme-minimalist-grid")).render(resume),
  // @ts-ignore
  "nordic-minimal": async (resume) => (await import("jsonresume-theme-nordic-minimal")).render(resume),
  // @ts-ignore
  "desert-modern": async (resume) => (await import("jsonresume-theme-desert-modern")).render(resume),
  // @ts-ignore
  "executive-slate": async (resume) => (await import("jsonresume-theme-executive-slate")).render(resume),
  // @ts-ignore
  "elegant": async (resume) => (await import("jsonresume-theme-elegant")).render(resume),
  // @ts-ignore
  "macchiato": async (resume) => (await import("jsonresume-theme-macchiato")).render(resume),
  // @ts-ignore
  "sidebar": async (resume) => (await import("jsonresume-theme-sidebar")).render(resume),
  
  // @ts-ignore
  "even": async (resume) => (await import("jsonresume-theme-even")).render(resume),
  // @ts-ignore
  "art-deco": async (resume) => (await import("jsonresume-theme-art-deco")).render(resume),
  // @ts-ignore
  "art-school-modern": async (resume) => (await import("jsonresume-theme-art-school-modern")).render(resume),
  // @ts-ignore
  "brutalist": async (resume) => (await import("jsonresume-theme-brutalist")).render(resume),

  // Fallbacks for themes not on npm.
  "consultant-polished": (resume) => {
    return `<!DOCTYPE html><html><body><div style="padding:40px; font-family:sans-serif;"><h1>Preview not available</h1><p>Preview not available currently for this template; please fill in input details and download resume to view.</p></div></body></html>`;
  },
  "creative-studio": (resume) => {
    return `<!DOCTYPE html><html><body><div style="padding:40px; font-family:sans-serif;"><h1>Preview not available</h1><p>Preview not available currently for this template; please fill in input details and download resume to view.</p></div></body></html>`;
  }
};
