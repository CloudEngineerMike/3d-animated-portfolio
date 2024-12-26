import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion.js";
import { GrDownload } from "react-icons/gr";
import Tilt from "react-parallax-tilt";
import { GiRibbonMedal } from "react-icons/gi";
import ComputerModelContainer from "../services/computer/ComputerModelContainer.jsx";

const About = () => {
  return (
    <div className="container sm:h-[1200px] md:h-screen mx-auto flex flex-col justify-center items-center lg:max-w-[100%]  sm:py-32 ">
      {/* Section Heading */}
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={styles.sectionHeadText}>More Than  A Coder</h2>
      </motion.div>
      <div className="h-full w-full mx-auto grid flex-row justify-center items-center grid-cols-4 lg:p-4 lg:gap-4 ">
        {/* Left Container */}
        <div className="sm:hidden lg:grid grid-cols-4 w-full h-full flex-col justify-center items-center sm:col-span-4 lg:col-span-2 pt-16">
          {/* First Quadrant */}
          <div className="flex justify-center items-center w-full h-full col-span-2 relative">
            <Tilt
              tiltReverse={true}
              className=" p-4 absolute rounded-lg border-solid border-4 border-white bg-blue-600 bottom-[90px] left-[210px] shadow-2xl"
            >
              <GiRibbonMedal className=" text-[80px] " />
            </Tilt>
          </div>

          {/* Second Quadrant */}
          <Tilt
            tiltReverse={true}
            className=" flex justify-center items-center w-full col-span-2 sm:h-[340px] md:h-[350px] md:w-[350px] bg-[url('/wallpaper.jpg')] bg-no-repeat bg-cover overflow-x-clip rounded-xl border-solid border-4 border-white relative shadow-2xl"
          >
            <img
              className="absolute  sm:left-[3px] md:left-[164px] lg:left-[8px] sm:bottom-[0px] md:h-[500px] lg:h-[450px]"
              src="/sittingPic.svg"
              alt=""
              loading="lazy"

            />
          </Tilt>

          {/* Third Quadrant */}
          <div
            tiltReverse={true}
            className="relative flex justify-center items-center col-span-2 w-full h-[250px] bottom-[90px] left-[65px] rounded-xl border-solid border-4 border-white shadow-2xl"
          >
            <img
              className="absolute h-full  rounded-xl"
              src="/coding.jpg"
              alt=""
              loading="lazy"

            />
          </div>

          {/* Fourth Quadrant */}
          <div className="flex justify-center items-start col-span-2 w-full h-full ml-4 pt-14">
            <div className="flex border-l-[4px] border-green-500">
              <p className="ml-4 text-[20px] italic">
              &#34;Do or do not. <br /> There is no try.&#34; <br /> - Master Yoda
              </p>
            </div>
          </div>
        </div> 

        {/* Right Container */}
        <div className="flex sm:col-span-4 lg:col-span-2 flex-col justify-center sm:items-center md:items-start h-full md:px-10 lg:p-10 ">
          {/* <h2 className="sm:hidden lg:flex md:text-[20px] font-semibold">
            Get to Know Me
          </h2> */}
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="md:py-6 sm:text-center md:text-start sm:text-base md:text-base sm:mb-10"
          >
            <div className="sm:hidden lg:flex flex-col">
              My journey started in high school with a web design class that
              ignited my passion. In 2016, I enrolled in the Year Up United
              program, completing six months of IT training and earning an
              internship at General Electric. This pivotal experience launched my career.
            </div>
            <br />
            Close to a decade in my career, I&#39;ve led projects from inception
            to completion. Starting as a Junior Software Engineer, I became
            proficient in both{" "}
            <span className="font-bold text-orange-500"> AWS</span> and
            <span className="font-bold text-blue-400"> Azure</span> platforms.
            Promoted to Senior in 2022, providing technical leadership,
            mentorship, and fostering team success.
            <br />
            <br />
            Over the last few years, I&#39;ve learned to build high-performance,
            responsive web applications, driven by a commitment to crafting
            scalable solutions that create meaningful impact and deliver lasting
            outcomes.
          </motion.div>

          <Tilt
            tiltReverse={true}
            className="flex sm:flex-col  md:flex-row  grid-cols-2 bg-indigo-900 border-2 border-green-500 rounded-[20px] shadow-2xl mb-10 sm:p-8 md:p-0"
          >
            <div className="col-span-1 md:border-r-2 border-r-gray-500 md:p-6">
              <div className=" ">
                <h4 className="font-bold">Name</h4>
                <p className="text-green-300">Michael G. Smith</p>
              </div>
              <div className="sm:py-4 md:py-2 ">
                <h4 className="font-bold">Location</h4>
                <p className="text-green-300">Atlanta, GA</p>
              </div>
              <div className=" ">
                <h4 className="font-bold">Years of Experience</h4>
                <p className="text-green-300">7+</p>
              </div>
            </div>

            <div className="col-span-1 md:p-6">
              <div className="sm:pt-4 md:pt-0 md:pl-6">
                <h4 className="font-bold">Sports</h4>
                <p className="text-green-300">
                  Basketball, Football, Table Tennis
                </p>
              </div>
              <div className="sm:py-4 md:py-2  md:pl-6">
                <h4 className="font-bold">Hobbies</h4>
                <p className="text-green-300">Music, Cooking, Video games</p>
              </div>
              <div className="md:pl-6">
                <h4 className="font-bold">Movies</h4>
                <p className="text-green-300">Star Wars & Marvel</p>
              </div>
            </div>
          </Tilt>
          <a
            href="/cv.pdf"
            download="MikeGSmith_Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:text-xl md:text-base lg:text-xl font-vt323"
          >
            <div className="border border-white flex items-center sm:p-4 lg:px-4 rounded-lg shadow-2xl hover:border-green-400 hover:bg-black transition duration-300">
              Download CV
              <div className="ml-2">
                <GrDownload />
              </div>
            </div>
          </a>
        </div>
        {/* <div className="sm:hidden lg:flex col-span-2 w-full h-full cursor-grab ">

<ComputerModelContainer />
</div> */}

      </div>
    </div>
  );
};

export default About;
