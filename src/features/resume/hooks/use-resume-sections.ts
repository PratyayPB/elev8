"use client";

import { useState } from "react";

export function useResumeSections(sectionKeys: string[]) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() =>
    sectionKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const expandAll = () => {
    setExpandedSections(
      sectionKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
  };

  const collapseAll = () => {
    setExpandedSections(
      sectionKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {})
    );
  };

  return {
    expandedSections,
    toggleSection,
    expandAll,
    collapseAll,
  };
}
