import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { isProfileComplete } from "@/lib/profile";
import { InterviewWizard } from "@/features/interview/components/interview-wizard";
import { Metadata } from "next";
import { PageHeader } from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Generate Interview | Elev8",
  description: "Create a mock interview simulation.",
};

export default async function NewInterviewPage() {
  const { userId: clerkId } = await auth();
  if (!clerkId) redirect("/sign-in");

  const dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (!dbUser) redirect("/dashboard/interviews");

  const profileComplete = await isProfileComplete(dbUser.id);
  if (!profileComplete) redirect("/dashboard/interviews");

  return (
    <div className="space-y-8 pb-10">
      <PageHeader
        section="Mock Configuration"
        title="Generate Interview"
        description="Select a role, interview type, and difficulty, or personalize with your profile context to begin practice."
      />

      <InterviewWizard />
    </div>
  );
}

