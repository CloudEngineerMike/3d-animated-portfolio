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
import { FaLinux } from "react-icons/fa";
import { SiHostinger } from "react-icons/si";
import { SiAwslambda } from "react-icons/si";
import YearUp from "../assets/yu.png";
import GE from "../assets/ge.png";

export const navLinks = [
  {
    id: 1,
    url: "/",
    label: "Home",
  },
  {
    id: 2,
    url: "/about",
    label: "About",
  },
  // {
  //   id: 3,
  //   url: "/#skills",
  //   label: "Skills",
  // },
  {
    id: 3,
    url: "/experience",
    label: "Experience",
  },

  {
    id: 4,
    url: "/projects",
    label: "Projects",
  },
  {
    id: 5,
    url: "/testimonials",
    label: "Testimonials",
  },
];

export const ctaButton = [
  {
    id: 1,
    url: "/contact",
    label: "Contact Me",
  },
];

export const skills = [
  {
    id: 1,
    cardItems: [
      {
        name: "React Js",
        icon: <FaReact />,
        color: "text-blue-500",
      },
      {
        name: "Next Js",
        icon: <SiNextdotjs />,
        color: "text-white",
      },
      {
        name: "Angular",
        icon: <FaAngular />,
        color: "text-red-500",
      },
      {
        name: "Vite",
        icon: <SiVite />,
        color: "text-purple-400",
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
      {
        name: "AWS",
        icon: <FaAws />,
        color: "text-orange-500",
      },
      {
        name: "Azure",
        icon: <VscAzure />,
        color: "text-blue-400",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        color: "text-green-500",
      },

      {
        name: "DynamoDB",
        icon: <SiAmazondynamodb />,
        color: "text-blue-600",
      },
      // {
      //   name: "MySQL",
      //   icon: <GrMysql />,
      //   color: "text-blue-700",
      // },
      // {
      //   name: "Firebase",
      //   icon: <IoLogoFirebase />,
      //   color: "text-orange-400",
      // },
      {
        name: "S3",
        icon: <SiAmazons3 />,
        color: "text-orange-700",
      },
      {
        name: "API Gateway",
        icon: <SiAmazonapigateway />,
        color: "text-orange-600",
      },
      {
        name: "Linux",
        icon: <FaLinux />,
        color: "text-white",
      },
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
        name: "CodePipeline",
        icon: <FaAws />,
        color: "text-orange-500",
      },
      {
        name: "DevOps Pipeline",
        icon: <VscAzure />,
        color: "text-blue-400",
      },
      {
        name: "CDN",
        icon: <FaKeycdn />,
        color: "text-green-600",
      },
      {
        name: "Python",
        icon: <FaPython />,
        color: "text-yellow-500",
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
        color: "text-blue-600",
      },
      {
        name: "Bash",
        icon: <SiGnubash />,
        color: "text-white",
      },
      // {
      //   name: "YAML",
      //   icon: <SiYaml />,
      //   color: "text-red-500",
      // },
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
      // {
      //   name: "Figma",
      //   icon: <FaFigma />,
      //   color: "text-orange-600",
      // },
      // {
      //   name: "Canva",
      //   icon: <SiCanva />,
      //   color: "text-green-600",
      // },
      // {
      //   name: "Draw.io",
      //   icon: <SiDiagramsdotnet />,
      //   color: "text-orange-500",
      // },
      // {
      //   name: "VSCode",
      //   icon: <VscVscode />,
      //   color: "text-blue-500",
      // },
      // {
      //   name: "Xcode",
      //   icon: <SiXcode />,
      //   color: "text-blue-500",
      // },
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "text-orange-500",
      },
      // {
      //   name: "Hostinger",
      //   icon: <SiHostinger />,
      //   color: "text-indigo-500",
      // },
    ],
  },
];

