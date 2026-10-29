"use client";

import { ResumeReport } from "../../types";
import { ScoreCard } from "./score-card";
import { ResumeRadarChart } from "./resume-radar-chart";
import { SectionScoreChart } from "./section-score-chart";
import { Calendar, CheckCircle, AlertTriangle, Cpu, Briefcase, FileCode2, GraduationCap } from "lucide-react";

interface OverviewCardProps {
  report: ResumeReport;
}

export function OverviewCard({ report }: OverviewCardProps) {
  const { artifact } = report;
  const { metadata, overallAssessment, sectionAssessment } = artifact;

  const sections = sectionAssessment.sections;
  const formattedDate = new Date(metadata.assessmentDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden text-text-primary">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-dashboard-metricHighlight border border-border-strong rounded-full text-[10px] font-black text-text-primary uppercase tracking-wider">
                {metadata.role}
              </span>
              <span className="px-3 py-1 bg-surface-muted border border-border-subtle rounded-full text-[10px] font-black text-text-secondary uppercase tracking-wider">
                {metadata.experienceLevel} Level
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-text-primary uppercase">
              Resume Assessment Audit
            </h1>
            <p className="text-xs text-text-secondary mt-1.5 flex items-center gap-2 font-medium">
              <Calendar className="w-3.5 h-3.5 text-text-muted" /> Assessed on {formattedDate} • Version {metadata.artifactVersion}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-surface-muted border border-border-subtle p-4 rounded-2xl">
            <div className="text-center px-2">
              <span className="text-3xl font-display font-black text-text-primary">{overallAssessment.overallScore}</span>
              <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mt-0.5">Overall</p>
            </div>
            <div className="w-px h-10 bg-border-subtle" />
            <div className="text-center px-2">
              <span className="text-3xl font-display font-black text-text-primary">{overallAssessment.atsScore}</span>
              <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mt-0.5">ATS Score</p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-2xl p-5 flex items-start gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-dashboard-metricHighlight text-text-primary border border-border-strong flex items-center justify-center shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-display font-black text-text-primary uppercase tracking-wide">Top Highlight</h4>
            <p className="text-xs text-text-secondary mt-1.5 leading-relaxed font-medium">
              {overallAssessment.strengths[0] || "Strong foundational skills and clear section structure."}
            </p>
          </div>
        </div>

        <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-2xl p-5 flex items-start gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-accent-coral/20 text-text-primary border border-accent-coral flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-display font-black text-text-primary uppercase tracking-wide">Highest Priority Gap</h4>
            <p className="text-xs text-text-secondary mt-1.5 leading-relaxed font-medium">
              {overallAssessment.weaknesses[0] || "Incorporate quantifiable achievements to boost recruiter engagement."}
            </p>
          </div>
        </div>
      </div>

      {/* Recharts Visualizations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResumeRadarChart overallAssessment={overallAssessment} />
        <SectionScoreChart sectionAssessment={sectionAssessment} />
      </div>

      {/* Grid of score metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ScoreCard title="Technical Stack" score={sections.skills.score} icon={Cpu} accentColor="text-text-primary" />
        <ScoreCard title="Project Quality" score={sections.projects.score} icon={FileCode2} accentColor="text-text-primary" />
        <ScoreCard title="Work Experience" score={sections.experience.score} icon={Briefcase} accentColor="text-text-primary" />
        <ScoreCard title="Education" score={sections.education.score} icon={GraduationCap} accentColor="text-text-primary" />
      </div>
    </div>
  );
}
