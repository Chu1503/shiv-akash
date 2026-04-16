"use client";

import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Particles } from "@/components/magicui/particles";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
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
    transition: { staggerChildren: 0.18 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

const navLinks = [
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
];

const dockLinks = [
  {
    label: "Resume",
    href: "/Shiv_Akash_Resume.pdf",
    Icon: FileText,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Chu1503",
    Icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shiv-akash/",
    Icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:shivakash7333@gmail.com",
    Icon: Mail,
    external: true,
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Particles className="absolute inset-0" />
        <InteractiveGridPattern className="absolute inset-0 opacity-40" />

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6 sm:gap-8"
        >
          <motion.p
            variants={slideUp}
            className="flex items-center gap-2 text-2xl font-medium text-white/70 md:text-3xl"
          >
            Hey
            <Image
              src="/images/hand-natural.webp"
              alt="Wave"
              width={512}
              height={512}
              className="inline-block h-7 w-7 sm:h-9 sm:w-9"
              style={{ animation: "wave 1.8s ease-in-out 0.6s 3" }}
            />
          </motion.p>

          <motion.h1
            variants={slideUp}
            className="text-6xl font-bold leading-tight tracking-tight text-white sm:text-7xl xl:text-8xl"
          >
            I&apos;m <AuroraText>Shiv Akash</AuroraText>
          </motion.h1>

          <motion.nav
            variants={slideUp}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href}>
                <span className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur-md transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white">
                  {label}
                </span>
              </Link>
            ))}
          </motion.nav>

          <motion.div variants={slideUp}>
            <TooltipProvider delayDuration={80}>
              <Dock
                direction="middle"
                className="border-white/10 bg-white/5 backdrop-blur-md"
              >
                {dockLinks.map(({ label, href, Icon }) => (
                  <DockIcon key={label}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="flex items-center justify-center rounded-full p-3 transition-colors hover:bg-white/10"
                        >
                          <Icon
                            className="size-5 text-white/60 transition-colors hover:text-white"
                            strokeWidth={1.5}
                          />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        sideOffset={10}
                        className="border-white/10 bg-black/70 text-white backdrop-blur-md"
                      >
                        <p>{label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </DockIcon>
                ))}
              </Dock>
            </TooltipProvider>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(20deg);
          }
          40% {
            transform: rotate(-10deg);
          }
          60% {
            transform: rotate(15deg);
          }
          80% {
            transform: rotate(-5deg);
          }
        }
      `}</style>
    </main>
  );
}
