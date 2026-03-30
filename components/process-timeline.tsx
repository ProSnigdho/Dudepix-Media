"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";
import {
  Lightbulb,
  MessageSquareCode,
  FileSearch,
  MonitorPlay,
  Rocket,
  BarChart3
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your brand, niche, and competitors to develop a winning content roadmap.",
    icon: Lightbulb
  },
  {
    id: "02",
    title: "Scripting & Pre-Pro",
    desc: "High-retention scripts designed for maximum engagement on YouTube and TikTok.",
    icon: MessageSquareCode
  },
  {
    id: "03",
    title: "Raw Assets Analysis",
    desc: "Send us your raw footage. We organize and prep everything for maximum efficiency.",
    icon: FileSearch
  },
  {
    id: "04",
    title: "Premium Post-Production",
    desc: "Our editors craft high-end visuals with motion graphics that demand attention.",
    icon: MonitorPlay
  },
  {
    id: "05",
    title: "Optimization & Launch",
    desc: "Viral thumbnails, tags, and posting schedules to maximize the algorithm's reach.",
    icon: Rocket
  },
  {
    id: "06",
    title: "Scale & Improve",
    desc: "Regular performance reviews to optimize the funnel and scale your growth.",
    icon: BarChart3
  },
];

export const ProcessTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 45, damping: 20 });

  return (
    <section id="process" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Process.</h2>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">From idea to millions of views. Our streamlined 6-step system.</p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Connecting Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 hidden md:block" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2.5px] bg-accent origin-top transition-all duration-300 hidden md:block"
          />

          <div className="flex flex-col gap-24 relative z-10">
            {steps.map((step, i) => (
              <div key={step.id} className="group relative">
                <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-0 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Title & Description */}
                  <div className="flex-1 md:px-12 text-center">
                    <ScrollReveal direction="up">
                      <span className="text-accent font-black text-6xl opacity-20 block mb-4 md:mb-2 group-hover:opacity-40 transition-opacity">
                        {step.id}
                      </span>
                      <h3 className="text-3xl font-display font-bold mb-4 text-white">
                        {step.title}
                      </h3>
                      <p className="text-muted text-lg leading-relaxed">
                        {step.desc}
                      </p>
                    </ScrollReveal>
                  </div>


                  {/* Icon Node */}
                  <div className="relative flex items-center justify-center shrink-0">
                    <ScrollReveal delay={0.2} direction="down">
                      <div className="w-20 h-20 rounded-[1.75rem] glass-card border-white/5 flex items-center justify-center shadow-2xl relative bg-black group-hover:scale-110 group-hover:border-accent transition-all duration-500">
                        <div className="absolute inset-0 bg-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <step.icon className="w-10 h-10 text-white relative z-10 group-hover:text-accent transition-colors" />
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Spacer for Alternate Layout */}
                  <div className="flex-1 hidden md:block md:px-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] glow-purple opacity-10 -z-10" />
    </section>
  );
};
