"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOnboarding } from "@/providers/onboarding-provider";
import {
  OnboardingStepper,
  Step,
} from "@/features/profile/components/onboarding-stepper";
import {
  profileCreateSchema,
  ProfileCreateSchemaType,
} from "@/features/profile/schemas";
import { CountrySelect } from "@/components/modals/country-select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import {
  CareerStatus,
  PrimaryGoal,
  TargetCompanyType,
} from "@/features/profile/types";
import { normalizeCareerStatus } from "@/features/profile/utils";

const STEPS: Step[] = [
  {
    id: "basic",
    title: "Basic Information",
    subtitle: "Core profile details.",
  },
  { id: "career", title: "Career Information", subtitle: "Where you are now." },
  { id: "goals", title: "Career Goals", subtitle: "Where you want to go." },
];

const CAREER_STATUS_OPTIONS = [
  "STUDENT",
  "EMPLOYED",
  "SELF_EMPLOYED",
  "BUSINESS_OWNER",
  "FREELANCER",
  "JOB_SEEKER",
  "RECENT_GRADUATE",
  "OTHER"
];

const PRIMARY_GOAL_OPTIONS = [
  "LAND_A_JOB",
  "GET_AN_INTERNSHIP",
  "SWITCH_CAREER",
  "GET_PROMOTED",
  "LEARN_NEW_SKILLS",
  "PREPARE_FOR_INTERVIEW",
  "BUILD_RESUME",
  "IMPROVE_RESUME",
  "BECOME_JOB_READY",
  "EXPLORE_CAREERS"
];

