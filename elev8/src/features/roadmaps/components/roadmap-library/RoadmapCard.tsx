"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Clock,
  Calendar,
  MoreVertical,
  ExternalLink,
  Copy,
  Trash2,
  RefreshCw,
  AlertCircle,
  Loader2,
  CheckCircle2,
  ArrowRight,
  Globe,
  Sparkles,
} from "lucide-react";
import { LibraryRoadmap } from "@/features/roadmaps/types";

interface RoadmapCardProps {
  roadmap: LibraryRoadmap;
  isGlobalSection?: boolean;
  onDuplicate: (id: string) => void;
  onDeleteClick: (roadmap: LibraryRoadmap) => void;
  onRegenerate: (roadmap: LibraryRoadmap) => void;
}

export const RoadmapCard: React.FC<RoadmapCardProps> = ({
  roadmap,
  isGlobalSection = false,
  onDuplicate,
  onDeleteClick,
  onRegenerate,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isGlobalCard = Boolean(isGlobalSection || roadmap.isGlobal);

  const getStatusBadge = (status: LibraryRoadmap["status"]) => {
    switch (status) {
      case "COMPLETED":
        return (
          <span className="inline-flex items-center gap-1 text-xs font-display font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-full whitespace-nowrap">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Completed
          </span>
        );
      case "IN_PROGRESS":
        return (
          <span className="inline-flex items-center gap-1 text-xs font-display font-semibold bg-dashboard-metricHighlight/30 text-black border border-dashboard-metricHighlight px-2.5 py-0.5 rounded-full whitespace-nowrap">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-black" /> Generating...
          </span>
        );
      case "FAILED":
        return (
          <span className="inline-flex items-center gap-1 text-xs font-display font-semibold bg-red-100 dark:bg-red-950/40 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800 px-2.5 py-0.5 rounded-full whitespace-nowrap">
            <AlertCircle className="w-3.5 h-3.5 text-red-600 dark:text-red-400" /> Failed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-display font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-2.5 py-0.5 rounded-full whitespace-nowrap">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Not Started
          </span>
        );
    }
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="group relative bg-dashboard-card border border-dashboard-cardBorder hover:shadow-md rounded-[var(--card-radius)] p-5 shadow-sm transition-all flex flex-col justify-between">
      <div>
        {/* Top Header: Badges & Menu */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap min-w-0">
            {getStatusBadge(roadmap.status)}
            {roadmap.isGlobal ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-display font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 px-2 py-0.5 rounded-full whitespace-nowrap">
                <Globe className="w-2.5 h-2.5" /> Global
              </span>
            ) : roadmap.personalized ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-display font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border border-purple-200/60 dark:border-purple-800/60 px-2 py-0.5 rounded-full whitespace-nowrap">
                <Sparkles className="w-2.5 h-2.5" /> Personalized
              </span>
            ) : null}
          </div>

          <div className="relative shrink-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 hover:bg-surface-muted rounded-lg text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              aria-label="Options"
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {menuOpen && (
              <div
                className="absolute right-0 top-8 w-44 bg-dashboard-card border border-border-subtle rounded-xl shadow-xl z-50 py-1 text-xs font-display text-text-primary"
                onMouseLeave={() => setMenuOpen(false)}
              >
                <Link
                  href={`/dashboard/roadmaps/${roadmap.id}`}
                  className="w-full flex items-center gap-2 px-3 py-2 hover:bg-surface-muted text-text-primary font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  <ExternalLink className="w-3.5 h-3.5 text-text-secondary" /> View Roadmap
                </Link>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onDuplicate(roadmap.id);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 hover:bg-surface-muted text-text-primary font-medium text-left cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-text-secondary" /> Duplicate
                </button>
                {!isGlobalCard && (
                  <>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        onRegenerate(roadmap);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 hover:bg-surface-muted text-text-primary font-medium text-left cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-text-secondary" /> Regenerate
                    </button>
                    {roadmap.isOwner && (
                      <>
                        <div className="my-1 border-t border-border-subtle" />
                        <button
                          onClick={() => {
                            setMenuOpen(false);
                            onDeleteClick(roadmap);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-rose-600 font-medium text-left cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Title & Role Info */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-surface-muted border border-border-subtle text-text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">
            <Compass className="w-4.5 h-4.5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-display font-bold text-text-primary group-hover:text-black dark:group-hover:text-white transition-colors truncate mb-1">
              {roadmap.title}
            </h3>
            <div className="flex items-center gap-2 text-xs font-sans text-text-muted truncate">
              {roadmap.targetRole && (
                <span className="font-semibold text-text-secondary uppercase tracking-wider text-[11px] truncate">
                  {roadmap.targetRole}
                </span>
              )}
              {roadmap.targetRole && roadmap.experienceLevel && <span>•</span>}
              {roadmap.experienceLevel && (
                <span className="capitalize shrink-0">
                  {roadmap.experienceLevel.toLowerCase()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description / Summary */}
        {roadmap.description && (
          <p className="text-xs font-sans text-text-secondary line-clamp-2 mb-4 leading-relaxed break-words">
            {roadmap.description}
          </p>
        )}
      </div>

      {/* Card Footer */}
      <div className="pt-3 border-t border-border-subtle flex items-center justify-between gap-2 text-xs font-sans text-text-muted">
        <div className="flex items-center gap-2.5 min-w-0 text-text-muted">
          <div className="flex items-center gap-1.5 shrink-0" title="Created date">
            <Calendar className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">{formatDate(roadmap.createdAt)}</span>
          </div>

          {roadmap.estimatedDuration && (
            <>
              <span className="shrink-0">•</span>
              <div className="flex items-center gap-1.5 min-w-0" title="Estimated duration">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{roadmap.estimatedDuration}</span>
              </div>
            </>
          )}
        </div>

        <div className="shrink-0">
          {!isGlobalCard && roadmap.status === "FAILED" ? (
            <button
              onClick={() => onRegenerate(roadmap)}
              className="text-text-primary hover:underline font-display font-semibold flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Try Again
            </button>
          ) : (
            <Link
              href={`/dashboard/roadmaps/${roadmap.id}`}
              className="text-text-primary hover:underline font-display font-semibold flex items-center gap-1 whitespace-nowrap"
            >
              Open <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
