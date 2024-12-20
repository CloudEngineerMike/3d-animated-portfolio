import "./home.css";
import { motion } from "motion/react";
import ComputerModelContainer from "../services/computer/ComputerModelContainer";
import { GrDownload } from "react-icons/gr";


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


const Home = () => {

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
          <div>
            <button className="btn btn-primary">
              <a
                href="/cv.pdf"
                download="MikeGSmith_Resume"
                target="_blank"
                className="sm:text-xs md:text-base lg:text-base"
              >
                Download Resume
              </a>
              <div className="iconStyle">
                <GrDownload />
              </div>
            </button>
          </div>

          {/* <div className="btnBox">

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
        </div>
      </div>
      <div className="heroSection right">
        <div className="heroRightTop">

          <ComputerModelContainer/>
        </div>

        <div className="heroRightBottom">
          {/* SCROLL SVG */}
          <motion.div className="scrollBox">
            <motion.div
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
