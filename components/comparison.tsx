"use client";

import React from "react";
import { Check, X, ShieldCheck, Zap, HeartHandshake, Rocket, Star, Plus } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { cn } from "@/lib/utils";

const comparison = [
  { feature: "Dedicated Producer & Project Manager", mz: true, others: false },
  { feature: "Professional High-End Video Editing", mz: true, others: false },
  { feature: "Full Content Strategy & Ideation", mz: true, others: "Partial" },
  { feature: "Posting & Distribution Services", mz: true, others: false },
  { feature: "Unlimited Rounds of Revisions", mz: true, others: false },
  { feature: "24/7 Priority WhatsApp Support", mz: true, others: "Rarely" },
];

const features = [
  { icon: ShieldCheck, title: "Quality Control", text: "Every frame is scrutinized under a 3-step review process.", color: "text-blue-500" },
  { icon: Rocket, title: "Peak Efficiency", text: "Streamlined workflows that deliver 4K content at viral speed.", color: "text-purple-500" },
  { icon: Zap, title: "Viral Strategy", text: "Data-driven hooks designed to stop the scroll instantly.", color: "text-yellow-500" },
  { icon: HeartHandshake, title: "Growth Partner", text: "Your success is our ROI. We scale together, long-term.", color: "text-emerald-500" },
];

export const Comparison = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black w-full">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative w-full">

        {/* HEADER SECTION */}
        <div className="w-full flex justify-center mb-24">
          <ScrollReveal width="100%">
            <div className="flex flex-col items-center justify-center text-center w-full">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <Star size={12} className="text-blue-500 fill-blue-500" /> Battle Tested
              </div>
              <h2 className="text-5xl md:text-8xl font-bold mb-8 text-white tracking-tighter w-full max-w-4xl mx-auto italic">
                THE <span className="text-blue-500">DIFFERENCE.</span>
              </h2>
              <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                Most agencies are just "editors." We are a growth infrastructure built to scale your personal brand.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* UNIFORM FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1} width="100%">
              <div className="group relative h-full min-h-[280px] flex flex-col items-center text-center justify-center p-8 rounded-[3rem] bg-zinc-950 border border-white/5 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <item.icon className={cn("w-12 h-12 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(26,72,72,0.5)]", item.color)} />
                <h3 className="text-lg font-bold mb-3 text-white tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed max-w-[180px] font-medium">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* MODERN SERVICE COMPARISON TABLE */}
        <ScrollReveal width="100%">
          <div className="relative w-full max-w-5xl mx-auto">
            {/* The Floating Header Labels */}
            <div className="grid grid-cols-12 mb-6 px-8 items-center">
              <div className="col-span-6 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">Core Advantage</div>
              <div className="col-span-3 text-center text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">DudePix</div>
              <div className="col-span-3 text-center text-zinc-700 text-[10px] font-black uppercase tracking-[0.3em]">Others</div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-3">
              {comparison.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 items-center bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 group hover:bg-zinc-800/40 hover:border-blue-500/30 transition-all duration-300"
                >
                  {/* Feature Label */}
                  <div className="col-span-6 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-blue-500 transition-colors">
                      <Plus size={14} />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-zinc-300 group-hover:text-white transition-colors">
                      {item.feature}
                    </span>
                  </div>

                  {/* DudePix Mark */}
                  <div className="col-span-3 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-10 h-10 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(26,72,72,0.5)]">
                        <Check className="w-3.5 h-3.5 text-white stroke-[4px]" />
                      </div>
                    </div>
                  </div>

                  {/* Others Mark */}
                  <div className="col-span-3 flex justify-center">
                    {typeof item.others === "string" ? (
                      <span className="text-[10px] font-black text-zinc-700 uppercase italic tracking-tighter">{item.others}</span>
                    ) : (
                      <X className="w-5 h-5 text-zinc-800" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Callout Footer */}
            <div className="mt-12 p-8 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-blue-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-500/20">
              <div className="text-center md:text-left">
                <h4 className="text-white text-2xl font-bold tracking-tight">Ready to build your empire?</h4>
                <p className="text-blue-100 text-sm font-medium opacity-80">Stop settling for mediocre edits and slow growth.</p>
              </div>
              <button className="px-8 py-4 bg-white text-blue-600 font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-transform">
                Book a Call
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Decorative Glows */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};