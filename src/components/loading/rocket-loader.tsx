import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./rocket-loader.module.css";

const SIZE_MAP = {
  sm: 36,
  md: 56,
  lg: 72,
} as const;

interface RocketLoaderProps {
  /** The text message to display alongside the rocket */
  message?: string;
  /** Overall size of the rocket */
  size?: "sm" | "md" | "lg";
  /** Optional additional class names for the container */
  className?: string;
}

export function RocketLoader({ message, size = "md", className }: RocketLoaderProps) {
  const pixelSize = SIZE_MAP[size];

  return (
    <div
      className={cn(styles.container, className)}
      role="status"
      aria-live="polite"
    >
      <div className={cn(styles.rocketWrapper, styles[size])}>
        <Image
          src="/icons/elev8-rocket.png"
          alt="Loading..."
          width={pixelSize}
          height={pixelSize}
          className={cn(styles.rocketImage, "dark:invert transition-all")}
          priority
        />
      </div>
      {message && (
        <p className={cn(styles.message, "text-text-secondary")}>
          {message}
        </p>
      )}
    </div>
  );
}
