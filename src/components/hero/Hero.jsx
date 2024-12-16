import "./hero.css";
// import { GrDownload } from "react-icons/gr";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareGithub } from "react-icons/fa6";
import { motion } from "motion/react";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import Speech from "./Speech";
// import { motion } from "motion/react";
import styled from "styled-components";
import HeroBgAnimation from "../HeroBgAnimation";
import ComputerModelContainer from "../services/computer/ComputerModelContainer";

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  top: 70%;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  justify-content: end;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroSection left">
        <div className="titleBox">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello, I&#39;m Mike!
          </motion.h2>
          <motion.div
            variants={awardVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1 variants={awardVariants} className="hTitle">
              Senior Software Engineer | Full Stack
            </motion.h1>
            <motion.p variants={awardVariants}>
              I&#39;m a Senior Software Engineer with nearly a decade of
              experience in software engineering and automated cloud
              solutioning. Currently focused on building responsive, full-stack
              web and mobile applications.
            </motion.p>
          </motion.div>

          {/* <div className="btnBox">
            <button>
              <a href="">Resume</a>
              <GrDownload size={15} />
            </button>
            <a
              href="https://www.linkedin.com/in/michael-g-smith-9b9677120/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/CloudEngineerMike"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaSquareGithub />
            </a>
          </div> */}
          {/* <button className="btn-primary">
            <a
              href="/cv.pdf"
              download="MikeGSmith_Resume"
              target="_blank"
              className="sm:text-xs md:text-base lg:text-base"
            >
              Download Resume
            </a>
            <div className="pl-2 sm:pb-1 md:pb-0 md:pt-[2px]">
              <GrDownload />
            </div>
          </button> */}
        </div>
      </div>
      <div className="heroSection right">
        <div className="heroRightTop">
          {/* <HeroBg>
            <HeroBgAnimation />
          </HeroBg> */}

          <ComputerModelContainer/>
        </div>

        <div className="heroRightBottom">
          {/* SCROLL SVG */}
          <motion.div className="scrollBox">
            <motion.a
              animate={{ y: [0, 5], opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              href="#expertise"
              className="scrollIcon"
            >
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                  stroke="white"
                  strokeWidth="1"
                />
                <motion.path
                  animate={{ y: [0, 5] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  d="M12 5V8"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </motion.a>
          </motion.div>

          <div className="contactBox">
            {/* CONTACT BUTTON */}
            <motion.a
              href="/#contact"
              className="contactLink"
              animate={{
                x: [200, 0],
                opacity: [0, 1],
              }}
              transition={{
                duration: 2,
              }}
            >
              <motion.div
                className="contactButton"
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 200 200" width="150" height="150">
                  <circle cx="100" cy="100" r="90" fill="pink" />
                  <path
                    id="innerCirclePath"
                    fill="none"
                    d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  />
                  <text className="circleText">
                    <textPath href="#innerCirclePath">Hire Now •</textPath>
                  </text>
                  <text className="circleText">
                    <textPath href="#innerCirclePath" startOffset="44%">
                      Contact Me •
                    </textPath>
                  </text>
                </svg>
                <div className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="50"
                    height="50"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                  >
                    <line x1="6" y1="18" x2="18" y2="6" />
                    <polyline points="9 6 18 6 18 15" />
                  </svg>
                </div>
              </motion.div>
            </motion.a>{" "}
          </div>
        </div>

        {/* </div> */}
        {/* <div className="imgBox">
        <img src="./test2.svg" alt="" className="pic" />


        </div> */}
      </div>

      {/* <div className="hSection right"> */}
      {/* SPEECH BUBBLE */}
      {/* <Speech /> */}

      {/* <div className="bg">
        <div className="hImg">
          <img src="/test3.svg" alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
