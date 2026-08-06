"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "95.99%", label: "Match Accuracy", desc: "For role recommendations" },
  { value: "3x", label: "Faster Growth", desc: "Reported by users" },
  { value: "500+", label: "Learning Paths", desc: "Tailored to your needs" },
  { value: "24/7", label: "Availability", desc: "AI career guidance" }
];

export function Stats() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-container-max mx-auto bg-[#F0ECE6] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-border-subtle/60 shadow-sm">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-2">
              The Path to Excellence
            </h2>
            <p className="text-sm text-text-secondary">
              Real results from professionals using Elev8.
            </p>
          </div>
          
          <div className="flex gap-6 text-xs font-medium text-text-muted">
            <span className="text-text-primary border-b border-text-primary pb-1 cursor-pointer">Platform</span>
            <span className="cursor-pointer hover:text-text-primary transition-colors">Analysis</span>
            <span className="cursor-pointer hover:text-text-primary transition-colors">Success</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center relative"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-text-primary tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="font-medium text-xs text-text-primary mb-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-xs text-text-muted">
                {stat.desc}
              </div>
              
              {/* Divider for desktop */}
              {idx !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border-subtle"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
