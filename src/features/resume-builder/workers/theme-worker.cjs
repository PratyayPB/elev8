const path = require("path");

// Ensure global React is defined with full client/server hooks for JSONResume themes
const React = require("react");

function shimReact(target) {
  if (!target) return;
  if (!target.createContext) {
    target.createContext = function (defaultValue) {
      const context = {
        $$typeof: Symbol.for("react.context"),
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      };
      context.Provider = {
        $$typeof: Symbol.for("react.provider"),
        _context: context,
      };
      context.Consumer = context;
      return context;
    };
  }
  if (!target.useContext) {
    target.useContext = function (context) {
      if (!context) return undefined;
      if (typeof target.use === "function") {
        try {
          return target.use(context);
        } catch {
          return context._currentValue;
        }
      }
      return context._currentValue;
    };
  }
  if (!target.useRef) {
    target.useRef = function (val) {
      return { current: val };
    };
  }
  if (!target.useState) {
    target.useState = function (val) {
      return [typeof val === "function" ? val() : val, () => {}];
    };
  }
  if (!target.useMemo) {
    target.useMemo = function (fn) {
      return fn();
    };
  }
  if (!target.useEffect) target.useEffect = function () {};
  if (!target.useLayoutEffect) target.useLayoutEffect = function () {};
  if (!target.useInsertionEffect) target.useInsertionEffect = function () {};
}

shimReact(React);

if (typeof globalThis !== "undefined") {
  if (!globalThis.React) {
    globalThis.React = React;
  } else {
    shimReact(globalThis.React);
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
    let mod;
    try {
      mod = await import(pkg);
    } catch {
      mod = require(pkg);
    }
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
