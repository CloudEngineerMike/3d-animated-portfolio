import "./home.css";
import { motion } from "motion/react";
// import ComputerModelContainer from "../services/computer/ComputerModelContainer";
import OrigamiEarthModelContainer from "../services/earth/OrigamiEarthModelContainer";
import Speech from "./Speech";
import { GrDownload } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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

const iconSize = 20;

const Home = () => {
  return (
    // Outer Container
    <div className="container grid sm:grid-cols-2 md:grid-cols-12 gap-0 justify-center md:items-center w-full mx-auto h-screen relative">
      {/* Left Container */}
      <div className="flex justify-center items-center sm:col-span-2 md:col-span-6 lg:col-span-5 flex-col w-full sm:h-full md:h-full md:p-4">
        <div>
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="xs:text-[30px] lg:text-[60px] xs:text-center md:text-start  bg-gradient-to-r from-[#45da4d] to-[#f6ff00] text-transparent bg-clip-text font-vt323"
          >
            <Speech />
          </motion.h2>
          <motion.div
            variants={awardVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={awardVariants}
              className="xs:text-[40px] lg:text-[80px] xs:text-center md:text-start font-bold font-vt323 sm:leading-[90px]"
            >
              Hello, I&#39;m Mike.
            </motion.h1>
            <motion.p
              className="xs:text-[15px] sm:text-[20px] text-center md:text-start md:text-[16px] lg:text-[19px] lg:mr-10 font-vt323 lg:tracking-wider"
              variants={awardVariants}
            >
              A results-driven Senior Software Engineer specializing in Cloud
              Automation and Full-Stack Application development, delivering
              solutions that drive product success.
            </motion.p>
            <div className="flex xs:justify-center md:justify-between xs:mt-8  xs:w-[100%] md:w-[80%] lg:w-[64%]">
              <a
                href="/cv.pdf"
                download="MikeGSmith_Resume"
                target="_blank"
                rel="noopener noreferrer"
                className="xs:text-sm md:text-base lg:text-xl font-vt323"
              >
                <div className="border border-white flex items-center xs:p-4 lg:px-4 rounded-lg shadow-2xl hover:border-green-400 hover:bg-black transition duration-300 ">
                  Download CV
                  <div className="ml-2">
                    <GrDownload />
                  </div>
                </div>
              </a>

              <div className=" xs:hidden lg:flex">
                <a
                  href="https://www.linkedin.com/in/michael-g-smith-9b9677120/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 "
                >
                  <div className="flex items-center p-5 mr-3 rounded-full border border-white hover:border-green-400 hover:bg-black transition duration-300">
                    <FaLinkedinIn size={iconSize} className="" />
                  </div>
                </a>

                <a
                  href="https://github.com/CloudEngineerMike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xs:text-xs md:text-base"
                >
                  <div className="flex items-center p-5 mr-3 rounded-full border border-white hover:border-green-400 hover:bg-black transition duration-300">
                    <FaGithub size={iconSize} />
                  </div>
                </a>

                <a
                  href="https://www.youtube.com/@EngineerGuyMike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 xs:text-xs md:text-base lg:text-base "
                >
                  <div className="flex items-center p-5 rounded-full border border-white hover:border-green-400 hover:bg-black transition duration-300">
                    <FaYoutube size={iconSize} />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/*  */}
      <div className="xs:hidden md:flex md:col-span-6 lg:col-span-7 w-full md:h-full flex justify-center items-center cursor-grab">
        <OrigamiEarthModelContainer />
      </div>

      <div className="absolute inset-0 xs:top-[600px] xs:left-[133px] sm:top-[800px] sm:left-[165px] md:top-[900px]  md:left-[343px] lg:left-[725px]">
        {/* <a href="#about"> */}
          <motion.div
            animate={{ y: [0, 5], opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
            href="#expertise"
            className=""
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
          </motion.div>
        {/* </a> */}
      </div>
    </div>
  );
};

export default Home;
