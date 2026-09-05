import assert from "node:assert";
import {
  profileToResumeArtifact,
  mergeProfileIntoResumeArtifact,
} from "../services/profile-to-resume.mapper";
import {
  Profile,
  ProfileSkill,
  CareerStatus,
  SkillProficiency,
} from "@prisma/client";

export async function runProfileMapperTests() {
  console.log("Running profileToResumeArtifact and mergeProfileIntoResumeArtifact mapper tests...");

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

  // Test 3: mergeProfileIntoResumeArtifact preserves non-profile sections
  const existingArtifact = {
    ...emptyArtifact,
    personalInformation: {
      ...emptyArtifact.personalInformation,
      phone: "+1 234 567 8900",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    professionalSummary: "Existing professional summary that must not be lost.",
    experience: [
      {
        id: "exp_1",
        company: "Tech Corp",
        jobTitle: "Software Engineer",
        startDate: "2023-01",
        currentlyWorking: true,
        achievements: ["Built scalable services"],
      },
    ],
    projects: [
      {
        id: "proj_1",
        name: "Elev8 Portfolio",
        description: "Portfolio builder app",
        highlights: [],
      },
    ],
    certifications: [
      {
        id: "cert_1",
        name: "AWS Certified Developer",
        issuer: "Amazon",
      },
    ],
    achievements: [
      {
        id: "ach_1",
        title: "Hackathon Winner",
      },
    ],
  };

  const mergedArtifact = mergeProfileIntoResumeArtifact(
    existingArtifact,
    mockProfile,
    "john.doe@example.com"
  );

  // Profile data was imported
  assert.strictEqual(mergedArtifact.personalInformation.fullName, "John Doe");
  assert.strictEqual(mergedArtifact.personalInformation.email, "john.doe@example.com");
  assert.strictEqual(mergedArtifact.personalInformation.location, "United States");
  // Existing personal info preserved
  assert.strictEqual(mergedArtifact.personalInformation.phone, "+1 234 567 8900");
  assert.strictEqual(mergedArtifact.personalInformation.linkedin, "https://linkedin.com/in/johndoe");

  // Education and Skills imported
  assert.strictEqual(mergedArtifact.education.length, 1);
  assert.strictEqual(mergedArtifact.education[0].degree, "Bachelor of Science");
  assert.strictEqual(mergedArtifact.skills.length, 2);

  // Other sections preserved completely
  assert.strictEqual(
    mergedArtifact.professionalSummary,
    "Existing professional summary that must not be lost."
  );
  assert.strictEqual(mergedArtifact.experience.length, 1);
  assert.strictEqual(mergedArtifact.experience[0].company, "Tech Corp");
  assert.strictEqual(mergedArtifact.projects.length, 1);
  assert.strictEqual(mergedArtifact.projects[0].name, "Elev8 Portfolio");
  assert.strictEqual(mergedArtifact.certifications.length, 1);
  assert.strictEqual(mergedArtifact.achievements.length, 1);

  console.log("All profileToResumeArtifact and mergeProfileIntoResumeArtifact mapper tests passed!");
}

runProfileMapperTests().catch((err) => {
  console.error("Test failure:", err);
  process.exit(1);
});
