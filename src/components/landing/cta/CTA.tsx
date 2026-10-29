"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LiquidEther from "@/components/LiquidEther";

export function CTA() {
  return (
    <section className="bg-[#FCFBFA]">
      <div className="max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0B0C09] text-white py-24 md:py-32 lg:py-40 px-6 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]"
        >
          {/* LiquidEther Background Effect */}
          <div
            className="absolute inset-0 z-0 pointer-events-none w-full h-full"
          >
            <LiquidEther
              mouseForce={20}
              cursorSize={100}
              isViscous
              viscous={30}
              colors={["#efefe8", "#e3cc84", "#FFDB00"]}
              autoDemo
              autoSpeed={0.5}
              autoIntensity={2.2}
              isBounce={false}
              resolution={0.5}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-display font-semibold leading-[1.15] tracking-tight text-white mb-10">
              Be among the first
              <br className="hidden sm:block" /> to try Elev8
            </h2>
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm md:text-base font-semibold text-black hover:bg-white/90 transition-colors shadow-sm pointer-events-auto"
            >
              Join Waitlist
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
