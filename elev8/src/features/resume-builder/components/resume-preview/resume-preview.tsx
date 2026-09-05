import React from "react";
import { BuilderResumeArtifact, ResumeBuilderTemplate } from "../../types";
import { ResumeTemplateRenderer } from "../templates/resume-template-renderer";

interface ResumePreviewProps {
  artifact: BuilderResumeArtifact;
  template?: ResumeBuilderTemplate;
  scale?: number;
}

export function ResumePreview({
  artifact,
  template = "CLASSIC",
}: ResumePreviewProps) {
  return (
    <div className="w-full h-[78vh] bg-slate-100 p-4 sm:p-6 overflow-y-auto rounded-2xl border border-border shadow-inner flex flex-col items-center">
      <div className="w-full max-w-[800px] min-h-[1130px] bg-white shadow-xl rounded-sm overflow-hidden transition-all duration-300 transform origin-top flex flex-col flex-1">
        <ResumeTemplateRenderer artifact={artifact} template={template} />
      </div>
    </div>
  );
}
