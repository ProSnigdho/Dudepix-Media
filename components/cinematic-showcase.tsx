"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Rich grid data mimicking the high-density creator community image
const gridMembers = [
  {
    id: 1,
    name: "Codie Sanchez",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop",
    highlight: true,
  },
  {
    id: 2,
    name: "Alex Hormozi",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Creator 3",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Creator 4",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Creator 5",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Creator 6",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Creator 7",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Creator 8",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Creator 9",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Creator 10",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Creator 11",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Creator 12",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 13,
    name: "Creator 13",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 14,
    name: "Creator 14",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 15,
    name: "Creator 15",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 16,
    name: "Creator 16",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
];

// Distributed into 6 columns for smaller, sharper card layout density
const columnsData = [
  [...gridMembers.slice(0, 4), ...gridMembers.slice(4, 6)],
  [...gridMembers.slice(4, 8), ...gridMembers.slice(0, 2)],
  [...gridMembers.slice(8, 12), ...gridMembers.slice(2, 4)],
  [...gridMembers.slice(12, 16), ...gridMembers.slice(4, 6)],
  [...gridMembers.slice(2, 6), ...gridMembers.slice(6, 8)],
  [...gridMembers.slice(6, 10), ...gridMembers.slice(10, 12)],
];

export const CinematicShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      colRefs.current.forEach((col, index) => {
        if (!col) return;

        // Alternating scroll directions for adjacent columns
        const isEven = index % 2 === 0;
        const initialY = isEven ? -60 : 60;
        const targetY = isEven ? 60 : -60;

        gsap.set(col, { yPercent: initialY });

        gsap.to(col, {
          yPercent: targetY,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[150vh] bg-[#0c0c0c] overflow-hidden flex items-center justify-center select-none"
    >
      {/* Background Dimming Layer to focus center action buttons */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      {/* High-density grid container with smaller layout items */}
      <div className="absolute w-[110%] h-[130%] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 px-2">
        {columnsData.map((columnItems, colIndex) => (
          <div
            key={colIndex}
            ref={(el) => {
              colRefs.current[colIndex] = el;
            }}
            className="flex flex-col gap-2 will-change-transform"
          >
            {columnItems.map((item, itemIndex) => (
              <div
                key={`${colIndex}-${itemIndex}-${item.id}`}
                className="group relative w-full aspect-[11/10] bg-neutral-900 overflow-hidden cursor-pointer border border-neutral-900 transition-all duration-300 hover:scale-[1.02] hover:z-30 hover:border-neutral-800 shadow-lg"
              >
                {/* Core black & white to vivid colorful reveal styling */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-w-7xl) 15vw"
                  className="object-cover filter grayscale contrast-[1.15] brightness-[0.55] transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
                />

                {/* Slight vignetting gradient shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-30" />

                {/* Pop-up name tags matching your preview styling */}
                <div className="absolute bottom-2 left-2 right-2 z-20 transform translate-y-1 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-white text-[10px] font-medium bg-black/70 backdrop-blur-md px-2 py-1 rounded border border-white/5 inline-block">
                    {item.name}
                  </p>
                </div>

                {/* Default text tag wrapper showing only for primary selected element */}
                {item.highlight && (
                  <div className="absolute bottom-2 left-2 right-2 z-20 group-hover:hidden">
                    <p className="text-white text-[10px] font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/5 inline-block">
                      {item.name}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Interactive Bottom Control Float Deck */}
      <div className="absolute bottom-12 z-40 flex items-center bg-neutral-900/80 backdrop-blur-2xl border border-neutral-800/80 rounded-full shadow-2xl p-1 overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="text-neutral-400 text-xs font-semibold px-4 py-2">
          <span className="text-white font-bold tracking-tight">
            68/75 Members
          </span>
        </div>
        <button className="bg-white text-black font-extrabold text-xs px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors duration-200 shadow-sm">
          Secure Invite
        </button>
      </div>
    </section>
  );
};
