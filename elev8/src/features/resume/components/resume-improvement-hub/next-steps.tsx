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
        <h3 className="text-xl font-display font-black text-text-primary uppercase tracking-wide">Recommended Elev8 Actions</h3>
        <p className="text-xs text-text-secondary mt-0.5">
          Bridge your resume gaps by leveraging Elev8&apos;s AI learning roadmaps and mock interview simulator.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Roadmap Generator */}
        <ActionCard
          title="Generate Skill Roadmap"
          description={`Create a personalized learning roadmap pre-filled with missing skills like ${keywords.missingKeywords.slice(0, 2).join(", ") || "target tech"}.`}
          badge="Learning Path"
          icon={Map}
          href={`/dashboard/roadmaps/new?${roadmapQuery}`}
          ctaText="Build Roadmap"
          accentBg="bg-accent-cyan/20 border border-accent-cyan/30 text-text-primary"
        />

        {/* Practice Interview */}
        <ActionCard
          title="Practice Mock Interview"
          description={`Simulate technical interview questions tailored to ${role} level.`}
          badge="Interview Sim"
          icon={MessageSquareCode}
          href={`/dashboard/interviews/new?${interviewQuery}`}
          ctaText="Start Interview"
          accentBg="bg-accent-cream border border-border-subtle text-text-primary"
        />

        {/* Career Assessment */}
        <ActionCard
          title="Career Assessment"
          description="Explore market readiness, strengths, and career progression paths."
          badge="Career Advice"
          icon={Compass}
          href="/dashboard/career-assessment"
          ctaText="View Assessment"
          accentBg="bg-surface-muted border border-border-subtle text-text-primary"
        />

        {/* Resume Builder Placeholder */}
        <ActionCard
          title="AI Resume Builder"
          description="Transform this assessment directly into a beautifully formatted, ATS-optimized CV."
          badge="Coming Soon"
          icon={FileText}
          href="#"
          ctaText="Open Builder"
          accentBg="bg-accent-coral/20 border border-accent-coral/30 text-text-primary"
        />
      </div>
    </div>
  );
}
