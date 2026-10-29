-- CreateEnum
CREATE TYPE "CurrentStatus" AS ENUM ('STUDENT', 'EMPLOYED', 'SELF_EMPLOYED', 'BUSINESS_OWNER', 'FREELANCER', 'JOB_SEEKER', 'RECENT_GRADUATE', 'OTHER');

-- CreateEnum
CREATE TYPE "PrimaryGoal" AS ENUM ('LAND_A_JOB', 'GET_AN_INTERNSHIP', 'SWITCH_CAREER', 'GET_PROMOTED', 'LEARN_NEW_SKILLS', 'PREPARE_FOR_INTERVIEW', 'BUILD_RESUME', 'IMPROVE_RESUME', 'BECOME_JOB_READY', 'EXPLORE_CAREERS', 'OTHER');

-- CreateEnum
CREATE TYPE "SkillProficiency" AS ENUM ('BEGINNER', 'BASIC', 'INTERMEDIATE', 'ADVANCED', 'EXPERT');

-- CreateEnum
CREATE TYPE "CareerExperienceLevel" AS ENUM ('ENTRY', 'JUNIOR', 'MID', 'SENIOR', 'LEAD');

-- CreateEnum
CREATE TYPE "TargetCompanyType" AS ENUM ('STARTUP', 'MID_SIZE', 'ENTERPRISE', 'FAANG', 'GOVERNMENT', 'NON_PROFIT', 'NO_PREFERENCE');

-- CreateEnum
CREATE TYPE "CareerLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "RoadmapStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ResumeStatus" AS ENUM ('DRAFT', 'COMPLETED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "BuilderResumeStatus" AS ENUM ('DRAFT', 'READY', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "BuilderResumeTemplate" AS ENUM ('CLASSIC', 'MODERN', 'MINIMAL');

-- CreateEnum
CREATE TYPE "InterviewStatus" AS ENUM ('GENERATING', 'READY', 'IN_PROGRESS', 'COMPLETED', 'FAILED', 'ABANDONED');

-- CreateEnum
CREATE TYPE "InterviewDifficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "InterviewCategory" AS ENUM ('BEHAVIORAL', 'TECHNICAL', 'SYSTEM_DESIGN', 'ROLE_SPECIFIC', 'GENERAL');

