"use client";

import ChuKB from "@/components/ChuKB";
import ChuMB from "@/components/ChuMB";
import ChuGB from "@/components/ChuGB";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Particles } from "@/components/magicui/particles";
import Timeline from "@/components/Timeline";

export default function Experience() {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center w-full py-3 md:py-10 xl:py-16 bg-black overflow-hidden gap-10">
        <div className="fixed top-0 left-0 z-0 w-full h-full hidden lg:block">
          <Particles />
        </div>
        <div className="relative flex items-center justify-center w-full bg-black overflow-hidden gap-20 lg:gap-10 xl:gap-20 flex-col lg:flex-row">
          <RainbowButton
            size="fit"
            className="flex flex-col w-[275px] sm:w-[500px] lg:w-[275px] xl:w-[400px] whitespace-normal break-words before:hidden"
          >
            <div className="h-[300px]">
              <ChuGB />
            </div>
            <div className="w-full px-4 text-white text-center">
              <h2 className="text-2xl font-bold">
                University of Wisconsin - Madison
              </h2>
              <h2 className="text-lg xl:text-xl font-normal mt-3">
                MS Data Science
              </h2>
              <div className="flex flex-col xl:flex-row justify-between my-4">
                <p className="text-lg lg:text-xl mb-2 xl:mb-0">
                  {/* Incoming Student */}
                </p>
                <p className="text-md lg:text-xl">2025 – 2027</p>
              </div>
            </div>
          </RainbowButton>
          <RainbowButton
            size="fit"
            className="flex flex-col w-[275px] sm:w-[500px] lg:w-[275px] xl:w-[400px] whitespace-normal break-words before:hidden"
          >
            <div className="h-[300px]">
              <ChuMB />
            </div>
            <div className="w-full px-4 text-white text-center">
              <h2 className="text-2xl font-bold">
                Vellore Institute of Technology, Vellore
              </h2>
              <h2 className="text-lg xl:text-xl font-normal mt-3">
                B.Tech - Electronics & Communication Engineering
              </h2>
              <div className="flex flex-col xl:flex-row justify-between my-4">
                <p className="text-lg lg:text-xl mb-2 xl:mb-0">
                  CGPA: 9.17 / 10.00
                </p>
                <p className="text-md lg:text-xl">2021 – 2025</p>
              </div>
            </div>
          </RainbowButton>

          <RainbowButton
            size="fit"
            className="flex flex-col w-[275px] sm:w-[500px] lg:w-[275px] xl:w-[400px] whitespace-normal break-words before:hidden"
          >
            <div className="h-[300px]">
              <ChuKB />
            </div>
            <div className="w-full px-4 text-white text-center">
              <h2 className="text-2xl font-bold">
                Padma Seshadri Bala Bhavan, Chennai
              </h2>
              <h2 className="text-lg xl:text-xl font-normal mt-3">
                CBSE - Physics, Chemistry, Math, Biology
              </h2>
              <div className="flex flex-col xl:flex-row justify-between my-4">
                <p className="text-lg lg:text-xl mb-2 xl:mb-0">Grade: 95.6%</p>
                <p className="text-md lg:text-xl">2006 – 2021</p>
              </div>
            </div>
          </RainbowButton>
        </div>
        <div className="mt-5"></div>
        <Timeline />
      </main>
    </>
  );
}
