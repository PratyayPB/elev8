/*
  Warnings:

  - You are about to drop the column `type` on the `interview_templates` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `interviews` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `module_activities` table. All the data in the column will be lost.
  - You are about to drop the column `careerReadiness` on the `progress` table. All the data in the column will be lost.
  - You are about to drop the column `completedMilestones` on the `progress` table. All the data in the column will be lost.
  - You are about to drop the column `interviewReadiness` on the `progress` table. All the data in the column will be lost.
  - You are about to drop the column `overallProgress` on the `progress` table. All the data in the column will be lost.
  - You are about to drop the column `resumeReadiness` on the `progress` table. All the data in the column will be lost.
  - You are about to drop the column `totalMilestones` on the `progress` table. All the data in the column will be lost.
  - The `template` column on the `resume_builds` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `experienceLevel` on the `role_skill_profiles` table. All the data in the column will be lost.
  - You are about to drop the `recommendation_sets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recommendations` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[normalizedRole]` on the table `role_skill_profiles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "InterviewTemplateSource" AS ENUM ('USER_CREATED', 'GLOBAL');

-- CreateEnum
CREATE TYPE "ResumeCompanyType" AS ENUM ('STARTUP', 'PRODUCT_COMPANY', 'CONSULTING', 'FAANG_ENTERPRISE', 'GOVERNMENT', 'NON_PROFIT', 'AGENCY', 'OTHER');

-- CreateEnum
CREATE TYPE "ModuleProgressStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'PROCESSING', 'READY', 'COMPLETED', 'FAILED', 'ABANDONED');

-- CreateEnum
CREATE TYPE "ModuleActivityEventType" AS ENUM ('ASSESSMENT_STARTED', 'ASSESSMENT_INPUT_UPDATED', 'ASSESSMENT_READY', 'ASSESSMENT_SUBMITTED', 'ASSESSMENT_GENERATION_STARTED', 'ASSESSMENT_GENERATION_STAGE_CHANGED', 'ASSESSMENT_COMPLETED', 'ASSESSMENT_GENERATION_FAILED', 'ASSESSMENT_VIEWED', 'ROADMAP_STARTED', 'ROADMAP_GENERATION_STARTED', 'ROADMAP_GENERATION_STAGE_CHANGED', 'ROADMAP_GENERATED', 'ROADMAP_GENERATION_FAILED', 'MILESTONE_STARTED', 'MILESTONE_COMPLETED', 'ROADMAP_COMPLETED', 'ROADMAP_VIEWED', 'INTERVIEW_STARTED', 'INTERVIEW_QUESTION_ANSWERED', 'INTERVIEW_ALL_QUESTIONS_ANSWERED', 'INTERVIEW_SUBMITTED', 'INTERVIEW_EVALUATION_STARTED', 'INTERVIEW_COMPLETED', 'INTERVIEW_FAILED', 'INTERVIEW_ABANDONED', 'INTERVIEW_VIEWED', 'RESUME_BUILD_STARTED', 'RESUME_UPDATED', 'RESUME_SECTION_UPDATED', 'RESUME_BUILD_READY', 'RESUME_BUILD_COMPLETED', 'RESUME_TEMPLATE_CHANGED', 'AI_RESUME_BUILD_REQUESTED', 'AI_RESUME_BUILD_STARTED', 'AI_RESUME_BUILD_COMPLETED', 'AI_RESUME_BUILD_FAILED', 'RESUME_PDF_GENERATED', 'RESUME_VIEWED', 'RESUME_SCORE_STARTED', 'RESUME_SCORE_COMPLETED', 'RESUME_SCORE_FAILED', 'RESUME_SCORE_VIEWED');

-- CreateEnum
CREATE TYPE "ResumeTemplateCategory" AS ENUM ('ATS_FRIENDLY', 'MINIMAL_MODERN', 'TWO_COLUMN', 'CREATIVE');

-- AlterEnum
ALTER TYPE "JobType" ADD VALUE 'RESUME_BUILD';

-- DropForeignKey
ALTER TABLE "interviews" DROP CONSTRAINT "interviews_templateId_fkey";

-- DropForeignKey
ALTER TABLE "recommendations" DROP CONSTRAINT "recommendations_recommendationSetId_fkey";

-- DropIndex
DROP INDEX "interview_templates_type_idx";

-- DropIndex
DROP INDEX "interviews_templateId_idx";

-- DropIndex
DROP INDEX "module_activities_userId_createdAt_idx";

-- DropIndex
DROP INDEX "module_activities_userId_module_idx";

-- DropIndex
DROP INDEX "role_skill_profiles_normalizedRole_experienceLevel_key";

-- AlterTable
ALTER TABLE "interview_templates" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "interviews" DROP COLUMN "templateId",
ADD COLUMN     "globalInterviewTemplateId" TEXT,
ADD COLUMN     "interviewTemplateId" TEXT,
ADD COLUMN     "profileId" TEXT,
ADD COLUMN     "resumeId" TEXT,
ADD COLUMN     "roadmapId" TEXT,
ADD COLUMN     "templateSource" "InterviewTemplateSource" NOT NULL DEFAULT 'GLOBAL';

-- AlterTable
ALTER TABLE "module_activities" DROP COLUMN "updatedAt",
ADD COLUMN     "entityId" TEXT,
ADD COLUMN     "eventType" "ModuleActivityEventType" NOT NULL DEFAULT 'ASSESSMENT_COMPLETED',
ALTER COLUMN "completionStatus" DROP NOT NULL;

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isMandatoryCompleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "progress" DROP COLUMN "careerReadiness",
DROP COLUMN "completedMilestones",
DROP COLUMN "interviewReadiness",
DROP COLUMN "overallProgress",
DROP COLUMN "resumeReadiness",
DROP COLUMN "totalMilestones",
ADD COLUMN     "careerAssessmentMetadata" JSONB,
ADD COLUMN     "careerAssessmentProgress" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "careerAssessmentStatus" "ModuleProgressStatus" NOT NULL DEFAULT 'NOT_STARTED',
ADD COLUMN     "interviewMetadata" JSONB,
ADD COLUMN     "interviewProgress" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "interviewStatus" "ModuleProgressStatus" NOT NULL DEFAULT 'NOT_STARTED',
ADD COLUMN     "lastActivityAt" TIMESTAMP(3),
ADD COLUMN     "resumeBuildMetadata" JSONB,
ADD COLUMN     "resumeBuildProgress" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "resumeBuildStatus" "ModuleProgressStatus" NOT NULL DEFAULT 'NOT_STARTED',
ADD COLUMN     "resumeScoreMetadata" JSONB,
ADD COLUMN     "resumeScoreProgress" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "resumeScoreStatus" "ModuleProgressStatus" NOT NULL DEFAULT 'NOT_STARTED',
ADD COLUMN     "roadmapMetadata" JSONB,
ADD COLUMN     "roadmapProgress" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "roadmapStatus" "ModuleProgressStatus" NOT NULL DEFAULT 'NOT_STARTED';

-- AlterTable
ALTER TABLE "resume_builds" ADD COLUMN     "aiGeneratedAt" TIMESTAMP(3),
ADD COLUMN     "aiModel" TEXT,
ADD COLUMN     "aiPromptVersion" TEXT,
ADD COLUMN     "isAiGenerated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "jobDescription" TEXT,
ADD COLUMN     "targetCompany" TEXT,
ADD COLUMN     "targetCompanyType" "ResumeCompanyType",
ADD COLUMN     "targetJobTitle" TEXT,
DROP COLUMN "template",
ADD COLUMN     "template" TEXT NOT NULL DEFAULT 'academic-cv-lite';

-- AlterTable
ALTER TABLE "role_skill_profiles" DROP COLUMN "experienceLevel";

-- DropTable
DROP TABLE "recommendation_sets";

-- DropTable
DROP TABLE "recommendations";

-- DropEnum
DROP TYPE "InterviewTemplateType";

-- DropEnum
DROP TYPE "RecommendationSource";

-- DropEnum
DROP TYPE "RecommendationStatus";

-- DropEnum
DROP TYPE "RecommendationType";

-- DropEnum
DROP TYPE "ResumeBuilderTemplate";

-- CreateTable
CREATE TABLE "global_roadmaps" (
    "id" TEXT NOT NULL,
    "createdByUserId" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "targetRole" TEXT NOT NULL,
    "normalizedRole" TEXT NOT NULL,
    "experienceLevel" "CareerLevel" NOT NULL,
    "estimatedDuration" TEXT,
    "blobUrl" TEXT,
    "status" "RoadmapStatus" NOT NULL DEFAULT 'COMPLETED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "global_roadmaps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resume_templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" "ResumeTemplateCategory" NOT NULL,
    "supportedSections" TEXT[],
    "previewImage" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resume_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "global_interview_templates" (
    "id" TEXT NOT NULL,
    "createdByUserId" TEXT,
    "role" TEXT NOT NULL,
    "normalizedRole" TEXT NOT NULL,
    "experienceLevel" "CareerExperienceLevel" NOT NULL,
    "interviewType" "InterviewType" NOT NULL,
    "questionCount" INTEGER NOT NULL,
    "estimatedDuration" TEXT,
    "templateBlobUrl" TEXT NOT NULL,
    "status" "InterviewTemplateStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "global_interview_templates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "global_roadmaps_createdByUserId_idx" ON "global_roadmaps"("createdByUserId");

-- CreateIndex
CREATE INDEX "global_roadmaps_normalizedRole_idx" ON "global_roadmaps"("normalizedRole");

-- CreateIndex
CREATE INDEX "global_roadmaps_experienceLevel_idx" ON "global_roadmaps"("experienceLevel");

-- CreateIndex
CREATE INDEX "global_roadmaps_status_idx" ON "global_roadmaps"("status");

-- CreateIndex
CREATE INDEX "global_roadmaps_createdAt_idx" ON "global_roadmaps"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "global_roadmaps_normalizedRole_experienceLevel_key" ON "global_roadmaps"("normalizedRole", "experienceLevel");

-- CreateIndex
CREATE UNIQUE INDEX "resume_templates_slug_key" ON "resume_templates"("slug");

-- CreateIndex
CREATE INDEX "global_interview_templates_createdByUserId_idx" ON "global_interview_templates"("createdByUserId");

-- CreateIndex
CREATE INDEX "global_interview_templates_normalizedRole_idx" ON "global_interview_templates"("normalizedRole");

-- CreateIndex
CREATE INDEX "global_interview_templates_experienceLevel_idx" ON "global_interview_templates"("experienceLevel");

-- CreateIndex
CREATE INDEX "global_interview_templates_interviewType_idx" ON "global_interview_templates"("interviewType");

-- CreateIndex
CREATE INDEX "global_interview_templates_status_idx" ON "global_interview_templates"("status");

-- CreateIndex
CREATE UNIQUE INDEX "global_interview_templates_normalizedRole_experienceLevel_i_key" ON "global_interview_templates"("normalizedRole", "experienceLevel", "interviewType");

-- CreateIndex
CREATE INDEX "interviews_interviewTemplateId_idx" ON "interviews"("interviewTemplateId");

-- CreateIndex
CREATE INDEX "interviews_globalInterviewTemplateId_idx" ON "interviews"("globalInterviewTemplateId");

-- CreateIndex
CREATE INDEX "interviews_templateSource_idx" ON "interviews"("templateSource");

-- CreateIndex
CREATE INDEX "module_activities_userId_module_createdAt_idx" ON "module_activities"("userId", "module", "createdAt");

-- CreateIndex
CREATE INDEX "module_activities_userId_entityId_createdAt_idx" ON "module_activities"("userId", "entityId", "createdAt");

-- CreateIndex
CREATE INDEX "module_activities_userId_eventType_createdAt_idx" ON "module_activities"("userId", "eventType", "createdAt");

-- CreateIndex
CREATE INDEX "progress_lastActivityAt_idx" ON "progress"("lastActivityAt");

-- CreateIndex
CREATE UNIQUE INDEX "role_skill_profiles_normalizedRole_key" ON "role_skill_profiles"("normalizedRole");

-- AddForeignKey
ALTER TABLE "global_roadmaps" ADD CONSTRAINT "global_roadmaps_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "global_interview_templates" ADD CONSTRAINT "global_interview_templates_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_interviewTemplateId_fkey" FOREIGN KEY ("interviewTemplateId") REFERENCES "interview_templates"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_globalInterviewTemplateId_fkey" FOREIGN KEY ("globalInterviewTemplateId") REFERENCES "global_interview_templates"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progress" ADD CONSTRAINT "progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
