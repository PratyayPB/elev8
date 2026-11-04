// @ts-nocheck
import React from "react";
import { BuilderResumeArtifact } from "../types";
import { builderToJsonResume } from "../adapters/builder-to-json-resume";

// Polyfill React and createContext for RSC/Webpack server bundles if missing
if (typeof React !== "undefined") {
  if (!React.createContext) {
    // Basic shim so theme evaluation in RSC does not throw
    React.createContext = function <T>(defaultValue: T) {
      const context = {
        $$typeof: Symbol.for("react.context"),
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null as any,
        Consumer: null as any,
      };
      context.Provider = {
        $$typeof: Symbol.for("react.provider"),
        _context: context,
      };
      context.Consumer = context;
      return context;
    };
  }
}

if (typeof globalThis !== "undefined") {
  if (!(globalThis as any).React) {
    (globalThis as any).React = React;
  }
  if ((globalThis as any).React && !(globalThis as any).React.createContext) {
    (globalThis as any).React.createContext = React.createContext;
  }
}

export type ThemeRenderer = (resume: any) => string | Promise<string>;

export const RESUME_TEMPLATE_REGISTRY: Record<string, ThemeRenderer> = {
  // Themes that work correctly with Next.js/Node
  // @ts-ignore
  "academic-cv-lite": async (resume) => {
    const mod: any = await import("jsonresume-theme-academic-cv-lite");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  "developer-mono": async (resume) => {
    const mod: any = await import("jsonresume-theme-developer-mono");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  "government-standard": async (resume) => {
    const mod: any = await import("jsonresume-theme-government-standard");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  "architects-portfolio": async (resume) => {
    const mod: any = await import("jsonresume-theme-architects-portfolio");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  "minimalist-grid": async (resume) => {
    const mod: any = await import("jsonresume-theme-minimalist-grid");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  "nordic-minimal": async (resume) => {
    const mod: any = await import("jsonresume-theme-nordic-minimal");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  "desert-modern": async (resume) => {
    const mod: any = await import("jsonresume-theme-desert-modern");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  elegant: async (resume) => {
    const mod: any = await import("jsonresume-theme-elegant");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  macchiato: async (resume) => {
    const mod: any = await import("jsonresume-theme-macchiato");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  sidebar: async (resume) => {
    const mod: any = await import("jsonresume-theme-sidebar");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },

  // @ts-ignore
  "art-deco": async (resume) => {
    const mod: any = await import("jsonresume-theme-art-deco");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  "art-school-modern": async (resume) => {
    const mod: any = await import("jsonresume-theme-art-school-modern");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  brutalist: async (resume) => {
    const mod: any = await import("jsonresume-theme-brutalist");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },

  // @ts-ignore
  "consultant-polished": async (resume) => {
    const mod: any = await import("@jsonresume/jsonresume-theme-consultant-polished");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
  // @ts-ignore
  "creative-studio": async (resume) => {
    const mod: any = await import("@jsonresume/jsonresume-theme-creative-studio");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  },
};

/**
 * Universal theme renderer that dispatches to the isolated Node worker when running in a Node.js server,
 * avoiding Next.js RSC Webpack bundle limitations where createContext is stripped.
 */
export async function renderResumeTheme(template: string, jsonResume: any): Promise<string> {
  const isServer = typeof window === "undefined";
  if (isServer) {
    try {
      const { renderThemeInNodeWorker } = await import("../workers/node-theme-renderer");
      return await renderThemeInNodeWorker({ template, jsonResume });
    } catch (workerErr: any) {
      console.warn(
        `[REGISTRY] Worker execution for "${template}" failed (${workerErr?.message}), trying in-process renderer...`
      );
    }
  }

  const renderer = RESUME_TEMPLATE_REGISTRY[template] || RESUME_TEMPLATE_REGISTRY["academic-cv-lite"];
  if (!renderer) {
    throw new Error(`Template not found: ${template}`);
  }
  return await renderer(jsonResume);
}

