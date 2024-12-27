import { motion } from "framer-motion";
import { skills } from "../../constant/constant";
import { fadeIn, textVariant } from "../../utils/motion.js";
import { div } from "motion/react-client";

const About = () => {
  return (
    // <div className="lg:pt-16  bg-white w-full h-full">

      <div className="relative z-1 h-full w-full bg-slate-950 lg:pt-16 ">
                {/* Section Heading */}
                <motion.div
          variants={textVariant()}
          className="flex flex-col justify-center text-center mb-10"
        >
          <h2 className="section-title">About Me</h2>
          {/* <p className="section-description">
            Information about me, what I do, and my current skills
          </p> */}
        </motion.div>

        <div className="max-w-[1500px] mx-auto  w-full flex xs:flex-col md:flex-row  xs:space-y-4 md:space-y-0">
          {/* Left Container */}
          <div className="z-2 xs:w-full md:w-1/2 flex flex-col xs:p-6 md:p-2 md:ml-4 lg:ml-0 lg:p-16 ">
            <h1 className="xs:text-[20px] lg:text-[24px] font-bold mb-8">
              Get to know me!
            </h1>
            <div className="xs:text-[15px] md:text-[13px] lg:text-[16px] space-y-4 leading-relaxed text-slate-300">
              <p>
                In 2016, I enrolled in the{" "}
                <a
                  href="https://www.yearup.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" italic text-yellow-300"
                >
                  Year Up United{" "}
                </a>
                program, completing six months of IT training and earning an
                internship at General Electric. This pivotal experience launched
                my career.
              </p>
              <p>
                Now, close to a decade into my career, I&#39;ve led projects
                from whiteboard and dry erase markers to completion. Starting as
                a Junior Software Engineer, I became proficient in both{" "}
                <span className="font-bold text-orange-600"> AWS</span> and
                <span className="font-bold text-blue-600"> Azure</span>{" "}
                platforms. Eventually, promoted to{" "}
                <span className="font-semibold ">
                  Sr. Software Engineer
                </span>{" "}
                in 2022, providing technical leadership, mentorship, and
                fostering team success.
              </p>
              <p>
                Over the past few years, I&#39;ve learned to build responsive
                full-stack web applications, commited to crafting scalable
                solutions that create meaningful impact.
              </p>
            </div>
            <div className="mt-8 flex xs:space-x-4 lg:space-x-6">
              <a
                href="/#contact"
                className="bg-indigo-600 rounded-md hover:scale-105 transition duration-300 shadow-xl hover:shadow-2xl"
              >
                <button className=" w-full  text-white  font-semibold tracking-wider xs:text-[10px] lg:text-xs uppercase lg:text-[15] xs:px-10 p-4">
                  Contact
                </button>
              </a>
              <a
                href="/cv.pdf"
                download="MikeGSmith_Resume"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 rounded-md hover:scale-105 transition duration-300 shadow-xl hover:shadow-2xl"
              >
                <button className=" w-full  text-white  font-semibold tracking-wider xs:text-[10px] lg:text-xs uppercase lg:text-[15] xs:px-10 p-4 ">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          {/* Right Container */}
          <div className="z-2 xs:w-full md:w-1/2 flex flex-col xs:p-6 lg:p-16 xs:pb-16">
            <h1 className="xs:text-[20px] lg:text-[24px] font-bold mb-8">
              My Skills
            </h1>
            {skills.map((card) => {
              return (
                <div
                  key={card.id}
                  className="flex flex-wrap md:justify-center md:items-center gap-2 "
                >
                  {card.cardItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex p-2 lg:p-4 border-gray-700 border rounded-xl  md:text-[14px] lg:text-base hover:scale-105 transition duration-300 shadow-sm hover:shadow-2xl "
                    >
                      <span className={item.color}>{item.icon}</span>
                      <p className="ml-1 text-xs md:text-[9px] lg:text-xs">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          
          </div></div>
        
    // </div>
  );
};

export default About;
