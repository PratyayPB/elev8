import React from "react";
import { ResumeBuilderLayout, BuilderSidebar, BuilderToolbar, ResumePreview, EmptyBuilder } from "@/features/resume-builder/components";

export default function NewResumePage() {
  return (
    <ResumeBuilderLayout
      sidebar={<BuilderSidebar />}
      toolbar={<BuilderToolbar />}
      preview={<ResumePreview />}
    >
      <EmptyBuilder />
    </ResumeBuilderLayout>
  );
}
