"use client";

import ProjectCard from "@/components/ProjectCard";
import phonePennywise from "@/assets/phone_pennywise.webp";
import phoneSubtrack from "@/assets/phone_subtrack_2.webp";
import webCinemate from "@/assets/web_cinemate.webp";
import webMarketMurmur from "@/assets/web_mm.webp";
import webJasper from "@/assets/web_jasper.webp";
import webPwagon from "@/assets/web_pwagon.webp";
import webf1 from "@/assets/web_f1.webp";
// import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Particles } from "@/components/magicui/particles";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import iei_website from "@/assets/iei-website.webp";
import cinemate_website from "@/assets/cinemate.webp";
import invisible_patient_website from "@/assets/invisible_patient.webp";
import ipl_website from "@/assets/ipl_website.webp";
import illumina_website from "@/assets/illumina-no-nav.webp";
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
          title="MarketMurmur"
          textAlign="left"
          description={
            <>
              MarketMurmur is a market intelligence platform where you can
              search any public company and instantly get a clear, all in one
              view of what's going on. It brings together stock price trends,
              key financial metrics, and recent news sentiment into a single
              dashboard.
              <br />
              <br />
              Under the hood, it runs automated data pipelines using n8n to
              handle continuous data ingestion, transformation, and storage of
              stock data, financials, and news into a centralized PostgreSQL
              database. Each news article is processed with setiment analysis,
              and all signals are normalized and combined into a Hype vs
              Fundamentals score that flags companies as overhyped, undervalued,
              or aligned.
            </>
          }
          githubLink="https://github.com/Chu1503/marketmurmur"
          projectLink="https://marketmurmur.vercel.app"
          projectLinkText="Visit Website"
          image={webMarketMurmur}
          reverse
        />
        <ProjectCard
          title="F1 Race Intelligence"
          textAlign="right"
          description={
            <>
              A race analytics platform to explore Formula 1 races, from lap
              times and tyre strategy to pit stops and results, all in one
              place. It also generates AI driven strategy recommendations and
              race commentary based on real race scenarios
              <br />
              <br />
              Built on a data pipeline powered by Kafka and Spark, the system
              processes race data into a feature rich dataset that feeds a RAG
              pipeline using Pinecone and CrewAI. This allows the app to
              retrieve similar historical situations and generate context aware
              decisions, giving users a smarter way to understand race strategy
              and performance.
            </>
          }
          githubLink="https://github.com/Chu1503/f1-race-intelligence"
          projectLink="https://f1-race-intelligence.vercel.app"
          projectLinkText="Visit Website"
          image={webf1}
        />
        <ProjectCard
          title="Pennywise"
          textAlign="left"
          description={
            <>
              An expense tracker built with React Native that lets users log
              spending naturally, just by typing it like a text message.
              <br />
              <br />
              Behind the scenes, it runs a text-based expense ingestion pipeline
              using NLP techniques, including Named Entity Recognition (NER), to
              extract key details like amount and item and convert them into
              structured transaction records for automated categorization and
              spending analysis.
              <br />
              <br />
              The app then compiles everything into clear summaries and
              insights, helping users understand patterns in their spending and
              make better budgeting decisions without manual effort.
            </>
          }
          githubLink="https://github.com/orgs/Pennywise-Tracker/repositories"
          projectLink="https://drive.google.com/file/d/1Vg-ov8wLXYyJwWYyiRmroyqySIlAC1Eg/view?usp=sharing"
          projectLinkText="Download APK"
          image={phonePennywise}
          reverse
        />
        <ProjectCard
          title="SubTrack"
          textAlign="right"
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
          projectLink="https://drive.google.com/file/d/1Ya5JBSgj_WuxhyKD7yds32HAPrx9nVHc/view?usp=sharing"
          projectLinkText="Download APK"
          image={phoneSubtrack}
        />
        <ProjectCard
          title="PWagon"
          textAlign="left"
          description={
            <>
              A deep learning system for real time license plate detection that
              lets you post a "wanted vehicle" and instantly start tracking it
              across a network of cameras. Raspberry Pi devices scan live feeds,
              detect plates using a convolutional neural network trained on a
              custom image dataset, and use Google OCR to extract text and log
              sightings with time and location.
              <br />
              <br />
              Deployed for Amber Alert style workflows, it turns simple cameras
              into an automated monitoring system where alerts trigger instantly
              and matches are detected in real time, removing the need for
              manual footage review and enabling fast response when it matters
              most.
            </>
          }
          githubLink="https://github.com/orgs/P-Wagon/repositories"
          projectLink="https://p-wagon.vercel.app/"
          projectLinkText="Visit Website"
          image={webPwagon}
          reverse
        />
        <ProjectCard
          title="Jasper.AI"
          textAlign="right"
          description={
            <>
              Jasper.AI is an interview prep platform that builds a fully
              personalized roadmap based on your target company, role, timeline,
              and daily availability so no two candidates get the same plan.
              <br />
              <br />
              It uses LLM pipelines to research real interview questions from
              Reddit, Glassdoor, and LeetCode, prioritizes high impact weak
              areas using your confidence scores, and guides you day by day. You
              can practice through live voice-based mock interviews, where a
              feedback loop evaluates your responses and iteratively refines
              prompts based on adaptive assessment, providing structured, scored
              feedback.
            </>
          }
          githubLink="https://github.com/MadHacks26/Jasper.AI"
          projectLink="https://jasper-one.vercel.app/"
          projectLinkText="Visit Website"
          image={webJasper}
        />
        <br /> <br />
        <BentoGrid className="px-4">
          <BentoGridItem
            title="THE INVISIBLE PATIENT"
            description={
              <>
                An AI powered mental health companion for caregivers that offers
                voice or text check-ins. It runs a ZBI based burnout assessment
                naturally through conversation and tracks emotional patterns
                using a proprietary Resonance Score.
                <br />
                <br />
                It detects crisis signals in real time and includes an anonymous
                peer support forum. All data is handled in a privacy first, zero
                friction experience that helps catch caregiver burnout early.
              </>
            }
            link="https://invisible-patient.vercel.app"
            githubLink="https://github.com/Chu1503/invisible-patient"
            image={invisible_patient_website}
          />
          <BentoGridItem
            title="SOIL ORGANIC CARBON CALCULATOR"
            description={
              <>
                Website that predicts soil organic carbon using machine learning
                models like Random Forest, XGBoost, and SVR. <br />
                <br />
                Trained on data collected from IIT Madras, it uses inputs like
                pH, EC, nitrogen, phosphorus, and potassium for real-time
                predictions.
              </>
            }
            link="https://soil-organic-carbon.vercel.app"
            githubLink="https://github.com/Chu1503/soil-ml-backend"
            image={soil_website}
          />

          <BentoGridItem
            title="CINEMATE"
            description={
              <>
                {/* A web application designed to streamline movie selection for
                friend groups. Users can create groups, add friends, and vote
                together on movies, while the system generates recommendations
                based on the group's combined genre preferences, cutting
                decision-making time. <br />
                <br />
                This platform also includes a “Where to Watch” feature, showing
                up-to-date streaming availability with direct links to each
                movie, making it easy for the group to start watching without
                hunting for platforms. */}
                A web app for group movie decisions where users create groups,
                add friends, vote on films, and get recommendations based on
                shared preferences, with a “Where to Watch” feature providing up
                to date streaming links.
              </>
            }
            link="https://cinemate-wa.vercel.app"
            githubLink="https://github.com/Chu1503/movie-webapp"
            image={cinemate_website}
          />

          <BentoGridItem
            title="IEI WEBSITE"
            description="Official website of the IE(I) VIT Student Chapter."
            link="https://ieivit.vercel.app"
            githubLink="https://github.com/Chu1503/iei-website"
            image={iei_website}
          />
          <BentoGridItem
            title="IPL BEST XI ANALYTICS DASHBOARD"
            description={
              <>
                Scrapes every IPL 2024 match scorecard from ESPN Cricinfo across
                72 games, cleans and structures 1,900+ batting and bowling
                records using Python, and feeds them into a Power BI dashboard
                for interactive analysis.
                <br />
                <br />
                The dashboard enables cross-functional insights into player
                performance, helping users explore trends and objectively
                identify the tournament's best XI based purely on data rather
                than opinion.
              </>
            }
            // link="https://github.com/Chu1503/invisible-patient"
            // githubLink="https://invisible-patient.vercel.app"
            image={ipl_website}
          />

          <BentoGridItem
            title="ILLUMINA"
            description="Official website for Illumina, a hackathon organized by IE(I) VIT. Participants can register and form teams on the website."
            link="https://illumina.vercel.app"
            githubLink="https://github.com/Chu1503/illumina_2.0_website"
            image={illumina_website}
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
