"use client";
import { skillCards } from "../../constant/constant";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";

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

const Services = () => {
  return (
    <div id="skills" className=" container h-screen sm:py-32">
      <div className="flex flex-col justify-center w-full">
        <h2 className="section-title px-2">Skills.</h2>
      </div>

      {/* Grid layout for all cards */}
      <div className="grid justify-center items-center sm:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-8 sm:gap-8 lg:gap-10 sm:w-[100%] lg:w-[90%] mx-auto sm:mt-10 md:mt-10 lg:mt-16">
        {skillCards.map((card) => {
          return (
            <Tilt
              tiltReverse={true} // Reverse the tilt direction
              key={card.id}
              className=" flex col-span-2 flex-col items-center justify-center bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl sm:p-8 md:p-5"
            >
              <h2 className="text-white md:text-lg lg:text-2xl font-bold mb-4 text-center">
                {card.title}
              </h2>

              <div className=" grid grid-cols-6 gap-2">
                {card.cardItems.map((item, index) => (
                  <div
                    key={index}
                    className=" flex col-span-2 justify-center items-center md:p-2 lg:p-4 border-gray-700 md:border-2 rounded-xl shadow-md md:text-sm lg:text-base"
                  >
                    <span className={item.color}>{item.icon}</span>
                    <div className="sm:hidden md:flex">
                      <p className="ml-1">{item.name}</p>
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

export default Services;
