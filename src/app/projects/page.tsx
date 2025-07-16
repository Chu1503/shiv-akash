"use client";

import ProjectCard from "@/components/ProjectCard";
import phonePennywise from "@/assets/phone_pennywise.webp";
import phoneSubtrack from "@/assets/phone_subtrack_2.webp";
import webCinemate from "@/assets/web_cinemate.webp";
import webPwagon from "@/assets/web_pwagon.webp";
// import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Particles } from "@/components/magicui/particles";
import test from "@/assets/test.png";
import OtherProjects from "@/components/OtherProjects";

export default function Projects() {
  return (
    <main className="relative flex items-center w-full py-3 md:py-10 xl:py-16 bg-black overflow-hidden">
      <div className="fixed top-0 left-0 z-0 w-full h-full hidden lg:block">
        <Particles />
      </div>

      {/* <FlickeringGrid
        className="absolute inset-0 z-0"
        color="rgb(255, 255, 255)"
        squareSize={4}
        gridGap={6}
        flickerChance={0.3}
        maxOpacity={0.2}
      /> */}

      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" /> */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_50%)]" /> */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,224,71,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,224,71,0.05),transparent_70%)]" /> */}

      <div className="flex flex-col items-center justify-between w-full px-0 md:px-16 xl:px-36">
        <ProjectCard
          title="SubTrack"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
          link="Download APK"
          image={phoneSubtrack}
        />
        <ProjectCard
          title="Pennywise"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="Visit Website"
          image={phonePennywise}
          reverse
        />
        <ProjectCard
          title="Cinemate"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
          link="Visit Website"
          image={webCinemate}
        />
        <ProjectCard
          title="PWagon"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua"
          link="Visit Website"
          image={webPwagon}
          reverse
        />
        <br /> <br />
        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
            <OtherProjects
              title="IEI WEBSITE"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="Visit Website"
              image={test}
            />
            <OtherProjects
              title="ILLUMINA"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="Visit Website"
              image={test}
            />
            <OtherProjects
              title="SOIL CARBON"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="Visit Website"
              image={test}
            />
            <OtherProjects
              title="RESQMEALS"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="Visit Website"
              image={test}
            />
            <OtherProjects
              title="POSTURE CORRECTION"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="Visit Website"
              image={test}
            />
            <OtherProjects
              title="IPL?"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="Visit Website"
              image={test}
            />
            <OtherProjects
              title="SPOTIFY?"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="Visit Website"
              image={test}
            />
            <OtherProjects
              title="SPECTRUM ANALYSIS?"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="Visit Website"
              image={test}
            />
            <OtherProjects
              title="INTELLIGIST?"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="Visit Website"
              image={test}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
