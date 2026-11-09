"use client";

import { useResumeRequestStore } from "../../hooks/use-resume-request";
import { ResumeRequestService } from "../../services/resume-request.service";
import { createResumeAssessmentJob } from "../../actions/resume-actions";
import { useState } from "react";
import { Loader2, FileText, Sparkles, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { normalizeError } from "@/lib/error-handler";
import { useBackgroundWorkflow } from "@/hooks/use-background-workflow";
import { upload } from "@vercel/blob/client";

export function ReviewStep() {
  const { requestData, prevStep, setStep, reset } = useResumeRequestStore();
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const router = useRouter();
  const { runWorkflow, isInitiating } = useBackgroundWorkflow();

  const handleSubmit = async () => {
    setError(null);

    try {
      // 1. Validate request data
      const finalRequest = ResumeRequestService.buildRequest(requestData);

      if (!finalRequest.uploadedFile) {
        setError("No resume file selected. Please go back and upload your PDF.");
        return;
      }

      // 2. Direct client-to-storage upload bypassing Next.js server buffering
      setUploadProgress(0);
      const blob = await upload(finalRequest.uploadedFile.name, finalRequest.uploadedFile, {
        access: "public",
        handleUploadUrl: "/api/resumes/upload",
        onUploadProgress: (progress) => {
          setUploadProgress(progress.percentage);
        },
      });
      setUploadProgress(null);

      const includeProfile =
        !finalRequest.personalization.skipped && Boolean(finalRequest.personalization.profile);

      // 3. Trigger Server Action with direct blobUrl
      await runWorkflow({
        serviceName: "Resume Analysis",
        serviceType: "RESUME_SCORE",
        initiationMessage: "Initiating the workflow...",
        execute: async () =>
          await createResumeAssessmentJob({
            blobUrl: blob.url,
            role: finalRequest.role,
            roleDescription: finalRequest.roleDescription,
            experienceLevel: finalRequest.experienceLevel,
            includeProfile,
          }),
        extractJobId: (res) => (res.success ? res.data.jobId || res.data.resumeId : undefined),
        defaultViewUrl: "/dashboard/resumes",
        onInitiated: () => {
          reset();
          router.push("/dashboard/resumes");
        },
        onError: (err) => {
          setError(err.message);
        },
      });
    } catch (err: any) {
      setUploadProgress(null);
      console.error(err);
      const appError = normalizeError(err);
      setError(appError.message);
    }
  };

  const hasProfile = Boolean(requestData.personalization?.profile) && !requestData.personalization?.skipped;
  const file = requestData.uploadedFile;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-display font-bold text-text-primary">
          Review Resume Request
        </h2>
        <p className="text-text-secondary dark:text-zinc-300 mt-1 text-sm font-sans">
          Please confirm your uploaded file and target details before starting the AI assessment.
        </p>
      </div>

      {/* Uploaded File Details */}
      <div className="bg-surface-muted/60 dark:bg-[#161616] border border-border-subtle dark:border-white/10 rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-display font-bold text-text-primary">Uploaded File</h3>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="px-2.5 py-1 text-xs font-display font-semibold rounded-lg bg-white dark:bg-[#242424] text-text-secondary hover:text-text-primary dark:text-zinc-300 dark:hover:text-zinc-100 border border-border-subtle dark:border-white/10 transition-colors cursor-pointer"
          >
            Edit
          </button>
        </div>

        {file ? (
          <div className="flex items-center gap-3 p-3.5 bg-white dark:bg-[#202020] rounded-xl border border-border-subtle dark:border-white/10 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/40 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-sans font-bold text-text-primary dark:text-zinc-100 truncate">{file.name}</p>
              <p className="text-xs font-sans text-text-secondary dark:text-zinc-400 mt-0.5">
                {(file.size / (1024 * 1024)).toFixed(2)} MB • PDF
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm font-sans font-semibold text-rose-600 dark:text-rose-400">No file uploaded.</p>
        )}
      </div>

      {/* Target Details */}
      <div className="bg-surface-muted/60 dark:bg-[#161616] border border-border-subtle dark:border-white/10 rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-display font-bold text-text-primary">
            Target & Experience
          </h3>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="px-2.5 py-1 text-xs font-display font-semibold rounded-lg bg-white dark:bg-[#242424] text-text-secondary hover:text-text-primary dark:text-zinc-300 dark:hover:text-zinc-100 border border-border-subtle dark:border-white/10 transition-colors cursor-pointer"
          >
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 bg-white dark:bg-[#202020] rounded-xl border border-border-subtle dark:border-white/10 shadow-sm">
            <span className="text-[11px] font-display font-semibold text-text-secondary dark:text-zinc-400 uppercase tracking-wider block">
              Target Role
            </span>
            <span className="text-sm font-medium text-text-primary dark:text-zinc-100 mt-1 block truncate">
              {requestData.role}
            </span>
          </div>

          <div className="p-3 bg-white dark:bg-[#202020] rounded-xl border border-border-subtle dark:border-white/10 shadow-sm">
            <span className="text-[11px] font-display font-semibold text-text-secondary dark:text-zinc-400 uppercase tracking-wider block">
              Experience Level
            </span>
            <span className="text-sm font-medium text-text-primary dark:text-zinc-100 mt-1 block">
              {requestData.experienceLevel}
            </span>
          </div>

          {requestData.roleDescription && (
            <div className="sm:col-span-2 p-3 bg-white dark:bg-[#202020] rounded-xl border border-border-subtle dark:border-white/10 shadow-sm">
              <span className="text-[11px] font-display font-semibold text-text-secondary dark:text-zinc-400 uppercase tracking-wider block">
                Job Description
              </span>
              <p className="text-xs text-text-primary dark:text-zinc-200 mt-1 whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
                {requestData.roleDescription}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Personalization Summary */}
      <div className="bg-surface-muted/60 dark:bg-[#161616] border border-border-subtle dark:border-white/10 rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-display font-bold text-text-primary">Personalization</h3>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="px-2.5 py-1 text-xs font-display font-semibold rounded-lg bg-white dark:bg-[#242424] text-text-secondary hover:text-text-primary dark:text-zinc-300 dark:hover:text-zinc-100 border border-border-subtle dark:border-white/10 transition-colors cursor-pointer"
          >
            Edit
          </button>
        </div>

        <div className="p-3.5 bg-white dark:bg-[#202020] rounded-xl border border-border-subtle dark:border-white/10 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {hasProfile ? (
              <>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-display font-semibold text-emerald-700 dark:text-emerald-400">
                  Profile Personalization Enabled
                </span>
              </>
            ) : (
              <>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                <span className="text-xs font-display font-semibold text-text-secondary dark:text-zinc-400">
                  Skipped — No Profile Data
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl text-sm font-sans font-semibold border border-rose-100 dark:border-rose-900/40">
          {error}
        </div>
      )}

      {/* Footer Actions */}
      <div className="mt-8 pt-6 border-t border-border-subtle dark:border-white/10 flex justify-between items-center">
        <button
          type="button"
          onClick={prevStep}
          disabled={isInitiating || uploadProgress !== null}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-display font-semibold text-text-primary dark:text-zinc-100 bg-surface-muted dark:bg-[#242424] hover:bg-border-subtle dark:hover:bg-[#2e2e2e] transition-colors border border-border-subtle dark:border-white/10 disabled:opacity-50 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isInitiating || uploadProgress !== null}
          className="flex items-center px-6 py-2.5 rounded-xl font-display font-semibold text-white dark:text-brand-primary-900 bg-text-primary hover:bg-black/85 dark:hover:bg-brand-secondary-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm active:scale-[0.98] cursor-pointer"
        >
          {uploadProgress !== null ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              {uploadProgress > 0 ? `Uploading (${uploadProgress}%)...` : "Uploading resume..."}
            </>
          ) : isInitiating ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Initiating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2 text-amber-500 dark:text-amber-400" />
              Start AI Assessment
            </>
          )}
        </button>
      </div>
    </div>
  );
}
