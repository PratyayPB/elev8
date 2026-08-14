import type { Metadata } from "next";
import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CreateResumeForm } from "@/features/resume-builder/components";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BUILDER_ROUTES } from "@/features/resume-builder/constants/builder-routes";

export const metadata: Metadata = {
  title: "Create Resume | Elev8",
  description: "Create a new resume prefilled with your profile data.",
};

export default async function NewResumePage() {
  const dbUser = await getOrCreateDbUser();

  const profile = await prisma.userProfile.findUnique({
    where: { userId: dbUser.id },
    select: { currentRole: true },
  });

  const defaultTargetRole = profile?.currentRole || "";

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-10">
      <div>
        <Link
          href={BUILDER_ROUTES.HOME}
          className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors mb-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Resumes
        </Link>
        <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">
          Create New Resume
        </h1>
        <p className="text-sm font-sans text-text-secondary mt-1">
          Provide basic metadata for your new resume. The builder will initialize the resume with data from your profile.
        </p>
      </div>

      <div className="rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 shadow-sm">
        <CreateResumeForm defaultTargetRole={defaultTargetRole} />
      </div>
    </div>
  );
}
