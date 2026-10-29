"use client";

import { motion } from "framer-motion";

const logos = [
  "Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix"
];

export function LogoBar() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <p className="text-xs font-medium text-text-muted mb-8 tracking-wide uppercase">
            Trusted by professionals from
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            {logos.map((logo) => (
              <div key={logo} className="text-lg md:text-xl font-display font-medium text-text-secondary">
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
