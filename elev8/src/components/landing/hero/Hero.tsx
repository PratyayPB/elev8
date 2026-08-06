"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
              Elevate Your <br className="hidden md:block" />
              Career with <br className="hidden md:block" />
              Precision.
            </h1>

            <p className="text-base md:text-lg text-text-secondary max-w-lg mb-8 leading-relaxed">
              Navigate your professional journey with AI-driven insights,
              personalized roadmaps, and mock interviews that prepare you for
              success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-xs font-medium text-white shadow-sm hover:bg-black/90 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-white px-6 py-3 text-xs font-medium text-text-primary hover:bg-surface-muted transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/landing/hero.jpg"
              alt="Professional using AI career platform"
              fill
              className="object-cover"
              priority
            />
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
