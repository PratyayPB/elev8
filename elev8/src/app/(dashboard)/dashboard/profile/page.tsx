import type { Metadata } from "next";
import { getProfileAction } from "@/features/profile/services/actions";
import { ProfileWorkspace } from "@/features/profile/components";

export const metadata: Metadata = {
  title: "Career Profile | Elev8",
  description: "View and edit your personal career context, skills, and goals",
};

export default async function ProfilePage() {
  const profile = await getProfileAction();

  return (
    <div className="max-w-5xl mx-auto pb-14">
      <ProfileWorkspace initialProfile={profile} />
    </div>
  );
}
