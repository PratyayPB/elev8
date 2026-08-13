import { useInterviewRequestStore } from "../../hooks/use-interview-request";
import { Navigation } from "./navigation";
import { InterviewRequestService } from "../../services/interview-request.service";
import { createInterviewJob } from "../../actions/interview-actions";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function ReviewStep() {
  const { requestData, prevStep, setStep } = useInterviewRequestStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      // 1. Validate and build request object
      const finalRequest = InterviewRequestService.buildRequest(requestData);

      // 2. Trigger background generation job via server action
      const { interviewId } = await createInterviewJob(finalRequest);

      // 3. Redirect user (or show progress)
      alert(`Interview generation started successfully! (ID: ${interviewId})`);
      router.push(`/dashboard/interviews`);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Failed to start interview generation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const answeredCount = requestData.personalization?.answers.length || 0;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Review Interview Request
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Verify your selections before we generate the interview.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Required Inputs</h3>
          <button 
            onClick={() => setStep(1)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Edit
          </button>
        </div>
        
        <dl className="grid grid-cols-2 gap-y-4 text-sm">
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Target Role</dt>
            <dd className="font-semibold text-gray-900 dark:text-gray-100 mt-1">{requestData.role}</dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Experience</dt>
            <dd className="font-semibold text-gray-900 dark:text-gray-100 mt-1">{requestData.experienceLevel}</dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Difficulty</dt>
            <dd className="font-semibold text-gray-900 dark:text-gray-100 mt-1">{requestData.difficulty}</dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Interview Type</dt>
            <dd className="font-semibold text-gray-900 dark:text-gray-100 mt-1">
              {requestData.interviewType} <span className="text-gray-400 font-normal">({requestData.questionCount} Qs)</span>
            </dd>
          </div>
        </dl>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personalization</h3>
          <button 
            onClick={() => setStep(2)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Edit
          </button>
        </div>
        
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {requestData.personalization?.skipped 
            ? "Skipped Personalization" 
            : `${answeredCount} Questions Answered`}
        </p>
      </div>

      {error && (
        <div className="mt-6 p-4 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 rounded-xl text-sm font-medium border border-red-200 dark:border-red-900/50">
          {error}
        </div>
      )}

      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
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
          className="flex items-center px-6 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:disabled:bg-blue-900 transition-colors"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Generating Request...
            </>
          ) : (
            "Build Interview Request"
          )}
        </button>
      </div>
    </div>
  );
}