export const projectData = [
  {
    id: 1,
    title: "Blob Questor",
    desc: "Cloud inventory API automation using PowerShell and Python for Azure data integration.",
    img: "/blobfish.jpg",
    link: "/query-quest",
    technologies: [
      {
        icon: <FaAws />,
        color: "text-orange-400",
      },
      {
        icon: <VscAzure />,
        color: "text-blue-400",
      },
      {
        icon: <SiAwslambda />,
        color: "text-orange-400",
      },
    ],
  },
  {
    id: 2,
    title: "Index Request Automator",
    desc: "Designed an automation service improving UI/API access authorization, reducing manual processing by 65%.",
    img: "/keys.jpg",
    link: "/cloud-index-authorizer",
    technologies: [
      {
        icon: <FaAws />,
        color: "text-orange-400",
      },
      {
        icon: <VscAzure />,
        color: "text-blue-400",
      },
      {
        icon: <SiAwslambda />,
        color: "text-orange-400",
      },
    ],
  },
  {
    id: 3,
    title: "Onboarding Pipeline",
    desc: "Developed an AWS pipeline automating employee access, enhancing compliance, and accelerating processes by 85%.",
    img: "/onboarding.jpg",
    link: "/",
    technologies: [
      {
        icon: <FaAws />,
        color: "text-orange-400",
      },
      {
        icon: <VscAzure />,
        color: "text-blue-400",
      },
      {
        icon: <SiAwslambda />,
        color: "text-orange-400",
      },
    ],
  },

  {
    id: 4,
    title: "KPI Dashboard",
    desc: "Developed an Onboarding Pipeline using Step Functions, Lambda, and DynamoDB, reducing onboarding time by 85%.",
    img: "/kpi.jpg",
    link: "/kpi-dashboard",
    technologies: [
      {
        icon: <FaAws />,
        color: "text-orange-400",
      },
      {
        icon: <VscAzure />,
        color: "text-blue-400",
      },
      {
        icon: <SiAwslambda />,
        color: "text-orange-400",
      },
    ],
  },
  {
    id: 5,
    title: "Deploy Dash",
    desc: "Engineered a custom CI/CD pipeline with AWS CodePipeline for optimized development, testing, and deployment.",
    img: "/dd.jpg",
    link: "/deploy-dash",
    technologies: [
      {
        icon: <FaAws />,
        color: "text-orange-400",
      },
      {
        icon: <VscAzure />,
        color: "text-blue-400",
      },
      {
        icon: <SiAwslambda />,
        color: "text-orange-400",
      },
    ],
  },
];

export const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "General Electric | Corporate",
    icon: GE,
    iconBg: "#00003D",
    date: "Jan 2019 - Present",
    pointsColor: "#FFFFFF",
    points: [
      "Developed cloud solutions for data integration, analytics, and process automation while leading secure authentication and onboarding pipelines.",

      "Optimized app migrations, React.js audits, and mentoring, enhancing team performance with containerization and CI/CD workflows.",

      "Improved workflows using Docker, CI/CD, and cross-platform analytics while ensuring quality through technical initiatives and audits.",
    ],
  },
  {
    title: "Software Engineering Specialist",
    company_name: "General Electric | Digital",
    icon: GE,
    iconBg: "#0F172A",
    date: "Oct 2017 - Dec 2018",
    pointsColor: "text-white",

    points: [
      "Infrastructure build & management tasks, reducing manual intervention and speeding up system deployments across cloud platforms.",

      "Designed and deployed cloud-based solutions using Angular, Terraform, and Azure DevOps to improve data accessibility and operational performance.",
    ],
  },
  {
    title: "Network Engineer Intern",
    company_name: "General Electric | Digital",
    icon: GE,
    iconBg: "#1E293B",
    date: "Feb 2017 - Sept 2017",
    pointsColor: "text-white",
    points: [
      "Configured and maintained Cisco equipment, gaining experience in port security, IP protocols, subnetting, routing.",
      "Supported troubleshooting and optimization, ensuring secure, reliable communication and connectivity across all company systems.",
    ],
  },
  {
    title: "Desktop Support Technician",
    company_name: "Year Up United",
    icon: YearUp,
    iconBg: "#6B21A8",
    date: "Sept 2016 - July 2017",
    pointsColor: "text-white",
    points: [
      "Provided comprehensive hardware and software support, including troubleshooting, maintenance, installations, diagnostics, repairs, and upgrades.",
      "Delivered client support, improving system performance through proactive troubleshooting and enhancing communication skills effectively.",
    ],
  },
];
