"use client";

import React from "react";
import { 
  Youtube, 
  Instagram, 
  LayoutGrid, 
  Video, 
  PenTool, 
  TrendingUp, 
  Smartphone, 
  Users 
} from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const services = [
  { icon: Smartphone, title: "Short Form Content", desc: "TikToks, Reels, and Shorts designed for maximum viral potential and audience engagement.", color: "purple" },
  { icon: Youtube, title: "YouTube Production", desc: "Long-form editing, storytelling, and thumbnail strategy to scale your channel to new heights.", color: "blue" },
  { icon: Video, title: "Podcast Content", desc: "Multi-camera podcast editing and vertical clip extraction for widespread reach.", color: "green" },
  { icon: PenTool, title: "Creative Ideation", desc: "Conceptual script writing and storyboard development tailored to your brand voice.", color: "orange" },
  { icon: LayoutGrid, title: "Grid Curation", desc: "Social media management and aesthetic content planning to maintain a premium profile.", color: "accent" },
  { icon: TrendingUp, title: "Paid Ads & Growth", desc: "High-conversion video ads and growth strategies to turn content into direct revenue.", color: "blue" },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Services.</h2>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">Comprehensive solutions for creators ready to dominate their niche.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative p-10 h-full rounded-[2.5rem] glass-card border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 flex flex-col items-center text-center">
                 {/* Icon Background Glow */}
                 <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity bg-${service.color === "accent" ? "accent" : service.color + "-500"}`} />
                 
                 {/* Main Icon */}
                 <div className="w-20 h-20 rounded-3xl glass-card border-white/10 flex items-center justify-center mb-8 rotate-3 group-hover:rotate-[0deg] transition-transform duration-500 shadow-xl relative z-10 group-hover:scale-110">
                    <service.icon className={`w-10 h-10 ${service.color === "accent" ? "text-accent" : "text-" + service.color + "-400"}`} />
                 </div>

                 <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                    {service.title}
                 </h3>
                 <p className="text-muted leading-relaxed group-hover:text-white/80 transition-colors">
                    {service.desc}
                 </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] glow-blue opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] glow-purple opacity-10 pointer-events-none" />
    </section>
  );
};
