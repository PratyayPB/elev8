import type { Metadata } from "next";
import { getProfileAction } from "@/features/profile/services/actions";
import {
  ProfileCompletenessCard,
  ProfileEditForm,
  ProfileSetupForm,
} from "@/features/profile/components";
import { ProfileSummary } from "@/components/profile/profile-summary";
import { PageHeader } from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Career Profile | Elev8",
  description: "View and edit your personal career context, skills, and goals",
};

export default async function ProfilePage() {
  const profile = await getProfileAction();

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-14">
      <PageHeader
        title="Career Profile"
        description="Your central career context powers personalized roadmaps, resume scoring, interview simulations, and career guidance."
        section="Profile Management"
      />

      {/* Profile Completeness Visual Widget */}
      <ProfileCompletenessCard profile={profile} />

      {/* Main Profile Content: Edit / Setup */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-text-primary">
            {profile ? "Profile Details & Sections" : "Create Profile"}
          </h2>
        </div>

        {profile ? (
          <ProfileEditForm initialProfile={profile} />
        ) : (
          <ProfileSetupForm />
        )}
      </div>
    </div>
  );
}
