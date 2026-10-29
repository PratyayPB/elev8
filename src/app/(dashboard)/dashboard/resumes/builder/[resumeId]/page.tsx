import React from "react";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { BUILDER_ROUTES } from "@/features/resume-builder/constants/builder-routes";
import { getOrCreateDbUser } from "@/lib/auth";
import { ResumeBuilderService, ResumeBuilderError } from "@/features/resume-builder/services/resume-builder.service";
import { ResumeEditor } from "@/features/resume-builder/components";

interface EditResumePageProps {
  params: Promise<{
    resumeId: string;
  }>;
}

export async function generateMetadata({ params }: EditResumePageProps) {
  const { resumeId } = await params;
  return {
    title: `Edit Resume #${resumeId.slice(0, 8)} | Elev8 Builder`,
    description: "Build and customize your professional resume.",
  };
}

export default async function EditResumePage({ params }: EditResumePageProps) {
  const resolvedParams = await params;
  const { resumeId } = resolvedParams;

  try {
    const dbUser = await getOrCreateDbUser();
    
    // Fetch resume metadata & artifact
    const resume = await ResumeBuilderService.getResume(dbUser.id, resumeId);
    const initialArtifact = await ResumeBuilderService.getResumeArtifact(dbUser.id, resumeId);

    return (
      <ResumeEditor
        resume={resume}
        initialArtifact={initialArtifact}
      />
    );
  } catch (error: any) {
    let errorMessage = "An error occurred while loading your resume.";
    let errorTitle = "Unable to Load Resume";

    if (error instanceof ResumeBuilderError) {
      if (error.statusCode === 404) {
        errorTitle = "Resume Not Found";
        errorMessage = "The resume you are looking for does not exist or has been deleted.";
      } else if (error.statusCode === 403) {
        errorTitle = "Access Denied";
        errorMessage = "You do not have permission to view or edit this resume.";
      }
    }

    return (
      <div className="max-w-md mx-auto my-20 p-8 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card text-center shadow-sm">
        <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 mx-auto mb-4">
          <AlertCircle className="h-6 w-6" />
        </div>
        <h2 className="text-lg font-display font-bold text-text-primary">
          {errorTitle}
        </h2>
        <p className="text-sm font-sans text-text-secondary mt-2">
          {errorMessage}
        </p>
        <div className="mt-6">
          <Link
            href={BUILDER_ROUTES.HOME}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-muted hover:bg-border-subtle text-text-primary text-xs font-semibold border border-border transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Resumes
          </Link>
        </div>
      </div>
    );
  }
}
