import { useInterviewForm } from "../../hooks/use-interview-form";
import { Navigation } from "./navigation";
import { EXPERIENCE_LEVELS, DIFFICULTY_LEVELS, INTERVIEW_TYPES } from "../../constants/index";
import { clsx } from "clsx";

export function Stage1Step() {
  const { form, onSubmit } = useInterviewForm();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = form;

  const currentRole = watch("role");
  const currentExperience = watch("experienceLevel");
  const currentDifficulty = watch("difficulty");
  const currentType = watch("interviewType");

  const isFormValid = currentRole?.length >= 2 && currentExperience && currentDifficulty && currentType;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Required Inputs
      </h2>

      <div className="space-y-8">
        {/* Role Selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Target Role
          </label>
          <input
            {...register("role")}
            type="text"
            placeholder="e.g. Frontend Developer"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
          {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
        </div>

        {/* Experience Selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Experience Level
          </label>
          <div className="grid grid-cols-2 gap-3">
            {EXPERIENCE_LEVELS.map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setValue("experienceLevel", level, { shouldValidate: true })}
                className={clsx(
                  "p-4 rounded-xl border-2 text-left transition-all",
                  currentExperience === level
                    ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                )}
              >
                <div className={clsx("font-semibold", currentExperience === level ? "text-blue-700 dark:text-blue-400" : "text-gray-900 dark:text-gray-200")}>
                  {level}
                </div>
              </button>
            ))}
          </div>
          {errors.experienceLevel && <p className="text-red-500 text-sm mt-1">{errors.experienceLevel.message}</p>}
        </div>

        {/* Difficulty Selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Interview Difficulty
          </label>
          <div className="grid grid-cols-3 gap-3">
            {DIFFICULTY_LEVELS.map((diff) => (
              <button
                key={diff}
                type="button"
                onClick={() => setValue("difficulty", diff, { shouldValidate: true })}
                className={clsx(
                  "p-4 rounded-xl border-2 text-center transition-all",
                  currentDifficulty === diff
                    ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                )}
              >
                <div className={clsx("font-semibold", currentDifficulty === diff ? "text-blue-700 dark:text-blue-400" : "text-gray-900 dark:text-gray-200")}>
                  {diff}
                </div>
              </button>
            ))}
          </div>
          {errors.difficulty && <p className="text-red-500 text-sm mt-1">{errors.difficulty.message}</p>}
        </div>

        {/* Interview Type Selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Interview Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            {INTERVIEW_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setValue("interviewType", type.label as any, { shouldValidate: true })}
                className={clsx(
                  "p-4 rounded-xl border-2 text-left transition-all",
                  currentType === type.label
                    ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                )}
              >
                <div className={clsx("font-semibold mb-1", currentType === type.label ? "text-blue-700 dark:text-blue-400" : "text-gray-900 dark:text-gray-200")}>
                  {type.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-between">
                  <span>{type.description}</span>
                  <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-xs">{type.count} Qs</span>
                </div>
              </button>
            ))}
          </div>
          {errors.interviewType && <p className="text-red-500 text-sm mt-1">{errors.interviewType.message}</p>}
        </div>
      </div>

      <Navigation 
        onNext={handleSubmit(onSubmit)} 
        isNextDisabled={!isFormValid} 
      />
    </div>
  );
}
