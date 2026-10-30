import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import {
  ProfileService,
  calculateProfileCompleteness,
} from "@/features/profile/services";
import {
  CareerAssessmentService,
  AssessmentQuotaService,
} from "@/features/career-assessment/services";
import { ASSESSMENT_WEEKLY_QUOTA } from "@/features/career-assessment/constants";
import { WeeklyQuotaInfo } from "@/features/career-assessment/types";
import { AssessmentClientView } from "@/features/career-assessment/components";
import { PageHeader, RecommendedActions } from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Career Assessment | Elev8",
  description:
    "AI-powered career readiness analysis, strengths, gaps, and focus areas",
};

export default async function CareerAssessmentPage() {
  const { userId: clerkId } = await auth();

  let initialAssessment = null;
  let isStale = false;
  let profileComplete = false;
  let currentProfileVersion = 1;
  let initialQuota: WeeklyQuotaInfo = {
    totalAllowed: ASSESSMENT_WEEKLY_QUOTA,
    usedThisWeek: 0,
    remaining: ASSESSMENT_WEEKLY_QUOTA,
    canGenerate: true,
    earliestExpiringAt: null,
    resetFormatted: null,
  };

  if (clerkId) {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (user) {
      initialQuota = await AssessmentQuotaService.getWeeklyQuota(user.id);
      const profile = await ProfileService.getProfile(user.id);
      if (profile) {
        currentProfileVersion = profile.profileVersion;
        const completeness = calculateProfileCompleteness(profile);
        profileComplete = completeness.state === "COMPLETED";

        const assessment = await CareerAssessmentService.getLatestAssessment(
          user.id,
          profile.profileVersion
        );
        initialAssessment = assessment;
        isStale = assessment?.isStale || false;
      }
    }
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-14">
      <AssessmentClientView
        initialAssessment={initialAssessment}
        initialIsStale={isStale}
        profileComplete={profileComplete}
        currentProfileVersion={currentProfileVersion}
        initialQuota={initialQuota}
      />

      <RecommendedActions currentModule="career-assessment" />
    </div>
  );
}
