"use client";

import Chu from "@/components/Chu";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Particles } from "@/components/magicui/particles";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { ExternalLink } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

export default function Home() {
  return (
    <main className="flex items-center w-screen py-3 md:py-10 xl:py-16 bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full hidden lg:block">
        <Particles />
        <InteractiveGridPattern />
      </div>

      {/* Noise Texture */}
      {/* <svg className="absolute inset-0 h-full w-full opacity-20">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg> */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 xl:px-36">
        <div className="w-full md:w-2/3 xl:w-2/3">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-3 sm:space-y-6"
          >
            <motion.p
              variants={slideUp}
              className="text-2xl md:text-4xl xl:text-4xl font-medium text-[#e8e8e8] "
            >
              Hey
              <Image
                src="/images/hand-natural.webp"
                alt="Wave"
                width={512}
                height={512}
                className="w-7 h-7 sm:w-10 sm:h-10 ml-1 inline-block"
              />
            </motion.p>
            <motion.h1
              variants={slideUp}
              className="text-6xl md:text-7xl xl:text-8xl font-bold 
              text-[#e8e8e8]
              "
            >
              I{"'"}m <AuroraText>Shiv Akash</AuroraText>
            </motion.h1>
            <motion.p
              variants={slideUp}
              className="text-lg sm:text-xl mx-auto tracking-wide font-normal text-[#bbbbbb]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
            <motion.div variants={slideUp}>
              <Link href="/Shiv-Akash-Resume.pdf" target="_blank" download>
                <ShimmerButton>
                  <span className="flex items-center gap-2 text-sm md:text-lg">
                    Resume
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </ShimmerButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/3 flex items-center justify-center h-[250px] md:h-[325px] xl:h-[475px] mt-4 sm:mt-0">
          <Chu />
        </div>
      </div>
      
    </main>
  );
}
