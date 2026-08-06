"use client";

import { useState } from "react";
import Link from "next/link";
import { Interview, InterviewStatus } from "@prisma/client";
import { PlayCircle, Eye, RefreshCw, Trash2, Calendar, HelpCircle, Loader2 } from "lucide-react";
import { deleteInterview } from "../../actions/workspace-actions";

interface InterviewCardProps {
  interview: Interview;
  onDeleted?: () => void;
}

export function InterviewCard({ interview, onDeleted }: InterviewCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete the ${interview.role} interview?`)) return;
    setIsDeleting(true);
    try {
      await deleteInterview(interview.id);
      if (onDeleted) onDeleted();
    } catch (e) {
      alert("Failed to delete interview.");
    } finally {
      setIsDeleting(false);
    }
  };

  const getStatusBadge = () => {
    switch (interview.status) {
      case InterviewStatus.COMPLETED:
        return <span className="px-2.5 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs font-bold rounded-full">Completed</span>;
      case InterviewStatus.IN_PROGRESS:
        return <span className="px-2.5 py-0.5 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-bold rounded-full">In Progress</span>;
      case InterviewStatus.GENERATING:
        return <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-bold rounded-full">Generating</span>;
      case InterviewStatus.FAILED:
        return <span className="px-2.5 py-0.5 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 text-xs font-bold rounded-full">Failed</span>;
      default:
        return <span className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">{interview.status}</span>;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-500 transition-all">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          {getStatusBadge()}
          {interview.overallScore !== null && interview.overallScore !== undefined && (
            <span className="text-sm font-extrabold text-blue-600 dark:text-blue-400">
              {interview.overallScore} / 100
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 mb-1">
          {interview.role}
        </h3>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400 mb-4">
          <span>{interview.experienceLevel}</span>
          <span>•</span>
          <span>{interview.difficulty}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <HelpCircle className="w-3 h-3" />
            {interview.questionCount} Qs
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(interview.createdAt).toLocaleDateString()}
        </div>

        <div className="flex items-center gap-1">
          {/* Continue Action */}
          {interview.status === InterviewStatus.IN_PROGRESS && (
            <Link
              href={`/interviews/${interview.id}/session`}
              className="p-2 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-xl transition-colors"
              title="Continue Session"
            >
              <PlayCircle className="w-4 h-4" />
            </Link>
          )}

          {/* View Report */}
          {interview.status === InterviewStatus.COMPLETED && (
            <Link
              href={`/interviews/${interview.id}`}
              className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-colors"
              title="View Report"
            >
              <Eye className="w-4 h-4" />
            </Link>
          )}

          {/* Generate Similar / Retake */}
          <Link
            href={`/interviews/new?role=${encodeURIComponent(interview.role)}&difficulty=${interview.difficulty}&experience=${interview.experienceLevel}`}
            className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
            title="Generate Similar Interview"
          >
            <RefreshCw className="w-4 h-4" />
          </Link>

          {/* Delete */}
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-colors disabled:opacity-50"
            title="Delete Interview"
          >
            {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
