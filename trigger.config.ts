import { defineConfig } from "@trigger.dev/sdk/v3";
import { puppeteer } from "@trigger.dev/build/extensions/puppeteer";

export default defineConfig({
  project: "proj_wcsssvghiwzgvtnnyfti",
  dirs: ["./src/trigger"],
  maxDuration: 300,
  build: {
    extensions: [puppeteer()],
  },
});
