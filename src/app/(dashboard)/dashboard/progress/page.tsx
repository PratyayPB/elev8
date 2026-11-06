import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { PageHeader, SectionHeader } from "@/components/dashboard";
import { ProgressService } from "@/features/progress/services";
import {
  ModuleProgressGrid,
  ActivityLedgerTimeline,
} from "@/features/progress/components";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Progress Tracker | Elev8",
  description:
    "Track your career milestones, module statuses, and next best actions.",
};

export default async function ProgressPage() {
  const dbUser = await getOrCreateDbUser().catch(() => null);
  if (!dbUser) {
    redirect(ROUTES.SIGN_IN);
  }

  const data = await ProgressService.getDashboardData(dbUser.id);

  return (
    <div className="space-y-10 max-w-7xl mx-auto pb-10">
      <PageHeader
        title="Progress"
        description="Track your real-time module status and chronological activity ledger."
        section="Analytics"
      />

      {/* 1. Current State Across All 5 Modules */}
      <section className="space-y-3">
        <SectionHeader title="Module Overview" />
        <ModuleProgressGrid progress={data.progress} />
      </section>

      {/* 2. Activity Ledger Timeline */}
      <section className="space-y-3">
        <SectionHeader title="Activity Timeline" />
        <ActivityLedgerTimeline activities={data.recentActivities} />
      </section>
    </div>
  );
}
