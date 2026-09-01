"use client";

import React from "react";
import Link from "next/link";
import {
  LayoutTemplate,
  FileCheck2,
  ArrowUpRight,
  Sparkles,
  FileText,
  CheckCircle2,
} from "lucide-react";

interface QuickActionsProps {
  latestResumeId?: string;
}

export function QuickActions({ latestResumeId }: QuickActionsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {/* Card 1: Build Resume */}
      <Link
        href="/dashboard/resumes/builder"
        className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl border transition-all duration-300 ease-out cursor-pointer overflow-hidden
          bg-white text-zinc-900 border-zinc-200/90 shadow-sm
          hover:scale-[1.02] hover:bg-black hover:text-white hover:border-black hover:shadow-xl
          dark:bg-black dark:text-white dark:border-zinc-800 dark:shadow-md
          dark:hover:scale-[1.02] dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-2xl
          active:scale-[0.99]"
      >
        <div className="space-y-5">
          {/* Top Row: Icon + Arrow */}
          <div className="flex items-center justify-between">
            <div
              className="p-3.5 rounded-xl border transition-colors duration-300
                bg-zinc-100 text-zinc-900 border-zinc-200
                group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-800
                dark:bg-zinc-900 dark:text-white dark:border-zinc-800
                dark:group-hover:bg-zinc-100 dark:group-hover:text-black dark:group-hover:border-zinc-200"
            >
              <LayoutTemplate className="w-6 h-6" />
            </div>

            <div
              className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300
                border-zinc-200 text-zinc-600
                group-hover:border-zinc-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                dark:border-zinc-800 dark:text-zinc-400
                dark:group-hover:border-zinc-300 dark:group-hover:text-black"
            >
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
              Build Resume
            </h2>
            <p
              className="text-sm font-sans mt-2 leading-relaxed transition-colors duration-300
                text-zinc-500
                group-hover:text-zinc-300
                dark:text-zinc-400
                dark:group-hover:text-zinc-600"
            >
              Create tailored, ATS-friendly resumes and professional profiles from scratch with AI assistance.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {["Custom Templates", "Live Preview", "PDF Export"].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-display font-medium border transition-colors duration-300
                  bg-zinc-50 text-zinc-600 border-zinc-200/80
                  group-hover:bg-zinc-900 group-hover:text-zinc-200 group-hover:border-zinc-800
                  dark:bg-zinc-900/80 dark:text-zinc-400 dark:border-zinc-800
                  dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-800 dark:group-hover:border-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div
          className="pt-6 mt-6 border-t flex items-center justify-between text-xs font-display font-bold transition-colors duration-300
            border-zinc-100 text-zinc-900
            group-hover:border-zinc-800 group-hover:text-yellow-400
            dark:border-zinc-900 dark:text-white
            dark:group-hover:border-zinc-200 dark:group-hover:text-zinc-900"
        >
          <span>Launch Resume Builder</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </Link>

      {/* Card 2: Score Resume */}
      <Link
        href="/dashboard/resumes/new"
        className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl border transition-all duration-300 ease-out cursor-pointer overflow-hidden
          bg-white text-zinc-900 border-zinc-200/90 shadow-sm
          hover:scale-[1.02] hover:bg-black hover:text-white hover:border-black hover:shadow-xl
          dark:bg-black dark:text-white dark:border-zinc-800 dark:shadow-md
          dark:hover:scale-[1.02] dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-2xl
          active:scale-[0.99]"
      >
        <div className="space-y-5">
          {/* Top Row: Icon + Arrow */}
          <div className="flex items-center justify-between">
            <div
              className="p-3.5 rounded-xl border transition-colors duration-300
                bg-zinc-100 text-zinc-900 border-zinc-200
                group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-800
                dark:bg-zinc-900 dark:text-white dark:border-zinc-800
                dark:group-hover:bg-zinc-100 dark:group-hover:text-black dark:group-hover:border-zinc-200"
            >
              <Sparkles className="w-6 h-6" />
            </div>

            <div
              className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300
                border-zinc-200 text-zinc-600
                group-hover:border-zinc-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                dark:border-zinc-800 dark:text-zinc-400
                dark:group-hover:border-zinc-300 dark:group-hover:text-black"
            >
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
              Score Resume
            </h2>
            <p
              className="text-sm font-sans mt-2 leading-relaxed transition-colors duration-300
                text-zinc-500
                group-hover:text-zinc-300
                dark:text-zinc-400
                dark:group-hover:text-zinc-600"
            >
              Upload your existing resume PDF for instant AI scoring, ATS keyword audits, and actionable feedback.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {["ATS Compatibility", "AI Deep Feedback", "Keyword Gaps"].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-display font-medium border transition-colors duration-300
                  bg-zinc-50 text-zinc-600 border-zinc-200/80
                  group-hover:bg-zinc-900 group-hover:text-zinc-200 group-hover:border-zinc-800
                  dark:bg-zinc-900/80 dark:text-zinc-400 dark:border-zinc-800
                  dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-800 dark:group-hover:border-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div
          className="pt-6 mt-6 border-t flex items-center justify-between text-xs font-display font-bold transition-colors duration-300
            border-zinc-100 text-zinc-900
            group-hover:border-zinc-800 group-hover:text-yellow-400
            dark:border-zinc-900 dark:text-white
            dark:group-hover:border-zinc-200 dark:group-hover:text-zinc-900"
        >
          <span>Upload & Score Resume</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </Link>
    </div>
  );
}
