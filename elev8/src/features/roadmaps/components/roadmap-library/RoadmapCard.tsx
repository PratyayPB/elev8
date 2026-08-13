"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Roadmap, RoadmapStatus } from "@prisma/client";
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
} from "lucide-react";

interface RoadmapCardProps {
  roadmap: Roadmap;
  onDuplicate: (id: string) => void;
  onDeleteClick: (roadmap: Roadmap) => void;
  onRegenerate: (roadmap: Roadmap) => void;
}

export const RoadmapCard: React.FC<RoadmapCardProps> = ({
  roadmap,
  onDuplicate,
  onDeleteClick,
  onRegenerate,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getStatusBadge = (status: RoadmapStatus) => {
    switch (status) {
      case RoadmapStatus.COMPLETED:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-display font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Completed
          </span>
        );
      case RoadmapStatus.IN_PROGRESS:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-display font-semibold bg-dashboard-metricHighlight/30 text-black border border-dashboard-metricHighlight px-2.5 py-0.5 rounded-full">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-black" /> Generating...
          </span>
        );
      case RoadmapStatus.ARCHIVED:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-display font-medium bg-surface-muted text-text-muted border border-border-subtle px-2.5 py-0.5 rounded-full">
            Archived
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-display font-medium bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-full">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Not Started
          </span>
        );
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="group relative bg-dashboard-card border border-dashboard-cardBorder hover:shadow-md rounded-[var(--card-radius)] p-6 shadow-sm transition-all flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-surface-muted border border-border-subtle text-text-primary flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-display font-bold uppercase tracking-wider text-text-secondary block">
                {roadmap.targetRole}
              </span>
              {roadmap.experienceLevel && (
                <span className="text-xs font-sans text-text-muted font-medium capitalize">
                  {roadmap.experienceLevel.toLowerCase()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {getStatusBadge(roadmap.status)}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 hover:bg-surface-muted rounded-lg text-text-muted hover:text-text-primary transition-colors"
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
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-text-secondary" /> View Roadmap
                  </Link>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onDuplicate(roadmap.id);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-surface-muted text-text-primary font-medium text-left"
                  >
                    <Copy className="w-3.5 h-3.5 text-text-secondary" /> Duplicate
                  </button>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onRegenerate(roadmap);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-surface-muted text-text-primary font-medium text-left"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-text-secondary" /> Regenerate
                  </button>
                  <div className="my-1 border-t border-border-subtle" />
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onDeleteClick(roadmap);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-rose-50 text-rose-600 font-medium text-left"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Roadmap Title */}
        <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-black transition-colors line-clamp-1 mb-2">
          {roadmap.title}
        </h3>

        {/* Description / Summary */}
        {roadmap.description && (
          <p className="text-sm font-sans text-text-secondary line-clamp-2 mb-6 leading-relaxed">
            {roadmap.description}
          </p>
        )}
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-sans text-text-muted">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <span>{formatDate(roadmap.createdAt)}</span>
        </div>

        {roadmap.estimatedDuration && (
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{roadmap.estimatedDuration}</span>
          </div>
        )}

        <Link
          href={`/dashboard/roadmaps/${roadmap.id}`}
          className="text-text-primary hover:underline font-display font-semibold flex items-center gap-1"
        >
          Open <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
