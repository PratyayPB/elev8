import type { Metadata } from "next";
import { getOrCreateDbUser } from "@/lib/auth";
import { ResumeBuilderService } from "@/features/resume-builder/services/resume-builder.service";
import { BuilderWorkspace } from "@/features/resume-builder/components/workspace/builder-workspace";

export const metadata: Metadata = {
  title: "My Resumes | Elev8",
  description: "Create and manage your professional resumes.",
};

export default async function ResumeBuilderPage() {
  const dbUser = await getOrCreateDbUser();
  const resumes = await ResumeBuilderService.listUserResumes(dbUser.id);

  return <BuilderWorkspace initialResumes={resumes} />;
}
