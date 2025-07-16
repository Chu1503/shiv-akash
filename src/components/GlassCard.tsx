import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <>
      <svg style={{ display: "none" }}>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="0.02" result="blur" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blur"
            scale="77"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div
        className={cn(
          "relative inline-flex flex-col rounded-[30px] overflow-hidden",
          className
        )}
      >
        <div className="absolute inset-0 rounded-[30px] z-10 pointer-events-none shadow-[inset_2px_2px_0px_-2px_rgba(255,255,255,0.7),inset_0_0_3px_1px_rgba(255,255,255,0.7)]" />

        <div className="absolute inset-0 rounded-[30px] -z-10 [filter:url(#container-glass)] backdrop-blur-0" />

        <div className="z-20 relative">{children}</div>
      </div>
    </>
  );
};

export default GlassCard;
