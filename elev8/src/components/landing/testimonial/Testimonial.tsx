"use client";

import { motion } from "framer-motion";

export function Testimonial() {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Decorative quote mark */}
          <div className="text-7xl md:text-9xl font-serif text-border-subtle absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 opacity-50 select-none z-0">
            &ldquo;
          </div>
          
          <blockquote className="relative z-10 text-xl md:text-3xl font-display font-medium text-text-primary leading-tight md:leading-tight mb-12">
            &quot;Elev8 has completely transformed how I approach my career trajectory. The resume scoring is a game-changer—I saw a 300% increase in interview callbacks within the first month.&quot;
          </blockquote>
          
          <div className="flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
              {/* Using a placeholder avatar color/gradient if no image is available */}
              <div className="w-full h-full bg-gradient-to-tr from-accent-cyan to-accent-coral flex items-center justify-center text-white font-medium text-lg">
                SJ
              </div>
            </div>
            <div className="font-medium text-text-primary text-sm">Sarah Jenkins</div>
            <div className="text-xs text-text-secondary">Product Manager at TechCorp</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
