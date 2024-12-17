import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    title: "Blob Questor",
    desc: "An automation service for a cloud inventory API that queries Big Data from Azure to AWS using PowerShell and Python. Enhancing data integration, cross-platform analytics, logging, and monitoring.",
    img: "/blobfish.jpg",
    link: "/query-quest",
  },
  {
    id: 2,
    title: "Index Request Automator",
    desc: "Led and designed an automation service to improve and secure user interface (UI) and API access authorization for a enterprise-level tool. Minimized manual processing by 65%, utilizing Python and AWS. ",
    img: "/keys.jpg",
    link: "/cloud-index-authorizer",
  },
  {
    id: 3,
    title: "Onboarding Pipeline",
    desc: "",
    img: "/",
    link: "/",
  },

  {
    id: 4,
    title: "KPI Dashboard",
    desc: "Designed a KPI dashboard using Angular to analyze trends across all cloud accounts for over 20 business units. This solution provided stakeholders with real-time data access, significantly enhancing decision-making capabilities.",
    img: "/kpi.jpg",
    link: "/kpi-dashboard",
  },
  {
    id: 5,
    title: "Deploy Dash",
    desc: "Designed and implemented a custom CI/CD pipeline leveraging AWS CodePipeline to optimize application development, automated testing and deployment processing.",
    img: "/dd.jpg",
    link: "/deploy-dash",
  },
  // {
  //   id: 6,
  //   title: "Caaptive Solutions",
  //   desc: "A responsive, full-stack website built for a tech startup, featuring a modern and intuitive front-end paired with an AWS-native back-end tech stack.",
  //   img: "/caaptive-screenshot.png",
  //   link: "/caaptive-solutions",
  // },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      {/* <section /> */}
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
