"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Edit3, Eye, AlertCircle } from "lucide-react";
import { BuilderResumeArtifact, BuilderResumeRecord } from "../../types";
import { useResumeEditor } from "../../hooks/use-resume-editor";
import { BUILDER_API } from "../../constants/builder-routes";
import { ROUTES } from "@/constants/routes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EditorHeader } from "./editor-header";
import { EditorSidebar } from "./editor-sidebar";
import { EditorSection } from "./editor-section";
import { PersonalInformationEditor } from "./personal-information-editor";
import { SummaryEditor } from "./summary-editor";
import { EducationEditor } from "./education-editor";
import { ExperienceEditor } from "./experience-editor";
import { ProjectsEditor } from "./projects-editor";
import { SkillsEditor } from "./skills-editor";
import { CertificationsEditor } from "./certifications-editor";
import { AchievementsEditor } from "./achievements-editor";
import { ResumePreview } from "../resume-preview/resume-preview";
import { AiBuildDialog } from "../ai-build/ai-build-dialog";
import { toast } from "sonner";

interface ResumeEditorProps {
  resume: BuilderResumeRecord;
  initialArtifact: BuilderResumeArtifact;
}

export function ResumeEditor({ resume, initialArtifact }: ResumeEditorProps) {
  const {
    artifact,
    currentVersion,
    currentTemplate,
    isTemplateUpdating,
    updateTemplate,
    saveStatus,
    saveError,
    lastSavedAt,
    isDirty,
    save,
    replaceArtifact,
    updatePersonalInformation,
    updateSummary,
    addEntry,
    updateEntry,
    removeEntry,
    moveEntryUp,
    moveEntryDown,
  } = useResumeEditor({
    resumeId: resume.id,
    initialArtifact,
    initialVersion: initialArtifact.version,
    initialTemplate: resume.template,
  });

  const [activeSection, setActiveSection] = useState("personal-info");
  const [mobileTab, setMobileTab] = useState<"edit" | "preview">("edit");
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);
  const [isImportingProfile, setIsImportingProfile] = useState(false);
  const [isProfileIncompleteModalOpen, setIsProfileIncompleteModalOpen] = useState(false);
  const [isAiBuildModalOpen, setIsAiBuildModalOpen] = useState(false);

  const hasExistingContent = Boolean(
    artifact.professionalSummary?.trim() ||
      (artifact.experience && artifact.experience.length > 0) ||
      (artifact.education && artifact.education.length > 0) ||
      (artifact.projects && artifact.projects.length > 0) ||
      (artifact.skills && artifact.skills.length > 0) ||
      (artifact.certifications && artifact.certifications.length > 0) ||
      (artifact.achievements && artifact.achievements.length > 0)
  );

  const handleAiBuildSuccess = async () => {
    try {
      const response = await fetch(BUILDER_API.ARTIFACT(resume.id));
      if (!response.ok) throw new Error("Failed to reload resume artifact");
      const data = await response.json();
      if (data.artifact) {
        replaceArtifact(
          data.artifact,
          data.version || data.artifact.version,
          new Date()
        );
      }
    } catch (err) {
      console.error("Failed to refresh artifact after AI build:", err);
    }
  };

  // Profile data import trigger
  const handleImportProfile = async () => {
    setIsImportingProfile(true);
    try {
      const response = await fetch(BUILDER_API.IMPORT_PROFILE(resume.id), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentArtifact: artifact,
          clientVersion: currentVersion,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to import profile data");
      }

      const data = await response.json();

      if (!data.isCompleted) {
        setIsProfileIncompleteModalOpen(true);
        return;
      }

      if (data.artifact) {
        replaceArtifact(
          data.artifact,
          data.version,
          data.savedAt ? new Date(data.savedAt) : undefined
        );
        toast.success("Profile data imported successfully!");
      }
    } catch (err: unknown) {
      toast.error("Unable to import profile data", {
        description:
          err instanceof Error
            ? err.message
            : "An error occurred while importing profile data.",
      });
      console.error("Import profile error:", err);
    } finally {
      setIsImportingProfile(false);
    }
  };

  // PDF download trigger
  const handleDownloadPdf = async () => {
    setIsPdfGenerating(true);
    try {
      const response = await fetch(BUILDER_API.PDF(resume.id));
      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to generate PDF");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;

      const contentDisposition = response.headers.get("Content-Disposition");
      let fileName = `${resume.title || "Resume"}.pdf`;
      if (contentDisposition && contentDisposition.includes("filename=")) {
        const match = contentDisposition.match(/filename="?([^"]+)"?/);
        if (match && match[1]) fileName = match[1];
      }

      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      toast.success("PDF downloaded successfully!");
    } catch (err: unknown) {
      toast.error("Unable to generate PDF", {
        description:
          "An error occurred while creating the PDF. Please try again.",
      });
      console.error("PDF download error:", err);
    } finally {
      setIsPdfGenerating(false);
    }
  };

  // Warning when leaving page with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue =
          "You have unsaved changes. Are you sure you want to leave?";
        return e.returnValue;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  return (
    <div className="flex flex-col min-h-full bg-surface">
      <EditorHeader
        title={resume.title}
        saveStatus={saveStatus}
        saveError={saveError}
        lastSavedAt={lastSavedAt}
        onSave={save}
        isDirty={isDirty}
        currentTemplate={currentTemplate}
        onTemplateChange={updateTemplate}
        isTemplateUpdating={isTemplateUpdating}
        onDownloadPdf={handleDownloadPdf}
        isPdfGenerating={isPdfGenerating}
        onImportProfile={handleImportProfile}
        isImportingProfile={isImportingProfile}
        onAiBuild={() => setIsAiBuildModalOpen(true)}
      />

      {/* Mobile/Tablet view toggle tab (hidden on xl screens) */}
      <div className="xl:hidden flex items-center justify-center p-3 bg-dashboard-card border-b border-border">
        <div className="flex bg-surface-muted p-1 rounded-xl border border-border">
          <button
            type="button"
            onClick={() => setMobileTab("edit")}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mobileTab === "edit"
                ? "bg-text-primary text-white dark:text-brand-primary-900 shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <Edit3 className="h-3.5 w-3.5" />
            Edit
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("preview")}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mobileTab === "preview"
                ? "bg-text-primary text-white dark:text-brand-primary-900 shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <Eye className="h-3.5 w-3.5" />
            Live Preview
          </button>
        </div>
      </div>

      <div className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 py-6 flex flex-col xl:flex-row gap-6">
        {/* Editor Area (Dropdown Sidebar + Section forms vertically) */}
        <div
          className={`w-full xl:w-1/2 flex flex-col gap-0 ${
            mobileTab === "preview" ? "hidden xl:flex" : "flex"
          }`}
        >
          {/* Section Navigation Dropdown */}
          <EditorSidebar
            activeSection={activeSection}
            onSectionClick={setActiveSection}
          />

          {/* Form Editors - Render only the active tab */}
          <div className="w-full pb-20 min-w-0">
            {activeSection === "personal-info" && (
              <EditorSection id="personal-info" title="Personal Information">
                <PersonalInformationEditor
                  data={artifact.personalInformation}
                  onChange={updatePersonalInformation}
                />
              </EditorSection>
            )}

            {activeSection === "summary" && (
              <EditorSection id="summary" title="Professional Summary">
                <SummaryEditor
                  data={artifact.professionalSummary}
                  onChange={updateSummary}
                />
              </EditorSection>
            )}

            {activeSection === "education" && (
              <EditorSection id="education" title="Education">
                <EducationEditor
                  entries={artifact.education || []}
                  onAdd={(entry) => addEntry("education", entry)}
                  onUpdate={(id, entry) => updateEntry("education", id, entry)}
                  onRemove={(id) => removeEntry("education", id)}
                  onMoveUp={(id) => moveEntryUp("education", id)}
                  onMoveDown={(id) => moveEntryDown("education", id)}
                />
              </EditorSection>
            )}

            {activeSection === "experience" && (
              <EditorSection id="experience" title="Work Experience">
                <ExperienceEditor
                  entries={artifact.experience || []}
                  onAdd={(entry) => addEntry("experience", entry)}
                  onUpdate={(id, entry) => updateEntry("experience", id, entry)}
                  onRemove={(id) => removeEntry("experience", id)}
                  onMoveUp={(id) => moveEntryUp("experience", id)}
                  onMoveDown={(id) => moveEntryDown("experience", id)}
                />
              </EditorSection>
            )}

            {activeSection === "projects" && (
              <EditorSection id="projects" title="Projects">
                <ProjectsEditor
                  entries={artifact.projects || []}
                  onAdd={(entry) => addEntry("projects", entry)}
                  onUpdate={(id, entry) => updateEntry("projects", id, entry)}
                  onRemove={(id) => removeEntry("projects", id)}
                  onMoveUp={(id) => moveEntryUp("projects", id)}
                  onMoveDown={(id) => moveEntryDown("projects", id)}
                />
              </EditorSection>
            )}

            {activeSection === "skills" && (
              <EditorSection id="skills" title="Skills">
                <SkillsEditor
                  entries={artifact.skills || []}
                  onAdd={(entry) => addEntry("skills", entry)}
                  onUpdate={(id, entry) => updateEntry("skills", id, entry)}
                  onRemove={(id) => removeEntry("skills", id)}
                  onMoveUp={(id) => moveEntryUp("skills", id)}
                  onMoveDown={(id) => moveEntryDown("skills", id)}
                />
              </EditorSection>
            )}

            {activeSection === "certifications" && (
              <EditorSection id="certifications" title="Certifications">
                <CertificationsEditor
                  entries={artifact.certifications || []}
                  onAdd={(entry) => addEntry("certifications", entry)}
                  onUpdate={(id, entry) =>
                    updateEntry("certifications", id, entry)
                  }
                  onRemove={(id) => removeEntry("certifications", id)}
                  onMoveUp={(id) => moveEntryUp("certifications", id)}
                  onMoveDown={(id) => moveEntryDown("certifications", id)}
                />
              </EditorSection>
            )}

            {activeSection === "achievements" && (
              <EditorSection id="achievements" title="Achievements">
                <AchievementsEditor
                  entries={artifact.achievements || []}
                  onAdd={(entry) => addEntry("achievements", entry)}
                  onUpdate={(id, entry) =>
                    updateEntry("achievements", id, entry)
                  }
                  onRemove={(id) => removeEntry("achievements", id)}
                  onMoveUp={(id) => moveEntryUp("achievements", id)}
                  onMoveDown={(id) => moveEntryDown("achievements", id)}
                />
              </EditorSection>
            )}
          </div>
        </div>

        {/* Live Preview Side Panel (sticky on xl screens) */}
        <div
          className={`w-full xl:w-1/2 shrink-0 h-[calc(100vh-6rem)] sticky top-20 ${
            mobileTab === "edit" ? "hidden xl:block" : "block"
          }`}
        >
          <ResumePreview artifact={artifact} template={currentTemplate} />
        </div>
      </div>

      {/* Profile Incomplete Warning Dialog */}
      <Dialog
        open={isProfileIncompleteModalOpen}
        onOpenChange={setIsProfileIncompleteModalOpen}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 mb-2">
              <AlertCircle className="h-6 w-6" />
            </div>
            <DialogTitle className="text-center text-lg font-display font-bold">
              Complete Your Profile
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-text-secondary pt-2">
              Please complete your profile first to import your personal information, education, and skills into your resume.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsProfileIncompleteModalOpen(false)}
              className="rounded-xl text-xs font-semibold"
            >
              Skip
            </Button>
            <Button
              type="button"
              asChild
              className="rounded-xl text-xs font-semibold bg-text-primary text-white hover:bg-black/80 dark:hover:bg-brand-secondary-200"
            >
              <Link href={ROUTES.PROFILE}>
                Go to Profile
              </Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* AI Resume Build Dialog */}
      <AiBuildDialog
        isOpen={isAiBuildModalOpen}
        onOpenChange={setIsAiBuildModalOpen}
        resumeId={resume.id}
        hasExistingContent={hasExistingContent}
        onSuccess={handleAiBuildSuccess}
      />
    </div>
  );
}
