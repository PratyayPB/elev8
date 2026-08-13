import React from "react";
import Link from "next/link";
import { BUILDER_ROUTES } from "@/features/resume-builder/constants/builder-routes";

export default function ResumeBuilderHomePage() {
  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Resume Builder</h1>
        <p className="text-gray-500 mt-2">Manage and edit your resumes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href={BUILDER_ROUTES.NEW}>
          <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center h-48 hover:border-black hover:bg-gray-50 transition-colors">
            <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
              <span className="text-xl leading-none">+</span>
            </div>
            <h3 className="font-medium">Create New Resume</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
