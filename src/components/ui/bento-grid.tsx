"use client";

import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import GlassCard from "@/components/GlassCard";
import { ReactNode } from "react";

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

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4",
        className,
      )}
    >
      {children}
    </div>
  );
};



export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  link,
  githubLink,
}: {
  className?: string;
  title: string;
  description: ReactNode;
  image: StaticImageData;
  link?: string;
  githubLink?: string;
}) => {
  return (
    <GlassCard
      className={cn(
        "break-inside-avoid flex flex-col justify-between p-5 lg:p-10 overflow-hidden",
        className
      )}
    >
      <div className="flex flex-col items-center">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
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
                placeholder="blur"
                loading="lazy"
                className="pointer-events-auto mb-5 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </a>
        ) : (
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
              placeholder="blur"
              loading="lazy"
              className="pointer-events-none mb-5"
            />
          </motion.div>
        )}

        <motion.h1
          className="text-3xl font-bold tracking-widest text-white mb-5 text-center"
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
      </div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex w-full items-center justify-center lg:justify-between gap-7"
      >
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <RainbowButton size="icon" variant="default">
              <Image
                src="/images/github-mark-white.svg"
                alt="Github Icon"
                width={30}
                height={30}
                className="pointer-events-none"
              />
            </RainbowButton>
          </a>
        )}

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <RainbowButton>Visit Website</RainbowButton>
          </a>
        )}
      </motion.div>
    </GlassCard>
  );
};

