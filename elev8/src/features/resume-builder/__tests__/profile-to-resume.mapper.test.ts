import assert from "node:assert";
import { profileToResumeArtifact } from "../services/profile-to-resume.mapper";
import {
  Profile,
  ProfileSkill,
  CareerStatus,
  PrimaryGoal,
  SkillProficiency,
  CareerExperienceLevel,
  TargetCompanyType,
} from "@prisma/client";

export async function runProfileMapperTests() {
  console.log("Running profileToResumeArtifact mapper tests...");

  const resumeId = "test_resume_id";

  // Test 1: Mapper handles null profile
  const emptyArtifact = profileToResumeArtifact(resumeId, null);
  assert.strictEqual(emptyArtifact.resumeId, resumeId);
  assert.strictEqual(emptyArtifact.personalInformation.fullName, "");
  assert.strictEqual(emptyArtifact.personalInformation.email, "");
  assert.strictEqual(emptyArtifact.personalInformation.location, "");
  assert.deepStrictEqual(emptyArtifact.skills, []);
  assert.deepStrictEqual(emptyArtifact.education, []);

  // Test 2: Full profile mapping
  const mockSkills: ProfileSkill[] = [
    {
      id: "sk_1",
      profileId: "prof_123",
      name: "TypeScript",
      normalizedName: "typescript",
      proficiency: "INTERMEDIATE" as SkillProficiency,
    },
    {
      id: "sk_2",
      profileId: "prof_123",
      name: "Next.js",
      normalizedName: "next.js",
      proficiency: "ADVANCED" as SkillProficiency,
    },
  ];

  const mockProfile: Profile & { skills: ProfileSkill[] } = {
    id: "prof_123",
    userId: "user_123",
    name: "John Doe",
    age: 24,
    country: "United States",
    phoneCountryCode: null,
    phoneNumber: null,
    currentStatus: "STUDENT" as CareerStatus,
    currentRole: "Intern",
    yearsOfExperience: 1,
    highestQualification: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    primaryGoal: "LAND_A_JOB",
    targetRole: "Full Stack Engineer",
    targetCompanyType: "STARTUP",
    weeklyLearningHours: 15,
    isMandatoryCompleted: false,
    isCompleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    skills: mockSkills,
  };

  const mappedArtifact = profileToResumeArtifact(
    resumeId,
    mockProfile,
    "john.doe@example.com"
  );

  // Assert Personal Info
  assert.strictEqual(mappedArtifact.resumeId, resumeId);
  assert.strictEqual(mappedArtifact.personalInformation.fullName, "John Doe");
  assert.strictEqual(mappedArtifact.personalInformation.email, "john.doe@example.com");
  assert.strictEqual(mappedArtifact.personalInformation.location, "United States");

  // Assert Education
  assert.strictEqual(mappedArtifact.education.length, 1);
  assert.strictEqual(mappedArtifact.education[0].degree, "Bachelor of Science");
  assert.strictEqual(mappedArtifact.education[0].fieldOfStudy, "Computer Science");

  // Assert Skills
  assert.strictEqual(mappedArtifact.skills.length, 2);
  const nextJsSkill = mappedArtifact.skills.find((s) => s.name === "Next.js");
  assert.ok(nextJsSkill);
  assert.strictEqual(nextJsSkill.category, "Technical Skills");

  // Assert independent sections are empty arrays
  assert.deepStrictEqual(mappedArtifact.experience, []);
  assert.deepStrictEqual(mappedArtifact.projects, []);
  assert.deepStrictEqual(mappedArtifact.certifications, []);
  assert.deepStrictEqual(mappedArtifact.achievements, []);

  console.log("All profileToResumeArtifact mapper tests passed!");
}

if (require.main === module) {
  runProfileMapperTests().catch((err) => {
    console.error("Test failure:", err);
    process.exit(1);
  });
}
