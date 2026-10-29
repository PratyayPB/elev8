"use client";

import { motion, type Variants } from "framer-motion";
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const statsList = [
  {
    icon: MoveUpRight,
    iconColor: "text-black",
    number: "500.000",
    badge: "+20.1%",
    badgeStyle: "text-emerald-600 bg-emerald-50",
    label: "Monthly active users",
  },
  {
    icon: MoveDownLeft,
    iconColor: "text-rose-500",
    number: "20.105",
    badge: "-2%",
    badgeStyle: "text-rose-600 bg-rose-50",
    label: "Daily active users",
  },
  {
    icon: MoveUpRight,
    iconColor: "text-black",
    number: "$523.520",
    badge: "+8%",
    badgeStyle: "text-emerald-600 bg-emerald-50",
    label: "Monthly recurring revenue",
  },
  {
    icon: MoveUpRight,
    iconColor: "text-black",
    number: "$1052",
    badge: "+2%",
    badgeStyle: "text-emerald-600 bg-emerald-50",
    label: "Cost per acquisition",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.42, 0, 1, 1],
    },
  },
};

export function Stats() {
  return (
    <section
      className="py-24 md:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/landing/section-bg.jpg')" }}
      id="stats"
    >
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.42, 0, 1, 1] }}
            className="flex gap-6 flex-col items-start"
          >
            <div>
              <Badge
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white px-3.5 py-1.5 text-xs"
              >
                Platform
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-display font-medium text-white text-left leading-tight">
                This is the start of something new
              </h2>
              <p className="text-base md:text-xl leading-relaxed text-white/80 text-left max-w-lg">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </motion.div>

          {/* Cards Section */}
          <div className="flex justify-center items-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid text-left grid-cols-1 sm:grid-cols-2 w-full gap-4 sm:gap-6"
            >
              {statsList.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="flex flex-col justify-between p-6 sm:p-8 min-h-[220px] sm:min-h-[250px] bg-white rounded-2xl md:rounded-3xl border border-border-subtle/70 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <IconComponent className={`w-5 h-5 mb-8 ${stat.iconColor} shrink-0`} />
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2 mb-2">
                        <span className="text-3xl lg:text-4xl tracking-tight text-left font-display font-medium text-text-primary">
                          {stat.number}
                        </span>
                        <span className={`text-xs font-sans font-normal ${stat.badgeStyle} px-2.5 py-0.5 rounded-full whitespace-nowrap`}>
                          {stat.badge}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed text-text-secondary text-left">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
