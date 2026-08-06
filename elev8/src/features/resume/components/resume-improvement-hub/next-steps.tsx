"use client";

import { ResumeReport } from "../../types";
import { ActionCard } from "./action-card";
import { Compass, Map, MessageSquareCode, FileText } from "lucide-react";

interface NextStepsProps {
  report: ResumeReport;
}

export function NextStepsComponent({ report }: NextStepsProps) {
  const { artifact, keywords } = report;
  const role = artifact.metadata.role;

  // Pre-filled query parameters for cross-module navigation
  const roadmapQuery = new URLSearchParams({
    role,
    missingSkills: keywords.missingKeywords.join(","),
  }).toString();

  const interviewQuery = new URLSearchParams({
    role,
    level: artifact.metadata.experienceLevel,
  }).toString();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recommended Elev8 Actions</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Bridge your resume gaps by leveraging Elev8's AI learning roadmaps and mock interview simulator.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Roadmap Generator */}
        <ActionCard
          title="Generate Skill Roadmap"
          description={`Create a personalized learning roadmap pre-filled with missing skills like ${keywords.missingKeywords.slice(0, 2).join(", ") || "target tech"}.`}
          badge="Learning Path"
          icon={Map}
          href={`/roadmaps/new?${roadmapQuery}`}
          ctaText="Build Roadmap"
          accentBg="bg-blue-600"
        />

        {/* Practice Interview */}
        <ActionCard
          title="Practice Mock Interview"
          description={`Simulate technical interview questions tailored to ${role} level.`}
          badge="Interview Sim"
          icon={MessageSquareCode}
          href={`/interviews/new?${interviewQuery}`}
          ctaText="Start Interview"
          accentBg="bg-indigo-600"
        />

        {/* Career Guidance */}
        <ActionCard
          title="Career Guidance Report"
          description="Explore market readiness, salary ranges, and career progression paths."
          badge="Career Advice"
          icon={Compass}
          href="/career-guidance"
          ctaText="View Guidance"
          accentBg="bg-emerald-600"
        />

        {/* Resume Builder Placeholder */}
        <ActionCard
          title="AI Resume Builder"
          description="Transform this assessment directly into a beautifully formatted, ATS-optimized CV."
          badge="Coming Soon"
          icon={FileText}
          href="#"
          ctaText="Open Builder"
          accentBg="bg-purple-600"
        />
      </div>
    </div>
  );
}
