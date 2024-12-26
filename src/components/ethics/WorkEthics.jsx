import Tilt from "react-parallax-tilt";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcPuzzle } from "react-icons/fc";
import { GiTrophyCup } from "react-icons/gi";

const WorkEthics = () => {
  return (
    <div className="mb-12 flex flex-wrap justify-center items-center w-full h-full gap-10 lg:pb-16">
      <Tilt
        tiltReverse={true}
        className="flex col-span-2 flex-col justify-center items-center bg-indigo-900 border-2 border-green-500 rounded-[20px] shadow-2xl xs:p-8 lg:p-10 xs:max-w-[300px] lg:max-w-[400px]"
      >
        <div className="flex xs:justify-center lg:justify-start xs:text-[40px] md:text-[50px] text-yellow-400">
          <GiTrophyCup />
        </div>
        <h2 className="xs:py-2 sm:py-4 lg:py-6 xs:text-sm lg:text-xl font-semibold">
          Commitment to Excellence
        </h2>
        <p className="xs:text-xs md:text-sm lg:text-base text-center">
          A trailblazer for complex projects, delivering high-quality automation
          and optimized cloud infrastructure to benefit teams and end-users.
        </p>
      </Tilt>
      <Tilt
        tiltReverse={true}
        className="flex col-span-2 flex-col justify-center items-center bg-indigo-900 border-2 border-green-500 rounded-[20px] shadow-2xl xs:p-8 lg:p-10 xs:max-w-[300px] lg:max-w-[400px]"
      >
        <div className="flex xs:justify-center lg:justify-start xs:text-[40px] md:text-[50px] text-yellow-400">
        <FcPuzzle />
        </div>
        <h2 className="xs:py-2 sm:py-4 lg:py-6 xs:text-sm lg:text-xl font-semibold">
          Proactive Problem-Solving
        </h2>
        <p className="xs:text-xs md:text-sm lg:text-base text-center">
          I&#39;ve identified inefficiencies, automated processes, and
          modernized workflows, showing initiative and a drive for improvement.
        </p>
      </Tilt>
      <Tilt
        tiltReverse={true}
        className="flex col-span-2 flex-col justify-center items-center bg-indigo-900 border-2 border-green-500 rounded-[20px] shadow-2xl xs:p-8 lg:p-10 xs:max-w-[300px] lg:max-w-[400px]"
      >
        <div className="flex xs:justify-center lg:justify-start xs:text-[40px] md:text-[50px] text-yellow-400">
        <FaPeopleGroup />
        </div>
        <h2 className="xs:py-2 sm:py-4 lg:py-6 xs:text-sm lg:text-xl font-semibold">
          Collaboration and Leadership
        </h2>
        <p className="xs:text-xs md:text-sm lg:text-base text-center">
          Demonstrated leadership by mentoring, fostering team growth, and
          maintaining high standards in projects and vetting for the hiring
          process.
        </p>
      </Tilt>
    </div>
  );
};

export default WorkEthics;
