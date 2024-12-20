"use client"
// import { useEffect, useRef, useState } from "react";
// import { motion, useInView, useScroll, useTransform } from "motion/react";

// import { div } from "motion/react-client";
import { projectData } from "../../constant/constant";

const Portfolio = () => {
  return (
    <div id="skills" className=" container h-screen sm:py-32">
      <div className="flex flex-col justify-center w-full">
        <h2 className="section-title px-2">Portfolio.</h2>
        <div className="w-[80%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {projectData.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-blue-900 rounded-2xl border-4 hover:scale-105 transition-all duration-300"
              >
                {/* <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <img
                    src={project.img}
                    alt="project"
                    className="w-full sm:h-[180px] rounded-t-xl"
                  />
                  <p className="px-4 pt-4 text-base">{project.desc}</p>

                  <div className="flex flex-row justify-around bg-white py-4 text-xl">
                    {project.technologies.map((item) => (
                      <div key={item.icon} className="">
                        <span className={item.color}>{item.icon}</span>
                      </div>
                    ))}
                  </div>
                {/* </a> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
