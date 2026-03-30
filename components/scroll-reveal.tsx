"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
}

export const ScrollReveal = ({
  children,
  width = "100%",
  className,
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.6,
}: ScrollRevealProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: distance };
      case "down": return { opacity: 0, y: -distance };
      case "left": return { opacity: 0, x: distance };
      case "right": return { opacity: 0, x: -distance };
      default: return { opacity: 0, y: distance };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down": return { opacity: 1, y: 0 };
      case "left":
      case "right": return { opacity: 1, x: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <div style={{ width }} className={cn("relative", className)}>

      <motion.div
        initial={getInitialPosition()}
        whileInView={getAnimatePosition()}
        transition={{ duration, delay, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};
