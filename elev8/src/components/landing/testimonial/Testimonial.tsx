"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "We stopped treating feedback like a pile of screenshots. The signal is clean enough that roadmap meetings are finally calm.",
    name: "Elena Ross",
    role: "VP Product, Kinship",
    badge: "41% faster planning cycles",
    avatar: "/images/landing/pfp.jpg"
  },
  {
    id: 2,
    quote: "Elev8 has completely transformed how I approach my career trajectory. The resume scoring is a game-changer—I saw a 300% increase.",
    name: "Andre Miles",
    role: "Creative Director, Mold Studio",
    badge: "300% more callbacks",
    avatar: "/images/landing/pfp.jpg"
  },
  {
    id: 3,
    quote: "Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods.",
    name: "Tessa Kim",
    role: "Customer Lead, Relay",
    badge: "2x faster resolution",
    avatar: "/images/landing/pfp.jpg"
  }
];

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 md:py-32 bg-[#FCFBFA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-medium text-black tracking-tight">
            Better heard in their own words.
          </h2>
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black/5 transition-colors shrink-0"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/90 dark:hover:bg-brand-secondary-200 transition-colors shrink-0"
            >
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/10 mb-12 lg:mb-20"></div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column (Active Testimonial) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="text-5xl md:text-6xl text-black/10 font-serif leading-none mb-4 md:mb-6 select-none">
              &ldquo;
            </div>
            
            <div className="min-h-[260px] md:min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col h-full justify-between"
                >
                  <blockquote className="text-3xl md:text-4xl lg:text-[2.65rem] font-display font-medium leading-[1.25] text-black mb-10 lg:mb-16 tracking-tight">
                    {activeTestimonial.quote}
                  </blockquote>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 justify-start">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={activeTestimonial.avatar}
                          alt={activeTestimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-black text-sm md:text-base">
                          {activeTestimonial.name}
                        </div>
                        <div className="text-black/60 text-xs md:text-sm">
                          {activeTestimonial.role}
                        </div>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/10 text-[11px] font-medium text-black/70 shrink-0 self-start sm:self-auto tracking-wide">
                      {activeTestimonial.badge}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column (List) */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:mt-12">
            <div className="flex flex-col w-full xl:max-w-md ml-auto">
              {testimonials.map((t, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div 
                    key={t.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex items-center gap-4 py-5 md:py-6 cursor-pointer transition-all border-b border-black/10 ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-black/5">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-black text-sm md:text-base mb-0.5">
                        {t.name}
                      </div>
                      <div className="text-black/50 text-xs md:text-sm">
                        {t.role}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
