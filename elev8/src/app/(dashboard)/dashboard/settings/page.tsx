import type { Metadata } from "next";
import { getProfileOrSyncAction } from "@/features/profile/services/actions";
import { ProfileEditor } from "@/features/profile/components/profile-editor";

export const metadata: Metadata = {
  title: "Settings | Elev8",
  description: "Manage your user profile and application settings",
};

export default async function SettingsPage() {
  const profile = await getProfileOrSyncAction();

  return (
    <div className="max-w-6xl mx-auto">
      <ProfileEditor initialProfile={profile} />
    </div>
  );
}
