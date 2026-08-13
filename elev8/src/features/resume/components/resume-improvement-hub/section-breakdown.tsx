"use client";

import { useState } from "react";
import { ResumeReport } from "../../types";
import { SectionCard } from "./section-card";
import { ResumePreview } from "./resume-preview";
import { useResumeSections } from "../../hooks/use-resume-sections";
import { Layers, Eye, Code, Briefcase, FileCode2, GraduationCap, Award } from "lucide-react";

interface SectionBreakdownProps {
  report: ResumeReport;
}

const sectionKeys = ["summary", "skills", "projects", "experience", "education", "certifications"];

export function SectionBreakdown({ report }: SectionBreakdownProps) {
  const { artifact } = report;
  const { sectionAssessment, parsedResume } = artifact;
  const sections = sectionAssessment.sections;

  const { expandedSections, toggleSection, expandAll, collapseAll } = useResumeSections(sectionKeys);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-display font-black text-text-primary flex items-center gap-2 uppercase tracking-wide">
            <Layers className="w-5 h-5 text-text-primary" /> Section-by-Section Breakdown
          </h3>
          <p className="text-xs text-text-secondary mt-0.5">
            Expand each section to inspect scores, strengths, gaps, and recommendations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border border-dashboard-cardBorder text-xs font-semibold text-text-primary bg-dashboard-card hover:bg-surface-muted transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            {showPreview ? "Hide Parsed CV" : "Preview Parsed CV"}
          </button>

          <button
            type="button"
            onClick={expandAll}
            className="px-3 py-1.5 rounded-2xl border border-dashboard-cardBorder text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
          >
            Expand All
          </button>

          <button
            type="button"
            onClick={collapseAll}
            className="px-3 py-1.5 rounded-2xl border border-dashboard-cardBorder text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {showPreview && <ResumePreview parsedResume={parsedResume} />}

      <div className="space-y-4">
        {/* Summary Section */}
        <SectionCard
          title="Professional Summary"
          scoreData={sections.summary}
          isExpanded={expandedSections["summary"]}
          onToggle={() => toggleSection("summary")}
        >
          {parsedResume.summary && (
            <div className="bg-surface-muted border border-border-subtle p-3.5 rounded-2xl text-xs text-text-secondary leading-relaxed font-medium">
              <p className="font-bold text-text-primary mb-1 uppercase tracking-wide text-[10px]">Parsed Text:</p>
              {parsedResume.summary}
            </div>
          )}
        </SectionCard>

        {/* Skills Section */}
        <SectionCard
          title="Technical & Soft Skills"
          scoreData={sections.skills}
          isExpanded={expandedSections["skills"]}
          onToggle={() => toggleSection("skills")}
        >
          {parsedResume.skills.length > 0 && (
            <div className="bg-surface-muted border border-border-subtle p-3.5 rounded-2xl text-xs space-y-2">
              <p className="font-bold text-text-primary uppercase tracking-wide text-[10px]">Parsed Skills ({parsedResume.skills.length}):</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {parsedResume.skills.map((sk, i) => (
                  <span key={i} className="px-2 py-1 bg-dashboard-card rounded-xl border border-dashboard-cardBorder font-semibold text-text-primary text-[10px]">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          )}
        </SectionCard>

        {/* Projects Section */}
        <SectionCard
          title="Projects & Portfolio"
          scoreData={sections.projects}
          isExpanded={expandedSections["projects"]}
          onToggle={() => toggleSection("projects")}
        />

        {/* Experience Section */}
        <SectionCard
          title="Work Experience"
          scoreData={sections.experience}
          isExpanded={expandedSections["experience"]}
          onToggle={() => toggleSection("experience")}
        />

        {/* Education Section */}
        <SectionCard
          title="Education & Credentials"
          scoreData={sections.education}
          isExpanded={expandedSections["education"]}
          onToggle={() => toggleSection("education")}
        />

        {/* Certifications Section */}
        {sections.certifications && (
          <SectionCard
            title="Certifications & Honors"
            scoreData={sections.certifications}
            isExpanded={expandedSections["certifications"]}
            onToggle={() => toggleSection("certifications")}
          />
        )}
      </div>
    </div>
  );
}
