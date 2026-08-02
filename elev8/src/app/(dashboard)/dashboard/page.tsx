import type { Metadata } from "next";
import { getProfileOrSyncAction } from "@/features/profile/services/actions";
import { OnboardingPrompt } from "@/features/profile/components/onboarding-prompt";
import { ProfileCard } from "@/components/profile/profile-card";
import { ProfileProgress } from "@/components/profile/profile-progress";

export const metadata: Metadata = {
  title: "Dashboard | Elev8",
  description: "Your personalized AI career hub",
};

export default async function DashboardPage() {
  const profile = await getProfileOrSyncAction();

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Onboarding Prompt Banner */}
      <OnboardingPrompt profile={profile} />

      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary">
            Welcome back{profile.fullName ? `, ${profile.fullName}` : ""}!
          </h1>
          <p className="text-xs text-text-secondary">
            Here is your AI career platform overview.
          </p>
        </div>
      </div>

      {/* Grid overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ProfileCard profile={profile} />
        </div>
        <div>
          <ProfileProgress profile={profile} />
        </div>
      </div>
    </div>
  );
}
