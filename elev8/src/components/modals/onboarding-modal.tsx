"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOnboarding } from "@/providers/onboarding-provider";
import { OnboardingStepper, Step } from "@/features/profile/components/onboarding-stepper";
import { profileCreateSchema, ProfileCreateSchemaType } from "@/features/profile/schemas";
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
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { CareerStatus, PrimaryGoal, TargetCompanyType } from "@/features/profile/types";

const STEPS: Step[] = [
  { id: "basic", title: "Basic Information", subtitle: "Core profile details." },
  { id: "situation", title: "Current Situation", subtitle: "Where you are now." },
  { id: "education", title: "Education", subtitle: "Your academic background." },
  { id: "goals", title: "Career Goals", subtitle: "Where you want to go." },
  { id: "skills", title: "Skills", subtitle: "Your technical proficiency." },
];

export function OnboardingModal() {
  const { isOpen, profile, saveMandatory, saveOptional } = useOnboarding();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const form = useForm<ProfileCreateSchemaType>({
    resolver: zodResolver(profileCreateSchema),
    defaultValues: {
      name: profile?.name || "",
      age: profile?.age || undefined,
      country: profile?.country || "",
      phoneNumber: profile?.phoneNumber || "",
      currentStatus: profile?.currentStatus || undefined,
      currentRole: profile?.currentRole || "",
      yearsOfExperience: profile?.yearsOfExperience || undefined,
      highestQualification: profile?.education?.highestQualification || "",
      fieldOfStudy: profile?.education?.fieldOfStudy || "",
      primaryGoal: profile?.careerGoals?.primaryGoal || undefined,
      targetRole: profile?.careerGoals?.targetRole || "",
      targetCompanyType: profile?.targetCompanyType || undefined,
      weeklyLearningHours: profile?.weeklyLearningHours || undefined,
      skills: profile?.skills || [],
      desiredSkills: profile?.desiredSkills || [],
    },
  });

  useEffect(() => {
    if (profile) {
      form.reset({
        name: profile.name || "",
        age: profile.age || undefined,
        country: profile.country || "",
        phoneNumber: profile.phoneNumber || "",
        currentStatus: profile.currentStatus || undefined,
        currentRole: profile.currentRole || "",
        yearsOfExperience: profile.yearsOfExperience || undefined,
        highestQualification: profile.education?.highestQualification || "",
        fieldOfStudy: profile.education?.fieldOfStudy || "",
        primaryGoal: profile.careerGoals?.primaryGoal || undefined,
        targetRole: profile.careerGoals?.targetRole || "",
        targetCompanyType: profile.targetCompanyType || undefined,
        weeklyLearningHours: profile.weeklyLearningHours || undefined,
        skills: profile.skills || [],
        desiredSkills: profile.desiredSkills || [],
      });
    }
  }, [profile, form]);

  const handleNext = async () => {
    let fieldsToValidate: any[] = [];
    
    switch (currentStep) {
      case 0: fieldsToValidate = ["name", "age", "country", "phoneNumber"]; break;
      case 1: fieldsToValidate = ["currentStatus", "currentRole", "yearsOfExperience"]; break;
      case 2: fieldsToValidate = ["highestQualification", "fieldOfStudy"]; break;
      case 3: fieldsToValidate = ["primaryGoal", "targetRole", "targetCompanyType"]; break;
      case 4: fieldsToValidate = ["weeklyLearningHours", "skills", "desiredSkills"]; break;
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        form.handleSubmit(onSubmit)();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
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
        phoneNumber: data.phoneNumber,
      };
      
      const mandatorySuccess = await saveMandatory(mandatoryData);
      if (!mandatorySuccess) {
         setErrorMsg("Failed to save mandatory profile information.");
         setIsSubmitting(false);
         return;
      }

      const optionalData = {
        currentStatus: data.currentStatus,
        currentRole: data.currentRole,
        yearsOfExperience: data.yearsOfExperience,
        highestQualification: data.highestQualification,
        fieldOfStudy: data.fieldOfStudy,
        primaryGoal: data.primaryGoal,
        targetRole: data.targetRole,
        targetCompanyType: data.targetCompanyType,
        weeklyLearningHours: data.weeklyLearningHours,
        skills: data.skills,
        desiredSkills: data.desiredSkills,
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
            <h1 className="text-xl font-bold tracking-tight text-foreground">Welcome to Elev8</h1>
            <p className="text-xs text-muted-foreground mt-2">Let's set up your profile so we can personalize your journey.</p>
          </div>
          <OnboardingStepper steps={STEPS} currentStep={currentStep} />
        </div>

        {/* Right Column: Form (#1F1F1F in dark mode) */}
        <div className="flex-1 flex flex-col p-6 md:p-8 lg:p-12 overflow-y-auto bg-background dark:bg-[#1F1F1F]">
          <div className="max-w-2xl w-full mx-auto flex-1 flex flex-col h-full">
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{STEPS[currentStep].title}</h2>
              <p className="text-sm text-muted-foreground mt-1">{STEPS[currentStep].subtitle}</p>
            </div>

            {errorMsg && (
               <div className="p-3 mb-4 bg-red-500/10 border border-red-500/20 rounded-md text-red-500 text-sm">
                  {errorMsg}
               </div>
            )}

            <Form {...form}>
              <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="flex-1 flex flex-col h-full">
                
                <div className="flex-1 flex flex-col gap-4">
                  {/* STEP 0: Basic Info */}
                  {currentStep === 0 && (
                    <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
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
                              <FormLabel>Age <span className="text-red-500">*</span></FormLabel>
                              <FormControl>
                                <Input 
                                  type="number" 
                                  placeholder="25" 
                                  {...field} 
                                  onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)} 
                                  value={field.value || ""} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number <span className="text-red-500">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 000-0000" {...field} />
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
                            <FormLabel>Country <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <CountrySelect value={field.value} onChange={field.onChange} error={form.formState.errors.country?.message} />
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
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your current status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Object.values(CareerStatus).map((status) => (
                                  <SelectItem key={status} value={status}>
                                    {status.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
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
                        name="currentRole"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Role</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Frontend Developer" {...field} value={field.value || ""} />
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
                                {...field} 
                                onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)} 
                                value={field.value ?? ""} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* STEP 2: Education */}
                  {currentStep === 2 && (
                    <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <FormField
                        control={form.control}
                        name="highestQualification"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Highest Qualification</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Bachelor of Science" {...field} value={field.value || ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="fieldOfStudy"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Field of Study</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Computer Science" {...field} value={field.value || ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* STEP 3: Career Goals */}
                  {currentStep === 3 && (
                    <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                       <FormField
                        control={form.control}
                        name="primaryGoal"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Primary Goal</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your primary goal" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Object.values(PrimaryGoal).map((goal) => (
                                  <SelectItem key={goal} value={goal}>
                                    {goal.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
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
                              <Input placeholder="e.g. Senior Full Stack Engineer" {...field} value={field.value || ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="targetCompanyType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Target Company Type</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select target company type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Object.values(TargetCompanyType).map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* STEP 4: Skills */}
                  {currentStep === 4 && (
                    <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                       <FormField
                        control={form.control}
                        name="weeklyLearningHours"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Weekly Learning Hours (Commitment)</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                placeholder="e.g. 10" 
                                {...field} 
                                onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)} 
                                value={field.value ?? ""} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="text-xs text-muted-foreground p-3 bg-muted/50 dark:bg-[#242424] rounded-md border border-border">
                        <strong>Note:</strong> You can add and manage specific technical skills (like React, Python, AWS) from your dashboard once your basic profile is complete.
                      </div>
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
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {currentStep === STEPS.length - 1 ? "Complete Profile" : "Continue"}
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
