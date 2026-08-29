"use client";

import React, { useState, useEffect } from "react";
import { Edit3, Eye } from "lucide-react";
import { BuilderResumeArtifact, BuilderResumeRecord } from "../../types";
import { useResumeEditor } from "../../hooks/use-resume-editor";
import { BUILDER_API } from "../../constants/builder-routes";
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

interface ResumeEditorProps {
  resume: BuilderResumeRecord;
  initialArtifact: BuilderResumeArtifact;
}

export function ResumeEditor({ resume, initialArtifact }: ResumeEditorProps) {
  const {
    artifact,
    currentTemplate,
    isTemplateUpdating,
    updateTemplate,
    saveStatus,
    saveError,
    lastSavedAt,
    isDirty,
    save,
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
    } catch (err: unknown) {
      alert("Unable to generate PDF. Please try again.");
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
        e.returnValue = "You have unsaved changes. Are you sure you want to leave?";
        return e.returnValue;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  // Scroll spy to highlight active section in sidebar
  useEffect(() => {
    const sections = [
      "personal-info",
      "summary",
      "education",
      "experience",
      "projects",
      "skills",
      "certifications",
      "achievements",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
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
        {/* Editor Area (Sidebar + Section forms) */}
        <div
          className={`flex-1 flex flex-col md:flex-row gap-6 ${
            mobileTab === "preview" ? "hidden xl:flex" : "flex"
          }`}
        >
          {/* Section Navigation Sidebar */}
          <div className="w-full md:w-56 shrink-0">
            <div className="md:sticky md:top-24">
              <EditorSidebar
                activeSection={activeSection}
                onSectionClick={setActiveSection}
              />
            </div>
          </div>

          {/* Form Editors */}
          <div className="flex-1 space-y-6 pb-20 min-w-0">
            <EditorSection id="personal-info" title="Personal Information">
              <PersonalInformationEditor
                data={artifact.personalInformation}
                onChange={updatePersonalInformation}
              />
            </EditorSection>

            <EditorSection id="summary" title="Professional Summary">
              <SummaryEditor
                data={artifact.professionalSummary}
                onChange={updateSummary}
              />
            </EditorSection>

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

            <EditorSection id="certifications" title="Certifications">
              <CertificationsEditor
                entries={artifact.certifications || []}
                onAdd={(entry) => addEntry("certifications", entry)}
                onUpdate={(id, entry) => updateEntry("certifications", id, entry)}
                onRemove={(id) => removeEntry("certifications", id)}
                onMoveUp={(id) => moveEntryUp("certifications", id)}
                onMoveDown={(id) => moveEntryDown("certifications", id)}
              />
            </EditorSection>

            <EditorSection id="achievements" title="Achievements">
              <AchievementsEditor
                entries={artifact.achievements || []}
                onAdd={(entry) => addEntry("achievements", entry)}
                onUpdate={(id, entry) => updateEntry("achievements", id, entry)}
                onRemove={(id) => removeEntry("achievements", id)}
                onMoveUp={(id) => moveEntryUp("achievements", id)}
                onMoveDown={(id) => moveEntryDown("achievements", id)}
              />
            </EditorSection>
          </div>
        </div>

        {/* Live Preview Side Panel (sticky on xl screens) */}
        <div
          className={`w-full xl:w-[650px] shrink-0 h-[calc(100vh-6rem)] sticky top-20 ${
            mobileTab === "edit" ? "hidden xl:block" : "block"
          }`}
        >
          <ResumePreview artifact={artifact} template={currentTemplate} />
        </div>
      </div>
    </div>
  );
}
