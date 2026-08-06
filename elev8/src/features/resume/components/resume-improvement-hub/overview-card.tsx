"use client";

import { ResumeReport } from "../../types";
import { ScoreCard } from "./score-card";
import { Award, Target, Calendar, CheckCircle, AlertTriangle, Cpu, Briefcase, FileCode2, GraduationCap } from "lucide-react";

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
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-semibold text-blue-300">
                {metadata.role}
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300">
                {metadata.experienceLevel} Level
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Resume Assessment Audit
            </h1>
            <p className="text-xs text-blue-200/80 mt-1 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" /> Assessed on {formattedDate} • Version {metadata.artifactVersion}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <div className="text-center px-2">
              <span className="text-3xl font-black text-emerald-400">{overallAssessment.overallScore}</span>
              <p className="text-[10px] font-bold text-gray-300 uppercase">Overall</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center px-2">
              <span className="text-3xl font-black text-blue-400">{overallAssessment.atsScore}</span>
              <p className="text-[10px] font-bold text-gray-300 uppercase">ATS Score</p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-300">Top Highlight</h4>
            <p className="text-xs text-emerald-800 dark:text-emerald-400 mt-1 leading-relaxed">
              {overallAssessment.strengths[0] || "Strong foundational skills and clear section structure."}
            </p>
          </div>
        </div>

        <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-900 dark:text-amber-300">Highest Priority Gap</h4>
            <p className="text-xs text-amber-800 dark:text-amber-400 mt-1 leading-relaxed">
              {overallAssessment.weaknesses[0] || "Incorporate quantifiable achievements to boost recruiter engagement."}
            </p>
          </div>
        </div>
      </div>

      {/* Grid of score metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ScoreCard title="Technical Stack" score={sections.skills.score} icon={Cpu} accentColor="text-purple-600" />
        <ScoreCard title="Project Quality" score={sections.projects.score} icon={FileCode2} accentColor="text-blue-600" />
        <ScoreCard title="Work Experience" score={sections.experience.score} icon={Briefcase} accentColor="text-emerald-600" />
        <ScoreCard title="Education" score={sections.education.score} icon={GraduationCap} accentColor="text-amber-600" />
      </div>
    </div>
  );
}
