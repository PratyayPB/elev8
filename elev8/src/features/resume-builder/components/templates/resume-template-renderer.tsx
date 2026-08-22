import React from "react";
import { BuilderResumeArtifact, ResumeBuilderTemplate } from "../../types";
import { ClassicTemplate } from "./classic-template";
import { ModernTemplate } from "./modern-template";
import { MinimalTemplate } from "./minimal-template";

interface ResumeTemplateRendererProps {
  artifact: BuilderResumeArtifact;
  template?: ResumeBuilderTemplate;
}

export function ResumeTemplateRenderer({
  artifact,
  template = "CLASSIC",
}: ResumeTemplateRendererProps) {
  switch (template) {
    case "MODERN":
      return <ModernTemplate artifact={artifact} />;
    case "MINIMAL":
      return <MinimalTemplate artifact={artifact} />;
    case "CLASSIC":
    default:
      return <ClassicTemplate artifact={artifact} />;
  }
}
