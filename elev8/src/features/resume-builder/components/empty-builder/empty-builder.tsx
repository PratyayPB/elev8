import React from "react";
import { ComingSoonCard } from "../coming-soon/coming-soon-card";

export function EmptyBuilder() {
  return (
    <div className="h-full flex items-center justify-center">
      <ComingSoonCard 
        title="Resume Editor" 
        description="Select a section from the sidebar to start editing your resume. This functionality will be available in the next phase."
      />
    </div>
  );
}
