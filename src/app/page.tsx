"use client";

import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Particles } from "@/components/magicui/particles";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { FileText, Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

export type IconProps = React.SVGProps<SVGSVGElement>;

const Icons = {
  resume: (props: IconProps) => <FileText {...props} />,
  gitHub: (props: IconProps) => <Github {...props} />,
  linkedIn: (props: IconProps) => <Linkedin {...props} />,
  email: (props: IconProps) => <Mail {...props} />,
};

export default function Home() {
  return (
    <main className="flex items-center w-screen py-3 md:py-10 xl:py-32 bg-black">
      <div className="absolute inset-0 z-1 overflow-hidden w-full h-full">
        <Particles />
        <InteractiveGridPattern />
      </div>

      <div className="flex flex-col items-center justify-center w-full text-center z-10 px-5">
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
            <motion.div
              variants={slideUp}
              className="flex flex-col gap-12 items-center px-5"
            >
              <div className="flex gap-10 mt-4">
                <Link href="/education">
                  <div
                    className="relative w-fit rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                    transition-all duration-200 hover:border-white/30 hover:bg-white/10 flex items-center justify-center"
                  >
                    <div className="text-white px-5 py-2 rounded-full">
                      Education
                    </div>
                  </div>
                </Link>

                <Link href="/experience">
                  <div
                    className="relative w-fit rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                    transition-all duration-200 hover:border-white/30 hover:bg-white/10 flex items-center justify-center"
                  >
                    <div className="text-white px-5 py-2 rounded-full">
                      Experience
                    </div>
                  </div>
                </Link>
                <Link href="/projects">
                  <div
                    className="relative w-fit rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                    transition-all duration-200 hover:border-white/30 hover:bg-white/10 flex items-center justify-center"
                  >
                    <div className="text-white px-5 py-2 rounded-full">
                      Projects
                    </div>
                  </div>
                </Link>

                <Link href="/publications">
                  <div
                    className="relative w-fit rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                    transition-all duration-200 hover:border-white/30 hover:bg-white/10 flex items-center justify-center"
                  >
                    <div className="text-white px-5 py-2 rounded-full">
                      Publications
                    </div>
                  </div>
                </Link>
              </div>

              <div className="relative">
                <TooltipProvider delayDuration={80}>
                  <Dock direction="middle">
                    <DockIcon>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="/Shiv_Akash_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Resume"
                            className="flex items-center justify-center rounded-full p-3"
                          >
                            <FileText
                              className="size-6 text-white/80 transition group-hover:text-white"
                              strokeWidth={1.5}
                            />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          sideOffset={10}
                          className="border-white/10 bg-black/70 text-white backdrop-blur-md"
                        >
                          <p>Resume</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>

                    <DockIcon>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://github.com/Chu1503"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex items-center justify-center rounded-full p-3"
                          >
                            <Github
                              className="size-6 text-white/80 transition"
                              strokeWidth={1.5}
                            />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          sideOffset={10}
                          className="border-white/10 bg-black/70 text-white backdrop-blur-md"
                        >
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>

                    <DockIcon>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://www.linkedin.com/in/shiv-akash/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex items-center justify-center rounded-full p-3"
                          >
                            <Linkedin
                              className="size-6 text-white/80 transition"
                              strokeWidth={1.5}
                            />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          sideOffset={10}
                          className="border-white/10 bg-black/70 text-white backdrop-blur-md"
                        >
                          <p>LinkedIn</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>

                    <DockIcon>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="mailto:shivakash7333@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                            className="flex items-center justify-center rounded-full p-3"
                          >
                            <Mail
                              className="size-6 text-white/80 transition"
                              strokeWidth={1.5}
                            />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          sideOffset={10}
                          className="border-white/10 bg-black/70 text-white backdrop-blur-md"
                        >
                          <p>Email</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>
                  </Dock>
                </TooltipProvider>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
