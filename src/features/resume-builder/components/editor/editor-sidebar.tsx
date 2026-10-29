"use client";

import React from "react";
import {
  User,
  FileText,
  GraduationCap,
  Briefcase,
  Code,
  Sparkles,
  Award,
  Trophy,
  Languages,
  HeartHandshake,
  BookMarked,
  Compass,
  Users,
} from "lucide-react";
import { TemplateSectionKey, TemplateSupport } from "../../constants/template-support";

interface SectionItem {
  id: string;
  label: string;
  sectionKey: TemplateSectionKey;
  icon: React.ReactNode;
}

interface EditorSidebarProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
  templateSupport?: TemplateSupport;
}

export function EditorSidebar({
  activeSection,
  onSectionClick,
  templateSupport,
}: EditorSidebarProps) {
  const allSections: SectionItem[] = [
    { id: "personal-info",   label: "Personal Info",        sectionKey: "personal-info",   icon: <User            className="h-4 w-4 shrink-0" /> },
    { id: "summary",         label: "Summary",              sectionKey: "summary",         icon: <FileText        className="h-4 w-4 shrink-0" /> },
    { id: "education",       label: "Education",            sectionKey: "education",       icon: <GraduationCap   className="h-4 w-4 shrink-0" /> },
    { id: "experience",      label: "Work Experience",      sectionKey: "experience",      icon: <Briefcase       className="h-4 w-4 shrink-0" /> },
    { id: "projects",        label: "Projects",             sectionKey: "projects",        icon: <Code            className="h-4 w-4 shrink-0" /> },
    { id: "skills",          label: "Skills",               sectionKey: "skills",          icon: <Sparkles        className="h-4 w-4 shrink-0" /> },
    { id: "certifications",  label: "Certifications",       sectionKey: "certifications",  icon: <Award           className="h-4 w-4 shrink-0" /> },
    { id: "achievements",    label: "Achievements",         sectionKey: "achievements",    icon: <Trophy          className="h-4 w-4 shrink-0" /> },
    { id: "languages",       label: "Languages",            sectionKey: "languages",       icon: <Languages       className="h-4 w-4 shrink-0" /> },
    { id: "volunteer",       label: "Volunteer",            sectionKey: "volunteer",       icon: <HeartHandshake  className="h-4 w-4 shrink-0" /> },
    { id: "publications",    label: "Publications",         sectionKey: "publications",    icon: <BookMarked      className="h-4 w-4 shrink-0" /> },
    { id: "interests",       label: "Interests",            sectionKey: "interests",       icon: <Compass         className="h-4 w-4 shrink-0" /> },
    { id: "references",      label: "References",           sectionKey: "references",      icon: <Users           className="h-4 w-4 shrink-0" /> },
  ];

  const visibleSections = templateSupport
    ? allSections.filter((sec) =>
        templateSupport.sections.includes(sec.sectionKey)
      )
    : allSections;

  return (
    <nav
      aria-label="Resume sections"
      className="flex flex-col gap-1 w-56 shrink-0 bg-dashboard-card rounded-xl border border-border shadow-sm p-2 self-stretch h-full overflow-y-auto"
    >
      {visibleSections.map((sec) => {
        const isActive = sec.id === activeSection;
        return (
          <button
            key={sec.id}
            type="button"
            onClick={() => onSectionClick(sec.id)}
            className={`
              flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium
              transition-colors duration-150 text-left
              ${
                isActive
                  ? "bg-text-primary text-background dark:bg-white dark:text-zinc-900"
                  : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
              }
            `}
          >
            {sec.icon}
            <span>{sec.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
