"use client";

import { useResumeRequestStore } from "../../hooks/use-resume-request";
import { useResumeUpload } from "../../hooks/use-resume-upload";
import { UploadDropzone } from "./upload-dropzone";
import { FilePreview } from "./file-preview";
import { RoleSelector } from "./role-selector";
import { ExperienceSelector } from "./experience-selector";
import { Navigation } from "./navigation";

export function Stage1Step() {
  const { requestData, updateRequestData, nextStep } = useResumeRequestStore();
  const { uploadedFile, error, validateAndSetFile, removeFile } = useResumeUpload();

  const isFormValid =
    uploadedFile !== null &&
    requestData.role !== undefined &&
    requestData.role.trim().length >= 2 &&
    requestData.experienceLevel !== undefined;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Upload Your Resume
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          Upload your latest CV/resume in PDF format and specify your target role to get an in-depth AI evaluation.
        </p>
      </div>

      {/* Upload Dropzone or File Preview */}
      {!uploadedFile ? (
        <UploadDropzone onFileSelect={validateAndSetFile} error={error} />
      ) : (
        <FilePreview file={uploadedFile} onRemove={removeFile} />
      )}

      {/* Target Role Selector */}
      <RoleSelector
        value={requestData.role || ""}
        onChange={(role) => updateRequestData({ role })}
      />

      {/* Experience Level Selector */}
      <ExperienceSelector
        value={requestData.experienceLevel || "Intermediate"}
        onChange={(experienceLevel) => updateRequestData({ experienceLevel })}
      />

      {/* Navigation */}
      <Navigation
        onNext={nextStep}
        isNextDisabled={!isFormValid}
        nextLabel="Continue to Personalization"
      />
    </div>
  );
}
