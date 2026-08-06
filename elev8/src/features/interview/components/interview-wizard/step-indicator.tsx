import { Check } from "lucide-react";
import { clsx } from "clsx";

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { num: 1, label: "Required Inputs" },
    { num: 2, label: "Personalization" },
    { num: 3, label: "Review" },
  ];

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.num;
        const isCurrent = currentStep === step.num;

        return (
          <div key={step.num} className="flex items-center">
            <div
              className={clsx(
                "flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-bold transition-colors",
                isCompleted
                  ? "bg-green-500 border-green-500 text-white"
                  : isCurrent
                  ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                  : "border-gray-300 text-gray-400 dark:border-gray-700 dark:text-gray-600"
              )}
            >
              {isCompleted ? <Check className="w-5 h-5" /> : step.num}
            </div>
            <span
              className={clsx(
                "ml-2 text-sm font-medium",
                isCompleted || isCurrent
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-400 dark:text-gray-600"
              )}
            >
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <div
                className={clsx(
                  "w-12 h-1 mx-4 rounded-full transition-colors",
                  isCompleted ? "bg-green-500" : "bg-gray-200 dark:bg-gray-800"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
