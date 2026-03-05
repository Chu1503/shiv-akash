"use client";

import { Particles } from "@/components/magicui/particles";

export default function Publications() {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center w-full py-3 md:py-10 xl:py-16 bg-black overflow-hidden gap-10">
        <div className="fixed top-0 left-0 z-0 w-full h-full hidden lg:block">
          <Particles />
        </div>
      </main>
    </>
  );
}
