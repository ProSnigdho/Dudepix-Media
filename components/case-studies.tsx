"use client";

import React from "react";
import Image from "next/image";
import { Quote, ArrowUpRight, TrendingUp, Zap, BarChart3 } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { Button } from "./button";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    client: "Project 50",
    role: "Lifestyle & Growth Community",
    quote: "DudePix Media scaled our community to over 100,000 members in under 3 months through short-form dominance.",
    image: "https://i.pravatar.cc/150?u=p50",
    stats: "+240% Growth",
    subStat: "100k+ New Members",
    color: "from-blue-600/20",
    accentColor: "text-blue-500",
    borderColor: "group-hover:border-blue-500/30",
  },
  {
    id: 2,
    client: "The Wealth Academy",
    role: "Financial Education Brand",
    quote: "The content strategy provided by the team was flawless. Every upload felt like a viral hit and conversion soared.",
    image: "https://i.pravatar.cc/150?u=wealth",
    stats: "15M+ Impressions",
    subStat: "$250k+ Revenue Generated",
    color: "from-purple-600/20",
    accentColor: "text-purple-500",
    borderColor: "group-hover:border-purple-500/30",
  },
];

export const CaseStudies = () => {
  return (
    <section id="case-study" className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-1/4 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
                <Zap size={16} className="fill-current" />
                Case Studies
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter">
                Proven <span className="text-zinc-500">Results.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                We don't just edit videos. We build systems that transform silent players into industry-leading authorities.
              </p>
            </div>
            <Button variant="outline" className="rounded-full px-8 py-6 border-white/10 hover:bg-white hover:text-black transition-all duration-500">
              Explore All Wins
            </Button>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.id} width="100%" delay={i * 0.1}>
              <div className={`group relative w-full rounded-[2.5rem] bg-zinc-950 border border-white/5 p-8 md:p-14 overflow-hidden transition-all duration-700 ${cs.borderColor}`}>

                {/* Dynamic Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cs.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                  {/* Left: Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-5 mb-10">
                      <div className="relative">
                        <div className={`absolute inset-0 blur-lg opacity-50 ${cs.accentColor.replace('text', 'bg')}`} />
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/20 p-1 bg-black">
                          <Image src={cs.image} alt={cs.client} width={64} height={64} className="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white tracking-tight">{cs.client}</span>
                        <span className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{cs.role}</span>
                      </div>
                    </div>

                    <div className="relative mb-12">
                      <Quote className={`absolute -left-10 -top-8 w-16 h-16 ${cs.accentColor} opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity`} />
                      <h3 className="text-2xl md:text-4xl font-semibold text-white/90 leading-tight tracking-tight">
                        "{cs.quote}"
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <div className={`flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 ${cs.accentColor} font-bold text-lg`}>
                        <TrendingUp size={22} />
                        {cs.stats}
                      </div>
                      <button className="flex items-center gap-2 text-zinc-400 hover:text-white font-medium transition-colors ml-4 group/btn">
                        View Full Breakdown
                        <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right: Modern Stat Card */}
                  <div className="w-full lg:w-80 shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      className="aspect-square rounded-[3rem] bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between group-hover:border-white/20 transition-all shadow-2xl"
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-black border border-white/10 ${cs.accentColor}`}>
                        <BarChart3 size={24} />
                      </div>

                      <div>
                        <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-1">Key Milestone</p>
                        <p className="text-white text-xl font-bold">{cs.subStat}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className={`h-full ${cs.accentColor.replace('text', 'bg')}`}
                          />
                        </div>
                        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-tighter">Performance Verified</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};