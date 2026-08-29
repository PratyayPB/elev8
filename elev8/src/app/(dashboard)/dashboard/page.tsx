import type { Metadata } from "next";
import Link from "next/link";
import { getProfileAction } from "@/features/profile/services/actions";
import { ProfileCard } from "@/components/profile/profile-card";
import { ProfileProgress } from "@/components/profile/profile-progress";
import {
  ProfileCompletenessCard,
  ProgressivePromptBanner,
} from "@/features/profile/components";
import { MetricCard, SectionHeader } from "@/components/dashboard";
import { ROUTES } from "@/constants/routes";
import { ArrowRight, FileText, Compass, Trophy, Target, Activity } from "lucide-react";
import { CareerAssessmentService } from "@/features/career-assessment/services/career-assessment.service";
import { ModuleActivityService } from "@/features/recommendations/services/module-activity.service";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Dashboard | Elev8",
  description: "Your personalized AI career hub",
};

export default async function DashboardPage() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return null;

  const dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (!dbUser) return null;

  const profile = await getProfileAction();
  const latestAssessment = profile ? await CareerAssessmentService.getLatestAssessment(dbUser.id) : null;
  const recentActivities = await ModuleActivityService.getRecentActivity(dbUser.id, 30); // Last 30 days

  return (
    <div className="space-y-10 max-w-7xl mx-auto pb-10">
      {/* 1. Contextual Progressive Profiling Banner */}
      <ProgressivePromptBanner profile={profile} context="DASHBOARD" />

      {/* Hero Welcome */}
      <section className="relative overflow-hidden rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-8 md:p-10 shadow-sm">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight mb-3">
            Welcome back{profile?.name ? `, ${profile.name}` : ""}
          </h1>
          <p className="text-base font-sans text-text-secondary mb-8">
            Continue building the skills that move you closer to your target career.
          </p>
        </div>
      </section>

      {/* 2. Career Assessment CTA/Insight */}
      <section>
        <div className="rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-surface-muted rounded-full">
              <Compass className="w-6 h-6 text-text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-text-primary">Career Assessment</h3>
              <p className="text-sm font-sans text-text-secondary mt-1 max-w-md">
                {!latestAssessment
                  ? "Take your first career assessment to align your profile and explore structured career insights."
                  : "Your career assessment is up to date."}
              </p>
            </div>
          </div>
          <Link
            href={ROUTES.CAREER_ASSESSMENT}
            className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-display font-semibold text-sm transition-all shadow-sm flex items-center gap-2 ${
              !latestAssessment
                ? "bg-text-primary text-white dark:text-brand-primary-900 hover:bg-black/80 dark:hover:bg-brand-secondary-200"
                : "bg-surface-muted text-text-primary hover:bg-border-subtle border border-dashboard-cardBorder"
            }`}
          >
            {!latestAssessment ? "Assess Now" : "View Assessment"}
            {!latestAssessment && <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>
      </section>

      {/* Metrics Row */}
      <section>
        <SectionHeader title="Your Progress" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <MetricCard
            label="Career Readiness"
            value={latestAssessment ? `${Math.round(latestAssessment.readinessScore)}%` : "N/A"}
            trend={latestAssessment ? "Current" : "Needs assessment"}
            trendDirection="neutral"
            highlighted={true}
            icon={<Target className="h-5 w-5" />}
          />
          <MetricCard
            label="Module Activities"
            value={`${recentActivities.length}`}
            trend="Last 30 days"
            trendDirection="up"
            icon={<Activity className="h-5 w-5" />}
          />
          <MetricCard
            label="Skills Acquired"
            value={profile ? `${profile.skills.length}` : "0"}
            trend={profile ? `Goal: ${profile.desiredSkills.length + profile.skills.length}` : "Setup profile"}
            trendDirection="neutral"
            icon={<Trophy className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* 3. Recent Module Activity */}
      {recentActivities.length > 0 && (
        <section>
          <SectionHeader title="Recent Activity" />
          <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-6 shadow-sm">
            <div className="space-y-4">
              {recentActivities.slice(0, 5).map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-surface-muted/50 rounded-xl border border-border-subtle">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                      <Activity className="w-4 h-4 text-zinc-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary">
                        {activity.module.replace(/_/g, " ")} {activity.completionStatus}
                      </h4>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {new Date(activity.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Profile Completeness & Overview */}
      <section>
        <SectionHeader title="Your Profile Status" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ProfileCard profile={profile} />
          </div>
          <div>
            <ProfileProgress profile={profile} />
          </div>
        </div>
      </section>
    </div>
  );
}
