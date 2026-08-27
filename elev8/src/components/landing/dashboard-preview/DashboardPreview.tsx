"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function DashboardPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center 40%"],
  });

  // Smooth out the scroll progress for a silky parallax feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.5,
  });

  // Moves the image upward smoothly to reveal the bottom edge as user scrolls down to ~50vh
  const y = useTransform(smoothProgress, [0, 1], ["0%", "-5.5%"]);

  return (
    <section className="relative pt-4 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 flex justify-center">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl rounded-xl md:rounded-xl overflow-hidden border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-surface-muted aspect-[16/10.6] sm:aspect-[16/10.7] md:aspect-[16/10.6]"
        >
          {/* Inner image container sized to 106% so bottom is slightly cropped and reveals on scroll */}
          <motion.div
            style={{ y }}
            className="absolute top-0 left-0 w-full h-[106%] will-change-transform"
          >
            <Image
              src="/images/landing/dahsboard-design-best-practices-example.png.webp"
              alt="Dashboard Visuals & UI"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
