import React from "react";
import { LandingSkeleton } from "@/components/landing";

export default function PublicLoading() {
  return <LandingSkeleton includeHeader={false} />;
}
