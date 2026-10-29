"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Showcase() {
  const highlights = [
    "Real-time market insights",
    "Tailored interview questions",
    "Actionable skill gap analysis"
  ];

  return (
    <section className="py-24 bg-background" id="dashboard">
      <div className="max-w-container-max mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block rounded-full bg-accent-cream px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-black mb-6">
              Performance
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-medium text-text-primary mb-6 leading-tight">
              Optimized for growth. Built for careers.
            </h2>
            
            <p className="text-base text-text-secondary mb-8">
              Experience a seamless, intuitive platform designed to accelerate your professional development without the clutter. Our tools work fast so you can learn faster.
            </p>

            <ul className="space-y-4">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-text-primary font-medium">
                  <CheckCircle2 className="w-5 h-5 text-text-secondary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dashboard Preview Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-black rounded-3xl p-4 sm:p-6 shadow-2xl relative z-10">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/images/landing/dashboard.jpg"
                  alt="Elev8 Dashboard Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-border-subtle rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
