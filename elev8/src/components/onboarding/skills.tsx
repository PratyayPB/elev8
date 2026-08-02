"use client";

import React, { useState } from "react";
import { CategorizedSkills, UserProfileData } from "@/features/profile/types";
import { Navigation } from "./navigation";
import { Sparkles, Plus, X } from "lucide-react";

interface SkillsStepProps {
  initialValues: Partial<UserProfileData>;
  currentStep: number;
  isSubmitting: boolean;
  onSubmit: (data: { skills: CategorizedSkills }) => void;
  onPrevious: () => void;
  onSkip: () => void;
}

export function SkillsStep({
  initialValues,
  currentStep,
  isSubmitting,
  onSubmit,
  onPrevious,
  onSkip,
}: SkillsStepProps) {
  const [skills, setSkills] = useState<CategorizedSkills>({
    languages: initialValues.skills?.languages || [],
    frameworks: initialValues.skills?.frameworks || [],
    databases: initialValues.skills?.databases || [],
    cloud: initialValues.skills?.cloud || [],
    tools: initialValues.skills?.tools || [],
    softSkills: initialValues.skills?.softSkills || [],
  });

  const [inputState, setInputState] = useState({
    languages: "",
    frameworks: "",
    databases: "",
    cloud: "",
    tools: "",
    softSkills: "",
  });

  const categories: { key: keyof CategorizedSkills; label: string; placeholder: string }[] = [
    { key: "languages", label: "Programming Languages", placeholder: "TypeScript, Python, Go..." },
    { key: "frameworks", label: "Frameworks & Libraries", placeholder: "React, Next.js, FastAPI..." },
    { key: "databases", label: "Databases", placeholder: "PostgreSQL, MongoDB, Redis..." },
    { key: "cloud", label: "Cloud Platforms", placeholder: "AWS, GCP, Vercel, Supabase..." },
    { key: "tools", label: "Tools & DevOps", placeholder: "Docker, Git, Webpack, Figma..." },
    { key: "softSkills", label: "Soft Skills & Mindset", placeholder: "Leadership, Agile, Communication..." },
  ];

  const addSkill = (category: keyof CategorizedSkills) => {
    const val = inputState[category].trim();
    if (!val) return;
    if (!skills[category].includes(val)) {
      setSkills((prev) => ({
        ...prev,
        [category]: [...prev[category], val],
      }));
    }
    setInputState((prev) => ({ ...prev, [category]: "" }));
  };

  const removeSkill = (category: keyof CategorizedSkills, skillToRemove: string) => {
    setSkills((prev) => ({
      ...prev,
      [category]: prev[category].filter((s) => s !== skillToRemove),
    }));
  };

  const handleKeyDown = (category: keyof CategorizedSkills, e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(category);
    }
  };

  const handleNext = () => {
    onSubmit({ skills });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent-cyan" />
          Skills & Technical Expertise
        </h3>
        <p className="text-xs text-text-secondary">
          Add technologies, platforms, and soft skills in your repertoire.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div key={cat.key} className="p-4 rounded-xl bg-surface border border-border space-y-2.5">
            <label className="text-xs font-semibold text-text-primary block">{cat.label}</label>

            <div className="flex gap-2">
              <input
                type="text"
                value={inputState[cat.key]}
                onChange={(e) => setInputState({ ...inputState, [cat.key]: e.target.value })}
                onKeyDown={(e) => handleKeyDown(cat.key, e)}
                placeholder={cat.placeholder}
                className="flex-1 px-3 py-1.5 rounded-lg bg-surface-muted border border-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan"
              />
              <button
                type="button"
                onClick={() => addSkill(cat.key)}
                className="p-1.5 rounded-lg bg-accent-cyan text-black hover:brightness-105"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5 min-h-[28px]">
              {skills[cat.key].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-muted border border-border text-xs text-text-primary"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => removeSkill(cat.key, item)}
                    className="text-text-muted hover:text-accent-red"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Navigation
        currentStep={currentStep}
        isSubmitting={isSubmitting}
        onPrevious={onPrevious}
        onSkip={onSkip}
        onNext={handleNext}
      />
    </div>
  );
}
