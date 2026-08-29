"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ProfileData,
  ProfileCreateInput,
  CareerStatus,
  PrimaryGoal,
  SkillProficiency,
  TargetCompanyType,
} from "../types";
import {
  CURRENT_STATUS_OPTIONS,
  PRIMARY_GOAL_OPTIONS,
  SKILL_PROFICIENCY_OPTIONS,
  TARGET_COMPANY_TYPE_OPTIONS,
  WEEKLY_LEARNING_HOURS_OPTIONS,
  PROFILE_VALIDATION,
} from "../constants";
import { createProfileAction, updateProfileAction } from "../services/actions";
import { normalizeCareerStatus } from "../utils";
import {
  User,
  Briefcase,
  GraduationCap,
  Target,
  Wrench,
  Sparkles,
  Clock,
  Plus,
  X,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { CountrySelect } from "@/components/modals/country-select";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProfileFormProps {
  initialProfile?: ProfileData | null;
  mode?: "create" | "edit";
  onSuccess?: (profile: ProfileData) => void;
}

export function ProfileForm({
  initialProfile,
  mode = initialProfile ? "edit" : "create",
  onSuccess,
}: ProfileFormProps) {
  const router = useRouter();

  // Form State
  // Basic Info
  const [name, setName] = useState(initialProfile?.name || "");
  const [age, setAge] = useState<number | "">(initialProfile?.age ?? 22);
  const [country, setCountry] = useState(initialProfile?.country || "");
  const [phoneCountryCode, setPhoneCountryCode] = useState(
    initialProfile?.phoneCountryCode || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    initialProfile?.phoneNumber || ""
  );

  // Career Status
  const [currentStatus, setCurrentStatus] = useState<CareerStatus>(
    initialProfile?.currentStatus || "STUDENT"
  );
  const [otherStatus, setOtherStatus] = useState("");
  const [currentRole, setCurrentRole] = useState(
    initialProfile?.currentRole || ""
  );
  const [yearsOfExperience, setYearsOfExperience] = useState<number | "">(
    initialProfile?.yearsOfExperience ?? 0
  );

  // Education
  const [highestQualification, setHighestQualification] = useState(
    initialProfile?.education?.highestQualification || ""
  );
  const [fieldOfStudy, setFieldOfStudy] = useState(
    initialProfile?.education?.fieldOfStudy || ""
  );

  // Career Goals
  const knownGoals: string[] = [
    "LAND_A_JOB",
    "GET_AN_INTERNSHIP",
    "SWITCH_CAREER",
    "GET_PROMOTED",
    "LEARN_NEW_SKILLS",
    "PREPARE_FOR_INTERVIEW",
    "BUILD_RESUME",
    "IMPROVE_RESUME",
    "BECOME_JOB_READY",
    "EXPLORE_CAREERS",
  ];
  const initialGoalRaw = initialProfile?.careerGoals?.primaryGoal;
  const isCustomGoal = Boolean(initialGoalRaw && !knownGoals.includes(initialGoalRaw));

  const [primaryGoal, setPrimaryGoal] = useState<PrimaryGoal>(
    isCustomGoal ? "OTHER" : (initialGoalRaw || "LAND_A_JOB")
  );
  const [otherPrimaryGoal, setOtherPrimaryGoal] = useState<string>(
    isCustomGoal ? (initialGoalRaw as string) : ""
  );
  const [targetRole, setTargetRole] = useState(
    initialProfile?.careerGoals?.targetRole || ""
  );

  // Skills
  const [skills, setSkills] = useState<
    { name: string; proficiency: SkillProficiency }[]
  >(
    initialProfile?.skills?.map((s) => ({
      name: s.name,
      proficiency: s.proficiency,
    })) || []
  );
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillProficiency, setNewSkillProficiency] =
    useState<SkillProficiency>("INTERMEDIATE");

  // Desired Skills
  const [desiredSkills, setDesiredSkills] = useState<string[]>(
    initialProfile?.desiredSkills || []
  );
  const [newDesiredSkill, setNewDesiredSkill] = useState("");

  // Target & Learning
  const [targetCompanyType, setTargetCompanyType] = useState<
    TargetCompanyType | ""
  >(initialProfile?.targetCompanyType || "");
  const [weeklyLearningHours, setWeeklyLearningHours] = useState<
    number | ""
  >(
    typeof initialProfile?.weeklyLearningHours === "number"
      ? initialProfile.weeklyLearningHours
      : ""
  );

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleAddSkill = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = newSkillName.trim();
    if (!trimmed) return;
    if (skills.some((s) => s.name.toLowerCase() === trimmed.toLowerCase())) {
      setErrorMessage(`Skill "${trimmed}" is already added.`);
      return;
    }
    if (skills.length >= PROFILE_VALIDATION.MAX_SKILLS) {
      setErrorMessage(
        `Maximum ${PROFILE_VALIDATION.MAX_SKILLS} skills allowed.`
      );
      return;
    }
    setSkills([...skills, { name: trimmed, proficiency: newSkillProficiency }]);
    setNewSkillName("");
    setErrorMessage(null);
  };

  const handleRemoveSkill = (indexToRemove: number) => {
    setSkills(skills.filter((_, idx) => idx !== indexToRemove));
  };

  const handleAddDesiredSkill = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = newDesiredSkill.trim();
    if (!trimmed) return;
    if (desiredSkills.some((s) => s.toLowerCase() === trimmed.toLowerCase())) {
      setErrorMessage(`Desired skill "${trimmed}" is already added.`);
      return;
    }
    if (desiredSkills.length >= PROFILE_VALIDATION.MAX_DESIRED_SKILLS) {
      setErrorMessage(
        `Maximum ${PROFILE_VALIDATION.MAX_DESIRED_SKILLS} desired skills allowed.`
      );
      return;
    }
    setDesiredSkills([...desiredSkills, trimmed]);
    setNewDesiredSkill("");
    setErrorMessage(null);
  };

  const handleRemoveDesiredSkill = (indexToRemove: number) => {
    setDesiredSkills(desiredSkills.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const finalStatus =
        currentStatus === "OTHER" && otherStatus.trim()
          ? normalizeCareerStatus(otherStatus)
          : currentStatus;

      const finalGoal =
        primaryGoal === "OTHER" && otherPrimaryGoal.trim()
          ? (otherPrimaryGoal.trim() as any)
          : primaryGoal;

      const payload: ProfileCreateInput = {
        name: name.trim(),
        age: Number(age) || 20,
        country: country.trim(),
        phoneCountryCode: phoneCountryCode.trim() || null,
        phoneNumber: phoneNumber.trim() || null,
        currentStatus: finalStatus,
        currentRole: currentRole.trim(),
        yearsOfExperience: Number(yearsOfExperience) || 0,
        highestQualification: highestQualification.trim(),
        fieldOfStudy: fieldOfStudy.trim(),
        primaryGoal: finalGoal,
        targetRole: targetRole.trim() || null,
        targetCompanyType: (targetCompanyType as TargetCompanyType) || null,
        weeklyLearningHours:
          typeof weeklyLearningHours === "number" ? weeklyLearningHours : null,
        skills,
        desiredSkills,
      };

      if (mode === "create") {
        const res = await createProfileAction(payload);
        if (res.success && res.profile) {
          setSuccessMessage("Profile created successfully!");
          if (onSuccess) {
            onSuccess(res.profile);
          } else {
            router.push("/dashboard");
            router.refresh();
          }
        } else {
          setErrorMessage(res.error || "Failed to create profile");
        }
      } else {
        const res = await updateProfileAction(payload);
        if (res.success && res.profile) {
          setSuccessMessage("Profile updated successfully!");
          if (onSuccess) {
            onSuccess(res.profile);
          } else {
            router.refresh();
          }
        } else {
          setErrorMessage(res.error || "Failed to update profile");
        }
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {errorMessage && (
        <div className="flex items-center gap-3 p-4 rounded-xl border border-rose-200 bg-rose-50 text-rose-800 text-sm font-sans">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div className="flex items-center gap-3 p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 text-sm font-sans">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* 1. Basic Info */}
      <div id="section-basic-info" className="scroll-mt-24 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-border-subtle">
          <div className="h-10 w-10 rounded-xl bg-surface-muted flex items-center justify-center text-text-primary">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-display font-bold text-text-primary">
              Basic Information
            </h2>
            <p className="text-xs font-sans text-text-secondary">
              Personal identity details for your profile.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Jane Doe"
              className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-secondary-50/40 focus:border-brand-secondary-50/60 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Age
            </label>
            <input
              type="number"
              required
              min={PROFILE_VALIDATION.AGE_MIN}
              max={PROFILE_VALIDATION.AGE_MAX}
              value={age}
              onChange={(e) =>
                setAge(e.target.value === "" ? "" : Number(e.target.value))
              }
              placeholder="22"
              className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-secondary-50/40 focus:border-brand-secondary-50/60 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Country
            </label>
            <CountrySelect
              value={country}
              onChange={(value) => setCountry(value)}
            />
          </div>

          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Phone Number
            </label>
            <PhoneInput
              codeValue={phoneCountryCode}
              numberValue={phoneNumber}
              onCodeChange={setPhoneCountryCode}
              onNumberChange={setPhoneNumber}
              placeholder="e.g. 9876543210"
              country={country}
            />
          </div>
        </div>
      </div>

      {/* 2. Current Career Status */}
      <div id="section-currentStatus" className="scroll-mt-24 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-border-subtle">
          <div className="h-10 w-10 rounded-xl bg-surface-muted flex items-center justify-center text-text-primary">
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-display font-bold text-text-primary">
              Current Career Status
            </h2>
            <p className="text-xs font-sans text-text-secondary">
              Where you currently stand in your professional journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Current Status
            </label>
            <Select
              value={currentStatus}
              onValueChange={(val) => setCurrentStatus(val as CareerStatus)}
            >
              <SelectTrigger className="rounded-xl border border-border-subtle bg-surface-subtle">
                <SelectValue placeholder="Select current status..." />
              </SelectTrigger>
              <SelectContent>
                {CURRENT_STATUS_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {currentStatus === "OTHER" && (
              <div className="mt-3 animate-in fade-in slide-in-from-top-1 duration-200">
                <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
                  Specify Status
                </label>
                <input
                  type="text"
                  value={otherStatus}
                  onChange={(e) => setOtherStatus(e.target.value)}
                  placeholder="e.g. Freelance Consultant, Sabbatical"
                  className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-secondary-50/40 focus:border-brand-secondary-50/60 transition-all"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Current Role / Title
            </label>
            <input
              type="text"
              required
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value)}
              placeholder="e.g. CS Student, Junior Developer"
              className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-secondary-50/40 focus:border-brand-secondary-50/60 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Years of Experience
            </label>
            <input
              type="number"
              required
              min={0}
              value={yearsOfExperience}
              onChange={(e) =>
                setYearsOfExperience(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
              placeholder="0"
              className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-secondary-50/40 focus:border-brand-secondary-50/60 transition-all"
            />
          </div>
        </div>
      </div>

      {/* 3. Education */}
      <div id="section-education" className="scroll-mt-24 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-border-subtle">
          <div className="h-10 w-10 rounded-xl bg-surface-muted flex items-center justify-center text-text-primary">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-display font-bold text-text-primary">
              Education
            </h2>
            <p className="text-xs font-sans text-text-secondary">
              Your academic credentials.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Highest Qualification
            </label>
            <input
              type="text"
              required
              value={highestQualification}
              onChange={(e) => setHighestQualification(e.target.value)}
              placeholder="e.g. Bachelor's Degree, Master's Degree, High School"
              className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-secondary-50/40 focus:border-brand-secondary-50/60 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Field of Study / Major
            </label>
            <input
              type="text"
              required
              value={fieldOfStudy}
              onChange={(e) => setFieldOfStudy(e.target.value)}
              placeholder="e.g. Computer Science, Information Technology"
              className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-secondary-50/40 focus:border-brand-secondary-50/60 transition-all"
            />
          </div>
        </div>
      </div>

      {/* 4. Career Goals */}
      <div id="section-careerGoals" className="scroll-mt-24 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-border-subtle">
          <div className="h-10 w-10 rounded-xl bg-surface-muted flex items-center justify-center text-text-primary">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-display font-bold text-text-primary">
              Career Goals
            </h2>
            <p className="text-xs font-sans text-text-secondary">
              What you want to achieve with Elev8.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Primary Goal
            </label>
            <Select
              value={primaryGoal}
              onValueChange={(val) => setPrimaryGoal(val as PrimaryGoal)}
            >
              <SelectTrigger className="rounded-xl border border-border-subtle bg-surface-subtle">
                <SelectValue placeholder="Select primary goal..." />
              </SelectTrigger>
              <SelectContent>
                {PRIMARY_GOAL_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {primaryGoal === "OTHER" && (
              <div className="mt-3 animate-in fade-in slide-in-from-top-1 duration-200">
                <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
                  Specify Primary Goal
                </label>
                <input
                  type="text"
                  required
                  value={otherPrimaryGoal}
                  onChange={(e) => setOtherPrimaryGoal(e.target.value)}
                  placeholder="e.g. Launch a Tech Startup, Transition to Freelancing"
                  className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-secondary-50/40 focus:border-brand-secondary-50/60 transition-all"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Target Role{" "}
              <span className="text-text-tertiary">
                (Optional for exploration)
              </span>
            </label>
            <input
              type="text"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              placeholder="e.g. Full Stack Developer, AI Engineer"
              className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-secondary-50/40 focus:border-brand-secondary-50/60 transition-all"
            />
          </div>
        </div>
      </div>

      {/* 5. Current Skills with Proficiency */}
      <div id="section-skills" className="scroll-mt-24 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-border-subtle">
          <div className="h-10 w-10 rounded-xl bg-surface-muted flex items-center justify-center text-text-primary">
            <Wrench className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-display font-bold text-text-primary">
              Current Skills
            </h2>
            <p className="text-xs font-sans text-text-secondary">
              Skills you currently possess with your proficiency level.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={newSkillName}
            onChange={(e) => setNewSkillName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSkill();
              }
            }}
            placeholder="Skill name (e.g. React, Python, PostgreSQL)"
            className="flex-1 px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-secondary-50/40 focus:border-brand-secondary-50/60 transition-all"
          />

          <div className="w-full sm:w-48">
            <Select
              value={newSkillProficiency}
              onValueChange={(val) =>
                setNewSkillProficiency(val as SkillProficiency)
              }
            >
              <SelectTrigger className="rounded-xl border border-border-subtle bg-surface-subtle">
                <SelectValue placeholder="Proficiency" />
              </SelectTrigger>
              <SelectContent>
                {SKILL_PROFICIENCY_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <button
            type="button"
            onClick={() => handleAddSkill()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 font-display font-semibold text-sm hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-colors"
          >
            <Plus className="h-4 w-4" /> Add Skill
          </button>
        </div>

        {skills.length > 0 ? (
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-subtle text-sm text-text-primary font-sans"
              >
                <span className="font-medium">{skill.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-dashboard-metricHighlight text-black font-display font-medium">
                  {skill.proficiency}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(index)}
                  className="text-text-tertiary hover:text-rose-500 transition-colors ml-1"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs font-sans text-text-secondary italic">
            No skills added yet. Type a skill above and click Add.
          </p>
        )}
      </div>

      {/* 6. Desired Skills */}
      <div id="section-desiredSkills" className="scroll-mt-24 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-border-subtle">
          <div className="h-10 w-10 rounded-xl bg-surface-muted flex items-center justify-center text-text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-display font-bold text-text-primary">
              Desired Skills
            </h2>
            <p className="text-xs font-sans text-text-secondary">
              Skills you want to learn or improve for career growth.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={newDesiredSkill}
            onChange={(e) => setNewDesiredSkill(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddDesiredSkill();
              }
            }}
            placeholder="Skill to learn (e.g. System Design, Docker, GraphQL)"
            className="flex-1 px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-secondary-50/40 focus:border-brand-secondary-50/60 transition-all"
          />

          <button
            type="button"
            onClick={() => handleAddDesiredSkill()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 font-display font-semibold text-sm hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-colors"
          >
            <Plus className="h-4 w-4" /> Add Desired Skill
          </button>
        </div>

        {desiredSkills.length > 0 ? (
          <div className="flex flex-wrap gap-2 pt-2">
            {desiredSkills.map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-subtle text-sm text-text-primary font-sans"
              >
                <span className="font-medium">{skill}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveDesiredSkill(index)}
                  className="text-text-tertiary hover:text-rose-500 transition-colors ml-1"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs font-sans text-text-secondary italic">
            No desired skills added yet.
          </p>
        )}
      </div>

      {/* 7. Target Level & Learning Preferences */}
      <div id="section-preferences" className="scroll-mt-24 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-border-subtle">
          <div className="h-10 w-10 rounded-xl bg-surface-muted flex items-center justify-center text-text-primary">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-display font-bold text-text-primary">
              Career Targeting & Learning
            </h2>
            <p className="text-xs font-sans text-text-secondary">
              Preferences that inform personalized guidance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Target Company Type
            </label>
            <Select
              value={targetCompanyType || ""}
              onValueChange={(val) =>
                setTargetCompanyType((val as TargetCompanyType) || "")
              }
            >
              <SelectTrigger className="rounded-xl border border-border-subtle bg-surface-subtle">
                <SelectValue placeholder="Select target company type..." />
              </SelectTrigger>
              <SelectContent>
                {TARGET_COMPANY_TYPE_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-xs font-display font-semibold text-text-primary mb-1.5">
              Weekly Learning Hours
            </label>
            <Select
              value={
                typeof weeklyLearningHours === "number"
                  ? String(weeklyLearningHours)
                  : ""
              }
              onValueChange={(val) =>
                setWeeklyLearningHours(val === "" ? "" : Number(val))
              }
            >
              <SelectTrigger className="rounded-xl border border-border-subtle bg-surface-subtle">
                <SelectValue placeholder="Select weekly learning hours..." />
              </SelectTrigger>
              <SelectContent>
                {WEEKLY_LEARNING_HOURS_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={String(opt.value)}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-end gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 font-display font-semibold text-sm hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-all disabled:opacity-50 shadow-sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Saving Profile...
            </>
          ) : mode === "create" ? (
            "Complete Profile Setup"
          ) : (
            "Save Profile Changes"
          )}
        </button>
      </div>
    </form>
  );
}
