import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion.js";
import { GrDownload } from "react-icons/gr";
import Tilt from "react-parallax-tilt";
import { GiRibbonMedal } from "react-icons/gi";
// import { services } from "../../constant/constant";
// import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <div className="container h-screen mx-auto flex flex-col justify-center items-center lg:max-w-[100%]  sm:py-32">
      {/* Section Heading */}
      <motion.div variants={textVariant()} className="text-center font-vt323">
        <h2 className={styles.sectionHeadText}>More Than Just A Coder</h2>
      </motion.div>
      <div className="h-full w-full mx-auto grid flex-row justify-center items-center grid-cols-4 p-4 gap-6">
        {/* Left Container */}
        <div className="sm:hidden lg:grid grid-cols-4 w-full h-full flex-col justify-center items-center sm:col-span-4 lg:col-span-2 p-6 ">
          {/* First Quadrant */}
          <div className="flex justify-center items-center w-full h-full col-span-2 relative">
            <Tilt
              tiltReverse={true}
              className=" p-4 absolute rounded-lg border-solid border-4 border-white bg-blue-600 bottom-[100px] left-[185px] shadow-2xl"
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
            />
          </div>

          {/* Fourth Quadrant */}
          <div className="flex justify-center items-start col-span-2 w-full h-full ml-4 pt-14">
            <div className="flex border-l-[6px] border-green-500 ml-8">
              <p className="text-5xl ml-4">7+</p>
              <p className="ml-4 text-[18px]">
                Successful <br /> Years
              </p>
            </div>
          </div>
        </div>
        {/* Right Container */}
        <div className="flex sm:col-span-4 lg:col-span-2 flex-col justify-center items-start h-full md:p-10">
          <h2 className="sm:hidden md:flex md:text-[20px] font-semibold">Get to Know Me</h2>
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="py-6 sm:text-sm md:text-base "
          >
            My journey started in high school with a web design class that
            ignited my passion. In 2016, I enrolled in the{" "}
            <span className="font-semibold italic">Year Up United </span>
            program, completing six months of IT training and earning an
            internship at <span className="font-bold">General Electric</span>.
            This pivotal experience launched my career.
            <br />
            <br />
            Close to a decade in my career, I&#39;ve led projects from inception
            to completion. Starting as a Junior Software Engineer, I became
            proficient in both <span className="font-bold"> AWS</span> and
            <span className="font-bold"> Azure</span> platforms. Promoted to
            Senior in 2022, I now provide technical leadership, mentorship, and
            foster team success.
            <br />
            <br />
            Over the last few years, I&#39;ve learned to build high-performance,
            responsive web applications, driven by a commitment to crafting
            scalable solutions that create meaningful impact and deliver lasting
            outcomes.
          </motion.div>

          <Tilt
            tiltReverse={true}
            className="grid grid-cols-2 bg-indigo-900 border-2 border-green-500 rounded-[20px] shadow-2xl p-6 mb-8"
          >
            <div className="col-span-1 border-r-2 border-r-gray-500">
              <h4 className="font-bold">Name</h4>
              <p className="text-green-300">Michael G. Smith</p>
            </div>
            <div className="col-span-1 pl-6">
              <h4 className="font-bold">Sports I Love to Play</h4>
              <p className="text-green-300">
                Basketball, Football, Table Tennis
              </p>
            </div>
            <div className="col-span-1 py-2 border-r-2 border-r-gray-500">
              <h4 className="font-bold">Location</h4>
              <p className="text-green-300">Atlanta, GA</p>
            </div>
            <div className="col-span-1 py-2 pl-6">
              <h4 className="font-bold">Hobbies</h4>
              <p className="text-green-300">Music, Cooking, Video games</p>
            </div>
            <div className="col-span-1 border-r-2 border-r-gray-500">
              <h4 className="font-bold">Years of Experience</h4>
              <p className="text-green-300">7+</p>
            </div>
            <div className="col-span-1 pl-6">
              <h4 className="font-bold">Movies</h4>
              <p className="text-green-300">Star Wars & Marvel</p>
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
      </div>

      {/* Service Cards */}
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default About;
