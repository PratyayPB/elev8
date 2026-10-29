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
          bg-dashboard-card text-text-primary border-dashboard-cardBorder shadow-sm
          hover:scale-[1.01] hover:bg-[#f8f6f3] dark:hover:bg-[#262626] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md
          active:scale-[0.99]"
      >
        <div className="space-y-5">
          {/* Top Row: Icon + Arrow */}
          <div className="flex items-center justify-between">
            <div
              className="p-3.5 rounded-xl border transition-all duration-300
                bg-surface-muted dark:bg-[#181818] text-text-primary border-border-subtle
                group-hover:scale-105 group-hover:border-text-primary/30"
            >
              <LayoutTemplate className="w-6 h-6" />
            </div>

            <div
              className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300
                border-border-subtle text-text-secondary
                group-hover:border-text-primary/40 group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-text-primary">
              Build Resume
            </h2>
            <p className="text-sm font-sans mt-2 leading-relaxed text-text-secondary">
              Create tailored, ATS-friendly resumes and professional profiles from scratch with AI assistance.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {["Custom Templates", "Live Preview", "PDF Export"].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-display font-medium border transition-colors duration-300
                  bg-surface-muted text-text-secondary border-border-subtle
                  group-hover:border-text-primary/25"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div
          className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between text-xs font-display font-bold transition-colors duration-300
            text-text-primary group-hover:text-primary dark:group-hover:text-brand-accent-400"
        >
          <span>Launch Resume Builder</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </Link>

      {/* Card 2: Score Resume */}
      <Link
        href="/dashboard/resumes/new"
        className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl border transition-all duration-300 ease-out cursor-pointer overflow-hidden
          bg-dashboard-card text-text-primary border-dashboard-cardBorder shadow-sm
          hover:scale-[1.01] hover:bg-[#f8f6f3] dark:hover:bg-[#262626] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md
          active:scale-[0.99]"
      >
        <div className="space-y-5">
          {/* Top Row: Icon + Arrow */}
          <div className="flex items-center justify-between">
            <div
              className="p-3.5 rounded-xl border transition-all duration-300
                bg-surface-muted dark:bg-[#181818] text-text-primary border-border-subtle
                group-hover:scale-105 group-hover:border-text-primary/30"
            >
              <Sparkles className="w-6 h-6" />
            </div>

            <div
              className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300
                border-border-subtle text-text-secondary
                group-hover:border-text-primary/40 group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-text-primary">
              Score Resume
            </h2>
            <p className="text-sm font-sans mt-2 leading-relaxed text-text-secondary">
              Upload your existing resume PDF for instant AI scoring, ATS keyword audits, and actionable feedback.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {["ATS Compatibility", "AI Deep Feedback", "Keyword Gaps"].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-display font-medium border transition-colors duration-300
                  bg-surface-muted text-text-secondary border-border-subtle
                  group-hover:border-text-primary/25"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div
          className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between text-xs font-display font-bold transition-colors duration-300
            text-text-primary group-hover:text-primary dark:group-hover:text-brand-accent-400"
        >
          <span>Upload & Score Resume</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </Link>
    </div>
  );
}