export function OnboardingModal() {
  const { isOpen, profile, saveMandatory, saveOptional } = useOnboarding();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [otherStatus, setOtherStatus] = useState("");

  const form = useForm<ProfileCreateSchemaType>({
    resolver: zodResolver(profileCreateSchema),
    defaultValues: {
      name: profile?.name || "",
      age: profile?.age || undefined,
      country: profile?.country || "",
      phoneCountryCode: profile?.phoneCountryCode || "",
      phoneNumber: profile?.phoneNumber || "",
      currentStatus: profile?.currentStatus || undefined,
      currentRole: profile?.currentRole || "",
      yearsOfExperience: profile?.yearsOfExperience || undefined,
      primaryGoal: profile?.careerGoals?.primaryGoal || undefined,
      targetRole: profile?.careerGoals?.targetRole || "",
    },
  });

  useEffect(() => {
    if (profile) {
      form.reset({
        name: profile.name || "",
        age: profile.age || undefined,
        country: profile.country || "",
        phoneCountryCode: profile.phoneCountryCode || "",
        phoneNumber: profile.phoneNumber || "",
        currentStatus: profile.currentStatus || undefined,
        currentRole: profile.currentRole || "",
        yearsOfExperience: profile.yearsOfExperience || undefined,
        primaryGoal: profile.careerGoals?.primaryGoal || undefined,
        targetRole: profile.careerGoals?.targetRole || "",
      });
    }
  }, [profile, form]);

  const handleNext = async () => {
    let fieldsToValidate: any[] = [];

    switch (currentStep) {
      case 0:
        fieldsToValidate = ["name", "age", "country", "phoneCountryCode", "phoneNumber"];
        break;
      case 1:
        fieldsToValidate = [
          "currentStatus",
          "currentRole",
          "yearsOfExperience",
        ];
        break;
      case 2:
        fieldsToValidate = ["primaryGoal", "targetRole"];
        break;
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        form.handleSubmit(onSubmit, (errors) => {
          const errorKeys = Object.keys(errors || {});
          if (errorKeys.some(k => ["name", "age", "country", "phoneNumber", "phoneCountryCode"].includes(k))) {
            setCurrentStep(0);
          } else if (errorKeys.some(k => ["currentStatus", "currentRole", "yearsOfExperience"].includes(k))) {
            setCurrentStep(1);
          }
          setErrorMsg("Please fix the validation errors before submitting.");
        })();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data: ProfileCreateSchemaType) => {
    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      const mandatoryData = {
        name: data.name,
        age: data.age,
        country: data.country,
        phoneCountryCode: data.phoneCountryCode || null,
        phoneNumber: data.phoneNumber || null,
      };

      const mandatorySuccess = await saveMandatory(mandatoryData);
      if (!mandatorySuccess) {
        setErrorMsg("Failed to save mandatory profile information.");
        setIsSubmitting(false);
        return;
      }

      const finalStatus =
        data.currentStatus === "OTHER" && otherStatus.trim()
          ? normalizeCareerStatus(otherStatus)
          : data.currentStatus;

      const optionalData = {
        currentStatus: finalStatus,
        currentRole: data.currentRole,
        yearsOfExperience: data.yearsOfExperience,
        primaryGoal: data.primaryGoal,
        targetRole: data.targetRole,
      };

      const optionalSuccess = await saveOptional(optionalData);
      if (!optionalSuccess) {
        setErrorMsg("Failed to save optional profile details.");
        setIsSubmitting(false);
        return;
      }

      // The provider handles closing the modal when optional is saved
    } catch (err) {
      console.error(err);
      setErrorMsg("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent
        className="w-[90vw] md:w-[80vw] lg:w-[70vw] h-[90vh] md:h-[80vh] lg:h-[70vh] max-w-none max-h-none p-0 overflow-hidden flex bg-background dark:bg-[#000000] border border-border shadow-2xl rounded-2xl"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        hideCloseButton
      >
        {/* Left Column: Stepper (#111111 in dark mode) */}
        <div className="hidden md:flex w-[280px] lg:w-[320px] border-r border-border bg-card/50 dark:bg-[#111111] p-8 flex-col overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              Welcome to Elev8
            </h1>
            <p className="text-xs text-muted-foreground mt-2">
              Let's set up your profile so we can personalize your journey.
            </p>
          </div>
          <OnboardingStepper steps={STEPS} currentStep={currentStep} />
        </div>

        {/* Right Column: Form (#1F1F1F in dark mode) */}
        <div className="flex-1 flex flex-col p-6 md:p-8 lg:p-12 overflow-y-auto bg-background dark:bg-[#1F1F1F]">
          <div className="max-w-2xl w-full mx-auto flex-1 flex flex-col h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {STEPS[currentStep].title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {STEPS[currentStep].subtitle}
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 mb-4 bg-red-500/10 border border-red-500/20 rounded-md text-red-500 text-sm">
                {errorMsg}
              </div>
            )}

            <Form {...form}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                className="flex-1 flex flex-col h-full"
              >
                <div className="flex-1 flex flex-col gap-4">
                  {/* STEP 0: Basic Info */}
                  {currentStep === 0 && (
                    <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Age</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="25"
                                  name={field.name}
                                  ref={field.ref}
                                  onBlur={field.onBlur}
                                  value={
                                    field.value === undefined ||
                                    field.value === null
                                      ? ""
                                      : field.value
                                  }
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    field.onChange(
                                      val === "" ? undefined : Number(val)
                                    );
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={() => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <PhoneInput
                                  placeholder="e.g. 9876543210"
                                  codeValue={form.watch("phoneCountryCode") || ""}
                                  numberValue={form.watch("phoneNumber") || ""}
                                  onCodeChange={(c) => form.setValue("phoneCountryCode", c || "", { shouldValidate: true })}
                                  onNumberChange={(n) => form.setValue("phoneNumber", n || "", { shouldValidate: true })}
                                  country={form.watch("country")}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <CountrySelect
                                value={field.value}
                                onChange={field.onChange}
                                error={
                                  form.formState.errors.country?.message as
                                    | string
                                    | undefined
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* STEP 1: Current Situation */}
                  {currentStep === 1 && (
                    <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <FormField
                        control={form.control}
                        name="currentStatus"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Status</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || ""}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your current status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {CAREER_STATUS_OPTIONS.map((status) => (
                                  <SelectItem key={status} value={status}>
                                    {status
                                      .replace(/_/g, " ")
                                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {form.watch("currentStatus") === "OTHER" && (
                        <div className="space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                          <Label>Specify Your Status</Label>
                          <Input
                            placeholder="e.g. Freelance Consultant, Sabbatical, Entrepreneur"
                            value={otherStatus}
                            onChange={(e) => setOtherStatus(e.target.value)}
                          />
                        </div>
                      )}

                      <FormField
                        control={form.control}
                        name="currentRole"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Role</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. UI/UX Designer, Engineering Student"
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="yearsOfExperience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Years of Experience</FormLabel>
                            <FormControl>
                                <Input
                                  type="number"
                                  placeholder="e.g. 3"
                                  name={field.name}
                                  ref={field.ref}
                                  onBlur={field.onBlur}
                                  value={
                                    field.value === undefined ||
                                    field.value === null
                                      ? ""
                                      : field.value
                                  }
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    field.onChange(
                                      val === "" ? undefined : Number(val)
                                    );
                                  }}
                                />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* STEP 2: Career Goals */}
                  {currentStep === 2 && (
                    <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <FormField
                        control={form.control}
                        name="primaryGoal"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Primary Goal</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || ""}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your primary goal" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {PRIMARY_GOAL_OPTIONS.map((goal) => (
                                  <SelectItem key={goal} value={goal}>
                                    {goal
                                      .replace(/_/g, " ")
                                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="targetRole"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Target Role</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Senior Full Stack Engineer"
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 mt-auto flex items-center justify-between border-t border-border">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 0 || isSubmitting}
                    className={currentStep === 0 ? "invisible" : ""}
                  >
                    Back
                  </Button>

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {currentStep === STEPS.length - 1
                      ? "Complete Profile"
                      : "Continue"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
