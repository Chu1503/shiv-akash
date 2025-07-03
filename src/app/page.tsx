"use client";

// import Chu from "@/components/Chu";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
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
    <main className="flex items-center w-screen py-12 bg-black">
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
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 md:px-16 xl:px-48">
        <div className="w-full md:w-1/2 xl:w-2/3">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.p
              variants={slideUp}
              className="text-2xl font-medium text-[#e8e8e8] "
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
              className="text-6xl md:text-4xl xl:text-8xl font-bold 
              text-red-500 md:text-blue-500 xl:text-green-500
              "
            >
              {/* text-[#e8e8e8]  */}
              I{"'"}m Shiv Akash!
            </motion.h1>
            <motion.p
              variants={slideUp}
              className="text-xl mx-auto tracking-wide font-normal text-[#bbbbbb]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
            <motion.div variants={slideUp}>
              <Link href="/Shiv-Akash-Resume.pdf" target="_blank" download>
                <ShimmerButton>
                  <span className="flex items-center gap-2 text-sm">
                    Resume
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </ShimmerButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          {/* <Chu /> */}
        </div>
      </div>
    </main>
  );
}
