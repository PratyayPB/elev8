import { PageHeader } from "@/components/dashboard";
import { ResumeWizardContainer } from "@/features/resume/components/resume-upload/wizard-container";

export const metadata = {
  title: "New Resume Audit | Elev8",
  description: "Upload your resume and get an in-depth AI evaluation.",
};

export default function NewResumePage() {
  return (
    <div className="space-y-8 pb-10">
      <PageHeader
        section="Resume Audit"
        title="Start Resume Assessment"
        description="Upload your resume PDF and customize targets to analyze ATS match rate, keyword density, and structural improvements."
      />
      <ResumeWizardContainer />
    </div>
  );
}
