"use client";

import React from "react";
import { cn } from "@/lib/utils";

type HoverBorderGradientProps = {
  containerClassName?: string;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  ...props
}: HoverBorderGradientProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative w-fit rounded-full flex items-center justify-center",
        "bg-white/5 backdrop-blur-md",
        "border border-white/15",
        "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
        "transition-colors duration-200 hover:border-white/25",
        containerClassName
      )}
    >
      <div
        className={cn(
          "text-white px-4 py-2 rounded-[inherit] flex items-center justify-center",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}