"use client";
import { skillCards } from "../../constant/constant";
import Tilt from "react-parallax-tilt";
// import { motion, textVariant } from "motion/react";
import { styles } from "../../styles";

const cardVariants = {
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

const Skills = () => {
  return (
    <div id="skills" className=" container sm:h-full sm:pb-12 lg:py-24">
      <div className="flex flex-col justify-center w-full text-center">
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </div>

      {/* Grid layout for all cards */}
      <div className="flex flex-wrap justify-center items-center xs:gap-4 lg:gap-10 sm:w-[100%] lg:w-[90%] mx-auto xs:mt-12 md:mt-10 lg:mt-16">

        {skillCards.map((card) => {
          return (
            <Tilt
              tiltReverse={true} // Reverse the tilt direction
              key={card.id}
              className="xs:max-w-[125px] sm:max-w-[150px] md:max-w-[225px] lg:max-w-[400px] flex col-span-2 flex-col items-center justify-center bg-slate-900 border-2 border-green-500 rounded-3xl shadow-2xl xs:p-4 sm:p-8 md:p-5"
            >
              <h2 className="text-white sm:text-lg md:text-xl lg:text-3xl font-bold mb-4 text-center font-vt323">
                {card.title}
              </h2>

              <div className="flex flex-wrap justify-center items-center gap-2">
                {card.cardItems.map((item, index) => (
                  <div
                    key={index}
                    className=" flex col-span-2 justify-center items-center md:p-2 lg:p-4 border-gray-700 md:border-2 rounded-xl shadow-md md:text-sm lg:text-base"
                  >
                    <span className={item.color}>{item.icon}</span>
                    <div className="xs:hidden lg:flex">
                      <p className="ml-1 text-xs">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Tilt>
          );
        })}

      </div>
      
    </div>
  );
};

export default Skills;
