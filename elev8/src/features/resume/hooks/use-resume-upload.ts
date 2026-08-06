import { useState, useCallback } from "react";
import { MAX_FILE_SIZE_BYTES, SUPPORTED_FILE_TYPES } from "../constants";
import { useResumeRequestStore } from "./use-resume-request";

export function useResumeUpload() {
  const { requestData, updateRequestData } = useResumeRequestStore();
  const [error, setError] = useState<string | null>(null);

  const validateAndSetFile = useCallback(
    (file: File) => {
      setError(null);

      if (!SUPPORTED_FILE_TYPES.includes(file.type)) {
        setError("Invalid file format. Please upload a PDF document (.pdf).");
        return false;
      }

      if (file.size <= 0) {
        setError("File is empty. Please upload a valid resume PDF.");
        return false;
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        setError("File size exceeds 10 MB limit. Please upload a smaller file.");
        return false;
      }

      updateRequestData({ uploadedFile: file });
      return true;
    },
    [updateRequestData]
  );

  const removeFile = useCallback(() => {
    updateRequestData({ uploadedFile: null });
    setError(null);
  }, [updateRequestData]);

  return {
    uploadedFile: requestData.uploadedFile || null,
    error,
    setError,
    validateAndSetFile,
    removeFile,
  };
}
