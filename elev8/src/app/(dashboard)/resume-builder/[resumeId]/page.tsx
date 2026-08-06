import React from "react";
import { ResumeBuilderLayout, BuilderSidebar, BuilderToolbar, ResumePreview, EmptyBuilder } from "@/features/resume-builder/components";

export default async function EditResumePage({ params }: { params: Promise<{ resumeId: string }> }) {
  const resolvedParams = await params;
  return (
    <ResumeBuilderLayout
      sidebar={<BuilderSidebar />}
      toolbar={<BuilderToolbar />}
      preview={<ResumePreview />}
    >
      <div className="p-4 bg-blue-50 text-blue-800 rounded-md mb-6">
        Editing Resume ID: {resolvedParams.resumeId}
      </div>
      <EmptyBuilder />
    </ResumeBuilderLayout>
  );
}
