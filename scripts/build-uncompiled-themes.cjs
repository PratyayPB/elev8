const fs = require("fs");
const path = require("path");
const vite = require("vite");

async function buildTheme(themeName) {
  const root = process.cwd();
  const themeDir = path.join(root, "node_modules", "jsonresume-theme-" + themeName);

  if (!fs.existsSync(themeDir)) {
    console.log(`[build-themes] Skipping ${themeName} - not found in node_modules`);
    return;
  }

  const indexJsx = path.join(themeDir, "index.jsx");
  if (!fs.existsSync(indexJsx)) {
    return;
  }

  const outDir = path.join(themeDir, "dist");
  console.log(`[build-themes] Building ${themeName} to ${outDir}...`);

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
        entry: indexJsx,
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
  };
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  console.log(`[build-themes] Successfully compiled and linked ${themeName}`);
}

async function main() {
  const themes = ["brutalist", "art-school-modern", "art-deco"];
  for (const theme of themes) {
    try {
      await buildTheme(theme);
    } catch (err) {
      console.error(`[build-themes] Error building ${theme}:`, err);
    }
  }
}

main();
