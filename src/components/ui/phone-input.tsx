import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { AsYouType, getCountryCallingCode, CountryCode } from "libphonenumber-js";
import { cn } from "@/lib/utils";

interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  codeValue: string;
  numberValue: string;
  onCodeChange: (value: string) => void;
  onNumberChange: (value: string) => void;
  country?: string;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ codeValue, numberValue, onCodeChange, onNumberChange, className, country, placeholder = "e.g. 9876543210", ...props }, ref) => {
    
    const lastCountryRef = useRef<string | undefined>(country);

    // Sync when country prop changes
    useEffect(() => {
      if (country && country !== lastCountryRef.current) {
        lastCountryRef.current = country;
        try {
          const newCallingCode = getCountryCallingCode(country as CountryCode);
          if (newCallingCode && codeValue === "") {
            onCodeChange(`+${newCallingCode}`);
          }
        } catch (e) {}
      }
    }, [country, codeValue, onCodeChange]);

    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newCode = e.target.value.replace(/[^\d+]/g, "");
      if (newCode && !newCode.startsWith("+")) {
        newCode = `+${newCode}`;
      }
      onCodeChange(newCode);
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newNumber = e.target.value.replace(/[^\d\s\-\(\)]/g, "");
      onNumberChange(newNumber);
    };

    // Remove the leading '+' for display if present
    const displayCode = codeValue.startsWith("+") ? codeValue.slice(1) : codeValue;

    return (
      <div className={cn("flex gap-2", className)}>
        <div className="relative w-20 flex-shrink-0">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium select-none pointer-events-none">
            +
          </span>
          <Input
            value={displayCode}
            onChange={handleCodeChange}
            placeholder="1"
            className="pl-7"
            aria-label="Country Calling Code"
          />
        </div>
        <Input
          ref={ref}
          value={numberValue}
          onChange={handleNumberChange}
          placeholder={placeholder}
          className="flex-1"
          aria-label="Phone Number"
          {...props}
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
