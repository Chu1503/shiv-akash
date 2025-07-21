"use client";

import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { RainbowButton } from "./magicui/rainbow-button";
import GlassCard from "./GlassCard";

interface OtherProjectsProps {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
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
  githubLink,
  image,
}: OtherProjectsProps) => {
  return (
    <GlassCard>
      {/* sm:h-auto md:h-[600px] lg:h-[650px] xl:h-[650px] */}
      <div className="h-auto  w-full flex flex-col justify-between p-5 lg:p-10">
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
            className="text-3xl font-bold tracking-widest text-white mb-5"
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {title}
          </motion.h1>
          <div className="overflow-y-auto">
            <motion.h2
              className="text-md sm:text-md xl:text-lg font-normal text-white mb-5 text-center "
              variants={slideUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {description}
            </motion.h2>
          </div>
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
      </div>
    </GlassCard>
  );
};

export default OtherProjects;
