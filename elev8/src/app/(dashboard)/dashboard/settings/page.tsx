import type { Metadata } from "next";
import { getProfileAction } from "@/features/profile/services/actions";
import { ProfileEditForm, ProfileSetupForm } from "@/features/profile/components";

export const metadata: Metadata = {
  title: "Settings | Elev8",
  description: "Manage your user profile and application settings",
};

export default async function SettingsPage() {
  const profile = await getProfileAction();

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">
          Profile Settings
        </h1>
        <p className="text-sm font-sans text-text-secondary mt-1">
          Update your career status, educational background, skills, and goals.
        </p>
      </div>

      {profile ? (
        <ProfileEditForm initialProfile={profile} />
      ) : (
        <ProfileSetupForm />
      )}
    </div>
  );
}
