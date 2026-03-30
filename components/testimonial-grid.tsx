"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { id: 1, videoId: "1135498628" },
  { id: 2, videoId: "1135498628" },
  { id: 3, videoId: "1135498628" },
  { id: 4, videoId: "1135498628" },
];

export const TestimonialGrid = () => {
  const [items, setItems] = useState(testimonials);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setItems((prev) => {
      const newArray = [...prev];
      const firstItem = newArray.shift();
      if (firstItem) newArray.push(firstItem);
      return newArray;
    });
  };

  const handlePrev = () => {
    setDirection(-1);
    setItems((prev) => {
      const newArray = [...prev];
      const lastItem = newArray.pop();
      if (lastItem) newArray.unshift(lastItem);
      return newArray;
    });
  };

  return (
    <section id="review" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            What People Are <span className="text-blue-500 italic">Saying About Us</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl align-center justify-center mx-auto max-w-2xl leading-relaxed pt-2">
            Join hundreds of top creators who have scaled their brand with us.
          </p>
        </div>

        {/* Carousel Stage */}
        <div className="relative h-[650px] w-full flex items-center justify-center">

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-30 pointer-events-none px-4 md:px-10">
            <button onClick={handlePrev} className="p-4 rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-white transition-all pointer-events-auto backdrop-blur-md">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={handleNext} className="p-4 rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-white transition-all pointer-events-auto backdrop-blur-md">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* The Video Card */}
          <div className="relative w-full max-w-[360px] aspect-[9/16]">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={items[0].id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl"
              >
                {/* 
                   THE SECRET: 
                   Instead of an <Image />, we use the <iframe> directly.
                   Vimeo's player automatically handles portrait videos 
                   without zooming the content.
                */}
                <iframe
                  src={`https://player.vimeo.com/video/${items[0].videoId}?background=0&autoplay=0&muted=0&loop=1&byline=0&title=0&portrait=0`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};