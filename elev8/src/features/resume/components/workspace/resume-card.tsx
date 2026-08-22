"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ResumeSummary } from "../../types/workspace";
import { FileText, MoreVertical, Eye, RefreshCw, Download, Trash2, Copy } from "lucide-react";

interface ResumeCardProps {
  resume: ResumeSummary;
  onDelete?: (id: string) => void;
  onRescore?: (resume: ResumeSummary) => void;
}

export function ResumeCard({ resume, onDelete, onRescore }: ResumeCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const getScoreBadgeColor = (score: number | null) => {
    if (score === null) return "bg-gray-100 text-gray-600";
    if (score >= 80) return "bg-emerald-100 text-emerald-800";
    if (score >= 60) return "bg-amber-100 text-amber-800";
    return "bg-rose-100 text-rose-800";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "DRAFT":
        return <span className="px-2 py-0.5 text-xs font-medium rounded bg-amber-100 text-amber-800">Processing</span>;
      case "COMPLETED":
        return <span className="px-2 py-0.5 text-xs font-medium rounded bg-emerald-100 text-emerald-800">Completed</span>;
      default:
        return <span className="px-2 py-0.5 text-xs font-medium rounded bg-gray-100 text-gray-600">Archived</span>;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gray-100 rounded-lg text-gray-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 line-clamp-1">{resume.role}</h3>
              <p className="text-xs text-gray-500">{resume.experienceLevel} Level</p>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 rounded hover:bg-gray-100 text-gray-500"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-20 text-xs">
                <Link
                  href={`/dashboard/resumes/${resume.id}`}
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  <Eye className="w-3.5 h-3.5 mr-2" /> View Report
                </Link>
                {onRescore && (
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onRescore(resume);
                    }}
                    className="w-full text-left flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    <RefreshCw className="w-3.5 h-3.5 mr-2" /> Re-score Resume
                  </button>
                )}
                <Link
                  href={`/dashboard/resumes?role=${encodeURIComponent(resume.role)}`}
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  <Copy className="w-3.5 h-3.5 mr-2" /> Upload Similar
                </Link>
                {onDelete && (
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      if (confirm(`Are you sure you want to delete the "${resume.role}" resume assessment?`)) {
                        onDelete(resume.id);
                      }
                    }}
                    className="w-full text-left flex items-center px-3 py-2 text-rose-600 hover:bg-rose-50 border-t border-gray-100"
                  >
                    <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          {getStatusBadge(resume.status)}
          <span className="text-xs text-gray-400">
            {new Date(resume.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-medium uppercase text-gray-400 block">Overall</span>
          <span className={`inline-block px-2 py-0.5 text-xs font-bold rounded ${getScoreBadgeColor(resume.overallScore)}`}>
            {resume.overallScore !== null ? `${resume.overallScore}/100` : "N/A"}
          </span>
        </div>

        <div>
          <span className="text-[10px] font-medium uppercase text-gray-400 block text-right">ATS Match</span>
          <span className={`inline-block px-2 py-0.5 text-xs font-bold rounded ${getScoreBadgeColor(resume.atsScore)}`}>
            {resume.atsScore !== null ? `${resume.atsScore}%` : "N/A"}
          </span>
        </div>

        <Link
          href={`/dashboard/resumes/${resume.id}`}
          className="px-3 py-1.5 text-xs font-medium text-black border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
