const path = require("path");

// Ensure global React is defined with full client/server hooks for JSONResume themes
const React = require("react");

function shimReact(target) {
  if (!target) return;

  const mockDispatcher = {
    useMemo: (factory) => factory(),
    useCallback: (callback) => callback,
    useContext: (context) =>
      context
        ? context._currentValue2 !== undefined
          ? context._currentValue2
          : context._currentValue
        : undefined,
    use: (usable) => {
      if (usable && typeof usable === "object") {
        if (usable._currentValue2 !== undefined) return usable._currentValue2;
        if (usable._currentValue !== undefined) return usable._currentValue;
      }
      return usable;
    },
    useId: () => "r:" + Math.random().toString(36).substring(2, 9),
    useRef: (initialValue) => ({ current: initialValue }),
    useState: (initial) => [
      typeof initial === "function" ? initial() : initial,
      () => {},
    ],
    useReducer: (reducer, initial) => [initial, () => {}],
    useEffect: () => {},
    useLayoutEffect: () => {},
    useInsertionEffect: () => {},
    useDebugValue: () => {},
  };

  if (target.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) {
    target.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = mockDispatcher;
  }
  if (target.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) {
    target.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = mockDispatcher;
  }
  if (target.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentDispatcher) {
    target.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current = mockDispatcher;
  }

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

  target.useContext = function (context) {
    if (!context) return undefined;
    if (context._currentValue2 !== undefined) {
      return context._currentValue2;
    }
    if (context._currentValue !== undefined) {
      return context._currentValue;
    }
    return undefined;
  };

  target.use = function (usable) {
    if (usable && typeof usable === "object") {
      if (usable._currentValue2 !== undefined) return usable._currentValue2;
      if (usable._currentValue !== undefined) return usable._currentValue;
    }
    return usable;
  };

  target.useMemo = function (fn) {
    return fn();
  };

  target.useCallback = function (fn) {
    return fn;
  };

  target.useRef = function (val) {
    return { current: val };
  };

  target.useState = function (val) {
    return [typeof val === "function" ? val() : val, () => {}];
  };

  target.useId = function () {
    return "r:" + Math.random().toString(36).substring(2, 9);
  };

  target.useEffect = function () {};
  target.useLayoutEffect = function () {};
  target.useInsertionEffect = function () {};
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
