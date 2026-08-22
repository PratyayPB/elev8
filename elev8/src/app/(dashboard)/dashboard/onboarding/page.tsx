import type { Metadata } from "next";
import { getProfileAction } from "@/features/profile/services/actions";
import { ProfileSetupForm } from "@/features/profile/components";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Profile Setup | Elev8",
  description: "Personalize your AI career profile and preferences",
};

export default async function OnboardingPage() {
  const profile = await getProfileAction();

  if (profile) {
    redirect("/dashboard");
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">
          Create Your Career Profile
        </h1>
        <p className="text-sm font-sans text-text-secondary mt-1">
          Provide your current career context, background, and goals to enable tailored roadmaps,
          interview simulations, and recommendations.
        </p>
      </div>

      <ProfileSetupForm />
    </div>
  );
}
