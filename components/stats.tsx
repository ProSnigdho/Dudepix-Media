"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useSpring } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";
import { Video, Mic, TrendingUp, Users, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { value: 501, suffix: "%", label: "More Leads", sub: "For Client Campaigns", color: "text-blue-500" },
  { value: 1.2, suffix: "M+", label: "Total Views", sub: "Across All Platforms", color: "text-purple-500" },
  { value: 15, suffix: "M", label: "Total Reach", sub: "Worldwide Output", color: "text-emerald-500" },
];

const badges = [
  { icon: Video, label: "Short Form", color: "bg-purple-500", rotation: "-rotate-6", pos: "-top-12 -left-20" },
  { icon: Mic, label: "Podcasts", color: "bg-blue-500", rotation: "rotate-3", pos: "top-0 -right-24" },
  { icon: TrendingUp, label: "Viral Growth", color: "bg-green-500", rotation: "rotate-10", pos: "bottom-0 -left-34" },
  { icon: Users, label: "Community", color: "bg-orange-500", rotation: "-rotate-10", pos: "-bottom-12 -right-30" },
];

const AnimatedNumber = ({ value, suffix, colorClass }: { value: number; suffix: string, colorClass: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (value % 1 !== 0) {
        setDisplay(latest.toFixed(1));
      } else {
        setDisplay(Math.floor(latest).toLocaleString());
      }
    });
  }, [spring, value]);

  return (
    <div ref={ref} className={cn("text-6xl md:text-8xl font-black tracking-tighter flex items-baseline gap-1", colorClass)}>
      <span>{display}</span>
      <span className="text-4xl md:text-6xl">{suffix}</span>
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto px-6 relative">

        {/* Header Badge */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em]">
            <Activity size={12} className="animate-pulse text-blue-500" /> Real-Time Impact
          </div>
        </div>

        <div className="relative">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} width="100%">
                <div className="flex flex-col items-center text-center group">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} colorClass={stat.color} />
                  <div className="h-1 w-12 bg-zinc-800 my-6 rounded-full overflow-hidden">
                    <div className={cn("h-full w-full origin-left transition-transform duration-1000 scale-x-0 group-hover:scale-x-100", stat.color.replace('text', 'bg'))} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base font-medium">{stat.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Floating Badges - Absolute to the relative container */}
          <div className="hidden xl:block">
            {badges.map((badge, i) => (
              <ScrollReveal
                key={i}
                delay={0.6 + (i * 0.1)}
                direction={i % 2 === 0 ? "left" : "right"}
                width="fit-content"
                className={cn("absolute z-20", badge.pos)}
              >
                <div className={cn(
                  "flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:scale-110 hover:border-white/20",
                  badge.rotation
                )}>
                  <div className={cn("p-2 rounded-lg text-white shadow-lg", badge.color)}>
                    <badge.icon size={18} />
                  </div>
                  <span className="font-bold text-white text-sm whitespace-nowrap">{badge.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Center Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};