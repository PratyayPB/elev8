import assert from "node:assert";
import {
  LLMSelectorService,
  DEFAULT_LLM_PREFERENCE,
  LLM_MODEL_MAP,
  LLMPreference,
} from "@/lib/llm";

export async function runSettingsTests() {
  console.log("Running Settings & Centralized LLM Selector Tests...\n");

  // 1. Default LLM Preference
  console.log("1. Testing default preference...");
  assert.strictEqual(DEFAULT_LLM_PREFERENCE, "BALANCED");
  console.log("✔ Default preference is BALANCED.");

  // 2. Model Map Consistency
  console.log("2. Testing configured model mappings...");
  assert.strictEqual(LLM_MODEL_MAP.FAST, "gemini-3.7-flash");
  assert.strictEqual(LLM_MODEL_MAP.BALANCED, "gemini-3.7-flash");
  assert.strictEqual(LLM_MODEL_MAP.THINK, "gemini-3.7-flash");
  console.log("✔ All tiers correctly map to gemini-3.7-flash.");

  // 3. Dynamic Model Resolution
  console.log("3. Testing model resolution logic...");
  assert.strictEqual(LLMSelectorService.resolveModel("FAST"), "gemini-3.7-flash");
  assert.strictEqual(LLMSelectorService.resolveModel("BALANCED"), "gemini-3.7-flash");
  assert.strictEqual(LLMSelectorService.resolveModel("THINK"), "gemini-3.7-flash");

  // Fallbacks for undefined / null / unknown
  assert.strictEqual(LLMSelectorService.resolveModel(undefined), "gemini-3.7-flash");
  assert.strictEqual(LLMSelectorService.resolveModel(null), "gemini-3.7-flash");
  assert.strictEqual(LLMSelectorService.resolveModel("INVALID_TIER" as any), "gemini-3.7-flash");
  assert.strictEqual(LLMSelectorService.resolveModel(""), "gemini-3.7-flash");
  console.log("✔ Dynamic model resolution and fallback handling passed.");

  // 4. Preference Validation
  console.log("4. Testing isValidPreference...");
  assert.strictEqual(LLMSelectorService.isValidPreference("FAST"), true);
  assert.strictEqual(LLMSelectorService.isValidPreference("BALANCED"), true);
  assert.strictEqual(LLMSelectorService.isValidPreference("THINK"), true);

  assert.strictEqual(LLMSelectorService.isValidPreference("fast"), false);
  assert.strictEqual(LLMSelectorService.isValidPreference("GPT_4"), false);
  assert.strictEqual(LLMSelectorService.isValidPreference(123), false);
  assert.strictEqual(LLMSelectorService.isValidPreference(null), false);
  assert.strictEqual(LLMSelectorService.isValidPreference(undefined), false);
  console.log("✔ Preference validation passed.");

  console.log("\n==============================================");
  console.log("All Settings & LLM Selector tests passed successfully!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runSettingsTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
