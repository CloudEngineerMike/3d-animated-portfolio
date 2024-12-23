import React from "react";
import Tilt from "react-parallax-tilt";

import { FaPeopleGroup } from "react-icons/fa6";
import { FcPuzzle } from "react-icons/fc";
import { GiTrophyCup } from "react-icons/gi";

const WorkEthics = () => {
  return (
    <div className=" flex flex-wrap justify-center items-center w-full h-full gap-10">
      <Tilt
        tiltReverse={true}
        className="flex col-span-2 flex-col sm:text-center lg:items-start justify-center bg-indigo-900 border-2 border-green-500 rounded-[20px] shadow-2xl sm:p-8 lg:p-10 sm:max-w-[300px] lg:max-w-[400px]"
      >
        <div className="flex sm:justify-center lg:justify-start text-[50px] text-yellow-400">
          <GiTrophyCup />
        </div>
        <h2 className="sm:py-4 lg:py-6 lg:text-xl font-semibold">
          Commitment to Excellence
        </h2>
        <p className="sm:text:xs lg:text-lg">
          A trailblazer for complex projects, delivering high-quality automation and
          optimized cloud infrastructure to benefit teams and end-users.
        </p>
      </Tilt>
      <Tilt
        tiltReverse={true}
        className="flex col-span-2 flex-col sm:text-center lg:items-start justify-center bg-indigo-900 border-2 border-green-500 rounded-[20px] shadow-2xl sm:p-8 lg:p-10 sm:max-w-[300px] lg:max-w-[400px]"
      >
        <div className="flex sm:justify-center lg:justify-start text-[50px]">
          <FcPuzzle />
        </div>
        <h2 className="sm:py-4 lg:py-6 lg:text-xl font-semibold">
          Proactive Problem-Solving
        </h2>
        <p className="sm:text:xs lg:text-lg">
          I&#39;ve identified inefficiencies, automated processes, and
          modernized workflows, showing initiative and a drive for improvement.
        </p>
      </Tilt>
      <Tilt
        tiltReverse={true}
        className="flex col-span-2 flex-col sm:text-center lg:items-start justify-center bg-indigo-900 border-2 border-green-500 rounded-[20px] shadow-2xl sm:p-8 lg:p-10 sm:max-w-[300px] lg:max-w-[400px]"
      >
        <div className="flex sm:justify-center lg:justify-start text-[50px] text-blue-400">
          <FaPeopleGroup />
        </div>
        <h2 className="sm:py-4 lg:py-6 lg:text-xl font-semibold">
          Collaboration and Leadership
        </h2>
        <p className="sm:text:xs lg:text-lg">
          Demonstrated leadership by mentoring, fostering team growth, and
          maintaining high standards in projects and vetting for the hiring
          process.
        </p>
      </Tilt>
    </div>
  );
};

export default WorkEthics;
