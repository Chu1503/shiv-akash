"use client";

import ChuKB from "@/components/ChuKB";
import ChuMB from "@/components/ChuMB";
import ChuGB from "@/components/ChuGB";

export default function Experience() {
  return (
    <main className="flex items-center w-screen py-3 md:py-10 xl:py-16 bg-black flex-col lg:flex-row">
      <div className="w-[80%] lg:w-1/3 flex items-center justify-center h-[500px]">
        <ChuKB />
      </div>
      <div className="w-[80%] lg:w-1/3 flex items-center justify-center h-[500px]">
        <ChuGB />
      </div>
      <div className="w-[80%]  lg:w-1/3 flex items-center justify-center h-[500px]">
        <ChuMB />
      </div>
      
    </main>
  );
}
