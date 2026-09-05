const registry = require('./src/features/resume-builder/templates/registry');

async function run() {
  try {
    const render = await registry.RESUME_TEMPLATE_REGISTRY['macchiato']({});
    console.log("Macchiato rendered successfully!");
  } catch (err) {
    console.error("Macchiato failed:", err);
  }
}

run();
