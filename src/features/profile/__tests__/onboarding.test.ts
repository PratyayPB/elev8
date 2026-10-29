import assert from "node:assert";
import {
  mandatoryProfileSchema,
  optionalProfileSchema,
  profileUpsertSchema,
} from "../schemas";
import { checkMandatoryCompletion, calculateProfileCompleteness } from "../services/profile-completeness.service";
import { ProfileData } from "../types";

export async function runOnboardingTests() {
  console.log("Running Phase 7.1 Onboarding Unit Tests...\n");

  // 1. Mandatory Schema Validation
  console.log("1. Testing Mandatory Schema Validation...");
  const validMandatory = {
    name: "Jane Doe",
    age: 25,
    country: "US",
    phoneNumber: "2025550123",
    phoneCountryCode: "+1",
  };
  
  const parsedMandatory = mandatoryProfileSchema.parse(validMandatory);
  assert.strictEqual(parsedMandatory.name, "Jane Doe");
  assert.strictEqual(parsedMandatory.age, 25);
  
  assert.throws(() => {
    mandatoryProfileSchema.parse({
      ...validMandatory,
      name: "",
    });
  }, /Name is required/);

  console.log("✔ Mandatory schema validation passed.");

  // 2. Profile Upsert Schema Validation
  console.log("2. Testing Profile Upsert Schema...");
  const upsertPayload = {
    ...validMandatory,
    currentRole: "Software Engineer",
  };
  
  const parsedUpsert = profileUpsertSchema.parse(upsertPayload);
  assert.strictEqual(parsedUpsert.name, "Jane Doe");
  assert.strictEqual(parsedUpsert.currentRole, "Software Engineer");
  // Check if it allowed partial optional fields
  assert.strictEqual(parsedUpsert.yearsOfExperience, undefined);

  console.log("✔ Profile upsert schema passed.");

  // 3. Mandatory Completion Logic
  console.log("3. Testing Mandatory Completion Logic...");
  const emptyProfile = null;
  const emptyResult = checkMandatoryCompletion(emptyProfile);
  assert.strictEqual(emptyResult.isMandatoryCompleted, false);
  assert.strictEqual(emptyResult.missingFields.length, 4);
  assert.ok(emptyResult.missingFields.includes("name"));
  assert.ok(emptyResult.missingFields.includes("age"));
  assert.ok(emptyResult.missingFields.includes("country"));
  assert.ok(emptyResult.missingFields.includes("phoneNumber"));

  const partialProfile = {
    name: "John",
    age: 20,
    country: "  ",
    phoneNumber: null,
  } as unknown as ProfileData;

  const partialResult = checkMandatoryCompletion(partialProfile);
  assert.strictEqual(partialResult.isMandatoryCompleted, false);
  assert.strictEqual(partialResult.missingFields.length, 2);
  assert.ok(partialResult.missingFields.includes("country"));
  assert.ok(partialResult.missingFields.includes("phoneNumber"));

  const completeMandatoryProfile = {
    name: "John",
    age: 20,
    country: "Canada",
    phoneNumber: "1234567",
  } as unknown as ProfileData;

  const completeResult = checkMandatoryCompletion(completeMandatoryProfile);
  assert.strictEqual(completeResult.isMandatoryCompleted, true);
  assert.strictEqual(completeResult.missingFields.length, 0);

  console.log("✔ Mandatory completion logic passed.");

  console.log("\n=========================================");
  console.log("All Onboarding unit tests passed!");
  console.log("=========================================\n");
}

if (require.main === module) {
  runOnboardingTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
