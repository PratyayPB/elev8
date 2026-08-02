import type { Metadata } from "next";
import { getProfileOrSyncAction } from "@/features/profile/services/actions";
import { OnboardingWizard } from "@/features/profile/components/onboarding-wizard";

export const metadata: Metadata = {
  title: "Onboarding | Elev8",
  description: "Personalize your AI career experience",
};

export default async function OnboardingPage() {
  const profile = await getProfileOrSyncAction();

  return <OnboardingWizard initialProfile={profile} />;
}
