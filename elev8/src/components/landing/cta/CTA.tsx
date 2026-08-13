"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-black text-white rounded-[2.5rem] py-20 px-6 text-center relative overflow-hidden"
        >
          {/* Subtle gradient effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-white/10 to-transparent blur-3xl opacity-30 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-6">
              Ready to optimize your flow?
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
              Join thousands of professionals accelerating their careers using AI-driven insights and personalized roadmaps.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center rounded-full bg-accent-cream px-6 py-3 text-xs font-medium text-black hover:bg-accent-cream/90 transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-xs font-medium text-white hover:bg-white/10 transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
