"use client";

import ChuKB from "@/components/ChuKB";
import ChuMB from "@/components/ChuMB";
import ChuGB from "@/components/ChuGB";
import { RainbowButton } from "@/components/magicui/rainbow-button";
// import GlassCard from "@/components/GlassCard";

export default function Experience() {
  return (
    <>
      <main className="relative flex items-center justify-center w-full py-3 md:py-10 xl:py-16 bg-black overflow-hidden gap-20">
        <RainbowButton
          size="fit"
          className="flex flex-col w-[450px] whitespace-normal break-words before:hidden"
        >
          <div className="h-[300px]">
            <ChuGB />
          </div>
          <div className="w-full px-4 text-white text-center">
            <h2 className="text-2xl font-bold">
              University of Wisconsin - Madison
            </h2>
            <h2 className="text-xl font-normal mt-3">MS Data Science</h2>
            <div className="flex flex-row justify-between my-4">
              <p className="text-xl">Incoming Student</p>
              <p className="text-xl">2025 – 2027</p>
            </div>
          </div>
        </RainbowButton>
        <RainbowButton
          size="fit"
          className="flex flex-col w-[450px] whitespace-normal break-words before:hidden"
        >
          <div className="h-[300px]">
            <ChuMB />
          </div>
          <div className="w-full px-4 text-white text-center">
            <h2 className="text-2xl font-bold">
              Vellore Institute of Technology, Vellore
            </h2>
            <h2 className="text-xl font-normal mt-3">
              B.Tech - Electronics & Communication Engineering
            </h2>
            <div className="flex flex-row justify-between my-4">
              <p className="text-xl">CGPA: 9.17 / 10.00</p>
              <p className="text-xl">2021 – 2025</p>
            </div>
          </div>
        </RainbowButton>

        <RainbowButton
          size="fit"
          className="flex flex-col w-[450px] whitespace-normal break-words before:hidden"
        >
          <div className="h-[300px]">
            <ChuKB />
          </div>
          <div className="w-full px-4 text-white text-center">
            <h2 className="text-2xl font-bold">
              Padma Seshadri Bala Bhavan, Chennai
            </h2>
            <h2 className="text-xl font-normal mt-3">
              CBSE - Physics, Chemistry, Biology
            </h2>
            <div className="flex flex-row justify-between my-4">
              <p className="text-xl">95.4%</p>
              <p className="text-xl">2006 – 2021</p>
            </div>
          </div>
        </RainbowButton>

        {/* <GlassCard className="flex flex-col w-[450px] whitespace-normal break-words before:hidden">
          <div className="h-[300px]">
            <ChuGB />
          </div>
          <div className="w-full px-4 text-white text-center">
            <h2 className="text-2xl font-bold">
              University of Wisconsin - Madison
            </h2>
            <h2 className="text-xl font-normal mt-3">MS Data Science</h2>
            <div className="flex flex-row justify-between my-4">
              <p className="text-xl">Incoming Student</p>
              <p className="text-xl">2025 – 2027</p>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="flex flex-col w-[450px] whitespace-normal break-words before:hidden">
          <div className="h-[300px]">
            <ChuMB />
          </div>
          <div className="w-full px-4 text-white text-center">
            <h2 className="text-2xl font-bold">
              Vellore Institute of Technology, Vellore
            </h2>
            <h2 className="text-xl font-normal mt-3">
              B.Tech - Electronics & Communication Engineering
            </h2>
            <div className="flex flex-row justify-between my-4">
              <p className="text-xl">CGPA: 9.17 / 10.00</p>
              <p className="text-xl">2021 – 2025</p>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="flex flex-col w-[450px] whitespace-normal break-words before:hidden">
          <div className="h-[300px]">
            <ChuKB />
          </div>
          <div className="w-full px-4 text-white text-center">
            <h2 className="text-2xl font-bold">
              Padma Seshadri Bala Bhavan, Chennai
            </h2>
            <h2 className="text-xl font-normal mt-3">
              CBSE - Physics, Chemistry, Biology
            </h2>
            <div className="flex flex-row justify-between my-4">
              <p className="text-xl">95.4%</p>
              <p className="text-xl">2006 – 2021</p>
            </div>
          </div>
        </GlassCard> */}
      </main>
    </>
  );
}
