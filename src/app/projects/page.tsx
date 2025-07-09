"use client";

import ProjectCard from "@/components/ProjectCard";
import phonePennywise from "@/assets/phone_pennywise.webp";

export default function Projects() {
  return (
    <main className="flex items-center w-full py-3 md:py-10 xl:py-16 bg-black">
      <div className="flex flex-col items-center justify-between w-full px-0 md:px-16 xl:px-36">
        <ProjectCard
          title="SubTrack"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
          link="Download APK"
          image={phonePennywise}
        />
        <ProjectCard
          title="Pennywise"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="Visit Website"
          image={phonePennywise}
          reverse
        />
      </div>
    </main>
  );
}
