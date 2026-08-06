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
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" /> Section-by-Section Breakdown
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Expand each section to inspect scores, strengths, gaps, and recommendations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            {showPreview ? "Hide Parsed CV" : "Preview Parsed CV"}
          </button>

          <button
            type="button"
            onClick={expandAll}
            className="px-3 py-1.5 rounded-xl border text-xs font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:border-gray-700"
          >
            Expand All
          </button>

          <button
            type="button"
            onClick={collapseAll}
            className="px-3 py-1.5 rounded-xl border text-xs font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:border-gray-700"
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
            <div className="bg-gray-50 dark:bg-gray-900/40 p-3 rounded-xl text-xs text-gray-700 dark:text-gray-300">
              <p className="font-semibold text-gray-500 mb-1">Parsed Text:</p>
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
            <div className="bg-gray-50 dark:bg-gray-900/40 p-3 rounded-xl text-xs space-y-1">
              <p className="font-semibold text-gray-500">Parsed Skills ({parsedResume.skills.length}):</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {parsedResume.skills.map((sk, i) => (
                  <span key={i} className="px-2 py-0.5 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 font-medium">
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
