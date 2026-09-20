"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section 
      className="relative min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-cover bg-top bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/images/landing/hero-bg.png')" }}
    >
      <div className="max-w-container-max w-full mx-auto px-4 sm:px-6 relative z-10">
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

            <div className="flex flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/sign-in"
                className="inline-flex items-center gap-3 bg-black text-white pl-5 pr-1.5 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-black/10 hover:bg-black/90 transition-all group"
              >
                Get started
                <div className="bg-white text-black rounded-full p-1.5 group-hover:translate-x-0.5 transition-transform flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </div>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black bg-transparent px-6 py-2.5 text-sm font-medium text-black hover:bg-black/5 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] md:aspect-square"
          >
            {/* Back Image (Left/Bottom) */}
            <div className="absolute top-0 -left-4 w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-xl z-0 rotate-[3deg]">
              <Image
                src="/images/landing/pic2.jpg"
                alt="Platform Interface 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Front Image (Right/Top) */}
            <div className="absolute bottom-8 -right-4 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/50 -rotate-[6deg] scale-[0.8]">
              <Image
                src="/images/landing/pic3.jpg"
                alt="Platform Interface 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
