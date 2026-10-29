import type { Metadata } from "next";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getOrCreateDbUser } from "@/lib/auth";
import {
  AccountSection,
  AIPreferencesSection,
  NotificationsSection,
  SecuritySection,
  BillingSection,
  DangerZoneSection,
} from "@/features/settings/components";

export const metadata: Metadata = {
  title: "Settings | Elev8",
  description: "Manage your account, AI preferences, notifications, and security.",
};

export default async function SettingsPage() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/sign-in");
  }

  // Ensure user is synchronized with local Postgres DB and fetch persisted LLM preference
  const dbUser = await getOrCreateDbUser();

  const primaryEmail = clerkUser.emailAddresses?.[0]?.emailAddress || null;
  const externalAccount = clerkUser.externalAccounts?.[0];
  const providerName = externalAccount?.provider
    ? externalAccount.provider.replace(/^oauth_/, "").toUpperCase()
    : null;
  const authProvider = providerName ? `${providerName} (OAuth)` : "Email & Password";

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 px-4 sm:px-6 pt-2">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">
          Settings
        </h1>
        <p className="text-sm font-sans text-text-secondary">
          Configure your personal account preferences, intelligence profiles, and platform security.
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* 1. Account */}
        <AccountSection
          email={primaryEmail}
          authProvider={authProvider}
          planName="Free Plan"
        />

        {/* 2. AI Preferences */}
        <AIPreferencesSection initialPreference={dbUser.llmPreference} />

        {/* 3. Notifications */}
        <NotificationsSection />

        {/* 4. Security */}
        <SecuritySection />

        {/* 5. Billing & Subscription */}
        <BillingSection currentPlan="Free Plan" />

        {/* 6. Danger Zone */}
        <DangerZoneSection />
      </div>
    </div>
  );
}
