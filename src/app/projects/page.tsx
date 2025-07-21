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
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import iei_website from "@/assets/iei-website.webp";
import illumina_website from "@/assets/illumina.webp";
import soil_website from "@/assets/soil.webp"

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
        <BentoGrid className="px-4">
          <BentoGridItem
            title="IEI WEBSITE"
            description="Official website of the IE(I) VIT Student Chapter."
            link="https://ieivit.vercel.app"
            githubLink="https://github.com/Chu1503/iei-website"
            image={iei_website}
          />
          <BentoGridItem
            title="ILLUMINA"
            description="Official website for Illumina, a hackathon organized by IE(I) VIT. Participants can register and form teams on the website."
            link="https://illumina.vercel.app"
            githubLink="https://github.com/Chu1503/illumina_2.0_website"
            image={illumina_website}
          />
          <BentoGridItem
            title="SOIL ORGANIC CARBON CALCULATOR"
            description="Website that predicts soil organic carbon using machine learning models like Random Forest, XGBoost, and SVR. Trained on data collected from IIT Madras, it uses inputs like pH, EC, nitrogen, phosphorus, and potassium for real-time predictions."
            link="Visit Website"
            image={soil_website}
          />
          {/* <BentoGridItem
            title="RESQMEALS"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="Visit Website"
            image={test}
          />
          <BentoGridItem
            title="POSTURE CORRECTION"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="Visit Website"
            image={test}
          />
          <BentoGridItem
            title="IPL?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="Visit Website"
            image={test}
          />
          <BentoGridItem
            title="SPOTIFY?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="Visit Website"
            image={test}
          />
          <BentoGridItem
            title="SPECTRUM ANALYSIS?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="Visit Website"
            image={test}
          />
          <BentoGridItem
            title="INTELLIGIST?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="Visit Website"
            image={test}
          /> */}
        </BentoGrid>
      </div>
    </main>
  );
}
