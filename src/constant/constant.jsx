import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSwift } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { SiAmazondynamodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAmazons3 } from "react-icons/si";
import { SiAmazonapigateway } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { IoGitMergeSharp } from "react-icons/io5";
import { FaKeycdn } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { VscTerminalPowershell } from "react-icons/vsc";
import { SiGnubash } from "react-icons/si";
import { SiYaml } from "react-icons/si";
import { LuFileJson2 } from "react-icons/lu";
import { GrSwift } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiDiagramsdotnet } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiXcode } from "react-icons/si";
import { SiPostman } from "react-icons/si";

export const navLinks = [
  {
    id: 1,
    url: "/#home",
    label: "Home",
  },
  {
    id: 2,
    url: "/#expertise",
    label: "Expertise",
  },
  {
    id: 3,
    url: "/#portfolio",
    label: "Portfolio",
  },
  {
    id: 4,
    url: "/#about",
    label: "About",
  },
  {
    id: 5,
    url: "/#testimonials",
    label: "Testimonials",
  },
];

export const ctaButton = [
  {
    id: 1,
    url: "/#contact",
    label: "Hire Me",
  },
];

export const skillCards = [
  {
    id: 1,
    title: "Front-End",
    cardItems: [
      {
        name: "React Js",
        icon: <FaReact />,
        color: "text-blue-400",
      },
      {
        name: "Next Js",
        icon: <SiNextdotjs />,
        color: "text-black",
      },
      {
        name: "Angular Js",
        icon: <FaAngular />,
        color: "text-red-500",
      },
      {
        name: "Vite",
        icon: <SiVite />,
        color: "text-yellow-600",
      },
      {
        name: "HTML",
        icon: <FaHtml5 />,
        color: "text-orange-500",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        color: "text-blue-600",
      },
      {
        name: "Tailwind",
        icon: <RiTailwindCssFill />,
        color: "text-blue-400",
      },
      {
        name: "SwiftUI",
        icon: <FaSwift />,
        color: "text-blue-600",
      },

    ],
  },
  {
    id: 2,
    title: "Back-End",
    cardItems: [
      {
        name: "AWS",
        icon: <FaAws />,
        color: "text-orange-400",
      },
      {
        name: "Azure",
        icon: <VscAzure />,
        color: "text-blue-400",
      },
      {
        name: "Node Js",
        icon: <FaNodeJs />,
        color: "text-green-400",
      },

      {
        name: "DynamoDB",
        icon: <SiAmazondynamodb />,
        color: "text-blue-400",
      },
      {
        name: "MySQL",
        icon: <GrMysql />,
        color: "text-blue-700",
      },
      {
        name: "Firebase",
        icon: <IoLogoFirebase />,
        color: "text-orange-400",
      },
      {
        name: "S3",
        icon: <SiAmazons3 />,
        color: "text-orange-700",
      },
      {
        name: "APIGateway",
        icon: <SiAmazonapigateway />,
        color: "text-orange-400",
      },

    ],
  },
  {
    id: 3,
    title: "DevOps",
    cardItems: [
      {
        name: "GitHub",
        icon: <FaGithub />,
        color: "text-white",
      },
      {
        name: "Terraform",
        icon: <SiTerraform />,
        color: "text-purple-500",
      },
      {
        name: "Docker",
        icon: <FaDocker />,
        color: "text-blue-500",
      },
      {
        name: "Git",
        icon: <IoGitMergeSharp />,
        color: "text-red-400",
      },
      {
        name: "CI/CD",
        icon: <FaAws />,
        color: "text-orange-400",
      },
      {
        name: "CI/CD",
        icon: <VscAzure />,
        color: "text-blue-400",
      },
      {
        name: "CDN",
        icon: <FaKeycdn />,
        color: "text-orange-600",
      },

    ],
  },
  {
    id: 4,
    title: "Languages & Scripting",
    cardItems: [
      {
        name: "Python",
        icon: <FaPython />,
        color: "text-yellow-300",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "text-blue-400",
      },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript />,
        color: "text-yellow-400",
      },

      {
        name: "PowerShell",
        icon: <VscTerminalPowershell />,
        color: "text-blue-500",
      },
      {
        name: "Bash",
        icon: <SiGnubash />,
        color: "text-white",
      },
      {
        name: "YAML",
        icon: <SiYaml />,
        color: "text-red-500",
      },
      {
        name: "JSON",
        icon: <LuFileJson2 />,
        color: "text-white",
      },
      {
        name: "Swift",
        icon: <GrSwift />,
        color: "text-orange-600",
      },
    ],
  },
  {
    id: 5,
    title: "Others",
    cardItems: [
      {
        name: "Figma",
        icon: <FaFigma />,
        color: "text-orange-600",
      },
      {
        name: "Canva",
        icon: <SiCanva />,
        color: "text-green-600",
      },
      {
        name: "Draw.io",
        icon: <SiDiagramsdotnet />,
        color: "text-orange-500",
      },
      {
        name: "VS Code",
        icon: <VscVscode />,
        color: "text-blue-500",
      },
      {
        name: "Xcode",
        icon: <SiXcode />,
        color: "text-blue-400",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "text-orange-500",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "text-orange-500",
      },
    ],
  },
];
