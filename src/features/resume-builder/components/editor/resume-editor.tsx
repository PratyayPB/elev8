"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
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
import { LanguagesEditor } from "./languages-editor";
import { VolunteerEditor } from "./volunteer-editor";
import { PublicationsEditor } from "./publications-editor";
import { InterestsEditor } from "./interests-editor";
import { ReferencesEditor } from "./references-editor";
import { AiBuildDialog } from "../ai-build/ai-build-dialog";
import { ResumeTemplateRenderer } from "../templates/resume-template-renderer";
import { toast } from "sonner";

interface ResumeEditorProps {
  resume: BuilderResumeRecord;
  initialArtifact: BuilderResumeArtifact;
}

export function ResumeEditor({ resume, initialArtifact }: ResumeEditorProps) {
  const [recompileTrigger, setRecompileTrigger] = useState<number>(0);
  const [isRecompiling, setIsRecompiling] = useState<boolean>(false);

  const {
    artifact,
    currentVersion,
    currentTemplate,
    templateSupport,
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
    onSaveSuccess: () => setRecompileTrigger((prev) => prev + 1),
  });

  const [activeSection, setActiveSection] = useState("personal-info");

  // Auto-reset active section if the current template does not support it
  useEffect(() => {
    if (
      templateSupport &&
      !templateSupport.sections.includes(activeSection as any)
    ) {
      setActiveSection("personal-info");
    }
  }, [templateSupport, activeSection]);
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);
  const [isImportingProfile, setIsImportingProfile] = useState(false);
  const [isProfileIncompleteModalOpen, setIsProfileIncompleteModalOpen] =
    useState(false);
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
        setRecompileTrigger((prev) => prev + 1);
        toast.success("AI-generated resume loaded into editor");
      }
    } catch (err: any) {
      console.error("Failed to refresh artifact after AI build:", err);
      toast.error("Failed to reload resume artifact", {
        description:
          err?.message ||
          "Please refresh the page to view the latest AI generated content.",
      });
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
        setRecompileTrigger((prev) => prev + 1);
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

  const [downloadStep, setDownloadStep] = useState<
    "idle" | "saving" | "generating"
  >("idle");

  // PDF download trigger with automatic pre-save
  const handleDownloadPdf = async () => {
    setIsPdfGenerating(true);
    setDownloadStep("saving");
    try {
      // 1. Run exact save task first to ensure backend artifact reflects latest edits
      const saveSuccess = await save();
      if (!saveSuccess) {
        toast.error("Download cancelled", {
          description:
            "Could not save your latest resume changes before downloading.",
        });
        return;
      }

      // 2. Once saved in backend, proceed with PDF generation
      setDownloadStep("generating");
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
          (err as Error).message ||
          "An error occurred while creating the PDF. Please try again.",
      });
      console.error("PDF download error:", err);
    } finally {
      setIsPdfGenerating(false);
      setDownloadStep("idle");
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

  // Keyboard shortcut: Ctrl+S / Cmd+S to save and auto-recompile
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        if (isDirty && saveStatus !== "saving") {
          save();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDirty, saveStatus, save]);

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
        downloadStep={downloadStep}
        onImportProfile={handleImportProfile}
        isImportingProfile={isImportingProfile}
        onAiBuild={() => setIsAiBuildModalOpen(true)}
        onRecompile={() => setRecompileTrigger((prev) => prev + 1)}
        isRecompiling={isRecompiling}
      />

      <div className="flex-1 w-full px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Editor Area – sidebar list + form panel side by side, equal height */}
        <div className="w-full flex flex-col md:flex-row items-stretch gap-4 h-[540px]">
          {/* Section Navigation List */}
          <EditorSidebar
            activeSection={activeSection}
            onSectionClick={setActiveSection}
            templateSupport={templateSupport}
          />

          {/* Form Editors – flex-1 fills remaining width, matches sidebar height */}
          <div className="flex-1 min-w-0 flex flex-col h-full">
            {activeSection === "personal-info" && (
              <EditorSection id="personal-info" title="Personal Information">
                <PersonalInformationEditor
                  data={artifact.personalInformation}
                  onChange={updatePersonalInformation}
                  templateSupport={templateSupport}
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
                  templateSupport={templateSupport}
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
                  templateSupport={templateSupport}
                />
              </EditorSection>
            )}

            {activeSection === "languages" && (
              <EditorSection id="languages" title="Languages">
                <LanguagesEditor
                  entries={artifact.languages || []}
                  onAdd={(entry) => addEntry("languages", entry)}
                  onUpdate={(id, entry) =>
                    updateEntry("languages", id, entry)
                  }
                  onRemove={(id) => removeEntry("languages", id)}
                  onMoveUp={(id) => moveEntryUp("languages", id)}
                  onMoveDown={(id) => moveEntryDown("languages", id)}
                />
              </EditorSection>
            )}

            {activeSection === "volunteer" && (
              <EditorSection id="volunteer" title="Volunteer Experience">
                <VolunteerEditor
                  entries={artifact.volunteer || []}
                  onAdd={(entry) => addEntry("volunteer", entry)}
                  onUpdate={(id, entry) =>
                    updateEntry("volunteer", id, entry)
                  }
                  onRemove={(id) => removeEntry("volunteer", id)}
                  onMoveUp={(id) => moveEntryUp("volunteer", id)}
                  onMoveDown={(id) => moveEntryDown("volunteer", id)}
                />
              </EditorSection>
            )}

            {activeSection === "publications" && (
              <EditorSection id="publications" title="Publications">
                <PublicationsEditor
                  entries={artifact.publications || []}
                  onAdd={(entry) => addEntry("publications", entry)}
                  onUpdate={(id, entry) =>
                    updateEntry("publications", id, entry)
                  }
                  onRemove={(id) => removeEntry("publications", id)}
                  onMoveUp={(id) => moveEntryUp("publications", id)}
                  onMoveDown={(id) => moveEntryDown("publications", id)}
                />
              </EditorSection>
            )}

            {activeSection === "interests" && (
              <EditorSection id="interests" title="Interests & Hobbies">
                <InterestsEditor
                  entries={artifact.interests || []}
                  onAdd={(entry) => addEntry("interests", entry)}
                  onUpdate={(id, entry) =>
                    updateEntry("interests", id, entry)
                  }
                  onRemove={(id) => removeEntry("interests", id)}
                  onMoveUp={(id) => moveEntryUp("interests", id)}
                  onMoveDown={(id) => moveEntryDown("interests", id)}
                />
              </EditorSection>
            )}

            {activeSection === "references" && (
              <EditorSection id="references" title="References">
                <ReferencesEditor
                  entries={artifact.references || []}
                  onAdd={(entry) => addEntry("references", entry)}
                  onUpdate={(id, entry) =>
                    updateEntry("references", id, entry)
                  }
                  onRemove={(id) => removeEntry("references", id)}
                  onMoveUp={(id) => moveEntryUp("references", id)}
                  onMoveDown={(id) => moveEntryDown("references", id)}
                />
              </EditorSection>
            )}
          </div>
        </div>

        {/* Live Preview Panel – full width, always below editor */}
        <div className="w-full">
          <div className="w-full max-h-[750px] bg-slate-100 dark:bg-zinc-900/50 p-4 sm:p-6 overflow-y-auto rounded-2xl border border-border shadow-inner flex flex-col items-center">
            <div className="w-full max-w-[800px] min-h-[400px] bg-white shadow-xl rounded-sm overflow-visible transition-all duration-300 transform origin-top flex flex-col flex-1">
              <ResumeTemplateRenderer
                artifact={artifact}
                template={currentTemplate}
                recompileTrigger={recompileTrigger}
                onRecompileStart={() => setIsRecompiling(true)}
                onRecompileEnd={() => setIsRecompiling(false)}
              />
            </div>
          </div>
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
              Please complete your profile first to import your personal
              information, education, and skills into your resume.
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
              <Link href={ROUTES.PROFILE}>Go to Profile</Link>
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
