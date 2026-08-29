"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileText, Plus, Calendar, Layout, MoreVertical, Copy, Edit3, Trash2, Loader2, AlertCircle } from "lucide-react";
import { BUILDER_ROUTES, BUILDER_API } from "../../constants/builder-routes";
import { BuilderResumeRecord } from "../../types";

interface BuilderWorkspaceProps {
  initialResumes: BuilderResumeRecord[];
}

export function BuilderWorkspace({ initialResumes }: BuilderWorkspaceProps) {
  const [resumes, setResumes] = useState<BuilderResumeRecord[]>(initialResumes);
  
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  
  // Modals state
  const [renameModalOpen, setRenameModalOpen] = useState(false);
  const [resumeToRename, setResumeToRename] = useState<BuilderResumeRecord | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [renameError, setRenameError] = useState("");
  
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [resumeToDelete, setResumeToDelete] = useState<BuilderResumeRecord | null>(null);
  const [deleteError, setDeleteError] = useState("");

  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const toggleDropdown = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  const closeDropdowns = () => setOpenDropdownId(null);

  const handleDuplicate = async (id: string) => {
    closeDropdowns();
    setActionLoadingId(id);
    try {
      const res = await fetch(`${BUILDER_API.RESUMES}/${id}/duplicate`, {
        method: "POST",
      });
      if (!res.ok) {
        throw new Error("Failed to duplicate resume.");
      }
      const data = await res.json();
      setResumes((prev) => [data.resume, ...prev]);
    } catch (err: unknown) {
      alert((err as Error).message || "Something went wrong.");
    } finally {
      setActionLoadingId(null);
    }
  };

  const openRenameModal = (resume: BuilderResumeRecord) => {
    closeDropdowns();
    setResumeToRename(resume);
    setNewTitle(resume.title);
    setRenameError("");
    setRenameModalOpen(true);
  };

  const handleRenameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeToRename) return;
    if (!newTitle.trim()) {
      setRenameError("Title cannot be empty.");
      return;
    }
    if (newTitle.length > 100) {
      setRenameError("Title cannot exceed 100 characters.");
      return;
    }

    setActionLoadingId(resumeToRename.id);
    setRenameModalOpen(false);

    try {
      const res = await fetch(`${BUILDER_API.RESUMES}/${resumeToRename.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle.trim() }),
      });
      
      if (!res.ok) throw new Error("Failed to rename resume.");
      
      const data = await res.json();
      setResumes((prev) => prev.map((r) => (r.id === data.resume.id ? data.resume : r)));
    } catch (err: unknown) {
      alert((err as Error).message || "Failed to rename.");
    } finally {
      setActionLoadingId(null);
      setResumeToRename(null);
    }
  };

  const openDeleteModal = (resume: BuilderResumeRecord) => {
    closeDropdowns();
    setResumeToDelete(resume);
    setDeleteError("");
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!resumeToDelete) return;
    setActionLoadingId(resumeToDelete.id);
    setDeleteModalOpen(false);

    try {
      const res = await fetch(`${BUILDER_API.RESUMES}/${resumeToDelete.id}`, {
        method: "DELETE",
      });
      
      if (!res.ok) throw new Error("Failed to delete resume.");
      
      setResumes((prev) => prev.filter((r) => r.id !== resumeToDelete.id));
    } catch (err: unknown) {
      alert((err as Error).message || "Failed to delete.");
    } finally {
      setActionLoadingId(null);
      setResumeToDelete(null);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-10" onClick={closeDropdowns}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">Resume Builder</h1>
          <p className="text-sm font-sans text-text-secondary mt-1">
            Create tailored versions of your resume for specific applications and roles.
          </p>
        </div>
        <Link
          href={BUILDER_ROUTES.NEW}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 font-display font-semibold text-sm transition-all hover:bg-black/80 dark:hover:bg-brand-secondary-200 hover:scale-[0.98]"
        >
          <Plus className="h-4 w-4" />
          Create Resume
        </Link>
      </div>

      {resumes.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 text-center rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card shadow-sm">
          <div className="h-12 w-12 rounded-full bg-surface-muted flex items-center justify-center text-text-secondary mb-4">
            <FileText className="h-6 w-6" />
          </div>
          <h3 className="font-display font-semibold text-text-primary text-lg">No resumes yet</h3>
          <p className="text-sm font-sans text-text-secondary mt-2 max-w-md">
            Initialize your first resume using your profile data. You can customize it independently for each job application.
          </p>
          <Link
            href={BUILDER_ROUTES.NEW}
            className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 font-display font-semibold text-sm transition-all hover:bg-black/80 dark:hover:bg-brand-secondary-200 hover:scale-[0.98]"
          >
            <Plus className="h-4 w-4" />
            Build My First Resume
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href={BUILDER_ROUTES.NEW}
            className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-dashboard-cardBorder rounded-[var(--card-radius-lg)] hover:border-text-primary/20 hover:bg-surface-muted/50 transition-all min-h-[200px]"
          >
            <div className="h-10 w-10 rounded-full bg-surface-muted flex items-center justify-center text-text-secondary mb-3">
              <Plus className="h-5 w-5" />
            </div>
            <span className="font-display font-semibold text-text-primary text-sm">Create New Resume</span>
          </Link>

          {resumes.map((resume) => {
            const isProcessing = actionLoadingId === resume.id;
            const formattedDate = new Date(resume.updatedAt).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
            const isOpen = openDropdownId === resume.id;

            return (
              <div
                key={resume.id}
                className="group relative flex flex-col justify-between p-6 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card shadow-sm hover:shadow-md transition-all min-h-[200px]"
              >
                {isProcessing && (
                  <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[1px] flex items-center justify-center rounded-[var(--card-radius-lg)]">
                    <Loader2 className="h-6 w-6 text-text-primary animate-spin" />
                  </div>
                )}
                
                <div>
                  <div className="flex items-start justify-between">
                    <div className="h-9 w-9 rounded-lg bg-surface-muted flex items-center justify-center text-text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground border border-border">
                        {resume.status === "DRAFT" ? "Draft" : resume.status === "READY" ? "Ready" : "Archived"}
                      </span>
                      
                      <div className="relative">
                        <button
                          type="button"
                          onClick={(e) => toggleDropdown(resume.id, e)}
                          className="p-1 text-text-secondary hover:text-text-primary hover:bg-surface-muted rounded transition-colors"
                        >
                          <MoreVertical className="h-5 w-5" />
                        </button>
                        
                        {isOpen && (
                          <div className="absolute right-0 mt-1 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                            <div className="py-1">
                              <Link
                                href={BUILDER_ROUTES.EDITOR(resume.id)}
                                className="group flex items-center px-4 py-2 text-sm text-text-primary hover:bg-surface-muted transition-colors w-full text-left"
                              >
                                <Edit3 className="mr-3 h-4 w-4 text-text-secondary group-hover:text-text-primary" />
                                Edit
                              </Link>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); openRenameModal(resume); }}
                                className="group flex items-center px-4 py-2 text-sm text-text-primary hover:bg-surface-muted transition-colors w-full text-left"
                              >
                                <Edit3 className="mr-3 h-4 w-4 text-text-secondary group-hover:text-text-primary" />
                                Rename
                              </button>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); handleDuplicate(resume.id); }}
                                className="group flex items-center px-4 py-2 text-sm text-text-primary hover:bg-surface-muted transition-colors w-full text-left"
                              >
                                <Copy className="mr-3 h-4 w-4 text-text-secondary group-hover:text-text-primary" />
                                Duplicate
                              </button>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); openDeleteModal(resume); }}
                                className="group flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                              >
                                <Trash2 className="mr-3 h-4 w-4 text-red-500 group-hover:text-red-600" />
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display font-bold text-text-primary text-lg truncate" title={resume.title}>
                      {resume.title}
                    </h3>

                  </div>
                </div>

                <div className="border-t border-border-subtle mt-6 pt-4 flex items-center justify-between text-xs text-text-secondary">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Updated {formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layout className="h-3.5 w-3.5" />
                    <span className="capitalize">{resume.template.toLowerCase()}</span>
                  </div>
                </div>

                <Link
                  href={BUILDER_ROUTES.EDITOR(resume.id)}
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-surface-muted text-text-primary font-display font-semibold text-xs transition-all hover:bg-border-subtle"
                >
                  Open Editor
                </Link>
              </div>
            );
          })}
        </div>
      )}

      {/* Rename Modal */}
      {renameModalOpen && resumeToRename && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setRenameModalOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-display font-bold text-text-primary">Rename Resume</h2>
            <form onSubmit={handleRenameSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-text-primary">Resume Title</label>
                <input
                  type="text"
                  id="title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  maxLength={100}
                  className="mt-1 block w-full rounded-md border border-border-subtle px-3 py-2 text-sm focus:border-text-primary focus:outline-none focus:ring-1 focus:ring-text-primary"
                  autoFocus
                />
                {renameError && <p className="mt-1 flex items-center gap-1 text-xs text-red-600"><AlertCircle className="h-3 w-3" /> {renameError}</p>}
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setRenameModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-text-primary rounded-md hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && resumeToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setDeleteModalOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 text-red-600 mb-2">
              <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center">
                <Trash2 className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-display font-bold">Delete Resume?</h2>
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-text-secondary">
                Are you sure you want to delete <span className="font-semibold text-text-primary">&quot;{resumeToDelete.title}&quot;</span>? 
                This action is permanent and will remove the resume and its saved data.
              </p>
              {deleteError && <p className="mt-2 text-sm text-red-600">{deleteError}</p>}
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setDeleteModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
              >
                Delete Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
