"use client";

import React from "react";
import { ResumeSummary } from "../../types/workspace";
import { ResumeCard } from "./resume-card";

interface ResumeLibraryProps {
  groupedResumes: {
    processing: ResumeSummary[];
    completed: ResumeSummary[];
    archived: ResumeSummary[];
  };
  onDelete?: (id: string) => void;
  onRescore?: (resume: ResumeSummary) => void;
}

export function ResumeLibrary({ groupedResumes, onDelete, onRescore }: ResumeLibraryProps) {
  const { processing, completed, archived } = groupedResumes;
  const hasResumes = processing.length > 0 || completed.length > 0 || archived.length > 0;

  if (!hasResumes) {
    return (
      <div className="p-8 text-center bg-gray-50 border border-gray-200 border-dashed rounded-xl my-6">
        <p className="text-sm text-gray-500">No resumes match your filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 my-6">
      {processing.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-700 mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full bg-amber-500 mr-2 animate-pulse" />
            Processing Assessment ({processing.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processing.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} onDelete={onDelete} onRescore={onRescore} />
            ))}
          </div>
        </div>
      )}

      {completed.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3">
            Completed Assessments ({completed.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completed.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} onDelete={onDelete} onRescore={onRescore} />
            ))}
          </div>
        </div>
      )}

      {archived.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
            Archived ({archived.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 opacity-75">
            {archived.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} onDelete={onDelete} onRescore={onRescore} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
