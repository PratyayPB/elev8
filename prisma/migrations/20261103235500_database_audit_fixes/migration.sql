-- AlterTable users: unique email
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AlterTable resume_scores: add updatedAt
ALTER TABLE "resume_scores" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable audit_logs
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "action" TEXT NOT NULL,
    "target" TEXT,
    "target_id" TEXT,
    "metadata" JSONB,
    "ip_address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- Indexes for audit_logs
CREATE INDEX "audit_logs_user_id_created_at_idx" ON "audit_logs"("user_id", "created_at");
CREATE INDEX "audit_logs_action_created_at_idx" ON "audit_logs"("action", "created_at");

-- Foreign key for audit_logs
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Foreign keys and indexes for interviews
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "resume_scores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_roadmapId_fkey" FOREIGN KEY ("roadmapId") REFERENCES "roadmaps"("id") ON DELETE SET NULL ON UPDATE CASCADE;

CREATE INDEX "interviews_profileId_idx" ON "interviews"("profileId");
CREATE INDEX "interviews_resumeId_idx" ON "interviews"("resumeId");
CREATE INDEX "interviews_roadmapId_idx" ON "interviews"("roadmapId");

-- Check Constraints
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_isCompleted_status_check" 
  CHECK (NOT "isCompleted" OR "currentStatus" IS NOT NULL);

ALTER TABLE "career_assessments" ADD CONSTRAINT "career_assessments_readinessScore_check" 
  CHECK ("readinessScore" IS NULL OR ("readinessScore" >= 0 AND "readinessScore" <= 100));

ALTER TABLE "resume_scores" ADD CONSTRAINT "resume_scores_ovrScore_check" 
  CHECK ("ovrScore" IS NULL OR ("ovrScore" >= 0 AND "ovrScore" <= 100));

ALTER TABLE "resume_scores" ADD CONSTRAINT "resume_scores_atsScore_check" 
  CHECK ("atsScore" IS NULL OR ("atsScore" >= 0 AND "atsScore" <= 100));

ALTER TABLE "interviews" ADD CONSTRAINT "interviews_overallScore_check" 
  CHECK ("overallScore" IS NULL OR ("overallScore" >= 0 AND "overallScore" <= 100));

-- Convert Timestamps to TIMESTAMPTZ(3)
ALTER TABLE "users" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC';

ALTER TABLE "profiles" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC';

ALTER TABLE "career_assessments" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC';

ALTER TABLE "roadmaps" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC';

ALTER TABLE "global_roadmaps" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC';

ALTER TABLE "resume_scores" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC';

ALTER TABLE "resume_builds" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "aiGeneratedAt" TYPE TIMESTAMPTZ(3) USING "aiGeneratedAt" AT TIME ZONE 'UTC';

ALTER TABLE "resume_templates" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC';

ALTER TABLE "interview_templates" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC';

ALTER TABLE "global_interview_templates" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC';

ALTER TABLE "interviews" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC';

ALTER TABLE "jobs" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "startedAt" TYPE TIMESTAMPTZ(3) USING "startedAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "completedAt" TYPE TIMESTAMPTZ(3) USING "completedAt" AT TIME ZONE 'UTC';

ALTER TABLE "role_skill_profiles" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC';

ALTER TABLE "module_activities" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC';

ALTER TABLE "progress" 
  ALTER COLUMN "createdAt" TYPE TIMESTAMPTZ(3) USING "createdAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "updatedAt" TYPE TIMESTAMPTZ(3) USING "updatedAt" AT TIME ZONE 'UTC',
  ALTER COLUMN "lastActivityAt" TYPE TIMESTAMPTZ(3) USING "lastActivityAt" AT TIME ZONE 'UTC';

ALTER TABLE "notifications" 
  ALTER COLUMN "created_at" TYPE TIMESTAMPTZ(3) USING "created_at" AT TIME ZONE 'UTC',
  ALTER COLUMN "read_at" TYPE TIMESTAMPTZ(3) USING "read_at" AT TIME ZONE 'UTC',
  ALTER COLUMN "updated_at" TYPE TIMESTAMPTZ(3) USING "updated_at" AT TIME ZONE 'UTC';

ALTER TABLE "audit_logs"
  ALTER COLUMN "created_at" TYPE TIMESTAMPTZ(3) USING "created_at" AT TIME ZONE 'UTC';
