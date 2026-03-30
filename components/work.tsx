"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types for our project data
type Category = "Youtube Videos" | "Shorts" | "SAAS Videos" | "Ad Creatives & VSL";

interface Project {
  id: number;
  title: string;
  category: Category;
  videoUrl: string;
  thumbnail?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Iman Gadzi x Magnetmedia",
    category: "Youtube Videos",
    videoUrl: "https://vimeo.com/1178401081?fl=sv&fe=ci",
  },
  {
    id: 2,
    title: "Ultimate Showreels",
    category: "Youtube Videos",
    videoUrl: "https://vimeo.com/1178404433?fl=sv&fe=ci",
  },

  {
    id: 3,
    title: "Talking Head",
    category: "Youtube Videos",
    videoUrl: "https://vimeo.com/1178404912?fl=sv&fe=ci",
  },
  {
    id: 4,
    title: "Real Estate Motion Graphics",
    category: "Shorts",
    videoUrl: "https://vimeo.com/1178406431?fl=sv&fe=ci",
  },
  {
    id: 5,
    title: "Shoe Motion Graphics",
    category: "SAAS Videos",
    videoUrl: "https://vimeo.com/1178405731?fl=sv&fe=ci",
  },
  {
    id: 6,
    title: "Viral Ad Creative",
    category: "Ad Creatives & VSL",
    videoUrl: "https://vimeo.com/1178404433?fl=sv&fe=ci",
  },
];

const categories: Category[] = ["Youtube Videos", "Shorts", "SAAS Videos", "Ad Creatives & VSL"];

export const Work = () => {
  const [activeTab, setActiveTab] = useState<Category>("Youtube Videos");

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  return (
    <section id="work" className="bg-black text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
          Featured Work
        </div>
        <h2 className="text-4xl md:text-7xl font-display font-bold mb-12 tracking-tight">
          Crafting <span className="text-blue-600">Digital Mastery</span>
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-8 py-3 text-sm font-bold transition-all duration-300 rounded-full border ${activeTab === cat
                ? "bg-white text-black border-white"
                : "bg-transparent text-gray-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                }`}
            >
              {cat}
              {activeTab === cat && (
                <motion.div
                  layoutId="active-glow"
                  className="absolute -inset-1 bg-white/20 rounded-full blur-sm -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className={`grid gap-8 ${activeTab === "Shorts"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
            : "grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto"
            }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative group overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-600/50 transition-all duration-500 shadow-2xl"
              >
                <div className={`relative w-full ${activeTab === "Shorts" ? "aspect-[9/16]" : "aspect-video"}`}>
                  <iframe
                    src={project.videoUrl.replace("vimeo.com/", "player.vimeo.com/video/")}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* Project Title Overlay */}

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Background elements to match the premium theme */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] -z-10 rounded-full" />
    </section>
  );
};