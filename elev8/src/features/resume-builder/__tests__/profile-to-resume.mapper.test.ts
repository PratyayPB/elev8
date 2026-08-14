import assert from "node:assert";
import { profileToResumeArtifact } from "../services/profile-to-resume.mapper";
import { UserProfile, CurrentStatus, OnboardingStatus } from "@prisma/client";

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
  const mockProfile: UserProfile = {
    id: "prof_123",
    userId: "user_123",
    fullName: "John Doe",
    profilePicture: "https://example.com/pic.jpg",
    email: "john.doe@example.com",
    country: "United States",
    timezone: "EST",
    currentStatus: "STUDENT" as CurrentStatus,
    degree: "Bachelor of Science",
    major: "Computer Science",
    institution: "State University",
    graduationYear: 2026,
    currentRole: "Intern",
    yearsOfExperience: 1,
    industry: "Tech",
    employmentStatus: "Part-time",
    careerInterests: ["Web Development"],
    skills: {
      languages: ["TypeScript", "Python"],
      frameworks: ["Next.js", "Express"],
      customCategory: ["Git", "Docker"],
    },
    careerGoals: ["Software Engineer"],
    learningStyle: "Hands-on",
    difficulty: "Medium",
    weeklyHours: 15,
    onboardingStatus: "COMPLETED" as OnboardingStatus,
    onboardingStep: 3,
    profileCompletion: 100,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mappedArtifact = profileToResumeArtifact(resumeId, mockProfile);

  // Assert Personal Info
  assert.strictEqual(mappedArtifact.resumeId, resumeId);
  assert.strictEqual(mappedArtifact.personalInformation.fullName, "John Doe");
  assert.strictEqual(mappedArtifact.personalInformation.email, "john.doe@example.com");
  assert.strictEqual(mappedArtifact.personalInformation.location, "United States");

  // Assert Education
  assert.strictEqual(mappedArtifact.education.length, 1);
  assert.strictEqual(mappedArtifact.education[0].institution, "State University");
  assert.strictEqual(mappedArtifact.education[0].degree, "Bachelor of Science");
  assert.strictEqual(mappedArtifact.education[0].fieldOfStudy, "Computer Science");
  assert.strictEqual(mappedArtifact.education[0].endDate, "2026");

  // Assert Skills
  assert.strictEqual(mappedArtifact.skills.length, 6); // TS, Python, Next, Express, Git, Docker
  const nextJsSkill = mappedArtifact.skills.find(s => s.name === "Next.js");
  assert.ok(nextJsSkill);
  assert.strictEqual(nextJsSkill.category, "Frameworks/Libraries");

  const dockerSkill = mappedArtifact.skills.find(s => s.name === "Docker");
  assert.ok(dockerSkill);
  assert.strictEqual(dockerSkill.category, "customCategory");

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
