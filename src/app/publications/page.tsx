"use client";

import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import CASPaper from "@/assets/CAS-Paper.png";
import FederatedPaper from "@/assets/Federated-Paper.png";

const publications = [
  {
    index: "2025",
    title:
      "Collision Avoidance System using YOLO-based Object Detection and Distance Estimation",
    doi: "https://ieeexplore.ieee.org/document/10915167",
    image: CASPaper,
  },
  {
    index: "2024",
    title:
      "Federated Learning for Predictive Maintenance: Model Comparisons and Privacy Advantages",
    doi: "https://ieeexplore.ieee.org/document/10823350",
    image: FederatedPaper,
  },
];

export default function Publications() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full py-3 md:py-10 xl:py-16 bg-black overflow-hidden gap-10">
      <div className="fixed top-0 left-0 z-0 w-full h-full hidden lg:block">
        <Particles />
      </div>

      <div className="relative z-10 h-full w-full flex items-center justify-center px-6">
        <div className="flex gap-20 justify-center flex-col xl:flex-row">
          {publications.map((pub, i) => (
            <motion.a
              key={pub.doi}
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] flex flex-col"
              style={{ width: "260px" }}
            >
              <div className="m-2 overflow-hidden rounded-xl">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  width={800}
                  height={1100}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02] opacity-75 group-hover:opacity-95"
                  sizes="260px"
                />
              </div>

              <div className="px-4 pt-2 pb-4 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-sm font-semibold text-white/80 leading-snug transition-colors duration-300 group-hover:text-white">
                    {pub.title}
                  </h2>
                  <ArrowUpRight
                    size={14}
                    className="mt-0.5 shrink-0 text-white/20 transition-all duration-300 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <span className="mt-2 text-xs font-mono text-white/25">
                  {pub.index}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
