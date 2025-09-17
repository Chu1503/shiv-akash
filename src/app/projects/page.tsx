"use client";

import ProjectCard from "@/components/ProjectCard";
import phonePennywise from "@/assets/phone_pennywise.webp";
import phoneSubtrack from "@/assets/phone_subtrack_2.webp";
import webCinemate from "@/assets/web_cinemate.webp";
import webPwagon from "@/assets/web_pwagon.webp";
// import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Particles } from "@/components/magicui/particles";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import iei_website from "@/assets/iei-website.webp";
import illumina_website from "@/assets/illumina.webp";
import soil_website from "@/assets/soil.webp";

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
          title="Pennywise"
          description={
            <>
              An expense tracker that lets users log spending simply by typing
              it out like a text message.
              <br />
              <br />
              Behind the scenes, it uses text categorization and Named Entity
              Recognition (NER) to identify the amount, the item, and
              automatically assign it to the correct category.
              <br />
              <br />
              The app then compiles this information into clear summaries and
              insights, helping users spot patterns in their spending and make
              better budgeting decisions without the usual manual effort.
            </>
          }
          githubLink="https://github.com/orgs/Pennywise-Tracker/repositories"
          projectLink="https://pennywise.app/download"
          projectLinkText="Download APK"
          image={phonePennywise}
          reverse
        />
        <ProjectCard
          title="SubTrack"
          description={
            <>
              This app makes it easier to keep track of recurring subscriptions.
              Users can choose from common services or add their own, set
              reminders, and fully customize billing cycles down to any duration
              they want. <br />
              <br />
              The focus was on keeping the interface clean and simple, so
              everything from viewing payment schedules to managing multiple
              subscriptions feels straightforward and easy to use.
            </>
          }
          githubLink="https://github.com/Chu1503/SubTrack"
          projectLink="https://pennywise.app/download"
          projectLinkText="Download APK"
          image={phoneSubtrack}
        />
        <ProjectCard
          title="PWagon"
          description={
            <>
              A deep learning system for real-time license plate detection,
              built using a convolutional neural network trained on a custom
              annotated dataset and paired with Google’s OCR for accurate text
              extraction. <br />
              <br />
              The system has been adapted for Amber Alert networks and deployed
              on a Raspberry Pi 4, capturing images during emergencies and
              instantly sending alerts. <br />
              <br />
              This simple frontend interface lets law enforcement enter
              suspected license plates, which triggers Amber Alerts around the
              last known location of the vehicle, enabling real-time monitoring
              and detection as the system scans for matches.
            </>
          }
          githubLink="https://github.com/orgs/P-Wagon/repositories"
          projectLink="https://p-wagon-frontend.vercel.app"
          projectLinkText="Visit Website"
          image={webPwagon}
          reverse
        />
        <ProjectCard
          title="Cinemate"
          description={
            <>
              A web application designed to streamline movie selection for
              friend groups. Users can create groups, add friends, and vote
              together on movies, while the system generates recommendations
              based on the group’s combined genre preferences, cutting
              decision-making time. <br />
              <br />
              This platform also includes a “Where to Watch” feature, showing
              up-to-date streaming availability with direct links to each movie,
              making it easy for the group to start watching without hunting for
              platforms.
            </>
          }
          githubLink="https://github.com/Chu1503/movie-webapp"
          projectLink="https://cinemate-wa.vercel.app"
          projectLinkText="Visit Website"
          image={webCinemate}
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
            description={
              <>
                "Website that predicts soil organic carbon using machine
                learning models like Random Forest, XGBoost, and SVR. <br />
                <br />
                Trained on data collected from IIT Madras, it uses inputs like
                pH, EC, nitrogen, phosphorus, and potassium for real-time
                predictions."
              </>
            }
            link="https://soil-organic-carbon.vercel.app"
            githubLink="https://github.com/Chu1503/soil-ml-backend"
            image={soil_website}
          />

          {/* 
          <BentoGridItem
            title="INTELLIGIST"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="https://www.intelligistgroup.com/"
            image={test}
          />
          <BentoGridItem
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
           */}
        </BentoGrid>
      </div>
    </main>
  );
}
