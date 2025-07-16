import iei from "@/assets/iei.png";
import hpe from "@/assets/hpe.png";
import nus from "@/assets/nus.png";
import qmax from "@/assets/qmax.png";

export type ChronoItem = {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText?: string;
  media?: {
    type: "IMAGE";
    source: { url: string };
  };
};

const experiences: ChronoItem[] = [
  {
    title: "Jan 2022 – Present",
    cardTitle: "Design Head",
    cardSubtitle: "The Institution Of Engineers India VIT",
    media: { type: "IMAGE", source: { url: iei.src } },
    cardDetailedText:
      "Led Creatoverse designathon, organized Illumina hackathon, and built event management & technical leadership skills.",
  },
  {
    title: "Dec 2022 – Jan 2023",
    cardTitle: "Academic Intern",
    cardSubtitle: "Hewlett Packard Enterprise",
    media: { type: "IMAGE", source: { url: hpe.src } },
    cardDetailedText:
      "Deployed deep learning models to Azure, gaining strong cloud computing and ML deployment experience.",
  },
  {
    title: "Dec 2022 – Jan 2023",
    cardTitle: "DL Academic Intern",
    cardSubtitle: "National University of Singapore",
    media: { type: "IMAGE", source: { url: nus.src } },
    cardDetailedText:
      "Worked on data analytics & deep learning, achieving an A-grade in practical evaluation.",
  },
  {
    title: "Sep 2023 – Nov 2023",
    cardTitle: "Embedded Systems & PCB Design Intern",
    cardSubtitle: "Qmax Systems Inc.",
    media: { type: "IMAGE", source: { url: qmax.src } },
    cardDetailedText:
      "Designed an RO control board with UART/SPI/ADC integration, and executed full PCB workflow from schematic to Gerber files.",
  },
];

export default experiences;