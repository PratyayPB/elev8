"use client";

import React, { useState, useEffect } from "react";
import { useOnboarding } from "@/providers/onboarding-provider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CountrySelect } from "./country-select";
import { Loader2 } from "lucide-react";
import { mandatoryProfileSchema } from "@/features/profile/schemas";
import { ZodError } from "zod";

export function OnboardingModal() {
  const { isOpen, stage, profile, isSaving, error, saveMandatory, saveOptional, closeOptional } = useOnboarding();
  const isMandatory = stage === "MANDATORY";

  // Form State
  const [name, setName] = useState(profile?.name || "");
  const [age, setAge] = useState<string>(profile?.age ? String(profile.age) : "");
  const [country, setCountry] = useState(profile?.country || "");
  const [phoneNumber, setPhoneNumber] = useState(profile?.phoneNumber || "");
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (profile && isMandatory) {
      if (profile.name) setName(profile.name);
      if (profile.age) setAge(String(profile.age));
      if (profile.country) setCountry(profile.country);
      if (profile.phoneNumber) setPhoneNumber(profile.phoneNumber);
    }
  }, [profile, isMandatory]);

  const handleMandatorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    const payload = {
      name,
      age: age ? parseInt(age, 10) : undefined,
      country,
      phoneNumber,
    };

    try {
      mandatoryProfileSchema.parse(payload);
    } catch (err) {
      if (err instanceof ZodError) {
        const errors: Record<string, string> = {};
        err.errors.forEach((e) => {
          if (e.path[0]) errors[e.path[0].toString()] = e.message;
        });
        setFormErrors(errors);
        return;
      }
    }

    await saveMandatory(payload as any);
  };

  const handleOptionalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // For simplicity in MVP, we just close the optional step when they click 'Continue'
    // A fully implemented optional form would have the rest of the fields here.
    closeOptional();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(val) => {
        if (!isMandatory && !val) {
          closeOptional();
        }
      }}
    >
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => {
          if (isMandatory) e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          if (isMandatory) e.preventDefault();
        }}
        hideCloseButton={isMandatory}
      >
        {isMandatory ? (
          <form onSubmit={handleMandatorySubmit}>
            <DialogHeader>
              <DialogTitle>Complete Your Profile</DialogTitle>
              <DialogDescription>
                We need a few details to personalize your career guidance.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              {error && <div className="text-sm text-red-500">{error}</div>}

              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  disabled={isSaving}
                />
                {formErrors.name && <span className="text-xs text-red-500">{formErrors.name}</span>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="22"
                  disabled={isSaving}
                />
                {formErrors.age && <span className="text-xs text-red-500">{formErrors.age}</span>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <CountrySelect
                  value={country}
                  onChange={setCountry}
                  error={formErrors.country}
                />
                {formErrors.country && <span className="text-xs text-red-500">{formErrors.country}</span>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  disabled={isSaving}
                />
                {formErrors.phoneNumber && <span className="text-xs text-red-500">{formErrors.phoneNumber}</span>}
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit" disabled={isSaving}>
                {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save & Continue
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleOptionalSubmit}>
            <DialogHeader>
              <DialogTitle>Optional Details</DialogTitle>
              <DialogDescription>
                Add more details later from the dashboard to unlock deeper AI personalization.
              </DialogDescription>
            </DialogHeader>
            <div className="py-6 flex flex-col gap-2 items-center text-center">
              <p className="text-sm text-text-muted">
                Your mandatory details have been saved successfully!
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <Button type="button" variant="ghost" onClick={closeOptional}>
                Skip for now
              </Button>
              <Button type="submit">
                Go to Dashboard
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
