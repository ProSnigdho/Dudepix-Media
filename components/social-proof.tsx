"use client";

import React, { useState } from "react";
import { Play, Mic, Video, TrendingUp, Users, X } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const VIMEO_ID = "1123026653";

const badges = [
  { icon: Video, label: "Short Form Content", color: "bg-purple-500", rotation: "-rotate-6" },
  { icon: Mic, label: "Podcast Clips", color: "bg-blue-500", rotation: "rotate-3" },
  { icon: TrendingUp, label: "Viral Growth", color: "bg-green-500", rotation: "-rotate-2" },
  { icon: Users, label: "Community Building", color: "bg-orange-500", rotation: "rotate-6" },
];

export const SocialProof = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Built To Convert <span className="text-blue-500">Every Impression</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Content that doesn't just look good, but drives actual business results.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative group max-w-5xl mx-auto">
          {/* Main Video Container */}
          <ScrollReveal width="100%" delay={0.2}>
            <div
              className="aspect-video relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl transition-all duration-500"
              onClick={() => !isPlaying && setIsPlaying(true)}
            >
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  <motion.div
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 cursor-pointer group"
                  >
                    {/* Video Thumbnail using Vimeo High-Res */}
                    <Image
                      src={`https://vumbnail.com/${VIMEO_ID}.jpg`}
                      alt="VSL Thumbnail"
                      fill
                      className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Center Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_50px_rgba(26,72,72,0.5)] group-hover:scale-110 transition-transform duration-500">
                        <Play className="w-8 h-8 md:w-10 md:h-10 fill-white ml-1" />
                      </div>
                    </div>

                    {/* Fake Progress Bar to simulate a video player */}
                    <div className="absolute bottom-8 left-8 right-8 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "65%" }}
                        className="h-full bg-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black"
                  >
                    <iframe
                      src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

          {/* Floating Badges - Absolute positioned relative to the video container */}

        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
};