"use client";

import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Tilt from "react-parallax-tilt";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { useEffect, useState } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
  reverse?: boolean;
};

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

export default function ProjectCard({
  title,
  description,
  link,
  image,
  reverse = false,
}: ProjectCardProps) {
  const [angleX, setAngleX] = useState(0);
  const [angleY, setAngleY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let frameId: number;
    let t = 0;

    const animate = () => {
      const radius = 7;
      if (!isHovering) {
        setAngleX(Math.sin(t) * radius);
        setAngleY(Math.cos(t) * radius);
      }
      t += 0.005;
      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, [isHovering]);

  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center w-full px-4 md:px-16 xl:px-24 mb-20 gap-10`}
    >
      <div className="w-full lg:w-1/3 text-center lg:text-left  ">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-3 sm:space-y-6"
        >
          <motion.h1
            variants={slideUp}
            className="text-4xl md:text-6xl xl:text-7xl font-bold text-[#e8e8e8]  "
          >
            {title}
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="text-md sm:text-xl md:text-lg xl:text-xl mx-auto tracking-wide font-normal text-[#bbbbbb]"
          >
            {description}
          </motion.p>
          <motion.div
            variants={slideUp}
            className="flex w-full items-center justify-center lg:justify-end gap-7"
          >
            <RainbowButton size="icon" variant="default">
              <Image
                src="/images/github-mark-white.svg"
                alt="Github Icon"
                width={30}
                height={30}
                className="pointer-events-none"
              />
            </RainbowButton>

            <RainbowButton>{link}</RainbowButton>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative w-full lg:w-2/3 flex items-center justify-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={slideUp}>
            <Tilt
              tiltEnable={true}
              tiltAngleXManual={!isHovering ? angleX : undefined}
              tiltAngleYManual={!isHovering ? angleY : undefined}
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              scale={1}
              glareEnable={false}
              className="w-full rounded-xl overflow-hidden"
              onEnter={() => setIsHovering(true)}
              onLeave={() => setIsHovering(false)}
            >
              <Image
                src={image}
                alt={title}
                className="w-[90%] lg:w-[65%] object-cover h-auto mx-auto"
              />
            </Tilt>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
