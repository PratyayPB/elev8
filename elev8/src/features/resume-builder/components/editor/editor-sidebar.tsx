"use client";

import React from "react";
import { User, FileText, GraduationCap, Briefcase, Code, Sparkles, Award, Trophy } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const handleValueChange = (val: string) => {
    onSectionClick(val);
  };

  const activeItem = sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <div className="w-full bg-dashboard-card rounded-xl border border-border shadow-sm p-2 mb-6">
      <Select value={activeItem.id} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full h-12 bg-surface text-base font-semibold border-none focus:ring-0 focus:ring-offset-0">
          <div className="flex items-center gap-3">
            {activeItem.icon}
            <span>{activeItem.label}</span>
          </div>
        </SelectTrigger>
        <SelectContent>
          {sections.map((sec) => (
            <SelectItem key={sec.id} value={sec.id} className="py-2.5">
              <div className="flex items-center gap-3 font-medium">
                {sec.icon}
                <span>{sec.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
