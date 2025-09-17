"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Image from "next/image";
import experiences from "./experienceData";

export default function TimelineDemo() {
  return (
    <>
      <div>
        <VerticalTimeline animate={true}>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.title}
              iconStyle={{
                background: "#121212",
                color: "#bbbbbb",
              }}
              icon={
                <div className="flex items-center justify-center w-full h-full overflow-hidden rounded-full">
                  <Image
                    src={exp.media?.source.url || "/placeholder.png"}
                    alt={exp.cardSubtitle}
                    width={100}
                    height={100}
                    style={{ width: 45, height: 45 }}
                  />
                </div>
              }
              contentStyle={{
                background: "#121212",
                color: "#fff",
                boxShadow: "none",
                padding: "1.5rem",
                position: "relative",
                // overflow: "hidden",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #252424",
              }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">{exp.cardTitle}</h3>
                <h4 className="text-md font-semibold">{exp.cardSubtitle}</h4>
                <p className="mt-2 text-sm font-thin">
                  {Array.isArray(exp.cardDetailedText)
                    ? exp.cardDetailedText.map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                          <br />
                        </span>
                      ))
                    : exp.cardDetailedText}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[3px] border-0 bg-[linear-gradient(#000000,#121212),linear-gradient(#030303_0%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] text-primary-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.125rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:[filter:blur(0.75rem)] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]" />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <style jsx global>{`
        .vertical-timeline::before {
          background: #bbbbbb !important;
          width: 4px !important;
        }
      `}</style>

      {/* <style jsx global>{`
        :root {
          --color-1: #ff0080;
          --color-2: #7928ca;
          --color-3: #2afadf;
          --color-4: #00f;
          --color-5: #f0f;
        }

        @keyframes rainbow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .animate-rainbow {
          background-size: 300% 300%;
          animation: rainbow 3s linear infinite;
        }
      `}</style> */}
    </>
  );
}
