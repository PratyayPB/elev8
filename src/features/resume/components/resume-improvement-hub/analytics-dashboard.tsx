"use client";

import { ResumeReport } from "../../types";
import { ResumeRadarChart } from "./resume-radar-chart";
import { SectionScoreChart } from "./section-score-chart";
import { BarChart3, FileText, Code2, Briefcase, GraduationCap, Award, Percent } from "lucide-react";

interface AnalyticsDashboardProps {
  report: ResumeReport;
}

export function AnalyticsDashboard({ report }: AnalyticsDashboardProps) {
  const { analytics, overallAssessment, sectionAssessment } = report.artifact;

  const stats = [
    { label: "Word Count", value: analytics.wordCount, icon: FileText },
    { label: "Skills Identified", value: analytics.skillCount, icon: Code2 },
    { label: "Projects Included", value: analytics.projectCount, icon: BarChart3 },
    { label: "Work Experiences", value: analytics.experienceCount, icon: Briefcase },
    { label: "Educations", value: analytics.educationCount, icon: GraduationCap },
    { label: "Certifications", value: analytics.certificationCount, icon: Award },
    { label: "Estimated ATS Density", value: `${analytics.estimatedAtsKeywordDensity}%`, icon: Percent },
  ];

  return (
    <div className="space-y-8">
      {/* Recharts Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResumeRadarChart overallAssessment={overallAssessment} />
        <SectionScoreChart sectionAssessment={sectionAssessment} />
      </div>

      {/* Deterministic Stats Card */}
      <div className="bg-dashboard-card rounded-3xl p-6 sm:p-8 border border-dashboard-cardBorder shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-dashboard-metricHighlight/20 border border-dashboard-metricHighlight/30 text-text-primary flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-display font-black text-text-primary uppercase tracking-wide">Deterministic Analytics</h3>
            <p className="text-xs text-text-secondary">
              Rule-based structural breakdown computed directly from parsed resume content.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="p-4 bg-surface-muted rounded-2xl border border-border-subtle text-center space-y-1"
              >
                <Icon className="w-4 h-4 mx-auto text-text-muted" />
                <p className="text-xl font-display font-black text-text-primary">{st.value}</p>
                <p className="text-[9px] font-black text-text-secondary uppercase tracking-tight leading-tight">{st.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
