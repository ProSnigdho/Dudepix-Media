import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const SectionWrapper = ({
  children,
  id,
  className,
  containerClassName,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-32 overflow-hidden flex justify-center", className)}
    >
      <div className={cn("w-full max-w-7xl px-6 md:px-12 relative", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

