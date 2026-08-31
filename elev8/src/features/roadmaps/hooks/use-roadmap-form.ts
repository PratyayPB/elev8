"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stage1FormData, Stage1Schema } from "../types";

export function useRoadmapForm(defaultValues?: Partial<Stage1FormData>) {
  const form = useForm<Stage1FormData>({
    resolver: zodResolver(Stage1Schema),
    defaultValues: {
      role: defaultValues?.role || "",
      experienceLevel: defaultValues?.experienceLevel || "Beginner",
    },
    mode: "onChange",
  });

  return form;
}
