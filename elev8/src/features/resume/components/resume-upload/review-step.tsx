"use client";

import { useResumeRequestStore } from "../../hooks/use-resume-request";
import { ResumeRequestService } from "../../services/resume-request.service";
import { createResumeAssessmentJob } from "../../actions/resume-actions";
import { useState } from "react";
import { Loader2, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export function ReviewStep() {
  const { requestData, prevStep, setStep, reset } = useResumeRequestStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      // 1. Validate request data
      const finalRequest = ResumeRequestService.buildRequest(requestData);

      if (!finalRequest.uploadedFile) {
        throw new Error("No resume file selected. Please go back and upload your PDF.");
      }

      // 2. Prepare FormData payload for Server Action
      const formData = new FormData();
      formData.append("file", finalRequest.uploadedFile);
      formData.append("role", finalRequest.role);
      formData.append("experienceLevel", finalRequest.experienceLevel);
      formData.append("personalization", JSON.stringify(finalRequest.personalization));

      // 3. Trigger Server Action to upload PDF & start Trigger.dev pipeline
      const response = await createResumeAssessmentJob(formData);

      if (response.success) {
        reset();
        router.push(`/resumes?jobId=${response.jobId}`);
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Failed to start resume assessment. Please check your inputs.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const answeredCount = requestData.personalization?.answers.length || 0;
  const file = requestData.uploadedFile;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Review Resume Request
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          Please confirm your uploaded file and target details before starting the AI assessment.
        </p>
      </div>

      {/* Uploaded File Details */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Uploaded File</h3>
          <button
            onClick={() => setStep(1)}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Edit
          </button>
        </div>

        {file ? (
          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
            <FileText className="w-6 h-6 text-red-500 shrink-0" />
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{file.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {(file.size / (1024 * 1024)).toFixed(2)} MB • PDF
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-red-500">No file uploaded.</p>
        )}
      </div>

      {/* Target Details */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-bold">
            Target & Experience
          </h3>
          <button
            onClick={() => setStep(1)}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Edit
          </button>
        </div>

        <dl className="grid grid-cols-2 gap-y-4 text-sm">
          <div>
            <dt className="text-gray-500 dark:text-gray-400 text-xs">Target Role</dt>
            <dd className="font-semibold text-gray-900 dark:text-gray-100 mt-1">
              {requestData.role}
            </dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400 text-xs">Experience Level</dt>
            <dd className="font-semibold text-gray-900 dark:text-gray-100 mt-1">
              {requestData.experienceLevel}
            </dd>
          </div>
        </dl>
      </div>

      {/* Personalization Summary */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personalization</h3>
          <button
            onClick={() => setStep(2)}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Edit
          </button>
        </div>

        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {requestData.personalization?.skipped
            ? "Skipped Personalization"
            : `${answeredCount} Personalization Questions Answered`}
        </p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 rounded-xl text-sm font-medium border border-red-200 dark:border-red-900/50">
          {error}
        </div>
      )}

      {/* Footer Actions */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <button
          type="button"
          onClick={prevStep}
          disabled={isSubmitting}
          className="px-5 py-2.5 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="flex items-center px-6 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:disabled:bg-blue-900 transition-colors shadow-sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Submitting & Processing...
            </>
          ) : (
            "Start AI Assessment"
          )}
        </button>
      </div>
    </div>
  );
}
