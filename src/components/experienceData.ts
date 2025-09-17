import iei from "@/assets/iei.png";
import hpe from "@/assets/hpe.png";
import nus from "@/assets/nus.png";
import qmax from "@/assets/qmax.png";
import iit from "@/assets/iit.png"

export type ChronoItem = {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText?: string | string[];
  media?: {
    type: "IMAGE";
    source: { url: string };
  };
};


const experiences: ChronoItem[] = [
  {
    title: "Jan 2025 – May 2025",
    cardTitle: "Data Analysis Intern",
    cardSubtitle: "Indian Institute of Technology, Madras",
    media: { type: "IMAGE", source: { url: iit.src } },
    cardDetailedText: [
      "Built an image analysis pipeline to quantify fluorescence cell counts, improving accuracy in cellular studies and enabling high-throughput drug screening",
      "Applied spectral data analysis to develop and optimize a point-of-care diagnostic device for biomarker detection in infectious diseases and cancer"
    ],
    },
  {
    title: "Jan 2023 – Oct 2024",
    cardTitle: "Executive Design Head",
    cardSubtitle: "The Institution Of Engineers India VIT",
    media: { type: "IMAGE", source: { url: iei.src } },
    cardDetailedText: [
      "Organized and served as panelist at 'Illumina' a 36-hour hackathon, fostering innovation and collaboration at VIT",
      "Took on the crucial responsibility of organizing and training new candidates for our chapter. Through this experience",
      "Refined my leadership and communication skills and played an important role in assuring the organization's future success",
    ]
  },
  {
    title: "Sep 2023 – Nov 2023",
    cardTitle: "Embedded Systems & PCB Design Intern",
    cardSubtitle: "Qmax Systems Inc.",
    media: { type: "IMAGE", source: { url: qmax.src } },
    cardDetailedText: [
      "Worked on a project centered on the development of an RO Control Board, using the Nuvoton NuMaker-MS51PC family microcontroller",
      "Interfaced the microcontroller with a TM1638 7-Segment Display Keypad & LED module, employing advanced techniques such as UART, SPI Communication, and ADC integration",
      "Learnt and worked on the complete PCB Design process, involving schematic creation, footprint creation, netlist generation, component placement, routing and Gerber file exports",
      "Created comprehensive documentation, including assembly drawings, BOM (Bill of Materials), and assembly instructions"
    ]},
  {
    title: "Dec 2022 – Jan 2023",
    cardTitle: "Academic Intern",
    cardSubtitle: "Hewlett Packard Enterprise",
    media: { type: "IMAGE", source: { url: hpe.src } },
    cardDetailedText: [
      "Deployed deep learning models on Microsoft Azure under the mentorship of Mr. Shantanu Pandey, optimizing scalability and management of large datasets for complex computations"
    ]
      
  },
  {
    title: "Dec 2022 – Jan 2023",
    cardTitle: "DL Academic Intern",
    cardSubtitle: "National University of Singapore",
    media: { type: "IMAGE", source: { url: nus.src } },
    cardDetailedText:
      "Gained hands-on expertise in data analytics, data mining, and deep learning by applying exploratory data analysis, preprocessing, and predictive modeling techniques to build and train neural network models",
  },
  
];

export default experiences;