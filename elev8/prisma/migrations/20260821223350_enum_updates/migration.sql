/*
  Warnings:

  - The `status` column on the `interview_templates` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `template` column on the `resume_builds` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `resume_builds` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `resume_scores` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `interview_templates` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `interviewType` on the `interview_templates` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `interviewType` on the `interviews` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `completionStatus` on the `module_activities` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currentStatus` on the `profiles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CareerStatus" AS ENUM ('STUDENT', 'EMPLOYED', 'SELF_EMPLOYED', 'BUSINESS_OWNER', 'FREELANCER', 'JOB_SEEKER', 'RECENT_GRADUATE', 'OTHER');

-- CreateEnum
CREATE TYPE "ResumeScoreStatus" AS ENUM ('PROCESSING', 'COMPLETED', 'FAILED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ResumeBuildStatus" AS ENUM ('DRAFT', 'READY', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ResumeBuilderTemplate" AS ENUM ('CLASSIC', 'MODERN', 'MINIMAL');

-- CreateEnum
CREATE TYPE "InterviewType" AS ENUM ('BEHAVIORAL', 'TECHNICAL', 'SYSTEM_DESIGN', 'ROLE_SPECIFIC', 'GENERAL');

-- CreateEnum
CREATE TYPE "InterviewTemplateType" AS ENUM ('PREDEFINED', 'AI_GENERATED');

-- CreateEnum
CREATE TYPE "InterviewTemplateStatus" AS ENUM ('ACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ModuleCompletionStatus" AS ENUM ('STARTED', 'COMPLETED', 'ABANDONED');

-- AlterTable
ALTER TABLE "interview_templates" DROP COLUMN "type",
ADD COLUMN     "type" "InterviewTemplateType" NOT NULL,
DROP COLUMN "interviewType",
ADD COLUMN     "interviewType" "InterviewType" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "InterviewTemplateStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "interviews" DROP COLUMN "interviewType",
ADD COLUMN     "interviewType" "InterviewType" NOT NULL;

-- AlterTable
ALTER TABLE "module_activities" DROP COLUMN "completionStatus",
ADD COLUMN     "completionStatus" "ModuleCompletionStatus" NOT NULL;

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "currentStatus",
ADD COLUMN     "currentStatus" "CareerStatus" NOT NULL;

-- AlterTable
ALTER TABLE "resume_builds" DROP COLUMN "template",
ADD COLUMN     "template" "ResumeBuilderTemplate" NOT NULL DEFAULT 'CLASSIC',
DROP COLUMN "status",
ADD COLUMN     "status" "ResumeBuildStatus" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "resume_scores" DROP COLUMN "status",
ADD COLUMN     "status" "ResumeScoreStatus" NOT NULL DEFAULT 'PROCESSING';

-- DropEnum
DROP TYPE "BuilderResumeStatus";

-- DropEnum
DROP TYPE "BuilderResumeTemplate";

-- DropEnum
DROP TYPE "CurrentStatus";

-- DropEnum
DROP TYPE "InterviewCategory";

-- DropEnum
DROP TYPE "InterviewDifficulty";

-- DropEnum
DROP TYPE "ResumeStatus";

-- CreateIndex
CREATE INDEX "interview_templates_type_idx" ON "interview_templates"("type");

-- CreateIndex
CREATE INDEX "interview_templates_status_idx" ON "interview_templates"("status");

-- CreateIndex
CREATE INDEX "profiles_currentStatus_idx" ON "profiles"("currentStatus");

-- CreateIndex
CREATE INDEX "resume_builds_status_idx" ON "resume_builds"("status");

-- CreateIndex
CREATE INDEX "resume_scores_status_idx" ON "resume_scores"("status");
