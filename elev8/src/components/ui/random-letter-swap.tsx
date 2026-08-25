"use client";

import React, { useState } from "react";
import { motion, type Transition } from "framer-motion";

export interface RandomLetterSwapProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  className?: string;
  staggerDuration?: number;
  transition?: Transition;
  reverse?: boolean;
}

export function RandomLetterSwap({
  label,
  className = "",
  staggerDuration = 0.025,
  transition = { duration: 0.5, type: "spring", stiffness: 280, damping: 18 },
  reverse = false,
  ...props
}: RandomLetterSwapProps) {
  const [isHovered, setIsHovered] = useState(false);
  const letters = label.split("");

  return (
    <span
      className={`relative inline-flex items-center overflow-hidden leading-none select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="sr-only">{label}</span>
      <span className="inline-flex items-center" aria-hidden="true">
        {letters.map((letter, index) => {
          const delay = index * staggerDuration;
          return (
            <span
              key={index}
              className="relative inline-block overflow-hidden"
              style={{ display: "inline-block" }}
            >
              <motion.span
                className="inline-block"
                initial={false}
                animate={{
                  y: isHovered ? (reverse ? "100%" : "-100%") : "0%",
                }}
                transition={{
                  ...transition,
                  delay,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
              <motion.span
                className="absolute left-0 top-0 inline-block"
                initial={false}
                animate={{
                  y: isHovered ? "0%" : reverse ? "-100%" : "100%",
                }}
                transition={{
                  ...transition,
                  delay,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
