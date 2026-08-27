"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

const featuredStory = {
  badge: "Featured essay",
  image: "/images/landing/pic5.jpg",
  date: "Jul 14, 2026",
  readTime: "8 min read",
  title: "How we plan a month of product stories without losing the thread",
  description:
    "A look inside the calendar, the review rituals, and the editorial constraints that keep publishing steady while product work accelerates.",
  author: {
    name: "Mara Chen",
    role: "Editorial lead",
    initials: "MC",
  },
};

const sideStories = [
  {
    image: "/images/landing/pic5.jpg",
    category: "Guides",
    date: "Jul 07, 2026",
    readTime: "5 min read",
    title: "A better brief for customer-facing launch posts",
  },
  {
    image: "/images/landing/pic5.jpg",
    category: "Notes",
    date: "Jun 24, 2026",
    readTime: "4 min read",
    title: "What belongs above the fold in a changelog",
  },
  {
    image: "/images/landing/pic5.jpg",
    category: "Interviews",
    date: "Jun 11, 2026",
    readTime: "6 min read",
    title: "Three teams, one release: a retro in three voices",
  },
  {
    image: "/images/landing/pic5.jpg",
    category: "Guides",
    date: "May 29, 2026",
    readTime: "3 min read",
    title: "Screenshots that explain themselves",
  },
];

const sideContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const sideCardVariants = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.42, 0, 1, 1], // ease-in
    },
  },
};

export function Results() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0C09] overflow-hidden">
      <div className="max-w-container-max mx-auto ">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-3">
              Notes from the build
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-xl">
              Essays on the systems, rituals, and small editorial decisions that
              keep product communication calm.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 self-start sm:self-auto px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs font-medium text-white hover:bg-white/20 transition-colors whitespace-nowrap shadow-sm">
            Browse the journal
            <MoveUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Featured Essay / Story */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl hover:shadow-2xl group cursor-pointer"
          >
            <div>
              {/* Overlapping Image Container with Gradient */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-muted shadow-inner">
                {/* Background Gradient */}
                <img
                  src="/images/landing/bg-gradient.png"
                  alt="Background effect"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlapping Feature Image */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-0 bottom-0 rounded-tl-xl sm:rounded-tl-2xl overflow-hidden shadow-2xl bg-white border-t border-l border-white/20">
                  <Image
                    src={featuredStory.image}
                    alt={featuredStory.title}
                    fill
                    className="object-cover object-left-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Badge */}
                <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md text-black text-xs font-semibold px-3 py-1 rounded-full border border-black/10 shadow-md">
                  {featuredStory.badge}
                </span>
              </div>

              {/* Meta */}
              <div className="text-xs text-zinc-400 mb-3">
                {featuredStory.date} • {featuredStory.readTime}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-3 leading-tight">
                {featuredStory.title}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                {featuredStory.description}
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10">
              <div className="w-9 h-9 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
                {featuredStory.author.initials}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-medium text-white">
                  {featuredStory.author.name}
                </div>
                <div className="text-xs text-zinc-400">
                  {featuredStory.author.role}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: More This Month List (#FFDB00 Yellow Cards) */}
          <motion.div
            variants={sideContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-white/80 mb-6">
              More this month
            </div>

            <div className="flex flex-col gap-4">
              {sideStories.map((story, idx) => (
                <motion.div
                  variants={sideCardVariants}
                  whileHover={{ y: -4 }}
                  key={idx}
                  className="bg-[#171816] rounded-2xl p-4 flex items-center gap-4 group cursor-pointer hover: transition-all shadow-sm hover:shadow-md border border-black/5 text-black"
                >
                  {/* Overlapping Thumbnail Image */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-muted">
                    {/* Background Gradient */}
                    <img
                      src="/images/landing/bg-gradient.png"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlapping Image */}
                    <div className="absolute top-2 left-2 right-0 bottom-0 rounded-tl-lg overflow-hidden bg-white">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover object-left-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow min-w-0">
                    <div className="text-[11px] sm:text-xs text-white mb-1 font-medium">
                      {story.category} • {story.date} • {story.readTime}
                    </div>
                    <h4 className="text-sm sm:text-base font-display font-medium text-white leading-snug line-clamp-2">
                      {story.title}
                    </h4>
                  </div>

                  {/* Arrow Icon */}
                  <div className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                    <MoveUpRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
