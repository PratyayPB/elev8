import { InterviewWizard } from "@/features/interview/components/interview-wizard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate Interview | Elev8",
  description: "Create a personalized interview simulation.",
};

export default function NewInterviewPage() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-5xl">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Generate New Interview
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Tell us about the role you are targeting and we will build a tailored mock interview.
        </p>
      </div>
      
      <InterviewWizard />
    </div>
  );
}
