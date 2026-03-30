import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20",
    secondary: "bg-white text-black hover:bg-white/90 shadow-lg",
    outline: "border border-border-subtle bg-transparent hover:bg-white/5",
    ghost: "bg-transparent hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base md:px-8 md:py-4",
    lg: "px-8 py-4 text-lg md:px-10 md:py-5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

