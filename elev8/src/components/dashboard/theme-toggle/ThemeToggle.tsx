"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?: "dropdown" | "compact" | "inline";
}

export function ThemeToggle({ className, variant = "inline" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "flex items-center justify-between p-1 rounded-xl bg-muted/60 text-muted-foreground text-xs",
          className
        )}
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg opacity-50">
          <Sun className="h-3.5 w-3.5" />
          <span className="font-medium">Theme</span>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    return (
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors",
          className
        )}
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
      </button>
    );
  }

  // Inline segmented control for the sidebar
  return (
    <div
      role="radiogroup"
      aria-label="Theme selector"
      className={cn(
        "grid grid-cols-3 p-1 rounded-xl bg-secondary/80 dark:bg-[#1F1F1F] border border-border/60 text-xs font-medium",
        className
      )}
    >
      <button
        type="button"
        role="radio"
        aria-checked={theme === "light"}
        onClick={() => setTheme("light")}
        className={cn(
          "flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-all duration-150",
          theme === "light"
            ? "bg-card dark:bg-[#242424] text-foreground shadow-sm font-semibold border border-border/40"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/40 dark:hover:bg-[#242424]/60"
        )}
      >
        <Sun className="h-3.5 w-3.5" />
        <span>Light</span>
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={theme === "dark"}
        onClick={() => setTheme("dark")}
        className={cn(
          "flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-all duration-150",
          theme === "dark"
            ? "bg-card dark:bg-[#242424] text-foreground shadow-sm font-semibold border border-border/40"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/40 dark:hover:bg-[#242424]/60"
        )}
      >
        <Moon className="h-3.5 w-3.5" />
        <span>Dark</span>
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={theme === "system"}
        onClick={() => setTheme("system")}
        className={cn(
          "flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-all duration-150",
          theme === "system"
            ? "bg-card dark:bg-[#242424] text-foreground shadow-sm font-semibold border border-border/40"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/40 dark:hover:bg-[#242424]/60"
        )}
      >
        <Laptop className="h-3.5 w-3.5" />
        <span>Auto</span>
      </button>
    </div>
  );
}
