"use client";

import ProjectCard from "@/components/ProjectCard";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

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

export default function Projects() {
  return (
    <main className="flex items-center w-full py-3 md:py-10 xl:py-16 bg-black">
      <div className="flex flex-col items-center justify-between w-full px-0 md:px-16 xl:px-36">
        <ProjectCard
          title="SubTrack"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
          link="Download APK"
          image="/images/phone.png"
        />
        <ProjectCard
          title="Pennywise"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="Visit Website"
          image="/images/phone.png"
          reverse
        />
      </div>
    </main>
  );
}
