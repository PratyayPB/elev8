"use client";

import React from "react";
import Link from "next/link";
import { PlusCircle, FileText, ArrowRight, LayoutTemplate } from "lucide-react";

interface QuickActionsProps {
  latestResumeId?: string;
}

export function QuickActions({ latestResumeId }: QuickActionsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Link
        href="/dashboard/resumes/new"
        className="p-5 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition-colors flex flex-col justify-between group"
      >
        <div className="flex items-center justify-between mb-4">
          <PlusCircle className="w-6 h-6" />
          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Upload Resume</h3>
          <p className="text-xs text-gray-400 mt-1">Get AI scoring and ATS feedback</p>
        </div>
      </Link>

      <Link
        href="/dashboard/resumes/builder"
        className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-black transition-colors flex flex-col justify-between group"
      >
        <div className="flex items-center justify-between mb-4">
          <LayoutTemplate className="w-6 h-6 text-gray-700" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">Resume Builder</h3>
          <p className="text-xs text-gray-500 mt-1">Build ATS-friendly profiles from scratch</p>
        </div>
      </Link>

      {latestResumeId ? (
        <Link
          href={`/dashboard/resumes/${latestResumeId}`}
          className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-black transition-colors flex flex-col justify-between group"
        >
          <div className="flex items-center justify-between mb-4">
            <FileText className="w-6 h-6 text-gray-700" />
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Latest Assessment</h3>
            <p className="text-xs text-gray-500 mt-1">View recommendations & keyword audits</p>
          </div>
        </Link>
      ) : (
        <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl opacity-60 flex flex-col justify-between">
          <FileText className="w-6 h-6 text-gray-400 mb-4" />
          <div>
            <h3 className="font-semibold text-lg text-gray-400">Latest Assessment</h3>
            <p className="text-xs text-gray-400 mt-1">No assessments completed yet</p>
          </div>
        </div>
      )}

      <Link
        href="/dashboard/resumes/builder/templates"
        className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-black transition-colors flex flex-col justify-between group"
      >
        <div className="flex items-center justify-between mb-4">
          <LayoutTemplate className="w-6 h-6 text-gray-700" />
          <span className="text-[10px] font-semibold uppercase bg-gray-100 px-2 py-0.5 rounded text-gray-600">
            Templates
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">Browse Templates</h3>
          <p className="text-xs text-gray-500 mt-1">Select from Classic, Modern, or Minimal</p>
        </div>
      </Link>
    </div>
  );
}
