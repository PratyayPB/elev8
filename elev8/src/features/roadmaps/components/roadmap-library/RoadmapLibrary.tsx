"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Roadmap } from "@prisma/client";
import { SearchBar } from "./SearchBar";
import { FilterPanel } from "./FilterPanel";
import { RoadmapCard } from "./RoadmapCard";
import { DeleteDialog } from "./DeleteDialog";
import {
  fetchUserRoadmaps,
  duplicateRoadmapAction,
  deleteRoadmapAction,
} from "@/features/roadmaps/actions/roadmap-actions";
import { Compass, Plus, Loader2 } from "lucide-react";
import Link from "next/link";

export const RoadmapLibrary: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const [sort, setSort] = useState<"newest" | "oldest" | "updated" | "alphabetical">("newest");
  const [page, setPage] = useState(1);

  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 9,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);

  // Delete modal state
  const [deleteTarget, setDeleteTarget] = useState<Roadmap | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetchUserRoadmaps({
        search,
        experienceLevel,
        status,
        sort,
        page,
        limit: 9,
      });
      setRoadmaps(res.roadmaps);
      setPagination(res.pagination);
    } catch (err) {
      console.error("Failed to load user roadmaps:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [search, experienceLevel, status, sort, page]);

  const handleDuplicate = async (roadmapId: string) => {
    try {
      await duplicateRoadmapAction(roadmapId);
      loadData();
    } catch (err) {
      console.error("Failed to duplicate roadmap:", err);
    }
  };

  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      await deleteRoadmapAction(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      console.error("Failed to delete roadmap:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleRegenerate = (roadmap: Roadmap) => {
    const role = encodeURIComponent(roadmap.targetRole || roadmap.targetCareer || "");
    const level = encodeURIComponent(roadmap.experienceLevel || "BEGINNER");
    router.push(`/roadmaps/new?role=${role}&experienceLevel=${level}`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-2">
            <Compass className="w-6 h-6 text-cyan-400" />
            Roadmap Library
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Browse, manage, and explore your AI-generated career roadmaps.
          </p>
        </div>

        <Link
          href="/roadmaps/new"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-xl transition-colors shadow-lg shadow-cyan-500/20"
        >
          <Plus className="w-4 h-4" /> Create New Roadmap
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4">
        <SearchBar value={search} onChange={(val) => { setSearch(val); setPage(1); }} />
        <FilterPanel
          experienceLevel={experienceLevel}
          status={status}
          sort={sort}
          onExperienceChange={(val) => { setExperienceLevel(val); setPage(1); }}
          onStatusChange={(val) => { setStatus(val); setPage(1); }}
          onSortChange={(val) => { setSort(val); setPage(1); }}
        />
      </div>

      {/* Roadmap Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin text-cyan-400 mb-3" />
          <p className="text-sm">Loading your roadmaps...</p>
        </div>
      ) : roadmaps.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-slate-900/40 border border-slate-800/80 rounded-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
            <Compass className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-100">No Roadmaps Found</h3>
          <p className="text-xs text-slate-400 max-w-sm mt-1 mb-6">
            {search || experienceLevel !== "ALL" || status !== "ALL"
              ? "No roadmaps matched your filters. Try clearing your search parameters."
              : "Generate your first personalized AI career roadmap to get started."}
          </p>
          <Link
            href="/roadmaps/new"
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Generate Roadmap
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmaps.map((item) => (
            <RoadmapCard
              key={item.id}
              roadmap={item}
              onDuplicate={handleDuplicate}
              onDeleteClick={(target) => setDeleteTarget(target)}
              onRegenerate={handleRegenerate}
            />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
          <div>
            Showing Page {pagination.page} of {pagination.totalPages} ({pagination.total} total)
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 disabled:opacity-40 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
              disabled={page === pagination.totalPages}
              className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 disabled:opacity-40 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteDialog
        isOpen={Boolean(deleteTarget)}
        roadmapTitle={deleteTarget?.title}
        isDeleting={isDeleting}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};
