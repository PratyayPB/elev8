"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sparkles,
  AlertCircle,
  Loader2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Building,
} from "lucide-react";
import { toast } from "sonner";
import { ResumeCompanyType } from "@prisma/client";
import { BuilderResumeArtifact } from "../../types";

interface AiBuildDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  resumeId: string;
  hasExistingContent: boolean;
  onSuccess: (newArtifact?: BuilderResumeArtifact) => void;
}

const COMPANY_TYPE_OPTIONS: { label: string; value: ResumeCompanyType }[] = [
  { label: "Startup", value: "STARTUP" },
  { label: "Product Company", value: "PRODUCT_COMPANY" },
  { label: "Consulting", value: "CONSULTING" },
  { label: "FAANG / Enterprise", value: "FAANG_ENTERPRISE" },
  { label: "Government", value: "GOVERNMENT" },
  { label: "Non-Profit", value: "NON_PROFIT" },
  { label: "Agency", value: "AGENCY" },
  { label: "Other", value: "OTHER" },
];

export function AiBuildDialog({
  isOpen,
  onOpenChange,
  resumeId,
  hasExistingContent,
  onSuccess,
}: AiBuildDialogProps) {
  const [checkingProfile, setCheckingProfile] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState<boolean | null>(null);

  // Form State
  const [targetJobTitle, setTargetJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [targetCompany, setTargetCompany] = useState("");
  const [targetCompanyType, setTargetCompanyType] = useState<ResumeCompanyType | "">("");

  // Workflow State: 'form' | 'confirm' | 'generating' | 'error'
  const [step, setStep] = useState<"form" | "confirm" | "generating" | "error">("form");
  const [jobId, setJobId] = useState<string | null>(null);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentStepText, setCurrentStepText] = useState("Initializing AI Build...");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Check Profile Completion when dialog opens
  useEffect(() => {
    if (isOpen) {
      setCheckingProfile(true);
      setErrorMessage(null);
      setStep("form");
      fetch(`/api/builder/resumes/${resumeId}/ai-build`)
        .then((res) => res.json())
        .then((data) => {
          setIsProfileComplete(Boolean(data.isCompleted));
        })
        .catch((err) => {
          console.error("Failed to check profile completion status:", err);
          setIsProfileComplete(false);
        })
        .finally(() => {
          setCheckingProfile(false);
        });
    }
  }, [isOpen, resumeId]);

  // Polling Trigger.dev Job Status when generating
  useEffect(() => {
    if (step !== "generating" || !jobId) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(
          `/api/builder/resumes/${resumeId}/ai-build/status?jobId=${jobId}`
        );
        if (!res.ok) throw new Error("Failed to check job status");

        const data = await res.json();
        const job = data.job;

        if (job) {
          if (job.progress !== undefined) setCurrentProgress(job.progress);
          if (job.step) setCurrentStepText(job.step);

          if (job.status === "COMPLETED") {
            clearInterval(interval);
            toast.success("AI Resume Generated Successfully!", {
              description: "Your tailored resume content has been loaded into the editor.",
            });
            onSuccess();
            onOpenChange(false);
          } else if (job.status === "FAILED") {
            clearInterval(interval);
            setErrorMessage(job.error || "AI generation failed. Please try again.");
            setStep("error");
            toast.error("AI Resume Build failed", {
              description: "Your existing resume has not been changed.",
            });
          }
        }
      } catch (err) {
        console.error("Error polling AI build status:", err);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [step, jobId, resumeId, onSuccess, onOpenChange]);

  const handleStartGeneration = async () => {
    if (!targetJobTitle.trim()) {
      toast.error("Target Job Title is required");
      return;
    }
    if (!jobDescription.trim()) {
      toast.error("Job Description is required");
      return;
    }

    // If existing content exists and we are still in 'form' step, require confirmation
    if (hasExistingContent && step === "form") {
      setStep("confirm");
      return;
    }

    setStep("generating");
    setCurrentProgress(10);
    setCurrentStepText("Dispatching background task...");
    setErrorMessage(null);

    try {
      const res = await fetch(`/api/builder/resumes/${resumeId}/ai-build`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetJobTitle: targetJobTitle.trim(),
          jobDescription: jobDescription.trim(),
          targetCompany: targetCompany.trim() || undefined,
          targetCompanyType: targetCompanyType || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to start AI Resume Build");
      }

      setJobId(data.jobId);
    } catch (err: any) {
      console.error("AI build trigger error:", err);
      setErrorMessage(err.message || "Failed to trigger AI resume build.");
      setStep("error");
      toast.error("AI Resume Build failed", {
        description: err.message || "Your existing resume has not been changed.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-0 overflow-hidden bg-dashboard-card border-border">
        {/* Loading Profile Status */}
        {checkingProfile && (
          <div className="flex flex-col items-center justify-center p-12 space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-brand-primary-500" />
            <p className="text-sm font-medium text-text-secondary">
              Verifying profile completeness...
            </p>
          </div>
        )}

        {/* Profile Incomplete Blocker */}
        {!checkingProfile && isProfileComplete === false && (
          <div className="p-6">
            <DialogHeader>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 mb-3 border border-amber-500/20">
                <AlertCircle className="h-7 w-7" />
              </div>
              <DialogTitle className="text-center text-xl font-display font-bold text-text-primary">
                Complete Your Profile First
              </DialogTitle>
              <DialogDescription className="text-center text-sm text-text-secondary pt-2 leading-relaxed">
                You must have a completed Profile to use <strong>AI Resume Build</strong>.
                Elev8 requires verified information from your profile (education, experience, skills)
                to build a truthful, high-impact resume without fabricating details.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 p-4 rounded-xl bg-surface-muted border border-border space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                <ShieldCheck className="h-4 w-4 text-brand-primary-500" />
                <span>Strict No-Fabrication Guarantee</span>
              </div>
              <p className="text-xs text-text-secondary leading-normal">
                Elev8 never fabricates past employers, degrees, or years of experience.
                Complete your profile so the AI can extract genuine facts to highlight.
              </p>
            </div>

            <DialogFooter className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="rounded-xl text-xs font-semibold"
              >
                Close
              </Button>
              <Button
                type="button"
                asChild
                className="rounded-xl text-xs font-semibold bg-text-primary text-white hover:bg-black/80 dark:hover:bg-brand-secondary-200"
              >
                <Link href="/dashboard/profile" onClick={() => onOpenChange(false)}>
                  Go to Profile <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </DialogFooter>
          </div>
        )}

        {/* Active AI Build Form */}
        {!checkingProfile && isProfileComplete === true && (
          <div className="p-6">
            {step === "form" && (
              <>
                <DialogHeader className="pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-brand-primary-500/10 text-brand-primary-500">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <DialogTitle className="text-lg font-display font-bold text-text-primary">
                        Build Resume using AI
                      </DialogTitle>
                      <DialogDescription className="text-xs text-text-secondary">
                        Provide the target job requirements to generate a tailored, ATS-optimized resume.
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto pr-1">
                  {/* Target Job Title */}
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-text-primary flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-text-secondary" />
                        Target Job Title / Role <span className="text-red-500">*</span>
                      </span>
                    </Label>
                    <Input
                      placeholder="e.g. Senior Full Stack Engineer"
                      value={targetJobTitle}
                      onChange={(e) => setTargetJobTitle(e.target.value)}
                      className="rounded-xl text-xs bg-surface-muted border-border"
                      maxLength={100}
                    />
                  </div>

                  {/* Job Description */}
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-text-primary">
                      Job Description <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      placeholder="Paste the complete job description, requirements, or responsibilities..."
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      className="rounded-xl text-xs bg-surface-muted border-border min-h-[120px] resize-y"
                      maxLength={10000}
                    />
                    <p className="text-[11px] text-text-secondary">
                      The AI will align terminology and highlight relevant genuine achievements from your profile.
                    </p>
                  </div>

                  {/* Target Company & Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                        <Building className="h-3.5 w-3.5 text-text-secondary" />
                        Target Company <span className="text-text-secondary font-normal text-[10px]">(Optional)</span>
                      </Label>
                      <Input
                        placeholder="e.g. Google, Stripe, Notion"
                        value={targetCompany}
                        onChange={(e) => setTargetCompany(e.target.value)}
                        className="rounded-xl text-xs bg-surface-muted border-border"
                        maxLength={100}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold text-text-primary">
                        Company Type <span className="text-text-secondary font-normal text-[10px]">(Optional)</span>
                      </Label>
                      <Select
                        value={targetCompanyType}
                        onValueChange={(val) => setTargetCompanyType(val as ResumeCompanyType)}
                      >
                        <SelectTrigger className="rounded-xl text-xs bg-surface-muted border-border">
                          <SelectValue placeholder="Select company type" />
                        </SelectTrigger>
                        <SelectContent>
                          {COMPANY_TYPE_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value} className="text-xs">
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <DialogFooter className="pt-4 border-t border-border flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => onOpenChange(false)}
                    className="rounded-xl text-xs font-semibold"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    onClick={handleStartGeneration}
                    disabled={!targetJobTitle.trim() || !jobDescription.trim()}
                    className="rounded-xl text-xs font-semibold bg-text-primary text-white hover:bg-black/80 dark:hover:bg-brand-secondary-200"
                  >
                    <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                    Build with AI
                  </Button>
                </DialogFooter>
              </>
            )}

            {/* Confirmation Step (when existing content exists) */}
            {step === "confirm" && (
              <div className="py-2">
                <DialogHeader>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 mb-3 border border-amber-500/20">
                    <AlertCircle className="h-7 w-7" />
                  </div>
                  <DialogTitle className="text-center text-lg font-display font-bold text-text-primary">
                    Build Resume using AI?
                  </DialogTitle>
                  <DialogDescription className="text-center text-sm text-text-secondary pt-2 leading-relaxed">
                    AI will generate new resume content using your Profile, current resume data, and job requirements.
                    <br />
                    <span className="font-semibold text-text-primary mt-2 block">
                      Your current resume content will be replaced by the generated version.
                    </span>
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep("form")}
                    className="rounded-xl text-xs font-semibold"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    onClick={handleStartGeneration}
                    className="rounded-xl text-xs font-semibold bg-brand-primary-600 text-white hover:bg-brand-primary-700"
                  >
                    <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                    Confirm & Build with AI
                  </Button>
                </DialogFooter>
              </div>
            )}

            {/* Generating State */}
            {step === "generating" && (
              <div className="py-8 px-4 text-center space-y-6">
                <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-brand-primary-500/20 animate-ping" />
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary-500/10 text-brand-primary-500 border border-brand-primary-500/30">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-display font-bold text-text-primary">
                    Generating Tailored Resume...
                  </h3>
                  <p className="text-xs font-medium text-brand-primary-600 dark:text-brand-primary-400">
                    {currentStepText}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-surface-muted rounded-full h-2 overflow-hidden border border-border">
                  <div
                    className="bg-brand-primary-500 h-2 transition-all duration-500 rounded-full"
                    style={{ width: `${currentProgress}%` }}
                  />
                </div>

                <p className="text-[11px] text-text-secondary">
                  Trigger.dev is processing your resume in the background with Gemini AI.
                  Please do not close this tab.
                </p>
              </div>
            )}

            {/* Error State */}
            {step === "error" && (
              <div className="py-4">
                <DialogHeader>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 mb-3 border border-red-500/20">
                    <AlertCircle className="h-7 w-7" />
                  </div>
                  <DialogTitle className="text-center text-lg font-display font-bold text-text-primary">
                    AI Resume Build Failed
                  </DialogTitle>
                  <DialogDescription className="text-center text-sm text-text-secondary pt-2">
                    {errorMessage || "An unexpected error occurred during generation."}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 p-3 rounded-xl bg-surface-muted border border-border text-center">
                  <p className="text-xs text-text-secondary">
                    Your existing resume content has not been changed.
                  </p>
                </div>

                <DialogFooter className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => onOpenChange(false)}
                    className="rounded-xl text-xs font-semibold"
                  >
                    Close
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep("form")}
                    className="rounded-xl text-xs font-semibold bg-text-primary text-white hover:bg-black/80 dark:hover:bg-brand-secondary-200"
                  >
                    Try Again
                  </Button>
                </DialogFooter>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
