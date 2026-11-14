// @ts-nocheck
import React from "react";
import { BuilderResumeArtifact } from "../types";
import { builderToJsonResume } from "../adapters/builder-to-json-resume";

// Polyfill React hooks and dispatcher for Next.js App Router / RSC Webpack server bundles.
// In Next.js Server Components and route handlers, the server React build (react.react-server)
// omits client hooks (useContext, createContext, useRef, useState, useEffect, etc.) and leaves
// internal hook dispatchers (ReactSharedInternals.H) as null.
// Themes built with styled-components or client hooks crash with:
// - "j(...).useContext is not a function"
// - "Cannot read properties of null (reading 'useMemo')"
// By mounting a comprehensive mock dispatcher on all internal dispatcher references AND
// overriding hook methods directly on the React module, styled-components executes
// seamlessly during renderToStaticMarkup without throwing.
export function shimReactHooks(targetReact?: any) {
  const target = targetReact || React;
  if (!target) return;

  const mockDispatcher: any = {
    useMemo: (factory: any) => factory(),
    useCallback: (callback: any) => callback,
    useContext: (context: any) =>
      context
        ? context._currentValue2 !== undefined
          ? context._currentValue2
          : context._currentValue
        : undefined,
    use: (usable: any) => {
      if (usable && typeof usable === "object") {
        if (usable._currentValue2 !== undefined) return usable._currentValue2;
        if (usable._currentValue !== undefined) return usable._currentValue;
      }
      return usable;
    },
    useId: () => "r:" + Math.random().toString(36).substring(2, 9),
    useRef: (initialValue: any) => ({ current: initialValue }),
    useState: (initial: any) => [
      typeof initial === "function" ? initial() : initial,
      () => {},
    ],
    useReducer: (reducer: any, initial: any) => [initial, () => {}],
    useEffect: () => {},
    useLayoutEffect: () => {},
    useInsertionEffect: () => {},
    useDebugValue: () => {},
    useTransition: () => [false, (cb: any) => cb()],
    useDeferredValue: (v: any) => v,
  };

  // 1. Mount mock dispatcher on React 19 server & client internals
  if (target.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) {
    target.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = mockDispatcher;
  }
  if (target.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) {
    target.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = mockDispatcher;
  }
  if (target.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentDispatcher) {
    target.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current = mockDispatcher;
  }

  // 2. Direct hook overrides on the React module object
  if (!target.createContext) {
    target.createContext = function <T>(defaultValue: T) {
      const context: any = {
        $$typeof: Symbol.for("react.context"),
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Consumer: {
          $$typeof: Symbol.for("react.consumer"),
        },
      };
      context.Provider = context;
      context.Consumer._context = context;
      return context;
    };
  }

  target.useContext = function (context: any) {
    if (!context) return undefined;
    if (context._currentValue2 !== undefined) {
      return context._currentValue2;
    }
    if (context._currentValue !== undefined) {
      return context._currentValue;
    }
    return undefined;
  };

  target.use = function (usable: any) {
    if (usable && typeof usable === "object") {
      if (usable._currentValue2 !== undefined) return usable._currentValue2;
      if (usable._currentValue !== undefined) return usable._currentValue;
    }
    return usable;
  };

  target.useMemo = function <T>(factory: () => T): T {
    return factory();
  };

  target.useCallback = function <T extends Function>(callback: T): T {
    return callback;
  };

  target.useRef = function <T>(initialValue: T): { current: T } {
    return { current: initialValue };
  };

  target.useState = function <T>(initial: T | (() => T)): [T, (val: any) => void] {
    const val = typeof initial === "function" ? (initial as Function)() : initial;
    return [val, () => {}];
  };

  target.useId = function (): string {
    return "r:" + Math.random().toString(36).substring(2, 9);
  };

  target.useEffect = function () {};
  target.useLayoutEffect = function () {};
  target.useInsertionEffect = function () {};

  // 3. Mirror everything onto globalThis for cross-module consistency
  if (typeof globalThis !== "undefined") {
    (globalThis as any).React = target;
    if ((globalThis as any).__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) {
      (globalThis as any).__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = mockDispatcher;
    }
    if ((globalThis as any).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) {
      (globalThis as any).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = mockDispatcher;
    }
  }

  // 4. Also mirror onto standard Node require cache if accessible
  try {
    const nodeReact = require("react");
    if (nodeReact && nodeReact !== target) {
      if (nodeReact.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) {
        nodeReact.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = mockDispatcher;
      }
      if (nodeReact.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) {
        nodeReact.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = mockDispatcher;
      }
      nodeReact.useMemo = target.useMemo;
      nodeReact.useCallback = target.useCallback;
      nodeReact.useContext = target.useContext;
      nodeReact.use = target.use;
      nodeReact.useRef = target.useRef;
      nodeReact.useState = target.useState;
      nodeReact.useId = target.useId;
      nodeReact.createContext = target.createContext;
    }
  } catch {}
}

shimReactHooks(React);

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
 * Universal theme renderer that uses direct in-process rendering with comprehensive
 * RSC React hook shims, with isolated Node worker fallback.
 */
export async function renderResumeTheme(template: string, jsonResume: any): Promise<string> {
  // Always ensure RSC React hooks (useContext, createContext, useRef, etc.) are shimmed before render
  shimReactHooks(React);

  const renderer = RESUME_TEMPLATE_REGISTRY[template] || RESUME_TEMPLATE_REGISTRY["academic-cv-lite"];
  if (!renderer) {
    throw new Error(`Template not found: ${template}`);
  }

  // 1. Direct in-process rendering (fastest, robust with hook shims)
  try {
    return await renderer(jsonResume);
  } catch (inProcessErr: any) {
    console.warn(
      `[REGISTRY] In-process rendering for "${template}" failed (${inProcessErr?.message}), trying worker fallback...`
    );
  }

  // 2. Secondary path: isolated worker fallback if in-process encounters runtime restrictions
  const isServer = typeof window === "undefined";
  if (isServer) {
    try {
      const { renderThemeInNodeWorker } = await import("../workers/node-theme-renderer");
      return await renderThemeInNodeWorker({ template, jsonResume });
    } catch (workerErr: any) {
      console.warn(
        `[REGISTRY] Worker execution for "${template}" also failed (${workerErr?.message}), falling back to default theme...`
      );
    }
  }

  // 3. Fallback to default theme with non-React Handlebars safety net
  try {
    const fallback = RESUME_TEMPLATE_REGISTRY["academic-cv-lite"];
    return await fallback(jsonResume);
  } catch (fallbackErr: any) {
    console.warn(
      `[REGISTRY] Fallback theme "academic-cv-lite" failed (${fallbackErr?.message}), trying Handlebars fallback...`
    );
    const pureHtmlFallback =
      RESUME_TEMPLATE_REGISTRY["macchiato"] || RESUME_TEMPLATE_REGISTRY["elegant"];
    if (pureHtmlFallback) {
      return await pureHtmlFallback(jsonResume);
    }
    throw fallbackErr;
  }
}

