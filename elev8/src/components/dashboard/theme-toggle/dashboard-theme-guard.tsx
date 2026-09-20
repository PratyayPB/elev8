"use client";

import { useLayoutEffect, useEffect } from "react";
import { useTheme } from "next-themes";

export function DashboardThemeGuard() {
  const { resolvedTheme } = useTheme();
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement;

    if (resolvedTheme === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.style.colorScheme = "light";
    }

    // Cleanup when unmounting / navigating away from dashboard
    return () => {
      root.classList.remove("dark");
      root.classList.add("light");
      root.style.colorScheme = "light";
    };
  }, [resolvedTheme]);

  return null;
}
