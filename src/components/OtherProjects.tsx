"use client";

import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { RainbowButton } from "./magicui/rainbow-button";
import GlassCard from "./GlassCard";

interface OtherProjectsProps {
  title: string;
  description: string;
  link: string;
  github: string;
  image: StaticImageData;
}

const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const OtherProjects = ({
  title,
  description,
  link,
  github,
  image,
}: OtherProjectsProps) => {
  return (
    <GlassCard>
      <div className="flex flex-col items-center justify-center p-5 lg:p-10 w-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <Image
            src={image}
            alt={`${title} preview`}
            width={400}
            height={500}
            className="pointer-events-none mb-5"
          />
        </motion.div>

        <motion.h1
          className="text-3xl font-bold tracking-widest text-white mb-5"
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>

        <motion.h2
          className="text-md sm:text-md xl:text-lg font-normal text-white mb-5 text-center"
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {description}
        </motion.h2>

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex w-full items-center justify-center lg:justify-between gap-7"
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
      </div>
    </GlassCard>
  );
};

export default OtherProjects;
