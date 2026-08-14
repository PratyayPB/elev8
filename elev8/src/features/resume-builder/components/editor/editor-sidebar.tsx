import React, { useEffect, useState } from "react";
import { User, FileText, GraduationCap, Briefcase, Code, Sparkles, Award, Trophy } from "lucide-react";

interface SectionItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface EditorSidebarProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export function EditorSidebar({ activeSection, onSectionClick }: EditorSidebarProps) {
  const sections: SectionItem[] = [
    { id: "personal-info", label: "Personal Info", icon: <User className="h-4 w-4" /> },
    { id: "summary", label: "Professional Summary", icon: <FileText className="h-4 w-4" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "experience", label: "Work Experience", icon: <Briefcase className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="h-4 w-4" /> },
    { id: "skills", label: "Skills", icon: <Sparkles className="h-4 w-4" /> },
    { id: "certifications", label: "Certifications", icon: <Award className="h-4 w-4" /> },
    { id: "achievements", label: "Achievements", icon: <Trophy className="h-4 w-4" /> },
  ];

  const handleSectionClick = (id: string) => {
    onSectionClick(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="flex md:flex-col overflow-x-auto md:overflow-x-visible gap-2 pb-4 md:pb-0 scrollbar-none sticky top-20 z-10 bg-surface md:bg-transparent">
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            type="button"
            onClick={() => handleSectionClick(sec.id)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              isActive
                ? "bg-text-primary text-white shadow-sm"
                : "text-text-secondary hover:text-text-primary hover:bg-surface-muted/50 border border-transparent"
            }`}
          >
            {sec.icon}
            <span>{sec.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
