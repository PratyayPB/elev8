import assert from "node:assert";
import { profileCreateSchema } from "../schemas";

export async function runPhoneValidationTests() {
  console.log("Running Phone Validation Tests...\n");

  const baseData = {
    name: "Jane Doe",
    age: 25,
    country: "US", // Use 2-letter ISO code
    currentStatus: "EMPLOYED",
    currentRole: "Engineer",
    yearsOfExperience: 3,
    primaryGoal: "LAND_A_JOB",
    targetRole: "Senior Engineer",
  };

  console.log("1. Testing Valid Phone Numbers...");
  
  const valid1 = profileCreateSchema.parse({
    ...baseData,
    phoneCountryCode: "+91",
    phoneNumber: "9876543210",
  });
  assert.strictEqual(valid1.phoneCountryCode, "+91");
  assert.strictEqual(valid1.phoneNumber, "9876543210");

  const valid2 = profileCreateSchema.parse({
    ...baseData,
    phoneCountryCode: "+1",
    phoneNumber: "4155552671",
  });
  assert.strictEqual(valid2.phoneCountryCode, "+1");
  assert.strictEqual(valid2.phoneNumber, "4155552671");

  const valid3 = profileCreateSchema.parse({
    ...baseData,
    phoneCountryCode: "+44",
    phoneNumber: "7911123456",
  });
  assert.strictEqual(valid3.phoneCountryCode, "+44");
  assert.strictEqual(valid3.phoneNumber, "7911123456");

  console.log("✔ Valid phone numbers passed.");

  console.log("2. Testing Normalization...");
  
  const norm1 = profileCreateSchema.parse({
    ...baseData,
    phoneCountryCode: "+91",
    phoneNumber: " 98765 43210 ",
  });
  assert.strictEqual(norm1.phoneCountryCode, "+91");
  assert.strictEqual(norm1.phoneNumber, "9876543210");

  console.log("✔ Normalization passed.");

  console.log("3. Testing Invalid Phone Numbers...");
  
  const assertInvalid = (countryCode: string | null | undefined, phone: string | null | undefined, expectedPath: string) => {
    let threw = false;
    try {
      profileCreateSchema.parse({
        ...baseData,
        phoneCountryCode: countryCode,
        phoneNumber: phone,
      });
    } catch (err: any) {
      threw = true;
      assert.ok(err.issues.some((i: any) => i.path.includes(expectedPath)));
    }
    assert.ok(threw, `Should have thrown for invalid phone: ${countryCode} ${phone}`);
  };

  // Missing one field
  assertInvalid("+91", null, "phoneNumber");
  assertInvalid(null, "9876543210", "phoneCountryCode");
  assertInvalid("+91", undefined, "phoneNumber");

  // Invalid numbers
  assertInvalid("+91", "invalidphone", "phoneNumber");
  assertInvalid("+1", "123", "phoneNumber");
  assertInvalid("+91", "12345678901234567890", "phoneNumber");
  assertInvalid("+999", "9876543210", "phoneNumber");

  console.log("✔ Invalid phone numbers correctly rejected.");
  
  console.log("4. Testing Optional Input...");
  
  const optional1 = profileCreateSchema.parse({
    ...baseData,
    phoneCountryCode: null,
    phoneNumber: null,
  });
  assert.strictEqual(optional1.phoneCountryCode, null);
  assert.strictEqual(optional1.phoneNumber, null);
  
  const optional2 = profileCreateSchema.parse({
    ...baseData,
  });
  assert.strictEqual(optional2.phoneCountryCode, undefined);
  assert.strictEqual(optional2.phoneNumber, undefined);

  console.log("✔ Optional input passed.");

  console.log("\n=========================================");
  console.log("All Phone Validation unit tests passed!");
  console.log("=========================================\n");
}

if (require.main === module) {
  runPhoneValidationTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
