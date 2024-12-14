import "./hero.css";
import { GrDownload } from "react-icons/gr";

// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import Speech from "./Speech";
// import { motion } from "motion/react";
import styled from "styled-components";
import HeroBgAnimation from "../HeroBgAnimation";

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

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroSection left">
        <div className="titleBox">
          <h2>Hello, I&#39;m Mike!</h2>
          <h1 className="hTitle">Senior Software Engineer | Full Stack</h1>
          <p>
            I&#39;m a Senior Software Engineer with nearly a decade of
            experience in software engineering and automated cloud solutioning.
            Currently focused on building responsive, full-stack web and mobile
            applications.
          </p>
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

        {/* SCROLL SVG */}
        {/* <div className="scrollContainer">
          <a href="#services" className="scroll">
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
              /> */}
        {/* <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            /> */}
        {/* </svg>
          </a>
        </div> */}
      </div>
      <div className="heroSection right">
              <HeroBg>
        <HeroBgAnimation  />
      </HeroBg>

        {/* <div className="imgBox">
        <img src="./test2.svg" alt="" className="pic" />


        </div> */}
      </div>

      {/* <div className="hSection right"> */}
      {/* SPEECH BUBBLE */}
      {/* <Speech /> */}

      {/* CONTACT BUTTON */}
      {/* <a href="#contact" className="contactLink">
          <div className="contactButton">
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
          </div>
        </a>
      </div> */}
      {/* <div className="bg">
        <div className="hImg">
          <img src="/test3.svg" alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