-- CreateEnum
CREATE TYPE "CareerAssessmentStatus" AS ENUM ('PROCESSING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "SkillImportance" AS ENUM ('CORE', 'IMPORTANT', 'SUPPORTING');

-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('UNREAD', 'READ', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('QUEUED', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('ROADMAP', 'CAREER_GUIDANCE', 'INTERVIEW', 'RESUME_ANALYSIS', 'EXPORT');

-- CreateEnum
CREATE TYPE "RecommendationSource" AS ENUM ('RULE_ENGINE', 'HYBRID', 'MODULE_RESULT', 'PROFILE_SIGNAL', 'LLM_ASSESSMENT');

-- CreateEnum
CREATE TYPE "RecommendationType" AS ENUM ('MODULE', 'SKILL', 'ACTION', 'PROFILE_CLARIFICATION');

-- CreateEnum
CREATE TYPE "RecommendationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'DISMISSED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "ModuleType" AS ENUM ('ROADMAP', 'RESUME_SCORE', 'RESUME_BUILD', 'INTERVIEW_PRACTICE', 'CAREER_ASSESSMENT');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "age" INTEGER,
    "country" TEXT,
    "phoneNumber" TEXT,
    "currentStatus" "CurrentStatus" NOT NULL,
    "currentRole" TEXT,
    "yearsOfExperience" INTEGER,
    "highestQualification" TEXT,
    "fieldOfStudy" TEXT,
    "primaryGoal" TEXT,
    "targetRole" TEXT,
    "targetCompanyType" TEXT,
    "weeklyLearningHours" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_skills" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "normalizedName" TEXT NOT NULL,
    "proficiency" "SkillProficiency" NOT NULL,

    CONSTRAINT "profile_skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_desired_skills" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "normalizedName" TEXT NOT NULL,

    CONSTRAINT "profile_desired_skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "career_assessments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "profileVersion" INTEGER NOT NULL,
    "readinessScore" INTEGER,
    "strengths" JSONB,
    "gaps" JSONB,
    "suggestedFocusArea" JSONB,
    "narrative" TEXT,
    "inputSnapshot" JSONB,
    "model" TEXT,
    "status" "CareerAssessmentStatus" NOT NULL DEFAULT 'PROCESSING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "career_assessments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmaps" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "targetRole" TEXT,
    "experienceLevel" "CareerLevel",
    "estimatedDuration" TEXT,
    "status" "RoadmapStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "blobUrl" TEXT,
    "personalized" BOOLEAN,
    "profileSnapshot" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roadmaps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resume_scores" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "roleDesc" TEXT,
    "expLevel" "CareerExperienceLevel" NOT NULL,
    "ovrScore" INTEGER,
    "atsScore" INTEGER,
    "artifactBlobUrl" TEXT,
    "personalized" BOOLEAN,
    "profileSnapshot" JSONB,
    "status" "ResumeStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "resume_scores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resume_builds" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "template" "BuilderResumeTemplate" NOT NULL DEFAULT 'CLASSIC',
    "artifactBlobUrl" TEXT,
    "status" "BuilderResumeStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resume_builds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interview_templates" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "type" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "experienceLevel" "CareerExperienceLevel" NOT NULL,
    "interviewType" TEXT NOT NULL,
    "questionCount" INTEGER NOT NULL,
    "estimatedDuration" TEXT,
    "personalized" BOOLEAN,
    "profileSnapshot" JSONB,
    "templateBlobUrl" TEXT NOT NULL,
    "status" "InterviewStatus" NOT NULL DEFAULT 'READY',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "interview_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interviews" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "experienceLevel" "CareerExperienceLevel" NOT NULL,
    "interviewType" TEXT NOT NULL,
    "questionCount" INTEGER NOT NULL,
    "estimatedDuration" TEXT,
    "blobUrl" TEXT,
    "overallScore" INTEGER,
    "durationSeconds" INTEGER,
    "assessment" JSONB,
    "personalized" BOOLEAN NOT NULL DEFAULT false,
    "profileSnapshot" JSONB,
    "status" "InterviewStatus" NOT NULL DEFAULT 'READY',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "interviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "JobType" NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT 'QUEUED',
    "progress" INTEGER NOT NULL DEFAULT 0,
    "step" TEXT,
    "triggerRunId" TEXT,
    "artifactId" TEXT,
    "artifactType" TEXT,
    "error" TEXT,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT,
    "status" "NotificationStatus" NOT NULL DEFAULT 'UNREAD',
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_skill_profiles" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "normalizedRole" TEXT NOT NULL,
    "experienceLevel" "CareerExperienceLevel" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "role_skill_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_skill_requirements" (
    "id" TEXT NOT NULL,
    "roleSkillProfileId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "normalizedName" TEXT NOT NULL,
    "minimumProficiency" "SkillProficiency" NOT NULL,
    "importance" "SkillImportance" NOT NULL,
    "estimatedHours" INTEGER,

    CONSTRAINT "role_skill_requirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "module_activities" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "module" "ModuleType" NOT NULL,
    "completionStatus" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "module_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "completedMilestones" INTEGER NOT NULL DEFAULT 0,
    "totalMilestones" INTEGER NOT NULL DEFAULT 0,
    "interviewReadiness" INTEGER,
    "resumeReadiness" INTEGER,
    "careerReadiness" INTEGER,
    "overallProgress" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recommendation_sets" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "profileVersion" INTEGER NOT NULL,
    "trigger" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recommendation_sets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recommendations" (
    "id" TEXT NOT NULL,
    "recommendationSetId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "source" "RecommendationSource" NOT NULL,
    "type" "RecommendationType" NOT NULL,
    "refId" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "scoreBreakdown" JSONB,
    "reason" TEXT NOT NULL,
    "context" JSONB,
    "status" "RecommendationStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recommendations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_clerkId_key" ON "users"("clerkId");

-- CreateIndex
CREATE INDEX "users_clerkId_idx" ON "users"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

-- CreateIndex
CREATE INDEX "profiles_currentStatus_idx" ON "profiles"("currentStatus");

-- CreateIndex
CREATE INDEX "profiles_targetRole_idx" ON "profiles"("targetRole");

-- CreateIndex
CREATE INDEX "profiles_country_idx" ON "profiles"("country");

-- CreateIndex
CREATE INDEX "profile_skills_profileId_idx" ON "profile_skills"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "profile_skills_profileId_normalizedName_key" ON "profile_skills"("profileId", "normalizedName");

-- CreateIndex
CREATE INDEX "profile_desired_skills_profileId_idx" ON "profile_desired_skills"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "profile_desired_skills_profileId_normalizedName_key" ON "profile_desired_skills"("profileId", "normalizedName");

-- CreateIndex
CREATE INDEX "career_assessments_userId_idx" ON "career_assessments"("userId");

-- CreateIndex
CREATE INDEX "career_assessments_userId_profileVersion_idx" ON "career_assessments"("userId", "profileVersion");

-- CreateIndex
CREATE INDEX "career_assessments_status_idx" ON "career_assessments"("status");

-- CreateIndex
CREATE INDEX "career_assessments_createdAt_idx" ON "career_assessments"("createdAt");

-- CreateIndex
CREATE INDEX "roadmaps_userId_idx" ON "roadmaps"("userId");

-- CreateIndex
CREATE INDEX "roadmaps_status_idx" ON "roadmaps"("status");

-- CreateIndex
CREATE INDEX "roadmaps_createdAt_idx" ON "roadmaps"("createdAt");

-- CreateIndex
CREATE INDEX "resume_scores_userId_idx" ON "resume_scores"("userId");

-- CreateIndex
CREATE INDEX "resume_scores_status_idx" ON "resume_scores"("status");

-- CreateIndex
CREATE INDEX "resume_scores_createdAt_idx" ON "resume_scores"("createdAt");

-- CreateIndex
CREATE INDEX "resume_builds_userId_idx" ON "resume_builds"("userId");

-- CreateIndex
CREATE INDEX "resume_builds_status_idx" ON "resume_builds"("status");

-- CreateIndex
CREATE INDEX "resume_builds_createdAt_idx" ON "resume_builds"("createdAt");

-- CreateIndex
CREATE INDEX "interview_templates_userId_idx" ON "interview_templates"("userId");

-- CreateIndex
CREATE INDEX "interview_templates_type_idx" ON "interview_templates"("type");

-- CreateIndex
CREATE INDEX "interview_templates_status_idx" ON "interview_templates"("status");

-- CreateIndex
CREATE INDEX "interviews_userId_idx" ON "interviews"("userId");

-- CreateIndex
CREATE INDEX "interviews_templateId_idx" ON "interviews"("templateId");

-- CreateIndex
CREATE INDEX "interviews_status_idx" ON "interviews"("status");

-- CreateIndex
CREATE INDEX "interviews_createdAt_idx" ON "interviews"("createdAt");

-- CreateIndex
CREATE INDEX "jobs_userId_idx" ON "jobs"("userId");

-- CreateIndex
CREATE INDEX "jobs_status_idx" ON "jobs"("status");

-- CreateIndex
CREATE INDEX "jobs_createdAt_idx" ON "jobs"("createdAt");

-- CreateIndex
CREATE INDEX "notifications_userId_idx" ON "notifications"("userId");

-- CreateIndex
CREATE INDEX "notifications_status_idx" ON "notifications"("status");

-- CreateIndex
CREATE INDEX "notifications_createdAt_idx" ON "notifications"("createdAt");

-- CreateIndex
CREATE INDEX "role_skill_profiles_normalizedRole_idx" ON "role_skill_profiles"("normalizedRole");

-- CreateIndex
CREATE UNIQUE INDEX "role_skill_profiles_normalizedRole_experienceLevel_key" ON "role_skill_profiles"("normalizedRole", "experienceLevel");

-- CreateIndex
CREATE INDEX "role_skill_requirements_roleSkillProfileId_idx" ON "role_skill_requirements"("roleSkillProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "role_skill_requirements_roleSkillProfileId_normalizedName_key" ON "role_skill_requirements"("roleSkillProfileId", "normalizedName");

-- CreateIndex
CREATE INDEX "module_activities_userId_module_idx" ON "module_activities"("userId", "module");

-- CreateIndex
CREATE INDEX "module_activities_userId_createdAt_idx" ON "module_activities"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "progress_userId_key" ON "progress"("userId");

-- CreateIndex
CREATE INDEX "progress_userId_idx" ON "progress"("userId");

-- CreateIndex
CREATE INDEX "recommendation_sets_userId_createdAt_idx" ON "recommendation_sets"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "recommendations_userId_createdAt_idx" ON "recommendations"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "recommendations_userId_status_idx" ON "recommendations"("userId", "status");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_skills" ADD CONSTRAINT "profile_skills_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_desired_skills" ADD CONSTRAINT "profile_desired_skills_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "career_assessments" ADD CONSTRAINT "career_assessments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmaps" ADD CONSTRAINT "roadmaps_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resume_scores" ADD CONSTRAINT "resume_scores_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resume_builds" ADD CONSTRAINT "resume_builds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interview_templates" ADD CONSTRAINT "interview_templates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "interview_templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_skill_requirements" ADD CONSTRAINT "role_skill_requirements_roleSkillProfileId_fkey" FOREIGN KEY ("roleSkillProfileId") REFERENCES "role_skill_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "module_activities" ADD CONSTRAINT "module_activities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recommendations" ADD CONSTRAINT "recommendations_recommendationSetId_fkey" FOREIGN KEY ("recommendationSetId") REFERENCES "recommendation_sets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
