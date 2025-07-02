"use client";

import Chu from "@/components/Chu";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";

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
    <>
      <main className="flex items-center text-dark w-full py-12 bg-[#151515]">
        <div className="flex items-center justify-between w-full px-64">
          <div className="w-2/3">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <motion.p
                variants={slideUp}
                className="text-4xl font-medium text-[#e8e8e8] "
              >
                Hey
                <Image
                  src="/images/hand-natural.webp"
                  alt="Wave"
                  width={512}
                  height={512}
                  className="w-10 h-10 ml-1 inline-block"
                />
              </motion.p>
              <motion.h1
                variants={slideUp}
                className="text-8xl font-bold text-[#e8e8e8]"
              >
                I'm Shiv Akash!
              </motion.h1>
              <motion.p
                variants={slideUp}
                className="text-2xl mx-auto tracking-wide font-normal text-[#bbbbbb]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>
            </motion.div>
          </div>
          <div className="w-1/3 flex items-center justify-center h-[500px]">
            <Chu />
          </div>
        </div>
      </main>
    </>
  );
}
