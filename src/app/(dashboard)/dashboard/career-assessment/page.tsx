import type { Metadata } from "next";
import { getOrCreateDbUser } from "@/lib/auth";
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
  const user = await getOrCreateDbUser().catch(() => null);

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

  if (user) {
    // Run quota, profile, and latest assessment concurrently in Promise.all
    const [quotaResult, profile, assessment] = await Promise.all([
      AssessmentQuotaService.getWeeklyQuota(user.id),
      ProfileService.getProfile(user.id),
      CareerAssessmentService.getLatestAssessment(user.id),
    ]);
    initialQuota = quotaResult;

    if (profile) {
      currentProfileVersion = profile.profileVersion;
      const completeness = calculateProfileCompleteness(profile);
      profileComplete = completeness.state === "COMPLETED";

      if (assessment) {
        initialAssessment = assessment;
        isStale = CareerAssessmentService.isAssessmentStale(
          assessment.profileVersion,
          profile.profileVersion
        );
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
