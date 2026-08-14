"use client";

import React from "react";
import Link from "next/link";
import { FileUp, Sparkles, LayoutTemplate } from "lucide-react";

export function EmptyWorkspace() {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white border border-gray-200 border-dashed rounded-xl text-center my-8">
      <div className="p-4 bg-gray-50 rounded-full mb-4">
        <FileUp className="w-8 h-8 text-gray-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">No Resume Assessments Yet</h3>
      <p className="text-sm text-gray-500 max-w-md mb-6">
        Upload your first resume PDF to receive instant AI scoring, ATS keyword density audits, and section-by-section improvements.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/dashboard/resumes/new"
          className="px-5 py-2.5 bg-black text-white font-medium text-sm rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center space-x-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Upload First Resume</span>
        </Link>
        <Link
          href="/dashboard/resumes/builder"
          className="px-5 py-2.5 border border-gray-300 font-medium text-sm rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2 text-gray-700"
        >
          <LayoutTemplate className="w-4 h-4" />
          <span>Explore Resume Builder</span>
        </Link>
      </div>
    </div>
  );
}
