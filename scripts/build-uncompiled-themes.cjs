const fs = require("fs");
const path = require("path");
const vite = require("vite");

async function buildTheme(themeName) {
  const root = process.cwd();
  const isScoped = themeName.startsWith("@");
  const themeDir = isScoped
    ? path.join(root, "node_modules", themeName)
    : path.join(root, "node_modules", "jsonresume-theme-" + themeName);

  if (!fs.existsSync(themeDir)) {
    console.log(`[build-themes] Skipping ${themeName} - not found in node_modules`);
    return;
  }

  let entry = path.join(themeDir, "index.jsx");
  if (!fs.existsSync(entry)) {
    entry = path.join(themeDir, "src", "index.jsx");
  }

  if (!fs.existsSync(entry)) {
    console.log(`[build-themes] Skipping ${themeName} - no index.jsx or src/index.jsx found`);
    return;
  }

  const outDir = path.join(themeDir, "dist");
  console.log(`[build-themes] Building ${themeName} from ${path.relative(root, entry)} to ${path.relative(root, outDir)}...`);

  await vite.build({
    configFile: false,
    logLevel: "warn",
    build: {
      ssr: true,
      target: "node18",
      outDir,
      emptyOutDir: true,
      minify: false,
      lib: {
        entry,
        formats: ["es"],
        fileName: "index",
      },
      rollupOptions: {
        external: ["react", "react-dom", "react-dom/server", "react/jsx-runtime"],
        output: {
          exports: "named",
          entryFileNames: "index.js",
        },
      },
    },
    ssr: {
      noExternal: true,
    },
  });

  // Update package.json to point directly to dist/index.js
  const pkgPath = path.join(themeDir, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkg.main = "./dist/index.js";
  pkg.exports = {
    ".": {
      import: "./dist/index.js",
      default: "./dist/index.js",
    },
    "./dist": {
      import: "./dist/index.js",
      default: "./dist/index.js",
    },
  };
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  console.log(`[build-themes] Successfully compiled and linked ${themeName}`);
}

async function main() {
  const themes = [
    "brutalist",
    "art-school-modern",
    "art-deco",
    "academic-cv-lite",
    "developer-mono",
    "government-standard",
    "architects-portfolio",
    "minimalist-grid",
    "nordic-minimal",
    "desert-modern",
    "sidebar",
    "executive-slate",
    "@jsonresume/jsonresume-theme-consultant-polished",
    "@jsonresume/jsonresume-theme-creative-studio",
  ];

  for (const theme of themes) {
    try {
      await buildTheme(theme);
    } catch (err) {
      console.error(`[build-themes] Error building ${theme}:`, err);
    }
  }
}

main();
