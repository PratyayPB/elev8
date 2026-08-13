import type { Metadata } from "next";
import Link from "next/link";
import { getProfileOrSyncAction } from "@/features/profile/services/actions";
import { OnboardingPrompt } from "@/features/profile/components/onboarding-prompt";
import { ProfileCard } from "@/components/profile/profile-card";
import { ProfileProgress } from "@/components/profile/profile-progress";
import { MetricCard, SectionHeader } from "@/components/dashboard";
import { ROUTES } from "@/constants/routes";
import { ArrowRight, FileText, Map, Mic, Compass, Trophy, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard | Elev8",
  description: "Your personalized AI career hub",
};

export default async function DashboardPage() {
  const profile = await getProfileOrSyncAction();

  return (
    <div className="space-y-10 max-w-7xl mx-auto pb-10">
      <OnboardingPrompt profile={profile} />

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-8 md:p-10 shadow-sm">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight mb-3">
            Welcome back{profile.fullName ? `, ${profile.fullName}` : ""}
          </h1>
          <p className="text-base font-sans text-text-secondary mb-8">
            Continue building the skills that move you closer to your target career.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={ROUTES.ROADMAPS}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-text-primary text-white font-display font-semibold text-sm transition-all hover:bg-black/80 hover:scale-[0.98]"
            >
              Continue Roadmap
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={ROUTES.INTERVIEWS}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-muted text-text-primary font-display font-semibold text-sm transition-all hover:bg-border-subtle"
            >
              Start Interview
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-dashboard-metricHighlight/20 to-transparent pointer-events-none" />
      </section>

      {/* Metrics Row */}
      <section>
        <SectionHeader title="Your Progress" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <MetricCard
            label="Roadmap Progress"
            value="68%"
            trend="+12% this month"
            trendDirection="up"
            highlighted={true}
            icon={<Map className="h-5 w-5" />}
          />
          <MetricCard
            label="Interview Sessions"
            value="12"
            trend="+3 this week"
            trendDirection="up"
            icon={<Mic className="h-5 w-5" />}
          />
          <MetricCard
            label="Skills Acquired"
            value="24"
            trend="Target: 30"
            trendDirection="neutral"
            icon={<Trophy className="h-5 w-5" />}
          />
          <MetricCard
            label="Career Readiness"
            value="76%"
            trend="+5% from last assessment"
            trendDirection="up"
            icon={<Target className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <SectionHeader title="Quick Actions" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href={ROUTES.RESUMES} className="group p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card transition-all hover:shadow-md hover:border-text-primary/20 flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-surface-muted flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-white transition-colors">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-text-primary">Resume Setup</h3>
              <p className="text-sm font-sans text-text-secondary mt-1">Upload & score your resume</p>
            </div>
          </Link>
          
          <Link href={ROUTES.ROADMAPS} className="group p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card transition-all hover:shadow-md hover:border-text-primary/20 flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-surface-muted flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-white transition-colors">
              <Map className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-text-primary">Learning Path</h3>
              <p className="text-sm font-sans text-text-secondary mt-1">Build a custom roadmap</p>
            </div>
          </Link>

          <Link href={ROUTES.INTERVIEWS} className="group p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card transition-all hover:shadow-md hover:border-text-primary/20 flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-surface-muted flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-white transition-colors">
              <Mic className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-text-primary">Practice Interview</h3>
              <p className="text-sm font-sans text-text-secondary mt-1">Start a mock session</p>
            </div>
          </Link>

          <Link href={ROUTES.CAREER_GUIDANCE} className="group p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card transition-all hover:shadow-md hover:border-text-primary/20 flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-surface-muted flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-white transition-colors">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-text-primary">Career Guidance</h3>
              <p className="text-sm font-sans text-text-secondary mt-1">Get AI career advice</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Profile Overview Grid */}
      <section>
        <SectionHeader title="Your Profile" />
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
