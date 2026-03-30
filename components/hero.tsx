"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, Star, Video, Mic, TrendingUp, Users } from "lucide-react";
import { Button } from "./button";
import { ScrollReveal } from "./scroll-reveal";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const avatars = [
    "https://i.pravatar.cc/150?u=1",
    "https://i.pravatar.cc/150?u=2",
    "https://i.pravatar.cc/150?u=3",
    "https://i.pravatar.cc/150?u=4",
    "https://i.pravatar.cc/150?u=5",
  ];

  const badges = [
    { icon: Video, label: "Short Form Content", color: "bg-purple-500", rotation: "-rotate-6" },
    { icon: Mic, label: "Podcast Clips", color: "bg-blue-500", rotation: "rotate-3" },
    { icon: TrendingUp, label: "Viral Growth", color: "bg-green-500", rotation: "-rotate-2" },
    { icon: Users, label: "Community Building", color: "bg-orange-500", rotation: "rotate-6" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-purple opacity-40 animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-blue opacity-40 animate-pulse-slow delay-2000" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6 space-y-8">
        {/* Social Proof Badge */}


        {/* Headline + Subtext + Buttons */}
        <motion.div
          style={{ y: y1, opacity }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <ScrollReveal delay={0.2}>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1.1] md:leading-[1] tracking-tighter">
              <span className="block opacity-40">Dominate The Digital</span>
              <span className="block text-gradient">Landscape with DudePix Media</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/5">
              <div className="flex -space-x-3">
                {avatars.map((url, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-black overflow-hidden ring-1 ring-white/10"
                  >
                    <Image src={url} alt="User" width={32} height={32} />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 ml-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-white/80">
                  Loved by 500+ Businesses
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              We help ambitious creators and brands scale to 7-figures through
              strategic short-form content, expert editing, and
              growth-driven marketing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="group w-full sm:w-auto"
                onClick={() => {
                  const element = document.getElementById('book-call');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book A Call
                <MoveRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto hover:bg-white/5 transition-all"
                onClick={() => {
                  const element = document.getElementById('work');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Our Work
              </Button>
            </div>
          </ScrollReveal>
        </motion.div>
      </div>

      <div className="hidden lg:block">
        {badges.map((badge, i) => (
          <ScrollReveal
            key={i}
            delay={0.4 + (i * 0.1)}
            direction={i % 2 === 0 ? "left" : "right"}
            width="fit-content"
            className={cn(
              "absolute",
              i === 0 && "top-50 left-10",
              i === 1 && "top-1/4 right-10",
              i === 2 && "bottom-1/4 left-10",
              i === 3 && "bottom-50 right-10",
            )}
          >
            <div className={cn(
              "flex items-center gap-3 px-6 py-4 rounded-2xl glass-card border-white/5 shadow-xl transition-transform hover:scale-105",
              badge.rotation
            )}>
              <div className={cn("p-2 rounded-xl text-white", badge.color)}>
                <badge.icon size={20} />
              </div>
              <span className="font-bold text-white whitespace-nowrap">{badge.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>



      {/* Hero Bottom Mask */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};